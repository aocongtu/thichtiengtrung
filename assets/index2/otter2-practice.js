/* Otter2 Practice hub — wires 6 real practice launchers from index1 */
(function () {
  "use strict";

  /* Phạm vi HSK trên index2: Migrate 01 — đủ HSK 1–9 từ index.html const words. */
  window.OTTER2_HSK_SCOPE = Object.assign(
    {
      selectableLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      availableLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      unsupportedMessage: function (level) {
        return (
          "HSK " +
          level +
          " chưa có dữ liệu trên index2.\n\n" +
          "Vui lòng tải lại trang hoặc kiểm tra otter2-hsk-all-data.js."
        );
      },
    },
    window.OTTER2_HSK_SCOPE || {}
  );

  window.otter2IsHskAvailable = function (level) {
    var n = Number(level);
    var avail =
      (window.OTTER2_HSK_SCOPE && window.OTTER2_HSK_SCOPE.availableLevels) ||
      [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return avail.indexOf(n) !== -1;
  };

  window.otter2AssertHskAvailable = function (level) {
    if (window.otter2IsHskAvailable(level)) return true;
    var msg =
      window.OTTER2_HSK_SCOPE &&
      typeof window.OTTER2_HSK_SCOPE.unsupportedMessage === "function"
        ? window.OTTER2_HSK_SCOPE.unsupportedMessage(level)
        : "HSK " + level + " chưa được hỗ trợ.";
    alert(msg);
    return false;
  };

  /* Tải đúng pack theo cấp — OTTER2_HSK_PACKS / OTTER2_HSK_ALL_DATA / HSK1 alias. */
  window.otter2LoadWordsForHsk = function (level) {
    var n = Number(level) || 1;
    if (!window.otter2IsHskAvailable(n)) return [];
    if (typeof window.otter2GetWordsForHsk === "function") {
      var via = window.otter2GetWordsForHsk(n);
      if (via && via.length) return via.slice();
    }
    if (window.OTTER2_HSK_PACKS && window.OTTER2_HSK_PACKS[n] && Array.isArray(window.OTTER2_HSK_PACKS[n].words)) {
      return window.OTTER2_HSK_PACKS[n].words.slice();
    }
    if (window.OTTER2_HSK_ALL_DATA && Array.isArray(window.OTTER2_HSK_ALL_DATA.words)) {
      return window.OTTER2_HSK_ALL_DATA.words.filter(function (w) {
        return Number(w.hsk) === n;
      });
    }
    if (
      n === 1 &&
      window.OTTER2_HSK1_DATA &&
      Array.isArray(window.OTTER2_HSK1_DATA.words)
    ) {
      return window.OTTER2_HSK1_DATA.words.slice();
    }
    return [];
  };

  function ensureWords() {
    /* Không ghi đè toàn bộ kho bằng HSK1 — giữ ALL_DATA nếu đã có.
       Module theo cấp phải gọi otter2LoadWordsForHsk(level). */
    if (
      window.OTTER2_HSK_ALL_DATA &&
      Array.isArray(window.OTTER2_HSK_ALL_DATA.words) &&
      window.OTTER2_HSK_ALL_DATA.words.length
    ) {
      if (!Array.isArray(window.words) || !window.words.length) {
        window.words = window.OTTER2_HSK_ALL_DATA.words.slice();
      } else {
        var onlyOneLevel = true;
        var seen = null;
        for (var i = 0; i < window.words.length; i++) {
          var hv = Number(window.words[i] && window.words[i].hsk);
          if (seen === null) seen = hv;
          else if (hv !== seen) {
            onlyOneLevel = false;
            break;
          }
        }
        if (onlyOneLevel && window.words.length < window.OTTER2_HSK_ALL_DATA.words.length) {
          window.words = window.OTTER2_HSK_ALL_DATA.words.slice();
        }
      }
    } else if (!Array.isArray(window.words) || !window.words.length) {
      var pack = window.otter2LoadWordsForHsk(1);
      window.words = pack.length ? pack : [];
    }
    if (typeof window.currentHSK !== "number" || !window.currentHSK) {
      window.currentHSK = 1;
    }
  }

  function ensureShells() {
    ensureWords();
    var host = document.getElementById("otter2PracticePanels");
    if (!host || host.dataset.shells === "1") return;
    var raw = null;
    try {
      // shells embedded by boot via fetch sync alternative: inline from global
      raw = window.__OTTER2_PRACTICE_SHELLS__;
    } catch (e) {}
    if (!raw) return;
    host.dataset.shells = "1";
    if (!document.getElementById("vocabularySection")) {
      host.insertAdjacentHTML(
        "beforeend",
        '<section id="vocabularySection" class="panel hidden" aria-hidden="true"></section>'
      );
    }
    if (!document.getElementById("testSection") && raw.testSection) {
      host.insertAdjacentHTML("beforeend", raw.testSection);
    }
    if (!document.getElementById("sentenceSection") && raw.sentenceSection) {
      host.insertAdjacentHTML("beforeend", raw.sentenceSection);
    }
    if (!document.getElementById("ttcReadingSection") && raw.readingSection) {
      host.insertAdjacentHTML("beforeend", raw.readingSection);
    }
    if (!document.getElementById("ttcListeningSection") && raw.listeningSection) {
      host.insertAdjacentHTML("beforeend", raw.listeningSection);
    }
  }

  function syncUser() {
    if (!window.currentUser && window.otter2Account && window.otter2Account.user) {
      window.currentUser = window.otter2Account.user;
    }
  }

  if (typeof window.hasPremiumAccess !== "function") {
    window.hasPremiumAccess = async function () {
      if (typeof window.checkPremiumAccess === "function") {
        return !!(await window.checkPremiumAccess(3));
      }
      return false;
    };
  }

  function bindHub() {
    ensureShells();
    syncUser();
    // Reading / typing launchers: engines bind by id; ensure visible when screen opens
    var readingBtn = document.getElementById("ttcReadingLauncher");
    var typingBtn = document.getElementById("ttcListeningLauncher");
    if (readingBtn && !readingBtn.dataset.otter2Bound) {
      readingBtn.dataset.otter2Bound = "1";
      // engine attaches its own listener; no-op here
    }
    if (typingBtn && !typingBtn.dataset.otter2Bound) {
      typingBtn.dataset.otter2Bound = "1";
    }
  }

  function onShowPractice() {
    syncUser();
    ensureShells();
    bindHub();
  }

  window.otter2PracticeOnShow = onShowPractice;

  // Hook screen changes
  var _show = window.otter2ShowScreen;
  if (typeof _show === "function" && !_show.__otter2PracticeWrapped) {
    window.otter2ShowScreen = function (name) {
      var r = _show.apply(this, arguments);
      if (name === "reading" || name === "practice") onShowPractice();
      return r;
    };
    window.otter2ShowScreen.__otter2PracticeWrapped = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      ensureShells();
    });
  } else {
    ensureShells();
  }
})();
