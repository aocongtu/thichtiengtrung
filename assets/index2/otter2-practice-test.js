/* otter2 practice test — extracted from index1 */
(function bootOtter2TestGlobals(){
  /* Giống index1: Test/luyện tập cần đăng nhập + Premium/Trial. */
  if (typeof window.checkPremiumFeature !== "function") {
    window.checkPremiumFeature = async function () {
      if (!window.currentUser) {
        if (typeof window.otter2AccountOpenLogin === "function") {
          window.otter2AccountOpenLogin();
        } else {
          alert(
            "🔒 Tính năng Premium\n\nTest và các chức năng luyện tập chỉ dành cho thành viên Premium.\n\nVui lòng đăng nhập hoặc đăng ký Premium."
          );
        }
        return false;
      }
      if (typeof window.hasPremiumAccess === "function") {
        const allowed = await window.hasPremiumAccess();
        if (allowed) return true;
      } else {
        return true;
      }
      alert(
        "💎 Tính năng Premium\n\nTest và các chức năng luyện tập chỉ dành cho thành viên Premium.\n\nVui lòng đăng ký gói Premium để sử dụng."
      );
      return false;
    };
  }
  if (typeof window.say !== "function") {
    window.say = function (text) {
      if (!text || !("speechSynthesis" in window)) return;
      try { speechSynthesis.cancel(); } catch (e) {}
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = "zh-CN";
      u.rate = 0.92;
      speechSynthesis.speak(u);
    };
  }
  if (!Array.isArray(window.words) || !window.words.length) {
    window.words = (window.OTTER2_HSK1_DATA && Array.isArray(window.OTTER2_HSK1_DATA.words))
      ? window.OTTER2_HSK1_DATA.words.slice()
      : [];
  }
})();

var words = window.words;
var currentHSK = (typeof window.currentHSK === "number" && window.currentHSK) ? window.currentHSK : 1;
window.currentHSK = currentHSK;
var testQuestions = Array.isArray(window.testQuestions) ? window.testQuestions : [];
var testIndex = 0;
var testScore = 0;
var testAnswered = false;
var testFinished = false;

/* --- globals --- */

let testWrongWords =
  JSON.parse(
    localStorage.getItem("wrongWords") || "[]"
  );




function saveTestWrongWord(word){

  if(!word || !word.h) return;


  const exists =
    testWrongWords.some(function(item){

      return item.h === word.h;

    });


  /*
     Không lưu trùng
  */

  if(!exists){

    testWrongWords.push({

      h: word.h,

      p: word.p || "",

      m: word.m || "",

      type: word.type || "",

      hsk: word.hsk || currentHSK

    });


    localStorage.setItem(
      "wrongWords",
      JSON.stringify(testWrongWords)
    );

  }


  updateTestWrongWordCount();

}




async function saveTestProgress(
  level,
  currentIndex,
  completed = false
){

  if(!window.currentUser){
    return false;
  }

  const { error } =
    await window.supabase
      .from("vocabulary_test_progress")
      .upsert(
        {
          user_id:
            window.currentUser.id,

          hsk_level:
            level,

          current_index:
            currentIndex,

          completed:
            completed,

          updated_at:
            new Date().toISOString()
        },
        {
          onConflict:
            "user_id,hsk_level"
        }
      );

  if(error){

    console.error(
      "Save test progress error:",
      error
    );

    return false;

  }

  return true;

}




function clearLocalTestProgress(level){
  try{ localStorage.removeItem(getLocalTestProgressKey(level)); }
  catch(error){ console.warn("Không xóa được tiến độ Test:", error); }
}


function checkTest(){

  /*
     Không cho kiểm tra lại câu đã hoàn thành
  */

  if(testAnswered) return;


  if(testFinished) return;


  const inputElement =
    document.getElementById(
      "testInput"
    );


  const result =
    document.getElementById(
      "testResult"
    );


  const w =
    testQuestions[testIndex];


  if(!w) return;


  const input =
    inputElement.value.trim();


  /* ==================================================
     ⚠️ CHƯA NHẬP
  ================================================== */

  if(!input){

    result.classList.remove("ttc-test-correct-only");
    result.textContent =
      "⚠️ Anh hãy nhập Hán tự trước nhé!";


    result.style.color =
      "#d08a00";


    return;

  }


  const cleanInput =
    input.replace(/\s+/g,"");


  const cleanAnswer =
    w.h
      .trim()
      .replace(/\s+/g,"");


  /* ==================================================
     ✅ ĐÚNG
  ================================================== */

  if(cleanInput === cleanAnswer){

    testScore++;


    testAnswered = true;

/* ==================================================
   💾 LƯU TIẾN ĐỘ
   Câu hiện tại đã hoàn thành
   → lần sau sẽ bắt đầu từ câu tiếp theo
================================================== */

saveTestProgress(
  currentHSK,
  testIndex + 1,
  false
);

    /* Chỉ hiển thị đúng một dòng chữ, không kế thừa nội dung cũ. */
    result.innerHTML = "Chính xác";
    result.classList.add("ttc-test-correct-only");
    result.style.color = "#087536";
    result.style.fontSize = "24px";
    result.style.fontWeight = "800";


    document
      .getElementById("score")
      .textContent =
        `Điểm hiện tại: ${getTestScorePercent()} / 100`;


    /*
       🔊 TỰ ĐỌC
    */

    setTimeout(function(){

      say(w.h);

    },150);


    updateTestButtonState();
    saveLocalTestProgress();


    return;

  }


  /* ==================================================
     ❌ SAI
  ================================================== */

  result.classList.remove("ttc-test-correct-only");
  result.innerHTML =
    `❌ Chưa đúng.<br>
     Đáp án: <strong>${w.h}</strong><br>
     Pinyin: ${w.p || ""}`;


  result.style.color =
    "#d35b5b";


  /*
     ⭐ NHỚ TỪ SAI
  */

  saveTestWrongWord(w);


  testAnswered = true;

/* ==================================================
   💾 LƯU TIẾN ĐỘ
================================================== */

saveTestProgress(
  currentHSK,
  testIndex + 1,
  false
);

  document
    .getElementById("score")
    .textContent =
      `Điểm hiện tại: ${getTestScorePercent()} / 100`;


  /*
     🔊 ĐỌC ĐÁP ÁN ĐÚNG
  */

  setTimeout(function(){

    say(w.h);

  },150);


  updateTestButtonState();
  saveLocalTestProgress();

}




function sayTestAnswer(){

  const w =
    testQuestions[testIndex];


  if(!w) return;


  say(w.h);

}




function finishTest(){

  testFinished = true;

   testAnswered = true;


/* ==================================================
   💾 LƯU ĐÃ HOÀN THÀNH TOÀN BỘ HSK
================================================== */

saveTestProgress(
  currentHSK,
  testQuestions.length,
  true
);


  const total =
    testQuestions.length;


  const wrong =
    total - testScore;


  document
    .getElementById("testNumber")
    .textContent =
      "🎉 HOÀN THÀNH BÀI TEST";


  document
    .getElementById("testQuestion")
    .textContent =
      `🏆 ${getTestScorePercent()} / 100`;


  document
    .getElementById("testHint")
    .textContent =
      testScore >= 9
        ? "🏆 Quá xuất sắc!"
        : testScore >= 7
          ? "👏 Rất tốt! Tiếp tục cố gắng!"
          : testScore >= 5
            ? "💪 Khá tốt, ôn lại những từ sai nhé!"
            : "🔥 Không sao! Ôn lại từ sai rồi làm lại nhé!";


  document
    .getElementById("testInput")
    .value = "";


  document
    .getElementById("testResult")
    .innerHTML =
      `
      ✅ Đúng: <strong>${testScore}</strong> câu<br>
      ❌ Sai: <strong>${wrong}</strong> câu<br>
      🏆 Điểm: <strong>${getTestScorePercent()} / 100</strong>
      `;


  document
    .getElementById("testResult")
    .style.color =
      "#333";


  document
    .getElementById("score")
    .textContent =
      `🏆 ĐIỂM CUỐI: ${getTestScorePercent()} / 100`;


  updateTestWrongWordCount();


  updateTestButtonState();
  saveLocalTestProgress();

}



function resetTest(){

  /* ==================================================
     📚 RESET ĐÚNG HSK ĐANG CHỌN
  ================================================== */

  testQuestions =
  words.filter(
    w => Number(w.hsk) === Number(currentHSK)
  );


  testIndex = 0;

  testScore = 0;

  testAnswered = false;

  testFinished = false;


  /* ==================================================
     💾 XÓA TIẾN ĐỘ CỦA RIÊNG HSK NÀY
  ================================================== */

  resetTestProgress(currentHSK);
  clearLocalTestProgress(currentHSK);


  /* ==================================================
     ⚠️ HSK KHÔNG CÓ TỪ
  ================================================== */

  if(testQuestions.length === 0){

    showTestQuestion();

    return;

  }


  /* ==================================================
     📝 CẬP NHẬT TIÊU ĐỀ
  ================================================== */

  document
    .getElementById("testTitle")
    .textContent =
      `📝 TEST TỪ VỰNG HSK ${currentHSK}`;


  /* ==================================================
     ▶️ BẮT ĐẦU LẠI TỪ CÂU 1
  ================================================== */

  showTestQuestion();

  ttcAppearUnder(
    document.getElementById("ttcActionFrame"),
    document.getElementById("testSection")
  );

}




function getTestScorePercent(){

  const total =
    testQuestions.length;

  if(!total){
    return 0;
  }

  return Math.round(
    (testScore / total) * 100
  );

}

async function loadTestProgress(level){

  if(!window.currentUser){
    return {
      current_index: 0,
      completed: false
    };
  }

  const { data, error } =
    await window.supabase
      .from("vocabulary_test_progress")
      .select("current_index, completed")
      .eq("user_id", window.currentUser.id)
      .eq("hsk_level", level)
      .maybeSingle();

  if(error){

    console.error(
      "Load test progress error:",
      error
    );

    return {
      current_index: 0,
      completed: false
    };

  }

  if(!data){

    return {
      current_index: 0,
      completed: false
    };

  }

  return data;

}

async function resetTestProgress(level){

  if(!window.currentUser){
    return false;
  }

  const { error } =
    await window.supabase
      .from("vocabulary_test_progress")
      .upsert(
        {
          user_id:
            window.currentUser.id,

          hsk_level:
            level,

          current_index:
            0,

          completed:
            false,

          updated_at:
            new Date().toISOString()
        },
        {
          onConflict:
            "user_id,hsk_level"
        }
      );

  if(error){

    console.error(
      "Reset test progress error:",
      error
    );

    return false;

  }

  return true;

}

function updateTestWrongWordCount(){

  const element =
    document.getElementById(
      "testWrongWordCount"
    );


  if(!element) return;


  element.textContent =
    `❌ Từ sai đã nhớ: ${testWrongWords.length}`;

}

async function openVocabularyTestChooser(sourceButton){

  const testSection = document.getElementById("testSection");
  if(
    sourceButton &&
    testSection &&
    !testSection.classList.contains("hidden")
  ){
    testSection.classList.add("hidden");
    sourceButton.classList.remove("active");
    const opened = document.getElementById("ttcVocabularyTestChooser");
    if(opened) opened.remove();
    return;
  }

  /* =========================================================
     📝 TEST TỪ VỰNG — CHỌN HSK ĐỘC LẬP
     - Không phụ thuộc HSK đang chọn ở thanh điều hướng.
     - Dùng trực tiếp kho words hiện có của web.
     - Không thay đổi engine chấm điểm hiện tại.
  ========================================================= */
  const allowed = await checkPremiumFeature();
  if(!allowed) return;

  const old = document.getElementById("ttcVocabularyTestChooser");
  if(old) old.remove();

  const overlay = document.createElement("div");
  overlay.id = "ttcVocabularyTestChooser";
  overlay.setAttribute("role","dialog");
  overlay.setAttribute("aria-modal","true");
  overlay.innerHTML = `
    <div class="ttc-vocab-test-dialog">
      <button type="button" class="ttc-vocab-test-close" aria-label="Đóng">×</button>
      <div class="ttc-vocab-test-title">📝 TEST TỪ VỰNG</div>
      <div class="ttc-vocab-test-subtitle">Chọn cấp độ HSK muốn kiểm tra</div>
      <div class="ttc-vocab-test-levels">
        ${[1,2,3,4,5,6,7,8,9].map(lv => `
          <button type="button" class="ttc-vocab-test-level" data-hsk="${lv}">HSK ${lv}</button>
        `).join("")}
      </div>
      <div class="ttc-vocab-test-note">Đề lấy trực tiếp từ kho từ vựng HSK ${1}–9 đang có trong web.</div>
    </div>
  `;

  document.body.appendChild(overlay);

  function close(){ overlay.remove(); }
  overlay.querySelector(".ttc-vocab-test-close").onclick=close;
  overlay.addEventListener("click",function(e){ if(e.target===overlay) close(); });

  overlay.querySelectorAll(".ttc-vocab-test-level").forEach(function(levelButton){
    levelButton.addEventListener("click",async function(){
      const level=Number(this.dataset.hsk);
      if(!level) return;

      /* Phase 2I: chỉ HSK có trong availableLevels (hiện HSK1). UI vẫn hiện 1–9. */
      if(
        typeof window.otter2AssertHskAvailable === "function" &&
        !window.otter2AssertHskAvailable(level)
      ){
        return;
      }

      /* Phase 3D.1: xem bảng thành tích không đi qua đây; học/test HSK3–9 cần Premium/Trial. */
      var allowed = true;
      try{
        if(typeof checkPremiumAccess === "function"){
          allowed = !!(await checkPremiumAccess(level));
        }
      }catch(eAccess){
        allowed = false;
      }
      if(!allowed) return;

      /* HSK được chọn riêng cho bài test, không đổi các khu học khác. */
      currentHSK=level;
      document.querySelectorAll(".wh-hsk-level").forEach(function(b){
        b.classList.toggle("wh-selected",Number(b.dataset.hsk)===level);
      });
      const info=document.getElementById("whHskSelectedInfo");
      if(info) info.textContent="Đang chọn HSK "+level;

      close();
      await startTest(sourceButton);
    });
  });
}

function getLocalTestProgressKey(level){
  return "ttc_vocabulary_test_session_v1_hsk_" + Number(level);
}

function loadLocalTestProgress(level){
  try{
    const raw = localStorage.getItem(getLocalTestProgressKey(level));
    if(!raw) return null;
    const data = JSON.parse(raw);
    return data && Number(data.hsk_level) === Number(level) ? data : null;
  }catch(error){ console.warn("Không đọc được tiến độ Test:", error); return null; }
}

function saveLocalTestProgress(){
  try{
    if(!Array.isArray(testQuestions) || !testQuestions.length) return false;
    const result = document.getElementById("testResult");
    const input = document.getElementById("testInput");
    localStorage.setItem(getLocalTestProgressKey(currentHSK), JSON.stringify({
      hsk_level:Number(currentHSK), current_index:Number(testIndex)||0,
      score:Number(testScore)||0, answered:!!testAnswered, completed:!!testFinished,
      input_value:input ? input.value : "", result_html:result ? result.innerHTML : "",
      result_color:result ? result.style.color : "", updated_at:Date.now()
    }));
    return true;
  }catch(error){ console.warn("Không lưu được tiến độ Test:", error); return false; }
}

function bindLocalTestProgressAutosave(){
  const input=document.getElementById("testInput");
  if(input && !input.dataset.ttcProgressAutosave){
    input.dataset.ttcProgressAutosave="1";
    input.addEventListener("input",saveLocalTestProgress);
  }
}

async function startTest(btn){
  if (Array.isArray(window.words) && window.words.length) words = window.words;
  window.currentHSK = currentHSK;

  const allowed =
    await checkPremiumFeature();

  if(!allowed){
    return;
  }

  document
    .querySelectorAll("nav button")
    .forEach(function(b){

      b.classList.remove("active");

    });


  btn.classList.add("active");


  var __vs = document.getElementById("vocabularySection"); if(__vs) __vs.classList.add("hidden");


  var __ss = document.getElementById("sentenceSection"); if(__ss) __ss.classList.add("hidden");


  document
    .getElementById("testSection")
    .classList.remove("hidden");

/* =========================================================
   📚 TEST TUẦN TỰ THEO THỨ TỰ TỪ VỰNG
   Không random
   Không giới hạn 10 câu
   Tiếp tục từ tiến độ đã lưu
========================================================= */

testQuestions =
  words.filter(
    w => Number(w.hsk) === Number(currentHSK)
  );

try{
  if(typeof window.ttcVocabMemoryLoadMine === "function"){
    await window.ttcVocabMemoryLoadMine({ hskLevel: Number(currentHSK) });
  }
  if(typeof window.ttcVocabMemoryPrioritizeWords === "function"){
    testQuestions = window.ttcVocabMemoryPrioritizeWords(testQuestions, 0);
  }
}catch(eMemPri){}

bindLocalTestProgressAutosave();

/* Ưu tiên trạng thái đầy đủ trên trình duyệt; dùng tiến độ tài khoản cũ làm dự phòng. */
const localProgress = loadLocalTestProgress(currentHSK);
const progress = localProgress || await loadTestProgress(currentHSK);

testIndex = Math.max(0, Math.min(
  Number(progress.current_index || 0),
  Math.max(0, testQuestions.length - 1)
));
testScore = Math.max(0, Number(progress.score || 0));
testAnswered = !!progress.answered;
testFinished = !!progress.completed;


/* =========================================================
   🎉 ĐÃ HOÀN THÀNH HSK
========================================================= */

if(progress.completed){

  testFinished = true;

  document
    .getElementById("testNumber")
    .textContent =
      "🎉 Đã hoàn thành";

  document
    .getElementById("testQuestion")
    .textContent =
      `🎉 Đã hoàn thành HSK ${currentHSK}`;

  document
    .getElementById("testHint")
    .textContent =
      "Anh đã hoàn thành toàn bộ từ vựng HSK này.";

  document
    .getElementById("testInput")
    .value = "";

  document
    .getElementById("testResult")
    .textContent =
      "🔄 Anh có thể RESET để làm lại từ đầu.";

  document
    .getElementById("score")
    .textContent = "";

  createTestButtons();

  updateTestButtonState();
  saveLocalTestProgress();

  return;

}
 

  document
    .getElementById("testTitle")
    .textContent =
      `📝 TEST TỪ VỰNG HSK ${currentHSK}`;


  /*
     Nếu HSK chưa có dữ liệu
  */

  if(testQuestions.length === 0){

    document
      .getElementById("testNumber")
      .textContent =
        "Chưa có dữ liệu";


    document
      .getElementById("testQuestion")
      .textContent =
        `HSK ${currentHSK}`;


    document
      .getElementById("testHint")
      .textContent =
        "Hiện chưa có từ vựng cho HSK này.";


    document
      .getElementById("testInput")
      .value = "";


    document
      .getElementById("testResult")
      .textContent =
        "👉 Hãy thêm dữ liệu HSK trước nhé!";


    document
      .getElementById("score")
      .textContent = "";


    createTestButtons();

    updateTestButtonState();

    return;

  }


  showTestQuestion();

  /* Khôi phục câu đang làm, nội dung nhập và kết quả đã chấm. */
  if(localProgress){
    const input=document.getElementById("testInput");
    const result=document.getElementById("testResult");
    if(input) input.value=localProgress.input_value || "";
    if(result){
      result.innerHTML=localProgress.result_html || "";
      result.style.color=localProgress.result_color || "";
    }
    testAnswered=!!localProgress.answered;
    testFinished=!!localProgress.completed;
    document.getElementById("score").textContent=
      `Điểm hiện tại: ${getTestScorePercent()} / 100`;
    updateTestButtonState();
    saveLocalTestProgress();
  }

  createTestButtons();

  ttcAppearUnder(
    document.getElementById("ttcActionFrame"),
    document.getElementById("testSection")
  );

}

function showTestQuestion(){

  const w =
    testQuestions[testIndex];


  if(!w) return;


  testAnswered = false;


  document
    .getElementById("testNumber")
    .textContent =
      `Câu ${testIndex + 1} / ${testQuestions.length}`;


  /*
     ⭐ CHỈ HIỆN NGHĨA TIẾNG VIỆT
  */

  document
    .getElementById("testQuestion")
    .textContent =
      w.m;


  document
    .getElementById("testHint")
    .textContent =
      "✍️ Hãy nhập Hán tự tiếng Trung của nghĩa trên.";


  document
    .getElementById("testInput")
    .value = "";


  document
    .getElementById("testResult")
    .textContent = "";


  document
    .getElementById("score")
    .textContent =
      `Điểm hiện tại: ${getTestScorePercent()} / 100`;


  updateTestButtonState();
  saveLocalTestProgress();


  /*
     Tự đưa con trỏ vào ô nhập
  */

  setTimeout(function(){

    const input =
      document.getElementById("testInput");


    if(input){

      input.focus();

    }

  },50);

}

function nextTest(){

  /*
     Không có bài
  */

  if(!testQuestions.length) return;


  /*
     Hết bài
  */

  if(testFinished) return;


  /*
     ⭐ Chưa trả lời thì không được sang câu khác
  */

  if(!testAnswered){

    const result =
      document.getElementById(
        "testResult"
      );


    result.textContent =
      "👉 Hãy trả lời câu này trước nhé!";


    result.style.color =
      "#d08a00";


    return;

  }


  /*
     ⭐ Chỉ đi về phía trước
     Không quay lại câu cũ
  */

  testIndex++;


  /*
     HẾT 10 CÂU
  */

  if(
    testIndex >=
    testQuestions.length
  ){

    finishTest();

    return;

  }


  /*
     Hiện câu tiếp theo
  */

  showTestQuestion();

}

function createTestButtons(){

  /*
     Không tạo lặp lại
  */

  if(
    document.getElementById(
      "testButtonsAuto"
    )
  ){

    updateTestWrongWordCount();

    updateTestButtonState();

    return;

  }


  const testSection =
    document.getElementById(
      "testSection"
    );


  if(!testSection) return;


  const box =
    document.createElement(
      "div"
    );


  box.id =
    "testButtonsAuto";


  box.innerHTML = `

    <div
      id="testWrongWordCount"
      style="
        margin:15px 0 10px;
        font-weight:700;
      ">
      ❌ Từ sai đã nhớ: 0
    </div>


    <div
      style="
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-top:10px;
      ">

      <button
        type="button"
        id="nextTestButton">
        ➡️ Câu tiếp
      </button>


      <button
        type="button"
        id="resetTestButton">
        🔄 Học lại từ đầu
      </button>
<button
  type="button"
  id="clearTestWrongWordsButton">
  🧹 Xóa từ sai đã nhớ
</button>

    </div>

  `;


  /*
     Đặt cuối khu vực TEST
  */

  testSection.appendChild(
    box
  );


  /*
     Nút CÂU TIẾP
  */

  document
    .getElementById(
      "nextTestButton"
    )
    .addEventListener(
      "click",
      function(){

        nextTest();

      }
    );


  /*
     Nút RESET
  */

  document
    .getElementById(
      "resetTestButton"
    )
    .addEventListener(
      "click",
      function(){

        resetTest();

      }
    );
document
  .getElementById(
    "clearTestWrongWordsButton"
  )
  .addEventListener(
    "click",
    function(){

      if(
        !confirm(
          "Anh có chắc muốn xóa toàn bộ các từ sai đã nhớ không?"
        )
      ){
        return;
      }

      clearTestWrongWords();

    }
  );

  updateTestWrongWordCount();

  updateTestButtonState();

}

function updateTestButtonState(){

  const nextButton =
    document.getElementById(
      "nextTestButton"
    );


  if(!nextButton) return;


  /*
     Hết bài
  */

  if(testFinished){

    nextButton.disabled = true;

    nextButton.textContent =
      "✅ Đã hoàn thành";

    return;

  }


  /*
     Chưa trả lời
  */

  if(!testAnswered){

    nextButton.disabled = true;

    nextButton.textContent =
      "➡️ Câu tiếp";

    return;

  }


  /*
     Đã trả lời
  */

  nextButton.disabled = false;


  /*
     Câu cuối
  */

  if(
    testIndex ===
    testQuestions.length - 1
  ){

    nextButton.textContent =
      "🏁 Xem kết quả";

  }

  else{

    nextButton.textContent =
      "➡️ Câu tiếp";

  }

}

function clearTestWrongWords(){

  testWrongWords = [];


  localStorage.removeItem(
    "wrongWords"
  );


  updateTestWrongWordCount();

}

function ttcAppearUnder(anchor, panel){
  if(!anchor || !panel) return;
  /* Panel phai nam trong #otter2PracticePanels (toan chieu ngang, duoi hang
     nut cua hub). Chen panel vao .otter2-practice-col-left (cot hep chua nut)
     lam hang hub cao vuot, day mascot cot phai xuong canh panel va panel bi
     bo hep theo cot trai — loi "Be khong lo" canh khu test. */
  var home = document.getElementById("otter2PracticePanels");
  if(home && panel.parentElement !== home){
    home.appendChild(panel);
  }
}


window.openVocabularyTestChooser = openVocabularyTestChooser;
window.startTest = startTest;
window.nextTest = nextTest;
window.checkTest = checkTest;
window.sayTestAnswer = sayTestAnswer;
window.resetTest = resetTest;
window.finishTest = finishTest;
window.createTestButtons = createTestButtons;
window.showTestQuestion = showTestQuestion;
window.clearTestWrongWords = clearTestWrongWords;
window.updateTestWrongWordCount = updateTestWrongWordCount;
window.saveTestProgress = saveTestProgress;
window.ttcAppearUnder = ttcAppearUnder;

