/* ============================================================
   OTTER2 EXAM — Khu Luyện thi HSK (đề thi thử TỰ SINH từ kho dữ
   liệu của trang: từ vựng + câu ví dụ + kho bài đọc). Đây là đề
   LUYỆN TẬP tự sinh, không phải đề thi HSK chính thức.

   Cộng thêm hoàn toàn (additive): không sửa script inline nào
   trong index2.html. Thẻ mở "🏆 Luyện thi HSK" được tiêm vào
   hàng .otter2-feature cạnh #otter2FeatPronun lúc chạy; overlay
   #ttcExamOverlay dựng ở document.body theo mẫu
   #ttcPronunciationOverlay (.ttc-hub-card + class "open").

   Cổng Premium: đúng mẫu module Luyện phát âm — HSK 1–2 tự do;
   chọn cấp >= 3 (và lúc bấm Bắt đầu) phải qua
   window.checkPremiumAccess(level); phần Đọc dùng chung kho
   window.__ttcReadingBank của module Luyện đọc và KHÔNG có
   đường nào tới nội dung cấp >= 3 ngoài cổng đó.

   Rái cá hướng dẫn: zone "exam" đã đăng ký trong otter2-guide.js
   (dock dưới-trái, câm giọng, chỉ chữ/emoji như mọi khu học).
   ============================================================ */
(function () {
  "use strict";
  if (window.__OTTER2_EXAM_V1__) return;
  window.__OTTER2_EXAM_V1__ = true;

  /* ---------------- Tiện ích ---------------- */
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickOne(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }
  function normOpt(s) { return String(s == null ? "" : s).replace(/\s+/g, " ").trim().toLowerCase(); }
  function normPy(s) { return normOpt(s).replace(/\s+/g, ""); }
  function hanOnly(s) { return String(s || "").replace(/[^㐀-鿿豈-﫿]/g, ""); }

  /* ---------------- Truy cập dữ liệu ---------------- */
  function allWords() {
    if (Array.isArray(window.words) && window.words.length) return window.words;
    if (window.OTTER2_HSK_ALL_DATA && Array.isArray(window.OTTER2_HSK_ALL_DATA.words)) {
      window.words = window.OTTER2_HSK_ALL_DATA.words;
      return window.words;
    }
    return [];
  }
  function wordsOfLevel(level) {
    return allWords().filter(function (w) { return w && Number(w.hsk) === Number(level); });
  }
  function hasFullExample(w) {
    return !!(w && String(w.example || "").trim() && String(w.examplePinyin || "").trim() && String(w.exampleMeaning || "").trim());
  }
  function exampleWordsOfLevel(level) {
    return wordsOfLevel(level).filter(function (w) { return hasFullExample(w) && String(w.example).indexOf(String(w.h)) >= 0; });
  }
  function readingBank() {
    return (window.__ttcReadingBank && typeof window.__ttcReadingBank === "object") ? window.__ttcReadingBank : null;
  }
  function passagesOfLevel(level) {
    var bank = readingBank();
    var arr = bank && Array.isArray(bank[String(level)]) ? bank[String(level)] : [];
    return arr.filter(function (a) { return a && String(a.zh || "").trim().length >= 30; });
  }
  function splitSentences(zh) {
    var parts = String(zh || "").replace(/\s+/g, "").match(/[^。！？；]+[。！？；]?/g) || [];
    return parts.map(function (s) { return s.trim(); }).filter(function (s) { return s.length >= 6; });
  }

  /* ---------------- Bộ sinh đề ----------------
     Mỗi câu hỏi: { section, type, stem, sub, passage, passageTitle,
       speakText, options[4], answer, correctText,
       explainHead, explainBody, srcKey }                        */
  function distractors(pool, valueOf, normOf, correctVal, n, rng, prefer) {
    var correctN = normOf(correctVal);
    var seen = {}; seen[correctN] = 1;
    var out = [];
    var ordered = shuffle(pool, rng);
    if (prefer) ordered.sort(prefer); /* ưu tiên (vd cùng từ loại) lên trước, vẫn giữ ngẫu nhiên trong nhóm */
    for (var i = 0; i < ordered.length && out.length < n; i++) {
      var v = valueOf(ordered[i]);
      if (v == null || String(v).trim() === "") continue;
      var nv = normOf(v);
      if (seen[nv]) continue;
      seen[nv] = 1;
      out.push(String(v));
    }
    return out;
  }
  function finalize(q, correctText, wrongs, rng) {
    var opts = shuffle([correctText].concat(wrongs), rng);
    q.options = opts;
    q.correctText = correctText;
    q.answer = opts.indexOf(correctText);
    return q;
  }
  function sameTypeFirst(word) {
    return function (a, b) {
      var sa = (a && a.t && word.t && a.t === word.t) ? 0 : 1;
      var sb = (b && b.t && word.t && b.t === word.t) ? 0 : 1;
      return sa - sb;
    };
  }

  function genListenMeaning(level, pool, rng) {
    var w = pickOne(pool, rng);
    var wrongs = distractors(pool, function (x) { return x.exampleMeaning; }, normOpt, w.exampleMeaning, 3, rng, null);
    if (wrongs.length < 3) return null;
    return finalize({
      section: "listen", type: "listen-meaning",
      stem: "Nghe câu sau và chọn nghĩa tiếng Việt ĐÚNG của câu.",
      sub: "", passage: null, passageTitle: "",
      speakText: String(w.example),
      explainHead: String(w.example),
      explainBody: String(w.examplePinyin) + "\nNghĩa: " + String(w.exampleMeaning) +
        "\nTừ trọng tâm: " + String(w.h) + " (" + String(w.p) + ") — " + String(w.m),
      srcKey: "L" + level + "|" + w.h + "|" + w.p
    }, String(w.exampleMeaning), wrongs, rng);
  }
  function genListenSentence(level, pool, rng) {
    var w = pickOne(pool, rng);
    var targetLen = String(w.example).length;
    var wrongs = distractors(pool, function (x) { return x.example; }, normOpt, w.example, 3, rng, function (a, b) {
      var da = Math.abs(String(a.example).length - targetLen), db = Math.abs(String(b.example).length - targetLen);
      return da - db;
    });
    if (wrongs.length < 3) return null;
    return finalize({
      section: "listen", type: "listen-sentence",
      stem: "Nghe và chọn đúng câu bạn vừa nghe.",
      sub: "", passage: null, passageTitle: "",
      speakText: String(w.example),
      explainHead: "Câu bạn nghe: " + String(w.example),
      explainBody: String(w.examplePinyin) + "\nNghĩa: " + String(w.exampleMeaning),
      srcKey: "L" + level + "|" + w.h + "|" + w.p
    }, String(w.example), wrongs, rng);
  }
  function genVocabMeaning(level, pool, rng) {
    var w = pickOne(pool, rng);
    var wrongs = distractors(pool, function (x) { return x.m; }, normOpt, w.m, 3, rng, sameTypeFirst(w));
    if (wrongs.length < 3) return null;
    return finalize({
      section: "vocab", type: "vocab-meaning",
      stem: "Từ 「" + String(w.h) + "」 có nghĩa là gì?",
      sub: "", passage: null, passageTitle: "", speakText: null,
      explainHead: String(w.h) + " · " + String(w.p),
      explainBody: "Nghĩa đúng: " + String(w.m) +
        (hasFullExample(w) ? "\nVí dụ: " + String(w.example) + " (" + String(w.examplePinyin) + ") — " + String(w.exampleMeaning) : ""),
      srcKey: "V" + level + "|" + w.h + "|" + w.p
    }, String(w.m), wrongs, rng);
  }
  function genVocabPinyin(level, pool, rng) {
    var w = pickOne(pool, rng);
    var wrongs = distractors(pool, function (x) { return x.p; }, normPy, w.p, 3, rng, null);
    if (wrongs.length < 3) return null;
    return finalize({
      section: "vocab", type: "vocab-pinyin",
      stem: "Pinyin đúng của từ 「" + String(w.h) + "」 là gì?",
      sub: "", passage: null, passageTitle: "", speakText: null,
      explainHead: String(w.h) + " · " + String(w.p),
      explainBody: "Pinyin đúng: " + String(w.p) + "\nNghĩa: " + String(w.m),
      srcKey: "V" + level + "|" + w.h + "|" + w.p
    }, String(w.p), wrongs, rng);
  }
  function blankOut(sentence, word) {
    var idx = String(sentence).indexOf(String(word));
    if (idx < 0) return null;
    return String(sentence).slice(0, idx) + "＿＿" + String(sentence).slice(idx + String(word).length);
  }
  function genCloze(level, poolAll, poolEx, rng) {
    var w = pickOne(poolEx, rng);
    var blanked = blankOut(w.example, w.h);
    if (!blanked) return null;
    var wrongs = distractors(poolAll, function (x) { return x.h; }, normOpt, w.h, 3, rng, sameTypeFirst(w));
    if (wrongs.length < 3) return null;
    return finalize({
      section: "vocab", type: "cloze",
      stem: "Điền từ thích hợp vào chỗ trống:",
      sub: blanked, passage: null, passageTitle: "", speakText: null,
      explainHead: String(w.example),
      explainBody: String(w.examplePinyin) + " — " + String(w.exampleMeaning) +
        "\nTừ cần điền: " + String(w.h) + " (" + String(w.p) + ") — " + String(w.m),
      srcKey: "V" + level + "|" + w.h + "|" + w.p,
      sourceSentence: String(w.example), targetWord: String(w.h)
    }, String(w.h), wrongs, rng);
  }

  function passageQuestions(level, passage, poolAll, rng, otherPassages) {
    var qs = [];
    var zh = String(passage.zh || "");
    var title = String(passage.title || "");
    /* 1) Từ vựng trong bài */
    var cands = poolAll.filter(function (w) {
      return String(w.h || "").length >= 1 && zh.indexOf(String(w.h)) >= 0;
    }).sort(function (a, b) { return String(b.h).length - String(a.h).length; });
    var longCands = cands.filter(function (w) { return String(w.h).length >= 2; });
    var useCands = longCands.length ? longCands : cands;
    if (useCands.length) {
      var w = pickOne(useCands.slice(0, 40), rng);
      var wrongs = distractors(poolAll, function (x) { return x.m; }, normOpt, w.m, 3, rng, sameTypeFirst(w));
      if (wrongs.length >= 3) {
        var sent = splitSentences(zh).filter(function (s) { return s.indexOf(String(w.h)) >= 0; })[0] || "";
        qs.push(finalize({
          section: "reading", type: "read-vocab",
          stem: "Trong bài đọc, từ 「" + String(w.h) + "」 có nghĩa là gì?",
          sub: "", passage: zh, passageTitle: title, speakText: null,
          explainHead: "Từ 「" + String(w.h) + "」 · " + String(w.p),
          explainBody: "Nghĩa: " + String(w.m) + (sent ? "\nCâu trong bài: " + sent : ""),
          srcKey: "R" + level + "|" + passage.id + "|" + w.h
        }, String(w.m), wrongs, rng));
      }
    }
    /* 2) Điền khuyết trong đoạn */
    var sents = splitSentences(zh);
    var clozeDone = false;
    var shuffledSents = shuffle(sents, rng);
    for (var si = 0; si < shuffledSents.length && !clozeDone; si++) {
      var s = shuffledSents[si];
      var inSent = poolAll.filter(function (w) { return String(w.h || "").length >= 2 && s.indexOf(String(w.h)) >= 0; });
      if (!inSent.length) inSent = poolAll.filter(function (w) { return String(w.h || "").length >= 1 && s.indexOf(String(w.h)) >= 0; });
      if (!inSent.length) continue;
      var cw = pickOne(inSent, rng);
      var blanked = blankOut(s, cw.h);
      if (!blanked) continue;
      var cwrongs = distractors(poolAll, function (x) { return x.h; }, normOpt, cw.h, 3, rng, sameTypeFirst(cw));
      if (cwrongs.length < 3) continue;
      qs.push(finalize({
        section: "reading", type: "read-cloze",
        stem: "Điền từ thích hợp vào chỗ trống trong câu trích từ bài đọc:",
        sub: blanked, passage: zh, passageTitle: title, speakText: null,
        explainHead: s,
        explainBody: "Từ cần điền: " + String(cw.h) + " (" + String(cw.p) + ") — " + String(cw.m),
        srcKey: "R" + level + "|" + passage.id + "|cloze|" + cw.h,
        sourceSentence: s, targetWord: String(cw.h)
      }, String(cw.h), cwrongs, rng));
      clozeDone = true;
    }
    /* 3) Câu nào có trong bài */
    var longSents = sents.filter(function (s) { return s.length >= 8; });
    if (longSents.length && otherPassages.length) {
      var correct = pickOne(longSents, rng);
      var otherSents = [];
      otherPassages.forEach(function (p) {
        splitSentences(p.zh).forEach(function (s) { if (s.length >= 8) otherSents.push(s); });
      });
      var swrongs = distractors(otherSents.map(function (s) { return { s: s }; }), function (x) { return x.s; }, normOpt, correct, 3, rng, null);
      if (swrongs.length >= 3) {
        qs.push(finalize({
          section: "reading", type: "read-sentence",
          stem: "Câu nào sau đây XUẤT HIỆN trong bài đọc trên?",
          sub: "", passage: zh, passageTitle: title, speakText: null,
          explainHead: "Câu có trong bài: " + correct,
          explainBody: "Bài đọc: " + (title || "Bài đọc HSK " + level),
          srcKey: "R" + level + "|" + passage.id + "|sent"
        }, String(correct), swrongs, rng));
      }
    }
    return qs;
  }

  function fallbackPassage(level, poolEx, rng) {
    /* Khi kho bài đọc không sẵn sàng: ghép 3–4 câu ví dụ dài thành
       "đoạn văn luyện tập" để phần Đọc vẫn sinh được câu hỏi. */
    var longs = poolEx.filter(function (w) { return hanOnly(w.example).length >= 10; });
    if (longs.length < 4) return null;
    var chosen = shuffle(longs, rng).slice(0, 4);
    return {
      id: "fallback-" + level, level: level, title: "Đoạn văn luyện tập (ghép từ câu ví dụ)",
      zh: chosen.map(function (w) { return String(w.example); }).join(""),
      fallback: true
    };
  }

  var SIZE_SPEC = {
    mini: { total: 10, listen: 3, vocab: 4, reading: 3, passages: 1, seconds: 600, label: "Mini · 10 câu · 10 phút" },
    standard: { total: 20, listen: 6, vocab: 8, reading: 6, passages: 2, seconds: 1500, label: "Chuẩn · 20 câu · 25 phút" }
  };

  function generateExam(level, sizeKey, rng) {
    rng = rng || Math.random;
    var spec = SIZE_SPEC[sizeKey] || SIZE_SPEC.mini;
    var poolAll = wordsOfLevel(level);
    var poolEx = exampleWordsOfLevel(level);
    var used = {};
    var questions = [];
    function fresh(q) {
      if (!q) return false;
      if (used[q.srcKey]) return false;
      used[q.srcKey] = 1;
      return true;
    }
    /* --- Nghe --- */
    var listenMakers = [genListenMeaning, genListenSentence];
    var li = 0, guard = 0;
    while (li < spec.listen && guard++ < 80) {
      var q = listenMakers[li % 2](level, poolEx, rng);
      if (fresh(q)) { questions.push(q); li++; }
    }
    /* --- Từ vựng & ngữ pháp --- */
    var vocabMakers = [genVocabMeaning, genCloze, genVocabPinyin];
    var order = shuffle([0, 1, 2], rng);
    var vi2 = 0; guard = 0;
    while (vi2 < spec.vocab && guard++ < 120) {
      var mk = vocabMakers[order[vi2 % 3]];
      var q2 = mk === genCloze ? genCloze(level, poolAll, poolEx, rng)
        : mk === genVocabPinyin ? genVocabPinyin(level, poolAll, rng)
        : genVocabMeaning(level, poolAll, rng);
      if (fresh(q2)) { questions.push(q2); vi2++; }
    }
    /* --- Đọc hiểu --- */
    var passages = passagesOfLevel(level);
    var chosenPassages = shuffle(passages, rng).slice(0, spec.passages);
    if (!chosenPassages.length) {
      var fb = fallbackPassage(level, poolEx, rng);
      if (fb) chosenPassages = [fb];
    }
    var ri = 0;
    for (var pi = 0; pi < chosenPassages.length && ri < spec.reading; pi++) {
      var others = passages.filter(function (p) { return p !== chosenPassages[pi]; });
      var pqs = passageQuestions(level, chosenPassages[pi], poolAll, rng, others);
      for (var qi = 0; qi < pqs.length && ri < spec.reading; qi++) {
        if (fresh(pqs[qi])) { questions.push(pqs[qi]); ri++; }
      }
    }
    /* Bù thiếu bằng câu từ vựng nếu một phần chưa đủ (dữ liệu mỏng) */
    guard = 0;
    while (questions.length < spec.total && guard++ < 200) {
      var q3 = genVocabMeaning(level, poolAll, rng);
      if (fresh(q3)) questions.push(q3);
    }
    return {
      level: Number(level), sizeKey: sizeKey, spec: spec,
      questions: questions, total: questions.length,
      seconds: spec.seconds, generatedAt: Date.now()
    };
  }

  function validateExam(exam) {
    var errs = [];
    if (!exam || !Array.isArray(exam.questions)) return ["no questions"];
    exam.questions.forEach(function (q, i) {
      var tag = "Q" + (i + 1) + "(" + q.type + ")";
      if (!Array.isArray(q.options) || q.options.length !== 4) { errs.push(tag + ": options!=4"); return; }
      var seen = {};
      q.options.forEach(function (o) { seen[normOpt(o)] = (seen[normOpt(o)] || 0) + 1; });
      if (Object.keys(seen).length !== 4) errs.push(tag + ": duplicate options");
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) errs.push(tag + ": bad answer idx");
      else if (q.options[q.answer] !== q.correctText) errs.push(tag + ": answer!=correctText");
      if (q.section === "listen" && !String(q.speakText || "").trim()) errs.push(tag + ": listen without speakText");
      if ((q.type === "cloze" || q.type === "read-cloze")) {
        if (!q.sourceSentence || String(q.sourceSentence).indexOf(q.targetWord) < 0) errs.push(tag + ": cloze source lacks target");
        if (!q.sub || q.sub.indexOf("＿＿") < 0) errs.push(tag + ": cloze not blanked");
      }
      if (!String(q.stem || "").trim()) errs.push(tag + ": empty stem");
    });
    return errs;
  }

  /* ---------------- TTS (mẫu speakHub của trang) ---------------- */
  function speak(text) {
    if (!text || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "zh-CN";
      u.rate = typeof window.selectedRate === "number" ? window.selectedRate : 0.9;
      u.pitch = 1; u.volume = 1;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }
  function stopSpeak() {
    if ("speechSynthesis" in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  }

  /* ---------------- CSS riêng của khu thi ---------------- */
  var CSS = [
    "#ttcExamOverlay{position:fixed;inset:0;z-index:1000200;background:rgba(15,23,42,.62);display:none;align-items:flex-start;justify-content:center;padding:12px;overflow:auto}",
    "#ttcExamOverlay.open{display:flex}",
    ".ttc-exam-card{width:min(980px,98vw)}",
    ".ttc-exam-note{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.5}",
    ".ttc-exam-levels{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}",
    ".ttc-exam-level{border:2px solid #e2e8f0;background:#fff;border-radius:14px;padding:10px 14px;font-size:15px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-level small{display:block;font-weight:500;color:#64748b;font-size:12px;margin-top:2px}",
    ".ttc-exam-level.on{border-color:#f59e0b;background:#fffbeb}",
    ".ttc-exam-sizes{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 14px}",
    ".ttc-exam-size{border:2px solid #e2e8f0;background:#fff;border-radius:999px;padding:8px 16px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-size.on{border-color:#2563eb;background:#eff6ff}",
    ".ttc-exam-start{background:#f59e0b;color:#fff;border:none;border-radius:14px;padding:13px 26px;font-size:17px;font-weight:700;cursor:pointer}",
    ".ttc-exam-start:disabled{opacity:.5;cursor:wait}",
    ".ttc-exam-hist{margin-top:18px}",
    ".ttc-exam-hist h3{margin:0 0 8px;font-size:16px;color:#172033}",
    ".ttc-exam-hist-item{display:flex;justify-content:space-between;gap:10px;padding:8px 10px;border:1px solid #eef1f5;border-radius:10px;margin-bottom:6px;font-size:14px;color:#334155;background:#fbfcfe}",
    ".ttc-exam-topbar{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px}",
    ".ttc-exam-timer{font-weight:800;font-size:18px;color:#172033;background:#f1f5f9;border-radius:10px;padding:6px 12px}",
    ".ttc-exam-timer.low{color:#b91c1c;background:#fef2f2}",
    ".ttc-exam-progress{flex:1;min-width:140px;height:10px;background:#eef1f5;border-radius:99px;overflow:hidden}",
    ".ttc-exam-progress i{display:block;height:100%;background:#f59e0b;border-radius:99px;transition:width .25s}",
    ".ttc-exam-section{font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#b45309}",
    ".ttc-exam-passage{background:#fffbeb;border:1px solid #fde68a;border-radius:14px;padding:12px 14px;font-size:17px;line-height:1.9;color:#172033;margin:10px 0;white-space:pre-wrap}",
    ".ttc-exam-stem{font-size:18px;font-weight:600;color:#172033;line-height:1.6;margin:10px 0 4px}",
    ".ttc-exam-sub{font-size:19px;color:#172033;line-height:1.8;margin:6px 0;white-space:pre-wrap}",
    ".ttc-exam-listenbtn{background:#2563eb;color:#fff;border:none;border-radius:999px;padding:12px 22px;font-size:16px;font-weight:700;cursor:pointer;margin:10px 0}",
    ".ttc-exam-opts{display:grid;gap:9px;margin-top:12px}",
    ".ttc-exam-opt{text-align:left;border:2px solid #e2e8f0;background:#fff;border-radius:13px;padding:12px 14px;font-size:16px;cursor:pointer;color:#172033;line-height:1.55}",
    ".ttc-exam-opt:hover{border-color:#cbd5e1}",
    ".ttc-exam-opt.sel{border-color:#2563eb;background:#eff6ff}",
    ".ttc-exam-opt .ttc-exam-letter{display:inline-block;min-width:26px;font-weight:800;color:#2563eb}",
    ".ttc-exam-nav{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;align-items:center}",
    ".ttc-exam-btn{border:1px solid #e2e8f0;background:#f8fafc;border-radius:11px;padding:10px 16px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-btn.primary{background:#f59e0b;color:#fff;border-color:#f59e0b}",
    ".ttc-exam-btn.armed{background:#dc2626;color:#fff;border-color:#dc2626}",
    ".ttc-exam-grid{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}",
    ".ttc-exam-gcell{width:38px;height:38px;border-radius:10px;border:2px solid #e2e8f0;background:#fff;font-weight:700;cursor:pointer;color:#475569}",
    ".ttc-exam-gcell.done{background:#dbeafe;border-color:#93c5fd;color:#1d4ed8}",
    ".ttc-exam-gcell.cur{border-color:#f59e0b;color:#b45309}",
    ".ttc-exam-score{font-size:44px;font-weight:800;color:#172033;line-height:1.1}",
    ".ttc-exam-reviewq{border:1px solid #eef1f5;border-radius:14px;padding:13px 14px;margin-bottom:12px;background:#fbfcfe}",
    ".ttc-exam-reviewq .ttc-exam-opt{cursor:default}",
    ".ttc-exam-opt.right{border-color:#16a34a;background:#f0fdf4}",
    ".ttc-exam-opt.wrong{border-color:#dc2626;background:#fef2f2}",
    ".ttc-exam-explain{background:#f0f9ff;border:1px solid #bae6fd;border-radius:11px;padding:10px 12px;margin-top:10px;font-size:15px;line-height:1.65;color:#0c4a6e;white-space:pre-wrap}",
    ".ttc-exam-tag{display:inline-block;font-size:12px;font-weight:700;border-radius:99px;padding:2px 9px;margin-left:8px;vertical-align:middle}",
    ".ttc-exam-tag.ok{background:#dcfce7;color:#166534}",
    ".ttc-exam-tag.bad{background:#fee2e2;color:#991b1b}",
    ".ttc-exam-tag.skip{background:#e2e8f0;color:#475569}",
    "@media (max-width:720px){.ttc-exam-stem{font-size:16px}.ttc-exam-sub{font-size:17px}.ttc-exam-score{font-size:36px}}"
  ].join("\n");

  /* ---------------- Trạng thái + lịch sử ---------------- */
  var HISTORY_KEY = "otter2_exam_history_v1";
  var state = {
    overlay: null, content: null,
    view: "home",
    level: 1, sizeKey: "mini",
    exam: null, answers: [], cur: 0,
    startedAt: 0, remaining: 0, timerId: null,
    submitted: false, submitArmed: false, submitArmTimer: null,
    closeArmed: false, closeArmTimer: null
  };
  function loadHistory() {
    try {
      var raw = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveHistory(entry) {
    try {
      var list = loadHistory();
      list.unshift(entry);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 50)));
    } catch (e) {}
  }
  function fmtDate(ts) {
    try { return new Date(ts).toLocaleString("vi-VN", { hour12: false }); } catch (e) { return ""; }
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  /* ---------------- Cổng Premium (đúng mẫu module phát âm) ---------------- */
  async function gateLevel(n) {
    if (typeof window.otter2AssertHskAvailable === "function" && !window.otter2AssertHskAvailable(n)) return false;
    if (Number(n) < 3) return true;
    var ok = false;
    try { ok = typeof window.checkPremiumAccess === "function" && await window.checkPremiumAccess(Number(n)); }
    catch (e) { ok = false; }
    if (!ok && typeof window.checkPremiumAccess !== "function") {
      alert("🔒 Luyện thi HSK " + n + " là nội dung Premium.");
    }
    return !!ok;
  }

  /* ---------------- Dựng overlay + thẻ mở ---------------- */
  function ensureStyle() {
    if (document.getElementById("ttc-exam-style")) return;
    var st = document.createElement("style");
    st.id = "ttc-exam-style";
    st.textContent = CSS;
    document.head.appendChild(st);
  }
  function buildOverlay() {
    if (state.overlay) return state.overlay;
    ensureStyle();
    var ov = document.createElement("div");
    ov.id = "ttcExamOverlay";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-label", "Luyện thi HSK");
    ov.innerHTML =
      '<div class="ttc-hub-card ttc-exam-card">' +
        '<div class="ttc-hub-head"><div class="ttc-hub-title">🏆 Luyện thi HSK</div>' +
        '<button type="button" class="ttc-hub-close" id="ttcExamClose" aria-label="Đóng">×</button></div>' +
        '<div id="ttcExamContent"></div>' +
      '</div>';
    document.body.appendChild(ov);
    state.overlay = ov;
    state.content = ov.querySelector("#ttcExamContent");
    ov.querySelector("#ttcExamClose").addEventListener("click", function () {
      if (state.view === "exam" && !state.submitted && !state.closeArmed) {
        state.closeArmed = true;
        this.textContent = "?";
        this.title = "Bạn đang làm bài — bấm lần nữa để thoát (bài làm sẽ không được lưu)";
        var btn = this;
        clearTimeout(state.closeArmTimer);
        state.closeArmTimer = setTimeout(function () {
          state.closeArmed = false; btn.textContent = "×"; btn.title = "";
        }, 3500);
        return;
      }
      closeExam();
    });
    ov.addEventListener("click", function (e) { if (e.target === ov && state.view !== "exam") closeExam(); });
    return ov;
  }
  function openExam() {
    buildOverlay();
    state.overlay.classList.add("open");
    document.body.classList.add("ttc-hub-lock-scroll");
    renderHome();
  }
  function closeExam() {
    stopTimer(); stopSpeak();
    state.closeArmed = false;
    if (state.overlay) state.overlay.classList.remove("open");
    document.body.classList.remove("ttc-hub-lock-scroll");
    state.view = "home"; state.exam = null; state.submitted = false;
  }

  /* ---------------- Trang chủ khu thi ---------------- */
  function levelCounts(n) {
    return { words: wordsOfLevel(n).length, passages: passagesOfLevel(n).length };
  }
  function renderHome() {
    state.view = "home";
    var lvHtml = "";
    for (var n = 1; n <= 9; n++) {
      var c = levelCounts(n);
      lvHtml += '<button type="button" class="ttc-exam-level' + (state.level === n ? " on" : "") + '" data-exam-level="' + n + '">' +
        "HSK " + n + "<small>" + (n >= 3 ? "Premium · " : "") + c.words + " từ · " + c.passages + " bài đọc</small></button>";
    }
    var sizeHtml = Object.keys(SIZE_SPEC).map(function (k) {
      return '<button type="button" class="ttc-exam-size' + (state.sizeKey === k ? " on" : "") + '" data-exam-size="' + k + '">' + esc(SIZE_SPEC[k].label) + "</button>";
    }).join("");
    var hist = loadHistory();
    var histHtml = hist.length
      ? hist.slice(0, 10).map(function (h) {
          return '<div class="ttc-exam-hist-item"><span>📅 ' + esc(fmtDate(h.ts)) + " · HSK " + esc(h.level) + " · " + esc(h.sizeLabel || "") + "</span><b>" +
            esc(h.correct) + "/" + esc(h.total) + " câu · " + esc(h.pct) + "% · ⏱ " + esc(fmtClock(h.secondsUsed)) + "</b></div>";
        }).join("")
      : '<p style="color:#64748b;font-size:14px">Chưa có lượt làm bài nào. Hãy bắt đầu đề đầu tiên của bạn!</p>';
    state.content.innerHTML =
      '<div class="ttc-exam-note">📝 Đây là <b>đề thi thử tự luyện</b>, được sinh tự động từ kho từ vựng, câu ví dụ và bài đọc của Thích Tiếng Trung 3.0 — <b>không phải đề thi HSK chính thức</b>. Gồm 3 phần: Nghe hiểu · Từ vựng &amp; ngữ pháp · Đọc hiểu.</div>' +
      '<h3 style="margin:16px 0 4px;color:#172033">1️⃣ Chọn cấp độ</h3><div class="ttc-exam-levels">' + lvHtml + "</div>" +
      '<h3 style="margin:10px 0 4px;color:#172033">2️⃣ Chọn độ dài đề</h3><div class="ttc-exam-sizes">' + sizeHtml + "</div>" +
      '<button type="button" class="ttc-exam-start" id="ttcExamStart">🚀 Bắt đầu làm bài</button>' +
      '<div class="ttc-exam-hist"><h3>🕘 Lịch sử làm bài</h3>' + histHtml + "</div>";
    state.content.querySelectorAll("[data-exam-level]").forEach(function (b) {
      b.addEventListener("click", async function () {
        var n = Number(b.getAttribute("data-exam-level"));
        if (n === state.level) return;
        var ok = await gateLevel(n);
        if (!ok) return;
        state.level = n;
        renderHome();
      });
    });
    state.content.querySelectorAll("[data-exam-size]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.sizeKey = b.getAttribute("data-exam-size");
        renderHome();
      });
    });
    document.getElementById("ttcExamStart").addEventListener("click", startExam);
  }

  /* ---------------- Làm bài ---------------- */
  function startExam() {
    var btn = document.getElementById("ttcExamStart");
    (async function () {
      var ok = await gateLevel(state.level);
      if (!ok) return;
      if (btn) { btn.disabled = true; btn.textContent = "⏳ Đang sinh đề…"; }
      var exam = generateExam(state.level, state.sizeKey);
      if (!exam.questions.length) {
        if (btn) { btn.disabled = false; btn.textContent = "🚀 Bắt đầu làm bài"; }
        alert("⚠️ Chưa đủ dữ liệu để sinh đề ở cấp này. Vui lòng thử cấp khác.");
        return;
      }
      state.exam = exam;
      state.answers = exam.questions.map(function () { return -1; });
      state.cur = 0;
      state.submitted = false;
      state.submitArmed = false;
      state.startedAt = Date.now();
      state.remaining = exam.seconds;
      renderQuestion();
      startTimer();
    })();
  }
  function startTimer() {
    stopTimer();
    state.timerId = setInterval(function () {
      state.remaining -= 0.5;
      var t = document.getElementById("ttcExamTimer");
      if (t) {
        t.textContent = "⏱ " + fmtClock(state.remaining);
        t.classList.toggle("low", state.remaining <= 60);
      }
      if (state.remaining <= 0) { submitExam(true); }
    }, 500);
  }
  function stopTimer() { if (state.timerId) { clearInterval(state.timerId); state.timerId = null; } }

  var SECTION_LABEL = { listen: "🎧 Phần 1 · Nghe hiểu", vocab: "📚 Phần 2 · Từ vựng & ngữ pháp", reading: "📖 Phần 3 · Đọc hiểu" };
  function renderQuestion() {
    state.view = "exam";
    var exam = state.exam, q = exam.questions[state.cur];
    var answered = state.answers.filter(function (a) { return a >= 0; }).length;
    var html = "";
    html += '<div class="ttc-exam-topbar"><span class="ttc-exam-timer" id="ttcExamTimer">⏱ ' + fmtClock(state.remaining) + "</span>" +
      '<div class="ttc-exam-progress"><i style="width:' + Math.round(answered / exam.total * 100) + '%"></i></div>' +
      "<span style='font-weight:700;color:#475569'>Câu " + (state.cur + 1) + "/" + exam.total + " · Đã làm " + answered + "</span></div>";
    html += '<div class="ttc-exam-section">' + esc(SECTION_LABEL[q.section] || "") + "</div>";
    if (q.passage) {
      html += '<div class="ttc-exam-passage">' + (q.passageTitle ? "<b>📖 " + esc(q.passageTitle) + "</b>\n" : "") + esc(q.passage) + "</div>";
    }
    html += '<div class="ttc-exam-stem">' + esc(q.stem) + "</div>";
    if (q.sub) html += '<div class="ttc-exam-sub">' + esc(q.sub) + "</div>";
    if (q.section === "listen") {
      html += '<button type="button" class="ttc-exam-listenbtn" id="ttcExamListen">🔊 Nghe câu</button>' +
        '<div style="font-size:13px;color:#64748b">Bạn có thể nghe lại nhiều lần. Chữ của câu sẽ hiện ở phần xem lại sau khi nộp bài.</div>';
    }
    html += '<div class="ttc-exam-opts">' + q.options.map(function (o, i) {
      return '<button type="button" class="ttc-exam-opt' + (state.answers[state.cur] === i ? " sel" : "") + '" data-exam-opt="' + i + '">' +
        '<span class="ttc-exam-letter">' + "ABCD"[i] + ".</span>" + esc(o) + "</button>";
    }).join("") + "</div>";
    html += '<div class="ttc-exam-nav">' +
      '<button type="button" class="ttc-exam-btn" id="ttcExamPrev"' + (state.cur === 0 ? " disabled" : "") + ">← Câu trước</button>" +
      '<button type="button" class="ttc-exam-btn" id="ttcExamNext"' + (state.cur === exam.total - 1 ? " disabled" : "") + ">Câu tiếp →</button>" +
      '<span style="flex:1"></span>' +
      '<button type="button" class="ttc-exam-btn primary' + (state.submitArmed ? " armed" : "") + '" id="ttcExamSubmit">' +
        (state.submitArmed ? "⚠️ Bấm lần nữa để nộp bài" : "📩 Nộp bài") + "</button></div>";
    html += '<div class="ttc-exam-grid">' + exam.questions.map(function (_, i) {
      return '<button type="button" class="ttc-exam-gcell' + (state.answers[i] >= 0 ? " done" : "") + (i === state.cur ? " cur" : "") + '" data-exam-goto="' + i + '">' + (i + 1) + "</button>";
    }).join("") + "</div>";
    state.content.innerHTML = html;
    state.content.querySelectorAll("[data-exam-opt]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.answers[state.cur] = Number(b.getAttribute("data-exam-opt"));
        renderQuestion();
      });
    });
    state.content.querySelectorAll("[data-exam-goto]").forEach(function (b) {
      b.addEventListener("click", function () { state.cur = Number(b.getAttribute("data-exam-goto")); stopSpeak(); renderQuestion(); });
    });
    var prev = document.getElementById("ttcExamPrev");
    if (prev) prev.addEventListener("click", function () { if (state.cur > 0) { state.cur--; stopSpeak(); renderQuestion(); } });
    var next = document.getElementById("ttcExamNext");
    if (next) next.addEventListener("click", function () { if (state.cur < exam.total - 1) { state.cur++; stopSpeak(); renderQuestion(); } });
    var lb = document.getElementById("ttcExamListen");
    if (lb) lb.addEventListener("click", function () { speak(q.speakText); });
    document.getElementById("ttcExamSubmit").addEventListener("click", function () { submitExam(false); });
  }

  function submitExam(auto) {
    if (!state.exam || state.submitted) return;
    var unanswered = state.answers.filter(function (a) { return a < 0; }).length;
    if (!auto && unanswered > 0 && !state.submitArmed) {
      state.submitArmed = true;
      renderQuestion();
      var note = document.createElement("div");
      note.className = "ttc-exam-note";
      note.style.marginTop = "12px";
      note.textContent = "⚠️ Còn " + unanswered + " câu chưa làm. Bấm «Nộp bài» lần nữa để nộp với các câu trống (tính là sai), hoặc quay lại làm tiếp.";
      state.content.appendChild(note);
      clearTimeout(state.submitArmTimer);
      state.submitArmTimer = setTimeout(function () { state.submitArmed = false; }, 6000);
      return;
    }
    state.submitted = true;
    stopTimer(); stopSpeak();
    var exam = state.exam;
    var correct = 0;
    exam.questions.forEach(function (q, i) { if (state.answers[i] === q.answer) correct++; });
    var secondsUsed = Math.min(exam.seconds, Math.round((Date.now() - state.startedAt) / 1000));
    if (auto) secondsUsed = exam.seconds;
    var pct = exam.total ? Math.round(correct / exam.total * 100) : 0;
    saveHistory({
      ts: Date.now(), level: exam.level, sizeKey: exam.sizeKey,
      sizeLabel: exam.sizeKey === "mini" ? "Mini 10" : "Chuẩn 20",
      total: exam.total, correct: correct, pct: pct, secondsUsed: secondsUsed, auto: !!auto
    });
    renderResult(correct, pct, secondsUsed, auto);
  }

  /* ---------------- Kết quả + xem lại ---------------- */
  function sectionStats() {
    var stats = {};
    state.exam.questions.forEach(function (q, i) {
      stats[q.section] = stats[q.section] || { n: 0, ok: 0 };
      stats[q.section].n++;
      if (state.answers[i] === q.answer) stats[q.section].ok++;
    });
    return stats;
  }
  function renderResult(correct, pct, secondsUsed, auto) {
    state.view = "result";
    var stats = sectionStats();
    var rows = Object.keys(stats).map(function (k) {
      return "<div class='ttc-exam-hist-item'><span>" + esc(SECTION_LABEL[k] || k) + "</span><b>" + stats[k].ok + "/" + stats[k].n + " câu đúng</b></div>";
    }).join("");
    state.content.innerHTML =
      '<div style="text-align:center;padding:10px 0 4px">' +
        '<div style="font-size:40px">' + (pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "🌱") + "</div>" +
        '<div class="ttc-exam-score">' + pct + "%</div>" +
        "<p style='color:#475569;margin:6px 0'>Đúng <b>" + correct + "/" + state.exam.total + "</b> câu · HSK " + state.exam.level +
        " · Thời gian: <b>" + fmtClock(secondsUsed) + "</b>" + (auto ? " · ⏰ Hết giờ — bài được nộp tự động" : "") + "</p></div>" +
      "<div>" + rows + "</div>" +
      '<div class="ttc-exam-nav" style="justify-content:center;margin-top:18px">' +
        '<button type="button" class="ttc-exam-btn primary" id="ttcExamReview">🔍 Xem lại bài</button>' +
        '<button type="button" class="ttc-exam-btn" id="ttcExamAgain">🔄 Làm đề mới</button>' +
        '<button type="button" class="ttc-exam-btn" id="ttcExamHome">🏠 Trang chủ khu thi</button></div>';
    document.getElementById("ttcExamReview").addEventListener("click", renderReview);
    document.getElementById("ttcExamAgain").addEventListener("click", function () { renderHome(); setTimeout(function () { var b = document.getElementById("ttcExamStart"); if (b) b.click(); }, 0); });
    document.getElementById("ttcExamHome").addEventListener("click", renderHome);
  }
  function renderReview() {
    state.view = "review";
    var exam = state.exam;
    var html = '<h3 style="margin:4px 0 12px;color:#172033">🔍 Xem lại bài — HSK ' + exam.level + " · Đúng " +
      exam.questions.filter(function (q, i) { return state.answers[i] === q.answer; }).length + "/" + exam.total + "</h3>";
    exam.questions.forEach(function (q, i) {
      var mine = state.answers[i];
      var tag = mine === q.answer ? '<span class="ttc-exam-tag ok">✓ Đúng</span>'
        : mine < 0 ? '<span class="ttc-exam-tag skip">— Chưa làm</span>'
        : '<span class="ttc-exam-tag bad">✗ Sai</span>';
      html += '<div class="ttc-exam-reviewq"><div class="ttc-exam-section">' + esc(SECTION_LABEL[q.section] || "") + " · Câu " + (i + 1) + tag + "</div>";
      if (q.passage) html += '<div class="ttc-exam-passage">' + (q.passageTitle ? "<b>📖 " + esc(q.passageTitle) + "</b>\n" : "") + esc(q.passage) + "</div>";
      html += '<div class="ttc-exam-stem">' + esc(q.stem) + "</div>";
      if (q.sub) html += '<div class="ttc-exam-sub">' + esc(q.sub) + "</div>";
      if (q.section === "listen") html += '<button type="button" class="ttc-exam-listenbtn" data-exam-replay="' + i + '">🔊 Nghe lại</button>';
      html += '<div class="ttc-exam-opts">' + q.options.map(function (o, oi) {
        var cls = "ttc-exam-opt";
        if (oi === q.answer) cls += " right";
        else if (oi === mine) cls += " wrong";
        return '<div class="' + cls + '"><span class="ttc-exam-letter">' + "ABCD"[oi] + ".</span>" + esc(o) +
          (oi === q.answer ? " ✓" : "") + (oi === mine && mine !== q.answer ? " (bạn chọn)" : "") + "</div>";
      }).join("") + "</div>";
      html += '<div class="ttc-exam-explain"><b>💡 Giải thích</b>\n<b>' + esc(q.explainHead) + "</b>\n" + esc(q.explainBody) + "</div></div>";
    });
    html += '<div class="ttc-exam-nav" style="justify-content:center"><button type="button" class="ttc-exam-btn" id="ttcExamHome2">🏠 Trang chủ khu thi</button>' +
      '<button type="button" class="ttc-exam-btn primary" id="ttcExamAgain2">🔄 Làm đề mới</button></div>';
    state.content.innerHTML = html;
    state.content.querySelectorAll("[data-exam-replay]").forEach(function (b) {
      b.addEventListener("click", function () {
        var q = exam.questions[Number(b.getAttribute("data-exam-replay"))];
        if (q) speak(q.speakText);
      });
    });
    document.getElementById("ttcExamHome2").addEventListener("click", renderHome);
    document.getElementById("ttcExamAgain2").addEventListener("click", function () { renderHome(); setTimeout(function () { var b = document.getElementById("ttcExamStart"); if (b) b.click(); }, 0); });
  }

  /* ---------------- Tiêm thẻ mở vào hàng tính năng ---------------- */
  function injectLauncher() {
    if (document.getElementById("otter2FeatExam")) return true;
    var row = document.querySelector(".otter2-feature-row");
    if (!row) return false;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "otter2-feature";
    btn.id = "otter2FeatExam";
    btn.innerHTML = '<span class="otter2-ico">🏆</span><strong>Luyện thi HSK</strong>';
    btn.addEventListener("click", function (e) { e.preventDefault(); openExam(); });
    row.appendChild(btn);
    return true;
  }
  function init() {
    if (injectLauncher()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      if (injectLauncher() || tries > 20) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.otter2OpenExam = openExam;
  window.__ttcExam = {
    generate: generateExam,
    validate: validateExam,
    pools: function (level) {
      return { words: wordsOfLevel(level).length, withExample: exampleWordsOfLevel(level).length, passages: passagesOfLevel(level).length };
    },
    state: function () { return state; },
    open: openExam,
    close: closeExam,
    expireNow: function () { if (state.view === "exam") { state.remaining = 0; submitExam(true); } }
  };
})();
