/* ============================================================
   PHÒNG TỪ VỰNG (REDESIGN GĐ3) — otter2-vocabroom.js (2026-11-19)

   Biến panel kho từ (#otter2HskJourney, engine từ vựng inline của
   index2.html) thành một PHÒNG có tab như bản mẫu đã duyệt:
   - Tab "Thẻ từ": nguyên trạng engine (chọn cấp · lọc loại từ ·
     lưới thẻ · mở chi tiết để đánh dấu đã học). Tên Hán-Việt ĐỎ
     trên mỗi thẻ do module trang trí inline sẵn có của web gắn
     (span .ttc-han-viet trong .o2-hanzi) — module này KHÔNG gắn
     thêm bản sao (đã thử và đã gỡ: hai dòng Hán-Việt/thẻ là thừa).
   - Tab "Luyện tập": 6 mini-game của web thành 6 LOẠI BÀI trong
     phòng (Test từ vựng · Luyện câu · Luyện đọc · Gõ Hán tự · Nối
     từ · Phản xạ đoán nghĩa) — bấm là chạy đúng cơ chế thật mà
     menu 12 mục vẫn dùng (sang màn Luyện tập + bấm nút thật).
     ★ ĐÃ BỎ tab này 2026-11-28 (anh Huy: "nút luyện tập bên này bị
     thừa") — trùng với màn Luyện tập riêng; phòng chỉ còn thẻ từ.
     setTab/GAMES/launchGame giữ lại dạng API chết, không còn UI.

   LUẬT DỮ LIỆU CỨNG: otter2_hsk_vocab_progress_v1 BẤT KHẢ XÂM —
   module này KHÔNG đọc cũng KHÔNG ghi khóa đó; trạng thái đã học
   do engine gốc quản như cũ. Chỉ đổi trình bày + thêm điều hướng.
   Màu khu: Từ vựng xanh lá #15803d; Hán-Việt đỏ #dc2626 (luật nhà).
   ============================================================ */
(function () {
  "use strict";
  if (window.__TTC_VOCABROOM__) return;
  window.__TTC_VOCABROOM__ = true;

  var GREEN = "#F97316";

  function $(sel, root) { try { return (root || document).querySelector(sel); } catch (e) { return null; } }
  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function totalWords() {
    try {
      var d = window.OTTER2_HSK_ALL_DATA;
      if (d && d.counts) {
        var t = 0;
        for (var i = 1; i <= 9; i++) t += Number(d.counts[String(i)]) || 0;
        if (t > 0) return t;
      }
    } catch (e) {}
    return 11000;
  }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }

  /* ---------------- điều hướng: cơ chế thật (như menu/shell) ---------------- */
  function ensureScreen(name) {
    var p = document.querySelector('[data-otter2-screen-panel="' + name + '"]');
    if (p && !p.hidden) return;
    if (typeof window.otter2ShowScreen === "function") { window.otter2ShowScreen(name); return; }
    var b = document.querySelector('#otter2NavLinks [data-otter2-screen="' + name + '"]') ||
            document.querySelector('[data-otter2-screen="' + name + '"]');
    if (b) b.click();
  }
  function clickLater(sel, ms) {
    setTimeout(function () { var el = $(sel); if (el) el.click(); }, ms);
  }
  var GAMES = [
    { key: "test", icon: "📝", name: "Test từ vựng", sub: "Trắc nghiệm nghĩa của từ theo cấp", sel: '#ttcActionFrameButtons button[onclick*="openVocabularyTestChooser"]' },
    { key: "sentences", icon: "✍️", name: "Luyện câu", sub: "Gõ câu với từ vựng HSK", sel: '#ttcActionFrameButtons button[onclick*="openSentences"]' },
    { key: "reading", icon: "📖", name: "Luyện đọc", sub: "Bài đọc hiểu kèm từ vựng + bài tập", sel: "#ttcReadingLauncher" },
    { key: "typing", icon: "⌨️", name: "Gõ Hán tự", sub: "Nghe và gõ lại chữ Hán", sel: "#ttcListeningLauncher" },
    { key: "match", icon: "🧩", name: "Nối từ", sub: "Nối chữ Hán với nghĩa đúng", sel: "#ttcMatchLauncher" },
    { key: "reflex", icon: "🔊", name: "Phản xạ đoán nghĩa", sub: "Nghe nhanh, đoán nghĩa ngay", sel: "#ttcListenLauncher" }
  ];
  function launchGame(sel) {
    ensureScreen("reading");
    clickLater(sel, 380);
  }

  /* ---------------- style ---------------- */
  function ensureStyle() {
    if (byId("ttcVocabRoomStyle")) return;
    var css = [
      ".ttc-vr-bar{margin:2px 0 14px}",
      ".ttc-vr-head{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px}",
      ".ttc-vr-title{font-size:19px;font-weight:900;color:" + GREEN + "}",
      ".ttc-vr-sub{font-size:12.5px;color:#64748b;font-weight:600}",
      ".ttc-vr-tabs{display:flex;gap:4px;background:#f1f5f9;border-radius:999px;padding:4px;max-width:430px}",
      ".ttc-vr-tab{flex:1 1 0;border:none;background:transparent;border-radius:999px;padding:9px 6px;font:inherit;font-size:13.5px;font-weight:700;color:#16283F;cursor:pointer}",
      ".ttc-vr-tab.is-cur{background:" + GREEN + ";color:#ffffff}",
      ".ttc-vr-picker{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px;margin-top:12px}",
      ".ttc-vr-picker[hidden]{display:none}",
      ".ttc-vr-game{display:flex;align-items:center;gap:11px;padding:13px 12px;border:1px solid #e7e9ee;border-radius:14px;background:#ffffff;font:inherit;text-align:left;cursor:pointer}",
      ".ttc-vr-game:hover{border-color:#E3E8EF}",
      ".ttc-vr-gico{flex:0 0 auto;width:40px;height:40px;border-radius:11px;background:#F7F8FA;display:inline-flex;align-items:center;justify-content:center;font-size:19px}",
      ".ttc-vr-gname{font-size:14.5px;font-weight:800;color:#16283F;display:block}",
      ".ttc-vr-gsub{font-size:12px;color:#64748b;font-weight:600;display:block;margin-top:1px}"
    ];
    var st = document.createElement("style");
    st.id = "ttcVocabRoomStyle";
    st.textContent = css.join("\n");
    document.head.appendChild(st);
  }

  /* ---------------- thanh phòng + tab ---------------- */
  var tab = "cards";
  function buildBar() {
    var journey = byId("otter2HskJourney");
    if (!journey || byId("ttcVocabRoomBar")) return !!byId("ttcVocabRoomBar");
    var bar = document.createElement("div");
    bar.className = "ttc-vr-bar";
    bar.id = "ttcVocabRoomBar";
    /* 2026-11-28 (anh Huy): BỎ tab "🎮 Luyện tập" trong phòng — trùng với
       màn Luyện tập riêng ở thanh dưới, để là thừa. Phòng chỉ còn phần
       thẻ từ; 6 mini-game sống ở màn Luyện tập như cũ. */
    bar.innerHTML =
      '<div class="ttc-vr-head"><span class="ttc-vr-title">📚 Phòng từ vựng</span>' +
      '<span class="ttc-vr-sub">Kho từ HSK 1–9 · ' + fmt(totalWords()) + ' từ · thẻ từ có tên Hán-Việt đỏ</span></div>';
    var head = journey.firstElementChild;
    if (head && head.nextSibling) journey.insertBefore(bar, head.nextSibling);
    else journey.insertBefore(bar, journey.firstChild);
    return true;
  }
  function setTab(next) {
    tab = next;
    var journey = byId("otter2HskJourney");
    if (!journey) return;
    var practice = tab === "practice";
    ["otter2HskLevelRow", "otter2TypeRow", "otter2Hsk1Workspace"].forEach(function (id) {
      var el = byId(id);
      if (el) el.style.display = practice ? "none" : "";
    });
    var picker = journey.querySelector("[data-vr-picker]");
    if (picker) picker.hidden = !practice;
    journey.querySelectorAll("[data-vr-tab]").forEach(function (b) {
      b.classList.toggle("is-cur", b.getAttribute("data-vr-tab") === tab);
    });
  }

  function init() {
    ensureStyle();
    if (!buildBar()) { setTimeout(init, 600); return; }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.__ttcVocabRoom = { setTab: setTab, games: GAMES };
})();
