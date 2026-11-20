/* ============================================================
   PHÒNG ĐỌC (REDESIGN GĐ2) — otter2-readingroom.js (2026-11-19)

   Biến khu đọc hiểu hiện có (otter2-practice-reading.js — 240 bài,
   dữ liệu KHÔNG đổi) thành phòng học theo TAB cùng khuôn phòng
   truyện (bản thiết kế đã duyệt: mỗi tab sở hữu toàn bộ không gian):
   - Tab mặc định "Bài đọc": bài đọc nguyên bản của engine (từng
     đoạn zh + pinyin + VI, bôi đen tra cứu, nghe cả bài… — mọi cơ
     chế giữ nguyên) chiếm TRỌN chiều ngang phòng.
   - Tab "Từ vựng của bài" (tách từ bằng chính lõi của story-pack
     OTTER2_STORYPACK_CORE: longest-match trên kho từ HSK ≤ cấp
     của bài; thẻ có pinyin + tên Hán-Việt ĐỎ + nghĩa VI + nút phát
     âm + nhãn ✓ Đã học đọc từ kho tiến độ thật) và tab "Bài tập"
     (nghe hiểu / chép chính tả / điền từ / luyện dịch sinh từ
     CHÍNH các câu của bài — cùng bộ sinh của story-pack; nghe
     bằng TTS vì bài đọc không có mốc âm thanh từng câu) thay thế
     không gian khi được chọn — không còn panel phải cố định ép
     bài đọc (sửa theo phản ánh chủ web 2026-11-20: panel 372px
     khiến bài đọc chỉ còn ~56% bề ngang ở cửa sổ ~1200px).

   ADDITIVE thuần: index2.html chỉ thêm 1 thẻ <script>; không sửa
   engine đọc, không đổi id/khóa nào. Tiến độ phòng đọc lưu ở khóa
   MỚI otter2_readingroom_v1; khóa otter2_hsk_vocab_progress_v1 chỉ
   ĐỌC (nhãn đã học), không bao giờ ghi.
   Màu khu: Phòng đọc xanh dương #2563eb. Bề mặt trắng; một nút
   chính mỗi thẻ/hàng.
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_READINGROOM__) return;
  window.__TTC_READINGROOM__ = true;

  var BLUE = "#2563eb";
  var LS_KEY = "otter2_readingroom_v1";
  var PROGRESS_KEY = "otter2_hsk_vocab_progress_v1"; /* CHỈ ĐỌC */

  function $(sel, root) { try { return (root || document).querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- kho dữ liệu phòng (khóa mới) ---------------- */
  function loadStore() {
    try { var o = JSON.parse(localStorage.getItem(LS_KEY) || "{}"); return o && typeof o === "object" ? o : {}; }
    catch (e) { return {}; }
  }
  function saveStore(o) { try { localStorage.setItem(LS_KEY, JSON.stringify(o)); } catch (e) {} }
  function passageProg(store, id) {
    if (!store.passages) store.passages = {};
    if (!store.passages[id]) store.passages[id] = { sessions: 0, last: 0, best: 0, byType: {}, updatedAt: 0 };
    return store.passages[id];
  }

  /* ---------------- dữ liệu thật (chỉ đọc) ---------------- */
  function learnedSet(level) {
    try {
      var o = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
      var slot = o && o[String(level)];
      var arr = slot && Array.isArray(slot.learned) ? slot.learned : [];
      var s = {};
      arr.forEach(function (h) { s[h] = 1; });
      return s;
    } catch (e) { return {}; }
  }
  function hanViet(text) {
    try {
      if (typeof window.ttcHanVietName === "function") return window.ttcHanVietName(text) || "";
    } catch (e) {}
    var map = window.TTC_HANVIET || {};
    return String(text || "").split("").map(function (ch) { return map[ch] || ""; }).filter(Boolean).join(" ");
  }

  /* Ngân hàng từ gộp các cấp 1..level (cùng khuôn buildBank của lõi). */
  var bankCache = {};
  function bankFor(level) {
    if (bankCache[level]) return bankCache[level];
    var Core = window.OTTER2_STORYPACK_CORE;
    var all = window.OTTER2_HSK_ALL_DATA;
    if (!Core || !all || !Array.isArray(all.words)) return null;
    var merged = { byLen: {}, maxLen: 1, list: [] };
    for (var lv = 1; lv <= level; lv++) {
      var b = Core.buildBank(all.words, lv);
      merged.list = merged.list.concat(b.list);
      if (b.maxLen > merged.maxLen) merged.maxLen = b.maxLen;
      for (var L in b.byLen) {
        if (!merged.byLen[L]) merged.byLen[L] = {};
        for (var h in b.byLen[L]) merged.byLen[L][h] = b.byLen[L][h];
      }
    }
    bankCache[level] = merged;
    return merged;
  }

  /* ---------------- âm thanh TTS ---------------- */
  function stopSpeak() { try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {} }
  function speakZh(text) {
    try {
      if (!window.speechSynthesis || !text) return;
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "zh-CN";
      u.rate = 0.92;
      var vs = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
      for (var i = 0; i < vs.length; i++) {
        if (/^zh/i.test(vs[i].lang || "")) { u.voice = vs[i]; break; }
      }
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ---------------- trích đơn vị câu từ DOM bài đọc ---------------- */
  var ZH_SENT = /[^。！？!?；;.]+[。！？!?；;.]?/g;
  var PY_SENT = /[^.!?;]+[.!?;]?/g;
  function splitSent(text, re) {
    var m = String(text || "").match(re);
    return m ? m.map(function (x) { return x.trim(); }).filter(Boolean) : [];
  }
  function extractUnits(detailEl) {
    var units = [];
    var pairs = detailEl.querySelectorAll(".ttc-reading-pair");
    Array.prototype.forEach.call(pairs, function (pair) {
      var zh = ($(".ttc-reading-charline", pair) || {}).textContent || "";
      var py = ($(".ttc-reading-py-line", pair) || {}).textContent || "";
      var vi = ($(".ttc-reading-vi-line", pair) || {}).textContent || "";
      zh = zh.trim(); py = py.trim(); vi = vi.trim();
      if (!zh) return;
      var zs = splitSent(zh, ZH_SENT);
      var ps = splitSent(py, PY_SENT);
      var vs = splitSent(vi, PY_SENT);
      if (zs.length > 1 && zs.length === ps.length && zs.length === vs.length) {
        zs.forEach(function (z, i) { units.push({ zh: z, py: ps[i], vi: vs[i] }); });
      } else if (zs.length === 1 && ps.length <= 1 && vs.length <= 1) {
        units.push({ zh: zh, py: py, vi: vi });
      } else {
        /* không canh được từng câu -> giữ cả đoạn làm một đơn vị */
        units.push({ zh: zh, py: py, vi: vi });
      }
    });
    return units.filter(function (u) { return u.zh && u.vi; });
  }
  function passageIdentity() {
    var t = (byId("ttcReadingNavTitle") || {}).textContent || "";
    var m = /HSK\s*(\d+)\s*·\s*Bài đọc số\s*(\d+)/.exec(t);
    if (!m) return null;
    var lv = Number(m[1]), n = Number(m[2]);
    return { level: lv, index: n, id: "hsk" + lv + "-" + (n < 10 ? "0" + n : "" + n) };
  }

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcRoomStyle")) return;
    var css = [
      ".ttc-room-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-items:start}",
      ".ttc-room-off{display:none!important}",
      ".ttc-room-side{background:#ffffff;border:1px solid #e7e9ee;border-radius:18px;padding:14px;box-sizing:border-box;min-width:0}",
      ".ttc-room-tabs{display:flex;gap:4px;background:#f1f5f9;border-radius:999px;padding:4px;margin-bottom:0}",
      ".ttc-room-tab{flex:1 1 0;border:none;background:transparent;border-radius:999px;padding:9px 6px;font:inherit;font-size:13.5px;font-weight:700;color:#0f172a;cursor:pointer}",
      ".ttc-room-tab.is-cur{background:" + BLUE + ";color:#ffffff}",
      ".ttc-room-sum{font-size:13px;color:#64748b;font-weight:600;margin:2px 0 10px}",
      ".ttc-room-setbtn{width:100%;padding:10px;border:1px solid #c7d7fb;border-radius:12px;background:#eff6ff;color:" + BLUE + ";font:inherit;font-size:14px;font-weight:800;cursor:pointer;margin-bottom:12px}",
      ".ttc-room-setbtn[disabled]{opacity:.75;cursor:default}",
      ".ttc-room-vlist{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(250px,100%),1fr));gap:10px}",
      ".ttc-room-vcard{border:1px solid #eef1f6;border-radius:14px;padding:10px 12px;background:#ffffff}",
      ".ttc-room-vtop{display:flex;align-items:flex-start;gap:8px}",
      ".ttc-room-hanzi{font-size:21px;font-weight:800;color:#0f172a;line-height:1.25}",
      ".ttc-room-py{font-size:13px;color:#64748b;font-weight:600}",
      ".ttc-room-hv{font-size:12.5px;color:#dc2626;font-weight:700;letter-spacing:.02em;margin-top:1px}",
      ".ttc-room-mean{font-size:14px;color:#0f172a;margin-top:4px;line-height:1.45}",
      ".ttc-room-speak{margin-left:auto;flex:0 0 auto;width:36px;height:36px;border-radius:10px;border:1px solid #e7e9ee;background:#f8fafc;cursor:pointer;font-size:16px}",
      ".ttc-room-learned{display:inline-block;margin-top:6px;padding:2px 9px;border-radius:999px;background:#dcfce7;color:#15803d;font-size:11.5px;font-weight:800}",
      ".ttc-room-empty{font-size:13.5px;color:#64748b;line-height:1.55;padding:8px 2px}",
      ".ttc-room-xrow{display:flex;align-items:center;gap:11px;width:100%;box-sizing:border-box;padding:12px;border:1px solid #eef1f6;border-radius:14px;background:#ffffff;font:inherit;text-align:left;cursor:pointer;margin-bottom:10px}",
      ".ttc-room-xrow:hover{border-color:#c7d7fb}",
      ".ttc-room-xico{flex:0 0 auto;width:38px;height:38px;border-radius:11px;background:#eff6ff;display:inline-flex;align-items:center;justify-content:center;font-size:18px}",
      ".ttc-room-xname{font-size:14.5px;font-weight:800;color:#0f172a}",
      ".ttc-room-xsub{font-size:12px;color:#64748b;font-weight:600}",
      ".ttc-room-xbest{margin-left:auto;flex:0 0 auto;font-size:12px;font-weight:800;color:" + BLUE + "}",
      ".ttc-room-cta{width:100%;padding:12px;border:none;border-radius:12px;background:" + BLUE + ";color:#ffffff;font:inherit;font-size:15px;font-weight:800;cursor:pointer}",
      ".ttc-room-cta:hover{background:#1d4ed8}",
      ".ttc-room-ghost{width:100%;padding:11px;border:1px solid #e7e9ee;border-radius:12px;background:#ffffff;color:#0f172a;font:inherit;font-size:14px;font-weight:700;cursor:pointer}",
      ".ttc-room-qhead{display:flex;align-items:center;gap:10px;font-size:12.5px;color:#64748b;font-weight:700;margin-bottom:10px}",
      ".ttc-room-qbar{flex:1 1 auto;height:8px;border-radius:99px;background:#f1f5f9;overflow:hidden}",
      ".ttc-room-qbar i{display:block;height:100%;background:" + BLUE + ";width:0%}",
      ".ttc-room-play{display:inline-flex;align-items:center;gap:8px;padding:11px 16px;border:none;border-radius:12px;background:" + BLUE + ";color:#fff;font:inherit;font-size:14.5px;font-weight:800;cursor:pointer;margin-bottom:12px}",
      ".ttc-room-opts{display:flex;flex-direction:column;gap:8px}",
      ".ttc-room-opt{padding:11px 12px;border:1px solid #e7e9ee;border-radius:12px;background:#ffffff;font:inherit;font-size:14.5px;color:#0f172a;text-align:left;cursor:pointer;line-height:1.45}",
      ".ttc-room-opt:hover{border-color:#c7d7fb}",
      ".ttc-room-opt.is-ok{border-color:#16a34a;background:#f0fdf4}",
      ".ttc-room-opt.is-bad{border-color:#dc2626;background:#fef2f2}",
      ".ttc-room-opt[disabled]{cursor:default;opacity:.92}",
      ".ttc-room-zh{font-size:19px;font-weight:800;color:#0f172a;line-height:1.5;margin:2px 0 4px}",
      ".ttc-room-vi{font-size:14.5px;color:#0f172a;line-height:1.55;margin:2px 0 10px}",
      ".ttc-room-pyline{font-size:13px;color:#64748b;font-weight:600;margin-bottom:10px}",
      ".ttc-room-input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid #dbe2ee;border-radius:12px;font:inherit;font-size:16px;margin-bottom:10px}",
      ".ttc-room-marks{font-size:19px;line-height:1.6;margin:6px 0 10px;word-break:break-all}",
      ".ttc-room-marks .ok{color:#16a34a}",
      ".ttc-room-marks .bad{color:#dc2626;text-decoration:underline}",
      ".ttc-room-tiles{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:10px}",
      ".ttc-room-tile{padding:8px 12px;border:1px solid #dbe2ee;border-radius:10px;background:#f8fafc;font:inherit;font-size:15.5px;color:#0f172a;cursor:pointer}",
      ".ttc-room-tile[disabled]{opacity:.35;cursor:default}",
      ".ttc-room-built{min-height:44px;border:1px dashed #c7d7fb;border-radius:12px;padding:8px 10px;font-size:16.5px;line-height:1.5;margin-bottom:10px;color:#0f172a}",
      ".ttc-room-fb{font-size:13.5px;font-weight:700;margin:8px 0 10px}",
      ".ttc-room-fb.ok{color:#15803d}",
      ".ttc-room-fb.bad{color:#dc2626}",
      ".ttc-room-score{font-size:30px;font-weight:900;color:" + BLUE + ";line-height:1.15}",
      ".ttc-room-actions{display:flex;flex-direction:column;gap:8px;margin-top:12px}"
    ];
    var st = document.createElement("style");
    st.id = "ttcRoomStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- trạng thái phòng ---------------- */
  var ui = {
    current: null,      /* {id, level, index, units, cues, vocab, pack} */
    tab: "read",        /* read | vocab | ex — tab sở hữu không gian phòng */
    screen: "home",     /* home | session | result (trong tab Bài tập) */
    session: null,      /* {list, i, score, byType:{type:{n,ok}}} */
    passageEl: null,    /* node .ttc-reading-detail hiện tại */
    barEl: null         /* thanh tab của phòng (#ttcRoomBar) */
  };

  function ensurePack() {
    var cur = ui.current;
    if (!cur || cur.pack) return cur ? cur.pack : null;
    var Core = window.OTTER2_STORYPACK_CORE;
    var bank = bankFor(cur.level);
    if (!Core || !bank) return null;
    cur.cues = cur.units.map(function (u, i) { return [i, i + 1, u.zh, u.py, u.vi]; });
    cur.vocab = Core.storyVocab(cur.cues, bank);
    cur.pack = Core.buildPack(cur.id, cur.cues, bank);
    return cur.pack;
  }

  /* ---------------- tab Từ vựng ---------------- */
  function renderVocab(side) {
    var cur = ui.current;
    ensurePack();
    var store = loadStore();
    var saved = !!(store.sets && store.sets[cur.id]);
    var vocab = cur.vocab || [];
    var learnedCount = 0;
    var cards = vocab.map(function (w) {
      var learned = !!learnedSet(w.hsk)[w.h];
      if (learned) learnedCount++;
      var hv = hanViet(w.h);
      return '<div class="ttc-room-vcard">' +
        '<div class="ttc-room-vtop"><div><span class="ttc-room-hanzi">' + esc(w.h) + '</span> ' +
        '<span class="ttc-room-py">' + esc(w.p || "") + '</span>' +
        (hv ? '<div class="ttc-room-hv">' + esc(hv) + '</div>' : '') +
        '</div><button type="button" class="ttc-room-speak" data-room-speak="' + esc(w.h) + '" aria-label="Nghe phát âm">🔊</button></div>' +
        '<div class="ttc-room-mean">' + esc(w.m || "") + '</div>' +
        (learned ? '<span class="ttc-room-learned">✓ Đã học</span>' : '') +
        '</div>';
    }).join("");
    side.innerHTML =
      '<div class="ttc-room-sum">' + vocab.length + ' từ vựng trong bài · ' + learnedCount + ' từ bạn đã học</div>' +
      '<button type="button" class="ttc-room-setbtn" data-room-set ' + (saved ? "disabled" : "") + '>' +
      (saved ? "✓ Đã tạo bộ từ vựng của bài này" : "＋ Tạo bộ từ vựng từ bài này") + '</button>' +
      (vocab.length ? '<div class="ttc-room-vlist">' + cards + '</div>'
        : '<div class="ttc-room-empty">Chưa tách được từ vựng nào từ bài này bằng kho từ HSK cấp ' + cur.level + ' trở xuống.</div>');
  }

  /* ---------------- tab Bài tập ---------------- */
  var TYPES = [
    { key: "listen", icon: "🎧", name: "Nghe hiểu", sub: "Nghe câu, chọn nghĩa tiếng Việt" },
    { key: "dict", icon: "✍️", name: "Chép chính tả", sub: "Nghe rồi gõ lại chữ Hán" },
    { key: "fill", icon: "🧩", name: "Điền từ", sub: "Chọn từ đúng vào chỗ trống" },
    { key: "trans", icon: "🔤", name: "Luyện dịch", sub: "Ghép câu tiếng Trung từ nghĩa Việt" }
  ];
  function renderExHome(side) {
    var cur = ui.current;
    var pack = ensurePack();
    var store = loadStore();
    var prog = passageProg(store, cur.id);
    var rows = TYPES.map(function (t) {
      var n = pack ? pack[t.key].length : 0;
      var bt = prog.byType[t.key];
      var best = bt && bt.n ? Math.round((bt.ok / bt.n) * 100) + "% đúng" : "";
      return '<button type="button" class="ttc-room-xrow" data-room-type="' + t.key + '" ' + (n ? "" : "disabled style=\"opacity:.5\"") + '>' +
        '<span class="ttc-room-xico" aria-hidden="true">' + t.icon + '</span>' +
        '<span><span class="ttc-room-xname">' + t.name + '</span><br><span class="ttc-room-xsub">' + t.sub + ' · ' + n + ' câu</span></span>' +
        (best ? '<span class="ttc-room-xbest">' + best + '</span>' : '') + '</button>';
    }).join("");
    var total = pack ? Math.min(10, pack.listen.length + pack.dict.length + pack.fill.length + pack.trans.length) : 0;
    side.innerHTML =
      '<div class="ttc-room-sum">Bài tập sinh từ chính các câu trong bài đọc này.' +
      (prog.sessions ? ' Đã luyện ' + prog.sessions + ' lượt · điểm cao nhất ' + prog.best + '.' : '') + '</div>' +
      rows +
      '<button type="button" class="ttc-room-cta" data-room-mix ' + (total ? "" : "disabled style=\"opacity:.5\"") + '>▶ Bắt đầu luyện tập (' + total + ' câu trộn)</button>';
  }

  function startSession(kind) {
    var pack = ensurePack();
    if (!pack) return;
    var Core = window.OTTER2_STORYPACK_CORE;
    var rnd = Core.mulberry32(Core.seedFromStr(ui.current.id + "|" + kind + "|" + Date.now()));
    var list = [];
    if (kind === "mix") {
      var all = pack.listen.concat(pack.dict, pack.fill, pack.trans);
      list = Core.shuffle(all, rnd).slice(0, 10);
    } else {
      list = Core.shuffle(pack[kind].slice(), rnd);
    }
    if (!list.length) return;
    ui.session = { list: list, i: 0, score: 0, byType: {}, kind: kind, answered: false, built: [] };
    ui.screen = "session";
    renderSide();
  }
  function recordAnswer(type, ok) {
    var s = ui.session;
    if (!s.byType[type]) s.byType[type] = { n: 0, ok: 0 };
    s.byType[type].n++;
    if (ok) { s.byType[type].ok++; s.score++; }
  }
  function finishSession() {
    var s = ui.session;
    var store = loadStore();
    var prog = passageProg(store, ui.current.id);
    prog.sessions++;
    prog.last = s.score;
    if (s.score > prog.best) prog.best = s.score;
    for (var t in s.byType) {
      if (!prog.byType[t]) prog.byType[t] = { n: 0, ok: 0 };
      prog.byType[t].n += s.byType[t].n;
      prog.byType[t].ok += s.byType[t].ok;
    }
    prog.updatedAt = Date.now();
    saveStore(store);
    ui.screen = "result";
    renderSide();
  }

  function qHead() {
    var s = ui.session;
    var pct = Math.round((s.i / s.list.length) * 100);
    return '<div class="ttc-room-qhead"><span>Câu ' + (s.i + 1) + '/' + s.list.length + '</span>' +
      '<span class="ttc-room-qbar"><i style="width:' + pct + '%"></i></span>' +
      '<span>Đúng ' + s.score + '</span></div>';
  }
  function nextBtn(label) {
    var s = ui.session;
    var last = s.i >= s.list.length - 1;
    return '<div class="ttc-room-actions"><button type="button" class="ttc-room-cta" data-room-next>' +
      (last ? "Xem kết quả" : (label || "Câu tiếp theo →")) + '</button></div>';
  }

  function renderQuestion(side) {
    var s = ui.session;
    if (!s || !ensurePack()) { ui.screen = "home"; renderExHome(side); return; }
    var q = s.list[s.i];
    var cue = ui.current.cues[q.cue];
    s.answered = false;
    s.built = [];
    var html = qHead();
    if (q.type === "listen") {
      html += '<button type="button" class="ttc-room-play" data-room-play>🔊 Nghe câu</button>' +
        '<div class="ttc-room-opts">' + q.options.map(function (o, i) {
          return '<button type="button" class="ttc-room-opt" data-room-opt="' + i + '">' + esc(o) + '</button>';
        }).join("") + '</div><div data-room-fb></div>';
    } else if (q.type === "dict") {
      html += '<button type="button" class="ttc-room-play" data-room-play>🔊 Nghe câu</button>' +
        '<input type="text" class="ttc-room-input" data-room-dict placeholder="Gõ lại câu vừa nghe bằng chữ Hán…" autocomplete="off">' +
        '<button type="button" class="ttc-room-cta" data-room-checkdict>Kiểm tra</button><div data-room-fb></div>';
    } else if (q.type === "fill") {
      html += '<div class="ttc-room-zh">' + esc(q.before) + '<span style="color:' + BLUE + '">＿＿</span>' + esc(q.after) + '</div>' +
        (cue[3] ? '<div class="ttc-room-pyline">' + esc(cue[3]) + '</div>' : '') +
        '<div class="ttc-room-opts">' + q.options.map(function (o, i) {
          return '<button type="button" class="ttc-room-opt" data-room-opt="' + i + '">' + esc(o.h) + ' <span style="color:#64748b;font-size:12.5px">' + esc(o.p || "") + '</span></button>';
        }).join("") + '</div><div data-room-fb></div>';
    } else if (q.type === "trans") {
      html += '<div class="ttc-room-vi">' + esc(cue[4]) + '</div>';
      if (q.mode === "tiles") {
        html += '<div class="ttc-room-built" data-room-built>Chạm vào các thẻ để ghép câu…</div>' +
          '<div class="ttc-room-tiles">' + q.tiles.map(function (t, i) {
            return '<button type="button" class="ttc-room-tile" data-room-tile="' + i + '">' + esc(t) + '</button>';
          }).join("") + '</div>' +
          '<button type="button" class="ttc-room-cta" data-room-checktiles>Kiểm tra</button><div data-room-fb></div>';
      } else {
        html += '<div class="ttc-room-opts">' + q.options.map(function (o, i) {
          return '<button type="button" class="ttc-room-opt" data-room-opt="' + i + '">' + esc(o) + '</button>';
        }).join("") + '</div><div data-room-fb></div>';
      }
    }
    side.innerHTML = html;
    if (q.type === "listen" || q.type === "dict") speakZh(cue[2]);
  }

  function renderResult(side) {
    var s = ui.session;
    side.innerHTML =
      '<div class="ttc-room-sum">Hoàn thành phiên luyện tập</div>' +
      '<div class="ttc-room-score">' + s.score + '/' + s.list.length + ' câu đúng</div>' +
      '<div class="ttc-room-sum">Kết quả đã lưu vào tiến độ phòng đọc của bài này.</div>' +
      '<div class="ttc-room-actions">' +
      '<button type="button" class="ttc-room-cta" data-room-again>Làm lại phiên này</button>' +
      '<button type="button" class="ttc-room-ghost" data-room-back>← Về danh sách bài tập</button></div>';
  }

  function renderSide() {
    var side = byId("ttcRoomSide");
    if (!side || !ui.current) return;
    if (ui.screen === "session" && !ui.session) ui.screen = "home";
    if (ui.screen === "result" && !ui.session) ui.screen = "home";
    side.innerHTML = '<div data-room-body></div>';
    var body = side.querySelector("[data-room-body]");
    if (ui.tab === "vocab") renderVocab(body);
    else if (ui.screen === "session") renderQuestion(body);
    else if (ui.screen === "result") renderResult(body);
    else renderExHome(body);
  }

  /* Thanh tab của phòng: Bài đọc (mặc định) | Từ vựng | Bài tập.
     Mỗi tab sở hữu toàn bộ không gian bên dưới thanh tab. */
  var ROOM_TABS = [
    { key: "read", label: "📖 Bài đọc" },
    { key: "vocab", label: "📚 Từ vựng của bài" },
    { key: "ex", label: "✍️ Bài tập" }
  ];
  function buildBar() {
    var bar = document.createElement("div");
    bar.className = "ttc-room-tabs";
    bar.id = "ttcRoomBar";
    bar.setAttribute("role", "tablist");
    bar.setAttribute("aria-label", "Các phần của phòng đọc");
    bar.innerHTML = ROOM_TABS.map(function (t) {
      return '<button type="button" class="ttc-room-tab" data-room-tab="' + t.key + '" role="tab">' + t.label + '</button>';
    }).join("");
    return bar;
  }
  function applyTab() {
    var side = byId("ttcRoomSide");
    var rd = ui.passageEl;
    var reading = ui.tab === "read";
    if (rd) rd.classList.toggle("ttc-room-off", !reading);
    if (side) side.classList.toggle("ttc-room-off", reading);
    var bar = ui.barEl || byId("ttcRoomBar");
    if (bar) {
      Array.prototype.forEach.call(bar.querySelectorAll("[data-room-tab]"), function (b) {
        var cur = b.getAttribute("data-room-tab") === ui.tab;
        b.classList.toggle("is-cur", cur);
        b.setAttribute("aria-selected", cur ? "true" : "false");
      });
    }
  }

  /* ---------------- tương tác trong panel ---------------- */
  function onSideClick(ev) {
    var side = byId("ttcRoomSide");
    var bar = ui.barEl || byId("ttcRoomBar");
    var t = ev.target.closest ? ev.target.closest("[data-room-tab],[data-room-speak],[data-room-set],[data-room-type],[data-room-mix],[data-room-play],[data-room-opt],[data-room-checkdict],[data-room-checktiles],[data-room-tile],[data-room-next],[data-room-again],[data-room-back]") : null;
    if (!t) return;
    var cur = ui.current;
    if (!cur) return;

    if (t.hasAttribute("data-room-tab")) {
      if (!bar || !bar.contains(t)) return;
      var next = t.getAttribute("data-room-tab");
      if (next === ui.tab) { applyTab(); return; }
      ui.tab = next;
      stopSpeak();
      if (next === "vocab") { ui.screen = "home"; ui.session = null; }
      if (next !== "read") renderSide();
      applyTab();
      return;
    }
    if (!side || !side.contains(ev.target)) return;
    if (t.hasAttribute("data-room-speak")) { speakZh(t.getAttribute("data-room-speak")); return; }
    if (t.hasAttribute("data-room-set")) {
      var store = loadStore();
      if (!store.sets) store.sets = {};
      ensurePack();
      store.sets[cur.id] = (cur.vocab || []).map(function (w) { return w.h; });
      saveStore(store);
      renderSide();
      return;
    }
    if (t.hasAttribute("data-room-type")) { startSession(t.getAttribute("data-room-type")); return; }
    if (t.hasAttribute("data-room-mix")) { startSession("mix"); return; }
    if (t.hasAttribute("data-room-back")) { ui.screen = "home"; ui.session = null; renderSide(); return; }
    if (t.hasAttribute("data-room-again")) { startSession(ui.session ? ui.session.kind : "mix"); return; }

    var s = ui.session;
    if (!s) return;
    var q = s.list[s.i];
    var cue = cur.cues[q.cue];
    var body = side.querySelector("[data-room-body]");

    if (t.hasAttribute("data-room-play")) { speakZh(cue[2]); return; }
    if (t.hasAttribute("data-room-next")) {
      stopSpeak();
      if (s.i >= s.list.length - 1) finishSession();
      else { s.i++; renderSide(); }
      return;
    }
    if (t.hasAttribute("data-room-opt")) {
      if (s.answered) return;
      s.answered = true;
      var idx = Number(t.getAttribute("data-room-opt"));
      var chosen = q.options[idx];
      var ok = false, fb = "";
      if (q.type === "listen") {
        ok = chosen === q.answer;
        fb = (ok ? "✓ Đúng rồi!" : "✗ Chưa đúng.") + ' Câu: ' + cue[2] + (cue[3] ? " · " + cue[3] : "");
      } else if (q.type === "fill") {
        ok = chosen.h === q.answer;
        fb = (ok ? "✓ Đúng rồi!" : "✗ Chưa đúng — từ đúng là " + q.answer + ".") + " Nghĩa cả câu: " + cue[4];
      } else if (q.type === "trans") {
        ok = chosen === q.answer;
        fb = ok ? "✓ Đúng rồi!" : "✗ Chưa đúng — câu đúng: " + q.answer;
      }
      recordAnswer(q.type, ok);
      Array.prototype.forEach.call(body.querySelectorAll("[data-room-opt]"), function (b, bi) {
        b.disabled = true;
        var v = q.options[bi];
        var isAns = q.type === "fill" ? v.h === q.answer : v === q.answer;
        if (isAns) b.classList.add("is-ok");
        else if (bi === idx) b.classList.add("is-bad");
      });
      body.querySelector("[data-room-fb]").innerHTML =
        '<div class="ttc-room-fb ' + (ok ? "ok" : "bad") + '">' + esc(fb) + '</div>' + nextBtn();
      return;
    }
    if (t.hasAttribute("data-room-checkdict")) {
      if (s.answered) return;
      s.answered = true;
      var input = body.querySelector("[data-room-dict]");
      var res = window.OTTER2_STORYPACK_CORE.checkDictation(input ? input.value : "", cue[2]);
      recordAnswer("dict", res.exact);
      /* tô màu theo marks của lõi (marks tính trên chuỗi đã bỏ dấu câu/khoảng trắng) */
      var mi = 0;
      var marksHtml = cue[2].split("").map(function (ch) {
        if (/[\s，。？！：；、,.?!:;]/.test(ch)) return esc(ch);
        var okCh = res.marks[mi] === 1; mi++;
        return '<span class="' + (okCh ? "ok" : "bad") + '">' + esc(ch) + '</span>';
      }).join("");
      body.querySelector("[data-room-fb]").innerHTML =
        '<div class="ttc-room-marks">' + marksHtml + '</div>' +
        '<div class="ttc-room-fb ' + (res.exact ? "ok" : "bad") + '">' +
        (res.exact ? "✓ Chính xác từng chữ!" : "✗ Đúng " + res.correct + "/" + res.total + " chữ. Đáp án: " + esc(cue[2])) + '</div>' + nextBtn();
      return;
    }
    if (t.hasAttribute("data-room-tile")) {
      if (s.answered) return;
      var ti = Number(t.getAttribute("data-room-tile"));
      t.disabled = true;
      s.built.push(q.tiles[ti]);
      var built = body.querySelector("[data-room-built]");
      if (built) built.textContent = s.built.join(" ");
      return;
    }
    if (t.hasAttribute("data-room-checktiles")) {
      if (s.answered) return;
      s.answered = true;
      var okT = s.built.length === q.answer.length && s.built.every(function (x, i) { return x === q.answer[i]; });
      recordAnswer("trans", okT);
      body.querySelector("[data-room-fb]").innerHTML =
        '<div class="ttc-room-fb ' + (okT ? "ok" : "bad") + '">' +
        (okT ? "✓ Ghép đúng cả câu!" : "✗ Chưa đúng — câu đúng: " + esc(q.answer.join(""))) + '</div>' + nextBtn();
      return;
    }
  }

  /* ---------------- dựng phòng quanh bài đọc ---------------- */
  function enhance() {
    var detail = byId("ttcReadingDetail");
    if (!detail) return;
    var rd = detail.querySelector(".ttc-reading-detail");
    if (!rd) { stopSpeak(); return; }
    if (rd.closest(".ttc-room-grid")) return;
    var ident = passageIdentity();
    if (!ident) return;
    var units = extractUnits(rd);
    if (!units.length) return;
    /* Mở bài MỚI thì về tab Bài đọc; engine dựng lại cùng một bài
       (bật/tắt pinyin…) thì giữ nguyên tab người học đang xem. */
    var newPassage = !ui.current || ui.current.id !== ident.id;
    /* Mọi lần engine dựng lại bài (mở bài mới, bật/tắt pinyin…) đều
       làm mới phiên bài tập: giữ phiên cũ sẽ trỏ vào cues đã bị thay. */
    ui.current = { id: ident.id, level: ident.level, index: ident.index, units: units, cues: null, vocab: null, pack: null };
    ui.screen = "home";
    ui.session = null;
    if (newPassage) ui.tab = "read";
    var grid = document.createElement("div");
    grid.className = "ttc-room-grid";
    detail.insertBefore(grid, rd);
    var bar = buildBar();
    grid.appendChild(bar);
    grid.appendChild(rd);
    var side = document.createElement("aside");
    side.className = "ttc-room-side";
    side.id = "ttcRoomSide";
    side.setAttribute("aria-label", "Từ vựng và bài tập của bài đọc");
    grid.appendChild(side);
    ui.passageEl = rd;
    ui.barEl = bar;
    renderSide();
    applyTab();
  }

  var pending = false;
  function scheduleEnhance() {
    if (pending) return;
    pending = true;
    setTimeout(function () { pending = false; try { enhance(); } catch (e) {} }, 80);
  }

  function init() {
    ensureStyle();
    var detail = byId("ttcReadingDetail");
    if (!detail) { setTimeout(init, 600); return; }
    var mo = new MutationObserver(scheduleEnhance);
    mo.observe(detail, { childList: true });
    document.addEventListener("click", onSideClick);
    scheduleEnhance();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.__ttcReadingRoom = {
    ui: ui,
    enhance: enhance,
    extractUnits: extractUnits,
    ensurePack: ensurePack
  };
})();
