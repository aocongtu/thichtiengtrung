/* Otter2 Chat Online — real engine from index1 ttcChatV1 */
(function otter2ChatInject(){
  if (document.getElementById('ttcChatV1')) return;
  var wrap = document.createElement('div');
  wrap.id = 'otter2ChatMount';
  wrap.innerHTML = "<div id=\"ttcChatV1\" aria-hidden=\"true\">\n\n  <div class=\"ttc-chat-shell\">\n\n    <div class=\"ttc-chat-head\">\n\n      <div class=\"ttc-chat-title\">\n\n        <div class=\"ttc-chat-title-icon\">💬</div>\n\n        <div class=\"ttc-chat-title-main\">\n          <strong>CHAT ONLINE</strong>\n          <div id=\"ttcChatRoomName\" class=\"ttc-chat-room-name\">\n            🌏 Phòng chung\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"ttc-chat-head-actions\">\n        <button id=\"ttcChatShareRoom\"\n                class=\"ttc-chat-btn\"\n                type=\"button\">\n          🔗 Mời\n        </button>\n\n        <button id=\"ttcChatFullscreen\"\n                class=\"ttc-chat-btn\"\n                type=\"button\"\n                aria-label=\"Thu nhỏ khung chat\"\n                title=\"Thu nhỏ khung chat\">\n          ⛶\n        </button>\n\n        <button id=\"ttcChatClose\"\n                class=\"ttc-chat-btn ttc-chat-close\"\n                type=\"button\">\n          ×\n        </button>\n      </div>\n\n    </div>\n\n\n    <div class=\"ttc-chat-body\">\n\n      <!-- ROOMS -->\n\n      <aside class=\"ttc-chat-rooms\">\n\n        <div class=\"ttc-chat-room-label\">\n          PHÒNG CHAT\n        </div>\n\n        <div id=\"ttcChatRoomList\"></div>\n\n      </aside>\n\n\n      <!-- MAIN -->\n\n      <main class=\"ttc-chat-main\">\n\n        <div class=\"ttc-chat-online\">\n\n          <div class=\"ttc-chat-online-left\">\n            <span class=\"ttc-online-dot\"></span>\n            <span id=\"ttcChatOnlineText\">\n              Đang kết nối...\n            </span>\n          </div>\n\n          <span id=\"ttcChatRoomLinkText\"></span>\n\n        </div>\n\n\n        <div id=\"ttcChatMessages\"\n             class=\"ttc-chat-messages\">\n\n          <div class=\"ttc-chat-empty\">\n            Đang tải phòng chat... 💬\n          </div>\n\n        </div>\n\n\n        <button id=\"ttcChatNewMessages\"\n                class=\"ttc-chat-new\"\n                type=\"button\">\n          ↓ Tin nhắn mới\n        </button>\n\n\n        <!-- COMPOSER -->\n\n        <div class=\"ttc-chat-composer-wrap\">\n\n          <div id=\"ttcChatReplying\"\n               class=\"ttc-chat-replying\">\n\n            <span id=\"ttcChatReplyText\">\n              Đang trả lời...\n            </span>\n\n            <button id=\"ttcChatCancelReply\"\n                    type=\"button\">\n              ×\n            </button>\n\n          </div>\n\n\n          <div id=\"ttcChatPreview\" class=\"ttc-chat-preview\" hidden></div>\n          <div id=\"ttcChatGifPanel\" class=\"ttc-chat-gif\" hidden>\n            <div class=\"ttc-chat-gif-bar\">\n              <input id=\"ttcChatGifQuery\" type=\"text\" placeholder=\"Gõ từ rồi nhấn Tìm, ví dụ mèo, cười\" maxlength=\"40\" autocomplete=\"off\">\n              <button id=\"ttcChatGifSearch\" type=\"button\">Tìm</button>\n              <button id=\"ttcChatGifLocal\" type=\"button\">Trong máy</button>\n            </div>\n            <div id=\"ttcChatGifResults\" class=\"ttc-chat-gif-results\"></div>\n          </div>\n\n          <div class=\"ttc-chat-composer\">\n\n            <input id=\"ttcChatFile\"\n                   class=\"ttc-chat-drop\"\n                   type=\"file\"\n                   accept=\"image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.ppt,.pptx\">\n            <input id=\"ttcChatGifFile\" type=\"file\" accept=\"image/gif,.gif\" hidden>\n\n            <button id=\"ttcChatGif\"\n                    class=\"ttc-chat-icon-btn\"\n                    type=\"button\"\n                    title=\"Gửi GIF\">\n              GIF\n            </button>\n            <button id=\"ttcChatAttach\"\n                    class=\"ttc-chat-icon-btn\"\n                    type=\"button\"\n                    title=\"Ảnh hoặc tài liệu\">\n              🖼️\n            </button>\n<button id=\"ttcChatAudio\"\n        class=\"ttc-chat-icon-btn\"\n        type=\"button\"\n        title=\"Ghi âm\">\n  🎙️\n</button>\n\n\n<textarea id=\"ttcChatInput\"\n            \n                      class=\"ttc-chat-input\"\n                      rows=\"1\"\n                      maxlength=\"3000\"\n                      placeholder=\"Nhập tin nhắn...\"></textarea>\n\n            <button id=\"ttcChatSend\"\n                    class=\"ttc-chat-icon-btn ttc-chat-send\"\n                    type=\"button\"\n                    title=\"Gửi\">\n              ➤\n            </button>\n\n          </div>\n\n          <div id=\"ttcChatStatus\"\n               class=\"ttc-chat-status\">\n          </div>\n\n        </div>\n\n      </main>\n\n    </div>\n\n  </div>\n\n</div>";
  var node = wrap.firstElementChild;
  if (node) document.body.appendChild(node);
})();


(function(){

"use strict";

/* ============================================================
   TTC CHAT V1
   ============================================================ */

const TTC_CHAT = {

  rooms: [],

  currentRoom: null,

  user: null,

  messages: [],

  pendingFile: null,

  pendingGif: null,

  loadingOlder: false,

  noMoreOlder: false,

  nameCache: {},

  reactionCache: {},

  realtimeChannel: null,

  presenceChannel: null,

  presenceUsers: {},

  replyTo: null,

  mediaRecorder: null,

  audioChunks: [],

  recording: false,

  unread: 0,

  initialized: false,

  client: null

};


/* ============================================================
   SUPABASE CLIENT DETECTION
   ============================================================ */

function findSupabaseClient() {

  const candidates = [
    window.supabase,
    window.supabaseClient,
    window.sb,
    window.supabaseDb,
    window.ttcSupabase,
    window.ttcSupabaseClient
  ];

  for (const client of candidates) {

    if (
      client &&
      typeof client.from === "function" &&
      client.auth &&
      typeof client.auth.getUser === "function"
    ) {
      return client;
    }

  }

  return null;
}

/* ============================================================
   ELEMENTS
   ============================================================ */

const $ = id => document.getElementById(id);

const chat = $("ttcChatV1");
const roomList = $("ttcChatRoomList");
const messagesBox = $("ttcChatMessages");
const input = $("ttcChatInput");
const statusBox = $("ttcChatStatus");
const roomName = $("ttcChatRoomName");
const onlineText = $("ttcChatOnlineText");
const replyingBox = $("ttcChatReplying");
const replyText = $("ttcChatReplyText");
const newMessagesBtn = $("ttcChatNewMessages");
const fullscreenBtn = $("ttcChatFullscreen");

/* ============================================================
   STATUS
   ============================================================ */

function setStatus(text="", type=""){

  statusBox.textContent = text;

  statusBox.className =
    "ttc-chat-status" +
    (type ? " " + type : "");

}


/* ============================================================
   ESCAPE HTML
   ============================================================ */

function escapeHTML(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


/* ============================================================
   DATE
   ============================================================ */

function formatTime(date){

  try{

    return new Intl.DateTimeFormat(
      "ja-JP",
      {
        hour:"2-digit",
        minute:"2-digit"
      }
    ).format(new Date(date));

  }catch{

    return "";

  }

}


/* ============================================================
   DISPLAY NAME
   ============================================================ */

async function getDisplayName(uid){

  if(TTC_CHAT.nameCache[uid]){
    return TTC_CHAT.nameCache[uid];
  }

  if(uid === TTC_CHAT.user?.id){

    const metadata =
      TTC_CHAT.user.user_metadata || {};

    const name =
      metadata.display_name ||
      metadata.full_name ||
      metadata.name ||
      (TTC_CHAT.user.email
        ? TTC_CHAT.user.email.split("@")[0]
        : "Thành viên");

    TTC_CHAT.nameCache[uid] = name;

    return name;
  }

  try{

    const {data,error} =
      await TTC_CHAT.client.rpc(
        "get_chat_display_name",
        {uid}
      );

    if(!error && data){

      TTC_CHAT.nameCache[uid] =
        String(data);

      return String(data);

    }

  }catch(e){}

  TTC_CHAT.nameCache[uid] = "Thành viên";

  return "Thành viên";

}


/* ============================================================
   OPEN / CLOSE
   ============================================================ */

async function openChat(){

  if(chat.classList.contains("ttc-chat-open")){
    return;
  }

  /* Đóng Auto Learning fullscreen nếu còn sót trên body khi mở chat */
  try{
    if(typeof window.otter2AutoExitFullscreen === "function"){
      window.otter2AutoExitFullscreen();
    }
    document.body.classList.remove("otter2-auto-fs-lock");
    ["ttcExampleAutoV2","autoLearning"].forEach(function(id){
      var el = document.getElementById(id);
      if(el && el.classList.contains("otter2-auto-fs-open")){
        el.classList.remove("otter2-auto-fs-open");
        el.style.display = "none";
      }
    });
  }catch(e){}

  chat.classList.add("ttc-chat-open");
  chat.setAttribute("aria-hidden","false");
  document.body.classList.add("ttc-chat-open");
  setChatFullscreen(true);

  if(TTC_CHAT.initialized && TTC_CHAT.currentRoom && TTC_CHAT.messages.length){
    hideChatNotification();
    scrollToBottom();
    return;
  }

hideChatNotification();

  TTC_CHAT.client = findSupabaseClient();

  if(!TTC_CHAT.client){

    closeChat();

    alert(
      "Chat V1 chưa tìm thấy kết nối Supabase hiện tại của website."
    );

    return;

  }

  try{

    const {data,error} =
      await TTC_CHAT.client.auth.getUser();

    if(error || !data?.user){

      closeChat();

      alert("Anh cần đăng nhập trước khi vào Chat Online nhé 🥰");

      return;

    }

    TTC_CHAT.user = data.user;

  }catch(e){

    closeChat();

    alert("Không thể kiểm tra tài khoản đăng nhập.");

    return;

  }

  await initializeChat();
  scrollToBottom();

}


function closeChat(){

  chat.classList.remove("ttc-chat-open");
  chat.setAttribute("aria-hidden","true");
  document.body.classList.remove("ttc-chat-open");
  syncNavChatBadge();

}


/* ============================================================
   INIT
   ============================================================ */

async function initializeChat(){

  if(TTC_CHAT.initialized){

    if(!TTC_CHAT.currentRoom && TTC_CHAT.rooms.length){
      await selectRoom(TTC_CHAT.rooms[0]);
    }

    return;

  }

  TTC_CHAT.initialized = true;

  setStatus("Đang kết nối...");

  try{

    const {data,error} =
      await TTC_CHAT.client
        .from("community_rooms")
        .select("*")
        .eq("active",true)
        .order("room_order",{ascending:true});

    if(error) throw error;

    TTC_CHAT.rooms = data || [];

    renderRooms();

    if(!TTC_CHAT.rooms.length){

      throw new Error("Chưa có phòng Chat.");

    }

    const defaultSlug =
      getRoomFromURL() || "chung";

    const room =
      TTC_CHAT.rooms.find(r => r.slug === defaultSlug)
      || TTC_CHAT.rooms[0];

    await selectRoom(room);

    setStatus("Đã kết nối realtime.", "ok");

  }catch(error){

    console.error("[TTC CHAT]",error);

    setStatus(
      "Không thể tải Chat: " +
      (error.message || error),
      "error"
    );

  }

}


/* ============================================================
   ROOMS
   ============================================================ */

function renderRooms(){

  roomList.innerHTML = "";

  TTC_CHAT.rooms.forEach(room => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "ttc-chat-room" +
      (TTC_CHAT.currentRoom?.id === room.id
        ? " active"
        : "");

    button.dataset.roomId = room.id;

    button.innerHTML =
      escapeHTML(room.name);

    button.onclick = () =>
      selectRoom(room);

    roomList.appendChild(button);

  });

}


async function selectRoom(room){

  if(!room) return;

  if(TTC_CHAT.currentRoom && String(TTC_CHAT.currentRoom.id) === String(room.id)){
    return;
  }

  await cleanupRoomChannels();

  TTC_CHAT.currentRoom = room;

  roomName.textContent = room.name;

  renderRooms();

  replyingBox.classList.remove("show");

  TTC_CHAT.replyTo = null;

  messagesBox.innerHTML =
    '<div class="ttc-chat-empty">Đang tải tin nhắn... 💬</div>';

  await loadMessages();

  await subscribeRealtime();

  await subscribePresence();

}


/* ============================================================
   LOAD MESSAGES
   ============================================================ */

async function loadMessages(){

  if(!TTC_CHAT.currentRoom) return;

  try{

    const {data,error} =
      await TTC_CHAT.client
        .from("community_messages")
        .select("*")
        .eq("room_id",TTC_CHAT.currentRoom.id)
        .order("created_at",{ascending:false})
        .limit(40);

    if(error) throw error;

    TTC_CHAT.messages =
      (data || []).reverse();

    TTC_CHAT.noMoreOlder = (data || []).length < 40;

    await loadReactions();

    await renderMessages();

    scrollToBottom();

  }catch(error){

    console.error("[TTC CHAT LOAD]",error);

    messagesBox.innerHTML =
      '<div class="ttc-chat-empty">Không tải được tin nhắn.</div>';

  }

}


async function loadOlderMessages(){

  if(
    !TTC_CHAT.currentRoom ||
    TTC_CHAT.loadingOlder ||
    TTC_CHAT.noMoreOlder ||
    !TTC_CHAT.messages.length
  ){
    return;
  }

  const oldest = TTC_CHAT.messages.find(function(m){
    return m && m.created_at && !m.pending;
  });

  if(!oldest) return;

  TTC_CHAT.loadingOlder = true;
  const previousHeight = messagesBox.scrollHeight;

  try{

    const {data, error} =
      await TTC_CHAT.client
        .from("community_messages")
        .select("*")
        .eq("room_id", TTC_CHAT.currentRoom.id)
        .lt("created_at", oldest.created_at)
        .order("created_at", {ascending:false})
        .limit(40);

    if(error) throw error;

    const older = (data || []).reverse();

    if(older.length < 40) TTC_CHAT.noMoreOlder = true;

    if(older.length){

      const known = {};
      TTC_CHAT.messages.forEach(function(m){ known[m.id] = true; });
      const fresh = older.filter(function(m){ return !known[m.id]; });
      TTC_CHAT.messages = fresh.concat(TTC_CHAT.messages);
      await loadReactions();
      await renderMessages();
      messagesBox.scrollTop = messagesBox.scrollHeight - previousHeight;

    }

  }catch(error){

    console.error("[TTC CHAT OLDER]", error);

  }

  TTC_CHAT.loadingOlder = false;

}

messagesBox.addEventListener("scroll", function(){

  if(TTC_CHAT.pinningBottom) return;

  if(messagesBox.scrollTop < 48){
    loadOlderMessages();
  }

});


/* ============================================================
   REACTIONS
   ============================================================ */

async function loadReactions(){

  TTC_CHAT.reactionCache = {};

  const ids =
    TTC_CHAT.messages.map(m => m.id);

  if(!ids.length) return;

  try{

    const {data,error} =
      await TTC_CHAT.client
        .from("community_message_reactions")
        .select("message_id,user_id,reaction")
        .in("message_id",ids);

    if(error) throw error;

    (data || []).forEach(row => {

      if(!TTC_CHAT.reactionCache[row.message_id]){
        TTC_CHAT.reactionCache[row.message_id] = [];
      }

      TTC_CHAT.reactionCache[row.message_id].push(row);

    });

  }catch(error){

    console.error("[TTC CHAT REACTIONS]",error);

  }

}


/* ============================================================
   RENDER
   ============================================================ */

async function renderMessages(){

  if(!TTC_CHAT.messages.length){

    messagesBox.innerHTML = `
      <div class="ttc-chat-empty">
        <div>
          <div style="font-size:34px;margin-bottom:8px;">💬</div>
          <strong>Chưa có tin nhắn</strong>
          <div style="margin-top:5px;">
            Hãy là người đầu tiên bắt chuyện nhé 😍
          </div>
        </div>
      </div>
    `;

    return;

  }

  const names = {};

  for(const message of TTC_CHAT.messages){

    names[message.user_id] =
      await getDisplayName(message.user_id);

  }

  messagesBox.innerHTML = "";

  for(const message of TTC_CHAT.messages){

    messagesBox.appendChild(
      await createMessageElement(message,names[message.user_id])
    );

  }

}

/* ============================================================
   MESSAGE ELEMENT
   ============================================================ */

async function createMessageElement(message,name){

  /* ==========================================================
     🎲 TTC DICE V4 — TIN NHẮN XÚC SẮC REALTIME
     ========================================================== */

  if(
    message.dice_value !== null &&
    message.dice_value !== undefined
  ){

    const dice =
      createDiceMessage(
        Number(message.dice_value)
      );

    dice.event.dataset.diceMessageId =
      message.id || "";

    /*
      Chờ DOM gắn xong rồi mới chạy animation.
      Như vậy cả người gửi và tất cả người nhận
      Realtime đều chạy cùng một animation.
    */

    setTimeout(
      function(){

        animateDice(
          dice.cube,
          function(){}
        );

      },
      0
    );

    return dice.event;
  }


  const mine =
    message.user_id === TTC_CHAT.user.id;


  const wrapper =
    document.createElement("div");


  wrapper.className =
    "ttc-chat-message" +
    (mine ? " mine" : "");

  /* Giữ định danh để reaction chỉ refresh đúng 1 tin nhắn */
  wrapper.dataset.ttcMessageId = String(message.id || "");


  const avatar =
    document.createElement("div");

  avatar.className =
    "ttc-chat-avatar";

  avatar.textContent =
    "👤";


  const content =
    document.createElement("div");

  content.className =
    "ttc-chat-message-content";


  const meta =
    document.createElement("div");

  meta.className =
    "ttc-chat-meta";


  meta.innerHTML = `
    <span
      class="ttc-chat-name"
      data-user-id="${escapeHTML(message.user_id)}"
      data-user-name="${escapeHTML(name)}"
      style="cursor:pointer;"
    >
      ${escapeHTML(name)}
    </span>

    <span>
      ${formatTime(message.created_at)}
    </span>
  `;


  const bubble =
    document.createElement("div");

  bubble.className =
    "ttc-chat-bubble";


  let html = "";

  /* =======================================================
     ↩️ REPLY PREVIEW
     ======================================================= */

  if(message.reply_to_id){

    const replied =
      TTC_CHAT.messages.find(
        m =>
          m.id === message.reply_to_id
      );


    if(replied){

      const repliedName =
        await getDisplayName(
          replied.user_id
        );


      html += `
        <div class="ttc-chat-reply">
          ↩️ <strong>
            ${escapeHTML(repliedName)}
          </strong>
          <br>
          ${escapeHTML(
            replied.content ||
            replied.file_name ||
            "Nội dung đính kèm"
          ).slice(0,180)}
        </div>
      `;

    }

  }


  /* =======================================================
     💬 TEXT
     ======================================================= */

  if(message.content){

    let safe =
      escapeHTML(
        message.content
      );


    safe =
      safe.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
      );


    html += safe;

  }


  /* =======================================================
     📎 FILE
     ======================================================= */

  if(message.file_url){

    html +=
      await renderFile(
        message
      );

  }


  bubble.innerHTML =
    html;


  content.appendChild(
    meta
  );

  content.appendChild(
    bubble
  );


  /* =======================================================
     💬 TTC CHAT — ACTIONS / REACTION
     ======================================================= */

  const actions =
    document.createElement("div");

  actions.className =
    "ttc-chat-actions";


  const reactionList =
    TTC_CHAT.reactionCache[message.id] || [];


  const reactionTypes = [
    ["heart","❤️"],
    ["haha","😆"],
    ["wow","😮"],
    ["sad","😢"],
    ["angry","😡"],
    ["like","👍"]
  ];


  /* Loại reaction cũ — không cho thả mới,
     chỉ giữ để hiển thị tiếp badge đã có trong DB */
  const legacyReactionTypes = [
    ["dislike","👎"],
    ["thanks","🙏"]
  ];


  /* =======================================================
     📊 CHỈ HIỆN REACTION ĐÃ CÓ NGƯỜI DÙNG
     ======================================================= */

  const activeReactions =
    reactionTypes.concat(legacyReactionTypes).filter(
      ([type]) =>
        reactionList.some(
          r =>
            r.reaction === type
        )
    );


  const reactionSummary =
    document.createElement("div");

  reactionSummary.className =
    "ttc-reaction-summary";


  activeReactions.forEach(
    ([type,emoji]) => {

      const count =
        reactionList.filter(
          r =>
            r.reaction === type
        ).length;


      const mineReaction =
        reactionList.some(
          r =>
            r.user_id === TTC_CHAT.user.id &&
            r.reaction === type
        );


      const btn =
        document.createElement("button");

      btn.type =
        "button";


      btn.className =
        "ttc-reaction" +
        (
          mineReaction
            ? " active"
            : ""
        );


      btn.innerHTML =
        emoji +
        `<span class="ttc-reaction-count">${count}</span>`;


      btn.title =
        mineReaction
          ? "Bỏ reaction"
          : "Thả reaction";


      btn.onclick =
        async function(event){

          event.stopPropagation();


          await toggleReaction(
            message.id,
            type
          );


          wrapper.classList.remove(
            "ttc-message-selected"
          );

        };


      reactionSummary.appendChild(
        btn
      );

    }
  );


  /* =======================================================
     😊 THANH CHỌN 6 REACTION
     ======================================================= */

  const reactionPicker =
    document.createElement("div");

  reactionPicker.className =
    "ttc-reaction-picker";


  reactionTypes.forEach(
    ([type,emoji]) => {

      const count =
        reactionList.filter(
          r =>
            r.reaction === type
        ).length;


      const mineReaction =
        reactionList.some(
          r =>
            r.user_id === TTC_CHAT.user.id &&
            r.reaction === type
        );


      const btn =
        document.createElement("button");

      btn.type =
        "button";


      btn.className =
        "ttc-reaction" +
        (
          mineReaction
            ? " active"
            : ""
        );


      /* Thanh reaction kiểu Messenger: chỉ hiện emoji lớn,
         số đếm đã có ở badge tóm tắt dưới tin nhắn */
      btn.innerHTML =
        emoji;


      btn.title =
        mineReaction
          ? "Bỏ reaction"
          : "Reaction";


      btn.onclick =
        async function(event){

          event.stopPropagation();


          await toggleReaction(
            message.id,
            type
          );


          wrapper.classList.remove(
            "ttc-message-selected"
          );

        };


      reactionPicker.appendChild(
        btn
      );

    }
  );


  /* =======================================================
     ↩️ TRẢ LỜI
     ======================================================= */

  const replyBtn =
    document.createElement("button");

  replyBtn.type =
    "button";


  replyBtn.className =
    "ttc-message-tool";


  replyBtn.textContent =
    "↩️ Trả lời";


  replyBtn.onclick =
    function(event){

      event.stopPropagation();


      startReply(
        message
      );


      wrapper.classList.remove(
        "ttc-message-selected"
      );

    };


  /* =======================================================
     📦 GHÉP ACTIONS
     ======================================================= */

  actions.appendChild(
    reactionSummary
  );


  /* Thanh công cụ nổi (reaction + trả lời + xóa):
     mặc định ẩn, chỉ hiện khi nhấn giữ tin nhắn */
  const actionBar =
    document.createElement("div");

  actionBar.className =
    "ttc-action-bar";


  actionBar.appendChild(
    reactionPicker
  );


  actionBar.appendChild(
    replyBtn
  );


  /* =======================================================
     🗑️ XÓA — CHỈ TIN CỦA MÌNH
     ======================================================= */

  if(mine){

    const deleteBtn =
      document.createElement("button");


    deleteBtn.type =
      "button";


    deleteBtn.className =
      "ttc-message-tool";


    deleteBtn.textContent =
      "🗑️ Xóa";


    deleteBtn.onclick =
      function(event){

        event.stopPropagation();


        deleteMessage(
          message
        );


        wrapper.classList.remove(
          "ttc-message-selected"
        );

      };


    actionBar.appendChild(
      deleteBtn
    );

  }


  content.appendChild(
    actions
  );


  content.appendChild(
    actionBar
  );


  /* =======================================================
     👆 NHẤN GIỮ TIN NHẤN → HIỆN THANH REACTION / ACTIONS
     (chạm thường không mở thanh — icon mặc định ẩn)
     ======================================================= */

  attachMessageLongPress(
    bubble,
    wrapper
  );


  wrapper.appendChild(
    avatar
  );


  wrapper.appendChild(
    content
  );


  return wrapper;

}


document.addEventListener(
  "click",
  function(event){

    if(
      !event.target.closest(
        "#ttcChatMessages .ttc-chat-bubble"
      )
    ){

      document
        .querySelectorAll(
          "#ttcChatMessages .ttc-message-selected"
        )
        .forEach(
          el =>
            el.classList.remove(
              "ttc-message-selected"
            )
        );

    }

  }
);

/* ============================================================
   FILE RENDER
   ============================================================ */

async function renderFile(message){

  let url = "";

  try{

    if(/^https?:\/\//i.test(String(message.file_url || ""))){
      url = String(message.file_url);
    }else{

    const {data,error} =
      await TTC_CHAT.client.storage
        .from("community-chat")
        .createSignedUrl(
          message.file_url,
          3600
        );

    if(error) throw error;

    url = data?.signedUrl || "";

    }

  }catch(e){

    return `
      <div class="ttc-chat-file">
        📎 ${escapeHTML(message.file_name || "Tệp")}
      </div>
    `;

  }

  if(message.message_type === "image"){

  return `
    <div
      class="ttc-chat-file ttc-chat-image-wrap"
      style="
        width:100%;
        max-width:280px;
        max-height:300px;
        overflow:hidden;
        border-radius:10px;
        margin-top:6px;
      "
    >

      <img
        src="${escapeHTML(url)}"
        alt="${escapeHTML(message.file_name || "Ảnh")}"
        loading="lazy"
        decoding="async"
        style="
          display:block;
          width:auto;
          max-width:100%;
          max-height:300px;
          height:auto;
          object-fit:contain;
          border-radius:10px;
          cursor:pointer;
        "
        onclick="window.open('${escapeHTML(url)}','_blank')"
      >

    </div>
  `;

}
  if(message.message_type === "audio"){

    return `
      <div class="ttc-chat-file">
        <audio
          controls
          preload="metadata"
          src="${escapeHTML(url)}"
          style="max-width:280px;width:100%;"
        ></audio>
      </div>
    `;

  }

  return `
    <div class="ttc-chat-file">
      <a
        class="ttc-chat-file-link"
        href="${escapeHTML(url)}"
        target="_blank"
        rel="noopener noreferrer"
      >
        📎
        ${escapeHTML(
          message.file_name || "Tài liệu"
        )}
      </a>
    </div>
  `;

}


/* ============================================================
   SEND TEXT
   ============================================================ */

async function sendText(){

  const text =
    input.value.trim();

  const file =
    TTC_CHAT.pendingFile;

  const gif =
    TTC_CHAT.pendingGif;

  if(!text && !file && !gif) return;

  if(text.length > 3000){

    setStatus(
      "Tin nhắn tối đa 3000 ký tự.",
      "error"
    );

    return;

  }

  if(!TTC_CHAT.currentRoom){

    setStatus(
      "Chưa chọn phòng.",
      "error"
    );

    return;

  }

  const now = Date.now();

  if(
    TTC_CHAT._lastSend &&
    now - TTC_CHAT._lastSend < 700
  ){

    return;

  }

  TTC_CHAT._lastSend = now;

  input.value = "";
  autoResizeInput();
  TTC_CHAT.pendingFile = null;
  TTC_CHAT.pendingGif = null;
  const preview = $("ttcChatPreview");
  if(preview){
    preview.hidden = true;
    preview.innerHTML = "";
  }

  if(gif){
    cancelReply();
    try{
      await sendGifLink(gif, text);
    }catch(error){
      input.value = text;
      autoResizeInput();
      TTC_CHAT.pendingGif = gif;
      stageGif(gif.url, gif.name);
      setStatus("Không gửi được GIF: " + (error.message || error), "error");
    }
    return;
  }

  if(file){
    cancelReply();
    await uploadFile(file, text);
    return;
  }

  const localId = "local-" + Date.now();
  const pending = {
    id: localId,
    pending: true,
    room_id: TTC_CHAT.currentRoom.id,
    user_id: TTC_CHAT.user.id,
    content: text,
    message_type: "text",
    reply_to_id: TTC_CHAT.replyTo?.id || null,
    created_at: new Date().toISOString()
  };
  TTC_CHAT.messages.push(pending);
  const pendingName = await getDisplayName(TTC_CHAT.user.id);
  const pendingElement = await createMessageElement(pending, pendingName);
  pendingElement.classList.add("pending");
  const empty = messagesBox.querySelector(".ttc-chat-empty");
  if(empty) empty.remove();
  messagesBox.appendChild(pendingElement);
  scrollToBottom();
  const replyId = pending.reply_to_id;
  cancelReply();

  try{

    /*
       Tin hiện ngay trên màn hình.
       Máy chủ chỉ xác nhận đúng tin đó, không dựng lại cả khung.
    */
    const result =
      await TTC_CHAT.client
        .from("community_messages")
        .insert({

          room_id:
            TTC_CHAT.currentRoom.id,

          user_id:
            TTC_CHAT.user.id,

          content:text,

          message_type:"text",

          reply_to_id: replyId

        })
        .select("*")
        .single();

    if(result.error) throw result.error;

    const inserted =
      result.data;

    if(inserted){

      const localIndex =
        TTC_CHAT.messages.findIndex(
          m => m.id === localId
        );

      if(localIndex >= 0){
        TTC_CHAT.messages[localIndex] = inserted;
      }else if(!TTC_CHAT.messages.some(m => m.id === inserted.id)){
        TTC_CHAT.messages.push(inserted);
      }

      const node =
        messagesBox.querySelector(
          '[data-ttc-message-id="' + localId + '"]'
        );

      if(node){
        node.dataset.ttcMessageId = String(inserted.id);
        node.classList.remove("pending");
      }

    }

  }catch(error){

    console.error(
      "[TTC CHAT SEND]",
      error
    );

    input.value = text;
    autoResizeInput();
    TTC_CHAT.messages = TTC_CHAT.messages.filter(function(m){
      return m.id !== localId;
    });
    const failed = messagesBox.querySelector('[data-ttc-message-id="' + localId + '"]');
    if(failed) failed.remove();

    setStatus(
      "Không gửi được tin nhắn: " +
      (error.message || error),
      "error"
    );

  }

}

/* ============================================================
   UPLOAD FILE
   ============================================================ */

async function uploadFile(file, caption){

  if(!file || !TTC_CHAT.currentRoom) return;

  const maxSize =
    15 * 1024 * 1024;

  if(file.size > maxSize){

    setStatus(
      "Tệp tối đa 15MB.",
      "error"
    );

    return;

  }

  setStatus(
    "Đang tải " + file.name + "...",
    ""
  );

  try{

    const extension =
      file.name.includes(".")
        ? "." + file.name.split(".").pop()
        : "";

    const path =
      TTC_CHAT.user.id +
      "/" +
      TTC_CHAT.currentRoom.slug +
      "/" +
      crypto.randomUUID() +
      extension;

    const {error:uploadError} =
      await TTC_CHAT.client.storage
        .from("community-chat")
        .upload(
          path,
          file,
          {
            cacheControl:"3600",
            upsert:false,
            contentType:file.type || undefined
          }
        );

    if(uploadError) throw uploadError;

    let type = "file";

    if(file.type.startsWith("image/")){
      type = "image";
    }

    const saved = await TTC_CHAT.client
        .from("community_messages")
        .insert({

          room_id:
            TTC_CHAT.currentRoom.id,

          user_id:
            TTC_CHAT.user.id,

          content:
            caption ||
            (type === "image"
              ? ""
              : file.name),

          message_type:type,

          file_url:path,

          file_name:file.name,

          file_type:file.type || null,

          reply_to_id:
            TTC_CHAT.replyTo?.id || null

        })
        .select("*")
        .single();

    if(saved.error) throw saved.error;

    if(saved.data && !TTC_CHAT.messages.some(function(m){ return m.id === saved.data.id; })){
      TTC_CHAT.messages.push(saved.data);
      const emptyNote = messagesBox.querySelector(".ttc-chat-empty");
      if(emptyNote) emptyNote.remove();
      const name = await getDisplayName(saved.data.user_id);
      messagesBox.appendChild(await createMessageElement(saved.data, name));
      scrollToBottom();
    }

    cancelReply();

    setStatus(
      "Đã gửi " + file.name,
      "ok"
    );

  }catch(error){

    console.error("[TTC UPLOAD]",error);

    setStatus(
      "Không tải được tệp: " +
      (error.message || error),
      "error"
    );

  }

}


/* ============================================================
   AUDIO
   ============================================================ */

async function toggleRecording(){

  if(TTC_CHAT.recording){

    stopRecording();

    return;

  }

  if(!navigator.mediaDevices?.getUserMedia){

    setStatus(
      "Trình duyệt không hỗ trợ ghi âm.",
      "error"
    );

    return;

  }

  try{

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio:true
      });

    const mimeTypes = [

      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/mp4",
      "audio/ogg;codecs=opus"

    ];

    let mimeType = "";

    for(const type of mimeTypes){

      if(
        window.MediaRecorder &&
        MediaRecorder.isTypeSupported(type)
      ){

        mimeType = type;
        break;

      }

    }

    TTC_CHAT.mediaRecorder =
      new MediaRecorder(
        stream,
        mimeType ? {mimeType} : undefined
      );

    TTC_CHAT.audioChunks = [];

    TTC_CHAT.mediaRecorder.ondataavailable =
      event => {

        if(event.data?.size){
          TTC_CHAT.audioChunks.push(event.data);
        }

      };


    TTC_CHAT.mediaRecorder.onstop =
      async () => {

        stream.getTracks().forEach(
          track => track.stop()
        );

        const blob =
          new Blob(
            TTC_CHAT.audioChunks,
            {
              type:
                TTC_CHAT.mediaRecorder.mimeType ||
                "audio/webm"
            }
          );

        await uploadAudio(blob);

      };


    TTC_CHAT.mediaRecorder.start();

    TTC_CHAT.recording = true;

    $("ttcChatAudio").textContent = "⏹️";

    setStatus(
      "Đang ghi âm... bấm ⏹️ để gửi.",
      ""
    );

  }catch(error){

    console.error(error);

    setStatus(
      "Không thể dùng micro. Hãy cấp quyền microphone.",
      "error"
    );

  }

}


function stopRecording(){

  if(
    TTC_CHAT.mediaRecorder &&
    TTC_CHAT.recording
  ){

    TTC_CHAT.mediaRecorder.stop();

  }

  TTC_CHAT.recording = false;

  $("ttcChatAudio").textContent = "🎙️";

}


async function uploadAudio(blob){

  if(!TTC_CHAT.currentRoom) return;

  try{

    setStatus(
      "Đang tải voice...",
      ""
    );

    const extension =
      blob.type.includes("mp4")
        ? ".mp4"
        : ".webm";

    const path =
      TTC_CHAT.user.id +
      "/" +
      TTC_CHAT.currentRoom.slug +
      "/" +
      crypto.randomUUID() +
      extension;

    const {error:uploadError} =
      await TTC_CHAT.client.storage
        .from("community-chat")
        .upload(
          path,
          blob,
          {
            cacheControl:"3600",
            upsert:false,
            contentType:blob.type
          }
        );

    if(uploadError) throw uploadError;

    const {error:messageError} =
      await TTC_CHAT.client
        .from("community_messages")
        .insert({

          room_id:
            TTC_CHAT.currentRoom.id,

          user_id:
            TTC_CHAT.user.id,

          content:"🎙️ Voice",

          message_type:"audio",

          file_url:path,

          file_name:"Voice",

          file_type:blob.type

        });

    if(messageError) throw messageError;

    setStatus(
      "Đã gửi voice 🎙️",
      "ok"
    );

  }catch(error){

    console.error(error);

    setStatus(
      "Không gửi được voice: " +
      (error.message || error),
      "error"
    );

  }

}


/* ============================================================
   REACTION
   ============================================================ */

async function refreshSingleReactionMessage(messageId){

  if(!messagesBox) return;

  const oldElement =
    Array.from(messagesBox.children).find(
      el =>
        el.dataset &&
        el.dataset.ttcMessageId === String(messageId)
    );

  if(!oldElement) return;

  const message =
    TTC_CHAT.messages.find(
      m => String(m.id) === String(messageId)
    );

  if(!message) return;

  const name =
    await getDisplayName(message.user_id);

  const newElement =
    await createMessageElement(message,name);

  oldElement.replaceWith(newElement);

}


async function toggleReaction(messageId,reaction){

  try{

    const {data,error} =
      await TTC_CHAT.client
        .from("community_message_reactions")
        .select("id,reaction")
        .eq("message_id",messageId)
        .eq("user_id",TTC_CHAT.user.id)
        .maybeSingle();

    if(error) throw error;

    if(data){

      if(data.reaction === reaction){

        const {error:deleteError} =
          await TTC_CHAT.client
            .from("community_message_reactions")
            .delete()
            .eq("id",data.id);

        if(deleteError) throw deleteError;

      }else{

        const {error:updateError} =
          await TTC_CHAT.client
            .from("community_message_reactions")
            .update({
              reaction
            })
            .eq("id",data.id);

        if(updateError) throw updateError;

      }

    }else{

      const {error:insertError} =
        await TTC_CHAT.client
          .from("community_message_reactions")
          .insert({

            message_id:messageId,

            user_id:TTC_CHAT.user.id,

            reaction

          });

      if(insertError) throw insertError;

    }

    await loadReactions();

    /*
       KHÔNG renderMessages() ở đây.
       Reaction trước đây dựng lại toàn bộ danh sách tin nhắn,
       khiến mobile nhảy lên đầu / nhìn như chat bị load lại.
       Chỉ thay đúng message vừa đổi reaction.
    */
    await refreshSingleReactionMessage(messageId);

  }catch(error){

    console.error("[REACTION]",error);

  }

}


/* ============================================================
   👆 LONG-PRESS → THANH REACTION (kiểu Messenger)
   Mặc định KHÔNG hiện icon nào trên tin nhắn.
   Nhấn giữ ~450ms (hoặc chuột phải trên desktop) mới hiện
   thanh chọn reaction + trả lời + xóa.
   Thanh tự ẩn khi: chạm ra ngoài, cuộn danh sách,
   hoặc sau khi chọn một reaction / hành động.
   ============================================================ */

const TTC_LONG_PRESS_MS = 450;

let ttcPressTimer = null;
let ttcPressStart = null;
let ttcClickSuppressor = null;


function ttcClearActionBars(except){

  document
    .querySelectorAll(
      "#ttcChatMessages .ttc-message-selected"
    )
    .forEach(
      el => {

        if(el !== except){

          el.classList.remove(
            "ttc-message-selected"
          );

        }

      }
    );

}


function ttcOpenActionBar(wrapper){

  ttcClearActionBars(wrapper);


  /* Nếu tin nhắn nằm sát mép trên của khung chat,
     lật thanh xuống dưới để không bị cắt mất */
  wrapper.classList.remove(
    "ttc-bar-below"
  );

  if(messagesBox){

    const boxRect =
      messagesBox.getBoundingClientRect();

    const wrapRect =
      wrapper.getBoundingClientRect();

    if(wrapRect.top - boxRect.top < 64){

      wrapper.classList.add(
        "ttc-bar-below"
      );

    }

  }


  wrapper.classList.add(
    "ttc-message-selected"
  );


  if(navigator.vibrate){

    try{
      navigator.vibrate(10);
    }catch(e){}

  }

}


function ttcCancelPress(){

  if(ttcPressTimer){

    clearTimeout(ttcPressTimer);

    ttcPressTimer = null;

  }

  ttcPressStart = null;

}


/* Sau khi nhấn giữ thành công, trình duyệt vẫn bắn thêm
   một sự kiện click khi thả tay — nuốt sự kiện đó để
   không bấm nhầm link trong tin và không tắt thanh vừa mở */
function ttcSuppressNextClick(){

  if(!messagesBox || ttcClickSuppressor) return;


  ttcClickSuppressor =
    function(event){

      event.preventDefault();

      event.stopPropagation();

      ttcDisarmClickSuppressor();

    };


  messagesBox.addEventListener(
    "click",
    ttcClickSuppressor,
    {capture:true}
  );


  setTimeout(
    ttcDisarmClickSuppressor,
    1200
  );

}


function ttcDisarmClickSuppressor(){

  if(ttcClickSuppressor && messagesBox){

    messagesBox.removeEventListener(
      "click",
      ttcClickSuppressor,
      {capture:true}
    );

  }

  ttcClickSuppressor = null;

}


/* Cuộn danh sách tin nhắn → hủy nhấn giữ đang chờ + ẩn thanh */
if(messagesBox){

  messagesBox.addEventListener(
    "scroll",
    function(){

      ttcCancelPress();

      ttcClearActionBars(null);

    },
    {passive:true}
  );

}


function attachMessageLongPress(bubble,wrapper){

  bubble.addEventListener(
    "pointerdown",
    function(event){

      /* Chỉ chuột trái / cảm ứng / bút */
      if(
        event.button !== undefined &&
        event.button !== 0
      ) return;


      ttcCancelPress();

      ttcPressStart = {
        x:event.clientX,
        y:event.clientY
      };


      wrapper.classList.add(
        "ttc-pressing"
      );


      ttcPressTimer =
        setTimeout(
          function(){

            ttcPressTimer = null;

            wrapper.classList.remove(
              "ttc-pressing"
            );

            ttcSuppressNextClick();

            ttcOpenActionBar(wrapper);

          },
          TTC_LONG_PRESS_MS
        );

    }
  );


  bubble.addEventListener(
    "pointermove",
    function(event){

      if(!ttcPressStart) return;


      const dx =
        event.clientX - ttcPressStart.x;

      const dy =
        event.clientY - ttcPressStart.y;


      /* Lệch quá 10px = người dùng đang cuộn → hủy nhấn giữ */
      if(Math.sqrt(dx*dx + dy*dy) > 10){

        wrapper.classList.remove(
          "ttc-pressing"
        );

        ttcCancelPress();

      }

    }
  );


  [
    "pointerup",
    "pointercancel",
    "pointerleave"
  ].forEach(
    function(type){

      bubble.addEventListener(
        type,
        function(){

          wrapper.classList.remove(
            "ttc-pressing"
          );

          ttcCancelPress();

        }
      );

    }
  );


  /* Chuột phải (desktop) = tương đương nhấn giữ;
     đồng thời chặn menu ngữ cảnh mặc định trên tin nhắn */
  bubble.addEventListener(
    "contextmenu",
    function(event){

      event.preventDefault();

      ttcCancelPress();

      wrapper.classList.remove(
        "ttc-pressing"
      );

      ttcOpenActionBar(wrapper);

    }
  );


  /* Chạm thường vào bong bóng:
     KHÔNG mở thanh (chỉ nhấn giữ mới mở) —
     chỉ đóng thanh đang mở của tin khác / của chính tin này */
  bubble.addEventListener(
    "click",
    function(){

      if(
        wrapper.classList.contains(
          "ttc-message-selected"
        )
      ){

        wrapper.classList.remove(
          "ttc-message-selected"
        );

      }else{

        ttcClearActionBars(null);

      }

    }
  );

}


/* ============================================================
   DELETE MESSAGE
   ============================================================ */

async function deleteMessage(message){

  if(message.user_id !== TTC_CHAT.user.id){
    return;
  }

  if(
    !confirm("Xóa tin nhắn này nhé?")
  ){
    return;
  }

  try{

    const {error} =
      await TTC_CHAT.client
        .from("community_messages")
        .delete()
        .eq("id",message.id)
        .eq("user_id",TTC_CHAT.user.id);

    if(error) throw error;

  }catch(error){

    console.error(error);

    setStatus(
      "Không xóa được tin nhắn.",
      "error"
    );

  }

}


/* ============================================================
   REPLY
   ============================================================ */

function startReply(message){

  TTC_CHAT.replyTo = message;

  const shortText =
    message.content ||
    message.file_name ||
    "Nội dung đính kèm";

  replyText.textContent =
    "↩️ Trả lời: " +
    shortText.slice(0,140);

  replyingBox.classList.add("show");

  input.focus();

}


function cancelReply(){

  TTC_CHAT.replyTo = null;

  replyingBox.classList.remove("show");

  replyText.textContent = "";

}


/* ============================================================
   REALTIME
   ============================================================ */

async function subscribeRealtime(){

  if(!TTC_CHAT.currentRoom) return;

  if(TTC_CHAT.realtimeChannel){

    try{

      await TTC_CHAT.client.removeChannel(
        TTC_CHAT.realtimeChannel
      );

    }catch(e){}

    TTC_CHAT.realtimeChannel = null;

  }

  const roomId =
    TTC_CHAT.currentRoom.id;

  TTC_CHAT.realtimeChannel =
    TTC_CHAT.client
      .channel(
        "ttc-chat-room-" + roomId
      )

      .on(

        "postgres_changes",

        {
          event:"*",
          schema:"public",
          table:"community_messages",
          filter:"room_id=eq." + roomId
        },

        async payload => {

          if(payload.eventType === "INSERT"){

            const exists =
              TTC_CHAT.messages.some(
                m => m.id === payload.new.id
              );

            if(!exists){

              const own =
                TTC_CHAT.user &&
                String(payload.new.user_id) ===
                String(TTC_CHAT.user.id);

              const pendingIndex = own
                ? TTC_CHAT.messages.findIndex(function(m){
                    return m.pending && m.content === payload.new.content;
                  })
                : -1;

              if(pendingIndex >= 0){
                const oldId = TTC_CHAT.messages[pendingIndex].id;
                TTC_CHAT.messages[pendingIndex] = payload.new;
                const node = messagesBox.querySelector('[data-ttc-message-id="' + oldId + '"]');
                if(node){
                  node.dataset.ttcMessageId = String(payload.new.id);
                  node.classList.remove("pending");
                }
                return;
              }

              TTC_CHAT.messages.push(
                payload.new
              );

              const name =
                await getDisplayName(
                  payload.new.user_id
                );

              const element =
                await createMessageElement(
                  payload.new,
                  name
                );

              const emptyNote = messagesBox.querySelector(".ttc-chat-empty");
              if(emptyNote) emptyNote.remove();
              messagesBox.appendChild(element);

              if(own || isNearBottom()){
                scrollToBottom();
                return;
              }

              TTC_CHAT.unread++;

              newMessagesBtn.textContent =
                "↓ " +
                TTC_CHAT.unread +
                " tin nhắn mới";

              newMessagesBtn.classList.add("show");
              showChatNotification();

              return;

            }

          }


          if(payload.eventType === "DELETE"){

            TTC_CHAT.messages =
              TTC_CHAT.messages.filter(
                m => m.id !== payload.old.id
              );

            const gone = messagesBox.querySelector(
              '[data-ttc-message-id="' + payload.old.id + '"]'
            );
            if(gone) gone.remove();

          }


          if(payload.eventType === "UPDATE"){

            const index =
              TTC_CHAT.messages.findIndex(
                m => m.id === payload.new.id
              );

            if(index >= 0){

              TTC_CHAT.messages[index] =
                payload.new;

              const oldNode = messagesBox.querySelector(
                '[data-ttc-message-id="' + payload.new.id + '"]'
              );
              const updatedName = await getDisplayName(payload.new.user_id);
              const updated = await createMessageElement(payload.new, updatedName);
              if(oldNode && oldNode.parentNode){
                oldNode.parentNode.replaceChild(updated, oldNode);
              }

            }

          }

        }

      )

      .on(

        "postgres_changes",

        {
          event:"*",
          schema:"public",
          table:"community_message_reactions"
        },

        async payload => {

          const affectedId =
            payload.new?.message_id ||
            payload.old?.message_id;

          if(
            affectedId &&
            TTC_CHAT.messages.some(
              m => m.id === affectedId
            )
          ){

            await loadReactions();

            /* Chỉ cập nhật message bị reaction, không reload toàn bộ chat */
            await refreshSingleReactionMessage(affectedId);

          }

        }

      )

      .subscribe();


}


/* ============================================================
   PRESENCE
   ============================================================ */

async function subscribePresence(){

  if(!TTC_CHAT.currentRoom) return;

  if(TTC_CHAT.presenceChannel){

    try{

      await TTC_CHAT.client.removeChannel(
        TTC_CHAT.presenceChannel
      );

    }catch(e){}

  }

  TTC_CHAT.presenceUsers = {};

  const roomId =
    TTC_CHAT.currentRoom.id;

  TTC_CHAT.presenceChannel =
    TTC_CHAT.client.channel(
      "ttc-presence-" + roomId,
      {
        config:{
          presence:{
            key:TTC_CHAT.user.id
          }
        }
      }
    );


  TTC_CHAT.presenceChannel

    .on(
      "presence",
      {
        event:"sync"
      },
      () => {

        const state =
          TTC_CHAT.presenceChannel.presenceState();

        const users = {};

        Object.keys(state).forEach(key => {

          users[key] = true;

        });

        TTC_CHAT.presenceUsers = users;

        updateOnlineCount();

      }
    )

    .subscribe(
      async status => {

        if(status === "SUBSCRIBED"){

          await TTC_CHAT.presenceChannel.track({

            user_id:TTC_CHAT.user.id,

            online_at:
              new Date().toISOString()

          });

        }

      }
    );

}


/* ============================================================
   ONLINE
   ============================================================ */

function updateOnlineCount(){

  const count =
    Object.keys(
      TTC_CHAT.presenceUsers || {}
    ).length;

  onlineText.textContent =
    count +
    " người đang online";

}


/* ============================================================
   CHANNEL CLEANUP
   ============================================================ */

async function cleanupRoomChannels(){

  if(TTC_CHAT.realtimeChannel){

    try{

      await TTC_CHAT.client.removeChannel(
        TTC_CHAT.realtimeChannel
      );

    }catch(e){}

    TTC_CHAT.realtimeChannel = null;

  }

  if(TTC_CHAT.presenceChannel){

    try{

      await TTC_CHAT.client.removeChannel(
        TTC_CHAT.presenceChannel
      );

    }catch(e){}

    TTC_CHAT.presenceChannel = null;

  }

}


/* ============================================================
   ROOM LINK
   ============================================================ */

function updateRoomURL(slug){

  try{

    const url =
      new URL(window.location.href);

    url.searchParams.set(
      "chat",
      slug
    );

    history.replaceState(
      null,
      "",
      url.toString()
    );

  }catch(e){}

}


function getRoomFromURL(){

  try{

    return new URLSearchParams(
      window.location.search
    ).get("chat");

  }catch(e){

    return null;

  }

}


/* ============================================================
   SHARE ROOM
   ============================================================ */

async function shareRoom(){

  if(!TTC_CHAT.currentRoom) return;

  const url =
    new URL(window.location.href);

  url.searchParams.set(
    "chat",
    TTC_CHAT.currentRoom.slug
  );

  const link =
    url.toString();

  try{

    if(navigator.share){

      await navigator.share({

        title:
          "THÍCH TIẾNG TRUNG — Chat",

        text:
          "Mời bạn vào " +
          TTC_CHAT.currentRoom.name,

        url:link

      });

    }else if(navigator.clipboard){

      await navigator.clipboard.writeText(link);

      setStatus(
        "Đã copy link phòng chat 🔗",
        "ok"
      );

    }else{

      prompt(
        "Copy link phòng:",
        link
      );

    }

  }catch(e){}

}


/* ============================================================
   SCROLL
   ============================================================ */

function isNearBottom(){

  return (
    messagesBox.scrollHeight -
    messagesBox.scrollTop -
    messagesBox.clientHeight
  ) < 180;

}


function scrollToBottom(){

  if(!messagesBox) return;

  TTC_CHAT.pinningBottom = true;

  const jump = function(){
    messagesBox.style.scrollBehavior = "auto";
    const last = messagesBox.lastElementChild;
    messagesBox.scrollTop = messagesBox.scrollHeight;
    if(last && last.scrollIntoView){
      last.scrollIntoView({block:"end", inline:"nearest"});
    }
  };

  jump();
  requestAnimationFrame(jump);
  setTimeout(jump, 50);
  setTimeout(jump, 180);
  setTimeout(function(){
    jump();
    TTC_CHAT.pinningBottom = false;
  }, 360);

}


/* ============================================================
   INPUT
   ============================================================ */

function autoResizeInput(){

  input.style.height = "auto";

  input.style.height =
    Math.min(
      input.scrollHeight,
      130
    ) + "px";

}


function setChatFullscreen(fullscreen){
  const shell = chat && chat.querySelector(".ttc-chat-shell");
  if(!shell) return;
  shell.classList.toggle("ttc-chat-windowed", !fullscreen);
  if(fullscreen){
    shell.style.left="0";
    shell.style.top="0";
    shell.style.right="auto";
    shell.style.bottom="auto";
    shell.style.transform="none";
    if(fullscreenBtn){
      fullscreenBtn.textContent="↙";
      fullscreenBtn.title="Thu nhỏ khung chat";
      fullscreenBtn.setAttribute("aria-label","Thu nhỏ khung chat");
    }
  }else{
    const w=Math.min(1100,Math.max(280,innerWidth*.94));
    const h=Math.min(850,Math.max(360,innerHeight*.86));
    const l=Math.max(8,(innerWidth-w)/2);
    const t=Math.max(8,(innerHeight-h)/2);
    shell.style.width=w+"px";
    shell.style.height=h+"px";
    shell.style.left=l+"px";
    shell.style.top=t+"px";
    shell.style.right="auto";
    shell.style.bottom="auto";
    shell.style.transform="none";
    if(fullscreenBtn){
      fullscreenBtn.textContent="⛶";
      fullscreenBtn.title="Mở toàn màn hình";
      fullscreenBtn.setAttribute("aria-label","Mở toàn màn hình");
    }
  }
}

if(fullscreenBtn){
  fullscreenBtn.addEventListener("click",function(event){
    event.preventDefault();
    event.stopPropagation();
    const shell=chat.querySelector(".ttc-chat-shell");
    setChatFullscreen(!!shell && shell.classList.contains("ttc-chat-windowed"));
  });
}

/* ============================================================
   EVENTS
   ============================================================ */

$("ttcChatClose").addEventListener(
  "click",
  closeChat
);

$("ttcChatSend").addEventListener(
  "click",
  async function(event){

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    await sendText();

    return false;

  },
  true
);

window.ttcChatSendFromUx = function(){
  sendText();
};

chat.addEventListener("submit", function(event){
  event.preventDefault();
  event.stopPropagation();
}, true);

chat.addEventListener("click", function(event){
  const link = event.target && event.target.closest && event.target.closest("a");
  if(!link || !chat.contains(link)) return;
  const href = link.getAttribute("href") || "";
  if(!href || href === "#" || href.charAt(0) === "?"){
    event.preventDefault();
  }
}, true);

$("ttcChatAudio").addEventListener(
  "click",
  toggleRecording
);

$("ttcChatAttach").addEventListener(
  "click",
  function(event){
    event.preventDefault();
    event.stopPropagation();
    const fileInput = $("ttcChatFile");
    if(fileInput){
      fileInput.click();
    }
  }
);

$("ttcChatFile").addEventListener(
  "change",
  function(event){

    const file =
      event.target.files && event.target.files[0];

    event.target.value = "";

    if(!file) return;

    TTC_CHAT.pendingFile = file;

    const preview = $("ttcChatPreview");

    if(!preview) return;

    preview.hidden = false;
    preview.innerHTML = "";

    if(String(file.type || "").indexOf("image/") === 0){
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      preview.appendChild(img);
    }

    const label = document.createElement("span");
    label.textContent = file.name;
    preview.appendChild(label);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.title = "Bỏ tệp";
    remove.addEventListener("click", function(){
      TTC_CHAT.pendingFile = null;
      preview.hidden = true;
      preview.innerHTML = "";
    });
    preview.appendChild(remove);

  }
);

const gifPanel = $("ttcChatGifPanel");
const gifButton = $("ttcChatGif");
const gifQuery = $("ttcChatGifQuery");
const gifResults = $("ttcChatGifResults");

function stageGif(url, name){
  TTC_CHAT.pendingFile = null;
  TTC_CHAT.pendingGif = {url:url, name:name || "gif"};
  const preview = $("ttcChatPreview");
  if(!preview) return;
  preview.hidden = false;
  preview.innerHTML = "";
  const img = document.createElement("img");
  img.src = url;
  img.alt = name || "GIF";
  preview.appendChild(img);
  const label = document.createElement("span");
  label.textContent = "GIF";
  preview.appendChild(label);
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "×";
  remove.title = "Bỏ GIF";
  remove.addEventListener("click", function(){
    TTC_CHAT.pendingGif = null;
    preview.hidden = true;
    preview.innerHTML = "";
  });
  preview.appendChild(remove);
  if(gifPanel) gifPanel.hidden = true;
}

let gifSearchPage = 1;
let gifSearchTerm = "";

const GIF_VI_EN = {
  "mèo":"cat", "meo":"cat", "chó":"dog", "cho":"dog",
  "cười":"laugh", "cuoi":"laugh", "cười lớn":"laugh",
  "khóc":"cry", "khoc":"cry", "vui":"happy", "buồn":"sad", "buon":"sad",
  "yêu":"love", "yeu":"love", "thả tim":"love", "tim":"heart",
  "giận":"angry", "gian":"angry", "giận dữ":"angry",
  "xin chào":"hello", "chào":"hello", "cảm ơn":"thanks", "cam on":"thanks",
  "ngủ":"sleep", "ngu":"sleep", "ăn":"eat", "uống":"drink",
  "mưa":"rain", "nắng":"sunny", "đêm":"night", "ok":"ok", "wow":"wow",
  "vỗ tay":"clap", "nhảy":"dance", "sợ":"scared", "ngạc nhiên":"surprised"
};

async function gifEnglishQuery(raw){
  const text = String(raw || "").trim();
  const key = text.toLowerCase();
  if(GIF_VI_EN[key]) return GIF_VI_EN[key];
  const needsEnglish = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
  if(!needsEnglish) return text;
  try{
    const response = await fetch(
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q="
      + encodeURIComponent(text)
    );
    const data = await response.json();
    const english = data && data[0] && data[0][0] && data[0][0][0];
    if(english && String(english).trim()) return String(english).trim();
  }catch(e){}
  return text;
}

async function gifRowsFromCommons(english){
  const endpoint = "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=30&gsrsearch="
    + encodeURIComponent(String(english || "") + " gif")
    + "&prop=imageinfo&iiprop=url|mime&iiurlwidth=320";
  const response = await fetch(endpoint);
  const data = await response.json();
  const pages = data && data.query && data.query.pages ? Object.values(data.query.pages) : [];
  const found = [];
  pages.forEach(function(page){
    const info = page.imageinfo && page.imageinfo[0];
    if(!info) return;
    const full = String(info.url || "");
    if(String(info.mime || "") !== "image/gif" && !/\.gif($|\?)/i.test(full)) return;
    found.push({url:full, thumb:info.thumburl || full, name:page.title || "gif"});
  });
  return found;
}

function gifRowsFromOpenverse(data){
  const rows = Array.isArray(data && data.results) ? data.results : [];
  const found = [];
  rows.forEach(function(row){
    const full = String(row.url || "");
    if(!full) return;
    const kind = String(row.filetype || "").toLowerCase();
    if(kind && kind !== "gif" && !/\.gif($|\?)/i.test(full)) return;
    found.push({url:full, thumb:full, name:row.title || "gif"});
  });
  return {found:found, pageCount:Number(data && data.page_count) || 1};
}

function appendGifChoice(item){
  const button = document.createElement("button");
  button.type = "button";
  button.title = "Chọn GIF này";
  const img = document.createElement("img");
  img.referrerPolicy = "no-referrer";
  img.src = item.thumb || item.url;
  img.alt = "";
  img.addEventListener("error", function(){
    if(button.parentNode) button.remove();
  });
  button.appendChild(img);
  button.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    stageGif(item.url, item.name);
  });
  gifResults.appendChild(button);
}

async function searchChatGifs(query, page){
  if(!gifResults) return;
  const term = String(query || "").trim();
  if(!term){
    gifResults.textContent = "Gõ một từ, ví dụ mèo hoặc cười, rồi nhấn Tìm.";
    return;
  }
  page = page || 1;
  const english = page === 1 ? await gifEnglishQuery(term) : (gifSearchTerm || term);
  gifSearchTerm = english;
  gifSearchPage = page;
  const previousMore = gifResults.querySelector(".ttc-gif-more");
  if(previousMore) previousMore.remove();
  if(page === 1) gifResults.textContent = "Đang tìm GIF...";
  try{
    const endpoint = "https://api.openverse.org/v1/images/?extension=gif&page_size=40&page="
      + page
      + "&q="
      + encodeURIComponent(english);
    const response = await fetch(endpoint);
    const data = await response.json();
    const parsed = gifRowsFromOpenverse(data);
    const found = parsed.found;
    if(page === 1) gifResults.innerHTML = "";
    if(!found.length && page === 1){
      const extra = await gifRowsFromCommons(english);
      if(extra.length){
        extra.forEach(appendGifChoice);
        return;
      }
      gifResults.textContent = "Chưa thấy GIF cho \"" + term + "\". Thử từ khác, ví dụ mèo, cười, hoặc chọn file trong máy.";
      return;
    }
    found.forEach(appendGifChoice);
    const pageCount = parsed.pageCount || page;
    if(page < pageCount){
      const more = document.createElement("button");
      more.type = "button";
      more.className = "ttc-gif-more";
      more.textContent = "Xem thêm";
      more.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        searchChatGifs(gifSearchTerm, gifSearchPage + 1);
      });
      gifResults.appendChild(more);
    }
  }catch(error){
    if(page === 1) gifResults.textContent = "Không tìm được GIF lúc này. Anh chọn file GIF trong máy.";
  }
}

async function sendGifLink(gif, caption){
  const saved = await TTC_CHAT.client
    .from("community_messages")
    .insert({
      room_id: TTC_CHAT.currentRoom.id,
      user_id: TTC_CHAT.user.id,
      content: caption || "",
      message_type: "image",
      file_url: gif.url,
      file_name: gif.name || "gif",
      file_type: "image/gif",
      reply_to_id: TTC_CHAT.replyTo?.id || null
    })
    .select("*")
    .single();
  if(saved.error) throw saved.error;
  if(saved.data && !TTC_CHAT.messages.some(function(m){ return m.id === saved.data.id; })){
    TTC_CHAT.messages.push(saved.data);
    const emptyNote = messagesBox.querySelector(".ttc-chat-empty");
    if(emptyNote) emptyNote.remove();
    const name = await getDisplayName(saved.data.user_id);
    messagesBox.appendChild(await createMessageElement(saved.data, name));
    scrollToBottom();
  }
}

if(gifButton && gifPanel){
  gifButton.addEventListener("click", function(event){
    event.preventDefault();
    gifPanel.hidden = !gifPanel.hidden;
    if(!gifPanel.hidden && gifQuery){
      gifQuery.focus();
    }
  });
  $("ttcChatGifSearch").addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    searchChatGifs(gifQuery.value.trim(), 1);
  });
  gifQuery.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      event.preventDefault();
      event.stopPropagation();
      searchChatGifs(gifQuery.value.trim(), 1);
    }
  });
  $("ttcChatGifLocal").addEventListener("click", function(){
    const picker = $("ttcChatGifFile");
    if(picker) picker.click();
  });
  $("ttcChatGifFile").addEventListener("change", function(event){
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if(!file) return;
    TTC_CHAT.pendingGif = null;
    TTC_CHAT.pendingFile = file;
    const preview = $("ttcChatPreview");
    if(!preview) return;
    preview.hidden = false;
    preview.innerHTML = "";
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.alt = file.name;
    preview.appendChild(img);
    const label = document.createElement("span");
    label.textContent = file.name;
    preview.appendChild(label);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.addEventListener("click", function(){
      TTC_CHAT.pendingFile = null;
      preview.hidden = true;
      preview.innerHTML = "";
    });
    preview.appendChild(remove);
    gifPanel.hidden = true;
  });
}

$("ttcChatShareRoom").addEventListener(
  "click",
  shareRoom
);

$("ttcChatCancelReply").addEventListener(
  "click",
  cancelReply
);

newMessagesBtn.addEventListener(
  "click",
  () => {

    TTC_CHAT.unread = 0;

    newMessagesBtn.classList.remove("show");

    scrollToBottom();

  }
);

input.addEventListener(
  "input",
  autoResizeInput
);

input.addEventListener(
  "keydown",
  async function(event){

    if(
      event.key === "Enter" &&
      !event.shiftKey
    ){

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      await sendText();

      return false;
    }

  },
  true
);

/* ============================================================
   CLICK OUTSIDE
   ============================================================ */

chat.addEventListener(
  "click",
  event => {

    if(event.target === chat){

      closeChat();

    }

  }
);


/* ============================================================
   EXPOSE OPEN FUNCTION
   ============================================================ */

window.openTtcChatV1 = openChat;

window.closeTtcChatV1 = closeChat;


/* ============================================================
   AUTO OPEN WHEN URL HAS ?chat=
   ============================================================ */

/*
 * CHAT V1 — KHÔNG TỰ ĐỘNG MỞ CHAT KHI ĐĂNG NHẬP / TẢI TRANG.
 * Chat chỉ mở khi người dùng chủ động nhấn nút Chat Online.
 */


/* ============================================================
   OPTIONAL BUTTON AUTO-DETECTION
   ============================================================ */

function installChatButton(){

  const possibleButtons = [

    "#otter2ChatOnlineBtn",
    "#ttcChatButton",
    "#chatOnlineBtn",
    "[data-ttc-chat]",
    "[data-open-chat]"

  ];

  for(const selector of possibleButtons){

    document
      .querySelectorAll(selector)
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.preventDefault();

            openChat();

          }
        );

      });

  }

}


/* ============================================================
   CREATE FLOATING CHAT BUTTON
   ============================================================ */

function createFloatingButton(){

  if(document.getElementById("otter2ChatOnlineBtn")){
    return;
  }

  if(document.getElementById("ttcFloatingChatBtn")){
    return;
  }

  const button =
    document.createElement("button");

  button.id =
    "ttcFloatingChatBtn";

  button.type = "button";

  button.innerHTML =
    "💬 CHAT ONLINE";

/* CHAT NOTIFICATION DOT */
const notificationDot =
  document.createElement("span");

notificationDot.id =
  "ttcChatNotificationDot";

notificationDot.textContent = "!";

button.style.position = "fixed";

button.appendChild(notificationDot);

  Object.assign(
    button.style,
    {
      position:"fixed",
      right:"18px",
      top:"18px",
      zIndex:"99998",
      border:"0",
      borderRadius:"999px",
      padding:"11px 16px",
      background:"#d71920",
      color:"#fff",
      font:"inherit",
      fontWeight:"3500",
      fontSize:"8px",
      cursor:"pointer",
      boxShadow:"0 8px 25px rgba(0,0,0,.18)"
    }
  );

  button.addEventListener(
    "click",
    function(event){
      event.preventDefault();
      event.stopPropagation();
      openChat();
    }
  );

  document.body.appendChild(button);

}

/* ============================================================
   CHAT OUTSIDE NOTIFICATION
   CHUNG + HSK1 → HSK9
   ============================================================ */

let ttcChatNotificationChannel = null;

let ttcChatNotificationRooms = new Set();


function ensureNavChatBadge(){
  const btn = document.getElementById("otter2ChatOnlineBtn");
  if(!btn) return null;
  let badge = document.getElementById("otter2ChatNavBadge");
  if(!badge){
    badge = document.createElement("span");
    badge.id = "otter2ChatNavBadge";
    badge.className = "otter2-chat-badge";
    badge.setAttribute("aria-hidden", "true");
    btn.appendChild(badge);
  }
  return badge;
}

function syncNavChatBadge(){
  const badge = ensureNavChatBadge();
  if(!badge) return;
  const n = Number(TTC_CHAT.unread || 0);
  if(n > 0 && !chat.classList.contains("ttc-chat-open")){
    badge.textContent = n > 99 ? "99+" : String(n);
    badge.classList.add("is-on");
  }else{
    badge.textContent = "";
    badge.classList.remove("is-on");
  }
}

function showChatNotification(){

  const dot =
    document.getElementById(
      "ttcChatNotificationDot"
    );

  if(dot) dot.classList.add("show");
  syncNavChatBadge();

}


function hideChatNotification(){

  const dot =
    document.getElementById(
      "ttcChatNotificationDot"
    );

  if(dot) dot.classList.remove("show");
  TTC_CHAT.unread = 0;
  syncNavChatBadge();

}


async function startChatNotificationWatcher(){

  try{

    const client =
      findSupabaseClient();

    if(!client) return;

    const {
      data:userData,
      error:userError
    } =
      await client.auth.getUser();

    if(
      userError ||
      !userData?.user
    ){

      return;

    }


    /* Lấy toàn bộ phòng Chat đang hoạt động */

    const {
      data:rooms,
      error:roomError
    } =
      await client
        .from("community_rooms")
        .select("id,slug")
        .eq("active",true);

    if(roomError){

      console.error(
        "[TTC CHAT NOTIFY]",
        roomError
      );

      return;

    }


    ttcChatNotificationRooms =
      new Set(
        (rooms || []).map(
          room => String(room.id)
        )
      );


    if(!ttcChatNotificationRooms.size){

      return;

    }


    /* Nếu watcher cũ tồn tại thì tháo ra */

    if(ttcChatNotificationChannel){

      try{

        await client.removeChannel(
          ttcChatNotificationChannel
        );

      }catch(e){}

      ttcChatNotificationChannel =
        null;

    }


    /*
     * Theo dõi community_messages
     * KHÔNG filter room_id ở Supabase,
     * vì cần nghe CHUNG + HSK1 → HSK9.
     */

    ttcChatNotificationChannel =
      client
        .channel(
          "ttc-chat-outside-notification"
        )

        .on(
          "postgres_changes",
          {
            event:"INSERT",
            schema:"public",
            table:"community_messages"
          },
          payload => {

            const message =
              payload.new;

            if(!message) return;


            /*
             * Chỉ nhận các phòng Chat
             * hiện đang active.
             */

            if(
              !ttcChatNotificationRooms.has(
                String(message.room_id)
              )
            ){

              return;

            }


            /*
             * Không báo notification
             * cho chính tin nhắn mình gửi.
             */

            if(
              TTC_CHAT.user?.id &&
              String(message.user_id) ===
              String(TTC_CHAT.user.id)
            ){

              return;

            }

            /* Chat đang mở: room handler lo unread trong khung */
            if(chat.classList.contains("ttc-chat-open")){
              return;
            }

            TTC_CHAT.unread =
              Number(TTC_CHAT.unread || 0) + 1;

            showChatNotification();

          }
        )

        .subscribe();

  }catch(error){

    console.error(
      "[TTC CHAT NOTIFY]",
      error
    );

  }

}

/* ============================================================
   START
   ============================================================ */

/* Expose for Otter2 nav badge + smoke tests (same engine, no duplicate chat) */
window.TTC_CHAT = TTC_CHAT;
window.openChat = openChat;
window.closeChat = closeChat;
window.showChatNotification = showChatNotification;
window.hideChatNotification = hideChatNotification;
window.syncNavChatBadge = syncNavChatBadge;

if(
  document.readyState === "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      installChatButton();
      createFloatingButton();
      ensureNavChatBadge();

      setTimeout(
        startChatNotificationWatcher,
        1200
      );

    }
  );

}else{

  installChatButton();
  createFloatingButton();
  ensureNavChatBadge();

  setTimeout(
    startChatNotificationWatcher,
    1200
  );

}

})();

