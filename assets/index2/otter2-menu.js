/* ============================================================
   MENU ĐIỀU HƯỚNG ☰ — otter2-menu.js (2026-11-18)

   Chủ web duyệt thêm menu hamburger kiểu Study4 cho trang chủ:
   nút ☰ nằm ở header (trong .otter2-nav-right, ngay sau ô tài
   khoản), mở panel gồm 3 nhóm: HỌC TẬP / TÀI KHOẢN / THÔNG TIN.

   NGUYÊN TẮC BỀ MẶT (chủ web chốt 2026-11-18, đợt bỏ loè loẹt):
   panel menu TRẮNG TINH hoàn toàn — nền panel #fff, các hàng mục
   cũng trắng, viền mảnh trung tính. Panel giữ nguyên trắng trong
   MỌI theme (kể cả Ban đêm) theo đúng lệnh "cột menu phải trắng
   hết". Tiêu đề cầu vồng 7 màu của trang vẫn là điểm rực duy
   nhất — module này không đụng vào nó.

   LUẬT MÀU (chủ web chốt 2026-11-18): "Tiêu đề màu nào thì nút
   bấm màu đó — cấm sử dụng màu đen." Mỗi nhóm có MỘT màu chủ đạo
   riêng: Học tập = đỏ thương hiệu #be123c, Tài khoản = tím
   #5b21b6, Thông tin = xanh #0369a1. Chữ tiêu đề nhóm và chữ
   các nút/hàng mục trong nhóm dùng đúng màu chủ đạo đó (nền
   hàng vẫn trắng tinh); nút ☰ mang màu đỏ thương hiệu. Không
   dùng đen cho bất kỳ tiêu đề hay nút nào trong menu.

   ĐIỀU HƯỚNG — tái dùng đúng cơ chế sẵn có của web, không chế
   cơ chế song song:
   - Học từ vựng: đúng các bước "reveal" của Bé (otter2-guide.js,
     dest "vocab"): mở Hành trình bằng #otter2OpenVocabBankBtn,
     mở workspace bằng nút cấp 1 trong #otter2HskLevelRow — chỉ
     bấm khi đích còn ẩn (cả hai đều là nút gạt mở/đóng).
   - Chuyển màn hình: bấm đúng nút điều hướng của web trong
     #otter2NavLinks ([data-otter2-screen]) — cùng cách Bé dùng
     trong ensureScreen().
   - Luyện đọc / Học theo video / Thi thử / Viết chữ Hán / Bảng
     thành tích: bấm thẳng nút THẬT của từng khu (#ttcReading-
     Launcher, #otter2FeatStoryVideo, #otter2FeatExam, ô
     [data-dash-goto="write"], #otter2DashAchBtn) — cùng đích mà
     footer (otter2-footer.js) đang bấm.
   - Bảng điểm thi: bảng này CHỈ mở bằng click thật (trusted)
     lên #otter2AchNavBtn (otter2-exam.js cố ý chặn click tổng
     hợp để phân biệt với Bảng thành tích), nên menu dùng đúng
     chuyến dẫn đường của Bé: bấm chip "Bảng điểm thi" trong
     #guideChips rồi bấm #guideGo — Bé chạy tới đóng khung nút
     Bảng Điểm Thi ở thanh trên cùng, học viên chạm vào là mở.
     Nếu Bé vắng mặt (module guide lỗi), dự phòng: bấm
     #otter2AchNavBtn (mở Bảng thành tích — giới hạn đã biết).
   - Tài khoản: trạng thái đọc đúng như requireLogin() của web
     (window.currentUser || window.otter2Account.user). Đăng
     nhập mở qua window.otter2AccountOpenLogin() (điểm vào chuẩn
     mà requireLogin/premium-gate cùng dùng), dự phòng bấm nút
     thật #otter2OpenLoginBtn trong khung tài khoản. "Tài khoản
     của tôi" bấm #otter2AvatarBtn (mở khung tài khoản sẵn có).
     Đăng xuất bấm nút thật #otter2LogoutBtn (handler do
     otter2-account.js gắn) — module này không tự xử lý phiên.

   KỸ THUẬT: module additive thuần — index2.html chỉ thêm 1 thẻ
   <script> nạp file này; không sửa script inline nào, không
   xoá/đổi id nào. Panel gắn vào <body> (không nằm trong header)
   để tránh backdrop-filter của .otter2-nav "giam" position:fixed
   — cùng lý do #otter2AccountMenu đứng ngoài nav.

   MỞ RỘNG ĐẦY ĐỦ (2026-11-18, chủ web test live và yêu cầu "menu
   này sẽ có đầy đủ nội dung học", liệt kê tới TỪNG chức năng lá):
   kiểm kê theo 18 điểm đến của Bé (otter2-guide.js) + nav chính +
   các module, nhóm HỌC TẬP nay gồm mọi khu/chức năng học thật:
   Lộ trình từ vựng (bấm đúng #ttcPathLauncher — cùng nút thẻ hero
   bấm, qua window.ttcEnsurePathShell khi nút chưa dựng), Hành
   trình HSK (mở #otter2HskJourney rồi cuộn tới, không mở
   workspace), Tra từ điển (màn "vocab" + cuộn tới #otter2DictRoot
   + focus ô #otter2DictSearch), 4 chế độ Thi thử (mở overlay thi
   rồi bấm đúng chip [data-exam-mode] thật trong overlay: full /
   reduced / mini / standard), Ngữ pháp / Luyện phát âm / 214 Bộ
   thủ / Thẻ ghi nhớ (bấm các nút #otter2Feat* thật ở Khóa tự học),
   Học tự động + 2 nút lá của nó (#otter2AutoVocabBtn /
   #otter2AutoExampleBtn trên màn "auto"), Hệ thống giọng đọc
   (#otter2VoiceSystemBtn). Bảng điểm thi nay gọi thẳng API module
   thi đã phơi (window.otter2OpenScoreBoard) khi có — chuyến dẫn
   đường của Bé chỉ còn là dự phòng.
   Nhóm LUYỆN TẬP MỚI (màu teal #0f766e — màu "Hoạt động học tập"
   của trang, theo đúng luật màu): 6 chức năng lá của khu Luyện
   tập, mỗi mục bấm thẳng nút THẬT tương ứng trong
   #ttcActionFrameButtons (Test từ vựng / Luyện câu / Luyện đọc /
   Gõ Hán tự / Nối từ đúng / Phản xạ đoán nghĩa) sau khi chuyển
   màn "reading" — vào thẳng từng chức năng, không dừng ở hub.
   Loại trừ có lý do (đã kiểm kê, không đưa vào menu): nút Giản ⇄
   Phồn + bảng màu giao diện + Chat Online (đã nằm sẵn ở header);
   Premium (mục thương mại, chủ web đã loại từ đợt đầu); banner
   Cộng đồng Facebook (không phải nội dung học, banner nằm sẵn ở
   trang chủ); thẻ Bài học mỗi ngày + các nút tắt dashboard Học
   tiếp / Nhiệm vụ hôm nay (chỉ là lối tắt về các đích đã có mục
   riêng); màn Tổng quan (không có lối vào điều hướng thật).
   VỊ TRÍ NÚT: desktop/tablet nút nằm cuối .otter2-nav-right (góc
   phải header). Điện thoại (≤767px, header dạng lưới stage 5):
   CSS của module gán #ttcMenuBtn vào grid-area "account" + lùi
   trái 50px → nút ☰ ở GÓC PHẢI TRÊN CÙNG, ngay cạnh trái nút
   tài khoản tròn (yêu cầu chủ web 2026-11-18, mẫu Study4).

   GỌN MENU 12 MỤC / 3 NHÓM (REDESIGN GĐ1, 2026-11-19 — bản thiết
   kế đã duyệt BLUEPRINT + ADDENDUM_FINAL, luật nút bấm: "gộp tính
   năng, không gộp nút"; các tính năng lá chuyển vào PHÒNG):
   - HỌC TẬP (đỏ, 6 mục): Phòng truyện · Phòng đọc · Phòng từ
     vựng · Lộ trình từ vựng · Thi HSK · Bài học mỗi ngày.
   - LUYỆN TẬP (teal, 6 mục): Tin nhắn · Bảng thành tích · Bảng
     điểm thi · Từ điển · Viết chữ Hán · Bộ thủ.
   - TÀI KHOẢN & THÔNG TIN (tím): khối tài khoản động như cũ +
     5 liên kết chính sách (giữ nguyên màu xanh #0369a1 của nhóm
     Thông tin cũ qua lớp .ttc-menu-info-link).
   Nhóm Ứng dụng (PWA, #ttcMenuAppSec) giữ nguyên — chỉ hiện khi
   cài đặt khả thi. Mọi ACTION cũ (4 chế độ thi, 6 chức năng lá
   Luyện tập, Học tự động, giọng đọc…) VẪN nằm trong ACTIONS —
   chúng nay được mở từ bên trong các Phòng (Kho từ / Phòng đọc /
   cổng Thi HSK) và Bé guide vẫn tới được mọi đích như trước;
   menu chỉ thôi LIỆT KÊ từng lá. Đổi tên mục = đổi NHÃN hiển thị
   (Phòng truyện/Phòng đọc/Phòng từ), action và đích thật không
   đổi — đúng luật dữ liệu của bản thiết kế.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_MENU__) return;
  window.__TTC_MENU__ = true;

  /* REDESIGN GĐ1 (2026-11-19): 12 mục / 3 nhóm — xem ghi chú đầu
     file. Nhãn là tên PHÒNG mới; action giữ nguyên cơ chế thật. */
  var STUDY_ITEMS = [
    { act: "story", icon: "🎬", label: "Phòng truyện" },
    { act: "reading", icon: "📖", label: "Phòng đọc" },
    { act: "vocab", icon: "📚", label: "Phòng từ vựng" },
    { act: "path", icon: "🗺️", label: "Lộ trình từ vựng" },
    { act: "exam", icon: "📝", label: "Thi HSK" },
    { act: "lessons", icon: "📅", label: "Bài học mỗi ngày" }
  ];

  var PRACTICE_ITEMS = [
    { act: "chat", icon: "💬", label: "Tin nhắn" },
    { act: "ach", icon: "🏆", label: "Bảng thành tích" },
    { act: "scores", icon: "📋", label: "Bảng điểm thi" },
    { act: "dict", icon: "🔍", label: "Từ điển" },
    { act: "write", icon: "✍️", label: "Viết chữ Hán" },
    { act: "radicals", icon: "部", label: "Bộ thủ" }
  ];

  var POLICY_LINKS = [
    { label: "Giới thiệu", href: "gioi-thieu.html" },
    { label: "Chính sách bảo mật", href: "chinh-sach-bao-mat.html" },
    { label: "Điều khoản sử dụng", href: "dieu-khoan-su-dung.html" },
    { label: "Hướng dẫn thanh toán", href: "huong-dan-thanh-toan.html" },
    { label: "Hoàn tiền & khiếu nại", href: "chinh-sach-hoan-tien-khieu-nai.html" }
  ];

  function $(sel) { try { return document.querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function isVis(el) {
    if (!el || el.hidden) return false;
    var cs = null;
    try { cs = window.getComputedStyle(el); } catch (e) {}
    if (cs && (cs.display === "none" || cs.visibility === "hidden")) return false;
    return el.offsetParent !== null || (cs && cs.position === "fixed");
  }
  /* Chờ phần tử hiện thật (tối đa ~2,4s) rồi gọi cb(el|null) — mô
     phỏng waitVisible() của Bé cho các đích mở bất đồng bộ. */
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

  /* ---------------- style (TRẮNG TINH theo lệnh chủ web) ---------------- */
  var styleDone = false;
  function ensureStyle() {
    if (styleDone) return;
    styleDone = true;
    var css = [
      "#ttcMenuBtn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex:0 0 auto;margin-left:auto;border-radius:999px;border:1px solid #e2e8f0;background:#ffffff;color:#be123c;font-size:19px;line-height:1;cursor:pointer;box-shadow:0 2px 8px rgba(15,23,42,.05);padding:0}",
      "#ttcMenuBtn:hover{border-color:#f0a3b2}",
      "#ttcMenuBtn:focus-visible{outline:2px solid #be123c;outline-offset:2px}",
      "#ttcMenuPanel{position:fixed;z-index:1000600;width:min(322px,calc(100vw - 20px));max-height:calc(100vh - 84px);overflow-y:auto;background:#ffffff;color:#20242e;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 18px 44px rgba(15,23,42,.16);padding:8px 0 10px;font-size:15px;line-height:1.45;box-sizing:border-box}",
      "#ttcMenuPanel[hidden]{display:none}",
      ".ttc-menu-h{margin:10px 16px 4px;font-size:12px;font-weight:900;letter-spacing:1.2px;text-transform:uppercase}",
      ".ttc-menu-sec:first-child .ttc-menu-h{margin-top:4px}",
      ".ttc-menu-list{list-style:none;margin:0;padding:0}",
      ".ttc-menu-item{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:10px 16px;border:none;border-top:1px solid #f1f5f9;background:#ffffff;font:inherit;font-size:15px;font-weight:600;text-align:left;text-decoration:none;cursor:pointer}",
      ".ttc-menu-list li:first-child .ttc-menu-item{border-top:none}",
      ".ttc-menu-item:hover{background:#ffffff;font-weight:800;box-shadow:inset 3px 0 0 currentColor}",
      ".ttc-menu-item:focus-visible{outline:2px solid currentColor;outline-offset:-2px}",
      ".ttc-menu-ico{flex:0 0 auto;width:22px;text-align:center;font-size:17px}",
      "/* LUẬT MÀU: mỗi nhóm một màu chủ đạo — tiêu đề nhóm và chữ nút/hàng mục cùng màu đó; cấm đen */",
      ".ttc-menu-sec[data-sec='study'] .ttc-menu-h,.ttc-menu-sec[data-sec='study'] .ttc-menu-item{color:#be123c}",
      ".ttc-menu-sec[data-sec='practice'] .ttc-menu-h,.ttc-menu-sec[data-sec='practice'] .ttc-menu-item{color:#0f766e}",
      ".ttc-menu-sec[data-sec='account'] .ttc-menu-h,.ttc-menu-sec[data-sec='account'] .ttc-menu-item{color:#5b21b6}",
      ".ttc-menu-sec[data-sec='info'] .ttc-menu-h,.ttc-menu-sec[data-sec='info'] .ttc-menu-item{color:#0369a1}",
      "/* REDESIGN GĐ1: liên kết chính sách nay nằm trong nhóm 'Tài khoản & Thông tin' (màu tím) nhưng giữ màu xanh Thông tin #0369a1 đã chốt — luật màu theo ĐÍCH, không theo vị trí. */",
      ".ttc-menu-sec[data-sec='account'] .ttc-menu-item.ttc-menu-info-link{color:#0369a1}",
      "/* PWA (2026-11-19): nhóm Ứng dụng dùng đỏ thương hiệu — hành động của chính thương hiệu; mục ẩn mặc định, otter2-pwa.js chỉ hiện khi cài đặt khả thi (chưa cài + trình duyệt hỗ trợ + chưa bị người dùng tắt nhắc 30 ngày). */",
      ".ttc-menu-sec[data-sec='app'] .ttc-menu-h,.ttc-menu-sec[data-sec='app'] .ttc-menu-item{color:#be123c}",
      "#ttcMenuAppSec[hidden]{display:none}",
      "/* ĐIỆN THOẠI (≤767px): header là lưới 3 hàng, .otter2-nav-right bị display:contents nên nút ☰ thành grid item — gán nó vào đúng ô 'account' (góc PHẢI TRÊN CÙNG, hàng 1) và lùi trái 50px (= nút tài khoản tròn 42px + 8px khoảng cách) để nằm ngay cạnh trái nút tài khoản, ngang hàng thương hiệu. */",
      "@media (max-width:767px){#ttcMenuBtn{grid-area:account;justify-self:end;align-self:center;margin:0 50px 0 0}}",
      "/* DESKTOP/TABLET (≥768px): các nút cụm phải của web có order 1–4 (🎨/Giản-Phồn/💬/Tài khoản) — cho ☰ order 5 để nó luôn là nút PHẢI NHẤT của header, đồng bộ góc phải với bản điện thoại. */",
      "@media (min-width:768px){#ttcMenuBtn{order:5}}",
      ".ttc-menu-user{padding:8px 16px 2px}",
      ".ttc-menu-user-name{display:block;font-weight:800;font-size:15.5px;color:#5b21b6;word-break:break-word}",
      ".ttc-menu-user-mail{display:block;font-size:12.5px;color:#6b7280;word-break:break-all}"
    ];
    var st = document.createElement("style");
    st.id = "ttcMenuStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- dựng nút + panel ---------------- */
  var btn = null, panel = null, accountBox = null, open = false;

  function studyHtml() {
    var out = "";
    for (var i = 0; i < STUDY_ITEMS.length; i++) {
      out += '<li><button type="button" class="ttc-menu-item" data-act="' + STUDY_ITEMS[i].act + '">' +
        '<span class="ttc-menu-ico" aria-hidden="true">' + STUDY_ITEMS[i].icon + "</span>" +
        esc(STUDY_ITEMS[i].label) + "</button></li>";
    }
    return out;
  }
  function practiceHtml() {
    var out = "";
    for (var i = 0; i < PRACTICE_ITEMS.length; i++) {
      out += '<li><button type="button" class="ttc-menu-item" data-act="' + PRACTICE_ITEMS[i].act + '">' +
        '<span class="ttc-menu-ico" aria-hidden="true">' + PRACTICE_ITEMS[i].icon + "</span>" +
        esc(PRACTICE_ITEMS[i].label) + "</button></li>";
    }
    return out;
  }
  function policyHtml() {
    var out = "";
    for (var i = 0; i < POLICY_LINKS.length; i++) {
      out += '<li><a class="ttc-menu-item ttc-menu-info-link" href="' + esc(POLICY_LINKS[i].href) + '">' +
        '<span class="ttc-menu-ico" aria-hidden="true">›</span>' + esc(POLICY_LINKS[i].label) + "</a></li>";
    }
    return out;
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

  function renderAccount() {
    if (!accountBox) return;
    var u = currentUser();
    if (!u) {
      accountBox.innerHTML =
        '<ul class="ttc-menu-list"><li><button type="button" class="ttc-menu-item" data-act="login">' +
        '<span class="ttc-menu-ico" aria-hidden="true">🔐</span>Đăng nhập / Đăng ký</button></li></ul>';
      return;
    }
    var name = displayName(u);
    var mail = u && u.email ? String(u.email) : "";
    accountBox.innerHTML =
      '<div class="ttc-menu-user"><span class="ttc-menu-user-name">👤 ' + esc(name || "Tài khoản của tôi") + "</span>" +
      (mail && mail !== name ? '<span class="ttc-menu-user-mail">' + esc(mail) + "</span>" : "") + "</div>" +
      '<ul class="ttc-menu-list">' +
      '<li><button type="button" class="ttc-menu-item" data-act="account">' +
      '<span class="ttc-menu-ico" aria-hidden="true">⚙️</span>Tài khoản của tôi</button></li>' +
      '<li><button type="button" class="ttc-menu-item" data-act="logout">' +
      '<span class="ttc-menu-ico" aria-hidden="true">🚪</span>Đăng xuất</button></li></ul>';
  }

  function build() {
    if (byId("ttcMenuPanel")) return true;
    var slot = $(".otter2-nav-right") || byId("otter2Nav");
    if (!slot || !document.body) return false;
    ensureStyle();

    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "ttcMenuBtn";
    btn.textContent = "☰";
    btn.setAttribute("aria-label", "Mở menu điều hướng");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "ttcMenuPanel");
    slot.appendChild(btn);

    panel = document.createElement("div");
    panel.id = "ttcMenuPanel";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Menu điều hướng");
    panel.innerHTML =
      '<div class="ttc-menu-sec" data-sec="study"><p class="ttc-menu-h">Học tập</p>' +
      '<ul class="ttc-menu-list">' + studyHtml() + "</ul></div>" +
      '<div class="ttc-menu-sec" data-sec="practice"><p class="ttc-menu-h">Luyện tập</p>' +
      '<ul class="ttc-menu-list">' + practiceHtml() + "</ul></div>" +
      '<div class="ttc-menu-sec" data-sec="account"><p class="ttc-menu-h">Tài khoản &amp; Thông tin</p>' +
      '<div id="ttcMenuAccount"></div>' +
      '<ul class="ttc-menu-list">' + policyHtml() + "</ul></div>" +
      '<div class="ttc-menu-sec" data-sec="app" id="ttcMenuAppSec" hidden><p class="ttc-menu-h">Ứng dụng</p>' +
      '<ul class="ttc-menu-list"><li><button type="button" class="ttc-menu-item" data-act="install">' +
      '<span class="ttc-menu-ico" aria-hidden="true">📲</span>Cài ứng dụng vào điện thoại</button></li></ul></div>';
    document.body.appendChild(panel);
    accountBox = byId("ttcMenuAccount");
    renderAccount();

    btn.addEventListener("click", function (ev) {
      ev.stopPropagation();
      if (open) closeMenu(); else openMenu();
    });
    panel.addEventListener("click", function (ev) {
      var t = ev.target && ev.target.closest ? ev.target.closest("[data-act]") : null;
      if (!t) return; /* link Thông tin: để trình duyệt tự đi, panel tự đóng theo điều hướng trang */
      var act = t.getAttribute("data-act");
      closeMenu();
      runAction(act);
    });
    document.addEventListener("pointerdown", function (ev) {
      if (!open) return;
      if (panel.contains(ev.target) || btn.contains(ev.target)) return;
      closeMenu();
    }, true);
    document.addEventListener("keydown", function (ev) {
      if (open && ev.key === "Escape") { closeMenu(); try { btn.focus(); } catch (e) {} }
    });
    window.addEventListener("resize", function () { if (open) closeMenu(); });
    return true;
  }

  function placePanel() {
    if (!panel || !btn) return;
    var nav = byId("otter2Nav");
    var br = btn.getBoundingClientRect();
    var nr = nav ? nav.getBoundingClientRect() : br;
    var top = Math.round(nr.bottom + 8);
    panel.style.top = top + "px";
    panel.style.maxHeight = "calc(100vh - " + (top + 12) + "px)";
    /* Căn mép phải panel theo nút ☰ nhưng KẸP trong khung hình:
       trên điện thoại nút có thể nằm lệch trái (header xuống hàng)
       — không kẹp thì panel tràn khỏi mép trái (đã gặp ở test). */
    var pw = Math.min(322, window.innerWidth - 20);
    var right = Math.max(8, Math.round(window.innerWidth - br.right));
    var maxRight = Math.max(8, window.innerWidth - pw - 8);
    if (right > maxRight) right = maxRight;
    panel.style.right = right + "px";
  }

  function openMenu() {
    if (!panel) return;
    renderAccount(); /* trạng thái đăng nhập luôn tươi tại thời điểm mở */
    placePanel();
    panel.hidden = false;
    open = true;
    btn.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    if (!panel) return;
    panel.hidden = true;
    open = false;
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  /* ---------------- điều hướng: cơ chế sẵn có của web ---------------- */
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

  /* Mở overlay Thi thử rồi bấm đúng chip chế độ thật trong overlay
     ([data-exam-mode]) — chế độ được chọn sẵn khi overlay hiện. */
  function examMode(key) {
    ensureScreen("home");
    clickLater("#otter2FeatExam", 120);
    var tries = 0;
    (function check() {
      var chip = document.querySelector('#ttcExamOverlay.open [data-exam-mode="' + key + '"]');
      if (chip) { chip.click(); return; }
      tries++;
      if (tries < 15) setTimeout(check, 200);
    })();
  }
  /* Vào thẳng một chức năng lá của khu Luyện tập: chuyển màn
     "reading" rồi bấm đúng nút thật của chức năng trong hub. */
  function practiceBtn(sel) {
    ensureScreen("reading");
    clickLater(sel, 380);
  }

  var ACTIONS = {
    vocab: function () {
      ensureScreen("home");
      var journey = byId("otter2HskJourney");
      if (!isVis(journey)) {
        var openBtn = byId("otter2OpenVocabBankBtn");
        if (openBtn) openBtn.click();
      }
      whenVisible("#otter2HskJourney", function () {
        var ws = byId("otter2Hsk1Workspace");
        if (!isVis(ws)) {
          var node = document.querySelector('#otter2HskLevelRow [data-otter2-hsk="1"]');
          if (node) node.click();
        }
        whenVisible("#otter2Hsk1Workspace", function (el) {
          var t = el || byId("otter2HskJourney");
          if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    },
    path: function () {
      /* Lộ trình từ vựng: bấm đúng nút #ttcPathLauncher mà thẻ hero
         bấm (cùng handler, cùng cổng premium của module lộ trình).
         Nút do module roadmap dựng — chưa có thì nhờ shell dựng hộ,
         đúng cách openPathFromHero() của trang làm. */
      ensureScreen("home");
      setTimeout(function () {
        var launcher = byId("ttcPathLauncher");
        if (!launcher && typeof window.ttcEnsurePathShell === "function") {
          try { window.ttcEnsurePathShell(); } catch (e) {}
          launcher = byId("ttcPathLauncher");
        }
        if (launcher) { launcher.click(); return; }
        var panel = byId("ttcPathPanel");
        if (panel && typeof window.ttcEnterPathFullscreen === "function" &&
            typeof window.checkPremiumAccess === "function") {
          Promise.resolve(window.checkPremiumAccess(1)).then(function (ok) {
            if (!ok) return;
            panel.hidden = false;
            window.ttcEnterPathFullscreen();
            try { if (typeof window.__ttcPathRedraw === "function") window.__ttcPathRedraw(); } catch (e2) {}
          });
        }
      }, 150);
    },
    journey: function () {
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
    dict: function () {
      ensureScreen("vocab");
      setTimeout(function () {
        var root = byId("otter2DictRoot");
        if (root) root.scrollIntoView({ behavior: "smooth", block: "start" });
        var input = byId("otter2DictSearch");
        if (input) { try { input.focus({ preventScroll: true }); } catch (e) { try { input.focus(); } catch (e2) {} } }
      }, 380);
    },
    reading: function () {
      ensureScreen("reading");
      clickLater("#ttcReadingLauncher", 380);
    },
    /* REDESIGN GĐ1: Bài học mỗi ngày = thẻ dashboard thật trên
       trang chủ — chuyển về màn home rồi cuộn tới đúng thẻ. */
    lessons: function () {
      ensureScreen("home");
      setTimeout(function () {
        var card = document.querySelector('#otter2-home section[aria-labelledby="otter2DashLessonsTitle"]');
        if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    },
    /* REDESIGN GĐ1: Tin nhắn = mở đúng cửa sổ chat AI (nút thật
       #aichatLauncher ở góc phải); dự phòng nút Chat Online thật
       ở header khi module chat AI vắng mặt. */
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
    story: function () {
      ensureScreen("home");
      clickLater("#otter2FeatStoryVideo", 120);
    },
    exam: function () {
      ensureScreen("home");
      clickLater("#otter2FeatExam", 120);
    },
    examfull: function () { examMode("full"); },
    examreduced: function () { examMode("reduced"); },
    exammini: function () { examMode("mini"); },
    examstandard: function () { examMode("standard"); },
    ach: function () {
      var d = byId("otter2DashAchBtn");
      if (d) { d.click(); return; }
      var n = byId("otter2AchNavBtn");
      if (n) n.click();
    },
    scores: function () {
      /* Ưu tiên API module thi đã phơi sẵn (otter2-exam.js):
         window.otter2OpenScoreBoard mở thẳng bảng điểm. */
      if (typeof window.otter2OpenScoreBoard === "function") { window.otter2OpenScoreBoard(); return; }
      /* Dự phòng (module thi chưa nạp): Bảng Điểm Thi chỉ mở bằng
         click thật lên nút nav — nhờ Bé dẫn đường tới đóng khung
         nút đó (đúng cơ chế của Bé). */
      var chips = byId("guideChips");
      var go = byId("guideGo");
      if (chips && go) {
        var list = chips.querySelectorAll("button"), target = null;
        Array.prototype.forEach.call(list, function (b) {
          if ((b.textContent || "").trim() === "Bảng điểm thi") target = b;
        });
        if (target) { target.click(); go.click(); return; }
      }
      var n = byId("otter2AchNavBtn");
      if (n) n.click();
    },
    write: function () {
      ensureScreen("home");
      clickLater('.otter2-dash-skilltile[data-dash-goto="write"]', 120);
    },
    grammar: function () {
      ensureScreen("home");
      clickLater("#otter2FeatGrammar", 120);
    },
    pronun: function () {
      ensureScreen("home");
      clickLater("#otter2FeatPronun", 120);
    },
    radicals: function () {
      ensureScreen("home");
      clickLater("#otter2FeatRadicals", 120);
    },
    flash: function () {
      ensureScreen("home");
      clickLater("#otter2FeatFlashcard", 120);
    },
    auto: function () {
      ensureScreen("auto");
      setTimeout(function () {
        var hub = byId("otter2AutoHub");
        if (hub) hub.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 380);
    },
    autovocab: function () {
      ensureScreen("auto");
      clickLater("#otter2AutoVocabBtn", 380);
    },
    autoexample: function () {
      ensureScreen("auto");
      clickLater("#otter2AutoExampleBtn", 380);
    },
    voice: function () {
      ensureScreen("home");
      clickLater("#otter2VoiceSystemBtn", 120);
    },
    /* ---- 6 chức năng lá của khu Luyện tập ---- */
    ptest: function () {
      practiceBtn('#ttcActionFrameButtons button[onclick*="openVocabularyTestChooser"]');
    },
    psent: function () {
      practiceBtn('#ttcActionFrameButtons button[onclick*="openSentences"]');
    },
    preading: function () {
      ensureScreen("reading");
      clickLater("#ttcReadingLauncher", 380);
    },
    ptype: function () { practiceBtn("#ttcListeningLauncher"); },
    pmatch: function () { practiceBtn("#ttcMatchLauncher"); },
    plisten: function () { practiceBtn("#ttcListenLauncher"); },
    login: function () {
      if (typeof window.otter2AccountOpenLogin === "function") { window.otter2AccountOpenLogin(); return; }
      var b = byId("otter2OpenLoginBtn");
      if (b) { b.click(); return; }
      var av = byId("otter2AvatarBtn");
      if (av) av.click();
    },
    account: function () {
      var av = byId("otter2AvatarBtn");
      if (av) av.click();
    },
    logout: function () {
      var b = byId("otter2LogoutBtn");
      if (b) b.click();
    },
    /* PWA (2026-11-19): uỷ thác hoàn toàn cho otter2-pwa.js —
       Android/Chrome: mở hộp cài thật; iOS Safari: mở hộp hướng
       dẫn 2 bước; module PWA vắng mặt thì im lặng bỏ qua. */
    install: function () {
      if (window.__ttcPwa && typeof window.__ttcPwa.requestInstall === "function") {
        window.__ttcPwa.requestInstall();
      }
    }
  };

  function runAction(act) {
    var fn = ACTIONS[act];
    if (fn) { try { fn(); } catch (e) { /* đích chưa sẵn sàng: bỏ qua êm, không phá trang */ } }
  }

  /* ---------------- khởi tạo ---------------- */
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

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.__ttcMenu = {
    open: openMenu,
    close: closeMenu,
    isOpen: function () { return open; },
    el: function () { return panel; },
    btn: function () { return btn; },
    actions: ACTIONS,
    currentUser: currentUser
  };
})();
