/* ============================================================
   VỎ KHUNG MỚI (REDESIGN GĐ1) — otter2-shell.js (2026-11-19)

   Thực thi bản thiết kế đã duyệt (BLUEPRINT + ADDENDUM_FINAL):
   khung Duolingo (sidebar trái cố định + cột phải chỉ-động-lực)
   + xương Babbel (mỗi thẻ một nút chính) + la bàn Mondly.

   Module ADDITIVE thuần:
   - index2.html chỉ thêm 1 thẻ <script>; không sửa script inline,
     không xoá/đổi id nào, không đổi khóa localStorage nào.
   - Mọi điều hướng bấm đúng NÚT THẬT / cơ chế thật của web (cùng
     cách otter2-menu.js và Bé guide vẫn dùng) — không chế cơ chế
     song song, không đụng handler sẵn có.

   Nội dung:
   1) SIDEBAR TRÁI cố định (desktop ≥1200px): 6 đích — Trang chủ ·
      Lộ trình HSK · Phòng truyện · Phòng đọc · Thi HSK · Tin nhắn;
      dưới cùng: khối hồ sơ học viên (đọc trạng thái tài khoản thật)
      + thống kê tiến độ THẬT (đọc otter2_hsk_vocab_progress_v1 và
      OTTER2_HSK_ALL_DATA.counts — chỉ đọc, cùng nguồn với dashboard).
   2) BỐ CỤC desktop: thân trang lùi phải nhường sidebar; thẻ
      "Học tiếp" (.otter2-dash-continue) được CHUYỂN (không nhân
      bản) từ cột phải lên đầu cột giữa — cột phải từ đó chỉ còn
      động lực: Hoạt động (tổng từ đã học thật) · Nhiệm vụ hôm nay ·
      thẻ Bảng thành tích mới (số từ đã học thật + 1 nút mở đúng
      bảng thành tích thật của web). Trên mobile các thẻ là item
      lưới theo grid-area riêng nên việc chuyển cha không đổi bố
      cục điện thoại (đã kiểm chứng bằng ảnh trước/sau).
      LƯU Ý DỮ LIỆU THẬT: web hiện KHÔNG lưu lịch sử ngày học nên
      KHÔNG có "chuỗi ngày" (streak) thật — module không bịa con
      số này; cột phải dùng tổng từ đã học (số thật) thay thế.
   3) THANH DƯỚI điện thoại (≤767px): 6 đích như sidebar, z-index
      80 (dưới Bé guide 90/95 — Bé nổi trên thanh, chạm xuyên qua
      như mọi khi); cụm nút góc phải (chat / nút nhà / nút gọi Bé)
      được NÂNG lên trên thanh bằng luật CSS id (thắng thứ tự nạp)
      giữ đúng nhịp khe hở hiện có; thân trang thêm đệm đáy để
      chân trang không bị thanh che.

   LUẬT MÀU: bề mặt trắng; màu chỉ ở chip icon + trạng thái active
   theo màu khu (Trang chủ đỏ #be123c · Lộ trình fuchsia #c026d3 ·
   Truyện tím #7c3aed · Đọc xanh dương #2563eb · Thi cam #c2410c ·
   Tin nhắn teal #0f766e · Tài khoản tím đậm #5b21b6); chữ nhãn là
   slate #0f172a như toàn web (không đen thuần cho tiêu đề/nút).

   ===== V2 — PASS TRUNG THỰC MẪU + NGHỈ HƯU GIAO DIỆN CŨ (2026-11-19) =====
   Lệnh chủ web: "làm thay giống hệt này cho anh nhé! bỏ hết cái cũ"
   + ảnh laptop chụp trang thật sau GĐ1 ("giao diện cũ vẫn còn tồn
   đọng nhiều lắm"). GĐ1 mới DỰNG KHUNG quanh trang chủ cũ; pass này
   cho các khối trình bày cũ NGHỈ HƯU khỏi mắt người học:
   - Thanh pill trên cùng (#otter2Nav): desktop ≥1200px ẩn hẳn —
     thương hiệu sống trong block brand của sidebar như mẫu; ba nút
     THẬT của nó được DỜI (không nhân bản) vào sidebar: nút chuyển
     Giản ⇄ Phồn (#ttcScriptSwitch — TÍNH NĂNG giữ nguyên, một chạm
     như cũ), cụm chọn giao diện (.otter2-theme-slot) và nút ☰ menu
     (#ttcMenuBtn). Khi <1200px chúng tự trở về .otter2-nav-right.
     Dưới 1200px chỉ ẩn HÀNG PILL ĐIỀU HƯỚNG (#otter2NavLinks) —
     điều hướng đã có sidebar/thanh dưới/menu; các nút thật ẩn vẫn
     bấm được bằng JS nên Bé guide + menu + shell không mất cơ chế.
   - Khối hero "Chào mừng bạn quay trở lại!" (.otter2-hero, chứa cả
     chip Hệ thống giọng đọc — tính năng giọng đọc vẫn mở qua menu),
     hàng chip HSK (.otter2-dash-strip — trùng với các nấc Lộ trình),
     băng Facebook (.otter2-fb-banner) và thẻ Hoạt động học tập cũ
     (lưới 9 ô + đoạn văn dài) được ẩn: cột phải từ đó GỌN như mẫu —
     Nhiệm vụ hôm nay + Bảng thành tích; số liệu hoạt động thật vẫn
     hiện ở sidebar + thẻ thành tích, các id dữ liệu (#otter2Dash-
     LearnedTotal…) vẫn được code gốc cập nhật như thường.
   - Thẻ "Học tiếp" nén GỌN kiểu mẫu: lưới 2 cột, ảnh nhỏ bên phải.
   - Thẻ Lộ trình (.otter2-dash-road) được CHUYỂN vào cột giữa ngay
     sau Học tiếp — thứ tự cột giữa đúng mẫu: Học tiếp → Lộ trình →
     Khoá học + cụm thi → Bài học mỗi ngày.
   Mọi thứ chỉ là TẦNG TRÌNH BÀY (CSS + dời node): không khối HTML
   tĩnh nào bị xoá, không id nào mất, không script inline nào đổi,
   không khoá dữ liệu nào bị đụng — "bỏ cái cũ" = bỏ hình thức cũ,
   toàn bộ chức năng + dữ liệu học viên nguyên vẹn.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_SHELL__) return;
  window.__TTC_SHELL__ = true;

  var PROGRESS_KEY = "otter2_hsk_vocab_progress_v1";
  var FALLBACK_COUNTS = { "1": 300, "2": 200, "3": 500, "4": 1000, "5": 1600, "6": 1800, "7": 1867, "8": 1867, "9": 1866 };

  function $(sel) { try { return document.querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(n) { return String(Math.max(0, Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  function isVis(el) {
    if (!el || el.hidden) return false;
    var cs = null;
    try { cs = window.getComputedStyle(el); } catch (e) {}
    if (cs && (cs.display === "none" || cs.visibility === "hidden")) return false;
    return el.offsetParent !== null || (cs && cs.position === "fixed");
  }
  function whenVisible(sel, cb) {
    var tries = 0;
    (function check() {
      var el = $(sel);
      if (el && isVis(el)) { cb(el); return; }
      tries++;
      if (tries >= 12) { cb(el || null); return; }
      setTimeout(check, 200);
    })();
  }

  /* ---------------- dữ liệu thật (chỉ đọc) ---------------- */
  function getCounts() {
    try {
      var d = window.OTTER2_HSK_ALL_DATA;
      if (d && d.counts && Number(d.counts["1"]) > 0) return d.counts;
    } catch (e) {}
    return FALLBACK_COUNTS;
  }
  function getProgressMap() {
    try {
      var raw = localStorage.getItem(PROGRESS_KEY);
      var o = raw ? JSON.parse(raw) : null;
      return o && typeof o === "object" ? o : {};
    } catch (e) { return {}; }
  }
  function learnedOf(map, lv) {
    var slot = map[String(lv)];
    return slot && Array.isArray(slot.learned) ? slot.learned.length : 0;
  }
  function currentLevel() {
    try {
      if (window.otter2Hsk1 && Number(window.otter2Hsk1.currentHSK) >= 1) return Number(window.otter2Hsk1.currentHSK);
    } catch (e) {}
    var c = Number(window.currentHSK);
    return c >= 1 && c <= 9 ? c : 1;
  }
  function currentUser() {
    try {
      if (window.currentUser) return window.currentUser;
      if (window.otter2Account && window.otter2Account.user) return window.otter2Account.user;
    } catch (e) {}
    return null;
  }
  function displayName(u) {
    var meta = (u && u.user_metadata) || {};
    var cand = [meta.display_name, meta.full_name, meta.nickname, meta.name];
    for (var i = 0; i < cand.length; i++) {
      if (cand[i] && String(cand[i]).trim()) return String(cand[i]).trim();
    }
    var nameEl = byId("otter2AccountName");
    if (nameEl) {
      var t = (nameEl.textContent || "").trim();
      if (t && t !== "Khách") return t;
    }
    if (u && u.email) return String(u.email).split("@")[0];
    return "";
  }

  /* ---------------- điều hướng: cơ chế thật của web ---------------- */
  function ensureScreen(name) {
    var p = document.querySelector('[data-otter2-screen-panel="' + name + '"]');
    if (p && !p.hidden) return;
    var b = document.querySelector('#otter2NavLinks [data-otter2-screen="' + name + '"]') ||
            document.querySelector('[data-otter2-screen="' + name + '"]');
    if (b) b.click();
  }
  function clickLater(sel, ms) {
    setTimeout(function () { var el = $(sel); if (el) el.click(); }, ms);
  }
  var ACTIONS = {
    home: function () {
      if (typeof window.otter2ShowScreen === "function") window.otter2ShowScreen("home");
      else ensureScreen("home");
    },
    roadmap: function () {
      ensureScreen("home");
      var journey = byId("otter2HskJourney");
      if (!isVis(journey)) {
        var openBtn = byId("otter2OpenVocabBankBtn");
        if (openBtn) openBtn.click();
      }
      whenVisible("#otter2HskJourney", function (el) {
        var t = el || byId("otter2HskJourney");
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    story: function () { ensureScreen("home"); clickLater("#otter2FeatStoryVideo", 120); },
    reading: function () { ensureScreen("reading"); clickLater("#ttcReadingLauncher", 380); },
    exam: function () { ensureScreen("home"); clickLater("#otter2FeatExam", 120); },
    chat: function () {
      var tries = 0;
      (function check() {
        var l = byId("aichatLauncher");
        if (l) { l.click(); return; }
        tries++;
        if (tries < 10) { setTimeout(check, 250); return; }
        var c = byId("otter2ChatOnlineBtn");
        if (c) c.click();
      })();
    },
    account: function () {
      var u = currentUser();
      if (!u) {
        if (typeof window.otter2AccountOpenLogin === "function") { window.otter2AccountOpenLogin(); return; }
        var lb = byId("otter2OpenLoginBtn");
        if (lb) { lb.click(); return; }
      }
      var av = byId("otter2AvatarBtn");
      if (av) av.click();
    }
  };
  function runAction(act) {
    var fn = ACTIONS[act];
    if (fn) { try { fn(); } catch (e) {} }
  }

  var NAV = [
    { act: "home", icon: "🏠", label: "Trang chủ", color: "#be123c" },
    { act: "roadmap", icon: "🗺️", label: "Lộ trình HSK", color: "#c026d3" },
    { act: "story", icon: "🎬", label: "Phòng truyện", color: "#7c3aed" },
    { act: "reading", icon: "📖", label: "Phòng đọc", color: "#2563eb" },
    { act: "exam", icon: "📝", label: "Thi HSK", color: "#c2410c" },
    { act: "chat", icon: "💬", label: "Tin nhắn", color: "#0f766e" }
  ];

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcShellStyle")) return;
    var css = [
      /* ===== SIDEBAR (chỉ hiện ≥1200px) ===== */
      "#ttcShellSidebar{position:fixed;left:0;top:0;bottom:0;width:236px;background:#ffffff;border-right:1px solid #e7e9ee;z-index:80;display:none;flex-direction:column;padding:18px 14px calc(14px + env(safe-area-inset-bottom,0px));box-sizing:border-box;font-size:15px;line-height:1.45;color:#0f172a}",
      "@media (min-width:1200px){#ttcShellSidebar{display:flex}html body.otter2-body{padding-left:236px}}",
      /* Học tiếp lên HÀNG 1 phủ 2 cột của lưới cột giữa (desktop ≥1021px, nơi .otter2-dash-main là lưới thật); khoá học + cụm thi lùi hàng 2, bài học hàng 3 — đúng thứ tự mẫu duyệt: Học tiếp → Khoá học → Bài học. Selector chép đúng selector gốc để thắng bằng thứ tự nạp. */
      "@media (min-width:1021px){",
      "#otter2-home .otter2-dash-continue{grid-column:1/-1;grid-row:1}",
      "#otter2-home .otter2-dash-course{grid-row:2}",
      "#otter2-home .ttc-exam-midstack{grid-row:2}",
      "#otter2-home .otter2-dash-main > section[aria-labelledby=\"otter2DashLessonsTitle\"]{grid-row:3}",
      "}",
      ".ttc-shell-brand{display:flex;align-items:center;gap:10px;padding:2px 6px 14px;border-bottom:1px solid #f1f5f9}",
      ".ttc-shell-brand img{width:40px;height:40px;border-radius:12px;object-fit:cover;flex:0 0 auto}",
      ".ttc-shell-brand .ttc-shell-brand-name{font-weight:900;font-size:16.5px;line-height:1.2;background:linear-gradient(90deg,#e11d48,#f59e0b,#16a34a,#2563eb,#7c3aed);-webkit-background-clip:text;background-clip:text;color:transparent}",
      ".ttc-shell-brand .ttc-shell-brand-sub{font-size:11.5px;color:#64748b;font-weight:600}",
      ".ttc-shell-nav{display:flex;flex-direction:column;gap:4px;padding:14px 0 6px}",
      ".ttc-shell-item{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:11px 12px;border:none;border-radius:12px;background:#ffffff;font:inherit;font-size:15px;font-weight:600;color:#0f172a;text-align:left;cursor:pointer;box-shadow:inset 0 0 0 rgba(0,0,0,0)}",
      ".ttc-shell-item:hover{background:#f8fafc}",
      ".ttc-shell-item:focus-visible{outline:2px solid var(--ttc-shell-c,#be123c);outline-offset:-2px}",
      ".ttc-shell-item .ttc-shell-ico{flex:0 0 auto;width:32px;height:32px;border-radius:10px;background:#f1f5f9;display:inline-flex;align-items:center;justify-content:center;font-size:16px}",
      ".ttc-shell-item.is-active{background:#f8fafc;font-weight:800;color:var(--ttc-shell-c,#be123c);box-shadow:inset 3px 0 0 var(--ttc-shell-c,#be123c)}",
      ".ttc-shell-stats{margin-top:auto;border-top:1px solid #f1f5f9;padding:14px 6px 4px}",
      ".ttc-shell-stats .ttc-shell-stats-num{font-size:26px;font-weight:900;color:#15803d;line-height:1.1}",
      ".ttc-shell-stats .ttc-shell-stats-lbl{font-size:12.5px;color:#64748b;font-weight:600}",
      ".ttc-shell-stats .ttc-shell-stats-bar{height:8px;border-radius:99px;background:#f1f5f9;margin:9px 0 5px;overflow:hidden}",
      ".ttc-shell-stats .ttc-shell-stats-bar i{display:block;height:100%;background:#15803d;border-radius:99px;width:0%}",
      ".ttc-shell-stats .ttc-shell-stats-cap{font-size:12px;color:#64748b}",
      ".ttc-shell-profile{display:flex;align-items:center;gap:10px;border-top:1px solid #f1f5f9;padding-top:14px;margin-top:10px}",
      ".ttc-shell-avatar{flex:0 0 auto;width:42px;height:42px;border-radius:50%;background:#5b21b6;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:17px}",
      ".ttc-shell-profile .ttc-shell-pname{font-weight:800;font-size:14.5px;line-height:1.25;word-break:break-word}",
      ".ttc-shell-profile .ttc-shell-pmail{font-size:12px;color:#64748b;word-break:break-all}",
      ".ttc-shell-pbtn{margin-top:10px;width:100%;padding:10px 12px;border:none;border-radius:12px;background:#5b21b6;color:#ffffff;font:inherit;font-size:14px;font-weight:800;cursor:pointer}",
      ".ttc-shell-pbtn:hover{background:#4c1d95}",
      /* ===== THẺ BẢNG THÀNH TÍCH Ở CỘT PHẢI (mọi bề ngang) ===== */
      "#ttcShellRailAch .ttc-shell-ach-num{font-size:30px;font-weight:900;color:#2563eb;line-height:1.1}",
      "#ttcShellRailAch .ttc-shell-ach-lbl{font-size:12.5px;color:#64748b;font-weight:600;margin-top:2px}",
      "#ttcShellRailAch .ttc-shell-ach-btn{margin-top:12px;width:100%;padding:11px;border:none;border-radius:12px;background:#2563eb;color:#ffffff;font:inherit;font-size:14.5px;font-weight:800;cursor:pointer}",
      "#ttcShellRailAch .ttc-shell-ach-btn:hover{background:#1d4ed8}",
      "@media (max-width:1020px){#ttcShellRailAch{grid-column:1/-1}}",
      /* ===== THANH DƯỚI ĐIỆN THOẠI (≤767px) ===== */
      "#ttcShellBottomBar{position:fixed;left:0;right:0;bottom:0;z-index:80;background:#ffffff;border-top:1px solid #e7e9ee;display:none;padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box}",
      "#ttcShellBottomBar .ttc-shell-bitem{flex:1 1 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:7px 2px 6px;border:none;background:#ffffff;font:inherit;font-size:10.5px;font-weight:700;color:#0f172a;cursor:pointer;min-height:56px;box-sizing:border-box}",
      "#ttcShellBottomBar .ttc-shell-bitem .ttc-shell-bico{font-size:19px;line-height:1.15}",
      "#ttcShellBottomBar .ttc-shell-bitem.is-active{color:var(--ttc-shell-c,#be123c)}",
      "@media (max-width:767px){",
      "#ttcShellBottomBar{display:flex}",
      ".otter2-shell{margin-bottom:calc(88px + env(safe-area-inset-bottom,0px))}",
      "body #aichatLauncher{bottom:calc(64px + env(safe-area-inset-bottom,0px))}",
      "body #homeButton{bottom:calc(122px + env(safe-area-inset-bottom,0px))}",
      "body #guideRestore{bottom:calc(182px + env(safe-area-inset-bottom,0px))}",
      "}",
      /* ===== V2: NGHỈ HƯU TRÌNH BÀY CŨ + TRUNG THỰC MẪU ===== */
      "#otter2-home .otter2-hero{display:none}",
      "#otter2-home .otter2-fb-banner{display:none}",
      "#otter2-home .otter2-dash-strip{display:none}",
      "#otter2-home .otter2-dash-card[aria-labelledby=\"otter2DashActTitle\"]{display:none}",
      "@media (min-width:1200px){#otter2Nav{display:none}}",
      "@media (max-width:1199px){#otter2NavLinks{display:none !important}}",
      /* lưới trang chủ: bỏ hàng hero/strip/banner; lộ trình đã vào cột giữa */
      "@media (min-width:1021px){",
      "#otter2-home{grid-template-areas:\"main main side\" \"journey journey journey\"}",
      "#otter2-home .otter2-dash-main > .otter2-dash-road{grid-area:auto;grid-column:1/-1;grid-row:2}",
      "#otter2-home .otter2-dash-course{grid-row:3}",
      "#otter2-home .ttc-exam-midstack{grid-row:3}",
      "#otter2-home .otter2-dash-main > section[aria-labelledby=\"otter2DashLessonsTitle\"]{grid-row:4}",
      "}",
      /* mobile: 1 cột như mẫu (thắng template 2 cột của otter2-mobile-dash bằng cùng đặc hiệu section#id.class + thứ tự nạp sau) */
      "@media (max-width:1020px){section#otter2-home.otter2-screen{grid-template-columns:minmax(0,1fr);grid-template-areas:\"continue\" \"road\" \"course\" \"exam\" \"story\" \"level\" \"lessons\" \"tasks\" \"journey\"}}",
      /* Học tiếp GỌN kiểu mẫu: chữ trái — ảnh nhỏ phải */
      "#otter2-home .otter2-dash-continue{display:grid;grid-template-columns:minmax(0,1fr) 176px;column-gap:16px;align-items:center}",
      "#otter2-home .otter2-dash-continue>*{grid-column:1;min-width:0}",
      "#otter2-home .otter2-dash-continue img{grid-column:2;grid-row:1/6;width:176px;height:130px;object-fit:cover;border-radius:16px;justify-self:end}",
      "#otter2-home .otter2-dash-continue button{justify-self:start}",
      "@media (max-width:767px){#otter2-home .otter2-dash-continue{grid-template-columns:minmax(0,1fr)}#otter2-home .otter2-dash-continue img{grid-column:1;grid-row:auto;width:100%;height:110px;justify-self:stretch}}",
      /* cụm tiện ích trong sidebar (các nút THẬT dời từ thanh trên xuống) */
      ".ttc-shell-util{display:flex;flex-direction:column;gap:4px;padding:10px 0 4px}",
      "#ttcShellSidebar .ttc-script-switch{width:100%;box-sizing:border-box;text-align:center;padding:9px 10px;border-radius:12px;font-size:13.5px}",
      "#ttcShellSidebar .otter2-theme-slot{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:2px 6px;position:relative}",
      "#ttcShellSidebar #ttcMenuBtn{width:100%;height:auto;margin:0;padding:11px 12px;justify-content:flex-start;gap:11px;border-radius:12px;border:1px solid #e7e9ee;background:#ffffff;font:inherit;font-size:15px;font-weight:600;color:#0f172a;box-shadow:none}",
      "#ttcShellSidebar #ttcMenuBtn:hover{background:#f8fafc;border-color:#e7e9ee}",
      ".ttc-shell-util-lbl{font-size:15px;font-weight:600;color:#0f172a}",
      "#otter2Nav .ttc-shell-util-lbl{display:none}"
    ];
    var st = document.createElement("style");
    st.id = "ttcShellStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- dựng giao diện ---------------- */
  var sidebar = null, bottomBar = null, statsEls = null, profileEls = null, achNumEl = null;

  function navButtonsHtml(cls, icoCls) {
    var out = "";
    for (var i = 0; i < NAV.length; i++) {
      var n = NAV[i];
      out += '<button type="button" class="' + cls + '" data-shell-act="' + n.act + '" style="--ttc-shell-c:' + n.color + '">' +
        '<span class="' + icoCls + '" aria-hidden="true">' + n.icon + "</span>" + esc(n.label) + "</button>";
    }
    return out;
  }

  function buildSidebar() {
    if (byId("ttcShellSidebar")) return true;
    if (!document.body) return false;
    var aside = document.createElement("aside");
    aside.id = "ttcShellSidebar";
    aside.setAttribute("aria-label", "Điều hướng chính");
    aside.innerHTML =
      '<div class="ttc-shell-brand"><img src="assets/index2/otter-full.webp" alt="" width="40" height="40" />' +
      '<div><div class="ttc-shell-brand-name">Thích Tiếng Trung 3.0</div>' +
      '<div class="ttc-shell-brand-sub">Học tiếng Trung · Thi HSK</div></div></div>' +
      '<nav class="ttc-shell-nav" aria-label="Khu học tập">' + navButtonsHtml("ttc-shell-item", "ttc-shell-ico") + "</nav>" +
      '<div class="ttc-shell-util" id="ttcShellUtil"></div>' +
      '<div class="ttc-shell-stats"><div class="ttc-shell-stats-num" id="ttcShellStatsNum">0</div>' +
      '<div class="ttc-shell-stats-lbl">từ đã học trên thiết bị này</div>' +
      '<div class="ttc-shell-stats-bar"><i id="ttcShellStatsBar"></i></div>' +
      '<div class="ttc-shell-stats-cap" id="ttcShellStatsCap">HSK 1 · 0 / 300 từ</div></div>' +
      '<div><div class="ttc-shell-profile"><span class="ttc-shell-avatar" id="ttcShellAvatar">?</span>' +
      '<div style="min-width:0"><div class="ttc-shell-pname" id="ttcShellPName">Khách</div>' +
      '<div class="ttc-shell-pmail" id="ttcShellPMail">Chưa đăng nhập</div></div></div>' +
      '<button type="button" class="ttc-shell-pbtn" id="ttcShellPBtn">Đăng nhập</button></div>';
    document.body.appendChild(aside);
    sidebar = aside;
    statsEls = { num: byId("ttcShellStatsNum"), bar: byId("ttcShellStatsBar"), cap: byId("ttcShellStatsCap") };
    profileEls = { avatar: byId("ttcShellAvatar"), name: byId("ttcShellPName"), mail: byId("ttcShellPMail"), btn: byId("ttcShellPBtn") };
    profileEls.btn.addEventListener("click", function () { runAction("account"); });
    return true;
  }

  function buildBottomBar() {
    if (byId("ttcShellBottomBar")) return true;
    if (!document.body) return false;
    var bar = document.createElement("nav");
    bar.id = "ttcShellBottomBar";
    bar.setAttribute("aria-label", "Điều hướng dưới");
    bar.innerHTML = navButtonsHtml("ttc-shell-bitem", "ttc-shell-bico");
    document.body.appendChild(bar);
    bottomBar = bar;
    return true;
  }

  function buildRailAch() {
    if (byId("ttcShellRailAch")) return true;
    var side = $(".otter2-dash-side");
    if (!side) return false;
    var card = document.createElement("section");
    card.className = "otter2-dash-card";
    card.id = "ttcShellRailAch";
    card.setAttribute("aria-labelledby", "ttcShellRailAchTitle");
    card.innerHTML =
      '<div class="otter2-dash-head"><h2 id="ttcShellRailAchTitle" style="color:#2563eb">Bảng thành tích</h2></div>' +
      '<div class="ttc-shell-ach-num" id="ttcShellAchNum">0</div>' +
      '<div class="ttc-shell-ach-lbl">từ đã học của bạn · bảng xếp hạng theo số từ đã học</div>' +
      '<button type="button" class="ttc-shell-ach-btn" id="ttcShellAchBtn">Xem bảng thành tích</button>';
    side.appendChild(card);
    achNumEl = byId("ttcShellAchNum");
    byId("ttcShellAchBtn").addEventListener("click", function () {
      var d = byId("otter2DashAchBtn");
      if (d) { d.click(); return; }
      if (typeof window.otter2OpenAchievementBoard === "function") { window.otter2OpenAchievementBoard(); return; }
      var n = byId("otter2AchNavBtn");
      if (n) n.click();
    });
    return true;
  }

  function moveContinueCard() {
    var cont = $(".otter2-dash-continue");
    var main = $(".otter2-dash-main");
    if (!cont || !main) return false;
    if (cont.parentNode !== main) main.insertBefore(cont, main.firstChild);
    return true;
  }

  /* V2: Lộ trình vào cột giữa, ngay sau Học tiếp (thứ tự của mẫu). */
  function moveRoadCard() {
    var road = $(".otter2-dash-road");
    var course = $(".otter2-dash-course");
    var main = $(".otter2-dash-main");
    if (!road || !course || !main) return false;
    if (road.parentNode !== main) main.insertBefore(road, course);
    return true;
  }

  /* V2: dời các nút THẬT của thanh trên vào sidebar ở desktop
     (≥1200px) và trả về chỗ cũ khi <1200px. Dời node = giữ nguyên
     handler + id; nhãn chữ chỉ hiện trong sidebar (CSS ẩn ở header). */
  var mqDesk = window.matchMedia ? window.matchMedia("(min-width:1200px)") : { matches: false, addEventListener: null, addListener: null };
  function ensureUtilLabel(host, afterEl, text) {
    if (!host) return;
    if (host.querySelector(".ttc-shell-util-lbl")) return;
    var s = document.createElement("span");
    s.className = "ttc-shell-util-lbl";
    s.textContent = text;
    if (afterEl && afterEl.parentNode === host) host.insertBefore(s, afterEl.nextSibling);
    else host.appendChild(s);
  }
  function placeUtility() {
    var sw = byId("ttcScriptSwitch");
    var slot = $(".otter2-theme-slot");
    var mb = byId("ttcMenuBtn");
    if (mqDesk.matches) {
      var util = byId("ttcShellUtil");
      if (!util) return;
      if (sw && sw.parentNode !== util) util.appendChild(sw);
      if (slot && slot.parentNode !== util) {
        util.appendChild(slot);
        ensureUtilLabel(slot, byId("otter2ThemeNavBtn"), "Giao diện");
      }
      if (mb && mb.parentNode !== util) {
        util.appendChild(mb);
        ensureUtilLabel(mb, null, "Menu");
      }
    } else {
      var right = $(".otter2-nav-right");
      if (!right) return;
      var chat = byId("otter2ChatOnlineBtn");
      if (sw && sw.parentNode !== right) right.insertBefore(sw, chat);
      if (slot && slot.parentNode !== right) right.insertBefore(slot, chat);
      if (mb && mb.parentNode !== right) right.appendChild(mb);
    }
  }

  /* ---------------- trạng thái + số liệu ---------------- */
  function currentScreen() {
    var panels = document.querySelectorAll("[data-otter2-screen-panel]");
    for (var i = 0; i < panels.length; i++) {
      if (!panels[i].hidden) return panels[i].getAttribute("data-otter2-screen-panel");
    }
    return "home";
  }
  function syncActive() {
    var scr = currentScreen();
    var active = scr === "home" ? "home" : (scr === "reading" ? "reading" : null);
    var btns = document.querySelectorAll("[data-shell-act]");
    Array.prototype.forEach.call(btns, function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-shell-act") === active);
    });
  }
  function renderStats() {
    var map = getProgressMap();
    var counts = getCounts();
    var total = 0;
    for (var i = 1; i <= 9; i++) total += learnedOf(map, i);
    var lv = currentLevel();
    var lvTotal = Number(counts[String(lv)]) || 0;
    var lvLearned = learnedOf(map, lv);
    var pct = lvTotal ? Math.round((lvLearned / lvTotal) * 100) : 0;
    if (statsEls) {
      statsEls.num.textContent = fmt(total);
      statsEls.bar.style.width = pct + "%";
      statsEls.cap.textContent = "HSK " + lv + " · " + fmt(lvLearned) + " / " + fmt(lvTotal) + " từ · " + pct + "%";
    }
    if (achNumEl) achNumEl.textContent = fmt(total);
  }
  function renderProfile() {
    if (!profileEls) return;
    var u = currentUser();
    if (!u) {
      profileEls.avatar.textContent = "?";
      profileEls.name.textContent = "Khách";
      profileEls.mail.textContent = "Chưa đăng nhập";
      profileEls.btn.textContent = "Đăng nhập";
      return;
    }
    var name = displayName(u) || "Tài khoản của tôi";
    profileEls.avatar.textContent = name.charAt(0).toUpperCase();
    profileEls.name.textContent = name;
    profileEls.mail.textContent = u.email ? String(u.email) : "";
    profileEls.btn.textContent = "Tài khoản của tôi";
  }
  function renderAll() { renderStats(); renderProfile(); syncActive(); placeUtility(); }

  /* ---------------- khởi tạo ---------------- */
  var built = false;
  function build() {
    ensureStyle();
    var okSidebar = buildSidebar();
    var okBar = buildBottomBar();
    var okRail = buildRailAch();
    var okMove = moveContinueCard();
    var okRoad = moveRoadCard();
    placeUtility();
    if (okSidebar && okBar && okRail && okMove && okRoad) {
      if (!built) {
        built = true;
        if (mqDesk.addEventListener) mqDesk.addEventListener("change", placeUtility);
        else if (mqDesk.addListener) mqDesk.addListener(placeUtility);
        document.addEventListener("click", function (ev) {
          var t = ev.target && ev.target.closest ? ev.target.closest("[data-shell-act]") : null;
          if (t) { runAction(t.getAttribute("data-shell-act")); setTimeout(syncActive, 450); }
        });
        setInterval(renderAll, 4000);
        renderAll();
      }
      return true;
    }
    return false;
  }
  function init() {
    if (build()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (build() || tries > 40) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động; vô hại khi chạy thật. */
  window.__ttcShell = {
    actions: ACTIONS,
    els: function () { return { sidebar: sidebar, bottomBar: bottomBar, ach: byId("ttcShellRailAch") }; },
    renderAll: renderAll,
    placeUtility: placeUtility
  };
})();
