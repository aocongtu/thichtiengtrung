/* ============================================================
   KHU HỌC QUA VIDEO — otter2-video.js (2026-11-17)
   Panel "🎬 Học qua video" nằm trong .ttc-exam-midstack (dưới panel
   Luyện thi + thẻ kỹ năng) mở overlay toàn màn hình #ttcVideoOverlay:
   tab Bài học mỗi ngày (video của chủ web, từ vựng chính xác theo bài)
   + tab HSK1–6 (video chữa đề nhúng Google Drive preview — đã kiểm
   chứng ẩn danh 12/12 mẫu đạt ngày 2026-11-17, xem recon.md).
   Dữ liệu: otter2-video-catalog.js (window.OTTER2_VIDEO_CATALOG).
   Bấm vào 1 từ trong cột từ vựng → tra cứu bằng chính pipeline từ
   điển lớn của web: ngân hàng HSK → window.__otter2SearchBig
   (big-dict 125.438 mục từ, cùng cơ chế thẻ tra cứu ở ô Tra từ)
   → Hán-Việt từng chữ. Không xây hệ tra cứu mới.
   Tiến độ đã xem: localStorage "otter2_video_watched_v1".
   Lưu ý: Bé Rái Cá (otter2-guide.js) phát hiện zone theo danh sách
   ID cứng (detectZone) — khu video CHƯA được đăng ký zone ở đây vì
   không sửa guide.js trong đợt này (parent xử lý riêng). Panel vẫn
   được cơ chế vật cản của Bé bao phủ sẵn nhờ class .otter2-dash-card.
   ============================================================ */
(function () {
  "use strict";

  var LS_KEY = "otter2_video_watched_v1";
  var GROUP_LABEL = {
    huongdan: "🧭 Hướng dẫn làm bài",
    nghe: "🎧 Nghe",
    doc: "📖 Đọc hiểu",
    viet: "✍️ Viết",
    giaotrinh: "📚 Giáo trình · Phân tích bài đọc",
    nguphap: "🧮 Ngữ pháp + bài tập"
  };
  var GROUP_ORDER = ["huongdan", "nghe", "doc", "viet", "giaotrinh", "nguphap"];

  function catalog() { return window.OTTER2_VIDEO_CATALOG || null; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- style ---------------- */
  var styleDone = false;
  function ensureStyle() {
    if (styleDone) return;
    styleDone = true;
    var css = [
      "/* Panel Học qua video: hero gradient xanh dương → cyan → ngọc, phân biệt với panel Luyện thi (cam → hồng → tím). */",
      ".ttc-video-panel{position:relative;overflow:hidden;border:none;border-radius:20px;padding:20px;color:#fff;background:linear-gradient(135deg,#1e40af 0%,#0284c7 52%,#0d9488 100%);box-shadow:0 20px 42px rgba(2,132,199,.35)}",
      ".ttc-video-panel::before{content:'';position:absolute;inset:0;background:radial-gradient(420px 200px at 12% -10%,rgba(255,255,255,.28),transparent 60%),radial-gradient(380px 220px at 95% 115%,rgba(255,255,255,.18),transparent 60%);pointer-events:none}",
      ".ttc-video-panel::after{content:'影';position:absolute;right:6px;bottom:-38px;font-size:150px;font-weight:900;color:rgba(255,255,255,.13);line-height:1;pointer-events:none}",
      ".ttc-video-panel-in{position:relative;z-index:1;display:flex;flex-direction:column;gap:10px}",
      ".ttc-video-panel-head{display:flex;align-items:center;gap:12px}",
      ".ttc-video-panel-play{width:54px;height:54px;flex:0 0 54px;border-radius:50%;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.45);display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 0 24px rgba(255,255,255,.35)}",
      ".ttc-video-panel-title{margin:0;font-size:21px;font-weight:900;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.25)}",
      ".ttc-video-panel-free{margin-left:auto;background:linear-gradient(135deg,#fde047,#f59e0b);color:#451a03;font-weight:900;font-size:12px;padding:6px 12px;border-radius:999px;letter-spacing:.4px;box-shadow:0 6px 16px rgba(245,158,11,.45);animation:ttcVideoPulse 2.2s ease-in-out infinite}",
      "@keyframes ttcVideoPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}",
      "@media (prefers-reduced-motion:reduce){.ttc-video-panel-free{animation:none}}",
      ".ttc-video-panel-desc{margin:0;color:rgba(255,255,255,.95);font-size:13.5px;text-shadow:0 1px 6px rgba(0,0,0,.2)}",
      ".ttc-video-panel-btn{margin-top:2px;min-height:52px;border:none;border-radius:14px;background:#fff;cursor:pointer;font-size:16px;font-weight:900;padding:12px 18px;box-shadow:0 10px 24px rgba(0,0,0,.22);transition:transform .15s ease}",
      ".ttc-video-panel-btn:hover{transform:translateY(-1px)}",
      ".ttc-video-panel-btn-txt{background:linear-gradient(90deg,#1d4ed8,#0891b2,#0d9488);-webkit-background-clip:text;background-clip:text;color:transparent}",
      "html[data-theme='night'] .ttc-video-panel{box-shadow:0 20px 42px rgba(0,0,0,.5)}",
      "@media (max-width:1020px){#otter2-home{grid-template-areas:'hero' 'strip' 'course' 'exam' 'level' 'video' 'activity' 'tasks' 'lessons' 'continue' 'road' 'journey' 'banner'}#otter2-home #otter2VideoPanel{grid-area:video}}",
      "/* Overlay khu video — khuôn như #ttcExamOverlay. */",
      "#ttcVideoOverlay{position:fixed;inset:0;z-index:1000202;background:rgba(15,23,42,.62);display:none;align-items:flex-start;justify-content:center;padding:12px;overflow:auto}",
      "#ttcVideoOverlay.open{display:flex}",
      ".ttc-video-shell{background:#fff;border-radius:20px;max-width:1180px;width:100%;margin:auto;padding:18px;box-shadow:0 30px 80px rgba(2,6,23,.35)}",
      "html[data-theme='night'] .ttc-video-shell{background:#0f172a;color:#e2e8f0}",
      ".ttc-video-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}",
      ".ttc-video-top h2{margin:0;font-size:20px;font-weight:900}",
      ".ttc-video-close{margin-left:auto;width:40px;height:40px;border-radius:50%;border:1px solid rgba(100,116,139,.35);background:transparent;font-size:17px;cursor:pointer;color:inherit}",
      ".ttc-video-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px}",
      ".ttc-video-tab{border:1.5px solid rgba(2,132,199,.4);background:rgba(2,132,199,.06);color:inherit;border-radius:999px;padding:8px 14px;font-weight:800;font-size:13.5px;cursor:pointer;min-height:40px}",
      ".ttc-video-tab.is-cur{background:linear-gradient(135deg,#1d4ed8,#0891b2);color:#fff;border-color:transparent}",
      ".ttc-video-body{display:grid;grid-template-columns:300px minmax(0,1fr);gap:16px;align-items:start}",
      "@media (max-width:860px){.ttc-video-body{grid-template-columns:1fr}}",
      ".ttc-video-list{display:flex;flex-direction:column;gap:6px;max-height:70vh;overflow:auto;padding-right:2px}",
      "@media (max-width:860px){.ttc-video-list{max-height:none;order:2}}",
      ".ttc-video-prog{font-size:12.5px;font-weight:700;color:#0284c7;margin:2px 0 6px}",
      ".ttc-video-group{font-size:12px;font-weight:900;letter-spacing:.4px;text-transform:uppercase;color:#64748b;margin:10px 0 2px}",
      ".ttc-video-item{text-align:left;border:1.5px solid rgba(100,116,139,.25);background:transparent;color:inherit;border-radius:12px;padding:9px 11px;cursor:pointer;font-size:13.5px;line-height:1.35;display:flex;gap:8px;align-items:flex-start}",
      ".ttc-video-item:hover{border-color:#0284c7}",
      ".ttc-video-item.is-cur{border-color:#0284c7;background:rgba(2,132,199,.09);font-weight:700}",
      ".ttc-video-item .ttc-video-check{color:#059669;font-weight:900;flex:0 0 auto}",
      ".ttc-video-item .ttc-video-dur{margin-left:auto;color:#64748b;font-size:12px;flex:0 0 auto}",
      ".ttc-video-stage{min-width:0}",
      ".ttc-video-frame-wrap{position:relative;padding-top:56.25%;border-radius:14px;overflow:hidden;background:#0f172a}",
      ".ttc-video-frame-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}",
      ".ttc-video-empty{padding:34px 16px;text-align:center;color:#64748b;font-size:14px;border:1.5px dashed rgba(100,116,139,.4);border-radius:14px}",
      ".ttc-video-now{margin:12px 0 4px;font-size:16.5px;font-weight:900}",
      ".ttc-video-navrow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:8px 0 4px}",
      ".ttc-video-navbtn{border:1.5px solid rgba(2,132,199,.45);background:transparent;color:inherit;border-radius:999px;padding:7px 13px;font-weight:800;font-size:13px;cursor:pointer;min-height:38px}",
      ".ttc-video-navbtn:disabled{opacity:.4;cursor:default}",
      ".ttc-video-drive{margin-left:auto;font-size:13px;font-weight:700;color:#0284c7}",
      ".ttc-video-vocab{margin-top:14px}",
      ".ttc-video-vocab h3{margin:0 0 4px;font-size:15px;font-weight:900}",
      ".ttc-video-vocab-note{margin:0 0 10px;font-size:12.5px;color:#64748b}",
      ".ttc-video-chips{display:flex;flex-wrap:wrap;gap:8px}",
      ".ttc-video-chip{border:1.5px solid rgba(13,148,136,.4);background:rgba(13,148,136,.06);color:inherit;border-radius:12px;padding:7px 11px;cursor:pointer;text-align:left;line-height:1.3}",
      ".ttc-video-chip:hover{border-color:#0d9488}",
      ".ttc-video-chip b{font-size:16px}",
      ".ttc-video-chip span{display:block;font-size:11.5px;color:#64748b}",
      ".ttc-video-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}",
      ".ttc-video-links a{font-size:13px;font-weight:700;color:#0284c7;border:1.5px solid rgba(2,132,199,.4);border-radius:999px;padding:7px 13px;text-decoration:none}",
      "/* Thẻ tra cứu từ — dùng pipeline từ điển lớn của web. */",
      "#ttcVideoWordCard{position:fixed;inset:0;z-index:1000203;background:rgba(15,23,42,.45);display:none;align-items:center;justify-content:center;padding:16px}",
      "#ttcVideoWordCard.open{display:flex}",
      ".ttc-vwc-in{background:#fff;border-radius:18px;max-width:430px;width:100%;padding:20px;box-shadow:0 30px 70px rgba(2,6,23,.4);max-height:86vh;overflow:auto}",
      "html[data-theme='night'] .ttc-vwc-in{background:#1e293b;color:#e2e8f0}",
      ".ttc-vwc-hanzi{font-size:34px;font-weight:900;line-height:1.15}",
      ".ttc-vwc-pinyin{font-size:16px;color:#0284c7;font-weight:800;margin-top:2px}",
      ".ttc-vwc-hv{margin-top:6px;font-size:13.5px}",
      ".ttc-vwc-hv b{color:#e11d48}",
      ".ttc-vwc-meaning{margin-top:10px;font-size:15px;line-height:1.5}",
      ".ttc-vwc-src{margin-top:10px;font-size:11.5px;color:#94a3b8}",
      ".ttc-vwc-parts{margin-top:12px;border-top:1px dashed rgba(100,116,139,.35);padding-top:10px;display:flex;flex-direction:column;gap:6px}",
      ".ttc-vwc-part{font-size:13.5px}.ttc-vwc-part b{color:#e11d48;font-weight:800}",
      ".ttc-vwc-row{display:flex;gap:8px;margin-top:14px}",
      ".ttc-vwc-btn{flex:1;border:none;border-radius:12px;padding:11px;font-weight:900;font-size:14px;cursor:pointer;background:linear-gradient(135deg,#1d4ed8,#0891b2);color:#fff}",
      ".ttc-vwc-btn.ghost{background:transparent;border:1.5px solid rgba(100,116,139,.4);color:inherit}"
    ].join("\n");
    var st = document.createElement("style");
    st.id = "ttcVideoStyle";
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ---------------- watched progress ---------------- */
  function loadWatched() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function markWatched(id) {
    var w = loadWatched();
    if (!w[id]) {
      w[id] = Date.now();
      try { localStorage.setItem(LS_KEY, JSON.stringify(w)); } catch (e) {}
    }
  }
  /* Khóa tiến độ ỔN ĐỊNH theo (cấp + số bài + nhóm) — không đổi khi hoán đổi
     id Drive (nhà cung cấp -> bản sao của chủ web qua copy_map.json). */
  function wkey(v) { return (v && v.key) || (v && v.id) || ""; }

  /* ---------------- state ---------------- */
  var state = { tab: "lessons", currentId: null, flat: [] };

  function tabItems(tab) {
    var cat = catalog();
    if (!cat) return [];
    if (tab === "lessons") {
      var out = [];
      (cat.lessons || []).forEach(function (L) {
        (L.videos || []).forEach(function (v) {
          out.push({ key: v.key, id: v.id, title: v.title, dur: v.dur || "", group: null, vocab: L.vocab, vocabNote: L.vocabNote, links: L.links, lesson: L.lesson });
        });
      });
      return out;
    }
    return (cat.levels && cat.levels[tab]) || [];
  }

  /* ---------------- overlay DOM ---------------- */
  var overlay = null, listEl = null, stageEl = null, tabsEl = null, wordCard = null;

  function buildOverlay() {
    if (overlay) return;
    ensureStyle();
    overlay = document.createElement("div");
    overlay.id = "ttcVideoOverlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-label", "Khu học qua video");
    overlay.innerHTML =
      '<div class="ttc-video-shell">' +
      '<div class="ttc-video-top"><h2>🎬 Học qua video</h2>' +
      '<button type="button" class="ttc-video-close" id="ttcVideoClose" aria-label="Đóng khu video">✕</button></div>' +
      '<div class="ttc-video-tabs" id="ttcVideoTabs" role="tablist"></div>' +
      '<div class="ttc-video-body"><div class="ttc-video-list" id="ttcVideoList"></div>' +
      '<div class="ttc-video-stage" id="ttcVideoStage"></div></div></div>';
    document.body.appendChild(overlay);
    tabsEl = overlay.querySelector("#ttcVideoTabs");
    listEl = overlay.querySelector("#ttcVideoList");
    stageEl = overlay.querySelector("#ttcVideoStage");
    overlay.querySelector("#ttcVideoClose").addEventListener("click", closeZone);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeZone(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("open")) closeZone();
    });
    buildWordCard();
  }

  function renderTabs() {
    var cat = catalog();
    if (!cat || !tabsEl) return;
    var defs = [{ key: "lessons", label: "📚 Bài học mỗi ngày" }];
    for (var n = 1; n <= 6; n++) defs.push({ key: String(n), label: "HSK " + n });
    tabsEl.innerHTML = "";
    defs.forEach(function (d) {
      var count = tabItems(d.key).length;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ttc-video-tab" + (state.tab === d.key ? " is-cur" : "");
      b.setAttribute("role", "tab");
      b.setAttribute("data-video-tab", d.key);
      b.textContent = d.label + " · " + count;
      b.addEventListener("click", function () { switchTab(d.key); });
      tabsEl.appendChild(b);
    });
  }

  function renderList() {
    var items = tabItems(state.tab);
    state.flat = items;
    var watched = loadWatched();
    var done = items.filter(function (v) { return watched[wkey(v)]; }).length;
    var html = '<p class="ttc-video-prog">Đã xem ' + done + "/" + items.length + " video</p>";
    var lastGroup = null;
    items.forEach(function (v, i) {
      if (v.group && v.group !== lastGroup) {
        lastGroup = v.group;
        html += '<p class="ttc-video-group">' + esc(GROUP_LABEL[v.group] || v.group) + "</p>";
      }
      html += '<button type="button" class="ttc-video-item' + (v.id === state.currentId ? " is-cur" : "") +
        '" data-video-idx="' + i + '">' +
        (watched[wkey(v)] ? '<span class="ttc-video-check" aria-label="Đã xem">✓</span>' : "") +
        "<span>" + esc(v.title) + "</span>" +
        (v.dur ? '<span class="ttc-video-dur">' + esc(v.dur) + "</span>" : "") + "</button>";
    });
    if (!items.length) html += '<p class="ttc-video-prog">Chưa có video ở mục này.</p>';
    listEl.innerHTML = html;
    Array.prototype.forEach.call(listEl.querySelectorAll("[data-video-idx]"), function (btn) {
      btn.addEventListener("click", function () {
        playVideo(state.flat[Number(btn.getAttribute("data-video-idx"))]);
      });
    });
  }

  function renderStageEmpty() {
    stageEl.innerHTML = '<div class="ttc-video-empty">▶ Chọn một video trong danh sách để bắt đầu học.<br>' +
      "Bấm vào từng từ trong cột từ vựng để tra pinyin + nghĩa bằng từ điển lớn của web.</div>";
  }

  function playVideo(v) {
    if (!v) return;
    state.currentId = v.id;
    markWatched(wkey(v));
    var idx = state.flat.indexOf(v);
    var prev = idx > 0 ? state.flat[idx - 1] : null;
    var next = idx >= 0 && idx < state.flat.length - 1 ? state.flat[idx + 1] : null;
    var vocab = v.vocab || [];
    var note = v.vocabNote ||
      (state.tab === "6"
        ? "Từ vựng trọng tâm của bài này, trích từ ngân hàng từ HSK của web. Video không có phụ đề/transcript nên đây không phải danh sách từ theo đúng thứ tự xuất hiện."
        : "Từ vựng trọng tâm của phần thi này, trích từ ngân hàng từ HSK của web. Video chữa đề không có phụ đề/transcript nên đây không phải danh sách từ theo đúng thứ tự xuất hiện.");
    var html =
      '<div class="ttc-video-frame-wrap"><iframe id="ttcVideoFrame" title="' + esc(v.title) + '" ' +
      'src="https://drive.google.com/file/d/' + encodeURIComponent(v.id) + '/preview" ' +
      'allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe></div>' +
      '<h3 class="ttc-video-now">' + esc(v.title) + "</h3>" +
      '<div class="ttc-video-navrow">' +
      '<button type="button" class="ttc-video-navbtn" id="ttcVideoPrev"' + (prev ? "" : " disabled") + ">← Bài trước</button>" +
      '<button type="button" class="ttc-video-navbtn" id="ttcVideoNext"' + (next ? "" : " disabled") + ">Bài tiếp →</button>" +
      '<a class="ttc-video-drive" target="_blank" rel="noopener" href="https://drive.google.com/file/d/' +
      encodeURIComponent(v.id) + '/view">Mở trong Google Drive ↗</a></div>';
    if (vocab.length) {
      html += '<div class="ttc-video-vocab"><h3>🧩 Từ vựng trong video</h3>' +
        '<p class="ttc-video-vocab-note">' + esc(note) + "</p>" +
        '<div class="ttc-video-chips">' +
        vocab.map(function (w, i) {
          return '<button type="button" class="ttc-video-chip" data-vocab-idx="' + i + '"><b>' + esc(w.h) + "</b><span>" +
            esc(w.p) + (w.m ? " · " + esc(w.m) : "") + "</span></button>";
        }).join("") + "</div></div>";
    }
    if (v.links && v.links.length) {
      html += '<div class="ttc-video-links">' + v.links.map(function (L) {
        return '<a target="_blank" rel="noopener" href="' + esc(L.url) + '">' + esc(L.label) + "</a>";
      }).join("") + "</div>";
    }
    stageEl.innerHTML = html;
    var pb = stageEl.querySelector("#ttcVideoPrev");
    var nb = stageEl.querySelector("#ttcVideoNext");
    if (pb && prev) pb.addEventListener("click", function () { playVideo(prev); });
    if (nb && next) nb.addEventListener("click", function () { playVideo(next); });
    Array.prototype.forEach.call(stageEl.querySelectorAll("[data-vocab-idx]"), function (chip) {
      chip.addEventListener("click", function () {
        openWordCard(vocab[Number(chip.getAttribute("data-vocab-idx"))]);
      });
    });
    renderList();
  }

  function switchTab(tab) {
    state.tab = tab;
    state.currentId = null;
    renderTabs();
    renderList();
    renderStageEmpty();
  }

  function openZone() {
    buildOverlay();
    renderTabs();
    renderList();
    if (!state.currentId) renderStageEmpty();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeZone() {
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    var f = overlay.querySelector("#ttcVideoFrame");
    if (f) f.src = "about:blank";
    closeWordCard();
  }

  /* ---------------- thẻ tra cứu từ (pipeline từ điển lớn) ---------------- */
  var bankMap = null;
  function hskEntry(word) {
    if (!window.OTTER2_HSK_ALL_DATA || !window.OTTER2_HSK_ALL_DATA.words) return null;
    if (!bankMap) {
      bankMap = {};
      window.OTTER2_HSK_ALL_DATA.words.forEach(function (w) { if (!bankMap[w.h]) bankMap[w.h] = w; });
    }
    return bankMap[word] || null;
  }
  function hvOf(ch) {
    if (window.TTC_HANVIET && window.TTC_HANVIET[ch]) return window.TTC_HANVIET[ch];
    if (window.OTTER2_BIG_DICT_HV && window.OTTER2_BIG_DICT_HV[ch]) return window.OTTER2_BIG_DICT_HV[ch];
    return "";
  }
  function buildWordCard() {
    if (wordCard) return;
    wordCard = document.createElement("div");
    wordCard.id = "ttcVideoWordCard";
    wordCard.innerHTML = '<div class="ttc-vwc-in" role="dialog" aria-label="Thẻ tra cứu từ"></div>';
    document.body.appendChild(wordCard);
    wordCard.addEventListener("click", function (e) { if (e.target === wordCard) closeWordCard(); });
  }
  function closeWordCard() { if (wordCard) wordCard.classList.remove("open"); }

  function speakZh(text) {
    try {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "zh-CN";
      var saved = null;
      try { saved = localStorage.getItem("ttsVoiceName"); } catch (e) {}
      var vs = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
      var pick = null;
      for (var i = 0; i < vs.length; i++) {
        if (saved && vs[i].name === saved) { pick = vs[i]; break; }
        if (!pick && /^zh/i.test(vs[i].lang || "")) pick = vs[i];
      }
      if (pick) u.voice = pick;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function renderWordCard(word, data) {
    var box = wordCard.querySelector(".ttc-vwc-in");
    var chars = Array.from(word);
    var hvLine = chars.map(function (ch) {
      var hv = hvOf(ch);
      return hv ? "<b>" + esc(ch) + "</b> " + esc(hv) : esc(ch);
    }).join(" · ");
    var parts = "";
    if (chars.length > 1) {
      parts = '<div class="ttc-vwc-parts">' + chars.map(function (ch) {
        var e = hskEntry(ch);
        var hv = hvOf(ch);
        return '<div class="ttc-vwc-part"><b>' + esc(ch) + "</b> " +
          (e ? esc(e.p) + " — " + esc(e.m) : (hv ? "Hán-Việt: " + esc(hv) : "")) + "</div>";
      }).join("") + "</div>";
    }
    box.innerHTML =
      '<div class="ttc-vwc-hanzi">' + esc(word) + "</div>" +
      (data.p ? '<div class="ttc-vwc-pinyin">' + esc(data.p) + "</div>" : "") +
      '<div class="ttc-vwc-hv">' + hvLine + "</div>" +
      '<div class="ttc-vwc-meaning">' + esc(data.m || "(chưa có nghĩa tiếng Việt trong từ điển)") + "</div>" +
      '<div class="ttc-vwc-src">' + esc(data.src) + "</div>" + parts +
      '<div class="ttc-vwc-row"><button type="button" class="ttc-vwc-btn" id="ttcVwcSpeak">🔊 Nghe đọc</button>' +
      '<button type="button" class="ttc-vwc-btn ghost" id="ttcVwcClose">Đóng</button></div>';
    box.querySelector("#ttcVwcClose").addEventListener("click", closeWordCard);
    box.querySelector("#ttcVwcSpeak").addEventListener("click", function () { speakZh(word); });
    wordCard.classList.add("open");
  }

  function openWordCard(entry) {
    buildWordCard();
    var word = entry && entry.h;
    if (!word) return;
    var hs = hskEntry(word);
    if (hs) {
      renderWordCard(word, { p: hs.p, m: hs.m, src: "Ngân hàng từ HSK của web · HSK " + hs.hsk });
      return;
    }
    renderWordCard(word, { p: entry.p || "", m: entry.m || "", src: "Đang tra từ điển lớn…" });
    var api = window.__otter2SearchBig;
    if (api && typeof api.ensureDataFor === "function") {
      api.ensureDataFor([word]).then(function () {
        var e = api.wordEntry(word);
        if (e && (e.p || e.m)) {
          renderWordCard(word, { p: e.p, m: e.m || entry.m || "", src: "Từ điển lớn của web (125.438 mục từ)" });
        } else {
          renderWordCard(word, { p: entry.p || "", m: entry.m || "", src: "Từ vựng của bài học" });
        }
      }).catch(function () {});
    }
  }

  /* ---------------- panel trên dashboard ---------------- */
  function countsLine() {
    var cat = catalog();
    if (!cat) return "Video chữa đề HSK1–6 + bài học từ vựng mỗi ngày — xem ngay trên web, bấm vào từ để tra từ điển.";
    var total = 0;
    for (var n = 1; n <= 6; n++) total += (cat.levels[n] || []).length;
    var lv = (cat.lessons || []).reduce(function (a, L) { return a + (L.videos || []).length; }, 0);
    return total + " video chữa đề HSK1–6 + " + lv + " video bài học mỗi ngày · tra từ vựng ngay trong lúc xem";
  }

  function injectPanel() {
    if (document.getElementById("otter2VideoPanel")) return true;
    ensureStyle();
    var stack = document.querySelector(".ttc-exam-midstack");
    var examPanel = document.getElementById("otter2ExamPanel");
    if (!stack && !examPanel) return false;
    var panel = document.createElement("section");
    panel.className = "otter2-dash-card ttc-video-panel";
    panel.id = "otter2VideoPanel";
    panel.setAttribute("aria-label", "Học qua video");
    panel.innerHTML =
      '<div class="ttc-video-panel-in">' +
      '<div class="ttc-video-panel-head"><span class="ttc-video-panel-play" aria-hidden="true">▶</span>' +
      '<h3 class="ttc-video-panel-title">Học qua video</h3>' +
      '<span class="ttc-video-panel-free">MIỄN PHÍ</span></div>' +
      '<p class="ttc-video-panel-desc">' + esc(countsLine()) + "</p>" +
      '<button type="button" class="ttc-video-panel-btn" id="otter2FeatVideo"><span class="ttc-video-panel-btn-txt">Xem video →</span></button>' +
      "</div>";
    if (stack) stack.appendChild(panel);
    else if (examPanel && examPanel.parentNode) examPanel.parentNode.insertBefore(panel, examPanel.nextSibling);
    panel.querySelector("#otter2FeatVideo").addEventListener("click", function (e) {
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
      if (injectPanel() || tries > 30) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.otter2OpenVideoZone = openZone;
  window.__ttcVideo = {
    open: openZone,
    close: closeZone,
    play: playVideo,
    switchTab: switchTab,
    state: function () { return state; },
    catalog: catalog,
    watched: loadWatched,
    lookup: openWordCard
  };
})();
