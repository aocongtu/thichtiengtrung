/* Otter2 Grammar Data — extracted from index.html Grammar Engine V3.1
 * DO NOT edit by hand unless syncing from index1.
 * Namespace: window.OTTER2_GRAMMAR_DATA / window.OTTER2_GRAMMAR_PACKS
 */
(function (w) {
  "use strict";
const grammarData = {

    /* =======================================================
       HSK 1 — 39 MẪU
    ======================================================= */

    1: [

      {
        id:"hsk1_01",
        pattern:"是",
        title:"是 — là",
        structure:"S + 是 + N",
        example:"我是学生。",
        pinyin:"Wǒ shì xuésheng.",
        meaning:"Tôi là học sinh.",
        explanation:"是 dùng để nối chủ ngữ với danh từ, biểu thị “là”.",
        note:"Không dùng 是 trước tính từ trong câu cơ bản."
      },

      {
        id:"hsk1_02",
        pattern:"不是",
        title:"不是 — không phải là",
        structure:"S + 不是 + N",
        example:"我不是老师。",
        pinyin:"Wǒ bú shì lǎoshī.",
        meaning:"Tôi không phải là giáo viên.",
        explanation:"不是 là dạng phủ định của 是.",
        note:"不 đứng trước 是."
      },

      {
        id:"hsk1_03",
        pattern:"有",
        title:"有 — có",
        structure:"S + 有 + N",
        example:"我有一个朋友。",
        pinyin:"Wǒ yǒu yí ge péngyou.",
        meaning:"Tôi có một người bạn.",
        explanation:"有 dùng để biểu thị sở hữu hoặc sự tồn tại.",
        note:"Câu phủ định dùng 没有."
      },

      {
        id:"hsk1_04",
        pattern:"没有",
        title:"没有 — không có",
        structure:"S + 没有 + N",
        example:"我没有钱。",
        pinyin:"Wǒ méiyǒu qián.",
        meaning:"Tôi không có tiền.",
        explanation:"没有 là dạng phủ định thường dùng với 有.",
        note:"Không nói 不有."
      },

      {
        id:"hsk1_05",
        pattern:"S + V + O",
        title:"Câu chủ ngữ + động từ + tân ngữ",
        structure:"S + V + O",
        example:"我喝茶。",
        pinyin:"Wǒ hē chá.",
        meaning:"Tôi uống trà.",
        explanation:"Đây là trật tự câu cơ bản trong tiếng Trung.",
        note:"Động từ thường đứng trước tân ngữ."
      },

      {
        id:"hsk1_06",
        pattern:"很 + Adj",
        title:"很 — rất / dùng nối với tính từ",
        structure:"S + 很 + Adj",
        example:"我很好。",
        pinyin:"Wǒ hěn hǎo.",
        meaning:"Tôi rất khỏe / Tôi ổn.",
        explanation:"很 thường đứng trước tính từ trong câu miêu tả.",
        note:"Trong câu cơ bản không cần dịch 很 thành “rất” một cách máy móc."
      },

      {
        id:"hsk1_07",
        pattern:"的",
        title:"的 — sở hữu",
        structure:"A + 的 + B",
        example:"这是我的书。",
        pinyin:"Zhè shì wǒ de shū.",
        meaning:"Đây là sách của tôi.",
        explanation:"的 nối người/vật sở hữu với danh từ.",
        note:"我的 = của tôi."
      },

      {
        id:"hsk1_08",
        pattern:"这 / 那",
        title:"这 / 那 — này / kia",
        structure:"这/那 + N",
        example:"这是我的电脑。",
        pinyin:"Zhè shì wǒ de diànnǎo.",
        meaning:"Đây là máy tính của tôi.",
        explanation:"这 dùng cho vật/người ở gần; 那 dùng cho vật/người ở xa.",
        note:"这/那 thường đi với danh từ hoặc 是."
      },

      {
        id:"hsk1_09",
        pattern:"这里 / 那里",
        title:"这里 / 那里 — ở đây / ở đó",
        structure:"S + 在 + 这里/那里",
        example:"我在这里。",
        pinyin:"Wǒ zài zhèlǐ.",
        meaning:"Tôi ở đây.",
        explanation:"这里 và 那里 là từ chỉ nơi chốn.",
        note:"这里 = ở đây; 那里 = ở đó/kia."
      },

      {
        id:"hsk1_10",
        pattern:"在",
        title:"在 — ở / tại",
        structure:"S + 在 + Place",
        example:"我在家。",
        pinyin:"Wǒ zài jiā.",
        meaning:"Tôi ở nhà.",
        explanation:"在 đứng trước địa điểm để nói người/vật đang ở đâu.",
        note:"Địa điểm thường đứng ngay sau 在."
      },

      {
        id:"hsk1_11",
        pattern:"数量",
        title:"Số + lượng từ + danh từ",
        structure:"Number + Measure Word + N",
        example:"三个学生。",
        pinyin:"Sān ge xuésheng.",
        meaning:"Ba học sinh.",
        explanation:"Danh từ thường đi sau số và lượng từ.",
        note:"Không nói 三学生."
      },

      {
        id:"hsk1_12",
        pattern:"一 + 量词",
        title:"Một + lượng từ",
        structure:"一 + Measure Word + N",
        example:"一本书。",
        pinyin:"Yì běn shū.",
        meaning:"Một quyển sách.",
        explanation:"一本 dùng cho sách vì 本 là lượng từ của sách.",
        note:"Lượng từ thay đổi tùy danh từ."
      },

      {
        id:"hsk1_13",
        pattern:"几 / 多少",
        title:"几 / 多少 — mấy / bao nhiêu",
        structure:"S + 有 + 几/多少 + N",
        example:"你有几个朋友？",
        pinyin:"Nǐ yǒu jǐ ge péngyou?",
        meaning:"Bạn có mấy người bạn?",
        explanation:"几 thường dùng để hỏi số lượng nhỏ; 多少 dùng để hỏi số lượng nói chung.",
        note:"几 thường đi với lượng từ."
      },

      {
        id:"hsk1_14",
        pattern:"时间",
        title:"Thời gian + câu",
        structure:"Time + S + V + O",
        example:"今天我去学校。",
        pinyin:"Jīntiān wǒ qù xuéxiào.",
        meaning:"Hôm nay tôi đi học.",
        explanation:"Từ chỉ thời gian thường có thể đặt trước chủ ngữ.",
        note:"Thời gian giúp xác định khi nào hành động xảy ra."
      },

      {
        id:"hsk1_15",
        pattern:"在 + Place",
        title:"Chủ ngữ + 在 + địa điểm",
        structure:"S + 在 + Place",
        example:"他在北京。",
        pinyin:"Tā zài Běijīng.",
        meaning:"Anh ấy ở Bắc Kinh.",
        explanation:"在 đứng trước địa điểm.",
        note:"Đây là một cấu trúc rất cơ bản để nói vị trí."
      },

      {
        id:"hsk1_16",
        pattern:"方位词",
        title:"Từ chỉ phương vị",
        structure:"N + 上/下/里/外...",
        example:"书在桌子上。",
        pinyin:"Shū zài zhuōzi shàng.",
        meaning:"Sách ở trên bàn.",
        explanation:"上、下、里、外 biểu thị vị trí tương đối.",
        note:"Từ chỉ phương vị thường đứng sau danh từ địa điểm."
      },

      {
        id:"hsk1_17",
        pattern:"不",
        title:"不 — không",
        structure:"不 + V / Adj",
        example:"我不喝咖啡。",
        pinyin:"Wǒ bù hē kāfēi.",
        meaning:"Tôi không uống cà phê.",
        explanation:"不 thường phủ định hành động, thói quen hoặc trạng thái ở hiện tại/tương lai.",
        note:"不 dùng trước động từ hoặc tính từ."
      },

      {
        id:"hsk1_18",
        pattern:"没 / 没有",
        title:"没 / 没有 — chưa / không",
        structure:"没 + V / 没有 + N",
        example:"我没吃饭。",
        pinyin:"Wǒ méi chī fàn.",
        meaning:"Tôi chưa ăn cơm.",
        explanation:"没 thường phủ định hành động đã xảy ra hoặc chưa xảy ra.",
        note:"没 thường đi với động từ; 没有 có thể dùng với 有."
      },

      {
        id:"hsk1_19",
        pattern:"别",
        title:"别 — đừng",
        structure:"别 + V",
        example:"别说话。",
        pinyin:"Bié shuōhuà.",
        meaning:"Đừng nói chuyện.",
        explanation:"别 dùng để đưa ra lời ngăn cản hoặc yêu cầu ai đó không làm gì.",
        note:"别 + động từ."
      },

      {
        id:"hsk1_20",
        pattern:"也",
        title:"也 — cũng",
        structure:"S + 也 + V/Adj",
        example:"我也喜欢中国。",
        pinyin:"Wǒ yě xǐhuan Zhōngguó.",
        meaning:"Tôi cũng thích Trung Quốc.",
        explanation:"也 biểu thị ý nghĩa “cũng”, thường đứng trước động từ hoặc tính từ.",
        note:"也 thường đứng sau chủ ngữ."
      },

      {
        id:"hsk1_21",
        pattern:"都",
        title:"都 — đều",
        structure:"S + 都 + V/Adj",
        example:"我们都是学生。",
        pinyin:"Wǒmen dōu shì xuésheng.",
        meaning:"Chúng tôi đều là học sinh.",
        explanation:"都 biểu thị toàn bộ các đối tượng trong phạm vi đang nói đến.",
        note:"都 thường đứng sau chủ ngữ/phạm vi."
      },

      {
        id:"hsk1_22",
        pattern:"很",
        title:"很 — rất / nối với tính từ",
        structure:"S + 很 + Adj",
        example:"他很好。",
        pinyin:"Tā hěn hǎo.",
        meaning:"Anh ấy rất tốt.",
        explanation:"很 là phó từ thường đứng trước tính từ.",
        note:"Cấu trúc 很 + tính từ rất phổ biến."
      },

      {
        id:"hsk1_23",
        pattern:"太……了",
        title:"太……了 — quá / thật là",
        structure:"太 + Adj + 了",
        example:"太好了！",
        pinyin:"Tài hǎo le!",
        meaning:"Tốt quá!",
        explanation:"太……了 biểu thị mức độ cao, thường mang cảm xúc.",
        note:"了 ở cuối câu giúp biểu thị cảm xúc hoặc sự thay đổi."
      },

      {
        id:"hsk1_24",
        pattern:"非常 / 真 / 最",
        title:"非常 / 真 / 最 — rất / thật / nhất",
        structure:"Adv + Adj",
        example:"今天非常冷。",
        pinyin:"Jīntiān fēicháng lěng.",
        meaning:"Hôm nay rất lạnh.",
        explanation:"非常、真、最 đều có thể đứng trước tính từ để biểu thị mức độ.",
        note:"最 biểu thị mức độ cao nhất."
      },

      {
        id:"hsk1_25",
        pattern:"还 / 再",
        title:"还 / 再 — còn / lại",
        structure:"还/再 + V",
        example:"我还要喝水。",
        pinyin:"Wǒ hái yào hē shuǐ.",
        meaning:"Tôi vẫn muốn uống nước thêm.",
        explanation:"还 có thể biểu thị “còn/vẫn”; 再 thường biểu thị hành động lặp lại trong tương lai.",
        note:"Không phải lúc nào 还 và 再 cũng thay thế cho nhau."
      },

      {
        id:"hsk1_26",
        pattern:"会",
        title:"会 — biết / có khả năng",
        structure:"会 + V",
        example:"我会说汉语。",
        pinyin:"Wǒ huì shuō Hànyǔ.",
        meaning:"Tôi biết nói tiếng Trung.",
        explanation:"会 có thể biểu thị kỹ năng đã học được hoặc khả năng.",
        note:"会 + động từ."
      },

      {
        id:"hsk1_27",
        pattern:"能",
        title:"能 — có thể",
        structure:"能 + V",
        example:"我今天能去。",
        pinyin:"Wǒ jīntiān néng qù.",
        meaning:"Hôm nay tôi có thể đi.",
        explanation:"能 biểu thị khả năng hoặc điều kiện cho phép thực hiện hành động.",
        note:"能 thường liên quan đến khả năng hoặc điều kiện."
      },

      {
        id:"hsk1_28",
        pattern:"想",
        title:"想 — muốn",
        structure:"想 + V",
        example:"我想喝水。",
        pinyin:"Wǒ xiǎng hē shuǐ.",
        meaning:"Tôi muốn uống nước.",
        explanation:"想 đứng trước động từ để biểu thị mong muốn.",
        note:"想 + động từ."
      },

      {
        id:"hsk1_29",
        pattern:"要",
        title:"要 — muốn / cần",
        structure:"要 + V/N",
        example:"我要买书。",
        pinyin:"Wǒ yào mǎi shū.",
        meaning:"Tôi muốn mua sách.",
        explanation:"要 có thể biểu thị ý muốn hoặc nhu cầu.",
        note:"要 có nhiều cách dùng, HSK1 tập trung vào cách dùng cơ bản."
      },

      {
        id:"hsk1_30",
        pattern:"了",
        title:"了 — hoàn thành",
        structure:"S + V + 了 + O",
        example:"我吃饭了。",
        pinyin:"Wǒ chī fàn le.",
        meaning:"Tôi ăn cơm rồi.",
        explanation:"了 sau động từ có thể biểu thị hành động đã hoàn thành.",
        note:"Không nên hiểu mọi 了 đều đơn giản là “đã”."
      },

      {
        id:"hsk1_31",
        pattern:"了",
        title:"了 — thay đổi trạng thái",
        structure:"S + Adj + 了",
        example:"天气冷了。",
        pinyin:"Tiānqì lěng le.",
        meaning:"Thời tiết trở lạnh rồi.",
        explanation:"了 ở cuối câu có thể biểu thị trạng thái đã thay đổi.",
        note:"Đây là 了 biểu thị sự thay đổi trạng thái."
      },

      {
        id:"hsk1_32",
        pattern:"在 / 正在",
        title:"在 / 正在 — đang",
        structure:"S + 在/正在 + V",
        example:"我正在吃饭。",
        pinyin:"Wǒ zhèngzài chī fàn.",
        meaning:"Tôi đang ăn cơm.",
        explanation:"在 và 正在 có thể đứng trước động từ để biểu thị hành động đang diễn ra.",
        note:"正在 nhấn mạnh quá trình đang diễn ra."
      },

      {
        id:"hsk1_33",
        pattern:"呢",
        title:"呢 — còn bạn thì sao?",
        structure:"Statement，S + 呢？",
        example:"我很好，你呢？",
        pinyin:"Wǒ hěn hǎo, nǐ ne?",
        meaning:"Tôi rất khỏe, còn bạn thì sao?",
        explanation:"呢 có thể dùng trong câu hỏi tiếp nối để hỏi lại thông tin.",
        note:"呢 còn có nhiều cách dùng khác."
      },

      {
        id:"hsk1_34",
        pattern:"吧",
        title:"吧 — nhé / đi",
        structure:"S + V + 吧",
        example:"我们走吧。",
        pinyin:"Wǒmen zǒu ba.",
        meaning:"Chúng ta đi nhé.",
        explanation:"吧 thường dùng để đưa ra lời đề nghị hoặc gợi ý.",
        note:"吧 làm câu nói mềm hơn."
      },

      {
        id:"hsk1_35",
        pattern:"吗",
        title:"吗 — câu hỏi Yes/No",
        structure:"Statement + 吗？",
        example:"你是学生吗？",
        pinyin:"Nǐ shì xuésheng ma?",
        meaning:"Bạn là học sinh phải không?",
        explanation:"吗 đặt cuối câu trần thuật để biến câu thành câu hỏi có/không.",
        note:"Không dùng 吗 cùng với từ hỏi 什么、谁、哪..."
      },

      {
        id:"hsk1_36",
        pattern:"疑问词",
        title:"Từ để hỏi",
        structure:"什么 / 谁 / 哪 / 哪儿 / 哪里 / 哪些 / 几 / 多少 / 怎么 / 多",
        example:"你叫什么名字？",
        pinyin:"Nǐ jiào shénme míngzi?",
        meaning:"Bạn tên là gì?",
        explanation:"Từ để hỏi thường đứng ngay tại vị trí của thành phần cần hỏi.",
        note:"Không đưa từ để hỏi lên đầu câu một cách máy móc."
      },

      {
        id:"hsk1_37",
        pattern:"还是",
        title:"还是 — hay là",
        structure:"A 还是 B？",
        example:"你喝茶还是喝咖啡？",
        pinyin:"Nǐ hē chá háishi hē kāfēi?",
        meaning:"Bạn uống trà hay cà phê?",
        explanation:"还是 dùng trong câu hỏi lựa chọn.",
        note:"Trong câu hỏi lựa chọn, 还是 nối các phương án."
      },

      {
        id:"hsk1_38",
        pattern:"A 不 A",
        title:"A-not-A — có... hay không?",
        structure:"V 不 V？",
        example:"你去不去？",
        pinyin:"Nǐ qù bu qù?",
        meaning:"Bạn có đi không?",
        explanation:"Cấu trúc A-not-A tạo câu hỏi lựa chọn có/không.",
        note:"Động từ hoặc tính từ được lặp lại theo mẫu."
      },

      {
        id:"hsk1_39",
        pattern:"比 / 没有",
        title:"So sánh — 比 / 没有",
        structure:"A 比 B + Adj / A 没有 B + Adj",
        example:"我比他高。",
        pinyin:"Wǒ bǐ tā gāo.",
        meaning:"Tôi cao hơn anh ấy.",
        explanation:"比 dùng để so sánh hơn; 没有 có thể dùng để nói A không bằng B.",
        note:"Không thêm 更 một cách bắt buộc sau 比."
      }

    ],


    /* =======================================================
       HSK 2 → HSK 6
       SẼ NỐI THÊM DỮ LIỆU SAU
    ======================================================= */

     2: [

  /* =====================================================
     HSK2 — 82 BÀI NGỮ PHÁP
     57 MỤC NGUỒN → 82 BÀI HỌC NHỎ
     ===================================================== */

  {
    id:"hsk2-01",
    pattern:"面",
    title:"Hậu tố 面 chỉ vị trí",
    structure:"N + 面",
    example:"桌子上面有一本书。",
    pinyin:"Zhuōzi shàngmian yǒu yì běn shū.",
    meaning:"Trên bàn có một quyển sách.",
    examples:[{tag:"Câu gốc",zh:"桌子上面有一本书。",py:"Zhuōzi shàngmian yǒu yì běn shū.",vi:"Trên bàn có một quyển sách."},{tag:"Tình huống khác",zh:"桌子上面有一本地图。",py:"Zhuōzi shàngmian yǒu yì běn dìtú.",vi:"Trên bàn có một quyển bản đồ."},{tag:"Tình huống khác",zh:"桌子上面有一本报纸。",py:"Zhuōzi shàngmian yǒu yì běn bàozhǐ.",vi:"Trên bàn có một quyển báo."},{tag:"Tình huống khác",zh:"椅子上面有一本书。",py:"yǐzi shàngmian yǒu yì běn shū.",vi:"Trên ghế có một quyển sách."},{tag:"Tình huống khác",zh:"桌子下面有一本书。",py:"Zhuōzi xiàmian yǒu yì běn shū.",vi:"Trên bàn có một quyển sách."}],
    explanation:"面 có thể đứng sau từ chỉ phương hướng để tạo thành cách nói chỉ vị trí.",
    note:"常见：上面、下面、前面、后面、里面、外面。"
  },

  {
    id:"hsk2-02",
    pattern:"左边 / 右边",
    title:"Bên trái và bên phải",
    structure:"左边 / 右边 + 是 / 有 + N",
    example:"学校右边有一家饭馆。",
    pinyin:"Xuéxiào yòubian yǒu yì jiā fànguǎn.",
    meaning:"Bên phải trường học có một nhà hàng.",
    examples:[{tag:"Câu gốc",zh:"学校右边有一家饭馆。",py:"Xuéxiào yòubian yǒu yì jiā fànguǎn.",vi:"Bên phải trường học có một nhà hàng."},{tag:"Tình huống khác",zh:"医院右边有一家饭馆。",py:"yīyuàn yòubian yǒu yì jiā fànguǎn.",vi:"Bên phải bệnh viện học có một nhà hàng."},{tag:"Tình huống khác",zh:"图书馆右边有一家饭馆。",py:"Túshūguǎn yòubian yǒu yì jiā fànguǎn.",vi:"Bên phải thư viện học có một nhà hàng."},{tag:"Tình huống khác",zh:"学校右边有一家面馆。",py:"Xuéxiào yòubian yǒu yì jiā miànguǎn.",vi:"Bên phải trường học có một nhà hàng."},{tag:"Tình huống khác",zh:"学校右边有一家书店。",py:"Xuéxiào yòubian yǒu yì jiā shūdiàn.",vi:"Bên phải trường học có một hiệu sách."}],
    explanation:"左边 và 右边 dùng để chỉ vị trí bên trái và bên phải.",
    note:"Cũng thường gặp 左面、右面。"
  },

  {
    id:"hsk2-03",
    pattern:"动词重叠",
    title:"Động từ lặp lại",
    structure:"AA / A一A",
    example:"你看看这本书。",
    pinyin:"Nǐ kànkan zhè běn shū.",
    meaning:"Bạn xem thử quyển sách này đi.",
    examples:[{tag:"Câu gốc",zh:"你看看这本书。",py:"Nǐ kànkan zhè běn shū.",vi:"Bạn xem thử quyển sách này đi."},{tag:"Ở nhà",zh:"妈妈告诉我：你看看这本书。",py:"Māma gàosu wǒ: Nǐ kànkan zhè běn shū.",vi:"Mẹ bảo tôi: Bạn xem thử quyển sách này đi."},{tag:"Ở trường",zh:"在学校，你看看这本书。",py:"Zài xuéxiào, Nǐ kànkan zhè běn shū.",vi:"Ở trường, Bạn xem thử quyển sách này đi."},{tag:"Lúc đi làm",zh:"上班的时候，你看看这本书。",py:"Shàngbān de shíhou, Nǐ kànkan zhè běn shū.",vi:"Lúc đi làm, Bạn xem thử quyển sách này đi."}],
    explanation:"Lặp động từ thường làm sắc thái nhẹ hơn, mang nghĩa thử làm hoặc làm trong thời gian ngắn.",
    note:"看看、听听、想想 đều rất thường gặp."
  },

  {
    id:"hsk2-04",
    pattern:"动词重叠",
    title:"Cấu trúc A一A",
    structure:"V + 一 + V",
    example:"我想一想。",
    pinyin:"Wǒ xiǎng yì xiǎng.",
    meaning:"Để tôi suy nghĩ một chút.",
    examples:[{tag:"Câu gốc",zh:"我想一想。",py:"Wǒ xiǎng yì xiǎng.",vi:"Để tôi suy nghĩ một chút."},{tag:"Tình huống khác",zh:"妈妈想一想。",py:"Māma xiǎng yì xiǎng.",vi:"Để tôi suy nghĩ một chút."},{tag:"Tình huống khác",zh:"老师想一想。",py:"Lǎoshī xiǎng yì xiǎng.",vi:"Để tôi suy nghĩ một chút."},{tag:"Tình huống khác",zh:"同学们想一想。",py:"Tóngxuémen xiǎng yì xiǎng.",vi:"Để tôi suy nghĩ một chút."}],
    explanation:"A一A là một dạng lặp động từ, thường dùng khi muốn làm một việc trong thời gian ngắn.",
    note:"Không cần dịch 一 theo nghĩa số một."
  },

  {
    id:"hsk2-05",
    pattern:"动词重叠",
    title:"Cấu trúc A了A",
    structure:"V + 了 + V",
    example:"我想了想。",
    pinyin:"Wǒ xiǎngle xiǎng.",
    meaning:"Tôi đã suy nghĩ một chút.",
    examples:[{tag:"Câu gốc",zh:"我想了想。",py:"Wǒ xiǎngle xiǎng.",vi:"Tôi đã suy nghĩ một chút."},{tag:"Tình huống khác",zh:"妈妈想了想。",py:"Māma xiǎngle xiǎng.",vi:"Mẹ đã suy nghĩ một chút."},{tag:"Tình huống khác",zh:"老师想了想。",py:"Lǎoshī xiǎngle xiǎng.",vi:"Thầy đã suy nghĩ một chút."},{tag:"Tình huống khác",zh:"同学们想了想。",py:"Tóngxuémen xiǎngle xiǎng.",vi:"Các bạn đã suy nghĩ một chút."}],
    explanation:"A了A diễn tả một hành động ngắn đã được thực hiện.",
    note:"Thường xuất hiện trong lời kể."
  },

  {
    id:"hsk2-06",
    pattern:"动词重叠",
    title:"Cấu trúc ABAB",
    structure:"AB + AB",
    example:"我们讨论讨论吧。",
    pinyin:"Wǒmen tǎolùn tǎolun ba.",
    meaning:"Chúng ta thảo luận một chút nhé.",
    examples:[{tag:"Câu gốc",zh:"我们讨论讨论吧。",py:"Wǒmen tǎolùn tǎolun ba.",vi:"Chúng ta thảo luận một chút nhé."},{tag:"Tình huống khác",zh:"妈妈们讨论讨论吧。",py:"Māmamen tǎolùn tǎolun ba.",vi:"Chúng ta thảo luận một chút nhé."},{tag:"Tình huống khác",zh:"老师们讨论讨论吧。",py:"Lǎoshīmen tǎolùn tǎolun ba.",vi:"Chúng ta thảo luận một chút nhé."},{tag:"Tình huống khác",zh:"同学们们讨论讨论吧。",py:"Tóngxuémenmen tǎolùn tǎolun ba.",vi:"Chúng ta thảo luận một chút nhé."},{tag:"Tình huống khác",zh:"他们讨论讨论吧。",py:"Tāmen tǎolùn tǎolun ba.",vi:"Chúng ta thảo luận một chút nhé."}],
    explanation:"Một số động từ hai âm tiết có thể lặp theo dạng ABAB.",
    note:"Mục đích chính là làm sắc thái hành động nhẹ và ngắn hơn."
  },

  {
    id:"hsk2-07",
    pattern:"可能",
    title:"可能 — có khả năng",
    structure:"可能 + V / Adj",
    example:"明天可能下雨。",
    pinyin:"Míngtiān kěnéng xiàyǔ.",
    meaning:"Ngày mai có thể trời sẽ mưa.",
    examples:[{tag:"Câu gốc",zh:"明天可能下雨。",py:"Míngtiān kěnéng xiàyǔ.",vi:"Ngày mai có thể trời sẽ mưa."},{tag:"Ở nhà",zh:"妈妈告诉我：明天可能下雨。",py:"Māma gàosu wǒ: Míngtiān kěnéng xiàyǔ.",vi:"Mẹ bảo tôi: Ngày mai có thể trời sẽ mưa."},{tag:"Ở trường",zh:"在学校，明天可能下雨。",py:"Zài xuéxiào, Míngtiān kěnéng xiàyǔ.",vi:"Ở trường, Ngày mai có thể trời sẽ mưa."},{tag:"Lúc đi làm",zh:"上班的时候，明天可能下雨。",py:"Shàngbān de shíhou, Míngtiān kěnéng xiàyǔ.",vi:"Lúc đi làm, Ngày mai có thể trời sẽ mưa."}],
    explanation:"可能 biểu thị khả năng một việc xảy ra.",
    note:"可能 thường đứng trước động từ hoặc tính từ."
  },

  {
    id:"hsk2-08",
    pattern:"离合词",
    title:"Động từ ly hợp",
    structure:"V + O có thể tách ra",
    example:"我昨天游了一次泳。",
    pinyin:"Wǒ zuótiān yóu le yí cì yǒng.",
    meaning:"Hôm qua tôi đã bơi một lần.",
    examples:[{tag:"Câu gốc",zh:"我昨天游了一次泳。",py:"Wǒ zuótiān yóu le yí cì yǒng.",vi:"Hôm qua tôi đã bơi một lần."},{tag:"Tình huống khác",zh:"妈妈昨天游了一次泳。",py:"Māma zuótiān yóu le yí cì yǒng.",vi:"Hôm qua tôi đã bơi một lần."},{tag:"Tình huống khác",zh:"老师昨天游了一次泳。",py:"Lǎoshī zuótiān yóu le yí cì yǒng.",vi:"Hôm qua tôi đã bơi một lần."},{tag:"Tình huống khác",zh:"同学们昨天游了一次泳。",py:"Tóngxuémen zuótiān yóu le yí cì yǒng.",vi:"Hôm qua tôi đã bơi một lần."},{tag:"Tình huống khác",zh:"我今天游了一次泳。",py:"Wǒ Jīntiān yóu le yí cì yǒng.",vi:"Hôm nay tôi đã bơi một lần."}],
    explanation:"Một số động từ như 游泳、跳舞、跑步、帮忙 có đặc điểm giống một cụm động-tân và có thể tách thành các thành phần.",
    note:"Không nên luôn coi 离合词 như một động từ đơn không thể tách."
  },

  {
    id:"hsk2-09",
    pattern:"为什么",
    title:"为什么 — tại sao",
    structure:"为什么 + S + V？",
    example:"你为什么学习汉语？",
    pinyin:"Nǐ wèishénme xuéxí Hànyǔ?",
    meaning:"Tại sao bạn học tiếng Trung?",
    examples:[{tag:"Câu gốc",zh:"你为什么学习汉语？",py:"Nǐ wèishénme xuéxí Hànyǔ?",vi:"Tại sao bạn học tiếng Trung?"},{tag:"Ở nhà",zh:"妈妈告诉我：你为什么学习汉语？",py:"Māma gàosu wǒ: Nǐ wèishénme xuéxí Hànyǔ?",vi:"Mẹ bảo tôi: Tại sao bạn học tiếng Trung?"},{tag:"Ở trường",zh:"在学校，你为什么学习汉语？",py:"Zài xuéxiào, Nǐ wèishénme xuéxí Hànyǔ?",vi:"Ở trường, Tại sao bạn học tiếng Trung?"},{tag:"Lúc đi làm",zh:"上班的时候，你为什么学习汉语？",py:"Shàngbān de shíhou, Nǐ wèishénme xuéxí Hànyǔ?",vi:"Lúc đi làm, Tại sao bạn học tiếng Trung?"}],
    explanation:"为什么 dùng để hỏi nguyên nhân hoặc lý do.",
    note:"Câu trả lời thường có 因为。"
  },

  {
    id:"hsk2-10",
    pattern:"自己",
    title:"自己 — bản thân / tự mình",
    structure:"S + 自己 + V",
    example:"我自己做饭。",
    pinyin:"Wǒ zìjǐ zuò fàn.",
    meaning:"Tôi tự mình nấu cơm.",
    examples:[{tag:"Câu gốc",zh:"我自己做饭。",py:"Wǒ zìjǐ zuò fàn.",vi:"Tôi tự mình nấu cơm."},{tag:"Tình huống khác",zh:"妈妈自己做饭。",py:"Māma zìjǐ zuò fàn.",vi:"Mẹ tự mình nấu cơm."},{tag:"Tình huống khác",zh:"老师自己做饭。",py:"Lǎoshī zìjǐ zuò fàn.",vi:"Thầy tự mình nấu cơm."},{tag:"Tình huống khác",zh:"同学们自己做饭。",py:"Tóngxuémen zìjǐ zuò fàn.",vi:"Các bạn tự mình nấu cơm."},{tag:"Tình huống khác",zh:"我自己做面。",py:"Wǒ zìjǐ zuò miàn.",vi:"Tôi tự mình nấu mì."}],
    explanation:"自己 dùng để nhấn mạnh chính người đó thực hiện hành động.",
    note:"自己 có thể đứng sau chủ ngữ."
  },

  {
    id:"hsk2-11",
    pattern:"这么",
    title:"这么 — như thế này",
    structure:"这么 + Adj / V",
    example:"今天怎么这么冷？",
    pinyin:"Jīntiān zěnme zhème lěng?",
    meaning:"Hôm nay sao lại lạnh thế này?",
    examples:[{tag:"Câu gốc",zh:"今天怎么这么冷？",py:"Jīntiān zěnme zhème lěng?",vi:"Hôm nay sao lại lạnh thế này?"},{tag:"Ở nhà",zh:"妈妈告诉我：今天怎么这么冷？",py:"Māma gàosu wǒ: Jīntiān zěnme zhème lěng?",vi:"Mẹ bảo tôi: Hôm nay sao lại lạnh thế này?"},{tag:"Ở trường",zh:"在学校，今天怎么这么冷？",py:"Zài xuéxiào, Jīntiān zěnme zhème lěng?",vi:"Ở trường, Hôm nay sao lại lạnh thế này?"},{tag:"Lúc đi làm",zh:"上班的时候，今天怎么这么冷？",py:"Shàngbān de shíhou, Jīntiān zěnme zhème lěng?",vi:"Lúc đi làm, Hôm nay sao lại lạnh thế này?"}],
    explanation:"这么 chỉ mức độ hoặc cách thức gần với người nói.",
    note:"这么 thường đối lập với 那么."
  },

  {
    id:"hsk2-12",
    pattern:"那么",
    title:"那么 — như thế kia",
    structure:"那么 + Adj / V",
    example:"不要那么紧张。",
    pinyin:"Bú yào nàme jǐnzhāng.",
    meaning:"Đừng căng thẳng như thế.",
    examples:[{tag:"Câu gốc",zh:"不要那么紧张。",py:"Bú yào nàme jǐnzhāng.",vi:"Đừng căng thẳng như thế."},{tag:"Ở nhà",zh:"妈妈告诉我：不要那么紧张。",py:"Māma gàosu wǒ: Bú yào nàme jǐnzhāng.",vi:"Mẹ bảo tôi: Đừng căng thẳng như thế."},{tag:"Ở trường",zh:"在学校，不要那么紧张。",py:"Zài xuéxiào, Bú yào nàme jǐnzhāng.",vi:"Ở trường, Đừng căng thẳng như thế."},{tag:"Lúc đi làm",zh:"上班的时候，不要那么紧张。",py:"Shàngbān de shíhou, Bú yào nàme jǐnzhāng.",vi:"Lúc đi làm, Đừng căng thẳng như thế."}],
    explanation:"那么 biểu thị mức độ hoặc cách thức mang tính xa hơn về mặt ngữ cảnh.",
    note:"这么 / 那么 cần học cùng nhau."
  },

  {
    id:"hsk2-13",
    pattern:"这样",
    title:"这样 — như thế này",
    structure:"这样 + V / Adj",
    example:"这样做很好。",
    pinyin:"Zhèyàng zuò hěn hǎo.",
    meaning:"Làm như thế này rất tốt.",
    examples:[{tag:"Câu gốc",zh:"这样做很好。",py:"Zhèyàng zuò hěn hǎo.",vi:"Làm như thế này rất tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：这样做很好。",py:"Māma gàosu wǒ: Zhèyàng zuò hěn hǎo.",vi:"Mẹ bảo tôi: Làm như thế này rất tốt."},{tag:"Ở trường",zh:"在学校，这样做很好。",py:"Zài xuéxiào, Zhèyàng zuò hěn hǎo.",vi:"Ở trường, Làm như thế này rất tốt."},{tag:"Lúc đi làm",zh:"上班的时候，这样做很好。",py:"Shàngbān de shíhou, Zhèyàng zuò hěn hǎo.",vi:"Lúc đi làm, Làm như thế này rất tốt."}],
    explanation:"这样 nói về cách thức hoặc tình trạng cụ thể.",
    note:"这样 thường tương ứng với 那样."
  },

  {
    id:"hsk2-14",
    pattern:"那样",
    title:"那样 — như thế kia",
    structure:"那样 + V / Adj",
    example:"你不要那样说。",
    pinyin:"Nǐ bú yào nàyàng shuō.",
    meaning:"Bạn đừng nói như thế.",
    examples:[{tag:"Câu gốc",zh:"你不要那样说。",py:"Nǐ bú yào nàyàng shuō.",vi:"Bạn đừng nói như thế."},{tag:"Ở nhà",zh:"妈妈告诉我：你不要那样说。",py:"Māma gàosu wǒ: Nǐ bú yào nàyàng shuō.",vi:"Mẹ bảo tôi: Bạn đừng nói như thế."},{tag:"Ở trường",zh:"在学校，你不要那样说。",py:"Zài xuéxiào, Nǐ bú yào nàyàng shuō.",vi:"Ở trường, Bạn đừng nói như thế."},{tag:"Lúc đi làm",zh:"上班的时候，你不要那样说。",py:"Shàngbān de shíhou, Nǐ bú yào nàyàng shuō.",vi:"Lúc đi làm, Bạn đừng nói như thế."}],
    explanation:"那样 chỉ cách thức hoặc trạng thái đã được xác định trong ngữ cảnh.",
    note:"这样 / 那样 là cặp cần ghi nhớ."
  },

  {
    id:"hsk2-15",
    pattern:"每",
    title:"每 — mỗi",
    structure:"每 + Num + CL + N",
    example:"我每天学习汉语。",
    pinyin:"Wǒ měitiān xuéxí Hànyǔ.",
    meaning:"Mỗi ngày tôi học tiếng Trung.",
    examples:[{tag:"Câu gốc",zh:"我每天学习汉语。",py:"Wǒ měitiān xuéxí Hànyǔ.",vi:"Mỗi ngày tôi học tiếng Trung."},{tag:"Tình huống khác",zh:"妈妈每天学习汉语。",py:"Māma měitiān xuéxí Hànyǔ.",vi:"Mỗi ngày tôi học tiếng Trung."},{tag:"Tình huống khác",zh:"老师每天学习汉语。",py:"Lǎoshī měitiān xuéxí Hànyǔ.",vi:"Mỗi ngày tôi học tiếng Trung."},{tag:"Tình huống khác",zh:"同学们每天学习汉语。",py:"Tóngxuémen měitiān xuéxí Hànyǔ.",vi:"Mỗi ngày tôi học tiếng Trung."},{tag:"Tình huống khác",zh:"我每天学习中文。",py:"Wǒ měitiān xuéxí Zhōngwén.",vi:"Mỗi ngày tôi học chữ Trung."}],
    explanation:"每 biểu thị sự phân chia đều theo từng đơn vị.",
    note:"每天、每个人、每次 đều rất thông dụng."
  },

  {
    id:"hsk2-16",
    pattern:"形容词重叠",
    title:"Tính từ lặp AA",
    structure:"AA",
    example:"小小的房间很漂亮。",
    pinyin:"Xiǎoxiǎo de fángjiān hěn piàoliang.",
    meaning:"Căn phòng nhỏ nhỏ rất đẹp.",
    examples:[{tag:"Câu gốc",zh:"小小的房间很漂亮。",py:"Xiǎoxiǎo de fángjiān hěn piàoliang.",vi:"Căn phòng nhỏ nhỏ rất đẹp."},{tag:"Ở nhà",zh:"妈妈告诉我：小小的房间很漂亮。",py:"Māma gàosu wǒ: Xiǎoxiǎo de fángjiān hěn piàoliang.",vi:"Mẹ bảo tôi: Căn phòng nhỏ nhỏ rất đẹp."},{tag:"Ở trường",zh:"在学校，小小的房间很漂亮。",py:"Zài xuéxiào, Xiǎoxiǎo de fángjiān hěn piàoliang.",vi:"Ở trường, Căn phòng nhỏ nhỏ rất đẹp."},{tag:"Lúc đi làm",zh:"上班的时候，小小的房间很漂亮。",py:"Shàngbān de shíhou, Xiǎoxiǎo de fángjiān hěn piàoliang.",vi:"Lúc đi làm, Căn phòng nhỏ nhỏ rất đẹp."}],
    explanation:"Một số tính từ có thể lặp để tạo sắc thái nhẹ, thân mật hoặc nhấn mạnh đặc điểm.",
    note:"Không phải mọi tính từ đều tự nhiên khi lặp."
  },

  {
    id:"hsk2-17",
    pattern:"形容词重叠",
    title:"Tính từ lặp AABB",
    structure:"AABB",
    example:"房间里干干净净的。",
    pinyin:"Fángjiān lǐ gāngānjìngjìng de.",
    meaning:"Trong phòng rất sạch sẽ.",
    examples:[{tag:"Câu gốc",zh:"房间里干干净净的。",py:"Fángjiān lǐ gāngānjìngjìng de.",vi:"Trong phòng rất sạch sẽ."},{tag:"Ở nhà",zh:"妈妈告诉我：房间里干干净净的。",py:"Māma gàosu wǒ: Fángjiān lǐ gāngānjìngjìng de.",vi:"Mẹ bảo tôi: Trong phòng rất sạch sẽ."},{tag:"Ở trường",zh:"在学校，房间里干干净净的。",py:"Zài xuéxiào, Fángjiān lǐ gāngānjìngjìng de.",vi:"Ở trường, Trong phòng rất sạch sẽ."},{tag:"Lúc đi làm",zh:"上班的时候，房间里干干净净的。",py:"Shàngbān de shíhou, Fángjiān lǐ gāngānjìngjìng de.",vi:"Lúc đi làm, Trong phòng rất sạch sẽ."}],
    explanation:"Một số tính từ hai âm tiết có thể lặp theo dạng AABB.",
    note:"Thường tạo sắc thái miêu tả rõ và sinh động hơn."
  },

  {
    id:"hsk2-18",
    pattern:"万",
    title:"万 — mười nghìn",
    structure:"数词 + 万",
    example:"这个城市有一百万人。",
    pinyin:"Zhège chéngshì yǒu yì bǎi wàn rén.",
    meaning:"Thành phố này có một triệu người.",
    examples:[{tag:"Câu gốc",zh:"这个城市有一百万人。",py:"Zhège chéngshì yǒu yì bǎi wàn rén.",vi:"Thành phố này có một triệu người."},{tag:"Ở nhà",zh:"妈妈告诉我：这个城市有一百万人。",py:"Māma gàosu wǒ: Zhège chéngshì yǒu yì bǎi wàn rén.",vi:"Mẹ bảo tôi: Thành phố này có một triệu người."},{tag:"Ở trường",zh:"在学校，这个城市有一百万人。",py:"Zài xuéxiào, Zhège chéngshì yǒu yì bǎi wàn rén.",vi:"Ở trường, Thành phố này có một triệu người."},{tag:"Lúc đi làm",zh:"上班的时候，这个城市有一百万人。",py:"Shàngbān de shíhou, Zhège chéngshì yǒu yì bǎi wàn rén.",vi:"Lúc đi làm, Thành phố này có một triệu người."}],
    explanation:"万 là đơn vị số 10.000.",
    note:"100万 = một triệu."
  },

  {
    id:"hsk2-19",
    pattern:"好多",
    title:"好多 — rất nhiều",
    structure:"好多 + N",
    example:"这里有好多学生。",
    pinyin:"Zhèlǐ yǒu hǎoduō xuésheng.",
    meaning:"Ở đây có rất nhiều học sinh.",
    examples:[{tag:"Câu gốc",zh:"这里有好多学生。",py:"Zhèlǐ yǒu hǎoduō xuésheng.",vi:"Ở đây có rất nhiều học sinh."},{tag:"Ở nhà",zh:"妈妈告诉我：这里有好多学生。",py:"Māma gàosu wǒ: Zhèlǐ yǒu hǎoduō xuésheng.",vi:"Mẹ bảo tôi: Ở đây có rất nhiều học sinh."},{tag:"Ở trường",zh:"在学校，这里有好多学生。",py:"Zài xuéxiào, Zhèlǐ yǒu hǎoduō xuésheng.",vi:"Ở trường, Ở đây có rất nhiều học sinh."},{tag:"Lúc đi làm",zh:"上班的时候，这里有好多学生。",py:"Shàngbān de shíhou, Zhèlǐ yǒu hǎoduō xuésheng.",vi:"Lúc đi làm, Ở đây có rất nhiều học sinh."}],
    explanation:"好多 biểu thị số lượng lớn.",
    note:"好多 thường mang sắc thái khẩu ngữ."
  },

  {
    id:"hsk2-20",
    pattern:"多",
    title:"多 — nhiều / hơn",
    structure:"多 + N / Adj",
    example:"这里有很多人。",
    pinyin:"Zhèlǐ yǒu hěn duō rén.",
    meaning:"Ở đây có rất nhiều người.",
    examples:[{tag:"Câu gốc",zh:"这里有很多人。",py:"Zhèlǐ yǒu hěn duō rén.",vi:"Ở đây có rất nhiều người."},{tag:"Ở nhà",zh:"妈妈告诉我：这里有很多人。",py:"Māma gàosu wǒ: Zhèlǐ yǒu hěn duō rén.",vi:"Mẹ bảo tôi: Ở đây có rất nhiều người."},{tag:"Ở trường",zh:"在学校，这里有很多人。",py:"Zài xuéxiào, Zhèlǐ yǒu hěn duō rén.",vi:"Ở trường, Ở đây có rất nhiều người."},{tag:"Lúc đi làm",zh:"上班的时候，这里有很多人。",py:"Shàngbān de shíhou, Zhèlǐ yǒu hěn duō rén.",vi:"Lúc đi làm, Ở đây có rất nhiều người."}],
    explanation:"多 có thể biểu thị số lượng lớn.",
    note:"多 và 很多 đều rất thường gặp."
  },

  {
    id:"hsk2-21",
    pattern:"程度副词",
    title:"多 / 好 / 最",
    structure:"多 / 好 / 最 + Adj",
    example:"今天最好。",
    pinyin:"Jīntiān zuì hǎo.",
    meaning:"Hôm nay là tốt nhất.",
    examples:[{tag:"Câu gốc",zh:"今天最好。",py:"Jīntiān zuì hǎo.",vi:"Hôm nay là tốt nhất."},{tag:"Ở nhà",zh:"妈妈告诉我：今天最好。",py:"Māma gàosu wǒ: Jīntiān zuì hǎo.",vi:"Mẹ bảo tôi: Hôm nay là tốt nhất."},{tag:"Ở trường",zh:"在学校，今天最好。",py:"Zài xuéxiào, Jīntiān zuì hǎo.",vi:"Ở trường, Hôm nay là tốt nhất."},{tag:"Lúc đi làm",zh:"上班的时候，今天最好。",py:"Shàngbān de shíhou, Jīntiān zuì hǎo.",vi:"Lúc đi làm, Hôm nay là tốt nhất."}],
    explanation:"这些词 có thể biểu thị mức độ tùy cấu trúc.",
    note:"最 thường biểu thị mức cao nhất."
  },

  {
    id:"hsk2-22",
    pattern:"量词",
    title:"条、位、间、名",
    structure:"Num + CL + N",
    example:"那里有两间房间。",
    pinyin:"Nàlǐ yǒu liǎng jiān fángjiān.",
    meaning:"Ở đó có hai căn phòng.",
    examples:[{tag:"Câu gốc",zh:"那里有两间房间。",py:"Nàlǐ yǒu liǎng jiān fángjiān.",vi:"Ở đó có hai căn phòng."},{tag:"Ở nhà",zh:"妈妈告诉我：那里有两间房间。",py:"Māma gàosu wǒ: Nàlǐ yǒu liǎng jiān fángjiān.",vi:"Mẹ bảo tôi: Ở đó có hai căn phòng."},{tag:"Ở trường",zh:"在学校，那里有两间房间。",py:"Zài xuéxiào, Nàlǐ yǒu liǎng jiān fángjiān.",vi:"Ở trường, Ở đó có hai căn phòng."},{tag:"Lúc đi làm",zh:"上班的时候，那里有两间房间。",py:"Shàngbān de shíhou, Nàlǐ yǒu liǎng jiān fángjiān.",vi:"Lúc đi làm, Ở đó có hai căn phòng."}],
    explanation:"HSK2 mở rộng cách dùng lượng từ theo loại danh từ.",
    note:"位 dùng cho người; 间 thường dùng cho phòng/cửa hàng."
  },

  {
    id:"hsk2-23",
    pattern:"量词",
    title:"借用量词 包",
    structure:"Num + 包 + N",
    example:"我买了一包茶。",
    pinyin:"Wǒ mǎi le yì bāo chá.",
    meaning:"Tôi đã mua một gói trà.",
    examples:[{tag:"Câu gốc",zh:"我买了一包茶。",py:"Wǒ mǎi le yì bāo chá.",vi:"Tôi đã mua một gói trà."},{tag:"Tình huống khác",zh:"妈妈买了一包茶。",py:"Māma mǎi le yì bāo chá.",vi:"Mẹ đã mua một gói trà."},{tag:"Tình huống khác",zh:"老师买了一包茶。",py:"Lǎoshī mǎi le yì bāo chá.",vi:"Thầy đã mua một gói trà."},{tag:"Tình huống khác",zh:"同学们买了一包茶。",py:"Tóngxuémen mǎi le yì bāo chá.",vi:"Các bạn đã mua một gói trà."},{tag:"Tình huống khác",zh:"我买了一包咖啡。",py:"Wǒ mǎi le yì bāo kāfēi.",vi:"Tôi đã mua một gói cà phê."}],
    explanation:"Một số danh từ chỉ vật chứa hoặc đơn vị đóng gói có thể được dùng như lượng từ.",
    note:"一包茶 = một gói trà."
  },

  {
    id:"hsk2-24",
    pattern:"次",
    title:"次 — lần",
    structure:"V + Num + 次",
    example:"我去过北京两次。",
    pinyin:"Wǒ qùguo Běijīng liǎng cì.",
    meaning:"Tôi đã từng đi Bắc Kinh hai lần.",
    examples:[{tag:"Câu gốc",zh:"我去过北京两次。",py:"Wǒ qùguo Běijīng liǎng cì.",vi:"Tôi đã từng đi Bắc Kinh hai lần."},{tag:"Tình huống khác",zh:"妈妈去过北京两次。",py:"Māma qùguo Běijīng liǎng cì.",vi:"Mẹ đã từng đi Bắc Kinh hai lần."},{tag:"Tình huống khác",zh:"老师去过北京两次。",py:"Lǎoshī qùguo Běijīng liǎng cì.",vi:"Thầy đã từng đi Bắc Kinh hai lần."},{tag:"Tình huống khác",zh:"同学们去过北京两次。",py:"Tóngxuémen qùguo Běijīng liǎng cì.",vi:"Các bạn đã từng đi Bắc Kinh hai lần."},{tag:"Tình huống khác",zh:"我去过河内两次。",py:"Wǒ qùguo Hénèi liǎng cì.",vi:"Tôi đã từng đi Hà Nội hai lần."}],
    explanation:"次 là lượng từ động tác, đếm số lần một hành động xảy ra.",
    note:"一次、两次、很多次。"
  },

  {
    id:"hsk2-25",
    pattern:"一起",
    title:"一起 — cùng nhau",
    structure:"S + 一起 + V",
    example:"我们一起吃饭吧。",
    pinyin:"Wǒmen yìqǐ chīfàn ba.",
    meaning:"Chúng ta cùng ăn cơm nhé.",
    examples:[{tag:"Câu gốc",zh:"我们一起吃饭吧。",py:"Wǒmen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."},{tag:"Tình huống khác",zh:"妈妈们一起吃饭吧。",py:"Māmamen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."},{tag:"Tình huống khác",zh:"老师们一起吃饭吧。",py:"Lǎoshīmen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."},{tag:"Tình huống khác",zh:"同学们们一起吃饭吧。",py:"Tóngxuémenmen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."},{tag:"Tình huống khác",zh:"他们一起吃饭吧。",py:"Tāmen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."}],
    explanation:"一起 biểu thị nhiều người cùng thực hiện một hành động.",
    note:"Thường đứng trước động từ."
  },

  {
    id:"hsk2-26",
    pattern:"还",
    title:"还 — vẫn / còn",
    structure:"S + 还 + V / Adj",
    example:"我还想喝茶。",
    pinyin:"Wǒ hái xiǎng hē chá.",
    meaning:"Tôi vẫn muốn uống trà.",
    examples:[{tag:"Câu gốc",zh:"我还想喝茶。",py:"Wǒ hái xiǎng hē chá.",vi:"Tôi vẫn muốn uống trà."},{tag:"Tình huống khác",zh:"妈妈还想喝茶。",py:"Māma hái xiǎng hē chá.",vi:"Mẹ vẫn muốn uống trà."},{tag:"Tình huống khác",zh:"老师还想喝茶。",py:"Lǎoshī hái xiǎng hē chá.",vi:"Thầy vẫn muốn uống trà."},{tag:"Tình huống khác",zh:"同学们还想喝茶。",py:"Tóngxuémen hái xiǎng hē chá.",vi:"Các bạn vẫn muốn uống trà."},{tag:"Tình huống khác",zh:"我还想喝咖啡。",py:"Wǒ hái xiǎng hē kāfēi.",vi:"Tôi vẫn muốn uống cà phê."}],
    explanation:"还 biểu thị trạng thái hoặc mong muốn vẫn tiếp tục.",
    note:"Cần phân biệt 还 với 再."
  },

  {
    id:"hsk2-27",
    pattern:"已经",
    title:"已经 — đã",
    structure:"S + 已经 + V + 了",
    example:"我已经吃饭了。",
    pinyin:"Wǒ yǐjīng chīfàn le.",
    meaning:"Tôi đã ăn cơm rồi.",
    examples:[{tag:"Câu gốc",zh:"我已经吃饭了。",py:"Wǒ yǐjīng chīfàn le.",vi:"Tôi đã ăn cơm rồi."},{tag:"Tình huống khác",zh:"妈妈已经吃饭了。",py:"Māma yǐjīng chīfàn le.",vi:"Mẹ đã ăn cơm rồi."},{tag:"Tình huống khác",zh:"老师已经吃饭了。",py:"Lǎoshī yǐjīng chīfàn le.",vi:"Thầy đã ăn cơm rồi."},{tag:"Tình huống khác",zh:"同学们已经吃饭了。",py:"Tóngxuémen yǐjīng chīfàn le.",vi:"Các bạn đã ăn cơm rồi."},{tag:"Tình huống khác",zh:"我已经吃面了。",py:"Wǒ yǐjīng chīmiàn le.",vi:"Tôi đã ăn mì rồi."}],
    explanation:"已经 nhấn mạnh hành động hoặc trạng thái đã xảy ra.",
    note:"Thường kết hợp với 了."
  },

  {
    id:"hsk2-28",
    pattern:"有时候",
    title:"有时候 — đôi khi",
    structure:"有时候 + S + V",
    example:"我有时候喝咖啡。",
    pinyin:"Wǒ yǒushíhou hē kāfēi.",
    meaning:"Đôi khi tôi uống cà phê.",
    examples:[{tag:"Câu gốc",zh:"我有时候喝咖啡。",py:"Wǒ yǒushíhou hē kāfēi.",vi:"Đôi khi tôi uống cà phê."},{tag:"Tình huống khác",zh:"妈妈有时候喝咖啡。",py:"Māma yǒushíhou hē kāfēi.",vi:"Đôi khi tôi uống cà phê."},{tag:"Tình huống khác",zh:"老师有时候喝咖啡。",py:"Lǎoshī yǒushíhou hē kāfēi.",vi:"Đôi khi tôi uống cà phê."},{tag:"Tình huống khác",zh:"同学们有时候喝咖啡。",py:"Tóngxuémen yǒushíhou hē kāfēi.",vi:"Đôi khi tôi uống cà phê."}],
    explanation:"有时候 biểu thị tần suất không thường xuyên.",
    note:"Có thể đứng đầu hoặc giữa câu."
  },

  {
    id:"hsk2-29",
    pattern:"快 / 快要",
    title:"快 / 快要 — sắp",
    structure:"快 / 快要 + V / Adj",
    example:"电影快开始了。",
    pinyin:"Diànyǐng kuài kāishǐ le.",
    meaning:"Bộ phim sắp bắt đầu rồi.",
    examples:[{tag:"Câu gốc",zh:"电影快开始了。",py:"Diànyǐng kuài kāishǐ le.",vi:"Bộ phim sắp bắt đầu rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：电影快开始了。",py:"Māma gàosu wǒ: Diànyǐng kuài kāishǐ le.",vi:"Mẹ bảo tôi: Bộ phim sắp bắt đầu rồi."},{tag:"Ở trường",zh:"在学校，电影快开始了。",py:"Zài xuéxiào, Diànyǐng kuài kāishǐ le.",vi:"Ở trường, Bộ phim sắp bắt đầu rồi."},{tag:"Lúc đi làm",zh:"上班的时候，电影快开始了。",py:"Shàngbān de shíhou, Diànyǐng kuài kāishǐ le.",vi:"Lúc đi làm, Bộ phim sắp bắt đầu rồi."}],
    explanation:"快 hoặc 快要 biểu thị một sự việc sắp xảy ra.",
    note:"Rất thường kết hợp với 了."
  },

  {
    id:"hsk2-30",
    pattern:"正在",
    title:"正在 — đang",
    structure:"S + 正在 + V",
    example:"我正在学习汉语。",
    pinyin:"Wǒ zhèngzài xuéxí Hànyǔ.",
    meaning:"Tôi đang học tiếng Trung.",
    examples:[{tag:"Câu gốc",zh:"我正在学习汉语。",py:"Wǒ zhèngzài xuéxí Hànyǔ.",vi:"Tôi đang học tiếng Trung."},{tag:"Tình huống khác",zh:"妈妈正在学习汉语。",py:"Māma zhèngzài xuéxí Hànyǔ.",vi:"Mẹ đang học tiếng Trung."},{tag:"Tình huống khác",zh:"老师正在学习汉语。",py:"Lǎoshī zhèngzài xuéxí Hànyǔ.",vi:"Thầy đang học tiếng Trung."},{tag:"Tình huống khác",zh:"同学们正在学习汉语。",py:"Tóngxuémen zhèngzài xuéxí Hànyǔ.",vi:"Các bạn đang học tiếng Trung."},{tag:"Tình huống khác",zh:"我正在学习中文。",py:"Wǒ zhèngzài xuéxí Zhōngwén.",vi:"Tôi đang học chữ Trung."}],
    explanation:"正在 nhấn mạnh hành động đang diễn ra tại thời điểm nói.",
    note:"Có thể gặp 正 hoặc 在 trong cách nói tương tự."
  },

  {
    id:"hsk2-31",
    pattern:"常 / 经常",
    title:"常 / 经常 — thường xuyên",
    structure:"S + 常 / 经常 + V",
    example:"我经常看中文书。",
    pinyin:"Wǒ jīngcháng kàn Zhōngwén shū.",
    meaning:"Tôi thường xuyên đọc sách tiếng Trung.",
    examples:[{tag:"Câu gốc",zh:"我经常看中文书。",py:"Wǒ jīngcháng kàn Zhōngwén shū.",vi:"Tôi thường xuyên đọc sách tiếng Trung."},{tag:"Tình huống khác",zh:"妈妈经常看中文书。",py:"Māma jīngcháng kàn Zhōngwén shū.",vi:"Mẹ thường xuyên đọc sách tiếng Trung."},{tag:"Tình huống khác",zh:"老师经常看中文书。",py:"Lǎoshī jīngcháng kàn Zhōngwén shū.",vi:"Thầy thường xuyên đọc sách tiếng Trung."},{tag:"Tình huống khác",zh:"同学们经常看中文书。",py:"Tóngxuémen jīngcháng kàn Zhōngwén shū.",vi:"Các bạn thường xuyên đọc sách tiếng Trung."},{tag:"Tình huống khác",zh:"我经常看中文地图。",py:"Wǒ jīngcháng kàn Zhōngwén dìtú.",vi:"Tôi thường xuyên đọc bản đồ tiếng Trung."}],
    explanation:"常 và 经常 biểu thị hành động xảy ra với tần suất cao.",
    note:"经常 thường dùng trong khẩu ngữ."
  },

  {
    id:"hsk2-32",
    pattern:"别",
    title:"别 — đừng",
    structure:"别 + V",
    example:"别说话。",
    pinyin:"Bié shuōhuà.",
    meaning:"Đừng nói chuyện.",
    examples:[{tag:"Câu gốc",zh:"别说话。",py:"Bié shuōhuà.",vi:"Đừng nói chuyện."},{tag:"Ở nhà",zh:"妈妈告诉我：别说话。",py:"Māma gàosu wǒ: Bié shuōhuà.",vi:"Mẹ bảo tôi: Đừng nói chuyện."},{tag:"Ở trường",zh:"在学校，别说话。",py:"Zài xuéxiào, Bié shuōhuà.",vi:"Ở trường, Đừng nói chuyện."},{tag:"Lúc đi làm",zh:"上班的时候，别说话。",py:"Shàngbān de shíhou, Bié shuōhuà.",vi:"Lúc đi làm, Đừng nói chuyện."}],
    explanation:"别 đứng trước động từ để đưa ra lời cấm hoặc lời nhắc không làm việc gì.",
    note:"别 + V là mẫu rất quan trọng."
  },

  {
    id:"hsk2-33",
    pattern:"再",
    title:"再 — lại / thêm một lần nữa",
    structure:"再 + V",
    example:"请再说一次。",
    pinyin:"Qǐng zài shuō yí cì.",
    meaning:"Xin hãy nói lại một lần nữa.",
    examples:[{tag:"Câu gốc",zh:"请再说一次。",py:"Qǐng zài shuō yí cì.",vi:"Xin hãy nói lại một lần nữa."},{tag:"Ở nhà",zh:"妈妈告诉我：请再说一次。",py:"Māma gàosu wǒ: Qǐng zài shuō yí cì.",vi:"Mẹ bảo tôi: Xin hãy nói lại một lần nữa."},{tag:"Ở trường",zh:"在学校，请再说一次。",py:"Zài xuéxiào, Qǐng zài shuō yí cì.",vi:"Ở trường, Xin hãy nói lại một lần nữa."},{tag:"Lúc đi làm",zh:"上班的时候，请再说一次。",py:"Shàngbān de shíhou, Qǐng zài shuō yí cì.",vi:"Lúc đi làm, Xin hãy nói lại một lần nữa."}],
    explanation:"再 thường chỉ hành động sẽ được thực hiện thêm một lần.",
    note:"再 thường hướng về tương lai."
  },

  {
    id:"hsk2-34",
    pattern:"就",
    title:"就 — liền / đã",
    structure:"S + 就 + V",
    example:"我马上就回来。",
    pinyin:"Wǒ mǎshàng jiù huílái.",
    meaning:"Tôi sẽ về ngay.",
    examples:[{tag:"Câu gốc",zh:"我马上就回来。",py:"Wǒ mǎshàng jiù huílái.",vi:"Tôi sẽ về ngay."},{tag:"Tình huống khác",zh:"妈妈马上就回来。",py:"Māma mǎshàng jiù huílái.",vi:"Mẹ sẽ về ngay."},{tag:"Tình huống khác",zh:"老师马上就回来。",py:"Lǎoshī mǎshàng jiù huílái.",vi:"Thầy sẽ về ngay."},{tag:"Tình huống khác",zh:"同学们马上就回来。",py:"Tóngxuémen mǎshàng jiù huílái.",vi:"Các bạn sẽ về ngay."}],
    explanation:"就 có nhiều cách dùng; ở đây nhấn mạnh tính nhanh hoặc sớm của hành động.",
    note:"就 cần học theo từng cấu trúc."
  },

  {
    id:"hsk2-35",
    pattern:"都",
    title:"都 — đều",
    structure:"S + 都 + V / Adj",
    example:"我们都是学生。",
    pinyin:"Wǒmen dōu shì xuésheng.",
    meaning:"Chúng tôi đều là học sinh.",
    examples:[{tag:"Câu gốc",zh:"我们都是学生。",py:"Wǒmen dōu shì xuésheng.",vi:"Chúng tôi đều là học sinh."},{tag:"Tình huống khác",zh:"妈妈们都是学生。",py:"Māmamen dōu shì xuésheng.",vi:"Chúng tôi đều là học sinh."},{tag:"Tình huống khác",zh:"老师们都是学生。",py:"Lǎoshīmen dōu shì xuésheng.",vi:"Chúng tôi đều là học sinh."},{tag:"Tình huống khác",zh:"同学们们都是学生。",py:"Tóngxuémenmen dōu shì xuésheng.",vi:"Chúng tôi đều là học sinh."},{tag:"Tình huống khác",zh:"他们都是学生。",py:"Tāmen dōu shì xuésheng.",vi:"Họ đều là học sinh."}],
    explanation:"都 biểu thị toàn bộ những người hoặc sự vật được nói đến.",
    note:"都 thường đứng sau chủ ngữ."
  },

  {
    id:"hsk2-36",
    pattern:"还是",
    title:"还是 — vẫn / hay là",
    structure:"还是 + lựa chọn / trạng thái",
    example:"你还是学生吗？",
    pinyin:"Nǐ háishi xuésheng ma?",
    meaning:"Bạn vẫn là học sinh à?",
    examples:[{tag:"Câu gốc",zh:"你还是学生吗？",py:"Nǐ háishi xuésheng ma?",vi:"Bạn vẫn là học sinh à?"},{tag:"Ở nhà",zh:"妈妈告诉我：你还是学生吗？",py:"Māma gàosu wǒ: Nǐ háishi xuésheng ma?",vi:"Mẹ bảo tôi: Bạn vẫn là học sinh à?"},{tag:"Ở trường",zh:"在学校，你还是学生吗？",py:"Zài xuéxiào, Nǐ háishi xuésheng ma?",vi:"Ở trường, Bạn vẫn là học sinh à?"},{tag:"Lúc đi làm",zh:"上班的时候，你还是学生吗？",py:"Shàngbān de shíhou, Nǐ háishi xuésheng ma?",vi:"Lúc đi làm, Bạn vẫn là học sinh à?"}],
    explanation:"Trong ngữ cảnh này 还是 mang nghĩa vẫn còn.",
    note:"还是 còn có cách dùng để hỏi lựa chọn."
  },

  {
    id:"hsk2-37",
    pattern:"从",
    title:"从 — từ thời gian / địa điểm",
    structure:"从 + Time / Place + V",
    example:"我从北京来。",
    pinyin:"Wǒ cóng Běijīng lái.",
    meaning:"Tôi đến từ Bắc Kinh.",
    examples:[{tag:"Câu gốc",zh:"我从北京来。",py:"Wǒ cóng Běijīng lái.",vi:"Tôi đến từ Bắc Kinh."},{tag:"Tình huống khác",zh:"妈妈从北京来。",py:"Māma cóng Běijīng lái.",vi:"Mẹ đến từ Bắc Kinh."},{tag:"Tình huống khác",zh:"老师从北京来。",py:"Lǎoshī cóng Běijīng lái.",vi:"Thầy đến từ Bắc Kinh."},{tag:"Tình huống khác",zh:"同学们从北京来。",py:"Tóngxuémen cóng Běijīng lái.",vi:"Các bạn đến từ Bắc Kinh."},{tag:"Tình huống khác",zh:"我从河内来。",py:"Wǒ cóng Hénèi lái.",vi:"Tôi đến từ Hà Nội."}],
    explanation:"从 dùng để chỉ điểm bắt đầu về thời gian hoặc không gian.",
    note:"从今天开始 = bắt đầu từ hôm nay."
  },

  {
    id:"hsk2-38",
    pattern:"往",
    title:"往 — hướng về",
    structure:"往 + Place / Direction + V",
    example:"我们往前走。",
    pinyin:"Wǒmen wǎng qián zǒu.",
    meaning:"Chúng ta đi về phía trước.",
    examples:[{tag:"Câu gốc",zh:"我们往前走。",py:"Wǒmen wǎng qián zǒu.",vi:"Chúng ta đi về phía trước."},{tag:"Tình huống khác",zh:"妈妈们往前走。",py:"Māmamen wǎng qián zǒu.",vi:"Chúng ta đi về phía trước."},{tag:"Tình huống khác",zh:"老师们往前走。",py:"Lǎoshīmen wǎng qián zǒu.",vi:"Chúng ta đi về phía trước."},{tag:"Tình huống khác",zh:"同学们们往前走。",py:"Tóngxuémenmen wǎng qián zǒu.",vi:"Chúng ta đi về phía trước."},{tag:"Tình huống khác",zh:"他们往前走。",py:"Tāmen wǎng qián zǒu.",vi:"Chúng ta đi về phía trước."}],
    explanation:"往 biểu thị hướng di chuyển.",
    note:"往前、往后、往左、往右."
  },

  {
    id:"hsk2-39",
    pattern:"从",
    title:"从 — từ một nơi theo đường đi",
    structure:"从 + Place + V",
    example:"我从学校回家。",
    pinyin:"Wǒ cóng xuéxiào huí jiā.",
    meaning:"Tôi từ trường về nhà.",
    examples:[{tag:"Câu gốc",zh:"我从学校回家。",py:"Wǒ cóng xuéxiào huí jiā.",vi:"Tôi từ trường về nhà."},{tag:"Tình huống khác",zh:"妈妈从学校回家。",py:"Māma cóng xuéxiào huí jiā.",vi:"Mẹ từ trường về nhà."},{tag:"Tình huống khác",zh:"老师从学校回家。",py:"Lǎoshī cóng xuéxiào huí jiā.",vi:"Thầy từ trường về nhà."},{tag:"Tình huống khác",zh:"同学们从学校回家。",py:"Tóngxuémen cóng xuéxiào huí jiā.",vi:"Các bạn từ trường về nhà."},{tag:"Tình huống khác",zh:"我从医院回家。",py:"Wǒ cóng yīyuàn huí jiā.",vi:"Tôi từ bệnh viện về nhà."}],
    explanation:"从 cũng có thể chỉ điểm xuất phát của một hành trình.",
    note:"Có thể kết hợp với 到 để biểu thị từ... đến..."
  },

  {
    id:"hsk2-40",
    pattern:"给",
    title:"给 — cho / đối tượng",
    structure:"给 + Person + V",
    example:"我给朋友打电话。",
    pinyin:"Wǒ gěi péngyou dǎ diànhuà.",
    meaning:"Tôi gọi điện cho bạn.",
    examples:[{tag:"Câu gốc",zh:"我给朋友打电话。",py:"Wǒ gěi péngyou dǎ diànhuà.",vi:"Tôi gọi điện cho bạn."},{tag:"Tình huống khác",zh:"妈妈给朋友打电话。",py:"Māma gěi péngyou dǎ diànhuà.",vi:"Mẹ gọi điện cho bạn."},{tag:"Tình huống khác",zh:"老师给朋友打电话。",py:"Lǎoshī gěi péngyou dǎ diànhuà.",vi:"Thầy gọi điện cho bạn."},{tag:"Tình huống khác",zh:"同学们给朋友打电话。",py:"Tóngxuémen gěi péngyou dǎ diànhuà.",vi:"Các bạn gọi điện cho bạn."},{tag:"Tình huống khác",zh:"我给同学打电话。",py:"Wǒ gěi tóngxué dǎ diànhuà.",vi:"Tôi gọi điện cho bạn học."}],
    explanation:"给 có thể đứng trước người nhận hoặc đối tượng mà hành động hướng tới.",
    note:"给谁？ = cho ai?"
  },

  {
    id:"hsk2-41",
    pattern:"跟",
    title:"跟 — với / cùng",
    structure:"跟 + Person + V",
    example:"我跟朋友一起学习。",
    pinyin:"Wǒ gēn péngyou yìqǐ xuéxí.",
    meaning:"Tôi học cùng bạn.",
    examples:[{tag:"Câu gốc",zh:"我跟朋友一起学习。",py:"Wǒ gēn péngyou yìqǐ xuéxí.",vi:"Tôi học cùng bạn."},{tag:"Tình huống khác",zh:"妈妈跟朋友一起学习。",py:"Māma gēn péngyou yìqǐ xuéxí.",vi:"Mẹ học cùng bạn."},{tag:"Tình huống khác",zh:"老师跟朋友一起学习。",py:"Lǎoshī gēn péngyou yìqǐ xuéxí.",vi:"Thầy học cùng bạn."},{tag:"Tình huống khác",zh:"同学们跟朋友一起学习。",py:"Tóngxuémen gēn péngyou yìqǐ xuéxí.",vi:"Các bạn học cùng bạn."},{tag:"Tình huống khác",zh:"我跟同学一起学习。",py:"Wǒ gēn tóngxué yìqǐ xuéxí.",vi:"Tôi học cùng bạn học."}],
    explanation:"跟 có thể đưa ra đối tượng cùng tham gia hành động.",
    note:"跟 + người + V."
  },

  {
    id:"hsk2-42",
    pattern:"因为",
    title:"因为 — bởi vì",
    structure:"因为 + nguyên nhân",
    example:"我因为工作很忙。",
    pinyin:"Wǒ yīnwèi gōngzuò hěn máng.",
    meaning:"Vì công việc nên tôi rất bận.",
    examples:[{tag:"Câu gốc",zh:"我因为工作很忙。",py:"Wǒ yīnwèi gōngzuò hěn máng.",vi:"Vì công việc nên tôi rất bận."},{tag:"Tình huống khác",zh:"妈妈因为工作很忙。",py:"Māma yīnwèi gōngzuò hěn máng.",vi:"Vì công việc nên tôi rất bận."},{tag:"Tình huống khác",zh:"老师因为工作很忙。",py:"Lǎoshī yīnwèi gōngzuò hěn máng.",vi:"Vì công việc nên tôi rất bận."},{tag:"Tình huống khác",zh:"同学们因为工作很忙。",py:"Tóngxuémen yīnwèi gōngzuò hěn máng.",vi:"Vì công việc nên tôi rất bận."}],
    explanation:"因为 đưa ra nguyên nhân.",
    note:"Ở câu phức thường kết hợp với 所以."
  },

  {
    id:"hsk2-43",
    pattern:"跟",
    title:"跟 — và",
    structure:"A + 跟 + B",
    example:"我跟朋友吃饭。",
    pinyin:"Wǒ gēn péngyou chīfàn.",
    meaning:"Tôi ăn cơm với bạn.",
    examples:[{tag:"Câu gốc",zh:"我跟朋友吃饭。",py:"Wǒ gēn péngyou chīfàn.",vi:"Tôi ăn cơm với bạn."},{tag:"Tình huống khác",zh:"妈妈跟朋友吃饭。",py:"Māma gēn péngyou chīfàn.",vi:"Mẹ ăn cơm với bạn."},{tag:"Tình huống khác",zh:"老师跟朋友吃饭。",py:"Lǎoshī gēn péngyou chīfàn.",vi:"Thầy ăn cơm với bạn."},{tag:"Tình huống khác",zh:"同学们跟朋友吃饭。",py:"Tóngxuémen gēn péngyou chīfàn.",vi:"Các bạn ăn cơm với bạn."},{tag:"Tình huống khác",zh:"我跟同学吃饭。",py:"Wǒ gēn tóngxué chīfàn.",vi:"Tôi ăn cơm với bạn học."}],
    explanation:"跟 có thể nối hai đối tượng có quan hệ cùng tham gia hành động.",
    note:"Đây là cách dùng liên kết khác với 跟 chỉ đối tượng."
  },

  {
    id:"hsk2-44",
    pattern:"但 / 但是",
    title:"但 / 但是 — nhưng",
    structure:"A，但是 B",
    example:"我很累，但是我还要工作。",
    pinyin:"Wǒ hěn lèi, dànshì wǒ hái yào gōngzuò.",
    meaning:"Tôi rất mệt, nhưng tôi vẫn phải làm việc.",
    examples:[{tag:"Câu gốc",zh:"我很累，但是我还要工作。",py:"Wǒ hěn lèi, dànshì wǒ hái yào gōngzuò.",vi:"Tôi rất mệt, nhưng tôi vẫn phải làm việc."},{tag:"Tình huống khác",zh:"妈妈很累，但是妈妈还要工作。",py:"Māma hěn lèi, dànshì wǒ hái yào gōngzuò.",vi:"Mẹ rất mệt, nhưng tôi vẫn phải làm việc."},{tag:"Tình huống khác",zh:"老师很累，但是老师还要工作。",py:"Lǎoshī hěn lèi, dànshì wǒ hái yào gōngzuò.",vi:"Thầy rất mệt, nhưng tôi vẫn phải làm việc."},{tag:"Tình huống khác",zh:"同学们很累，但是同学们还要工作。",py:"Tóngxuémen hěn lèi, dànshì wǒ hái yào gōngzuò.",vi:"Các bạn rất mệt, nhưng tôi vẫn phải làm việc."}],
    explanation:"但 hoặc 但是 nối hai ý có quan hệ đối lập.",
    note:"但是 thường dùng rất tự nhiên trong khẩu ngữ."
  },

  {
    id:"hsk2-45",
    pattern:"虽然",
    title:"虽然 — mặc dù",
    structure:"虽然 A，但是 B",
    example:"虽然很累，但是我很开心。",
    pinyin:"Suīrán hěn lèi, dànshì wǒ hěn kāixīn.",
    meaning:"Mặc dù rất mệt nhưng tôi rất vui.",
    examples:[{tag:"Câu gốc",zh:"虽然很累，但是我很开心。",py:"Suīrán hěn lèi, dànshì wǒ hěn kāixīn.",vi:"Mặc dù rất mệt nhưng tôi rất vui."},{tag:"Tình huống khác",zh:"虽然很累，但是妈妈很开心。",py:"Suīrán hěn lèi, dànshì Māma hěn kāixīn.",vi:"Mặc dù rất mệt nhưng tôi rất vui."},{tag:"Tình huống khác",zh:"虽然很累，但是老师很开心。",py:"Suīrán hěn lèi, dànshì Lǎoshī hěn kāixīn.",vi:"Mặc dù rất mệt nhưng tôi rất vui."},{tag:"Tình huống khác",zh:"虽然很累，但是同学们很开心。",py:"Suīrán hěn lèi, dànshì Tóngxuémen hěn kāixīn.",vi:"Mặc dù rất mệt nhưng tôi rất vui."}],
    explanation:"虽然 đưa ra một điều kiện hoặc sự thật trái với kết quả ở vế sau.",
    note:"Thường học cùng 但是."
  },

  {
    id:"hsk2-46",
    pattern:"得",
    title:"得 — bổ ngữ trạng thái",
    structure:"V + 得 + Adj",
    example:"他说得很好。",
    pinyin:"Tā shuō de hěn hǎo.",
    meaning:"Anh ấy nói rất hay.",
    examples:[{tag:"Câu gốc",zh:"他说得很好。",py:"Tā shuō de hěn hǎo.",vi:"Anh ấy nói rất hay."},{tag:"Ở nhà",zh:"妈妈告诉我：他说得很好。",py:"Māma gàosu wǒ: Tā shuō de hěn hǎo.",vi:"Mẹ bảo tôi: Anh ấy nói rất hay."},{tag:"Ở trường",zh:"在学校，他说得很好。",py:"Zài xuéxiào, Tā shuō de hěn hǎo.",vi:"Ở trường, Anh ấy nói rất hay."},{tag:"Lúc đi làm",zh:"上班的时候，他说得很好。",py:"Shàngbān de shíhou, Tā shuō de hěn hǎo.",vi:"Lúc đi làm, Anh ấy nói rất hay."}],
    explanation:"得 nối động từ với phần mô tả mức độ hoặc trạng thái của hành động.",
    note:"得 đứng sau động từ."
  },

  {
    id:"hsk2-47",
    pattern:"地",
    title:"地 — trạng ngữ",
    structure:"Adj + 地 + V",
    example:"他高兴地回家了。",
    pinyin:"Tā gāoxìng de huí jiā le.",
    meaning:"Anh ấy vui vẻ trở về nhà.",
    examples:[{tag:"Câu gốc",zh:"他高兴地回家了。",py:"Tā gāoxìng de huí jiā le.",vi:"Anh ấy vui vẻ trở về nhà."},{tag:"Ở nhà",zh:"妈妈告诉我：他高兴地回家了。",py:"Māma gàosu wǒ: Tā gāoxìng de huí jiā le.",vi:"Mẹ bảo tôi: Anh ấy vui vẻ trở về nhà."},{tag:"Ở trường",zh:"在学校，他高兴地回家了。",py:"Zài xuéxiào, Tā gāoxìng de huí jiā le.",vi:"Ở trường, Anh ấy vui vẻ trở về nhà."},{tag:"Lúc đi làm",zh:"上班的时候，他高兴地回家了。",py:"Shàngbān de shíhou, Tā gāoxìng de huí jiā le.",vi:"Lúc đi làm, Anh ấy vui vẻ trở về nhà."}],
    explanation:"地 nối thành phần miêu tả cách thức với động từ.",
    note:"地 đứng trước động từ."
  },

  {
    id:"hsk2-48",
    pattern:"过",
    title:"过 — đã từng",
    structure:"S + V + 过 + O",
    example:"我去过中国。",
    pinyin:"Wǒ qùguo Zhōngguó.",
    meaning:"Tôi đã từng đến Trung Quốc.",
    examples:[{tag:"Câu gốc",zh:"我去过中国。",py:"Wǒ qùguo Zhōngguó.",vi:"Tôi đã từng đến Trung Quốc."},{tag:"Tình huống khác",zh:"妈妈去过中国。",py:"Māma qùguo Zhōngguó.",vi:"Mẹ đã từng đến Trung Quốc."},{tag:"Tình huống khác",zh:"老师去过中国。",py:"Lǎoshī qùguo Zhōngguó.",vi:"Thầy đã từng đến Trung Quốc."},{tag:"Tình huống khác",zh:"同学们去过中国。",py:"Tóngxuémen qùguo Zhōngguó.",vi:"Các bạn đã từng đến Trung Quốc."},{tag:"Tình huống khác",zh:"我去过越南。",py:"Wǒ qùguo Yuènán.",vi:"Tôi đã từng đến Việt Nam."}],
    explanation:"过 biểu thị trải nghiệm đã từng xảy ra.",
    note:"Không nhấn mạnh thời điểm cụ thể."
  },

  {
    id:"hsk2-49",
    pattern:"着",
    title:"着 — trạng thái đang duy trì",
    structure:"V + 着",
    example:"门开着。",
    pinyin:"Mén kāizhe.",
    meaning:"Cửa đang mở.",
    examples:[{tag:"Câu gốc",zh:"门开着。",py:"Mén kāizhe.",vi:"Cửa đang mở."},{tag:"Ở nhà",zh:"妈妈告诉我：门开着。",py:"Māma gàosu wǒ: Mén kāizhe.",vi:"Mẹ bảo tôi: Cửa đang mở."},{tag:"Ở trường",zh:"在学校，门开着。",py:"Zài xuéxiào, Mén kāizhe.",vi:"Ở trường, Cửa đang mở."},{tag:"Lúc đi làm",zh:"上班的时候，门开着。",py:"Shàngbān de shíhou, Mén kāizhe.",vi:"Lúc đi làm, Cửa đang mở."}],
    explanation:"着 có thể biểu thị một trạng thái đang được duy trì.",
    note:"开着、关着、坐着 đều rất thường gặp."
  },

  {
    id:"hsk2-50",
    pattern:"呢",
    title:"呢 — còn... thì sao?",
    structure:"S + 呢？",
    example:"我很好，你呢？",
    pinyin:"Wǒ hěn hǎo, nǐ ne?",
    meaning:"Tôi rất khỏe, còn bạn?",
    examples:[{tag:"Câu gốc",zh:"我很好，你呢？",py:"Wǒ hěn hǎo, nǐ ne?",vi:"Tôi rất khỏe, còn bạn?"},{tag:"Tình huống khác",zh:"妈妈很好，你呢？",py:"Māma hěn hǎo, nǐ ne?",vi:"Mẹ rất khỏe, còn bạn?"},{tag:"Tình huống khác",zh:"老师很好，你呢？",py:"Lǎoshī hěn hǎo, nǐ ne?",vi:"Thầy rất khỏe, còn bạn?"},{tag:"Tình huống khác",zh:"同学们很好，你呢？",py:"Tóngxuémen hěn hǎo, nǐ ne?",vi:"Các bạn rất khỏe, còn bạn?"}],
    explanation:"呢 có thể dùng để hỏi lại về đối tượng hoặc chủ đề đang được nói đến.",
    note:"Rất thường gặp trong hội thoại."
  },

  {
    id:"hsk2-51",
    pattern:"吧",
    title:"吧 — nhé / đi",
    structure:"S + V + 吧",
    example:"我们走吧。",
    pinyin:"Wǒmen zǒu ba.",
    meaning:"Chúng ta đi nhé.",
    examples:[{tag:"Câu gốc",zh:"我们走吧。",py:"Wǒmen zǒu ba.",vi:"Chúng ta đi nhé."},{tag:"Tình huống khác",zh:"妈妈们走吧。",py:"Māmamen zǒu ba.",vi:"Chúng ta đi nhé."},{tag:"Tình huống khác",zh:"老师们走吧。",py:"Lǎoshīmen zǒu ba.",vi:"Chúng ta đi nhé."},{tag:"Tình huống khác",zh:"同学们们走吧。",py:"Tóngxuémenmen zǒu ba.",vi:"Chúng ta đi nhé."},{tag:"Tình huống khác",zh:"他们走吧。",py:"Tāmen zǒu ba.",vi:"Chúng ta đi nhé."}],
    explanation:"吧 thường làm câu đề nghị hoặc lời gợi ý nhẹ hơn.",
    note:"Cũng có những cách dùng khác ở trình độ cao hơn."
  },

  {
    id:"hsk2-52",
    pattern:"啊",
    title:"啊 — trợ từ ngữ khí",
    structure:"Sentence + 啊",
    example:"今天真热啊！",
    pinyin:"Jīntiān zhēn rè a!",
    meaning:"Hôm nay nóng thật đấy!",
    examples:[{tag:"Câu gốc",zh:"今天真热啊！",py:"Jīntiān zhēn rè a!",vi:"Hôm nay nóng thật đấy!"},{tag:"Ở nhà",zh:"妈妈告诉我：今天真热啊！",py:"Māma gàosu wǒ: Jīntiān zhēn rè a!",vi:"Mẹ bảo tôi: Hôm nay nóng thật đấy!"},{tag:"Ở trường",zh:"在学校，今天真热啊！",py:"Zài xuéxiào, Jīntiān zhēn rè a!",vi:"Ở trường, Hôm nay nóng thật đấy!"},{tag:"Lúc đi làm",zh:"上班的时候，今天真热啊！",py:"Shàngbān de shíhou, Jīntiān zhēn rè a!",vi:"Lúc đi làm, Hôm nay nóng thật đấy!"}],
    explanation:"啊 làm tăng sắc thái cảm xúc của câu.",
    note:"Cách phát âm có thể thay đổi theo âm đứng trước."
  },

  {
    id:"hsk2-53",
    pattern:"的",
    title:"的 — sắc thái ngữ khí",
    structure:"Sentence + 的",
    example:"他会来的。",
    pinyin:"Tā huì lái de.",
    meaning:"Anh ấy sẽ đến mà.",
    examples:[{tag:"Câu gốc",zh:"他会来的。",py:"Tā huì lái de.",vi:"Anh ấy sẽ đến mà."},{tag:"Ở nhà",zh:"妈妈告诉我：他会来的。",py:"Māma gàosu wǒ: Tā huì lái de.",vi:"Mẹ bảo tôi: Anh ấy sẽ đến mà."},{tag:"Ở trường",zh:"在学校，他会来的。",py:"Zài xuéxiào, Tā huì lái de.",vi:"Ở trường, Anh ấy sẽ đến mà."},{tag:"Lúc đi làm",zh:"上班的时候，他会来的。",py:"Shàngbān de shíhou, Tā huì lái de.",vi:"Lúc đi làm, Anh ấy sẽ đến mà."}],
    explanation:"的 trong một số cấu trúc cuối câu có thể nhấn mạnh sự khẳng định.",
    note:"Không nhầm với 的 dùng để biểu thị sở hữu."
  },

  {
    id:"hsk2-54",
    pattern:"动补短语",
    title:"Động từ + bổ ngữ cơ bản",
    structure:"V + Complement",
    example:"我看完书了。",
    pinyin:"Wǒ kàn wán shū le.",
    meaning:"Tôi đọc xong sách rồi.",
    examples:[{tag:"Câu gốc",zh:"我看完书了。",py:"Wǒ kàn wán shū le.",vi:"Tôi đọc xong sách rồi."},{tag:"Tình huống khác",zh:"妈妈看完书了。",py:"Māma kàn wán shū le.",vi:"Mẹ đọc xong sách rồi."},{tag:"Tình huống khác",zh:"老师看完书了。",py:"Lǎoshī kàn wán shū le.",vi:"Thầy đọc xong sách rồi."},{tag:"Tình huống khác",zh:"同学们看完书了。",py:"Tóngxuémen kàn wán shū le.",vi:"Các bạn đọc xong sách rồi."},{tag:"Tình huống khác",zh:"我看完地图了。",py:"Wǒ kàn wán dìtú le.",vi:"Tôi đọc xong bản đồ rồi."}],
    explanation:"Bổ ngữ đứng sau động từ để bổ sung thông tin về kết quả hoặc hướng của hành động.",
    note:"HSK2 bắt đầu mở rộng mạnh hệ thống bổ ngữ."
  },

  {
    id:"hsk2-55",
    pattern:"的字短语",
    title:"Cụm 的",
    structure:"V / Phrase + 的 + N",
    example:"我买的书很好。",
    pinyin:"Wǒ mǎi de shū hěn hǎo.",
    meaning:"Quyển sách tôi mua rất hay.",
    examples:[{tag:"Câu gốc",zh:"我买的书很好。",py:"Wǒ mǎi de shū hěn hǎo.",vi:"Quyển sách tôi mua rất hay."},{tag:"Tình huống khác",zh:"妈妈买的书很好。",py:"Māma mǎi de shū hěn hǎo.",vi:"Quyển sách tôi mua rất hay."},{tag:"Tình huống khác",zh:"老师买的书很好。",py:"Lǎoshī mǎi de shū hěn hǎo.",vi:"Quyển sách tôi mua rất hay."},{tag:"Tình huống khác",zh:"同学们买的书很好。",py:"Tóngxuémen mǎi de shū hěn hǎo.",vi:"Quyển sách tôi mua rất hay."},{tag:"Tình huống khác",zh:"我买的地图很好。",py:"Wǒ mǎi de dìtú hěn hǎo.",vi:"Quyển bản đồ tôi mua rất hay."}],
    explanation:"Cụm đứng trước 的 dùng để bổ nghĩa cho danh từ phía sau.",
    note:"Cấu trúc này rất quan trọng khi câu bắt đầu dài hơn."
  },

  {
    id:"hsk2-56",
    pattern:"连谓短语",
    title:"Cụm liên động",
    structure:"S + V1 + ... + V2",
    example:"我去商店买东西。",
    pinyin:"Wǒ qù shāngdiàn mǎi dōngxi.",
    meaning:"Tôi đi cửa hàng mua đồ.",
    examples:[{tag:"Câu gốc",zh:"我去商店买东西。",py:"Wǒ qù shāngdiàn mǎi dōngxi.",vi:"Tôi đi cửa hàng mua đồ."},{tag:"Tình huống khác",zh:"妈妈去商店买东西。",py:"Māma qù shāngdiàn mǎi dōngxi.",vi:"Mẹ đi cửa hàng mua đồ."},{tag:"Tình huống khác",zh:"老师去商店买东西。",py:"Lǎoshī qù shāngdiàn mǎi dōngxi.",vi:"Thầy đi cửa hàng mua đồ."},{tag:"Tình huống khác",zh:"同学们去商店买东西。",py:"Tóngxuémen qù shāngdiàn mǎi dōngxi.",vi:"Các bạn đi cửa hàng mua đồ."}],
    explanation:"Một chủ ngữ thực hiện liên tiếp hai hoặc nhiều hành động.",
    note:"Các động tác thường có quan hệ logic với nhau."
  },

  {
    id:"hsk2-57",
    pattern:"兼语短语",
    title:"Cụm kiêm ngữ",
    structure:"S + V1 + O + V2",
    example:"妈妈让我学习。",
    pinyin:"Māma ràng wǒ xuéxí.",
    meaning:"Mẹ bảo tôi học.",
    examples:[{tag:"Câu gốc",zh:"妈妈让我学习。",py:"Māma ràng wǒ xuéxí.",vi:"Mẹ bảo tôi học."},{tag:"Tình huống khác",zh:"妈妈让妈妈学习。",py:"Māma ràng Māma xuéxí.",vi:"Mẹ bảo tôi học."},{tag:"Tình huống khác",zh:"妈妈让老师学习。",py:"Māma ràng Lǎoshī xuéxí.",vi:"Mẹ bảo tôi học."},{tag:"Tình huống khác",zh:"妈妈让同学们学习。",py:"Māma ràng Tóngxuémen xuéxí.",vi:"Mẹ bảo tôi học."},{tag:"Tình huống khác",zh:"爸爸让我学习。",py:"Bàba ràng wǒ xuéxí.",vi:"Bố bảo tôi học."}],
    explanation:"Tân ngữ của động từ thứ nhất đồng thời là chủ thể của động từ thứ hai.",
    note:"我 vừa là tân ngữ của 让 vừa là chủ thể của 学习."
  },

  {
    id:"hsk2-58",
    pattern:"什么的",
    title:"什么的 — vân vân",
    structure:"N / Phrase + 什么的",
    example:"我喜欢茶、咖啡什么的。",
    pinyin:"Wǒ xǐhuan chá, kāfēi shénmede.",
    meaning:"Tôi thích trà, cà phê các thứ.",
    examples:[{tag:"Câu gốc",zh:"我喜欢茶、咖啡什么的。",py:"Wǒ xǐhuan chá, kāfēi shénmede.",vi:"Tôi thích trà, cà phê các thứ."},{tag:"Tình huống khác",zh:"妈妈喜欢茶、咖啡什么的。",py:"Māma xǐhuan chá, kāfēi shénmede.",vi:"Mẹ thích trà, cà phê các thứ."},{tag:"Tình huống khác",zh:"老师喜欢茶、咖啡什么的。",py:"Lǎoshī xǐhuan chá, kāfēi shénmede.",vi:"Thầy thích trà, cà phê các thứ."},{tag:"Tình huống khác",zh:"同学们喜欢茶、咖啡什么的。",py:"Tóngxuémen xǐhuan chá, kāfēi shénmede.",vi:"Các bạn thích trà, cà phê các thứ."},{tag:"Tình huống khác",zh:"我喜欢咖啡、咖啡什么的。",py:"Wǒ xǐhuan kāfēi, kāfēi shénmede.",vi:"Tôi thích cà phê, cà phê các thứ."}],
    explanation:"什么的 đặt sau một hoặc một số ví dụ để biểu thị những thứ tương tự.",
    note:"Mang sắc thái khẩu ngữ."
  },

  {
    id:"hsk2-59",
    pattern:"还是……吧",
    title:"还是……吧 — hay là nên...",
    structure:"还是 + V + 吧",
    example:"我们还是回家吧。",
    pinyin:"Wǒmen háishi huí jiā ba.",
    meaning:"Hay là chúng ta về nhà đi.",
    examples:[{tag:"Câu gốc",zh:"我们还是回家吧。",py:"Wǒmen háishi huí jiā ba.",vi:"Hay là chúng ta về nhà đi."},{tag:"Tình huống khác",zh:"妈妈们还是回家吧。",py:"Māmamen háishi huí jiā ba.",vi:"Hay là chúng ta về nhà đi."},{tag:"Tình huống khác",zh:"老师们还是回家吧。",py:"Lǎoshīmen háishi huí jiā ba.",vi:"Hay là chúng ta về nhà đi."},{tag:"Tình huống khác",zh:"同学们们还是回家吧。",py:"Tóngxuémenmen háishi huí jiā ba.",vi:"Hay là chúng ta về nhà đi."},{tag:"Tình huống khác",zh:"他们还是回家吧。",py:"Tāmen háishi huí jiā ba.",vi:"Hay là chúng ta về nhà đi."}],
    explanation:"Mẫu này đưa ra một lựa chọn hoặc đề nghị mà người nói cho là phù hợp.",
    note:"Khác với 还是 dùng trong câu hỏi lựa chọn."
  },

  {
    id:"hsk2-60",
    pattern:"要……了",
    title:"要……了 — sắp...",
    structure:"要 + V + 了",
    example:"要下雨了。",
    pinyin:"Yào xiàyǔ le.",
    meaning:"Trời sắp mưa rồi.",
    examples:[{tag:"Câu gốc",zh:"要下雨了。",py:"Yào xiàyǔ le.",vi:"Trời sắp mưa rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：要下雨了。",py:"Māma gàosu wǒ: Yào xiàyǔ le.",vi:"Mẹ bảo tôi: Trời sắp mưa rồi."},{tag:"Ở trường",zh:"在学校，要下雨了。",py:"Zài xuéxiào, Yào xiàyǔ le.",vi:"Ở trường, Trời sắp mưa rồi."},{tag:"Lúc đi làm",zh:"上班的时候，要下雨了。",py:"Shàngbān de shíhou, Yào xiàyǔ le.",vi:"Lúc đi làm, Trời sắp mưa rồi."}],
    explanation:"要……了 biểu thị một sự việc sắp xảy ra.",
    note:"Có thể dùng 快要 / 就要 trong những cấu trúc tương tự."
  },

  {
    id:"hsk2-61",
    pattern:"都……了",
    title:"都……了 — đã... rồi",
    structure:"都 + V / Adj + 了",
    example:"都九点了，我们快走吧。",
    pinyin:"Dōu jiǔ diǎn le, wǒmen kuài zǒu ba.",
    meaning:"Đã chín giờ rồi, chúng ta mau đi thôi.",
    examples:[{tag:"Câu gốc",zh:"都九点了，我们快走吧。",py:"Dōu jiǔ diǎn le, wǒmen kuài zǒu ba.",vi:"Đã chín giờ rồi, chúng ta mau đi thôi."},{tag:"Tình huống khác",zh:"都九点了，妈妈们快走吧。",py:"Dōu jiǔ diǎn le, Māmamen kuài zǒu ba.",vi:"Đã chín giờ rồi, chúng ta mau đi thôi."},{tag:"Tình huống khác",zh:"都九点了，老师们快走吧。",py:"Dōu jiǔ diǎn le, Lǎoshīmen kuài zǒu ba.",vi:"Đã chín giờ rồi, chúng ta mau đi thôi."},{tag:"Tình huống khác",zh:"都九点了，同学们们快走吧。",py:"Dōu jiǔ diǎn le, Tóngxuémenmen kuài zǒu ba.",vi:"Đã chín giờ rồi, chúng ta mau đi thôi."},{tag:"Tình huống khác",zh:"都九点了，他们快走吧。",py:"Dōu jiǔ diǎn le, Tāmen kuài zǒu ba.",vi:"Đã chín giờ rồi, chúng ta mau đi thôi."}],
    explanation:"都……了 nhấn mạnh trạng thái đã đến mức hoặc thời điểm hiện tại.",
    note:"Thường mang sắc thái nhắc nhở."
  },

  {
    id:"hsk2-62",
    pattern:"受事主语",
    title:"Tân ngữ làm chủ ngữ",
    structure:"N + 被描述 / 状态",
    example:"这本书我看过了。",
    pinyin:"Zhè běn shū wǒ kànguo le.",
    meaning:"Quyển sách này tôi đã đọc rồi.",
    examples:[{tag:"Câu gốc",zh:"这本书我看过了。",py:"Zhè běn shū wǒ kànguo le.",vi:"Quyển sách này tôi đã đọc rồi."},{tag:"Tình huống khác",zh:"这本书妈妈看过了。",py:"Zhè běn shū Māma kànguo le.",vi:"Quyển sách này tôi đã đọc rồi."},{tag:"Tình huống khác",zh:"这本书老师看过了。",py:"Zhè běn shū Lǎoshī kànguo le.",vi:"Quyển sách này tôi đã đọc rồi."},{tag:"Tình huống khác",zh:"这本书同学们看过了。",py:"Zhè běn shū Tóngxuémen kànguo le.",vi:"Quyển sách này tôi đã đọc rồi."},{tag:"Tình huống khác",zh:"这本地图我看过了。",py:"Zhè běn dìtú wǒ kànguo le.",vi:"Quyển bản đồ này tôi đã đọc rồi."}],
    explanation:"Đối tượng được nói đến có thể được đưa lên đầu câu làm chủ đề, sau đó mới nói hành động liên quan.",
    note:"Cách nói này rất tự nhiên trong hội thoại."
  },

  {
    id:"hsk2-63",
    pattern:"名词性短语作谓语",
    title:"Cụm danh từ làm vị ngữ",
    structure:"S + N / NP",
    example:"今天星期六。",
    pinyin:"Jīntiān xīngqīliù.",
    meaning:"Hôm nay là thứ Bảy.",
    examples:[{tag:"Câu gốc",zh:"今天星期六。",py:"Jīntiān xīngqīliù.",vi:"Hôm nay là thứ Bảy."},{tag:"Ở nhà",zh:"妈妈告诉我：今天星期六。",py:"Māma gàosu wǒ: Jīntiān xīngqīliù.",vi:"Mẹ bảo tôi: Hôm nay là thứ Bảy."},{tag:"Ở trường",zh:"在学校，今天星期六。",py:"Zài xuéxiào, Jīntiān xīngqīliù.",vi:"Ở trường, Hôm nay là thứ Bảy."},{tag:"Lúc đi làm",zh:"上班的时候，今天星期六。",py:"Shàngbān de shíhou, Jīntiān xīngqīliù.",vi:"Lúc đi làm, Hôm nay là thứ Bảy."}],
    explanation:"Trong một số câu, cụm danh từ có thể trực tiếp làm vị ngữ.",
    note:"Không nhất thiết phải dùng 是."
  },

  {
    id:"hsk2-64",
    pattern:"定语",
    title:"Động từ làm định ngữ",
    structure:"V + 的 + N",
    example:"我喜欢看的电影很好。",
    pinyin:"Wǒ xǐhuan kàn de diànyǐng hěn hǎo.",
    meaning:"Bộ phim tôi thích xem rất hay.",
    examples:[{tag:"Câu gốc",zh:"我喜欢看的电影很好。",py:"Wǒ xǐhuan kàn de diànyǐng hěn hǎo.",vi:"Bộ phim tôi thích xem rất hay."},{tag:"Tình huống khác",zh:"妈妈喜欢看的电影很好。",py:"Māma xǐhuan kàn de diànyǐng hěn hǎo.",vi:"Bộ phim tôi thích xem rất hay."},{tag:"Tình huống khác",zh:"老师喜欢看的电影很好。",py:"Lǎoshī xǐhuan kàn de diànyǐng hěn hǎo.",vi:"Bộ phim tôi thích xem rất hay."},{tag:"Tình huống khác",zh:"同学们喜欢看的电影很好。",py:"Tóngxuémen xǐhuan kàn de diànyǐng hěn hǎo.",vi:"Bộ phim tôi thích xem rất hay."},{tag:"Tình huống khác",zh:"我喜欢看的比赛很好。",py:"Wǒ xǐhuan kàn de bǐsài hěn hǎo.",vi:"Bộ trận đấu tôi thích xem rất hay."}],
    explanation:"Động từ hoặc cụm động từ có thể đứng trước 的 để bổ nghĩa cho danh từ.",
    note:"Đây là nền tảng để đọc câu dài."
  },

  {
    id:"hsk2-65",
    pattern:"主谓短语作定语",
    title:"Cụm chủ-vị làm định ngữ",
    structure:"S + V + 的 + N",
    example:"我买的书在这里。",
    pinyin:"Wǒ mǎi de shū zài zhèlǐ.",
    meaning:"Quyển sách tôi mua ở đây.",
    examples:[{tag:"Câu gốc",zh:"我买的书在这里。",py:"Wǒ mǎi de shū zài zhèlǐ.",vi:"Quyển sách tôi mua ở đây."},{tag:"Tình huống khác",zh:"妈妈买的书在这里。",py:"Māma mǎi de shū zài zhèlǐ.",vi:"Quyển sách tôi mua ở đây."},{tag:"Tình huống khác",zh:"老师买的书在这里。",py:"Lǎoshī mǎi de shū zài zhèlǐ.",vi:"Quyển sách tôi mua ở đây."},{tag:"Tình huống khác",zh:"同学们买的书在这里。",py:"Tóngxuémen mǎi de shū zài zhèlǐ.",vi:"Quyển sách tôi mua ở đây."},{tag:"Tình huống khác",zh:"我买的地图在这里。",py:"Wǒ mǎi de dìtú zài zhèlǐ.",vi:"Quyển bản đồ tôi mua ở đây."}],
    explanation:"Một cụm có chủ thể và hành động có thể đứng trước 的 để bổ nghĩa cho danh từ.",
    note:"Đọc từ phải sang trái để xác định danh từ trung tâm."
  },

  {
    id:"hsk2-66",
    pattern:"结果补语",
    title:"Bổ ngữ kết quả",
    structure:"V + 错 / 懂 / 好 / 会 / 完",
    example:"我听懂了。",
    pinyin:"Wǒ tīng dǒng le.",
    meaning:"Tôi đã nghe hiểu rồi.",
    examples:[{tag:"Câu gốc",zh:"我听懂了。",py:"Wǒ tīng dǒng le.",vi:"Tôi đã nghe hiểu rồi."},{tag:"Tình huống khác",zh:"妈妈听懂了。",py:"Māma tīng dǒng le.",vi:"Mẹ đã nghe hiểu rồi."},{tag:"Tình huống khác",zh:"老师听懂了。",py:"Lǎoshī tīng dǒng le.",vi:"Thầy đã nghe hiểu rồi."},{tag:"Tình huống khác",zh:"同学们听懂了。",py:"Tóngxuémen tīng dǒng le.",vi:"Các bạn đã nghe hiểu rồi."}],
    explanation:"Bổ ngữ kết quả cho biết hành động đã đạt được kết quả gì.",
    note:"听懂 = nghe và hiểu; 做完 = làm xong."
  },

  {
    id:"hsk2-67",
    pattern:"趋向补语",
    title:"Bổ ngữ xu hướng đơn",
    structure:"V + 来 / 去 / 上 / 下 / 进 / 出 / 回 / 过",
    example:"请进来。",
    pinyin:"Qǐng jìnlái.",
    meaning:"Mời vào.",
    examples:[{tag:"Câu gốc",zh:"请进来。",py:"Qǐng jìnlái.",vi:"Mời vào."},{tag:"Ở nhà",zh:"妈妈告诉我：请进来。",py:"Māma gàosu wǒ: Qǐng jìnlái.",vi:"Mẹ bảo tôi: Mời vào."},{tag:"Ở trường",zh:"在学校，请进来。",py:"Zài xuéxiào, Qǐng jìnlái.",vi:"Ở trường, Mời vào."},{tag:"Lúc đi làm",zh:"上班的时候，请进来。",py:"Shàngbān de shíhou, Qǐng jìnlái.",vi:"Lúc đi làm, Mời vào."}],
    explanation:"Bổ ngữ xu hướng cho biết hướng di chuyển của hành động.",
    note:"来 hướng về phía người nói; 去 hướng ra xa người nói."
  },

  {
    id:"hsk2-68",
    pattern:"复合趋向补语",
    title:"Bổ ngữ xu hướng kép",
    structure:"V + 出来 / 进去 / 回来 / 过去...",
    example:"他走进来了。",
    pinyin:"Tā zǒu jìnlái le.",
    meaning:"Anh ấy đã đi vào đây.",
    examples:[{tag:"Câu gốc",zh:"他走进来了。",py:"Tā zǒu jìnlái le.",vi:"Anh ấy đã đi vào đây."},{tag:"Ở nhà",zh:"妈妈告诉我：他走进来了。",py:"Māma gàosu wǒ: Tā zǒu jìnlái le.",vi:"Mẹ bảo tôi: Anh ấy đã đi vào đây."},{tag:"Ở trường",zh:"在学校，他走进来了。",py:"Zài xuéxiào, Tā zǒu jìnlái le.",vi:"Ở trường, Anh ấy đã đi vào đây."},{tag:"Lúc đi làm",zh:"上班的时候，他走进来了。",py:"Shàngbān de shíhou, Tā zǒu jìnlái le.",vi:"Lúc đi làm, Anh ấy đã đi vào đây."}],
    explanation:"Hai thành phần xu hướng kết hợp để biểu thị hướng cụ thể hơn.",
    note:"进来 = vào phía người nói; 进去 = vào phía bên kia."
  },

  {
    id:"hsk2-69",
    pattern:"得 + 状态",
    title:"Bổ ngữ trạng thái",
    structure:"V + 得 + Adj",
    example:"她唱歌唱得很好。",
    pinyin:"Tā chànggē chàng de hěn hǎo.",
    meaning:"Cô ấy hát rất hay.",
    examples:[{tag:"Câu gốc",zh:"她唱歌唱得很好。",py:"Tā chànggē chàng de hěn hǎo.",vi:"Cô ấy hát rất hay."},{tag:"Ở nhà",zh:"妈妈告诉我：她唱歌唱得很好。",py:"Māma gàosu wǒ: Tā chànggē chàng de hěn hǎo.",vi:"Mẹ bảo tôi: Cô ấy hát rất hay."},{tag:"Ở trường",zh:"在学校，她唱歌唱得很好。",py:"Zài xuéxiào, Tā chànggē chàng de hěn hǎo.",vi:"Ở trường, Cô ấy hát rất hay."},{tag:"Lúc đi làm",zh:"上班的时候，她唱歌唱得很好。",py:"Shàngbān de shíhou, Tā chànggē chàng de hěn hǎo.",vi:"Lúc đi làm, Cô ấy hát rất hay."}],
    explanation:"得 + tính từ mô tả cách thức hoặc mức độ thực hiện hành động.",
    note:"Khi động từ có tân ngữ, thường lặp lại động từ."
  },

  {
    id:"hsk2-70",
    pattern:"数量补语",
    title:"Bổ ngữ thời lượng",
    structure:"V + Duration",
    example:"我学习了两个小时。",
    pinyin:"Wǒ xuéxí le liǎng ge xiǎoshí.",
    meaning:"Tôi đã học hai tiếng.",
    examples:[{tag:"Câu gốc",zh:"我学习了两个小时。",py:"Wǒ xuéxí le liǎng ge xiǎoshí.",vi:"Tôi đã học hai tiếng."},{tag:"Tình huống khác",zh:"妈妈学习了两个小时。",py:"Māma xuéxí le liǎng ge xiǎoshí.",vi:"Mẹ đã học hai tiếng."},{tag:"Tình huống khác",zh:"老师学习了两个小时。",py:"Lǎoshī xuéxí le liǎng ge xiǎoshí.",vi:"Thầy đã học hai tiếng."},{tag:"Tình huống khác",zh:"同学们学习了两个小时。",py:"Tóngxuémen xuéxí le liǎng ge xiǎoshí.",vi:"Các bạn đã học hai tiếng."}],
    explanation:"Lượng thời gian có thể đứng sau động từ để nói hành động kéo dài bao lâu.",
    note:"Đây là cách nói thời lượng của hành động."
  },

  {
    id:"hsk2-71",
    pattern:"主谓谓语句",
    title:"Câu chủ-vị làm vị ngữ",
    structure:"S + [S + V / Adj]",
    example:"我身体很好。",
    pinyin:"Wǒ shēntǐ hěn hǎo.",
    meaning:"Sức khỏe của tôi rất tốt.",
    examples:[{tag:"Câu gốc",zh:"我身体很好。",py:"Wǒ shēntǐ hěn hǎo.",vi:"Sức khỏe của tôi rất tốt."},{tag:"Tình huống khác",zh:"妈妈身体很好。",py:"Māma shēntǐ hěn hǎo.",vi:"Sức khỏe của tôi rất tốt."},{tag:"Tình huống khác",zh:"老师身体很好。",py:"Lǎoshī shēntǐ hěn hǎo.",vi:"Sức khỏe của tôi rất tốt."},{tag:"Tình huống khác",zh:"同学们身体很好。",py:"Tóngxuémen shēntǐ hěn hǎo.",vi:"Sức khỏe của tôi rất tốt."}],
    explanation:"Phần vị ngữ có thể tự tạo thành một cụm chủ-vị.",
    note:"Mẫu này thường dùng để mô tả một khía cạnh của chủ thể."
  },

  {
    id:"hsk2-72",
    pattern:"还是选择问句",
    title:"Câu hỏi lựa chọn với 还是",
    structure:"A 还是 B？",
    example:"你喝茶还是喝咖啡？",
    pinyin:"Nǐ hē chá háishi hē kāfēi?",
    meaning:"Bạn uống trà hay cà phê?",
    examples:[{tag:"Câu gốc",zh:"你喝茶还是喝咖啡？",py:"Nǐ hē chá háishi hē kāfēi?",vi:"Bạn uống trà hay cà phê?"},{tag:"Ở nhà",zh:"妈妈告诉我：你喝茶还是喝咖啡？",py:"Māma gàosu wǒ: Nǐ hē chá háishi hē kāfēi?",vi:"Mẹ bảo tôi: Bạn uống trà hay cà phê?"},{tag:"Ở trường",zh:"在学校，你喝茶还是喝咖啡？",py:"Zài xuéxiào, Nǐ hē chá háishi hē kāfēi?",vi:"Ở trường, Bạn uống trà hay cà phê?"},{tag:"Lúc đi làm",zh:"上班的时候，你喝茶还是喝咖啡？",py:"Shàngbān de shíhou, Nǐ hē chá háishi hē kāfēi?",vi:"Lúc đi làm, Bạn uống trà hay cà phê?"}],
    explanation:"还是 nối hai hoặc nhiều khả năng để người nghe lựa chọn.",
    note:"Không dùng 吗 ở cuối câu lựa chọn kiểu này."
  },

  {
    id:"hsk2-73",
    pattern:"别祈使句",
    title:"Câu mệnh lệnh với 别",
    structure:"别 + V + O",
    example:"别忘了带手机。",
    pinyin:"Bié wàng le dài shǒujī.",
    meaning:"Đừng quên mang điện thoại.",
    examples:[{tag:"Câu gốc",zh:"别忘了带手机。",py:"Bié wàng le dài shǒujī.",vi:"Đừng quên mang điện thoại."},{tag:"Ở nhà",zh:"妈妈告诉我：别忘了带手机。",py:"Māma gàosu wǒ: Bié wàng le dài shǒujī.",vi:"Mẹ bảo tôi: Đừng quên mang điện thoại."},{tag:"Ở trường",zh:"在学校，别忘了带手机。",py:"Zài xuéxiào, Bié wàng le dài shǒujī.",vi:"Ở trường, Đừng quên mang điện thoại."},{tag:"Lúc đi làm",zh:"上班的时候，别忘了带手机。",py:"Shàngbān de shíhou, Bié wàng le dài shǒujī.",vi:"Lúc đi làm, Đừng quên mang điện thoại."}],
    explanation:"别 dùng để yêu cầu hoặc nhắc nhở người khác không thực hiện một hành động.",
    note:"Sắc thái phụ thuộc ngữ cảnh."
  },

  {
    id:"hsk2-74",
    pattern:"是字句",
    title:"是…… — mô tả / xác định đặc điểm",
    structure:"S + 是 + N / NP",
    example:"他是一个很好的老师。",
    pinyin:"Tā shì yí ge hěn hǎo de lǎoshī.",
    meaning:"Anh ấy là một giáo viên rất tốt.",
    examples:[{tag:"Câu gốc",zh:"他是一个很好的老师。",py:"Tā shì yí ge hěn hǎo de lǎoshī.",vi:"Anh ấy là một giáo viên rất tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：他是一个很好的老师。",py:"Māma gàosu wǒ: Tā shì yí ge hěn hǎo de lǎoshī.",vi:"Mẹ bảo tôi: Anh ấy là một giáo viên rất tốt."},{tag:"Ở trường",zh:"在学校，他是一个很好的老师。",py:"Zài xuéxiào, Tā shì yí ge hěn hǎo de lǎoshī.",vi:"Ở trường, Anh ấy là một giáo viên rất tốt."},{tag:"Lúc đi làm",zh:"上班的时候，他是一个很好的老师。",py:"Shàngbān de shíhou, Tā shì yí ge hěn hǎo de lǎoshī.",vi:"Lúc đi làm, Anh ấy là một giáo viên rất tốt."}],
    explanation:"是 nối chủ thể với danh từ hoặc cụm danh từ dùng để mô tả hoặc xác định.",
    note:"Không phải mọi câu tiếng Việt có 'là' đều bắt buộc dùng 是."
  },

  {
    id:"hsk2-75",
    pattern:"有字句",
    title:"有…… — đạt được / có",
    structure:"S + 有 + N / Quantity",
    example:"他有三十岁了。",
    pinyin:"Tā yǒu sānshí suì le.",
    meaning:"Anh ấy đã 30 tuổi rồi.",
    examples:[{tag:"Câu gốc",zh:"他有三十岁了。",py:"Tā yǒu sānshí suì le.",vi:"Anh ấy đã 30 tuổi rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：他有三十岁了。",py:"Māma gàosu wǒ: Tā yǒu sānshí suì le.",vi:"Mẹ bảo tôi: Anh ấy đã 30 tuổi rồi."},{tag:"Ở trường",zh:"在学校，他有三十岁了。",py:"Zài xuéxiào, Tā yǒu sānshí suì le.",vi:"Ở trường, Anh ấy đã 30 tuổi rồi."},{tag:"Lúc đi làm",zh:"上班的时候，他有三十岁了。",py:"Shàngbān de shíhou, Tā yǒu sānshí suì le.",vi:"Lúc đi làm, Anh ấy đã 30 tuổi rồi."}],
    explanation:"有 trong một số cấu trúc biểu thị một mức độ hoặc giá trị đã đạt tới.",
    note:"Cách dùng này cần phân biệt với 有 chỉ sở hữu."
  },

  {
    id:"hsk2-76",
    pattern:"存现句",
    title:"Câu tồn hiện với 着",
    structure:"Place + V + 着 + N",
    example:"桌子上放着一本书。",
    pinyin:"Zhuōzi shàng fàngzhe yì běn shū.",
    meaning:"Trên bàn có đặt một quyển sách.",
    examples:[{tag:"Câu gốc",zh:"桌子上放着一本书。",py:"Zhuōzi shàng fàngzhe yì běn shū.",vi:"Trên bàn có đặt một quyển sách."},{tag:"Tình huống khác",zh:"桌子上放着一本地图。",py:"Zhuōzi shàng fàngzhe yì běn dìtú.",vi:"Trên bàn có đặt một quyển bản đồ."},{tag:"Tình huống khác",zh:"桌子上放着一本报纸。",py:"Zhuōzi shàng fàngzhe yì běn bàozhǐ.",vi:"Trên bàn có đặt một quyển báo."},{tag:"Tình huống khác",zh:"椅子上放着一本书。",py:"yǐzi shàng fàngzhe yì běn shū.",vi:"Trên ghế có đặt một quyển sách."}],
    explanation:"Cấu trúc này giới thiệu sự tồn tại của người hoặc vật tại một địa điểm.",
    note:"Thường gặp Place + V着 + N."
  },

  {
    id:"hsk2-77",
    pattern:"比较句",
    title:"So sánh A 比 B + Adj",
    structure:"A + 比 + B + Adj",
    example:"我比弟弟高。",
    pinyin:"Wǒ bǐ dìdi gāo.",
    meaning:"Tôi cao hơn em trai.",
    examples:[{tag:"Câu gốc",zh:"我比弟弟高。",py:"Wǒ bǐ dìdi gāo.",vi:"Tôi cao hơn em trai."},{tag:"Tình huống khác",zh:"妈妈比弟弟高。",py:"Māma bǐ dìdi gāo.",vi:"Mẹ cao hơn em trai."},{tag:"Tình huống khác",zh:"老师比弟弟高。",py:"Lǎoshī bǐ dìdi gāo.",vi:"Thầy cao hơn em trai."},{tag:"Tình huống khác",zh:"同学们比弟弟高。",py:"Tóngxuémen bǐ dìdi gāo.",vi:"Các bạn cao hơn em trai."}],
    explanation:"比 dùng để so sánh hai đối tượng.",
    note:"Sau B thường không dùng 很 trước tính từ trong mẫu cơ bản."
  },

  {
    id:"hsk2-78",
    pattern:"比较句",
    title:"So sánh có mức độ và bổ ngữ",
    structure:"A 比 B + Adj + 一点儿 / 很多",
    example:"今天比昨天冷一点儿。",
    pinyin:"Jīntiān bǐ zuótiān lěng yìdiǎnr.",
    meaning:"Hôm nay lạnh hơn hôm qua một chút.",
    examples:[{tag:"Câu gốc",zh:"今天比昨天冷一点儿。",py:"Jīntiān bǐ zuótiān lěng yìdiǎnr.",vi:"Hôm nay lạnh hơn hôm qua một chút."},{tag:"Tình huống khác",zh:"昨天比昨天冷一点儿。",py:"Zuótiān bǐ zuótiān lěng yìdiǎnr.",vi:"Hôm qua lạnh hơn hôm qua một chút."},{tag:"Tình huống khác",zh:"明天比昨天冷一点儿。",py:"Míngtiān bǐ zuótiān lěng yìdiǎnr.",vi:"Ngày mai lạnh hơn hôm qua một chút."},{tag:"Tình huống khác",zh:"今天比今天冷一点儿。",py:"Jīntiān bǐ Jīntiān lěng yìdiǎnr.",vi:"Hôm nay lạnh hơn hôm qua một chút."}],
    explanation:"Có thể thêm thành phần chỉ mức độ chênh lệch.",
    note:"一点儿、很多 đều giúp câu so sánh cụ thể hơn."
  },

  {
    id:"hsk2-79",
    pattern:"没有比较",
    title:"没有 — không bằng",
    structure:"A 没有 B + Adj",
    example:"我没有他高。",
    pinyin:"Wǒ méiyǒu tā gāo.",
    meaning:"Tôi không cao bằng anh ấy.",
    examples:[{tag:"Câu gốc",zh:"我没有他高。",py:"Wǒ méiyǒu tā gāo.",vi:"Tôi không cao bằng anh ấy."},{tag:"Tình huống khác",zh:"妈妈没有他高。",py:"Māma méiyǒu tā gāo.",vi:"Mẹ không cao bằng anh ấy."},{tag:"Tình huống khác",zh:"老师没有他高。",py:"Lǎoshī méiyǒu tā gāo.",vi:"Thầy không cao bằng anh ấy."},{tag:"Tình huống khác",zh:"同学们没有他高。",py:"Tóngxuémen méiyǒu tā gāo.",vi:"Các bạn không cao bằng anh ấy."},{tag:"Tình huống khác",zh:"我没有她高。",py:"Wǒ méiyǒu Tā gāo.",vi:"Tôi không cao bằng anh ấy."}],
    explanation:"没有 dùng để biểu thị A không đạt mức độ bằng B.",
    note:"Có thể gặp 这么 / 那么 để nhấn mạnh mức độ."
  },

  {
    id:"hsk2-80",
    pattern:"是……的",
    title:"是……的 — nhấn mạnh thông tin",
    structure:"S + 是 + 时间 / 地点 / 方式 / 人 + V + 的",
    example:"我是昨天来的。",
    pinyin:"Wǒ shì zuótiān lái de.",
    meaning:"Tôi đến vào hôm qua.",
    examples:[{tag:"Câu gốc",zh:"我是昨天来的。",py:"Wǒ shì zuótiān lái de.",vi:"Tôi đến vào hôm qua."},{tag:"Tình huống khác",zh:"妈妈是昨天来的。",py:"Māma shì zuótiān lái de.",vi:"Mẹ đến vào hôm qua."},{tag:"Tình huống khác",zh:"老师是昨天来的。",py:"Lǎoshī shì zuótiān lái de.",vi:"Thầy đến vào hôm qua."},{tag:"Tình huống khác",zh:"同学们是昨天来的。",py:"Tóngxuémen shì zuótiān lái de.",vi:"Các bạn đến vào hôm qua."},{tag:"Tình huống khác",zh:"我是今天来的。",py:"Wǒ shì Jīntiān lái de.",vi:"Tôi đến vào hôm qua."}],
    explanation:"是……的 dùng để nhấn mạnh thông tin liên quan đến một hành động đã xảy ra, như thời gian, địa điểm, cách thức hoặc người thực hiện.",
    note:"Đây là cấu trúc rất quan trọng để đọc hiểu câu dài."
  },

  {
    id:"hsk2-81",
    pattern:"兼语 / 双宾语",
    title:"使令 và câu hai tân ngữ",
    structure:"S + 让 / 叫 / 请 + O1 + V / S + V + 给 + O1 + O2",
    example:"妈妈让我给朋友打电话。",
    pinyin:"Māma ràng wǒ gěi péngyou dǎ diànhuà.",
    meaning:"Mẹ bảo tôi gọi điện cho bạn.",
    examples:[{tag:"Câu gốc",zh:"妈妈让我给朋友打电话。",py:"Māma ràng wǒ gěi péngyou dǎ diànhuà.",vi:"Mẹ bảo tôi gọi điện cho bạn."},{tag:"Tình huống khác",zh:"妈妈让妈妈给朋友打电话。",py:"Māma ràng Māma gěi péngyou dǎ diànhuà.",vi:"Mẹ bảo tôi gọi điện cho bạn."},{tag:"Tình huống khác",zh:"妈妈让老师给朋友打电话。",py:"Māma ràng Lǎoshī gěi péngyou dǎ diànhuà.",vi:"Mẹ bảo tôi gọi điện cho bạn."},{tag:"Tình huống khác",zh:"妈妈让同学们给朋友打电话。",py:"Māma ràng Tóngxuémen gěi péngyou dǎ diànhuà.",vi:"Mẹ bảo tôi gọi điện cho bạn."},{tag:"Tình huống khác",zh:"妈妈让我给同学打电话。",py:"Māma ràng wǒ gěi tóngxué dǎ diànhuà.",vi:"Mẹ bảo tôi gọi điện cho bạn học."}],
    explanation:"Một câu có thể kết hợp cấu trúc sai khiến với 给 để biểu thị người thực hiện và đối tượng nhận hành động.",
    note:"O1 có thể là người thực hiện hành động sau."
  },

  {
    id:"hsk2-82",
    pattern:"复句与数的表达",
    title:"Câu phức và cách nói số / số lượng",
    structure:"因为……所以…… / 虽然……但是…… / 一……就…… / 数词 + 量词 / 几 / 数词+多+量词",
    example:"因为今天下雨，所以我没有出去。",
    pinyin:"Yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ méiyǒu chūqù.",
    meaning:"Vì hôm nay trời mưa nên tôi không ra ngoài.",
    examples:[{tag:"Câu gốc",zh:"因为今天下雨，所以我没有出去。",py:"Yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ méiyǒu chūqù.",vi:"Vì hôm nay trời mưa nên tôi không ra ngoài."},{tag:"Tình huống khác",zh:"因为今天下雨，所以妈妈没有出去。",py:"Yīnwèi jīntiān xiàyǔ, suǒyǐ Māma méiyǒu chūqù.",vi:"Vì hôm nay trời mưa nên tôi không ra ngoài."},{tag:"Tình huống khác",zh:"因为今天下雨，所以老师没有出去。",py:"Yīnwèi jīntiān xiàyǔ, suǒyǐ Lǎoshī méiyǒu chūqù.",vi:"Vì hôm nay trời mưa nên tôi không ra ngoài."},{tag:"Tình huống khác",zh:"因为今天下雨，所以同学们没有出去。",py:"Yīnwèi jīntiān xiàyǔ, suǒyǐ Tóngxuémen méiyǒu chūqù.",vi:"Vì hôm nay trời mưa nên tôi không ra ngoài."},{tag:"Tình huống khác",zh:"因为昨天下雨，所以我没有出去。",py:"Yīnwèi Zuótiān xiàyǔ, suǒyǐ wǒ méiyǒu chūqù.",vi:"Vì hôm nay trời mưa nên tôi không ra ngoài."}],
    explanation:"HSK2 mở rộng câu phức với quan hệ nguyên nhân, tương phản và trình tự; đồng thời mở rộng cách biểu đạt số thứ tự và số lượng ước chừng.",
    note:"Các mẫu 一……就……、虽然……但是……、因为……所以…… cần luyện bằng nhiều câu thực tế."
  }

],

    3: [

  {
    id: "hsk3_kanqilai",
    pattern: "看上去 / 看起来",
    title: "看上去 / 看起来 — trông có vẻ",
    structure: "Chủ ngữ + 看上去 / 看起来 + tính từ / 像……",
    example: "他们看上去有点儿像。",
    pinyin: "Tāmen kàn shàngqù yǒudiǎnr xiàng.",
    meaning: "Bọn họ nhìn qua có hơi giống nhau.",
    explanation: "看上去 và 看起来 cùng nói về ấn tượng nhìn bên ngoài: vẻ mặt, dáng, cảm giác khi mới thấy. Không dùng để kể một việc đã kiểm chứng xong. 看上去 thiên về cách nhìn; 看起来 thiên về cảm giác “xem ra”.",
    note: "Sau hai cụm này là tính từ hoặc 像, không phải một động từ hành động đã làm xong."
  },

  {
    id: 1,
    pattern: "老 + N",
    title: "老 — tiền tố",
    structure: "老 + danh từ",
    example: "老朋友又来看我了。",
    pinyin: "Lǎo péngyou yòu lái kàn wǒ le.",
    meaning: "Người bạn cũ lại đến thăm tôi.",
    examples:[{tag:"Câu gốc",zh:"老朋友又来看我了。",py:"Lǎo péngyou yòu lái kàn wǒ le.",vi:"Người bạn cũ lại đến thăm tôi."},{tag:"Tình huống khác",zh:"老朋友又来看妈妈了。",py:"Lǎo péngyou yòu lái kàn Māma le.",vi:"Người bạn cũ lại đến thăm tôi."},{tag:"Tình huống khác",zh:"老朋友又来看老师了。",py:"Lǎo péngyou yòu lái kàn Lǎoshī le.",vi:"Người bạn cũ lại đến thăm tôi."},{tag:"Tình huống khác",zh:"老朋友又来看同学们了。",py:"Lǎo péngyou yòu lái kàn Tóngxuémen le.",vi:"Người bạn cũ lại đến thăm tôi."},{tag:"Tình huống khác",zh:"老同学又来看我了。",py:"Lǎo tóngxué yòu lái kàn wǒ le.",vi:"Người bạn học cũ lại đến thăm tôi."}],
    explanation: "老 có thể đứng trước danh từ để tạo cách gọi hoặc chỉ người/vật quen thuộc, thường mang sắc thái thân mật.",
    note: "Không phải lúc nào 老 cũng có nghĩa đơn giản là “già”."
  },

  {
    id: 2,
    pattern: "—家",
    title: "家 — hậu tố chỉ người làm nghề / lĩnh vực",
    structure: "N + 家",
    example: "他是一位画家。",
    pinyin: "Tā shì yí wèi huàjiā.",
    meaning: "Anh ấy là một họa sĩ.",
    examples:[{tag:"Câu gốc",zh:"他是一位画家。",py:"Tā shì yí wèi huàjiā.",vi:"Anh ấy là một họa sĩ."},{tag:"Ở nhà",zh:"妈妈告诉我：他是一位画家。",py:"Māma gàosu wǒ: Tā shì yí wèi huàjiā.",vi:"Mẹ bảo tôi: Anh ấy là một họa sĩ."},{tag:"Ở trường",zh:"在学校，他是一位画家。",py:"Zài xuéxiào, Tā shì yí wèi huàjiā.",vi:"Ở trường, Anh ấy là một họa sĩ."},{tag:"Lúc đi làm",zh:"上班的时候，他是一位画家。",py:"Shàngbān de shíhou, Tā shì yí wèi huàjiā.",vi:"Lúc đi làm, Anh ấy là một họa sĩ."}],
    explanation: "家 có thể làm hậu tố tạo danh từ chỉ người chuyên về một lĩnh vực.",
    note: "Ví dụ: 画家、作家、科学家."
  },

  {
    id: 3,
    pattern: "—子",
    title: "子 — hậu tố danh từ",
    structure: "N + 子",
    example: "桌子在房间里。",
    pinyin: "Zhuōzi zài fángjiān lǐ.",
    meaning: "Cái bàn ở trong phòng.",
    examples:[{tag:"Câu gốc",zh:"桌子在房间里。",py:"Zhuōzi zài fángjiān lǐ.",vi:"Cái bàn ở trong phòng."},{tag:"Ở nhà",zh:"妈妈告诉我：桌子在房间里。",py:"Māma gàosu wǒ: Zhuōzi zài fángjiān lǐ.",vi:"Mẹ bảo tôi: Cái bàn ở trong phòng."},{tag:"Ở trường",zh:"在学校，桌子在房间里。",py:"Zài xuéxiào, Zhuōzi zài fángjiān lǐ.",vi:"Ở trường, Cái bàn ở trong phòng."},{tag:"Lúc đi làm",zh:"上班的时候，桌子在房间里。",py:"Shàngbān de shíhou, Zhuōzi zài fángjiān lǐ.",vi:"Lúc đi làm, Cái bàn ở trong phòng."}],
    explanation: "子 có thể làm hậu tố tạo danh từ.",
    note: "Một số từ đã cố định, cần học cả từ."
  },

  {
    id: 4,
    pattern: "—员",
    title: "员 — hậu tố chỉ người",
    structure: "N + 员",
    example: "他是一名服务员。",
    pinyin: "Tā shì yì míng fúwùyuán.",
    meaning: "Anh ấy là một nhân viên phục vụ.",
    examples:[{tag:"Câu gốc",zh:"他是一名服务员。",py:"Tā shì yì míng fúwùyuán.",vi:"Anh ấy là một nhân viên phục vụ."},{tag:"Ở nhà",zh:"妈妈告诉我：他是一名服务员。",py:"Māma gàosu wǒ: Tā shì yì míng fúwùyuán.",vi:"Mẹ bảo tôi: Anh ấy là một nhân viên phục vụ."},{tag:"Ở trường",zh:"在学校，他是一名服务员。",py:"Zài xuéxiào, Tā shì yì míng fúwùyuán.",vi:"Ở trường, Anh ấy là một nhân viên phục vụ."},{tag:"Lúc đi làm",zh:"上班的时候，他是一名服务员。",py:"Shàngbān de shíhou, Tā shì yì míng fúwùyuán.",vi:"Lúc đi làm, Anh ấy là một nhân viên phục vụ."}],
    explanation: "员 thường tạo danh từ chỉ người làm một công việc hoặc thuộc một nhóm.",
    note: "Ví dụ: 服务员、运动员、工作人员."
  },

  {
    id: 5,
    pattern: "东 / 南 / 西 / 北",
    title: "Phương hướng cơ bản",
    structure: "东 / 南 / 西 / 北 + 方",
    example: "学校在城市的东边。",
    pinyin: "Xuéxiào zài chéngshì de dōngbian.",
    meaning: "Trường học ở phía đông thành phố.",
    examples:[{tag:"Câu gốc",zh:"学校在城市的东边。",py:"Xuéxiào zài chéngshì de dōngbian.",vi:"Trường học ở phía đông thành phố."},{tag:"Ở nhà",zh:"妈妈告诉我：学校在城市的东边。",py:"Māma gàosu wǒ: Xuéxiào zài chéngshì de dōngbian.",vi:"Mẹ bảo tôi: Trường học ở phía đông thành phố."},{tag:"Ở trường",zh:"在学校，学校在城市的东边。",py:"Zài xuéxiào, Xuéxiào zài chéngshì de dōngbian.",vi:"Ở trường, Trường học ở phía đông thành phố."},{tag:"Lúc đi làm",zh:"上班的时候，学校在城市的东边。",py:"Shàngbān de shíhou, Xuéxiào zài chéngshì de dōngbian.",vi:"Lúc đi làm, Trường học ở phía đông thành phố."}],
    explanation: "Các từ 东、南、西、北 dùng để biểu thị phương hướng.",
    note: "Có thể kết hợp với 边、方."
  },

  {
    id: 6,
    pattern: "东方 / 南方 / 西方 / 北方",
    title: "Các khu vực phương hướng",
    structure: "东方 / 南方 / 西方 / 北方",
    example: "我喜欢住在南方。",
    pinyin: "Wǒ xǐhuan zhù zài nánfāng.",
    meaning: "Tôi thích sống ở miền Nam.",
    examples:[{tag:"Câu gốc",zh:"我喜欢住在南方。",py:"Wǒ xǐhuan zhù zài nánfāng.",vi:"Tôi thích sống ở miền Nam."},{tag:"Tình huống khác",zh:"妈妈喜欢住在南方。",py:"Māma xǐhuan zhù zài nánfāng.",vi:"Mẹ thích sống ở miền Nam."},{tag:"Tình huống khác",zh:"老师喜欢住在南方。",py:"Lǎoshī xǐhuan zhù zài nánfāng.",vi:"Thầy thích sống ở miền Nam."},{tag:"Tình huống khác",zh:"同学们喜欢住在南方。",py:"Tóngxuémen xǐhuan zhù zài nánfāng.",vi:"Các bạn thích sống ở miền Nam."}],
    explanation: "Các từ này có thể chỉ khu vực hoặc phương hướng rộng hơn.",
    note: "北方、南方 thường được dùng để nói về khu vực."
  },

  {
    id: 7,
    pattern: "需要",
    title: "需要 — cần",
    structure: "S + 需要 + N / V",
    example: "我们需要更多时间。",
    pinyin: "Wǒmen xūyào gèng duō shíjiān.",
    meaning: "Chúng tôi cần thêm thời gian.",
    examples:[{tag:"Câu gốc",zh:"我们需要更多时间。",py:"Wǒmen xūyào gèng duō shíjiān.",vi:"Chúng tôi cần thêm thời gian."},{tag:"Tình huống khác",zh:"妈妈们需要更多时间。",py:"Māmamen xūyào gèng duō shíjiān.",vi:"Chúng tôi cần thêm thời gian."},{tag:"Tình huống khác",zh:"老师们需要更多时间。",py:"Lǎoshīmen xūyào gèng duō shíjiān.",vi:"Chúng tôi cần thêm thời gian."},{tag:"Tình huống khác",zh:"同学们们需要更多时间。",py:"Tóngxuémenmen xūyào gèng duō shíjiān.",vi:"Chúng tôi cần thêm thời gian."},{tag:"Tình huống khác",zh:"他们需要更多时间。",py:"Tāmen xūyào gèng duō shíjiān.",vi:"Họ cần thêm thời gian."}],
    explanation: "需要 biểu thị nhu cầu cần có người, vật hoặc hành động.",
    note: "需要 + danh từ hoặc động từ."
  },

  {
    id: 8,
    pattern: "应该",
    title: "应该 — nên",
    structure: "S + 应该 + V",
    example: "你应该早点儿休息。",
    pinyin: "Nǐ yīnggāi zǎodiǎnr xiūxi.",
    meaning: "Bạn nên nghỉ ngơi sớm hơn.",
    examples:[{tag:"Câu gốc",zh:"你应该早点儿休息。",py:"Nǐ yīnggāi zǎodiǎnr xiūxi.",vi:"Bạn nên nghỉ ngơi sớm hơn."},{tag:"Ở nhà",zh:"妈妈告诉我：你应该早点儿休息。",py:"Māma gàosu wǒ: Nǐ yīnggāi zǎodiǎnr xiūxi.",vi:"Mẹ bảo tôi: Bạn nên nghỉ ngơi sớm hơn."},{tag:"Ở trường",zh:"在学校，你应该早点儿休息。",py:"Zài xuéxiào, Nǐ yīnggāi zǎodiǎnr xiūxi.",vi:"Ở trường, Bạn nên nghỉ ngơi sớm hơn."},{tag:"Lúc đi làm",zh:"上班的时候，你应该早点儿休息。",py:"Shàngbān de shíhou, Nǐ yīnggāi zǎodiǎnr xiūxi.",vi:"Lúc đi làm, Bạn nên nghỉ ngơi sớm hơn."}],
    explanation: "应该 biểu thị lời khuyên hoặc điều nên làm.",
    note: "Phủ định thường dùng 不应该."
  },

  {
    id: 9,
    pattern: "该",
    title: "该 — nên / đến lúc",
    structure: "S + 该 + V + 了",
    example: "我们该回家了。",
    pinyin: "Wǒmen gāi huí jiā le.",
    meaning: "Chúng ta đến lúc về nhà rồi.",
    examples:[{tag:"Câu gốc",zh:"我们该回家了。",py:"Wǒmen gāi huí jiā le.",vi:"Chúng ta đến lúc về nhà rồi."},{tag:"Tình huống khác",zh:"妈妈们该回家了。",py:"Māmamen gāi huí jiā le.",vi:"Chúng ta đến lúc về nhà rồi."},{tag:"Tình huống khác",zh:"老师们该回家了。",py:"Lǎoshīmen gāi huí jiā le.",vi:"Chúng ta đến lúc về nhà rồi."},{tag:"Tình huống khác",zh:"同学们们该回家了。",py:"Tóngxuémenmen gāi huí jiā le.",vi:"Chúng ta đến lúc về nhà rồi."},{tag:"Tình huống khác",zh:"他们该回家了。",py:"Tāmen gāi huí jiā le.",vi:"Chúng ta đến lúc về nhà rồi."}],
    explanation: "该 có thể biểu thị đã đến lúc cần làm việc gì.",
    note: "该……了 là mẫu rất thường gặp."
  },

  {
    id: 10,
    pattern: "愿意",
    title: "愿意 — sẵn lòng",
    structure: "S + 愿意 + V",
    example: "我愿意帮助你。",
    pinyin: "Wǒ yuànyì bāngzhù nǐ.",
    meaning: "Tôi sẵn lòng giúp bạn.",
    examples:[{tag:"Câu gốc",zh:"我愿意帮助你。",py:"Wǒ yuànyì bāngzhù nǐ.",vi:"Tôi sẵn lòng giúp bạn."},{tag:"Tình huống khác",zh:"妈妈愿意帮助你。",py:"Māma yuànyì bāngzhù nǐ.",vi:"Mẹ sẵn lòng giúp bạn."},{tag:"Tình huống khác",zh:"老师愿意帮助你。",py:"Lǎoshī yuànyì bāngzhù nǐ.",vi:"Thầy sẵn lòng giúp bạn."},{tag:"Tình huống khác",zh:"同学们愿意帮助你。",py:"Tóngxuémen yuànyì bāngzhù nǐ.",vi:"Các bạn sẵn lòng giúp bạn."}],
    explanation: "愿意 biểu thị sự bằng lòng hoặc tự nguyện làm việc gì.",
    note: "Không nên dịch máy móc thành “muốn”."
  },

  {
    id: 11,
    pattern: "离合词",
    title: "Động từ ly hợp",
    structure: "V + O có thể tách",
    example: "我们明天见面。",
    pinyin: "Wǒmen míngtiān jiànmiàn.",
    meaning: "Ngày mai chúng ta gặp nhau.",
    examples:[{tag:"Câu gốc",zh:"我们明天见面。",py:"Wǒmen míngtiān jiànmiàn.",vi:"Ngày mai chúng ta gặp nhau."},{tag:"Tình huống khác",zh:"妈妈们明天见面。",py:"Māmamen míngtiān jiànmiàn.",vi:"Ngày mai chúng ta gặp nhau."},{tag:"Tình huống khác",zh:"老师们明天见面。",py:"Lǎoshīmen míngtiān jiànmiàn.",vi:"Ngày mai chúng ta gặp nhau."},{tag:"Tình huống khác",zh:"同学们们明天见面。",py:"Tóngxuémenmen míngtiān jiànmiàn.",vi:"Ngày mai chúng ta gặp nhau."},{tag:"Tình huống khác",zh:"他们明天见面。",py:"Tāmen míngtiān jiànmiàn.",vi:"Ngày mai chúng ta gặp nhau."}],
    explanation: "Một số động từ có cấu trúc đặc biệt, khi thêm thành phần có thể tách hai phần ra.",
    note: "Ví dụ: 见面、结婚、洗澡、放假."
  },

  {
    id: 12,
    pattern: "见面",
    title: "见面 — gặp mặt",
    structure: "S + 跟 + 人 + 见面",
    example: "我想跟他见面。",
    pinyin: "Wǒ xiǎng gēn tā jiànmiàn.",
    meaning: "Tôi muốn gặp anh ấy.",
    examples:[{tag:"Câu gốc",zh:"我想跟他见面。",py:"Wǒ xiǎng gēn tā jiànmiàn.",vi:"Tôi muốn gặp anh ấy."},{tag:"Tình huống khác",zh:"妈妈想跟他见面。",py:"Māma xiǎng gēn tā jiànmiàn.",vi:"Mẹ muốn gặp anh ấy."},{tag:"Tình huống khác",zh:"老师想跟他见面。",py:"Lǎoshī xiǎng gēn tā jiànmiàn.",vi:"Thầy muốn gặp anh ấy."},{tag:"Tình huống khác",zh:"同学们想跟他见面。",py:"Tóngxuémen xiǎng gēn tā jiànmiàn.",vi:"Các bạn muốn gặp anh ấy."},{tag:"Tình huống khác",zh:"我想跟她见面。",py:"Wǒ xiǎng gēn Tā jiànmiàn.",vi:"Tôi muốn gặp anh ấy."}],
    explanation: "见面 là động từ ly hợp, thường kết hợp với 跟 + người.",
    note: "Không dùng như một động từ thông thường trong mọi trường hợp."
  },

  {
    id: 13,
    pattern: "怎样",
    title: "怎样 — như thế nào",
    structure: "怎样 + V",
    example: "你觉得怎样学习汉语比较好？",
    pinyin: "Nǐ juéde zěnyàng xuéxí Hànyǔ bǐjiào hǎo?",
    meaning: "Bạn thấy học tiếng Trung như thế nào thì tốt hơn?",
    examples:[{tag:"Câu gốc",zh:"你觉得怎样学习汉语比较好？",py:"Nǐ juéde zěnyàng xuéxí Hànyǔ bǐjiào hǎo?",vi:"Bạn thấy học tiếng Trung như thế nào thì tốt hơn?"},{tag:"Ở nhà",zh:"妈妈告诉我：你觉得怎样学习汉语比较好？",py:"Māma gàosu wǒ: Nǐ juéde zěnyàng xuéxí Hànyǔ bǐjiào hǎo?",vi:"Mẹ bảo tôi: Bạn thấy học tiếng Trung như thế nào thì tốt hơn?"},{tag:"Ở trường",zh:"在学校，你觉得怎样学习汉语比较好？",py:"Zài xuéxiào, Nǐ juéde zěnyàng xuéxí Hànyǔ bǐjiào hǎo?",vi:"Ở trường, Bạn thấy học tiếng Trung như thế nào thì tốt hơn?"},{tag:"Lúc đi làm",zh:"上班的时候，你觉得怎样学习汉语比较好？",py:"Shàngbān de shíhou, Nǐ juéde zěnyàng xuéxí Hànyǔ bǐjiào hǎo?",vi:"Lúc đi làm, Bạn thấy học tiếng Trung như thế nào thì tốt hơn?"}],
    explanation: "怎样 dùng để hỏi về cách thức hoặc tình trạng.",
    note: "Gần với 怎么 nhưng cách dùng có điểm khác nhau."
  },

  {
    id: 14,
    pattern: "疑问词 + 都",
    title: "Từ nghi vấn + 都 — bất kỳ",
    structure: "疑问词 + 都 + V",
    example: "什么都可以。",
    pinyin: "Shénme dōu kěyǐ.",
    meaning: "Cái gì cũng được.",
    examples:[{tag:"Câu gốc",zh:"什么都可以。",py:"Shénme dōu kěyǐ.",vi:"Cái gì cũng được."},{tag:"Ở nhà",zh:"妈妈告诉我：什么都可以。",py:"Māma gàosu wǒ: Shénme dōu kěyǐ.",vi:"Mẹ bảo tôi: Cái gì cũng được."},{tag:"Ở trường",zh:"在学校，什么都可以。",py:"Zài xuéxiào, Shénme dōu kěyǐ.",vi:"Ở trường, Cái gì cũng được."},{tag:"Lúc đi làm",zh:"上班的时候，什么都可以。",py:"Shàngbān de shíhou, Shénme dōu kěyǐ.",vi:"Lúc đi làm, Cái gì cũng được."}],
    explanation: "Từ nghi vấn kết hợp với 都 có thể tạo nghĩa “bất kỳ / cái gì cũng”.",
    note: "什么都、谁都、哪里都."
  },

  {
    id: 15,
    pattern: "疑问词 + 疑问词",
    title: "Từ nghi vấn không dùng để hỏi",
    structure: "疑问词 + 疑问词",
    example: "谁有时间谁就来。",
    pinyin: "Shéi yǒu shíjiān shéi jiù lái.",
    meaning: "Ai có thời gian thì người đó đến.",
    examples:[{tag:"Câu gốc",zh:"谁有时间谁就来。",py:"Shéi yǒu shíjiān shéi jiù lái.",vi:"Ai có thời gian thì người đó đến."},{tag:"Ở nhà",zh:"妈妈告诉我：谁有时间谁就来。",py:"Māma gàosu wǒ: Shéi yǒu shíjiān shéi jiù lái.",vi:"Mẹ bảo tôi: Ai có thời gian thì người đó đến."},{tag:"Ở trường",zh:"在学校，谁有时间谁就来。",py:"Zài xuéxiào, Shéi yǒu shíjiān shéi jiù lái.",vi:"Ở trường, Ai có thời gian thì người đó đến."},{tag:"Lúc đi làm",zh:"上班的时候，谁有时间谁就来。",py:"Shàngbān de shíhou, Shéi yǒu shíjiān shéi jiù lái.",vi:"Lúc đi làm, Ai có thời gian thì người đó đến."}],
    explanation: "Một số cấu trúc dùng từ nghi vấn nhưng không tạo câu hỏi thực sự.",
    note: "Cần nhìn cả cấu trúc câu để hiểu nghĩa."
  },

  {
    id: 16,
    pattern: "别人",
    title: "别人 — người khác",
    structure: "别人 + V",
    example: "不要总是管别人。",
    pinyin: "Bú yào zǒngshì guǎn biérén.",
    meaning: "Đừng lúc nào cũng quản chuyện người khác.",
    examples:[{tag:"Câu gốc",zh:"不要总是管别人。",py:"Bú yào zǒngshì guǎn biérén.",vi:"Đừng lúc nào cũng quản chuyện người khác."},{tag:"Ở nhà",zh:"妈妈告诉我：不要总是管别人。",py:"Māma gàosu wǒ: Bú yào zǒngshì guǎn biérén.",vi:"Mẹ bảo tôi: Đừng lúc nào cũng quản chuyện người khác."},{tag:"Ở trường",zh:"在学校，不要总是管别人。",py:"Zài xuéxiào, Bú yào zǒngshì guǎn biérén.",vi:"Ở trường, Đừng lúc nào cũng quản chuyện người khác."},{tag:"Lúc đi làm",zh:"上班的时候，不要总是管别人。",py:"Shàngbān de shíhou, Bú yào zǒngshì guǎn biérén.",vi:"Lúc đi làm, Đừng lúc nào cũng quản chuyện người khác."}],
    explanation: "别人 dùng để chỉ người khác.",
    note: "Khác với 他人 ở sắc thái và phạm vi sử dụng."
  },

  {
    id: 17,
    pattern: "咱们",
    title: "咱们 — chúng ta",
    structure: "咱们 + V",
    example: "咱们一起吃饭吧。",
    pinyin: "Zánmen yìqǐ chīfàn ba.",
    meaning: "Chúng ta cùng ăn cơm nhé.",
    examples:[{tag:"Câu gốc",zh:"咱们一起吃饭吧。",py:"Zánmen yìqǐ chīfàn ba.",vi:"Chúng ta cùng ăn cơm nhé."},{tag:"Ở nhà",zh:"妈妈告诉我：咱们一起吃饭吧。",py:"Māma gàosu wǒ: Zánmen yìqǐ chīfàn ba.",vi:"Mẹ bảo tôi: Chúng ta cùng ăn cơm nhé."},{tag:"Ở trường",zh:"在学校，咱们一起吃饭吧。",py:"Zài xuéxiào, Zánmen yìqǐ chīfàn ba.",vi:"Ở trường, Chúng ta cùng ăn cơm nhé."},{tag:"Lúc đi làm",zh:"上班的时候，咱们一起吃饭吧。",py:"Shàngbān de shíhou, Zánmen yìqǐ chīfàn ba.",vi:"Lúc đi làm, Chúng ta cùng ăn cơm nhé."}],
    explanation: "咱们 thường bao gồm cả người nói và người nghe.",
    note: "Trong khẩu ngữ rất thường gặp."
  },

  {
    id: 18,
    pattern: "别的",
    title: "别的 — khác",
    structure: "别的 + N",
    example: "你还需要别的东西吗？",
    pinyin: "Nǐ hái xūyào bié de dōngxi ma?",
    meaning: "Bạn còn cần thứ gì khác không?",
    examples:[{tag:"Câu gốc",zh:"你还需要别的东西吗？",py:"Nǐ hái xūyào bié de dōngxi ma?",vi:"Bạn còn cần thứ gì khác không?"},{tag:"Ở nhà",zh:"妈妈告诉我：你还需要别的东西吗？",py:"Māma gàosu wǒ: Nǐ hái xūyào bié de dōngxi ma?",vi:"Mẹ bảo tôi: Bạn còn cần thứ gì khác không?"},{tag:"Ở trường",zh:"在学校，你还需要别的东西吗？",py:"Zài xuéxiào, Nǐ hái xūyào bié de dōngxi ma?",vi:"Ở trường, Bạn còn cần thứ gì khác không?"},{tag:"Lúc đi làm",zh:"上班的时候，你还需要别的东西吗？",py:"Shàngbān de shíhou, Nǐ hái xūyào bié de dōngxi ma?",vi:"Lúc đi làm, Bạn còn cần thứ gì khác không?"}],
    explanation: "别的 đứng trước danh từ để biểu thị một thứ khác.",
    note: "别的 + danh từ."
  },

  {
    id: 19,
    pattern: "其他",
    title: "其他 — những cái khác",
    structure: "其他 + N",
    example: "其他问题以后再说。",
    pinyin: "Qítā wèntí yǐhòu zài shuō.",
    meaning: "Những vấn đề khác để sau hãy nói.",
    examples:[{tag:"Câu gốc",zh:"其他问题以后再说。",py:"Qítā wèntí yǐhòu zài shuō.",vi:"Những vấn đề khác để sau hãy nói."},{tag:"Ở nhà",zh:"妈妈告诉我：其他问题以后再说。",py:"Māma gàosu wǒ: Qítā wèntí yǐhòu zài shuō.",vi:"Mẹ bảo tôi: Những vấn đề khác để sau hãy nói."},{tag:"Ở trường",zh:"在学校，其他问题以后再说。",py:"Zài xuéxiào, Qítā wèntí yǐhòu zài shuō.",vi:"Ở trường, Những vấn đề khác để sau hãy nói."},{tag:"Lúc đi làm",zh:"上班的时候，其他问题以后再说。",py:"Shàngbān de shíhou, Qítā wèntí yǐhòu zài shuō.",vi:"Lúc đi làm, Những vấn đề khác để sau hãy nói."}],
    explanation: "其他 dùng để chỉ những đối tượng khác ngoài đối tượng đã nói.",
    note: "其他 thường đứng trước danh từ."
  },

  {
    id: 20,
    pattern: "当然",
    title: "当然 — đương nhiên",
    structure: "当然 + V / Adj",
    example: "当然可以。",
    pinyin: "Dāngrán kěyǐ.",
    meaning: "Đương nhiên là được.",
    examples:[{tag:"Câu gốc",zh:"当然可以。",py:"Dāngrán kěyǐ.",vi:"Đương nhiên là được."},{tag:"Ở nhà",zh:"妈妈告诉我：当然可以。",py:"Māma gàosu wǒ: Dāngrán kěyǐ.",vi:"Mẹ bảo tôi: Đương nhiên là được."},{tag:"Ở trường",zh:"在学校，当然可以。",py:"Zài xuéxiào, Dāngrán kěyǐ.",vi:"Ở trường, Đương nhiên là được."},{tag:"Lúc đi làm",zh:"上班的时候，当然可以。",py:"Shàngbān de shíhou, Dāngrán kěyǐ.",vi:"Lúc đi làm, Đương nhiên là được."}],
    explanation: "当然 biểu thị sự chắc chắn hoặc điều hiển nhiên.",
    note: "Thường dùng trong câu trả lời."
  },

  {
    id: 21,
    pattern: "其实",
    title: "其实 — thực ra",
    structure: "其实 + S + V",
    example: "其实我不太喜欢喝咖啡。",
    pinyin: "Qíshí wǒ bú tài xǐhuan hē kāfēi.",
    meaning: "Thực ra tôi không thích uống cà phê lắm.",
    examples:[{tag:"Câu gốc",zh:"其实我不太喜欢喝咖啡。",py:"Qíshí wǒ bú tài xǐhuan hē kāfēi.",vi:"Thực ra tôi không thích uống cà phê lắm."},{tag:"Tình huống khác",zh:"其实妈妈不太喜欢喝咖啡。",py:"Qíshí Māma bú tài xǐhuan hē kāfēi.",vi:"Thực ra tôi không thích uống cà phê lắm."},{tag:"Tình huống khác",zh:"其实老师不太喜欢喝咖啡。",py:"Qíshí Lǎoshī bú tài xǐhuan hē kāfēi.",vi:"Thực ra tôi không thích uống cà phê lắm."},{tag:"Tình huống khác",zh:"其实同学们不太喜欢喝咖啡。",py:"Qíshí Tóngxuémen bú tài xǐhuan hē kāfēi.",vi:"Thực ra tôi không thích uống cà phê lắm."}],
    explanation: "其实 dùng để đưa ra sự thật hoặc ý kiến thực tế phía sau.",
    note: "Thường đứng đầu câu."
  },

  {
    id: 22,
    pattern: "终于",
    title: "终于 — cuối cùng",
    structure: "S + 终于 + V",
    example: "他终于找到了工作。",
    pinyin: "Tā zhōngyú zhǎodào le gōngzuò.",
    meaning: "Cuối cùng anh ấy cũng tìm được việc.",
    examples:[{tag:"Câu gốc",zh:"他终于找到了工作。",py:"Tā zhōngyú zhǎodào le gōngzuò.",vi:"Cuối cùng anh ấy cũng tìm được việc."},{tag:"Ở nhà",zh:"妈妈告诉我：他终于找到了工作。",py:"Māma gàosu wǒ: Tā zhōngyú zhǎodào le gōngzuò.",vi:"Mẹ bảo tôi: Cuối cùng anh ấy cũng tìm được việc."},{tag:"Ở trường",zh:"在学校，他终于找到了工作。",py:"Zài xuéxiào, Tā zhōngyú zhǎodào le gōngzuò.",vi:"Ở trường, Cuối cùng anh ấy cũng tìm được việc."},{tag:"Lúc đi làm",zh:"上班的时候，他终于找到了工作。",py:"Shàngbān de shíhou, Tā zhōngyú zhǎodào le gōngzuò.",vi:"Lúc đi làm, Cuối cùng anh ấy cũng tìm được việc."}],
    explanation: "终于 biểu thị một kết quả đạt được sau thời gian chờ đợi hoặc khó khăn.",
    note: "Thường mang sắc thái kết quả đáng chờ đợi."
  },

  {
    id: 23,
    pattern: "才",
    title: "才 — mới / mãi mới",
    structure: "S + 才 + V",
    example: "他十点才回家。",
    pinyin: "Tā shí diǎn cái huí jiā.",
    meaning: "Mãi đến mười giờ anh ấy mới về nhà.",
    examples:[{tag:"Câu gốc",zh:"他十点才回家。",py:"Tā shí diǎn cái huí jiā.",vi:"Mãi đến mười giờ anh ấy mới về nhà."},{tag:"Ở nhà",zh:"妈妈告诉我：他十点才回家。",py:"Māma gàosu wǒ: Tā shí diǎn cái huí jiā.",vi:"Mẹ bảo tôi: Mãi đến mười giờ anh ấy mới về nhà."},{tag:"Ở trường",zh:"在学校，他十点才回家。",py:"Zài xuéxiào, Tā shí diǎn cái huí jiā.",vi:"Ở trường, Mãi đến mười giờ anh ấy mới về nhà."},{tag:"Lúc đi làm",zh:"上班的时候，他十点才回家。",py:"Shàngbān de shíhou, Tā shí diǎn cái huí jiā.",vi:"Lúc đi làm, Mãi đến mười giờ anh ấy mới về nhà."}],
    explanation: "才 có thể nhấn mạnh thời điểm muộn hơn dự kiến.",
    note: "才 thường tạo cảm giác “mới” sau một khoảng thời gian."
  },

  {
    id: 24,
    pattern: "就",
    title: "就 — đã / liền",
    structure: "S + 就 + V",
    example: "我马上就回来。",
    pinyin: "Wǒ mǎshàng jiù huílái.",
    meaning: "Tôi sẽ về ngay.",
    examples:[{tag:"Câu gốc",zh:"我马上就回来。",py:"Wǒ mǎshàng jiù huílái.",vi:"Tôi sẽ về ngay."},{tag:"Tình huống khác",zh:"妈妈马上就回来。",py:"Māma mǎshàng jiù huílái.",vi:"Mẹ sẽ về ngay."},{tag:"Tình huống khác",zh:"老师马上就回来。",py:"Lǎoshī mǎshàng jiù huílái.",vi:"Thầy sẽ về ngay."},{tag:"Tình huống khác",zh:"同学们马上就回来。",py:"Tóngxuémen mǎshàng jiù huílái.",vi:"Các bạn sẽ về ngay."}],
    explanation: "就 có thể nhấn mạnh hành động xảy ra nhanh hoặc sớm.",
    note: "才 và 就 thường tạo sự đối lập."
  },

  {
    id: 25,
    pattern: "不必",
    title: "不必 — không cần",
    structure: "不必 + V",
    example: "你不必担心。",
    pinyin: "Nǐ bú bì dānxīn.",
    meaning: "Bạn không cần lo lắng.",
    examples:[{tag:"Câu gốc",zh:"你不必担心。",py:"Nǐ bú bì dānxīn.",vi:"Bạn không cần lo lắng."},{tag:"Ở nhà",zh:"妈妈告诉我：你不必担心。",py:"Māma gàosu wǒ: Nǐ bú bì dānxīn.",vi:"Mẹ bảo tôi: Bạn không cần lo lắng."},{tag:"Ở trường",zh:"在学校，你不必担心。",py:"Zài xuéxiào, Nǐ bú bì dānxīn.",vi:"Ở trường, Bạn không cần lo lắng."},{tag:"Lúc đi làm",zh:"上班的时候，你不必担心。",py:"Shàngbān de shíhou, Nǐ bú bì dānxīn.",vi:"Lúc đi làm, Bạn không cần lo lắng."}],
    explanation: "不必 biểu thị không có sự cần thiết phải làm gì.",
    note: "Sắc thái hơi trang trọng hơn 不用."
  },

  {
    id: 26,
    pattern: "不用",
    title: "不用 — không cần",
    structure: "不用 + V",
    example: "不用着急。",
    pinyin: "Bú yòng zháojí.",
    meaning: "Không cần phải vội.",
    examples:[{tag:"Câu gốc",zh:"不用着急。",py:"Bú yòng zháojí.",vi:"Không cần phải vội."},{tag:"Ở nhà",zh:"妈妈告诉我：不用着急。",py:"Māma gàosu wǒ: Bú yòng zháojí.",vi:"Mẹ bảo tôi: Không cần phải vội."},{tag:"Ở trường",zh:"在学校，不用着急。",py:"Zài xuéxiào, Bú yòng zháojí.",vi:"Ở trường, Không cần phải vội."},{tag:"Lúc đi làm",zh:"上班的时候，不用着急。",py:"Shàngbān de shíhou, Bú yòng zháojí.",vi:"Lúc đi làm, Không cần phải vội."}],
    explanation: "不用 dùng để nói một hành động không cần thiết.",
    note: "Rất phổ biến trong khẩu ngữ."
  },

  {
    id: 27,
    pattern: "为",
    title: "为 — đối với / cho",
    structure: "为 + đối tượng",
    example: "我为你感到高兴。",
    pinyin: "Wǒ wèi nǐ gǎndào gāoxìng.",
    meaning: "Tôi cảm thấy vui cho bạn.",
    examples:[{tag:"Câu gốc",zh:"我为你感到高兴。",py:"Wǒ wèi nǐ gǎndào gāoxìng.",vi:"Tôi cảm thấy vui cho bạn."},{tag:"Tình huống khác",zh:"妈妈为你感到高兴。",py:"Māma wèi nǐ gǎndào gāoxìng.",vi:"Mẹ cảm thấy vui cho bạn."},{tag:"Tình huống khác",zh:"老师为你感到高兴。",py:"Lǎoshī wèi nǐ gǎndào gāoxìng.",vi:"Thầy cảm thấy vui cho bạn."},{tag:"Tình huống khác",zh:"同学们为你感到高兴。",py:"Tóngxuémen wèi nǐ gǎndào gāoxìng.",vi:"Các bạn cảm thấy vui cho bạn."}],
    explanation: "为 có thể giới thiệu đối tượng mà hành động hoặc cảm xúc hướng tới.",
    note: "Cần phân biệt với 为了."
  },

  {
    id: 28,
    pattern: "向",
    title: "向 — hướng về / với",
    structure: "向 + người + V",
    example: "我要向老师学习。",
    pinyin: "Wǒ yào xiàng lǎoshī xuéxí.",
    meaning: "Tôi muốn học hỏi từ giáo viên.",
    examples:[{tag:"Câu gốc",zh:"我要向老师学习。",py:"Wǒ yào xiàng lǎoshī xuéxí.",vi:"Tôi muốn học hỏi từ giáo viên."},{tag:"Tình huống khác",zh:"妈妈要向老师学习。",py:"Māma yào xiàng lǎoshī xuéxí.",vi:"Mẹ muốn học hỏi từ giáo viên."},{tag:"Tình huống khác",zh:"老师要向老师学习。",py:"Lǎoshī yào xiàng lǎoshī xuéxí.",vi:"Thầy muốn học hỏi từ giáo viên."},{tag:"Tình huống khác",zh:"同学们要向老师学习。",py:"Tóngxuémen yào xiàng lǎoshī xuéxí.",vi:"Các bạn muốn học hỏi từ giáo viên."},{tag:"Tình huống khác",zh:"我要向同学学习。",py:"Wǒ yào xiàng tóngxué xuéxí.",vi:"Tôi muốn học hỏi từ giáo viên."}],
    explanation: "向 giới thiệu đối tượng mà hành động hướng tới.",
    note: "向 + người + động từ."
  },

  {
    id: 29,
    pattern: "关于",
    title: "关于 — về",
    structure: "关于 + N",
    example: "关于这个问题，我们以后再讨论。",
    pinyin: "Guānyú zhège wèntí, wǒmen yǐhòu zài tǎolùn.",
    meaning: "Về vấn đề này, chúng ta sẽ thảo luận sau.",
    examples:[{tag:"Câu gốc",zh:"关于这个问题，我们以后再讨论。",py:"Guānyú zhège wèntí, wǒmen yǐhòu zài tǎolùn.",vi:"Về vấn đề này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这个问题，妈妈们以后再讨论。",py:"Guānyú zhège wèntí, Māmamen yǐhòu zài tǎolùn.",vi:"Về vấn đề này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这个问题，老师们以后再讨论。",py:"Guānyú zhège wèntí, Lǎoshīmen yǐhòu zài tǎolùn.",vi:"Về vấn đề này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这个问题，同学们们以后再讨论。",py:"Guānyú zhège wèntí, Tóngxuémenmen yǐhòu zài tǎolùn.",vi:"Về vấn đề này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这个问题，他们以后再讨论。",py:"Guānyú zhège wèntí, Tāmen yǐhòu zài tǎolùn.",vi:"Về vấn đề này, chúng ta sẽ thảo luận sau."}],
    explanation: "关于 dùng để giới thiệu chủ đề.",
    note: "Thường đứng đầu câu."
  },

  {
    id: 30,
    pattern: "向 + địa điểm",
    title: "向 — hướng về",
    structure: "向 + địa điểm + V",
    example: "他向前走了几步。",
    pinyin: "Tā xiàng qián zǒu le jǐ bù.",
    meaning: "Anh ấy đi về phía trước vài bước.",
    examples:[{tag:"Câu gốc",zh:"他向前走了几步。",py:"Tā xiàng qián zǒu le jǐ bù.",vi:"Anh ấy đi về phía trước vài bước."},{tag:"Ở nhà",zh:"妈妈告诉我：他向前走了几步。",py:"Māma gàosu wǒ: Tā xiàng qián zǒu le jǐ bù.",vi:"Mẹ bảo tôi: Anh ấy đi về phía trước vài bước."},{tag:"Ở trường",zh:"在学校，他向前走了几步。",py:"Zài xuéxiào, Tā xiàng qián zǒu le jǐ bù.",vi:"Ở trường, Anh ấy đi về phía trước vài bước."},{tag:"Lúc đi làm",zh:"上班的时候，他向前走了几步。",py:"Shàngbān de shíhou, Tā xiàng qián zǒu le jǐ bù.",vi:"Lúc đi làm, Anh ấy đi về phía trước vài bước."}],
    explanation: "向 có thể chỉ hướng hoặc con đường của hành động.",
    note: "向前、向后、向左、向右."
  },

  {
    id: 31,
    pattern: "为了",
    title: "为了 — để / vì",
    structure: "为了 + mục đích，S + V",
    example: "为了学习汉语，我每天都练习。",
    pinyin: "Wèile xuéxí Hànyǔ, wǒ měitiān dōu liànxí.",
    meaning: "Để học tiếng Trung, mỗi ngày tôi đều luyện tập.",
    examples:[{tag:"Câu gốc",zh:"为了学习汉语，我每天都练习。",py:"Wèile xuéxí Hànyǔ, wǒ měitiān dōu liànxí.",vi:"Để học tiếng Trung, mỗi ngày tôi đều luyện tập."},{tag:"Tình huống khác",zh:"为了学习汉语，妈妈每天都练习。",py:"Wèile xuéxí Hànyǔ, Māma měitiān dōu liànxí.",vi:"Để học tiếng Trung, mỗi ngày tôi đều luyện tập."},{tag:"Tình huống khác",zh:"为了学习汉语，老师每天都练习。",py:"Wèile xuéxí Hànyǔ, Lǎoshī měitiān dōu liànxí.",vi:"Để học tiếng Trung, mỗi ngày tôi đều luyện tập."},{tag:"Tình huống khác",zh:"为了学习汉语，同学们每天都练习。",py:"Wèile xuéxí Hànyǔ, Tóngxuémen měitiān dōu liànxí.",vi:"Để học tiếng Trung, mỗi ngày tôi đều luyện tập."},{tag:"Tình huống khác",zh:"为了学习中文，我每天都练习。",py:"Wèile xuéxí Zhōngwén, wǒ měitiān dōu liànxí.",vi:"Để học chữ Trung, mỗi ngày tôi đều luyện tập."}],
    explanation: "为了 giới thiệu mục đích của hành động.",
    note: "为了 + mục đích."
  },

  {
    id: 32,
    pattern: "根据",
    title: "根据 — dựa theo",
    structure: "根据 + N，S + V",
    example: "根据天气，我们决定明天再出发。",
    pinyin: "Gēnjù tiānqì, wǒmen juédìng míngtiān zài chūfā.",
    meaning: "Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát.",
    examples:[{tag:"Câu gốc",zh:"根据天气，我们决定明天再出发。",py:"Gēnjù tiānqì, wǒmen juédìng míngtiān zài chūfā.",vi:"Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát."},{tag:"Tình huống khác",zh:"根据天气，妈妈们决定明天再出发。",py:"Gēnjù tiānqì, Māmamen juédìng míngtiān zài chūfā.",vi:"Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát."},{tag:"Tình huống khác",zh:"根据天气，老师们决定明天再出发。",py:"Gēnjù tiānqì, Lǎoshīmen juédìng míngtiān zài chūfā.",vi:"Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát."},{tag:"Tình huống khác",zh:"根据天气，同学们们决定明天再出发。",py:"Gēnjù tiānqì, Tóngxuémenmen juédìng míngtiān zài chūfā.",vi:"Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát."},{tag:"Tình huống khác",zh:"根据天气，他们决定明天再出发。",py:"Gēnjù tiānqì, Tāmen juédìng míngtiān zài chūfā.",vi:"Dựa theo thời tiết, chúng tôi quyết định ngày mai mới xuất phát."}],
    explanation: "根据 giới thiệu căn cứ hoặc cơ sở để đưa ra hành động, quyết định.",
    note: "根据 + căn cứ."
  },

  {
    id: 33,
    pattern: "把",
    title: "把 — đưa tân ngữ lên trước",
    structure: "S + 把 + O + V + thành phần khác",
    example: "请把门关上。",
    pinyin: "Qǐng bǎ mén guānshàng.",
    meaning: "Hãy đóng cửa lại.",
    examples:[{tag:"Câu gốc",zh:"请把门关上。",py:"Qǐng bǎ mén guānshàng.",vi:"Hãy đóng cửa lại."},{tag:"Ở nhà",zh:"妈妈告诉我：请把门关上。",py:"Māma gàosu wǒ: Qǐng bǎ mén guānshàng.",vi:"Mẹ bảo tôi: Hãy đóng cửa lại."},{tag:"Ở trường",zh:"在学校，请把门关上。",py:"Zài xuéxiào, Qǐng bǎ mén guānshàng.",vi:"Ở trường, Hãy đóng cửa lại."},{tag:"Lúc đi làm",zh:"上班的时候，请把门关上。",py:"Shàngbān de shíhou, Qǐng bǎ mén guānshàng.",vi:"Lúc đi làm, Hãy đóng cửa lại."}],
    explanation: "把 đưa đối tượng chịu tác động lên trước động từ và nhấn mạnh kết quả xử lý đối tượng.",
    note: "Sau động từ thường cần thành phần bổ sung."
  },

  {
    id: 34,
    pattern: "把 + O + V + 在",
    title: "把 — đặt đối tượng vào vị trí",
    structure: "S + 把 + O + V + 在 + địa điểm",
    example: "请把书放在桌子上。",
    pinyin: "Qǐng bǎ shū fàng zài zhuōzi shàng.",
    meaning: "Hãy đặt sách lên bàn.",
    examples:[{tag:"Câu gốc",zh:"请把书放在桌子上。",py:"Qǐng bǎ shū fàng zài zhuōzi shàng.",vi:"Hãy đặt sách lên bàn."},{tag:"Tình huống khác",zh:"请把地图放在桌子上。",py:"Qǐng bǎ dìtú fàng zài zhuōzi shàng.",vi:"Hãy đặt bản đồ lên bàn."},{tag:"Tình huống khác",zh:"请把报纸放在桌子上。",py:"Qǐng bǎ bàozhǐ fàng zài zhuōzi shàng.",vi:"Hãy đặt báo lên bàn."},{tag:"Tình huống khác",zh:"请把书放在椅子上。",py:"Qǐng bǎ shū fàng zài yǐzi shàng.",vi:"Hãy đặt sách lên ghế."}],
    explanation: "Mẫu 把 có thể diễn tả việc xử lý đối tượng và đưa nó đến một vị trí.",
    note: "V + 在 + địa điểm."
  },

  {
    id: 35,
    pattern: "被",
    title: "被 — câu bị động",
    structure: "S + 被 + người/vật + V + thành phần",
    example: "我的自行车被别人骑走了。",
    pinyin: "Wǒ de zìxíngchē bèi biérén qí zǒu le.",
    meaning: "Xe đạp của tôi bị người khác đạp đi mất.",
    examples:[{tag:"Câu gốc",zh:"我的自行车被别人骑走了。",py:"Wǒ de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đạp đi mất."},{tag:"Tình huống khác",zh:"妈妈的自行车被别人骑走了。",py:"Māma de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đạp đi mất."},{tag:"Tình huống khác",zh:"老师的自行车被别人骑走了。",py:"Lǎoshī de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đạp đi mất."},{tag:"Tình huống khác",zh:"同学们的自行车被别人骑走了。",py:"Tóngxuémen de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đạp đi mất."}],
    explanation: "被 dùng để đưa đối tượng chịu tác động lên làm chủ ngữ.",
    note: "Thường nhấn mạnh đối tượng chịu ảnh hưởng."
  },

  {
    id: 36,
    pattern: "或者",
    title: "或者 — hoặc",
    structure: "A + 或者 + B",
    example: "你可以坐公交车或者坐地铁。",
    pinyin: "Nǐ kěyǐ zuò gōngjiāochē huòzhě zuò dìtiě.",
    meaning: "Bạn có thể đi xe buýt hoặc tàu điện ngầm.",
    examples:[{tag:"Câu gốc",zh:"你可以坐公交车或者坐地铁。",py:"Nǐ kěyǐ zuò gōngjiāochē huòzhě zuò dìtiě.",vi:"Bạn có thể đi xe buýt hoặc tàu điện ngầm."},{tag:"Ở nhà",zh:"妈妈告诉我：你可以坐公交车或者坐地铁。",py:"Māma gàosu wǒ: Nǐ kěyǐ zuò gōngjiāochē huòzhě zuò dìtiě.",vi:"Mẹ bảo tôi: Bạn có thể đi xe buýt hoặc tàu điện ngầm."},{tag:"Ở trường",zh:"在学校，你可以坐公交车或者坐地铁。",py:"Zài xuéxiào, Nǐ kěyǐ zuò gōngjiāochē huòzhě zuò dìtiě.",vi:"Ở trường, Bạn có thể đi xe buýt hoặc tàu điện ngầm."},{tag:"Lúc đi làm",zh:"上班的时候，你可以坐公交车或者坐地铁。",py:"Shàngbān de shíhou, Nǐ kěyǐ zuò gōngjiāochē huòzhě zuò dìtiě.",vi:"Lúc đi làm, Bạn có thể đi xe buýt hoặc tàu điện ngầm."}],
    explanation: "或者 nối các lựa chọn trong câu trần thuật.",
    note: "Câu hỏi lựa chọn thường dùng 还是."
  },

  {
    id: 37,
    pattern: "只有……才……",
    title: "只有……才…… — chỉ khi",
    structure: "只有 A，才 B",
    example: "只有努力学习，才能进步。",
    pinyin: "Zhǐyǒu nǔlì xuéxí, cái néng jìnbù.",
    meaning: "Chỉ khi học tập chăm chỉ thì mới có thể tiến bộ.",
    examples:[{tag:"Câu gốc",zh:"只有努力学习，才能进步。",py:"Zhǐyǒu nǔlì xuéxí, cái néng jìnbù.",vi:"Chỉ khi học tập chăm chỉ thì mới có thể tiến bộ."},{tag:"Ở nhà",zh:"妈妈告诉我：只有努力学习，才能进步。",py:"Māma gàosu wǒ: Zhǐyǒu nǔlì xuéxí, cái néng jìnbù.",vi:"Mẹ bảo tôi: Chỉ khi học tập chăm chỉ thì mới có thể tiến bộ."},{tag:"Ở trường",zh:"在学校，只有努力学习，才能进步。",py:"Zài xuéxiào, Zhǐyǒu nǔlì xuéxí, cái néng jìnbù.",vi:"Ở trường, Chỉ khi học tập chăm chỉ thì mới có thể tiến bộ."},{tag:"Lúc đi làm",zh:"上班的时候，只有努力学习，才能进步。",py:"Shàngbān de shíhou, Zhǐyǒu nǔlì xuéxí, cái néng jìnbù.",vi:"Lúc đi làm, Chỉ khi học tập chăm chỉ thì mới có thể tiến bộ."}],
    explanation: "Biểu thị điều kiện cần thiết.",
    note: "A là điều kiện cần để B xảy ra."
  },

  {
    id: 38,
    pattern: "只要……就……",
    title: "只要……就…… — chỉ cần",
    structure: "只要 A，就 B",
    example: "只要你愿意，我就帮助你。",
    pinyin: "Zhǐyào nǐ yuànyì, wǒ jiù bāngzhù nǐ.",
    meaning: "Chỉ cần bạn đồng ý, tôi sẽ giúp bạn.",
    examples:[{tag:"Câu gốc",zh:"只要你愿意，我就帮助你。",py:"Zhǐyào nǐ yuànyì, wǒ jiù bāngzhù nǐ.",vi:"Chỉ cần bạn đồng ý, tôi sẽ giúp bạn."},{tag:"Tình huống khác",zh:"只要你愿意，妈妈就帮助你。",py:"Zhǐyào nǐ yuànyì, Māma jiù bāngzhù nǐ.",vi:"Chỉ cần bạn đồng ý, tôi sẽ giúp bạn."},{tag:"Tình huống khác",zh:"只要你愿意，老师就帮助你。",py:"Zhǐyào nǐ yuànyì, Lǎoshī jiù bāngzhù nǐ.",vi:"Chỉ cần bạn đồng ý, tôi sẽ giúp bạn."},{tag:"Tình huống khác",zh:"只要你愿意，同学们就帮助你。",py:"Zhǐyào nǐ yuànyì, Tóngxuémen jiù bāngzhù nǐ.",vi:"Chỉ cần bạn đồng ý, tôi sẽ giúp bạn."}],
    explanation: "Biểu thị điều kiện tương đối dễ đạt được để dẫn tới kết quả.",
    note: "So sánh với 只有……才……."
  },

  {
    id: 39,
    pattern: "不但……而且……",
    title: "Không những… mà còn…",
    structure: "不但 A，而且 B",
    example: "他不但会说汉语，而且会说英语。",
    pinyin: "Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.",
    meaning: "Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh.",
    examples:[{tag:"Câu gốc",zh:"他不但会说汉语，而且会说英语。",py:"Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.",vi:"Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh."},{tag:"Ở nhà",zh:"妈妈告诉我：他不但会说汉语，而且会说英语。",py:"Māma gàosu wǒ: Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.",vi:"Mẹ bảo tôi: Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh."},{tag:"Ở trường",zh:"在学校，他不但会说汉语，而且会说英语。",py:"Zài xuéxiào, Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.",vi:"Ở trường, Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh."},{tag:"Lúc đi làm",zh:"上班的时候，他不但会说汉语，而且会说英语。",py:"Shàngbān de shíhou, Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.",vi:"Lúc đi làm, Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Anh."}],
    explanation: "Biểu thị quan hệ tăng tiến.",
    note: "B thường có mức độ hoặc thông tin bổ sung mạnh hơn A."
  },

  {
    id: 40,
    pattern: "如果……就……",
    title: "Nếu… thì…",
    structure: "如果 A，就 B",
    example: "如果明天下雨，我们就不去了。",
    pinyin: "Rúguǒ míngtiān xiàyǔ, wǒmen jiù bú qù le.",
    meaning: "Nếu ngày mai mưa thì chúng tôi không đi.",
    examples:[{tag:"Câu gốc",zh:"如果明天下雨，我们就不去了。",py:"Rúguǒ míngtiān xiàyǔ, wǒmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng tôi không đi."},{tag:"Tình huống khác",zh:"如果明天下雨，妈妈们就不去了。",py:"Rúguǒ míngtiān xiàyǔ, Māmamen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng tôi không đi."},{tag:"Tình huống khác",zh:"如果明天下雨，老师们就不去了。",py:"Rúguǒ míngtiān xiàyǔ, Lǎoshīmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng tôi không đi."},{tag:"Tình huống khác",zh:"如果明天下雨，同学们们就不去了。",py:"Rúguǒ míngtiān xiàyǔ, Tóngxuémenmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng tôi không đi."},{tag:"Tình huống khác",zh:"如果明天下雨，他们就不去了。",py:"Rúguǒ míngtiān xiàyǔ, Tāmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng tôi không đi."}],
    explanation: "Biểu thị điều kiện giả định.",
    note: "如果 có thể được lược bỏ trong một số câu."
  },

  {
    id: 41,
    pattern: "……的话，就……",
    title: "……的话，就……",
    structure: "A 的话，就 B",
    example: "你有时间的话，就来找我吧。",
    pinyin: "Nǐ yǒu shíjiān de huà, jiù lái zhǎo wǒ ba.",
    meaning: "Nếu bạn có thời gian thì hãy đến tìm tôi nhé.",
    examples:[{tag:"Câu gốc",zh:"你有时间的话，就来找我吧。",py:"Nǐ yǒu shíjiān de huà, jiù lái zhǎo wǒ ba.",vi:"Nếu bạn có thời gian thì hãy đến tìm tôi nhé."},{tag:"Tình huống khác",zh:"你有时间的话，就来找妈妈吧。",py:"Nǐ yǒu shíjiān de huà, jiù lái zhǎo Māma ba.",vi:"Nếu bạn có thời gian thì hãy đến tìm tôi nhé."},{tag:"Tình huống khác",zh:"你有时间的话，就来找老师吧。",py:"Nǐ yǒu shíjiān de huà, jiù lái zhǎo Lǎoshī ba.",vi:"Nếu bạn có thời gian thì hãy đến tìm tôi nhé."},{tag:"Tình huống khác",zh:"你有时间的话，就来找同学们吧。",py:"Nǐ yǒu shíjiān de huà, jiù lái zhǎo Tóngxuémen ba.",vi:"Nếu bạn có thời gian thì hãy đến tìm tôi nhé."}],
    explanation: "的话 đặt sau điều kiện để tạo cấu trúc giả định.",
    note: "Khẩu ngữ rất thường dùng."
  },

  {
    id: 42,
    pattern: "然后",
    title: "然后 — sau đó",
    structure: "先 A，然后 B",
    example: "我们先吃饭，然后去看电影。",
    pinyin: "Wǒmen xiān chīfàn, ránhòu qù kàn diànyǐng.",
    meaning: "Chúng ta ăn cơm trước, sau đó đi xem phim.",
    examples:[{tag:"Câu gốc",zh:"我们先吃饭，然后去看电影。",py:"Wǒmen xiān chīfàn, ránhòu qù kàn diànyǐng.",vi:"Chúng ta ăn cơm trước, sau đó đi xem phim."},{tag:"Tình huống khác",zh:"妈妈们先吃饭，然后去看电影。",py:"Māmamen xiān chīfàn, ránhòu qù kàn diànyǐng.",vi:"Chúng ta ăn cơm trước, sau đó đi xem phim."},{tag:"Tình huống khác",zh:"老师们先吃饭，然后去看电影。",py:"Lǎoshīmen xiān chīfàn, ránhòu qù kàn diànyǐng.",vi:"Chúng ta ăn cơm trước, sau đó đi xem phim."},{tag:"Tình huống khác",zh:"同学们们先吃饭，然后去看电影。",py:"Tóngxuémenmen xiān chīfàn, ránhòu qù kàn diànyǐng.",vi:"Chúng ta ăn cơm trước, sau đó đi xem phim."},{tag:"Tình huống khác",zh:"他们先吃饭，然后去看电影。",py:"Tāmen xiān chīfàn, ránhòu qù kàn diànyǐng.",vi:"Chúng ta ăn cơm trước, sau đó đi xem phim."}],
    explanation: "然后 biểu thị hành động xảy ra sau một hành động khác.",
    note: "Thường đi cùng 先."
  },

  {
    id: 43,
    pattern: "得",
    title: "得 — bổ ngữ trạng thái",
    structure: "V + 得 + Adj",
    example: "他说得很清楚。",
    pinyin: "Tā shuō de hěn qīngchu.",
    meaning: "Anh ấy nói rất rõ.",
    examples:[{tag:"Câu gốc",zh:"他说得很清楚。",py:"Tā shuō de hěn qīngchu.",vi:"Anh ấy nói rất rõ."},{tag:"Ở nhà",zh:"妈妈告诉我：他说得很清楚。",py:"Māma gàosu wǒ: Tā shuō de hěn qīngchu.",vi:"Mẹ bảo tôi: Anh ấy nói rất rõ."},{tag:"Ở trường",zh:"在学校，他说得很清楚。",py:"Zài xuéxiào, Tā shuō de hěn qīngchu.",vi:"Ở trường, Anh ấy nói rất rõ."},{tag:"Lúc đi làm",zh:"上班的时候，他说得很清楚。",py:"Shàngbān de shíhou, Tā shuō de hěn qīngchu.",vi:"Lúc đi làm, Anh ấy nói rất rõ."}],
    explanation: "得 đứng sau động từ để bổ sung trạng thái hoặc mức độ của hành động.",
    note: "Không nhầm với 地."
  },

  {
    id: 44,
    pattern: "地",
    title: "地 — trạng từ hóa",
    structure: "Adj + 地 + V",
    example: "他认真地学习。",
    pinyin: "Tā rènzhēn de xuéxí.",
    meaning: "Anh ấy học tập một cách nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"他认真地学习。",py:"Tā rènzhēn de xuéxí.",vi:"Anh ấy học tập một cách nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：他认真地学习。",py:"Māma gàosu wǒ: Tā rènzhēn de xuéxí.",vi:"Mẹ bảo tôi: Anh ấy học tập một cách nghiêm túc."},{tag:"Ở trường",zh:"在学校，他认真地学习。",py:"Zài xuéxiào, Tā rènzhēn de xuéxí.",vi:"Ở trường, Anh ấy học tập một cách nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，他认真地学习。",py:"Shàngbān de shíhou, Tā rènzhēn de xuéxí.",vi:"Lúc đi làm, Anh ấy học tập một cách nghiêm túc."}],
    explanation: "地 nối tính từ với động từ để biểu thị cách thức thực hiện hành động.",
    note: "的 — định ngữ; 地 — trạng ngữ; 得 — bổ ngữ."
  },

  {
    id: 45,
    pattern: "V + 过",
    title: "过 — từng trải nghiệm",
    structure: "S + V + 过 + O",
    example: "我去过中国。",
    pinyin: "Wǒ qùguo Zhōngguó.",
    meaning: "Tôi từng đi Trung Quốc.",
    examples:[{tag:"Câu gốc",zh:"我去过中国。",py:"Wǒ qùguo Zhōngguó.",vi:"Tôi từng đi Trung Quốc."},{tag:"Tình huống khác",zh:"妈妈去过中国。",py:"Māma qùguo Zhōngguó.",vi:"Mẹ từng đi Trung Quốc."},{tag:"Tình huống khác",zh:"老师去过中国。",py:"Lǎoshī qùguo Zhōngguó.",vi:"Thầy từng đi Trung Quốc."},{tag:"Tình huống khác",zh:"同学们去过中国。",py:"Tóngxuémen qùguo Zhōngguó.",vi:"Các bạn từng đi Trung Quốc."},{tag:"Tình huống khác",zh:"我去过越南。",py:"Wǒ qùguo Yuènán.",vi:"Tôi từng đi Việt Nam."}],
    explanation: "过 biểu thị một trải nghiệm đã từng xảy ra.",
    note: "Nhấn mạnh kinh nghiệm, không nhấn mạnh thời điểm cụ thể."
  },

  {
    id: 46,
    pattern: "V + 着",
    title: "着 — trạng thái đang duy trì",
    structure: "V + 着",
    example: "门开着。",
    pinyin: "Mén kāizhe.",
    meaning: "Cửa đang mở.",
    examples:[{tag:"Câu gốc",zh:"门开着。",py:"Mén kāizhe.",vi:"Cửa đang mở."},{tag:"Ở nhà",zh:"妈妈告诉我：门开着。",py:"Māma gàosu wǒ: Mén kāizhe.",vi:"Mẹ bảo tôi: Cửa đang mở."},{tag:"Ở trường",zh:"在学校，门开着。",py:"Zài xuéxiào, Mén kāizhe.",vi:"Ở trường, Cửa đang mở."},{tag:"Lúc đi làm",zh:"上班的时候，门开着。",py:"Shàngbān de shíhou, Mén kāizhe.",vi:"Lúc đi làm, Cửa đang mở."}],
    explanation: "着 biểu thị trạng thái được duy trì.",
    note: "Khác với 在 + V."
  },

  {
    id: 47,
    pattern: "V + 到",
    title: "到 — đạt tới kết quả",
    structure: "V + 到 + O",
    example: "我终于找到了我的手机。",
    pinyin: "Wǒ zhōngyú zhǎodào le wǒ de shǒujī.",
    meaning: "Cuối cùng tôi cũng tìm thấy điện thoại của mình.",
    examples:[{tag:"Câu gốc",zh:"我终于找到了我的手机。",py:"Wǒ zhōngyú zhǎodào le wǒ de shǒujī.",vi:"Cuối cùng tôi cũng tìm thấy điện thoại của mình."},{tag:"Tình huống khác",zh:"妈妈终于找到了妈妈的手机。",py:"Māma zhōngyú zhǎodào le wǒ de shǒujī.",vi:"Cuối cùng tôi cũng tìm thấy điện thoại của mình."},{tag:"Tình huống khác",zh:"老师终于找到了老师的手机。",py:"Lǎoshī zhōngyú zhǎodào le wǒ de shǒujī.",vi:"Cuối cùng tôi cũng tìm thấy điện thoại của mình."},{tag:"Tình huống khác",zh:"同学们终于找到了同学们的手机。",py:"Tóngxuémen zhōngyú zhǎodào le wǒ de shǒujī.",vi:"Cuối cùng tôi cũng tìm thấy điện thoại của mình."}],
    explanation: "到 làm bổ ngữ kết quả, biểu thị đạt được đối tượng hoặc mục tiêu.",
    note: "找到 = tìm thấy."
  },

  {
    id: 48,
    pattern: "V + 住",
    title: "住 — giữ lại / cố định",
    structure: "V + 住",
    example: "请记住这个名字。",
    pinyin: "Qǐng jìzhù zhège míngzi.",
    meaning: "Hãy nhớ cái tên này.",
    examples:[{tag:"Câu gốc",zh:"请记住这个名字。",py:"Qǐng jìzhù zhège míngzi.",vi:"Hãy nhớ cái tên này."},{tag:"Ở nhà",zh:"妈妈告诉我：请记住这个名字。",py:"Māma gàosu wǒ: Qǐng jìzhù zhège míngzi.",vi:"Mẹ bảo tôi: Hãy nhớ cái tên này."},{tag:"Ở trường",zh:"在学校，请记住这个名字。",py:"Zài xuéxiào, Qǐng jìzhù zhège míngzi.",vi:"Ở trường, Hãy nhớ cái tên này."},{tag:"Lúc đi làm",zh:"上班的时候，请记住这个名字。",py:"Shàngbān de shíhou, Qǐng jìzhù zhège míngzi.",vi:"Lúc đi làm, Hãy nhớ cái tên này."}],
    explanation: "住 làm bổ ngữ kết quả, biểu thị hành động đạt đến trạng thái giữ hoặc cố định.",
    note: "记住 là ví dụ rất thường gặp."
  },

  {
    id: 49,
    pattern: "V + 走",
    title: "走 — mang / đưa đi khỏi",
    structure: "V + 走",
    example: "他把我的书拿走了。",
    pinyin: "Tā bǎ wǒ de shū názǒu le.",
    meaning: "Anh ấy đã lấy sách của tôi đi.",
    examples:[{tag:"Câu gốc",zh:"他把我的书拿走了。",py:"Tā bǎ wǒ de shū názǒu le.",vi:"Anh ấy đã lấy sách của tôi đi."},{tag:"Tình huống khác",zh:"他把妈妈的书拿走了。",py:"Tā bǎ Māma de shū názǒu le.",vi:"Anh ấy đã lấy sách của tôi đi."},{tag:"Tình huống khác",zh:"他把老师的书拿走了。",py:"Tā bǎ Lǎoshī de shū názǒu le.",vi:"Anh ấy đã lấy sách của tôi đi."},{tag:"Tình huống khác",zh:"他把同学们的书拿走了。",py:"Tā bǎ Tóngxuémen de shū názǒu le.",vi:"Anh ấy đã lấy sách của tôi đi."},{tag:"Tình huống khác",zh:"她把我的书拿走了。",py:"Tā bǎ wǒ de shū názǒu le.",vi:"Cô ấy đã lấy sách của tôi đi."}],
    explanation: "走 làm bổ ngữ xu hướng mở rộng, nhấn mạnh vật rời khỏi vị trí.",
    note: "拿走、带走、借走."
  },

  {
    id: 50,
    pattern: "V + 出",
    title: "出 — kết quả / từ trong ra",
    structure: "V + 出",
    example: "我看出来他很累。",
    pinyin: "Wǒ kànchūlái tā hěn lèi.",
    meaning: "Tôi nhận ra anh ấy rất mệt.",
    examples:[{tag:"Câu gốc",zh:"我看出来他很累。",py:"Wǒ kànchūlái tā hěn lèi.",vi:"Tôi nhận ra anh ấy rất mệt."},{tag:"Tình huống khác",zh:"妈妈看出来他很累。",py:"Māma kànchūlái tā hěn lèi.",vi:"Mẹ nhận ra anh ấy rất mệt."},{tag:"Tình huống khác",zh:"老师看出来他很累。",py:"Lǎoshī kànchūlái tā hěn lèi.",vi:"Thầy nhận ra anh ấy rất mệt."},{tag:"Tình huống khác",zh:"同学们看出来他很累。",py:"Tóngxuémen kànchūlái tā hěn lèi.",vi:"Các bạn nhận ra anh ấy rất mệt."},{tag:"Tình huống khác",zh:"我看出来她很累。",py:"Wǒ kànchūlái Tā hěn lèi.",vi:"Tôi nhận ra anh ấy rất mệt."}],
    explanation: "出 có thể biểu thị kết quả nhận biết hoặc hành động từ trong ra ngoài.",
    note: "看出来 là ví dụ quan trọng."
  },

  {
    id: 51,
    pattern: "V + 起来",
    title: "起来 — bắt đầu / trở nên",
    structure: "V + 起来",
    example: "天气开始热起来了。",
    pinyin: "Tiānqì kāishǐ rè qǐlái le.",
    meaning: "Thời tiết bắt đầu nóng lên.",
    examples:[{tag:"Câu gốc",zh:"天气开始热起来了。",py:"Tiānqì kāishǐ rè qǐlái le.",vi:"Thời tiết bắt đầu nóng lên."},{tag:"Ở nhà",zh:"妈妈告诉我：天气开始热起来了。",py:"Māma gàosu wǒ: Tiānqì kāishǐ rè qǐlái le.",vi:"Mẹ bảo tôi: Thời tiết bắt đầu nóng lên."},{tag:"Ở trường",zh:"在学校，天气开始热起来了。",py:"Zài xuéxiào, Tiānqì kāishǐ rè qǐlái le.",vi:"Ở trường, Thời tiết bắt đầu nóng lên."},{tag:"Lúc đi làm",zh:"上班的时候，天气开始热起来了。",py:"Shàngbān de shíhou, Tiānqì kāishǐ rè qǐlái le.",vi:"Lúc đi làm, Thời tiết bắt đầu nóng lên."}],
    explanation: "起来 có thể biểu thị một trạng thái hoặc hành động bắt đầu xuất hiện.",
    note: "Có nhiều cách dùng tùy động từ."
  },

  {
    id: 52,
    pattern: "V + 下去",
    title: "下去 — tiếp tục",
    structure: "V + 下去",
    example: "请继续说下去。",
    pinyin: "Qǐng jìxù shuō xiàqù.",
    meaning: "Hãy tiếp tục nói đi.",
    examples:[{tag:"Câu gốc",zh:"请继续说下去。",py:"Qǐng jìxù shuō xiàqù.",vi:"Hãy tiếp tục nói đi."},{tag:"Ở nhà",zh:"妈妈告诉我：请继续说下去。",py:"Māma gàosu wǒ: Qǐng jìxù shuō xiàqù.",vi:"Mẹ bảo tôi: Hãy tiếp tục nói đi."},{tag:"Ở trường",zh:"在学校，请继续说下去。",py:"Zài xuéxiào, Qǐng jìxù shuō xiàqù.",vi:"Ở trường, Hãy tiếp tục nói đi."},{tag:"Lúc đi làm",zh:"上班的时候，请继续说下去。",py:"Shàngbān de shíhou, Qǐng jìxù shuō xiàqù.",vi:"Lúc đi làm, Hãy tiếp tục nói đi."}],
    explanation: "下去 có thể biểu thị hành động tiếp tục từ hiện tại về sau.",
    note: "Thường gặp với 继续."
  },

  {
    id: 53,
    pattern: "V + 得 / 不 + V",
    title: "Bổ ngữ khả năng",
    structure: "V + 得 / 不 + bổ ngữ",
    example: "我听得懂他说的话。",
    pinyin: "Wǒ tīngdedǒng tā shuō de huà.",
    meaning: "Tôi nghe hiểu lời anh ấy nói.",
    examples:[{tag:"Câu gốc",zh:"我听得懂他说的话。",py:"Wǒ tīngdedǒng tā shuō de huà.",vi:"Tôi nghe hiểu lời anh ấy nói."},{tag:"Tình huống khác",zh:"妈妈听得懂他说的话。",py:"Māma tīngdedǒng tā shuō de huà.",vi:"Mẹ nghe hiểu lời anh ấy nói."},{tag:"Tình huống khác",zh:"老师听得懂他说的话。",py:"Lǎoshī tīngdedǒng tā shuō de huà.",vi:"Thầy nghe hiểu lời anh ấy nói."},{tag:"Tình huống khác",zh:"同学们听得懂他说的话。",py:"Tóngxuémen tīngdedǒng tā shuō de huà.",vi:"Các bạn nghe hiểu lời anh ấy nói."},{tag:"Tình huống khác",zh:"我听得懂她说的话。",py:"Wǒ tīngdedǒng Tā shuō de huà.",vi:"Tôi nghe hiểu lời anh ấy nói."}],
    explanation: "得 biểu thị có khả năng đạt kết quả; 不 biểu thị không thể đạt kết quả.",
    note: "听得懂 / 听不懂."
  },

  {
    id: 54,
    pattern: "Adj + 得很",
    title: "得很 — rất",
    structure: "Adj + 得很",
    example: "今天冷得很。",
    pinyin: "Jīntiān lěng de hěn.",
    meaning: "Hôm nay lạnh lắm.",
    examples:[{tag:"Câu gốc",zh:"今天冷得很。",py:"Jīntiān lěng de hěn.",vi:"Hôm nay lạnh lắm."},{tag:"Ở nhà",zh:"妈妈告诉我：今天冷得很。",py:"Māma gàosu wǒ: Jīntiān lěng de hěn.",vi:"Mẹ bảo tôi: Hôm nay lạnh lắm."},{tag:"Ở trường",zh:"在学校，今天冷得很。",py:"Zài xuéxiào, Jīntiān lěng de hěn.",vi:"Ở trường, Hôm nay lạnh lắm."},{tag:"Lúc đi làm",zh:"上班的时候，今天冷得很。",py:"Shàngbān de shíhou, Jīntiān lěng de hěn.",vi:"Lúc đi làm, Hôm nay lạnh lắm."}],
    explanation: "得很 đặt sau tính từ để nhấn mạnh mức độ.",
    note: "Thường dùng trong khẩu ngữ."
  },

  {
    id: 55,
    pattern: "Adj / V + 极了",
    title: "极了 — cực kỳ",
    structure: "Adj / V + 极了",
    example: "这里漂亮极了。",
    pinyin: "Zhèlǐ piàoliang jí le.",
    meaning: "Nơi này đẹp vô cùng.",
    examples:[{tag:"Câu gốc",zh:"这里漂亮极了。",py:"Zhèlǐ piàoliang jí le.",vi:"Nơi này đẹp vô cùng."},{tag:"Ở nhà",zh:"妈妈告诉我：这里漂亮极了。",py:"Māma gàosu wǒ: Zhèlǐ piàoliang jí le.",vi:"Mẹ bảo tôi: Nơi này đẹp vô cùng."},{tag:"Ở trường",zh:"在学校，这里漂亮极了。",py:"Zài xuéxiào, Zhèlǐ piàoliang jí le.",vi:"Ở trường, Nơi này đẹp vô cùng."},{tag:"Lúc đi làm",zh:"上班的时候，这里漂亮极了。",py:"Shàngbān de shíhou, Zhèlǐ piàoliang jí le.",vi:"Lúc đi làm, Nơi này đẹp vô cùng."}],
    explanation: "极了 dùng để nhấn mạnh mức độ rất cao.",
    note: "Thường đứng cuối câu."
  },

  {
    id: 56,
    pattern: "时间间隔",
    title: "Khoảng thời gian tính từ lúc hành động kết thúc",
    structure: "V + 了 + 时间 + 了",
    example: "我来这里三年了。",
    pinyin: "Wǒ lái zhèlǐ sān nián le.",
    meaning: "Tôi đến đây được ba năm rồi.",
    examples:[{tag:"Câu gốc",zh:"我来这里三年了。",py:"Wǒ lái zhèlǐ sān nián le.",vi:"Tôi đến đây được ba năm rồi."},{tag:"Tình huống khác",zh:"妈妈来这里三年了。",py:"Māma lái zhèlǐ sān nián le.",vi:"Mẹ đến đây được ba năm rồi."},{tag:"Tình huống khác",zh:"老师来这里三年了。",py:"Lǎoshī lái zhèlǐ sān nián le.",vi:"Thầy đến đây được ba năm rồi."},{tag:"Tình huống khác",zh:"同学们来这里三年了。",py:"Tóngxuémen lái zhèlǐ sān nián le.",vi:"Các bạn đến đây được ba năm rồi."}],
    explanation: "Mẫu này biểu thị khoảng thời gian một trạng thái hoặc hành động đã kéo dài đến hiện tại.",
    note: "了 ở cuối câu nhấn mạnh trạng thái hiện tại."
  },

  {
    id: 57,
    pattern: "时间 + 后",
    title: "Khoảng thời gian sau khi kết thúc",
    structure: "V + 以后 / 之后 + 时间",
    example: "吃饭以后，我休息了一会儿。",
    pinyin: "Chīfàn yǐhòu, wǒ xiūxi le yíhuìr.",
    meaning: "Sau khi ăn cơm, tôi nghỉ một lát.",
    examples:[{tag:"Câu gốc",zh:"吃饭以后，我休息了一会儿。",py:"Chīfàn yǐhòu, wǒ xiūxi le yíhuìr.",vi:"Sau khi ăn cơm, tôi nghỉ một lát."},{tag:"Tình huống khác",zh:"吃饭以后，妈妈休息了一会儿。",py:"Chīfàn yǐhòu, Māma xiūxi le yíhuìr.",vi:"Sau khi ăn cơm, tôi nghỉ một lát."},{tag:"Tình huống khác",zh:"吃饭以后，老师休息了一会儿。",py:"Chīfàn yǐhòu, Lǎoshī xiūxi le yíhuìr.",vi:"Sau khi ăn cơm, tôi nghỉ một lát."},{tag:"Tình huống khác",zh:"吃饭以后，同学们休息了一会儿。",py:"Chīfàn yǐhòu, Tóngxuémen xiūxi le yíhuìr.",vi:"Sau khi ăn cơm, tôi nghỉ một lát."},{tag:"Tình huống khác",zh:"吃面以后，我休息了一会儿。",py:"Chīmiàn yǐhòu, wǒ xiūxi le yíhuìr.",vi:"Sau khi ăn mì, tôi nghỉ một lát."}],
    explanation: "以后 / 之后 biểu thị thời điểm sau một hành động.",
    note: "Có thể đứng sau động từ hoặc cụm thời gian."
  },

  {
    id: 58,
    pattern: "怎样 + V",
    title: "怎样 + động từ — hỏi cách làm",
    structure: "怎样 + V + O？",
    example: "怎样才能学好汉语？",
    pinyin: "Zěnyàng cái néng xuéhǎo Hànyǔ?",
    meaning: "Làm thế nào mới có thể học tốt tiếng Trung?",
    examples:[{tag:"Câu gốc",zh:"怎样才能学好汉语？",py:"Zěnyàng cái néng xuéhǎo Hànyǔ?",vi:"Làm thế nào mới có thể học tốt tiếng Trung?"},{tag:"Ở nhà",zh:"妈妈告诉我：怎样才能学好汉语？",py:"Māma gàosu wǒ: Zěnyàng cái néng xuéhǎo Hànyǔ?",vi:"Mẹ bảo tôi: Làm thế nào mới có thể học tốt tiếng Trung?"},{tag:"Ở trường",zh:"在学校，怎样才能学好汉语？",py:"Zài xuéxiào, Zěnyàng cái néng xuéhǎo Hànyǔ?",vi:"Ở trường, Làm thế nào mới có thể học tốt tiếng Trung?"},{tag:"Lúc đi làm",zh:"上班的时候，怎样才能学好汉语？",py:"Shàngbān de shíhou, Zěnyàng cái néng xuéhǎo Hànyǔ?",vi:"Lúc đi làm, Làm thế nào mới có thể học tốt tiếng Trung?"}],
    explanation: "怎样 đứng trước động từ để hỏi cách thức.",
    note: "才 có thể nhấn mạnh điều kiện cần."
  },

  {
    id: 59,
    pattern: "不是……吗？",
    title: "Câu phản vấn",
    structure: "不是 + …… + 吗？",
    example: "你不是喜欢中国吗？",
    pinyin: "Nǐ bú shì xǐhuan Zhōngguó ma?",
    meaning: "Chẳng phải bạn thích Trung Quốc sao?",
    examples:[{tag:"Câu gốc",zh:"你不是喜欢中国吗？",py:"Nǐ bú shì xǐhuan Zhōngguó ma?",vi:"Chẳng phải bạn thích Trung Quốc sao?"},{tag:"Ở nhà",zh:"妈妈告诉我：你不是喜欢中国吗？",py:"Māma gàosu wǒ: Nǐ bú shì xǐhuan Zhōngguó ma?",vi:"Mẹ bảo tôi: Chẳng phải bạn thích Trung Quốc sao?"},{tag:"Ở trường",zh:"在学校，你不是喜欢中国吗？",py:"Zài xuéxiào, Nǐ bú shì xǐhuan Zhōngguó ma?",vi:"Ở trường, Chẳng phải bạn thích Trung Quốc sao?"},{tag:"Lúc đi làm",zh:"上班的时候，你不是喜欢中国吗？",py:"Shàngbān de shíhou, Nǐ bú shì xǐhuan Zhōngguó ma?",vi:"Lúc đi làm, Chẳng phải bạn thích Trung Quốc sao?"}],
    explanation: "Mẫu phản vấn dùng để nhấn mạnh điều người nói cho là đúng hoặc đã biết.",
    note: "Không nhất thiết là câu hỏi cần câu trả lời mới."
  },

  {
    id: 60,
    pattern: "把 + O + V + 在 / 到",
    title: "把 — xử lý và đặt đến vị trí",
    structure: "S + 把 + O + V + 在/到 + nơi chốn",
    example: "我把衣服放到房间里了。",
    pinyin: "Wǒ bǎ yīfu fàng dào fángjiān lǐ le.",
    meaning: "Tôi đã đặt quần áo vào trong phòng.",
    examples:[{tag:"Câu gốc",zh:"我把衣服放到房间里了。",py:"Wǒ bǎ yīfu fàng dào fángjiān lǐ le.",vi:"Tôi đã đặt quần áo vào trong phòng."},{tag:"Tình huống khác",zh:"妈妈把衣服放到房间里了。",py:"Māma bǎ yīfu fàng dào fángjiān lǐ le.",vi:"Mẹ đã đặt quần áo vào trong phòng."},{tag:"Tình huống khác",zh:"老师把衣服放到房间里了。",py:"Lǎoshī bǎ yīfu fàng dào fángjiān lǐ le.",vi:"Thầy đã đặt quần áo vào trong phòng."},{tag:"Tình huống khác",zh:"同学们把衣服放到房间里了。",py:"Tóngxuémen bǎ yīfu fàng dào fángjiān lǐ le.",vi:"Các bạn đã đặt quần áo vào trong phòng."}],
    explanation: "Nhấn mạnh việc xử lý đối tượng và kết quả vị trí của đối tượng.",
    note: "V + 到 nhấn mạnh sự di chuyển tới nơi."
  },

  {
    id: 61,
    pattern: "把 + O + V + 结果",
    title: "把 — kết quả",
    structure: "S + 把 + O + V + bổ ngữ kết quả",
    example: "我把作业做完了。",
    pinyin: "Wǒ bǎ zuòyè zuòwán le.",
    meaning: "Tôi đã làm xong bài tập.",
    examples:[{tag:"Câu gốc",zh:"我把作业做完了。",py:"Wǒ bǎ zuòyè zuòwán le.",vi:"Tôi đã làm xong bài tập."},{tag:"Tình huống khác",zh:"妈妈把作业做完了。",py:"Māma bǎ zuòyè zuòwán le.",vi:"Mẹ đã làm xong bài tập."},{tag:"Tình huống khác",zh:"老师把作业做完了。",py:"Lǎoshī bǎ zuòyè zuòwán le.",vi:"Thầy đã làm xong bài tập."},{tag:"Tình huống khác",zh:"同学们把作业做完了。",py:"Tóngxuémen bǎ zuòyè zuòwán le.",vi:"Các bạn đã làm xong bài tập."},{tag:"Tình huống khác",zh:"我把生词做完了。",py:"Wǒ bǎ shēngcí zuòwán le.",vi:"Tôi đã làm xong từ mới."}],
    explanation: "把 kết hợp với bổ ngữ kết quả để nhấn mạnh việc đối tượng đã được xử lý hoàn tất.",
    note: "V + 完、好、懂、清楚 đều có thể gặp."
  },

  {
    id: 62,
    pattern: "被 + V + 其他成分",
    title: "Câu bị động mở rộng",
    structure: "S + 被 + V + thành phần",
    example: "我的车被别人开走了。",
    pinyin: "Wǒ de chē bèi biérén kāizǒu le.",
    meaning: "Xe của tôi bị người khác lái đi mất.",
    examples:[{tag:"Câu gốc",zh:"我的车被别人开走了。",py:"Wǒ de chē bèi biérén kāizǒu le.",vi:"Xe của tôi bị người khác lái đi mất."},{tag:"Tình huống khác",zh:"妈妈的车被别人开走了。",py:"Māma de chē bèi biérén kāizǒu le.",vi:"Xe của tôi bị người khác lái đi mất."},{tag:"Tình huống khác",zh:"老师的车被别人开走了。",py:"Lǎoshī de chē bèi biérén kāizǒu le.",vi:"Xe của tôi bị người khác lái đi mất."},{tag:"Tình huống khác",zh:"同学们的车被别人开走了。",py:"Tóngxuémen de chē bèi biérén kāizǒu le.",vi:"Xe của tôi bị người khác lái đi mất."}],
    explanation: "Câu 被 có thể kết hợp với bổ ngữ kết quả hoặc xu hướng.",
    note: "开走、拿走、带走."
  },

  {
    id: 63,
    pattern: "V1着V2",
    title: "着 biểu thị hành động đi kèm",
    structure: "V1 + 着 + V2",
    example: "他笑着说话。",
    pinyin: "Tā xiàozhe shuōhuà.",
    meaning: "Anh ấy vừa cười vừa nói.",
    examples:[{tag:"Câu gốc",zh:"他笑着说话。",py:"Tā xiàozhe shuōhuà.",vi:"Anh ấy vừa cười vừa nói."},{tag:"Ở nhà",zh:"妈妈告诉我：他笑着说话。",py:"Māma gàosu wǒ: Tā xiàozhe shuōhuà.",vi:"Mẹ bảo tôi: Anh ấy vừa cười vừa nói."},{tag:"Ở trường",zh:"在学校，他笑着说话。",py:"Zài xuéxiào, Tā xiàozhe shuōhuà.",vi:"Ở trường, Anh ấy vừa cười vừa nói."},{tag:"Lúc đi làm",zh:"上班的时候，他笑着说话。",py:"Shàngbān de shíhou, Tā xiàozhe shuōhuà.",vi:"Lúc đi làm, Anh ấy vừa cười vừa nói."}],
    explanation: "着 đặt sau động từ thứ nhất để biểu thị trạng thái hoặc hành động đi kèm với hành động chính.",
    note: "V1 thường là trạng thái đi kèm V2."
  },

  {
    id: 64,
    pattern: "A比B更 + Adj",
    title: "So sánh với 更",
    structure: "A 比 B 更 + Adj",
    example: "今天比昨天更冷。",
    pinyin: "Jīntiān bǐ zuótiān gèng lěng.",
    meaning: "Hôm nay lạnh hơn hôm qua.",
    examples:[{tag:"Câu gốc",zh:"今天比昨天更冷。",py:"Jīntiān bǐ zuótiān gèng lěng.",vi:"Hôm nay lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"昨天比昨天更冷。",py:"Zuótiān bǐ zuótiān gèng lěng.",vi:"Hôm qua lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"明天比昨天更冷。",py:"Míngtiān bǐ zuótiān gèng lěng.",vi:"Ngày mai lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"今天比今天更冷。",py:"Jīntiān bǐ Jīntiān gèng lěng.",vi:"Hôm nay lạnh hơn hôm qua."}],
    explanation: "更 nhấn mạnh mức độ cao hơn trong cấu trúc 比.",
    note: "更 = càng / hơn nữa."
  },

  {
    id: 65,
    pattern: "A跟B一样",
    title: "Giống nhau",
    structure: "A 跟 B 一样",
    example: "我跟你一样喜欢汉语。",
    pinyin: "Wǒ gēn nǐ yíyàng xǐhuan Hànyǔ.",
    meaning: "Tôi cũng giống bạn, thích tiếng Trung.",
    examples:[{tag:"Câu gốc",zh:"我跟你一样喜欢汉语。",py:"Wǒ gēn nǐ yíyàng xǐhuan Hànyǔ.",vi:"Tôi cũng giống bạn, thích tiếng Trung."},{tag:"Tình huống khác",zh:"妈妈跟你一样喜欢汉语。",py:"Māma gēn nǐ yíyàng xǐhuan Hànyǔ.",vi:"Mẹ cũng giống bạn, thích tiếng Trung."},{tag:"Tình huống khác",zh:"老师跟你一样喜欢汉语。",py:"Lǎoshī gēn nǐ yíyàng xǐhuan Hànyǔ.",vi:"Thầy cũng giống bạn, thích tiếng Trung."},{tag:"Tình huống khác",zh:"同学们跟你一样喜欢汉语。",py:"Tóngxuémen gēn nǐ yíyàng xǐhuan Hànyǔ.",vi:"Các bạn cũng giống bạn, thích tiếng Trung."},{tag:"Tình huống khác",zh:"我跟你一样喜欢中文。",py:"Wǒ gēn nǐ yíyàng xǐhuan Zhōngwén.",vi:"Tôi cũng giống bạn, thích chữ Trung."}],
    explanation: "一样 biểu thị hai đối tượng có điểm giống nhau.",
    note: "跟……一样 + Adj/V."
  },

  {
    id: 66,
    pattern: "A跟B一样 + Adj",
    title: "So sánh bằng",
    structure: "A 跟 B 一样 + Adj",
    example: "今天跟昨天一样冷。",
    pinyin: "Jīntiān gēn zuótiān yíyàng lěng.",
    meaning: "Hôm nay lạnh giống hôm qua.",
    examples:[{tag:"Câu gốc",zh:"今天跟昨天一样冷。",py:"Jīntiān gēn zuótiān yíyàng lěng.",vi:"Hôm nay lạnh giống hôm qua."},{tag:"Tình huống khác",zh:"昨天跟昨天一样冷。",py:"Zuótiān gēn zuótiān yíyàng lěng.",vi:"Hôm qua lạnh giống hôm qua."},{tag:"Tình huống khác",zh:"明天跟昨天一样冷。",py:"Míngtiān gēn zuótiān yíyàng lěng.",vi:"Ngày mai lạnh giống hôm qua."},{tag:"Tình huống khác",zh:"今天跟今天一样冷。",py:"Jīntiān gēn Jīntiān yíyàng lěng.",vi:"Hôm nay lạnh giống hôm qua."}],
    explanation: "Biểu thị hai đối tượng có cùng mức độ về một đặc điểm.",
    note: "一样 + tính từ."
  },

  {
    id: 67,
    pattern: "A不比B + Adj",
    title: "Không hơn",
    structure: "A 不比 B + Adj",
    example: "今天不比昨天冷。",
    pinyin: "Jīntiān bù bǐ zuótiān lěng.",
    meaning: "Hôm nay không lạnh hơn hôm qua.",
    examples:[{tag:"Câu gốc",zh:"今天不比昨天冷。",py:"Jīntiān bù bǐ zuótiān lěng.",vi:"Hôm nay không lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"昨天不比昨天冷。",py:"Zuótiān bù bǐ zuótiān lěng.",vi:"Hôm qua không lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"明天不比昨天冷。",py:"Míngtiān bù bǐ zuótiān lěng.",vi:"Ngày mai không lạnh hơn hôm qua."},{tag:"Tình huống khác",zh:"今天不比今天冷。",py:"Jīntiān bù bǐ Jīntiān lěng.",vi:"Hôm nay không lạnh hơn hôm qua."}],
    explanation: "Không khẳng định A lạnh hơn B.",
    note: "Không đồng nghĩa tuyệt đối với A 比 B 冷."
  },

  {
    id: 68,
    pattern: "比 + V + 得 + Adj",
    title: "So sánh cách thực hiện hành động",
    structure: "A 比 B + V + 得 + Adj",
    example: "他比我跑得快。",
    pinyin: "Tā bǐ wǒ pǎo de kuài.",
    meaning: "Anh ấy chạy nhanh hơn tôi.",
    examples:[{tag:"Câu gốc",zh:"他比我跑得快。",py:"Tā bǐ wǒ pǎo de kuài.",vi:"Anh ấy chạy nhanh hơn tôi."},{tag:"Tình huống khác",zh:"他比妈妈跑得快。",py:"Tā bǐ Māma pǎo de kuài.",vi:"Anh ấy chạy nhanh hơn tôi."},{tag:"Tình huống khác",zh:"他比老师跑得快。",py:"Tā bǐ Lǎoshī pǎo de kuài.",vi:"Anh ấy chạy nhanh hơn tôi."},{tag:"Tình huống khác",zh:"他比同学们跑得快。",py:"Tā bǐ Tóngxuémen pǎo de kuài.",vi:"Anh ấy chạy nhanh hơn tôi."},{tag:"Tình huống khác",zh:"她比我跑得快。",py:"Tā bǐ wǒ pǎo de kuài.",vi:"Cô ấy chạy nhanh hơn tôi."}],
    explanation: "So sánh mức độ thực hiện cùng một hành động.",
    note: "V + 得 + Adj."
  },

  {
    id: 69,
    pattern: "存现句",
    title: "Câu tồn hiện — xuất hiện",
    structure: "Nơi chốn + V + 了 + số lượng + N",
    example: "教室里来了三个学生。",
    pinyin: "Jiàoshì lǐ lái le sān ge xuésheng.",
    meaning: "Trong lớp học có ba học sinh đến.",
    examples:[{tag:"Câu gốc",zh:"教室里来了三个学生。",py:"Jiàoshì lǐ lái le sān ge xuésheng.",vi:"Trong lớp học có ba học sinh đến."},{tag:"Ở nhà",zh:"妈妈告诉我：教室里来了三个学生。",py:"Māma gàosu wǒ: Jiàoshì lǐ lái le sān ge xuésheng.",vi:"Mẹ bảo tôi: Trong lớp học có ba học sinh đến."},{tag:"Ở trường",zh:"在学校，教室里来了三个学生。",py:"Zài xuéxiào, Jiàoshì lǐ lái le sān ge xuésheng.",vi:"Ở trường, Trong lớp học có ba học sinh đến."},{tag:"Lúc đi làm",zh:"上班的时候，教室里来了三个学生。",py:"Shàngbān de shíhou, Jiàoshì lǐ lái le sān ge xuésheng.",vi:"Lúc đi làm, Trong lớp học có ba học sinh đến."}],
    explanation: "Đưa địa điểm lên đầu để giới thiệu sự xuất hiện của người hoặc vật.",
    note: "Thường dùng 来、出现、放等 động từ."
  },

  {
    id: 70,
    pattern: "存现句 — 消失",
    title: "Câu tồn hiện — biến mất",
    structure: "Nơi chốn + V + 了 + N",
    example: "桌子上少了一本书。",
    pinyin: "Zhuōzi shàng shǎo le yì běn shū.",
    meaning: "Trên bàn thiếu mất một quyển sách.",
    examples:[{tag:"Câu gốc",zh:"桌子上少了一本书。",py:"Zhuōzi shàng shǎo le yì běn shū.",vi:"Trên bàn thiếu mất một quyển sách."},{tag:"Tình huống khác",zh:"桌子上少了一本地图。",py:"Zhuōzi shàng shǎo le yì běn dìtú.",vi:"Trên bàn thiếu mất một quyển bản đồ."},{tag:"Tình huống khác",zh:"桌子上少了一本报纸。",py:"Zhuōzi shàng shǎo le yì běn bàozhǐ.",vi:"Trên bàn thiếu mất một quyển báo."},{tag:"Tình huống khác",zh:"椅子上少了一本书。",py:"yǐzi shàng shǎo le yì běn shū.",vi:"Trên ghế thiếu mất một quyển sách."}],
    explanation: "Cấu trúc tồn hiện cũng có thể biểu thị sự xuất hiện hoặc biến mất.",
    note: "少了 biểu thị số lượng giảm."
  },

  {
    id: 71,
    pattern: "是……的",
    title: "是……的 — nhấn mạnh",
    structure: "S + 是 + thành phần được nhấn mạnh + V + 的",
    example: "我是昨天到的。",
    pinyin: "Wǒ shì zuótiān dào de.",
    meaning: "Tôi đến vào hôm qua.",
    examples:[{tag:"Câu gốc",zh:"我是昨天到的。",py:"Wǒ shì zuótiān dào de.",vi:"Tôi đến vào hôm qua."},{tag:"Tình huống khác",zh:"妈妈是昨天到的。",py:"Māma shì zuótiān dào de.",vi:"Mẹ đến vào hôm qua."},{tag:"Tình huống khác",zh:"老师是昨天到的。",py:"Lǎoshī shì zuótiān dào de.",vi:"Thầy đến vào hôm qua."},{tag:"Tình huống khác",zh:"同学们是昨天到的。",py:"Tóngxuémen shì zuótiān dào de.",vi:"Các bạn đến vào hôm qua."},{tag:"Tình huống khác",zh:"我是今天到的。",py:"Wǒ shì Jīntiān dào de.",vi:"Tôi đến vào hôm qua."}],
    explanation: "是……的 dùng để nhấn mạnh thời gian, địa điểm, cách thức hoặc người thực hiện của một hành động đã xảy ra.",
    note: "Trọng tâm nằm ở thành phần giữa 是 và 的."
  },

  {
    id: 72,
    pattern: "重动句",
    title: "Câu lặp động từ",
    structure: "S + V + O + V + bổ ngữ",
    example: "我每天学习汉语学习两个小时。",
    pinyin: "Wǒ měitiān xuéxí Hànyǔ xuéxí liǎng ge xiǎoshí.",
    meaning: "Mỗi ngày tôi học tiếng Trung trong hai giờ.",
    examples:[{tag:"Câu gốc",zh:"我每天学习汉语学习两个小时。",py:"Wǒ měitiān xuéxí Hànyǔ xuéxí liǎng ge xiǎoshí.",vi:"Mỗi ngày tôi học tiếng Trung trong hai giờ."},{tag:"Tình huống khác",zh:"妈妈每天学习汉语学习两个小时。",py:"Māma měitiān xuéxí Hànyǔ xuéxí liǎng ge xiǎoshí.",vi:"Mỗi ngày tôi học tiếng Trung trong hai giờ."},{tag:"Tình huống khác",zh:"老师每天学习汉语学习两个小时。",py:"Lǎoshī měitiān xuéxí Hànyǔ xuéxí liǎng ge xiǎoshí.",vi:"Mỗi ngày tôi học tiếng Trung trong hai giờ."},{tag:"Tình huống khác",zh:"同学们每天学习汉语学习两个小时。",py:"Tóngxuémen měitiān xuéxí Hànyǔ xuéxí liǎng ge xiǎoshí.",vi:"Mỗi ngày tôi học tiếng Trung trong hai giờ."},{tag:"Tình huống khác",zh:"我每天学习中文学习两个小时。",py:"Wǒ měitiān xuéxí Zhōngwén xuéxí liǎng ge xiǎoshí.",vi:"Mỗi ngày tôi học chữ Trung trong hai giờ."}],
    explanation: "Khi động từ có tân ngữ và cần thêm bổ ngữ thời lượng hoặc mức độ, động từ có thể được lặp lại.",
    note: "Đây là mẫu cần luyện qua câu thực tế."
  },

  {
    id: 73,
    pattern: "先……再……",
    title: "Trước… rồi…",
    structure: "先 A，再 B",
    example: "我先做作业，再看电视。",
    pinyin: "Wǒ xiān zuò zuòyè, zài kàn diànshì.",
    meaning: "Tôi làm bài tập trước rồi mới xem TV.",
    examples:[{tag:"Câu gốc",zh:"我先做作业，再看电视。",py:"Wǒ xiān zuò zuòyè, zài kàn diànshì.",vi:"Tôi làm bài tập trước rồi mới xem TV."},{tag:"Tình huống khác",zh:"妈妈先做作业，再看电视。",py:"Māma xiān zuò zuòyè, zài kàn diànshì.",vi:"Mẹ làm bài tập trước rồi mới xem TV."},{tag:"Tình huống khác",zh:"老师先做作业，再看电视。",py:"Lǎoshī xiān zuò zuòyè, zài kàn diànshì.",vi:"Thầy làm bài tập trước rồi mới xem TV."},{tag:"Tình huống khác",zh:"同学们先做作业，再看电视。",py:"Tóngxuémen xiān zuò zuòyè, zài kàn diànshì.",vi:"Các bạn làm bài tập trước rồi mới xem TV."},{tag:"Tình huống khác",zh:"我先做生词，再看电视。",py:"Wǒ xiān zuò shēngcí, zài kàn diànshì.",vi:"Tôi làm từ mới trước rồi mới xem TV."}],
    explanation: "Biểu thị trình tự hai hành động.",
    note: "再 có nghĩa là sau đó / rồi mới."
  },

  {
    id: 74,
    pattern: "先……然后……",
    title: "Trình tự hành động",
    structure: "先 A，然后 B",
    example: "先洗手，然后吃饭。",
    pinyin: "Xiān xǐ shǒu, ránhòu chīfàn.",
    meaning: "Rửa tay trước, sau đó ăn cơm.",
    examples:[{tag:"Câu gốc",zh:"先洗手，然后吃饭。",py:"Xiān xǐ shǒu, ránhòu chīfàn.",vi:"Rửa tay trước, sau đó ăn cơm."},{tag:"Ở nhà",zh:"妈妈告诉我：先洗手，然后吃饭。",py:"Māma gàosu wǒ: Xiān xǐ shǒu, ránhòu chīfàn.",vi:"Mẹ bảo tôi: Rửa tay trước, sau đó ăn cơm."},{tag:"Ở trường",zh:"在学校，先洗手，然后吃饭。",py:"Zài xuéxiào, Xiān xǐ shǒu, ránhòu chīfàn.",vi:"Ở trường, Rửa tay trước, sau đó ăn cơm."},{tag:"Lúc đi làm",zh:"上班的时候，先洗手，然后吃饭。",py:"Shàngbān de shíhou, Xiān xǐ shǒu, ránhòu chīfàn.",vi:"Lúc đi làm, Rửa tay trước, sau đó ăn cơm."}],
    explanation: "Dùng để trình bày các bước theo thứ tự.",
    note: "Rất phù hợp với bài Ghép câu."
  },

  {
    id: 75,
    pattern: "或者……或者……",
    title: "Hoặc… hoặc…",
    structure: "或者 A，或者 B",
    example: "周末或者在家休息，或者出去玩。",
    pinyin: "Zhōumò huòzhě zài jiā xiūxi, huòzhě chūqù wán.",
    meaning: "Cuối tuần hoặc nghỉ ở nhà, hoặc ra ngoài chơi.",
    examples:[{tag:"Câu gốc",zh:"周末或者在家休息，或者出去玩。",py:"Zhōumò huòzhě zài jiā xiūxi, huòzhě chūqù wán.",vi:"Cuối tuần hoặc nghỉ ở nhà, hoặc ra ngoài chơi."},{tag:"Ở nhà",zh:"妈妈告诉我：周末或者在家休息，或者出去玩。",py:"Māma gàosu wǒ: Zhōumò huòzhě zài jiā xiūxi, huòzhě chūqù wán.",vi:"Mẹ bảo tôi: Cuối tuần hoặc nghỉ ở nhà, hoặc ra ngoài chơi."},{tag:"Ở trường",zh:"在学校，周末或者在家休息，或者出去玩。",py:"Zài xuéxiào, Zhōumò huòzhě zài jiā xiūxi, huòzhě chūqù wán.",vi:"Ở trường, Cuối tuần hoặc nghỉ ở nhà, hoặc ra ngoài chơi."},{tag:"Lúc đi làm",zh:"上班的时候，周末或者在家休息，或者出去玩。",py:"Shàngbān de shíhou, Zhōumò huòzhě zài jiā xiūxi, huòzhě chūqù wán.",vi:"Lúc đi làm, Cuối tuần hoặc nghỉ ở nhà, hoặc ra ngoài chơi."}],
    explanation: "Biểu thị hai khả năng lựa chọn.",
    note: "Dùng trong câu trần thuật."
  },

  {
    id: 76,
    pattern: "一会儿……一会儿……",
    title: "Lúc thì… lúc thì…",
    structure: "一会儿 A，一会儿 B",
    example: "孩子一会儿哭，一会儿笑。",
    pinyin: "Háizi yíhuìr kū, yíhuìr xiào.",
    meaning: "Đứa trẻ lúc thì khóc, lúc thì cười.",
    examples:[{tag:"Câu gốc",zh:"孩子一会儿哭，一会儿笑。",py:"Háizi yíhuìr kū, yíhuìr xiào.",vi:"Đứa trẻ lúc thì khóc, lúc thì cười."},{tag:"Ở nhà",zh:"妈妈告诉我：孩子一会儿哭，一会儿笑。",py:"Māma gàosu wǒ: Háizi yíhuìr kū, yíhuìr xiào.",vi:"Mẹ bảo tôi: Đứa trẻ lúc thì khóc, lúc thì cười."},{tag:"Ở trường",zh:"在学校，孩子一会儿哭，一会儿笑。",py:"Zài xuéxiào, Háizi yíhuìr kū, yíhuìr xiào.",vi:"Ở trường, Đứa trẻ lúc thì khóc, lúc thì cười."},{tag:"Lúc đi làm",zh:"上班的时候，孩子一会儿哭，一会儿笑。",py:"Shàngbān de shíhou, Háizi yíhuìr kū, yíhuìr xiào.",vi:"Lúc đi làm, Đứa trẻ lúc thì khóc, lúc thì cười."}],
    explanation: "Biểu thị hai trạng thái hoặc hành động thay đổi qua lại.",
    note: "Thường dùng để mô tả trạng thái thay đổi."
  },

  {
    id: 77,
    pattern: "又……又……",
    title: "Vừa… vừa…",
    structure: "又 A，又 B",
    example: "这里又安静又漂亮。",
    pinyin: "Zhèlǐ yòu ānjìng yòu piàoliang.",
    meaning: "Nơi này vừa yên tĩnh vừa đẹp.",
    examples:[{tag:"Câu gốc",zh:"这里又安静又漂亮。",py:"Zhèlǐ yòu ānjìng yòu piàoliang.",vi:"Nơi này vừa yên tĩnh vừa đẹp."},{tag:"Ở nhà",zh:"妈妈告诉我：这里又安静又漂亮。",py:"Māma gàosu wǒ: Zhèlǐ yòu ānjìng yòu piàoliang.",vi:"Mẹ bảo tôi: Nơi này vừa yên tĩnh vừa đẹp."},{tag:"Ở trường",zh:"在学校，这里又安静又漂亮。",py:"Zài xuéxiào, Zhèlǐ yòu ānjìng yòu piàoliang.",vi:"Ở trường, Nơi này vừa yên tĩnh vừa đẹp."},{tag:"Lúc đi làm",zh:"上班的时候，这里又安静又漂亮。",py:"Shàngbān de shíhou, Zhèlǐ yòu ānjìng yòu piàoliang.",vi:"Lúc đi làm, Nơi này vừa yên tĩnh vừa đẹp."}],
    explanation: "Biểu thị hai đặc điểm hoặc trạng thái cùng tồn tại.",
    note: "Thường dùng với tính từ."
  },

  {
    id: 78,
    pattern: "一边……一边……",
    title: "Vừa… vừa… đồng thời",
    structure: "一边 A，一边 B",
    example: "她一边听音乐，一边做作业。",
    pinyin: "Tā yìbiān tīng yīnyuè, yìbiān zuò zuòyè.",
    meaning: "Cô ấy vừa nghe nhạc vừa làm bài tập.",
    examples:[{tag:"Câu gốc",zh:"她一边听音乐，一边做作业。",py:"Tā yìbiān tīng yīnyuè, yìbiān zuò zuòyè.",vi:"Cô ấy vừa nghe nhạc vừa làm bài tập."},{tag:"Ở nhà",zh:"妈妈告诉我：她一边听音乐，一边做作业。",py:"Māma gàosu wǒ: Tā yìbiān tīng yīnyuè, yìbiān zuò zuòyè.",vi:"Mẹ bảo tôi: Cô ấy vừa nghe nhạc vừa làm bài tập."},{tag:"Ở trường",zh:"在学校，她一边听音乐，一边做作业。",py:"Zài xuéxiào, Tā yìbiān tīng yīnyuè, yìbiān zuò zuòyè.",vi:"Ở trường, Cô ấy vừa nghe nhạc vừa làm bài tập."},{tag:"Lúc đi làm",zh:"上班的时候，她一边听音乐，一边做作业。",py:"Shàngbān de shíhou, Tā yìbiān tīng yīnyuè, yìbiān zuò zuòyè.",vi:"Lúc đi làm, Cô ấy vừa nghe nhạc vừa làm bài tập."}],
    explanation: "Biểu thị hai hành động xảy ra đồng thời.",
    note: "Hai động từ thường có cùng chủ thể."
  },

  {
    id: 79,
    pattern: "虽然……可是……",
    title: "Mặc dù… nhưng…",
    structure: "虽然 A，可是 B",
    example: "虽然很累，可是他还在工作。",
    pinyin: "Suīrán hěn lèi, kěshì tā hái zài gōngzuò.",
    meaning: "Mặc dù rất mệt nhưng anh ấy vẫn đang làm việc.",
    examples:[{tag:"Câu gốc",zh:"虽然很累，可是他还在工作。",py:"Suīrán hěn lèi, kěshì tā hái zài gōngzuò.",vi:"Mặc dù rất mệt nhưng anh ấy vẫn đang làm việc."},{tag:"Ở nhà",zh:"妈妈告诉我：虽然很累，可是他还在工作。",py:"Māma gàosu wǒ: Suīrán hěn lèi, kěshì tā hái zài gōngzuò.",vi:"Mẹ bảo tôi: Mặc dù rất mệt nhưng anh ấy vẫn đang làm việc."},{tag:"Ở trường",zh:"在学校，虽然很累，可是他还在工作。",py:"Zài xuéxiào, Suīrán hěn lèi, kěshì tā hái zài gōngzuò.",vi:"Ở trường, Mặc dù rất mệt nhưng anh ấy vẫn đang làm việc."},{tag:"Lúc đi làm",zh:"上班的时候，虽然很累，可是他还在工作。",py:"Shàngbān de shíhou, Suīrán hěn lèi, kěshì tā hái zài gōngzuò.",vi:"Lúc đi làm, Mặc dù rất mệt nhưng anh ấy vẫn đang làm việc."}],
    explanation: "Biểu thị quan hệ tương phản.",
    note: "可是 có thể thay bằng 但是."
  },

  {
    id: 80,
    pattern: "为了……",
    title: "Để…",
    structure: "为了 A，B",
    example: "为了考试，他每天认真学习。",
    pinyin: "Wèile kǎoshì, tā měitiān rènzhēn xuéxí.",
    meaning: "Để thi cử, mỗi ngày anh ấy học tập nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"为了考试，他每天认真学习。",py:"Wèile kǎoshì, tā měitiān rènzhēn xuéxí.",vi:"Để thi cử, mỗi ngày anh ấy học tập nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：为了考试，他每天认真学习。",py:"Māma gàosu wǒ: Wèile kǎoshì, tā měitiān rènzhēn xuéxí.",vi:"Mẹ bảo tôi: Để thi cử, mỗi ngày anh ấy học tập nghiêm túc."},{tag:"Ở trường",zh:"在学校，为了考试，他每天认真学习。",py:"Zài xuéxiào, Wèile kǎoshì, tā měitiān rènzhēn xuéxí.",vi:"Ở trường, Để thi cử, mỗi ngày anh ấy học tập nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，为了考试，他每天认真学习。",py:"Shàngbān de shíhou, Wèile kǎoshì, tā měitiān rènzhēn xuéxí.",vi:"Lúc đi làm, Để thi cử, mỗi ngày anh ấy học tập nghiêm túc."}],
    explanation: "为了 giới thiệu mục đích của hành động phía sau.",
    note: "Có thể đứng đầu câu."
  },

  {
    id: 81,
    pattern: "……了……（就）……",
    title: "Vừa… là… / sau khi… thì…",
    structure: "A 了，B 就 C",
    example: "我吃了饭就去上班。",
    pinyin: "Wǒ chī le fàn jiù qù shàngbān.",
    meaning: "Tôi ăn cơm xong là đi làm ngay.",
    examples:[{tag:"Câu gốc",zh:"我吃了饭就去上班。",py:"Wǒ chī le fàn jiù qù shàngbān.",vi:"Tôi ăn cơm xong là đi làm ngay."},{tag:"Tình huống khác",zh:"妈妈吃了饭就去上班。",py:"Māma chī le fàn jiù qù shàngbān.",vi:"Mẹ ăn cơm xong là đi làm ngay."},{tag:"Tình huống khác",zh:"老师吃了饭就去上班。",py:"Lǎoshī chī le fàn jiù qù shàngbān.",vi:"Thầy ăn cơm xong là đi làm ngay."},{tag:"Tình huống khác",zh:"同学们吃了饭就去上班。",py:"Tóngxuémen chī le fàn jiù qù shàngbān.",vi:"Các bạn ăn cơm xong là đi làm ngay."},{tag:"Tình huống khác",zh:"我吃了面就去上班。",py:"Wǒ chī le miàn jiù qù shàngbān.",vi:"Tôi ăn mì xong là đi làm ngay."}],
    explanation: "Biểu thị hai hành động xảy ra gần nhau theo trình tự.",
    note: "了 ở đây giúp biểu thị hành động thứ nhất đã hoàn thành."
  },

  {
    id: 82,
    pattern: "大概 / 概数",
    title: "Biểu đạt số lượng ước chừng",
    structure: "大概 + số lượng / số liền nhau",
    example: "大概有二三十个人。",
    pinyin: "Dàgài yǒu èr sān shí ge rén.",
    meaning: "Có khoảng hai ba chục người.",
    examples:[{tag:"Câu gốc",zh:"大概有二三十个人。",py:"Dàgài yǒu èr sān shí ge rén.",vi:"Có khoảng hai ba chục người."},{tag:"Ở nhà",zh:"妈妈告诉我：大概有二三十个人。",py:"Māma gàosu wǒ: Dàgài yǒu èr sān shí ge rén.",vi:"Mẹ bảo tôi: Có khoảng hai ba chục người."},{tag:"Ở trường",zh:"在学校，大概有二三十个人。",py:"Zài xuéxiào, Dàgài yǒu èr sān shí ge rén.",vi:"Ở trường, Có khoảng hai ba chục người."},{tag:"Lúc đi làm",zh:"上班的时候，大概有二三十个人。",py:"Shàngbān de shíhou, Dàgài yǒu èr sān shí ge rén.",vi:"Lúc đi làm, Có khoảng hai ba chục người."}],
    explanation: "大概 biểu thị con số ước chừng; hai số liền nhau cũng có thể biểu thị khoảng số lượng.",
    note: "Ví dụ: 二三天、七八个人."
  }

],  

    4: [

  {
    id:"hsk4_01",
    pattern:"敢",
    title:"敢 — dám",
    structure:"S + 敢 + V",
    example:"他不敢一个人走夜路。",
    pinyin:"Tā bù gǎn yí ge rén zǒu yèlù.",
    meaning:"Anh ấy không dám đi đường ban đêm một mình.",
    explanation:"敢 biểu thị có đủ can đảm hoặc tự tin để làm một việc.",
    note:"Phủ định thường dùng 不敢."
  },

  {
    id:"hsk4_02",
    pattern:"各",
    title:"各 — mỗi, từng",
    structure:"各 + N",
    example:"各国都有自己的文化。",
    pinyin:"Gè guó dōu yǒu zìjǐ de wénhuà.",
    meaning:"Mỗi nước đều có nền văn hóa riêng.",
    examples:[{tag:"Câu gốc",zh:"各国都有自己的文化。",py:"Gè guó dōu yǒu zìjǐ de wénhuà.",vi:"Mỗi nước đều có nền văn hóa riêng."},{tag:"Ở nhà",zh:"妈妈告诉我：各国都有自己的文化。",py:"Māma gàosu wǒ: Gè guó dōu yǒu zìjǐ de wénhuà.",vi:"Mẹ bảo tôi: Mỗi nước đều có nền văn hóa riêng."},{tag:"Ở trường",zh:"在学校，各国都有自己的文化。",py:"Zài xuéxiào, Gè guó dōu yǒu zìjǐ de wénhuà.",vi:"Ở trường, Mỗi nước đều có nền văn hóa riêng."},{tag:"Lúc đi làm",zh:"上班的时候，各国都有自己的文化。",py:"Shàngbān de shíhou, Gè guó dōu yǒu zìjǐ de wénhuà.",vi:"Lúc đi làm, Mỗi nước đều có nền văn hóa riêng."}],
    explanation:"各 chỉ từng đơn vị trong một tập hợp.",
    note:"各 thường đi với danh từ hoặc cụm danh từ."
  },

  {
    id:"hsk4_03",
    pattern:"各位",
    title:"各位 — các vị, mọi người",
    structure:"各位 + N",
    example:"各位同学，请安静一下。",
    pinyin:"Gèwèi tóngxué, qǐng ānjìng yíxià.",
    meaning:"Các bạn học sinh, xin hãy yên lặng một chút.",
    examples:[{tag:"Câu gốc",zh:"各位同学，请安静一下。",py:"Gèwèi tóngxué, qǐng ānjìng yíxià.",vi:"Các bạn học sinh, xin hãy yên lặng một chút."},{tag:"Ở nhà",zh:"妈妈告诉我：各位同学，请安静一下。",py:"Māma gàosu wǒ: Gèwèi tóngxué, qǐng ānjìng yíxià.",vi:"Mẹ bảo tôi: Các bạn học sinh, xin hãy yên lặng một chút."},{tag:"Ở trường",zh:"在学校，各位同学，请安静一下。",py:"Zài xuéxiào, Gèwèi tóngxué, qǐng ānjìng yíxià.",vi:"Ở trường, Các bạn học sinh, xin hãy yên lặng một chút."},{tag:"Lúc đi làm",zh:"上班的时候，各位同学，请安静一下。",py:"Shàngbān de shíhou, Gèwèi tóngxué, qǐng ānjìng yíxià.",vi:"Lúc đi làm, Các bạn học sinh, xin hãy yên lặng một chút."}],
    explanation:"各位 là cách gọi lịch sự đối với một nhóm người.",
    note:"Thường dùng trong phát biểu, thông báo."
  },

  {
    id:"hsk4_04",
    pattern:"各种",
    title:"各种 — các loại",
    structure:"各种 + N",
    example:"商店里有各种各样的商品。",
    pinyin:"Shāngdiàn lǐ yǒu gèzhǒng gèyàng de shāngpǐn.",
    meaning:"Trong cửa hàng có đủ loại hàng hóa.",
    examples:[{tag:"Câu gốc",zh:"商店里有各种各样的商品。",py:"Shāngdiàn lǐ yǒu gèzhǒng gèyàng de shāngpǐn.",vi:"Trong cửa hàng có đủ loại hàng hóa."},{tag:"Ở nhà",zh:"妈妈告诉我：商店里有各种各样的商品。",py:"Māma gàosu wǒ: Shāngdiàn lǐ yǒu gèzhǒng gèyàng de shāngpǐn.",vi:"Mẹ bảo tôi: Trong cửa hàng có đủ loại hàng hóa."},{tag:"Ở trường",zh:"在学校，商店里有各种各样的商品。",py:"Zài xuéxiào, Shāngdiàn lǐ yǒu gèzhǒng gèyàng de shāngpǐn.",vi:"Ở trường, Trong cửa hàng có đủ loại hàng hóa."},{tag:"Lúc đi làm",zh:"上班的时候，商店里有各种各样的商品。",py:"Shàngbān de shíhou, Shāngdiàn lǐ yǒu gèzhǒng gèyàng de shāngpǐn.",vi:"Lúc đi làm, Trong cửa hàng có đủ loại hàng hóa."}],
    explanation:"各种 biểu thị nhiều loại khác nhau.",
    note:"各种各样 là cách nói rất thường gặp."
  },

  {
    id:"hsk4_05",
    pattern:"任何",
    title:"任何 — bất kỳ",
    structure:"任何 + N",
    example:"你有任何问题都可以问我。",
    pinyin:"Nǐ yǒu rènhé wèntí dōu kěyǐ wèn wǒ.",
    meaning:"Bạn có bất kỳ vấn đề gì cũng có thể hỏi tôi.",
    examples:[{tag:"Câu gốc",zh:"你有任何问题都可以问我。",py:"Nǐ yǒu rènhé wèntí dōu kěyǐ wèn wǒ.",vi:"Bạn có bất kỳ vấn đề gì cũng có thể hỏi tôi."},{tag:"Tình huống khác",zh:"你有任何问题都可以问妈妈。",py:"Nǐ yǒu rènhé wèntí dōu kěyǐ wèn Māma.",vi:"Bạn có bất kỳ vấn đề gì cũng có thể hỏi tôi."},{tag:"Tình huống khác",zh:"你有任何问题都可以问老师。",py:"Nǐ yǒu rènhé wèntí dōu kěyǐ wèn Lǎoshī.",vi:"Bạn có bất kỳ vấn đề gì cũng có thể hỏi tôi."},{tag:"Tình huống khác",zh:"你有任何问题都可以问同学们。",py:"Nǐ yǒu rènhé wèntí dōu kěyǐ wèn Tóngxuémen.",vi:"Bạn có bất kỳ vấn đề gì cũng có thể hỏi tôi."}],
    explanation:"任何 biểu thị không giới hạn đối tượng.",
    note:"Thường kết hợp với 都/也."
  },

  {
    id:"hsk4_06",
    pattern:"此",
    title:"此 — này, đây",
    structure:"此 + N",
    example:"此方法非常有效。",
    pinyin:"Cǐ fāngfǎ fēicháng yǒuxiào.",
    meaning:"Phương pháp này rất hiệu quả.",
    examples:[{tag:"Câu gốc",zh:"此方法非常有效。",py:"Cǐ fāngfǎ fēicháng yǒuxiào.",vi:"Phương pháp này rất hiệu quả."},{tag:"Ở nhà",zh:"妈妈告诉我：此方法非常有效。",py:"Māma gàosu wǒ: Cǐ fāngfǎ fēicháng yǒuxiào.",vi:"Mẹ bảo tôi: Phương pháp này rất hiệu quả."},{tag:"Ở trường",zh:"在学校，此方法非常有效。",py:"Zài xuéxiào, Cǐ fāngfǎ fēicháng yǒuxiào.",vi:"Ở trường, Phương pháp này rất hiệu quả."},{tag:"Lúc đi làm",zh:"上班的时候，此方法非常有效。",py:"Shàngbān de shíhou, Cǐ fāngfǎ fēicháng yǒuxiào.",vi:"Lúc đi làm, Phương pháp này rất hiệu quả."}],
    explanation:"此 tương đương với 这 trong văn viết hoặc cách nói trang trọng.",
    note:"此 thường gặp trong văn viết."
  },

  {
    id:"hsk4_07",
    pattern:"打",
    title:"打 — lượng từ",
    structure:"一打 + N",
    example:"我买了一打鸡蛋。",
    pinyin:"Wǒ mǎi le yì dá jīdàn.",
    meaning:"Tôi đã mua một tá trứng.",
    examples:[{tag:"Câu gốc",zh:"我买了一打鸡蛋。",py:"Wǒ mǎi le yì dá jīdàn.",vi:"Tôi đã mua một tá trứng."},{tag:"Tình huống khác",zh:"妈妈买了一打鸡蛋。",py:"Māma mǎi le yì dá jīdàn.",vi:"Mẹ đã mua một tá trứng."},{tag:"Tình huống khác",zh:"老师买了一打鸡蛋。",py:"Lǎoshī mǎi le yì dá jīdàn.",vi:"Thầy đã mua một tá trứng."},{tag:"Tình huống khác",zh:"同学们买了一打鸡蛋。",py:"Tóngxuémen mǎi le yì dá jīdàn.",vi:"Các bạn đã mua một tá trứng."}],
    explanation:"打 là lượng từ chỉ một nhóm gồm mười hai đơn vị.",
    note:"一打鸡蛋 = một tá trứng."
  },

  {
    id:"hsk4_08",
    pattern:"袋",
    title:"袋 — túi, bao",
    structure:"一袋 + N",
    example:"桌上有一袋米。",
    pinyin:"Zhuō shàng yǒu yí dài mǐ.",
    meaning:"Trên bàn có một túi gạo.",
    examples:[{tag:"Câu gốc",zh:"桌上有一袋米。",py:"Zhuō shàng yǒu yí dài mǐ.",vi:"Trên bàn có một túi gạo."},{tag:"Ở nhà",zh:"妈妈告诉我：桌上有一袋米。",py:"Māma gàosu wǒ: Zhuō shàng yǒu yí dài mǐ.",vi:"Mẹ bảo tôi: Trên bàn có một túi gạo."},{tag:"Ở trường",zh:"在学校，桌上有一袋米。",py:"Zài xuéxiào, Zhuō shàng yǒu yí dài mǐ.",vi:"Ở trường, Trên bàn có một túi gạo."},{tag:"Lúc đi làm",zh:"上班的时候，桌上有一袋米。",py:"Shàngbān de shíhou, Zhuō shàng yǒu yí dài mǐ.",vi:"Lúc đi làm, Trên bàn có một túi gạo."}],
    explanation:"袋 có thể làm lượng từ cho vật được đựng trong túi.",
    note:"一袋米、一袋面."
  },

  {
    id:"hsk4_09",
    pattern:"棵",
    title:"棵 — lượng từ cho cây",
    structure:"一棵 + Cây",
    example:"院子里有一棵大树。",
    pinyin:"Yuànzi lǐ yǒu yì kē dà shù.",
    meaning:"Trong sân có một cây lớn.",
    examples:[{tag:"Câu gốc",zh:"院子里有一棵大树。",py:"Yuànzi lǐ yǒu yì kē dà shù.",vi:"Trong sân có một cây lớn."},{tag:"Ở nhà",zh:"妈妈告诉我：院子里有一棵大树。",py:"Māma gàosu wǒ: Yuànzi lǐ yǒu yì kē dà shù.",vi:"Mẹ bảo tôi: Trong sân có một cây lớn."},{tag:"Ở trường",zh:"在学校，院子里有一棵大树。",py:"Zài xuéxiào, Yuànzi lǐ yǒu yì kē dà shù.",vi:"Ở trường, Trong sân có một cây lớn."},{tag:"Lúc đi làm",zh:"上班的时候，院子里有一棵大树。",py:"Shàngbān de shíhou, Yuànzi lǐ yǒu yì kē dà shù.",vi:"Lúc đi làm, Trong sân có một cây lớn."}],
    explanation:"棵 là lượng từ thường dùng cho cây cối.",
    note:"一棵树、一棵苹果树."
  },

  {
    id:"hsk4_10",
    pattern:"台",
    title:"台 — lượng từ cho máy móc",
    structure:"一台 + Máy móc",
    example:"办公室里有两台电脑。",
    pinyin:"Bàngōngshì lǐ yǒu liǎng tái diànnǎo.",
    meaning:"Trong văn phòng có hai chiếc máy tính.",
    examples:[{tag:"Câu gốc",zh:"办公室里有两台电脑。",py:"Bàngōngshì lǐ yǒu liǎng tái diànnǎo.",vi:"Trong văn phòng có hai chiếc máy tính."},{tag:"Ở nhà",zh:"妈妈告诉我：办公室里有两台电脑。",py:"Māma gàosu wǒ: Bàngōngshì lǐ yǒu liǎng tái diànnǎo.",vi:"Mẹ bảo tôi: Trong văn phòng có hai chiếc máy tính."},{tag:"Ở trường",zh:"在学校，办公室里有两台电脑。",py:"Zài xuéxiào, Bàngōngshì lǐ yǒu liǎng tái diànnǎo.",vi:"Ở trường, Trong văn phòng có hai chiếc máy tính."},{tag:"Lúc đi làm",zh:"上班的时候，办公室里有两台电脑。",py:"Shàngbān de shíhou, Bàngōngshì lǐ yǒu liǎng tái diànnǎo.",vi:"Lúc đi làm, Trong văn phòng có hai chiếc máy tính."}],
    explanation:"台 là lượng từ thường dùng cho máy móc, thiết bị.",
    note:"一台电脑、一台电视."
  },

  {
    id:"hsk4_11",
    pattern:"幅",
    title:"幅 — lượng từ cho tranh",
    structure:"一幅 + Tranh",
    example:"墙上挂着一幅画。",
    pinyin:"Qiáng shàng guàzhe yì fú huà.",
    meaning:"Trên tường treo một bức tranh.",
    examples:[{tag:"Câu gốc",zh:"墙上挂着一幅画。",py:"Qiáng shàng guàzhe yì fú huà.",vi:"Trên tường treo một bức tranh."},{tag:"Ở nhà",zh:"妈妈告诉我：墙上挂着一幅画。",py:"Māma gàosu wǒ: Qiáng shàng guàzhe yì fú huà.",vi:"Mẹ bảo tôi: Trên tường treo một bức tranh."},{tag:"Ở trường",zh:"在学校，墙上挂着一幅画。",py:"Zài xuéxiào, Qiáng shàng guàzhe yì fú huà.",vi:"Ở trường, Trên tường treo một bức tranh."},{tag:"Lúc đi làm",zh:"上班的时候，墙上挂着一幅画。",py:"Shàngbān de shíhou, Qiáng shàng guàzhe yì fú huà.",vi:"Lúc đi làm, Trên tường treo một bức tranh."}],
    explanation:"幅 là lượng từ cho tranh, ảnh hoặc một số vật có dạng mặt phẳng.",
    note:"一幅画、一幅地图."
  },

  {
    id:"hsk4_12",
    pattern:"场",
    title:"场 — một trận, một buổi",
    structure:"一场 + Sự kiện",
    example:"我们看了一场精彩的比赛。",
    pinyin:"Wǒmen kàn le yì chǎng jīngcǎi de bǐsài.",
    meaning:"Chúng tôi đã xem một trận đấu精彩.",
    examples:[{tag:"Câu gốc",zh:"我们看了一场精彩的比赛。",py:"Wǒmen kàn le yì chǎng jīngcǎi de bǐsài.",vi:"Chúng tôi đã xem một trận đấu精彩."},{tag:"Tình huống khác",zh:"妈妈们看了一场精彩的比赛。",py:"Māmamen kàn le yì chǎng jīngcǎi de bǐsài.",vi:"Chúng tôi đã xem một trận đấu精彩."},{tag:"Tình huống khác",zh:"老师们看了一场精彩的比赛。",py:"Lǎoshīmen kàn le yì chǎng jīngcǎi de bǐsài.",vi:"Chúng tôi đã xem một trận đấu精彩."},{tag:"Tình huống khác",zh:"同学们们看了一场精彩的比赛。",py:"Tóngxuémenmen kàn le yì chǎng jīngcǎi de bǐsài.",vi:"Chúng tôi đã xem một trận đấu精彩."},{tag:"Tình huống khác",zh:"他们看了一场精彩的比赛。",py:"Tāmen kàn le yì chǎng jīngcǎi de bǐsài.",vi:"Họ đã xem một trận đấu精彩."}],
    explanation:"场 là lượng từ cho các sự kiện hoặc hoạt động diễn ra trong một khoảng thời gian.",
    note:"一场比赛、一场电影、一场雨."
  },

  {
    id:"hsk4_13",
    pattern:"顿",
    title:"顿 — một bữa, một trận",
    structure:"一顿 + N",
    example:"妈妈给我们做了一顿丰盛的晚饭。",
    pinyin:"Māma gěi wǒmen zuò le yí dùn fēngshèng de wǎnfàn.",
    meaning:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn.",
    examples:[{tag:"Câu gốc",zh:"妈妈给我们做了一顿丰盛的晚饭。",py:"Māma gěi wǒmen zuò le yí dùn fēngshèng de wǎnfàn.",vi:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn."},{tag:"Tình huống khác",zh:"妈妈给妈妈们做了一顿丰盛的晚饭。",py:"Māma gěi Māmamen zuò le yí dùn fēngshèng de wǎnfàn.",vi:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn."},{tag:"Tình huống khác",zh:"妈妈给老师们做了一顿丰盛的晚饭。",py:"Māma gěi Lǎoshīmen zuò le yí dùn fēngshèng de wǎnfàn.",vi:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn."},{tag:"Tình huống khác",zh:"妈妈给同学们们做了一顿丰盛的晚饭。",py:"Māma gěi Tóngxuémenmen zuò le yí dùn fēngshèng de wǎnfàn.",vi:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn."},{tag:"Tình huống khác",zh:"妈妈给他们做了一顿丰盛的晚饭。",py:"Māma gěi Tāmen zuò le yí dùn fēngshèng de wǎnfàn.",vi:"Mẹ đã nấu cho chúng tôi một bữa tối thịnh soạn."}],
    explanation:"顿 có thể làm lượng từ cho bữa ăn hoặc hành động diễn ra một lần.",
    note:"一顿饭、一顿批评."
  },

  {
    id:"hsk4_14",
    pattern:"趟",
    title:"趟 — chuyến, lượt",
    structure:"一趟 + Động từ/địa điểm",
    example:"我今天得去银行一趟。",
    pinyin:"Wǒ jīntiān děi qù yínháng yí tàng.",
    meaning:"Hôm nay tôi phải đi ngân hàng một chuyến.",
    examples:[{tag:"Câu gốc",zh:"我今天得去银行一趟。",py:"Wǒ jīntiān děi qù yínháng yí tàng.",vi:"Hôm nay tôi phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"妈妈今天得去银行一趟。",py:"Māma jīntiān děi qù yínháng yí tàng.",vi:"Hôm nay tôi phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"老师今天得去银行一趟。",py:"Lǎoshī jīntiān děi qù yínháng yí tàng.",vi:"Hôm nay tôi phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"同学们今天得去银行一趟。",py:"Tóngxuémen jīntiān děi qù yínháng yí tàng.",vi:"Hôm nay tôi phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"我昨天得去银行一趟。",py:"Wǒ Zuótiān děi qù yínháng yí tàng.",vi:"Hôm qua tôi phải đi ngân hàng một chuyến."}],
    explanation:"趟 là lượng từ cho một lần đi hoặc chuyến đi.",
    note:"去一趟、跑一趟."
  },

  {
    id:"hsk4_15",
    pattern:"十分",
    title:"十分 — rất, vô cùng",
    structure:"十分 + Adj",
    example:"这件事十分重要。",
    pinyin:"Zhè jiàn shì shífēn zhòngyào.",
    meaning:"Việc này vô cùng quan trọng.",
    examples:[{tag:"Câu gốc",zh:"这件事十分重要。",py:"Zhè jiàn shì shífēn zhòngyào.",vi:"Việc này vô cùng quan trọng."},{tag:"Ở nhà",zh:"妈妈告诉我：这件事十分重要。",py:"Māma gàosu wǒ: Zhè jiàn shì shífēn zhòngyào.",vi:"Mẹ bảo tôi: Việc này vô cùng quan trọng."},{tag:"Ở trường",zh:"在学校，这件事十分重要。",py:"Zài xuéxiào, Zhè jiàn shì shífēn zhòngyào.",vi:"Ở trường, Việc này vô cùng quan trọng."},{tag:"Lúc đi làm",zh:"上班的时候，这件事十分重要。",py:"Shàngbān de shíhou, Zhè jiàn shì shífēn zhòngyào.",vi:"Lúc đi làm, Việc này vô cùng quan trọng."}],
    explanation:"十分 dùng để tăng mức độ của tính từ.",
    note:"Cách dùng tương đối trang trọng."
  },

  {
    id:"hsk4_16",
    pattern:"更加",
    title:"更加 — càng hơn",
    structure:"更加 + Adj/V",
    example:"学习以后，我对这个问题有了更加深入的了解。",
    pinyin:"Xuéxí yǐhòu, wǒ duì zhège wèntí yǒu le gèngjiā shēnrù de liǎojiě.",
    meaning:"Sau khi học, tôi hiểu vấn đề này sâu hơn.",
    examples:[{tag:"Câu gốc",zh:"学习以后，我对这个问题有了更加深入的了解。",py:"Xuéxí yǐhòu, wǒ duì zhège wèntí yǒu le gèngjiā shēnrù de liǎojiě.",vi:"Sau khi học, tôi hiểu vấn đề này sâu hơn."},{tag:"Tình huống khác",zh:"学习以后，妈妈对这个问题有了更加深入的了解。",py:"Xuéxí yǐhòu, Māma duì zhège wèntí yǒu le gèngjiā shēnrù de liǎojiě.",vi:"Sau khi học, tôi hiểu vấn đề này sâu hơn."},{tag:"Tình huống khác",zh:"学习以后，老师对这个问题有了更加深入的了解。",py:"Xuéxí yǐhòu, Lǎoshī duì zhège wèntí yǒu le gèngjiā shēnrù de liǎojiě.",vi:"Sau khi học, tôi hiểu vấn đề này sâu hơn."},{tag:"Tình huống khác",zh:"学习以后，同学们对这个问题有了更加深入的了解。",py:"Xuéxí yǐhòu, Tóngxuémen duì zhège wèntí yǒu le gèngjiā shēnrù de liǎojiě.",vi:"Sau khi học, tôi hiểu vấn đề này sâu hơn."}],
    explanation:"更加 biểu thị mức độ tăng lên so với trước.",
    note:"更加 thường dùng trong văn viết."
  },

  {
    id:"hsk4_17",
    pattern:"稍",
    title:"稍 — hơi, một chút",
    structure:"稍 + Adj/V",
    example:"请稍等一下。",
    pinyin:"Qǐng shāo děng yíxià.",
    meaning:"Xin hãy đợi một chút.",
    examples:[{tag:"Câu gốc",zh:"请稍等一下。",py:"Qǐng shāo děng yíxià.",vi:"Xin hãy đợi một chút."},{tag:"Ở nhà",zh:"妈妈告诉我：请稍等一下。",py:"Māma gàosu wǒ: Qǐng shāo děng yíxià.",vi:"Mẹ bảo tôi: Xin hãy đợi một chút."},{tag:"Ở trường",zh:"在学校，请稍等一下。",py:"Zài xuéxiào, Qǐng shāo děng yíxià.",vi:"Ở trường, Xin hãy đợi một chút."},{tag:"Lúc đi làm",zh:"上班的时候，请稍等一下。",py:"Shàngbān de shíhou, Qǐng shāo děng yíxià.",vi:"Lúc đi làm, Xin hãy đợi một chút."}],
    explanation:"稍 biểu thị mức độ nhỏ, nhẹ.",
    note:"稍 thường gặp trong cách nói trang trọng."
  },

  {
    id:"hsk4_18",
    pattern:"稍微",
    title:"稍微 — hơi, một chút",
    structure:"稍微 + Adj/V",
    example:"请稍微慢一点儿。",
    pinyin:"Qǐng shāowéi màn yìdiǎnr.",
    meaning:"Xin hãy chậm hơn một chút.",
    examples:[{tag:"Câu gốc",zh:"请稍微慢一点儿。",py:"Qǐng shāowéi màn yìdiǎnr.",vi:"Xin hãy chậm hơn một chút."},{tag:"Ở nhà",zh:"妈妈告诉我：请稍微慢一点儿。",py:"Māma gàosu wǒ: Qǐng shāowéi màn yìdiǎnr.",vi:"Mẹ bảo tôi: Xin hãy chậm hơn một chút."},{tag:"Ở trường",zh:"在学校，请稍微慢一点儿。",py:"Zài xuéxiào, Qǐng shāowéi màn yìdiǎnr.",vi:"Ở trường, Xin hãy chậm hơn một chút."},{tag:"Lúc đi làm",zh:"上班的时候，请稍微慢一点儿。",py:"Shàngbān de shíhou, Qǐng shāowéi màn yìdiǎnr.",vi:"Lúc đi làm, Xin hãy chậm hơn một chút."}],
    explanation:"稍微 biểu thị mức độ nhỏ.",
    note:"Thường đi với 一点儿."
  },

  {
    id:"hsk4_19",
    pattern:"尤其",
    title:"尤其 — đặc biệt là",
    structure:"尤其 + Adj/V",
    example:"我喜欢水果，尤其喜欢苹果。",
    pinyin:"Wǒ xǐhuan shuǐguǒ, yóuqí xǐhuan píngguǒ.",
    meaning:"Tôi thích hoa quả, đặc biệt là táo.",
    examples:[{tag:"Câu gốc",zh:"我喜欢水果，尤其喜欢苹果。",py:"Wǒ xǐhuan shuǐguǒ, yóuqí xǐhuan píngguǒ.",vi:"Tôi thích hoa quả, đặc biệt là táo."},{tag:"Tình huống khác",zh:"妈妈喜欢水果，尤其喜欢苹果。",py:"Māma xǐhuan shuǐguǒ, yóuqí xǐhuan píngguǒ.",vi:"Mẹ thích hoa quả, đặc biệt là táo."},{tag:"Tình huống khác",zh:"老师喜欢水果，尤其喜欢苹果。",py:"Lǎoshī xǐhuan shuǐguǒ, yóuqí xǐhuan píngguǒ.",vi:"Thầy thích hoa quả, đặc biệt là táo."},{tag:"Tình huống khác",zh:"同学们喜欢水果，尤其喜欢苹果。",py:"Tóngxuémen xǐhuan shuǐguǒ, yóuqí xǐhuan píngguǒ.",vi:"Các bạn thích hoa quả, đặc biệt là táo."},{tag:"Tình huống khác",zh:"我喜欢茶果，尤其喜欢苹果。",py:"Wǒ xǐhuan cháguǒ, yóuqí xǐhuan píngguǒ.",vi:"Tôi thích hoa quả, đặc biệt là táo."}],
    explanation:"尤其 dùng để nhấn mạnh một đối tượng nổi bật trong một nhóm.",
    note:"尤其是 + N cũng rất thường gặp."
  },

  {
    id:"hsk4_20",
    pattern:"多么",
    title:"多么 — biết bao, thật là",
    structure:"多么 + Adj",
    example:"你看这里的风景多么漂亮！",
    pinyin:"Nǐ kàn zhèlǐ de fēngjǐng duōme piàoliang!",
    meaning:"Bạn xem phong cảnh ở đây đẹp biết bao!",
    examples:[{tag:"Câu gốc",zh:"你看这里的风景多么漂亮！",py:"Nǐ kàn zhèlǐ de fēngjǐng duōme piàoliang!",vi:"Bạn xem phong cảnh ở đây đẹp biết bao!"},{tag:"Ở nhà",zh:"妈妈告诉我：你看这里的风景多么漂亮！",py:"Māma gàosu wǒ: Nǐ kàn zhèlǐ de fēngjǐng duōme piàoliang!",vi:"Mẹ bảo tôi: Bạn xem phong cảnh ở đây đẹp biết bao!"},{tag:"Ở trường",zh:"在学校，你看这里的风景多么漂亮！",py:"Zài xuéxiào, Nǐ kàn zhèlǐ de fēngjǐng duōme piàoliang!",vi:"Ở trường, Bạn xem phong cảnh ở đây đẹp biết bao!"},{tag:"Lúc đi làm",zh:"上班的时候，你看这里的风景多么漂亮！",py:"Shàngbān de shíhou, Nǐ kàn zhèlǐ de fēngjǐng duōme piàoliang!",vi:"Lúc đi làm, Bạn xem phong cảnh ở đây đẹp biết bao!"}],
    explanation:"多么 dùng để biểu thị mức độ rất cao, thường mang sắc thái cảm thán.",
    note:"Thường dùng trong câu cảm thán."
  },

  {
    id:"hsk4_21",
    pattern:"至少",
    title:"至少 — ít nhất",
    structure:"至少 + Number/Verb",
    example:"你至少应该提前一天告诉我。",
    pinyin:"Nǐ zhìshǎo yīnggāi tíqián yì tiān gàosu wǒ.",
    meaning:"Ít nhất bạn nên báo cho tôi trước một ngày.",
    examples:[{tag:"Câu gốc",zh:"你至少应该提前一天告诉我。",py:"Nǐ zhìshǎo yīnggāi tíqián yì tiān gàosu wǒ.",vi:"Ít nhất bạn nên báo cho tôi trước một ngày."},{tag:"Tình huống khác",zh:"你至少应该提前一天告诉妈妈。",py:"Nǐ zhìshǎo yīnggāi tíqián yì tiān gàosu Māma.",vi:"Ít nhất bạn nên báo cho tôi trước một ngày."},{tag:"Tình huống khác",zh:"你至少应该提前一天告诉老师。",py:"Nǐ zhìshǎo yīnggāi tíqián yì tiān gàosu Lǎoshī.",vi:"Ít nhất bạn nên báo cho tôi trước một ngày."},{tag:"Tình huống khác",zh:"你至少应该提前一天告诉同学们。",py:"Nǐ zhìshǎo yīnggāi tíqián yì tiān gàosu Tóngxuémen.",vi:"Ít nhất bạn nên báo cho tôi trước một ngày."}],
    explanation:"至少 biểu thị mức thấp nhất hoặc điều kiện tối thiểu.",
    note:"至少 = ít nhất."
  },

  {
    id:"hsk4_22",
    pattern:"从来",
    title:"从来 — từ trước đến nay",
    structure:"从来 + 不/没 + V",
    example:"他从来不迟到。",
    pinyin:"Tā cónglái bù chídào.",
    meaning:"Anh ấy từ trước đến nay chưa bao giờ đến muộn.",
    examples:[{tag:"Câu gốc",zh:"他从来不迟到。",py:"Tā cónglái bù chídào.",vi:"Anh ấy từ trước đến nay chưa bao giờ đến muộn."},{tag:"Ở nhà",zh:"妈妈告诉我：他从来不迟到。",py:"Māma gàosu wǒ: Tā cónglái bù chídào.",vi:"Mẹ bảo tôi: Anh ấy từ trước đến nay chưa bao giờ đến muộn."},{tag:"Ở trường",zh:"在学校，他从来不迟到。",py:"Zài xuéxiào, Tā cónglái bù chídào.",vi:"Ở trường, Anh ấy từ trước đến nay chưa bao giờ đến muộn."},{tag:"Lúc đi làm",zh:"上班的时候，他从来不迟到。",py:"Shàngbān de shíhou, Tā cónglái bù chídào.",vi:"Lúc đi làm, Anh ấy từ trước đến nay chưa bao giờ đến muộn."}],
    explanation:"从来 biểu thị trạng thái kéo dài từ trước đến hiện tại.",
    note:"Thường kết hợp với 不 hoặc 没."
  },

  {
    id:"hsk4_23",
    pattern:"赶紧",
    title:"赶紧 — mau, nhanh chóng",
    structure:"赶紧 + V",
    example:"下雨了，我们赶紧回家吧。",
    pinyin:"Xiàyǔ le, wǒmen gǎnjǐn huí jiā ba.",
    meaning:"Trời mưa rồi, chúng ta mau về nhà thôi.",
    examples:[{tag:"Câu gốc",zh:"下雨了，我们赶紧回家吧。",py:"Xiàyǔ le, wǒmen gǎnjǐn huí jiā ba.",vi:"Trời mưa rồi, chúng ta mau về nhà thôi."},{tag:"Tình huống khác",zh:"下雨了，妈妈们赶紧回家吧。",py:"Xiàyǔ le, Māmamen gǎnjǐn huí jiā ba.",vi:"Trời mưa rồi, chúng ta mau về nhà thôi."},{tag:"Tình huống khác",zh:"下雨了，老师们赶紧回家吧。",py:"Xiàyǔ le, Lǎoshīmen gǎnjǐn huí jiā ba.",vi:"Trời mưa rồi, chúng ta mau về nhà thôi."},{tag:"Tình huống khác",zh:"下雨了，同学们们赶紧回家吧。",py:"Xiàyǔ le, Tóngxuémenmen gǎnjǐn huí jiā ba.",vi:"Trời mưa rồi, chúng ta mau về nhà thôi."},{tag:"Tình huống khác",zh:"下雨了，他们赶紧回家吧。",py:"Xiàyǔ le, Tāmen gǎnjǐn huí jiā ba.",vi:"Trời mưa rồi, chúng ta mau về nhà thôi."}],
    explanation:"赶紧 nhấn mạnh cần hành động nhanh.",
    note:"Thường dùng trong tình huống cần khẩn trương."
  },

  {
    id:"hsk4_24",
    pattern:"赶快",
    title:"赶快 — nhanh lên",
    structure:"赶快 + V",
    example:"时间不早了，你赶快睡觉吧。",
    pinyin:"Shíjiān bù zǎo le, nǐ gǎnkuài shuìjiào ba.",
    meaning:"Không còn sớm nữa, bạn mau đi ngủ đi.",
    examples:[{tag:"Câu gốc",zh:"时间不早了，你赶快睡觉吧。",py:"Shíjiān bù zǎo le, nǐ gǎnkuài shuìjiào ba.",vi:"Không còn sớm nữa, bạn mau đi ngủ đi."},{tag:"Ở nhà",zh:"妈妈告诉我：时间不早了，你赶快睡觉吧。",py:"Māma gàosu wǒ: Shíjiān bù zǎo le, nǐ gǎnkuài shuìjiào ba.",vi:"Mẹ bảo tôi: Không còn sớm nữa, bạn mau đi ngủ đi."},{tag:"Ở trường",zh:"在学校，时间不早了，你赶快睡觉吧。",py:"Zài xuéxiào, Shíjiān bù zǎo le, nǐ gǎnkuài shuìjiào ba.",vi:"Ở trường, Không còn sớm nữa, bạn mau đi ngủ đi."},{tag:"Lúc đi làm",zh:"上班的时候，时间不早了，你赶快睡觉吧。",py:"Shàngbān de shíhou, Shíjiān bù zǎo le, nǐ gǎnkuài shuìjiào ba.",vi:"Lúc đi làm, Không còn sớm nữa, bạn mau đi ngủ đi."}],
    explanation:"赶快 biểu thị yêu cầu hoặc hành động cần thực hiện nhanh.",
    note:"赶快 và 赶紧 gần nghĩa nhau."
  },

  {
    id:"hsk4_25",
    pattern:"本来",
    title:"本来 — vốn dĩ",
    structure:"本来 + S + V",
    example:"我本来想早点儿回家。",
    pinyin:"Wǒ běnlái xiǎng zǎodiǎnr huí jiā.",
    meaning:"Vốn dĩ tôi định về nhà sớm hơn.",
    examples:[{tag:"Câu gốc",zh:"我本来想早点儿回家。",py:"Wǒ běnlái xiǎng zǎodiǎnr huí jiā.",vi:"Vốn dĩ tôi định về nhà sớm hơn."},{tag:"Tình huống khác",zh:"妈妈本来想早点儿回家。",py:"Māma běnlái xiǎng zǎodiǎnr huí jiā.",vi:"Vốn dĩ tôi định về nhà sớm hơn."},{tag:"Tình huống khác",zh:"老师本来想早点儿回家。",py:"Lǎoshī běnlái xiǎng zǎodiǎnr huí jiā.",vi:"Vốn dĩ tôi định về nhà sớm hơn."},{tag:"Tình huống khác",zh:"同学们本来想早点儿回家。",py:"Tóngxuémen běnlái xiǎng zǎodiǎnr huí jiā.",vi:"Vốn dĩ tôi định về nhà sớm hơn."},{tag:"Tình huống khác",zh:"我本来想早点儿回学校。",py:"Wǒ běnlái xiǎng zǎodiǎnr huí xuéxiào.",vi:"Vốn dĩ tôi định về trường sớm hơn."}],
    explanation:"本来 biểu thị tình trạng hoặc dự định ban đầu.",
    note:"Thường xuất hiện khi kết quả thực tế khác dự định ban đầu."
  },

  {
    id:"hsk4_26",
    pattern:"重新",
    title:"重新 — lại, một lần nữa",
    structure:"重新 + V",
    example:"这份文件有问题，需要重新写。",
    pinyin:"Zhè fèn wénjiàn yǒu wèntí, xūyào chóngxīn xiě.",
    meaning:"Tài liệu này có vấn đề, cần viết lại.",
    examples:[{tag:"Câu gốc",zh:"这份文件有问题，需要重新写。",py:"Zhè fèn wénjiàn yǒu wèntí, xūyào chóngxīn xiě.",vi:"Tài liệu này có vấn đề, cần viết lại."},{tag:"Ở nhà",zh:"妈妈告诉我：这份文件有问题，需要重新写。",py:"Māma gàosu wǒ: Zhè fèn wénjiàn yǒu wèntí, xūyào chóngxīn xiě.",vi:"Mẹ bảo tôi: Tài liệu này có vấn đề, cần viết lại."},{tag:"Ở trường",zh:"在学校，这份文件有问题，需要重新写。",py:"Zài xuéxiào, Zhè fèn wénjiàn yǒu wèntí, xūyào chóngxīn xiě.",vi:"Ở trường, Tài liệu này có vấn đề, cần viết lại."},{tag:"Lúc đi làm",zh:"上班的时候，这份文件有问题，需要重新写。",py:"Shàngbān de shíhou, Zhè fèn wénjiàn yǒu wèntí, xūyào chóngxīn xiě.",vi:"Lúc đi làm, Tài liệu này có vấn đề, cần viết lại."}],
    explanation:"重新 biểu thị thực hiện lại từ đầu hoặc một lần nữa.",
    note:"重新做、重新开始、重新考虑."
  },

  {
    id:"hsk4_27",
    pattern:"往往",
    title:"往往 — thường thường",
    structure:"S + 往往 + V",
    example:"年轻人往往喜欢尝试新事物。",
    pinyin:"Niánqīngrén wǎngwǎng xǐhuan chángshì xīn shìwù.",
    meaning:"Người trẻ thường thích thử những điều mới.",
    examples:[{tag:"Câu gốc",zh:"年轻人往往喜欢尝试新事物。",py:"Niánqīngrén wǎngwǎng xǐhuan chángshì xīn shìwù.",vi:"Người trẻ thường thích thử những điều mới."},{tag:"Ở nhà",zh:"妈妈告诉我：年轻人往往喜欢尝试新事物。",py:"Māma gàosu wǒ: Niánqīngrén wǎngwǎng xǐhuan chángshì xīn shìwù.",vi:"Mẹ bảo tôi: Người trẻ thường thích thử những điều mới."},{tag:"Ở trường",zh:"在学校，年轻人往往喜欢尝试新事物。",py:"Zài xuéxiào, Niánqīngrén wǎngwǎng xǐhuan chángshì xīn shìwù.",vi:"Ở trường, Người trẻ thường thích thử những điều mới."},{tag:"Lúc đi làm",zh:"上班的时候，年轻人往往喜欢尝试新事物。",py:"Shàngbān de shíhou, Niánqīngrén wǎngwǎng xǐhuan chángshì xīn shìwù.",vi:"Lúc đi làm, Người trẻ thường thích thử những điều mới."}],
    explanation:"往往 biểu thị một tình huống thường xảy ra theo quy luật hoặc kinh nghiệm.",
    note:"Mang sắc thái khái quát hơn 常常."
  },

  {
    id:"hsk4_28",
    pattern:"偶尔",
    title:"偶尔 — thỉnh thoảng",
    structure:"偶尔 + V",
    example:"我偶尔也会自己做饭。",
    pinyin:"Wǒ ǒu'ěr yě huì zìjǐ zuò fàn.",
    meaning:"Thỉnh thoảng tôi cũng tự nấu ăn.",
    examples:[{tag:"Câu gốc",zh:"我偶尔也会自己做饭。",py:"Wǒ ǒu'ěr yě huì zìjǐ zuò fàn.",vi:"Thỉnh thoảng tôi cũng tự nấu ăn."},{tag:"Tình huống khác",zh:"妈妈偶尔也会自己做饭。",py:"Māma ǒu'ěr yě huì zìjǐ zuò fàn.",vi:"Thỉnh thoảng tôi cũng tự nấu ăn."},{tag:"Tình huống khác",zh:"老师偶尔也会自己做饭。",py:"Lǎoshī ǒu'ěr yě huì zìjǐ zuò fàn.",vi:"Thỉnh thoảng tôi cũng tự nấu ăn."},{tag:"Tình huống khác",zh:"同学们偶尔也会自己做饭。",py:"Tóngxuémen ǒu'ěr yě huì zìjǐ zuò fàn.",vi:"Thỉnh thoảng tôi cũng tự nấu ăn."},{tag:"Tình huống khác",zh:"我偶尔也会自己做面。",py:"Wǒ ǒu'ěr yě huì zìjǐ zuò miàn.",vi:"Thỉnh thoảng tôi cũng tự nấu ăn."}],
    explanation:"偶尔 biểu thị tần suất thấp.",
    note:"偶尔 trái nghĩa tương đối với 经常."
  },

  {
    id:"hsk4_29",
    pattern:"再次",
    title:"再次 — lần nữa",
    structure:"再次 + V",
    example:"感谢大家再次来到这里。",
    pinyin:"Gǎnxiè dàjiā zàicì láidào zhèlǐ.",
    meaning:"Cảm ơn mọi người một lần nữa đã đến đây.",
    examples:[{tag:"Câu gốc",zh:"感谢大家再次来到这里。",py:"Gǎnxiè dàjiā zàicì láidào zhèlǐ.",vi:"Cảm ơn mọi người một lần nữa đã đến đây."},{tag:"Ở nhà",zh:"妈妈告诉我：感谢大家再次来到这里。",py:"Māma gàosu wǒ: Gǎnxiè dàjiā zàicì láidào zhèlǐ.",vi:"Mẹ bảo tôi: Cảm ơn mọi người một lần nữa đã đến đây."},{tag:"Ở trường",zh:"在学校，感谢大家再次来到这里。",py:"Zài xuéxiào, Gǎnxiè dàjiā zàicì láidào zhèlǐ.",vi:"Ở trường, Cảm ơn mọi người một lần nữa đã đến đây."},{tag:"Lúc đi làm",zh:"上班的时候，感谢大家再次来到这里。",py:"Shàngbān de shíhou, Gǎnxiè dàjiā zàicì láidào zhèlǐ.",vi:"Lúc đi làm, Cảm ơn mọi người một lần nữa đã đến đây."}],
    explanation:"再次 biểu thị hành động xảy ra thêm một lần.",
    note:"Thường gặp trong văn viết và phát biểu."
  },

  {
    id:"hsk4_30",
    pattern:"故意",
    title:"故意 — cố ý",
    structure:"故意 + V",
    example:"他不是故意迟到的。",
    pinyin:"Tā bú shì gùyì chídào de.",
    meaning:"Anh ấy không cố ý đến muộn.",
    examples:[{tag:"Câu gốc",zh:"他不是故意迟到的。",py:"Tā bú shì gùyì chídào de.",vi:"Anh ấy không cố ý đến muộn."},{tag:"Ở nhà",zh:"妈妈告诉我：他不是故意迟到的。",py:"Māma gàosu wǒ: Tā bú shì gùyì chídào de.",vi:"Mẹ bảo tôi: Anh ấy không cố ý đến muộn."},{tag:"Ở trường",zh:"在学校，他不是故意迟到的。",py:"Zài xuéxiào, Tā bú shì gùyì chídào de.",vi:"Ở trường, Anh ấy không cố ý đến muộn."},{tag:"Lúc đi làm",zh:"上班的时候，他不是故意迟到的。",py:"Shàngbān de shíhou, Tā bú shì gùyì chídào de.",vi:"Lúc đi làm, Anh ấy không cố ý đến muộn."}],
    explanation:"故意 biểu thị hành động được thực hiện có chủ ý.",
    note:"故意 thường đối lập với 不小心."
  },

  {
    id:"hsk4_31",
    pattern:"互相",
    title:"互相 — lẫn nhau",
    structure:"A + 互相 + V",
    example:"我们应该互相帮助。",
    pinyin:"Wǒmen yīnggāi hùxiāng bāngzhù.",
    meaning:"Chúng ta nên giúp đỡ lẫn nhau.",
    examples:[{tag:"Câu gốc",zh:"我们应该互相帮助。",py:"Wǒmen yīnggāi hùxiāng bāngzhù.",vi:"Chúng ta nên giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"妈妈们应该互相帮助。",py:"Māmamen yīnggāi hùxiāng bāngzhù.",vi:"Chúng ta nên giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"老师们应该互相帮助。",py:"Lǎoshīmen yīnggāi hùxiāng bāngzhù.",vi:"Chúng ta nên giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"同学们们应该互相帮助。",py:"Tóngxuémenmen yīnggāi hùxiāng bāngzhù.",vi:"Chúng ta nên giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"他们应该互相帮助。",py:"Tāmen yīnggāi hùxiāng bāngzhù.",vi:"Chúng ta nên giúp đỡ lẫn nhau."}],
    explanation:"互相 biểu thị hành động tác động qua lại giữa hai hoặc nhiều đối tượng.",
    note:"互相帮助、互相学习、互相理解."
  },

  {
    id:"hsk4_32",
    pattern:"却",
    title:"却 — lại, thế mà",
    structure:"S1 + 却 + V",
    example:"他很努力，却没有成功。",
    pinyin:"Tā hěn nǔlì, què méiyǒu chénggōng.",
    meaning:"Anh ấy rất nỗ lực nhưng lại không thành công.",
    examples:[{tag:"Câu gốc",zh:"他很努力，却没有成功。",py:"Tā hěn nǔlì, què méiyǒu chénggōng.",vi:"Anh ấy rất nỗ lực nhưng lại không thành công."},{tag:"Ở nhà",zh:"妈妈告诉我：他很努力，却没有成功。",py:"Māma gàosu wǒ: Tā hěn nǔlì, què méiyǒu chénggōng.",vi:"Mẹ bảo tôi: Anh ấy rất nỗ lực nhưng lại không thành công."},{tag:"Ở trường",zh:"在学校，他很努力，却没有成功。",py:"Zài xuéxiào, Tā hěn nǔlì, què méiyǒu chénggōng.",vi:"Ở trường, Anh ấy rất nỗ lực nhưng lại không thành công."},{tag:"Lúc đi làm",zh:"上班的时候，他很努力，却没有成功。",py:"Shàngbān de shíhou, Tā hěn nǔlì, què méiyǒu chénggōng.",vi:"Lúc đi làm, Anh ấy rất nỗ lực nhưng lại không thành công."}],
    explanation:"却 biểu thị sự đối lập với điều được dự đoán hoặc mong đợi.",
    note:"Thường đứng trước động từ hoặc tính từ."
  },

  {
    id:"hsk4_33",
    pattern:"也许",
    title:"也许 — có lẽ",
    structure:"也许 + S + V",
    example:"他也许已经回家了。",
    pinyin:"Tā yěxǔ yǐjīng huí jiā le.",
    meaning:"Có lẽ anh ấy đã về nhà rồi.",
    examples:[{tag:"Câu gốc",zh:"他也许已经回家了。",py:"Tā yěxǔ yǐjīng huí jiā le.",vi:"Có lẽ anh ấy đã về nhà rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：他也许已经回家了。",py:"Māma gàosu wǒ: Tā yěxǔ yǐjīng huí jiā le.",vi:"Mẹ bảo tôi: Có lẽ anh ấy đã về nhà rồi."},{tag:"Ở trường",zh:"在学校，他也许已经回家了。",py:"Zài xuéxiào, Tā yěxǔ yǐjīng huí jiā le.",vi:"Ở trường, Có lẽ anh ấy đã về nhà rồi."},{tag:"Lúc đi làm",zh:"上班的时候，他也许已经回家了。",py:"Shàngbān de shíhou, Tā yěxǔ yǐjīng huí jiā le.",vi:"Lúc đi làm, Có lẽ anh ấy đã về nhà rồi."}],
    explanation:"也许 biểu thị phỏng đoán chưa chắc chắn.",
    note:"也许 thường có thể kết hợp với 可能."
  },

  {
    id:"hsk4_34",
    pattern:"恐怕",
    title:"恐怕 — e rằng, có lẽ",
    structure:"恐怕 + S + V",
    example:"今天恐怕不能下班太早。",
    pinyin:"Jīntiān kǒngpà bù néng xiàbān tài zǎo.",
    meaning:"Hôm nay e rằng không thể tan làm quá sớm.",
    examples:[{tag:"Câu gốc",zh:"今天恐怕不能下班太早。",py:"Jīntiān kǒngpà bù néng xiàbān tài zǎo.",vi:"Hôm nay e rằng không thể tan làm quá sớm."},{tag:"Ở nhà",zh:"妈妈告诉我：今天恐怕不能下班太早。",py:"Māma gàosu wǒ: Jīntiān kǒngpà bù néng xiàbān tài zǎo.",vi:"Mẹ bảo tôi: Hôm nay e rằng không thể tan làm quá sớm."},{tag:"Ở trường",zh:"在学校，今天恐怕不能下班太早。",py:"Zài xuéxiào, Jīntiān kǒngpà bù néng xiàbān tài zǎo.",vi:"Ở trường, Hôm nay e rằng không thể tan làm quá sớm."},{tag:"Lúc đi làm",zh:"上班的时候，今天恐怕不能下班太早。",py:"Shàngbān de shíhou, Jīntiān kǒngpà bù néng xiàbān tài zǎo.",vi:"Lúc đi làm, Hôm nay e rằng không thể tan làm quá sớm."}],
    explanation:"恐怕 biểu thị phỏng đoán mang sắc thái lo ngại.",
    note:"Thường dùng khi dự đoán điều không thuận lợi."
  },

  {
    id:"hsk4_35",
    pattern:"才",
    title:"才 — mới, mãi mới",
    structure:"S + Time + 才 + V",
    example:"他昨天晚上十二点才回家。",
    pinyin:"Tā zuótiān wǎnshang shí'èr diǎn cái huí jiā.",
    meaning:"Tối qua mãi đến mười hai giờ anh ấy mới về nhà.",
    examples:[{tag:"Câu gốc",zh:"他昨天晚上十二点才回家。",py:"Tā zuótiān wǎnshang shí'èr diǎn cái huí jiā.",vi:"Tối qua mãi đến mười hai giờ anh ấy mới về nhà."},{tag:"Tình huống khác",zh:"她昨天晚上十二点才回家。",py:"Tā zuótiān wǎnshang shí'èr diǎn cái huí jiā.",vi:"Tối qua mãi đến mười hai giờ anh ấy mới về nhà."},{tag:"Tình huống khác",zh:"他今天晚上十二点才回家。",py:"Tā Jīntiān wǎnshang shí'èr diǎn cái huí jiā.",vi:"Tối qua mãi đến mười hai giờ anh ấy mới về nhà."},{tag:"Tình huống khác",zh:"他昨天晚上十二点才回学校。",py:"Tā zuótiān wǎnshang shí'èr diǎn cái huí xuéxiào.",vi:"Tối qua mãi đến mười hai giờ anh ấy mới về trường."}],
    explanation:"才 nhấn mạnh hành động xảy ra muộn hơn dự kiến.",
    note:"才 thường mang sắc thái 'mãi mới'."
  },

  {
    id:"hsk4_36",
    pattern:"就",
    title:"就 — đã, liền, ngay",
    structure:"Time + 就 + V",
    example:"他六点就起床了。",
    pinyin:"Tā liù diǎn jiù qǐchuáng le.",
    meaning:"Anh ấy đã dậy từ sáu giờ.",
    examples:[{tag:"Câu gốc",zh:"他六点就起床了。",py:"Tā liù diǎn jiù qǐchuáng le.",vi:"Anh ấy đã dậy từ sáu giờ."},{tag:"Ở nhà",zh:"妈妈告诉我：他六点就起床了。",py:"Māma gàosu wǒ: Tā liù diǎn jiù qǐchuáng le.",vi:"Mẹ bảo tôi: Anh ấy đã dậy từ sáu giờ."},{tag:"Ở trường",zh:"在学校，他六点就起床了。",py:"Zài xuéxiào, Tā liù diǎn jiù qǐchuáng le.",vi:"Ở trường, Anh ấy đã dậy từ sáu giờ."},{tag:"Lúc đi làm",zh:"上班的时候，他六点就起床了。",py:"Shàngbān de shíhou, Tā liù diǎn jiù qǐchuáng le.",vi:"Lúc đi làm, Anh ấy đã dậy từ sáu giờ."}],
    explanation:"就 nhấn mạnh hành động xảy ra sớm hoặc nhanh hơn dự kiến.",
    note:"才 và 就 thường tạo thành cặp đối chiếu."
  },

  {
    id:"hsk4_37",
    pattern:"竟然",
    title:"竟然 — vậy mà, không ngờ",
    structure:"竟然 + V/Adj",
    example:"他竟然一个小时就做完了。",
    pinyin:"Tā jìngrán yí ge xiǎoshí jiù zuò wán le.",
    meaning:"Không ngờ anh ấy lại làm xong chỉ trong một giờ.",
    examples:[{tag:"Câu gốc",zh:"他竟然一个小时就做完了。",py:"Tā jìngrán yí ge xiǎoshí jiù zuò wán le.",vi:"Không ngờ anh ấy lại làm xong chỉ trong một giờ."},{tag:"Ở nhà",zh:"妈妈告诉我：他竟然一个小时就做完了。",py:"Māma gàosu wǒ: Tā jìngrán yí ge xiǎoshí jiù zuò wán le.",vi:"Mẹ bảo tôi: Không ngờ anh ấy lại làm xong chỉ trong một giờ."},{tag:"Ở trường",zh:"在学校，他竟然一个小时就做完了。",py:"Zài xuéxiào, Tā jìngrán yí ge xiǎoshí jiù zuò wán le.",vi:"Ở trường, Không ngờ anh ấy lại làm xong chỉ trong một giờ."},{tag:"Lúc đi làm",zh:"上班的时候，他竟然一个小时就做完了。",py:"Shàngbān de shíhou, Tā jìngrán yí ge xiǎoshí jiù zuò wán le.",vi:"Lúc đi làm, Không ngờ anh ấy lại làm xong chỉ trong một giờ."}],
    explanation:"竟然 biểu thị kết quả vượt ngoài dự đoán.",
    note:"Mang sắc thái ngạc nhiên."
  },

  {
    id:"hsk4_38",
    pattern:"究竟",
    title:"究竟 — rốt cuộc",
    structure:"究竟 + 疑问句",
    example:"你究竟想做什么？",
    pinyin:"Nǐ jiūjìng xiǎng zuò shénme?",
    meaning:"Rốt cuộc bạn muốn làm gì?",
    examples:[{tag:"Câu gốc",zh:"你究竟想做什么？",py:"Nǐ jiūjìng xiǎng zuò shénme?",vi:"Rốt cuộc bạn muốn làm gì?"},{tag:"Ở nhà",zh:"妈妈告诉我：你究竟想做什么？",py:"Māma gàosu wǒ: Nǐ jiūjìng xiǎng zuò shénme?",vi:"Mẹ bảo tôi: Rốt cuộc bạn muốn làm gì?"},{tag:"Ở trường",zh:"在学校，你究竟想做什么？",py:"Zài xuéxiào, Nǐ jiūjìng xiǎng zuò shénme?",vi:"Ở trường, Rốt cuộc bạn muốn làm gì?"},{tag:"Lúc đi làm",zh:"上班的时候，你究竟想做什么？",py:"Shàngbān de shíhou, Nǐ jiūjìng xiǎng zuò shénme?",vi:"Lúc đi làm, Rốt cuộc bạn muốn làm gì?"}],
    explanation:"究竟 dùng để nhấn mạnh câu hỏi, yêu cầu biết rõ sự thật hoặc kết quả.",
    note:"Thường dùng trong câu hỏi."
  },

  {
    id:"hsk4_39",
    pattern:"正好",
    title:"正好 — vừa đúng, vừa hay",
    structure:"正好 + V/Adj",
    example:"你来得正好，我正想找你。",
    pinyin:"Nǐ lái de zhènghǎo, wǒ zhèng xiǎng zhǎo nǐ.",
    meaning:"Bạn đến thật đúng lúc, tôi đang định tìm bạn.",
    examples:[{tag:"Câu gốc",zh:"你来得正好，我正想找你。",py:"Nǐ lái de zhènghǎo, wǒ zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến thật đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得正好，妈妈正想找你。",py:"Nǐ lái de zhènghǎo, Māma zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến thật đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得正好，老师正想找你。",py:"Nǐ lái de zhènghǎo, Lǎoshī zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến thật đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得正好，同学们正想找你。",py:"Nǐ lái de zhènghǎo, Tóngxuémen zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến thật đúng lúc, tôi đang định tìm bạn."}],
    explanation:"正好 biểu thị sự phù hợp về thời gian, điều kiện hoặc số lượng.",
    note:"Có thể mang nghĩa 'vừa đúng lúc'."
  },

  {
    id:"hsk4_40",
    pattern:"难道……吗？",
    title:"难道……吗？— chẳng lẽ... sao?",
    structure:"难道 + S + V + 吗？",
    example:"难道你不知道这件事吗？",
    pinyin:"Nándào nǐ bù zhīdào zhè jiàn shì ma?",
    meaning:"Chẳng lẽ bạn không biết chuyện này sao?",
    examples:[{tag:"Câu gốc",zh:"难道你不知道这件事吗？",py:"Nándào nǐ bù zhīdào zhè jiàn shì ma?",vi:"Chẳng lẽ bạn không biết chuyện này sao?"},{tag:"Ở nhà",zh:"妈妈告诉我：难道你不知道这件事吗？",py:"Māma gàosu wǒ: Nándào nǐ bù zhīdào zhè jiàn shì ma?",vi:"Mẹ bảo tôi: Chẳng lẽ bạn không biết chuyện này sao?"},{tag:"Ở trường",zh:"在学校，难道你不知道这件事吗？",py:"Zài xuéxiào, Nándào nǐ bù zhīdào zhè jiàn shì ma?",vi:"Ở trường, Chẳng lẽ bạn không biết chuyện này sao?"},{tag:"Lúc đi làm",zh:"上班的时候，难道你不知道这件事吗？",py:"Shàngbān de shíhou, Nándào nǐ bù zhīdào zhè jiàn shì ma?",vi:"Lúc đi làm, Chẳng lẽ bạn không biết chuyện này sao?"}],
    explanation:"难道 tạo câu hỏi tu từ, biểu thị sự ngạc nhiên hoặc không tin.",
    note:"Không đơn thuần là câu hỏi thông tin."
  },

  {
    id:"hsk4_41",
    pattern:"千万",
    title:"千万 — nhất định phải / tuyệt đối",
    structure:"千万 + 不要/别 + V",
    example:"路上很危险，你千万别一个人去。",
    pinyin:"Lùshang hěn wēixiǎn, nǐ qiānwàn bié yí ge rén qù.",
    meaning:"Đường rất nguy hiểm, bạn tuyệt đối đừng đi một mình.",
    examples:[{tag:"Câu gốc",zh:"路上很危险，你千万别一个人去。",py:"Lùshang hěn wēixiǎn, nǐ qiānwàn bié yí ge rén qù.",vi:"Đường rất nguy hiểm, bạn tuyệt đối đừng đi một mình."},{tag:"Ở nhà",zh:"妈妈告诉我：路上很危险，你千万别一个人去。",py:"Māma gàosu wǒ: Lùshang hěn wēixiǎn, nǐ qiānwàn bié yí ge rén qù.",vi:"Mẹ bảo tôi: Đường rất nguy hiểm, bạn tuyệt đối đừng đi một mình."},{tag:"Ở trường",zh:"在学校，路上很危险，你千万别一个人去。",py:"Zài xuéxiào, Lùshang hěn wēixiǎn, nǐ qiānwàn bié yí ge rén qù.",vi:"Ở trường, Đường rất nguy hiểm, bạn tuyệt đối đừng đi một mình."},{tag:"Lúc đi làm",zh:"上班的时候，路上很危险，你千万别一个人去。",py:"Shàngbān de shíhou, Lùshang hěn wēixiǎn, nǐ qiānwàn bié yí ge rén qù.",vi:"Lúc đi làm, Đường rất nguy hiểm, bạn tuyệt đối đừng đi một mình."}],
    explanation:"千万 dùng để nhấn mạnh lời khuyên hoặc lời cảnh báo.",
    note:"千万别/千万不要 rất thường gặp."
  },

  {
    id:"hsk4_42",
    pattern:"只好",
    title:"只好 — đành phải",
    structure:"只好 + V",
    example:"下大雨了，我们只好取消计划。",
    pinyin:"Xià dàyǔ le, wǒmen zhǐhǎo qǔxiāo jìhuà.",
    meaning:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch.",
    examples:[{tag:"Câu gốc",zh:"下大雨了，我们只好取消计划。",py:"Xià dàyǔ le, wǒmen zhǐhǎo qǔxiāo jìhuà.",vi:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch."},{tag:"Tình huống khác",zh:"下大雨了，妈妈们只好取消计划。",py:"Xià dàyǔ le, Māmamen zhǐhǎo qǔxiāo jìhuà.",vi:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch."},{tag:"Tình huống khác",zh:"下大雨了，老师们只好取消计划。",py:"Xià dàyǔ le, Lǎoshīmen zhǐhǎo qǔxiāo jìhuà.",vi:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch."},{tag:"Tình huống khác",zh:"下大雨了，同学们们只好取消计划。",py:"Xià dàyǔ le, Tóngxuémenmen zhǐhǎo qǔxiāo jìhuà.",vi:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch."},{tag:"Tình huống khác",zh:"下大雨了，他们只好取消计划。",py:"Xià dàyǔ le, Tāmen zhǐhǎo qǔxiāo jìhuà.",vi:"Mưa lớn rồi, chúng tôi đành phải hủy kế hoạch."}],
    explanation:"只好 biểu thị không còn lựa chọn tốt hơn.",
    note:"Thường xuất hiện sau một nguyên nhân bất đắc dĩ."
  },

  {
    id:"hsk4_43",
    pattern:"差一点儿",
    title:"差一点儿 — suýt nữa",
    structure:"差一点儿 + V",
    example:"我差一点儿忘了这件事。",
    pinyin:"Wǒ chà yìdiǎnr wàng le zhè jiàn shì.",
    meaning:"Tôi suýt nữa thì quên chuyện này.",
    examples:[{tag:"Câu gốc",zh:"我差一点儿忘了这件事。",py:"Wǒ chà yìdiǎnr wàng le zhè jiàn shì.",vi:"Tôi suýt nữa thì quên chuyện này."},{tag:"Tình huống khác",zh:"妈妈差一点儿忘了这件事。",py:"Māma chà yìdiǎnr wàng le zhè jiàn shì.",vi:"Mẹ suýt nữa thì quên chuyện này."},{tag:"Tình huống khác",zh:"老师差一点儿忘了这件事。",py:"Lǎoshī chà yìdiǎnr wàng le zhè jiàn shì.",vi:"Thầy suýt nữa thì quên chuyện này."},{tag:"Tình huống khác",zh:"同学们差一点儿忘了这件事。",py:"Tóngxuémen chà yìdiǎnr wàng le zhè jiàn shì.",vi:"Các bạn suýt nữa thì quên chuyện này."}],
    explanation:"差一点儿 biểu thị một việc gần như xảy ra nhưng cuối cùng không xảy ra.",
    note:"差一点儿 + V."
  },

  {
    id:"hsk4_44",
    pattern:"由于",
    title:"由于 — do, bởi vì",
    structure:"由于 + 原因，结果",
    example:"由于天气不好，比赛被取消了。",
    pinyin:"Yóuyú tiānqì bù hǎo, bǐsài bèi qǔxiāo le.",
    meaning:"Do thời tiết xấu nên trận đấu đã bị hủy.",
    examples:[{tag:"Câu gốc",zh:"由于天气不好，比赛被取消了。",py:"Yóuyú tiānqì bù hǎo, bǐsài bèi qǔxiāo le.",vi:"Do thời tiết xấu nên trận đấu đã bị hủy."},{tag:"Ở nhà",zh:"妈妈告诉我：由于天气不好，比赛被取消了。",py:"Māma gàosu wǒ: Yóuyú tiānqì bù hǎo, bǐsài bèi qǔxiāo le.",vi:"Mẹ bảo tôi: Do thời tiết xấu nên trận đấu đã bị hủy."},{tag:"Ở trường",zh:"在学校，由于天气不好，比赛被取消了。",py:"Zài xuéxiào, Yóuyú tiānqì bù hǎo, bǐsài bèi qǔxiāo le.",vi:"Ở trường, Do thời tiết xấu nên trận đấu đã bị hủy."},{tag:"Lúc đi làm",zh:"上班的时候，由于天气不好，比赛被取消了。",py:"Shàngbān de shíhou, Yóuyú tiānqì bù hǎo, bǐsài bèi qǔxiāo le.",vi:"Lúc đi làm, Do thời tiết xấu nên trận đấu đã bị hủy."}],
    explanation:"由于 đưa ra nguyên nhân, thường mang sắc thái trang trọng.",
    note:"由于……因此…… có thể dùng trong văn viết."
  },

  {
    id:"hsk4_45",
    pattern:"对于",
    title:"对于 — đối với",
    structure:"对于 + N，S + V",
    example:"对于这个问题，我有不同的看法。",
    pinyin:"Duìyú zhège wèntí, wǒ yǒu bùtóng de kànfǎ.",
    meaning:"Đối với vấn đề này, tôi có cách nhìn khác.",
    examples:[{tag:"Câu gốc",zh:"对于这个问题，我有不同的看法。",py:"Duìyú zhège wèntí, wǒ yǒu bùtóng de kànfǎ.",vi:"Đối với vấn đề này, tôi có cách nhìn khác."},{tag:"Tình huống khác",zh:"对于这个问题，妈妈有不同的看法。",py:"Duìyú zhège wèntí, Māma yǒu bùtóng de kànfǎ.",vi:"Đối với vấn đề này, tôi có cách nhìn khác."},{tag:"Tình huống khác",zh:"对于这个问题，老师有不同的看法。",py:"Duìyú zhège wèntí, Lǎoshī yǒu bùtóng de kànfǎ.",vi:"Đối với vấn đề này, tôi có cách nhìn khác."},{tag:"Tình huống khác",zh:"对于这个问题，同学们有不同的看法。",py:"Duìyú zhège wèntí, Tóngxuémen yǒu bùtóng de kànfǎ.",vi:"Đối với vấn đề này, tôi có cách nhìn khác."}],
    explanation:"对于 giới thiệu đối tượng hoặc vấn đề mà hành động, thái độ hướng tới.",
    note:"对于 và 对 có thể gần nghĩa trong nhiều trường hợp."
  },

  {
    id:"hsk4_46",
    pattern:"关于",
    title:"关于 — về, liên quan đến",
    structure:"关于 + N，S + V",
    example:"关于这次活动，我们以后再讨论。",
    pinyin:"Guānyú zhè cì huódòng, wǒmen yǐhòu zài tǎolùn.",
    meaning:"Về hoạt động lần này, chúng ta sẽ thảo luận sau.",
    examples:[{tag:"Câu gốc",zh:"关于这次活动，我们以后再讨论。",py:"Guānyú zhè cì huódòng, wǒmen yǐhòu zài tǎolùn.",vi:"Về hoạt động lần này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这次活动，妈妈们以后再讨论。",py:"Guānyú zhè cì huódòng, Māmamen yǐhòu zài tǎolùn.",vi:"Về hoạt động lần này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这次活动，老师们以后再讨论。",py:"Guānyú zhè cì huódòng, Lǎoshīmen yǐhòu zài tǎolùn.",vi:"Về hoạt động lần này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这次活动，同学们们以后再讨论。",py:"Guānyú zhè cì huódòng, Tóngxuémenmen yǐhòu zài tǎolùn.",vi:"Về hoạt động lần này, chúng ta sẽ thảo luận sau."},{tag:"Tình huống khác",zh:"关于这次活动，他们以后再讨论。",py:"Guānyú zhè cì huódòng, Tāmen yǐhòu zài tǎolùn.",vi:"Về hoạt động lần này, chúng ta sẽ thảo luận sau."}],
    explanation:"关于 giới thiệu chủ đề hoặc vấn đề được nói tới.",
    note:"关于 + chủ đề."
  },

  {
    id:"hsk4_47",
    pattern:"作为",
    title:"作为 — với tư cách là",
    structure:"作为 + N，S + V",
    example:"作为一名老师，他非常认真。",
    pinyin:"Zuòwéi yì míng lǎoshī, tā fēicháng rènzhēn.",
    meaning:"Với tư cách là một giáo viên, anh ấy rất nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"作为一名老师，他非常认真。",py:"Zuòwéi yì míng lǎoshī, tā fēicháng rènzhēn.",vi:"Với tư cách là một giáo viên, anh ấy rất nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：作为一名老师，他非常认真。",py:"Māma gàosu wǒ: Zuòwéi yì míng lǎoshī, tā fēicháng rènzhēn.",vi:"Mẹ bảo tôi: Với tư cách là một giáo viên, anh ấy rất nghiêm túc."},{tag:"Ở trường",zh:"在学校，作为一名老师，他非常认真。",py:"Zài xuéxiào, Zuòwéi yì míng lǎoshī, tā fēicháng rènzhēn.",vi:"Ở trường, Với tư cách là một giáo viên, anh ấy rất nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，作为一名老师，他非常认真。",py:"Shàngbān de shíhou, Zuòwéi yì míng lǎoshī, tā fēicháng rènzhēn.",vi:"Lúc đi làm, Với tư cách là một giáo viên, anh ấy rất nghiêm túc."}],
    explanation:"作为 giới thiệu thân phận, vai trò hoặc tư cách.",
    note:"作为 + vai trò."
  },

  {
    id:"hsk4_48",
    pattern:"按照",
    title:"按照 — theo, dựa theo",
    structure:"按照 + N/要求 + V",
    example:"请按照规定填写这张表。",
    pinyin:"Qǐng ànzhào guīdìng tiánxiě zhè zhāng biǎo.",
    meaning:"Hãy điền vào tờ đơn này theo quy định.",
    examples:[{tag:"Câu gốc",zh:"请按照规定填写这张表。",py:"Qǐng ànzhào guīdìng tiánxiě zhè zhāng biǎo.",vi:"Hãy điền vào tờ đơn này theo quy định."},{tag:"Ở nhà",zh:"妈妈告诉我：请按照规定填写这张表。",py:"Māma gàosu wǒ: Qǐng ànzhào guīdìng tiánxiě zhè zhāng biǎo.",vi:"Mẹ bảo tôi: Hãy điền vào tờ đơn này theo quy định."},{tag:"Ở trường",zh:"在学校，请按照规定填写这张表。",py:"Zài xuéxiào, Qǐng ànzhào guīdìng tiánxiě zhè zhāng biǎo.",vi:"Ở trường, Hãy điền vào tờ đơn này theo quy định."},{tag:"Lúc đi làm",zh:"上班的时候，请按照规定填写这张表。",py:"Shàngbān de shíhou, Qǐng ànzhào guīdìng tiánxiě zhè zhāng biǎo.",vi:"Lúc đi làm, Hãy điền vào tờ đơn này theo quy định."}],
    explanation:"按照 biểu thị hành động được thực hiện theo một quy định, phương pháp hoặc tiêu chuẩn.",
    note:"按照规定、按照要求."
  },

  {
    id:"hsk4_49",
    pattern:"而",
    title:"而 — mà, và",
    structure:"A + 而 + B",
    example:"他喜欢安静，而我喜欢热闹。",
    pinyin:"Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.",
    meaning:"Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt.",
    examples:[{tag:"Câu gốc",zh:"他喜欢安静，而我喜欢热闹。",py:"Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.",vi:"Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt."},{tag:"Tình huống khác",zh:"他喜欢安静，而妈妈喜欢热闹。",py:"Tā xǐhuan ānjìng, ér Māma xǐhuan rènao.",vi:"Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt."},{tag:"Tình huống khác",zh:"他喜欢安静，而老师喜欢热闹。",py:"Tā xǐhuan ānjìng, ér Lǎoshī xǐhuan rènao.",vi:"Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt."},{tag:"Tình huống khác",zh:"他喜欢安静，而同学们喜欢热闹。",py:"Tā xǐhuan ānjìng, ér Tóngxuémen xǐhuan rènao.",vi:"Anh ấy thích yên tĩnh, còn tôi thích náo nhiệt."},{tag:"Tình huống khác",zh:"她喜欢安静，而我喜欢热闹。",py:"Tā xǐhuan ānjìng, ér wǒ xǐhuan rènao.",vi:"Cô ấy thích yên tĩnh, còn tôi thích náo nhiệt."}],
    explanation:"而 có thể nối hai thành phần hoặc hai vế có quan hệ đối lập hoặc bổ sung.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk4_50",
    pattern:"以及",
    title:"以及 — cũng như, và",
    structure:"A、B + 以及 + C",
    example:"会议讨论了工作、学习以及生活问题。",
    pinyin:"Huìyì tǎolùn le gōngzuò, xuéxí yǐjí shēnghuó wèntí.",
    meaning:"Cuộc họp đã thảo luận các vấn đề về công việc, học tập cũng như cuộc sống.",
    examples:[{tag:"Câu gốc",zh:"会议讨论了工作、学习以及生活问题。",py:"Huìyì tǎolùn le gōngzuò, xuéxí yǐjí shēnghuó wèntí.",vi:"Cuộc họp đã thảo luận các vấn đề về công việc, học tập cũng như cuộc sống."},{tag:"Ở nhà",zh:"妈妈告诉我：会议讨论了工作、学习以及生活问题。",py:"Māma gàosu wǒ: Huìyì tǎolùn le gōngzuò, xuéxí yǐjí shēnghuó wèntí.",vi:"Mẹ bảo tôi: Cuộc họp đã thảo luận các vấn đề về công việc, học tập cũng như cuộc sống."},{tag:"Ở trường",zh:"在学校，会议讨论了工作、学习以及生活问题。",py:"Zài xuéxiào, Huìyì tǎolùn le gōngzuò, xuéxí yǐjí shēnghuó wèntí.",vi:"Ở trường, Cuộc họp đã thảo luận các vấn đề về công việc, học tập cũng như cuộc sống."},{tag:"Lúc đi làm",zh:"上班的时候，会议讨论了工作、学习以及生活问题。",py:"Shàngbān de shíhou, Huìyì tǎolùn le gōngzuò, xuéxí yǐjí shēnghuó wèntí.",vi:"Lúc đi làm, Cuộc họp đã thảo luận các vấn đề về công việc, học tập cũng như cuộc sống."}],
    explanation:"以及 dùng để nối các thành phần cùng loại.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk4_51",
    pattern:"此外",
    title:"此外 — ngoài ra",
    structure:"此外，S + V",
    example:"这家店价格便宜，此外服务也很好。",
    pinyin:"Zhè jiā diàn jiàgé piányi, cǐwài fúwù yě hěn hǎo.",
    meaning:"Cửa hàng này giá rẻ, ngoài ra dịch vụ cũng rất tốt.",
    examples:[{tag:"Câu gốc",zh:"这家店价格便宜，此外服务也很好。",py:"Zhè jiā diàn jiàgé piányi, cǐwài fúwù yě hěn hǎo.",vi:"Cửa hàng này giá rẻ, ngoài ra dịch vụ cũng rất tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：这家店价格便宜，此外服务也很好。",py:"Māma gàosu wǒ: Zhè jiā diàn jiàgé piányi, cǐwài fúwù yě hěn hǎo.",vi:"Mẹ bảo tôi: Cửa hàng này giá rẻ, ngoài ra dịch vụ cũng rất tốt."},{tag:"Ở trường",zh:"在学校，这家店价格便宜，此外服务也很好。",py:"Zài xuéxiào, Zhè jiā diàn jiàgé piányi, cǐwài fúwù yě hěn hǎo.",vi:"Ở trường, Cửa hàng này giá rẻ, ngoài ra dịch vụ cũng rất tốt."},{tag:"Lúc đi làm",zh:"上班的时候，这家店价格便宜，此外服务也很好。",py:"Shàngbān de shíhou, Zhè jiā diàn jiàgé piányi, cǐwài fúwù yě hěn hǎo.",vi:"Lúc đi làm, Cửa hàng này giá rẻ, ngoài ra dịch vụ cũng rất tốt."}],
    explanation:"此外 bổ sung thêm một thông tin.",
    note:"Thường đứng đầu câu."
  },

  {
    id:"hsk4_52",
    pattern:"既然……就……",
    title:"既然……就…… — đã... thì...",
    structure:"既然 + A，就 + B",
    example:"既然你已经决定了，就不要后悔。",
    pinyin:"Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.",
    meaning:"Đã quyết định rồi thì đừng hối hận.",
    examples:[{tag:"Câu gốc",zh:"既然你已经决定了，就不要后悔。",py:"Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.",vi:"Đã quyết định rồi thì đừng hối hận."},{tag:"Ở nhà",zh:"妈妈告诉我：既然你已经决定了，就不要后悔。",py:"Māma gàosu wǒ: Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.",vi:"Mẹ bảo tôi: Đã quyết định rồi thì đừng hối hận."},{tag:"Ở trường",zh:"在学校，既然你已经决定了，就不要后悔。",py:"Zài xuéxiào, Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.",vi:"Ở trường, Đã quyết định rồi thì đừng hối hận."},{tag:"Lúc đi làm",zh:"上班的时候，既然你已经决定了，就不要后悔。",py:"Shàngbān de shíhou, Jìrán nǐ yǐjīng juédìng le, jiù bú yào hòuhuǐ.",vi:"Lúc đi làm, Đã quyết định rồi thì đừng hối hận."}],
    explanation:"既然 đưa ra một điều kiện đã được xác định, 就 dẫn tới kết luận hoặc hành động phù hợp.",
    note:"既然……就……."
  },

  {
    id:"hsk4_53",
    pattern:"甚至",
    title:"甚至 — thậm chí",
    structure:"甚至 + V/Adj",
    example:"他很忙，甚至没有时间吃饭。",
    pinyin:"Tā hěn máng, shènzhì méiyǒu shíjiān chīfàn.",
    meaning:"Anh ấy rất bận, thậm chí không có thời gian ăn cơm.",
    examples:[{tag:"Câu gốc",zh:"他很忙，甚至没有时间吃饭。",py:"Tā hěn máng, shènzhì méiyǒu shíjiān chīfàn.",vi:"Anh ấy rất bận, thậm chí không có thời gian ăn cơm."},{tag:"Ở nhà",zh:"妈妈告诉我：他很忙，甚至没有时间吃饭。",py:"Māma gàosu wǒ: Tā hěn máng, shènzhì méiyǒu shíjiān chīfàn.",vi:"Mẹ bảo tôi: Anh ấy rất bận, thậm chí không có thời gian ăn cơm."},{tag:"Ở trường",zh:"在学校，他很忙，甚至没有时间吃饭。",py:"Zài xuéxiào, Tā hěn máng, shènzhì méiyǒu shíjiān chīfàn.",vi:"Ở trường, Anh ấy rất bận, thậm chí không có thời gian ăn cơm."},{tag:"Lúc đi làm",zh:"上班的时候，他很忙，甚至没有时间吃饭。",py:"Shàngbān de shíhou, Tā hěn máng, shènzhì méiyǒu shíjiān chīfàn.",vi:"Lúc đi làm, Anh ấy rất bận, thậm chí không có thời gian ăn cơm."}],
    explanation:"甚至 đưa ra mức độ hoặc trường hợp cao hơn dự kiến.",
    note:"Thường dùng trong câu tăng tiến."
  },

  {
    id:"hsk4_54",
    pattern:"并且",
    title:"并且 — hơn nữa, và còn",
    structure:"A，并且B",
    example:"这家酒店环境很好，并且价格也不贵。",
    pinyin:"Zhè jiā jiǔdiàn huánjìng hěn hǎo, bìngqiě jiàgé yě bú guì.",
    meaning:"Khách sạn này môi trường rất tốt, hơn nữa giá cũng không đắt.",
    examples:[{tag:"Câu gốc",zh:"这家酒店环境很好，并且价格也不贵。",py:"Zhè jiā jiǔdiàn huánjìng hěn hǎo, bìngqiě jiàgé yě bú guì.",vi:"Khách sạn này môi trường rất tốt, hơn nữa giá cũng không đắt."},{tag:"Ở nhà",zh:"妈妈告诉我：这家酒店环境很好，并且价格也不贵。",py:"Māma gàosu wǒ: Zhè jiā jiǔdiàn huánjìng hěn hǎo, bìngqiě jiàgé yě bú guì.",vi:"Mẹ bảo tôi: Khách sạn này môi trường rất tốt, hơn nữa giá cũng không đắt."},{tag:"Ở trường",zh:"在学校，这家酒店环境很好，并且价格也不贵。",py:"Zài xuéxiào, Zhè jiā jiǔdiàn huánjìng hěn hǎo, bìngqiě jiàgé yě bú guì.",vi:"Ở trường, Khách sạn này môi trường rất tốt, hơn nữa giá cũng không đắt."},{tag:"Lúc đi làm",zh:"上班的时候，这家酒店环境很好，并且价格也不贵。",py:"Shàngbān de shíhou, Zhè jiā jiǔdiàn huánjìng hěn hǎo, bìngqiě jiàgé yě bú guì.",vi:"Lúc đi làm, Khách sạn này môi trường rất tốt, hơn nữa giá cũng không đắt."}],
    explanation:"并且 nối hai thông tin có quan hệ bổ sung.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk4_55",
    pattern:"不仅……而且……",
    title:"不仅……而且…… — không những... mà còn...",
    structure:"不仅 + A，而且 + B",
    example:"他不仅会说中文，而且会说日语。",
    pinyin:"Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.",
    meaning:"Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Nhật.",
    examples:[{tag:"Câu gốc",zh:"他不仅会说中文，而且会说日语。",py:"Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.",vi:"Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Nhật."},{tag:"Ở nhà",zh:"妈妈告诉我：他不仅会说中文，而且会说日语。",py:"Māma gàosu wǒ: Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.",vi:"Mẹ bảo tôi: Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Nhật."},{tag:"Ở trường",zh:"在学校，他不仅会说中文，而且会说日语。",py:"Zài xuéxiào, Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.",vi:"Ở trường, Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Nhật."},{tag:"Lúc đi làm",zh:"上班的时候，他不仅会说中文，而且会说日语。",py:"Shàngbān de shíhou, Tā bùjǐn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.",vi:"Lúc đi làm, Anh ấy không những biết nói tiếng Trung mà còn biết nói tiếng Nhật."}],
    explanation:"Cấu trúc tăng tiến, B có mức độ hoặc thông tin bổ sung mạnh hơn A.",
    note:"不仅……而且……."
  },

  {
    id:"hsk4_56",
    pattern:"因此",
    title:"因此 — vì vậy, do đó",
    structure:"原因，因此 + 结果",
    example:"今天下大雪，因此很多人没有出门。",
    pinyin:"Jīntiān xià dàxuě, yīncǐ hěn duō rén méiyǒu chūmén.",
    meaning:"Hôm nay tuyết rơi rất to, vì vậy nhiều người không ra ngoài.",
    examples:[{tag:"Câu gốc",zh:"今天下大雪，因此很多人没有出门。",py:"Jīntiān xià dàxuě, yīncǐ hěn duō rén méiyǒu chūmén.",vi:"Hôm nay tuyết rơi rất to, vì vậy nhiều người không ra ngoài."},{tag:"Ở nhà",zh:"妈妈告诉我：今天下大雪，因此很多人没有出门。",py:"Māma gàosu wǒ: Jīntiān xià dàxuě, yīncǐ hěn duō rén méiyǒu chūmén.",vi:"Mẹ bảo tôi: Hôm nay tuyết rơi rất to, vì vậy nhiều người không ra ngoài."},{tag:"Ở trường",zh:"在学校，今天下大雪，因此很多人没有出门。",py:"Zài xuéxiào, Jīntiān xià dàxuě, yīncǐ hěn duō rén méiyǒu chūmén.",vi:"Ở trường, Hôm nay tuyết rơi rất to, vì vậy nhiều người không ra ngoài."},{tag:"Lúc đi làm",zh:"上班的时候，今天下大雪，因此很多人没有出门。",py:"Shàngbān de shíhou, Jīntiān xià dàxuě, yīncǐ hěn duō rén méiyǒu chūmén.",vi:"Lúc đi làm, Hôm nay tuyết rơi rất to, vì vậy nhiều người không ra ngoài."}],
    explanation:"因此 đưa ra kết quả dựa trên nguyên nhân phía trước.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk4_57",
    pattern:"加上",
    title:"加上 — cộng thêm, thêm vào đó",
    structure:"A + 加上 + B",
    example:"加上今天的工作，我已经连续忙了三天。",
    pinyin:"Jiāshàng jīntiān de gōngzuò, wǒ yǐjīng liánxù máng le sān tiān.",
    meaning:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi.",
    examples:[{tag:"Câu gốc",zh:"加上今天的工作，我已经连续忙了三天。",py:"Jiāshàng jīntiān de gōngzuò, wǒ yǐjīng liánxù máng le sān tiān.",vi:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi."},{tag:"Tình huống khác",zh:"加上今天的工作，妈妈已经连续忙了三天。",py:"Jiāshàng jīntiān de gōngzuò, Māma yǐjīng liánxù máng le sān tiān.",vi:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi."},{tag:"Tình huống khác",zh:"加上今天的工作，老师已经连续忙了三天。",py:"Jiāshàng jīntiān de gōngzuò, Lǎoshī yǐjīng liánxù máng le sān tiān.",vi:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi."},{tag:"Tình huống khác",zh:"加上今天的工作，同学们已经连续忙了三天。",py:"Jiāshàng jīntiān de gōngzuò, Tóngxuémen yǐjīng liánxù máng le sān tiān.",vi:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi."},{tag:"Tình huống khác",zh:"加上昨天的工作，我已经连续忙了三天。",py:"Jiāshàng Zuótiān de gōngzuò, wǒ yǐjīng liánxù máng le sān tiān.",vi:"Cộng thêm công việc hôm nay, tôi đã bận liên tục ba ngày rồi."}],
    explanation:"加上 dùng để bổ sung thêm một yếu tố.",
    note:"Có thể dùng để cộng thêm nguyên nhân hoặc điều kiện."
  },

  {
    id:"hsk4_58",
    pattern:"者",
    title:"者 — người... / cái...",
    structure:"V/Adj + 者",
    example:"成功者往往付出了很多努力。",
    pinyin:"Chénggōng zhě wǎngwǎng fùchū le hěn duō nǔlì.",
    meaning:"Người thành công thường đã bỏ ra rất nhiều nỗ lực.",
    examples:[{tag:"Câu gốc",zh:"成功者往往付出了很多努力。",py:"Chénggōng zhě wǎngwǎng fùchū le hěn duō nǔlì.",vi:"Người thành công thường đã bỏ ra rất nhiều nỗ lực."},{tag:"Ở nhà",zh:"妈妈告诉我：成功者往往付出了很多努力。",py:"Māma gàosu wǒ: Chénggōng zhě wǎngwǎng fùchū le hěn duō nǔlì.",vi:"Mẹ bảo tôi: Người thành công thường đã bỏ ra rất nhiều nỗ lực."},{tag:"Ở trường",zh:"在学校，成功者往往付出了很多努力。",py:"Zài xuéxiào, Chénggōng zhě wǎngwǎng fùchū le hěn duō nǔlì.",vi:"Ở trường, Người thành công thường đã bỏ ra rất nhiều nỗ lực."},{tag:"Lúc đi làm",zh:"上班的时候，成功者往往付出了很多努力。",py:"Shàngbān de shíhou, Chénggōng zhě wǎngwǎng fùchū le hěn duō nǔlì.",vi:"Lúc đi làm, Người thành công thường đã bỏ ra rất nhiều nỗ lực."}],
    explanation:"者 đứng sau động từ hoặc tính từ để tạo danh từ chỉ người hoặc đối tượng.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk4_59",
    pattern:"之",
    title:"之 — của, điều đó",
    structure:"A + 之 + B",
    example:"这是我们共同努力的结果。",
    pinyin:"Zhè shì wǒmen gòngtóng nǔlì de jiéguǒ.",
    meaning:"Đây là kết quả của sự nỗ lực chung của chúng tôi.",
    examples:[{tag:"Câu gốc",zh:"这是我们共同努力的结果。",py:"Zhè shì wǒmen gòngtóng nǔlì de jiéguǒ.",vi:"Đây là kết quả của sự nỗ lực chung của chúng tôi."},{tag:"Tình huống khác",zh:"这是妈妈们共同努力的结果。",py:"Zhè shì Māmamen gòngtóng nǔlì de jiéguǒ.",vi:"Đây là kết quả của sự nỗ lực chung của chúng tôi."},{tag:"Tình huống khác",zh:"这是老师们共同努力的结果。",py:"Zhè shì Lǎoshīmen gòngtóng nǔlì de jiéguǒ.",vi:"Đây là kết quả của sự nỗ lực chung của chúng tôi."},{tag:"Tình huống khác",zh:"这是同学们们共同努力的结果。",py:"Zhè shì Tóngxuémenmen gòngtóng nǔlì de jiéguǒ.",vi:"Đây là kết quả của sự nỗ lực chung của chúng tôi."},{tag:"Tình huống khác",zh:"这是他们共同努力的结果。",py:"Zhè shì Tāmen gòngtóng nǔlì de jiéguǒ.",vi:"Đây là kết quả của sự nỗ lực chung của chúng tôi."}],
    explanation:"之 là trợ từ mang sắc thái văn viết, có thể biểu thị quan hệ tương tự 的 trong một số cấu trúc.",
    note:"Chủ yếu gặp trong văn viết hoặc cách nói trang trọng."
  },

  {
    id:"hsk4_60",
    pattern:"啊",
    title:"啊 — trợ từ cảm thán",
    structure:"句子 + 啊",
    example:"今天的天气真好啊！",
    pinyin:"Jīntiān de tiānqì zhēn hǎo a!",
    meaning:"Thời tiết hôm nay thật đẹp!",
    examples:[{tag:"Câu gốc",zh:"今天的天气真好啊！",py:"Jīntiān de tiānqì zhēn hǎo a!",vi:"Thời tiết hôm nay thật đẹp!"},{tag:"Ở nhà",zh:"妈妈告诉我：今天的天气真好啊！",py:"Māma gàosu wǒ: Jīntiān de tiānqì zhēn hǎo a!",vi:"Mẹ bảo tôi: Thời tiết hôm nay thật đẹp!"},{tag:"Ở trường",zh:"在学校，今天的天气真好啊！",py:"Zài xuéxiào, Jīntiān de tiānqì zhēn hǎo a!",vi:"Ở trường, Thời tiết hôm nay thật đẹp!"},{tag:"Lúc đi làm",zh:"上班的时候，今天的天气真好啊！",py:"Shàngbān de shíhou, Jīntiān de tiānqì zhēn hǎo a!",vi:"Lúc đi làm, Thời tiết hôm nay thật đẹp!"}],
    explanation:"啊 đặt cuối câu để tăng sắc thái cảm xúc.",
    note:"Cách phát âm có thể thay đổi theo âm phía trước."
  },

  {
    id:"hsk4_61",
    pattern:"数词+形容词+量词",
    title:"Số + tính từ + lượng từ",
    structure:"数词 + Adj + 量词 + N",
    example:"我买了三大瓶水。",
    pinyin:"Wǒ mǎi le sān dà píng shuǐ.",
    meaning:"Tôi đã mua ba chai nước lớn.",
    examples:[{tag:"Câu gốc",zh:"我买了三大瓶水。",py:"Wǒ mǎi le sān dà píng shuǐ.",vi:"Tôi đã mua ba chai nước lớn."},{tag:"Tình huống khác",zh:"妈妈买了三大瓶水。",py:"Māma mǎi le sān dà píng shuǐ.",vi:"Mẹ đã mua ba chai nước lớn."},{tag:"Tình huống khác",zh:"老师买了三大瓶水。",py:"Lǎoshī mǎi le sān dà píng shuǐ.",vi:"Thầy đã mua ba chai nước lớn."},{tag:"Tình huống khác",zh:"同学们买了三大瓶水。",py:"Tóngxuémen mǎi le sān dà píng shuǐ.",vi:"Các bạn đã mua ba chai nước lớn."},{tag:"Tình huống khác",zh:"我买了三大瓶茶。",py:"Wǒ mǎi le sān dà píng chá.",vi:"Tôi đã mua ba chai trà lớn."}],
    explanation:"Tính từ có thể đứng giữa số từ và lượng từ để mô tả loại hoặc kích thước.",
    note:"三大瓶水、两小杯咖啡."
  },

  {
    id:"hsk4_62",
    pattern:"一A一B",
    title:"一A一B — từng... từng...",
    structure:"一A一B",
    example:"大家一心一意地完成任务。",
    pinyin:"Dàjiā yìxīn yíyì de wánchéng rènwu.",
    meaning:"Mọi người một lòng một dạ hoàn thành nhiệm vụ.",
    examples:[{tag:"Câu gốc",zh:"大家一心一意地完成任务。",py:"Dàjiā yìxīn yíyì de wánchéng rènwu.",vi:"Mọi người một lòng một dạ hoàn thành nhiệm vụ."},{tag:"Ở nhà",zh:"妈妈告诉我：大家一心一意地完成任务。",py:"Māma gàosu wǒ: Dàjiā yìxīn yíyì de wánchéng rènwu.",vi:"Mẹ bảo tôi: Mọi người một lòng một dạ hoàn thành nhiệm vụ."},{tag:"Ở trường",zh:"在学校，大家一心一意地完成任务。",py:"Zài xuéxiào, Dàjiā yìxīn yíyì de wánchéng rènwu.",vi:"Ở trường, Mọi người một lòng một dạ hoàn thành nhiệm vụ."},{tag:"Lúc đi làm",zh:"上班的时候，大家一心一意地完成任务。",py:"Shàngbān de shíhou, Dàjiā yìxīn yíyì de wánchéng rènwu.",vi:"Lúc đi làm, Mọi người một lòng một dạ hoàn thành nhiệm vụ."}],
    explanation:"Mẫu bốn chữ tạo thành cụm cố định, thường nhấn mạnh trạng thái hoặc cách thức.",
    note:"Một số mẫu cần học như một cụm từ."
  },

  {
    id:"hsk4_63",
    pattern:"无A无B",
    title:"无A无B — không A không B",
    structure:"无A无B",
    example:"这里无边无际，到处都是草原。",
    pinyin:"Zhèlǐ wúbiān wújì, dàochù dōu shì cǎoyuán.",
    meaning:"Nơi đây rộng mênh mông không bờ không bến, đâu đâu cũng là thảo nguyên.",
    examples:[{tag:"Câu gốc",zh:"这里无边无际，到处都是草原。",py:"Zhèlǐ wúbiān wújì, dàochù dōu shì cǎoyuán.",vi:"Nơi đây rộng mênh mông không bờ không bến, đâu đâu cũng là thảo nguyên."},{tag:"Ở nhà",zh:"妈妈告诉我：这里无边无际，到处都是草原。",py:"Māma gàosu wǒ: Zhèlǐ wúbiān wújì, dàochù dōu shì cǎoyuán.",vi:"Mẹ bảo tôi: Nơi đây rộng mênh mông không bờ không bến, đâu đâu cũng là thảo nguyên."},{tag:"Ở trường",zh:"在学校，这里无边无际，到处都是草原。",py:"Zài xuéxiào, Zhèlǐ wúbiān wújì, dàochù dōu shì cǎoyuán.",vi:"Ở trường, Nơi đây rộng mênh mông không bờ không bến, đâu đâu cũng là thảo nguyên."},{tag:"Lúc đi làm",zh:"上班的时候，这里无边无际，到处都是草原。",py:"Shàngbān de shíhou, Zhèlǐ wúbiān wújì, dàochù dōu shì cǎoyuán.",vi:"Lúc đi làm, Nơi đây rộng mênh mông không bờ không bến, đâu đâu cũng là thảo nguyên."}],
    explanation:"Mẫu bốn chữ dùng để tạo cách diễn đạt nhấn mạnh.",
    note:"Thường học theo cụm."
  },

  {
    id:"hsk4_64",
    pattern:"有A有B",
    title:"有A有B — có cả A và B",
    structure:"有A有B",
    example:"这个市场有吃有喝，非常热闹。",
    pinyin:"Zhège shìchǎng yǒu chī yǒu hē, fēicháng rènào.",
    meaning:"Khu chợ này có ăn có uống, vô cùng náo nhiệt.",
    examples:[{tag:"Câu gốc",zh:"这个市场有吃有喝，非常热闹。",py:"Zhège shìchǎng yǒu chī yǒu hē, fēicháng rènào.",vi:"Khu chợ này có ăn có uống, vô cùng náo nhiệt."},{tag:"Ở nhà",zh:"妈妈告诉我：这个市场有吃有喝，非常热闹。",py:"Māma gàosu wǒ: Zhège shìchǎng yǒu chī yǒu hē, fēicháng rènào.",vi:"Mẹ bảo tôi: Khu chợ này có ăn có uống, vô cùng náo nhiệt."},{tag:"Ở trường",zh:"在学校，这个市场有吃有喝，非常热闹。",py:"Zài xuéxiào, Zhège shìchǎng yǒu chī yǒu hē, fēicháng rènào.",vi:"Ở trường, Khu chợ này có ăn có uống, vô cùng náo nhiệt."},{tag:"Lúc đi làm",zh:"上班的时候，这个市场有吃有喝，非常热闹。",py:"Shàngbān de shíhou, Zhège shìchǎng yǒu chī yǒu hē, fēicháng rènào.",vi:"Lúc đi làm, Khu chợ này có ăn có uống, vô cùng náo nhiệt."}],
    explanation:"Mẫu 有A有B liệt kê hai phương diện cùng tồn tại.",
    note:"Thường gặp trong khẩu ngữ."
  },

  {
    id:"hsk4_65",
    pattern:"来得及/来不及",
    title:"来得及 / 来不及 — kịp / không kịp",
    structure:"来得及/来不及 + V",
    example:"现在出发还来得及。",
    pinyin:"Xiànzài chūfā hái láidejí.",
    meaning:"Bây giờ xuất phát vẫn còn kịp.",
    examples:[{tag:"Câu gốc",zh:"现在出发还来得及。",py:"Xiànzài chūfā hái láidejí.",vi:"Bây giờ xuất phát vẫn còn kịp."},{tag:"Ở nhà",zh:"妈妈告诉我：现在出发还来得及。",py:"Māma gàosu wǒ: Xiànzài chūfā hái láidejí.",vi:"Mẹ bảo tôi: Bây giờ xuất phát vẫn còn kịp."},{tag:"Ở trường",zh:"在学校，现在出发还来得及。",py:"Zài xuéxiào, Xiànzài chūfā hái láidejí.",vi:"Ở trường, Bây giờ xuất phát vẫn còn kịp."},{tag:"Lúc đi làm",zh:"上班的时候，现在出发还来得及。",py:"Shàngbān de shíhou, Xiànzài chūfā hái láidejí.",vi:"Lúc đi làm, Bây giờ xuất phát vẫn còn kịp."}],
    explanation:"来得及 biểu thị còn đủ thời gian; 来不及 biểu thị không đủ thời gian.",
    note:"来不及 thường dùng để nói việc quá muộn."
  },

  {
    id:"hsk4_66",
    pattern:"有的是",
    title:"有的是 — có rất nhiều",
    structure:"N + 有的是",
    example:"这里有的是好吃的东西。",
    pinyin:"Zhèlǐ yǒu de shì hǎochī de dōngxi.",
    meaning:"Ở đây có rất nhiều đồ ăn ngon.",
    examples:[{tag:"Câu gốc",zh:"这里有的是好吃的东西。",py:"Zhèlǐ yǒu de shì hǎochī de dōngxi.",vi:"Ở đây có rất nhiều đồ ăn ngon."},{tag:"Ở nhà",zh:"妈妈告诉我：这里有的是好吃的东西。",py:"Māma gàosu wǒ: Zhèlǐ yǒu de shì hǎochī de dōngxi.",vi:"Mẹ bảo tôi: Ở đây có rất nhiều đồ ăn ngon."},{tag:"Ở trường",zh:"在学校，这里有的是好吃的东西。",py:"Zài xuéxiào, Zhèlǐ yǒu de shì hǎochī de dōngxi.",vi:"Ở trường, Ở đây có rất nhiều đồ ăn ngon."},{tag:"Lúc đi làm",zh:"上班的时候，这里有的是好吃的东西。",py:"Shàngbān de shíhou, Zhèlǐ yǒu de shì hǎochī de dōngxi.",vi:"Lúc đi làm, Ở đây có rất nhiều đồ ăn ngon."}],
    explanation:"有的是 nhấn mạnh số lượng rất nhiều.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk4_67",
    pattern:"说不定",
    title:"说不定 — biết đâu, có khi",
    structure:"说不定 + S + V",
    example:"说不定明天会下雪。",
    pinyin:"Shuōbudìng míngtiān huì xiàxuě.",
    meaning:"Biết đâu ngày mai sẽ có tuyết.",
    examples:[{tag:"Câu gốc",zh:"说不定明天会下雪。",py:"Shuōbudìng míngtiān huì xiàxuě.",vi:"Biết đâu ngày mai sẽ có tuyết."},{tag:"Ở nhà",zh:"妈妈告诉我：说不定明天会下雪。",py:"Māma gàosu wǒ: Shuōbudìng míngtiān huì xiàxuě.",vi:"Mẹ bảo tôi: Biết đâu ngày mai sẽ có tuyết."},{tag:"Ở trường",zh:"在学校，说不定明天会下雪。",py:"Zài xuéxiào, Shuōbudìng míngtiān huì xiàxuě.",vi:"Ở trường, Biết đâu ngày mai sẽ có tuyết."},{tag:"Lúc đi làm",zh:"上班的时候，说不定明天会下雪。",py:"Shàngbān de shíhou, Shuōbudìng míngtiān huì xiàxuě.",vi:"Lúc đi làm, Biết đâu ngày mai sẽ có tuyết."}],
    explanation:"说不定 biểu thị khả năng không chắc chắn.",
    note:"Thường dùng khi phỏng đoán."
  },

  {
    id:"hsk4_68",
    pattern:"不怎么",
    title:"不怎么 — không... lắm",
    structure:"不怎么 + Adj/V",
    example:"我最近不怎么喝咖啡。",
    pinyin:"Wǒ zuìjìn bù zěnme hē kāfēi.",
    meaning:"Gần đây tôi không uống cà phê nhiều lắm.",
    examples:[{tag:"Câu gốc",zh:"我最近不怎么喝咖啡。",py:"Wǒ zuìjìn bù zěnme hē kāfēi.",vi:"Gần đây tôi không uống cà phê nhiều lắm."},{tag:"Tình huống khác",zh:"妈妈最近不怎么喝咖啡。",py:"Māma zuìjìn bù zěnme hē kāfēi.",vi:"Gần đây tôi không uống cà phê nhiều lắm."},{tag:"Tình huống khác",zh:"老师最近不怎么喝咖啡。",py:"Lǎoshī zuìjìn bù zěnme hē kāfēi.",vi:"Gần đây tôi không uống cà phê nhiều lắm."},{tag:"Tình huống khác",zh:"同学们最近不怎么喝咖啡。",py:"Tóngxuémen zuìjìn bù zěnme hē kāfēi.",vi:"Gần đây tôi không uống cà phê nhiều lắm."}],
    explanation:"不怎么 biểu thị mức độ thấp hoặc tần suất thấp.",
    note:"Không nhất thiết mang nghĩa hoàn toàn không."
  },

  {
    id:"hsk4_69",
    pattern:"一+量词+比+一+量词",
    title:"一+量词+比+一+量词 — càng lúc càng...",
    structure:"一 + MW + 比 + 一 + MW",
    example:"这几天的天气一天比一天冷。",
    pinyin:"Zhè jǐ tiān de tiānqì yì tiān bǐ yì tiān lěng.",
    meaning:"Mấy ngày nay thời tiết ngày càng lạnh.",
    examples:[{tag:"Câu gốc",zh:"这几天的天气一天比一天冷。",py:"Zhè jǐ tiān de tiānqì yì tiān bǐ yì tiān lěng.",vi:"Mấy ngày nay thời tiết ngày càng lạnh."},{tag:"Ở nhà",zh:"妈妈告诉我：这几天的天气一天比一天冷。",py:"Māma gàosu wǒ: Zhè jǐ tiān de tiānqì yì tiān bǐ yì tiān lěng.",vi:"Mẹ bảo tôi: Mấy ngày nay thời tiết ngày càng lạnh."},{tag:"Ở trường",zh:"在学校，这几天的天气一天比一天冷。",py:"Zài xuéxiào, Zhè jǐ tiān de tiānqì yì tiān bǐ yì tiān lěng.",vi:"Ở trường, Mấy ngày nay thời tiết ngày càng lạnh."},{tag:"Lúc đi làm",zh:"上班的时候，这几天的天气一天比一天冷。",py:"Shàngbān de shíhou, Zhè jǐ tiān de tiānqì yì tiān bǐ yì tiān lěng.",vi:"Lúc đi làm, Mấy ngày nay thời tiết ngày càng lạnh."}],
    explanation:"Biểu thị sự thay đổi tăng dần hoặc giảm dần theo thời gian.",
    note:"一天比一天……、一年比一年……."
  },

  {
    id:"hsk4_70",
    pattern:"在……方面",
    title:"在……方面 — về phương diện...",
    structure:"在 + N + 方面，S + V",
    example:"他在学习方面进步很大。",
    pinyin:"Tā zài xuéxí fāngmiàn jìnbù hěn dà.",
    meaning:"Anh ấy tiến bộ rất nhiều về mặt học tập.",
    examples:[{tag:"Câu gốc",zh:"他在学习方面进步很大。",py:"Tā zài xuéxí fāngmiàn jìnbù hěn dà.",vi:"Anh ấy tiến bộ rất nhiều về mặt học tập."},{tag:"Ở nhà",zh:"妈妈告诉我：他在学习方面进步很大。",py:"Māma gàosu wǒ: Tā zài xuéxí fāngmiàn jìnbù hěn dà.",vi:"Mẹ bảo tôi: Anh ấy tiến bộ rất nhiều về mặt học tập."},{tag:"Ở trường",zh:"在学校，他在学习方面进步很大。",py:"Zài xuéxiào, Tā zài xuéxí fāngmiàn jìnbù hěn dà.",vi:"Ở trường, Anh ấy tiến bộ rất nhiều về mặt học tập."},{tag:"Lúc đi làm",zh:"上班的时候，他在学习方面进步很大。",py:"Shàngbān de shíhou, Tā zài xuéxí fāngmiàn jìnbù hěn dà.",vi:"Lúc đi làm, Anh ấy tiến bộ rất nhiều về mặt học tập."}],
    explanation:"Dùng để giới hạn phương diện đang được nói tới.",
    note:"在工作方面、在生活方面."
  },

  {
    id:"hsk4_71",
    pattern:"由……组成",
    title:"由……组成 — được tạo thành bởi...",
    structure:"A + 由 + B + 组成",
    example:"这个团队由五个人组成。",
    pinyin:"Zhège tuánduì yóu wǔ ge rén zǔchéng.",
    meaning:"Đội này được tạo thành từ năm người.",
    examples:[{tag:"Câu gốc",zh:"这个团队由五个人组成。",py:"Zhège tuánduì yóu wǔ ge rén zǔchéng.",vi:"Đội này được tạo thành từ năm người."},{tag:"Ở nhà",zh:"妈妈告诉我：这个团队由五个人组成。",py:"Māma gàosu wǒ: Zhège tuánduì yóu wǔ ge rén zǔchéng.",vi:"Mẹ bảo tôi: Đội này được tạo thành từ năm người."},{tag:"Ở trường",zh:"在学校，这个团队由五个人组成。",py:"Zài xuéxiào, Zhège tuánduì yóu wǔ ge rén zǔchéng.",vi:"Ở trường, Đội này được tạo thành từ năm người."},{tag:"Lúc đi làm",zh:"上班的时候，这个团队由五个人组成。",py:"Shàngbān de shíhou, Zhège tuánduì yóu wǔ ge rén zǔchéng.",vi:"Lúc đi làm, Đội này được tạo thành từ năm người."}],
    explanation:"由 giới thiệu thành phần tạo nên một tập thể hoặc sự vật.",
    note:"由……组成."
  },

  {
    id:"hsk4_72",
    pattern:"在……上/下/中",
    title:"在……上/下/中 — trên/dưới/trong phương diện",
    structure:"在 + N + 上/下/中",
    example:"在工作中，我们需要互相帮助。",
    pinyin:"Zài gōngzuò zhōng, wǒmen xūyào hùxiāng bāngzhù.",
    meaning:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau.",
    examples:[{tag:"Câu gốc",zh:"在工作中，我们需要互相帮助。",py:"Zài gōngzuò zhōng, wǒmen xūyào hùxiāng bāngzhù.",vi:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"在工作中，妈妈们需要互相帮助。",py:"Zài gōngzuò zhōng, Māmamen xūyào hùxiāng bāngzhù.",vi:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"在工作中，老师们需要互相帮助。",py:"Zài gōngzuò zhōng, Lǎoshīmen xūyào hùxiāng bāngzhù.",vi:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"在工作中，同学们们需要互相帮助。",py:"Zài gōngzuò zhōng, Tóngxuémenmen xūyào hùxiāng bāngzhù.",vi:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau."},{tag:"Tình huống khác",zh:"在工作中，他们需要互相帮助。",py:"Zài gōngzuò zhōng, Tāmen xūyào hùxiāng bāngzhù.",vi:"Trong công việc, chúng ta cần giúp đỡ lẫn nhau."}],
    explanation:"Các phương vị từ có thể biểu thị phạm vi hoặc phương diện trừu tượng.",
    note:"在生活中、在这方面上."
  },

  {
    id:"hsk4_73",
    pattern:"把字句2",
    title:"把字句 — xử lý đối tượng",
    structure:"S + 把 + O + V + 了/其他成分",
    example:"我已经把作业写完了。",
    pinyin:"Wǒ yǐjīng bǎ zuòyè xiě wán le.",
    meaning:"Tôi đã làm xong bài tập rồi.",
    examples:[{tag:"Câu gốc",zh:"我已经把作业写完了。",py:"Wǒ yǐjīng bǎ zuòyè xiě wán le.",vi:"Tôi đã làm xong bài tập rồi."},{tag:"Tình huống khác",zh:"妈妈已经把作业写完了。",py:"Māma yǐjīng bǎ zuòyè xiě wán le.",vi:"Mẹ đã làm xong bài tập rồi."},{tag:"Tình huống khác",zh:"老师已经把作业写完了。",py:"Lǎoshī yǐjīng bǎ zuòyè xiě wán le.",vi:"Thầy đã làm xong bài tập rồi."},{tag:"Tình huống khác",zh:"同学们已经把作业写完了。",py:"Tóngxuémen yǐjīng bǎ zuòyè xiě wán le.",vi:"Các bạn đã làm xong bài tập rồi."},{tag:"Tình huống khác",zh:"我已经把生词写完了。",py:"Wǒ yǐjīng bǎ shēngcí xiě wán le.",vi:"Tôi đã làm xong từ mới rồi."}],
    explanation:"把 đưa tân ngữ lên trước động từ để nhấn mạnh việc xử lý hoặc tác động lên đối tượng.",
    note:"Động từ thường cần có thành phần theo sau."
  },

  {
    id:"hsk4_74",
    pattern:"把+动量补语",
    title:"把 + động lượng bổ ngữ",
    structure:"S + 把 + O + V + 动量补语",
    example:"请把这篇文章读两遍。",
    pinyin:"Qǐng bǎ zhè piān wénzhāng dú liǎng biàn.",
    meaning:"Hãy đọc bài văn này hai lần.",
    examples:[{tag:"Câu gốc",zh:"请把这篇文章读两遍。",py:"Qǐng bǎ zhè piān wénzhāng dú liǎng biàn.",vi:"Hãy đọc bài văn này hai lần."},{tag:"Ở nhà",zh:"妈妈告诉我：请把这篇文章读两遍。",py:"Māma gàosu wǒ: Qǐng bǎ zhè piān wénzhāng dú liǎng biàn.",vi:"Mẹ bảo tôi: Hãy đọc bài văn này hai lần."},{tag:"Ở trường",zh:"在学校，请把这篇文章读两遍。",py:"Zài xuéxiào, Qǐng bǎ zhè piān wénzhāng dú liǎng biàn.",vi:"Ở trường, Hãy đọc bài văn này hai lần."},{tag:"Lúc đi làm",zh:"上班的时候，请把这篇文章读两遍。",py:"Shàngbān de shíhou, Qǐng bǎ zhè piān wénzhāng dú liǎng biàn.",vi:"Lúc đi làm, Hãy đọc bài văn này hai lần."}],
    explanation:"把 có thể kết hợp với động lượng bổ ngữ để biểu thị hành động tác động lên đối tượng bao nhiêu lần.",
    note:"V + 两遍、三次..."
  },

  {
    id:"hsk4_75",
    pattern:"被动句",
    title:"被 — câu bị động",
    structure:"S + 被 + O + V + 其他成分",
    example:"我的自行车被别人骑走了。",
    pinyin:"Wǒ de zìxíngchē bèi biérén qí zǒu le.",
    meaning:"Xe đạp của tôi bị người khác đi mất.",
    examples:[{tag:"Câu gốc",zh:"我的自行车被别人骑走了。",py:"Wǒ de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đi mất."},{tag:"Tình huống khác",zh:"妈妈的自行车被别人骑走了。",py:"Māma de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đi mất."},{tag:"Tình huống khác",zh:"老师的自行车被别人骑走了。",py:"Lǎoshī de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đi mất."},{tag:"Tình huống khác",zh:"同学们的自行车被别人骑走了。",py:"Tóngxuémen de zìxíngchē bèi biérén qí zǒu le.",vi:"Xe đạp của tôi bị người khác đi mất."}],
    explanation:"被 đưa người hoặc vật chịu tác động lên làm chủ ngữ.",
    note:"Động từ thường có thành phần bổ sung phía sau."
  },

  {
    id:"hsk4_76",
    pattern:"兼语句",
    title:"兼语句 — câu kiêm ngữ",
    structure:"S + V1 + O + V2",
    example:"老师让我们认真学习。",
    pinyin:"Lǎoshī ràng wǒmen rènzhēn xuéxí.",
    meaning:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"老师让我们认真学习。",py:"Lǎoshī ràng wǒmen rènzhēn xuéxí.",vi:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc."},{tag:"Tình huống khác",zh:"老师让妈妈们认真学习。",py:"Lǎoshī ràng Māmamen rènzhēn xuéxí.",vi:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc."},{tag:"Tình huống khác",zh:"老师让老师们认真学习。",py:"Lǎoshī ràng Lǎoshīmen rènzhēn xuéxí.",vi:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc."},{tag:"Tình huống khác",zh:"老师让同学们们认真学习。",py:"Lǎoshī ràng Tóngxuémenmen rènzhēn xuéxí.",vi:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc."},{tag:"Tình huống khác",zh:"老师让他们认真学习。",py:"Lǎoshī ràng Tāmen rènzhēn xuéxí.",vi:"Giáo viên yêu cầu chúng tôi học tập nghiêm túc."}],
    explanation:"Tân ngữ của động từ thứ nhất đồng thời là chủ thể của động từ thứ hai.",
    note:"让、叫、使 thường gặp trong cấu trúc này."
  },

  {
    id:"hsk4_77",
    pattern:"A不如B",
    title:"A不如B — A không bằng B",
    structure:"A + 不如 + B + Adj",
    example:"我的中文不如他的好。",
    pinyin:"Wǒ de Zhōngwén bùrú tā de hǎo.",
    meaning:"Tiếng Trung của tôi không tốt bằng của anh ấy.",
    examples:[{tag:"Câu gốc",zh:"我的中文不如他的好。",py:"Wǒ de Zhōngwén bùrú tā de hǎo.",vi:"Tiếng Trung của tôi không tốt bằng của anh ấy."},{tag:"Tình huống khác",zh:"妈妈的中文不如他的好。",py:"Māma de Zhōngwén bùrú tā de hǎo.",vi:"Tiếng Trung của tôi không tốt bằng của anh ấy."},{tag:"Tình huống khác",zh:"老师的中文不如他的好。",py:"Lǎoshī de Zhōngwén bùrú tā de hǎo.",vi:"Tiếng Trung của tôi không tốt bằng của anh ấy."},{tag:"Tình huống khác",zh:"同学们的中文不如他的好。",py:"Tóngxuémen de Zhōngwén bùrú tā de hǎo.",vi:"Tiếng Trung của tôi không tốt bằng của anh ấy."},{tag:"Tình huống khác",zh:"我的中文不如她的好。",py:"Wǒ de Zhōngwén bùrú Tā de hǎo.",vi:"Tiếng Trung của tôi không tốt bằng của anh ấy."}],
    explanation:"不如 biểu thị A không đạt mức độ bằng B.",
    note:"A不如B + Adj."
  },

  {
    id:"hsk4_78",
    pattern:"跟……相比",
    title:"跟……相比 — so với...",
    structure:"跟 + A + 相比，B + Adj",
    example:"跟去年相比，今年的工作更多。",
    pinyin:"Gēn qùnián xiāngbǐ, jīnnián de gōngzuò gèng duō.",
    meaning:"So với năm ngoái, công việc năm nay nhiều hơn.",
    examples:[{tag:"Câu gốc",zh:"跟去年相比，今年的工作更多。",py:"Gēn qùnián xiāngbǐ, jīnnián de gōngzuò gèng duō.",vi:"So với năm ngoái, công việc năm nay nhiều hơn."},{tag:"Ở nhà",zh:"妈妈告诉我：跟去年相比，今年的工作更多。",py:"Māma gàosu wǒ: Gēn qùnián xiāngbǐ, jīnnián de gōngzuò gèng duō.",vi:"Mẹ bảo tôi: So với năm ngoái, công việc năm nay nhiều hơn."},{tag:"Ở trường",zh:"在学校，跟去年相比，今年的工作更多。",py:"Zài xuéxiào, Gēn qùnián xiāngbǐ, jīnnián de gōngzuò gèng duō.",vi:"Ở trường, So với năm ngoái, công việc năm nay nhiều hơn."},{tag:"Lúc đi làm",zh:"上班的时候，跟去年相比，今年的工作更多。",py:"Shàngbān de shíhou, Gēn qùnián xiāngbǐ, jīnnián de gōngzuò gèng duō.",vi:"Lúc đi làm, So với năm ngoái, công việc năm nay nhiều hơn."}],
    explanation:"跟……相比 dùng để đặt hai đối tượng vào quan hệ so sánh.",
    note:"Thường đứng đầu câu."
  },

  {
    id:"hsk4_79",
    pattern:"双重否定",
    title:"双重否定 — phủ định kép",
    structure:"不/没 + phủ định khác",
    example:"这件事不得不认真考虑。",
    pinyin:"Zhè jiàn shì bùdébù rènzhēn kǎolǜ.",
    meaning:"Việc này buộc phải được cân nhắc nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"这件事不得不认真考虑。",py:"Zhè jiàn shì bùdébù rènzhēn kǎolǜ.",vi:"Việc này buộc phải được cân nhắc nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：这件事不得不认真考虑。",py:"Māma gàosu wǒ: Zhè jiàn shì bùdébù rènzhēn kǎolǜ.",vi:"Mẹ bảo tôi: Việc này buộc phải được cân nhắc nghiêm túc."},{tag:"Ở trường",zh:"在学校，这件事不得不认真考虑。",py:"Zài xuéxiào, Zhè jiàn shì bùdébù rènzhēn kǎolǜ.",vi:"Ở trường, Việc này buộc phải được cân nhắc nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，这件事不得不认真考虑。",py:"Shàngbān de shíhou, Zhè jiàn shì bùdébù rènzhēn kǎolǜ.",vi:"Lúc đi làm, Việc này buộc phải được cân nhắc nghiêm túc."}],
    explanation:"Hai yếu tố phủ định kết hợp để tạo ý khẳng định hoặc nhấn mạnh.",
    note:"不得不 = không thể không."
  },

  {
    id:"hsk4_80",
    pattern:"不是……而是……",
    title:"不是……而是…… — không phải... mà là...",
    structure:"不是 + A，而是 + B",
    example:"我不是不想去，而是今天没有时间。",
    pinyin:"Wǒ bú shì bù xiǎng qù, ér shì jīntiān méiyǒu shíjiān.",
    meaning:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian.",
    examples:[{tag:"Câu gốc",zh:"我不是不想去，而是今天没有时间。",py:"Wǒ bú shì bù xiǎng qù, ér shì jīntiān méiyǒu shíjiān.",vi:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian."},{tag:"Tình huống khác",zh:"妈妈不是不想去，而是今天没有时间。",py:"Māma bú shì bù xiǎng qù, ér shì jīntiān méiyǒu shíjiān.",vi:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian."},{tag:"Tình huống khác",zh:"老师不是不想去，而是今天没有时间。",py:"Lǎoshī bú shì bù xiǎng qù, ér shì jīntiān méiyǒu shíjiān.",vi:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian."},{tag:"Tình huống khác",zh:"同学们不是不想去，而是今天没有时间。",py:"Tóngxuémen bú shì bù xiǎng qù, ér shì jīntiān méiyǒu shíjiān.",vi:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian."},{tag:"Tình huống khác",zh:"我不是不想去，而是昨天没有时间。",py:"Wǒ bú shì bù xiǎng qù, ér shì Zuótiān méiyǒu shíjiān.",vi:"Không phải tôi không muốn đi, mà là hôm nay không có thời gian."}],
    explanation:"Phủ định A và khẳng định B.",
    note:"不是……而是……."
  },

  {
    id:"hsk4_81",
    pattern:"既……又……",
    title:"既……又…… — vừa... vừa...",
    structure:"既 + A，又 + B",
    example:"这家饭店既便宜又好吃。",
    pinyin:"Zhè jiā fàndiàn jì piányi yòu hǎochī.",
    meaning:"Nhà hàng này vừa rẻ vừa ngon.",
    examples:[{tag:"Câu gốc",zh:"这家饭店既便宜又好吃。",py:"Zhè jiā fàndiàn jì piányi yòu hǎochī.",vi:"Nhà hàng này vừa rẻ vừa ngon."},{tag:"Ở nhà",zh:"妈妈告诉我：这家饭店既便宜又好吃。",py:"Māma gàosu wǒ: Zhè jiā fàndiàn jì piányi yòu hǎochī.",vi:"Mẹ bảo tôi: Nhà hàng này vừa rẻ vừa ngon."},{tag:"Ở trường",zh:"在学校，这家饭店既便宜又好吃。",py:"Zài xuéxiào, Zhè jiā fàndiàn jì piányi yòu hǎochī.",vi:"Ở trường, Nhà hàng này vừa rẻ vừa ngon."},{tag:"Lúc đi làm",zh:"上班的时候，这家饭店既便宜又好吃。",py:"Shàngbān de shíhou, Zhè jiā fàndiàn jì piányi yòu hǎochī.",vi:"Lúc đi làm, Nhà hàng này vừa rẻ vừa ngon."}],
    explanation:"Nối hai đặc điểm cùng tồn tại.",
    note:"既……又……."
  },

  {
    id:"hsk4_82",
    pattern:"首先……其次……",
    title:"首先……其次…… — trước hết... tiếp theo...",
    structure:"首先 + A，其次 + B",
    example:"首先要解决安全问题，其次才是提高效率。",
    pinyin:"Shǒuxiān yào jiějué ānquán wèntí, qícì cái shì tígāo xiàolǜ.",
    meaning:"Trước hết phải giải quyết vấn đề an toàn, sau đó mới là nâng cao hiệu quả.",
    examples:[{tag:"Câu gốc",zh:"首先要解决安全问题，其次才是提高效率。",py:"Shǒuxiān yào jiějué ānquán wèntí, qícì cái shì tígāo xiàolǜ.",vi:"Trước hết phải giải quyết vấn đề an toàn, sau đó mới là nâng cao hiệu quả."},{tag:"Ở nhà",zh:"妈妈告诉我：首先要解决安全问题，其次才是提高效率。",py:"Māma gàosu wǒ: Shǒuxiān yào jiějué ānquán wèntí, qícì cái shì tígāo xiàolǜ.",vi:"Mẹ bảo tôi: Trước hết phải giải quyết vấn đề an toàn, sau đó mới là nâng cao hiệu quả."},{tag:"Ở trường",zh:"在学校，首先要解决安全问题，其次才是提高效率。",py:"Zài xuéxiào, Shǒuxiān yào jiějué ānquán wèntí, qícì cái shì tígāo xiàolǜ.",vi:"Ở trường, Trước hết phải giải quyết vấn đề an toàn, sau đó mới là nâng cao hiệu quả."},{tag:"Lúc đi làm",zh:"上班的时候，首先要解决安全问题，其次才是提高效率。",py:"Shàngbān de shíhou, Shǒuxiān yào jiějué ānquán wèntí, qícì cái shì tígāo xiàolǜ.",vi:"Lúc đi làm, Trước hết phải giải quyết vấn đề an toàn, sau đó mới là nâng cao hiệu quả."}],
    explanation:"Dùng để sắp xếp các ý theo thứ tự.",
    note:"Thường dùng khi trình bày hoặc giải thích."
  },

  {
    id:"hsk4_83",
    pattern:"于是",
    title:"于是 — thế là, vì vậy",
    structure:"A，于是 + B",
    example:"他发现自己走错了，于是马上回头。",
    pinyin:"Tā fāxiàn zìjǐ zǒu cuò le, yúshì mǎshàng huítóu.",
    meaning:"Anh ấy phát hiện mình đi nhầm, thế là lập tức quay lại.",
    examples:[{tag:"Câu gốc",zh:"他发现自己走错了，于是马上回头。",py:"Tā fāxiàn zìjǐ zǒu cuò le, yúshì mǎshàng huítóu.",vi:"Anh ấy phát hiện mình đi nhầm, thế là lập tức quay lại."},{tag:"Ở nhà",zh:"妈妈告诉我：他发现自己走错了，于是马上回头。",py:"Māma gàosu wǒ: Tā fāxiàn zìjǐ zǒu cuò le, yúshì mǎshàng huítóu.",vi:"Mẹ bảo tôi: Anh ấy phát hiện mình đi nhầm, thế là lập tức quay lại."},{tag:"Ở trường",zh:"在学校，他发现自己走错了，于是马上回头。",py:"Zài xuéxiào, Tā fāxiàn zìjǐ zǒu cuò le, yúshì mǎshàng huítóu.",vi:"Ở trường, Anh ấy phát hiện mình đi nhầm, thế là lập tức quay lại."},{tag:"Lúc đi làm",zh:"上班的时候，他发现自己走错了，于是马上回头。",py:"Shàngbān de shíhou, Tā fāxiàn zìjǐ zǒu cuò le, yúshì mǎshàng huítóu.",vi:"Lúc đi làm, Anh ấy phát hiện mình đi nhầm, thế là lập tức quay lại."}],
    explanation:"于是 nối một hành động hoặc kết quả xảy ra sau tình huống trước.",
    note:"Thường dùng để kể lại diễn biến."
  },

  {
    id:"hsk4_84",
    pattern:"连……也/都……",
    title:"连……也/都…… — ngay cả... cũng...",
    structure:"连 + N + 也/都 + V",
    example:"他太忙了，连饭都没时间吃。",
    pinyin:"Tā tài máng le, lián fàn dōu méi shíjiān chī.",
    meaning:"Anh ấy bận quá, ngay cả cơm cũng không có thời gian ăn.",
    examples:[{tag:"Câu gốc",zh:"他太忙了，连饭都没时间吃。",py:"Tā tài máng le, lián fàn dōu méi shíjiān chī.",vi:"Anh ấy bận quá, ngay cả cơm cũng không có thời gian ăn."},{tag:"Ở nhà",zh:"妈妈告诉我：他太忙了，连饭都没时间吃。",py:"Māma gàosu wǒ: Tā tài máng le, lián fàn dōu méi shíjiān chī.",vi:"Mẹ bảo tôi: Anh ấy bận quá, ngay cả cơm cũng không có thời gian ăn."},{tag:"Ở trường",zh:"在学校，他太忙了，连饭都没时间吃。",py:"Zài xuéxiào, Tā tài máng le, lián fàn dōu méi shíjiān chī.",vi:"Ở trường, Anh ấy bận quá, ngay cả cơm cũng không có thời gian ăn."},{tag:"Lúc đi làm",zh:"上班的时候，他太忙了，连饭都没时间吃。",py:"Shàngbān de shíhou, Tā tài máng le, lián fàn dōu méi shíjiān chī.",vi:"Lúc đi làm, Anh ấy bận quá, ngay cả cơm cũng không có thời gian ăn."}],
    explanation:"连 nhấn mạnh một đối tượng được xem là cực đoan hoặc bất ngờ.",
    note:"连……也/都……."
  },

  {
    id:"hsk4_85",
    pattern:"不是……就是……",
    title:"不是……就是…… — hoặc là... hoặc là...",
    structure:"不是 + A，就是 + B",
    example:"周末他不是在家，就是在图书馆。",
    pinyin:"Zhōumò tā bú shì zài jiā, jiù shì zài túshūguǎn.",
    meaning:"Cuối tuần anh ấy hoặc ở nhà, hoặc ở thư viện.",
    examples:[{tag:"Câu gốc",zh:"周末他不是在家，就是在图书馆。",py:"Zhōumò tā bú shì zài jiā, jiù shì zài túshūguǎn.",vi:"Cuối tuần anh ấy hoặc ở nhà, hoặc ở thư viện."},{tag:"Tình huống khác",zh:"周末她不是在家，就是在图书馆。",py:"Zhōumò Tā bú shì zài jiā, jiù shì zài túshūguǎn.",vi:"Cuối tuần anh ấy hoặc ở nhà, hoặc ở thư viện."},{tag:"Tình huống khác",zh:"周末他不是在家，就是在图地图馆。",py:"Zhōumò tā bú shì zài jiā, jiù shì zài túdìtúguǎn.",vi:"Cuối tuần anh ấy hoặc ở nhà, hoặc ở thư viện."},{tag:"Tình huống khác",zh:"周末他不是在家，就是在图报纸馆。",py:"Zhōumò tā bú shì zài jiā, jiù shì zài túbàozhǐguǎn.",vi:"Cuối tuần anh ấy hoặc ở nhà, hoặc ở thư viện."},{tag:"Tình huống khác",zh:"周末他不是在学校，就是在图书馆。",py:"Zhōumò tā bú shì zài xuéxiào, jiù shì zài túshūguǎn.",vi:"Cuối tuần anh ấy hoặc ở trường, hoặc ở thư viện."}],
    explanation:"Biểu thị hai khả năng lựa chọn.",
    note:"不是……就是……."
  },

  {
    id:"hsk4_86",
    pattern:"尽管……但是……",
    title:"尽管……但是…… — mặc dù... nhưng...",
    structure:"尽管 + A，但是 + B",
    example:"尽管工作很累，但是他还是坚持下来了。",
    pinyin:"Jǐnguǎn gōngzuò hěn lèi, dànshì tā háishi jiānchí xiàlái le.",
    meaning:"Mặc dù công việc rất mệt, nhưng anh ấy vẫn kiên trì.",
    examples:[{tag:"Câu gốc",zh:"尽管工作很累，但是他还是坚持下来了。",py:"Jǐnguǎn gōngzuò hěn lèi, dànshì tā háishi jiānchí xiàlái le.",vi:"Mặc dù công việc rất mệt, nhưng anh ấy vẫn kiên trì."},{tag:"Ở nhà",zh:"妈妈告诉我：尽管工作很累，但是他还是坚持下来了。",py:"Māma gàosu wǒ: Jǐnguǎn gōngzuò hěn lèi, dànshì tā háishi jiānchí xiàlái le.",vi:"Mẹ bảo tôi: Mặc dù công việc rất mệt, nhưng anh ấy vẫn kiên trì."},{tag:"Ở trường",zh:"在学校，尽管工作很累，但是他还是坚持下来了。",py:"Zài xuéxiào, Jǐnguǎn gōngzuò hěn lèi, dànshì tā háishi jiānchí xiàlái le.",vi:"Ở trường, Mặc dù công việc rất mệt, nhưng anh ấy vẫn kiên trì."},{tag:"Lúc đi làm",zh:"上班的时候，尽管工作很累，但是他还是坚持下来了。",py:"Shàngbān de shíhou, Jǐnguǎn gōngzuò hěn lèi, dànshì tā háishi jiānchí xiàlái le.",vi:"Lúc đi làm, Mặc dù công việc rất mệt, nhưng anh ấy vẫn kiên trì."}],
    explanation:"Biểu thị quan hệ nhượng bộ và chuyển ý.",
    note:"尽管……但是……."
  },

  {
    id:"hsk4_87",
    pattern:"否则",
    title:"否则 — nếu không thì",
    structure:"A，否则 + B",
    example:"你快一点儿，否则就赶不上车了。",
    pinyin:"Nǐ kuài yìdiǎnr, fǒuzé jiù gǎn bu shàng chē le.",
    meaning:"Bạn nhanh lên một chút, nếu không sẽ không kịp xe.",
    examples:[{tag:"Câu gốc",zh:"你快一点儿，否则就赶不上车了。",py:"Nǐ kuài yìdiǎnr, fǒuzé jiù gǎn bu shàng chē le.",vi:"Bạn nhanh lên một chút, nếu không sẽ không kịp xe."},{tag:"Ở nhà",zh:"妈妈告诉我：你快一点儿，否则就赶不上车了。",py:"Māma gàosu wǒ: Nǐ kuài yìdiǎnr, fǒuzé jiù gǎn bu shàng chē le.",vi:"Mẹ bảo tôi: Bạn nhanh lên một chút, nếu không sẽ không kịp xe."},{tag:"Ở trường",zh:"在学校，你快一点儿，否则就赶不上车了。",py:"Zài xuéxiào, Nǐ kuài yìdiǎnr, fǒuzé jiù gǎn bu shàng chē le.",vi:"Ở trường, Bạn nhanh lên một chút, nếu không sẽ không kịp xe."},{tag:"Lúc đi làm",zh:"上班的时候，你快一点儿，否则就赶不上车了。",py:"Shàngbān de shíhou, Nǐ kuài yìdiǎnr, fǒuzé jiù gǎn bu shàng chē le.",vi:"Lúc đi làm, Bạn nhanh lên một chút, nếu không sẽ không kịp xe."}],
    explanation:"否则 đưa ra kết quả không mong muốn nếu điều kiện trước không được thực hiện.",
    note:"否则 = nếu không thì."
  },

  {
    id:"hsk4_88",
    pattern:"要是……就……",
    title:"要是……就…… — nếu... thì...",
    structure:"要是 + A，就 + B",
    example:"要是明天下雨，我们就不去了。",
    pinyin:"Yàoshi míngtiān xiàyǔ, wǒmen jiù bú qù le.",
    meaning:"Nếu ngày mai mưa thì chúng ta không đi nữa.",
    examples:[{tag:"Câu gốc",zh:"要是明天下雨，我们就不去了。",py:"Yàoshi míngtiān xiàyǔ, wǒmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng ta không đi nữa."},{tag:"Tình huống khác",zh:"要是明天下雨，妈妈们就不去了。",py:"Yàoshi míngtiān xiàyǔ, Māmamen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng ta không đi nữa."},{tag:"Tình huống khác",zh:"要是明天下雨，老师们就不去了。",py:"Yàoshi míngtiān xiàyǔ, Lǎoshīmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng ta không đi nữa."},{tag:"Tình huống khác",zh:"要是明天下雨，同学们们就不去了。",py:"Yàoshi míngtiān xiàyǔ, Tóngxuémenmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng ta không đi nữa."},{tag:"Tình huống khác",zh:"要是明天下雨，他们就不去了。",py:"Yàoshi míngtiān xiàyǔ, Tāmen jiù bú qù le.",vi:"Nếu ngày mai mưa thì chúng ta không đi nữa."}],
    explanation:"要是 biểu thị giả thiết, tương đương 如果 trong nhiều trường hợp.",
    note:"Khẩu ngữ rất thường gặp."
  },

  {
    id:"hsk4_89",
    pattern:"不管……都……",
    title:"不管……都…… — bất kể... đều...",
    structure:"不管 + A，都 + B",
    example:"不管遇到什么困难，我们都不会放弃。",
    pinyin:"Bùguǎn yùdào shénme kùnnan, wǒmen dōu bú huì fàngqì.",
    meaning:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"不管遇到什么困难，我们都不会放弃。",py:"Bùguǎn yùdào shénme kùnnan, wǒmen dōu bú huì fàngqì.",vi:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，妈妈们都不会放弃。",py:"Bùguǎn yùdào shénme kùnnan, Māmamen dōu bú huì fàngqì.",vi:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，老师们都不会放弃。",py:"Bùguǎn yùdào shénme kùnnan, Lǎoshīmen dōu bú huì fàngqì.",vi:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，同学们们都不会放弃。",py:"Bùguǎn yùdào shénme kùnnan, Tóngxuémenmen dōu bú huì fàngqì.",vi:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，他们都不会放弃。",py:"Bùguǎn yùdào shénme kùnnan, Tāmen dōu bú huì fàngqì.",vi:"Bất kể gặp khó khăn gì, chúng tôi cũng sẽ không bỏ cuộc."}],
    explanation:"Biểu thị kết quả không thay đổi dù điều kiện thay đổi.",
    note:"不管……都……."
  },

  {
    id:"hsk4_90",
    pattern:"无论……都……",
    title:"无论……都…… — bất luận... đều...",
    structure:"无论 + A，都 + B",
    example:"无论发生什么事，他都会帮助你。",
    pinyin:"Wúlùn fāshēng shénme shì, tā dōu huì bāngzhù nǐ.",
    meaning:"Bất luận xảy ra chuyện gì, anh ấy cũng sẽ giúp bạn.",
    examples:[{tag:"Câu gốc",zh:"无论发生什么事，他都会帮助你。",py:"Wúlùn fāshēng shénme shì, tā dōu huì bāngzhù nǐ.",vi:"Bất luận xảy ra chuyện gì, anh ấy cũng sẽ giúp bạn."},{tag:"Ở nhà",zh:"妈妈告诉我：无论发生什么事，他都会帮助你。",py:"Māma gàosu wǒ: Wúlùn fāshēng shénme shì, tā dōu huì bāngzhù nǐ.",vi:"Mẹ bảo tôi: Bất luận xảy ra chuyện gì, anh ấy cũng sẽ giúp bạn."},{tag:"Ở trường",zh:"在学校，无论发生什么事，他都会帮助你。",py:"Zài xuéxiào, Wúlùn fāshēng shénme shì, tā dōu huì bāngzhù nǐ.",vi:"Ở trường, Bất luận xảy ra chuyện gì, anh ấy cũng sẽ giúp bạn."},{tag:"Lúc đi làm",zh:"上班的时候，无论发生什么事，他都会帮助你。",py:"Shàngbān de shíhou, Wúlùn fāshēng shénme shì, tā dōu huì bāngzhù nǐ.",vi:"Lúc đi làm, Bất luận xảy ra chuyện gì, anh ấy cũng sẽ giúp bạn."}],
    explanation:"无论 biểu thị điều kiện không ảnh hưởng đến kết quả.",
    note:"无论……都…… thường gặp trong văn viết."
  },

  {
    id:"hsk4_91",
    pattern:"既然……就……",
    title:"既然……就…… — đã... thì...",
    structure:"既然 + A，就 + B",
    example:"既然大家都同意，我们就开始吧。",
    pinyin:"Jìrán dàjiā dōu tóngyì, wǒmen jiù kāishǐ ba.",
    meaning:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi.",
    examples:[{tag:"Câu gốc",zh:"既然大家都同意，我们就开始吧。",py:"Jìrán dàjiā dōu tóngyì, wǒmen jiù kāishǐ ba.",vi:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi."},{tag:"Tình huống khác",zh:"既然大家都同意，妈妈们就开始吧。",py:"Jìrán dàjiā dōu tóngyì, Māmamen jiù kāishǐ ba.",vi:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi."},{tag:"Tình huống khác",zh:"既然大家都同意，老师们就开始吧。",py:"Jìrán dàjiā dōu tóngyì, Lǎoshīmen jiù kāishǐ ba.",vi:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi."},{tag:"Tình huống khác",zh:"既然大家都同意，同学们们就开始吧。",py:"Jìrán dàjiā dōu tóngyì, Tóngxuémenmen jiù kāishǐ ba.",vi:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi."},{tag:"Tình huống khác",zh:"既然大家都同意，他们就开始吧。",py:"Jìrán dàjiā dōu tóngyì, Tāmen jiù kāishǐ ba.",vi:"Đã mọi người đều đồng ý thì chúng ta bắt đầu thôi."}],
    explanation:"Dùng khi nguyên nhân hoặc điều kiện đã được xác định.",
    note:"既然……就……."
  },

  {
    id:"hsk4_92",
    pattern:"即使……也……",
    title:"即使……也…… — cho dù... cũng...",
    structure:"即使 + A，也 + B",
    example:"即使很困难，我也不会放弃。",
    pinyin:"Jíshǐ hěn kùnnan, wǒ yě bú huì fàngqì.",
    meaning:"Cho dù rất khó khăn, tôi cũng sẽ không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"即使很困难，我也不会放弃。",py:"Jíshǐ hěn kùnnan, wǒ yě bú huì fàngqì.",vi:"Cho dù rất khó khăn, tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"即使很困难，妈妈也不会放弃。",py:"Jíshǐ hěn kùnnan, Māma yě bú huì fàngqì.",vi:"Cho dù rất khó khăn, tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"即使很困难，老师也不会放弃。",py:"Jíshǐ hěn kùnnan, Lǎoshī yě bú huì fàngqì.",vi:"Cho dù rất khó khăn, tôi cũng sẽ không bỏ cuộc."},{tag:"Tình huống khác",zh:"即使很困难，同学们也不会放弃。",py:"Jíshǐ hěn kùnnan, Tóngxuémen yě bú huì fàngqì.",vi:"Cho dù rất khó khăn, tôi cũng sẽ không bỏ cuộc."}],
    explanation:"Biểu thị nhượng bộ giả định.",
    note:"即使……也……."
  },

  {
    id:"hsk4_93",
    pattern:"不……也……",
    title:"不……也…… — dù không... cũng...",
    structure:"不 + V + 也 + V",
    example:"今天不下雨也不会影响我们的计划。",
    pinyin:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng wǒmen de jìhuà.",
    meaning:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi.",
    examples:[{tag:"Câu gốc",zh:"今天不下雨也不会影响我们的计划。",py:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng wǒmen de jìhuà.",vi:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"今天不下雨也不会影响妈妈们的计划。",py:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng Māmamen de jìhuà.",vi:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"今天不下雨也不会影响老师们的计划。",py:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng Lǎoshīmen de jìhuà.",vi:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"今天不下雨也不会影响同学们们的计划。",py:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng Tóngxuémenmen de jìhuà.",vi:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"今天不下雨也不会影响他们的计划。",py:"Jīntiān bù xiàyǔ yě bú huì yǐngxiǎng Tāmen de jìhuà.",vi:"Hôm nay dù không mưa cũng sẽ không ảnh hưởng đến kế hoạch của chúng tôi."}],
    explanation:"Dạng câu rút gọn thể hiện quan hệ điều kiện hoặc nhượng bộ.",
    note:"Cần xem toàn câu để hiểu quan hệ logic."
  },

  {
    id:"hsk4_94",
    pattern:"数词+来+量词",
    title:"数词+来+量词 — khoảng...",
    structure:"数词 + 来 + 量词",
    example:"这里有十来个人。",
    pinyin:"Zhèlǐ yǒu shí lái ge rén.",
    meaning:"Ở đây có khoảng mười người.",
    examples:[{tag:"Câu gốc",zh:"这里有十来个人。",py:"Zhèlǐ yǒu shí lái ge rén.",vi:"Ở đây có khoảng mười người."},{tag:"Ở nhà",zh:"妈妈告诉我：这里有十来个人。",py:"Māma gàosu wǒ: Zhèlǐ yǒu shí lái ge rén.",vi:"Mẹ bảo tôi: Ở đây có khoảng mười người."},{tag:"Ở trường",zh:"在学校，这里有十来个人。",py:"Zài xuéxiào, Zhèlǐ yǒu shí lái ge rén.",vi:"Ở trường, Ở đây có khoảng mười người."},{tag:"Lúc đi làm",zh:"上班的时候，这里有十来个人。",py:"Shàngbān de shíhou, Zhèlǐ yǒu shí lái ge rén.",vi:"Lúc đi làm, Ở đây có khoảng mười người."}],
    explanation:"来 đặt sau số tròn để biểu thị số lượng xấp xỉ.",
    note:"十来个人 = khoảng mười người."
  },

  {
    id:"hsk4_95",
    pattern:"大约/左右/前后",
    title:"大约 / 左右 / 前后 — khoảng",
    structure:"大约/数词 + 左右/前后",
    example:"我们大约需要两个小时左右。",
    pinyin:"Wǒmen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",
    meaning:"Chúng tôi cần khoảng hai tiếng.",
    examples:[{tag:"Câu gốc",zh:"我们大约需要两个小时左右。",py:"Wǒmen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",vi:"Chúng tôi cần khoảng hai tiếng."},{tag:"Tình huống khác",zh:"妈妈们大约需要两个小时左右。",py:"Māmamen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",vi:"Chúng tôi cần khoảng hai tiếng."},{tag:"Tình huống khác",zh:"老师们大约需要两个小时左右。",py:"Lǎoshīmen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",vi:"Chúng tôi cần khoảng hai tiếng."},{tag:"Tình huống khác",zh:"同学们们大约需要两个小时左右。",py:"Tóngxuémenmen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",vi:"Chúng tôi cần khoảng hai tiếng."},{tag:"Tình huống khác",zh:"他们大约需要两个小时左右。",py:"Tāmen dàyuē xūyào liǎng ge xiǎoshí zuǒyòu.",vi:"Họ cần khoảng hai tiếng."}],
    explanation:"Các từ này dùng để biểu thị số lượng hoặc thời gian gần đúng.",
    note:"两个小时左右、三十岁左右、十点前后."
  },

  {
    id:"hsk4_96",
    pattern:"分数",
    title:"分数 — phân số",
    structure:"分母 + 分之 + 分子",
    example:"这项工作已经完成了三分之二。",
    pinyin:"Zhè xiàng gōngzuò yǐjīng wánchéng le sānfēnzhī'èr.",
    meaning:"Công việc này đã hoàn thành hai phần ba.",
    examples:[{tag:"Câu gốc",zh:"这项工作已经完成了三分之二。",py:"Zhè xiàng gōngzuò yǐjīng wánchéng le sānfēnzhī'èr.",vi:"Công việc này đã hoàn thành hai phần ba."},{tag:"Ở nhà",zh:"妈妈告诉我：这项工作已经完成了三分之二。",py:"Māma gàosu wǒ: Zhè xiàng gōngzuò yǐjīng wánchéng le sānfēnzhī'èr.",vi:"Mẹ bảo tôi: Công việc này đã hoàn thành hai phần ba."},{tag:"Ở trường",zh:"在学校，这项工作已经完成了三分之二。",py:"Zài xuéxiào, Zhè xiàng gōngzuò yǐjīng wánchéng le sānfēnzhī'èr.",vi:"Ở trường, Công việc này đã hoàn thành hai phần ba."},{tag:"Lúc đi làm",zh:"上班的时候，这项工作已经完成了三分之二。",py:"Shàngbān de shíhou, Zhè xiàng gōngzuò yǐjīng wánchéng le sānfēnzhī'èr.",vi:"Lúc đi làm, Công việc này đã hoàn thành hai phần ba."}],
    explanation:"Phân số tiếng Trung đọc theo mẫu 分母 + 分之 + 分子.",
    note:"三分之二 = 2/3."
  },

  {
    id:"hsk4_97",
    pattern:"百分数",
    title:"百分数 — phần trăm",
    structure:"百分之 + 数字",
    example:"今年的销售量增加了百分之十。",
    pinyin:"Jīnnián de xiāoshòuliàng zēngjiā le bǎifēnzhī shí.",
    meaning:"Lượng tiêu thụ năm nay tăng 10%.",
    examples:[{tag:"Câu gốc",zh:"今年的销售量增加了百分之十。",py:"Jīnnián de xiāoshòuliàng zēngjiā le bǎifēnzhī shí.",vi:"Lượng tiêu thụ năm nay tăng 10%."},{tag:"Ở nhà",zh:"妈妈告诉我：今年的销售量增加了百分之十。",py:"Māma gàosu wǒ: Jīnnián de xiāoshòuliàng zēngjiā le bǎifēnzhī shí.",vi:"Mẹ bảo tôi: Lượng tiêu thụ năm nay tăng 10%."},{tag:"Ở trường",zh:"在学校，今年的销售量增加了百分之十。",py:"Zài xuéxiào, Jīnnián de xiāoshòuliàng zēngjiā le bǎifēnzhī shí.",vi:"Ở trường, Lượng tiêu thụ năm nay tăng 10%."},{tag:"Lúc đi làm",zh:"上班的时候，今年的销售量增加了百分之十。",py:"Shàngbān de shíhou, Jīnnián de xiāoshòuliàng zēngjiā le bǎifēnzhī shí.",vi:"Lúc đi làm, Lượng tiêu thụ năm nay tăng 10%."}],
    explanation:"百分之 đứng trước số để biểu thị phần trăm.",
    note:"百分之十 = 10%."
  },

  {
    id:"hsk4_98",
    pattern:"倍数",
    title:"倍数 — số lần",
    structure:"A 是 B 的 + 数词 + 倍",
    example:"今年的收入是去年的两倍。",
    pinyin:"Jīnnián de shōurù shì qùnián de liǎng bèi.",
    meaning:"Thu nhập năm nay gấp đôi năm ngoái.",
    examples:[{tag:"Câu gốc",zh:"今年的收入是去年的两倍。",py:"Jīnnián de shōurù shì qùnián de liǎng bèi.",vi:"Thu nhập năm nay gấp đôi năm ngoái."},{tag:"Ở nhà",zh:"妈妈告诉我：今年的收入是去年的两倍。",py:"Māma gàosu wǒ: Jīnnián de shōurù shì qùnián de liǎng bèi.",vi:"Mẹ bảo tôi: Thu nhập năm nay gấp đôi năm ngoái."},{tag:"Ở trường",zh:"在学校，今年的收入是去年的两倍。",py:"Zài xuéxiào, Jīnnián de shōurù shì qùnián de liǎng bèi.",vi:"Ở trường, Thu nhập năm nay gấp đôi năm ngoái."},{tag:"Lúc đi làm",zh:"上班的时候，今年的收入是去年的两倍。",py:"Shàngbān de shíhou, Jīnnián de shōurù shì qùnián de liǎng bèi.",vi:"Lúc đi làm, Thu nhập năm nay gấp đôi năm ngoái."}],
    explanation:"倍 biểu thị quan hệ số lần giữa hai đối tượng.",
    note:"两倍 = gấp hai lần."
  }

],

    5: [

  /* =====================================================
     HSK5 — 125 ĐIỂM NGỮ PHÁP
     Nền: HSK 3.0 — 39 official grammar records
     Triển khai sư phạm thành 125 điểm học
  ===================================================== */

  {
    id:"hsk5_01",
    pattern:"头语素",
    title:"头语素 — hậu tố danh từ",
    structure:"词根 + 头",
    example:"石头很重。",
    pinyin:"Shítou hěn zhòng.",
    meaning:"Tảng đá rất nặng.",
    explanation:"头 có thể đứng sau một số yếu tố để tạo danh từ.",
    note:"Không phải mọi danh từ đều có thể thêm 头."
  },

  {
    id:"hsk5_02",
    pattern:"后缀",
    title:"后缀 — hậu tố",
    structure:"词根 + 后缀",
    example:"我们应该尊重老人。",
    pinyin:"Wǒmen yīnggāi zūnzhòng lǎorén.",
    meaning:"Chúng ta nên tôn trọng người già.",
    examples:[{tag:"Câu gốc",zh:"我们应该尊重老人。",py:"Wǒmen yīnggāi zūnzhòng lǎorén.",vi:"Chúng ta nên tôn trọng người già."},{tag:"Tình huống khác",zh:"妈妈们应该尊重老人。",py:"Māmamen yīnggāi zūnzhòng lǎorén.",vi:"Chúng ta nên tôn trọng người già."},{tag:"Tình huống khác",zh:"老师们应该尊重老人。",py:"Lǎoshīmen yīnggāi zūnzhòng lǎorén.",vi:"Chúng ta nên tôn trọng người già."},{tag:"Tình huống khác",zh:"同学们们应该尊重老人。",py:"Tóngxuémenmen yīnggāi zūnzhòng lǎorén.",vi:"Chúng ta nên tôn trọng người già."},{tag:"Tình huống khác",zh:"他们应该尊重老人。",py:"Tāmen yīnggāi zūnzhòng lǎorén.",vi:"Chúng ta nên tôn trọng người già."}],
    explanation:"Một số hậu tố giúp tạo thành từ mới hoặc thay đổi chức năng của từ.",
    note:"Cần học theo từng từ cố định."
  },

  {
    id:"hsk5_03",
    pattern:"彼此",
    title:"彼此 — lẫn nhau",
    structure:"彼此 + V / Adj",
    example:"我们应该彼此尊重。",
    pinyin:"Wǒmen yīnggāi bǐcǐ zūnzhòng.",
    meaning:"Chúng ta nên tôn trọng lẫn nhau.",
    examples:[{tag:"Câu gốc",zh:"我们应该彼此尊重。",py:"Wǒmen yīnggāi bǐcǐ zūnzhòng.",vi:"Chúng ta nên tôn trọng lẫn nhau."},{tag:"Tình huống khác",zh:"妈妈们应该彼此尊重。",py:"Māmamen yīnggāi bǐcǐ zūnzhòng.",vi:"Chúng ta nên tôn trọng lẫn nhau."},{tag:"Tình huống khác",zh:"老师们应该彼此尊重。",py:"Lǎoshīmen yīnggāi bǐcǐ zūnzhòng.",vi:"Chúng ta nên tôn trọng lẫn nhau."},{tag:"Tình huống khác",zh:"同学们们应该彼此尊重。",py:"Tóngxuémenmen yīnggāi bǐcǐ zūnzhòng.",vi:"Chúng ta nên tôn trọng lẫn nhau."},{tag:"Tình huống khác",zh:"他们应该彼此尊重。",py:"Tāmen yīnggāi bǐcǐ zūnzhòng.",vi:"Chúng ta nên tôn trọng lẫn nhau."}],
    explanation:"彼此 biểu thị quan hệ qua lại giữa hai hoặc nhiều bên.",
    note:"Thường dùng trong văn viết và cách nói trang trọng."
  },

  {
    id:"hsk5_04",
    pattern:"如此",
    title:"如此 — như vậy",
    structure:"如此 + Adj / V",
    example:"事情如此复杂。",
    pinyin:"Shìqing rúcǐ fùzá.",
    meaning:"Sự việc phức tạp như vậy.",
    examples:[{tag:"Câu gốc",zh:"事情如此复杂。",py:"Shìqing rúcǐ fùzá.",vi:"Sự việc phức tạp như vậy."},{tag:"Ở nhà",zh:"妈妈告诉我：事情如此复杂。",py:"Māma gàosu wǒ: Shìqing rúcǐ fùzá.",vi:"Mẹ bảo tôi: Sự việc phức tạp như vậy."},{tag:"Ở trường",zh:"在学校，事情如此复杂。",py:"Zài xuéxiào, Shìqing rúcǐ fùzá.",vi:"Ở trường, Sự việc phức tạp như vậy."},{tag:"Lúc đi làm",zh:"上班的时候，事情如此复杂。",py:"Shàngbān de shíhou, Shìqing rúcǐ fùzá.",vi:"Lúc đi làm, Sự việc phức tạp như vậy."}],
    explanation:"如此 có nghĩa gần với 这样, nhưng thường trang trọng hơn.",
    note:"Rất thường gặp trong văn viết."
  },

  {
    id:"hsk5_05",
    pattern:"名词化后缀",
    title:"Hậu tố tạo danh từ",
    structure:"词根 + 后缀",
    example:"这项工作需要专业人员。",
    pinyin:"Zhè xiàng gōngzuò xūyào zhuānyè rényuán.",
    meaning:"Công việc này cần nhân viên chuyên môn.",
    examples:[{tag:"Câu gốc",zh:"这项工作需要专业人员。",py:"Zhè xiàng gōngzuò xūyào zhuānyè rényuán.",vi:"Công việc này cần nhân viên chuyên môn."},{tag:"Ở nhà",zh:"妈妈告诉我：这项工作需要专业人员。",py:"Māma gàosu wǒ: Zhè xiàng gōngzuò xūyào zhuānyè rényuán.",vi:"Mẹ bảo tôi: Công việc này cần nhân viên chuyên môn."},{tag:"Ở trường",zh:"在学校，这项工作需要专业人员。",py:"Zài xuéxiào, Zhè xiàng gōngzuò xūyào zhuānyè rényuán.",vi:"Ở trường, Công việc này cần nhân viên chuyên môn."},{tag:"Lúc đi làm",zh:"上班的时候，这项工作需要专业人员。",py:"Shàngbān de shíhou, Zhè xiàng gōngzuò xūyào zhuānyè rényuán.",vi:"Lúc đi làm, Công việc này cần nhân viên chuyên môn."}],
    explanation:"Một số hậu tố giúp tạo danh từ chỉ người hoặc sự vật.",
    note:"Học cả từ hoàn chỉnh sẽ tự nhiên hơn học hậu tố riêng."
  },

  {
    id:"hsk5_06",
    pattern:"册",
    title:"册 — lượng từ cho sách",
    structure:"数词 + 册 + 书",
    example:"我买了三册书。",
    pinyin:"Wǒ mǎi le sān cè shū.",
    meaning:"Tôi đã mua ba quyển sách.",
    examples:[{tag:"Câu gốc",zh:"我买了三册书。",py:"Wǒ mǎi le sān cè shū.",vi:"Tôi đã mua ba quyển sách."},{tag:"Tình huống khác",zh:"妈妈买了三册书。",py:"Māma mǎi le sān cè shū.",vi:"Mẹ đã mua ba quyển sách."},{tag:"Tình huống khác",zh:"老师买了三册书。",py:"Lǎoshī mǎi le sān cè shū.",vi:"Thầy đã mua ba quyển sách."},{tag:"Tình huống khác",zh:"同学们买了三册书。",py:"Tóngxuémen mǎi le sān cè shū.",vi:"Các bạn đã mua ba quyển sách."},{tag:"Tình huống khác",zh:"我买了三册地图。",py:"Wǒ mǎi le sān cè dìtú.",vi:"Tôi đã mua ba quyển bản đồ."}],
    explanation:"册 là lượng từ dùng cho sách, tài liệu.",
    note:"Thường mang sắc thái trang trọng."
  },

  {
    id:"hsk5_07",
    pattern:"朵",
    title:"朵 — lượng từ cho hoa",
    structure:"数词 + 朵 + 花",
    example:"桌上有一朵花。",
    pinyin:"Zhuō shàng yǒu yì duǒ huā.",
    meaning:"Trên bàn có một bông hoa.",
    examples:[{tag:"Câu gốc",zh:"桌上有一朵花。",py:"Zhuō shàng yǒu yì duǒ huā.",vi:"Trên bàn có một bông hoa."},{tag:"Ở nhà",zh:"妈妈告诉我：桌上有一朵花。",py:"Māma gàosu wǒ: Zhuō shàng yǒu yì duǒ huā.",vi:"Mẹ bảo tôi: Trên bàn có một bông hoa."},{tag:"Ở trường",zh:"在学校，桌上有一朵花。",py:"Zài xuéxiào, Zhuō shàng yǒu yì duǒ huā.",vi:"Ở trường, Trên bàn có một bông hoa."},{tag:"Lúc đi làm",zh:"上班的时候，桌上有一朵花。",py:"Shàngbān de shíhou, Zhuō shàng yǒu yì duǒ huā.",vi:"Lúc đi làm, Trên bàn có một bông hoa."}],
    explanation:"朵 dùng cho hoa và một số vật có hình dạng tương tự.",
    note:"Không dùng chung cho mọi vật có hình tròn."
  },

  {
    id:"hsk5_08",
    pattern:"届",
    title:"届 — kỳ, khóa",
    structure:"第 + 数词 + 届 + 活动",
    example:"这是第五届比赛。",
    pinyin:"Zhè shì dì wǔ jiè bǐsài.",
    meaning:"Đây là cuộc thi lần thứ năm.",
    examples:[{tag:"Câu gốc",zh:"这是第五届比赛。",py:"Zhè shì dì wǔ jiè bǐsài.",vi:"Đây là cuộc thi lần thứ năm."},{tag:"Ở nhà",zh:"妈妈告诉我：这是第五届比赛。",py:"Māma gàosu wǒ: Zhè shì dì wǔ jiè bǐsài.",vi:"Mẹ bảo tôi: Đây là cuộc thi lần thứ năm."},{tag:"Ở trường",zh:"在学校，这是第五届比赛。",py:"Zài xuéxiào, Zhè shì dì wǔ jiè bǐsài.",vi:"Ở trường, Đây là cuộc thi lần thứ năm."},{tag:"Lúc đi làm",zh:"上班的时候，这是第五届比赛。",py:"Shàngbān de shíhou, Zhè shì dì wǔ jiè bǐsài.",vi:"Lúc đi làm, Đây là cuộc thi lần thứ năm."}],
    explanation:"届 dùng cho các kỳ tổ chức của sự kiện.",
    note:"Thường dùng với hội nghị, cuộc thi, đại hội."
  },

  {
    id:"hsk5_09",
    pattern:"颗",
    title:"颗 — lượng từ cho vật nhỏ dạng hạt",
    structure:"数词 + 颗 + N",
    example:"他吃了一颗糖。",
    pinyin:"Tā chī le yì kē táng.",
    meaning:"Anh ấy ăn một viên kẹo.",
    examples:[{tag:"Câu gốc",zh:"他吃了一颗糖。",py:"Tā chī le yì kē táng.",vi:"Anh ấy ăn một viên kẹo."},{tag:"Ở nhà",zh:"妈妈告诉我：他吃了一颗糖。",py:"Māma gàosu wǒ: Tā chī le yì kē táng.",vi:"Mẹ bảo tôi: Anh ấy ăn một viên kẹo."},{tag:"Ở trường",zh:"在学校，他吃了一颗糖。",py:"Zài xuéxiào, Tā chī le yì kē táng.",vi:"Ở trường, Anh ấy ăn một viên kẹo."},{tag:"Lúc đi làm",zh:"上班的时候，他吃了一颗糖。",py:"Shàngbān de shíhou, Tā chī le yì kē táng.",vi:"Lúc đi làm, Anh ấy ăn một viên kẹo."}],
    explanation:"颗 dùng cho vật nhỏ, tròn hoặc giống hạt.",
    note:"Ví dụ: 星星、牙齿、糖."
  },

  {
    id:"hsk5_10",
    pattern:"匹",
    title:"匹 — lượng từ cho ngựa",
    structure:"数词 + 匹 + 马",
    example:"他骑着一匹马。",
    pinyin:"Tā qízhe yì pǐ mǎ.",
    meaning:"Anh ấy đang cưỡi một con ngựa.",
    examples:[{tag:"Câu gốc",zh:"他骑着一匹马。",py:"Tā qízhe yì pǐ mǎ.",vi:"Anh ấy đang cưỡi một con ngựa."},{tag:"Ở nhà",zh:"妈妈告诉我：他骑着一匹马。",py:"Māma gàosu wǒ: Tā qízhe yì pǐ mǎ.",vi:"Mẹ bảo tôi: Anh ấy đang cưỡi một con ngựa."},{tag:"Ở trường",zh:"在学校，他骑着一匹马。",py:"Zài xuéxiào, Tā qízhe yì pǐ mǎ.",vi:"Ở trường, Anh ấy đang cưỡi một con ngựa."},{tag:"Lúc đi làm",zh:"上班的时候，他骑着一匹马。",py:"Shàngbān de shíhou, Tā qízhe yì pǐ mǎ.",vi:"Lúc đi làm, Anh ấy đang cưỡi một con ngựa."}],
    explanation:"匹 là lượng từ truyền thống cho ngựa.",
    note:"Cũng xuất hiện trong một số từ cố định."
  },

  {
    id:"hsk5_11",
    pattern:"行",
    title:"行 — một hàng",
    structure:"一 + 行 + N",
    example:"墙上写着一行字。",
    pinyin:"Qiáng shàng xiězhe yì háng zì.",
    meaning:"Trên tường có viết một hàng chữ.",
    examples:[{tag:"Câu gốc",zh:"墙上写着一行字。",py:"Qiáng shàng xiězhe yì háng zì.",vi:"Trên tường có viết một hàng chữ."},{tag:"Ở nhà",zh:"妈妈告诉我：墙上写着一行字。",py:"Māma gàosu wǒ: Qiáng shàng xiězhe yì háng zì.",vi:"Mẹ bảo tôi: Trên tường có viết một hàng chữ."},{tag:"Ở trường",zh:"在学校，墙上写着一行字。",py:"Zài xuéxiào, Qiáng shàng xiězhe yì háng zì.",vi:"Ở trường, Trên tường có viết một hàng chữ."},{tag:"Lúc đi làm",zh:"上班的时候，墙上写着一行字。",py:"Shàngbān de shíhou, Qiáng shàng xiězhe yì háng zì.",vi:"Lúc đi làm, Trên tường có viết một hàng chữ."}],
    explanation:"行 dùng để chỉ một hàng chữ hoặc vật được xếp thành hàng.",
    note:"Chú ý đọc là háng trong cách dùng này."
  },

  {
    id:"hsk5_12",
    pattern:"架",
    title:"架 — lượng từ cho máy móc, phương tiện",
    structure:"数词 + 架 + 机器",
    example:"公司买了两架飞机。",
    pinyin:"Gōngsī mǎi le liǎng jià fēijī.",
    meaning:"Công ty đã mua hai chiếc máy bay.",
    examples:[{tag:"Câu gốc",zh:"公司买了两架飞机。",py:"Gōngsī mǎi le liǎng jià fēijī.",vi:"Công ty đã mua hai chiếc máy bay."},{tag:"Ở nhà",zh:"妈妈告诉我：公司买了两架飞机。",py:"Māma gàosu wǒ: Gōngsī mǎi le liǎng jià fēijī.",vi:"Mẹ bảo tôi: Công ty đã mua hai chiếc máy bay."},{tag:"Ở trường",zh:"在学校，公司买了两架飞机。",py:"Zài xuéxiào, Gōngsī mǎi le liǎng jià fēijī.",vi:"Ở trường, Công ty đã mua hai chiếc máy bay."},{tag:"Lúc đi làm",zh:"上班的时候，公司买了两架飞机。",py:"Shàngbān de shíhou, Gōngsī mǎi le liǎng jià fēijī.",vi:"Lúc đi làm, Công ty đã mua hai chiếc máy bay."}],
    explanation:"架 dùng cho một số máy móc và phương tiện.",
    note:"Ví dụ thường gặp: 飞机、机器."
  },

  {
    id:"hsk5_13",
    pattern:"群",
    title:"群 — một nhóm",
    structure:"一 + 群 + 人",
    example:"门口站着一群人。",
    pinyin:"Ménkǒu zhànzhe yì qún rén.",
    meaning:"Trước cửa có một nhóm người đang đứng.",
    examples:[{tag:"Câu gốc",zh:"门口站着一群人。",py:"Ménkǒu zhànzhe yì qún rén.",vi:"Trước cửa có một nhóm người đang đứng."},{tag:"Ở nhà",zh:"妈妈告诉我：门口站着一群人。",py:"Māma gàosu wǒ: Ménkǒu zhànzhe yì qún rén.",vi:"Mẹ bảo tôi: Trước cửa có một nhóm người đang đứng."},{tag:"Ở trường",zh:"在学校，门口站着一群人。",py:"Zài xuéxiào, Ménkǒu zhànzhe yì qún rén.",vi:"Ở trường, Trước cửa có một nhóm người đang đứng."},{tag:"Lúc đi làm",zh:"上班的时候，门口站着一群人。",py:"Shàngbān de shíhou, Ménkǒu zhànzhe yì qún rén.",vi:"Lúc đi làm, Trước cửa có một nhóm người đang đứng."}],
    explanation:"群 biểu thị một tập hợp người hoặc động vật.",
    note:"Nhấn mạnh tính tập thể."
  },

  {
    id:"hsk5_14",
    pattern:"支",
    title:"支 — lượng từ",
    structure:"数词 + 支 + N",
    example:"桌上有两支笔。",
    pinyin:"Zhuō shàng yǒu liǎng zhī bǐ.",
    meaning:"Trên bàn có hai chiếc bút.",
    examples:[{tag:"Câu gốc",zh:"桌上有两支笔。",py:"Zhuō shàng yǒu liǎng zhī bǐ.",vi:"Trên bàn có hai chiếc bút."},{tag:"Ở nhà",zh:"妈妈告诉我：桌上有两支笔。",py:"Māma gàosu wǒ: Zhuō shàng yǒu liǎng zhī bǐ.",vi:"Mẹ bảo tôi: Trên bàn có hai chiếc bút."},{tag:"Ở trường",zh:"在学校，桌上有两支笔。",py:"Zài xuéxiào, Zhuō shàng yǒu liǎng zhī bǐ.",vi:"Ở trường, Trên bàn có hai chiếc bút."},{tag:"Lúc đi làm",zh:"上班的时候，桌上有两支笔。",py:"Shàngbān de shíhou, Zhuō shàng yǒu liǎng zhī bǐ.",vi:"Lúc đi làm, Trên bàn có hai chiếc bút."}],
    explanation:"支 thường dùng cho vật dài, mảnh.",
    note:"Ví dụ: 笔、箭、队伍."
  },

  {
    id:"hsk5_15",
    pattern:"根",
    title:"根 — lượng từ cho vật dài",
    structure:"数词 + 根 + N",
    example:"给我一根绳子。",
    pinyin:"Gěi wǒ yì gēn shéngzi.",
    meaning:"Đưa tôi một sợi dây.",
    examples:[{tag:"Câu gốc",zh:"给我一根绳子。",py:"Gěi wǒ yì gēn shéngzi.",vi:"Đưa tôi một sợi dây."},{tag:"Tình huống khác",zh:"给妈妈一根绳子。",py:"Gěi Māma yì gēn shéngzi.",vi:"Đưa tôi một sợi dây."},{tag:"Tình huống khác",zh:"给老师一根绳子。",py:"Gěi Lǎoshī yì gēn shéngzi.",vi:"Đưa tôi một sợi dây."},{tag:"Tình huống khác",zh:"给同学们一根绳子。",py:"Gěi Tóngxuémen yì gēn shéngzi.",vi:"Đưa tôi một sợi dây."}],
    explanation:"根 dùng cho vật dài và dạng que hoặc sợi.",
    note:"Ví dụ: 绳子、棍子、手指."
  },

  {
    id:"hsk5_16",
    pattern:"批",
    title:"批 — một lô",
    structure:"一 + 批 + N",
    example:"第一批货已经到了。",
    pinyin:"Dì yī pī huò yǐjīng dào le.",
    meaning:"Lô hàng đầu tiên đã đến.",
    examples:[{tag:"Câu gốc",zh:"第一批货已经到了。",py:"Dì yī pī huò yǐjīng dào le.",vi:"Lô hàng đầu tiên đã đến."},{tag:"Ở nhà",zh:"妈妈告诉我：第一批货已经到了。",py:"Māma gàosu wǒ: Dì yī pī huò yǐjīng dào le.",vi:"Mẹ bảo tôi: Lô hàng đầu tiên đã đến."},{tag:"Ở trường",zh:"在学校，第一批货已经到了。",py:"Zài xuéxiào, Dì yī pī huò yǐjīng dào le.",vi:"Ở trường, Lô hàng đầu tiên đã đến."},{tag:"Lúc đi làm",zh:"上班的时候，第一批货已经到了。",py:"Shàngbān de shíhou, Dì yī pī huò yǐjīng dào le.",vi:"Lúc đi làm, Lô hàng đầu tiên đã đến."}],
    explanation:"批 dùng để chỉ một nhóm hàng hóa hoặc người được xử lý cùng đợt.",
    note:"Rất thường gặp trong thương mại."
  },

  {
    id:"hsk5_17",
    pattern:"束",
    title:"束 — một bó",
    structure:"一 + 束 + 花",
    example:"她收到了一束花。",
    pinyin:"Tā shōudào le yí shù huā.",
    meaning:"Cô ấy nhận được một bó hoa.",
    examples:[{tag:"Câu gốc",zh:"她收到了一束花。",py:"Tā shōudào le yí shù huā.",vi:"Cô ấy nhận được một bó hoa."},{tag:"Ở nhà",zh:"妈妈告诉我：她收到了一束花。",py:"Māma gàosu wǒ: Tā shōudào le yí shù huā.",vi:"Mẹ bảo tôi: Cô ấy nhận được một bó hoa."},{tag:"Ở trường",zh:"在学校，她收到了一束花。",py:"Zài xuéxiào, Tā shōudào le yí shù huā.",vi:"Ở trường, Cô ấy nhận được một bó hoa."},{tag:"Lúc đi làm",zh:"上班的时候，她收到了一束花。",py:"Shàngbān de shíhou, Tā shōudào le yí shù huā.",vi:"Lúc đi làm, Cô ấy nhận được một bó hoa."}],
    explanation:"束 dùng cho vật được bó lại thành một đơn vị.",
    note:"最常见：一束花."
  },

  {
    id:"hsk5_18",
    pattern:"副",
    title:"副 — một bộ",
    structure:"一 + 副 + N",
    example:"他戴着一副眼镜。",
    pinyin:"Tā dàizhe yí fù yǎnjìng.",
    meaning:"Anh ấy đang đeo một chiếc kính.",
    examples:[{tag:"Câu gốc",zh:"他戴着一副眼镜。",py:"Tā dàizhe yí fù yǎnjìng.",vi:"Anh ấy đang đeo một chiếc kính."},{tag:"Ở nhà",zh:"妈妈告诉我：他戴着一副眼镜。",py:"Māma gàosu wǒ: Tā dàizhe yí fù yǎnjìng.",vi:"Mẹ bảo tôi: Anh ấy đang đeo một chiếc kính."},{tag:"Ở trường",zh:"在学校，他戴着一副眼镜。",py:"Zài xuéxiào, Tā dàizhe yí fù yǎnjìng.",vi:"Ở trường, Anh ấy đang đeo một chiếc kính."},{tag:"Lúc đi làm",zh:"上班的时候，他戴着一副眼镜。",py:"Shàngbān de shíhou, Tā dàizhe yí fù yǎnjìng.",vi:"Lúc đi làm, Anh ấy đang đeo một chiếc kính."}],
    explanation:"副 dùng cho một số vật đi thành bộ hoặc đôi.",
    note:"Ví dụ: 眼镜、手套、对联."
  },

  {
    id:"hsk5_19",
    pattern:"集",
    title:"集 — tập",
    structure:"第 + 数词 + 集",
    example:"我昨天看完了第一集。",
    pinyin:"Wǒ zuótiān kàn wán le dì yī jí.",
    meaning:"Hôm qua tôi đã xem xong tập đầu tiên.",
    examples:[{tag:"Câu gốc",zh:"我昨天看完了第一集。",py:"Wǒ zuótiān kàn wán le dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu tiên."},{tag:"Tình huống khác",zh:"妈妈昨天看完了第一集。",py:"Māma zuótiān kàn wán le dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu tiên."},{tag:"Tình huống khác",zh:"老师昨天看完了第一集。",py:"Lǎoshī zuótiān kàn wán le dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu tiên."},{tag:"Tình huống khác",zh:"同学们昨天看完了第一集。",py:"Tóngxuémen zuótiān kàn wán le dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu tiên."},{tag:"Tình huống khác",zh:"我今天看完了第一集。",py:"Wǒ Jīntiān kàn wán le dì yī jí.",vi:"Hôm nay tôi đã xem xong tập đầu tiên."}],
    explanation:"集 dùng để chỉ một tập của phim hoặc chương trình.",
    note:"Không nhầm với 季."
  },

  {
    id:"hsk5_20",
    pattern:"周",
    title:"周 — tuần",
    structure:"一 + 周",
    example:"我一周工作五天。",
    pinyin:"Wǒ yì zhōu gōngzuò wǔ tiān.",
    meaning:"Một tuần tôi làm việc năm ngày.",
    examples:[{tag:"Câu gốc",zh:"我一周工作五天。",py:"Wǒ yì zhōu gōngzuò wǔ tiān.",vi:"Một tuần tôi làm việc năm ngày."},{tag:"Tình huống khác",zh:"妈妈一周工作五天。",py:"Māma yì zhōu gōngzuò wǔ tiān.",vi:"Một tuần tôi làm việc năm ngày."},{tag:"Tình huống khác",zh:"老师一周工作五天。",py:"Lǎoshī yì zhōu gōngzuò wǔ tiān.",vi:"Một tuần tôi làm việc năm ngày."},{tag:"Tình huống khác",zh:"同学们一周工作五天。",py:"Tóngxuémen yì zhōu gōngzuò wǔ tiān.",vi:"Một tuần tôi làm việc năm ngày."}],
    explanation:"周 là cách nói tuần, thường gặp trong văn viết và giao tiếp.",
    note:"一周 = một tuần."
  },

  {
    id:"hsk5_21",
    pattern:"眼",
    title:"眼 — động lượng từ",
    structure:"看 + 一 + 眼",
    example:"让我看一眼。",
    pinyin:"Ràng wǒ kàn yì yǎn.",
    meaning:"Để tôi xem một chút.",
    examples:[{tag:"Câu gốc",zh:"让我看一眼。",py:"Ràng wǒ kàn yì yǎn.",vi:"Để tôi xem một chút."},{tag:"Tình huống khác",zh:"让妈妈看一眼。",py:"Ràng Māma kàn yì yǎn.",vi:"Để tôi xem một chút."},{tag:"Tình huống khác",zh:"让老师看一眼。",py:"Ràng Lǎoshī kàn yì yǎn.",vi:"Để tôi xem một chút."},{tag:"Tình huống khác",zh:"让同学们看一眼。",py:"Ràng Tóngxuémen kàn yì yǎn.",vi:"Để tôi xem một chút."}],
    explanation:"眼 dùng sau một số động từ chỉ hành động nhìn.",
    note:"Một hành động rất nhanh hoặc ngắn."
  },

  {
    id:"hsk5_22",
    pattern:"过于",
    title:"过于 — quá mức",
    structure:"过于 + Adj",
    example:"这个问题过于复杂。",
    pinyin:"Zhège wèntí guòyú fùzá.",
    meaning:"Vấn đề này quá phức tạp.",
    examples:[{tag:"Câu gốc",zh:"这个问题过于复杂。",py:"Zhège wèntí guòyú fùzá.",vi:"Vấn đề này quá phức tạp."},{tag:"Ở nhà",zh:"妈妈告诉我：这个问题过于复杂。",py:"Māma gàosu wǒ: Zhège wèntí guòyú fùzá.",vi:"Mẹ bảo tôi: Vấn đề này quá phức tạp."},{tag:"Ở trường",zh:"在学校，这个问题过于复杂。",py:"Zài xuéxiào, Zhège wèntí guòyú fùzá.",vi:"Ở trường, Vấn đề này quá phức tạp."},{tag:"Lúc đi làm",zh:"上班的时候，这个问题过于复杂。",py:"Shàngbān de shíhou, Zhège wèntí guòyú fùzá.",vi:"Lúc đi làm, Vấn đề này quá phức tạp."}],
    explanation:"过于 biểu thị mức độ vượt quá mức thích hợp.",
    note:"Thường mang sắc thái đánh giá."
  },

  {
    id:"hsk5_23",
    pattern:"相当",
    title:"相当 — khá, tương đối",
    structure:"相当 + Adj",
    example:"这项工作相当重要。",
    pinyin:"Zhè xiàng gōngzuò xiāngdāng zhòngyào.",
    meaning:"Công việc này khá quan trọng.",
    examples:[{tag:"Câu gốc",zh:"这项工作相当重要。",py:"Zhè xiàng gōngzuò xiāngdāng zhòngyào.",vi:"Công việc này khá quan trọng."},{tag:"Ở nhà",zh:"妈妈告诉我：这项工作相当重要。",py:"Māma gàosu wǒ: Zhè xiàng gōngzuò xiāngdāng zhòngyào.",vi:"Mẹ bảo tôi: Công việc này khá quan trọng."},{tag:"Ở trường",zh:"在学校，这项工作相当重要。",py:"Zài xuéxiào, Zhè xiàng gōngzuò xiāngdāng zhòngyào.",vi:"Ở trường, Công việc này khá quan trọng."},{tag:"Lúc đi làm",zh:"上班的时候，这项工作相当重要。",py:"Shàngbān de shíhou, Zhè xiàng gōngzuò xiāngdāng zhòngyào.",vi:"Lúc đi làm, Công việc này khá quan trọng."}],
    explanation:"相当 có thể biểu thị mức độ tương đối cao.",
    note:"Mức độ mạnh hơn 较 thông thường."
  },

  {
    id:"hsk5_24",
    pattern:"较",
    title:"较 — tương đối",
    structure:"较 + Adj",
    example:"这里的交通较方便。",
    pinyin:"Zhèlǐ de jiāotōng jiào fāngbiàn.",
    meaning:"Giao thông ở đây tương đối thuận tiện.",
    examples:[{tag:"Câu gốc",zh:"这里的交通较方便。",py:"Zhèlǐ de jiāotōng jiào fāngbiàn.",vi:"Giao thông ở đây tương đối thuận tiện."},{tag:"Ở nhà",zh:"妈妈告诉我：这里的交通较方便。",py:"Māma gàosu wǒ: Zhèlǐ de jiāotōng jiào fāngbiàn.",vi:"Mẹ bảo tôi: Giao thông ở đây tương đối thuận tiện."},{tag:"Ở trường",zh:"在学校，这里的交通较方便。",py:"Zài xuéxiào, Zhèlǐ de jiāotōng jiào fāngbiàn.",vi:"Ở trường, Giao thông ở đây tương đối thuận tiện."},{tag:"Lúc đi làm",zh:"上班的时候，这里的交通较方便。",py:"Shàngbān de shíhou, Zhèlǐ de jiāotōng jiào fāngbiàn.",vi:"Lúc đi làm, Giao thông ở đây tương đối thuận tiện."}],
    explanation:"较 thường dùng trong văn viết để biểu thị mức độ so sánh tương đối.",
    note:"Thường trang trọng hơn 比较."
  },

  {
    id:"hsk5_25",
    pattern:"可",
    title:"可 — rất, thật là",
    structure:"可 + Adj",
    example:"这个地方可漂亮了。",
    pinyin:"Zhège dìfang kě piàoliang le.",
    meaning:"Nơi này đẹp thật đấy.",
    examples:[{tag:"Câu gốc",zh:"这个地方可漂亮了。",py:"Zhège dìfang kě piàoliang le.",vi:"Nơi này đẹp thật đấy."},{tag:"Ở nhà",zh:"妈妈告诉我：这个地方可漂亮了。",py:"Māma gàosu wǒ: Zhège dìfang kě piàoliang le.",vi:"Mẹ bảo tôi: Nơi này đẹp thật đấy."},{tag:"Ở trường",zh:"在学校，这个地方可漂亮了。",py:"Zài xuéxiào, Zhège dìfang kě piàoliang le.",vi:"Ở trường, Nơi này đẹp thật đấy."},{tag:"Lúc đi làm",zh:"上班的时候，这个地方可漂亮了。",py:"Shàngbān de shíhou, Zhège dìfang kě piàoliang le.",vi:"Lúc đi làm, Nơi này đẹp thật đấy."}],
    explanation:"可 có thể dùng để nhấn mạnh mức độ trong khẩu ngữ.",
    note:"Thường đi với 了 ở cuối câu."
  },

  {
    id:"hsk5_26",
    pattern:"格外",
    title:"格外 — đặc biệt",
    structure:"格外 + Adj / V",
    example:"今天的天气格外好。",
    pinyin:"Jīntiān de tiānqì géwài hǎo.",
    meaning:"Thời tiết hôm nay đặc biệt đẹp.",
    examples:[{tag:"Câu gốc",zh:"今天的天气格外好。",py:"Jīntiān de tiānqì géwài hǎo.",vi:"Thời tiết hôm nay đặc biệt đẹp."},{tag:"Ở nhà",zh:"妈妈告诉我：今天的天气格外好。",py:"Māma gàosu wǒ: Jīntiān de tiānqì géwài hǎo.",vi:"Mẹ bảo tôi: Thời tiết hôm nay đặc biệt đẹp."},{tag:"Ở trường",zh:"在学校，今天的天气格外好。",py:"Zài xuéxiào, Jīntiān de tiānqì géwài hǎo.",vi:"Ở trường, Thời tiết hôm nay đặc biệt đẹp."},{tag:"Lúc đi làm",zh:"上班的时候，今天的天气格外好。",py:"Shàngbān de shíhou, Jīntiān de tiānqì géwài hǎo.",vi:"Lúc đi làm, Thời tiết hôm nay đặc biệt đẹp."}],
    explanation:"格外 biểu thị mức độ cao hơn bình thường.",
    note:"Thường dùng để nhấn mạnh."
  },

  {
    id:"hsk5_27",
    pattern:"极其",
    title:"极其 — cực kỳ",
    structure:"极其 + Adj",
    example:"这项任务极其重要。",
    pinyin:"Zhè xiàng rènwu jíqí zhòngyào.",
    meaning:"Nhiệm vụ này cực kỳ quan trọng.",
    examples:[{tag:"Câu gốc",zh:"这项任务极其重要。",py:"Zhè xiàng rènwu jíqí zhòngyào.",vi:"Nhiệm vụ này cực kỳ quan trọng."},{tag:"Ở nhà",zh:"妈妈告诉我：这项任务极其重要。",py:"Māma gàosu wǒ: Zhè xiàng rènwu jíqí zhòngyào.",vi:"Mẹ bảo tôi: Nhiệm vụ này cực kỳ quan trọng."},{tag:"Ở trường",zh:"在学校，这项任务极其重要。",py:"Zài xuéxiào, Zhè xiàng rènwu jíqí zhòngyào.",vi:"Ở trường, Nhiệm vụ này cực kỳ quan trọng."},{tag:"Lúc đi làm",zh:"上班的时候，这项任务极其重要。",py:"Shàngbān de shíhou, Zhè xiàng rènwu jíqí zhòngyào.",vi:"Lúc đi làm, Nhiệm vụ này cực kỳ quan trọng."}],
    explanation:"极其 biểu thị mức độ rất cao.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_28",
    pattern:"时刻",
    title:"时刻 — luôn luôn, từng lúc",
    structure:"时刻 + V",
    example:"我们要时刻保持警惕。",
    pinyin:"Wǒmen yào shíkè bǎochí jǐngtì.",
    meaning:"Chúng ta phải luôn giữ cảnh giác.",
    examples:[{tag:"Câu gốc",zh:"我们要时刻保持警惕。",py:"Wǒmen yào shíkè bǎochí jǐngtì.",vi:"Chúng ta phải luôn giữ cảnh giác."},{tag:"Tình huống khác",zh:"妈妈们要时刻保持警惕。",py:"Māmamen yào shíkè bǎochí jǐngtì.",vi:"Chúng ta phải luôn giữ cảnh giác."},{tag:"Tình huống khác",zh:"老师们要时刻保持警惕。",py:"Lǎoshīmen yào shíkè bǎochí jǐngtì.",vi:"Chúng ta phải luôn giữ cảnh giác."},{tag:"Tình huống khác",zh:"同学们们要时刻保持警惕。",py:"Tóngxuémenmen yào shíkè bǎochí jǐngtì.",vi:"Chúng ta phải luôn giữ cảnh giác."},{tag:"Tình huống khác",zh:"他们要时刻保持警惕。",py:"Tāmen yào shíkè bǎochí jǐngtì.",vi:"Chúng ta phải luôn giữ cảnh giác."}],
    explanation:"时刻 nhấn mạnh trạng thái được duy trì liên tục.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_29",
    pattern:"曾经",
    title:"曾经 — đã từng",
    structure:"曾经 + V",
    example:"我曾经去过北京。",
    pinyin:"Wǒ céngjīng qùguo Běijīng.",
    meaning:"Tôi từng đến Bắc Kinh.",
    examples:[{tag:"Câu gốc",zh:"我曾经去过北京。",py:"Wǒ céngjīng qùguo Běijīng.",vi:"Tôi từng đến Bắc Kinh."},{tag:"Tình huống khác",zh:"妈妈曾经去过北京。",py:"Māma céngjīng qùguo Běijīng.",vi:"Mẹ từng đến Bắc Kinh."},{tag:"Tình huống khác",zh:"老师曾经去过北京。",py:"Lǎoshī céngjīng qùguo Běijīng.",vi:"Thầy từng đến Bắc Kinh."},{tag:"Tình huống khác",zh:"同学们曾经去过北京。",py:"Tóngxuémen céngjīng qùguo Běijīng.",vi:"Các bạn từng đến Bắc Kinh."},{tag:"Tình huống khác",zh:"我曾经去过河内。",py:"Wǒ céngjīng qùguo Hénèi.",vi:"Tôi từng đến Hà Nội."}],
    explanation:"曾经 biểu thị một trải nghiệm hoặc trạng thái trong quá khứ.",
    note:"Thường kết hợp với 过."
  },

  {
    id:"hsk5_30",
    pattern:"立刻",
    title:"立刻 — lập tức",
    structure:"立刻 + V",
    example:"请立刻离开这里。",
    pinyin:"Qǐng lìkè líkāi zhèlǐ.",
    meaning:"Hãy lập tức rời khỏi đây.",
    examples:[{tag:"Câu gốc",zh:"请立刻离开这里。",py:"Qǐng lìkè líkāi zhèlǐ.",vi:"Hãy lập tức rời khỏi đây."},{tag:"Ở nhà",zh:"妈妈告诉我：请立刻离开这里。",py:"Māma gàosu wǒ: Qǐng lìkè líkāi zhèlǐ.",vi:"Mẹ bảo tôi: Hãy lập tức rời khỏi đây."},{tag:"Ở trường",zh:"在学校，请立刻离开这里。",py:"Zài xuéxiào, Qǐng lìkè líkāi zhèlǐ.",vi:"Ở trường, Hãy lập tức rời khỏi đây."},{tag:"Lúc đi làm",zh:"上班的时候，请立刻离开这里。",py:"Shàngbān de shíhou, Qǐng lìkè líkāi zhèlǐ.",vi:"Lúc đi làm, Hãy lập tức rời khỏi đây."}],
    explanation:"立刻 biểu thị hành động xảy ra ngay sau thời điểm nói.",
    note:"Mạnh hơn 很快."
  },

  {
    id:"hsk5_31",
    pattern:"连忙",
    title:"连忙 — vội vàng",
    structure:"连忙 + V",
    example:"他连忙站起来。",
    pinyin:"Tā liánmáng zhàn qǐlai.",
    meaning:"Anh ấy vội vàng đứng dậy.",
    examples:[{tag:"Câu gốc",zh:"他连忙站起来。",py:"Tā liánmáng zhàn qǐlai.",vi:"Anh ấy vội vàng đứng dậy."},{tag:"Ở nhà",zh:"妈妈告诉我：他连忙站起来。",py:"Māma gàosu wǒ: Tā liánmáng zhàn qǐlai.",vi:"Mẹ bảo tôi: Anh ấy vội vàng đứng dậy."},{tag:"Ở trường",zh:"在学校，他连忙站起来。",py:"Zài xuéxiào, Tā liánmáng zhàn qǐlai.",vi:"Ở trường, Anh ấy vội vàng đứng dậy."},{tag:"Lúc đi làm",zh:"上班的时候，他连忙站起来。",py:"Shàngbān de shíhou, Tā liánmáng zhàn qǐlai.",vi:"Lúc đi làm, Anh ấy vội vàng đứng dậy."}],
    explanation:"連忙 nhấn mạnh phản ứng nhanh trước một tình huống.",
    note:"Thường dùng với hành động ngay lập tức."
  },

  {
    id:"hsk5_32",
    pattern:"始终",
    title:"始终 — từ đầu đến cuối",
    structure:"始终 + V / Adj",
    example:"他始终没有放弃。",
    pinyin:"Tā shǐzhōng méiyǒu fàngqì.",
    meaning:"Anh ấy từ đầu đến cuối vẫn không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"他始终没有放弃。",py:"Tā shǐzhōng méiyǒu fàngqì.",vi:"Anh ấy từ đầu đến cuối vẫn không bỏ cuộc."},{tag:"Ở nhà",zh:"妈妈告诉我：他始终没有放弃。",py:"Māma gàosu wǒ: Tā shǐzhōng méiyǒu fàngqì.",vi:"Mẹ bảo tôi: Anh ấy từ đầu đến cuối vẫn không bỏ cuộc."},{tag:"Ở trường",zh:"在学校，他始终没有放弃。",py:"Zài xuéxiào, Tā shǐzhōng méiyǒu fàngqì.",vi:"Ở trường, Anh ấy từ đầu đến cuối vẫn không bỏ cuộc."},{tag:"Lúc đi làm",zh:"上班的时候，他始终没有放弃。",py:"Shàngbān de shíhou, Tā shǐzhōng méiyǒu fàngqì.",vi:"Lúc đi làm, Anh ấy từ đầu đến cuối vẫn không bỏ cuộc."}],
    explanation:"始终 biểu thị trạng thái không thay đổi trong suốt một khoảng thời gian.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_33",
    pattern:"早已",
    title:"早已 — đã từ lâu",
    structure:"早已 + V",
    example:"我早已知道这件事。",
    pinyin:"Wǒ zǎoyǐ zhīdào zhè jiàn shì.",
    meaning:"Tôi đã biết chuyện này từ lâu.",
    examples:[{tag:"Câu gốc",zh:"我早已知道这件事。",py:"Wǒ zǎoyǐ zhīdào zhè jiàn shì.",vi:"Tôi đã biết chuyện này từ lâu."},{tag:"Tình huống khác",zh:"妈妈早已知道这件事。",py:"Māma zǎoyǐ zhīdào zhè jiàn shì.",vi:"Mẹ đã biết chuyện này từ lâu."},{tag:"Tình huống khác",zh:"老师早已知道这件事。",py:"Lǎoshī zǎoyǐ zhīdào zhè jiàn shì.",vi:"Thầy đã biết chuyện này từ lâu."},{tag:"Tình huống khác",zh:"同学们早已知道这件事。",py:"Tóngxuémen zǎoyǐ zhīdào zhè jiàn shì.",vi:"Các bạn đã biết chuyện này từ lâu."}],
    explanation:"早已 nhấn mạnh hành động đã xảy ra từ trước thời điểm nói.",
    note:"Thường mang sắc thái khẳng định."
  },

  {
    id:"hsk5_34",
    pattern:"即将",
    title:"即将 — sắp",
    structure:"即将 + V",
    example:"会议即将开始。",
    pinyin:"Huìyì jíjiāng kāishǐ.",
    meaning:"Cuộc họp sắp bắt đầu.",
    examples:[{tag:"Câu gốc",zh:"会议即将开始。",py:"Huìyì jíjiāng kāishǐ.",vi:"Cuộc họp sắp bắt đầu."},{tag:"Ở nhà",zh:"妈妈告诉我：会议即将开始。",py:"Māma gàosu wǒ: Huìyì jíjiāng kāishǐ.",vi:"Mẹ bảo tôi: Cuộc họp sắp bắt đầu."},{tag:"Ở trường",zh:"在学校，会议即将开始。",py:"Zài xuéxiào, Huìyì jíjiāng kāishǐ.",vi:"Ở trường, Cuộc họp sắp bắt đầu."},{tag:"Lúc đi làm",zh:"上班的时候，会议即将开始。",py:"Shàngbān de shíhou, Huìyì jíjiāng kāishǐ.",vi:"Lúc đi làm, Cuộc họp sắp bắt đầu."}],
    explanation:"即将 biểu thị một sự việc sẽ xảy ra trong tương lai rất gần.",
    note:"Trang trọng hơn 快要."
  },

  {
    id:"hsk5_35",
    pattern:"渐渐",
    title:"渐渐 — dần dần",
    structure:"渐渐 + V / Adj",
    example:"天气渐渐暖和起来了。",
    pinyin:"Tiānqì jiànjiàn nuǎnhuo qǐlai le.",
    meaning:"Thời tiết dần dần ấm lên.",
    examples:[{tag:"Câu gốc",zh:"天气渐渐暖和起来了。",py:"Tiānqì jiànjiàn nuǎnhuo qǐlai le.",vi:"Thời tiết dần dần ấm lên."},{tag:"Ở nhà",zh:"妈妈告诉我：天气渐渐暖和起来了。",py:"Māma gàosu wǒ: Tiānqì jiànjiàn nuǎnhuo qǐlai le.",vi:"Mẹ bảo tôi: Thời tiết dần dần ấm lên."},{tag:"Ở trường",zh:"在学校，天气渐渐暖和起来了。",py:"Zài xuéxiào, Tiānqì jiànjiàn nuǎnhuo qǐlai le.",vi:"Ở trường, Thời tiết dần dần ấm lên."},{tag:"Lúc đi làm",zh:"上班的时候，天气渐渐暖和起来了。",py:"Shàngbān de shíhou, Tiānqì jiànjiàn nuǎnhuo qǐlai le.",vi:"Lúc đi làm, Thời tiết dần dần ấm lên."}],
    explanation:"渐渐 biểu thị sự thay đổi diễn ra từng bước.",
    note:"Thường kết hợp với 起来."
  },

  {
    id:"hsk5_36",
    pattern:"尽快",
    title:"尽快 — nhanh nhất có thể",
    structure:"尽快 + V",
    example:"请尽快回复我。",
    pinyin:"Qǐng jǐnkuài huífù wǒ.",
    meaning:"Hãy trả lời tôi sớm nhất có thể.",
    examples:[{tag:"Câu gốc",zh:"请尽快回复我。",py:"Qǐng jǐnkuài huífù wǒ.",vi:"Hãy trả lời tôi sớm nhất có thể."},{tag:"Tình huống khác",zh:"请尽快回复妈妈。",py:"Qǐng jǐnkuài huífù Māma.",vi:"Hãy trả lời tôi sớm nhất có thể."},{tag:"Tình huống khác",zh:"请尽快回复老师。",py:"Qǐng jǐnkuài huífù Lǎoshī.",vi:"Hãy trả lời tôi sớm nhất có thể."},{tag:"Tình huống khác",zh:"请尽快回复同学们。",py:"Qǐng jǐnkuài huífù Tóngxuémen.",vi:"Hãy trả lời tôi sớm nhất có thể."}],
    explanation:"尽快 biểu thị mong muốn hoàn thành việc gì trong thời gian ngắn nhất.",
    note:"Thường dùng trong công việc."
  },

  {
    id:"hsk5_37",
    pattern:"早晚",
    title:"早晚 — sớm muộn",
    structure:"早晚 + 会 / V",
    example:"你早晚会明白的。",
    pinyin:"Nǐ zǎowǎn huì míngbai de.",
    meaning:"Sớm muộn gì bạn cũng sẽ hiểu.",
    examples:[{tag:"Câu gốc",zh:"你早晚会明白的。",py:"Nǐ zǎowǎn huì míngbai de.",vi:"Sớm muộn gì bạn cũng sẽ hiểu."},{tag:"Ở nhà",zh:"妈妈告诉我：你早晚会明白的。",py:"Māma gàosu wǒ: Nǐ zǎowǎn huì míngbai de.",vi:"Mẹ bảo tôi: Sớm muộn gì bạn cũng sẽ hiểu."},{tag:"Ở trường",zh:"在学校，你早晚会明白的。",py:"Zài xuéxiào, Nǐ zǎowǎn huì míngbai de.",vi:"Ở trường, Sớm muộn gì bạn cũng sẽ hiểu."},{tag:"Lúc đi làm",zh:"上班的时候，你早晚会明白的。",py:"Shàngbān de shíhou, Nǐ zǎowǎn huì míngbai de.",vi:"Lúc đi làm, Sớm muộn gì bạn cũng sẽ hiểu."}],
    explanation:"早晚 biểu thị một sự việc chắc chắn sẽ xảy ra vào một thời điểm nào đó.",
    note:"Không nhất thiết chỉ thời gian buổi sáng hoặc buổi tối."
  },

  {
    id:"hsk5_38",
    pattern:"老是",
    title:"老是 — cứ luôn",
    structure:"老是 + V",
    example:"他老是迟到。",
    pinyin:"Tā lǎoshi chídào.",
    meaning:"Anh ấy cứ luôn đi muộn.",
    examples:[{tag:"Câu gốc",zh:"他老是迟到。",py:"Tā lǎoshi chídào.",vi:"Anh ấy cứ luôn đi muộn."},{tag:"Ở nhà",zh:"妈妈告诉我：他老是迟到。",py:"Māma gàosu wǒ: Tā lǎoshi chídào.",vi:"Mẹ bảo tôi: Anh ấy cứ luôn đi muộn."},{tag:"Ở trường",zh:"在学校，他老是迟到。",py:"Zài xuéxiào, Tā lǎoshi chídào.",vi:"Ở trường, Anh ấy cứ luôn đi muộn."},{tag:"Lúc đi làm",zh:"上班的时候，他老是迟到。",py:"Shàngbān de shíhou, Tā lǎoshi chídào.",vi:"Lúc đi làm, Anh ấy cứ luôn đi muộn."}],
    explanation:"老是 biểu thị hành động lặp lại nhiều lần, thường mang sắc thái không hài lòng.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_39",
    pattern:"通常",
    title:"通常 — thông thường",
    structure:"通常 + V",
    example:"我通常坐地铁上班。",
    pinyin:"Wǒ tōngcháng zuò dìtiě shàngbān.",
    meaning:"Tôi thường đi tàu điện ngầm đi làm.",
    examples:[{tag:"Câu gốc",zh:"我通常坐地铁上班。",py:"Wǒ tōngcháng zuò dìtiě shàngbān.",vi:"Tôi thường đi tàu điện ngầm đi làm."},{tag:"Tình huống khác",zh:"妈妈通常坐地铁上班。",py:"Māma tōngcháng zuò dìtiě shàngbān.",vi:"Mẹ thường đi tàu điện ngầm đi làm."},{tag:"Tình huống khác",zh:"老师通常坐地铁上班。",py:"Lǎoshī tōngcháng zuò dìtiě shàngbān.",vi:"Thầy thường đi tàu điện ngầm đi làm."},{tag:"Tình huống khác",zh:"同学们通常坐地铁上班。",py:"Tóngxuémen tōngcháng zuò dìtiě shàngbān.",vi:"Các bạn thường đi tàu điện ngầm đi làm."}],
    explanation:"通常 biểu thị thói quen hoặc tình huống phổ biến.",
    note:"Trung tính hơn 老是."
  },

  {
    id:"hsk5_40",
    pattern:"时常",
    title:"时常 — thường xuyên",
    structure:"时常 + V",
    example:"我们时常联系。",
    pinyin:"Wǒmen shícháng liánxì.",
    meaning:"Chúng tôi thường xuyên liên lạc.",
    examples:[{tag:"Câu gốc",zh:"我们时常联系。",py:"Wǒmen shícháng liánxì.",vi:"Chúng tôi thường xuyên liên lạc."},{tag:"Tình huống khác",zh:"妈妈们时常联系。",py:"Māmamen shícháng liánxì.",vi:"Chúng tôi thường xuyên liên lạc."},{tag:"Tình huống khác",zh:"老师们时常联系。",py:"Lǎoshīmen shícháng liánxì.",vi:"Chúng tôi thường xuyên liên lạc."},{tag:"Tình huống khác",zh:"同学们们时常联系。",py:"Tóngxuémenmen shícháng liánxì.",vi:"Chúng tôi thường xuyên liên lạc."},{tag:"Tình huống khác",zh:"他们时常联系。",py:"Tāmen shícháng liánxì.",vi:"Họ thường xuyên liên lạc."}],
    explanation:"时常 biểu thị hành động xảy ra khá thường xuyên.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_41",
    pattern:"尽量",
    title:"尽量 — cố gắng hết mức",
    structure:"尽量 + V",
    example:"请尽量早点回来。",
    pinyin:"Qǐng jǐnliàng zǎodiǎn huílái.",
    meaning:"Hãy cố gắng về sớm một chút.",
    examples:[{tag:"Câu gốc",zh:"请尽量早点回来。",py:"Qǐng jǐnliàng zǎodiǎn huílái.",vi:"Hãy cố gắng về sớm một chút."},{tag:"Ở nhà",zh:"妈妈告诉我：请尽量早点回来。",py:"Māma gàosu wǒ: Qǐng jǐnliàng zǎodiǎn huílái.",vi:"Mẹ bảo tôi: Hãy cố gắng về sớm một chút."},{tag:"Ở trường",zh:"在学校，请尽量早点回来。",py:"Zài xuéxiào, Qǐng jǐnliàng zǎodiǎn huílái.",vi:"Ở trường, Hãy cố gắng về sớm một chút."},{tag:"Lúc đi làm",zh:"上班的时候，请尽量早点回来。",py:"Shàngbān de shíhou, Qǐng jǐnliàng zǎodiǎn huílái.",vi:"Lúc đi làm, Hãy cố gắng về sớm một chút."}],
    explanation:"尽量 biểu thị cố gắng làm điều gì trong phạm vi có thể.",
    note:"Có thể dùng 尽量少/多 + V."
  },

  {
    id:"hsk5_42",
    pattern:"亲自",
    title:"亲自 — đích thân",
    structure:"亲自 + V",
    example:"经理亲自参加了会议。",
    pinyin:"Jīnglǐ qīnzì cānjiā le huìyì.",
    meaning:"Giám đốc đích thân tham gia cuộc họp.",
    examples:[{tag:"Câu gốc",zh:"经理亲自参加了会议。",py:"Jīnglǐ qīnzì cānjiā le huìyì.",vi:"Giám đốc đích thân tham gia cuộc họp."},{tag:"Ở nhà",zh:"妈妈告诉我：经理亲自参加了会议。",py:"Māma gàosu wǒ: Jīnglǐ qīnzì cānjiā le huìyì.",vi:"Mẹ bảo tôi: Giám đốc đích thân tham gia cuộc họp."},{tag:"Ở trường",zh:"在学校，经理亲自参加了会议。",py:"Zài xuéxiào, Jīnglǐ qīnzì cānjiā le huìyì.",vi:"Ở trường, Giám đốc đích thân tham gia cuộc họp."},{tag:"Lúc đi làm",zh:"上班的时候，经理亲自参加了会议。",py:"Shàngbān de shíhou, Jīnglǐ qīnzì cānjiā le huìyì.",vi:"Lúc đi làm, Giám đốc đích thân tham gia cuộc họp."}],
    explanation:"亲自 nhấn mạnh chính người đó trực tiếp thực hiện hành động.",
    note:"Không chỉ đơn giản là 自己."
  },

  {
    id:"hsk5_43",
    pattern:"便",
    title:"便 — liền, bèn",
    structure:"……，便 + V",
    example:"他吃完饭便回家了。",
    pinyin:"Tā chī wán fàn biàn huí jiā le.",
    meaning:"Ăn cơm xong anh ấy liền về nhà.",
    examples:[{tag:"Câu gốc",zh:"他吃完饭便回家了。",py:"Tā chī wán fàn biàn huí jiā le.",vi:"Ăn cơm xong anh ấy liền về nhà."},{tag:"Tình huống khác",zh:"她吃完饭便回家了。",py:"Tā chī wán fàn biàn huí jiā le.",vi:"Ăn cơm xong anh ấy liền về nhà."},{tag:"Tình huống khác",zh:"他吃完面便回家了。",py:"Tā chī wán miàn biàn huí jiā le.",vi:"Ăn mì xong anh ấy liền về nhà."},{tag:"Tình huống khác",zh:"他吃完饭便回学校了。",py:"Tā chī wán fàn biàn huí xuéxiào le.",vi:"Ăn cơm xong anh ấy liền về trường."}],
    explanation:"便 biểu thị hành động xảy ra ngay sau hành động trước.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_44",
    pattern:"一旦",
    title:"一旦……就……",
    structure:"一旦 + S + V，就 + S + V",
    example:"一旦决定了，就不要后悔。",
    pinyin:"Yídàn juédìng le, jiù bú yào hòuhuǐ.",
    meaning:"Một khi đã quyết định thì đừng hối hận.",
    examples:[{tag:"Câu gốc",zh:"一旦决定了，就不要后悔。",py:"Yídàn juédìng le, jiù bú yào hòuhuǐ.",vi:"Một khi đã quyết định thì đừng hối hận."},{tag:"Ở nhà",zh:"妈妈告诉我：一旦决定了，就不要后悔。",py:"Māma gàosu wǒ: Yídàn juédìng le, jiù bú yào hòuhuǐ.",vi:"Mẹ bảo tôi: Một khi đã quyết định thì đừng hối hận."},{tag:"Ở trường",zh:"在学校，一旦决定了，就不要后悔。",py:"Zài xuéxiào, Yídàn juédìng le, jiù bú yào hòuhuǐ.",vi:"Ở trường, Một khi đã quyết định thì đừng hối hận."},{tag:"Lúc đi làm",zh:"上班的时候，一旦决定了，就不要后悔。",py:"Shàngbān de shíhou, Yídàn juédìng le, jiù bú yào hòuhuǐ.",vi:"Lúc đi làm, Một khi đã quyết định thì đừng hối hận."}],
    explanation:"一旦 biểu thị điều kiện có khả năng xảy ra và khi xảy ra sẽ dẫn đến kết quả.",
    note:"Thường đi với 就."
  },

  {
    id:"hsk5_45",
    pattern:"似乎",
    title:"似乎 — dường như",
    structure:"似乎 + V / Adj",
    example:"他似乎不太高兴。",
    pinyin:"Tā sìhū bú tài gāoxìng.",
    meaning:"Anh ấy dường như không vui lắm.",
    examples:[{tag:"Câu gốc",zh:"他似乎不太高兴。",py:"Tā sìhū bú tài gāoxìng.",vi:"Anh ấy dường như không vui lắm."},{tag:"Ở nhà",zh:"妈妈告诉我：他似乎不太高兴。",py:"Māma gàosu wǒ: Tā sìhū bú tài gāoxìng.",vi:"Mẹ bảo tôi: Anh ấy dường như không vui lắm."},{tag:"Ở trường",zh:"在学校，他似乎不太高兴。",py:"Zài xuéxiào, Tā sìhū bú tài gāoxìng.",vi:"Ở trường, Anh ấy dường như không vui lắm."},{tag:"Lúc đi làm",zh:"上班的时候，他似乎不太高兴。",py:"Shàngbān de shíhou, Tā sìhū bú tài gāoxìng.",vi:"Lúc đi làm, Anh ấy dường như không vui lắm."}],
    explanation:"似乎 biểu thị phán đoán chưa hoàn toàn chắc chắn.",
    note:"Thường dùng khi người nói suy đoán."
  },

  {
    id:"hsk5_46",
    pattern:"仿佛",
    title:"仿佛 — giống như, dường như",
    structure:"仿佛 + V / N",
    example:"她仿佛回到了童年。",
    pinyin:"Tā fǎngfú huí dào le tóngnián.",
    meaning:"Cô ấy như thể đã trở về tuổi thơ.",
    examples:[{tag:"Câu gốc",zh:"她仿佛回到了童年。",py:"Tā fǎngfú huí dào le tóngnián.",vi:"Cô ấy như thể đã trở về tuổi thơ."},{tag:"Ở nhà",zh:"妈妈告诉我：她仿佛回到了童年。",py:"Māma gàosu wǒ: Tā fǎngfú huí dào le tóngnián.",vi:"Mẹ bảo tôi: Cô ấy như thể đã trở về tuổi thơ."},{tag:"Ở trường",zh:"在学校，她仿佛回到了童年。",py:"Zài xuéxiào, Tā fǎngfú huí dào le tóngnián.",vi:"Ở trường, Cô ấy như thể đã trở về tuổi thơ."},{tag:"Lúc đi làm",zh:"上班的时候，她仿佛回到了童年。",py:"Shàngbān de shíhou, Tā fǎngfú huí dào le tóngnián.",vi:"Lúc đi làm, Cô ấy như thể đã trở về tuổi thơ."}],
    explanation:"仿佛 biểu thị cảm giác hoặc sự liên tưởng giống như một điều gì đó.",
    note:"Văn viết hơn 好像."
  },

  {
    id:"hsk5_47",
    pattern:"毕竟",
    title:"毕竟 — dù sao thì",
    structure:"毕竟 + V / Adj",
    example:"他毕竟还是个孩子。",
    pinyin:"Tā bìjìng háishi ge háizi.",
    meaning:"Dù sao thì cậu ấy vẫn là một đứa trẻ.",
    examples:[{tag:"Câu gốc",zh:"他毕竟还是个孩子。",py:"Tā bìjìng háishi ge háizi.",vi:"Dù sao thì cậu ấy vẫn là một đứa trẻ."},{tag:"Ở nhà",zh:"妈妈告诉我：他毕竟还是个孩子。",py:"Māma gàosu wǒ: Tā bìjìng háishi ge háizi.",vi:"Mẹ bảo tôi: Dù sao thì cậu ấy vẫn là một đứa trẻ."},{tag:"Ở trường",zh:"在学校，他毕竟还是个孩子。",py:"Zài xuéxiào, Tā bìjìng háishi ge háizi.",vi:"Ở trường, Dù sao thì cậu ấy vẫn là một đứa trẻ."},{tag:"Lúc đi làm",zh:"上班的时候，他毕竟还是个孩子。",py:"Shàngbān de shíhou, Tā bìjìng háishi ge háizi.",vi:"Lúc đi làm, Dù sao thì cậu ấy vẫn là một đứa trẻ."}],
    explanation:"毕竟 dùng để đưa ra một sự thật cần được tính đến.",
    note:"Thường dùng để bổ sung lý do hoặc căn cứ."
  },

  {
    id:"hsk5_48",
    pattern:"居然",
    title:"居然 — vậy mà, không ngờ",
    structure:"居然 + V",
    example:"他居然真的来了。",
    pinyin:"Tā jūrán zhēn de lái le.",
    meaning:"Không ngờ anh ấy thật sự đã đến.",
    examples:[{tag:"Câu gốc",zh:"他居然真的来了。",py:"Tā jūrán zhēn de lái le.",vi:"Không ngờ anh ấy thật sự đã đến."},{tag:"Ở nhà",zh:"妈妈告诉我：他居然真的来了。",py:"Māma gàosu wǒ: Tā jūrán zhēn de lái le.",vi:"Mẹ bảo tôi: Không ngờ anh ấy thật sự đã đến."},{tag:"Ở trường",zh:"在学校，他居然真的来了。",py:"Zài xuéxiào, Tā jūrán zhēn de lái le.",vi:"Ở trường, Không ngờ anh ấy thật sự đã đến."},{tag:"Lúc đi làm",zh:"上班的时候，他居然真的来了。",py:"Shàngbān de shíhou, Tā jūrán zhēn de lái le.",vi:"Lúc đi làm, Không ngờ anh ấy thật sự đã đến."}],
    explanation:"居然 biểu thị kết quả vượt ngoài dự đoán.",
    note:"Thường mang sắc thái bất ngờ."
  },

  {
    id:"hsk5_49",
    pattern:"反正",
    title:"反正 — đằng nào thì",
    structure:"反正 + S + V",
    example:"反正今天不用上班。",
    pinyin:"Fǎnzhèng jīntiān bú yòng shàngbān.",
    meaning:"Đằng nào hôm nay cũng không phải đi làm.",
    examples:[{tag:"Câu gốc",zh:"反正今天不用上班。",py:"Fǎnzhèng jīntiān bú yòng shàngbān.",vi:"Đằng nào hôm nay cũng không phải đi làm."},{tag:"Ở nhà",zh:"妈妈告诉我：反正今天不用上班。",py:"Māma gàosu wǒ: Fǎnzhèng jīntiān bú yòng shàngbān.",vi:"Mẹ bảo tôi: Đằng nào hôm nay cũng không phải đi làm."},{tag:"Ở trường",zh:"在学校，反正今天不用上班。",py:"Zài xuéxiào, Fǎnzhèng jīntiān bú yòng shàngbān.",vi:"Ở trường, Đằng nào hôm nay cũng không phải đi làm."},{tag:"Lúc đi làm",zh:"上班的时候，反正今天不用上班。",py:"Shàngbān de shíhou, Fǎnzhèng jīntiān bú yòng shàngbān.",vi:"Lúc đi làm, Đằng nào hôm nay cũng không phải đi làm."}],
    explanation:"反正 biểu thị kết quả hoặc tình hình không thay đổi dù xét theo cách nào.",
    note:"Thường dùng trong khẩu ngữ."
  },

  {
    id:"hsk5_50",
    pattern:"根本",
    title:"根本 — hoàn toàn, căn bản",
    structure:"根本 + 不 / 没 + V",
    example:"我根本不知道这件事。",
    pinyin:"Wǒ gēnběn bù zhīdào zhè jiàn shì.",
    meaning:"Tôi hoàn toàn không biết chuyện này.",
    examples:[{tag:"Câu gốc",zh:"我根本不知道这件事。",py:"Wǒ gēnběn bù zhīdào zhè jiàn shì.",vi:"Tôi hoàn toàn không biết chuyện này."},{tag:"Tình huống khác",zh:"妈妈根本不知道这件事。",py:"Māma gēnběn bù zhīdào zhè jiàn shì.",vi:"Mẹ hoàn toàn không biết chuyện này."},{tag:"Tình huống khác",zh:"老师根本不知道这件事。",py:"Lǎoshī gēnběn bù zhīdào zhè jiàn shì.",vi:"Thầy hoàn toàn không biết chuyện này."},{tag:"Tình huống khác",zh:"同学们根本不知道这件事。",py:"Tóngxuémen gēnběn bù zhīdào zhè jiàn shì.",vi:"Các bạn hoàn toàn không biết chuyện này."}],
    explanation:"根本 thường nhấn mạnh phủ định mạnh.",
    note:"Thường đi với 不 hoặc 没."
  },

  {
    id:"hsk5_51",
    pattern:"果然",
    title:"果然 — quả nhiên",
    structure:"果然 + V / Adj",
    example:"他果然来了。",
    pinyin:"Tā guǒrán lái le.",
    meaning:"Quả nhiên anh ấy đã đến.",
    examples:[{tag:"Câu gốc",zh:"他果然来了。",py:"Tā guǒrán lái le.",vi:"Quả nhiên anh ấy đã đến."},{tag:"Ở nhà",zh:"妈妈告诉我：他果然来了。",py:"Māma gàosu wǒ: Tā guǒrán lái le.",vi:"Mẹ bảo tôi: Quả nhiên anh ấy đã đến."},{tag:"Ở trường",zh:"在学校，他果然来了。",py:"Zài xuéxiào, Tā guǒrán lái le.",vi:"Ở trường, Quả nhiên anh ấy đã đến."},{tag:"Lúc đi làm",zh:"上班的时候，他果然来了。",py:"Shàngbān de shíhou, Tā guǒrán lái le.",vi:"Lúc đi làm, Quả nhiên anh ấy đã đến."}],
    explanation:"果然 cho thấy kết quả đúng như dự đoán trước đó.",
    note:"Khác với 居然: 居然 là bất ngờ, 果然 là đúng dự đoán."
  },

  {
    id:"hsk5_52",
    pattern:"简直",
    title:"简直 — quả thực, đúng là",
    structure:"简直 + Adj / V",
    example:"这简直是个奇迹。",
    pinyin:"Zhè jiǎnzhí shì ge qíjì.",
    meaning:"Đây quả thực là một kỳ tích.",
    examples:[{tag:"Câu gốc",zh:"这简直是个奇迹。",py:"Zhè jiǎnzhí shì ge qíjì.",vi:"Đây quả thực là một kỳ tích."},{tag:"Ở nhà",zh:"妈妈告诉我：这简直是个奇迹。",py:"Māma gàosu wǒ: Zhè jiǎnzhí shì ge qíjì.",vi:"Mẹ bảo tôi: Đây quả thực là một kỳ tích."},{tag:"Ở trường",zh:"在学校，这简直是个奇迹。",py:"Zài xuéxiào, Zhè jiǎnzhí shì ge qíjì.",vi:"Ở trường, Đây quả thực là một kỳ tích."},{tag:"Lúc đi làm",zh:"上班的时候，这简直是个奇迹。",py:"Shàngbān de shíhou, Zhè jiǎnzhí shì ge qíjì.",vi:"Lúc đi làm, Đây quả thực là một kỳ tích."}],
    explanation:"简直 dùng để nhấn mạnh mức độ hoặc đánh giá mạnh.",
    note:"Thường mang sắc thái cảm xúc."
  },

  {
    id:"hsk5_53",
    pattern:"绝对",
    title:"绝对 — tuyệt đối",
    structure:"绝对 + V / Adj",
    example:"我绝对不会忘记你。",
    pinyin:"Wǒ juéduì bú huì wàngjì nǐ.",
    meaning:"Tôi tuyệt đối sẽ không quên bạn.",
    examples:[{tag:"Câu gốc",zh:"我绝对不会忘记你。",py:"Wǒ juéduì bú huì wàngjì nǐ.",vi:"Tôi tuyệt đối sẽ không quên bạn."},{tag:"Tình huống khác",zh:"妈妈绝对不会忘记你。",py:"Māma juéduì bú huì wàngjì nǐ.",vi:"Mẹ tuyệt đối sẽ không quên bạn."},{tag:"Tình huống khác",zh:"老师绝对不会忘记你。",py:"Lǎoshī juéduì bú huì wàngjì nǐ.",vi:"Thầy tuyệt đối sẽ không quên bạn."},{tag:"Tình huống khác",zh:"同学们绝对不会忘记你。",py:"Tóngxuémen juéduì bú huì wàngjì nǐ.",vi:"Các bạn tuyệt đối sẽ không quên bạn."}],
    explanation:"绝对 biểu thị mức độ chắc chắn rất cao.",
    note:"Thường dùng để nhấn mạnh lời khẳng định."
  },

  {
    id:"hsk5_54",
    pattern:"的确",
    title:"的确 — quả thật",
    structure:"的确 + V / Adj",
    example:"这的确是一个好办法。",
    pinyin:"Zhè díquè shì yí ge hǎo bànfǎ.",
    meaning:"Đây quả thật là một cách hay.",
    examples:[{tag:"Câu gốc",zh:"这的确是一个好办法。",py:"Zhè díquè shì yí ge hǎo bànfǎ.",vi:"Đây quả thật là một cách hay."},{tag:"Ở nhà",zh:"妈妈告诉我：这的确是一个好办法。",py:"Māma gàosu wǒ: Zhè díquè shì yí ge hǎo bànfǎ.",vi:"Mẹ bảo tôi: Đây quả thật là một cách hay."},{tag:"Ở trường",zh:"在学校，这的确是一个好办法。",py:"Zài xuéxiào, Zhè díquè shì yí ge hǎo bànfǎ.",vi:"Ở trường, Đây quả thật là một cách hay."},{tag:"Lúc đi làm",zh:"上班的时候，这的确是一个好办法。",py:"Shàngbān de shíhou, Zhè díquè shì yí ge hǎo bànfǎ.",vi:"Lúc đi làm, Đây quả thật là một cách hay."}],
    explanation:"的确 xác nhận một nhận định là đúng.",
    note:"Thường dùng trong văn viết và phát biểu nghiêm túc."
  },

  {
    id:"hsk5_55",
    pattern:"反而",
    title:"反而 — ngược lại",
    structure:"……，反而……",
    example:"他没有生气，反而笑了。",
    pinyin:"Tā méiyǒu shēngqì, fǎn'ér xiào le.",
    meaning:"Anh ấy không tức giận mà ngược lại còn cười.",
    examples:[{tag:"Câu gốc",zh:"他没有生气，反而笑了。",py:"Tā méiyǒu shēngqì, fǎn'ér xiào le.",vi:"Anh ấy không tức giận mà ngược lại còn cười."},{tag:"Ở nhà",zh:"妈妈告诉我：他没有生气，反而笑了。",py:"Māma gàosu wǒ: Tā méiyǒu shēngqì, fǎn'ér xiào le.",vi:"Mẹ bảo tôi: Anh ấy không tức giận mà ngược lại còn cười."},{tag:"Ở trường",zh:"在学校，他没有生气，反而笑了。",py:"Zài xuéxiào, Tā méiyǒu shēngqì, fǎn'ér xiào le.",vi:"Ở trường, Anh ấy không tức giận mà ngược lại còn cười."},{tag:"Lúc đi làm",zh:"上班的时候，他没有生气，反而笑了。",py:"Shàngbān de shíhou, Tā méiyǒu shēngqì, fǎn'ér xiào le.",vi:"Lúc đi làm, Anh ấy không tức giận mà ngược lại còn cười."}],
    explanation:"反而 biểu thị kết quả trái với điều người ta dự đoán.",
    note:"Thường dùng để tạo sự đối lập."
  },

  {
    id:"hsk5_56",
    pattern:"白",
    title:"白 — uổng công",
    structure:"白 + V",
    example:"你白等了这么久。",
    pinyin:"Nǐ bái děng le zhème jiǔ.",
    meaning:"Bạn đã uổng công chờ lâu như vậy.",
    examples:[{tag:"Câu gốc",zh:"你白等了这么久。",py:"Nǐ bái děng le zhème jiǔ.",vi:"Bạn đã uổng công chờ lâu như vậy."},{tag:"Ở nhà",zh:"妈妈告诉我：你白等了这么久。",py:"Māma gàosu wǒ: Nǐ bái děng le zhème jiǔ.",vi:"Mẹ bảo tôi: Bạn đã uổng công chờ lâu như vậy."},{tag:"Ở trường",zh:"在学校，你白等了这么久。",py:"Zài xuéxiào, Nǐ bái děng le zhème jiǔ.",vi:"Ở trường, Bạn đã uổng công chờ lâu như vậy."},{tag:"Lúc đi làm",zh:"上班的时候，你白等了这么久。",py:"Shàngbān de shíhou, Nǐ bái děng le zhème jiǔ.",vi:"Lúc đi làm, Bạn đã uổng công chờ lâu như vậy."}],
    explanation:"白 biểu thị hành động được thực hiện nhưng không đạt kết quả mong muốn.",
    note:"Có sắc thái tiếc công sức."
  },

  {
    id:"hsk5_57",
    pattern:"刚好",
    title:"刚好 — vừa đúng, vừa hay",
    structure:"刚好 + V / Adj",
    example:"我刚好有时间。",
    pinyin:"Wǒ gānghǎo yǒu shíjiān.",
    meaning:"Tôi vừa hay có thời gian.",
    examples:[{tag:"Câu gốc",zh:"我刚好有时间。",py:"Wǒ gānghǎo yǒu shíjiān.",vi:"Tôi vừa hay có thời gian."},{tag:"Tình huống khác",zh:"妈妈刚好有时间。",py:"Māma gānghǎo yǒu shíjiān.",vi:"Mẹ vừa hay có thời gian."},{tag:"Tình huống khác",zh:"老师刚好有时间。",py:"Lǎoshī gānghǎo yǒu shíjiān.",vi:"Thầy vừa hay có thời gian."},{tag:"Tình huống khác",zh:"同学们刚好有时间。",py:"Tóngxuémen gānghǎo yǒu shíjiān.",vi:"Các bạn vừa hay có thời gian."}],
    explanation:"刚好 biểu thị sự phù hợp hoặc đúng lúc.",
    note:"Có thể biểu thị sự trùng hợp."
  },

  {
    id:"hsk5_58",
    pattern:"可3",
    title:"可 — nhấn mạnh",
    structure:"可 + Adj / 真",
    example:"这件事可重要了。",
    pinyin:"Zhè jiàn shì kě zhòngyào le.",
    meaning:"Chuyện này quan trọng lắm đấy.",
    examples:[{tag:"Câu gốc",zh:"这件事可重要了。",py:"Zhè jiàn shì kě zhòngyào le.",vi:"Chuyện này quan trọng lắm đấy."},{tag:"Ở nhà",zh:"妈妈告诉我：这件事可重要了。",py:"Māma gàosu wǒ: Zhè jiàn shì kě zhòngyào le.",vi:"Mẹ bảo tôi: Chuyện này quan trọng lắm đấy."},{tag:"Ở trường",zh:"在学校，这件事可重要了。",py:"Zài xuéxiào, Zhè jiàn shì kě zhòngyào le.",vi:"Ở trường, Chuyện này quan trọng lắm đấy."},{tag:"Lúc đi làm",zh:"上班的时候，这件事可重要了。",py:"Shàngbān de shíhou, Zhè jiàn shì kě zhòngyào le.",vi:"Lúc đi làm, Chuyện này quan trọng lắm đấy."}],
    explanation:"可 có thể dùng như phó từ nhấn mạnh mức độ.",
    note:"Khác với 可 để biểu thị khả năng hoặc lựa chọn."
  },

  {
    id:"hsk5_59",
    pattern:"自从",
    title:"自从……以来",
    structure:"自从 + thời gian / sự kiện + 以来，……",
    example:"自从毕业以来，我一直在这里工作。",
    pinyin:"Zìcóng bìyè yǐlái, wǒ yìzhí zài zhèlǐ gōngzuò.",
    meaning:"Từ khi tốt nghiệp đến nay, tôi vẫn làm việc ở đây.",
    examples:[{tag:"Câu gốc",zh:"自从毕业以来，我一直在这里工作。",py:"Zìcóng bìyè yǐlái, wǒ yìzhí zài zhèlǐ gōngzuò.",vi:"Từ khi tốt nghiệp đến nay, tôi vẫn làm việc ở đây."},{tag:"Tình huống khác",zh:"自从毕业以来，妈妈一直在这里工作。",py:"Zìcóng bìyè yǐlái, Māma yìzhí zài zhèlǐ gōngzuò.",vi:"Từ khi tốt nghiệp đến nay, tôi vẫn làm việc ở đây."},{tag:"Tình huống khác",zh:"自从毕业以来，老师一直在这里工作。",py:"Zìcóng bìyè yǐlái, Lǎoshī yìzhí zài zhèlǐ gōngzuò.",vi:"Từ khi tốt nghiệp đến nay, tôi vẫn làm việc ở đây."},{tag:"Tình huống khác",zh:"自从毕业以来，同学们一直在这里工作。",py:"Zìcóng bìyè yǐlái, Tóngxuémen yìzhí zài zhèlǐ gōngzuò.",vi:"Từ khi tốt nghiệp đến nay, tôi vẫn làm việc ở đây."}],
    explanation:"自从 xác định mốc bắt đầu của một trạng thái hoặc hành động kéo dài.",
    note:"Thường kết hợp với 一直."
  },

  {
    id:"hsk5_60",
    pattern:"朝",
    title:"朝 — hướng về",
    structure:"朝 + 方向 + V",
    example:"他朝我走过来。",
    pinyin:"Tā cháo wǒ zǒu guòlái.",
    meaning:"Anh ấy đi về phía tôi.",
    examples:[{tag:"Câu gốc",zh:"他朝我走过来。",py:"Tā cháo wǒ zǒu guòlái.",vi:"Anh ấy đi về phía tôi."},{tag:"Tình huống khác",zh:"他朝妈妈走过来。",py:"Tā cháo Māma zǒu guòlái.",vi:"Anh ấy đi về phía tôi."},{tag:"Tình huống khác",zh:"他朝老师走过来。",py:"Tā cháo Lǎoshī zǒu guòlái.",vi:"Anh ấy đi về phía tôi."},{tag:"Tình huống khác",zh:"他朝同学们走过来。",py:"Tā cháo Tóngxuémen zǒu guòlái.",vi:"Anh ấy đi về phía tôi."},{tag:"Tình huống khác",zh:"她朝我走过来。",py:"Tā cháo wǒ zǒu guòlái.",vi:"Cô ấy đi về phía tôi."}],
    explanation:"朝 dẫn ra phương hướng của hành động.",
    note:"Gần nghĩa với 向 trong nhiều trường hợp."
  },

  {
    id:"hsk5_61",
    pattern:"沿着",
    title:"沿着 — dọc theo",
    structure:"沿着 + 路径 + V",
    example:"我们沿着河边走。",
    pinyin:"Wǒmen yánzhe hébiān zǒu.",
    meaning:"Chúng tôi đi dọc theo bờ sông.",
    examples:[{tag:"Câu gốc",zh:"我们沿着河边走。",py:"Wǒmen yánzhe hébiān zǒu.",vi:"Chúng tôi đi dọc theo bờ sông."},{tag:"Tình huống khác",zh:"妈妈们沿着河边走。",py:"Māmamen yánzhe hébiān zǒu.",vi:"Chúng tôi đi dọc theo bờ sông."},{tag:"Tình huống khác",zh:"老师们沿着河边走。",py:"Lǎoshīmen yánzhe hébiān zǒu.",vi:"Chúng tôi đi dọc theo bờ sông."},{tag:"Tình huống khác",zh:"同学们们沿着河边走。",py:"Tóngxuémenmen yánzhe hébiān zǒu.",vi:"Chúng tôi đi dọc theo bờ sông."},{tag:"Tình huống khác",zh:"他们沿着河边走。",py:"Tāmen yánzhe hébiān zǒu.",vi:"Họ đi dọc theo bờ sông."}],
    explanation:"沿着 biểu thị hành động di chuyển theo một tuyến đường hoặc vật thể.",
    note:"Thường dùng với đường, sông, bờ."
  },

  {
    id:"hsk5_62",
    pattern:"替",
    title:"替 — thay cho",
    structure:"替 + 人 + V",
    example:"我替你解释一下。",
    pinyin:"Wǒ tì nǐ jiěshì yíxià.",
    meaning:"Tôi giải thích thay cho bạn một chút.",
    examples:[{tag:"Câu gốc",zh:"我替你解释一下。",py:"Wǒ tì nǐ jiěshì yíxià.",vi:"Tôi giải thích thay cho bạn một chút."},{tag:"Tình huống khác",zh:"妈妈替你解释一下。",py:"Māma tì nǐ jiěshì yíxià.",vi:"Mẹ giải thích thay cho bạn một chút."},{tag:"Tình huống khác",zh:"老师替你解释一下。",py:"Lǎoshī tì nǐ jiěshì yíxià.",vi:"Thầy giải thích thay cho bạn một chút."},{tag:"Tình huống khác",zh:"同学们替你解释一下。",py:"Tóngxuémen tì nǐ jiěshì yíxià.",vi:"Các bạn giải thích thay cho bạn một chút."}],
    explanation:"替 biểu thị người thực hiện hành động thay cho người khác.",
    note:"Có thể hiểu là “thay cho”."
  },

  {
    id:"hsk5_63",
    pattern:"同1",
    title:"同 — với, đối với",
    structure:"同 + 人 + V",
    example:"我同他商量过这件事。",
    pinyin:"Wǒ tóng tā shāngliang guo zhè jiàn shì.",
    meaning:"Tôi đã bàn bạc chuyện này với anh ấy.",
    examples:[{tag:"Câu gốc",zh:"我同他商量过这件事。",py:"Wǒ tóng tā shāngliang guo zhè jiàn shì.",vi:"Tôi đã bàn bạc chuyện này với anh ấy."},{tag:"Tình huống khác",zh:"妈妈同他商量过这件事。",py:"Māma tóng tā shāngliang guo zhè jiàn shì.",vi:"Mẹ đã bàn bạc chuyện này với anh ấy."},{tag:"Tình huống khác",zh:"老师同他商量过这件事。",py:"Lǎoshī tóng tā shāngliang guo zhè jiàn shì.",vi:"Thầy đã bàn bạc chuyện này với anh ấy."},{tag:"Tình huống khác",zh:"同学们同他商量过这件事。",py:"Tóngxuémen tóng tā shāngliang guo zhè jiàn shì.",vi:"Các bạn đã bàn bạc chuyện này với anh ấy."},{tag:"Tình huống khác",zh:"我同她商量过这件事。",py:"Wǒ tóng Tā shāngliang guo zhè jiàn shì.",vi:"Tôi đã bàn bạc chuyện này với anh ấy."}],
    explanation:"同 có thể dùng để giới thiệu đối tượng cùng tham gia hành động.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_64",
    pattern:"凭",
    title:"凭 — dựa vào, căn cứ vào",
    structure:"凭 + N + V",
    example:"我们凭经验判断。",
    pinyin:"Wǒmen píng jīngyàn pànduàn.",
    meaning:"Chúng tôi phán đoán dựa vào kinh nghiệm.",
    examples:[{tag:"Câu gốc",zh:"我们凭经验判断。",py:"Wǒmen píng jīngyàn pànduàn.",vi:"Chúng tôi phán đoán dựa vào kinh nghiệm."},{tag:"Tình huống khác",zh:"妈妈们凭经验判断。",py:"Māmamen píng jīngyàn pànduàn.",vi:"Chúng tôi phán đoán dựa vào kinh nghiệm."},{tag:"Tình huống khác",zh:"老师们凭经验判断。",py:"Lǎoshīmen píng jīngyàn pànduàn.",vi:"Chúng tôi phán đoán dựa vào kinh nghiệm."},{tag:"Tình huống khác",zh:"同学们们凭经验判断。",py:"Tóngxuémenmen píng jīngyàn pànduàn.",vi:"Chúng tôi phán đoán dựa vào kinh nghiệm."},{tag:"Tình huống khác",zh:"他们凭经验判断。",py:"Tāmen píng jīngyàn pànduàn.",vi:"Họ phán đoán dựa vào kinh nghiệm."}],
    explanation:"凭 biểu thị căn cứ hoặc phương tiện dựa vào để làm việc gì.",
    note:"Thường đứng trước danh từ."
  },

  {
    id:"hsk5_65",
    pattern:"据",
    title:"据 — theo, căn cứ theo",
    structure:"据 + N + V",
    example:"据报道，事故没有造成人员伤亡。",
    pinyin:"Jù bàodào, shìgù méiyǒu zàochéng rényuán shāngwáng.",
    meaning:"Theo báo cáo, vụ tai nạn không gây thương vong.",
    examples:[{tag:"Câu gốc",zh:"据报道，事故没有造成人员伤亡。",py:"Jù bàodào, shìgù méiyǒu zàochéng rényuán shāngwáng.",vi:"Theo báo cáo, vụ tai nạn không gây thương vong."},{tag:"Ở nhà",zh:"妈妈告诉我：据报道，事故没有造成人员伤亡。",py:"Māma gàosu wǒ: Jù bàodào, shìgù méiyǒu zàochéng rényuán shāngwáng.",vi:"Mẹ bảo tôi: Theo báo cáo, vụ tai nạn không gây thương vong."},{tag:"Ở trường",zh:"在学校，据报道，事故没有造成人员伤亡。",py:"Zài xuéxiào, Jù bàodào, shìgù méiyǒu zàochéng rényuán shāngwáng.",vi:"Ở trường, Theo báo cáo, vụ tai nạn không gây thương vong."},{tag:"Lúc đi làm",zh:"上班的时候，据报道，事故没有造成人员伤亡。",py:"Shàngbān de shíhou, Jù bàodào, shìgù méiyǒu zàochéng rényuán shāngwáng.",vi:"Lúc đi làm, Theo báo cáo, vụ tai nạn không gây thương vong."}],
    explanation:"据 dùng để dẫn nguồn hoặc căn cứ thông tin.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_66",
    pattern:"依据",
    title:"依据 — dựa theo",
    structure:"依据 + N + V",
    example:"我们依据事实作出判断。",
    pinyin:"Wǒmen yījù shìshí zuòchū pànduàn.",
    meaning:"Chúng tôi đưa ra phán đoán dựa trên sự thật.",
    examples:[{tag:"Câu gốc",zh:"我们依据事实作出判断。",py:"Wǒmen yījù shìshí zuòchū pànduàn.",vi:"Chúng tôi đưa ra phán đoán dựa trên sự thật."},{tag:"Tình huống khác",zh:"妈妈们依据事实作出判断。",py:"Māmamen yījù shìshí zuòchū pànduàn.",vi:"Chúng tôi đưa ra phán đoán dựa trên sự thật."},{tag:"Tình huống khác",zh:"老师们依据事实作出判断。",py:"Lǎoshīmen yījù shìshí zuòchū pànduàn.",vi:"Chúng tôi đưa ra phán đoán dựa trên sự thật."},{tag:"Tình huống khác",zh:"同学们们依据事实作出判断。",py:"Tóngxuémenmen yījù shìshí zuòchū pànduàn.",vi:"Chúng tôi đưa ra phán đoán dựa trên sự thật."},{tag:"Tình huống khác",zh:"他们依据事实作出判断。",py:"Tāmen yījù shìshí zuòchū pànduàn.",vi:"Họ đưa ra phán đoán dựa trên sự thật."}],
    explanation:"依据 biểu thị căn cứ để thực hiện hoặc phán đoán.",
    note:"Trang trọng hơn 根据 trong một số ngữ cảnh."
  },

  {
    id:"hsk5_67",
    pattern:"以及",
    title:"以及 — cũng như, và",
    structure:"A，以及 B",
    example:"会议讨论了生产以及销售问题。",
    pinyin:"Huìyì tǎolùn le shēngchǎn yǐjí xiāoshòu wèntí.",
    meaning:"Cuộc họp đã thảo luận vấn đề sản xuất cũng như bán hàng.",
    examples:[{tag:"Câu gốc",zh:"会议讨论了生产以及销售问题。",py:"Huìyì tǎolùn le shēngchǎn yǐjí xiāoshòu wèntí.",vi:"Cuộc họp đã thảo luận vấn đề sản xuất cũng như bán hàng."},{tag:"Ở nhà",zh:"妈妈告诉我：会议讨论了生产以及销售问题。",py:"Māma gàosu wǒ: Huìyì tǎolùn le shēngchǎn yǐjí xiāoshòu wèntí.",vi:"Mẹ bảo tôi: Cuộc họp đã thảo luận vấn đề sản xuất cũng như bán hàng."},{tag:"Ở trường",zh:"在学校，会议讨论了生产以及销售问题。",py:"Zài xuéxiào, Huìyì tǎolùn le shēngchǎn yǐjí xiāoshòu wèntí.",vi:"Ở trường, Cuộc họp đã thảo luận vấn đề sản xuất cũng như bán hàng."},{tag:"Lúc đi làm",zh:"上班的时候，会议讨论了生产以及销售问题。",py:"Shàngbān de shíhou, Huìyì tǎolùn le shēngchǎn yǐjí xiāoshòu wèntí.",vi:"Lúc đi làm, Cuộc họp đã thảo luận vấn đề sản xuất cũng như bán hàng."}],
    explanation:"以及 nối các danh từ hoặc cụm từ cùng chức năng.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_68",
    pattern:"从而",
    title:"从而 — từ đó",
    structure:"原因 / 方法，从而 + 结果",
    example:"我们改进方法，从而提高了效率。",
    pinyin:"Wǒmen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",
    meaning:"Chúng tôi cải tiến phương pháp, từ đó nâng cao hiệu suất.",
    examples:[{tag:"Câu gốc",zh:"我们改进方法，从而提高了效率。",py:"Wǒmen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",vi:"Chúng tôi cải tiến phương pháp, từ đó nâng cao hiệu suất."},{tag:"Tình huống khác",zh:"妈妈们改进方法，从而提高了效率。",py:"Māmamen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",vi:"Chúng tôi cải tiến phương pháp, từ đó nâng cao hiệu suất."},{tag:"Tình huống khác",zh:"老师们改进方法，从而提高了效率。",py:"Lǎoshīmen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",vi:"Chúng tôi cải tiến phương pháp, từ đó nâng cao hiệu suất."},{tag:"Tình huống khác",zh:"同学们们改进方法，从而提高了效率。",py:"Tóngxuémenmen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",vi:"Chúng tôi cải tiến phương pháp, từ đó nâng cao hiệu suất."},{tag:"Tình huống khác",zh:"他们改进方法，从而提高了效率。",py:"Tāmen gǎijìn fāngfǎ, cóng'ér tígāo le xiàolǜ.",vi:"Họ cải tiến phương pháp, từ đó nâng cao hiệu suất."}],
    explanation:"从而 nối một hành động hoặc nguyên nhân với kết quả.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_69",
    pattern:"可见",
    title:"可见 — có thể thấy rằng",
    structure:"……，可见……",
    example:"他每天都练习，可见他很认真。",
    pinyin:"Tā měitiān dōu liànxí, kějiàn tā hěn rènzhēn.",
    meaning:"Anh ấy ngày nào cũng luyện tập, có thể thấy anh ấy rất nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"他每天都练习，可见他很认真。",py:"Tā měitiān dōu liànxí, kějiàn tā hěn rènzhēn.",vi:"Anh ấy ngày nào cũng luyện tập, có thể thấy anh ấy rất nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：他每天都练习，可见他很认真。",py:"Māma gàosu wǒ: Tā měitiān dōu liànxí, kějiàn tā hěn rènzhēn.",vi:"Mẹ bảo tôi: Anh ấy ngày nào cũng luyện tập, có thể thấy anh ấy rất nghiêm túc."},{tag:"Ở trường",zh:"在学校，他每天都练习，可见他很认真。",py:"Zài xuéxiào, Tā měitiān dōu liànxí, kějiàn tā hěn rènzhēn.",vi:"Ở trường, Anh ấy ngày nào cũng luyện tập, có thể thấy anh ấy rất nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，他每天都练习，可见他很认真。",py:"Shàngbān de shíhou, Tā měitiān dōu liànxí, kějiàn tā hěn rènzhēn.",vi:"Lúc đi làm, Anh ấy ngày nào cũng luyện tập, có thể thấy anh ấy rất nghiêm túc."}],
    explanation:"可见 dùng để đưa ra kết luận từ thông tin phía trước.",
    note:"Thường đứng đầu mệnh đề kết luận."
  },

  {
    id:"hsk5_70",
    pattern:"假如",
    title:"假如……就……",
    structure:"假如 + S + V，就 + S + V",
    example:"假如明天下雨，我们就不去了。",
    pinyin:"Jiǎrú míngtiān xiàyǔ, wǒmen jiù bú qù le.",
    meaning:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi.",
    examples:[{tag:"Câu gốc",zh:"假如明天下雨，我们就不去了。",py:"Jiǎrú míngtiān xiàyǔ, wǒmen jiù bú qù le.",vi:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi."},{tag:"Tình huống khác",zh:"假如明天下雨，妈妈们就不去了。",py:"Jiǎrú míngtiān xiàyǔ, Māmamen jiù bú qù le.",vi:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi."},{tag:"Tình huống khác",zh:"假如明天下雨，老师们就不去了。",py:"Jiǎrú míngtiān xiàyǔ, Lǎoshīmen jiù bú qù le.",vi:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi."},{tag:"Tình huống khác",zh:"假如明天下雨，同学们们就不去了。",py:"Jiǎrú míngtiān xiàyǔ, Tóngxuémenmen jiù bú qù le.",vi:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi."},{tag:"Tình huống khác",zh:"假如明天下雨，他们就不去了。",py:"Jiǎrú míngtiān xiàyǔ, Tāmen jiù bú qù le.",vi:"Nếu ngày mai trời mưa thì chúng tôi sẽ không đi."}],
    explanation:"假如 đưa ra giả thiết.",
    note:"Có thể dùng 就 hoặc không tùy câu."
  },

  {
    id:"hsk5_71",
    pattern:"总之",
    title:"总之 — tóm lại",
    structure:"总之，……",
    example:"总之，我们必须解决这个问题。",
    pinyin:"Zǒngzhī, wǒmen bìxū jiějué zhège wèntí.",
    meaning:"Tóm lại, chúng ta phải giải quyết vấn đề này.",
    examples:[{tag:"Câu gốc",zh:"总之，我们必须解决这个问题。",py:"Zǒngzhī, wǒmen bìxū jiějué zhège wèntí.",vi:"Tóm lại, chúng ta phải giải quyết vấn đề này."},{tag:"Tình huống khác",zh:"总之，妈妈们必须解决这个问题。",py:"Zǒngzhī, Māmamen bìxū jiějué zhège wèntí.",vi:"Tóm lại, chúng ta phải giải quyết vấn đề này."},{tag:"Tình huống khác",zh:"总之，老师们必须解决这个问题。",py:"Zǒngzhī, Lǎoshīmen bìxū jiějué zhège wèntí.",vi:"Tóm lại, chúng ta phải giải quyết vấn đề này."},{tag:"Tình huống khác",zh:"总之，同学们们必须解决这个问题。",py:"Zǒngzhī, Tóngxuémenmen bìxū jiějué zhège wèntí.",vi:"Tóm lại, chúng ta phải giải quyết vấn đề này."},{tag:"Tình huống khác",zh:"总之，他们必须解决这个问题。",py:"Zǒngzhī, Tāmen bìxū jiějué zhège wèntí.",vi:"Tóm lại, chúng ta phải giải quyết vấn đề này."}],
    explanation:"总之 dùng để tổng kết hoặc đưa ra kết luận.",
    note:"Thường đứng đầu câu."
  },

  {
    id:"hsk5_72",
    pattern:"似的",
    title:"似的 — giống như",
    structure:"N / V + 似的",
    example:"他高兴得孩子似的。",
    pinyin:"Tā gāoxìng de háizi shìde.",
    meaning:"Anh ấy vui như một đứa trẻ.",
    examples:[{tag:"Câu gốc",zh:"他高兴得孩子似的。",py:"Tā gāoxìng de háizi shìde.",vi:"Anh ấy vui như một đứa trẻ."},{tag:"Ở nhà",zh:"妈妈告诉我：他高兴得孩子似的。",py:"Māma gàosu wǒ: Tā gāoxìng de háizi shìde.",vi:"Mẹ bảo tôi: Anh ấy vui như một đứa trẻ."},{tag:"Ở trường",zh:"在学校，他高兴得孩子似的。",py:"Zài xuéxiào, Tā gāoxìng de háizi shìde.",vi:"Ở trường, Anh ấy vui như một đứa trẻ."},{tag:"Lúc đi làm",zh:"上班的时候，他高兴得孩子似的。",py:"Shàngbān de shíhou, Tā gāoxìng de háizi shìde.",vi:"Lúc đi làm, Anh ấy vui như một đứa trẻ."}],
    explanation:"似的 dùng để so sánh trạng thái hoặc đặc điểm với một đối tượng khác.",
    note:"Thường gặp trong các cấu trúc so sánh."
  },

  {
    id:"hsk5_73",
    pattern:"A来A去",
    title:"A来A去 — làm đi làm lại",
    structure:"V + 来 + V + 去",
    example:"他想来想去，还是决定留下。",
    pinyin:"Tā xiǎng lái xiǎng qù, háishi juédìng liúxià.",
    meaning:"Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định ở lại.",
    examples:[{tag:"Câu gốc",zh:"他想来想去，还是决定留下。",py:"Tā xiǎng lái xiǎng qù, háishi juédìng liúxià.",vi:"Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định ở lại."},{tag:"Ở nhà",zh:"妈妈告诉我：他想来想去，还是决定留下。",py:"Māma gàosu wǒ: Tā xiǎng lái xiǎng qù, háishi juédìng liúxià.",vi:"Mẹ bảo tôi: Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định ở lại."},{tag:"Ở trường",zh:"在学校，他想来想去，还是决定留下。",py:"Zài xuéxiào, Tā xiǎng lái xiǎng qù, háishi juédìng liúxià.",vi:"Ở trường, Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định ở lại."},{tag:"Lúc đi làm",zh:"上班的时候，他想来想去，还是决定留下。",py:"Shàngbān de shíhou, Tā xiǎng lái xiǎng qù, háishi juédìng liúxià.",vi:"Lúc đi làm, Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định ở lại."}],
    explanation:"Biểu thị hành động lặp đi lặp lại hoặc qua lại.",
    note:"Thường dùng với động từ."
  },

  {
    id:"hsk5_74",
    pattern:"A着A着",
    title:"A着A着 — đang làm rồi thì",
    structure:"V着V着，……",
    example:"走着走着，他突然停了下来。",
    pinyin:"Zǒuzhe zǒuzhe, tā tūrán tíng le xiàlai.",
    meaning:"Đang đi thì anh ấy đột nhiên dừng lại.",
    examples:[{tag:"Câu gốc",zh:"走着走着，他突然停了下来。",py:"Zǒuzhe zǒuzhe, tā tūrán tíng le xiàlai.",vi:"Đang đi thì anh ấy đột nhiên dừng lại."},{tag:"Ở nhà",zh:"妈妈告诉我：走着走着，他突然停了下来。",py:"Māma gàosu wǒ: Zǒuzhe zǒuzhe, tā tūrán tíng le xiàlai.",vi:"Mẹ bảo tôi: Đang đi thì anh ấy đột nhiên dừng lại."},{tag:"Ở trường",zh:"在学校，走着走着，他突然停了下来。",py:"Zài xuéxiào, Zǒuzhe zǒuzhe, tā tūrán tíng le xiàlai.",vi:"Ở trường, Đang đi thì anh ấy đột nhiên dừng lại."},{tag:"Lúc đi làm",zh:"上班的时候，走着走着，他突然停了下来。",py:"Shàngbān de shíhou, Zǒuzhe zǒuzhe, tā tūrán tíng le xiàlai.",vi:"Lúc đi làm, Đang đi thì anh ấy đột nhiên dừng lại."}],
    explanation:"Biểu thị trong quá trình một hành động đang tiếp diễn thì xuất hiện tình huống mới.",
    note:"Rất hữu ích trong kể chuyện."
  },

  {
    id:"hsk5_75",
    pattern:"没A没B",
    title:"没A没B — không A cũng không B",
    structure:"没 + A + 没 + B",
    example:"他没吃没喝地工作了一天。",
    pinyin:"Tā méi chī méi hē de gōngzuò le yì tiān.",
    meaning:"Anh ấy làm việc cả ngày mà không ăn không uống.",
    examples:[{tag:"Câu gốc",zh:"他没吃没喝地工作了一天。",py:"Tā méi chī méi hē de gōngzuò le yì tiān.",vi:"Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Ở nhà",zh:"妈妈告诉我：他没吃没喝地工作了一天。",py:"Māma gàosu wǒ: Tā méi chī méi hē de gōngzuò le yì tiān.",vi:"Mẹ bảo tôi: Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Ở trường",zh:"在学校，他没吃没喝地工作了一天。",py:"Zài xuéxiào, Tā méi chī méi hē de gōngzuò le yì tiān.",vi:"Ở trường, Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Lúc đi làm",zh:"上班的时候，他没吃没喝地工作了一天。",py:"Shàngbān de shíhou, Tā méi chī méi hē de gōngzuò le yì tiān.",vi:"Lúc đi làm, Anh ấy làm việc cả ngày mà không ăn không uống."}],
    explanation:"Dạng lặp phủ định để nhấn mạnh thiếu cả hai hành động.",
    note:"Thường dùng để tăng sắc thái biểu cảm."
  },

  {
    id:"hsk5_76",
    pattern:"说A就A",
    title:"说A就A — nói là làm ngay",
    structure:"说 + V + 就 + V",
    example:"他说走就走。",
    pinyin:"Tā shuō zǒu jiù zǒu.",
    meaning:"Anh ấy nói đi là đi ngay.",
    examples:[{tag:"Câu gốc",zh:"他说走就走。",py:"Tā shuō zǒu jiù zǒu.",vi:"Anh ấy nói đi là đi ngay."},{tag:"Ở nhà",zh:"妈妈告诉我：他说走就走。",py:"Māma gàosu wǒ: Tā shuō zǒu jiù zǒu.",vi:"Mẹ bảo tôi: Anh ấy nói đi là đi ngay."},{tag:"Ở trường",zh:"在学校，他说走就走。",py:"Zài xuéxiào, Tā shuō zǒu jiù zǒu.",vi:"Ở trường, Anh ấy nói đi là đi ngay."},{tag:"Lúc đi làm",zh:"上班的时候，他说走就走。",py:"Shàngbān de shíhou, Tā shuō zǒu jiù zǒu.",vi:"Lúc đi làm, Anh ấy nói đi là đi ngay."}],
    explanation:"Biểu thị hành động được thực hiện rất nhanh sau khi quyết định.",
    note:"Thường dùng trong khẩu ngữ."
  },

  {
    id:"hsk5_77",
    pattern:"不得了",
    title:"不得了 — cực kỳ, ghê gớm",
    structure:"Adj + 得不得了",
    example:"这里热得不得了。",
    pinyin:"Zhèlǐ rè de bùdéliǎo.",
    meaning:"Ở đây nóng kinh khủng.",
    examples:[{tag:"Câu gốc",zh:"这里热得不得了。",py:"Zhèlǐ rè de bùdéliǎo.",vi:"Ở đây nóng kinh khủng."},{tag:"Ở nhà",zh:"妈妈告诉我：这里热得不得了。",py:"Māma gàosu wǒ: Zhèlǐ rè de bùdéliǎo.",vi:"Mẹ bảo tôi: Ở đây nóng kinh khủng."},{tag:"Ở trường",zh:"在学校，这里热得不得了。",py:"Zài xuéxiào, Zhèlǐ rè de bùdéliǎo.",vi:"Ở trường, Ở đây nóng kinh khủng."},{tag:"Lúc đi làm",zh:"上班的时候，这里热得不得了。",py:"Shàngbān de shíhou, Zhèlǐ rè de bùdéliǎo.",vi:"Lúc đi làm, Ở đây nóng kinh khủng."}],
    explanation:"不得了 đặt sau 得 để nhấn mạnh mức độ cực cao.",
    note:"Không hiểu đơn giản là “không được”."
  },

  {
    id:"hsk5_78",
    pattern:"用不着",
    title:"用不着 — không cần",
    structure:"用不着 + V",
    example:"你用不着这么紧张。",
    pinyin:"Nǐ yòngbuzháo zhème jǐnzhāng.",
    meaning:"Bạn không cần phải căng thẳng như vậy.",
    examples:[{tag:"Câu gốc",zh:"你用不着这么紧张。",py:"Nǐ yòngbuzháo zhème jǐnzhāng.",vi:"Bạn không cần phải căng thẳng như vậy."},{tag:"Ở nhà",zh:"妈妈告诉我：你用不着这么紧张。",py:"Māma gàosu wǒ: Nǐ yòngbuzháo zhème jǐnzhāng.",vi:"Mẹ bảo tôi: Bạn không cần phải căng thẳng như vậy."},{tag:"Ở trường",zh:"在学校，你用不着这么紧张。",py:"Zài xuéxiào, Nǐ yòngbuzháo zhème jǐnzhāng.",vi:"Ở trường, Bạn không cần phải căng thẳng như vậy."},{tag:"Lúc đi làm",zh:"上班的时候，你用不着这么紧张。",py:"Shàngbān de shíhou, Nǐ yòngbuzháo zhème jǐnzhāng.",vi:"Lúc đi làm, Bạn không cần phải căng thẳng như vậy."}],
    explanation:"用不着 biểu thị không cần thiết phải làm gì.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_79",
    pattern:"从……来看",
    title:"从……来看 — xét từ",
    structure:"从 + N + 来看，……",
    example:"从目前的情况来看，问题不大。",
    pinyin:"Cóng mùqián de qíngkuàng láikàn, wèntí bú dà.",
    meaning:"Xét tình hình hiện tại thì vấn đề không lớn.",
    examples:[{tag:"Câu gốc",zh:"从目前的情况来看，问题不大。",py:"Cóng mùqián de qíngkuàng láikàn, wèntí bú dà.",vi:"Xét tình hình hiện tại thì vấn đề không lớn."},{tag:"Ở nhà",zh:"妈妈告诉我：从目前的情况来看，问题不大。",py:"Māma gàosu wǒ: Cóng mùqián de qíngkuàng láikàn, wèntí bú dà.",vi:"Mẹ bảo tôi: Xét tình hình hiện tại thì vấn đề không lớn."},{tag:"Ở trường",zh:"在学校，从目前的情况来看，问题不大。",py:"Zài xuéxiào, Cóng mùqián de qíngkuàng láikàn, wèntí bú dà.",vi:"Ở trường, Xét tình hình hiện tại thì vấn đề không lớn."},{tag:"Lúc đi làm",zh:"上班的时候，从目前的情况来看，问题不大。",py:"Shàngbān de shíhou, Cóng mùqián de qíngkuàng láikàn, wèntí bú dà.",vi:"Lúc đi làm, Xét tình hình hiện tại thì vấn đề không lớn."}],
    explanation:"Dùng để nêu căn cứ hoặc góc nhìn để đánh giá.",
    note:"Rất thường gặp trong văn nghị luận."
  },

  {
    id:"hsk5_80",
    pattern:"A的A，B的B",
    title:"A的A，B的B",
    structure:"A的A，B的B",
    example:"大的大，小的小。",
    pinyin:"Dà de dà, xiǎo de xiǎo.",
    meaning:"Cái lớn thì lớn, cái nhỏ thì nhỏ.",
    examples:[{tag:"Câu gốc",zh:"大的大，小的小。",py:"Dà de dà, xiǎo de xiǎo.",vi:"Cái lớn thì lớn, cái nhỏ thì nhỏ."},{tag:"Ở nhà",zh:"妈妈告诉我：大的大，小的小。",py:"Māma gàosu wǒ: Dà de dà, xiǎo de xiǎo.",vi:"Mẹ bảo tôi: Cái lớn thì lớn, cái nhỏ thì nhỏ."},{tag:"Ở trường",zh:"在学校，大的大，小的小。",py:"Zài xuéxiào, Dà de dà, xiǎo de xiǎo.",vi:"Ở trường, Cái lớn thì lớn, cái nhỏ thì nhỏ."},{tag:"Lúc đi làm",zh:"上班的时候，大的大，小的小。",py:"Shàngbān de shíhou, Dà de dà, xiǎo de xiǎo.",vi:"Lúc đi làm, Cái lớn thì lớn, cái nhỏ thì nhỏ."}],
    explanation:"Dùng để phân chia các đối tượng theo đặc điểm khác nhau.",
    note:"Thường dùng khi miêu tả nhiều đối tượng."
  },

  {
    id:"hsk5_81",
    pattern:"由……组成",
    title:"由……组成 — được cấu thành bởi",
    structure:"A + 由 + B + 组成",
    example:"这个团队由十个人组成。",
    pinyin:"Zhège tuánduì yóu shí ge rén zǔchéng.",
    meaning:"Đội này gồm mười người.",
    examples:[{tag:"Câu gốc",zh:"这个团队由十个人组成。",py:"Zhège tuánduì yóu shí ge rén zǔchéng.",vi:"Đội này gồm mười người."},{tag:"Ở nhà",zh:"妈妈告诉我：这个团队由十个人组成。",py:"Māma gàosu wǒ: Zhège tuánduì yóu shí ge rén zǔchéng.",vi:"Mẹ bảo tôi: Đội này gồm mười người."},{tag:"Ở trường",zh:"在学校，这个团队由十个人组成。",py:"Zài xuéxiào, Zhège tuánduì yóu shí ge rén zǔchéng.",vi:"Ở trường, Đội này gồm mười người."},{tag:"Lúc đi làm",zh:"上班的时候，这个团队由十个人组成。",py:"Shàngbān de shíhou, Zhège tuánduì yóu shí ge rén zǔchéng.",vi:"Lúc đi làm, Đội này gồm mười người."}],
    explanation:"由 giới thiệu thành phần cấu tạo nên một tổng thể.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_82",
    pattern:"X也不是，Y也不是",
    title:"X也不是，Y也不是",
    structure:"X也不是，Y也不是",
    example:"说他错也不是，说他对也不是。",
    pinyin:"Shuō tā cuò yě bú shì, shuō tā duì yě bú shì.",
    meaning:"Nói anh ấy sai cũng không phải, nói anh ấy đúng cũng không phải.",
    examples:[{tag:"Câu gốc",zh:"说他错也不是，说他对也不是。",py:"Shuō tā cuò yě bú shì, shuō tā duì yě bú shì.",vi:"Nói anh ấy sai cũng không phải, nói anh ấy đúng cũng không phải."},{tag:"Ở nhà",zh:"妈妈告诉我：说他错也不是，说他对也不是。",py:"Māma gàosu wǒ: Shuō tā cuò yě bú shì, shuō tā duì yě bú shì.",vi:"Mẹ bảo tôi: Nói anh ấy sai cũng không phải, nói anh ấy đúng cũng không phải."},{tag:"Ở trường",zh:"在学校，说他错也不是，说他对也不是。",py:"Zài xuéxiào, Shuō tā cuò yě bú shì, shuō tā duì yě bú shì.",vi:"Ở trường, Nói anh ấy sai cũng không phải, nói anh ấy đúng cũng không phải."},{tag:"Lúc đi làm",zh:"上班的时候，说他错也不是，说他对也不是。",py:"Shàngbān de shíhou, Shuō tā cuò yě bú shì, shuō tā duì yě bú shì.",vi:"Lúc đi làm, Nói anh ấy sai cũng không phải, nói anh ấy đúng cũng không phải."}],
    explanation:"Biểu thị hai cách đánh giá đều không hoàn toàn phù hợp.",
    note:"Thường dùng khi khó đưa ra kết luận."
  },

  {
    id:"hsk5_83",
    pattern:"X也X不得，Y也Y不得",
    title:"X也X不得，Y也Y不得",
    structure:"V也V不得，V也V不得",
    example:"走也走不得，留也留不得。",
    pinyin:"Zǒu yě zǒu bùdé, liú yě liú bùdé.",
    meaning:"Đi cũng không được, ở lại cũng không xong.",
    examples:[{tag:"Câu gốc",zh:"走也走不得，留也留不得。",py:"Zǒu yě zǒu bùdé, liú yě liú bùdé.",vi:"Đi cũng không được, ở lại cũng không xong."},{tag:"Ở nhà",zh:"妈妈告诉我：走也走不得，留也留不得。",py:"Māma gàosu wǒ: Zǒu yě zǒu bùdé, liú yě liú bùdé.",vi:"Mẹ bảo tôi: Đi cũng không được, ở lại cũng không xong."},{tag:"Ở trường",zh:"在学校，走也走不得，留也留不得。",py:"Zài xuéxiào, Zǒu yě zǒu bùdé, liú yě liú bùdé.",vi:"Ở trường, Đi cũng không được, ở lại cũng không xong."},{tag:"Lúc đi làm",zh:"上班的时候，走也走不得，留也留不得。",py:"Shàngbān de shíhou, Zǒu yě zǒu bùdé, liú yě liú bùdé.",vi:"Lúc đi làm, Đi cũng không được, ở lại cũng không xong."}],
    explanation:"Biểu thị tình thế tiến thoái lưỡng nan.",
    note:"Thường mang sắc thái cảm thán."
  },

  {
    id:"hsk5_84",
    pattern:"X是它，Y也是它",
    title:"X是它，Y也是它",
    structure:"X是它，Y也是它",
    example:"关键是它，问题也是它。",
    pinyin:"Guānjiàn shì tā, wèntí yě shì tā.",
    meaning:"Điểm mấu chốt là nó, vấn đề cũng chính là nó.",
    examples:[{tag:"Câu gốc",zh:"关键是它，问题也是它。",py:"Guānjiàn shì tā, wèntí yě shì tā.",vi:"Điểm mấu chốt là nó, vấn đề cũng chính là nó."},{tag:"Ở nhà",zh:"妈妈告诉我：关键是它，问题也是它。",py:"Māma gàosu wǒ: Guānjiàn shì tā, wèntí yě shì tā.",vi:"Mẹ bảo tôi: Điểm mấu chốt là nó, vấn đề cũng chính là nó."},{tag:"Ở trường",zh:"在学校，关键是它，问题也是它。",py:"Zài xuéxiào, Guānjiàn shì tā, wèntí yě shì tā.",vi:"Ở trường, Điểm mấu chốt là nó, vấn đề cũng chính là nó."},{tag:"Lúc đi làm",zh:"上班的时候，关键是它，问题也是它。",py:"Shàngbān de shíhou, Guānjiàn shì tā, wèntí yě shì tā.",vi:"Lúc đi làm, Điểm mấu chốt là nó, vấn đề cũng chính là nó."}],
    explanation:"Dùng để nhấn mạnh cùng một đối tượng có nhiều vai trò hoặc đặc điểm.",
    note:"Thường gặp trong cách diễn đạt nhấn mạnh."
  },

  {
    id:"hsk5_85",
    pattern:"X着也是X着",
    title:"X着也是X着",
    structure:"V着也是V着",
    example:"闲着也是闲着，不如帮帮忙。",
    pinyin:"Xiánzhe yě shì xiánzhe, bùrú bāngbangmáng.",
    meaning:"Đằng nào cũng đang rảnh, chi bằng giúp một tay.",
    examples:[{tag:"Câu gốc",zh:"闲着也是闲着，不如帮帮忙。",py:"Xiánzhe yě shì xiánzhe, bùrú bāngbangmáng.",vi:"Đằng nào cũng đang rảnh, chi bằng giúp một tay."},{tag:"Ở nhà",zh:"妈妈告诉我：闲着也是闲着，不如帮帮忙。",py:"Māma gàosu wǒ: Xiánzhe yě shì xiánzhe, bùrú bāngbangmáng.",vi:"Mẹ bảo tôi: Đằng nào cũng đang rảnh, chi bằng giúp một tay."},{tag:"Ở trường",zh:"在学校，闲着也是闲着，不如帮帮忙。",py:"Zài xuéxiào, Xiánzhe yě shì xiánzhe, bùrú bāngbangmáng.",vi:"Ở trường, Đằng nào cũng đang rảnh, chi bằng giúp một tay."},{tag:"Lúc đi làm",zh:"上班的时候，闲着也是闲着，不如帮帮忙。",py:"Shàngbān de shíhou, Xiánzhe yě shì xiánzhe, bùrú bāngbangmáng.",vi:"Lúc đi làm, Đằng nào cũng đang rảnh, chi bằng giúp một tay."}],
    explanation:"Biểu thị một trạng thái vốn đã tồn tại, từ đó đưa ra đề nghị hoặc hành động khác.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_86",
    pattern:"不管怎样说",
    title:"不管怎样说 — dù nói thế nào",
    structure:"不管怎样说，……",
    example:"不管怎样说，我们都应该试试。",
    pinyin:"Bùguǎn zěnyàng shuō, wǒmen dōu yīnggāi shìshi.",
    meaning:"Dù nói thế nào thì chúng ta cũng nên thử.",
    examples:[{tag:"Câu gốc",zh:"不管怎样说，我们都应该试试。",py:"Bùguǎn zěnyàng shuō, wǒmen dōu yīnggāi shìshi.",vi:"Dù nói thế nào thì chúng ta cũng nên thử."},{tag:"Tình huống khác",zh:"不管怎样说，妈妈们都应该试试。",py:"Bùguǎn zěnyàng shuō, Māmamen dōu yīnggāi shìshi.",vi:"Dù nói thế nào thì chúng ta cũng nên thử."},{tag:"Tình huống khác",zh:"不管怎样说，老师们都应该试试。",py:"Bùguǎn zěnyàng shuō, Lǎoshīmen dōu yīnggāi shìshi.",vi:"Dù nói thế nào thì chúng ta cũng nên thử."},{tag:"Tình huống khác",zh:"不管怎样说，同学们们都应该试试。",py:"Bùguǎn zěnyàng shuō, Tóngxuémenmen dōu yīnggāi shìshi.",vi:"Dù nói thế nào thì chúng ta cũng nên thử."},{tag:"Tình huống khác",zh:"不管怎样说，他们都应该试试。",py:"Bùguǎn zěnyàng shuō, Tāmen dōu yīnggāi shìshi.",vi:"Dù nói thế nào thì chúng ta cũng nên thử."}],
    explanation:"Đưa ra kết luận không thay đổi dù xét theo cách nào.",
    note:"Có thể mở rộng thành 不管怎么说."
  },

  {
    id:"hsk5_87",
    pattern:"真有你/他/她的",
    title:"真有你的 — thật là bạn",
    structure:"真有 + 人 + 的",
    example:"这么难的问题你都解决了，真有你的！",
    pinyin:"Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",
    meaning:"Vấn đề khó như vậy mà bạn cũng giải quyết được, đúng là bạn!",
    examples:[{tag:"Câu gốc",zh:"这么难的问题你都解决了，真有你的！",py:"Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Vấn đề khó như vậy mà bạn cũng giải quyết được, đúng là bạn!"},{tag:"Ở nhà",zh:"妈妈告诉我：这么难的问题你都解决了，真有你的！",py:"Māma gàosu wǒ: Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Mẹ bảo tôi: Vấn đề khó như vậy mà bạn cũng giải quyết được, đúng là bạn!"},{tag:"Ở trường",zh:"在学校，这么难的问题你都解决了，真有你的！",py:"Zài xuéxiào, Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Ở trường, Vấn đề khó như vậy mà bạn cũng giải quyết được, đúng là bạn!"},{tag:"Lúc đi làm",zh:"上班的时候，这么难的问题你都解决了，真有你的！",py:"Shàngbān de shíhou, Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Lúc đi làm, Vấn đề khó như vậy mà bạn cũng giải quyết được, đúng là bạn!"}],
    explanation:"Dùng để biểu thị sự khâm phục, bất ngờ hoặc đôi khi mỉa mai.",
    note:"Ý nghĩa phụ thuộc vào ngữ cảnh và giọng nói."
  },

  {
    id:"hsk5_88",
    pattern:"X什么X",
    title:"X什么X — X gì mà X",
    structure:"V + 什么 + V",
    example:"你急什么急？",
    pinyin:"Nǐ jí shénme jí?",
    meaning:"Bạn vội gì mà vội?",
    examples:[{tag:"Câu gốc",zh:"你急什么急？",py:"Nǐ jí shénme jí?",vi:"Bạn vội gì mà vội?"},{tag:"Ở nhà",zh:"妈妈告诉我：你急什么急？",py:"Māma gàosu wǒ: Nǐ jí shénme jí?",vi:"Mẹ bảo tôi: Bạn vội gì mà vội?"},{tag:"Ở trường",zh:"在学校，你急什么急？",py:"Zài xuéxiào, Nǐ jí shénme jí?",vi:"Ở trường, Bạn vội gì mà vội?"},{tag:"Lúc đi làm",zh:"上班的时候，你急什么急？",py:"Shàngbān de shíhou, Nǐ jí shénme jí?",vi:"Lúc đi làm, Bạn vội gì mà vội?"}],
    explanation:"Dạng lặp lại động từ để thể hiện sự chất vấn hoặc nhấn mạnh.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_89",
    pattern:"什么X不X",
    title:"什么X不X的",
    structure:"什么 + X + 不 + X",
    example:"什么好不好吃的，先吃了再说。",
    pinyin:"Shénme hǎo bù hǎochī de, xiān chī le zài shuō.",
    meaning:"Ăn ngon hay không ngon gì chứ, cứ ăn trước rồi tính.",
    examples:[{tag:"Câu gốc",zh:"什么好不好吃的，先吃了再说。",py:"Shénme hǎo bù hǎochī de, xiān chī le zài shuō.",vi:"Ăn ngon hay không ngon gì chứ, cứ ăn trước rồi tính."},{tag:"Ở nhà",zh:"妈妈告诉我：什么好不好吃的，先吃了再说。",py:"Māma gàosu wǒ: Shénme hǎo bù hǎochī de, xiān chī le zài shuō.",vi:"Mẹ bảo tôi: Ăn ngon hay không ngon gì chứ, cứ ăn trước rồi tính."},{tag:"Ở trường",zh:"在学校，什么好不好吃的，先吃了再说。",py:"Zài xuéxiào, Shénme hǎo bù hǎochī de, xiān chī le zài shuō.",vi:"Ở trường, Ăn ngon hay không ngon gì chứ, cứ ăn trước rồi tính."},{tag:"Lúc đi làm",zh:"上班的时候，什么好不好吃的，先吃了再说。",py:"Shàngbān de shíhou, Shénme hǎo bù hǎochī de, xiān chī le zài shuō.",vi:"Lúc đi làm, Ăn ngon hay không ngon gì chứ, cứ ăn trước rồi tính."}],
    explanation:"Dùng để xem nhẹ hoặc gạt sang một bên một vấn đề nào đó.",
    note:"Khẩu ngữ, thường có 的 ở cuối."
  },

  {
    id:"hsk5_90",
    pattern:"不X白不X",
    title:"不X白不X",
    structure:"不 + V + 白不 + V",
    example:"有机会就参加，不参加白不参加。",
    pinyin:"Yǒu jīhuì jiù cānjiā, bù cānjiā bái bù cānjiā.",
    meaning:"Có cơ hội thì cứ tham gia, không tham gia thì uổng.",
    examples:[{tag:"Câu gốc",zh:"有机会就参加，不参加白不参加。",py:"Yǒu jīhuì jiù cānjiā, bù cānjiā bái bù cānjiā.",vi:"Có cơ hội thì cứ tham gia, không tham gia thì uổng."},{tag:"Ở nhà",zh:"妈妈告诉我：有机会就参加，不参加白不参加。",py:"Māma gàosu wǒ: Yǒu jīhuì jiù cānjiā, bù cānjiā bái bù cānjiā.",vi:"Mẹ bảo tôi: Có cơ hội thì cứ tham gia, không tham gia thì uổng."},{tag:"Ở trường",zh:"在学校，有机会就参加，不参加白不参加。",py:"Zài xuéxiào, Yǒu jīhuì jiù cānjiā, bù cānjiā bái bù cānjiā.",vi:"Ở trường, Có cơ hội thì cứ tham gia, không tham gia thì uổng."},{tag:"Lúc đi làm",zh:"上班的时候，有机会就参加，不参加白不参加。",py:"Shàngbān de shíhou, Yǒu jīhuì jiù cānjiā, bù cānjiā bái bù cānjiā.",vi:"Lúc đi làm, Có cơ hội thì cứ tham gia, không tham gia thì uổng."}],
    explanation:"Biểu thị nếu không làm thì sẽ lãng phí cơ hội.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_91",
    pattern:"X来X去，都是……",
    title:"X来X去，都是……",
    structure:"V来V去，都是……",
    example:"想来想去，都是我的问题。",
    pinyin:"Xiǎng lái xiǎng qù, dōu shì wǒ de wèntí.",
    meaning:"Nghĩ đi nghĩ lại, đều là vấn đề của tôi.",
    examples:[{tag:"Câu gốc",zh:"想来想去，都是我的问题。",py:"Xiǎng lái xiǎng qù, dōu shì wǒ de wèntí.",vi:"Nghĩ đi nghĩ lại, đều là vấn đề của tôi."},{tag:"Tình huống khác",zh:"想来想去，都是妈妈的问题。",py:"Xiǎng lái xiǎng qù, dōu shì Māma de wèntí.",vi:"Nghĩ đi nghĩ lại, đều là vấn đề của tôi."},{tag:"Tình huống khác",zh:"想来想去，都是老师的问题。",py:"Xiǎng lái xiǎng qù, dōu shì Lǎoshī de wèntí.",vi:"Nghĩ đi nghĩ lại, đều là vấn đề của tôi."},{tag:"Tình huống khác",zh:"想来想去，都是同学们的问题。",py:"Xiǎng lái xiǎng qù, dōu shì Tóngxuémen de wèntí.",vi:"Nghĩ đi nghĩ lại, đều là vấn đề của tôi."}],
    explanation:"Sau quá trình suy nghĩ hoặc xem xét nhiều lần, đi đến cùng một kết luận.",
    note:"Thường kết hợp với 想来想去."
  },

  {
    id:"hsk5_92",
    pattern:"动词+什么（就）是什么",
    title:"V什么就是什么",
    structure:"V + 什么，就 + 是什么",
    example:"你说什么就是什么吧。",
    pinyin:"Nǐ shuō shénme jiù shì shénme ba.",
    meaning:"Bạn nói thế nào thì cứ thế đi.",
    examples:[{tag:"Câu gốc",zh:"你说什么就是什么吧。",py:"Nǐ shuō shénme jiù shì shénme ba.",vi:"Bạn nói thế nào thì cứ thế đi."},{tag:"Ở nhà",zh:"妈妈告诉我：你说什么就是什么吧。",py:"Māma gàosu wǒ: Nǐ shuō shénme jiù shì shénme ba.",vi:"Mẹ bảo tôi: Bạn nói thế nào thì cứ thế đi."},{tag:"Ở trường",zh:"在学校，你说什么就是什么吧。",py:"Zài xuéxiào, Nǐ shuō shénme jiù shì shénme ba.",vi:"Ở trường, Bạn nói thế nào thì cứ thế đi."},{tag:"Lúc đi làm",zh:"上班的时候，你说什么就是什么吧。",py:"Shàngbān de shíhou, Nǐ shuō shénme jiù shì shénme ba.",vi:"Lúc đi làm, Bạn nói thế nào thì cứ thế đi."}],
    explanation:"Biểu thị người nói chấp nhận hoặc không muốn tranh luận thêm.",
    note:"Sắc thái phụ thuộc ngữ cảnh."
  },

  {
    id:"hsk5_93",
    pattern:"多项状语",
    title:"多项状语 — nhiều trạng ngữ",
    structure:"时间 + 地点 + 方式 + 情态 + V",
    example:"他昨天在公司认真地完成了工作。",
    pinyin:"Tā zuótiān zài gōngsī rènzhēn de wánchéng le gōngzuò.",
    meaning:"Hôm qua anh ấy đã nghiêm túc hoàn thành công việc ở công ty.",
    examples:[{tag:"Câu gốc",zh:"他昨天在公司认真地完成了工作。",py:"Tā zuótiān zài gōngsī rènzhēn de wánchéng le gōngzuò.",vi:"Hôm qua anh ấy đã nghiêm túc hoàn thành công việc ở công ty."},{tag:"Tình huống khác",zh:"她昨天在公司认真地完成了工作。",py:"Tā zuótiān zài gōngsī rènzhēn de wánchéng le gōngzuò.",vi:"Hôm qua anh ấy đã nghiêm túc hoàn thành công việc ở công ty."},{tag:"Tình huống khác",zh:"他今天在公司认真地完成了工作。",py:"Tā Jīntiān zài gōngsī rènzhēn de wánchéng le gōngzuò.",vi:"Hôm nay anh ấy đã nghiêm túc hoàn thành công việc ở công ty."},{tag:"Tình huống khác",zh:"他昨天在银行认真地完成了工作。",py:"Tā zuótiān zài yínháng rènzhēn de wánchéng le gōngzuò.",vi:"Hôm qua anh ấy đã nghiêm túc hoàn thành công việc ở ngân hàng."}],
    explanation:"Tiếng Trung có thể đặt nhiều trạng ngữ trước động từ theo trật tự hợp lý.",
    note:"Thời gian thường đứng trước địa điểm; cách thức thường đứng gần động từ."
  },

  {
    id:"hsk5_94",
    pattern:"V得了",
    title:"V得了 — có thể làm được",
    structure:"V + 得了",
    example:"这么多工作，我一个人做得了吗？",
    pinyin:"Zhème duō gōngzuò, wǒ yí ge rén zuòdeliǎo ma?",
    meaning:"Nhiều việc như vậy, một mình tôi làm nổi không?",
    examples:[{tag:"Câu gốc",zh:"这么多工作，我一个人做得了吗？",py:"Zhème duō gōngzuò, wǒ yí ge rén zuòdeliǎo ma?",vi:"Nhiều việc như vậy, một mình tôi làm nổi không?"},{tag:"Tình huống khác",zh:"这么多工作，妈妈一个人做得了吗？",py:"Zhème duō gōngzuò, Māma yí ge rén zuòdeliǎo ma?",vi:"Nhiều việc như vậy, một mình tôi làm nổi không?"},{tag:"Tình huống khác",zh:"这么多工作，老师一个人做得了吗？",py:"Zhème duō gōngzuò, Lǎoshī yí ge rén zuòdeliǎo ma?",vi:"Nhiều việc như vậy, một mình tôi làm nổi không?"},{tag:"Tình huống khác",zh:"这么多工作，同学们一个人做得了吗？",py:"Zhème duō gōngzuò, Tóngxuémen yí ge rén zuòdeliǎo ma?",vi:"Nhiều việc như vậy, một mình tôi làm nổi không?"}],
    explanation:"得了 trong mẫu này biểu thị khả năng hoàn thành hành động.",
    note:"Là khả năng bổ ngữ."
  },

  {
    id:"hsk5_95",
    pattern:"V不了",
    title:"V不了 — không thể làm được",
    structure:"V + 不了",
    example:"这么重的箱子，我一个人搬不了。",
    pinyin:"Zhème zhòng de xiāngzi, wǒ yí ge rén bān bùliǎo.",
    meaning:"Cái vali nặng như vậy, một mình tôi không thể bê nổi.",
    examples:[{tag:"Câu gốc",zh:"这么重的箱子，我一个人搬不了。",py:"Zhème zhòng de xiāngzi, wǒ yí ge rén bān bùliǎo.",vi:"Cái vali nặng như vậy, một mình tôi không thể bê nổi."},{tag:"Tình huống khác",zh:"这么重的箱子，妈妈一个人搬不了。",py:"Zhème zhòng de xiāngzi, Māma yí ge rén bān bùliǎo.",vi:"Cái vali nặng như vậy, một mình tôi không thể bê nổi."},{tag:"Tình huống khác",zh:"这么重的箱子，老师一个人搬不了。",py:"Zhème zhòng de xiāngzi, Lǎoshī yí ge rén bān bùliǎo.",vi:"Cái vali nặng như vậy, một mình tôi không thể bê nổi."},{tag:"Tình huống khác",zh:"这么重的箱子，同学们一个人搬不了。",py:"Zhème zhòng de xiāngzi, Tóngxuémen yí ge rén bān bùliǎo.",vi:"Cái vali nặng như vậy, một mình tôi không thể bê nổi."}],
    explanation:"不了 biểu thị không có khả năng hoàn thành hành động.",
    note:"Không nhầm với 不要."
  },

  {
    id:"hsk5_96",
    pattern:"Adj/心理V+得不得了",
    title:"Mức độ cực cao",
    structure:"Adj / 心理V + 得不得了",
    example:"孩子们高兴得不得了。",
    pinyin:"Háizimen gāoxìng de bùdéliǎo.",
    meaning:"Bọn trẻ vui cực kỳ.",
    examples:[{tag:"Câu gốc",zh:"孩子们高兴得不得了。",py:"Háizimen gāoxìng de bùdéliǎo.",vi:"Bọn trẻ vui cực kỳ."},{tag:"Ở nhà",zh:"妈妈告诉我：孩子们高兴得不得了。",py:"Māma gàosu wǒ: Háizimen gāoxìng de bùdéliǎo.",vi:"Mẹ bảo tôi: Bọn trẻ vui cực kỳ."},{tag:"Ở trường",zh:"在学校，孩子们高兴得不得了。",py:"Zài xuéxiào, Háizimen gāoxìng de bùdéliǎo.",vi:"Ở trường, Bọn trẻ vui cực kỳ."},{tag:"Lúc đi làm",zh:"上班的时候，孩子们高兴得不得了。",py:"Shàngbān de shíhou, Háizimen gāoxìng de bùdéliǎo.",vi:"Lúc đi làm, Bọn trẻ vui cực kỳ."}],
    explanation:"得不得了 nhấn mạnh mức độ cực cao của trạng thái.",
    note:"Có thể dùng với tính từ và một số động từ tâm lý."
  },

  {
    id:"hsk5_97",
    pattern:"V下来",
    title:"趋向补语 — V下来",
    structure:"V + 下来",
    example:"请把这些信息记录下来。",
    pinyin:"Qǐng bǎ zhèxiē xìnxī jìlù xiàlai.",
    meaning:"Hãy ghi lại những thông tin này.",
    examples:[{tag:"Câu gốc",zh:"请把这些信息记录下来。",py:"Qǐng bǎ zhèxiē xìnxī jìlù xiàlai.",vi:"Hãy ghi lại những thông tin này."},{tag:"Ở nhà",zh:"妈妈告诉我：请把这些信息记录下来。",py:"Māma gàosu wǒ: Qǐng bǎ zhèxiē xìnxī jìlù xiàlai.",vi:"Mẹ bảo tôi: Hãy ghi lại những thông tin này."},{tag:"Ở trường",zh:"在学校，请把这些信息记录下来。",py:"Zài xuéxiào, Qǐng bǎ zhèxiē xìnxī jìlù xiàlai.",vi:"Ở trường, Hãy ghi lại những thông tin này."},{tag:"Lúc đi làm",zh:"上班的时候，请把这些信息记录下来。",py:"Shàngbān de shíhou, Qǐng bǎ zhèxiē xìnxī jìlù xiàlai.",vi:"Lúc đi làm, Hãy ghi lại những thông tin này."}],
    explanation:"下来 ngoài hướng xuống còn có thể biểu thị việc giữ hoặc lưu trạng thái.",
    note:"Đây là nghĩa mở rộng của 趋向补语."
  },

  {
    id:"hsk5_98",
    pattern:"V下去",
    title:"趋向补语 — V下去",
    structure:"V + 下去",
    example:"请继续说下去。",
    pinyin:"Qǐng jìxù shuō xiàqu.",
    meaning:"Hãy tiếp tục nói đi.",
    examples:[{tag:"Câu gốc",zh:"请继续说下去。",py:"Qǐng jìxù shuō xiàqu.",vi:"Hãy tiếp tục nói đi."},{tag:"Ở nhà",zh:"妈妈告诉我：请继续说下去。",py:"Māma gàosu wǒ: Qǐng jìxù shuō xiàqu.",vi:"Mẹ bảo tôi: Hãy tiếp tục nói đi."},{tag:"Ở trường",zh:"在学校，请继续说下去。",py:"Zài xuéxiào, Qǐng jìxù shuō xiàqu.",vi:"Ở trường, Hãy tiếp tục nói đi."},{tag:"Lúc đi làm",zh:"上班的时候，请继续说下去。",py:"Shàngbān de shíhou, Qǐng jìxù shuō xiàqu.",vi:"Lúc đi làm, Hãy tiếp tục nói đi."}],
    explanation:"下去 có thể biểu thị hành động tiếp tục kéo dài.",
    note:"Thường đi với 继续."
  },

  {
    id:"hsk5_99",
    pattern:"V起来",
    title:"趋向补语 — V起来",
    structure:"V + 起来",
    example:"天气慢慢暖和起来了。",
    pinyin:"Tiānqì mànmàn nuǎnhuo qǐlai le.",
    meaning:"Thời tiết dần trở nên ấm hơn.",
    examples:[{tag:"Câu gốc",zh:"天气慢慢暖和起来了。",py:"Tiānqì mànmàn nuǎnhuo qǐlai le.",vi:"Thời tiết dần trở nên ấm hơn."},{tag:"Ở nhà",zh:"妈妈告诉我：天气慢慢暖和起来了。",py:"Māma gàosu wǒ: Tiānqì mànmàn nuǎnhuo qǐlai le.",vi:"Mẹ bảo tôi: Thời tiết dần trở nên ấm hơn."},{tag:"Ở trường",zh:"在学校，天气慢慢暖和起来了。",py:"Zài xuéxiào, Tiānqì mànmàn nuǎnhuo qǐlai le.",vi:"Ở trường, Thời tiết dần trở nên ấm hơn."},{tag:"Lúc đi làm",zh:"上班的时候，天气慢慢暖和起来了。",py:"Shàngbān de shíhou, Tiānqì mànmàn nuǎnhuo qǐlai le.",vi:"Lúc đi làm, Thời tiết dần trở nên ấm hơn."}],
    explanation:"起来 có thể biểu thị sự bắt đầu xuất hiện một trạng thái.",
    note:"Không chỉ biểu thị hướng lên."
  },

  {
    id:"hsk5_100",
    pattern:"V过来",
    title:"趋向补语 — V过来",
    structure:"V + 过来",
    example:"他终于醒过来了。",
    pinyin:"Tā zhōngyú xǐng guòlái le.",
    meaning:"Cuối cùng anh ấy cũng tỉnh lại.",
    examples:[{tag:"Câu gốc",zh:"他终于醒过来了。",py:"Tā zhōngyú xǐng guòlái le.",vi:"Cuối cùng anh ấy cũng tỉnh lại."},{tag:"Ở nhà",zh:"妈妈告诉我：他终于醒过来了。",py:"Māma gàosu wǒ: Tā zhōngyú xǐng guòlái le.",vi:"Mẹ bảo tôi: Cuối cùng anh ấy cũng tỉnh lại."},{tag:"Ở trường",zh:"在学校，他终于醒过来了。",py:"Zài xuéxiào, Tā zhōngyú xǐng guòlái le.",vi:"Ở trường, Cuối cùng anh ấy cũng tỉnh lại."},{tag:"Lúc đi làm",zh:"上班的时候，他终于醒过来了。",py:"Shàngbān de shíhou, Tā zhōngyú xǐng guòlái le.",vi:"Lúc đi làm, Cuối cùng anh ấy cũng tỉnh lại."}],
    explanation:"过来 có thể biểu thị sự chuyển sang một trạng thái mới hoặc trở lại.",
    note:"Nghĩa cụ thể phụ thuộc động từ."
  },

  {
    id:"hsk5_101",
    pattern:"V过去",
    title:"趋向补语 — V过去",
    structure:"V + 过去",
    example:"时间已经过去了。",
    pinyin:"Shíjiān yǐjīng guòqù le.",
    meaning:"Thời gian đã trôi qua.",
    examples:[{tag:"Câu gốc",zh:"时间已经过去了。",py:"Shíjiān yǐjīng guòqù le.",vi:"Thời gian đã trôi qua."},{tag:"Ở nhà",zh:"妈妈告诉我：时间已经过去了。",py:"Māma gàosu wǒ: Shíjiān yǐjīng guòqù le.",vi:"Mẹ bảo tôi: Thời gian đã trôi qua."},{tag:"Ở trường",zh:"在学校，时间已经过去了。",py:"Zài xuéxiào, Shíjiān yǐjīng guòqù le.",vi:"Ở trường, Thời gian đã trôi qua."},{tag:"Lúc đi làm",zh:"上班的时候，时间已经过去了。",py:"Shàngbān de shíhou, Shíjiān yǐjīng guòqù le.",vi:"Lúc đi làm, Thời gian đã trôi qua."}],
    explanation:"过去 có thể biểu thị sự chuyển sang phía xa hoặc trạng thái đã qua.",
    note:"Cần phân biệt nghĩa phương hướng và nghĩa mở rộng."
  },

  {
    id:"hsk5_102",
    pattern:"V/Adj得+VP",
    title:"状态补语 — 得 + động từ",
    structure:"V / Adj + 得 + VP",
    example:"他累得走不动了。",
    pinyin:"Tā lèi de zǒu bù dòng le.",
    meaning:"Anh ấy mệt đến mức không đi nổi.",
    examples:[{tag:"Câu gốc",zh:"他累得走不动了。",py:"Tā lèi de zǒu bù dòng le.",vi:"Anh ấy mệt đến mức không đi nổi."},{tag:"Ở nhà",zh:"妈妈告诉我：他累得走不动了。",py:"Māma gàosu wǒ: Tā lèi de zǒu bù dòng le.",vi:"Mẹ bảo tôi: Anh ấy mệt đến mức không đi nổi."},{tag:"Ở trường",zh:"在学校，他累得走不动了。",py:"Zài xuéxiào, Tā lèi de zǒu bù dòng le.",vi:"Ở trường, Anh ấy mệt đến mức không đi nổi."},{tag:"Lúc đi làm",zh:"上班的时候，他累得走不动了。",py:"Shàngbān de shíhou, Tā lèi de zǒu bù dòng le.",vi:"Lúc đi làm, Anh ấy mệt đến mức không đi nổi."}],
    explanation:"Mệnh đề sau 得 mô tả trạng thái hoặc hậu quả do hành động hoặc tính chất gây ra.",
    note:"Rất thường gặp trong câu miêu tả mức độ."
  },

  {
    id:"hsk5_103",
    pattern:"V/Adj得+主谓短语",
    title:"状态补语 — 得 + cụm chủ-vị",
    structure:"V / Adj + 得 + S + V",
    example:"她高兴得眼睛都亮了。",
    pinyin:"Tā gāoxìng de yǎnjing dōu liàng le.",
    meaning:"Cô ấy vui đến mức mắt cũng sáng lên.",
    examples:[{tag:"Câu gốc",zh:"她高兴得眼睛都亮了。",py:"Tā gāoxìng de yǎnjing dōu liàng le.",vi:"Cô ấy vui đến mức mắt cũng sáng lên."},{tag:"Ở nhà",zh:"妈妈告诉我：她高兴得眼睛都亮了。",py:"Māma gàosu wǒ: Tā gāoxìng de yǎnjing dōu liàng le.",vi:"Mẹ bảo tôi: Cô ấy vui đến mức mắt cũng sáng lên."},{tag:"Ở trường",zh:"在学校，她高兴得眼睛都亮了。",py:"Zài xuéxiào, Tā gāoxìng de yǎnjing dōu liàng le.",vi:"Ở trường, Cô ấy vui đến mức mắt cũng sáng lên."},{tag:"Lúc đi làm",zh:"上班的时候，她高兴得眼睛都亮了。",py:"Shàngbān de shíhou, Tā gāoxìng de yǎnjing dōu liàng le.",vi:"Lúc đi làm, Cô ấy vui đến mức mắt cũng sáng lên."}],
    explanation:"Sau 得 có thể là một cụm chủ-vị mô tả trạng thái.",
    note:"Dùng để làm rõ mức độ."
  },

  {
    id:"hsk5_104",
    pattern:"有着",
    title:"有着 — có, mang",
    structure:"S + 有着 + O",
    example:"这座城市有着悠久的历史。",
    pinyin:"Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.",
    meaning:"Thành phố này có lịch sử lâu đời.",
    examples:[{tag:"Câu gốc",zh:"这座城市有着悠久的历史。",py:"Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.",vi:"Thành phố này có lịch sử lâu đời."},{tag:"Ở nhà",zh:"妈妈告诉我：这座城市有着悠久的历史。",py:"Māma gàosu wǒ: Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.",vi:"Mẹ bảo tôi: Thành phố này có lịch sử lâu đời."},{tag:"Ở trường",zh:"在学校，这座城市有着悠久的历史。",py:"Zài xuéxiào, Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.",vi:"Ở trường, Thành phố này có lịch sử lâu đời."},{tag:"Lúc đi làm",zh:"上班的时候，这座城市有着悠久的历史。",py:"Shàngbān de shíhou, Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.",vi:"Lúc đi làm, Thành phố này có lịch sử lâu đời."}],
    explanation:"有着 nhấn mạnh trạng thái sở hữu hoặc đặc điểm tồn tại.",
    note:"Thường gặp trong văn viết."
  },

  {
    id:"hsk5_105",
    pattern:"V有",
    title:"V有 — mang, có được",
    structure:"S + V + 有 + O",
    example:"这座桥保存有许多历史资料。",
    pinyin:"Zhè zuò qiáo bǎocún yǒu xǔduō lìshǐ zīliào.",
    meaning:"Cây cầu này lưu giữ nhiều tư liệu lịch sử.",
    examples:[{tag:"Câu gốc",zh:"这座桥保存有许多历史资料。",py:"Zhè zuò qiáo bǎocún yǒu xǔduō lìshǐ zīliào.",vi:"Cây cầu này lưu giữ nhiều tư liệu lịch sử."},{tag:"Ở nhà",zh:"妈妈告诉我：这座桥保存有许多历史资料。",py:"Māma gàosu wǒ: Zhè zuò qiáo bǎocún yǒu xǔduō lìshǐ zīliào.",vi:"Mẹ bảo tôi: Cây cầu này lưu giữ nhiều tư liệu lịch sử."},{tag:"Ở trường",zh:"在学校，这座桥保存有许多历史资料。",py:"Zài xuéxiào, Zhè zuò qiáo bǎocún yǒu xǔduō lìshǐ zīliào.",vi:"Ở trường, Cây cầu này lưu giữ nhiều tư liệu lịch sử."},{tag:"Lúc đi làm",zh:"上班的时候，这座桥保存有许多历史资料。",py:"Shàngbān de shíhou, Zhè zuò qiáo bǎocún yǒu xǔduō lìshǐ zīliào.",vi:"Lúc đi làm, Cây cầu này lưu giữ nhiều tư liệu lịch sử."}],
    explanation:"V + 有 có thể biểu thị kết quả tồn tại hoặc sự lưu giữ.",
    note:"Thường xuất hiện trong văn viết."
  },

  {
    id:"hsk5_106",
    pattern:"把+O+一+V",
    title:"把字句 — 一 + động từ",
    structure:"S + 把 + O + 一 + V",
    example:"他把门一关就走了。",
    pinyin:"Tā bǎ mén yì guān jiù zǒu le.",
    meaning:"Anh ấy vừa đóng cửa là đi ngay.",
    examples:[{tag:"Câu gốc",zh:"他把门一关就走了。",py:"Tā bǎ mén yì guān jiù zǒu le.",vi:"Anh ấy vừa đóng cửa là đi ngay."},{tag:"Ở nhà",zh:"妈妈告诉我：他把门一关就走了。",py:"Māma gàosu wǒ: Tā bǎ mén yì guān jiù zǒu le.",vi:"Mẹ bảo tôi: Anh ấy vừa đóng cửa là đi ngay."},{tag:"Ở trường",zh:"在学校，他把门一关就走了。",py:"Zài xuéxiào, Tā bǎ mén yì guān jiù zǒu le.",vi:"Ở trường, Anh ấy vừa đóng cửa là đi ngay."},{tag:"Lúc đi làm",zh:"上班的时候，他把门一关就走了。",py:"Shàngbān de shíhou, Tā bǎ mén yì guān jiù zǒu le.",vi:"Lúc đi làm, Anh ấy vừa đóng cửa là đi ngay."}],
    explanation:"一 + V nhấn mạnh một hành động được thực hiện dứt khoát rồi dẫn đến hành động sau.",
    note:"Thường đi với 就."
  },

  {
    id:"hsk5_107",
    pattern:"把+O1+V+O2",
    title:"把字句 — hai tân ngữ",
    structure:"S + 把 + O1 + V + O2",
    example:"请把这件事告诉大家。",
    pinyin:"Qǐng bǎ zhè jiàn shì gàosu dàjiā.",
    meaning:"Hãy nói chuyện này cho mọi người.",
    examples:[{tag:"Câu gốc",zh:"请把这件事告诉大家。",py:"Qǐng bǎ zhè jiàn shì gàosu dàjiā.",vi:"Hãy nói chuyện này cho mọi người."},{tag:"Ở nhà",zh:"妈妈告诉我：请把这件事告诉大家。",py:"Māma gàosu wǒ: Qǐng bǎ zhè jiàn shì gàosu dàjiā.",vi:"Mẹ bảo tôi: Hãy nói chuyện này cho mọi người."},{tag:"Ở trường",zh:"在学校，请把这件事告诉大家。",py:"Zài xuéxiào, Qǐng bǎ zhè jiàn shì gàosu dàjiā.",vi:"Ở trường, Hãy nói chuyện này cho mọi người."},{tag:"Lúc đi làm",zh:"上班的时候，请把这件事告诉大家。",py:"Shàngbān de shíhou, Qǐng bǎ zhè jiàn shì gàosu dàjiā.",vi:"Lúc đi làm, Hãy nói chuyện này cho mọi người."}],
    explanation:"O1 là đối tượng được xử lý, O2 là đối tượng nhận hoặc liên quan đến kết quả.",
    note:"Cần chú ý quan hệ giữa hai tân ngữ."
  },

  {
    id:"hsk5_108",
    pattern:"连动句",
    title:"连动句 — quan hệ nguyên nhân",
    structure:"V1 + V2",
    example:"他努力学习，取得了好成绩。",
    pinyin:"Tā nǔlì xuéxí, qǔdé le hǎo chéngjì.",
    meaning:"Anh ấy chăm chỉ học tập nên đạt thành tích tốt.",
    examples:[{tag:"Câu gốc",zh:"他努力学习，取得了好成绩。",py:"Tā nǔlì xuéxí, qǔdé le hǎo chéngjì.",vi:"Anh ấy chăm chỉ học tập nên đạt thành tích tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：他努力学习，取得了好成绩。",py:"Māma gàosu wǒ: Tā nǔlì xuéxí, qǔdé le hǎo chéngjì.",vi:"Mẹ bảo tôi: Anh ấy chăm chỉ học tập nên đạt thành tích tốt."},{tag:"Ở trường",zh:"在学校，他努力学习，取得了好成绩。",py:"Zài xuéxiào, Tā nǔlì xuéxí, qǔdé le hǎo chéngjì.",vi:"Ở trường, Anh ấy chăm chỉ học tập nên đạt thành tích tốt."},{tag:"Lúc đi làm",zh:"上班的时候，他努力学习，取得了好成绩。",py:"Shàngbān de shíhou, Tā nǔlì xuéxí, qǔdé le hǎo chéngjì.",vi:"Lúc đi làm, Anh ấy chăm chỉ học tập nên đạt thành tích tốt."}],
    explanation:"Hai hành động có thể liên kết để biểu thị quan hệ nguyên nhân – kết quả.",
    note:"Cần nhìn quan hệ logic giữa hai động từ."
  },

  {
    id:"hsk5_109",
    pattern:"连动句",
    title:"连动句 — quan hệ điều kiện",
    structure:"V1 + V2",
    example:"多练习才能提高水平。",
    pinyin:"Duō liànxí cái néng tígāo shuǐpíng.",
    meaning:"Phải luyện tập nhiều mới có thể nâng cao trình độ.",
    examples:[{tag:"Câu gốc",zh:"多练习才能提高水平。",py:"Duō liànxí cái néng tígāo shuǐpíng.",vi:"Phải luyện tập nhiều mới có thể nâng cao trình độ."},{tag:"Ở nhà",zh:"妈妈告诉我：多练习才能提高水平。",py:"Māma gàosu wǒ: Duō liànxí cái néng tígāo shuǐpíng.",vi:"Mẹ bảo tôi: Phải luyện tập nhiều mới có thể nâng cao trình độ."},{tag:"Ở trường",zh:"在学校，多练习才能提高水平。",py:"Zài xuéxiào, Duō liànxí cái néng tígāo shuǐpíng.",vi:"Ở trường, Phải luyện tập nhiều mới có thể nâng cao trình độ."},{tag:"Lúc đi làm",zh:"上班的时候，多练习才能提高水平。",py:"Shàngbān de shíhou, Duō liànxí cái néng tígāo shuǐpíng.",vi:"Lúc đi làm, Phải luyện tập nhiều mới có thể nâng cao trình độ."}],
    explanation:"Hai thành phần động từ có thể biểu thị quan hệ điều kiện.",
    note:"才能 thường làm rõ kết quả phụ thuộc điều kiện."
  },

  {
    id:"hsk5_110",
    pattern:"连动句",
    title:"连动句 — quan hệ chuyển ý",
    structure:"V1 + V2",
    example:"他想帮忙，却没有时间。",
    pinyin:"Tā xiǎng bāngmáng, què méiyǒu shíjiān.",
    meaning:"Anh ấy muốn giúp nhưng lại không có thời gian.",
    examples:[{tag:"Câu gốc",zh:"他想帮忙，却没有时间。",py:"Tā xiǎng bāngmáng, què méiyǒu shíjiān.",vi:"Anh ấy muốn giúp nhưng lại không có thời gian."},{tag:"Ở nhà",zh:"妈妈告诉我：他想帮忙，却没有时间。",py:"Māma gàosu wǒ: Tā xiǎng bāngmáng, què méiyǒu shíjiān.",vi:"Mẹ bảo tôi: Anh ấy muốn giúp nhưng lại không có thời gian."},{tag:"Ở trường",zh:"在学校，他想帮忙，却没有时间。",py:"Zài xuéxiào, Tā xiǎng bāngmáng, què méiyǒu shíjiān.",vi:"Ở trường, Anh ấy muốn giúp nhưng lại không có thời gian."},{tag:"Lúc đi làm",zh:"上班的时候，他想帮忙，却没有时间。",py:"Shàngbān de shíhou, Tā xiǎng bāngmáng, què méiyǒu shíjiān.",vi:"Lúc đi làm, Anh ấy muốn giúp nhưng lại không có thời gian."}],
    explanation:"Hai hành động hoặc trạng thái có thể tạo quan hệ đối lập hoặc chuyển ý.",
    note:"Có thể kết hợp 却、但是、可是."
  },

  {
    id:"hsk5_111",
    pattern:"A+Adj+B+数量补语",
    title:"So sánh có lượng chênh lệch",
    structure:"A + Adj + B + 数量",
    example:"他比我高五厘米。",
    pinyin:"Tā bǐ wǒ gāo wǔ límǐ.",
    meaning:"Anh ấy cao hơn tôi 5 cm.",
    examples:[{tag:"Câu gốc",zh:"他比我高五厘米。",py:"Tā bǐ wǒ gāo wǔ límǐ.",vi:"Anh ấy cao hơn tôi 5 cm."},{tag:"Tình huống khác",zh:"他比妈妈高五厘米。",py:"Tā bǐ Māma gāo wǔ límǐ.",vi:"Anh ấy cao hơn tôi 5 cm."},{tag:"Tình huống khác",zh:"他比老师高五厘米。",py:"Tā bǐ Lǎoshī gāo wǔ límǐ.",vi:"Anh ấy cao hơn tôi 5 cm."},{tag:"Tình huống khác",zh:"他比同学们高五厘米。",py:"Tā bǐ Tóngxuémen gāo wǔ límǐ.",vi:"Anh ấy cao hơn tôi 5 cm."},{tag:"Tình huống khác",zh:"她比我高五厘米。",py:"Tā bǐ wǒ gāo wǔ límǐ.",vi:"Cô ấy cao hơn tôi 5 cm."}],
    explanation:"Lượng từ phía sau tính từ biểu thị mức độ chênh lệch.",
    note:"Không dùng 很 giữa 比 và tính từ."
  },

  {
    id:"hsk5_112",
    pattern:"被/叫/让+给",
    title:"被动句 — 被/叫/让 + 给",
    structure:"S + 被/叫/让 + O + 给 + V",
    example:"我的手机被弟弟给弄坏了。",
    pinyin:"Wǒ de shǒujī bèi dìdi gěi nòng huài le.",
    meaning:"Điện thoại của tôi bị em trai làm hỏng.",
    examples:[{tag:"Câu gốc",zh:"我的手机被弟弟给弄坏了。",py:"Wǒ de shǒujī bèi dìdi gěi nòng huài le.",vi:"Điện thoại của tôi bị em trai làm hỏng."},{tag:"Tình huống khác",zh:"妈妈的手机被弟弟给弄坏了。",py:"Māma de shǒujī bèi dìdi gěi nòng huài le.",vi:"Điện thoại của tôi bị em trai làm hỏng."},{tag:"Tình huống khác",zh:"老师的手机被弟弟给弄坏了。",py:"Lǎoshī de shǒujī bèi dìdi gěi nòng huài le.",vi:"Điện thoại của tôi bị em trai làm hỏng."},{tag:"Tình huống khác",zh:"同学们的手机被弟弟给弄坏了。",py:"Tóngxuémen de shǒujī bèi dìdi gěi nòng huài le.",vi:"Điện thoại của tôi bị em trai làm hỏng."}],
    explanation:"给 trong câu bị động có tác dụng nhấn mạnh hành động đã tác động lên đối tượng.",
    note:"Khẩu ngữ rất thường gặp với 给."
  },

  {
    id:"hsk5_113",
    pattern:"承接复句",
    title:"……，便……",
    structure:"A，便 + B",
    example:"他听完消息，便马上离开了。",
    pinyin:"Tā tīng wán xiāoxi, biàn mǎshàng líkāi le.",
    meaning:"Nghe xong tin tức, anh ấy liền rời đi.",
    examples:[{tag:"Câu gốc",zh:"他听完消息，便马上离开了。",py:"Tā tīng wán xiāoxi, biàn mǎshàng líkāi le.",vi:"Nghe xong tin tức, anh ấy liền rời đi."},{tag:"Ở nhà",zh:"妈妈告诉我：他听完消息，便马上离开了。",py:"Māma gàosu wǒ: Tā tīng wán xiāoxi, biàn mǎshàng líkāi le.",vi:"Mẹ bảo tôi: Nghe xong tin tức, anh ấy liền rời đi."},{tag:"Ở trường",zh:"在学校，他听完消息，便马上离开了。",py:"Zài xuéxiào, Tā tīng wán xiāoxi, biàn mǎshàng líkāi le.",vi:"Ở trường, Nghe xong tin tức, anh ấy liền rời đi."},{tag:"Lúc đi làm",zh:"上班的时候，他听完消息，便马上离开了。",py:"Shàngbān de shíhou, Tā tīng wán xiāoxi, biàn mǎshàng líkāi le.",vi:"Lúc đi làm, Nghe xong tin tức, anh ấy liền rời đi."}],
    explanation:"便 biểu thị hành động sau xảy ra tiếp nối hành động trước.",
    note:"Trang trọng hơn 就."
  },

  {
    id:"hsk5_114",
    pattern:"或是……或是……",
    title:"或是……，或是……",
    structure:"或是 A，或是 B",
    example:"周末或是去爬山，或是在家休息。",
    pinyin:"Zhōumò huòshì qù páshān, huòshì zài jiā xiūxi.",
    meaning:"Cuối tuần hoặc là đi leo núi, hoặc là nghỉ ở nhà.",
    examples:[{tag:"Câu gốc",zh:"周末或是去爬山，或是在家休息。",py:"Zhōumò huòshì qù páshān, huòshì zài jiā xiūxi.",vi:"Cuối tuần hoặc là đi leo núi, hoặc là nghỉ ở nhà."},{tag:"Ở nhà",zh:"妈妈告诉我：周末或是去爬山，或是在家休息。",py:"Māma gàosu wǒ: Zhōumò huòshì qù páshān, huòshì zài jiā xiūxi.",vi:"Mẹ bảo tôi: Cuối tuần hoặc là đi leo núi, hoặc là nghỉ ở nhà."},{tag:"Ở trường",zh:"在学校，周末或是去爬山，或是在家休息。",py:"Zài xuéxiào, Zhōumò huòshì qù páshān, huòshì zài jiā xiūxi.",vi:"Ở trường, Cuối tuần hoặc là đi leo núi, hoặc là nghỉ ở nhà."},{tag:"Lúc đi làm",zh:"上班的时候，周末或是去爬山，或是在家休息。",py:"Shàngbān de shíhou, Zhōumò huòshì qù páshān, huòshì zài jiā xiūxi.",vi:"Lúc đi làm, Cuối tuần hoặc là đi leo núi, hoặc là nghỉ ở nhà."}],
    explanation:"Biểu thị hai khả năng lựa chọn.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_115",
    pattern:"万一……就……",
    title:"万一……就……",
    structure:"万一 + S + V，就 + S + V",
    example:"万一出了问题，就马上告诉我。",
    pinyin:"Wànyī chū le wèntí, jiù mǎshàng gàosu wǒ.",
    meaning:"Nếu chẳng may xảy ra vấn đề thì lập tức nói cho tôi.",
    examples:[{tag:"Câu gốc",zh:"万一出了问题，就马上告诉我。",py:"Wànyī chū le wèntí, jiù mǎshàng gàosu wǒ.",vi:"Nếu chẳng may xảy ra vấn đề thì lập tức nói cho tôi."},{tag:"Tình huống khác",zh:"万一出了问题，就马上告诉妈妈。",py:"Wànyī chū le wèntí, jiù mǎshàng gàosu Māma.",vi:"Nếu chẳng may xảy ra vấn đề thì lập tức nói cho tôi."},{tag:"Tình huống khác",zh:"万一出了问题，就马上告诉老师。",py:"Wànyī chū le wèntí, jiù mǎshàng gàosu Lǎoshī.",vi:"Nếu chẳng may xảy ra vấn đề thì lập tức nói cho tôi."},{tag:"Tình huống khác",zh:"万一出了问题，就马上告诉同学们。",py:"Wànyī chū le wèntí, jiù mǎshàng gàosu Tóngxuémen.",vi:"Nếu chẳng may xảy ra vấn đề thì lập tức nói cho tôi."}],
    explanation:"万一 biểu thị giả thiết có xác suất không cao nhưng hậu quả cần đề phòng.",
    note:"Thường đi với 就."
  },

  {
    id:"hsk5_116",
    pattern:"要不然",
    title:"要不然 / 不然 — nếu không thì",
    structure:"……，要不然 / 不然……",
    example:"快一点，要不然就迟到了。",
    pinyin:"Kuài yìdiǎn, yàobùrán jiù chídào le.",
    meaning:"Nhanh lên, nếu không sẽ muộn mất.",
    examples:[{tag:"Câu gốc",zh:"快一点，要不然就迟到了。",py:"Kuài yìdiǎn, yàobùrán jiù chídào le.",vi:"Nhanh lên, nếu không sẽ muộn mất."},{tag:"Ở nhà",zh:"妈妈告诉我：快一点，要不然就迟到了。",py:"Māma gàosu wǒ: Kuài yìdiǎn, yàobùrán jiù chídào le.",vi:"Mẹ bảo tôi: Nhanh lên, nếu không sẽ muộn mất."},{tag:"Ở trường",zh:"在学校，快一点，要不然就迟到了。",py:"Zài xuéxiào, Kuài yìdiǎn, yàobùrán jiù chídào le.",vi:"Ở trường, Nhanh lên, nếu không sẽ muộn mất."},{tag:"Lúc đi làm",zh:"上班的时候，快一点，要不然就迟到了。",py:"Shàngbān de shíhou, Kuài yìdiǎn, yàobùrán jiù chídào le.",vi:"Lúc đi làm, Nhanh lên, nếu không sẽ muộn mất."}],
    explanation:"Đưa ra hậu quả nếu không thực hiện hành động trước.",
    note:"Khẩu ngữ."
  },

  {
    id:"hsk5_117",
    pattern:"因而",
    title:"因而 — vì vậy, do đó",
    structure:"原因，因而 + 结果",
    example:"天气突然变化，因而比赛被推迟了。",
    pinyin:"Tiānqì tūrán biànhuà, yīn'ér bǐsài bèi tuīchí le.",
    meaning:"Thời tiết đột nhiên thay đổi, vì vậy trận đấu bị hoãn.",
    examples:[{tag:"Câu gốc",zh:"天气突然变化，因而比赛被推迟了。",py:"Tiānqì tūrán biànhuà, yīn'ér bǐsài bèi tuīchí le.",vi:"Thời tiết đột nhiên thay đổi, vì vậy trận đấu bị hoãn."},{tag:"Ở nhà",zh:"妈妈告诉我：天气突然变化，因而比赛被推迟了。",py:"Māma gàosu wǒ: Tiānqì tūrán biànhuà, yīn'ér bǐsài bèi tuīchí le.",vi:"Mẹ bảo tôi: Thời tiết đột nhiên thay đổi, vì vậy trận đấu bị hoãn."},{tag:"Ở trường",zh:"在学校，天气突然变化，因而比赛被推迟了。",py:"Zài xuéxiào, Tiānqì tūrán biànhuà, yīn'ér bǐsài bèi tuīchí le.",vi:"Ở trường, Thời tiết đột nhiên thay đổi, vì vậy trận đấu bị hoãn."},{tag:"Lúc đi làm",zh:"上班的时候，天气突然变化，因而比赛被推迟了。",py:"Shàngbān de shíhou, Tiānqì tūrán biànhuà, yīn'ér bǐsài bèi tuīchí le.",vi:"Lúc đi làm, Thời tiết đột nhiên thay đổi, vì vậy trận đấu bị hoãn."}],
    explanation:"因而 nối nguyên nhân với kết quả.",
    note:"Thường dùng trong văn viết."
  },

  {
    id:"hsk5_118",
    pattern:"哪怕……也……",
    title:"哪怕……，也……",
    structure:"哪怕 + điều kiện，S + 也 + V",
    example:"哪怕很困难，我也不会放弃。",
    pinyin:"Nǎpà hěn kùnnan, wǒ yě bú huì fàngqì.",
    meaning:"Dù có khó khăn đến đâu tôi cũng không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"哪怕很困难，我也不会放弃。",py:"Nǎpà hěn kùnnan, wǒ yě bú huì fàngqì.",vi:"Dù có khó khăn đến đâu tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"哪怕很困难，妈妈也不会放弃。",py:"Nǎpà hěn kùnnan, Māma yě bú huì fàngqì.",vi:"Dù có khó khăn đến đâu tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"哪怕很困难，老师也不会放弃。",py:"Nǎpà hěn kùnnan, Lǎoshī yě bú huì fàngqì.",vi:"Dù có khó khăn đến đâu tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"哪怕很困难，同学们也不会放弃。",py:"Nǎpà hěn kùnnan, Tóngxuémen yě bú huì fàngqì.",vi:"Dù có khó khăn đến đâu tôi cũng không bỏ cuộc."}],
    explanation:"哪怕 biểu thị điều kiện nhượng bộ mạnh.",
    note:"Nhấn mạnh kết quả không thay đổi."
  },

  {
    id:"hsk5_119",
    pattern:"不但不……反而……",
    title:"不但不……，反而……",
    structure:"不但不 + V，反而 + V",
    example:"他不但不道歉，反而责怪别人。",
    pinyin:"Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",
    meaning:"Anh ấy không những không xin lỗi mà ngược lại còn trách người khác.",
    examples:[{tag:"Câu gốc",zh:"他不但不道歉，反而责怪别人。",py:"Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Anh ấy không những không xin lỗi mà ngược lại còn trách người khác."},{tag:"Ở nhà",zh:"妈妈告诉我：他不但不道歉，反而责怪别人。",py:"Māma gàosu wǒ: Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Mẹ bảo tôi: Anh ấy không những không xin lỗi mà ngược lại còn trách người khác."},{tag:"Ở trường",zh:"在学校，他不但不道歉，反而责怪别人。",py:"Zài xuéxiào, Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Ở trường, Anh ấy không những không xin lỗi mà ngược lại còn trách người khác."},{tag:"Lúc đi làm",zh:"上班的时候，他不但不道歉，反而责怪别人。",py:"Shàngbān de shíhou, Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Lúc đi làm, Anh ấy không những không xin lỗi mà ngược lại còn trách người khác."}],
    explanation:"Biểu thị kết quả trái với điều thông thường dự đoán.",
    note:"反而 là phần kết quả đối lập."
  },

  {
    id:"hsk5_120",
    pattern:"不但没有……反而……",
    title:"不但没有……，反而……",
    structure:"不但没有 + V，反而 + V",
    example:"他不但没有失败，反而取得了成功。",
    pinyin:"Tā búdàn méiyǒu shībài, fǎn'ér qǔdé le chénggōng.",
    meaning:"Anh ấy không những không thất bại mà ngược lại còn thành công.",
    examples:[{tag:"Câu gốc",zh:"他不但没有失败，反而取得了成功。",py:"Tā búdàn méiyǒu shībài, fǎn'ér qǔdé le chénggōng.",vi:"Anh ấy không những không thất bại mà ngược lại còn thành công."},{tag:"Ở nhà",zh:"妈妈告诉我：他不但没有失败，反而取得了成功。",py:"Māma gàosu wǒ: Tā búdàn méiyǒu shībài, fǎn'ér qǔdé le chénggōng.",vi:"Mẹ bảo tôi: Anh ấy không những không thất bại mà ngược lại còn thành công."},{tag:"Ở trường",zh:"在学校，他不但没有失败，反而取得了成功。",py:"Zài xuéxiào, Tā búdàn méiyǒu shībài, fǎn'ér qǔdé le chénggōng.",vi:"Ở trường, Anh ấy không những không thất bại mà ngược lại còn thành công."},{tag:"Lúc đi làm",zh:"上班的时候，他不但没有失败，反而取得了成功。",py:"Shàngbān de shíhou, Tā búdàn méiyǒu shībài, fǎn'ér qǔdé le chénggōng.",vi:"Lúc đi làm, Anh ấy không những không thất bại mà ngược lại còn thành công."}],
    explanation:"Dùng khi kết quả thực tế trái với dự đoán.",
    note:"没有 nhấn mạnh hành động không xảy ra."
  },

  {
    id:"hsk5_121",
    pattern:"不是……还/还是……",
    title:"不是……，还/还是……",
    structure:"不是 A，还/还是 B",
    example:"他不是不努力，还是方法不对。",
    pinyin:"Tā bú shì bù nǔlì, háishi fāngfǎ bú duì.",
    meaning:"Không phải anh ấy không cố gắng, mà là phương pháp chưa đúng.",
    examples:[{tag:"Câu gốc",zh:"他不是不努力，还是方法不对。",py:"Tā bú shì bù nǔlì, háishi fāngfǎ bú duì.",vi:"Không phải anh ấy không cố gắng, mà là phương pháp chưa đúng."},{tag:"Ở nhà",zh:"妈妈告诉我：他不是不努力，还是方法不对。",py:"Māma gàosu wǒ: Tā bú shì bù nǔlì, háishi fāngfǎ bú duì.",vi:"Mẹ bảo tôi: Không phải anh ấy không cố gắng, mà là phương pháp chưa đúng."},{tag:"Ở trường",zh:"在学校，他不是不努力，还是方法不对。",py:"Zài xuéxiào, Tā bú shì bù nǔlì, háishi fāngfǎ bú duì.",vi:"Ở trường, Không phải anh ấy không cố gắng, mà là phương pháp chưa đúng."},{tag:"Lúc đi làm",zh:"上班的时候，他不是不努力，还是方法不对。",py:"Shàngbān de shíhou, Tā bú shì bù nǔlì, háishi fāngfǎ bú duì.",vi:"Lúc đi làm, Không phải anh ấy không cố gắng, mà là phương pháp chưa đúng."}],
    explanation:"Dùng để phủ nhận một cách giải thích rồi đưa ra cách giải thích khác.",
    note:"Cần dựa vào ngữ cảnh để dịch tự nhiên."
  },

  {
    id:"hsk5_122",
    pattern:"为的是",
    title:"为的是 — là để",
    structure:"……，为的是 + mục đích",
    example:"我们努力学习，为的是将来有更多选择。",
    pinyin:"Wǒmen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",
    meaning:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn.",
    examples:[{tag:"Câu gốc",zh:"我们努力学习，为的是将来有更多选择。",py:"Wǒmen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",vi:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn."},{tag:"Tình huống khác",zh:"妈妈们努力学习，为的是将来有更多选择。",py:"Māmamen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",vi:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn."},{tag:"Tình huống khác",zh:"老师们努力学习，为的是将来有更多选择。",py:"Lǎoshīmen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",vi:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn."},{tag:"Tình huống khác",zh:"同学们们努力学习，为的是将来有更多选择。",py:"Tóngxuémenmen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",vi:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn."},{tag:"Tình huống khác",zh:"他们努力学习，为的是将来有更多选择。",py:"Tāmen nǔlì xuéxí, wèi de shì jiānglái yǒu gèng duō xuǎnzé.",vi:"Chúng ta cố gắng học tập là để sau này có nhiều lựa chọn hơn."}],
    explanation:"为的是 giới thiệu mục đích của hành động trước.",
    note:"Thường dùng để giải thích mục đích."
  },

  {
    id:"hsk5_123",
    pattern:"没有……就没有……",
    title:"没有……，就没有……",
    structure:"没有 A，就没有 B",
    example:"没有大家的帮助，就没有今天的成功。",
    pinyin:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",
    meaning:"Không có sự giúp đỡ của mọi người thì đã không có thành công hôm nay.",
    examples:[{tag:"Câu gốc",zh:"没有大家的帮助，就没有今天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì đã không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大家的帮助，就没有昨天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu Zuótiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì đã không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大家的帮助，就没有明天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu Míngtiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì đã không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大学校的帮助，就没有今天的成功。",py:"Méiyǒu dàxuéxiào de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì đã không có thành công hôm nay."}],
    explanation:"Biểu thị quan hệ điều kiện mang tính nền tảng giữa hai sự việc.",
    note:"B thường là kết quả phụ thuộc vào A."
  },

  {
    id:"hsk5_124",
    pattern:"不……不……",
    title:"不……不…… — không… thì không…",
    structure:"不 + V1 + 不 + V2",
    example:"不认真学习，就不会取得好成绩。",
    pinyin:"Bù rènzhēn xuéxí, jiù bú huì qǔdé hǎo chéngjì.",
    meaning:"Không học tập nghiêm túc thì sẽ không đạt thành tích tốt.",
    examples:[{tag:"Câu gốc",zh:"不认真学习，就不会取得好成绩。",py:"Bù rènzhēn xuéxí, jiù bú huì qǔdé hǎo chéngjì.",vi:"Không học tập nghiêm túc thì sẽ không đạt thành tích tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：不认真学习，就不会取得好成绩。",py:"Māma gàosu wǒ: Bù rènzhēn xuéxí, jiù bú huì qǔdé hǎo chéngjì.",vi:"Mẹ bảo tôi: Không học tập nghiêm túc thì sẽ không đạt thành tích tốt."},{tag:"Ở trường",zh:"在学校，不认真学习，就不会取得好成绩。",py:"Zài xuéxiào, Bù rènzhēn xuéxí, jiù bú huì qǔdé hǎo chéngjì.",vi:"Ở trường, Không học tập nghiêm túc thì sẽ không đạt thành tích tốt."},{tag:"Lúc đi làm",zh:"上班的时候，不认真学习，就不会取得好成绩。",py:"Shàngbān de shíhou, Bù rènzhēn xuéxí, jiù bú huì qǔdé hǎo chéngjì.",vi:"Lúc đi làm, Không học tập nghiêm túc thì sẽ không đạt thành tích tốt."}],
    explanation:"Biểu thị điều kiện cần thiết để đạt kết quả.",
    note:"Có thể dùng 就 để làm rõ quan hệ."
  },

  {
    id:"hsk5_125",
    pattern:"再……也……",
    title:"再……，也……",
    structure:"再 + Adj / V + 也 + V",
    example:"再困难，我也会坚持下去。",
    pinyin:"Zài kùnnan, wǒ yě huì jiānchí xiàqu.",
    meaning:"Dù khó khăn đến đâu tôi cũng sẽ kiên trì.",
    examples:[{tag:"Câu gốc",zh:"再困难，我也会坚持下去。",py:"Zài kùnnan, wǒ yě huì jiānchí xiàqu.",vi:"Dù khó khăn đến đâu tôi cũng sẽ kiên trì."},{tag:"Tình huống khác",zh:"再困难，妈妈也会坚持下去。",py:"Zài kùnnan, Māma yě huì jiānchí xiàqu.",vi:"Dù khó khăn đến đâu tôi cũng sẽ kiên trì."},{tag:"Tình huống khác",zh:"再困难，老师也会坚持下去。",py:"Zài kùnnan, Lǎoshī yě huì jiānchí xiàqu.",vi:"Dù khó khăn đến đâu tôi cũng sẽ kiên trì."},{tag:"Tình huống khác",zh:"再困难，同学们也会坚持下去。",py:"Zài kùnnan, Tóngxuémen yě huì jiānchí xiàqu.",vi:"Dù khó khăn đến đâu tôi cũng sẽ kiên trì."}],
    explanation:"再 biểu thị mức độ giả định cao nhưng kết quả vẫn không thay đổi.",
    note:"Đây là cấu trúc nhượng bộ."
  }

],

    6: [

  /* =========================================================
     🇨🇳 HSK 6 — 210 ĐIỂM NGỮ PHÁP
     30 nhóm syllabus HSK 3.0
     + phân rã thành các điểm học nhỏ
     Pinyin hiển thị ngay dưới Mẫu ngữ pháp
  ========================================================= */

  {
    id:"hsk6_001",
    pattern:"超-",
    title:"超-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">chāo-</div>",
    structure:"超 + 名词/形容词",
    example:"超现代的建筑吸引了很多游客。",
    pinyin:"Chāo xiàndài de jiànzhù xīyǐn le hěn duō yóukè.",
    meaning:"Công trình kiến trúc siêu hiện đại thu hút rất nhiều du khách.",
    explanation:"超-表示超过通常程度。",
    note:"常用于构成新词。"
  },

  {
    id:"hsk6_002",
    pattern:"多-",
    title:"多-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">duō-</div>",
    structure:"多 + 名词",
    example:"多民族社会需要彼此尊重。",
    pinyin:"Duō mínzú shèhuì xūyào bǐcǐ zūnzhòng.",
    meaning:"Xã hội đa dân tộc cần tôn trọng lẫn nhau.",
    examples:[{tag:"Câu gốc",zh:"多民族社会需要彼此尊重。",py:"Duō mínzú shèhuì xūyào bǐcǐ zūnzhòng.",vi:"Xã hội đa dân tộc cần tôn trọng lẫn nhau."},{tag:"Ở nhà",zh:"妈妈告诉我：多民族社会需要彼此尊重。",py:"Māma gàosu wǒ: Duō mínzú shèhuì xūyào bǐcǐ zūnzhòng.",vi:"Mẹ bảo tôi: Xã hội đa dân tộc cần tôn trọng lẫn nhau."},{tag:"Ở trường",zh:"在学校，多民族社会需要彼此尊重。",py:"Zài xuéxiào, Duō mínzú shèhuì xūyào bǐcǐ zūnzhòng.",vi:"Ở trường, Xã hội đa dân tộc cần tôn trọng lẫn nhau."},{tag:"Lúc đi làm",zh:"上班的时候，多民族社会需要彼此尊重。",py:"Shàngbān de shíhou, Duō mínzú shèhuì xūyào bǐcǐ zūnzhòng.",vi:"Lúc đi làm, Xã hội đa dân tộc cần tôn trọng lẫn nhau."}],
    explanation:"多-表示数量或种类较多。",
    note:"常用于正式词语。"
  },

  {
    id:"hsk6_003",
    pattern:"反-",
    title:"反-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fǎn-</div>",
    structure:"反 + 名词/动词",
    example:"反对这种做法的人越来越多。",
    pinyin:"Fǎnduì zhè zhǒng zuòfǎ de rén yuèláiyuè duō.",
    meaning:"Ngày càng có nhiều người phản đối cách làm này.",
    examples:[{tag:"Câu gốc",zh:"反对这种做法的人越来越多。",py:"Fǎnduì zhè zhǒng zuòfǎ de rén yuèláiyuè duō.",vi:"Ngày càng có nhiều người phản đối cách làm này."},{tag:"Ở nhà",zh:"妈妈告诉我：反对这种做法的人越来越多。",py:"Māma gàosu wǒ: Fǎnduì zhè zhǒng zuòfǎ de rén yuèláiyuè duō.",vi:"Mẹ bảo tôi: Ngày càng có nhiều người phản đối cách làm này."},{tag:"Ở trường",zh:"在学校，反对这种做法的人越来越多。",py:"Zài xuéxiào, Fǎnduì zhè zhǒng zuòfǎ de rén yuèláiyuè duō.",vi:"Ở trường, Ngày càng có nhiều người phản đối cách làm này."},{tag:"Lúc đi làm",zh:"上班的时候，反对这种做法的人越来越多。",py:"Shàngbān de shíhou, Fǎnduì zhè zhǒng zuòfǎ de rén yuèláiyuè duō.",vi:"Lúc đi làm, Ngày càng có nhiều người phản đối cách làm này."}],
    explanation:"反-常表示相反、对立。",
    note:"注意与单独的“反”区别。"
  },

  {
    id:"hsk6_004",
    pattern:"无-",
    title:"无-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wú-</div>",
    structure:"无 + 名词",
    example:"这里是一片无污染的水域。",
    pinyin:"Zhèlǐ shì yí piàn wú wūrǎn de shuǐyù.",
    meaning:"Đây là một vùng nước không bị ô nhiễm.",
    examples:[{tag:"Câu gốc",zh:"这里是一片无污染的水域。",py:"Zhèlǐ shì yí piàn wú wūrǎn de shuǐyù.",vi:"Đây là một vùng nước không bị ô nhiễm."},{tag:"Ở nhà",zh:"妈妈告诉我：这里是一片无污染的水域。",py:"Māma gàosu wǒ: Zhèlǐ shì yí piàn wú wūrǎn de shuǐyù.",vi:"Mẹ bảo tôi: Đây là một vùng nước không bị ô nhiễm."},{tag:"Ở trường",zh:"在学校，这里是一片无污染的水域。",py:"Zài xuéxiào, Zhèlǐ shì yí piàn wú wūrǎn de shuǐyù.",vi:"Ở trường, Đây là một vùng nước không bị ô nhiễm."},{tag:"Lúc đi làm",zh:"上班的时候，这里是一片无污染的水域。",py:"Shàngbān de shíhou, Zhèlǐ shì yí piàn wú wūrǎn de shuǐyù.",vi:"Lúc đi làm, Đây là một vùng nước không bị ô nhiễm."}],
    explanation:"无-表示没有。",
    note:"书面语色彩较强。"
  },

  {
    id:"hsk6_005",
    pattern:"亚-",
    title:"亚-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yà-</div>",
    structure:"亚 + 名词",
    example:"亚热带地区全年气候比较温暖。",
    pinyin:"Yàrèdài dìqū quánnián qìhòu bǐjiào wēnnuǎn.",
    meaning:"Khu vực cận nhiệt đới có khí hậu khá ấm quanh năm.",
    examples:[{tag:"Câu gốc",zh:"亚热带地区全年气候比较温暖。",py:"Yàrèdài dìqū quánnián qìhòu bǐjiào wēnnuǎn.",vi:"Khu vực cận nhiệt đới có khí hậu khá ấm quanh năm."},{tag:"Ở nhà",zh:"妈妈告诉我：亚热带地区全年气候比较温暖。",py:"Māma gàosu wǒ: Yàrèdài dìqū quánnián qìhòu bǐjiào wēnnuǎn.",vi:"Mẹ bảo tôi: Khu vực cận nhiệt đới có khí hậu khá ấm quanh năm."},{tag:"Ở trường",zh:"在学校，亚热带地区全年气候比较温暖。",py:"Zài xuéxiào, Yàrèdài dìqū quánnián qìhòu bǐjiào wēnnuǎn.",vi:"Ở trường, Khu vực cận nhiệt đới có khí hậu khá ấm quanh năm."},{tag:"Lúc đi làm",zh:"上班的时候，亚热带地区全年气候比较温暖。",py:"Shàngbān de shíhou, Yàrèdài dìqū quánnián qìhòu bǐjiào wēnnuǎn.",vi:"Lúc đi làm, Khu vực cận nhiệt đới có khí hậu khá ấm quanh năm."}],
    explanation:"亚-表示次一级或接近某一类别。",
    note:"常见于地理、科学词汇。"
  },

  {
    id:"hsk6_006",
    pattern:"准-",
    title:"准-<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhǔn-</div>",
    structure:"准 + 名词",
    example:"这是一家准专业的培训机构。",
    pinyin:"Zhè shì yì jiā zhǔn zhuānyè de péixùn jīgòu.",
    meaning:"Đây là một cơ sở đào tạo bán chuyên nghiệp.",
    examples:[{tag:"Câu gốc",zh:"这是一家准专业的培训机构。",py:"Zhè shì yì jiā zhǔn zhuānyè de péixùn jīgòu.",vi:"Đây là một cơ sở đào tạo bán chuyên nghiệp."},{tag:"Ở nhà",zh:"妈妈告诉我：这是一家准专业的培训机构。",py:"Māma gàosu wǒ: Zhè shì yì jiā zhǔn zhuānyè de péixùn jīgòu.",vi:"Mẹ bảo tôi: Đây là một cơ sở đào tạo bán chuyên nghiệp."},{tag:"Ở trường",zh:"在学校，这是一家准专业的培训机构。",py:"Zài xuéxiào, Zhè shì yì jiā zhǔn zhuānyè de péixùn jīgòu.",vi:"Ở trường, Đây là một cơ sở đào tạo bán chuyên nghiệp."},{tag:"Lúc đi làm",zh:"上班的时候，这是一家准专业的培训机构。",py:"Shàngbān de shíhou, Zhè shì yì jiā zhǔn zhuānyè de péixùn jīgòu.",vi:"Lúc đi làm, Đây là một cơ sở đào tạo bán chuyên nghiệp."}],
    explanation:"准-表示接近某种性质或标准。",
    note:"多用于正式词语。"
  },

  {
    id:"hsk6_007",
    pattern:"-化",
    title:"-化<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">-huà</div>",
    structure:"名词/形容词 + 化",
    example:"城市现代化改变了人们的生活方式。",
    pinyin:"Chéngshì xiàndàihuà gǎibiàn le rénmen de shēnghuó fāngshì.",
    meaning:"Hiện đại hóa đô thị đã thay đổi phương thức sống của con người.",
    examples:[{tag:"Câu gốc",zh:"城市现代化改变了人们的生活方式。",py:"Chéngshì xiàndàihuà gǎibiàn le rénmen de shēnghuó fāngshì.",vi:"Hiện đại hóa đô thị đã thay đổi phương thức sống của con người."},{tag:"Ở nhà",zh:"妈妈告诉我：城市现代化改变了人们的生活方式。",py:"Māma gàosu wǒ: Chéngshì xiàndàihuà gǎibiàn le rénmen de shēnghuó fāngshì.",vi:"Mẹ bảo tôi: Hiện đại hóa đô thị đã thay đổi phương thức sống của con người."},{tag:"Ở trường",zh:"在学校，城市现代化改变了人们的生活方式。",py:"Zài xuéxiào, Chéngshì xiàndàihuà gǎibiàn le rénmen de shēnghuó fāngshì.",vi:"Ở trường, Hiện đại hóa đô thị đã thay đổi phương thức sống của con người."},{tag:"Lúc đi làm",zh:"上班的时候，城市现代化改变了人们的生活方式。",py:"Shàngbān de shíhou, Chéngshì xiàndàihuà gǎibiàn le rénmen de shēnghuó fāngshì.",vi:"Lúc đi làm, Hiện đại hóa đô thị đã thay đổi phương thức sống của con người."}],
    explanation:"-化表示使某事物具有某种性质或发生某种变化。",
    note:"常构成抽象名词或动词。"
  },

  {
    id:"hsk6_008",
    pattern:"-式",
    title:"-式<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">-shì</div>",
    structure:"名词 + 式",
    example:"公司采用开放式办公环境。",
    pinyin:"Gōngsī cǎiyòng kāifàngshì bàngōng huánjìng.",
    meaning:"Công ty áp dụng môi trường văn phòng mở.",
    examples:[{tag:"Câu gốc",zh:"公司采用开放式办公环境。",py:"Gōngsī cǎiyòng kāifàngshì bàngōng huánjìng.",vi:"Công ty áp dụng môi trường văn phòng mở."},{tag:"Ở nhà",zh:"妈妈告诉我：公司采用开放式办公环境。",py:"Māma gàosu wǒ: Gōngsī cǎiyòng kāifàngshì bàngōng huánjìng.",vi:"Mẹ bảo tôi: Công ty áp dụng môi trường văn phòng mở."},{tag:"Ở trường",zh:"在学校，公司采用开放式办公环境。",py:"Zài xuéxiào, Gōngsī cǎiyòng kāifàngshì bàngōng huánjìng.",vi:"Ở trường, Công ty áp dụng môi trường văn phòng mở."},{tag:"Lúc đi làm",zh:"上班的时候，公司采用开放式办公环境。",py:"Shàngbān de shíhou, Gōngsī cǎiyòng kāifàngshì bàngōng huánjìng.",vi:"Lúc đi làm, Công ty áp dụng môi trường văn phòng mở."}],
    explanation:"-式表示形式、方式。",
    note:"常用于正式书面语。"
  },

  {
    id:"hsk6_009",
    pattern:"-型",
    title:"-型<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">-xíng</div>",
    structure:"名词 + 型",
    example:"这种产品属于节能型设备。",
    pinyin:"Zhè zhǒng chǎnpǐn shǔyú jiénéng xíng shèbèi.",
    meaning:"Loại sản phẩm này thuộc thiết bị tiết kiệm năng lượng.",
    examples:[{tag:"Câu gốc",zh:"这种产品属于节能型设备。",py:"Zhè zhǒng chǎnpǐn shǔyú jiénéng xíng shèbèi.",vi:"Loại sản phẩm này thuộc thiết bị tiết kiệm năng lượng."},{tag:"Ở nhà",zh:"妈妈告诉我：这种产品属于节能型设备。",py:"Māma gàosu wǒ: Zhè zhǒng chǎnpǐn shǔyú jiénéng xíng shèbèi.",vi:"Mẹ bảo tôi: Loại sản phẩm này thuộc thiết bị tiết kiệm năng lượng."},{tag:"Ở trường",zh:"在学校，这种产品属于节能型设备。",py:"Zài xuéxiào, Zhè zhǒng chǎnpǐn shǔyú jiénéng xíng shèbèi.",vi:"Ở trường, Loại sản phẩm này thuộc thiết bị tiết kiệm năng lượng."},{tag:"Lúc đi làm",zh:"上班的时候，这种产品属于节能型设备。",py:"Shàngbān de shíhou, Zhè zhǒng chǎnpǐn shǔyú jiénéng xíng shèbèi.",vi:"Lúc đi làm, Loại sản phẩm này thuộc thiết bị tiết kiệm năng lượng."}],
    explanation:"-型表示类型。",
    note:"常用于产品、人物和社会类型。"
  },

  {
    id:"hsk6_010",
    pattern:"-性",
    title:"-性<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">-xìng</div>",
    structure:"名词/形容词 + 性",
    example:"这种材料具有很强的耐用性。",
    pinyin:"Zhè zhǒng cáiliào jùyǒu hěn qiáng de nàiyòngxìng.",
    meaning:"Loại vật liệu này có tính bền rất cao.",
    examples:[{tag:"Câu gốc",zh:"这种材料具有很强的耐用性。",py:"Zhè zhǒng cáiliào jùyǒu hěn qiáng de nàiyòngxìng.",vi:"Loại vật liệu này có tính bền rất cao."},{tag:"Ở nhà",zh:"妈妈告诉我：这种材料具有很强的耐用性。",py:"Māma gàosu wǒ: Zhè zhǒng cáiliào jùyǒu hěn qiáng de nàiyòngxìng.",vi:"Mẹ bảo tôi: Loại vật liệu này có tính bền rất cao."},{tag:"Ở trường",zh:"在学校，这种材料具有很强的耐用性。",py:"Zài xuéxiào, Zhè zhǒng cáiliào jùyǒu hěn qiáng de nàiyòngxìng.",vi:"Ở trường, Loại vật liệu này có tính bền rất cao."},{tag:"Lúc đi làm",zh:"上班的时候，这种材料具有很强的耐用性。",py:"Shàngbān de shíhou, Zhè zhǒng cáiliào jùyǒu hěn qiáng de nàiyòngxìng.",vi:"Lúc đi làm, Loại vật liệu này có tính bền rất cao."}],
    explanation:"-性表示性质、特征。",
    note:"常形成抽象名词。"
  },

  {
    id:"hsk6_011",
    pattern:"人家①",
    title:"人家<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">rénjia</div>",
    structure:"人家 + 动词",
    example:"人家已经说得很清楚了。",
    pinyin:"Rénjia yǐjīng shuō de hěn qīngchu le.",
    meaning:"Người ta đã nói rất rõ rồi.",
    examples:[{tag:"Câu gốc",zh:"人家已经说得很清楚了。",py:"Rénjia yǐjīng shuō de hěn qīngchu le.",vi:"Người ta đã nói rất rõ rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：人家已经说得很清楚了。",py:"Māma gàosu wǒ: Rénjia yǐjīng shuō de hěn qīngchu le.",vi:"Mẹ bảo tôi: Người ta đã nói rất rõ rồi."},{tag:"Ở trường",zh:"在学校，人家已经说得很清楚了。",py:"Zài xuéxiào, Rénjia yǐjīng shuō de hěn qīngchu le.",vi:"Ở trường, Người ta đã nói rất rõ rồi."},{tag:"Lúc đi làm",zh:"上班的时候，人家已经说得很清楚了。",py:"Shàngbān de shíhou, Rénjia yǐjīng shuō de hěn qīngchu le.",vi:"Lúc đi làm, Người ta đã nói rất rõ rồi."}],
    explanation:"人家可指别人。",
    note:"口语常用。"
  },

  {
    id:"hsk6_012",
    pattern:"人家②",
    title:"人家<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">rénjia</div>",
    structure:"人家 + 情感/评价",
    example:"人家辛辛苦苦准备了这么久，你怎么能不去？",
    pinyin:"Rénjia xīnxīnkǔkǔ zhǔnbèi le zhème jiǔ, nǐ zěnme néng bú qù?",
    meaning:"Người ta đã vất vả chuẩn bị lâu như vậy, sao anh lại không đi?",
    examples:[{tag:"Câu gốc",zh:"人家辛辛苦苦准备了这么久，你怎么能不去？",py:"Rénjia xīnxīnkǔkǔ zhǔnbèi le zhème jiǔ, nǐ zěnme néng bú qù?",vi:"Người ta đã vất vả chuẩn bị lâu như vậy, sao anh lại không đi?"},{tag:"Ở nhà",zh:"妈妈告诉我：人家辛辛苦苦准备了这么久，你怎么能不去？",py:"Māma gàosu wǒ: Rénjia xīnxīnkǔkǔ zhǔnbèi le zhème jiǔ, nǐ zěnme néng bú qù?",vi:"Mẹ bảo tôi: Người ta đã vất vả chuẩn bị lâu như vậy, sao anh lại không đi?"},{tag:"Ở trường",zh:"在学校，人家辛辛苦苦准备了这么久，你怎么能不去？",py:"Zài xuéxiào, Rénjia xīnxīnkǔkǔ zhǔnbèi le zhème jiǔ, nǐ zěnme néng bú qù?",vi:"Ở trường, Người ta đã vất vả chuẩn bị lâu như vậy, sao anh lại không đi?"},{tag:"Lúc đi làm",zh:"上班的时候，人家辛辛苦苦准备了这么久，你怎么能不去？",py:"Shàngbān de shíhou, Rénjia xīnxīnkǔkǔ zhǔnbèi le zhème jiǔ, nǐ zěnme néng bú qù?",vi:"Lúc đi làm, Người ta đã vất vả chuẩn bị lâu như vậy, sao anh lại không đi?"}],
    explanation:"人家还可带有委婉、责备或撒娇语气。",
    note:"具体语气依上下文而定。"
  },

  {
    id:"hsk6_013",
    pattern:"串",
    title:"串 + 量词",
    structure:"一串 + 名词",
    example:"门口挂着一串彩灯。",
    pinyin:"Ménkǒu guàzhe yí chuàn cǎidēng.",
    meaning:"Trước cửa treo một chuỗi đèn màu.",
    examples:[{tag:"Câu gốc",zh:"门口挂着一串彩灯。",py:"Ménkǒu guàzhe yí chuàn cǎidēng.",vi:"Trước cửa treo một chuỗi đèn màu."},{tag:"Ở nhà",zh:"妈妈告诉我：门口挂着一串彩灯。",py:"Māma gàosu wǒ: Ménkǒu guàzhe yí chuàn cǎidēng.",vi:"Mẹ bảo tôi: Trước cửa treo một chuỗi đèn màu."},{tag:"Ở trường",zh:"在学校，门口挂着一串彩灯。",py:"Zài xuéxiào, Ménkǒu guàzhe yí chuàn cǎidēng.",vi:"Ở trường, Trước cửa treo một chuỗi đèn màu."},{tag:"Lúc đi làm",zh:"上班的时候，门口挂着一串彩灯。",py:"Shàngbān de shíhou, Ménkǒu guàzhe yí chuàn cǎidēng.",vi:"Lúc đi làm, Trước cửa treo một chuỗi đèn màu."}],
    explanation:"串用于成串的东西。",
    note:"如一串葡萄、一串钥匙。"
  },

  {
    id:"hsk6_014",
    pattern:"滴",
    title:"滴 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dī</div>",
    structure:"一滴 + 液体",
    example:"杯子里一滴水也没有。",
    pinyin:"Bēizi lǐ yì dī shuǐ yě méiyǒu.",
    meaning:"Trong cốc không có lấy một giọt nước.",
    examples:[{tag:"Câu gốc",zh:"杯子里一滴水也没有。",py:"Bēizi lǐ yì dī shuǐ yě méiyǒu.",vi:"Trong cốc không có lấy một giọt nước."},{tag:"Ở nhà",zh:"妈妈告诉我：杯子里一滴水也没有。",py:"Māma gàosu wǒ: Bēizi lǐ yì dī shuǐ yě méiyǒu.",vi:"Mẹ bảo tôi: Trong cốc không có lấy một giọt nước."},{tag:"Ở trường",zh:"在学校，杯子里一滴水也没有。",py:"Zài xuéxiào, Bēizi lǐ yì dī shuǐ yě méiyǒu.",vi:"Ở trường, Trong cốc không có lấy một giọt nước."},{tag:"Lúc đi làm",zh:"上班的时候，杯子里一滴水也没有。",py:"Shàngbān de shíhou, Bēizi lǐ yì dī shuǐ yě méiyǒu.",vi:"Lúc đi làm, Trong cốc không có lấy một giọt nước."}],
    explanation:"滴表示少量液体。",
    note:"常与水、油、泪等搭配。"
  },

  {
    id:"hsk6_015",
    pattern:"枝",
    title:"枝 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhī</div>",
    structure:"一枝 + 花/笔",
    example:"她手里拿着一枝玫瑰。",
    pinyin:"Tā shǒu lǐ názhe yì zhī méiguī.",
    meaning:"Cô ấy cầm một cành hoa hồng trên tay.",
    examples:[{tag:"Câu gốc",zh:"她手里拿着一枝玫瑰。",py:"Tā shǒu lǐ názhe yì zhī méiguī.",vi:"Cô ấy cầm một cành hoa hồng trên tay."},{tag:"Ở nhà",zh:"妈妈告诉我：她手里拿着一枝玫瑰。",py:"Māma gàosu wǒ: Tā shǒu lǐ názhe yì zhī méiguī.",vi:"Mẹ bảo tôi: Cô ấy cầm một cành hoa hồng trên tay."},{tag:"Ở trường",zh:"在学校，她手里拿着一枝玫瑰。",py:"Zài xuéxiào, Tā shǒu lǐ názhe yì zhī méiguī.",vi:"Ở trường, Cô ấy cầm một cành hoa hồng trên tay."},{tag:"Lúc đi làm",zh:"上班的时候，她手里拿着一枝玫瑰。",py:"Shàngbān de shíhou, Tā shǒu lǐ názhe yì zhī méiguī.",vi:"Lúc đi làm, Cô ấy cầm một cành hoa hồng trên tay."}],
    explanation:"枝用于细长的物体。",
    note:"也常用于笔。"
  },

  {
    id:"hsk6_016",
    pattern:"扇",
    title:"扇 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shàn</div>",
    structure:"一扇 + 门/窗",
    example:"房间里有两扇大窗户。",
    pinyin:"Fángjiān lǐ yǒu liǎng shàn dà chuānghu.",
    meaning:"Trong phòng có hai cửa sổ lớn.",
    examples:[{tag:"Câu gốc",zh:"房间里有两扇大窗户。",py:"Fángjiān lǐ yǒu liǎng shàn dà chuānghu.",vi:"Trong phòng có hai cửa sổ lớn."},{tag:"Ở nhà",zh:"妈妈告诉我：房间里有两扇大窗户。",py:"Māma gàosu wǒ: Fángjiān lǐ yǒu liǎng shàn dà chuānghu.",vi:"Mẹ bảo tôi: Trong phòng có hai cửa sổ lớn."},{tag:"Ở trường",zh:"在学校，房间里有两扇大窗户。",py:"Zài xuéxiào, Fángjiān lǐ yǒu liǎng shàn dà chuānghu.",vi:"Ở trường, Trong phòng có hai cửa sổ lớn."},{tag:"Lúc đi làm",zh:"上班的时候，房间里有两扇大窗户。",py:"Shàngbān de shíhou, Fángjiān lǐ yǒu liǎng shàn dà chuānghu.",vi:"Lúc đi làm, Trong phòng có hai cửa sổ lớn."}],
    explanation:"扇用于门、窗等。",
    note:"量词读 shàn。"
  },

  {
    id:"hsk6_017",
    pattern:"卷①",
    title:"卷 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">juǎn</div>",
    structure:"一卷 + 纸/胶带",
    example:"桌上放着一卷胶带。",
    pinyin:"Zhuō shàng fàngzhe yì juǎn jiāodài.",
    meaning:"Trên bàn có một cuộn băng keo.",
    examples:[{tag:"Câu gốc",zh:"桌上放着一卷胶带。",py:"Zhuō shàng fàngzhe yì juǎn jiāodài.",vi:"Trên bàn có một cuộn băng keo."},{tag:"Ở nhà",zh:"妈妈告诉我：桌上放着一卷胶带。",py:"Māma gàosu wǒ: Zhuō shàng fàngzhe yì juǎn jiāodài.",vi:"Mẹ bảo tôi: Trên bàn có một cuộn băng keo."},{tag:"Ở trường",zh:"在学校，桌上放着一卷胶带。",py:"Zài xuéxiào, Zhuō shàng fàngzhe yì juǎn jiāodài.",vi:"Ở trường, Trên bàn có một cuộn băng keo."},{tag:"Lúc đi làm",zh:"上班的时候，桌上放着一卷胶带。",py:"Shàngbān de shíhou, Zhuō shàng fàngzhe yì juǎn jiāodài.",vi:"Lúc đi làm, Trên bàn có một cuộn băng keo."}],
    explanation:"卷用于卷起来的物品。",
    note:"如一卷纸、一卷胶带。"
  },

  {
    id:"hsk6_018",
    pattern:"卷②",
    title:"卷 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">juàn</div>",
    structure:"一卷 + 书画/古籍",
    example:"博物馆收藏着一卷古画。",
    pinyin:"Bówùguǎn shōucángzhe yí juàn gǔhuà.",
    meaning:"Bảo tàng lưu giữ một quyển tranh cổ.",
    examples:[{tag:"Câu gốc",zh:"博物馆收藏着一卷古画。",py:"Bówùguǎn shōucángzhe yí juàn gǔhuà.",vi:"Bảo tàng lưu giữ một quyển tranh cổ."},{tag:"Ở nhà",zh:"妈妈告诉我：博物馆收藏着一卷古画。",py:"Māma gàosu wǒ: Bówùguǎn shōucángzhe yí juàn gǔhuà.",vi:"Mẹ bảo tôi: Bảo tàng lưu giữ một quyển tranh cổ."},{tag:"Ở trường",zh:"在学校，博物馆收藏着一卷古画。",py:"Zài xuéxiào, Bówùguǎn shōucángzhe yí juàn gǔhuà.",vi:"Ở trường, Bảo tàng lưu giữ một quyển tranh cổ."},{tag:"Lúc đi làm",zh:"上班的时候，博物馆收藏着一卷古画。",py:"Shàngbān de shíhou, Bówùguǎn shōucángzhe yí juàn gǔhuà.",vi:"Lúc đi làm, Bảo tàng lưu giữ một quyển tranh cổ."}],
    explanation:"卷还可作为古代书画、书籍的量词。",
    note:"注意与 juǎn 的读音区别。"
  },

  {
    id:"hsk6_019",
    pattern:"番",
    title:"番<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fān</div>",
    structure:"一番 + 名词",
    example:"经过一番讨论，大家终于达成了共识。",
    pinyin:"Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le gòngshí.",
    meaning:"Sau một hồi thảo luận, cuối cùng mọi người đã đạt được đồng thuận.",
    examples:[{tag:"Câu gốc",zh:"经过一番讨论，大家终于达成了共识。",py:"Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le gòngshí.",vi:"Sau một hồi thảo luận, cuối cùng mọi người đã đạt được đồng thuận."},{tag:"Ở nhà",zh:"妈妈告诉我：经过一番讨论，大家终于达成了共识。",py:"Māma gàosu wǒ: Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le gòngshí.",vi:"Mẹ bảo tôi: Sau một hồi thảo luận, cuối cùng mọi người đã đạt được đồng thuận."},{tag:"Ở trường",zh:"在学校，经过一番讨论，大家终于达成了共识。",py:"Zài xuéxiào, Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le gòngshí.",vi:"Ở trường, Sau một hồi thảo luận, cuối cùng mọi người đã đạt được đồng thuận."},{tag:"Lúc đi làm",zh:"上班的时候，经过一番讨论，大家终于达成了共识。",py:"Shàngbān de shíhou, Jīngguò yì fān tǎolùn, dàjiā zhōngyú dáchéng le gòngshí.",vi:"Lúc đi làm, Sau một hồi thảo luận, cuối cùng mọi người đã đạt được đồng thuận."}],
    explanation:"番可作动量词，表示一阵、一番过程。",
    note:"常与讨论、努力、思考等搭配。"
  },

  {
    id:"hsk6_020",
    pattern:"特",
    title:"特<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tè</div>",
    structure:"特 + 形容词",
    example:"今天特冷，你多穿一点。",
    pinyin:"Jīntiān tè lěng, nǐ duō chuān yìdiǎn.",
    meaning:"Hôm nay đặc biệt lạnh, anh mặc thêm một chút.",
    examples:[{tag:"Câu gốc",zh:"今天特冷，你多穿一点。",py:"Jīntiān tè lěng, nǐ duō chuān yìdiǎn.",vi:"Hôm nay đặc biệt lạnh, anh mặc thêm một chút."},{tag:"Ở nhà",zh:"妈妈告诉我：今天特冷，你多穿一点。",py:"Māma gàosu wǒ: Jīntiān tè lěng, nǐ duō chuān yìdiǎn.",vi:"Mẹ bảo tôi: Hôm nay đặc biệt lạnh, anh mặc thêm một chút."},{tag:"Ở trường",zh:"在学校，今天特冷，你多穿一点。",py:"Zài xuéxiào, Jīntiān tè lěng, nǐ duō chuān yìdiǎn.",vi:"Ở trường, Hôm nay đặc biệt lạnh, anh mặc thêm một chút."},{tag:"Lúc đi làm",zh:"上班的时候，今天特冷，你多穿一点。",py:"Shàngbān de shíhou, Jīntiān tè lěng, nǐ duō chuān yìdiǎn.",vi:"Lúc đi làm, Hôm nay đặc biệt lạnh, anh mặc thêm một chút."}],
    explanation:"特表示程度很高。",
    note:"口语色彩较明显。"
  },

  {
    id:"hsk6_021",
    pattern:"异常",
    title:"异常<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yìcháng</div>",
    structure:"异常 + 形容词",
    example:"会议结束后，他显得异常平静。",
    pinyin:"Huìyì jiéshù hòu, tā xiǎnde yìcháng píngjìng.",
    meaning:"Sau cuộc họp, anh ấy tỏ ra bình tĩnh khác thường.",
    examples:[{tag:"Câu gốc",zh:"会议结束后，他显得异常平静。",py:"Huìyì jiéshù hòu, tā xiǎnde yìcháng píngjìng.",vi:"Sau cuộc họp, anh ấy tỏ ra bình tĩnh khác thường."},{tag:"Ở nhà",zh:"妈妈告诉我：会议结束后，他显得异常平静。",py:"Māma gàosu wǒ: Huìyì jiéshù hòu, tā xiǎnde yìcháng píngjìng.",vi:"Mẹ bảo tôi: Sau cuộc họp, anh ấy tỏ ra bình tĩnh khác thường."},{tag:"Ở trường",zh:"在学校，会议结束后，他显得异常平静。",py:"Zài xuéxiào, Huìyì jiéshù hòu, tā xiǎnde yìcháng píngjìng.",vi:"Ở trường, Sau cuộc họp, anh ấy tỏ ra bình tĩnh khác thường."},{tag:"Lúc đi làm",zh:"上班的时候，会议结束后，他显得异常平静。",py:"Shàngbān de shíhou, Huìyì jiéshù hòu, tā xiǎnde yìcháng píngjìng.",vi:"Lúc đi làm, Sau cuộc họp, anh ấy tỏ ra bình tĩnh khác thường."}],
    explanation:"异常表示程度非常高，而且通常带有不同寻常的意味。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_022",
    pattern:"较为",
    title:"较为<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiàowéi</div>",
    structure:"较为 + 形容词",
    example:"这个方案较为合理。",
    pinyin:"Zhège fāng'àn jiàowéi hélǐ.",
    meaning:"Phương án này tương đối hợp lý.",
    examples:[{tag:"Câu gốc",zh:"这个方案较为合理。",py:"Zhège fāng'àn jiàowéi hélǐ.",vi:"Phương án này tương đối hợp lý."},{tag:"Ở nhà",zh:"妈妈告诉我：这个方案较为合理。",py:"Māma gàosu wǒ: Zhège fāng'àn jiàowéi hélǐ.",vi:"Mẹ bảo tôi: Phương án này tương đối hợp lý."},{tag:"Ở trường",zh:"在学校，这个方案较为合理。",py:"Zài xuéxiào, Zhège fāng'àn jiàowéi hélǐ.",vi:"Ở trường, Phương án này tương đối hợp lý."},{tag:"Lúc đi làm",zh:"上班的时候，这个方案较为合理。",py:"Shàngbān de shíhou, Zhège fāng'àn jiàowéi hélǐ.",vi:"Lúc đi làm, Phương án này tương đối hợp lý."}],
    explanation:"较为表示比较高的程度，但语气比“非常”弱。",
    note:"正式书面语常用。"
  },

  {
    id:"hsk6_023",
    pattern:"净",
    title:"净<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jìng</div>",
    structure:"净 + 动词/数量",
    example:"你一天净想着玩，也不学习。",
    pinyin:"Nǐ yì tiān jìng xiǎngzhe wán, yě bù xuéxí.",
    meaning:"Cả ngày anh chỉ nghĩ đến chơi mà không học.",
    examples:[{tag:"Câu gốc",zh:"你一天净想着玩，也不学习。",py:"Nǐ yì tiān jìng xiǎngzhe wán, yě bù xuéxí.",vi:"Cả ngày anh chỉ nghĩ đến chơi mà không học."},{tag:"Ở nhà",zh:"妈妈告诉我：你一天净想着玩，也不学习。",py:"Māma gàosu wǒ: Nǐ yì tiān jìng xiǎngzhe wán, yě bù xuéxí.",vi:"Mẹ bảo tôi: Cả ngày anh chỉ nghĩ đến chơi mà không học."},{tag:"Ở trường",zh:"在学校，你一天净想着玩，也不学习。",py:"Zài xuéxiào, Nǐ yì tiān jìng xiǎngzhe wán, yě bù xuéxí.",vi:"Ở trường, Cả ngày anh chỉ nghĩ đến chơi mà không học."},{tag:"Lúc đi làm",zh:"上班的时候，你一天净想着玩，也不学习。",py:"Shàngbān de shíhou, Nǐ yì tiān jìng xiǎngzhe wán, yě bù xuéxí.",vi:"Lúc đi làm, Cả ngày anh chỉ nghĩ đến chơi mà không học."}],
    explanation:"净表示总是、只顾着做某事，常带不满语气。",
    note:"口语色彩较强。"
  },

  {
    id:"hsk6_024",
    pattern:"一同",
    title:"一同<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yìtóng</div>",
    structure:"一同 + 动词",
    example:"欢迎大家一同参加活动。",
    pinyin:"Huānyíng dàjiā yìtóng cānjiā huódòng.",
    meaning:"Hoan nghênh mọi người cùng tham gia hoạt động.",
    examples:[{tag:"Câu gốc",zh:"欢迎大家一同参加活动。",py:"Huānyíng dàjiā yìtóng cānjiā huódòng.",vi:"Hoan nghênh mọi người cùng tham gia hoạt động."},{tag:"Ở nhà",zh:"妈妈告诉我：欢迎大家一同参加活动。",py:"Māma gàosu wǒ: Huānyíng dàjiā yìtóng cānjiā huódòng.",vi:"Mẹ bảo tôi: Hoan nghênh mọi người cùng tham gia hoạt động."},{tag:"Ở trường",zh:"在学校，欢迎大家一同参加活动。",py:"Zài xuéxiào, Huānyíng dàjiā yìtóng cānjiā huódòng.",vi:"Ở trường, Hoan nghênh mọi người cùng tham gia hoạt động."},{tag:"Lúc đi làm",zh:"上班的时候，欢迎大家一同参加活动。",py:"Shàngbān de shíhou, Huānyíng dàjiā yìtóng cānjiā huódòng.",vi:"Lúc đi làm, Hoan nghênh mọi người cùng tham gia hoạt động."}],
    explanation:"一同表示一起。",
    note:"比“一起”正式。"
  },

  {
    id:"hsk6_025",
    pattern:"大都",
    title:"大都<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dàdōu</div>",
    structure:"大都 + 动词/形容词",
    example:"参加会议的人大都来自本地。",
    pinyin:"Cānjiā huìyì de rén dàdōu láizì běndì.",
    meaning:"Những người tham gia hội nghị phần lớn đến từ địa phương.",
    examples:[{tag:"Câu gốc",zh:"参加会议的人大都来自本地。",py:"Cānjiā huìyì de rén dàdōu láizì běndì.",vi:"Những người tham gia hội nghị phần lớn đến từ địa phương."},{tag:"Ở nhà",zh:"妈妈告诉我：参加会议的人大都来自本地。",py:"Māma gàosu wǒ: Cānjiā huìyì de rén dàdōu láizì běndì.",vi:"Mẹ bảo tôi: Những người tham gia hội nghị phần lớn đến từ địa phương."},{tag:"Ở trường",zh:"在学校，参加会议的人大都来自本地。",py:"Zài xuéxiào, Cānjiā huìyì de rén dàdōu láizì běndì.",vi:"Ở trường, Những người tham gia hội nghị phần lớn đến từ địa phương."},{tag:"Lúc đi làm",zh:"上班的时候，参加会议的人大都来自本地。",py:"Shàngbān de shíhou, Cānjiā huìyì de rén dàdōu láizì běndì.",vi:"Lúc đi làm, Những người tham gia hội nghị phần lớn đến từ địa phương."}],
    explanation:"大都表示大多数。",
    note:"书面语常用。"
  },

  {
    id:"hsk6_026",
    pattern:"一时",
    title:"一时<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yìshí</div>",
    structure:"一时 + 动词/形容词",
    example:"一时找不到合适的办法。",
    pinyin:"Yìshí zhǎo bú dào héshì de bànfǎ.",
    meaning:"Trong nhất thời không tìm được cách phù hợp.",
    examples:[{tag:"Câu gốc",zh:"一时找不到合适的办法。",py:"Yìshí zhǎo bú dào héshì de bànfǎ.",vi:"Trong nhất thời không tìm được cách phù hợp."},{tag:"Ở nhà",zh:"妈妈告诉我：一时找不到合适的办法。",py:"Māma gàosu wǒ: Yìshí zhǎo bú dào héshì de bànfǎ.",vi:"Mẹ bảo tôi: Trong nhất thời không tìm được cách phù hợp."},{tag:"Ở trường",zh:"在学校，一时找不到合适的办法。",py:"Zài xuéxiào, Yìshí zhǎo bú dào héshì de bànfǎ.",vi:"Ở trường, Trong nhất thời không tìm được cách phù hợp."},{tag:"Lúc đi làm",zh:"上班的时候，一时找不到合适的办法。",py:"Shàngbān de shíhou, Yìshí zhǎo bú dào héshì de bànfǎ.",vi:"Lúc đi làm, Trong nhất thời không tìm được cách phù hợp."}],
    explanation:"一时表示短时间内、暂时。",
    note:"常表示某一短暂阶段。"
  },

  {
    id:"hsk6_027",
    pattern:"不时",
    title:"不时<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùshí</div>",
    structure:"不时 + 动词",
    example:"窗外不时传来鸟叫声。",
    pinyin:"Chuāngwài bùshí chuánlái niǎojiàoshēng.",
    meaning:"Ngoài cửa sổ thỉnh thoảng truyền đến tiếng chim hót.",
    examples:[{tag:"Câu gốc",zh:"窗外不时传来鸟叫声。",py:"Chuāngwài bùshí chuánlái niǎojiàoshēng.",vi:"Ngoài cửa sổ thỉnh thoảng truyền đến tiếng chim hót."},{tag:"Ở nhà",zh:"妈妈告诉我：窗外不时传来鸟叫声。",py:"Māma gàosu wǒ: Chuāngwài bùshí chuánlái niǎojiàoshēng.",vi:"Mẹ bảo tôi: Ngoài cửa sổ thỉnh thoảng truyền đến tiếng chim hót."},{tag:"Ở trường",zh:"在学校，窗外不时传来鸟叫声。",py:"Zài xuéxiào, Chuāngwài bùshí chuánlái niǎojiàoshēng.",vi:"Ở trường, Ngoài cửa sổ thỉnh thoảng truyền đến tiếng chim hót."},{tag:"Lúc đi làm",zh:"上班的时候，窗外不时传来鸟叫声。",py:"Shàngbān de shíhou, Chuāngwài bùshí chuánlái niǎojiàoshēng.",vi:"Lúc đi làm, Ngoài cửa sổ thỉnh thoảng truyền đến tiếng chim hót."}],
    explanation:"不时表示间或、时常发生。",
    note:"强调事情反复发生。"
  },

  {
    id:"hsk6_028",
    pattern:"仍旧",
    title:"仍旧<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">réngjiù</div>",
    structure:"仍旧 + 动词/形容词",
    example:"几年过去了，他仍旧坚持自己的选择。",
    pinyin:"Jǐ nián guòqù le, tā réngjiù jiānchí zìjǐ de xuǎnzé.",
    meaning:"Vài năm trôi qua, anh ấy vẫn kiên trì lựa chọn của mình.",
    examples:[{tag:"Câu gốc",zh:"几年过去了，他仍旧坚持自己的选择。",py:"Jǐ nián guòqù le, tā réngjiù jiānchí zìjǐ de xuǎnzé.",vi:"Vài năm trôi qua, anh ấy vẫn kiên trì lựa chọn của mình."},{tag:"Ở nhà",zh:"妈妈告诉我：几年过去了，他仍旧坚持自己的选择。",py:"Māma gàosu wǒ: Jǐ nián guòqù le, tā réngjiù jiānchí zìjǐ de xuǎnzé.",vi:"Mẹ bảo tôi: Vài năm trôi qua, anh ấy vẫn kiên trì lựa chọn của mình."},{tag:"Ở trường",zh:"在学校，几年过去了，他仍旧坚持自己的选择。",py:"Zài xuéxiào, Jǐ nián guòqù le, tā réngjiù jiānchí zìjǐ de xuǎnzé.",vi:"Ở trường, Vài năm trôi qua, anh ấy vẫn kiên trì lựa chọn của mình."},{tag:"Lúc đi làm",zh:"上班的时候，几年过去了，他仍旧坚持自己的选择。",py:"Shàngbān de shíhou, Jǐ nián guòqù le, tā réngjiù jiānchí zìjǐ de xuǎnzé.",vi:"Lúc đi làm, Vài năm trôi qua, anh ấy vẫn kiên trì lựa chọn của mình."}],
    explanation:"仍旧表示情况没有变化。",
    note:"书面语较常见。"
  },

  {
    id:"hsk6_029",
    pattern:"依旧",
    title:"依旧<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yījiù</div>",
    structure:"依旧 + 动词/形容词",
    example:"夜深了，街上依旧很热闹。",
    pinyin:"Yè shēn le, jiē shàng yījiù hěn rènào.",
    meaning:"Đêm đã khuya nhưng trên phố vẫn rất náo nhiệt.",
    examples:[{tag:"Câu gốc",zh:"夜深了，街上依旧很热闹。",py:"Yè shēn le, jiē shàng yījiù hěn rènào.",vi:"Đêm đã khuya nhưng trên phố vẫn rất náo nhiệt."},{tag:"Ở nhà",zh:"妈妈告诉我：夜深了，街上依旧很热闹。",py:"Māma gàosu wǒ: Yè shēn le, jiē shàng yījiù hěn rènào.",vi:"Mẹ bảo tôi: Đêm đã khuya nhưng trên phố vẫn rất náo nhiệt."},{tag:"Ở trường",zh:"在学校，夜深了，街上依旧很热闹。",py:"Zài xuéxiào, Yè shēn le, jiē shàng yījiù hěn rènào.",vi:"Ở trường, Đêm đã khuya nhưng trên phố vẫn rất náo nhiệt."},{tag:"Lúc đi làm",zh:"上班的时候，夜深了，街上依旧很热闹。",py:"Shàngbān de shíhou, Yè shēn le, jiē shàng yījiù hěn rènào.",vi:"Lúc đi làm, Đêm đã khuya nhưng trên phố vẫn rất náo nhiệt."}],
    explanation:"依旧表示依然、仍然。",
    note:"语气比“还是”更书面。"
  },

  {
    id:"hsk6_030",
    pattern:"一向",
    title:"一向<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yíxiàng</div>",
    structure:"一向 + 动词/形容词",
    example:"他一向认真对待自己的工作。",
    pinyin:"Tā yíxiàng rènzhēn duìdài zìjǐ de gōngzuò.",
    meaning:"Anh ấy trước nay luôn nghiêm túc với công việc.",
    examples:[{tag:"Câu gốc",zh:"他一向认真对待自己的工作。",py:"Tā yíxiàng rènzhēn duìdài zìjǐ de gōngzuò.",vi:"Anh ấy trước nay luôn nghiêm túc với công việc."},{tag:"Ở nhà",zh:"妈妈告诉我：他一向认真对待自己的工作。",py:"Māma gàosu wǒ: Tā yíxiàng rènzhēn duìdài zìjǐ de gōngzuò.",vi:"Mẹ bảo tôi: Anh ấy trước nay luôn nghiêm túc với công việc."},{tag:"Ở trường",zh:"在学校，他一向认真对待自己的工作。",py:"Zài xuéxiào, Tā yíxiàng rènzhēn duìdài zìjǐ de gōngzuò.",vi:"Ở trường, Anh ấy trước nay luôn nghiêm túc với công việc."},{tag:"Lúc đi làm",zh:"上班的时候，他一向认真对待自己的工作。",py:"Shàngbān de shíhou, Tā yíxiàng rènzhēn duìdài zìjǐ de gōngzuò.",vi:"Lúc đi làm, Anh ấy trước nay luôn nghiêm túc với công việc."}],
    explanation:"一向表示过去到现在一直如此。",
    note:"常用于稳定的习惯或态度。"
  },

  {
    id:"hsk6_031",
    pattern:"一再",
    title:"一再<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yízài</div>",
    structure:"一再 + 动词",
    example:"他一再提醒大家注意安全。",
    pinyin:"Tā yízài tíxǐng dàjiā zhùyì ānquán.",
    meaning:"Anh ấy nhiều lần nhắc mọi người chú ý an toàn.",
    examples:[{tag:"Câu gốc",zh:"他一再提醒大家注意安全。",py:"Tā yízài tíxǐng dàjiā zhùyì ānquán.",vi:"Anh ấy nhiều lần nhắc mọi người chú ý an toàn."},{tag:"Ở nhà",zh:"妈妈告诉我：他一再提醒大家注意安全。",py:"Māma gàosu wǒ: Tā yízài tíxǐng dàjiā zhùyì ānquán.",vi:"Mẹ bảo tôi: Anh ấy nhiều lần nhắc mọi người chú ý an toàn."},{tag:"Ở trường",zh:"在学校，他一再提醒大家注意安全。",py:"Zài xuéxiào, Tā yízài tíxǐng dàjiā zhùyì ānquán.",vi:"Ở trường, Anh ấy nhiều lần nhắc mọi người chú ý an toàn."},{tag:"Lúc đi làm",zh:"上班的时候，他一再提醒大家注意安全。",py:"Shàngbān de shíhou, Tā yízài tíxǐng dàjiā zhùyì ānquán.",vi:"Lúc đi làm, Anh ấy nhiều lần nhắc mọi người chú ý an toàn."}],
    explanation:"一再表示一次又一次。",
    note:"常用于正式表达。"
  },

  {
    id:"hsk6_032",
    pattern:"再三",
    title:"再三<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zàisān</div>",
    structure:"再三 + 动词",
    example:"经过再三考虑，我决定接受这份工作。",
    pinyin:"Jīngguò zàisān kǎolǜ, wǒ juédìng jiēshòu zhè fèn gōngzuò.",
    meaning:"Sau khi cân nhắc nhiều lần, tôi quyết định nhận công việc này.",
    examples:[{tag:"Câu gốc",zh:"经过再三考虑，我决定接受这份工作。",py:"Jīngguò zàisān kǎolǜ, wǒ juédìng jiēshòu zhè fèn gōngzuò.",vi:"Sau khi cân nhắc nhiều lần, tôi quyết định nhận công việc này."},{tag:"Tình huống khác",zh:"经过再三考虑，妈妈决定接受这份工作。",py:"Jīngguò zàisān kǎolǜ, Māma juédìng jiēshòu zhè fèn gōngzuò.",vi:"Sau khi cân nhắc nhiều lần, tôi quyết định nhận công việc này."},{tag:"Tình huống khác",zh:"经过再三考虑，老师决定接受这份工作。",py:"Jīngguò zàisān kǎolǜ, Lǎoshī juédìng jiēshòu zhè fèn gōngzuò.",vi:"Sau khi cân nhắc nhiều lần, tôi quyết định nhận công việc này."},{tag:"Tình huống khác",zh:"经过再三考虑，同学们决定接受这份工作。",py:"Jīngguò zàisān kǎolǜ, Tóngxuémen juédìng jiēshòu zhè fèn gōngzuò.",vi:"Sau khi cân nhắc nhiều lần, tôi quyết định nhận công việc này."}],
    explanation:"再三强调反复多次。",
    note:"常与考虑、确认、提醒等搭配。"
  },

  {
    id:"hsk6_033",
    pattern:"不禁",
    title:"不禁<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùjīn</div>",
    structure:"不禁 + 动词",
    example:"听到这个消息，我不禁笑了起来。",
    pinyin:"Tīngdào zhège xiāoxi, wǒ bùjīn xiào le qǐlái.",
    meaning:"Nghe tin này, tôi không khỏi bật cười.",
    examples:[{tag:"Câu gốc",zh:"听到这个消息，我不禁笑了起来。",py:"Tīngdào zhège xiāoxi, wǒ bùjīn xiào le qǐlái.",vi:"Nghe tin này, tôi không khỏi bật cười."},{tag:"Tình huống khác",zh:"听到这个消息，妈妈不禁笑了起来。",py:"Tīngdào zhège xiāoxi, Māma bùjīn xiào le qǐlái.",vi:"Nghe tin này, tôi không khỏi bật cười."},{tag:"Tình huống khác",zh:"听到这个消息，老师不禁笑了起来。",py:"Tīngdào zhège xiāoxi, Lǎoshī bùjīn xiào le qǐlái.",vi:"Nghe tin này, tôi không khỏi bật cười."},{tag:"Tình huống khác",zh:"听到这个消息，同学们不禁笑了起来。",py:"Tīngdào zhège xiāoxi, Tóngxuémen bùjīn xiào le qǐlái.",vi:"Nghe tin này, tôi không khỏi bật cười."}],
    explanation:"不禁表示忍不住产生某种感情或动作。",
    note:"常与笑、感动、想起等搭配。"
  },

  {
    id:"hsk6_034",
    pattern:"赶忙",
    title:"赶忙<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">gǎnmáng</div>",
    structure:"赶忙 + 动词",
    example:"发现下雨后，他赶忙把衣服收进屋里。",
    pinyin:"Fāxiàn xiàyǔ hòu, tā gǎnmáng bǎ yīfu shōu jìn wū lǐ.",
    meaning:"Phát hiện trời mưa, anh ấy vội vàng thu quần áo vào nhà.",
    examples:[{tag:"Câu gốc",zh:"发现下雨后，他赶忙把衣服收进屋里。",py:"Fāxiàn xiàyǔ hòu, tā gǎnmáng bǎ yīfu shōu jìn wū lǐ.",vi:"Phát hiện trời mưa, anh ấy vội vàng thu quần áo vào nhà."},{tag:"Ở nhà",zh:"妈妈告诉我：发现下雨后，他赶忙把衣服收进屋里。",py:"Māma gàosu wǒ: Fāxiàn xiàyǔ hòu, tā gǎnmáng bǎ yīfu shōu jìn wū lǐ.",vi:"Mẹ bảo tôi: Phát hiện trời mưa, anh ấy vội vàng thu quần áo vào nhà."},{tag:"Ở trường",zh:"在学校，发现下雨后，他赶忙把衣服收进屋里。",py:"Zài xuéxiào, Fāxiàn xiàyǔ hòu, tā gǎnmáng bǎ yīfu shōu jìn wū lǐ.",vi:"Ở trường, Phát hiện trời mưa, anh ấy vội vàng thu quần áo vào nhà."},{tag:"Lúc đi làm",zh:"上班的时候，发现下雨后，他赶忙把衣服收进屋里。",py:"Shàngbān de shíhou, Fāxiàn xiàyǔ hòu, tā gǎnmáng bǎ yīfu shōu jìn wū lǐ.",vi:"Lúc đi làm, Phát hiện trời mưa, anh ấy vội vàng thu quần áo vào nhà."}],
    explanation:"赶忙表示赶紧做某事。",
    note:"口语常用。"
  },

  {
    id:"hsk6_035",
    pattern:"特地",
    title:"特地<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tèdì</div>",
    structure:"特地 + 动词",
    example:"我特地来向你表示感谢。",
    pinyin:"Wǒ tèdì lái xiàng nǐ biǎoshì gǎnxiè.",
    meaning:"Tôi đặc biệt đến để cảm ơn bạn.",
    examples:[{tag:"Câu gốc",zh:"我特地来向你表示感谢。",py:"Wǒ tèdì lái xiàng nǐ biǎoshì gǎnxiè.",vi:"Tôi đặc biệt đến để cảm ơn bạn."},{tag:"Tình huống khác",zh:"妈妈特地来向你表示感谢。",py:"Māma tèdì lái xiàng nǐ biǎoshì gǎnxiè.",vi:"Mẹ đặc biệt đến để cảm ơn bạn."},{tag:"Tình huống khác",zh:"老师特地来向你表示感谢。",py:"Lǎoshī tèdì lái xiàng nǐ biǎoshì gǎnxiè.",vi:"Thầy đặc biệt đến để cảm ơn bạn."},{tag:"Tình huống khác",zh:"同学们特地来向你表示感谢。",py:"Tóngxuémen tèdì lái xiàng nǐ biǎoshì gǎnxiè.",vi:"Các bạn đặc biệt đến để cảm ơn bạn."}],
    explanation:"特地表示为了某个目的而专门做某事。",
    note:"强调目的。"
  },

  {
    id:"hsk6_036",
    pattern:"特意",
    title:"特意<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tèyì</div>",
    structure:"特意 + 动词",
    example:"她特意给我留了一份资料。",
    pinyin:"Tā tèyì gěi wǒ liú le yí fèn zīliào.",
    meaning:"Cô ấy đặc biệt để lại cho tôi một phần tài liệu.",
    examples:[{tag:"Câu gốc",zh:"她特意给我留了一份资料。",py:"Tā tèyì gěi wǒ liú le yí fèn zīliào.",vi:"Cô ấy đặc biệt để lại cho tôi một phần tài liệu."},{tag:"Tình huống khác",zh:"她特意给妈妈留了一份资料。",py:"Tā tèyì gěi Māma liú le yí fèn zīliào.",vi:"Cô ấy đặc biệt để lại cho tôi một phần tài liệu."},{tag:"Tình huống khác",zh:"她特意给老师留了一份资料。",py:"Tā tèyì gěi Lǎoshī liú le yí fèn zīliào.",vi:"Cô ấy đặc biệt để lại cho tôi một phần tài liệu."},{tag:"Tình huống khác",zh:"她特意给同学们留了一份资料。",py:"Tā tèyì gěi Tóngxuémen liú le yí fèn zīliào.",vi:"Cô ấy đặc biệt để lại cho tôi một phần tài liệu."},{tag:"Tình huống khác",zh:"老师特意给我留了一份资料。",py:"Lǎoshī tèyì gěi wǒ liú le yí fèn zīliào.",vi:"Thầy đặc biệt để lại cho tôi một phần tài liệu."}],
    explanation:"特意表示有意识地、专门地做某事。",
    note:"与“特地”意义接近。"
  },

  {
    id:"hsk6_037",
    pattern:"偷偷",
    title:"偷偷<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tōutōu</div>",
    structure:"偷偷 + 动词",
    example:"孩子偷偷打开了冰箱。",
    pinyin:"Háizi tōutōu dǎkāi le bīngxiāng.",
    meaning:"Đứa trẻ lén lút mở tủ lạnh.",
    examples:[{tag:"Câu gốc",zh:"孩子偷偷打开了冰箱。",py:"Háizi tōutōu dǎkāi le bīngxiāng.",vi:"Đứa trẻ lén lút mở tủ lạnh."},{tag:"Ở nhà",zh:"妈妈告诉我：孩子偷偷打开了冰箱。",py:"Māma gàosu wǒ: Háizi tōutōu dǎkāi le bīngxiāng.",vi:"Mẹ bảo tôi: Đứa trẻ lén lút mở tủ lạnh."},{tag:"Ở trường",zh:"在学校，孩子偷偷打开了冰箱。",py:"Zài xuéxiào, Háizi tōutōu dǎkāi le bīngxiāng.",vi:"Ở trường, Đứa trẻ lén lút mở tủ lạnh."},{tag:"Lúc đi làm",zh:"上班的时候，孩子偷偷打开了冰箱。",py:"Shàngbān de shíhou, Háizi tōutōu dǎkāi le bīngxiāng.",vi:"Lúc đi làm, Đứa trẻ lén lút mở tủ lạnh."}],
    explanation:"偷偷表示不让别人发现地做某事。",
    note:"常带有隐蔽行为的意味。"
  },

  {
    id:"hsk6_038",
    pattern:"未必",
    title:"未必<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wèibì</div>",
    structure:"未必 + 动词/形容词",
    example:"价格高未必代表质量好。",
    pinyin:"Jiàgé gāo wèibì dàibiǎo zhìliàng hǎo.",
    meaning:"Giá cao chưa chắc đã có nghĩa chất lượng tốt.",
    examples:[{tag:"Câu gốc",zh:"价格高未必代表质量好。",py:"Jiàgé gāo wèibì dàibiǎo zhìliàng hǎo.",vi:"Giá cao chưa chắc đã có nghĩa chất lượng tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：价格高未必代表质量好。",py:"Māma gàosu wǒ: Jiàgé gāo wèibì dàibiǎo zhìliàng hǎo.",vi:"Mẹ bảo tôi: Giá cao chưa chắc đã có nghĩa chất lượng tốt."},{tag:"Ở trường",zh:"在学校，价格高未必代表质量好。",py:"Zài xuéxiào, Jiàgé gāo wèibì dàibiǎo zhìliàng hǎo.",vi:"Ở trường, Giá cao chưa chắc đã có nghĩa chất lượng tốt."},{tag:"Lúc đi làm",zh:"上班的时候，价格高未必代表质量好。",py:"Shàngbān de shíhou, Jiàgé gāo wèibì dàibiǎo zhìliàng hǎo.",vi:"Lúc đi làm, Giá cao chưa chắc đã có nghĩa chất lượng tốt."}],
    explanation:"未必表示不一定。",
    note:"常用于否定某种当然的推断。"
  },

  {
    id:"hsk6_039",
    pattern:"恰好",
    title:"恰好<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">qiàhǎo</div>",
    structure:"恰好 + 动词/形容词",
    example:"你来得恰好，我正想找你。",
    pinyin:"Nǐ lái de qiàhǎo, wǒ zhèng xiǎng zhǎo nǐ.",
    meaning:"Bạn đến vừa đúng lúc, tôi đang định tìm bạn.",
    examples:[{tag:"Câu gốc",zh:"你来得恰好，我正想找你。",py:"Nǐ lái de qiàhǎo, wǒ zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến vừa đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得恰好，妈妈正想找你。",py:"Nǐ lái de qiàhǎo, Māma zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến vừa đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得恰好，老师正想找你。",py:"Nǐ lái de qiàhǎo, Lǎoshī zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến vừa đúng lúc, tôi đang định tìm bạn."},{tag:"Tình huống khác",zh:"你来得恰好，同学们正想找你。",py:"Nǐ lái de qiàhǎo, Tóngxuémen zhèng xiǎng zhǎo nǐ.",vi:"Bạn đến vừa đúng lúc, tôi đang định tìm bạn."}],
    explanation:"恰好表示正好符合某种情况。",
    note:"常表示时间、条件刚好合适。"
  },

  {
    id:"hsk6_040",
    pattern:"倒是",
    title:"倒是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dàoshi</div>",
    structure:"A，倒是B",
    example:"价格虽然不低，质量倒是不错。",
    pinyin:"Jiàgé suīrán bù dī, zhìliàng dàoshi búcuò.",
    meaning:"Giá tuy không thấp nhưng chất lượng thì khá tốt.",
    examples:[{tag:"Câu gốc",zh:"价格虽然不低，质量倒是不错。",py:"Jiàgé suīrán bù dī, zhìliàng dàoshi búcuò.",vi:"Giá tuy không thấp nhưng chất lượng thì khá tốt."},{tag:"Ở nhà",zh:"妈妈告诉我：价格虽然不低，质量倒是不错。",py:"Māma gàosu wǒ: Jiàgé suīrán bù dī, zhìliàng dàoshi búcuò.",vi:"Mẹ bảo tôi: Giá tuy không thấp nhưng chất lượng thì khá tốt."},{tag:"Ở trường",zh:"在学校，价格虽然不低，质量倒是不错。",py:"Zài xuéxiào, Jiàgé suīrán bù dī, zhìliàng dàoshi búcuò.",vi:"Ở trường, Giá tuy không thấp nhưng chất lượng thì khá tốt."},{tag:"Lúc đi làm",zh:"上班的时候，价格虽然不低，质量倒是不错。",py:"Shàngbān de shíhou, Jiàgé suīrán bù dī, zhìliàng dàoshi búcuò.",vi:"Lúc đi làm, Giá tuy không thấp nhưng chất lượng thì khá tốt."}],
    explanation:"倒是用于转折或提出与前面不同的情况。",
    note:"常有“不过、却”的语气。"
  },

  {
    id:"hsk6_041",
    pattern:"干脆",
    title:"干脆<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">gāncuì</div>",
    structure:"干脆 + 动词",
    example:"既然大家都同意，干脆今天就开始吧。",
    pinyin:"Jìrán dàjiā dōu tóngyì, gāncuì jīntiān jiù kāishǐ ba.",
    meaning:"Nếu mọi người đều đồng ý thì cứ bắt đầu ngay hôm nay đi.",
    examples:[{tag:"Câu gốc",zh:"既然大家都同意，干脆今天就开始吧。",py:"Jìrán dàjiā dōu tóngyì, gāncuì jīntiān jiù kāishǐ ba.",vi:"Nếu mọi người đều đồng ý thì cứ bắt đầu ngay hôm nay đi."},{tag:"Tình huống khác",zh:"既然大家都同意，干脆昨天就开始吧。",py:"Jìrán dàjiā dōu tóngyì, gāncuì Zuótiān jiù kāishǐ ba.",vi:"Nếu mọi người đều đồng ý thì cứ bắt đầu ngay hôm nay đi."},{tag:"Tình huống khác",zh:"既然大家都同意，干脆明天就开始吧。",py:"Jìrán dàjiā dōu tóngyì, gāncuì Míngtiān jiù kāishǐ ba.",vi:"Nếu mọi người đều đồng ý thì cứ bắt đầu ngay hôm nay đi."},{tag:"Tình huống khác",zh:"既然大学校都同意，干脆今天就开始吧。",py:"Jìrán dàxuéxiào dōu tóngyì, gāncuì jīntiān jiù kāishǐ ba.",vi:"Nếu mọi người đều đồng ý thì cứ bắt đầu ngay hôm nay đi."}],
    explanation:"干脆表示索性、直接采取某种做法。",
    note:"常用于口语。"
  },

  {
    id:"hsk6_042",
    pattern:"明明①",
    title:"明明……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">míngmíng……</div>",
    structure:"明明 + A，却/还 + B",
    example:"明明是你的错，你却不承认。",
    pinyin:"Míngmíng shì nǐ de cuò, nǐ què bù chéngrèn.",
    meaning:"Rõ ràng là lỗi của bạn nhưng bạn lại không thừa nhận.",
    examples:[{tag:"Câu gốc",zh:"明明是你的错，你却不承认。",py:"Míngmíng shì nǐ de cuò, nǐ què bù chéngrèn.",vi:"Rõ ràng là lỗi của bạn nhưng bạn lại không thừa nhận."},{tag:"Ở nhà",zh:"妈妈告诉我：明明是你的错，你却不承认。",py:"Māma gàosu wǒ: Míngmíng shì nǐ de cuò, nǐ què bù chéngrèn.",vi:"Mẹ bảo tôi: Rõ ràng là lỗi của bạn nhưng bạn lại không thừa nhận."},{tag:"Ở trường",zh:"在学校，明明是你的错，你却不承认。",py:"Zài xuéxiào, Míngmíng shì nǐ de cuò, nǐ què bù chéngrèn.",vi:"Ở trường, Rõ ràng là lỗi của bạn nhưng bạn lại không thừa nhận."},{tag:"Lúc đi làm",zh:"上班的时候，明明是你的错，你却不承认。",py:"Shàngbān de shíhou, Míngmíng shì nǐ de cuò, nǐ què bù chéngrèn.",vi:"Lúc đi làm, Rõ ràng là lỗi của bạn nhưng bạn lại không thừa nhận."}],
    explanation:"明明表示事实很明显。",
    note:"常与却、还、反而等搭配。"
  },

  {
    id:"hsk6_043",
    pattern:"明明②",
    title:"明明……，怎么……？<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">míngmíng……, zěnme……?</div>",
    structure:"明明 + 事实，怎么 + 结果",
    example:"明明已经通知过他了，他怎么还不知道？",
    pinyin:"Míngmíng yǐjīng tōngzhī guò tā le, tā zěnme hái bù zhīdào?",
    meaning:"Rõ ràng đã thông báo cho anh ấy rồi, sao anh ấy vẫn không biết?",
    examples:[{tag:"Câu gốc",zh:"明明已经通知过他了，他怎么还不知道？",py:"Míngmíng yǐjīng tōngzhī guò tā le, tā zěnme hái bù zhīdào?",vi:"Rõ ràng đã thông báo cho anh ấy rồi, sao anh ấy vẫn không biết?"},{tag:"Ở nhà",zh:"妈妈告诉我：明明已经通知过他了，他怎么还不知道？",py:"Māma gàosu wǒ: Míngmíng yǐjīng tōngzhī guò tā le, tā zěnme hái bù zhīdào?",vi:"Mẹ bảo tôi: Rõ ràng đã thông báo cho anh ấy rồi, sao anh ấy vẫn không biết?"},{tag:"Ở trường",zh:"在学校，明明已经通知过他了，他怎么还不知道？",py:"Zài xuéxiào, Míngmíng yǐjīng tōngzhī guò tā le, tā zěnme hái bù zhīdào?",vi:"Ở trường, Rõ ràng đã thông báo cho anh ấy rồi, sao anh ấy vẫn không biết?"},{tag:"Lúc đi làm",zh:"上班的时候，明明已经通知过他了，他怎么还不知道？",py:"Shàngbān de shíhou, Míngmíng yǐjīng tōngzhī guò tā le, tā zěnme hái bù zhīdào?",vi:"Lúc đi làm, Rõ ràng đã thông báo cho anh ấy rồi, sao anh ấy vẫn không biết?"}],
    explanation:"用于对明显事实与结果不一致表示疑问。",
    note:"语气通常较强。"
  },

  {
    id:"hsk6_044",
    pattern:"总算",
    title:"总算<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zǒngsuàn</div>",
    structure:"总算 + 动词/形容词",
    example:"经过几个月的努力，项目总算完成了。",
    pinyin:"Jīngguò jǐ gè yuè de nǔlì, xiàngmù zǒngsuàn wánchéng le.",
    meaning:"Sau vài tháng nỗ lực, dự án cuối cùng cũng hoàn thành.",
    examples:[{tag:"Câu gốc",zh:"经过几个月的努力，项目总算完成了。",py:"Jīngguò jǐ gè yuè de nǔlì, xiàngmù zǒngsuàn wánchéng le.",vi:"Sau vài tháng nỗ lực, dự án cuối cùng cũng hoàn thành."},{tag:"Ở nhà",zh:"妈妈告诉我：经过几个月的努力，项目总算完成了。",py:"Māma gàosu wǒ: Jīngguò jǐ gè yuè de nǔlì, xiàngmù zǒngsuàn wánchéng le.",vi:"Mẹ bảo tôi: Sau vài tháng nỗ lực, dự án cuối cùng cũng hoàn thành."},{tag:"Ở trường",zh:"在学校，经过几个月的努力，项目总算完成了。",py:"Zài xuéxiào, Jīngguò jǐ gè yuè de nǔlì, xiàngmù zǒngsuàn wánchéng le.",vi:"Ở trường, Sau vài tháng nỗ lực, dự án cuối cùng cũng hoàn thành."},{tag:"Lúc đi làm",zh:"上班的时候，经过几个月的努力，项目总算完成了。",py:"Shàngbān de shíhou, Jīngguò jǐ gè yuè de nǔlì, xiàngmù zǒngsuàn wánchéng le.",vi:"Lúc đi làm, Sau vài tháng nỗ lực, dự án cuối cùng cũng hoàn thành."}],
    explanation:"总算表示经过较长过程后终于达到结果。",
    note:"常含有松了一口气的语气。"
  },

  {
    id:"hsk6_045",
    pattern:"于①",
    title:"于 + 时间<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yú</div>",
    structure:"于 + 时间",
    example:"会议于上午九点正式开始。",
    pinyin:"Huìyì yú shàngwǔ jiǔ diǎn zhèngshì kāishǐ.",
    meaning:"Cuộc họp chính thức bắt đầu lúc 9 giờ sáng.",
    examples:[{tag:"Câu gốc",zh:"会议于上午九点正式开始。",py:"Huìyì yú shàngwǔ jiǔ diǎn zhèngshì kāishǐ.",vi:"Cuộc họp chính thức bắt đầu lúc 9 giờ sáng."},{tag:"Ở nhà",zh:"妈妈告诉我：会议于上午九点正式开始。",py:"Māma gàosu wǒ: Huìyì yú shàngwǔ jiǔ diǎn zhèngshì kāishǐ.",vi:"Mẹ bảo tôi: Cuộc họp chính thức bắt đầu lúc 9 giờ sáng."},{tag:"Ở trường",zh:"在学校，会议于上午九点正式开始。",py:"Zài xuéxiào, Huìyì yú shàngwǔ jiǔ diǎn zhèngshì kāishǐ.",vi:"Ở trường, Cuộc họp chính thức bắt đầu lúc 9 giờ sáng."},{tag:"Lúc đi làm",zh:"上班的时候，会议于上午九点正式开始。",py:"Shàngbān de shíhou, Huìyì yú shàngwǔ jiǔ diǎn zhèngshì kāishǐ.",vi:"Lúc đi làm, Cuộc họp chính thức bắt đầu lúc 9 giờ sáng."}],
    explanation:"于用于表示时间。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_046",
    pattern:"于②",
    title:"于 + 地点<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yú</div>",
    structure:"于 + 地点",
    example:"该活动将于北京举行。",
    pinyin:"Gāi huódòng jiāng yú Běijīng jǔxíng.",
    meaning:"Hoạt động này sẽ được tổ chức tại Bắc Kinh.",
    examples:[{tag:"Câu gốc",zh:"该活动将于北京举行。",py:"Gāi huódòng jiāng yú Běijīng jǔxíng.",vi:"Hoạt động này sẽ được tổ chức tại Bắc Kinh."},{tag:"Ở nhà",zh:"妈妈告诉我：该活动将于北京举行。",py:"Māma gàosu wǒ: Gāi huódòng jiāng yú Běijīng jǔxíng.",vi:"Mẹ bảo tôi: Hoạt động này sẽ được tổ chức tại Bắc Kinh."},{tag:"Ở trường",zh:"在学校，该活动将于北京举行。",py:"Zài xuéxiào, Gāi huódòng jiāng yú Běijīng jǔxíng.",vi:"Ở trường, Hoạt động này sẽ được tổ chức tại Bắc Kinh."},{tag:"Lúc đi làm",zh:"上班的时候，该活动将于北京举行。",py:"Shàngbān de shíhou, Gāi huódòng jiāng yú Běijīng jǔxíng.",vi:"Lúc đi làm, Hoạt động này sẽ được tổ chức tại Bắc Kinh."}],
    explanation:"于可用于正式地表示地点。",
    note:"相当于“在”，但更书面。"
  },

  {
    id:"hsk6_047",
    pattern:"至于①",
    title:"至于 + 对象<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhìyú</div>",
    structure:"至于 + 名词",
    example:"至于费用问题，我们以后再讨论。",
    pinyin:"Zhìyú fèiyòng wèntí, wǒmen yǐhòu zài tǎolùn.",
    meaning:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp.",
    examples:[{tag:"Câu gốc",zh:"至于费用问题，我们以后再讨论。",py:"Zhìyú fèiyòng wèntí, wǒmen yǐhòu zài tǎolùn.",vi:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp."},{tag:"Tình huống khác",zh:"至于费用问题，妈妈们以后再讨论。",py:"Zhìyú fèiyòng wèntí, Māmamen yǐhòu zài tǎolùn.",vi:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp."},{tag:"Tình huống khác",zh:"至于费用问题，老师们以后再讨论。",py:"Zhìyú fèiyòng wèntí, Lǎoshīmen yǐhòu zài tǎolùn.",vi:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp."},{tag:"Tình huống khác",zh:"至于费用问题，同学们们以后再讨论。",py:"Zhìyú fèiyòng wèntí, Tóngxuémenmen yǐhòu zài tǎolùn.",vi:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp."},{tag:"Tình huống khác",zh:"至于费用问题，他们以后再讨论。",py:"Zhìyú fèiyòng wèntí, Tāmen yǐhòu zài tǎolùn.",vi:"Còn vấn đề chi phí thì sau này chúng ta bàn tiếp."}],
    explanation:"至于用于引出另一个话题。",
    note:"常用于转换话题。"
  },

  {
    id:"hsk6_048",
    pattern:"至于②",
    title:"至于……，则……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhìyú……, zé……</div>",
    structure:"至于 A，则 B",
    example:"至于最终结果，则要等通知。",
    pinyin:"Zhìyú zuìzhōng jiéguǒ, zé yào děng tōngzhī.",
    meaning:"Còn kết quả cuối cùng thì phải chờ thông báo.",
    examples:[{tag:"Câu gốc",zh:"至于最终结果，则要等通知。",py:"Zhìyú zuìzhōng jiéguǒ, zé yào děng tōngzhī.",vi:"Còn kết quả cuối cùng thì phải chờ thông báo."},{tag:"Ở nhà",zh:"妈妈告诉我：至于最终结果，则要等通知。",py:"Māma gàosu wǒ: Zhìyú zuìzhōng jiéguǒ, zé yào děng tōngzhī.",vi:"Mẹ bảo tôi: Còn kết quả cuối cùng thì phải chờ thông báo."},{tag:"Ở trường",zh:"在学校，至于最终结果，则要等通知。",py:"Zài xuéxiào, Zhìyú zuìzhōng jiéguǒ, zé yào děng tōngzhī.",vi:"Ở trường, Còn kết quả cuối cùng thì phải chờ thông báo."},{tag:"Lúc đi làm",zh:"上班的时候，至于最终结果，则要等通知。",py:"Shàngbān de shíhou, Zhìyú zuìzhōng jiéguǒ, zé yào děng tōngzhī.",vi:"Lúc đi làm, Còn kết quả cuối cùng thì phải chờ thông báo."}],
    explanation:"用于把前后两个话题明确分开。",
    note:"书面语较常见。"
  },

  {
    id:"hsk6_049",
    pattern:"因",
    title:"因 + 原因",
    structure:"因 + 名词/短语",
    example:"因天气原因，航班暂时取消。",
    pinyin:"Yīn tiānqì yuányīn, hángbān zànshí qǔxiāo.",
    meaning:"Do thời tiết, chuyến bay tạm thời bị hủy.",
    examples:[{tag:"Câu gốc",zh:"因天气原因，航班暂时取消。",py:"Yīn tiānqì yuányīn, hángbān zànshí qǔxiāo.",vi:"Do thời tiết, chuyến bay tạm thời bị hủy."},{tag:"Ở nhà",zh:"妈妈告诉我：因天气原因，航班暂时取消。",py:"Māma gàosu wǒ: Yīn tiānqì yuányīn, hángbān zànshí qǔxiāo.",vi:"Mẹ bảo tôi: Do thời tiết, chuyến bay tạm thời bị hủy."},{tag:"Ở trường",zh:"在学校，因天气原因，航班暂时取消。",py:"Zài xuéxiào, Yīn tiānqì yuányīn, hángbān zànshí qǔxiāo.",vi:"Ở trường, Do thời tiết, chuyến bay tạm thời bị hủy."},{tag:"Lúc đi làm",zh:"上班的时候，因天气原因，航班暂时取消。",py:"Shàngbān de shíhou, Yīn tiānqì yuányīn, hángbān zànshí qǔxiāo.",vi:"Lúc đi làm, Do thời tiết, chuyến bay tạm thời bị hủy."}],
    explanation:"因表示原因。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_050",
    pattern:"除",
    title:"除 + 名词 + 外",
    structure:"除 + A + 外，……",
    example:"除周末外，其他时间都可以预约。",
    pinyin:"Chú zhōumò wài, qítā shíjiān dōu kěyǐ yùyuē.",
    meaning:"Ngoài cuối tuần ra, thời gian khác đều có thể đặt lịch.",
    examples:[{tag:"Câu gốc",zh:"除周末外，其他时间都可以预约。",py:"Chú zhōumò wài, qítā shíjiān dōu kěyǐ yùyuē.",vi:"Ngoài cuối tuần ra, thời gian khác đều có thể đặt lịch."},{tag:"Ở nhà",zh:"妈妈告诉我：除周末外，其他时间都可以预约。",py:"Māma gàosu wǒ: Chú zhōumò wài, qítā shíjiān dōu kěyǐ yùyuē.",vi:"Mẹ bảo tôi: Ngoài cuối tuần ra, thời gian khác đều có thể đặt lịch."},{tag:"Ở trường",zh:"在学校，除周末外，其他时间都可以预约。",py:"Zài xuéxiào, Chú zhōumò wài, qítā shíjiān dōu kěyǐ yùyuē.",vi:"Ở trường, Ngoài cuối tuần ra, thời gian khác đều có thể đặt lịch."},{tag:"Lúc đi làm",zh:"上班的时候，除周末外，其他时间都可以预约。",py:"Shàngbān de shíhou, Chú zhōumò wài, qítā shíjiān dōu kěyǐ yùyuē.",vi:"Lúc đi làm, Ngoài cuối tuần ra, thời gian khác đều có thể đặt lịch."}],
    explanation:"除表示排除某一对象。",
    note:"常与外、之外搭配。"
  },

  {
    id:"hsk6_051",
    pattern:"不料",
    title:"不料<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">búliào</div>",
    structure:"A，不料 B",
    example:"我们原以为路很顺利，不料突然下起了大雨。",
    pinyin:"Wǒmen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",
    meaning:"Chúng tôi vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn.",
    examples:[{tag:"Câu gốc",zh:"我们原以为路很顺利，不料突然下起了大雨。",py:"Wǒmen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",vi:"Chúng tôi vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn."},{tag:"Tình huống khác",zh:"妈妈们原以为路很顺利，不料突然下起了大雨。",py:"Māmamen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",vi:"Chúng tôi vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn."},{tag:"Tình huống khác",zh:"老师们原以为路很顺利，不料突然下起了大雨。",py:"Lǎoshīmen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",vi:"Chúng tôi vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn."},{tag:"Tình huống khác",zh:"同学们们原以为路很顺利，不料突然下起了大雨。",py:"Tóngxuémenmen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",vi:"Chúng tôi vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn."},{tag:"Tình huống khác",zh:"他们原以为路很顺利，不料突然下起了大雨。",py:"Tāmen yuán yǐwéi lù hěn shùnlì, búliào tūrán xià qǐ le dàyǔ.",vi:"Họ vốn nghĩ đường đi thuận lợi, không ngờ đột nhiên trời mưa lớn."}],
    explanation:"不料表示结果出乎意料。",
    note:"书面语色彩明显。"
  },

  {
    id:"hsk6_052",
    pattern:"所①",
    title:"所 + 动词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suǒ</div>",
    structure:"所 + 动词",
    example:"我们应该珍惜现在所拥有的一切。",
    pinyin:"Wǒmen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",
    meaning:"Chúng ta nên trân trọng tất cả những gì mình đang có.",
    examples:[{tag:"Câu gốc",zh:"我们应该珍惜现在所拥有的一切。",py:"Wǒmen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",vi:"Chúng ta nên trân trọng tất cả những gì mình đang có."},{tag:"Tình huống khác",zh:"妈妈们应该珍惜现在所拥有的一切。",py:"Māmamen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",vi:"Chúng ta nên trân trọng tất cả những gì mình đang có."},{tag:"Tình huống khác",zh:"老师们应该珍惜现在所拥有的一切。",py:"Lǎoshīmen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",vi:"Chúng ta nên trân trọng tất cả những gì mình đang có."},{tag:"Tình huống khác",zh:"同学们们应该珍惜现在所拥有的一切。",py:"Tóngxuémenmen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",vi:"Chúng ta nên trân trọng tất cả những gì mình đang có."},{tag:"Tình huống khác",zh:"他们应该珍惜现在所拥有的一切。",py:"Tāmen yīnggāi zhēnxī xiànzài suǒ yǒngyǒu de yíqiè.",vi:"Chúng ta nên trân trọng tất cả những gì mình đang có."}],
    explanation:"所放在动词前，使动词性结构名词化。",
    note:"常见结构为“所+V+的”。"
  },

  {
    id:"hsk6_053",
    pattern:"所②",
    title:"所……的……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suǒ……de……</div>",
    structure:"所 + V + 的 + 名词",
    example:"这就是我所担心的问题。",
    pinyin:"Zhè jiù shì wǒ suǒ dānxīn de wèntí.",
    meaning:"Đây chính là vấn đề mà tôi lo lắng.",
    examples:[{tag:"Câu gốc",zh:"这就是我所担心的问题。",py:"Zhè jiù shì wǒ suǒ dānxīn de wèntí.",vi:"Đây chính là vấn đề mà tôi lo lắng."},{tag:"Tình huống khác",zh:"这就是妈妈所担心的问题。",py:"Zhè jiù shì Māma suǒ dānxīn de wèntí.",vi:"Đây chính là vấn đề mà tôi lo lắng."},{tag:"Tình huống khác",zh:"这就是老师所担心的问题。",py:"Zhè jiù shì Lǎoshī suǒ dānxīn de wèntí.",vi:"Đây chính là vấn đề mà tôi lo lắng."},{tag:"Tình huống khác",zh:"这就是同学们所担心的问题。",py:"Zhè jiù shì Tóngxuémen suǒ dānxīn de wèntí.",vi:"Đây chính là vấn đề mà tôi lo lắng."}],
    explanation:"所与的共同构成名词性结构。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_054",
    pattern:"啦",
    title:"啦<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">la</div>",
    structure:"句子 + 啦",
    example:"快点儿，时间不早啦！",
    pinyin:"Kuài diǎnr, shíjiān bù zǎo la!",
    meaning:"Nhanh lên, không còn sớm nữa đâu!",
    examples:[{tag:"Câu gốc",zh:"快点儿，时间不早啦！",py:"Kuài diǎnr, shíjiān bù zǎo la!",vi:"Nhanh lên, không còn sớm nữa đâu!"},{tag:"Ở nhà",zh:"妈妈告诉我：快点儿，时间不早啦！",py:"Māma gàosu wǒ: Kuài diǎnr, shíjiān bù zǎo la!",vi:"Mẹ bảo tôi: Nhanh lên, không còn sớm nữa đâu!"},{tag:"Ở trường",zh:"在学校，快点儿，时间不早啦！",py:"Zài xuéxiào, Kuài diǎnr, shíjiān bù zǎo la!",vi:"Ở trường, Nhanh lên, không còn sớm nữa đâu!"},{tag:"Lúc đi làm",zh:"上班的时候，快点儿，时间不早啦！",py:"Shàngbān de shíhou, Kuài diǎnr, shíjiān bù zǎo la!",vi:"Lúc đi làm, Nhanh lên, không còn sớm nữa đâu!"}],
    explanation:"啦表示语气变化，常带轻松、提醒或感叹。",
    note:"口语语气词。"
  },

  {
    id:"hsk6_055",
    pattern:"嘛",
    title:"嘛<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">ma</div>",
    structure:"句子 + 嘛",
    example:"别着急嘛，我们还有时间。",
    pinyin:"Bié zháojí ma, wǒmen hái yǒu shíjiān.",
    meaning:"Đừng vội mà, chúng ta vẫn còn thời gian.",
    examples:[{tag:"Câu gốc",zh:"别着急嘛，我们还有时间。",py:"Bié zháojí ma, wǒmen hái yǒu shíjiān.",vi:"Đừng vội mà, chúng ta vẫn còn thời gian."},{tag:"Tình huống khác",zh:"别着急嘛，妈妈们还有时间。",py:"Bié zháojí ma, Māmamen hái yǒu shíjiān.",vi:"Đừng vội mà, chúng ta vẫn còn thời gian."},{tag:"Tình huống khác",zh:"别着急嘛，老师们还有时间。",py:"Bié zháojí ma, Lǎoshīmen hái yǒu shíjiān.",vi:"Đừng vội mà, chúng ta vẫn còn thời gian."},{tag:"Tình huống khác",zh:"别着急嘛，同学们们还有时间。",py:"Bié zháojí ma, Tóngxuémenmen hái yǒu shíjiān.",vi:"Đừng vội mà, chúng ta vẫn còn thời gian."},{tag:"Tình huống khác",zh:"别着急嘛，他们还有时间。",py:"Bié zháojí ma, Tāmen hái yǒu shíjiān.",vi:"Đừng vội mà, chúng ta vẫn còn thời gian."}],
    explanation:"嘛可表示解释、安慰或理所当然。",
    note:"口语色彩明显。"
  },

  {
    id:"hsk6_056",
    pattern:"也好",
    title:"也好<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yě hǎo</div>",
    structure:"A也好，B也好，……",
    example:"你留下来也好，回去也好，我都支持你。",
    pinyin:"Nǐ liúxiàlái yě hǎo, huíqù yě hǎo, wǒ dōu zhīchí nǐ.",
    meaning:"Bạn ở lại cũng được, về cũng được, tôi đều ủng hộ bạn.",
    examples:[{tag:"Câu gốc",zh:"你留下来也好，回去也好，我都支持你。",py:"Nǐ liúxiàlái yě hǎo, huíqù yě hǎo, wǒ dōu zhīchí nǐ.",vi:"Bạn ở lại cũng được, về cũng được, tôi đều ủng hộ bạn."},{tag:"Tình huống khác",zh:"你留下来也好，回去也好，妈妈都支持你。",py:"Nǐ liúxiàlái yě hǎo, huíqù yě hǎo, Māma dōu zhīchí nǐ.",vi:"Bạn ở lại cũng được, về cũng được, tôi đều ủng hộ bạn."},{tag:"Tình huống khác",zh:"你留下来也好，回去也好，老师都支持你。",py:"Nǐ liúxiàlái yě hǎo, huíqù yě hǎo, Lǎoshī dōu zhīchí nǐ.",vi:"Bạn ở lại cũng được, về cũng được, tôi đều ủng hộ bạn."},{tag:"Tình huống khác",zh:"你留下来也好，回去也好，同学们都支持你。",py:"Nǐ liúxiàlái yě hǎo, huíqù yě hǎo, Tóngxuémen dōu zhīchí nǐ.",vi:"Bạn ở lại cũng được, về cũng được, tôi đều ủng hộ bạn."}],
    explanation:"也好用于列举两种或多种选择，表示都可以。",
    note:"常与选择结构搭配。"
  },

  {
    id:"hsk6_057",
    pattern:"A这A那",
    title:"A这A那<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">A zhè A nà</div>",
    structure:"A这A那",
    example:"他一天到晚A这A那地挑毛病。",
    pinyin:"Tā yì tiān dào wǎn A zhè A nà de tiāo máobìng.",
    meaning:"Cả ngày anh ta cứ soi mói hết cái này đến cái kia.",
    examples:[{tag:"Câu gốc",zh:"他一天到晚A这A那地挑毛病。",py:"Tā yì tiān dào wǎn A zhè A nà de tiāo máobìng.",vi:"Cả ngày anh ta cứ soi mói hết cái này đến cái kia."},{tag:"Ở nhà",zh:"妈妈告诉我：他一天到晚A这A那地挑毛病。",py:"Māma gàosu wǒ: Tā yì tiān dào wǎn A zhè A nà de tiāo máobìng.",vi:"Mẹ bảo tôi: Cả ngày anh ta cứ soi mói hết cái này đến cái kia."},{tag:"Ở trường",zh:"在学校，他一天到晚A这A那地挑毛病。",py:"Zài xuéxiào, Tā yì tiān dào wǎn A zhè A nà de tiāo máobìng.",vi:"Ở trường, Cả ngày anh ta cứ soi mói hết cái này đến cái kia."},{tag:"Lúc đi làm",zh:"上班的时候，他一天到晚A这A那地挑毛病。",py:"Shàngbān de shíhou, Tā yì tiān dào wǎn A zhè A nà de tiāo máobìng.",vi:"Lúc đi làm, Cả ngày anh ta cứ soi mói hết cái này đến cái kia."}],
    explanation:"表示不断列举不同事物。",
    note:"常带有不满语气。"
  },

  {
    id:"hsk6_058",
    pattern:"左A右B",
    title:"左A右B<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zuǒ A yòu B</div>",
    structure:"左 + V + 右 + V",
    example:"他左看右看，还是没有找到钥匙。",
    pinyin:"Tā zuǒ kàn yòu kàn, háishi méiyǒu zhǎodào yàoshi.",
    meaning:"Anh ấy nhìn trái nhìn phải mà vẫn không tìm thấy chìa khóa.",
    examples:[{tag:"Câu gốc",zh:"他左看右看，还是没有找到钥匙。",py:"Tā zuǒ kàn yòu kàn, háishi méiyǒu zhǎodào yàoshi.",vi:"Anh ấy nhìn trái nhìn phải mà vẫn không tìm thấy chìa khóa."},{tag:"Ở nhà",zh:"妈妈告诉我：他左看右看，还是没有找到钥匙。",py:"Māma gàosu wǒ: Tā zuǒ kàn yòu kàn, háishi méiyǒu zhǎodào yàoshi.",vi:"Mẹ bảo tôi: Anh ấy nhìn trái nhìn phải mà vẫn không tìm thấy chìa khóa."},{tag:"Ở trường",zh:"在学校，他左看右看，还是没有找到钥匙。",py:"Zài xuéxiào, Tā zuǒ kàn yòu kàn, háishi méiyǒu zhǎodào yàoshi.",vi:"Ở trường, Anh ấy nhìn trái nhìn phải mà vẫn không tìm thấy chìa khóa."},{tag:"Lúc đi làm",zh:"上班的时候，他左看右看，还是没有找到钥匙。",py:"Shàngbān de shíhou, Tā zuǒ kàn yòu kàn, háishi méiyǒu zhǎodào yàoshi.",vi:"Lúc đi làm, Anh ấy nhìn trái nhìn phải mà vẫn không tìm thấy chìa khóa."}],
    explanation:"表示反复从不同方向进行动作。",
    note:"常形成四字格式。"
  },

  {
    id:"hsk6_059",
    pattern:"好不容易",
    title:"好不容易<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">hǎo bù róngyì</div>",
    structure:"好不容易 + 动词",
    example:"我好不容易才找到一个合适的房子。",
    pinyin:"Wǒ hǎo bù róngyì cái zhǎodào yí gè héshì de fángzi.",
    meaning:"Tôi rất khó khăn mới tìm được một căn nhà phù hợp.",
    examples:[{tag:"Câu gốc",zh:"我好不容易才找到一个合适的房子。",py:"Wǒ hǎo bù róngyì cái zhǎodào yí gè héshì de fángzi.",vi:"Tôi rất khó khăn mới tìm được một căn nhà phù hợp."},{tag:"Tình huống khác",zh:"妈妈好不容易才找到一个合适的房子。",py:"Māma hǎo bù róngyì cái zhǎodào yí gè héshì de fángzi.",vi:"Mẹ rất khó khăn mới tìm được một căn nhà phù hợp."},{tag:"Tình huống khác",zh:"老师好不容易才找到一个合适的房子。",py:"Lǎoshī hǎo bù róngyì cái zhǎodào yí gè héshì de fángzi.",vi:"Thầy rất khó khăn mới tìm được một căn nhà phù hợp."},{tag:"Tình huống khác",zh:"同学们好不容易才找到一个合适的房子。",py:"Tóngxuémen hǎo bù róngyì cái zhǎodào yí gè héshì de fángzi.",vi:"Các bạn rất khó khăn mới tìm được một căn nhà phù hợp."}],
    explanation:"表示经过很大困难才实现。",
    note:"常与“才”搭配。"
  },

  {
    id:"hsk6_060",
    pattern:"那倒是",
    title:"那倒是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">nà dàoshi</div>",
    structure:"那倒是。",
    example:"“这里的风景真漂亮。”“那倒是。”",
    pinyin:"Nà dàoshi.",
    meaning:"“Phong cảnh ở đây đẹp thật.” “Đúng là vậy.”",
    examples:[{tag:"Câu gốc",zh:"“这里的风景真漂亮。”“那倒是。”",py:"Nà dàoshi.",vi:"“Phong cảnh ở đây đẹp thật.” “Đúng là vậy.”"},{tag:"Ở nhà",zh:"妈妈告诉我：“这里的风景真漂亮。”“那倒是。”",py:"Māma gàosu wǒ: Nà dàoshi.",vi:"Mẹ bảo tôi: “Phong cảnh ở đây đẹp thật.” “Đúng là vậy.”"},{tag:"Ở trường",zh:"在学校，“这里的风景真漂亮。”“那倒是。”",py:"Zài xuéxiào, Nà dàoshi.",vi:"Ở trường, “Phong cảnh ở đây đẹp thật.” “Đúng là vậy.”"},{tag:"Lúc đi làm",zh:"上班的时候，“这里的风景真漂亮。”“那倒是。”",py:"Shàngbān de shíhou, Nà dàoshi.",vi:"Lúc đi làm, “Phong cảnh ở đây đẹp thật.” “Đúng là vậy.”"}],
    explanation:"表示承认对方所说的话。",
    note:"口语表达。"
  },

  {
    id:"hsk6_061",
    pattern:"算了",
    title:"算了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suàn le</div>",
    structure:"算了 + ……",
    example:"算了，这件事我们以后再说。",
    pinyin:"Suàn le, zhè jiàn shì wǒmen yǐhòu zài shuō.",
    meaning:"Thôi bỏ đi, chuyện này để sau nói.",
    examples:[{tag:"Câu gốc",zh:"算了，这件事我们以后再说。",py:"Suàn le, zhè jiàn shì wǒmen yǐhòu zài shuō.",vi:"Thôi bỏ đi, chuyện này để sau nói."},{tag:"Tình huống khác",zh:"算了，这件事妈妈们以后再说。",py:"Suàn le, zhè jiàn shì Māmamen yǐhòu zài shuō.",vi:"Thôi bỏ đi, chuyện này để sau nói."},{tag:"Tình huống khác",zh:"算了，这件事老师们以后再说。",py:"Suàn le, zhè jiàn shì Lǎoshīmen yǐhòu zài shuō.",vi:"Thôi bỏ đi, chuyện này để sau nói."},{tag:"Tình huống khác",zh:"算了，这件事同学们们以后再说。",py:"Suàn le, zhè jiàn shì Tóngxuémenmen yǐhòu zài shuō.",vi:"Thôi bỏ đi, chuyện này để sau nói."},{tag:"Tình huống khác",zh:"算了，这件事他们以后再说。",py:"Suàn le, zhè jiàn shì Tāmen yǐhòu zài shuō.",vi:"Thôi bỏ đi, chuyện này để sau nói."}],
    explanation:"表示放弃、停止或不再计较。",
    note:"口语常用。"
  },

  {
    id:"hsk6_062",
    pattern:"得了",
    title:"得了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dé le</div>",
    structure:"得了 + ……",
    example:"得了，别再解释了，我明白你的意思。",
    pinyin:"Dé le, bié zài jiěshì le, wǒ míngbai nǐ de yìsi.",
    meaning:"Thôi được rồi, đừng giải thích nữa, tôi hiểu ý bạn.",
    examples:[{tag:"Câu gốc",zh:"得了，别再解释了，我明白你的意思。",py:"Dé le, bié zài jiěshì le, wǒ míngbai nǐ de yìsi.",vi:"Thôi được rồi, đừng giải thích nữa, tôi hiểu ý bạn."},{tag:"Tình huống khác",zh:"得了，别再解释了，妈妈明白你的意思。",py:"Dé le, bié zài jiěshì le, Māma míngbai nǐ de yìsi.",vi:"Thôi được rồi, đừng giải thích nữa, tôi hiểu ý bạn."},{tag:"Tình huống khác",zh:"得了，别再解释了，老师明白你的意思。",py:"Dé le, bié zài jiěshì le, Lǎoshī míngbai nǐ de yìsi.",vi:"Thôi được rồi, đừng giải thích nữa, tôi hiểu ý bạn."},{tag:"Tình huống khác",zh:"得了，别再解释了，同学们明白你的意思。",py:"Dé le, bié zài jiěshì le, Tóngxuémen míngbai nǐ de yìsi.",vi:"Thôi được rồi, đừng giải thích nữa, tôi hiểu ý bạn."}],
    explanation:"口语中表示制止、厌烦或不耐烦。",
    note:"语气依上下文变化。"
  },

  {
    id:"hsk6_063",
    pattern:"A一+量词，B一+量词",
    title:"A一+量词，B一+量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">A yī + liàngcí, B yī + liàngcí</div>",
    structure:"A一……，B一……",
    example:"桌上一杯茶，旁边一盘水果。",
    pinyin:"Zhuō shàng yì bēi chá, pángbiān yì pán shuǐguǒ.",
    meaning:"Trên bàn một cốc trà, bên cạnh một đĩa hoa quả.",
    examples:[{tag:"Câu gốc",zh:"桌上一杯茶，旁边一盘水果。",py:"Zhuō shàng yì bēi chá, pángbiān yì pán shuǐguǒ.",vi:"Trên bàn một cốc trà, bên cạnh một đĩa hoa quả."},{tag:"Ở nhà",zh:"妈妈告诉我：桌上一杯茶，旁边一盘水果。",py:"Māma gàosu wǒ: Zhuō shàng yì bēi chá, pángbiān yì pán shuǐguǒ.",vi:"Mẹ bảo tôi: Trên bàn một cốc trà, bên cạnh một đĩa hoa quả."},{tag:"Ở trường",zh:"在学校，桌上一杯茶，旁边一盘水果。",py:"Zài xuéxiào, Zhuō shàng yì bēi chá, pángbiān yì pán shuǐguǒ.",vi:"Ở trường, Trên bàn một cốc trà, bên cạnh một đĩa hoa quả."},{tag:"Lúc đi làm",zh:"上班的时候，桌上一杯茶，旁边一盘水果。",py:"Shàngbān de shíhou, Zhuō shàng yì bēi chá, pángbiān yì pán shuǐguǒ.",vi:"Lúc đi làm, Trên bàn một cốc trà, bên cạnh một đĩa hoa quả."}],
    explanation:"用于简洁地并列描述两个事物。",
    note:"常见于描写。"
  },

  {
    id:"hsk6_064",
    pattern:"东一A，西一A",
    title:"东一A，西一A<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dōng yī A, xī yī A</div>",
    structure:"东一A，西一A",
    example:"房间里东一件衣服，西一件衣服。",
    pinyin:"Fángjiān lǐ dōng yí jiàn yīfu, xī yí jiàn yīfu.",
    meaning:"Trong phòng chỗ này một bộ quần áo, chỗ kia một bộ.",
    examples:[{tag:"Câu gốc",zh:"房间里东一件衣服，西一件衣服。",py:"Fángjiān lǐ dōng yí jiàn yīfu, xī yí jiàn yīfu.",vi:"Trong phòng chỗ này một bộ quần áo, chỗ kia một bộ."},{tag:"Ở nhà",zh:"妈妈告诉我：房间里东一件衣服，西一件衣服。",py:"Māma gàosu wǒ: Fángjiān lǐ dōng yí jiàn yīfu, xī yí jiàn yīfu.",vi:"Mẹ bảo tôi: Trong phòng chỗ này một bộ quần áo, chỗ kia một bộ."},{tag:"Ở trường",zh:"在学校，房间里东一件衣服，西一件衣服。",py:"Zài xuéxiào, Fángjiān lǐ dōng yí jiàn yīfu, xī yí jiàn yīfu.",vi:"Ở trường, Trong phòng chỗ này một bộ quần áo, chỗ kia một bộ."},{tag:"Lúc đi làm",zh:"上班的时候，房间里东一件衣服，西一件衣服。",py:"Shàngbān de shíhou, Fángjiān lǐ dōng yí jiàn yīfu, xī yí jiàn yīfu.",vi:"Lúc đi làm, Trong phòng chỗ này một bộ quần áo, chỗ kia một bộ."}],
    explanation:"表示东西分散在不同地方。",
    note:"常用于口语描写。"
  },

  {
    id:"hsk6_065",
    pattern:"到……为止",
    title:"到……为止<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">dào……wéizhǐ</div>",
    structure:"到 + 时间/地点 + 为止",
    example:"到目前为止，一切都很顺利。",
    pinyin:"Dào mùqián wéizhǐ, yíqiè dōu hěn shùnlì.",
    meaning:"Cho đến hiện tại, mọi việc đều rất thuận lợi.",
    examples:[{tag:"Câu gốc",zh:"到目前为止，一切都很顺利。",py:"Dào mùqián wéizhǐ, yíqiè dōu hěn shùnlì.",vi:"Cho đến hiện tại, mọi việc đều rất thuận lợi."},{tag:"Ở nhà",zh:"妈妈告诉我：到目前为止，一切都很顺利。",py:"Māma gàosu wǒ: Dào mùqián wéizhǐ, yíqiè dōu hěn shùnlì.",vi:"Mẹ bảo tôi: Cho đến hiện tại, mọi việc đều rất thuận lợi."},{tag:"Ở trường",zh:"在学校，到目前为止，一切都很顺利。",py:"Zài xuéxiào, Dào mùqián wéizhǐ, yíqiè dōu hěn shùnlì.",vi:"Ở trường, Cho đến hiện tại, mọi việc đều rất thuận lợi."},{tag:"Lúc đi làm",zh:"上班的时候，到目前为止，一切都很顺利。",py:"Shàngbān de shíhou, Dào mùqián wéizhǐ, yíqiè dōu hěn shùnlì.",vi:"Lúc đi làm, Cho đến hiện tại, mọi việc đều rất thuận lợi."}],
    explanation:"表示动作或状态的终点。",
    note:"书面语常用。"
  },

  {
    id:"hsk6_066",
    pattern:"X到Y头上来了",
    title:"X到Y头上来了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X dào Y tóu shàng lái le</div>",
    structure:"把某事 X 到某人头上来了",
    example:"这种麻烦怎么又到我头上来了？",
    pinyin:"Zhè zhǒng máfan zěnme yòu dào wǒ tóu shàng lái le?",
    meaning:"Sao loại rắc rối này lại rơi vào đầu tôi nữa rồi?",
    examples:[{tag:"Câu gốc",zh:"这种麻烦怎么又到我头上来了？",py:"Zhè zhǒng máfan zěnme yòu dào wǒ tóu shàng lái le?",vi:"Sao loại rắc rối này lại rơi vào đầu tôi nữa rồi?"},{tag:"Tình huống khác",zh:"这种麻烦怎么又到妈妈头上来了？",py:"Zhè zhǒng máfan zěnme yòu dào Māma tóu shàng lái le?",vi:"Sao loại rắc rối này lại rơi vào đầu tôi nữa rồi?"},{tag:"Tình huống khác",zh:"这种麻烦怎么又到老师头上来了？",py:"Zhè zhǒng máfan zěnme yòu dào Lǎoshī tóu shàng lái le?",vi:"Sao loại rắc rối này lại rơi vào đầu tôi nữa rồi?"},{tag:"Tình huống khác",zh:"这种麻烦怎么又到同学们头上来了？",py:"Zhè zhǒng máfan zěnme yòu dào Tóngxuémen tóu shàng lái le?",vi:"Sao loại rắc rối này lại rơi vào đầu tôi nữa rồi?"}],
    explanation:"表示某种事情落到某人身上，常含抱怨。",
    note:"口语固定格式。"
  },

  {
    id:"hsk6_067",
    pattern:"不X不……，一X……",
    title:"不X不……，一X……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù X bù…, yī X…</div>",
    structure:"不 + V + 不 + ……，一 + V + ……",
    example:"他不问不说，一问就说个没完。",
    pinyin:"Tā bù wèn bù shuō, yí wèn jiù shuō ge méi wán.",
    meaning:"Anh ấy không hỏi thì không nói, nhưng một khi hỏi thì nói mãi không thôi.",
    examples:[{tag:"Câu gốc",zh:"他不问不说，一问就说个没完。",py:"Tā bù wèn bù shuō, yí wèn jiù shuō ge méi wán.",vi:"Anh ấy không hỏi thì không nói, nhưng một khi hỏi thì nói mãi không thôi."},{tag:"Ở nhà",zh:"妈妈告诉我：他不问不说，一问就说个没完。",py:"Māma gàosu wǒ: Tā bù wèn bù shuō, yí wèn jiù shuō ge méi wán.",vi:"Mẹ bảo tôi: Anh ấy không hỏi thì không nói, nhưng một khi hỏi thì nói mãi không thôi."},{tag:"Ở trường",zh:"在学校，他不问不说，一问就说个没完。",py:"Zài xuéxiào, Tā bù wèn bù shuō, yí wèn jiù shuō ge méi wán.",vi:"Ở trường, Anh ấy không hỏi thì không nói, nhưng một khi hỏi thì nói mãi không thôi."},{tag:"Lúc đi làm",zh:"上班的时候，他不问不说，一问就说个没完。",py:"Shàngbān de shíhou, Tā bù wèn bù shuō, yí wèn jiù shuō ge méi wán.",vi:"Lúc đi làm, Anh ấy không hỏi thì không nói, nhưng một khi hỏi thì nói mãi không thôi."}],
    explanation:"表示平时不做某事，一旦条件出现就产生明显变化。",
    note:"口语色彩强。"
  },

  {
    id:"hsk6_068",
    pattern:"好你个X",
    title:"好你个X<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">hǎo nǐ ge X</div>",
    structure:"好你个 + 名词/人",
    example:"好你个小王，原来你早就知道了！",
    pinyin:"Hǎo nǐ ge Xiǎo Wáng, yuánlái nǐ zǎo jiù zhīdào le!",
    meaning:"Cậu được lắm Tiểu Vương, hóa ra cậu biết từ lâu rồi!",
    examples:[{tag:"Câu gốc",zh:"好你个小王，原来你早就知道了！",py:"Hǎo nǐ ge Xiǎo Wáng, yuánlái nǐ zǎo jiù zhīdào le!",vi:"Cậu được lắm Tiểu Vương, hóa ra cậu biết từ lâu rồi!"},{tag:"Ở nhà",zh:"妈妈告诉我：好你个小王，原来你早就知道了！",py:"Māma gàosu wǒ: Hǎo nǐ ge Xiǎo Wáng, yuánlái nǐ zǎo jiù zhīdào le!",vi:"Mẹ bảo tôi: Cậu được lắm Tiểu Vương, hóa ra cậu biết từ lâu rồi!"},{tag:"Ở trường",zh:"在学校，好你个小王，原来你早就知道了！",py:"Zài xuéxiào, Hǎo nǐ ge Xiǎo Wáng, yuánlái nǐ zǎo jiù zhīdào le!",vi:"Ở trường, Cậu được lắm Tiểu Vương, hóa ra cậu biết từ lâu rồi!"},{tag:"Lúc đi làm",zh:"上班的时候，好你个小王，原来你早就知道了！",py:"Shàngbān de shíhou, Hǎo nǐ ge Xiǎo Wáng, yuánlái nǐ zǎo jiù zhīdào le!",vi:"Lúc đi làm, Cậu được lắm Tiểu Vương, hóa ra cậu biết từ lâu rồi!"}],
    explanation:"表示惊讶、责备或戏谑。",
    note:"必须结合语气理解。"
  },

  {
    id:"hsk6_069",
    pattern:"早也不X，晚也不X",
    title:"早也不X，晚也不X<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zǎo yě bù X, wǎn yě bù X</div>",
    structure:"早也不V，晚也不V",
    example:"早也不说，晚也不说，偏偏今天才告诉我。",
    pinyin:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān jīntiān cái gàosu wǒ.",
    meaning:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi.",
    examples:[{tag:"Câu gốc",zh:"早也不说，晚也不说，偏偏今天才告诉我。",py:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān jīntiān cái gàosu wǒ.",vi:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi."},{tag:"Tình huống khác",zh:"早也不说，晚也不说，偏偏今天才告诉妈妈。",py:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān jīntiān cái gàosu Māma.",vi:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi."},{tag:"Tình huống khác",zh:"早也不说，晚也不说，偏偏今天才告诉老师。",py:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān jīntiān cái gàosu Lǎoshī.",vi:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi."},{tag:"Tình huống khác",zh:"早也不说，晚也不说，偏偏今天才告诉同学们。",py:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān jīntiān cái gàosu Tóngxuémen.",vi:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi."},{tag:"Tình huống khác",zh:"早也不说，晚也不说，偏偏昨天才告诉我。",py:"Zǎo yě bù shuō, wǎn yě bù shuō, piānpiān Zuótiān cái gàosu wǒ.",vi:"Sớm cũng không nói, muộn cũng không nói, lại đúng hôm nay mới nói cho tôi."}],
    explanation:"表示在多个时间点都没有做某事。",
    note:"常带抱怨语气。"
  },

  {
    id:"hsk6_070",
    pattern:"看/瞧+把+宾语+X得",
    title:"看/瞧+把+宾语+X得<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">kàn/qiáo + bǎ + O + X de</div>",
    structure:"看/瞧 + 把 + O + V/Adj + 得……",
    example:"瞧把孩子高兴得，整晚都睡不着。",
    pinyin:"Qiáo bǎ háizi gāoxìng de, zhěng wǎn dōu shuì bù zháo.",
    meaning:"Nhìn đứa trẻ vui đến mức cả đêm không ngủ được kìa.",
    examples:[{tag:"Câu gốc",zh:"瞧把孩子高兴得，整晚都睡不着。",py:"Qiáo bǎ háizi gāoxìng de, zhěng wǎn dōu shuì bù zháo.",vi:"Nhìn đứa trẻ vui đến mức cả đêm không ngủ được kìa."},{tag:"Ở nhà",zh:"妈妈告诉我：瞧把孩子高兴得，整晚都睡不着。",py:"Māma gàosu wǒ: Qiáo bǎ háizi gāoxìng de, zhěng wǎn dōu shuì bù zháo.",vi:"Mẹ bảo tôi: Nhìn đứa trẻ vui đến mức cả đêm không ngủ được kìa."},{tag:"Ở trường",zh:"在学校，瞧把孩子高兴得，整晚都睡不着。",py:"Zài xuéxiào, Qiáo bǎ háizi gāoxìng de, zhěng wǎn dōu shuì bù zháo.",vi:"Ở trường, Nhìn đứa trẻ vui đến mức cả đêm không ngủ được kìa."},{tag:"Lúc đi làm",zh:"上班的时候，瞧把孩子高兴得，整晚都睡不着。",py:"Shàngbān de shíhou, Qiáo bǎ háizi gāoxìng de, zhěng wǎn dōu shuì bù zháo.",vi:"Lúc đi làm, Nhìn đứa trẻ vui đến mức cả đêm không ngủ được kìa."}],
    explanation:"强调动作或状态达到很高程度。",
    note:"口语表达。"
  },

  {
    id:"hsk6_071",
    pattern:"放着X不Y",
    title:"放着X不Y<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fàngzhe X bù Y</div>",
    structure:"放着 + X + 不 + Y",
    example:"放着这么好的机会不利用，实在可惜。",
    pinyin:"Fàngzhe zhème hǎo de jīhuì bù lìyòng, shízài kěxī.",
    meaning:"Có cơ hội tốt như vậy mà không tận dụng thì thật đáng tiếc.",
    examples:[{tag:"Câu gốc",zh:"放着这么好的机会不利用，实在可惜。",py:"Fàngzhe zhème hǎo de jīhuì bù lìyòng, shízài kěxī.",vi:"Có cơ hội tốt như vậy mà không tận dụng thì thật đáng tiếc."},{tag:"Ở nhà",zh:"妈妈告诉我：放着这么好的机会不利用，实在可惜。",py:"Māma gàosu wǒ: Fàngzhe zhème hǎo de jīhuì bù lìyòng, shízài kěxī.",vi:"Mẹ bảo tôi: Có cơ hội tốt như vậy mà không tận dụng thì thật đáng tiếc."},{tag:"Ở trường",zh:"在学校，放着这么好的机会不利用，实在可惜。",py:"Zài xuéxiào, Fàngzhe zhème hǎo de jīhuì bù lìyòng, shízài kěxī.",vi:"Ở trường, Có cơ hội tốt như vậy mà không tận dụng thì thật đáng tiếc."},{tag:"Lúc đi làm",zh:"上班的时候，放着这么好的机会不利用，实在可惜。",py:"Shàngbān de shíhou, Fàngzhe zhème hǎo de jīhuì bù lìyòng, shízài kěxī.",vi:"Lúc đi làm, Có cơ hội tốt như vậy mà không tận dụng thì thật đáng tiếc."}],
    explanation:"表示有现成条件却不利用。",
    note:"常带责备语气。"
  },

  {
    id:"hsk6_072",
    pattern:"X了就X了",
    title:"X了就X了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X le jiù X le</div>",
    structure:"V了就V了",
    example:"错了就错了，重要的是以后别再犯。",
    pinyin:"Cuò le jiù cuò le, zhòngyào de shì yǐhòu bié zài fàn.",
    meaning:"Sai thì cũng đã sai rồi, quan trọng là sau này đừng phạm nữa.",
    examples:[{tag:"Câu gốc",zh:"错了就错了，重要的是以后别再犯。",py:"Cuò le jiù cuò le, zhòngyào de shì yǐhòu bié zài fàn.",vi:"Sai thì cũng đã sai rồi, quan trọng là sau này đừng phạm nữa."},{tag:"Ở nhà",zh:"妈妈告诉我：错了就错了，重要的是以后别再犯。",py:"Māma gàosu wǒ: Cuò le jiù cuò le, zhòngyào de shì yǐhòu bié zài fàn.",vi:"Mẹ bảo tôi: Sai thì cũng đã sai rồi, quan trọng là sau này đừng phạm nữa."},{tag:"Ở trường",zh:"在学校，错了就错了，重要的是以后别再犯。",py:"Zài xuéxiào, Cuò le jiù cuò le, zhòngyào de shì yǐhòu bié zài fàn.",vi:"Ở trường, Sai thì cũng đã sai rồi, quan trọng là sau này đừng phạm nữa."},{tag:"Lúc đi làm",zh:"上班的时候，错了就错了，重要的是以后别再犯。",py:"Shàngbān de shíhou, Cuò le jiù cuò le, zhòngyào de shì yǐhòu bié zài fàn.",vi:"Lúc đi làm, Sai thì cũng đã sai rồi, quan trọng là sau này đừng phạm nữa."}],
    explanation:"表示接受已经发生的事实。",
    note:"后面常接进一步说明。"
  },

  {
    id:"hsk6_073",
    pattern:"这/那也不X，那/这也不Y",
    title:"这也不X，那也不Y<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhè yě bù X, nà yě bù Y</div>",
    structure:"这也不V，那也不V",
    example:"这也不吃，那也不吃，你到底想吃什么？",
    pinyin:"Zhè yě bù chī, nà yě bù chī, nǐ dàodǐ xiǎng chī shénme?",
    meaning:"Cái này cũng không ăn, cái kia cũng không ăn, rốt cuộc anh muốn ăn gì?",
    examples:[{tag:"Câu gốc",zh:"这也不吃，那也不吃，你到底想吃什么？",py:"Zhè yě bù chī, nà yě bù chī, nǐ dàodǐ xiǎng chī shénme?",vi:"Cái này cũng không ăn, cái kia cũng không ăn, rốt cuộc anh muốn ăn gì?"},{tag:"Ở nhà",zh:"妈妈告诉我：这也不吃，那也不吃，你到底想吃什么？",py:"Māma gàosu wǒ: Zhè yě bù chī, nà yě bù chī, nǐ dàodǐ xiǎng chī shénme?",vi:"Mẹ bảo tôi: Cái này cũng không ăn, cái kia cũng không ăn, rốt cuộc anh muốn ăn gì?"},{tag:"Ở trường",zh:"在学校，这也不吃，那也不吃，你到底想吃什么？",py:"Zài xuéxiào, Zhè yě bù chī, nà yě bù chī, nǐ dàodǐ xiǎng chī shénme?",vi:"Ở trường, Cái này cũng không ăn, cái kia cũng không ăn, rốt cuộc anh muốn ăn gì?"},{tag:"Lúc đi làm",zh:"上班的时候，这也不吃，那也不吃，你到底想吃什么？",py:"Shàngbān de shíhou, Zhè yě bù chī, nà yě bù chī, nǐ dàodǐ xiǎng chī shénme?",vi:"Lúc đi làm, Cái này cũng không ăn, cái kia cũng không ăn, rốt cuộc anh muốn ăn gì?"}],
    explanation:"表示对多个选择都不满意。",
    note:"常含不满语气。"
  },

  {
    id:"hsk6_074",
    pattern:"X归X，Y归Y",
    title:"X归X，Y归Y<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X guī X, Y guī Y</div>",
    structure:"X归X，Y归Y",
    example:"工作归工作，生活归生活，别混在一起。",
    pinyin:"Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó, bié hùn zài yìqǐ.",
    meaning:"Công việc là công việc, cuộc sống là cuộc sống, đừng trộn lẫn với nhau.",
    examples:[{tag:"Câu gốc",zh:"工作归工作，生活归生活，别混在一起。",py:"Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó, bié hùn zài yìqǐ.",vi:"Công việc là công việc, cuộc sống là cuộc sống, đừng trộn lẫn với nhau."},{tag:"Ở nhà",zh:"妈妈告诉我：工作归工作，生活归生活，别混在一起。",py:"Māma gàosu wǒ: Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó, bié hùn zài yìqǐ.",vi:"Mẹ bảo tôi: Công việc là công việc, cuộc sống là cuộc sống, đừng trộn lẫn với nhau."},{tag:"Ở trường",zh:"在学校，工作归工作，生活归生活，别混在一起。",py:"Zài xuéxiào, Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó, bié hùn zài yìqǐ.",vi:"Ở trường, Công việc là công việc, cuộc sống là cuộc sống, đừng trộn lẫn với nhau."},{tag:"Lúc đi làm",zh:"上班的时候，工作归工作，生活归生活，别混在一起。",py:"Shàngbān de shíhou, Gōngzuò guī gōngzuò, shēnghuó guī shēnghuó, bié hùn zài yìqǐ.",vi:"Lúc đi làm, Công việc là công việc, cuộc sống là cuộc sống, đừng trộn lẫn với nhau."}],
    explanation:"表示分别处理两个方面。",
    note:"口语固定格式。"
  },

  {
    id:"hsk6_075",
    pattern:"看你X的",
    title:"看你X的<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">kàn nǐ X de</div>",
    structure:"看你 + V/Adj + 的",
    example:"看你紧张的，慢慢说就好了。",
    pinyin:"Kàn nǐ jǐnzhāng de, mànmàn shuō jiù hǎo le.",
    meaning:"Nhìn anh căng thẳng kìa, cứ từ từ nói là được.",
    examples:[{tag:"Câu gốc",zh:"看你紧张的，慢慢说就好了。",py:"Kàn nǐ jǐnzhāng de, mànmàn shuō jiù hǎo le.",vi:"Nhìn anh căng thẳng kìa, cứ từ từ nói là được."},{tag:"Ở nhà",zh:"妈妈告诉我：看你紧张的，慢慢说就好了。",py:"Māma gàosu wǒ: Kàn nǐ jǐnzhāng de, mànmàn shuō jiù hǎo le.",vi:"Mẹ bảo tôi: Nhìn anh căng thẳng kìa, cứ từ từ nói là được."},{tag:"Ở trường",zh:"在学校，看你紧张的，慢慢说就好了。",py:"Zài xuéxiào, Kàn nǐ jǐnzhāng de, mànmàn shuō jiù hǎo le.",vi:"Ở trường, Nhìn anh căng thẳng kìa, cứ từ từ nói là được."},{tag:"Lúc đi làm",zh:"上班的时候，看你紧张的，慢慢说就好了。",py:"Shàngbān de shíhou, Kàn nǐ jǐnzhāng de, mànmàn shuō jiù hǎo le.",vi:"Lúc đi làm, Nhìn anh căng thẳng kìa, cứ từ từ nói là được."}],
    explanation:"表示看到对方某种明显状态并评论。",
    note:"口语表达。"
  },

  {
    id:"hsk6_076",
    pattern:"动词/形容词+透了",
    title:"V/Adj + 透了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">V/Adj + tòu le</div>",
    structure:"V/Adj + 透了",
    example:"这几天忙得我累透了。",
    pinyin:"Zhè jǐ tiān máng de wǒ lèi tòu le.",
    meaning:"Mấy ngày nay bận đến mức tôi mệt rã rời.",
    examples:[{tag:"Câu gốc",zh:"这几天忙得我累透了。",py:"Zhè jǐ tiān máng de wǒ lèi tòu le.",vi:"Mấy ngày nay bận đến mức tôi mệt rã rời."},{tag:"Tình huống khác",zh:"这几天忙得妈妈累透了。",py:"Zhè jǐ tiān máng de Māma lèi tòu le.",vi:"Mấy ngày nay bận đến mức tôi mệt rã rời."},{tag:"Tình huống khác",zh:"这几天忙得老师累透了。",py:"Zhè jǐ tiān máng de Lǎoshī lèi tòu le.",vi:"Mấy ngày nay bận đến mức tôi mệt rã rời."},{tag:"Tình huống khác",zh:"这几天忙得同学们累透了。",py:"Zhè jǐ tiān máng de Tóngxuémen lèi tòu le.",vi:"Mấy ngày nay bận đến mức tôi mệt rã rời."}],
    explanation:"透了表示程度达到极点。",
    note:"常用于口语。"
  },

  {
    id:"hsk6_077",
    pattern:"Adj+透了",
    title:"Adj + 透了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">Adj + tòu le</div>",
    structure:"形容词 + 透了",
    example:"这部电影精彩透了。",
    pinyin:"Zhè bù diànyǐng jīngcǎi tòu le.",
    meaning:"Bộ phim này hay tuyệt.",
    examples:[{tag:"Câu gốc",zh:"这部电影精彩透了。",py:"Zhè bù diànyǐng jīngcǎi tòu le.",vi:"Bộ phim này hay tuyệt."},{tag:"Ở nhà",zh:"妈妈告诉我：这部电影精彩透了。",py:"Māma gàosu wǒ: Zhè bù diànyǐng jīngcǎi tòu le.",vi:"Mẹ bảo tôi: Bộ phim này hay tuyệt."},{tag:"Ở trường",zh:"在学校，这部电影精彩透了。",py:"Zài xuéxiào, Zhè bù diànyǐng jīngcǎi tòu le.",vi:"Ở trường, Bộ phim này hay tuyệt."},{tag:"Lúc đi làm",zh:"上班的时候，这部电影精彩透了。",py:"Shàngbān de shíhou, Zhè bù diànyǐng jīngcǎi tòu le.",vi:"Lúc đi làm, Bộ phim này hay tuyệt."}],
    explanation:"表示某种性质达到极高程度。",
    note:"口语色彩明显。"
  },

  {
    id:"hsk6_078",
    pattern:"把+无生物+V",
    title:"把 + 无生物 + V<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bǎ + object + V</div>",
    structure:"S + 把 + 无生物 + V + 结果",
    example:"大风把窗户吹开了。",
    pinyin:"Dàfēng bǎ chuānghuī chuī kāi le.",
    meaning:"Gió lớn thổi cửa sổ mở ra.",
    examples:[{tag:"Câu gốc",zh:"大风把窗户吹开了。",py:"Dàfēng bǎ chuānghuī chuī kāi le.",vi:"Gió lớn thổi cửa sổ mở ra."},{tag:"Ở nhà",zh:"妈妈告诉我：大风把窗户吹开了。",py:"Māma gàosu wǒ: Dàfēng bǎ chuānghuī chuī kāi le.",vi:"Mẹ bảo tôi: Gió lớn thổi cửa sổ mở ra."},{tag:"Ở trường",zh:"在学校，大风把窗户吹开了。",py:"Zài xuéxiào, Dàfēng bǎ chuānghuī chuī kāi le.",vi:"Ở trường, Gió lớn thổi cửa sổ mở ra."},{tag:"Lúc đi làm",zh:"上班的时候，大风把窗户吹开了。",py:"Shàngbān de shíhou, Dàfēng bǎ chuānghuī chuī kāi le.",vi:"Lúc đi làm, Gió lớn thổi cửa sổ mở ra."}],
    explanation:"无生命主语也可以用于把字句，强调事物造成的结果。",
    note:"重点是结果变化。"
  },

  {
    id:"hsk6_079",
    pattern:"把+人+V成",
    title:"把 + 人 + V成 + 身份/状态<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bǎ + person + V chéng...</div>",
    structure:"S + 把 + O + V成 + ……",
    example:"这次经历把他锻炼成了一个成熟的人。",
    pinyin:"Zhè cì jīnglì bǎ tā duànliàn chéng le yí ge chéngshú de rén.",
    meaning:"Trải nghiệm lần này đã rèn luyện anh ấy thành một người trưởng thành.",
    examples:[{tag:"Câu gốc",zh:"这次经历把他锻炼成了一个成熟的人。",py:"Zhè cì jīnglì bǎ tā duànliàn chéng le yí ge chéngshú de rén.",vi:"Trải nghiệm lần này đã rèn luyện anh ấy thành một người trưởng thành."},{tag:"Ở nhà",zh:"妈妈告诉我：这次经历把他锻炼成了一个成熟的人。",py:"Māma gàosu wǒ: Zhè cì jīnglì bǎ tā duànliàn chéng le yí ge chéngshú de rén.",vi:"Mẹ bảo tôi: Trải nghiệm lần này đã rèn luyện anh ấy thành một người trưởng thành."},{tag:"Ở trường",zh:"在学校，这次经历把他锻炼成了一个成熟的人。",py:"Zài xuéxiào, Zhè cì jīnglì bǎ tā duànliàn chéng le yí ge chéngshú de rén.",vi:"Ở trường, Trải nghiệm lần này đã rèn luyện anh ấy thành một người trưởng thành."},{tag:"Lúc đi làm",zh:"上班的时候，这次经历把他锻炼成了一个成熟的人。",py:"Shàngbān de shíhou, Zhè cì jīnglì bǎ tā duànliàn chéng le yí ge chéngshú de rén.",vi:"Lúc đi làm, Trải nghiệm lần này đã rèn luyện anh ấy thành một người trưởng thành."}],
    explanation:"表示通过动作使对象发生变化。",
    note:"成表示结果。"
  },

  {
    id:"hsk6_080",
    pattern:"被+给",
    title:"被/叫/让 + O + 给 + V<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bèi/jiào/ràng + O + gěi + V</div>",
    structure:"S + 被 + O + 给 + V + 其他",
    example:"我的自行车被人给偷走了。",
    pinyin:"Wǒ de zìxíngchē bèi rén gěi tōu zǒu le.",
    meaning:"Xe đạp của tôi bị người ta lấy trộm mất.",
    examples:[{tag:"Câu gốc",zh:"我的自行车被人给偷走了。",py:"Wǒ de zìxíngchē bèi rén gěi tōu zǒu le.",vi:"Xe đạp của tôi bị người ta lấy trộm mất."},{tag:"Tình huống khác",zh:"妈妈的自行车被人给偷走了。",py:"Māma de zìxíngchē bèi rén gěi tōu zǒu le.",vi:"Xe đạp của tôi bị người ta lấy trộm mất."},{tag:"Tình huống khác",zh:"老师的自行车被人给偷走了。",py:"Lǎoshī de zìxíngchē bèi rén gěi tōu zǒu le.",vi:"Xe đạp của tôi bị người ta lấy trộm mất."},{tag:"Tình huống khác",zh:"同学们的自行车被人给偷走了。",py:"Tóngxuémen de zìxíngchē bèi rén gěi tōu zǒu le.",vi:"Xe đạp của tôi bị người ta lấy trộm mất."}],
    explanation:"给用于加强被动事件的口语色彩。",
    note:"常见于口语叙述。"
  },

  {
    id:"hsk6_081",
    pattern:"一时……一时……",
    title:"一时……一时……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yìshí……yìshí……</div>",
    structure:"一时 A，一时 B",
    example:"天气一时晴，一时阴，很难判断。",
    pinyin:"Tiānqì yìshí qíng, yìshí yīn, hěn nán pànduàn.",
    meaning:"Thời tiết lúc nắng lúc âm u, rất khó phán đoán.",
    examples:[{tag:"Câu gốc",zh:"天气一时晴，一时阴，很难判断。",py:"Tiānqì yìshí qíng, yìshí yīn, hěn nán pànduàn.",vi:"Thời tiết lúc nắng lúc âm u, rất khó phán đoán."},{tag:"Ở nhà",zh:"妈妈告诉我：天气一时晴，一时阴，很难判断。",py:"Māma gàosu wǒ: Tiānqì yìshí qíng, yìshí yīn, hěn nán pànduàn.",vi:"Mẹ bảo tôi: Thời tiết lúc nắng lúc âm u, rất khó phán đoán."},{tag:"Ở trường",zh:"在学校，天气一时晴，一时阴，很难判断。",py:"Zài xuéxiào, Tiānqì yìshí qíng, yìshí yīn, hěn nán pànduàn.",vi:"Ở trường, Thời tiết lúc nắng lúc âm u, rất khó phán đoán."},{tag:"Lúc đi làm",zh:"上班的时候，天气一时晴，一时阴，很难判断。",py:"Shàngbān de shíhou, Tiānqì yìshí qíng, yìshí yīn, hěn nán pànduàn.",vi:"Lúc đi làm, Thời tiết lúc nắng lúc âm u, rất khó phán đoán."}],
    explanation:"表示两个情况交替出现。",
    note:"强调变化。"
  },

  {
    id:"hsk6_082",
    pattern:"时而……时而……",
    title:"时而……时而……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shí'ér……shí'ér……</div>",
    structure:"时而 A，时而 B",
    example:"他时而沉默，时而兴奋。",
    pinyin:"Tā shí'ér chénmò, shí'ér xīngfèn.",
    meaning:"Anh ấy lúc im lặng, lúc lại phấn khích.",
    examples:[{tag:"Câu gốc",zh:"他时而沉默，时而兴奋。",py:"Tā shí'ér chénmò, shí'ér xīngfèn.",vi:"Anh ấy lúc im lặng, lúc lại phấn khích."},{tag:"Ở nhà",zh:"妈妈告诉我：他时而沉默，时而兴奋。",py:"Māma gàosu wǒ: Tā shí'ér chénmò, shí'ér xīngfèn.",vi:"Mẹ bảo tôi: Anh ấy lúc im lặng, lúc lại phấn khích."},{tag:"Ở trường",zh:"在学校，他时而沉默，时而兴奋。",py:"Zài xuéxiào, Tā shí'ér chénmò, shí'ér xīngfèn.",vi:"Ở trường, Anh ấy lúc im lặng, lúc lại phấn khích."},{tag:"Lúc đi làm",zh:"上班的时候，他时而沉默，时而兴奋。",py:"Shàngbān de shíhou, Tā shí'ér chénmò, shí'ér xīngfèn.",vi:"Lúc đi làm, Anh ấy lúc im lặng, lúc lại phấn khích."}],
    explanation:"表示两种状态交替出现。",
    note:"比“一时……一时……”更书面。"
  },

  {
    id:"hsk6_083",
    pattern:"要么……要么……",
    title:"要么……要么……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yàome……yàome……</div>",
    structure:"要么 A，要么 B",
    example:"你要么现在走，要么等下一班车。",
    pinyin:"Nǐ yàome xiànzài zǒu, yàome děng xià yì bān chē.",
    meaning:"Hoặc là bạn đi ngay bây giờ, hoặc chờ chuyến xe tiếp theo.",
    examples:[{tag:"Câu gốc",zh:"你要么现在走，要么等下一班车。",py:"Nǐ yàome xiànzài zǒu, yàome děng xià yì bān chē.",vi:"Hoặc là bạn đi ngay bây giờ, hoặc chờ chuyến xe tiếp theo."},{tag:"Ở nhà",zh:"妈妈告诉我：你要么现在走，要么等下一班车。",py:"Māma gàosu wǒ: Nǐ yàome xiànzài zǒu, yàome děng xià yì bān chē.",vi:"Mẹ bảo tôi: Hoặc là bạn đi ngay bây giờ, hoặc chờ chuyến xe tiếp theo."},{tag:"Ở trường",zh:"在学校，你要么现在走，要么等下一班车。",py:"Zài xuéxiào, Nǐ yàome xiànzài zǒu, yàome děng xià yì bān chē.",vi:"Ở trường, Hoặc là bạn đi ngay bây giờ, hoặc chờ chuyến xe tiếp theo."},{tag:"Lúc đi làm",zh:"上班的时候，你要么现在走，要么等下一班车。",py:"Shàngbān de shíhou, Nǐ yàome xiànzài zǒu, yàome děng xià yì bān chē.",vi:"Lúc đi làm, Hoặc là bạn đi ngay bây giờ, hoặc chờ chuyến xe tiếp theo."}],
    explanation:"表示二选一。",
    note:"选择关系。"
  },

  {
    id:"hsk6_084",
    pattern:"或A或B",
    title:"或A或B<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">huò A huò B</div>",
    structure:"或 A，或 B",
    example:"周末或晴或雨，都不影响我们的计划。",
    pinyin:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng wǒmen de jìhuà.",
    meaning:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi.",
    examples:[{tag:"Câu gốc",zh:"周末或晴或雨，都不影响我们的计划。",py:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng wǒmen de jìhuà.",vi:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"周末或晴或雨，都不影响妈妈们的计划。",py:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng Māmamen de jìhuà.",vi:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"周末或晴或雨，都不影响老师们的计划。",py:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng Lǎoshīmen de jìhuà.",vi:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"周末或晴或雨，都不影响同学们们的计划。",py:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng Tóngxuémenmen de jìhuà.",vi:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi."},{tag:"Tình huống khác",zh:"周末或晴或雨，都不影响他们的计划。",py:"Zhōumò huò qíng huò yǔ, dōu bù yǐngxiǎng Tāmen de jìhuà.",vi:"Cuối tuần dù nắng hay mưa cũng không ảnh hưởng kế hoạch của chúng tôi."}],
    explanation:"表示两种情况中的任一种。",
    note:"书面语较多。"
  },

  {
    id:"hsk6_085",
    pattern:"无A无B",
    title:"无A无B<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wú A wú B</div>",
    structure:"无 A 无 B",
    example:"无论无何，我们都要完成任务。",
    pinyin:"Wúlùn rúhé, wǒmen dōu yào wánchéng rènwu.",
    meaning:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ.",
    examples:[{tag:"Câu gốc",zh:"无论无何，我们都要完成任务。",py:"Wúlùn rúhé, wǒmen dōu yào wánchéng rènwu.",vi:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ."},{tag:"Tình huống khác",zh:"无论无何，妈妈们都要完成任务。",py:"Wúlùn rúhé, Māmamen dōu yào wánchéng rènwu.",vi:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ."},{tag:"Tình huống khác",zh:"无论无何，老师们都要完成任务。",py:"Wúlùn rúhé, Lǎoshīmen dōu yào wánchéng rènwu.",vi:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ."},{tag:"Tình huống khác",zh:"无论无何，同学们们都要完成任务。",py:"Wúlùn rúhé, Tóngxuémenmen dōu yào wánchéng rènwu.",vi:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ."},{tag:"Tình huống khác",zh:"无论无何，他们都要完成任务。",py:"Wúlùn rúhé, Tāmen dōu yào wánchéng rènwu.",vi:"Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ."}],
    explanation:"这里强调无论哪一种情况。",
    note:"实际使用中常见“无A无B”固定词语。"
  },

  {
    id:"hsk6_086",
    pattern:"虽……但……",
    title:"虽……但……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suī……dàn……</div>",
    structure:"虽 + A，但 + B",
    example:"虽然后来遇到了困难，但他没有放弃。",
    pinyin:"Suīrán hòulái yùdào le kùnnan, dàn tā méiyǒu fàngqì.",
    meaning:"Mặc dù sau đó gặp khó khăn nhưng anh ấy không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"虽然后来遇到了困难，但他没有放弃。",py:"Suīrán hòulái yùdào le kùnnan, dàn tā méiyǒu fàngqì.",vi:"Mặc dù sau đó gặp khó khăn nhưng anh ấy không bỏ cuộc."},{tag:"Ở nhà",zh:"妈妈告诉我：虽然后来遇到了困难，但他没有放弃。",py:"Māma gàosu wǒ: Suīrán hòulái yùdào le kùnnan, dàn tā méiyǒu fàngqì.",vi:"Mẹ bảo tôi: Mặc dù sau đó gặp khó khăn nhưng anh ấy không bỏ cuộc."},{tag:"Ở trường",zh:"在学校，虽然后来遇到了困难，但他没有放弃。",py:"Zài xuéxiào, Suīrán hòulái yùdào le kùnnan, dàn tā méiyǒu fàngqì.",vi:"Ở trường, Mặc dù sau đó gặp khó khăn nhưng anh ấy không bỏ cuộc."},{tag:"Lúc đi làm",zh:"上班的时候，虽然后来遇到了困难，但他没有放弃。",py:"Shàngbān de shíhou, Suīrán hòulái yùdào le kùnnan, dàn tā méiyǒu fàngqì.",vi:"Lúc đi làm, Mặc dù sau đó gặp khó khăn nhưng anh ấy không bỏ cuộc."}],
    explanation:"表示让步关系。",
    note:"“虽”比“虽然”更书面。"
  },

  {
    id:"hsk6_087",
    pattern:"虽……可……",
    title:"虽……可……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suī……kě……</div>",
    structure:"虽 + A，可 + B",
    example:"虽条件有限，可大家都很努力。",
    pinyin:"Suī tiáojiàn yǒuxiàn, kě dàjiā dōu hěn nǔlì.",
    meaning:"Mặc dù điều kiện hạn chế nhưng mọi người đều rất nỗ lực.",
    examples:[{tag:"Câu gốc",zh:"虽条件有限，可大家都很努力。",py:"Suī tiáojiàn yǒuxiàn, kě dàjiā dōu hěn nǔlì.",vi:"Mặc dù điều kiện hạn chế nhưng mọi người đều rất nỗ lực."},{tag:"Ở nhà",zh:"妈妈告诉我：虽条件有限，可大家都很努力。",py:"Māma gàosu wǒ: Suī tiáojiàn yǒuxiàn, kě dàjiā dōu hěn nǔlì.",vi:"Mẹ bảo tôi: Mặc dù điều kiện hạn chế nhưng mọi người đều rất nỗ lực."},{tag:"Ở trường",zh:"在学校，虽条件有限，可大家都很努力。",py:"Zài xuéxiào, Suī tiáojiàn yǒuxiàn, kě dàjiā dōu hěn nǔlì.",vi:"Ở trường, Mặc dù điều kiện hạn chế nhưng mọi người đều rất nỗ lực."},{tag:"Lúc đi làm",zh:"上班的时候，虽条件有限，可大家都很努力。",py:"Shàngbān de shíhou, Suī tiáojiàn yǒuxiàn, kě dàjiā dōu hěn nǔlì.",vi:"Lúc đi làm, Mặc dù điều kiện hạn chế nhưng mọi người đều rất nỗ lực."}],
    explanation:"可表示转折。",
    note:"书面表达常见。"
  },

  {
    id:"hsk6_088",
    pattern:"虽……却……",
    title:"虽……却……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suī……què……</div>",
    structure:"虽 + A，却 + B",
    example:"虽年纪不大，却有丰富的工作经验。",
    pinyin:"Suī niánjì bú dà, què yǒu fēngfù de gōngzuò jīngyàn.",
    meaning:"Mặc dù tuổi không lớn nhưng có kinh nghiệm làm việc phong phú.",
    examples:[{tag:"Câu gốc",zh:"虽年纪不大，却有丰富的工作经验。",py:"Suī niánjì bú dà, què yǒu fēngfù de gōngzuò jīngyàn.",vi:"Mặc dù tuổi không lớn nhưng có kinh nghiệm làm việc phong phú."},{tag:"Ở nhà",zh:"妈妈告诉我：虽年纪不大，却有丰富的工作经验。",py:"Māma gàosu wǒ: Suī niánjì bú dà, què yǒu fēngfù de gōngzuò jīngyàn.",vi:"Mẹ bảo tôi: Mặc dù tuổi không lớn nhưng có kinh nghiệm làm việc phong phú."},{tag:"Ở trường",zh:"在学校，虽年纪不大，却有丰富的工作经验。",py:"Zài xuéxiào, Suī niánjì bú dà, què yǒu fēngfù de gōngzuò jīngyàn.",vi:"Ở trường, Mặc dù tuổi không lớn nhưng có kinh nghiệm làm việc phong phú."},{tag:"Lúc đi làm",zh:"上班的时候，虽年纪不大，却有丰富的工作经验。",py:"Shàngbān de shíhou, Suī niánjì bú dà, què yǒu fēngfù de gōngzuò jīngyàn.",vi:"Lúc đi làm, Mặc dù tuổi không lớn nhưng có kinh nghiệm làm việc phong phú."}],
    explanation:"却强调实际情况与预期不同。",
    note:"转折语气较明显。"
  },

  {
    id:"hsk6_089",
    pattern:"虽……也……",
    title:"虽……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">suī……yě……</div>",
    structure:"虽 + A，也 + B",
    example:"虽路途遥远，他也决定亲自去一趟。",
    pinyin:"Suī lùtú yáoyuǎn, tā yě juédìng qīnzì qù yí tàng.",
    meaning:"Dù đường xa, anh ấy vẫn quyết định đích thân đi một chuyến.",
    examples:[{tag:"Câu gốc",zh:"虽路途遥远，他也决定亲自去一趟。",py:"Suī lùtú yáoyuǎn, tā yě juédìng qīnzì qù yí tàng.",vi:"Dù đường xa, anh ấy vẫn quyết định đích thân đi một chuyến."},{tag:"Ở nhà",zh:"妈妈告诉我：虽路途遥远，他也决定亲自去一趟。",py:"Māma gàosu wǒ: Suī lùtú yáoyuǎn, tā yě juédìng qīnzì qù yí tàng.",vi:"Mẹ bảo tôi: Dù đường xa, anh ấy vẫn quyết định đích thân đi một chuyến."},{tag:"Ở trường",zh:"在学校，虽路途遥远，他也决定亲自去一趟。",py:"Zài xuéxiào, Suī lùtú yáoyuǎn, tā yě juédìng qīnzì qù yí tàng.",vi:"Ở trường, Dù đường xa, anh ấy vẫn quyết định đích thân đi một chuyến."},{tag:"Lúc đi làm",zh:"上班的时候，虽路途遥远，他也决定亲自去一趟。",py:"Shàngbān de shíhou, Suī lùtú yáoyuǎn, tā yě juédìng qīnzì qù yí tàng.",vi:"Lúc đi làm, Dù đường xa, anh ấy vẫn quyết định đích thân đi một chuyến."}],
    explanation:"表示让步条件不影响后项。",
    note:"正式表达常见。"
  },

  {
    id:"hsk6_090",
    pattern:"固然……但是……",
    title:"固然……但是……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">gùrán……dànshì……</div>",
    structure:"A固然……，但是B……",
    example:"价格固然重要，但是质量也不能忽视。",
    pinyin:"Jiàgé gùrán zhòngyào, dànshì zhìliàng yě bùnéng hūshì.",
    meaning:"Giá cả đương nhiên quan trọng, nhưng chất lượng cũng không thể xem nhẹ.",
    examples:[{tag:"Câu gốc",zh:"价格固然重要，但是质量也不能忽视。",py:"Jiàgé gùrán zhòngyào, dànshì zhìliàng yě bùnéng hūshì.",vi:"Giá cả đương nhiên quan trọng, nhưng chất lượng cũng không thể xem nhẹ."},{tag:"Ở nhà",zh:"妈妈告诉我：价格固然重要，但是质量也不能忽视。",py:"Māma gàosu wǒ: Jiàgé gùrán zhòngyào, dànshì zhìliàng yě bùnéng hūshì.",vi:"Mẹ bảo tôi: Giá cả đương nhiên quan trọng, nhưng chất lượng cũng không thể xem nhẹ."},{tag:"Ở trường",zh:"在学校，价格固然重要，但是质量也不能忽视。",py:"Zài xuéxiào, Jiàgé gùrán zhòngyào, dànshì zhìliàng yě bùnéng hūshì.",vi:"Ở trường, Giá cả đương nhiên quan trọng, nhưng chất lượng cũng không thể xem nhẹ."},{tag:"Lúc đi làm",zh:"上班的时候，价格固然重要，但是质量也不能忽视。",py:"Shàngbān de shíhou, Jiàgé gùrán zhòngyào, dànshì zhìliàng yě bùnéng hūshì.",vi:"Lúc đi làm, Giá cả đương nhiên quan trọng, nhưng chất lượng cũng không thể xem nhẹ."}],
    explanation:"固然先承认前项事实，再强调后项。",
    note:"与“虽然”意义不同。"
  },

  {
    id:"hsk6_091",
    pattern:"固然……也……",
    title:"固然……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">gùrán……yě……</div>",
    structure:"A固然……，也B……",
    example:"成功固然值得高兴，失败也能让人成长。",
    pinyin:"Chénggōng gùrán zhíde gāoxìng, shībài yě néng ràng rén chéngzhǎng.",
    meaning:"Thành công đương nhiên đáng vui, thất bại cũng có thể khiến con người trưởng thành.",
    examples:[{tag:"Câu gốc",zh:"成功固然值得高兴，失败也能让人成长。",py:"Chénggōng gùrán zhíde gāoxìng, shībài yě néng ràng rén chéngzhǎng.",vi:"Thành công đương nhiên đáng vui, thất bại cũng có thể khiến con người trưởng thành."},{tag:"Ở nhà",zh:"妈妈告诉我：成功固然值得高兴，失败也能让人成长。",py:"Māma gàosu wǒ: Chénggōng gùrán zhíde gāoxìng, shībài yě néng ràng rén chéngzhǎng.",vi:"Mẹ bảo tôi: Thành công đương nhiên đáng vui, thất bại cũng có thể khiến con người trưởng thành."},{tag:"Ở trường",zh:"在学校，成功固然值得高兴，失败也能让人成长。",py:"Zài xuéxiào, Chénggōng gùrán zhíde gāoxìng, shībài yě néng ràng rén chéngzhǎng.",vi:"Ở trường, Thành công đương nhiên đáng vui, thất bại cũng có thể khiến con người trưởng thành."},{tag:"Lúc đi làm",zh:"上班的时候，成功固然值得高兴，失败也能让人成长。",py:"Shàngbān de shíhou, Chénggōng gùrán zhíde gāoxìng, shībài yě néng ràng rén chéngzhǎng.",vi:"Lúc đi làm, Thành công đương nhiên đáng vui, thất bại cũng có thể khiến con người trưởng thành."}],
    explanation:"承认一个事实，同时补充另一个事实。",
    note:"常用于议论。"
  },

  {
    id:"hsk6_092",
    pattern:"反之",
    title:"反之<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fǎnzhī</div>",
    structure:"A……，反之，B……",
    example:"认真准备的人容易成功，反之则可能失败。",
    pinyin:"Rènzhēn zhǔnbèi de rén róngyì chénggōng, fǎnzhī zé kěnéng shībài.",
    meaning:"Người chuẩn bị nghiêm túc dễ thành công, ngược lại có thể thất bại.",
    examples:[{tag:"Câu gốc",zh:"认真准备的人容易成功，反之则可能失败。",py:"Rènzhēn zhǔnbèi de rén róngyì chénggōng, fǎnzhī zé kěnéng shībài.",vi:"Người chuẩn bị nghiêm túc dễ thành công, ngược lại có thể thất bại."},{tag:"Ở nhà",zh:"妈妈告诉我：认真准备的人容易成功，反之则可能失败。",py:"Māma gàosu wǒ: Rènzhēn zhǔnbèi de rén róngyì chénggōng, fǎnzhī zé kěnéng shībài.",vi:"Mẹ bảo tôi: Người chuẩn bị nghiêm túc dễ thành công, ngược lại có thể thất bại."},{tag:"Ở trường",zh:"在学校，认真准备的人容易成功，反之则可能失败。",py:"Zài xuéxiào, Rènzhēn zhǔnbèi de rén róngyì chénggōng, fǎnzhī zé kěnéng shībài.",vi:"Ở trường, Người chuẩn bị nghiêm túc dễ thành công, ngược lại có thể thất bại."},{tag:"Lúc đi làm",zh:"上班的时候，认真准备的人容易成功，反之则可能失败。",py:"Shàngbān de shíhou, Rènzhēn zhǔnbèi de rén róngyì chénggōng, fǎnzhī zé kěnéng shībài.",vi:"Lúc đi làm, Người chuẩn bị nghiêm túc dễ thành công, ngược lại có thể thất bại."}],
    explanation:"反之表示相反的情况。",
    note:"书面语常用。"
  },

  {
    id:"hsk6_093",
    pattern:"不但不……反而……",
    title:"不但不……反而……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">búdàn bù……fǎn'ér……</div>",
    structure:"不但不A，反而B",
    example:"他不但不道歉，反而责怪别人。",
    pinyin:"Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",
    meaning:"Anh ấy không những không xin lỗi mà còn trách người khác.",
    examples:[{tag:"Câu gốc",zh:"他不但不道歉，反而责怪别人。",py:"Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Anh ấy không những không xin lỗi mà còn trách người khác."},{tag:"Ở nhà",zh:"妈妈告诉我：他不但不道歉，反而责怪别人。",py:"Māma gàosu wǒ: Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Mẹ bảo tôi: Anh ấy không những không xin lỗi mà còn trách người khác."},{tag:"Ở trường",zh:"在学校，他不但不道歉，反而责怪别人。",py:"Zài xuéxiào, Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Ở trường, Anh ấy không những không xin lỗi mà còn trách người khác."},{tag:"Lúc đi làm",zh:"上班的时候，他不但不道歉，反而责怪别人。",py:"Shàngbān de shíhou, Tā búdàn bù dàoqiàn, fǎn'ér zéguài biérén.",vi:"Lúc đi làm, Anh ấy không những không xin lỗi mà còn trách người khác."}],
    explanation:"表示结果与正常预期相反。",
    note:"反而强调反向结果。"
  },

  {
    id:"hsk6_094",
    pattern:"不但没有……反而……",
    title:"不但没有……反而……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">búdàn méiyǒu……fǎn'ér……</div>",
    structure:"不但没有A，反而B",
    example:"他不但没有生气，反而笑了起来。",
    pinyin:"Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le qǐlái.",
    meaning:"Anh ấy không những không tức giận mà còn bật cười.",
    examples:[{tag:"Câu gốc",zh:"他不但没有生气，反而笑了起来。",py:"Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le qǐlái.",vi:"Anh ấy không những không tức giận mà còn bật cười."},{tag:"Ở nhà",zh:"妈妈告诉我：他不但没有生气，反而笑了起来。",py:"Māma gàosu wǒ: Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le qǐlái.",vi:"Mẹ bảo tôi: Anh ấy không những không tức giận mà còn bật cười."},{tag:"Ở trường",zh:"在学校，他不但没有生气，反而笑了起来。",py:"Zài xuéxiào, Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le qǐlái.",vi:"Ở trường, Anh ấy không những không tức giận mà còn bật cười."},{tag:"Lúc đi làm",zh:"上班的时候，他不但没有生气，反而笑了起来。",py:"Shàngbān de shíhou, Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le qǐlái.",vi:"Lúc đi làm, Anh ấy không những không tức giận mà còn bật cười."}],
    explanation:"强调实际结果与预期相反。",
    note:"常用于叙述意外结果。"
  },

  {
    id:"hsk6_095",
    pattern:"不是……还……",
    title:"不是……还……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bú shì……hái……</div>",
    structure:"不是A，还B",
    example:"他不是不愿意帮忙，还主动提出了建议。",
    pinyin:"Tā bú shì bù yuànyì bāngmáng, hái zhǔdòng tíchū le jiànyì.",
    meaning:"Không phải anh ấy không muốn giúp, anh ấy còn chủ động đưa ra đề nghị.",
    examples:[{tag:"Câu gốc",zh:"他不是不愿意帮忙，还主动提出了建议。",py:"Tā bú shì bù yuànyì bāngmáng, hái zhǔdòng tíchū le jiànyì.",vi:"Không phải anh ấy không muốn giúp, anh ấy còn chủ động đưa ra đề nghị."},{tag:"Ở nhà",zh:"妈妈告诉我：他不是不愿意帮忙，还主动提出了建议。",py:"Māma gàosu wǒ: Tā bú shì bù yuànyì bāngmáng, hái zhǔdòng tíchū le jiànyì.",vi:"Mẹ bảo tôi: Không phải anh ấy không muốn giúp, anh ấy còn chủ động đưa ra đề nghị."},{tag:"Ở trường",zh:"在学校，他不是不愿意帮忙，还主动提出了建议。",py:"Zài xuéxiào, Tā bú shì bù yuànyì bāngmáng, hái zhǔdòng tíchū le jiànyì.",vi:"Ở trường, Không phải anh ấy không muốn giúp, anh ấy còn chủ động đưa ra đề nghị."},{tag:"Lúc đi làm",zh:"上班的时候，他不是不愿意帮忙，还主动提出了建议。",py:"Shàngbān de shíhou, Tā bú shì bù yuànyì bāngmáng, hái zhǔdòng tíchū le jiànyì.",vi:"Lúc đi làm, Không phải anh ấy không muốn giúp, anh ấy còn chủ động đưa ra đề nghị."}],
    explanation:"先否定一种判断，再补充实际情况。",
    note:"常用于澄清误会。"
  },

  {
    id:"hsk6_096",
    pattern:"不是……还是……",
    title:"不是……还是……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bú shì……háishi……</div>",
    structure:"不是A，还是B",
    example:"问题不是能力不够，还是经验不足。",
    pinyin:"Wèntí bú shì nénglì bú gòu, háishi jīngyàn bùzú.",
    meaning:"Vấn đề không phải năng lực không đủ mà vẫn là kinh nghiệm chưa đủ.",
    examples:[{tag:"Câu gốc",zh:"问题不是能力不够，还是经验不足。",py:"Wèntí bú shì nénglì bú gòu, háishi jīngyàn bùzú.",vi:"Vấn đề không phải năng lực không đủ mà vẫn là kinh nghiệm chưa đủ."},{tag:"Ở nhà",zh:"妈妈告诉我：问题不是能力不够，还是经验不足。",py:"Māma gàosu wǒ: Wèntí bú shì nénglì bú gòu, háishi jīngyàn bùzú.",vi:"Mẹ bảo tôi: Vấn đề không phải năng lực không đủ mà vẫn là kinh nghiệm chưa đủ."},{tag:"Ở trường",zh:"在学校，问题不是能力不够，还是经验不足。",py:"Zài xuéxiào, Wèntí bú shì nénglì bú gòu, háishi jīngyàn bùzú.",vi:"Ở trường, Vấn đề không phải năng lực không đủ mà vẫn là kinh nghiệm chưa đủ."},{tag:"Lúc đi làm",zh:"上班的时候，问题不是能力不够，还是经验不足。",py:"Shàngbān de shíhou, Wèntí bú shì nénglì bú gòu, háishi jīngyàn bùzú.",vi:"Lúc đi làm, Vấn đề không phải năng lực không đủ mà vẫn là kinh nghiệm chưa đủ."}],
    explanation:"用于指出真正原因。",
    note:"实际使用中需注意上下文逻辑。"
  },

  {
    id:"hsk6_097",
    pattern:"连……都/也……，……更……",
    title:"连……都/也……，……更……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">lián……dōu/yě……, gèng……</div>",
    structure:"连A都B，C更D",
    example:"连专家都无法解释，普通人更难理解。",
    pinyin:"Lián zhuānjiā dōu wúfǎ jiěshì, pǔtōng rén gèng nán lǐjiě.",
    meaning:"Ngay cả chuyên gia cũng không thể giải thích, người bình thường càng khó hiểu hơn.",
    examples:[{tag:"Câu gốc",zh:"连专家都无法解释，普通人更难理解。",py:"Lián zhuānjiā dōu wúfǎ jiěshì, pǔtōng rén gèng nán lǐjiě.",vi:"Ngay cả chuyên gia cũng không thể giải thích, người bình thường càng khó hiểu hơn."},{tag:"Ở nhà",zh:"妈妈告诉我：连专家都无法解释，普通人更难理解。",py:"Māma gàosu wǒ: Lián zhuānjiā dōu wúfǎ jiěshì, pǔtōng rén gèng nán lǐjiě.",vi:"Mẹ bảo tôi: Ngay cả chuyên gia cũng không thể giải thích, người bình thường càng khó hiểu hơn."},{tag:"Ở trường",zh:"在学校，连专家都无法解释，普通人更难理解。",py:"Zài xuéxiào, Lián zhuānjiā dōu wúfǎ jiěshì, pǔtōng rén gèng nán lǐjiě.",vi:"Ở trường, Ngay cả chuyên gia cũng không thể giải thích, người bình thường càng khó hiểu hơn."},{tag:"Lúc đi làm",zh:"上班的时候，连专家都无法解释，普通人更难理解。",py:"Shàngbān de shíhou, Lián zhuānjiā dōu wúfǎ jiěshì, pǔtōng rén gèng nán lǐjiě.",vi:"Lúc đi làm, Ngay cả chuyên gia cũng không thể giải thích, người bình thường càng khó hiểu hơn."}],
    explanation:"先举极端情况，再推出更强情况。",
    note:"表示递进。"
  },

  {
    id:"hsk6_098",
    pattern:"要不然",
    title:"要不然<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yàobùrán</div>",
    structure:"A，要不然B",
    example:"快一点，要不然就赶不上车了。",
    pinyin:"Kuài yìdiǎn, yàobùrán jiù gǎn bu shàng chē le.",
    meaning:"Nhanh lên, nếu không sẽ không kịp xe.",
    examples:[{tag:"Câu gốc",zh:"快一点，要不然就赶不上车了。",py:"Kuài yìdiǎn, yàobùrán jiù gǎn bu shàng chē le.",vi:"Nhanh lên, nếu không sẽ không kịp xe."},{tag:"Ở nhà",zh:"妈妈告诉我：快一点，要不然就赶不上车了。",py:"Māma gàosu wǒ: Kuài yìdiǎn, yàobùrán jiù gǎn bu shàng chē le.",vi:"Mẹ bảo tôi: Nhanh lên, nếu không sẽ không kịp xe."},{tag:"Ở trường",zh:"在学校，快一点，要不然就赶不上车了。",py:"Zài xuéxiào, Kuài yìdiǎn, yàobùrán jiù gǎn bu shàng chē le.",vi:"Ở trường, Nhanh lên, nếu không sẽ không kịp xe."},{tag:"Lúc đi làm",zh:"上班的时候，快一点，要不然就赶不上车了。",py:"Shàngbān de shíhou, Kuài yìdiǎn, yàobùrán jiù gǎn bu shàng chē le.",vi:"Lúc đi làm, Nhanh lên, nếu không sẽ không kịp xe."}],
    explanation:"表示否则。",
    note:"口语常用。"
  },

  {
    id:"hsk6_099",
    pattern:"不然",
    title:"不然<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùrán</div>",
    structure:"A，不然B",
    example:"早点休息，不然明天会很累。",
    pinyin:"Zǎodiǎn xiūxi, bùrán míngtiān huì hěn lèi.",
    meaning:"Nghỉ sớm đi, nếu không ngày mai sẽ rất mệt.",
    examples:[{tag:"Câu gốc",zh:"早点休息，不然明天会很累。",py:"Zǎodiǎn xiūxi, bùrán míngtiān huì hěn lèi.",vi:"Nghỉ sớm đi, nếu không ngày mai sẽ rất mệt."},{tag:"Ở nhà",zh:"妈妈告诉我：早点休息，不然明天会很累。",py:"Māma gàosu wǒ: Zǎodiǎn xiūxi, bùrán míngtiān huì hěn lèi.",vi:"Mẹ bảo tôi: Nghỉ sớm đi, nếu không ngày mai sẽ rất mệt."},{tag:"Ở trường",zh:"在学校，早点休息，不然明天会很累。",py:"Zài xuéxiào, Zǎodiǎn xiūxi, bùrán míngtiān huì hěn lèi.",vi:"Ở trường, Nghỉ sớm đi, nếu không ngày mai sẽ rất mệt."},{tag:"Lúc đi làm",zh:"上班的时候，早点休息，不然明天会很累。",py:"Shàngbān de shíhou, Zǎodiǎn xiūxi, bùrán míngtiān huì hěn lèi.",vi:"Lúc đi làm, Nghỉ sớm đi, nếu không ngày mai sẽ rất mệt."}],
    explanation:"表示否则。",
    note:"可用于口语和书面语。"
  },

  {
    id:"hsk6_100",
    pattern:"凡是……都……",
    title:"凡是……都……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fánshì……dōu……</div>",
    structure:"凡是 + A，都 + B",
    example:"凡是参加过培训的人，都必须通过考试。",
    pinyin:"Fánshì cānjiā guò péixùn de rén, dōu bìxū tōngguò kǎoshì.",
    meaning:"Bất cứ ai từng tham gia đào tạo đều phải vượt qua kỳ thi.",
    examples:[{tag:"Câu gốc",zh:"凡是参加过培训的人，都必须通过考试。",py:"Fánshì cānjiā guò péixùn de rén, dōu bìxū tōngguò kǎoshì.",vi:"Bất cứ ai từng tham gia đào tạo đều phải vượt qua kỳ thi."},{tag:"Ở nhà",zh:"妈妈告诉我：凡是参加过培训的人，都必须通过考试。",py:"Māma gàosu wǒ: Fánshì cānjiā guò péixùn de rén, dōu bìxū tōngguò kǎoshì.",vi:"Mẹ bảo tôi: Bất cứ ai từng tham gia đào tạo đều phải vượt qua kỳ thi."},{tag:"Ở trường",zh:"在学校，凡是参加过培训的人，都必须通过考试。",py:"Zài xuéxiào, Fánshì cānjiā guò péixùn de rén, dōu bìxū tōngguò kǎoshì.",vi:"Ở trường, Bất cứ ai từng tham gia đào tạo đều phải vượt qua kỳ thi."},{tag:"Lúc đi làm",zh:"上班的时候，凡是参加过培训的人，都必须通过考试。",py:"Shàngbān de shíhou, Fánshì cānjiā guò péixùn de rén, dōu bìxū tōngguò kǎoshì.",vi:"Lúc đi làm, Bất cứ ai từng tham gia đào tạo đều phải vượt qua kỳ thi."}],
    explanation:"表示所有符合条件的对象。",
    note:"范围全部覆盖。"
  },

  {
    id:"hsk6_101",
    pattern:"除非……才……",
    title:"除非……才……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">chúfēi……cái……</div>",
    structure:"除非 A，才 B",
    example:"除非提前预约，才可以进入。",
    pinyin:"Chúfēi tíqián yùyuē, cái kěyǐ jìnrù.",
    meaning:"Chỉ khi đặt lịch trước mới có thể vào.",
    examples:[{tag:"Câu gốc",zh:"除非提前预约，才可以进入。",py:"Chúfēi tíqián yùyuē, cái kěyǐ jìnrù.",vi:"Chỉ khi đặt lịch trước mới có thể vào."},{tag:"Ở nhà",zh:"妈妈告诉我：除非提前预约，才可以进入。",py:"Māma gàosu wǒ: Chúfēi tíqián yùyuē, cái kěyǐ jìnrù.",vi:"Mẹ bảo tôi: Chỉ khi đặt lịch trước mới có thể vào."},{tag:"Ở trường",zh:"在学校，除非提前预约，才可以进入。",py:"Zài xuéxiào, Chúfēi tíqián yùyuē, cái kěyǐ jìnrù.",vi:"Ở trường, Chỉ khi đặt lịch trước mới có thể vào."},{tag:"Lúc đi làm",zh:"上班的时候，除非提前预约，才可以进入。",py:"Shàngbān de shíhou, Chúfēi tíqián yùyuē, cái kěyǐ jìnrù.",vi:"Lúc đi làm, Chỉ khi đặt lịch trước mới có thể vào."}],
    explanation:"表示唯一条件。",
    note:"后项通常表示必要结果。"
  },

  {
    id:"hsk6_102",
    pattern:"除非……否则……",
    title:"除非……否则……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">chúfēi……fǒuzé……</div>",
    structure:"除非 A，否则 B",
    example:"除非有特殊情况，否则不能改变安排。",
    pinyin:"Chúfēi yǒu tèshū qíngkuàng, fǒuzé bùnéng gǎibiàn ānpái.",
    meaning:"Trừ khi có tình huống đặc biệt, nếu không thì không thể thay đổi sắp xếp.",
    examples:[{tag:"Câu gốc",zh:"除非有特殊情况，否则不能改变安排。",py:"Chúfēi yǒu tèshū qíngkuàng, fǒuzé bùnéng gǎibiàn ānpái.",vi:"Trừ khi có tình huống đặc biệt, nếu không thì không thể thay đổi sắp xếp."},{tag:"Ở nhà",zh:"妈妈告诉我：除非有特殊情况，否则不能改变安排。",py:"Māma gàosu wǒ: Chúfēi yǒu tèshū qíngkuàng, fǒuzé bùnéng gǎibiàn ānpái.",vi:"Mẹ bảo tôi: Trừ khi có tình huống đặc biệt, nếu không thì không thể thay đổi sắp xếp."},{tag:"Ở trường",zh:"在学校，除非有特殊情况，否则不能改变安排。",py:"Zài xuéxiào, Chúfēi yǒu tèshū qíngkuàng, fǒuzé bùnéng gǎibiàn ānpái.",vi:"Ở trường, Trừ khi có tình huống đặc biệt, nếu không thì không thể thay đổi sắp xếp."},{tag:"Lúc đi làm",zh:"上班的时候，除非有特殊情况，否则不能改变安排。",py:"Shàngbān de shíhou, Chúfēi yǒu tèshū qíngkuàng, fǒuzé bùnéng gǎibiàn ānpái.",vi:"Lúc đi làm, Trừ khi có tình huống đặc biệt, nếu không thì không thể thay đổi sắp xếp."}],
    explanation:"表示条件限制。",
    note:"正式表达常见。"
  },

  {
    id:"hsk6_103",
    pattern:"除非……不然……",
    title:"除非……不然……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">chúfēi……bùrán……</div>",
    structure:"除非 A，不然 B",
    example:"除非马上出发，不然就来不及了。",
    pinyin:"Chúfēi mǎshàng chūfā, bùrán jiù láibují le.",
    meaning:"Trừ khi xuất phát ngay, nếu không sẽ không kịp.",
    examples:[{tag:"Câu gốc",zh:"除非马上出发，不然就来不及了。",py:"Chúfēi mǎshàng chūfā, bùrán jiù láibují le.",vi:"Trừ khi xuất phát ngay, nếu không sẽ không kịp."},{tag:"Ở nhà",zh:"妈妈告诉我：除非马上出发，不然就来不及了。",py:"Māma gàosu wǒ: Chúfēi mǎshàng chūfā, bùrán jiù láibují le.",vi:"Mẹ bảo tôi: Trừ khi xuất phát ngay, nếu không sẽ không kịp."},{tag:"Ở trường",zh:"在学校，除非马上出发，不然就来不及了。",py:"Zài xuéxiào, Chúfēi mǎshàng chūfā, bùrán jiù láibují le.",vi:"Ở trường, Trừ khi xuất phát ngay, nếu không sẽ không kịp."},{tag:"Lúc đi làm",zh:"上班的时候，除非马上出发，不然就来不及了。",py:"Shàngbān de shíhou, Chúfēi mǎshàng chūfā, bùrán jiù láibují le.",vi:"Lúc đi làm, Trừ khi xuất phát ngay, nếu không sẽ không kịp."}],
    explanation:"与“除非……否则……”相近。",
    note:"不然更口语。"
  },

  {
    id:"hsk6_104",
    pattern:"就算……也……",
    title:"就算……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiùsuàn……yě……</div>",
    structure:"就算 A，也 B",
    example:"就算再困难，我们也不会放弃。",
    pinyin:"Jiùsuàn zài kùnnan, wǒmen yě bú huì fàngqì.",
    meaning:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"就算再困难，我们也不会放弃。",py:"Jiùsuàn zài kùnnan, wǒmen yě bú huì fàngqì.",vi:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"就算再困难，妈妈们也不会放弃。",py:"Jiùsuàn zài kùnnan, Māmamen yě bú huì fàngqì.",vi:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"就算再困难，老师们也不会放弃。",py:"Jiùsuàn zài kùnnan, Lǎoshīmen yě bú huì fàngqì.",vi:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"就算再困难，同学们们也不会放弃。",py:"Jiùsuàn zài kùnnan, Tóngxuémenmen yě bú huì fàngqì.",vi:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc."},{tag:"Tình huống khác",zh:"就算再困难，他们也不会放弃。",py:"Jiùsuàn zài kùnnan, Tāmen yě bú huì fàngqì.",vi:"Cho dù khó khăn đến đâu chúng tôi cũng không bỏ cuộc."}],
    explanation:"表示让步假设。",
    note:"强调后项不会改变。"
  },

  {
    id:"hsk6_105",
    pattern:"就是……也……",
    title:"就是……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiùshì……yě……</div>",
    structure:"就是 A，也 B",
    example:"就是再忙，他也会抽时间陪家人。",
    pinyin:"Jiùshì zài máng, tā yě huì chōu shíjiān péi jiārén.",
    meaning:"Cho dù có bận đến đâu anh ấy cũng dành thời gian cho gia đình.",
    examples:[{tag:"Câu gốc",zh:"就是再忙，他也会抽时间陪家人。",py:"Jiùshì zài máng, tā yě huì chōu shíjiān péi jiārén.",vi:"Cho dù có bận đến đâu anh ấy cũng dành thời gian cho gia đình."},{tag:"Ở nhà",zh:"妈妈告诉我：就是再忙，他也会抽时间陪家人。",py:"Māma gàosu wǒ: Jiùshì zài máng, tā yě huì chōu shíjiān péi jiārén.",vi:"Mẹ bảo tôi: Cho dù có bận đến đâu anh ấy cũng dành thời gian cho gia đình."},{tag:"Ở trường",zh:"在学校，就是再忙，他也会抽时间陪家人。",py:"Zài xuéxiào, Jiùshì zài máng, tā yě huì chōu shíjiān péi jiārén.",vi:"Ở trường, Cho dù có bận đến đâu anh ấy cũng dành thời gian cho gia đình."},{tag:"Lúc đi làm",zh:"上班的时候，就是再忙，他也会抽时间陪家人。",py:"Shàngbān de shíhou, Jiùshì zài máng, tā yě huì chōu shíjiān péi jiārén.",vi:"Lúc đi làm, Cho dù có bận đến đâu anh ấy cũng dành thời gian cho gia đình."}],
    explanation:"表示极端让步。",
    note:"语气比“就算”更强调。"
  },

  {
    id:"hsk6_106",
    pattern:"以便",
    title:"……，以便……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǐbiàn</div>",
    structure:"A，以便 B",
    example:"请留下联系方式，以便我们及时联系你。",
    pinyin:"Qǐng liúxià liánxì fāngshì, yǐbiàn wǒmen jíshí liánxì nǐ.",
    meaning:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời.",
    examples:[{tag:"Câu gốc",zh:"请留下联系方式，以便我们及时联系你。",py:"Qǐng liúxià liánxì fāngshì, yǐbiàn wǒmen jíshí liánxì nǐ.",vi:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời."},{tag:"Tình huống khác",zh:"请留下联系方式，以便妈妈们及时联系你。",py:"Qǐng liúxià liánxì fāngshì, yǐbiàn Māmamen jíshí liánxì nǐ.",vi:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời."},{tag:"Tình huống khác",zh:"请留下联系方式，以便老师们及时联系你。",py:"Qǐng liúxià liánxì fāngshì, yǐbiàn Lǎoshīmen jíshí liánxì nǐ.",vi:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời."},{tag:"Tình huống khác",zh:"请留下联系方式，以便同学们们及时联系你。",py:"Qǐng liúxià liánxì fāngshì, yǐbiàn Tóngxuémenmen jíshí liánxì nǐ.",vi:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời."},{tag:"Tình huống khác",zh:"请留下联系方式，以便他们及时联系你。",py:"Qǐng liúxià liánxì fāngshì, yǐbiàn Tāmen jíshí liánxì nǐ.",vi:"Vui lòng để lại phương thức liên lạc để chúng tôi có thể liên hệ kịp thời."}],
    explanation:"表示目的。",
    note:"书面语常用。"
  },

  {
    id:"hsk6_107",
    pattern:"以免",
    title:"……，以免……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǐmiǎn</div>",
    structure:"A，以免 B",
    example:"请提前出门，以免路上堵车。",
    pinyin:"Qǐng tíqián chūmén, yǐmiǎn lùshàng dǔchē.",
    meaning:"Hãy ra khỏi nhà sớm để tránh tắc đường.",
    examples:[{tag:"Câu gốc",zh:"请提前出门，以免路上堵车。",py:"Qǐng tíqián chūmén, yǐmiǎn lùshàng dǔchē.",vi:"Hãy ra khỏi nhà sớm để tránh tắc đường."},{tag:"Ở nhà",zh:"妈妈告诉我：请提前出门，以免路上堵车。",py:"Māma gàosu wǒ: Qǐng tíqián chūmén, yǐmiǎn lùshàng dǔchē.",vi:"Mẹ bảo tôi: Hãy ra khỏi nhà sớm để tránh tắc đường."},{tag:"Ở trường",zh:"在学校，请提前出门，以免路上堵车。",py:"Zài xuéxiào, Qǐng tíqián chūmén, yǐmiǎn lùshàng dǔchē.",vi:"Ở trường, Hãy ra khỏi nhà sớm để tránh tắc đường."},{tag:"Lúc đi làm",zh:"上班的时候，请提前出门，以免路上堵车。",py:"Shàngbān de shíhou, Qǐng tíqián chūmén, yǐmiǎn lùshàng dǔchē.",vi:"Lúc đi làm, Hãy ra khỏi nhà sớm để tránh tắc đường."}],
    explanation:"表示避免某种不良结果。",
    note:"后面通常是不希望发生的事情。"
  },

  {
    id:"hsk6_108",
    pattern:"为了……而……",
    title:"为了……而……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wèile……ér……</div>",
    structure:"为了 A 而 B",
    example:"为了提高效率而改变工作方法。",
    pinyin:"Wèile tígāo xiàolǜ ér gǎibiàn gōngzuò fāngfǎ.",
    meaning:"Thay đổi phương pháp làm việc để nâng cao hiệu suất.",
    examples:[{tag:"Câu gốc",zh:"为了提高效率而改变工作方法。",py:"Wèile tígāo xiàolǜ ér gǎibiàn gōngzuò fāngfǎ.",vi:"Thay đổi phương pháp làm việc để nâng cao hiệu suất."},{tag:"Ở nhà",zh:"妈妈告诉我：为了提高效率而改变工作方法。",py:"Māma gàosu wǒ: Wèile tígāo xiàolǜ ér gǎibiàn gōngzuò fāngfǎ.",vi:"Mẹ bảo tôi: Thay đổi phương pháp làm việc để nâng cao hiệu suất."},{tag:"Ở trường",zh:"在学校，为了提高效率而改变工作方法。",py:"Zài xuéxiào, Wèile tígāo xiàolǜ ér gǎibiàn gōngzuò fāngfǎ.",vi:"Ở trường, Thay đổi phương pháp làm việc để nâng cao hiệu suất."},{tag:"Lúc đi làm",zh:"上班的时候，为了提高效率而改变工作方法。",py:"Shàngbān de shíhou, Wèile tígāo xiàolǜ ér gǎibiàn gōngzuò fāngfǎ.",vi:"Lúc đi làm, Thay đổi phương pháp làm việc để nâng cao hiệu suất."}],
    explanation:"表示明确目的。",
    note:"较正式。"
  },

  {
    id:"hsk6_109",
    pattern:"以致",
    title:"以致<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǐzhì</div>",
    structure:"A，以致 B",
    example:"他连续工作了十几个小时，以致身体非常疲惫。",
    pinyin:"Tā liánxù gōngzuò le shí jǐ gè xiǎoshí, yǐzhì shēntǐ fēicháng píbèi.",
    meaning:"Anh ấy làm việc liên tục hơn mười giờ, đến mức cơ thể vô cùng mệt mỏi.",
    examples:[{tag:"Câu gốc",zh:"他连续工作了十几个小时，以致身体非常疲惫。",py:"Tā liánxù gōngzuò le shí jǐ gè xiǎoshí, yǐzhì shēntǐ fēicháng píbèi.",vi:"Anh ấy làm việc liên tục hơn mười giờ, đến mức cơ thể vô cùng mệt mỏi."},{tag:"Ở nhà",zh:"妈妈告诉我：他连续工作了十几个小时，以致身体非常疲惫。",py:"Māma gàosu wǒ: Tā liánxù gōngzuò le shí jǐ gè xiǎoshí, yǐzhì shēntǐ fēicháng píbèi.",vi:"Mẹ bảo tôi: Anh ấy làm việc liên tục hơn mười giờ, đến mức cơ thể vô cùng mệt mỏi."},{tag:"Ở trường",zh:"在学校，他连续工作了十几个小时，以致身体非常疲惫。",py:"Zài xuéxiào, Tā liánxù gōngzuò le shí jǐ gè xiǎoshí, yǐzhì shēntǐ fēicháng píbèi.",vi:"Ở trường, Anh ấy làm việc liên tục hơn mười giờ, đến mức cơ thể vô cùng mệt mỏi."},{tag:"Lúc đi làm",zh:"上班的时候，他连续工作了十几个小时，以致身体非常疲惫。",py:"Shàngbān de shíhou, Tā liánxù gōngzuò le shí jǐ gè xiǎoshí, yǐzhì shēntǐ fēicháng píbèi.",vi:"Lúc đi làm, Anh ấy làm việc liên tục hơn mười giờ, đến mức cơ thể vô cùng mệt mỏi."}],
    explanation:"表示前项导致后项结果，后项多为不良结果。",
    note:"书面语。"
  },

  {
    id:"hsk6_110",
    pattern:"以至",
    title:"以至<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǐzhì</div>",
    structure:"A，以至 B",
    example:"天气越来越冷，以至河水都结冰了。",
    pinyin:"Tiānqì yuèláiyuè lěng, yǐzhì héshuǐ dōu jiébīng le.",
    meaning:"Thời tiết ngày càng lạnh, đến mức nước sông cũng đóng băng.",
    examples:[{tag:"Câu gốc",zh:"天气越来越冷，以至河水都结冰了。",py:"Tiānqì yuèláiyuè lěng, yǐzhì héshuǐ dōu jiébīng le.",vi:"Thời tiết ngày càng lạnh, đến mức nước sông cũng đóng băng."},{tag:"Ở nhà",zh:"妈妈告诉我：天气越来越冷，以至河水都结冰了。",py:"Māma gàosu wǒ: Tiānqì yuèláiyuè lěng, yǐzhì héshuǐ dōu jiébīng le.",vi:"Mẹ bảo tôi: Thời tiết ngày càng lạnh, đến mức nước sông cũng đóng băng."},{tag:"Ở trường",zh:"在学校，天气越来越冷，以至河水都结冰了。",py:"Zài xuéxiào, Tiānqì yuèláiyuè lěng, yǐzhì héshuǐ dōu jiébīng le.",vi:"Ở trường, Thời tiết ngày càng lạnh, đến mức nước sông cũng đóng băng."},{tag:"Lúc đi làm",zh:"上班的时候，天气越来越冷，以至河水都结冰了。",py:"Shàngbān de shíhou, Tiānqì yuèláiyuè lěng, yǐzhì héshuǐ dōu jiébīng le.",vi:"Lúc đi làm, Thời tiết ngày càng lạnh, đến mức nước sông cũng đóng băng."}],
    explanation:"表示程度或结果达到某种程度。",
    note:"“以致”更强调不良结果。"
  },

  {
    id:"hsk6_111",
    pattern:"不免",
    title:"不免<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùmiǎn</div>",
    structure:"不免 + 动词/形容词",
    example:"第一次面对这么大的压力，他不免有些紧张。",
    pinyin:"Dì yí cì miànduì zhème dà de yālì, tā bùmiǎn yǒuxiē jǐnzhāng.",
    meaning:"Lần đầu đối mặt áp lực lớn như vậy, anh ấy khó tránh khỏi hơi căng thẳng.",
    examples:[{tag:"Câu gốc",zh:"第一次面对这么大的压力，他不免有些紧张。",py:"Dì yí cì miànduì zhème dà de yālì, tā bùmiǎn yǒuxiē jǐnzhāng.",vi:"Lần đầu đối mặt áp lực lớn như vậy, anh ấy khó tránh khỏi hơi căng thẳng."},{tag:"Ở nhà",zh:"妈妈告诉我：第一次面对这么大的压力，他不免有些紧张。",py:"Māma gàosu wǒ: Dì yí cì miànduì zhème dà de yālì, tā bùmiǎn yǒuxiē jǐnzhāng.",vi:"Mẹ bảo tôi: Lần đầu đối mặt áp lực lớn như vậy, anh ấy khó tránh khỏi hơi căng thẳng."},{tag:"Ở trường",zh:"在学校，第一次面对这么大的压力，他不免有些紧张。",py:"Zài xuéxiào, Dì yí cì miànduì zhème dà de yālì, tā bùmiǎn yǒuxiē jǐnzhāng.",vi:"Ở trường, Lần đầu đối mặt áp lực lớn như vậy, anh ấy khó tránh khỏi hơi căng thẳng."},{tag:"Lúc đi làm",zh:"上班的时候，第一次面对这么大的压力，他不免有些紧张。",py:"Shàngbān de shíhou, Dì yí cì miànduì zhème dà de yālì, tā bùmiǎn yǒuxiē jǐnzhāng.",vi:"Lúc đi làm, Lần đầu đối mặt áp lực lớn như vậy, anh ấy khó tránh khỏi hơi căng thẳng."}],
    explanation:"表示某种情况难以避免。",
    note:"常用于客观推测。"
  },

  {
    id:"hsk6_112",
    pattern:"未免",
    title:"未免<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wèimiǎn</div>",
    structure:"未免 + 太/过于 + Adj",
    example:"这个要求未免太高了。",
    pinyin:"Zhège yāoqiú wèimiǎn tài gāo le.",
    meaning:"Yêu cầu này có phần quá cao rồi.",
    examples:[{tag:"Câu gốc",zh:"这个要求未免太高了。",py:"Zhège yāoqiú wèimiǎn tài gāo le.",vi:"Yêu cầu này có phần quá cao rồi."},{tag:"Ở nhà",zh:"妈妈告诉我：这个要求未免太高了。",py:"Māma gàosu wǒ: Zhège yāoqiú wèimiǎn tài gāo le.",vi:"Mẹ bảo tôi: Yêu cầu này có phần quá cao rồi."},{tag:"Ở trường",zh:"在学校，这个要求未免太高了。",py:"Zài xuéxiào, Zhège yāoqiú wèimiǎn tài gāo le.",vi:"Ở trường, Yêu cầu này có phần quá cao rồi."},{tag:"Lúc đi làm",zh:"上班的时候，这个要求未免太高了。",py:"Shàngbān de shíhou, Zhège yāoqiú wèimiǎn tài gāo le.",vi:"Lúc đi làm, Yêu cầu này có phần quá cao rồi."}],
    explanation:"表示说话人认为程度过分。",
    note:"常含批评或不满。"
  },

  {
    id:"hsk6_113",
    pattern:"偏偏",
    title:"偏偏<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">piānpiān</div>",
    structure:"偏偏 + 动词/情况",
    example:"大家都同意了，他偏偏提出反对意见。",
    pinyin:"Dàjiā dōu tóngyì le, tā piānpiān tíchū fǎnduì yìjiàn.",
    meaning:"Mọi người đều đồng ý, riêng anh ấy lại cứ đưa ra ý kiến phản đối.",
    examples:[{tag:"Câu gốc",zh:"大家都同意了，他偏偏提出反对意见。",py:"Dàjiā dōu tóngyì le, tā piānpiān tíchū fǎnduì yìjiàn.",vi:"Mọi người đều đồng ý, riêng anh ấy lại cứ đưa ra ý kiến phản đối."},{tag:"Ở nhà",zh:"妈妈告诉我：大家都同意了，他偏偏提出反对意见。",py:"Māma gàosu wǒ: Dàjiā dōu tóngyì le, tā piānpiān tíchū fǎnduì yìjiàn.",vi:"Mẹ bảo tôi: Mọi người đều đồng ý, riêng anh ấy lại cứ đưa ra ý kiến phản đối."},{tag:"Ở trường",zh:"在学校，大家都同意了，他偏偏提出反对意见。",py:"Zài xuéxiào, Dàjiā dōu tóngyì le, tā piānpiān tíchū fǎnduì yìjiàn.",vi:"Ở trường, Mọi người đều đồng ý, riêng anh ấy lại cứ đưa ra ý kiến phản đối."},{tag:"Lúc đi làm",zh:"上班的时候，大家都同意了，他偏偏提出反对意见。",py:"Shàngbān de shíhou, Dàjiā dōu tóngyì le, tā piānpiān tíchū fǎnduì yìjiàn.",vi:"Lúc đi làm, Mọi người đều đồng ý, riêng anh ấy lại cứ đưa ra ý kiến phản đối."}],
    explanation:"表示故意或结果偏偏与预期不同。",
    note:"常带不满或意外语气。"
  },

  {
    id:"hsk6_114",
    pattern:"仿佛",
    title:"仿佛<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fǎngfú</div>",
    structure:"仿佛 + ……",
    example:"夜空中的星星仿佛离我们很近。",
    pinyin:"Yèkōng zhōng de xīngxing fǎngfú lí wǒmen hěn jìn.",
    meaning:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta.",
    examples:[{tag:"Câu gốc",zh:"夜空中的星星仿佛离我们很近。",py:"Yèkōng zhōng de xīngxing fǎngfú lí wǒmen hěn jìn.",vi:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta."},{tag:"Tình huống khác",zh:"夜空中的星星仿佛离妈妈们很近。",py:"Yèkōng zhōng de xīngxing fǎngfú lí Māmamen hěn jìn.",vi:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta."},{tag:"Tình huống khác",zh:"夜空中的星星仿佛离老师们很近。",py:"Yèkōng zhōng de xīngxing fǎngfú lí Lǎoshīmen hěn jìn.",vi:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta."},{tag:"Tình huống khác",zh:"夜空中的星星仿佛离同学们们很近。",py:"Yèkōng zhōng de xīngxing fǎngfú lí Tóngxuémenmen hěn jìn.",vi:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta."},{tag:"Tình huống khác",zh:"夜空中的星星仿佛离他们很近。",py:"Yèkōng zhōng de xīngxing fǎngfú lí Tāmen hěn jìn.",vi:"Những vì sao trên bầu trời đêm dường như ở rất gần chúng ta."}],
    explanation:"表示好像、似乎。",
    note:"书面语较常见。"
  },

  {
    id:"hsk6_115",
    pattern:"不妨",
    title:"不妨<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùfáng</div>",
    structure:"不妨 + 动词",
    example:"如果没有别的安排，不妨一起吃个饭。",
    pinyin:"Rúguǒ méiyǒu bié de ānpái, bùfáng yìqǐ chī ge fàn.",
    meaning:"Nếu không có sắp xếp khác thì cùng ăn một bữa cũng được.",
    examples:[{tag:"Câu gốc",zh:"如果没有别的安排，不妨一起吃个饭。",py:"Rúguǒ méiyǒu bié de ānpái, bùfáng yìqǐ chī ge fàn.",vi:"Nếu không có sắp xếp khác thì cùng ăn một bữa cũng được."},{tag:"Ở nhà",zh:"妈妈告诉我：如果没有别的安排，不妨一起吃个饭。",py:"Māma gàosu wǒ: Rúguǒ méiyǒu bié de ānpái, bùfáng yìqǐ chī ge fàn.",vi:"Mẹ bảo tôi: Nếu không có sắp xếp khác thì cùng ăn một bữa cũng được."},{tag:"Ở trường",zh:"在学校，如果没有别的安排，不妨一起吃个饭。",py:"Zài xuéxiào, Rúguǒ méiyǒu bié de ānpái, bùfáng yìqǐ chī ge fàn.",vi:"Ở trường, Nếu không có sắp xếp khác thì cùng ăn một bữa cũng được."},{tag:"Lúc đi làm",zh:"上班的时候，如果没有别的安排，不妨一起吃个饭。",py:"Shàngbān de shíhou, Rúguǒ méiyǒu bié de ānpái, bùfáng yìqǐ chī ge fàn.",vi:"Lúc đi làm, Nếu không có sắp xếp khác thì cùng ăn một bữa cũng được."}],
    explanation:"表示可以这样做，没有妨碍。",
    note:"语气委婉。"
  },

  {
    id:"hsk6_116",
    pattern:"连同",
    title:"连同 + 名词",
    structure:"连同 + A + 一起",
    example:"请把申请表连同证件一起交上来。",
    pinyin:"Qǐng bǎ shēnqǐngbiǎo liántóng zhèngjiàn yìqǐ jiāo shànglái.",
    meaning:"Hãy nộp đơn cùng với giấy tờ.",
    examples:[{tag:"Câu gốc",zh:"请把申请表连同证件一起交上来。",py:"Qǐng bǎ shēnqǐngbiǎo liántóng zhèngjiàn yìqǐ jiāo shànglái.",vi:"Hãy nộp đơn cùng với giấy tờ."},{tag:"Ở nhà",zh:"妈妈告诉我：请把申请表连同证件一起交上来。",py:"Māma gàosu wǒ: Qǐng bǎ shēnqǐngbiǎo liántóng zhèngjiàn yìqǐ jiāo shànglái.",vi:"Mẹ bảo tôi: Hãy nộp đơn cùng với giấy tờ."},{tag:"Ở trường",zh:"在学校，请把申请表连同证件一起交上来。",py:"Zài xuéxiào, Qǐng bǎ shēnqǐngbiǎo liántóng zhèngjiàn yìqǐ jiāo shànglái.",vi:"Ở trường, Hãy nộp đơn cùng với giấy tờ."},{tag:"Lúc đi làm",zh:"上班的时候，请把申请表连同证件一起交上来。",py:"Shàngbān de shíhou, Qǐng bǎ shēnqǐngbiǎo liántóng zhèngjiàn yìqǐ jiāo shànglái.",vi:"Lúc đi làm, Hãy nộp đơn cùng với giấy tờ."}],
    explanation:"表示把两个或多个对象作为整体。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_117",
    pattern:"而已",
    title:"而已<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">éryǐ</div>",
    structure:"只是……而已",
    example:"我只是随便问问而已。",
    pinyin:"Wǒ zhǐshì suíbiàn wènwen éryǐ.",
    meaning:"Tôi chỉ hỏi vu vơ thôi.",
    examples:[{tag:"Câu gốc",zh:"我只是随便问问而已。",py:"Wǒ zhǐshì suíbiàn wènwen éryǐ.",vi:"Tôi chỉ hỏi vu vơ thôi."},{tag:"Tình huống khác",zh:"妈妈只是随便问问而已。",py:"Māma zhǐshì suíbiàn wènwen éryǐ.",vi:"Mẹ chỉ hỏi vu vơ thôi."},{tag:"Tình huống khác",zh:"老师只是随便问问而已。",py:"Lǎoshī zhǐshì suíbiàn wènwen éryǐ.",vi:"Thầy chỉ hỏi vu vơ thôi."},{tag:"Tình huống khác",zh:"同学们只是随便问问而已。",py:"Tóngxuémen zhǐshì suíbiàn wènwen éryǐ.",vi:"Các bạn chỉ hỏi vu vơ thôi."}],
    explanation:"表示程度或范围有限，相当于“罢了”。",
    note:"常放在句末。"
  },

  {
    id:"hsk6_118",
    pattern:"罢了",
    title:"罢了<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bàle</div>",
    structure:"只是……罢了",
    example:"我只是提醒你一下罢了。",
    pinyin:"Wǒ zhǐshì tíxǐng nǐ yíxià bàle.",
    meaning:"Tôi chỉ nhắc anh một chút thôi.",
    examples:[{tag:"Câu gốc",zh:"我只是提醒你一下罢了。",py:"Wǒ zhǐshì tíxǐng nǐ yíxià bàle.",vi:"Tôi chỉ nhắc anh một chút thôi."},{tag:"Tình huống khác",zh:"妈妈只是提醒你一下罢了。",py:"Māma zhǐshì tíxǐng nǐ yíxià bàle.",vi:"Mẹ chỉ nhắc anh một chút thôi."},{tag:"Tình huống khác",zh:"老师只是提醒你一下罢了。",py:"Lǎoshī zhǐshì tíxǐng nǐ yíxià bàle.",vi:"Thầy chỉ nhắc anh một chút thôi."},{tag:"Tình huống khác",zh:"同学们只是提醒你一下罢了。",py:"Tóngxuémen zhǐshì tíxǐng nǐ yíxià bàle.",vi:"Các bạn chỉ nhắc anh một chút thôi."}],
    explanation:"表示仅仅如此。",
    note:"比“而已”更书面。"
  },

  {
    id:"hsk6_119",
    pattern:"就是说",
    title:"就是说<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiùshì shuō</div>",
    structure:"就是说 + 解释",
    example:"就是说，我们现在必须重新开始。",
    pinyin:"Jiùshì shuō, wǒmen xiànzài bìxū chóngxīn kāishǐ.",
    meaning:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại.",
    examples:[{tag:"Câu gốc",zh:"就是说，我们现在必须重新开始。",py:"Jiùshì shuō, wǒmen xiànzài bìxū chóngxīn kāishǐ.",vi:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại."},{tag:"Tình huống khác",zh:"就是说，妈妈们现在必须重新开始。",py:"Jiùshì shuō, Māmamen xiànzài bìxū chóngxīn kāishǐ.",vi:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại."},{tag:"Tình huống khác",zh:"就是说，老师们现在必须重新开始。",py:"Jiùshì shuō, Lǎoshīmen xiànzài bìxū chóngxīn kāishǐ.",vi:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại."},{tag:"Tình huống khác",zh:"就是说，同学们们现在必须重新开始。",py:"Jiùshì shuō, Tóngxuémenmen xiànzài bìxū chóngxīn kāishǐ.",vi:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại."},{tag:"Tình huống khác",zh:"就是说，他们现在必须重新开始。",py:"Jiùshì shuō, Tāmen xiànzài bìxū chóngxīn kāishǐ.",vi:"Nói cách khác, bây giờ chúng ta phải bắt đầu lại."}],
    explanation:"用于换一种方式解释前面的内容。",
    note:"口语书面语都可用。"
  },

  {
    id:"hsk6_120",
    pattern:"这就是说",
    title:"这就是说<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhè jiùshì shuō</div>",
    structure:"这就是说 + 结论",
    example:"这就是说，我们的计划还需要调整。",
    pinyin:"Zhè jiùshì shuō, wǒmen de jìhuà hái xūyào tiáozhěng.",
    meaning:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh.",
    examples:[{tag:"Câu gốc",zh:"这就是说，我们的计划还需要调整。",py:"Zhè jiùshì shuō, wǒmen de jìhuà hái xūyào tiáozhěng.",vi:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh."},{tag:"Tình huống khác",zh:"这就是说，妈妈们的计划还需要调整。",py:"Zhè jiùshì shuō, Māmamen de jìhuà hái xūyào tiáozhěng.",vi:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh."},{tag:"Tình huống khác",zh:"这就是说，老师们的计划还需要调整。",py:"Zhè jiùshì shuō, Lǎoshīmen de jìhuà hái xūyào tiáozhěng.",vi:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh."},{tag:"Tình huống khác",zh:"这就是说，同学们们的计划还需要调整。",py:"Zhè jiùshì shuō, Tóngxuémenmen de jìhuà hái xūyào tiáozhěng.",vi:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh."},{tag:"Tình huống khác",zh:"这就是说，他们的计划还需要调整。",py:"Zhè jiùshì shuō, Tāmen de jìhuà hái xūyào tiáozhěng.",vi:"Điều này có nghĩa là kế hoạch của chúng ta vẫn cần điều chỉnh."}],
    explanation:"用于根据前文得出解释或结论。",
    note:"常用于说明。"
  },

  {
    id:"hsk6_121",
    pattern:"不怎么",
    title:"不怎么<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù zěnme</div>",
    structure:"不怎么 + Adj/V",
    example:"这家店的服务不怎么样。",
    pinyin:"Zhè jiā diàn de fúwù bù zěnmeyàng.",
    meaning:"Dịch vụ của cửa hàng này không được tốt lắm.",
    examples:[{tag:"Câu gốc",zh:"这家店的服务不怎么样。",py:"Zhè jiā diàn de fúwù bù zěnmeyàng.",vi:"Dịch vụ của cửa hàng này không được tốt lắm."},{tag:"Ở nhà",zh:"妈妈告诉我：这家店的服务不怎么样。",py:"Māma gàosu wǒ: Zhè jiā diàn de fúwù bù zěnmeyàng.",vi:"Mẹ bảo tôi: Dịch vụ của cửa hàng này không được tốt lắm."},{tag:"Ở trường",zh:"在学校，这家店的服务不怎么样。",py:"Zài xuéxiào, Zhè jiā diàn de fúwù bù zěnmeyàng.",vi:"Ở trường, Dịch vụ của cửa hàng này không được tốt lắm."},{tag:"Lúc đi làm",zh:"上班的时候，这家店的服务不怎么样。",py:"Shàngbān de shíhou, Zhè jiā diàn de fúwù bù zěnmeyàng.",vi:"Lúc đi làm, Dịch vụ của cửa hàng này không được tốt lắm."}],
    explanation:"表示程度不高。",
    note:"常带评价色彩。"
  },

  {
    id:"hsk6_122",
    pattern:"不怎么样",
    title:"不怎么样<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù zěnmeyàng</div>",
    structure:"A + 不怎么样",
    example:"这部电影我觉得不怎么样。",
    pinyin:"Zhè bù diànyǐng wǒ juéde bù zěnmeyàng.",
    meaning:"Tôi thấy bộ phim này không hay lắm.",
    examples:[{tag:"Câu gốc",zh:"这部电影我觉得不怎么样。",py:"Zhè bù diànyǐng wǒ juéde bù zěnmeyàng.",vi:"Tôi thấy bộ phim này không hay lắm."},{tag:"Tình huống khác",zh:"这部电影妈妈觉得不怎么样。",py:"Zhè bù diànyǐng Māma juéde bù zěnmeyàng.",vi:"Mẹ thấy bộ phim này không hay lắm."},{tag:"Tình huống khác",zh:"这部电影老师觉得不怎么样。",py:"Zhè bù diànyǐng Lǎoshī juéde bù zěnmeyàng.",vi:"Thầy thấy bộ phim này không hay lắm."},{tag:"Tình huống khác",zh:"这部电影同学们觉得不怎么样。",py:"Zhè bù diànyǐng Tóngxuémen juéde bù zěnmeyàng.",vi:"Các bạn thấy bộ phim này không hay lắm."},{tag:"Tình huống khác",zh:"这部比赛我觉得不怎么样。",py:"Zhè bù bǐsài wǒ juéde bù zěnmeyàng.",vi:"Tôi thấy bộ trận đấu này không hay lắm."}],
    explanation:"表示评价一般甚至偏低。",
    note:"口语常用。"
  },

  {
    id:"hsk6_123",
    pattern:"本",
    title:"本 + 名词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">běn</div>",
    structure:"本 + 名词",
    example:"我们应该尊重本国的文化传统。",
    pinyin:"Wǒmen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",
    meaning:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình.",
    examples:[{tag:"Câu gốc",zh:"我们应该尊重本国的文化传统。",py:"Wǒmen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",vi:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình."},{tag:"Tình huống khác",zh:"妈妈们应该尊重本国的文化传统。",py:"Māmamen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",vi:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình."},{tag:"Tình huống khác",zh:"老师们应该尊重本国的文化传统。",py:"Lǎoshīmen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",vi:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình."},{tag:"Tình huống khác",zh:"同学们们应该尊重本国的文化传统。",py:"Tóngxuémenmen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",vi:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình."},{tag:"Tình huống khác",zh:"他们应该尊重本国的文化传统。",py:"Tāmen yīnggāi zūnzhòng běnguó de wénhuà chuántǒng.",vi:"Chúng ta nên tôn trọng truyền thống văn hóa của đất nước mình."}],
    explanation:"本表示自己所属的、当前所说的。",
    note:"正式书面语常见。"
  },

  {
    id:"hsk6_124",
    pattern:"此",
    title:"此 + 名词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">cǐ</div>",
    structure:"此 + 名词",
    example:"请按照此规定办理。",
    pinyin:"Qǐng ànzhào cǐ guīdìng bànlǐ.",
    meaning:"Vui lòng xử lý theo quy định này.",
    examples:[{tag:"Câu gốc",zh:"请按照此规定办理。",py:"Qǐng ànzhào cǐ guīdìng bànlǐ.",vi:"Vui lòng xử lý theo quy định này."},{tag:"Ở nhà",zh:"妈妈告诉我：请按照此规定办理。",py:"Māma gàosu wǒ: Qǐng ànzhào cǐ guīdìng bànlǐ.",vi:"Mẹ bảo tôi: Vui lòng xử lý theo quy định này."},{tag:"Ở trường",zh:"在学校，请按照此规定办理。",py:"Zài xuéxiào, Qǐng ànzhào cǐ guīdìng bànlǐ.",vi:"Ở trường, Vui lòng xử lý theo quy định này."},{tag:"Lúc đi làm",zh:"上班的时候，请按照此规定办理。",py:"Shàngbān de shíhou, Qǐng ànzhào cǐ guīdìng bànlǐ.",vi:"Lúc đi làm, Vui lòng xử lý theo quy định này."}],
    explanation:"此相当于“这”，书面语色彩很强。",
    note:"正式通知中常见。"
  },

  {
    id:"hsk6_125",
    pattern:"餐",
    title:"餐 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">cān</div>",
    structure:"一餐 + 食物",
    example:"每天保证三餐正常。",
    pinyin:"Měitiān bǎozhèng sān cān zhèngcháng.",
    meaning:"Mỗi ngày đảm bảo ba bữa ăn đầy đủ.",
    examples:[{tag:"Câu gốc",zh:"每天保证三餐正常。",py:"Měitiān bǎozhèng sān cān zhèngcháng.",vi:"Mỗi ngày đảm bảo ba bữa ăn đầy đủ."},{tag:"Ở nhà",zh:"妈妈告诉我：每天保证三餐正常。",py:"Māma gàosu wǒ: Měitiān bǎozhèng sān cān zhèngcháng.",vi:"Mẹ bảo tôi: Mỗi ngày đảm bảo ba bữa ăn đầy đủ."},{tag:"Ở trường",zh:"在学校，每天保证三餐正常。",py:"Zài xuéxiào, Měitiān bǎozhèng sān cān zhèngcháng.",vi:"Ở trường, Mỗi ngày đảm bảo ba bữa ăn đầy đủ."},{tag:"Lúc đi làm",zh:"上班的时候，每天保证三餐正常。",py:"Shàngbān de shíhou, Měitiān bǎozhèng sān cān zhèngcháng.",vi:"Lúc đi làm, Mỗi ngày đảm bảo ba bữa ăn đầy đủ."}],
    explanation:"餐可作饮食次数的量词。",
    note:"正式表达较常见。"
  },

  {
    id:"hsk6_126",
    pattern:"股",
    title:"股 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">gǔ</div>",
    structure:"一股 + 气味/力量/风",
    example:"空气中飘来一股花香。",
    pinyin:"Kōngqì zhōng piāolái yì gǔ huāxiāng.",
    meaning:"Trong không khí bay đến một luồng hương hoa.",
    examples:[{tag:"Câu gốc",zh:"空气中飘来一股花香。",py:"Kōngqì zhōng piāolái yì gǔ huāxiāng.",vi:"Trong không khí bay đến một luồng hương hoa."},{tag:"Ở nhà",zh:"妈妈告诉我：空气中飘来一股花香。",py:"Māma gàosu wǒ: Kōngqì zhōng piāolái yì gǔ huāxiāng.",vi:"Mẹ bảo tôi: Trong không khí bay đến một luồng hương hoa."},{tag:"Ở trường",zh:"在学校，空气中飘来一股花香。",py:"Zài xuéxiào, Kōngqì zhōng piāolái yì gǔ huāxiāng.",vi:"Ở trường, Trong không khí bay đến một luồng hương hoa."},{tag:"Lúc đi làm",zh:"上班的时候，空气中飘来一股花香。",py:"Shàngbān de shíhou, Kōngqì zhōng piāolái yì gǔ huāxiāng.",vi:"Lúc đi làm, Trong không khí bay đến một luồng hương hoa."}],
    explanation:"股可用于气味、力量、风等抽象或流动事物。",
    note:"常与气味、寒气、力量等搭配。"
  },

  {
    id:"hsk6_127",
    pattern:"集",
    title:"集 + 量词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jí</div>",
    structure:"一集 + 影视节目",
    example:"我昨天看完了这部电视剧的第一集。",
    pinyin:"Wǒ zuótiān kàn wán le zhè bù diànshìjù de dì yī jí.",
    meaning:"Hôm qua tôi đã xem xong tập đầu của bộ phim truyền hình này.",
    examples:[{tag:"Câu gốc",zh:"我昨天看完了这部电视剧的第一集。",py:"Wǒ zuótiān kàn wán le zhè bù diànshìjù de dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu của bộ phim truyền hình này."},{tag:"Tình huống khác",zh:"妈妈昨天看完了这部电视剧的第一集。",py:"Māma zuótiān kàn wán le zhè bù diànshìjù de dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu của bộ phim truyền hình này."},{tag:"Tình huống khác",zh:"老师昨天看完了这部电视剧的第一集。",py:"Lǎoshī zuótiān kàn wán le zhè bù diànshìjù de dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu của bộ phim truyền hình này."},{tag:"Tình huống khác",zh:"同学们昨天看完了这部电视剧的第一集。",py:"Tóngxuémen zuótiān kàn wán le zhè bù diànshìjù de dì yī jí.",vi:"Hôm qua tôi đã xem xong tập đầu của bộ phim truyền hình này."},{tag:"Tình huống khác",zh:"我今天看完了这部电视剧的第一集。",py:"Wǒ Jīntiān kàn wán le zhè bù diànshìjù de dì yī jí.",vi:"Hôm nay tôi đã xem xong tập đầu của bộ phim truyền hình này."}],
    explanation:"集用于连续剧、节目等。",
    note:"常用于影视作品。"
  },

  {
    id:"hsk6_128",
    pattern:"声",
    title:"声 + 动量<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shēng</div>",
    structure:"一声 + 声音动作",
    example:"他大喊一声，大家马上安静下来。",
    pinyin:"Tā dàhǎn yì shēng, dàjiā mǎshàng ānjìng xiàlái.",
    meaning:"Anh ấy hét lên một tiếng, mọi người lập tức im lặng.",
    examples:[{tag:"Câu gốc",zh:"他大喊一声，大家马上安静下来。",py:"Tā dàhǎn yì shēng, dàjiā mǎshàng ānjìng xiàlái.",vi:"Anh ấy hét lên một tiếng, mọi người lập tức im lặng."},{tag:"Ở nhà",zh:"妈妈告诉我：他大喊一声，大家马上安静下来。",py:"Māma gàosu wǒ: Tā dàhǎn yì shēng, dàjiā mǎshàng ānjìng xiàlái.",vi:"Mẹ bảo tôi: Anh ấy hét lên một tiếng, mọi người lập tức im lặng."},{tag:"Ở trường",zh:"在学校，他大喊一声，大家马上安静下来。",py:"Zài xuéxiào, Tā dàhǎn yì shēng, dàjiā mǎshàng ānjìng xiàlái.",vi:"Ở trường, Anh ấy hét lên một tiếng, mọi người lập tức im lặng."},{tag:"Lúc đi làm",zh:"上班的时候，他大喊一声，大家马上安静下来。",py:"Shàngbān de shíhou, Tā dàhǎn yì shēng, dàjiā mǎshàng ānjìng xiàlái.",vi:"Lúc đi làm, Anh ấy hét lên một tiếng, mọi người lập tức im lặng."}],
    explanation:"声表示声音动作的一次。",
    note:"常与喊、叫、叹等搭配。"
  },

  {
    id:"hsk6_129",
    pattern:"趟",
    title:"趟<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tàng</div>",
    structure:"一趟 + 处所/交通",
    example:"我今天还得去银行一趟。",
    pinyin:"Wǒ jīntiān hái děi qù yínháng yí tàng.",
    meaning:"Hôm nay tôi vẫn phải đi ngân hàng một chuyến.",
    examples:[{tag:"Câu gốc",zh:"我今天还得去银行一趟。",py:"Wǒ jīntiān hái děi qù yínháng yí tàng.",vi:"Hôm nay tôi vẫn phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"妈妈今天还得去银行一趟。",py:"Māma jīntiān hái děi qù yínháng yí tàng.",vi:"Hôm nay tôi vẫn phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"老师今天还得去银行一趟。",py:"Lǎoshī jīntiān hái děi qù yínháng yí tàng.",vi:"Hôm nay tôi vẫn phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"同学们今天还得去银行一趟。",py:"Tóngxuémen jīntiān hái děi qù yínháng yí tàng.",vi:"Hôm nay tôi vẫn phải đi ngân hàng một chuyến."},{tag:"Tình huống khác",zh:"我昨天还得去银行一趟。",py:"Wǒ Zuótiān hái děi qù yínháng yí tàng.",vi:"Hôm qua tôi vẫn phải đi ngân hàng một chuyến."}],
    explanation:"趟表示来回的一次行程。",
    note:"常用于去某地。"
  },

  {
    id:"hsk6_130",
    pattern:"上下①",
    title:"上下 + 名词<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shàngxià</div>",
    structure:"上下 + 数量/范围",
    example:"这座楼上下共有二十层。",
    pinyin:"Zhè zuò lóu shàngxià gòng yǒu èrshí céng.",
    meaning:"Tòa nhà này tổng cộng có khoảng 20 tầng.",
    examples:[{tag:"Câu gốc",zh:"这座楼上下共有二十层。",py:"Zhè zuò lóu shàngxià gòng yǒu èrshí céng.",vi:"Tòa nhà này tổng cộng có khoảng 20 tầng."},{tag:"Ở nhà",zh:"妈妈告诉我：这座楼上下共有二十层。",py:"Māma gàosu wǒ: Zhè zuò lóu shàngxià gòng yǒu èrshí céng.",vi:"Mẹ bảo tôi: Tòa nhà này tổng cộng có khoảng 20 tầng."},{tag:"Ở trường",zh:"在学校，这座楼上下共有二十层。",py:"Zài xuéxiào, Zhè zuò lóu shàngxià gòng yǒu èrshí céng.",vi:"Ở trường, Tòa nhà này tổng cộng có khoảng 20 tầng."},{tag:"Lúc đi làm",zh:"上班的时候，这座楼上下共有二十层。",py:"Shàngbān de shíhou, Zhè zuò lóu shàngxià gòng yǒu èrshí céng.",vi:"Lúc đi làm, Tòa nhà này tổng cộng có khoảng 20 tầng."}],
    explanation:"上下可表示上面和下面。",
    note:"具体意义依上下文。"
  },

  {
    id:"hsk6_131",
    pattern:"上下②",
    title:"全家上下<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">quánjiā shàngxià</div>",
    structure:"上下 + 集体",
    example:"公司上下都非常重视这次改革。",
    pinyin:"Gōngsī shàngxià dōu fēicháng zhòngshì zhè cì gǎigé.",
    meaning:"Toàn công ty đều rất coi trọng lần cải cách này.",
    examples:[{tag:"Câu gốc",zh:"公司上下都非常重视这次改革。",py:"Gōngsī shàngxià dōu fēicháng zhòngshì zhè cì gǎigé.",vi:"Toàn công ty đều rất coi trọng lần cải cách này."},{tag:"Ở nhà",zh:"妈妈告诉我：公司上下都非常重视这次改革。",py:"Māma gàosu wǒ: Gōngsī shàngxià dōu fēicháng zhòngshì zhè cì gǎigé.",vi:"Mẹ bảo tôi: Toàn công ty đều rất coi trọng lần cải cách này."},{tag:"Ở trường",zh:"在学校，公司上下都非常重视这次改革。",py:"Zài xuéxiào, Gōngsī shàngxià dōu fēicháng zhòngshì zhè cì gǎigé.",vi:"Ở trường, Toàn công ty đều rất coi trọng lần cải cách này."},{tag:"Lúc đi làm",zh:"上班的时候，公司上下都非常重视这次改革。",py:"Shàngbān de shíhou, Gōngsī shàngxià dōu fēicháng zhòngshì zhè cì gǎigé.",vi:"Lúc đi làm, Toàn công ty đều rất coi trọng lần cải cách này."}],
    explanation:"上下表示整个集体中的各层级人员。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_132",
    pattern:"数量+上下",
    title:"数量 + 上下<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shùliàng + shàngxià</div>",
    structure:"年龄/数量 + 上下",
    example:"参加者大多在三十岁上下。",
    pinyin:"Cānjiāzhě dàduō zài sānshí suì shàngxià.",
    meaning:"Phần lớn người tham gia khoảng 30 tuổi.",
    examples:[{tag:"Câu gốc",zh:"参加者大多在三十岁上下。",py:"Cānjiāzhě dàduō zài sānshí suì shàngxià.",vi:"Phần lớn người tham gia khoảng 30 tuổi."},{tag:"Ở nhà",zh:"妈妈告诉我：参加者大多在三十岁上下。",py:"Māma gàosu wǒ: Cānjiāzhě dàduō zài sānshí suì shàngxià.",vi:"Mẹ bảo tôi: Phần lớn người tham gia khoảng 30 tuổi."},{tag:"Ở trường",zh:"在学校，参加者大多在三十岁上下。",py:"Zài xuéxiào, Cānjiāzhě dàduō zài sānshí suì shàngxià.",vi:"Ở trường, Phần lớn người tham gia khoảng 30 tuổi."},{tag:"Lúc đi làm",zh:"上班的时候，参加者大多在三十岁上下。",py:"Shàngbān de shíhou, Cānjiāzhě dàduō zài sānshí suì shàngxià.",vi:"Lúc đi làm, Phần lớn người tham gia khoảng 30 tuổi."}],
    explanation:"表示大约的数量。",
    note:"表示概数。"
  },

  {
    id:"hsk6_133",
    pattern:"不相上下",
    title:"不相上下<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù xiāng shàngxià</div>",
    structure:"A和B不相上下",
    example:"两队实力不相上下。",
    pinyin:"Liǎng duì shílì bù xiāng shàngxià.",
    meaning:"Thực lực của hai đội ngang nhau.",
    examples:[{tag:"Câu gốc",zh:"两队实力不相上下。",py:"Liǎng duì shílì bù xiāng shàngxià.",vi:"Thực lực của hai đội ngang nhau."},{tag:"Ở nhà",zh:"妈妈告诉我：两队实力不相上下。",py:"Māma gàosu wǒ: Liǎng duì shílì bù xiāng shàngxià.",vi:"Mẹ bảo tôi: Thực lực của hai đội ngang nhau."},{tag:"Ở trường",zh:"在学校，两队实力不相上下。",py:"Zài xuéxiào, Liǎng duì shílì bù xiāng shàngxià.",vi:"Ở trường, Thực lực của hai đội ngang nhau."},{tag:"Lúc đi làm",zh:"上班的时候，两队实力不相上下。",py:"Shàngbān de shíhou, Liǎng duì shílì bù xiāng shàngxià.",vi:"Lúc đi làm, Thực lực của hai đội ngang nhau."}],
    explanation:"表示双方水平相当。",
    note:"固定成语。"
  },

  {
    id:"hsk6_134",
    pattern:"难分上下",
    title:"难分上下<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">nán fēn shàngxià</div>",
    structure:"A、B难分上下",
    example:"两位选手表现出色，难分上下。",
    pinyin:"Liǎng wèi xuǎnshǒu biǎoxiàn chūsè, nán fēn shàngxià.",
    meaning:"Hai tuyển thủ thể hiện xuất sắc, khó phân cao thấp.",
    examples:[{tag:"Câu gốc",zh:"两位选手表现出色，难分上下。",py:"Liǎng wèi xuǎnshǒu biǎoxiàn chūsè, nán fēn shàngxià.",vi:"Hai tuyển thủ thể hiện xuất sắc, khó phân cao thấp."},{tag:"Ở nhà",zh:"妈妈告诉我：两位选手表现出色，难分上下。",py:"Māma gàosu wǒ: Liǎng wèi xuǎnshǒu biǎoxiàn chūsè, nán fēn shàngxià.",vi:"Mẹ bảo tôi: Hai tuyển thủ thể hiện xuất sắc, khó phân cao thấp."},{tag:"Ở trường",zh:"在学校，两位选手表现出色，难分上下。",py:"Zài xuéxiào, Liǎng wèi xuǎnshǒu biǎoxiàn chūsè, nán fēn shàngxià.",vi:"Ở trường, Hai tuyển thủ thể hiện xuất sắc, khó phân cao thấp."},{tag:"Lúc đi làm",zh:"上班的时候，两位选手表现出色，难分上下。",py:"Shàngbān de shíhou, Liǎng wèi xuǎnshǒu biǎoxiàn chūsè, nán fēn shàngxià.",vi:"Lúc đi làm, Hai tuyển thủ thể hiện xuất sắc, khó phân cao thấp."}],
    explanation:"表示双方水平很接近。",
    note:"书面表达。"
  },

  {
    id:"hsk6_135",
    pattern:"尽",
    title:"尽 + 动词/数量<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jìn</div>",
    structure:"尽 + V",
    example:"大家尽快完成任务。",
    pinyin:"Dàjiā jǐnkuài wánchéng rènwu.",
    meaning:"Mọi người hãy hoàn thành nhiệm vụ sớm nhất có thể.",
    examples:[{tag:"Câu gốc",zh:"大家尽快完成任务。",py:"Dàjiā jǐnkuài wánchéng rènwu.",vi:"Mọi người hãy hoàn thành nhiệm vụ sớm nhất có thể."},{tag:"Ở nhà",zh:"妈妈告诉我：大家尽快完成任务。",py:"Māma gàosu wǒ: Dàjiā jǐnkuài wánchéng rènwu.",vi:"Mẹ bảo tôi: Mọi người hãy hoàn thành nhiệm vụ sớm nhất có thể."},{tag:"Ở trường",zh:"在学校，大家尽快完成任务。",py:"Zài xuéxiào, Dàjiā jǐnkuài wánchéng rènwu.",vi:"Ở trường, Mọi người hãy hoàn thành nhiệm vụ sớm nhất có thể."},{tag:"Lúc đi làm",zh:"上班的时候，大家尽快完成任务。",py:"Shàngbān de shíhou, Dàjiā jǐnkuài wánchéng rènwu.",vi:"Lúc đi làm, Mọi người hãy hoàn thành nhiệm vụ sớm nhất có thể."}],
    explanation:"尽可表示最大限度地。",
    note:"常与快、力等搭配。"
  },

  {
    id:"hsk6_136",
    pattern:"净①",
    title:"净 + V<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jìng</div>",
    structure:"净 + 动词",
    example:"你净说些没用的话。",
    pinyin:"Nǐ jìng shuō xiē méi yòng de huà.",
    meaning:"Anh toàn nói những chuyện vô ích.",
    examples:[{tag:"Câu gốc",zh:"你净说些没用的话。",py:"Nǐ jìng shuō xiē méi yòng de huà.",vi:"Anh toàn nói những chuyện vô ích."},{tag:"Ở nhà",zh:"妈妈告诉我：你净说些没用的话。",py:"Māma gàosu wǒ: Nǐ jìng shuō xiē méi yòng de huà.",vi:"Mẹ bảo tôi: Anh toàn nói những chuyện vô ích."},{tag:"Ở trường",zh:"在学校，你净说些没用的话。",py:"Zài xuéxiào, Nǐ jìng shuō xiē méi yòng de huà.",vi:"Ở trường, Anh toàn nói những chuyện vô ích."},{tag:"Lúc đi làm",zh:"上班的时候，你净说些没用的话。",py:"Shàngbān de shíhou, Nǐ jìng shuō xiē méi yòng de huà.",vi:"Lúc đi làm, Anh toàn nói những chuyện vô ích."}],
    explanation:"表示只做某事，常含责备。",
    note:"口语。"
  },

  {
    id:"hsk6_137",
    pattern:"一齐",
    title:"一齐<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yìqí</div>",
    structure:"一齐 + 动词",
    example:"听到消息后，大家一齐站了起来。",
    pinyin:"Tīngdào xiāoxi hòu, dàjiā yìqí zhàn le qǐlái.",
    meaning:"Sau khi nghe tin, mọi người đồng loạt đứng dậy.",
    examples:[{tag:"Câu gốc",zh:"听到消息后，大家一齐站了起来。",py:"Tīngdào xiāoxi hòu, dàjiā yìqí zhàn le qǐlái.",vi:"Sau khi nghe tin, mọi người đồng loạt đứng dậy."},{tag:"Ở nhà",zh:"妈妈告诉我：听到消息后，大家一齐站了起来。",py:"Māma gàosu wǒ: Tīngdào xiāoxi hòu, dàjiā yìqí zhàn le qǐlái.",vi:"Mẹ bảo tôi: Sau khi nghe tin, mọi người đồng loạt đứng dậy."},{tag:"Ở trường",zh:"在学校，听到消息后，大家一齐站了起来。",py:"Zài xuéxiào, Tīngdào xiāoxi hòu, dàjiā yìqí zhàn le qǐlái.",vi:"Ở trường, Sau khi nghe tin, mọi người đồng loạt đứng dậy."},{tag:"Lúc đi làm",zh:"上班的时候，听到消息后，大家一齐站了起来。",py:"Shàngbān de shíhou, Tīngdào xiāoxi hòu, dàjiā yìqí zhàn le qǐlái.",vi:"Lúc đi làm, Sau khi nghe tin, mọi người đồng loạt đứng dậy."}],
    explanation:"一齐表示同时。",
    note:"比“一起”更强调同时发生。"
  },

  {
    id:"hsk6_138",
    pattern:"时时",
    title:"时时<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shíshí</div>",
    structure:"时时 + V",
    example:"他时时提醒自己不要忘记目标。",
    pinyin:"Tā shíshí tíxǐng zìjǐ bú yào wàngjì mùbiāo.",
    meaning:"Anh ấy luôn nhắc bản thân không được quên mục tiêu.",
    examples:[{tag:"Câu gốc",zh:"他时时提醒自己不要忘记目标。",py:"Tā shíshí tíxǐng zìjǐ bú yào wàngjì mùbiāo.",vi:"Anh ấy luôn nhắc bản thân không được quên mục tiêu."},{tag:"Ở nhà",zh:"妈妈告诉我：他时时提醒自己不要忘记目标。",py:"Māma gàosu wǒ: Tā shíshí tíxǐng zìjǐ bú yào wàngjì mùbiāo.",vi:"Mẹ bảo tôi: Anh ấy luôn nhắc bản thân không được quên mục tiêu."},{tag:"Ở trường",zh:"在学校，他时时提醒自己不要忘记目标。",py:"Zài xuéxiào, Tā shíshí tíxǐng zìjǐ bú yào wàngjì mùbiāo.",vi:"Ở trường, Anh ấy luôn nhắc bản thân không được quên mục tiêu."},{tag:"Lúc đi làm",zh:"上班的时候，他时时提醒自己不要忘记目标。",py:"Shàngbān de shíhou, Tā shíshí tíxǐng zìjǐ bú yào wàngjì mùbiāo.",vi:"Lúc đi làm, Anh ấy luôn nhắc bản thân không được quên mục tiêu."}],
    explanation:"时时表示经常、不断。",
    note:"书面语色彩较强。"
  },

  {
    id:"hsk6_139",
    pattern:"早晚",
    title:"早晚 + 会/要",
    structure:"早晚 + V",
    example:"只要坚持下去，早晚会成功。",
    pinyin:"Zhǐyào jiānchí xiàqù, zǎowǎn huì chénggōng.",
    meaning:"Chỉ cần kiên trì, sớm muộn cũng sẽ thành công.",
    examples:[{tag:"Câu gốc",zh:"只要坚持下去，早晚会成功。",py:"Zhǐyào jiānchí xiàqù, zǎowǎn huì chénggōng.",vi:"Chỉ cần kiên trì, sớm muộn cũng sẽ thành công."},{tag:"Ở nhà",zh:"妈妈告诉我：只要坚持下去，早晚会成功。",py:"Māma gàosu wǒ: Zhǐyào jiānchí xiàqù, zǎowǎn huì chénggōng.",vi:"Mẹ bảo tôi: Chỉ cần kiên trì, sớm muộn cũng sẽ thành công."},{tag:"Ở trường",zh:"在学校，只要坚持下去，早晚会成功。",py:"Zài xuéxiào, Zhǐyào jiānchí xiàqù, zǎowǎn huì chénggōng.",vi:"Ở trường, Chỉ cần kiên trì, sớm muộn cũng sẽ thành công."},{tag:"Lúc đi làm",zh:"上班的时候，只要坚持下去，早晚会成功。",py:"Shàngbān de shíhou, Zhǐyào jiānchí xiàqù, zǎowǎn huì chénggōng.",vi:"Lúc đi làm, Chỉ cần kiên trì, sớm muộn cũng sẽ thành công."}],
    explanation:"早晚表示迟早。",
    note:"常表示说话人的判断。"
  },

  {
    id:"hsk6_140",
    pattern:"便",
    title:"便<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">biàn</div>",
    structure:"A，便B",
    example:"他一到家便开始准备晚饭。",
    pinyin:"Tā yí dào jiā biàn kāishǐ zhǔnbèi wǎnfàn.",
    meaning:"Vừa về đến nhà anh ấy liền bắt đầu chuẩn bị bữa tối.",
    examples:[{tag:"Câu gốc",zh:"他一到家便开始准备晚饭。",py:"Tā yí dào jiā biàn kāishǐ zhǔnbèi wǎnfàn.",vi:"Vừa về đến nhà anh ấy liền bắt đầu chuẩn bị bữa tối."},{tag:"Tình huống khác",zh:"她一到家便开始准备晚饭。",py:"Tā yí dào jiā biàn kāishǐ zhǔnbèi wǎnfàn.",vi:"Vừa về đến nhà anh ấy liền bắt đầu chuẩn bị bữa tối."},{tag:"Tình huống khác",zh:"他一到家便开始准备晚面。",py:"Tā yí dào jiā biàn kāishǐ zhǔnbèi wǎnmiàn.",vi:"Vừa về đến nhà anh ấy liền bắt đầu chuẩn bị bữa tối."},{tag:"Tình huống khác",zh:"他一到学校便开始准备晚饭。",py:"Tā yí dào xuéxiào biàn kāishǐ zhǔnbèi wǎnfàn.",vi:"Vừa về đến trường anh ấy liền bắt đầu chuẩn bị bữa tối."}],
    explanation:"便表示紧接着发生，相当于“就”。",
    note:"书面语较常见。"
  },

  {
    id:"hsk6_141",
    pattern:"恰恰",
    title:"恰恰<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">qiàqià</div>",
    structure:"恰恰 + V/Adj",
    example:"真正的问题恰恰在这里。",
    pinyin:"Zhēnzhèng de wèntí qiàqià zài zhèlǐ.",
    meaning:"Vấn đề thực sự chính là ở đây.",
    examples:[{tag:"Câu gốc",zh:"真正的问题恰恰在这里。",py:"Zhēnzhèng de wèntí qiàqià zài zhèlǐ.",vi:"Vấn đề thực sự chính là ở đây."},{tag:"Ở nhà",zh:"妈妈告诉我：真正的问题恰恰在这里。",py:"Māma gàosu wǒ: Zhēnzhèng de wèntí qiàqià zài zhèlǐ.",vi:"Mẹ bảo tôi: Vấn đề thực sự chính là ở đây."},{tag:"Ở trường",zh:"在学校，真正的问题恰恰在这里。",py:"Zài xuéxiào, Zhēnzhèng de wèntí qiàqià zài zhèlǐ.",vi:"Ở trường, Vấn đề thực sự chính là ở đây."},{tag:"Lúc đi làm",zh:"上班的时候，真正的问题恰恰在这里。",py:"Shàngbān de shíhou, Zhēnzhèng de wèntí qiàqià zài zhèlǐ.",vi:"Lúc đi làm, Vấn đề thực sự chính là ở đây."}],
    explanation:"恰恰表示正好、正是，常用于强调。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_142",
    pattern:"果然",
    title:"果然<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">guǒrán</div>",
    structure:"果然 + 结果",
    example:"他果然没有让我失望。",
    pinyin:"Tā guǒrán méiyǒu ràng wǒ shīwàng.",
    meaning:"Quả nhiên anh ấy không làm tôi thất vọng.",
    examples:[{tag:"Câu gốc",zh:"他果然没有让我失望。",py:"Tā guǒrán méiyǒu ràng wǒ shīwàng.",vi:"Quả nhiên anh ấy không làm tôi thất vọng."},{tag:"Tình huống khác",zh:"他果然没有让妈妈失望。",py:"Tā guǒrán méiyǒu ràng Māma shīwàng.",vi:"Quả nhiên anh ấy không làm tôi thất vọng."},{tag:"Tình huống khác",zh:"他果然没有让老师失望。",py:"Tā guǒrán méiyǒu ràng Lǎoshī shīwàng.",vi:"Quả nhiên anh ấy không làm tôi thất vọng."},{tag:"Tình huống khác",zh:"他果然没有让同学们失望。",py:"Tā guǒrán méiyǒu ràng Tóngxuémen shīwàng.",vi:"Quả nhiên anh ấy không làm tôi thất vọng."},{tag:"Tình huống khác",zh:"她果然没有让我失望。",py:"Tā guǒrán méiyǒu ràng wǒ shīwàng.",vi:"Quả nhiên anh ấy không làm tôi thất vọng."}],
    explanation:"果然表示结果与预想一致。",
    note:"常与之前的预测呼应。"
  },

  {
    id:"hsk6_143",
    pattern:"反而",
    title:"反而<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fǎn'ér</div>",
    structure:"A，反而B",
    example:"天气虽然很冷，他反而觉得很舒服。",
    pinyin:"Tiānqì suīrán hěn lěng, tā fǎn'ér juéde hěn shūfu.",
    meaning:"Mặc dù thời tiết rất lạnh, anh ấy ngược lại cảm thấy rất dễ chịu.",
    examples:[{tag:"Câu gốc",zh:"天气虽然很冷，他反而觉得很舒服。",py:"Tiānqì suīrán hěn lěng, tā fǎn'ér juéde hěn shūfu.",vi:"Mặc dù thời tiết rất lạnh, anh ấy ngược lại cảm thấy rất dễ chịu."},{tag:"Ở nhà",zh:"妈妈告诉我：天气虽然很冷，他反而觉得很舒服。",py:"Māma gàosu wǒ: Tiānqì suīrán hěn lěng, tā fǎn'ér juéde hěn shūfu.",vi:"Mẹ bảo tôi: Mặc dù thời tiết rất lạnh, anh ấy ngược lại cảm thấy rất dễ chịu."},{tag:"Ở trường",zh:"在学校，天气虽然很冷，他反而觉得很舒服。",py:"Zài xuéxiào, Tiānqì suīrán hěn lěng, tā fǎn'ér juéde hěn shūfu.",vi:"Ở trường, Mặc dù thời tiết rất lạnh, anh ấy ngược lại cảm thấy rất dễ chịu."},{tag:"Lúc đi làm",zh:"上班的时候，天气虽然很冷，他反而觉得很舒服。",py:"Shàngbān de shíhou, Tiānqì suīrán hěn lěng, tā fǎn'ér juéde hěn shūfu.",vi:"Lúc đi làm, Mặc dù thời tiết rất lạnh, anh ấy ngược lại cảm thấy rất dễ chịu."}],
    explanation:"表示结果与预期相反。",
    note:"常用于转折。"
  },

  {
    id:"hsk6_144",
    pattern:"简直",
    title:"简直<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiǎnzhí</div>",
    structure:"简直 + Adj/V",
    example:"这里的风景简直太美了。",
    pinyin:"Zhèlǐ de fēngjǐng jiǎnzhí tài měi le.",
    meaning:"Phong cảnh ở đây đẹp quả thực quá mức.",
    examples:[{tag:"Câu gốc",zh:"这里的风景简直太美了。",py:"Zhèlǐ de fēngjǐng jiǎnzhí tài měi le.",vi:"Phong cảnh ở đây đẹp quả thực quá mức."},{tag:"Ở nhà",zh:"妈妈告诉我：这里的风景简直太美了。",py:"Māma gàosu wǒ: Zhèlǐ de fēngjǐng jiǎnzhí tài měi le.",vi:"Mẹ bảo tôi: Phong cảnh ở đây đẹp quả thực quá mức."},{tag:"Ở trường",zh:"在学校，这里的风景简直太美了。",py:"Zài xuéxiào, Zhèlǐ de fēngjǐng jiǎnzhí tài měi le.",vi:"Ở trường, Phong cảnh ở đây đẹp quả thực quá mức."},{tag:"Lúc đi làm",zh:"上班的时候，这里的风景简直太美了。",py:"Shàngbān de shíhou, Zhèlǐ de fēngjǐng jiǎnzhí tài měi le.",vi:"Lúc đi làm, Phong cảnh ở đây đẹp quả thực quá mức."}],
    explanation:"简直表示程度高到接近某种极端。",
    note:"常带感叹。"
  },

  {
    id:"hsk6_145",
    pattern:"绝对",
    title:"绝对<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">juéduì</div>",
    structure:"绝对 + V/Adj",
    example:"这绝对是一个正确的决定。",
    pinyin:"Zhè juéduì shì yí ge zhèngquè de juédìng.",
    meaning:"Đây chắc chắn là một quyết định đúng đắn.",
    examples:[{tag:"Câu gốc",zh:"这绝对是一个正确的决定。",py:"Zhè juéduì shì yí ge zhèngquè de juédìng.",vi:"Đây chắc chắn là một quyết định đúng đắn."},{tag:"Ở nhà",zh:"妈妈告诉我：这绝对是一个正确的决定。",py:"Māma gàosu wǒ: Zhè juéduì shì yí ge zhèngquè de juédìng.",vi:"Mẹ bảo tôi: Đây chắc chắn là một quyết định đúng đắn."},{tag:"Ở trường",zh:"在学校，这绝对是一个正确的决定。",py:"Zài xuéxiào, Zhè juéduì shì yí ge zhèngquè de juédìng.",vi:"Ở trường, Đây chắc chắn là một quyết định đúng đắn."},{tag:"Lúc đi làm",zh:"上班的时候，这绝对是一个正确的决定。",py:"Shàngbān de shíhou, Zhè juéduì shì yí ge zhèngquè de juédìng.",vi:"Lúc đi làm, Đây chắc chắn là một quyết định đúng đắn."}],
    explanation:"绝对表示十分肯定。",
    note:"语气很强。"
  },

  {
    id:"hsk6_146",
    pattern:"的确",
    title:"的确<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">díquè</div>",
    structure:"的确 + V/Adj",
    example:"这个问题的确值得认真考虑。",
    pinyin:"Zhège wèntí díquè zhíde rènzhēn kǎolǜ.",
    meaning:"Vấn đề này quả thực đáng được cân nhắc nghiêm túc.",
    examples:[{tag:"Câu gốc",zh:"这个问题的确值得认真考虑。",py:"Zhège wèntí díquè zhíde rènzhēn kǎolǜ.",vi:"Vấn đề này quả thực đáng được cân nhắc nghiêm túc."},{tag:"Ở nhà",zh:"妈妈告诉我：这个问题的确值得认真考虑。",py:"Māma gàosu wǒ: Zhège wèntí díquè zhíde rènzhēn kǎolǜ.",vi:"Mẹ bảo tôi: Vấn đề này quả thực đáng được cân nhắc nghiêm túc."},{tag:"Ở trường",zh:"在学校，这个问题的确值得认真考虑。",py:"Zài xuéxiào, Zhège wèntí díquè zhíde rènzhēn kǎolǜ.",vi:"Ở trường, Vấn đề này quả thực đáng được cân nhắc nghiêm túc."},{tag:"Lúc đi làm",zh:"上班的时候，这个问题的确值得认真考虑。",py:"Shàngbān de shíhou, Zhège wèntí díquè zhíde rènzhēn kǎolǜ.",vi:"Lúc đi làm, Vấn đề này quả thực đáng được cân nhắc nghiêm túc."}],
    explanation:"的确表示确实如此。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_147",
    pattern:"自从……以来",
    title:"自从……以来<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zìcóng……yǐlái</div>",
    structure:"自从 A 以来，B",
    example:"自从毕业以来，我们一直保持联系。",
    pinyin:"Zìcóng bìyè yǐlái, wǒmen yìzhí bǎochí liánxì.",
    meaning:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc.",
    examples:[{tag:"Câu gốc",zh:"自从毕业以来，我们一直保持联系。",py:"Zìcóng bìyè yǐlái, wǒmen yìzhí bǎochí liánxì.",vi:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc."},{tag:"Tình huống khác",zh:"自从毕业以来，妈妈们一直保持联系。",py:"Zìcóng bìyè yǐlái, Māmamen yìzhí bǎochí liánxì.",vi:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc."},{tag:"Tình huống khác",zh:"自从毕业以来，老师们一直保持联系。",py:"Zìcóng bìyè yǐlái, Lǎoshīmen yìzhí bǎochí liánxì.",vi:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc."},{tag:"Tình huống khác",zh:"自从毕业以来，同学们们一直保持联系。",py:"Zìcóng bìyè yǐlái, Tóngxuémenmen yìzhí bǎochí liánxì.",vi:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc."},{tag:"Tình huống khác",zh:"自从毕业以来，他们一直保持联系。",py:"Zìcóng bìyè yǐlái, Tāmen yìzhí bǎochí liánxì.",vi:"Kể từ khi tốt nghiệp, chúng tôi vẫn giữ liên lạc."}],
    explanation:"表示从过去某个时间一直到现在。",
    note:"后项常用一直、始终等。"
  },

  {
    id:"hsk6_148",
    pattern:"从……来看",
    title:"从……来看<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">cóng……lái kàn</div>",
    structure:"从 A 来看，B",
    example:"从目前的情况来看，计划需要调整。",
    pinyin:"Cóng mùqián de qíngkuàng lái kàn, jìhuà xūyào tiáozhěng.",
    meaning:"Xét tình hình hiện tại thì kế hoạch cần được điều chỉnh.",
    examples:[{tag:"Câu gốc",zh:"从目前的情况来看，计划需要调整。",py:"Cóng mùqián de qíngkuàng lái kàn, jìhuà xūyào tiáozhěng.",vi:"Xét tình hình hiện tại thì kế hoạch cần được điều chỉnh."},{tag:"Ở nhà",zh:"妈妈告诉我：从目前的情况来看，计划需要调整。",py:"Māma gàosu wǒ: Cóng mùqián de qíngkuàng lái kàn, jìhuà xūyào tiáozhěng.",vi:"Mẹ bảo tôi: Xét tình hình hiện tại thì kế hoạch cần được điều chỉnh."},{tag:"Ở trường",zh:"在学校，从目前的情况来看，计划需要调整。",py:"Zài xuéxiào, Cóng mùqián de qíngkuàng lái kàn, jìhuà xūyào tiáozhěng.",vi:"Ở trường, Xét tình hình hiện tại thì kế hoạch cần được điều chỉnh."},{tag:"Lúc đi làm",zh:"上班的时候，从目前的情况来看，计划需要调整。",py:"Shàngbān de shíhou, Cóng mùqián de qíngkuàng lái kàn, jìhuà xūyào tiáozhěng.",vi:"Lúc đi làm, Xét tình hình hiện tại thì kế hoạch cần được điều chỉnh."}],
    explanation:"表示从某个角度进行判断。",
    note:"书面语常用。"
  },

  {
    id:"hsk6_149",
    pattern:"由……组成",
    title:"由……组成<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yóu……zǔchéng</div>",
    structure:"由 A 组成",
    example:"这个团队由来自不同国家的成员组成。",
    pinyin:"Zhège tuánduì yóu láizì bùtóng guójiā de chéngyuán zǔchéng.",
    meaning:"Đội ngũ này được tạo thành từ các thành viên đến từ nhiều quốc gia.",
    examples:[{tag:"Câu gốc",zh:"这个团队由来自不同国家的成员组成。",py:"Zhège tuánduì yóu láizì bùtóng guójiā de chéngyuán zǔchéng.",vi:"Đội ngũ này được tạo thành từ các thành viên đến từ nhiều quốc gia."},{tag:"Ở nhà",zh:"妈妈告诉我：这个团队由来自不同国家的成员组成。",py:"Māma gàosu wǒ: Zhège tuánduì yóu láizì bùtóng guójiā de chéngyuán zǔchéng.",vi:"Mẹ bảo tôi: Đội ngũ này được tạo thành từ các thành viên đến từ nhiều quốc gia."},{tag:"Ở trường",zh:"在学校，这个团队由来自不同国家的成员组成。",py:"Zài xuéxiào, Zhège tuánduì yóu láizì bùtóng guójiā de chéngyuán zǔchéng.",vi:"Ở trường, Đội ngũ này được tạo thành từ các thành viên đến từ nhiều quốc gia."},{tag:"Lúc đi làm",zh:"上班的时候，这个团队由来自不同国家的成员组成。",py:"Shàngbān de shíhou, Zhège tuánduì yóu láizì bùtóng guójiā de chéngyuán zǔchéng.",vi:"Lúc đi làm, Đội ngũ này được tạo thành từ các thành viên đến từ nhiều quốc gia."}],
    explanation:"表示整体由若干部分构成。",
    note:"常用于说明结构。"
  },

  {
    id:"hsk6_150",
    pattern:"不管怎样说",
    title:"不管怎样说<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùguǎn zěnyàng shuō</div>",
    structure:"不管怎样说，……",
    example:"不管怎样说，我们都应该先听听他的意见。",
    pinyin:"Bùguǎn zěnyàng shuō, wǒmen dōu yīnggāi xiān tīngting tā de yìjiàn.",
    meaning:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước.",
    examples:[{tag:"Câu gốc",zh:"不管怎样说，我们都应该先听听他的意见。",py:"Bùguǎn zěnyàng shuō, wǒmen dōu yīnggāi xiān tīngting tā de yìjiàn.",vi:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước."},{tag:"Tình huống khác",zh:"不管怎样说，妈妈们都应该先听听他的意见。",py:"Bùguǎn zěnyàng shuō, Māmamen dōu yīnggāi xiān tīngting tā de yìjiàn.",vi:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước."},{tag:"Tình huống khác",zh:"不管怎样说，老师们都应该先听听他的意见。",py:"Bùguǎn zěnyàng shuō, Lǎoshīmen dōu yīnggāi xiān tīngting tā de yìjiàn.",vi:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước."},{tag:"Tình huống khác",zh:"不管怎样说，同学们们都应该先听听他的意见。",py:"Bùguǎn zěnyàng shuō, Tóngxuémenmen dōu yīnggāi xiān tīngting tā de yìjiàn.",vi:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước."},{tag:"Tình huống khác",zh:"不管怎样说，我们都应该先听听她的意见。",py:"Bùguǎn zěnyàng shuō, wǒmen dōu yīnggāi xiān tīngting Tā de yìjiàn.",vi:"Dù nói thế nào đi nữa, chúng ta cũng nên nghe ý kiến của anh ấy trước."}],
    explanation:"表示无论从什么角度说，后项结论都成立。",
    note:"口语书面语均可。"
  },

  {
    id:"hsk6_151",
    pattern:"真有你的",
    title:"真有你的<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhēn yǒu nǐ de</div>",
    structure:"真有 + 人 + 的",
    example:"这么难的问题你都解决了，真有你的！",
    pinyin:"Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",
    meaning:"Vấn đề khó thế mà anh cũng giải quyết được, anh giỏi thật đấy!",
    examples:[{tag:"Câu gốc",zh:"这么难的问题你都解决了，真有你的！",py:"Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Vấn đề khó thế mà anh cũng giải quyết được, anh giỏi thật đấy!"},{tag:"Ở nhà",zh:"妈妈告诉我：这么难的问题你都解决了，真有你的！",py:"Māma gàosu wǒ: Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Mẹ bảo tôi: Vấn đề khó thế mà anh cũng giải quyết được, anh giỏi thật đấy!"},{tag:"Ở trường",zh:"在学校，这么难的问题你都解决了，真有你的！",py:"Zài xuéxiào, Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Ở trường, Vấn đề khó thế mà anh cũng giải quyết được, anh giỏi thật đấy!"},{tag:"Lúc đi làm",zh:"上班的时候，这么难的问题你都解决了，真有你的！",py:"Shàngbān de shíhou, Zhème nán de wèntí nǐ dōu jiějué le, zhēn yǒu nǐ de!",vi:"Lúc đi làm, Vấn đề khó thế mà anh cũng giải quyết được, anh giỏi thật đấy!"}],
    explanation:"表示佩服、惊讶，也可表示讽刺。",
    note:"语气决定感情色彩。"
  },

  {
    id:"hsk6_152",
    pattern:"X什么X",
    title:"X什么X<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X shénme X</div>",
    structure:"V + 什么 + V",
    example:"急什么急，时间还早呢。",
    pinyin:"Jí shénme jí, shíjiān hái zǎo ne.",
    meaning:"Vội gì mà vội, vẫn còn sớm mà.",
    examples:[{tag:"Câu gốc",zh:"急什么急，时间还早呢。",py:"Jí shénme jí, shíjiān hái zǎo ne.",vi:"Vội gì mà vội, vẫn còn sớm mà."},{tag:"Ở nhà",zh:"妈妈告诉我：急什么急，时间还早呢。",py:"Māma gàosu wǒ: Jí shénme jí, shíjiān hái zǎo ne.",vi:"Mẹ bảo tôi: Vội gì mà vội, vẫn còn sớm mà."},{tag:"Ở trường",zh:"在学校，急什么急，时间还早呢。",py:"Zài xuéxiào, Jí shénme jí, shíjiān hái zǎo ne.",vi:"Ở trường, Vội gì mà vội, vẫn còn sớm mà."},{tag:"Lúc đi làm",zh:"上班的时候，急什么急，时间还早呢。",py:"Shàngbān de shíhou, Jí shénme jí, shíjiān hái zǎo ne.",vi:"Lúc đi làm, Vội gì mà vội, vẫn còn sớm mà."}],
    explanation:"表示责怪或劝阻对方不要做某事。",
    note:"口语固定格式。"
  },

  {
    id:"hsk6_153",
    pattern:"什么X不X的",
    title:"什么X不X的<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shénme X bù X de</div>",
    structure:"什么 + X不X + 的",
    example:"什么喜欢不喜欢的，先把工作做好再说。",
    pinyin:"Shénme xǐhuān bù xǐhuān de, xiān bǎ gōngzuò zuò hǎo zài shuō.",
    meaning:"Thích hay không thích gì chứ, cứ làm tốt công việc trước rồi tính.",
    examples:[{tag:"Câu gốc",zh:"什么喜欢不喜欢的，先把工作做好再说。",py:"Shénme xǐhuān bù xǐhuān de, xiān bǎ gōngzuò zuò hǎo zài shuō.",vi:"Thích hay không thích gì chứ, cứ làm tốt công việc trước rồi tính."},{tag:"Ở nhà",zh:"妈妈告诉我：什么喜欢不喜欢的，先把工作做好再说。",py:"Māma gàosu wǒ: Shénme xǐhuān bù xǐhuān de, xiān bǎ gōngzuò zuò hǎo zài shuō.",vi:"Mẹ bảo tôi: Thích hay không thích gì chứ, cứ làm tốt công việc trước rồi tính."},{tag:"Ở trường",zh:"在学校，什么喜欢不喜欢的，先把工作做好再说。",py:"Zài xuéxiào, Shénme xǐhuān bù xǐhuān de, xiān bǎ gōngzuò zuò hǎo zài shuō.",vi:"Ở trường, Thích hay không thích gì chứ, cứ làm tốt công việc trước rồi tính."},{tag:"Lúc đi làm",zh:"上班的时候，什么喜欢不喜欢的，先把工作做好再说。",py:"Shàngbān de shíhou, Shénme xǐhuān bù xǐhuān de, xiān bǎ gōngzuò zuò hǎo zài shuō.",vi:"Lúc đi làm, Thích hay không thích gì chứ, cứ làm tốt công việc trước rồi tính."}],
    explanation:"表示不重视前面所说的事情。",
    note:"口语色彩明显。"
  },

  {
    id:"hsk6_154",
    pattern:"不X白不X",
    title:"不X白不X<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù X bái bù X</div>",
    structure:"不 + V + 白不 + V",
    example:"既然免费，不拿白不拿。",
    pinyin:"Jìrán miǎnfèi, bù ná bái bù ná.",
    meaning:"Đã miễn phí thì không lấy chẳng phải phí sao.",
    examples:[{tag:"Câu gốc",zh:"既然免费，不拿白不拿。",py:"Jìrán miǎnfèi, bù ná bái bù ná.",vi:"Đã miễn phí thì không lấy chẳng phải phí sao."},{tag:"Ở nhà",zh:"妈妈告诉我：既然免费，不拿白不拿。",py:"Māma gàosu wǒ: Jìrán miǎnfèi, bù ná bái bù ná.",vi:"Mẹ bảo tôi: Đã miễn phí thì không lấy chẳng phải phí sao."},{tag:"Ở trường",zh:"在学校，既然免费，不拿白不拿。",py:"Zài xuéxiào, Jìrán miǎnfèi, bù ná bái bù ná.",vi:"Ở trường, Đã miễn phí thì không lấy chẳng phải phí sao."},{tag:"Lúc đi làm",zh:"上班的时候，既然免费，不拿白不拿。",py:"Shàngbān de shíhou, Jìrán miǎnfèi, bù ná bái bù ná.",vi:"Lúc đi làm, Đã miễn phí thì không lấy chẳng phải phí sao."}],
    explanation:"表示有机会就应该利用。",
    note:"口语固定格式。"
  },

  {
    id:"hsk6_155",
    pattern:"X来X去",
    title:"X来X去<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X lái X qù</div>",
    structure:"V来V去",
    example:"他想来想去，还是决定接受这个机会。",
    pinyin:"Tā xiǎng lái xiǎng qù, háishi juédìng jiēshòu zhège jīhuì.",
    meaning:"Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định nhận cơ hội này.",
    examples:[{tag:"Câu gốc",zh:"他想来想去，还是决定接受这个机会。",py:"Tā xiǎng lái xiǎng qù, háishi juédìng jiēshòu zhège jīhuì.",vi:"Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định nhận cơ hội này."},{tag:"Ở nhà",zh:"妈妈告诉我：他想来想去，还是决定接受这个机会。",py:"Māma gàosu wǒ: Tā xiǎng lái xiǎng qù, háishi juédìng jiēshòu zhège jīhuì.",vi:"Mẹ bảo tôi: Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định nhận cơ hội này."},{tag:"Ở trường",zh:"在学校，他想来想去，还是决定接受这个机会。",py:"Zài xuéxiào, Tā xiǎng lái xiǎng qù, háishi juédìng jiēshòu zhège jīhuì.",vi:"Ở trường, Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định nhận cơ hội này."},{tag:"Lúc đi làm",zh:"上班的时候，他想来想去，还是决定接受这个机会。",py:"Shàngbān de shíhou, Tā xiǎng lái xiǎng qù, háishi juédìng jiēshòu zhège jīhuì.",vi:"Lúc đi làm, Anh ấy suy nghĩ đi nghĩ lại, cuối cùng vẫn quyết định nhận cơ hội này."}],
    explanation:"表示反复进行同一动作或思考。",
    note:"常用于动词。"
  },

  {
    id:"hsk6_156",
    pattern:"X来X去，都是……",
    title:"X来X去，都是……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X lái X qù, dōu shì……</div>",
    structure:"V来V去，都是……",
    example:"说来说去，都是为了孩子。",
    pinyin:"Shuō lái shuō qù, dōu shì wèile háizi.",
    meaning:"Nói đi nói lại thì cũng đều là vì con cái.",
    examples:[{tag:"Câu gốc",zh:"说来说去，都是为了孩子。",py:"Shuō lái shuō qù, dōu shì wèile háizi.",vi:"Nói đi nói lại thì cũng đều là vì con cái."},{tag:"Ở nhà",zh:"妈妈告诉我：说来说去，都是为了孩子。",py:"Māma gàosu wǒ: Shuō lái shuō qù, dōu shì wèile háizi.",vi:"Mẹ bảo tôi: Nói đi nói lại thì cũng đều là vì con cái."},{tag:"Ở trường",zh:"在学校，说来说去，都是为了孩子。",py:"Zài xuéxiào, Shuō lái shuō qù, dōu shì wèile háizi.",vi:"Ở trường, Nói đi nói lại thì cũng đều là vì con cái."},{tag:"Lúc đi làm",zh:"上班的时候，说来说去，都是为了孩子。",py:"Shàngbān de shíhou, Shuō lái shuō qù, dōu shì wèile háizi.",vi:"Lúc đi làm, Nói đi nói lại thì cũng đều là vì con cái."}],
    explanation:"表示反复讨论后结论没有改变。",
    note:"口语常见。"
  },

  {
    id:"hsk6_157",
    pattern:"动词+什么就是什么",
    title:"V什么就是什么<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">V shénme jiù shì shénme</div>",
    structure:"V什么就是什么",
    example:"你说什么就是什么，我不跟你争。",
    pinyin:"Nǐ shuō shénme jiù shì shénme, wǒ bù gēn nǐ zhēng.",
    meaning:"Anh nói gì thì là vậy, tôi không tranh luận với anh.",
    examples:[{tag:"Câu gốc",zh:"你说什么就是什么，我不跟你争。",py:"Nǐ shuō shénme jiù shì shénme, wǒ bù gēn nǐ zhēng.",vi:"Anh nói gì thì là vậy, tôi không tranh luận với anh."},{tag:"Tình huống khác",zh:"你说什么就是什么，妈妈不跟你争。",py:"Nǐ shuō shénme jiù shì shénme, Māma bù gēn nǐ zhēng.",vi:"Anh nói gì thì là vậy, tôi không tranh luận với anh."},{tag:"Tình huống khác",zh:"你说什么就是什么，老师不跟你争。",py:"Nǐ shuō shénme jiù shì shénme, Lǎoshī bù gēn nǐ zhēng.",vi:"Anh nói gì thì là vậy, tôi không tranh luận với anh."},{tag:"Tình huống khác",zh:"你说什么就是什么，同学们不跟你争。",py:"Nǐ shuō shénme jiù shì shénme, Tóngxuémen bù gēn nǐ zhēng.",vi:"Anh nói gì thì là vậy, tôi không tranh luận với anh."}],
    explanation:"表示完全接受对方所说的内容。",
    note:"常带让步语气。"
  },

  {
    id:"hsk6_158",
    pattern:"X着也是X着",
    title:"X着也是X着<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">Xzhe yě shì Xzhe</div>",
    structure:"V着也是V着",
    example:"坐着也是坐着，不如帮我整理一下。",
    pinyin:"Zuòzhe yě shì zuòzhe, bùrú bāng wǒ zhěnglǐ yíxià.",
    meaning:"Ngồi cũng là ngồi, chi bằng giúp tôi sắp xếp một chút.",
    examples:[{tag:"Câu gốc",zh:"坐着也是坐着，不如帮我整理一下。",py:"Zuòzhe yě shì zuòzhe, bùrú bāng wǒ zhěnglǐ yíxià.",vi:"Ngồi cũng là ngồi, chi bằng giúp tôi sắp xếp một chút."},{tag:"Tình huống khác",zh:"坐着也是坐着，不如帮妈妈整理一下。",py:"Zuòzhe yě shì zuòzhe, bùrú bāng Māma zhěnglǐ yíxià.",vi:"Ngồi cũng là ngồi, chi bằng giúp tôi sắp xếp một chút."},{tag:"Tình huống khác",zh:"坐着也是坐着，不如帮老师整理一下。",py:"Zuòzhe yě shì zuòzhe, bùrú bāng Lǎoshī zhěnglǐ yíxià.",vi:"Ngồi cũng là ngồi, chi bằng giúp tôi sắp xếp một chút."},{tag:"Tình huống khác",zh:"坐着也是坐着，不如帮同学们整理一下。",py:"Zuòzhe yě shì zuòzhe, bùrú bāng Tóngxuémen zhěnglǐ yíxià.",vi:"Ngồi cũng là ngồi, chi bằng giúp tôi sắp xếp một chút."}],
    explanation:"表示既然闲着，不如做另一件事。",
    note:"口语格式。"
  },

  {
    id:"hsk6_159",
    pattern:"X也不是，Y也不是",
    title:"X也不是，Y也不是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X yě bú shì, Y yě bú shì</div>",
    structure:"X也不是，Y也不是",
    example:"说也不是，不说也不是，真让人头疼。",
    pinyin:"Shuō yě bú shì, bù shuō yě bú shì, zhēn ràng rén tóuténg.",
    meaning:"Nói cũng không được, không nói cũng không được, thật đau đầu.",
    examples:[{tag:"Câu gốc",zh:"说也不是，不说也不是，真让人头疼。",py:"Shuō yě bú shì, bù shuō yě bú shì, zhēn ràng rén tóuténg.",vi:"Nói cũng không được, không nói cũng không được, thật đau đầu."},{tag:"Ở nhà",zh:"妈妈告诉我：说也不是，不说也不是，真让人头疼。",py:"Māma gàosu wǒ: Shuō yě bú shì, bù shuō yě bú shì, zhēn ràng rén tóuténg.",vi:"Mẹ bảo tôi: Nói cũng không được, không nói cũng không được, thật đau đầu."},{tag:"Ở trường",zh:"在学校，说也不是，不说也不是，真让人头疼。",py:"Zài xuéxiào, Shuō yě bú shì, bù shuō yě bú shì, zhēn ràng rén tóuténg.",vi:"Ở trường, Nói cũng không được, không nói cũng không được, thật đau đầu."},{tag:"Lúc đi làm",zh:"上班的时候，说也不是，不说也不是，真让人头疼。",py:"Shàngbān de shíhou, Shuō yě bú shì, bù shuō yě bú shì, zhēn ràng rén tóuténg.",vi:"Lúc đi làm, Nói cũng không được, không nói cũng không được, thật đau đầu."}],
    explanation:"表示两种选择都不合适。",
    note:"常表示为难。"
  },

  {
    id:"hsk6_160",
    pattern:"X也X不得",
    title:"X也X不得<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">X yě X bùde</div>",
    structure:"V也V不得",
    example:"孩子太小，打也打不得，骂也骂不得。",
    pinyin:"Háizi tài xiǎo, dǎ yě dǎ bùde, mà yě mà bùde.",
    meaning:"Đứa trẻ còn quá nhỏ, đánh cũng không được, mắng cũng không được.",
    examples:[{tag:"Câu gốc",zh:"孩子太小，打也打不得，骂也骂不得。",py:"Háizi tài xiǎo, dǎ yě dǎ bùde, mà yě mà bùde.",vi:"Đứa trẻ còn quá nhỏ, đánh cũng không được, mắng cũng không được."},{tag:"Ở nhà",zh:"妈妈告诉我：孩子太小，打也打不得，骂也骂不得。",py:"Māma gàosu wǒ: Háizi tài xiǎo, dǎ yě dǎ bùde, mà yě mà bùde.",vi:"Mẹ bảo tôi: Đứa trẻ còn quá nhỏ, đánh cũng không được, mắng cũng không được."},{tag:"Ở trường",zh:"在学校，孩子太小，打也打不得，骂也骂不得。",py:"Zài xuéxiào, Háizi tài xiǎo, dǎ yě dǎ bùde, mà yě mà bùde.",vi:"Ở trường, Đứa trẻ còn quá nhỏ, đánh cũng không được, mắng cũng không được."},{tag:"Lúc đi làm",zh:"上班的时候，孩子太小，打也打不得，骂也骂不得。",py:"Shàngbān de shíhou, Háizi tài xiǎo, dǎ yě dǎ bùde, mà yě mà bùde.",vi:"Lúc đi làm, Đứa trẻ còn quá nhỏ, đánh cũng không được, mắng cũng không được."}],
    explanation:"表示想做某事却没有办法做。",
    note:"口语色彩较强。"
  },

  {
    id:"hsk6_161",
    pattern:"有A有B",
    title:"有A有B<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǒu A yǒu B</div>",
    structure:"有 A，有 B",
    example:"这里有山有水，环境非常漂亮。",
    pinyin:"Zhèlǐ yǒu shān yǒu shuǐ, huánjìng fēicháng piàoliang.",
    meaning:"Nơi đây có núi có nước, môi trường rất đẹp.",
    examples:[{tag:"Câu gốc",zh:"这里有山有水，环境非常漂亮。",py:"Zhèlǐ yǒu shān yǒu shuǐ, huánjìng fēicháng piàoliang.",vi:"Nơi đây có núi có nước, môi trường rất đẹp."},{tag:"Ở nhà",zh:"妈妈告诉我：这里有山有水，环境非常漂亮。",py:"Māma gàosu wǒ: Zhèlǐ yǒu shān yǒu shuǐ, huánjìng fēicháng piàoliang.",vi:"Mẹ bảo tôi: Nơi đây có núi có nước, môi trường rất đẹp."},{tag:"Ở trường",zh:"在学校，这里有山有水，环境非常漂亮。",py:"Zài xuéxiào, Zhèlǐ yǒu shān yǒu shuǐ, huánjìng fēicháng piàoliang.",vi:"Ở trường, Nơi đây có núi có nước, môi trường rất đẹp."},{tag:"Lúc đi làm",zh:"上班的时候，这里有山有水，环境非常漂亮。",py:"Shàngbān de shíhou, Zhèlǐ yǒu shān yǒu shuǐ, huánjìng fēicháng piàoliang.",vi:"Lúc đi làm, Nơi đây có núi có nước, môi trường rất đẹp."}],
    explanation:"并列列举不同事物。",
    note:"常用于描写。"
  },

  {
    id:"hsk6_162",
    pattern:"没A没B",
    title:"没A没B<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">méi A méi B</div>",
    structure:"没 + A + 没 + B",
    example:"他没吃没喝地工作了一整天。",
    pinyin:"Tā méi chī méi hē de gōngzuò le yì zhěng tiān.",
    meaning:"Anh ấy làm việc cả ngày mà không ăn không uống.",
    examples:[{tag:"Câu gốc",zh:"他没吃没喝地工作了一整天。",py:"Tā méi chī méi hē de gōngzuò le yì zhěng tiān.",vi:"Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Ở nhà",zh:"妈妈告诉我：他没吃没喝地工作了一整天。",py:"Māma gàosu wǒ: Tā méi chī méi hē de gōngzuò le yì zhěng tiān.",vi:"Mẹ bảo tôi: Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Ở trường",zh:"在学校，他没吃没喝地工作了一整天。",py:"Zài xuéxiào, Tā méi chī méi hē de gōngzuò le yì zhěng tiān.",vi:"Ở trường, Anh ấy làm việc cả ngày mà không ăn không uống."},{tag:"Lúc đi làm",zh:"上班的时候，他没吃没喝地工作了一整天。",py:"Shàngbān de shíhou, Tā méi chī méi hē de gōngzuò le yì zhěng tiān.",vi:"Lúc đi làm, Anh ấy làm việc cả ngày mà không ăn không uống."}],
    explanation:"表示两方面都没有。",
    note:"常用于状态描写。"
  },

  {
    id:"hsk6_163",
    pattern:"说A就A",
    title:"说A就A<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shuō A jiù A</div>",
    structure:"说 + V + 就 + V",
    example:"他说走就走，从来不拖延。",
    pinyin:"Tā shuō zǒu jiù zǒu, cónglái bù tuōyán.",
    meaning:"Anh ấy nói đi là đi ngay, chưa bao giờ trì hoãn.",
    examples:[{tag:"Câu gốc",zh:"他说走就走，从来不拖延。",py:"Tā shuō zǒu jiù zǒu, cónglái bù tuōyán.",vi:"Anh ấy nói đi là đi ngay, chưa bao giờ trì hoãn."},{tag:"Ở nhà",zh:"妈妈告诉我：他说走就走，从来不拖延。",py:"Māma gàosu wǒ: Tā shuō zǒu jiù zǒu, cónglái bù tuōyán.",vi:"Mẹ bảo tôi: Anh ấy nói đi là đi ngay, chưa bao giờ trì hoãn."},{tag:"Ở trường",zh:"在学校，他说走就走，从来不拖延。",py:"Zài xuéxiào, Tā shuō zǒu jiù zǒu, cónglái bù tuōyán.",vi:"Ở trường, Anh ấy nói đi là đi ngay, chưa bao giờ trì hoãn."},{tag:"Lúc đi làm",zh:"上班的时候，他说走就走，从来不拖延。",py:"Shàngbān de shíhou, Tā shuō zǒu jiù zǒu, cónglái bù tuōyán.",vi:"Lúc đi làm, Anh ấy nói đi là đi ngay, chưa bao giờ trì hoãn."}],
    explanation:"表示动作迅速、果断。",
    note:"常用于口语。"
  },

  {
    id:"hsk6_164",
    pattern:"不管……都……",
    title:"不管……都……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùguǎn……dōu……</div>",
    structure:"不管 A，都 B",
    example:"不管遇到什么困难，我们都不能放弃。",
    pinyin:"Bùguǎn yùdào shénme kùnnan, wǒmen dōu bùnéng fàngqì.",
    meaning:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"不管遇到什么困难，我们都不能放弃。",py:"Bùguǎn yùdào shénme kùnnan, wǒmen dōu bùnéng fàngqì.",vi:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，妈妈们都不能放弃。",py:"Bùguǎn yùdào shénme kùnnan, Māmamen dōu bùnéng fàngqì.",vi:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，老师们都不能放弃。",py:"Bùguǎn yùdào shénme kùnnan, Lǎoshīmen dōu bùnéng fàngqì.",vi:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，同学们们都不能放弃。",py:"Bùguǎn yùdào shénme kùnnan, Tóngxuémenmen dōu bùnéng fàngqì.",vi:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc."},{tag:"Tình huống khác",zh:"不管遇到什么困难，他们都不能放弃。",py:"Bùguǎn yùdào shénme kùnnan, Tāmen dōu bùnéng fàngqì.",vi:"Dù gặp khó khăn gì chúng ta cũng không được bỏ cuộc."}],
    explanation:"表示无条件。",
    note:"与“无论”意义接近。"
  },

  {
    id:"hsk6_165",
    pattern:"无论……都……",
    title:"无论……都……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wúlùn……dōu……</div>",
    structure:"无论 A，都 B",
    example:"无论结果如何，我们都会接受。",
    pinyin:"Wúlùn jiéguǒ rúhé, wǒmen dōu huì jiēshòu.",
    meaning:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận.",
    examples:[{tag:"Câu gốc",zh:"无论结果如何，我们都会接受。",py:"Wúlùn jiéguǒ rúhé, wǒmen dōu huì jiēshòu.",vi:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận."},{tag:"Tình huống khác",zh:"无论结果如何，妈妈们都会接受。",py:"Wúlùn jiéguǒ rúhé, Māmamen dōu huì jiēshòu.",vi:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận."},{tag:"Tình huống khác",zh:"无论结果如何，老师们都会接受。",py:"Wúlùn jiéguǒ rúhé, Lǎoshīmen dōu huì jiēshòu.",vi:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận."},{tag:"Tình huống khác",zh:"无论结果如何，同学们们都会接受。",py:"Wúlùn jiéguǒ rúhé, Tóngxuémenmen dōu huì jiēshòu.",vi:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận."},{tag:"Tình huống khác",zh:"无论结果如何，他们都会接受。",py:"Wúlùn jiéguǒ rúhé, Tāmen dōu huì jiēshòu.",vi:"Bất kể kết quả thế nào, chúng tôi đều sẽ chấp nhận."}],
    explanation:"表示不受条件影响。",
    note:"正式程度较高。"
  },

  {
    id:"hsk6_166",
    pattern:"即使……也……",
    title:"即使……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jíshǐ……yě……</div>",
    structure:"即使 A，也 B",
    example:"即使失败了，也不要轻易放弃。",
    pinyin:"Jíshǐ shībài le, yě bú yào qīngyì fàngqì.",
    meaning:"Cho dù thất bại cũng đừng dễ dàng bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"即使失败了，也不要轻易放弃。",py:"Jíshǐ shībài le, yě bú yào qīngyì fàngqì.",vi:"Cho dù thất bại cũng đừng dễ dàng bỏ cuộc."},{tag:"Ở nhà",zh:"妈妈告诉我：即使失败了，也不要轻易放弃。",py:"Māma gàosu wǒ: Jíshǐ shībài le, yě bú yào qīngyì fàngqì.",vi:"Mẹ bảo tôi: Cho dù thất bại cũng đừng dễ dàng bỏ cuộc."},{tag:"Ở trường",zh:"在学校，即使失败了，也不要轻易放弃。",py:"Zài xuéxiào, Jíshǐ shībài le, yě bú yào qīngyì fàngqì.",vi:"Ở trường, Cho dù thất bại cũng đừng dễ dàng bỏ cuộc."},{tag:"Lúc đi làm",zh:"上班的时候，即使失败了，也不要轻易放弃。",py:"Shàngbān de shíhou, Jíshǐ shībài le, yě bú yào qīngyì fàngqì.",vi:"Lúc đi làm, Cho dù thất bại cũng đừng dễ dàng bỏ cuộc."}],
    explanation:"表示假设让步。",
    note:"正式表达常见。"
  },

  {
    id:"hsk6_167",
    pattern:"哪怕……也……",
    title:"哪怕……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">nǎpà……yě……</div>",
    structure:"哪怕 A，也 B",
    example:"哪怕只有一点希望，他也不会放弃。",
    pinyin:"Nǎpà zhǐyǒu yìdiǎn xīwàng, tā yě bú huì fàngqì.",
    meaning:"Cho dù chỉ còn một chút hy vọng, anh ấy cũng không bỏ cuộc.",
    examples:[{tag:"Câu gốc",zh:"哪怕只有一点希望，他也不会放弃。",py:"Nǎpà zhǐyǒu yìdiǎn xīwàng, tā yě bú huì fàngqì.",vi:"Cho dù chỉ còn một chút hy vọng, anh ấy cũng không bỏ cuộc."},{tag:"Ở nhà",zh:"妈妈告诉我：哪怕只有一点希望，他也不会放弃。",py:"Māma gàosu wǒ: Nǎpà zhǐyǒu yìdiǎn xīwàng, tā yě bú huì fàngqì.",vi:"Mẹ bảo tôi: Cho dù chỉ còn một chút hy vọng, anh ấy cũng không bỏ cuộc."},{tag:"Ở trường",zh:"在学校，哪怕只有一点希望，他也不会放弃。",py:"Zài xuéxiào, Nǎpà zhǐyǒu yìdiǎn xīwàng, tā yě bú huì fàngqì.",vi:"Ở trường, Cho dù chỉ còn một chút hy vọng, anh ấy cũng không bỏ cuộc."},{tag:"Lúc đi làm",zh:"上班的时候，哪怕只有一点希望，他也不会放弃。",py:"Shàngbān de shíhou, Nǎpà zhǐyǒu yìdiǎn xīwàng, tā yě bú huì fàngqì.",vi:"Lúc đi làm, Cho dù chỉ còn một chút hy vọng, anh ấy cũng không bỏ cuộc."}],
    explanation:"强调极端条件下仍然如此。",
    note:"让步程度强。"
  },

  {
    id:"hsk6_168",
    pattern:"再……也……",
    title:"再……也……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zài……yě……</div>",
    structure:"再 + Adj/V + 也 + B",
    example:"事情再困难，也总有解决办法。",
    pinyin:"Shìqing zài kùnnan, yě zǒng yǒu jiějué bànfǎ.",
    meaning:"Dù sự việc khó đến đâu cũng luôn có cách giải quyết.",
    examples:[{tag:"Câu gốc",zh:"事情再困难，也总有解决办法。",py:"Shìqing zài kùnnan, yě zǒng yǒu jiějué bànfǎ.",vi:"Dù sự việc khó đến đâu cũng luôn có cách giải quyết."},{tag:"Ở nhà",zh:"妈妈告诉我：事情再困难，也总有解决办法。",py:"Māma gàosu wǒ: Shìqing zài kùnnan, yě zǒng yǒu jiějué bànfǎ.",vi:"Mẹ bảo tôi: Dù sự việc khó đến đâu cũng luôn có cách giải quyết."},{tag:"Ở trường",zh:"在学校，事情再困难，也总有解决办法。",py:"Zài xuéxiào, Shìqing zài kùnnan, yě zǒng yǒu jiějué bànfǎ.",vi:"Ở trường, Dù sự việc khó đến đâu cũng luôn có cách giải quyết."},{tag:"Lúc đi làm",zh:"上班的时候，事情再困难，也总有解决办法。",py:"Shàngbān de shíhou, Shìqing zài kùnnan, yě zǒng yǒu jiějué bànfǎ.",vi:"Lúc đi làm, Dù sự việc khó đến đâu cũng luôn có cách giải quyết."}],
    explanation:"表示让步，强调程度极端。",
    note:"常用于鼓励或判断。"
  },

  {
    id:"hsk6_169",
    pattern:"非……不可",
    title:"非……不可<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fēi……bùkě</div>",
    structure:"非 + V + 不可",
    example:"这件事今天非解决不可。",
    pinyin:"Zhè jiàn shì jīntiān fēi jiějué bùkě.",
    meaning:"Việc này hôm nay nhất định phải giải quyết.",
    examples:[{tag:"Câu gốc",zh:"这件事今天非解决不可。",py:"Zhè jiàn shì jīntiān fēi jiějué bùkě.",vi:"Việc này hôm nay nhất định phải giải quyết."},{tag:"Ở nhà",zh:"妈妈告诉我：这件事今天非解决不可。",py:"Māma gàosu wǒ: Zhè jiàn shì jīntiān fēi jiějué bùkě.",vi:"Mẹ bảo tôi: Việc này hôm nay nhất định phải giải quyết."},{tag:"Ở trường",zh:"在学校，这件事今天非解决不可。",py:"Zài xuéxiào, Zhè jiàn shì jīntiān fēi jiějué bùkě.",vi:"Ở trường, Việc này hôm nay nhất định phải giải quyết."},{tag:"Lúc đi làm",zh:"上班的时候，这件事今天非解决不可。",py:"Shàngbān de shíhou, Zhè jiàn shì jīntiān fēi jiějué bùkě.",vi:"Lúc đi làm, Việc này hôm nay nhất định phải giải quyết."}],
    explanation:"表示强烈的必要性。",
    note:"语气很强。"
  },

  {
    id:"hsk6_170",
    pattern:"不……不……",
    title:"不……不……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bù……bù……</div>",
    structure:"不 + V + 不 + V",
    example:"不达目的不罢休。",
    pinyin:"Bù dá mùdì bù bàxiū.",
    meaning:"Chưa đạt mục tiêu thì chưa dừng lại.",
    examples:[{tag:"Câu gốc",zh:"不达目的不罢休。",py:"Bù dá mùdì bù bàxiū.",vi:"Chưa đạt mục tiêu thì chưa dừng lại."},{tag:"Ở nhà",zh:"妈妈告诉我：不达目的不罢休。",py:"Māma gàosu wǒ: Bù dá mùdì bù bàxiū.",vi:"Mẹ bảo tôi: Chưa đạt mục tiêu thì chưa dừng lại."},{tag:"Ở trường",zh:"在学校，不达目的不罢休。",py:"Zài xuéxiào, Bù dá mùdì bù bàxiū.",vi:"Ở trường, Chưa đạt mục tiêu thì chưa dừng lại."},{tag:"Lúc đi làm",zh:"上班的时候，不达目的不罢休。",py:"Shàngbān de shíhou, Bù dá mùdì bù bàxiū.",vi:"Lúc đi làm, Chưa đạt mục tiêu thì chưa dừng lại."}],
    explanation:"表示不达到某目的就不会停止。",
    note:"常见固定格式。"
  },

  {
    id:"hsk6_171",
    pattern:"没有……就没有……",
    title:"没有……就没有……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">méiyǒu……jiù méiyǒu……</div>",
    structure:"没有 A，就没有 B",
    example:"没有大家的帮助，就没有今天的成功。",
    pinyin:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",
    meaning:"Không có sự giúp đỡ của mọi người thì không có thành công hôm nay.",
    examples:[{tag:"Câu gốc",zh:"没有大家的帮助，就没有今天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大家的帮助，就没有昨天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu Zuótiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大家的帮助，就没有明天的成功。",py:"Méiyǒu dàjiā de bāngzhù, jiù méiyǒu Míngtiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì không có thành công hôm nay."},{tag:"Tình huống khác",zh:"没有大学校的帮助，就没有今天的成功。",py:"Méiyǒu dàxuéxiào de bāngzhù, jiù méiyǒu jīntiān de chénggōng.",vi:"Không có sự giúp đỡ của mọi người thì không có thành công hôm nay."}],
    explanation:"强调前项是后项成立的必要条件。",
    note:"常用于强调因果。"
  },

  {
    id:"hsk6_172",
    pattern:"便是",
    title:"便是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">biàn shì</div>",
    structure:"便是 + 名词/判断",
    example:"这便是我们需要解决的问题。",
    pinyin:"Zhè biàn shì wǒmen xūyào jiějué de wèntí.",
    meaning:"Đây chính là vấn đề chúng ta cần giải quyết.",
    examples:[{tag:"Câu gốc",zh:"这便是我们需要解决的问题。",py:"Zhè biàn shì wǒmen xūyào jiějué de wèntí.",vi:"Đây chính là vấn đề chúng ta cần giải quyết."},{tag:"Tình huống khác",zh:"这便是妈妈们需要解决的问题。",py:"Zhè biàn shì Māmamen xūyào jiějué de wèntí.",vi:"Đây chính là vấn đề chúng ta cần giải quyết."},{tag:"Tình huống khác",zh:"这便是老师们需要解决的问题。",py:"Zhè biàn shì Lǎoshīmen xūyào jiějué de wèntí.",vi:"Đây chính là vấn đề chúng ta cần giải quyết."},{tag:"Tình huống khác",zh:"这便是同学们们需要解决的问题。",py:"Zhè biàn shì Tóngxuémenmen xūyào jiějué de wèntí.",vi:"Đây chính là vấn đề chúng ta cần giải quyết."},{tag:"Tình huống khác",zh:"这便是他们需要解决的问题。",py:"Zhè biàn shì Tāmen xūyào jiějué de wèntí.",vi:"Đây chính là vấn đề chúng ta cần giải quyết."}],
    explanation:"便是表示“就是”，语气更正式。",
    note:"书面语。"
  },

  {
    id:"hsk6_173",
    pattern:"至多",
    title:"至多<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhìduō</div>",
    structure:"至多 + 数量",
    example:"这项工作至多需要三天。",
    pinyin:"Zhè xiàng gōngzuò zhìduō xūyào sān tiān.",
    meaning:"Công việc này nhiều nhất cần ba ngày.",
    examples:[{tag:"Câu gốc",zh:"这项工作至多需要三天。",py:"Zhè xiàng gōngzuò zhìduō xūyào sān tiān.",vi:"Công việc này nhiều nhất cần ba ngày."},{tag:"Ở nhà",zh:"妈妈告诉我：这项工作至多需要三天。",py:"Māma gàosu wǒ: Zhè xiàng gōngzuò zhìduō xūyào sān tiān.",vi:"Mẹ bảo tôi: Công việc này nhiều nhất cần ba ngày."},{tag:"Ở trường",zh:"在学校，这项工作至多需要三天。",py:"Zài xuéxiào, Zhè xiàng gōngzuò zhìduō xūyào sān tiān.",vi:"Ở trường, Công việc này nhiều nhất cần ba ngày."},{tag:"Lúc đi làm",zh:"上班的时候，这项工作至多需要三天。",py:"Shàngbān de shíhou, Zhè xiàng gōngzuò zhìduō xūyào sān tiān.",vi:"Lúc đi làm, Công việc này nhiều nhất cần ba ngày."}],
    explanation:"表示最大数量。",
    note:"书面语。"
  },

  {
    id:"hsk6_174",
    pattern:"至于……则……",
    title:"至于……则……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zhìyú……zé……</div>",
    structure:"至于 A，则 B",
    example:"至于具体安排，则由负责人决定。",
    pinyin:"Zhìyú jùtǐ ānpái, zé yóu fùzérén juédìng.",
    meaning:"Còn sắp xếp cụ thể thì do người phụ trách quyết định.",
    examples:[{tag:"Câu gốc",zh:"至于具体安排，则由负责人决定。",py:"Zhìyú jùtǐ ānpái, zé yóu fùzérén juédìng.",vi:"Còn sắp xếp cụ thể thì do người phụ trách quyết định."},{tag:"Ở nhà",zh:"妈妈告诉我：至于具体安排，则由负责人决定。",py:"Māma gàosu wǒ: Zhìyú jùtǐ ānpái, zé yóu fùzérén juédìng.",vi:"Mẹ bảo tôi: Còn sắp xếp cụ thể thì do người phụ trách quyết định."},{tag:"Ở trường",zh:"在学校，至于具体安排，则由负责人决定。",py:"Zài xuéxiào, Zhìyú jùtǐ ānpái, zé yóu fùzérén juédìng.",vi:"Ở trường, Còn sắp xếp cụ thể thì do người phụ trách quyết định."},{tag:"Lúc đi làm",zh:"上班的时候，至于具体安排，则由负责人决定。",py:"Shàngbān de shíhou, Zhìyú jùtǐ ānpái, zé yóu fùzérén juédìng.",vi:"Lúc đi làm, Còn sắp xếp cụ thể thì do người phụ trách quyết định."}],
    explanation:"引出话题并说明对应情况。",
    note:"正式表达。"
  },

  {
    id:"hsk6_175",
    pattern:"据",
    title:"据 + 来源<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jù</div>",
    structure:"据 + 消息/资料/调查",
    example:"据调查，越来越多的人选择在线学习。",
    pinyin:"Jù diàochá, yuèláiyuè duō de rén xuǎnzé zàixiàn xuéxí.",
    meaning:"Theo điều tra, ngày càng nhiều người chọn học trực tuyến.",
    examples:[{tag:"Câu gốc",zh:"据调查，越来越多的人选择在线学习。",py:"Jù diàochá, yuèláiyuè duō de rén xuǎnzé zàixiàn xuéxí.",vi:"Theo điều tra, ngày càng nhiều người chọn học trực tuyến."},{tag:"Ở nhà",zh:"妈妈告诉我：据调查，越来越多的人选择在线学习。",py:"Māma gàosu wǒ: Jù diàochá, yuèláiyuè duō de rén xuǎnzé zàixiàn xuéxí.",vi:"Mẹ bảo tôi: Theo điều tra, ngày càng nhiều người chọn học trực tuyến."},{tag:"Ở trường",zh:"在学校，据调查，越来越多的人选择在线学习。",py:"Zài xuéxiào, Jù diàochá, yuèláiyuè duō de rén xuǎnzé zàixiàn xuéxí.",vi:"Ở trường, Theo điều tra, ngày càng nhiều người chọn học trực tuyến."},{tag:"Lúc đi làm",zh:"上班的时候，据调查，越来越多的人选择在线学习。",py:"Shàngbān de shíhou, Jù diàochá, yuèláiyuè duō de rén xuǎnzé zàixiàn xuéxí.",vi:"Lúc đi làm, Theo điều tra, ngày càng nhiều người chọn học trực tuyến."}],
    explanation:"据表示根据某种来源。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_176",
    pattern:"沿着",
    title:"沿着 + 路线<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yánzhe</div>",
    structure:"沿着 + 名词 + V",
    example:"沿着这条路一直走就到了。",
    pinyin:"Yánzhe zhè tiáo lù yìzhí zǒu jiù dào le.",
    meaning:"Cứ đi thẳng theo con đường này là đến.",
    examples:[{tag:"Câu gốc",zh:"沿着这条路一直走就到了。",py:"Yánzhe zhè tiáo lù yìzhí zǒu jiù dào le.",vi:"Cứ đi thẳng theo con đường này là đến."},{tag:"Ở nhà",zh:"妈妈告诉我：沿着这条路一直走就到了。",py:"Māma gàosu wǒ: Yánzhe zhè tiáo lù yìzhí zǒu jiù dào le.",vi:"Mẹ bảo tôi: Cứ đi thẳng theo con đường này là đến."},{tag:"Ở trường",zh:"在学校，沿着这条路一直走就到了。",py:"Zài xuéxiào, Yánzhe zhè tiáo lù yìzhí zǒu jiù dào le.",vi:"Ở trường, Cứ đi thẳng theo con đường này là đến."},{tag:"Lúc đi làm",zh:"上班的时候，沿着这条路一直走就到了。",py:"Shàngbān de shíhou, Yánzhe zhè tiáo lù yìzhí zǒu jiù dào le.",vi:"Lúc đi làm, Cứ đi thẳng theo con đường này là đến."}],
    explanation:"表示沿某一方向或路线移动。",
    note:"常用于路线说明。"
  },

  {
    id:"hsk6_177",
    pattern:"同……",
    title:"同 + 对象<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">tóng</div>",
    structure:"同 + 人 + V",
    example:"我们应该同相关人员保持联系。",
    pinyin:"Wǒmen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",
    meaning:"Chúng ta nên giữ liên lạc với những người liên quan.",
    examples:[{tag:"Câu gốc",zh:"我们应该同相关人员保持联系。",py:"Wǒmen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",vi:"Chúng ta nên giữ liên lạc với những người liên quan."},{tag:"Tình huống khác",zh:"妈妈们应该同相关人员保持联系。",py:"Māmamen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",vi:"Chúng ta nên giữ liên lạc với những người liên quan."},{tag:"Tình huống khác",zh:"老师们应该同相关人员保持联系。",py:"Lǎoshīmen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",vi:"Chúng ta nên giữ liên lạc với những người liên quan."},{tag:"Tình huống khác",zh:"同学们们应该同相关人员保持联系。",py:"Tóngxuémenmen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",vi:"Chúng ta nên giữ liên lạc với những người liên quan."},{tag:"Tình huống khác",zh:"他们应该同相关人员保持联系。",py:"Tāmen yīnggāi tóng xiāngguān rényuán bǎochí liánxì.",vi:"Chúng ta nên giữ liên lạc với những người liên quan."}],
    explanation:"同表示和、跟。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_178",
    pattern:"与",
    title:"与 + 对象<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǔ</div>",
    structure:"与 + 名词 + V",
    example:"这个决定与大家的利益有关。",
    pinyin:"Zhège juédìng yǔ dàjiā de lìyì yǒuguān.",
    meaning:"Quyết định này liên quan đến lợi ích của mọi người.",
    examples:[{tag:"Câu gốc",zh:"这个决定与大家的利益有关。",py:"Zhège juédìng yǔ dàjiā de lìyì yǒuguān.",vi:"Quyết định này liên quan đến lợi ích của mọi người."},{tag:"Ở nhà",zh:"妈妈告诉我：这个决定与大家的利益有关。",py:"Māma gàosu wǒ: Zhège juédìng yǔ dàjiā de lìyì yǒuguān.",vi:"Mẹ bảo tôi: Quyết định này liên quan đến lợi ích của mọi người."},{tag:"Ở trường",zh:"在学校，这个决定与大家的利益有关。",py:"Zài xuéxiào, Zhège juédìng yǔ dàjiā de lìyì yǒuguān.",vi:"Ở trường, Quyết định này liên quan đến lợi ích của mọi người."},{tag:"Lúc đi làm",zh:"上班的时候，这个决定与大家的利益有关。",py:"Shàngbān de shíhou, Zhège juédìng yǔ dàjiā de lìyì yǒuguān.",vi:"Lúc đi làm, Quyết định này liên quan đến lợi ích của mọi người."}],
    explanation:"与表示和、跟。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_179",
    pattern:"而",
    title:"A而B",
    structure:"A，而 B",
    example:"有些人重视速度，而有些人更重视质量。",
    pinyin:"Yǒuxiē rén zhòngshì sùdù, ér yǒuxiē rén gèng zhòngshì zhìliàng.",
    meaning:"Một số người coi trọng tốc độ, trong khi một số khác coi trọng chất lượng hơn.",
    examples:[{tag:"Câu gốc",zh:"有些人重视速度，而有些人更重视质量。",py:"Yǒuxiē rén zhòngshì sùdù, ér yǒuxiē rén gèng zhòngshì zhìliàng.",vi:"Một số người coi trọng tốc độ, trong khi một số khác coi trọng chất lượng hơn."},{tag:"Ở nhà",zh:"妈妈告诉我：有些人重视速度，而有些人更重视质量。",py:"Māma gàosu wǒ: Yǒuxiē rén zhòngshì sùdù, ér yǒuxiē rén gèng zhòngshì zhìliàng.",vi:"Mẹ bảo tôi: Một số người coi trọng tốc độ, trong khi một số khác coi trọng chất lượng hơn."},{tag:"Ở trường",zh:"在学校，有些人重视速度，而有些人更重视质量。",py:"Zài xuéxiào, Yǒuxiē rén zhòngshì sùdù, ér yǒuxiē rén gèng zhòngshì zhìliàng.",vi:"Ở trường, Một số người coi trọng tốc độ, trong khi một số khác coi trọng chất lượng hơn."},{tag:"Lúc đi làm",zh:"上班的时候，有些人重视速度，而有些人更重视质量。",py:"Shàngbān de shíhou, Yǒuxiē rén zhòngshì sùdù, ér yǒuxiē rén gèng zhòngshì zhìliàng.",vi:"Lúc đi làm, Một số người coi trọng tốc độ, trong khi một số khác coi trọng chất lượng hơn."}],
    explanation:"而可连接两个分句，表示对比或转折。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_180",
    pattern:"若",
    title:"若……则……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">ruò……zé……</div>",
    structure:"若 A，则 B",
    example:"若发现问题，应及时报告。",
    pinyin:"Ruò fāxiàn wèntí, yīng jíshí bàogào.",
    meaning:"Nếu phát hiện vấn đề thì cần báo cáo kịp thời.",
    examples:[{tag:"Câu gốc",zh:"若发现问题，应及时报告。",py:"Ruò fāxiàn wèntí, yīng jíshí bàogào.",vi:"Nếu phát hiện vấn đề thì cần báo cáo kịp thời."},{tag:"Ở nhà",zh:"妈妈告诉我：若发现问题，应及时报告。",py:"Māma gàosu wǒ: Ruò fāxiàn wèntí, yīng jíshí bàogào.",vi:"Mẹ bảo tôi: Nếu phát hiện vấn đề thì cần báo cáo kịp thời."},{tag:"Ở trường",zh:"在学校，若发现问题，应及时报告。",py:"Zài xuéxiào, Ruò fāxiàn wèntí, yīng jíshí bàogào.",vi:"Ở trường, Nếu phát hiện vấn đề thì cần báo cáo kịp thời."},{tag:"Lúc đi làm",zh:"上班的时候，若发现问题，应及时报告。",py:"Shàngbān de shíhou, Ruò fāxiàn wèntí, yīng jíshí bàogào.",vi:"Lúc đi làm, Nếu phát hiện vấn đề thì cần báo cáo kịp thời."}],
    explanation:"若表示如果。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_181",
    pattern:"鉴于",
    title:"鉴于 + 原因<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">jiànyú</div>",
    structure:"鉴于 A，B",
    example:"鉴于天气原因，活动延期举行。",
    pinyin:"Jiànyú tiānqì yuányīn, huódòng yánqī jǔxíng.",
    meaning:"Xét nguyên nhân thời tiết, hoạt động được hoãn tổ chức.",
    examples:[{tag:"Câu gốc",zh:"鉴于天气原因，活动延期举行。",py:"Jiànyú tiānqì yuányīn, huódòng yánqī jǔxíng.",vi:"Xét nguyên nhân thời tiết, hoạt động được hoãn tổ chức."},{tag:"Ở nhà",zh:"妈妈告诉我：鉴于天气原因，活动延期举行。",py:"Māma gàosu wǒ: Jiànyú tiānqì yuányīn, huódòng yánqī jǔxíng.",vi:"Mẹ bảo tôi: Xét nguyên nhân thời tiết, hoạt động được hoãn tổ chức."},{tag:"Ở trường",zh:"在学校，鉴于天气原因，活动延期举行。",py:"Zài xuéxiào, Jiànyú tiānqì yuányīn, huódòng yánqī jǔxíng.",vi:"Ở trường, Xét nguyên nhân thời tiết, hoạt động được hoãn tổ chức."},{tag:"Lúc đi làm",zh:"上班的时候，鉴于天气原因，活动延期举行。",py:"Shàngbān de shíhou, Jiànyú tiānqì yuányīn, huódòng yánqī jǔxíng.",vi:"Lúc đi làm, Xét nguyên nhân thời tiết, hoạt động được hoãn tổ chức."}],
    explanation:"鉴于表示考虑到某种情况或原因。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_182",
    pattern:"不免……",
    title:"不免……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bùmiǎn</div>",
    structure:"A，不免 B",
    example:"第一次公开演讲，紧张是在所难免的。",
    pinyin:"Dì yí cì gōngkāi yǎnjiǎng, jǐnzhāng shì zàisuǒnánmiǎn de.",
    meaning:"Lần đầu diễn thuyết công khai, căng thẳng là điều khó tránh.",
    examples:[{tag:"Câu gốc",zh:"第一次公开演讲，紧张是在所难免的。",py:"Dì yí cì gōngkāi yǎnjiǎng, jǐnzhāng shì zàisuǒnánmiǎn de.",vi:"Lần đầu diễn thuyết công khai, căng thẳng là điều khó tránh."},{tag:"Ở nhà",zh:"妈妈告诉我：第一次公开演讲，紧张是在所难免的。",py:"Māma gàosu wǒ: Dì yí cì gōngkāi yǎnjiǎng, jǐnzhāng shì zàisuǒnánmiǎn de.",vi:"Mẹ bảo tôi: Lần đầu diễn thuyết công khai, căng thẳng là điều khó tránh."},{tag:"Ở trường",zh:"在学校，第一次公开演讲，紧张是在所难免的。",py:"Zài xuéxiào, Dì yí cì gōngkāi yǎnjiǎng, jǐnzhāng shì zàisuǒnánmiǎn de.",vi:"Ở trường, Lần đầu diễn thuyết công khai, căng thẳng là điều khó tránh."},{tag:"Lúc đi làm",zh:"上班的时候，第一次公开演讲，紧张是在所难免的。",py:"Shàngbān de shíhou, Dì yí cì gōngkāi yǎnjiǎng, jǐnzhāng shì zàisuǒnánmiǎn de.",vi:"Lúc đi làm, Lần đầu diễn thuyết công khai, căng thẳng là điều khó tránh."}],
    explanation:"表示某种结果自然会发生。",
    note:"常用于客观陈述。"
  },

  {
    id:"hsk6_183",
    pattern:"在所难免",
    title:"在所难免<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zàisuǒnánmiǎn</div>",
    structure:"……是在所难免的",
    example:"工作中出现一些错误是在所难免的。",
    pinyin:"Gōngzuò zhōng chūxiàn yìxiē cuòwù shì zàisuǒnánmiǎn de.",
    meaning:"Trong công việc xuất hiện một số sai sót là điều khó tránh khỏi.",
    examples:[{tag:"Câu gốc",zh:"工作中出现一些错误是在所难免的。",py:"Gōngzuò zhōng chūxiàn yìxiē cuòwù shì zàisuǒnánmiǎn de.",vi:"Trong công việc xuất hiện một số sai sót là điều khó tránh khỏi."},{tag:"Ở nhà",zh:"妈妈告诉我：工作中出现一些错误是在所难免的。",py:"Māma gàosu wǒ: Gōngzuò zhōng chūxiàn yìxiē cuòwù shì zàisuǒnánmiǎn de.",vi:"Mẹ bảo tôi: Trong công việc xuất hiện một số sai sót là điều khó tránh khỏi."},{tag:"Ở trường",zh:"在学校，工作中出现一些错误是在所难免的。",py:"Zài xuéxiào, Gōngzuò zhōng chūxiàn yìxiē cuòwù shì zàisuǒnánmiǎn de.",vi:"Ở trường, Trong công việc xuất hiện một số sai sót là điều khó tránh khỏi."},{tag:"Lúc đi làm",zh:"上班的时候，工作中出现一些错误是在所难免的。",py:"Shàngbān de shíhou, Gōngzuò zhōng chūxiàn yìxiē cuòwù shì zàisuǒnánmiǎn de.",vi:"Lúc đi làm, Trong công việc xuất hiện một số sai sót là điều khó tránh khỏi."}],
    explanation:"表示某事很难避免。",
    note:"固定表达。"
  },

  {
    id:"hsk6_184",
    pattern:"归根到底",
    title:"归根到底<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">guīgēn dàodǐ</div>",
    structure:"归根到底，……",
    example:"归根到底，成功还是取决于长期的努力。",
    pinyin:"Guīgēn dàodǐ, chénggōng háishi qǔjuéyú chángqī de nǔlì.",
    meaning:"Xét cho cùng, thành công vẫn phụ thuộc vào nỗ lực lâu dài.",
    examples:[{tag:"Câu gốc",zh:"归根到底，成功还是取决于长期的努力。",py:"Guīgēn dàodǐ, chénggōng háishi qǔjuéyú chángqī de nǔlì.",vi:"Xét cho cùng, thành công vẫn phụ thuộc vào nỗ lực lâu dài."},{tag:"Ở nhà",zh:"妈妈告诉我：归根到底，成功还是取决于长期的努力。",py:"Māma gàosu wǒ: Guīgēn dàodǐ, chénggōng háishi qǔjuéyú chángqī de nǔlì.",vi:"Mẹ bảo tôi: Xét cho cùng, thành công vẫn phụ thuộc vào nỗ lực lâu dài."},{tag:"Ở trường",zh:"在学校，归根到底，成功还是取决于长期的努力。",py:"Zài xuéxiào, Guīgēn dàodǐ, chénggōng háishi qǔjuéyú chángqī de nǔlì.",vi:"Ở trường, Xét cho cùng, thành công vẫn phụ thuộc vào nỗ lực lâu dài."},{tag:"Lúc đi làm",zh:"上班的时候，归根到底，成功还是取决于长期的努力。",py:"Shàngbān de shíhou, Guīgēn dàodǐ, chénggōng háishi qǔjuéyú chángqī de nǔlì.",vi:"Lúc đi làm, Xét cho cùng, thành công vẫn phụ thuộc vào nỗ lực lâu dài."}],
    explanation:"表示追究根本原因或最终结论。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_185",
    pattern:"总而言之",
    title:"总而言之<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zǒng ér yán zhī</div>",
    structure:"总而言之，……",
    example:"总而言之，我们必须尽快采取行动。",
    pinyin:"Zǒng ér yán zhī, wǒmen bìxū jǐnkuài cǎiqǔ xíngdòng.",
    meaning:"Tóm lại, chúng ta phải nhanh chóng hành động.",
    examples:[{tag:"Câu gốc",zh:"总而言之，我们必须尽快采取行动。",py:"Zǒng ér yán zhī, wǒmen bìxū jǐnkuài cǎiqǔ xíngdòng.",vi:"Tóm lại, chúng ta phải nhanh chóng hành động."},{tag:"Tình huống khác",zh:"总而言之，妈妈们必须尽快采取行动。",py:"Zǒng ér yán zhī, Māmamen bìxū jǐnkuài cǎiqǔ xíngdòng.",vi:"Tóm lại, chúng ta phải nhanh chóng hành động."},{tag:"Tình huống khác",zh:"总而言之，老师们必须尽快采取行动。",py:"Zǒng ér yán zhī, Lǎoshīmen bìxū jǐnkuài cǎiqǔ xíngdòng.",vi:"Tóm lại, chúng ta phải nhanh chóng hành động."},{tag:"Tình huống khác",zh:"总而言之，同学们们必须尽快采取行动。",py:"Zǒng ér yán zhī, Tóngxuémenmen bìxū jǐnkuài cǎiqǔ xíngdòng.",vi:"Tóm lại, chúng ta phải nhanh chóng hành động."},{tag:"Tình huống khác",zh:"总而言之，他们必须尽快采取行动。",py:"Zǒng ér yán zhī, Tāmen bìxū jǐnkuài cǎiqǔ xíngdòng.",vi:"Tóm lại, chúng ta phải nhanh chóng hành động."}],
    explanation:"用于总结前面的内容。",
    note:"正式书面表达。"
  },

  {
    id:"hsk6_186",
    pattern:"总的来说",
    title:"总的来说<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">zǒng de lái shuō</div>",
    structure:"总的来说，……",
    example:"总的来说，这次合作还是很成功的。",
    pinyin:"Zǒng de lái shuō, zhè cì hézuò háishi hěn chénggōng de.",
    meaning:"Nhìn chung, lần hợp tác này vẫn khá thành công.",
    examples:[{tag:"Câu gốc",zh:"总的来说，这次合作还是很成功的。",py:"Zǒng de lái shuō, zhè cì hézuò háishi hěn chénggōng de.",vi:"Nhìn chung, lần hợp tác này vẫn khá thành công."},{tag:"Ở nhà",zh:"妈妈告诉我：总的来说，这次合作还是很成功的。",py:"Māma gàosu wǒ: Zǒng de lái shuō, zhè cì hézuò háishi hěn chénggōng de.",vi:"Mẹ bảo tôi: Nhìn chung, lần hợp tác này vẫn khá thành công."},{tag:"Ở trường",zh:"在学校，总的来说，这次合作还是很成功的。",py:"Zài xuéxiào, Zǒng de lái shuō, zhè cì hézuò háishi hěn chénggōng de.",vi:"Ở trường, Nhìn chung, lần hợp tác này vẫn khá thành công."},{tag:"Lúc đi làm",zh:"上班的时候，总的来说，这次合作还是很成功的。",py:"Shàngbān de shíhou, Zǒng de lái shuō, zhè cì hézuò háishi hěn chénggōng de.",vi:"Lúc đi làm, Nhìn chung, lần hợp tác này vẫn khá thành công."}],
    explanation:"用于概括整体评价。",
    note:"比“总而言之”更自然口语化。"
  },

  {
    id:"hsk6_187",
    pattern:"换句话说",
    title:"换句话说<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">huàn jù huà shuō</div>",
    structure:"换句话说，……",
    example:"换句话说，我们还有时间重新考虑。",
    pinyin:"Huàn jù huà shuō, wǒmen hái yǒu shíjiān chóngxīn kǎolǜ.",
    meaning:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại.",
    examples:[{tag:"Câu gốc",zh:"换句话说，我们还有时间重新考虑。",py:"Huàn jù huà shuō, wǒmen hái yǒu shíjiān chóngxīn kǎolǜ.",vi:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại."},{tag:"Tình huống khác",zh:"换句话说，妈妈们还有时间重新考虑。",py:"Huàn jù huà shuō, Māmamen hái yǒu shíjiān chóngxīn kǎolǜ.",vi:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại."},{tag:"Tình huống khác",zh:"换句话说，老师们还有时间重新考虑。",py:"Huàn jù huà shuō, Lǎoshīmen hái yǒu shíjiān chóngxīn kǎolǜ.",vi:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại."},{tag:"Tình huống khác",zh:"换句话说，同学们们还有时间重新考虑。",py:"Huàn jù huà shuō, Tóngxuémenmen hái yǒu shíjiān chóngxīn kǎolǜ.",vi:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại."},{tag:"Tình huống khác",zh:"换句话说，他们还有时间重新考虑。",py:"Huàn jù huà shuō, Tāmen hái yǒu shíjiān chóngxīn kǎolǜ.",vi:"Nói cách khác, chúng ta vẫn còn thời gian suy nghĩ lại."}],
    explanation:"用于换一种方式表达相同意思。",
    note:"解释、总结常用。"
  },

  {
    id:"hsk6_188",
    pattern:"反过来",
    title:"反过来<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">fǎnguòlái</div>",
    structure:"反过来 + V",
    example:"我们也应该反过来考虑这个问题。",
    pinyin:"Wǒmen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",
    meaning:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại.",
    examples:[{tag:"Câu gốc",zh:"我们也应该反过来考虑这个问题。",py:"Wǒmen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",vi:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại."},{tag:"Tình huống khác",zh:"妈妈们也应该反过来考虑这个问题。",py:"Māmamen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",vi:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại."},{tag:"Tình huống khác",zh:"老师们也应该反过来考虑这个问题。",py:"Lǎoshīmen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",vi:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại."},{tag:"Tình huống khác",zh:"同学们们也应该反过来考虑这个问题。",py:"Tóngxuémenmen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",vi:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại."},{tag:"Tình huống khác",zh:"他们也应该反过来考虑这个问题。",py:"Tāmen yě yīnggāi fǎnguòlái kǎolǜ zhège wèntí.",vi:"Chúng ta cũng nên xem xét vấn đề này theo chiều ngược lại."}],
    explanation:"表示从相反角度考虑。",
    note:"常用于分析。"
  },

  {
    id:"hsk6_189",
    pattern:"与此同时",
    title:"与此同时<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǔcǐ tóngshí</div>",
    structure:"与此同时，……",
    example:"公司扩大了规模，与此同时也增加了管理成本。",
    pinyin:"Gōngsī kuòdà le guīmó, yǔcǐ tóngshí yě zēngjiā le guǎnlǐ chéngběn.",
    meaning:"Công ty mở rộng quy mô, đồng thời cũng tăng chi phí quản lý.",
    examples:[{tag:"Câu gốc",zh:"公司扩大了规模，与此同时也增加了管理成本。",py:"Gōngsī kuòdà le guīmó, yǔcǐ tóngshí yě zēngjiā le guǎnlǐ chéngběn.",vi:"Công ty mở rộng quy mô, đồng thời cũng tăng chi phí quản lý."},{tag:"Ở nhà",zh:"妈妈告诉我：公司扩大了规模，与此同时也增加了管理成本。",py:"Māma gàosu wǒ: Gōngsī kuòdà le guīmó, yǔcǐ tóngshí yě zēngjiā le guǎnlǐ chéngběn.",vi:"Mẹ bảo tôi: Công ty mở rộng quy mô, đồng thời cũng tăng chi phí quản lý."},{tag:"Ở trường",zh:"在学校，公司扩大了规模，与此同时也增加了管理成本。",py:"Zài xuéxiào, Gōngsī kuòdà le guīmó, yǔcǐ tóngshí yě zēngjiā le guǎnlǐ chéngběn.",vi:"Ở trường, Công ty mở rộng quy mô, đồng thời cũng tăng chi phí quản lý."},{tag:"Lúc đi làm",zh:"上班的时候，公司扩大了规模，与此同时也增加了管理成本。",py:"Shàngbān de shíhou, Gōngsī kuòdà le guīmó, yǔcǐ tóngshí yě zēngjiā le guǎnlǐ chéngběn.",vi:"Lúc đi làm, Công ty mở rộng quy mô, đồng thời cũng tăng chi phí quản lý."}],
    explanation:"表示两个情况同时发生。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_190",
    pattern:"此外",
    title:"此外<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">cǐwài</div>",
    structure:"此外，……",
    example:"此外，我们还需要考虑长期成本。",
    pinyin:"Cǐwài, wǒmen hái xūyào kǎolǜ chángqī chéngběn.",
    meaning:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn.",
    examples:[{tag:"Câu gốc",zh:"此外，我们还需要考虑长期成本。",py:"Cǐwài, wǒmen hái xūyào kǎolǜ chángqī chéngběn.",vi:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn."},{tag:"Tình huống khác",zh:"此外，妈妈们还需要考虑长期成本。",py:"Cǐwài, Māmamen hái xūyào kǎolǜ chángqī chéngběn.",vi:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn."},{tag:"Tình huống khác",zh:"此外，老师们还需要考虑长期成本。",py:"Cǐwài, Lǎoshīmen hái xūyào kǎolǜ chángqī chéngběn.",vi:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn."},{tag:"Tình huống khác",zh:"此外，同学们们还需要考虑长期成本。",py:"Cǐwài, Tóngxuémenmen hái xūyào kǎolǜ chángqī chéngběn.",vi:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn."},{tag:"Tình huống khác",zh:"此外，他们还需要考虑长期成本。",py:"Cǐwài, Tāmen hái xūyào kǎolǜ chángqī chéngběn.",vi:"Ngoài ra, chúng ta còn cần cân nhắc chi phí dài hạn."}],
    explanation:"表示补充另一项内容。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_191",
    pattern:"并非",
    title:"并非<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bìngfēi</div>",
    structure:"并非 + 判断",
    example:"成功并非偶然。",
    pinyin:"Chénggōng bìngfēi ǒurán.",
    meaning:"Thành công không phải là ngẫu nhiên.",
    examples:[{tag:"Câu gốc",zh:"成功并非偶然。",py:"Chénggōng bìngfēi ǒurán.",vi:"Thành công không phải là ngẫu nhiên."},{tag:"Ở nhà",zh:"妈妈告诉我：成功并非偶然。",py:"Māma gàosu wǒ: Chénggōng bìngfēi ǒurán.",vi:"Mẹ bảo tôi: Thành công không phải là ngẫu nhiên."},{tag:"Ở trường",zh:"在学校，成功并非偶然。",py:"Zài xuéxiào, Chénggōng bìngfēi ǒurán.",vi:"Ở trường, Thành công không phải là ngẫu nhiên."},{tag:"Lúc đi làm",zh:"上班的时候，成功并非偶然。",py:"Shàngbān de shíhou, Chénggōng bìngfēi ǒurán.",vi:"Lúc đi làm, Thành công không phải là ngẫu nhiên."}],
    explanation:"并非表示并不是，语气正式。",
    note:"常用于议论。"
  },

  {
    id:"hsk6_192",
    pattern:"并不",
    title:"并不 + V/Adj<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bìng bù</div>",
    structure:"并不 + V/Adj",
    example:"事情并不像我们想象的那么简单。",
    pinyin:"Shìqing bìng bú xiàng wǒmen xiǎngxiàng de nàme jiǎndān.",
    meaning:"Sự việc không đơn giản như chúng ta tưởng.",
    examples:[{tag:"Câu gốc",zh:"事情并不像我们想象的那么简单。",py:"Shìqing bìng bú xiàng wǒmen xiǎngxiàng de nàme jiǎndān.",vi:"Sự việc không đơn giản như chúng ta tưởng."},{tag:"Tình huống khác",zh:"事情并不像妈妈们想象的那么简单。",py:"Shìqing bìng bú xiàng Māmamen xiǎngxiàng de nàme jiǎndān.",vi:"Sự việc không đơn giản như chúng ta tưởng."},{tag:"Tình huống khác",zh:"事情并不像老师们想象的那么简单。",py:"Shìqing bìng bú xiàng Lǎoshīmen xiǎngxiàng de nàme jiǎndān.",vi:"Sự việc không đơn giản như chúng ta tưởng."},{tag:"Tình huống khác",zh:"事情并不像同学们们想象的那么简单。",py:"Shìqing bìng bú xiàng Tóngxuémenmen xiǎngxiàng de nàme jiǎndān.",vi:"Sự việc không đơn giản như chúng ta tưởng."},{tag:"Tình huống khác",zh:"事情并不像他们想象的那么简单。",py:"Shìqing bìng bú xiàng Tāmen xiǎngxiàng de nàme jiǎndān.",vi:"Sự việc không đơn giản như chúng ta tưởng."}],
    explanation:"并不加强否定语气。",
    note:"常用于纠正某种判断。"
  },

  {
    id:"hsk6_193",
    pattern:"并没有",
    title:"并没有 + V<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">bìng méiyǒu</div>",
    structure:"并没有 + V",
    example:"他并没有因为失败而放弃。",
    pinyin:"Tā bìng méiyǒu yīnwèi shībài ér fàngqì.",
    meaning:"Anh ấy không hề bỏ cuộc vì thất bại.",
    examples:[{tag:"Câu gốc",zh:"他并没有因为失败而放弃。",py:"Tā bìng méiyǒu yīnwèi shībài ér fàngqì.",vi:"Anh ấy không hề bỏ cuộc vì thất bại."},{tag:"Ở nhà",zh:"妈妈告诉我：他并没有因为失败而放弃。",py:"Māma gàosu wǒ: Tā bìng méiyǒu yīnwèi shībài ér fàngqì.",vi:"Mẹ bảo tôi: Anh ấy không hề bỏ cuộc vì thất bại."},{tag:"Ở trường",zh:"在学校，他并没有因为失败而放弃。",py:"Zài xuéxiào, Tā bìng méiyǒu yīnwèi shībài ér fàngqì.",vi:"Ở trường, Anh ấy không hề bỏ cuộc vì thất bại."},{tag:"Lúc đi làm",zh:"上班的时候，他并没有因为失败而放弃。",py:"Shàngbān de shíhou, Tā bìng méiyǒu yīnwèi shībài ér fàngqì.",vi:"Lúc đi làm, Anh ấy không hề bỏ cuộc vì thất bại."}],
    explanation:"加强对过去事实的否定。",
    note:"常用于对比预期。"
  },

  {
    id:"hsk6_194",
    pattern:"无非是",
    title:"无非是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">wúfēi shì</div>",
    structure:"无非是 + 名词/原因",
    example:"问题无非是时间和资金两个方面。",
    pinyin:"Wèntí wúfēi shì shíjiān hé zījīn liǎng gè fāngmiàn.",
    meaning:"Vấn đề chẳng qua chỉ ở hai mặt là thời gian và vốn.",
    examples:[{tag:"Câu gốc",zh:"问题无非是时间和资金两个方面。",py:"Wèntí wúfēi shì shíjiān hé zījīn liǎng gè fāngmiàn.",vi:"Vấn đề chẳng qua chỉ ở hai mặt là thời gian và vốn."},{tag:"Ở nhà",zh:"妈妈告诉我：问题无非是时间和资金两个方面。",py:"Māma gàosu wǒ: Wèntí wúfēi shì shíjiān hé zījīn liǎng gè fāngmiàn.",vi:"Mẹ bảo tôi: Vấn đề chẳng qua chỉ ở hai mặt là thời gian và vốn."},{tag:"Ở trường",zh:"在学校，问题无非是时间和资金两个方面。",py:"Zài xuéxiào, Wèntí wúfēi shì shíjiān hé zījīn liǎng gè fāngmiàn.",vi:"Ở trường, Vấn đề chẳng qua chỉ ở hai mặt là thời gian và vốn."},{tag:"Lúc đi làm",zh:"上班的时候，问题无非是时间和资金两个方面。",py:"Shàngbān de shíhou, Wèntí wúfēi shì shíjiān hé zījīn liǎng gè fāngmiàn.",vi:"Lúc đi làm, Vấn đề chẳng qua chỉ ở hai mặt là thời gian và vốn."}],
    explanation:"表示不过是、只是。",
    note:"常用于分析原因。"
  },

  {
    id:"hsk6_195",
    pattern:"不过是",
    title:"不过是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">búguò shì</div>",
    structure:"不过是 + 名词/短语",
    example:"这不过是一个开始而已。",
    pinyin:"Zhè búguò shì yí ge kāishǐ éryǐ.",
    meaning:"Đây chẳng qua mới chỉ là một khởi đầu mà thôi.",
    examples:[{tag:"Câu gốc",zh:"这不过是一个开始而已。",py:"Zhè búguò shì yí ge kāishǐ éryǐ.",vi:"Đây chẳng qua mới chỉ là một khởi đầu mà thôi."},{tag:"Ở nhà",zh:"妈妈告诉我：这不过是一个开始而已。",py:"Māma gàosu wǒ: Zhè búguò shì yí ge kāishǐ éryǐ.",vi:"Mẹ bảo tôi: Đây chẳng qua mới chỉ là một khởi đầu mà thôi."},{tag:"Ở trường",zh:"在学校，这不过是一个开始而已。",py:"Zài xuéxiào, Zhè búguò shì yí ge kāishǐ éryǐ.",vi:"Ở trường, Đây chẳng qua mới chỉ là một khởi đầu mà thôi."},{tag:"Lúc đi làm",zh:"上班的时候，这不过是一个开始而已。",py:"Shàngbān de shíhou, Zhè búguò shì yí ge kāishǐ éryǐ.",vi:"Lúc đi làm, Đây chẳng qua mới chỉ là một khởi đầu mà thôi."}],
    explanation:"表示程度或意义没有想象中那么大。",
    note:"常与而已搭配。"
  },

  {
    id:"hsk6_196",
    pattern:"何况",
    title:"何况<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">hékuàng</div>",
    structure:"A，何况 B",
    example:"连专家都觉得困难，何况我们呢？",
    pinyin:"Lián zhuānjiā dōu juéde kùnnan, hékuàng wǒmen ne?",
    meaning:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?",
    examples:[{tag:"Câu gốc",zh:"连专家都觉得困难，何况我们呢？",py:"Lián zhuānjiā dōu juéde kùnnan, hékuàng wǒmen ne?",vi:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?"},{tag:"Tình huống khác",zh:"连专家都觉得困难，何况妈妈们呢？",py:"Lián zhuānjiā dōu juéde kùnnan, hékuàng Māmamen ne?",vi:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?"},{tag:"Tình huống khác",zh:"连专家都觉得困难，何况老师们呢？",py:"Lián zhuānjiā dōu juéde kùnnan, hékuàng Lǎoshīmen ne?",vi:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?"},{tag:"Tình huống khác",zh:"连专家都觉得困难，何况同学们们呢？",py:"Lián zhuānjiā dōu juéde kùnnan, hékuàng Tóngxuémenmen ne?",vi:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?"},{tag:"Tình huống khác",zh:"连专家都觉得困难，何况他们呢？",py:"Lián zhuānjiā dōu juéde kùnnan, hékuàng Tāmen ne?",vi:"Ngay cả chuyên gia còn thấy khó, huống chi chúng ta?"}],
    explanation:"表示递进，后项程度更强。",
    note:"常用于反问。"
  },

  {
    id:"hsk6_197",
    pattern:"况且",
    title:"况且<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">kuàngqiě</div>",
    structure:"A，况且 B",
    example:"我不想去，况且今天还有很多事情要做。",
    pinyin:"Wǒ bù xiǎng qù, kuàngqiě jīntiān hái yǒu hěn duō shìqing yào zuò.",
    meaning:"Tôi không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm.",
    examples:[{tag:"Câu gốc",zh:"我不想去，况且今天还有很多事情要做。",py:"Wǒ bù xiǎng qù, kuàngqiě jīntiān hái yǒu hěn duō shìqing yào zuò.",vi:"Tôi không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm."},{tag:"Tình huống khác",zh:"妈妈不想去，况且今天还有很多事情要做。",py:"Māma bù xiǎng qù, kuàngqiě jīntiān hái yǒu hěn duō shìqing yào zuò.",vi:"Mẹ không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm."},{tag:"Tình huống khác",zh:"老师不想去，况且今天还有很多事情要做。",py:"Lǎoshī bù xiǎng qù, kuàngqiě jīntiān hái yǒu hěn duō shìqing yào zuò.",vi:"Thầy không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm."},{tag:"Tình huống khác",zh:"同学们不想去，况且今天还有很多事情要做。",py:"Tóngxuémen bù xiǎng qù, kuàngqiě jīntiān hái yǒu hěn duō shìqing yào zuò.",vi:"Các bạn không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm."},{tag:"Tình huống khác",zh:"我不想去，况且昨天还有很多事情要做。",py:"Wǒ bù xiǎng qù, kuàngqiě Zuótiān hái yǒu hěn duō shìqing yào zuò.",vi:"Tôi không muốn đi, hơn nữa hôm nay còn rất nhiều việc phải làm."}],
    explanation:"表示进一步补充理由。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_198",
    pattern:"尤其是",
    title:"尤其是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yóuqí shì</div>",
    structure:"尤其是 + 名词",
    example:"我喜欢这里的春天，尤其是樱花开放的时候。",
    pinyin:"Wǒ xǐhuān zhèlǐ de chūntiān, yóuqí shì yīnghuā kāifàng de shíhou.",
    meaning:"Tôi thích mùa xuân ở đây, đặc biệt là khi hoa anh đào nở.",
    examples:[{tag:"Câu gốc",zh:"我喜欢这里的春天，尤其是樱花开放的时候。",py:"Wǒ xǐhuān zhèlǐ de chūntiān, yóuqí shì yīnghuā kāifàng de shíhou.",vi:"Tôi thích mùa xuân ở đây, đặc biệt là khi hoa anh đào nở."},{tag:"Tình huống khác",zh:"妈妈喜欢这里的春天，尤其是樱花开放的时候。",py:"Māma xǐhuān zhèlǐ de chūntiān, yóuqí shì yīnghuā kāifàng de shíhou.",vi:"Mẹ thích mùa xuân ở đây, đặc biệt là khi hoa anh đào nở."},{tag:"Tình huống khác",zh:"老师喜欢这里的春天，尤其是樱花开放的时候。",py:"Lǎoshī xǐhuān zhèlǐ de chūntiān, yóuqí shì yīnghuā kāifàng de shíhou.",vi:"Thầy thích mùa xuân ở đây, đặc biệt là khi hoa anh đào nở."},{tag:"Tình huống khác",zh:"同学们喜欢这里的春天，尤其是樱花开放的时候。",py:"Tóngxuémen xǐhuān zhèlǐ de chūntiān, yóuqí shì yīnghuā kāifàng de shíhou.",vi:"Các bạn thích mùa xuân ở đây, đặc biệt là khi hoa anh đào nở."}],
    explanation:"用于突出某个对象。",
    note:"表示强调。"
  },

  {
    id:"hsk6_199",
    pattern:"乃至",
    title:"乃至<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">nǎizhì</div>",
    structure:"A、B乃至C",
    example:"这种影响甚至扩展到了亚洲乃至全世界。",
    pinyin:"Zhè zhǒng yǐngxiǎng shènzhì kuòzhǎn dào le Yàzhōu nǎizhì quán shìjiè.",
    meaning:"Ảnh hưởng này thậm chí đã mở rộng đến châu Á và thậm chí toàn thế giới.",
    examples:[{tag:"Câu gốc",zh:"这种影响甚至扩展到了亚洲乃至全世界。",py:"Zhè zhǒng yǐngxiǎng shènzhì kuòzhǎn dào le Yàzhōu nǎizhì quán shìjiè.",vi:"Ảnh hưởng này thậm chí đã mở rộng đến châu Á và thậm chí toàn thế giới."},{tag:"Ở nhà",zh:"妈妈告诉我：这种影响甚至扩展到了亚洲乃至全世界。",py:"Māma gàosu wǒ: Zhè zhǒng yǐngxiǎng shènzhì kuòzhǎn dào le Yàzhōu nǎizhì quán shìjiè.",vi:"Mẹ bảo tôi: Ảnh hưởng này thậm chí đã mở rộng đến châu Á và thậm chí toàn thế giới."},{tag:"Ở trường",zh:"在学校，这种影响甚至扩展到了亚洲乃至全世界。",py:"Zài xuéxiào, Zhè zhǒng yǐngxiǎng shènzhì kuòzhǎn dào le Yàzhōu nǎizhì quán shìjiè.",vi:"Ở trường, Ảnh hưởng này thậm chí đã mở rộng đến châu Á và thậm chí toàn thế giới."},{tag:"Lúc đi làm",zh:"上班的时候，这种影响甚至扩展到了亚洲乃至全世界。",py:"Shàngbān de shíhou, Zhè zhǒng yǐngxiǎng shènzhì kuòzhǎn dào le Yàzhōu nǎizhì quán shìjiè.",vi:"Lúc đi làm, Ảnh hưởng này thậm chí đã mở rộng đến châu Á và thậm chí toàn thế giới."}],
    explanation:"乃至表示范围进一步扩大。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_200",
    pattern:"甚至",
    title:"甚至<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shènzhì</div>",
    structure:"甚至 + 更极端情况",
    example:"他每天工作十几个小时，甚至周末也不休息。",
    pinyin:"Tā měitiān gōngzuò shí jǐ gè xiǎoshí, shènzhì zhōumò yě bù xiūxi.",
    meaning:"Anh ấy làm việc hơn mười giờ mỗi ngày, thậm chí cuối tuần cũng không nghỉ.",
    examples:[{tag:"Câu gốc",zh:"他每天工作十几个小时，甚至周末也不休息。",py:"Tā měitiān gōngzuò shí jǐ gè xiǎoshí, shènzhì zhōumò yě bù xiūxi.",vi:"Anh ấy làm việc hơn mười giờ mỗi ngày, thậm chí cuối tuần cũng không nghỉ."},{tag:"Ở nhà",zh:"妈妈告诉我：他每天工作十几个小时，甚至周末也不休息。",py:"Māma gàosu wǒ: Tā měitiān gōngzuò shí jǐ gè xiǎoshí, shènzhì zhōumò yě bù xiūxi.",vi:"Mẹ bảo tôi: Anh ấy làm việc hơn mười giờ mỗi ngày, thậm chí cuối tuần cũng không nghỉ."},{tag:"Ở trường",zh:"在学校，他每天工作十几个小时，甚至周末也不休息。",py:"Zài xuéxiào, Tā měitiān gōngzuò shí jǐ gè xiǎoshí, shènzhì zhōumò yě bù xiūxi.",vi:"Ở trường, Anh ấy làm việc hơn mười giờ mỗi ngày, thậm chí cuối tuần cũng không nghỉ."},{tag:"Lúc đi làm",zh:"上班的时候，他每天工作十几个小时，甚至周末也不休息。",py:"Shàngbān de shíhou, Tā měitiān gōngzuò shí jǐ gè xiǎoshí, shènzhì zhōumò yě bù xiūxi.",vi:"Lúc đi làm, Anh ấy làm việc hơn mười giờ mỗi ngày, thậm chí cuối tuần cũng không nghỉ."}],
    explanation:"表示递进到更极端的情况。",
    note:"常与连、都、也搭配。"
  },

  {
    id:"hsk6_201",
    pattern:"与其……不如……",
    title:"与其……不如……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǔqí……bùrú……</div>",
    structure:"与其 A，不如 B",
    example:"与其一直担心，不如主动想办法解决。",
    pinyin:"Yǔqí yìzhí dānxīn, bùrú zhǔdòng xiǎng bànfǎ jiějué.",
    meaning:"Thay vì cứ lo lắng mãi, chi bằng chủ động nghĩ cách giải quyết.",
    examples:[{tag:"Câu gốc",zh:"与其一直担心，不如主动想办法解决。",py:"Yǔqí yìzhí dānxīn, bùrú zhǔdòng xiǎng bànfǎ jiějué.",vi:"Thay vì cứ lo lắng mãi, chi bằng chủ động nghĩ cách giải quyết."},{tag:"Ở nhà",zh:"妈妈告诉我：与其一直担心，不如主动想办法解决。",py:"Māma gàosu wǒ: Yǔqí yìzhí dānxīn, bùrú zhǔdòng xiǎng bànfǎ jiějué.",vi:"Mẹ bảo tôi: Thay vì cứ lo lắng mãi, chi bằng chủ động nghĩ cách giải quyết."},{tag:"Ở trường",zh:"在学校，与其一直担心，不如主动想办法解决。",py:"Zài xuéxiào, Yǔqí yìzhí dānxīn, bùrú zhǔdòng xiǎng bànfǎ jiějué.",vi:"Ở trường, Thay vì cứ lo lắng mãi, chi bằng chủ động nghĩ cách giải quyết."},{tag:"Lúc đi làm",zh:"上班的时候，与其一直担心，不如主动想办法解决。",py:"Shàngbān de shíhou, Yǔqí yìzhí dānxīn, bùrú zhǔdòng xiǎng bànfǎ jiějué.",vi:"Lúc đi làm, Thay vì cứ lo lắng mãi, chi bằng chủ động nghĩ cách giải quyết."}],
    explanation:"表示比较两个选择，更倾向后者。",
    note:"常用于建议。"
  },

  {
    id:"hsk6_202",
    pattern:"宁可……也不……",
    title:"宁可……也不……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">nìngkě……yě bù……</div>",
    structure:"宁可 A，也不 B",
    example:"我宁可多花一点时间，也不愿意降低质量。",
    pinyin:"Wǒ nìngkě duō huā yìdiǎn shíjiān, yě bù yuànyì jiàngdī zhìliàng.",
    meaning:"Tôi thà tốn thêm chút thời gian cũng không muốn hạ thấp chất lượng.",
    examples:[{tag:"Câu gốc",zh:"我宁可多花一点时间，也不愿意降低质量。",py:"Wǒ nìngkě duō huā yìdiǎn shíjiān, yě bù yuànyì jiàngdī zhìliàng.",vi:"Tôi thà tốn thêm chút thời gian cũng không muốn hạ thấp chất lượng."},{tag:"Tình huống khác",zh:"妈妈宁可多花一点时间，也不愿意降低质量。",py:"Māma nìngkě duō huā yìdiǎn shíjiān, yě bù yuànyì jiàngdī zhìliàng.",vi:"Mẹ thà tốn thêm chút thời gian cũng không muốn hạ thấp chất lượng."},{tag:"Tình huống khác",zh:"老师宁可多花一点时间，也不愿意降低质量。",py:"Lǎoshī nìngkě duō huā yìdiǎn shíjiān, yě bù yuànyì jiàngdī zhìliàng.",vi:"Thầy thà tốn thêm chút thời gian cũng không muốn hạ thấp chất lượng."},{tag:"Tình huống khác",zh:"同学们宁可多花一点时间，也不愿意降低质量。",py:"Tóngxuémen nìngkě duō huā yìdiǎn shíjiān, yě bù yuànyì jiàngdī zhìliàng.",vi:"Các bạn thà tốn thêm chút thời gian cũng không muốn hạ thấp chất lượng."}],
    explanation:"表示在两个选择中坚决选择前者。",
    note:"语气较强。"
  },

  {
    id:"hsk6_203",
    pattern:"与其……倒不如……",
    title:"与其……倒不如……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yǔqí……dàobùrú……</div>",
    structure:"与其 A，倒不如 B",
    example:"与其等待机会，倒不如自己创造机会。",
    pinyin:"Yǔqí děngdài jīhuì, dàobùrú zìjǐ chuàngzào jīhuì.",
    meaning:"Thay vì chờ cơ hội, chi bằng tự mình tạo ra cơ hội.",
    examples:[{tag:"Câu gốc",zh:"与其等待机会，倒不如自己创造机会。",py:"Yǔqí děngdài jīhuì, dàobùrú zìjǐ chuàngzào jīhuì.",vi:"Thay vì chờ cơ hội, chi bằng tự mình tạo ra cơ hội."},{tag:"Ở nhà",zh:"妈妈告诉我：与其等待机会，倒不如自己创造机会。",py:"Māma gàosu wǒ: Yǔqí děngdài jīhuì, dàobùrú zìjǐ chuàngzào jīhuì.",vi:"Mẹ bảo tôi: Thay vì chờ cơ hội, chi bằng tự mình tạo ra cơ hội."},{tag:"Ở trường",zh:"在学校，与其等待机会，倒不如自己创造机会。",py:"Zài xuéxiào, Yǔqí děngdài jīhuì, dàobùrú zìjǐ chuàngzào jīhuì.",vi:"Ở trường, Thay vì chờ cơ hội, chi bằng tự mình tạo ra cơ hội."},{tag:"Lúc đi làm",zh:"上班的时候，与其等待机会，倒不如自己创造机会。",py:"Shàngbān de shíhou, Yǔqí děngdài jīhuì, dàobùrú zìjǐ chuàngzào jīhuì.",vi:"Lúc đi làm, Thay vì chờ cơ hội, chi bằng tự mình tạo ra cơ hội."}],
    explanation:"加强“不如”后的选择。",
    note:"常用于劝说。"
  },

  {
    id:"hsk6_204",
    pattern:"一方面……另一方面……",
    title:"一方面……另一方面……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yì fāngmiàn……lìng yì fāngmiàn……</div>",
    structure:"一方面 A，另一方面 B",
    example:"一方面要提高效率，另一方面也要保证质量。",
    pinyin:"Yì fāngmiàn yào tígāo xiàolǜ, lìng yì fāngmiàn yě yào bǎozhèng zhìliàng.",
    meaning:"Một mặt phải nâng cao hiệu suất, mặt khác cũng phải đảm bảo chất lượng.",
    examples:[{tag:"Câu gốc",zh:"一方面要提高效率，另一方面也要保证质量。",py:"Yì fāngmiàn yào tígāo xiàolǜ, lìng yì fāngmiàn yě yào bǎozhèng zhìliàng.",vi:"Một mặt phải nâng cao hiệu suất, mặt khác cũng phải đảm bảo chất lượng."},{tag:"Ở nhà",zh:"妈妈告诉我：一方面要提高效率，另一方面也要保证质量。",py:"Māma gàosu wǒ: Yì fāngmiàn yào tígāo xiàolǜ, lìng yì fāngmiàn yě yào bǎozhèng zhìliàng.",vi:"Mẹ bảo tôi: Một mặt phải nâng cao hiệu suất, mặt khác cũng phải đảm bảo chất lượng."},{tag:"Ở trường",zh:"在学校，一方面要提高效率，另一方面也要保证质量。",py:"Zài xuéxiào, Yì fāngmiàn yào tígāo xiàolǜ, lìng yì fāngmiàn yě yào bǎozhèng zhìliàng.",vi:"Ở trường, Một mặt phải nâng cao hiệu suất, mặt khác cũng phải đảm bảo chất lượng."},{tag:"Lúc đi làm",zh:"上班的时候，一方面要提高效率，另一方面也要保证质量。",py:"Shàngbān de shíhou, Yì fāngmiàn yào tígāo xiàolǜ, lìng yì fāngmiàn yě yào bǎozhèng zhìliàng.",vi:"Lúc đi làm, Một mặt phải nâng cao hiệu suất, mặt khác cũng phải đảm bảo chất lượng."}],
    explanation:"从两个方面同时说明问题。",
    note:"议论文常用。"
  },

  {
    id:"hsk6_205",
    pattern:"首先……其次……",
    title:"首先……其次……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shǒuxiān……qícì……</div>",
    structure:"首先 A，其次 B",
    example:"首先要确认事实，其次再讨论解决办法。",
    pinyin:"Shǒuxiān yào quèrèn shìshí, qícì zài tǎolùn jiějué bànfǎ.",
    meaning:"Trước hết cần xác nhận sự thật, sau đó mới bàn cách giải quyết.",
    examples:[{tag:"Câu gốc",zh:"首先要确认事实，其次再讨论解决办法。",py:"Shǒuxiān yào quèrèn shìshí, qícì zài tǎolùn jiějué bànfǎ.",vi:"Trước hết cần xác nhận sự thật, sau đó mới bàn cách giải quyết."},{tag:"Ở nhà",zh:"妈妈告诉我：首先要确认事实，其次再讨论解决办法。",py:"Māma gàosu wǒ: Shǒuxiān yào quèrèn shìshí, qícì zài tǎolùn jiějué bànfǎ.",vi:"Mẹ bảo tôi: Trước hết cần xác nhận sự thật, sau đó mới bàn cách giải quyết."},{tag:"Ở trường",zh:"在学校，首先要确认事实，其次再讨论解决办法。",py:"Zài xuéxiào, Shǒuxiān yào quèrèn shìshí, qícì zài tǎolùn jiějué bànfǎ.",vi:"Ở trường, Trước hết cần xác nhận sự thật, sau đó mới bàn cách giải quyết."},{tag:"Lúc đi làm",zh:"上班的时候，首先要确认事实，其次再讨论解决办法。",py:"Shàngbān de shíhou, Shǒuxiān yào quèrèn shìshí, qícì zài tǎolùn jiějué bànfǎ.",vi:"Lúc đi làm, Trước hết cần xác nhận sự thật, sau đó mới bàn cách giải quyết."}],
    explanation:"按顺序列举多个方面。",
    note:"正式表达常见。"
  },

  {
    id:"hsk6_206",
    pattern:"首先……然后……",
    title:"首先……然后……<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">shǒuxiān……ránhòu……</div>",
    structure:"首先 A，然后 B",
    example:"首先检查设备，然后再开始工作。",
    pinyin:"Shǒuxiān jiǎnchá shèbèi, ránhòu zài kāishǐ gōngzuò.",
    meaning:"Trước tiên kiểm tra thiết bị, sau đó mới bắt đầu làm việc.",
    examples:[{tag:"Câu gốc",zh:"首先检查设备，然后再开始工作。",py:"Shǒuxiān jiǎnchá shèbèi, ránhòu zài kāishǐ gōngzuò.",vi:"Trước tiên kiểm tra thiết bị, sau đó mới bắt đầu làm việc."},{tag:"Ở nhà",zh:"妈妈告诉我：首先检查设备，然后再开始工作。",py:"Māma gàosu wǒ: Shǒuxiān jiǎnchá shèbèi, ránhòu zài kāishǐ gōngzuò.",vi:"Mẹ bảo tôi: Trước tiên kiểm tra thiết bị, sau đó mới bắt đầu làm việc."},{tag:"Ở trường",zh:"在学校，首先检查设备，然后再开始工作。",py:"Zài xuéxiào, Shǒuxiān jiǎnchá shèbèi, ránhòu zài kāishǐ gōngzuò.",vi:"Ở trường, Trước tiên kiểm tra thiết bị, sau đó mới bắt đầu làm việc."},{tag:"Lúc đi làm",zh:"上班的时候，首先检查设备，然后再开始工作。",py:"Shàngbān de shíhou, Shǒuxiān jiǎnchá shèbèi, ránhòu zài kāishǐ gōngzuò.",vi:"Lúc đi làm, Trước tiên kiểm tra thiết bị, sau đó mới bắt đầu làm việc."}],
    explanation:"表示动作顺序。",
    note:"实用性很强。"
  },

  {
    id:"hsk6_207",
    pattern:"于是",
    title:"于是<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yúshì</div>",
    structure:"A，于是B",
    example:"雨越下越大，于是我们决定提前回家。",
    pinyin:"Yǔ yuè xià yuè dà, yúshì wǒmen juédìng tíqián huí jiā.",
    meaning:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm.",
    examples:[{tag:"Câu gốc",zh:"雨越下越大，于是我们决定提前回家。",py:"Yǔ yuè xià yuè dà, yúshì wǒmen juédìng tíqián huí jiā.",vi:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm."},{tag:"Tình huống khác",zh:"雨越下越大，于是妈妈们决定提前回家。",py:"Yǔ yuè xià yuè dà, yúshì Māmamen juédìng tíqián huí jiā.",vi:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm."},{tag:"Tình huống khác",zh:"雨越下越大，于是老师们决定提前回家。",py:"Yǔ yuè xià yuè dà, yúshì Lǎoshīmen juédìng tíqián huí jiā.",vi:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm."},{tag:"Tình huống khác",zh:"雨越下越大，于是同学们们决定提前回家。",py:"Yǔ yuè xià yuè dà, yúshì Tóngxuémenmen juédìng tíqián huí jiā.",vi:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm."},{tag:"Tình huống khác",zh:"雨越下越大，于是他们决定提前回家。",py:"Yǔ yuè xià yuè dà, yúshì Tāmen juédìng tíqián huí jiā.",vi:"Mưa càng lúc càng lớn, vì vậy chúng tôi quyết định về nhà sớm."}],
    explanation:"表示由前一情况自然产生后一个结果或行动。",
    note:"常用于叙事。"
  },

  {
    id:"hsk6_208",
    pattern:"从而",
    title:"从而<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">cóng'ér</div>",
    structure:"A，从而B",
    example:"我们不断改进方法，从而提高了工作效率。",
    pinyin:"Wǒmen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",
    meaning:"Chúng tôi không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc.",
    examples:[{tag:"Câu gốc",zh:"我们不断改进方法，从而提高了工作效率。",py:"Wǒmen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",vi:"Chúng tôi không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc."},{tag:"Tình huống khác",zh:"妈妈们不断改进方法，从而提高了工作效率。",py:"Māmamen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",vi:"Chúng tôi không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc."},{tag:"Tình huống khác",zh:"老师们不断改进方法，从而提高了工作效率。",py:"Lǎoshīmen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",vi:"Chúng tôi không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc."},{tag:"Tình huống khác",zh:"同学们们不断改进方法，从而提高了工作效率。",py:"Tóngxuémenmen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",vi:"Chúng tôi không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc."},{tag:"Tình huống khác",zh:"他们不断改进方法，从而提高了工作效率。",py:"Tāmen bùduàn gǎijìn fāngfǎ, cóng'ér tígāo le gōngzuò xiàolǜ.",vi:"Họ không ngừng cải tiến phương pháp, từ đó nâng cao hiệu suất công việc."}],
    explanation:"表示前项行动产生后项结果。",
    note:"书面语常见。"
  },

  {
    id:"hsk6_209",
    pattern:"因而",
    title:"因而<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">yīn'ér</div>",
    structure:"A，因而B",
    example:"天气突然恶化，因而航班被迫取消。",
    pinyin:"Tiānqì tūrán èhuà, yīn'ér hángbān bèipò qǔxiāo.",
    meaning:"Thời tiết đột nhiên xấu đi, vì vậy chuyến bay buộc phải hủy.",
    examples:[{tag:"Câu gốc",zh:"天气突然恶化，因而航班被迫取消。",py:"Tiānqì tūrán èhuà, yīn'ér hángbān bèipò qǔxiāo.",vi:"Thời tiết đột nhiên xấu đi, vì vậy chuyến bay buộc phải hủy."},{tag:"Ở nhà",zh:"妈妈告诉我：天气突然恶化，因而航班被迫取消。",py:"Māma gàosu wǒ: Tiānqì tūrán èhuà, yīn'ér hángbān bèipò qǔxiāo.",vi:"Mẹ bảo tôi: Thời tiết đột nhiên xấu đi, vì vậy chuyến bay buộc phải hủy."},{tag:"Ở trường",zh:"在学校，天气突然恶化，因而航班被迫取消。",py:"Zài xuéxiào, Tiānqì tūrán èhuà, yīn'ér hángbān bèipò qǔxiāo.",vi:"Ở trường, Thời tiết đột nhiên xấu đi, vì vậy chuyến bay buộc phải hủy."},{tag:"Lúc đi làm",zh:"上班的时候，天气突然恶化，因而航班被迫取消。",py:"Shàngbān de shíhou, Tiānqì tūrán èhuà, yīn'ér hángbān bèipò qǔxiāo.",vi:"Lúc đi làm, Thời tiết đột nhiên xấu đi, vì vậy chuyến bay buộc phải hủy."}],
    explanation:"表示因果关系。",
    note:"正式书面语。"
  },

  {
    id:"hsk6_210",
    pattern:"可见",
    title:"可见<div style=\"margin-top:5px;font-size:14px;opacity:.78;\">kějiàn</div>",
    structure:"A，可见B",
    example:"他每天坚持练习，可见他对这件事非常认真。",
    pinyin:"Tā měitiān jiānchí liànxí, kějiàn tā duì zhè jiàn shì fēicháng rènzhēn.",
    meaning:"Anh ấy kiên trì luyện tập mỗi ngày, có thể thấy anh ấy rất nghiêm túc với việc này.",
    explanation:"根据前面的事实得出结论。",
    note:"书面语常用。"
  }

],

    7: [

      {
        id:"hsk7_01",
        pattern:"不但……而且……",
        title:"不但……而且…… — không những… mà còn…",
        structure:"不但 A，而且 B",
        example:"他不但会说汉语，而且写得也很好。",
        pinyin:"Tā búdàn huì shuō Hànyǔ, érqiě xiě de yě hěn hǎo.",
        meaning:"Anh ấy không những nói được tiếng Trung, mà viết cũng rất tốt.",
        explanation:"Mẫu này nối hai ý cùng chiều. Ý sau mạnh hơn hoặc bổ sung cho ý trước. A và B phải cùng hướng: cả hai đều tốt, hoặc cả hai đều khó. Không dùng để nối hai ý trái nhau.",
        note:"Không đảo thành 而且 đứng trước 不但. Nếu muốn nói ý trái, dùng 虽然……但是…….",
        examples:[
          {tag:"Câu gốc", zh:"他不但会说汉语，而且写得也很好。", py:"Tā búdàn huì shuō Hànyǔ, érqiě xiě de yě hěn hǎo.", vi:"Anh ấy không những nói được tiếng Trung, mà viết cũng rất tốt."},
          {tag:"Việc học", zh:"这道题不但难，而且时间也不够。", py:"Zhè dào tí búdàn nán, érqiě shíjiān yě bú gòu.", vi:"Bài này không những khó, mà thời gian cũng không đủ."},
          {tag:"Đời sống", zh:"这家店不但便宜，而且离学校很近。", py:"Zhè jiā diàn búdàn piányi, érqiě lí xuéxiào hěn jìn.", vi:"Quán này không những rẻ, mà còn rất gần trường."}
        ]
      },

      {
        id:"hsk7_02",
        pattern:"既然……就……",
        title:"既然……就…… — đã… thì…",
        structure:"既然 A，就 B",
        example:"既然决定了，就认真做完。",
        pinyin:"Jìrán juédìng le, jiù rènzhēn zuò wán.",
        meaning:"Đã quyết định rồi thì hãy làm cho xong một cách nghiêm túc.",
        explanation:"既然 nêu một việc đã thành sự thật. 就 nêu việc nên làm vì sự thật đó. Khác với 如果: 如果 là giả định chưa xảy ra, 既然 là việc người nghe đã chấp nhận.",
        note:"不要把 既然 dùng cho việc còn đang đoán.",
        examples:[
          {tag:"Câu gốc", zh:"既然决定了，就认真做完。", py:"Jìrán juédìng le, jiù rènzhēn zuò wán.", vi:"Đã quyết định rồi thì hãy làm cho xong một cách nghiêm túc."},
          {tag:"Lời khuyên", zh:"既然来了，就多坐一会儿。", py:"Jìrán lái le, jiù duō zuò yíhuìr.", vi:"Đã đến rồi thì ngồi thêm một lúc."},
          {tag:"Công việc", zh:"既然发现问题了，就马上改。", py:"Jìrán fāxiàn wèntí le, jiù mǎshàng gǎi.", vi:"Đã phát hiện ra vấn đề thì sửa ngay."}
        ]
      },

      {
        id:"hsk7_03",
        pattern:"即使……也……",
        title:"即使……也…… — ngay cả nếu… cũng…",
        structure:"即使 A，也 B",
        example:"即使下雨，我们也去。",
        pinyin:"Jíshǐ xià yǔ, wǒmen yě qù.",
        meaning:"Ngay cả nếu trời mưa, chúng tôi cũng đi.",
        explanation:"A là tình huống khó hoặc giả định. B là kết quả không đổi. Mẫu này nhấn mạnh quyết tâm hoặc quy luật không bị A làm thay đổi.",
        note:"也 thường đứng trước động từ của vế sau, không đứng đầu câu.",
        examples:[
          {tag:"Câu gốc", zh:"即使下雨，我们也去。", py:"Jíshǐ xià yǔ, wǒmen yě qù.", vi:"Ngay cả nếu trời mưa, chúng tôi cũng đi."},
          {tag:"Học tập", zh:"即使很累，他也把作业写完。", py:"Jíshǐ hěn lèi, tā yě bǎ zuòyè xiě wán.", vi:"Dù rất mệt, anh ấy cũng viết xong bài tập."},
          {tag:"Quy tắc", zh:"即使是朋友，也不能迟到。", py:"Jíshǐ shì péngyou, yě bù néng chídào.", vi:"Dù là bạn bè cũng không được đến muộn."}
        ]
      },

      {
        id:"hsk7_04",
        pattern:"无论……都……",
        title:"无论……都…… — bất kể… đều…",
        structure:"无论 A，都 B",
        example:"无论多忙，他都会给你回消息。",
        pinyin:"Wúlùn duō máng, tā dōu huì gěi nǐ huí xiāoxi.",
        meaning:"Dù bận đến đâu, anh ấy cũng sẽ trả lời tin cho bạn.",
        explanation:"无论 mở ra mọi trường hợp trong một phạm vi. 都 chốt kết quả áp dụng cho tất cả các trường hợp đó. Sau 无论 thường có từ hỏi hoặc cách nói lựa chọn như 多忙、谁、A还是B.",
        note:"Thiếu 都 thì câu mất chỗ nhấn mạnh “đều”.",
        examples:[
          {tag:"Câu gốc", zh:"无论多忙，他都会给你回消息。", py:"Wúlùn duō máng, tā dōu huì gěi nǐ huí xiāoxi.", vi:"Dù bận đến đâu, anh ấy cũng sẽ trả lời tin cho bạn."},
          {tag:"Lựa chọn", zh:"无论坐公交还是走路，我都按时到。", py:"Wúlùn zuò gōngjiāo háishi zǒulù, wǒ dōu ànshí dào.", vi:"Dù đi xe buýt hay đi bộ, tôi đều đến đúng giờ."},
          {tag:"Người", zh:"无论谁来问，都要说清楚。", py:"Wúlùn shéi lái wèn, dōu yào shuō qīngchu.", vi:"Bất kể ai đến hỏi cũng phải nói cho rõ."}
        ]
      },

      {
        id:"hsk7_05",
        pattern:"与其……不如……",
        title:"与其……不如…… — thay vì… chi bằng…",
        structure:"与其 A，不如 B",
        example:"与其抱怨，不如现在就开始。",
        pinyin:"Yǔqí bàoyuàn, bùrú xiànzài jiù kāishǐ.",
        meaning:"Thay vì phàn nàn, chi bằng bắt đầu ngay bây giờ.",
        explanation:"Người nói so hai cách và chọn B. A là cách kém hơn, B là cách được đề nghị. Đây là lời khuyên, không phải câu kể trung lập.",
        note:"B là lựa chọn được nghiêng về, không phải vế bị loại.",
        examples:[
          {tag:"Câu gốc", zh:"与其抱怨，不如现在就开始。", py:"Yǔqí bàoyuàn, bùrú xiànzài jiù kāishǐ.", vi:"Thay vì phàn nàn, chi bằng bắt đầu ngay bây giờ."},
          {tag:"Học", zh:"与其死记，不如多造几个句子。", py:"Yǔqí sǐjì, bùrú duō zào jǐ ge jùzi.", vi:"Thay vì học vẹt, chi bằng đặt thêm vài câu."},
          {tag:"Đi lại", zh:"与其在家等，不如自己去看看。", py:"Yǔqí zài jiā děng, bùrú zìjǐ qù kànkan.", vi:"Thay vì ngồi nhà đợi, chi bằng tự đi xem."}
        ]
      },

      {
        id:"hsk7_06",
        pattern:"之所以……是因为……",
        title:"之所以……是因为…… — sở dĩ… là vì…",
        structure:"之所以 A，是因为 B",
        example:"他之所以进步快，是因为每天都复习。",
        pinyin:"Tā zhī suǒyǐ jìnbù kuài, shì yīnwèi měitiān dōu fùxí.",
        meaning:"Sở dĩ anh ấy tiến bộ nhanh là vì ngày nào cũng ôn.",
        explanation:"A là kết quả người nghe đã thấy. B là nguyên nhân được giải thích sau. Mẫu này viết trang trọng hơn 因为……所以…… và thường đặt kết quả lên trước.",
        note:"是因为 giải thích nguyên nhân, không phải một việc xảy ra tiếp theo.",
        examples:[
          {tag:"Câu gốc", zh:"他之所以进步快，是因为每天都复习。", py:"Tā zhī suǒyǐ jìnbù kuài, shì yīnwèi měitiān dōu fùxí.", vi:"Sở dĩ anh ấy tiến bộ nhanh là vì ngày nào cũng ôn."},
          {tag:"Cửa hàng", zh:"这家店之所以排队，是因为菜很好吃。", py:"Zhè jiā diàn zhī suǒyǐ páiduì, shì yīnwèi cài hěn hǎochī.", vi:"Sở dĩ quán này phải xếp hàng là vì món ăn rất ngon."},
          {tag:"Công việc", zh:"会议之所以推迟，是因为材料还没齐。", py:"Huìyì zhī suǒyǐ tuīchí, shì yīnwèi cáiliào hái méi qí.", vi:"Sở dĩ cuộc họp bị lùi là vì tài liệu chưa đủ."}
        ]
      },

      {
        id:"hsk7_07",
        pattern:"不是……而是……",
        title:"不是……而是…… — không phải… mà là…",
        structure:"不是 A，而是 B",
        example:"我不是不想去，而是今天真的没有时间。",
        pinyin:"Wǒ bú shì bù xiǎng qù, ér shì jīntiān zhēn de méiyǒu shíjiān.",
        meaning:"Tôi không phải không muốn đi, mà hôm nay thật sự không có thời gian.",
        explanation:"Mẫu này phủ định cách hiểu A rồi đưa ra cách hiểu đúng B. Dùng khi cần sửa một sự hiểu lầm. A và B phải là hai cách nói về cùng một việc.",
        note:"而是 không đứng một mình ở đầu câu nếu chưa có 不是.",
        examples:[
          {tag:"Câu gốc", zh:"我不是不想去，而是今天真的没有时间。", py:"Wǒ bú shì bù xiǎng qù, ér shì jīntiān zhēn de méiyǒu shíjiān.", vi:"Tôi không phải không muốn đi, mà hôm nay thật sự không có thời gian."},
          {tag:"Nguyên nhân", zh:"问题不是钱，而是计划不清楚。", py:"Wèntí bú shì qián, ér shì jìhuà bù qīngchu.", vi:"Vấn đề không phải là tiền, mà là kế hoạch chưa rõ."},
          {tag:"Cảm xúc", zh:"她不是生气，而是有点担心。", py:"Tā bú shì shēngqì, ér shì yǒudiǎn dānxīn.", vi:"Cô ấy không phải giận, mà là hơi lo."}
        ]
      },

      {
        id:"hsk7_08",
        pattern:"免得",
        title:"免得 — kẻo / để khỏi",
        structure:"做 A，免得 B",
        example:"出门带伞，免得淋雨。",
        pinyin:"Chūmén dài sǎn, miǎnde lín yǔ.",
        meaning:"Ra ngoài hãy mang ô, kẻo bị mưa ướt.",
        explanation:"免得 nói mục đích tiêu cực: làm A để việc không hay B không xảy ra. Sau 免得 là việc muốn tránh, không phải việc muốn đạt được. Nếu muốn nói mục đích tích cực, dùng 为了.",
        note:"Không đặt kết quả tốt ngay sau 免得.",
        examples:[
          {tag:"Câu gốc", zh:"出门带伞，免得淋雨。", py:"Chūmén dài sǎn, miǎnde lín yǔ.", vi:"Ra ngoài hãy mang ô, kẻo bị mưa ướt."},
          {tag:"Học", zh:"把生词记下来，免得下次又忘。", py:"Bǎ shēngcí jì xiàlái, miǎnde xià cì yòu wàng.", vi:"Hãy chép từ mới lại, kẻo lần sau lại quên."},
          {tag:"Công việc", zh:"提前确认时间，免得大家白跑一趟。", py:"Tíqián quèrèn shíjiān, miǎnde dàjiā bái pǎo yí tàng.", vi:"Xác nhận giờ trước, kẻo mọi người đi một chuyến vô ích."}
        ]
      },

      {
        id:"hsk7_09",
        pattern:"难怪",
        title:"难怪 — thảo nào / hóa ra",
        structure:"难怪 + câu",
        example:"他一夜没睡，难怪今天没精神。",
        pinyin:"Tā yí yè méi shuì, nánguài jīntiān méi jīngshen.",
        meaning:"Anh ấy thức cả đêm, thảo nào hôm nay không có sức.",
        explanation:"难怪 dùng khi vừa hiểu ra nguyên nhân của một việc đã thấy. Vế trước thường là nguyên nhân mới biết, vế sau là hiện tượng. Giọng nói mang cảm giác “thì ra là vậy”.",
        note:"Không dùng 难怪 cho một kế hoạch ở tương lai.",
        examples:[
          {tag:"Câu gốc", zh:"他一夜没睡，难怪今天没精神。", py:"Tā yí yè méi shuì, nánguài jīntiān méi jīngshen.", vi:"Anh ấy thức cả đêm, thảo nào hôm nay không có sức."},
          {tag:"Thời tiết", zh:"路上全是水，难怪你迟到了。", py:"Lùshang quán shì shuǐ, nánguài nǐ chídào le.", vi:"Đường toàn nước, thảo nào bạn đến muộn."},
          {tag:"Học", zh:"这些词都没复习，难怪听不懂。", py:"Zhèxiē cí dōu méi fùxí, nánguài tīng bu dǒng.", vi:"Những từ này đều chưa ôn, thảo nào nghe không hiểu."}
        ]
      },

      {
        id:"hsk7_10",
        pattern:"到底",
        title:"到底 — rốt cuộc",
        structure:"到底 + câu hỏi",
        example:"你到底去不去？",
        pinyin:"Nǐ dàodǐ qù bu qù?",
        meaning:"Rốt cuộc bạn có đi hay không?",
        explanation:"Trong câu hỏi, 到底 đòi một câu trả lời dứt khoát sau khi đã hỏi nhiều lần hoặc còn phân vân. Nó đứng trước phần hỏi. 到底 còn có nghĩa “cuối cùng đã” trong câu kể, nhưng ở bậc này hãy học nghĩa hỏi cho rõ.",
        note:"Câu hỏi với 到底 vẫn cần từ hỏi hoặc mẫu A-not-A, không thêm 吗 một cách tùy tiện.",
        examples:[
          {tag:"Câu gốc", zh:"你到底去不去？", py:"Nǐ dàodǐ qù bu qù?", vi:"Rốt cuộc bạn có đi hay không?"},
          {tag:"Lý do", zh:"他到底为什么没来？", py:"Tā dàodǐ wèishénme méi lái?", vi:"Rốt cuộc vì sao anh ấy không đến?"},
          {tag:"Lựa chọn", zh:"我们到底坐地铁还是打车？", py:"Wǒmen dàodǐ zuò dìtiě háishi dǎchē?", vi:"Rốt cuộc chúng ta đi tàu điện hay gọi xe?"}
        ]
      },

      {
        id:"hsk7_11",
        pattern:"好不容易",
        title:"好不容易 — mãi mới / rất khó khăn mới",
        structure:"好不容易 + mới + kết quả",
        example:"我好不容易才买到票。",
        pinyin:"Wǒ hǎo bù róngyì cái mǎi dào piào.",
        meaning:"Tôi mãi mới mua được vé.",
        explanation:"Mẫu này nói một việc tốn công và cuối cùng đã xong. 才 hoặc 才把 thường đi kèm để nhấn “mãi mới”. Không dùng cho việc dễ làm.",
        note:"好不容易 và 好容易 trong khẩu ngữ đôi khi cùng nghĩa “khó khăn lắm”, nên đừng hiểu 好容易 là “rất dễ”.",
        examples:[
          {tag:"Câu gốc", zh:"我好不容易才买到票。", py:"Wǒ hǎo bù róngyì cái mǎi dào piào.", vi:"Tôi mãi mới mua được vé."},
          {tag:"Học", zh:"这个音我好不容易才读准。", py:"Zhège yīn wǒ hǎo bù róngyì cái dú zhǔn.", vi:"Âm này tôi khó khăn lắm mới đọc chuẩn."},
          {tag:"Thời gian", zh:"我们好不容易见面，就多聊一会儿吧。", py:"Wǒmen hǎo bù róngyì jiànmiàn, jiù duō liáo yíhuìr ba.", vi:"Chúng ta mãi mới gặp nhau, hãy nói chuyện thêm một lúc."}
        ]
      },

      {
        id:"hsk7_12",
        pattern:"一方面……另一方面……",
        title:"一方面……另一方面…… — một mặt… mặt khác…",
        structure:"一方面 A，另一方面 B",
        example:"一方面要省钱，另一方面也不能太委屈自己。",
        pinyin:"Yì fāngmiàn yào shěng qián, lìng yì fāngmiàn yě bù néng tài wěiqu zìjǐ.",
        meaning:"Một mặt cần tiết kiệm, mặt khác cũng không nên để mình khổ quá.",
        explanation:"Mẫu này đặt hai mặt của cùng một vấn đề cạnh nhau. Hai mặt có thể bổ sung hoặc cần cân bằng. Dùng khi viết đoạn văn, không chỉ một câu cảm thán.",
        note:"Hai vế nên cùng nói về một chủ đề.",
        examples:[
          {tag:"Câu gốc", zh:"一方面要省钱，另一方面也不能太委屈自己。", py:"Yì fāngmiàn yào shěng qián, lìng yì fāngmiàn yě bù néng tài wěiqu zìjǐ.", vi:"Một mặt cần tiết kiệm, mặt khác cũng không nên để mình khổ quá."},
          {tag:"Học", zh:"一方面多听，另一方面也要开口说。", py:"Yì fāngmiàn duō tīng, lìng yì fāngmiàn yě yào kāikǒu shuō.", vi:"Một mặt nghe nhiều, mặt khác cũng phải mở miệng nói."},
          {tag:"Công việc", zh:"一方面赶进度，另一方面要保证质量。", py:"Yì fāngmiàn gǎn jìndù, lìng yì fāngmiàn yào bǎozhèng zhìliàng.", vi:"Một mặt đẩy tiến độ, mặt khác phải bảo đảm chất lượng."}
        ]
      }

    ],

    8: [

      {
        id:"hsk8_01",
        pattern:"尚且……何况……",
        title:"尚且……何况…… — ngay cả… còn… huống hồ…",
        structure:"A 尚且 B，何况 C",
        example:"专家尚且觉得难，何况是初学者。",
        pinyin:"Zhuānjiā shàngqiě juéde nán, hékuàng shì chūxuézhě.",
        meaning:"Ngay cả chuyên gia còn thấy khó, huống hồ là người mới học.",
        explanation:"Vế trước nêu một trường hợp mạnh hơn đã khó hoặc đã đúng. Vế sau suy ra trường hợp yếu hơn càng như vậy. 何况 không cần lặp lại toàn bộ kết luận.",
        note:"Không dùng mẫu này để liệt kê hai việc ngang nhau.",
        examples:[
          {tag:"Câu gốc", zh:"专家尚且觉得难，何况是初学者。", py:"Zhuānjiā shàngqiě juéde nán, hékuàng shì chūxuézhě.", vi:"Ngay cả chuyên gia còn thấy khó, huống hồ là người mới học."},
          {tag:"Thời tiết", zh:"大人尚且觉得冷，何况孩子。", py:"Dàren shàngqiě juéde lěng, hékuàng háizi.", vi:"Người lớn còn thấy lạnh, huống hồ trẻ con."},
          {tag:"Công việc", zh:"平时尚且忙不过来，何况年底。", py:"Píngshí shàngqiě máng bu guòlái, hékuàng niándǐ.", vi:"Ngày thường còn bận không xuể, huống hồ cuối năm."}
        ]
      },

      {
        id:"hsk8_02",
        pattern:"固然……但是……",
        title:"固然……但是…… — cố nhiên… nhưng…",
        structure:"固然 A，但是 B",
        example:"价格固然重要，但是质量更不能忽略。",
        pinyin:"Jiàgé gùrán zhòngyào, dànshì zhìliàng gèng bù néng hūlüè.",
        meaning:"Giá cả cố nhiên quan trọng, nhưng chất lượng lại càng không thể bỏ qua.",
        explanation:"固然 thừa nhận A là đúng. 但是 chuyển sang mặt người viết muốn nhấn mạnh hơn. Khác với 虽然 ở chỗ 固然 thường dùng khi viết, và sự nhượng bộ lịch sự hơn.",
        note:"Vế sau mới là trọng tâm, đừng dừng ở vế thừa nhận.",
        examples:[
          {tag:"Câu gốc", zh:"价格固然重要，但是质量更不能忽略。", py:"Jiàgé gùrán zhòngyào, dànshì zhìliàng gèng bù néng hūlüè.", vi:"Giá cả cố nhiên quan trọng, nhưng chất lượng lại càng không thể bỏ qua."},
          {tag:"Học", zh:"速度固然要快，但是准确更重要。", py:"Sùdù gùrán yào kuài, dànshì zhǔnquè gèng zhòngyào.", vi:"Tốc độ cố nhiên cần nhanh, nhưng chính xác còn quan trọng hơn."},
          {tag:"Ý kiến", zh:"这个办法固然简单，但是并不适合所有人。", py:"Zhège bànfǎ gùrán jiǎndān, dànshì bìng bú shìhé suǒyǒu rén.", vi:"Cách này cố nhiên đơn giản, nhưng không hợp với mọi người."}
        ]
      },

      {
        id:"hsk8_03",
        pattern:"尽管……还是……",
        title:"尽管……还是…… — dù… vẫn…",
        structure:"尽管 A，还是 B",
        example:"尽管别人反对，他还是坚持自己的计划。",
        pinyin:"Jǐnguǎn biéren fǎnduì, tā háishi jiānchí zìjǐ de jìhuà.",
        meaning:"Dù người khác phản đối, anh ấy vẫn giữ kế hoạch của mình.",
        explanation:"尽管 nhượng bộ một trở ngại đã có thật. 还是 nói hành động hoặc kết quả không đổi. Mẫu này mạnh hơn một câu 但是 thông thường vì nhấn “vẫn cứ”.",
        note:"还是 ở đây không phải câu hỏi “hay là”.",
        examples:[
          {tag:"Câu gốc", zh:"尽管别人反对，他还是坚持自己的计划。", py:"Jǐnguǎn biéren fǎnduì, tā háishi jiānchí zìjǐ de jìhuà.", vi:"Dù người khác phản đối, anh ấy vẫn giữ kế hoạch của mình."},
          {tag:"Thời tiết", zh:"尽管风很大，比赛还是照常举行。", py:"Jǐnguǎn fēng hěn dà, bǐsài háishi zhàocháng jǔxíng.", vi:"Dù gió rất lớn, trận đấu vẫn diễn ra như thường."},
          {tag:"Học", zh:"尽管听不懂全部，我还是把课听完了。", py:"Jǐnguǎn tīng bu dǒng quánbù, wǒ háishi bǎ kè tīng wán le.", vi:"Dù không hiểu hết, tôi vẫn nghe hết buổi học."}
        ]
      },

      {
        id:"hsk8_04",
        pattern:"倘若",
        title:"倘若 — ví phỏng / nếu như",
        structure:"倘若 A，就 B",
        example:"倘若明天有空，我们就去博物馆。",
        pinyin:"Tǎngruò míngtiān yǒu kòng, wǒmen jiù qù bówùguǎn.",
        meaning:"Nếu ngày mai rảnh, chúng ta sẽ đi bảo tàng.",
        explanation:"倘若 là cách nói “nếu” trang trọng, gặp trong văn viết hơn trong nói chuyện hàng ngày. Nghĩa gần 如果, nhưng giọng điệu đứng đắn hơn. Vế sau thường có 就、便.",
        note:"Nói chuyện thân mật thì 要是、如果 tự nhiên hơn 倘若.",
        examples:[
          {tag:"Câu gốc", zh:"倘若明天有空，我们就去博物馆。", py:"Tǎngruò míngtiān yǒu kòng, wǒmen jiù qù bówùguǎn.", vi:"Nếu ngày mai rảnh, chúng ta sẽ đi bảo tàng."},
          {tag:"Cảnh báo", zh:"倘若再拖延，问题会更严重。", py:"Tǎngruò zài tuōyán, wèntí huì gèng yánzhòng.", vi:"Nếu còn trì hoãn, vấn đề sẽ nặng hơn."},
          {tag:"Kế hoạch", zh:"倘若资金足够，这个项目可以扩大。", py:"Tǎngruò zījīn zúgòu, zhège xiàngmù kěyǐ kuòdà.", vi:"Nếu vốn đủ, dự án này có thể mở rộng."}
        ]
      },

      {
        id:"hsk8_05",
        pattern:"一旦",
        title:"一旦 — một khi",
        structure:"一旦 A，就 B",
        example:"一旦养成习惯，后面就容易多了。",
        pinyin:"Yídàn yǎngchéng xíguàn, hòumiàn jiù róngyì duō le.",
        meaning:"Một khi đã thành thói quen, phần sau sẽ dễ hơn nhiều.",
        explanation:"一旦 nói một việc vừa xảy ra thì hệ quả đi theo rất nhanh. Thường dùng cho bước ngoặt: một khi bắt đầu, một khi mất, một khi đồng ý. Khác 如果 ở chỗ nhấn tính chất “vừa xảy ra là kéo theo”.",
        note:"Không dùng 一旦 cho thói quen nhỏ diễn ra mỗi ngày một cách bình thường.",
        examples:[
          {tag:"Câu gốc", zh:"一旦养成习惯，后面就容易多了。", py:"Yídàn yǎngchéng xíguàn, hòumiàn jiù róngyì duō le.", vi:"Một khi đã thành thói quen, phần sau sẽ dễ hơn nhiều."},
          {tag:"Rủi ro", zh:"一旦错过今天，就要再等一个月。", py:"Yídàn cuòguò jīntiān, jiù yào zài děng yí ge yuè.", vi:"Một khi lỡ hôm nay thì phải đợi thêm một tháng."},
          {tag:"Quyết định", zh:"一旦答应，就要做到。", py:"Yídàn dāying, jiù yào zuò dào.", vi:"Một khi đã nhận lời thì phải làm được."}
        ]
      },

      {
        id:"hsk8_06",
        pattern:"以至于",
        title:"以至于 — đến mức",
        structure:"A，以至于 B",
        example:"他准备得太少，以至于现场不知道说什么。",
        pinyin:"Tā zhǔnbèi de tài shǎo, yǐzhìyú xiànchǎng bù zhīdào shuō shénme.",
        meaning:"Anh ấy chuẩn bị quá ít, đến mức lúc tại chỗ không biết nói gì.",
        explanation:"以至于 nối một nguyên nhân hoặc mức độ với kết quả đã đi xa, thường là kết quả không hay hoặc ngoài dự tính. Vế sau là mức độ mà việc đã tới.",
        note:"Kết quả nên là hệ quả thật của vế trước, không phải một việc ngẫu nhiên.",
        examples:[
          {tag:"Câu gốc", zh:"他准备得太少，以至于现场不知道说什么。", py:"Tā zhǔnbèi de tài shǎo, yǐzhìyú xiànchǎng bù zhīdào shuō shénme.", vi:"Anh ấy chuẩn bị quá ít, đến mức lúc tại chỗ không biết nói gì."},
          {tag:"Thời gian", zh:"雨下得太大，以至于路上都积水了。", py:"Yǔ xià de tài dà, yǐzhìyú lùshang dōu jīshuǐ le.", vi:"Mưa to đến mức đường chỗ nào cũng ngập."},
          {tag:"Học", zh:"他只顾刷题，以至于忽略了口语。", py:"Tā zhǐ gù shuā tí, yǐzhìyú hūlüè le kǒuyǔ.", vi:"Anh ấy chỉ chăm làm bài, đến mức bỏ bê khẩu ngữ."}
        ]
      },

      {
        id:"hsk8_07",
        pattern:"由此可见",
        title:"由此可见 — từ đó có thể thấy",
        structure:"事实 + 由此可见 + 结论",
        example:"两次试验的结果一样，由此可见方法是有效的。",
        pinyin:"Liǎng cì shìyàn de jiéguǒ yíyàng, yóu cǐ kějiàn fāngfǎ shì yǒuxiào de.",
        meaning:"Kết quả hai lần thử giống nhau, từ đó có thể thấy cách làm này có hiệu quả.",
        explanation:"由此可见 đứng đầu câu kết luận, dựa trên bằng chứng vừa nêu. Dùng trong đoạn văn nghị luận. Không dùng để mở đầu khi chưa có việc gì được kể.",
        note:"Kết luận phải rút ra từ câu trước, không đưa thêm thông tin mới không liên quan.",
        examples:[
          {tag:"Câu gốc", zh:"两次试验的结果一样，由此可见方法是有效的。", py:"Liǎng cì shìyàn de jiéguǒ yíyàng, yóu cǐ kějiàn fāngfǎ shì yǒuxiào de.", vi:"Kết quả hai lần thử giống nhau, từ đó có thể thấy cách làm này có hiệu quả."},
          {tag:"Học", zh:"他每天都来，由此可见他很重视这门课。", py:"Tā měitiān dōu lái, yóu cǐ kějiàn tā hěn zhòngshì zhè mén kè.", vi:"Ngày nào anh ấy cũng đến, từ đó có thể thấy anh ấy rất coi trọng môn này."},
          {tag:"Xã hội", zh:"报名人数增加了，由此可见需求在上升。", py:"Bàomíng rénshù zēngjiā le, yóu cǐ kějiàn xūqiú zài shàngshēng.", vi:"Số người đăng ký tăng, từ đó có thể thấy nhu cầu đang lên."}
        ]
      },

      {
        id:"hsk8_08",
        pattern:"换言之",
        title:"换言之 — nói cách khác",
        structure:"A。换言之，B",
        example:"这个计划成本很高。换言之，我们现在还做不起。",
        pinyin:"Zhège jìhuà chéngběn hěn gāo. Huàn yán zhī, wǒmen xiànzài hái zuò bu qǐ.",
        meaning:"Kế hoạch này chi phí rất cao. Nói cách khác, bây giờ chúng ta chưa làm nổi.",
        explanation:"换言之 nhắc lại ý vừa nói bằng cách dễ hiểu hơn hoặc thẳng hơn. B không được là một ý mới hoàn toàn. Dùng khi muốn người nghe nắm đúng điều đang nói.",
        note:"Nếu B sang chuyện khác, đừng dùng 换言之.",
        examples:[
          {tag:"Câu gốc", zh:"这个计划成本很高。换言之，我们现在还做不起。", py:"Zhège jìhuà chéngběn hěn gāo. Huàn yán zhī, wǒmen xiànzài hái zuò bu qǐ.", vi:"Kế hoạch này chi phí rất cao. Nói cách khác, bây giờ chúng ta chưa làm nổi."},
          {tag:"Học", zh:"他还不能独立读文章。换言之，生词量还不够。", py:"Tā hái bù néng dúlì dú wénzhāng. Huàn yán zhī, shēngcí liàng hái bú gòu.", vi:"Anh ấy chưa đọc được bài một mình. Nói cách khác, lượng từ mới còn chưa đủ."},
          {tag:"Thời hạn", zh:"报告周五前必须交。换言之，只剩两天了。", py:"Bàogào Zhōuwǔ qián bìxū jiāo. Huàn yán zhī, zhǐ shèng liǎng tiān le.", vi:"Báo cáo phải nộp trước thứ Sáu. Nói cách khác, chỉ còn hai ngày."}
        ]
      },

      {
        id:"hsk8_09",
        pattern:"鉴于",
        title:"鉴于 — xét vì / căn cứ vào",
        structure:"鉴于 A，B",
        example:"鉴于天气不好，活动改到室内举行。",
        pinyin:"Jiànyú tiānqì bù hǎo, huódòng gǎi dào shìnèi jǔxíng.",
        meaning:"Xét vì thời tiết không tốt, hoạt động chuyển vào trong nhà.",
        explanation:"鉴于 đưa lý do trang trọng trước quyết định. Thường gặp trong thông báo, văn bản. Lý do là việc đã biết, quyết định là việc được đưa ra vì lý do đó.",
        note:"Khẩu ngữ hàng ngày dùng 因为 tự nhiên hơn.",
        examples:[
          {tag:"Câu gốc", zh:"鉴于天气不好，活动改到室内举行。", py:"Jiànyú tiānqì bù hǎo, huódòng gǎi dào shìnèi jǔxíng.", vi:"Xét vì thời tiết không tốt, hoạt động chuyển vào trong nhà."},
          {tag:"Công việc", zh:"鉴于人数太多，会议分成两组。", py:"Jiànyú rénshù tài duō, huìyì fēnchéng liǎng zǔ.", vi:"Xét vì quá đông, cuộc họp chia thành hai nhóm."},
          {tag:"An toàn", zh:"鉴于路滑，请大家慢一点开。", py:"Jiànyú lù huá, qǐng dàjiā màn yìdiǎn kāi.", vi:"Xét vì đường trơn, mọi người hãy lái chậm lại."}
        ]
      },

      {
        id:"hsk8_10",
        pattern:"就……而言",
        title:"就……而言 — xét về mặt…",
        structure:"就 A 而言，B",
        example:"就价格而言，这台电脑比较合适。",
        pinyin:"Jiù jiàgé ér yán, zhè tái diànnǎo bǐjiào héshì.",
        meaning:"Xét về giá, chiếc máy tính này khá hợp.",
        explanation:"Mẫu này giới hạn góc nhìn. Kết luận B chỉ đúng trong phạm vi A, chưa phải kết luận cho mọi mặt. Rất hữu ích khi so sánh: giá, chất lượng, thời gian, mức độ khó.",
        note:"Đừng để người nghe tưởng B là đánh giá toàn bộ nếu bạn chỉ nói một mặt.",
        examples:[
          {tag:"Câu gốc", zh:"就价格而言，这台电脑比较合适。", py:"Jiù jiàgé ér yán, zhè tái diànnǎo bǐjiào héshì.", vi:"Xét về giá, chiếc máy tính này khá hợp."},
          {tag:"Học", zh:"就发音而言，他还需要多练习。", py:"Jiù fāyīn ér yán, tā hái xūyào duō liànxí.", vi:"Xét về phát âm, anh ấy vẫn cần luyện thêm."},
          {tag:"Thành phố", zh:"就交通而言，住在地铁站附近更方便。", py:"Jiù jiāotōng ér yán, zhù zài dìtiězhàn fùjìn gèng fāngbiàn.", vi:"Xét về đi lại, ở gần ga tàu điện tiện hơn."}
        ]
      },

      {
        id:"hsk8_11",
        pattern:"无非",
        title:"无非 — chẳng qua là",
        structure:"无非是 + việc được thu gọn",
        example:"他这么说，无非是希望大家再试试。",
        pinyin:"Tā zhème shuō, wúfēi shì xīwàng dàjiā zài shìshi.",
        meaning:"Anh ấy nói vậy chẳng qua là mong mọi người thử thêm lần nữa.",
        explanation:"无非 thu một việc tưởng phức tạp về một lý do hoặc bản chất đơn giản. Giọng có thể nhẹ nhàng hoặc hơi xem nhẹ, tùy ngữ cảnh. Không dùng khi muốn khen một việc rất lớn.",
        note:"无非 không có nghĩa “hoàn toàn không”.",
        examples:[
          {tag:"Câu gốc", zh:"他这么说，无非是希望大家再试试。", py:"Tā zhème shuō, wúfēi shì xīwàng dàjiā zài shìshi.", vi:"Anh ấy nói vậy chẳng qua là mong mọi người thử thêm lần nữa."},
          {tag:"Lý do", zh:"我问这些，无非是想把情况弄清楚。", py:"Wǒ wèn zhèxiē, wúfēi shì xiǎng bǎ qíngkuàng nòng qīngchu.", vi:"Tôi hỏi những điều này chẳng qua là muốn làm rõ tình hình."},
          {tag:"Thói quen", zh:"他每天早起，无非是为了多读一会儿书。", py:"Tā měitiān zǎo qǐ, wúfēi shì wèile duō dú yíhuìr shū.", vi:"Ngày nào anh ấy cũng dậy sớm, chẳng qua là để đọc thêm một lúc."}
        ]
      },

      {
        id:"hsk8_12",
        pattern:"不至于",
        title:"不至于 — chưa đến mức",
        structure:"不至于 + kết quả nặng",
        example:"只是晚了五分钟，不至于这么生气。",
        pinyin:"Zhǐ shì wǎn le wǔ fēnzhōng, bú zhìyú zhème shēngqì.",
        meaning:"Chỉ muộn năm phút, chưa đến mức phải giận như vậy.",
        explanation:"不至于 bác một kết quả bị xem là quá nặng so với nguyên nhân. Người nói công nhận có vấn đề, nhưng không đồng ý với mức phản ứng. Thường đi với 这么、那么.",
        note:"Sau 不至于 là việc bị cho là quá đáng, không phải việc bình thường.",
        examples:[
          {tag:"Câu gốc", zh:"只是晚了五分钟，不至于这么生气。", py:"Zhǐ shì wǎn le wǔ fēnzhōng, bú zhìyú zhème shēngqì.", vi:"Chỉ muộn năm phút, chưa đến mức phải giận như vậy."},
          {tag:"Học", zh:"错了一道题，不至于整个考试都失败。", py:"Cuò le yí dào tí, bú zhìyú zhěng gè kǎoshì dōu shībài.", vi:"Sai một câu chưa đến mức cả bài thi đều hỏng."},
          {tag:"Sức khỏe", zh:"有点咳嗽，不至于不能上课。", py:"Yǒudiǎn késou, bú zhìyú bù néng shàngkè.", vi:"Hơi ho một chút, chưa đến mức không thể lên lớp."}
        ]
      }

    ],

    9: [

      {
        id:"hsk9_01",
        pattern:"毋庸置疑",
        title:"毋庸置疑 — không còn phải nghi ngờ",
        structure:"毋庸置疑，+ nhận định",
        example:"毋庸置疑，坚持练习是进步的关键。",
        pinyin:"Wú yōng zhì yí, jiānchí liànxí shì jìnbù de guānjiàn.",
        meaning:"Không còn phải nghi ngờ, kiên trì luyện tập là then chốt của sự tiến bộ.",
        explanation:"Đây là cụm trang trọng để khẳng định một nhận định đã có cơ sở mạnh. Đặt ở đầu câu hoặc sau chủ ngữ. Không dùng cho chuyện nhỏ, cảm tính hoặc việc còn đang tranh cãi nếu bạn chưa đưa được lý do.",
        note:"Văn nói thân mật nên đổi thành 毫无疑问 hoặc 肯定.",
        examples:[
          {tag:"Câu gốc", zh:"毋庸置疑，坚持练习是进步的关键。", py:"Wú yōng zhì yí, jiānchí liànxí shì jìnbù de guānjiàn.", vi:"Không còn phải nghi ngờ, kiên trì luyện tập là then chốt của sự tiến bộ."},
          {tag:"Việc chung", zh:"教育的重要性毋庸置疑。", py:"Jiàoyù de zhòngyào xìng wú yōng zhì yí.", vi:"Tầm quan trọng của giáo dục không còn phải nghi ngờ."},
          {tag:"Kết luận", zh:"毋庸置疑，这个数据改变了原来的判断。", py:"Wú yōng zhì yí, zhège shùjù gǎibiàn le yuánlái de pànduàn.", vi:"Không còn phải nghi ngờ, số liệu này đã đổi phán đoán ban đầu."}
        ]
      },

      {
        id:"hsk9_02",
        pattern:"不言而喻",
        title:"不言而喻 — không nói cũng rõ",
        structure:"……是不言而喻的",
        example:"良好的休息对学习的作用不言而喻。",
        pinyin:"Liánghǎo de xiūxi duì xuéxí de zuòyòng bù yán ér yù.",
        meaning:"Tác dụng của việc nghỉ ngơi tốt đối với học tập là điều không nói cũng rõ.",
        explanation:"Dùng khi người viết cho rằng người đọc đã thấy hệ quả, nên không cần chứng minh dài. Vẫn nên có một câu trước nêu sự việc, nếu không cụm này sẽ thành khẩu hiệu trống.",
        note:"Không dùng để né một câu hỏi đang cần giải thích cụ thể.",
        examples:[
          {tag:"Câu gốc", zh:"良好的休息对学习的作用不言而喻。", py:"Liánghǎo de xiūxi duì xuéxí de zuòyòng bù yán ér yù.", vi:"Tác dụng của việc nghỉ ngơi tốt đối với học tập là điều không nói cũng rõ."},
          {tag:"Thành phố", zh:"交通改善以后，生活会方便很多，这是不言而喻的。", py:"Jiāotōng gǎishàn yǐhòu, shēnghuó huì fāngbiàn hěn duō, zhè shì bù yán ér yù de.", vi:"Sau khi giao thông khá hơn, đời sống sẽ tiện hơn nhiều, điều đó không nói cũng rõ."},
          {tag:"Quan hệ", zh:"信任对合作的意义不言而喻。", py:"Xìnrèn duì hézuò de yìyì bù yán ér yù.", vi:"Ý nghĩa của sự tin cậy đối với hợp tác là điều không nói cũng rõ."}
        ]
      },

      {
        id:"hsk9_03",
        pattern:"归根结底",
        title:"归根结底 — suy cho cùng",
        structure:"归根结底，+ kết luận",
        example:"方法有很多，归根结底还是要自己动手练。",
        pinyin:"Fāngfǎ yǒu hěn duō, guī gēn jié dǐ háishi yào zìjǐ dòngshǒu liàn.",
        meaning:"Cách thì có nhiều, suy cho cùng vẫn phải tự tay luyện.",
        explanation:"Cụm này gom nhiều ý vừa nêu về một nguyên nhân hoặc kết luận cuối. Đặt sau phần liệt kê, trước câu chốt. Không mở bài bằng cụm này khi chưa có gì để “gom”.",
        note:"归根到底 là cách nói gần nghĩa, cùng chức năng.",
        examples:[
          {tag:"Câu gốc", zh:"方法有很多，归根结底还是要自己动手练。", py:"Fāngfǎ yǒu hěn duō, guī gēn jié dǐ háishi yào zìjǐ dòngshǒu liàn.", vi:"Cách thì có nhiều, suy cho cùng vẫn phải tự tay luyện."},
          {tag:"Tranh luận", zh:"双方说法不同，归根结底是目标不一样。", py:"Shuāngfāng shuōfǎ bùtóng, guī gēn jié dǐ shì mùbiāo bù yíyàng.", vi:"Hai bên nói khác nhau, suy cho cùng là mục tiêu không giống nhau."},
          {tag:"Thất bại", zh:"这次没做成，归根结底是准备不足。", py:"Zhè cì méi zuò chéng, guī gēn jié dǐ shì zhǔnbèi bùzú.", vi:"Lần này không làm xong, suy cho cùng là chuẩn bị chưa đủ."}
        ]
      },

      {
        id:"hsk9_04",
        pattern:"从某种意义上说",
        title:"从某种意义上说 — theo một nghĩa nào đó",
        structure:"从某种意义上说，+ nhận định có giới hạn",
        example:"从某种意义上说，犯错也是学习的一部分。",
        pinyin:"Cóng mǒu zhǒng yìyì shang shuō, fàncuò yě shì xuéxí de yí bùfen.",
        meaning:"Theo một nghĩa nào đó, mắc lỗi cũng là một phần của việc học.",
        explanation:"Cụm này báo trước rằng câu sau không phải chân lý tuyệt đối, mà là một cách nhìn. Dùng khi muốn nói một nhận định tinh tế mà không biến nó thành quy luật cho mọi trường hợp.",
        note:"Nếu sự việc đã chắc và có số liệu, không cần hạ giọng bằng cụm này.",
        examples:[
          {tag:"Câu gốc", zh:"从某种意义上说，犯错也是学习的一部分。", py:"Cóng mǒu zhǒng yìyì shang shuō, fàncuò yě shì xuéxí de yí bùfen.", vi:"Theo một nghĩa nào đó, mắc lỗi cũng là một phần của việc học."},
          {tag:"Thành phố", zh:"从某种意义上说，等待也是一种选择。", py:"Cóng mǒu zhǒng yìyì shang shuō, děngdài yě shì yì zhǒng xuǎnzé.", vi:"Theo một nghĩa nào đó, chờ đợi cũng là một lựa chọn."},
          {tag:"Công việc", zh:"从某种意义上说，这份工作是在训练耐心。", py:"Cóng mǒu zhǒng yìyì shang shuō, zhè fèn gōngzuò shì zài xùnliàn nàixīn.", vi:"Theo một nghĩa nào đó, công việc này đang luyện tính kiên nhẫn."}
        ]
      },

      {
        id:"hsk9_05",
        pattern:"以……为代价",
        title:"以……为代价 — lấy… làm cái giá",
        structure:"以 A 为代价 + kết quả",
        example:"不能以健康为代价去赶进度。",
        pinyin:"Bù néng yǐ jiànkāng wéi dàijià qù gǎn jìndù.",
        meaning:"Không thể lấy sức khỏe làm cái giá để đuổi tiến độ.",
        explanation:"Mẫu này nói kết quả đạt được bằng một sự mất mát. A là thứ bị đánh đổi. Thường mang ý không đồng ý nếu đứng với 不能、不应. Có thể dùng trung lập khi phân tích một quyết định lịch sử hoặc kinh tế.",
        note:"A là cái bị mất, không phải cái đạt được.",
        examples:[
          {tag:"Câu gốc", zh:"不能以健康为代价去赶进度。", py:"Bù néng yǐ jiànkāng wéi dàijià qù gǎn jìndù.", vi:"Không thể lấy sức khỏe làm cái giá để đuổi tiến độ."},
          {tag:"Môi trường", zh:"这座城市的发展曾以环境为代价。", py:"Zhè zuò chéngshì de fāzhǎn céng yǐ huánjìng wéi dàijià.", vi:"Sự phát triển của thành phố này từng lấy môi trường làm cái giá."},
          {tag:"Học", zh:"不要以放弃睡眠为代价来准备考试。", py:"Bú yào yǐ fàngqì shuìmián wéi dàijià lái zhǔnbèi kǎoshì.", vi:"Đừng lấy việc bỏ ngủ làm cái giá để chuẩn bị thi."}
        ]
      },

      {
        id:"hsk9_06",
        pattern:"与此同时",
        title:"与此同时 — đồng thời với việc đó",
        structure:"A。与此同时，B",
        example:"学校增加了课程。与此同时，图书馆的开放时间也延长了。",
        pinyin:"Xuéxiào zēngjiā le kèchéng. Yǔ cǐ tóngshí, túshūguǎn de kāifàng shíjiān yě yáncháng le.",
        meaning:"Trường đã thêm môn học. Đồng thời, giờ mở cửa thư viện cũng được kéo dài.",
        explanation:"与此同时 nối hai việc xảy ra cùng giai đoạn và cùng đáng nói. B không phải nguyên nhân của A, cũng không phải bước tiếp theo. Muốn nói bước sau thì dùng 接着、然后.",
        note:"Hai việc nên có liên hệ về thời điểm hoặc bối cảnh.",
        examples:[
          {tag:"Câu gốc", zh:"学校增加了课程。与此同时，图书馆的开放时间也延长了。", py:"Xuéxiào zēngjiā le kèchéng. Yǔ cǐ tóngshí, túshūguǎn de kāifàng shíjiān yě yáncháng le.", vi:"Trường đã thêm môn học. Đồng thời, giờ mở cửa thư viện cũng được kéo dài."},
          {tag:"Kinh tế", zh:"出口增加了。与此同时，国内需求也在恢复。", py:"Chūkǒu zēngjiā le. Yǔ cǐ tóngshí, guónèi xūqiú yě zài huīfù.", vi:"Xuất khẩu tăng. Đồng thời, nhu cầu trong nước cũng đang hồi lại."},
          {tag:"Cá nhân", zh:"他在准备考试。与此同时，他还要完成实习。", py:"Tā zài zhǔnbèi kǎoshì. Yǔ cǐ tóngshí, tā hái yào wánchéng shíxí.", vi:"Anh ấy đang chuẩn bị thi. Đồng thời anh ấy còn phải hoàn thành thực tập."}
        ]
      },

      {
        id:"hsk9_07",
        pattern:"继而",
        title:"继而 — rồi tiếp đó",
        structure:"A，继而 B",
        example:"他先说明了原因，继而提出了两个办法。",
        pinyin:"Tā xiān shuōmíng le yuányīn, jì'ér tíchū le liǎng ge bànfǎ.",
        meaning:"Anh ấy nói rõ nguyên nhân trước, rồi tiếp đó đưa ra hai cách.",
        explanation:"继而 nối bước sau trong một diễn tiến chặt, thường trong văn viết. B xảy ra sau A và phát triển từ A. Khác 然后 ở mức độ trang trọng và ở chỗ hai bước gắn nghĩa với nhau, không chỉ là thứ tự thời gian.",
        note:"Không dùng 继而 cho hai việc ngẫu nhiên cùng ngày.",
        examples:[
          {tag:"Câu gốc", zh:"他先说明了原因，继而提出了两个办法。", py:"Tā xiān shuōmíng le yuányīn, jì'ér tíchū le liǎng ge bànfǎ.", vi:"Anh ấy nói rõ nguyên nhân trước, rồi tiếp đó đưa ra hai cách."},
          {tag:"Diễn biến", zh:"讨论渐渐热烈，继而变成了争论。", py:"Tǎolùn jiànjiàn rèliè, jì'ér biànchéng le zhēnglùn.", vi:"Cuộc bàn bạc dần sôi nổi, rồi tiếp đó thành tranh luận."},
          {tag:"Nghiên cứu", zh:"作者先列出数据，继而分析了原因。", py:"Zuòzhě xiān lièchū shùjù, jì'ér fēnxī le yuányīn.", vi:"Tác giả liệt kê số liệu trước, rồi tiếp đó phân tích nguyên nhân."}
        ]
      },

      {
        id:"hsk9_08",
        pattern:"所谓……就是……",
        title:"所谓……就是…… — cái gọi là… chính là…",
        structure:"所谓 A，就是 B",
        example:"所谓复习，就是把学过的内容重新变成自己的。",
        pinyin:"Suǒwèi fùxí, jiù shì bǎ xuéguò de nèiróng chóngxīn biànchéng zìjǐ de.",
        meaning:"Cái gọi là ôn tập chính là biến lại nội dung đã học thành của mình.",
        explanation:"所谓 đưa ra một từ hoặc khái niệm. 就是 định nghĩa nó theo cách người viết muốn người đọc hiểu. Có thể trung lập, cũng có thể hơi nghi ngờ nếu ngữ cảnh mỉa mai. Ở bài học này dùng theo nghĩa định nghĩa rõ.",
        note:"B phải là định nghĩa của A, không phải một ví dụ rời.",
        examples:[
          {tag:"Câu gốc", zh:"所谓复习，就是把学过的内容重新变成自己的。", py:"Suǒwèi fùxí, jiù shì bǎ xuéguò de nèiróng chóngxīn biànchéng zìjǐ de.", vi:"Cái gọi là ôn tập chính là biến lại nội dung đã học thành của mình."},
          {tag:"Hợp tác", zh:"所谓合作，就是双方都愿意让一步。", py:"Suǒwèi hézuò, jiù shì shuāngfāng dōu yuànyì ràng yí bù.", vi:"Cái gọi là hợp tác chính là hai bên đều chịu nhường một bước."},
          {tag:"Thành công", zh:"所谓按时完成，就是在期限前交出可用的结果。", py:"Suǒwèi ànshí wánchéng, jiù shì zài qīxiàn qián jiāo chū kěyòng de jiéguǒ.", vi:"Cái gọi là hoàn thành đúng hạn chính là nộp một kết quả dùng được trước thời hạn."}
        ]
      },

      {
        id:"hsk9_09",
        pattern:"并非……而是……",
        title:"并非……而是…… — chẳng phải… mà là…",
        structure:"并非 A，而是 B",
        example:"问题并非缺少想法，而是缺少坚持。",
        pinyin:"Wèntí bìngfēi quēshǎo xiǎngfǎ, ér shì quēshǎo jiānchí.",
        meaning:"Vấn đề chẳng phải thiếu ý tưởng, mà là thiếu sự kiên trì.",
        explanation:"并非 phủ định mạnh và trang trọng hơn 不是. 而是 đưa ra bản chất đúng. Dùng khi sửa một cách hiểu phổ biến trong đoạn văn. A là cách hiểu bị loại, B là cách hiểu được giữ.",
        note:"Giữ hai vế cùng loại: cùng là nguyên nhân, hoặc cùng là nhận định.",
        examples:[
          {tag:"Câu gốc", zh:"问题并非缺少想法，而是缺少坚持。", py:"Wèntí bìngfēi quēshǎo xiǎngfǎ, ér shì quēshǎo jiānchí.", vi:"Vấn đề chẳng phải thiếu ý tưởng, mà là thiếu sự kiên trì."},
          {tag:"Thái độ", zh:"他并非反对，而是还需要时间考虑。", py:"Tā bìngfēi fǎnduì, ér shì hái xūyào shíjiān kǎolǜ.", vi:"Anh ấy chẳng phải phản đối, mà là còn cần thời gian suy nghĩ."},
          {tag:"Kết quả", zh:"成功并非偶然，而是长期准备的结果。", py:"Chénggōng bìngfēi ǒurán, ér shì chángqī zhǔnbèi de jiéguǒ.", vi:"Thành công chẳng phải ngẫu nhiên, mà là kết quả của chuẩn bị lâu dài."}
        ]
      },

      {
        id:"hsk9_10",
        pattern:"与其说……不如说……",
        title:"与其说……不如说…… — nói là… chẳng bằng nói là…",
        structure:"与其说 A，不如说 B",
        example:"与其说他在休息，不如说他在想下一步。",
        pinyin:"Yǔqí shuō tā zài xiūxi, bùrú shuō tā zài xiǎng xià yí bù.",
        meaning:"Nói là anh ấy đang nghỉ chẳng bằng nói là anh ấy đang nghĩ bước tiếp.",
        explanation:"Mẫu này sửa cách gọi một sự việc. A là cách mô tả chưa sát, B là cách mô tả đúng hơn. Khác 与其……不如……: mẫu kia chọn việc nên làm, mẫu này chọn cách nói cho đúng bản chất.",
        note:"Hai vế là hai cách gọi cùng một sự việc.",
        examples:[
          {tag:"Câu gốc", zh:"与其说他在休息，不如说他在想下一步。", py:"Yǔqí shuō tā zài xiūxi, bùrú shuō tā zài xiǎng xià yí bù.", vi:"Nói là anh ấy đang nghỉ chẳng bằng nói là anh ấy đang nghĩ bước tiếp."},
          {tag:"Thành phố", zh:"与其说这是旅游，不如说这是一次调查。", py:"Yǔqí shuō zhè shì lǚyóu, bùrú shuō zhè shì yí cì diàochá.", vi:"Nói đây là du lịch chẳng bằng nói đây là một chuyến tìm hiểu."},
          {tag:"Học", zh:"与其说他记性差，不如说他没有复习。", py:"Yǔqí shuō tā jìxing chà, bùrú shuō tā méiyǒu fùxí.", vi:"Nói anh ấy trí nhớ kém chẳng bằng nói anh ấy đã không ôn."}
        ]
      },

      {
        id:"hsk9_11",
        pattern:"退一步说",
        title:"退一步说 — lùi một bước mà nói",
        structure:"退一步说，+ nhượng bộ",
        example:"退一步说，即使计划要改，已经做的准备也不会白费。",
        pinyin:"Tuì yí bù shuō, jíshǐ jìhuà yào gǎi, yǐjīng zuò de zhǔnbèi yě bú huì báifèi.",
        meaning:"Lùi một bước mà nói, ngay cả nếu kế hoạch phải đổi, phần đã chuẩn bị cũng không uổng.",
        explanation:"Cụm này nhường một bước trong tranh luận rồi vẫn giữ một kết luận. Người viết tạm chấp nhận trường hợp xấu hơn, và cho thấy ngay trường hợp đó thì ý chính vẫn đứng. Thường đi với 即使、就算.",
        note:"Phải có nhượng bộ thật ở câu sau, không chỉ là một câu chuyển ý trống.",
        examples:[
          {tag:"Câu gốc", zh:"退一步说，即使计划要改，已经做的准备也不会白费。", py:"Tuì yí bù shuō, jíshǐ jìhuà yào gǎi, yǐjīng zuò de zhǔnbèi yě bú huì báifèi.", vi:"Lùi một bước mà nói, ngay cả nếu kế hoạch phải đổi, phần đã chuẩn bị cũng không uổng."},
          {tag:"Thi cử", zh:"退一步说，就算这次没考好，你也知道自己缺在哪里。", py:"Tuì yí bù shuō, jiùsuàn zhè cì méi kǎo hǎo, nǐ yě zhīdào zìjǐ quē zài nǎlǐ.", vi:"Lùi một bước mà nói, dù lần này thi chưa tốt, bạn cũng biết mình thiếu ở đâu."},
          {tag:"Mua bán", zh:"退一步说，即使现在不买，先比较也是有用的。", py:"Tuì yí bù shuō, jíshǐ xiànzài bù mǎi, xiān bǐjiào yě shì yǒuyòng de.", vi:"Lùi một bước mà nói, dù bây giờ không mua, việc so sánh trước vẫn có ích."}
        ]
      },

      {
        id:"hsk9_12",
        pattern:"诚然",
        title:"诚然 — quả thật / cố nhiên",
        structure:"诚然 A，但是 B",
        example:"诚然，这个目标很难，但是并不是没有办法。",
        pinyin:"Chéngrán, zhège mùbiāo hěn nán, dànshì bìng bú shì méiyǒu bànfǎ.",
        meaning:"Quả thật mục tiêu này rất khó, nhưng không phải là không có cách.",
        explanation:"诚然 thừa nhận một sự thật mà đối phương đang nêu, rồi mới đưa mặt còn lại. Dùng trong văn nghị luận để tỏ ra đã nghe lý lẽ kia. Trọng tâm thường nằm sau 但是、然而.",
        note:"Không dùng 诚然 nếu bạn không thật sự đồng ý với vế thừa nhận.",
        examples:[
          {tag:"Câu gốc", zh:"诚然，这个目标很难，但是并不是没有办法。", py:"Chéngrán, zhège mùbiāo hěn nán, dànshì bìng bú shì méiyǒu bànfǎ.", vi:"Quả thật mục tiêu này rất khó, nhưng không phải là không có cách."},
          {tag:"Chi phí", zh:"诚然，成本会上升，但这能减少以后的风险。", py:"Chéngrán, chéngběn huì shàngshēng, dàn zhè néng jiǎnshǎo yǐhòu de fēngxiǎn.", vi:"Quả thật chi phí sẽ tăng, nhưng điều đó có thể giảm rủi ro về sau."},
          {tag:"Học", zh:"诚然，记忆需要时间，但是方法可以让它更快。", py:"Chéngrán, jìyì xūyào shíjiān, dànshì fāngfǎ kěyǐ ràng tā gèng kuài.", vi:"Quả thật ghi nhớ cần thời gian, nhưng phương pháp có thể làm việc đó nhanh hơn."}
        ]
      }

    ]

  };

const GRAMMAR_PACKS = {
    "hsk1_01": { explanation: "是 nối người hoặc vật với danh từ: nói ai là ai, cái gì là cái gì. Dùng khi giới thiệu nghề, quốc tịch, quan hệ, ngày tháng. Không đặt 是 trước tính từ để khen.", note: "Phủ định là 不是. Câu hỏi là thêm 吗 hoặc dùng 是不是.", examples: [
      {tag:"Nghề", zh:"我是学生。", py:"Wǒ shì xuésheng.", vi:"Tôi là học sinh."},
      {tag:"Quan hệ", zh:"她是我姐姐。", py:"Tā shì wǒ jiějie.", vi:"Cô ấy là chị tôi."},
      {tag:"Đồ vật", zh:"这是汉语书。", py:"Zhè shì Hànyǔ shū.", vi:"Đây là sách tiếng Trung."},
      {tag:"Ngày", zh:"今天是星期一。", py:"Jīntiān shì xīngqīyī.", vi:"Hôm nay là thứ Hai."},
      {tag:"Phủ định", zh:"他不是老师，他是医生。", py:"Tā bú shì lǎoshī, tā shì yīshēng.", vi:"Anh ấy không phải giáo viên, anh ấy là bác sĩ."}
    ]},
    "hsk1_02": { explanation: "不是 phủ định câu 是. Dùng khi sửa một danh tính, một đồ vật hoặc một ngày bị nói nhầm.", note: "不 đứng sát trước 是. Không nói 不是很高兴 để phủ định tính từ.", examples: [
      {tag:"Nghề", zh:"我不是老师。", py:"Wǒ bú shì lǎoshī.", vi:"Tôi không phải giáo viên."},
      {tag:"Đồ vật", zh:"这不是咖啡，这是茶。", py:"Zhè bú shì kāfēi, zhè shì chá.", vi:"Đây không phải cà phê, đây là trà."},
      {tag:"Ngày", zh:"明天不是星期日。", py:"Míngtiān bú shì xīngqīrì.", vi:"Ngày mai không phải chủ nhật."},
      {tag:"Quốc tịch", zh:"她不是中国人，她是越南人。", py:"Tā bú shì Zhōngguó rén, tā shì Yuènán rén.", vi:"Cô ấy không phải người Trung Quốc, cô ấy là người Việt Nam."},
      {tag:"Hỏi", zh:"你不是李明吗？", py:"Nǐ bú shì Lǐ Míng ma?", vi:"Bạn không phải Lý Minh sao?"}
    ]},
    "hsk1_03": { explanation: "有 nói sở hữu hoặc sự có mặt. Chủ ngữ có thể là người (tôi có gì) hoặc nơi chốn (ở đâu có gì).", note: "Phủ định là 没有. Hỏi số lượng thì dùng 有几 hoặc 有多少.", examples: [
      {tag:"Gia đình", zh:"我有两个弟弟。", py:"Wǒ yǒu liǎng ge dìdi.", vi:"Tôi có hai em trai."},
      {tag:"Trong phòng", zh:"房间里有一张桌子。", py:"Fángjiān lǐ yǒu yì zhāng zhuōzi.", vi:"Trong phòng có một cái bàn."},
      {tag:"Tên", zh:"她有汉语名字。", py:"Tā yǒu Hànyǔ míngzi.", vi:"Cô ấy có tên tiếng Trung."},
      {tag:"Cửa trường", zh:"学校门口有一家书店。", py:"Xuéxiào ménkǒu yǒu yì jiā shūdiàn.", vi:"Cổng trường có một hiệu sách."},
      {tag:"Hỏi", zh:"你今天下午有时间吗？", py:"Nǐ jīntiān xiàwǔ yǒu shíjiān ma?", vi:"Chiều nay bạn có thời gian không?"}
    ]},
    "hsk1_04": { explanation: "没有 phủ định 有: không sở hữu, hoặc một nơi không có thứ đang nói. Cũng dùng khi thứ đó hết rồi.", note: "Không nói 不有.", examples: [
      {tag:"Không sở hữu", zh:"我没有车。", py:"Wǒ méiyǒu chē.", vi:"Tôi không có xe."},
      {tag:"Lịch học", zh:"今天没有汉语课。", py:"Jīntiān méiyǒu Hànyǔ kè.", vi:"Hôm nay không có tiết tiếng Trung."},
      {tag:"Hết", zh:"冰箱里没有牛奶了。", py:"Bīngxiāng lǐ méiyǒu niúnǎi le.", vi:"Trong tủ lạnh hết sữa rồi."},
      {tag:"Gia đình", zh:"他没有姐姐。", py:"Tā méiyǒu jiějie.", vi:"Anh ấy không có chị gái."},
      {tag:"Hỏi", zh:"你没有问题吗？", py:"Nǐ méiyǒu wèntí ma?", vi:"Bạn không có câu hỏi à?"}
    ]},
    "hsk1_05": { explanation: "Câu kể việc cơ bản xếp chủ ngữ, rồi động từ, rồi tân ngữ. Thời gian có thể đứng trước chủ ngữ, không chen vào giữa động từ và tân ngữ.", note: "Không đảo thành động từ đứng trước chủ ngữ.", examples: [
      {tag:"Uống", zh:"我喝茶。", py:"Wǒ hē chá.", vi:"Tôi uống trà."},
      {tag:"Nấu", zh:"妈妈做饭。", py:"Māma zuò fàn.", vi:"Mẹ nấu cơm."},
      {tag:"Học", zh:"我们学习汉语。", py:"Wǒmen xuéxí Hànyǔ.", vi:"Chúng tôi học tiếng Trung."},
      {tag:"Đọc", zh:"他看中文书。", py:"Tā kàn Zhōngwén shū.", vi:"Anh ấy đọc sách tiếng Trung."},
      {tag:"Đi", zh:"下午我去银行。", py:"Xiàwǔ wǒ qù yínháng.", vi:"Buổi chiều tôi đi ngân hàng."}
    ]},
    "hsk1_06": { explanation: "Tính từ làm vị ngữ thì thường có 很 đứng trước. 很 lúc này vừa nối câu, vừa có nghĩa “khá / rất”. Không thêm 是.", note: "我是好 là sai. Nói 我很好.", examples: [
      {tag:"Sức khỏe", zh:"我很好。", py:"Wǒ hěn hǎo.", vi:"Tôi khỏe."},
      {tag:"Thời tiết", zh:"今天天气很热。", py:"Jīntiān tiānqì hěn rè.", vi:"Hôm nay trời nóng."},
      {tag:"Đồ", zh:"这件衣服很大。", py:"Zhè jiàn yīfu hěn dà.", vi:"Chiếc áo này rộng."},
      {tag:"Người", zh:"她很忙。", py:"Tā hěn máng.", vi:"Cô ấy bận."},
      {tag:"Món ăn", zh:"这个菜很好吃。", py:"Zhège cài hěn hǎochī.", vi:"Món này ngon."}
    ]},
    "hsk1_07": { explanation: "的 nối người sở hữu với đồ, hoặc nối tính chất với danh từ. A 的 B nghĩa là B thuộc về A, hoặc B có tính chất A.", note: "我的书 là sách của tôi. 红的包 là chiếc túi màu đỏ.", examples: [
      {tag:"Của tôi", zh:"这是我的书。", py:"Zhè shì wǒ de shū.", vi:"Đây là sách của tôi."},
      {tag:"Của thầy", zh:"那是老师的杯子。", py:"Nà shì lǎoshī de bēizi.", vi:"Kia là cốc của thầy."},
      {tag:"Nhà bạn", zh:"我朋友的家很近。", py:"Wǒ péngyou de jiā hěn jìn.", vi:"Nhà bạn tôi rất gần."},
      {tag:"Màu", zh:"红色的包是我的。", py:"Hóngsè de bāo shì wǒ de.", vi:"Chiếc túi đỏ là của tôi."},
      {tag:"Bài hôm nay", zh:"今天的作业不多。", py:"Jīntiān de zuòyè bù duō.", vi:"Bài tập hôm nay không nhiều."}
    ]},
    "hsk1_08": { explanation: "这 chỉ người hoặc vật gần người nói. 那 chỉ người hoặc vật xa hơn. Thêm 个 khi có lượng từ: 这个, 那个.", note: "这/那 không đứng sau danh từ.", examples: [
      {tag:"Gần", zh:"这是我的电脑。", py:"Zhè shì wǒ de diànnǎo.", vi:"Đây là máy tính của tôi."},
      {tag:"Xa", zh:"那是图书馆。", py:"Nà shì túshūguǎn.", vi:"Kia là thư viện."},
      {tag:"Người gần", zh:"这个人是我同学。", py:"Zhège rén shì wǒ tóngxué.", vi:"Người này là bạn học của tôi."},
      {tag:"Đồ xa", zh:"那个包不是我的。", py:"Nàge bāo bú shì wǒ de.", vi:"Chiếc túi kia không phải của tôi."},
      {tag:"So hai vật", zh:"这杯茶很热，那杯是凉的。", py:"Zhè bēi chá hěn rè, nà bēi shì liáng de.", vi:"Tách trà này nóng, tách kia nguội."}
    ]},
    "hsk1_09": { explanation: "这里 là chỗ gần người nói. 那里 là chỗ xa hơn. Thường đi với 在 để nói ai đang ở đâu, hoặc đứng một mình khi chỉ chỗ.", note: "这里 không có nghĩa “cái này”. Cái này là 这个.", examples: [
      {tag:"Chờ", zh:"我在这里等你。", py:"Wǒ zài zhèlǐ děng nǐ.", vi:"Tôi đợi bạn ở đây."},
      {tag:"Chỉ chỗ", zh:"车站在那里。", py:"Chēzhàn zài nàlǐ.", vi:"Bến xe ở đằng kia."},
      {tag:"Mời ngồi", zh:"请坐这里。", py:"Qǐng zuò zhèlǐ.", vi:"Mời ngồi đây."},
      {tag:"Có gì ở kia", zh:"那里有一家银行。", py:"Nàlǐ yǒu yì jiā yínháng.", vi:"Đằng kia có một ngân hàng."},
      {tag:"Phủ định", zh:"我们不在这里上课。", py:"Wǒmen bú zài zhèlǐ shàng kè.", vi:"Chúng tôi không học ở đây."}
    ]},
    "hsk1_10": { explanation: "在 đứng ngay trước địa điểm để nói người hoặc vật đang ở đâu. Địa điểm là nhà, công ty, trường, thành phố.", note: "Địa điểm không đứng trước 在.", examples: [
      {tag:"Nhà", zh:"我在家。", py:"Wǒ zài jiā.", vi:"Tôi ở nhà."},
      {tag:"Công ty", zh:"爸爸在公司。", py:"Bàba zài gōngsī.", vi:"Bố ở công ty."},
      {tag:"Trường", zh:"孩子们在学校。", py:"Háizimen zài xuéxiào.", vi:"Bọn trẻ ở trường."},
      {tag:"Thư viện", zh:"今天下午我在图书馆。", py:"Jīntiān xiàwǔ wǒ zài túshūguǎn.", vi:"Chiều nay tôi ở thư viện."},
      {tag:"Hỏi", zh:"你妈妈在哪儿？", py:"Nǐ māma zài nǎr?", vi:"Mẹ bạn ở đâu?"}
    ]},
    "hsk1_11": { explanation: "Đếm danh từ thì số đứng trước, lượng từ ở giữa, danh từ ở sau. Lượng từ đổi theo loại đồ: 个 cho người, 本 cho sách, 杯 cho đồ uống.", note: "Không nói 三学生. Phải có lượng từ: 三个学生.", examples: [
      {tag:"Người", zh:"三个学生在教室里。", py:"Sān ge xuésheng zài jiàoshì lǐ.", vi:"Ba học sinh ở trong lớp."},
      {tag:"Đồ uống", zh:"我要两杯茶。", py:"Wǒ yào liǎng bēi chá.", vi:"Tôi muốn hai tách trà."},
      {tag:"Sách", zh:"桌子上有五本书。", py:"Zhuōzi shàng yǒu wǔ běn shū.", vi:"Trên bàn có năm quyển sách."},
      {tag:"Vé", zh:"他买了一张票。", py:"Tā mǎi le yì zhāng piào.", vi:"Anh ấy mua một vé."},
      {tag:"Cả lớp", zh:"我们班有二十个人。", py:"Wǒmen bān yǒu èrshí ge rén.", vi:"Lớp chúng tôi có hai mươi người."}
    ]},
    "hsk1_12": { explanation: "一 cộng lượng từ đúng loại của danh từ. 本 cho sách, 杯 cho nước, 件 cho áo, 位 cho người khi lịch sự.", note: "Một danh từ đổi lượng từ thì câu đổi nghĩa hoặc thành sai.", examples: [
      {tag:"Sách", zh:"我借了一本书。", py:"Wǒ jiè le yì běn shū.", vi:"Tôi mượn một quyển sách."},
      {tag:"Nước", zh:"请给我一杯水。", py:"Qǐng gěi wǒ yì bēi shuǐ.", vi:"Cho tôi một cốc nước."},
      {tag:"Áo", zh:"她买了一件衣服。", py:"Tā mǎi le yì jiàn yīfu.", vi:"Cô ấy mua một chiếc áo."},
      {tag:"Thầy", zh:"这位老师教汉语。", py:"Zhè wèi lǎoshī jiāo Hànyǔ.", vi:"Vị thầy này dạy tiếng Trung."},
      {tag:"Ăn", zh:"我只要一个面包。", py:"Wǒ zhǐ yào yí ge miànbāo.", vi:"Tôi chỉ cần một cái bánh mì."}
    ]},
    "hsk1_13": { explanation: "几 hỏi số ít, thường dưới mười, và phải có lượng từ. 多少 hỏi số lượng nói chung, dùng được với tiền, người, giờ.", note: "几 không đứng một mình trước danh từ: 几个, 几杯, không nói 几朋友.", examples: [
      {tag:"Bạn", zh:"你有几个朋友？", py:"Nǐ yǒu jǐ ge péngyou?", vi:"Bạn có mấy người bạn?"},
      {tag:"Nhà", zh:"你家有几口人？", py:"Nǐ jiā yǒu jǐ kǒu rén?", vi:"Nhà bạn có mấy người?"},
      {tag:"Giá", zh:"这件衣服多少钱？", py:"Zhè jiàn yīfu duōshao qián?", vi:"Áo này bao nhiêu tiền?"},
      {tag:"Đồ uống", zh:"你要几杯咖啡？", py:"Nǐ yào jǐ bēi kāfēi?", vi:"Bạn muốn mấy tách cà phê?"},
      {tag:"Lớp", zh:"班里有多少学生？", py:"Bān lǐ yǒu duōshao xuésheng?", vi:"Trong lớp có bao nhiêu học sinh?"}
    ]},
    "hsk1_14": { explanation: "Từ chỉ thời gian đứng đầu câu hoặc sau chủ ngữ, trước động từ. Nó cho biết việc xảy ra khi nào, không đứng sau tân ngữ.", note: "今天我去学校 và 我今天去学校 đều đúng. 我去学校今天 thì sai.", examples: [
      {tag:"Hôm nay", zh:"今天我去学校。", py:"Jīntiān wǒ qù xuéxiào.", vi:"Hôm nay tôi đi học."},
      {tag:"Sáng mai", zh:"明天上午我们考试。", py:"Míngtiān shàngwǔ wǒmen kǎoshì.", vi:"Sáng mai chúng tôi thi."},
      {tag:"Giờ", zh:"晚上八点商店关门。", py:"Wǎnshang bā diǎn shāngdiàn guān mén.", vi:"Tám giờ tối cửa hàng đóng cửa."},
      {tag:"Chủ nhật", zh:"星期日妈妈休息。", py:"Xīngqīrì māma xiūxi.", vi:"Chủ nhật mẹ nghỉ."},
      {tag:"Năm ngoái", zh:"去年他住在河内。", py:"Qùnián tā zhù zài Hénèi.", vi:"Năm ngoái anh ấy ở Hà Nội."}
    ]},
    "hsk1_15": { explanation: "在 + địa điểm trả lời “ở đâu”. Địa điểm có thể là thành phố, nhà, hoặc một chỗ cụ thể.", note: "Hỏi bằng 在哪儿 hoặc 在哪里.", examples: [
      {tag:"Thành phố", zh:"他在北京。", py:"Tā zài Běijīng.", vi:"Anh ấy ở Bắc Kinh."},
      {tag:"Nhà", zh:"周末我在家。", py:"Zhōumò wǒ zài jiā.", vi:"Cuối tuần tôi ở nhà."},
      {tag:"Lớp", zh:"学生们在教室。", py:"Xuéshengmen zài jiàoshì.", vi:"Học sinh ở trong lớp."},
      {tag:"Bệnh viện", zh:"奶奶在医院。", py:"Nǎinai zài yīyuàn.", vi:"Bà ở bệnh viện."},
      {tag:"Hỏi", zh:"你的手机在哪儿？", py:"Nǐ de shǒujī zài nǎr?", vi:"Điện thoại của bạn ở đâu?"}
    ]},
    "hsk1_16": { explanation: "上, 下, 里, 外, 前, 后 đứng sau danh từ chỗ để nói vị trí tương đối: trên, dưới, trong, ngoài, trước, sau.", note: "书在桌子上: 上 đứng sau 桌子, không đứng trước.", examples: [
      {tag:"Trên", zh:"书在桌子上。", py:"Shū zài zhuōzi shàng.", vi:"Sách ở trên bàn."},
      {tag:"Dưới", zh:"猫在椅子下。", py:"Māo zài yǐzi xià.", vi:"Con mèo ở dưới ghế."},
      {tag:"Trong", zh:"手机在包里。", py:"Shǒujī zài bāo lǐ.", vi:"Điện thoại ở trong túi."},
      {tag:"Ngoài", zh:"同学们在门外等。", py:"Tóngxuémen zài mén wài děng.", vi:"Các bạn học đợi ngoài cửa."},
      {tag:"Trước", zh:"银行在学校前面。", py:"Yínháng zài xuéxiào qiánmiàn.", vi:"Ngân hàng ở trước trường."}
    ]},
    "hsk1_17": { explanation: "不 phủ định thói quen, ý muốn, hoặc tính từ ở hiện tại và tương lai. Không dùng 不 để nói một việc đã làm xong trong quá khứ.", note: "昨天我不去 là sai nếu việc đã qua. Việc đã qua dùng 没.", examples: [
      {tag:"Thói quen", zh:"我不喝咖啡。", py:"Wǒ bù hē kāfēi.", vi:"Tôi không uống cà phê."},
      {tag:"Tính từ", zh:"今天不冷。", py:"Jīntiān bù lěng.", vi:"Hôm nay không lạnh."},
      {tag:"Ý muốn", zh:"他不想出去。", py:"Tā bù xiǎng chūqu.", vi:"Anh ấy không muốn ra ngoài."},
      {tag:"Tương lai", zh:"明天我不上课。", py:"Míngtiān wǒ bú shàng kè.", vi:"Ngày mai tôi không đi học."},
      {tag:"Hỏi", zh:"你不吃鱼吗？", py:"Nǐ bù chī yú ma?", vi:"Bạn không ăn cá à?"}
    ]},
    "hsk1_18": { explanation: "没 phủ định việc đã xảy ra hoặc việc chưa làm. 没有 phủ định sở hữu. Hai chữ này không thay cho 不 khi nói thói quen.", note: "我没吃饭 = tôi chưa ăn. 我不吃饭 = tôi không ăn cơm (thói quen hoặc từ chối).", examples: [
      {tag:"Chưa ăn", zh:"我没吃饭。", py:"Wǒ méi chī fàn.", vi:"Tôi chưa ăn cơm."},
      {tag:"Chưa đến", zh:"老师还没到。", py:"Lǎoshī hái méi dào.", vi:"Thầy vẫn chưa đến."},
      {tag:"Không có", zh:"我没有地图。", py:"Wǒ méiyǒu dìtú.", vi:"Tôi không có bản đồ."},
      {tag:"Chưa xem", zh:"那部电影我没看。", py:"Nà bù diànyǐng wǒ méi kàn.", vi:"Bộ phim đó tôi chưa xem."},
      {tag:"Hỏi", zh:"你吃早饭了没有？", py:"Nǐ chī zǎofàn le méiyǒu?", vi:"Bạn ăn sáng chưa?"}
    ]},
    "hsk1_19": { explanation: "别 đứng trước động từ để ngăn người khác làm việc đó. Dùng khi nhắc, cấm nhẹ, hoặc lo cho người nghe.", note: "别 không dùng để kể việc mình không làm. Việc của mình dùng 不 hoặc 没.", examples: [
      {tag:"Trong lớp", zh:"别说话。", py:"Bié shuōhuà.", vi:"Đừng nói chuyện."},
      {tag:"Đi đường", zh:"别跑，慢一点儿。", py:"Bié pǎo, màn yìdiǎnr.", vi:"Đừng chạy, chậm một chút."},
      {tag:"Đồ ăn", zh:"汤很烫，别喝。", py:"Tāng hěn tàng, bié hē.", vi:"Canh nóng lắm, đừng uống."},
      {tag:"Lo", zh:"别担心，我马上到。", py:"Bié dānxīn, wǒ mǎshàng dào.", vi:"Đừng lo, tôi đến ngay."},
      {tag:"Nhắc quên", zh:"别忘了关门。", py:"Bié wàng le guān mén.", vi:"Đừng quên đóng cửa."}
    ]},
    "hsk1_20": { explanation: "也 nghĩa là “cũng”, đứng sau chủ ngữ và trước động từ hoặc tính từ. Hai vế phải cùng loại việc.", note: "也 không đứng đầu câu và không đứng sau động từ.", examples: [
      {tag:"Sở thích", zh:"我喜欢中国，他也喜欢。", py:"Wǒ xǐhuan Zhōngguó, tā yě xǐhuan.", vi:"Tôi thích Trung Quốc, anh ấy cũng thích."},
      {tag:"Nghề", zh:"她是学生，我也是学生。", py:"Tā shì xuésheng, wǒ yě shì xuésheng.", vi:"Cô ấy là học sinh, tôi cũng là học sinh."},
      {tag:"Đi", zh:"明天你去，我也去。", py:"Míngtiān nǐ qù, wǒ yě qù.", vi:"Ngày mai bạn đi, tôi cũng đi."},
      {tag:"Tính từ", zh:"今天热，昨天也很热。", py:"Jīntiān rè, zuótiān yě hěn rè.", vi:"Hôm nay nóng, hôm qua cũng nóng."},
      {tag:"Phủ định", zh:"我不喝咖啡，我也不喝茶。", py:"Wǒ bù hē kāfēi, wǒ yě bù hē chá.", vi:"Tôi không uống cà phê, tôi cũng không uống trà."}
    ]},
    "hsk1_21": { explanation: "都 nghĩa là “đều”, bao trùm mọi người hoặc mọi thứ trong phạm vi vừa nêu. 都 đứng sau phạm vi đó, trước động từ.", note: "我们都是学生 đúng. 都我们是学生 sai.", examples: [
      {tag:"Cả nhóm", zh:"我们都是学生。", py:"Wǒmen dōu shì xuésheng.", vi:"Chúng tôi đều là học sinh."},
      {tag:"Mọi người đi", zh:"同学们都去图书馆。", py:"Tóngxuémen dōu qù túshūguǎn.", vi:"Các bạn học đều đi thư viện."},
      {tag:"Mọi món", zh:"这些菜都很好吃。", py:"Zhèxiē cài dōu hěn hǎochī.", vi:"Những món này đều ngon."},
      {tag:"Cả hai", zh:"哥哥和弟弟都在家。", py:"Gēge hé dìdi dōu zài jiā.", vi:"Anh và em đều ở nhà."},
      {tag:"Phủ định", zh:"他们都没来。", py:"Tāmen dōu méi lái.", vi:"Họ đều chưa đến."}
    ]},
    "hsk1_22": { explanation: "很 đứng trước tính từ trong câu miêu tả. Có thể dịch “rất”, nhưng trong câu ngắn nó thường chỉ để câu nghe trọn.", note: "他很好 nói anh ấy ổn hoặc tốt. Muốn “quá tốt” thì dùng 太好了.", examples: [
      {tag:"Người", zh:"他很好。", py:"Tā hěn hǎo.", vi:"Anh ấy ổn."},
      {tag:"Phòng", zh:"这个房间很干净。", py:"Zhège fángjiān hěn gānjìng.", vi:"Phòng này sạch."},
      {tag:"Giá", zh:"那家店的菜很便宜。", py:"Nà jiā diàn de cài hěn piányi.", vi:"Đồ ăn quán kia rẻ."},
      {tag:"Đường", zh:"学校离我家很远。", py:"Xuéxiào lí wǒ jiā hěn yuǎn.", vi:"Trường xa nhà tôi."},
      {tag:"Phủ định", zh:"这个问题不很难。", py:"Zhège wèntí bù hěn nán.", vi:"Câu này không khó lắm."}
    ]},
    "hsk1_23": { explanation: "太 + tính từ + 了 bộc lộ cảm xúc: khen, than, hoặc bất ngờ vì mức độ cao. 了 ở cuối không có nghĩa việc đã xong.", note: "太好了 là mừng. 太贵了 là chê đắt. Không bỏ 了 trong câu cảm thán này.", examples: [
      {tag:"Mừng", zh:"太好了！", py:"Tài hǎo le!", vi:"Tốt quá!"},
      {tag:"Giá", zh:"这件衣服太贵了。", py:"Zhè jiàn yīfu tài guì le.", vi:"Chiếc áo này đắt quá."},
      {tag:"Thời tiết", zh:"今天太热了。", py:"Jīntiān tài rè le.", vi:"Hôm nay nóng quá."},
      {tag:"Việc", zh:"这道题太难了。", py:"Zhè dào tí tài nán le.", vi:"Bài này khó quá."},
      {tag:"Người", zh:"你来得太晚了。", py:"Nǐ lái de tài wǎn le.", vi:"Bạn đến muộn quá."}
    ]},
    "hsk1_24": { explanation: "非常 là “vô cùng”, dùng miêu tả khách quan. 真 là “thật là”, có cảm thán. 最 là “nhất”, phải có nhóm để so.", note: "最 không đứng một mình. Phải biết so với những cái còn lại.", examples: [
      {tag:"非常", zh:"今天非常冷。", py:"Jīntiān fēicháng lěng.", vi:"Hôm nay lạnh vô cùng."},
      {tag:"真", zh:"这碗面真好吃。", py:"Zhè wǎn miàn zhēn hǎochī.", vi:"Bát mì này ngon thật."},
      {tag:"最", zh:"汉语是我最喜欢的课。", py:"Hànyǔ shì wǒ zuì xǐhuan de kè.", vi:"Tiếng Trung là môn tôi thích nhất."},
      {tag:"Người", zh:"她唱得真好听。", py:"Tā chàng de zhēn hǎotīng.", vi:"Cô ấy hát hay thật."},
      {tag:"So trong nhà", zh:"弟弟最矮。", py:"Dìdi zuì ǎi.", vi:"Em trai thấp nhất."}
    ]},
    "hsk1_25": { explanation: "还 nói việc vẫn còn tiếp diễn hoặc vẫn muốn thêm. 再 nói làm thêm một lần nữa, thường là việc chưa làm, hướng về sau.", note: "我还要喝水 = tôi vẫn muốn uống thêm. 你再说一遍 = bạn nói lại một lần nữa.", examples: [
      {tag:"Vẫn muốn", zh:"我还要喝水。", py:"Wǒ hái yào hē shuǐ.", vi:"Tôi vẫn muốn uống nước."},
      {tag:"Vẫn ở", zh:"爸爸还在公司。", py:"Bàba hái zài gōngsī.", vi:"Bố vẫn còn ở công ty."},
      {tag:"Làm lại", zh:"请你再说一遍。", py:"Qǐng nǐ zài shuō yí biàn.", vi:"Bạn nói lại một lần nữa."},
      {tag:"Lần sau", zh:"明天再去银行吧。", py:"Míngtiān zài qù yínháng ba.", vi:"Ngày mai hãy đi ngân hàng."},
      {tag:"Chưa", zh:"我还没吃饭。", py:"Wǒ hái méi chī fàn.", vi:"Tôi vẫn chưa ăn cơm."}
    ]},
    "hsk1_26": { explanation: "会 + động từ nói kỹ năng đã học được: biết nói, biết bơi, biết nấu. Không dùng 会 cho việc chỉ làm được hôm nay vì có giờ.", note: "Việc làm được vì điều kiện hôm nay dùng 能.", examples: [
      {tag:"Nói", zh:"我会说汉语。", py:"Wǒ huì shuō Hànyǔ.", vi:"Tôi biết nói tiếng Trung."},
      {tag:"Nấu", zh:"妈妈会做越南菜。", py:"Māma huì zuò Yuènán cài.", vi:"Mẹ biết nấu món Việt."},
      {tag:"Lái", zh:"他会开车。", py:"Tā huì kāi chē.", vi:"Anh ấy biết lái xe."},
      {tag:"Chưa biết", zh:"我不会写这个字。", py:"Wǒ bú huì xiě zhège zì.", vi:"Tôi không biết viết chữ này."},
      {tag:"Hỏi", zh:"你会游泳吗？", py:"Nǐ huì yóuyǒng ma?", vi:"Bạn biết bơi không?"}
    ]},
    "hsk1_27": { explanation: "能 nói điều kiện cho phép: có giờ, có sức, được phép. Khác 会: 会 là kỹ năng học được, 能 là lần này có làm được không.", note: "我能去 = tôi đi được. 我会去 thường là tôi sẽ đi hoặc tôi biết đường đi.", examples: [
      {tag:"Có giờ", zh:"我今天能去。", py:"Wǒ jīntiān néng qù.", vi:"Hôm nay tôi đi được."},
      {tag:"Sức", zh:"这个箱子不重，我能拿。", py:"Zhège xiāngzi bú zhòng, wǒ néng ná.", vi:"Thùng này không nặng, tôi nhấc được."},
      {tag:"Phép", zh:"这里不能停车。", py:"Zhèlǐ bù néng tíng chē.", vi:"Ở đây không được đỗ xe."},
      {tag:"Giúp", zh:"你能帮我一下吗？", py:"Nǐ néng bāng wǒ yíxià ma?", vi:"Bạn giúp tôi một chút được không?"},
      {tag:"Chưa", zh:"我现在不能接电话。", py:"Wǒ xiànzài bù néng jiē diànhuà.", vi:"Bây giờ tôi không nghe máy được."}
    ]},
    "hsk1_28": { explanation: "想 + động từ là muốn làm việc đó, mới là ý thích hoặc dự định, chưa chắc đã làm. 想 + danh từ thì là nhớ người hoặc nhớ chỗ.", note: "我想喝茶 là muốn uống. 我想妈妈 là nhớ mẹ.", examples: [
      {tag:"Uống", zh:"我想喝水。", py:"Wǒ xiǎng hē shuǐ.", vi:"Tôi muốn uống nước."},
      {tag:"Đi", zh:"周末我想去海边。", py:"Zhōumò wǒ xiǎng qù hǎibiān.", vi:"Cuối tuần tôi muốn ra biển."},
      {tag:"Học", zh:"她想学中文歌。", py:"Tā xiǎng xué Zhōngwén gē.", vi:"Cô ấy muốn học hát tiếng Trung."},
      {tag:"Nhớ", zh:"我很想我的家人。", py:"Wǒ hěn xiǎng wǒ de jiārén.", vi:"Tôi nhớ người nhà lắm."},
      {tag:"Không muốn", zh:"他不想看电影。", py:"Tā bù xiǎng kàn diànyǐng.", vi:"Anh ấy không muốn xem phim."}
    ]},
    "hsk1_29": { explanation: "要 + động từ là quyết định sẽ làm, hoặc cần làm. Mạnh hơn 想. 要 + danh từ là cần món đó.", note: "我要买书 là tôi sẽ mua hoặc tôi cần mua. 我想买书 mới chỉ là muốn.", examples: [
      {tag:"Mua", zh:"我要买书。", py:"Wǒ yào mǎi shū.", vi:"Tôi cần mua sách."},
      {tag:"Đi học", zh:"八点我要上课。", py:"Bā diǎn wǒ yào shàng kè.", vi:"Tám giờ tôi phải đi học."},
      {tag:"Gọi món", zh:"我要一碗米饭。", py:"Wǒ yào yì wǎn mǐfàn.", vi:"Tôi lấy một bát cơm."},
      {tag:"Không cần", zh:"我不要袋子。", py:"Wǒ bú yào dàizi.", vi:"Tôi không cần túi."},
      {tag:"Hỏi", zh:"你要喝茶还是咖啡？", py:"Nǐ yào hē chá háishi kāfēi?", vi:"Bạn lấy trà hay cà phê?"}
    ]},
    "hsk1_30": { explanation: "了 sau động từ, hoặc cuối câu kể việc, báo việc đã xảy ra rồi. Dùng khi thông báo một việc hoàn tất, không dùng cho thói quen hằng ngày.", note: "我每天吃饭 không có 了. 我吃饭了 là lần này tôi ăn rồi.", examples: [
      {tag:"Ăn rồi", zh:"我吃饭了。", py:"Wǒ chī fàn le.", vi:"Tôi ăn cơm rồi."},
      {tag:"Mua rồi", zh:"他买了一件衣服。", py:"Tā mǎi le yì jiàn yīfu.", vi:"Anh ấy đã mua một chiếc áo."},
      {tag:"Đến rồi", zh:"同学们都来了。", py:"Tóngxuémen dōu lái le.", vi:"Các bạn học đều đến rồi."},
      {tag:"Học xong", zh:"我学了十个生词。", py:"Wǒ xué le shí ge shēngcí.", vi:"Tôi đã học mười từ mới."},
      {tag:"Chưa", zh:"作业我还没做。", py:"Zuòyè wǒ hái méi zuò.", vi:"Bài tập tôi vẫn chưa làm."}
    ]},
    "hsk1_31": { explanation: "了 cuối câu sau tính từ hoặc trạng thái báo sự đổi: trước không như vậy, bây giờ thì có. Không phải mọi 了 đều nghĩa là “đã làm xong”.", note: "天气冷了 = trời trở lạnh. Khác với 天气很冷, câu ấy chỉ miêu tả.", examples: [
      {tag:"Trời", zh:"天气冷了。", py:"Tiānqì lěng le.", vi:"Trời trở lạnh rồi."},
      {tag:"Giờ", zh:"现在三点了。", py:"Xiànzài sān diǎn le.", vi:"Bây giờ đã ba giờ."},
      {tag:"Tuổi", zh:"弟弟十岁了。", py:"Dìdi shí suì le.", vi:"Em trai mười tuổi rồi."},
      {tag:"Đó", zh:"叶子红了。", py:"Yèzi hóng le.", vi:"Lá chuyển đỏ rồi."},
      {tag:"Người", zh:"我累了，想休息。", py:"Wǒ lèi le, xiǎng xiūxi.", vi:"Tôi mệt rồi, muốn nghỉ."}
    ]},
    "hsk1_32": { explanation: "在 hoặc 正在 đứng trước động từ khi việc đang diễn ra lúc nói. 正在 nhấn mạnh đúng lúc này vẫn chưa xong.", note: "Không dùng 了 hoàn thành cùng một việc đang làm dở: 我正在吃饭了 thì thừa.", examples: [
      {tag:"Ăn", zh:"我正在吃饭。", py:"Wǒ zhèngzài chī fàn.", vi:"Tôi đang ăn cơm."},
      {tag:"Học", zh:"他们在上课。", py:"Tāmen zài shàng kè.", vi:"Họ đang học."},
      {tag:"Mưa", zh:"外面正在下雨。", py:"Wàimiàn zhèngzài xià yǔ.", vi:"Bên ngoài đang mưa."},
      {tag:"Gọi", zh:"别进来，爸爸在打电话。", py:"Bié jìnlái, bàba zài dǎ diànhuà.", vi:"Đừng vào, bố đang gọi điện."},
      {tag:"Hỏi", zh:"你在做什么？", py:"Nǐ zài zuò shénme?", vi:"Bạn đang làm gì?"}
    ]},
    "hsk1_33": { explanation: "呢 hỏi lại đúng thông tin vừa nói, đổi sang người hoặc việc khác. Người nghe phải dựa vào câu trước để hiểu hỏi gì.", note: "我很好，你呢？ hỏi sức khỏe của bạn. 呢 một mình không thành câu nếu chưa có nội dung phía trước.", examples: [
      {tag:"Sức khỏe", zh:"我很好，你呢？", py:"Wǒ hěn hǎo, nǐ ne?", vi:"Tôi khỏe, còn bạn?"},
      {tag:"Đồ uống", zh:"我喝茶，你呢？", py:"Wǒ hē chá, nǐ ne?", vi:"Tôi uống trà, còn bạn?"},
      {tag:"Ở đâu", zh:"我在家，妈妈呢？", py:"Wǒ zài jiā, māma ne?", vi:"Tôi ở nhà, còn mẹ?"},
      {tag:"Sách", zh:"我的书在这儿，你的呢？", py:"Wǒ de shū zài zhèr, nǐ de ne?", vi:"Sách tôi ở đây, sách bạn đâu?"},
      {tag:"Việc", zh:"作业我做了，你呢？", py:"Zuòyè wǒ zuò le, nǐ ne?", vi:"Bài tập tôi làm rồi, còn bạn?"}
    ]},
    "hsk1_34": { explanation: "吧 cuối câu làm lời nói mềm hơn: rủ, đề nghị, hoặc đoán có căn cứ. Không phải câu hỏi có hoặc không như 吗.", note: "我们走吧 là rủ đi. 你是老师吧 là đoán.", examples: [
      {tag:"Rủ đi", zh:"我们走吧。", py:"Wǒmen zǒu ba.", vi:"Chúng ta đi thôi."},
      {tag:"Mời", zh:"你先坐吧。", py:"Nǐ xiān zuò ba.", vi:"Bạn ngồi trước đi."},
      {tag:"Ăn", zh:"一起吃饭吧。", py:"Yìqǐ chī fàn ba.", vi:"Cùng ăn cơm nhé."},
      {tag:"Đoán", zh:"你是新同学吧？", py:"Nǐ shì xīn tóngxué ba?", vi:"Bạn là bạn học mới phải không?"},
      {tag:"Nghỉ", zh:"太晚了，明天再说吧。", py:"Tài wǎn le, míngtiān zài shuō ba.", vi:"Muộn quá, ngày mai nói tiếp vậy."}
    ]},
    "hsk1_35": { explanation: "吗 biến câu kể thành câu hỏi chỉ trả lời có hoặc không. Không thêm từ để hỏi nào, 什么, 哪儿 vào cùng câu 吗.", note: "你是学生吗 đúng. 你是谁吗 sai.", examples: [
      {tag:"Danh tính", zh:"你是学生吗？", py:"Nǐ shì xuésheng ma?", vi:"Bạn là học sinh không?"},
      {tag:"Ở", zh:"妈妈在家吗？", py:"Māma zài jiā ma?", vi:"Mẹ có ở nhà không?"},
      {tag:"Thích", zh:"你喜欢喝茶吗？", py:"Nǐ xǐhuan hē chá ma?", vi:"Bạn có thích uống trà không?"},
      {tag:"Xong", zh:"作业你做了吗？", py:"Zuòyè nǐ zuò le ma?", vi:"Bạn làm bài tập chưa?"},
      {tag:"Được không", zh:"明天你能来吗？", py:"Míngtiān nǐ néng lái ma?", vi:"Ngày mai bạn đến được không?"}
    ]},
    "hsk1_36": { explanation: "Từ để hỏi đứng đúng chỗ của thành phần bị hỏi. 谁 hỏi người, 什么 hỏi vật, 哪儿 hỏi chỗ, 几 và 多少 hỏi số. Câu vẫn giữ trật tự câu kể.", note: "Không đưa từ để hỏi lên đầu như tiếng Anh, và không thêm 吗.", examples: [
      {tag:"Người", zh:"他是谁？", py:"Tā shì shéi?", vi:"Anh ấy là ai?"},
      {tag:"Vật", zh:"你想喝什么？", py:"Nǐ xiǎng hē shénme?", vi:"Bạn muốn uống gì?"},
      {tag:"Chỗ", zh:"银行在哪儿？", py:"Yínháng zài nǎr?", vi:"Ngân hàng ở đâu?"},
      {tag:"Giờ", zh:"你几点上课？", py:"Nǐ jǐ diǎn shàng kè?", vi:"Bạn mấy giờ học?"},
      {tag:"Giá", zh:"这本书多少钱？", py:"Zhè běn shū duōshao qián?", vi:"Quyển sách này bao nhiêu tiền?"}
    ]},
    "hsk1_37": { explanation: "还是 nối hai lựa chọn trong câu hỏi. Người nghe chọn một. Câu kể “hoặc” không dùng 还是, dùng 或者.", note: "你喝茶还是咖啡？ là hỏi. 我喝茶或者咖啡 là kể.", examples: [
      {tag:"Đồ uống", zh:"你喝茶还是咖啡？", py:"Nǐ hē chá háishi kāfēi?", vi:"Bạn uống trà hay cà phê?"},
      {tag:"Đi", zh:"我们坐公交还是打车？", py:"Wǒmen zuò gōngjiāo háishi dǎchē?", vi:"Chúng ta đi xe buýt hay gọi taxi?"},
      {tag:"Thời gian", zh:"你今天来还是明天来？", py:"Nǐ jīntiān lái háishi míngtiān lái?", vi:"Bạn đến hôm nay hay ngày mai?"},
      {tag:"Màu", zh:"你要红的还是蓝的？", py:"Nǐ yào hóng de háishi lán de?", vi:"Bạn lấy cái đỏ hay cái xanh?"},
      {tag:"Người", zh:"是你去还是我去？", py:"Shì nǐ qù háishi wǒ qù?", vi:"Bạn đi hay tôi đi?"}
    ]},
    "hsk1_38": { explanation: "A不A lặp động từ hoặc tính từ để hỏi có hoặc không, không cần 吗. Phần trả lời lấy chính chữ đó hoặc phủ định bằng 不.", note: "是不是, 有没有, 去不去, 好不好 đều là kiểu này.", examples: [
      {tag:"Là", zh:"你是不是学生？", py:"Nǐ shì bu shì xuésheng?", vi:"Bạn có phải học sinh không?"},
      {tag:"Có", zh:"你有没有时间？", py:"Nǐ yǒu méiyǒu shíjiān?", vi:"Bạn có thời gian không?"},
      {tag:"Đi", zh:"明天你去不去学校？", py:"Míngtiān nǐ qù bu qù xuéxiào?", vi:"Ngày mai bạn có đi học không?"},
      {tag:"Ngon", zh:"这个菜好不好吃？", py:"Zhège cài hǎo bu hǎochī?", vi:"Món này có ngon không?"},
      {tag:"Được", zh:"我们现在走，好不好？", py:"Wǒmen xiànzài zǒu, hǎo bu hǎo?", vi:"Chúng ta đi bây giờ, được không?"}
    ]},
    "hsk1_39": { explanation: "比 so hai bên: A 比 B + tính từ nghĩa là A hơn B về tính đó. 没有 so theo hướng ngược: A 没有 B + tính từ nghĩa là A không bằng B.", note: "Tính từ sau 比 không thêm 很. 我比他很高 là sai.", examples: [
      {tag:"Cao hơn", zh:"他比我高。", py:"Tā bǐ wǒ gāo.", vi:"Anh ấy cao hơn tôi."},
      {tag:"Rẻ hơn", zh:"这家店比那家便宜。", py:"Zhè jiā diàn bǐ nà jiā piányi.", vi:"Quán này rẻ hơn quán kia."},
      {tag:"Không bằng", zh:"我没有他高。", py:"Wǒ méiyǒu tā gāo.", vi:"Tôi không cao bằng anh ấy."},
      {tag:"Bận hơn", zh:"今天比昨天忙。", py:"Jīntiān bǐ zuótiān máng.", vi:"Hôm nay bận hơn hôm qua."},
      {tag:"Hỏi", zh:"河内比北京冷吗？", py:"Hénèi bǐ Běijīng lěng ma?", vi:"Hà Nội có lạnh hơn Bắc Kinh không?"}
    ]},
    "shi-de": { explanation: "是……的 nhấn một chi tiết của việc đã xảy ra: thời gian, nơi, cách, người làm, hoặc mục đích. Việc thì người nghe đã biết, câu chỉ làm rõ chi tiết. Khẳng định: chủ ngữ + 是 + chi tiết + động từ + 的. Phủ định: chủ ngữ + 不是 + chi tiết + động từ + 的. Hỏi: từ để hỏi đứng vào chỗ chi tiết, cuối vẫn là 的.", note: "Không dùng mẫu này cho việc chưa xảy ra. 我是明天来的 thì sai vì ngày mai chưa đến.", examples: [
      {tag:"Nơi", zh:"我是在中国学的。", py:"Wǒ shì zài Zhōngguó xué de.", vi:"Tôi học ở Trung Quốc."},
      {tag:"Cách đi", zh:"我们不是坐出租车去的。", py:"Wǒmen bú shì zuò chūzūchē qù de.", vi:"Chúng tôi không đi bằng taxi."},
      {tag:"Hỏi chỗ mua", zh:"苹果是在哪儿买的？", py:"Píngguǒ shì zài nǎr mǎi de?", vi:"Táo mua ở đâu?"},
      {tag:"Thời gian", zh:"他是去年到河内的。", py:"Tā shì qùnián dào Hénèi de.", vi:"Anh ấy đến Hà Nội vào năm ngoái."},
      {tag:"Người làm", zh:"这道菜是妈妈做的。", py:"Zhè dào cài shì māma zuò de.", vi:"Món này là mẹ nấu."}
    ]},
    "hsk3_kanqilai": { explanation: "看上去 và 看起来 tả vẻ bề ngoài hoặc ấn tượng vừa nhìn: trông có vẻ, xem ra, nhìn thì giống. Đứng sau chủ ngữ, trước tính từ hoặc trước 像. Không dùng khi sự việc đã được kiểm tra và kết luận chắc.", note: "他们看上去有点儿像 chỉ là nhìn giống, chưa phải họ là anh em.", examples: [
      {tag:"Giống", zh:"他们看上去有点儿像。", py:"Tāmen kàn shàngqù yǒudiǎnr xiàng.", vi:"Bọn họ nhìn qua có hơi giống nhau."},
      {tag:"Sức khỏe", zh:"你今天看起来很累。", py:"Nǐ jīntiān kàn qǐlái hěn lèi.", vi:"Hôm nay trông bạn mệt."},
      {tag:"Đồ ăn", zh:"这些菜看上去很新鲜。", py:"Zhèxiē cài kàn shàngqù hěn xīnxiān.", vi:"Những món này trông còn tươi."},
      {tag:"Tuổi", zh:"她看起来很年轻。", py:"Tā kàn qǐlái hěn niánqīng.", vi:"Cô ấy trông rất trẻ."},
      {tag:"Thời tiết", zh:"天看起来要下雨。", py:"Tiān kàn qǐlái yào xià yǔ.", vi:"Trông trời sắp mưa."}
    ]}
  };
  w.OTTER2_GRAMMAR_DATA = grammarData;
  w.OTTER2_GRAMMAR_PACKS = GRAMMAR_PACKS;
})(window);
