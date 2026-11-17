/* Otter2 voice picker — hệ thống giọng đọc đầy đủ cho thichtiengtrung.io.vn.
 *
 * Vì sao có file này (chẩn đoán 2026-11-17): bộ chọn giọng cũ
 * (otter2-voice.js, mở bằng nút #otter2VoiceSystemBtn) lọc danh sách giọng
 * bằng /zh|cmn|chinese/i nên CHỈ liệt kê giọng tiếng Trung — giọng tiếng
 * Việt bị loại ngay từ bộ lọc, không có nhóm/khu vực tiếng Việt nào trong
 * UI, dù thiết bị có cài giọng Việt. Các hàm đọc rải rác khắp trang cũng
 * tự chọn "giọng đầu tiên khớp ngôn ngữ" nên người học không chọn được
 * giọng nam/nữ theo ý mình.
 *
 * File này (cộng thêm, không sửa module cũ):
 *  1. Chặn nút 🎙️ "Hệ thống giọng đọc" (capture phase) và mở bộ chọn mới:
 *     hai nhóm 🇨🇳 Tiếng Trung / 🇻🇳 Tiếng Việt, phân loại Giọng nữ /
 *     Giọng nam / Giọng khác theo tên giọng, avatar rái cá đội mũ nồi
 *     (SVG data-URI) cạnh mỗi giọng, nút ▶ nghe thử từng giọng.
 *  2. Bọc speechSynthesis.speak ở mức toàn cục: utterance thuộc zh/vi sẽ
 *     dùng giọng người học đã chọn cho ngôn ngữ đó (khi chưa gán giọng,
 *     hoặc khi giọng đã gán chỉ là auto-pick cùng ngôn ngữ). Lời gọi có
 *     cờ __vpLock (nghe thử trong picker) không bị đụng vào.
 *  3. Lưu lựa chọn: tiếng Trung dùng chung khóa sẵn có của trang
 *     "ttsVoiceName" (+ window.selectedVoiceName / window.chineseVoice /
 *     loadChineseVoice()) để module bài đọc, Học auto, flashcard… đồng
 *     bộ; tiếng Việt dùng khóa mới "otter2VoicePickViV1".
 *  4. Nạp danh sách giọng đúng cách: getVoices() + sự kiện voiceschanged
 *     + thử lại khi danh sách còn rỗng. Thiết bị không có giọng của một
 *     ngôn ngữ thì nhóm đó hiện ghi chú trung thực thay vì biến mất.
 */
(function () {
  "use strict";
  if (window.__OTTER2_VOICE_PICKER__) return;
  window.__OTTER2_VOICE_PICKER__ = true;

  var LS_ZH = "ttsVoiceName"; // khóa dùng chung sẵn có của trang (bài đọc, modal cũ)
  var LS_VI = "otter2VoicePickViV1"; // tiếng Việt trước đây không có khóa nào
  var LS_RATE = "ttsRate";

  var synth = null;
  try {
    synth = window.speechSynthesis || null;
  } catch (e) {
    synth = null;
  }

  /* ---------------- danh sách giọng: nạp + làm mới ---------------- */

  var cachedVoices = [];

  function refreshVoices() {
    if (!synth) return cachedVoices;
    try {
      var v = synth.getVoices() || [];
      if (v && v.length) cachedVoices = Array.prototype.slice.call(v);
    } catch (e) {}
    return cachedVoices;
  }

  function onVoicesChanged() {
    refreshVoices();
    if (overlay && !overlay.hidden) renderAll();
  }

  function bindVoiceEvents() {
    if (!synth) return;
    if (typeof synth.addEventListener === "function") {
      try {
        synth.addEventListener("voiceschanged", onVoicesChanged);
        return;
      } catch (e) {}
    }
    // Trình duyệt cũ không có addEventListener trên speechSynthesis:
    // nối chuỗi onvoiceschanged, giữ handler cũ nếu có.
    try {
      var prev = synth.onvoiceschanged;
      synth.onvoiceschanged = function (ev) {
        if (typeof prev === "function") {
          try {
            prev.call(synth, ev);
          } catch (e) {}
        }
        onVoicesChanged();
      };
    } catch (e) {}
  }

  function scheduleRetries() {
    // Chrome/Edge thường trả [] ở lần getVoices() đầu rồi mới nạp xong;
    // thử lại vài nhịp để không rơi vào cảnh "chưa có giọng nào".
    var delays = [200, 600, 1400, 2600, 4200];
    delays.forEach(function (d) {
      setTimeout(function () {
        if (cachedVoices.length) return;
        refreshVoices();
        if (overlay && !overlay.hidden) renderAll();
      }, d);
    });
  }

  /* ---------------- phân loại giọng ---------------- */

  function normLang(l) {
    return String(l || "").toLowerCase().replace(/_/g, "-");
  }

  function voiceGroup(v) {
    if (!v) return null;
    var l = normLang(v.lang);
    if (l.indexOf("zh") === 0 || l.indexOf("cmn") === 0 || l.indexOf("yue") === 0) return "zh";
    if (l.indexOf("vi") === 0) return "vi";
    var n = String(v.name || "").toLowerCase();
    if (/chinese|mandarin|中文|普通话|粵語|粤语|廣東|广东/.test(n)) return "zh";
    if (/viet|tiếng việt|tieng viet/.test(n)) return "vi";
    return null;
  }

  // Heuristic theo tên giọng của các nền tảng phổ biến (Microsoft / Google /
  // Apple). Kiểm tra token NỮ trước vì "female" chứa "male".
  var FEMALE_TOKENS = [
    "xiaoxiao", "xiaoyi", "xiaochen", "xiaohan", "xiaomeng", "xiaomo",
    "xiaoqiu", "xiaorui", "xiaoshuang", "xiaoxuan", "xiaoyan", "xiaoyou",
    "xiaozhen", "huihui", "yaoyao", "tingting", "sin-ji", "sinji",
    "meijia", "mei-jia", "hoaimy", "linh", "female"
  ];
  var MALE_TOKENS = [
    "yunyang", "yunjian", "yunhao", "yunye", "yunze", "yunxi", "yunfeng",
    "yunpeng", "kangkang", "namminh", "male"
  ];

  function classifyGender(v) {
    var raw = String((v && v.name) || "");
    var n = raw.toLowerCase().replace(/\s+/g, "");
    var i;
    for (i = 0; i < FEMALE_TOKENS.length; i++) {
      if (n.indexOf(FEMALE_TOKENS[i]) !== -1) return "female";
    }
    for (i = 0; i < MALE_TOKENS.length; i++) {
      if (n.indexOf(MALE_TOKENS[i]) !== -1) return "male";
    }
    // Quy tắc dự phòng cho dòng Microsoft: "Xiao…" thường là nữ, "Yun…" là nam.
    var lower = raw.toLowerCase();
    if (/microsoft/.test(lower) && /xiao/.test(lower)) return "female";
    if (/microsoft/.test(lower) && /yun/.test(lower)) return "male";
    return "other";
  }

  var GENDER_LABEL = { female: "👩 Giọng nữ", male: "👨 Giọng nam", other: "🎙️ Giọng khác" };

  /* ---------------- lựa chọn của người học ---------------- */

  function lsGet(k) {
    try {
      return window.localStorage.getItem(k) || "";
    } catch (e) {
      return "";
    }
  }
  function lsSet(k, val) {
    try {
      if (val) window.localStorage.setItem(k, val);
      else window.localStorage.removeItem(k);
    } catch (e) {}
  }

  function getChoice(group) {
    return group === "zh" ? lsGet(LS_ZH) : lsGet(LS_VI);
  }

  function findVoice(group, name) {
    if (!name) return null;
    refreshVoices();
    var fallback = null;
    for (var i = 0; i < cachedVoices.length; i++) {
      var v = cachedVoices[i];
      if (v.name === name) {
        if (voiceGroup(v) === group) return v;
        if (!fallback) fallback = v;
      }
    }
    return fallback;
  }

  function setChoice(group, name) {
    if (group === "zh") {
      lsSet(LS_ZH, name);
      try {
        window.selectedVoiceName = name || "";
      } catch (e) {}
      // Đồng bộ các module sẵn có của trang đọc qua chineseVoice /
      // loadChineseVoice() (Học auto, flashcard, ttcSpeakText…).
      if (typeof window.loadChineseVoice === "function") {
        try {
          window.loadChineseVoice();
        } catch (e) {}
      }
      var v = findVoice("zh", name);
      if (v) {
        try {
          window.chineseVoice = v;
        } catch (e) {}
      } else if (!name) {
        // Về mặc định: để loadChineseVoice/tự chọn của trang quyết định.
      }
    } else {
      lsSet(LS_VI, name);
    }
  }

  /* ---------------- bọc speechSynthesis.speak ---------------- */

  // Dấu hiệu tiếng Việt trong văn bản (khi utterance không ghi lang/voice):
  // chữ cái riêng (ă â đ ê ô ơ ư), dấu thanh tổ hợp U+0300–U+036F và khối
  // Latin Extended Additional U+1EA0–U+1EF9 chứa hầu hết chữ Việt có dấu.
  var VI_TEXT_RE =
    /[\u0103\u00E2\u0111\u00EA\u00F4\u01A1\u01B0\u0102\u00C2\u0110\u00CA\u00D4\u01A0\u01AF\u0300-\u036F\u1EA0-\u1EF9]/;

  function utteranceGroup(u) {
    var l = normLang(u.lang);
    if (l.indexOf("zh") === 0 || l.indexOf("cmn") === 0 || l.indexOf("yue") === 0) return "zh";
    if (l.indexOf("vi") === 0) return "vi";
    if (u.voice) {
      var g = voiceGroup(u.voice);
      if (g) return g;
    }
    var t = String(u.text || "");
    if (/[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/.test(t)) return "zh";
    if (VI_TEXT_RE.test(t)) return "vi";
    return null;
  }

  function applyChoice(u) {
    if (!u || u.__vpLock) return;
    var group = utteranceGroup(u);
    if (!group) return;
    var name = getChoice(group);
    if (!name) return; // chưa chọn → giữ nguyên hành vi mặc định của trang
    var chosen = findVoice(group, name);
    if (!chosen) return;
    if (!u.voice) {
      try {
        u.voice = chosen;
      } catch (e) {}
      if (!u.lang) {
        try {
          u.lang = chosen.lang || u.lang;
        } catch (e) {}
      }
      return;
    }
    // Đã có giọng: chỉ tinh chỉnh khi giọng hiện tại cùng ngôn ngữ nhưng
    // khác lựa chọn tường minh của người học (đa số lời gọi trên trang chỉ
    // auto-pick "giọng đầu tiên" chứ không phải chọn có chủ đích). Giọng
    // khác ngôn ngữ hoặc cờ __vpLock thì không đụng vào.
    if (u.voice.name !== chosen.name && voiceGroup(u.voice) === group) {
      try {
        u.voice = chosen;
      } catch (e) {}
    }
  }

  function installSpeakWrapper() {
    if (!synth || synth.__otter2VoiceWrapped) return;
    if (typeof synth.speak !== "function") return;
    var orig = synth.speak;
    try {
      synth.speak = function (utterance) {
        try {
          applyChoice(utterance);
        } catch (e) {}
        return orig.call(synth, utterance);
      };
      synth.__otter2VoiceWrapped = true;
    } catch (e) {
      // Một số trình duyệt không cho gán đè method: picker vẫn hoạt động
      // qua chineseVoice/ttsVoiceName cho các module dùng chung.
    }
  }

  /* ---------------- avatar rái cá (SVG data-URI) ---------------- */

  var BERET = {
    female: ["#f472b6", "#db2777"],
    male: ["#60a5fa", "#2563eb"],
    other: ["#9ca3af", "#6b7280"]
  };
  var avatarCache = {};

  function avatarURI(gender) {
    if (avatarCache[gender]) return avatarCache[gender];
    var b = BERET[gender] || BERET.other;
    var blush =
      gender === "female"
        ? "<ellipse cx='19.5' cy='43' rx='2.7' ry='1.8' fill='#f9a8d4' opacity='0.85'/>" +
          "<ellipse cx='44.5' cy='43' rx='2.7' ry='1.8' fill='#f9a8d4' opacity='0.85'/>"
        : "";
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>" +
      "<circle cx='14' cy='22' r='7' fill='#9c6b3f'/>" +
      "<circle cx='50' cy='22' r='7' fill='#9c6b3f'/>" +
      "<circle cx='14' cy='22' r='3.4' fill='#e8b48c'/>" +
      "<circle cx='50' cy='22' r='3.4' fill='#e8b48c'/>" +
      "<ellipse cx='32' cy='37' rx='21' ry='19' fill='#b0814e'/>" +
      "<ellipse cx='32' cy='42.5' rx='13.5' ry='10.5' fill='#f6e3c2'/>" +
      "<circle cx='24.5' cy='35' r='2.9' fill='#2b2118'/>" +
      "<circle cx='39.5' cy='35' r='2.9' fill='#2b2118'/>" +
      "<circle cx='25.5' cy='34' r='1' fill='#ffffff'/>" +
      "<circle cx='40.5' cy='34' r='1' fill='#ffffff'/>" +
      blush +
      "<ellipse cx='32' cy='40.5' rx='3.2' ry='2.2' fill='#503527'/>" +
      "<path d='M32 42.8c0 2-1.6 3-3.4 3.2M32 42.8c0 2 1.6 3 3.4 3.2' stroke='#503527' stroke-width='1.4' fill='none' stroke-linecap='round'/>" +
      "<path d='M11 25c2-8 11-13 21-13s19 5 21 13c-7-2.6-14-3.8-21-3.8S18 22.4 11 25Z' fill='" +
      b[0] +
      "'/>" +
      "<rect x='30.8' y='7.2' width='2.4' height='5' rx='1.2' fill='" +
      b[1] +
      "'/>" +
      "</svg>";
    var uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    avatarCache[gender] = uri;
    return uri;
  }

  /* ---------------- nghe thử ---------------- */

  var SAMPLE = {
    zh: "你好，很高兴认识你。",
    vi: "Xin chào, rất vui được gặp bạn."
  };

  function preview(group, voice) {
    if (!synth || !voice) return;
    try {
      synth.cancel();
    } catch (e) {}
    var u;
    try {
      u = new window.SpeechSynthesisUtterance(SAMPLE[group] || SAMPLE.zh);
    } catch (e) {
      return;
    }
    u.lang = voice.lang || (group === "vi" ? "vi-VN" : "zh-CN");
    try {
      u.voice = voice;
    } catch (e) {}
    u.__vpLock = true; // nghe thử phải dùng đúng giọng đang thử
    var r = parseFloat(lsGet(LS_RATE) || "");
    if (r > 0) u.rate = r;
    setTimeout(function () {
      try {
        synth.speak(u);
      } catch (e) {}
    }, 50);
  }

  /* ---------------- giao diện picker ---------------- */

  var overlay = null;
  var listZhEl = null;
  var listViEl = null;
  var rateEl = null;

  var CSS =
    ".ovp-overlay{position:fixed;inset:0;z-index:2147483011;background:rgba(15,23,42,.55);backdrop-filter:blur(6px);display:grid;place-items:center;padding:14px 16px}" +
    ".ovp-overlay[hidden]{display:none!important}" +
    ".ovp-panel{position:relative;width:min(440px,100%);max-height:min(90dvh,760px);overflow:auto;background:#fff;border-radius:20px;border:1px solid rgba(225,29,72,.14);box-shadow:0 22px 48px rgba(15,23,42,.28);padding:18px;font-family:inherit;color:#0f172a}" +
    ".ovp-close{position:absolute;top:10px;right:12px;border:0;background:transparent;font-size:24px;line-height:1;cursor:pointer;color:#64748b}" +
    ".ovp-title{font-weight:800;font-size:1.12rem;margin:0 30px 4px 0}" +
    ".ovp-sub{margin:0 0 12px;font-size:13px;color:#64748b}" +
    ".ovp-group{margin:0 0 14px}" +
    ".ovp-group-head{display:flex;align-items:center;justify-content:space-between;font-weight:800;font-size:15px;margin:0 0 8px;color:#0f172a}" +
    ".ovp-group-head .ovp-count{font-size:12px;font-weight:700;color:#94a3b8}" +
    ".ovp-subhead{font-size:12px;font-weight:800;letter-spacing:.02em;color:#e11d48;margin:10px 0 6px;text-transform:uppercase}" +
    ".ovp-row{display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:1px solid #e2e8f0;background:#fff;border-radius:14px;padding:8px 10px;margin:0 0 6px;cursor:pointer;font:inherit}" +
    ".ovp-row:hover{border-color:#fda4af;background:#fff7f8}" +
    ".ovp-row.is-on{border-color:#e11d48;background:#fff1f2;box-shadow:0 0 0 1px #e11d48 inset}" +
    ".ovp-ava{width:40px;height:40px;border-radius:50%;flex:0 0 40px;background:#fdf4e3;border:1px solid #f1e3c8;object-fit:cover}" +
    ".ovp-main{flex:1 1 auto;min-width:0}" +
    ".ovp-name{display:block;font-weight:700;font-size:14px;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    ".ovp-meta{display:block;font-size:12px;color:#64748b;margin-top:1px}" +
    ".ovp-check{flex:0 0 auto;font-size:12px;font-weight:800;color:#e11d48}" +
    ".ovp-try{flex:0 0 auto;width:34px;height:34px;border-radius:50%;border:1px solid #fecdd3;background:#fff1f2;color:#e11d48;display:inline-flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer}" +
    ".ovp-try:hover{background:#ffe4e6}" +
    ".ovp-empty{border:1px dashed #cbd5e1;border-radius:14px;padding:10px 12px;font-size:13px;color:#64748b;background:#f8fafc}" +
    ".ovp-rate{border-top:1px solid #f1f5f9;padding-top:12px;margin-top:2px}" +
    ".ovp-rate label{display:block;font-weight:700;font-size:13px;margin:0 0 6px;color:#334155}" +
    ".ovp-rate select{width:100%;padding:11px;border-radius:10px;border:1px solid #ddd;background:#fff;font-size:15px;box-sizing:border-box}" +
    ".ovp-foot{margin:10px 0 0;font-size:12px;color:#94a3b8}" +
    ".ovp-launch{appearance:none;border:1px solid rgba(225,29,72,.22);background:#fff;color:#be123c;border-radius:999px;min-height:36px;padding:0 14px;font-weight:800;font-size:13px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;margin:0 0 8px 8px}";

  function injectStyle() {
    if (document.getElementById("otter2VoicePickerStyle")) return;
    var st = document.createElement("style");
    st.id = "otter2VoicePickerStyle";
    st.textContent = CSS;
    (document.head || document.documentElement).appendChild(st);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var RATE_OPTIONS = [
    ["0.1", "🐢 0.1× Cực chậm"], ["0.25", "🐢 0.25× Siêu chậm"],
    ["0.5", "🐢 0.5× Rất chậm"], ["0.65", "🐢 0.65× Chậm"],
    ["0.85", "🗣️ 0.85× Hơi chậm"], ["1", "⚡ 1.0× Bình thường"],
    ["1.5", "⚡ 1.5× Nhanh nhẹ"], ["1.65", "⚡ 1.65× Nhanh vừa"],
    ["1.85", "🚀 1.85× Siêu nhanh"], ["2", "🚀 2.0× Cực nhanh"],
    ["3", "🚀 3.0× Cực đại"]
  ];

  function ensureOverlay() {
    if (overlay) return overlay;
    injectStyle();
    overlay = el("div", "ovp-overlay");
    overlay.id = "otter2VoicePickerOverlay";
    overlay.hidden = true;

    var panel = el("div", "ovp-panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", "Chọn giọng đọc");

    var close = el("button", "ovp-close", "×");
    close.type = "button";
    close.setAttribute("aria-label", "Đóng");
    close.addEventListener("click", closePicker);
    panel.appendChild(close);

    panel.appendChild(el("div", "ovp-title", "🔊 Giọng đọc"));
    panel.appendChild(
      el("p", "ovp-sub", "Chọn giọng bạn thích cho từng ngôn ngữ — áp dụng cho mọi nơi trang phát tiếng: từ vựng, bài đọc, Học auto, ví dụ…")
    );

    [["zh", "🇨🇳 Tiếng Trung"], ["vi", "🇻🇳 Tiếng Việt"]].forEach(function (pair) {
      var sec = el("section", "ovp-group");
      var head = el("div", "ovp-group-head");
      head.appendChild(el("span", null, pair[1]));
      var count = el("span", "ovp-count");
      count.id = "ovpCount-" + pair[0];
      head.appendChild(count);
      sec.appendChild(head);
      var list = el("div", "ovp-list");
      list.id = "ovpList-" + pair[0];
      sec.appendChild(list);
      panel.appendChild(sec);
      if (pair[0] === "zh") listZhEl = list;
      else listViEl = list;
    });

    var rateBox = el("div", "ovp-rate");
    var rLabel = el("label", null, "🎚️ Tốc độ đọc");
    rLabel.htmlFor = "ovpRateSelect";
    rateBox.appendChild(rLabel);
    rateEl = el("select");
    rateEl.id = "ovpRateSelect";
    RATE_OPTIONS.forEach(function (o) {
      var opt = document.createElement("option");
      opt.value = o[0];
      opt.textContent = o[1];
      rateEl.appendChild(opt);
    });
    rateEl.addEventListener("change", function () {
      lsSet(LS_RATE, rateEl.value);
      var r = parseFloat(rateEl.value);
      if (!isNaN(r)) {
        try {
          window.selectedRate = r;
        } catch (e) {}
      }
    });
    rateBox.appendChild(rateEl);
    panel.appendChild(rateBox);

    panel.appendChild(
      el("p", "ovp-foot", "Giọng đọc do thiết bị và trình duyệt của bạn cung cấp — trang chỉ giúp bạn chọn giọng có sẵn, không tự cài thêm giọng hệ thống được.")
    );

    overlay.appendChild(panel);
    overlay.addEventListener("click", function (ev) {
      if (ev.target === overlay) closePicker();
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  var EMPTY_NOTE = {
    zh: "Thiết bị của bạn chưa có giọng tiếng Trung nào. Hãy cài thêm giọng tiếng Trung trong cài đặt hệ thống (Windows: Cài đặt › Thời gian & ngôn ngữ › Giọng nói; Android/iPhone: mục Ngôn ngữ / Trợ năng › Giọng nói) rồi mở lại.",
    vi: "Thiết bị của bạn chưa cài giọng tiếng Việt nên chưa chọn được. Hãy cài thêm giọng tiếng Việt trong cài đặt hệ thống (Windows: Cài đặt › Thời gian & ngôn ngữ › Giọng nói; Android: Cài đặt › Ngôn ngữ › Chuyển văn bản thành giọng nói; iPhone/Mac: Cài đặt › Trợ năng › Nội dung được nói › Giọng) rồi mở lại nhé."
  };

  function makeRow(group, voice, gender, isOn) {
    var row = el("button", "ovp-row" + (isOn ? " is-on" : ""));
    row.type = "button";
    row.setAttribute("data-ovp-name", voice.name);
    row.setAttribute("data-ovp-group", group);

    var img = el("img", "ovp-ava");
    img.src = avatarURI(gender);
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    row.appendChild(img);

    var main = el("span", "ovp-main");
    main.appendChild(el("span", "ovp-name", voice.name));
    var meta = [voice.lang || "", GENDER_LABEL[gender]];
    if (voice.localService === false) meta.push("Trực tuyến");
    main.appendChild(el("span", "ovp-meta", meta.filter(Boolean).join(" · ")));
    row.appendChild(main);

    if (isOn) row.appendChild(el("span", "ovp-check", "✓ Đang dùng"));

    var tryBtn = el("span", "ovp-try", "▶");
    tryBtn.setAttribute("data-ovp-try", "1");
    tryBtn.setAttribute("role", "button");
    tryBtn.setAttribute("aria-label", "Nghe thử giọng " + voice.name);
    row.appendChild(tryBtn);
    return row;
  }

  function makeDefaultRow(group, isOn) {
    var row = el("button", "ovp-row" + (isOn ? " is-on" : ""));
    row.type = "button";
    row.setAttribute("data-ovp-name", "");
    row.setAttribute("data-ovp-group", group);
    var img = el("img", "ovp-ava");
    img.src = avatarURI("other");
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    row.appendChild(img);
    var main = el("span", "ovp-main");
    main.appendChild(el("span", "ovp-name", "Mặc định"));
    main.appendChild(el("span", "ovp-meta", "Để trang/trình duyệt tự chọn giọng như trước"));
    row.appendChild(main);
    if (isOn) row.appendChild(el("span", "ovp-check", "✓ Đang dùng"));
    return row;
  }

  function renderGroup(group, container) {
    if (!container) return;
    refreshVoices();
    var list = cachedVoices.filter(function (v) {
      return voiceGroup(v) === group;
    });
    var countEl = document.getElementById("ovpCount-" + group);
    if (countEl) countEl.textContent = list.length ? list.length + " giọng" : "";
    container.innerHTML = "";
    var choice = getChoice(group);
    container.appendChild(makeDefaultRow(group, !choice));
    if (!list.length) {
      container.appendChild(el("div", "ovp-empty", EMPTY_NOTE[group]));
      return;
    }
    var buckets = { female: [], male: [], other: [] };
    list.forEach(function (v) {
      buckets[classifyGender(v)].push(v);
    });
    ["female", "male", "other"].forEach(function (g) {
      if (!buckets[g].length) return;
      container.appendChild(el("div", "ovp-subhead", GENDER_LABEL[g]));
      buckets[g].forEach(function (v) {
        container.appendChild(makeRow(group, v, g, choice === v.name));
      });
    });
  }

  function renderAll() {
    renderGroup("zh", listZhEl);
    renderGroup("vi", listViEl);
    if (rateEl) {
      var r = lsGet(LS_RATE);
      rateEl.value = r || "0.65";
      if (rateEl.value !== (r || "0.65") && RATE_OPTIONS.length) rateEl.value = "0.65";
    }
  }

  function onPickerClick(ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    var row = t.closest("[data-ovp-name]");
    if (!row || !overlay.contains(row)) return;
    var group = row.getAttribute("data-ovp-group");
    var name = row.getAttribute("data-ovp-name") || "";
    if (t.closest("[data-ovp-try]")) {
      ev.preventDefault();
      ev.stopPropagation();
      var v = findVoice(group, name);
      if (v) preview(group, v);
      return;
    }
    // Bấm cả hàng = chọn giọng đó (và nghe thử ngay); hàng "Mặc định" = bỏ chọn.
    setChoice(group, name || "");
    renderAll();
    if (name) {
      var vv = findVoice(group, name);
      if (vv) preview(group, vv);
    }
  }

  function openPicker() {
    var ov = ensureOverlay();
    if (!synth) {
      // Trình duyệt không có TTS: vẫn mở và nói rõ thay vì im lặng.
      if (listZhEl && !listZhEl.childNodes.length) {
        listZhEl.appendChild(el("div", "ovp-empty", "Trình duyệt này không hỗ trợ đọc văn bản (speechSynthesis) nên không có giọng nào để chọn."));
      }
    }
    refreshVoices();
    renderAll();
    ov.hidden = false;
    document.body.classList.add("ovp-open");
  }

  function closePicker() {
    if (overlay) overlay.hidden = true;
    document.body.classList.remove("ovp-open");
    try {
      if (synth) synth.cancel();
    } catch (e) {}
  }

  /* ---------------- mở picker: chặn nút hệ thống giọng đọc ---------------- */

  function bindLaunchers() {
    // Chặn ở capture phase trên document: chạy trước handler của modal cũ
    // (gắn thẳng trên nút) nên modal Trung-only không mở nữa; nút, id và
    // vị trí giữ nguyên để rái cá hướng dẫn (guide) vẫn trỏ đúng chỗ.
    document.addEventListener(
      "click",
      function (ev) {
        var t = ev.target;
        if (!t || !t.closest) return;
        if (t.closest("#otter2VoiceSystemBtn") || t.closest("#otter2VoicePickerBtn")) {
          ev.preventDefault();
          ev.stopPropagation();
          openPicker();
        }
      },
      true
    );

    // Phòng hờ biến thể trang không có nút hệ thống: thêm nút 🔊 Giọng đọc
    // cạnh tiêu đề chào mừng.
    if (!document.getElementById("otter2VoiceSystemBtn") && !document.getElementById("otter2VoicePickerBtn")) {
      injectStyle();
      var btn = el("button", "ovp-launch", "🔊 Giọng đọc");
      btn.type = "button";
      btn.id = "otter2VoicePickerBtn";
      var title = document.querySelector(".otter2-title");
      if (title && title.parentNode) title.parentNode.insertBefore(btn, title);
      else if (document.body) document.body.appendChild(btn);
    }

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && overlay && !overlay.hidden) closePicker();
    });
    document.addEventListener("click", onPickerClick, false);
  }

  /* ---------------- khởi tạo ---------------- */

  window.otter2OpenVoicePicker = openPicker;
  window.otter2CloseVoicePicker = closePicker;
  window.otter2VoicePicker = {
    open: openPicker,
    close: closePicker,
    getChoice: getChoice,
    setChoice: setChoice,
    classifyGender: classifyGender,
    voiceGroup: voiceGroup,
    refreshVoices: refreshVoices,
    _applyChoice: applyChoice,
    _avatarURI: avatarURI
  };

  installSpeakWrapper();
  bindVoiceEvents();
  refreshVoices();
  scheduleRetries();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindLaunchers);
  } else {
    bindLaunchers();
  }
})();
