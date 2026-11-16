/* from index1 match V1 */

(function(){
  "use strict";
  if(window.__TTC_MATCH_V1__) return;
  window.__TTC_MATCH_V1__=true;

  const KEY="ttc_match_v1";
  const LEVELS=[1,2,3,4,5,6,7,8,9]; 
 let level=1, order=[], cursor=0, leftSelected=null, rightSelected=null, matched=new Set(), wrongTimer=null;
  let overlay,boardLeft,boardRight,statusBox,progressBar;

  function esc(v){
    return String(v??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[s]));
  }
  function shuffle(a){
    const x=a.slice();
    for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}
    return x;
  }
  function save(){
    try{
      const all=JSON.parse(localStorage.getItem(KEY)||"{}");
      all[level]={order,cursor,matched:Array.from(matched)};
      localStorage.setItem(KEY,JSON.stringify(all));
    }catch(e){console.warn("TTC MATCH save",e)}
  }
  function load(lv){
    const pool=Array.isArray(window.words)?window.words.map((w,i)=>({w,i})).filter(x=>Number(x.w?.hsk)===lv):[];
    const valid=new Set(pool.map(x=>x.i));
    let saved=null;
    try{saved=(JSON.parse(localStorage.getItem(KEY)||"{}")[lv]||null)}catch(e){}
    if(saved&&Array.isArray(saved.order)&&saved.order.length===pool.length&&saved.order.every(i=>valid.has(i))){
      order=saved.order.slice(); cursor=Math.min(Math.max(Number(saved.cursor)||0,0),order.length); matched=new Set(Array.isArray(saved.matched)?saved.matched.filter(i=>valid.has(i)):[]);
      return;
    }
    order=shuffle(pool.map(x=>x.i));cursor=0;matched=new Set();save();
  }
  function pool(){return Array.isArray(window.words)?window.words:[]}
  function batch(){return order.slice(cursor,cursor+10).map(i=>({w:pool()[i],i})).filter(x=>x.w)}
  function open(){
    if(!window.currentUser){alert("🔒 Vui lòng đăng ký hoặc đăng nhập tài khoản trước.\n\nNối từ đúng là khu học tập dành cho thành viên.");return}
    overlay.classList.add("ttc-match-open");
    load(level);render();
  }
  function close(){overlay.classList.remove("ttc-match-open");}
  function setStatus(text,kind){statusBox.textContent=text;statusBox.style.color=kind==="ok"?"#087443":kind==="bad"?"#b91c1c":"#64748b"}
  /* index1 gọi scheduleMatchAutoFit() nhưng không định nghĩa — no-op để tránh ReferenceError. */
  function scheduleMatchAutoFit(){}
  function renderLevels(){overlay.querySelectorAll(".ttc-match-level").forEach(b=>b.classList.toggle("active",Number(b.dataset.level)===level))}
  function render(){
    renderLevels();leftSelected=null;rightSelected=null;
    const data=batch();
    if(!data.length){
      boardLeft.innerHTML="";boardRight.innerHTML="";progressBar.style.width="100%";
      statusBox.textContent=`🎉 Đã hoàn thành toàn bộ HSK ${level}!`;
      return;
    }
    const left=shuffle(data);
    const right=shuffle(data);
    boardLeft.innerHTML=left.map(x=>`<button class="ttc-match-item" data-side="left" data-index="${x.i}">${esc(x.w.h||"")}</button>`).join("");
    boardRight.innerHTML=right.map(x=>`<button class="ttc-match-item ttc-match-meaning" data-side="right" data-index="${x.i}">${esc(x.w.m||"")}</button>`).join("");
    const done=Math.min(cursor,order.length), total=order.length;
    progressBar.style.width=(total?Math.round(done/total*100):0)+"%";
    setStatus(`HSK ${level} · ${Math.min(cursor+10,order.length)} / ${order.length} · Lượt này ${matched.size}/10`);
    data.forEach(x=>{
      if(matched.has(x.i)){
        const a=overlay.querySelector(`[data-side="left"][data-index="${x.i}"]`),b=overlay.querySelector(`[data-side="right"][data-index="${x.i}"]`);
        if(a)a.classList.add("matched"); if(b)b.classList.add("matched");
      }
    });
    scheduleMatchAutoFit();

  }

  function select(btn){
    if(btn.classList.contains("matched")) return;
    const side=btn.dataset.side, idx=Number(btn.dataset.index);
    if(side==="left"){
      overlay.querySelectorAll('[data-side="left"].selected').forEach(b=>b.classList.remove("selected"));
      leftSelected=idx;btn.classList.add("selected");
    }else{
      overlay.querySelectorAll('[data-side="right"].selected').forEach(b=>b.classList.remove("selected"));
      rightSelected=idx;btn.classList.add("selected");
    }
    if(leftSelected!==null&&rightSelected!==null) checkPair();
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

    left?.classList.add("matched","ttc-match-vanish");
    right?.classList.add("matched","ttc-match-vanish");

    leftSelected=null;
    rightSelected=null;

    save();

    setStatus(
      "✅ Chính xác! Ghép tiếp nhé 🥰",
      "ok"
    );

    /*
      Hai ô biến mất gần như ngay lập tức.
      Sau đó mới kiểm tra hoàn thành lượt.
    */
    setTimeout(()=>{

      left?.remove();
      right?.remove();
          
      if(matched.size===batch().length){

        cursor+=batch().length;

        matched=new Set();

        save();

        if(cursor>=order.length){

          progressBar.style.width="100%";

          boardLeft.innerHTML="";
          boardRight.innerHTML="";

          setStatus(
            `🎉 Anh đã hoàn thành HSK ${level}!`,
            "ok"
          );

        }else{

          render();

        }

      }else{

        const total=batch().length;

        const done=matched.size;

        setStatus(
          `HSK ${level} · Lượt này ${done}/${total}`,
          "ok"
        );

      }

    },120);

  }else{

    left?.classList.add("wrong");
    right?.classList.add("wrong");

    setStatus(
      "❌ Chưa đúng — chọn lại nhé 🥰",
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
    order=shuffle(Array.from({length:pool().length},(_,i)=>i).filter(i=>Number(pool()[i]?.hsk)===level));cursor=0;matched=new Set();save();render();setStatus(`🔄 HSK ${level} đã được xáo trộn lại!`,`ok`);
  }
  function changeLevel(lv){
    lv=Number(lv);if(!LEVELS.includes(lv))return;
    if(typeof window.otter2AssertHskAvailable==="function" && !window.otter2AssertHskAvailable(lv)) return;
    if(lv>=3 && typeof hasPremiumAccess==="function"){
      hasPremiumAccess().then(ok=>{if(!ok){alert(`💎 HSK ${lv} của Nối từ đúng là nội dung Premium.\n\nVui lòng đăng ký Premium để tiếp tục học.`);return}level=lv;load(level);render()});return;
    }
    level=lv;load(level);render();
  }

  function build(){
    let btn=document.getElementById("ttcMatchLauncher");
    if(!btn){
      btn=document.createElement("button");btn.id="ttcMatchLauncher";btn.type="button";btn.textContent="🧩 Nối từ đúng";btn.className="active";
      const action=document.querySelector("#otter2PracticeFrame .ttc-action-buttons, .ttc-action-buttons");
      if(action)action.appendChild(btn);else document.body.appendChild(btn);
    }
    overlay=document.createElement("div");overlay.id="ttcMatchOverlay";overlay.innerHTML=`
      <div id="ttcMatchApp">
        <div class="ttc-match-head"><div class="ttc-match-head-top"><div class="ttc-match-title">🧩 NỐI TỪ ĐÚNG</div><button type="button" class="ttc-match-close" aria-label="Đóng">×</button></div>
          <div class="ttc-match-controls">${LEVELS.map(x=>`<button type="button" class="ttc-match-level ${x===1?"active":""}" data-level="${x}">HSK ${x}</button>`).join("")}</div>
          <div class="ttc-match-progress"><div></div></div><div class="ttc-match-status"></div>
        </div>
        <div class="ttc-match-board"><div class="ttc-match-column"><h3>🀄 TỪ HÁN</h3><div id="ttcMatchLeft" class="ttc-match-list"></div></div><div class="ttc-match-column"><h3>🇻🇳 NGHĨA</h3><div id="ttcMatchRight" class="ttc-match-list"></div></div></div>
        <div class="ttc-match-footer"><button type="button" class="ttc-match-replay">🔄 Chơi lại · Xáo trộn</button><button type="button" class="ttc-match-close ttc-match-next">✓ Đóng</button></div>
      </div>`;
    document.body.appendChild(overlay);
    boardLeft=overlay.querySelector("#ttcMatchLeft");boardRight=overlay.querySelector("#ttcMatchRight");statusBox=overlay.querySelector(".ttc-match-status");progressBar=overlay.querySelector(".ttc-match-progress>div");
    btn.addEventListener("click",open);overlay.querySelectorAll(".ttc-match-close").forEach(x=>x.addEventListener("click",close));overlay.querySelector(".ttc-match-replay").addEventListener("click",replay);
    overlay.querySelectorAll(".ttc-match-level").forEach(x=>x.addEventListener("click",()=>changeLevel(x.dataset.level)));
    overlay.addEventListener("click",e=>{const b=e.target.closest(".ttc-match-item");if(b)select(b);});
    overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&overlay.classList.contains("ttc-match-open"))close()});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
})();

