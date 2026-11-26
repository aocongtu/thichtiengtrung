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

/* ============================================================
   Nút "← Quay lại" của màn Luyện tập — Phương án A:
   - Đang có panel luyện tập mở → lần bấm Quay lại CHỈ đóng panel,
     đưa màn về hub, và chặn delegation toàn cục [data-otter2-screen]
     (listener bubble trên document của index2.html) để không văng
     về Trang chủ.
   - Không có panel nào mở → không can thiệp, Quay lại về Trang chủ
     như cũ.
   Phạm vi: listener capture gắn trên section #otter2-reading nên
   chỉ tác động đúng nút Quay lại của màn Luyện tập; nút sinh đôi ở
   màn "Học auto tự động" (#otter2-auto) không bị ảnh hưởng.
   Đóng panel bằng ĐÚNG cơ chế toggle sẵn có của từng module.
   ============================================================ */
(function () {
  "use strict";

  /* Nút hub gọi openVocabularyTestChooser / openSentences (onclick inline). */
  function hubButton(fnName) {
    var wrap = document.getElementById("ttcActionFrameButtons");
    if (!wrap) return null;
    var btns = wrap.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
      var oc = btns[i].getAttribute("onclick") || "";
      if (oc.indexOf(fnName) !== -1) return btns[i];
    }
    return null;
  }

  /* Đóng mọi panel đang mở bằng cơ chế riêng của từng module.
     Trả về true nếu có ít nhất một panel/overlay đang mở. */
  function closeOpenPracticePanels() {
    var closed = false;

    /* Nối từ đúng — overlay toàn màn hình, đóng bằng nút đóng của nó. */
    var matchOverlay = document.getElementById("ttcMatchOverlay");
    if (matchOverlay && matchOverlay.classList.contains("ttc-match-open")) {
      var matchClose = matchOverlay.querySelector(".ttc-match-close");
      if (matchClose) matchClose.click();
      else matchOverlay.classList.remove("ttc-match-open");
      closed = true;
    }

    /* Phản xạ đoán nghĩa — overlay toàn màn hình, đóng bằng nút của nó
       (close() của module còn hủy giọng đọc đang phát). */
    var listenOverlay = document.getElementById("ttcListenOverlay");
    if (listenOverlay && listenOverlay.classList.contains("ttc-listen-open")) {
      var listenClose = listenOverlay.querySelector(".ttc-listen-close");
      if (listenClose) listenClose.click();
      else listenOverlay.classList.remove("ttc-listen-open");
      closed = true;
    }

    /* Luyện đọc — bấm lại launcher: handler tự toggle tắt + stopReading(). */
    var readingSection = document.getElementById("ttcReadingSection");
    if (readingSection && readingSection.classList.contains("ttc-open")) {
      var readingBtn = document.getElementById("ttcReadingLauncher");
      if (readingBtn) readingBtn.click();
      closed = true;
    }

    /* Gõ Hán tự — bấm lại launcher: handler tự toggle tắt + stopAudio(). */
    var typingSection = document.getElementById("ttcListeningSection");
    if (typingSection && typingSection.classList.contains("ttc-listening-open")) {
      var typingBtn = document.getElementById("ttcListeningLauncher");
      if (typingBtn) typingBtn.click();
      closed = true;
    }

    /* Luyện câu — gọi lại openSentences(btn): nhánh toggle-close của
       chính module khi đủ điều kiện (hiện + nút đang active); nếu lệch
       trạng thái thì áp đúng hai câu lệnh đóng của nhánh đó. */
    var sentenceSection = document.getElementById("sentenceSection");
    if (
      sentenceSection &&
      !sentenceSection.classList.contains("hidden") &&
      sentenceSection.style.display !== "none"
    ) {
      var sentenceBtn = hubButton("openSentences");
      if (
        sentenceBtn &&
        sentenceBtn.classList.contains("active") &&
        typeof window.openSentences === "function"
      ) {
        window.openSentences(sentenceBtn);
      } else {
        sentenceSection.classList.add("hidden");
        if (sentenceBtn) sentenceBtn.classList.remove("active");
      }
      closed = true;
    }

    /* Test từ vựng — gọi lại openVocabularyTestChooser(btn): nhánh
       toggle-close của chính module (ẩn section + gỡ active + gỡ
       overlay chọn cấp). Overlay chọn cấp mở một mình (chưa vào test)
       thì đóng bằng nút × của chính overlay. */
    var testSection = document.getElementById("testSection");
    var chooser = document.getElementById("ttcVocabularyTestChooser");
    if (testSection && !testSection.classList.contains("hidden")) {
      var testBtn = hubButton("openVocabularyTestChooser");
      if (testBtn && typeof window.openVocabularyTestChooser === "function") {
        window.openVocabularyTestChooser(testBtn);
      } else {
        testSection.classList.add("hidden");
        if (testBtn) testBtn.classList.remove("active");
        if (chooser) chooser.remove();
      }
      closed = true;
    } else if (chooser) {
      var chooserClose = chooser.querySelector(".ttc-vocab-test-close");
      if (chooserClose) chooserClose.click();
      else chooser.remove();
      closed = true;
    }

    return closed;
  }

  function initBackInterceptor() {
    var section = document.getElementById("otter2-reading");
    if (!section || section.dataset.otter2BackGuard === "1") return;
    var backBtn = section.querySelector(
      '.otter2-reading-top [data-otter2-screen="home"]'
    );
    if (!backBtn) return;
    section.dataset.otter2BackGuard = "1";
    /* Capture trên section: chạy trước pha bubble của document, nên
       stopPropagation() tại đây chặn được delegation toàn cục khi
       cần đóng panel; khi không có panel mở thì để sự kiện đi tiếp
       như bình thường. */
    section.addEventListener(
      "click",
      function (ev) {
        if (!ev.target || (ev.target !== backBtn && !backBtn.contains(ev.target))) {
          return;
        }
        if (closeOpenPracticePanels()) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      },
      true
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBackInterceptor);
  } else {
    initBackInterceptor();
  }
})();
