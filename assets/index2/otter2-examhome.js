/* ============================================================
   CỔNG THI HSK (REDESIGN GĐ3) — otter2-examhome.js (2026-11-19)

   Hoàn tất việc gộp 5 lối vào thi thành MỘT "Thi HSK": trang chủ
   khu thi của engine thật (otter2-exam.js — overlay #ttcExamOverlay,
   engine + bảng điểm cộng đồng Supabase giữ nguyên) được bổ sung
   hai khối kiểu SuperTest, gắn vào đúng trang chủ thi mỗi lần
   engine dựng lại:
   1) LƯỚI KỸ NĂNG (Nghe hiểu · Từ vựng & ngữ pháp · Đọc hiểu ·
      Viết) của cấp đang chọn — đọc từ lịch sử thi THẬT trên thiết
      bị (otter2_exam_history_v1: sections[key] = {n, ok, score});
      cấp chưa từng thi hiện "Chưa có dữ liệu", không bịa số.
   2) SỔ CÂU SAI — dựng từ nguồn dữ liệu THẬT otter2_exam_review_v1
      (mỗi lượt thi lưu questions + answers): câu đã trả lời mà sai
      được gom lại kèm đáp án đúng + giải thích (nếu đề có). Chưa
      có câu sai nào thì khối hiện trạng thái trống trung thực.

   ADDITIVE thuần: chỉ chèn node vào trang chủ thi khi nó được
   dựng; không sửa engine, không đổi id/khóa, không ghi đè dữ liệu.
   Màu khu: Thi HSK cam #c2410c. Khu thi MIỄN PHÍ 100% (banner của
   engine đã nêu rõ — module không đổi thông điệp đó).
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_EXAMHOME__) return;
  window.__TTC_EXAMHOME__ = true;

  var ORANGE = "#c2410c";
  var HIST_KEY = "otter2_exam_history_v1";
  var REVIEW_KEY = "otter2_exam_review_v1";
  var SECTIONS = [
    { key: "listen", icon: "🎧", name: "Nghe hiểu" },
    { key: "vocab", icon: "📚", name: "Từ vựng & ngữ pháp" },
    { key: "reading", icon: "📖", name: "Đọc hiểu" },
    { key: "writing", icon: "✍️", name: "Viết" }
  ];
  var SEC_NAME = { listen: "Nghe hiểu", vocab: "Từ vựng & ngữ pháp", reading: "Đọc hiểu", writing: "Viết" };

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

  /* ---------------- lưới kỹ năng từ lịch sử thật ---------------- */
  function skillData(level) {
    var hist = loadArr(HIST_KEY).filter(function (h) { return Number(h.level) === Number(level); });
    var latest = null;
    hist.forEach(function (h) { if (!latest || Number(h.ts || 0) >= Number(latest.ts || 0)) latest = h; });
    return { attempts: hist.length, latest: latest };
  }
  function skillsHtml(level) {
    var d = skillData(level);
    var cells = SECTIONS.map(function (s) {
      var sec = d.latest && d.latest.sections ? d.latest.sections[s.key] : null;
      var body;
      if (sec && Number(sec.n) > 0) {
        body = '<div class="ttc-xh-cell-num">Đúng ' + Number(sec.ok) + '/' + Number(sec.n) + ' câu · ' + Number(sec.score) + '%</div>' +
          '<div class="ttc-xh-cell-sub">Lần thi gần nhất' + (d.latest.ts ? ' · ' + fmtDate(d.latest.ts) : '') + '</div>';
      } else {
        body = '<div class="ttc-xh-cell-num ttc-xh-none">Chưa có dữ liệu</div>' +
          '<div class="ttc-xh-cell-sub">Thi một đề HSK ' + level + ' để có số liệu phần này</div>';
      }
      return '<div class="ttc-xh-cell"><div class="ttc-xh-cell-name">' + s.icon + ' ' + esc(s.name) + '</div>' + body + '</div>';
    }).join("");
    return '<div class="ttc-xh-block ttc-xh-skills"><h3 class="ttc-xh-h">🧭 Kết quả theo kỹ năng — HSK ' + level + '</h3>' +
      '<p class="ttc-xh-note">' + (d.attempts
        ? 'Bạn đã thi ' + d.attempts + ' lượt ở cấp này trên thiết bị này. Số liệu lấy từ lần thi gần nhất của bạn.'
        : 'Bạn chưa thi lượt nào ở cấp này trên thiết bị này — các ô sẽ có số thật sau lượt thi đầu tiên.') + '</p>' +
      '<div class="ttc-xh-grid">' + cells + '</div></div>';
  }

  /* ---------------- sổ câu sai từ review thật ---------------- */
  function isAnswered(mine) {
    if (typeof mine === "number") return mine >= 0;
    if (Array.isArray(mine)) return mine.length > 0;
    return false;
  }
  function isCorrect(q, mine) {
    if (Array.isArray(q.answerSeq)) {
      return Array.isArray(mine) && mine.length === q.answerSeq.length &&
        mine.every(function (v, i) { return v === q.answerSeq[i]; });
    }
    return mine === q.answer;
  }
  function answerText(q, mine) {
    if (Array.isArray(q.answerSeq)) {
      var seq = Array.isArray(mine) ? mine : q.answerSeq;
      return seq.map(function (idx) { return q.options && q.options[idx] != null ? q.options[idx] : ""; }).join(" → ");
    }
    if (q.correctText && mine === q.answer) return q.correctText;
    if (typeof mine === "number" && q.options && q.options[mine] != null) return q.options[mine];
    return "";
  }
  function correctText(q) {
    if (Array.isArray(q.answerSeq)) {
      return q.answerSeq.map(function (idx) { return q.options && q.options[idx] != null ? q.options[idx] : ""; }).join(" → ");
    }
    if (q.correctText) return q.correctText;
    if (q.options && q.options[q.answer] != null) return q.options[q.answer];
    return "";
  }
  function collectWrongs() {
    var reviews = loadArr(REVIEW_KEY).slice().sort(function (a, b) { return Number(b.ts || 0) - Number(a.ts || 0); });
    var out = [];
    reviews.forEach(function (r) {
      var qs = Array.isArray(r.questions) ? r.questions : [];
      var ans = Array.isArray(r.answers) ? r.answers : [];
      qs.forEach(function (q, i) {
        var mine = ans[i];
        if (!isAnswered(mine) || isCorrect(q, mine)) return;
        out.push({
          level: r.level, ts: r.ts, section: q.section || "",
          stem: q.stem || "", mine: answerText(q, mine), correct: correctText(q),
          explain: q.explainHead || ""
        });
      });
    });
    return out;
  }
  function wrongsHtml() {
    var wrongs = collectWrongs();
    if (!wrongs.length) {
      return '<div class="ttc-xh-block ttc-xh-wrongs"><h3 class="ttc-xh-h">📕 Sổ câu sai</h3>' +
        '<p class="ttc-xh-note">Chưa có câu sai nào trong các lượt thi gần nhất được lưu trên thiết bị này. ' +
        'Cứ làm bài thoải mái — câu nào sai sẽ tự gom vào đây kèm đáp án đúng để bạn ôn lại.</p></div>';
    }
    var items = wrongs.slice(0, 20).map(function (w) {
      return '<div class="ttc-xh-witem">' +
        '<div class="ttc-xh-wmeta"><span class="ttc-xh-chip">HSK ' + esc(w.level) + '</span>' +
        (w.section ? '<span class="ttc-xh-chip">' + esc(SEC_NAME[w.section] || w.section) + '</span>' : '') +
        (w.ts ? '<span class="ttc-xh-wdate">' + fmtDate(w.ts) + '</span>' : '') + '</div>' +
        '<div class="ttc-xh-wstem">' + esc(w.stem) + '</div>' +
        '<div class="ttc-xh-wans"><span class="ttc-xh-mine">Bạn chọn: ' + esc(w.mine || "—") + '</span>' +
        '<span class="ttc-xh-correct">Đáp án: ' + esc(w.correct || "—") + '</span></div>' +
        (w.explain ? '<div class="ttc-xh-wexp">' + esc(w.explain) + '</div>' : '') +
        '</div>';
    }).join("");
    return '<div class="ttc-xh-block ttc-xh-wrongs"><h3 class="ttc-xh-h">📕 Sổ câu sai (' + wrongs.length + ' câu)</h3>' +
      '<p class="ttc-xh-note">Các câu bạn đã trả lời sai trong những lượt thi gần nhất (lưu trên thiết bị này) — ôn lại để không sai lần nữa.</p>' +
      items +
      (wrongs.length > 20 ? '<p class="ttc-xh-note">… và ' + (wrongs.length - 20) + ' câu sai nữa trong các lượt thi trước.</p>' : '') +
      '</div>';
  }

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcExamHomeStyle")) return;
    var css = [
      ".ttc-xh-block{margin-top:20px}",
      ".ttc-xh-h{margin:0 0 4px;color:" + ORANGE + ";font-size:17px}",
      ".ttc-xh-note{color:#64748b;font-size:13.5px;margin:0 0 10px;line-height:1.5}",
      ".ttc-xh-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:9px}",
      ".ttc-xh-cell{border:1px solid #e7e9ee;border-radius:14px;padding:11px 12px;background:#ffffff}",
      ".ttc-xh-cell-name{font-size:13px;font-weight:800;color:#0f172a;margin-bottom:5px}",
      ".ttc-xh-cell-num{font-size:14.5px;font-weight:800;color:" + ORANGE + "}",
      ".ttc-xh-cell-num.ttc-xh-none{color:#94a3b8}",
      ".ttc-xh-cell-sub{font-size:11.5px;color:#64748b;font-weight:600;margin-top:2px}",
      ".ttc-xh-witem{border:1px solid #eef1f6;border-radius:14px;padding:11px 12px;margin-bottom:9px;background:#ffffff}",
      ".ttc-xh-wmeta{display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin-bottom:5px}",
      ".ttc-xh-chip{padding:2px 8px;border-radius:999px;background:#fff7ed;color:" + ORANGE + ";font-size:11px;font-weight:800}",
      ".ttc-xh-wdate{font-size:11.5px;color:#94a3b8;font-weight:600}",
      ".ttc-xh-wstem{font-size:14.5px;font-weight:700;color:#0f172a;line-height:1.5}",
      ".ttc-xh-wans{display:flex;gap:14px;flex-wrap:wrap;font-size:13px;margin-top:4px}",
      ".ttc-xh-mine{color:#dc2626;font-weight:600}",
      ".ttc-xh-correct{color:#15803d;font-weight:700}",
      ".ttc-xh-wexp{font-size:12.5px;color:#64748b;margin-top:4px;line-height:1.5}"
    ];
    var st = document.createElement("style");
    st.id = "ttcExamHomeStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- chèn khối vào trang chủ thi ---------------- */
  function enhance() {
    var overlay = byId("ttcExamOverlay");
    if (!overlay) return;
    var start = byId("ttcExamStart");
    var levelsEl = overlay.querySelector(".ttc-exam-levels");
    if (!start || !levelsEl) return; /* chưa ở trang chủ thi */
    if (!overlay.querySelector(".ttc-xh-skills")) {
      var on = overlay.querySelector("[data-exam-level].on");
      var level = on ? Number(on.getAttribute("data-exam-level")) || 1 : 1;
      var tmp = document.createElement("div");
      tmp.innerHTML = skillsHtml(level);
      var block = tmp.firstElementChild;
      start.parentNode.insertBefore(block, start);
    }
    if (!overlay.querySelector(".ttc-xh-wrongs")) {
      var tmp2 = document.createElement("div");
      tmp2.innerHTML = wrongsHtml();
      start.parentNode.appendChild(tmp2.firstElementChild);
    }
  }
  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(function () { pending = false; try { ensureStyle(); enhance(); } catch (e) {} }, 120);
  }
  function init() {
    var overlay = byId("ttcExamOverlay");
    if (!overlay) { setTimeout(init, 700); return; }
    var mo = new MutationObserver(schedule);
    mo.observe(overlay, { childList: true, subtree: true });
    schedule();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.__ttcExamHome = { enhance: enhance, collectWrongs: collectWrongs, skillData: skillData };
})();
