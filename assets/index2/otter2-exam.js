/* ============================================================
   OTTER2 EXAM v2 — Khu Luyện thi HSK + Bảng Điểm Thi.

   v2.1 (2026-11-17) — LỚP BẢO ĐẢM MỘT ĐÁP ÁN DUY NHẤT: sau khi
   chủ web tự thi thử và bắt lỗi câu điền khuyết "现在＿＿点。"
   (五/七/九 đều điền được), bộ sinh đề được vá ở tầng sinh:
   khoét từ chỉ tại vị trí "sạch" (không nằm giữa từ dài hơn),
   loại mọi lựa chọn nhiễu cũng đúng (câu có thật trong corpus
   khi điền vào, số đếm/đại từ cùng lớp trong khung không ghim,
   nghĩa/cách đọc khác của cùng chữ Hán, gloss chồng lấn, câu
   đồng âm khi nghe). Blueprint, thang điểm, chế độ thi, giao
   diện và khóa localStorage giữ nguyên.

   v2 (2026-11-17) nâng cấp từ v1:
   - ĐỀ SÁT ĐỀ THẬT: blueprint theo cấu trúc đề HSK thật từng cấp
     (HSK1: Nghe 20 + Đọc 20, thang 200, đạt 120; HSK2: 35+25/200/120;
     HSK3: 40+30+Viết 10, thang 300, đạt 180; HSK4: 45+40+15/300/180;
     HSK5: 45+45+10/300/180; HSK6: 50+50+Viết thay thế 10/300/180 —
     bài luận HSK6 được thay bằng sắp xếp từ + điền khuyết nâng cao,
     ghi chú rõ trong UI; HSK7–9: bản mô phỏng thang 300).
     Hai chế độ blueprint: "Thi thật mô phỏng" (đúng số câu, bấm giờ
     TỪNG PHẦN, hết giờ phần tự chuyển, không quay lại) và "Thi rút
     gọn" (thu nhỏ theo đúng tỉ lệ, giữ nguyên thang điểm). Chế độ
     Mini/Chuẩn của v1 giữ nguyên làm "luyện nhanh".
   - Dạng câu mới: Nghe hội thoại 2 lượt (hai câu ví dụ thật, TTS đọc
     nối tiếp), Viết = sắp xếp từ thành câu (cấp >= 3), Đọc = sắp
     xếp thứ tự câu trong đoạn. Mọi đáp án đều kiểm chứng bằng dữ liệu.
   - CHẤM KIỂU STUDY4: điểm từng phần quy thang 100, tổng thang
     200/300 theo cấp, đối chiếu mốc đạt -> Đạt/Chưa đạt + nhận định
     sẵn sàng sinh từ điểm từng phần thật.
   - NGÂN HÀNG ĐỀ: mỗi cấp 40 đề rút gọn đánh số (Đề 1..40), sinh
     XÁC ĐỊNH theo hạt giống (mulberry32) + sổ xoay vòng nguồn câu
     hỏi để hạn chế trùng lặp giữa các đề trong cùng cấp; thư viện
     đề ở trang chủ khu thi hiện điểm cao nhất của từng đề.
   - BẢNG ĐIỂM THI: nút điều hướng "Bảng thành tích" cũ (hàng nav)
     được đổi thành "Bảng Điểm Thi" mở bảng điểm cá nhân đầy đủ
     (điểm từng phần, tổng, Đạt/Chưa, xem lại bài, thống kê). Bảng
     thành tích theo SỐ TỪ ĐÃ HỌC (#ttcAchHost, mở bằng nút 🏆 ở
     trang chủ) giữ nguyên không đổi. Chưa có backend điểm thi trên
     Supabase — bảng này đọc từ lịch sử thi trên thiết bị; nháp
     backend ở ~/workspace/supabase_fix/exam_scores.md.

   Cộng thêm hoàn toàn (additive): không sửa script inline nào
   trong index2.html (v2 không cần thêm thẻ script nào mới).
   CHÍNH SÁCH FREE (chủ web chốt 2026-11-17): khu thi miễn phí
   toàn bộ — KHÔNG cổng Premium, không cần đăng nhập ở mọi cấp
   HSK1–9 (gỡ hẳn checkPremiumAccess/otter2AssertHskAvailable
   khỏi luồng thi so với v1). Các module khác giữ cổng của chúng.
   Rái cá: zone "exam" trong otter2-guide.js (câm giọng) — overlay
   Bảng Điểm Thi dùng chung zone "exam".
   ============================================================ */
(function () {
  "use strict";
  if (window.__OTTER2_EXAM_V2__) return;
  window.__OTTER2_EXAM_V2__ = true;

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
  function hashStr(s) {
    var h = 2166136261;
    s = String(s);
    for (var i = 0; i < s.length; i++) {
      h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    }
    return h >>> 0;
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
  /* Từ điển tách câu cho dạng sắp xếp từ: mọi từ vựng ở cấp <= level. */
  var segDictCache = {};
  function segDict(level) {
    var key = String(level);
    if (segDictCache[key]) return segDictCache[key];
    var map = {};
    allWords().forEach(function (w) {
      if (w && Number(w.hsk) <= Number(level) && String(w.h || "").length >= 2) map[String(w.h)] = 1;
    });
    segDictCache[key] = map;
    return map;
  }
  function isInterrogative(text) {
    return /？|\?|吗|什么|怎么|谁|哪|多少|为什么/.test(String(text || "")) ||
      /(^|[^几])几[^天月日年]/.test(String(text || ""));
  }

  /* ---------------- Bộ sinh đề — phần tử cơ bản ----------------
     Câu hỏi MCQ: { section, type, stem, sub, passage, passageTitle,
       speakText, options[4], answer, correctText,
       explainHead, explainBody, srcKey }
     Câu hỏi SẮP XẾP: { ..., type: 'write-order'|'read-order',
       options[mảnh xáo trộn], answerSeq[vị trí đúng], chunks[mảng đúng],
       correctText } — KHÔNG có answer số.                            */
  function distractors(pool, valueOf, normOf, correctVal, n, rng, prefer, reject) {
    var correctN = normOf(correctVal);
    var seen = {}; seen[correctN] = 1;
    var out = [];
    var ordered = shuffle(pool, rng);
    if (prefer) ordered.sort(prefer);
    for (var i = 0; i < ordered.length && out.length < n; i++) {
      var v = valueOf(ordered[i]);
      if (v == null || String(v).trim() === "") continue;
      if (reject && reject(ordered[i], v)) continue;
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

  /* ============================================================
     LỚP BẢO ĐẢM "MỘT ĐÁP ÁN DUY NHẤT" (vá chất lượng 2026-11-17,
     sau phản hồi của chủ web: câu 现在＿＿点。 nhận cả 五/七/九).
     Nguyên tắc: một lựa chọn nhiễu bị loại nếu nó CŨNG đúng —
       (1) điền vào chỗ trống cho ra câu có thật trong corpus
           (mọi câu ví dụ + mọi câu bài đọc của chính trang);
       (2) cùng lớp đóng với từ đích trong khung tự do thay thế
           (số đếm trước đơn vị 点/岁/个/本..., đại từ chủ ngữ)
           khi ngữ cảnh không ghim giá trị;
       (3) là nghĩa/cách đọc khác của cùng chữ Hán (đa âm tiết)
           trong khi đề chỉ hiện chữ Hán;
       (4) gloss chồng lấn cụm từ với đáp án đúng (cũng là một
           nghĩa đúng của từ đích);
       (5) đồng âm hoàn toàn với câu đúng (dạng nghe chọn câu).
     Và từ đích không bao giờ bị khoét ở vị trí nằm giữa một từ
     dài hơn (vd 爱 trong 可爱, 电话 trong 打电话).            */
  var NUM_CHARS = "一二三四五六七八九十百千万亿两半几";
  function isNumeralWord(s) {
    s = String(s || "");
    if (!s || s.length > 3) return false;
    for (var i = 0; i < s.length; i++) if (NUM_CHARS.indexOf(s.charAt(i)) < 0) return false;
    return true;
  }
  var PRONOUN_SET = { "我": 1, "你": 1, "他": 1, "她": 1, "它": 1, "我们": 1, "你们": 1, "他们": 1, "她们": 1, "它们": 1, "您": 1, "谁": 1, "这": 1, "那": 1, "哪": 1, "自己": 1, "大家": 1, "别人": 1, "这儿": 1, "那儿": 1, "哪儿": 1 };
  var TIME_WORD_SET = { "今天": 1, "明天": 1, "昨天": 1, "前天": 1, "后天": 1, "现在": 1, "上午": 1, "中午": 1, "下午": 1, "晚上": 1, "早上": 1, "早晨": 1, "夜里": 1, "半夜": 1, "周末": 1, "平时": 1, "每天": 1, "每年": 1, "今年": 1, "明年": 1, "去年": 1, "这会儿": 1, "那会儿": 1, "刚才": 1, "以后": 1, "以前": 1, "后来": 1, "最近": 1, "当时": 1 };
  function isTimeWord(s) {
    s = String(s || "");
    return !!TIME_WORD_SET[s] || /^星期[一二三四五六日天]$/.test(s) || /^周[一二三四五六日天末]$/.test(s);
  }
  var POSITION_SET = { "上": 1, "下": 1, "里": 1, "外": 1, "前": 1, "后": 1, "左": 1, "右": 1, "边": 1, "面": 1, "上边": 1, "下边": 1, "里边": 1, "外边": 1, "前边": 1, "后边": 1, "左边": 1, "右边": 1, "上面": 1, "下面": 1, "里面": 1, "外面": 1, "前面": 1, "后面": 1, "东边": 1, "西边": 1, "南边": 1, "北边": 1 };
  var QUANT_AFTER = "点岁个本张件条只双把杯瓶碗块元角分秒天周月年号楼层路次遍课种样口家间辆班人";
  var _hanziSet = null;
  function allWordHanziSet() {
    if (_hanziSet) return _hanziSet;
    var set = {};
    allWords().forEach(function (w) { if (w && w.h) set[String(w.h)] = 1; });
    _hanziSet = set;
    return set;
  }
  var _corpusSet = null;
  function corpusSentenceSet() {
    if (_corpusSet) return _corpusSet;
    var set = {};
    allWords().forEach(function (w) {
      if (w && w.example) set[String(w.example).replace(/\s+/g, "")] = 1;
    });
    var bank = readingBank();
    if (bank) Object.keys(bank).forEach(function (k) {
      (bank[k] || []).forEach(function (p) {
        splitSentences(p.zh).forEach(function (s) { set[s.replace(/\s+/g, "")] = 1; });
      });
    });
    _corpusSet = set;
    return set;
  }
  function filledIsAttested(blanked, filler) {
    var filled = String(blanked).replace("＿＿", String(filler)).replace(/\s+/g, "");
    return !!corpusSentenceSet()[filled];
  }
  function countOcc(haystack, needle) {
    if (!needle) return 0;
    return String(haystack || "").split(String(needle)).length - 1;
  }
  /* Ngữ cảnh "ghim" đáp án khi từ đích còn xuất hiện thêm ít nhất
     một lần nữa trong câu nguồn hoặc trong đoạn văn đi kèm. */
  function clozePinned(sentence, passage, target) {
    if (!target) return false;
    if (countOcc(sentence, target) >= 2) return true;
    if (passage && countOcc(passage, target) >= 2) return true;
    return false;
  }
  function clozeQuantFrame(blanked) {
    var s = String(blanked || "");
    var i = s.indexOf("＿＿");
    if (i < 0) return false;
    var after = s.charAt(i + 2), before = i > 0 ? s.charAt(i - 1) : "";
    return QUANT_AFTER.indexOf(after) >= 0 || before === "第";
  }
  function clozeRejectFn(targetEntry, blanked, sentence, passage) {
    var T = String(targetEntry && targetEntry.h || "");
    var pinned = clozePinned(sentence, passage, T);
    var quant = clozeQuantFrame(blanked);
    return function (entry) {
      var D = String(entry && entry.h || "");
      if (!D || D === T) return true;
      if (filledIsAttested(blanked, D)) return true;
      if (!pinned && quant && isNumeralWord(T) && isNumeralWord(D)) return true;
      if (!pinned && PRONOUN_SET[T] && PRONOUN_SET[D]) return true;
      if (!pinned && isTimeWord(T) && isTimeWord(D)) return true;
      if (!pinned && POSITION_SET[T] && POSITION_SET[D]) return true;
      return false;
    };
  }
  /* Khoét từ tại một vị trí "sạch": vị trí mà từ đích không nằm
     giữa một từ dài hơn trong từ điển. Không có vị trí sạch -> null. */
  function blankOutSmart(sentence, word) {
    var s = String(sentence), w = String(word);
    if (!w) return null;
    var set = allWordHanziSet();
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
        if (cands[i] !== w && set[cands[i]]) { dirty = true; break; }
      }
      if (!dirty) return s.slice(0, idx) + "＿＿" + s.slice(idx + w.length);
      from = idx + 1;
    }
  }
  /* So khớp gloss tiếng Việt theo cụm từ (tách theo , ; 、 /):
     hai gloss "chồng lấn" khi một cụm của bên này chứa / bị chứa
     theo dãy từ liên tiếp trong cụm của bên kia — trừ khi phần
     chung chỉ là một từ quá phổ biến (học, làm, tôi, ta...). */
  var GLOSS_STOP_SINGLE = { "học": 1, "dạy": 1, "làm": 1, "đi": 1, "ăn": 1, "uống": 1, "nói": 1, "nghe": 1, "nhìn": 1, "xem": 1, "đọc": 1, "viết": 1, "người": 1, "nhà": 1, "nước": 1, "sách": 1, "xe": 1, "tiền": 1, "việc": 1, "sự": 1, "cái": 1, "con": 1, "ngày": 1, "năm": 1, "tháng": 1, "giờ": 1, "phút": 1, "giây": 1, "tôi": 1, "ta": 1, "mình": 1, "họ": 1, "nó": 1, "anh": 1, "chị": 1, "em": 1, "ông": 1, "bà": 1, "ngài": 1, "bạn": 1, "chúng": 1, "các": 1, "những": 1, "một": 1 };
  function glossPhrasesM(m) {
    return String(m || "").toLowerCase().split(/[,;、\/]+/).map(function (x) {
      return x.trim().replace(/\.+$/, "").replace(/\s+/g, " ");
    }).filter(function (x) { return x.length >= 2; });
  }
  function phraseContainsM(a, b) {
    var aw = a.split(" "), bw = b.split(" ");
    if (aw.length < bw.length) return false;
    for (var i = 0; i + bw.length <= aw.length; i++) {
      var ok = true;
      for (var j = 0; j < bw.length; j++) if (aw[i + j] !== bw[j]) { ok = false; break; }
      if (ok) return true;
    }
    return false;
  }
  function glossOverlapM(m1, m2) {
    var A = glossPhrasesM(m1), B = glossPhrasesM(m2);
    for (var i = 0; i < A.length; i++) for (var j = 0; j < B.length; j++) {
      var pa = A[i], pb = B[j];
      if (pa === pb) return true;
      if (phraseContainsM(pa, pb) || phraseContainsM(pb, pa)) {
        var shorter = pa.split(" ").length <= pb.split(" ").length ? pa : pb;
        if (shorter.split(" ").length === 1 && GLOSS_STOP_SINGLE[shorter]) continue;
        return true;
      }
    }
    return false;
  }
  function meaningRejectFn(targetEntry) {
    var T = String(targetEntry && targetEntry.h || "");
    var correct = String(targetEntry && targetEntry.m || "");
    return function (entry) {
      if (!entry) return false;
      if (T && String(entry.h || "") === T) return true; /* entry khác cùng chữ Hán: nghĩa của cách đọc khác */
      return glossOverlapM(correct, String(entry.m || ""));
    };
  }
  function pinyinRejectFn(targetEntry) {
    var T = String(targetEntry && targetEntry.h || "");
    return function (entry) {
      if (!entry) return false;
      return !!T && String(entry.h || "") === T; /* cách đọc khác của cùng chữ Hán */
    };
  }
  function normSpeakPy(s) {
    return normPy(s).replace(/[^a-z0-9ā-ſ\u01d6-\u01dcü]/g, "");
  }
  function listenSentenceRejectFn(targetEntry) {
    var target = normSpeakPy(targetEntry && targetEntry.examplePinyin || "");
    return function (entry) {
      if (!entry || !target) return false;
      return normSpeakPy(entry.examplePinyin || "") === target;
    };
  }
  function listenMeaningRejectFn(correctMeaning) {
    var correct = String(correctMeaning || "");
    return function (entry) {
      if (!entry) return false;
      return glossOverlapM(correct, String(entry.exampleMeaning || ""));
    };
  }
  var TIME_CHUNK_RE = /今天|明天|昨天|前天|后天|现在|早上|上午|中午|下午|晚上|夜里|周末|星期|每天|每年|今年|明年|去年|刚才|以后|以前|后来/;
  function orderRisky(chunks) {
    var hasTime = false, hasPlace = false, hasPron = false;
    (chunks || []).forEach(function (c) {
      if (TIME_CHUNK_RE.test(c)) hasTime = true;
      if (c.indexOf("在") === 0 && c.length >= 3) hasPlace = true;
      if (PRONOUN_SET[c]) hasPron = true;
    });
    return (hasTime || hasPlace) && hasPron;
  }

  function genListenMeaning(level, pool, rng) {
    var w = pickOne(pool, rng);
    var wrongs = distractors(pool, function (x) { return x.exampleMeaning; }, normOpt, w.exampleMeaning, 3, rng, null, listenMeaningRejectFn(w.exampleMeaning));
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
    }, listenSentenceRejectFn(w));
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
  /* Nghe hội thoại 2 lượt: lượt 1 = câu hỏi thật từ kho câu ví dụ,
     lượt 2 = câu trả lời (ưu tiên câu có dùng chung từ vựng với lượt 1).
     Đáp án kiểm chứng = nghĩa của lượt 2 trong dữ liệu. */
  var COMMON_BIGRAMS = { "的是": 1, "了我": 1, "我的": 1, "他的": 1, "她的": 1, "我们": 1, "他们": 1, "她们": 1, "不是": 1, "什么": 1, "一个": 1, "这个": 1, "那个": 1, "的人": 1, "了的": 1, "在的": 1, "和我": 1, "我想": 1, "你想": 1, "是的": 1 };
  function sharesVocab(textA, entryB) {
    var a = hanOnly(textA), b = hanOnly(entryB.example);
    if (!a || !b) return false;
    if (a.indexOf(String(entryB.h)) >= 0) return true;
    var grams = {};
    for (var i = 0; i + 1 < a.length; i++) {
      var g = a.substr(i, 2);
      if (!COMMON_BIGRAMS[g]) grams[g] = 1;
    }
    for (var j = 0; j + 1 < b.length; j++) {
      if (grams[b.substr(j, 2)]) return true;
    }
    return false;
  }
  function genListenDialogue(level, pool, rng) {
    var qs = [], ds = [];
    pool.forEach(function (w) { (isInterrogative(w.example) ? qs : ds).push(w); });
    if (!qs.length || ds.length < 4) return null;
    for (var t = 0; t < 14; t++) {
      var a = pickOne(qs, rng);
      var shared = ds.filter(function (w) { return w !== a && sharesVocab(a.example, w); });
      var b = shared.length ? pickOne(shared, rng) : pickOne(ds, rng);
      if (!b || b === a) continue;
      var wrongs = distractors(pool, function (x) { return x.exampleMeaning; }, normOpt, b.exampleMeaning, 3, rng, null, listenMeaningRejectFn(b.exampleMeaning));
      if (wrongs.length < 3) continue;
      return finalize({
        section: "listen", type: "listen-dialogue",
        stem: "Nghe đoạn hội thoại ngắn (2 lượt nói) và chọn nghĩa tiếng Việt ĐÚNG của câu trả lời — lượt nói thứ hai.",
        sub: "", passage: null, passageTitle: "",
        speakText: String(a.example) + "\n" + String(b.example),
        explainHead: "Hội thoại:\n🗣️ " + String(a.example) + "\n🗣️ " + String(b.example),
        explainBody: String(a.examplePinyin) + " — " + String(a.exampleMeaning) +
          "\n" + String(b.examplePinyin) + " — " + String(b.exampleMeaning) +
          "\nCâu trả lời cần chọn nghĩa: " + String(b.example),
        srcKey: "L" + level + "|dlg|" + a.h + "|" + b.h
      }, String(b.exampleMeaning), wrongs, rng);
    }
    return null;
  }
  function genVocabMeaning(level, pool, rng) {
    var w = pickOne(pool, rng);
    var wrongs = distractors(pool, function (x) { return x.m; }, normOpt, w.m, 3, rng, sameTypeFirst(w), meaningRejectFn(w));
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
    var wrongs = distractors(pool, function (x) { return x.p; }, normPy, w.p, 3, rng, null, pinyinRejectFn(w));
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
    for (var t = 0; t < 24; t++) {
      var w = pickOne(poolEx, rng);
      if (!w) return null;
      var blanked = blankOutSmart(w.example, w.h);
      if (!blanked) continue;
      var wrongs = distractors(poolAll, function (x) { return x.h; }, normOpt, w.h, 3, rng, sameTypeFirst(w), clozeRejectFn(w, blanked, w.example, null));
      if (wrongs.length < 3) continue;
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
    return null;
  }

  /* --- Sắp xếp từ thành câu (phần Viết) ---
     Tách câu ví dụ thành các mảnh bằng từ điển từ vựng cấp <= level
     (tham lam, dài nhất trước). Chỉ nhận câu tách được 4–8 mảnh,
     không mảnh nào trùng nhau, và từ đích là một mảnh nguyên vẹn. */
  function segmentSentence(rawZh, dict) {
    var s = hanOnly(rawZh);
    if (s.length < 8 || s.length > 18) return null;
    var chunks = [], i = 0;
    while (i < s.length) {
      var matched = null;
      for (var L = Math.min(5, s.length - i); L >= 2; L--) {
        var sub = s.substr(i, L);
        if (dict[sub]) { matched = sub; break; }
      }
      if (!matched) matched = s.substr(i, 1);
      chunks.push(matched);
      i += matched.length;
    }
    if (chunks.length < 4 || chunks.length > 8) return null;
    var seen = {};
    for (var c = 0; c < chunks.length; c++) {
      if (seen[chunks[c]]) return null;
      seen[chunks[c]] = 1;
    }
    return chunks;
  }
  function makeOrderQuestion(base, chunks, rng) {
    var n = chunks.length;
    var order = shuffle(chunks.map(function (_, i) { return i; }), rng);
    var identity = order.every(function (v, i) { return v === i; });
    if (identity) { var t = order[0]; order[0] = order[1]; order[1] = t; }
    var options = order.map(function (ci) { return chunks[ci]; });
    var inv = new Array(n);
    order.forEach(function (ci, pos) { inv[ci] = pos; });
    base.options = options;
    base.chunks = chunks.slice();
    base.answerSeq = chunks.map(function (_, k) { return inv[k]; });
    base.correctText = chunks.join("");
    return base;
  }
  function genWriteOrder(level, poolAll, poolEx, rng) {
    var dict = segDict(level);
    for (var t = 0; t < 48; t++) {
      var w = pickOne(poolEx, rng);
      if (!w) continue;
      var chunks = segmentSentence(w.example, dict);
      if (!chunks) continue;
      if (chunks.indexOf(String(w.h)) < 0) continue;
      if (orderRisky(chunks)) continue; /* mảnh thời gian/nơi chốn + chủ ngữ đại từ: hoán vị vẫn đúng ngữ pháp */
      return makeOrderQuestion({
        section: "writing", type: "write-order",
        stem: "Sắp xếp các mảnh từ sau thành câu đúng:",
        sub: "", passage: null, passageTitle: "", speakText: null,
        explainHead: String(w.example),
        explainBody: String(w.examplePinyin) + " — " + String(w.exampleMeaning) +
          "\nTừ trọng tâm: " + String(w.h) + " (" + String(w.p) + ") — " + String(w.m),
        srcKey: "W" + level + "|ord|" + w.h + "|" + w.p,
        sourceSentence: String(w.example), targetWord: String(w.h)
      }, chunks, rng);
    }
    return null;
  }

  /* --- Câu hỏi từ một bài đọc ---
     opts.order = true -> thêm dạng sắp xếp thứ tự câu (bản blueprint). */
  function passageQuestions(level, passage, poolAll, rng, otherPassages, opts) {
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
      var wrongs = distractors(poolAll, function (x) { return x.m; }, normOpt, w.m, 3, rng, sameTypeFirst(w), meaningRejectFn(w));
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
      var candWords = shuffle(inSent, rng);
      for (var cwi = 0; cwi < candWords.length && !clozeDone; cwi++) {
        var cw = candWords[cwi];
        var blanked = blankOutSmart(s, cw.h);
        if (!blanked) continue;
        var cwrongs = distractors(poolAll, function (x) { return x.h; }, normOpt, cw.h, 3, rng, sameTypeFirst(cw), clozeRejectFn(cw, blanked, s, zh));
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
    }
    /* 3) Câu nào có trong bài */
    var longSents = sents.filter(function (s) { return s.length >= 8; });
    if (longSents.length && otherPassages.length) {
      var correct = pickOne(longSents, rng);
      var otherSents = [];
      otherPassages.forEach(function (p) {
        splitSentences(p.zh).forEach(function (s) { if (s.length >= 8) otherSents.push(s); });
      });
      var ownSentSet = {};
      sents.forEach(function (x) { ownSentSet[x] = 1; });
      var swrongs = distractors(otherSents.map(function (s) { return { s: s }; }), function (x) { return x.s; }, normOpt, correct, 3, rng, null, function (entry) { return !!ownSentSet[entry.s]; });
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
    /* 4) Sắp xếp thứ tự câu trong đoạn (chỉ bản blueprint) */
    if (opts && opts.order) {
      var win = null;
      for (var wi = 0; wi + 3 < sents.length && !win; wi++) {
        var cand = sents.slice(wi, wi + 4);
        var okWin = cand.every(function (x) { return x.length >= 6 && x.length <= 42; });
        var dupCheck = {};
        cand.forEach(function (x) { dupCheck[x] = (dupCheck[x] || 0) + 1; });
        if (okWin && Object.keys(dupCheck).length === 4) win = cand;
      }
      if (win) {
        qs.push(makeOrderQuestion({
          section: "reading", type: "read-order",
          stem: "Sắp xếp 4 câu sau theo đúng thứ tự trong bài đọc:",
          sub: "", passage: zh, passageTitle: title, speakText: null,
          explainHead: "Thứ tự đúng trong bài:",
          explainBody: win.join("\n"),
          srcKey: "R" + level + "|" + passage.id + "|ord"
        }, win, rng));
      }
    }
    return qs;
  }

  /* Điền khuyết nâng cao từ bài đọc — dùng cho phần Viết HSK6
     (thay thế tương đương bài luận, cùng với sắp xếp từ). */
  function genWritingPassageCloze(level, poolAll, passages, rng) {
    if (!passages.length) return null;
    for (var t = 0; t < 16; t++) {
      var p = pickOne(passages, rng);
      var sents = splitSentences(p.zh).filter(function (s) { return s.length >= 12; });
      if (!sents.length) continue;
      var s = pickOne(sents, rng);
      var inSent = poolAll.filter(function (w) { return String(w.h || "").length >= 2 && s.indexOf(String(w.h)) >= 0; });
      if (!inSent.length) continue;
      var cw = pickOne(inSent, rng);
      var blanked = blankOutSmart(s, cw.h);
      if (!blanked) continue;
      var wrongs = distractors(poolAll, function (x) { return x.h; }, normOpt, cw.h, 3, rng, sameTypeFirst(cw), clozeRejectFn(cw, blanked, s, String(p.zh || "")));
      if (wrongs.length < 3) continue;
      return finalize({
        section: "writing", type: "write-cloze",
        stem: "Điền từ thích hợp vào chỗ trống trong câu trích từ bài đọc (điền khuyết nâng cao):",
        sub: blanked, passage: String(p.zh || ""), passageTitle: String(p.title || ""), speakText: null,
        explainHead: s,
        explainBody: "Từ cần điền: " + String(cw.h) + " (" + String(cw.p) + ") — " + String(cw.m),
        srcKey: "W" + level + "|pcloze|" + p.id + "|" + cw.h,
        sourceSentence: s, targetWord: String(cw.h)
      }, String(cw.h), wrongs, rng);
    }
    return null;
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

  /* ---------------- Blueprint đề thật + chế độ thi ----------------
     sec: [khóa phần, số câu, số giây] theo thứ tự đề thật.
     thang: tổng điểm tối đa; dat: mốc đạt. Mỗi phần quy thang 100. */
  var BLUEPRINT = {
    1: { sec: [["listen", 20, 780], ["reading", 20, 1020]], scale: 200, pass: 120 },
    2: { sec: [["listen", 35, 1500], ["reading", 25, 1320]], scale: 200, pass: 120 },
    3: { sec: [["listen", 40, 2100], ["reading", 30, 1800], ["writing", 10, 900]], scale: 300, pass: 180 },
    4: { sec: [["listen", 45, 1800], ["reading", 40, 2400], ["writing", 15, 1500]], scale: 300, pass: 180 },
    5: { sec: [["listen", 45, 1800], ["reading", 45, 2700], ["writing", 10, 2400]], scale: 300, pass: 180 },
    6: { sec: [["listen", 50, 2100], ["reading", 50, 3000], ["writing", 10, 2700]], scale: 300, pass: 180, writingSub: true }
  };
  var SIM_BLUEPRINT = { sec: [["listen", 20, 1500], ["reading", 20, 1800], ["writing", 10, 1200]], scale: 300, pass: 180, simulated: true };
  function blueprintFor(level) {
    return BLUEPRINT[Number(level)] || SIM_BLUEPRINT;
  }
  function reducedCounts(bp) {
    var totalQ = bp.sec.reduce(function (a, s) { return a + s[1]; }, 0);
    var f = 20 / totalQ;
    return bp.sec.map(function (s) { return Math.max(2, Math.round(s[1] * f)); });
  }
  var SIZE_SPEC = {
    mini: { total: 10, listen: 3, vocab: 4, reading: 3, passages: 1, seconds: 600, label: "Mini · 10 câu · 10 phút" },
    standard: { total: 20, listen: 6, vocab: 8, reading: 6, passages: 2, seconds: 1500, label: "Chuẩn · 20 câu · 25 phút" }
  };
  var MODE_LABEL = {
    full: "Thi thật mô phỏng",
    reduced: "Thi rút gọn",
    catalog: "Đề thư viện (rút gọn)",
    mini: "Luyện nhanh Mini",
    standard: "Luyện nhanh Chuẩn"
  };

  /* ---------------- Sinh đề kiểu v1 (Mini / Chuẩn) ---------------- */
  function generateLegacyExam(level, sizeKey, rng) {
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
    var listenMakers = [genListenMeaning, genListenSentence];
    var li = 0, guard = 0;
    while (li < spec.listen && guard++ < 80) {
      var q = listenMakers[li % 2](level, poolEx, rng);
      if (fresh(q)) { questions.push(q); li++; }
    }
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
    var passages = passagesOfLevel(level);
    var chosenPassages = shuffle(passages, rng).slice(0, spec.passages);
    if (!chosenPassages.length) {
      var fb = fallbackPassage(level, poolEx, rng);
      if (fb) chosenPassages = [fb];
    }
    var ri = 0;
    for (var pi = 0; pi < chosenPassages.length && ri < spec.reading; pi++) {
      var others = passages.filter(function (p) { return p !== chosenPassages[pi]; });
      var pqs = passageQuestions(level, chosenPassages[pi], poolAll, rng, others, null);
      for (var qi = 0; qi < pqs.length && ri < spec.reading; qi++) {
        if (fresh(pqs[qi])) { questions.push(pqs[qi]); ri++; }
      }
    }
    guard = 0;
    while (questions.length < spec.total && guard++ < 200) {
      var q3 = genVocabMeaning(level, poolAll, rng);
      if (fresh(q3)) questions.push(q3);
    }
    var plan = [
      { key: "listen", count: spec.listen, seconds: 0 },
      { key: "vocab", count: spec.vocab, seconds: 0 },
      { key: "reading", count: spec.reading, seconds: 0 }
    ];
    return {
      level: Number(level), mode: sizeKey, sizeKey: sizeKey, spec: spec,
      questions: questions, total: questions.length,
      seconds: spec.seconds, sectionPlan: plan,
      scaleMax: 300, passMark: 180,
      passagesUsed: chosenPassages.map(function (p) { return p.id; }),
      generatedAt: Date.now()
    };
  }

  /* ---------------- Sinh đề theo blueprint ---------------- */
  function generateBlueprintExam(level, mode, rng, opts) {
    opts = opts || {};
    var bp = blueprintFor(level);
    var counts = mode === "full" ? bp.sec.map(function (s) { return s[1]; }) : reducedCounts(bp);
    var poolAll = wordsOfLevel(level);
    var poolEx = exampleWordsOfLevel(level);
    var passages = passagesOfLevel(level);
    var used = {}, usedTyped = {};
    var questions = [];
    var passagesUsed = [];
    function fresh(q, relax) {
      if (!q) return false;
      if (!relax && used[q.srcKey]) return false;
      if (relax && usedTyped[q.srcKey + "#" + q.type]) return false;
      used[q.srcKey] = 1;
      usedTyped[q.srcKey + "#" + q.type] = 1;
      return true;
    }
    function take(maker, relax) {
      var q = maker();
      if (fresh(q, relax)) { questions.push(q); return true; }
      return false;
    }
    var plan = [];
    bp.sec.forEach(function (sDef, sIdx) {
      var key = sDef[0], want = counts[sIdx];
      var before = questions.length;
      var guard;
      if (key === "listen") {
        var makers = [
          function () { return genListenDialogue(level, poolEx, rng); },
          function () { return genListenMeaning(level, poolEx, rng); },
          function () { return genListenSentence(level, poolEx, rng); }
        ];
        var li = 0; guard = 0;
        while (li < want && guard++ < want * 40) {
          if (take(makers[li % 3], false)) li++;
          else makers.push(makers.shift()); /* dạng này đang bí nguồn — xoay sang dạng khác */
        }
        guard = 0;
        while (li < want && guard++ < want * 40) { if (take(makers[li % 3], true)) li++; }
      } else if (key === "reading") {
        var orderedPassages = opts.preferPassages && opts.preferPassages.length
          ? opts.preferPassages.slice()
          : shuffle(passages, rng);
        if (!orderedPassages.length) {
          var fb = fallbackPassage(level, poolEx, rng);
          if (fb) orderedPassages = [fb];
        }
        var ri = 0;
        for (var pi = 0; pi < orderedPassages.length && ri < want; pi++) {
          var p = orderedPassages[pi];
          var others = passages.filter(function (x) { return x !== p; });
          var pqs = passageQuestions(level, p, poolAll, rng, others, { order: true });
          var usedThisPassage = false;
          for (var qi = 0; qi < pqs.length && ri < want; qi++) {
            if (fresh(pqs[qi], false)) { questions.push(pqs[qi]); ri++; usedThisPassage = true; }
          }
          if (usedThisPassage && passagesUsed.indexOf(p.id) < 0) passagesUsed.push(p.id);
        }
        guard = 0;
        var fillMakers = [
          function () { var q = genCloze(level, poolAll, poolEx, rng); if (q) q.section = "reading"; return q; },
          function () { var q = genVocabMeaning(level, poolAll, rng); if (q) q.section = "reading"; return q; },
          function () { var q = genVocabPinyin(level, poolAll, rng); if (q) q.section = "reading"; return q; }
        ];
        var fi = 0;
        while (ri < want && guard++ < want * 40) { if (take(fillMakers[fi % 3], false)) { ri++; } fi++; }
        guard = 0;
        while (ri < want && guard++ < want * 40) { if (take(fillMakers[fi % 3], true)) { ri++; } fi++; }
      } else if (key === "writing") {
        var wi = 0; guard = 0;
        var usePassageCloze = !!bp.writingSub;
        while (wi < want && guard++ < want * 60) {
          var mkW = (usePassageCloze && wi % 2 === 1)
            ? function () { return genWritingPassageCloze(level, poolAll, passages, rng); }
            : function () { return genWriteOrder(level, poolAll, poolEx, rng); };
          if (take(mkW, false)) wi++;
        }
        guard = 0;
        while (wi < want && guard++ < want * 60) {
          var mkW2 = (usePassageCloze && wi % 2 === 1)
            ? function () { return genWritingPassageCloze(level, poolAll, passages, rng); }
            : function () { return genWriteOrder(level, poolAll, poolEx, rng); };
          if (take(mkW2, true)) wi++;
        }
      }
      var got = questions.length - before;
      plan.push({ key: key, count: got, seconds: sDef[2] });
    });
    var totalSeconds = mode === "full"
      ? bp.sec.reduce(function (a, s) { return a + s[2]; }, 0)
      : Math.round(bp.sec.reduce(function (a, s) { return a + s[2]; }, 0) *
          (questions.length / Math.max(1, bp.sec.reduce(function (a, s) { return a + s[1]; }, 0))));
    return {
      level: Number(level), mode: mode, sizeKey: mode, spec: null,
      questions: questions, total: questions.length,
      seconds: totalSeconds, sectionPlan: plan,
      scaleMax: bp.scale, passMark: bp.pass,
      simulated: !!bp.simulated, writingSub: !!bp.writingSub,
      passagesUsed: passagesUsed,
      generatedAt: Date.now()
    };
  }

  function generateExam(level, modeKey, rng, opts) {
    rng = rng || Math.random;
    if (modeKey === "mini" || modeKey === "standard") return generateLegacyExam(level, modeKey, rng);
    return generateBlueprintExam(level, modeKey === "full" ? "full" : "reduced", rng, opts);
  }

  /* ---------------- Chấm điểm kiểu Study4 ---------------- */
  function isOrderType(q) { return q && (q.type === "write-order" || q.type === "read-order"); }
  function isCorrectAnswer(q, a) {
    if (!q) return false;
    if (isOrderType(q)) {
      if (!Array.isArray(a) || !Array.isArray(q.answerSeq)) return false;
      if (a.length !== q.answerSeq.length) return false;
      for (var i = 0; i < a.length; i++) if (a[i] !== q.answerSeq[i]) return false;
      return true;
    }
    return a === q.answer;
  }
  function isAnswered(q, a) {
    if (isOrderType(q)) return Array.isArray(a) && a.length === (q.options || []).length;
    return typeof a === "number" && a >= 0;
  }
  function computeScore(exam, answers) {
    var per = {};
    (exam.sectionPlan || []).forEach(function (p) { per[p.key] = { n: 0, ok: 0, score: null }; });
    exam.questions.forEach(function (q, i) {
      if (!per[q.section]) per[q.section] = { n: 0, ok: 0, score: null };
      per[q.section].n++;
      if (isCorrectAnswer(q, answers[i])) per[q.section].ok++;
    });
    var totalScore = 0, weakest = null, weakestScore = Infinity;
    Object.keys(per).forEach(function (k) {
      var s = per[k];
      s.score = s.n ? Math.round(100 * s.ok / s.n) : null;
      if (s.score != null) {
        totalScore += s.score;
        if (s.score < weakestScore) { weakestScore = s.score; weakest = k; }
      }
    });
    var scaleMax = exam.scaleMax || 300;
    var passMark = exam.passMark || Math.round(scaleMax * 0.6);
    var pct = scaleMax ? Math.round(1000 * totalScore / scaleMax) / 10 : 0;
    var passed = totalScore >= passMark;
    var verdict;
    if (pct >= 85) {
      verdict = { tier: "ready", text: "🏆 Mức sẵn sàng: ĐIỂM SỐ NÀY ĐỦ TỰ TIN ĐĂNG KÝ THI THẬT. Hãy giữ nhịp ôn tập và làm thêm đề thư viện để ổn định phong độ." };
    } else if (passed) {
      verdict = { tier: "pass", text: "💪 Mức sẵn sàng: ĐÃ ĐẠT MỐC ĐIỂM QUA MÔN (" + passMark + "/" + scaleMax + "). Để chắc chắn hơn khi thi thật, hãy ôn thêm phần yếu nhất: " + sectionName(weakest) + "." };
    } else {
      verdict = { tier: "fail", text: "🌱 Mức sẵn sàng: CHƯA ĐẠT MỐC " + passMark + "/" + scaleMax + ". Cần ôn kỹ phần yếu nhất: " + sectionName(weakest) + " trước khi đăng ký thi thật." };
    }
    return {
      perSection: per, totalScore: totalScore, scaleMax: scaleMax,
      passMark: passMark, passed: passed, pct: pct,
      weakest: weakest, verdict: verdict
    };
  }
  var SECTION_LABEL = {
    listen: "🎧 Nghe hiểu", vocab: "📚 Từ vựng & ngữ pháp",
    reading: "📖 Đọc hiểu", writing: "✍️ Viết"
  };
  function sectionName(key) { return SECTION_LABEL[key] || key || "—"; }

  /* ---------------- Kiểm chứng đề ---------------- */
  function validateExam(exam) {
    var errs = [];
    if (!exam || !Array.isArray(exam.questions)) return ["no questions"];
    exam.questions.forEach(function (q, i) {
      var tag = "Q" + (i + 1) + "(" + q.type + ")";
      if (!String(q.stem || "").trim()) errs.push(tag + ": empty stem");
      if (isOrderType(q)) {
        var m = (q.options || []).length;
        if (m < 4 || m > 9) errs.push(tag + ": order options " + m);
        var seenO = {};
        (q.options || []).forEach(function (o) { seenO[normOpt(o)] = (seenO[normOpt(o)] || 0) + 1; });
        if (Object.keys(seenO).length !== m) errs.push(tag + ": duplicate order chunks");
        if (!Array.isArray(q.answerSeq) || q.answerSeq.length !== m) { errs.push(tag + ": bad answerSeq"); return; }
        var perm = q.answerSeq.slice().sort(function (a, b) { return a - b; });
        for (var pi2 = 0; pi2 < m; pi2++) if (perm[pi2] !== pi2) { errs.push(tag + ": answerSeq not permutation"); break; }
        var rebuilt = q.answerSeq.map(function (oi) { return q.options[oi]; }).join("");
        if (rebuilt !== q.correctText) errs.push(tag + ": answerSeq rebuild != correctText");
        if (Array.isArray(q.chunks) && q.chunks.join("") !== q.correctText) errs.push(tag + ": chunks != correctText");
        return;
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) { errs.push(tag + ": options!=4"); return; }
      var seen = {};
      q.options.forEach(function (o) { seen[normOpt(o)] = (seen[normOpt(o)] || 0) + 1; });
      if (Object.keys(seen).length !== 4) errs.push(tag + ": duplicate options");
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) errs.push(tag + ": bad answer idx");
      else if (q.options[q.answer] !== q.correctText) errs.push(tag + ": answer!=correctText");
      if (q.section === "listen" && !String(q.speakText || "").trim()) errs.push(tag + ": listen without speakText");
      if ((q.type === "cloze" || q.type === "read-cloze" || q.type === "write-cloze")) {
        if (!q.sourceSentence || String(q.sourceSentence).indexOf(q.targetWord) < 0) errs.push(tag + ": cloze source lacks target");
        if (!q.sub || q.sub.indexOf("＿＿") < 0) errs.push(tag + ": cloze not blanked");
      }
    });
    return errs;
  }

  /* ---------------- Ngân hàng đề (Phần 3) ----------------
     40 đề/cấp, sinh xác định: seed = hash(testId + lượt thử).
     Dựng tăng dần Đề 1 -> Đề N trong bộ nhớ phiên: sổ ledger ghi
     nguồn câu hỏi (srcKey -> các dạng đã dùng) + số lần dùng từng
     bài đọc của các đề trước; mỗi đề mới thử tối đa 5 hạt giống,
     chọn bản có độ trùng nguồn thấp nhất (trùng nguyên dạng tính 1,
     trùng nguồn nhưng khác dạng tính 0,4). */
  var CATALOG_PER_LEVEL = 40;
  var CATALOG_ATTEMPTS = 5;
  var catalogCache = {};
  function testIdOf(level, n) { return "HSK" + Number(level) + "-D" + n; }
  function catalogSeed(level, n, attempt) {
    return hashStr("TTC-CATALOG|" + level + "|" + n + "|" + attempt);
  }
  function overlapOf(exam, ledger) {
    if (!exam || !exam.total) return 1;
    var wsum = 0;
    exam.questions.forEach(function (q) {
      var types = ledger[q.srcKey];
      if (types) wsum += types[q.type] ? 1 : 0.4;
    });
    return wsum / exam.total;
  }
  function buildCatalogUpTo(level, n) {
    level = Number(level);
    var c = catalogCache[level];
    if (!c) {
      c = catalogCache[level] = { tests: [], ledger: {}, passageUse: {} };
    }
    while (c.tests.length < n) {
      var idx = c.tests.length + 1;
      var passages = passagesOfLevel(level);
      var prefer = passages.slice().sort(function (a, b) {
        var ca = c.passageUse[a.id] || 0, cb = c.passageUse[b.id] || 0;
        if (ca !== cb) return ca - cb;
        return String(a.id) < String(b.id) ? -1 : 1;
      });
      var best = null, bestOv = Infinity, bestSeed = 0;
      for (var att = 0; att < CATALOG_ATTEMPTS; att++) {
        var seed = catalogSeed(level, idx, att);
        var cand = generateExam(level, "reduced", mulberry32(seed), { preferPassages: prefer });
        var ov = overlapOf(cand, c.ledger);
        if (ov < bestOv) { bestOv = ov; best = cand; bestSeed = seed; }
        if (ov === 0 || (att >= 1 && ov <= 0.12)) break; /* đủ tốt — ưu tiên tốc độ mở đề */
      }
      best.mode = "catalog";
      best.testId = testIdOf(level, idx);
      best.seed = bestSeed;
      best.overlapIn = Math.round(bestOv * 1000) / 1000;
      best.questions.forEach(function (q) {
        if (!c.ledger[q.srcKey]) c.ledger[q.srcKey] = {};
        c.ledger[q.srcKey][q.type] = 1;
      });
      (best.passagesUsed || []).forEach(function (pid) {
        c.passageUse[pid] = (c.passageUse[pid] || 0) + 1;
      });
      c.tests.push(best);
    }
    return c.tests[n - 1];
  }
  function catalogBestMap() {
    var map = {};
    loadHistory().forEach(function (h) {
      if (!h || !h.testId) return;
      var cur = map[h.testId];
      if (!cur || (typeof h.totalScore === "number" && h.totalScore > (cur.totalScore || -1))) map[h.testId] = h;
    });
    return map;
  }

  /* ---------------- TTS (mẫu speakHub của trang) ----------------
     speakText có thể chứa nhiều lượt nói cách nhau bằng "\n"
     (hội thoại) — đọc nối tiếp bằng hàng đợi utterance. */
  function speak(text) {
    if (!text || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      var parts = String(text).split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
      if (!parts.length) parts = [String(text)];
      parts.forEach(function (p) {
        var u = new SpeechSynthesisUtterance(p);
        u.lang = "zh-CN";
        u.rate = typeof window.selectedRate === "number" ? window.selectedRate : 0.9;
        u.pitch = 1; u.volume = 1;
        window.speechSynthesis.speak(u);
      });
    } catch (e) {}
  }
  function stopSpeak() {
    if ("speechSynthesis" in window) { try { window.speechSynthesis.cancel(); } catch (e) {} }
  }

  /* ---------------- CSS riêng của khu thi + bảng điểm ---------------- */
  var CSS = [
    "#ttcExamOverlay{position:fixed;inset:0;z-index:1000200;background:rgba(15,23,42,.62);display:none;align-items:flex-start;justify-content:center;padding:12px;overflow:auto}",
    "#ttcExamOverlay.open{display:flex}",
    "#ttcScoreBoardOverlay{position:fixed;inset:0;z-index:1000201;background:rgba(15,23,42,.62);display:none;align-items:flex-start;justify-content:center;padding:12px;overflow:auto}",
    "#ttcScoreBoardOverlay.open{display:flex}",
    ".ttc-exam-card{width:min(980px,98vw)}",
    ".ttc-exam-note{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.5}",
    ".ttc-exam-free{background:#f0fdf4;border:1px solid #bbf7d0;color:#166534;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.5}",
    ".ttc-exam-levels{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}",
    ".ttc-exam-level{border:2px solid #e2e8f0;background:#fff;border-radius:14px;padding:10px 14px;font-size:15px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-level small{display:block;font-weight:500;color:#64748b;font-size:12px;margin-top:2px}",
    ".ttc-exam-level.on{border-color:#f59e0b;background:#fffbeb}",
    ".ttc-exam-sizes{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 14px}",
    ".ttc-exam-size{border:2px solid #e2e8f0;background:#fff;border-radius:999px;padding:8px 16px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-size.on{border-color:#2563eb;background:#eff6ff}",
    ".ttc-exam-modedesc{font-size:13.5px;color:#475569;margin:-6px 0 12px;line-height:1.55}",
    ".ttc-exam-start{background:#f59e0b;color:#fff;border:none;border-radius:14px;padding:13px 26px;font-size:17px;font-weight:700;cursor:pointer}",
    ".ttc-exam-start:disabled{opacity:.5;cursor:wait}",
    ".ttc-exam-hist{margin-top:18px}",
    ".ttc-exam-hist h3{margin:0 0 8px;font-size:16px;color:#172033}",
    ".ttc-exam-hist-item{display:flex;justify-content:space-between;gap:10px;padding:8px 10px;border:1px solid #eef1f5;border-radius:10px;margin-bottom:6px;font-size:14px;color:#334155;background:#fbfcfe}",
    ".ttc-exam-lib{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr));gap:8px;margin:10px 0 4px}",
    ".ttc-exam-libcell{border:2px solid #e2e8f0;background:#fff;border-radius:13px;padding:9px 8px;cursor:pointer;color:#172033;font-weight:700;font-size:14.5px;text-align:center;line-height:1.35}",
    ".ttc-exam-libcell small{display:block;font-weight:600;font-size:12px;color:#64748b;margin-top:2px}",
    ".ttc-exam-libcell.done{border-color:#93c5fd;background:#eff6ff}",
    ".ttc-exam-libcell.pass{border-color:#16a34a;background:#f0fdf4}",
    ".ttc-exam-libcell small b{color:#166534}",
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
    ".ttc-exam-ord-answer{min-height:52px;border:2px dashed #93c5fd;background:#eff6ff;border-radius:13px;padding:8px;display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:10px}",
    ".ttc-exam-ord-answer:empty:before{content:'Bấm các mảnh từ bên dưới để xếp thành câu…';color:#64748b;font-size:14px}",
    ".ttc-exam-ord-pool{display:flex;flex-wrap:wrap;gap:7px;margin-top:10px}",
    ".ttc-exam-ord-pool.long,.ttc-exam-ord-answer.long{display:grid;gap:7px}",
    ".ttc-exam-chip{border:2px solid #e2e8f0;background:#fff;border-radius:11px;padding:9px 13px;font-size:16.5px;cursor:pointer;color:#172033;line-height:1.5;text-align:left}",
    ".ttc-exam-chip:hover{border-color:#2563eb}",
    ".ttc-exam-chip.in-answer{border-color:#2563eb;background:#dbeafe;font-weight:600}",
    ".ttc-exam-ord-reset{margin-top:10px}",
    ".ttc-exam-nav{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;align-items:center}",
    ".ttc-exam-btn{border:1px solid #e2e8f0;background:#f8fafc;border-radius:11px;padding:10px 16px;font-weight:600;cursor:pointer;color:#172033}",
    ".ttc-exam-btn.primary{background:#f59e0b;color:#fff;border-color:#f59e0b}",
    ".ttc-exam-btn.armed{background:#dc2626;color:#fff;border-color:#dc2626}",
    ".ttc-exam-grid{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}",
    ".ttc-exam-gcell{width:38px;height:38px;border-radius:10px;border:2px solid #e2e8f0;background:#fff;font-weight:700;cursor:pointer;color:#475569}",
    ".ttc-exam-gcell.done{background:#dbeafe;border-color:#93c5fd;color:#1d4ed8}",
    ".ttc-exam-gcell.cur{border-color:#f59e0b;color:#b45309}",
    ".ttc-exam-score{font-size:44px;font-weight:800;color:#172033;line-height:1.1}",
    ".ttc-exam-total{font-size:21px;font-weight:800;color:#172033}",
    ".ttc-exam-passbadge{display:inline-block;font-weight:800;border-radius:99px;padding:5px 16px;font-size:15px;margin-top:8px}",
    ".ttc-exam-passbadge.ok{background:#dcfce7;color:#166534}",
    ".ttc-exam-passbadge.bad{background:#fee2e2;color:#991b1b}",
    ".ttc-exam-secbar{display:flex;align-items:center;gap:10px;margin:7px 0;font-size:14.5px;color:#334155}",
    ".ttc-exam-secbar .nm{flex:0 0 168px;font-weight:600}",
    ".ttc-exam-secbar .bar{flex:1;height:12px;background:#eef1f5;border-radius:99px;overflow:hidden}",
    ".ttc-exam-secbar .bar i{display:block;height:100%;background:#2563eb;border-radius:99px}",
    ".ttc-exam-secbar .val{flex:0 0 118px;text-align:right;font-weight:700;color:#172033}",
    ".ttc-exam-verdict{border-radius:13px;padding:12px 14px;font-size:15px;line-height:1.6;margin-top:14px;text-align:left}",
    ".ttc-exam-verdict.ready{background:#f0fdf4;border:1px solid #bbf7d0;color:#14532d}",
    ".ttc-exam-verdict.pass{background:#fffbeb;border:1px solid #fde68a;color:#78350f}",
    ".ttc-exam-verdict.fail{background:#fef2f2;border:1px solid #fecaca;color:#7f1d1d}",
    ".ttc-exam-reviewq{border:1px solid #eef1f5;border-radius:14px;padding:13px 14px;margin-bottom:12px;background:#fbfcfe}",
    ".ttc-exam-reviewq .ttc-exam-opt{cursor:default}",
    ".ttc-exam-opt.right{border-color:#16a34a;background:#f0fdf4}",
    ".ttc-exam-opt.wrong{border-color:#dc2626;background:#fef2f2}",
    ".ttc-exam-explain{background:#f0f9ff;border:1px solid #bae6fd;border-radius:11px;padding:10px 12px;margin-top:10px;font-size:15px;line-height:1.65;color:#0c4a6e;white-space:pre-wrap}",
    ".ttc-exam-tag{display:inline-block;font-size:12px;font-weight:700;border-radius:99px;padding:2px 9px;margin-left:8px;vertical-align:middle}",
    ".ttc-exam-tag.ok{background:#dcfce7;color:#166534}",
    ".ttc-exam-tag.bad{background:#fee2e2;color:#991b1b}",
    ".ttc-exam-tag.skip{background:#e2e8f0;color:#475569}",
    ".ttc-sb-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:9px;margin:12px 0}",
    ".ttc-sb-stat{border:1px solid #eef1f5;background:#fbfcfe;border-radius:13px;padding:11px 12px}",
    ".ttc-sb-stat b{display:block;font-size:20px;color:#172033;line-height:1.25}",
    ".ttc-sb-stat span{font-size:13px;color:#64748b}",
    ".ttc-sb-table{display:grid;gap:7px;margin-top:8px}",
    ".ttc-sb-row{display:grid;grid-template-columns:118px 52px 1.25fr .62fr .62fr .62fr .62fr .8fr 74px 86px;gap:7px;align-items:center;border:1px solid #eef1f5;border-radius:11px;padding:8px 10px;font-size:13.5px;color:#334155;background:#fbfcfe}",
    ".ttc-sb-row.head{background:#f1f5f9;font-weight:700;color:#172033;border-color:#e2e8f0}",
    ".ttc-sb-row .ctr{text-align:center}",
    ".ttc-sb-badge{display:inline-block;font-weight:800;border-radius:99px;padding:2px 10px;font-size:12.5px}",
    ".ttc-sb-badge.ok{background:#dcfce7;color:#166534}",
    ".ttc-sb-badge.bad{background:#fee2e2;color:#991b1b}",
    ".ttc-sb-badge.na{background:#e2e8f0;color:#475569}",
    ".ttc-sb-view{border:1px solid #2563eb;background:#eff6ff;color:#1d4ed8;border-radius:9px;padding:6px 8px;font-weight:700;cursor:pointer;font-size:13px}",
    ".ttc-cb-wrap{margin-top:22px;border-top:2px dashed #e2e8f0;padding-top:16px}",
    ".ttc-cb-chips{display:flex;flex-wrap:wrap;gap:7px;margin:10px 0 12px}",
    ".ttc-cb-chip{border:1.5px solid #e2e8f0;background:#fff;color:#334155;border-radius:99px;padding:6px 13px;font-weight:800;font-size:13.5px;cursor:pointer;min-height:36px}",
    ".ttc-cb-chip.on{background:#2563eb;border-color:#2563eb;color:#fff}",
    ".ttc-cb-table{display:grid;gap:7px}",
    ".ttc-cb-row{display:grid;grid-template-columns:64px 1fr .72fr .62fr .62fr;gap:7px;align-items:center;border:1px solid #eef1f5;border-radius:11px;padding:8px 10px;font-size:13.5px;color:#334155;background:#fbfcfe}",
    ".ttc-cb-row.head{background:#f1f5f9;font-weight:700;color:#172033;border-color:#e2e8f0}",
    ".ttc-cb-row .ctr{text-align:center}",
    ".ttc-cb-row.top1{border-color:#fde68a;background:#fffbeb}",
    ".ttc-cb-row.top2{border-color:#e5e7eb;background:#f8fafc}",
    ".ttc-cb-row.top3{border-color:#fed7aa;background:#fff7ed}",
    ".ttc-cb-more{display:block;margin:12px auto 2px;border:1px solid #2563eb;background:#eff6ff;color:#1d4ed8;border-radius:11px;padding:10px 22px;font-weight:800;cursor:pointer;font-size:14px;min-height:44px}",
    "@media (max-width:860px){.ttc-cb-row{grid-template-columns:52px 1fr .7fr .58fr .58fr;font-size:12.5px}}",
    "@media (max-width:860px){.ttc-sb-row{grid-template-columns:96px 44px 1fr .6fr .6fr .6fr .6fr .78fr 64px 78px;font-size:12.5px}}",
    "/* Panel Luyện thi: thẻ hero gradient riêng, đứng TRÊN thẻ Trình độ & kỹ năng ở cột giữa. Đợt 3: panel + thẻ kỹ năng nằm trong .ttc-exam-midstack (1 item lưới flex cột ở cột 2/hàng 1, gap 18px) để thẻ kỹ năng sát ngay dưới panel, hết phụ thuộc chiều cao cột trái; mobile stack tan (display:contents) cho 2 thẻ về đúng grid-area exam/level. */",
    "#otter2-home #otter2ExamPanel{position:relative;overflow:hidden;border:1px solid #e7e9ee;background:#fff;box-shadow:0 14px 34px rgba(23,25,40,.07);color:#0f172a}",
    "#otter2ExamPanel::before{content:'';position:absolute;inset:0;background:none;pointer-events:none}",
    "#otter2ExamPanel::after{content:'考';position:absolute;right:10px;bottom:-48px;font-size:150px;font-weight:900;line-height:1;color:rgba(194,65,12,.06);pointer-events:none}",
    "html[data-theme='night'] #otter2-home #otter2ExamPanel{background:#111827}",
    ".ttc-exam-panel-in{position:relative;z-index:1}",
    ".ttc-exam-panel-head{display:flex;align-items:center;gap:12px}",
    ".ttc-exam-panel-trophy{flex:none;width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:29px;line-height:1;background:#fff7ed;border:1.5px solid #fed7aa;box-shadow:0 8px 20px rgba(194,65,12,.12)}",
    ".ttc-exam-panel-title{margin:0;font-size:21px;font-weight:900;letter-spacing:.01em;line-height:1.2;color:#c2410c;text-shadow:none}",
    ".ttc-exam-panel-free{margin-left:auto;flex:none;background:#fde68a;color:#451a03;font-size:12.5px;font-weight:900;padding:7px 14px;border-radius:999px;letter-spacing:.07em;box-shadow:0 6px 16px rgba(245,158,11,.35);animation:ttcExamFreePulse 2.2s ease-in-out infinite}",
    "@keyframes ttcExamFreePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}",
    "@media (prefers-reduced-motion:reduce){.ttc-exam-panel-free{animation:none}}",
    ".ttc-exam-panel-desc{margin:12px 0 0;font-size:14px;color:#475569;line-height:1.6;text-shadow:none}",
    ".ttc-exam-panel-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:13px}",
    ".ttc-exam-panel-chip{border:1px solid #e7e9ee;background:#f8fafc;color:#c2410c;border-radius:999px;padding:8px 13px;font-size:13px;font-weight:800;cursor:pointer;min-height:38px;backdrop-filter:none;-webkit-backdrop-filter:none;transition:background .15s ease,transform .15s ease}",
    ".ttc-exam-panel-chip:hover{background:#f1f5f9}",
    ".ttc-exam-panel-chip:active{transform:scale(.96)}",
    ".ttc-exam-panel-chip.is-cur{background:#c2410c;border-color:#c2410c;color:#fff;box-shadow:0 6px 16px rgba(194,65,12,.25)}",
    ".ttc-exam-panel-last{margin:13px 0 0;font-size:13px;font-weight:700;color:#475569;background:#f8fafc;border:1px solid #e7e9ee;border-radius:12px;padding:8px 12px}",
    ".ttc-exam-panel-last[hidden]{display:none}",
    ".ttc-exam-panel-btn{display:block;width:100%;margin-top:14px;border:1px solid #c2410c;border-radius:14px;background:#c2410c;color:#fff;font-size:16.5px;font-weight:900;padding:14px 16px;cursor:pointer;min-height:52px;box-shadow:0 10px 22px rgba(194,65,12,.28);transition:transform .15s ease,box-shadow .15s ease}",
    ".ttc-exam-panel-btn:hover{transform:translateY(-1px);box-shadow:0 14px 26px rgba(194,65,12,.34)}",
    ".ttc-exam-panel-btn:active{transform:translateY(0)}",
    ".ttc-exam-panel-btn-txt{background:none;-webkit-background-clip:initial;background-clip:initial;-webkit-text-fill-color:currentColor;color:#fff}",
    "@media (min-width:1021px){#otter2-home .ttc-exam-midstack{grid-column:2;grid-row:1;display:flex;flex-direction:column;gap:18px;min-width:0}#otter2-home .otter2-dash-main>section[aria-labelledby='otter2DashLessonsTitle']{grid-row:2}}",
    "@media (max-width:1020px){#otter2-home{grid-template-areas:'hero' 'strip' 'course' 'exam' 'level' 'activity' 'tasks' 'lessons' 'continue' 'road' 'journey' 'banner'}#otter2-home #otter2ExamPanel{grid-area:exam}#otter2-home .ttc-exam-midstack{display:contents}}",
    "@media (max-width:720px){.ttc-exam-stem{font-size:16px}.ttc-exam-sub{font-size:17px}.ttc-exam-score{font-size:36px}.ttc-exam-secbar .nm{flex-basis:118px}.ttc-exam-secbar .val{flex-basis:92px}}"
  ].join("\n");

  /* ---------------- Trạng thái + lịch sử ----------------
     KHU THI FREE TOÀN BỘ (chính sách chủ web 2026-11-17): không
     cổng Premium, không cần đăng nhập ở bất kỳ cấp nào. */
  var HISTORY_KEY = "otter2_exam_history_v1";
  var REVIEW_KEY = "otter2_exam_review_v1";
  var REVIEW_MAX = 6;
  var REVIEW_BYTES = 2500000;
  var state = {
    overlay: null, content: null,
    view: "home",
    level: 1, mode: "reduced",
    exam: null, answers: [], cur: 0,
    testId: null, seed: null,
    sectionIdx: 0, sectionRemaining: 0, sectionNote: "",
    startedAt: 0, remaining: 0, timerId: null,
    submitted: false, submitArmed: false, submitArmTimer: null,
    closeArmed: false, closeArmTimer: null,
    lastSecondsUsed: 0, lastAuto: false
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
  function loadReviews() {
    try {
      var raw = JSON.parse(localStorage.getItem(REVIEW_KEY) || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch (e) { return []; }
  }
  function saveReview(entry) {
    try {
      var list = loadReviews();
      list.unshift(entry);
      list = list.slice(0, REVIEW_MAX);
      var s = JSON.stringify(list);
      while (s.length > REVIEW_BYTES && list.length > 1) { list.pop(); s = JSON.stringify(list); }
      localStorage.setItem(REVIEW_KEY, s);
      return true;
    } catch (e) {
      try {
        var l2 = loadReviews().slice(0, 2);
        l2.unshift(entry);
        localStorage.setItem(REVIEW_KEY, JSON.stringify(l2));
        return true;
      } catch (e2) { return false; }
    }
  }
  function fmtDate(ts) {
    try { return new Date(ts).toLocaleString("vi-VN", { hour12: false }); } catch (e) { return ""; }
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
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
    state.testId = null; state.seed = null;
    refreshPanel();
  }

  /* ---------------- Trang chủ khu thi ---------------- */
  function levelCounts(n) {
    return { words: wordsOfLevel(n).length, passages: passagesOfLevel(n).length };
  }
  var MODES = [
    { key: "full", label: "🏅 Thi thật mô phỏng" },
    { key: "reduced", label: "📐 Thi rút gọn" },
    { key: "mini", label: "⚡ Mini · 10 câu" },
    { key: "standard", label: "⚡ Chuẩn · 20 câu" }
  ];
  function modeDesc(level, mode) {
    var bp = blueprintFor(level);
    var parts = bp.sec.map(function (s) { return sectionName(s[0]).replace(/^\S+ /, "") + " " + s[1]; }).join(" · ");
    if (mode === "full") {
      return (bp.simulated
        ? "Bản MÔ PHỎNG đầy đủ cho HSK" + level + " (chưa có blueprint chính thức trong hệ thống): "
        : "Đúng cấu trúc đề HSK" + level + " thật: ") + parts +
        " câu — tổng thang " + bp.scale + " điểm, mốc đạt " + bp.pass + ". Bấm giờ TỪNG PHẦN, hết giờ phần tự chuyển và không quay lại được, như phòng thi thật.";
    }
    if (mode === "reduced") {
      var rc = reducedCounts(bp);
      var rparts = bp.sec.map(function (s, i) { return sectionName(s[0]).replace(/^\S+ /, "") + " " + rc[i]; }).join(" · ");
      return "Thu nhỏ theo đúng tỉ lệ đề thật (" + rparts + " câu) nhưng vẫn chấm trên thang " + bp.scale + " điểm, mốc đạt " + bp.pass + " — hợp để đo năng lực nhanh. Thư viện đề bên dưới dùng đúng bản rút gọn này.";
    }
    if (mode === "mini") return "Luyện nhanh 10 câu (Nghe 3 · Từ vựng 4 · Đọc 3), 10 phút, chấm thang 300.";
    return "Luyện nhanh 20 câu (Nghe 6 · Từ vựng 8 · Đọc 6), 25 phút, chấm thang 300.";
  }
  function renderHome() {
    state.view = "home";
    var lvHtml = "";
    for (var n = 1; n <= 9; n++) {
      var c = levelCounts(n);
      lvHtml += '<button type="button" class="ttc-exam-level' + (state.level === n ? " on" : "") + '" data-exam-level="' + n + '">' +
        "HSK " + n + "<small>" + c.words + " từ · " + c.passages + " bài đọc</small></button>";
    }
    var modeHtml = MODES.map(function (m) {
      var label = m.label;
      if (m.key === "full" && blueprintFor(state.level).simulated) label = "🏅 Mô phỏng đầy đủ · thang 300";
      return '<button type="button" class="ttc-exam-size' + (state.mode === m.key ? " on" : "") + '" data-exam-mode="' + m.key + '">' + esc(label) + "</button>";
    }).join("");
    var extraNote = "";
    if (state.level === 6) {
      extraNote = '<div class="ttc-exam-note" style="margin-top:10px">✍️ Lưu ý HSK6: đề thật có 1 bài luận tự viết (không chấm tự động được). Trong bản thi thử này, phần Viết được thay bằng <b>sắp xếp từ thành câu + điền khuyết nâng cao</b> với trọng số điểm tương đương — đề thi thử khác (Study4…) cũng xử lý tương tự.</div>';
    } else if (state.level >= 7) {
      extraNote = '<div class="ttc-exam-note" style="margin-top:10px">ℹ️ HSK7–9 dùng <b>bản mô phỏng</b> theo tỉ lệ phần của đề cấp cao, chấm thang 300, mốc đạt 180.</div>';
    }
    var best = catalogBestMap();
    var libHtml = "";
    for (var dn = 1; dn <= CATALOG_PER_LEVEL; dn++) {
      var tid = testIdOf(state.level, dn);
      var b = best[tid];
      libHtml += '<button type="button" class="ttc-exam-libcell' + (b ? (b.passed ? " pass" : " done") : "") + '" data-exam-lib="' + dn + '">Đề ' + dn +
        (b ? "<small>🏅 <b>" + esc(b.totalScore) + "/" + esc(b.scaleMax) + "</b>" + (b.passed ? " · ĐẠT" : "") + "</small>" : "<small>Chưa làm</small>") + "</button>";
    }
    var hist = loadHistory();
    var histHtml = hist.length
      ? hist.slice(0, 10).map(function (h) {
          if (typeof h.totalScore === "number") {
            return '<div class="ttc-exam-hist-item"><span>📅 ' + esc(fmtDate(h.ts)) + " · HSK " + esc(h.level) + " · " + esc(h.modeLabel || "") + (h.testId ? " · " + esc(h.testId) : "") + "</span><b>" +
              esc(h.totalScore) + "/" + esc(h.scaleMax) + "đ · " + (h.passed ? "ĐẠT ✓" : "Chưa đạt") + " · ⏱ " + esc(fmtClock(h.secondsUsed)) + "</b></div>";
          }
          return '<div class="ttc-exam-hist-item"><span>📅 ' + esc(fmtDate(h.ts)) + " · HSK " + esc(h.level) + " · " + esc(h.sizeLabel || "") + "</span><b>" +
            esc(h.correct) + "/" + esc(h.total) + " câu · " + esc(h.pct) + "% · ⏱ " + esc(fmtClock(h.secondsUsed)) + "</b></div>";
        }).join("")
      : '<p style="color:#64748b;font-size:14px">Chưa có lượt làm bài nào. Hãy bắt đầu đề đầu tiên của bạn!</p>';
    state.content.innerHTML =
      '<div class="ttc-exam-free">🎉 <b>Khu Luyện thi MIỄN PHÍ TOÀN BỘ</b> — cả 9 cấp HSK1–9 đều mở tự do, không cần tài khoản Premium. Đề được sinh tự động từ kho từ vựng, câu ví dụ và bài đọc của Thích Tiếng Trung 3.0 — là <b>đề thi thử tự luyện</b>, không phải đề thi HSK chính thức, nhưng bám sát cấu trúc và thang điểm đề thật để bạn đo năng lực của mình.</div>' +
      '<h3 style="margin:16px 0 4px;color:#172033">1️⃣ Chọn cấp độ</h3><div class="ttc-exam-levels">' + lvHtml + "</div>" +
      '<h3 style="margin:10px 0 4px;color:#172033">2️⃣ Chọn chế độ thi</h3><div class="ttc-exam-sizes">' + modeHtml + "</div>" +
      '<div class="ttc-exam-modedesc">' + esc(modeDesc(state.level, state.mode)) + "</div>" + extraNote +
      '<button type="button" class="ttc-exam-start" id="ttcExamStart">🚀 Bắt đầu làm bài</button>' +
      '<h3 style="margin:22px 0 4px;color:#172033">📚 Thư viện đề — HSK ' + state.level + ' (' + CATALOG_PER_LEVEL + ' đề rút gọn)</h3>' +
      '<p style="color:#64748b;font-size:13.5px;margin:0">Mỗi đề là một bộ câu hỏi riêng, sinh ổn định theo mã đề — làm lại đề cũ sẽ gặp đúng bộ câu đó. Ô đề hiện điểm cao nhất bạn từng đạt.</p>' +
      '<div class="ttc-exam-lib">' + libHtml + "</div>" +
      '<div class="ttc-exam-hist"><h3>🕘 Lịch sử làm bài</h3>' + histHtml + "</div>";
    state.content.querySelectorAll("[data-exam-level]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.level = Number(b.getAttribute("data-exam-level"));
        renderHome();
      });
    });
    state.content.querySelectorAll("[data-exam-mode]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.mode = b.getAttribute("data-exam-mode");
        renderHome();
      });
    });
    state.content.querySelectorAll("[data-exam-lib]").forEach(function (b) {
      b.addEventListener("click", function () {
        startCatalog(Number(b.getAttribute("data-exam-lib")), b);
      });
    });
    document.getElementById("ttcExamStart").addEventListener("click", startExam);
  }

  /* ---------------- Làm bài ---------------- */
  function computeRanges(exam) {
    var ranges = [], pos = 0;
    (exam.sectionPlan || []).forEach(function (p) {
      ranges.push({ key: p.key, start: pos, end: pos + p.count, seconds: p.seconds || 0 });
      pos += p.count;
    });
    return ranges;
  }
  function beginWithExam(exam) {
    state.exam = exam;
    exam._ranges = computeRanges(exam);
    state.answers = exam.questions.map(function (q) { return isOrderType(q) ? [] : -1; });
    state.cur = 0;
    state.submitted = false;
    state.submitArmed = false;
    state.sectionNote = "";
    state.startedAt = Date.now();
    if (exam.mode === "full" && exam._ranges.length) {
      state.sectionIdx = 0;
      state.sectionRemaining = exam._ranges[0].seconds;
    } else {
      state.sectionIdx = 0;
      state.remaining = exam.seconds;
    }
    renderQuestion();
    startTimer();
  }
  function startExam() {
    var btn = document.getElementById("ttcExamStart");
    if (btn) { btn.disabled = true; btn.textContent = "⏳ Đang sinh đề…"; }
    setTimeout(function () {
      var exam = generateExam(state.level, state.mode);
      if (!exam.questions.length) {
        if (btn) { btn.disabled = false; btn.textContent = "🚀 Bắt đầu làm bài"; }
        alert("⚠️ Chưa đủ dữ liệu để sinh đề ở cấp này. Vui lòng thử cấp khác.");
        return;
      }
      state.testId = null; state.seed = null;
      beginWithExam(exam);
    }, 10);
  }
  function startCatalog(n, btn) {
    if (btn) { btn.disabled = true; btn.innerHTML = "Đề " + n + "<small>Đang chuẩn bị…</small>"; }
    setTimeout(function () {
      var exam = buildCatalogUpTo(state.level, n);
      if (!exam || !exam.questions.length) {
        if (btn) { btn.disabled = false; }
        alert("⚠️ Chưa đủ dữ liệu để sinh đề này. Vui lòng thử đề khác.");
        renderHome();
        return;
      }
      state.testId = exam.testId;
      state.seed = exam.seed;
      beginWithExam(exam);
    }, 10);
  }
  function isFullMode() { return state.exam && state.exam.mode === "full"; }
  function curRange() {
    if (!state.exam || !state.exam._ranges) return null;
    return state.exam._ranges[state.sectionIdx] || null;
  }
  function startTimer() {
    stopTimer();
    state.timerId = setInterval(function () {
      if (!state.exam || state.submitted) return;
      if (isFullMode()) {
        state.sectionRemaining -= 0.5;
        var t = document.getElementById("ttcExamTimer");
        if (t) {
          t.textContent = "⏱ " + fmtClock(state.sectionRemaining);
          t.classList.toggle("low", state.sectionRemaining <= 60);
        }
        if (state.sectionRemaining <= 0) advanceSection(true);
      } else {
        state.remaining -= 0.5;
        var t2 = document.getElementById("ttcExamTimer");
        if (t2) {
          t2.textContent = "⏱ " + fmtClock(state.remaining);
          t2.classList.toggle("low", state.remaining <= 60);
        }
        if (state.remaining <= 0) { submitExam(true); }
      }
    }, 500);
  }
  function stopTimer() { if (state.timerId) { clearInterval(state.timerId); state.timerId = null; } }
  function advanceSection(auto) {
    if (!isFullMode() || state.submitted) return;
    stopSpeak();
    var ranges = state.exam._ranges;
    if (state.sectionIdx >= ranges.length - 1) { submitExam(true); return; }
    var finishedKey = ranges[state.sectionIdx].key;
    state.sectionIdx++;
    state.sectionRemaining = ranges[state.sectionIdx].seconds;
    state.cur = ranges[state.sectionIdx].start;
    state.sectionNote = auto
      ? "⏰ Đã hết giờ phần " + sectionName(finishedKey) + " — hệ thống tự chuyển sang phần " + sectionName(ranges[state.sectionIdx].key) + ". Đề thi thật không cho quay lại phần trước."
      : "➡️ Bạn đã kết thúc phần " + sectionName(finishedKey) + " và chuyển sang phần " + sectionName(ranges[state.sectionIdx].key) + ". Không quay lại phần trước được.";
    renderQuestion();
  }

  function orderQuestionHtml(q) {
    var chosen = Array.isArray(state.answers[state.cur]) ? state.answers[state.cur] : [];
    var usedIdx = {};
    chosen.forEach(function (oi) { usedIdx[oi] = 1; });
    var long = q.type === "read-order" ? " long" : "";
    var answerChips = chosen.map(function (oi, pos) {
      return '<button type="button" class="ttc-exam-chip in-answer" data-exam-ord-remove="' + pos + '">' + esc(q.options[oi]) + "</button>";
    }).join("");
    var poolChips = q.options.map(function (o, oi) {
      if (usedIdx[oi]) return "";
      return '<button type="button" class="ttc-exam-chip" data-exam-ord-pick="' + oi + '">' + esc(o) + "</button>";
    }).join("");
    return '<div class="ttc-exam-ord-answer' + long + '" id="ttcExamOrdAnswer">' + answerChips + "</div>" +
      '<div class="ttc-exam-ord-pool' + long + '">' + poolChips + "</div>" +
      '<button type="button" class="ttc-exam-btn ttc-exam-ord-reset" id="ttcExamOrdReset">↺ Xếp lại từ đầu</button>' +
      '<div style="font-size:13px;color:#64748b;margin-top:6px">Bấm vào mảnh ở hàng dưới để đưa lên câu; bấm vào mảnh đã xếp để bỏ xuống.</div>';
  }
  function renderQuestion() {
    state.view = "exam";
    var exam = state.exam, q = exam.questions[state.cur];
    var full = isFullMode();
    var range = full ? curRange() : { start: 0, end: exam.total };
    var answered = exam.questions.filter(function (qq, i) { return isAnswered(qq, state.answers[i]); }).length;
    var secPos = (exam.sectionPlan || []).findIndex(function (p) { return p.key === q.section; });
    var timerVal = full ? state.sectionRemaining : state.remaining;
    var html = "";
    html += '<div class="ttc-exam-topbar"><span class="ttc-exam-timer" id="ttcExamTimer">⏱ ' + fmtClock(timerVal) + "</span>" +
      '<div class="ttc-exam-progress"><i style="width:' + Math.round(answered / exam.total * 100) + '%"></i></div>' +
      "<span style='font-weight:700;color:#475569'>Câu " + (state.cur + 1) + "/" + exam.total + " · Đã làm " + answered +
      (state.testId ? " · " + esc(state.testId) : "") + "</span></div>";
    if (state.sectionNote) {
      html += '<div class="ttc-exam-note" style="margin-bottom:10px">' + esc(state.sectionNote) + "</div>";
      state.sectionNote = "";
    }
    html += '<div class="ttc-exam-section">' + (full ? "Phần " + (state.sectionIdx + 1) + "/" + exam._ranges.length + " · " : "") +
      esc(sectionName(q.section)) + (secPos >= 0 && !full ? "" : "") + "</div>";
    if (q.passage) {
      html += '<div class="ttc-exam-passage">' + (q.passageTitle ? "<b>📖 " + esc(q.passageTitle) + "</b>\n" : "") + esc(q.passage) + "</div>";
    }
    html += '<div class="ttc-exam-stem">' + esc(q.stem) + "</div>";
    if (q.sub) html += '<div class="ttc-exam-sub">' + esc(q.sub) + "</div>";
    if (q.section === "listen") {
      html += '<button type="button" class="ttc-exam-listenbtn" id="ttcExamListen">🔊 Nghe</button>' +
        '<div style="font-size:13px;color:#64748b">Bạn có thể nghe lại nhiều lần. Nội dung nghe sẽ hiện ở phần xem lại sau khi nộp bài.</div>';
    }
    if (isOrderType(q)) {
      html += orderQuestionHtml(q);
    } else {
      html += '<div class="ttc-exam-opts">' + q.options.map(function (o, i) {
        return '<button type="button" class="ttc-exam-opt' + (state.answers[state.cur] === i ? " sel" : "") + '" data-exam-opt="' + i + '">' +
          '<span class="ttc-exam-letter">' + "ABCD"[i] + ".</span>" + esc(o) + "</button>";
      }).join("") + "</div>";
    }
    var isLastSection = !full || state.sectionIdx >= exam._ranges.length - 1;
    html += '<div class="ttc-exam-nav">' +
      '<button type="button" class="ttc-exam-btn" id="ttcExamPrev"' + (state.cur <= range.start ? " disabled" : "") + ">← Câu trước</button>" +
      '<button type="button" class="ttc-exam-btn" id="ttcExamNext"' + (state.cur >= range.end - 1 ? " disabled" : "") + ">Câu tiếp →</button>" +
      '<span style="flex:1"></span>' +
      (isLastSection
        ? '<button type="button" class="ttc-exam-btn primary' + (state.submitArmed ? " armed" : "") + '" id="ttcExamSubmit">' +
            (state.submitArmed ? "⚠️ Bấm lần nữa để nộp bài" : "📩 Nộp bài") + "</button>"
        : '<button type="button" class="ttc-exam-btn primary" id="ttcExamEndSection">⏭ Kết thúc phần này</button>') +
      "</div>";
    html += '<div class="ttc-exam-grid">' + exam.questions.slice(range.start, range.end).map(function (_, k) {
      var i = range.start + k;
      return '<button type="button" class="ttc-exam-gcell' + (isAnswered(exam.questions[i], state.answers[i]) ? " done" : "") + (i === state.cur ? " cur" : "") + '" data-exam-goto="' + i + '">' + (i + 1) + "</button>";
    }).join("") + "</div>";
    if (full) {
      html += '<div style="font-size:13px;color:#64748b;margin-top:8px">Chế độ thi thật mô phỏng: bạn chỉ làm được câu trong phần hiện tại; hết giờ phần sẽ tự chuyển.</div>';
    }
    state.content.innerHTML = html;
    state.content.querySelectorAll("[data-exam-opt]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.answers[state.cur] = Number(b.getAttribute("data-exam-opt"));
        renderQuestion();
      });
    });
    state.content.querySelectorAll("[data-exam-ord-pick]").forEach(function (b) {
      b.addEventListener("click", function () {
        var arr = Array.isArray(state.answers[state.cur]) ? state.answers[state.cur] : [];
        arr.push(Number(b.getAttribute("data-exam-ord-pick")));
        state.answers[state.cur] = arr;
        renderQuestion();
      });
    });
    state.content.querySelectorAll("[data-exam-ord-remove]").forEach(function (b) {
      b.addEventListener("click", function () {
        var arr = Array.isArray(state.answers[state.cur]) ? state.answers[state.cur].slice() : [];
        arr.splice(Number(b.getAttribute("data-exam-ord-remove")), 1);
        state.answers[state.cur] = arr;
        renderQuestion();
      });
    });
    var resetBtn = document.getElementById("ttcExamOrdReset");
    if (resetBtn) resetBtn.addEventListener("click", function () { state.answers[state.cur] = []; renderQuestion(); });
    state.content.querySelectorAll("[data-exam-goto]").forEach(function (b) {
      b.addEventListener("click", function () { state.cur = Number(b.getAttribute("data-exam-goto")); stopSpeak(); renderQuestion(); });
    });
    var prev = document.getElementById("ttcExamPrev");
    if (prev) prev.addEventListener("click", function () { if (state.cur > range.start) { state.cur--; stopSpeak(); renderQuestion(); } });
    var next = document.getElementById("ttcExamNext");
    if (next) next.addEventListener("click", function () { if (state.cur < range.end - 1) { state.cur++; stopSpeak(); renderQuestion(); } });
    var lb = document.getElementById("ttcExamListen");
    if (lb) lb.addEventListener("click", function () { speak(q.speakText); });
    var sub = document.getElementById("ttcExamSubmit");
    if (sub) sub.addEventListener("click", function () { submitExam(false); });
    var endSec = document.getElementById("ttcExamEndSection");
    if (endSec) endSec.addEventListener("click", function () { advanceSection(false); });
  }

  function submitExam(auto) {
    if (!state.exam || state.submitted) return;
    var exam = state.exam;
    var full = isFullMode();
    var range = full ? curRange() : { start: 0, end: exam.total };
    var unanswered = 0;
    for (var i = range.start; i < range.end; i++) if (!isAnswered(exam.questions[i], state.answers[i])) unanswered++;
    if (!auto && unanswered > 0 && !state.submitArmed) {
      state.submitArmed = true;
      renderQuestion();
      var note = document.createElement("div");
      note.className = "ttc-exam-note";
      note.style.marginTop = "12px";
      note.textContent = "⚠️ Còn " + unanswered + " câu chưa làm trong phần này. Bấm «Nộp bài» lần nữa để nộp (câu trống tính là sai), hoặc quay lại làm tiếp.";
      state.content.appendChild(note);
      clearTimeout(state.submitArmTimer);
      state.submitArmTimer = setTimeout(function () { state.submitArmed = false; }, 6000);
      return;
    }
    state.submitted = true;
    stopTimer(); stopSpeak();
    var score = computeScore(exam, state.answers);
    var correct = exam.questions.filter(function (q, i) { return isCorrectAnswer(q, state.answers[i]); }).length;
    var secondsUsed = Math.min(exam.seconds, Math.round((Date.now() - state.startedAt) / 1000));
    if (auto && !full) secondsUsed = exam.seconds;
    state.lastSecondsUsed = secondsUsed;
    state.lastAuto = !!auto;
    var reviewId = "r" + Date.now();
    var savedReview = saveReview({
      id: reviewId, ts: Date.now(), level: exam.level, mode: exam.mode,
      testId: state.testId || null, total: exam.total,
      questions: exam.questions, answers: state.answers.slice()
    });
    saveHistory({
      v: 2, ts: Date.now(), level: exam.level,
      mode: exam.mode, modeLabel: MODE_LABEL[exam.mode] || exam.mode,
      sizeKey: exam.sizeKey, sizeLabel: MODE_LABEL[exam.mode] || exam.mode,
      testId: state.testId || null, seed: state.seed != null ? state.seed : null,
      total: exam.total, correct: correct, pct: score.pct, secondsUsed: secondsUsed, auto: !!auto,
      sections: score.perSection, totalScore: score.totalScore, scaleMax: score.scaleMax,
      passMark: score.passMark, passed: score.passed, weakest: score.weakest,
      reviewId: savedReview ? reviewId : null
    });
    /* Gửi điểm lên bảng cộng đồng (chỉ khi đã đăng nhập; lỗi thì
       bỏ qua lặng lẽ — điểm local ở trên vẫn là nguồn chính). */
    submitScoreToServer({
      p_hsk_level: exam.level, p_mode: exam.mode,
      p_test_id: state.testId || null,
      p_seed: state.seed != null ? state.seed : null,
      p_sections: score.perSection,
      p_total_score: score.totalScore, p_scale_max: score.scaleMax,
      p_pass_mark: score.passMark, p_passed: !!score.passed,
      p_correct: correct, p_total_q: exam.total,
      p_seconds_used: secondsUsed
    });
    renderResult(score, secondsUsed, auto);
  }

  /* ---------------- Kết quả + xem lại ---------------- */
  function renderResult(score, secondsUsed, auto) {
    state.view = "result";
    score = score || computeScore(state.exam, state.answers);
    var exam = state.exam;
    var bars = (exam.sectionPlan || []).map(function (p) {
      var s = score.perSection[p.key];
      if (!s) return "";
      return '<div class="ttc-exam-secbar"><span class="nm">' + esc(sectionName(p.key)) + '</span>' +
        '<span class="bar"><i style="width:' + (s.score || 0) + '%"></i></span>' +
        '<span class="val">' + (s.score == null ? "—" : s.score + "/100") + " · " + s.ok + "/" + s.n + " câu</span></div>";
    }).join("");
    var bestNote = "";
    if (state.testId) {
      var best = catalogBestMap()[state.testId];
      bestNote = '<p style="color:#475569;margin:4px 0">📚 ' + esc(state.testId) + (best && typeof best.totalScore === "number"
        ? " · Điểm cao nhất của đề này: <b>" + best.totalScore + "/" + best.scaleMax + "</b>" : "") + "</p>";
    }
    state.content.innerHTML =
      '<div style="text-align:center;padding:10px 0 4px">' +
        '<div style="font-size:40px">' + (score.pct >= 85 ? "🏆" : score.passed ? "🎉" : "🌱") + "</div>" +
        '<div class="ttc-exam-score">' + score.pct + "%</div>" +
        '<div class="ttc-exam-total">Tổng điểm: ' + score.totalScore + "/" + score.scaleMax + " · Mốc đạt: " + score.passMark + "</div>" +
        '<div><span class="ttc-exam-passbadge ' + (score.passed ? "ok" : "bad") + '">' + (score.passed ? "✅ ĐẠT" : "❌ CHƯA ĐẠT") + "</span></div>" +
        "<p style='color:#475569;margin:8px 0'>Đúng <b>" + exam.questions.filter(function (q, i) { return isCorrectAnswer(q, state.answers[i]); }).length + "/" + exam.total + "</b> câu · HSK " + exam.level +
        " · " + esc(MODE_LABEL[exam.mode] || exam.mode) + " · Thời gian: <b>" + fmtClock(secondsUsed) + "</b>" + (auto ? " · ⏰ Hết giờ — bài được nộp tự động" : "") + "</p>" +
        bestNote + "</div>" +
      "<div>" + bars + "</div>" +
      '<div class="ttc-exam-verdict ' + score.verdict.tier + '">' + esc(score.verdict.text) + "</div>" +
      '<div class="ttc-exam-nav" style="justify-content:center;margin-top:18px">' +
        '<button type="button" class="ttc-exam-btn primary" id="ttcExamReview">🔍 Xem lại bài</button>' +
        '<button type="button" class="ttc-exam-btn" id="ttcExamAgain">🔄 ' + (state.testId ? "Về thư viện đề" : "Làm đề mới") + "</button>" +
        '<button type="button" class="ttc-exam-btn" id="ttcExamHome">🏠 Trang chủ khu thi</button></div>';
    document.getElementById("ttcExamReview").addEventListener("click", function () {
      renderReviewInto(state.content, state.exam, state.answers, {
        backLabel: "← Về kết quả",
        onBack: function () { renderResult(null, state.lastSecondsUsed, state.lastAuto); }
      });
    });
    document.getElementById("ttcExamAgain").addEventListener("click", function () {
      if (state.testId) { renderHome(); return; }
      startExam();
    });
    document.getElementById("ttcExamHome").addEventListener("click", renderHome);
  }
  function userArrangementText(q, a) {
    if (!Array.isArray(a) || !a.length) return "(chưa sắp xếp)";
    return a.map(function (oi) { return q.options[oi]; }).join(q.type === "read-order" ? " → " : "");
  }
  function renderReviewInto(el, exam, answers, opts) {
    opts = opts || {};
    var correctCount = exam.questions.filter(function (q, i) { return isCorrectAnswer(q, answers[i]); }).length;
    var html = '<h3 style="margin:4px 0 12px;color:#172033">🔍 Xem lại bài — HSK ' + exam.level + " · Đúng " + correctCount + "/" + exam.total + "</h3>";
    exam.questions.forEach(function (q, i) {
      var mine = answers[i];
      var done = isAnswered(q, mine);
      var right = isCorrectAnswer(q, mine);
      var tag = right ? '<span class="ttc-exam-tag ok">✓ Đúng</span>'
        : !done ? '<span class="ttc-exam-tag skip">— Chưa làm</span>'
        : '<span class="ttc-exam-tag bad">✗ Sai</span>';
      html += '<div class="ttc-exam-reviewq"><div class="ttc-exam-section">' + esc(sectionName(q.section)) + " · Câu " + (i + 1) + tag + "</div>";
      if (q.passage) html += '<div class="ttc-exam-passage">' + (q.passageTitle ? "<b>📖 " + esc(q.passageTitle) + "</b>\n" : "") + esc(q.passage) + "</div>";
      html += '<div class="ttc-exam-stem">' + esc(q.stem) + "</div>";
      if (q.sub) html += '<div class="ttc-exam-sub">' + esc(q.sub) + "</div>";
      if (q.section === "listen") html += '<button type="button" class="ttc-exam-listenbtn" data-exam-replay="' + i + '">🔊 Nghe lại</button>';
      if (isOrderType(q)) {
        html += '<div class="ttc-exam-explain"><b>Câu đúng:</b> ' + esc(q.type === "read-order" ? q.chunks.join("\n") : q.correctText) +
          "\n<b>Bạn đã xếp:</b> " + esc(userArrangementText(q, mine)) + "</div>";
      } else {
        html += '<div class="ttc-exam-opts">' + q.options.map(function (o, oi) {
          var cls = "ttc-exam-opt";
          if (oi === q.answer) cls += " right";
          else if (oi === mine) cls += " wrong";
          return '<div class="' + cls + '"><span class="ttc-exam-letter">' + "ABCD"[oi] + ".</span>" + esc(o) +
            (oi === q.answer ? " ✓" : "") + (oi === mine && mine !== q.answer ? " (bạn chọn)" : "") + "</div>";
        }).join("") + "</div>";
      }
      html += '<div class="ttc-exam-explain"><b>💡 Giải thích</b>\n<b>' + esc(q.explainHead) + "</b>\n" + esc(q.explainBody) + "</div></div>";
    });
    html += '<div class="ttc-exam-nav" style="justify-content:center">' +
      (opts.onBack ? '<button type="button" class="ttc-exam-btn" data-review-back="1">' + esc(opts.backLabel || "← Quay lại") + "</button>" : "") +
      "</div>";
    el.innerHTML = html;
    el.querySelectorAll("[data-exam-replay]").forEach(function (b) {
      b.addEventListener("click", function () {
        var q = exam.questions[Number(b.getAttribute("data-exam-replay"))];
        if (q) speak(q.speakText);
      });
    });
    var back = el.querySelector("[data-review-back]");
    if (back && opts.onBack) back.addEventListener("click", opts.onBack);
    if (state.view === "result" || state.view === "review") state.view = "review";
  }

  /* ---------------- Điểm cộng đồng (Supabase) ----------------
     Backend đã live (2026-11-17): bảng public.exam_scores + RPC
     ttc_exam_score_submit / ttc_exam_score_board trên Supabase.
     Lấy client đúng mẫu fetchHskAchievementPage của
     otter2-vocab-roadmap.js. Mọi lỗi đều nuốt lặng lẽ: điểm cá
     nhân trong localStorage luôn là nguồn chính, nộp bài không
     bao giờ bị chặn bởi đường gửi điểm này. */
  var CB_PAGE = 20;
  var CB_MODES = ["full", "reduced", "catalog", "mini", "standard"];
  function examSupabaseClient() {
    var client = null;
    try {
      client = typeof getSupabaseClient === "function" ? getSupabaseClient() : (window.supabase || null);
    } catch (e) {
      client = window.supabase || null;
    }
    return (client && typeof client.rpc === "function") ? client : null;
  }
  function examAuthUser() {
    try {
      var u = window.currentUser || (window.otter2Account && window.otter2Account.user) || null;
      return (u && u.id) ? u : null;
    } catch (e) { return null; }
  }
  function submitScoreToServer(payload) {
    try {
      if (!examAuthUser()) return; /* chưa đăng nhập -> bỏ qua */
      if (CB_MODES.indexOf(payload && payload.p_mode) < 0) return;
      var client = examSupabaseClient();
      if (!client) return;
      Promise.resolve(client.rpc("ttc_exam_score_submit", payload)).then(
        function () {}, function () {}
      );
    } catch (e) {}
  }
  function fetchExamBoardPage(level, offset) {
    var hsk = Number(level);
    var off = Math.max(0, Number(offset) || 0);
    if (!(hsk >= 1 && hsk <= 9)) {
      return Promise.resolve({ ok: false, message: "Cấp HSK không hợp lệ.", rows: [], hasMore: false });
    }
    var client = examSupabaseClient();
    if (!client) {
      return Promise.resolve({ ok: false, message: "Chưa kết nối được máy chủ.", rows: [], hasMore: false });
    }
    return Promise.resolve(client.rpc("ttc_exam_score_board", {
      p_hsk_level: hsk, p_limit: CB_PAGE, p_offset: off
    })).then(function (res) {
      if (res && res.error) {
        return { ok: false, message: (res.error && res.error.message) ? String(res.error.message) : "Lỗi tải bảng cộng đồng.", rows: [], hasMore: false };
      }
      var data = res && res.data;
      if (!data || data.ok === false) {
        return { ok: false, message: (data && data.message) ? String(data.message) : "Không lấy được dữ liệu cộng đồng.", rows: [], hasMore: false };
      }
      var rows = (Array.isArray(data.rows) ? data.rows : []).map(function (r) {
        r = r || {};
        return {
          nickname: r.nickname != null ? String(r.nickname) : null,
          bestScore: Number(r.best_score) || 0,
          scaleMax: Number(r.scale_max) || 300,
          attempts: Number(r.attempts) || 0,
          passRate: r.pass_rate == null ? null : Number(r.pass_rate),
          rank: Number(r.rank) || null
        };
      });
      return { ok: true, rows: rows, hasMore: !!data.has_more };
    }, function () {
      return { ok: false, message: "Lỗi mạng khi tải bảng cộng đồng.", rows: [], hasMore: false };
    });
  }
  var cb = { level: 1, touched: false, rows: [], hasMore: false, loading: false, loaded: false, error: "" };
  var cbSeq = 0;
  function loadCommunity(reset) {
    if (cb.loading && !reset) return;
    if (reset) { cb.rows = []; cb.hasMore = false; cb.loaded = false; cb.error = ""; }
    var seq = ++cbSeq;
    var lvl = cb.level;
    cb.loading = true;
    renderCommunityBody();
    fetchExamBoardPage(lvl, cb.rows.length).then(function (res) {
      if (seq !== cbSeq) return; /* đã đổi cấp / mở lại bảng — bỏ phản hồi cũ */
      cb.loading = false;
      if (res.ok) {
        cb.rows = cb.rows.concat(res.rows);
        cb.hasMore = res.hasMore;
        cb.loaded = true;
        cb.error = "";
      } else if (!cb.rows.length) {
        cb.error = res.message || "Không tải được bảng cộng đồng.";
      }
      renderCommunityBody();
    });
  }
  function renderCommunityBody() {
    var el = document.getElementById("ttcCbBody");
    if (!el) return;
    var chipsBox = document.getElementById("ttcCbChips");
    if (chipsBox) {
      chipsBox.querySelectorAll("[data-cb-level]").forEach(function (c) {
        c.classList.toggle("on", Number(c.getAttribute("data-cb-level")) === cb.level);
      });
    }
    if (cb.loading && !cb.rows.length) {
      el.innerHTML = '<div class="ttc-exam-note">⏳ Đang tải bảng cộng đồng…</div>';
      return;
    }
    if (cb.error && !cb.rows.length) {
      el.innerHTML = '<div class="ttc-exam-note">⚠️ ' + esc(cb.error) + ' <button type="button" class="ttc-sb-view" id="ttcCbRetry">Thử lại</button></div>';
      var rt = document.getElementById("ttcCbRetry");
      if (rt) rt.addEventListener("click", function () { loadCommunity(true); });
      return;
    }
    if (cb.loaded && !cb.rows.length) {
      el.innerHTML = '<div class="ttc-exam-note">Chưa có điểm cộng đồng cho cấp HSK ' + cb.level + " — hãy là người đầu tiên! 🎉" +
        '<br><span style="color:#64748b;font-size:13px">Đăng nhập rồi làm một bài thi ở cấp này, điểm của bạn sẽ xuất hiện tại đây.</span></div>';
      return;
    }
    if (!cb.rows.length) {
      el.innerHTML = '<div class="ttc-exam-note">⏳ Đang tải bảng cộng đồng…</div>';
      return;
    }
    var head = '<div class="ttc-cb-row head"><span class="ctr">Hạng</span><span>Học viên</span>' +
      '<span class="ctr">Điểm cao nhất</span><span class="ctr">Lượt thi</span><span class="ctr">Tỉ lệ đạt</span></div>';
    var rowsHtml = cb.rows.map(function (r, i) {
      var rank = (typeof r.rank === "number" && r.rank > 0) ? r.rank : (i + 1);
      var medal = rank === 1 ? "🥇 " : rank === 2 ? "🥈 " : rank === 3 ? "🥉 " : "";
      return '<div class="ttc-cb-row' + (rank <= 3 ? " top" + rank : "") + '">' +
        '<span class="ctr"><b>' + medal + rank + "</b></span>" +
        "<span>" + esc(r.nickname || "Học viên") + "</span>" +
        '<span class="ctr"><b>' + esc(r.bestScore) + "/" + esc(r.scaleMax) + "</b></span>" +
        '<span class="ctr">' + esc(r.attempts) + "</span>" +
        '<span class="ctr">' + (r.passRate == null ? "—" : esc(r.passRate) + "%") + "</span></div>";
    }).join("");
    var guestNote = examAuthUser() ? "" :
      '<p style="color:#94a3b8;font-size:12.5px;margin-top:8px">Bạn đang xem như khách — ai cũng xem được bảng này. Đăng nhập và làm bài thi để điểm của bạn cũng được xếp hạng tại đây.</p>';
    var more = cb.hasMore
      ? '<button type="button" class="ttc-cb-more" id="ttcCbMore">' + (cb.loading ? "⏳ Đang tải…" : "⬇️ Tải thêm") + "</button>"
      : "";
    el.innerHTML = '<div class="ttc-cb-table">' + head + rowsHtml + "</div>" + more + guestNote;
    var m = document.getElementById("ttcCbMore");
    if (m) m.addEventListener("click", function () { loadCommunity(false); });
  }
  function communitySectionHtml() {
    var chips = "";
    for (var lv = 1; lv <= 9; lv++) {
      chips += '<button type="button" class="ttc-cb-chip' + (lv === cb.level ? " on" : "") +
        '" data-cb-level="' + lv + '">HSK ' + lv + "</button>";
    }
    return '<div class="ttc-cb-wrap">' +
      '<div style="font-size:17px;font-weight:900;color:#172033">🏆 Cộng đồng</div>' +
      '<p style="color:#475569;font-size:13.5px;line-height:1.55;margin:4px 0 0">Điểm của <b>mọi học viên</b> trên thichtiengtrung.io.vn theo từng cấp: điểm cao nhất, số lượt thi và tỉ lệ đạt của mỗi người. Điểm của bạn được gửi lên tự động sau mỗi bài thi khi bạn đã đăng nhập.</p>' +
      '<div class="ttc-cb-chips" id="ttcCbChips">' + chips + "</div>" +
      '<div id="ttcCbBody"></div>' +
      "</div>";
  }

  /* ---------------- Bảng Điểm Thi (Phần 2) ----------------
     Điểm mở: nút điều hướng #otter2AchNavBtn (hàng nút điều hướng)
     được đổi nhãn thành "Bảng Điểm Thi" và mở bảng này. Nút 🏆 ở
     trang chủ (#otter2DashAchBtn) vẫn mở Bảng thành tích theo số
     từ: handler gốc của nó gọi .click() lên nút nav (sự kiện KHÔNG
     trusted) — ta để các click không-trusted đi qua nguyên vẹn về
     handler gốc, chỉ chặn click thật của người dùng trên nút nav. */
  var sb = { overlay: null, content: null };
  function buildScoreBoard() {
    if (sb.overlay) return sb.overlay;
    ensureStyle();
    var ov = document.createElement("div");
    ov.id = "ttcScoreBoardOverlay";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-label", "Bảng Điểm Thi");
    ov.innerHTML =
      '<div class="ttc-hub-card ttc-exam-card">' +
        '<div class="ttc-hub-head"><div class="ttc-hub-title">📝 Bảng Điểm Thi</div>' +
        '<button type="button" class="ttc-hub-close" id="ttcScoreBoardClose" aria-label="Đóng">×</button></div>' +
        '<div id="ttcScoreBoardContent"></div>' +
      '</div>';
    document.body.appendChild(ov);
    sb.overlay = ov;
    sb.content = ov.querySelector("#ttcScoreBoardContent");
    ov.querySelector("#ttcScoreBoardClose").addEventListener("click", closeScoreBoard);
    ov.addEventListener("click", function (e) { if (e.target === ov) closeScoreBoard(); });
    return ov;
  }
  function openScoreBoard() {
    if (state.overlay && state.overlay.classList.contains("open")) closeExam();
    buildScoreBoard();
    sb.overlay.classList.add("open");
    document.body.classList.add("ttc-hub-lock-scroll");
    renderScoreBoardList();
  }
  function closeScoreBoard() {
    stopSpeak();
    if (sb.overlay) sb.overlay.classList.remove("open");
    if (!state.overlay || !state.overlay.classList.contains("open")) {
      document.body.classList.remove("ttc-hub-lock-scroll");
    }
  }
  function sbStats(hist) {
    var v2 = hist.filter(function (h) { return h && typeof h.totalScore === "number"; });
    var passCount = v2.filter(function (h) { return h.passed; }).length;
    var bestByLevel = {};
    v2.forEach(function (h) {
      var k = "HSK" + h.level;
      if (!bestByLevel[k] || h.totalScore > bestByLevel[k].score) {
        bestByLevel[k] = { score: h.totalScore, scale: h.scaleMax };
      }
    });
    var secSum = {}, secCnt = {};
    v2.forEach(function (h) {
      if (!h.sections) return;
      Object.keys(h.sections).forEach(function (k) {
        var s = h.sections[k];
        if (s && typeof s.score === "number") {
          secSum[k] = (secSum[k] || 0) + s.score;
          secCnt[k] = (secCnt[k] || 0) + 1;
        }
      });
    });
    var weakest = null, weakestAvg = Infinity;
    Object.keys(secSum).forEach(function (k) {
      var avg = secSum[k] / secCnt[k];
      if (avg < weakestAvg) { weakestAvg = avg; weakest = k; }
    });
    return {
      attempts: hist.length,
      scored: v2.length,
      passRate: v2.length ? Math.round(100 * passCount / v2.length) : null,
      bestByLevel: bestByLevel,
      weakest: weakest,
      weakestAvg: weakest ? Math.round(weakestAvg) : null
    };
  }
  function sbSectionCell(h, key) {
    if (h && h.sections && h.sections[key] && typeof h.sections[key].score === "number") {
      return String(h.sections[key].score);
    }
    return "—";
  }
  function renderScoreBoardList() {
    var hist = loadHistory();
    if (!cb.touched) {
      var lv0 = hist.length ? Number(hist[0] && hist[0].level) : 1;
      cb.level = (lv0 >= 1 && lv0 <= 9) ? lv0 : 1;
    }
    var reviews = {};
    loadReviews().forEach(function (r) { reviews[r.id] = r; });
    var st = sbStats(hist);
    var bestChips = Object.keys(st.bestByLevel).sort().map(function (k) {
      return k + ": " + st.bestByLevel[k].score + "/" + st.bestByLevel[k].scale;
    }).join(" · ");
    var statsHtml =
      '<div class="ttc-sb-stats">' +
        '<div class="ttc-sb-stat"><b>' + st.attempts + '</b><span>Số lượt thi (trên thiết bị này)</span></div>' +
        '<div class="ttc-sb-stat"><b>' + (st.passRate == null ? "—" : st.passRate + "%") + '</b><span>Tỉ lệ đạt (các bài có điểm quy đổi)</span></div>' +
        '<div class="ttc-sb-stat"><b style="font-size:15.5px;line-height:1.45">' + (bestChips ? esc(bestChips) : "—") + '</b><span>Điểm cao nhất từng cấp</span></div>' +
        '<div class="ttc-sb-stat"><b>' + (st.weakest ? esc(sectionName(st.weakest).replace(/^\S+ /, "")) + " · " + st.weakestAvg + "/100" : "—") + '</b><span>Phần yếu nhất (điểm phần trung bình thấp nhất)</span></div>' +
      "</div>";
    var head = '<div class="ttc-sb-row head"><span>Ngày thi</span><span class="ctr">Cấp</span><span>Chế độ / Đề</span>' +
      '<span class="ctr">Nghe</span><span class="ctr">Từ vựng</span><span class="ctr">Đọc</span><span class="ctr">Viết</span>' +
      '<span class="ctr">Tổng</span><span class="ctr">Kết quả</span><span class="ctr">Bài làm</span></div>';
    var rows = hist.map(function (h) {
      var isV2 = typeof h.totalScore === "number";
      var modeTxt = isV2 ? (h.modeLabel || "") : (h.sizeLabel || "");
      if (h.testId) modeTxt += " · " + h.testId;
      var totalTxt = isV2 ? (h.totalScore + "/" + h.scaleMax) : (h.pct != null ? h.pct + "%" : "—");
      var badge = isV2
        ? '<span class="ttc-sb-badge ' + (h.passed ? "ok" : "bad") + '">' + (h.passed ? "ĐẠT" : "Chưa đạt") + "</span>"
        : '<span class="ttc-sb-badge na">—</span>';
      var canReview = !!(h.reviewId && reviews[h.reviewId]);
      var viewBtn = canReview
        ? '<button type="button" class="ttc-sb-view" data-sb-review="' + esc(h.reviewId) + '">Xem lại</button>'
        : '<span style="color:#94a3b8" title="Bài cũ chỉ lưu điểm tổng, không lưu chi tiết câu hỏi">—</span>';
      return '<div class="ttc-sb-row"><span>' + esc(fmtDate(h.ts)) + "</span>" +
        '<span class="ctr"><b>HSK ' + esc(h.level) + "</b></span>" +
        "<span>" + esc(modeTxt) + "</span>" +
        '<span class="ctr">' + sbSectionCell(h, "listen") + "</span>" +
        '<span class="ctr">' + sbSectionCell(h, "vocab") + "</span>" +
        '<span class="ctr">' + sbSectionCell(h, "reading") + "</span>" +
        '<span class="ctr">' + sbSectionCell(h, "writing") + "</span>" +
        '<span class="ctr"><b>' + esc(totalTxt) + "</b></span>" +
        '<span class="ctr">' + badge + "</span>" +
        '<span class="ctr">' + viewBtn + "</span></div>";
    }).join("");
    sb.content.innerHTML =
      '<p style="color:#475569;font-size:14px;line-height:1.55;margin:2px 0 0">Điểm đầy đủ các bài luyện thi của <b>bạn</b> trên thiết bị này, chấm theo thang điểm đề thật (từng phần quy về 100). Khác với <b>Bảng thành tích</b> xếp hạng theo số từ đã học — mở bằng nút 🏆 ở trang chủ.</p>' +
      statsHtml +
      (hist.length
        ? '<div class="ttc-sb-table">' + head + rows + "</div>" +
          '<p style="color:#94a3b8;font-size:12.5px;margin-top:10px">Các bài làm trước bản nâng cấp này chỉ lưu điểm tổng (%) nên một số ô hiện "—".</p>'
        : '<div class="ttc-exam-note" style="margin-top:12px">Bạn chưa làm bài luyện thi nào. Hãy vào khu Luyện thi và làm đề đầu tiên — điểm sẽ hiện ở đây.</div>' +
          '<div class="ttc-exam-nav" style="justify-content:center"><button type="button" class="ttc-exam-btn primary" id="ttcSbGoExam">🏆 Vào Luyện thi</button></div>') +
      communitySectionHtml();
    sb.content.querySelectorAll("[data-sb-review]").forEach(function (b) {
      b.addEventListener("click", function () { renderScoreBoardReview(b.getAttribute("data-sb-review")); });
    });
    var go = document.getElementById("ttcSbGoExam");
    if (go) go.addEventListener("click", function () { closeScoreBoard(); openExam(); });
    sb.content.querySelectorAll("[data-cb-level]").forEach(function (c) {
      c.addEventListener("click", function () {
        var lv = Number(c.getAttribute("data-cb-level"));
        if (!(lv >= 1 && lv <= 9)) return;
        cb.touched = true;
        if (lv === cb.level && cb.loaded) { renderCommunityBody(); return; }
        cb.level = lv;
        loadCommunity(true);
      });
    });
    loadCommunity(true);
  }
  function renderScoreBoardReview(reviewId) {
    var rec = null;
    loadReviews().forEach(function (r) { if (r.id === reviewId) rec = r; });
    if (!rec) { renderScoreBoardList(); return; }
    var examLike = {
      level: rec.level, mode: rec.mode, total: rec.total || rec.questions.length,
      questions: rec.questions
    };
    renderReviewInto(sb.content, examLike, rec.answers, {
      backLabel: "← Về Bảng Điểm Thi",
      onBack: renderScoreBoardList
    });
  }

  /* --- Đổi nhãn + chặn click nút điều hướng --- */
  var dashForwardUntil = 0;
  function relabelNavBtn() {
    var b = document.getElementById("otter2AchNavBtn");
    if (!b || b.__sbRelabeled) return !!b;
    b.__sbRelabeled = true;
    var ico = b.querySelector(".otter2-pill-ico");
    if (ico) ico.textContent = "📝";
    var txt = b.querySelector(".otter2-pill-txt");
    if (txt) txt.textContent = "Bảng Điểm Thi";
    b.title = "Bảng Điểm Thi — điểm các bài luyện thi của bạn";
    b.setAttribute("aria-label", "Bảng Điểm Thi");
    return true;
  }
  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    if (t.closest("#otter2DashAchBtn")) {
      /* Nút 🏆 trang chủ: để handler gốc chạy (nó sẽ .click() nút nav
         bằng sự kiện không-trusted -> mở Bảng thành tích số từ). */
      dashForwardUntil = Date.now() + 1500;
      return;
    }
    var navBtn = t.closest("#otter2AchNavBtn");
    if (!navBtn) return;
    if (!ev.isTrusted || Date.now() <= dashForwardUntil) {
      dashForwardUntil = 0;
      return; /* click chuyển tiếp (từ nút 🏆 hoặc rái cá) -> giữ hành vi gốc */
    }
    ev.preventDefault();
    ev.stopPropagation();
    openScoreBoard();
  }, true);

  /* ---------------- Panel Luyện thi ở CỘT GIỮA dashboard ----------------
     Lệnh của chủ web 2026-11-17 (2 đợt): (1) CHUYỂN điểm mở khu thi
     khỏi danh sách tính năng cột trái (thẻ .otter2-feature-row do v1
     tiêm) lên cột giữa; (2) HOÁN ĐỔI vị trí — panel thành THẺ RIÊNG
     (.otter2-dash-card) đứng NGAY TRƯỚC thẻ "Trình độ & kỹ năng"
     trong .otter2-dash-main, làm hero gradient sặc sỡ vì đây là
     kênh hút học viên từ Facebook. (3) Đợt 3 — sửa khoảng trống:
     chủ web xem live thấy thẻ kỹ năng bị đẩy xuống quá sâu vì hàng 1
     của lưới .otter2-dash-main dùng chung với thẻ khóa học cột trái
     rất cao. Nay injectPanel bọc panel + thẻ kỹ năng vào MỘT item
     lưới .ttc-exam-midstack (flex cột, gap 18px = gap chuẩn của
     dash-main) đặt ở cột 2/hàng 1; thẻ Bài học về hàng 2 như luật
     gốc của trang; mobile stack display:contents nên panel/thẻ kỹ
     năng vẫn nhận grid-area "exam"/"level" ngay trước/sau nhau.
     Dashboard chỉ còn MỘT
     điểm mở khu thi: nút #otter2FeatExam trong panel. Panel là
     .otter2-dash-card + chứa button/h3/p nên cơ chế vật cản của
     rái cá (OBSTACLE_SEL gồm .otter2-dash-card, button, h1-h6,
     p...) đã tự coi là nội dung học — bé không đứng đè lên.
     LƯU Ý: injectPanel phải tự gọi ensureStyle() — trước đây style
     chỉ nạp khi mở overlay thi/bảng điểm nên panel hiện TRẦN (chữ
     thuần, nút mặc định) ở lần tải trang đầu, đúng phàn nàn của
     chủ web khi xem live. */
  var panelLevel = 0;
  function currentStudyLevel() {
    var chip = document.querySelector(".otter2-dash-chip.is-cur");
    var n = chip ? Number(chip.getAttribute("data-dash-hsk")) : 0;
    if (!(n >= 1 && n <= 9)) {
      var lvEl = document.getElementById("otter2DashCourseLevel");
      n = lvEl ? Number(String(lvEl.textContent).replace(/\D/g, "")) : 0;
    }
    return n >= 1 && n <= 9 ? n : 1;
  }
  function refreshPanel() {
    var line = document.getElementById("otter2ExamPanelLast");
    if (!line) return;
    var hist = loadHistory();
    var h = hist && hist[0];
    if (!h) { line.hidden = true; line.textContent = ""; return; }
    var txt = "Lần gần nhất: HSK " + h.level + " · ";
    if (typeof h.totalScore === "number" && h.scaleMax) {
      txt += h.totalScore + "/" + h.scaleMax + " · " + (h.passed ? "ĐẠT ✓" : "Chưa đạt");
    } else {
      txt += h.pct + "% đúng";
    }
    if (h.testId) txt += " · " + h.testId;
    txt += " · " + fmtDate(h.ts);
    line.textContent = txt;
    line.hidden = false;
  }
  function injectPanel() {
    if (document.getElementById("otter2ExamPanel")) return true;
    ensureStyle();
    /* Gỡ launcher cũ ở cột trái nếu còn sót (đây là lệnh CHUYỂN). */
    var legacy = document.querySelectorAll(".otter2-feature-row #otter2FeatExam");
    Array.prototype.forEach.call(legacy, function (el) { el.remove(); });
    var section = document.querySelector('.otter2-dash-card[aria-labelledby="otter2DashLevelTitle"]');
    if (!section) {
      var grid = document.querySelector(".otter2-dash-skillgrid");
      if (grid) section = grid.closest("section") || grid.parentElement;
    }
    if (!section || !section.parentNode) return false;
    if (!panelLevel) panelLevel = currentStudyLevel();
    var chips = "";
    for (var n = 1; n <= 9; n++) {
      chips += '<button type="button" class="ttc-exam-panel-chip' + (n === panelLevel ? " is-cur" : "") +
        '" data-panel-level="' + n + '" aria-pressed="' + (n === panelLevel ? "true" : "false") + '">HSK ' + n + "</button>";
    }
    var panel = document.createElement("section");
    panel.className = "otter2-dash-card ttc-exam-panel";
    panel.id = "otter2ExamPanel";
    panel.setAttribute("aria-label", "Luyện thi HSK");
    panel.innerHTML =
      '<div class="ttc-exam-panel-in">' +
      '<div class="ttc-exam-panel-head"><span class="ttc-exam-panel-trophy" aria-hidden="true">🏆</span>' +
      '<h3 class="ttc-exam-panel-title">Luyện thi HSK</h3>' +
      '<span class="ttc-exam-panel-free">MIỄN PHÍ</span></div>' +
      '<p class="ttc-exam-panel-desc">40 đề mỗi cấp · sát cấu trúc đề thật · chấm điểm thang 200/300 · xem lại từng câu</p>' +
      '<div class="ttc-exam-panel-chips" role="group" aria-label="Chọn nhanh cấp thi">' + chips + "</div>" +
      '<p class="ttc-exam-panel-last" id="otter2ExamPanelLast" hidden></p>' +
      '<button type="button" class="ttc-exam-panel-btn" id="otter2FeatExam"><span class="ttc-exam-panel-btn-txt">Vào luyện thi →</span></button>' +
      "</div>";
    /* Đợt 3: bọc panel + thẻ kỹ năng vào MỘT item lưới .ttc-exam-midstack
       (flex cột, gap 18px). Khi còn là 2 item lưới riêng, hàng 1 của
       .otter2-dash-main bị thẻ khóa học cột trái (rất cao) kéo giãn nên
       thẻ kỹ năng ở hàng 2 bắt đầu từ đáy cột trái → khoảng trống lớn
       dưới panel. Nay khoảng cách panel→kỹ năng chỉ còn là gap của
       stack, không phụ thuộc chiều cao cột trái/phải nữa. appendChild
       DỜI nguyên node thẻ kỹ năng (giữ nguyên listener/nội dung). */
    var stack = document.createElement("div");
    stack.className = "ttc-exam-midstack";
    section.parentNode.insertBefore(stack, section);
    stack.appendChild(panel);
    stack.appendChild(section);
    Array.prototype.forEach.call(panel.querySelectorAll("[data-panel-level]"), function (chip) {
      chip.addEventListener("click", function () {
        panelLevel = Number(chip.getAttribute("data-panel-level"));
        state.level = panelLevel;
        Array.prototype.forEach.call(panel.querySelectorAll("[data-panel-level]"), function (c) {
          var on = Number(c.getAttribute("data-panel-level")) === panelLevel;
          c.classList.toggle("is-cur", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
    });
    panel.querySelector("#otter2FeatExam").addEventListener("click", function (e) {
      e.preventDefault();
      state.level = panelLevel || currentStudyLevel();
      openExam();
    });
    refreshPanel();
    return true;
  }
  function init() {
    relabelNavBtn();
    if (injectPanel()) return;
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      relabelNavBtn();
      if (injectPanel() || tries > 20) clearInterval(iv);
    }, 300);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  /* Phơi ra cho kiểm thử tự động + gỡ lỗi; vô hại khi chạy thật. */
  window.otter2OpenExam = openExam;
  window.otter2OpenScoreBoard = openScoreBoard;
  window.__ttcExam = {
    generate: generateExam,
    validate: validateExam,
    computeScore: computeScore,
    isCorrect: isCorrectAnswer,
    blueprint: blueprintFor,
    reducedCounts: reducedCounts,
    catalog: {
      perLevel: CATALOG_PER_LEVEL,
      seed: catalogSeed,
      buildUpTo: buildCatalogUpTo,
      testIdOf: testIdOf,
      overlapOf: overlapOf,
      cache: function () { return catalogCache; },
      reset: function () { catalogCache = {}; }
    },
    pools: function (level) {
      return { words: wordsOfLevel(level).length, withExample: exampleWordsOfLevel(level).length, passages: passagesOfLevel(level).length };
    },
    state: function () { return state; },
    open: openExam,
    close: closeExam,
    openScoreBoard: openScoreBoard,
    closeScoreBoard: closeScoreBoard,
    submitScoreToServer: submitScoreToServer,
    fetchExamBoardPage: fetchExamBoardPage,
    loadCommunity: loadCommunity,
    communityState: function () { return cb; },
    expireNow: function () {
      if (state.view !== "exam") return;
      if (isFullMode()) { state.sectionRemaining = 0; advanceSection(true); }
      else { state.remaining = 0; submitExam(true); }
    },
    finishSectionNow: function () { if (state.view === "exam") advanceSection(true); }
  };
})();
