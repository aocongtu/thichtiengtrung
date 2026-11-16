/* from index1 openSentences */


(function(){

  "use strict";


  /* =====================================================
     🛡️ STATE
  ===================================================== */

  let whiteHatSentenceList = [];

  let whiteHatSentenceIndex = 0;

  let whiteHatMode = "";

/* =====================================================
   💾 WHITE HAT — LƯU TIẾN ĐỘ LUYỆN CÂU
   -----------------------------------------------------
   - Lưu vị trí hiện tại
   - Lưu luôn thứ tự câu đã xáo trộn
   - Mỗi HSK có tiến độ riêng
   - Không đụng MEMORY / REVIEW / FLASHCARD
===================================================== */

const WHITE_HAT_SENTENCE_PROGRESS_PREFIX =
  "ttc_sentence_progress_v1_";


function whiteHatSentenceStorageKey(){

  if(whiteHatMode === "hsk"){

    const item =
      whiteHatSentenceList[
        whiteHatSentenceIndex
      ];

    const level =
      item &&
      Number(item.hsk);

    if(level){
      return (
        WHITE_HAT_SENTENCE_PROGRESS_PREFIX +
        "hsk_" +
        level
      );
    }

  }

  return (
    WHITE_HAT_SENTENCE_PROGRESS_PREFIX +
    "basic"
  );

}


/* =====================================================
   💾 LƯU
===================================================== */

function whiteHatSaveSentenceProgress(){

  try{

    const key =
      whiteHatSentenceStorageKey();

    localStorage.setItem(
      key,
      JSON.stringify({

        index:
          whiteHatSentenceIndex,

        list:
          whiteHatSentenceList

      })
    );

  }catch(error){

    console.warn(
      "White Hat sentence save error:",
      error
    );

  }

}


/* =====================================================
   📥 TẢI
===================================================== */

function whiteHatLoadSentenceProgress(
  mode,
  level
){

  try{

    let key;

    if(mode === "hsk"){

      key =
        WHITE_HAT_SENTENCE_PROGRESS_PREFIX +
        "hsk_" +
        Number(level);

    }else{

      key =
        WHITE_HAT_SENTENCE_PROGRESS_PREFIX +
        "basic";

    }


    const saved =
      localStorage.getItem(key);

    if(!saved){

      return false;

    }


    const data =
      JSON.parse(saved);


    if(
      !data ||
      data.source !== "ttc-gushi-v2" ||
      !Array.isArray(data.list) ||
      !data.list.length
    ){

      return false;

    }


    whiteHatSentenceList =
      data.list;


    let index =
      Number(data.index);


    if(
      !Number.isInteger(index) ||
      index < 0
    ){

      index = 0;

    }


    if(
      index >=
      whiteHatSentenceList.length
    ){

      index =
        whiteHatSentenceList.length - 1;

    }


    whiteHatSentenceIndex =
      index;


    return true;

  }catch(error){

    console.warn(
      "White Hat sentence load error:",
      error
    );

    return false;

  }

}


/* =====================================================
   🔄 HỌC LẠI TỪ ĐẦU
===================================================== */

function whiteHatResetSentenceLearning(){

  if(
    !whiteHatSentenceList.length
  ){

    return;

  }


  const ok =
    confirm(
      "🔄 Học lại từ đầu?\n\n" +
      "Tiến độ của phần Luyện câu hiện tại sẽ được xóa."
    );


  if(!ok){

    return;

  }


  whiteHatSentenceIndex =
    0;


  /*
     Giữ nguyên danh sách câu hiện tại.
     Không xáo trộn lại.
     → Học lại đúng bộ câu đang học.
  */

  whiteHatSaveSentenceProgress();

  whiteHatRender();

}

  let whiteHatEnterStage = 0;

  let whiteHatLastTyped = "";

  let whiteHatBusy = false;


  /* =====================================================
     🔧 CHUẨN HÓA
  ===================================================== */

  function whiteHatNormalize(text){

    return String(text || "")

      .trim()

      .replace(/\s+/g,"")

      .replace(
        /[。！？!?，,；;：:、]/g,
        ""
      );

  }


  /* =====================================================
     🔊 PHÁT ÂM
  ===================================================== */

  function whiteHatSpeak(text){

    text =
      String(text || "").trim();

    if(!text){

      return;

    }


    try{

      if(
        typeof window.say ===
        "function"
      ){

        window.say(text);

        return;

      }

    }catch(error){}


    try{

      if(
        typeof window.speakChinese ===
        "function"
      ){

        window.speakChinese(text);

        return;

      }

    }catch(error){}


    try{

      if(
        "speechSynthesis" in window
      ){

        speechSynthesis.cancel();

        const utterance =
          new SpeechSynthesisUtterance(
            text
          );

        utterance.lang =
          "zh-CN";

        utterance.rate =
          0.9;

        speechSynthesis.speak(
          utterance
        );

      }

    }catch(error){}

  }


  /* =====================================================
     🔊 ENTER 1
  ===================================================== */

  function whiteHatSpeakTyped(text){

    text =
      String(text || "").trim();

    if(!text){

      return;

    }


    whiteHatLastTyped =
      text;


    whiteHatSpeak(
      text
    );


    const result =
      document.getElementById(
        "sentenceResult"
      );


    if(result){

      result.className =
        "sentence-result";

      result.textContent =
        "🔊 Đã đọc câu bạn vừa nhập — nhấn Enter lần 2 để kiểm tra.";

    }

  }


  /* =====================================================
     📚 3000 CÂU
  ===================================================== */

  function whiteHatBuildBasic(){

    if(
      typeof sentences ===
      "undefined"
    ){

      return [];

    }


    if(
      !Array.isArray(sentences)
    ){

      return [];

    }


    return sentences

      .filter(function(item){

        return (
          item &&
          item.answer
        );

      })

      .map(function(item){

        return {

          meaning:
            item.meaning || "",

          answer:
            item.answer || "",

          pinyin:
            item.pinyin || item.py || "",

          hsk:
            Number(
              item.hsk || 1
            )

        };

      });

  }


 /* =====================================================
   📚 HSK — NGUỒN CẤP ĐỘ ĐỘC LẬP
   🛡️ KHÔNG LẤY TỪ sentences / 3000 CÂU
   → HSK1 → HSK6 đều lấy cùng nguồn words
===================================================== */

function whiteHatLooksEnglish(value){

  const text = String(value || "").trim();

  if(!text) return false;

  /* Có tiếng Việt → chắc chắn không phải nghĩa English. */
  if(/[à-ỹÀ-ỸđĐ]/.test(text)) return false;

  return /\b(the|a|an|and|or|of|to|in|on|for|with|from|is|are|be|this|that|someone|something|people|used|use|make|made|do|does|have|has|will|can|one|two|three)\b/i.test(text);
}

function whiteHatBuildHSK(level){

  const targetLevel = Number(level);

  const source =
    (typeof window.words !== "undefined" && Array.isArray(window.words))
      ? window.words
      : (typeof words !== "undefined" && Array.isArray(words) ? words : []);

  /* HSK6–9 phải chờ đúng bộ Gushi đồng bộ xong,
     tuyệt đối không lấy kho câu cũ trong localStorage/nguồn cũ. */
  if(targetLevel >= 6 && !window.TTC_GUSHI_HSK789_READY){
    return [];
  }

  const seen = new Set();
  const result = [];

  source.forEach(function(word){

    if(!word || Number(word.hsk) !== targetLevel) return;

    const answer = String(word.example || "").trim();
    if(!answer) return;

    const normalized = answer.replace(/[。！？；!?;]$/," ").trim();
    if(!normalized || seen.has(normalized)) return;

    /* Nếu Gushi chưa dịch nghĩa xong, không cho English lọt ra UI.
       Nghĩa từ vựng đã có tiếng Việt thì dùng làm fallback. */
    let meaning = String(word.exampleMeaning || "").trim();
    if(whiteHatLooksEnglish(meaning)){
      const fallbackMeaning = String(word.m || "").trim();
      meaning = whiteHatLooksEnglish(fallbackMeaning)
        ? "Nghĩa tiếng Việt chưa có"
        : fallbackMeaning;
    }

    seen.add(normalized);
    result.push({
      meaning: meaning || "Nghĩa tiếng Việt chưa có",
      answer: answer,
      pinyin: String(word.examplePinyin || "").trim(),
      hsk: targetLevel
    });
  });

  return result;
}

  /* =====================================================
     🔀 XÁO TRỘN
  ===================================================== */

  function whiteHatShuffle(list){

    const result =
      list.slice();


    for(
      let i =
        result.length - 1;

      i > 0;

      i--

    ){

      const j =
        Math.floor(
          Math.random() *
          (i + 1)
        );


      [
        result[i],
        result[j]

      ] = [

        result[j],
        result[i]

      ];

    }


    return result;

  }


  /* =====================================================
     🎯 CÂU HIỆN TẠI
  ===================================================== */

  function whiteHatCurrent(){

    return (
      whiteHatSentenceList[
        whiteHatSentenceIndex
      ] || null
    );

  }


/* =====================================================
   🖥️ HIỂN THỊ CÂU
===================================================== */

/* Pinyin nằm riêng dưới đáp án Hán tự; không sửa nội dung nút/kết quả kiểm tra. */
function whiteHatPinyinFor(item){
  if(!item) return "";
  if(String(item.pinyin || "").trim()){
    const supplied = String(item.pinyin).trim();
    // Refuse a supplied “pinyin” string that contains Hanzi; it is not valid Pinyin.
    if(!/[\u3400-\u9fff]/.test(supplied)) return supplied;
  }

  const text = String(item.answer || "");
  const charMap = Object.create(null);
  try{
    const source = (typeof words !== "undefined" && Array.isArray(words)) ? words : [];
    // Single-character dictionary entries are the safest character-level source.
    source.forEach(function(w){
      if(!w || !w.h || !w.p) return;
      const chars = Array.from(String(w.h).trim());
      const pinyin = String(w.p).trim();
      if(chars.length === 1 && !/[\u3400-\u9fff]/.test(pinyin) && pinyin){
        if(!charMap[chars[0]]) charMap[chars[0]] = pinyin;
      }
    });
    // Use multi-character entries only when their syllables are explicitly separated
    // and the syllable count matches the Hanzi count exactly.
    source.forEach(function(w){
      if(!w || !w.h || !w.p) return;
      const chars = Array.from(String(w.h).trim());
      const pinyin = String(w.p).trim();
      if(chars.length < 2 || /[\u3400-\u9fff]/.test(pinyin)) return;
      const syllables = pinyin.split(/\s+/);
      if(syllables.length === chars.length){
        chars.forEach(function(ch,i){ if(!charMap[ch]) charMap[ch] = syllables[i]; });
      }
    });
  }catch(e){}

  return Array.from(text).map(function(ch){
    if(/[\u3400-\u9fff]/.test(ch)) return charMap[ch] || "";
    return ch;
  }).join(" ")
    .replace(/\s+([，。！？；：,.!?;:])/g,"$1")
    .replace(/([，。！？；：,.!?;:])\s+/g,"$1 ")
    .replace(/\s+/g," ")
    .trim();
}

function whiteHatRender(){

  const item =
    whiteHatCurrent();


  const number =
    document.getElementById(
      "sentenceNumber"
    );

  const meaning =
    document.getElementById(
      "sentenceMeaning"
    );

  const target =
    document.getElementById(
      "sentenceTarget"
    );

  const input =
    document.getElementById(
      "sentenceInput"
    );

  const result =
    document.getElementById(
      "sentenceResult"
    );


  if(!item){

    if(number){

      number.textContent =
        "⚠️ Chưa có dữ liệu câu.";

    }

    if(meaning){

      meaning.textContent =
        "";

    }

    if(target){

      target.textContent =
        "";

    }
    const targetPinyin = document.getElementById("sentenceTargetPinyin");
    if(targetPinyin) targetPinyin.textContent = "";

    return;

  }


if(number){

  number.textContent =
    "Câu " +
    (whiteHatSentenceIndex + 1) +
    " / " +
    whiteHatSentenceList.length +
    (
      whiteHatMode === "hsk"
        ? " · HSK " + item.hsk
        : ""
    );

}


  if(meaning){

    meaning.textContent =
      item.meaning ||
      "Hãy viết câu tiếng Trung.";

  }


  if(target){

    target.textContent =
      "";

    target.classList.remove(
      "whiteHatAnswerShown"
    );

  }
  const targetPinyin = document.getElementById("sentenceTargetPinyin");
  if(targetPinyin) targetPinyin.textContent = "";


  if(input){

    input.value =
      "";

    input.focus();

  }


  if(result){

    result.textContent =
      "";

    result.className =
      "sentence-result";

  }


  whiteHatEnterStage =
    0;

  whiteHatLastTyped =
    "";

  whiteHatBusy =
    false;

}


  /* =====================================================
     🔴 ACTIVE MODE
  ===================================================== */

  function whiteHatSetMode(mode){

    whiteHatMode =
      mode;


    document
      .querySelectorAll(
        ".whiteHatModeCard"
      )
      .forEach(function(card){
        const selected = card.dataset.mode === mode;
        card.classList.toggle("active", selected);
        card.style.borderColor = selected ? "#22c55e" : "";
      });

  }


  /* =====================================================
     🔀 3000 CÂU
  ===================================================== */

  function whiteHatLoadBasic(){

    whiteHatSetMode(
      "basic"
    );


    whiteHatSentenceList =
      whiteHatShuffle(
        whiteHatBuildBasic()
      );


    whiteHatSentenceIndex =
      0;


    const hskPanel =
      document.getElementById(
        "whiteHatHSKPanel"
      );


    if(hskPanel){

      hskPanel.classList.remove(
        "show"
      );

    }


    whiteHatRender();

  }


  /* =====================================================
     📚 HSK
  ===================================================== */

  async function whiteHatWaitForGushi(level, timeoutMs){

    if(Number(level) < 6) return true;
    if(window.TTC_GUSHI_HSK789_READY) return true;

    const deadline = Date.now() + (Number(timeoutMs) || 18000);

    while(Date.now() < deadline){
      if(window.TTC_GUSHI_HSK789_READY) return true;
      await new Promise(function(resolve){ setTimeout(resolve,250); });
    }

    return !!window.TTC_GUSHI_HSK789_READY;
  }

  async function whiteHatLoadHSK(level){

    level = Number(level);

    if(
      typeof window.otter2AssertHskAvailable === "function" &&
      !window.otter2AssertHskAvailable(level)
    ){
      return;
    }

    whiteHatSetMode("hsk");

    document
      .querySelectorAll("#whiteHatHSKButtons button")
      .forEach(function(button){
        button.classList.toggle(
          "active",
          Number(button.dataset.level) === level
        );
      });

    if(level >= 6){
      whiteHatSentenceList = [];
      whiteHatSentenceIndex = 0;
      whiteHatRender();

      const ready = await whiteHatWaitForGushi(level,18000);
      if(!ready){
        const result = document.getElementById("sentenceResult");
        if(result){
          result.className = "sentence-result whiteHatWrong";
          result.textContent = "⚠️ Nguồn Gushi HSK " + level + " chưa tải đủ. Không dùng dữ liệu cũ.";
        }
        return;
      }
    }

    /* Chỉ khôi phục tiến độ nếu đúng schema nguồn Gushi mới.
       Cache 2509 câu/nguồn cũ sẽ tự động bị bỏ qua. */
    const restored = whiteHatLoadSentenceProgress("hsk",level);

    if(!restored){
      whiteHatSentenceList = whiteHatShuffle(whiteHatBuildHSK(level));
      whiteHatSentenceIndex = 0;
      whiteHatSaveSentenceProgress();
    }

    whiteHatRender();
  }

  /* =====================================================
     🔀 XÁO TRỘN
  ===================================================== */

  function whiteHatShuffleBasic(){

    if(
      whiteHatMode !==
      "basic"
    ){

      return;

    }


    whiteHatSentenceList =
      whiteHatShuffle(
        whiteHatSentenceList
      );


    whiteHatSentenceIndex =
      0;


    whiteHatRender();

  }


  /* =====================================================
     ➡️ CÂU TIẾP
  ===================================================== */

  function whiteHatNext(){

  if(
    !whiteHatSentenceList.length
  ){

    return;

  }


  whiteHatSentenceIndex++;


  if(
    whiteHatSentenceIndex >=
    whiteHatSentenceList.length
  ){

    /*
       Hết toàn bộ danh sách.
       Quay lại câu 1 nhưng vẫn giữ
       bộ câu hiện tại.
    */

    whiteHatSentenceIndex =
      0;

  }


  /*
     💾 LƯU NGAY VỊ TRÍ MỚI
     Ví dụ:
     câu 200 → bấm tiếp → index 200
     → lần sau mở = câu 201
  */

  whiteHatSaveSentenceProgress();


  whiteHatRender();

}

  /* =====================================================
     👁️ XEM ĐÁP ÁN ĐÚNG
     
     KHÔNG CHUYỂN CÂU
     KHÔNG ĐÁNH DẤU ĐÚNG
  ===================================================== */

  function whiteHatShowAnswer(){

    const item =
      whiteHatCurrent();


    const target =
      document.getElementById(
        "sentenceTarget"
      );


    const result =
      document.getElementById(
        "sentenceResult"
      );


    if(
      !item ||
      !target
    ){

      return;

    }


    target.textContent =
      item.answer;


    target.classList.add(
      "whiteHatAnswerShown"
    );
    const targetPinyin = document.getElementById("sentenceTargetPinyin");
    if(targetPinyin) targetPinyin.textContent = whiteHatPinyinFor(item);


    if(result){

      result.className =
        "sentence-result";

      result.textContent =
        "👁️ Đây là đáp án đúng. Bạn có thể tiếp tục thử hoặc bỏ qua.";

    }

  }


  /* =====================================================
     ⏭️ BỎ QUA
     
     Không cần làm đúng vẫn sang câu tiếp.
  ===================================================== */

  function whiteHatSkip(){

    if(
      whiteHatBusy
    ){

      return;

    }


    whiteHatNext();

  }


  /* =====================================================
     🧠 KIỂM TRA
  ===================================================== */

  function whiteHatCheck(){

    const item =
      whiteHatCurrent();


    const input =
      document.getElementById(
        "sentenceInput"
      );


    const result =
      document.getElementById(
        "sentenceResult"
      );


    const target =
      document.getElementById(
        "sentenceTarget"
      );


    if(
      !item ||
      !input
    ){

      return false;

    }


    const typed =
      input.value.trim();


    if(!typed){

      return false;

    }


    const correct =
      whiteHatNormalize(
        typed
      ) ===
      whiteHatNormalize(
        item.answer
      );


    /* ===============================================
       ✅ ĐÚNG
    =============================================== */

    if(correct){

      if(target){

        target.textContent =
          item.answer;

        target.classList.add(
          "whiteHatAnswerShown"
        );

      }
      const targetPinyin = document.getElementById("sentenceTargetPinyin");
      if(targetPinyin) targetPinyin.textContent = whiteHatPinyinFor(item);


      if(result){

        result.textContent =
          "🎉 CHÍNH XÁC! 💪";

        result.className =
          "sentence-result whiteHatCorrect";

      }


      whiteHatSpeak(
        item.answer
      );


      /*
       * Không tự chuyển câu sau khi trả lời đúng.
       * Giữ nguyên câu và kết quả để người học chủ động bấm
       * “Câu tiếp” hoặc nhấn Enter lần nữa.
       */
      whiteHatBusy =
        false;

      return true;

    }


    /* ===============================================
       ❌ SAI
       → GIỮ NGUYÊN CÂU
    =============================================== */

    if(target){

      target.textContent =
        "";

      target.classList.remove(
        "whiteHatAnswerShown"
      );

    }
    const targetPinyin = document.getElementById("sentenceTargetPinyin");
    if(targetPinyin) targetPinyin.textContent = "";


    if(result){

      result.textContent =
        "❌ CHƯA ĐÚNG — Hãy sửa câu hoặc chọn Xem đáp án / Bỏ qua.";

      result.className =
        "sentence-result whiteHatWrong";

    }


    /*
      Cho phép Enter lại:
      Enter 1 đọc câu mới
      Enter 2 kiểm tra lại
    */

    whiteHatEnterStage =
      0;


    whiteHatLastTyped =
      "";


    return false;

  }


  /* =====================================================
     🚪 OPEN SENTENCES
     
     GIỮ NGUYÊN CƠ CHẾ PREMIUM
     Nhưng dùng async đúng cách.
  ===================================================== */

  window.openSentences =
    async function(btn){

      const sentence =
        document.getElementById("sentenceSection");

      if(
        btn &&
        sentence &&
        !sentence.classList.contains("hidden") &&
        sentence.style.display !== "none" &&
        btn.classList.contains("active")
      ){
        sentence.classList.add("hidden");
        btn.classList.remove("active");
        return;
      }

      /*
        🔒 PREMIUM
      */

      if(
        typeof checkPremiumFeature ===
        "function"
      ){

        const allowed =
          await checkPremiumFeature();

        if(!allowed){

          return;

        }

      }


      /*
        ACTIVE MENU
      */

      document
        .querySelectorAll(
          "nav button"
        )
        .forEach(function(button){

          button.classList.remove(
            "active"
          );

        });


      if(btn){

        btn.classList.add(
          "active"
        );

      }


      /*
        ẨN PHẦN KHÁC
      */

      const vocabulary =
        document.getElementById(
          "vocabularySection"
        );

      const test =
        document.getElementById(
          "testSection"
        );

      /* Reuse sentence from above — do not redeclare const (breaks entire script). */

      if(vocabulary){

        vocabulary.classList.add(
          "hidden"
        );

      }


      if(test){

        test.classList.add(
          "hidden"
        );

      }


      if(sentence){

        sentence.style.display = "";
        sentence.classList.remove(
          "hidden"
        );

      }

      ttcAppearUnder(
        document.getElementById("ttcActionFrame"),
        sentence
      );


      /*
        DỰNG UI
      */

      whiteHatBuildModeUI();


      const input =
        document.getElementById(
          "sentenceInput"
        );


      if(input){

        input.focus();

      }

    };


  /* =====================================================
     🧱 TẠO GIAO DIỆN 2 CỘT
  ===================================================== */

  function whiteHatBuildModeUI(){

    const section =
      document.getElementById(
        "sentenceSection"
      );


    if(!section){

      return;

    }


    /*
      Chống tạo trùng
    */

    if(
      document.getElementById(
        "whiteHatSentenceModes"
      )
    ){

      whiteHatAttachInput();

      whiteHatAttachActions();

      return;

    }


    const modes =
      document.createElement(
        "div"
      );


    modes.id =
      "whiteHatSentenceModes";


    /* =============================================
       🔴 CỘT 1
    ============================================= */

    const basic =
      document.createElement(
        "div"
      );


    basic.className =
      "whiteHatModeCard";


    basic.dataset.mode =
      "basic";


    basic.innerHTML = `

      <div
        class="whiteHatModeTitle"
        style="color:#222 !important;"
      >
        🔴 3000 câu giao tiếp 
      </div>

      <div
        class="whiteHatModeSub"
        style="color:#666 !important;"
      >
        Luyện phản xạ giao tiếp
      </div>


    `;


    basic.addEventListener(
      "click",
      function(){

        whiteHatLoadBasic();

      }
    );



    /* =============================================
       🔴 CỘT 2
    ============================================= */

    const hsk =
      document.createElement(
        "div"
      );


    hsk.className =
      "whiteHatModeCard";


    hsk.dataset.mode =
      "hsk";


    hsk.innerHTML = `

      <div
        class="whiteHatModeTitle"
        style="color:#222 !important;"
      >
        🔴 Luyện câu theo cấp độ
      </div>

      <div
        class="whiteHatModeSub"
        style="color:#666 !important;"
      >
        HSK 1 → HSK 9
      </div>

    `;


    hsk.addEventListener(
      "click",
      function(){

        whiteHatSetMode(
          "hsk"
        );


        const panel =
          document.getElementById(
            "whiteHatHSKPanel"
          );


        if(panel){

          panel.classList.add("show");
          panel.classList.remove("levels-open");

        }

      }
    );


    modes.appendChild(
      basic
    );


    modes.appendChild(
      hsk
    );


    /*
      Chèn sau H2
    */

    const title =
      section.querySelector(
        "h2"
      );


    if(title){

      title.insertAdjacentElement(
        "afterend",
        modes
      );

    }else{

      section.prepend(
        modes
      );

    }


    /* =============================================
       HSK PANEL
    ============================================= */

    const hskPanel =
      document.createElement(
        "div"
      );


    hskPanel.id =
      "whiteHatHSKPanel";


    hskPanel.innerHTML = `

      <button
        type="button"
        id="whiteHatHSKToggle"
        aria-expanded="false"
        aria-controls="whiteHatHSKButtons"
      >
        🇨🇳 Chọn cấp HSK <span aria-hidden="true">▾</span>
      </button>

      <div
        id="whiteHatHSKButtons"
      >

        <button
          type="button"
          data-level="1"
        >
          HSK 1
        </button>

        <button
          type="button"
          data-level="2"
        >
          HSK 2
        </button>

        <button
          type="button"
          data-level="3"
        >
          HSK 3
        </button>

        <button
          type="button"
          data-level="4"
        >
          HSK 4
        </button>

        <button
          type="button"
          data-level="5"
        >
          HSK 5
        </button>

        <button
          type="button"
          data-level="6"
        >
          HSK 6
        </button>

              <button
  type="button"
  data-level="7"
>
  HSK 7
</button>

<button
  type="button"
  data-level="8"
>
  HSK 8
</button>

<button
  type="button"
  data-level="9"
>
  HSK 9
</button>

      </div>

    `;


    modes.insertAdjacentElement(
      "afterend",
      hskPanel
    );


    /*
      HSK selector: compact by default; expand only on tap.
    */
    const hskToggle = hskPanel.querySelector("#whiteHatHSKToggle");
    if(hskToggle){
      hskToggle.addEventListener("click", function(event){
        event.stopPropagation();
        const expanded = hskPanel.classList.toggle("levels-open");
        hskToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        hskToggle.innerHTML = '🇨🇳 Chọn cấp HSK <span aria-hidden="true">' + (expanded ? '▴' : '▾') + '</span>';
      });
    }

    /*
      HSK click — only level buttons load a level.
    */

    hskPanel
      .querySelectorAll(
        "button[data-level]"
      )
      .forEach(function(button){

        button.addEventListener(
          "click",
          function(event){

            event.stopPropagation();


            hskPanel.classList.remove("levels-open");
            const toggle = hskPanel.querySelector("#whiteHatHSKToggle");
            if(toggle){
              toggle.setAttribute("aria-expanded", "false");
              toggle.innerHTML = '🇨🇳 Chọn cấp HSK <span aria-hidden="true">▾</span>';
            }
            whiteHatLoadHSK(
              Number(
                button.dataset.level
              )
            );

          }
        );

      });


    /*
      Gắn input
    */

    whiteHatAttachInput();

    whiteHatAttachActions();

  }


  /* =====================================================
     🎤 INPUT
  ===================================================== */

  function whiteHatAttachInput(){

    const input =
      document.getElementById(
        "sentenceInput"
      );


    if(!input){

      return;

    }


    if(
      input.dataset.whiteHatReady ===
      "1"
    ){

      return;

    }


    input.dataset.whiteHatReady =
      "1";


    /*
      Sửa câu
      → quay lại Enter 1
    */

    input.addEventListener(
      "input",
      function(){

        whiteHatEnterStage =
          0;

        whiteHatLastTyped =
          input.value.trim();

      }
    );


    /*
      ENTER
    */

    input.addEventListener(
      "keydown",
      function(event){

        if(
          event.key !== "Enter"
        ){

          return;

        }


        event.preventDefault();

        event.stopPropagation();


        if(whiteHatBusy){

          return;

        }


        const typed =
          input.value.trim();


        if(!typed){

          return;

        }


        /*
          ENTER 1
        */

        if(
          whiteHatEnterStage ===
          0
        ){

          whiteHatSpeakTyped(
            typed
          );


          whiteHatEnterStage =
            1;


          return;

        }


        /*
          ENTER 2
        */

        whiteHatCheck();

      },
      true
    );

  }


  /* =====================================================
     🎛️ CÁC NÚT BỔ SUNG
  ===================================================== */

  function whiteHatAttachActions(){

    const input =
      document.getElementById(
        "sentenceInput"
      );


    if(!input){

      return;

    }


    const box =
      input.closest(
        ".sentence-box"
      );


    if(!box){

      return;

    }


    /*
      Chống tạo trùng
    */

    if(
      document.getElementById(
        "whiteHatSentenceActions"
      )
    ){

      return;

    }


    const actions =
      document.createElement(
        "div"
      );


    actions.id =
      "whiteHatSentenceActions";


    actions.innerHTML = `

      <button
        type="button"
        id="whiteHatShowAnswerButton"
      >
        👁️ Xem đáp án đúng
      </button>

      <button
        type="button"
        id="whiteHatSkipButton"
      >
        ⏭️ Bỏ qua câu
      </button>

      <button
        type="button"
        id="whiteHatShuffleAgainButton"
      >
        🔀 Xáo trộn lại

      </button>

<button
  type="button"
  id="whiteHatResetProgressButton"
>
  🔄 Học lại từ đầu
</button>

    `;


    /*
      Đặt ngay sau input
    */

    input.insertAdjacentElement(
      "afterend",
      actions
    );


    /*
      👁️ XEM ĐÁP ÁN
    */

    const showAnswer =
      document.getElementById(
        "whiteHatShowAnswerButton"
      );


    if(showAnswer){

      showAnswer.addEventListener(
        "click",
        function(){

          whiteHatShowAnswer();

        }
      );

    }


    /*
      ⏭️ BỎ QUA
    */

    const skip =
      document.getElementById(
        "whiteHatSkipButton"
      );


    if(skip){

      skip.addEventListener(
        "click",
        function(){

          whiteHatSkip();

        }
      );

    }


    /*
      🔀 XÁO TRỘN LẠI
    */

    const shuffleAgain =
      document.getElementById(
        "whiteHatShuffleAgainButton"
      );


    if(shuffleAgain){

      shuffleAgain.addEventListener(
        "click",
        function(){

          if(
            whiteHatMode ===
            "hsk"
          ){

           whiteHatSentenceList =
  whiteHatShuffle(
    whiteHatSentenceList
  );

whiteHatSentenceIndex =
  0;


/*
   💾 Xáo trộn mới = một bộ học mới
*/

whiteHatSaveSentenceProgress();


whiteHatRender();

return;

/* =====================================================
   🔄 HỌC LẠI TỪ ĐẦU
===================================================== */

const resetProgress =
  document.getElementById(
    "whiteHatResetProgressButton"
  );


if(resetProgress){

  resetProgress.addEventListener(
    "click",
    function(){

      whiteHatResetSentenceLearning();

    }
  );

}

          }


          whiteHatShuffleBasic();

        }
      );

    }

  }


  /* =====================================================
     ⌨️ CTRL + SPACE
  ===================================================== */

  document.addEventListener(
    "keydown",
    function(event){

      const section =
        document.getElementById(
          "sentenceSection"
        );


      if(!section){

        return;

      }


      if(
        section.classList.contains(
          "hidden"
        )
      ){

        return;

      }


      /*
        CTRL
        → ĐỌC ĐÁP ÁN
      */

      if(
        event.key ===
        "Control"
      ){

        event.preventDefault();


        const item =
          whiteHatCurrent();


        if(item){

          whiteHatSpeak(
            item.answer
          );

        }


        return;

      }


      /*
        SPACE NGOÀI INPUT
        → CÂU TIẾP
      */

      if(
        event.code ===
        "Space" &&
        document.activeElement !==
        document.getElementById(
          "sentenceInput"
        )
      ){

        event.preventDefault();

        whiteHatNext();

      }

    },
    true
  );


  /* =====================================================
     🔗 NÚT HTML CŨ
  ===================================================== */

  window.checkSentence =
    function(){

      whiteHatEnterStage =
        1;

      whiteHatCheck();

    };


  window.saySentence =
    function(){

      const item =
        whiteHatCurrent();


      if(item){

        whiteHatSpeak(
          item.answer
        );

      }

    };


  window.nextSentence =
    function(){

      whiteHatNext();

    };


  /* Read-only bridge for optional helpers; the learning engine stays unchanged. */
  window.__ttcWhiteHatSentenceState = {
    getCurrent: function(){ return whiteHatCurrent(); },
    getMode: function(){ return whiteHatMode; }
  };


})();


