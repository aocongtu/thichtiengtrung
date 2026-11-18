/* ============================================================
   GÓI BÀI TẬP TRUYỆN — Phòng Truyện (thiết kế lại GĐ2, pilot HSK1).
   Bài tập SINH TỰ ĐỘNG từ chính các câu (zh/py/vi + timing) của truyện
   đang mở, dùng dữ liệu window.OTTER2_STORYSUB (otter2-storysub-hsk<N>.js)
   và ngân hàng từ window.OTTER2_HSK_ALL_DATA.

   5 dạng bài:
     (a) nghe hiểu — nghe đoạn audio của câu trong video, chọn nghĩa VI đúng
     (b) chép chính tả — nghe đoạn audio, gõ lại câu chữ Hán
     (c) điền từ — chọn từ còn thiếu trong câu
     (d) luyện dịch — xem nghĩa VI, ghép các thẻ từ thành câu chữ Hán
     (e) từ vựng của truyện — danh sách từ trích từ truyện + "Tạo bộ từ vựng"

   Luật dữ liệu:
     - Tiến độ gói bài: localStorage MỚI "otter2_storypack_v1" (module tự quản).
     - Bộ từ vựng tạo từ truyện: lưu trong chính khóa mới ở trên.
     - "otter2_hsk_vocab_progress_v1": CHỈ ĐỌC để đánh dấu từ đã học —
       tuyệt đối không ghi, không đổi cấu trúc/khóa của nó.
   Luật giao diện: nền trắng, màu khu video tím #7c3aed cho tiêu đề + nút
   chính; mỗi màn hình bài đúng MỘT nút hành động chính (luật tiết kiệm nút).
   Module TỰ GẮN vào phòng truyện (không cần sửa otter2-storyvideo.js):
   chèn dải tab [Phụ đề | Bài tập] ngay trên danh sách câu trong stage.
   ============================================================ */
(function (global) {
  "use strict";

  /* ================= PHẦN LÕI THUẦN (test được bằng Node) ================= */

  var PUNCT_RE = /[，。？！：；、·…—「」『』""''“”‘’（）()《》〈〉\s]/;

  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seedFromStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function shuffle(arr, rnd) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickN(arr, n, rnd) { return shuffle(arr, rnd).slice(0, n); }

  /* Ngân hàng từ theo cấp: map độ dài -> {chữ: từ} để tách từ dài nhất trước. */
  function buildBank(words, level) {
    var byLen = {}, maxLen = 1, list = [];
    (words || []).forEach(function (w) {
      if (!w || !w.h || Number(w.hsk) !== Number(level)) return;
      list.push(w);
      var L = w.h.length;
      if (!byLen[L]) byLen[L] = {};
      byLen[L][w.h] = w;
      if (L > maxLen) maxLen = L;
    });
    return { byLen: byLen, maxLen: maxLen, list: list };
  }

  /* Tách câu thành thẻ: từ trong ngân hàng (dài nhất trước), ký tự đơn lẻ,
     hoặc dấu câu (punct:true — giữ để hiển thị câu trọn vẹn, không dùng làm thẻ ghép).
     Trả [{w: wordObj|null, text, punct?:true}] */
  function segment(zh, bank) {
    var toks = [], i = 0;
    zh = String(zh || "");
    while (i < zh.length) {
      var ch = zh.charAt(i);
      if (PUNCT_RE.test(ch)) { toks.push({ w: null, text: ch, punct: true }); i++; continue; }
      var hit = null;
      for (var L = Math.min(bank.maxLen, zh.length - i); L >= 1; L--) {
        var cand = zh.substr(i, L);
        if (bank.byLen[L] && bank.byLen[L][cand]) { hit = bank.byLen[L][cand]; break; }
      }
      if (hit) { toks.push({ w: hit, text: hit.h }); i += hit.h.length; }
      else { toks.push({ w: null, text: ch }); i++; }
    }
    return toks;
  }

  /* Từ vựng của truyện: duy nhất, theo thứ tự xuất hiện. */
  function storyVocab(cues, bank) {
    var seen = {}, out = [];
    (cues || []).forEach(function (c) {
      segment(c[2], bank).forEach(function (t) {
        if (t.w && !seen[t.w.h]) { seen[t.w.h] = 1; out.push(t.w); }
      });
    });
    return out;
  }

  /* Từ tránh chọn làm ô trống (trợ từ/đại từ/quá phổ biến). */
  var FILL_STOP = { "的": 1, "了": 1, "是": 1, "我": 1, "你": 1, "他": 1, "她": 1, "我们": 1, "你们": 1, "他们": 1, "这": 1, "那": 1, "个": 1, "吗": 1, "呢": 1, "吧": 1, "也": 1, "很": 1, "不": 1, "在": 1, "有": 1, "和": 1, "都": 1, "就": 1, "人": 1, "说": 1, "一": 1, "上": 1, "下": 1, "里": 1 };
  var CONTENT_TYPES = { "Động từ": 1, "Danh từ": 1, "Tính từ": 1, "Số từ": 1, "Lượng từ": 1, "Phó từ": 1 };

  function normZh(s) { return String(s || "").replace(/[\s，。？！：；、·…—「」『』""''“”‘’（）()《》〈〉,.?!:;]/g, ""); }

  /* So sánh chép chính tả theo từng ký tự (sau khi bỏ dấu câu/khoảng trắng). */
  function checkDictation(input, target) {
    var a = normZh(input), b = normZh(target);
    var marks = [], correct = 0;
    for (var i = 0; i < b.length; i++) {
      var ok = i < a.length && a.charAt(i) === b.charAt(i);
      marks.push(ok ? 1 : 0);
      if (ok) correct++;
    }
    return { exact: a === b, marks: marks, correct: correct, total: b.length, typed: a, answer: b };
  }

  /* Sinh toàn bộ gói bài cho một truyện. cues: [[start,end,zh,py,vi],...] */
  function buildPack(storyId, cues, bank) {
    var rnd = mulberry32(seedFromStr(String(storyId)));
    cues = (cues || []).filter(function (c) {
      return Array.isArray(c) && c.length >= 5 &&
        typeof c[2] === "string" && c[2].trim() &&
        typeof c[4] === "string" && c[4].trim() &&
        isFinite(c[0]) && isFinite(c[1]) && c[1] > c[0];
    });
    var vocab = storyVocab(cues, bank);
    var pack = { storyId: storyId, cues: cues, vocab: vocab, listen: [], dict: [], fill: [], trans: [] };
    if (!cues.length) return pack;

    function viDistractors(idx, n) {
      var pool = cues.map(function (c, i) { return i; }).filter(function (i) { return i !== idx && cues[i][4] !== cues[idx][4]; });
      return pickN(pool, n, rnd).map(function (i) { return cues[i][4]; });
    }
    function zhDistractors(idx, n) {
      var pool = cues.map(function (c, i) { return i; }).filter(function (i) { return i !== idx && cues[i][2] !== cues[idx][2]; });
      return pickN(pool, n, rnd).map(function (i) { return cues[i][2]; });
    }

    /* (a) nghe hiểu: chọn nghĩa VI đúng của câu */
    cues.forEach(function (c, idx) {
      var wrong = viDistractors(idx, 3);
      if (wrong.length < 2) return;
      pack.listen.push({ type: "listen", cue: idx, options: shuffle([c[4]].concat(wrong), rnd), answer: c[4] });
    });
    /* (b) chép chính tả: mọi câu đều dùng được */
    cues.forEach(function (c, idx) { pack.dict.push({ type: "dict", cue: idx }); });
    /* (c) điền từ: câu có từ nội dung >= 2 chữ không thuộc stoplist */
    cues.forEach(function (c, idx) {
      var toks = segment(c[2], bank);
      var candPos = [];
      toks.forEach(function (t, ti) {
        if (t.w && !FILL_STOP[t.w.h] && t.w.h.length >= 2 && CONTENT_TYPES[t.w.t]) candPos.push(ti);
      });
      if (!candPos.length) {
        toks.forEach(function (t, ti) { if (t.w && !FILL_STOP[t.w.h] && t.w.h.length >= 2) candPos.push(ti); });
      }
      if (!candPos.length) return;
      var ti = candPos[Math.floor(rnd() * candPos.length)];
      var target = toks[ti].w;
      var pool = vocab.filter(function (w) {
        return w.h !== target.h && w.h.length >= 2 && !FILL_STOP[w.h];
      });
      var wrong = pickN(pool, 3, rnd);
      if (wrong.length < 2) return;
      var before = toks.slice(0, ti).map(function (t) { return t.text; }).join("");
      var after = toks.slice(ti + 1).map(function (t) { return t.text; }).join("");
      pack.fill.push({
        type: "fill", cue: idx, target: target,
        before: before, after: after,
        options: shuffle([target].concat(wrong), rnd),
        answer: target.h
      });
    });
    /* (d) luyện dịch: ghép thẻ từ theo câu; câu quá ngắn/quá dài -> chọn câu đúng */
    cues.forEach(function (c, idx) {
      var toks = segment(c[2], bank).filter(function (t) { return !t.punct; });
      if (toks.length >= 3 && toks.length <= 11) {
        var extra = pickN(vocab.filter(function (w) { return c[2].indexOf(w.h) < 0; }), 2, rnd);
        var tiles = toks.map(function (t) { return t.text; }).concat(extra.map(function (w) { return w.h; }));
        pack.trans.push({ type: "trans", cue: idx, mode: "tiles", tiles: shuffle(tiles, rnd), answer: toks.map(function (t) { return t.text; }) });
      } else {
        var wrong = zhDistractors(idx, 3);
        if (wrong.length >= 2) pack.trans.push({ type: "trans", cue: idx, mode: "choice", options: shuffle([c[2]].concat(wrong), rnd), answer: c[2] });
      }
    });
    return pack;
  }

  var Core = {
    buildBank: buildBank, segment: segment, storyVocab: storyVocab,
    buildPack: buildPack, checkDictation: checkDictation, normZh: normZh,
    mulberry32: mulberry32, seedFromStr: seedFromStr, shuffle: shuffle
  };
  if (typeof module !== "undefined" && module.exports) module.exports = Core;
  global.OTTER2_STORYPACK_CORE = Core;

  /* ================= PHẦN TRÌNH DUYỆT ================= */
  if (typeof document === "undefined") return;

  var LS_KEY = "otter2_storypack_v1";
  var PROGRESS_KEY = "otter2_hsk_vocab_progress_v1"; /* CHỈ ĐỌC */
  var PURPLE = "#7c3aed";
  var SELF_SRC = "";
  try { SELF_SRC = (document.currentScript && document.currentScript.src) || ""; } catch (e) {}

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function loadStore() {
    try { var o = JSON.parse(localStorage.getItem(LS_KEY) || "{}"); return o && typeof o === "object" ? o : {}; }
    catch (e) { return {}; }
  }
  function saveStore(o) { try { localStorage.setItem(LS_KEY, JSON.stringify(o)); } catch (e) {} }
  function storyProg(store, id) {
    if (!store.stories) store.stories = {};
    if (!store.stories[id]) store.stories[id] = { sessions: 0, last: 0, best: 0, byType: {}, updatedAt: 0 };
    return store.stories[id];
  }
  function learnedSet(level) {
    try {
      var o = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      var slot = o && o[String(level)];
      var arr = slot && Array.isArray(slot.learned) ? slot.learned : [];
      var s = {}; arr.forEach(function (h) { s[h] = 1; });
      return s;
    } catch (e) { return {}; }
  }
  function catalogEntry(key) {
    var cat = global.OTTER2_STORYVIDEO_CATALOG;
    if (!cat || !cat.levels) return null;
    for (var lv in cat.levels) {
      var arr = cat.levels[lv] || [];
      for (var i = 0; i < arr.length; i++) if (arr[i].key === key) return arr[i];
    }
    return null;
  }
  function subsFor(level, key) {
    var all = global.OTTER2_STORYSUB;
    if (all && all[String(level)] && all[String(level)][key]) return all[String(level)][key];
    return null;
  }
  var bankCache = {};
  function bankFor(level) {
    if (bankCache[level]) return bankCache[level];
    var all = global.OTTER2_HSK_ALL_DATA;
    if (!all || !Array.isArray(all.words)) return null;
    bankCache[level] = Core.buildBank(all.words, level);
    return bankCache[level];
  }
  /* Dự phòng: nếu trang chưa nạp ngân hàng từ (file dữ liệu là file ngoài,
     nạp cùng thư mục với module này — đúng URL trang đang dùng), tự nạp 1 lần. */
  var bankLoadTried = false;
  function tryLoadBank() {
    if (bankLoadTried || !SELF_SRC) return;
    bankLoadTried = true;
    var sc = document.createElement("script");
    sc.src = SELF_SRC.replace(/otter2-storypack\.js([?#].*)?$/, "otter2-hsk-all-data.js");
    sc.onerror = function () {};
    document.head.appendChild(sc);
  }

  /* ---------- âm thanh: đoạn video của truyện, dự phòng TTS ---------- */
  var segGuard = null;
  function stopSegment() {
    if (segGuard) { clearInterval(segGuard.timer); segGuard = null; }
    try { if (global.speechSynthesis) global.speechSynthesis.cancel(); } catch (e) {}
  }
  function playSegment(cue, zhText) {
    stopSegment();
    var vid = document.getElementById("ttcStoryVideoFrame");
    var usable = false;
    try { usable = !!(vid && vid.src && vid.src.indexOf("about:blank") !== 0 && vid.readyState >= 1); } catch (e) {}
    if (usable && cue) {
      try {
        vid.currentTime = Math.max(0, cue[0] + 0.02);
        var p = vid.play();
        if (p && p.catch) p.catch(function () { speakZh(zhText); });
        var end = cue[1];
        var timer = setInterval(function () {
          if (!vid || vid.paused || vid.currentTime >= end - 0.03) {
            try { vid.pause(); } catch (e) {}
            clearInterval(timer); if (segGuard && segGuard.timer === timer) segGuard = null;
          }
        }, 120);
        segGuard = { timer: timer };
        return "video";
      } catch (e) { /* rơi xuống TTS */ }
    }
    speakZh(zhText);
    return "tts";
  }
  function speakZh(text) {
    try {
      if (!global.speechSynthesis || !text) return;
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "zh-CN"; u.rate = 0.92;
      global.speechSynthesis.cancel();
      global.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------- CSS đi kèm: nạp file cạnh module, có style dự phòng tối thiểu ---------- */
  var cssLinked = false;
  function ensureCss() {
    if (cssLinked) return; cssLinked = true;
    if (SELF_SRC) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = SELF_SRC.replace(/otter2-storypack\.js([?#].*)?$/, "otter2-storypack.css");
      document.head.appendChild(link);
    }
  }

  /* ---------- trạng thái gắn vào phòng ---------- */
  var ui = {
    storyKey: null, level: 1, pack: null, tabStrip: null, panel: null,
    hiddenEls: [], session: null, screen: "home", disposers: []
  };

  function currentStory() {
    try {
      var api = global.__ttcStoryVideo;
      if (!api || !api.state) return null;
      var st = api.state();
      if (!st || !st.currentKey) return null;
      return { key: st.currentKey, level: Number(st.tab) || (catalogEntry(st.currentKey) || {}).level || 1 };
    } catch (e) { return null; }
  }

  function detachPack() {
    stopSegment();
    ui.hiddenEls.forEach(function (el) { el.style.display = ""; });
    ui.hiddenEls = [];
    if (ui.tabStrip && ui.tabStrip.parentNode) ui.tabStrip.parentNode.removeChild(ui.tabStrip);
    if (ui.panel && ui.panel.parentNode) ui.panel.parentNode.removeChild(ui.panel);
    ui.tabStrip = null; ui.panel = null; ui.pack = null; ui.storyKey = null; ui.session = null;
  }

  function attachPack(stage, cur) {
    var sub = subsFor(cur.level, cur.key);
    var bank = bankFor(cur.level);
    if (!sub || !bank) return false;
    var pack = Core.buildPack(cur.key, sub.cues, bank);
    if (!pack.cues.length) return false;
    ui.pack = pack; ui.storyKey = cur.key; ui.level = cur.level;

    var strip = document.createElement("div");
    strip.className = "ttc-pack-tabstrip";
    strip.id = "ttcStoryPackTabs";
    strip.setAttribute("role", "tablist");
    strip.innerHTML =
      '<button type="button" class="ttc-pack-tab is-cur" data-pack-tab="subs" role="tab">📜 Phụ đề</button>' +
      '<button type="button" class="ttc-pack-tab" data-pack-tab="pack" role="tab">📝 Bài tập</button>';

    var panel = document.createElement("div");
    panel.className = "ttc-pack-panel";
    panel.id = "ttcStoryPackPanel";
    panel.hidden = true;

    var anchor = stage.querySelector("#ttcStorySubList");
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(strip, anchor);
      anchor.parentNode.insertBefore(panel, anchor);
    } else {
      stage.appendChild(strip); stage.appendChild(panel);
    }
    ui.tabStrip = strip; ui.panel = panel;

    strip.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest("[data-pack-tab]") : null;
      if (!b) return;
      selectTab(b.getAttribute("data-pack-tab"));
    });
    renderHome();
    return true;
  }

  function selectTab(which) {
    if (!ui.tabStrip || !ui.panel) return;
    var tabs = ui.tabStrip.querySelectorAll(".ttc-pack-tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle("is-cur", tabs[i].getAttribute("data-pack-tab") === which);
    }
    var stage = document.getElementById("ttcStoryVideoStage");
    if (which === "pack") {
      ui.hiddenEls = [];
      ["ttcStorySubList", "ttcStorySubBar"].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) { ui.hiddenEls.push(el); el.style.display = "none"; }
      });
      var ab = stage ? stage.querySelector(".ttc-story-abrow") : null;
      if (ab) { ui.hiddenEls.push(ab); ab.style.display = "none"; }
      ui.panel.hidden = false;
      renderHome();
    } else {
      stopSegment();
      ui.session = null;
      ui.hiddenEls.forEach(function (el) { el.style.display = ""; });
      ui.hiddenEls = [];
      ui.panel.hidden = true;
    }
  }

  /* ---------- màn hình chính của gói ---------- */
  var TYPE_META = [
    { id: "listen", icon: "🎧", name: "Nghe hiểu", desc: "Nghe câu trong truyện, chọn nghĩa đúng" },
    { id: "dict", icon: "✍️", name: "Chép chính tả", desc: "Nghe và gõ lại câu chữ Hán" },
    { id: "fill", icon: "🧩", name: "Điền từ", desc: "Chọn từ còn thiếu trong câu" },
    { id: "trans", icon: "🔤", name: "Luyện dịch", desc: "Ghép câu tiếng Trung từ nghĩa tiếng Việt" },
    { id: "vocab", icon: "📚", name: "Từ vựng của truyện", desc: "Các từ xuất hiện trong truyện + tạo bộ từ" }
  ];
  function typeCounts(p) {
    var store = loadStore(); var sp = storyProg(store, ui.storyKey);
    var c = 0, t = 0;
    Object.keys(sp.byType || {}).forEach(function (k) { c += sp.byType[k][0]; t += sp.byType[k][1]; });
    return { c: c, t: t, sp: sp };
  }
  function renderHome() {
    if (!ui.panel || !ui.pack) return;
    ui.screen = "home"; ui.session = null;
    var entry = catalogEntry(ui.storyKey) || {};
    var tc = typeCounts();
    var btnLabel = tc.t === 0 ? "▶ Bắt đầu làm bài" : (tc.sp.best >= 10 ? "↻ Làm lại gói bài" : "▶ Làm tiếp gói bài");
    var rows = TYPE_META.map(function (m) {
      var avail = m.id === "vocab" ? ui.pack.vocab.length : (ui.pack[m.id] || []).length;
      return '<button type="button" class="ttc-pack-row" data-pack-open="' + m.id + '">' +
        '<span class="ttc-pack-row-ic" aria-hidden="true">' + m.icon + '</span>' +
        '<span class="ttc-pack-row-tx"><b>' + m.name + '</b><small>' + m.desc + '</small></span>' +
        '<span class="ttc-pack-row-n">' + avail + (m.id === "vocab" ? " từ" : " câu") + '</span>' +
        '<span class="ttc-pack-row-go" aria-hidden="true">›</span></button>';
    }).join("");
    ui.panel.innerHTML =
      '<div class="ttc-pack-head"><h4 class="ttc-pack-title">📝 Bài tập — ' + esc(entry.title_zh || ui.storyKey) + '</h4>' +
      '<p class="ttc-pack-sub">Bài tập sinh từ chính các câu trong truyện này.' +
      (tc.t ? ' Đã trả lời đúng <b>' + tc.c + "/" + tc.t + '</b> câu.' : ' Làm xong, Bé sẽ ghi nhớ tiến độ của bạn.') + '</p></div>' +
      '<button type="button" class="ttc-pack-cta" data-pack-start="mixed">' + btnLabel + '</button>' +
      '<div class="ttc-pack-rows">' + rows + '</div>';
    bindHome();
  }
  function bindHome() {
    var cta = ui.panel.querySelector("[data-pack-start]");
    if (cta) cta.addEventListener("click", function () { startSession("mixed"); });
    var rows = ui.panel.querySelectorAll("[data-pack-open]");
    for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function () {
        var t = this.getAttribute("data-pack-open");
        if (t === "vocab") renderVocab(); else startSession(t);
      });
    }
  }

  /* ---------- phiên làm bài ---------- */
  function buildQueue(kind) {
    var p = ui.pack, rnd = Math.random;
    if (kind !== "mixed") {
      return Core.shuffle(p[kind] || [], rnd).slice(0, 6);
    }
    var plan = ["listen", "fill", "trans", "listen", "dict", "fill", "trans", "fill", "dict", "trans"];
    var pools = {};
    plan.forEach(function (t) { if (!pools[t]) pools[t] = Core.shuffle(p[t] || [], rnd); });
    var q = [];
    plan.forEach(function (t) { if (pools[t].length) q.push(pools[t].shift()); });
    return q;
  }
  function startSession(kind) {
    var q = buildQueue(kind);
    if (!q.length) return;
    ui.session = { kind: kind, queue: q, idx: 0, correct: 0, answered: false };
    renderItem();
  }
  function cueOf(item) { return ui.pack.cues[item.cue]; }

  function shellTop(label) {
    var s = ui.session;
    return '<div class="ttc-pack-prog"><span>' + esc(label) + '</span>' +
      '<span>Câu ' + (s.idx + 1) + "/" + s.queue.length + ' · Đúng ' + s.correct + '</span></div>' +
      '<div class="ttc-pack-progbar"><i style="width:' + Math.round((s.idx / s.queue.length) * 100) + '%"></i></div>';
  }
  function feedbackHtml(ok, extra) {
    return '<div class="ttc-pack-fb ' + (ok ? "is-ok" : "is-bad") + '">' +
      (ok ? "🎉 Đúng rồi!" : "💡 Chưa đúng — xem lại nhé.") + (extra || "") + '</div>' +
      '<button type="button" class="ttc-pack-cta" data-pack-next="1">' +
      (ui.session.idx + 1 >= ui.session.queue.length ? "Xem kết quả →" : "Câu tiếp theo →") + '</button>';
  }
  function bindNext() {
    var b = ui.panel.querySelector("[data-pack-next]");
    if (b) b.addEventListener("click", function () {
      stopSegment();
      ui.session.idx++; ui.session.answered = false;
      if (ui.session.idx >= ui.session.queue.length) finishSession();
      else renderItem();
    });
  }
  function markAnswer(item, ok) {
    var s = ui.session;
    if (s.answered) return; s.answered = true;
    if (ok) s.correct++;
    var store = loadStore(); var sp = storyProg(store, ui.storyKey);
    if (!sp.byType[item.type]) sp.byType[item.type] = [0, 0];
    sp.byType[item.type][1]++; if (ok) sp.byType[item.type][0]++;
    sp.updatedAt = Date.now();
    saveStore(store);
  }

  function renderItem() {
    var s = ui.session; if (!s) return;
    var item = s.queue[s.idx];
    if (item.type === "listen") renderListen(item);
    else if (item.type === "dict") renderDict(item);
    else if (item.type === "fill") renderFill(item);
    else if (item.type === "trans") renderTrans(item);
  }

  function playBtnHtml() {
    return '<button type="button" class="ttc-pack-play" data-pack-play="1" aria-label="Nghe câu này">🔊 Nghe câu</button>';
  }
  function wirePlay(item) {
    var b = ui.panel.querySelector("[data-pack-play]");
    if (b) b.addEventListener("click", function () { playSegment(cueOf(item), cueOf(item)[2]); });
  }

  function renderListen(item) {
    var c = cueOf(item);
    ui.panel.innerHTML = shellTop("🎧 Nghe hiểu") +
      '<div class="ttc-pack-q">' + playBtnHtml() +
      '<p class="ttc-pack-hint">Nghe đoạn truyện rồi chọn nghĩa tiếng Việt đúng của câu vừa nghe.</p></div>' +
      '<div class="ttc-pack-opts">' + item.options.map(function (o, i) {
        return '<button type="button" class="ttc-pack-opt" data-opt="' + i + '">' + esc(o) + '</button>';
      }).join("") + '</div><div class="ttc-pack-fbzone"></div>';
    wirePlay(item);
    playSegment(c, c[2]);
    ui.panel.querySelectorAll("[data-opt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (ui.session.answered) return;
        var val = item.options[Number(btn.getAttribute("data-opt"))];
        var ok = val === item.answer;
        markAnswer(item, ok);
        btn.classList.add(ok ? "is-ok" : "is-bad");
        ui.panel.querySelectorAll("[data-opt]").forEach(function (b2) {
          if (item.options[Number(b2.getAttribute("data-opt"))] === item.answer) b2.classList.add("is-ok");
          b2.disabled = true;
        });
        ui.panel.querySelector(".ttc-pack-fbzone").innerHTML = feedbackHtml(ok,
          '<div class="ttc-pack-reveal"><span class="ttc-pack-zh">' + esc(c[2]) + '</span>' +
          '<span class="ttc-pack-py">' + esc(c[3]) + '</span></div>');
        bindNext();
      });
    });
  }

  function renderDict(item) {
    var c = cueOf(item);
    ui.panel.innerHTML = shellTop("✍️ Chép chính tả") +
      '<div class="ttc-pack-q">' + playBtnHtml() +
      '<p class="ttc-pack-hint">Nghe rồi gõ lại đúng câu chữ Hán. Không cần gõ dấu câu.</p>' +
      '<p class="ttc-pack-vi">Nghĩa: ' + esc(c[4]) + '</p></div>' +
      '<textarea class="ttc-pack-input" rows="2" lang="zh-CN" placeholder="Gõ câu chữ Hán vào đây…" aria-label="Ô gõ chép chính tả"></textarea>' +
      '<button type="button" class="ttc-pack-cta" data-pack-check="1">Kiểm tra</button>' +
      '<div class="ttc-pack-fbzone"></div>';
    wirePlay(item);
    playSegment(c, c[2]);
    ui.panel.querySelector("[data-pack-check]").addEventListener("click", function () {
      if (ui.session.answered) return;
      var val = ui.panel.querySelector(".ttc-pack-input").value;
      var res = Core.checkDictation(val, c[2]);
      markAnswer(item, res.exact);
      var colored = res.answer.split("").map(function (ch, i) {
        return '<span class="' + (res.marks[i] ? "ttc-pack-ch-ok" : "ttc-pack-ch-bad") + '">' + esc(ch) + '</span>';
      }).join("");
      ui.panel.querySelector(".ttc-pack-fbzone").innerHTML = feedbackHtml(res.exact,
        '<div class="ttc-pack-reveal"><span class="ttc-pack-zh">' + colored + '</span>' +
        '<span class="ttc-pack-py">' + esc(c[3]) + '</span>' +
        (res.exact ? "" : '<span class="ttc-pack-note">Đúng ' + res.correct + "/" + res.total + ' chữ — câu đúng ở trên, chữ đỏ là chỗ cần sửa.</span>') + '</div>');
      bindNext();
    });
  }

  function renderFill(item) {
    var c = cueOf(item);
    ui.panel.innerHTML = shellTop("🧩 Điền từ") +
      '<div class="ttc-pack-q"><p class="ttc-pack-sentence">' + esc(item.before) +
      '<span class="ttc-pack-blank">＿＿</span>' + esc(item.after) + '</p>' +
      '<p class="ttc-pack-vi">' + esc(c[4]) + '</p></div>' +
      '<div class="ttc-pack-opts">' + item.options.map(function (o, i) {
        return '<button type="button" class="ttc-pack-opt ttc-pack-opt-w" data-opt="' + i + '">' +
          '<b>' + esc(o.h) + '</b><small>' + esc(o.p) + '</small></button>';
      }).join("") + '</div><div class="ttc-pack-fbzone"></div>';
    ui.panel.querySelectorAll("[data-opt]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (ui.session.answered) return;
        var w = item.options[Number(btn.getAttribute("data-opt"))];
        var ok = w.h === item.answer;
        markAnswer(item, ok);
        btn.classList.add(ok ? "is-ok" : "is-bad");
        ui.panel.querySelectorAll("[data-opt]").forEach(function (b2) {
          if (item.options[Number(b2.getAttribute("data-opt"))].h === item.answer) b2.classList.add("is-ok");
          b2.disabled = true;
        });
        ui.panel.querySelector(".ttc-pack-fbzone").innerHTML = feedbackHtml(ok,
          '<div class="ttc-pack-reveal"><span class="ttc-pack-zh">' + esc(c[2]) + '</span>' +
          '<span class="ttc-pack-py">' + esc(c[3]) + '</span></div>');
        bindNext();
      });
    });
  }

  function renderTrans(item) {
    var c = cueOf(item);
    if (item.mode === "choice") {
      ui.panel.innerHTML = shellTop("🔤 Luyện dịch") +
        '<div class="ttc-pack-q"><p class="ttc-pack-hint">Câu tiếng Việt này dịch sang tiếng Trung là câu nào?</p>' +
        '<p class="ttc-pack-sentence">' + esc(c[4]) + '</p></div>' +
        '<div class="ttc-pack-opts">' + item.options.map(function (o, i) {
          return '<button type="button" class="ttc-pack-opt" data-opt="' + i + '">' + esc(o) + '</button>';
        }).join("") + '</div><div class="ttc-pack-fbzone"></div>';
      ui.panel.querySelectorAll("[data-opt]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (ui.session.answered) return;
          var ok = item.options[Number(btn.getAttribute("data-opt"))] === item.answer;
          markAnswer(item, ok);
          btn.classList.add(ok ? "is-ok" : "is-bad");
          ui.panel.querySelectorAll("[data-opt]").forEach(function (b2) {
            if (item.options[Number(b2.getAttribute("data-opt"))] === item.answer) b2.classList.add("is-ok");
            b2.disabled = true;
          });
          ui.panel.querySelector(".ttc-pack-fbzone").innerHTML = feedbackHtml(ok,
            '<div class="ttc-pack-reveal"><span class="ttc-pack-py">' + esc(c[3]) + '</span></div>');
          bindNext();
        });
      });
      return;
    }
    /* ghép thẻ từ */
    var built = [];
    ui.panel.innerHTML = shellTop("🔤 Luyện dịch") +
      '<div class="ttc-pack-q"><p class="ttc-pack-hint">Chạm vào các thẻ để ghép thành câu tiếng Trung đúng với nghĩa:</p>' +
      '<p class="ttc-pack-sentence">' + esc(c[4]) + '</p></div>' +
      '<div class="ttc-pack-built" aria-label="Câu đang ghép"><span class="ttc-pack-built-ph">Câu của bạn sẽ hiện ở đây…</span></div>' +
      '<div class="ttc-pack-tiles">' + item.tiles.map(function (t, i) {
        return '<button type="button" class="ttc-pack-tile" data-tile="' + i + '">' + esc(t) + '</button>';
      }).join("") + '</div>' +
      '<button type="button" class="ttc-pack-cta" data-pack-check="1">Kiểm tra</button>' +
      '<div class="ttc-pack-fbzone"></div>';
    var builtEl = ui.panel.querySelector(".ttc-pack-built");
    function redrawBuilt() {
      builtEl.innerHTML = built.length
        ? built.map(function (t) { return '<span class="ttc-pack-built-w">' + esc(t) + '</span>'; }).join("")
        : '<span class="ttc-pack-built-ph">Câu của bạn sẽ hiện ở đây…</span>';
    }
    ui.panel.querySelectorAll("[data-tile]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (ui.session.answered) return;
        var t = item.tiles[Number(btn.getAttribute("data-tile"))];
        if (btn.classList.contains("is-used")) {
          btn.classList.remove("is-used");
          var ix = built.indexOf(t); if (ix >= 0) built.splice(ix, 1);
        } else {
          btn.classList.add("is-used"); built.push(t);
        }
        redrawBuilt();
      });
    });
    ui.panel.querySelector("[data-pack-check]").addEventListener("click", function () {
      if (ui.session.answered) return;
      var ok = built.join("") === item.answer.join("");
      markAnswer(item, ok);
      ui.panel.querySelector(".ttc-pack-fbzone").innerHTML = feedbackHtml(ok,
        '<div class="ttc-pack-reveal"><span class="ttc-pack-zh">' + esc(c[2]) + '</span>' +
        '<span class="ttc-pack-py">' + esc(c[3]) + '</span></div>');
      bindNext();
    });
  }

  function finishSession() {
    var s = ui.session;
    var store = loadStore(); var sp = storyProg(store, ui.storyKey);
    sp.sessions++; sp.last = s.correct; if (s.correct > sp.best) sp.best = s.correct;
    sp.updatedAt = Date.now(); saveStore(store);
    var total = s.queue.length;
    ui.panel.innerHTML =
      '<div class="ttc-pack-done"><div class="ttc-pack-done-ic" aria-hidden="true">' + (s.correct >= total * 0.8 ? "🏆" : s.correct >= total * 0.5 ? "🌟" : "🌱") + '</div>' +
      '<h4 class="ttc-pack-title">Hoàn thành gói bài!</h4>' +
      '<p class="ttc-pack-sub">Bạn làm đúng <b>' + s.correct + "/" + total + '</b> câu. ' +
      (s.correct >= total * 0.8 ? "Xuất sắc — câu chuyện này bạn nắm chắc rồi!" : s.correct >= total * 0.5 ? "Tốt lắm — làm lại vài câu sai là thuộc hẳn." : "Không sao, xem lại truyện rồi thử lại nhé.") + '</p>' +
      '<button type="button" class="ttc-pack-cta" data-pack-home="1">← Về trang gói bài</button></div>';
    ui.session = null;
    ui.panel.querySelector("[data-pack-home]").addEventListener("click", renderHome);
  }

  /* ---------- màn hình từ vựng ---------- */
  function renderVocab() {
    ui.screen = "vocab"; ui.session = null;
    var learned = learnedSet(ui.level);
    var store = loadStore();
    var hasSet = !!(store.sets && store.sets[ui.storyKey]);
    var learnedCount = ui.pack.vocab.filter(function (w) { return learned[w.h]; }).length;
    var rows = ui.pack.vocab.map(function (w) {
      var isL = !!learned[w.h];
      return '<button type="button" class="ttc-pack-vrow" data-say="' + esc(w.h) + '">' +
        '<span class="ttc-pack-vw"><b>' + esc(w.h) + '</b><small>' + esc(w.p) + '</small></span>' +
        '<span class="ttc-pack-vm">' + esc(w.m) + '</span>' +
        (isL ? '<span class="ttc-pack-vbadge">✓ Đã học</span>' : '<span class="ttc-pack-vbadge is-new">Từ mới</span>') +
        '</button>';
    }).join("");
    ui.panel.innerHTML =
      '<div class="ttc-pack-head"><h4 class="ttc-pack-title">📚 Từ vựng của truyện</h4>' +
      '<p class="ttc-pack-sub">' + ui.pack.vocab.length + ' từ xuất hiện trong truyện · ' + learnedCount +
      ' từ bạn đã học trong Kho từ vựng. Chạm vào một từ để nghe đọc.</p></div>' +
      '<div class="ttc-pack-vlist">' + rows + '</div>' +
      (hasSet
        ? '<p class="ttc-pack-setdone">✓ Đã tạo bộ từ vựng của truyện này (' + ui.pack.vocab.length + ' từ) — bộ từ nằm trong tiến độ gói bài của bạn.</p>'
        : '<button type="button" class="ttc-pack-cta" data-pack-makeset="1">＋ Tạo bộ từ vựng (' + ui.pack.vocab.length + ' từ)</button>') +
      '<button type="button" class="ttc-pack-back" data-pack-home="1">← Về trang gói bài</button>';
    ui.panel.querySelectorAll("[data-say]").forEach(function (b) {
      b.addEventListener("click", function () { speakZh(b.getAttribute("data-say")); });
    });
    var mk = ui.panel.querySelector("[data-pack-makeset]");
    if (mk) mk.addEventListener("click", function () {
      var st = loadStore();
      if (!st.sets) st.sets = {};
      st.sets[ui.storyKey] = {
        title: (catalogEntry(ui.storyKey) || {}).title_zh || ui.storyKey,
        level: ui.level,
        words: ui.pack.vocab.map(function (w) { return w.h; }),
        createdAt: Date.now()
      };
      saveStore(st);
      renderVocab();
    });
    ui.panel.querySelector("[data-pack-home]").addEventListener("click", renderHome);
  }

  /* ---------- vòng đời: tự gắn / tháo theo phòng truyện ---------- */
  function tick() {
    var overlay = document.getElementById("ttcStoryVideoOverlay");
    var stage = document.getElementById("ttcStoryVideoStage");
    if (!overlay || !stage || !overlay.classList.contains("open")) {
      if (ui.storyKey) detachPack();
      return;
    }
    var cur = currentStory();
    if (!cur) { if (ui.storyKey) detachPack(); return; }
    if (ui.storyKey === cur.key && ui.tabStrip && document.body.contains(ui.tabStrip)) return;
    detachPack();
    /* chỉ gắn khi phụ đề của truyện đã sẵn (đồng nghĩa cổng premium đã qua) */
    if (subsFor(cur.level, cur.key) && stage.querySelector("#ttcStoryVideoFrame")) {
      if (!bankFor(cur.level)) { tryLoadBank(); return; }
      ensureCss();
      attachPack(stage, cur);
    }
  }
  var timer = setInterval(tick, 700);
  void timer;

  global.OTTER2_STORYPACK = {
    version: "1.0.0",
    core: Core,
    open: function (storyKey, level) {
      var stage = document.getElementById("ttcStoryVideoStage");
      if (!stage) return false;
      detachPack();
      return attachPack(stage, { key: storyKey, level: Number(level) || 1 });
    },
    selectTab: selectTab,
    _ui: ui
  };
})(typeof window !== "undefined" ? window : this);
