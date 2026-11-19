/* ============================================================
   KHU "HỌC THEO VIDEO — TRUYỆN KỂ HSK" — otter2-storyvideo.js
   (2026-11-17, thay hẳn khu video nhà cung cấp đã thu hồi —
   dữ liệu 100% là video truyện TỰ SẢN XUẤT của chủ web.)
   Panel "🎬 Học theo video" là con thứ 3 của .ttc-exam-midstack
   (sau panel Luyện thi + thẻ kỹ năng), mở overlay #ttcStoryVideoOverlay:
   tab theo cấp HSK 1–9, phát bằng thẻ <video> HTML5: nguồn chính là
   Supabase Storage của web (trường stream trong catalog — Drive phát
   trực tiếp bị iOS chặn vì Content-Disposition: attachment, bản
   iframe preview trước đó bị đen/mờ trên mobile), dự phòng mới dùng
   link Drive. Tiến độ đã xem ở localStorage
   "otter2_storyvideo_watched_v1" (khóa theo key truyện ổn định).
   Dữ liệu: otter2-storyvideo-catalog.js
   (window.OTTER2_STORYVIDEO_CATALOG, sinh tự động từ manifest).
   Cổng truy cập theo quyết định chủ web: HSK1–2 MIỄN PHÍ (mở xem
   ngay, kể cả khách), HSK3–9 PREMIUM qua đúng cổng
   window.checkPremiumAccess(level) như module Viết chữ Hán.
   Bé Rái Cá: overlay này ĐÃ đăng ký zone "story" trong
   otter2-guide.js (detectZone + ZONE_ROOT_SEL + chướng ngại là
   toàn bộ .ttc-story-shell) — bé dock góc dưới-trái, câm giọng
   (zoneSilent áp cho mọi zone), roaming chỉ ở lề nền ngoài thẻ
   video nên không bao giờ che video đang phát.
   Bổ sung 2026-11-18 theo phản hồi chủ web: (1) hàng nút chỉnh
   TỐC ĐỘ PHÁT 0.5×–1.5× ngay dưới khung video (người học cần
   nghe chậm lại), lựa chọn lưu ở localStorage
   "otter2_storyvideo_rate_v1" và áp cho mọi truyện mở sau;
   (2) chọn truyện nào (danh sách hoặc nút trước/tiếp) overlay
   cũng TỰ CUỘN MƯỢT đưa trình phát lên đầu tầm nhìn
   (scrollIntoView trên .ttc-story-frame-wrap + scroll-margin)
   — trước đây bấm truyện ở cuối danh sách phải tự cuộn lên.
   Bổ sung CHẶNG 1 (2026-11-18, học theo corodomo): LỚP PHỤ ĐỀ
   ĐỒNG BỘ TỪNG CÂU + LẶP A–B, pilot trên 30 truyện HSK1. Thanh
   câu hiện tại (Hán tự + pinyin + nghĩa Việt) chạy khớp giọng đọc;
   danh sách câu bấm để nhảy đoạn (seek); công tắc từng lớp
   Hán tự/Pinyin/Nghĩa Việt + chuyển Phồn thể (dùng lại engine
   __ttcTraditionalHanzi của trang), lưu ở localStorage
   "otter2_storyvideo_sub_v1". Dữ liệu cues nạp lười từ
   otter2-storysub-hsk<level>.js (sinh từ intermediates TTS từng
   câu, đã hiệu chuẩn theo audio thật). Cấp chưa có dữ liệu phụ đề
   thì player giữ nguyên như cũ. Lặp A–B: đặt A/B tại thời điểm
   đang phát, chạm B quay về A, có nút xoá lặp riêng.
   Sửa 2026-11-19 theo ảnh laptop của chủ web: (A) trạng thái chưa
   chọn truyện trên desktop — danh sách từng là panel phủ 308px chật
   hẹp, che cả hàng chip cấp và bỏ trống phần lớn panel ("bảng chọn
   bé tẹo") — nay trải lưới đầy bề ngang qua class .ttc-picking;
   phòng đang phát giữ nguyên chuẩn corodomo đã duyệt. (B) Cổng
   Premium đặt thêm ở MỨC TAB như Phòng đọc (trước đây ai cũng xem
   được trọn danh sách HSK3–9, cổng chỉ chặn lúc phát) và gateFor
   đổi sang fail-closed khi thiếu checkPremiumAccess.
   ============================================================ */
(function () {
  "use strict";

  var LS_KEY = "otter2_storyvideo_watched_v1";
  var RATE_LS_KEY = "otter2_storyvideo_rate_v1";
  var RATES = [0.5, 0.75, 1, 1.25, 1.5]; /* mức tốc độ phát cho người học chọn */
  var FREE_MAX_LEVEL = 2; /* HSK1–2 miễn phí; HSK3–9 qua cổng Premium */

  function catalog() { return window.OTTER2_STORYVIDEO_CATALOG || null; }
  function levelItems(level) {
    var cat = catalog();
    if (!cat || !cat.levels) return [];
    return cat.levels[String(level)] || [];
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDur(sec) {
    var s = Math.round(Number(sec) || 0);
    if (s <= 0) return "";
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }
  function isPremiumLevel(level) { return Number(level) > FREE_MAX_LEVEL; }

  /* ---------------- cổng Premium (mẫu module Viết chữ Hán) ---------------- */
  function gateFor(level) {
    var n = Number(level);
    if (!(n > FREE_MAX_LEVEL)) return Promise.resolve(true); /* HSK1–2: miễn phí thật */
    /* Cổng vắng mặt = CHẶN (fail-closed như Phòng đọc + Kho từ vựng).
       Bản cũ trả true khi thiếu checkPremiumAccess: chỉ cần file cổng
       lỗi tải là toàn bộ HSK3–9 mở toang (sửa 2026-11-19). */
    if (typeof window.checkPremiumAccess !== "function") return Promise.resolve(false);
    try {
      return Promise.resolve(window.checkPremiumAccess(n)).then(
        function (ok) { return !!ok; },
        function () { return false; }
      );
    } catch (e) { return Promise.resolve(false); }
  }

  /* ---------------- style ---------------- */
  var styleDone = false;
  function ensureStyle() {
    if (styleDone) return;
    styleDone = true;
    var css = [
      "/* Panel Truyện kể: hero gradient hoàng hôn truyện tranh (tím -> fuchsia -> hổ phách), phân biệt với panel Luyện thi (cam -> hồng -> tím) và panel video cũ (xanh dương -> cyan -> ngọc, đã thu hồi). */",
      "/* Selector ID kép (như panel Luyện thi dùng #otter2ExamPanel): trên mobile có luật nền thẻ chung thắng selector class .ttc-story-panel khiến panel bị nhạt nhoà (chủ web phản ánh 2026-11-17) — khóa nền bằng #otter2-home #otter2StoryVideoPanel cho chắc. */",
      "#otter2-home #otter2StoryVideoPanel{position:relative;overflow:hidden;border:1px solid #e7e9ee;border-radius:20px;padding:20px;color:#0f172a;background:#fff;box-shadow:0 14px 34px rgba(23,25,40,.07)}",
      "/* Nhấn dễ tìm cho thẻ Trình độ & kỹ năng (hàng xóm midstack, chủ web phản ánh khó nhìn/khó tìm trên mobile 2026-11-17): viền + bóng tím nhẹ, nền phớt lavender, tiêu đề có vạch accent. */",
      "#otter2-home .otter2-dash-card[aria-labelledby='otter2DashLevelTitle']{border:1px solid #e7e9ee;box-shadow:0 14px 34px rgba(23,25,40,.07);background:#fff}",
      "#otter2DashLevelTitle{border-left:5px solid #2563eb;padding-left:10px;border-radius:2px;color:#2563eb}",
      ".ttc-story-panel::before{content:'';position:absolute;inset:0;background:none;pointer-events:none}",
      ".ttc-story-panel::after{content:'書';position:absolute;right:6px;bottom:-38px;font-size:150px;font-weight:900;color:rgba(124,58,237,.06);line-height:1;pointer-events:none}",
      ".ttc-story-panel-in{position:relative;z-index:1;display:flex;flex-direction:column;gap:10px}",
      ".ttc-story-panel-head{display:flex;align-items:center;gap:12px}",
      ".ttc-story-panel-play{width:54px;height:54px;flex:0 0 54px;border-radius:50%;background:#f5f3ff;border:1px solid #ddd6fe;color:#7c3aed;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 8px 20px rgba(124,58,237,.12)}",
      ".ttc-story-panel-title{margin:0;font-size:21px;font-weight:900;color:#7c3aed;text-shadow:none}",
      ".ttc-story-panel-free{margin-left:auto;background:#fde68a;color:#451a03;font-weight:900;font-size:12px;padding:6px 12px;border-radius:999px;letter-spacing:.4px;box-shadow:0 6px 16px rgba(245,158,11,.35);animation:ttcStoryPulse 2.2s ease-in-out infinite}",
      "@keyframes ttcStoryPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}",
      "@media (prefers-reduced-motion:reduce){.ttc-story-panel-free{animation:none}}",
      ".ttc-story-panel-desc{margin:0;color:#475569;font-size:13.5px;text-shadow:none}",
      ".ttc-story-panel-btn{margin-top:2px;min-height:52px;border:1px solid #7c3aed;border-radius:14px;background:#7c3aed;color:#fff;cursor:pointer;font-size:16px;font-weight:900;padding:12px 18px;box-shadow:0 10px 22px rgba(124,58,237,.28);transition:transform .15s ease}",
      ".ttc-story-panel-btn:hover{transform:translateY(-1px)}",
      ".ttc-story-panel-btn-txt{background:none;-webkit-text-fill-color:currentColor;color:#fff}",
      "html[data-theme='night'] .ttc-story-panel{box-shadow:0 20px 42px rgba(0,0,0,.5)}",
      "/* Mobile <=1020px: midstack tan (display:contents) — panel nhận grid-area 'story' ngay dưới hàng 'level', full-width nén như panel Luyện thi. Luật areas PHẢI thắng luật của otter2-mobile-dash.js: cùng độ đặc hiệu (#otter2-home.otter2-screen), style này được bơm SAU vì thẻ script của module nằm sau mobile-dash trong index2.html. */",
      "@media (max-width:1020px){#otter2-home.otter2-screen{grid-template-areas:'hero hero' 'strip strip' 'course course' 'exam exam' 'level level' 'story story' 'activity tasks' 'lessons lessons' 'continue road' 'journey journey' 'banner banner'}#otter2-home #otter2StoryVideoPanel{grid-area:story}.ttc-story-panel{padding:14px}.ttc-story-panel-play{width:44px;height:44px;flex-basis:44px;font-size:19px}.ttc-story-panel-title{font-size:18px}.ttc-story-panel-desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.ttc-story-panel-btn{min-height:48px}}",
      "/* Overlay khu truyện kể — khuôn như #ttcExamOverlay. z-index 1000202 như overlay video cũ; bé trong zone 'story' có z cao hơn nhưng bị chướng ngại .ttc-story-shell chặn khỏi thẻ video. */",
      "#ttcStoryVideoOverlay{position:fixed;inset:0;z-index:1000202;background:rgba(15,23,42,.62);display:none;align-items:flex-start;justify-content:center;padding:12px;overflow:auto}",
      "#ttcStoryVideoOverlay.open{display:flex}",
      ".ttc-story-shell{position:relative;background:#fff;border-radius:20px;max-width:1180px;width:100%;margin:auto;padding:18px;box-shadow:0 30px 80px rgba(2,6,23,.35)}",
      "html[data-theme='night'] .ttc-story-shell{background:#0f172a;color:#e2e8f0}",
      ".ttc-story-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}",
      ".ttc-story-top h2{margin:0;font-size:20px;font-weight:900}",
      ".ttc-story-close{margin-left:auto;width:40px;height:40px;border-radius:50%;border:1px solid rgba(100,116,139,.35);background:transparent;font-size:17px;cursor:pointer;color:inherit}",
      ".ttc-story-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}",
      ".ttc-story-tab{border:1.5px solid rgba(162,28,175,.4);background:rgba(162,28,175,.06);color:inherit;border-radius:999px;padding:8px 14px;font-weight:800;font-size:13.5px;cursor:pointer;min-height:40px}",
      ".ttc-story-tab.is-cur{background:linear-gradient(135deg,#7c3aed,#c026d3);color:#fff;border-color:transparent}",
      ".ttc-story-tab .ttc-story-tab-lock{font-size:11px;opacity:.85}",
      ".ttc-story-body{display:grid;grid-template-columns:320px minmax(0,1fr);gap:16px;align-items:start}",
      "@media (max-width:860px){.ttc-story-body{grid-template-columns:1fr}}",
      ".ttc-story-list{display:flex;flex-direction:column;gap:6px;max-height:70vh;overflow:auto;padding-right:2px}",
      "@media (max-width:860px){.ttc-story-list{max-height:none;order:2}}",
      ".ttc-story-listhead{display:flex;align-items:center;gap:8px;margin:2px 0 6px}",
      ".ttc-story-prog{flex:1;font-size:12.5px;font-weight:700;color:#a21caf;margin:0}",
      ".ttc-story-list-close{display:none;width:30px;height:30px;border-radius:50%;border:1px solid rgba(100,116,139,.35);background:transparent;color:inherit;font-size:13px;cursor:pointer;flex:0 0 auto}",
      ".ttc-story-item{text-align:left;border:1.5px solid rgba(100,116,139,.25);background:transparent;color:inherit;border-radius:12px;padding:8px 10px;cursor:pointer;font-size:13px;line-height:1.35;display:flex;gap:8px;align-items:flex-start;width:100%}",
      ".ttc-story-item:hover{border-color:#c026d3}",
      ".ttc-story-item.is-cur{border-color:#c026d3;background:rgba(192,38,211,.08);font-weight:700}",
      ".ttc-story-item .ttc-story-num{flex:0 0 auto;font-weight:900;color:#a21caf;font-size:12.5px;padding-top:1px}",
      ".ttc-story-item .ttc-story-tt{min-width:0;flex:1}",
      ".ttc-story-item .ttc-story-zh{display:block;font-size:14.5px;font-weight:800}",
      ".ttc-story-item .ttc-story-vi{display:block;font-size:12px;color:#64748b;font-weight:600}",
      ".ttc-story-item .ttc-story-meta{flex:0 0 auto;text-align:right;font-size:11.5px;color:#64748b;line-height:1.5}",
      ".ttc-story-item .ttc-story-check{flex:0 0 auto;color:#059669;font-weight:900;font-size:13px;padding-top:2px}",
      ".ttc-story-stage{min-width:0}",
      ".ttc-story-frame-wrap{position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#0f172a}",
      ".ttc-story-frame-wrap iframe,.ttc-story-frame-wrap video{position:absolute;inset:0;width:100%;height:100%;border:0;background:#000}",
      ".ttc-story-empty{padding:34px 16px;text-align:center;color:#64748b;font-size:14px;border:1.5px dashed rgba(100,116,139,.4);border-radius:14px;line-height:1.6}",
      ".ttc-story-now{margin:12px 0 2px;font-size:17px;font-weight:900}",
      ".ttc-story-now-vi{margin:0 0 4px;font-size:13.5px;color:#64748b;font-weight:700}",
      ".ttc-story-meta-line{margin:2px 0 4px;font-size:12.5px;color:#64748b}",
      ".ttc-story-navrow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0 4px}",
      ".ttc-story-navbtn{border:1.5px solid rgba(162,28,175,.45);background:transparent;color:#a21caf;border-radius:50%;width:36px;height:36px;padding:0;font-weight:800;font-size:18px;line-height:1;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}",
      ".ttc-story-navbtn:disabled{opacity:.4;cursor:default}",
      ".ttc-story-navrow .ttc-story-navbtn:last-child{margin-left:auto}",
      "/* Tự cuộn khi chọn truyện: chừa đệm 10px phía trên trình phát khi scrollIntoView neo vào. */",
      ".ttc-story-frame-wrap{scroll-margin-top:10px}",
      "/* Hàng nút chỉnh tốc độ phát — ngay dưới khung video, tông tím #7c3aed của khu truyện; mức đang chọn tô đặc. */",
      ".ttc-story-setbar{display:flex;flex-wrap:nowrap;gap:6px;align-items:center;margin:8px 0 0;min-height:30px}",
      ".ttc-story-setbar-right{margin-left:auto;display:flex;align-items:center;gap:4px}",
      "@media (max-width:860px){.ttc-story-setbar{flex-wrap:wrap}}",
      ".ttc-story-rate-label{font-size:13px;margin-right:0}",
      ".ttc-story-ratechip{border:1.5px solid rgba(124,58,237,.4);background:transparent;color:inherit;border-radius:999px;padding:3px 8px;font-weight:800;font-size:11.5px;cursor:pointer;min-height:26px;white-space:nowrap}",
      ".ttc-story-iconbtn{width:30px;height:30px;flex:0 0 auto;border-radius:50%;border:1px solid rgba(100,116,139,.3);background:transparent;color:#64748b;font-size:14px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0}",
      ".ttc-story-iconbtn.is-cur{background:#7c3aed;color:#fff;border-color:#7c3aed}",
      ".ttc-story-ratechip:hover{border-color:#7c3aed}",
      ".ttc-story-ratechip.is-cur{background:#7c3aed;color:#fff;border-color:#7c3aed}",
      "/* ==== PHÒNG TRUYỆN CHUẨN CORODOMO (2026-11-19): karaoke dưới video + danh sách câu làm chủ cột phải + thanh cài đặt mảnh ==== */",
      "/* Thanh karaoke: nền tối bo tròn ngay dưới video; pinyin TỪNG TỪ phía trên từng nhóm chữ Hán, gạch chân theo từ bằng tím nhạt của khu truyện; nghĩa Việt là dòng riêng ngay dưới thanh. */",
      ".ttc-story-karaoke{margin:10px 0 0}",
      ".ttc-kara-bar{position:relative;background:#26303f;border-radius:14px;padding:12px 14px 13px;min-height:60px;box-shadow:0 8px 22px rgba(15,23,42,.18)}",
      ".ttc-kara-tag{position:absolute;top:7px;right:11px;font-size:10px;font-weight:800;letter-spacing:.4px;color:rgba(255,255,255,.55)}",
      ".ttc-kara-idle{display:block;color:#cbd5e1;font-size:14px;font-weight:700;padding:8px 0 4px}",
      ".ttc-kara-words{display:flex;flex-wrap:wrap;gap:3px 9px;align-items:flex-end;padding-right:88px}",
      ".ttc-kw{display:inline-flex;flex-direction:column;align-items:center}",
      ".ttc-kw-py{font-size:11.5px;font-weight:600;line-height:1.25;color:#c4b5fd;letter-spacing:.2px;text-transform:lowercase;white-space:nowrap}",
      ".ttc-kw-zh{font-size:20px;font-weight:800;line-height:1.28;color:#fff;border-bottom:2.5px solid #a78bfa;padding-bottom:1px;white-space:nowrap}",
      ".ttc-kw-punct{font-size:20px;font-weight:800;line-height:1.28;color:#fff;padding-bottom:3.5px}",
      ".ttc-kara-fb-py{display:block;font-size:12.5px;font-weight:600;color:#c4b5fd;line-height:1.35}",
      ".ttc-kara-fb-zh{display:block;font-size:20px;font-weight:800;color:#fff;line-height:1.35;margin-top:1px}",
      ".ttc-kara-vi{margin:6px 2px 0;font-size:13.5px;font-weight:600;color:#334155;line-height:1.45}",
      "html[data-theme='night'] .ttc-kara-vi{color:#cbd5e1}",
      ".ttc-sub-off-zh .ttc-kw-zh,.ttc-sub-off-zh .ttc-kw-punct,.ttc-sub-off-zh .ttc-kara-fb-zh{display:none}",
      ".ttc-sub-off-py .ttc-kw-py,.ttc-sub-off-py .ttc-kara-fb-py{display:none}",
      ".ttc-sub-off-vi .ttc-kara-vi{display:none}",
      "/* Chip lớp phụ đề nằm trong thanh cài đặt mảnh dưới video (setbar), không còn hàng riêng. */",
      ".ttc-story-subtools{display:flex;flex-wrap:nowrap;gap:4px;align-items:center;margin:0}",
      ".ttc-story-subchip{border:1.5px solid rgba(124,58,237,.4);background:transparent;color:inherit;border-radius:999px;padding:3px 9px;font-weight:800;font-size:12px;cursor:pointer;min-height:26px;white-space:nowrap}",
      ".ttc-story-subchip:hover{border-color:#7c3aed}",
      ".ttc-story-subchip.is-cur{background:#7c3aed;color:#fff;border-color:#7c3aed}",
      "/* Thanh lặp A–B mảnh ở đầu vùng phụ đề (dưới hàng tab chế độ): nút nhỏ + trạng thái đúng 1 dòng. */",
      ".ttc-story-abbar{display:flex;align-items:center;gap:4px;margin:0 0 6px}",
      ".ttc-story-abbtn{border:1.5px solid rgba(124,58,237,.45);background:transparent;color:inherit;border-radius:999px;padding:3px 9px;font-weight:800;font-size:11.5px;cursor:pointer;min-height:26px;white-space:nowrap}",
      ".ttc-story-abbtn:hover{border-color:#7c3aed}",
      ".ttc-story-abbtn.is-cur{background:#7c3aed;color:#fff;border-color:#7c3aed}",
      ".ttc-story-abbtn:disabled{opacity:.4;cursor:default}",
      ".ttc-story-ab-status{flex:1;min-width:0;font-size:11px;font-weight:700;color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      "/* Vùng phụ đề là cột flex: tab chế độ (gói bài tập chèn) trên cùng, thanh A–B, rồi panel bài tập / danh sách câu chiếm toàn bộ phần còn lại. */",
      ".ttc-story-subzone{display:flex;flex-direction:column}",
      ".ttc-story-subzone .ttc-pack-tabstrip{order:1}",
      ".ttc-story-subzone .ttc-story-abbar{order:2;flex:0 0 auto}",
      ".ttc-story-subzone .ttc-pack-panel{order:3}",
      ".ttc-story-subzone .ttc-story-sublist{order:3}",
      "/* Danh sách câu: hàng 2 dòng gọn (Hán tự + nghĩa Việt nhỏ xám), nút play nhỏ bên trái, câu hiện tại tô nền tím nhạt + vạch trái. */",
      ".ttc-story-sublist{margin:0;max-height:264px;overflow:auto;border:1.5px solid rgba(100,116,139,.25);border-radius:14px;background:#fff}",
      "html[data-theme='night'] .ttc-story-sublist{background:#1e293b}",
      ".ttc-story-subrow{display:flex;gap:8px;align-items:center;width:100%;text-align:left;border:0;border-bottom:1px solid rgba(100,116,139,.14);background:transparent;color:inherit;padding:7px 10px;cursor:pointer;font-size:13.5px;line-height:1.3}",
      ".ttc-story-subrow:last-child{border-bottom:0}",
      ".ttc-story-subrow:hover{background:rgba(124,58,237,.05)}",
      ".ttc-story-subrow.is-cur{background:rgba(124,58,237,.10);box-shadow:inset 3px 0 0 #7c3aed}",
      ".ttc-ss-play{flex:0 0 auto;width:22px;height:22px;border-radius:50%;background:rgba(124,58,237,.13);color:#7c3aed;font-size:10px;display:flex;align-items:center;justify-content:center;padding-left:1px}",
      ".ttc-story-subrow.is-cur .ttc-ss-play{background:#7c3aed;color:#fff}",
      ".ttc-story-subrow .ttc-ss-main{min-width:0;flex:1}",
      ".ttc-story-subrow .ttc-ss-zh{display:block;font-size:14.5px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".ttc-story-subrow .ttc-ss-vi{display:block;font-size:12px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".ttc-sub-off-zh .ttc-story-subrow .ttc-ss-zh{display:none}",
      ".ttc-sub-off-vi .ttc-story-subrow .ttc-ss-vi{display:none}",
      "/* ==== Desktop >=1021px: PHÒNG HỌC chuẩn corodomo — danh sách truyện ẨN mặc định, mở bằng icon Danh sách phát ở thanh cài đặt dưới video, hiện dạng PANEL PHỦ trượt ở cạnh trái phòng (không đẩy bố cục); cột chính = video + karaoke + thanh cài đặt; vùng phụ đề chiếm 1/3 phải của stage và danh sách câu làm chủ chiều cao của nó. ==== */",
      "@media (min-width:1021px){",
      ".ttc-story-body{grid-template-columns:minmax(0,1fr)}",
      ".ttc-story-list{position:absolute;top:64px;left:10px;bottom:10px;width:308px;z-index:40;background:#fff;border:1px solid #e7e9ee;border-radius:16px;box-shadow:0 24px 60px rgba(2,6,23,.28);padding:12px;max-height:none;display:none}",
      "html[data-theme='night'] .ttc-story-list{background:#1e293b}",
      ".ttc-story-body.ttc-list-open .ttc-story-list{display:flex;animation:ttcListIn .18s ease}",
      "@keyframes ttcListIn{from{transform:translateX(-10px);opacity:.3}to{transform:none;opacity:1}}",
      ".ttc-story-list-close{display:inline-flex;align-items:center;justify-content:center}",
      ".ttc-story-body:not(.has-subs) .ttc-story-frame-wrap{max-width:760px}",
      ".ttc-story-body.has-subs .ttc-story-stage{position:relative;padding-right:calc((100% - 16px) / 3 + 16px)}",
      ".ttc-story-body.has-subs .ttc-story-subzone{position:absolute;top:0;right:0;bottom:0;width:calc((100% - 16px) / 3);display:flex;flex-direction:column;min-width:0}",
      ".ttc-story-body.has-subs .ttc-story-subzone[hidden]{display:none}",
      ".ttc-story-body.has-subs .ttc-story-sublist{flex:1 1 auto;min-height:0;max-height:none}",
      ".ttc-story-body.has-subs .ttc-pack-panel{flex:1 1 auto;min-height:0;overflow-y:auto;margin:0}",
      ".ttc-story-body.has-subs .ttc-story-subzone:has(.ttc-pack-panel:not([hidden])) .ttc-story-abbar{display:none}",
      ".ttc-story-body.has-subs .ttc-story-subrow{padding:6px 10px}",
      ".ttc-story-body.has-subs .ttc-story-subrow .ttc-ss-zh{font-size:14px}",
      ".ttc-story-body.has-subs .ttc-story-subrow .ttc-ss-vi{font-size:11.5px}",
      ".ttc-kara-bar .ttc-kw-zh{font-size:21px}",
      ".ttc-kara-bar .ttc-kw-punct{font-size:21px}",
      "/* Trạng thái CHƯA CHỌN TRUYỆN (.ttc-picking): danh sách truyện là nội dung chính của panel — trải LƯỚI đầy bề ngang (cột tối thiểu 330px), hàng chip cấp không còn bị panel phủ 308px che khuất, không còn khoảng trống lớn bên phải + icon ☰ lơ lửng giữa panel (chủ web phản ánh 'bảng chọn bé tẹo' 2026-11-19). Đang phát truyện thì class tắt: phòng học về đúng chuẩn corodomo đã duyệt (danh sách = panel phủ 308px mở bằng icon ở thanh cài đặt). */",
      ".ttc-story-body.ttc-picking{display:flex;flex-direction:column;gap:14px;align-items:stretch}",
      ".ttc-story-body.ttc-picking .ttc-story-stage{order:1}",
      ".ttc-story-body.ttc-picking .ttc-story-list{order:2;position:static;width:auto;max-height:none;overflow:visible;display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:8px;padding:2px;background:transparent;border:0;box-shadow:none;animation:none}",
      ".ttc-story-body.ttc-picking .ttc-story-listhead{grid-column:1/-1;margin:0}",
      ".ttc-story-body.ttc-picking .ttc-story-list-close{display:none}",
      ".ttc-story-body.ttc-picking .ttc-story-item{height:100%}",
      ".ttc-story-body.ttc-picking .ttc-story-empty{padding:18px 16px}",
      ".ttc-story-body.ttc-picking #ttcStoryPickBtn{display:none}",
      "}"
      ].join("\n");
    var st = document.createElement("style");
    st.id = "ttcStoryVideoStyle";
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ---------------- tiến độ đã xem ---------------- */
  function loadWatched() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function markWatched(key) {
    if (!key) return;
    var w = loadWatched();
    if (!w[key]) {
      w[key] = Date.now();
      try { localStorage.setItem(LS_KEY, JSON.stringify(w)); } catch (e) {}
    }
  }

  /* ---------------- tốc độ phát (lưu theo thiết bị) ---------------- */
  function loadRate() {
    try {
      var r = parseFloat(localStorage.getItem(RATE_LS_KEY) || "1");
      return RATES.indexOf(r) >= 0 ? r : 1;
    } catch (e) { return 1; }
  }
  var currentRate = loadRate();
  function saveRate(r) {
    currentRate = r;
    try { localStorage.setItem(RATE_LS_KEY, String(r)); } catch (e) {}
  }
  function rateLabel(r) { return String(r) + "×"; }

  /* ---------------- CHẶNG 1: phụ đề đồng bộ + lặp A–B ----------------
     Dữ liệu cues [start, end, zh, py, vi] sinh từ intermediates TTS từng
     câu (~/workspace/story_sub_build/gen_subtitles.py), nạp LƯỜI theo cấp
     qua file otter2-storysub-hsk<level>.js nằm cạnh file này. Pilot: HSK1
     (30/30 truyện). Cấp chưa có dữ liệu -> không hiện lớp phụ đề, player
     chạy như cũ. Chuyển Phồn thể dùng lại đúng engine của web
     (window.__ttcTraditionalHanzi — OpenCC + bản đồ dự phòng của trang). */
  var SUB_LS_KEY = "otter2_storyvideo_sub_v1";
  var subPrefs = { zh: true, py: true, vi: true, trad: false };
  try {
    var sp = JSON.parse(localStorage.getItem(SUB_LS_KEY) || "null");
    if (sp) { for (var pk in subPrefs) if (typeof sp[pk] === "boolean") subPrefs[pk] = sp[pk]; }
  } catch (e) {}
  function saveSubPrefs() {
    try { localStorage.setItem(SUB_LS_KEY, JSON.stringify(subPrefs)); } catch (e) {}
  }
  var SELF_SRC = (function () {
    var s = document.querySelector('script[src*="otter2-storyvideo.js"]');
    return s ? s.getAttribute("src") : "assets/index2/otter2-storyvideo.js";
  })();
  var subLoadedLv = {}, subFailedLv = {};
  function subsDataFor(level, key) {
    var all = window.OTTER2_STORYSUB;
    if (!all || !all[String(level)]) return null;
    return all[String(level)][key] || null;
  }
  function ensureSubs(level) {
    return new Promise(function (res) {
      if (window.OTTER2_STORYSUB && window.OTTER2_STORYSUB[String(level)]) return res(true);
      if (subLoadedLv[level] || subFailedLv[level]) return res(false);
      var sc = document.createElement("script");
      sc.src = SELF_SRC.replace(/otter2-storyvideo\.js([?#].*)?$/, "otter2-storysub-hsk" + level + ".js");
      sc.onload = function () {
        subLoadedLv[level] = 1;
        res(!!(window.OTTER2_STORYSUB && window.OTTER2_STORYSUB[String(level)]));
      };
      sc.onerror = function () { subFailedLv[level] = 1; res(false); };
      document.head.appendChild(sc);
    });
  }
  function fmtClock(sec) {
    var s = Math.max(0, Number(sec) || 0);
    var m = Math.floor(s / 60);
    var r = s - m * 60;
    return m + ":" + (r < 10 ? "0" : "") + r.toFixed(1);
  }
  /* Trạng thái phụ đề của truyện đang phát (reset mỗi lần renderStage). */
  var subState = null;
  /* Bật/tắt bố cục phòng học 2 cột trên desktop (class has-subs trên
     .ttc-story-body): chỉ bật khi truyện đang phát CÓ dữ liệu phụ đề. */
  function setSubsLayout(on) {
    var bodyEl = stageEl && stageEl.parentNode;
    if (bodyEl && bodyEl.classList) bodyEl.classList.toggle("has-subs", !!on);
  }
  /* Trạng thái CHƯA CHỌN TRUYỆN (chưa có currentKey): bật class
     ttc-picking để CSS desktop trải danh sách truyện thành lưới đầy bề
     ngang panel (mục CSS tương ứng ở khối @media min-width:1021px).
     Đang phát truyện thì tắt — phòng học về đúng chuẩn corodomo. */
  function syncPicking() {
    var bodyEl = stageEl && stageEl.parentNode;
    if (bodyEl && bodyEl.classList) bodyEl.classList.toggle("ttc-picking", !state.currentKey);
  }
  function tradText(zh) {
    if (!subPrefs.trad) return zh;
    if (typeof window.__ttcTraditionalHanzi === "function") {
      try { return window.__ttcTraditionalHanzi(zh) || zh; } catch (e) { return zh; }
    }
    return zh;
  }

  /* ---------------- danh sách phát: ẩn hẳn trên desktop, mở bằng icon ----------------
     Chuẩn corodomo (chủ web duyệt 2026-11-19): trên desktop danh sách truyện
     mặc định ẨN để video + cột phụ đề hưởng trọn bề ngang; icon ☰ ở thanh
     cài đặt dưới video mở nó dạng panel phủ cạnh trái phòng. Trạng thái
     nhớ trong localStorage, mặc định ĐÓNG. Chưa chọn truyện nào thì panel
     tự mở (không ghi pref) để người học có đường vào chọn. */
  var LIST_LS_KEY = "otter2_storyvideo_list_v1";
  var listPrefOpen = false;
  try { listPrefOpen = localStorage.getItem(LIST_LS_KEY) === "open"; } catch (e) {}
  function isDesktopRoom() {
    return !!(window.matchMedia && window.matchMedia("(min-width:1021px)").matches);
  }
  function listPanelVisible() {
    var b = stageEl && stageEl.parentNode;
    return !!(b && b.classList && b.classList.contains("ttc-list-open"));
  }
  function setListOpen(open, persist) {
    var b = stageEl && stageEl.parentNode;
    if (b && b.classList) b.classList.toggle("ttc-list-open", !!open);
    var btn = stageEl ? stageEl.querySelector("#ttcStoryListBtn") : null;
    if (btn) {
      btn.classList.toggle("is-cur", !!open);
      btn.setAttribute("aria-pressed", open ? "true" : "false");
    }
    if (persist) {
      listPrefOpen = !!open;
      try { localStorage.setItem(LIST_LS_KEY, open ? "open" : "closed"); } catch (e) {}
    }
  }
  function applyListPref() { setListOpen(listPrefOpen || !state.currentKey, false); }

  /* ---------------- tách từ cho thanh karaoke ----------------
     Cùng thuật toán tách-từ-dài-nhất của gói bài tập (ngân hàng từ theo cấp
     trong OTTER2_HSK_ALL_DATA): ghép pinyin TỪNG TỪ bằng cách căn âm tiết
     của câu (mỗi chữ Hán = 1 âm tiết). Âm tiết không khớp số chữ -> trả
     null, thanh karaoke hiển thị pinyin theo câu (chế độ dự phòng). */
  var KARA_PUNCT_RE = /[，。？！：；、·…—「」『』""''“”‘’（）()《》〈〉\s]/;
  var karaBankCache = {};
  function karaBank(level) {
    if (karaBankCache[level]) return karaBankCache[level];
    var all = window.OTTER2_HSK_ALL_DATA;
    if (!all || !all.words) return null;
    var byLen = {}, maxLen = 1, n = 0;
    all.words.forEach(function (w) {
      if (!w || !w.h || Number(w.hsk) !== Number(level)) return;
      var L = w.h.length;
      if (!byLen[L]) byLen[L] = {};
      byLen[L][w.h] = w; n++;
      if (L > maxLen) maxLen = L;
    });
    if (!n) return null;
    karaBankCache[level] = { byLen: byLen, maxLen: maxLen };
    return karaBankCache[level];
  }
  function segmentCue(zh, bank) {
    var toks = [], i = 0;
    zh = String(zh || "");
    while (i < zh.length) {
      var ch = zh.charAt(i);
      if (KARA_PUNCT_RE.test(ch)) { toks.push({ text: ch, punct: true }); i++; continue; }
      var hit = null;
      for (var L = Math.min(bank.maxLen, zh.length - i); L >= 1; L--) {
        var cand = zh.substr(i, L);
        if (bank.byLen[L] && bank.byLen[L][cand]) { hit = cand; break; }
      }
      if (hit) { toks.push({ text: hit }); i += hit.length; }
      else { toks.push({ text: ch }); i++; }
    }
    return toks;
  }
  function karaokeWords(cue, level) {
    var bank = karaBank(level);
    if (!bank) return null;
    var toks = segmentCue(cue[2], bank);
    var han = 0;
    toks.forEach(function (t) { if (!t.punct) han += t.text.length; });
    var syl = String(cue[3] || "").split(/\s+/).filter(Boolean).map(function (t) {
      return t.replace(/[，。？！：；、,.?!:;…]+$/, "");
    }).filter(Boolean);
    if (syl.length !== han) return null;
    var out = [], k = 0;
    toks.forEach(function (t) {
      if (t.punct) { out.push({ punct: t.text }); return; }
      var py = [];
      for (var j = 0; j < t.text.length; j++) py.push(syl[k++]);
      out.push({ zh: t.text, py: py.join(" ") });
    });
    return out;
  }

  /* ---------------- state ---------------- */
  var state = { tab: 1, currentKey: null, flat: [] };

  function firstDataLevel() {
    for (var n = 1; n <= 9; n++) if (levelItems(n).length) return n;
    return 1;
  }

  /* ---------------- overlay DOM ---------------- */
  var overlay = null, listEl = null, stageEl = null, tabsEl = null;

  function buildOverlay() {
    if (overlay) return;
    ensureStyle();
    overlay = document.createElement("div");
    overlay.id = "ttcStoryVideoOverlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "Khu học theo video — truyện kể HSK");
    overlay.innerHTML =
      '<div class="ttc-story-shell">' +
      '<div class="ttc-story-top"><h2>🎬 Truyện kể HSK</h2>' +
      '<button type="button" class="ttc-story-close" id="ttcStoryVideoClose" aria-label="Đóng khu truyện kể">✕</button></div>' +
      '<div class="ttc-story-tabs" id="ttcStoryVideoTabs" role="tablist"></div>' +
      '<div class="ttc-story-body"><div class="ttc-story-list" id="ttcStoryVideoList"></div>' +
      '<div class="ttc-story-stage" id="ttcStoryVideoStage"></div></div></div>';
    document.body.appendChild(overlay);
    tabsEl = overlay.querySelector("#ttcStoryVideoTabs");
    listEl = overlay.querySelector("#ttcStoryVideoList");
    stageEl = overlay.querySelector("#ttcStoryVideoStage");
    overlay.querySelector("#ttcStoryVideoClose").addEventListener("click", closeZone);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeZone(); });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !overlay.classList.contains("open")) return;
      if (isDesktopRoom() && listPanelVisible() && state.currentKey) { setListOpen(false, true); return; }
      closeZone();
    });
  }

  function renderTabs() {
    if (!tabsEl) return;
    tabsEl.innerHTML = "";
    for (var n = 1; n <= 9; n++) {
      (function (lv) {
        var count = levelItems(lv).length;
        var b = document.createElement("button");
        b.type = "button";
        b.className = "ttc-story-tab" + (state.tab === lv ? " is-cur" : "");
        b.setAttribute("role", "tab");
        b.setAttribute("data-story-tab", String(lv));
        b.innerHTML = "HSK " + lv + " · " + count +
          (isPremiumLevel(lv) ? ' <span class="ttc-story-tab-lock" title="Nội dung Premium">🔒</span>' : "");
        b.addEventListener("click", function () { switchTab(lv); });
        tabsEl.appendChild(b);
      })(n);
    }
  }

  function renderList() {
    var items = levelItems(state.tab);
    state.flat = items;
    var watched = loadWatched();
    var done = items.filter(function (v) { return watched[v.key]; }).length;
    var html = "";
    if (items.length) {
      html += '<div class="ttc-story-listhead"><p class="ttc-story-prog">Đã xem ' + done + "/" + items.length + " truyện · HSK " + state.tab + "</p>" +
        '<button type="button" class="ttc-story-list-close" id="ttcStoryListClose" aria-label="Đóng danh sách truyện">✕</button></div>';
      items.forEach(function (v, i) {
        var dur = fmtDur(v.duration_s);
        html += '<button type="button" class="ttc-story-item' + (v.key === state.currentKey ? " is-cur" : "") +
          '" data-story-idx="' + i + '">' +
          '<span class="ttc-story-num">' + (i + 1) + "</span>" +
          '<span class="ttc-story-tt"><span class="ttc-story-zh">' + esc(v.title_zh) + "</span>" +
          (v.title_vi ? '<span class="ttc-story-vi">' + esc(v.title_vi) + "</span>" : "") + "</span>" +
          '<span class="ttc-story-meta">' +
          (dur ? esc(dur) : "") + "<br>" + esc(v.voice_label || "") + "</span>" +
          (watched[v.key] ? '<span class="ttc-story-check" aria-label="Đã xem">✓</span>' : "") + "</button>";
      });
    }
    listEl.innerHTML = html;
    var lc = listEl.querySelector("#ttcStoryListClose");
    if (lc) lc.addEventListener("click", function () { setListOpen(false, true); });
    Array.prototype.forEach.call(listEl.querySelectorAll("[data-story-idx]"), function (btn) {
      btn.addEventListener("click", function () {
        playStory(state.flat[Number(btn.getAttribute("data-story-idx"))]);
      });
    });
  }

  function renderStageEmpty() {
    setSubsLayout(false);
    syncPicking();
    if (levelItems(state.tab).length) {
      stageEl.innerHTML = '<div class="ttc-story-empty">▶ Chọn một truyện để xem video kể chuyện có tranh minh họa chuyển động và giọng đọc.<br><br>' +
        '<button type="button" class="ttc-story-navbtn" id="ttcStoryPickBtn" aria-label="Mở danh sách truyện" title="Danh sách phát" style="width:44px;height:44px;font-size:19px">☰</button></div>';
      var pk = stageEl.querySelector("#ttcStoryPickBtn");
      if (pk) pk.addEventListener("click", function () { setListOpen(true, false); });
    } else {
      stageEl.innerHTML = '<div class="ttc-story-empty">🚧 <b>HSK ' + state.tab + ' — Sắp ra mắt</b><br>' +
        "Truyện kể cấp này đang được sản xuất. Hiện đã có truyện HSK 1 — mời bạn xem trước nhé!</div>";
    }
  }

  function renderStageLocked(entry) {
    setSubsLayout(false);
    syncPicking();
    stageEl.innerHTML = '<div class="ttc-story-empty">🔒 <b>' + esc(entry.title_zh || "Truyện Premium") + '</b><br>' +
      "Truyện HSK " + entry.level + " là nội dung Premium. Vui lòng đăng nhập tài khoản Premium để xem.</div>";
  }

  function renderStage(entry) {
    setSubsLayout(false);
    syncPicking();
    var idx = state.flat.indexOf(entry);
    var prev = idx > 0 ? state.flat[idx - 1] : null;
    var next = idx >= 0 && idx < state.flat.length - 1 ? state.flat[idx + 1] : null;
    var dur = fmtDur(entry.duration_s);
    var rateBtns = RATES.map(function (r) {
      var on = r === currentRate;
      return '<button type="button" class="ttc-story-ratechip' + (on ? " is-cur" : "") +
        '" data-story-rate="' + r + '" aria-pressed="' + (on ? "true" : "false") + '">' + rateLabel(r) + "</button>";
    }).join("");
    stageEl.innerHTML =
      '<div class="ttc-story-frame-wrap"><video id="ttcStoryVideoFrame" title="' + esc(entry.title_zh) + '" ' +
      'src="' + esc(entry.stream || ("https://drive.google.com/uc?export=download&id=" + encodeURIComponent(entry.drive_id))) + '" ' +
      'controls playsinline preload="auto" controlslist="nodownload" disablepictureinpicture></video></div>' +
      '<div class="ttc-story-setbar" id="ttcStorySetbar">' +
      '<div class="ttc-story-subtools" id="ttcStorySubTools" role="group" aria-label="Lớp phụ đề hiển thị" hidden></div>' +
      '<div class="ttc-story-setbar-right"><span class="ttc-story-rate-label" aria-hidden="true">🐢</span>' + rateBtns +
      '<button type="button" class="ttc-story-iconbtn" id="ttcStoryListBtn" aria-label="Danh sách phát" title="Danh sách phát" aria-pressed="false">☰</button>' +
      '<button type="button" class="ttc-story-iconbtn" id="ttcStorySetClose" aria-label="Đóng phòng truyện">✕</button></div></div>' +
      '<h3 class="ttc-story-now">' + esc(entry.title_zh) + "</h3>" +
      (entry.title_vi ? '<p class="ttc-story-now-vi">' + esc(entry.title_vi) + "</p>" : "") +
      '<p class="ttc-story-meta-line">HSK ' + entry.level + (dur ? " · ⏱ " + esc(dur) : "") +
      (entry.voice_label ? " · 🎙 " + esc(entry.voice_label) : "") + "</p>" +
      '<div class="ttc-story-navrow">' +
      '<button type="button" class="ttc-story-navbtn" id="ttcStoryPrev" aria-label="Truyện trước" title="Truyện trước"' + (prev ? "" : " disabled") + '>‹</button>' +
      '<button type="button" class="ttc-story-navbtn" id="ttcStoryNext" aria-label="Truyện tiếp" title="Truyện tiếp"' + (next ? "" : " disabled") + '>›</button></div>' +
      '<div class="ttc-story-subzone" id="ttcStorySubZone" hidden></div>';
    var lb = stageEl.querySelector("#ttcStoryListBtn");
    if (lb) lb.addEventListener("click", function () { setListOpen(!listPanelVisible(), true); });
    var scb = stageEl.querySelector("#ttcStorySetClose");
    if (scb) scb.addEventListener("click", function () { closeZone(); });
    var pb = stageEl.querySelector("#ttcStoryPrev");
    var nb = stageEl.querySelector("#ttcStoryNext");
    if (pb && prev) pb.addEventListener("click", function () { playStory(prev); });
    if (nb && next) nb.addEventListener("click", function () { playStory(next); });
    Array.prototype.forEach.call(stageEl.querySelectorAll("[data-story-rate]"), function (btn) {
      btn.addEventListener("click", function () {
        var r = parseFloat(btn.getAttribute("data-story-rate"));
        if (RATES.indexOf(r) < 0) return;
        saveRate(r);
        var v = stageEl.querySelector("#ttcStoryVideoFrame");
        if (v) { try { v.playbackRate = r; v.defaultPlaybackRate = r; } catch (e) {} }
        Array.prototype.forEach.call(stageEl.querySelectorAll("[data-story-rate]"), function (b2) {
          var on = parseFloat(b2.getAttribute("data-story-rate")) === r;
          b2.classList.toggle("is-cur", on);
          b2.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
    });
    var vid = stageEl.querySelector("#ttcStoryVideoFrame");
    if (vid) {
      try { vid.playbackRate = currentRate; vid.defaultPlaybackRate = currentRate; } catch (e) {}
      /* Bảo vệ nội dung gốc (truyện là tài sản của trang, HSK 3–9 còn là
         Premium): tắt nút tải xuống + hình-trong-hình trong menu gốc của
         trình duyệt và chặn menu chuột phải — CHỈ trên phạm vi video,
         chuột phải ở phần còn lại của trang vẫn bình thường. Đây là lớp
         chặn tải-thông-thường; bảo vệ mạnh cho Premium (link ký tên hết
         hạn) là quyết định riêng, không nằm trong thay đổi này. */
      try { vid.disablePictureInPicture = true; } catch (e) {}
      vid.addEventListener("contextmenu", function (e) { e.preventDefault(); });
      vid.addEventListener("play", function () {
        if (!loadWatched()[entry.key]) { markWatched(entry.key); renderList(); }
      });
    }
    /* Chặng 1: nạp dữ liệu phụ đề của cấp này (nếu có) rồi dựng lớp phụ đề;
       video phát ngay, không chờ phụ đề. Guard theo currentKey để tránh
       dựng nhầm khi người học đã chuyển truyện khác. */
    subState = null;
    ensureSubs(entry.level).then(function () {
      if (state.currentKey !== entry.key) return;
      var data = subsDataFor(entry.level, entry.key);
      if (data && data.cues && data.cues.length) buildSubUI(entry, data);
    });
  }

  /* ---------------- dựng lớp phụ đề + lặp A–B cho 1 truyện ---------------- */
  function buildSubUI(entry, data) {
    var zone = stageEl.querySelector("#ttcStorySubZone");
    var vid = stageEl.querySelector("#ttcStoryVideoFrame");
    if (!zone || !vid) return;
    var cues = data.cues;
    subState = { key: entry.key, cues: cues, cur: -2, A: null, B: null, loop: false };
    zone.hidden = false;
    setSubsLayout(true);

    /* Thanh karaoke: chèn vào stage ngay TRƯỚC thanh cài đặt (tức ngay dưới
       video) — câu hiện tại sống ở đây + nổi bật trong danh sách, không còn
       khối câu khổ lớn trong cột phải. */
    var kara = document.createElement("div");
    kara.className = "ttc-story-karaoke";
    kara.id = "ttcStoryKaraoke";
    kara.innerHTML =
      '<div class="ttc-kara-bar"><span class="ttc-kara-tag" id="ttcStorySubTag">📜 PHỤ ĐỀ TỪNG CÂU</span>' +
      '<span class="ttc-kara-idle" id="ttcStorySubIdle">🎬 Phần mở đầu…</span>' +
      '<span class="ttc-kara-words" id="ttcStoryKaraWords"></span></div>' +
      '<p class="ttc-kara-vi" id="ttcStorySubVi"></p>';
    var setbar = stageEl.querySelector("#ttcStorySetbar");
    if (setbar && setbar.parentNode) setbar.parentNode.insertBefore(kara, setbar);
    else stageEl.insertBefore(kara, zone);

    /* Chip lớp phụ đề vào ô trái của thanh cài đặt mảnh dưới video. */
    var tools = stageEl.querySelector("#ttcStorySubTools");
    if (tools) {
      tools.hidden = false;
      tools.innerHTML =
        '<button type="button" class="ttc-story-subchip" data-sub-pref="zh">Hán tự</button>' +
        '<button type="button" class="ttc-story-subchip" data-sub-pref="py">Pinyin</button>' +
        '<button type="button" class="ttc-story-subchip" data-sub-pref="vi">Nghĩa Việt</button>' +
        '<button type="button" class="ttc-story-subchip" data-sub-pref="trad">Phồn thể</button>';
    }

    /* Cột phải chỉ còn: thanh lặp A–B mảnh + danh sách câu (tab Bài tập do
       gói bài tập chèn lên trên cùng của vùng này). */
    zone.innerHTML =
      '<div class="ttc-story-abbar" role="group" aria-label="Lặp đoạn A–B">' +
      '<button type="button" class="ttc-story-abbtn" id="ttcStorySetA">Đặt A</button>' +
      '<button type="button" class="ttc-story-abbtn" id="ttcStorySetB">Đặt B</button>' +
      '<span class="ttc-story-ab-status" id="ttcStoryABStatus">Đặt A · Đặt B để lặp đoạn.</span>' +
      '<button type="button" class="ttc-story-abbtn" id="ttcStoryLoopToggle" disabled aria-pressed="false">Lặp: Tắt</button>' +
      '<button type="button" class="ttc-story-abbtn" id="ttcStoryClearAB" disabled aria-label="Xoá lặp">✖</button></div>' +
      '<div class="ttc-story-sublist" id="ttcStorySubList" aria-label="Danh sách câu — bấm để nhảy tới đoạn"></div>';

    var tagEl = kara.querySelector("#ttcStorySubTag");
    var idleEl = kara.querySelector("#ttcStorySubIdle");
    var wordsEl = kara.querySelector("#ttcStoryKaraWords");
    var viEl = kara.querySelector("#ttcStorySubVi");
    var listEl2 = zone.querySelector("#ttcStorySubList");
    var statusEl = zone.querySelector("#ttcStoryABStatus");
    var loopBtn = zone.querySelector("#ttcStoryLoopToggle");
    var clearBtn = zone.querySelector("#ttcStoryClearAB");

    function cueZh(i) { return tradText(cues[i][2]); }
    function renderKaraoke(idx) {
      if (idx < 0 || idx >= cues.length) {
        tagEl.textContent = "📜 PHỤ ĐỀ TỪNG CÂU";
        idleEl.style.display = "";
        idleEl.textContent = idx < 0 ? "🎬 Phần mở đầu…" : "✦ Phần kết — bấm vào một câu để nghe lại nhé!";
        wordsEl.innerHTML = "";
        viEl.textContent = "";
        return;
      }
      tagEl.textContent = "📜 CÂU " + (idx + 1) + "/" + cues.length;
      idleEl.style.display = "none";
      var words = karaokeWords(cues[idx], entry.level);
      if (words) {
        wordsEl.innerHTML = words.map(function (w) {
          if (w.punct) return '<span class="ttc-kw-punct">' + esc(w.punct) + "</span>";
          return '<span class="ttc-kw"><span class="ttc-kw-py">' + esc(w.py) + '</span>' +
            '<span class="ttc-kw-zh">' + esc(tradText(w.zh)) + "</span></span>";
        }).join("");
      } else {
        wordsEl.innerHTML = '<span class="ttc-kara-fb"><span class="ttc-kara-fb-py">' + esc(cues[idx][3]) + '</span>' +
          '<span class="ttc-kara-fb-zh">' + esc(cueZh(idx)) + "</span></span>";
      }
      viEl.textContent = cues[idx][4];
    }
    function renderList() {
      var html = "";
      cues.forEach(function (c, i) {
        html += '<button type="button" class="ttc-story-subrow" data-sub-idx="' + i + '">' +
          '<span class="ttc-ss-play" aria-hidden="true">▶</span>' +
          '<span class="ttc-ss-main">' +
          '<span class="ttc-ss-zh">' + esc(cueZh(i)) + "</span>" +
          '<span class="ttc-ss-vi">' + esc(c[4]) + "</span></span></button>";
      });
      listEl2.innerHTML = html;
      Array.prototype.forEach.call(listEl2.querySelectorAll("[data-sub-idx]"), function (row) {
        row.addEventListener("click", function () {
          var i = Number(row.getAttribute("data-sub-idx"));
          try { vid.currentTime = cues[i][0] + 0.01; } catch (e) {}
          var p = vid.play(); if (p && p.catch) p.catch(function () {});
        });
      });
    }
    function applyPrefs() {
      stageEl.classList.toggle("ttc-sub-off-zh", !subPrefs.zh);
      stageEl.classList.toggle("ttc-sub-off-py", !subPrefs.py);
      stageEl.classList.toggle("ttc-sub-off-vi", !subPrefs.vi);
      Array.prototype.forEach.call(stageEl.querySelectorAll("[data-sub-pref]"), function (chip) {
        var k = chip.getAttribute("data-sub-pref");
        var on = !!subPrefs[k];
        chip.classList.toggle("is-cur", on);
        chip.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }
    Array.prototype.forEach.call(stageEl.querySelectorAll("[data-sub-pref]"), function (chip) {
      chip.addEventListener("click", function () {
        var k = chip.getAttribute("data-sub-pref");
        subPrefs[k] = !subPrefs[k];
        saveSubPrefs();
        applyPrefs();
        if (k === "trad") { renderList(); if (subState) { subState.cur = -2; syncToTime(true); } }
      });
    });
    function abStatus(msg) {
      if (msg) { statusEl.textContent = msg; return; }
      var a = subState.A, b = subState.B;
      if (a == null && b == null) statusEl.textContent = "Đặt A · Đặt B để lặp đoạn.";
      else if (a != null && b == null) statusEl.textContent = "A = " + fmtClock(a) + " · bấm Đặt B.";
      else if (a == null && b != null) statusEl.textContent = "B = " + fmtClock(b) + " · bấm Đặt A.";
      else statusEl.textContent = "A = " + fmtClock(a) + " · B = " + fmtClock(b) + (subState.loop ? " · đang lặp" : "");
    }
    function abRefresh() {
      var ok = subState.A != null && subState.B != null && subState.B > subState.A;
      loopBtn.disabled = !ok;
      clearBtn.disabled = subState.A == null && subState.B == null;
      loopBtn.classList.toggle("is-cur", !!subState.loop);
      loopBtn.setAttribute("aria-pressed", subState.loop ? "true" : "false");
      loopBtn.textContent = subState.loop ? "Lặp: Bật" : "Lặp: Tắt";
      abStatus();
    }
    zone.querySelector("#ttcStorySetA").addEventListener("click", function () {
      subState.A = vid.currentTime;
      if (subState.B != null && subState.B <= subState.A) { subState.B = null; subState.loop = false; }
      else if (subState.B != null) subState.loop = true;
      abRefresh();
    });
    zone.querySelector("#ttcStorySetB").addEventListener("click", function () {
      var t = vid.currentTime;
      if (subState.A != null && t <= subState.A) { abStatus("⚠ Điểm B phải nằm SAU điểm A (" + fmtClock(subState.A) + ")."); return; }
      subState.B = t;
      if (subState.A != null) subState.loop = true;
      abRefresh();
    });
    loopBtn.addEventListener("click", function () { subState.loop = !subState.loop; abRefresh(); });
    clearBtn.addEventListener("click", function () {
      subState.A = null; subState.B = null; subState.loop = false; abRefresh();
    });

    function findCue(t) {
      var lo = 0, hi = cues.length - 1, ans = -1;
      while (lo <= hi) {
        var mid = (lo + hi) >> 1;
        if (cues[mid][0] <= t) { ans = mid; lo = mid + 1; } else hi = mid - 1;
      }
      if (ans < 0) return -1;
      return t < cues[ans][1] ? ans : (ans + 1 < cues.length ? -1 : cues.length);
    }
    function scrollRowIntoList(row) {
      if (!row) return;
      var lr = listEl2.getBoundingClientRect();
      var rr = row.getBoundingClientRect();
      var target = listEl2.scrollTop + (rr.top - lr.top) - listEl2.clientHeight / 2 + rr.height / 2;
      listEl2.scrollTop = Math.max(0, target);
    }
    function syncToTime(force) {
      if (!subState || subState.key !== entry.key) return;
      var t = vid.currentTime || 0;
      var idx = findCue(t);
      if (idx === subState.cur && !force) return;
      subState.cur = idx;
      renderKaraoke(idx);
      Array.prototype.forEach.call(listEl2.querySelectorAll(".ttc-story-subrow"), function (row, i) {
        var on = i === idx;
        if (on !== row.classList.contains("is-cur")) {
          row.classList.toggle("is-cur", on);
          if (on) scrollRowIntoList(row);
        }
      });
    }
    vid.addEventListener("timeupdate", function () {
      if (!subState || subState.key !== entry.key) return;
      if (subState.loop && subState.A != null && subState.B != null &&
          vid.currentTime >= subState.B - 0.02) {
        try { vid.currentTime = subState.A + 0.01; } catch (e) {}
        return;
      }
      syncToTime(false);
    });
    vid.addEventListener("seeked", function () { syncToTime(true); });
    renderList();
    applyPrefs();
    abRefresh();
    syncToTime(true);
  }

  /* Tự cuộn mượt đưa trình phát lên đầu tầm nhìn trong overlay
     (overlay là container cuộn; scrollIntoView tự cuộn đúng nó). */
  function scrollToPlayer() {
    if (!stageEl) return;
    var target = stageEl.querySelector(".ttc-story-frame-wrap") || stageEl;
    var go = function () {
      try { target.scrollIntoView({ behavior: "smooth", block: "start" }); }
      catch (e) { try { target.scrollIntoView(); } catch (e2) {} }
    };
    if (window.requestAnimationFrame) window.requestAnimationFrame(go);
    else go();
  }

  function playStory(entry) {
    if (!entry) return Promise.resolve(false);
    return gateFor(entry.level).then(function (ok) {
      if (!ok) { renderStageLocked(entry); scrollToPlayer(); return false; }
      state.currentKey = entry.key;
      renderStage(entry);
      setListOpen(listPrefOpen, false);
      renderList();
      scrollToPlayer();
      return true;
    });
  }

  function applyTab(lv) {
    state.tab = lv;
    state.currentKey = null;
    renderTabs();
    renderList();
    renderStageEmpty();
    applyListPref();
  }

  /* Cổng Premium ở MỨC TAB (chủ web phản ánh 2026-11-19: chip HSK 3 có
     🔒 mà tài khoản Free vẫn mở xem trọn danh sách 30 truyện — trước đây
     cổng chỉ đặt ở lúc PHÁT, danh sách thì ai cũng xem được). Nay bấm
     chip cấp Premium phải qua đúng gateFor như Phòng đọc: cổng không
     qua thì GIỮ NGUYÊN tab hiện tại, không dựng danh sách cấp đó; cổng
     tự hiện lời mời Premium / form đăng nhập như mọi khu khác. Cấp miễn
     phí + bấm lại tab đang mở: chuyển/dựng lại ngay như cũ. */
  function switchTab(level) {
    var lv = Number(level) || 1;
    if (lv === state.tab || !isPremiumLevel(lv)) {
      applyTab(lv);
      return Promise.resolve(true);
    }
    return gateFor(lv).then(function (ok) {
      if (!ok) { renderTabs(); return false; }
      applyTab(lv);
      return true;
    });
  }

  function openZone() {
    buildOverlay();
    if (!levelItems(state.tab).length) state.tab = firstDataLevel();
    renderTabs();
    renderList();
    if (!state.currentKey) renderStageEmpty();
    applyListPref();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeZone() {
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    subState = null;
    var f = overlay.querySelector("#ttcStoryVideoFrame");
    if (f) f.src = "about:blank";
  }

  /* ---------------- panel trên dashboard ---------------- */
  function countsLine() {
    var cat = catalog();
    if (!cat) return "Truyện kể có tranh minh họa chuyển động và giọng đọc — xem ngay trên web.";
    var parts = [];
    for (var n = 1; n <= 9; n++) {
      var c = levelItems(n).length;
      if (c) parts.push(c + " truyện HSK " + n);
    }
    return (parts.length ? parts.join(" · ") : "Truyện kể HSK") +
      " — tranh minh họa chuyển động, giọng đọc kể chuyện · HSK 1–2 miễn phí";
  }

  function injectPanel() {
    if (document.getElementById("otter2StoryVideoPanel")) return true;
    ensureStyle();
    var stack = document.querySelector(".ttc-exam-midstack");
    var examPanel = document.getElementById("otter2ExamPanel");
    if (!stack && !examPanel) return false;
    var panel = document.createElement("section");
    panel.className = "otter2-dash-card ttc-story-panel";
    panel.id = "otter2StoryVideoPanel";
    panel.setAttribute("aria-label", "Học theo video — truyện kể HSK");
    panel.innerHTML =
      '<div class="ttc-story-panel-in">' +
      '<div class="ttc-story-panel-head"><span class="ttc-story-panel-play" aria-hidden="true">▶</span>' +
      '<h3 class="ttc-story-panel-title">Học theo video</h3>' +
      '<span class="ttc-story-panel-free">MIỄN PHÍ</span></div>' +
      '<p class="ttc-story-panel-desc">' + esc(countsLine()) + "</p>" +
      '<button type="button" class="ttc-story-panel-btn" id="otter2FeatStoryVideo"><span class="ttc-story-panel-btn-txt">Xem truyện kể →</span></button>' +
      "</div>";
    if (stack) stack.appendChild(panel); /* con thứ 3: sau panel Luyện thi + thẻ kỹ năng */
    else if (examPanel && examPanel.parentNode) examPanel.parentNode.insertBefore(panel, examPanel.nextSibling);
    panel.querySelector("#otter2FeatStoryVideo").addEventListener("click", function (e) {
      e.preventDefault();
      openZone();
    });
    return true;
  }

  function init() {
    if (injectPanel()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (injectPanel() || tries > 40) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.otter2OpenStoryVideoZone = openZone;
  window.__ttcStoryVideo = {
    open: openZone,
    close: closeZone,
    play: playStory,
    switchTab: switchTab,
    gate: gateFor,
    state: function () { return state; },
    catalog: catalog,
    watched: loadWatched,
    subState: function () { return subState; },
    subPrefs: function () { return subPrefs; },
    ensureSubs: ensureSubs,
    subsDataFor: subsDataFor
  };
})();
