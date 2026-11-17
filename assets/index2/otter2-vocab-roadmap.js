/**
 * Otter2 vocab roadmap — from index.html #ttc-daily-vocab.
 * Migrate 01: words = full HSK 1–9 from OTTER2_HSK_ALL_DATA.
 */
var __otter2PathWords = (function () {
  if (window.OTTER2_HSK_ALL_DATA && Array.isArray(window.OTTER2_HSK_ALL_DATA.words)) {
    return window.OTTER2_HSK_ALL_DATA.words.slice();
  }
  if (window.OTTER2_HSK1_DATA && Array.isArray(window.OTTER2_HSK1_DATA.words)) {
    return window.OTTER2_HSK1_DATA.words.slice();
  }
  return [];
})();
window.words = __otter2PathWords;
var words = __otter2PathWords;
if (typeof window.checkPremiumAccess !== "function") {
  window.checkPremiumAccess = async function (level) {
    var user = window.currentUser || (window.otter2Account && window.otter2Account.user);
    if (!user) {
      /* Im lặng trước tương tác đầu tiên (đồng bộ với otter2-premium-gate.js):
         lời gọi lúc load trang không được bật popup đăng nhập. */
      if (typeof window.__otter2HasUserInteracted === "function" && !window.__otter2HasUserInteracted()) return false;
      if (typeof window.otter2AccountOpenLogin === "function") window.otter2AccountOpenLogin();
      else alert("Vui lòng đăng nhập trước.");
      return false;
    }
    var n = Number(level);
    if (n <= 2) return true;
    if (typeof window.hasPremiumAccess === "function") {
      try {
        var ok = !!(await window.hasPremiumAccess());
        if (ok) return true;
      } catch (e) {}
    }
    if (typeof window.__otter2HasUserInteracted === "function" && !window.__otter2HasUserInteracted()) return false;
    alert(
      "🔒 HSK " + n + " là nội dung Premium.\n\n" +
      "Tài khoản Free chỉ được xem từ vựng HSK 1–2.\n\n" +
      "Vui lòng đăng ký gói Premium để tiếp tục học."
    );
    return false;
  };
}
if (typeof window.ttcSpeakText !== "function") {
  window.ttcSpeakText = function (text, lang, onEnd) {
    if (!("speechSynthesis" in window) || !text) {
      if (typeof onEnd === "function") onEnd();
      return;
    }
    var code = String(lang || "zh").toLowerCase();
    var isVi = code === "vi" || code.indexOf("vi-") === 0;
    var locale = isVi ? "vi-VN" : "zh-CN";
    try { speechSynthesis.cancel(); } catch (e) {}
    var voices = speechSynthesis.getVoices() || [];
    var voice = null;
    if (isVi) {
      voice = voices.find(function (v) { return /^vi/i.test(v.lang || ""); })
        || voices.find(function (v) { return /viet|vietnam/i.test(v.name || ""); });
    } else {
      if (typeof window.loadChineseVoice === "function") {
        try { window.loadChineseVoice(); } catch (e2) {}
      }
      voice = window.chineseVoice || null;
      if (!voice) {
        voice = voices.find(function (v) {
          var L = String(v.lang || "").toLowerCase().replace(/_/g, "-");
          var N = String(v.name || "").toLowerCase();
          if (/zh-tw|zh-hk|cantonese|taiwan|hong kong/.test(L + " " + N)) return false;
          return L.indexOf("zh-cn") === 0 || /mandarin|simplified|huihui|yaoyao|xiaoxiao|kangkang/.test(N);
        });
      }
      if (!voice) {
        if (!window.__otter2ZhVoiceWarned) {
          window.__otter2ZhVoiceWarned = true;
          alert("Trình duyệt/máy này không có giọng Mandarin (zh-CN). Không thể đọc tiếng Trung. Không thay bằng tiếng Việt.");
        }
        if (typeof onEnd === "function") onEnd();
        return;
      }
    }
    var u = new SpeechSynthesisUtterance(String(text));
    u.lang = locale;
    u.rate = isVi ? 0.95 : 0.9;
    if (voice) u.voice = voice;
    var done = false;
    var finish = function () {
      if (done) return;
      done = true;
      if (typeof onEnd === "function") onEnd();
    };
    u.onend = finish;
    u.onerror = finish;
    speechSynthesis.speak(u);
  };
}
if (typeof window.ttcHanVietName !== "function") {
  window.ttcHanVietName = function () { return ""; };
}
(function(){
  "use strict";
  var LEGACY_KEY = "ttc_vocab_path_v1";
  var LEGACY_SYNC_KEY = "ttc_vocab_path_sync_v1";
  var ORPHAN_CLAIM_KEY = "ttc_vocab_path_v1__orphan_claim";
  var DAILY_MIN = 1;
  var DAILY_MAX = 2000;
  var PRESETS = [5, 50, 300, 1000, 2000];
  var serverDay = { ok: false, value: null, error: null, fetchedAt: 0 };
  var applyingRemote = false;
  var syncAllInFlight = false;
  var pushTimers = {};
  var lastAuthUserId = null;
  var mountBox = null;
  var remountDraw = null;

  function pathKeyFor(uid){
    if (!uid) return LEGACY_KEY;
    return LEGACY_KEY + "__u_" + uid;
  }
  function syncKeyFor(uid){
    if (!uid) return LEGACY_SYNC_KEY;
    return LEGACY_SYNC_KEY + "__u_" + uid;
  }
  function activePathKey(){ return pathKeyFor(authUserId()); }
  function activeSyncKey(){ return syncKeyFor(authUserId()); }
  function loadOrphanClaim(){
    try {
      return JSON.parse(localStorage.getItem(ORPHAN_CLAIM_KEY) || "null") || {
        status: "open",
        claimedBy: null,
        claimedAt: null,
        declinedBy: [],
        legacyBackupKept: true
      };
    } catch (e) {
      return { status: "open", claimedBy: null, claimedAt: null, declinedBy: [], legacyBackupKept: true };
    }
  }
  function saveOrphanClaim(claim){
    try { localStorage.setItem(ORPHAN_CLAIM_KEY, JSON.stringify(claim)); } catch (e) {}
  }
  function readLegacyRaw(){
    try { return JSON.parse(localStorage.getItem(LEGACY_KEY) || "null"); }
    catch (e) { return null; }
  }
  function legacyStoreHasProgress(raw){
    if (!raw) return false;
    var migrated = migrate(raw);
    if (migrated.error || !migrated.store || !migrated.store.byLevel) return false;
    var levels = migrated.store.byLevel;
    return Object.keys(levels).some(function(k){
      var entry = levels[k];
      return !!(entry && (
        entry.on ||
        (Number(entry.xp) || 0) > 0 ||
        (Number(entry.index) || 0) > 0 ||
        (Number(entry.todayDone) || 0) > 0 ||
        entry.lastDay
      ));
    });
  }
  function userStoreHasProgress(uid){
    if (!uid) return false;
    try {
      var raw = JSON.parse(localStorage.getItem(pathKeyFor(uid)) || "null");
      return legacyStoreHasProgress(raw);
    } catch (e) { return false; }
  }
  function orphanPendingForCurrentUser(){
    var uid = authUserId();
    if (!uid) return false;
    if (userStoreHasProgress(uid)) return false;
    if (!legacyStoreHasProgress(readLegacyRaw())) return false;
    var claim = loadOrphanClaim();
    if (claim.claimedBy) return false;
    if (claim.declinedBy && claim.declinedBy.indexOf(uid) >= 0) return false;
    return true;
  }
  function claimOrphanToCurrentUser(){
    var uid = authUserId();
    if (!uid) return { ok: false, reason: "no_user" };
    var legacy = localStorage.getItem(LEGACY_KEY);
    if (!legacy || legacy === "null") return { ok: false, reason: "no_legacy" };
    if (userStoreHasProgress(uid)) return { ok: false, reason: "user_has_data" };
    try {
      localStorage.setItem(pathKeyFor(uid), legacy);
    } catch (e) {
      return { ok: false, reason: "save_failed" };
    }
    var claim = loadOrphanClaim();
    claim.status = "claimed";
    claim.claimedBy = uid;
    claim.claimedAt = new Date().toISOString();
    claim.legacyBackupKept = true;
    saveOrphanClaim(claim);
    return { ok: true };
  }
  function declineOrphanForCurrentUser(){
    var uid = authUserId();
    if (!uid) return { ok: false };
    var claim = loadOrphanClaim();
    claim.declinedBy = claim.declinedBy || [];
    if (claim.declinedBy.indexOf(uid) < 0) claim.declinedBy.push(uid);
    claim.status = claim.claimedBy ? claim.status : "pending";
    saveOrphanClaim(claim);
    return { ok: true };
  }
  function loadRaw(){
    try { return JSON.parse(localStorage.getItem(activePathKey()) || "null"); }
    catch (e) { return null; }
  }
  function saveStore(store){
    try { localStorage.setItem(activePathKey(), JSON.stringify(store)); } catch (e) {}
  }
  function loadSyncMeta(){
    try { return JSON.parse(localStorage.getItem(activeSyncKey()) || "null") || emptySyncMeta(authUserId()); }
    catch (e) { return emptySyncMeta(authUserId()); }
  }
  function saveSyncMeta(meta){
    try { localStorage.setItem(activeSyncKey(), JSON.stringify(meta)); } catch (e) {}
  }
  function emptySyncMeta(userId){
    return { userId: userId || null, levels: {}, conflicts: {}, notice: "" };
  }
  function isLevel(n){
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n && n >= 1 && n <= 9;
  }
  function emptyStore(activeLevel){
    return { v: 2, activeLevel: isLevel(activeLevel) ? activeLevel : 1, byLevel: {} };
  }
  function migrate(raw){
    if (!raw) return { store: emptyStore(1), error: null, migrated: false };
    if (raw.v === 2 && raw.byLevel && typeof raw.byLevel === "object") {
      var active = Number(raw.activeLevel);
      if (!isLevel(active)) {
        var keys = Object.keys(raw.byLevel);
        var first = keys.length ? Number(keys[0]) : 1;
        raw.activeLevel = isLevel(first) ? first : 1;
      }
      return { store: raw, error: null, migrated: false };
    }
    var looksFlat = ("level" in raw) || ("daily" in raw) || ("index" in raw) || ("xp" in raw) || ("todayDone" in raw) || ("on" in raw);
    if (looksFlat) {
      var lvl = Number(raw.level);
      if (!isLevel(lvl)) {
        return { store: null, error: "cannot_migrate_missing_level", migrated: false };
      }
      var entry = {
        on: !!raw.on,
        daily: raw.daily,
        index: raw.index,
        xp: raw.xp,
        today: raw.today,
        todayDone: raw.todayDone,
        lastDay: raw.lastDay
      };
      var store = emptyStore(lvl);
      store.byLevel[String(lvl)] = entry;
      return { store: store, error: null, migrated: true };
    }
    return { store: null, error: "cannot_migrate_unknown_shape", migrated: false };
  }
  function ensureStore(){
    var result = migrate(loadRaw());
    if (result.error) return result;
    if (result.migrated) saveStore(result.store);
    return result;
  }
  function getEntry(store, level){
    if (!store || !store.byLevel) return null;
    return store.byLevel[String(level)] || null;
  }
  function fingerprint(entry){
    if (!entry) return "";
    return JSON.stringify({
      on: !!entry.on,
      daily: Number(entry.daily) || 0,
      index: Number(entry.index) || 0,
      xp: Number(entry.xp) || 0,
      today: entry.today || "",
      todayDone: Number(entry.todayDone) || 0,
      lastDay: entry.lastDay || ""
    });
  }
  function cloneEntry(entry){
    return entry ? JSON.parse(JSON.stringify(entry)) : null;
  }
  function hasProgress(entry){
    return !!(entry && (
      (Number(entry.xp) || 0) > 0 ||
      (Number(entry.index) || 0) > 0 ||
      (Number(entry.todayDone) || 0) > 0 ||
      entry.lastDay ||
      entry.on
    ));
  }
  function today(){
    return serverDay.ok ? serverDay.value : null;
  }
  function putEntry(store, level, entry){
    store.byLevel[String(level)] = entry;
    store.activeLevel = level;
    saveStore(store);
    if (!applyingRemote) {
      markDirty(level, entry);
      schedulePushLevel(level);
    }
  }
  function markDirty(level, entry){
    var meta = loadSyncMeta();
    var key = String(level);
    if (!meta.levels[key]) meta.levels[key] = { baseRevision: 0, syncedFp: "" };
    var slot = meta.levels[key];
    slot.dirty = fingerprint(entry) !== (slot.syncedFp || "");
    saveSyncMeta(meta);
  }
  function markSynced(level, entry, revision){
    var meta = loadSyncMeta();
    var key = String(level);
    meta.levels[key] = {
      baseRevision: Number(revision) || 0,
      syncedFp: fingerprint(entry),
      dirty: false
    };
    if (meta.conflicts && meta.conflicts[key]) {
      // keep conflict until explicit resolve success clears it
    }
    saveSyncMeta(meta);
  }
  function clearConflict(level){
    var meta = loadSyncMeta();
    if (meta.conflicts) delete meta.conflicts[String(level)];
    saveSyncMeta(meta);
  }
  function saveConflict(level, localEntry, cloudRow, baseRevision){
    var meta = loadSyncMeta();
    if (!meta.conflicts) meta.conflicts = {};
    meta.conflicts[String(level)] = {
      local: cloneEntry(localEntry),
      cloud: cloudRowToEntry(cloudRow),
      cloudRow: cloudRow,
      cloudRevision: cloudRow && cloudRow.revision != null ? Number(cloudRow.revision) : null,
      baseRevision: baseRevision,
      savedAt: new Date().toISOString()
    };
    meta.notice = "Xung đột tiến độ HSK " + level + ". Hãy chọn bản thiết bị hoặc Cloud.";
    saveSyncMeta(meta);
  }
  function viewState(level, entry){
    return {
      level: level,
      on: !!(entry && entry.on),
      daily: entry && entry.daily,
      index: entry && entry.index,
      xp: entry && entry.xp,
      today: entry && entry.today,
      todayDone: entry && entry.todayDone,
      lastDay: entry && entry.lastDay
    };
  }
  function parseDaily(value){
    if (value === null || value === undefined) return null;
    var text = String(value).trim();
    if (!text) return null;
    if (!/^\d+$/.test(text)) return null;
    var num = Number(text);
    if (!isFinite(num) || Math.floor(num) !== num) return null;
    if (num < DAILY_MIN || num > DAILY_MAX) return null;
    return num;
  }
  function gapDays(from, to){
    if (!from || !to) return 0;
    var a = new Date(from + "T00:00:00");
    var b = new Date(to + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }
  function levelWords(level){
    if (typeof words === "undefined" || !Array.isArray(words)) return [];
    return words.filter(function(word){ return Number(word.hsk) === Number(level) && word.h && word.m; });
  }
  function pathStatus(state, list){
    if (!state || !state.on) return "Chưa học";
    if (list && state.index >= list.length) return "Đã hoàn thành";
    var day = today();
    if (day && state.today === day && state.todayDone >= state.daily) return "Đã hoàn thành";
    if (day && state.today === day && state.todayDone > 0) return "Đang học";
    if (!day && state.todayDone > 0) return "Đang học";
    return "Chưa học";
  }
  function streakText(state){
    if (!state || !state.lastDay) return "Chưa có ngày học";
    var day = today();
    if (!day) return "Ngày học gần nhất: " + state.lastDay;
    var gap = gapDays(state.lastDay, day);
    if (gap === 0) return "Đã học hôm nay";
    if (gap === 1) return "Hôm qua đã học · nối chuỗi hôm nay";
    return "Ngày học gần nhất: " + state.lastDay;
  }
  function sessionHint(daily){
    if (!(daily >= 300)) return "";
    return "Gợi ý: chia thành các phiên học nhỏ 20–50 từ.";
  }
  function reminder(state, list){
    var now = today();
    if (!now) return "Chưa lấy được ngày máy chủ. Tiến độ đang giữ nguyên, sẽ thử lại khi có kết nối.";
    var gap = gapDays(state.lastDay, now);
    if (state.index >= list.length) return "Tốt lắm. Bạn đã chinh phục HSK " + state.level + ". Có thể luyện thêm ở Test từ vựng.";
    if (state.today === now && state.todayDone >= state.daily) return "Bạn làm rất tốt. Hôm nay đã xong mục tiêu " + state.daily + " từ HSK " + state.level + ".";
    if (state.today === now && state.todayDone > 0) return "Còn " + (state.daily - state.todayDone) + "/" + state.daily + " từ mục tiêu hôm nay. Quay lại lộ trình hoặc luyện Test từ vựng nhé.";
    if (gap >= 10) return "Bạn đã bỏ " + gap + " ngày. Hôm nay học một đoạn ngắn trên lộ trình là đủ để nối lại.";
    if (gap >= 5) return "Bạn đã bỏ " + gap + " ngày. Vào lại lộ trình hôm nay — đừng reset từ đầu.";
    if (gap >= 2) return "Bạn đã bỏ " + gap + " ngày. Hôm nay hoàn thành đúng " + state.daily + " từ đã chọn.";
    if (gap === 1) return "Bạn bỏ lỡ 1 ngày. Hôm nay học tiếp mục tiêu " + state.daily + " từ nhé.";
    if (state.on) return "Chưa xong mục tiêu hôm nay: 0/" + state.daily + " từ HSK " + state.level + ". Vào lộ trình để bắt đầu.";
    return "Hôm nay bạn học " + state.daily + " từ HSK " + state.level + ".";
  }

  window.ttcGetVocabPathReminder = function(){
    return window.__ttcLastVocabPathReminder || "";
  };
  function nick(){
    var user = window.currentUser;
    var meta = user && user.user_metadata || {};
    var name = String(meta.display_name || meta.full_name || meta.nickname || meta.name || "").trim();
    if (name && name.indexOf("@") < 0) return name;
    return "Bạn";
  }
  function esc(text){
    return String(text || "").replace(/[&<>"']/g, function(ch){
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch];
    });
  }
  function shuffle(list){
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }
  var ACH_PAGE = 20;
  /* Trần an toàn cho MỘT lượt tải trọn danh sách một cấp HSK (xem loadAchievementLevel):
     chạm trần mà server vẫn còn dữ liệu thì nút "Tải thêm" nới tiếp thêm ACH_MAX_ROWS nữa. */
  var ACH_MAX_ROWS = 500;
  var achUi = { view: "closed", level: null, offset: 0, rows: [], loading: false, error: "", unavailable: false, reason: "", hasMore: false, loadingCount: 0, partialError: "", capped: false };

  function sortAchievementRows(rows){
    return (rows || []).slice().sort(function(a, b){
      var wordsA = Number(a && a.words_mastered) || 0;
      var wordsB = Number(b && b.words_mastered) || 0;
      if (wordsB !== wordsA) return wordsB - wordsA;
      var xpA = Number(a && a.xp) || 0;
      var xpB = Number(b && b.xp) || 0;
      if (xpB !== xpA) return xpB - xpA;
      return String((a && a.nickname) || "").localeCompare(String((b && b.nickname) || ""), "vi");
    });
  }

  /*
    Phase 3D — nguồn thật qua RPC ttc_hsk_achievement_board:
    - ĐÃ THUỘC: count ttc_vocab_memory theo hsk_level với status = 'mastered'
      HOẶC stability >= 1 (sửa phía server 2026-11-17: luật mastered thuần túy
      cần ~25 ngày ôn cách quãng mỗi từ nên mọi học viên đều 0 từ, bảng lặng lẽ
      xếp theo EXP — trái ý chủ web "xếp hạng theo số từ đã thuộc")
    - EXP: ttc_hsk_path_state.xp cùng cấp HSK
    - Nickname: community_nicknames.display_name (RPC ẩn nếu có @)
    RPC SECURITY DEFINER chỉ trả tổng hợp; không trả user_id/email/từ/event.
  */
  var achFetchCache = Object.create(null);
  var achFetchSeq = 0;
  var achFsState = { open: false, scrollY: 0 };
  function enterAchFullscreen(box){
    if (!box) return;
    if (!achFsState.open) achFsState.scrollY = window.scrollY || window.pageYOffset || 0;
    achFsState.open = true;
    try {
      if (!document.getElementById("ttcAchHostHome")) {
        var m = document.createElement("div");
        m.id = "ttcAchHostHome";
        m.hidden = true;
        m.setAttribute("aria-hidden", "true");
        if (box.parentNode) box.parentNode.insertBefore(m, box);
      }
      if (box.parentNode !== document.body) document.body.appendChild(box);
    } catch (eAchPortal) {}
    box.classList.add("ttc-ach-fs");
    document.body.classList.add("ttc-ach-fs-lock");
    try { box.scrollTop = 0; } catch (eAchFs) {}
  }
  function exitAchFullscreenClasses(box){
    if (box) box.classList.remove("ttc-ach-fs");
    document.body.classList.remove("ttc-ach-fs-lock");
    try {
      var home = document.getElementById("ttcAchHostHome");
      if (box && home && home.parentNode) home.parentNode.insertBefore(box, home.nextSibling);
    } catch (eAchHome) {}
    var was = achFsState.open;
    var y = achFsState.scrollY || 0;
    achFsState.open = false;
    if (was) {
      requestAnimationFrame(function(){
        try { window.scrollTo(0, y); } catch (eY) {}
      });
    }
  }
  function fetchHskAchievementPage(level, offset){
    var hsk = Number(level);
    var off = Math.max(0, Number(offset) || 0);
    if (!(hsk >= 1 && hsk <= 9)) {
      return Promise.resolve({
        ok: false,
        message: "Cấp HSK không hợp lệ.",
        rows: [],
        hasMore: false
      });
    }
    var cacheKey = hsk + ":" + off;
    var hit = achFetchCache[cacheKey];
    if (hit && (Date.now() - hit.at) < 30000 && hit.res && hit.res.ok) {
      return Promise.resolve(hit.res);
    }
    var client = null;
    try {
      client = typeof getSupabaseClient === "function" ? getSupabaseClient() : (window.supabase || null);
    } catch (e) {
      client = window.supabase || null;
    }
    if (!client || typeof client.rpc !== "function") {
      return Promise.resolve({
        ok: false,
        message: "Chưa kết nối được máy chủ.",
        rows: [],
        hasMore: false
      });
    }
    var seq = ++achFetchSeq;
    return client.rpc("ttc_hsk_achievement_board", {
      p_hsk_level: hsk,
      p_limit: ACH_PAGE,
      p_offset: off
    }).then(function(res){
      if (seq !== achFetchSeq && off === 0) {
        /* phản hồi cũ khi đổi cấp nhanh — vẫn parse an toàn bên dưới */
      }
      if (res && res.error) {
        return {
          ok: false,
          message: (res.error && res.error.message) ? res.error.message : "Lỗi tải bảng thành tích.",
          rows: [],
          hasMore: false
        };
      }
      var data = res && res.data;
      if (!data || data.ok === false) {
        return {
          ok: false,
          message: (data && (data.message || data.status)) ? String(data.message || data.status) : "Không lấy được dữ liệu thành tích.",
          rows: [],
          hasMore: false
        };
      }
      var raw = Array.isArray(data.rows) ? data.rows : [];
      var rows = [];
      for (var i = 0; i < raw.length; i++) {
        var r = raw[i] || {};
        var nick = String(r.nickname || "").trim();
        if (!nick || nick.indexOf("@") >= 0) nick = "Bạn học";
        if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(nick)) {
          nick = "Bạn học";
        }
        rows.push({
          rank: Number(r.rank) || (off + i + 1),
          nickname: nick,
          hsk_level: Number(r.hsk_level) || hsk,
          words_mastered: Math.max(0, Number(r.words_mastered) || 0),
          xp: Math.max(0, Number(r.xp) || 0)
        });
      }
      var out = {
        ok: true,
        rows: rows,
        hasMore: !!data.has_more,
        message: ""
      };
      achFetchCache[cacheKey] = { at: Date.now(), res: out };
      return out;
    }).catch(function(err){
      return {
        ok: false,
        message: (err && err.message) ? err.message : "Lỗi mạng khi tải bảng thành tích.",
        rows: [],
        hasMore: false
      };
    });
  }

  function medalForRank(rank){
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "";
  }

  function renderAchievementClosed(){
    return ""
      + "<button type='button' class='ttc-ach-launch' id='ttcAchOpen'>"
      + "<span class='ttc-ach-cup' aria-hidden='true'>🏆</span>"
      + "<span class='ttc-ach-launch-text'>BẢNG THÀNH TÍCH HSK</span>"
      + "<span class='ttc-ach-launch-hint'>👉 Nhấn xem</span>"
      + "</button>";
  }

  function renderAchievementMascot(){
    return ""
      + "<div class='ttc-ach-mascot-wrap' aria-hidden='true'>"
      + "<img class='otter2-host-mascot' data-otter2-pose='cheer' src='assets/index2/mascot/poses/otter-cheer.jpg' alt='' width='140' height='140' decoding='async' />"
      + "</div>";
  }

  function renderAchievementLevels(){
    var html = ""
      + "<div class='ttc-ach-panel'>"
      + "<div class='ttc-ach-toolbar'>"
      + "<button type='button' class='ttc-ach-back' id='ttcAchBackClosed'>← Thu gọn</button>"
      + "<strong class='ttc-ach-title'>Chọn cấp HSK</strong>"
      + "<button type='button' class='ttc-ach-exit' id='ttcAchExit'>✕ THOÁT</button>"
      + "</div>"
      + renderAchievementMascot()
      + "<div class='ttc-ach-levels' role='list'>";
    for (var i = 1; i <= 9; i++) {
      html += "<button type='button' class='ttc-ach-level' data-hsk='" + i + "' role='listitem'>HSK " + i + "</button>";
    }
    html += "</div></div>";
    return html;
  }

  function sortAchievementRows(rows){
    return (rows || []).slice().sort(function(a, b){
      var wa = Number(a && a.words_mastered) || 0;
      var wb = Number(b && b.words_mastered) || 0;
      if (wb !== wa) return wb - wa;
      var xa = Number(a && a.xp) || 0;
      var xb = Number(b && b.xp) || 0;
      return xb - xa;
    });
  }
  window.ttcSortAchievementRows = sortAchievementRows;
  function renderAchievementRows(level, rows, offset){
    if (!rows || !rows.length) {
      return "<p class='ttc-ach-empty'>Chưa có dữ liệu thành tích cho HSK " + level + ".</p>";
    }
    rows = sortAchievementRows(rows);
    var html = "<div class='ttc-ach-table' role='table' aria-label='Bảng thành tích HSK " + level + "'>"
      + "<div class='ttc-ach-head' role='row'>"
      + "<span>Hạng</span><span>Nickname</span><span>HSK</span><span title='Tiêu chí xếp hạng chính: số từ đã thuộc (từ đã ôn đúng, độ ổn định ≥ 1 trong bộ nhớ từ vựng, gồm cả từ mastered)'>Đã thuộc ↓</span><span title='Điểm cần cù (siêng năng học tập) — chỉ dùng phân hạng khi bằng số từ đã thuộc'>EXP · cần cù</span>"
      + "</div>";
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i] || {};
      /* Sửa 2026-11-17 theo ý chủ web: hạng hiển thị = vị trí SAU khi sắp xếp
         theo luật mới (số từ đã thuộc ↓, EXP ↓) trong danh sách đã tải.
         KHÔNG dùng row.rank của RPC nữa — rank máy chủ đi theo thứ tự riêng
         của server (theo EXP) nên trước đây số hạng/huy chương lệch hẳn
         khỏi tiêu chí số từ. EXP chỉ còn là điểm cần cù + tiêu chí phụ. */
      var rank = i + 1;
      var medal = medalForRank(rank);
      var top = rank <= 3 ? " ttc-ach-top" + rank : "";
      var nick = String(row.nickname || "Bạn học");
      if (nick.indexOf("@") >= 0) nick = "Bạn học";
      var masteredN = Math.max(0, Number(row.words_mastered) || 0);
      var xpN = Math.max(0, Number(row.xp) || 0);
      html += "<div class='ttc-ach-row" + top + "' role='row'>"
        + "<span class='ttc-ach-rank'>" + (medal ? medal + " " : "") + rank + "</span>"
        + "<span class='ttc-ach-nick' title='" + esc(nick) + "'>" + esc(nick) + "</span>"
        + "<span class='ttc-ach-hsk'>HSK " + (Number(row.hsk_level) || level) + "</span>"
        + "<span class='ttc-ach-words' data-ttc-field='words_mastered' aria-label='Đã thuộc " + masteredN + " từ'>" + masteredN + " từ</span>"
        + "<span class='ttc-ach-xp' data-ttc-field='xp' aria-label='EXP " + xpN + "'>" + xpN + "</span>"
        + "</div>";
    }
    html += "</div>";
    return html;
  }

  function renderAchievementBoard(){
    var level = achUi.level;
    var html = ""
      + "<div class='ttc-ach-panel'>"
      + "<div class='ttc-ach-toolbar'>"
      + "<button type='button' class='ttc-ach-back' id='ttcAchBackLevels'>← Chọn cấp</button>"
      + "<strong class='ttc-ach-title'>HSK " + level + "</strong>"
      + "<button type='button' class='ttc-ach-refresh' id='ttcAchRefresh'>Làm mới</button>"
      + "<button type='button' class='ttc-ach-exit' id='ttcAchExit'>✕ THOÁT</button>"
      + "</div>"
      + renderAchievementMascot();
    if (achUi.loading) {
      html += "<p class='ttc-ach-status'>Đang tải bảng thành tích HSK " + level + "…"
        + (achUi.loadingCount ? " (đã tải " + achUi.loadingCount + " người)" : "")
        + "</p>";
    } else if (achUi.unavailable) {
      html += "<p class='ttc-ach-status ttc-ach-warn'>" + esc(achUi.reason || "Chưa có nguồn dữ liệu công khai hợp lệ.") + "</p>"
        + "<p class='ttc-ach-note'>Thứ tự xếp hạng khi có dữ liệu: số từ thực sự ghi nhớ ↓, rồi EXP ↓. Không dùng EXP thay số từ ghi nhớ. Không tạo số liệu giả.</p>";
    } else if (achUi.error) {
      html += "<p class='ttc-ach-status ttc-ach-error'>Không tải được dữ liệu. " + esc(achUi.error) + "</p>";
    } else {
      html += renderAchievementRows(level, achUi.rows, achUi.offset);
      if (achUi.rows && achUi.rows.length) {
        html += "<p class='ttc-ach-note'>🏆 Xếp hạng theo <b>số từ đã thuộc</b> ↓ · EXP là điểm cần cù (siêng năng), chỉ phân hạng khi bằng số từ.</p>";
      }
      if (achUi.partialError) {
        html += "<p class='ttc-ach-status ttc-ach-error'>⚠️ Chưa tải hết được danh sách (" + esc(achUi.partialError) + ") — thứ hạng trên mới tính trên " + (achUi.rows ? achUi.rows.length : 0) + " người đã tải. Bấm “Tải thêm” để thử tải tiếp.</p>";
      }
      if (achUi.hasMore) {
        html += "<button type='button' class='ttc-ach-more' id='ttcAchMore'>Tải thêm</button>";
      } else if (achUi.rows && achUi.rows.length) {
        html += "<p class='ttc-ach-note'>Đã tải hết toàn bộ danh sách.</p>";
      }
    }
    html += "</div>";
    return html;
  }

  function paintAchievementBoard(box){
    if (!box) return;
    if (achUi.view === "closed") {
      box.innerHTML = renderAchievementClosed();
      exitAchFullscreenClasses(box);
    } else if (achUi.view === "levels") {
      box.innerHTML = renderAchievementLevels();
      enterAchFullscreen(box);
    } else {
      box.innerHTML = renderAchievementBoard();
      enterAchFullscreen(box);
    }
    bindAchievementBoard(box);
  }

  var achLoadSeq = 0;
  /*
    Xử lý nợ phân trang (2026-11-17, chủ web duyệt phương án phía client):
    RPC ttc_hsk_achievement_board phân trang theo THỨ TỰ CỦA SERVER (theo EXP),
    nên nếu client chỉ tải từng trang 20 hàng như trước, người nhiều từ nhưng
    EXP thấp có thể nằm ngoài các trang đầu và thứ hạng toàn cục bị sai.
    Nay mỗi lần mở bảng / đổi cấp / làm mới, client tự vòng tải HẾT các trang
    của cấp đó (tới khi has_more = false) rồi mới xếp hạng trên toàn bộ danh
    sách theo luật hiện hành (số từ đã thuộc ↓, EXP ↓).
    - Trần an toàn: mỗi lượt tải tối đa ACH_MAX_ROWS hàng; chạm trần mà server
      còn dữ liệu (has_more) thì nút "Tải thêm" vẫn hiện để nới tiếp.
    - Lỗi giữa chừng: giữ phần đã tải, báo rõ thứ hạng mới tính trên phần đó
      (achUi.partialError) và để "Tải thêm" thử tải tiếp từ đúng vị trí dở dang.
    - Đổi cấp/đóng bảng giữa chừng: achLoadSeq + kiểm tra view/level khiến
      lượt tải cũ tự hủy, không ghi đè lên màn hình hiện tại.
    Bản sửa gốc rễ phía server (RPC ORDER BY words_mastered DESC, xp DESC)
    đã soạn nháp ở ~/workspace/supabase_fix/ — khi nào áp dụng thì vòng tải
    này vẫn đúng, chỉ là tải ít trang hơn.
  */
  function loadAchievementLevel(box, level, append){
    achUi.view = "board";
    achUi.level = level;
    achUi.loading = true;
    achUi.error = "";
    achUi.partialError = "";
    achUi.unavailable = false;
    var mySeq = ++achLoadSeq;
    var acc = append ? achUi.rows.slice() : [];
    if (!append) {
      achUi.offset = 0;
      achUi.rows = [];
      achUi.capped = false;
      try {
        var ck;
        for (ck in achFetchCache) {
          if (Object.prototype.hasOwnProperty.call(achFetchCache, ck) && String(ck).indexOf(String(level) + ":") === 0) {
            delete achFetchCache[ck];
          }
        }
      } catch (eClr) {}
    }
    var targetCap = acc.length + ACH_MAX_ROWS;
    achUi.loadingCount = acc.length;
    paintAchievementBoard(box);
    var off = acc.length;
    var serverHasMore = true;
    function stale(){
      return mySeq !== achLoadSeq || achUi.view !== "board" || Number(achUi.level) !== Number(level);
    }
    function finish(outcome){
      if (stale()) return;
      achUi.loading = false;
      achUi.loadingCount = 0;
      if (outcome && outcome.error) {
        achUi.unavailable = false;
        achUi.error = outcome.error;
        achUi.rows = [];
        achUi.hasMore = false;
        achUi.capped = false;
        achUi.partialError = "";
      } else {
        achUi.unavailable = false;
        achUi.error = "";
        achUi.rows = sortAchievementRows(acc);
        achUi.offset = achUi.rows.length;
        achUi.partialError = (outcome && outcome.partialError) || "";
        achUi.capped = !!(serverHasMore && acc.length >= targetCap);
        achUi.hasMore = !!((outcome && outcome.hasMore) || achUi.capped);
      }
      paintAchievementBoard(box);
    }
    function step(){
      if (stale()) return;
      if (!serverHasMore || acc.length >= targetCap) {
        finish(null);
        return;
      }
      fetchHskAchievementPage(level, off).then(function(res){
        if (stale()) return;
        if (!res || !res.ok) {
          var msg = (res && res.message) || "Lỗi tải dữ liệu.";
          if (!acc.length) finish({ error: msg });
          else finish({ partialError: msg, hasMore: true });
          return;
        }
        var pageRows = res.rows || [];
        acc = acc.concat(pageRows);
        off += pageRows.length;
        /* Trang rỗng mà has_more vẫn true: coi như hết để tránh vòng lặp vô hạn */
        serverHasMore = !!res.hasMore && pageRows.length > 0;
        achUi.loadingCount = acc.length;
        paintAchievementBoard(box);
        step();
      }).catch(function(err){
        if (stale()) return;
        var msg = (err && err.message) ? err.message : "Lỗi mạng.";
        if (!acc.length) finish({ error: msg });
        else finish({ partialError: msg, hasMore: true });
      });
    }
    step();
  }

  function bindAchievementBoard(box){
    var openBtn = box.querySelector("#ttcAchOpen");
    if (openBtn) {
      openBtn.addEventListener("click", function(){
        achUi.view = "levels";
        achUi.level = null;
        paintAchievementBoard(box);
      });
    }
    function closeAchievementFullscreen(){
      achUi.view = "closed";
      achUi.level = null;
      achUi.rows = [];
      achUi.hasMore = false;
      achUi.loading = false;
      achUi.error = "";
      achUi.partialError = "";
      achUi.capped = false;
      achUi.loadingCount = 0;
      achUi.unavailable = false;
      paintAchievementBoard(box);
    }
    var exitBtn = box.querySelector("#ttcAchExit");
    if (exitBtn) {
      exitBtn.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        closeAchievementFullscreen();
      });
    }
    var backClosed = box.querySelector("#ttcAchBackClosed");
    if (backClosed) {
      backClosed.addEventListener("click", function(){
        closeAchievementFullscreen();
      });
    }
    var backLevels = box.querySelector("#ttcAchBackLevels");
    if (backLevels) {
      backLevels.addEventListener("click", function(){
        achUi.view = "levels";
        achUi.level = null;
        achUi.rows = [];
        paintAchievementBoard(box);
      });
    }
    Array.prototype.forEach.call(box.querySelectorAll(".ttc-ach-level"), function(btn){
      btn.addEventListener("click", function(){
        var level = Number(btn.getAttribute("data-hsk"));
        if (!(level >= 1 && level <= 9)) return;
        Array.prototype.forEach.call(box.querySelectorAll(".ttc-ach-level"), function(b){
          b.classList.toggle("is-active", Number(b.getAttribute("data-hsk")) === level);
        });
        loadAchievementLevel(box, level, false);
      });
      if (achUi.level && Number(btn.getAttribute("data-hsk")) === Number(achUi.level)) {
        btn.classList.add("is-active");
      }
    });
    var refresh = box.querySelector("#ttcAchRefresh");
    if (refresh && achUi.level) {
      refresh.addEventListener("click", function(){
        loadAchievementLevel(box, achUi.level, false);
      });
    }
    var more = box.querySelector("#ttcAchMore");
    if (more && achUi.level) {
      more.addEventListener("click", function(){
        achUi.offset = achUi.rows.length;
        loadAchievementLevel(box, achUi.level, true);
      });
    }
  }

  function syncBoard(state, box){
    if (!box) return;
    /* state chỉ dùng để gợi ý cấp đang học khi lần đầu mở; không tải sẵn danh sách */
    if (state && isLevel(Number(state.level)) && achUi.view === "closed" && achUi.level == null) {
      achUi.hintLevel = Number(state.level);
    }
    if (achUi.view === "board" && achUi.level) {
      paintAchievementBoard(box);
      return;
    }
    if (achUi.view === "levels") {
      paintAchievementBoard(box);
      return;
    }
    achUi.view = "closed";
    paintAchievementBoard(box);
  }

  function cloudRowToEntry(row){
    if (!row) return null;
    return {
      on: !!row.is_on,
      daily: Number(row.daily),
      index: Number(row.word_index) || 0,
      xp: Number(row.xp) || 0,
      today: row.today || "",
      todayDone: Number(row.today_done) || 0,
      lastDay: row.last_day || ""
    };
  }
  function normalizeEntryForPush(entry, day){
    var daily = parseDaily(entry && entry.daily);
    if (daily == null) daily = 15;
    var todayVal = (entry && entry.today) || day;
    if (!todayVal) return null;
    return {
      on: !!(entry && entry.on),
      daily: daily,
      index: Math.max(0, Number(entry && entry.index) || 0),
      xp: Math.max(0, Number(entry && entry.xp) || 0),
      today: todayVal,
      todayDone: Math.max(0, Number(entry && entry.todayDone) || 0),
      lastDay: (entry && entry.lastDay) || null
    };
  }
  function authUserId(){
    var u = window.currentUser || (window.otter2Account && window.otter2Account.user) || null;
    if (u && u.id) {
      if (!window.currentUser) window.currentUser = u;
      return String(u.id);
    }
    return null;
  }
  function canSync(){
    return !!(window.supabase && authUserId());
  }
  function fetchServerToday(){
    if (!window.supabase || typeof window.supabase.rpc !== "function") {
      serverDay = { ok: false, value: null, error: "no_supabase", fetchedAt: Date.now() };
      return Promise.resolve(serverDay);
    }
    return window.supabase.rpc("ttc_server_today").then(function(res){
      if (res && !res.error && res.data) {
        var value = String(res.data).slice(0, 10);
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          serverDay = { ok: true, value: value, error: null, fetchedAt: Date.now() };
          return serverDay;
        }
      }
      serverDay = { ok: false, value: null, error: (res && res.error && res.error.message) || "bad_date", fetchedAt: Date.now() };
      return serverDay;
    }).catch(function(err){
      serverDay = { ok: false, value: null, error: String(err && err.message || err), fetchedAt: Date.now() };
      return serverDay;
    });
  }
  function pullCloudMap(){
    if (!canSync()) return Promise.resolve({ ok: false, map: {}, error: "no_auth" });
    return window.supabase
      .from("ttc_hsk_path_state")
      .select("user_id,hsk_level,is_on,daily,word_index,xp,today,today_done,last_day,revision,updated_at")
      .then(function(res){
        if (res.error) return { ok: false, map: {}, error: res.error.message || "pull_failed" };
        var map = {};
        (res.data || []).forEach(function(row){
          map[String(row.hsk_level)] = row;
        });
        return { ok: true, map: map, error: null };
      })
      .catch(function(err){
        return { ok: false, map: {}, error: String(err && err.message || err) };
      });
  }
  function pushCas(level, entry, baseRevision){
    if (!canSync()) return Promise.resolve({ ok: false, status: "not_authenticated" });
    var day = today();
    var payload = normalizeEntryForPush(entry, day);
    if (!payload) {
      return Promise.resolve({ ok: false, status: "error", message: "missing_server_day_or_today" });
    }
    return window.supabase.rpc("ttc_hsk_path_upsert_cas", {
      p_hsk_level: Number(level),
      p_is_on: !!payload.on,
      p_daily: payload.daily,
      p_word_index: payload.index,
      p_xp: payload.xp,
      p_today: payload.today,
      p_today_done: payload.todayDone,
      p_last_day: payload.lastDay || null,
      p_base_revision: Number(baseRevision)
    }).then(function(res){
      if (res.error) return { ok: false, status: "error", message: res.error.message || "rpc_error" };
      var data = res.data;
      if (typeof data === "string") {
        try { data = JSON.parse(data); } catch (e) {}
      }
      if (!data || typeof data !== "object") return { ok: false, status: "error", message: "bad_rpc_payload" };
      return data;
    }).catch(function(err){
      return { ok: false, status: "error", message: String(err && err.message || err) };
    });
  }
  function applyCloudToLocal(store, level, cloudRow){
    var entry = cloudRowToEntry(cloudRow);
    if (!entry) return;
    applyingRemote = true;
    try {
      putEntry(store, level, entry);
      markSynced(level, entry, cloudRow.revision);
    } finally {
      applyingRemote = false;
    }
  }
  function entriesEqual(a, b){
    return fingerprint(a) === fingerprint(b);
  }
  function reconcileLevel(store, level, cloudRow){
    var key = String(level);
    var local = getEntry(store, level);
    var meta = loadSyncMeta();
    var slot = meta.levels[key] || { baseRevision: 0, syncedFp: "", dirty: false };
    var localExists = hasProgress(local) || !!(local && parseDaily(local.daily) != null);
    var cloudExists = !!cloudRow;

    if (!localExists && cloudExists) {
      applyCloudToLocal(store, level, cloudRow);
      return { status: "restored" };
    }
    if (localExists && !cloudExists) {
      return pushCas(level, local, 0).then(function(result){
        if (result && result.ok && result.status === "ok") {
          markSynced(level, local, result.revision);
          return { status: "uploaded" };
        }
        if (result && result.status === "conflict") {
          saveConflict(level, local, result.row, 0);
          return { status: "conflict" };
        }
        return { status: "push_failed", detail: result };
      });
    }
    if (!localExists && !cloudExists) return Promise.resolve({ status: "empty" });

    var dirty = fingerprint(local) !== (slot.syncedFp || "");
    if (!slot.syncedFp && cloudExists && localExists) {
      if (entriesEqual(local, cloudRowToEntry(cloudRow))) {
        markSynced(level, local, cloudRow.revision);
        return Promise.resolve({ status: "aligned" });
      }
      saveConflict(level, local, cloudRow, slot.baseRevision || 0);
      return Promise.resolve({ status: "conflict" });
    }

    if (!dirty) {
      if (cloudExists && Number(cloudRow.revision) > Number(slot.baseRevision || 0)) {
        applyCloudToLocal(store, level, cloudRow);
        return Promise.resolve({ status: "pulled" });
      }
      return Promise.resolve({ status: "unchanged" });
    }

    var base = Number(slot.baseRevision || 0);
    if (cloudExists && Number(cloudRow.revision) !== base) {
      saveConflict(level, local, cloudRow, base);
      return Promise.resolve({ status: "conflict" });
    }
    return pushCas(level, local, base).then(function(result){
      if (result && result.ok && result.status === "ok") {
        markSynced(level, local, result.revision);
        return { status: "pushed" };
      }
      if (result && result.status === "conflict") {
        saveConflict(level, local, result.row, base);
        return { status: "conflict" };
      }
      return { status: "push_failed", detail: result };
    });
  }
  function runSyncAll(reason){
    if (!canSync() || syncAllInFlight) return Promise.resolve({ skipped: true });
    syncAllInFlight = true;
    var uid = authUserId();
    var meta = loadSyncMeta();
    if (meta.userId && meta.userId !== uid) {
      meta = emptySyncMeta(uid);
      saveSyncMeta(meta);
    } else if (!meta.userId) {
      meta.userId = uid;
      saveSyncMeta(meta);
    }
    if (orphanPendingForCurrentUser()) {
      meta.notice = "Phát hiện tiến độ chưa gắn tài khoản. Chưa đồng bộ lên Cloud cho đến khi bạn xác nhận.";
      saveSyncMeta(meta);
    }
    return fetchServerToday().then(function(){
      var ensured = ensureStore();
      if (ensured.error) return { error: ensured.error };
      var store = ensured.store;
      return pullCloudMap().then(function(pulled){
        if (!pulled.ok) {
          meta = loadSyncMeta();
          meta.notice = "Chưa đồng bộ được với Cloud. Tiến độ trên máy vẫn được giữ.";
          saveSyncMeta(meta);
          return { error: pulled.error };
        }
        var tasks = [];
        var orphanPending = orphanPendingForCurrentUser();
        for (var level = 1; level <= 9; level++) {
          if (orphanPending) {
            var cloudRow = pulled.map[String(level)] || null;
            var local = getEntry(store, level);
            var localExists = hasProgress(local) || !!(local && parseDaily(local.daily) != null);
            if (!localExists && cloudRow) {
              tasks.push(Promise.resolve(reconcileLevel(store, level, cloudRow)));
            } else {
              tasks.push(Promise.resolve({ status: "orphan_hold" }));
            }
          } else {
            tasks.push(reconcileLevel(store, level, pulled.map[String(level)] || null));
          }
        }
        return Promise.all(tasks).then(function(results){
          meta = loadSyncMeta();
          var conflicts = Object.keys(meta.conflicts || {});
          if (conflicts.length) {
            meta.notice = "Có xung đột tiến độ HSK " + conflicts.join(", ") + ". Chọn bản Local hoặc Cloud.";
          } else if (!serverDay.ok) {
            meta.notice = "Chưa lấy được ngày máy chủ. Tiến độ đang giữ nguyên.";
          } else {
            meta.notice = "Đã đồng bộ tiến độ HSK theo tài khoản.";
          }
          saveSyncMeta(meta);
          if (typeof remountDraw === "function") remountDraw();
          return { ok: true, reason: reason || "", results: results };
        });
      });
    }).catch(function(err){
      var m = loadSyncMeta();
      m.notice = "Lỗi đồng bộ. Tiến độ local vẫn được giữ.";
      saveSyncMeta(m);
      return { error: String(err && err.message || err) };
    }).then(function(out){
      syncAllInFlight = false;
      return out;
    });
  }
  function schedulePushLevel(level){
    if (!canSync() || applyingRemote || orphanPendingForCurrentUser()) return;
    var key = String(level);
    if (pushTimers[key]) clearTimeout(pushTimers[key]);
    pushTimers[key] = setTimeout(function(){
      pushTimers[key] = null;
      pushOneLevel(level);
    }, 400);
  }
  function pushOneLevel(level){
    if (!canSync() || applyingRemote || syncAllInFlight) return Promise.resolve();
    var ensured = ensureStore();
    if (ensured.error) return Promise.resolve();
    var store = ensured.store;
    var entry = getEntry(store, level);
    if (!entry) return Promise.resolve();
    var meta = loadSyncMeta();
    if (meta.conflicts && meta.conflicts[String(level)]) return Promise.resolve();
    var slot = meta.levels[String(level)] || { baseRevision: 0, syncedFp: "" };
    if (fingerprint(entry) === (slot.syncedFp || "")) return Promise.resolve();
    if (!today()) {
      return fetchServerToday().then(function(){
        if (!today()) return;
        return pushOneLevel(level);
      });
    }
    var base = Number(slot.baseRevision || 0);
    return pushCas(level, entry, base).then(function(result){
      if (result && result.ok && result.status === "ok") {
        markSynced(level, entry, result.revision);
        return;
      }
      if (result && result.status === "conflict") {
        saveConflict(level, entry, result.row, base);
        if (typeof remountDraw === "function") remountDraw();
      }
    });
  }
  function resolveConflict(level, choice){
    var meta = loadSyncMeta();
    var conflict = meta.conflicts && meta.conflicts[String(level)];
    if (!conflict) return Promise.resolve({ ok: false, message: "no_conflict" });
    var ensured = ensureStore();
    if (ensured.error) return Promise.resolve({ ok: false, message: ensured.error });
    var store = ensured.store;

    if (choice === "cloud") {
      if (!conflict.cloud) return Promise.resolve({ ok: false, message: "missing_cloud" });
      applyingRemote = true;
      try {
        putEntry(store, level, cloneEntry(conflict.cloud));
        markSynced(level, conflict.cloud, conflict.cloudRevision || 0);
      } finally {
        applyingRemote = false;
      }
      clearConflict(level);
      meta = loadSyncMeta();
      meta.notice = "Đã chọn tiến độ Cloud cho HSK " + level + ".";
      saveSyncMeta(meta);
      if (typeof remountDraw === "function") remountDraw();
      return Promise.resolve({ ok: true, choice: "cloud" });
    }

    if (choice === "local") {
      var localEntry = conflict.local || getEntry(store, level);
      if (!localEntry) return Promise.resolve({ ok: false, message: "missing_local" });
      var base = conflict.cloudRevision != null ? Number(conflict.cloudRevision) : Number(conflict.baseRevision || 0);
      return fetchServerToday().then(function(){
        return pushCas(level, localEntry, base).then(function(result){
          if (result && result.ok && result.status === "ok") {
            applyingRemote = true;
            try {
              putEntry(store, level, cloneEntry(localEntry));
              markSynced(level, localEntry, result.revision);
            } finally {
              applyingRemote = false;
            }
            // keep previous cloud snapshot in conflict archive until success, then clear
            clearConflict(level);
            meta = loadSyncMeta();
            meta.notice = "Đã chọn tiến độ trên thiết bị này cho HSK " + level + ".";
            saveSyncMeta(meta);
            if (typeof remountDraw === "function") remountDraw();
            return { ok: true, choice: "local" };
          }
          if (result && result.status === "conflict") {
            saveConflict(level, localEntry, result.row, base);
            meta = loadSyncMeta();
            meta.notice = "Cloud vừa đổi lại. Hãy chọn lần nữa cho HSK " + level + ".";
            saveSyncMeta(meta);
            if (typeof remountDraw === "function") remountDraw();
            return { ok: false, status: "conflict" };
          }
          return { ok: false, detail: result };
        });
      });
    }
    return Promise.resolve({ ok: false, message: "bad_choice" });
  }
  function watchAuthForSync(){
    function tick(){
      var uid = authUserId();
      if (!uid) {
        if (lastAuthUserId) {
          lastAuthUserId = null;
          if (typeof remountDraw === "function") remountDraw();
        } else {
          lastAuthUserId = null;
        }
        return;
      }
      if (uid !== lastAuthUserId) {
        lastAuthUserId = uid;
        if (typeof remountDraw === "function") remountDraw();
        runSyncAll("auth");
      }
    }
    tick();
    setTimeout(tick, 800);
    setTimeout(tick, 2500);
    setTimeout(tick, 6000);
    if (window.supabase && window.supabase.auth && typeof window.supabase.auth.onAuthStateChange === "function") {
      window.supabase.auth.onAuthStateChange(function(){
        setTimeout(tick, 0);
        setTimeout(tick, 1200);
      });
    }
    setInterval(function(){
      if (!serverDay.ok) fetchServerToday();
      var uid = authUserId();
      if (uid && uid !== lastAuthUserId) tick();
    }, 15000);
  }
  fetchServerToday();
  watchAuthForSync();

  function pathCheckAccess(level){
    if (typeof checkPremiumAccess !== "function") return Promise.resolve(false);
    return Promise.resolve(checkPremiumAccess(Number(level))).then(function(ok){ return !!ok; }).catch(function(){ return false; });
  }

  window.ttcEnsurePathShell = function(){
    var hub = document.getElementById("ttcTopLearningHub");
    var shell = document.getElementById("ttcPathShell");
    function buildShellHtml(){
      return ""
        + "<div class='ttc-path-ach-row'>"
        +   "<div class='ttc-path-col'>"
        +     "<button type='button' id='ttcPathLauncher' class='ttc-path-launcher' aria-expanded='false' aria-controls='ttcPathPanel'>"
        +       "Học từ vựng theo lộ trình"
        +     "</button>"
        +     "<div id='ttcPathPanel' class='ttc-path-panel' hidden></div>"
        +   "</div>"
        +   "<div class='ttc-ach-col'>"
        +     "<div id='ttcAchHost' class='ttc-ach-host'></div>"
        +   "</div>"
        + "</div>";
    }
    if (!shell) {
      shell = document.createElement("div");
      shell.id = "ttcPathShell";
      shell.className = "ttc-path-shell";
      shell.innerHTML = buildShellHtml();
      if (hub) {
        var mountInside = !!(hub.closest && hub.closest("#otter2PathProgress")) || hub.getAttribute("data-otter2-path-host") === "1";
        if (mountInside) hub.appendChild(shell);
        else if (hub.parentNode) hub.insertAdjacentElement("afterend", shell);
        else document.body.insertBefore(shell, document.body.firstChild);
      } else {
        var main = document.querySelector("main");
        if (main && main.firstChild) main.insertBefore(shell, main.firstChild);
        else document.body.insertBefore(shell, document.body.firstChild);
      }
    } else {
      if (hub && !hub.contains(shell)) {
        var mountInside2 = !!(hub.closest && hub.closest("#otter2PathProgress")) || hub.getAttribute("data-otter2-path-host") === "1";
        if (mountInside2) hub.appendChild(shell);
        else if (hub.parentNode) hub.insertAdjacentElement("afterend", shell);
      }
      if (!shell.querySelector(".ttc-path-ach-row") || !document.getElementById("ttcAchHost")) {
        var oldDaily = document.getElementById("ttcDailyVocab");
        shell.innerHTML = buildShellHtml();
        var newPanel = document.getElementById("ttcPathPanel");
        if (oldDaily && newPanel) newPanel.appendChild(oldDaily);
        var launcherFix = document.getElementById("ttcPathLauncher");
        if (launcherFix) {
          launcherFix.setAttribute("aria-expanded", "false");
          launcherFix.textContent = "Học từ vựng theo lộ trình";
        }
        if (newPanel) newPanel.hidden = true;
        try {
          document.body.classList.remove("ttc-path-fs-lock");
          newPanel && newPanel.classList.remove("ttc-path-fs");
          if (window.__ttcPathFsState) window.__ttcPathFsState.open = false;
        } catch (eShellFs) {}
      }
    }
    var pathFsState = window.__ttcPathFsState || (window.__ttcPathFsState = { open: false, scrollY: 0 });
    var pathSfx = window.__ttcPathSfx || (window.__ttcPathSfx = { muted: false, vol: 0.32, ctx: null });
    function pathSfxEnsure(){
      try {
        var C = window.AudioContext || window.webkitAudioContext;
        if (!C) return null;
        if (!pathSfx.ctx) pathSfx.ctx = new C();
        if (pathSfx.ctx.state === "suspended") pathSfx.ctx.resume().catch(function(){});
        return pathSfx.ctx;
      } catch (e) { return null; }
    }
    function pathSfxTone(freqs, dur, type){
      if (pathSfx.muted) return;
      var c = pathSfxEnsure(); if (!c) return;
      try {
        var now = c.currentTime;
        var t0 = Math.max(now, Number(pathSfx.nextAt) || 0);
        var lastStop = t0;
        (freqs || [523]).forEach(function(f, i){
          var o = c.createOscillator();
          var g = c.createGain();
          o.type = type || "sine";
          o.frequency.setValueAtTime(f, t0 + i * 0.05);
          g.gain.setValueAtTime(0.0001, t0 + i * 0.05);
          g.gain.exponentialRampToValueAtTime(Math.max(0.001, pathSfx.vol * 0.9), t0 + 0.02 + i * 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.22) + i * 0.04);
          o.connect(g); g.connect(c.destination);
          o.start(t0 + i * 0.05);
          var stopAt = t0 + (dur || 0.22) + i * 0.06 + 0.05;
          o.stop(stopAt);
          if (stopAt > lastStop) lastStop = stopAt;
        });
        pathSfx.nextAt = lastStop + 0.04;
      } catch (e2) {}
    }
    function pathSfxNoiseBurst(when, dur, peak){
      if (pathSfx.muted) return;
      var c = pathSfxEnsure(); if (!c) return;
      try {
        var len = Math.max(1, Math.floor(c.sampleRate * (dur || 0.08)));
        var buf = c.createBuffer(1, len, c.sampleRate);
        var data = buf.getChannelData(0);
        for (var i = 0; i < len; i++) {
          var env = Math.pow(1 - i / len, 2.2);
          data[i] = (Math.random() * 2 - 1) * env;
        }
        var src = c.createBufferSource();
        src.buffer = buf;
        var bp = c.createBiquadFilter();
        bp.type = "bandpass";
        bp.frequency.value = 1400;
        bp.Q.value = 0.85;
        var g = c.createGain();
        var t0 = Math.max(c.currentTime, Number(when) || c.currentTime);
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(Math.max(0.001, (pathSfx.vol || 0.32) * (peak || 0.55)), t0 + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.08));
        src.connect(bp); bp.connect(g); g.connect(c.destination);
        src.start(t0); src.stop(t0 + (dur || 0.08) + 0.02);
        pathSfx.nextAt = Math.max(Number(pathSfx.nextAt) || 0, t0 + (dur || 0.08) + 0.03);
      } catch (eN) {}
    }
    // Real audience applause+whoops (CC0): Freesound 381358 "Applause 4" by FunWithSound
    // https://freesound.org/people/FunWithSound/sounds/381358/ — owned by index2
    pathSfx._clapFile = "assets/index2/sfx/ttc-applause.mp3";
    pathSfx._clapDataUri = "data:audio/mpeg;base64,//uQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAGDAAPeOAAEBwoNEBIVFxkcHiEkJikrLTAyNTg6PT9CREdJTE9RU1ZZXF5gY2Voa21wc3V4enx/goWHiouPkpSWmZyeoKOlp6qsr7Kztri7vsHDxcjKzdDT1dja3d/h5Ofp6+3w8vX4+/0AAAA5TEFNRTMuOTlyAroAAAAALkQAADTAJAJATQAAwAAD3jjd/3wYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vgRAAAA+c0UhU9YAJ1yUqHpJgAatojQBm9AAVWxCjjNaAAAACx6x6ydnW7UhbBbBDAkYh5C1HZ48yrwHgCACACACAEgDwdFGhpT3ve9M0NDRjGf/8MYxn+96ZubjsNDkvNzd72Mrl73/+xjGMPve973pm5oaGhxjvwAAAzAAgAAAHh4ef///h///+AAAh/4GRAAAABAeHh4eGAAB/+Hh4AQoCAZBWKxWjkQBQEAQBMNk7dKIIZ2ggAAAACEND2eTJk7ghEf/+73vdnkyERBAgQiP+0RERd3e///3d3fi7u7uzyYAABBCO9/9oiIyyBAgQiP/Gf/xGXd7//7PJ2P//4AAD8AAwMADOh4AAAAABh4e/APDx4oKGluwBCDP24OJDTD02kfNEaDOY0yECIrozYmFlYxAhHUw1JSOCOTbG80IYt6ZamSghcAex8WGqLxpig0LGoJqBBhpYUUlh6ZkaZAODQauQKMaklsmisOOqy3yshcgCgHEQ1WWWtT+JQKEsRJFM2kAUAXdS5MsAM0DW6lQXpWamuIRRiBBMDLlNWJR8Alzw4+wxSt7XkQqh4umu9qAkDdNgieRfMAhG2jC7EgWrL9buChjaFpWlpUAUC2r4OhsuyosOCEpAMNFg7NlTSWlROgB+S08Wc1kjJGWt/BjQMKi6oLo38lTdYesMPhqM0T61bTxpSLOdqdeZtXDtuTPwiE2Hef2Iy+nnO6vTlFnEKePdmIDuyOL5bv4y/Cfo5W8MN9iU5N56whqMZVsqahsZZZf+Me5r//////////CzI5399/+0Mv///////////ntdu83c3+61roCGDAAAAAJYBGhdITjLtkIDOITcozaRDLvSsuPRzLCAGCMUhBBoziY4BE2y8CrFajFURACMABNAMBo+Qiwla6JYAACMuSCTGl1BhgGXPkSSSgjVZlNNH8iJSB3IblqQbFyoATJVc1oQA2nK4XQKCGSEgFA5Gt+rM2FFDNEswsGbi8BlQQABNyXQs54bij6Y4cGLOIEktYGVnEYNHNgaULZWbR8u7Az7slRfEYUHAZ10ExgoBSsIAb7kANDZOSCAQXLg4gosmEChqq1PEC5bOES2MtTibpQ/W97qVsEbh96HGafE1K5K3R2pe/MOx1ICLqHSlmTjQhgrhX30hMNT8HR+S0VqWcqyqF0MEXrN2KSOXPzA0p5WuU1iNwiLNxV+47sSx9o1urELMesYVZJJaL///q////////////IBicDc///lB3n/////////92Xyaav///vUX0pk+6tibgMGAIgLAXOHaCjGml7hAJEdEBkhft+AaAPJSg+yEjmC4MJKCeDCCADfP5TkvLA0l2LoW6JlX0b4KkUkytlQxJQ7zsqmakJalAphM//vQRCiGdg53VAdh4AC67uq457wAGeWdS2ywfsNivCnVh5q5DpfmS3IpFxVauu6bMwnjJDzGs+XTLl3bvH0J/CW3ceV9SLBiVestoU2Uk5sEaBm0VgiSV3WPFh4avnVvu1vq2Zpc1zX71X//Od//VaZ+9YxrW/nHp8W1////n/Gf/////9V3nfv///n/W///9fM0Vi+AAAADAF47xPCeBegwQTgn4XQQBtGESAm5MII83ouBGy+olxVzg2GiXxMNhez+y1uNU4pLyvMQZ4MPN8Zfs/ld+SGrm1Iqldwpz7bYbE2Q+3NMOFDXN7aZIdH7kwyRpGTDFHvDetzpdvIG4jYqHjBHhOLDGWHKFNSM2sDa+9quEfx/LTfnvbybxH1v/W8VkramdVr/nO/alvbGs/7xvFfb1/xrFPjMf/G/X/3/zXOPre6////////4/+4UBABh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VqsTXWth8IH+n5t44nF5M/jxsEpGslx1hWTwZc9yJTfg/k12gn5Hdawksttr6n4TAM3LZTJ4xRTXfuUVFFbfIYmJnVdpbd0jIOas49bGgq63qx3O98vvXr8pu0copbkWakziDmrLHlEKvU8zP7pc5RVp5XYllmmsyzdjO/UqXc7+rt/C92/2LNEXArHT0s+zuMzlydmZyC//////////////////////////////////////7qogAABAAAAGjIRcwAAM9C/U+asTmfvZjC8Z0FlglMGNDgsE2AQOiBTKzowo7MHTDR1YMATs6c0oqEncz0QLBIYAAmJCZiSeawH/++BEJAAI+GZRxm9gARosymvNaAATraN5/YSAIlg0br+wgATGmExwA2ceMmIDJYCjBgpToLgJhwiCBnysHC4UGKxYBkxDAAEwABLA8VgBgIAp5ayCybZWCpiep0p5TwKIvTb8uQXLTGTEC4Op9MZTzTy+UkbOpt/tn/022zNnd6ngK47rswI/rsQY7UWk7s/7lJtJdKeQTwctRpvtObLJWzyf///g3/+D4NgxT7kwb78OU5cG/BknknshfyJe/8kkq9JRG3SfSioKKDKKgovfF/Pf1/pJ/+01dsk9iPxp+KF/YeoP+NUMYa2/EY+TP40/1zSeSyV/P+TfJTAAAAAAAAAAAqIgGmECBJP3zCHIpJMM2FhiBYIFHCumUBm4JmpDCocEqjTnDIIDv5zKEjDojPuCwEVMYwaaAibwYcJYPPTjnzcH3wFmD4lvw4wYAOiugAQNTWTaZwisisWBanKKr5JHroapRM7UbUvfJ8g4IgU1T1TqlZyztIx82cPmtJ4VO4Pa57VGA+qX4Og+H3Ld6DIcht2GZQ1JIYT6oob/y5LVUMXyXMoikatD1pwap1B6nv9nDOnxcZnL5M6k8laq+SppL6PSpWRNU9qtHQe6MYWZ8boKF1mWwFEojB8GwfJb1y9BzKYxBsbjNBB0GQfQfQ+2VyI1Qv0u5tKCDoPjFBG3woI1J4hT3JK7sRi0VpZJJIlJblOrIImQgW2648rWWcqsjUHFAEYTWlWx+opDcES5/IHiESLRRiRcaUXtE57CeqSlLsk5xjWLMT7H8JMSZewuiMLpScjUZbr3HUEfk4QausRlGThjNUTWZN4mrJzcL3LnOr3EdWqsOCsgIT5gVnVjyOre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fly1+UdF9DQfCGlNMUktN82JvrQ3JJAUl+I37nv5Jvv3JJJvk0Gv/Jfh126BuToUUOXLjTIZu3nZdn4t/0n///8Wzzx+k5JY3T09v4xyfktb/jdllbPoEhyjkDt2f/////////////////////////////////////tz4xe/2z///RrUAAAAAAAgMJm2Jpgma6DggysoHIDSGTkLQLKDxZhHJ0zwjKG5fHSRGvTmRSCxuZNamWhpm4kBqU15VPAwzRiA2ViEDMYqciyoFQ0wVTBRQYeEAI1MQBmcGEASZbryEaPVuFAJSg0RXelI5AkRpkogpCpkThclnTAVqKKCMBV8oqYABuKo+/TJWBShcrLVbZiIxxxZ4sqiCYIBmFBLPS1KCqnozG32jLwum/Mi7HHgvvGsM3yj7SLC/YJl9K62b/T/+9BEYAAKTYdSxmtgAUaQumTNbABTQZ91/ZWAKoWz7Xu0wAWqKxW7YcCTSyXw5Ln01FHnnWWTkMsNhWsM5+61nlNT6pu0FPi7Eqqw9KLd6ZtwPRP85WMFxrCxjapZTPWYZoaWWcgKKVpQ/EKlkeh+iysUNyhib/S2BaKTym1S2dTUHZU0ShWTtT2Xcv/L/////////+3e/mOu6w/v///////////V1WqwdfrZV+RIEAAAAAAGJOnMFowGY7EA4ycoFFDBFznIzIwBauYhKcM4UDTIogHMMuBMGODkMwJzCCsLpxpAqYoZnZYJkgMGDYNXhQLMGDACAGQipkRAVAdElw0x2nl4hGCL5ASSXFQSvyBANnAVCIZBgAEARgYMjcmi/K63cYNJXWSZf1MEu65asLXXGR5XWlQqZrTc07HKbG0JUrJUrXmgGBWkOWzB5mNRF/33ZnXg+MyyLQOy6CYrLoq4T2xKV5SqG4XRJm1ojDkIfR8qsDNwkzIXjeeNPK/d7K1fzlUeg+IzENwTlEPu6fxpECxVp8WyjUL1jEZqktZfLZbQwLWsV7NLYa5Io3TPO+8ni+MG436l/Uqf+RN1g6cbV/13xaGM7U0/G+5cy7rX//6//////////sZ2N4cvaw////////////934/HrMmh/4cwyuhGQAXLKpNF1FE70JyWq9lKxAEF6RScGjI8smcCaaQzNiQSGwEQB+bGZYO57zxsoPzTpJScapG5qkjdXKRk80TZMnzQd9UomaJj0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dww46Zj5hI8MiPLAwyqASTIEX0Q6MLNgIRyLWNoHCkBKiCCz//vgRDEACeR7VU5vQAFAr1q8zegAEQ2bbfz0ACozJOy7sMABOGbrmaKycum3N+nIcGdVw4ScYoKhp3JBRO46Cm4GADQlnKegkAaGqRqaBTQRGIYfRtYoG5xiBpMwBMRtEw2pygwYZ2odY0hiCAaoX8pqWUP5F7sN34zDcTQCMk6mIWcQGZS9wXKZs7Toukur5NezuUmOGN2nT7YYyRdbO2Xq4nZ52Iora4Je19nCdt0lbkxqKDKGP3vf27SVrvyu7T09NKI325M8vXbli48FJWgyHqV2Z2vjTcuTGNSapf+/97////////////////79+nuuXA8FXaOrcvf/O8FaAAAAAAAwFEAAEMKAx8DJQoxIscky0HBQEKghFCjAYdU9mPnw6EiEKCxCYcACgSPEBiFQKFmqmmuClQMYdUZU+XULjmpFGPnGMVlQMARQsyBItbhKKT3NAOJlZihBWCZQAAqtCH0YpWZwIyQeHPZOv2X+sMmSCeVDjLVztCom/dNNRDdMJsigacSVC72zZtnTlnmBttBlpyJTATB3/daBWvsJXW7aElsDauwsmVTmLYZbb2/fU6HMtN0UokxctTdoa7q8OP7BsOv1K1E41evztytUwqS+w0y7Nxd/5S7CxJyD4lTxaGIbir+Ok80aopK+0ZvRt/rkUnLtBIrtNT01RxoAawoOpu3+4m5ysEticVhVSlnX1nXJbjGn2dKlnprH/v/e////////////////+/bp7rvwOpC7fq3L39BXLKfTopmgiABtNKOMwdJigvSXhoBKgYQwwvAkxfTBM8lJtMyHgFBkFYfmAJgsA0FAWBu4lEE05A5HicisYMUnOtbFIHqkooqaym604pJpFkHPxFUOh5aoKtdfi42rFpqY+u4j+dlscNmr0pV/mP4m5+auba2upRuxnP8ffrc/39ac/xPc971PdY6Zi1QxAwAACCH2EmwLTUmUiw5CayaTK1BGRPrEYbXa0Go456WxHKo+juAwLxQPa9aU9SurESxeexLrW91DUrLvXdZYZtMb0y89Mc9rW3r057OW3Vr9Vq/Vy5+1fzNvTP3Nnad213Jz5mdrmWtN72n5pa1K13pnrV1nuZmOA5+p+99yPm9dPdZ99wHH2392lacxAQAAAWv/lAwE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2w2yNxFbJRIoBfOApBZh521/uhPOOmvWeueicNsNYZEIef5/qrjt2b9r7W38ty5nEUn4lTwRMvzlLZqipYtE43Dl2LwY2jTFN4PjdNJGJVZiORFiKqrqTM9A0ZkcilksgP4m3Nt2WRCKX5RDkbp41Lsnlo4lZf10Yel2WMNy/GLSzC7SRmmtXLtqMTkYdd36SPxuelnbvKN3qGGcKWU3dVoZgKRS7PWuTtH////////////////+V+1/////////////////3VQgAAAAAAE0wUSgwAN9rnEMMAjJCE0dAIRsxsYMPGQQNogGbOwgFU6TPC824HNU7NtpM1yMttFMEmWeBJKP4qsBpozzILCTWAw5MXdIAJihTijiSBkti+4s+EYGAFNomX/gKBkQU8wqHUra2WnAoJ/nTSzgZWRBRdrrPa1xYxdhusTjEOOSp1SJwJkLBNFdx/LbbMoZYrGnIxBTVX7lQmRPgzdQ5mabcAxF0Xulr6XHfnIaMWBAI0WFmCEL0UMb8tgnws1Clq8sIQQFELxQVQxu08N3KeQ40suklYwoMMBorooLQaYxOLRSGV30zliICj0WyMGIQkoKoBZDM02Et+Lxa3YnIvPRWzfn3vWo7k4vdFdNctAlZADYGzO5A7/siZCl6hips6zCGStcj7yuq+NumxvWqLf///////////////nJocp/7//////////////8visLfPtqyFYTIgAA3JbbmdBcaKyTC/lHUvi07rrQiDkL5SHdlhLOXCBs1Chh0cCQpJJCmxANebykswciQyNWsagrClHpdD3osUOkkrtt2qfpW3tbSXnT75NknufFpsz/r+x7N77Tc3tRlwyKvl+2OO3/+6BENYAEnmha/2FgAI6ri07sLABSWX9djCR2QkUg6/mGDpjsk/vbXVX3fuhKUUadct3RHxrc/F82cm64dN66jVW6NcIvdF2zmbqIXqGUkEgAB639pRKMvEPATyQ4qbIB2bpyRxpjMVM4y4MOsCCRFFRPLRKHBDJpkoQRxN9oHXHiarbCxsQccfe9ZVqDkZPuKmXSylVDTtOa2F3dTSVLqMafQt/CHNSza3ffG+euqdUw+2K9texVKnufum2XHy6Zh1tmH9Nl33zs9rHTcfPakayDj35d0+qH479aAAAAAAVni5E5NxuvpTovs5X4udLeHkPYwOCAQA8y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Bu7+NikdfBldC0iG4dsvVyYsVLu4Jh6EyylibsRukvW3fl8EOrInbqOrOTs/IMohqH5iHpy/agN237k2V+Q1MpqRzEB25PVsU1uVw5SQB9HS5Z4fGalJDjtz1PL+Z1KSnoqlbHfcssIhY+5O53qW9/y67N9lcttzGFjuV+c3T8q6pKmOUU/u+fz//////////////89W+ff//////////////+9WlHEUgATgooASAQCZcKh3L8I0pLmmOGnalyQVFNqhMYFM+rAkBPVHEVompDGaGF3iyRkhIAomGAApaEEAhGusKgAMjAIgECizLEwABYc4IOLJVsyZ4YcIHEl0JUwI4TpsCVKzRocvjjY2aKhMsKBxcs/OPUidHoYkTnRt03emsLaABisodNubXmxSmGn4jbqwzLGKvJH4DgR07UCu6ruAI1AMifyYfGUwzMUEPXHatxeJSiXZMTtYoJy26XauIZic/23dr0sklMtp56dtX71+xVi1HPRh1I7GliMkqyycmMJ+VcpbEuu1YcpqO5VrblOeuxqi5hT1Z61hn8do8tzs//44TEN5af9+6S1rv9//////////////+3N2O/e//////////////+9F5X1KwAAvaCFWrBphhBj/++BEBYAHqWhTtmdAAO9NCpnM5AAf9ZVduZwABA686/czgADIwMHXQEHj2AMpVMDpUzjYIOR43dDvgMO9Lks6DX5gqxmBpkCIYwHrhk0JriK8UBxgjLJg4OhuoMiuuaToIU9h4gjwq5QQwQh/n9LQNLaavNRFALB0HOQ/aBJsrZUcWyy2AW3hEAt1eBWyNUDzyhx41DzqSx8aarSN2p4tFoVduyKkwsUTqfGox74xGKQFFWsyG1TRWGL0klrpRj4jGYxRf//9F8GUcbvPtGrn0l+muSm7RXKOl+7duVZJFuXKfH6kTuXL936f7l6AaKnv/9BE/u37n/fv7pP+5JpN92Sf96m/6WT35LJ//5PSCAAAB1+qASgDTDCDQaLUpeCwYYQQIs6IkUzgE4AqDPgM0oCmr0CwJCyBLA4gStT8LQmSWWRCw7ykIsodFIZPNSS6FFiy8OLMdR008UmF/JxlomlNPXoVhM5oqJuKcrVpK06SySHJfDLwOlGmcymM0LxurE4zD7ruk+EDO3AEDsqZdF4ndux2kf93b8WoqSljcNQA6TDnBfxZ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";
    pathSfx._clapPlayMs = 2500;    function pathSfxGetClapAudio(){
      var a = pathSfx._clapAudio;
      if (a) return a;
      a = new Audio();
      a.preload = "auto";
      try { a.setAttribute("playsinline", "true"); a.setAttribute("webkit-playsinline", "true"); } catch (eAttr) {}
      a.src = pathSfx._clapFile || "assets/index2/sfx/ttc-applause.mp3";
      a.addEventListener("error", function(){
        try {
          if (pathSfx._clapDataUri && a.src !== pathSfx._clapDataUri) a.src = pathSfx._clapDataUri;
        } catch (eSrc) {}
      });
      pathSfx._clapAudio = a;
      return a;
    }
    function pathSfxClap(){
      // Vỗ tay bình thường (chủ web 2026-11-17: bản cũ phát file khán giả vỗ
      // tay + hò reo 2,5s ở vol x1,45 — nghe "quá lố"). Nay chỉ là 6 tiếng vỗ
      // tay ngắn tổng hợp bằng noise burst qua bandpass (pathSfxNoiseBurst):
      // tổng ~0,95s, gain = vol x peak (<= ~0,16 ở vol mặc định 0,32, êm hơn
      // hẳn bản cũ ~0,46). KHÔNG giai điệu, KHÔNG nốt nhạc, KHÔNG file khán giả.
      if (pathSfx.muted) return;
      var nowMs = Date.now();
      if (pathSfx._clapLockUntil && nowMs < pathSfx._clapLockUntil) return;
      pathSfx._clapLockUntil = nowMs + 1300;
      var c = pathSfxEnsure(); if (!c) return;
      try {
        var t0 = c.currentTime + 0.02;
        var gaps = [0, 0.16, 0.33, 0.49, 0.66, 0.84];
        for (var i = 0; i < gaps.length; i++) {
          var jitter = i === 0 ? 0 : (Math.random() * 0.03 - 0.015);
          var peak = Math.max(0.34, 0.5 - i * 0.03);
          pathSfxNoiseBurst(t0 + gaps[i] + jitter, 0.09, peak);
        }
      } catch (eClap) {}
    }
    function pathSfxUnlockApplause(){
      try {
        pathSfxEnsure();
        var a = pathSfxGetClapAudio();
        a.muted = true;
        var p = a.play();
        if (p && typeof p.then === "function") {
          p.then(function(){
            try { a.pause(); a.currentTime = 0; a.muted = false; } catch (eU) {}
          }).catch(function(){
            try {
              if (pathSfx._clapDataUri) a.src = pathSfx._clapDataUri;
              a.muted = true;
              var p2 = a.play();
              if (p2 && typeof p2.then === "function") {
                p2.then(function(){ try { a.pause(); a.currentTime = 0; a.muted = false; } catch (eU2) {} })
                  .catch(function(){ try { a.muted = false; } catch (eU3) {} });
              } else { try { a.muted = false; } catch (eU4) {} }
            } catch (eU5) {}
          });
        } else {
          try { a.pause(); a.currentTime = 0; a.muted = false; } catch (eU6) {}
        }
      } catch (eUnlock) {}
    }    function pathSfxCheer(){
      if (pathSfx.muted) return;
      pathSfxTone([659.25, 783.99, 987.77, 1318.5], 0.22, "sawtooth");
      pathSfxTone([523.25, 659.25, 880], 0.28, "triangle");
    }
    function pathSfxPlay(kind){
      if (pathSfx.muted) return;
      if (kind === "win" || kind === "clap") {
        pathSfxClap();
      } else if (kind === "xp") pathSfxTone([880, 1174.7, 1318.5], 0.16, "sine");
      else if (kind === "lose") pathSfxTone([330, 247, 196], 0.14, "square");
    }
    window.ttcPathSfxPlay = pathSfxPlay;
    window.ttcPathSfxToggle = function(force){
      if (typeof force === "boolean") pathSfx.muted = force;
      else pathSfx.muted = !pathSfx.muted;
      try { localStorage.setItem("ttcPathSfxMuted", pathSfx.muted ? "1" : "0"); } catch (eM) {}
      try { pathSfxUnlockApplause(); } catch (eUn) {}
      return !pathSfx.muted;
    };
    try { pathSfx.muted = localStorage.getItem("ttcPathSfxMuted") === "1"; } catch (eL) {}
    try {
      var _volSaved = Number(localStorage.getItem("ttcPathSfxVol"));
      if (_volSaved >= 0.05 && _volSaved <= 0.7) pathSfx.vol = _volSaved;
    } catch (eV0) {}
    window.ttcPathSfxSetVol = function(v){
      var n = Number(v);
      if (!(n >= 0.05 && n <= 0.7)) n = 0.32;
      pathSfx.vol = n;
      try { localStorage.setItem("ttcPathSfxVol", String(n)); } catch (eVs) {}
      try { pathSfxUnlockApplause(); } catch (eUnVol) {}
      return pathSfx.vol;
    };
    if (!window.__ttcPathFsEscBound) {
      window.__ttcPathFsEscBound = true;
      document.addEventListener("keydown", function(ev){
        if (ev.key !== "Escape") return;
        if (!window.__ttcPathFsState || !window.__ttcPathFsState.open) return;
        if (typeof window.ttcExitPathFullscreen === "function") {
          ev.preventDefault();
          window.ttcExitPathFullscreen(true);
        }
      });
    }
    function pathParkFsToolbar(){
      // Keep toolbar DOM + listeners alive across box.innerHTML redraws.
      var panelEl = document.getElementById("ttcPathPanel");
      var bar = document.getElementById("ttcPathFsToolbar");
      var daily = document.getElementById("ttcDailyVocab");
      if (!panelEl || !bar) return;
      if (daily && daily.contains(bar)) {
        panelEl.appendChild(bar);
      }
    }
    function pathRemountFsToolbar(){
      var panelEl = document.getElementById("ttcPathPanel");
      if (!panelEl) return;
      if (!panelEl.classList.contains("ttc-path-fs")) return;
      try { ensurePathFsExitBtn(panelEl); } catch (eRemount) {}
    }
    function ensurePathFsExitBtn(panelEl){
      if (!panelEl) return;
      var dailyHost = document.getElementById("ttcDailyVocab");
      var hud = dailyHost ? dailyHost.querySelector(".ttc-path-game-hud") : null;
      var bar = (dailyHost && dailyHost.querySelector("#ttcPathFsToolbar"))
        || panelEl.querySelector("#ttcPathFsToolbar");
      if (!bar) {
        bar = document.createElement("div");
        bar.id = "ttcPathFsToolbar";
        bar.className = "ttc-path-fs-toolbar";
        bar.setAttribute("role", "toolbar");
        bar.setAttribute("aria-label", "Điều khiển lộ trình");
      }
      if (hud && hud.parentNode) {
        if (bar.previousElementSibling !== hud) hud.insertAdjacentElement("afterend", bar);
      } else if (bar.parentNode !== panelEl) {
        panelEl.insertBefore(bar, panelEl.firstChild);
      }
      var sfxBtn = bar.querySelector("#ttcPathSfxBtn") || panelEl.querySelector("#ttcPathSfxBtn");
      if (!sfxBtn) {
        sfxBtn = document.createElement("button");
        sfxBtn.type = "button";
        sfxBtn.id = "ttcPathSfxBtn";
        sfxBtn.className = "ttc-path-sfx-btn";
        sfxBtn.setAttribute("aria-label", "Bật tắt âm thanh game");
        sfxBtn.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          var on = window.ttcPathSfxToggle();
          sfxBtn.textContent = on ? "🔊 LOA" : "🔇 LOA";
        });
      }
      sfxBtn.textContent = pathSfx.muted ? "🔇 LOA" : "🔊 LOA";
      if (sfxBtn.parentNode !== bar) bar.appendChild(sfxBtn);
      var volWrap = bar.querySelector("#ttcPathSfxVolWrap") || panelEl.querySelector("#ttcPathSfxVolWrap");
      if (!volWrap) {
        volWrap = document.createElement("label");
        volWrap.id = "ttcPathSfxVolWrap";
        volWrap.className = "ttc-path-sfx-vol-wrap";
        volWrap.setAttribute("aria-label", "Âm lượng game lộ trình");
        volWrap.innerHTML = "<span class='ttc-path-sfx-vol-lab'>🔉 VOL-</span><input id='ttcPathSfxVol' class='ttc-path-sfx-vol' type='range' min='5' max='70' step='5' aria-label='Âm lượng' />";
        var volInput = volWrap.querySelector("#ttcPathSfxVol");
        if (volInput) {
          volInput.value = String(Math.round((pathSfx.vol || 0.32) * 100));
          volInput.addEventListener("input", function(){
            var pct = Number(volInput.value) || 32;
            if (typeof window.ttcPathSfxSetVol === "function") window.ttcPathSfxSetVol(pct / 100);
          });
        }
      } else {
        var volLab = volWrap.querySelector(".ttc-path-sfx-vol-lab");
        if (volLab) volLab.textContent = "🔉 VOL-";
        var volInput2 = volWrap.querySelector("#ttcPathSfxVol");
        if (volInput2) volInput2.value = String(Math.round((pathSfx.vol || 0.32) * 100));
      }
      if (volWrap.parentNode !== bar) bar.appendChild(volWrap);
      var btn = bar.querySelector("#ttcPathFsExit") || panelEl.querySelector("#ttcPathFsExit");
      if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.id = "ttcPathFsExit";
        btn.className = "ttc-path-fs-exit";
        btn.setAttribute("aria-label", "Thoát toàn màn hình lộ trình");
        btn.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          exitPathFullscreen(true);
        });
      }
      btn.textContent = "✕ THOÁT";
      if (btn.parentNode !== bar) bar.appendChild(btn);
      return btn;
    }
    var PATH_WORLD_TICKER_MSGS = [
      "🌟 Mỗi từ vựng hôm nay là một bước tiến đến HSK9!",
      "🎯 Đừng học để nhớ thật nhanh, hãy học để nhớ thật lâu!",
      "🏆 Bạn đã vượt qua chính mình của ngày hôm qua!",
      "🇨🇳 坚持就是胜利！Kiên trì chính là chiến thắng!",
      "💪 Đừng bỏ cuộc giữa chừng, thành quả đang chờ bạn!",
      "📚 Mỗi ngày một chút, kiến thức sẽ tích lũy thành thành công!",
      "✨ Học tiếng Trung không khó, điều quan trọng là kiên trì!",
      "🌸 今天也要加油！Hôm nay cũng hãy cố gắng nhé!",
      "🚀 Chinh phục từng từ vựng, tiến gần hơn đến mục tiêu HSK!",
      "❤️ Cảm ơn bạn đã dành thời gian học tập hôm nay!"
    ];
    var pathWorldTickerState = {
      idx: 0,
      timer: null,
      running: false,
      onAnimEnd: null
    };
    function pathWorldTickerPrefersReducedMotion(){
      try {
        return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      } catch (eM) { return false; }
    }
    function ensurePathWorldTicker(panelEl){
      if (!panelEl) panelEl = document.getElementById("ttcPathPanel");
      if (!panelEl) return null;
      var el = document.getElementById("ttcPathWorldTicker");
      if (!el) {
        el = document.createElement("div");
        el.id = "ttcPathWorldTicker";
        el.className = "ttc-path-world-ticker";
        el.setAttribute("aria-live", "off");
        el.innerHTML = "<div class='ttc-path-world-ticker-track'><span class='ttc-path-world-ticker-text'></span></div>";
      }
      /* Always keep a single ticker as first child of the FS panel. */
      if (el.parentNode !== panelEl || panelEl.firstChild !== el) {
        panelEl.insertBefore(el, panelEl.firstChild);
      }
      /* Remove accidental duplicates. */
      Array.prototype.forEach.call(panelEl.querySelectorAll(".ttc-path-world-ticker"), function(node){
        if (node !== el && node.parentNode) node.parentNode.removeChild(node);
      });
      return el;
    }
    function stopPathWorldTicker(){
      pathWorldTickerState.running = false;
      if (pathWorldTickerState.timer) {
        clearTimeout(pathWorldTickerState.timer);
        pathWorldTickerState.timer = null;
      }
      var el = document.getElementById("ttcPathWorldTicker");
      if (!el) return;
      var text = el.querySelector(".ttc-path-world-ticker-text");
      if (text) {
        if (pathWorldTickerState.onAnimEnd) {
          try { text.removeEventListener("animationend", pathWorldTickerState.onAnimEnd); } catch (eR) {}
          pathWorldTickerState.onAnimEnd = null;
        }
        text.style.animation = "none";
        text.style.transform = "";
        text.textContent = "";
      }
      el.classList.remove("is-running", "is-static");
    }
    function startPathWorldTicker(){
      var panelEl = document.getElementById("ttcPathPanel");
      if (!panelEl || !panelEl.classList.contains("ttc-path-fs")) {
        stopPathWorldTicker();
        return;
      }
      var el = ensurePathWorldTicker(panelEl);
      if (!el) return;
      if (pathWorldTickerState.running) return;
      pathWorldTickerState.running = true;
      function showNext(){
        if (!pathWorldTickerState.running) return;
        if (!panelEl.classList.contains("ttc-path-fs")) { stopPathWorldTicker(); return; }
        var text = el.querySelector(".ttc-path-world-ticker-text");
        var track = el.querySelector(".ttc-path-world-ticker-track");
        if (!text || !track) return;
        if (pathWorldTickerState.onAnimEnd) {
          try { text.removeEventListener("animationend", pathWorldTickerState.onAnimEnd); } catch (eR2) {}
          pathWorldTickerState.onAnimEnd = null;
        }
        if (pathWorldTickerState.timer) {
          clearTimeout(pathWorldTickerState.timer);
          pathWorldTickerState.timer = null;
        }
        var msg = PATH_WORLD_TICKER_MSGS[pathWorldTickerState.idx % PATH_WORLD_TICKER_MSGS.length];
        pathWorldTickerState.idx = (pathWorldTickerState.idx + 1) % PATH_WORLD_TICKER_MSGS.length;
        text.textContent = msg;
        text.style.animation = "none";
        text.style.transform = "";
        void text.offsetWidth;
        if (pathWorldTickerPrefersReducedMotion()) {
          el.classList.add("is-static");
          el.classList.remove("is-running");
          pathWorldTickerState.timer = setTimeout(showNext, 4000);
          return;
        }
        el.classList.remove("is-static");
        el.classList.add("is-running");
        var from = track.clientWidth || el.clientWidth || 300;
        var to = -(text.scrollWidth || text.offsetWidth || 200);
        var distance = from - to;
        var duration = Math.max(9, Math.min(28, distance / 85));
        text.style.setProperty("--ttc-ticker-from", from + "px");
        text.style.setProperty("--ttc-ticker-to", to + "px");
        text.style.animationDuration = duration + "s";
        text.style.animation = "ttcPathTickerRun " + duration + "s linear forwards";
        pathWorldTickerState.onAnimEnd = function(ev){
          if (ev && ev.target !== text) return;
          if (!pathWorldTickerState.running) return;
          el.classList.remove("is-running");
          pathWorldTickerState.timer = setTimeout(showNext, 2500);
        };
        text.addEventListener("animationend", pathWorldTickerState.onAnimEnd);
      }
      showNext();
    }
    function enterPathFullscreen(){
      var panelEl = document.getElementById("ttcPathPanel");
      if (!panelEl) return;
      if (!pathFsState.open) pathFsState.scrollY = window.scrollY || window.pageYOffset || 0;
      pathFsState.open = true;
      // index2: panel nằm trong .otter2-hero (overflow/isolation) nên fixed bị cắt —
      // đưa panel ra body để chiếm thật sự toàn viewport như index1.
      try {
        if (!document.getElementById("ttcPathPanelHome")) {
          var marker = document.createElement("div");
          marker.id = "ttcPathPanelHome";
          marker.hidden = true;
          marker.setAttribute("aria-hidden", "true");
          if (panelEl.parentNode) panelEl.parentNode.insertBefore(marker, panelEl);
        }
        if (panelEl.parentNode !== document.body) document.body.appendChild(panelEl);
      } catch (ePortal) {}
      document.body.classList.add("ttc-path-fs-lock");
      panelEl.classList.add("ttc-path-fs");
      panelEl.hidden = false;
      ensurePathFsExitBtn(panelEl);
      try { ensurePathWorldTicker(panelEl); } catch (eTk) {}
      try { panelEl.scrollTop = 0; } catch (eFs) {}
      try { startPathWorldTicker(); } catch (eStartTk) {}
    }
    function exitPathFullscreen(alsoCollapse){
      var panelEl = document.getElementById("ttcPathPanel");
      var launcherEl = document.getElementById("ttcPathLauncher");
      try { stopPathWorldTicker(); } catch (eStopTk) {}
      if (panelEl) panelEl.classList.remove("ttc-path-fs");
      document.body.classList.remove("ttc-path-fs-lock");
      var y = pathFsState.scrollY || 0;
      var wasOpen = pathFsState.open;
      pathFsState.open = false;
      // Trả panel về chỗ cũ trong shell (sau marker).
      try {
        var home = document.getElementById("ttcPathPanelHome");
        if (panelEl && home && home.parentNode) home.parentNode.insertBefore(panelEl, home.nextSibling);
      } catch (eHome) {}
      // Bắt buộc: thoát = đóng hẳn, không giữ khung học thu nhỏ.
      if (alsoCollapse !== false) {
        if (panelEl) panelEl.hidden = true;
        if (launcherEl) {
          launcherEl.setAttribute("aria-expanded", "false");
          launcherEl.textContent = "Học từ vựng theo lộ trình";
        }
      }
      if (wasOpen) {
        requestAnimationFrame(function(){
          try { window.scrollTo(0, y); } catch (eY) {}
        });
      }
    }
    window.ttcPathParkFsToolbar = pathParkFsToolbar;
    window.ttcPathRemountFsToolbar = pathRemountFsToolbar;
    window.ttcPathEnsureFsToolbar = ensurePathFsExitBtn;
    window.ttcEnterPathFullscreen = enterPathFullscreen;
    window.ttcExitPathFullscreen = exitPathFullscreen;
    window.ttcStartPathWorldTicker = startPathWorldTicker;
    window.ttcStopPathWorldTicker = stopPathWorldTicker;
    var launcher = document.getElementById("ttcPathLauncher");
    var panel = document.getElementById("ttcPathPanel");
    if (launcher && panel && launcher.dataset.bound !== "1") {
      launcher.dataset.bound = "1";
      launcher.addEventListener("click", function(){
        pathCheckAccess(1).then(function(ok){
          if (!ok) return;
          launcher.setAttribute("aria-expanded", "true");
          launcher.textContent = "Học từ vựng theo lộ trình";
          panel.hidden = false;
          enterPathFullscreen();
          try {
            if (typeof window.__ttcPathRedraw === "function") window.__ttcPathRedraw();
          } catch (eRedraw) {}
        });
      });
    }
    var achHost = document.getElementById("ttcAchHost");
    if (achHost && achHost.dataset.ready !== "1") {
      achHost.dataset.ready = "1";
      paintAchievementBoard(achHost);
    }
    return panel;
  };

  window.ttcMountDailyVocab = function(){
    var panel = typeof window.ttcEnsurePathShell === "function"
      ? window.ttcEnsurePathShell()
      : document.getElementById("ttcPathPanel");
    if (!panel) return;
    var box = document.getElementById("ttcDailyVocab");
    if (!box) {
      box = document.createElement("section");
      box.id = "ttcDailyVocab";
      panel.appendChild(box);
    } else if (box.parentNode !== panel) {
      panel.appendChild(box);
    }
    mountBox = box;
    if (box.dataset.ready === "1") return;
    box.dataset.ready = "1";
    var pickedLevel = 1;
    var pickedDaily = 15;
    var goalsPanelOpen = false;
    setTimeout(function(){ runSyncAll("mount"); }, 0);

    function freshDay(entry){
      var now = today();
      if (!now) return entry;
      if (entry.today !== now) {
        entry.todayDone = 0;
        entry.today = now;
      }
      return entry;
    }
    function current(){
      var result = ensureStore();
      if (result.error) return result;
      var store = result.store;
      var level = isLevel(Number(store.activeLevel)) ? Number(store.activeLevel) : pickedLevel;
      store.activeLevel = level;
      pickedLevel = level;
      var entry = getEntry(store, level);
      if (entry && entry.on) {
        entry = freshDay(entry);
        putEntry(store, level, entry);
      }
      if (entry && parseDaily(entry.daily) != null) pickedDaily = Number(entry.daily);
      return { store: store, level: level, entry: entry, error: null };
    }
    function bindLevelButtons(host, selected, onPick){
      [1,2,3,4,5,6,7,8,9].forEach(function(level){
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = "HSK " + level;
        if (level === selected) button.classList.add("ttc-on");
        button.addEventListener("click", function(){
          pathCheckAccess(level).then(function(ok){
            if (!ok) return;
            onPick(level);
          });
        });
        host.appendChild(button);
      });
    }
    function bindDailyControls(host, selected, onPick){
      var presets = host.querySelector(".ttc-path-counts");
      var input = host.querySelector(".ttc-path-daily-input");
      var err = host.querySelector(".ttc-path-daily-error");
      var hint = host.querySelector(".ttc-path-session-hint");
      function paintHint(daily){
        if (!hint) return;
        var text = sessionHint(daily);
        hint.textContent = text;
        hint.hidden = !text;
      }
      function mark(daily){
        pickedDaily = daily;
        if (input) input.value = String(daily);
        if (err) err.textContent = "";
        presets.querySelectorAll("button").forEach(function(el){
          el.classList.toggle("ttc-on", Number(el.getAttribute("data-daily")) === daily);
        });
        paintHint(daily);
      }
      PRESETS.forEach(function(count){
        var button = document.createElement("button");
        button.type = "button";
        button.setAttribute("data-daily", String(count));
        button.textContent = count + " từ";
        button.addEventListener("click", function(){
          mark(count);
          onPick(count);
        });
        presets.appendChild(button);
      });
      if (input) {
        input.setAttribute("min", String(DAILY_MIN));
        input.setAttribute("max", String(DAILY_MAX));
        input.setAttribute("step", "1");
        input.setAttribute("inputmode", "numeric");
        input.value = String(selected);
        input.addEventListener("change", function(){
          var parsed = parseDaily(input.value);
          if (parsed == null) {
            if (err) err.textContent = "Nhập số nguyên từ " + DAILY_MIN + " đến " + DAILY_MAX + ".";
            input.value = String(pickedDaily);
            return;
          }
          mark(parsed);
          onPick(parsed);
        });
      }
      mark(selected);
      paintHint(selected);
    }
    function goalRemindDismissKey(level){
      return "ttcPathGoalRemindDismissed:" + String(today() || "") + ":HSK" + String(level || 0);
    }
    function goalReminderHtml(state){
      var level = state && state.level != null ? state.level : pickedLevel;
      try {
        if (localStorage.getItem(goalRemindDismissKey(level)) === "1") return "";
      } catch (eDismiss) {}
      var text;
      if (!state || !state.on || !(Number(state.daily) > 0)) {
        text = "👉 Hãy thiết lập mục tiêu học tập để bắt đầu.";
      } else {
        var daily = Number(state.daily) || 0;
        var done = Number(state.todayDone) || 0;
        var left = Math.max(0, daily - done);
        if (left <= 0) text = "🎉 Bạn đã hoàn thành mục tiêu học hôm nay!";
        else text = "📚 Hôm nay bạn còn " + left + " từ nữa để hoàn thành mục tiêu!";
      }
      return "<div class='ttc-path-goal-remind' id='ttcPathGoalRemind' role='status' data-level='" + esc(String(level)) + "'>"
        + "<span class='ttc-path-goal-remind-text'>" + esc(text) + "</span>"
        + "<button type='button' class='ttc-path-goal-ok'>OK, HIỂU</button></div>";
    }
    function bindGoalRemindOk(level){
      var okBtn = box.querySelector(".ttc-path-goal-ok");
      if (!okBtn) return;
      okBtn.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        try { localStorage.setItem(goalRemindDismissKey(level), "1"); } catch (eOk) {}
        var el = document.getElementById("ttcPathGoalRemind");
        if (el) {
          el.hidden = true;
          el.setAttribute("hidden", "");
          if (el.parentNode) el.parentNode.removeChild(el);
        }
      });
    }
    function pathGuideHtml(){
      return ""
        + "<div class='ttc-path-guide'>"
        +   "<p><b>A. Thiết lập mục tiêu</b></p>"
        +   "<ul>"
        +     "<li>Chọn cấp HSK (1–9). Free: HSK 1–2; HSK 3–9 cần Premium/Free Trial hợp lệ.</li>"
        +     "<li>Chọn số từ muốn học mỗi ngày (nút sẵn hoặc ô nhập).</li>"
        +     "<li>Bấm <b>Bắt đầu</b> (hoặc <b>Tiếp tục</b> nếu đã có tiến độ).</li>"
        +     "<li>Đang học: bấm <b>Chỉnh mục tiêu</b> để mở lại / thu gọn phần thiết lập; đổi cấp hoặc số từ rồi tiếp tục.</li>"
        +   "</ul>"
        +   "<p><b>B. Cách học từng câu</b></p>"
        +   "<ol>"
        +     "<li>Đọc câu hỏi (nghĩa hoặc ghép chữ).</li>"
        +     "<li>Chọn đáp án (hoặc ghép / nhập nghĩa).</li>"
        +     "<li>Nhấn <b>Chọn xong</b> để chấm.</li>"
        +     "<li>Sai: có thể thử lại ngay; mỗi lần trả lời sai hợp lệ trừ <b>5 EXP</b>.</li>"
        +     "<li>Đúng: cộng <b>10 EXP</b>, hiện giải thích; nhấn <b>Xác nhận</b> để sang câu tiếp.</li>"
        +     "<li>Nút <b>Xác nhận</b> chỉ bật sau khi trả lời đúng — không bỏ qua câu chưa đúng.</li>"
        +   "</ol>"
        +   "<p><b>C. Điểm và tiến độ</b></p>"
        +   "<ul>"
        +     "<li><b>EXP</b>: điểm kinh nghiệm của lộ trình cấp HSK đang học (không phải số từ đã thuộc).</li>"
        +     "<li><b>Đã học hôm nay</b>: số từ đã hoàn thành trong mục tiêu ngày.</li>"
        +     "<li><b>Tiến độ mục tiêu hôm nay</b>: đã học / mục tiêu · %.</li>"
        +     "<li><b>Tiến độ lộ trình</b>: vị trí từ hiện tại / tổng từ cấp đó.</li>"
        +     "<li><b>Chuỗi ngày</b>: số ngày học liên tiếp theo dữ liệu lộ trình.</li>"
        +     "<li><b>Số từ đã thuộc</b>: xem ở bảng thành tích — đếm các từ đã ôn đúng và đạt độ ổn định ≥ 1 trong bộ nhớ từ vựng (từ mastered được tính gồm luôn).</li>"
        +   "</ul>"
        +   "<p><b>D. Ghi nhớ từ vựng</b></p>"
        +   "<ul>"
        +     "<li>Mỗi lần chấm đúng/sai (khi đã đăng nhập) gửi sự kiện ghi nhớ theo lemma của từ.</li>"
        +     "<li>Từ được ôn và nâng độ ổn định theo thuật toán máy chủ; <b>chưa</b> tự gọi là «đã thuộc» chỉ vì trả lời đúng một lần.</li>"
        +     "<li>«Đã thuộc» (mastered) chỉ khi hệ thống xác nhận đủ điều kiện ổn định và ôn đúng qua nhiều ngày.</li>"
        +   "</ul>"
        + "</div>";
    }
    function memoryVaultShell(level){
      return ""
        + "<section class='ttc-path-vault' id='ttcPathVault' data-hsk='" + String(level) + "' aria-label='Kho từ cần ôn'>"
        +   "<div class='ttc-path-vault-head'>"
        +     "<strong>📚 KHO TỪ CẦN ÔN</strong>"
        +     "<span class='ttc-path-vault-note'>Khung riêng · dữ liệu ghi nhớ thật · nhấn nhóm hoặc từ để ôn bằng bài test lộ trình</span>"
        +   "</div>"
        +   "<div class='ttc-path-vault-tabs' role='tablist'>"
        +     "<button type='button' class='ttc-path-vault-tab' data-vault='new'>Từ mới<span class='ttc-path-vault-count' data-count='new'>0</span></button>"
        +     "<button type='button' class='ttc-path-vault-tab' data-vault='learning'>Đang học<span class='ttc-path-vault-count' data-count='learning'>0</span></button>"
        +     "<button type='button' class='ttc-path-vault-tab' data-vault='mastered'>Đã thuộc<span class='ttc-path-vault-count' data-count='mastered'>0</span></button>"
        +     "<button type='button' class='ttc-path-vault-tab is-on' data-vault='due'>Cần ôn<span class='ttc-path-vault-count' data-count='due'>0</span></button>"
        +     "<button type='button' class='ttc-path-vault-tab' data-vault='wrong_heavy'>Hay sai<span class='ttc-path-vault-count' data-count='wrong_heavy'>0</span></button>"
        +   "</div>"
        +   "<p class='ttc-path-vault-status' id='ttcPathVaultStatus'>Đang tải hồ sơ ghi nhớ…</p>"
        +   "<div class='ttc-path-vault-list' id='ttcPathVaultList' role='list'></div>"
        +   "<div class='ttc-path-vault-detail' id='ttcPathVaultDetail' hidden></div>"
        + "</section>";
    }
    function pathBadgesShell(state, list){
      var day = today();
      var badges = [];
      var daily = Number(state.daily) || 0;
      var done = Number(state.todayDone) || 0;
      if (daily > 0 && day && state.today === day && done >= daily) {
        badges.push({ id: "daily_goal", label: "Hoàn thành mục tiêu ngày" });
      }
      if (state.lastDay && day) {
        var g = gapDays(state.lastDay, day);
        if (g === 0 || g === 1) badges.push({ id: "streak_keep", label: "Đang giữ chuỗi ngày học" });
      }
      var idx = Math.max(0, Number(state.index) || 0);
      var total = list && list.length ? list.length : 0;
      if (total > 0 && idx >= Math.floor(total * 0.25)) badges.push({ id: "mile_25", label: "Mốc 25% cấp HSK" });
      if (total > 0 && idx >= Math.floor(total * 0.5)) badges.push({ id: "mile_50", label: "Mốc 50% cấp HSK" });
      if (total > 0 && idx >= total) badges.push({ id: "hsk_done", label: "Hoàn thành cấp HSK " + state.level });
      var weekDone = (day && state.today === day) ? done : 0;
      if (weekDone >= Math.min(daily, 50) && daily > 0) {
        badges.push({ id: "week_pace", label: "Nhịp học tuần (theo mục tiêu ngày)" });
      }
      var html = "<section class='ttc-path-badges' aria-label='Huy hiệu học tập'>"
        + "<div class='ttc-path-badges-head'><strong>Huy hiệu & thử thách</strong>"
        + "<span class='ttc-path-vault-note'>Chỉ hiển thị theo tiến độ lộ trình; chưa lưu bảng huy hiệu máy chủ</span></div>";
      if (!badges.length) {
        html += "<p class='ttc-path-vault-status'>Chưa đạt điều kiện huy hiệu từ tiến độ hiện có.</p>";
      } else {
        html += "<ul class='ttc-path-badges-list'>";
        badges.forEach(function(b){
          html += "<li data-badge='" + esc(b.id) + "'>" + esc(b.label) + "</li>";
        });
        html += "</ul>";
      }
      html += "</section>";
      return html;
    }
    var pathVaultReview = null;
    function startVaultReview(store, level, entry, list, word){
      if (!word) return;
      pathVaultReview = { word: word, lemmaId: word.lemma_id || null };
      if (!entry) {
        var cur = current();
        store = cur.store; level = cur.level; entry = cur.entry;
      }
      if (!entry) return;
      if (!entry.on) {
        entry.on = true;
        if (!(Number(entry.daily) > 0)) entry.daily = Number(pickedDaily) || 15;
        if (!entry.today) entry.today = today();
        putEntry(store, level, entry);
      }
      try { if (typeof window.ttcEnterPathFullscreen === "function") window.ttcEnterPathFullscreen(); } catch (eFsR) {}
      if (typeof remountDraw === "function") remountDraw();
      else draw();
    }
    function mountMemoryVault(level, list, store, entry){
      var root = document.getElementById("ttcPathVault");
      if (!root) return;
      var statusEl = document.getElementById("ttcPathVaultStatus");
      var listEl = document.getElementById("ttcPathVaultList");
      var detailEl = document.getElementById("ttcPathVaultDetail");
      var active = "due";
      var tabOn = root.querySelector(".ttc-path-vault-tab.is-on");
      if (tabOn && tabOn.getAttribute("data-vault")) active = tabOn.getAttribute("data-vault");
      var byLemmaWord = Object.create(null);
      (list || []).forEach(function(w){
        if (w && w.lemma_id) byLemmaWord[String(w.lemma_id)] = w;
      });
      function setCounts(counts){
        ["new","learning","mastered","due","wrong_heavy"].forEach(function(key){
          var el = root.querySelector(".ttc-path-vault-count[data-count='" + key + "']");
          if (el) el.textContent = String(counts[key] || 0);
        });
      }
      function computeCounts(rows){
        var todayStr = (typeof ttcVocabMemTodayStr === "function") ? ttcVocabMemTodayStr() : "";
        var counts = { new: 0, learning: 0, mastered: 0, due: 0, wrong_heavy: 0 };
        var seenMem = Object.create(null);
        (rows || []).forEach(function(row){
          if (row && row.vocab_id) seenMem[String(row.vocab_id)] = row;
        });
        (list || []).forEach(function(w){
          if (!w || !w.lemma_id) return;
          var lid = String(w.lemma_id);
          var row = seenMem[lid];
          if (!row) { counts.new++; return; }
          var b = (typeof ttcVocabMemBucketOf === "function") ? ttcVocabMemBucketOf(row, todayStr) : String(row.status || "");
          if (b === "new") counts.new++;
          else if (b === "learning") counts.learning++;
          else if (b === "mastered") counts.mastered++;
          else if (b === "due") counts.due++;
          else if (b === "wrong_heavy") counts.wrong_heavy++;
        });
        (rows || []).forEach(function(row){
          if (!row || !row.vocab_id) return;
          if (byLemmaWord[String(row.vocab_id)]) return;
          var b2 = (typeof ttcVocabMemBucketOf === "function") ? ttcVocabMemBucketOf(row, todayStr) : String(row.status || "");
          if (counts[b2] != null) counts[b2]++;
        });
        return counts;
      }
      function renderDetail(w, row){
        if (!detailEl || !w) return;
        detailEl.hidden = false;
        var parts = [];
        parts.push("<p class='ttc-path-vault-detail-h'><b>" + esc(w.h || "") + "</b>"
          + (w.p ? " · " + esc(String(w.p)) : "") + "</p>");
        if (w.m) parts.push("<p>" + esc(String(w.m)) + "</p>");
        if (w.example) {
          parts.push("<p class='ttc-path-vault-eg'>" + esc(String(w.example)) + "</p>");
          if (w.examplePinyin) parts.push("<p class='ttc-path-vault-eg'>" + esc(String(w.examplePinyin)) + "</p>");
          if (w.exampleMeaning) parts.push("<p class='ttc-path-vault-eg'>" + esc(String(w.exampleMeaning)) + "</p>");
        } else {
          parts.push("<p class='ttc-path-vault-note'>Chưa có câu ví dụ trong dữ liệu.</p>");
        }
        if (row) {
          parts.push("<p class='ttc-path-vault-meta'>Gặp " + (Number(row.practice_count)||0)
            + " · Đúng " + (Number(row.correct_count)||0)
            + " · Sai " + (Number(row.wrong_count)||0)
            + " · Ổn định " + (Number(row.stability)||0)
            + " · " + esc(String(row.status || ""))
            + (row.next_review_at ? (" · Ôn tiếp " + esc(String(row.next_review_at).slice(0,10))) : "")
            + "</p>");
        }
        parts.push("<button type='button' class='ttc-path-vault-review'>Ôn từ này (bài test lộ trình)</button>");
        detailEl.innerHTML = parts.join("");
        var rev = detailEl.querySelector(".ttc-path-vault-review");
        if (rev) {
          rev.addEventListener("click", function(){
            startVaultReview(store, level, entry, list, w);
          });
        }
      }
      function paint(rows, bucket){
        if (!listEl) return;
        listEl.innerHTML = "";
        var todayStr = (typeof ttcVocabMemTodayStr === "function") ? ttcVocabMemTodayStr() : "";
        var shown = 0;
        var firstWord = null;
        function addItem(w, row){
          if (!w) return;
          shown++;
          if (!firstWord) firstWord = w;
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "ttc-path-vault-item";
          btn.setAttribute("role", "listitem");
          btn.textContent = (w.h || "") + (w.p ? " · " + w.p : "");
          btn.addEventListener("click", function(){ renderDetail(w, row || null); });
          btn.addEventListener("dblclick", function(){ startVaultReview(store, level, entry, list, w); });
          listEl.appendChild(btn);
        }
        if (bucket === "new") {
          var seenMem = Object.create(null);
          (rows || []).forEach(function(row){
            if (row && row.vocab_id) seenMem[String(row.vocab_id)] = row;
          });
          (list || []).forEach(function(w){
            if (!w || !w.lemma_id) return;
            var lid = String(w.lemma_id);
            var row = seenMem[lid];
            if (!row) {
              addItem(w, null);
              return;
            }
            var b = (typeof ttcVocabMemBucketOf === "function") ? ttcVocabMemBucketOf(row, todayStr) : String(row.status || "");
            if (b === "new") addItem(w, row);
          });
        } else {
          (rows || []).forEach(function(row){
            if (!row) return;
            var b = (typeof ttcVocabMemBucketOf === "function") ? ttcVocabMemBucketOf(row, todayStr) : String(row.status || "");
            if (bucket === "learning" && b !== "learning") return;
            if (bucket === "mastered" && b !== "mastered") return;
            if (bucket === "due" && b !== "due") return;
            if (bucket === "wrong_heavy" && b !== "wrong_heavy") return;
            addItem(byLemmaWord[String(row.vocab_id)], row);
          });
        }
        if (statusEl) {
          statusEl.textContent = shown
            ? ("HSK " + level + " · " + shown + " từ · nhấn từ để xem · nhấn «Ôn từ này» hoặc double-click để vào bài test lộ trình")
            : ("HSK " + level + " · Chưa có từ trong nhóm này (không minh họa số liệu giả)");
        }
        root._vaultFirstWord = firstWord;
      }
      root.querySelectorAll(".ttc-path-vault-tab").forEach(function(tab){
        tab.addEventListener("click", function(){
          root.querySelectorAll(".ttc-path-vault-tab").forEach(function(t){ t.classList.remove("is-on"); });
          tab.classList.add("is-on");
          active = tab.getAttribute("data-vault") || "due";
          var rows = (window.__ttcVocabMemCache && window.__ttcVocabMemCache.rows) || [];
          var filtered = rows.filter(function(r){ return Number(r.hsk_level) === Number(level); });
          paint(filtered, active);
          if (detailEl) { detailEl.hidden = true; detailEl.innerHTML = ""; }
        });
      });
      if (typeof window.ttcVocabMemoryLoadMine !== "function") {
        if (statusEl) statusEl.textContent = "Chưa có hàm đọc hồ sơ ghi nhớ.";
        return;
      }
      window.ttcVocabMemoryLoadMine({ hskLevel: Number(level) }).then(function(res){
        if (!res || !res.ok) {
          if (statusEl) {
            statusEl.textContent = res && res.status === "guest"
              ? "Đăng nhập để xem kho từ cần ôn của bạn."
              : ("Không đọc được hồ sơ ghi nhớ" + (res && res.error ? (": " + res.error) : "."));
          }
          setCounts({ new: 0, learning: 0, mastered: 0, due: 0, wrong_heavy: 0 });
          return;
        }
        var filtered = (res.rows || []).filter(function(r){ return Number(r.hsk_level) === Number(level); });
        setCounts(computeCounts(filtered));
        paint(filtered, active);
      }).catch(function(){
        if (statusEl) statusEl.textContent = "Lỗi mạng khi đọc hồ sơ ghi nhớ.";
      });
    }
    function overviewHtml(state, list){
      var total = list.length;
      var pathPos = Math.max(0, Number(state.index) || 0);
      var pct = state.daily ? Math.round((state.todayDone / state.daily) * 100) : 0;
      var status = pathStatus(state, list);
      var todayDone = Number(state.todayDone) || 0;
      var daily = Number(state.daily) || 0;
      var who = nick();
      return ""
        + "<aside class='ttc-path-overview ttc-path-overview-col' aria-label='Thống kê lộ trình'>"
        +   "<div class='ttc-path-stat ttc-path-stat-nick'><span>Nickname</span><b class='ttc-path-nick'>" + esc(who) + "</b></div>"
        +   "<div class='ttc-path-stat'><span>Chuỗi ngày</span><b>" + esc(streakText(state)) + "</b></div>"
        +   "<div class='ttc-path-stat'><span>Đã học hôm nay</span><b>" + todayDone + " từ</b></div>"
        +   "<div class='ttc-path-stat'><span>Hôm nay</span><b>" + todayDone + "/" + daily + " · " + pct + "%</b></div>"
        +   "<div class='ttc-path-stat ttc-path-stat-status'><span>Trạng thái</span><b>" + esc(status) + "</b>"
        +     "<p class='ttc-path-score'>HSK " + state.level + " · EXP " + (state.xp || 0) + "</p>"
        +   "</div>"
        +   "<div class='ttc-path-stat'><span>Tiến độ lộ trình</span><b>" + pathPos + "/" + total + " từ</b></div>"
        +   "<div class='ttc-path-bar'><span style='width:" + Math.min(100, pct) + "%'></span></div>"
        +   "<div class='ttc-path-stat ttc-path-stat-xp' data-ttc-xp-target='1'><span>Tổng EXP</span><b class='ttc-path-xp-value'>" + esc(String(state.xp || 0)) + "</b></div>"
        + "</aside>";
    }
    function goalsShell(){
      return ""
        + "<div class='ttc-path-goals'>"
        +   "<p class='ttc-path-goals-title'>Thiết lập mục tiêu</p>"
        +   "<div class='ttc-path-levels'></div>"
        +   "<div class='ttc-path-counts'></div>"
        +   "<label class='ttc-path-daily-label'>Số từ mỗi ngày"
        +     "<input class='ttc-path-daily-input' type='number' min='1' max='2000' step='1'>"
        +   "</label>"
        +   "<p class='ttc-path-daily-error' role='alert'></p>"
        +   "<p class='ttc-path-session-hint' hidden></p>"
        + "</div>";
    }
    function syncNoticeHtml(level){
      var meta = loadSyncMeta();
      var html = "<div class='ttc-path-sync'>";
      if (!serverDay.ok) {
        html += "<p class='ttc-path-sync-note'>Chưa lấy được ngày máy chủ. Không reset tiến độ ngày. Đang giữ nguyên state.</p>";
      } else {
        html += "<p class='ttc-path-sync-note'>Ngày máy chủ: " + esc(serverDay.value) + "</p>";
      }
      if (meta.notice) html += "<p class='ttc-path-sync-note'>" + esc(meta.notice) + "</p>";
      if (orphanPendingForCurrentUser()) {
        html += "<div class='ttc-path-orphan'>"
          + "<p><b>Tiến độ chưa gắn tài khoản</b></p>"
          + "<p>Máy này còn tiến độ lộ trình chưa xác định chủ. Không tự đồng bộ lên tài khoản đang đăng nhập.</p>"
          + "<div class='ttc-path-orphan-actions'>"
          +   "<button type='button' data-ttc-orphan='claim'>Gắn vào tài khoản đang đăng nhập</button>"
          +   "<button type='button' data-ttc-orphan='decline'>Không phải của tôi / để sau</button>"
          + "</div></div>";
      }
      var conflict = meta.conflicts && meta.conflicts[String(level)];
      if (conflict) {
        html += "<div class='ttc-path-conflict'>"
          + "<p><b>Xung đột HSK " + level + "</b></p>"
          + "<p>Local: XP " + esc(String(conflict.local && conflict.local.xp)) + " · index " + esc(String(conflict.local && conflict.local.index)) + " · hôm nay " + esc(String(conflict.local && conflict.local.todayDone)) + "/" + esc(String(conflict.local && conflict.local.daily)) + "</p>"
          + "<p>Cloud: XP " + esc(String(conflict.cloud && conflict.cloud.xp)) + " · index " + esc(String(conflict.cloud && conflict.cloud.index)) + " · hôm nay " + esc(String(conflict.cloud && conflict.cloud.todayDone)) + "/" + esc(String(conflict.cloud && conflict.cloud.daily)) + "</p>"
          + "<div class='ttc-path-conflict-actions'>"
          +   "<button type='button' data-ttc-conflict='local'>Dùng tiến độ trên thiết bị này</button>"
          +   "<button type='button' data-ttc-conflict='cloud'>Dùng tiến độ trên Cloud</button>"
          + "</div></div>";
      }
      html += "</div>";
      return html;
    }
    function bindConflictActions(level){
      box.querySelectorAll("[data-ttc-conflict]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var choice = btn.getAttribute("data-ttc-conflict");
          btn.disabled = true;
          resolveConflict(level, choice).then(function(){ draw(); });
        });
      });
      box.querySelectorAll("[data-ttc-orphan]").forEach(function(btn){
        btn.addEventListener("click", function(){
          var action = btn.getAttribute("data-ttc-orphan");
          btn.disabled = true;
          if (action === "claim") {
            var result = claimOrphanToCurrentUser();
            var meta = loadSyncMeta();
            if (result.ok) {
              meta.notice = "Đã gắn tiến độ máy này vào tài khoản hiện tại. Bản gốc vẫn được giữ.";
              saveSyncMeta(meta);
              runSyncAll("orphan_claim").then(function(){ draw(); });
            } else {
              meta.notice = result.reason === "user_has_data"
                ? "Tài khoản này đã có tiến độ riêng. Không ghi đè. Tiến độ chưa gắn vẫn được giữ."
                : "Không gắn được tiến độ chưa xác định chủ.";
              saveSyncMeta(meta);
              draw();
            }
            return;
          }
          if (action === "decline") {
            declineOrphanForCurrentUser();
            var meta2 = loadSyncMeta();
            meta2.notice = "Đã để lại tiến độ chưa gắn trên máy. Không đồng bộ lên tài khoản này.";
            saveSyncMeta(meta2);
            draw();
          }
        });
      });
    }
    function showMigrateError(code){
      box.innerHTML = "<h3>Lộ trình HSK</h3><p class='ttc-daily-note'>Không thể bảo toàn tiến độ cũ một cách chắc chắn (" + esc(code) + "). Dữ liệu localStorage không bị ghi đè. Vui lòng báo chủ dự án trước khi tiếp tục.</p>";
    }
    var pathDrawSeq = 0;
    function draw(){
      var cur = current();
      if (cur.error) return showMigrateError(cur.error);
      var store = cur.store;
      var level = cur.level;
      var entry = cur.entry;
      window.__ttcPathRedraw = draw;
      if (!entry || !entry.on) return setup(store, level, entry);
      var seq = ++pathDrawSeq;
      pathCheckAccess(level).then(function(ok){
        if (seq !== pathDrawSeq) return;
        if (!ok) return setup(store, level, entry);
        drawLearningUnlocked(store, level, entry);
      });
    }
    
    
    var pathSwitchBusy = false;
    function pathCloseGoalsPanelInPlace(){
      goalsPanelOpen = false;
      var goals = box.querySelector(".ttc-path-goals");
      if (goals && goals.parentNode) goals.parentNode.removeChild(goals);
      var toggle = box.querySelector(".ttc-path-goals-toggle");
      if (toggle) {
        toggle.textContent = "Chỉnh mục tiêu";
        toggle.setAttribute("aria-expanded", "false");
      }
    }
    function pathUpdateDailyHudInPlace(level, entry){
      var state = viewState(level, entry);
      var doneHud = Number(state.todayDone) || 0;
      var dailyHud = Number(state.daily) || 0;
      var pctHud = dailyHud ? Math.min(100, Math.round((doneHud / dailyHud) * 100)) : 0;
      var meta = box.querySelector(".ttc-path-game-meta");
      if (meta) {
        meta.textContent = "Hôm nay " + doneHud + "/" + dailyHud + " từ · Chuỗi: " + streakText(state);
      }
      var bar = box.querySelector(".ttc-path-game-progress");
      if (bar) {
        bar.setAttribute("aria-valuenow", String(pctHud));
        var span = bar.querySelector("span");
        if (span) span.style.width = pctHud + "%";
      }
      var pillXp = box.querySelector(".ttc-path-hud-xp");
      if (pillXp) pillXp.textContent = "EXP " + String(state.xp || 0);
    }
    function applyPathReselect(store, curLevel, entry, nextLevel, nextDaily){
      if (pathSwitchBusy) return;
      curLevel = Number(curLevel);
      nextLevel = Number(nextLevel);
      var parsedDaily = parseDaily(nextDaily);
      if (!isLevel(nextLevel) || parsedDaily == null) return;
      if (!entry) return;

      /* A: cùng HSK — chỉ đổi số từ, giữ nguyên trang test/fullscreen. */
      if (nextLevel === curLevel) {
        if (Number(entry.daily) !== parsedDaily) {
          entry.daily = parsedDaily;
          pickedDaily = parsedDaily;
          putEntry(store, curLevel, entry);
          pathUpdateDailyHudInPlace(curLevel, entry);
        }
        pathCloseGoalsPanelInPlace();
        return;
      }

      /* B: đổi HSK — lưu lựa chọn, đóng phiên UI cũ, mở ngay phiên học mới. */
      pathSwitchBusy = true;
      pathCheckAccess(nextLevel).then(function(ok){
        if (!ok) { pathSwitchBusy = false; return; }
        try {
          pathVaultReview = null;
          store.activeLevel = nextLevel;
          pickedLevel = nextLevel;
          pickedDaily = parsedDaily;
          var nextEntry = getEntry(store, nextLevel);
          if (!nextEntry) {
            nextEntry = {
              on: true,
              daily: parsedDaily,
              index: 0,
              xp: 0,
              today: today() || "",
              todayDone: 0,
              lastDay: ""
            };
          } else {
            nextEntry.on = true;
            nextEntry.daily = parsedDaily;
            if (nextEntry.index == null) nextEntry.index = 0;
            if (nextEntry.xp == null) nextEntry.xp = 0;
            if (nextEntry.todayDone == null) nextEntry.todayDone = 0;
            if (!nextEntry.today) nextEntry.today = today() || "";
            if (nextEntry.lastDay == null) nextEntry.lastDay = "";
          }
          nextEntry = freshDay(nextEntry);
          putEntry(store, nextLevel, nextEntry);
          saveStore(store);
          goalsPanelOpen = false;
          try { if (typeof window.ttcEnterPathFullscreen === "function") window.ttcEnterPathFullscreen(); } catch (eFs) {}
          draw();
        } finally {
          setTimeout(function(){ pathSwitchBusy = false; }, 500);
        }
      }).catch(function(){ pathSwitchBusy = false; });
    }
    function drawLearningUnlocked(store, level, entry){
      entry = freshDay(entry);
      putEntry(store, level, entry);
      var state = viewState(level, entry);
      var list = levelWords(level);
      try{
        if (typeof window.ttcVocabMemoryLoadMine === "function") {
          window.ttcVocabMemoryLoadMine({ hskLevel: Number(level) });
        }
      }catch(ePreMem){}
      try { if (typeof window.ttcPathParkFsToolbar === "function") window.ttcPathParkFsToolbar(); } catch (ePark) {}
      try {
        var panelForTicker = document.getElementById("ttcPathPanel");
        if (panelForTicker && panelForTicker.classList.contains("ttc-path-fs")) {
          ensurePathWorldTicker(panelForTicker);
          if (!pathWorldTickerState.running) startPathWorldTicker();
        }
      } catch (eTickerDraw) {}
      var pathPosHud = Math.max(0, Number(state.index) || 0);
      var totalHud = list.length;
      var dailyHud = Number(state.daily) || 0;
      var doneHud = Number(state.todayDone) || 0;
      var pctHud = dailyHud ? Math.min(100, Math.round((doneHud / dailyHud) * 100)) : 0;
      box.innerHTML = "<div class='ttc-path-game-hud' aria-label='Thanh học tập'>"
        +   "<div class='ttc-path-game-hud-row'>"
        +     "<strong class='ttc-path-game-title'>LỘ TRÌNH HỌC HSK</strong>"
        +     "<span class='ttc-path-game-pill'>HSK " + level + "</span>"
        +     "<span class='ttc-path-game-pill'>Câu " + Math.min(pathPosHud + 1, Math.max(totalHud, 1)) + "/" + totalHud + "</span>"
        +     "<span class='ttc-path-game-pill ttc-path-hud-xp'>EXP " + esc(String(state.xp || 0)) + "</span>"
        +   "</div>"
        +   "<div class='ttc-path-game-progress' role='progressbar' aria-valuenow='" + pctHud + "' aria-valuemin='0' aria-valuemax='100'>"
        +     "<span style='width:" + pctHud + "%'></span>"
        +   "</div>"
        +   "<div class='ttc-path-game-meta'>Hôm nay " + doneHud + "/" + dailyHud + " từ · Chuỗi: " + esc(streakText(state)) + "</div>"
        + "</div>"
        + "<div class='ttc-path-goals-bar'>"
        +   "<button type='button' class='ttc-path-goals-toggle' aria-expanded='" + (goalsPanelOpen ? "true" : "false") + "'>"
        +     (goalsPanelOpen ? "Thu gọn thiết lập" : "Chỉnh mục tiêu")
        +   "</button>"
        + "</div>"
        + (goalsPanelOpen ? goalsShell() : "")
        + "<h3>Lộ trình HSK " + level + "</h3>"
        + goalReminderHtml(state)
        + syncNoticeHtml(level)
        + memoryVaultShell(level)
        + pathBadgesShell(state, list)
        + "<div class='ttc-path-learn'>"
        +   "<div class='ttc-path-main'>"
        +     "<div class='ttc-path-explain-bar'>"
        +       "<button type='button' class='ttc-path-explain-toggle' aria-expanded='false'>Giải thích cách học</button>"
        +       "<div class='ttc-path-explain-panel ttc-daily-note' hidden></div>"
        +     "</div>"
        +     "<div class='ttc-path-quiz'>"
        +       "<div class='ttc-path-qcolor-bar'>"
        +         "<button type='button' class='ttc-path-qcolor-btn' id='ttcPathQColorBtn' aria-expanded='false' aria-controls='ttcPathQColorPanel'>🎨 MÀU CÂU HỎI</button>"
        +         "<div class='ttc-path-qcolor-panel' id='ttcPathQColorPanel' hidden></div>"
        +       "</div>"
        +       "<div class='ttc-path-feedback-host' aria-live='polite'></div>"
        +       "<div class='ttc-daily-card'></div>"
        +       "<div class='ttc-path-choices' aria-label='Đáp án'></div>"
        +       "<div class='ttc-path-controls' aria-label='Điều khiển'></div>"
        +     "</div>"
        +   "</div>"
        +   overviewHtml(state, list)
        + "</div>"
        + "<div class='ttc-daily-actions'></div>"
        + "<button type='button' class='ttc-path-cancel'>HỦY LỘ TRÌNH</button>";
      var remText = reminder(state, list);
      window.__ttcLastVocabPathReminder = remText;
      var explainPanel = box.querySelector(".ttc-path-explain-panel");
      if (explainPanel) explainPanel.innerHTML = pathGuideHtml();
      var explainToggle = box.querySelector(".ttc-path-explain-toggle");
      if (explainToggle && explainPanel) {
        explainToggle.addEventListener("click", function(){
          var open = explainToggle.getAttribute("aria-expanded") === "true";
          open = !open;
          explainToggle.setAttribute("aria-expanded", open ? "true" : "false");
          explainPanel.hidden = !open;
        });
      }
      bindConflictActions(level);
      try { ttcPathQColorMount(box); } catch (ttcQColorErr) { console.warn('TTC path qcolor', ttcQColorErr); }
      var goalsToggle = box.querySelector(".ttc-path-goals-toggle");
      if (goalsToggle) {
        goalsToggle.addEventListener("click", function(){
          goalsPanelOpen = !goalsPanelOpen;
          draw();
        });
      }
      if (goalsPanelOpen) {
        bindLevelButtons(box.querySelector(".ttc-path-levels"), level, function(nextLevel){
          applyPathReselect(store, level, entry, nextLevel, Number(entry.daily) || pickedDaily);
        });
        bindDailyControls(box.querySelector(".ttc-path-goals"), Number(entry.daily) || pickedDaily, function(daily){
          applyPathReselect(store, level, entry, level, daily);
        });
        try {
          requestAnimationFrame(function(){
            var goalsEl = box.querySelector(".ttc-path-goals");
            if (goalsEl && goalsEl.scrollIntoView) {
              goalsEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          });
        } catch (eGoalsScroll) {}
      }
      var card = box.querySelector(".ttc-daily-card");
      var actions = box.querySelector(".ttc-daily-actions");
      var rechoose = box.querySelector(".ttc-path-rechoose");
      if (rechoose) {
        rechoose.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          /* Mở UI chọn lộ trình gốc ngay dưới HUD; draw() async nên không scroll sớm. */
          if (goalsPanelOpen && box.querySelector(".ttc-path-goals")) {
            try {
              box.querySelector(".ttc-path-goals").scrollIntoView({ behavior: "smooth", block: "nearest" });
            } catch (eAlready) {}
            return;
          }
          goalsPanelOpen = true;
          draw();
        });
      }
      function openPathCancelDialog(){
        if (document.querySelector(".ttc-path-cancel-overlay")) return;
        var overlay = document.createElement("div");
        overlay.className = "ttc-path-cancel-overlay";
        overlay.innerHTML = ""
          + "<div class='ttc-path-cancel-dialog' role='dialog' aria-modal='true'>"
          +   "<p class='ttc-path-cancel-dialog-text'>Bạn có chắc chắn muốn hủy lộ trình học hiện tại không? EXP và thành tích đã lưu sẽ được giữ nguyên.</p>"
          +   "<div class='ttc-path-cancel-dialog-actions'>"
          +     "<button type='button' class='ttc-path-cancel-no'>Không</button>"
          +     "<button type='button' class='ttc-path-cancel-yes'>Xác nhận hủy</button>"
          +   "</div>"
          + "</div>";
        var mount = document.getElementById("ttcPathPanel") || document.body;
        mount.appendChild(overlay);
        function closeCancelDialog(){
          if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }
        overlay.addEventListener("click", function(ev){
          if (ev.target === overlay) closeCancelDialog();
        });
        overlay.querySelector(".ttc-path-cancel-no").addEventListener("click", function(){
          closeCancelDialog();
        });
        overlay.querySelector(".ttc-path-cancel-yes").addEventListener("click", function(){
          closeCancelDialog();
          entry.on = false;
          putEntry(store, level, entry);
          goalsPanelOpen = false;
          draw();
        });
      }
      Array.prototype.forEach.call(box.querySelectorAll(".ttc-path-cancel"), function(cancel){
        cancel.addEventListener("click", openPathCancelDialog);
      });
      syncBoard(state, document.getElementById("ttcAchHost"));
      try { bindGoalRemindOk(level); } catch (eGoalOk) {}
      try { mountMemoryVault(level, list, store, entry); } catch (eVault) {}
      try {
        if (!list.length) {
          card.textContent = "Cấp này chưa có từ để học.";
          return;
        }
        var reviewWord = pathVaultReview && pathVaultReview.word ? pathVaultReview.word : null;
        if (!reviewWord) {
          if (state.index >= list.length) return;
          if (state.todayDone >= state.daily) return;
        }
        var word;
        if (reviewWord) {
          word = reviewWord;
        } else {
          var resolved = (typeof window.ttcVocabMemoryResolvePathWord === "function")
            ? window.ttcVocabMemoryResolvePathWord(list, entry)
            : { word: list[state.index], index: state.index };
          word = resolved.word || list[state.index];
          if (resolved.index != null && Number(resolved.index) !== Number(entry.index)) {
            entry.index = Number(resolved.index);
            putEntry(store, level, entry);
          }
        }
        if (state.todayDone % 2 === 0) askMeaning(store, level, entry, list, word, card, actions);
        else askTiles(store, level, entry, list, word, card, actions);
      } finally {
        try {
          if (typeof window.ttcPathRemountFsToolbar === "function") window.ttcPathRemountFsToolbar();
          else if (typeof window.ttcPathEnsureFsToolbar === "function") window.ttcPathEnsureFsToolbar(document.getElementById("ttcPathPanel"));
        } catch (eTbMount) {}
      }
    }
    remountDraw = draw;
    function pathPaintScore(level, entry, delta){
      var xpVal = box.querySelector(".ttc-path-xp-value");
      if (xpVal) xpVal.textContent = String(entry.xp || 0);
      var hudXp = box.querySelector(".ttc-path-hud-xp");
      if (hudXp) hudXp.textContent = "EXP " + String(entry.xp || 0);
      var xpCard = box.querySelector(".ttc-path-stat-xp");
      if (xpCard) {
        xpCard.classList.remove("ttc-path-xp-pulse");
        void xpCard.offsetWidth;
        xpCard.classList.add("ttc-path-xp-pulse");
      }
      var score = box.querySelector(".ttc-path-score");
      if (score) {
        score.textContent = "HSK " + level + " · EXP " + (entry.xp || 0);
        score.classList.remove("ttc-path-score-flash");
        void score.offsetWidth;
        score.classList.add("ttc-path-score-flash");
      }
      if (!delta) return;
      // Âm đúng-câu chỉ còn tràng vỗ tay ngắn (pathShowFeedback -> "clap");
      // bỏ tiếng "xp" (arpeggio 3 nốt) từng phát kèm khi cộng EXP cho đỡ "lố"
      // (chủ web 2026-11-17). Hiệu ứng hình ảnh +EXP bên dưới giữ nguyên.
      var fromEl = box.querySelector(".ttc-path-feedback") || box.querySelector(".ttc-path-choices") || box.querySelector(".ttc-path-quiz") || box;
      var toEl = xpCard || xpVal || score || box;
      var from = fromEl.getBoundingClientRect ? fromEl.getBoundingClientRect() : { left: 0, top: 0, width: 40, height: 20 };
      var to = toEl.getBoundingClientRect ? toEl.getBoundingClientRect() : from;
      var fly = document.createElement("span");
      fly.className = "ttc-path-xp-fly" + (delta > 0 ? " ttc-path-xp-fly-ok" : " ttc-path-xp-fly-bad");
      fly.textContent = (delta > 0 ? "+" : "") + delta + " EXP";
      fly.style.left = (from.left + from.width / 2) + "px";
      fly.style.top = (from.top + from.height / 2) + "px";
      document.body.appendChild(fly);
      void fly.offsetWidth;
      fly.style.transform = "translate(" + ((to.left + to.width / 2) - (from.left + from.width / 2)) + "px," + ((to.top + to.height / 2) - (from.top + from.height / 2)) + "px) scale(.85)";
      fly.style.opacity = "0.15";
      setTimeout(function(){
        if (!fly.parentNode) return;
        if (typeof fly.parentNode.removeChild === "function") fly.parentNode.removeChild(fly);
        else if (typeof fly.remove === "function") fly.remove();
      }, 1100);
    }
    function pathGradeXp(store, level, entry, ok){
      var day = today();
      if (ok) entry.xp = (Number(entry.xp) || 0) + 10;
      else entry.xp = Math.max(0, (Number(entry.xp) || 0) - 5);
      if (day) {
        entry.lastDay = day;
        if (ok) entry.today = day;
      }
      putEntry(store, level, entry);
      pathPaintScore(level, entry, ok ? 10 : -5);
    }
    function pathAdvanceAfterConfirm(store, level, entry, ok){
      if (pathVaultReview) {
        pathVaultReview = null;
        draw();
        return;
      }
      var day = today();
      if (ok) {
        entry.todayDone = (Number(entry.todayDone) || 0) + 1;
        if (day) entry.today = day;
      }
      entry.index = (Number(entry.index) || 0) + 1;
      if (day) entry.lastDay = day;
      putEntry(store, level, entry);
      draw();
    }
    function pathExplainOk(word){
      var exp = String(word && word.explanation || "").trim();
      if (exp) return exp;
      if (word && word.t) return "Từ này thuộc nhóm «" + word.t + "». Hãy ghi nhớ để ôn lại.";
      return "Bạn đã trả lời đúng. Hãy ghi nhớ từ này.";
    }
    function pathExplainBad(word){
      if (word && word.t) {
        return "Chưa khớp. Hãy suy lại theo từ loại «" + word.t + "» và ôn flashcard HSK của bạn — không xem đáp án ở đây.";
      }
      return "Chưa khớp. Hãy ôn lại từ này trên flashcard rồi sang câu tiếp theo.";
    }
﻿    function pathSpawnFx(panel, kind){
      if (!panel) return;
      var reduce = false;
      try { reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (eR) {}
      if (reduce) return;
      var layer = document.createElement("div");
      layer.className = kind === "win" ? "ttc-path-fx-win" : "ttc-path-fx-lose";
      layer.setAttribute("aria-hidden", "true");
      var n = kind === "win" ? 18 : 6;
      var hues = ["#fb7185", "#f472b6", "#fbbf24", "#34d399", "#60a5fa", "#c084fc", "#fff"];
      for (var i = 0; i < n; i++) {
        var p = document.createElement("span");
        p.className = "ttc-path-fx-dot" + (kind === "win" ? " ttc-path-fx-spark" : "");
        p.style.setProperty("--dx", ((Math.random() * 200) - 100).toFixed(1) + "px");
        p.style.setProperty("--dy", ((Math.random() * -160) - 24).toFixed(1) + "px");
        p.style.setProperty("--delay", (Math.random() * 0.22).toFixed(2) + "s");
        if (kind === "win") p.style.background = hues[i % hues.length];
        layer.appendChild(p);
      }
      panel.appendChild(layer);
      setTimeout(function(){
        if (layer.parentNode) layer.parentNode.removeChild(layer);
      }, 1300);
    }
    function pathSpeakHanzi(text){
      var h = String(text || "").trim();
      if (!h) return;
      if (typeof window.ttcSpeakText === "function") {
        window.ttcSpeakText(h, "zh");
        return;
      }
      if (!window.speechSynthesis) return;
      try {
        var u = new SpeechSynthesisUtterance(h);
        u.lang = "zh-CN";
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch (eS) {}
    }
    function pathShowFeedback(host, ok, answerLabel, explain, word, letter){
      var panel = host.querySelector(".ttc-path-feedback");
      if (!panel) {
        panel = document.createElement("div");
        panel.className = "ttc-path-feedback";
        host.appendChild(panel);
      }
      panel.className = "ttc-path-feedback " + (ok ? "ttc-path-feedback-ok ttc-path-feedback-win" : "ttc-path-feedback-bad");
      if (ok) panel.classList.add("ttc-path-feedback-3d");
      else panel.classList.add("ttc-path-feedback-shake");
      panel.innerHTML = "";
      var quizRoot = host && host.closest ? host.closest(".ttc-path-quiz") : null;
      if (quizRoot) {
        if (ok) {
          quizRoot.classList.add("ttc-path-quiz-won");
          var qCard = quizRoot.querySelector(".ttc-daily-card");
          var qChoices = quizRoot.querySelector(".ttc-path-choices");
          if (qCard) { qCard.hidden = true; qCard.setAttribute("aria-hidden", "true"); }
          if (qChoices) { qChoices.hidden = true; qChoices.setAttribute("aria-hidden", "true"); }
        } else {
          quizRoot.classList.remove("ttc-path-quiz-won");
          var qCard2 = quizRoot.querySelector(".ttc-daily-card");
          var qChoices2 = quizRoot.querySelector(".ttc-path-choices");
          if (qCard2) { qCard2.hidden = false; qCard2.removeAttribute("aria-hidden"); }
          if (qChoices2) { qChoices2.hidden = false; qChoices2.removeAttribute("aria-hidden"); }
        }
      }
      if (ok) {
        var glow = document.createElement("span");
        glow.className = "ttc-path-win-glow";
        glow.setAttribute("aria-hidden", "true");
        panel.appendChild(glow);
        pathSpawnFx(panel, "win");
        if (typeof window.ttcPathSfxPlay === "function") window.ttcPathSfxPlay("clap");
      } else {
        pathSpawnFx(panel, "lose");
        if (typeof window.ttcPathSfxPlay === "function") window.ttcPathSfxPlay("lose");
      }
      var title = document.createElement("p");
      title.className = "ttc-path-feedback-title";
      title.textContent = ok ? "🎉 CHÚC MỪNG! CHÍNH XÁC!" : "Chưa chính xác — hãy thử lại!";
      panel.appendChild(title);
      if (ok && word) {
        var hanziSnap = String(word.h || "");
        if (!panel.dataset.ttcSpoken) {
          panel.dataset.ttcSpoken = "1";
          try { pathSpeakHanzi(hanziSnap); } catch (eSpeakAuto) {}
        }
        var pinyinSnap = String(word.p || "").trim();
        var meaningSnap = String(word.m || "").trim();
        var han = document.createElement("p");
        han.className = "ttc-path-fb-hanzi";
        han.textContent = hanziSnap;
        panel.appendChild(han);
        if (pinyinSnap) {
          var py = document.createElement("p");
          py.className = "ttc-path-fb-pinyin";
          py.textContent = "Pinyin: " + pinyinSnap;
          panel.appendChild(py);
        }
        if (meaningSnap) {
          var mean = document.createElement("p");
          mean.className = "ttc-path-fb-meaning";
          mean.textContent = "Nghĩa tiếng Việt: " + meaningSnap;
          panel.appendChild(mean);
        }
        var actions = document.createElement("div");
        actions.className = "ttc-path-fb-actions";
        var btnSpeak = document.createElement("button");
        btnSpeak.type = "button";
        btnSpeak.className = "ttc-path-fb-btn";
        btnSpeak.textContent = "🔊 NGHE PHÁT ÂM";
        btnSpeak.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          pathSpeakHanzi(hanziSnap);
        });
        var btnReplay = document.createElement("button");
        btnReplay.type = "button";
        btnReplay.className = "ttc-path-fb-btn";
        btnReplay.textContent = "🔁 Nghe lại";
        btnReplay.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          pathSpeakHanzi(hanziSnap);
        });
        var btnCopy = document.createElement("button");
        btnCopy.type = "button";
        btnCopy.className = "ttc-path-fb-btn";
        btnCopy.textContent = "📋 Chép lại chữ Hán";
        btnCopy.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          var txt = hanziSnap;
          function done(okCopy){
            btnCopy.textContent = okCopy ? "✅ Đã chép" : "📋 Chép lại chữ Hán";
            if (okCopy) setTimeout(function(){ btnCopy.textContent = "📋 Chép lại chữ Hán"; }, 1200);
          }
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).then(function(){ done(true); }).catch(function(){ done(false); });
          } else {
            try {
              var ta = document.createElement("textarea");
              ta.value = txt; document.body.appendChild(ta); ta.select();
              document.execCommand("copy");
              document.body.removeChild(ta);
              done(true);
            } catch (eC) { done(false); }
          }
        });
        actions.appendChild(btnSpeak);
        actions.appendChild(btnReplay);
        actions.appendChild(btnCopy);
        panel.appendChild(actions);
        var expText = String(explain || word.explanation || "").trim();
        if (expText) {
          var exTitle = document.createElement("p");
          exTitle.className = "ttc-path-fb-section";
          exTitle.textContent = "📖 GIẢI THÍCH:";
          panel.appendChild(exTitle);
          var ex = document.createElement("p");
          ex.className = "ttc-path-feedback-explain";
          ex.textContent = expText;
          panel.appendChild(ex);
        }
        var memLines = [];
        var wordsArr = (typeof words !== "undefined" && Array.isArray(words)) ? words : (window.words || []);
        var seenCh = Object.create(null);
        for (var chi = 0; chi < hanziSnap.length; chi++) {
          var chOne = hanziSnap.charAt(chi);
          if (seenCh[chOne] || !/[\u4e00-\u9fff]/.test(chOne)) continue;
          seenCh[chOne] = true;
          var hitCh = null;
          for (var wi = 0; wi < wordsArr.length; wi++) {
            if (wordsArr[wi] && wordsArr[wi].h === chOne && wordsArr[wi].m) { hitCh = wordsArr[wi]; break; }
          }
          if (hitCh) memLines.push(chOne + ": " + String(hitCh.m).trim());
        }
        var comps = String(word.components || "").trim();
        if (comps) memLines.push("Cấu tạo: " + comps);
        if (hanziSnap && meaningSnap) memLines.push(hanziSnap + ": " + meaningSnap);
        if (memLines.length) {
          var memTitle = document.createElement("p");
          memTitle.className = "ttc-path-fb-section";
          memTitle.textContent = "🧠 GHI NHỚ:";
          panel.appendChild(memTitle);
          var memList = document.createElement("ul");
          memList.className = "ttc-path-fb-memory";
          memLines.forEach(function(line){
            var li = document.createElement("li");
            li.textContent = line;
            memList.appendChild(li);
          });
          panel.appendChild(memList);
        }
        var eg = String(word.example || "").trim();
        if (eg) {
          var egTitle = document.createElement("p");
          egTitle.className = "ttc-path-fb-section";
          egTitle.textContent = "✏️ VÍ DỤ:";
          panel.appendChild(egTitle);
          var egZh = document.createElement("p");
          egZh.className = "ttc-path-fb-example";
          egZh.textContent = eg;
          panel.appendChild(egZh);
          if (word.examplePinyin) {
            var egPy = document.createElement("p");
            egPy.className = "ttc-path-fb-pinyin";
            egPy.textContent = String(word.examplePinyin);
            panel.appendChild(egPy);
          }
          if (word.exampleMeaning) {
            var egVi = document.createElement("p");
            egVi.className = "ttc-path-feedback-explain";
            egVi.textContent = String(word.exampleMeaning);
            panel.appendChild(egVi);
          }
        }
      } else if (ok && explain) {
        var ex2 = document.createElement("p");
        ex2.className = "ttc-path-feedback-explain";
        ex2.textContent = explain;
        panel.appendChild(ex2);
      }
      var badge = document.createElement("span");
      badge.className = "ttc-path-xp-badge";
      badge.textContent = ok ? "+10 EXP" : "−5 EXP";
      panel.appendChild(badge);
      panel.hidden = false;
      return panel;
    }

    function pathMountStepControls(hosts, cfg){
      var phase = "A";
      var solved = false;
      var advanced = false;
      var busy = false;
      var quizRoot = hosts.controls.closest
        ? (hosts.controls.closest(".ttc-path-quiz") || hosts.controls.parentNode)
        : hosts.controls.parentNode;
      var feedbackHost = quizRoot.querySelector
        ? quizRoot.querySelector(".ttc-path-feedback-host")
        : null;
      if (!feedbackHost) {
        feedbackHost = document.createElement("div");
        feedbackHost.className = "ttc-path-feedback-host";
        if (quizRoot.firstChild) quizRoot.insertBefore(feedbackHost, quizRoot.firstChild);
        else quizRoot.appendChild(feedbackHost);
      } else {
        feedbackHost.innerHTML = "";
      }

      var btnDone = document.createElement("button");
      btnDone.type = "button";
      btnDone.className = "ttc-path-btn ttc-path-btn-done";
      btnDone.textContent = "Chọn xong";
      var btnConfirm = document.createElement("button");
      btnConfirm.type = "button";
      btnConfirm.className = "ttc-path-btn ttc-path-btn-confirm";
      btnConfirm.textContent = "Xác nhận";
      var btnNext = document.createElement("button");
      btnNext.type = "button";
      btnNext.className = "ttc-path-btn ttc-path-btn-next";
      btnNext.textContent = "⏭ NEXT";
      btnNext.setAttribute("aria-label", "Bỏ qua câu, trừ 5 EXP");
      var skipMsg = document.createElement("p");
      skipMsg.className = "ttc-path-skip-msg";
      skipMsg.setAttribute("role", "alert");
      skipMsg.hidden = true;

      function syncButtons(){
        var canDone = phase === "B" && !solved && !busy && !advanced;
        var canConfirm = phase === "D" && solved && !advanced;
        var canNext = !advanced && !busy;
        btnDone.disabled = !canDone;
        btnConfirm.disabled = !canConfirm;
        btnNext.disabled = !canNext;
        btnDone.setAttribute("aria-disabled", canDone ? "false" : "true");
        btnConfirm.setAttribute("aria-disabled", canConfirm ? "false" : "true");
        btnNext.setAttribute("aria-disabled", canNext ? "false" : "true");
        btnDone.classList.toggle("ttc-path-btn-armed", phase === "B" && !solved && !busy);
        if (cfg.btnClear) {
          cfg.btnClear.disabled = !((phase === "A" || phase === "B") && !solved && !advanced);
        }
      }
            function goSelected(){
        if (solved || advanced || busy) return;
        if (phase !== "A" && phase !== "B") return;
        if (!cfg.isReady()) return;
        phase = "B";
        if (typeof cfg.onEnterSelected === "function") cfg.onEnterSelected();
        syncButtons();
      }
      function goIdle(){
        if (solved || advanced || busy) return;
        phase = "A";
        if (typeof cfg.onEnterIdle === "function") cfg.onEnterIdle();
        syncButtons();
      }
      btnDone.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        if (phase !== "B" || solved || advanced || busy) return;
        if (!cfg.isReady()) return;
        busy = true;
        syncButtons();
        if (typeof cfg.lockAll === "function") cfg.lockAll();
        var ok = !!cfg.isCorrect();
        if (ok) {
          solved = true;
          phase = "D";
          pathGradeXp(cfg.store, cfg.level, cfg.entry, true);
          pathShowFeedback(
            feedbackHost,
            true,
            cfg.answerLabel(),
            pathExplainOk(cfg.word),
            cfg.word,
            typeof cfg.answerLetter === "function" ? cfg.answerLetter() : ""
          );
        } else {
          pathGradeXp(cfg.store, cfg.level, cfg.entry, false);
          pathShowFeedback(feedbackHost, false, "", "", cfg.word, "");
          phase = "A";
          if (typeof cfg.onWrongRetry === "function") cfg.onWrongRetry();
        }
        (function pathMemAfterGrade(){
          var w = cfg.word;
          var lemma = w && w.lemma_id;
          var hsk = Number(cfg.level);
          if (!(hsk >= 1 && hsk <= 9) && w) hsk = Number(w.hsk);
          var mode = String(cfg.memoryMode || "path_quiz").slice(0, 40);
          var result = ok ? "correct" : "wrong";
          var attemptKey = "path:" + mode + ":" + String(lemma || "") + ":" + result + ":" + Date.now().toString(36) + ":" + Math.random().toString(36).slice(2, 9);
          if (typeof window.ttcVocabMemoryRecord === "function") {
            window.ttcVocabMemoryRecord({
              lemmaId: lemma,
              hskLevel: hsk,
              mode: mode,
              result: result,
              attemptKey: attemptKey
            });
          }
        })();
        busy = false;
        syncButtons();
      });
      btnConfirm.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        if (phase !== "D" || !solved || advanced || busy) return;
        advanced = true;
        phase = "E";
        syncButtons();
        pathAdvanceAfterConfirm(cfg.store, cfg.level, cfg.entry, true);
      });
      btnDone.addEventListener("keydown", function(ev){
        if (btnDone.disabled && (ev.key === "Enter" || ev.key === " ")) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      });
      btnConfirm.addEventListener("keydown", function(ev){
        if (btnConfirm.disabled && (ev.key === "Enter" || ev.key === " ")) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      });

      var answerShownByNext = false;
      var nextSkipXpApplied = false;
      btnNext.setAttribute("aria-label", "Lần 1 hiện đáp án, lần 2 sang câu tiếp");
      btnNext.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        if (advanced || busy) return;
        if (!answerShownByNext) {
          busy = true;
          syncButtons();
          skipMsg.hidden = true;
          if (!solved && !nextSkipXpApplied) {
            var xpNow = Math.max(0, Number(cfg.entry && cfg.entry.xp) || 0);
            if (xpNow < 5) {
              skipMsg.hidden = false;
              skipMsg.textContent = "Không đủ EXP để xem đáp án bỏ qua (cần ít nhất 5 EXP). EXP hiện tại: " + xpNow + ".";
              busy = false;
              syncButtons();
              return;
            }
            cfg.entry.xp = xpNow - 5;
            var daySkip = today();
            if (daySkip) cfg.entry.lastDay = daySkip;
            putEntry(cfg.store, cfg.level, cfg.entry);
            pathPaintScore(cfg.level, cfg.entry, -5);
            nextSkipXpApplied = true;
          }
          /* Lần 1: chỉ hiện đáp án đúng, không chuyển câu, không chấm/ghi nhận lại. */
          pathShowFeedback(
            feedbackHost,
            true,
            cfg.answerLabel(),
            pathExplainOk(cfg.word),
            cfg.word,
            typeof cfg.answerLetter === "function" ? cfg.answerLetter() : ""
          );
          answerShownByNext = true;
          btnNext.textContent = "⏭ NEXT · Sang câu";
          busy = false;
          syncButtons();
          return;
        }
        /* Lần 2: chuyển câu. Đã trả lời đúng thì giữ ok=true; nếu chỉ xem đáp án thì không tính hoàn thành ngày. */
        if (advanced || busy) return;
        busy = true;
        advanced = true;
        phase = "E";
        syncButtons();
        pathAdvanceAfterConfirm(cfg.store, cfg.level, cfg.entry, !!solved);
      });
      if (cfg.btnClear) hosts.controls.appendChild(cfg.btnClear);
      hosts.controls.appendChild(btnDone);
      hosts.controls.appendChild(btnConfirm);
      hosts.controls.appendChild(btnNext);
      hosts.controls.appendChild(skipMsg);
      syncButtons();
      return {
        notifyReady: function(){
          if (solved || advanced) return;
          if (cfg.isReady()) goSelected();
          else goIdle();
        },
        getPhase: function(){ return phase; },
        isGraded: function(){ return solved; },
        isSolved: function(){ return solved; }
      };
    }
    function pathQuizHosts(card, actions){
      var quiz = card.parentNode && card.parentNode.querySelector
        ? card.closest(".ttc-path-quiz") || card.parentNode
        : null;
      var choices = quiz && quiz.querySelector
        ? quiz.querySelector(".ttc-path-choices")
        : null;
      var controls = quiz && quiz.querySelector
        ? quiz.querySelector(".ttc-path-controls")
        : null;
      if (!choices) {
        choices = document.createElement("div");
        choices.className = "ttc-path-choices";
        card.insertAdjacentElement("afterend", choices);
      }
      if (!controls) {
        controls = document.createElement("div");
        controls.className = "ttc-path-controls";
        choices.insertAdjacentElement("afterend", controls);
      }
      choices.innerHTML = "";
      controls.innerHTML = "";
      if (actions) actions.innerHTML = "";
      return { choices: choices, controls: controls };
    }
    function pathNormMeaning(s){
      return String(s || "")
        .normalize("NFC")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .trim()
        .toLowerCase()
        .replace(/[.,;:!?·•、，。；：！？"'´\-–—\/\\|_|()\[\]{}]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    function pathSplitMeanings(raw){
      return String(raw || "")
        .split(/[,;/|·•、；]+/)
        .map(function(part){ return pathNormMeaning(part); })
        .filter(function(part){ return !!part; });
    }
    function pathMeaningMatches(userRaw, acceptedRaw){
      var user = pathNormMeaning(userRaw);
      if (!user) return false;
      var senses = pathSplitMeanings(acceptedRaw);
      if (!senses.length) {
        var whole = pathNormMeaning(acceptedRaw);
        return !!whole && user === whole;
      }
      for (var i = 0; i < senses.length; i++) {
        if (user === senses[i]) return true;
      }
      return user === pathNormMeaning(acceptedRaw);
    }
    function pathCollectMeaningOptions(list, word){
      var correct = String(word.m || "").trim();
      if (!correct) return [];
      var seen = Object.create(null);
      seen[pathNormMeaning(correct)] = true;
      var targetLen = correct.length;
      function meaningTokens(s){
        return pathNormMeaning(s).split(/[\s,;\/·\-–—]+/).filter(function(t){ return t.length >= 2; });
      }
      var correctTokens = meaningTokens(correct);
      var correctSenses = (correct.match(/;/g) || []).length;
      function scoreDistractor(item, m){
        var s = 0;
        var lenDiff = Math.abs(String(m).length - targetLen);
        s += Math.max(0, 40 - lenDiff * 4);
        var mt = meaningTokens(m);
        var share = 0;
        for (var ti = 0; ti < correctTokens.length; ti++) {
          if (mt.indexOf(correctTokens[ti]) >= 0) share++;
        }
        s += share * 30;
        if (word.t && item.t) {
          var wt = String(word.t).split(/[\/|,]/)[0].trim();
          var it = String(item.t).split(/[\/|,]/)[0].trim();
          if (wt && it && wt === it) s += 24;
          else if (word.t && item.t && String(word.t) === String(item.t)) s += 18;
        }
        if (word.hsk && item.hsk && Number(item.hsk) === Number(word.hsk)) s += 10;
        var wh = String(word.h || "");
        var ih = String(item.h || "");
        var sharedHan = false;
        if (wh && ih) {
          for (var ci = 0; ci < wh.length; ci++) {
            var ch = wh.charAt(ci);
            if (/[\u4e00-\u9fff]/.test(ch) && ih.indexOf(ch) >= 0) { sharedHan = true; s += 18; break; }
          }
        }
        var senseM = (m.match(/;/g) || []).length;
        if (senseM > correctSenses + 1) s -= 14;
        if (share === 0 && !sharedHan && lenDiff > 5) s -= 10;
        if (lenDiff <= 3) s += 6;
        return s;
      }
      var pool = [];
      shuffle(list.slice()).forEach(function(item){
        if (!item || !item.m) return;
        if (item.h === word.h) return;
        var m = String(item.m).trim();
        var key = pathNormMeaning(m);
        if (!key || seen[key]) return;
        if (Math.abs(m.length - targetLen) > 10) return;
        if (m.length > targetLen * 2.2 + 6 || m.length + 6 < targetLen * 0.4) return;
        seen[key] = true;
        pool.push({ m: m, score: scoreDistractor(item, m), len: m.length });
      });
      pool.sort(function(a, b){ return b.score - a.score || Math.abs(a.len - targetLen) - Math.abs(b.len - targetLen); });
      var options = [correct];
      var usedFirst = Object.create(null);
      function takeFrom(minScore, requireRelate){
        for (var i = 0; i < pool.length && options.length < 5; i++) {
          var cand = pool[i];
          if (!cand || cand._used) continue;
          if (cand.score < minScore) continue;
          var mt = meaningTokens(cand.m);
          var related = false;
          for (var j = 0; j < correctTokens.length; j++) if (mt.indexOf(correctTokens[j]) >= 0) { related = true; break; }
          if (requireRelate && !related && cand.score < 55) continue;
          var ft = mt[0] || "";
          if (ft && usedFirst[ft] && options.length < 4) continue;
          cand._used = true;
          if (ft) usedFirst[ft] = true;
          options.push(cand.m);
        }
      }
      takeFrom(40, true);
      takeFrom(18, false);
      for (var k = 0; k < pool.length && options.length < 5; k++) {
        if (pool[k]._used) continue;
        pool[k]._used = true;
        options.push(pool[k].m);
      }
      return options;
    }

    /* ===== TTC PATH QUESTION COLOR (scoped #ttcDailyVocab) ===== */
    var TTC_PATH_QCOLOR_KEY = "ttc_path_q_color_v1";
    var TTC_PATH_QCOLOR_DEFAULT = "#16803C";
    var TTC_PATH_QCOLOR_BG = "#f0fdf4";
    var TTC_PATH_QCOLOR_PRESETS = [
      { name: "Xanh lá cây đậm", hex: "#16803C" },
      { name: "Xanh lá cây", hex: "#16A34A" },
      { name: "Xanh ngọc", hex: "#0F766E" },
      { name: "Xanh dương đậm", hex: "#1E3A8A" },
      { name: "Xanh dương", hex: "#1D4ED8" },
      { name: "Xanh da trời", hex: "#0369A1" },
      { name: "Tím đậm", hex: "#6B21A8" },
      { name: "Tím", hex: "#7C3AED" },
      { name: "Hồng đậm", hex: "#BE185D" },
      { name: "Đỏ đậm", hex: "#991B1B" },
      { name: "Đỏ", hex: "#DC2626" },
      { name: "Cam đậm", hex: "#C2410C" },
      { name: "Cam", hex: "#EA580C" },
      { name: "Nâu", hex: "#7C2D12" },
      { name: "Đen", hex: "#0F172A" },
      { name: "Xám đậm", hex: "#334155" }
    ];
    function ttcPathQColorNorm(hex){
      var h = String(hex || "").trim().toUpperCase();
      if(/^#[0-9A-F]{6}$/.test(h)) return h;
      if(/^#[0-9A-F]{3}$/.test(h)){
        return ("#" + h[1]+h[1]+h[2]+h[2]+h[3]+h[3]).toUpperCase();
      }
      return "";
    }
    function ttcPathQColorLuminance(hex){
      var n = ttcPathQColorNorm(hex);
      if(!n) return 1;
      function chan(v){
        v = v / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      }
      var r = parseInt(n.slice(1,3), 16);
      var g = parseInt(n.slice(3,5), 16);
      var b = parseInt(n.slice(5,7), 16);
      return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
    }
    function ttcPathQColorContrast(fg, bg){
      var L1 = ttcPathQColorLuminance(fg);
      var L2 = ttcPathQColorLuminance(bg);
      var hi = Math.max(L1, L2);
      var lo = Math.min(L1, L2);
      return (hi + 0.05) / (lo + 0.05);
    }
    function ttcPathQColorLoad(){
      try{
        var raw = localStorage.getItem(TTC_PATH_QCOLOR_KEY) || "";
        var n = ttcPathQColorNorm(raw);
        if(n) return n;
      }catch(e){}
      return TTC_PATH_QCOLOR_DEFAULT;
    }
    function ttcPathQColorSave(hex){
      try{ localStorage.setItem(TTC_PATH_QCOLOR_KEY, hex); }catch(e){}
    }
    function ttcPathQColorApply(hex, opts){
      opts = opts || {};
      var n = ttcPathQColorNorm(hex) || TTC_PATH_QCOLOR_DEFAULT;
      var ratio = ttcPathQColorContrast(n, TTC_PATH_QCOLOR_BG);
      var host = document.getElementById("ttcDailyVocab");
      var warn = host && host.querySelector(".ttc-path-qcolor-warn");
      if(ratio < 4.5){
        if(warn){
          warn.hidden = false;
          warn.textContent = "Màu này khó đọc trên nền câu hỏi (tương phản " + ratio.toFixed(2) + ":1). Hãy chọn màu đậm hơn. Gợi ý: " + TTC_PATH_QCOLOR_DEFAULT;
        }
        if(!opts.force){
          return false;
        }
      }else if(warn){
        warn.hidden = true;
        warn.textContent = "";
      }
      if(host){
        host.style.setProperty("--ttc-path-q-fg", n);
      }
      ttcPathQColorSave(n);
      var hexEl = host && host.querySelector(".ttc-path-qcolor-hex");
      if(hexEl) hexEl.textContent = n;
      var custom = host && host.querySelector(".ttc-path-qcolor-custom");
      if(custom) custom.value = n;
      if(host){
        host.querySelectorAll(".ttc-path-qcolor-swatch").forEach(function(btn){
          btn.classList.toggle("is-on", ttcPathQColorNorm(btn.getAttribute("data-hex")) === n);
        });
      }
      return true;
    }
    function ttcPathQColorClosePanel(host){
      var btn = host && host.querySelector("#ttcPathQColorBtn");
      var panel = host && host.querySelector("#ttcPathQColorPanel");
      if(btn) btn.setAttribute("aria-expanded", "false");
      if(panel) panel.hidden = true;
    }
    function ttcPathQColorMount(host){
      if(!host) return;
      var btn = host.querySelector("#ttcPathQColorBtn");
      var panel = host.querySelector("#ttcPathQColorPanel");
      if(!btn || !panel) return;
      if(panel.getAttribute("data-ready") === "1"){
        ttcPathQColorApply(ttcPathQColorLoad(), { force: true });
        return;
      }
      var html = "";
      html += "<p class='ttc-path-qcolor-title'>Chọn màu chữ câu hỏi</p>";
      html += "<div class='ttc-path-qcolor-grid' role='listbox' aria-label='Bảng màu câu hỏi'>";
      for(var i = 0; i < TTC_PATH_QCOLOR_PRESETS.length; i++){
        var p = TTC_PATH_QCOLOR_PRESETS[i];
        html += "<button type='button' class='ttc-path-qcolor-swatch' role='option' data-hex='" + p.hex + "' title='" + p.name + "' aria-label='" + p.name + "' style='background:" + p.hex + "'></button>";
      }
      html += "</div>";
      html += "<div class='ttc-path-qcolor-row'>";
      html += "<label style='font-size:12px;font-weight:800;color:#334155'>Tùy chỉnh</label>";
      html += "<input type='color' class='ttc-path-qcolor-custom' aria-label='Chọn màu tùy chỉnh' />";
      html += "<span class='ttc-path-qcolor-hex'></span>";
      html += "</div>";
      html += "<p class='ttc-path-qcolor-warn' hidden></p>";
      html += "<div class='ttc-path-qcolor-actions'>";
      html += "<button type='button' data-act='default'>Mặc định xanh lá</button>";
      html += "<button type='button' data-act='reset'>Đặt lại màu</button>";
      html += "<button type='button' data-act='close'>Đóng</button>";
      html += "</div>";
      panel.innerHTML = html;
      panel.setAttribute("data-ready", "1");

      btn.addEventListener("click", function(){
        var open = btn.getAttribute("aria-expanded") === "true";
        open = !open;
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        panel.hidden = !open;
      });
      panel.addEventListener("click", function(ev){
        var t = ev.target;
        if(!t) return;
        if(t.classList && t.classList.contains("ttc-path-qcolor-swatch")){
          var hx = t.getAttribute("data-hex");
          if(ttcPathQColorApply(hx)){
            ttcPathQColorClosePanel(host);
          }
          return;
        }
        var act = t.getAttribute && t.getAttribute("data-act");
        if(act === "default" || act === "reset"){
          ttcPathQColorApply(TTC_PATH_QCOLOR_DEFAULT, { force: true });
          ttcPathQColorClosePanel(host);
        }else if(act === "close"){
          ttcPathQColorClosePanel(host);
        }
      });
      var custom = panel.querySelector(".ttc-path-qcolor-custom");
      if(custom){
        custom.addEventListener("input", function(){
          ttcPathQColorApply(custom.value);
        });
        custom.addEventListener("change", function(){
          if(ttcPathQColorApply(custom.value)){
            ttcPathQColorClosePanel(host);
          }
        });
      }
      ttcPathQColorApply(ttcPathQColorLoad(), { force: true });
    }

    function askMeaning(store, level, entry, list, word, card, actions){
      var hosts = pathQuizHosts(card, actions);
      var hv = (typeof ttcHanVietName === "function") ? ttcHanVietName(word.h) : "";
      var options = pathCollectMeaningOptions(list, word);
      card.innerHTML = "";
      var qBox = document.createElement("div");
      qBox.className = "ttc-path-q";
      var qLab = document.createElement("p");
      qLab.className = "ttc-path-q-label";
      qLab.textContent = "Chọn nghĩa tiếng Việt đúng";
      var qHan = document.createElement("b");
      qHan.className = "ttc-daily-hanzi";
      qHan.textContent = word.h || "";
      if (hv) {
        var hvSpan = document.createElement("span");
        hvSpan.className = "ttc-han-viet";
        hvSpan.textContent = " [" + hv + "]";
        qHan.appendChild(document.createTextNode(" "));
        qHan.appendChild(hvSpan);
      }
      qBox.appendChild(qLab);
      qBox.appendChild(qHan);
      if (word.p) {
        var qPy = document.createElement("p");
        qPy.className = "ttc-daily-py";
        qPy.textContent = String(word.p);
        qBox.appendChild(qPy);
      }
      card.appendChild(qBox);

      if (options.length < 4) {
        var hint = document.createElement("p");
        hint.className = "ttc-path-q-hint";
        hint.textContent = "Không đủ đáp án nhiễu phù hợp — hãy nhập nghĩa tiếng Việt.";
        qBox.appendChild(hint);
        var input = document.createElement("input");
        input.type = "text";
        input.className = "ttc-path-input";
        input.setAttribute("autocomplete", "off");
        input.setAttribute("autocapitalize", "off");
        input.placeholder = "Nhập nghĩa tiếng Việt";
        hosts.choices.appendChild(input);
        var stepsIn = pathMountStepControls(hosts, {
          store: store, level: level, entry: entry, word: word,
          memoryMode: "path_ask_meaning",
          isReady: function(){ return !!pathNormMeaning(input.value); },
          isCorrect: function(){ return pathMeaningMatches(input.value, word.m); },
          answerLabel: function(){ return String(word.m || ""); },
          lockAll: function(){ input.disabled = true; },
          onWrongRetry: function(){
            input.disabled = false;
            try { input.select(); } catch (e) {}
          }
        });
        input.addEventListener("input", function(){ stepsIn.notifyReady(); });
        input.addEventListener("keydown", function(ev){
          if (ev.key === "Enter" || ev.key === " ") ev.preventDefault();
        });
        return;
      }

      var selected = null;
      var lockedPick = false;
      var letters = ["A", "B", "C", "D", "E"];
      var choiceButtons = [];
      var letterByMeaning = Object.create(null);
      var stepsMcq = pathMountStepControls(hosts, {
        store: store, level: level, entry: entry, word: word,
        memoryMode: "path_ask_meaning",
        isReady: function(){ return selected != null; },
        isCorrect: function(){ return selected === word.m; },
        answerLabel: function(){ return String(word.m || ""); },
        answerLetter: function(){ return letterByMeaning[pathNormMeaning(word.m)] || ""; },
        lockAll: function(){
          lockedPick = true;
          choiceButtons.forEach(function(el){ el.disabled = true; });
        },
        onEnterSelected: function(){
          // Keep choices editable until "Chọn xong"
          lockedPick = false;
          choiceButtons.forEach(function(el){ el.disabled = false; });
        },
        onWrongRetry: function(){
          selected = null;
          lockedPick = false;
          choiceButtons.forEach(function(el){
            el.disabled = false;
            el.classList.remove("ttc-path-choice-on");
          });
          var quiz = hosts.choices.closest ? hosts.choices.closest(".ttc-path-quiz") : null;
          if (quiz) {
            quiz.classList.remove("ttc-path-quiz-shake");
            void quiz.offsetWidth;
            quiz.classList.add("ttc-path-quiz-shake");
            setTimeout(function(){ quiz.classList.remove("ttc-path-quiz-shake"); }, 450);
          }
        }
      });
      shuffle(options).forEach(function(meaning, idx){
        var button = document.createElement("button");
        button.type = "button";
        button.className = "ttc-path-choice ttc-path-choice-3d";
        button.setAttribute("data-meaning", meaning);
        button.setAttribute("data-letter", letters[idx]);
        letterByMeaning[pathNormMeaning(meaning)] = letters[idx];
        button.innerHTML = "<span class='ttc-path-choice-key'>" + letters[idx] + "</span><span class='ttc-path-choice-text'>" + esc(meaning) + "</span>";
        button.addEventListener("click", function(){
          if (lockedPick || stepsMcq.isSolved()) return;
          if (selected === meaning) {
            selected = null;
            choiceButtons.forEach(function(el){
              el.classList.remove("ttc-path-choice-on");
              el.disabled = false;
            });
            stepsMcq.notifyReady();
            return;
          }
          selected = meaning;
          choiceButtons.forEach(function(el){
            el.classList.toggle("ttc-path-choice-on", el === button);
            el.disabled = false;
          });
          stepsMcq.notifyReady();
        });
        choiceButtons.push(button);
        hosts.choices.appendChild(button);
      });
    }
    function askTiles(store, level, entry, list, word, card, actions){
      var hosts = pathQuizHosts(card, actions);
      card.innerHTML = "";
      var q = document.createElement("div");
      q.className = "ttc-path-q";
      var qLabel = document.createElement("p");
      qLabel.className = "ttc-path-q-label";
      qLabel.textContent = "Ghép chữ Hán đúng với nghĩa";
      var qMeaning = document.createElement("p");
      qMeaning.className = "ttc-path-q-meaning";
      qMeaning.textContent = word.m || "";
      var line = document.createElement("div");
      line.className = "ttc-path-build ttc-path-slots";
      line.setAttribute("aria-label", "Ô điền chữ Hán");
      q.appendChild(qLabel);
      q.appendChild(qMeaning);
      q.appendChild(line);
      card.appendChild(q);
      var answerChars = Array.from(String(word.h || ""));
      var targetLen = answerChars.length;
      var tiles = answerChars.slice();
      shuffle(list.slice()).some(function(item){
        Array.from(item.h || "").forEach(function(ch){
          if (tiles.length < 10 && tiles.indexOf(ch) < 0) tiles.push(ch);
        });
        return tiles.length >= 10;
      });
      var slots = [];
      for (var si = 0; si < targetLen; si++) slots.push(null);
      var pendingSlot = -1;
      var locked = false;
      var tileButtons = [];
      var stepsTile;

      function filledCount(){
        var n = 0;
        for (var i = 0; i < targetLen; i++) if (slots[i]) n++;
        return n;
      }
      function getBuilt(){
        var out = "";
        for (var i = 0; i < targetLen; i++) out += slots[i] ? slots[i].ch : "";
        return out;
      }
      function syncTileClasses(){
        tileButtons.forEach(function(btn){
          var used = false;
          for (var i = 0; i < targetLen; i++) {
            if (slots[i] && slots[i].btn === btn) { used = true; break; }
          }
          btn.classList.toggle("ttc-daily-char-used", used);
          btn.setAttribute("aria-pressed", used ? "true" : "false");
          // Never disable before confirm — only lockAll after "Chọn xong"
          if (!locked) btn.disabled = false;
        });
      }
      function paint(){
        line.innerHTML = "";
        for (var i = 0; i < targetLen; i++) {
          var slot = document.createElement("button");
          slot.type = "button";
          var has = !!slots[i];
          slot.className = "ttc-path-slot" + (has ? " ttc-path-slot-filled" : " ttc-path-slot-empty") + (pendingSlot === i ? " ttc-path-slot-pending" : "");
          slot.textContent = has ? slots[i].ch : "";
          slot.setAttribute("aria-label", has ? ("Ô " + (i + 1) + ": " + slots[i].ch + ". Nhấn để bỏ chọn hoặc đổi vị trí.") : ("Ô trống " + (i + 1)));
          slot.disabled = !!locked;
          (function(idx){
            slot.addEventListener("click", function(ev){
              if (ev) { ev.preventDefault(); ev.stopPropagation(); }
              if (locked || !stepsTile || stepsTile.isSolved()) return;
              if (!slots[idx]) {
                pendingSlot = -1;
                paint();
                return;
              }
              if (pendingSlot < 0) {
                pendingSlot = idx;
                paint();
                return;
              }
              if (pendingSlot === idx) {
                // second tap same slot = remove
                slots[idx] = null;
                pendingSlot = -1;
                syncTileClasses();
                paint();
                stepsTile.notifyReady();
                return;
              }
              // swap positions
              var tmp = slots[pendingSlot];
              slots[pendingSlot] = slots[idx];
              slots[idx] = tmp;
              pendingSlot = -1;
              syncTileClasses();
              paint();
              stepsTile.notifyReady();
            });
          })(i);
          line.appendChild(slot);
        }
        syncTileClasses();
      }

      function placeTile(button, ch){
        // If this button already placed, remove it (toggle off)
        for (var i = 0; i < targetLen; i++) {
          if (slots[i] && slots[i].btn === button) {
            slots[i] = null;
            pendingSlot = -1;
            syncTileClasses();
            paint();
            stepsTile.notifyReady();
            return;
          }
        }
        // If a slot is pending, replace that slot
        if (pendingSlot >= 0 && pendingSlot < targetLen) {
          slots[pendingSlot] = { ch: ch, btn: button };
          pendingSlot = -1;
          syncTileClasses();
          paint();
          stepsTile.notifyReady();
          return;
        }
        // First empty slot
        var empty = -1;
        for (var j = 0; j < targetLen; j++) {
          if (!slots[j]) { empty = j; break; }
        }
        if (empty < 0) {
          // Full: replace last slot
          empty = targetLen - 1;
        }
        slots[empty] = { ch: ch, btn: button };
        pendingSlot = -1;
        syncTileClasses();
        paint();
        stepsTile.notifyReady();
      }

      paint();
      var tileBox = document.createElement("div");
      tileBox.className = "ttc-path-tiles";
      shuffle(tiles).forEach(function(ch){
        var button = document.createElement("button");
        button.type = "button";
        button.className = "ttc-daily-char";
        button.textContent = ch;
        button.addEventListener("click", function(ev){
          if (ev) { ev.preventDefault(); ev.stopPropagation(); }
          if (locked || !stepsTile || stepsTile.isSolved()) return;
          placeTile(button, ch);
        });
        tileButtons.push(button);
        tileBox.appendChild(button);
      });
      hosts.choices.appendChild(tileBox);
      var btnClear = document.createElement("button");
      btnClear.type = "button";
      btnClear.className = "ttc-path-btn ttc-path-btn-clear";
      btnClear.textContent = "Xóa";
      stepsTile = pathMountStepControls(hosts, {
        store: store, level: level, entry: entry, word: word,
        memoryMode: "path_ask_tiles",
        btnClear: btnClear,
        isReady: function(){ return filledCount() === targetLen && targetLen > 0; },
        isCorrect: function(){ return getBuilt() === String(word.h || ""); },
        answerLabel: function(){ return String(word.h || ""); },
        lockAll: function(){
          locked = true;
          pendingSlot = -1;
          tileButtons.forEach(function(el){ el.disabled = true; });
          btnClear.disabled = true;
          paint();
        },
        onEnterIdle: function(){ locked = false; },
        onEnterSelected: function(){ /* keep editable until Chọn xong */ locked = false; },
        onWrongRetry: function(){
          for (var i = 0; i < targetLen; i++) slots[i] = null;
          pendingSlot = -1;
          locked = false;
          paint();
          tileButtons.forEach(function(el){ el.disabled = false; });
          btnClear.disabled = false;
        }
      });
      btnClear.addEventListener("click", function(ev){
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        if (stepsTile.isSolved()) return;
        if (stepsTile.getPhase() !== "A" && stepsTile.getPhase() !== "B") return;
        for (var i = 0; i < targetLen; i++) slots[i] = null;
        pendingSlot = -1;
        locked = false;
        paint();
        tileButtons.forEach(function(el){ el.disabled = false; });
        stepsTile.notifyReady();
      });
    }
    function setup(store, level, entry){
      try { stopPathWorldTicker(); } catch (eSetupTk) {}
      pickedLevel = level;
      if (entry && parseDaily(entry.daily) != null) pickedDaily = Number(entry.daily);
      var progress = hasProgress(entry);
      var list = levelWords(level);
      var setupState = progress ? viewState(level, entry) : { on: false, daily: pickedDaily, todayDone: 0, level: level, xp: 0, index: 0 };
      box.innerHTML = "<h3>Lộ trình học từ</h3>"
        + goalReminderHtml(progress ? setupState : { on: false, daily: 0, level: level })
        + memoryVaultShell(level)
        + (progress ? overviewHtml(setupState, list) : "")
        + syncNoticeHtml(level)
        + "<div class='ttc-path-explain-bar'>"
        +   "<button type='button' class='ttc-path-explain-toggle' aria-expanded='false'>Giải thích cách học</button>"
        +   "<div class='ttc-path-explain-panel ttc-daily-note' hidden>" + pathGuideHtml() + "</div>"
        + "</div>"
        + "<p class='ttc-daily-note'>" + (progress
          ? "Cấp HSK " + level + " còn tiến độ đã lưu. Bấm Tiếp tục để học tiếp, không mất XP hay vị trí cũ."
          : "Chọn cấp và số từ mỗi ngày. Bắt đầu thì mới mở bài. Huỷ thì dừng nhắc.") + "</p>"
        + goalsShell()
        + "<div class='ttc-daily-actions'></div>";
      var setupExplainToggle = box.querySelector(".ttc-path-explain-toggle");
      var setupExplainPanel = box.querySelector(".ttc-path-explain-panel");
      if (setupExplainToggle && setupExplainPanel) {
        setupExplainToggle.addEventListener("click", function(){
          var open = setupExplainToggle.getAttribute("aria-expanded") === "true";
          open = !open;
          setupExplainToggle.setAttribute("aria-expanded", open ? "true" : "false");
          setupExplainPanel.hidden = !open;
        });
      }
      try { bindGoalRemindOk(level); } catch (eGoalSetup) {}
      try { mountMemoryVault(level, list, store, entry); } catch (eVaultSetup) {}
      bindConflictActions(level);
      bindLevelButtons(box.querySelector(".ttc-path-levels"), pickedLevel, function(nextLevel){
        store.activeLevel = nextLevel;
        pickedLevel = nextLevel;
        saveStore(store);
        draw();
      });
      bindDailyControls(box.querySelector(".ttc-path-goals"), pickedDaily, function(daily){
        pickedDaily = daily;
      });
      var start = document.createElement("button");
      start.type = "button";
      start.textContent = progress ? "Tiếp tục" : "Bắt đầu";
      start.addEventListener("click", function(){
        var daily = parseDaily(pickedDaily);
        if (daily == null) {
          var err = box.querySelector(".ttc-path-daily-error");
          if (err) err.textContent = "Nhập số nguyên từ " + DAILY_MIN + " đến " + DAILY_MAX + ".";
          return;
        }
        var levelToStart = pickedLevel;
        pathCheckAccess(levelToStart).then(function(ok){
          if (!ok) return;
          var day = today();
          var next = entry ? entry : {
            on: true,
            daily: daily,
            index: 0,
            xp: 0,
            today: day || "",
            todayDone: 0,
            lastDay: ""
          };
          next.on = true;
          next.daily = daily;
          if (next.index == null) next.index = 0;
          if (next.xp == null) next.xp = 0;
          if (next.todayDone == null) next.todayDone = 0;
          if (!next.today && day) next.today = day;
          if (next.lastDay == null) next.lastDay = "";
          putEntry(store, levelToStart, next);
          goalsPanelOpen = false;
          draw();
        });
      });
      box.querySelector(".ttc-daily-actions").appendChild(start);
      syncBoard(viewState(level, entry || { daily: pickedDaily, xp: 0, todayDone: 0 }), document.getElementById("ttcAchHost"));
    }
    window.__ttcPathRedraw = draw;
    draw();
  };
})();


window.otter2OpenAchievementBoard = function(){
  var box = document.getElementById("ttcAchHost");
  if (!box) return;
  if (typeof window.ttcEnsurePathShell === "function") window.ttcEnsurePathShell();
  box = document.getElementById("ttcAchHost");
  if (!box) return;
  var openBtn = box.querySelector("#ttcAchOpen");
  if (openBtn) { openBtn.click(); return; }
  // fallback: force levels view via closed paint then click path
  try {
    if (box.dataset.ready !== "1") {
      box.dataset.ready = "1";
    }
  } catch (e) {}
  if (openBtn) openBtn.click();
};
;(function otter2PathBoot(){
  function mountShellInsideHost(){
    var host = document.getElementById("otter2PathHost") || document.getElementById("ttcTopLearningHub");
    if (!host) return null;
    if (host.id !== "ttcTopLearningHub") host.id = "ttcTopLearningHub";
    if (typeof window.ttcEnsurePathShell === "function") window.ttcEnsurePathShell();
    var shell = document.getElementById("ttcPathShell");
    if (shell && shell.parentNode !== host) host.appendChild(shell);
    document.querySelectorAll("#ttcPathShell").forEach(function (el, idx) { if (idx > 0) el.remove(); });
    document.querySelectorAll("#ttcPathLauncher").forEach(function (el, idx) { if (idx > 0) el.remove(); });
    document.querySelectorAll("#ttcAchHost").forEach(function (el, idx) { if (idx > 0) el.remove(); });
    return host;
  }
  function boot(){
    mountShellInsideHost();
    if (typeof window.ttcMountDailyVocab === "function") window.ttcMountDailyVocab();
    var launch = document.getElementById("ttcPathLauncher");
    if (launch) launch.textContent = "Học từ vựng theo lộ trình";
    console.info("Otter2 vocab roadmap ready", (window.words || []).length);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
