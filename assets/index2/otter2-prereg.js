/* ============================================================
   GHI DANH TRƯỚC (pre-registration) — Thích Tiếng Trung 3.0
   Module tạm thời trong thời gian hệ thống tài khoản bảo trì tới 5/12/2026:
   hiện banner thông báo + form ghi danh gửi về email quản trị qua
   FormSubmit (không qua hệ thống tài khoản). Tự nghỉ hưu: sau 6/12/2026
   (giờ Việt Nam) module không render gì nữa.
   Chỉ dùng 2 khoá localStorage riêng:
     otter2_prereg_banner_off_v1 · otter2_prereg_done_v1
   ============================================================ */
(function () {
  "use strict";

  var LS_BANNER_OFF = "otter2_prereg_banner_off_v1";
  var LS_DONE = "otter2_prereg_done_v1";
  var ENDPOINT = "https://formsubmit.co/ajax/aocongtu34@gmail.com";
  var FB_PAGE = "https://www.facebook.com/thich.tieng.trung.3.0";
  var RETIRE_AFTER = 20261206; /* YYYYMMDD theo giờ Asia/Ho_Chi_Minh */

  function lsGet(k) {
    try { return window.localStorage.getItem(k); } catch (e) { return null; }
  }
  function lsSet(k, v) {
    try { window.localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ }
  }

  /* Ngày hiện tại theo giờ Việt Nam dạng YYYYMMDD (số) */
  function vnTodayNumber() {
    try {
      var parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Ho_Chi_Minh",
        year: "numeric", month: "2-digit", day: "2-digit"
      }).formatToParts(new Date());
      var y = "", m = "", d = "";
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === "year") y = parts[i].value;
        else if (parts[i].type === "month") m = parts[i].value;
        else if (parts[i].type === "day") d = parts[i].value;
      }
      return parseInt(y + m + d, 10);
    } catch (e) {
      var n = new Date();
      return n.getFullYear() * 10000 + (n.getMonth() + 1) * 100 + n.getDate();
    }
  }

  function injectCSS() {
    if (document.getElementById("ttcPreregStyle")) return;
    var css = [
      "#ttcPreregBanner{position:sticky;top:0;z-index:50000;background:#16283F;color:#fff;",
      "font-family:inherit;font-size:14px;line-height:1.45;box-shadow:0 1px 6px rgba(15,23,42,.25)}",
      ".ttc-prereg-banner-in{max-width:1100px;margin:0 auto;padding:9px 12px;display:flex;",
      "align-items:center;gap:10px;flex-wrap:wrap}",
      ".ttc-prereg-banner-txt{flex:1 1 260px;min-width:200px}",
      "#ttcPreregOpenBtn{background:#F97316;color:#fff;border:0;border-radius:999px;",
      "padding:8px 16px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:inherit}",
      "#ttcPreregOpenBtn:hover{background:#EA580C}",
      "#ttcPreregOpenBtn[disabled]{background:#64748B;cursor:default}",
      "#ttcPreregCloseX{background:transparent;color:#CBD5E1;border:0;font-size:20px;line-height:1;",
      "cursor:pointer;padding:4px 6px;font-family:inherit}",
      "#ttcPreregCloseX:hover{color:#fff}",
      "#ttcPreregModal{position:fixed;inset:0;z-index:50010;background:rgba(15,23,42,.55);",
      "display:none;align-items:center;justify-content:center;padding:16px;font-family:inherit}",
      "#ttcPreregModal.ttc-prereg-open{display:flex}",
      ".ttc-prereg-card{background:#fff;color:#3C4756;border:1px solid #E3E8EF;border-radius:16px;",
      "max-width:420px;width:100%;max-height:92vh;overflow:auto;padding:22px 20px;position:relative;",
      "box-shadow:0 18px 50px rgba(15,23,42,.35)}",
      ".ttc-prereg-card h2{margin:0 28px 8px 0;font-size:20px;color:#16283F}",
      ".ttc-prereg-sub{margin:0 0 16px;font-size:14px;line-height:1.55}",
      "#ttcPreregModalClose{position:absolute;top:10px;right:12px;background:transparent;border:0;",
      "font-size:22px;line-height:1;color:#64748B;cursor:pointer;font-family:inherit}",
      ".ttc-prereg-field{margin:0 0 13px}",
      ".ttc-prereg-field label{display:block;font-size:13.5px;font-weight:600;color:#16283F;margin:0 0 5px}",
      ".ttc-prereg-field input[type=text],.ttc-prereg-field input[type=email]{width:100%;box-sizing:border-box;",
      "padding:11px 12px;border:1px solid #E3E8EF;border-radius:10px;font-size:15px;font-family:inherit;color:#16283F}",
      ".ttc-prereg-field input:focus{outline:2px solid #F97316;outline-offset:0;border-color:#F97316}",
      ".ttc-prereg-check{display:flex;gap:8px;align-items:flex-start;font-size:14px;margin:2px 0 16px;cursor:pointer}",
      ".ttc-prereg-check input{margin-top:2px;width:17px;height:17px;accent-color:#F97316}",
      "#ttcPreregSubmit{width:100%;background:#F97316;color:#fff;border:0;border-radius:999px;",
      "padding:12px 18px;font-size:15.5px;font-weight:700;cursor:pointer;font-family:inherit}",
      "#ttcPreregSubmit:hover{background:#EA580C}",
      "#ttcPreregSubmit[disabled]{background:#94A3B8;cursor:wait}",
      "#ttcPreregError{display:none;background:#FEF2F2;border:1px solid #FECACA;color:#991B1B;",
      "border-radius:10px;padding:10px 12px;font-size:13.5px;line-height:1.55;margin:0 0 13px}",
      "#ttcPreregError a{color:#16283F;font-weight:700}",
      ".ttc-prereg-success{text-align:center;font-size:15.5px;line-height:1.65;color:#16283F;padding:8px 2px 2px}",
      "#ttcPreregDoneClose{margin-top:16px;background:#16283F;color:#fff;border:0;border-radius:999px;",
      "padding:11px 26px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit}"
    ].join("");
    var st = document.createElement("style");
    st.id = "ttcPreregStyle";
    st.textContent = css;
    document.head.appendChild(st);
  }

  function buildBanner() {
    var banner = document.createElement("div");
    banner.id = "ttcPreregBanner";
    var done = lsGet(LS_DONE) === "1";
    banner.innerHTML =
      '<div class="ttc-prereg-banner-in">' +
        '<span class="ttc-prereg-banner-txt">🔧 Hệ thống tài khoản đang bảo trì tới 5/12 — ' +
        'bạn vẫn học bình thường nhé, tiến độ được lưu ngay trên máy của bạn.<br>' +
        '🎁 Bé mở MIỄN PHÍ toàn bộ truyện Premium tới hết 5/12 — bạn cứ vào xem thoải mái, không cần đăng nhập!</span>' +
        '<button type="button" id="ttcPreregOpenBtn"' + (done ? " disabled" : "") + '>' +
        (done ? "Đã ghi danh ✓" : "Ghi danh mở tài khoản") + "</button>" +
        '<button type="button" id="ttcPreregCloseX" aria-label="Đóng thông báo">×</button>' +
      "</div>";
    document.body.insertBefore(banner, document.body.firstChild);

    document.getElementById("ttcPreregCloseX").addEventListener("click", function () {
      lsSet(LS_BANNER_OFF, "1");
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    });
    if (!done) {
      document.getElementById("ttcPreregOpenBtn").addEventListener("click", openModal);
    }
  }

  function buildModal() {
    var wrap = document.createElement("div");
    wrap.id = "ttcPreregModal";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.innerHTML =
      '<div class="ttc-prereg-card">' +
        '<button type="button" id="ttcPreregModalClose" aria-label="Đóng">×</button>' +
        '<div id="ttcPreregBody">' +
          "<h2>Ghi danh mở tài khoản</h2>" +
          '<p class="ttc-prereg-sub">Để lại thông tin — ngày 5/12 hệ thống mở lại, ' +
          "Bé Cá sẽ gửi thư mời kích hoạt tài khoản cho bạn.</p>" +
          '<div id="ttcPreregError"></div>' +
          '<form id="ttcPreregForm" novalidate>' +
            '<div class="ttc-prereg-field">' +
              '<label for="ttcPreregName">Họ tên</label>' +
              '<input type="text" id="ttcPreregName" autocomplete="name" placeholder="Ví dụ: Nguyễn Văn A" />' +
            "</div>" +
            '<div class="ttc-prereg-field">' +
              '<label for="ttcPreregContact">Email hoặc số điện thoại</label>' +
              '<input type="text" id="ttcPreregContact" autocomplete="email" ' +
              'placeholder="Ví dụ: ban@email.com hoặc 09xx xxx xxx" />' +
            "</div>" +
            '<label class="ttc-prereg-check">' +
              '<input type="checkbox" id="ttcPreregPremium" />' +
              "<span>Mình quan tâm gói Premium</span>" +
            "</label>" +
            '<button type="submit" id="ttcPreregSubmit">Gửi ghi danh</button>' +
          "</form>" +
        "</div>" +
      "</div>";
    document.body.appendChild(wrap);

    document.getElementById("ttcPreregModalClose").addEventListener("click", closeModal);
    wrap.addEventListener("click", function (ev) {
      if (ev.target === wrap) closeModal();
    });
    document.addEventListener("keydown", function (ev) {
      if ((ev.key === "Escape" || ev.keyCode === 27) &&
          wrap.className.indexOf("ttc-prereg-open") !== -1) closeModal();
    });
    document.getElementById("ttcPreregForm").addEventListener("submit", onSubmit);
  }

  function openModal() {
    var m = document.getElementById("ttcPreregModal");
    if (m) m.className = "ttc-prereg-open";
  }
  function closeModal() {
    var m = document.getElementById("ttcPreregModal");
    if (m) m.className = "";
  }

  function showError(html) {
    var box = document.getElementById("ttcPreregError");
    if (!box) return;
    box.innerHTML = html;
    box.style.display = "block";
  }
  function hideError() {
    var box = document.getElementById("ttcPreregError");
    if (box) { box.style.display = "none"; box.innerHTML = ""; }
  }

  function validContact(v) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return true; /* email */
    var digits = v.replace(/[^\d]/g, "");
    if (/^\+?[0-9\s.()\-]+$/.test(v) && digits.length >= 8 && digits.length <= 15) return true; /* điện thoại */
    return false;
  }

  function onSubmit(ev) {
    ev.preventDefault();
    hideError();
    var name = document.getElementById("ttcPreregName").value.replace(/^\s+|\s+$/g, "");
    var contact = document.getElementById("ttcPreregContact").value.replace(/^\s+|\s+$/g, "");
    var premium = document.getElementById("ttcPreregPremium").checked;

    if (name.length < 2) {
      showError("Bạn cho Bé Cá xin <b>họ tên</b> nhé.");
      return;
    }
    if (!validContact(contact)) {
      showError("Thông tin liên lạc chưa đúng định dạng — bạn kiểm tra lại <b>email</b> hoặc <b>số điện thoại</b> giúp Bé Cá nhé.");
      return;
    }

    var btn = document.getElementById("ttcPreregSubmit");
    btn.disabled = true;
    btn.textContent = "Đang gửi…";

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        name: name,
        contact: contact,
        premium: premium ? "yes" : "no",
        _subject: "Ghi danh mở tài khoản — thichtiengtrung.io.vn",
        _template: "table",
        _captcha: "true"
      })
    }).then(function (res) {
      if (!res.ok) throw new Error("http " + res.status);
      return res.json().catch(function () { return {}; });
    }).then(function () {
      lsSet(LS_DONE, "1");
      var body = document.getElementById("ttcPreregBody");
      if (body) {
        body.innerHTML =
          '<div class="ttc-prereg-success">✅ Đã ghi danh thành công! Ngày 5/12, ' +
          "Bé Cá sẽ gửi thư mời kích hoạt tài khoản tới bạn. Trong lúc chờ, " +
          "bạn cứ học bình thường nhé ❤️</div>" +
          '<div style="text-align:center"><button type="button" id="ttcPreregDoneClose">Đóng</button></div>';
        var c = document.getElementById("ttcPreregDoneClose");
        if (c) c.addEventListener("click", closeModal);
      }
      var openBtn = document.getElementById("ttcPreregOpenBtn");
      if (openBtn) { openBtn.disabled = true; openBtn.textContent = "Đã ghi danh ✓"; }
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = "Gửi ghi danh";
      showError("Gửi chưa được rồi 😢 Nếu gửi chưa được, bạn nhắn cho " +
        '<a href="' + FB_PAGE + '" target="_blank" rel="noopener">Page Thích Tiếng Trung 3.0</a> ' +
        "để được ghi danh thủ công nhé.");
    });
  }

  function init() {
    if (vnTodayNumber() > RETIRE_AFTER) return; /* tự nghỉ hưu sau 6/12 */
    if (document.getElementById("ttcPreregBanner")) return; /* chống chèn trùng */
    if (!document.body) return;
    injectCSS();
    buildModal();
    if (lsGet(LS_BANNER_OFF) !== "1") buildBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
