/* Otter2 Auto Learn hub — launchers + fullscreen portal for real engines */
(function () {
  "use strict";

  var FS_CLASS = "otter2-auto-fs-open";
  var activeFs = null; // { el, placeholder, kind }

  function ensureWords() {
    if (Array.isArray(window.words) && window.words.length) return;
    if (
      window.OTTER2_HSK_ALL_DATA &&
      Array.isArray(window.OTTER2_HSK_ALL_DATA.words) &&
      window.OTTER2_HSK_ALL_DATA.words.length
    ) {
      window.words = window.OTTER2_HSK_ALL_DATA.words.slice();
      return;
    }
    if (typeof window.otter2LoadWordsForHsk === "function") {
      var pack = window.otter2LoadWordsForHsk(1);
      if (pack.length) window.words = pack;
    } else if (
      window.OTTER2_HSK1_DATA &&
      Array.isArray(window.OTTER2_HSK1_DATA.words)
    ) {
      window.words = window.OTTER2_HSK1_DATA.words.slice();
    }
  }

  function ensureShells() {
    var host = document.getElementById("otter2AutoPanels");
    if (!host || host.dataset.shells === "1") return;
    var raw = window.__OTTER2_AUTO_SHELLS__;
    if (!raw) return;
    host.dataset.shells = "1";
    if (!document.getElementById("autoLearning") && raw.autoLearning) {
      host.insertAdjacentHTML("beforeend", raw.autoLearning);
    }
    if (!document.getElementById("ttcExampleAutoV2") && raw.exampleAuto) {
      host.insertAdjacentHTML("beforeend", raw.exampleAuto);
    }
  }

  function setActiveLaunch(which) {
    var vocabBtn = document.getElementById("otter2AutoVocabBtn");
    var exBtn = document.getElementById("otter2AutoExampleBtn");
    if (vocabBtn) vocabBtn.classList.toggle("active", which === "vocab");
    if (exBtn) exBtn.classList.toggle("active", which === "example");
  }

  function ensureExitBtn(panel) {
    if (!panel) return null;
    var btn = panel.querySelector(".otter2-auto-fs-exit");
    if (btn) return btn;
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "otter2-auto-fs-exit";
    btn.setAttribute("aria-label", "Thoát toàn màn hình");
    btn.textContent = "✕ Thoát";
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      exitFullscreen();
    });
    panel.insertAdjacentElement("afterbegin", btn);
    return btn;
  }

  function exitFullscreen() {
    if (!activeFs) return;
    var el = activeFs.el;
    var ph = activeFs.placeholder;
    el.classList.remove(FS_CLASS);
    if (ph && ph.parentNode) {
      ph.parentNode.insertBefore(el, ph);
      ph.remove();
    }
    document.body.classList.remove("otter2-auto-fs-lock");
    activeFs = null;
    // Stay on auto hub screen
    if (typeof window.otter2ShowScreen === "function") {
      window.otter2ShowScreen("auto");
    }
  }

  function enterFullscreen(el, kind) {
    if (!el) return;
    if (activeFs && activeFs.el === el) return;
    if (activeFs) exitFullscreen();

    var placeholder = document.createComment("otter2-auto-fs-ph-" + kind);
    if (el.parentNode) {
      el.parentNode.insertBefore(placeholder, el);
    }
    document.body.appendChild(el);
    el.classList.add(FS_CLASS);
    el.style.display = "";
    document.body.classList.add("otter2-auto-fs-lock");
    ensureExitBtn(el);
    activeFs = { el: el, placeholder: placeholder, kind: kind };
  }

  function showPanel(which) {
    ensureWords();
    ensureShells();
    var vocab = document.getElementById("autoLearning");
    var example = document.getElementById("ttcExampleAutoV2");
    var vocabBody = document.getElementById("autoLearningBody");
    var exampleBody = document.getElementById("ttcEA2Body");
    var vocabCollapse = document.getElementById("autoLearningCollapseToggle");

    if (which === "vocab") {
      if (example) {
        example.style.display = "none";
        if (example.classList.contains(FS_CLASS)) {
          /* will be replaced by enterFullscreen on vocab */
        }
      }
      setActiveLaunch("vocab");
      if (vocabBody) vocabBody.hidden = false;
      if (vocabCollapse) {
        vocabCollapse.textContent = "thu nhỏ lại −";
        vocabCollapse.setAttribute("aria-expanded", "true");
      }
      enterFullscreen(vocab, "vocab");
      try {
        if (typeof window.loadChineseVoice === "function") window.loadChineseVoice();
        if (typeof window.initAutoLearning === "function") window.initAutoLearning();
        if (typeof window.refreshAutoLearning === "function") window.refreshAutoLearning();
      } catch (e) {}
    } else if (which === "example") {
      setActiveLaunch("example");
      if (exampleBody) exampleBody.hidden = false;
      if (vocab && !vocab.classList.contains(FS_CLASS)) vocab.style.display = "none";
      enterFullscreen(example, "example");
    }
  }

  function bindLaunchers() {
    var vocabBtn = document.getElementById("otter2AutoVocabBtn");
    var exBtn = document.getElementById("otter2AutoExampleBtn");
    if (vocabBtn && !vocabBtn.dataset.otter2Bound) {
      vocabBtn.dataset.otter2Bound = "1";
      vocabBtn.addEventListener("click", function () {
        showPanel("vocab");
      });
    }
    if (exBtn && !exBtn.dataset.otter2Bound) {
      exBtn.dataset.otter2Bound = "1";
      exBtn.addEventListener("click", function () {
        showPanel("example");
      });
    }
  }

  function onShow() {
    ensureWords();
    ensureShells();
    bindLaunchers();
    if (!activeFs) {
      var vocab = document.getElementById("autoLearning");
      var example = document.getElementById("ttcExampleAutoV2");
      if (vocab) vocab.style.display = "none";
      if (example) example.style.display = "none";
    }
    var sel = document.getElementById("autoLearningHSK");
    if (sel && Number(sel.value) !== 1) {
      sel.value = "1";
      if (typeof window.changeAutoLearningHSK === "function") {
        try {
          window.changeAutoLearningHSK(1);
        } catch (e) {}
      }
    }
  }

  window.otter2AutoOnShow = onShow;
  window.otter2AutoExitFullscreen = exitFullscreen;

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && activeFs) {
      e.preventDefault();
      exitFullscreen();
    }
  });

  var _show = window.otter2ShowScreen;
  if (typeof _show === "function" && !_show.__otter2AutoWrapped) {
    window.otter2ShowScreen = function (name) {
      if (name !== "auto" && activeFs) {
        // Leaving auto hub while FS open: exit first
        exitFullscreen();
      }
      var r = _show.apply(this, arguments);
      if (name === "auto") onShow();
      return r;
    };
    window.otter2ShowScreen.__otter2AutoWrapped = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      ensureShells();
      bindLaunchers();
    });
  } else {
    ensureShells();
    bindLaunchers();
  }
})();
