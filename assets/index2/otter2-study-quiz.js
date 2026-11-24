/* ============================================================
   HỌC XONG — LUYỆN NGAY — otter2-study-quiz.js (2026-11-25)

   Tính năng kiểu XuCup mang sang thichtiengtrung: học xong một
   lượt từ trong Phòng từ vựng là có ngay trắc nghiệm luyện tập
   sinh từ CHÍNH những từ vừa học (không bấm giờ, đúng/sai hiện
   ngay, cuối vòng có điểm + danh sách từ sai để luyện lại).

   Nguồn từ của vòng luyện, theo thứ tự ưu tiên:
   1) Từ đã xem trong buổi học này (module tự theo dõi thẻ chi
      tiết của engine kho từ — chỉ QUAN SÁT, không can thiệp).
   2) Từ đã học (learned[] trong otter2_hsk_vocab_progress_v1 —
      CHỈ ĐỌC) + từ lộ trình hôm nay (ttc_vocab_path_v1 — CHỈ ĐỌC,
      tới vị trí index hiện tại).
   3) Chưa có gì: vòng khởi động = 10 từ đầu của cấp đang học.

   LUẬT VÀNG (như khu thi): mỗi câu chỉ có ĐÚNG MỘT đáp án bảo vệ
   được — nhiễu bị loại khi: trùng chữ Hán, nghĩa chồng lấn với
   đáp án, điền vào câu ví dụ thành một câu có thật trong kho,
   hoặc hoán đổi cùng nhóm đặc biệt (số từ / đại từ / thời gian /
   vị trí) khi đáp án không được "ghim" bởi ngữ cảnh.

   LUẬT DỮ LIỆU CỨNG: không đọc-ghi bất kỳ khóa tiến độ nào của
   web; module chỉ GHI khóa riêng ttc_study_quiz_v1 (thống kê
   vòng luyện của chính tính năng này).
   Màu: Babbel Plain — nền trắng, chữ navy #16283F, cam #F97316.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_STUDYQUIZ__) return;
  window.__TTC_STUDYQUIZ__ = true;

  var ORANGE = "#F97316";
  var NAVY = "#16283F";
  var QUIZ_KEY = "ttc_study_quiz_v1";
  var PROGRESS_KEY = "otter2_hsk_vocab_progress_v1";
  var PATH_KEY = "ttc_vocab_path_v1";
  var ROUND_SIZE = 10;

  /* ---------------- tiện ích ---------------- */
  function $(sel, root) { try { return (root || document).querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function norm(s) {
    return String(s == null ? "" : s).toLocaleLowerCase("vi")
      .replace(/\s+/g, " ").replace(/[.。!！?？…]+$/g, "").trim();
  }
  function segments(m) {
    return String(m == null ? "" : m).split(/[;；,，、\/|]/)
      .map(function (x) { return norm(x); }).filter(Boolean);
  }
  /* Hai gloss "chồng lấn" khi một cụm của bên này chứa / bị chứa
     bởi một cụm của bên kia (cùng cách khu thi soi nghĩa). */
  function glossOverlap(a, b) {
    var sa = segments(a), sb = segments(b), i, j;
    if (!sa.length || !sb.length) return norm(a) === norm(b) && !!norm(a);
    for (i = 0; i < sa.length; i++) for (j = 0; j < sb.length; j++) {
      if (sa[i] === sb[j] || sa[i].indexOf(sb[j]) >= 0 || sb[j].indexOf(sa[i]) >= 0) return true;
    }
    return false;
  }
  function lsGet(key) {
    try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }

  /* ---------------- dữ liệu kho từ ---------------- */
  function packFor(level) {
    try {
      if (typeof window.otter2GetWordsForHsk === "function") {
        var w = window.otter2GetWordsForHsk(level);
        if (Array.isArray(w) && w.length) return w;
      }
    } catch (e) {}
    try {
      var p = window.OTTER2_HSK_PACKS && window.OTTER2_HSK_PACKS[level];
      if (Array.isArray(p) && p.length) return p;
      if (p && Array.isArray(p.words)) return p.words;
    } catch (e) {}
    return [];
  }
  var _hanziSet = null, _sentenceSet = null;
  function bankCaches() {
    if (_hanziSet) return;
    _hanziSet = {}; _sentenceSet = {};
    try {
      var all = (window.OTTER2_HSK_ALL_DATA && window.OTTER2_HSK_ALL_DATA.words) || [];
      for (var i = 0; i < all.length; i++) {
        var w = all[i];
        if (w.h) _hanziSet[w.h] = 1;
        if (w.example) _sentenceSet[String(w.example).replace(/\s+/g, "")] = 1;
      }
    } catch (e) {}
  }
  function countOcc(s, sub) {
    if (!sub) return 0;
    return String(s || "").split(String(sub)).length - 1;
  }

  /* ---------------- cấp đang học ---------------- */
  function engineState() {
    return window.otter2HskVocab || window.otter2Hsk1 || null;
  }
  function roadmapStore() {
    var s = lsGet(PATH_KEY);
    if (s && typeof s === "object") return s;
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PATH_KEY + "__u_") === 0) {
          var v = lsGet(k);
          if (v && typeof v === "object") return v;
        }
      }
    } catch (e) {}
    return null;
  }
  function activeLevel() {
    var st = engineState();
    if (st && Array.isArray(st.words) && st.words.length && Number(st.currentHSK) >= 1) {
      return Number(st.currentHSK);
    }
    var store = roadmapStore();
    if (store) {
      var lv = Number(store.activeLevel || store.level);
      if (lv >= 1 && lv <= 9) return lv;
    }
    if (st && Number(st.currentHSK) >= 1) return Number(st.currentHSK);
    return 1;
  }

  /* ---------------- theo dõi buổi học (chỉ quan sát) ---------------- */
  var sessionByLevel = {}; /* { level: [hanzi, ...] } thứ tự xem */
  var sessionSeen = {};    /* { level: {hanzi:1} } */
  var lastDetailH = "";
  function noteSessionWord(level, hanzi) {
    if (!hanzi || !(level >= 1 && level <= 9)) return;
    if (!sessionByLevel[level]) { sessionByLevel[level] = []; sessionSeen[level] = {}; }
    if (!sessionSeen[level][hanzi]) {
      sessionSeen[level][hanzi] = 1;
      sessionByLevel[level].push(hanzi);
    }
  }
  function watchTick() {
    var st = engineState();
    if (!st) return;
    var lv = Number(st.currentHSK) || 0;
    if (lv >= 1 && lv <= 9 && st.learned) {
      for (var h in st.learned) if (st.learned[h]) noteSessionWord(lv, h);
    }
    var d = byId("otter2Hsk1Detail");
    if (d && !d.hidden && Array.isArray(st.currentList)) {
      var w = st.currentList[Number(st.detailIndex) || 0];
      if (w && w.h && w.h !== lastDetailH) {
        lastDetailH = w.h;
        noteSessionWord(lv, w.h);
      }
      updateDetailOffer(st);
    }
  }

  /* ---------------- nguồn từ của vòng luyện ---------------- */
  function entriesForHanzi(pack, hanziList) {
    var first = {};
    pack.forEach(function (w) { if (w.h && !first[w.h]) first[w.h] = w; });
    var out = [], used = {};
    (hanziList || []).forEach(function (h) {
      if (first[h] && !used[h]) { used[h] = 1; out.push(first[h]); }
    });
    return out;
  }
  function resolveSource() {
    var level = activeLevel();
    var pack = packFor(level);
    if (!pack.length) return { level: level, words: [], kind: "empty", label: "" };

    var sess = entriesForHanzi(pack, sessionByLevel[level] || []);
    if (sess.length >= 4) {
      return { level: level, words: sess.slice(-30), kind: "session",
               label: "Từ bạn vừa học trong buổi này" };
    }
    var merged = {}, mergedList = [];
    function addAll(list) {
      (list || []).forEach(function (w) {
        if (w && w.h && !merged[w.h]) { merged[w.h] = 1; mergedList.push(w); }
      });
    }
    addAll(sess);
    var prog = lsGet(PROGRESS_KEY);
    var slot = prog && prog[String(level)];
    var learned = slot && Array.isArray(slot.learned) ? slot.learned : [];
    addAll(entriesForHanzi(pack, learned.slice(-15)));
    var store = roadmapStore();
    var entry = null;
    if (store) {
      if (store.byLevel && store.byLevel[String(level)]) entry = store.byLevel[String(level)];
      else if (Number(store.level) === level) entry = store;
    }
    if (entry && Number(entry.index) > 0) {
      addAll(pack.slice(Math.max(0, Number(entry.index) - 15), Number(entry.index)));
    }
    if (mergedList.length >= 4) {
      return { level: level, words: mergedList.slice(-30), kind: "learned",
               label: "Từ đã học + lộ trình của bạn" };
    }
    return { level: level, words: pack.slice(0, ROUND_SIZE), kind: "starter",
             label: "Vòng khởi động — 10 từ đầu HSK " + level };
  }

  /* ---------------- sinh câu hỏi (luật vàng: 1 đáp án) ---------------- */
  var NUMERALS = { "一": 1, "二": 1, "三": 1, "四": 1, "五": 1, "六": 1, "七": 1, "八": 1, "九": 1, "十": 1, "百": 1, "千": 1, "万": 1, "两": 1, "几": 1, "多": 1, "半": 1 };
  var PRONOUNS = { "我": 1, "你": 1, "他": 1, "她": 1, "它": 1, "我们": 1, "你们": 1, "他们": 1, "她们": 1, "它们": 1, "谁": 1, "这": 1, "那": 1, "自己": 1 };
  var TIMEWORDS = { "今天": 1, "明天": 1, "昨天": 1, "上午": 1, "下午": 1, "晚上": 1, "早上": 1, "现在": 1, "时候": 1, "时间": 1, "年": 1, "月": 1, "日": 1, "星期": 1, "点": 1, "以前": 1, "以后": 1 };
  var POSITIONS = { "上": 1, "下": 1, "前": 1, "后": 1, "左": 1, "右": 1, "里": 1, "外": 1, "东": 1, "西": 1, "南": 1, "北": 1, "中": 1, "旁边": 1, "上面": 1, "下面": 1, "里面": 1, "外面": 1 };

  /* Khoét từ tại vị trí "sạch": chỗ khoét không nằm giữa một từ
     dài hơn trong kho (cùng cách blankOutSmart của khu thi). */
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
      var dirty = false;
      var cands = [];
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
  /* Nhiễu điền khuyết bị loại khi: điền vào thành câu có thật
     trong kho; hoán đổi cùng nhóm đặc biệt (số từ trong khung
     lượng từ / đại từ / thời gian / vị trí) lúc đáp án không
     được ghim (từ đích xuất hiện ≥2 lần trong câu). */
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
      if (mode === "meaning") {
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
      opts = shuffle([{ txt: target.h, ok: true }].concat(distract.map(function (d) { return { txt: d.h, ok: false }; })));
    }
    return { w: target, type: type, blanked: blanked, opts: opts, picked: -1 };
  }
  function buildRound(words, pack) {
    var targets = shuffle(words).slice(0, ROUND_SIZE);
    var qs = [];
    targets.forEach(function (w) {
      var q = buildQuestion(w, pack);
      if (q) qs.push(q);
    });
    return qs;
  }

  /* ---------------- phát âm (TTS của trình duyệt) ---------------- */
  function say(text) {
    if (!text || !("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "zh-CN"; u.rate = 0.92;
      var voices = speechSynthesis.getVoices() || [];
      var zh = null;
      for (var i = 0; i < voices.length; i++) {
        var L = String(voices[i].lang || "").toLowerCase().replace(/_/g, "-");
        if (L.indexOf("zh-cn") === 0) { zh = voices[i]; break; }
      }
      if (zh) u.voice = zh;
      speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------------- thống kê riêng của tính năng ---------------- */
  function loadStats() {
    var s = lsGet(QUIZ_KEY);
    return s && typeof s === "object" ? s : { rounds: 0, best: {}, history: [] };
  }
  function saveStats(level, score, total) {
    try {
      var s = loadStats();
      s.rounds = (Number(s.rounds) || 0) + 1;
      var k = String(level);
      if (!s.best[k] || score > s.best[k].score) s.best[k] = { score: score, total: total };
      s.history = (Array.isArray(s.history) ? s.history : []).concat([{ at: Date.now(), level: level, score: score, total: total }]).slice(-20);
      localStorage.setItem(QUIZ_KEY, JSON.stringify(s));
    } catch (e) {}
  }

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcStudyQuizStyle")) return;
    var css = [
      ".ttc-sq-card{margin:12px 0 4px;border:1.5px solid " + ORANGE + ";border-radius:16px;background:#fff;padding:14px 16px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}",
      ".ttc-sq-card-ico{font-size:30px;line-height:1}",
      ".ttc-sq-card-main{flex:1 1 220px;min-width:200px}",
      ".ttc-sq-card-title{display:block;font-size:16.5px;font-weight:900;color:" + NAVY + "}",
      ".ttc-sq-card-sub{display:block;font-size:12.5px;color:#64748b;font-weight:600;margin-top:2px}",
      ".ttc-sq-start{border:none;background:" + ORANGE + ";color:#fff;font:inherit;font-size:14.5px;font-weight:800;border-radius:999px;padding:11px 20px;cursor:pointer;min-height:48px}",
      ".ttc-sq-start:active{transform:scale(.97)}",
      "#ttcSqOverlay{position:fixed;inset:0;background:rgba(22,40,63,.55);z-index:12050;display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:14px 10px calc(14px + env(safe-area-inset-bottom,0px))}",
      "#ttcSqOverlay[hidden]{display:none}",
      ".ttcsq-box{background:#fff;border-radius:18px;width:min(560px,100%);padding:18px 16px 16px;position:relative;color:" + NAVY + ";box-shadow:0 18px 50px rgba(22,40,63,.35)}",
      ".ttcsq-x{position:absolute;top:10px;right:10px;width:40px;height:40px;border:none;border-radius:50%;background:#f1f5f9;color:" + NAVY + ";font-size:17px;cursor:pointer}",
      ".ttcsq-title{font-size:19px;font-weight:900;margin:2px 44px 4px 0}",
      ".ttcsq-sub{font-size:13px;color:#64748b;font-weight:600;margin-bottom:12px}",
      ".ttcsq-prog{font-size:12.5px;font-weight:800;color:#64748b;display:flex;justify-content:space-between;margin-bottom:10px}",
      ".ttcsq-prompt{text-align:center;padding:10px 4px 4px}",
      ".ttcsq-hanzi{font-size:44px;font-weight:900;line-height:1.15}",
      ".ttcsq-pinyin{font-size:16px;color:#64748b;font-weight:700;margin-top:2px}",
      ".ttcsq-mean{font-size:21px;font-weight:800;line-height:1.35;padding:6px 2px}",
      ".ttcsq-cloze{font-size:21px;font-weight:800;line-height:1.5;padding:6px 2px}",
      ".ttcsq-cloze .ttcsq-blank{color:" + ORANGE + ";letter-spacing:2px}",
      ".ttcsq-q{font-size:14px;font-weight:700;color:#64748b;margin-top:8px}",
      ".ttcsq-say{border:none;background:#FFF4EC;color:" + ORANGE + ";border-radius:999px;font:inherit;font-size:13px;font-weight:800;padding:7px 13px;cursor:pointer;margin-top:8px;min-height:40px}",
      ".ttcsq-opts{display:grid;gap:9px;margin-top:14px}",
      ".ttcsq-opt{border:1.5px solid #E3E8EF;background:#fff;border-radius:13px;padding:13px 14px;font:inherit;font-size:16px;font-weight:700;color:" + NAVY + ";text-align:left;cursor:pointer;min-height:52px}",
      ".ttcsq-opt:active{transform:scale(.99)}",
      ".ttcsq-opt.is-ok{border-color:#16a34a;background:#f0fdf4;color:#15803d}",
      ".ttcsq-opt.is-bad{border-color:#dc2626;background:#fef2f2;color:#b91c1c}",
      ".ttcsq-opt[disabled]{cursor:default;opacity:.92}",
      ".ttcsq-explain{margin-top:12px;background:#F7F8FA;border-radius:13px;padding:11px 13px;font-size:14px;line-height:1.5}",
      ".ttcsq-explain b{font-size:16px}",
      ".ttcsq-explain .ttcsq-hv{color:#dc2626;font-weight:800}",
      ".ttcsq-ex{color:#475569;font-size:13.5px;margin-top:4px}",
      ".ttcsq-next{margin-top:12px;width:100%;border:none;background:" + ORANGE + ";color:#fff;font:inherit;font-size:15.5px;font-weight:800;border-radius:999px;padding:13px;cursor:pointer;min-height:52px}",
      ".ttcsq-ghost{margin-top:9px;width:100%;border:1.5px solid #E3E8EF;background:#fff;color:" + NAVY + ";font:inherit;font-size:14.5px;font-weight:800;border-radius:999px;padding:12px;cursor:pointer;min-height:50px}",
      ".ttcsq-score{font-size:40px;font-weight:900;text-align:center;margin:8px 0 2px}",
      ".ttcsq-score-sub{text-align:center;font-size:14px;font-weight:700;color:#64748b;margin-bottom:12px}",
      ".ttcsq-missed{border:1px solid #FDE8D7;background:#FFF9F3;border-radius:13px;padding:11px 13px;margin-bottom:12px}",
      ".ttcsq-missed h4{margin:0 0 8px;font-size:14px;color:" + NAVY + "}",
      ".ttcsq-miss{font-size:14px;line-height:1.5;padding:7px 0;border-top:1px dashed #F3D9BE}",
      ".ttcsq-miss:first-of-type{border-top:none}",
      ".ttcsq-miss .ttcsq-hv{color:#dc2626;font-weight:800}",
      ".ttcsq-miss .ttcsq-ex{color:#64748b;font-size:13px}"
    ];
    var st = document.createElement("style");
    st.id = "ttcStudyQuizStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- lớp phủ quiz ---------------- */
  var quiz = null; /* { level, pack, qs, idx, score, sourceLabel, missed: [] } */

  function ensureOverlay() {
    var ov = byId("ttcSqOverlay");
    if (ov) return ov;
    ov = document.createElement("div");
    ov.id = "ttcSqOverlay";
    ov.hidden = true;
    ov.innerHTML = '<div class="ttcsq-box" role="dialog" aria-modal="true" aria-label="Học xong — Luyện ngay">' +
      '<button type="button" class="ttcsq-x" data-sq="close" aria-label="Đóng">✕</button>' +
      '<div id="ttcSqBody"></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener("click", function (ev) {
      if (ev.target === ov) closeQuiz();
      var t = ev.target && ev.target.closest ? ev.target.closest("[data-sq]") : null;
      if (!t) return;
      var act = t.getAttribute("data-sq");
      if (act === "close") closeQuiz();
      else if (act === "start") startRound(resolveSource());
      else if (act === "next") nextQuestion();
      else if (act === "retry") retryMissed();
      else if (act === "again") startRound({ level: quiz.level, words: quiz.sourceWords, kind: quiz.kind, label: quiz.sourceLabel });
      else if (act === "say") say(t.getAttribute("data-text") || "");
      else if (act === "opt") pickOption(Number(t.getAttribute("data-i")));
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && ov && !ov.hidden) closeQuiz();
    });
    return ov;
  }
  function openQuiz() {
    ensureStyle();
    var ov = ensureOverlay();
    ov.hidden = false;
    renderStart();
    try { ov.scrollTop = 0; } catch (e) {}
  }
  function closeQuiz() {
    var ov = byId("ttcSqOverlay");
    if (ov) ov.hidden = true;
    try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch (e) {}
  }
  function renderStart() {
    var body = byId("ttcSqBody");
    if (!body) return;
    var src = resolveSource();
    var stats = loadStats();
    var best = stats.best[String(src.level)];
    var n = Math.min(ROUND_SIZE, src.words.length);
    body.innerHTML =
      '<div class="ttcsq-title">🧠 Học xong — Luyện ngay</div>' +
      '<div class="ttcsq-sub">' + esc(src.label || "Kho từ") + " · HSK " + src.level +
      (best ? " · 🏅 Kỷ lục cấp này: " + best.score + "/" + best.total : "") + "</div>" +
      (src.kind === "empty"
        ? '<p style="font-size:14.5px;line-height:1.55">Chưa tải được kho từ. Bạn mở Phòng từ vựng, chọn một cấp HSK rồi quay lại nhé.</p>'
        : '<p style="font-size:14.5px;line-height:1.55">' + n + " câu trắc nghiệm sinh từ chính những từ " +
          (src.kind === "starter" ? "đầu tiên của cấp này" : "bạn đã học") +
          ": chọn nghĩa, chọn từ và điền vào câu ví dụ.<br>⏱ Không bấm giờ — cứ thong thả, đúng sai hiện ngay.</p>" +
          '<button type="button" class="ttcsq-next" data-sq="start">▶ Bắt đầu luyện</button>') +
      '<button type="button" class="ttcsq-ghost" data-sq="close">📚 Học tiếp</button>';
  }
  function startRound(src) {
    if (!src || !src.words || !src.words.length) { renderStart(); return; }
    var pack = packFor(src.level);
    var qs = buildRound(src.words, pack);
    if (!qs.length) { renderStart(); return; }
    quiz = { level: src.level, pack: pack, qs: qs, idx: 0, score: 0,
             sourceWords: src.words, sourceLabel: src.label, kind: src.kind, missed: [] };
    renderQuestion();
  }
  function explainHtml(w) {
    var hv = w.v ? ' · <span class="ttcsq-hv">' + esc(w.v) + "</span>" : "";
    var ex = w.example
      ? '<div class="ttcsq-ex">📖 ' + esc(w.example) +
        (w.examplePinyin ? " · " + esc(w.examplePinyin) : "") +
        (w.exampleMeaning ? "<br>" + esc(w.exampleMeaning) : "") + "</div>"
      : "";
    return '<div class="ttcsq-explain">💡 <b>' + esc(w.h) + "</b> " + esc(w.p || "") + hv +
      " — " + esc(w.m || "") + ex + "</div>";
  }
  function renderQuestion() {
    var body = byId("ttcSqBody");
    if (!body || !quiz) return;
    var q = quiz.qs[quiz.idx];
    var w = q.w;
    var prompt = "";
    if (q.type === "meaning") {
      prompt = '<div class="ttcsq-hanzi">' + esc(w.h) + '</div>' +
        '<div class="ttcsq-pinyin">' + esc(w.p || "") + (w.t ? " · " + esc(w.t) : "") + "</div>" +
        '<button type="button" class="ttcsq-say" data-sq="say" data-text="' + esc(w.h) + '">🔊 Nghe phát âm</button>' +
        '<div class="ttcsq-q">Từ này nghĩa là gì?</div>';
    } else if (q.type === "word") {
      prompt = '<div class="ttcsq-mean">“' + esc(w.m || "") + '”</div>' +
        '<div class="ttcsq-q">Nghĩa này là của từ nào?</div>';
    } else {
      var blanked = String(q.blanked || "").replace("＿＿", '<span class="ttcsq-blank">＿＿</span>');
      prompt = '<div class="ttcsq-cloze">' + blanked + '</div>' +
        '<div class="ttcsq-q">Chọn từ đúng điền vào chỗ trống</div>';
    }
    body.innerHTML =
      '<div class="ttcsq-prog"><span>Câu ' + (quiz.idx + 1) + " / " + quiz.qs.length + "</span>" +
      "<span>HSK " + quiz.level + " · Đúng: " + quiz.score + "</span></div>" +
      '<div class="ttcsq-prompt">' + prompt + "</div>" +
      '<div class="ttcsq-opts">' + q.opts.map(function (o, i) {
        return '<button type="button" class="ttcsq-opt" data-sq="opt" data-i="' + i + '">' + esc(o.txt) + "</button>";
      }).join("") + "</div>" +
      '<div id="ttcSqExplain"></div>';
    try { byId("ttcSqOverlay").scrollTop = 0; } catch (e) {}
  }
  function pickOption(i) {
    if (!quiz) return;
    var q = quiz.qs[quiz.idx];
    if (q.picked >= 0) return;
    q.picked = i;
    var ok = !!q.opts[i].ok;
    if (ok) quiz.score++; else quiz.missed.push(q.w);
    var body = byId("ttcSqBody");
    if (!body) return;
    body.querySelectorAll(".ttcsq-opt").forEach(function (b, bi) {
      b.disabled = true;
      if (q.opts[bi].ok) b.classList.add("is-ok");
      else if (bi === i) b.classList.add("is-bad");
    });
    var ex = byId("ttcSqExplain");
    if (ex) {
      ex.innerHTML = '<div style="font-weight:800;font-size:15px;margin-top:12px">' +
        (ok ? "✅ Đúng rồi!" : "❌ Chưa đúng — đáp án đúng đã được tô xanh") + "</div>" +
        explainHtml(q.w) +
        '<button type="button" class="ttcsq-next" data-sq="next">' +
        (quiz.idx + 1 >= quiz.qs.length ? "🏁 Xem kết quả" : "Câu tiếp →") + "</button>";
    }
  }
  function nextQuestion() {
    if (!quiz) return;
    quiz.idx++;
    if (quiz.idx >= quiz.qs.length) renderEnd();
    else renderQuestion();
  }
  function renderEnd() {
    var body = byId("ttcSqBody");
    if (!body || !quiz) return;
    var total = quiz.qs.length, score = quiz.score;
    saveStats(quiz.level, score, total);
    var msg = score === total ? "🏆 Tuyệt vời! Đúng hết — nhớ lâu lắm đây!"
      : score >= Math.ceil(total * 0.7) ? "🎉 Tốt lắm! Gần như thuộc hết rồi."
      : score >= Math.ceil(total * 0.4) ? "💪 Khá ổn! Luyện lại mấy từ sai là chắc ngay."
      : "🌱 Mới bắt đầu thôi — luyện lại từ sai một vòng là nhớ ngay.";
    var missedHtml = "";
    if (quiz.missed.length) {
      missedHtml = '<div class="ttcsq-missed"><h4>📝 Từ cần ôn lại (' + quiz.missed.length + ")</h4>" +
        quiz.missed.map(function (w) {
          var hv = w.v ? ' · <span class="ttcsq-hv">' + esc(w.v) + "</span>" : "";
          return '<div class="ttcsq-miss"><b>' + esc(w.h) + "</b> " + esc(w.p || "") + hv + " — " + esc(w.m || "") +
            (w.example ? '<div class="ttcsq-ex">📖 ' + esc(w.example) +
              (w.exampleMeaning ? " — " + esc(w.exampleMeaning) : "") + "</div>" : "") + "</div>";
        }).join("") + "</div>";
    }
    body.innerHTML =
      '<div class="ttcsq-title">🧠 Học xong — Luyện ngay</div>' +
      '<div class="ttcsq-score">' + score + " / " + total + "</div>" +
      '<div class="ttcsq-score-sub">' + msg + "</div>" +
      missedHtml +
      (quiz.missed.length ? '<button type="button" class="ttcsq-next" data-sq="retry">🔁 Luyện lại từ sai (' + quiz.missed.length + ")</button>" : "") +
      '<button type="button" class="ttcsq-ghost" data-sq="again">↻ Vòng mới</button>' +
      '<button type="button" class="ttcsq-ghost" data-sq="close">📚 Học tiếp</button>';
    try { byId("ttcSqOverlay").scrollTop = 0; } catch (e) {}
  }
  function retryMissed() {
    if (!quiz || !quiz.missed.length) return;
    var qs = buildRound(quiz.missed.slice(), quiz.pack);
    if (!qs.length) { renderEnd(); return; }
    quiz = { level: quiz.level, pack: quiz.pack, qs: qs, idx: 0, score: 0,
             sourceWords: quiz.sourceWords, sourceLabel: quiz.sourceLabel, kind: quiz.kind, missed: [] };
    renderQuestion();
  }

  /* ---------------- điểm vào trong Phòng từ vựng ---------------- */
  function sourceSummary() {
    var src = resolveSource();
    return src;
  }
  function buildEntry() {
    var journey = byId("otter2HskJourney");
    if (!journey) return false;
    ensureStyle();
    if (!byId("ttcStudyQuizCard")) {
      var card = document.createElement("div");
      card.className = "ttc-sq-card";
      card.id = "ttcStudyQuizCard";
      card.innerHTML =
        '<span class="ttc-sq-card-ico" aria-hidden="true">🧠</span>' +
        '<span class="ttc-sq-card-main"><span class="ttc-sq-card-title">Học xong — Luyện ngay</span>' +
        '<span class="ttc-sq-card-sub" id="ttcSqCardSub">Trắc nghiệm ngay từ những từ bạn vừa học — không bấm giờ</span></span>' +
        '<button type="button" class="ttc-sq-start" id="ttcSqCardBtn">▶ Luyện ngay</button>';
      var bar = byId("ttcVocabRoomBar");
      if (bar && bar.parentNode === journey) journey.insertBefore(card, bar.nextSibling);
      else if (journey.firstElementChild && journey.firstElementChild.nextSibling) {
        journey.insertBefore(card, journey.firstElementChild.nextSibling);
      } else journey.insertBefore(card, journey.firstChild);
      byId("ttcSqCardBtn").addEventListener("click", openQuiz);
    }
    var picker = journey.querySelector("[data-vr-picker]");
    if (picker && !picker.querySelector("[data-sq-game]")) {
      var tile = document.createElement("button");
      tile.type = "button";
      tile.className = "ttc-vr-game";
      tile.setAttribute("data-sq-game", "studyquiz");
      tile.innerHTML =
        '<span class="ttc-vr-gico" aria-hidden="true">🧠</span>' +
        '<span><span class="ttc-vr-gname">Học xong — Luyện ngay</span>' +
        '<span class="ttc-vr-gsub">Trắc nghiệm ngay từ những từ vừa học</span></span>';
      tile.addEventListener("click", openQuiz);
      picker.insertBefore(tile, picker.firstChild);
    }
    refreshCardSub();
    return true;
  }
  function refreshCardSub() {
    var sub = byId("ttcSqCardSub");
    if (!sub) return;
    try {
      var src = sourceSummary();
      if (src.words && src.words.length) {
        sub.textContent = src.label + " · HSK " + src.level + " · " +
          Math.min(ROUND_SIZE, src.words.length) + " câu, không bấm giờ";
      }
    } catch (e) {}
  }

  /* Nút mời luyện ngay trong thẻ chi tiết khi học tới từ CUỐI
     của danh sách đang xem (học xong một lượt thẻ). */
  function updateDetailOffer(st) {
    var actions = $(".otter2-hsk1-detail-actions");
    if (!actions) return;
    var btn = byId("ttcSqDetailOffer");
    var atEnd = Array.isArray(st.currentList) && st.currentList.length >= 4 &&
      Number(st.detailIndex) === st.currentList.length - 1;
    if (atEnd) {
      if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.className = "otter2-btn";
        btn.id = "ttcSqDetailOffer";
        btn.textContent = "🧠 Luyện ngay các từ vừa học";
        btn.style.cssText = "background:" + ORANGE + ";color:#fff;border-color:" + ORANGE + ";font-weight:800";
        btn.addEventListener("click", function () {
          var close = byId("otter2Hsk1DetailClose");
          if (close) close.click();
          openQuiz();
        });
        actions.appendChild(btn);
      }
      btn.hidden = false;
    } else if (btn) {
      btn.hidden = true;
    }
  }

  function init() {
    ensureStyle();
    if (!buildEntry()) { setTimeout(init, 600); return; }
    setInterval(function () {
      watchTick();
      if (!byId("ttcStudyQuizCard")) buildEntry();
    }, 700);
    setInterval(refreshCardSub, 10000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.__ttcStudyQuiz = { open: openQuiz, resolveSource: resolveSource, buildRound: buildRound };
})();
