/* ============================================================
   NÂNG SÂU KHU THI (DEEP-2, khối 2) — otter2-examdeep.js (2026-11-19)

   Module cộng thêm, KHÔNG sửa engine (otter2-exam.js) và KHÔNG
   đụng cổng thi (otter2-examhome.js — lưới kỹ năng + sổ hiển thị
   ở trang chủ thi là của module đó). Khối này lo:
   1) SỔ CÂU SAI BỀN VỮNG (otter2_exam_wrongbook_v1): gom câu sai +
      câu bỏ qua từ MỌI lượt thi (engine chỉ giữ 6 lượt gần nhất ở
      otter2_exam_review_v1) qua móc onSubmit mà engine gọi sau khi
      lưu lịch sử; lần đầu chạy sẽ nhập ngược từ 6 lượt đã lưu sẵn.
      Câu trả lời đúng ở lượt sau (kể cả trong phiên ôn) được đánh
      dấu "✓ Đã sửa". Không một câu nào bị bịa: sổ trống = trống thật.
   2) LÀM LẠI CÂU SAI: mở phiên ôn bằng __ttcExam.beginCustom —
      phiên ôn KHÔNG gửi điểm cộng đồng, không tính vào thống kê.
   3) PHÂN TÍCH THEO DẠNG CÂU ở màn hình kết quả: đúng/sai/bỏ qua
      + tỉ lệ theo từng dạng, chip số câu nhảy tới phần xem lại.
   4) THỐNG KÊ DÀI HẠN từ otter2_exam_history_v1 (số thật trên
      thiết bị): lượt thi, phút luyện, điểm tốt nhất theo cấp, tỉ lệ
      đúng theo phần, xu hướng 30 ngày.
   5) ĐỀ THẬT: nếu trang có window.__TTC_PAPERS__ (dữ liệu đề thật
      đã chuyển đổi), hiện thêm nút mở danh sách đề; chưa có dữ
      liệu thì không hiện gì thêm.
   Màu khu thi: cam #c2410c; bề mặt trắng theo luật thiết kế.
   Khu thi MIỄN PHÍ 100% — module không thêm bất kỳ cổng phí nào.
   ============================================================ */
(function () {
  "use strict";
  if (window.__ttcExamDeep) return;

  var ORANGE = "#c2410c";
  var HIST_KEY = "otter2_exam_history_v1";
  var REVIEW_KEY = "otter2_exam_review_v1";
  var WRONG_KEY = "otter2_exam_wrongbook_v1";
  var WRONG_CAP = 400;
  var SEC_NAME = { listen: "Nghe hiểu", vocab: "Từ vựng & ngữ pháp", reading: "Đọc hiểu", writing: "Viết" };
  var SEC_ORDER = { listen: 0, vocab: 1, reading: 2, writing: 3 };
  var TYPE_LABEL = {
    "listen-meaning": "Nghe · chọn nghĩa đúng",
    "listen-sentence": "Nghe · chọn câu đúng",
    "listen-dialogue": "Nghe · hội thoại hai lượt",
    "vocab-meaning": "Từ vựng · nghĩa của từ",
    "vocab-pinyin": "Từ vựng · phiên âm",
    "cloze": "Điền từ vào chỗ trống",
    "read-vocab": "Đọc · từ vựng trong bài",
    "read-cloze": "Đọc · điền khuyết trong bài",
    "read-sentence": "Đọc · nhận diện câu trong bài",
    "read-order": "Đọc · sắp xếp câu",
    "write-order": "Viết · sắp xếp từ thành câu",
    "write-cloze": "Viết · điền khuyết nâng cao",
    "listen-choose": "Nghe (đề thật) · chọn đáp án đúng",
    "read-error": "Đọc (đề thật) · chọn câu có lỗi",
    "read-fill": "Đọc (đề thật) · chọn câu điền vào đoạn",
    "read-mcq": "Đọc (đề thật) · trả lời câu hỏi bài đọc"
  };
  function typeName(t) { return TYPE_LABEL[t] || t || "Dạng khác"; }
  function $(sel, root) { try { return (root || document).querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function loadArr(key) {
    try { var o = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(o) ? o : []; }
    catch (e) { return []; }
  }
  function fmtDate(ts) {
    try {
      var d = new Date(ts);
      return ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
    } catch (e) { return ""; }
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return "f" + (h >>> 0).toString(36);
  }
  function isOrderQ(q) { return q && (q.type === "write-order" || q.type === "read-order"); }
  function isAnsweredQ(q, a) {
    if (isOrderQ(q)) return Array.isArray(a) && a.length === (q.options || []).length;
    return typeof a === "number" && a >= 0;
  }
  function isCorrectQ(q, a) {
    if (!q) return false;
    if (isOrderQ(q)) {
      if (!Array.isArray(a) || !Array.isArray(q.answerSeq) || a.length !== q.answerSeq.length) return false;
      for (var i = 0; i < a.length; i++) if (a[i] !== q.answerSeq[i]) return false;
      return true;
    }
    return a === q.answer;
  }
  function fpOf(q) {
    var key = isOrderQ(q) ? (q.answerSeq || []).join(",") : (q.correctText || (q.options && q.answer != null ? q.options[q.answer] : "") || "");
    return hash((q.type || "") + "|" + (q.stem || q.prompt || q.text || "") + "|" + key);
  }
  function answerText(q, mine) {
    if (isOrderQ(q)) {
      var seq = Array.isArray(mine) ? mine : [];
      if (!seq.length) return "(chưa sắp xếp)";
      return seq.map(function (idx) { return q.options && q.options[idx] != null ? q.options[idx] : ""; }).join(q.type === "read-order" ? " → " : "");
    }
    if (typeof mine === "number" && q.options && q.options[mine] != null) return q.options[mine];
    return "(bỏ qua)";
  }
  function correctText(q) {
    if (isOrderQ(q)) {
      return (q.answerSeq || []).map(function (idx) { return q.options && q.options[idx] != null ? q.options[idx] : ""; }).join(q.type === "read-order" ? " → " : "");
    }
    if (q.correctText) return q.correctText;
    if (q.options && q.options[q.answer] != null) return q.options[q.answer];
    return "";
  }

  /* ---------------- Sổ câu sai bền vững ---------------- */
  function loadBook() {
    try {
      var o = JSON.parse(localStorage.getItem(WRONG_KEY) || "null");
      if (o && o.v === 1 && o.items && typeof o.items === "object") return o;
    } catch (e) {}
    return { v: 1, backfilled: false, items: {} };
  }
  function saveBook(book) {
    try {
      var keys = Object.keys(book.items);
      if (keys.length > WRONG_CAP) {
        keys.sort(function (a, b) {
          var ea = book.items[a], eb = book.items[b];
          if (!!ea.mastered !== !!eb.mastered) return ea.mastered ? -1 : 1;
          return (ea.lastTs || 0) - (eb.lastTs || 0);
        });
        keys.slice(0, keys.length - WRONG_CAP).forEach(function (k) { delete book.items[k]; });
      }
      localStorage.setItem(WRONG_KEY, JSON.stringify(book));
    } catch (e) {}
  }
  function recordAttempt(exam, answers, ts) {
    if (!exam || !Array.isArray(exam.questions)) return;
    var book = loadBook();
    var changed = false;
    exam.questions.forEach(function (q, i) {
      var mine = answers ? answers[i] : undefined;
      var fp = fpOf(q);
      var entry = book.items[fp];
      if (isCorrectQ(q, mine)) {
        if (entry && !entry.mastered) {
          entry.mastered = true; entry.masteredTs = ts; entry.lastTs = ts; changed = true;
        }
        return;
      }
      if (!entry) {
        entry = book.items[fp] = {
          q: q, level: exam.level, wrong: 0, skipped: 0,
          lastAnswer: mine, firstTs: ts, lastTs: ts, mastered: false, masteredTs: 0
        };
        changed = true;
      }
      if (isAnsweredQ(q, mine)) { entry.wrong++; entry.mastered = false; }
      else { entry.skipped++; }
      entry.q = q; entry.level = exam.level; entry.lastAnswer = mine; entry.lastTs = ts;
      changed = true;
    });
    if (changed) saveBook(book);
  }
  function backfill() {
    var book = loadBook();
    if (book.backfilled) return;
    var reviews = loadArr(REVIEW_KEY).slice().sort(function (a, b) { return Number(a.ts || 0) - Number(b.ts || 0); });
    reviews.forEach(function (r) {
      var qs = Array.isArray(r.questions) ? r.questions : [];
      var ans = Array.isArray(r.answers) ? r.answers : [];
      qs.forEach(function (q, i) {
        var mine = ans[i];
        if (isCorrectQ(q, mine)) return;
        var fp = fpOf(q);
        if (book.items[fp]) return;
        book.items[fp] = {
          q: q, level: r.level, wrong: isAnsweredQ(q, mine) ? 1 : 0, skipped: isAnsweredQ(q, mine) ? 0 : 1,
          lastAnswer: mine, firstTs: r.ts || Date.now(), lastTs: r.ts || Date.now(),
          mastered: false, masteredTs: 0
        };
      });
    });
    book.backfilled = true;
    saveBook(book);
  }
  function bookEntries() {
    var book = loadBook();
    return Object.keys(book.items).map(function (k) { var e = book.items[k]; e.fp = k; return e; });
  }
  function unmastered() {
    return bookEntries().filter(function (e) { return !e.mastered; })
      .sort(function (a, b) { return (b.lastTs || 0) - (a.lastTs || 0); });
  }

  /* ---------------- Móc engine gọi sau mỗi lần nộp bài ---------------- */
  function onSubmit(exam, answers) {
    try { recordAttempt(exam, answers, Date.now()); } catch (e) {}
  }

  /* ---------------- Phiên ôn câu sai ---------------- */
  function startRedo(entries, label) {
    if (!entries.length || !window.__ttcExam || !window.__ttcExam.beginCustom) return;
    var qs = entries.slice(0, 40).map(function (e) { return JSON.parse(JSON.stringify(e.q)); });
    qs.sort(function (a, b) { return (SEC_ORDER[a.section] || 9) - (SEC_ORDER[b.section] || 9); });
    window.__ttcExam.beginCustom(qs, {
      mode: "review", level: entries[0].level,
      seconds: Math.max(300, qs.length * 60),
      title: label || "Ôn câu sai"
    });
  }

  /* ---------------- Phân tích theo dạng câu (màn hình kết quả) ---------------- */
  function typeStats(exam, answers) {
    var byType = {};
    exam.questions.forEach(function (q, i) {
      var t = q.type || "other";
      if (!byType[t]) byType[t] = { type: t, n: 0, ok: 0, wrong: 0, skip: 0, idxs: [] };
      var s = byType[t];
      s.n++; s.idxs.push(i);
      if (!isAnsweredQ(q, answers[i])) s.skip++;
      else if (isCorrectQ(q, answers[i])) s.ok++;
      else s.wrong++;
    });
    return Object.keys(byType).map(function (k) { return byType[k]; })
      .sort(function (a, b) { return b.n - a.n; });
  }
  function enhanceResult() {
    var content = byId("ttcExamContent");
    if (!content || !window.__ttcExam || !window.__ttcExam.state) return;
    if (!$(".ttc-exam-score", content) || $(".ttc-xd-analysis", content)) return;
    var st = window.__ttcExam.state();
    if (!st || !st.exam || !st.submitted) return;
    var exam = st.exam, answers = st.answers || [];
    var stats = typeStats(exam, answers);
    if (!stats.length) return;
    var rows = stats.map(function (s) {
      var pct = s.n ? Math.round(100 * s.ok / s.n) : 0;
      var chips = s.idxs.map(function (i) {
        var cls = !isAnsweredQ(exam.questions[i], answers[i]) ? "skip" : (isCorrectQ(exam.questions[i], answers[i]) ? "ok" : "bad");
        return '<button type="button" class="ttc-xd-chip ' + cls + '" data-xd-jump="' + i + '">' + (i + 1) + "</button>";
      }).join("");
      return '<div class="ttc-xd-trow"><div class="ttc-xd-tname">' + esc(typeName(s.type)) +
        '<div class="ttc-xd-chips">' + chips + "</div></div>" +
        '<div class="ttc-xd-tbar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="ttc-xd-tnum">✓ ' + s.ok + " · ✗ " + s.wrong + " · — " + s.skip + "<br><b>" + pct + "%</b></div></div>";
    }).join("");
    var wrongIdx = [];
    exam.questions.forEach(function (q, i) { if (!isCorrectQ(q, answers[i])) wrongIdx.push(i); });
    var masteryNote = "";
    if (exam.custom && exam.mode === "review") {
      var book = loadBook();
      var fixed = wrongIdx.length === 0 ? exam.total : 0;
      var stillWrong = wrongIdx.length;
      masteryNote = '<p class="ttc-xd-note">Phiên ôn này: còn <b>' + stillWrong + "</b> câu chưa đúng trong " + exam.total +
        " câu ôn. Câu nào đúng đã được đánh dấu ✓ Đã sửa trong sổ câu sai.</p>";
    }
    var redoBtn = (!exam.custom && wrongIdx.length)
      ? '<button type="button" class="ttc-xd-btn primary" id="ttcXdRedo">🔁 Làm lại ' + wrongIdx.length + ' câu chưa đúng</button>'
      : "";
    var div = document.createElement("div");
    div.className = "ttc-xd-analysis";
    div.innerHTML = '<h3 class="ttc-xd-h">🔬 Phân tích theo dạng câu</h3>' +
      '<p class="ttc-xd-note">Bấm vào số câu để nhảy tới câu đó trong phần xem lại bài.</p>' +
      rows + masteryNote +
      '<div class="ttc-xd-row">' + redoBtn +
      '<button type="button" class="ttc-xd-btn" id="ttcXdOpenBook">📕 Mở sổ câu sai</button></div>';
    content.appendChild(div);
    var rb = byId("ttcXdRedo");
    if (rb) rb.addEventListener("click", function () {
      var entries = wrongIdx.map(function (i) {
        return { q: exam.questions[i], level: exam.level };
      });
      startRedo(entries, "Làm lại câu chưa đúng");
    });
    var ob = byId("ttcXdOpenBook");
    if (ob) ob.addEventListener("click", openWrongView);
    div.querySelectorAll("[data-xd-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        var idx = Number(b.getAttribute("data-xd-jump"));
        var reviewBtn = byId("ttcExamReview");
        if (reviewBtn) reviewBtn.click();
        setTimeout(function () {
          var blocks = document.querySelectorAll("#ttcExamContent .ttc-exam-reviewq");
          var t = blocks && blocks[idx];
          if (t && t.scrollIntoView) t.scrollIntoView({ block: "start" });
        }, 80);
      });
    });
  }

  /* ---------------- Trang chủ thi: hàng nút của khối nâng sâu ---------------- */
  function enhanceHome() {
    var content = byId("ttcExamContent");
    if (!content || !byId("ttcExamStart")) return;
    var rowEl = $(".ttc-xd-homerow", content);
    if (rowEl) {
      // Hàng đã dựng từ lần enhance trước: bổ sung nút Đề thật nếu
      // registry đề (window.__TTC_PAPERS__) đến muộn hơn lần dựng đầu.
      var papersLate = Array.isArray(window.__TTC_PAPERS__) ? window.__TTC_PAPERS__ : [];
      if (papersLate.length && !byId("ttcXdHomePapers")) {
        var pbLate = document.createElement("button");
        pbLate.type = "button"; pbLate.className = "ttc-xd-btn"; pbLate.id = "ttcXdHomePapers";
        pbLate.textContent = "📄 Đề thật (" + papersLate.length + ")";
        pbLate.addEventListener("click", openPapersView);
        rowEl.appendChild(pbLate);
      }
      return;
    }
    var open = unmastered().length;
    var papers = Array.isArray(window.__TTC_PAPERS__) ? window.__TTC_PAPERS__ : [];
    var div = document.createElement("div");
    div.className = "ttc-xd-homerow";
    div.innerHTML =
      '<button type="button" class="ttc-xd-btn" id="ttcXdHomeBook">📕 Ôn câu sai' + (open ? " (" + open + " câu)" : "") + "</button>" +
      '<button type="button" class="ttc-xd-btn" id="ttcXdHomeStats">📊 Thống kê của tôi</button>' +
      (papers.length ? '<button type="button" class="ttc-xd-btn" id="ttcXdHomePapers">📄 Đề thật (' + papers.length + ")</button>" : "");
    var hist = $(".ttc-exam-hist", content);
    if (hist && hist.parentNode) hist.parentNode.insertBefore(div, hist.nextSibling);
    else content.appendChild(div);
    byId("ttcXdHomeBook").addEventListener("click", openWrongView);
    byId("ttcXdHomeStats").addEventListener("click", openStatsView);
    var pb = byId("ttcXdHomePapers");
    if (pb) pb.addEventListener("click", openPapersView);
  }

  /* ---------------- Màn hình Sổ câu sai ---------------- */
  function viewShell(title) {
    var content = byId("ttcExamContent");
    content.innerHTML = '<div class="ttc-xd-view"><button type="button" class="ttc-xd-btn" id="ttcXdBack">← Về trang chủ khu thi</button>' +
      '<h3 class="ttc-xd-h" style="margin-top:14px">' + esc(title) + "</h3>";
    return content.firstElementChild;
  }
  /* Gắn nút Quay lại SAU khi màn hình đã dựng xong: các màn hình
     chắp thêm nội dung bằng innerHTML += (trình duyệt dựng lại cây
     DOM) nên gắn trước sẽ mất handler. */
  function bindBack() {
    var b = byId("ttcXdBack");
    if (b) b.addEventListener("click", function () { if (window.otter2OpenExam) window.otter2OpenExam(); });
  }
  function openWrongView() {
    var view = viewShell("📕 Sổ câu sai");
    var all = bookEntries();
    var open = all.filter(function (e) { return !e.mastered; })
      .sort(function (a, b) { return (b.lastTs || 0) - (a.lastTs || 0); });
    var done = all.filter(function (e) { return e.mastered; })
      .sort(function (a, b) { return (b.masteredTs || 0) - (a.masteredTs || 0); });
    var html = "";
    if (!all.length) {
      html += '<p class="ttc-xd-note">Sổ đang trống — chưa có câu sai hay câu bỏ qua nào được ghi lại trên thiết bị này. ' +
        'Cứ làm bài thoải mái: câu nào chưa đúng sẽ tự vào sổ kèm đáp án và giải thích để bạn ôn lại.</p>';
    } else {
      html += '<p class="ttc-xd-note">Đang chờ ôn: <b>' + open.length + '</b> câu · Đã sửa: <b>' + done.length +
        '</b> câu. Sổ lưu bền trên thiết bị này (không bị mất sau 6 lượt thi như phần xem lại của engine) — dữ liệu lấy từ chính các lượt thi của bạn.</p>';
      if (open.length) {
        html += '<div class="ttc-xd-row"><button type="button" class="ttc-xd-btn primary" id="ttcXdRedoAll">🔁 Làm lại tất cả câu chưa đúng (' +
          Math.min(open.length, 40) + (open.length > 40 ? "/" + open.length : "") + " câu)</button></div>";
      }
      var byLevel = {};
      open.forEach(function (e) { (byLevel[e.level] = byLevel[e.level] || []).push(e); });
      Object.keys(byLevel).sort(function (a, b) { return Number(b) - Number(a); }).forEach(function (lv) {
        var items = byLevel[lv];
        html += '<h4 class="ttc-xd-lv">HSK ' + esc(lv) + ' — ' + items.length + ' câu ' +
          '<button type="button" class="ttc-xd-btn small" data-xd-redo-level="' + esc(lv) + '">🔁 Ôn cấp này</button></h4>';
        html += items.map(function (e) { return wrongItemHtml(e, false); }).join("");
      });
      if (done.length) {
        html += '<h4 class="ttc-xd-lv">✓ Đã sửa (' + done.length + " câu)</h4>" +
          done.slice(0, 30).map(function (e) { return wrongItemHtml(e, true); }).join("");
      }
    }
    view.innerHTML += html + "</div>";
    var ra = byId("ttcXdRedoAll");
    if (ra) ra.addEventListener("click", function () { startRedo(open, "Ôn câu sai"); });
    bindBack();
    view.querySelectorAll("[data-xd-redo-level]").forEach(function (b) {
      b.addEventListener("click", function () {
        var lv = Number(b.getAttribute("data-xd-redo-level"));
        startRedo(open.filter(function (e) { return Number(e.level) === lv; }), "Ôn câu sai HSK " + lv);
      });
    });
  }
  function wrongItemHtml(e, mastered) {
    var q = e.q || {};
    return '<div class="ttc-xd-witem' + (mastered ? " mastered" : "") + '">' +
      '<div class="ttc-xd-wmeta"><span class="ttc-xd-chip">HSK ' + esc(e.level) + "</span>" +
      (q.section ? '<span class="ttc-xd-chip">' + esc(SEC_NAME[q.section] || q.section) + "</span>" : "") +
      '<span class="ttc-xd-chip">' + esc(typeName(q.type)) + "</span>" +
      (e.wrong ? '<span class="ttc-xd-chip warn">Sai ×' + e.wrong + "</span>" : "") +
      (e.skipped ? '<span class="ttc-xd-chip warn">Bỏ qua ×' + e.skipped + "</span>" : "") +
      (e.lastTs ? '<span class="ttc-xd-wdate">' + fmtDate(e.lastTs) + "</span>" : "") + "</div>" +
      (q.passage ? '<div class="ttc-xd-wpass">' + esc(q.passage) + "</div>" : "") +
      '<div class="ttc-xd-wstem">' + esc(q.stem || "") + "</div>" +
      (q.sub ? '<div class="ttc-xd-wsub">' + esc(q.sub) + "</div>" : "") +
      '<div class="ttc-xd-wans"><span class="ttc-xd-mine">Bạn chọn: ' + esc(answerText(q, e.lastAnswer)) + "</span>" +
      '<span class="ttc-xd-correct">Đáp án: ' + esc(correctText(q)) + "</span></div>" +
      (q.explainHead || q.explainBody
        ? '<div class="ttc-xd-wexp"><b>' + esc(q.explainHead || "Giải thích") + "</b>" + (q.explainBody ? " — " + esc(q.explainBody) : "") + "</div>"
        : "") +
      "</div>";
  }

  /* ---------------- Màn hình Thống kê ---------------- */
  function openStatsView() {
    var view = viewShell("📊 Thống kê của tôi");
    var hist = loadArr(HIST_KEY).filter(function (h) { return h && h.mode !== "review"; });
    var html = "";
    if (!hist.length) {
      html += '<p class="ttc-xd-note">Chưa có lượt thi nào trên thiết bị này. Làm một đề bất kỳ là thống kê sẽ có số thật ngay.</p>';
      view.innerHTML += html + "</div>";
      bindBack();
      return;
    }
    var totalSec = hist.reduce(function (a, h) { return a + (Number(h.secondsUsed) || 0); }, 0);
    var v2 = hist.filter(function (h) { return typeof h.totalScore === "number"; });
    var passN = v2.filter(function (h) { return h.passed; }).length;
    html += '<div class="ttc-xd-stats">' +
      statCard(hist.length, "Lượt thi (thiết bị này)") +
      statCard(Math.round(totalSec / 60), "Phút luyện thi") +
      statCard(v2.length ? Math.round(100 * passN / v2.length) + "%" : "—", "Tỉ lệ đạt (đề chuẩn)") +
      statCard(v2.length ? Math.max.apply(null, v2.map(function (h) { return h.totalScore || 0; })) : "—", "Điểm cao nhất từng đạt") +
      "</div>";
    /* Theo cấp */
    var byLevel = {};
    hist.forEach(function (h) { (byLevel[h.level] = byLevel[h.level] || []).push(h); });
    html += '<h4 class="ttc-xd-lv">Theo cấp độ</h4>';
    Object.keys(byLevel).sort(function (a, b) { return Number(a) - Number(b); }).forEach(function (lv) {
      var list = byLevel[lv];
      var lv2 = list.filter(function (h) { return typeof h.totalScore === "number"; });
      var best = lv2.length ? lv2.reduce(function (m, h) { return (h.totalScore || 0) > m ? h.totalScore : m; }, 0) : null;
      var bestScale = lv2.length ? (lv2.filter(function (h) { return h.totalScore === best; })[0] || {}).scaleMax : null;
      var lp = lv2.length ? Math.round(100 * lv2.filter(function (h) { return h.passed; }).length / lv2.length) : null;
      html += '<div class="ttc-xd-srow"><span class="ttc-xd-sname">HSK ' + esc(lv) + "</span>" +
        "<span>" + list.length + " lượt</span>" +
        "<span>" + (best != null ? "Cao nhất <b>" + best + "/" + bestScale + "</b>" : "—") + "</span>" +
        "<span>" + (lp != null ? "Đạt " + lp + "%" : "—") + "</span></div>";
    });
    /* Theo phần — tỉ lệ đúng có trọng số theo số câu */
    var secAgg = {};
    v2.forEach(function (h) {
      if (!h.sections) return;
      Object.keys(h.sections).forEach(function (k) {
        var s = h.sections[k];
        if (!s || !s.n) return;
        if (!secAgg[k]) secAgg[k] = { n: 0, ok: 0 };
        secAgg[k].n += s.n; secAgg[k].ok += s.ok;
      });
    });
    var secKeys = Object.keys(secAgg);
    if (secKeys.length) {
      html += '<h4 class="ttc-xd-lv">Tỉ lệ đúng theo phần (mọi lượt thi chuẩn)</h4>';
      var weakest = null, weakestPct = 101;
      secKeys.forEach(function (k) {
        var a = secAgg[k];
        var pct = a.n ? Math.round(100 * a.ok / a.n) : 0;
        if (pct < weakestPct) { weakestPct = pct; weakest = k; }
        html += '<div class="ttc-xd-trow"><div class="ttc-xd-tname">' + esc(SEC_NAME[k] || k) +
          '<div class="ttc-xd-note" style="margin:0">' + a.ok + "/" + a.n + " câu</div></div>" +
          '<div class="ttc-xd-tbar"><i style="width:' + pct + '%"></i></div>' +
          '<div class="ttc-xd-tnum"><b>' + pct + "%</b></div></div>";
      });
      if (weakest) html += '<p class="ttc-xd-note">Phần cần ôn nhất hiện tại: <b>' + esc(SEC_NAME[weakest] || weakest) + "</b> (" + weakestPct + "% đúng).</p>";
    }
    /* Xu hướng 30 ngày */
    var now = Date.now(), dayMs = 86400000;
    var byDay = {};
    hist.forEach(function (h) {
      if (!h.ts || now - h.ts > 30 * dayMs) return;
      var d = new Date(h.ts);
      var key = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
      if (!byDay[key]) byDay[key] = { n: 0, sum: 0, label: ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) };
      byDay[key].n++;
      byDay[key].sum += Number(h.pct) || 0;
    });
    var days = Object.keys(byDay).sort();
    if (days.length) {
      html += '<h4 class="ttc-xd-lv">Xu hướng 30 ngày gần nhất (tỉ lệ đúng trung bình theo ngày)</h4><div class="ttc-xd-trend">';
      days.forEach(function (k) {
        var d = byDay[k];
        var pct = Math.round(d.sum / d.n);
        html += '<div class="ttc-xd-tcol" title="' + esc(d.label) + ": " + pct + "% · " + d.n + ' lượt">' +
          '<div class="ttc-xd-tbar2" style="height:' + Math.max(4, pct) + '%"></div>' +
          '<div class="ttc-xd-tlab">' + esc(d.label) + "</div></div>";
      });
      html += "</div>";
    } else {
      html += '<p class="ttc-xd-note">30 ngày gần nhất chưa có lượt thi nào — xu hướng sẽ hiện khi bạn quay lại làm bài.</p>';
    }
    view.innerHTML += html + "</div>";
    bindBack();
  }
  function statCard(v, label) {
    return '<div class="ttc-xd-stat"><b>' + esc(v) + "</b><span>" + esc(label) + "</span></div>";
  }

  /* ---------------- Màn hình Đề thật (khi có dữ liệu) ---------------- */
  function openPapersView() {
    var view = viewShell("📄 Đề thật HSK");
    var papers = Array.isArray(window.__TTC_PAPERS__) ? window.__TTC_PAPERS__ : [];
    var html = '<p class="ttc-xd-note">Đề thi thật đã được chuyển đổi sang định dạng của khu thi. Phần Nghe dùng chính văn bản ' +
      'nghe của đề (đọc bằng giọng máy); bài luận tự viết (nếu có) chỉ để tự đối chiếu, không chấm tự động.</p>';
    html += papers.map(function (p, i) {
      return '<div class="ttc-xd-witem"><div class="ttc-xd-wmeta"><span class="ttc-xd-chip">HSK ' + esc(p.level) + "</span>" +
        '<span class="ttc-xd-chip">' + esc(p.code || "") + "</span></div>" +
        '<div class="ttc-xd-wstem">' + esc(p.title || ("Đề " + p.code)) + "</div>" +
        '<div class="ttc-xd-wans"><span>' + (p.questions ? p.questions.length : 0) + ' câu chấm tự động</span></div>' +
        '<div class="ttc-xd-row"><button type="button" class="ttc-xd-btn primary" data-xd-paper="' + i + '">🚀 Làm đề này</button></div></div>';
    }).join("");
    view.innerHTML += html + "</div>";
    bindBack();
    view.querySelectorAll("[data-xd-paper]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = papers[Number(b.getAttribute("data-xd-paper"))];
        if (!p || !window.__ttcExam) return;
        var qs = JSON.parse(JSON.stringify(p.questions || []));
        qs.sort(function (a, b2) { var oa = SEC_ORDER[a.section] != null ? SEC_ORDER[a.section] : 9; var ob = SEC_ORDER[b2.section] != null ? SEC_ORDER[b2.section] : 9; return oa - ob; });
        window.__ttcExam.beginCustom(qs, {
          mode: "paper", level: p.level, seconds: p.seconds || Math.max(600, qs.length * 45),
          scaleMax: p.scaleMax || 300, passMark: p.passMark, board: false,
          title: p.title || p.code
        });
      });
    });
  }

  /* ---------------- Style ---------------- */
  function ensureStyle() {
    if (byId("ttcExamDeepStyle")) return;
    var css = [
      ".ttc-xd-h{margin:0 0 4px;color:" + ORANGE + ";font-size:17px}",
      ".ttc-xd-lv{margin:18px 0 8px;color:#0f172a;font-size:15.5px}",
      ".ttc-xd-note{color:#64748b;font-size:13.5px;margin:0 0 10px;line-height:1.55}",
      ".ttc-xd-row{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}",
      ".ttc-xd-btn{border:1px solid #e2e8f0;background:#f8fafc;border-radius:11px;padding:10px 16px;font-weight:700;cursor:pointer;color:#c2410c;font-size:14px}",
      ".ttc-xd-btn.primary{background:" + ORANGE + ";color:#fff;border-color:" + ORANGE + "}",
      ".ttc-xd-btn.small{padding:5px 11px;font-size:12.5px;margin-left:8px}",
      ".ttc-xd-homerow{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0 4px}",
      ".ttc-xd-analysis{margin-top:22px;border-top:2px dashed #e2e8f0;padding-top:16px}",
      ".ttc-xd-trow{display:flex;align-items:center;gap:10px;margin:8px 0;font-size:14px;color:#334155}",
      ".ttc-xd-tname{flex:0 0 210px;font-weight:600}",
      ".ttc-xd-tbar{flex:1;height:11px;background:#eef1f5;border-radius:99px;overflow:hidden}",
      ".ttc-xd-tbar i{display:block;height:100%;background:" + ORANGE + ";border-radius:99px}",
      ".ttc-xd-tnum{flex:0 0 92px;text-align:right;font-weight:600;color:#475569;font-size:13px;line-height:1.4}",
      ".ttc-xd-chips{display:flex;gap:4px;flex-wrap:wrap;margin-top:5px}",
      ".ttc-xd-chip{display:inline-block;padding:2px 8px;border-radius:999px;background:#fff7ed;color:" + ORANGE + ";font-size:11px;font-weight:800;border:1px solid #fed7aa;cursor:pointer}",
      ".ttc-xd-chip.ok{background:#f0fdf4;color:#15803d;border-color:#bbf7d0}",
      ".ttc-xd-chip.bad{background:#fef2f2;color:#b91c1c;border-color:#fecaca}",
      ".ttc-xd-chip.skip{background:#f1f5f9;color:#64748b;border-color:#e2e8f0}",
      ".ttc-xd-chip.warn{background:#fef3c7;color:#92400e;border-color:#fde68a;cursor:default}",
      "button.ttc-xd-chip{cursor:pointer}",
      ".ttc-xd-witem{border:1px solid #eef1f6;border-radius:14px;padding:11px 12px;margin-bottom:9px;background:#fff}",
      ".ttc-xd-witem.mastered{opacity:.75}",
      ".ttc-xd-wmeta{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:5px}",
      ".ttc-xd-wdate{font-size:11.5px;color:#94a3b8;font-weight:600}",
      ".ttc-xd-wpass{font-size:13.5px;color:#475569;background:#f8fafc;border-radius:9px;padding:8px 10px;margin:4px 0;line-height:1.55;white-space:pre-wrap}",
      ".ttc-xd-wstem{font-size:14.5px;font-weight:700;color:#0f172a;line-height:1.5}",
      ".ttc-xd-wsub{font-size:14px;color:#334155;margin-top:2px}",
      ".ttc-xd-wans{display:flex;gap:14px;flex-wrap:wrap;font-size:13px;margin-top:5px}",
      ".ttc-xd-mine{color:#dc2626;font-weight:600}",
      ".ttc-xd-correct{color:#15803d;font-weight:700}",
      ".ttc-xd-wexp{font-size:12.5px;color:#64748b;margin-top:5px;line-height:1.55}",
      ".ttc-xd-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:9px;margin:12px 0}",
      ".ttc-xd-stat{border:1px solid #eef1f5;background:#fbfcfe;border-radius:13px;padding:11px 12px}",
      ".ttc-xd-stat b{display:block;font-size:21px;color:#172033;line-height:1.25}",
      ".ttc-xd-stat span{font-size:12.5px;color:#64748b}",
      ".ttc-xd-srow{display:flex;gap:14px;flex-wrap:wrap;border:1px solid #eef1f5;border-radius:11px;padding:9px 12px;margin-bottom:7px;font-size:14px;color:#334155;background:#fbfcfe;align-items:center}",
      ".ttc-xd-sname{font-weight:800;color:" + ORANGE + "}",
      ".ttc-xd-trend{display:flex;gap:5px;align-items:flex-end;height:110px;border-bottom:1px solid #e2e8f0;padding-top:8px}",
      ".ttc-xd-tcol{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;min-width:22px}",
      ".ttc-xd-tbar2{width:70%;background:" + ORANGE + ";border-radius:5px 5px 0 0}",
      ".ttc-xd-tlab{font-size:10px;color:#94a3b8;margin-top:4px;transform:rotate(-35deg);transform-origin:top center;white-space:nowrap}",
      "@media (max-width:720px){.ttc-xd-tname{flex-basis:150px}.ttc-xd-tnum{flex-basis:76px}}"
    ];
    var st = document.createElement("style");
    st.id = "ttcExamDeepStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- Khởi động + quan sát ---------------- */
  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      try { ensureStyle(); enhanceHome(); enhanceResult(); } catch (e) {}
    }, 120);
  }
  function init() {
    backfill();
    var tries = 0;
    var iv = setInterval(function () {
      tries++;
      var overlay = byId("ttcExamOverlay");
      if (overlay) {
        clearInterval(iv);
        var mo = new MutationObserver(schedule);
        mo.observe(overlay, { childList: true, subtree: true });
        schedule();
      } else if (tries > 40) clearInterval(iv);
    }, 500);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.__ttcExamDeep = {
    onSubmit: onSubmit,
    openWrong: openWrongView,
    openStats: openStatsView,
    openPapers: openPapersView,
    book: { load: loadBook, entries: bookEntries, unmastered: unmastered, record: recordAttempt },
    typeStats: typeStats,
    version: 1
  };
})();
