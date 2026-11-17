/* Otter2 — Gọn trang chủ trên ĐIỆN THOẠI (yêu cầu chủ web 2026-11-17).

   Phạm vi: CHỈ mobile (mọi luật nằm trong @media (max-width:1020px) — cùng
   breakpoint với lưới #otter2-home). Desktop >1020px không đổi bất kỳ pixel nào.

   ĐỢT 1 — cụm nút "Cửa học tập" trong thẻ "Khóa tự học"
   (.otter2-dash-course .otter2-feature-row):
     - Hàng nút thành lưới 2 cột, gap 10px (ghi đè luật 1 cột !important cũ).
     - "Kho từ vựng HSK" (.otter2-feature--vocab): thanh ngang mỏng phủ cả
       2 cột, icon trái + chữ phải trên 1 hàng, cao 54px.
     - 4 nút còn lại (Ngữ pháp / Luyện phát âm / Flashcard / 214 Bộ thủ):
       lưới 2 cột x 2 hàng, mỗi ô cao 70px, icon trên chữ dưới, cả ô bấm được.
   Tổng cụm: 54 + 10 + 70 + 10 + 70 = 214px (cũ ~424px) — giảm ~một nửa.

   ĐỢT 2 — chia TẤT CẢ các mục trang chủ thành 2 cột nhỏ gọn (ý chủ web:
   "như khu luyện thi ở giữa trên máy tính", theo ảnh chụp iPhone 13:08):
     - Lưới #otter2-home chuyển thành 2 cột: các khối lớn thật sự cần bề ngang
       (lời chào, dải chip HSK, thẻ Khóa tự học, panel Luyện thi, thẻ Trình
       độ & kỹ năng, mục Bài học mỗi ngày, Hành trình HSK, banner Facebook)
       phủ cả 2 cột; các khối vừa/nhỏ GHÉP ĐÔI thành 1 hàng 2 cột:
         [Hoạt động học tập | Nhiệm vụ hôm nay] — số liệu thu nhỏ, lưới cấp
           3 cột giữ nguyên trong ô hẹp; hàng nhiệm vụ xếp lại dạng lưới
           icon trái / chữ trên / nhãn dưới cho vừa ô ~150px.
         [Tiếp tục hành trình | Lộ trình HSK 1–9] — ảnh bìa 16/9 thu theo ô,
           9 bậc lộ trình chuyển từ 1 hàng 9 ô sang lưới 3x3 trong ô hẹp.
       Panel Luyện thi giữ full-width: nó là panel hero chủ lực với 9 chip
       chọn cấp + dòng điểm lần gần nhất + nút CTA lớn — ép xuống nửa cột
       (~150px) sẽ vỡ chip và nút; thay vào đó ép gọn bên trong (huy hiệu
       54→44px, mô tả cắt 2 dòng, chip nhỏ lại, nút 52→48px).
     - Bên trong các khối phủ 2 cột cũng được ép chiều cao: hero lộ trình
       xanh trong thẻ Khóa tự học (padding/chữ/mô tả cắt 2 dòng), thẻ Trình
       độ (số cấp 44→32px, ô kỹ năng 64→54px), hàng Bài học (đệm 13→9px,
       mô tả cắt 2 dòng), Hành trình (nút tròn 72→60px, đệm thẻ 18→12px).
     - Mọi luật đợt 2 dùng selector có #otter2-home nên thắng CSS runtime
       mà otter2-exam.js bơm vào sau (nó chỉ đặt grid-area — tên area giữ
       nguyên: exam / level / ...). Thứ tự + cấu trúc .ttc-exam-midstack
       (panel thi → thẻ kỹ năng) không đổi; panel vẫn mang class
       .otter2-dash-card nên cơ chế vật cản của Bé Rái Cá không bị ảnh hưởng.
     - Khu Học qua video đã được chủ web thu khỏi bản live (2026-11-17):
       module này KHÔNG tham chiếu panel video; khi khu video trở lại theo
       hướng nội dung mới, panel của nó sẽ tự thích ứng với lưới 2 cột này.

   Chỉ trình bày: không đụng DOM, id, handler hay màu nền sẵn có của các nút. */
(function () {
  "use strict";
  if (window.__OTTER2_MOBILE_DASH_V1__) return;
  window.__OTTER2_MOBILE_DASH_V1__ = true;

  var STYLE_ID = "otter2MobileDashStyle";
  if (document.getElementById(STYLE_ID)) return;

  var css = [
    "@media (max-width:1020px){",

    /* ===== ĐỢT 1: cụm 5 nút "Cửa học tập" ===== */
    ".otter2-dash-course .otter2-feature-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px;margin:12px 0 0}",
    ".otter2-dash-course .otter2-feature{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:70px;height:70px;width:100%;padding:8px 6px;gap:5px;border-radius:14px;box-sizing:border-box}",
    ".otter2-dash-course .otter2-feature .otter2-ico{width:30px;height:30px;font-size:16px;border-radius:9px}",
    ".otter2-dash-course .otter2-feature strong{font-size:13.5px;line-height:1.2}",
    ".otter2-dash-course .otter2-feature--vocab{grid-column:1/-1;flex-direction:row;justify-content:flex-start;text-align:left;min-height:54px;height:54px;padding:8px 14px;gap:10px}",
    ".otter2-dash-course .otter2-feature--vocab .otter2-ico{width:32px;height:32px;font-size:17px}",
    ".otter2-dash-course .otter2-feature--vocab strong{font-size:14.5px}",

    /* ===== ĐỢT 2: lưới nhà 2 cột ===== */
    "#otter2-home.otter2-screen{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:'hero hero' 'strip strip' 'course course' 'exam exam' 'level level' 'activity tasks' 'lessons lessons' 'continue road' 'journey journey' 'banner banner';gap:12px}",
    "#otter2-home .otter2-dash-card{padding:14px}",
    "#otter2-home .otter2-dash-head{margin-bottom:10px}",

    /* Lời chào + dải chip HSK: giữ full-width (khối chữ giới thiệu + thanh chip
       trượt ngang), chỉ ép nhẹ chiều cao. */
    "#otter2-home .otter2-hero{padding-top:4px}",
    "#otter2-home .otter2-sub{font-size:14px}",
    "#otter2-home .otter2-dash-chip{padding:7px 14px}",

    /* Thẻ Khóa tự học: hero lộ trình gọn lại (thẻ chính — giữ full-width vì
       chứa thanh tiến độ + cụm nút đợt 1 + hub lộ trình bên dưới). */
    "#otter2-home .otter2-dash-hero{padding:12px}",
    "#otter2-home .otter2-dash-hero h3{font-size:17px;margin:6px 0 2px}",
    "#otter2-home .otter2-dash-hero p{font-size:12.5px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .otter2-dash-prow{margin-top:10px}",
    "#otter2-home .otter2-dash-hero-cta{margin-top:8px}",

    /* Panel Luyện thi: giữ full-width (9 chip cấp + CTA lớn không vừa nửa
       cột), ép gọn bên trong — chip và dòng lần gần nhất vẫn hiện đầy đủ. */
    "#otter2-home .ttc-exam-panel-trophy{width:44px;height:44px;font-size:23px}",
    "#otter2-home .ttc-exam-panel-title{font-size:18px}",
    "#otter2-home .ttc-exam-panel-desc{margin-top:9px;font-size:13.5px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .ttc-exam-panel-chips{gap:6px;margin-top:10px}",
    "#otter2-home .ttc-exam-panel-chip{padding:6px 11px;font-size:12.5px;min-height:34px}",
    "#otter2-home .ttc-exam-panel-last{margin-top:10px;padding:7px 11px;font-size:12.5px}",
    "#otter2-home .ttc-exam-panel-btn{margin-top:11px;min-height:48px;padding:12px 16px;font-size:15.5px}",

    /* Thẻ Trình độ & kỹ năng: giữ full-width (lưới kỹ năng 2x2 cần bề ngang),
       ép chiều cao bên trong. */
    "#otter2-home .otter2-dash-levelbig{gap:10px}",
    "#otter2-home .otter2-dash-levelbig .lv{font-size:32px}",
    "#otter2-home .otter2-dash-skill{margin-top:10px;padding:10px 12px}",
    "#otter2-home .otter2-dash-skillgrid{gap:8px;margin-top:10px}",
    "#otter2-home .otter2-dash-skilltile{min-height:54px;padding:9px 10px}",
    "#otter2-home .otter2-dash-skilltile small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",

    /* Thẻ Hoạt động (nửa cột): số lớn + lưới cấp thu nhỏ, ghi chú chữ nhỏ */
    "#otter2-home .otter2-dash-card[aria-labelledby='otter2DashActTitle'] h2{font-size:15px}",
    "#otter2-home .otter2-dash-actnum{gap:8px}",
    "#otter2-home .otter2-dash-actnum .n{font-size:30px}",
    "#otter2-home .otter2-dash-actnum .lbl{font-size:12px;line-height:1.4}",
    "#otter2-home .otter2-dash-lvgrid{gap:5px;margin-top:10px}",
    "#otter2-home .otter2-dash-lvcell{padding:6px 3px;border-radius:9px}",
    "#otter2-home .otter2-dash-lvcell b{font-size:11.5px}",
    "#otter2-home .otter2-dash-lvcell span{font-size:10px}",
    "#otter2-home .otter2-dash-note{font-size:11.5px;line-height:1.5;margin-top:10px}",

    /* Thẻ Nhiệm vụ (nửa cột): hàng nhiệm vụ xếp lưới icon/chữ/nhãn */
    "#otter2-home .otter2-dash-card[aria-labelledby='otter2DashTasksTitle'] h2{font-size:15px}",
    "#otter2-home .otter2-dash-task{display:grid;grid-template-columns:32px minmax(0,1fr);column-gap:9px;row-gap:3px;align-items:center;padding:9px 2px}",
    "#otter2-home .otter2-dash-task .ic{grid-column:1;grid-row:1/span 2;width:32px;height:32px;font-size:15px}",
    "#otter2-home .otter2-dash-task .tt span{font-size:12.5px}",
    "#otter2-home .otter2-dash-task .tt small{font-size:10.5px}",
    "#otter2-home .otter2-dash-task .mins{grid-column:2;justify-self:start;padding:3px 8px;font-size:11px}",
    "#otter2-home .otter2-dash-cta{min-height:44px;padding:11px;font-size:14px;margin-top:10px;border-radius:12px}",

    /* Bài học mỗi ngày: giữ full-width (danh sách bài + ô tìm kiếm), hàng gọn */
    "#otter2-home .otter2-dash-search input{padding:8px 0}",
    "#otter2-home .otter2-dash-lesson{grid-template-columns:38px minmax(0,1fr) auto;gap:10px;padding:9px 2px}",
    "#otter2-home .otter2-dash-thumb{width:38px;height:38px;font-size:16px}",
    "#otter2-home .otter2-dash-lesson-main small{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",

    /* Thẻ Học tiếp (nửa cột) */
    "#otter2-home .otter2-dash-kicker{font-size:11px}",
    "#otter2-home .otter2-dash-continue h3{font-size:15px;margin:4px 0 6px}",
    "#otter2-home .otter2-dash-continue p{font-size:12px;line-height:1.5;margin:8px 0 10px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .otter2-dash-ctared{min-height:44px;padding:11px;font-size:14px;border-radius:12px}",

    /* Thẻ Lộ trình (nửa cột): 9 bậc thành lưới 3x3 */
    "#otter2-home .otter2-dash-card[aria-labelledby='otter2DashRoadTitle'] h2{font-size:15px}",
    "#otter2-home .otter2-dash-steps{grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}",
    "#otter2-home .otter2-dash-step{padding:9px 4px 8px;border-radius:12px}",
    "#otter2-home .otter2-dash-step .n{font-size:14px}",
    "#otter2-home .otter2-dash-step small{font-size:10px}",

    /* Hành trình HSK: giữ full-width (workspace học từ), chỉ ép đệm + nút tròn */
    "#otter2-home #otter2HskJourney.otter2-panel{padding:12px}",
    "#otter2-home .otter2-node{width:60px;height:60px}",

    /* Banner Facebook: giữ full-width (banner ngang), ép đệm + cắt mô tả 2 dòng */
    "#otter2-home .otter2-fb-banner{padding:10px 12px}",
    "#otter2-home .otter2-fb-banner-text strong{font-size:14.5px}",
    "#otter2-home .otter2-fb-banner-text span{font-size:12.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .otter2-fb-banner-btn{min-height:42px;font-size:14px}",

    "}"
  ].join("\n");

  var st = document.createElement("style");
  st.id = STYLE_ID;
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
})();
