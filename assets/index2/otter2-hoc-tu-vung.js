/* ============================================================
   HỌC TỪ VỰNG — bản XuCup cho thichtiengtrung.io.vn
   Anh Huy giao (2026-11-25): mang NGUYÊN KHU HỌC TỪ của XuCup
   (Tra từ vựng HSK) sang thichtiengtrung, đặt tên mục "Học từ vựng":
   Danh sách · Flashcard · Trắc nghiệm · Thi thử · Từ cần ôn,
   giọng đọc Gemini + giọng máy, Đọc cả danh sách / Từ số này,
   Màu tô, Đọc cả nghĩa, Giản/Phồn, Hán–Việt bật/tắt, tìm kiếm.

   Nguyên tắc an toàn (luật của Cá):
   - Đọc kho gốc OTTER2_HSK_ALL_DATA (11.000 từ, đã gồm Hán-Việt
     trường `v` sau đợt hợp nhất f6358a1) — KHÔNG bám window.words.
   - KHÔNG đụng bất kỳ khoá localStorage tiến độ nào của site;
     sao ★ + từ sai trắc nghiệm lưu ở khoá RIÊNG ttc_hoc_tu_vung_v1.
   - Thi thử = nhảy sang Khu thi có sẵn của site (không làm trùng).
   ============================================================ */
(function () {
  "use strict";

  var STORE_KEY = "ttc_hoc_tu_vung_v1";
  var BLUE = "#1b7fe0", NAVY = "#16283F", ORANGE = "#F97316", RED = "#d92d20";

  /* ---------------- tiện ích ---------------- */
  function $(sel, root) { try { return (root || document).querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d");
  }
  function lsGet(k) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------------- kho từ (đọc thẳng kho gốc) ---------------- */
  var _packs = {}; /* level -> [words] theo đúng thứ tự kho gốc */
  function bankWords() {
    var d = window.OTTER2_HSK_ALL_DATA;
    return d && Array.isArray(d.words) ? d.words : [];
  }
  function packFor(level) {
    if (_packs[level]) return _packs[level];
    var out = bankWords().filter(function (w) {
      return Number(w.hsk) === Number(level) && w.h && w.m;
    });
    _packs[level] = out;
    return out;
  }
  function levelCount(level) { return packFor(level).length; }
  function wordKey(w) { return String(w.entry_id || w.lemma_id || (w.h + "|" + w.p)); }
  var _byKey = null;
  function wordByKey(key) {
    if (!_byKey) {
      _byKey = {};
      bankWords().forEach(function (w) { _byKey[wordKey(w)] = w; });
    }
    return _byKey[key] || null;
  }

  /* ---------------- kho riêng: sao ★ + từ sai ---------------- */
  var store = lsGet(STORE_KEY) || { stars: [], missed: [] };
  if (!Array.isArray(store.stars)) store.stars = [];
  if (!Array.isArray(store.missed)) store.missed = [];
  function saveStore() { lsSet(STORE_KEY, store); }
  function isStar(w) { return store.stars.indexOf(wordKey(w)) >= 0; }
  function toggleStar(w) {
    var k = wordKey(w), i = store.stars.indexOf(k);
    if (i >= 0) store.stars.splice(i, 1); else store.stars.push(k);
    saveStore();
    return i < 0;
  }
  function addMissed(w) {
    var k = wordKey(w);
    if (store.missed.indexOf(k) < 0) { store.missed.push(k); saveStore(); }
  }
  function reviewWords() {
    var seen = {}, out = [];
    store.stars.concat(store.missed).forEach(function (k) {
      if (seen[k]) return; seen[k] = 1;
      var w = wordByKey(k); if (w) out.push(w);
    });
    return out;
  }
  function reviewCount() { return reviewWords().length; }

  /* ---------------- trạng thái ---------------- */
  var S = {
    open: false, level: 1, mode: "list", query: "",
    hvOn: true, trad: false,
    voice: "g:Kore", speed: "normal", readMeaning: false, hl: "#ffe066",
    fcIndex: 0, fcFlip: false,
    playing: false, playToken: 0
  };
  var GEMINI_VOICES = [
    { n: "Kore", g: "Nữ" }, { n: "Zephyr", g: "Nữ" }, { n: "Aoede", g: "Nữ" },
    { n: "Leda", g: "Nữ" }, { n: "Sulafat", g: "Nữ" },
    { n: "Puck", g: "Nam" }, { n: "Charon", g: "Nam" }, { n: "Fenrir", g: "Nam" },
    { n: "Orus", g: "Nam" }, { n: "Alnilam", g: "Nam" }
  ];

  /* ---------------- hiển thị chữ Hán (Giản/Phồn chỉ đổi hiển thị) ---------------- */
  function dispH(text) {
    var s = String(text || "");
    if (!s) return s;
    try {
      if (S.trad && typeof window.__ttcTraditionalHanzi === "function") return window.__ttcTraditionalHanzi(s);
      if (!S.trad && typeof window.__ttcSimplifyHanzi === "function" && pageIsTrad()) return window.__ttcSimplifyHanzi(s);
    } catch (e) {}
    return s;
  }
  function pageIsTrad() {
    var b = byId("ttcScriptSwitch");
    return !!(b && b.dataset && b.dataset.scriptMode === "traditional");
  }

  /* ---------------- giọng đọc ---------------- */
  var _ttsCache = {}; /* voice|lang|text -> objectURL */
  var _geminiBroken = false;
  function deviceVoices() {
    try { return window.speechSynthesis ? window.speechSynthesis.getVoices() || [] : []; }
    catch (e) { return []; }
  }
  function pickDeviceVoice(langPrefix) {
    var vs = deviceVoices(), i;
    for (i = 0; i < vs.length; i++) if (vs[i].lang && vs[i].lang.toLowerCase().indexOf(langPrefix) === 0) return vs[i];
    for (i = 0; i < vs.length; i++) if (vs[i].lang && vs[i].lang.toLowerCase().indexOf(langPrefix.split("-")[0]) === 0) return vs[i];
    return null;
  }
  function speakDevice(text, lang) {
    return new Promise(function (resolve) {
      if (!window.speechSynthesis || !text) { resolve(false); return; }
      try {
        var u = new SpeechSynthesisUtterance(String(text));
        u.lang = lang === "vi" ? "vi-VN" : "zh-CN";
        var v = null;
        if (lang !== "vi" && S.voice.indexOf("d:") === 0) {
          var uri = S.voice.slice(2), vs = deviceVoices();
          for (var vi = 0; vi < vs.length; vi++) if (vs[vi].voiceURI === uri) { v = vs[vi]; break; }
        }
        if (!v) v = pickDeviceVoice(u.lang);
        if (v) u.voice = v;
        u.rate = S.speed === "slow" ? 0.75 : (S.speed === "fast" ? 1.15 : 0.95);
        var done = false;
        var finish = function (ok) { if (!done) { done = true; resolve(ok); } };
        u.onend = function () { finish(true); };
        u.onerror = function () { finish(false); };
        setTimeout(function () { finish(true); }, Math.max(2500, text.length * 450));
        window.speechSynthesis.speak(u);
      } catch (e) { resolve(false); }
    });
  }
  var _audio = null;
  function speakGemini(text, voiceName, lang) {
    var key = voiceName + "|" + lang + "|" + text;
    var play = function (url) {
      return new Promise(function (resolve) {
        try {
          if (_audio) { try { _audio.pause(); } catch (e) {} }
          _audio = new Audio(url);
          _audio.onended = function () { resolve(true); };
          _audio.onerror = function () { resolve(false); };
          var p = _audio.play();
          if (p && p.catch) p.catch(function () { resolve(false); });
        } catch (e) { resolve(false); }
      });
    };
    if (_ttsCache[key]) return play(_ttsCache[key]);
    return fetch("https://xucup.com/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: String(text).slice(0, 300), voice: voiceName, lang: lang })
    }).then(function (r) {
      if (!r.ok) throw new Error("tts " + r.status);
      return r.blob();
    }).then(function (blob) {
      var url = URL.createObjectURL(blob);
      _ttsCache[key] = url;
      return play(url);
    }).catch(function () { return false; });
  }
  function speak(text, lang) {
    text = String(text || "").trim();
    if (!text) return Promise.resolve(false);
    if (S.voice.indexOf("g:") === 0 && !_geminiBroken) {
      return speakGemini(text, S.voice.slice(2), lang).then(function (ok) {
        if (ok) return true;
        _geminiBroken = true; /* rớt xuống giọng máy cho cả buổi */
        return speakDevice(text, lang);
      });
    }
    return speakDevice(text, lang);
  }
  function speakWord(w) {
    var chain = speak(w.h, "zh");
    if (S.readMeaning && w.m) {
      chain = chain.then(function () { return speak(w.m, "vi"); });
    }
    return chain;
  }
  function stopSpeak() {
    S.playToken++;
    S.playing = false;
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
    if (_audio) { try { _audio.pause(); } catch (e) {} _audio = null; }
    paintPlayButtons();
  }

  /* ---------------- CSS ---------------- */
  var _styleDone = false;
  function ensureStyle() {
    if (_styleDone) return; _styleDone = true;
    var css = [
      ".htv-card{display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#16283F,#1b7fe0);color:#fff;border-radius:18px;padding:14px 16px;margin:12px 0;box-shadow:0 8px 22px rgba(22,40,63,.22)}",
      ".htv-card-ico{font-size:30px;line-height:1}",
      ".htv-card-main{flex:1;min-width:0}",
      ".htv-card-title{display:block;font-size:18px;font-weight:900}",
      ".htv-card-sub{display:block;font-size:12.5px;opacity:.88;margin-top:2px}",
      ".htv-card-btn{background:#fff;color:#16283F;border:0;border-radius:999px;padding:9px 14px;font-weight:800;font-size:13.5px;cursor:pointer;white-space:nowrap}",
      "#ttcHtvOverlay{position:fixed;inset:0;background:#eef1f6;z-index:12060;overflow-y:auto;-webkit-overflow-scrolling:touch}",
      ".htv-wrap{max-width:880px;margin:0 auto;padding:10px 10px calc(28px + env(safe-area-inset-bottom,0px))}",
      ".htv-panel{background:#fff;border:1px solid #e3e8f0;border-radius:20px;padding:16px 14px;box-shadow:0 4px 18px rgba(22,40,63,.06)}",
      ".htv-title{font-size:21px;font-weight:900;color:" + NAVY + ";margin:2px 0 10px}",
      ".htv-title small{font-weight:600;color:#7a8799;font-size:14px}",
      ".htv-back{display:inline-block;background:#fff;border:1px solid #d8e0ec;color:" + BLUE + ";border-radius:12px;padding:9px 14px;font-size:14.5px;font-weight:600;cursor:pointer;margin-bottom:12px}",
      ".htv-close{float:right;background:#f1f4f9;border:1px solid #d8e0ec;color:" + NAVY + ";border-radius:12px;padding:9px 13px;font-size:14.5px;font-weight:700;cursor:pointer}",
      ".htv-search{width:100%;box-sizing:border-box;border:1px solid #d8e0ec;border-radius:14px;padding:13px 14px;font-size:15.5px;background:#fbfcfe;color:" + NAVY + "}",
      ".htv-chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 4px}",
      ".htv-chip{border:1px solid #d8e0ec;background:#f4f6fa;color:" + NAVY + ";border-radius:999px;padding:9px 15px;font-size:14.5px;font-weight:700;cursor:pointer}",
      ".htv-chip.on{background:" + BLUE + ";border-color:" + BLUE + ";color:#fff}",
      ".htv-modes{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:12px 0 4px}",
      ".htv-mode{border:1px solid #d8e0ec;background:#fff;color:" + BLUE + ";border-radius:14px;padding:12px 10px;font-size:15px;font-weight:700;cursor:pointer;text-align:center}",
      ".htv-mode small{color:#7a8799;font-weight:600}",
      ".htv-mode.on{background:" + BLUE + ";border-color:" + BLUE + ";color:#fff}",
      ".htv-mode.on small{color:#dcecfb}",
      ".htv-mode.wide{grid-column:1/-1;text-align:left;padding-left:14px}",
      ".htv-row{display:flex;align-items:center;gap:10px;margin-top:14px;flex-wrap:wrap}",
      ".htv-lab{font-size:15.5px;font-weight:800;color:" + NAVY + "}",
      ".htv-lab small{color:#7a8799;font-weight:600}",
      ".htv-sel{flex:1;min-width:170px;border:1px solid #d8e0ec;border-radius:12px;padding:11px 12px;font-size:15px;background:#fff;color:" + NAVY + "}",
      ".htv-playbtn{display:inline-flex;align-items:center;gap:7px;border:1px solid #d8e0ec;background:#fff;color:" + BLUE + ";border-radius:12px;padding:11px 15px;font-size:15px;font-weight:700;cursor:pointer}",
      ".htv-playbtn.stop{background:#fdeceb;border-color:#f3c1bc;color:" + RED + "}",
      ".htv-num{width:96px;border:1px solid #d8e0ec;border-radius:12px;padding:11px 12px;font-size:15px;color:#9aa7b8;background:#fbfcfe}",
      ".htv-color{width:52px;height:40px;border:1px solid #d8e0ec;border-radius:12px;padding:3px;background:#fff;cursor:pointer}",
      ".htv-check{display:flex;align-items:center;gap:10px;font-size:15.5px;font-weight:800;color:" + NAVY + ";margin-top:14px;cursor:pointer}",
      ".htv-check input{width:21px;height:21px;accent-color:" + BLUE + "}",
      ".htv-check small{color:#7a8799;font-weight:600}",
      ".htv-hvbtn{margin-top:14px;background:" + BLUE + ";color:#fff;border:0;border-radius:12px;padding:12px 18px;font-size:15.5px;font-weight:800;cursor:pointer}",
      ".htv-hvbtn.off{background:#eef1f6;color:#5b6a7d;border:1px solid #d8e0ec}",
      ".htv-count{color:#5b6a7d;font-size:15px;margin:16px 2px 4px}",
      ".htv-wrow{display:flex;gap:10px;padding:13px 6px;border-bottom:1px solid #edf0f5;align-items:flex-start;border-radius:10px}",
      ".htv-wrow.playing{box-shadow:inset 0 0 0 999px rgba(255,255,255,.25)}",
      ".htv-idx{color:#8b98a9;font-size:14px;min-width:26px;text-align:right;padding-top:9px}",
      ".htv-wmain{flex:1;min-width:0}",
      ".htv-hline{display:flex;align-items:center;flex-wrap:wrap;gap:7px}",
      ".htv-hz{font-size:27px;font-weight:800;color:#101c2c;line-height:1.15}",
      ".htv-hv{color:" + RED + ";font-size:16.5px;font-weight:700}",
      ".htv-py{color:#1565c0;font-size:17px;font-weight:600}",
      ".htv-type{background:#e8eef6;color:#3d4f66;border-radius:7px;padding:3px 9px;font-size:12.5px;font-weight:700}",
      ".htv-spk{border:1px solid #cfe0f4;background:#eef5fd;border-radius:999px;padding:6px 11px;font-size:15px;cursor:pointer}",
      ".htv-star{border:1px solid #ecd28a;background:#fffdf4;border-radius:999px;width:36px;height:36px;font-size:17px;color:#c9a227;cursor:pointer;flex:none}",
      ".htv-star.on{background:#ffe066;color:#8a6d00}",
      ".htv-mean{font-size:16.5px;color:#22314a;margin-top:3px;line-height:1.35}",
      ".htv-ex{font-size:13.5px;color:#63738a;margin-top:4px;line-height:1.4}",
      ".htv-more{display:block;margin:16px auto 4px;background:#fff;border:1px solid #d8e0ec;color:" + BLUE + ";border-radius:999px;padding:11px 22px;font-weight:800;font-size:14.5px;cursor:pointer}",
      ".htv-empty{padding:26px 8px;text-align:center;color:#63738a;font-size:15px;line-height:1.5}",
      "/* flashcard */",
      ".htv-fc{border:1.5px solid #d8e0ec;border-radius:20px;padding:30px 18px;text-align:center;cursor:pointer;user-select:none;background:linear-gradient(180deg,#fff,#f7fafd);min-height:220px;display:flex;flex-direction:column;justify-content:center;gap:8px;margin-top:8px}",
      ".htv-fc .htv-hz{font-size:52px}",
      ".htv-fc-mean{font-size:21px;font-weight:800;color:" + NAVY + "}",
      ".htv-fc-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}",
      ".htv-fc-nav button{border:1px solid #d8e0ec;background:#fff;color:" + BLUE + ";border-radius:12px;padding:11px 16px;font-weight:800;font-size:14.5px;cursor:pointer}",
      "/* quiz */",
      ".htv-qz-prompt{font-size:19px;font-weight:800;color:" + NAVY + ";line-height:1.45;margin:6px 0 4px}",
      ".htv-qz-big{font-size:34px;font-weight:900;color:#101c2c}",
      ".htv-qz-sub{color:#63738a;font-size:14.5px}",
      ".htv-qz-opts{display:grid;gap:9px;margin-top:14px}",
      ".htv-qz-opt{border:1.5px solid #d8e0ec;background:#fff;border-radius:14px;padding:13px 14px;font-size:16.5px;text-align:left;cursor:pointer;color:" + NAVY + "}",
      ".htv-qz-opt.ok{background:#e7f7ec;border-color:#39b26b;font-weight:800}",
      ".htv-qz-opt.bad{background:#fdeceb;border-color:#e5534b;font-weight:800}",
      ".htv-qz-opt:disabled{cursor:default;opacity:.92}",
      ".htv-qz-fb{margin-top:13px;border-radius:14px;padding:12px 14px;font-size:15px;line-height:1.5;display:none}",
      ".htv-qz-fb.show{display:block}",
      ".htv-qz-fb.ok{background:#e7f7ec;color:#14532d}",
      ".htv-qz-fb.bad{background:#fdeceb;color:#7a1d17}",
      ".htv-qz-bar{display:flex;align-items:center;justify-content:space-between;margin-top:16px;gap:10px}",
      ".htv-qz-next{background:" + BLUE + ";color:#fff;border:0;border-radius:12px;padding:12px 20px;font-weight:800;font-size:15px;cursor:pointer}",
      ".htv-qz-score{font-size:26px;font-weight:900;color:" + NAVY + ";text-align:center;margin:10px 0}",
      ".htv-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);background:" + NAVY + ";color:#fff;border-radius:999px;padding:11px 18px;font-size:14px;font-weight:700;z-index:12090;box-shadow:0 10px 26px rgba(0,0,0,.25);max-width:92vw;text-align:center}"
    ].join("\n");
    var st = document.createElement("style");
    st.id = "ttcHtvStyle";
    st.textContent = css;
    document.head.appendChild(st);
  }
  var _toastTimer = null;
  function toast(msg) {
    var old = byId("ttcHtvToast"); if (old) old.remove();
    var t = document.createElement("div");
    t.className = "htv-toast"; t.id = "ttcHtvToast"; t.textContent = msg;
    document.body.appendChild(t);
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(function () { if (t.parentNode) t.remove(); }, 3400);
  }

  /* ---------------- khung XuCup ---------------- */
  function voiceOptionsHtml() {
    var h = '<optgroup label="⭐ Gemini AI">';
    GEMINI_VOICES.forEach(function (v) {
      h += '<option value="g:' + v.n + '"' + (S.voice === "g:" + v.n ? " selected" : "") + ">⭐ " + v.n + " · Gemini AI (" + v.g + ")</option>";
    });
    h += "</optgroup>";
    var dvs = deviceVoices().filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf("zh") === 0; });
    if (dvs.length) {
      h += '<optgroup label="Giọng máy · Device">';
      dvs.forEach(function (v) {
        var val = "d:" + v.voiceURI;
        h += '<option value="' + esc(val) + '"' + (S.voice === val ? " selected" : "") + ">" + esc(v.name) + "</option>";
      });
      h += "</optgroup>";
    }
    return h;
  }
  function buildOverlay() {
    if (byId("ttcHtvOverlay")) return;
    ensureStyle();
    var ov = document.createElement("div");
    ov.id = "ttcHtvOverlay";
    ov.hidden = true;
    var chips = "";
    for (var lv = 1; lv <= 9; lv++) {
      chips += '<button type="button" class="htv-chip" data-htv-level="' + lv + '">HSK ' + lv + " · " + levelCount(lv) + "</button>";
    }
    ov.innerHTML =
      '<div class="htv-wrap"><div class="htv-panel">' +
      '<button type="button" class="htv-close" id="htvClose">✕ Đóng</button>' +
      '<div class="htv-title">📚 Học từ vựng <small>· HSK Vocabulary</small></div>' +
      '<button type="button" class="htv-back" id="htvBack">← Khu học tập · Study zone</button>' +
      '<input id="htvSearch" class="htv-search" type="search" placeholder="Tìm theo chữ Hán, pinyin hoặc nghĩa tiếng Việt · Search">' +
      '<div class="htv-chips" id="htvChips">' + chips + "</div>" +
      '<div class="htv-modes" id="htvModes">' +
      '<button type="button" class="htv-mode" data-htv-mode="list">📋 Danh sách <small>· List</small></button>' +
      '<button type="button" class="htv-mode" data-htv-mode="flash">🃏 Flashcard</button>' +
      '<button type="button" class="htv-mode" data-htv-mode="quiz">❓ Trắc nghiệm <small>· Quiz</small></button>' +
      '<button type="button" class="htv-mode" data-htv-mode="exam">📝 Thi thử <small>· Mock test</small></button>' +
      '<button type="button" class="htv-mode wide" data-htv-mode="review">⭐ Từ cần ôn <small>· Review</small> (<span id="htvReviewCount">0</span>)</button>' +
      "</div>" +
      '<div class="htv-row"><span class="htv-lab">🔊 Giọng đọc <small>· Voice</small></span>' +
      '<select id="htvVoice" class="htv-sel">' + voiceOptionsHtml() + "</select></div>" +
      '<div class="htv-row"><select id="htvSpeed" class="htv-sel">' +
      '<option value="slow">🐢 Chậm · Slow</option>' +
      '<option value="normal">🚶 Vừa · Normal</option>' +
      '<option value="fast">🏃 Nhanh · Fast</option></select></div>' +
      '<div class="htv-row"><button type="button" class="htv-playbtn" id="htvPlayAll">▶️ Đọc cả danh sách <small>· Play all</small></button></div>' +
      '<div class="htv-row"><input id="htvFromNum" class="htv-num" type="number" min="1" placeholder="Số · No">' +
      '<button type="button" class="htv-playbtn" id="htvPlayFrom">▶️ Từ số này <small>· Play from #</small></button></div>' +
      '<div class="htv-row"><span class="htv-lab">🎨 Màu tô <small>· Highlight</small></span>' +
      '<input id="htvHl" class="htv-color" type="color" value="' + esc(S.hl) + '"></div>' +
      '<label class="htv-check"><input type="checkbox" id="htvReadMeaning"> Đọc cả nghĩa <small>· Word + meaning</small></label>' +
      '<div class="htv-row"><span class="htv-lab">🌐 Dịch nghĩa sang <small>· Meanings in</small></span>' +
      '<select class="htv-sel" id="htvMeanLang"><option value="kho">Mặc định của kho</option></select></div>' +
      '<div class="htv-row"><span class="htv-lab">🀄 Chữ Hán <small>· Script</small></span>' +
      '<select id="htvScript" class="htv-sel">' +
      '<option value="simp">简体 Giản thể · Simplified</option>' +
      '<option value="trad">繁体 Phồn thể · Traditional</option></select></div>' +
      '<button type="button" class="htv-hvbtn" id="htvHvBtn">🔤 Hán–Việt: Bật · On</button>' +
      '<div class="htv-count" id="htvCount"></div>' +
      '<div id="htvBody"></div>' +
      "</div></div>";
    document.body.appendChild(ov);
    wireOverlay(ov);
  }
  function wireOverlay(ov) {
    byId("htvClose").addEventListener("click", closeOverlay);
    byId("htvBack").addEventListener("click", closeOverlay);
    byId("htvSearch").addEventListener("input", function () {
      S.query = this.value || "";
      if (S.mode !== "list") setMode("list"); else renderBody();
    });
    byId("htvChips").addEventListener("click", function (e) {
      var b = e.target.closest("[data-htv-level]"); if (!b) return;
      stopSpeak();
      S.level = Number(b.getAttribute("data-htv-level"));
      S.fcIndex = 0; S.fcFlip = false;
      paintControls(); renderBody();
    });
    byId("htvModes").addEventListener("click", function (e) {
      var b = e.target.closest("[data-htv-mode]"); if (!b) return;
      var m = b.getAttribute("data-htv-mode");
      if (m === "exam") { gotoExam(); return; }
      setMode(m);
    });
    byId("htvVoice").addEventListener("change", function () { S.voice = this.value; _geminiBroken = false; });
    byId("htvSpeed").addEventListener("change", function () { S.speed = this.value; });
    byId("htvPlayAll").addEventListener("click", function () {
      if (S.playing) { stopSpeak(); return; }
      startPlayAll(0);
    });
    byId("htvPlayFrom").addEventListener("click", function () {
      var n = parseInt(byId("htvFromNum").value, 10);
      if (!n || n < 1) { toast("Nhập số thứ tự của từ muốn bắt đầu đọc nhé"); return; }
      startPlayAll(n - 1);
    });
    byId("htvHl").addEventListener("input", function () { S.hl = this.value; });
    byId("htvReadMeaning").addEventListener("change", function () { S.readMeaning = this.checked; });
    byId("htvScript").addEventListener("change", function () {
      S.trad = this.value === "trad";
      renderBody();
    });
    byId("htvHvBtn").addEventListener("click", function () {
      S.hvOn = !S.hvOn;
      paintControls(); renderBody();
    });
    if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = function () {
        var sel = byId("htvVoice");
        if (sel) { var cur = S.voice; sel.innerHTML = voiceOptionsHtml(); sel.value = cur; }
      };
    }
  }
  function paintControls() {
    var chips = document.querySelectorAll("[data-htv-level]");
    chips.forEach(function (c) {
      c.classList.toggle("on", Number(c.getAttribute("data-htv-level")) === S.level);
    });
    var modes = document.querySelectorAll("[data-htv-mode]");
    modes.forEach(function (c) { c.classList.toggle("on", c.getAttribute("data-htv-mode") === S.mode); });
    var rc = byId("htvReviewCount"); if (rc) rc.textContent = reviewCount();
    var hv = byId("htvHvBtn");
    if (hv) {
      hv.textContent = S.hvOn ? "🔤 Hán–Việt: Bật · On" : "🔤 Hán–Việt: Tắt · Off";
      hv.classList.toggle("off", !S.hvOn);
    }
    var sc = byId("htvScript"); if (sc) sc.value = S.trad ? "trad" : "simp";
    var sp = byId("htvSpeed"); if (sp) sp.value = S.speed;
    var rm = byId("htvReadMeaning"); if (rm) rm.checked = S.readMeaning;
    paintPlayButtons();
  }
  function paintPlayButtons() {
    var b = byId("htvPlayAll");
    if (!b) return;
    if (S.playing) { b.classList.add("stop"); b.innerHTML = "⏹ Dừng đọc <small>· Stop</small>"; }
    else { b.classList.remove("stop"); b.innerHTML = "▶️ Đọc cả danh sách <small>· Play all</small>"; }
  }
  function setMode(m) {
    stopSpeak();
    S.mode = m; S.fcFlip = false;
    if (m === "flash") S.fcIndex = Math.min(S.fcIndex, Math.max(0, currentList().length - 1));
    paintControls(); renderBody();
  }
  function gotoExam() {
    closeOverlay();
    var b = byId("otter2FeatExam");
    if (b) { b.click(); return; }
    var nav = document.querySelector('[data-ttc-act="exam"],[data-act="exam"]');
    if (nav) { nav.click(); return; }
    toast("Anh mở mục Thi HSK ở thanh dưới giúp em nhé 🙏");
  }
  function openOverlay() {
    buildOverlay();
    S.trad = pageIsTrad();
    var ov = byId("ttcHtvOverlay");
    ov.hidden = false;
    S.open = true;
    document.body.style.overflow = "hidden";
    paintControls(); renderBody();
    ov.scrollTop = 0;
  }
  function closeOverlay() {
    stopSpeak();
    var ov = byId("ttcHtvOverlay");
    if (ov) ov.hidden = true;
    S.open = false;
    document.body.style.overflow = "";
  }

  /* ---------------- danh sách hiện tại ---------------- */
  function currentList() {
    if (S.mode === "review") return reviewWords();
    var pack = packFor(S.level);
    var q = norm(S.query).trim();
    if (!q) return pack;
    return pack.filter(function (w) {
      return norm(w.h).indexOf(q) >= 0 || norm(w.p).indexOf(q) >= 0 ||
        norm(w.m).indexOf(q) >= 0 || norm(w.v).indexOf(q) >= 0;
    });
  }
  function rowHtml(w, idx) {
    var star = isStar(w);
    var hv = S.hvOn && w.v ? '<span class="htv-hv">[' + esc(String(w.v).toUpperCase()) + "]</span>" : "";
    var ex = "";
    if (w.example) {
      ex = '<div class="htv-ex">' + esc(dispH(w.example)) +
        (w.examplePinyin ? " · " + esc(w.examplePinyin) : "") +
        (w.exampleMeaning ? "<br>" + esc(w.exampleMeaning) : "") + "</div>";
    }
    return '<div class="htv-wrow" data-htv-row="' + idx + '">' +
      '<div class="htv-idx">' + (idx + 1) + "</div>" +
      '<div class="htv-wmain"><div class="htv-hline">' +
      '<span class="htv-hz">' + esc(dispH(w.h)) + "</span>" + hv +
      '<span class="htv-py">' + esc(w.p) + "</span>" +
      (w.t ? '<span class="htv-type">' + esc(w.t) + "</span>" : "") +
      '<button type="button" class="htv-spk" data-htv-speak="' + idx + '" aria-label="Nghe phát âm">🔊</button>' +
      '<button type="button" class="htv-star' + (star ? " on" : "") + '" data-htv-star="' + idx + '" aria-label="Đánh dấu cần ôn">' + (star ? "★" : "☆") + "</button>" +
      '</div><div class="htv-mean">' + esc(w.m) + "</div>" + ex + "</div></div>";
  }
  var PAGE = 120, _shown = PAGE;
  function renderBody() {
    var body = byId("htvBody"); if (!body) return;
    var count = byId("htvCount");
    if (S.mode === "flash") { renderFlash(body); if (count) count.textContent = ""; return; }
    if (S.mode === "quiz") { renderQuizStart(body); if (count) count.textContent = ""; return; }
    var list = currentList();
    if (count) {
      count.textContent = S.mode === "review"
        ? list.length + " từ cần ôn · review words"
        : list.length + " từ · words — HSK " + S.level;
    }
    if (!list.length) {
      body.innerHTML = '<div class="htv-empty">' +
        (S.mode === "review"
          ? "Chưa có từ cần ôn nào.<br>Bấm ☆ ở danh sách để lưu từ, hoặc làm Trắc nghiệm — từ trả lời sai sẽ tự vào đây nhé ⭐"
          : "Không tìm thấy từ nào khớp. Thử từ khoá khác nhé 🔍") + "</div>";
      return;
    }
    _shown = Math.min(PAGE, list.length);
    paintRows(body, list);
  }
  function paintRows(body, list) {
    var h = "";
    for (var i = 0; i < _shown; i++) h += rowHtml(list[i], i);
    if (_shown < list.length) {
      h += '<button type="button" class="htv-more" id="htvMore">Xem thêm · More (' + (list.length - _shown) + " từ nữa)</button>";
    }
    body.innerHTML = h;
    body.querySelectorAll("[data-htv-speak]").forEach(function (b) {
      b.addEventListener("click", function () {
        var w = list[Number(b.getAttribute("data-htv-speak"))];
        if (w) speakWord(w);
      });
    });
    body.querySelectorAll("[data-htv-star]").forEach(function (b) {
      b.addEventListener("click", function () {
        var w = list[Number(b.getAttribute("data-htv-star"))];
        if (!w) return;
        var on = toggleStar(w);
        b.classList.toggle("on", on);
        b.textContent = on ? "★" : "☆";
        var rc = byId("htvReviewCount"); if (rc) rc.textContent = reviewCount();
        if (S.mode === "review" && !on) renderBody();
      });
    });
    var more = byId("htvMore");
    if (more) more.addEventListener("click", function () {
      _shown = Math.min(_shown + PAGE, list.length);
      paintRows(body, list);
    });
  }

  /* ---------------- Đọc cả danh sách ---------------- */
  function startPlayAll(fromIdx) {
    if (S.mode !== "list" && S.mode !== "review") {
      S.mode = "list"; S.fcFlip = false;
      paintControls(); renderBody();
    }
    var list = currentList();
    if (!list.length) { toast("Danh sách đang trống"); return; }
    if (fromIdx >= list.length) { toast("Số này vượt quá danh sách (" + list.length + " từ)"); return; }
    stopSpeak();
    var token = S.playToken;
    S.playing = true;
    paintPlayButtons();
    var i = fromIdx;
    var step = function () {
      if (token !== S.playToken || !S.playing) return;
      if (i >= list.length) { stopSpeak(); toast("Đã đọc hết danh sách 🎉"); return; }
      var rows = document.querySelectorAll("[data-htv-row]");
      rows.forEach(function (r) { r.classList.remove("playing"); r.style.background = ""; });
      if (i >= _shown && S.mode === "list" || (S.mode === "review" && i >= _shown)) {
        _shown = Math.min(i + PAGE, list.length);
        paintRows(byId("htvBody"), list);
        rows = document.querySelectorAll("[data-htv-row]");
      }
      var row = document.querySelector('[data-htv-row="' + i + '"]');
      if (row) {
        row.classList.add("playing");
        row.style.background = S.hl;
        try { row.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {}
      }
      var w = list[i];
      i++;
      speakWord(w).then(function () {
        if (token !== S.playToken) return;
        setTimeout(step, 260);
      });
    };
    setTimeout(step, 60);
  }

  /* ---------------- Flashcard ---------------- */
  var _fcCacheKey = "", _fcList = null;
  function fcList() {
    var key = S.mode + "|" + S.level + "|" + S.query + "|" + (S.mode === "review" ? reviewCount() : "");
    if (_fcList && _fcCacheKey === key) return _fcList;
    _fcList = currentList().slice();
    _fcCacheKey = key;
    return _fcList;
  }
  function renderFlash(body) {
    var list = fcList();
    if (!list.length) {
      body.innerHTML = '<div class="htv-empty">Chưa có từ nào để lật thẻ.<br>Chọn cấp HSK khác hoặc xoá ô tìm kiếm nhé 🃏</div>';
      return;
    }
    if (S.fcIndex >= list.length) S.fcIndex = 0;
    var w = list[S.fcIndex];
    var star = isStar(w);
    var front =
      '<div class="htv-hz">' + esc(dispH(w.h)) + "</div>" +
      (S.hvOn && w.v ? '<div class="htv-hv" style="font-size:19px">[' + esc(String(w.v).toUpperCase()) + "]</div>" : "") +
      '<div class="htv-py" style="font-size:20px">' + esc(w.p) + "</div>" +
      (w.t ? '<div><span class="htv-type">' + esc(w.t) + "</span></div>" : "") +
      '<div class="htv-qz-sub">Chạm vào thẻ để xem nghĩa 👆</div>';
    var back =
      '<div class="htv-fc-mean">' + esc(w.m) + "</div>" +
      (w.example ? '<div class="htv-ex" style="text-align:left;font-size:15px">' + esc(dispH(w.example)) +
        (w.examplePinyin ? " · " + esc(w.examplePinyin) : "") +
        (w.exampleMeaning ? "<br>" + esc(w.exampleMeaning) : "") + "</div>" : "") +
      '<div class="htv-qz-sub">Chạm để lật lại 👆</div>';
    body.innerHTML =
      '<div class="htv-fc" id="htvFcCard">' + (S.fcFlip ? back : front) + "</div>" +
      '<div class="htv-fc-nav">' +
      '<button type="button" id="htvFcPrev">⬅ Trước</button>' +
      '<span class="htv-qz-sub">' + (S.fcIndex + 1) + " / " + list.length + "</span>" +
      '<button type="button" id="htvFcSpeak">🔊 Nghe</button>' +
      '<button type="button" id="htvFcStar">' + (star ? "★ Đã lưu" : "☆ Lưu ôn") + "</button>" +
      '<button type="button" id="htvFcShuffle">🔀 Trộn</button>' +
      '<button type="button" id="htvFcNext">Tiếp ➡</button>' +
      "</div>";
    byId("htvFcCard").addEventListener("click", function () { S.fcFlip = !S.fcFlip; renderFlash(body); });
    byId("htvFcPrev").addEventListener("click", function () { S.fcIndex = (S.fcIndex - 1 + list.length) % list.length; S.fcFlip = false; renderFlash(body); });
    byId("htvFcNext").addEventListener("click", function () { S.fcIndex = (S.fcIndex + 1) % list.length; S.fcFlip = false; renderFlash(body); });
    byId("htvFcSpeak").addEventListener("click", function () { speakWord(w); });
    byId("htvFcStar").addEventListener("click", function () { toggleStar(w); var rc = byId("htvReviewCount"); if (rc) rc.textContent = reviewCount(); renderFlash(body); });
    byId("htvFcShuffle").addEventListener("click", function () {
      _fcList = shuffle(_fcList || list);
      S.fcIndex = 0; S.fcFlip = false;
      renderFlash(body);
    });
  }

  /* ---------------- Trắc nghiệm (luật vàng: đúng 1 đáp án) ---------------- */
  var NUMERALS = { "一": 1, "二": 1, "三": 1, "四": 1, "五": 1, "六": 1, "七": 1, "八": 1, "九": 1, "十": 1, "百": 1, "千": 1, "万": 1, "两": 1, "几": 1, "多": 1, "半": 1 };
  var PRONOUNS = { "我": 1, "你": 1, "他": 1, "她": 1, "它": 1, "我们": 1, "你们": 1, "他们": 1, "她们": 1, "它们": 1, "谁": 1, "这": 1, "那": 1, "自己": 1 };
  var TIMEWORDS = { "今天": 1, "明天": 1, "昨天": 1, "上午": 1, "下午": 1, "晚上": 1, "早上": 1, "现在": 1, "时候": 1, "时间": 1, "年": 1, "月": 1, "日": 1, "星期": 1, "点": 1, "以前": 1, "以后": 1 };
  var POSITIONS = { "上": 1, "下": 1, "前": 1, "后": 1, "左": 1, "右": 1, "里": 1, "外": 1, "东": 1, "西": 1, "南": 1, "北": 1, "中": 1, "旁边": 1, "上面": 1, "下面": 1, "里面": 1, "外面": 1 };
  var _hanziSet = null, _sentenceSet = null;
  function bankCaches() {
    if (_hanziSet) return;
    _hanziSet = {}; _sentenceSet = {};
    bankWords().forEach(function (w) {
      if (w.h) _hanziSet[w.h] = 1;
      if (w.example) _sentenceSet[String(w.example).replace(/\s+/g, "")] = 1;
    });
  }
  function countOcc(s, sub) { if (!sub) return 0; return String(s || "").split(String(sub)).length - 1; }
  function glossParts(m) {
    return String(m || "").split(/[;,、]/).map(function (x) { return norm(x).trim(); }).filter(Boolean);
  }
  function glossOverlap(a, b) {
    var pa = glossParts(a), pb = glossParts(b), i, j;
    for (i = 0; i < pa.length; i++) for (j = 0; j < pb.length; j++) {
      if (pa[i] === pb[j]) return true;
      if (pa[i].length >= 3 && pb[j].indexOf(pa[i]) >= 0) return true;
      if (pb[j].length >= 3 && pa[i].indexOf(pb[j]) >= 0) return true;
    }
    return false;
  }
  function blankOutSmart(sentence, word) {
    bankCaches();
    var s = String(sentence || ""), w = String(word || "");
    if (!w) return null;
    var from = 0;
    while (true) {
      var idx = s.indexOf(w, from);
      if (idx < 0) return null;
      var prev = idx > 0 ? s.charAt(idx - 1) : "";
      var next = idx + w.length < s.length ? s.charAt(idx + w.length) : "";
      var dirty = false, cands = [];
      if (prev) cands.push(prev + w);
      if (next) cands.push(w + next);
      if (prev && next) cands.push(prev + w + next);
      for (var i = 0; i < cands.length; i++) {
        if (cands[i] !== w && _hanziSet[cands[i]]) { dirty = true; break; }
      }
      if (!dirty) return s.slice(0, idx) + "＿＿" + s.slice(idx + w.length);
      from = idx + 1;
    }
  }
  function clozeQuantFrame(blanked) {
    var s = String(blanked || ""), i = s.indexOf("＿＿");
    if (i < 0) return false;
    var after = s.charAt(i + 2), before = i > 0 ? s.charAt(i - 1) : "";
    return "个本张件条只双对块元次".indexOf(after) >= 0 || before === "第";
  }
  function clozeDistractorBad(target, blanked, sentence, cand) {
    var T = String(target.h || ""), D = String(cand.h || "");
    if (!D || D === T) return true;
    bankCaches();
    var filled = blanked.replace("＿＿", D).replace(/\s+/g, "");
    if (_sentenceSet[filled]) return true;
    var pinned = countOcc(sentence, T) >= 2;
    if (!pinned) {
      if (clozeQuantFrame(blanked) && NUMERALS[T] && NUMERALS[D]) return true;
      if (PRONOUNS[T] && PRONOUNS[D]) return true;
      if (TIMEWORDS[T] && TIMEWORDS[D]) return true;
      if (POSITIONS[T] && POSITIONS[D]) return true;
    }
    return false;
  }
  function pickDistractors(pack, target, mode, blanked, sentence) {
    var sameType = [], others = [];
    pack.forEach(function (x) {
      if (!x || x === target || !x.h || x.h === target.h) return;
      if (mode === "cloze") {
        if (clozeDistractorBad(target, blanked, sentence, x)) return;
        if (sentence.indexOf(x.h) >= 0) return;
      } else {
        if (!x.m || glossOverlap(x.m, target.m)) return;
      }
      if (x.t && target.t && x.t === target.t) sameType.push(x); else others.push(x);
    });
    var cand = shuffle(sameType).concat(shuffle(others));
    var out = [], seenM = {};
    for (var i = 0; i < cand.length && out.length < 3; i++) {
      if (mode === "meaning" || mode === "word") {
        var nm = norm(cand[i].m);
        if (!nm || seenM[nm]) continue;
        seenM[nm] = 1;
      }
      out.push(cand[i]);
    }
    return out;
  }
  function buildQuestion(target, pack) {
    var types = [];
    var dMeaning = pickDistractors(pack, target, "meaning");
    if (dMeaning.length >= 3) types.push("meaning");
    var dWord = pickDistractors(pack, target, "word");
    if (dWord.length >= 3) types.push("word");
    var blanked = null, dCloze = null;
    if (target.example) {
      blanked = blankOutSmart(target.example, target.h);
      if (blanked) {
        dCloze = pickDistractors(pack, target, "cloze", blanked, target.example);
        if (dCloze.length >= 3) types.push("cloze");
      }
    }
    if (!types.length) return null;
    var type = types[Math.floor(Math.random() * types.length)];
    var distract = type === "meaning" ? dMeaning : (type === "word" ? dWord : dCloze);
    var opts;
    if (type === "meaning") {
      opts = shuffle([{ txt: target.m, ok: true }].concat(distract.map(function (d) { return { txt: d.m, ok: false }; })));
    } else {
      opts = shuffle([{ txt: dispH(target.h), ok: true }].concat(distract.map(function (d) { return { txt: dispH(d.h), ok: false }; })));
    }
    return { w: target, type: type, blanked: type === "cloze" ? dispH(blanked) : null, opts: opts, picked: -1 };
  }
  function buildRound(sourceWords, pack) {
    var targets = shuffle(sourceWords).slice(0, 40), qs = [];
    for (var i = 0; i < targets.length && qs.length < 10; i++) {
      var q = buildQuestion(targets[i], pack);
      if (q) qs.push(q);
    }
    return qs;
  }

  var QZ = null; /* {qs, idx, score, missed:[w]} */
  function renderQuizStart(body) {
    body.innerHTML =
      '<div class="htv-empty" style="text-align:left;padding:10px 4px">' +
      "<b style='font-size:17px;color:" + NAVY + "'>❓ Trắc nghiệm HSK " + S.level + "</b><br>" +
      "10 câu · 3 dạng: chọn nghĩa · chọn chữ · điền khuyết câu ví dụ.<br>" +
      "Không bấm giờ, chọn đáp án là biết đúng/sai ngay. Từ trả lời sai sẽ tự vào ⭐ Từ cần ôn.</div>" +
      '<button type="button" class="htv-qz-next" id="htvQzStart" style="width:100%">▶ Bắt đầu</button>';
    byId("htvQzStart").addEventListener("click", function () { startQuiz(packFor(S.level), packFor(S.level)); });
  }
  function startQuiz(sourceWords, pack) {
    var qs = buildRound(sourceWords, pack);
    if (qs.length < 4) { toast("Chưa đủ dữ kiện để tạo vòng trắc nghiệm 😅"); return; }
    QZ = { qs: qs, idx: 0, score: 0, missed: [] };
    renderQuizQ();
  }
  function quizExplain(w) {
    return "<b>" + esc(dispH(w.h)) + "</b> " + esc(w.p) +
      (S.hvOn && w.v ? ' <span style="color:' + RED + '">[' + esc(String(w.v).toUpperCase()) + "]</span>" : "") +
      " — " + esc(w.m) +
      (w.example ? "<br>" + esc(dispH(w.example)) + (w.examplePinyin ? " · " + esc(w.examplePinyin) : "") +
        (w.exampleMeaning ? "<br>" + esc(w.exampleMeaning) : "") : "");
  }
  function renderQuizQ() {
    var body = byId("htvBody"); if (!body || !QZ) return;
    var q = QZ.qs[QZ.idx], w = q.w;
    var prompt = "";
    if (q.type === "meaning") {
      prompt = '<div class="htv-qz-sub">Từ này nghĩa là gì?</div><div class="htv-qz-big">' + esc(dispH(w.h)) +
        '</div><div class="htv-qz-sub">' + esc(w.p) + (w.t ? " · " + esc(w.t) : "") + "</div>";
    } else if (q.type === "word") {
      prompt = '<div class="htv-qz-sub">Nghĩa này là của từ nào?</div><div class="htv-qz-prompt">' + esc(w.m) + "</div>";
    } else {
      prompt = '<div class="htv-qz-sub">Điền từ đúng vào chỗ trống:</div><div class="htv-qz-prompt">' + esc(q.blanked) + "</div>" +
        (w.exampleMeaning ? '<div class="htv-qz-sub">' + esc(w.exampleMeaning) + "</div>" : "");
    }
    var opts = q.opts.map(function (o, i) {
      return '<button type="button" class="htv-qz-opt" data-htv-opt="' + i + '">' + esc(o.txt) + "</button>";
    }).join("");
    body.innerHTML =
      '<div class="htv-qz-sub">Câu ' + (QZ.idx + 1) + " / " + QZ.qs.length + " · Đúng: " + QZ.score + "</div>" +
      prompt + '<div class="htv-qz-opts">' + opts + "</div>" +
      '<div class="htv-qz-fb" id="htvQzFb"></div>' +
      '<div class="htv-qz-bar"><span></span><button type="button" class="htv-qz-next" id="htvQzNext" hidden>' +
      (QZ.idx + 1 >= QZ.qs.length ? "Xem kết quả 🏁" : "Câu tiếp ➡") + "</button></div>";
    body.querySelectorAll("[data-htv-opt]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (q.picked >= 0) return;
        var i = Number(b.getAttribute("data-htv-opt"));
        q.picked = i;
        var ok = q.opts[i].ok;
        if (ok) QZ.score++;
        else { QZ.missed.push(w); addMissed(w); }
        body.querySelectorAll("[data-htv-opt]").forEach(function (x, xi) {
          x.disabled = true;
          if (q.opts[xi].ok) x.classList.add("ok");
          else if (xi === i) x.classList.add("bad");
        });
        var fb = byId("htvQzFb");
        fb.className = "htv-qz-fb show " + (ok ? "ok" : "bad");
        fb.innerHTML = (ok ? "✅ Đúng rồi! " : "❌ Chưa đúng. ") + quizExplain(w);
        var rc = byId("htvReviewCount"); if (rc) rc.textContent = reviewCount();
        var nx = byId("htvQzNext"); if (nx) nx.hidden = false;
        speak(w.h, "zh");
      });
    });
    var nx = byId("htvQzNext");
    if (nx) nx.addEventListener("click", function () {
      QZ.idx++;
      if (QZ.idx >= QZ.qs.length) renderQuizEnd(); else renderQuizQ();
    });
  }
  function renderQuizEnd() {
    var body = byId("htvBody"); if (!body || !QZ) return;
    var total = QZ.qs.length;
    var missedHtml = "";
    if (QZ.missed.length) {
      missedHtml = '<div style="margin-top:12px"><b>Từ cần ôn lại:</b>' +
        QZ.missed.map(function (w) {
          return '<div class="htv-ex" style="font-size:15px">• <b>' + esc(dispH(w.h)) + "</b> " + esc(w.p) + " — " + esc(w.m) + "</div>";
        }).join("") + "</div>";
    }
    body.innerHTML =
      '<div class="htv-qz-score">🏁 ' + QZ.score + " / " + total + "</div>" +
      '<div class="htv-empty" style="padding:4px">' +
      (QZ.score === total ? "Xuất sắc! Đúng hết luôn 🎉" :
        QZ.score >= total * 0.7 ? "Khá lắm! Ôn lại mấy từ sai là chắc bài 💪" :
          "Không sao, từ sai đã vào ⭐ Từ cần ôn — luyện lại là nhớ ngay 🌱") + "</div>" +
      missedHtml +
      '<div class="htv-qz-bar">' +
      (QZ.missed.length ? '<button type="button" class="htv-playbtn" id="htvQzRetry">🔁 Luyện lại từ sai</button>' : "<span></span>") +
      '<button type="button" class="htv-qz-next" id="htvQzAgain">↻ Vòng mới</button></div>' +
      '<button type="button" class="htv-more" id="htvQzToList">📋 Về danh sách</button>';
    var rt = byId("htvQzRetry");
    if (rt) rt.addEventListener("click", function () {
      var pack = packFor(S.level);
      startQuiz(QZ.missed.slice(), pack);
    });
    byId("htvQzAgain").addEventListener("click", function () { startQuiz(packFor(S.level), packFor(S.level)); });
    byId("htvQzToList").addEventListener("click", function () { setMode("list"); });
  }

  /* ---------------- điểm vào ---------------- */
  function buildEntry() {
    var journey = byId("otter2HskJourney");
    if (!journey) return false;
    ensureStyle();
    if (!byId("ttcHocTuVungCard")) {
      var card = document.createElement("div");
      card.className = "htv-card";
      card.id = "ttcHocTuVungCard";
      card.innerHTML =
        '<span class="htv-card-ico" aria-hidden="true">📚</span>' +
        '<span class="htv-card-main"><span class="htv-card-title">Học từ vựng</span>' +
        '<span class="htv-card-sub">Kiểu XuCup: danh sách · flashcard · trắc nghiệm · từ cần ôn — 11.000 từ HSK 1–9, giọng Gemini</span></span>' +
        '<button type="button" class="htv-card-btn" id="ttcHtvCardBtn">▶ Vào học</button>';
      var bar = byId("ttcVocabRoomBar");
      if (bar && bar.parentNode === journey) journey.insertBefore(card, bar.nextSibling);
      else if (journey.firstElementChild) journey.insertBefore(card, journey.firstElementChild.nextSibling);
      else journey.appendChild(card);
      byId("ttcHtvCardBtn").addEventListener("click", openOverlay);
    }
    var picker = journey.querySelector("[data-vr-picker]");
    if (picker && !picker.querySelector("[data-htv-game]")) {
      var tile = document.createElement("button");
      tile.type = "button";
      tile.className = "ttc-vr-game";
      tile.setAttribute("data-htv-game", "hoctuvung");
      tile.innerHTML =
        '<span class="ttc-vr-gico" aria-hidden="true">📚</span>' +
        '<span><span class="ttc-vr-gname">Học từ vựng</span>' +
        '<span class="ttc-vr-gsub">Danh sách · Flashcard · Trắc nghiệm kiểu XuCup</span></span>';
      tile.addEventListener("click", openOverlay);
      picker.insertBefore(tile, picker.firstChild);
    }
    return true;
  }
  window.ttcOpenHocTuVung = openOverlay;

  function init() {
    ensureStyle();
    if (!buildEntry()) { setTimeout(init, 600); return; }
    setInterval(function () { if (!byId("ttcHocTuVungCard")) buildEntry(); }, 1500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
