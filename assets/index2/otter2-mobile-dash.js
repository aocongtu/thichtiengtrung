/* Otter2 — Gọn cụm nút "Cửa học tập" trên ĐIỆN THOẠI (yêu cầu chủ web 2026-11-17,
   theo ảnh chụp iPhone: 5 nút trong thẻ "Khóa tự học" đang là thẻ dọc full-width
   rất cao, ăn hết màn hình).

   Phạm vi: CHỈ mobile (mọi luật nằm trong @media (max-width:1020px) — cùng
   breakpoint với lưới #otter2-home). Desktop >1020px không đổi bất kỳ pixel nào.

   Bố cục mới trong .otter2-dash-course .otter2-feature-row:
     - Hàng nút thành lưới 2 cột, gap 10px (ghi đè luật 1 cột !important cũ).
     - "Kho từ vựng HSK" (.otter2-feature--vocab): thanh ngang mỏng phủ cả
       2 cột, icon trái + chữ phải trên 1 hàng, cao 54px.
     - 4 nút còn lại (Ngữ pháp / Luyện phát âm / Flashcard / 214 Bộ thủ):
       lưới 2 cột x 2 hàng, mỗi ô cao 70px, icon trên chữ dưới, cả ô bấm được.
   Tổng cụm: 54 + 10 + 70 + 10 + 70 = 214px (cũ ~424px) — giảm ~một nửa.

   Chỉ trình bày: không đụng DOM, id, handler hay màu nền sẵn có của các nút
   (nền xanh lá của nút Kho từ vựng + nền hồng các ô giữ nguyên theo CSS gốc). */
(function () {
  "use strict";
  if (window.__OTTER2_MOBILE_DASH_V1__) return;
  window.__OTTER2_MOBILE_DASH_V1__ = true;

  var STYLE_ID = "otter2MobileDashStyle";
  if (document.getElementById(STYLE_ID)) return;

  var css = [
    "@media (max-width:1020px){",
    ".otter2-dash-course .otter2-feature-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr)) !important;gap:10px;margin:12px 0 0}",
    ".otter2-dash-course .otter2-feature{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:70px;height:70px;width:100%;padding:8px 6px;gap:5px;border-radius:14px;box-sizing:border-box}",
    ".otter2-dash-course .otter2-feature .otter2-ico{width:30px;height:30px;font-size:16px;border-radius:9px}",
    ".otter2-dash-course .otter2-feature strong{font-size:13.5px;line-height:1.2}",
    ".otter2-dash-course .otter2-feature--vocab{grid-column:1/-1;flex-direction:row;justify-content:flex-start;text-align:left;min-height:54px;height:54px;padding:8px 14px;gap:10px}",
    ".otter2-dash-course .otter2-feature--vocab .otter2-ico{width:32px;height:32px;font-size:17px}",
    ".otter2-dash-course .otter2-feature--vocab strong{font-size:14.5px}",
    "}"
  ].join("\n");

  var st = document.createElement("style");
  st.id = STYLE_ID;
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
})();
