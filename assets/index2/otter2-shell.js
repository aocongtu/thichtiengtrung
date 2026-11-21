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
   1) SIDEBAR TRÁI cố định (desktop ≥900px, xem V3): 6 đích — Trang chủ ·
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

   ===== V3 — KHỚP MẪU Ở MỌI BỀ NGANG MÁY TÍNH (2026-11-19) =====
   Chủ web xem trên laptop thật: "chưa giống ở trên máy tính lắm /
   tài khoản không thấy phải nhấn menu mới xuất hiện". Đo đủ 13 bề
   ngang (redesign_impl/WIDTH_AUDIT.md) thấy HAI lỗi:
   (A) Sidebar chỉ hiện ≥1200px VÀ không có cuộn nội bộ: nội dung
       sidebar cao 833px nên ở màn hình thấp (1366×768, 1280×800,
       1536@125%…) khối HỒ SƠ ở đáy bị CẮT khỏi tầm mắt, không với
       tới được — tài khoản chỉ còn trong menu ☰.
   (B) Dải 768–1199px là VÙNG CHẾT: không sidebar, trang rơi về
       thanh pill cũ — không giống mẫu. Dải này chứa hầu hết laptop
       thật khi Windows phóng to (1536@150% = 1024px CSS, 1366@125%
       = 1093px CSS…).
   Sửa (vẫn chỉ otter2-shell.js):
   - Sidebar hiện từ ≥900px; dải 900–1199 dùng bản MỎNG 208px.
   - Thanh pill cũ nghỉ hưu từ ≥900px; cụm tiện ích (Giản/Phồn,
     Giao diện, ☰ Menu) dời vào sidebar theo cùng mốc 900px.
   - Đáy sidebar không bao giờ bị cắt nữa: các khối nén gọn lại,
     vùng MENU ĐIỀU HƯỚNG là phần co giãn + cuộn nội bộ
     (flex:1 + min-height:0 + overflow-y:auto), còn thương hiệu /
     tiện ích / thống kê / HỒ SƠ là flex:none — hồ sơ luôn GHIM
     hiện ở đáy sidebar ở mọi chiều cao; bản thân sidebar có
     overflow-y:auto làm lưới an toàn cuối. Màn hình rất thấp
     (≤700px) có thêm một nấc nén nữa.
   - 768–899px giữ header mỏng (nút Tài khoản THẬT của header vốn
     đã hiện sẵn không cần mở menu — đã đo kiểm); ≤767px giữ nguyên.

   ===== V4 — NÚT TÀI KHOẢN CHẾT + LỘ EMAIL + THƯƠNG HIỆU (2026-11-19) =====
   Chủ web chụp laptop bản live sau V3, báo 3 lỗi ở sidebar:
   (1) "Tài khoản nhấn vào không được" (đã đăng nhập): nút sidebar
       gọi #otter2AvatarBtn.click() mở #otter2AccountMenu, NHƯNG cú
       click THẬT của người dùng tiếp tục nổi bọt lên document —
       handler "bấm ra ngoài thì đóng" của otter2-account.js thấy
       menu vừa mở + target nằm ngoài menu/slot → đóng ngay trong
       cùng một event. Nút header thật tự stopPropagation nên sống;
       nút sidebar thì không. Sửa: listener của nút hồ sơ + cả hàng
       hồ sơ stopPropagation trước khi chạy action (đúng cách nút
       thật vẫn làm); hàng hồ sơ (avatar + tên) cũng bấm được.
       Kèm theo: nút rái cá của Bé guide (lớp roam z-90, bấm được)
       thỉnh thoảng đậu ĐÈ lên khối hồ sơ (sidebar vốn z-80) và ăn
       click thật — đã đo bằng elementFromPoint. Sửa trong shell:
       z-index sidebar 80 → 96 (trên mọi lớp guide 90/94/95; vẫn
       dưới xa menu ☰ 1000600, chat 12049 và khung tài khoản
       ~2,1 tỷ nên không đổi thứ tự lớp nào khác). Thanh dưới
       mobile giữ z-80 như thiết kế cũ.
   (2) Lộ email: dòng phụ dưới tên hiện email đầy đủ. Sửa: khi đã
       đăng nhập KHÔNG render email ở sidebar nữa (ẩn hẳn dòng phụ),
       chỉ avatar + tên; khách vẫn hiện "Chưa đăng nhập" như cũ.
   (3) Thương hiệu: ảnh rái cá là icon gãy (src assets/index2/
       otter-full.webp — file nhị phân không đẩy được qua push-files
       nên 404 trên bản live) và mất nháy cầu vồng 7 màu. Sửa: ảnh
       nhúng data-URI webp nhỏ cắt từ chính otter-full.webp (đúng
       tiền lệ bundle ảnh của web); tên trang gắn class .ttt-rainbow
       — CƠ CHẾ GỐC của web (index2.html) — và bỏ gradient tĩnh riêng
       của shell khỏi .ttc-shell-brand-name để không tranh chấp.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_SHELL__) return;
  window.__TTC_SHELL__ = true;

  /* Ảnh rái cá thương hiệu: nhúng data-URI (cắt vùng đầu từ
     otter-full.webp gốc, 120×120) — file .webp rời không qua được
     push-files (chỉ nhận text) nên bản live 404; data-URI là tiền
     lệ bundle ảnh của chính web này. */
  var BRAND_IMG = "data:image/webp;base64,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";

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
    dict: function () {
      /* Dùng ĐÚNG cơ chế tra từ sẵn có của Menu ☰ (otter2-menu.js):
         mở màn Từ điển (vocab) + cuộn tới #otter2DictRoot + focus ô
         #otter2DictSearch. Fallback tự làm tương tự nếu menu chưa nạp. */
      if (window.__ttcMenu && window.__ttcMenu.actions && typeof window.__ttcMenu.actions.dict === "function") { window.__ttcMenu.actions.dict(); return; }
      ensureScreen("vocab");
      setTimeout(function () {
        var root = document.getElementById("otter2DictRoot");
        if (root && root.scrollIntoView) root.scrollIntoView({ behavior: "smooth", block: "start" });
        var inp = document.getElementById("otter2DictSearch");
        if (inp) { try { inp.focus({ preventScroll: true }); } catch (e) { inp.focus(); } }
      }, 380);
    },
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
    { act: "home", icon: "🏠", label: "Trang chủ", color: "#16283F" },
    { act: "roadmap", icon: "🗺️", label: "Lộ trình HSK", color: "#16283F" },
    { act: "story", icon: "🎬", label: "Phòng truyện", color: "#16283F" },
    { act: "reading", icon: "📖", label: "Phòng đọc", color: "#16283F" },
    { act: "exam", icon: "📝", label: "Thi HSK", color: "#16283F" },
    { act: "chat", icon: "💬", label: "Tin nhắn", color: "#16283F" }
  ];

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcShellStyle")) return;
    var css = [
      /* ===== SIDEBAR (hiện ≥900px; 900–1199 bản mỏng 208px) ===== */
      "#ttcShellSidebar{position:fixed;left:0;top:0;bottom:0;width:236px;background:#ffffff;border-right:1px solid #e7e9ee;z-index:96;display:none;flex-direction:column;padding:14px 14px calc(12px + env(safe-area-inset-bottom,0px));box-sizing:border-box;font-size:15px;line-height:1.45;color:#16283F;overflow-y:auto;overflow-x:hidden}",
      "@media (min-width:900px){#ttcShellSidebar{display:flex}html body.otter2-body{padding-left:236px}}",
      "@media (min-width:900px) and (max-width:1199px){#ttcShellSidebar{width:208px;padding:12px 10px calc(10px + env(safe-area-inset-bottom,0px))}html body.otter2-body{padding-left:208px}#ttcShellSidebar .ttc-shell-brand-name{font-size:15px}#ttcShellSidebar .ttc-shell-item{padding:9px 10px;font-size:14.5px}#ttcShellSidebar #ttcMenuBtn{padding:9px 10px;font-size:14.5px}}",
      /* Đáy sidebar không bị cắt: điều hướng là phần co giãn + cuộn nội bộ; hồ sơ ghim hiện ở đáy */
      "#ttcShellSidebar .ttc-shell-brand{flex:0 0 auto}",
      "#ttcShellSidebar .ttc-shell-util{flex:0 0 auto}",
      "#ttcShellSidebar .ttc-shell-stats{flex:0 0 auto}",
      "#ttcShellSidebar>div:last-child{flex:0 0 auto}",
      "@media (min-width:900px) and (max-height:700px){#ttcShellSidebar .ttc-shell-item{padding:7px 12px}#ttcShellSidebar .ttc-shell-brand{padding-bottom:8px}#ttcShellSidebar .ttc-shell-brand img{width:34px;height:34px}#ttcShellSidebar .ttc-shell-stats .ttc-shell-stats-num{font-size:21px}#ttcShellSidebar .ttc-shell-stats{padding-top:9px}#ttcShellSidebar .ttc-shell-profile{padding-top:9px;margin-top:7px}}",
      /* Học tiếp lên HÀNG 1 phủ 2 cột của lưới cột giữa (desktop ≥1021px, nơi .otter2-dash-main là lưới thật); khoá học + cụm thi lùi hàng 2, bài học hàng 3 — đúng thứ tự mẫu duyệt: Học tiếp → Khoá học → Bài học. Selector chép đúng selector gốc để thắng bằng thứ tự nạp. */
      "@media (min-width:1021px){",
      "#otter2-home .otter2-dash-continue{grid-column:1/-1;grid-row:1}",
      "#otter2-home .otter2-dash-course{grid-row:2}",
      "#otter2-home .ttc-exam-midstack{grid-row:2}",
      "#otter2-home .otter2-dash-main > section[aria-labelledby=\"otter2DashLessonsTitle\"]{grid-row:3}",
      "}",
      ".ttc-shell-brand{display:flex;align-items:center;gap:10px;padding:2px 6px 8px;border-bottom:1px solid #f1f5f9}",
      ".ttc-shell-brand img{width:40px;height:40px;border-radius:12px;object-fit:cover;flex:0 0 auto}",
      ".ttc-shell-brand .ttc-shell-brand-name{font-weight:900;font-size:16.5px;line-height:1.2}",
      ".ttc-shell-brand .ttc-shell-brand-sub{font-size:11.5px;color:#64748b;font-weight:600}",
      ".ttc-shell-nav{display:flex;flex-direction:column;gap:4px;padding:10px 0 4px;flex:1 1 auto;min-height:0;overflow-y:auto}",
      ".ttc-shell-item{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:9px 12px;border:none;border-radius:12px;background:#ffffff;font:inherit;font-size:15px;font-weight:600;color:#16283F;text-align:left;cursor:pointer;box-shadow:inset 0 0 0 rgba(0,0,0,0);flex:0 0 auto}",
      ".ttc-shell-item:hover{background:#f8fafc}",
      ".ttc-shell-item:focus-visible{outline:2px solid var(--ttc-shell-c,#E3E8EF);outline-offset:-2px}",
      ".ttc-shell-item .ttc-shell-ico{flex:0 0 auto;width:32px;height:32px;border-radius:10px;background:#f1f5f9;display:inline-flex;align-items:center;justify-content:center;font-size:16px}",
      ".ttc-shell-item.is-active{background:#f8fafc;font-weight:800;color:var(--ttc-shell-c,#16283F);box-shadow:inset 3px 0 0 var(--ttc-shell-c,#F97316)}",
      ".ttc-shell-stats{margin-top:auto;border-top:1px solid #f1f5f9;padding:9px 6px 3px}",
      ".ttc-shell-stats .ttc-shell-stats-num{font-size:24px;font-weight:900;color:#16283F;line-height:1.1}",
      ".ttc-shell-stats .ttc-shell-stats-lbl{font-size:12.5px;color:#64748b;font-weight:600}",
      ".ttc-shell-stats .ttc-shell-stats-bar{height:8px;border-radius:99px;background:#f1f5f9;margin:9px 0 5px;overflow:hidden}",
      ".ttc-shell-stats .ttc-shell-stats-bar i{display:block;height:100%;background:#F97316;border-radius:99px;width:0%}",
      ".ttc-shell-stats .ttc-shell-stats-cap{font-size:12px;color:#64748b}",
      ".ttc-shell-profile{display:flex;align-items:center;gap:10px;border-top:1px solid #f1f5f9;padding-top:9px;margin-top:6px;cursor:pointer}",
      ".ttc-shell-avatar{flex:0 0 auto;width:42px;height:42px;border-radius:50%;background:#F97316;color:#ffffff;display:inline-flex;align-items:center;justify-content:center;font-weight:900;font-size:17px}",
      ".ttc-shell-profile .ttc-shell-pname{font-weight:800;font-size:14.5px;line-height:1.25;word-break:break-word}",
      ".ttc-shell-profile .ttc-shell-pmail{font-size:12px;color:#64748b;word-break:break-all}",
      ".ttc-shell-pbtn{margin-top:7px;width:100%;padding:9px 12px;border:none;border-radius:12px;background:#F97316;color:#ffffff;font:inherit;font-size:14px;font-weight:800;cursor:pointer}",
      ".ttc-shell-pbtn:hover{background:#4c1d95}",
      /* ===== THẺ BẢNG THÀNH TÍCH Ở CỘT PHẢI (mọi bề ngang) ===== */
      "#ttcShellRailAch .ttc-shell-ach-num{font-size:30px;font-weight:900;color:#16283F;line-height:1.1}",
      "#ttcShellRailAch .ttc-shell-ach-lbl{font-size:12.5px;color:#64748b;font-weight:600;margin-top:2px}",
      "#ttcShellRailAch .ttc-shell-ach-btn{margin-top:12px;width:100%;padding:11px;border:none;border-radius:12px;background:#F97316;color:#ffffff;font:inherit;font-size:14.5px;font-weight:800;cursor:pointer}",
      "#ttcShellRailAch .ttc-shell-ach-btn:hover{background:#F97316}",
      "@media (max-width:1020px){#ttcShellRailAch{grid-column:1/-1}}",
      /* ===== THANH DƯỚI ĐIỆN THOẠI (≤767px) ===== */
      "#ttcShellBottomBar{position:fixed;left:0;right:0;bottom:0;z-index:80;background:#ffffff;border-top:1px solid #e7e9ee;display:none;padding-bottom:env(safe-area-inset-bottom,0px);box-sizing:border-box}",
      "#ttcShellBottomBar .ttc-shell-bitem{flex:1 1 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:7px 2px 6px;border:none;background:#ffffff;font:inherit;font-size:10.5px;font-weight:700;color:#16283F;cursor:pointer;min-height:56px;box-sizing:border-box}",
      "#ttcShellBottomBar .ttc-shell-bitem .ttc-shell-bico{font-size:19px;line-height:1.15}",
      "#ttcShellBottomBar .ttc-shell-bitem.is-active{color:var(--ttc-shell-c,#16283F)}",
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
      "@media (min-width:900px){#otter2Nav{display:none}}",
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
      ".ttc-shell-util{display:flex;flex-direction:column;gap:4px;padding:6px 0 2px}",
      /* dải mỏng 900–1199: cột giữa hẹp, 9 nấc Lộ trình xếp 5+4 cho dễ đọc (mặc định 9 nấc 1 hàng bị ép ~45px/nấc) */
      "@media (min-width:900px) and (max-width:1199px){#otter2-home .otter2-dash-steps{grid-template-columns:repeat(5,1fr)}}",
      "#ttcShellSidebar .ttc-script-switch{width:100%;box-sizing:border-box;text-align:center;padding:9px 10px;border-radius:12px;font-size:13.5px}",
      "#ttcShellSidebar .otter2-theme-slot{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:2px 6px;position:relative}",
      "#ttcShellSidebar #ttcMenuBtn{width:100%;height:auto;margin:0;padding:11px 12px;justify-content:flex-start;gap:11px;border-radius:12px;border:1px solid #e7e9ee;background:#ffffff;font:inherit;font-size:15px;font-weight:600;color:#16283F;box-shadow:none}",
      "#ttcShellSidebar #ttcMenuBtn:hover{background:#f8fafc;border-color:#e7e9ee}",
      ".ttc-shell-util-lbl{font-size:15px;font-weight:600;color:#16283F}",
      "#otter2Nav .ttc-shell-util-lbl{display:none}",
      /* ===== V3 (2026-11-19): nút Tìm kiếm ở cột trái + vá "trống hoác" trang chủ =====
         (1) Anh Huy không thấy nút tìm kiếm: bản redesign chỉ còn lối vào
         Từ điển chôn trong Menu ☰. Thêm ô tìm kiếm ngay dưới khối thương
         hiệu ở cột trái (chỉ hiện ≥900px cùng cột trái; ≤899px dùng Menu ☰
         → Từ điển như cũ), bấm vào đi thẳng cơ chế tra từ SẴN CÓ
         (__ttcMenu.actions.dict: mở màn vocab + focus #otter2DictSearch).
         (2) Khoảng trống: cột phải (Nhiệm vụ + Bảng thành tích) chỉ cao
         ~570px trong khi cột giữa cao ~2000–3000px → ghim sticky để khối
         tiện ích đi theo khi cuộn, hết dải trống dài bên phải.
         (3) Dải 1021–1279px: hai cột giữa bị ép còn ~200–290px khiến thẻ
         Khóa học và chồng thẻ giữa lệch nhau 280–690px (chồng giữa phình
         cao) → xếp thành MỘT cột rộng: hết khoảng trống dưới thẻ Khóa
         học, thẻ rộng và thấp hơn hẳn. ≥1280px giữ nguyên bố cục mẫu. */
      ".ttc-shell-search{flex:0 0 auto;display:flex;align-items:center;gap:9px;margin:0 14px 10px;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:14px;background:#f8fafc;color:#64748b;font:inherit;font-size:14px;font-weight:600;cursor:pointer;text-align:left;transition:border-color .15s,background .15s,color .15s}",
      ".ttc-shell-search:hover{border-color:#cbd5e1;background:#ffffff;color:#334155}",
      ".ttc-shell-search:focus-visible{outline:2px solid #E3E8EF;outline-offset:2px}",
      ".ttc-shell-search.is-active{border-color:#E3E8EF;background:#F7F8FA;color:#16283F}",
      ".ttc-shell-search-ico{font-size:15px;line-height:1;flex:0 0 auto}",
      ".ttc-shell-search-tx{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      "html[data-theme=\"night\"] .ttc-shell-search{background:#16283F;border-color:#334155;color:#94a3b8}",
      "html[data-theme=\"night\"] .ttc-shell-search.is-active{background:#3b1220;border-color:#E3E8EF;color:#3C4756}",
      /* (html overflow-x:visible ở ≥1021px: index2 đặt overflow-x:hidden trên CẢ html lẫn body khiến position:sticky bị Chrome vô hiệu thầm lặng — đã kiểm chứng thực nghiệm: nới riêng html là sticky chạy, body vẫn giữ hidden làm chốt chặn tràn ngang.) */
      "@media (min-width:1021px){html{overflow-x:visible}#otter2-home .otter2-dash-side{position:sticky;top:16px;align-self:start}}",
      "@media (min-width:1021px) and (max-width:1279px){#otter2-home .otter2-dash-main{grid-template-columns:minmax(0,1fr)}#otter2-home .otter2-dash-main>.otter2-dash-course{grid-column:1;grid-row:3}#otter2-home .ttc-exam-midstack{grid-column:1;grid-row:4}#otter2-home .otter2-dash-main>section[aria-labelledby=\"otter2DashLessonsTitle\"]{grid-column:1/-1;grid-row:5}}"
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
      '<div class="ttc-shell-brand"><img src="' + BRAND_IMG + '" alt="" width="40" height="40" />' +
      '<div><div class="ttc-shell-brand-name ttt-rainbow">Thích Tiếng Trung 3.0</div>' +
      '<div class="ttc-shell-brand-sub">Học tiếng Trung · Thi HSK</div></div></div>' +
      '<button type="button" class="ttc-shell-search" id="ttcShellSearch" aria-label="Tìm kiếm từ điển"><span class="ttc-shell-search-ico" aria-hidden="true">🔍</span><span class="ttc-shell-search-tx">Tìm kiếm từ điển</span></button>' +
      '<nav class="ttc-shell-nav" aria-label="Khu học tập">' + navButtonsHtml("ttc-shell-item", "ttc-shell-ico") + "</nav>" +
      '<div class="ttc-shell-util" id="ttcShellUtil"></div>' +
      '<div class="ttc-shell-stats"><div class="ttc-shell-stats-num" id="ttcShellStatsNum">0</div>' +
      '<div class="ttc-shell-stats-lbl">từ đã học trên thiết bị này</div>' +
      '<div class="ttc-shell-stats-bar"><i id="ttcShellStatsBar"></i></div>' +
      '<div class="ttc-shell-stats-cap" id="ttcShellStatsCap">HSK 1 · 0 / 300 từ</div></div>' +
      '<div><div class="ttc-shell-profile" id="ttcShellProfile"><span class="ttc-shell-avatar" id="ttcShellAvatar">?</span>' +
      '<div style="min-width:0"><div class="ttc-shell-pname" id="ttcShellPName">Khách</div>' +
      '<div class="ttc-shell-pmail" id="ttcShellPMail">Chưa đăng nhập</div></div></div>' +
      '<button type="button" class="ttc-shell-pbtn" id="ttcShellPBtn">Đăng nhập</button></div>';
    document.body.appendChild(aside);
    sidebar = aside;
    statsEls = { num: byId("ttcShellStatsNum"), bar: byId("ttcShellStatsBar"), cap: byId("ttcShellStatsCap") };
    profileEls = { avatar: byId("ttcShellAvatar"), name: byId("ttcShellPName"), mail: byId("ttcShellPMail"), btn: byId("ttcShellPBtn") };
    /* stopPropagation là BẮT BUỘC (V4): otter2-account.js có handler
       document "bấm ra ngoài thì đóng menu tài khoản" — cú click thật
       của người dùng mà nổi bọt tới document sẽ đóng ngay menu mà
       #otter2AvatarBtn.click() vừa mở, trong cùng một event (nút
       header thật sống sót vì handler của nó tự stopPropagation). */
    profileEls.btn.addEventListener("click", function (ev) { if (ev) ev.stopPropagation(); runAction("account"); });
    var profRow = byId("ttcShellProfile");
    if (profRow) profRow.addEventListener("click", function (ev) { if (ev) ev.stopPropagation(); runAction("account"); });
    /* Nút Tìm kiếm cột trái: listener riêng (không dùng data-shell-act
       để không lẫn vào nhóm 6 điểm đến điều hướng của sidebar). */
    var searchBtn = byId("ttcShellSearch");
    if (searchBtn) searchBtn.addEventListener("click", function () { runAction("dict"); });
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
      '<div class="otter2-dash-head"><h2 id="ttcShellRailAchTitle" style="color:#16283F">Bảng thành tích</h2></div>' +
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

  /* V2/V3: dời các nút THẬT của thanh trên vào sidebar ở desktop
     (≥900px) và trả về chỗ cũ khi <900px. Dời node = giữ nguyên
     handler + id; nhãn chữ chỉ hiện trong sidebar (CSS ẩn ở header). */
  var mqDesk = window.matchMedia ? window.matchMedia("(min-width:900px)") : { matches: false, addEventListener: null, addListener: null };
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
    var sBtn = byId("ttcShellSearch");
    if (sBtn) sBtn.classList.toggle("is-active", scr === "vocab");
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
      profileEls.mail.style.display = "";
      profileEls.btn.textContent = "Đăng nhập";
      return;
    }
    var name = displayName(u) || "Tài khoản của tôi";
    profileEls.avatar.textContent = name.charAt(0).toUpperCase();
    profileEls.name.textContent = name;
    /* V4: KHÔNG render email ở sidebar (chủ web phản ánh lộ gmail) —
       ẩn hẳn dòng phụ, khối hồ sơ chỉ còn avatar + tên. Email vẫn
       nguyên trong khung tài khoản khi mở ra. */
    profileEls.mail.textContent = "";
    profileEls.mail.style.display = "none";
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
