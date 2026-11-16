/* from index1 reflex */

(function(){
  "use strict";

  if(window.__TTC_LISTEN_MEANING_V1__) return;
  window.__TTC_LISTEN_MEANING_V1__=true;

  const KEY="ttc_listen_meaning_v1";
  const LEVELS=[1,2,3,4,5,6,7,8,9];

  let level=1;
  let order=[];
  let cursor=0;
  let leftSelected=null;
  let rightSelected=null;
  let matched=new Set();
  let wrongTimer=null;

  let overlay;
  let boardLeft;
  let boardRight;
  let statusBox;
  let progressBar;

  function getWords(){
    if(Array.isArray(window.words)) return window.words;
    if(Array.isArray(window.WORDS)) return window.WORDS;
    if(Array.isArray(window.vocabulary)) return window.vocabulary;
    return [];
  }

  function esc(v){
    return String(v??"").replace(
      /[&<>"']/g,
      s=>({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#39;"
      }[s])
    );
  }

  function shuffle(a){
    const x=a.slice();

    for(let i=x.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [x[i],x[j]]=[x[j],x[i]];
    }

    return x;
  }

  function save(){
    try{
      const all=JSON.parse(
        localStorage.getItem(KEY)||"{}"
      );

      all[level]={
        order,
        cursor,
        matched:Array.from(matched),
        source:"ttc-gushi-v2"
      };

      localStorage.setItem(
        KEY,
        JSON.stringify(all)
      );
    }catch(e){
      console.warn("TTC LISTEN save",e);
    }
  }

  function load(lv){
    const source=getWords();

    const pool=source
      .map((w,i)=>({w,i}))
      .filter(x=>Number(x.w?.hsk)===lv);

    const valid=new Set(
      pool.map(x=>x.i)
    );

    let saved=null;

    try{
      saved=(
        JSON.parse(
          localStorage.getItem(KEY)||"{}"
        )[lv]||null
      );
    }catch(e){}

    if(
      saved &&
      Array.isArray(saved.order) &&
      saved.order.length===pool.length &&
      saved.order.every(i=>valid.has(i))
    ){
      order=saved.order.slice();

      cursor=Math.min(
        Math.max(Number(saved.cursor)||0,0),
        order.length
      );

      matched=new Set(
        Array.isArray(saved.matched)
          ? saved.matched.filter(i=>valid.has(i))
          : []
      );

      return;
    }

    order=shuffle(
      pool.map(x=>x.i)
    );

    cursor=0;
    matched=new Set();

    save();
  }

  function batch(){
    return order
      .slice(cursor,cursor+10)
      .map(i=>({
        w:getWords()[i],
        i
      }))
      .filter(x=>x.w);
  }

  function setStatus(text,kind){
    statusBox.textContent=text;

    statusBox.style.color=
      kind==="ok"
        ? "#087443"
        : kind==="bad"
          ? "#b91c1c"
          : "#64748b";
  }

  function renderLevels(){
    overlay
      .querySelectorAll(".ttc-listen-level")
      .forEach(b=>{
        b.classList.toggle(
          "active",
          Number(b.dataset.level)===level
        );
      });
  }

  function render(){

    renderLevels();

    leftSelected=null;
    rightSelected=null;

    const data=batch();

    if(!data.length){

      boardLeft.innerHTML="";
      boardRight.innerHTML="";

      progressBar.style.width="100%";

      boardLeft.innerHTML=`
        <div class="ttc-listen-finish">
          <div class="ttc-listen-finish-big">
            🎉 CHÚC MỪNG ANH! 🎉
          </div>

          <div class="ttc-listen-finish-text">
            Anh đã hoàn thành toàn bộ HSK ${level}!<br>
            🔊 Phản xạ đoán nghĩa — HSK ${level}
          </div>
        </div>
      `;

      boardRight.innerHTML="";

      setStatus(
        `🏆 Đã hoàn thành toàn bộ HSK ${level}!`,
        "ok"
      );

      return;
    }

    const left=shuffle(data);
    const right=shuffle(data);

    /*
      Bên trái:
      chỉ có số + nút nghe.
      Tuyệt đối không hiện Hán tự/Pinyin.
    */
    boardLeft.innerHTML=left
      .filter(x=>!matched.has(x.i))
      .map(x=>`
        <button
          type="button"
          class="ttc-listen-item ttc-listen-audio"
          data-side="left"
          data-index="${x.i}"
          aria-label="Nghe từ số ${x.i}"
        >
          <span class="ttc-listen-number">
            ${left.indexOf(x)+1}
          </span>

          <span class="ttc-listen-play">
            🔊 ▶️
          </span>
        </button>
      `)
      .join("");

    /*
      Bên phải:
      chỉ hiện nghĩa tiếng Việt.
    */
    boardRight.innerHTML=right
      .filter(x=>!matched.has(x.i))
      .map(x=>`
        <button
          type="button"
          class="ttc-listen-item ttc-listen-meaning"
          data-side="right"
          data-index="${x.i}"
        >
          ${esc(x.w.m||"")}
        </button>
      `)
      .join("");

    const done=Math.min(
      cursor,
      order.length
    );

    progressBar.style.width=
      (
        order.length
          ? Math.round(done/order.length*100)
          : 0
      )+"%";

    setStatus(
      `HSK ${level} · ${Math.min(cursor+10,order.length)} / ${order.length} · Lượt này ${matched.size}/${data.length}`,
      "normal"
    );
  }

  /*
    Phát âm:
    Không thay đổi hệ thống voice hiện tại.
    Chỉ gọi SpeechSynthesis riêng khi người học bấm 🔊.
  */
  function speakChinese(text){

    if(!text) return;

    try{
      window.speechSynthesis.cancel();

      const u=
        new SpeechSynthesisUtterance(
          String(text)
        );

      u.lang="zh-CN";
      u.rate=.9;
      u.pitch=1;

      window.speechSynthesis.speak(u);

    }catch(e){
      console.warn(
        "TTC LISTEN audio error",
        e
      );
    }
  }

  function select(btn){

    if(
      btn.classList.contains(
        "ttc-listen-vanish"
      )
    ) return;

    const side=btn.dataset.side;
    const idx=Number(
      btn.dataset.index
    );

    /*
      Bấm ô nghe:
      phát âm từ tương ứng.
    */
    if(side==="left"){

      overlay
        .querySelectorAll(
          '[data-side="left"].selected'
        )
        .forEach(b=>
          b.classList.remove("selected")
        );

      leftSelected=idx;

      btn.classList.add("selected");

      const word=getWords()[idx];

      /*
        Chỉ dùng Hán tự nội bộ để phát âm.
        KHÔNG render ra màn hình.
      */
      speakChinese(
        word?.h || ""
      );

    }else{

      overlay
        .querySelectorAll(
          '[data-side="right"].selected'
        )
        .forEach(b=>
          b.classList.remove("selected")
        );

      rightSelected=idx;

      btn.classList.add("selected");
    }

    if(
      leftSelected!==null &&
      rightSelected!==null
    ){
      checkPair();
    }
  }

  function checkPair(){

    const a=leftSelected;
    const b=rightSelected;

    const left=overlay.querySelector(
      `[data-side="left"][data-index="${a}"]`
    );

    const right=overlay.querySelector(
      `[data-side="right"][data-index="${b}"]`
    );

    if(a===b){

      matched.add(a);

      left?.classList.remove("selected");
      right?.classList.remove("selected");

      left?.classList.add(
        "ttc-listen-vanish"
      );

      right?.classList.add(
        "ttc-listen-vanish"
      );

      leftSelected=null;
      rightSelected=null;

      save();

      setStatus(
        "✅ Chính xác! Nghe tiếp nhé 🥰",
        "ok"
      );

      setTimeout(()=>{

        left?.remove();
        right?.remove();

        if(
          matched.size===
          batch().length
        ){

          cursor+=batch().length;

          matched=new Set();

          save();

          if(
            cursor>=order.length
          ){

            progressBar.style.width="100%";

            boardLeft.innerHTML=`
              <div class="ttc-listen-finish">
                <div class="ttc-listen-finish-big">
                  🎉 CHÚC MỪNG ANH! 🎉
                </div>

                <div class="ttc-listen-finish-text">
                  Anh đã hoàn thành toàn bộ HSK ${level}!<br><br>
                  🔊 PHẢN XẠ ĐOÁN NGHĨA
                </div>
              </div>
            `;

            boardRight.innerHTML="";

            setStatus(
              `🏆 Hoàn thành HSK ${level}!`,
              "ok"
            );

          }else{

            render();

          }

        }else{

          const total=batch().length;

          setStatus(
            `HSK ${level} · Lượt này ${matched.size}/${total}`,
            "ok"
          );
        }

      },120);

    }else{

      left?.classList.add("wrong");
      right?.classList.add("wrong");

      setStatus(
        "❌ Chưa đúng — nghe và chọn lại nhé 🥰",
        "bad"
      );

      clearTimeout(wrongTimer);

      wrongTimer=setTimeout(()=>{

        left?.classList.remove(
          "wrong",
          "selected"
        );

        right?.classList.remove(
          "wrong",
          "selected"
        );

        leftSelected=null;
        rightSelected=null;

      },450);
    }
  }

  function replay(){

    const source=getWords();

    order=shuffle(
      Array.from(
        {length:source.length},
        (_,i)=>i
      ).filter(
        i=>Number(source[i]?.hsk)===level
      )
    );

    cursor=0;
    matched=new Set();

    save();
    render();

    setStatus(
      `🔄 HSK ${level} đã được xáo trộn lại!`,
      "ok"
    );
  }

  function changeLevel(lv){

    lv=Number(lv);

    if(
      !LEVELS.includes(lv)
    ) return;

    if(
      typeof window.otter2AssertHskAvailable === "function" &&
      !window.otter2AssertHskAvailable(lv)
    ) return;

    /*
      Giữ đúng nguyên tắc Premium của hệ thống:
      HSK3 trở lên kiểm tra Premium nếu engine hiện tại có hàm.
    */
    if(
      lv>=3 &&
      typeof hasPremiumAccess==="function"
    ){

      Promise.resolve(
        hasPremiumAccess()
      ).then(ok=>{

        if(!ok){

          alert(
            `💎 HSK ${lv} của Phản xạ đoán nghĩa là nội dung Premium.\n\nVui lòng đăng ký Premium để tiếp tục học.`
          );

          return;
        }

        level=lv;
        load(level);
        render();

      });

      return;
    }

    level=lv;

    load(level);
    render();
  }

  function open(){

    if(!window.currentUser){

      alert(
        "🔒 Vui lòng đăng ký hoặc đăng nhập tài khoản trước.\n\nPhản xạ đoán nghĩa là khu học tập dành cho thành viên."
      );

      return;
    }

    overlay.classList.add(
      "ttc-listen-open"
    );

    load(level);
    render();
  }

  function close(){

    overlay.classList.remove(
      "ttc-listen-open"
    );

    try{
      window.speechSynthesis.cancel();
    }catch(e){}
  }

  function build(){

    /*
      Tạo nút cạnh các chức năng hiện tại (hoặc tái sử dụng nút index2).
    */
    let btn=document.getElementById("ttcListenLauncher");
    if(!btn){
      btn=document.createElement("button");
      btn.id="ttcListenLauncher";
      btn.type="button";
      btn.textContent="🔊 Phản xạ đoán nghĩa";
      btn.className="active";
      const action=
        document.querySelector(
          "#otter2PracticeFrame .ttc-action-buttons, .ttc-action-buttons"
        );
      if(action){
        action.appendChild(btn);
      }else{
        document.body.appendChild(btn);
      }
    }

    /*
      Overlay riêng.
    */
    overlay=
      document.createElement("div");

    overlay.id="ttcListenOverlay";

    overlay.innerHTML=`

      <div id="ttcListenApp">

        <div class="ttc-listen-head">

          <div class="ttc-listen-head-top">

            <div class="ttc-listen-title">
              🔊 PHẢN XẠ ĐOÁN NGHĨA
            </div>

            <button
              type="button"
              class="ttc-listen-close"
              aria-label="Đóng"
            >
              ×
            </button>

          </div>

          <div class="ttc-listen-levels">

            ${LEVELS.map(x=>`
              <button
                type="button"
                class="ttc-listen-level ${x===1?"active":""}"
                data-level="${x}"
              >
                HSK ${x}
              </button>
            `).join("")}

          </div>

          <div class="ttc-listen-progress">
            <div></div>
          </div>

          <div class="ttc-listen-status"></div>

        </div>

        <div class="ttc-listen-board">

          <div class="ttc-listen-column">

            <h3>
              🔊 NGHE
            </h3>

            <div
              id="ttcListenLeft"
              class="ttc-listen-list"
            ></div>

          </div>

          <div class="ttc-listen-column">

            <h3>
              🇻🇳 NGHĨA
            </h3>

            <div
              id="ttcListenRight"
              class="ttc-listen-list"
            ></div>

          </div>

        </div>

        <div class="ttc-listen-footer">

          <button
            type="button"
            class="ttc-listen-replay"
          >
            🔄 Xáo trộn lại
          </button>

          <button
            type="button"
            class="ttc-listen-close ttc-listen-next"
          >
            ✓ Đóng
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(
      overlay
    );

    boardLeft=
      overlay.querySelector(
        "#ttcListenLeft"
      );

    boardRight=
      overlay.querySelector(
        "#ttcListenRight"
      );

    statusBox=
      overlay.querySelector(
        ".ttc-listen-status"
      );

    progressBar=
      overlay.querySelector(
        ".ttc-listen-progress>div"
      );

    btn.addEventListener(
      "click",
      open
    );

    overlay
      .querySelectorAll(
        ".ttc-listen-close"
      )
      .forEach(x=>
        x.addEventListener(
          "click",
          close
        )
      );

    overlay
      .querySelector(
        ".ttc-listen-replay"
      )
      .addEventListener(
        "click",
        replay
      );

    overlay
      .querySelectorAll(
        ".ttc-listen-level"
      )
      .forEach(x=>
        x.addEventListener(
          "click",
          ()=>{
            changeLevel(
              x.dataset.level
            );
          }
        )
      );

    overlay.addEventListener(
      "click",
      e=>{

        const b=
          e.target.closest(
            ".ttc-listen-item"
          );

        if(b){
          select(b);
        }

        if(e.target===overlay){
          close();
        }

      }
    );

    document.addEventListener(
      "keydown",
      e=>{

        if(
          e.key==="Escape" &&
          overlay.classList.contains(
            "ttc-listen-open"
          )
        ){
          close();
        }

      }
    );
  }

  if(
    document.readyState==="loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      build
    );

  }else{

    build();

  }

})();

