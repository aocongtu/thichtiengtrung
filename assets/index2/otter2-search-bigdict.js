/* ============================================================
   OTTER2 SEARCH BIG DICT HOOK (additive 2026-11-17)
   Noi kho TU DIEN LON (otter2-big-dict.js + 5 shard, 125.438 dau muc)
   vao man hinh TRA TU VUNG chinh (#otter2DictRoot, module inline
   #otter2-dictionary-embedded). Module goc KHONG bi sua:
   - Chuoi phan giai: (1) kho HSK 1-9 cua trang -> giu nguyen 100%
     hanh vi/format goc; (2) neu HSK truot (trang thai "Khong thay
     ... trong kho HSK 1-9" o #otter2DictSuggest/#otter2DictCards)
     -> tra big dict: khop nguyen tu -> the day du (pinyin, nghia
     Viet, ten Han-Viet tung chu mau do, nut nghe); (3) van truot ->
     goi y cac tu bat dau bang chuoi nhap + the tung chu day du,
     khong bao gio chet ngo cut.
   - Big dict chi nap LUOI khi HSK truot (index 411KB -> shard theo
     chu dau ~2MB/shard, cache trong phien) nen trang khong nang them.
   - Chu phon the: dung window.__ttcSimplifyHanzi cua trang (OpenCC/
     fallback) de chuyen phon -> gian truoc khi tra big dict.
   - Diem noi: MutationObserver tren 3 vung ket qua cua module goc +
     mot div moi #otter2DictBig chen sau #otter2DictResults.
   ============================================================ */
(function () {
  "use strict";

  var TOTAL_LABEL = "125.438";
  var state = { index: 0, shards: {}, failed: false }; // 0 idle, 1 loading, 2 ok, 3 failed
  var gen = 0;
  var handledQuery = null;
  var wrap = null;
  var checkTimer = 0;

  function $(id) { return document.getElementById(id); }
  function esc(text) {
    return String(text == null ? "" : text).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }
  function isHan(ch) { return /[\u3400-\u9fff]/.test(ch); }
  function hanChars(text) {
    var out = [];
    String(text || "").split("").forEach(function (ch) { if (isHan(ch)) out.push(ch); });
    return out;
  }

  /* ---------- script loading (mirror of the reading hook) ---------- */
  function scriptBase() {
    try {
      var ss = document.getElementsByTagName("script");
      for (var i = ss.length - 1; i >= 0; i--) {
        var src = ss[i].src || "";
        var m = src.match(/^(.*\/)otter2-search-bigdict\.js(?:[?#].*)?$/);
        if (m) return m[1];
      }
    } catch (e) {}
    return "assets/index2/";
  }
  function loadJs(url) {
    return new Promise(function (resolve) {
      var done = false;
      function fin(ok) { if (!done) { done = true; resolve(ok); } }
      var sc = document.createElement("script");
      sc.src = url; sc.async = true;
      sc.onload = function () { fin(true); };
      sc.onerror = function () { fin(false); };
      setTimeout(function () { fin(false); }, 2500);
      (document.head || document.documentElement).appendChild(sc);
    });
  }
  function ensureIndex() {
    if (window.OTTER2_BIG_DICT_INDEX) { state.index = 2; return Promise.resolve(true); }
    if (state.index === 3) return Promise.resolve(false);
    state.index = 1;
    return loadJs(scriptBase() + "otter2-big-dict.js").then(function () {
      state.index = window.OTTER2_BIG_DICT_INDEX ? 2 : 3;
      if (state.index === 3) state.failed = true;
      return state.index === 2;
    });
  }
  function ensureShard(i) {
    if (window["OTTER2_BIG_DICT_SHARD_" + i]) { state.shards[i] = 2; return Promise.resolve(true); }
    if (state.shards[i] === 3) return Promise.resolve(false);
    state.shards[i] = 1;
    return loadJs(scriptBase() + "otter2-big-dict-s" + i + ".js").then(function () {
      state.shards[i] = window["OTTER2_BIG_DICT_SHARD_" + i] ? 2 : 3;
      return state.shards[i] === 2;
    });
  }
  function ensureDataFor(forms) {
    return ensureIndex().then(function (ok) {
      if (!ok) return false;
      var idx = window.OTTER2_BIG_DICT_INDEX;
      var need = {};
      forms.forEach(function (form) {
        hanChars(form).forEach(function (ch) {
          var si = idx[ch];
          if (si !== undefined && si !== null) need[si] = 1;
        });
      });
      var jobs = Object.keys(need).map(function (k) { return ensureShard(Number(k)); });
      return Promise.all(jobs).then(function () { return true; });
    });
  }

  /* ---------- data access ---------- */
  function shardOf(word) {
    var idx = window.OTTER2_BIG_DICT_INDEX;
    if (!idx || !word) return null;
    var si = idx[word.charAt(0)];
    if (si === undefined || si === null) return null;
    return window["OTTER2_BIG_DICT_SHARD_" + si] || null;
  }
  function wordEntry(word) {
    if (!word) return null;
    var sh = shardOf(word);
    if (sh && sh[word]) return { p: sh[word][0] || "", m: sh[word][1] || "", pyOnly: false };
    var py = window.OTTER2_BIG_DICT_PY && window.OTTER2_BIG_DICT_PY[word];
    if (py) return { p: py, m: "", pyOnly: true };
    return null;
  }
  function hvName(ch) {
    if (window.TTC_HANVIET && window.TTC_HANVIET[ch]) return window.TTC_HANVIET[ch];
    if (window.OTTER2_BIG_DICT_HV && window.OTTER2_BIG_DICT_HV[ch]) return window.OTTER2_BIG_DICT_HV[ch];
    return "";
  }
  function prefixList(prefix, limit) {
    var sh = shardOf(prefix);
    if (!sh || !prefix) return [];
    var keys = Object.keys(sh).filter(function (k) { return k !== prefix && k.indexOf(prefix) === 0; });
    keys.sort(function (a, b) {
      var d = Array.from(a).length - Array.from(b).length;
      return d !== 0 ? d : (a < b ? -1 : a > b ? 1 : 0);
    });
    return keys.slice(0, limit).map(function (k) { return { h: k, p: sh[k][0] || "", m: sh[k][1] || "" }; });
  }
  function splitGlosses(m) {
    return String(m || "")
      .split(/\s*[;；/／、]\s*|\s*,\s*/)
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  }

  /* ---------- speech (mirror of the original module's say) ---------- */
  var sayGen = 0;
  function say(text) {
    if (!("speechSynthesis" in window)) return;
    if (!text) return;
    var g = ++sayGen;
    try { speechSynthesis.cancel(); } catch (e) {}
    var u;
    try { u = new SpeechSynthesisUtterance(String(text)); } catch (e) { return; }
    u.lang = "zh-CN"; u.rate = 0.92; u.pitch = 1;
    try {
      var voices = speechSynthesis.getVoices() || [];
      var zh = voices.find(function (v) { return /zh(-|_|$)|chinese|中文/i.test(v.lang + " " + v.name); });
      if (zh) u.voice = zh;
    } catch (e) {}
    setTimeout(function () {
      if (g !== sayGen) return;
      try { speechSynthesis.speak(u); } catch (e) {}
    }, 40);
  }

  /* ---------- converter (page's own trad -> simp) ---------- */
  function simplifiedOf(q) {
    try {
      if (typeof window.__ttcSimplifyHanzi === "function") return window.__ttcSimplifyHanzi(q) || q;
    } catch (e) {}
    return q;
  }

  /* ---------- DOM scaffolding ---------- */
  function injectCss() {
    if ($("otter2-search-bigdict-css")) return;
    var st = document.createElement("style");
    st.id = "otter2-search-bigdict-css";
    st.textContent = [
      "#otter2DictBig{margin-top:16px}",
      ".o2x-title{font-size:17px;font-weight:800;margin:0 0 10px}",
      ".o2x-src{display:inline-block;background:#F97316;color:#fff;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;letter-spacing:.02em}",
      ".o2x-hvline{margin-top:6px;font-size:16px;color:#374151;line-height:1.6}",
      ".o2x-hvline .ttc-han-viet{font-size:15px;margin-left:2px}",
      ".o2x-hvch{margin-right:12px;white-space:nowrap}",
      ".o2x-sub{font-size:13.5px;color:#6b7280;margin:2px 0 8px}",
      ".o2x-secttl{font-weight:700;margin:14px 0 6px;font-size:15px}",
      ".o2x-chips{display:flex;flex-wrap:wrap;gap:8px;margin:4px 0 6px}",
      ".o2x-chip{border:1.5px solid #e5e7eb;background:#fff;border-radius:999px;padding:6px 13px;font-size:15px;cursor:pointer;line-height:1.3;font-family:inherit}",
      ".o2x-chip small{color:#16283F;margin-left:6px;font-size:13px}",
      ".o2x-chip:hover{border-color:#E3E8EF}",
      ".o2x-chars{display:grid;grid-template-columns:repeat(auto-fill,minmax(165px,1fr));gap:10px;margin-top:4px}",
      ".o2x-char{border:1px solid #e5e7eb;border-radius:14px;padding:12px 14px;background:#fff;position:relative}",
      ".o2x-char-hz{font-size:30px;font-weight:800;line-height:1.15}",
      ".o2x-char-hz .ttc-han-viet{font-size:15px;margin-left:6px}",
      ".o2x-char-py{color:#2563eb;font-weight:600;margin-top:2px;font-size:15px}",
      ".o2x-char-mn{color:#374151;font-size:14px;margin-top:4px;line-height:1.5}",
      ".o2x-say{position:absolute;top:8px;right:8px;border:none;background:#f3f4f6;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:15px;line-height:1}",
      ".o2x-say:hover{background:#e5e7eb}",
      ".o2x-note{color:#6b7280;font-size:14.5px;line-height:1.6}",
      "html[data-theme=\"night\"] .o2x-char{background:#171a21;border-color:#2b303c;color:#e5e7eb}",
      "html[data-theme=\"night\"] .o2x-char-mn{color:#cbd5e1}",
      "html[data-theme=\"night\"] .o2x-chip{background:#171a21;border-color:#2b303c;color:#e5e7eb}",
      "html[data-theme=\"night\"] .o2x-say{background:#2b303c}",
      "html[data-theme=\"night\"] .o2x-hvline{color:#cbd5e1}",
      "html[data-theme=\"night\"] .o2x-note,html[data-theme=\"night\"] .o2x-sub{color:#9ca3af}"
    ].join("\n");
    document.head.appendChild(st);
  }
  function ensureWrap() {
    if (wrap && wrap.isConnected) return wrap;
    var results = $("otter2DictResults");
    if (!results || !results.parentNode) return null;
    wrap = document.createElement("div");
    wrap.id = "otter2DictBig";
    wrap.hidden = true;
    results.parentNode.insertBefore(wrap, results.nextSibling);
    wrap.addEventListener("click", function (event) {
      var chip = event.target.closest("[data-q]");
      if (chip) {
        var input = $("otter2DictSearch");
        if (input) input.value = chip.getAttribute("data-q") || "";
        handledQuery = null;
        if (typeof window.otter2DictionarySearch === "function") window.otter2DictionarySearch();
        scheduleCheck(60);
        return;
      }
      var speakBtn = event.target.closest("[data-say]");
      if (speakBtn) { say(speakBtn.getAttribute("data-say") || ""); }
    });
    return wrap;
  }
  function updateNote() {
    var note = document.querySelector("#otter2DictRoot .otter2-dict-note");
    if (note && note.getAttribute("data-o2x-note") !== "1") {
      note.textContent = "Engine tra cứu Otter2 · Kho từ HSK 1–9 + Từ điển mở rộng " + TOTAL_LABEL + " mục";
      note.setAttribute("data-o2x-note", "1");
    }
  }
  function hideWrap() {
    if (wrap) { wrap.hidden = true; wrap.innerHTML = ""; }
  }
  function hideOriginalEmpties() {
    var sg = $("otter2DictSuggest");
    if (sg) {
      var empty = sg.querySelector(".otter2-dict-sg-empty");
      if (empty) empty.style.display = "none";
    }
    var cards = $("otter2DictCards");
    if (cards) {
      Array.prototype.forEach.call(cards.children, function (el) {
        if (!el.classList.contains("otter2-dict-card") && /Không thấy kết quả trong kho HSK/.test(el.textContent || "")) {
          el.style.display = "none";
        }
      });
    }
  }

  /* ---------- rendering ---------- */
  function hvLine(word) {
    var parts = hanChars(word).map(function (ch) {
      var name = hvName(ch);
      return '<span class="o2x-hvch">' + esc(ch) + (name ? ' <span class="ttc-han-viet">[' + esc(name) + "]</span>" : "") + "</span>";
    });
    return parts.length ? '<div class="o2x-hvline">' + parts.join("") + "</div>" : "";
  }
  function mainCardHtml(word, entry) {
    var glosses = splitGlosses(entry.m);
    var html =
      '<article class="ttc-dict o2x-card"><div class="ttc-dict-head"><div class="ttc-dict-head-main"><div class="han">' +
      esc(word) + "</div>";
    if (entry.p) html += '<div class="ttc-dict-py">' + esc(entry.p) + "</div>";
    html += hvLine(word);
    html +=
      '</div><button type="button" class="ttc-dict-speak" data-say="' + esc(word) + '" aria-label="Phát âm">🔊</button></div>';
    html += '<section class="ttc-sense"><div class="ttc-sense-top"><span class="ttc-sense-no">1</span><span class="o2x-src">Từ điển mở rộng</span></div>';
    if (glosses.length) {
      html += '<ol class="ttc-mean">' + glosses.map(function (g) { return "<li>" + esc(g) + "</li>"; }).join("") + "</ol>";
    } else {
      html += '<p class="o2x-note">Từ điển mở rộng chưa có nghĩa tiếng Việt cho từ này — xem phần từng chữ bên dưới nhé.</p>';
    }
    html += "</section></article>";
    return html;
  }
  function charCardsHtml(chars) {
    var cards = [];
    var seen = {};
    chars.forEach(function (ch) {
      if (seen[ch]) return;
      seen[ch] = 1;
      var e = wordEntry(ch);
      var name = hvName(ch);
      if (!e && !name) return;
      cards.push(
        '<div class="o2x-char"><div class="o2x-char-hz">' + esc(ch) +
        (name ? '<span class="ttc-han-viet">[' + esc(name) + "]</span>" : "") +
        '</div><button type="button" class="o2x-say" data-say="' + esc(ch) + '" aria-label="Phát âm">🔊</button>' +
        (e && e.p ? '<div class="o2x-char-py">' + esc(e.p) + "</div>" : "") +
        (e && e.m ? '<div class="o2x-char-mn">' + esc(e.m) + "</div>" : "") +
        "</div>"
      );
    });
    return cards.length ? '<div class="o2x-chars">' + cards.join("") + "</div>" : "";
  }
  function chipsHtml(list) {
    return (
      '<div class="o2x-chips">' +
      list.map(function (w) {
        return '<button type="button" class="o2x-chip" data-q="' + esc(w.h) + '">' + esc(w.h) +
          (w.p ? "<small>" + esc(w.p) + "</small>" : "") + "</button>";
      }).join("") +
      "</div>"
    );
  }

  function renderExtended(rawQuery) {
    var myGen = ++gen;
    var q = String(rawQuery || "").replace(/\s+/g, "");
    if (!q) { hideWrap(); return; }
    var simp = simplifiedOf(q);
    var forms = simp && simp !== q ? [q, simp] : [q];
    var w = ensureWrap();
    if (!w) return;
    w.hidden = false;
    w.innerHTML = '<p class="o2x-note">⏳ Đang tra thêm trong Từ điển mở rộng (' + TOTAL_LABEL + " mục)…</p>";
    ensureDataFor(forms).then(function (ok) {
      if (myGen !== gen) return;
      var input = $("otter2DictSearch");
      var nowQ = input ? input.value.trim().replace(/\s+/g, " ") : "";
      if (nowQ.replace(/\s+/g, "") !== q) return; // query changed meanwhile
      if (!ok || !window.OTTER2_BIG_DICT_INDEX) {
        w.innerHTML = '<p class="o2x-note">Không tải được Từ điển mở rộng lúc này (có thể do mạng chậm). Bạn thử tra lại sau giây lát nhé.</p>';
        w.hidden = false;
        return;
      }
      var html = '<h3 class="o2x-title">🔎 Từ điển mở rộng</h3>';
      if (forms.length > 1) {
        html += '<p class="o2x-sub">Đã chuyển phồn thể → giản thể để tra: ' + esc(q) + " → " + esc(simp) + "</p>";
      }
      var whole = null, wholeForm = "";
      for (var i = 0; i < forms.length; i++) {
        var e = wordEntry(forms[i]);
        if (e) { whole = e; wholeForm = forms[i]; break; }
      }
      var hasContent = false;
      if (whole) {
        html += mainCardHtml(wholeForm, whole);
        hasContent = true;
        if (whole.pyOnly || !whole.m) {
          var cc = charCardsHtml(hanChars(wholeForm));
          if (cc) { html += '<div class="o2x-secttl">Từng chữ:</div>' + cc; }
        }
      } else {
        // prefix suggestions: full query first, then first char
        var sugg = prefixList(forms[forms.length - 1], 10);
        var suggPrefix = forms[forms.length - 1];
        if (!sugg.length && forms[forms.length - 1].length > 1) {
          suggPrefix = forms[forms.length - 1].charAt(0);
          sugg = prefixList(suggPrefix, 10);
        }
        if (sugg.length) {
          html += '<div class="o2x-secttl">Gợi ý — từ bắt đầu bằng 「' + esc(suggPrefix) + "」:</div>" + chipsHtml(sugg);
          hasContent = true;
        }
        var chars = charCardsHtml(hanChars(forms[forms.length - 1]));
        if (chars) {
          html += '<div class="o2x-secttl">Từng chữ trong 「' + esc(forms[forms.length - 1]) + "」:</div>" + chars;
          hasContent = true;
        }
        if (!hasContent) {
          html += '<p class="o2x-note">Chưa tìm thấy 「' + esc(q) + "」 trong kho HSK 1–9 lẫn Từ điển mở rộng. Bạn thử kiểm tra lại chữ Hán, hoặc tra từng chữ / từng phần ngắn hơn nhé.</p>";
        }
      }
      w.innerHTML = html;
      w.hidden = false;
      hideOriginalEmpties();
    });
  }

  /* ---------- detection of the original module's states ---------- */
  function currentKind() {
    var on = document.querySelector("#otter2DictKinds .otter2-dict-kinds-row button.is-on");
    return on ? (on.getAttribute("data-kind") || "vocab") : "vocab";
  }
  function originalHasResults() {
    var cards = $("otter2DictCards");
    return !!(cards && cards.querySelector(".otter2-dict-card"));
  }
  function originalIsNotFound() {
    var cards = $("otter2DictCards");
    if (cards && /Không thấy kết quả trong kho HSK/.test(cards.textContent || "")) return true;
    var sg = $("otter2DictSuggest");
    return !!(sg && sg.querySelector(".otter2-dict-sg-empty"));
  }
  function check() {
    var input = $("otter2DictSearch");
    if (!input) return;
    var query = input.value.trim().replace(/\s+/g, " ");
    if (!query) { handledQuery = null; hideWrap(); return; }
    var kind = currentKind();
    if (kind !== "vocab" && kind !== "hanzi") { handledQuery = null; hideWrap(); return; }
    if (originalHasResults()) { handledQuery = null; hideWrap(); return; }
    if (originalIsNotFound()) {
      if (handledQuery === query) return;
      handledQuery = query;
      renderExtended(query);
    }
  }
  function scheduleCheck(ms) {
    clearTimeout(checkTimer);
    checkTimer = setTimeout(check, ms == null ? 200 : ms);
  }
  function boot() {
    injectCss();
    updateNote();
    ensureWrap();
    ["otter2DictCards", "otter2DictSuggest", "otter2DictDetail"].forEach(function (id) {
      var el = $(id);
      if (!el) return;
      try {
        new MutationObserver(function () { scheduleCheck(200); }).observe(el, {
          childList: true, subtree: true, characterData: true
        });
      } catch (e) {}
    });
    var input = $("otter2DictSearch");
    if (input) input.addEventListener("input", function () { scheduleCheck(350); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  /* Debug/test handle (harmless in production). */
  window.__otter2SearchBig = { wordEntry: wordEntry, prefixList: prefixList, ensureDataFor: ensureDataFor, version: "2026-11-17" };
})();
