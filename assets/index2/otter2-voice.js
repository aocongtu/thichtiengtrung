/* Otter2 voice settings — ported from index1 createVoiceSettings (no iframe). */
(function () {
  "use strict";
  if (window.__OTTER2_VOICE_UI__) return;
  window.__OTTER2_VOICE_UI__ = true;

  function ensureGlobals() {
    if (typeof window.selectedVoiceName === "undefined") {
      try {
        window.selectedVoiceName = localStorage.getItem("ttsVoiceName") || "";
      } catch (e) {
        window.selectedVoiceName = "";
      }
    }
    if (typeof window.selectedRate === "undefined") {
      try {
        window.selectedRate = parseFloat(localStorage.getItem("ttsRate") || "0.65") || 0.65;
      } catch (e) {
        window.selectedRate = 0.65;
      }
    }
  }

  function updateVoiceListAuto() {
    var select = document.getElementById("voiceSelectAuto");
    if (!select || !window.speechSynthesis) return;
    var voices = window.speechSynthesis.getVoices() || [];
    var zh = voices.filter(function (v) {
      return /zh|cmn|chinese/i.test(v.lang + " " + v.name);
    });
    var list = zh.length ? zh : voices;
    var prev = select.value || window.selectedVoiceName || "";
    select.innerHTML = "";
    if (!list.length) {
      var opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "Đang tải danh sách giọng…";
      select.appendChild(opt0);
      return;
    }
    list.forEach(function (voice) {
      var opt = document.createElement("option");
      opt.value = voice.name;
      opt.textContent = voice.name + " (" + voice.lang + ")";
      select.appendChild(opt);
    });
    if (prev) {
      select.value = prev;
      if (select.value !== prev && list[0]) select.value = list[0].name;
    } else if (list[0]) {
      select.value = list[0].name;
    }
  }

  function ensureOverlay() {
    var overlay = document.getElementById("otter2VoiceOverlay");
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.id = "otter2VoiceOverlay";
    overlay.className = "otter2-voice-overlay";
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="otter2-voice-modal" role="dialog" aria-modal="true" aria-labelledby="otter2VoiceTitle">' +
      '<button type="button" class="otter2-voice-close" id="otter2VoiceClose" aria-label="Đóng">×</button>' +
      '<div id="voiceSettingsAuto" class="otter2-voice-settings">' +
      '<div class="voice-settings-title" id="otter2VoiceTitle">🎙️ Hệ thống giọng đọc</div>' +
      '<div class="voice-settings-row"><label>🇨🇳 Chọn giọng:</label><select id="voiceSelectAuto"></select></div>' +
      '<div class="voice-settings-row"><label>🎚️ Tốc độ đọc:</label>' +
      '<select id="voiceRateAuto">' +
      '<option value="0.1">🐢 0.1× Cực chậm</option>' +
      '<option value="0.25">🐢 0.25× Siêu chậm</option>' +
      '<option value="0.5">🐢 0.5× Rất chậm</option>' +
      '<option value="0.65">🐢 0.65× Chậm</option>' +
      '<option value="0.85">🗣️ 0.85× Hơi chậm</option>' +
      '<option value="1">⚡ 1.0× Bình thường</option>' +
      '<option value="1.5">⚡ 1.5× Nhanh nhẹ</option>' +
      '<option value="1.65">⚡ 1.65× Nhanh vừa</option>' +
      '<option value="1.85">🚀 1.85× Siêu nhanh</option>' +
      '<option value="2">🚀 2.0× Cực nhanh</option>' +
      '<option value="3">🚀 3.0× Cực đại</option>' +
      "</select></div>" +
      '<button type="button" id="testVoiceAuto">🔊 Nghe thử</button>' +
      "</div></div>";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (ev) {
      if (ev.target === overlay) closeVoiceSettings();
    });
    var closeBtn = document.getElementById("otter2VoiceClose");
    if (closeBtn) closeBtn.addEventListener("click", closeVoiceSettings);

    bindControls();
    return overlay;
  }

  function bindControls() {
    ensureGlobals();
    updateVoiceListAuto();
    var rateSelect = document.getElementById("voiceRateAuto");
    if (rateSelect) {
      rateSelect.value = String(window.selectedRate);
      if (!rateSelect.dataset.otter2Bound) {
        rateSelect.dataset.otter2Bound = "1";
        rateSelect.addEventListener("change", function () {
          window.selectedRate = parseFloat(rateSelect.value) || 0.65;
          try {
            localStorage.setItem("ttsRate", String(window.selectedRate));
          } catch (e) {}
        });
      }
    }
    var voiceSelect = document.getElementById("voiceSelectAuto");
    if (voiceSelect && !voiceSelect.dataset.otter2Bound) {
      voiceSelect.dataset.otter2Bound = "1";
      voiceSelect.addEventListener("change", function () {
        var selectedName = voiceSelect.value;
        if (!selectedName) return;
        window.selectedVoiceName = selectedName;
        try {
          localStorage.setItem("ttsVoiceName", selectedName);
        } catch (e) {}
        try {
          var voices = window.speechSynthesis.getVoices() || [];
          var selectedVoice =
            voices.find(function (v) {
              return v.name === selectedName;
            }) || null;
          if (selectedVoice) window.chineseVoice = selectedVoice;
          if (typeof window.loadChineseVoice === "function") window.loadChineseVoice();
          var synth = window.speechSynthesis;
          window.__ttcVoicePreviewGen = (window.__ttcVoicePreviewGen || 0) + 1;
          var previewGen = window.__ttcVoicePreviewGen;
          try {
            synth.cancel();
          } catch (e2) {}
          var utterance = new SpeechSynthesisUtterance("你好，很高兴认识你。");
          utterance.lang = selectedVoice && selectedVoice.lang ? selectedVoice.lang : "zh-CN";
          if (selectedVoice) utterance.voice = selectedVoice;
          utterance.rate = typeof window.selectedRate === "number" ? window.selectedRate : 0.65;
          utterance.pitch = 1;
          utterance.volume = 1;
          setTimeout(function () {
            if (previewGen !== window.__ttcVoicePreviewGen) return;
            try {
              synth.speak(utterance);
            } catch (e3) {}
          }, 60);
        } catch (err) {
          console.warn("Voice preview:", err);
        }
      });
    }
    var testBtn = document.getElementById("testVoiceAuto");
    if (testBtn && !testBtn.dataset.otter2Bound) {
      testBtn.dataset.otter2Bound = "1";
      testBtn.addEventListener("click", function () {
        if (typeof window.say === "function") {
          window.say("你好，很高兴认识你。");
        } else if (typeof window.saySentence === "function") {
          window.saySentence("你好，很高兴认识你。");
        } else {
          voiceSelect && voiceSelect.dispatchEvent(new Event("change"));
        }
      });
    }
    if (window.speechSynthesis && !window.__otter2VoiceListBound) {
      window.__otter2VoiceListBound = true;
      window.speechSynthesis.addEventListener("voiceschanged", updateVoiceListAuto);
    }
  }

  function openVoiceSettings() {
    ensureGlobals();
    var overlay = ensureOverlay();
    overlay.hidden = false;
    document.body.classList.add("otter2-voice-open");
    if (typeof window.loadChineseVoice === "function") {
      try {
        window.loadChineseVoice();
      } catch (e) {}
    }
    updateVoiceListAuto();
  }

  function closeVoiceSettings() {
    var overlay = document.getElementById("otter2VoiceOverlay");
    if (overlay) overlay.hidden = true;
    document.body.classList.remove("otter2-voice-open");
    try {
      window.speechSynthesis && window.speechSynthesis.cancel();
    } catch (e) {}
  }

  window.otter2OpenVoiceSettings = openVoiceSettings;
  window.otter2CloseVoiceSettings = closeVoiceSettings;
  window.createVoiceSettings = function () {
    ensureOverlay();
  };

  function bindLauncher() {
    var btn = document.getElementById("otter2VoiceSystemBtn");
    if (btn && !btn.dataset.otter2Bound) {
      btn.dataset.otter2Bound = "1";
      btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        openVoiceSettings();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLauncher);
  } else {
    bindLauncher();
  }
})();
