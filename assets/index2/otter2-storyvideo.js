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
    if (typeof window.checkPremiumAccess !== "function") return Promise.resolve(true);
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
      ".ttc-story-shell{background:#fff;border-radius:20px;max-width:1180px;width:100%;margin:auto;padding:18px;box-shadow:0 30px 80px rgba(2,6,23,.35)}",
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
      ".ttc-story-prog{font-size:12.5px;font-weight:700;color:#a21caf;margin:2px 0 6px}",
      ".ttc-story-item{text-align:left;border:1.5px solid rgba(100,116,139,.25);background:transparent;color:inherit;border-radius:12px;padding:9px 11px;cursor:pointer;font-size:13.5px;line-height:1.35;display:flex;gap:9px;align-items:flex-start;width:100%}",
      ".ttc-story-item:hover{border-color:#c026d3}",
      ".ttc-story-item.is-cur{border-color:#c026d3;background:rgba(192,38,211,.08);font-weight:700}",
      ".ttc-story-item .ttc-story-num{flex:0 0 auto;font-weight:900;color:#a21caf;font-size:12.5px;padding-top:1px}",
      ".ttc-story-item .ttc-story-tt{min-width:0;flex:1}",
      ".ttc-story-item .ttc-story-zh{display:block;font-size:15px;font-weight:800}",
      ".ttc-story-item .ttc-story-vi{display:block;font-size:12px;color:#64748b;font-weight:600}",
      ".ttc-story-item .ttc-story-meta{flex:0 0 auto;text-align:right;font-size:11.5px;color:#64748b;line-height:1.5}",
      ".ttc-story-item .ttc-story-check{color:#059669;font-weight:900}",
      ".ttc-story-stage{min-width:0}",
      ".ttc-story-frame-wrap{position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#0f172a}",
      ".ttc-story-frame-wrap iframe,.ttc-story-frame-wrap video{position:absolute;inset:0;width:100%;height:100%;border:0;background:#000}",
      ".ttc-story-empty{padding:34px 16px;text-align:center;color:#64748b;font-size:14px;border:1.5px dashed rgba(100,116,139,.4);border-radius:14px;line-height:1.6}",
      ".ttc-story-now{margin:12px 0 2px;font-size:17px;font-weight:900}",
      ".ttc-story-now-vi{margin:0 0 4px;font-size:13.5px;color:#64748b;font-weight:700}",
      ".ttc-story-meta-line{margin:2px 0 4px;font-size:12.5px;color:#64748b}",
      ".ttc-story-navrow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0 4px}",
      ".ttc-story-navbtn{border:1.5px solid rgba(162,28,175,.45);background:transparent;color:inherit;border-radius:999px;padding:7px 13px;font-weight:800;font-size:13px;cursor:pointer;min-height:38px}",
      ".ttc-story-navbtn:disabled{opacity:.4;cursor:default}",
      ".ttc-story-navrow .ttc-story-navbtn:last-child{margin-left:auto}",
      "/* Tự cuộn khi chọn truyện: chừa đệm 10px phía trên trình phát khi scrollIntoView neo vào. */",
      ".ttc-story-frame-wrap{scroll-margin-top:10px}",
      "/* Hàng nút chỉnh tốc độ phát — ngay dưới khung video, tông tím #7c3aed của khu truyện; mức đang chọn tô đặc. */",
      ".ttc-story-raterow{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0 0}",
      ".ttc-story-rate-label{font-size:13px;font-weight:800;color:#7c3aed;margin-right:2px}",
      ".ttc-story-ratebtn{border:1.5px solid rgba(124,58,237,.45);background:transparent;color:inherit;border-radius:999px;padding:6px 12px;font-weight:800;font-size:13px;cursor:pointer;min-height:36px;min-width:54px}",
      ".ttc-story-ratebtn:hover{border-color:#7c3aed}",
      ".ttc-story-ratebtn.is-cur{background:#7c3aed;color:#fff;border-color:#7c3aed}"
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
      if (e.key === "Escape" && overlay.classList.contains("open")) closeZone();
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
      html += '<p class="ttc-story-prog">Đã xem ' + done + "/" + items.length + " truyện · HSK " + state.tab + "</p>";
      items.forEach(function (v, i) {
        var dur = fmtDur(v.duration_s);
        html += '<button type="button" class="ttc-story-item' + (v.key === state.currentKey ? " is-cur" : "") +
          '" data-story-idx="' + i + '">' +
          '<span class="ttc-story-num">' + (i + 1) + "</span>" +
          '<span class="ttc-story-tt"><span class="ttc-story-zh">' + esc(v.title_zh) + "</span>" +
          (v.title_vi ? '<span class="ttc-story-vi">' + esc(v.title_vi) + "</span>" : "") + "</span>" +
          '<span class="ttc-story-meta">' +
          (watched[v.key] ? '<span class="ttc-story-check" aria-label="Đã xem">✓ đã xem</span><br>' : "") +
          (dur ? esc(dur) : "") + "<br>" + esc(v.voice_label || "") + "</span></button>";
      });
    }
    listEl.innerHTML = html;
    Array.prototype.forEach.call(listEl.querySelectorAll("[data-story-idx]"), function (btn) {
      btn.addEventListener("click", function () {
        playStory(state.flat[Number(btn.getAttribute("data-story-idx"))]);
      });
    });
  }

  function renderStageEmpty() {
    if (levelItems(state.tab).length) {
      stageEl.innerHTML = '<div class="ttc-story-empty">▶ Chọn một truyện trong danh sách để xem video kể chuyện có tranh minh họa chuyển động và giọng đọc.</div>';
    } else {
      stageEl.innerHTML = '<div class="ttc-story-empty">🚧 <b>HSK ' + state.tab + ' — Sắp ra mắt</b><br>' +
        "Truyện kể cấp này đang được sản xuất. Hiện đã có truyện HSK 1 — mời bạn xem trước nhé!</div>";
    }
  }

  function renderStageLocked(entry) {
    stageEl.innerHTML = '<div class="ttc-story-empty">🔒 <b>' + esc(entry.title_zh || "Truyện Premium") + '</b><br>' +
      "Truyện HSK " + entry.level + " là nội dung Premium. Vui lòng đăng nhập tài khoản Premium để xem.</div>";
  }

  function renderStage(entry) {
    var idx = state.flat.indexOf(entry);
    var prev = idx > 0 ? state.flat[idx - 1] : null;
    var next = idx >= 0 && idx < state.flat.length - 1 ? state.flat[idx + 1] : null;
    var dur = fmtDur(entry.duration_s);
    var rateBtns = RATES.map(function (r) {
      var on = r === currentRate;
      return '<button type="button" class="ttc-story-ratebtn' + (on ? " is-cur" : "") +
        '" data-story-rate="' + r + '" aria-pressed="' + (on ? "true" : "false") + '">' + rateLabel(r) + "</button>";
    }).join("");
    stageEl.innerHTML =
      '<div class="ttc-story-frame-wrap"><video id="ttcStoryVideoFrame" title="' + esc(entry.title_zh) + '" ' +
      'src="' + esc(entry.stream || ("https://drive.google.com/uc?export=download&id=" + encodeURIComponent(entry.drive_id))) + '" ' +
      'controls playsinline preload="auto"></video></div>' +
      '<div class="ttc-story-raterow" role="group" aria-label="Tốc độ phát"><span class="ttc-story-rate-label">🐢 Tốc độ:</span>' + rateBtns + "</div>" +
      '<h3 class="ttc-story-now">' + esc(entry.title_zh) + "</h3>" +
      (entry.title_vi ? '<p class="ttc-story-now-vi">' + esc(entry.title_vi) + "</p>" : "") +
      '<p class="ttc-story-meta-line">HSK ' + entry.level + (dur ? " · ⏱ " + esc(dur) : "") +
      (entry.voice_label ? " · 🎙 " + esc(entry.voice_label) : "") + "</p>" +
      '<div class="ttc-story-navrow">' +
      '<button type="button" class="ttc-story-navbtn" id="ttcStoryPrev"' + (prev ? "" : " disabled") + ">← Truyện trước</button>" +
      '<button type="button" class="ttc-story-navbtn" id="ttcStoryNext"' + (next ? "" : " disabled") + ">Truyện tiếp →</button></div>";
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
      vid.addEventListener("play", function () {
        if (!loadWatched()[entry.key]) { markWatched(entry.key); renderList(); }
      });
    }
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
      renderList();
      scrollToPlayer();
      return true;
    });
  }

  function switchTab(level) {
    state.tab = Number(level) || 1;
    state.currentKey = null;
    renderTabs();
    renderList();
    renderStageEmpty();
  }

  function openZone() {
    buildOverlay();
    if (!levelItems(state.tab).length) state.tab = firstDataLevel();
    renderTabs();
    renderList();
    if (!state.currentKey) renderStageEmpty();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeZone() {
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
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
    watched: loadWatched
  };
})();
