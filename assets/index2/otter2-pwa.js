/* ============================================================
   PWA — CÀI ỨNG DỤNG — otter2-pwa.js (2026-11-19)

   Chủ web chốt LÀM LUÔN: biến web thành ứng dụng cài được.
   Module này làm 3 việc, tất cả đều "êm" — lỗi ở đây không bao
   giờ được phép phá trang:
   1) Đăng ký Service Worker /sw.js (chiến lược bảo thủ nằm
      trong sw.js: HTML network-first, tĩnh stale-while-
      revalidate có phiên bản cache).
   2) Mục "📲 Cài ứng dụng vào điện thoại" trong menu ☰ (mục
      do otter2-menu.js dựng sẵn, ẩn mặc định — module này chỉ
      hiện khi cài đặt THẬT SỰ khả thi) + nút pill cùng tên ở
      footer (cột thương hiệu, cạnh các nút mạng xã hội).
   3) Luồng cài: Android/Chrome — bắt beforeinstallprompt, bấm
      là cài thật; iPhone/iPad Safari — hộp hướng dẫn 2 bước
      (Chia sẻ → Thêm vào Màn hình chính).

   LUẬT HIỂN THỊ (không nài nỉ):
   - Đã chạy standalone (đã cài) -> ẩn hẳn, không bao giờ hiện.
   - Người dùng đã bấm "Không nhắc lại" hoặc đã từ chối hộp cài
     của trình duyệt -> ẩn 30 ngày (localStorage).
   - Trình duyệt không có đường cài khả thi (không có sự kiện
     beforeinstallprompt và không phải Safari iOS) -> ẩn hẳn,
     không để nút chết.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_PWA__) return;
  window.__TTC_PWA__ = true;

  var DISMISS_KEY = "ttc_pwa_dismissed_v1";
  var DISMISS_MS = 30 * 24 * 60 * 60 * 1000;

  /* ---------------- nhận diện môi trường ---------------- */
  function isStandalone() {
    try {
      if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) return true;
    } catch (e) {}
    return window.navigator && window.navigator.standalone === true; /* iOS */
  }
  var UA = navigator.userAgent || "";
  var isIOS = /iphone|ipad|ipod/i.test(UA) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var isIOSSafari = isIOS && /safari/i.test(UA) && !/crios|fxios|edgios|fbav|fban|instagram|zalo/i.test(UA);

  function dismissedRecently() {
    try {
      var ts = Number(localStorage.getItem(DISMISS_KEY) || 0);
      return ts > 0 && (Date.now() - ts) < DISMISS_MS;
    } catch (e) { return false; }
  }
  function markDismissed() {
    try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch (e) {}
  }
  function clearDismissed() {
    try { localStorage.removeItem(DISMISS_KEY); } catch (e) {}
  }

  /* ---------------- 1) đăng ký Service Worker ---------------- */
  function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    try {
      navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch(function () { /* im lặng: PWA là lớp cộng thêm */ });
    } catch (e) { /* im lặng */ }
  }
  if (document.readyState === "complete") registerSW();
  else window.addEventListener("load", registerSW);

  /* ---------------- 2) trạng thái cài đặt ---------------- */
  var deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", function (ev) {
    ev.preventDefault();
    deferredPrompt = ev;
    syncUI();
  });
  window.addEventListener("appinstalled", function () {
    deferredPrompt = null;
    clearDismissed();
    syncUI();
  });

  function shouldOffer() {
    if (isStandalone()) return false;
    if (dismissedRecently()) return false;
    return !!deferredPrompt || isIOSSafari;
  }

  /* ---------------- style ---------------- */
  var styleDone = false;
  function ensureStyle() {
    if (styleDone) return;
    styleDone = true;
    var css = [
      ".ttc-pwa-foot-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1.5px solid rgba(124,58,237,.4);background:rgba(124,58,237,.06);color:#5b21b6;font-weight:800;font-size:13px;min-height:38px;cursor:pointer;font:inherit}",
      ".ttc-pwa-foot-btn:hover{background:rgba(124,58,237,.13)}",
      "html[data-theme='night'] .ttc-pwa-foot-btn{color:#d8b4fe;border-color:rgba(216,180,254,.4);background:rgba(124,58,237,.16)}",
      "#ttcPwaIosOverlay{position:fixed;inset:0;z-index:1000700;background:rgba(15,23,42,.48);display:flex;align-items:center;justify-content:center;padding:18px;box-sizing:border-box}",
      "#ttcPwaIosOverlay[hidden]{display:none}",
      ".ttc-pwa-ios-card{background:#ffffff;color:#0f172a;border-radius:18px;max-width:360px;width:100%;padding:22px 20px 16px;box-shadow:0 22px 55px rgba(15,23,42,.28);box-sizing:border-box}",
      ".ttc-pwa-ios-card h3{margin:0 0 6px;font-size:18px;font-weight:900;color:#be123c}",
      ".ttc-pwa-ios-card p{margin:0 0 12px;font-size:14px;line-height:1.55;color:#475569}",
      ".ttc-pwa-step{display:flex;gap:11px;align-items:flex-start;margin:0 0 12px;font-size:14.5px;line-height:1.5}",
      ".ttc-pwa-step-n{flex:0 0 auto;width:24px;height:24px;border-radius:999px;background:#be123c;color:#fff;font-weight:800;font-size:13.5px;display:inline-flex;align-items:center;justify-content:center;margin-top:1px}",
      ".ttc-pwa-step svg{vertical-align:-3px;margin:0 2px}",
      ".ttc-pwa-ios-actions{display:flex;gap:9px;margin-top:16px}",
      ".ttc-pwa-ok{flex:1 1 auto;background:#be123c;color:#fff;border:none;border-radius:999px;padding:12px 16px;font:inherit;font-size:15px;font-weight:800;cursor:pointer}",
      ".ttc-pwa-never{flex:0 0 auto;background:#ffffff;color:#64748b;border:1px solid #e2e8f0;border-radius:999px;padding:12px 14px;font:inherit;font-size:13.5px;font-weight:700;cursor:pointer}"
    ];
    var st = document.createElement("style");
    st.id = "ttcPwaStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- hộp hướng dẫn iOS ---------------- */
  var iosOverlay = null;
  function shareSvg() {
    return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M12 3v12" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M7.5 6.5 12 2l4.5 4.5" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M5 12v8a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20v-8" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/></svg>';
  }
  function plusSvg() {
    return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<rect x="3" y="3" width="18" height="18" rx="4.5" stroke="#2563eb" stroke-width="2"/>' +
      '<path d="M12 8v8M8 12h8" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/></svg>';
  }
  function buildIosOverlay() {
    if (iosOverlay) return iosOverlay;
    ensureStyle();
    iosOverlay = document.createElement("div");
    iosOverlay.id = "ttcPwaIosOverlay";
    iosOverlay.hidden = true;
    iosOverlay.setAttribute("role", "dialog");
    iosOverlay.setAttribute("aria-label", "Hướng dẫn cài ứng dụng trên iPhone");
    iosOverlay.innerHTML =
      '<div class="ttc-pwa-ios-card">' +
      "<h3>Cài Thích Tiếng Trung 3.0 📲</h3>" +
      "<p>Trên iPhone, Safari cài ứng dụng theo 2 bước nhỏ này:</p>" +
      '<div class="ttc-pwa-step"><span class="ttc-pwa-step-n">1</span><span>Nhấn nút <strong>Chia sẻ</strong> ' +
      shareSvg() + " ở thanh công cụ dưới cùng của Safari.</span></div>" +
      '<div class="ttc-pwa-step"><span class="ttc-pwa-step-n">2</span><span>Cuộn xuống và chọn <strong>Thêm vào Màn hình chính</strong> ' +
      plusSvg() + ", rồi nhấn <strong>Thêm</strong>.</span></div>" +
      "<p>Biểu tượng Bé Rái Cá 🦦 sẽ hiện trên màn hình chính — mở lên là học như một ứng dụng thật.</p>" +
      '<div class="ttc-pwa-ios-actions">' +
      '<button type="button" class="ttc-pwa-ok">Đã hiểu</button>' +
      '<button type="button" class="ttc-pwa-never">Không nhắc lại</button>' +
      "</div></div>";
    document.body.appendChild(iosOverlay);
    iosOverlay.addEventListener("click", function (ev) {
      if (ev.target === iosOverlay) closeIos();
    });
    iosOverlay.querySelector(".ttc-pwa-ok").addEventListener("click", closeIos);
    iosOverlay.querySelector(".ttc-pwa-never").addEventListener("click", function () {
      markDismissed();
      closeIos();
      syncUI();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && iosOverlay && !iosOverlay.hidden) closeIos();
    });
    return iosOverlay;
  }
  function openIos() { buildIosOverlay().hidden = false; }
  function closeIos() { if (iosOverlay) iosOverlay.hidden = true; }

  /* ---------------- hành động cài ---------------- */
  function requestInstall() {
    if (isStandalone()) return;
    if (deferredPrompt) {
      var ev = deferredPrompt;
      deferredPrompt = null;
      try {
        ev.prompt();
        if (ev.userChoice && typeof ev.userChoice.then === "function") {
          ev.userChoice.then(function (choice) {
            if (choice && choice.outcome === "dismissed") markDismissed();
            syncUI();
          }).catch(function () { syncUI(); });
        } else syncUI();
      } catch (e) { syncUI(); }
      return;
    }
    if (isIOSSafari) { openIos(); return; }
    /* Không có đường cài khả thi: đồng bộ lại UI (mục sẽ ẩn). */
    syncUI();
  }

  /* ---------------- gắn vào menu + footer ---------------- */
  var footBtn = null;
  function syncUI() {
    var offer = shouldOffer();
    var sec = document.getElementById("ttcMenuAppSec");
    if (sec) sec.hidden = !offer;
    if (footBtn) footBtn.style.display = offer ? "" : "none";
  }
  function hookUI() {
    var sec = document.getElementById("ttcMenuAppSec");
    var social = document.querySelector(".ttc-footer-social");
    if (social && !footBtn) {
      ensureStyle();
      footBtn = document.createElement("button");
      footBtn.type = "button";
      footBtn.id = "ttcPwaFootBtn";
      footBtn.className = "ttc-pwa-foot-btn";
      footBtn.textContent = "📲 Cài ứng dụng";
      footBtn.addEventListener("click", requestInstall);
      social.appendChild(footBtn);
    }
    if (sec || footBtn) { syncUI(); return true; }
    return false;
  }
  function init() {
    if (hookUI()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (hookUI() || tries > 40) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho menu ☰ (data-act="install") + kiểm thử tự động. */
  window.__ttcPwa = {
    requestInstall: requestInstall,
    isStandalone: isStandalone,
    shouldOffer: shouldOffer,
    openIosGuide: openIos,
    sync: syncUI,
    version: "v1"
  };
})();
