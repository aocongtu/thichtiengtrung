/**
 * Otter2 HSK vocabulary bank (Kho từ vựng HSK) — index2 only.
 * Data: otter2-hsk-all-data.js → OTTER2_HSK_ALL_DATA / OTTER2_HSK_PACKS (HSK 1–9).
 * Engine chuẩn từ HSK1: mở rộng từng cấp độc lập (danh sách, đếm, tiến trình, chi tiết).
 * Không sửa index.html.
 */
(function () {
  "use strict";

  var FILTER_TYPES = ["Động từ", "Danh từ", "Tính từ", "Đại từ", "Số từ"];
  var PROGRESS_KEY = "otter2_hsk_vocab_progress_v1";
  var AVAILABLE = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var state = {
    words: [],
    currentList: [],
    currentHSK: 1,
    activeType: null,
    pinyinOn: true,
    detailIndex: 0,
    learned: {},
    sayGen: 0
  };

  window.otter2Hsk1 = state;
  window.otter2HskVocab = state;

  function $(id) {
    return document.getElementById(id);
  }

  function loadProgressMap() {
    try {
      var raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return {};
      var o = JSON.parse(raw);
      return o && typeof o === "object" ? o : {};
    } catch (e) {
      return {};
    }
  }

  function saveProgressMap(map) {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
    } catch (e) {}
  }

  function getLevelProgress(level) {
    var map = loadProgressMap();
    var slot = map[String(level)];
    if (!slot || typeof slot !== "object") {
      return { detailIndex: 0, learned: [] };
    }
    return {
      detailIndex: Number(slot.detailIndex) || 0,
      learned: Array.isArray(slot.learned) ? slot.learned.slice() : []
    };
  }

  function setLevelProgress(level, patch) {
    var map = loadProgressMap();
    var cur = getLevelProgress(level);
    var next = {
      detailIndex:
        patch.detailIndex != null ? Number(patch.detailIndex) || 0 : cur.detailIndex,
      learned: Array.isArray(patch.learned) ? patch.learned.slice() : cur.learned,
      updatedAt: Date.now()
    };
    map[String(level)] = next;
    saveProgressMap(map);
    state.learned = {};
    next.learned.forEach(function (h) {
      state.learned[h] = true;
    });
  }

  function applyLevelProgress(level) {
    var p = getLevelProgress(level);
    state.detailIndex = p.detailIndex;
    state.learned = {};
    p.learned.forEach(function (h) {
      state.learned[h] = true;
    });
  }

  function markLearned(hanzi) {
    if (!hanzi) return;
    var list = Object.keys(state.learned).filter(function (k) {
      return state.learned[k];
    });
    if (list.indexOf(hanzi) === -1) list.push(hanzi);
    setLevelProgress(state.currentHSK, {
      detailIndex: state.detailIndex,
      learned: list
    });
  }

  /** Public loader used by practice / auto / dictionary. */
  function getPack(level) {
    var n = Number(level) || 1;
    if (window.OTTER2_HSK_PACKS && window.OTTER2_HSK_PACKS[n]) {
      return window.OTTER2_HSK_PACKS[n];
    }
    if (
      n === 1 &&
      window.OTTER2_HSK1_DATA &&
      Array.isArray(window.OTTER2_HSK1_DATA.words)
    ) {
      return window.OTTER2_HSK1_DATA;
    }
    if (window.OTTER2_HSK_ALL_DATA && Array.isArray(window.OTTER2_HSK_ALL_DATA.words)) {
      var list = window.OTTER2_HSK_ALL_DATA.words.filter(function (w) {
        return Number(w.hsk) === n;
      });
      return { hsk: n, count: list.length, words: list };
    }
    return null;
  }

  function getWordsForLevel(level) {
    var pack = getPack(level);
    if (!pack || !Array.isArray(pack.words)) return [];
    return pack.words.filter(function (w) {
      return Number(w.hsk) === Number(level);
    });
  }

  function getWords() {
    return getWordsForLevel(state.currentHSK || 1);
  }

  window.otter2GetHskPack = getPack;
  window.otter2GetWordsForHsk = getWordsForLevel;

  function normalizeTypeToken(s) {
    return String(s || "")
      .toLocaleLowerCase("vi")
      .replace(/\s+/g, " ")
      .trim();
  }

  function wordMatchesType(word, type) {
    var raw = String(word.t || "").trim();
    if (!raw) return false;
    var wanted = normalizeTypeToken(type);
    return raw
      .split(/[\/,;|]+/)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean)
      .some(function (item) {
        var n = normalizeTypeToken(item);
        return n === wanted || n.indexOf(wanted + " ") === 0;
      });
  }

  function requireLogin() {
    if (window.currentUser || (window.otter2Account && window.otter2Account.user)) {
      return true;
    }
    if (typeof window.otter2AccountOpenLogin === "function") {
      window.otter2AccountOpenLogin();
    } else {
      alert("Vui lòng đăng nhập tài khoản trước khi học kho từ vựng HSK.");
    }
    return false;
  }

  function gateLevelAccess(level) {
    /* Kho từ vựng (Migrate 01): đã đăng nhập là mở được cả HSK 1–9 để học/đối chiếu dữ liệu.
       Premium vẫn do Luyện tập / Auto / Path tự kiểm qua hasPremiumAccess / checkPremiumAccess. */
    var n = Number(level);
    if (AVAILABLE.indexOf(n) === -1) return Promise.resolve(false);
    return Promise.resolve(true);
  }

  function say(text) {
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt không hỗ trợ đọc tiếng Trung.");
      return;
    }
    if (!text) return;
    var gen = ++state.sayGen;
    try {
      speechSynthesis.cancel();
    } catch (e) {}
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = "zh-CN";
    u.rate = 0.92;
    u.pitch = 1;
    var voices = speechSynthesis.getVoices() || [];
    var zh =
      voices.find(function (v) {
        var L = String(v.lang || "").toLowerCase().replace(/_/g, "-");
        var N = String(v.name || "").toLowerCase();
        if (/zh-tw|zh-hk|cantonese|taiwan|hong kong/.test(L + " " + N)) return false;
        return L.indexOf("zh-cn") === 0 || /mandarin|simplified|huihui|yaoyao|xiaoxiao/.test(N);
      }) ||
      voices.find(function (v) {
        return /zh(-|_|$)|chinese|中文/i.test(v.lang + " " + v.name);
      });
    if (zh) u.voice = zh;
    setTimeout(function () {
      if (gen !== state.sayGen) return;
      try {
        speechSynthesis.speak(u);
      } catch (e) {}
    }, 40);
  }

  function setLevelButtons(activeLevel) {
    document.querySelectorAll("#otter2HskLevelRow [data-otter2-hsk]").forEach(function (btn) {
      var lv = Number(btn.getAttribute("data-otter2-hsk"));
      btn.classList.toggle("is-on", lv === Number(activeLevel));
      btn.disabled = false;
      btn.removeAttribute("title");
      var pack = getPack(lv);
      var n = pack && Array.isArray(pack.words) ? pack.words.length : 0;
      btn.title = n ? "HSK " + lv + " · " + n + " từ" : "HSK " + lv;
    });
  }

  function setTypeButtons(activeType) {
    document.querySelectorAll("#otter2TypeRow [data-otter2-type]").forEach(function (btn) {
      var t = btn.getAttribute("data-otter2-type");
      btn.classList.toggle("is-on", !!activeType && t === activeType);
    });
    var clearBtn = $("otter2Hsk1ClearType");
    if (clearBtn) {
      clearBtn.hidden = !activeType;
      clearBtn.textContent = "Tất cả HSK " + state.currentHSK;
    }
  }

  function updateTitle() {
    var title = $("otter2Hsk1Title");
    var count = $("otter2Hsk1Count");
    var n = state.currentList.length;
    var total = state.words.length;
    var learnedN = Object.keys(state.learned).filter(function (k) {
      return state.learned[k];
    }).length;
    var label = "HSK " + state.currentHSK;
    if (state.activeType) label += " — " + state.activeType;
    label += " — " + n + " / " + total + " từ";
    if (title) title.textContent = label;
    if (count) count.textContent = n + " từ · đã học " + learnedN;
    var bar = $("otter2Hsk1Bar");
    if (bar) {
      var denom = total || 1;
      bar.style.width = Math.min(100, (learnedN / denom) * 100) + "%";
    }
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function render(list) {
    state.currentList = list || [];
    var box = $("otter2Hsk1Cards");
    if (!box) return;
    var pinyinClass = state.pinyinOn ? "" : " is-pinyin-off";
    box.innerHTML = state.currentList
      .map(function (w, i) {
        var learned = !!(w.h && state.learned[w.h]);
        return (
          '<article class="otter2-hsk1-card' +
          pinyinClass +
          (learned ? " is-learned" : "") +
          '" data-otter2-idx="' +
          i +
          '">' +
          '<span class="o2-hsk">HSK ' +
          escapeHtml(w.hsk) +
          " · " +
          (i + 1) +
          "</span>" +
          '<span class="o2-type">' +
          escapeHtml(w.t || "") +
          "</span>" +
          '<div class="o2-hanzi">' +
          escapeHtml(w.h || "") +
          "</div>" +
          '<div class="o2-pinyin">' +
          escapeHtml(w.p || "") +
          "</div>" +
          '<div class="o2-meaning">Nghĩa: ' +
          escapeHtml(w.m || "") +
          "</div>" +
          '<button type="button" class="o2-speak" data-otter2-say="' +
          escapeHtml(w.h || "") +
          '" aria-label="Phát âm">🔊</button>' +
          '<span class="o2-learned">' +
          (learned ? "✓ Đã học" : "✓ Học") +
          "</span>" +
          "</article>"
        );
      })
      .join("");
    updateTitle();
  }

  function showAllForLevel() {
    state.activeType = null;
    setTypeButtons(null);
    render(state.words.slice());
  }

  function showType(type) {
    if (state.activeType === type) {
      showAllForLevel();
      return;
    }
    state.activeType = type;
    setTypeButtons(type);
    var filtered = state.words.filter(function (w) {
      return wordMatchesType(w, type);
    });
    render(filtered);
  }

  function openHskLevel(level) {
    var n = Number(level);
    if (AVAILABLE.indexOf(n) === -1) {
      alert("HSK " + n + " không hợp lệ.");
      return Promise.resolve(false);
    }
    if (!requireLogin()) return Promise.resolve(false);

    return gateLevelAccess(n).then(function (ok) {
      if (!ok) {
        alert(
          "HSK " +
            n +
            " cần Premium / Free Trial hợp lệ.\n\nVui lòng đăng ký Premium để mở cấp độ này."
        );
        return false;
      }
      var list = getWordsForLevel(n);
      if (!list.length) {
        alert("Không tải được dữ liệu HSK " + n + ".");
        return false;
      }
      state.currentHSK = n;
      state.words = list;
      applyLevelProgress(n);
      setLevelButtons(n);
      var workspace = $("otter2Hsk1Workspace");
      if (workspace) workspace.hidden = false;
      showAllForLevel();
      /* Expose current level words for sibling engines that read window.words */
      window.words = list.slice();
      window.currentHSK = n;
      console.info("Otter2 Kho từ HSK " + n + ":", list.length, "từ");
      return true;
    });
  }

  function openHsk1() {
    return openHskLevel(1);
  }

  window.otter2OpenHskLevel = openHskLevel;

  function closeDetail() {
    var d = $("otter2Hsk1Detail");
    if (d) d.hidden = true;
    setLevelProgress(state.currentHSK, {
      detailIndex: state.detailIndex,
      learned: Object.keys(state.learned).filter(function (k) {
        return state.learned[k];
      })
    });
  }

  function openDetail(index) {
    var list = state.currentList;
    if (!list.length) return;
    var i = Math.max(0, Math.min(list.length - 1, index));
    state.detailIndex = i;
    var w = list[i];
    var box = $("otter2Hsk1Detail");
    if (!box) return;
    $("otter2Hsk1DetailHanzi").textContent = w.h || "";
    $("otter2Hsk1DetailPinyin").textContent = w.p || "";
    $("otter2Hsk1DetailType").textContent = w.t || "";
    $("otter2Hsk1DetailMeaning").textContent = w.m || "";
    $("otter2Hsk1DetailExplain").textContent = w.explanation || "";
    var ex = $("otter2Hsk1DetailExample");
    if (ex) {
      ex.innerHTML =
        "<div><b>" +
        escapeHtml(w.example || "") +
        "</b></div>" +
        "<div>" +
        escapeHtml(w.examplePinyin || "") +
        "</div>" +
        "<div>" +
        escapeHtml(w.exampleMeaning || "") +
        "</div>";
    }
    $("otter2Hsk1DetailPos").textContent =
      "HSK " + state.currentHSK + " · " + (i + 1) + " / " + list.length;
    box.hidden = false;
    if (w.h) markLearned(w.h);
    render(state.currentList.slice());
  }

  function ensureDetailDom() {
    if ($("otter2Hsk1Detail")) return;
    var el = document.createElement("div");
    el.id = "otter2Hsk1Detail";
    el.className = "otter2-hsk1-detail";
    el.hidden = true;
    el.innerHTML =
      '<div class="otter2-hsk1-detail-box" role="dialog" aria-modal="true">' +
      '<h3 id="otter2Hsk1DetailHanzi"></h3>' +
      '<p class="otter2-hsk1-detail-meta"><span id="otter2Hsk1DetailPinyin"></span> · <span id="otter2Hsk1DetailType"></span></p>' +
      '<p id="otter2Hsk1DetailMeaning"></p>' +
      '<p id="otter2Hsk1DetailExplain"></p>' +
      '<div id="otter2Hsk1DetailExample"></div>' +
      '<p class="otter2-hsk1-detail-meta" id="otter2Hsk1DetailPos"></p>' +
      '<div class="otter2-hsk1-detail-actions">' +
      '<button type="button" class="otter2-btn" id="otter2Hsk1DetailPrev">← Trước</button>' +
      '<button type="button" class="otter2-btn otter2-btn-primary" id="otter2Hsk1DetailSay">🔊 Phát âm</button>' +
      '<button type="button" class="otter2-btn" id="otter2Hsk1DetailNext">Sau →</button>' +
      '<button type="button" class="otter2-btn" id="otter2Hsk1DetailClose">Đóng</button>' +
      "</div></div>";
    document.body.appendChild(el);
    el.addEventListener("click", function (ev) {
      if (ev.target === el) closeDetail();
    });
    $("otter2Hsk1DetailClose").addEventListener("click", closeDetail);
    $("otter2Hsk1DetailSay").addEventListener("click", function () {
      var w = state.currentList[state.detailIndex];
      if (w) say(w.h);
    });
    $("otter2Hsk1DetailPrev").addEventListener("click", function () {
      openDetail(state.detailIndex - 1);
    });
    $("otter2Hsk1DetailNext").addEventListener("click", function () {
      openDetail(state.detailIndex + 1);
    });
  }

  function toggleJourney(forceOpen) {
    var journey = $("otter2HskJourney");
    var btn = $("otter2OpenVocabBankBtn");
    if (!journey || !btn) return;
    var open = typeof forceOpen === "boolean" ? forceOpen : journey.hidden;
    journey.hidden = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.classList.toggle("is-on", open);
    if (open) {
      journey.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function bind() {
    var openBtn = $("otter2OpenVocabBankBtn");
    if (openBtn && !openBtn.dataset.otter2HskBound) {
      openBtn.dataset.otter2HskBound = "1";
      openBtn.addEventListener("click", function () {
        toggleJourney();
      });
    }

    document.querySelectorAll("#otter2HskLevelRow [data-otter2-hsk]").forEach(function (btn) {
      if (btn.dataset.otter2HskBound) return;
      btn.dataset.otter2HskBound = "1";
      btn.addEventListener("click", function () {
        var lv = Number(btn.getAttribute("data-otter2-hsk"));
        if (
          btn.classList.contains("is-on") &&
          $("otter2Hsk1Workspace") &&
          !$("otter2Hsk1Workspace").hidden &&
          state.currentHSK === lv
        ) {
          $("otter2Hsk1Workspace").hidden = true;
          btn.classList.remove("is-on");
          return;
        }
        openHskLevel(lv);
      });
    });

    document.querySelectorAll("#otter2TypeRow [data-otter2-type]").forEach(function (btn) {
      if (btn.dataset.otter2TypeBound) return;
      btn.dataset.otter2TypeBound = "1";
      btn.addEventListener("click", function () {
        if (!requireLogin()) return;
        if ($("otter2Hsk1Workspace") && $("otter2Hsk1Workspace").hidden) {
          openHskLevel(state.currentHSK || 1).then(function (ok) {
            if (ok) showType(btn.getAttribute("data-otter2-type"));
          });
          return;
        }
        showType(btn.getAttribute("data-otter2-type"));
      });
    });

    var clearType = $("otter2Hsk1ClearType");
    if (clearType && !clearType.dataset.otter2Bound) {
      clearType.dataset.otter2Bound = "1";
      clearType.addEventListener("click", function () {
        showAllForLevel();
      });
    }

    var pinToggle = $("otter2Hsk1PinyinToggle");
    if (pinToggle && !pinToggle.dataset.otter2Bound) {
      pinToggle.dataset.otter2Bound = "1";
      pinToggle.addEventListener("click", function () {
        state.pinyinOn = !state.pinyinOn;
        pinToggle.setAttribute("aria-pressed", state.pinyinOn ? "true" : "false");
        pinToggle.textContent = state.pinyinOn ? "pinyin：mở" : "pinyin：đóng";
        render(state.currentList.slice());
      });
    }

    var cards = $("otter2Hsk1Cards");
    if (cards && !cards.dataset.otter2Bound) {
      cards.dataset.otter2Bound = "1";
      cards.addEventListener("click", function (ev) {
        var speak = ev.target.closest("[data-otter2-say]");
        if (speak) {
          ev.stopPropagation();
          say(speak.getAttribute("data-otter2-say"));
          return;
        }
        var card = ev.target.closest("[data-otter2-idx]");
        if (!card) return;
        openDetail(Number(card.getAttribute("data-otter2-idx")));
      });
    }
  }

  function boot() {
    var total =
      (window.OTTER2_HSK_ALL_DATA && window.OTTER2_HSK_ALL_DATA.total) ||
      (window.OTTER2_HSK_ALL_DATA &&
        Array.isArray(window.OTTER2_HSK_ALL_DATA.words) &&
        window.OTTER2_HSK_ALL_DATA.words.length) ||
      0;
    var counts = {};
    AVAILABLE.forEach(function (lv) {
      counts[lv] = getWordsForLevel(lv).length;
    });
    console.info("Otter2 Kho từ HSK ready — total:", total, "counts:", counts);
    ensureDetailDom();
    bind();
    setLevelButtons(0);
    var pinToggle = $("otter2Hsk1PinyinToggle");
    if (pinToggle) {
      pinToggle.setAttribute("aria-pressed", "true");
      pinToggle.textContent = "pinyin：mở";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
