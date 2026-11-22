/**
 * Otter2 Premium checkout — plans + selectPlan + sendPaymentRequest
 * UI lives inside #otter2AccountMenu (index1 accountMenu + price-box parity).
 * RPC submit_payment_request; optional /api/notify-admin.
 */
(function () {
  "use strict";

  var PLANS = {
    "1month": { key: "1month", name: "1 tháng", amount: 50000, days: 30, label: "50.000 VNĐ" },
    "3month": { key: "3month", name: "3 tháng", amount: 145000, days: 90, label: "145.000 VNĐ" },
    "6month": { key: "6month", name: "6 tháng", amount: 280000, days: 180, label: "280.000 VNĐ" },
    "1year": { key: "1year", name: "1 năm", amount: 500000, days: 365, label: "500.000 VNĐ" },
    lifetime: { key: "lifetime", name: "Vĩnh viễn", amount: 2000000, days: 36500, label: "2.000.000 VNĐ" },
  };

  var dbPlanMap = {
    "1month": "1_month",
    "3month": "3_months",
    "6month": "6_months",
    "1year": "1_year",
    lifetime: "lifetime",
  };

  var selectedPlan = null;

  function $(id) {
    return document.getElementById(id);
  }

  function diag(step, payload) {
    if (typeof window.otter2DiagLog === "function") {
      window.otter2DiagLog(step, payload);
    }
  }

  function showResult(kind, text) {
    var status = $("otter2PaymentStatus");
    var sticky = $("otter2PaymentResultSticky");
    if (status) status.textContent = text || "";
    if (sticky) {
      sticky.hidden = !text;
      sticky.textContent = text || "";
      sticky.className =
        "otter2-pay-result-sticky" +
        (kind === "ok" ? " is-ok" : kind === "err" ? " is-err" : kind === "warn" ? " is-warn" : "");
      try {
        sticky.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } catch (e) {}
    }
    openAccountMenu();
    setPremiumPanelOpen(true);
  }

  function ensureTransferTimeDefault() {
    var el = $("otter2TransferTime");
    if (!el || el.value) return;
    var now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    el.value = now.toISOString().slice(0, 16);
  }

  function syncCurrentUserFromAccount() {
    if (!window.currentUser && window.otter2Account && window.otter2Account.user) {
      window.currentUser = window.otter2Account.user;
    }
    return window.currentUser || null;
  }

  function generateTransferCode() {
    var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    var code = "TTC-";
    if (window.crypto && window.crypto.getRandomValues) {
      var array = new Uint32Array(4);
      window.crypto.getRandomValues(array);
      for (var i = 0; i < 4; i++) code += chars[array[i] % chars.length];
    } else {
      for (var j = 0; j < 4; j++) code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  function copyText(text, okMsg) {
    var value = String(text || "");
    if (!value) return;
    function done() {
      var status = $("otter2PaymentStatus");
      if (status) status.textContent = okMsg || "Đã sao chép.";
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done).catch(function () {
        fallbackCopy(value, done);
      });
    } else fallbackCopy(value, done);
  }

  function fallbackCopy(value, done) {
    try {
      var ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      if (typeof done === "function") done();
    } catch (e) {}
  }

  function openAccountMenu() {
    var menu = $("otter2AccountMenu");
    var avatar = $("otter2AvatarBtn");
    var overlay = $("otter2AccountOverlay");
    if (!menu) return;
    menu.hidden = false;
    if (avatar) avatar.setAttribute("aria-expanded", "true");
    if (overlay) overlay.hidden = false;
    document.body.classList.add("otter2-account-open");
  }

  function setPremiumPanelOpen(open) {
    var box = $("otter2PriceBox");
    var menu = $("otter2AccountMenu");
    if (!box) return;
    box.hidden = !open;
    if (open) box.classList.add("ttc-premium-open");
    else box.classList.remove("ttc-premium-open");
    if (menu) {
      if (open) menu.classList.add("otter2-menu-premium-open");
      else menu.classList.remove("otter2-menu-premium-open");
    }
  }

  function openPremiumInAccount() {
    syncCurrentUserFromAccount();
    if (!window.currentUser) {
      diag("PREMIUM_SUBMIT_START", { blocked: "not_logged_in" });
      if (typeof window.otter2AccountOpenLogin === "function") {
        window.otter2AccountOpenLogin();
      } else {
        alert("Vui lòng đăng nhập trước khi đăng ký Premium.");
      }
      return;
    }
    openAccountMenu();
    setPremiumPanelOpen(true);
    ensureTransferTimeDefault();
  }

  function togglePremiumInAccount(event) {
    if (event) event.stopPropagation();
    syncCurrentUserFromAccount();
    if (!window.currentUser) {
      openPremiumInAccount();
      return;
    }
    openAccountMenu();
    var box = $("otter2PriceBox");
    var willOpen = !box || box.hidden;
    setPremiumPanelOpen(willOpen);
    if (willOpen) ensureTransferTimeDefault();
  }

  function scrollElIntoPanelView(el, block) {
    if (!el) return;
    var doScroll = function () {
      try {
        el.scrollIntoView({ behavior: "smooth", block: block || "start" });
      } catch (e) {
        try {
          el.scrollIntoView();
        } catch (e2) {}
      }
    };
    /* Defer so layout (details just opened / banner just shown) settles first,
       and so this scroll wins over showResult()'s banner scroll. */
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(function () {
        setTimeout(doScroll, 60);
      });
    } else {
      setTimeout(doScroll, 60);
    }
  }

  function clearPlanSelection() {
    selectedPlan = null;
    document.querySelectorAll("#otter2PriceBox .price-card").forEach(function (card) {
      card.classList.remove("is-on");
    });
    var box = $("otter2PaymentDetails");
    if (box) {
      box.classList.remove("is-open");
      box.style.display = "";
    }
    var planText = $("otter2SelectedPlanText");
    if (planText) planText.textContent = "";
    var amount = $("otter2PaymentAmount");
    if (amount) amount.textContent = "";
    var status = $("otter2PaymentStatus");
    if (status) status.textContent = "";
    var sticky = $("otter2PaymentResultSticky");
    if (sticky) {
      sticky.hidden = true;
      sticky.textContent = "";
      sticky.className = "otter2-pay-result-sticky";
    }
    var sendBtn = $("otter2SendPaymentBtn");
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.textContent = "📤 GỬI YÊU CẦU THANH TOÁN";
    }
    setPremiumPanelOpen(true);
    openAccountMenu();
    var list = document.querySelector("#otter2PriceBox .price-list");
    scrollElIntoPanelView(list || $("otter2PriceBox"), "start");
  }

  function selectPlan(plan) {
    var data = PLANS[plan];
    var box = $("otter2PaymentDetails");
    if (!data || !box) return;
    selectedPlan = plan;
    document.querySelectorAll("#otter2PriceBox .price-card").forEach(function (card) {
      card.classList.toggle("is-on", card.getAttribute("data-plan") === plan);
    });
    box.classList.add("is-open");
    box.style.display = "block";
    var planText = $("otter2SelectedPlanText");
    if (planText) {
      planText.textContent = "Gói đã chọn: " + data.name + " — " + data.label;
    }
    var amount = $("otter2PaymentAmount");
    if (amount) amount.textContent = data.amount.toLocaleString("vi-VN") + " VNĐ";
    var codeInput = $("otter2TransferCode");
    if (codeInput) codeInput.value = generateTransferCode();
    ensureTransferTimeDefault();
    var sendBtn = $("otter2SendPaymentBtn");
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.textContent = "📤 GỬI YÊU CẦU THANH TOÁN";
    }
    showResult(
      "warn",
      "Đã chọn gói " + data.name + " (" + dbPlanMap[plan] + ") — " + data.label + ". Kiểm tra thời gian rồi bấm Gửi."
    );
    setPremiumPanelOpen(true);
    openAccountMenu();
    /* Owner request: the payment/next-step area must appear right in front of
       the customer as soon as a plan is picked — scroll the panel to it. */
    scrollElIntoPanelView(box, "start");
  }

  /**
   * Notify Admin via serverless /api/notify-admin.
   * Same-origin first; on localhost also try production API (needs CORS).
   * Never treats network failure as payment failure.
   */
  function getNotifyEndpoints() {
    var endpoints = ["/api/notify-admin"];
    var host = String((window.location && window.location.hostname) || "").toLowerCase();
    if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") {
      endpoints.push("https://www.thichtiengtrung.io.vn/api/notify-admin");
    }
    return endpoints;
  }

  async function postNotifyAdmin(payload) {
    var endpoints = getNotifyEndpoints();
    var last = {
      ok: false,
      ntfy: false,
      error: "no_endpoint_tried",
      httpStatus: 0,
      endpoint: "",
    };
    for (var i = 0; i < endpoints.length; i++) {
      var url = endpoints[i];
      try {
        var notifyResponse = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: payload.title,
            message: payload.message,
          }),
        });
        var notifyText = await notifyResponse.text();
        var notifyResult = null;
        try {
          notifyResult = JSON.parse(notifyText);
        } catch (parseErr) {
          notifyResult = null;
        }
        last = {
          ok: !!(notifyResult && notifyResult.ok === true),
          ntfy: !!(notifyResult && notifyResult.ntfy === true),
          httpStatus: notifyResponse.status,
          endpoint: url,
          error:
            (notifyResult && notifyResult.error) ||
            (!notifyResponse.ok ? "http_" + notifyResponse.status : "invalid_response"),
        };
        if (notifyResponse.ok && last.ok && last.ntfy) {
          return last;
        }
      } catch (err) {
        last = {
          ok: false,
          ntfy: false,
          httpStatus: 0,
          endpoint: url,
          error: String((err && err.message) || err || "fetch_failed"),
        };
      }
    }
    return last;
  }

  async function sendPaymentRequest() {
    syncCurrentUserFromAccount();
    diag("PREMIUM_SUBMIT_START", {
      selectedPlan: selectedPlan,
      hasCurrentUser: !!window.currentUser,
      accountUserId: window.otter2Account && window.otter2Account.user && window.otter2Account.user.id,
      currentUserId: window.currentUser && window.currentUser.id,
    });

    if (!selectedPlan) {
      showResult("err", "⚠️ Vui lòng chọn gói thành viên.");
      return;
    }
    var planData = PLANS[selectedPlan];
    if (!planData) {
      showResult("err", "❌ Không tìm thấy thông tin gói.");
      return;
    }
    if (!window.currentUser) {
      showResult("err", "⚠️ Anh/chị cần đăng nhập tài khoản trước.");
      return;
    }
    if (!window.supabase) {
      showResult("err", "❌ Hệ thống chưa sẵn sàng. Vui lòng tải lại trang.");
      return;
    }

    var sessionUserId = null;
    try {
      var sessionCheck = await window.supabase.auth.getSession();
      var session = sessionCheck && sessionCheck.data && sessionCheck.data.session;
      if (!session) {
        diag("ACCOUNT_SESSION", { error: "session_missing_before_submit" });
        showResult("err", "⚠️ Phiên đăng nhập đã hết. Vui lòng đăng nhập lại.");
        return;
      }
      sessionUserId = session.user.id;
      window.currentUser = session.user;
      if (window.otter2Account) window.otter2Account.user = session.user;
      diag("ACCOUNT_SESSION", {
        sessionUserId: sessionUserId,
        email: session.user.email,
        expiresAt: session.expires_at || null,
        supabaseUrl: window.supabase.supabaseUrl || null,
      });
    } catch (sessionErr) {
      diag("ACCOUNT_SESSION", { error: String(sessionErr && sessionErr.message || sessionErr) });
      showResult("err", "⚠️ Không kiểm tra được phiên đăng nhập. Thử đăng nhập lại.");
      return;
    }

    var transferCode = (($("otter2TransferCode") && $("otter2TransferCode").value) || "").trim();
    var transactionId = (($("otter2TransactionId") && $("otter2TransactionId").value) || "").trim();
    ensureTransferTimeDefault();
    var transferTime = ($("otter2TransferTime") && $("otter2TransferTime").value) || "";
    var note = (($("otter2PaymentNote") && $("otter2PaymentNote").value) || "").trim();

    if (!transferCode) {
      showResult("err", "⚠️ Không tìm thấy mã chuyển khoản. Hãy chọn lại gói.");
      return;
    }
    if (!transferTime) {
      showResult("err", "⚠️ Vui lòng nhập thời gian chuyển khoản.");
      return;
    }

    var transferNote = [
      "Mã chuyển khoản: " + transferCode,
      transactionId ? "Mã giao dịch: " + transactionId : "",
      transferTime ? "Thời gian chuyển: " + transferTime : "",
      note ? "Ghi chú: " + note : "",
    ]
      .filter(Boolean)
      .join("\n");

    var dbPlan = dbPlanMap[selectedPlan];
    if (!dbPlan) {
      showResult("err", "❌ Không xác định được gói thành viên.");
      return;
    }

    if (window.__ttcPaymentSubmitInFlight) return;
    window.__ttcPaymentSubmitInFlight = true;

    showResult("warn", "⏳ Đang gửi yêu cầu...");
    var sendButton = $("otter2SendPaymentBtn");
    if (sendButton) {
      sendButton.disabled = true;
      sendButton.textContent = "⏳ ĐANG GỬI...";
    }

    var rpcPayload = {
      p_plan: dbPlan,
      p_amount: planData.amount,
      p_transfer_note: transferNote,
    };
    diag("PREMIUM_RPC_REQUEST", {
      userId: sessionUserId,
      plan: dbPlan,
      amount: planData.amount,
      noteLen: transferNote.length,
      ttc: transferCode,
    });

    try {
      var rpc = await window.supabase.rpc("submit_payment_request", rpcPayload);
      diag("PREMIUM_RPC_RESPONSE", {
        error: rpc.error && (rpc.error.message || rpc.error.code || String(rpc.error)),
        data: rpc.data,
      });
      if (rpc.error) throw rpc.error;
      var result = rpc.data || {};

      if (result.success !== true) {
        throw new Error(result.message || "Không tạo được yêu cầu thanh toán.");
      }

      diag("PAYMENT_REQUEST_CREATED", {
        action: result.action,
        requestId: result.request_id,
        plan: result.plan,
        amount: result.amount,
        status: result.status,
      });

      var notifyLine = "";
      if (result.action === "created") {
        try {
          var userEmail = (window.currentUser && window.currentUser.email) || "Không rõ email";
          var meta = (window.currentUser && window.currentUser.user_metadata) || {};
          var userName = meta.full_name || meta.name || "Thành viên";
          var userId = (window.currentUser && window.currentUser.id) || "";
          var notifyMessage =
            "🔔 CÓ YÊU CẦU THANH TOÁN MỚI\n\n" +
            "👤 Thành viên: " +
            userName +
            "\n📧 Email: " +
            userEmail +
            "\n🆔 User ID: " +
            userId +
            "\n📦 Gói: " +
            planData.name +
            " (" +
            dbPlan +
            ")\n💰 Số tiền: " +
            planData.amount.toLocaleString("vi-VN") +
            " VNĐ\n🆔 Request: " +
            String(result.request_id || "") +
            "\n🕐 Thời gian: " +
            new Date().toISOString() +
            "\n\n📝 Thông tin chuyển khoản:\n" +
            transferNote;
          diag("NTFY_REQUEST", {
            requestId: result.request_id,
            userId: userId,
            plan: dbPlan,
            amount: planData.amount,
          });
          var notifyOutcome = await postNotifyAdmin({
            title: "🔔 YÊU CẦU THANH TOÁN MỚI",
            message: notifyMessage,
          });
          diag("NTFY_RESPONSE", {
            httpStatus: notifyOutcome.httpStatus,
            ntfy: !!notifyOutcome.ntfy,
            ok: !!notifyOutcome.ok,
            endpoint: notifyOutcome.endpoint,
            error: notifyOutcome.error,
          });
          if (notifyOutcome.ok && notifyOutcome.ntfy === true) {
            notifyLine = " 🔔 ntfy OK.";
          } else {
            notifyLine =
              " ⚠️ Thông báo Admin thất bại" +
              (notifyOutcome.httpStatus ? " HTTP " + notifyOutcome.httpStatus : "") +
              (notifyOutcome.error ? " (" + notifyOutcome.error + ")" : "") +
              " — yêu cầu thanh toán vẫn đã lưu, không tạo thêm request.";
          }
        } catch (notifyErr) {
          diag("NTFY_RESPONSE", { error: String(notifyErr && notifyErr.message || notifyErr) });
          notifyLine =
            " ⚠️ Không gọi được API thông báo Admin (" +
            String((notifyErr && notifyErr.message) || notifyErr) +
            ") — yêu cầu thanh toán vẫn đã lưu, không tạo thêm request.";
        }
      }

      showResult(
        "ok",
        "✅ Đã tạo yêu cầu #" +
          String(result.request_id || "") +
          " · " +
          dbPlan +
          " · " +
          planData.amount.toLocaleString("vi-VN") +
          "đ · chờ duyệt." +
          notifyLine +
          " Có thể chọn gói và gửi yêu cầu tiếp theo ngay."
      );
      /* New TTC code for the next intentional submit (not a fixed account key). */
      var codeInput = $("otter2TransferCode");
      if (codeInput) codeInput.value = generateTransferCode();
      if (sendButton) {
        sendButton.disabled = false;
        sendButton.textContent = "📤 GỬI YÊU CẦU THANH TOÁN";
      }
      if (typeof window.otter2RefreshAccountPanels === "function") {
        window.otter2RefreshAccountPanels(window.currentUser);
      }
    } catch (err) {
      diag("PREMIUM_RPC_RESPONSE", {
        exception: true,
        message: err && (err.message || err.details || String(err)),
        code: err && err.code,
      });
      showResult(
        "err",
        "❌ Gửi thất bại: " + (err && (err.message || err.details || String(err)))
      );
      if (sendButton) {
        sendButton.disabled = false;
        sendButton.textContent = "📤 GỬI YÊU CẦU THANH TOÁN";
      }
    } finally {
      window.__ttcPaymentSubmitInFlight = false;
    }
  }

  function bindUi() {
    var box = $("otter2PriceBox");
    if (!box || box.dataset.bound === "1") return;
    box.dataset.bound = "1";

    box.querySelectorAll(".price-card[data-plan]").forEach(function (card) {
      card.addEventListener("click", function (ev) {
        ev.stopPropagation();
        selectPlan(card.getAttribute("data-plan"));
      });
      card.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          selectPlan(card.getAttribute("data-plan"));
        }
      });
    });

    var copyBtn = $("otter2CopyTransferCode");
    if (copyBtn) {
      copyBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var el = $("otter2TransferCode");
        copyText(el && el.value, "Đã sao chép mã chuyển khoản");
      });
    }

    var sendBtn = $("otter2SendPaymentBtn");
    if (sendBtn) {
      sendBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        sendPaymentRequest();
      });
    }

    var reselectBtn = $("otter2ReselectPlanBtn");
    if (reselectBtn && !reselectBtn.dataset.bound) {
      reselectBtn.dataset.bound = "1";
      reselectBtn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        clearPlanSelection();
      });
    }

    var inAccountBtn = $("otter2AccountPremiumBtn");
    if (inAccountBtn && !inAccountBtn.dataset.bound) {
      inAccountBtn.dataset.bound = "1";
      inAccountBtn.addEventListener("click", togglePremiumInAccount);
    }

    var closeInMenu = $("otter2PremiumCloseInMenu");
    if (closeInMenu && !closeInMenu.dataset.bound) {
      closeInMenu.dataset.bound = "1";
      closeInMenu.addEventListener("click", function (ev) {
        ev.stopPropagation();
        setPremiumPanelOpen(false);
      });
    }

    var premium = $("otter2PremiumBtn");
    if (premium) {
      var clone = premium.cloneNode(true);
      premium.parentNode.replaceChild(clone, premium);
      clone.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPremiumInAccount();
      });
    }
  }

  window.OTTER2_PREMIUM_PLANS = PLANS;
  window.selectPlan = selectPlan;
  window.otter2ClearPlanSelection = clearPlanSelection;
  window.sendPaymentRequest = sendPaymentRequest;
  window.otter2OpenPremiumCheckout = openPremiumInAccount;
  window.otter2TogglePremiumInAccount = togglePremiumInAccount;
  window.otter2SetPremiumPanelOpen = setPremiumPanelOpen;
  window.copyText = window.copyText || copyText;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindUi);
  } else {
    bindUi();
  }
})();
