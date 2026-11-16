/* from index1 typing/listening launcher */

(function(){
'use strict';
const launcher=document.getElementById('ttcListeningLauncher');
const section=document.getElementById('ttcListeningSection');
if(!launcher||!section)return;
const $=id=>document.getElementById(id);
const levels=$('ttcListenLevels'),nav=$('ttcListenNav'),navTitle=$('ttcListenNavTitle'),list=$('ttcListenList'),detail=$('ttcListenDetail');
const editor=$('ttcListenEditor'),mirror=$('ttcListenMirror'),field=$('ttcListenField'),answer=$('ttcListenAnswer'),status=$('ttcListenStatus');
const engine=document.getElementById('ttc-reading-engine-v3');
let bank={};
try{
 // Dùng đúng kho dữ liệu đã được Khu luyện đọc HSK khởi tạo; tránh regex cũ
 // bị gãy khi engine có thêm dòng window.__ttcReadingBank=bank.
 if(window.__ttcReadingBank && typeof window.__ttcReadingBank==='object'){
  bank=window.__ttcReadingBank;
 }else{
  const source=engine&&engine.textContent;
  const match=source&&source.match(/const bank=(\{[\s\S]*?\});(?:window\.__ttcReadingBank=bank;)?const launcher=/);
  if(!match)throw new Error('Không tìm thấy kho bài đọc trong engine hiện có.');
  bank=JSON.parse(match[1]);
 }
}catch(err){
 levels.innerHTML='<p>Không đọc được thư viện bài đọc hiện có. Khu luyện nghe đã dừng để tránh dùng sai dữ liệu.</p>';
 console.error('[TTC Listening] Không thể nạp nguồn bài đọc:',err);
 return;
}
let currentLevel=0,currentArticle=null,voices=[],selectedVoice='',sessionId=0,liveCheckEnabled=false;
let pairedSegments=[],segmentDrafts=[],wholeDraft='';
const speechAvailable=()=>typeof window!=='undefined'&&'speechSynthesis'in window;
function stopAudio(){sessionId++;if(speechAvailable())window.speechSynthesis.cancel();status.textContent='Đã dừng phát âm thanh.';}
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function splitParts(text){return String(text||'').match(/[^。！？!?；;.]+[。！？!?；;.]?/g)?.map(x=>x.trim()).filter(Boolean)||[String(text||'')];}
function groupParts(parts,target){const groups=Array.from({length:target},()=>[]);if(!parts.length)return groups.map(()=> '');parts.forEach((part,j)=>groups[Math.min(target-1,Math.floor(j*target/parts.length))].push(part));return groups.map(g=>g.join(''));}
function alignParts(parts,target){if(parts.length===target)return parts;if(!parts.length)return Array.from({length:target},()=> '');return groupParts(parts,target);}
function makeSegments(article){
 const zh=splitParts(article.zh),py=splitParts(article.py||''),vi=splitParts(article.vi||'');
 const target=Math.max(1,Math.min(zh.length||1,vi.length||zh.length||1));
 const z=alignParts(zh,target),p=alignParts(py,target),v=alignParts(vi,target);
 return z.map((text,i)=>({zh:text,py:p[i]||'',vi:v[i]||'',index:i}));
}
function view(which){
 levels.hidden=which!=='levels';list.hidden=which!=='list';detail.hidden=which!=='detail';nav.hidden=which==='levels';
}
function renderLevels(){
 levels.replaceChildren();
 for(let n=1;n<=9;n++){
  const b=document.createElement('button');b.type='button';b.className='ttc-listen-level';
  b.innerHTML='HSK '+n+'<small>Danh sách bài đọc làm bài nghe</small>';
  b.addEventListener('click',()=>renderList(n));
  levels.appendChild(b);
 }
}
function renderList(n){
 if(typeof window.otter2AssertHskAvailable==='function' && !window.otter2AssertHskAvailable(n)) return;
 stopAudio();currentLevel=n;navTitle.textContent='Danh sách bài đọc · HSK '+n;list.replaceChildren();
 const articles=bank[String(n)]||[];
 articles.forEach((a,i)=>{
  const b=document.createElement('button');b.type='button';b.className='ttc-listen-item';
  b.innerHTML='<strong>Bài đọc số '+(i+1)+'</strong><span> · '+escapeHtml(a.title||'')+'</span>';
  b.addEventListener('click',async()=>{
   if(Number(n)>=3){
    let allowed=false;
    try{allowed=typeof checkPremiumAccess==='function'?!!(await checkPremiumAccess(Number(n))):false;}catch(e){}
    if(!allowed){if(typeof checkPremiumAccess!=='function')alert('🔒 Bài nghe HSK '+n+' cần quyền truy cập Premium.');return;}
   }
   openArticle(a,i);
  });
  list.appendChild(b);
 });
 if(!articles.length)list.innerHTML='<p>Chưa có bài đọc ở cấp độ này.</p>';
 view('list');}
function openArticle(article,index){
 stopAudio();currentArticle=article;liveCheckEnabled=false;pairedSegments=makeSegments(article);
 const savedRate=parseFloat(localStorage.getItem('ttcReadingRate')||localStorage.getItem('ttsRate')||'0.65');const rateSelect=$('ttcListenRate');rateSelect.value=Array.from(rateSelect.options).some(o=>Number(o.value)===savedRate)?String(savedRate):'0.65';
 $('ttcListenCheck').setAttribute('aria-pressed','false');$('ttcListenCheck').textContent='🧩 CHECK VAR: TẮT';
 $('ttcListenArticleTitle').textContent='HSK '+article.level+' · Bài đọc số '+(index+1)+' · '+(article.title||'');
 editor.value='';paintMirror();field.classList.remove('ttc-checking');
 status.textContent='Bài đọc đã mở. Nhìn mẫu phía trên và chép vào khung.';
 updateAnswer();view('detail');}
function updateAnswer(){
 if(!currentArticle)return;
 answer.replaceChildren();
 pairedSegments.forEach((item)=>{
  if(!item)return;
  const block=document.createElement('div');block.className='ttc-listen-answer-pair';
  const zh=document.createElement('div');zh.className='zh';zh.textContent=item.zh||'';block.appendChild(zh);
  if($('ttcListenShowPinyin').checked){const py=document.createElement('div');py.className='py';py.textContent=item.py||'';block.appendChild(py);}
  if($('ttcListenShowVi').checked){const vi=document.createElement('div');vi.className='vi';vi.textContent=item.vi||'';block.appendChild(vi);}
  answer.appendChild(block);
 });
}
function speakAll(){
 if(!currentArticle||!speechAvailable()){status.textContent='Trình duyệt này không hỗ trợ đọc tiếng Trung. Hãy thử Chrome hoặc Edge.';return;}
 window.speechSynthesis.cancel();const thisSession=++sessionId;
 const parts=pairedSegments.map(s=>s.zh).filter(Boolean);
 if(!parts.length)return;
 let i=0;
 function next(){
  if(thisSession!==sessionId)return;
  if(i>=parts.length){status.textContent='Đã đọc xong cả bài.';return;}
  const utterance=new SpeechSynthesisUtterance(parts[i]);utterance.lang='zh-CN';utterance.rate=Number($('ttcListenRate').value)||0.65;
  const readingVoice=document.getElementById('ttcReadingVoice');const sharedVoice=document.getElementById('whiteHatChineseSelectV6');const savedVoice=localStorage.getItem('ttsVoiceName')||(readingVoice&&readingVoice.value)||(sharedVoice&&sharedVoice.value)||'';
  const voice=voices.find(v=>v.name===selectedVoice)||voices.find(v=>v.name===savedVoice)||voices.find(v=>/^zh-CN$/i.test(v.lang))||voices.find(v=>/^zh(-|_)/i.test(v.lang));
  if(!voice){status.textContent='Không tìm thấy giọng tiếng Trung trên thiết bị.';return;}
  utterance.voice=voice;utterance.lang=voice.lang||'zh-CN';
  const n=i+1;
  utterance.onstart=()=>{if(thisSession===sessionId)status.textContent='Đang đọc cả bài, đoạn '+n+'/'+parts.length+'…';};
  utterance.onend=()=>{if(thisSession!==sessionId)return;i++;next();};
  utterance.onerror=ev=>{if(thisSession===sessionId&&ev.error!=='canceled'&&ev.error!=='interrupted')status.textContent='Không phát được giọng đọc.';};
  window.speechSynthesis.speak(utterance);
 }
 next();
}
function escapeCheck(ch){return String(ch).replace(/[&<>]/g,c=>c==='&'?'&amp;':c==='<'?'&lt;':'&gt;');}
function paintMirror(){
 if(!liveCheckEnabled||!currentArticle){mirror.innerHTML='';field.classList.remove('ttc-checking');return;}
 field.classList.add('ttc-checking');
 const expected=Array.from(String(currentArticle.zh||'').replace(/\s/g,''));
 let at=0,html='';
 for(const ch of editor.value){
  if(/\s/.test(ch)){html+=escapeCheck(ch);continue;}
  const want=expected[at++];
  if(want==null||want!==ch) html+='<span class="bad" title="'+(want?'Đúng là '+escapeCheck(want):'Thừa chữ')+'">'+escapeCheck(ch)+'</span>';
  else html+='<span class="ok">'+escapeCheck(ch)+'</span>';
 }
 mirror.innerHTML=html;mirror.scrollTop=editor.scrollTop;
}
launcher.addEventListener('click',()=>{const open=!section.classList.contains('ttc-listening-open');section.classList.toggle('ttc-listening-open',open);section.style.display=open?'block':'none';launcher.setAttribute('aria-expanded',String(open));if(!open)stopAudio();});
$('ttcListenHelpBtn').addEventListener('click',()=>{$('ttcListenHelp').hidden=!$('ttcListenHelp').hidden;});
$('ttcListenBackLevels').addEventListener('click',()=>{stopAudio();currentArticle=null;view('levels');});
$('ttcListenWhole').addEventListener('click',()=>{if(!currentArticle)return;speakAll();});
$('ttcListenStop').addEventListener('click',stopAudio);
$('ttcListenCheck').addEventListener('click',()=>{if(!currentArticle)return;liveCheckEnabled=!liveCheckEnabled;$('ttcListenCheck').setAttribute('aria-pressed',String(liveCheckEnabled));$('ttcListenCheck').textContent=liveCheckEnabled?'🧩 CHECK VAR: BẬT':'🧩 CHECK VAR: TẮT';paintMirror();status.textContent=liveCheckEnabled?'CHECK VAR đang soi chính khung gõ. Đúng màu xanh, sai màu đỏ.':'Đã tắt CHECK VAR.';});
$('ttcListenClear').addEventListener('click',()=>{if(!editor.value.trim())return;if(!confirm('Xóa toàn bộ nội dung đã gõ trong bài này?'))return;editor.value='';paintMirror();status.textContent='Đã xóa nội dung đang gõ.';});
editor.addEventListener('input',paintMirror);
editor.addEventListener('scroll',()=>{mirror.scrollTop=editor.scrollTop;});
$('ttcListenShowPinyin').addEventListener('change',updateAnswer);$('ttcListenShowVi').addEventListener('change',updateAnswer);
$('ttcListenRate').addEventListener('change',()=>{const rate=$('ttcListenRate').value;try{localStorage.setItem('ttcReadingRate',rate);localStorage.setItem('ttsRate',rate);}catch(e){}const shared=document.getElementById('whiteHatRateSelectV6');if(shared)shared.value=rate;status.textContent='Tốc độ mới sẽ áp dụng cho lần phát tiếp theo và được đồng bộ với Khu luyện đọc HSK.';});
$('ttcListenVoice').addEventListener('change',()=>{selectedVoice=$('ttcListenVoice').value;try{if(selectedVoice)localStorage.setItem('ttsVoiceName',selectedVoice);}catch(e){}const shared=document.getElementById('whiteHatChineseSelectV6');if(shared&&selectedVoice){shared.value=selectedVoice;shared.dispatchEvent(new Event('change',{bubbles:true}));}status.textContent='Đã chọn giọng đọc cho lần phát tiếp theo.';});
function populateVoices(){
 if(!speechAvailable())return;
 voices=window.speechSynthesis.getVoices().filter(v=>/^zh([_-]|$)/i.test(v.lang)||/chinese|mandarin|中文|普通话|中国/i.test(v.name));
 const select=$('ttcListenVoice');if(!select)return;const readingVoice=document.getElementById('ttcReadingVoice');const sharedVoice=document.getElementById('whiteHatChineseSelectV6');const previous=selectedVoice||localStorage.getItem('ttsVoiceName')||(readingVoice&&readingVoice.value)||(sharedVoice&&sharedVoice.value)||select.value;select.replaceChildren();
 const auto=document.createElement('option');auto.value='';auto.textContent='Dùng giọng đã chọn ở Khu luyện đọc HSK';select.appendChild(auto);
 voices.forEach(v=>{const o=document.createElement('option');o.value=v.name;o.textContent=v.name+' · '+v.lang;select.appendChild(o);});
 if(voices.some(v=>v.name===previous))select.value=previous;else select.value='';
 selectedVoice=select.value;
}
if(speechAvailable()){populateVoices();window.speechSynthesis.addEventListener?.('voiceschanged',populateVoices);}
renderLevels();view('levels');
})();

