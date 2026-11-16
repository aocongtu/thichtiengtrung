/* otter2-auto-vocab — extracted from index1 */
(function(){
if(window.__OTTER2_AUTO_VOCAB__) return; window.__OTTER2_AUTO_VOCAB__=true;
let chineseVoice = null;

let selectedVoiceName = localStorage.getItem("ttsVoiceName") || "";

let selectedRate = parseFloat(localStorage.getItem("ttsRate") || "0.65");

function getChineseVoices(){

  if(!("speechSynthesis" in window)) return [];

  const voices =
    speechSynthesis.getVoices();

  return voices.filter(function(voice){

    const lang =
      (voice.lang || "").toLowerCase().replace(/_/g, "-");
    const name =
      (voice.name || "").toLowerCase();

    if (
      lang.indexOf("zh-tw") === 0 ||
      lang.indexOf("zh-hk") === 0 ||
      lang.indexOf("zh-mo") === 0 ||
      /taiwan|hong kong|cantonese|粵|粤|台灣|台湾/.test(name)
    ) {
      return false;
    }

    if (
      lang === "zh" ||
      lang.indexOf("zh-cn") === 0 ||
      lang.indexOf("zh-hans") === 0 ||
      lang.indexOf("cmn") === 0
    ) {
      return true;
    }

    if (lang.indexOf("zh") === 0) {
      return true;
    }

    return /chinese\s*\(?\s*simplified|mandarin|普通话|中文\(简体|microsoft\s+(huihui|yaoyao|kangkang|xiaoxiao|xiaoyi)/.test(name);

  });

}

function loadChineseVoice(){

  if(!("speechSynthesis" in window)){

    chineseVoice = null;
    window.chineseVoice = null;
    return;
  }

  try{
    var storedVoice = localStorage.getItem("ttsVoiceName") || "";
    if(storedVoice) selectedVoiceName = storedVoice;
  }catch(error){}

  const voices =
    getChineseVoices();


  /* Giọng người dùng đã chọn (bỏ qua khóa mạng ttcnet: — dùng giọng hệ thống) */

  if(selectedVoiceName && String(selectedVoiceName).indexOf("ttcnet:") !== 0){

    const savedVoice =
      voices.find(function(voice){

        return voice.name === selectedVoiceName;

      });

    if(savedVoice){

      chineseVoice =
        savedVoice;
      window.chineseVoice = chineseVoice;
      return;

    }

  }


  /* Ưu tiên một số giọng nữ phổ biến */

  const femaleVoice =
    voices.find(function(voice){

      const name =
        (voice.name || "").toLowerCase();

      return (
        name.includes("xiaoxiao") ||
        name.includes("yaoyao") ||
        name.includes("huihui") ||
        name.includes("female")
      );

    });


  chineseVoice =
    femaleVoice ||
    voices[0] ||
    null;

  window.chineseVoice = chineseVoice;

  /* Lưu lựa chọn mặc định (không ghi đè khóa ttcnet) */

  if(chineseVoice && String(selectedVoiceName).indexOf("ttcnet:") !== 0){

    selectedVoiceName =
      chineseVoice.name;

    try{
      localStorage.setItem(
        "ttsVoiceName",
        selectedVoiceName
      );
    }catch(e){}

  }

}

function say(text){

  if(!("speechSynthesis" in window)){

    alert(
      "Trình duyệt của anh không hỗ trợ đọc tiếng Trung."
    );

    return;
  }


  if(!text) return;


  const gen = ++__ttcSayGen;

  try{ speechSynthesis.cancel(); }catch(e){}


  loadChineseVoice();

  if(!chineseVoice){
    if(!window.__otter2ZhVoiceWarned){
      window.__otter2ZhVoiceWarned = true;
      alert("Trình duyệt/máy này không có giọng Mandarin (zh-CN). Không thể đọc tiếng Trung. Không thay bằng tiếng Việt.");
    }
    return;
  }

  const utterance =
    new SpeechSynthesisUtterance(
      String(text)
    );


  /* 🇨🇳 Tiếng Trung phổ thông */

  utterance.lang =
    "zh-CN";


  /* 🎚️ Tốc độ */

  utterance.rate =
    selectedRate;


  /* 🎵 Cao độ */

  utterance.pitch =
    1;


  /* 🎤 Giọng đã chọn */

  utterance.voice =
    chineseVoice;


  setTimeout(function(){
    if(gen !== __ttcSayGen) return;
    try{
      speechSynthesis.speak(utterance);
    }catch(e){}
  }, 60);

}
window.say = say;
window.loadChineseVoice = loadChineseVoice;
window.getChineseVoices = getChineseVoices;
if('speechSynthesis' in window){
  try{ speechSynthesis.addEventListener('voiceschanged', function(){ loadChineseVoice(); }); }catch(e){}
  loadChineseVoice();
}

/* Minimal TTC state bag used by index1 auto-learning engine (not a fake module). */
if(typeof window.TTC!=='object' || !window.TTC){
  window.TTC={
    vocabulary:{currentHSK:1,currentList:[],currentIndex:0,currentWord:null,searchActive:false},
    search:{keyword:"",results:[]},
    audio:{playing:false,autoMode:false,interval:3}
  };
}
var TTC=window.TTC;
var words=window.words||[];
function __syncWords(){
  if(window.OTTER2_HSK_ALL_DATA&&Array.isArray(window.OTTER2_HSK_ALL_DATA.words)&&window.OTTER2_HSK_ALL_DATA.words.length){
    window.words=window.OTTER2_HSK_ALL_DATA.words;
    words=window.words;
    return;
  }
  if(Array.isArray(window.words)&&window.words.length){words=window.words;return;}
}
__syncWords();
let autoLearningIndex = 0;
let autoLearningList = null;
let autoLearningHSK = 1;
let autoLearningTimer = null;
let autoLearningRunning = false;
let autoLearningPaused = false;
let autoLearningSpeaking = false;

/* =========================================================
   🔄 AUTO LEARNING TỪ VỰNG — CHIỀU ĐỌC
   zh-vi = Hán tự → Tiếng Việt
   vi-zh = Tiếng Việt → Hán tự
   ========================================================= */
let autoLearningDirection =
  localStorage.getItem("ttc_auto_learning_direction") || "zh-vi";

/* =========================================================
   1. LẤY DANH SÁCH HIỆN TẠI
   ========================================================= */


function getAutoLearningList(){
  __syncWords();

  if(
    Array.isArray(autoLearningList) &&
    autoLearningList.length
  ){
    return autoLearningList;
  }

  return [];
}

async function changeAutoLearningHSK(level){
  __syncWords();
  if(typeof window.otter2AssertHskAvailable==='function' && !window.otter2AssertHskAvailable(level)){
    var sel=document.getElementById('autoLearningHSK');
    if(sel) sel.value=String(autoLearningHSK||1);
    return;
  }

  const hsk = Number(level);

  if(hsk < 1 || hsk > 9){
    return;
  }


  /* =================================================
     🔒 AUTO LEARNING HSK 3–9 — Premium
     Free: HSK 1–2 (cùng chính sách lộ trình).
     ================================================= */

  if(hsk >= 3){

    const paid =
         await hasPremiumAccess();

    if(!paid){

      alert(
        "🔒 AUTO LEARNING HSK " + hsk + "\n\n" +
        "HSK 3–9 là nội dung Premium.\n\n" +
        "Vui lòng đăng ký gói Premium để tiếp tục học."
      );

      const select =
        document.getElementById(
          "autoLearningHSK"
        );

      if(select){

        select.value =
          String(autoLearningHSK);

      }

      return;
    }
  }


  /* =================================================
     📚 TẠO DANH SÁCH RIÊNG CHO AUTO — lấy đúng pack cấp
     ================================================= */

  let list = [];
  if(typeof window.otter2LoadWordsForHsk === "function"){
    list = window.otter2LoadWordsForHsk(hsk) || [];
  }
  if(!list.length){
    __syncWords();
    list = words.filter(function(word){
      return Number(word.hsk) === hsk;
    });
  }

  if(!list.length){

    alert(
      "Chưa có dữ liệu từ vựng HSK " +
      hsk
    );

    return;
  }

  window.words = list.slice();
  window.currentHSK = hsk;


  /* =================================================
     ▶️ CHUYỂN HSK AUTO
     ================================================= */

    stopAutoLearning();

  autoLearningHSK =
    hsk;

  autoLearningList =
    list;

  /*
     🛡️ WHITE HAT — KHÔI PHỤC TIẾN ĐỘ

     Không reset về câu 1 nữa.
     Đọc vị trí đã lưu riêng của HSK này.
  */

  autoLearningIndex =
    0;

  loadAutoLearningPosition();

  renderAutoLearningWord();
}

function getAutoLearningStorageKey(){

  if(TTC.vocabulary.searchActive){

    const keyword =
      TTC.search.keyword || "search";

    return "ttc_auto_search_" + keyword;

  }

  return "ttc_auto_hsk_" + autoLearningHSK;
}

function saveAutoLearningPosition(){

  try{

    localStorage.setItem(
      getAutoLearningStorageKey(),
      String(autoLearningIndex)
    );

  }catch(e){

    console.warn(
      "Auto Learning storage error:",
      e
    );

  }

}

function loadAutoLearningPosition(){

  try{

    const saved =
      localStorage.getItem(
        getAutoLearningStorageKey()
      );

    if(saved !== null){

      const index =
        parseInt(saved,10);

      if(Number.isInteger(index)){
        autoLearningIndex = index;
      }

    }

  }catch(e){

    console.warn(
      "Auto Learning load error:",
      e
    );

  }

}

function renderAutoLearningWord(){

  const list =
    getAutoLearningList();

  const wordEl =
    document.getElementById(
      "autoLearningWord"
    );

  const pinyinEl =
    document.getElementById(
      "autoLearningPinyin"
    );

  const meaningEl =
    document.getElementById(
      "autoLearningMeaning"
    );

  const statusEl =
    document.getElementById(
      "autoLearningStatus"
    );

  if(!wordEl){
    return;
  }

  if(!list.length){

    wordEl.textContent = "—";

    if(pinyinEl){
      pinyinEl.textContent = "";
    }

    if(meaningEl){
      meaningEl.textContent =
        "Chưa có từ để học";
    }

    if(statusEl){
      statusEl.textContent =
        "Chưa có dữ liệu";
    }

    return;
  }


  if(autoLearningIndex < 0){
    autoLearningIndex = 0;
  }

  if(autoLearningIndex >= list.length){

    autoLearningIndex =
      list.length - 1;

  }


  const word =
    list[autoLearningIndex];

  if(!word){
    return;
  }


  wordEl.textContent =
    word.h || word.word || "—";


  if(pinyinEl){

    pinyinEl.textContent =
      word.p ||
      word.pinyin ||
      "";

  }


  if(meaningEl){

    meaningEl.textContent =

      word.m ||

          word.v ||

          word.meaning ||

          "";

  }


  if(statusEl){

    statusEl.textContent =
      `Từ ${autoLearningIndex + 1} / ${list.length}`;

  }


  TTC.vocabulary.currentIndex =
    autoLearningIndex;

  TTC.vocabulary.currentWord =
    word;

  TTC.audio.playing =
    autoLearningSpeaking;

  saveAutoLearningPosition();

}

function clearAutoLearningTimer(){

  if(autoLearningTimer !== null){

    clearTimeout(
      autoLearningTimer
    );

    autoLearningTimer = null;

  }

}

function autoSafeTtsRate(){
  var r = Number(typeof selectedRate === "number" ? selectedRate : parseFloat(selectedRate));
  if (!Number.isFinite(r) || r <= 0) r = 0.65;
  if (r < 0.1) r = 0.1;
  if (r > 2) r = 2;
  return r;
}

function autoSpeakChinese(){

  const list =
    getAutoLearningList();

  const word =
    list[autoLearningIndex];

  if(!word){
    return;
  }

  const text =
    word.h ||
    word.word ||
    "";

  if(!text){
    return;
  }


  try{

    say(text);

  }catch(e){

    console.warn(
      "Chinese TTS error:",
      e
    );

  }

}

function autoSpeakVietnamese(){

  const list =
    getAutoLearningList();

  const word =
    list[autoLearningIndex];

  if(!word){
    return;
  }

  const text =
    word.m ||
    word.meaning ||
    word.v ||
    "";

  if(!text){
    return;
  }

  try{
    if(typeof window.ttcSpeakText === "function"){
      window.ttcSpeakText(String(text), "vi");
      return;
    }
  }catch(e){}

  if(!("speechSynthesis" in window)){
    return;
  }

  try{
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(String(text));
    utter.lang = "vi-VN";
    utter.rate = 0.95;
    (function(){
      var vs = speechSynthesis.getVoices()||[];
      var vv = vs.find(function(v){return /^vi/i.test(v.lang||'');})
        || vs.find(function(v){return /viet|vietnam/i.test(v.name||'');});
      if(vv) utter.voice = vv;
    })();
    speechSynthesis.speak(utter);
  }catch(e){
    console.warn("Vietnamese TTS error:", e);
  }

}


function autoSpeakCurrentWord(){

  const list =
    getAutoLearningList();

  if(!list.length){
    return;
  }

  const word =
    list[autoLearningIndex];

  if(!word){
    return;
  }

  const chinese =
    word.h ||
    word.word ||
    "";

  const vietnamese =
    word.m ||
    word.v ||
    word.meaning ||
    "";

  if(!chinese && !vietnamese){
    scheduleAutoNext();
    return;
  }

  if(!("speechSynthesis" in window)){
    scheduleAutoNext();
    return;
  }

  autoLearningSpeaking = true;
  TTC.audio.playing = true;

  speechSynthesis.cancel();

  function finishWord(){

    if(!autoLearningRunning || autoLearningPaused){
      return;
    }

    scheduleAutoNext();

  }

  function speakVietnameseThenChinese(){

    if(!vietnamese){
      speakChineseOnly();
      return;
    }

    const utter =
      new SpeechSynthesisUtterance(
        String(vietnamese)
      );

    utter.lang = "vi-VN";
    utter.rate = 0.95;
    (function(){
      var vs = speechSynthesis.getVoices()||[];
      var vv = vs.find(function(v){return /^vi/i.test(v.lang||'');})
        || vs.find(function(v){return /viet|vietnam/i.test(v.name||'');});
      if(vv) utter.voice = vv;
    })();

    utter.onend =
      function(){

        if(!autoLearningRunning || autoLearningPaused){
          return;
        }

        speakChineseOnly();

      };

    utter.onerror = finishWord;

    speechSynthesis.speak(utter);

  }

  function speakChineseOnly(){
    if(!chinese){
      finishWord();
      return;
    }
    loadChineseVoice();
    if(!chineseVoice){
      if(!window.__otter2ZhVoiceWarned){
        window.__otter2ZhVoiceWarned = true;
        alert("Trình duyệt/máy này không có giọng Mandarin (zh-CN). Không thể đọc tiếng Trung. Không thay bằng tiếng Việt.");
      }
      finishWord();
      return;
    }

    const utter =
      new SpeechSynthesisUtterance(
        String(chinese)
      );

    utter.lang = "zh-CN";
    utter.rate = autoSafeTtsRate();
    utter.pitch = 1;

    if(chineseVoice){
      utter.voice = chineseVoice;
    }

    utter.onend = finishWord;
    utter.onerror = finishWord;

    speechSynthesis.speak(utter);

  }

  function speakChineseThenVietnamese(){

    if(!chinese){
      speakVietnameseOnly();
      return;
    }

    loadChineseVoice();

    const utter =
      new SpeechSynthesisUtterance(
        String(chinese)
      );

    utter.lang = "zh-CN";
    utter.rate = autoSafeTtsRate();
    utter.pitch = 1;

    if(chineseVoice){
      utter.voice = chineseVoice;
    }

    utter.onend =
      function(){

        if(!autoLearningRunning || autoLearningPaused){
          return;
        }

        speakVietnameseOnly();

      };

    utter.onerror = finishWord;

    speechSynthesis.speak(utter);

  }

  function speakVietnameseOnly(){

    if(!vietnamese){
      finishWord();
      return;
    }

    const utter =
      new SpeechSynthesisUtterance(
        String(vietnamese)
      );

    utter.lang = "vi-VN";
    utter.rate = 0.95;
    (function(){
      var vs = speechSynthesis.getVoices()||[];
      var vv = vs.find(function(v){return /^vi/i.test(v.lang||'');})
        || vs.find(function(v){return /viet|vietnam/i.test(v.name||'');});
      if(vv) utter.voice = vv;
    })();

    utter.onend = finishWord;
    utter.onerror = finishWord;

    speechSynthesis.speak(utter);

  }

  if(autoLearningDirection === "vi-zh"){
    speakVietnameseThenChinese();
  }else{
    speakChineseThenVietnamese();
  }

}

function scheduleAutoNext(){

  if(!autoLearningRunning){
    return;
  }

  if(autoLearningPaused){
    return;
  }


  clearAutoLearningTimer();


  const intervalEl =
    document.getElementById(
      "autoInterval"
    );


  /*
     HTML đang lưu:
     2000 = 2 giây
     3000 = 3 giây
     5000 = 5 giây
     7000 = 7 giây

     Vì vậy KHÔNG được nhân 1000 nữa.
  */

  let delay =
    intervalEl
      ? Number(intervalEl.value)
      : 3000;


  /* value "0" = nghỉ 0ms; không dùng || vì 0 bị coi là falsy */
  if(
    !Number.isFinite(delay) ||
    delay < 0
  ){

    delay = 3000;

  }

  if (delay > 60000) {
    delay = 60000;
  }


  autoLearningTimer =
    setTimeout(
      function(){

        if(!autoLearningRunning){
          return;
        }

        if(autoLearningPaused){
          return;
        }


        autoNextWord();


        if(autoLearningRunning){

          autoSpeakCurrentWord();

        }

      },
      delay
    );

}

function toggleAutoLearning(){
  __syncWords();

  const list =
    getAutoLearningList();

  if(!list.length){

    renderAutoLearningWord();

    return;

  }


  /*
     Đang chạy → tạm dừng
  */

  if(autoLearningRunning){

    autoLearningPaused =
      !autoLearningPaused;


    if(autoLearningPaused){

      if("speechSynthesis" in window){
        speechSynthesis.pause();
      }

      clearAutoLearningTimer();

      const statusEl =
        document.getElementById(
          "autoLearningStatus"
        );

      if(statusEl){

        statusEl.textContent =
          `⏸️ Tạm dừng • Từ ${autoLearningIndex + 1}/${list.length}`;

      }


    }else{

      if("speechSynthesis" in window){
        speechSynthesis.resume();
      }

      const statusEl =
        document.getElementById(
          "autoLearningStatus"
        );

      if(statusEl){

        statusEl.textContent =
          `▶️ Đang học • Từ ${autoLearningIndex + 1}/${list.length}`;

      }

      autoSpeakCurrentWord();

    }

    return;

  }


  /*
     Bắt đầu
  */

  autoLearningRunning =
    true;

  autoLearningPaused =
    false;

  renderAutoLearningWord();

  autoSpeakCurrentWord();

}

function stopAutoLearning(){

  autoLearningRunning =
    false;

  autoLearningPaused =
    false;

  autoLearningSpeaking =
    false;

  clearAutoLearningTimer();


  if("speechSynthesis" in window){

    speechSynthesis.cancel();

  }


  TTC.audio.autoMode =
    false;

  TTC.audio.playing =
    false;


  renderAutoLearningWord();

}

function autoPreviousWord(){

  const list =
    getAutoLearningList();

  if(!list.length){
    return;
  }


  stopAutoLearning();


  autoLearningIndex--;

  if(autoLearningIndex < 0){

    autoLearningIndex =
      list.length - 1;

  }


  renderAutoLearningWord();

}

function autoNextWord(){

  const list =
    getAutoLearningList();

  if(!list.length){
    return;
  }


  autoLearningIndex++;

  if(autoLearningIndex >= list.length){

    autoLearningIndex = 0;

  }


  renderAutoLearningWord();

}

function autoRepeatWord(){

  const list =
    getAutoLearningList();

  if(!list.length){
    return;
  }


  stopAutoLearning();

  renderAutoLearningWord();

  autoLearningRunning =
    true;

  autoSpeakCurrentWord();

}

function changeAutoInterval(value){

  const delay =
    Number(value);


  if(
    !Number.isFinite(delay) ||
    delay < 0
  ){

    return;

  }


  TTC.audio.interval =
    delay;


  /*
     Chỉ đổi khoảng nghỉ giữa các từ.
     Không đụng utterance.rate / selectedRate.
     Nếu đang ĐỌC: chờ onend rồi schedule với delay mới.
     Nếu đang CHỜ giữa hai từ (timer đang chạy): hẹn lại với delay mới,
     không nhảy từ / không phát lại giữa chừng.
  */

  if(autoLearningRunning && !autoLearningPaused){

    if(autoLearningTimer !== null){

      clearAutoLearningTimer();

      scheduleAutoNext();

    }

  }

}

function resetAutoLearningForCurrentHSK(){

  /*
     🛡️ WHITE HAT — RESET AUTO LEARNING

     Chỉ xóa tiến độ của HSK hiện tại.
     Không ảnh hưởng các HSK khác.
  */

  stopAutoLearning();


  try{

    localStorage.removeItem(
      "ttc_auto_hsk_" + autoLearningHSK
    );

  }catch(e){

    console.warn(
      "Auto Learning reset error:",
      e
    );

  }


  autoLearningIndex =
    0;


  TTC.vocabulary.currentIndex =
    0;

  TTC.vocabulary.currentWord =
    null;


  renderAutoLearningWord();

}

function refreshAutoLearning(resetIndex = false){

  stopAutoLearning();


  if(resetIndex){

    autoLearningIndex =
      0;

  }else{

    loadAutoLearningPosition();

  }


  renderAutoLearningWord();

}

function toggleAutoLearningDirection(){

  autoLearningDirection =
    autoLearningDirection === "zh-vi"
      ? "vi-zh"
      : "zh-vi";

  try{
    localStorage.setItem(
      "ttc_auto_learning_direction",
      autoLearningDirection
    );
  }catch(e){}

  updateAutoLearningDirectionButton();

  if(autoLearningRunning){
    speechSynthesis.cancel();
    clearAutoLearningTimer();
    autoSpeakCurrentWord();
  }

}

function updateAutoLearningDirectionButton(){

  const button =
    document.getElementById(
      "autoLearningDirectionButton"
    );

  if(!button){
    return;
  }

  button.textContent =
    autoLearningDirection === "zh-vi"
      ? "🔄 🇨🇳 → 🇻🇳"
      : "🔄 🇻🇳 → 🇨🇳";

  button.title =
    autoLearningDirection === "zh-vi"
      ? "Đang đọc Hán tự → Tiếng Việt. Bấm để đảo chiều."
      : "Đang đọc Tiếng Việt → Hán tự. Bấm để đảo chiều.";

}

function initAutoLearning(){
  __syncWords();

  if(
    !Array.isArray(autoLearningList) ||
    !autoLearningList.length
  ){

    autoLearningHSK =
      Number(currentHSK) || 1;

    autoLearningList =
      words.filter(function(word){
        return Number(word.hsk) === autoLearningHSK;
      });

  }

  loadAutoLearningPosition();
  renderAutoLearningWord();
  updateAutoLearningDirectionButton();
}

window.toggleAutoLearning = toggleAutoLearning;
window.toggleAutoLearningDirection = toggleAutoLearningDirection;
window.changeAutoLearningHSK = changeAutoLearningHSK;
window.autoPreviousWord = autoPreviousWord;
window.autoNextWord = autoNextWord;
window.autoRepeatWord = autoRepeatWord;
window.autoSpeakChinese = autoSpeakChinese;
window.autoSpeakVietnamese = autoSpeakVietnamese;
window.resetAutoLearningForCurrentHSK = resetAutoLearningForCurrentHSK;
window.changeAutoInterval = changeAutoInterval;
window.initAutoLearning = initAutoLearning;
window.stopAutoLearning = stopAutoLearning;
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){ try{initAutoLearning();}catch(e){} },{once:true});
else try{initAutoLearning();}catch(e){}
})();
