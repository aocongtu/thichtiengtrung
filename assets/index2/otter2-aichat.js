/* Otter2 AI Chat — "Trò chuyện cùng Bé" (pilot)
   Messenger/Zalo-grade chat shell + AI speaking-practice conversation.
   - Shell: conversation list + thread (bubbles, typing, seen, voice msgs).
   - Brain: pluggable endpoint (window.OTTER2_AICHAT_CONFIG.brainEndpoint);
     ships with a built-in MOCK brain (scripted HSK1 scenarios) so the UX
     runs end-to-end before any API key exists.
   - Voice out: pre-rendered Google Cloud TTS cache for opening lines,
     optional ttsEndpoint, else browser speechSynthesis (zh-CN).
   - Voice in: Web Speech API (zh-CN) + MediaRecorder for voice bubbles.
   No inline script in index2.html is touched; this file is loaded via one
   <script defer> line, styles via otter2-aichat.css. */
(function () {
  "use strict";
  if (window.__ttcAIChat) return;

  var CONFIG = Object.assign(
    {
      brainEndpoint: "", // POST {scenario, mode, step, history, text} -> brain JSON
      ttsEndpoint: "",   // POST {text} -> audio blob (production: Supabase Edge Function)
      avatarUrl: "assets/index2/otter-full.webp",
      ttsBase: "assets/index2/aichat-tts/"
    },
    window.OTTER2_AICHAT_CONFIG || {}
  );
  window.OTTER2_AICHAT_CONFIG = CONFIG;

  /* ================= HSK1 vocabulary lock ================= */
  var WHITELIST = ["小贝", "越南", "左边", "右边", "火车站", "一共", "就", "得"];
  var SCAN_EXTRA = ["行", "嗯", "啊", "哦", "明白", "喂"];
  var hsk1Words = null; // lazy-built sorted word list for segmentation
  function buildVocab() {
    if (hsk1Words) return hsk1Words;
    var set = {};
    try {
      var all = window.OTTER2_HSK_ALL_DATA;
      if (all && Array.isArray(all.words)) {
        all.words.forEach(function (w) { if (w.hsk === 1 && w.h) set[w.h] = 1; });
      }
    } catch (e) {}
    WHITELIST.concat(SCAN_EXTRA).forEach(function (w) { set[w] = 1; });
    hsk1Words = Object.keys(set).sort(function (a, b) { return b.length - a.length; });
    return hsk1Words;
  }
  function segment(text) {
    var words = buildVocab();
    var clean = String(text || "").replace(/[\s！？。，、；：·…—「」『』""'']/g, "");
    var tokens = [], unknown = [], i = 0;
    while (i < clean.length) {
      var ch = clean[i];
      if (!/[一-鿿]/.test(ch)) { i++; continue; } // skip latin/digits
      var hit = null;
      for (var k = 0; k < words.length; k++) {
        if (clean.indexOf(words[k], i) === i) { hit = words[k]; break; }
      }
      if (hit) { tokens.push(hit); i += hit.length; }
      else { unknown.push(ch); tokens.push(ch); i++; }
    }
    return { tokens: tokens, unknown: unknown };
  }
  function vocabScan(text) {
    try {
      var all = window.OTTER2_HSK_ALL_DATA;
      if (!all || !Array.isArray(all.words)) return null; // data not loaded -> skip honestly
      var r = segment(text);
      var uniq = [];
      r.unknown.forEach(function (c) { if (uniq.indexOf(c) < 0) uniq.push(c); });
      return uniq.slice(0, 4);
    } catch (e) { return null; }
  }

  /* ================= Scenario scripts (all Bé lines verified 100% HSK1) ================= */
  function L(zh, py, vi) { return { zh: zh, py: py, vi: vi }; }
  var FALLBACK = L("对不起，我没有听见。", "Duìbuqǐ, wǒ méiyǒu tīngjiàn.", "Xin lỗi, Bé chưa nghe rõ.");
  var SCENARIOS = {
    intro: {
      icon: "👋", name: "Gặp gỡ & tự giới thiệu", short: "你好 · giới thiệu tên, quốc tịch",
      steps: [
        {
          prompt: [L("你好！我是小贝。我是你的中文老师。你叫什么名字？", "Nǐ hǎo! Wǒ shì Xiǎobèi. Wǒ shì nǐ de Zhōngwén lǎoshī. Nǐ jiào shénme míngzi?", "Chào bạn! Mình là Tiểu Bối, thầy tiếng Trung của bạn. Bạn tên là gì?")],
          tts: "open-intro.mp3",
          good: /我叫|我的名字是|我名字叫|名字是/,
          trap: { re: /我是|我名/, model: "我叫 + tên của bạn", note: "Giới thiệu tên mình nói 我叫…… (Wǒ jiào…). Ví dụ: 我叫小天。" },
          model: "我叫 + tên của bạn", chips: ["我叫小天。"]
        },
        {
          prompt: [L("认识你很高兴！你是哪国人？", "Rènshi nǐ hěn gāoxìng! Nǐ shì nǎ guó rén?", "Rất vui được gặp bạn! Bạn là người nước nào?")],
          good: /我是.+人|越南|中国/,
          trap: { re: /我越南|我中国|我是越|我是中/, model: "我是越南人。", note: "Nói quốc tịch: 我是 + tên nước + 人. Đừng quên chữ 人 ở cuối nhé." },
          model: "我是越南人。", chips: ["我是越南人。", "我是中国人。"]
        },
        {
          prompt: [L("你是学生吗？", "Nǐ shì xuéshēng ma?", "Bạn là học sinh phải không?")],
          good: /是学生|不是学生|我工作|上班|我是老师/,
          trap: { re: /我学生/, model: "我是学生。", note: "Đừng quên chữ 是： 我是学生 (Mình là học sinh)." },
          model: "我是学生。", chips: ["我是学生。", "我不是学生，我工作。"]
        },
        {
          prompt: [L("你喜欢汉语吗？", "Nǐ xǐhuan Hànyǔ ma?", "Bạn có thích tiếng Trung không?")],
          good: /喜欢|不喜欢/,
          model: "我很喜欢汉语。", chips: ["我很喜欢汉语。", "我喜欢汉语。"]
        },
        {
          prompt: [L("我也喜欢汉语！你今天说得很好。谢谢你，再见！", "Wǒ yě xǐhuan Hànyǔ! Nǐ jīntiān shuō de hěn hǎo. Xièxie nǐ, zàijiàn!", "Mình cũng thích tiếng Trung! Hôm nay bạn nói rất tốt. Cảm ơn bạn, tạm biệt!")],
          done: true
        }
      ]
    },
    food: {
      icon: "🍜", name: "Gọi món ăn", short: "在饭店 · gọi món, đồ uống, tính tiền",
      steps: [
        {
          prompt: [L("你好！这里是饭店。你想吃什么？", "Nǐ hǎo! Zhèlǐ shì fàndiàn. Nǐ xiǎng chī shénme?", "Chào bạn! Đây là nhà hàng. Bạn muốn ăn gì?")],
          tts: "open-food.mp3",
          good: /吃|米饭|面条|包子|饺子|鸡蛋/,
          trap: { re: /给我/, model: "我想吃包子。", note: "Gọi món lịch sự mình nói 我想吃…… (Mình muốn ăn…) nhé." },
          model: "我想吃包子。", chips: ["我想吃包子。", "我想吃米饭。", "我想吃饺子。"]
        },
        {
          prompt: [L("好。你想喝什么？我们有水、茶和牛奶。", "Hǎo. Nǐ xiǎng hē shénme? Wǒmen yǒu shuǐ, chá hé niúnǎi.", "Được. Bạn muốn uống gì? Ở đây có nước, trà và sữa.")],
          good: /喝|水|茶|牛奶/,
          trap: { re: /我要水|我要茶|我水|我茶/, model: "我想喝水。", note: "Muốn uống gì thì nói 我想喝…… nhé." },
          model: "我想喝水。", chips: ["我想喝水。", "我想喝茶。", "我想喝牛奶。"]
        },
        {
          prompt: [L("好的。你还要什么？", "Hǎo de. Nǐ hái yào shénme?", "Vâng. Bạn còn muốn gì nữa không?")],
          good: /不要|没有|不用|谢谢|还要|再要|再来/,
          model: "不要了，谢谢。", chips: ["不要了，谢谢。"]
        },
        {
          prompt: [L("好。一共二十五块。谢谢！", "Hǎo. Yí gòng èrshíwǔ kuài. Xièxie!", "Vâng. Tất cả là 25 tệ. Cảm ơn bạn!")],
          good: /给|钱|好|谢谢|可以/,
          model: "给你钱。", chips: ["给你钱。", "好的，谢谢。"]
        },
        {
          prompt: [L("不客气！再见！", "Bú kèqi! Zàijiàn!", "Không có gì! Tạm biệt bạn!")],
          done: true
        }
      ]
    },
    shop: {
      icon: "🛍️", name: "Mua sắm & hỏi giá", short: "在商店 · hỏi giá, mặc cả, mua áo",
      steps: [
        {
          prompt: [L("你好！这件衣服很好看。你想买吗？", "Nǐ hǎo! Zhè jiàn yīfu hěn hǎokàn. Nǐ xiǎng mǎi ma?", "Chào bạn! Chiếc áo này rất đẹp. Bạn muốn mua không?")],
          tts: "open-shop.mp3",
          good: /多少钱|多少|买|看看|想/,
          trap: { re: /多少元|几块/, model: "这件衣服多少钱？", note: "Hỏi giá mình dùng 多少钱 (bao nhiêu tiền) nhé." },
          model: "这件衣服多少钱？", chips: ["这件衣服多少钱？", "我想买。"]
        },
        {
          prompt: [L("这件衣服一百块。你觉得怎么样？", "Zhè jiàn yīfu yì bǎi kuài. Nǐ juéde zěnmeyàng?", "Chiếc áo này 100 tệ. Bạn thấy thế nào?")],
          good: /贵|便宜|我买|可以|很好|好看/,
          trap: null,
          model: "太贵了，便宜一点儿可以吗？", chips: ["太贵了，便宜一点儿可以吗？", "很好，我买。"],
          goto: function (text) { return /我买|很好|好看/.test(text) ? 3 : 2; }
        },
        {
          prompt: [L("九十块，可以吗？", "Jiǔshí kuài, kěyǐ ma?", "90 tệ, được không bạn?")],
          good: /好|可以|买|行/,
          model: "好，我买。", chips: ["好，我买。", "可以。"]
        },
        {
          prompt: [L("好，给你。谢谢！", "Hǎo, gěi nǐ. Xièxie!", "Được, áo của bạn đây. Cảm ơn bạn!")],
          done: true
        }
      ]
    },
    dir: {
      icon: "🧭", name: "Hỏi đường", short: "问路 · trường học, bệnh viện, ga tàu",
      steps: [
        {
          prompt: [L("你好！你去哪儿？", "Nǐ hǎo! Nǐ qù nǎr?", "Chào bạn! Bạn đang đi đâu thế?")],
          tts: "open-dir.mp3",
          good: /学校|医院|火车站|商店|超市/,
          trap: { re: /^我去|我去.+/, model: "我想去学校。", note: "Thêm 想 sẽ tự nhiên hơn: 我想去…… (Mình muốn đi…)." },
          model: "我想去学校。",
          chips: ["我想去学校。", "我想去医院。", "我想去火车站。", "我想去商店。"],
          goto: function (text) {
            if (/医院/.test(text)) return 2;
            if (/火车站/.test(text)) return 3;
            if (/商店|超市/.test(text)) return 4;
            return 1;
          }
        },
        {
          prompt: [L("学校在前边。你去前边，左边就是学校。五分钟就到。", "Xuéxiào zài qiánbian. Nǐ qù qiánbian, zuǒbian jiù shì xuéxiào. Wǔ fēnzhōng jiù dào.", "Trường ở phía trước. Bạn đi lên trước, bên trái chính là trường. Năm phút là tới.")],
          good: /知道|谢谢|好|明白/,
          model: "我知道了，谢谢你！", chips: ["我知道了，谢谢你！"]
        },
        {
          prompt: [L("医院在前边。你去前边，右边就是医院。五分钟就到。", "Yīyuàn zài qiánbian. Nǐ qù qiánbian, yòubian jiù shì yīyuàn. Wǔ fēnzhōng jiù dào.", "Bệnh viện ở phía trước, bên phải chính là bệnh viện. Năm phút là tới.")],
          good: /知道|谢谢|好|明白/,
          model: "我知道了，谢谢你！", chips: ["我知道了，谢谢你！"]
        },
        {
          prompt: [L("火车站在前边。你去前边，左边就是火车站。十分钟就到。", "Huǒchēzhàn zài qiánbian. Nǐ qù qiánbian, zuǒbian jiù shì huǒchēzhàn. Shí fēnzhōng jiù dào.", "Ga tàu ở phía trước, bên trái chính là ga. Mười phút là tới.")],
          good: /知道|谢谢|好|明白/,
          model: "我知道了，谢谢你！", chips: ["我知道了，谢谢你！"]
        },
        {
          prompt: [L("商店在前边。你去前边，右边就是商店。五分钟就到。", "Shāngdiàn zài qiánbian. Nǐ qù qiánbian, yòubian jiù shì shāngdiàn. Wǔ fēnzhōng jiù dào.", "Cửa hàng ở phía trước, bên phải chính là cửa hàng. Năm phút là tới.")],
          good: /知道|谢谢|好|明白/,
          model: "我知道了，谢谢你！", chips: ["我知道了，谢谢你！"]
        },
        {
          prompt: [L("不客气！再见！", "Bú kèqi! Zàijiàn!", "Không có gì! Tạm biệt bạn!")],
          done: true
        }
      ]
    }
  };
  var SCEN_ORDER = ["intro", "food", "shop", "dir"];
  var LOBBY_LINE = L("你好！我是小贝。你想学习什么？", "Nǐ hǎo! Wǒ shì Xiǎobèi. Nǐ xiǎng xuéxí shénme?", "Chào bạn! Mình là Tiểu Bối. Hôm nay bạn muốn luyện tình huống nào?");

  /* ================= Lobby free-text brain (fix1) =================
     Free text in the lobby is understood three ways, in order:
     1) small talk (greetings / classic HSK1 exchanges) -> a varied reply,
     2) a practice intent (Vietnamese / Chinese / tone-free pinyin)
        -> jump straight into that scenario,
     3) anything else -> a rotating soft suggestion.
     No Bé line is ever sent twice in a row (see the guard in addBeMessage). */
  var FALLBACKS = [
    FALLBACK,
    L("对不起，我没有听明白。", "Duìbuqǐ, wǒ méiyǒu tīng míngbai.", "Xin lỗi, Bé chưa nghe rõ."),
    L("对不起，我没有听见。你说什么？", "Duìbuqǐ, wǒ méiyǒu tīngjiàn. Nǐ shuō shénme?", "Xin lỗi, Bé chưa nghe thấy. Bạn nói gì thế?")
  ];
  var GUARD_POOL = [
    L("好，我听你说。", "Hǎo, wǒ tīng nǐ shuō.", "Được, Bé nghe bạn nói đây."),
    L("好。你想说什么？", "Hǎo. Nǐ xiǎng shuō shénme?", "Được. Bạn muốn nói gì nào?"),
    L("我们说汉语，好吗？", "Wǒmen shuō Hànyǔ, hǎo ma?", "Mình nói tiếng Trung nhé, được không?")
  ];
  var LOBBY_SOFT = [
    L("好！你想学什么？", "Hǎo! Nǐ xiǎng xué shénme?", "Được! Bạn muốn học gì nào? Gõ điều bạn muốn luyện, hoặc chọn một tình huống bên dưới nhé."),
    L("好。你想学习什么？", "Hǎo. Nǐ xiǎng xuéxí shénme?", "Được. Bạn muốn học gì nào?"),
    L("没关系。我们说汉语，好吗？", "Méi guānxi. Wǒmen shuō Hànyǔ, hǎo ma?", "Không sao. Mình nói tiếng Trung nhé, được không?")
  ];
  var SMALLTALK_POOLS = {
    greet: [
      L("你好！见到你很高兴。", "Nǐ hǎo! Jiàn dào nǐ hěn gāoxìng.", "Chào bạn! Gặp bạn mình rất vui."),
      L("你好！你今天怎么样？", "Nǐ hǎo! Nǐ jīntiān zěnmeyàng?", "Chào bạn! Hôm nay bạn thế nào?"),
      L("你好！我们学习汉语吧。", "Nǐ hǎo! Wǒmen xuéxí Hànyǔ ba.", "Chào bạn! Mình học tiếng Trung nhé.")
    ],
    how: [
      L("我很好，谢谢！你呢？", "Wǒ hěn hǎo, xièxie! Nǐ ne?", "Mình rất khỏe, cảm ơn! Còn bạn?"),
      L("我很好！你怎么样？", "Wǒ hěn hǎo! Nǐ zěnmeyàng?", "Mình rất khỏe! Bạn thế nào?")
    ],
    name: [
      L("我叫小贝。你叫什么名字？", "Wǒ jiào Xiǎobèi. Nǐ jiào shénme míngzi?", "Mình là Tiểu Bối. Bạn tên là gì?"),
      L("我的名字是小贝。你呢？", "Wǒ de míngzi shì Xiǎobèi. Nǐ ne?", "Tên mình là Tiểu Bối. Còn bạn?")
    ],
    country: [
      L("我是小贝，我是你的中文老师。你是哪国人？", "Wǒ shì Xiǎobèi, wǒ shì nǐ de Zhōngwén lǎoshī. Nǐ shì nǎ guó rén?", "Mình là Tiểu Bối, thầy tiếng Trung của bạn. Bạn là người nước nào?"),
      L("我是小贝！你是哪国人？", "Wǒ shì Xiǎobèi! Nǐ shì nǎ guó rén?", "Mình là Tiểu Bối! Bạn là người nước nào?")
    ],
    han: [
      L("我很喜欢汉语！你喜欢汉语吗？", "Wǒ hěn xǐhuan Hànyǔ! Nǐ xǐhuan Hànyǔ ma?", "Mình rất thích tiếng Trung! Bạn có thích tiếng Trung không?"),
      L("我喜欢汉语，我天天说汉语。", "Wǒ xǐhuan Hànyǔ, wǒ tiāntiān shuō Hànyǔ.", "Mình thích tiếng Trung, ngày nào mình cũng nói tiếng Trung.")
    ],
    thanks: [
      L("不客气！", "Bú kèqi!", "Không có gì!"),
      L("不客气。你说得很好！", "Bú kèqi. Nǐ shuō de hěn hǎo!", "Không có gì. Bạn nói tốt lắm!")
    ],
    noproblem: [
      L("好，谢谢你！", "Hǎo, xièxie nǐ!", "Ừ, cảm ơn bạn!"),
      L("好！我们学习吧。", "Hǎo! Wǒmen xuéxí ba.", "Ừ! Mình học nhé.")
    ],
    bye: [
      L("再见！明天见。", "Zàijiàn! Míngtiān jiàn.", "Tạm biệt! Mai gặp nhé."),
      L("再见！你今天说得很好。", "Zàijiàn! Nǐ jīntiān shuō de hěn hǎo.", "Tạm biệt! Hôm nay bạn nói rất tốt.")
    ],
    good: [
      L("很好！我很高兴。你想学习什么？", "Hěn hǎo! Wǒ hěn gāoxìng. Nǐ xiǎng xuéxí shénme?", "Tốt quá! Mình rất vui. Bạn muốn học gì nào?"),
      L("太好了！我们学习吧。", "Tài hǎo le! Wǒmen xuéxí ba.", "Tuyệt quá! Mình học nhé.")
    ]
  };
  var talkRot = {};
  function pickRot(key, pool) {
    var i = talkRot[key] || 0;
    talkRot[key] = i + 1;
    return pool[i % pool.length];
  }
  function flatText(s) {
    return String(s || "").toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "").replace(/\u0111/g, "d");
  }
  function flatHas(flat, phrase) {
    var esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp("(^|[^a-z])" + esc + "([^a-z]|$)").test(flat);
  }
  function smallTalkReply(text) {
    var raw = String(text || "").trim().replace(/[！!。.？?~～、，,\s]+$/, "");
    var flat = flatText(raw);
    if (/^(你好|您好)$/.test(raw)) return pickRot("greet", SMALLTALK_POOLS.greet);
    if (raw.indexOf("你好吗") >= 0 || raw.indexOf("你怎么样") >= 0 || raw.indexOf("你最近怎么样") >= 0) return pickRot("how", SMALLTALK_POOLS.how);
    if (raw.indexOf("你叫什么名字") >= 0 || raw.indexOf("你的名字是什么") >= 0) return pickRot("name", SMALLTALK_POOLS.name);
    if (raw.indexOf("你是哪国人") >= 0 || raw.indexOf("你是哪个国家的人") >= 0) return pickRot("country", SMALLTALK_POOLS.country);
    if (raw.indexOf("你学汉语吗") >= 0 || raw.indexOf("你喜欢汉语吗") >= 0 || raw.indexOf("你会说汉语吗") >= 0 || raw.indexOf("你会不会说汉语") >= 0) return pickRot("han", SMALLTALK_POOLS.han);
    if (raw.indexOf("谢谢") >= 0 && raw.length <= 8) return pickRot("thanks", SMALLTALK_POOLS.thanks);
    if (raw.indexOf("没关系") >= 0 && raw.length <= 8) return pickRot("noproblem", SMALLTALK_POOLS.noproblem);
    if (/^(再见|拜拜)/.test(raw)) return pickRot("bye", SMALLTALK_POOLS.bye);
    if (raw.indexOf("我很好") >= 0 && raw.indexOf("吗") < 0) return pickRot("good", SMALLTALK_POOLS.good);
    if (/^(chao|xin chao|hi|hello|alo|hey|chao be|chao ban)$/.test(flat)) return pickRot("greet", SMALLTALK_POOLS.greet);
    return null;
  }
  function lobbyIntent(text) {
    var raw = String(text || "");
    var flat = flatText(raw);
    function has() { for (var i = 0; i < arguments.length; i++) if (flatHas(flat, arguments[i])) return true; return false; }
    function hasZh() { for (var i = 0; i < arguments.length; i++) if (raw.indexOf(arguments[i]) >= 0) return true; return false; }
    /* Vietnamese topics (diacritic-free matching, word-boundaried) */
    if (has("chao hoi", "gioi thieu", "tu gioi thieu", "hoc ten", "cai ten", "hoi ten", "lam quen")) return "intro";
    if (has("goi mon", "mon an", "an uong", "nha hang", "doi bung", "an gi", "uong gi", "an com", "hoc an", "an mi", "an pho", "an banh")) return "food";
    if (has("mua sam", "mua do", "hoi gia", "bao tien", "bao nhieu tien", "bao nhieu", "mac ca", "dat qua", "cai ao", "quan ao", "mua ao")) return "shop";
    if (has("hoi duong", "duong di", "di dau", "o dau", "loi di", "ga tau", "benh vien", "truong hoc", "di xe")) return "dir";
    /* the learner starts introducing themself -> straight into scenario 1 */
    if (/^我叫/.test(raw.trim()) || /我是.+人/.test(raw)) return "intro";
    /* Chinese topics */
    if (hasZh("介绍")) return "intro";
    if (hasZh("吃", "喝", "饭店", "点菜", "菜单", "饿")) return "food";
    if (hasZh("去", "在哪", "怎么走", "学校", "医院", "火车站", "路")) return "dir";
    if (hasZh("多少钱", "买", "贵", "便宜", "衣服")) return "shop";
    /* tone-free pinyin */
    if (has("jieshao", "mingzi")) return "intro";
    if (has("dian cai", "chi fan")) return "food";
    if (has("duoshao qian")) return "shop";
    if (has("zenme zou", "zai nar", "qu nar")) return "dir";
    return null;
  }

  /* ================= Mock brain ================= */
  function mockBrain(state, text) {
    var scen = SCENARIOS[state.scenId];
    var step = scen.steps[state.stepIdx];
    if (!step || step.done) return { lines: [], done: true };
    var isTrap = step.trap && step.trap.re.test(text);
    var isGood = step.good && step.good.test(text);
    var correction = null;
    if (state.mode === "teacher") {
      if (isTrap) {
        correction = { title: "✏️ Bé sửa giúp bạn", userText: text, right: step.trap.model, note: step.trap.note };
      } else if (!isGood) {
        var unk = vocabScan(text);
        if (unk && unk.length) {
          correction = { title: "📚 Từ ngoài HSK1", userText: text, right: step.model, note: "Chữ " + unk.join("、") + " chưa có trong HSK1. Mình nói thế này nhé: " + step.model };
        } else {
          correction = { title: "✏️ Bé sửa giúp bạn", userText: text, right: step.model, note: "Mình nói thế này sẽ đúng và tự nhiên hơn nhé." };
        }
      }
    }
    if (isGood || isTrap) {
      var next = typeof step.goto === "function" ? step.goto(text) : state.stepIdx + 1;
      return { advanceTo: next, correction: correction, praise: state.mode === "teacher" && isGood && !isTrap };
    }
    // no match
    if (state.mode === "teacher" && correction) {
      return { advanceTo: null, correction: correction, retry: true };
    }
    return { advanceTo: null, retry: true };
  }

  async function brainRespond(state, text, history) {
    if (CONFIG.brainEndpoint) {
      try {
        var res = await fetch(CONFIG.brainEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ scenario: state.scenId, mode: state.mode, step: state.stepIdx, text: text, history: history })
        });
        if (res.ok) return await res.json();
      } catch (e) { /* fall through to mock */ }
    }
    return mockBrain(state, text);
  }

  /* ================= Voice out ================= */
  var currentAudio = null;
  function stopSpeak() {
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
  }
  function speak(zh, ttsFile) {
    stopSpeak();
    if (ttsFile) {
      var src = (window.OTTER2_AICHAT_TTS_B64 && window.OTTER2_AICHAT_TTS_B64[ttsFile]) || (CONFIG.ttsBase + ttsFile);
      var a = new Audio(src);
      currentAudio = a;
      a.play().catch(function () { speakBrowser(zh); });
      return;
    }
    if (CONFIG.ttsEndpoint) {
      fetch(CONFIG.ttsEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: zh }) })
        .then(function (r) { return r.blob(); })
        .then(function (b) {
          var a = new Audio(URL.createObjectURL(b));
          currentAudio = a; a.play().catch(function () {});
        })
        .catch(function () { speakBrowser(zh); });
      return;
    }
    speakBrowser(zh);
  }
  function speakBrowser(zh) {
    try {
      if (!window.speechSynthesis) return;
      var u = new SpeechSynthesisUtterance(zh);
      u.lang = "zh-CN"; u.rate = 0.92;
      var voices = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < voices.length; i++) {
        if (/^zh/i.test(voices[i].lang)) { u.voice = voices[i]; break; }
      }
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  /* ================= Persistent prefs ================= */
  var LS_KEY = "otter2_aichat_v1";
  var store = { mode: "chat", progress: {}, lastPreview: "", lastTime: "" };
  try {
    var raw = localStorage.getItem(LS_KEY);
    if (raw) store = Object.assign(store, JSON.parse(raw));
  } catch (e) {}
  function saveStore() { try { localStorage.setItem(LS_KEY, JSON.stringify(store)); } catch (e) {} }

  /* ================= Avatar: use the guide's own image (fix1) =================
     The old file path (assets/index2/otter-full.webp) is not part of the
     deployed text-only bundle set, so it 404s on the live site and iOS shows
     a "?" placeholder. The guide (otter2-guide.js) ships Bé as an embedded
     data-URI and renders it in #guideRoam — read the avatar from there so
     the chat always shows the very same Bé (and follows the Nam/Nữ toggle). */
  var FALLBACK_AVA = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><circle cx="48" cy="48" r="48" fill="#f0fdfa"/><text x="48" y="67" font-size="50" text-anchor="middle">🦦</text></svg>');
  var avatarSrc = null;
  function currentAvatarSrc() { return avatarSrc || CONFIG.avatarUrl; }
  function avaImg(cls, alt) {
    var img = document.createElement("img");
    if (cls) img.className = cls;
    img.alt = alt || "";
    img.classList.add("aichat-ava");
    img.dataset.avaSrc = currentAvatarSrc();
    img.src = currentAvatarSrc();
    img.addEventListener("error", function () {
      if (img.src !== FALLBACK_AVA) { img.dataset.avaSrc = FALLBACK_AVA; img.src = FALLBACK_AVA; }
    });
    return img;
  }
  function applyAvatar(src) {
    document.querySelectorAll("img.aichat-ava").forEach(function (img) {
      if (img.dataset.avaSrc !== src) { img.dataset.avaSrc = src; img.src = src; }
    });
  }
  function guideAvatarImg() {
    return document.querySelector("#guideRoam img") ||
           document.querySelector("#guideOtterBtn img") ||
           document.querySelector(".guide-head img");
  }
  var avatarObserver = null;
  function watchGuideAvatar() {
    if (avatarObserver || !window.MutationObserver) return;
    var img = guideAvatarImg();
    if (!img) return;
    avatarObserver = new MutationObserver(function () { resolveAvatar(); });
    avatarObserver.observe(img, { attributes: true, attributeFilter: ["src"] });
  }
  function resolveAvatar() {
    var img = guideAvatarImg();
    if (img && img.src) {
      if (img.src !== avatarSrc) { avatarSrc = img.src; applyAvatar(avatarSrc); }
      watchGuideAvatar();
      return true;
    }
    return false;
  }
  function startAvatarResolution() {
    if (resolveAvatar()) return;
    var tries = 0;
    var poll = setInterval(function () {
      tries++;
      if (resolveAvatar() || tries > 30) clearInterval(poll);
    }, 500);
  }

  /* ================= Scroll lock + viewport fit (fix1) ================= */
  var scrollLock = null;
  function lockBodyScroll() {
    if (scrollLock) return;
    var b = document.body, h = document.documentElement;
    scrollLock = {
      y: window.scrollY || window.pageYOffset || 0,
      bPos: b.style.position, bTop: b.style.top, bLeft: b.style.left,
      bRight: b.style.right, bWidth: b.style.width, bOverflow: b.style.overflow,
      hOverflow: h.style.overflow
    };
    h.classList.add("aichat-locked"); b.classList.add("aichat-locked");
    b.style.overflow = "hidden";
    b.style.position = "fixed";
    b.style.top = (-scrollLock.y) + "px";
    b.style.left = "0"; b.style.right = "0"; b.style.width = "100%";
  }
  function unlockBodyScroll() {
    if (!scrollLock) return;
    var b = document.body, h = document.documentElement, s = scrollLock;
    scrollLock = null;
    b.style.position = s.bPos; b.style.top = s.bTop; b.style.left = s.bLeft;
    b.style.right = s.bRight; b.style.width = s.bWidth; b.style.overflow = s.bOverflow;
    h.style.overflow = s.hOverflow;
    h.classList.remove("aichat-locked"); b.classList.remove("aichat-locked");
    window.scrollTo(0, s.y);
  }
  function fitPanel() {
    if (!panel || !panel.classList.contains("open")) return;
    if (window.innerWidth > 767) { panel.style.height = ""; panel.style.top = ""; return; }
    var vv = window.visualViewport;
    if (!vv) return;
    panel.style.height = vv.height + "px";
    panel.style.top = vv.offsetTop + "px";
  }
  var vvBound = false;
  function bindViewport() {
    if (vvBound || !window.visualViewport) return;
    vvBound = true;
    window.visualViewport.addEventListener("resize", fitPanel);
    window.visualViewport.addEventListener("scroll", fitPanel);
  }

  /* ================= DOM build ================= */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var launcher, panel, listView, threadView, listContent, skeleton, listEmpty, searchInput;
  var msgBox, chipsBox, inputEl, sendBtn, micBtn, emojiBtn, emojiPop, recBar, toastEl, newPill;
  var threadStatus, scenChip, progressBox, modeToggle;
  var firstOpen = true;

  function buildUI() {
    launcher = el("button", null);
    launcher.id = "aichatLauncher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Trò chuyện cùng Bé");
    var li = avaImg(null, "Bé");
    var lt = el("span", null, "Trò chuyện cùng Bé");
    var dot = el("span", "aichat-launcher-dot", "1");
    launcher.appendChild(li); launcher.appendChild(lt); launcher.appendChild(dot);
    launcher.classList.add("has-unread");
    launcher.addEventListener("click", togglePanel);
    document.body.appendChild(launcher);

    panel = el("div", null);
    panel.id = "aichatPanel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Trò chuyện cùng Bé");
    document.body.appendChild(panel);

    buildListView();
    buildThreadView();
    startAvatarResolution();
  }

  function buildListView() {
    listView = el("section", "aichat-view");
    listView.id = "aichatListView";
    var head = el("div", "aichat-head");
    var hwrap = el("div", null);
    var h2 = el("h2", null, "Trò chuyện");
    var sub = el("div", "aichat-head-sub", "Luyện nói tiếng Trung cùng Bé · HSK1");
    hwrap.appendChild(h2); hwrap.appendChild(sub);
    var spacer = el("div", "aichat-head-spacer");
    var close = el("button", "aichat-icon-btn", "✕");
    close.type = "button"; close.setAttribute("aria-label", "Đóng");
    close.addEventListener("click", closePanel);
    head.appendChild(hwrap); head.appendChild(spacer); head.appendChild(close);
    listView.appendChild(head);

    var searchWrap = el("div", "aichat-search");
    searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "🔍 Tìm cuộc trò chuyện…";
    searchInput.addEventListener("input", filterList);
    searchWrap.appendChild(searchInput);
    listView.appendChild(searchWrap);

    var scroll = el("div", "aichat-list-scroll");
    skeleton = el("div", "aichat-skeleton");
    for (var i = 0; i < 3; i++) {
      var row = el("div", "aichat-skel-row");
      var c = el("div", "aichat-skel-circle aichat-shimmer");
      var lines = el("div", null);
      lines.style.flex = "1";
      var l1 = el("div", "aichat-skel-line aichat-shimmer"); l1.style.width = "55%";
      var l2 = el("div", "aichat-skel-line aichat-shimmer"); l2.style.width = "85%";
      lines.appendChild(l1); lines.appendChild(l2);
      row.appendChild(c); row.appendChild(lines);
      skeleton.appendChild(row);
    }
    scroll.appendChild(skeleton);

    listContent = el("div", null);
    listContent.style.display = "none";
    scroll.appendChild(listContent);

    listEmpty = el("div", "aichat-empty");
    listEmpty.style.display = "none";
    var ei = avaImg(null, "");
    var es = el("strong", null, "Không tìm thấy cuộc trò chuyện nào");
    var ep = el("p", null, "Thử gõ từ khóa khác nhé — Bé và 4 tình huống HSK1 luôn ở đây chờ bạn.");
    listEmpty.appendChild(ei); listEmpty.appendChild(es); listEmpty.appendChild(ep);
    scroll.appendChild(listEmpty);

    listView.appendChild(scroll);
    panel.appendChild(listView);
    renderList();
  }

  function renderList() {
    listContent.innerHTML = "";
    var label1 = el("div", "aichat-section-label", "Trò chuyện với Bé");
    listContent.appendChild(label1);

    var be = el("button", "aichat-convo");
    be.type = "button";
    be.dataset.search = "bé trò chuyện luyện nói ai";
    var av = el("div", "aichat-avatar");
    var img = avaImg(null, "Bé");
    var on = el("span", "aichat-online");
    av.appendChild(img); av.appendChild(on);
    var main = el("div", "aichat-convo-main");
    var nm = el("div", "aichat-convo-name");
    nm.appendChild(el("span", null, "Bé — Thầy tiếng Trung"));
    var tag = el("span", "aichat-ai-tag", "AI");
    nm.appendChild(tag);
    var pv = el("div", "aichat-convo-preview", store.lastPreview || "Bạn muốn luyện tình huống nào hôm nay?");
    pv.id = "aichatBePreview";
    main.appendChild(nm); main.appendChild(pv);
    var side = el("div", "aichat-convo-side");
    side.appendChild(el("span", "aichat-convo-time", store.lastTime || "Đang hoạt động"));
    be.appendChild(av); be.appendChild(main); be.appendChild(side);
    be.addEventListener("click", function () { openThread(null); });
    listContent.appendChild(be);

    var label2 = el("div", "aichat-section-label", "Tình huống luyện nói · HSK1");
    listContent.appendChild(label2);
    SCEN_ORDER.forEach(function (id) {
      var s = SCENARIOS[id];
      var st = store.progress[id];
      var rowBtn = el("button", "aichat-convo");
      rowBtn.type = "button";
      rowBtn.dataset.search = (s.name + " " + s.short).toLowerCase();
      var ic = el("div", "aichat-scen-icon", s.icon);
      var m = el("div", "aichat-convo-main");
      m.appendChild(el("div", "aichat-convo-name", s.name));
      m.appendChild(el("div", "aichat-convo-preview", s.short));
      var sd = el("div", "aichat-convo-side");
      var stEl = el("span", "aichat-convo-time",
        st === "done" ? "Đã xong ✓" : st === "doing" ? "Đang học…" : "Chưa học");
      if (st === "done") stEl.classList.add("aichat-status-done");
      if (st === "doing") stEl.classList.add("aichat-status-doing");
      sd.appendChild(stEl);
      rowBtn.appendChild(ic); rowBtn.appendChild(m); rowBtn.appendChild(sd);
      rowBtn.addEventListener("click", function () { openThread(id); });
      listContent.appendChild(rowBtn);
    });
  }

  function filterList() {
    var q = (searchInput.value || "").trim().toLowerCase();
    var any = false;
    listContent.querySelectorAll(".aichat-convo").forEach(function (row) {
      var show = !q || (row.dataset.search || "").indexOf(q) >= 0;
      row.style.display = show ? "" : "none";
      if (show) any = true;
    });
    listEmpty.style.display = any ? "none" : "";
  }

  function buildThreadView() {
    threadView = el("section", "aichat-view");
    threadView.id = "aichatThreadView";

    var head = el("div", "aichat-head aichat-thread-head");
    var back = el("button", "aichat-icon-btn", "‹");
    back.type = "button"; back.setAttribute("aria-label", "Quay lại danh sách");
    back.style.fontSize = "22px";
    back.addEventListener("click", showList);
    var av = el("div", "aichat-avatar");
    var img = avaImg(null, "Bé");
    av.appendChild(img);
    var twrap = el("div", null);
    twrap.appendChild(el("div", "aichat-thread-name", "Bé — Thầy tiếng Trung"));
    threadStatus = el("div", "aichat-thread-status");
    var od = el("span", "aichat-online-dot");
    threadStatus.appendChild(od);
    threadStatus.appendChild(el("span", null, "Đang hoạt động"));
    twrap.appendChild(threadStatus);
    var restart = el("button", "aichat-icon-btn", "↺");
    restart.type = "button"; restart.title = "Nói lại từ đầu";
    restart.setAttribute("aria-label", "Nói lại từ đầu");
    restart.addEventListener("click", function () { if (thread.scenId) startScenario(thread.scenId, true); });
    var close = el("button", "aichat-icon-btn", "✕");
    close.type = "button"; close.setAttribute("aria-label", "Đóng");
    close.addEventListener("click", closePanel);
    head.appendChild(back); head.appendChild(av); head.appendChild(twrap);
    head.appendChild(el("div", "aichat-head-spacer"));
    head.appendChild(restart); head.appendChild(close);
    threadView.appendChild(head);

    var ctx = el("div", "aichat-context-bar");
    scenChip = el("span", "aichat-scen-chip", "Sảnh chờ");
    progressBox = el("div", "aichat-progress");
    modeToggle = el("div", "aichat-mode-toggle");
    var mChat = el("button", null, "💬 Hội thoại");
    mChat.type = "button"; mChat.dataset.mode = "chat";
    var mTeach = el("button", null, "✏️ Thầy sửa");
    mTeach.type = "button"; mTeach.dataset.mode = "teacher";
    [mChat, mTeach].forEach(function (b) {
      b.addEventListener("click", function () { setMode(b.dataset.mode); });
      modeToggle.appendChild(b);
    });
    ctx.appendChild(scenChip); ctx.appendChild(progressBox); ctx.appendChild(modeToggle);
    threadView.appendChild(ctx);

    var msgWrap = el("div", null);
    msgWrap.style.position = "relative";
    msgWrap.style.flex = "1";
    msgWrap.style.display = "flex";
    msgWrap.style.minHeight = "0";
    msgBox = el("div", "aichat-messages");
    msgBox.id = "aichatMessages";
    msgBox.addEventListener("scroll", function () {
      var nearBottom = msgBox.scrollHeight - msgBox.scrollTop - msgBox.clientHeight < 90;
      if (nearBottom) newPill.classList.remove("show");
    });
    newPill = el("button", "aichat-newpill", "↓ Tin nhắn mới");
    newPill.type = "button";
    newPill.addEventListener("click", function () { scrollBottom(true); });
    msgWrap.appendChild(msgBox); msgWrap.appendChild(newPill);
    threadView.appendChild(msgWrap);

    chipsBox = el("div", "aichat-chips");
    chipsBox.id = "aichatChips";
    threadView.appendChild(chipsBox);

    recBar = el("div", "aichat-recbar");
    var rd = el("span", "aichat-rec-dot");
    var rt = el("span", null, "Đang nghe… bạn nói tiếng Trung đi");
    var rStop = el("button", null, "■ Dừng");
    rStop.type = "button";
    rStop.addEventListener("click", stopRecording);
    recBar.appendChild(rd); recBar.appendChild(rt); recBar.appendChild(rStop);
    threadView.appendChild(recBar);

    var composer = el("div", "aichat-composer");
    emojiBtn = el("button", "aichat-comp-btn", "😊");
    emojiBtn.type = "button"; emojiBtn.title = "Emoji";
    emojiBtn.setAttribute("aria-label", "Chèn emoji");
    var inputWrap = el("div", "aichat-input-wrap");
    inputEl = document.createElement("textarea");
    inputEl.id = "aichatInput";
    inputEl.rows = 1;
    inputEl.placeholder = "Nói hoặc gõ tiếng Trung…";
    inputEl.setAttribute("aria-label", "Tin nhắn tiếng Trung");
    inputEl.addEventListener("input", autoGrow);
    inputEl.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); onSend(); }
    });
    inputWrap.appendChild(inputEl);
    micBtn = el("button", "aichat-comp-btn", "🎤");
    micBtn.type = "button"; micBtn.title = "Nói bằng giọng nói";
    micBtn.id = "aichatMicBtn";
    micBtn.setAttribute("aria-label", "Nói bằng giọng nói");
    micBtn.addEventListener("click", toggleRecording);
    sendBtn = el("button", null, "➤");
    sendBtn.type = "button"; sendBtn.id = "aichatSendBtn";
    sendBtn.setAttribute("aria-label", "Gửi");
    sendBtn.addEventListener("click", onSend);
    emojiBtn.addEventListener("click", function () { emojiPop.classList.toggle("show"); });
    composer.appendChild(emojiBtn);
    composer.appendChild(inputWrap);
    composer.appendChild(micBtn);
    composer.appendChild(sendBtn);

    emojiPop = el("div", "aichat-emoji-pop");
    emojiPop.id = "aichatEmojiPop";
    ["😀","😄","😂","🥰","😍","🤭","😊","👍","👏","🙏","💪","🔥","🎉","❤️","🍜","🍵","🏫","🏥","🚆","🛍️","👋","🤔","😅","⭐"].forEach(function (e) {
      var b = el("button", null, e);
      b.type = "button";
      b.addEventListener("click", function () {
        insertAtCursor(e);
        emojiPop.classList.remove("show");
        inputEl.focus();
      });
      emojiPop.appendChild(b);
    });
    composer.appendChild(emojiPop);
    threadView.appendChild(composer);

    toastEl = el("div", "aichat-toast");
    threadView.appendChild(toastEl);

    panel.appendChild(threadView);
    setMode(store.mode || "chat", true);
  }

  /* ================= Thread logic ================= */
  var thread = { scenId: null, stepIdx: 0, fails: 0, busy: false, started: false, userTurns: 0, lastUserSeenEl: null };
  var history = [];

  function fmtTime(d) {
    var h = d.getHours(), m = d.getMinutes();
    return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
  }
  function scrollBottom(smooth) {
    requestAnimationFrame(function () {
      msgBox.scrollTo({ top: msgBox.scrollHeight, behavior: smooth ? "smooth" : "auto" });
      newPill.classList.remove("show");
    });
  }
  function isNearBottom() {
    return msgBox.scrollHeight - msgBox.scrollTop - msgBox.clientHeight < 120;
  }
  function toast(msg, ms) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove("show"); }, ms || 2600);
  }
  function autoGrow() {
    inputEl.style.height = "auto";
    inputEl.style.height = Math.min(inputEl.scrollHeight, 96) + "px";
  }
  function insertAtCursor(text) {
    var s = inputEl.selectionStart || inputEl.value.length;
    var e = inputEl.selectionEnd || inputEl.value.length;
    inputEl.value = inputEl.value.slice(0, s) + text + inputEl.value.slice(e);
    inputEl.selectionStart = inputEl.selectionEnd = s + text.length;
    autoGrow();
  }

  function setMode(mode, silent) {
    thread.mode = mode;
    store.mode = mode;
    saveStore();
    modeToggle.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.mode === mode);
    });
    if (!silent) toast(mode === "teacher" ? "Chế độ Thầy sửa: Bé sẽ chỉ lỗi từng câu ✏️" : "Chế độ Hội thoại: nói tự nhiên với Bé 💬");
  }

  function showList() {
    stopRecording(); stopSpeak();
    threadView.classList.remove("active");
    listView.classList.add("active");
    renderList();
    filterList();
  }
  function openThread(scenId) {
    launcher.classList.remove("has-unread");
    listView.classList.remove("active");
    threadView.classList.add("active");
    if (scenId) startScenario(scenId, false);
    else startLobby();
  }
  function startLobby() {
    thread.scenId = null; thread.started = false;
    scenChip.textContent = "🏠 Sảnh chờ";
    progressBox.innerHTML = "";
    msgBox.innerHTML = "";
    history = [];
    addDivider();
    addBeMessage(LOBBY_LINE, null);
    setChips(SCEN_ORDER.map(function (id) {
      return { label: SCENARIOS[id].icon + " " + SCENARIOS[id].name, action: function () { startScenario(id, false); } };
    }));
  }
  function startScenario(id, restart, keepText) {
    var scen = SCENARIOS[id];
    thread.scenId = id; thread.stepIdx = 0; thread.fails = 0; thread.started = true; thread.userTurns = 0;
    store.progress[id] = "doing"; saveStore();
    scenChip.textContent = scen.icon + " " + scen.name;
    msgBox.innerHTML = "";
    history = [];
    addDivider();
    if (keepText) addUserMessage(keepText, null);
    renderProgress();
    var step = scen.steps[0];
    deliverBe(step.prompt, step.tts);
    setChipsFromStep(step);
    if (restart) toast("Mình nói lại từ đầu nhé!");
  }
  function renderProgress() {
    progressBox.innerHTML = "";
    if (!thread.scenId) return;
    var steps = SCENARIOS[thread.scenId].steps;
    steps.forEach(function (s, i) {
      var d = el("i", null);
      if (i < thread.stepIdx) d.className = "done";
      else if (i === thread.stepIdx) d.className = "now";
      progressBox.appendChild(d);
    });
  }
  function addDivider() {
    var d = el("div", "aichat-day-divider");
    d.appendChild(el("span", null, "Hôm nay · Luyện nói HSK1"));
    msgBox.appendChild(d);
  }
  var lastBeZh = "";
  var guardRot = 0;
  function addBeMessage(line, ttsFile) {
    // hard rule (fix1): Bé never sends the same line twice in a row —
    // swap a would-be repeat for a rotating continuation line instead.
    if (line && line.zh) {
      if (line.zh === lastBeZh) {
        var g = GUARD_POOL[guardRot % GUARD_POOL.length]; guardRot++;
        if (g.zh !== lastBeZh) line = g;
      }
      lastBeZh = line.zh;
    }
    var row = el("div", "aichat-row be");
    var img = avaImg("aichat-msg-avatar", "Bé");
    var bub = el("div", "aichat-bubble");
    var speakBtn = el("button", "aichat-speak", "🔊");
    speakBtn.type = "button"; speakBtn.title = "Nghe lại";
    speakBtn.setAttribute("aria-label", "Nghe lại câu này");
    (function (zh, f) {
      speakBtn.addEventListener("click", function () { speak(zh, f); });
    })(line.zh, ttsFile || null);
    bub.appendChild(speakBtn);
    bub.appendChild(document.createTextNode(line.zh));
    var py = el("span", "aichat-py", line.py);
    var vi = el("span", "aichat-vi", line.vi);
    bub.appendChild(py); bub.appendChild(vi);
    row.appendChild(img); row.appendChild(bub);
    msgBox.appendChild(row);
    var t = el("div", "aichat-time", fmtTime(new Date()));
    t.style.marginLeft = "36px";
    msgBox.appendChild(t);
    history.push({ role: "be", zh: line.zh });
    store.lastPreview = line.zh; store.lastTime = fmtTime(new Date()); saveStore();
    return line;
  }
  function addUserMessage(text, voice) {
    var row = el("div", "aichat-row me");
    var bub = el("div", "aichat-bubble");
    if (voice && voice.url) {
      var vw = el("div", "aichat-voice");
      var play = el("button", "aichat-voice-play", "▶");
      play.type = "button"; play.setAttribute("aria-label", "Nghe lại tin nhắn thoại");
      var audio = new Audio(voice.url);
      play.addEventListener("click", function () {
        if (audio.paused) { audio.play().catch(function () {}); play.textContent = "⏸"; }
        else { audio.pause(); play.textContent = "▶"; }
      });
      audio.addEventListener("ended", function () { play.textContent = "▶"; });
      var wave = el("div", "aichat-wave");
      var heights = [9, 15, 22, 12, 18, 25, 10, 16, 21, 13, 19, 8, 14, 20, 11, 17];
      heights.forEach(function (h) { var b = el("i", null); b.style.height = h + "px"; wave.appendChild(b); });
      var dur = el("span", "aichat-voice-dur", "0:" + String(Math.max(1, Math.round(voice.dur || 2))).padStart(2, "0"));
      vw.appendChild(play); vw.appendChild(wave); vw.appendChild(dur);
      bub.appendChild(vw);
      var tr = el("span", "aichat-voice-transcript", text);
      var lb = el("span", "aichat-voice-label", "🎤 Tin nhắn thoại · chữ do máy nghe được");
      bub.appendChild(tr); bub.appendChild(lb);
    } else {
      bub.textContent = text;
    }
    row.appendChild(bub);
    msgBox.appendChild(row);
    var t = el("div", "aichat-time", fmtTime(new Date()) + " · Đã gửi");
    msgBox.appendChild(t);
    thread.lastUserSeenEl = t;
    history.push({ role: "user", zh: text });
    return row;
  }
  function markSeen() {
    if (!thread.lastUserSeenEl) return;
    thread.lastUserSeenEl.textContent = fmtTime(new Date());
    var seen = el("div", "aichat-seen");
    var img = avaImg(null, "");
    seen.appendChild(img);
    seen.appendChild(el("span", null, "Bé đã xem"));
    msgBox.appendChild(seen);
    thread.lastUserSeenEl = null;
  }
  function showTyping() {
    var row = el("div", "aichat-row be");
    row.id = "aichatTypingRow";
    var img = avaImg("aichat-msg-avatar", "");
    var bub = el("div", "aichat-bubble aichat-typing-bubble");
    bub.appendChild(el("i", null)); bub.appendChild(el("i", null)); bub.appendChild(el("i", null));
    row.appendChild(img); row.appendChild(bub);
    msgBox.appendChild(row);
    threadStatus.classList.add("typing");
    threadStatus.lastChild.textContent = "Bé đang nhập…";
    scrollBottom(true);
  }
  function hideTyping() {
    var r = document.getElementById("aichatTypingRow");
    if (r) r.remove();
    threadStatus.classList.remove("typing");
    threadStatus.lastChild.textContent = "Đang hoạt động";
  }
  function addCard(kind, title, rowsHtml, note, actions) {
    var card = el("div", "aichat-card" + (kind ? " " + kind : ""));
    card.appendChild(el("div", "aichat-card-title", title));
    (rowsHtml || []).forEach(function (r) {
      var row = el("div", "aichat-card-row");
      if (r.label) { var b = el("b", null, r.label + " "); row.appendChild(b); }
      var s = el("span", r.cls || null, r.text);
      row.appendChild(s);
      card.appendChild(row);
    });
    if (note) card.appendChild(el("div", "aichat-card-note", note));
    if (actions && actions.length) {
      var wrap = el("div", "aichat-card-actions");
      actions.forEach(function (a) {
        var b = el("button", "aichat-mini-btn" + (a.solid ? " solid" : ""), a.label);
        b.type = "button";
        b.addEventListener("click", a.action);
        wrap.appendChild(b);
      });
      card.appendChild(wrap);
    }
    msgBox.appendChild(card);
    return card;
  }
  function setChips(chips) {
    chipsBox.innerHTML = "";
    (chips || []).forEach(function (c) {
      var b = el("button", "aichat-chip", c.label);
      b.type = "button";
      b.addEventListener("click", function () {
        if (c.action) c.action();
        else if (c.text) { if (!thread.busy) handleUserText(c.text, null); }
      });
      chipsBox.appendChild(b);
    });
  }
  function setChipsFromStep(step) {
    if (!step || step.done || !step.chips) { setChips([]); return; }
    setChips(step.chips.map(function (c) { return { label: c, text: c }; }));
  }
  function deliverBe(lines, ttsFile) {
    var firstUsed = null;
    (lines || []).forEach(function (line, i) {
      var used = addBeMessage(line, i === 0 ? ttsFile : null);
      if (i === 0) firstUsed = used;
    });
    if (firstUsed) speak(firstUsed.zh, firstUsed === lines[0] ? (ttsFile || null) : null);
    markSeen();
    scrollBottom(true);
  }

  function onSend() {
    var text = (inputEl.value || "").trim();
    if (!text || thread.busy) return;
    inputEl.value = "";
    autoGrow();
    emojiPop.classList.remove("show");
    handleUserText(text, null);
  }

  function handleLobbyText(text, voice) {
    addUserMessage(text, voice);
    scrollBottom(true);
    var st = smallTalkReply(text);
    var intent = st ? null : lobbyIntent(text);
    thread.busy = true;
    sendBtn.disabled = true;
    showTyping();
    setTimeout(function () {
      hideTyping();
      thread.busy = false;
      sendBtn.disabled = false;
      if (st) {
        deliverBe([st], null);
      } else if (intent) {
        // jump straight into the scenario; startScenario re-adds the user's
        // own message at the top of the fresh thread (keepText)
        startScenario(intent, false, text);
      } else {
        deliverBe([pickRot("soft", LOBBY_SOFT)], null);
      }
      scrollBottom(true);
    }, 650);
  }

  function handleUserText(text, voice) {
    if (!thread.scenId) { handleLobbyText(text, voice); return; }
    thread.busy = true;
    sendBtn.disabled = true;
    addUserMessage(text, voice);
    scrollBottom(true);
    thread.userTurns++;
    var scen = SCENARIOS[thread.scenId];
    var stepBefore = scen.steps[thread.stepIdx];
    setTimeout(function () { showTyping(); }, 320);
    var delay = 750 + Math.random() * 450;
    setTimeout(async function () {
      var result;
      try { result = await brainRespond(thread, text, history.slice()); }
      catch (e) { result = { retry: true }; }
      hideTyping();
      if (result.correction) {
        addCard("", result.correction.title, [
          { label: "Bạn nói:", text: result.correction.userText },
          { label: "Câu đúng:", text: result.correction.right, cls: "aichat-card-right" }
        ], result.correction.note, null);
      } else if (result.praise) {
        addCard("praise", "✓ Câu này đúng rồi!", [], "Bé không phải sửa gì cả. Mình nói tiếp nhé!", null);
      }
      if (result.advanceTo != null && result.advanceTo !== thread.stepIdx) {
        thread.stepIdx = result.advanceTo;
        thread.fails = 0;
        renderProgress();
        var step = scen.steps[thread.stepIdx];
        if (step) {
          deliverBe(step.prompt, step.tts);
          if (step.done) { finishScenario(); }
          else setChipsFromStep(step);
        }
      } else if (result.retry) {
        thread.fails++;
        deliverBe([FALLBACKS[(thread.fails - 1) % FALLBACKS.length]], null);
        if (thread.fails >= 2 && stepBefore && stepBefore.model) {
          addCard("hint", "💡 Gợi ý của Bé", [
            { label: "Thử nói:", text: stepBefore.model, cls: "aichat-card-right" }
          ], "Bấm vào câu gợi ý bên dưới hoặc gõ lại theo mẫu nhé.", null);
          setChipsFromStep(stepBefore);
        }
        scrollBottom(true);
      }
      thread.busy = false;
      sendBtn.disabled = false;
      scrollBottom(true);
    }, delay);
  }

  function finishScenario() {
    var id = thread.scenId;
    store.progress[id] = "done"; saveStore();
    setChips([]);
    renderProgress();
    addCard("done-card", "🎉 Hoàn thành tình huống!", [
      { text: "Bạn đã nói " + thread.userTurns + " lượt bằng tiếng Trung trong tình huống “" + SCENARIOS[id].name + "”." }
    ], "Nói lại nhiều lần sẽ nhớ lâu hơn. Mai mình luyện tiếp tình huống khác nhé!", [
      { label: "↺ Nói lại", action: function () { startScenario(id, true); } },
      { label: "📚 Tình huống khác", solid: true, action: showList }
    ]);
    scrollBottom(true);
  }

  /* ================= Voice in (SpeechRecognition + MediaRecorder) ================= */
  var recog = null, mediaRec = null, mediaChunks = [], recStart = 0, recording = false;
  function toggleRecording() {
    if (recording) { stopRecording(); return; }
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      toast("Trình duyệt này chưa hỗ trợ nói bằng giọng — bạn gõ chữ giúp Bé nhé 🙏");
      micBtn.style.opacity = ".45";
      return;
    }
    try {
      recog = new SR();
      recog.lang = "zh-CN";
      recog.interimResults = true;
      recog.continuous = false;
      var finalText = "";
      recog.onresult = function (ev) {
        var interim = "";
        for (var i = ev.resultIndex; i < ev.results.length; i++) {
          if (ev.results[i].isFinal) finalText += ev.results[i][0].transcript;
          else interim += ev.results[i][0].transcript;
        }
        if (interim) { inputEl.value = interim; autoGrow(); }
      };
      recog.onerror = function (ev) {
        stopRecording();
        if (ev.error === "not-allowed") toast("Bé chưa được cấp quyền micro — bạn kiểm tra quyền micro của trình duyệt nhé.");
        else if (ev.error !== "aborted") toast("Bé chưa nghe rõ — bạn nói lại hoặc gõ chữ nhé.");
      };
      recog.onend = function () {
        var dur = (Date.now() - recStart) / 1000;
        var wasRecording = recording;
        stopRecording();
        var text = (finalText || inputEl.value || "").trim();
        if (wasRecording && text && !thread.busy) {
          inputEl.value = "";
          autoGrow();
          var voice = null;
          if (lastVoiceUrl) voice = { url: lastVoiceUrl, dur: dur };
          lastVoiceUrl = null;
          handleUserText(text, voice);
        }
      };
      // MediaRecorder in parallel for a real playable voice bubble
      lastVoiceUrl = null;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          try {
            mediaChunks = [];
            mediaRec = new MediaRecorder(stream);
            mediaRec.ondataavailable = function (e) { if (e.data && e.data.size) mediaChunks.push(e.data); };
            mediaRec.onstop = function () {
              stream.getTracks().forEach(function (t) { t.stop(); });
              if (mediaChunks.length) {
                lastVoiceUrl = URL.createObjectURL(new Blob(mediaChunks, { type: mediaChunks[0].type || "audio/webm" }));
              }
            };
            mediaRec.start();
          } catch (e) { mediaRec = null; }
        }).catch(function () {});
      }
      recStart = Date.now();
      recording = true;
      micBtn.classList.add("recording");
      recBar.classList.add("show");
      recog.start();
    } catch (e) {
      recording = false;
      toast("Không mở được micro — bạn gõ chữ giúp Bé nhé.");
    }
  }
  var lastVoiceUrl = null;
  function stopRecording() {
    if (recog) { try { recog.stop(); } catch (e) {} recog = null; }
    if (mediaRec && mediaRec.state !== "inactive") { try { mediaRec.stop(); } catch (e) {} }
    mediaRec = null;
    recording = false;
    micBtn.classList.remove("recording");
    recBar.classList.remove("show");
  }

  /* ================= Panel open/close ================= */
  function togglePanel() { panel.classList.contains("open") ? closePanel() : openPanel(); }
  function openPanel() {
    panel.classList.add("open");
    lockBodyScroll();
    bindViewport();
    fitPanel();
    resolveAvatar();
    launcher.classList.remove("has-unread");
    if (firstOpen) {
      firstOpen = false;
      listView.classList.add("active");
      skeleton.style.display = "";
      listContent.style.display = "none";
      setTimeout(function () {
        skeleton.style.display = "none";
        listContent.style.display = "";
      }, 480);
    } else if (!threadView.classList.contains("active")) {
      listView.classList.add("active");
    }
  }
  function closePanel() {
    panel.classList.remove("open");
    panel.style.height = "";
    panel.style.top = "";
    unlockBodyScroll();
    stopRecording(); stopSpeak();
  }
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && panel.classList.contains("open")) closePanel();
  });

  window.__ttcAIChat = {
    version: "pilot-2.1-fix1",
    open: openPanel,
    close: closePanel,
    toggle: togglePanel,
    _thread: thread,
    _scenarios: SCENARIOS,
    _segment: segment,
    _lobbyIntent: lobbyIntent,
    _smallTalk: smallTalkReply,
    _avatarSrc: currentAvatarSrc,
    _lobbyLines: function () {
      var all = [LOBBY_LINE, FALLBACK].concat(FALLBACKS, GUARD_POOL, LOBBY_SOFT);
      Object.keys(SMALLTALK_POOLS).forEach(function (k) { all = all.concat(SMALLTALK_POOLS[k]); });
      return all;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildUI);
  } else {
    buildUI();
  }
})();
