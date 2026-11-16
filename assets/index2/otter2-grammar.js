/* Otter2 Grammar Engine — ported from index.html Grammar Engine V3.1 + Access Guard V2 */
(function(){

  "use strict";

  /* =========================================================
     🔒 CHỐNG NẠP TRÙNG V3.1
  ========================================================= */

  if(window.__THICH_TIENg_TRUNG_GRAMMAR_V3_1__) return;
  window.__THICH_TIENg_TRUNG_GRAMMAR_V3_1__ = true;

  if (!window.OTTER2_GRAMMAR_DATA || !window.OTTER2_GRAMMAR_PACKS) {
    console.error("[otter2-grammar] Missing OTTER2_GRAMMAR_DATA / OTTER2_GRAMMAR_PACKS");
    return;
  }



  /* =========================================================
     DỮ LIỆU NGỮ PHÁP HSK 1 → HSK 9
  ========================================================= */

  const grammarData = window.OTTER2_GRAMMAR_DATA;

  /* =========================================================
     TRẠNG THÁI
  ========================================================= */

  let currentLevel = 1;
  let currentIndex = 0;
  let currentMode = "normal";

  let recorder = null;
  let recordingStream = null;
  let recordingChunks = [];


  /* =========================================================
     XÓA BẢN GRAMMAR CŨ NẾU CÒN
  ========================================================= */

  [
    "thttGrammarStyle",
    "thttGrammarOverlay",
    "thttGrammarLauncher",
    "thtt-grammar-style-v2",
    "thtt-grammar-style-v3"
  ].forEach(function(id){

    const old =
      document.getElementById(id);

    if(old){
      old.remove();
    }

  });


  /* =========================================================
     CSS
  ========================================================= */

/* CSS loaded via assets/index2/otter2-grammar.css */

  


  /* =========================================================
     LAUNCHER
  ========================================================= */

  const launcher =
    document.createElement("button");

  launcher.id =
    "thttGrammarLauncher";

  launcher.textContent =
    "🧩 Ngữ pháp";

  document.body.appendChild(
    launcher
  );


  /* =========================================================
     OVERLAY
  ========================================================= */

  const overlay =
    document.createElement("div");

  overlay.id =
    "thttGrammarOverlay";

  overlay.innerHTML = `

    <div id="thttGrammarApp">

      <div class="thtt-g-header">

        <div class="thtt-g-header-top">

          <div class="thtt-g-title">
            🧩 Ngữ pháp tiếng Trung
          </div>

          <button
            id="thttGrammarClose"
            class="thtt-g-close">

            ×

          </button>

        </div>

        <div class="thtt-g-levels">

          ${[1,2,3,4,5,6,7,8,9].map(level => `

            <button
              class="thtt-g-level ${level === 1 ? "active" : ""}"
              data-level="${level}">

              HSK ${level}${level > 1 ? " · Premium" : ""}

            </button>

          `).join("")}

        </div>

      </div>

      <div class="thtt-g-progress">
        <div id="thttGrammarProgress"></div>
      </div>

      <div
        id="thttGrammarBody"
        class="thtt-g-body">
      </div>

    </div>

  `;

  document.body.appendChild(
    overlay
  );


  /* =========================================================
     DOM
  ========================================================= */

  const body =
    overlay.querySelector(
      "#thttGrammarBody"
    );

  const progress =
    overlay.querySelector(
      "#thttGrammarProgress"
    );


  /* =========================================================
     DATA
  ========================================================= */

  function getData(){

    return grammarData[
      currentLevel
    ] || [];

  }


  function getCurrent(){

    const data =
      getData();

    return data[
      currentIndex
    ] || null;

  }


  /* =========================================================
     STOP MEDIA
  ========================================================= */

  function stopAllMedia(){

    try{

      speechSynthesis.cancel();

    }catch(error){}

    if(
      recorder &&
      recorder.state === "recording"
    ){

      try{
        recorder.stop();
      }catch(error){}

    }

    if(recordingStream){

      recordingStream
        .getTracks()
        .forEach(
          track => track.stop()
        );

      recordingStream =
        null;

    }

  }


  /* =========================================================
     SPEAK
  ========================================================= */

  function speakChinese(text){

    if(!text) return;

    try{

      speechSynthesis.cancel();

      const utterance =
        new SpeechSynthesisUtterance(
          text
        );

      utterance.lang =
        "zh-CN";

      utterance.rate =
        0.85;

      utterance.pitch =
        1;

      speechSynthesis.speak(
        utterance
      );

    }catch(error){

      console.error(error);

    }

  }


  /* =========================================================
     QUESTION NAVIGATOR
  ========================================================= */

  function renderSentenceNavigator(){

    const data =
      getData();

    if(!data.length){

      return "";

    }

    return `

      <div class="thtt-question-number">

        Câu ${currentIndex + 1}
        / ${data.length}

      </div>

      <div class="thtt-select-wrap">

        <select
          id="thttQuestionSelect"
          class="thtt-question-select">

          ${data.map(
            (item,index)=>`

              <option
                value="${index}"
                ${index === currentIndex ? "selected" : ""}>

                Câu ${index + 1} — ${item.pattern}

              </option>

            `
          ).join("")}

        </select>

      </div>

            <div class="thtt-sentence-nav">

        <button
          class="thtt-nav-btn"
          data-action="prevQuestion">

          ← Trước

        </button>

        <button
          class="thtt-nav-btn"
          data-action="normal">

          ↩️ Trở về

        </button>

        <button
          class="thtt-nav-btn"
          data-action="nextQuestion">

          Sau →

        </button>

      </div>
    `;

  }


  /* =========================================================
     SELECT CÂU
  ========================================================= */

  function bindQuestionSelect(){

    const select =
      body.querySelector(
        "#thttQuestionSelect"
      );

    if(!select) return;

    select.onchange =
      function(){

        goToQuestion(
          Number(this.value)
        );

      };

  }


  function goToQuestion(index){

    const data =
      getData();

    if(!data.length) return;

    stopAllMedia();

    if(index < 0){
      index = data.length - 1;
    }

    if(index >= data.length){
      index = 0;
    }

    currentIndex =
      index;

    currentMode =
      "normal";

    renderNormal();

  }


  function nextQuestion(){

  const data =
    getData();

  if(!data.length) return;

  stopAllMedia();

  currentIndex =
    (currentIndex + 1)
    % data.length;


  if(currentMode === "listen"){

    renderListen();

    return;

  }


  if(currentMode === "unscramble"){

    renderUnscramble();

    return;

  }


  if(currentMode === "speaking"){

    renderSpeaking();

    return;

  }


  renderNormal();

}

  function prevQuestion(){

  const data =
    getData();

  if(!data.length) return;

  stopAllMedia();

  currentIndex =
    (currentIndex - 1 + data.length)
    % data.length;


  if(currentMode === "listen"){

    renderListen();

    return;

  }


  if(currentMode === "unscramble"){

    renderUnscramble();

    return;

  }


  if(currentMode === "speaking"){

    renderSpeaking();

    return;

  }


  renderNormal();

}

  /* =========================================================
     RENDER NORMAL
  ========================================================= */

  const GRAMMAR_PACKS = window.OTTER2_GRAMMAR_PACKS;

    function grammarPack(item){
    if(!item) return null;
    if(GRAMMAR_PACKS[item.id]) return GRAMMAR_PACKS[item.id];
    if(item.pattern === "是……的") return GRAMMAR_PACKS["shi-de"];
    return null;
  }


  function grammarExamples(item){

    if(!item) return [];

    const pack = grammarPack(item);

    if(pack && Array.isArray(pack.examples) && pack.examples.length){
      return pack.examples;
    }

    if(Array.isArray(item.examples) && item.examples.length){
      return item.examples.map(function(ex){
        return {
          tag: ex.tag || "",
          zh: ex.zh || ex.example || "",
          py: ex.py || ex.pinyin || "",
          vi: ex.vi || ex.meaning || ""
        };
      });
    }

    return [{
      tag: "Ví dụ",
      zh: item.example || "",
      py: item.pinyin || "",
      vi: item.meaning || ""
    }];

  }


  function grammarExampleHtml(item){

    return grammarExamples(item).map(function(ex, index){

      return `

        <div class="thtt-g-label">
          🇨🇳 Ví dụ ${index + 1}${ex.tag ? " · " + ex.tag : ""}
        </div>

        <div class="thtt-g-example">
          ${ex.zh}
        </div>

        <div class="thtt-g-pinyin">
          ${ex.py}
        </div>

        <div class="thtt-g-meaning">
          🇻🇳 ${ex.vi}
        </div>

      `;

    }).join("");

  }


  function grammarExplainHtml(item){

    const pack = grammarPack(item);
    const explanation = (pack && pack.explanation) || (item && item.explanation) || "";
    const note = (pack && pack.note) || (item && item.note) || "Không đảo trật tự của mẫu và không bỏ thành phần bắt buộc.";
    const sample = pack && pack.examples && pack.examples[0];

    return `

      <div class="thtt-g-info">
        <b>💡 Khi nào dùng:</b><br>
        ${explanation}
      </div>

      <div class="thtt-g-info">
        <b>📐 Xếp vào câu:</b><br>
        Giữ đúng khung <b>${item.structure || ""}</b>.
        Mỗi ví dụ đổi người, chỗ hoặc việc, không chép lại cùng một câu.
      </div>

      <div class="thtt-g-info">
        <b>👀 Đọc câu mẫu:</b><br>
        ${sample ? sample.zh : (item.example || "")} nghĩa là “${sample ? sample.vi : (item.meaning || "")}”.
        Đọc theo pinyin để giữ thanh điệu, rồi che pinyin và nói lại.
      </div>

      <div class="thtt-g-info">
        <b>⚠️ Lỗi cần tránh:</b><br>
        ${note}
      </div>

    `;

  }


  function renderNormal(){

    currentMode =
      "normal";

    const item =
      getCurrent();

    if(!item){

      body.innerHTML = `

        <div class="thtt-g-card">

          <div class="thtt-empty-level">

            <div class="thtt-empty-icon">
              🚧
            </div>

            <div class="thtt-empty-title">
              HSK ${currentLevel}
            </div>

            <p>
              Dữ liệu ngữ pháp HSK ${currentLevel}
              sẽ được nối vào cùng Grammar Engine này.
            </p>

          </div>

        </div>

      `;

      updateProgress();

      return;

    }


    body.innerHTML = `

      ${renderSentenceNavigator()}

      <div class="thtt-g-card">

        <div class="thtt-g-label">
          🧩 Mẫu ngữ pháp
        </div>

        <div class="thtt-g-pattern">
          ${item.title}
        </div>

        <div class="thtt-g-label">
          📐 Cấu trúc
        </div>

        <div class="thtt-g-structure">
          ${item.structure}
        </div>

        ${grammarExplainHtml(item)}

        ${grammarExampleHtml(item)}

        <div class="thtt-g-actions">

          <button
            class="thtt-g-btn"
            data-action="listen">

            🔊 Nghe câu

          </button>

          <button
            class="thtt-g-btn"
            data-action="unscramble">

            🔀 Ghép câu

          </button>

          <button
            class="thtt-g-btn"
            data-action="speaking">

            🎤 Đọc thành tiếng

          </button>

        </div>

      </div>

    `;

    bindQuestionSelect();
    updateProgress();

  }


  /* =========================================================
     LISTEN MODE
  ========================================================= */

  function renderListen(){

    stopAllMedia();

    currentMode =
      "listen";

    const item =
      getCurrent();

    if(!item){

      renderNormal();
      return;

    }

    body.innerHTML = `

      ${renderSentenceNavigator()}

      <div class="thtt-g-card">

        <div style="
          text-align:center;
          padding:15px 5px;
        ">

          <div style="
            font-size:26px;
            font-weight:700;
            color:#991b1b;
          ">

            🔊 Nghe câu

          </div>

          <div
            class="thtt-g-label"
            style="margin-top:25px;">

            Hãy nghe thật kỹ

          </div>

          <div class="thtt-g-example">
            ${item.example}
          </div>

          <div class="thtt-g-pinyin">
            ${item.pinyin}
          </div>

          <button
            class="thtt-g-btn"
            data-action="play"
            style="max-width:300px;">

            🔊 Nghe lại

          </button>

          <div
            class="thtt-g-info"
            style="text-align:left;">

            <b>🎯 Mục tiêu:</b><br>

            Nghe câu nhiều lần và chú ý đến
            thanh điệu, nhịp câu và cách nối âm.

          </div>

        </div>

      </div>

    `;

    bindQuestionSelect();
    updateProgress();

  }


 /* =========================================================
   TOKENIZE — GHÉP CÂU
   Tách Hán tự thành từng cụm an toàn
   Không dùng Intl.Segmenter
========================================================= */

function tokenizeChinese(sentence){

  const text =
    String(sentence || "").replace(/\s+/g, "").trim();

  if(!text){
    return [];
  }

  /*
     Ghép theo từ/cụm có nghĩa bằng cách tìm cụm dài nhất trước.
     Ví dụ: 他已经戒烟两个月了。 → 他 | 已经 | 戒烟 | 两个月 | 了。
     Dấu câu được gắn vào cụm cuối, không tạo nút riêng.
  */
  const builtInPhrases = [
    "两个月","三个月","一个月","几个月","两年","三年","半年",
    "已经","正在","刚刚","马上","后来","以前","以后","因为","所以",
    "如果","虽然","但是","可是","而且","然后","当然","可能","应该","需要",
    "戒烟","吸烟","喝酒","身体","医院","工作","学习","中文","中国",
    "日本","朋友","同学","老师","学生","公司","学校","商店","东西",
    "电话","手机","电脑","天气","时间","时候","早上","上午","中午",
    "下午","晚上","今天","昨天","明天","前天","后天","去年","今年",
    "明年","周末","星期天","星期一","星期二","星期三","星期四","星期五",
    "星期六","每天","一起","我们","你们","他们","她们","它们","自己",
    "大家","别人","什么","怎么","为什么","哪里","多少","怎么样","可以",
    "喜欢","知道","认识","觉得","希望","准备","开始","继续","结束",
    "回来","出去","进去","回家","上班","下班","起床","睡觉","吃饭",
    "喝水","做饭","买东西","打电话","发信息","看见","听见","告诉",
    "帮助","找到","明白","非常","特别","一点儿","一点","一下","不太",
    "没有","不是","不要","不能","不会","不想","就是","还是","还有",
    "他","她","它","我","你","您","这","那","哪","谁","是","有",
    "在","不","没","很","也","都","要","去","来","会","能","想",
    "了","吗","呢","吧","把","给","跟","对","从","到","和","就",
    "还","又","才","再","先","让","被","比","为","但","可","与",
    "每","各","最","更","多","少","上","下","中","里","外","着",
    "过","得","地","的","个","只","次"
  ];

  /* Phân đoạn theo thứ tự ưu tiên rõ ràng:
     1) từ vựng của cấp HSK đang học (cụm dài nhất trước),
     2) kho từ vựng toàn site,
     3) danh sách cụm từ dự phòng.
     Không trộn các kho trước khi so khớp để từ ngoài cấp không lấn từ HSK hiện tại. */
  const hskLexicon = [];
  const allLexicon = [];
  try {
    if(typeof currentList !== "undefined" && Array.isArray(currentList)){
      currentList.forEach(function(item){
        const h = String(item && item.h || "").trim();
        if(h.length >= 2 && h.length <= 6 && /^[\u3400-\u9fff]+$/.test(h)) hskLexicon.push(h);
      });
    }
    if(typeof words !== "undefined" && Array.isArray(words)){
      words.forEach(function(item){
        const h = String(item && item.h || "").trim();
        if(h.length >= 2 && h.length <= 6 && /^[\u3400-\u9fff]+$/.test(h)) allLexicon.push(h);
      });
    }
  } catch(e) {}
  const sortLongest = function(list){
    return Array.from(new Set(list)).sort(function(a,b){ return b.length - a.length; });
  };
  const hskWords = sortLongest(hskLexicon);
  const allWords = sortLongest(allLexicon);
  const fallbackWords = sortLongest(builtInPhrases);
  const punctuation = "，。！？；：、,.!?;:";
  const result = [];
  let i = 0;

  while(i < text.length){
    const ch = text.charAt(i);

    if(punctuation.indexOf(ch) >= 0){
      if(result.length){
        result[result.length - 1] += ch;
      } else {
        result.push(ch);
      }
      i++;
      continue;
    }

    let found = "";
    const remaining = text.slice(i);
    /* Chỉ dùng kho kế tiếp khi cấp HSK hiện tại không có từ khớp tại vị trí này. */
    for(const pool of [hskWords, allWords, fallbackWords]){
      for(let k = 0; k < pool.length; k++){
        const candidate = pool[k];
        if(remaining.startsWith(candidate)){
          found = candidate;
          break;
        }
      }
      if(found) break;
    }

    if(found){
      result.push(found);
      i += found.length;
    } else {
      /* Unknown vocabulary falls back to one character, not a whole sentence. */
      result.push(ch);
      i++;
    }
  }

  return result.filter(Boolean);
}
  

  /* =========================================================
     SHUFFLE
  ========================================================= */

  function shuffleArray(array){

    const result =
      [...array];

    for(
      let i = result.length - 1;
      i > 0;
      i--
    ){

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        result[i],
        result[j]
      ] =
      [
        result[j],
        result[i]
      ];

    }

    return result;

  }

/* =========================================================
   UNSCRAMBLE MODE
   - Xóa từng chữ đã chọn
   - Nghĩa tiếng Việt nằm ngay trên khu vực ghép
   - Giữ nguyên tokenizer / engine cũ
========================================================= */

function renderUnscramble(){

  stopAllMedia();

  currentMode =
    "unscramble";

  const item =
    getCurrent();

  if(!item){
    renderNormal();
    return;
  }

  const tokens =
    tokenizeChinese(
      item.example
    );

  let shuffled =
    shuffleArray(tokens);

  /*
    answerTokens không còn lưu chuỗi trực tiếp.

    Mỗi chữ được lưu:
    {
      word: "我",
      sourceIndex: 3
    }

    Nhờ vậy nếu có 2 chữ giống nhau,
    hệ thống vẫn biết chính xác chữ nào
    được trả lại kho.
  */
  let answerTokens =
    [];

  let solved =
    false;

  let revealed =
    false;


  function normalize(str){

    return String(str)
      .replace(/\s/g,"")
      .replace(
        /[，。！？；：、,.!?;:]/g,
        ""
      );

  }


  body.innerHTML = `

    <div class="thtt-g-card thtt-mode-only">

      <div class="thtt-unscramble">

        <div class="thtt-unscramble-title">
          🔀 Hãy sắp xếp thành câu đúng
        </div>


        <!-- =================================================
             NGHĨA TIẾNG VIỆT
             ================================================= -->

        <div style="
          margin:12px 0 10px;
          padding:12px 14px;
          border-radius:12px;
          background:#fff7ed;
          border:1px solid #fed7aa;
          color:#7c2d12;
          font-size:16px;
          font-weight:700;
          line-height:1.6;
          text-align:left;
        ">

          🇻🇳 Nghĩa câu:
          ${item.meaning}

        </div>


        <div class="thtt-unscramble-hint">

          Hãy tự suy nghĩ về trật tự câu.

          <br>

          💡 Muốn bỏ một chữ đã chọn?
          <b>Chạm trực tiếp vào chữ đó.</b>

        </div>


        <!-- =================================================
             KHU VỰC CÂU ĐANG GHÉP
             ================================================= -->

        <div
          id="thttAnswerBank"
          class="thtt-answer empty"
        >

          👆 Hãy chọn các chữ bên dưới

        </div>


        <!-- =================================================
             KHO CHỮ
             ================================================= -->

        <div
          id="thttWordBank"
          class="thtt-word-bank"
        >
        </div>


        <div
          id="thttUnscrambleResult"
        >
        </div>


        <div class="thtt-g-actions">


          <button
            class="thtt-g-btn secondary"
            data-action="shuffleWords"
          >

            🔀 Xáo trộn

          </button>


          <button
            class="thtt-g-btn secondary"
            data-action="clearUnscramble"
          >

            ↩ Xóa

          </button>


          <button
            class="thtt-g-btn secondary"
            data-action="showAnswer"
          >

            👁 Xem câu đúng

          </button>


        </div>

        <!-- Điều hướng câu đặt dưới cùng để thao tác thuận tiện. -->
        ${renderSentenceNavigator()}

      </div>

    </div>

  `;


  bindQuestionSelect();


  const wordBank =
    body.querySelector(
      "#thttWordBank"
    );

  const answerBank =
    body.querySelector(
      "#thttAnswerBank"
    );

  const result =
    body.querySelector(
      "#thttUnscrambleResult"
    );


  /* =========================================================
     HIỂN THỊ KHO CHỮ
  ========================================================= */

  function renderWords(){

    wordBank.innerHTML = "";


    shuffled.forEach(
      (word,index)=>{

        if(word === null){

          return;

        }


        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "thtt-word";


        button.textContent =
          word;


        button.onclick =
          function(){

            if(
              solved ||
              revealed
            ){

              return;

            }


            /*
              Lưu cả chữ + vị trí gốc
            */

            answerTokens.push({

              word:
                word,

              sourceIndex:
                index

            });


            /*
              Xóa chữ khỏi kho
            */

            shuffled[index] =
              null;


            renderAnswer();

            renderWords();

            checkAnswer();

          };


        wordBank.appendChild(
          button
        );

      }
    );

  }


  /* =========================================================
     HIỂN THỊ CÂU ĐANG GHÉP
     MỖI CHỮ LÀ 1 NÚT CÓ THỂ BẤM ĐỂ XÓA
  ========================================================= */

  function renderAnswer(){

    answerBank.innerHTML = "";


    if(!answerTokens.length){

      answerBank.classList.add(
        "empty"
      );

      answerBank.textContent =
        "👆 Hãy chọn các chữ bên dưới";

      return;

    }


    answerBank.classList.remove(
      "empty"
    );


    answerTokens.forEach(
      function(token,index){

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "thtt-answer-token";


        button.textContent =
          token.word;


        button.title =
          "Chạm để bỏ chữ này";


        /*
          Một chút style trực tiếp
          để chắc chắn nút từng chữ
          hiển thị đẹp dù CSS cũ
          không có class này.
        */

        button.style.cssText = `
          display:inline-flex;
          align-items:center;
          justify-content:center;
          min-width:38px;
          min-height:42px;
          margin:4px;
          padding:6px 10px;
          border:1px solid #fecaca;
          border-radius:10px;
          background:#fff;
          color:#991b1b;
          font-size:22px;
          font-weight:700;
          cursor:pointer;
          box-shadow:0 2px 6px rgba(0,0,0,.08);
          transition:.15s;
        `;


        /*
          Bấm vào đúng chữ nào
          thì chỉ xóa chữ đó.
        */

        button.onclick =
          function(){

            if(
              solved ||
              revealed
            ){

              return;

            }


            const removed =
              answerTokens.splice(
                index,
                1
              )[0];


            /*
              Trả chính xác chữ đó
              về đúng vị trí nguồn.
            */

            shuffled[
              removed.sourceIndex
            ] =
              removed.word;


            result.innerHTML =
              "";


            renderAnswer();

            renderWords();

            checkAnswer();

          };


        answerBank.appendChild(
          button
        );

      }
    );

  }


  /* =========================================================
     HIỂN THỊ ĐÚNG
  ========================================================= */

  function showSolved(){

    solved =
      true;


    result.innerHTML = `

      <div class="thtt-correct">

        <div>
          ✅ Chính xác!
        </div>


        <div class="thtt-correct-sentence">
          ${item.example}
        </div>


        <div style="
          font-weight:500;
          color:#555;
          margin-top:5px;
        ">

          ${item.pinyin}

        </div>


        <div style="
          margin-top:5px;
          color:#222;
        ">

          🇻🇳 ${item.meaning}

        </div>


        <button
          class="thtt-g-btn success"
          data-action="speaking"
          style="margin-top:13px;"
        >

          🎤 Đọc câu đúng

        </button>


        <button
          class="thtt-g-btn"
          data-action="nextQuestion"
          style="margin-top:9px;"
        >

          ➡️ Câu tiếp theo

        </button>

      </div>

    `;

  }


  /* =========================================================
     KIỂM TRA
  ========================================================= */

  function checkAnswer(){

    const built =
      answerTokens
        .map(
          function(token){

            return token.word;

          }
        )
        .join("");


    if(
      normalize(built) ===
      normalize(item.example)
    ){

      showSolved();

      speakChinese(
        item.example
      );

    }

  }


  /* =========================================================
     XÓA TOÀN BỘ
     ↩ Xóa
  ========================================================= */

  function clearAnswer(){

    stopAllMedia();


    answerTokens =
      [];


    solved =
      false;


    revealed =
      false;


    result.innerHTML =
      "";


    shuffled =
      shuffleArray(tokens);


    renderAnswer();

    renderWords();

  }


  /* =========================================================
     XÁO TRỘN
  ========================================================= */

  function shuffleWords(){

    stopAllMedia();


    answerTokens =
      [];


    solved =
      false;


    revealed =
      false;


    result.innerHTML =
      "";


    shuffled =
      shuffleArray(tokens);


    renderAnswer();

    renderWords();

  }


  /* =========================================================
     XEM CÂU ĐÚNG
  ========================================================= */

  function revealAnswer(){

    if(solved){

      return;

    }


    revealed =
      true;


    result.innerHTML = `

      <div class="thtt-correct">

        <div>
          👁 Câu đúng:
        </div>


        <div class="thtt-correct-sentence">
          ${item.example}
        </div>


        <div style="
          font-weight:500;
          color:#555;
          margin-top:5px;
        ">

          ${item.pinyin}

        </div>


        <div style="
          margin-top:5px;
          color:#222;
        ">

          🇻🇳 ${item.meaning}

        </div>


        <button
          class="thtt-g-btn success"
          data-action="speaking"
          style="margin-top:13px;"
        >

          🎤 Đọc câu đúng

        </button>


        <button
          class="thtt-g-btn"
          data-action="nextQuestion"
          style="margin-top:9px;"
        >

          ➡️ Câu tiếp theo

        </button>

      </div>

    `;

  }


  /* =========================================================
     KHỞI TẠO
  ========================================================= */

  renderWords();

  renderAnswer();


  body.querySelector(
    '[data-action="shuffleWords"]'
  ).onclick =
    shuffleWords;


  body.querySelector(
    '[data-action="clearUnscramble"]'
  ).onclick =
    clearAnswer;


  body.querySelector(
    '[data-action="showAnswer"]'
  ).onclick =
    revealAnswer;

}



  /* =========================================================
     SPEAKING MODE
  ========================================================= */

  function renderSpeaking(){

    stopAllMedia();

    currentMode =
      "speaking";

    const item =
      getCurrent();

    if(!item){

      renderNormal();
      return;

    }

    body.innerHTML = `

      ${renderSentenceNavigator()}

      <div class="thtt-g-card">

        <div class="thtt-speaking">

          <div style="
            font-size:26px;
            font-weight:700;
            color:#991b1b;
          ">

            🎤 Đọc thành tiếng

          </div>

          <div
            class="thtt-g-label"
            style="margin-top:22px;">

            Hãy đọc câu thật rõ

          </div>

          <div class="thtt-speaking-sentence">
            ${item.example}
          </div>

          <div class="thtt-g-pinyin">
            ${item.pinyin}
          </div>

          <button
            class="thtt-g-btn secondary"
            data-action="playModel"
            style="max-width:280px;">

            🔊 Nghe mẫu

          </button>

          <div
            id="thttSpeakingStatus"
            class="thtt-speaking-status">

            🎤 Nhấn nút bên dưới để bắt đầu ghi âm.

          </div>

          <button
            class="thtt-g-btn"
            id="thttRecordButton"
            data-action="record"
            style="max-width:320px;">

            🎤 Bắt đầu ghi âm

          </button>

          <div
            id="thttRecordingResult"
            style="margin-top:15px;">
          </div>

          <div
            class="thtt-g-info"
            style="
              text-align:left;
              margin-top:20px;
            ">

            <b>📌 Lưu ý:</b><br>

            Hiện tại hệ thống đã có ghi âm và
            phát lại giọng đọc của người học.

            Phần chấm điểm AI sẽ được nối vào
            bước tiếp theo.

          </div>

        </div>

      </div>

    `;


    bindQuestionSelect();


    const playModel =
      body.querySelector(
        '[data-action="playModel"]'
      );

    playModel.onclick =
      function(){

        speakChinese(
          item.example
        );

      };


    const recordButton =
      body.querySelector(
        "#thttRecordButton"
      );

    const status =
      body.querySelector(
        "#thttSpeakingStatus"
      );

    const recordingResult =
      body.querySelector(
        "#thttRecordingResult"
      );


    recordButton.onclick =
      async function(){

        if(
          recorder &&
          recorder.state === "recording"
        ){

          recorder.stop();

          return;

        }


        if(
          !navigator.mediaDevices ||
          !navigator.mediaDevices.getUserMedia
        ){

          status.textContent =
            "❌ Trình duyệt không hỗ trợ ghi âm.";

          return;

        }


        try{

          recordingStream =
            await navigator.mediaDevices
              .getUserMedia({
                audio:true
              });

          recordingChunks =
            [];

          recorder =
            new MediaRecorder(
              recordingStream
            );


          recorder.ondataavailable =
            function(event){

              if(
                event.data &&
                event.data.size > 0
              ){

                recordingChunks.push(
                  event.data
                );

              }

            };


          recorder.onstop =
            function(){

              const blob =
                new Blob(
                  recordingChunks,
                  {
                    type:"audio/webm"
                  }
                );

              const url =
                URL.createObjectURL(
                  blob
                );


              recordingResult.innerHTML = `

                <div class="thtt-g-info">

                  <b>🎧 Bản ghi của bạn:</b>

                  <audio
                    controls
                    src="${url}"
                    style="
                      width:100%;
                      margin-top:10px;
                    ">
                  </audio>

                  <button
                    class="thtt-g-btn"
                    id="thttRecordAgain"
                    style="margin-top:10px;">

                    🔄 Đọc lại

                  </button>

                </div>

              `;


              status.textContent =
                "✅ Đã ghi âm. Hãy nghe lại giọng của bạn.";

              recordButton.textContent =
                "🎤 Ghi âm lại";


              if(recordingStream){

                recordingStream
                  .getTracks()
                  .forEach(
                    track =>
                      track.stop()
                  );

                recordingStream =
                  null;

              }

            };


          recorder.start();

          status.textContent =
            "🔴 Đang ghi âm... Hãy đọc câu thật rõ!";

          recordButton.textContent =
            "⏹ Dừng ghi âm";

        }
        catch(error){

          console.error(error);

          status.textContent =
            "❌ Không thể truy cập micro. Hãy kiểm tra quyền microphone.";

        }

      };


    /* =======================================================
       ĐỌC LẠI
    ======================================================= */

    body.onclick =
      function(event){

        const button =
          event.target.closest(
            "#thttRecordAgain"
          );

        if(!button) return;

        recordButton.click();

      };

  }


  /* =========================================================
     PROGRESS
  ========================================================= */

  function updateProgress(){

    const data =
      getData();

    if(!data.length){

      progress.style.width =
        "0%";

      return;

    }

    const percent =
      (
        (currentIndex + 1)
        / data.length
      ) * 100;

    progress.style.width =
      Math.min(
        100,
        percent
      ) + "%";

  }


  /* =========================================================
     CHỌN HSK
  ========================================================= */

  function selectLevel(level){

    stopAllMedia();

    currentLevel =
      Number(level);

    currentIndex =
      0;

    currentMode =
      "normal";


    overlay
      .querySelectorAll(
        ".thtt-g-level"
      )
      .forEach(
        button => {

          button.classList.toggle(
            "active",
            Number(
              button.dataset.level
            ) === currentLevel
          );

        }
      );


    renderNormal();

  }


  /* =========================================================
     EVENT CHÍNH
  ========================================================= */

  overlay.addEventListener(
    "click",
    function(event){

      const actionButton =
        event.target.closest(
          "[data-action]"
        );

      if(!actionButton) return;

      const action =
        actionButton.dataset.action;


      /* -----------------------------------------------------
         NGHE
      ----------------------------------------------------- */

      if(action === "listen"){

        renderListen();

        return;

      }


      /* -----------------------------------------------------
         GHÉP CÂU
      ----------------------------------------------------- */

      if(action === "unscramble"){

        renderUnscramble();

        return;

      }


      /* -----------------------------------------------------
         ĐỌC
      ----------------------------------------------------- */

      if(action === "speaking"){

        renderSpeaking();

        return;

      }


      /* -----------------------------------------------------
         MẪU CÂU
      ----------------------------------------------------- */

      if(action === "normal"){

        renderNormal();

        return;

      }


      /* -----------------------------------------------------
         NGHE LẠI
      ----------------------------------------------------- */

      if(action === "play"){

        const item =
          getCurrent();

        if(item){

          speakChinese(
            item.example
          );

        }

        return;

      }


      /* -----------------------------------------------------
         NGHE MẪU
      ----------------------------------------------------- */

      if(action === "playModel"){

        const item =
          getCurrent();

        if(item){

          speakChinese(
            item.example
          );

        }

        return;

      }


      /* -----------------------------------------------------
         CÂU TRƯỚC
      ----------------------------------------------------- */

      if(action === "prevQuestion"){

        prevQuestion();

        return;

      }


      /* -----------------------------------------------------
         CÂU SAU
      ----------------------------------------------------- */

      if(action === "nextQuestion"){

        nextQuestion();

        return;

      }


      /* -----------------------------------------------------
         GHI ÂM
      ----------------------------------------------------- */

      if(action === "record"){

        const recordButton =
          body.querySelector(
            "#thttRecordButton"
          );

        if(recordButton){

          recordButton.click();

        }

        return;

      }

    }
  );


  /* =========================================================
     LEVEL EVENTS
  ========================================================= */

  overlay
    .querySelectorAll(
      ".thtt-g-level"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          function(){

            selectLevel(
              Number(
                this.dataset.level
              )
            );

          }
        );

      }
    );


  /* =========================================================
     MỞ GRAMMAR
  ========================================================= */

  launcher.onclick =
    function(){

      overlay.style.display =
        "block";

      currentMode =
        "normal";

      renderNormal();

    };


  /* =========================================================
     ĐÓNG GRAMMAR
  ========================================================= */

  overlay
    .querySelector(
      "#thttGrammarClose"
    )
    .onclick =
    function(){

      stopAllMedia();

      overlay.style.display =
        "none";

    };


  /* =========================================================
     CLICK RA NGOÀI
  ========================================================= */

  overlay.addEventListener(
    "click",
    function(event){

      if(
        event.target === overlay
      ){

        overlay
          .querySelector(
            "#thttGrammarClose"
          )
          .click();

      }

    }
  );


  /* =========================================================
     KHỞI ĐỘNG
  ========================================================= */

  

  /* =========================================================
     OTTER2 — MỞ TỪ NÚT HỌC TẬP → NGỮ PHÁP
  ========================================================= */

  function otter2OpenGrammar() {
    if (!window.currentUser) {
      alert(
        "🔒 Ngữ pháp yêu cầu tài khoản.\n\n" +
          "Vui lòng đăng ký hoặc đăng nhập để bắt đầu học."
      );
      return;
    }
    stopAllMedia();
    overlay.style.display = "block";
    currentMode = "normal";
    renderNormal();
  }

  window.otter2OpenGrammar = otter2OpenGrammar;

  var otter2Btn = document.getElementById("otter2FeatGrammar");
  if (otter2Btn) {
    otter2Btn.addEventListener("click", function (e) {
      e.preventDefault();
      otter2OpenGrammar();
    });
  }

  /* Keep original launcher hidden; still functional if shown */

  console.log(
    "🦦 Otter2 — Grammar Engine V3.1 loaded (from index1)."
  );

})();

/* ---- Access Guard V2 (from index1) ---- */
(function(){

  "use strict";


  /* =========================================================
     🔒 CHỐNG DÁN TRÙNG
  ========================================================= */

  if(window.__THTT_GRAMMAR_ACCESS_GUARD_V2__){

    return;

  }

  window.__THTT_GRAMMAR_ACCESS_GUARD_V2__ = true;


  /* =========================================================
     ⚙️ TRẠNG THÁI CHO PHÉP CLICK LẠI
     
     Khi Premium được xác nhận bằng async,
     patch sẽ cho phép đúng 1 lần click đi qua
     Grammar Engine gốc.
  ========================================================= */

  let allowNextLevelClick = false;

  let checkingPremium = false;


  /* =========================================================
     💎 KIỂM TRA PREMIUM
  ========================================================= */

  async function isGrammarPremium(){

  try{

    if(
      typeof hasPremiumAccess !==
      "function"
    ){

      console.error(
        "❌ Không tìm thấy hasPremiumAccess()"
      );

      return false;

    }


    return await hasPremiumAccess();


  }catch(error){

    console.error(
      "❌ Grammar Premium check error:",
      error
    );

    return false;

  }

}

  /* =========================================================
     🚪 1. CHẶN CỬA GRAMMAR KHI CHƯA ĐĂNG NHẬP
     
     Không cần async.
     
     Nếu có tài khoản → để nguyên onclick gốc chạy.
  ========================================================= */

  function installLauncherGuard(){

    const launcher =
      document.querySelector(
        "#thttGrammarLauncher"
      );

    if(!launcher){

      return false;

    }


    launcher.addEventListener(
      "click",
      function(event){

        if(!window.currentUser){

          event.preventDefault();

          event.stopImmediatePropagation();


          alert(
            "🔒 Ngữ pháp yêu cầu tài khoản.\n\n" +
            "Vui lòng đăng ký hoặc đăng nhập " +
            "để bắt đầu học."
          );


          return;

        }


        /*
         * Có tài khoản:
         * Không làm gì cả.
         *
         * Click sẽ tiếp tục xuống
         * launcher.onclick gốc của Grammar Engine.
         */

      },
      true
    );


    return true;

  }


  /* =========================================================
     🛡️ 2. CHẶN HSK2–6 NGAY Ở CAPTURE PHASE
     
     Đây là phần quan trọng nhất.
     
     Grammar Engine có:
     
       button.addEventListener("click", ...)
     
     nên ta chặn click ở CAPTURE PHASE
     trước khi listener nội bộ nhận được.
  ========================================================= */

  function installLevelGuard(){

    const overlay =
      document.querySelector(
        "#thttGrammarOverlay"
      );

    if(!overlay){

      return false;

    }


    overlay.addEventListener(
      "click",
      async function(event){

        const button =
          event.target.closest(
            ".thtt-g-level"
          );


        /*
         * Không phải nút HSK
         */

        if(!button){

          return;

        }


        const level =
          Number(
            button.dataset.level
          );


        /* =================================================
           🔓 HSK1
           
           Ai đã đăng nhập đều được học.
        ================================================= */

        if(level === 1){

          return;

        }


        /* =================================================
           ❌ CHƯA ĐĂNG NHẬP
        ================================================= */

        if(!window.currentUser){

          event.preventDefault();

          event.stopImmediatePropagation();


          alert(
            "🔒 Vui lòng đăng ký hoặc đăng nhập " +
            "tài khoản trước."
          );


          return;

        }


        /* =================================================
           🔄 CLICK ĐƯỢC PATCH CHO PHÉP ĐI QUA
           
           Đây là lần click thứ hai sau khi Premium
           đã được xác nhận.
        ================================================= */

        if(allowNextLevelClick){

          allowNextLevelClick =
            false;

          return;

        }


        /* =================================================
           🛑 CHẶN CLICK GỐC NGAY LẬP TỨC
           
           Vì kiểm tra Premium là async,
           phải chặn trước.
        ================================================= */

        event.preventDefault();

        event.stopImmediatePropagation();


        /* =================================================
           🔄 ĐANG KIỂM TRA
           
           Tránh người dùng bấm liên tục.
        ================================================= */

        if(checkingPremium){

          return;

        }


        checkingPremium = true;


        try{

          const paid =
            await isGrammarPremium();


          /* ===============================================
             💎 PREMIUM
          =============================================== */

          if(paid){

            /*
             * Cho phép đúng 1 click tiếp theo
             * chạy vào Grammar Engine gốc.
             */

            allowNextLevelClick =
              true;


            /*
             * Kích hoạt lại chính nút đó.
             */

            button.click();


            return;

          }


          /* ===============================================
             🆓 FREE
          =============================================== */

          alert(
            "🔒 HSK " +
            level +
            " Ngữ pháp là nội dung Premium.\n\n" +

            "🆓 Tài khoản Free hiện chỉ được " +
            "học miễn phí Ngữ pháp HSK1.\n\n" +

            "💎 Nâng cấp Premium để mở khóa " +
            "Ngữ pháp HSK1 → HSK9."
          );

        }finally{

          checkingPremium = false;

        }

      },
      true
    );


    return true;

  }


  /* =========================================================
     🚀 CÀI PATCH
  ========================================================= */

  function installGrammarGuard(){

    const launcherOK =
      installLauncherGuard();


    const levelOK =
      installLevelGuard();


    if(
      launcherOK &&
      levelOK
    ){

      console.log(
        "🔐 GRAMMAR ACCESS GUARD V2 — ACTIVE"
      );

      console.log(
        "❌ No account → BLOCK"
      );

      console.log(
        "🆓 Free → HSK1 ONLY"
      );

      console.log(
        "💎 Premium → HSK1–HSK6"
      );


      return true;

    }


    return false;

  }


  /* =========================================================
     ⏳ CHỜ GRAMMAR ENGINE NẾU CẦN
  ========================================================= */

  if(!installGrammarGuard()){

    let attempts = 0;


    const timer =
      setInterval(
        function(){

          attempts++;


          if(
            installGrammarGuard() ||
            attempts >= 30
          ){

            clearInterval(timer);

          }

        },
        250
      );

  }


})();
