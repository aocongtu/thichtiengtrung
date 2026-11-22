/**
 * Otter2 account bridge — index2 only.
 * Uses the same Supabase project + Auth session storage keys (shared login).
 * Calls Supabase directly from index2 — does not load or invoke index1 at runtime.
 * Account menu hosts Premium / payment / links / devices (index1 parity).
 * Classic script + dynamic import (avoids local .js MIME module issues).
 */
(function () {
  "use strict";

  var SUPABASE_URL = "https://nkwdunamzvqrldkkcajz.supabase.co";
  var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_5qAsAhRZk3pmPYtOrKAK2A_R3IlFECT";
  var TTC_DEVICE_STORAGE_KEY = "ttc_device_id_v1";
  var TTC_LINK_KEY = "ttc_oauth_link_guard_v1";
  var TTC_LINK_PROVIDERS = [
    { id: "google", name: "Google" },
    { id: "facebook", name: "Facebook" },
    { id: "apple", name: "Apple" },
    { id: "azure", name: "Microsoft" }
  ];
  var accountTrialCountdownTimer = null;

  var state = {
    user: null,
    client: null,
    deviceCheckRunning: false,
    ready: false
  };

  window.otter2Account = state;
  window.currentUser = window.currentUser || null;

  function $(id) {
    return document.getElementById(id);
  }

  function setMsg(el, text, kind) {
    if (!el) return;
    el.textContent = text || "";
    el.classList.remove("is-err", "is-ok");
    if (kind === "error") el.classList.add("is-err");
    if (kind === "success") el.classList.add("is-ok");
  }

  function displayName(user) {
    if (!user) return "Tài khoản";
    var meta = user.user_metadata || {};
    var preferred =
      meta.display_name ||
      meta.nickname ||
      meta.full_name ||
      meta.name ||
      meta.user_name ||
      meta.username;
    if (preferred && String(preferred).trim()) return String(preferred).trim();
    if (user.email) {
      var local = String(user.email).split("@")[0];
      return local || "Thành viên";
    }
    return "Thành viên";
  }

  function withTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () {
        reject(new Error("timeout"));
      }, ms || 12000);
      Promise.resolve(promise).then(
        function (v) {
          clearTimeout(timer);
          resolve(v);
        },
        function (e) {
          clearTimeout(timer);
          reject(e);
        }
      );
    });
  }

  /* ---------- Device id (same keys as index.html) ---------- */
  function getTtcDeviceId() {
    var host = String(location.hostname || "").toLowerCase();
    var useSharedDomainCookie =
      host === "thichtiengtrung.io.vn" || host.endsWith(".thichtiengtrung.io.vn");

    function readCookie() {
      var prefix = TTC_DEVICE_STORAGE_KEY + "=";
      var item = (document.cookie || "")
        .split(";")
        .map(function (part) {
          return part.trim();
        })
        .find(function (part) {
          return part.indexOf(prefix) === 0;
        });
      return item ? decodeURIComponent(item.slice(prefix.length)) : "";
    }

    function writeCookie(value) {
      var secure = location.protocol === "https:" ? "; Secure" : "";
      var domain = useSharedDomainCookie ? "; Domain=.thichtiengtrung.io.vn" : "";
      document.cookie =
        TTC_DEVICE_STORAGE_KEY +
        "=" +
        encodeURIComponent(value) +
        "; Max-Age=31536000; Path=/" +
        domain +
        "; SameSite=Lax" +
        secure;
    }

    function getOrCreate() {
      if (window.__ttcDeviceId) return window.__ttcDeviceId;
      var deviceId = readCookie();
      if (!deviceId) {
        try {
          deviceId = localStorage.getItem(TTC_DEVICE_STORAGE_KEY) || "";
        } catch (e) {}
      }
      if (!deviceId) {
        deviceId =
          window.crypto && typeof window.crypto.randomUUID === "function"
            ? window.crypto.randomUUID()
            : "ttc-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      }
      window.__ttcDeviceId = deviceId;
      try {
        localStorage.setItem(TTC_DEVICE_STORAGE_KEY, deviceId);
      } catch (e) {}
      writeCookie(deviceId);
      return deviceId;
    }

    if (navigator.locks && typeof navigator.locks.request === "function") {
      return navigator.locks.request("ttc-device-id-init-v1", { mode: "exclusive" }, function () {
        return getOrCreate();
      });
    }
    return Promise.resolve(getOrCreate());
  }

  function getTtcDeviceName() {
    var ua = navigator.userAgent || "";
    if (/iPhone/i.test(ua)) return "iPhone";
    if (/iPad/i.test(ua)) return "iPad";
    if (/Android/i.test(ua)) return "Android";
    if (/Windows/i.test(ua)) return "Windows";
    if (/Macintosh|Mac OS/i.test(ua)) return "Mac";
    return "Thiết bị khác";
  }

  async function readOwnDevices(client) {
    if (!client || typeof client.from !== "function") return null;
    var listed = await client.from("user_devices").select("device_id,device_name");
    if (listed.error) {
      listed = await client.from("user_devices").select("*");
    }
    if (listed.error || !Array.isArray(listed.data)) return null;
    return listed.data.filter(function (row) {
      return row && row.device_id;
    });
  }

  async function registerTtcDevice(client) {
    var deviceId = await getTtcDeviceId();
    var deviceName = getTtcDeviceName();

    async function callRpc() {
      var res = await client.rpc("register_user_device", {
        p_device_id: deviceId,
        p_device_name: deviceName
      });
      if (res.error) {
        console.error("Otter2 device register:", res.error);
        return { ok: false, reason: "rpc_error" };
      }
      return res.data || { ok: false, reason: "unknown" };
    }

    var result = await callRpc();
    if (result && result.reason === "device_limit") {
      var rows = await readOwnDevices(client);
      if (rows) {
        var known = rows.some(function (row) {
          return row.device_id === deviceId;
        });
        if (known) return { ok: true, reason: "already_registered" };

        var ghosts = rows.filter(function (row) {
          return row.device_id !== deviceId && row.device_name === deviceName;
        });
        for (var i = 0; i < ghosts.length; i++) {
          await client.from("user_devices").delete().eq("device_id", ghosts[i].device_id);
        }
        if (ghosts.length) {
          result = await callRpc();
          if (!result || result.reason !== "device_limit") return result;
        }

        var otherNames = {};
        rows.forEach(function (row) {
          if (row.device_id === deviceId || row.device_name === deviceName) return;
          otherNames[row.device_name || row.device_id] = true;
        });
        if (Object.keys(otherNames).length + 1 <= 5) {
          return { ok: true, reason: "same_device_released" };
        }
      }
    }
    return result;
  }

  async function unregisterTtcDevice(client) {
    var deviceId = null;
    try {
      deviceId = localStorage.getItem(TTC_DEVICE_STORAGE_KEY);
    } catch (e) {}
    if (!deviceId || !client) return;
    var res = await client.rpc("unregister_user_device", { p_device_id: deviceId });
    if (res.error) console.error("Otter2 device unregister:", res.error);
  }

  /* ---------- UI ---------- */
  function setAccountOverlay(open) {
    var overlay = $("otter2AccountOverlay");
    if (overlay) overlay.hidden = !open;
    if (open) document.body.classList.add("otter2-account-open");
    else document.body.classList.remove("otter2-account-open");
  }

  function closeMenu(force) {
    var menu = $("otter2AccountMenu");
    var btn = $("otter2AvatarBtn");
    var priceBox = $("otter2PriceBox");
    /* Keep Premium checkout open: datetime-local picker clicks land outside slot DOM. */
    if (!force && priceBox && !priceBox.hidden) {
      return;
    }
    if (priceBox && force) {
      priceBox.hidden = true;
      priceBox.classList.remove("ttc-premium-open");
    }
    if (menu) {
      menu.hidden = true;
      menu.classList.remove("otter2-menu-premium-open");
    }
    if (btn) btn.setAttribute("aria-expanded", "false");
    setAccountOverlay(false);
  }

  function openMenu() {
    var menu = $("otter2AccountMenu");
    var btn = $("otter2AvatarBtn");
    if (menu) menu.hidden = false;
    if (btn) btn.setAttribute("aria-expanded", "true");
    setAccountOverlay(true);
  }

  function toggleMenu() {
    var menu = $("otter2AccountMenu");
    if (!menu) return;
    if (menu.hidden) openMenu();
    else closeMenu();
  }

  function openAuthModal(tab) {
    var overlay = $("otter2AuthOverlay");
    if (!overlay) return;
    overlay.hidden = false;
    document.body.classList.add("otter2-auth-open");
    setAuthTab(tab || "login");
    setMsg($("otter2AuthMsg"), "", null);
    closeMenu(true);
  }

  function closeAuthModal() {
    var overlay = $("otter2AuthOverlay");
    if (overlay) overlay.hidden = true;
    document.body.classList.remove("otter2-auth-open");
  }

  function setAuthTab(tab) {
    var loginTab = $("otter2AuthLoginTab");
    var signupTab = $("otter2AuthSignupTab");
    var loginPanel = $("otter2AuthLoginPanel");
    var signupPanel = $("otter2AuthSignupPanel");
    var isLogin = tab !== "signup";
    if (loginTab) loginTab.setAttribute("aria-selected", isLogin ? "true" : "false");
    if (signupTab) signupTab.setAttribute("aria-selected", isLogin ? "false" : "true");
    if (loginPanel) loginPanel.hidden = !isLogin;
    if (signupPanel) signupPanel.hidden = isLogin;
  }

  function openPwModal() {
    var ov = $("otter2PwOverlay");
    if (ov) ov.hidden = false;
    closeMenu();
  }

  function closePwModal() {
    var ov = $("otter2PwOverlay");
    if (ov) ov.hidden = true;
    var a = $("otter2NewPassword");
    var b = $("otter2ConfirmPassword");
    if (a) a.value = "";
    if (b) b.value = "";
  }

  var PLAN_NAMES = {
    "1_month": "1 tháng",
    "3_months": "3 tháng",
    "6_months": "6 tháng",
    "1_year": "1 năm",
    lifetime: "Vĩnh viễn"
  };

  function tokyoYmd(d) {
    /* Calendar parts in Asia/Tokyo — tránh lệch ngày khi user ở Nhật */
    try {
      var parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Tokyo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).formatToParts(d);
      var y = Number((parts.find(function (p) { return p.type === "year"; }) || {}).value);
      var m = Number((parts.find(function (p) { return p.type === "month"; }) || {}).value);
      var day = Number((parts.find(function (p) { return p.type === "day"; }) || {}).value);
      return { y: y, m: m, d: day };
    } catch (e) {
      return {
        y: d.getFullYear(),
        m: d.getMonth() + 1,
        d: d.getDate()
      };
    }
  }

  function formatViDateTokyo(iso) {
    if (!iso) return "";
    var dt = new Date(iso);
    if (Number.isNaN(dt.getTime())) return "";
    return dt.toLocaleDateString("vi-VN", { timeZone: "Asia/Tokyo" });
  }

  function calendarRemaining(membership) {
    /* Port nguyên thuật toán index1 calendarRemaining + mốc lịch Tokyo */
    if (!membership) return "";
    if (membership.plan === "lifetime") return "Vĩnh viễn";
    if (!membership.end_date) return "";
    var end = new Date(membership.end_date);
    if (Number.isNaN(end.getTime()) || end.getTime() <= Date.now()) return "";
    var span = end.getTime() - Date.now();
    if (span >= 3000 * 86400000) return "Vĩnh viễn";
    var todayParts = tokyoYmd(new Date());
    var finishParts = tokyoYmd(end);
    var months =
      (finishParts.y - todayParts.y) * 12 + (finishParts.m - todayParts.m);
    var days = finishParts.d - todayParts.d;
    if (days < 0) {
      months -= 1;
      /* số ngày tháng trước của end (theo lịch Tokyo) */
      var prevMonth = finishParts.m - 1;
      var prevYear = finishParts.y;
      if (prevMonth < 1) {
        prevMonth = 12;
        prevYear -= 1;
      }
      days += new Date(prevYear, prevMonth, 0).getDate();
    }
    if (months < 0) return "";
    var parts = [];
    if (months > 0) parts.push(months + " tháng");
    if (days > 0) parts.push(days + " ngày");
    return parts.join(" ") || "Hết hạn hôm nay";
  }

  function startAccountTrialCountdown(remainingSeconds) {
    if (accountTrialCountdownTimer) {
      clearInterval(accountTrialCountdownTimer);
      accountTrialCountdownTimer = null;
    }
    var remaining = Math.max(0, Number(remainingSeconds || 0));
    function updateCountdown() {
      var box = $("accountTrialCountdown");
      if (!box) {
        clearInterval(accountTrialCountdownTimer);
        accountTrialCountdownTimer = null;
        return;
      }
      if (remaining <= 0) {
        box.textContent = "00:00:00";
        clearInterval(accountTrialCountdownTimer);
        accountTrialCountdownTimer = null;
        return;
      }
      var hours = Math.floor(remaining / 3600);
      var minutes = Math.floor((remaining % 3600) / 60);
      var seconds = Math.floor(remaining % 60);
      function pad(n) {
        return n < 10 ? "0" + n : String(n);
      }
      box.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
      remaining -= 1;
    }
    updateCountdown();
    accountTrialCountdownTimer = setInterval(updateCountdown, 1000);
  }

  function clearLoggedInPanels() {
    var premiumBtn = $("otter2AccountPremiumBtn");
    var priceBox = $("otter2PriceBox");
    var linkBox = $("otter2AccountLinkBox");
    var histBox = $("otter2PayHistoryBox");
    var deviceBox = $("otter2DeviceBox");
    var menu = $("otter2AccountMenu");
    if (premiumBtn) premiumBtn.hidden = true;
    if (priceBox) {
      priceBox.hidden = true;
      priceBox.classList.remove("ttc-premium-open");
    }
    if (menu) menu.classList.remove("otter2-menu-premium-open");
    if (linkBox) linkBox.hidden = true;
    if (histBox) histBox.hidden = true;
    if (deviceBox) deviceBox.hidden = true;
    var linkList = $("otter2AccountLinkList");
    var histList = $("otter2PayHistoryList");
    var deviceList = $("otter2DeviceList");
    if (linkList) linkList.textContent = "";
    if (histList) histList.textContent = "";
    if (deviceList) deviceList.textContent = "";
    if (accountTrialCountdownTimer) {
      clearInterval(accountTrialCountdownTimer);
      accountTrialCountdownTimer = null;
    }
  }

  async function renderAccountLinks(user) {
    var box = $("otter2AccountLinkBox");
    var list = $("otter2AccountLinkList");
    if (!box || !list || !user || !state.client || !state.client.auth) return;
    box.hidden = false;
    list.textContent = "";
    var note = document.createElement("p");
    note.className = "otter2-account-link-state";
    note.textContent = "Đang lấy trạng thái liên kết...";
    list.appendChild(note);
    try {
      var result = await state.client.auth.getUserIdentities();
      if (!window.currentUser || window.currentUser.id !== user.id) return;
      list.textContent = "";
      var linked = {};
      var identities = (result.data && result.data.identities) || [];
      if (result.error) {
        var fail = document.createElement("p");
        fail.className = "otter2-account-link-state";
        fail.textContent = "Chưa lấy được trạng thái liên kết.";
        list.appendChild(fail);
      } else {
        identities.forEach(function (identity) {
          if (identity && identity.provider && (!identity.user_id || identity.user_id === user.id)) {
            linked[identity.provider] = true;
          }
        });
      }
      TTC_LINK_PROVIDERS.forEach(function (provider) {
        var row = document.createElement("div");
        row.className = "otter2-account-link-row";
        var name = document.createElement("span");
        name.className = "otter2-account-link-name";
        name.textContent = provider.name;
        var stateEl = document.createElement("span");
        stateEl.className = "otter2-account-link-state";
        row.appendChild(name);
        row.appendChild(stateEl);
        if (linked[provider.id]) {
          stateEl.textContent = "Đã liên kết";
        } else if (result.error) {
          stateEl.textContent = "Chưa rõ";
        } else {
          stateEl.textContent = "Chưa liên kết";
          var button = document.createElement("button");
          button.type = "button";
          button.textContent = "Liên kết";
          button.addEventListener("click", function (event) {
            event.stopPropagation();
            startAccountLink(provider.id, button, stateEl);
          });
          row.appendChild(button);
        }
        list.appendChild(row);
      });
    } catch (e) {
      list.textContent = "";
      var err = document.createElement("p");
      err.className = "otter2-account-link-state";
      err.textContent = "Chưa lấy được trạng thái liên kết.";
      list.appendChild(err);
    }
  }

  async function startAccountLink(providerId, button, stateEl) {
    if (!state.client || !window.currentUser) return;
    try {
      sessionStorage.setItem(
        TTC_LINK_KEY,
        JSON.stringify({ userId: window.currentUser.id, provider: providerId, at: Date.now() })
      );
    } catch (e) {}
    if (button) button.disabled = true;
    if (stateEl) stateEl.textContent = "Đang mở...";
    try {
      var redirectTo = window.location.origin + window.location.pathname;
      var res = await state.client.auth.linkIdentity({
        provider: providerId,
        options: { redirectTo: redirectTo }
      });
      if (res.error) throw res.error;
    } catch (err) {
      console.warn("Otter2 link identity:", err);
      if (stateEl) stateEl.textContent = "Liên kết thất bại";
      if (button) button.disabled = false;
      try {
        sessionStorage.removeItem(TTC_LINK_KEY);
      } catch (e2) {}
    }
  }

  async function loadPaymentHistory(user) {
    /* User-facing payment history UI removed; keep no-op for callers. */
    var box = $("otter2PayHistoryBox");
    var list = $("otter2PayHistoryList");
    if (box) box.hidden = true;
    if (list) {
      list.hidden = true;
      list.innerHTML = "";
    }
  }

  async function loadDeviceList(user) {
    var box = $("otter2DeviceBox");
    var list = $("otter2DeviceList");
    if (!box || !list || !user || !state.client) return;
    box.hidden = false;
    list.textContent = "Đang tải...";
    try {
      var res = await withTimeout(
        state.client
          .from("user_devices")
          .select("device_id,device_name,last_seen")
          .eq("user_id", user.id)
          .order("last_seen", { ascending: false })
          .limit(12),
        10000
      );
      if (!window.currentUser || window.currentUser.id !== user.id) return;
      list.textContent = "";
      if (res.error) {
        list.textContent = "Không tải được danh sách thiết bị.";
        return;
      }
      var rows = res.data || [];
      var curId = "";
      try {
        curId = localStorage.getItem(TTC_DEVICE_STORAGE_KEY) || "";
      } catch (e) {}
      if (!rows.length) {
        list.textContent = "Chưa ghi nhận thiết bị.";
        return;
      }
      var note = document.createElement("div");
      note.className = "otter2-device-row";
      note.textContent = "Giới hạn: tối đa 6 thiết bị · đang dùng " + rows.length + "/6";
      list.appendChild(note);
      rows.forEach(function (row) {
        var el = document.createElement("div");
        el.className = "otter2-device-row";
        var name = row.device_name || row.device_id || "Thiết bị";
        var seen = row.last_seen ? new Date(row.last_seen).toLocaleString("vi-VN") : "";
        var mine = curId && row.device_id === curId ? " (thiết bị này)" : "";
        el.textContent = "💻 " + name + mine + (seen ? " · " + seen : "");
        list.appendChild(el);
      });
    } catch (e) {
      list.textContent = "Không tải được danh sách thiết bị.";
    }
  }

  async function refreshMembershipStatus(user) {
    var statusEl = $("otter2AccountStatus");
    if (!statusEl || !user || !state.client) {
      if (statusEl) statusEl.textContent = user ? "Đã đăng nhập" : "Chưa đăng nhập";
      return;
    }
    statusEl.innerHTML = "⏳ Đang tải thông tin...";
    try {
      var membershipResult = await withTimeout(
        state.client
          .from("memberships")
          .select("status,plan,end_date,start_date,created_at,amount")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(5),
        12000
      );
      var data = membershipResult.data;
      var error = membershipResult.error;
      if (error) throw error;

      if (data && data.length) {
        var now = Date.now();
        var active = null;
        for (var i = 0; i < data.length; i++) {
          var row = data[i];
          if (String(row.status || "") !== "active") continue;
          if (typeof window.ttcMembershipRowIsPremium === "function") {
            if (window.ttcMembershipRowIsPremium(row, now)) {
              active = row;
              break;
            }
          } else if (row.plan === "lifetime" || (row.end_date && new Date(row.end_date).getTime() > now)) {
            active = row;
            break;
          }
        }
        if (active) {
          var planLabel = PLAN_NAMES[active.plan] || active.plan || "Không xác định";
          var remain = calendarRemaining(active);
          var endDate = active.end_date
            ? formatViDateTokyo(active.end_date)
            : active.plan === "lifetime"
              ? "Không hết hạn"
              : "Không xác định";
          var startDate = active.start_date
            ? formatViDateTokyo(active.start_date)
            : active.created_at
              ? formatViDateTokyo(active.created_at)
              : "";
          if (active.plan === "lifetime" || remain === "Vĩnh viễn") {
            statusEl.innerHTML =
              "💎 <b>THÀNH VIÊN PREMIUM</b><br>" +
              "📦 Gói đăng ký: <b>Vĩnh viễn</b><br>" +
              "⏱️ Thời hạn còn lại: <b>Vĩnh viễn</b><br>" +
              (startDate ? "🗓️ Ngày bắt đầu: <b>" + startDate + "</b><br>" : "") +
              "📅 Ngày hết hạn: <b>Không hết hạn</b>";
            return;
          }
          if (!remain) {
            statusEl.innerHTML =
              "⌛ <b>PREMIUM ĐÃ HẾT HẠN</b><br>" +
              "📦 Gói đăng ký: <b>" + planLabel + "</b><br>" +
              (startDate ? "🗓️ Ngày bắt đầu: <b>" + startDate + "</b><br>" : "") +
              "📅 Ngày hết hạn: <b>" + endDate + "</b>";
            return;
          }
          statusEl.innerHTML =
            "💎 <b>THÀNH VIÊN PREMIUM</b><br>" +
            "📦 Gói đăng ký: <b>" + planLabel + "</b><br>" +
            "⏱️ Thời hạn còn lại: <b>" + remain + "</b><br>" +
            (startDate ? "🗓️ Ngày bắt đầu: <b>" + startDate + "</b><br>" : "") +
            "📅 Ngày hết hạn: <b>" + endDate + "</b>";
          return;
        }
        if (data[0] && data[0].status === "pending") {
          statusEl.innerHTML =
            "⏳ <b>ĐANG CHỜ XÁC NHẬN</b><br>" +
            "📦 Gói: <b>" +
            (PLAN_NAMES[data[0].plan] || data[0].plan || "?") +
            "</b><br>Yêu cầu đăng ký đang được xử lý.";
          return;
        }
      }

      var pending = await withTimeout(
        state.client
          .from("payment_requests")
          .select("id,status,plan,amount,created_at")
          .eq("user_id", user.id)
          .eq("status", "pending")
          .order("created_at", { ascending: false })
          .limit(1),
        8000
      );
      if (!pending.error && pending.data && pending.data.length) {
        var pr = pending.data[0];
        statusEl.innerHTML =
          "⏳ <b>ĐANG CHỜ XÁC NHẬN THANH TOÁN</b><br>" +
          "🆔 Mã yêu cầu: <b>#" +
          pr.id +
          "</b><br>" +
          "📦 Gói: <b>" +
          (PLAN_NAMES[pr.plan] || pr.plan || "?") +
          "</b><br>" +
          "💰 Số tiền: <b>" +
          Number(pr.amount || 0).toLocaleString("vi-VN") +
          "đ</b>";
        return;
      }

      if (typeof window.checkFreeTrial === "function") {
        var trial = await window.checkFreeTrial();
        if (trial && trial.allowed && Number(trial.remaining) > 0) {
          statusEl.innerHTML =
            "🎁 <b>HỌC THỬ PREMIUM</b><br>" +
            "⏱️ Còn lại: <b id=\"accountTrialCountdown\">Đang tính...</b><br>" +
            "🎓 HSK 1–2: <b>Miễn phí</b>";
          startAccountTrialCountdown(trial.remaining);
          return;
        }
      }

      statusEl.innerHTML =
        "⏰ <b>TÀI KHOẢN MIỄN PHÍ</b><br>" +
        "🎓 HSK 1–2: <b>Miễn phí</b><br>" +
        "💎 HSK 3–9: <b>Premium</b>";
    } catch (e) {
      console.warn("Otter2 membership:", e);
      statusEl.innerHTML = "⚠️ Chưa tải được thông tin tài khoản.<br>Bạn vẫn đang đăng nhập.";
    }
  }

  async function refreshAccountPanels(user) {
    if (!user) {
      clearLoggedInPanels();
      return;
    }
    await refreshMembershipStatus(user);
    await Promise.all([
      renderAccountLinks(user),
      loadPaymentHistory(user),
      loadDeviceList(user)
    ]);
    /* Admin duyệt Premium chỉ trên admin.html — không gắn panel Admin trong index2 */
  }

  function updateAccountUI(user) {
    state.user = user || null;
    window.currentUser = state.user;

    if (typeof window.otter2DiagLog === "function") {
      window.otter2DiagLog("ACCOUNT_SESSION", {
        hasUser: !!user,
        userId: user && user.id,
        email: user && user.email,
        supabaseUrl: state.client && state.client.supabaseUrl,
        avatar: ($("otter2AvatarBtn") && $("otter2AvatarBtn").textContent) || null,
      });
    }

    var avatar = $("otter2AvatarBtn");
    var nameEl = $("otter2AccountName");
    var statusEl = $("otter2AccountStatus");
    var loginBtn = $("otter2OpenLoginBtn");
    var logoutBtn = $("otter2LogoutBtn");
    var pwBtn = $("otter2ChangePwBtn");
    var premiumBtn = $("otter2AccountPremiumBtn");

    if (!user) {
      if (avatar) {
        avatar.textContent = "Tài khoản";
        avatar.classList.remove("is-authed");
        avatar.setAttribute("aria-label", "Tài khoản");
      }
      if (nameEl) nameEl.textContent = "Khách";
      if (statusEl) statusEl.textContent = "Chưa đăng nhập";
      if (loginBtn) loginBtn.hidden = false;
      if (logoutBtn) logoutBtn.hidden = true;
      if (pwBtn) pwBtn.hidden = true;
      if (premiumBtn) premiumBtn.hidden = true;
      clearLoggedInPanels();
      return;
    }

    var label = displayName(user);
    if (avatar) {
      avatar.textContent = label;
      avatar.classList.add("is-authed");
      avatar.setAttribute("aria-label", "Tài khoản " + label);
      avatar.title = label;
    }
    if (nameEl) nameEl.textContent = "👤 " + label;
    if (loginBtn) loginBtn.hidden = true;
    if (logoutBtn) logoutBtn.hidden = false;
    if (pwBtn) pwBtn.hidden = false;
    if (premiumBtn) premiumBtn.hidden = false;
    refreshAccountPanels(user);
  }

  window.otter2RefreshAccountPanels = refreshAccountPanels;
  window.otter2CalendarRemaining = calendarRemaining;
  window.otter2FormatViDateTokyo = formatViDateTokyo;
  window.otter2PlanNames = PLAN_NAMES;

  async function handleSession(session) {
    if (state.deviceCheckRunning) return;
    var client = state.client;
    if (!session) {
      updateAccountUI(null);
      return;
    }
    state.deviceCheckRunning = true;
    try {
      var deviceResult = await registerTtcDevice(client);
      if (deviceResult && deviceResult.reason === "device_limit") {
        console.warn("Otter2 device blocked:", deviceResult);
        await client.auth.signOut({ scope: "local" });
        updateAccountUI(null);
        setMsg(
          $("otter2AuthMsg"),
          "Tài khoản đã dùng đủ 6 thiết bị. Hãy đăng xuất một thiết bị cũ trước.",
          "error"
        );
        openAuthModal("login");
        return;
      }
      if (!deviceResult || !deviceResult.ok) {
        console.warn("Otter2: bỏ qua lỗi kiểm tra thiết bị, vẫn giữ đăng nhập.", deviceResult);
      }
      updateAccountUI(session.user);
      closeAuthModal();
    } catch (err) {
      console.error("Otter2 device check:", err);
      updateAccountUI(session.user);
    } finally {
      state.deviceCheckRunning = false;
    }
  }

  function normalizeEmail(raw) {
    return String(raw || "").trim().toLowerCase();
  }

  function diag(step, payload) {
    if (typeof window.otter2DiagLog === "function") {
      window.otter2DiagLog(step, payload || {});
    }
  }

  function mapLoginError(error) {
    var msg = String((error && error.message) || "");
    var lower = msg.toLowerCase();
    var code = String((error && (error.code || error.status)) || "");
    if (
      lower.indexOf("email not confirmed") >= 0 ||
      lower.indexOf("not confirmed") >= 0 ||
      code === "email_not_confirmed"
    ) {
      return {
        kind: "email_not_confirmed",
        text:
          "📧 Tài khoản này chưa sẵn sàng để đăng nhập. Bạn nhắn Page Thích Tiếng Trung 3.0 để đội hỗ trợ kiểm tra giúp nhé."
      };
    }
    if (
      lower.indexOf("invalid login credentials") >= 0 ||
      lower.indexOf("invalid credentials") >= 0
    ) {
      return {
        kind: "invalid_credentials",
        text: "Email hoặc mật khẩu không đúng. Hãy kiểm tra lại, hoặc dùng Quên mật khẩu nếu bạn không nhớ mật khẩu."
      };
    }
    if (lower.indexOf("too many requests") >= 0) {
      return { kind: "rate_limit", text: "Thử quá nhiều lần. Vui lòng đợi một lát rồi thử lại." };
    }
    return {
      kind: "other",
      text: "Đăng nhập thất bại: " + (msg || "lỗi không xác định") + "."
    };
  }

  async function loginUser() {
    var email = normalizeEmail(($("otter2LoginEmail") || {}).value || "");
    var password = String(($("otter2LoginPassword") || {}).value || "");
    var msg = $("otter2AuthMsg");
    var btn = $("otter2LoginSubmit");
    if ($("otter2LoginEmail")) $("otter2LoginEmail").value = email;
    diag("LOGIN_START", { email: email, hasPassword: !!password });
    if (!email || !password) {
      setMsg(msg, "Vui lòng nhập email và mật khẩu.", "error");
      return;
    }
    if (!state.client || !state.client.auth) {
      setMsg(msg, "Chưa kết nối được máy chủ đăng nhập.", "error");
      return;
    }
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Đang đăng nhập…";
    }
    try {
      var signed = await state.client.auth.signInWithPassword({
        email: email,
        password: password
      });
      diag("LOGIN_RESPONSE", {
        error: signed.error && signed.error.message,
        code: signed.error && (signed.error.code || signed.error.status),
        hasSession: !!(signed.data && signed.data.session),
        userId: signed.data && signed.data.user && signed.data.user.id
      });
      if (signed.error) {
        var mapped = mapLoginError(signed.error);
        setMsg(msg, mapped.text, "error");
        return;
      }
      var session = signed.data && signed.data.session;
      diag("LOGIN_SESSION", {
        userId: session && session.user && session.user.id,
        email: session && session.user && session.user.email,
        expiresAt: session && session.expires_at
      });
      if (!session) {
        setMsg(msg, "Đăng nhập chưa hoàn tất. Hãy thử lại sau giây lát.", "error");
        return;
      }
      setMsg(msg, "Đăng nhập thành công!", "success");
      var resendBtn = $("otter2ResendConfirmBtn");
      if (resendBtn) resendBtn.remove();
      /* onAuthStateChange / handleSession will update UI */
      try {
        await handleSession(session);
      } catch (postErr) {
        diag("PROFILE_LOAD_RESPONSE", {
          error: String(postErr && postErr.message || postErr),
          note: "auth_ok_post_login_ui_failed"
        });
        setMsg(
          msg,
          "Đã đăng nhập Auth nhưng tải thông tin tài khoản gặp lỗi. Session vẫn còn — hãy đóng/mở lại khung Tài khoản.",
          "error"
        );
      }
    } catch (e) {
      diag("LOGIN_RESPONSE", { exception: String(e && e.message || e) });
      setMsg(msg, "Chưa kết nối được máy chủ đăng nhập. Hãy tải lại trang.", "error");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Đăng nhập";
      }
    }
  }

  async function signupUser() {
    var name = String(($("otter2SignupName") || {}).value || "").trim();
    var phone = String(($("otter2SignupPhone") || {}).value || "").trim();
    var email = normalizeEmail(($("otter2SignupEmail") || {}).value || "");
    var password = String(($("otter2SignupPassword") || {}).value || "");
    var msg = $("otter2AuthMsg");
    var btn = $("otter2SignupSubmit");
    if ($("otter2SignupEmail")) $("otter2SignupEmail").value = email;
    diag("SIGNUP_START", { email: email, nameLen: name.length, hasPhone: !!phone });
    if (!name || !email || !password) {
      setMsg(msg, "Vui lòng nhập họ tên, email và mật khẩu.", "error");
      return;
    }
    if (password.length < 6) {
      setMsg(msg, "Mật khẩu tối thiểu 6 ký tự.", "error");
      return;
    }
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Đang tạo…";
    }
    try {
      var res = await state.client.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            display_name: name,
            full_name: name,
            phone: phone
          },
          emailRedirectTo:
            window.location && window.location.origin
              ? window.location.origin + window.location.pathname
              : undefined
        }
      });
      diag("SIGNUP_RESPONSE", {
        error: res.error && res.error.message,
        userId: res.data && res.data.user && res.data.user.id,
        hasSession: !!(res.data && res.data.session),
        identities:
          res.data &&
          res.data.user &&
          Array.isArray(res.data.user.identities)
            ? res.data.user.identities.length
            : null
      });
      if (res.error) {
        var errorText = String(res.error.message || "").toLowerCase();
        if (
          errorText.indexOf("ttc_nickname_taken") >= 0 ||
          errorText.indexOf("database error saving new user") >= 0
        ) {
          setMsg(msg, "Nickname này đã được sử dụng. Hãy chọn tên khác.", "error");
        } else if (errorText.indexOf("already registered") >= 0 || errorText.indexOf("already been registered") >= 0) {
          setMsg(msg, "Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.", "error");
          setAuthTab("login");
          if ($("otter2LoginEmail")) $("otter2LoginEmail").value = email;
        } else {
          setMsg(msg, res.error.message || "Không tạo được tài khoản.", "error");
        }
        return;
      }

      var user = res.data && res.data.user;
      var session = res.data && res.data.session;
      diag("SIGNUP_AUTH_USER", {
        userId: user && user.id,
        email: user && user.email,
        emailConfirmedAt: user && user.email_confirmed_at,
        hasSession: !!session
      });

      /* Supabase: user exists but identities=[] often means "already registered" soft response */
      var identities = (user && user.identities) || [];
      if (user && identities.length === 0 && !session) {
        setMsg(
          msg,
          "Email này đã được đăng ký trước đó. Hãy đăng nhập để tiếp tục học nhé.",
          "error"
        );
        setAuthTab("login");
        if ($("otter2LoginEmail")) $("otter2LoginEmail").value = email;
        return;
      }

      if (!session) {
        diag("SIGNUP_NO_SESSION", {
          email: email,
          userId: user && user.id
        });
        setMsg(
          msg,
          "✅ Tài khoản đã được tạo. Hãy đăng nhập để bắt đầu học nhé!",
          "success"
        );
        setAuthTab("login");
        if ($("otter2LoginEmail")) $("otter2LoginEmail").value = email;
        if ($("otter2LoginPassword")) $("otter2LoginPassword").value = "";
        return;
      }

      setMsg(msg, "Tạo tài khoản và đăng nhập thành công!", "success");
      try {
        await handleSession(session);
      } catch (postErr) {
        diag("PROFILE_CREATE_RESPONSE", {
          error: String(postErr && postErr.message || postErr),
          note: "signup_session_ok_ui_failed"
        });
      }
    } catch (e) {
      diag("SIGNUP_RESPONSE", { exception: String(e && e.message || e) });
      setMsg(msg, "Không tạo được tài khoản. Thử lại sau.", "error");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Tạo tài khoản";
      }
    }
  }

  async function logoutUser() {
    try {
      await unregisterTtcDevice(state.client);
    } catch (e) {}
    try {
      await state.client.auth.signOut({ scope: "local" });
    } catch (e) {
      console.error("Otter2 signOut:", e);
    }
    updateAccountUI(null);
    closeMenu(true);
  }

  async function changePassword() {
    var a = ($("otter2NewPassword") || {}).value || "";
    var b = ($("otter2ConfirmPassword") || {}).value || "";
    var msg = $("otter2PwMsg");
    if (a.length < 6) {
      setMsg(msg, "Mật khẩu mới phải có ít nhất 6 ký tự.", "error");
      return;
    }
    if (a !== b) {
      setMsg(msg, "Hai mật khẩu không giống nhau.", "error");
      return;
    }
    var btn = $("otter2SavePassword");
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Đang lưu…";
    }
    try {
      var res = await state.client.auth.updateUser({ password: a });
      if (res.error) {
        setMsg(msg, "Không thể đổi mật khẩu. Vui lòng thử lại.", "error");
        return;
      }
      setMsg(msg, "Đã đổi mật khẩu thành công!", "success");
      setTimeout(closePwModal, 700);
    } catch (e) {
      setMsg(msg, "Không thể đổi mật khẩu. Vui lòng thử lại.", "error");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Lưu mật khẩu";
      }
    }
  }

  function bindUi() {
    var avatar = $("otter2AvatarBtn");
    if (avatar) {
      avatar.addEventListener("click", function (ev) {
        ev.stopPropagation();
        toggleMenu();
      });
    }
    var accountClose = $("otter2AccountCloseBtn");
    if (accountClose && !accountClose.dataset.otter2Bound) {
      accountClose.dataset.otter2Bound = "1";
      accountClose.addEventListener("click", function (ev) {
        ev.stopPropagation();
        closeMenu(true);
      });
    }
    var accountOverlay = $("otter2AccountOverlay");
    if (accountOverlay && !accountOverlay.dataset.otter2Bound) {
      accountOverlay.dataset.otter2Bound = "1";
      accountOverlay.addEventListener("click", function () {
        closeMenu(true);
      });
    }
    var accountMenu = $("otter2AccountMenu");
    if (accountMenu && !accountMenu.dataset.otter2Bound) {
      accountMenu.dataset.otter2Bound = "1";
      accountMenu.addEventListener("click", function (ev) {
        ev.stopPropagation();
      });
    }
    document.addEventListener("click", function (ev) {
      var slot = $("otter2AccountSlot");
      var menu = $("otter2AccountMenu");
      var priceBox = $("otter2PriceBox");
      if (priceBox && !priceBox.hidden) return;
      if (menu && !menu.hidden && menu.contains(ev.target)) return;
      if (ev.target && ev.target.id === "otter2AvatarBtn") return;
      if (slot && slot.contains(ev.target)) return;
      if (menu && !menu.hidden) closeMenu(false);
    });

    var openLogin = $("otter2OpenLoginBtn");
    if (openLogin) openLogin.addEventListener("click", function () {
      openAuthModal("login");
    });
    var logout = $("otter2LogoutBtn");
    if (logout) logout.addEventListener("click", logoutUser);
    var pw = $("otter2ChangePwBtn");
    if (pw) pw.addEventListener("click", openPwModal);

    var closeAuth = $("otter2AuthClose");
    if (closeAuth) closeAuth.addEventListener("click", closeAuthModal);
    var overlay = $("otter2AuthOverlay");
    if (overlay) {
      overlay.addEventListener("click", function (ev) {
        if (ev.target === overlay) closeAuthModal();
      });
    }
    var loginTab = $("otter2AuthLoginTab");
    var signupTab = $("otter2AuthSignupTab");
    if (loginTab) loginTab.addEventListener("click", function () {
      setAuthTab("login");
    });
    if (signupTab) signupTab.addEventListener("click", function () {
      setAuthTab("signup");
    });
    var loginSubmit = $("otter2LoginSubmit");
    if (loginSubmit) loginSubmit.addEventListener("click", loginUser);
    var signupSubmit = $("otter2SignupSubmit");
    if (signupSubmit) signupSubmit.addEventListener("click", signupUser);
    ["otter2LoginEmail", "otter2LoginPassword"].forEach(function (id) {
      var field = $(id);
      if (!field) return;
      field.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") {
          ev.preventDefault();
          loginUser();
        }
      });
    });

    var closePw = $("otter2PwClose");
    if (closePw) closePw.addEventListener("click", closePwModal);
    var pwOverlay = $("otter2PwOverlay");
    if (pwOverlay) {
      pwOverlay.addEventListener("click", function (ev) {
        if (ev.target === pwOverlay) closePwModal();
      });
    }
    var savePw = $("otter2SavePassword");
    if (savePw) savePw.addEventListener("click", changePassword);

    var premium = $("otter2PremiumBtn");
    if (premium && !premium.dataset.otter2PremiumBound) {
      premium.dataset.otter2PremiumBound = "1";
      premium.addEventListener("click", function () {
        if (typeof window.otter2OpenPremiumCheckout === "function") {
          window.otter2OpenPremiumCheckout();
          return;
        }
        alert("👑 Giao diện Premium đang tải. Vui lòng thử lại sau giây lát.");
      });
    }

    /* Chat Online: không gắn alert/redirect — engine thật nằm ở otter2-chat.js */
  }

  async function boot(createClient) {
    bindUi();
    updateAccountUI(null);

    /* Same project + publishable key as index.html → shared Auth localStorage session */
    var client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    state.client = client;
    window.supabase = client;

    client.auth.onAuthStateChange(function (event, session) {
      diag("AUTH_STATE_CHANGED", {
        event: event,
        hasSession: !!session,
        userId: session && session.user && session.user.id
      });
      if (session) {
        setTimeout(function () {
          handleSession(session);
        }, 0);
      } else {
        updateAccountUI(null);
      }
    });

    try {
      var sessionResult = await withTimeout(client.auth.getSession(), 12000);
      var session = sessionResult && sessionResult.data && sessionResult.data.session;
      if (session) await handleSession(session);
      else updateAccountUI(null);
    } catch (e) {
      console.error("Otter2 session check:", e);
      updateAccountUI(null);
    }

    state.ready = true;
  }

  window.otter2AccountOpenLogin = function () {
    openAuthModal("login");
  };

  import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm")
    .then(function (mod) {
      return boot(mod.createClient);
    })
    .catch(function (err) {
      console.error("Otter2 account boot failed:", err);
      bindUi();
      updateAccountUI(null);
    });
})();
