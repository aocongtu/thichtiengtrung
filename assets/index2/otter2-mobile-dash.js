/* Otter2 — Gọn trang chủ trên ĐIỆN THOẠI (yêu cầu chủ web 2026-11-17).

   Phạm vi: CHỈ mobile (mọi luật nằm trong @media (max-width:1020px) — cùng
   breakpoint với lưới #otter2-home). Desktop >1020px không đổi bất kỳ pixel nào.

   ĐỢT 1 — cụm nút "Cửa học tập" trong thẻ "Khóa tự học"
   (.otter2-dash-course .otter2-feature-row): Kho từ vựng = thanh ngang mỏng,
   4 nút còn lại = ô gọn (lúc đó thẻ khóa học còn phủ cả bề ngang mobile).

   ĐỢT 2 — chia các mục trang chủ thành hàng 2 cột kiểu ghép đôi
   [Hoạt động | Nhiệm vụ], [Học tiếp | Lộ trình]; các khối lớn (lời chào, chip
   HSK, thẻ Khóa tự học, panel Luyện thi, thẻ Trình độ) phủ cả 2 cột.

   ĐỢT 3 — CHỈ ĐẠO MỚI của chủ web (2026-11-17, theo ảnh desktop anh vẽ tay):
   trên điện thoại, TRÊN CÙNG là 2 cột đúng như 2 cột đầu của desktop —
     cột TRÁI  = cột 1 desktop: lời chào (hero) -> dải chip HSK (strip)
                 -> thẻ "Khóa tự học" (course);
     cột PHẢI  = cột 2 desktop: cụm .ttc-exam-midstack theo đúng thứ tự
                 panel Luyện thi (exam) -> thẻ Trình độ & kỹ năng (level)
                 -> panel Truyện kể (story);
   cột 3 desktop ("Hoạt động học tập" -> "Nhiệm vụ hôm nay") CẮT XUỐNG DƯỚI,
   mỗi thẻ phủ cả bề ngang; phía dưới nữa giữ thứ tự cũ: Bài học mỗi ngày ->
   [Học tiếp | Lộ trình] -> Hành trình HSK -> banner Facebook.
   Cách dựng bằng grid-template-areas (mỗi tên area là hình chữ nhật):
     'hero exam' / 'strip exam'     — panel thi ôm 2 hàng đầu cột phải,
     'course level' / 'course story' — thẻ khóa học ôm 2 hàng cuối cột trái,
   nhờ vậy 2 cột tự cân chiều cao, khối nào cũng đứng đúng cột + đúng thứ tự
   trong cột của mình. #otter2-home vốn align-items:start nên khối không bị
   kéo giãn theo hàng.
   Selector lưới dùng section#otter2-home.otter2-screen (đặc hiệu 1,1,1) để
   thắng luật areas mà otter2-storyvideo.js bơm SAU module này (1,1,0) —
   panel truyện vì thế vào đúng cột phải thay vì phủ cả bề ngang như đợt 2.
   Bên trong từng khối ép gọn cho bề ngang ~nửa màn hình (390px -> cột ~179px,
   360px -> cột ~164px):
     - Hero: tiêu đề 20px vừa nửa cột, dòng phụ cắt 3 dòng; dải chip HSK
       xếp lưới 3x3 (vá lỗi 1 bên dưới).
     - Thẻ Khóa tự học: hero lộ trình gọn; cụm "Cửa học tập" xếp DỌC 1 cột —
       Kho từ vựng vẫn là thanh ngang mỏng 48px, 4 nút còn lại thành hàng
       ngang gọn cao 46px (icon trái, chữ phải, cả hàng bấm được).
     - Panel Luyện thi: cúp 38px, tiêu đề 16px, mô tả cắt 2 dòng, chip cấp
       32px bọc dòng, nút vào thi 44px.
     - Thẻ Trình độ: số cấp 27px, lưới kỹ năng 2x2 ô 48px.
     - Panel Truyện kể: đệm 12px, nút phát 40px, tiêu đề 16px, mô tả cắt 2
       dòng, nút xem 44px (đợt 3 chỉ nén trình bày; nền gradient được
       giảm tông ở vòng 2 — xem mục GIẢM TÔNG VÒNG 2 bên dưới).
     - Hoạt động (nay full-width): số lớn 34px, lưới 9 cấp giữ 3 cột với ô
       thoáng hơn bản nửa cột đợt 2. Nhiệm vụ (full-width): hàng nhiệm vụ
       trở lại dạng ngang như desktop (icon 38px + chữ + nhãn phút), nút
       CTA 46px.
   VÁ 2 LỖI + GIẢM TÔNG (phản hồi của chủ web sau khi xem bản đợt 3 live):
     1) Dải chip HSK ở cột trái: từ 1 hàng cuộn ngang -> lưới 3x3
        (3 hàng x 3 cấp, hết cuộn ngang), pill nén cho vừa ô nửa cột;
        trạng thái active/handler chọn cấp giữ nguyên (chỉ đổi trình bày).
     2) Panel Luyện thi: nhãn vàng "MIỄN PHÍ" bị mép panel cắt mất chữ
        (header flex không gói dòng + panel overflow:hidden) -> header cho
        gói dòng, tiêu đề min-width:0 co được, nhãn nowrap và gọn lại:
        khi nửa cột chật, nhãn tự xuống hàng riêng, luôn hiện đầy đủ.
     3) Giảm tông màu mobile (chủ web chê "quá loè loẹt") cho đúng 2 khối:
        panel thi gradient #f97316 -> #e11d48 -> #7c3aed giảm thành
        #e8835f -> #d9576b -> #845ec9 (selector 2 ID + 2 class, đặc hiệu
        (2,2,0), thắng cả biến thể nền đêm html[data-theme='night']
        (2,1,1) của exam.js); hero lộ trình xanh lá #22c55e -> #15803d
        giảm thành #4cab6d -> #2e7c4f. Desktop + mọi khối khác giữ màu gốc.
   GIẢM TÔNG VÒNG 2 + TÔ MÀU NÚT KỸ NĂNG (phản hồi tiếp của chủ web):
     4) Tím + xanh lá vẫn hơi đậm -> giảm thêm một bậc: panel Truyện kể
        #6d28d9 -> #a21caf -> #d97706 thành #9668cf -> #bd6fb8 -> #e2a763
        (selector 2 ID + 2 class, đặc hiệu (2,2,0), thắng luật nền khóa
        bằng #otter2-home #otter2StoryVideoPanel (2,0,0) của storyvideo);
        hero lộ trình #4cab6d -> #2e7c4f thành #6fbf8a -> #459a68; nút
        Kho từ vựng (xanh gốc #22c55e -> #15803d còn gắt) giảm nhẹ theo
        thành #57b877 -> #3c8a5a cho hài hoà với hero mới.
     5) 4 nút kỹ năng trong thẻ Trình độ (nền trắng trơn bị chê nhạt):
        tô nền pastel phân biệt theo data-dash-goto — Nghe & Đọc xanh
        dương nhạt, Viết chữ Hán hổ phách nhạt, Nói & phát âm hồng đào
        nhạt, Học tự động hồng sen nhạt (viền đậm hơn nền một tông, chữ
        tối giữ nguyên); kèm biến thể nền đêm trầm cùng hệ màu để chữ
        sáng ban đêm vẫn đọc rõ. Chỉ đổi nền/viền — không đổi cỡ/handler.
   Chỉ trình bày: không đụng DOM, id, handler hay màu nền sẵn có của các nút;
   panel thi/truyện vẫn mang class .otter2-dash-card nên cơ chế vật cản của
   Bé Rái Cá không bị ảnh hưởng. */
(function () {
  "use strict";
  if (window.__OTTER2_MOBILE_DASH_V1__) return;
  window.__OTTER2_MOBILE_DASH_V1__ = true;

  var STYLE_ID = "otter2MobileDashStyle";
  if (document.getElementById(STYLE_ID)) return;

  var css = [
    "@media (max-width:1020px){",

    /* ===== ĐỢT 3: lưới nhà — cột 1 + cột 2 desktop lên trên, cột 3 xuống dưới ===== */
    "section#otter2-home.otter2-screen{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-areas:'hero exam' 'strip exam' 'course level' 'course story' 'activity activity' 'tasks tasks' 'lessons lessons' 'continue road' 'journey journey' 'banner banner';gap:12px}",
    "#otter2-home .otter2-dash-card{padding:12px}",
    "#otter2-home .otter2-dash-head{margin-bottom:10px}",

    /* ===== CỘT TRÁI (cột 1 desktop) ===== */
    /* Lời chào: tiêu đề nhỏ lại vừa nửa cột, dòng phụ cắt 3 dòng */
    "#otter2-home .otter2-hero{padding-top:2px;min-width:0}",
    "#otter2-home #otter2VoiceSystemBtn{font-size:12px;padding:6px 10px;max-width:100%}",
    "#otter2-home .otter2-title{font-size:20px;line-height:1.25;margin:0 0 5px}",
    "#otter2-home .otter2-sub{font-size:12.5px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",

    /* Dải chip HSK: lưới 3x3 (3 hàng x 3 cấp) trong nửa cột — hết cuộn
       ngang (chỉ đạo của chủ web sau đợt 3); pill nén cho vừa ô ~51px ở
       390px / ~46px ở 360px, chữ HSK + dòng cấp vẫn đọc rõ, vẫn bấm được */
    "#otter2-home .otter2-dash-strip{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow-x:visible;border-radius:20px;min-width:0;padding:6px;gap:6px}",
    "#otter2-home .otter2-dash-chip{box-sizing:border-box;padding:6px 1px;min-height:38px;font-size:11.5px;letter-spacing:0;text-align:center}",
    "#otter2-home .otter2-dash-chip small{font-size:8.5px}",

    /* Thẻ Khóa tự học: hero lộ trình gọn lại */
    "#otter2-home .otter2-dash-course .otter2-dash-sub{font-size:11px}",
    "#otter2-home .otter2-dash-hero{padding:11px}",
    /* Giảm tông xanh lá hero lộ trình trên mobile: gốc #22c55e -> #15803d
       quá chói; vòng 1 về #4cab6d -> #2e7c4f vẫn bị chê đậm nên vòng 2
       nâng sáng thêm một bậc; chữ trắng vẫn tương phản tốt */
    "#otter2-home .otter2-dash-course .otter2-dash-hero{background:#fff}",
    /* Nút Kho từ vựng dùng chung xanh gốc gắt #22c55e -> #15803d (kể cả
       biến thể nền đêm của core, đặc hiệu (0,3,1)) — giảm nhẹ theo hero
       mới cho hài hoà; selector có #otter2-home (1,2,0) thắng cả hai */
    "#otter2-home .otter2-dash-course .otter2-feature--vocab{background:#fff}",
    "#otter2-home .otter2-dash-hero h3{font-size:15.5px;line-height:1.3;margin:6px 0 2px}",
    "#otter2-home .otter2-dash-hero p{font-size:12px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .otter2-dash-prow{margin-top:9px;font-size:12px}",
    "#otter2-home .otter2-dash-hero-cta{margin-top:8px}",

    /* Cụm "Cửa học tập": xếp dọc 1 cột trong thẻ nửa màn hình — Kho từ vựng
       vẫn là thanh ngang mỏng; 4 nút còn lại = hàng ngang gọn 46px. */
    ".otter2-dash-course .otter2-feature-row{display:grid;grid-template-columns:minmax(0,1fr) !important;gap:8px;margin:12px 0 0}",
    ".otter2-dash-course .otter2-feature{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;text-align:left;min-height:46px;height:46px;width:100%;padding:6px 10px;gap:9px;border-radius:12px;box-sizing:border-box}",
    ".otter2-dash-course .otter2-feature .otter2-ico{width:28px;height:28px;font-size:15px;border-radius:8px;flex:none}",
    ".otter2-dash-course .otter2-feature strong{font-size:13px;line-height:1.2}",
    ".otter2-dash-course .otter2-feature--vocab{grid-column:1/-1;min-height:48px;height:48px;padding:6px 12px;gap:10px}",
    ".otter2-dash-course .otter2-feature--vocab .otter2-ico{width:30px;height:30px;font-size:16px}",
    ".otter2-dash-course .otter2-feature--vocab strong{font-size:13.5px}",

    /* ===== CỘT PHẢI (cột 2 desktop — cụm midstack) ===== */
    /* Panel Luyện thi: nén cho nửa cột — chip cấp bọc dòng, CTA vẫn lớn dễ bấm.
       Giảm tông gradient (selector 2 ID + 2 class thắng luật nền khóa bằng
       #otter2ExamPanel và cả biến thể nền đêm của exam.js) */
    "#otter2-home #otter2ExamPanel.otter2-dash-card.ttc-exam-panel{background:#fff}",
    "#otter2-home .ttc-exam-panel-trophy{width:38px;height:38px;font-size:20px}",
    /* Header gói dòng + tiêu đề co được + nhãn MIỄN PHÍ nowrap: nhãn không
       còn bị mép panel (overflow:hidden) cắt mất chữ ở nửa cột */
    "#otter2-home .ttc-exam-panel-head{flex-wrap:wrap;gap:8px}",
    "#otter2-home .ttc-exam-panel-title{font-size:16px;line-height:1.25;flex:1 1 64px;min-width:0}",
    "#otter2-home .ttc-exam-panel-free{white-space:nowrap;font-size:11.5px;padding:6px 11px;letter-spacing:.05em}",
    "#otter2-home .ttc-exam-panel-desc{margin-top:8px;font-size:12.5px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .ttc-exam-panel-chips{gap:5px;margin-top:9px}",
    "#otter2-home .ttc-exam-panel-chip{padding:5px 9px;font-size:12px;min-height:32px}",
    "#otter2-home .ttc-exam-panel-last{margin-top:9px;padding:6px 9px;font-size:12px;line-height:1.4}",
    "#otter2-home .ttc-exam-panel-btn{margin-top:10px;min-height:44px;padding:11px 12px;font-size:14.5px}",

    /* Thẻ Trình độ & kỹ năng: số cấp nhỏ lại, lưới kỹ năng 2x2 gọn */
    "#otter2-home .otter2-dash-levelbig{gap:8px}",
    "#otter2-home .otter2-dash-levelbig .lv{font-size:27px}",
    "#otter2-home .otter2-dash-skill{margin-top:9px;padding:9px 10px}",
    "#otter2-home .otter2-dash-skillgrid{gap:7px;margin-top:9px}",
    "#otter2-home .otter2-dash-skilltile{min-height:48px;padding:8px}",
    "#otter2-home .otter2-dash-skilltile small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    /* Tô màu 4 nút kỹ năng (chủ web: nền trắng quá nhạt) — pastel phân
       biệt theo data-dash-goto, viền đậm hơn nền một tông, chữ tối giữ
       nguyên như core; chỉ nền/viền, không đổi kích thước/handler */
    "#otter2-home .otter2-dash-skilltile[data-dash-goto='reading']{background:#fff;border-color:#e7e9ee;color:#16283F}",
    "#otter2-home .otter2-dash-skilltile[data-dash-goto='write']{background:#fff;border-color:#e7e9ee;color:#16283F}",
    "#otter2-home .otter2-dash-skilltile[data-dash-goto='speak']{background:#fff;border-color:#e7e9ee;color:#ea580c}",
    "#otter2-home .otter2-dash-skilltile[data-dash-goto='auto']{background:#fff;border-color:#e7e9ee;color:#16283F}",
    /* Ban đêm: cùng hệ màu nhưng trầm xuống để chữ sáng (#e5e7eb của core
       đêm) vẫn đọc rõ — selector thêm html[data-theme] (1,3,1) thắng cả
       luật pastel ngày (1,2,0) lẫn luật đêm của core (0,2,1) */
    "html[data-theme='night'] #otter2-home .otter2-dash-skilltile[data-dash-goto='reading']{background:#1e293b;border-color:#334155;color:#3C4756}",
    "html[data-theme='night'] #otter2-home .otter2-dash-skilltile[data-dash-goto='write']{background:#1e293b;border-color:#334155;color:#3C4756}",
    "html[data-theme='night'] #otter2-home .otter2-dash-skilltile[data-dash-goto='speak']{background:#1e293b;border-color:#334155;color:#3C4756}",
    "html[data-theme='night'] #otter2-home .otter2-dash-skilltile[data-dash-goto='auto']{background:#1e293b;border-color:#334155;color:#3C4756}",

    /* Panel Truyện kể: nén như panel thi + GIẢM TÔNG vòng 2 cho nền
       gradient (chủ web chê tím vẫn đậm): selector 2 ID + 2 class (2,2,0)
       thắng luật nền khóa #otter2-home #otter2StoryVideoPanel (2,0,0)
       của storyvideo.js — giữ hệ tím -> hồng -> cam, nâng sáng rõ rệt */
    "#otter2-home #otter2StoryVideoPanel.otter2-dash-card.ttc-story-panel{background:#fff}",
    "#otter2-home .ttc-story-panel{padding:12px}",
    "#otter2-home .ttc-story-panel-play{width:40px;height:40px;flex-basis:40px;font-size:17px}",
    "#otter2-home .ttc-story-panel-title{font-size:16px;line-height:1.25}",
    "#otter2-home .ttc-story-panel-desc{font-size:12.5px;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",
    "#otter2-home .ttc-story-panel-btn{min-height:44px}",

    /* ===== CỘT 3 DESKTOP — cắt xuống dưới, phủ cả bề ngang ===== */
    /* Hoạt động học tập: lưới cấp giữ 3 cột, ô thoáng hơn bản nửa cột đợt 2 */
    "#otter2-home .otter2-dash-actnum{gap:10px}",
    "#otter2-home .otter2-dash-actnum .n{font-size:34px}",
    "#otter2-home .otter2-dash-actnum .lbl{font-size:12.5px;line-height:1.4}",
    "#otter2-home .otter2-dash-lvgrid{gap:6px;margin-top:12px}",
    "#otter2-home .otter2-dash-lvcell{padding:8px 4px;border-radius:10px}",
    "#otter2-home .otter2-dash-lvcell b{font-size:13px}",
    "#otter2-home .otter2-dash-lvcell span{font-size:11.5px}",
    "#otter2-home .otter2-dash-note{font-size:12.5px;line-height:1.5;margin-top:10px}",

    /* Nhiệm vụ hôm nay: hàng nhiệm vụ dạng ngang như desktop, gọn nhẹ */
    "#otter2-home .otter2-dash-task{display:flex;align-items:center;gap:10px;padding:10px 2px}",
    "#otter2-home .otter2-dash-task .ic{width:38px;height:38px;font-size:16px}",
    "#otter2-home .otter2-dash-task .tt span{font-size:13.5px}",
    "#otter2-home .otter2-dash-task .tt small{font-size:11px}",
    "#otter2-home .otter2-dash-task .mins{padding:4px 9px;font-size:12px}",
    "#otter2-home .otter2-dash-cta{min-height:46px;padding:11px;font-size:14.5px;margin-top:10px;border-radius:12px}",

    /* ===== PHÍA DƯỚI NỮA — giữ như đợt 2 ===== */
    /* Bài học mỗi ngày: full-width, hàng gọn */
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

    /* Hành trình HSK: full-width, chỉ ép đệm + nút tròn */
    "#otter2HskJourney.otter2-panel{padding:12px}",
    "#otter2HskJourney .otter2-node{width:60px;height:60px}",

    /* Banner Facebook: full-width, ép đệm + cắt mô tả 2 dòng */
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
