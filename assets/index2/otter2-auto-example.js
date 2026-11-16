/* otter2-auto-example — extracted from index1 EA2 */
(function(){
if(window.__OTTER2_AUTO_EA2__) return; window.__OTTER2_AUTO_EA2__=true;


  "use strict";


  /* =========================================================
     🛡️ CHỐNG KHỞI TẠO TRÙNG
     ========================================================= */

  if(window.__TTC_EXAMPLE_AUTO_V2__){

    return;

  }

  window.__TTC_EXAMPLE_AUTO_V2__ = true;


  /* =========================================================
     🚀 START
     ========================================================= */

  function start(){

    const root =
      document.getElementById(
        "ttcExampleAutoV2"
      );

    if(!root){

      return;

    }


    const $ =
      id =>
        document.getElementById(id);


    const hskRow =
      $("ttcEA2HskRow");

    const hanzi =
      $("ttcEA2Hanzi");

    const pinyin =
      $("ttcEA2Pinyin");

    const meaning =
      $("ttcEA2Meaning");

    const counter =
      $("ttcEA2Counter");

    const status =
      $("ttcEA2Status");

    const delay =
      $("ttcEA2Delay");

    const delayValue =
      $("ttcEA2DelayValue");

    const prev =
      $("ttcEA2Prev");

    const next =
      $("ttcEA2Next");

    const auto =
      $("ttcEA2Auto");

    const loop =
      $("ttcEA2Loop");

    const direction =
      $("ttcEA2Direction");

    const zh =
      $("ttcEA2Zh");

    const vi =
      $("ttcEA2Vi");

    const reset =
      $("ttcEA2Reset");


    /* =======================================================
       💾 STORAGE RIÊNG
       ======================================================= */

    const KEY_HSK =
      "ttc_example_auto_v2_hsk";

    const KEY_LOOP =
      "ttc_example_auto_v2_loop";

    const KEY_DELAY =
      "ttc_example_auto_v2_delay";

    const KEY_DIRECTION =
      "ttc_example_auto_v2_direction";


    function indexKey(hsk){

      return (
        "ttc_example_auto_v2_index_" +
        hsk
      );

    }


    let currentHSK =
      Number(
        localStorage.getItem(KEY_HSK) || 1
      );


    if(
      !Number.isFinite(currentHSK) ||
      currentHSK < 1 ||
      currentHSK > 9
    ){

      currentHSK = 1;

    }


    let index =
      Number(
        localStorage.getItem(
          indexKey(currentHSK)
        ) || 0
      );


    let list = [];

    let timer = null;

    let running = false;

    let looping =
      localStorage.getItem(KEY_LOOP) === "1";

    let showMeaning = true;


    /*
     * 🆕 Hướng Auto Learning
     *
     * zh-vi = 中文 → Tiếng Việt
     * vi-zh = Tiếng Việt → 中文
     */

    let directionMode =
      localStorage.getItem(
        KEY_DIRECTION
      ) === "vi-zh"
        ? "vi-zh"
        : "zh-vi";


    let gap =
      Number(
        localStorage.getItem(KEY_DELAY) || 3
      );


    if(
      !Number.isFinite(gap) ||
      gap < 0 ||
      gap > 15
    ){

      gap = 3;

    }


    delay.value = gap;

    delayValue.textContent = gap;


    /* =======================================================
       📚 LẤY WORDS HIỆN TẠI
       ======================================================= */

    function getWords(){

      /* Luôn ưu tiên pack/ALL_DATA theo cấp đang chọn.
         Không tin window.words nếu nó chỉ còn HSK1 (bị module khác ghi đè). */
      var lv = Number(currentHSK) || 1;

      if(
        typeof window.otter2LoadWordsForHsk === "function"
      ){

        var via = window.otter2LoadWordsForHsk(lv);

        if(via && via.length){

          return via;

        }

      }

      if(
        window.OTTER2_HSK_PACKS &&
        window.OTTER2_HSK_PACKS[lv] &&
        Array.isArray(window.OTTER2_HSK_PACKS[lv].words) &&
        window.OTTER2_HSK_PACKS[lv].words.length
      ){

        return window.OTTER2_HSK_PACKS[lv].words;

      }

      if(
        window.OTTER2_HSK_ALL_DATA &&
        Array.isArray(window.OTTER2_HSK_ALL_DATA.words) &&
        window.OTTER2_HSK_ALL_DATA.words.length
      ){

        return window.OTTER2_HSK_ALL_DATA.words.filter(function(w){

          return Number(w.hsk) === lv;

        });

      }

      if(
        Array.isArray(window.words) &&
        window.words.length
      ){

        var fromWindow = window.words.filter(function(w){

          return Number(w.hsk) === lv;

        });

        if(fromWindow.length){

          return fromWindow;

        }

      }

      try{

        if(
          typeof words !== "undefined" &&
          Array.isArray(words) &&
          words.length
        ){

          return words.filter(function(w){

            return Number(w.hsk) === lv;

          });

        }

      }catch(e){}


      return [];

    }


    /* =======================================================
       🔒 PREMIUM
       ======================================================= */

    async function premiumOK(){

      try{

        if(
          typeof window.hasPremiumAccess ===
          "function"
        ){

          return !!(
            await window.hasPremiumAccess()
          );

        }

      }catch(e){}


      try{

        if(
          typeof hasPremiumAccess ===
          "function"
        ){

          return !!(
            await hasPremiumAccess()
          );

        }

      }catch(e){}


      return false;

    }


    /* =======================================================
       💾 SAVE
       ======================================================= */

    function save(){

      try{

        localStorage.setItem(
          KEY_HSK,
          String(currentHSK)
        );

        localStorage.setItem(
          indexKey(currentHSK),
          String(index)
        );

        localStorage.setItem(
          KEY_LOOP,
          looping ? "1" : "0"
        );

        localStorage.setItem(
          KEY_DELAY,
          String(gap)
        );

        localStorage.setItem(
          KEY_DIRECTION,
          directionMode
        );

      }catch(e){}

    }


    /* =======================================================
       📚 BUILD LIST
       ======================================================= */

    function buildList(){

      const source =
        getWords();


      list =
        source.filter(function(w){

          if(!w){

            return false;

          }


          const level =
            Number(w.hsk);


          const example =
            String(
              w.example || ""
            ).trim();


          return (
            level === currentHSK &&
            example.length > 0
          );

        });


      if(
        index < 0 ||
        index >= list.length
      ){

        index = 0;

      }

    }


    /* =======================================================
       🖥️ RENDER
       ======================================================= */

    function render(){

      if(!list.length){

        hanzi.textContent =
          "Đang chờ dữ liệu…";

        pinyin.textContent = "";

        meaning.textContent = "";

        counter.textContent =
          "0 / 0";

        return;

      }


      const w =
        list[index];


      hanzi.textContent =
        String(
          w.example || ""
        );


      pinyin.textContent =
        String(
          w.examplePinyin || ""
        );


      meaning.textContent =
        showMeaning
          ? String(
              w.exampleMeaning || ""
            )
          : "";


      counter.textContent =
        (index + 1) +
        " / " +
        list.length;


      save();

    }


    /* =======================================================
       🔄 CẬP NHẬT NÚT ĐẢO CHIỀU
       ======================================================= */

    function updateDirectionButton(){

      direction.textContent =
        directionMode === "vi-zh"
          ? "🔄 Chiều: 🇻🇳 Việt → 🇨🇳 Trung"
          : "🔄 Chiều: 🇨🇳 Trung → 🇻🇳 Việt";

    }


    /* =======================================================
       🔊 TÌM VOICE
       ======================================================= */

    function getVoice(language){

      if(
        !("speechSynthesis" in window)
      ){

        return null;

      }


      const voices =
        speechSynthesis.getVoices() || [];


      if(!voices.length){

        return null;

      }


      const wanted =
        language.toLowerCase();


      /* Ưu tiên chính xác */

      let voice =
        voices.find(function(v){

          return (
            String(v.lang || "")
              .toLowerCase() === wanted
          );

        });


      if(voice){

        return voice;

      }


      /* Sau đó tìm cùng ngôn ngữ */

      const base =
        wanted.split("-")[0];


      voice =
        voices.find(function(v){

          return String(v.lang || "")
            .toLowerCase()
            .split("-")[0] === base;

        });


      if(voice){

        return voice;

      }


      /* Cuối cùng tìm tên voice */

      if(base === "vi"){

        voice =
          voices.find(function(v){

            return /viet|vietnam|việt/i
              .test(
                String(v.name || "")
              );

          });

        if(voice){

          return voice;

        }

      }


      if(base === "zh"){

        voice =
          voices.find(function(v){
            var lang = String(v.lang || "").toLowerCase().replace(/_/g, "-");
            var name = String(v.name || "").toLowerCase();
            if (/zh-tw|zh-hk|zh-mo|taiwan|hong kong|cantonese|粵|粤/.test(lang + " " + name)) {
              return false;
            }
            return (
              lang.indexOf("zh-cn") === 0 ||
              lang.indexOf("zh-hans") === 0 ||
              /mandarin|simplified|普通话|microsoft\s+(huihui|yaoyao|kangkang|xiaoxiao)/i.test(name)
            );
          }) ||
          voices.find(function(v){
            return /chinese|mandarin|中文|普通话/i.test(String(v.name || ""));
          });

        if(voice){

          return voice;

        }

      }


      return null;

    }


    /* =======================================================
       🔊 ĐỌC
       ======================================================= */

    function speak(text,language,onEnd){

      if(
        !text ||
        !("speechSynthesis" in window)
      ){

        status.textContent =
          "⚠️ Trình duyệt không hỗ trợ đọc âm thanh.";

        if(typeof onEnd === "function"){
          onEnd();
        }

        return;

      }


      try{

        /* Dùng engine TTS cục bộ (có chọn voice) — không ủy quyền stub ttcSpeakText một ngôn ngữ. */
        speechSynthesis.cancel();
        speechSynthesis.resume();


        const utterance =
          new SpeechSynthesisUtterance(
            String(text)
          );


        utterance.lang =
          language;


        utterance.rate =
          language === "vi-VN"
            ? 0.95
            : (function(){
                var r = 0.9;
                try{
                  var saved = parseFloat(localStorage.getItem("ttsRate") || "0.9");
                  if(Number.isFinite(saved) && saved > 0) r = saved;
                }catch(e){}
                if(r < 0.1) r = 0.1;
                if(r > 2) r = 2;
                return r;
              })();


        const voice =
          getVoice(language);


        if(!voice && (language === "zh-CN" || language === "zh")){
          if(!window.__otter2ZhVoiceWarned){
            window.__otter2ZhVoiceWarned = true;
            alert("Trình duyệt/máy này không có giọng Mandarin (zh-CN). Không thể đọc tiếng Trung. Không thay bằng tiếng Việt.");
          }
          if(typeof onEnd === "function") onEnd();
          return;
        }

        if(voice){

          utterance.voice =
            voice;

        }


        let finished = false;

        const finish =
          function(){

            if(finished){
              return;
            }

            finished = true;

            if(typeof onEnd === "function"){
              onEnd();
            }

          };


        utterance.onstart =
          function(){

            status.textContent =
              "🔊 Đang phát âm…";

          };


        utterance.onend =
          function(){

            finish();

            if(!running){

              status.textContent = "";

            }

          };


        utterance.onerror =
          function(){

            status.textContent =
              language === "vi-VN"
                ? "⚠️ Không tìm thấy giọng Việt trên thiết bị."
                : "⚠️ Không phát được âm thanh.";

            finish();

          };


        speechSynthesis.speak(
          utterance
        );


      }catch(error){

        console.warn(
          "TTC Example Auto V2 TTS:",
          error
        );

        if(typeof onEnd === "function"){
          onEnd();
        }

      }

    }

    /* =======================================================
       🔊 CHỜ VOICE TẢI
       ======================================================= */

    if(
      "speechSynthesis" in window &&
      typeof speechSynthesis.addEventListener ===
      "function"
    ){

      speechSynthesis.addEventListener(
        "voiceschanged",
        function(){

          getVoice("vi-VN");

          getVoice("zh-CN");

        }
      );

    }


    /* =======================================================
       ⏹️ STOP
       ======================================================= */

    function stop(){

      running = false;


      if(timer){

        clearTimeout(timer);

        timer = null;

      }


      /*
       * Hủy luôn âm thanh đang phát.
       * Giúp đổi hướng / đổi HSK không bị
       * câu cũ tiếp tục đọc.
       */

      if(
        "speechSynthesis" in window
      ){

        try{

          speechSynthesis.cancel();

        }catch(e){}

      }


      auto.textContent =
        "▶️ Tự động";

    }


    /* =======================================================
       ⏭️ SANG CÂU TIẾP THEO
       ======================================================= */

    function advance(){

      if(!running){

        return;

      }


      if(
        index <
        list.length - 1
      ){

        index++;

      }else if(looping){

        index = 0;

      }else{

        stop();

        return;

      }


      render();


      startAutoSequence();

    }


    /* =======================================================
       🟢 AUTO — BẮT ĐẦU 1 CHU KỲ
       ======================================================= */

    function startAutoSequence(){

      if(
        !running ||
        !list.length
      ){

        return;

      }


      const w =
        list[index];


      const zhText =
        String(
          w.example || ""
        ).trim();


      const viText =
        String(
          w.exampleMeaning || ""
        ).trim();


      /*
       * ⏱️ THỜI GIAN RIÊNG CHO AUTO V2
       *
       * 3 giây: khoảng nghỉ giữa tiếng Trung ↔ tiếng Việt.
       * gap (0–15 giây): khoảng nghỉ SAU KHI ĐỌC XONG CẢ HAI
       * ngôn ngữ rồi mới chuyển sang câu tiếp theo.
       *
       * Quan trọng: timer chỉ bắt đầu SAU khi TTS phát onend,
       * nên câu dài cũng không bị cắt hoặc chuyển quá sớm.
       */

      const voiceGap = 3;

      /*
       * 🛡️ WHITE HAT — KHOẢNG NGHỈ CHÍNH XÁC
       *
       * Không chỉ tin vào một setTimeout duy nhất.
       * Trên một số thiết bị/trình duyệt, timer có thể bị gọi
       * sớm hoặc bị ảnh hưởng bởi các timer khác của trang.
       * Vì vậy luôn kiểm tra deadline thực tế bằng Date.now().
       *
       * Kết quả: nếu anh chọn 15 giây thì KHÔNG được phép
       * chuyển câu trước đủ 15 giây kể từ lúc bắt đầu nghỉ.
       */
      const waitThen =
        function(seconds, callback){

          if(timer){

            clearTimeout(timer);

            timer = null;

          }

          const duration =
            Math.max(0, (function(s){ s = Number(s); return Number.isFinite(s) ? s : 0; })(seconds)) * 1000;

          const deadline =
            Date.now() + duration;

          const check =
            function(){

              timer = null;

              if(!running){
                return;
              }

              const remaining =
                deadline - Date.now();

              if(remaining > 0){

                timer =
                  setTimeout(
                    check,
                    Math.min(remaining, 250)
                  );

                return;

              }

              callback();

            };

          check();

        };


      /* =====================================================
         🇨🇳 → 🇻🇳
         ===================================================== */

      if(
        directionMode === "zh-vi"
      ){

        if(!zhText){

          waitThen(
            gap,
            advance
          );

          return;

        }


        speak(
          zhText,
          "zh-CN",
          function(){

            if(!running){
              return;
            }

            waitThen(
              voiceGap,
              function(){

                if(!viText){

                  waitThen(
                    gap,
                    advance
                  );

                  return;

                }


                speak(
                  viText,
                  "vi-VN",
                  function(){

                    if(!running){
                      return;
                    }

                    waitThen(
                      gap,
                      advance
                    );

                  }
                );

              }
            );

          }
        );


        return;

      }


      /* =====================================================
         🇻🇳 → 🇨🇳
         ===================================================== */

      if(!viText){

        status.className =
          "ea2-status locked";

        status.textContent =
          "⚠️ Câu này chưa có nghĩa tiếng Việt — đang bỏ qua.";


        waitThen(
          gap,
          advance
        );

        return;

      }


      speak(
        viText,
        "vi-VN",
        function(){

          if(!running){
            return;
          }

          waitThen(
            voiceGap,
            function(){

              speak(
                zhText,
                "zh-CN",
                function(){

                  if(!running){
                    return;
                  }

                  waitThen(
                    gap,
                    advance
                  );

                }
              );

            }
          );

        }
      );

    }

    /* =======================================================
       ⏱️ AUTO SCHEDULE
       ======================================================= */

    function schedule(){

      /*
       * Giữ tên schedule() để cấu trúc V2
       * quen thuộc và dễ bảo trì.
       *
       * Thực tế toàn bộ chu kỳ được điều khiển
       * bởi startAutoSequence().
       */

      if(
        !running ||
        !list.length
      ){

        return;

      }


      startAutoSequence();

    }


    /* =======================================================
       ⬅️ / ➡️
       ======================================================= */

    function move(step){

      stop();

      if(!list.length){

        return;

      }


      index += step;


      if(index < 0){

        index = 0;

      }


      if(
        index >= list.length
      ){

        if(looping){

          index = 0;

        }else{

          index =
            list.length - 1;

        }

      }


      render();

    }


    /* =======================================================
       🟢 HSK BUTTONS
       ======================================================= */

    function renderHSKButtons(){

      hskRow.innerHTML = "";

      const label = document.createElement("label");
      label.className = "ea2-hsk-label";
      label.textContent = "📚 Chọn cấp độ HSK:";
      label.htmlFor = "ttcEA2HskSelect";

      const select = document.createElement("select");
      select.className = "ea2-hsk-select";
      select.id = "ttcEA2HskSelect";
      select.setAttribute("aria-label", "Chọn cấp độ HSK cho câu ví dụ");

      for(let n = 1; n <= 9; n++){
        const option = document.createElement("option");
        option.value = String(n);
        option.textContent = "HSK " + n;
        if(n === currentHSK){ option.selected = true; }
        select.appendChild(option);
      }

      select.addEventListener("change", async function(){
        const n = Number(select.value);

        /* Phase 2I: chỉ HSK trong availableLevels (hiện HSK1). */
        if(
          typeof window.otter2AssertHskAvailable === "function" &&
          !window.otter2AssertHskAvailable(n)
        ){
          select.value = String(currentHSK);
          return;
        }

        /* Free: HSK 1–2; HSK 3–9 cần Premium (cùng chính sách lộ trình). */
        if(n >= 3){
          const ok = await premiumOK();
          if(!ok){
            select.value = String(currentHSK);
            status.className = "ea2-status locked";
            status.textContent = "🔒 HSK " + n + " dành cho Premium.";
            return;
          }
        }

        stop();
        currentHSK = n;
        try{ localStorage.setItem(KEY_HSK, String(currentHSK)); }catch(e){}
        index = Number(localStorage.getItem(indexKey(n)) || 0);
        /* Đồng bộ window.words theo cấp mới — tránh giữ list HSK cũ. */
        var packForLevel = getWords();
        if(packForLevel.length){
          window.words = packForLevel.slice();
          window.currentHSK = n;
        }
        buildList();
        render();
        status.className = "ea2-status";
        status.textContent =
          list.length
            ? ""
            : "⚠️ Chưa có câu ví dụ trong dữ liệu gốc cho HSK " + n + ".";
      });

      hskRow.appendChild(label);
      hskRow.appendChild(select);
    }

    /* =======================================================
       ⬅️ TRƯỚC
       ======================================================= */

    prev.addEventListener(
      "click",
      function(){

        move(-1);

      }
    );


    /* =======================================================
       ➡️ SAU
       ======================================================= */

    next.addEventListener(
      "click",
      function(){

        move(1);

      }
    );


    /* =======================================================
       ▶️ AUTO
       ======================================================= */

    auto.addEventListener(
      "click",
      function(){

        if(!list.length){

          return;

        }


        if(running){

          stop();

          return;

        }


        running = true;


        auto.textContent =
          "⏸️ Dừng tự động";


        schedule();

      }
    );


    /* =======================================================
       🔁 LOOP
       ======================================================= */

    loop.addEventListener(
      "click",
      function(){

        looping =
          !looping;


        loop.textContent =
          looping
            ? "🔁 Lặp: Bật"
            : "🔁 Lặp: Tắt";


        save();

      }
    );


    /* =======================================================
       🔄 ĐẢO CHIỀU AUTO
       ======================================================= */

    direction.addEventListener(
      "click",
      function(){

        /*
         * Nếu đang Auto thì dừng trước.
         * Tránh câu Việt cũ / Trung cũ
         * bị chồng với hướng mới.
         */

        stop();


        directionMode =
          directionMode === "zh-vi"
            ? "vi-zh"
            : "zh-vi";


        updateDirectionButton();

        save();


        status.className =
          "ea2-status";


        status.textContent =
          directionMode === "vi-zh"
            ? "🔄 Đã chuyển: 🇻🇳 Việt → 🇨🇳 Trung"
            : "🔄 Đã chuyển: 🇨🇳 Trung → 🇻🇳 Việt";

      }
    );


    /* =======================================================
       🇨🇳 CHINESE
       ======================================================= */

    zh.addEventListener(
      "click",
      function(){

        if(!list.length){

          return;

        }


        speak(
          String(
            list[index].example || ""
          ),
          "zh-CN"
        );

      }
    );


    /* =======================================================
       🇻🇳 VIETNAMESE
       ======================================================= */

    vi.addEventListener(
      "click",
      function(){

        if(!list.length){

          return;

        }


        const text =
          String(
            list[index].exampleMeaning || ""
          ).trim();


        if(!text){

          status.className =
            "ea2-status locked";


          status.textContent =
            "⚠️ Câu này chưa có nghĩa tiếng Việt.";

          return;

        }


        showMeaning = true;

        render();


        /*
         * Đọc tiếng Việt.
         * Nếu voice chưa sẵn sàng, đợi một chút
         * rồi thử lại.
         */

        let voice =
          getVoice("vi-VN");


        if(voice){

          speak(
            text,
            "vi-VN"
          );

          return;

        }


        status.className =
          "ea2-status";


        status.textContent =
          "🔊 Đang tìm giọng Việt…";


        setTimeout(
          function(){

            speak(
              text,
              "vi-VN"
            );

          },
          350
        );

      }
    );


    /* =======================================================
       🔄 RESET
       ======================================================= */

    reset.addEventListener(
      "click",
      function(){

        stop();

        index = 0;

        render();

        status.className =
          "ea2-status";

        status.textContent =
          "Đã học lại từ đầu 🔄";

      }
    );


    /* =======================================================
       ⏱️ DELAY
       ======================================================= */

    delay.addEventListener(
      "input",
      function(){

        gap =
          Number(
            delay.value
          );


        delayValue.textContent =
          gap;


        save();


        /*
         * Chỉ lưu khoảng nghỉ (giây). Không restart TTS,
         * không clear timer giữa Trung↔Việt — lần nghỉ sau dùng gap mới.
         */

      }
    );


    /* =======================================================
       🔁 LOOP TEXT
       ======================================================= */

    loop.textContent =
      looping
        ? "🔁 Lặp: Bật"
        : "🔁 Lặp: Tắt";


    /* =======================================================
       🔄 DIRECTION TEXT
       ======================================================= */

    updateDirectionButton();


    /* =======================================================
       📚 INIT
       ======================================================= */

    renderHSKButtons();

    buildList();

    render();


    /* =======================================================
       ⏳ NẾU WORDS CHƯA LOAD KỊP
       thử lại mà KHÔNG đụng engine chính
       ======================================================= */

    if(!list.length){

      let attempts = 0;


      const waitForWords =
        setInterval(
          function(){

            attempts++;


            buildList();


            if(list.length){

              clearInterval(
                waitForWords
              );


              render();

              status.className =
                "ea2-status";

              status.textContent = "";

              return;

            }


            if(attempts >= 20){

              clearInterval(
                waitForWords
              );


              status.className =
                "ea2-status";

              status.textContent =
                "⚠️ Chưa tìm thấy câu ví dụ.";

            }

          },
          500
        );

    }


    /* =======================================================
       📍 ĐƯA MODULE VÀO KHU VỰC NỘI DUNG CHÍNH
       ======================================================= */

    function moveToMainArea(){

      /*
       * Tìm các khu vực thường nằm ở trung tâm
       * của giao diện TTC.
       *
       * Không xóa hoặc sửa nội dung nào.
       * Chỉ thay đổi vị trí của chính section này.
       */

      const candidates = [

        document.querySelector(
          "main"
        ),

        document.querySelector(
          "#mainContent"
        ),

        document.querySelector(
          ".main-content"
        ),

        document.querySelector(
          ".content"
        ),

        document.querySelector(
          "#content"
        ),

        document.querySelector(
          ".container"
        )

      ];


      let target = null;


      for(
        const item of candidates
      ){

        if(
          item &&
          item !== root &&
          !root.contains(item)
        ){

          target = item;

          break;

        }

      }


      if(!target){

        /*
         * Nếu trang không có container chuẩn,
         * giữ nguyên vị trí.
         */

        return;

      }


      /*
       * Chèn ở giữa phần nội dung hiện tại.
       */

      const children =
        Array.from(
          target.children
        );


      const usable =
        children.filter(
          child =>
            child !== root
        );


      if(
        usable.length >= 2
      ){

        const middle =
          Math.ceil(
            usable.length / 2
          );


        target.insertBefore(
          root,
          usable[middle]
        );

      }else{

        target.appendChild(
          root
        );

      }

    }


    /*
     * Đợi DOM ổn định một chút rồi mới di chuyển.
     * Không tác động vào engine hiện tại.
     */

    setTimeout(
      moveToMainArea,
      100
    );


  }


  /* =========================================================
     🚀 KHỞI ĐỘNG
     ========================================================= */

  if(
    document.readyState ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      start,
      {once:true}
    );

  }else{

    start();

  }

})();
