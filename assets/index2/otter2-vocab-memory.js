/**
 * Otter2 vocab memory — ported from index1 Phase 3C / 3C.1
 * RPC ttc_vocab_memory_record + table ttc_vocab_memory (RLS).
 */
(function(){
"use strict";
async function getCurrentUser(){
  if(window.currentUser && window.currentUser.id) return window.currentUser;
  if(window.otter2Account && window.otter2Account.user){
    window.currentUser = window.otter2Account.user;
    return window.currentUser;
  }
  var client = typeof getSupabaseClient === "function" ? getSupabaseClient() : window.supabase;
  if(!client || !client.auth) return null;
  try{
    var res = await client.auth.getUser();
    var user = res && res.data && res.data.user;
    if(user){ window.currentUser = user; return user; }
  }catch(e){}
  return null;
}
/* Phase 3C: GHI BỘ NHỚ TỪ VỰNG (RPC ttc_vocab_memory_record)
   Không sửa XP / điểm Test. Guest không ghi. Retry giữ cùng client_event_id. */
window.__ttcVocabMemPending = window.__ttcVocabMemPending || Object.create(null);

function ttcVocabMemUuidOk(id){
  return typeof id === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
}

function ttcVocabMemNewClientEventId(){
  try{
    if(window.crypto && typeof window.crypto.randomUUID === "function"){
      return "vm-" + window.crypto.randomUUID();
    }
  }catch(e){}
  return "vm-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12) + "-" + Math.random().toString(36).slice(2, 8);
}

function ttcVocabMemShowNote(msg, isError){
  var el = document.getElementById("ttcVocabMemSyncNote");
  if(!el){
    el = document.createElement("div");
    el.id = "ttcVocabMemSyncNote";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.style.cssText = "display:none;position:fixed;z-index:1000060;left:50%;bottom:18px;transform:translateX(-50%);max-width:min(420px,calc(100% - 24px));padding:10px 14px;border-radius:12px;border:1px solid #E3E8EF;background:#fff;color:#16283F;font-size:13px;font-weight:700;box-shadow:0 8px 20px rgba(15,23,42,.12);text-align:center;";
    document.body.appendChild(el);
  }
  if(!msg){
    el.style.display = "none";
    el.textContent = "";
    return;
  }
  el.textContent = msg;
  el.style.display = "block";
  el.style.borderColor = isError ? "#fca5a5" : "#fecdd3";
  el.style.color = isError ? "#b91c1c" : "#9f1239";
  clearTimeout(el._ttcHide);
  el._ttcHide = setTimeout(function(){
    el.style.display = "none";
  }, 4500);
}

async function ttcVocabMemoryRecord(opts){
  if(!opts || !opts.attemptKey){
    return { ok:false, status:"bad_args" };
  }
  var pending = window.__ttcVocabMemPending;
  var slot = pending[opts.attemptKey];
  if(slot && slot.status === "done"){
    return { ok:true, status:"already_done" };
  }
  if(slot && slot.status === "sending"){
    return { ok:false, status:"in_flight" };
  }

  var lemmaId = String(opts.lemmaId || "");
  var hskLevel = Number(opts.hskLevel);
  var mode = String(opts.mode || "").trim();
  var result = opts.result === "correct" ? "correct" : (opts.result === "wrong" ? "wrong" : "");

  if(!ttcVocabMemUuidOk(lemmaId)){
    console.warn("ttcVocabMemoryRecord: invalid lemma_id", lemmaId);
    return { ok:false, status:"invalid_lemma" };
  }
  if(!(hskLevel >= 1 && hskLevel <= 9)){
    console.warn("ttcVocabMemoryRecord: invalid hsk", hskLevel);
    return { ok:false, status:"invalid_hsk" };
  }
  if(!mode || mode.length > 40 || !result){
    return { ok:false, status:"bad_args" };
  }

  var user = null;
  try{
    user = await getCurrentUser();
  }catch(e){
    user = null;
  }
  if(!user){
    return { ok:false, status:"guest" };
  }

  /* Phase 3D.1: Free chỉ ghi HSK1–2; HSK3–9 cần Premium/Free Trial hợp lệ. Guest đã chặn ở trên. */
  if(hskLevel >= 3){
    var premiumOk = false;
    try{
      if(typeof hasPremiumAccess === "function"){
        premiumOk = !!(await hasPremiumAccess());
      }
    }catch(ePrem){
      premiumOk = false;
    }
    if(!premiumOk){
      console.warn("ttcVocabMemoryRecord: premium_required for HSK", hskLevel);
      return { ok:false, status:"premium_required" };
    }
  }

  if(!slot){
    slot = {
      clientEventId: ttcVocabMemNewClientEventId(),
      lemmaId: lemmaId,
      hskLevel: hskLevel,
      mode: mode,
      result: result,
      status: "pending"
    };
    pending[opts.attemptKey] = slot;
  }

  var client = getSupabaseClient();
  if(!client || typeof client.rpc !== "function"){
    slot.status = "pending";
    ttcVocabMemShowNote("Chưa đồng bộ bộ nhớ từ (mất kết nối). XP/điểm không đổi.", true);
    if(!opts._retried){
      opts._retried = true;
      setTimeout(function(){ ttcVocabMemoryRecord(opts); }, 2000);
    }
    return { ok:false, status:"no_client" };
  }

  slot.status = "sending";
  try{
    var res = await client.rpc("ttc_vocab_memory_record", {
      p_lemma_id: slot.lemmaId,
      p_hsk_level: slot.hskLevel,
      p_mode: slot.mode,
      p_result: slot.result,
      p_client_event_id: slot.clientEventId
    });
    if(res && res.error){
      slot.status = "pending";
      ttcVocabMemShowNote("Chưa đồng bộ bộ nhớ từ. Sẽ gửi lại cùng sự kiện; XP/điểm không đổi.", true);
      console.warn("ttcVocabMemoryRecord rpc error:", res.error);
      if(!opts._retried){
        opts._retried = true;
        setTimeout(function(){ ttcVocabMemoryRecord(opts); }, 2000);
      }
      return { ok:false, status:"rpc_error", error: res.error };
    }
    var data = res && res.data;
    if(data && data.ok === false){
      if(data.status === "not_authenticated"){
        slot.status = "pending";
        return { ok:false, status:"not_authenticated" };
      }
      if(data.status === "duplicate"){
        slot.status = "done";
        return { ok:true, status:"duplicate", data: data };
      }
      slot.status = "pending";
      ttcVocabMemShowNote("Chưa đồng bộ bộ nhớ từ (" + String(data.message || data.status || "lỗi") + ").", true);
      return { ok:false, status:"rejected", data: data };
    }
    slot.status = "done";
    try{
      if(data && data.memory && typeof ttcVocabMemApplyRow === "function"){
        ttcVocabMemApplyRow(data.memory);
      }
    }catch(eMemCache){}
    return { ok:true, status:"ok", data: data };
  }catch(err){
    slot.status = "pending";
    ttcVocabMemShowNote("Chưa đồng bộ bộ nhớ từ (lỗi mạng). XP/điểm không đổi.", true);
    console.warn("ttcVocabMemoryRecord network:", err);
    if(!opts._retried){
      opts._retried = true;
      setTimeout(function(){ ttcVocabMemoryRecord(opts); }, 2000);
    }
    return { ok:false, status:"network", error: err };
  }
}

window.ttcVocabMemoryRecord = ttcVocabMemoryRecord;

/* =========================================================
   Phase 3C.1: ĐỌC HỒ SƠ GHI NHỚ (RLS user tự đọc) + ưu tiên ôn
   Không thêm cột/RPC. Không tạo trạng thái giả.
========================================================= */
window.__ttcVocabMemCache = window.__ttcVocabMemCache || {
  fetchedAt: 0,
  userId: null,
  rows: [],
  byLemma: Object.create(null),
  error: null
};

function ttcVocabMemTodayStr(){
  try{
    if(typeof window.ttcServerTodayCached === "string" && /^\d{4}-\d{2}-\d{2}$/.test(window.ttcServerTodayCached)){
      return window.ttcServerTodayCached;
    }
  }catch(e0){}
  try{
    return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh" }).format(new Date());
  }catch(e1){
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
}

function ttcVocabMemApplyRow(row){
  if(!row || !row.vocab_id) return;
  var cache = window.__ttcVocabMemCache;
  if(!cache.byLemma) cache.byLemma = Object.create(null);
  cache.byLemma[String(row.vocab_id)] = row;
  var found = false;
  for(var i = 0; i < cache.rows.length; i++){
    if(String(cache.rows[i].vocab_id) === String(row.vocab_id)){
      cache.rows[i] = row;
      found = true;
      break;
    }
  }
  if(!found) cache.rows.push(row);
}

function ttcVocabMemBucketOf(row, todayStr){
  if(!row) return "new";
  var st = String(row.status || "");
  var wrong = Number(row.wrong_count) || 0;
  var correct = Number(row.correct_count) || 0;
  var next = row.next_review_at ? String(row.next_review_at).slice(0, 10) : "";
  var due = !!(next && todayStr && next <= todayStr);
  if(due || st === "review") return "due";
  if(wrong > 0 && wrong >= correct) return "wrong_heavy";
  if(st === "mastered") return "mastered";
  if(st === "learning" || (Number(row.practice_count) || 0) > 0) return "learning";
  if(st === "new") return "new";
  return "learning";
}

async function ttcVocabMemoryLoadMine(opts){
  opts = opts || {};
  var force = !!opts.force;
  var hskFilter = opts.hskLevel != null ? Number(opts.hskLevel) : null;
  var user = null;
  try{
    user = await getCurrentUser();
  }catch(eU){
    user = null;
  }
  if(!user){
    return { ok: false, status: "guest", rows: [], byLemma: Object.create(null) };
  }
  var cache = window.__ttcVocabMemCache;
  var now = Date.now();
  if(
    !force &&
    cache.userId === user.id &&
    (now - Number(cache.fetchedAt || 0)) < 45000 &&
    Array.isArray(cache.rows)
  ){
    var cachedRows = cache.rows;
    if(hskFilter >= 1 && hskFilter <= 9){
      cachedRows = cachedRows.filter(function(r){ return Number(r.hsk_level) === hskFilter; });
    }
    return { ok: true, status: "cache", rows: cachedRows, byLemma: cache.byLemma, error: cache.error };
  }
  var client = typeof getSupabaseClient === "function" ? getSupabaseClient() : null;
  if(!client || typeof client.from !== "function"){
    return { ok: false, status: "no_client", rows: [], byLemma: Object.create(null) };
  }
  try{
    var res = await client
      .from("ttc_vocab_memory")
      .select("vocab_id,hsk_level,practice_count,correct_count,wrong_count,stability,status,last_practiced_at,last_wrong_at,next_review_at,revision,updated_at")
      .order("updated_at", { ascending: false })
      .limit(20000);
    if(res && res.error){
      cache.error = res.error.message || "select_failed";
      console.warn("ttcVocabMemoryLoadMine:", res.error);
      return { ok: false, status: "rpc_error", rows: [], byLemma: Object.create(null), error: cache.error };
    }
    var rows = Array.isArray(res && res.data) ? res.data : [];
    cache.fetchedAt = now;
    cache.userId = user.id;
    cache.rows = rows;
    cache.byLemma = Object.create(null);
    cache.error = null;
    rows.forEach(function(r){
      if(r && r.vocab_id) cache.byLemma[String(r.vocab_id)] = r;
    });
    var out = rows;
    if(hskFilter >= 1 && hskFilter <= 9){
      out = rows.filter(function(r){ return Number(r.hsk_level) === hskFilter; });
    }
    return { ok: true, status: "ok", rows: out, byLemma: cache.byLemma };
  }catch(err){
    cache.error = String(err && err.message || err);
    console.warn("ttcVocabMemoryLoadMine network:", err);
    return { ok: false, status: "network", rows: [], byLemma: Object.create(null), error: cache.error };
  }
}

function ttcVocabMemoryPrioritizeWords(list, fromIndex){
  if(!Array.isArray(list) || !list.length) return list || [];
  var start = Math.max(0, Number(fromIndex) || 0);
  var cache = window.__ttcVocabMemCache;
  if(!cache || !cache.byLemma) return list.slice();
  var todayStr = ttcVocabMemTodayStr();
  var head = list.slice(0, start);
  var rest = list.slice(start);
  var due = [];
  var wrongHeavy = [];
  var neu = [];
  var learning = [];
  var mastered = [];
  rest.forEach(function(w){
    if(!w) return;
    var lid = w.lemma_id ? String(w.lemma_id) : "";
    var row = lid ? cache.byLemma[lid] : null;
    if(!row){
      neu.push(w);
      return;
    }
    var bucket = ttcVocabMemBucketOf(row, todayStr);
    if(bucket === "due") due.push(w);
    else if(bucket === "wrong_heavy") wrongHeavy.push(w);
    else if(bucket === "mastered") mastered.push(w);
    else if(bucket === "new") neu.push(w);
    else learning.push(w);
  });
  return head.concat(due, wrongHeavy, neu, learning, mastered);
}

function ttcVocabMemoryResolvePathWord(list, entry){
  if(!Array.isArray(list) || !list.length) return { word: null, index: 0 };
  var i = Math.max(0, Number(entry && entry.index) || 0);
  if(i >= list.length) i = list.length - 1;
  var cache = window.__ttcVocabMemCache;
  if(!cache || !cache.byLemma){
    return { word: list[i], index: i };
  }
  var todayStr = ttcVocabMemTodayStr();
  var n = list.length;
  for(var step = 0; step < n; step++){
    var j = (i + step) % n;
    var w = list[j];
    var lid = w && w.lemma_id ? String(w.lemma_id) : "";
    var row = lid ? cache.byLemma[lid] : null;
    if(!row) return { word: w, index: j };
    var bucket = ttcVocabMemBucketOf(row, todayStr);
    if(bucket === "due" || bucket === "wrong_heavy" || bucket === "new" || bucket === "learning"){
      return { word: w, index: j };
    }
  }
  return { word: list[i], index: i };
}

window.ttcVocabMemoryLoadMine = ttcVocabMemoryLoadMine;
window.ttcVocabMemoryPrioritizeWords = ttcVocabMemoryPrioritizeWords;
window.ttcVocabMemoryResolvePathWord = ttcVocabMemoryResolvePathWord;
window.ttcVocabMemApplyRow = ttcVocabMemApplyRow;
window.ttcVocabMemBucketOf = ttcVocabMemBucketOf;
})();
