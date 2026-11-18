/* ============================================================
   FOOTER TRANG CHỦ + LỚP CÔNG KHAI — otter2-footer.js (2026-11-17)

   Chủ web đối chiếu Study4 và yêu cầu bổ sung "mảng công khai":
   trang chủ trước đây KHÔNG có <footer> nào. Module này tự bơm
   một <footer> ngay SAU #otter2-home (cùng container cuộn, là
   anh em — không chui vào lưới grid của dashboard, không nằm
   trong overlay học tập nào), gồm 4 cột: Thương hiệu / Học tập /
   Về chúng tôi (5 trang chính sách tĩnh ở gốc repo) / Liên hệ,
   và dải đáy ghi đúng sự thật vận hành: nền tảng do MỘT người
   sáng tạo độc lập (Trần Tiểu Huy) — không công ty, không mã số
   doanh nghiệp, không địa chỉ trụ sở (tuyệt đối không bịa).

   Các nút cột "Học tập" bấm thẳng vào phần tử THẬT trên
   dashboard (nút Luyện thi của otter2-exam.js, nút mở truyện kể
   của otter2-storyvideo.js, nút Bảng điểm thi, nút điều hướng
   màn hình Tra từ điển / Luyện đọc của chính index2.html) —
   không tự dựng lại hành vi. Nút nào không tìm thấy đích tại
   thời điểm dò thì tự ẩn, không để nút chết trên trang.

   Màn hình chuyển bằng thuộc tính hidden (.otter2-screen[hidden])
   nên footer đồng bộ ẩn/hiện theo #otter2-home bằng
   MutationObserver: footer chỉ xuất hiện ở cuối màn hình chính.
   ============================================================ */
(function () {
  "use strict";

  var FB_URL = "https://www.facebook.com/thich.tieng.trung.3.0";
  var IG_URL = "https://www.instagram.com/aocongtu34";
  var EMAIL = "aocongtu34@gmail.com";

  /* Đích THẬT cho cột Học tập — dò theo thứ tự, trúng cái đầu tiên. */
  var STUDY_LINKS = [
    { label: "Luyện thi HSK", icon: "📝", selectors: ["#otter2FeatExam"] },
    { label: "Truyện kể HSK", icon: "🎬", selectors: ["#otter2FeatStoryVideo"] },
    { label: "Bảng thành tích & điểm thi", icon: "🏆", selectors: ["#otter2AchNavBtn"] },
    { label: "Tra từ điển", icon: "📖", selectors: ['[data-otter2-screen="vocab"]'] },
    { label: "Luyện đọc", icon: "📚", selectors: ['[data-otter2-screen="reading"]', "#ttcReadingLauncher"] }
  ];

  var POLICY_LINKS = [
    { label: "Giới thiệu", href: "gioi-thieu.html" },
    { label: "Chính sách bảo mật", href: "chinh-sach-bao-mat.html" },
    { label: "Điều khoản sử dụng", href: "dieu-khoan-su-dung.html" },
    { label: "Hướng dẫn thanh toán", href: "huong-dan-thanh-toan.html" },
    { label: "Hoàn tiền & khiếu nại", href: "chinh-sach-hoan-tien-khieu-nai.html" }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>\"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function findTarget(selectors) {
    for (var i = 0; i < selectors.length; i++) {
      var el = null;
      try { el = document.querySelector(selectors[i]); } catch (e) { el = null; }
      if (el) return el;
    }
    return null;
  }

  /* ---------------- style ---------------- */
  var styleDone = false;
  function ensureStyle() {
    if (styleDone) return;
    styleDone = true;
    var css = [
      ".ttc-footer{position:relative;margin-top:28px;border-top:3px solid transparent;background:linear-gradient(#ffffff,#ffffff) padding-box,linear-gradient(90deg,#7c3aed,#c026d3,#e11d48) border-box;color:#2b2440;font-size:14px;line-height:1.55}",
      ".ttc-footer-in{max-width:1180px;margin:0 auto;padding:26px 20px 8px;display:grid;grid-template-columns:1.45fr 1fr 1fr 1.15fr;gap:26px}",
      ".ttc-footer-brand{margin:0 0 8px;font-size:20px;font-weight:900;color:#3b1470;letter-spacing:.2px}",
      ".ttc-footer-desc{margin:0 0 14px;color:#5b5470;max-width:34em}",
      ".ttc-footer-social{display:flex;gap:8px;flex-wrap:wrap}",
      ".ttc-footer-social a{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1.5px solid rgba(124,58,237,.4);background:rgba(124,58,237,.06);color:#5b21b6;font-weight:800;font-size:13px;text-decoration:none;min-height:38px}",
      ".ttc-footer-social a:hover{background:rgba(124,58,237,.13)}",
      ".ttc-footer-h{margin:2px 0 12px;font-size:13px;font-weight:900;letter-spacing:1.2px;text-transform:uppercase;color:#a21caf}",
      ".ttc-footer-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}",
      ".ttc-footer-list a,.ttc-footer-study{display:block;width:100%;text-align:left;padding:7px 9px;margin:0 -9px;border:none;background:transparent;color:#2b2440;font:inherit;font-size:14px;text-decoration:none;border-radius:9px;cursor:pointer}",
      ".ttc-footer-list a:hover,.ttc-footer-study:hover{background:rgba(225,29,72,.07);color:#be123c}",
      ".ttc-footer-contact p{margin:0 0 9px;color:#5b5470}",
      ".ttc-footer-contact a{color:#5b21b6;font-weight:700;text-decoration:none;word-break:break-all}",
      ".ttc-footer-contact a:hover{text-decoration:underline}",
      ".ttc-footer-bottom{border-top:1px solid rgba(124,58,237,.16);margin-top:10px}",
      ".ttc-footer-bottom-in{max-width:1180px;margin:0 auto;padding:13px 20px 17px;display:flex;gap:6px 22px;flex-wrap:wrap;justify-content:space-between;color:#6d6785;font-size:12.5px}",
      "@media (max-width:1020px){.ttc-footer-in{grid-template-columns:1fr 1fr;gap:20px;padding:22px 16px 4px}.ttc-footer-bottom-in{padding:12px 16px 16px}}",
      "@media (max-width:560px){.ttc-footer-in{grid-template-columns:1fr}.ttc-footer-brand{font-size:19px}}",
      "html[data-theme='night'] .ttc-footer{background:linear-gradient(#131022,#131022) padding-box,linear-gradient(90deg,#7c3aed,#c026d3,#e11d48) border-box;color:#ddd6f3}",
      "html[data-theme='night'] .ttc-footer-brand{color:#e9d5ff}",
      "html[data-theme='night'] .ttc-footer-desc,html[data-theme='night'] .ttc-footer-contact p{color:#a49ec4}",
      "html[data-theme='night'] .ttc-footer-list a,html[data-theme='night'] .ttc-footer-study{color:#ddd6f3}",
      "html[data-theme='night'] .ttc-footer-social a{color:#d8b4fe;border-color:rgba(216,180,254,.4);background:rgba(124,58,237,.16)}",
      "html[data-theme='night'] .ttc-footer-contact a{color:#d8b4fe}",
      "html[data-theme='night'] .ttc-footer-bottom{border-top-color:rgba(216,180,254,.18)}",
      "html[data-theme='night'] .ttc-footer-bottom-in{color:#8f89ad}"
    ];
    var st = document.createElement("style");
    st.id = "ttcFooterStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- dựng footer ---------------- */
  var footer = null;

  function studyButtonsHtml() {
    var out = "";
    for (var i = 0; i < STUDY_LINKS.length; i++) {
      out += '<li><button type="button" class="ttc-footer-study" data-study="' + i + '">' +
        esc(STUDY_LINKS[i].icon) + " " + esc(STUDY_LINKS[i].label) + "</button></li>";
    }
    return out;
  }

  function policyLinksHtml() {
    var out = "";
    for (var i = 0; i < POLICY_LINKS.length; i++) {
      out += '<li><a href="' + esc(POLICY_LINKS[i].href) + '">' + esc(POLICY_LINKS[i].label) + "</a></li>";
    }
    return out;
  }

  function buildFooter() {
    if (document.getElementById("otter2SiteFooter")) return true;
    var home = document.getElementById("otter2-home");
    if (!home || !home.parentNode) return false;
    ensureStyle();
    footer = document.createElement("footer");
    footer.id = "otter2SiteFooter";
    footer.className = "ttc-footer";
    footer.setAttribute("aria-label", "Chân trang Thích Tiếng Trung 3.0");
    footer.innerHTML =
      '<div class="ttc-footer-in">' +
        '<div class="ttc-footer-col">' +
          '<p class="ttc-footer-brand">Thích Tiếng Trung 3.0</p>' +
          '<p class="ttc-footer-desc">Học tiếng Trung từ cơ bản đến HSK 9 theo chuẩn HSK 3.0 mới nhất — ' +
          'rất nhiều nội dung hoàn toàn miễn phí, học cùng Bé Rái Cá 🦦 mỗi ngày.</p>' +
          '<div class="ttc-footer-social">' +
            '<a href="' + FB_URL + '" target="_blank" rel="noopener">📘 Facebook</a>' +
            '<a href="' + IG_URL + '" target="_blank" rel="noopener">📸 Instagram</a>' +
          "</div>" +
        "</div>" +
        '<div class="ttc-footer-col">' +
          '<p class="ttc-footer-h">Học tập</p>' +
          '<ul class="ttc-footer-list">' + studyButtonsHtml() + "</ul>" +
        "</div>" +
        '<div class="ttc-footer-col">' +
          '<p class="ttc-footer-h">Về chúng tôi</p>' +
          '<ul class="ttc-footer-list">' + policyLinksHtml() + "</ul>" +
        "</div>" +
        '<div class="ttc-footer-col ttc-footer-contact">' +
          '<p class="ttc-footer-h">Liên hệ</p>' +
          '<p>✉️ Email: <a href="mailto:' + EMAIL + '">' + EMAIL + "</a></p>" +
          '<p>📘 Page: <a href="' + FB_URL + '" target="_blank" rel="noopener">Thích Tiếng Trung 3.0</a></p>' +
          '<p>📸 Instagram: <a href="' + IG_URL + '" target="_blank" rel="noopener">@aocongtu34</a></p>' +
          "<p>Gửi email hoặc nhắn tin qua Facebook Page — mọi góp ý đều được đọc và phản hồi.</p>" +
        "</div>" +
      "</div>" +
      '<div class="ttc-footer-bottom"><div class="ttc-footer-bottom-in">' +
        "<span>© 2026 Thích Tiếng Trung 3.0 — Được sáng tạo và vận hành độc lập bởi Trần Tiểu Huy.</span>" +
        "<span>Nội dung học tập tại thichtiengtrung.io.vn</span>" +
      "</div></div>";

    home.parentNode.insertBefore(footer, home.nextSibling);

    var btns = footer.querySelectorAll("[data-study]");
    Array.prototype.forEach.call(btns, function (btn) {
      btn.addEventListener("click", function () {
        var item = STUDY_LINKS[Number(btn.getAttribute("data-study"))];
        var target = item && findTarget(item.selectors);
        if (target) {
          target.click();
          setTimeout(syncVis, 60);
        } else {
          btn.style.display = "none"; /* đích biến mất -> ẩn luôn, không để nút chết */
        }
      });
    });

    pruneStudyButtons();
    setTimeout(pruneStudyButtons, 1500);
    setTimeout(pruneStudyButtons, 4000);
    syncVis();
    watchHome();
    return true;
  }

  /* Ẩn nút Học tập nào chưa tìm thấy đích (module đích nạp muộn sẽ được dò lại). */
  function pruneStudyButtons() {
    if (!footer) return;
    var btns = footer.querySelectorAll("[data-study]");
    Array.prototype.forEach.call(btns, function (btn) {
      var item = STUDY_LINKS[Number(btn.getAttribute("data-study"))];
      if (item && !findTarget(item.selectors)) btn.style.display = "none";
      else if (item) btn.style.display = "";
    });
  }

  /* ---------------- đồng bộ ẩn/hiện theo màn hình chính ---------------- */
  function syncVis() {
    if (!footer) return;
    var home = document.getElementById("otter2-home");
    if (!home) return;
    var hidden = !!home.hidden;
    if (!hidden) {
      try { hidden = window.getComputedStyle(home).display === "none"; } catch (e) {}
    }
    footer.style.display = hidden ? "none" : "";
  }

  var watching = false;
  function watchHome() {
    if (watching) return;
    watching = true;
    var home = document.getElementById("otter2-home");
    if (home && window.MutationObserver) {
      new MutationObserver(function () { syncVis(); }).observe(home, {
        attributes: true, attributeFilter: ["hidden", "class", "style"]
      });
    }
    document.addEventListener("click", function () { setTimeout(syncVis, 60); }, true);
  }

  /* ---------------- khởi tạo (chờ #otter2-home như các module khác) ---------------- */
  function init() {
    if (buildFooter()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (buildFooter() || tries > 40) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.__ttcFooter = {
    el: function () { return footer || document.getElementById("otter2SiteFooter"); },
    sync: syncVis,
    studyLinks: STUDY_LINKS,
    policyLinks: POLICY_LINKS,
    findTarget: findTarget
  };
})();
