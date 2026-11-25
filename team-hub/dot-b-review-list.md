# Danh sách rà soát công khai — Đợt B: hợp nhất kho từ XuCup → thichtiengtrung.io.vn

- Ngày lập: 2026-11-25. Người lập: Mèo (chỉ đọc & đối chiếu, chưa sửa dữ liệu).
- Bản site: repo `aocongtu/thichtiengtrung` @ `f6358a1` (sau Đợt A), file `assets/index2/otter2-hsk-all-data.js` — 11.000 mục.
- Bản XuCup: `xucup-supabase/public/vocab-hsk1..9.json` — 11.000 mục.
- Cách khớp: theo (chữ Hán, cấp HSK); 67 cặp trùng (chữ Hán + cấp) được khớp theo **thứ tự xuất hiện** trong cấp. Chênh lệch pinyin đầu mục (460 điểm, chủ yếu quy ước cách âm tiết) nằm **ngoài phạm vi** danh sách này theo đúng phân công.

## Tóm tắt kết quả — số liệu thật khác với con số khảo sát bước 1

| Hạng mục | Khảo sát bước 1 ghi | Đếm lại trên dữ liệu hiện tại | Ghi chú |
|---|---|---|---|
| Chênh lệch **nghĩa** (`m`) | 51 | **0** | Xem mục 1 — 51 điểm là lỗi khớp cặp của bước 1 |
| Chênh lệch **câu ví dụ** | 62 | **4.549** | Xem mục 2 — 62 cũng là lỗi khớp cặp; 4.549 là toàn bộ điểm mà lớp vá examples-plus đã thay so với bản gốc chung của hai kho |

### Phân loại 4.549 chênh lệch câu ví dụ

| Loại | Số điểm | Bản chất | Đề xuất chung |
|---|---|---|---|
| XuCup **không có** câu ví dụ, site đã được vá thêm câu | 3319 | XuCup để trống (toàn bộ ở HSK7: 1082 · HSK8: 1123 · HSK9: 1114); tiếp thu XuCup = **xoá** câu ví dụ hiện có của site | Giữ bản site (mục 3) |
| Cả hai đều có câu nhưng **khác câu** | 1.139 | Câu của site là bản đã rà soát lại ngày 2026-11-17; câu của XuCup là bản gốc chưa rà soát | Bảng A — giữ bản site 1.139/1.139 |
| Trùng câu, chỉ khác **pinyin của câu** | 10 | Khác biệt rất nhỏ (viết hoa, dấu ngắt âm tiết, gạch nối); riêng 2 điểm pinyin XuCup bị thiếu/sai | Bảng A — tiếp thu XuCup 3, giữ bản site 7 |
| Trùng câu + trùng pinyin, chỉ khác **bản dịch câu** | 81 | 76 điểm chỉ khác dấu kết câu (XuCup dùng dấu 。); 5 điểm khác cách dịch thật sự | Bảng A — giữ bản site 81/81 |

**Tổng đề xuất cho phần câu ví dụ: Tiếp thu XuCup 3 điểm (đều là sửa nhỏ ở pinyin câu) · Giữ bản site 4546 điểm · Cần người xem 0 điểm.**

Lý do tổng quát (có kiểm chứng từng điểm, xem Bảng A): các câu ví dụ phía XuCup là câu gốc lấy từ kho câu mẫu cộng đồng (dạng Tatoeba) **trước** đợt rà soát 2026-11-17 của site. Trong 1.139 điểm khác câu, phía XuCup có ít nhất: 9 câu không chứa từ đầu mục (thay bằng từ khác), 10 câu dùng **sai âm/sai nghĩa** của từ đa âm (得 de→děi, 数 shù→shǔ, 转 zhuàn→zhuǎn, 折 shé→zhé, 卡 qiǎ→kǎ…), và hàng trăm câu chỉ chứa chữ Hán của đầu mục **bên trong một từ khác hoặc tên riêng** （本→日本， 千→千层面， 克→巧克力， 起到→一起到， 取→取消， 有机→机会， 用意→意大利语， 马力→Mary, 蒙→蒙特娄， 丁→尼古丁， 玉→tên người 玉珍…). Phía site sau rà soát: 100% câu chứa đúng từ đầu mục, đúng nghĩa của mục, bản dịch đầy đủ. Đổi sang bản XuCup sẽ là **đi lùi**.

## 1. Chênh lệch NGHĨA — 0 điểm (không có bảng)

Khớp đúng theo (chữ Hán + cấp + thứ tự xuất hiện), nghĩa của hai kho **giống hệt nhau 11.000/11.000**. Kiểm tra chéo theo đa tập (multiset) nghĩa trong từng nhóm (chữ Hán + cấp): 0 nhóm khác nhau — tức hai kho mang **đúng cùng một tập nghĩa**, chỉ là bước 1 đã khớp chéo các mục trùng chữ.

Bằng chứng: 51 điểm của bước 1 tái hiện **chính xác** (51 nghĩa, 62 câu) khi khớp kiểu “lấy mục đầu tiên của XuCup cho mọi mục cùng (chữ Hán + cấp)” — tức mục thứ hai của site bị so với mục thứ nhất của XuCup. Ba ví dụ bước 1 đã nêu đều thuộc dạng này:

| Chữ | Các mục trong CẢ HAI kho (giống hệt nhau) | Bước 1 đã so chéo thế nào |
|---|---|---|
| 花 (HSK2) | ① “hoa; tiêu tiền” — 她买了一束漂亮的花。 ② “hoa văn; sặc sỡ” — 这件衣服的颜色太花了。 | Lấy nghĩa ② của site so với nghĩa ① của XuCup |
| 得 | HSK2 de “trợ từ kết cấu” · HSK3 dé “được, nhận được, đạt được” · HSK3 děi “phải, cần phải” (cả ba đều có ở cả hai kho) | Khớp chéo giữa các mục cùng chữ khác âm/khác cấp |
| 过 (HSK2) | ① “đã từng; trải qua” — 我去过北京。 ② “đi qua; vượt qua” — 他穿过公路。 | Lấy nghĩa ② của site so với nghĩa ① của XuCup |

**Kết luận phần nghĩa: không có gì để tiếp thu — Đợt B không cần đụng vào trường `m` ở bất kỳ mục nào.** Hệ quả phụ: vì nghĩa không đổi, cũng **không tồn tại** trường hợp “đổi nghĩa thì phải đổi cả câu ví dụ đi kèm” — cờ “cặp nghĩa–ví dụ bắt buộc” của Đợt B là **trống**.

## 2. Bảng A — 1.230 điểm câu ví dụ cần rà soát

Quy ước ô: với điểm khác câu, ô ghi `câu (bản dịch câu)`. Với điểm trùng câu, ô chỉ ghi phần khác nhau (pinyin câu hoặc bản dịch câu) và ghi rõ “Câu chung”. Cột Đề xuất ghi kèm lý do ở những điểm đáng chú ý; các điểm còn lại ghi “Giữ bản site” theo kết luận kiểm chứng ở phần tóm tắt.

| # | Cấp | Chữ | Pinyin | Bản site | Bản XuCup | Đề xuất |
|---|---|---|---|---|---|---|
| 1 | HSK1 | 爱 | ài | 我爱我的妈妈。 (Tôi yêu mẹ của tôi.) | 真可爱！ (Đáng yêu thật!) | Giữ bản site |
| 2 | HSK1 | 本 | běn | 我有一本汉语书。 (Tôi có một quyển sách tiếng Trung.) | 我是日本人。 (Tôi là người Nhật.) | Giữ bản site |
| 3 | HSK1 | 超市 | chāoshì | 妈妈去超市买菜。 (Mẹ đi siêu thị mua rau.) | 去了超市。 (Đã đi siêu thị.) | Giữ bản site |
| 4 | HSK1 | 大 | dà | 这个房子很大。 (Ngôi nhà này rất to.) | 我是个大学生。 (Tôi là sinh viên đại học.) | Giữ bản site |
| 5 | HSK1 | 第 | dì | 这次考试我是第一名。 (Kỳ thi lần này tôi đứng thứ nhất.) | 我是第一。 (Tôi đứng thứ nhất.) | Giữ bản site |
| 6 | HSK1 | 点 | diǎn | 我们八点去学校。 (Chúng tôi đến trường lúc tám giờ.) | 和气点。 (Hãy hòa nhã một chút.) | Giữ bản site |
| 7 | HSK1 | 电脑 | diànnǎo | 我小时候还没有电脑。 (Khi tôi còn nhỏ vẫn chưa có máy tính.) | 我小时候的时候还没有电脑。 (Khi tôi còn nhỏ, lúc đó vẫn chưa có máy tính.) | Giữ bản site |
| 8 | HSK1 | 对 | duì | 老师，你说得很对。 (Thưa thầy, thầy nói rất đúng.) | 对不起。 (Xin lỗi.) | Giữ bản site |
| 9 | HSK1 | 二 | èr | 二月天气很冷。 (Tháng hai thời tiết rất lạnh.) | 我二十年前出生。 (Tôi sinh ra cách đây hai mươi năm.) | Giữ bản site |
| 10 | HSK1 | 房间 | fángjiān | 我的房间很干净。 (Phòng của tôi rất sạch sẽ.) | 房间里有火。 (Trong phòng có lửa.) | Giữ bản site |
| 11 | HSK1 | 分 | fēn | 现在八点十分。 (Bây giờ là tám giờ mười phút.) | 我们分手吧。 (Chúng ta chia tay nhé.) | Giữ bản site |
| 12 | HSK1 | 个 | gè | 我有一个苹果。 (Tôi có một quả táo.) | 我个子高。 (Tôi cao người.) | Giữ bản site |
| 13 | HSK1 | 给 | gěi | 妈妈给我买了一本书。 (Mẹ đã mua cho tôi một quyển sách.) | 你给我下来！ (Xuống đây cho tôi!) | Giữ bản site |
| 14 | HSK1 | 汉语 | hànyǔ | Câu chung: 他也学习汉语。 — pinyin câu: Tā yě xuéxí Hànyǔ. | pinyin câu: Tā yě xuéxí hànyǔ. | Giữ bản site — chỉ khác quy ước viết hoa/cách chữ trong pinyin câu, không khác nội dung |
| 15 | HSK1 | 好看 | hǎokàn | 这张照片很好看。 (Tấm ảnh này rất đẹp.) | 好好看这张照片。 (Hãy nhìn kỹ tấm ảnh này.) | Giữ bản site |
| 16 | HSK1 | 会 | huì | 我会说汉语和英语。 (Tôi biết nói tiếng Trung và tiếng Anh.) | 一会儿见！ (Lát nữa gặp nhé!) | Giữ bản site |
| 17 | HSK1 | 家 | jiā | 我家有四个人。 (Nhà tôi có bốn người.) | 他是作家。 (Anh ấy là nhà văn.) | Giữ bản site |
| 18 | HSK1 | 见 | jiàn | 我们明天在学校见。 (Ngày mai chúng ta gặp nhau ở trường.) | 明天再见。 (Ngày mai gặp lại。) | Giữ bản site |
| 19 | HSK1 | 觉得 | juéde | 你觉得这本书怎么样？ (Bạn thấy cuốn sách này thế nào?) | 这个你觉得怎样？ (Bạn thấy cái này thế nào?) | Giữ bản site |
| 20 | HSK1 | 没关系 | méiguānxì | 你来晚了也没关系。 (Bạn đến muộn một chút cũng không sao.) | 没关系。 (Không sao.) | Giữ bản site |
| 21 | HSK1 | 明年 | míngnián | 明年我想去中国学习。 (Năm sau tôi muốn đi Trung Quốc học.) | 我明年17岁。 (Năm sau tôi sẽ 17 tuổi.) | Giữ bản site |
| 22 | HSK1 | 那儿 | nàr | 你的书在那儿。 (Sách của bạn ở đằng kia.) | 你的在那儿呢。 (Của bạn ở đằng kia kìa.) | Giữ bản site |
| 23 | HSK1 | 你好 | nǐhǎo | 你好，我是新学生。 (Xin chào, tôi là học sinh mới.) | 我会给点你好东西。 (Tôi sẽ cho bạn một thứ gì đó hay ho.) | Giữ bản site |
| 24 | HSK1 | 女士 | nǚshì | 那位女士是我的老师。 (Quý cô kia là giáo viên của tôi.) | 我是位女士。 (Tôi là một phụ nữ.) | Giữ bản site |
| 25 | HSK1 | 七 | qī | 他每天七点起床。 (Anh ấy thức dậy lúc bảy giờ mỗi ngày.) | 他向她求婚求了七次。 (Anh ấy đã cầu hôn cô ấy bảy lần.) | Giữ bản site |
| 26 | HSK1 | 起床 | qǐ chuáng | 我每天起床很早。 (Mỗi ngày tôi thức dậy rất sớm.) | 我起床早。 (Tôi dậy sớm.) | Giữ bản site |
| 27 | HSK1 | 前 | qián | 学校前面有一家商店。 (Phía trước trường học có một cửa hàng.) | 零在一前面。 (Số không đứng trước số một.) | Giữ bản site |
| 28 | HSK1 | 千 | qiān | 我们学校有一千个学生。 (Trường chúng tôi có một nghìn học sinh.) | 我爱千层面。 (Tôi thích món lasagna.) | Giữ bản site |
| 29 | HSK1 | 请问 | qǐngwèn | 请问，你叫什么名字？ (Xin hỏi, bạn tên là gì?) | 请问你的名字是？ (Xin hỏi tên của bạn là gì?) | Giữ bản site |
| 30 | HSK1 | 热 | rè | 今天天气很热。 (Hôm nay thời tiết rất nóng.) | 天气热点儿没关系。 (Thời tiết nóng hơn một chút cũng không sao.) | Giữ bản site |
| 31 | HSK1 | 上课 | shàngkè | 我们八点半开始上课。 (Chúng tôi bắt đầu học lúc tám giờ rưỡi.) | 学校8点半开始上课。 (Trường bắt đầu học lúc 8 giờ rưỡi.) | Giữ bản site |
| 32 | HSK1 | 手机 | shǒujī | 我的手机在桌子上。 (Điện thoại của tôi ở trên bàn.) | 给我你的手机。 (Đưa điện thoại của bạn cho tôi.) | Giữ bản site |
| 33 | HSK1 | 书店 | shūdiàn | 我家附近有一家书店。 (Gần nhà tôi có một hiệu sách.) | 百货商店前有个书店。 (Phía trước cửa hàng bách hóa có một hiệu sách.) | Giữ bản site |
| 34 | HSK1 | 它们 | tāmen | 它们都是我的书。 (Chúng đều là sách của tôi.) | 它们中没有我要的。 (Trong số chúng không có thứ tôi muốn.) | Giữ bản site |
| 35 | HSK1 | 天 | tiān | 我每天都学习汉语。 (Mỗi ngày tôi đều học tiếng Trung.) | 今天的天气很好。 (Thời tiết hôm nay rất đẹp。) | Giữ bản site |
| 36 | HSK1 | 下 | xià | 我的朋友住在楼下。 (Bạn tôi sống ở tầng dưới.) | 下午好。 (Chào buổi chiều.) | Giữ bản site |
| 37 | HSK1 | 小 | xiǎo | 这个房间很小。 (Căn phòng này rất nhỏ.) | 他小看女人。 (Anh ta coi thường phụ nữ.) | Giữ bản site |
| 38 | HSK1 | 小时 | xiǎoshí | 她睡了几个小时。 (Cô ấy đã ngủ mấy tiếng.) | 她睡了几小时。 (Cô ấy đã ngủ vài giờ.) | Giữ bản site |
| 39 | HSK1 | 小学 | xiǎoxué | 我妹妹在小学学习。 (Em gái tôi học ở trường tiểu học.) | 这个问题让小学生解决太难了。 (Bài toán này quá khó để học sinh tiểu học giải.) | Giữ bản site |
| 40 | HSK1 | 一半 | yíbàn | 这件工作我只做了一半。 (Việc này tôi mới làm được một nửa.) | 别留着一半工作没干。 (Đừng để một nửa công việc chưa làm xong.) | Giữ bản site |
| 41 | HSK1 | 有的 | yǒude | 有的学生喜欢跑步。 (Một số học sinh thích chạy bộ.) | 你所有的书我都看过了。 (Tôi đã đọc tất cả sách của bạn rồi.) | Giữ bản site |
| 42 | HSK1 | 有点儿 | yǒudiǎnr | 今天工作以后，我有点儿累。 (Hôm nay sau khi làm việc, tôi hơi mệt.) | 她有点儿面包。 (Cô ấy có một ít bánh mì.) | Giữ bản site |
| 43 | HSK1 | 怎么 | zěnme | 你怎么去学校？ (Bạn đi đến trường bằng cách nào?) | 工作怎么样？ (Công việc thế nào?) | Giữ bản site |
| 44 | HSK1 | 中国 | zhōngguó | Câu chung: 他从中国回来了。 — pinyin câu: Tā cóng Zhōngguó huílái le. | pinyin câu: Tā cóng zhōngguó huílái le. | Giữ bản site — chỉ khác quy ước viết hoa/cách chữ trong pinyin câu, không khác nội dung |
| 45 | HSK1 | 中文 | Zhōngwén | Câu chung: 学中文的学生只有他们几个。 — pinyin câu: Xué Zhōngwén de xuéshēng zhǐyǒu tāmen jǐ gè. | pinyin câu: Xué zhōngwén de xuéshēng zhǐyǒu tāmen jǐgè. | Giữ bản site — chỉ khác quy ước viết hoa/cách chữ trong pinyin câu, không khác nội dung |
| 46 | HSK1 | 中学 | zhōngxué | 我弟弟在中学学习。 (Em trai tôi học ở trường trung học.) | 汤姆三年前从高中学校毕业了 (Tom đã tốt nghiệp trường trung học ba năm trước.) | Giữ bản site |
| 47 | HSK2 | 笔 | bǐ | 我用笔写汉字。 (Tôi dùng bút viết chữ Hán.) | 我买了很多笔记本。 (Tôi đã mua rất nhiều quyển sổ.) | Giữ bản site |
| 48 | HSK2 | 出 | chū | 哥哥出去了，还没回来。 (Anh trai đã ra ngoài, vẫn chưa về.) | 我不出名。 (Tôi không nổi tiếng.) | Giữ bản site |
| 49 | HSK2 | 错 | cuò | 这个字写错了。 (Chữ này viết sai rồi.) | 机会错过了。 (Cơ hội đã vuột mất.) | Giữ bản site |
| 50 | HSK2 | 得 | de | 哥哥跑得很快。 (Anh trai chạy rất nhanh.) | 我得去医院。 (Tôi phải đi bệnh viện.) | Giữ bản site — câu XuCup dùng 得 theo nghĩa děi (phải), sai âm và sai nghĩa của mục de (trợ từ) |
| 51 | HSK2 | 地 | de | 他慢慢地走回家。 (Anh ấy chậm rãi đi bộ về nhà.) | 我们见面的地点是学校门口。 (Địa điểm chúng ta gặp nhau là cổng trường.) | Giữ bản site — câu XuCup dùng 地 trong 地点 (dì), không phải trợ từ de |
| 52 | HSK2 | 等 | děng | 请在门口等我一下。 (Hãy đợi tôi một lát ở cửa.) | 他们等得了。 (Họ có thể chờ được.) | Giữ bản site |
| 53 | HSK2 | 跟 | gēn | 我跟朋友一起去公园。 (Tôi đi công viên cùng bạn.) | 我不跟你要好了。 (Tôi không muốn làm hòa với bạn nữa.) | Giữ bản site |
| 54 | HSK2 | 进 | jìn | 请进，坐这里吧。 (Mời vào, ngồi đây nhé.) | 请进。 (Mời vào.) | Giữ bản site |
| 55 | HSK2 | 时 | shí | 现在是什么时候？ (Bây giờ là lúc nào?) | 现在是什么时侯？ (Bây giờ là lúc nào?) | Giữ bản site |
| 56 | HSK2 | 游 | yóu | 小鱼在水里游。 (Con cá nhỏ bơi trong nước.) | 夏天我们喜欢去海边游。 (Mùa hè chúng tôi thích đi chơi ở biển.) | Giữ bản site |
| 57 | HSK3 | 被 | bèi | 我的钱包被小偷偷走了。 (Ví của tôi bị kẻ trộm lấy mất rồi.) | 我不想被他感动。 (Tôi không muốn bị anh ấy làm cảm động.) | Giữ bản site |
| 58 | HSK3 | 变 | biàn | 明天的天气会变冷吗？ (Thời tiết ngày mai có trở lạnh không?) | 有望会变晴。 (Có khả năng trời sẽ chuyển sang quang.) | Giữ bản site |
| 59 | HSK3 | 宾馆 | bīnguǎn | 我们住的宾馆离车站很近。 (Khách sạn chúng tôi ở rất gần nhà ga.) | 请帮我叫宾馆保安。 (Hãy giúp tôi gọi bảo vệ khách sạn.) | Giữ bản site |
| 60 | HSK3 | 必须 | bìxū | 学生必须按时完成作业。 (Học sinh phải hoàn thành bài tập đúng giờ.) | 必须的！ (Nhất định rồi!) | Giữ bản site |
| 61 | HSK3 | 不久 | bùjiǔ | 他刚出门不久就回来了。 (Anh ấy vừa ra ngoài chưa lâu đã quay lại rồi.) | 可能不久会见你。 (Có lẽ chẳng bao lâu nữa tôi sẽ gặp bạn.) | Giữ bản site |
| 62 | HSK3 | 不同 | bùtóng | 我们两个人的想法不同。 (Suy nghĩ của hai chúng tôi khác nhau.) | 你不同意吗？ (Bạn không đồng ý sao?) | Giữ bản site |
| 63 | HSK3 | 不行 | bùxíng | 这个办法不行，我们再想想别的。 (Cách này không được, chúng ta nghĩ cách khác xem.) | 那天我不行。 (Ngày hôm đó tôi không được.) | Giữ bản site |
| 64 | HSK3 | 查 | chá | 不认识的字可以用词典查。 (Chữ không biết có thể dùng từ điển để tra.) | 调查下这个。 (Hãy kiểm tra việc này.) | Giữ bản site |
| 65 | HSK3 | 当然 | dāngrán | 他当然愿意和我们一起去。 (Anh ấy đương nhiên sẵn lòng đi cùng chúng tôi.) | 当然哪！ (Tất nhiên rồi!) | Giữ bản site |
| 66 | HSK3 | 到处 | dàochù | 春天到了，公园里到处都是花。 (Mùa xuân đến rồi, trong công viên khắp nơi đều là hoa.) | 到处都是血。 (Khắp nơi đều có máu.) | Giữ bản site |
| 67 | HSK3 | 大小 | dàxiǎo | 这件衣服的大小正合适。 (Kích cỡ của chiếc áo này vừa đúng.) | 日本比加拿大小。 (Nhật Bản nhỏ hơn Canada.) | Giữ bản site |
| 68 | HSK3 | 得到 | dédào | 他得到了老师的表扬。 (Anh ấy nhận được lời khen của giáo viên.) | 我感觉得到它。 (Tôi có thể cảm nhận được nó.) | Giữ bản site |
| 69 | HSK3 | 灯 | dēng | 晚上房间里的灯很亮。 (Buổi tối đèn trong phòng rất sáng.) | 她在清扫电灯。 (Cô ấy đang lau đèn điện.) | Giữ bản site |
| 70 | HSK3 | 丢 | diū | 我不小心把钥匙丢了。 (Tôi lỡ tay làm mất chìa khóa rồi.) | 他丢脸了。 (Anh ấy mất mặt rồi.) | Giữ bản site |
| 71 | HSK3 | 短 | duǎn | 他的头发很短，看起来很精神。 (Tóc anh ấy rất ngắn, trông rất gọn gàng khỏe khoắn.) | 短回答是是。 (Câu trả lời ngắn là “có”.) | Giữ bản site |
| 72 | HSK3 | 耳朵 | ěrduo | 这只小狗的耳朵很长。 (Tai của chú chó con này rất dài.) | 我们用耳朵听。 (Chúng ta dùng tai để nghe.) | Giữ bản site |
| 73 | HSK3 | 发 | fā | 我给你发了一条短信。 (Tôi đã gửi cho bạn một tin nhắn.) | 你没发烧。 (Bạn không bị sốt.) | Giữ bản site |
| 74 | HSK3 | 放 | fàng | 请把杯子放在桌子上。 (Hãy đặt cái cốc lên bàn.) | 放飞鸟儿。 (Hãy thả con chim bay đi.) | Giữ bản site |
| 75 | HSK3 | 放学 | fàngxué | 我们学校下午三点半放学。 (Trường chúng tôi tan học lúc ba giờ rưỡi chiều.) | 学校3点半放学。 (Trường tan học lúc ba giờ rưỡi.) | Giữ bản site |
| 76 | HSK3 | 发生 | fāshēng | 这种事有时候会发生。 (Chuyện như thế này đôi khi sẽ xảy ra.) | 那有时会发生。 (Điều đó đôi khi sẽ xảy ra.) | Giữ bản site |
| 77 | HSK3 | 发现 | fāxiàn | 我发现了一个学习中文的好方法。 (Tôi đã phát hiện ra một phương pháp học tiếng Trung rất hay.) | 你家很容易发现。 (Nhà bạn rất dễ tìm thấy.) | Giữ bản site |
| 78 | HSK3 | 封 | fēng | 桌子上放着一封信。 (Trên bàn có đặt một lá thư.) | 我在信封上写错了地址。 (Tôi đã viết sai địa chỉ trên phong bì.) | Giữ bản site |
| 79 | HSK3 | 服务 | fúwù | 这家饭店的服务很好。 (Dịch vụ của nhà hàng này rất tốt.) | 我是服务员。 (Tôi là nhân viên phục vụ.) | Giữ bản site |
| 80 | HSK3 | 干 | gàn | 周末他要在家干活。 (Cuối tuần anh ấy phải làm việc ở nhà.) | 来，干杯！ (Nào, cạn ly!) | Giữ bản site |
| 81 | HSK3 | 刚 | gāng | 他刚回家，正在喝水。 (Anh ấy vừa về nhà, đang uống nước.) | 我刚才在家。 (Vừa nãy tôi ở nhà.) | Giữ bản site |
| 82 | HSK3 | 故事 | gùshi | 妈妈给我讲了一个有趣的故事。 (Mẹ kể cho tôi một câu chuyện thú vị.) | 她们看的故事书很热门。 (Những cuốn truyện họ đọc rất được yêu thích.) | Giữ bản site |
| 83 | HSK3 | 河 | hé | 河边有很多人在散步。 (Bên bờ sông có nhiều người đang đi dạo.) | 河水的水位大概是6米。 (Mực nước sông khoảng sáu mét.) | Giữ bản site |
| 84 | HSK3 | 环境 | huánjìng | 他很快就适应了新环境。 (Anh ấy nhanh chóng thích nghi với môi trường mới.) | 我适应新环境很慢。 (Tôi thích nghi với môi trường mới khá chậm.) | Giữ bản site |
| 85 | HSK3 | 或 | huò | 你喝茶或咖啡都可以。 (Bạn uống trà hay cà phê đều được.) | 你或者我会被选中。 (Bạn hoặc tôi sẽ được chọn.) | Giữ bản site |
| 86 | HSK3 | 急 | jí | 别急，火车还没来呢。 (Đừng sốt ruột, tàu vẫn chưa đến đâu.) | 你不要着急。 (Bạn đừng sốt ruột.) | Giữ bản site |
| 87 | HSK3 | 加 | jiā | 请在汤里加一点盐。 (Hãy cho thêm một chút muối vào canh.) | 今天我不加班。 (Hôm nay tôi không làm thêm giờ.) | Giữ bản site |
| 88 | HSK3 | 健康 | jiànkāng | 我希望你身体健康。 (Tôi mong bạn luôn khỏe mạnh.) | 我希望你很健康。 (Tôi mong bạn luôn khỏe mạnh.) | Giữ bản site |
| 89 | HSK3 | 开花 | kāihuā | 春天来了，院子里的花开花了。 (Mùa xuân đến rồi, hoa trong sân đã nở.) | 春天到了，樱花开花了。 (Mùa xuân đến, hoa anh đào đã nở.) | Giữ bản site |
| 90 | HSK3 | 可爱 | kě'ài | Câu chung: 这只小猫真可爱。 — pinyin câu: Zhè zhī xiǎomāo zhēn kěài. | pinyin câu: Zhè zhī xiǎomāo zhēn kě'ài. | Tiếp thu XuCup — chỉ ở pinyin câu: thêm dấu ngắt âm tiết kě’ài cho khớp pinyin đầu mục |
| 91 | HSK3 | 课本 | kèběn | 请打开课本第三页。 (Hãy mở sách giáo khoa trang ba.) | 请打开第三页课本。 (Hãy mở trang ba của sách giáo khoa.) | Giữ bản site |
| 92 | HSK3 | 毛 | máo | 这只小狗的毛很软。 (Lông của chú chó con này rất mềm.) | 这件衣服里面有很多毛。 (Bên trong chiếc áo này có rất nhiều lông.) | Giữ bản site |
| 93 | HSK3 | 名人 | míngrén | 博物馆里有很多名人的照片。 (Trong bảo tàng có ảnh của nhiều danh nhân.) | 他是一位著名的名人。 (Anh ấy là một người nổi tiếng.) | Giữ bản site |
| 94 | HSK3 | 球场 | qiúchǎng | 孩子们正在球场上踢球。 (Bọn trẻ đang đá bóng trên sân.) | 孩子们正在球场踢球。 (Bọn trẻ đang đá bóng trên sân.) | Giữ bản site |
| 95 | HSK3 | 市 | shì | 市中心有很多商店。 (Trung tâm thành phố có nhiều cửa hàng.) | 这个市很大。 (Thành phố này rất lớn.) | Giữ bản site |
| 96 | HSK3 | 受 | shòu | 他受不了这么大的压力。 (Anh ấy không chịu nổi áp lực lớn như vậy.) | 我不能受这么大的压力。 (Tôi không thể chịu áp lực lớn như vậy.) | Giữ bản site |
| 97 | HSK3 | 喜爱 | xǐ’ài | Câu chung: 她非常喜爱这只小狗。 — pinyin câu: Tā fēicháng xǐài zhè zhī xiǎogǒu. | pinyin câu: Tā fēicháng xǐ’ài zhè zhī xiǎogǒu. | Tiếp thu XuCup — chỉ ở pinyin câu: thêm dấu ngắt âm tiết xǐ’ài cho khớp pinyin đầu mục |
| 98 | HSK3 | 校长 | xiàozhǎng | 校长今天来到我们学校。 (Hôm nay hiệu trưởng đến trường chúng tôi.) | 校长今天来到我们的班。 (Hôm nay hiệu trưởng đến lớp chúng tôi.) | Giữ bản site |
| 99 | HSK3 | 有关 | yǒuguān | 这本书和中国历史有关。 (Cuốn sách này có liên quan đến lịch sử Trung Quốc.) | 这本书有关中国历史。 (Cuốn sách này liên quan đến lịch sử Trung Quốc.) | Giữ bản site |
| 100 | HSK3 | 直到 | zhídào | 我在车站等他直到晚上。 (Tôi đợi anh ấy ở nhà ga cho đến tối.) | 我一直等到晚上。 (Tôi đã đợi cho đến tối.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 101 | HSK3 | 自行车 | zìxíngchē | 我的自行车是蓝色的。 (Xe đạp của tôi màu xanh lam.) | 我每天骑自行车上班。 (Tôi mỗi ngày đạp xe đi làm.) | Giữ bản site |
| 102 | HSK4 | 步 | bù | 他向前迈了一步，站到了队伍前面。 (Anh ấy bước lên phía trước một bước, đứng vào phía trước hàng.) | 请慢一步。 (Hãy chậm lại một bước.) | Giữ bản site |
| 103 | HSK4 | 参赛 | cānsài | 她报名参赛，正在认真准备这次比赛。 (Cô ấy đã đăng ký tham gia thi đấu và đang nghiêm túc chuẩn bị cho cuộc thi lần này.) | 她决定参加这次比赛。 (Cô ấy quyết định tham gia cuộc thi lần này.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 104 | HSK4 | 低于 | dīyú | 今天的温度低于十度，出门要多穿衣服。 (Nhiệt độ hôm nay thấp hơn mười độ, ra ngoài cần mặc thêm áo.) | 价格低于去年。 (Giá thấp hơn năm ngoái.) | Giữ bản site |
| 105 | HSK4 | 放松 | fàngsōng | 周末在家听听音乐，放松一下心情。 (Cuối tuần ở nhà nghe nhạc một chút để thư giãn tâm trạng.) | 放松点吧。 (Thư giãn một chút đi.) | Giữ bản site |
| 106 | HSK4 | 费 | fèi | 坐公交车去学校要费多长时间？ (Đi xe buýt đến trường tốn bao nhiêu thời gian?) | 这是免费的。 (Cái này miễn phí.) | Giữ bản site |
| 107 | HSK4 | 费用 | fèiyong | 这次旅行的费用一共是三千元。 (Chi phí cho chuyến đi lần này tổng cộng là ba nghìn tệ.) | 他计算费用。 (Anh ấy tính toán chi phí.) | Giữ bản site |
| 108 | HSK4 | 改变 | gǎibiàn | 来到新学校以后，他改变了很多坏习惯。 (Sau khi đến trường mới, anh ấy đã thay đổi nhiều thói quen xấu.) | 我没改变。 (Tôi không thay đổi.) | Giữ bản site |
| 109 | HSK4 | 干 | gān | 洗好的衣服已经干了，可以收起来了。 (Quần áo giặt xong đã khô rồi, có thể cất đi được rồi.) | 桌子已经干了。 (Cái bàn đã khô rồi.) | Giữ bản site |
| 110 | HSK4 | 感受 | gǎnshòu | 第一次坐飞机时，我感受到了飞行的快乐。 (Lần đầu đi máy bay, tôi đã cảm nhận được niềm vui của việc bay.) | 来感受一下这个。 (Hãy đến cảm nhận thử cái này.) | Giữ bản site |
| 111 | HSK4 | 感谢 | gǎnxiè | 谢谢你的帮助，我非常感谢你。 (Cảm ơn sự giúp đỡ của bạn, tôi vô cùng biết ơn bạn.) | 非常感谢！ (Xin cảm ơn rất nhiều!) | Giữ bản site |
| 112 | HSK4 | 歌手 | gēshǒu | 这位歌手唱歌非常好听，大家都喜欢他。 (Ca sĩ này hát rất hay, mọi người đều yêu thích anh ấy.) | 你不是歌手。 (Bạn không phải ca sĩ.) | Giữ bản site |
| 113 | HSK4 | 各 | gè | 同学们各带了一份礼物，送给生病的老师。 (Các bạn học mỗi người mang một món quà tặng thầy giáo đang bị ốm.) | 他们各自工作。 (Mỗi người trong họ làm việc riêng.) | Giữ bản site |
| 114 | HSK4 | 工人 | gōngrén | 工厂里的工人每天工作都很认真。 (Công nhân trong nhà máy ngày nào làm việc cũng rất nghiêm túc.) | 你真是个努力的工人。 (Bạn đúng là một công nhân chăm chỉ.) | Giữ bản site |
| 115 | HSK4 | 购买 | gòumǎi | 妈妈在超市购买了新鲜的水果和蔬菜。 (Mẹ mua trái cây và rau tươi ở siêu thị.) | 您现在不必购买任何东西。 (Bây giờ ngài không cần mua bất cứ thứ gì.) | Giữ bản site |
| 116 | HSK4 | 估计 | gūjì | 我估计明天会下雨，出门记得带伞。 (Tôi đoán ngày mai trời sẽ mưa, ra ngoài nhớ mang ô.) | 估计那就是个笑话吧。 (Tôi đoán đó chỉ là một câu chuyện cười thôi.) | Giữ bản site |
| 117 | HSK4 | 果汁 | guǒzhī | 早餐的时候，我喝了一杯新鲜的果汁。 (Vào bữa sáng, tôi đã uống một ly nước ép trái cây tươi.) | 我想要果汁。 (Tôi muốn nước ép trái cây.) | Giữ bản site |
| 118 | HSK4 | 害羞 | hàixiū | 她第一次上台唱歌，有一点害羞。 (Lần đầu lên sân khấu hát, cô ấy hơi ngại ngùng.) | 我有点害羞。 (Tôi hơi ngại.) | Giữ bản site |
| 119 | HSK4 | 好处 | hǎochu | 多读书对我们的学习有很大的好处。 (Đọc nhiều sách có lợi ích rất lớn cho việc học của chúng ta.) | 这药对你有好处。 (Thuốc này có lợi cho bạn.) | Giữ bản site |
| 120 | HSK4 | 好笑 | hǎoxiào | 他讲的笑话特别好笑，大家都笑了起来。 (Câu chuyện cười anh ấy kể đặc biệt buồn cười, mọi người đều bật cười.) | 这不好笑。 (Cái này không buồn cười.) | Giữ bản site |
| 121 | HSK4 | 护士 | hùshi | 医院里的护士每天照顾病人，工作很辛苦。 (Y tá trong bệnh viện mỗi ngày chăm sóc bệnh nhân, công việc rất vất vả.) | 她是护士。 (Cô ấy là y tá.) | Giữ bản site |
| 122 | HSK4 | 怀疑 | huáiyí | 我怀疑他忘了今天的会议，因为他还没来。 (Tôi nghi là anh ấy quên cuộc họp hôm nay, vì anh ấy vẫn chưa đến.) | 我们非常怀疑。 (Chúng tôi rất nghi ngờ.) | Giữ bản site |
| 123 | HSK4 | 活 | huó | 这条小鱼离开水以后还能活很长时间。 (Con cá nhỏ này rời khỏi nước rồi vẫn có thể sống rất lâu.) | 他一个人生活。 (Anh ấy sống một mình.) | Giữ bản site |
| 124 | HSK4 | 活泼 | huópo | 这个孩子活泼又可爱，大家都很喜欢他。 (Đứa trẻ này hoạt bát lại dễ thương, mọi người đều rất yêu quý bé.) | 他有点活泼。 (Cậu ấy khá hoạt bát.) | Giữ bản site |
| 125 | HSK4 | 火 | huǒ | 做饭的时候要小心火，别让孩子靠近。 (Khi nấu ăn phải cẩn thận với lửa, đừng để trẻ con lại gần.) | 小心火！ (Cẩn thận lửa!) | Giữ bản site |
| 126 | HSK4 | 基本 | jīběn | 尊重别人是最基本的要求，我们都要做到。 (Tôn trọng người khác là yêu cầu cơ bản nhất, chúng ta đều phải làm được.) | 它是基本人权。 (Đó là quyền con người cơ bản.) | Giữ bản site |
| 127 | HSK4 | 基本上 | jīběnshàng | 这次考试大家基本上都及格了，老师很满意。 (Kỳ thi lần này về cơ bản mọi người đều đạt, thầy giáo rất hài lòng.) | 基本上没有问题。 (Về cơ bản là không có vấn đề.) | Giữ bản site |
| 128 | HSK4 | 即使 | jíshǐ | 即使下雨，我们也要按时出发去旅行。 (Dù trời mưa, chúng tôi vẫn phải khởi hành đi du lịch đúng giờ.) | 即使我知道答案，我也不会告诉你。 (Cho dù tôi biết đáp án, tôi cũng sẽ không nói cho bạn.) | Giữ bản site |
| 129 | HSK4 | 继续 | jìxù | 请继续说下去，我正在认真听呢。 (Xin cứ tiếp tục nói, tôi đang nghiêm túc lắng nghe đây.) | 继续看。 (Tiếp tục xem đi.) | Giữ bản site |
| 130 | HSK4 | 记者 | jìzhě | 她是一名记者，经常去外地采访。 (Cô ấy là một phóng viên, thường đi phỏng vấn ở nơi khác.) | 我是记者。 (Tôi là phóng viên.) | Giữ bản site |
| 131 | HSK4 | 减 | jiǎn | 为了身体健康，他最近减了三公斤。 (Vì sức khỏe, gần đây anh ấy đã giảm được ba kilôgam.) | 请把声音减小一点。 (Hãy giảm âm lượng xuống một chút.) | Giữ bản site |
| 132 | HSK4 | 将来 | jiānglái | 将来我想当一名医生，帮助更多的人。 (Sau này tôi muốn làm bác sĩ để giúp đỡ nhiều người hơn.) | 我不在乎将来。 (Tôi không quan tâm đến tương lai.) | Giữ bản site |
| 133 | HSK4 | 降落 | jiàngluò | 飞机马上就要降落了，请大家系好安全带。 (Máy bay sắp hạ cánh rồi, xin mọi người thắt chặt dây an toàn.) | 明天他会在月球降落。 (Ngày mai anh ấy sẽ hạ cánh xuống Mặt Trăng.) | Giữ bản site |
| 134 | HSK4 | 交通 | jiāotōng | 我家附近交通很方便，出门就有地铁站。 (Giao thông gần nhà tôi rất thuận tiện, ra khỏi nhà là có ga tàu điện ngầm.) | 可能是发生交通事故了吧。 (Có lẽ đã xảy ra tai nạn giao thông.) | Giữ bản site |
| 135 | HSK4 | 教授 | jiàoshòu | 王教授教了三十年中文，学生都很喜欢他。 (Giáo sư Vương đã dạy tiếng Trung ba mươi năm, học sinh đều rất yêu quý thầy.) | 我是教授。 (Tôi là giáo sư.) | Giữ bản site |
| 136 | HSK4 | 教学 | jiàoxué | 她的教学方法很生动，学生都爱听。 (Phương pháp giảng dạy của cô ấy rất sinh động, học sinh đều thích nghe.) | 他享有私人教学的特权。 (Anh ấy có đặc quyền được học riêng.) | Giữ bản site |
| 137 | HSK4 | 叫作 | jiàozuò | 这种花叫作玫瑰，很多人都喜欢它。 (Loại hoa này gọi là hoa hồng, rất nhiều người yêu thích nó.) | 这个地方叫作北京。 (Nơi này được gọi là Bắc Kinh.) | Giữ bản site |
| 138 | HSK4 | 结果 | jiéguǒ | 比赛结果已经出来了，我们队最后赢了。 (Kết quả trận đấu đã có rồi, đội chúng tôi cuối cùng đã thắng.) | 这没有结果。 (Việc này không có kết quả.) | Giữ bản site |
| 139 | HSK4 | 解释 | jiěshì | 老师耐心地解释了这道题的意思。 (Thầy giáo kiên nhẫn giải thích ý nghĩa của câu hỏi này.) | 没时间解释。 (Không có thời gian để giải thích.) | Giữ bản site |
| 140 | HSK4 | 仅 | jǐn | 这次活动仅限本校学生参加。 (Hoạt động lần này chỉ dành cho học sinh của trường tham gia.) | 我仅仅吃了一点。 (Tôi chỉ ăn một chút.) | Giữ bản site |
| 141 | HSK4 | 尽管 | jǐnguǎn | 你有什么问题尽管问我，不用客气。 (Bạn có vấn đề gì cứ hỏi tôi, đừng khách sáo.) | 尽管提问。 (Cứ tự nhiên đặt câu hỏi.) | Giữ bản site |
| 142 | HSK4 | 仅仅 | jǐnjǐn | 他仅仅吃了一口面包，就去上学了。 (Anh ấy chỉ ăn một miếng bánh mì rồi đi học luôn.) | 我仅仅吃了口面包。 (Tôi chỉ ăn một miếng bánh mì.) | Giữ bản site |
| 143 | HSK4 | 禁止 | jìnzhǐ | 图书馆里禁止大声说话，请大家保持安静。 (Trong thư viện cấm nói to, xin mọi người giữ yên lặng.) | 禁止吸烟。 (Cấm hút thuốc.) | Giữ bản site |
| 144 | HSK4 | 及时 | jíshí | 他坐出租车去车站，及时赶上了火车。 (Anh ấy đi taxi đến nhà ga và kịp thời bắt được chuyến tàu.) | 他打出租车以及时赶到。 (Anh ấy bắt taxi để kịp thời đến nơi.) | Giữ bản site |
| 145 | HSK4 | 聚 | jù | 周末老朋友们聚在一起吃饭聊天。 (Cuối tuần những người bạn cũ tụ tập cùng nhau ăn cơm và trò chuyện.) | 开个聚会很好。 (Tổ chức một buổi tụ họp thì rất hay.) | Giữ bản site |
| 146 | HSK4 | 拒绝 | jùjué | 他邀请我去参加聚会，但我有事，只好拒绝了。 (Anh ấy mời tôi đi dự buổi tụ họp, nhưng tôi có việc nên đành từ chối.) | 我必须拒绝。 (Tôi buộc phải từ chối.) | Giữ bản site |
| 147 | HSK4 | 举行 | jǔxíng | 明天学校将在礼堂举行毕业典礼。 (Ngày mai trường sẽ tổ chức lễ tốt nghiệp tại hội trường.) | 明天举行典礼。 (Ngày mai sẽ tổ chức buổi lễ.) | Giữ bản site |
| 148 | HSK4 | 开玩笑 | kāi wánxiào | 我刚才是在开玩笑，你别当真。 (Lúc nãy tôi chỉ đùa thôi, bạn đừng coi là thật.) | 我开玩笑。 (Tôi đang đùa.) | Giữ bản site |
| 149 | HSK4 | 烤 | kǎo | 爸爸正在院子里烤肉，闻起来真香。 (Bố đang nướng thịt trong sân, ngửi thơm thật.) | 我喜欢烧烤食物。 (Tôi thích đồ ăn nướng.) | Giữ bản site |
| 150 | HSK4 | 考虑 | kǎolǜ | 这件事很重要，我要认真考虑一下。 (Việc này rất quan trọng, tôi cần cân nhắc kỹ một chút.) | 我之后再考虑。 (Sau đó tôi sẽ cân nhắc thêm.) | Giữ bản site |
| 151 | HSK4 | 咳 | ké | 他咳了几声，嗓子好像有点不舒服。 (Anh ấy ho vài tiếng, cổ họng dường như hơi khó chịu.) | 我咳嗽。 (Tôi bị ho.) | Giữ bản site |
| 152 | HSK4 | 克 | kè | 这袋糖一共五百克，我们买一袋吧。 (Túi đường này tổng cộng năm trăm gam, chúng ta mua một túi nhé.) | 谁要热巧克力？ (Ai muốn sô-cô-la nóng?) | Giữ bản site |
| 153 | HSK4 | 肯定 | kěndìng | 他肯定会按时来，你就放心吧。 (Anh ấy chắc chắn sẽ đến đúng giờ, bạn cứ yên tâm.) | 你绝对肯定吗？ (Bạn chắc chắn tuyệt đối chứ?) | Giữ bản site |
| 154 | HSK4 | 可惜 | kěxī | 他没能参加这次比赛，真是太可惜了。 (Anh ấy không thể tham gia cuộc thi lần này, thật là đáng tiếc.) | 太可惜了！ (Tiếc quá!) | Giữ bản site |
| 155 | HSK4 | 科学 | kēxué | 科学的发展让我们的生活越来越方便。 (Sự phát triển của khoa học khiến cuộc sống của chúng ta ngày càng thuận tiện.) | 我不喜欢科学。 (Tôi không thích khoa học.) | Giữ bản site |
| 156 | HSK4 | 空 | kòng | 下午我有空，可以陪你去书店看书。 (Chiều nay tôi rảnh, có thể đi cùng bạn đến hiệu sách xem sách.) | 杯子已经空了。 (Cái cốc đã rỗng rồi。) | Giữ bản site |
| 157 | HSK4 | 恐怕 | kǒngpà | 恐怕今天来不及做完了，我们明天再继续吧。 (E rằng hôm nay không kịp làm xong, chúng ta ngày mai làm tiếp nhé.) | 恐怕不行。 (E rằng không được.) | Giữ bản site |
| 158 | HSK4 | 空气 | kōngqì | 早晨公园里的空气很清新，让人很舒服。 (Không khí buổi sáng trong công viên rất trong lành, khiến người ta thấy dễ chịu.) | 空气有点冷。 (Không khí hơi lạnh.) | Giữ bản site |
| 159 | HSK4 | 苦 | kǔ | 这药虽然很苦，但是对身体有好处。 (Thuốc này tuy rất đắng nhưng tốt cho cơ thể.) | 大家辛苦了！ (Mọi người đã vất vả rồi!) | Giữ bản site |
| 160 | HSK4 | 快速 | kuàisù | 网络快速发展，改变了人们的生活方式。 (Mạng internet phát triển nhanh chóng đã thay đổi cách sống của mọi người.) | 我被他英语的快速进步惊呆了。 (Tôi kinh ngạc trước sự tiến bộ nhanh chóng của tiếng Anh của anh ấy.) | Giữ bản site |
| 161 | HSK4 | 困 | kùn | 昨晚没睡好，我现在困得睁不开眼睛。 (Đêm qua ngủ không ngon, bây giờ tôi buồn ngủ đến mức không mở nổi mắt.) | 我呼吸困难。 (Tôi khó thở.) | Giữ bản site |
| 162 | HSK4 | 懒 | lǎn | 他一点也不懒，每天都起得很早。 (Anh ấy chẳng lười chút nào, ngày nào cũng dậy rất sớm.) | 所有人都喜欢偷懒。 (Ai cũng thích lười biếng.) | Giữ bản site |
| 163 | HSK4 | 浪漫 | làngmàn | 他们在海边一起吃晚饭，气氛非常浪漫。 (Họ cùng ăn tối bên bờ biển, không khí vô cùng lãng mạn.) | 汤姆非常的浪漫。 (Tom rất lãng mạn.) | Giữ bản site |
| 164 | HSK4 | 老虎 | lǎohǔ | 动物园的老虎很大，孩子们都喜欢看。 (Hổ trong vườn thú rất to, các bé đều thích xem.) | 这不是老虎。 (Đây không phải là con hổ.) | Giữ bản site |
| 165 | HSK4 | 冷静 | lěngjìng | 遇到问题时要先冷静下来，再慢慢想办法。 (Khi gặp vấn đề cần bình tĩnh lại trước, rồi từ từ nghĩ cách giải quyết.) | 冷静点。 (Bình tĩnh một chút.) | Giữ bản site |
| 166 | HSK4 | 连 | lián | 连小孩子都会做这道题，你也试试吧。 (Ngay cả trẻ con cũng làm được câu này, bạn cũng thử xem nhé.) | 连小孩儿都会做。 (Ngay cả trẻ con cũng làm được.) | Giữ bản site |
| 167 | HSK4 | 凉 | liáng | 秋天到了，天气慢慢凉了下来。 (Mùa thu đến rồi, thời tiết dần mát lạnh hơn.) | 他着凉了。 (Anh ấy bị cảm lạnh rồi.) | Giữ bản site |
| 168 | HSK4 | 量 | liáng | 他量了一下桌子的长度，正好是一米。 (Anh ấy đo chiều dài của chiếc bàn, vừa đúng một mét.) | 尽量别迷路。 (Cố gắng hết sức đừng để bị lạc.) | Giữ bản site |
| 169 | HSK4 | 联系 | liánxì | 有问题请随时联系我，我会尽快回复你。 (Có vấn đề gì xin cứ liên hệ với tôi bất cứ lúc nào, tôi sẽ trả lời bạn sớm nhất.) | 联系我。 (Hãy liên hệ với tôi.) | Giữ bản site |
| 170 | HSK4 | 列 | liè | 老师把学生名单列出来，贴在了墙上。 (Thầy giáo liệt kê danh sách học sinh ra và dán lên tường.) | 列车已经出发。 (Tàu đã khởi hành.) | Giữ bản site |
| 171 | HSK4 | 例如 | lìrú | 我喜欢很多水果，例如苹果和香蕉。 (Tôi thích nhiều loại trái cây, ví dụ như táo và chuối.) | 很多地方有卖的，例如这里。 (Nhiều nơi có bán, ví dụ như ở đây.) | Giữ bản site |
| 172 | HSK4 | 留 | liú | 放学以后，老师让我留下来打扫教室。 (Sau giờ học, thầy giáo bảo tôi ở lại quét dọn lớp học.) | 我不能留下。 (Tôi không thể ở lại.) | Giữ bản site |
| 173 | HSK4 | 流 | liú | 小河里的水流得很慢，河边开满了花。 (Nước trong con sông nhỏ chảy rất chậm, ven sông hoa nở đầy.) | 我在流血。 (Tôi đang chảy máu.) | Giữ bản site |
| 174 | HSK4 | 理想 | lǐxiǎng | 她从小的理想是当一名医生。 (Ước mơ từ nhỏ của cô ấy là trở thành một bác sĩ.) | 他被证实是个理想丈夫。 (Anh ấy được chứng minh là một người chồng lý tưởng.) | Giữ bản site |
| 175 | HSK4 | 例子 | lìzi | 老师举了一个例子，大家马上就明白了。 (Thầy giáo nêu một ví dụ, mọi người lập tức hiểu ngay.) | 给我个例子。 (Cho tôi một ví dụ.) | Giữ bản site |
| 176 | HSK4 | 落 | luò | 秋天到了，树上的叶子慢慢落了下来。 (Mùa thu đến rồi, lá trên cây từ từ rơi xuống.) | 叶子落了。 (Lá rụng rồi.) | Giữ bản site |
| 177 | HSK4 | 律师 | lǜshī | 我姐姐是一名律师，工作非常认真。 (Chị gái tôi là một luật sư, làm việc rất nghiêm túc.) | 我是你的律师。 (Tôi là luật sư của bạn.) | Giữ bản site |
| 178 | HSK4 | 麻烦 | máfan | 他今天遇到了麻烦，需要朋友的帮助。 (Hôm nay anh ấy gặp rắc rối, cần sự giúp đỡ của bạn bè.) | 他有麻烦。 (Anh ấy đang gặp rắc rối.) | Giữ bản site |
| 179 | HSK4 | 满 | mǎn | 杯子里装满了水，端的时候要小心。 (Trong cốc đã rót đầy nước, khi bưng phải cẩn thận.) | 他们满意了。 (Họ đã hài lòng.) | Giữ bản site |
| 180 | HSK4 | 美 | měi | 这里的风景很美，游客都喜欢在这里拍照。 (Phong cảnh ở đây rất đẹp, du khách đều thích chụp ảnh tại đây.) | 很美味。 (Rất ngon.) | Giữ bản site |
| 181 | HSK4 | 梦想 | mèngxiǎng | Câu chung: 每个人都有自己的梦想。 — dịch: Mỗi người đều có ước mơ của riêng mình. | dịch: Mỗi người đều có ước mơ của riêng mình。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 182 | HSK4 | 免费 | miǎnfèi | Câu chung: 这里的水是免费的。 — dịch: Nước ở đây miễn phí. | dịch: Nước ở đây miễn phí。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 183 | HSK4 | 秒 | miǎo | 这次赛跑他只用了十三秒。 (Lần chạy này anh ấy chỉ mất mười ba giây.) | 这次赛跑他用了13秒。 (Lần chạy này anh ấy mất 13 giây.) | Giữ bản site |
| 184 | HSK4 | 末 | mò | Câu chung: 学期末我们很忙。 — dịch: Cuối học kỳ chúng tôi rất bận. | dịch: Cuối học kỳ chúng tôi rất bận。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 185 | HSK4 | 目的 | mùdì | 他这样做的目的是帮助大家。 (Anh ấy làm như vậy là để giúp đỡ mọi người.) | 这是我的目的。 (Đây là mục đích của tôi.) | Giữ bản site |
| 186 | HSK4 | 目前 | mùqián | 目前我有很多问题需要解决。 (Hiện tại tôi có nhiều vấn đề cần giải quyết.) | 目前我问题很多。 (Hiện tại tôi có rất nhiều vấn đề.) | Giữ bản site |
| 187 | HSK4 | 耐心 | nàixīn | 她很有耐心，教孩子读书从不生气。 (Cô ấy rất kiên nhẫn, dạy trẻ đọc sách mà không bao giờ nổi giận.) | 耐心等着。 (Kiên nhẫn chờ nhé.) | Giữ bản site |
| 188 | HSK4 | 难道 | nándào | 难道你不知道今天要考试吗？ (Chẳng lẽ bạn không biết hôm nay phải thi sao?) | 难道你不想念什么吗？ (Chẳng lẽ bạn không nhớ điều gì sao?) | Giữ bản site |
| 189 | HSK4 | 难受 | nánshòu | 我今天身体有点难受，想早点休息。 (Hôm nay người tôi hơi khó chịu, muốn nghỉ sớm một chút.) | 我难受三周了。 (Tôi đã khó chịu suốt ba tuần rồi.) | Giữ bản site |
| 190 | HSK4 | 难忘 | nánwàng | 毕业旅行给我们留下了难忘的回忆。 (Chuyến đi tốt nghiệp đã để lại cho chúng tôi những kỷ niệm khó quên.) | 一场令人难忘的事件发生了。 (Một sự kiện khó quên đã xảy ra.) | Giữ bản site |
| 191 | HSK4 | 内 | nèi | 室内的温度比外面高很多。 (Nhiệt độ trong phòng cao hơn bên ngoài nhiều.) | 室内无人。 (Trong phòng không có ai.) | Giữ bản site |
| 192 | HSK4 | 能够 | nénggòu | 只要努力，你能够实现自己的目标。 (Chỉ cần cố gắng, bạn có thể thực hiện được mục tiêu của mình.) | 她不能够见他。 (Cô ấy không thể gặp anh ấy.) | Giữ bản site |
| 193 | HSK4 | 弄 | nòng | 他不小心把衣服弄脏了。 (Anh ấy lỡ làm bẩn quần áo.) | 他用毛巾弄干自己。 (Anh ấy dùng khăn lau khô người.) | Giữ bản site |
| 194 | HSK4 | 女性 | nǚxìng | 她是一位独立的女性。 (Cô ấy là một người phụ nữ độc lập.) | 你是位了不起的女性。 (Bạn là một người phụ nữ tuyệt vời.) | Giữ bản site |
| 195 | HSK4 | 偶尔 | ǒu'ěr | 这种事偶尔会发生，不用太担心。 (Chuyện này thỉnh thoảng vẫn xảy ra, không cần quá lo lắng.) | 它偶尔会发生。 (Điều đó đôi khi xảy ra.) | Giữ bản site |
| 196 | HSK4 | 排队 | pái duì | Câu chung: 买票的人正在排队。 — dịch: Những người mua vé đang xếp hàng. | dịch: Những người mua vé đang xếp hàng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 197 | HSK4 | 陪 | péi | 妈妈陪孩子在公园里玩。 (Mẹ chơi cùng con ở công viên.) | 爷爷在陪孙女玩。 (Ông đang chơi cùng cháu gái.) | Giữ bản site |
| 198 | HSK4 | 片 | piàn | 早餐时他吃了一片面包。 (Lúc ăn sáng, anh ấy ăn một lát bánh mì.) | 她喜欢拍照片。 (Cô ấy thích chụp ảnh.) | Giữ bản site |
| 199 | HSK4 | 皮鞋 | píxié | 他穿着一双黑色的皮鞋。 (Anh ấy đi một đôi giày da màu đen.) | 我要他擦亮我的皮鞋。 (Tôi bảo anh ấy đánh bóng đôi giày da của tôi.) | Giữ bản site |
| 200 | HSK4 | 普遍 | pǔbiàn | 这种情况在生活中很普遍。 (Tình trạng này rất phổ biến trong cuộc sống.) | 学术造假比你想象的普遍。 (Gian lận học thuật phổ biến hơn bạn tưởng.) | Giữ bản site |
| 201 | HSK4 | 葡萄 | pútao | 妈妈买了些新鲜葡萄。 (Mẹ mua ít nho tươi.) | 我喜欢葡萄酒。 (Tôi thích rượu vang.) | Giữ bản site |
| 202 | HSK4 | 葡萄酒 | pútaojiǔ | Câu chung: 晚餐时我们喝了一点葡萄酒。 — dịch: Trong bữa tối chúng tôi uống một ít rượu vang. | dịch: Trong bữa tối chúng tôi uống một ít rượu vang。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 203 | HSK4 | 普通 | pǔtōng | Câu chung: 那个名字很普通吗？ — dịch: Cái tên đó bình thường lắm à? | dịch: Cái tên đó có phổ biến không? | Giữ bản site — hai bản dịch ngang nhau; giữ bản site để nhất quán với thứ tự nghĩa của đầu mục |
| 204 | HSK4 | 普通话 | pǔtōnghuà | Câu chung: 我同事的普通话说得很好。 — dịch: Đồng nghiệp tôi nói tiếng Phổ thông rất tốt. | dịch: Tiếng Phổ thông của đồng nghiệp tôi nói rất tốt. | Giữ bản site — bản dịch của site tự nhiên hơn; bản XuCup dịch cứng theo cấu trúc tiếng Trung |
| 205 | HSK4 | 气 | qì | 他深深地吸了一口气。 (Anh ấy hít một hơi thật sâu.) | 他生气了。 (Anh ấy tức giận rồi。) | Giữ bản site |
| 206 | HSK4 | 期 | qī | Câu chung: 这个学期快结束了。 — dịch: Học kỳ này sắp kết thúc rồi. | dịch: Học kỳ này sắp kết thúc rồi。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 207 | HSK4 | 前后 | qiánhòu | 我们五点前后到车站。 (Khoảng năm giờ chúng tôi đến nhà ga.) | 故事的前后都很精彩。 (Đầu và cuối câu chuyện đều rất hấp dẫn.) | Giữ bản site |
| 208 | HSK4 | 桥 | qiáo | 这座桥正在修理，暂时不能过。 (Cây cầu này đang sửa, tạm thời không qua được.) | 桥处于修理中。 (Cây cầu đang được sửa chữa.) | Giữ bản site |
| 209 | HSK4 | 巧克力 | qiǎokèlì | Câu chung: 孩子很喜欢吃巧克力。 — dịch: Đứa trẻ rất thích ăn sô-cô-la. | dịch: Đứa trẻ rất thích ăn sô-cô-la。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 210 | HSK4 | 起到 | qǐdào | 运动对健康起到很大的作用。 (Vận động có tác dụng rất lớn đối với sức khỏe.) | 要不一起到车站去？ (Hay là cùng đến nhà ga nhé?) | Giữ bản site |
| 211 | HSK4 | 气候 | qìhòu | 我已经习惯了这里的气候。 (Tôi đã quen với khí hậu ở đây.) | 我对这气候习惯了。 (Tôi đã quen với khí hậu này.) | Giữ bản site |
| 212 | HSK4 | 琴 | qín | Câu chung: 她会弹琴。 — dịch: Cô ấy biết chơi đàn. | dịch: Cô ấy biết chơi đàn。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 213 | HSK4 | 轻 | qīng | 这个箱子很轻，我一个人就能搬。 (Cái vali này rất nhẹ, một mình tôi cũng xách được.) | 你还年轻。 (Bạn vẫn còn trẻ.) | Giữ bản site |
| 214 | HSK4 | 球队 | qiúduì | 一支足球队有十一名球员。 (Một đội bóng đá có mười một cầu thủ.) | 一个足球队由十一个球员组成。 (Một đội bóng đá gồm mười một cầu thủ.) | Giữ bản site |
| 215 | HSK4 | 取 | qǔ | 他去银行取了一笔钱。 (Anh ấy đến ngân hàng rút một khoản tiền.) | 会议取消了。 (Cuộc họp đã bị hủy.) | Giữ bản site |
| 216 | HSK4 | 全 | quán | Câu chung: 全家人都来了。 — dịch: Cả gia đình đều đến. | dịch: Cả gia đình đều đến。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 217 | HSK4 | 全都 | quándōu | 这些礼物他全都收下了。 (Những món quà này anh ấy đều nhận cả.) | 您全都有。 (Ngài có tất cả.) | Giữ bản site |
| 218 | HSK4 | 入 | rù | 他推开门，走入了教室。 (Anh ấy đẩy cửa, bước vào lớp học.) | 请从这个门入。 (Xin hãy vào từ cửa này.) | Giữ bản site |
| 219 | HSK4 | 生 | shēng | Câu chung: 这些菜还是生的。 — dịch: Những món này vẫn còn sống, chưa được nấu chín. | dịch: Những món rau này vẫn còn sống/chưa nấu. | Giữ bản site — bản dịch của site đầy đủ, rõ nghĩa hơn |
| 220 | HSK4 | 摄氏度 | shèshìdù | 今天的气温是三十摄氏度。 (Nhiệt độ hôm nay là ba mươi độ C.) | 今天有三十摄氏度。 (Hôm nay là 30 độ C.) | Giữ bản site |
| 221 | HSK4 | 市场 | shìchǎng | 周末的菜市场总是很热闹。 (Chợ rau cuối tuần lúc nào cũng nhộn nhịp.) | 这个市场每天都很忙。 (Thị trường/chợ này ngày nào cũng rất nhộn nhịp.) | Giữ bản site |
| 222 | HSK4 | 师傅 | shīfu | Câu chung: 师傅，请问车什么时候到？ — dịch: Bác tài ơi, cho hỏi khi nào xe đến? | dịch: Bác tài/người thợ, cho hỏi xe khi nào đến? | Giữ bản site — bản dịch của site đúng ngữ cảnh (gọi bác tài) |
| 223 | HSK4 | 使用 | shǐyòng | 请按照说明正确使用这台机器。 (Hãy sử dụng chiếc máy này đúng cách theo hướng dẫn.) | 请正确使用这个机器。 (Hãy sử dụng chiếc máy này đúng cách.) | Giữ bản site |
| 224 | HSK4 | 数 | shù | 这个数太大了，我记不住。 (Con số này lớn quá, tôi không nhớ nổi.) | 请数一下有多少人。 (Hãy đếm xem có bao nhiêu người.) | Giữ bản site — câu XuCup dùng 数 với âm shǔ (đếm), sai âm của mục shù (con số) |
| 225 | HSK4 | 随着 | suízhe | 随着年龄增长，他的想法变了很多。 (Càng lớn tuổi, suy nghĩ của anh ấy càng thay đổi nhiều.) | 随着时间变化，天气也变了。 (Cùng với thời gian thay đổi, thời tiết cũng thay đổi.) | Giữ bản site |
| 226 | HSK4 | 弹 | tán | Câu chung: 她很会弹琴。 — dịch: Cô ấy chơi đàn rất giỏi. | dịch: Cô ấy chơi đàn rất giỏi。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 227 | HSK4 | 为 | wéi | 他被大家选为班长。 (Anh ấy được mọi người bầu làm lớp trưởng.) | 他为大家做了很多事。 (Anh ấy đã làm rất nhiều việc cho mọi người.) | Giữ bản site |
| 228 | HSK4 | 味 | wèi | 这道菜味很重，我吃不惯。 (Món này vị rất đậm, tôi ăn không quen.) | 这个汤的味很好。 (Vị của món canh này rất ngon.) | Giữ bản site |
| 229 | HSK4 | 无 | wú | 他对此事一无所知。 (Anh ấy hoàn toàn không biết gì về việc này.) | 这里无水可喝。 (Ở đây không có nước để uống.) | Giữ bản site |
| 230 | HSK4 | 细 | xì | 这根线太细了，很容易断。 (Sợi dây này mảnh quá, rất dễ đứt.) | 请说得详细一点，不要太细。 (Hãy nói chi tiết hơn một chút.) | Giữ bản site |
| 231 | HSK4 | 项 | xiàng | 我们完成了两项任务。 (Chúng tôi đã hoàn thành hai nhiệm vụ.) | 这个项目有五个重要项目。 (Dự án này có năm hạng mục quan trọng.) | Giữ bản site |
| 232 | HSK4 | 心 | xīn | 他有一颗善良的心。 (Anh ấy có một trái tim nhân hậu.) | 她很开心。 (Cô ấy rất vui.) | Giữ bản site |
| 233 | HSK4 | 压 | yā | 他用石头压住了那张纸。 (Anh ấy dùng hòn đá đè lên tờ giấy đó.) | 请不要压这个按钮。 (Xin đừng ấn nút này.) | Giữ bản site |
| 234 | HSK4 | 演唱 | yǎnchàng | 她今晚要在晚会上演唱一首中文歌。 (Tối nay cô ấy sẽ hát một bài hát tiếng Trung tại buổi dạ hội.) | 她今晚要演唱。 (Tối nay cô ấy sẽ biểu diễn ca hát.) | Giữ bản site |
| 235 | HSK4 | 邀请 | yāoqǐng | 我邀请了几位朋友来家里吃饭。 (Tôi mời mấy người bạn đến nhà ăn cơm.) | 我邀请他来家里。 (Tôi mời anh ấy đến nhà.) | Giữ bản site |
| 236 | HSK4 | 已 | yǐ | 他已完成了今天的任务。 (Anh ấy đã hoàn thành nhiệm vụ hôm nay.) | 问题已解决。 (Vấn đề đã được giải quyết.) | Giữ bản site |
| 237 | HSK4 | 应聘 | yìngpìn | 他去公司应聘翻译这个职位。 (Anh ấy đến công ty ứng tuyển vị trí phiên dịch viên.) | 她去公司应聘。 (Cô ấy đến công ty để ứng tuyển.) | Giữ bản site |
| 238 | HSK4 | 引起 | yǐnqǐ | 他的发言引起了大家的注意。 (Bài phát biểu của anh ấy đã thu hút sự chú ý của mọi người.) | 这件事引起了注意。 (Việc này đã thu hút sự chú ý.) | Giữ bản site |
| 239 | HSK4 | 印象 | yìnxiàng | 这座城市给我留下了很好的印象。 (Thành phố này để lại cho tôi ấn tượng rất tốt.) | 他的第一印象很好。 (Ấn tượng đầu tiên về anh ấy rất tốt.) | Giữ bản site |
| 240 | HSK4 | 暂停 | zàntíng | 因为下雨，比赛暂停了十分钟。 (Vì trời mưa, trận đấu tạm dừng mười phút.) | 比赛暂时暂停。 (Trận đấu tạm thời dừng lại.) | Giữ bản site |
| 241 | HSK4 | 着 | zháo | 天太冷了，我昨晚没睡着。 (Trời lạnh quá, tối qua tôi không ngủ được.) | 药吃着有效。 (Thuốc uống vào có hiệu quả.) | Giữ bản site |
| 242 | HSK4 | 整 | zhěng | 我用了一整天才写完报告。 (Tôi mất trọn một ngày mới viết xong báo cáo.) | 我花了整整一天。 (Tôi đã mất trọn một ngày.) | Giữ bản site |
| 243 | HSK4 | 自信 | zìxìn | 他对自己很有自信，比赛时一点也不紧张。 (Anh ấy rất tự tin vào bản thân, khi thi đấu chẳng hề căng thẳng.) | 你要相信自己，要自信。 (Bạn phải tin vào bản thân và tự tin lên.) | Giữ bản site |
| 244 | HSK5 | 产 | chǎn | 这家工厂每天生产很多食品。 (Nhà máy này mỗi ngày sản xuất rất nhiều thực phẩm.) | 这个工厂每天产很多产品。 (Nhà máy này mỗi ngày sản xuất rất nhiều sản phẩm.) | Giữ bản site |
| 245 | HSK5 | 处 | chù | 学校附近有一处很安静的自习室。 (Gần trường có một phòng tự học rất yên tĩnh.) | 这里有很多好玩的地方。 (Ở đây có rất nhiều nơi thú vị.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 246 | HSK5 | 窗台 | chuāngtái | 妈妈在窗台上放了一盆小花。 (Mẹ đặt một chậu hoa nhỏ trên bệ cửa sổ.) | 桌上的花放在窗台上。 (Bông hoa trên bàn được đặt trên bệ cửa sổ.) | Giữ bản site |
| 247 | HSK5 | 大米 | dàmǐ | 妈妈去超市买了一袋大米。 (Mẹ đi siêu thị mua một bao gạo.) | 我们家每天都吃大米。 (Nhà tôi ngày nào cũng ăn cơm gạo.) | Giữ bản site |
| 248 | HSK5 | 单 | dān | 请把这张单子递给服务员。 (Hãy đưa tờ phiếu này cho nhân viên phục vụ.) | 请给我一张单。 (Làm ơn đưa tôi một tờ phiếu.) | Giữ bản site |
| 249 | HSK5 | 单元 | dānyuán | 这本书一共有八个单元，我们今天学第三单元。 (Cuốn sách này có tất cả tám đơn vị bài học, hôm nay chúng ta học đơn vị thứ ba.) | 我们住在第三单元。 (Chúng tôi sống ở khu/đơn nguyên số ba.) | Giữ bản site |
| 250 | HSK5 | 洞 | dòng | 山上有一个很深的山洞。 (Trên núi có một hang rất sâu.) | 这个洞很深。 (Cái hang/lỗ này rất sâu.) | Giữ bản site |
| 251 | HSK5 | 对象 | duìxiàng | 这次调查的对象主要是大学生。 (Đối tượng của cuộc điều tra lần này chủ yếu là sinh viên đại học.) | 他是我的学习对象。 (Anh ấy là đối tượng để tôi học hỏi.) | Giữ bản site |
| 252 | HSK5 | 访问 | fǎngwèn | 明天我要去访问一位老教授。 (Ngày mai tôi sẽ đi thăm một vị giáo sư lớn tuổi.) | 我明天访问北京。 (Ngày mai tôi sẽ thăm Bắc Kinh.) | Giữ bản site |
| 253 | HSK5 | 范围 | fànwéi | 这个问题超出了我的能力范围。 (Vấn đề này đã vượt quá phạm vi khả năng của tôi.) | 这个问题超出了我的范围。 (Vấn đề này vượt quá phạm vi của tôi.) | Giữ bản site |
| 254 | HSK5 | 分别 | fēnbié | 我们分别住在北京和上海两座城市。 (Chúng tôi mỗi người sống ở một thành phố khác nhau, Bắc Kinh và Thượng Hải.) | 我们分别住在两个城市。 (Chúng tôi lần lượt sống ở hai thành phố.) | Giữ bản site |
| 255 | HSK5 | 高度 | gāodù | 这座山的高度超过了三千米。 (Độ cao của ngọn núi này vượt quá ba nghìn mét.) | 这座山的高度很高。 (Độ cao của ngọn núi này rất lớn.) | Giữ bản site |
| 256 | HSK5 | 各行各业 | gèháng-gèyè | Câu chung: 各行各业都需要人才。 — pinyin câu: Gèhánggèyè dōu xūyào réncái. | pinyin câu: Gèháng-gèyè dōu xūyào réncái. | Tiếp thu XuCup — chỉ ở pinyin câu: viết Gèháng-gèyè (gạch nối) cho khớp quy ước của đầu mục |
| 257 | HSK5 | 行 | háng | Câu chung: 请在第一行写名字。 — pinyin câu: Qǐng zài dì yī háng xiě míngzi. | pinyin câu: Qǐng zài dì-yī háng xiě míngzi. | Giữ bản site — chỉ khác quy ước viết hoa/cách chữ trong pinyin câu, không khác nội dung |
| 258 | HSK5 | 好 | hào | 他很好学，常常向老师请教问题。 (Anh ấy rất ham học, thường xuyên hỏi giáo viên những vấn đề chưa rõ.) | 他好学新东西。 (Anh ấy thích học những điều mới.) | Giữ bản site |
| 259 | HSK5 | 接触 | jiēchù | Câu chung: 我第一次接触这种工作。 — pinyin câu: Wǒ dì yī cì jiēchù zhè zhǒng gōngzuò. | pinyin câu: Wǒ dì-yī cì jiēchù zhè zhǒng gōngzuò. | Giữ bản site — chỉ khác quy ước viết hoa/cách chữ trong pinyin câu, không khác nội dung |
| 260 | HSK5 | 静 | jìng | Câu chung: 这里很安静。 — dịch: Ở đây rất yên tĩnh. | dịch: Ở đây rất yên tĩnh。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 261 | HSK5 | 近期 | jìnqī | Câu chung: 我们近期会公布结果。 — dịch: Chúng tôi sẽ công bố kết quả trong thời gian tới. | dịch: Gần đây chúng tôi sẽ công bố kết quả. | Giữ bản site — 近期 đi với 会 phải dịch “trong thời gian tới”; bản XuCup dịch “gần đây… sẽ” thành mâu thuẫn |
| 262 | HSK5 | 迷 | mí | 弟弟是个足球迷，每场比赛都看。 (Em trai tôi là một fan bóng đá, trận nào cũng xem.) | 他很迷中国历史。 (Anh ấy rất say mê lịch sử Trung Quốc.) | Giữ bản site |
| 263 | HSK5 | 墙 | qiáng | Câu chung: 墙上有一张照片。 — dịch: Trên tường có một bức ảnh. | dịch: Trên tường có một bức ảnh。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 264 | HSK5 | 认 | rèn | Câu chung: 我一眼就认出了他。 — dịch: Tôi nhận ra anh ấy ngay từ cái nhìn đầu tiên. | dịch: Tôi nhận ra anh ấy ngay từ cái nhìn đầu tiên。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 265 | HSK5 | 上下 | shàngxià | 这件毛衣的价格在三百元上下。 (Giá của chiếc áo len này vào khoảng ba trăm tệ.) | 楼上楼下都很安静。 (Trên dưới tòa nhà đều rất yên tĩnh.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 266 | HSK5 | 身材 | shēncái | 她每天坚持运动，身材保持得很好。 (Cô ấy kiên trì vận động mỗi ngày nên vóc dáng giữ được rất tốt.) | 她的身材很高。 (Dáng người cô ấy rất cao.) | Giữ bản site |
| 267 | HSK5 | 身份 | shēnfèn | 登记时请出示身份证来证明身份。 (Khi đăng ký, hãy xuất trình thẻ căn cước để chứng minh thân phận.) | 请出示你的身份。 (Hãy xuất trình thân phận của bạn。) | Giữ bản site |
| 268 | HSK5 | 事件 | shìjiàn | 这是今年发生的一件重要事件。 (Đây là một sự kiện quan trọng xảy ra trong năm nay.) | 这是一件重要事件。 (Đây là một sự kiện quan trọng.) | Giữ bản site |
| 269 | HSK5 | 手段 | shǒuduàn | 为了解决问题，他们采取了有效的手段。 (Để giải quyết vấn đề, họ đã áp dụng những biện pháp hiệu quả.) | 我们需要有效的手段。 (Chúng ta cần phương pháp hiệu quả.) | Giữ bản site |
| 270 | HSK5 | 外部 | wàibù | 这栋大楼的外部正在重新装修。 (Phần bên ngoài của tòa nhà này đang được sửa sang lại.) | 问题来自外部。 (Vấn đề đến từ bên ngoài.) | Giữ bản site |
| 271 | HSK5 | 文学 | wénxué | 她从小喜欢文学，常常一个人安静地读书。 (Từ nhỏ cô ấy đã thích văn học, thường một mình lặng lẽ đọc sách.) | 他是个天文学专家。 (Anh ấy là một chuyên gia về thiên văn học.) | Giữ bản site |
| 272 | HSK5 | 戏 | xì | Câu chung: 我喜欢看戏。 — dịch: Tôi thích xem kịch. | dịch: Tôi thích xem kịch。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 273 | HSK5 | 向上 | xiàngshàng | 年轻人要有向上奋斗的精神。 (Người trẻ cần có tinh thần phấn đấu vươn lên.) | 我们应该向上发展。 (Chúng ta nên phát triển theo hướng tiến lên.) | Giữ bản site |
| 274 | HSK5 | 消失 | xiāoshī | 他刚走出车站，人影就在人群中消失了。 (Anh ấy vừa bước ra khỏi nhà ga thì bóng dáng đã biến mất trong đám đông.) | 她消失了。 (Cô ấy biến mất rồi.) | Giữ bản site |
| 275 | HSK5 | 销售 | xiāoshòu | 公司今年销售的新产品很受欢迎。 (Sản phẩm mới mà công ty bán ra năm nay rất được ưa chuộng.) | 今年销售会翻番。 (Doanh số năm nay có thể tăng gấp đôi.) | Giữ bản site |
| 276 | HSK5 | 小于 | xiǎoyú | 这次考试不及格的人数小于十人。 (Số người không đạt trong kỳ thi lần này ít hơn mười người.) | 五小于十。 (Năm nhỏ hơn mười.) | Giữ bản site |
| 277 | HSK5 | 下载 | xiàzài | 你可以在手机上下载这个学习软件。 (Bạn có thể tải phần mềm học tập này về điện thoại.) | 你现在就可以去下载。 (Bây giờ bạn có thể tải xuống.) | Giữ bản site |
| 278 | HSK5 | 信封 | xìnfēng | Câu chung: 请把信放进信封。 — dịch: Hãy đặt thư vào phong bì. | dịch: Hãy đặt thư vào phong bì。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 279 | HSK5 | 行程 | xíngchéng | 出发前，我们先一起商量一下行程。 (Trước khi khởi hành, chúng ta cùng bàn bạc lịch trình trước đã.) | 我们本该考虑一下行程。 (Lẽ ra chúng ta nên cân nhắc lịch trình.) | Giữ bản site |
| 280 | HSK5 | 形容 | xíngróng | 请用一句话形容一下你家乡的样子。 (Hãy dùng một câu để miêu tả dáng vẻ quê hương bạn.) | 在这种情况下，形容词放在名词前面。 (Trong trường hợp này, tính từ đặt trước danh từ.) | Giữ bản site |
| 281 | HSK5 | 行为 | xíngwéi | 他的行为不符合学校的规定。 (Hành vi của anh ấy không phù hợp với quy định của trường.) | 你的行为离要求的太远了。 (Hành vi của bạn khác quá xa yêu cầu.) | Giữ bản site |
| 282 | HSK5 | 形状 | xíngzhuàng | 这座房子的形状很特别，像一条小船。 (Ngôi nhà này có hình dạng rất đặc biệt, trông giống một chiếc thuyền nhỏ.) | 那房子因为其少有的形状被突显出来。 (Ngôi nhà nổi bật vì hình dạng hiếm thấy của nó.) | Giữ bản site |
| 283 | HSK5 | 信任 | xìnrèn | 因为他做事认真，大家都很信任他。 (Vì anh ấy làm việc nghiêm túc nên mọi người đều rất tin tưởng anh ấy.) | 我信任他。 (Tôi tin tưởng anh ấy.) | Giữ bản site |
| 284 | HSK5 | 信用 | xìnyòng | 做生意最重要的是讲信用。 (Trong kinh doanh, điều quan trọng nhất là giữ chữ tín.) | 我可以用哪些信用卡？ (Tôi có thể dùng những thẻ tín dụng nào?) | Giữ bản site |
| 285 | HSK5 | 西装 | xīzhuāng | 他穿的那套西装看起来很贵。 (Bộ âu phục anh ấy đang mặc trông rất đắt tiền.) | 这西装好像真的很贵。 (Bộ comple này có vẻ thực sự rất đắt.) | Giữ bản site |
| 286 | HSK5 | 学术 | xuéshù | Câu chung: 他正在做学术研究。 — dịch: Anh ấy đang làm nghiên cứu học thuật. | dịch: Anh ấy đang làm nghiên cứu học thuật。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 287 | HSK5 | 训练 | xùnliàn | 新队员每天都要参加两个小时的训练。 (Các thành viên mới mỗi ngày đều phải tham gia hai giờ huấn luyện.) | 会有训练。 (Sẽ có chương trình huấn luyện.) | Giữ bản site |
| 288 | HSK5 | 寻找 | xúnzhǎo | 他正在图书馆里寻找一本旧杂志。 (Anh ấy đang tìm một cuốn tạp chí cũ trong thư viện.) | 我应该寻找什么？ (Tôi nên tìm kiếm điều gì?) | Giữ bản site |
| 289 | HSK5 | 牙齿 | yáchǐ | 吃完饭后，他发现牙齿上卡了点东西。 (Ăn cơm xong, anh ấy phát hiện có chút thức ăn mắc trên răng.) | 牙齿卡了点东西。 (Có một chút thức ăn mắc trong răng.) | Giữ bản site |
| 290 | HSK5 | 眼 | yǎn | Câu chung: 他的眼睛很大。 — dịch: Mắt của anh ấy rất to. | dịch: Mắt của anh ấy rất to。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 291 | HSK5 | 演讲 | yǎnjiǎng | 他的演讲很精彩，大家听得非常认真。 (Bài phát biểu của anh ấy rất hay, mọi người nghe rất chăm chú.) | 他的演讲让我很无聊。 (Bài phát biểu của anh ấy khiến tôi rất chán.) | Giữ bản site |
| 292 | HSK5 | 严肃 | yánsù | 开会的时候，大家的态度都很严肃。 (Khi họp, thái độ của mọi người đều rất nghiêm túc.) | 我们认为这不严肃。 (Chúng tôi cho rằng việc này không nghiêm túc.) | Giữ bản site |
| 293 | HSK5 | 腰 | yāo | 他搬箱子时不小心扭伤了腰。 (Anh ấy không cẩn thận bị trẹo eo khi bê thùng đồ.) | 我的腰有点儿疼。 (Eo của tôi hơi đau.) | Giữ bản site |
| 294 | HSK5 | 以 | yǐ | 他以认真的态度完成了这项工作。 (Anh ấy đã hoàn thành công việc này với thái độ nghiêm túc.) | 他以前住在这儿。 (Trước đây anh ấy từng sống ở đây.) | Giữ bản site |
| 295 | HSK5 | 依靠 | yīkào | 遇到困难时，我们不能总是依靠别人。 (Khi gặp khó khăn, chúng ta không thể lúc nào cũng dựa dẫm vào người khác.) | 你可以依靠它。 (Bạn có thể dựa vào nó.) | Giữ bản site |
| 296 | HSK5 | 迎 | yíng | Câu chung: 大家出来迎接客人。 — dịch: Mọi người ra đón khách. | dịch: Mọi người ra đón khách。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 297 | HSK5 | 硬 | yìng | 这块木头很硬，用普通的刀很难切开。 (Khúc gỗ này rất cứng, dùng dao thường thì khó cắt ra được.) | 硬币是金属做的。 (Đồng xu được làm bằng kim loại.) | Giữ bản site |
| 298 | HSK5 | 应当 | yīngdāng | 我们应当珍惜每一分钟的时间。 (Chúng ta nên trân trọng từng phút thời gian.) | 火车应当准点到。 (Tàu hỏa nên đến đúng giờ.) | Giữ bản site |
| 299 | HSK5 | 依然 | yīrán | 虽然已经很晚了，他依然在认真学习。 (Dù đã rất muộn, anh ấy vẫn đang chăm chỉ học bài.) | 我依然不关心。 (Tôi vẫn không quan tâm.) | Giữ bản site |
| 300 | HSK5 | 意外 | yìwài | 这场意外发生得太突然，谁也没有想到。 (Tai nạn này xảy ra quá đột ngột, không ai ngờ tới.) | 这真是很意外。 (Điều này thực sự rất bất ngờ.) | Giữ bản site |
| 301 | HSK5 | 疑问 | yíwèn | 对老师讲的内容，我还有一个疑问。 (Về nội dung thầy giảng, tôi vẫn còn một thắc mắc.) | 我没有疑问。 (Tôi không có thắc mắc gì.) | Giữ bản site |
| 302 | HSK5 | 义务 | yìwù | 保护环境是每个公民应尽的义务。 (Bảo vệ môi trường là nghĩa vụ mà mỗi công dân nên thực hiện.) | 这是您的义务。 (Đây là trách nhiệm của bạn.) | Giữ bản site |
| 303 | HSK5 | 意义 | yìyì | 这次志愿活动对大学生很有意义。 (Hoạt động tình nguyện lần này rất có ý nghĩa đối với sinh viên.) | 这没有任何意义。 (Điều này không có bất kỳ ý nghĩa nào.) | Giữ bản site |
| 304 | HSK5 | 拥有 | yōngyǒu | 经过多年努力，他终于拥有了自己的公司。 (Sau nhiều năm nỗ lực, cuối cùng anh ấy đã có công ty của riêng mình.) | 你将拥有什么？ (Bạn sẽ sở hữu điều gì?) | Giữ bản site |
| 305 | HSK5 | 邮寄 | yóujì | 请把这份文件邮寄到公司总部。 (Hãy gửi tệp tài liệu này qua bưu điện đến trụ sở chính của công ty.) | 航空邮寄它。 (Hãy gửi nó bằng đường hàng không.) | Giữ bản site |
| 306 | HSK5 | 雨水 | yǔshuǐ | Câu chung: 雨水从屋檐流下来。 — dịch: Nước mưa chảy xuống từ mái hiên. | dịch: Nước mưa chảy xuống từ mái hiên。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 307 | HSK5 | 站台 | zhàntái | 火车快要进站了，站台上站满了乘客。 (Tàu sắp vào ga, sân ga đã chật kín hành khách.) | 火车马上就要进站台了。 (Tàu sắp vào sân ga rồi.) | Giữ bản site |
| 308 | HSK5 | 直 | zhí | 这条路又直又平，一直通向山脚下的村子。 (Con đường này vừa thẳng vừa bằng phẳng, chạy thẳng tới ngôi làng dưới chân núi.) | 这条路一直往前走就到了。 (Cứ đi thẳng về phía trước theo con đường này là đến.) | Giữ bản site |
| 309 | HSK5 | 支 | zhī | Câu chung: 这根棍子支着门。 — dịch: Cây gậy này chống cửa. | dịch: Cây gậy này chống cửa。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 310 | HSK5 | 制度 | zhìdù | 公司实行新制度以后，工作方便多了。 (Sau khi công ty áp dụng chế độ mới, công việc thuận tiện hơn nhiều.) | 德国在1880年代采取了一种社会保障制度。 (Đức đã áp dụng một hệ thống bảo đảm xã hội vào những năm 1880.) | Giữ bản site |
| 311 | HSK5 | 知名 | zhīmíng | Câu chung: 这是一位知名作家。 — dịch: Đây là một nhà văn nổi tiếng. | dịch: Đây là một nhà văn nổi tiếng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 312 | HSK5 | 执行 | zhíxíng | Câu chung: 这项任务由经验丰富的工作人员执行。 — dịch: Nhiệm vụ này do những nhân viên giàu kinh nghiệm thực hiện. | dịch: Nhiệm vụ này do những nhân viên giàu kinh nghiệm thực hiện。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 313 | HSK5 | 种类 | zhǒnglèi | 这家超市的商品种类非常多。 (Hàng hóa ở siêu thị này có rất nhiều chủng loại.) | 你想看哪种类型的电影？ (Bạn muốn xem loại phim nào?) | Giữ bản site |
| 314 | HSK5 | 重量 | zhòngliàng | 这层冰太薄了，承受不了你的重量。 (Lớp băng này quá mỏng, không chịu nổi trọng lượng của bạn.) | 这冰太薄不能承受你的重量。 (Băng quá mỏng nên không thể chịu được trọng lượng của bạn.) | Giữ bản site |
| 315 | HSK5 | 猪 | zhū | 爷爷在农村养了十几头猪。 (Ông nuôi hơn mười con lợn ở quê.) | 猪肉不适合我。 (Thịt lợn không hợp với tôi.) | Giữ bản site |
| 316 | HSK5 | 专家 | zhuānjiā | Câu chung: 他是一位专家。 — dịch: Anh ấy là một chuyên gia. | dịch: Anh ấy là một chuyên gia。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 317 | HSK5 | 注册 | zhùcè | 他在网上注册了一个新的账号。 (Anh ấy đã đăng ký một tài khoản mới trên mạng.) | 确保亲自填写注册表格。 (Hãy đảm bảo tự mình điền vào mẫu đăng ký.) | Giữ bản site |
| 318 | HSK5 | 主动 | zhǔdòng | 在工作中，他总是主动帮助同事。 (Trong công việc, anh ấy luôn chủ động giúp đỡ đồng nghiệp.) | 你必须积极主动。 (Bạn phải tích cực và chủ động.) | Giữ bản site |
| 319 | HSK5 | 追 | zhuī | 小狗在院子里追着蝴蝶跑来跑去。 (Chú chó nhỏ đuổi theo bướm chạy qua chạy lại trong sân.) | 狗追兔子。 (Con chó đuổi theo con thỏ.) | Giữ bản site |
| 320 | HSK5 | 住宿 | zhùsù | Câu chung: 这家酒店提供住宿。 — dịch: Khách sạn này cung cấp chỗ lưu trú. | dịch: Khách sạn này cung cấp chỗ lưu trú。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 321 | HSK5 | 竹子 | zhúzi | Câu chung: 熊猫喜欢吃竹子。 — dịch: Gấu trúc thích ăn tre. | dịch: Gấu trúc thích ăn tre。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 322 | HSK5 | 资格 | zīgé | 他通过了考试，取得了参赛资格。 (Anh ấy đã vượt qua kỳ thi và giành được tư cách tham dự cuộc thi.) | 你有资格知道。 (Bạn có quyền được biết.) | Giữ bản site |
| 323 | HSK5 | 字母 | zìmǔ | 请用大写字母写出你的名字。 (Hãy viết tên của bạn bằng chữ cái in hoa.) | 写下你名字的大写字母。 (Hãy viết các chữ cái in hoa trong tên của bạn.) | Giữ bản site |
| 324 | HSK5 | 姿势 | zīshì | 做这个动作时，要注意保持正确的姿势。 (Khi thực hiện động tác này, cần chú ý giữ đúng tư thế.) | 他的坐姿势很端正。 (Tư thế ngồi của anh ấy rất ngay ngắn.) | Giữ bản site |
| 325 | HSK5 | 自由 | zìyóu | 退休以后，他可以自由地安排自己的时间。 (Sau khi nghỉ hưu, ông ấy có thể tự do sắp xếp thời gian của mình.) | 我自由了！ (Tôi được tự do rồi!) | Giữ bản site |
| 326 | HSK5 | 资源 | zīyuán | Câu chung: 水是重要的资源。 — dịch: Nước là một tài nguyên quan trọng. | dịch: Nước là một tài nguyên quan trọng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 327 | HSK5 | 总共 | zǒnggòng | 这次旅行总共花了五千元。 (Chuyến đi lần này tốn tổng cộng năm nghìn tệ.) | 总共是3000日元。 (Tổng cộng là 3.000 yên.) | Giữ bản site |
| 328 | HSK5 | 总数 | zǒngshù | 老师把名单又数了一遍，确认总数没有错。 (Giáo viên đếm lại danh sách một lần nữa để xác nhận tổng số không sai.) | 这些数字总数不符。 (Tổng các con số này không khớp.) | Giữ bản site |
| 329 | HSK5 | 族 | zú | Câu chung: 这是一个少数民族。 — dịch: Đây là một dân tộc thiểu số. | dịch: Đây là một dân tộc thiểu số。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 330 | HSK5 | 组成 | zǔchéng | Câu chung: 水由氢和氧组成。 — dịch: Nước được tạo thành từ hydro và oxy. | dịch: Nước được tạo thành từ hydro và oxy。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 331 | HSK6 | 百货 | bǎihuò | Câu chung: 百货商店就在前面。 — dịch: Cửa hàng bách hóa ở ngay phía trước. | dịch: Cửa hàng bách hóa ở ngay phía trước。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 332 | HSK6 | 榜样 | bǎngyàng | 姐姐学习认真，是弟弟的好榜样。 (Chị gái học hành chăm chỉ, là tấm gương tốt cho em trai.) | 您做了个坏榜样。 (Ông đã làm một tấm gương xấu.) | Giữ bản site |
| 333 | HSK6 | 爆 | bào | 孩子不小心把气球弄爆了，吓了一跳。 (Đứa trẻ vô tình làm nổ bóng bay, giật mình một cái.) | 大爆炸致死六人。 (Vụ nổ lớn khiến sáu người thiệt mạng.) | Giữ bản site |
| 334 | HSK6 | 爆发 | bàofā | 那个冬天，战争在边境地区突然爆发了。 (Mùa đông năm đó, chiến tranh đột nhiên bùng nổ ở khu vực biên giới.) | 战争于1941年爆发。 (Chiến tranh bùng nổ vào năm 1941.) | Giữ bản site |
| 335 | HSK6 | 保健 | bǎojiàn | Câu chung: 适当运动有助于保健。 — dịch: Vận động phù hợp có ích cho việc chăm sóc sức khỏe. | dịch: Vận động phù hợp có ích cho việc chăm sóc sức khỏe。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 336 | HSK6 | 保暖 | bǎonuǎn | 这件羽绒服很保暖，冬天穿正合适。 (Chiếc áo lông vũ này rất giữ ấm, mặc vào mùa đông là vừa đẹp.) | 这个能保暖。 (Cái này có thể giữ ấm.) | Giữ bản site |
| 337 | HSK6 | 爆炸 | bàozhà | Câu chung: 事故发生后，现场发生了爆炸。 — dịch: Sau khi tai nạn xảy ra, hiện trường đã xảy ra một vụ nổ. | dịch: Sau khi tai nạn xảy ra, hiện trường đã xảy ra một vụ nổ。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 338 | HSK6 | 悲观 | bēiguān | 遇到一点困难就这么悲观可不好。 (Gặp chút khó khăn mà đã bi quan như vậy thì không tốt đâu.) | 不要感觉那么悲观。 (Đừng cảm thấy bi quan như vậy.) | Giữ bản site |
| 339 | HSK6 | 北极 | běijí | 科学家去北极考察那里的冰川变化。 (Các nhà khoa học đến Bắc Cực khảo sát sự thay đổi sông băng ở đó.) | 北极熊正在死去。 (Những con gấu Bắc Cực đang chết dần.) | Giữ bản site |
| 340 | HSK6 | 本土 | běntǔ | Câu chung: 我们应该支持本土产品。 — dịch: Chúng ta nên ủng hộ sản phẩm bản địa. | dịch: Chúng ta nên ủng hộ sản phẩm bản địa。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 341 | HSK6 | 不成 | bùchéng | 这么大的工程靠他一个人肯定做不成。 (Công trình lớn thế này dựa vào một mình anh ấy thì chắc chắn làm không xong.) | 汤姆说他做不成我们要他做的事。 (Tom nói anh ấy không thể làm việc chúng tôi yêu cầu.) | Giữ bản site |
| 342 | HSK6 | 不许 | bùxǔ | 图书馆里不许大声说话，请保持安静。 (Trong thư viện không được nói to, xin hãy giữ yên lặng.) | 不许大叫。 (Không được hét lớn.) | Giữ bản site |
| 343 | HSK6 | 不已 | bùyǐ | 听到孩子获奖的消息，母亲高兴不已。 (Nghe tin con đoạt giải, người mẹ vui mừng không ngớt.) | 他高兴不已。 (Anh ấy vui mừng không ngớt.) | Giữ bản site |
| 344 | HSK6 | 不止 | bùzhǐ | 来参加活动的不止学生，还有很多家长。 (Người đến tham gia hoạt động không chỉ có học sinh mà còn có nhiều phụ huynh.) | 觉得汤姆肥的人不止我一个。 (Không chỉ mình tôi nghĩ Tom béo.) | Giữ bản site |
| 345 | HSK6 | 才能 | cáinéng | 她在音乐方面很有才能，唱歌特别好听。 (Cô ấy rất có tài năng về âm nhạc, hát đặc biệt hay.) | 我有很多才能。 (Tôi có nhiều năng lực.) | Giữ bản site |
| 346 | HSK6 | 参展 | cānzhǎn | 这家公司带着新产品去上海参展了。 (Công ty này mang sản phẩm mới đến Thượng Hải tham gia triển lãm.) | 这家公司今年参加了参展活动。 (Công ty này năm nay đã tham gia hoạt động triển lãm.) | Giữ bản site |
| 347 | HSK6 | 策略 | cèlüè | 公司制定了新的销售策略来吸引顾客。 (Công ty xây dựng chiến lược bán hàng mới để thu hút khách hàng.) | 希望不是一种策略。 (Hy vọng không phải là một chiến lược.) | Giữ bản site |
| 348 | HSK6 | 肠 | cháng | 小肠是人体消化食物的重要器官。 (Ruột non là cơ quan quan trọng để cơ thể tiêu hóa thức ăn.) | 你见过灌肠的做法吗？ (Bạn đã từng thấy cách làm xúc xích chưa?) | Giữ bản site |
| 349 | HSK6 | 场次 | chǎngcì | 影院今天增加了两个放映场次。 (Rạp chiếu phim hôm nay đã tăng thêm hai suất chiếu.) | 今天有三场演出。 (Hôm nay có ba suất biểu diễn.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 350 | HSK6 | 场合 | chǎnghé | 在正式场合说话要注意礼貌和分寸。 (Trong những dịp trang trọng, nói năng cần chú ý lễ phép và chừng mực.) | 汤姆知道在公众场合怎么样自处。 (Tom biết cách cư xử ở nơi công cộng.) | Giữ bản site |
| 351 | HSK6 | 炒股 | chǎogǔ | 他炒股多年，积累了不少投资经验。 (Anh ấy chơi cổ phiếu nhiều năm, tích lũy được không ít kinh nghiệm đầu tư.) | 他在上个景气时期炒股攒下了一笔钱。 (Anh ấy đã tích được một khoản tiền nhờ đầu tư cổ phiếu trong thời kỳ kinh tế phát triển trước đây.) | Giữ bản site |
| 352 | HSK6 | 潮湿 | cháoshī | 梅雨季节里，房间的墙壁总是很潮湿。 (Vào mùa mưa dầm, tường trong phòng lúc nào cũng rất ẩm ướt.) | 12月份巴厘岛极其炎热和潮湿。 (Tháng 12 ở Bali cực kỳ nóng và ẩm.) | Giữ bản site |
| 353 | HSK6 | 撤回 | chèhuí | 他发错了消息，赶紧把那条消息撤回了。 (Anh ấy gửi nhầm tin nhắn nên vội rút lại tin nhắn đó.) | 我想撤回我之前的陈述。 (Tôi muốn rút lại lời phát biểu trước đó.) | Giữ bản site |
| 354 | HSK6 | 乘 | chéng | Câu chung: 我每天乘地铁上班。 — dịch: Mỗi ngày tôi đi tàu điện ngầm đến chỗ làm. | dịch: Mỗi ngày tôi đi tàu điện ngầm đến chỗ làm。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 355 | HSK6 | 称呼 | chēnghu | 第一次见面时，我们不知道怎么称呼他。 (Lần đầu gặp mặt, chúng tôi không biết nên xưng hô với ông ấy thế nào.) | 这鸟你们用英语怎么称呼？ (Loài chim này trong tiếng Anh các bạn gọi là gì?) | Giữ bản site |
| 356 | HSK6 | 城镇 | chéngzhèn | 这座小城镇安静又干净，适合养老。 (Thị trấn nhỏ này yên tĩnh và sạch sẽ, thích hợp để dưỡng già.) | 我不想在城镇的那个地方买房。 (Tôi không muốn mua nhà ở khu vực đó của thị trấn.) | Giữ bản site |
| 357 | HSK6 | 尺 | chǐ | 他用尺仔细量了量桌子的长度。 (Anh ấy dùng thước đo cẩn thận chiều dài của chiếc bàn.) | 用尺子画线。 (Dùng thước để vẽ đường.) | Giữ bản site |
| 358 | HSK6 | 持久 | chíjiǔ | 这种香水的味道很持久，一整天都有香味。 (Mùi của loại nước hoa này rất bền, thơm suốt cả ngày.) | 生活中绝对没有什么是持久的。 (Trong cuộc sống tuyệt đối không có gì là vĩnh viễn.) | Giữ bản site |
| 359 | HSK6 | 除 | chú | 请把名单里重复的名字除掉。 (Hãy loại bỏ những tên trùng lặp trong danh sách.) | 我们决定不开除你。 (Chúng tôi quyết định không đuổi việc bạn.) | Giữ bản site |
| 360 | HSK6 | 窗口 | chuāngkǒu | 他站在窗口，望着外面的街道出神。 (Anh ấy đứng bên cửa sổ, nhìn ra đường phố bên ngoài đến ngẩn người.) | 我从窗口爬进来的。 (Tôi trèo vào từ cửa sổ.) | Giữ bản site |
| 361 | HSK6 | 穿过 | chuānguò | Câu chung: 我们穿过这条路。 — dịch: Chúng tôi đi qua con đường này. | dịch: Chúng tôi đi qua con đường này。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 362 | HSK6 | 传染 | chuánrǎn | 他感冒了，怕传染给孩子，就戴上了口罩。 (Anh ấy bị cảm, sợ lây cho con nên đã đeo khẩu trang.) | 热情具有传染性。 (Sự nhiệt tình có tính lan truyền.) | Giữ bản site |
| 363 | HSK6 | 持久 | chíjiǔ | Câu chung: 这种效果并不持久。 — dịch: Hiệu quả này không kéo dài lâu. | dịch: Hiệu quả này không kéo dài lâu。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 364 | HSK6 | 持有 | chíyǒu | Câu chung: 他持有这家公司的股份。 — dịch: Anh ấy nắm giữ cổ phần của công ty này. | dịch: Anh ấy nắm giữ cổ phần của công ty này。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 365 | HSK6 | 冲动 | chōngdòng | Câu chung: 做决定前不要太冲动。 — dịch: Trước khi quyết định đừng quá bốc đồng. | dịch: Trước khi quyết định đừng quá bốc đồng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 366 | HSK6 | 筹备 | chóubèi | Câu chung: 学校正在筹备一次文化活动。 — dịch: Nhà trường đang chuẩn bị một hoạt động văn hóa. | dịch: Nhà trường đang chuẩn bị một hoạt động văn hóa。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 367 | HSK6 | 抽象 | chōuxiàng | Câu chung: 艺术家喜欢用抽象的形式表达思想。 — dịch: Nghệ sĩ thích dùng hình thức trừu tượng để thể hiện tư tưởng. | dịch: Nghệ sĩ thích dùng hình thức trừu tượng để thể hiện tư tưởng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 368 | HSK6 | 除 | chú | Câu chung: 除他以外，大家都到了。 — dịch: Ngoài anh ấy ra, mọi người đều đã đến. | dịch: Ngoài anh ấy ra, mọi người đều đã đến。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 369 | HSK6 | 串 | chuàn | Câu chung: 门口挂着一串灯笼。 — dịch: Ở cửa treo một chuỗi đèn lồng. | dịch: Ở cửa treo một chuỗi đèn lồng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 370 | HSK6 | 闯 | chuǎng | Câu chung: 他不小心闯进了房间。 — dịch: Anh ấy vô tình xông vào phòng. | dịch: Anh ấy vô tình xông vào phòng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 371 | HSK6 | 窗口 | chuāngkǒu | Câu chung: 请到那个窗口办理。 — dịch: Hãy đến quầy cửa sổ kia để làm thủ tục. | dịch: Hãy đến quầy cửa sổ kia để làm thủ tục。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 372 | HSK6 | 穿过 | chuānguò | Câu chung: 孩子们很快穿过了公园。 — dịch: Bọn trẻ nhanh chóng đi xuyên qua công viên. | dịch: Bọn trẻ nhanh chóng đi xuyên qua công viên。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 373 | HSK6 | 传染病 | chuánrǎnbìng | Câu chung: 医院提醒大家注意预防传染病。 — dịch: Bệnh viện nhắc mọi người chú ý phòng bệnh truyền nhiễm. | dịch: Bệnh viện nhắc mọi người chú ý phòng bệnh truyền nhiễm。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 374 | HSK6 | 传授 | chuánshòu | 老艺人把做陶器的手艺传授给年轻人。 (Nghệ nhân già truyền dạy nghề làm đồ gốm cho người trẻ.) | 老师把经验传授给学生。 (Thầy giáo truyền đạt kinh nghiệm cho học sinh.) | Giữ bản site |
| 375 | HSK6 | 传真 | chuánzhēn | Câu chung: 请把文件传真给我。 — dịch: Hãy gửi tài liệu này cho tôi bằng fax. | dịch: Hãy gửi tài liệu này cho tôi bằng fax。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 376 | HSK6 | 出入 | chūrù | 没有门禁卡的人不能随便出入这栋大楼。 (Người không có thẻ ra vào thì không được tùy tiện ra vào tòa nhà này.) | 他有权出入美国大使馆。 (Anh ấy có quyền ra vào Đại sứ quán Mỹ.) | Giữ bản site |
| 377 | HSK6 | 出示 | chūshì | 进入考场的时候请出示身份证和准考证。 (Khi vào phòng thi, xin hãy xuất trình căn cước và thẻ dự thi.) | 请出示您的票子。 (Xin hãy xuất trình vé của bạn.) | Giữ bản site |
| 378 | HSK6 | 次数 | cìshù | 他这个月去医院复查的次数有点多。 (Số lần anh ấy đi tái khám ở bệnh viện trong tháng này hơi nhiều.) | 你去过日本多少次？ (Bạn đã đến Nhật bao nhiêu lần?) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 379 | HSK6 | 从未 | cóngwèi | Câu chung: 我从未去过那里。 — dịch: Tôi chưa bao giờ đến đó. | dịch: Tôi chưa bao giờ đến đó。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 380 | HSK6 | 寸 | cùn | 这块木板大概有三寸厚，很结实。 (Tấm ván này dày khoảng ba tấc, rất chắc chắn.) | 他做事很有分寸。 (Anh ấy làm việc rất biết chừng mực.) | Giữ bản site |
| 381 | HSK6 | 待 | dài | 请在门口稍待片刻，我马上就出来。 (Xin đợi ở cửa một lát, tôi ra ngay đây.) | 不要等待！ (Đừng chờ!) | Giữ bản site |
| 382 | HSK6 | 当选 | dāngxuǎn | Câu chung: 他成功当选为代表。 — dịch: Anh ấy đã được bầu thành đại diện. | dịch: Anh ấy đã được bầu thành đại diện。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 383 | HSK6 | 诞生 | dànshēng | 宝宝昨晚在医院平安诞生，全家人都很开心。 (Em bé chào đời bình an ở bệnh viện tối qua, cả nhà đều rất vui.) | 我们是为了死亡而诞生的。 (Chúng ta được sinh ra để rồi chết.) | Giữ bản site |
| 384 | HSK6 | 倒是 | dàoshì | 他平时话不多，干起活来倒是很认真。 (Bình thường anh ấy ít nói, nhưng làm việc thì lại rất nghiêm túc.) | 这倒是事实。 (Điều này thực ra là sự thật.) | Giữ bản site |
| 385 | HSK6 | 大使 | dàshǐ | 中国大使在会上介绍了两国的合作情况。 (Đại sứ Trung Quốc đã giới thiệu tình hình hợp tác giữa hai nước tại cuộc họp.) | 大使被从华沙召回。 (Đại sứ đã được triệu hồi từ Warsaw.) | Giữ bản site |
| 386 | HSK6 | 地方 | dìfāng | Câu chung: 这是一个安静的地方。 — dịch: Đây là một nơi yên tĩnh. | dịch: Đây là một nơi yên tĩnh。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 387 | HSK6 | 抵抗 | dǐkàng | 村民们团结起来抵抗洪水，守住了家园。 (Dân làng đoàn kết chống lại lũ lụt, giữ được quê nhà.) | 停止抵抗！ (Dừng chống cự!) | Giữ bản site |
| 388 | HSK6 | 订婚 | dìnghūn | Câu chung: 他们决定明年订婚。 — dịch: Họ quyết định đính hôn vào năm sau. | dịch: Họ quyết định đính hôn vào năm sau。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 389 | HSK6 | 斗争 | dòuzhēng | 经过多年斗争，他们终于赢得了自由。 (Sau nhiều năm đấu tranh, cuối cùng họ đã giành được tự do.) | 斗争结束了。 (Cuộc đấu tranh đã kết thúc.) | Giữ bản site |
| 390 | HSK6 | 渡 | dù | 他们乘着小船，慢慢渡过了这条大河。 (Họ đi thuyền nhỏ, từ từ qua được con sông lớn này.) | 他用30天横渡了太平洋。 (Anh ấy đã vượt Thái Bình Dương trong 30 ngày.) | Giữ bản site |
| 391 | HSK6 | 端 | duān | 绳子的一端系在树上，另一端拉着小船。 (Một đầu sợi dây buộc vào cây, đầu còn lại giữ chiếc thuyền nhỏ.) | 别走极端。 (Đừng đi đến cực đoan.) | Giữ bản site |
| 392 | HSK6 | 夺 | duó | 他在演讲比赛中夺得了第一名。 (Anh ấy đã giành giải nhất trong cuộc thi hùng biện.) | 他们正在争分夺秒地工作。 (Họ đang làm việc tranh thủ từng phút từng giây.) | Giữ bản site |
| 393 | HSK6 | 多才多艺 | duōcái-duōyì | 她多才多艺，会唱歌画画，还会弹钢琴。 (Cô ấy đa tài, biết hát, vẽ tranh, lại còn biết chơi piano.) | 汤姆多才多艺。 (Tom rất đa tài.) | Giữ bản site |
| 394 | HSK6 | 发动 | fādòng | 学校发动全体学生参加校园环保活动。 (Nhà trường vận động toàn thể học sinh tham gia hoạt động bảo vệ môi trường trong trường.) | 发动机坏掉了。 (Động cơ bị hỏng rồi.) | Giữ bản site |
| 395 | HSK6 | 发光 | fāguāng | 天黑以后，萤火虫在草丛里轻轻发光。 (Sau khi trời tối, đom đóm khẽ phát sáng trong bụi cỏ.) | 灯泡发光。 (Bóng đèn phát sáng.) | Giữ bản site |
| 396 | HSK6 | 番 | fān | Câu chung: 这个月的销量翻了一番。 — dịch: Doanh số tháng này đã tăng gấp đôi. | dịch: Doanh số tháng này đã tăng gấp đôi。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 397 | HSK6 | 肥 | féi | 这块肉太肥了，吃起来有点腻。 (Miếng thịt này mỡ quá, ăn hơi ngấy.) | 我想减肥。 (Tôi muốn giảm cân.) | Giữ bản site |
| 398 | HSK6 | 风雨 | fēngyǔ | 他们冒着风雨赶到车站，差点误了火车。 (Họ đội mưa gió đến nhà ga, suýt nữa thì lỡ tàu.) | 暴风雨平息下来了。 (Cơn bão đã lắng xuống.) | Giữ bản site |
| 399 | HSK6 | 服 | fú | 她今天穿了一套漂亮的民族服装。 (Hôm nay cô ấy mặc một bộ trang phục dân tộc rất đẹp.) | 古代人穿这种服。 (Người xưa mặc loại trang phục này。) | Giữ bản site |
| 400 | HSK6 | 浮 | fú | 落叶浮在水面上，慢慢漂向了远方。 (Lá rụng nổi trên mặt nước, từ từ trôi về phía xa.) | 木头会漂浮。 (Gỗ sẽ nổi.) | Giữ bản site |
| 401 | HSK6 | 副 | fù | 他是公司的副经理，负责日常管理工作。 (Anh ấy là phó giám đốc công ty, phụ trách công việc quản lý hằng ngày.) | 这药没有副作用。 (Thuốc này không có tác dụng phụ.) | Giữ bản site |
| 402 | HSK6 | 革命 | gémìng | 这项新技术给整个行业带来了一场革命。 (Công nghệ mới này mang lại một cuộc cách mạng cho toàn ngành.) | 这项技术正在革命性地改变行业。 (Công nghệ này đang cách mạng hóa ngành này.) | Giữ bản site |
| 403 | HSK6 | 顾 | gù | 他只顾着赶路，连午饭都忘了吃。 (Anh ấy chỉ mải đi đường, đến bữa trưa cũng quên ăn.) | 请顾好自己的身体。 (Hãy chăm sóc tốt cho cơ thể của mình.) | Giữ bản site |
| 404 | HSK6 | 好不 | hǎobù | 节日的广场上人来人往，好不热闹。 (Trên quảng trường ngày lễ, người qua lại tấp nập, thật là náo nhiệt.) | 今天的天气好不舒服！ (Thời tiết hôm nay dễ chịu biết bao!) | Giữ bản site |
| 405 | HSK6 | 环 | huán | 她手腕上戴着一个银色的手环。 (Trên cổ tay cô ấy đeo một chiếc vòng tay màu bạc.) | 她手上戴着一个漂亮的环。 (Cô ấy đeo một chiếc vòng đẹp trên tay.) | Giữ bản site |
| 406 | HSK6 | 胡子 | húzi | Câu chung: 他每天早上都会刮胡子。 — dịch: Mỗi sáng anh ấy đều cạo râu. | dịch: Mỗi sáng anh ấy đều cạo râu。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 407 | HSK6 | 家居 | jiājū | 这家店的家居用品既实用又好看。 (Đồ dùng gia đình của cửa hàng này vừa thiết thực vừa đẹp.) | 他最近一直家居办公。 (Gần đây anh ấy luôn làm việc tại nhà.) | Giữ bản site |
| 408 | HSK6 | 奖品 | jiǎngpǐn | 一等奖的奖品是一台新电脑。 (Phần thưởng của giải nhất là một chiếc máy tính mới.) | 一等奖的奖品是一台电脑。 (Phần thưởng giải nhất là một chiếc máy tính.) | Giữ bản site |
| 409 | HSK6 | 解 | jiě | 他想了很久才解开这个谜团。 (Anh ấy suy nghĩ rất lâu mới giải được bí ẩn này.) | 请把这个问题解开。 (Hãy giải quyết vấn đề này.) | Giữ bản site |
| 410 | HSK6 | 局 | jú | 座位太小，他坐得久了觉得有些局促。 (Ghế quá nhỏ, ngồi lâu anh ấy cảm thấy hơi chật chội, gò bó.) | 这个房间太局了。 (Căn phòng này quá chật.) | Giữ bản site |
| 411 | HSK6 | 科 | kē | 这一科的考试特别难，大家都很紧张。 (Bài thi môn này đặc biệt khó, mọi người đều rất căng thẳng.) | 他在大学学习医学科。 (Anh ấy học ngành y ở đại học.) | Giữ bản site |
| 412 | HSK6 | 立 | lì | 门口立着一块牌子，上面写着学校的名字。 (Ở cổng dựng một tấm biển, trên đó viết tên của trường.) | 公司决定在这里立一个新项目。 (Công ty quyết định lập một dự án mới ở đây.) | Giữ bản site |
| 413 | HSK6 | 两极 | liǎngjí | 地球的两极常年被冰雪覆盖着。 (Hai cực của Trái Đất quanh năm bị băng tuyết bao phủ.) | 事情的发展出现了两个极端。 (Sự phát triển của sự việc xuất hiện hai thái cực.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 414 | HSK6 | 旅途 | lǚtú | Câu chung: 祝你旅途愉快。 — dịch: Chúc bạn có chuyến đi vui vẻ. | dịch: Chúc bạn có chuyến đi vui vẻ。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 415 | HSK6 | 埋 | mái | 孩子们把时间胶囊埋在校园的大树下。 (Bọn trẻ chôn hộp thời gian dưới gốc cây lớn trong khuôn viên trường.) | 他们把树苗埋在土里。 (Họ trồng cây non xuống đất.) | Giữ bản site |
| 416 | HSK6 | 面粉 | miànfěn | Câu chung: 做面条需要先准备面粉。 — dịch: Làm mì cần chuẩn bị bột mì trước. | dịch: Làm mì cần chuẩn bị bột mì trước。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 417 | HSK6 | 能量 | néngliàng | 多运动能让身体充满能量。 (Tập thể dục nhiều giúp cơ thể tràn đầy năng lượng.) | 太阳能是一种清洁能源。 (Năng lượng mặt trời là một loại năng lượng sạch.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 418 | HSK6 | 起初 | qǐchū | Câu chung: 起初大家都有些担心。 — dịch: Ban đầu mọi người đều hơi lo lắng. | dịch: Ban đầu mọi người đều hơi lo lắng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 419 | HSK6 | 娶 | qǔ | 他去年娶了一位温柔善良的姑娘。 (Năm ngoái anh ấy đã cưới một cô gái dịu dàng, tốt bụng.) | 他三十岁时娶了妻子。 (Anh ấy cưới vợ khi ba mươi tuổi.) | Giữ bản site |
| 420 | HSK6 | 忍受 | rěnshòu | 我实在忍受不了车间里这么大的噪声。 (Tôi thật sự không chịu nổi tiếng ồn lớn như vậy trong xưởng.) | 我不能忍受。 (Tôi không thể chịu đựng được.) | Giữ bản site |
| 421 | HSK6 | 热线 | rèxiàn | Câu chung: 请拨打服务热线。 — pinyin câu: Qǐng bōdǎ fúwù rèxiàn. | pinyin câu: Qǐng bōdǎ rèxiàn. | Giữ bản site — pinyin câu của XuCup thiếu hẳn phần「服务」(fúwù) |
| 422 | HSK6 | 柔软 | róuruǎn | 这条毛毯摸起来非常柔软，盖着很舒服。 (Chiếc chăn này sờ vào rất mềm mại, đắp lên rất dễ chịu.) | 来摸摸这个，真的很柔软啊。 (Lại sờ thử cái này đi, thật sự rất mềm mại.) | Giữ bản site |
| 423 | HSK6 | 塞 | sāi | 他把换洗衣服塞进行李箱，准备出发。 (Anh ấy nhét quần áo thay vào vali, chuẩn bị xuất phát.) | 请把这个塞进去。 (Hãy nhét cái này vào.) | Giữ bản site |
| 424 | HSK6 | 杀 | shā | 这种药水能杀死花园里的害虫。 (Loại thuốc này có thể diệt sâu bọ trong vườn.) | 他自杀了。 (Anh ấy đã tự sát.) | Giữ bản site |
| 425 | HSK6 | 闪电 | shǎndiàn | Câu chung: 一道闪电突然划过夜空。 — dịch: Một tia chớp đột nhiên xẹt qua bầu trời đêm. | dịch: Một tia chớp đột nhiên xẹt qua bầu trời đêm。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 426 | HSK6 | 山顶 | shāndǐng | Câu chung: 我们从山顶看到了整个山谷。 — dịch: Chúng tôi nhìn thấy cả thung lũng từ đỉnh núi. | dịch: Chúng tôi nhìn thấy cả thung lũng từ đỉnh núi。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 427 | HSK6 | 上市 | shàngshì | 这家公司去年在上海挂牌上市了。 (Công ty này năm ngoái đã niêm yết trên sàn ở Thượng Hải.) | 这家公司于1990年挂牌上市。 (Công ty này lên sàn vào năm 1990.) | Giữ bản site |
| 428 | HSK6 | 山坡 | shānpō | Câu chung: 山坡上的花开得很漂亮。 — dịch: Hoa trên sườn núi nở rất đẹp. | dịch: Hoa trên sườn núi nở rất đẹp。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 429 | HSK6 | 射 | shè | 他瞄准靶心，稳稳地射出了一箭。 (Anh ấy ngắm trúng hồng tâm, vững vàng bắn ra một mũi tên.) | 停止射击。 (Dừng bắn.) | Giữ bản site |
| 430 | HSK6 | 射击 | shèjī | Câu chung: 运动员正在进行射击训练。 — dịch: Vận động viên đang luyện bắn. | dịch: Vận động viên đang luyện bắn。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 431 | HSK6 | 神 | shén | 这座古庙里供奉着当地人信奉的神。 (Trong ngôi chùa cổ này thờ vị thần mà người dân địa phương tín ngưỡng.) | 太神奇了。 (Thật kỳ diệu.) | Giữ bản site |
| 432 | HSK6 | 神奇 | shénqí | Câu chung: 这个故事真是太神奇了。 — dịch: Câu chuyện này thật sự quá kỳ diệu. | dịch: Câu chuyện này thật sự quá kỳ diệu。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 433 | HSK6 | 舌头 | shétou | 他拿了一面镜子，仔细看自己的舌头。 (Anh ấy lấy một chiếc gương, nhìn kỹ lưỡi của mình.) | 他拿了面镜子细看自己的舌头。 (Anh ấy lấy một chiếc gương để nhìn kỹ lưỡi của mình.) | Giữ bản site |
| 434 | HSK6 | 摄像 | shèxiàng | 他打算买一台摄像机，记录孩子的成长。 (Anh ấy định mua một chiếc máy quay để ghi lại quá trình trưởng thành của con.) | 他不打算买一个摄像机。 (Anh ấy không định mua một chiếc máy quay.) | Giữ bản site |
| 435 | HSK6 | 设想 | shèxiǎng | 他提出了一个大胆的设想，得到了大家的支持。 (Anh ấy đưa ra một ý tưởng táo bạo, nhận được sự ủng hộ của mọi người.) | 我有一个设想。 (Tôi có một ý tưởng.) | Giữ bản site |
| 436 | HSK6 | 识 | shí | 他从小没上过学，一个字也不识。 (Từ nhỏ anh ấy không được đi học, một chữ cũng không biết.) | 我能识出他的声音。 (Tôi có thể nhận ra giọng của anh ấy。) | Giữ bản site |
| 437 | HSK6 | 适度 | shìdù | Câu chung: 每天适度运动有助于保持健康。 — dịch: Vận động vừa phải mỗi ngày giúp duy trì sức khỏe. | dịch: Vận động vừa phải mỗi ngày giúp duy trì sức khỏe。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 438 | HSK6 | 使劲 | shǐjìn | 他使劲拉了半天，箱子还是打不开。 (Anh ấy ra sức kéo hồi lâu mà chiếc hộp vẫn không mở ra được.) | 请使劲拉。 (Hãy kéo mạnh vào.) | Giữ bản site |
| 439 | HSK6 | 视力 | shìlì | Câu chung: 医生建议他定期测量视力。 — dịch: Bác sĩ khuyên anh ấy kiểm tra thị lực định kỳ. | dịch: Bác sĩ khuyên anh ấy kiểm tra thị lực định kỳ。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 440 | HSK6 | 时尚 | shíshàng | Câu chung: 年轻人喜欢追随新的时尚。 — dịch: Người trẻ thích theo đuổi thời trang mới. | dịch: Người trẻ thích theo đuổi thời trang mới。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 441 | HSK6 | 寿命 | shòumìng | 蝴蝶的寿命很短，只有短短几周。 (Tuổi thọ của bướm rất ngắn, chỉ vỏn vẹn vài tuần.) | 蝴蝶的寿命短。 (Tuổi thọ của bướm ngắn.) | Giữ bản site |
| 442 | HSK6 | 属 | shǔ | Câu chung: 这种动物属于哺乳类。 — dịch: Loài động vật này thuộc nhóm động vật có vú. | dịch: Loài động vật này thuộc nhóm động vật có vú。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 443 | HSK6 | 书籍 | shūjí | 这家图书馆收藏了很多珍贵的书籍。 (Thư viện này lưu giữ rất nhiều cuốn sách quý.) | 我们喜欢阅读书籍。 (Chúng tôi thích đọc sách.) | Giữ bản site |
| 444 | HSK6 | 数目 | shùmù | 一千美元对他来说是个大数目。 (Một nghìn đô la đối với anh ấy là một khoản tiền lớn.) | 1000美元是个大数目。 (1.000 đô la là một khoản tiền lớn.) | Giữ bản site |
| 445 | HSK6 | 书写 | shūxiě | 请认真书写每一个汉字，不要潦草。 (Hãy viết mỗi chữ Hán thật cẩn thận, đừng viết cẩu thả.) | 她不会读书写字。 (Cô ấy không biết đọc viết.) | Giữ bản site |
| 446 | HSK6 | 松 | sōng | Câu chung: 把螺丝再松一点。 — dịch: Nới con ốc ra thêm một chút. | dịch: Nới con ốc ra thêm một chút。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 447 | HSK6 | 探索 | tànsuǒ | Câu chung: 科学家正在探索海洋深处。 — dịch: Các nhà khoa học đang khám phá vùng biển sâu. | dịch: Các nhà khoa học đang khám phá vùng biển sâu。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 448 | HSK6 | 逃 | táo | 小偷看见警察走过来，转身就逃。 (Tên trộm thấy cảnh sát đi tới liền quay người bỏ trốn.) | 我试图逃跑。 (Tôi đã cố chạy trốn.) | Giữ bản site |
| 449 | HSK6 | 逃跑 | táopǎo | Câu chung: 小偷发现警察后立刻逃跑了。 — dịch: Tên trộm lập tức bỏ chạy sau khi phát hiện cảnh sát. | dịch: Tên trộm lập tức bỏ chạy sau khi phát hiện cảnh sát。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 450 | HSK6 | 踏实 | tāshi | 他做事踏实认真，大家都很信任他。 (Anh ấy làm việc chắc chắn, nghiêm túc, mọi người đều rất tin tưởng anh ấy.) | 脚踏实地才能做好事情。 (Chỉ khi làm việc vững vàng thực tế mới có thể làm tốt.) | Giữ bản site |
| 451 | HSK6 | 特 | tè | 这份礼物是我特为你准备的。 (Món quà này tôi đặc biệt chuẩn bị cho bạn.) | 我们很特别。 (Chúng tôi rất đặc biệt.) | Giữ bản site |
| 452 | HSK6 | 特性 | tèxìng | 这种材料具有耐热、不易变形的特性。 (Loại vật liệu này có đặc tính chịu nhiệt, khó biến dạng.) | 这不是一个漏洞，而是一个没有写进文档的特性。 (Đây không phải lỗi mà là một tính năng chưa được ghi vào tài liệu.) | Giữ bản site |
| 453 | HSK6 | 天然 | tiānrán | 这款护肤品用的是天然成分，对皮肤很温和。 (Sản phẩm chăm sóc da này dùng thành phần tự nhiên, rất dịu nhẹ cho da.) | 这辆车靠天然气驱动。 (Chiếc xe này chạy bằng khí tự nhiên.) | Giữ bản site |
| 454 | HSK6 | 天然气 | tiānránqì | Câu chung: 这种汽车使用天然气作为燃料。 — dịch: Loại ô tô này sử dụng khí tự nhiên làm nhiên liệu. | dịch: Loại ô tô này sử dụng khí tự nhiên làm nhiên liệu。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 455 | HSK6 | 天文 | tiānwén | Câu chung: 他正在研究古代天文。 — dịch: Anh ấy đang nghiên cứu thiên văn cổ đại. | dịch: Anh ấy đang nghiên cứu thiên văn cổ đại。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 456 | HSK6 | 同行 | tóngháng | 我们俩是同行，都在医院里工作。 (Hai chúng tôi là đồng nghiệp cùng ngành, đều làm việc trong bệnh viện.) | 他和我是一名同行。 (Anh ấy và tôi là những người cùng nghề.) | Giữ bản site |
| 457 | HSK6 | 透 | tòu | Câu chung: 阳光透过窗户照进来。 — pinyin câu: Yángguāng tòuguò chuānghù zhào jìnlái. | pinyin câu: Yángguāng tòuguò chuānghu dào jìnlái. | Giữ bản site — pinyin câu của XuCup sai (chuānghu, dào — đúng phải là chuānghù, zhào) |
| 458 | HSK6 | 投资 | tóuzī | 他打算投资十万元，开一家小书店。 (Anh ấy định đầu tư một trăm nghìn nhân dân tệ để mở một hiệu sách nhỏ.) | 你投资多少？ (Bạn đầu tư bao nhiêu?) | Giữ bản site |
| 459 | HSK6 | 拖 | tuō | 他拖着沉重的行李箱走进了车站。 (Anh ấy kéo chiếc vali nặng nề đi vào nhà ga.) | 我不能再拖了。 (Tôi không thể trì hoãn thêm nữa.) | Giữ bản site |
| 460 | HSK6 | 外交 | wàijiāo | 良好的外交关系有助于两国人民友好相处。 (Quan hệ ngoại giao tốt đẹp giúp nhân dân hai nước chung sống thân thiện.) | 外交官有多种特权。 (Các nhà ngoại giao có nhiều đặc quyền.) | Giữ bản site |
| 461 | HSK6 | 限于 | xiànyú | 本次比赛限于在校学生参加。 (Cuộc thi lần này chỉ giới hạn cho học sinh đang học tại trường tham gia.) | 问题限于目前的条件。 (Vấn đề bị giới hạn bởi điều kiện hiện tại.) | Giữ bản site |
| 462 | HSK6 | 消防 | xiāofáng | 学校每年都会组织消防演练，提高安全意识。 (Mỗi năm nhà trường đều tổ chức diễn tập phòng cháy chữa cháy để nâng cao ý thức an toàn.) | 请叫消防员。 (Hãy gọi đội cứu hỏa.) | Giữ bản site |
| 463 | HSK6 | 效应 | xiàoyìng | 这种新药的治疗效应非常明显。 (Hiệu quả điều trị của loại thuốc mới này rất rõ rệt.) | 这种药可能产生副作用效应。 (Loại thuốc này có thể tạo ra hiệu ứng phụ.) | Giữ bản site |
| 464 | HSK6 | 信赖 | xìnlài | 这位医生经验丰富，病人都很信赖他。 (Bác sĩ này giàu kinh nghiệm, bệnh nhân đều rất tin tưởng ông ấy.) | 我信赖他。 (Tôi tin tưởng anh ấy.) | Giữ bản site |
| 465 | HSK6 | 薪水 | xīnshui | 他抱怨自己的薪水太低，打算换工作。 (Anh ấy phàn nàn lương của mình quá thấp, định đổi việc.) | 她抱怨我的薪水很低。 (Cô ấy phàn nàn rằng lương của tôi thấp.) | Giữ bản site |
| 466 | HSK6 | 胸 | xiōng | 他最近胸口有点疼，准备去医院检查。 (Gần đây anh ấy hơi đau ngực, chuẩn bị đi bệnh viện kiểm tra.) | 他的胸中还有足够的斗志。 (Trong lòng anh ấy vẫn còn đầy tinh thần chiến đấu.) | Giữ bản site |
| 467 | HSK6 | 样 | yàng | 这样的机会很难得，你一定要好好把握。 (Cơ hội như thế này rất hiếm có, bạn nhất định phải nắm bắt thật tốt.) | 这个样的机会很难得。 (Cơ hội như thế này rất hiếm có。) | Giữ bản site |
| 468 | HSK6 | 养老 | yǎnglǎo | 他退休后回到乡下养老，日子过得很悠闲。 (Sau khi nghỉ hưu, ông ấy về quê sống dưỡng già, ngày tháng trôi qua rất thảnh thơi.) | 我们今天得去养老院唱歌。 (Hôm nay chúng tôi phải đến viện dưỡng lão hát.) | Giữ bản site |
| 469 | HSK6 | 养老院 | yǎnglǎoyuàn | Câu chung: 这家养老院环境很好。 — dịch: Môi trường của viện dưỡng lão này rất tốt. | dịch: Môi trường của viện dưỡng lão này rất tốt。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 470 | HSK6 | 氧气 | yǎngqì | 人和动物都需要氧气才能生存下去。 (Con người và động vật đều cần ôxy mới có thể tồn tại.) | 爱就像氧气。 (Tình yêu giống như ôxy.) | Giữ bản site |
| 471 | HSK6 | 验证 | yànzhèng | 我们需要先验证这个结果是否准确。 (Chúng ta cần kiểm chứng trước xem kết quả này có chính xác không.) | 实验证明了他的理论。 (Thí nghiệm đã xác nhận lý thuyết của anh ấy.) | Giữ bản site |
| 472 | HSK6 | 业 | yè | 他在金融业工作了十多年，很有经验。 (Anh ấy làm việc trong ngành tài chính hơn mười năm, rất có kinh nghiệm.) | 没写作业。 (Tôi chưa làm bài tập.) | Giữ bản site |
| 473 | HSK6 | 液体 | yètǐ | 请小心地把这种液体倒进瓶子里。 (Hãy cẩn thận đổ loại chất lỏng này vào trong chai.) | 水是液体。 (Nước là chất lỏng.) | Giữ bản site |
| 474 | HSK6 | 野外 | yěwài | Câu chung: 周末我们喜欢去野外散步。 — dịch: Cuối tuần chúng tôi thích đi dạo ngoài trời. | dịch: Cuối tuần chúng tôi thích đi dạo ngoài trời。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 475 | HSK6 | 一口气 | yìkǒuqì | Câu chung: 他一口气跑到了终点。 — dịch: Anh ấy chạy một mạch đến đích. | dịch: Anh ấy chạy một mạch đến đích。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 476 | HSK6 | 银 | yín | 她戴着一对银耳环，简单又好看。 (Cô ấy đeo một đôi khuyên tai bạc, đơn giản mà đẹp.) | 银行在哪里？ (Ngân hàng ở đâu?) | Giữ bản site |
| 477 | HSK6 | 印 | yìn | 签完字后，请在合同上盖个印。 (Ký xong, hãy đóng dấu lên hợp đồng.) | 第一印象很重要。 (Ấn tượng đầu tiên rất quan trọng.) | Giữ bản site |
| 478 | HSK6 | 因 | yīn | 他今天没来上课，是因为生病了。 (Hôm nay anh ấy không đến lớp vì bị ốm.) | 她不在是因为病了。 (Cô ấy vắng mặt vì bị bệnh.) | Giữ bản site |
| 479 | HSK6 | 英雄 | yīngxióng | 消防员冲进火场救人，是真正的英雄。 (Lính cứu hỏa lao vào đám cháy cứu người, là anh hùng thực sự.) | 他不是英雄。 (Anh ấy không phải là anh hùng.) | Giữ bản site |
| 480 | HSK6 | 影子 | yǐngzi | 夕阳下，他长长的影子落在地上。 (Dưới ánh hoàng hôn, cái bóng dài của anh ấy đổ trên mặt đất.) | 他怕自己的影子。 (Anh ấy sợ chính cái bóng của mình.) | Giữ bản site |
| 481 | HSK6 | 一时 | yìshí | 听到这个消息，他一时不知道说什么好。 (Nghe tin này, anh ấy nhất thời không biết nói gì.) | 决定好的话请第一时间告诉我。 (Nếu đã quyết định xong thì hãy báo cho tôi ngay.) | Giữ bản site |
| 482 | HSK6 | 用人 | yòngrén | 这家公司用人很严格，只招有经验的人。 (Công ty này tuyển dụng người rất nghiêm ngặt, chỉ tuyển người có kinh nghiệm.) | 她用人造黄油代替了黄油。 (Cô ấy đã dùng bơ thực vật thay cho bơ.) | Giữ bản site |
| 483 | HSK6 | 有机 | yǒujī | 她喜欢买有机蔬菜，觉得吃着更健康。 (Cô ấy thích mua rau hữu cơ, cảm thấy ăn vào khỏe hơn.) | 汤姆觉得他有机会在股市赚一大笔钱。 (Tom nghĩ rằng anh ấy có cơ hội kiếm được một khoản tiền lớn trên thị trường chứng khoán.) | Giữ bản site |
| 484 | HSK6 | 预定 | yùdìng | 我已经预定了明天飞往上海的机票。 (Tôi đã đặt trước vé máy bay bay đến Thượng Hải vào ngày mai.) | 我没有预定这个。 (Tôi không đặt trước cái này.) | Giữ bản site |
| 485 | HSK6 | 月光 | yuèguāng | Câu chung: 今晚的月光特别明亮。 — dịch: Ánh trăng tối nay đặc biệt sáng. | dịch: Ánh trăng tối nay đặc biệt sáng。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 486 | HSK6 | 乐器 | yuèqì | 除了钢琴以外，你还会演奏什么乐器？ (Ngoài piano ra, bạn còn biết chơi nhạc cụ nào nữa?) | 除了钢琴以外，还会玩什么乐器吗？ (Ngoài piano ra, bạn còn biết chơi nhạc cụ nào khác không?) | Giữ bản site |
| 487 | HSK6 | 月球 | yuèqiú | 宇航员成功登上了月球，完成了这次任务。 (Phi hành gia đã đáp xuống Mặt Trăng thành công, hoàn thành nhiệm vụ lần này.) | 明天，他将登上月球。 (Ngày mai, anh ấy sẽ lên Mặt Trăng.) | Giữ bản site |
| 488 | HSK6 | 运行 | yùnxíng | Câu chung: 新机器运行得很稳定。 — dịch: Máy mới vận hành rất ổn định. | dịch: Máy mới vận hành rất ổn định。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 489 | HSK6 | 浴室 | yùshì | 妈妈正在浴室里给小宝宝洗澡。 (Mẹ đang tắm cho em bé trong phòng tắm.) | 她在浴室。 (Cô ấy đang ở trong phòng tắm.) | Giữ bản site |
| 490 | HSK6 | 再三 | zàisān | 她再三邀请我去她家做客，我只好答应了。 (Cô ấy nhiều lần mời tôi đến nhà chơi, tôi đành phải đồng ý.) | 他再三提醒我注意安全。 (Anh ấy nhiều lần nhắc tôi chú ý an toàn.) | Giữ bản site |
| 491 | HSK6 | 在意 | zàiyì | 他不在意别人怎么看，只做自己认为对的事。 (Anh ấy không để ý người khác nhìn thế nào, chỉ làm điều mình cho là đúng.) | 有人在意吗？ (Có ai quan tâm không?) | Giữ bản site |
| 492 | HSK6 | 炸 | zhà | 只听砰的一声，气球突然炸了。 (Chỉ nghe một tiếng bụp, quả bóng bay đột nhiên nổ tung.) | 这个炸弹可以炸死很多人。 (Quả bom này có thể làm chết rất nhiều người.) | Giữ bản site |
| 493 | HSK6 | 战斗 | zhàndòu | 战士们在前线英勇战斗，保卫自己的家园。 (Các chiến sĩ anh dũng chiến đấu ở tiền tuyến, bảo vệ quê hương của mình.) | 我会战斗至死。 (Tôi sẽ chiến đấu đến chết.) | Giữ bản site |
| 494 | HSK6 | 账单 | zhàngdān | 服务员，请把账单给我看看。 (Phục vụ ơi, hãy đưa hóa đơn cho tôi xem.) | 这是账单。 (Đây là hóa đơn.) | Giữ bản site |
| 495 | HSK6 | 招生 | zhāoshēng | 这所大学今年的招生工作已经开始了。 (Công tác tuyển sinh năm nay của trường đại học này đã bắt đầu.) | 这所大学今年招收很多学生。 (Trường đại học này năm nay tuyển rất nhiều sinh viên.) | Giữ bản site — câu XuCup không chứa từ đầu mục (thay bằng từ khác: 等到/参加/地方/场/次/极端/能源/招收…) |
| 496 | HSK6 | 支出 | zhīchū | Câu chung: 公司今年减少了不必要的支出。 — dịch: Năm nay công ty giảm các khoản chi không cần thiết. | dịch: Năm nay công ty giảm các khoản chi không cần thiết。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 497 | HSK6 | 职员 | zhíyuán | 这家公司有两百多名职员，来自不同的城市。 (Công ty này có hơn hai trăm nhân viên, đến từ nhiều thành phố khác nhau.) | 我是个职员。 (Tôi là một nhân viên văn phòng.) | Giữ bản site |
| 498 | HSK6 | 中旬 | zhōngxún | 他计划十月中旬去北京出差一周。 (Anh ấy dự định giữa tháng Mười đi công tác ở Bắc Kinh một tuần.) | 会议安排在十月中旬。 (Cuộc họp được sắp xếp vào trung tuần tháng Mười.) | Giữ bản site |
| 499 | HSK6 | 转 | zhuàn | 地球绕着太阳不停地转，一年转一圈。 (Trái Đất quay không ngừng quanh Mặt Trời, một năm quay một vòng.) | 请右转。 (Xin hãy rẽ phải.) | Giữ bản site — câu XuCup dùng 转 âm zhuǎn (rẽ), sai âm của mục zhuàn (quay) |
| 500 | HSK6 | 装备 | zhuāngbèi | Câu chung: 救援人员带来了必要的装备。 — dịch: Nhân viên cứu hộ mang đến các trang bị cần thiết. | dịch: Nhân viên cứu hộ mang đến các trang bị cần thiết。 | Giữ bản site — chỉ khác dấu kết câu của bản dịch (XuCup dùng dấu 。) |
| 501 | HSK6 | 专注 | zhuānzhù | 上课时她总是很专注，从不看手机。 (Khi lên lớp cô ấy luôn rất tập trung, không bao giờ xem điện thoại.) | 她专注在她的新工作上。 (Cô ấy tập trung vào công việc mới của mình.) | Giữ bản site |
| 502 | HSK6 | 助手 | zhùshǒu | 助手帮经理把会议文件整理好了。 (Trợ lý giúp quản lý sắp xếp xong tài liệu cuộc họp.) | 助手拿了钱。 (Người trợ lý đã lấy tiền.) | Giữ bản site |
| 503 | HSK6 | 著作 | zhùzuò | 这本著作是他花了十年时间写成的。 (Tác phẩm này là thành quả ông ấy bỏ mười năm để viết nên.) | 这是他的著作。 (Đây là tác phẩm của anh ấy.) | Giữ bản site |
| 504 | HSK6 | 自杀 | zìshā | 遇到困难时千万不要自杀，要及时向家人求助。 (Khi gặp khó khăn, tuyệt đối đừng tự sát, hãy kịp thời nhờ gia đình giúp đỡ.) | 他曾经有过自杀的念头。 (Anh ấy từng có ý nghĩ tự sát。) | Giữ bản site |
| 505 | HSK7 | 安定 | āndìng | 他们搬到乡下以后，生活慢慢安定下来了。 (Sau khi họ chuyển về nông thôn, cuộc sống dần dần ổn định trở lại.) | 他们在乡村安定了下来。 (Họ định cư ở đất nước.) | Giữ bản site |
| 506 | HSK7 | 案件 | ànjiàn | 警方花了三个月时间，终于查清了这起案件。 (Cảnh sát mất ba tháng, cuối cùng đã làm rõ vụ án này.) | 警察会调查这起案件。 (Cảnh sát sẽ xem xét vụ việc.) | Giữ bản site |
| 507 | HSK7 | 安心 | ānxīn | 孩子平安到家以后，父母这才安心下来。 (Sau khi con về nhà bình an, bố mẹ lúc này mới yên tâm.) | 让我安心工作。 (Hãy để tôi làm việc trong hòa bình.) | Giữ bản site |
| 508 | HSK7 | 报 | bào | 他每天早上都要向领导报一下工作进度。 (Sáng nào anh ấy cũng phải báo cáo tiến độ công việc với lãnh đạo.) | 我在看一本画报。 (Tôi đang đọc một tạp chí có tranh minh họa.) | Giữ bản site |
| 509 | HSK7 | 保密 | bǎomì | 这份文件很重要，请大家一定要保密。 (Tài liệu này rất quan trọng, mong mọi người nhất định giữ bí mật.) | 请保密。 (Làm ơn giữ bí mật nhé.) | Giữ bản site |
| 510 | HSK7 | 保卫 | bǎowèi | 士兵们日夜守在边境，保卫着祖国的安全。 (Các chiến sĩ ngày đêm canh giữ nơi biên giới, bảo vệ sự an toàn của Tổ quốc.) | 他们抵御入侵者，保卫了国家。 (Họ bảo vệ đất nước của họ chống lại quân xâm lược.) | Giữ bản site |
| 511 | HSK7 | 把手 | bǎshou | 门的把手坏了，怎么拧都打不开。 (Tay nắm cửa hỏng rồi, vặn thế nào cũng không mở được.) | 把手举起来！ (Hãy giơ tay lên!) | Giữ bản site |
| 512 | HSK7 | 备 | bèi | 出门旅行之前，他备好了护照和机票。 (Trước khi đi du lịch, anh ấy đã chuẩn bị sẵn hộ chiếu và vé máy bay.) | 她在准备考托福。 (Cô ấy đang chuẩn bị thi TOEFL.) | Giữ bản site |
| 513 | HSK7 | 边境 | biānjìng | 这座小镇位于两国的边境附近。 (Thị trấn nhỏ này nằm gần biên giới của hai nước.) | 这里是国家的边境。 (Đây là biên giới của đất nước.) | Giữ bản site |
| 514 | HSK7 | 标 | biāo | 每件商品上都清楚地标着价格。 (Trên mỗi món hàng đều ghi rõ giá cả.) | 这座塔是城市的地标。 (Tòa tháp này là cột mốc của thành phố.) | Giữ bản site |
| 515 | HSK7 | 不定 | búdìng | 会议的时间还没有定下来，地点也不定。 (Thời gian họp vẫn chưa chốt, địa điểm cũng chưa xác định.) | 白云在天上飘忽不定。 (Mây trắng trôi về trời.) | Giữ bản site |
| 516 | HSK7 | 不敢当 | bùgǎndāng | 您这么夸我，我实在是不敢当。 (Ngài khen tôi như vậy, tôi thật sự không dám nhận.) | 不敢当。 (Tôi không xứng đáng với điều đó.) | Giữ bản site |
| 517 | HSK7 | 不及 | bùjí | 在经验方面，他还不及这位老同事。 (Về mặt kinh nghiệm, anh ấy vẫn chưa bằng đồng nghiệp lâu năm này.) | 我不想不及格。 (Tôi không muốn trượt kỳ thi của mình.) | Giữ bản site |
| 518 | HSK7 | 不解 | bùjiě | 他的做法让人十分不解，大家都没说话。 (Cách làm của anh ấy khiến mọi người rất khó hiểu, ai cũng im lặng.) | 汤姆迷惑不解。 (Tom vẫn còn bối rối.) | Giữ bản site |
| 519 | HSK7 | 不容 | bùróng | 考试时不容作弊，发现后会严肃处理。 (Khi thi không được phép gian lận, nếu bị phát hiện sẽ xử lý nghiêm.) | 可不容易。 (Nó không hề dễ dàng.) | Giữ bản site |
| 520 | HSK7 | 不下 | búxià | 来参加招聘会的人不下三千，场面很热闹。 (Số người đến tham dự hội chợ việc làm không dưới ba nghìn, khung cảnh rất náo nhiệt.) | 我希望明天不下雨。 (Tôi hy vọng ngày mai trời sẽ không mưa.) | Giữ bản site |
| 521 | HSK7 | 不亚于 | búyàyú | 她的演讲水平不亚于专业的老师。 (Trình độ thuyết trình của cô ấy không thua kém giáo viên chuyên nghiệp.) | 她的工作能力不亚于其他人。 (Cô ấy có năng lực trong công việc của mình như những người khác.) | Giữ bản site |
| 522 | HSK7 | 参见 | cānjiàn | 具体的报名办法，请参见通知的第二页。 (Cách đăng ký cụ thể, xin xem trang thứ hai của thông báo.) | 参见上文。 (Xem ở trên.) | Giữ bản site |
| 523 | HSK7 | 唱片 | chàngpiàn | 爷爷收藏了很多老唱片，经常拿出来听。 (Ông sưu tầm rất nhiều đĩa nhạc cũ, thường lấy ra nghe.) | 我有许多唱片。 (Tôi có nhiều đĩa.) | Giữ bản site |
| 524 | HSK7 | 成家 | chéngjiā | 他工作几年以后才成家，现在生活很稳定。 (Anh ấy làm việc vài năm rồi mới lập gia đình, giờ cuộc sống rất ổn định.) | 您成家了吗？ (Bạn kết hôn rồi phải không?) | Giữ bản site |
| 525 | HSK7 | 成年 | chéngnián | 他成年以后开始自己挣钱，不再靠父母。 (Sau khi trưởng thành, anh ấy bắt đầu tự kiếm tiền, không còn dựa vào bố mẹ.) | 我们已是成年人了。 (Chúng tôi là người lớn.) | Giữ bản site |
| 526 | HSK7 | 诚意 | chéngyì | 他很有诚意，亲自上门向我们道歉。 (Anh ấy rất có thành ý, đích thân đến tận nhà xin lỗi chúng tôi.) | 他诚心诚意地帮助我。 (Anh ấy giúp đỡ tôi bằng cả trái tim.) | Giữ bản site |
| 527 | HSK7 | 持 | chí | 迎宾员手持鲜花，站在酒店门口欢迎客人。 (Nhân viên lễ tân tay cầm hoa tươi, đứng ở cửa khách sạn đón khách.) | 你支持安乐死吗？ (Bạn có ủng hộ cái chết êm ái không?) | Giữ bản site |
| 528 | HSK7 | 迟疑 | chíyí | 她迟疑了几秒，才慢慢说出自己的想法。 (Cô ấy do dự vài giây rồi mới chậm rãi nói ra suy nghĩ của mình.) | 她迟疑了一会儿才回答。 (Cô ấy do dự một lúc rồi mới trả lời.) | Giữ bản site |
| 529 | HSK7 | 传闻 | chuánwén | 这只是传闻，还没有得到官方的证实。 (Đây chỉ là tin đồn, vẫn chưa được phía chính thức xác nhận.) | 我听传闻说的。 (Một con chim nhỏ nói với tôi.) | Giữ bản site |
| 530 | HSK7 | 出发点 | chūfādiǎn | 他的出发点是好的，只是方法不太对。 (Điểm xuất phát của anh ấy là tốt, chỉ là phương pháp chưa đúng lắm.) | 你必须有一个出发点。 (Bạn phải bắt đầu từ đâu đó.) | Giữ bản site |
| 531 | HSK7 | 出路 | chūlù | 遇到困难不要慌，总能找到出路。 (Gặp khó khăn đừng hoảng, thế nào cũng tìm được lối thoát.) | 那是唯一的出路。 (Đó là con đường duy nhất để đi.) | Giữ bản site |
| 532 | HSK7 | 出身 | chūshēn | 他出身于农村，对种地非常熟悉。 (Anh ấy xuất thân từ nông thôn nên rất quen thuộc với việc trồng trọt.) | 我出身贫寒。 (Tôi lớn lên trong một gia đình nghèo.) | Giữ bản site |
| 533 | HSK7 | 次要 | cìyào | 内容最重要，形式只是次要的问题。 (Nội dung là quan trọng nhất, hình thức chỉ là vấn đề thứ yếu.) | 汤姆每次要是不带地图的话就会迷路。 (Tom luôn bị lạc nếu không mang theo bản đồ.) | Giữ bản site |
| 534 | HSK7 | 大不了 | dàbuliǎo | 这件事没什么大不了的，慢慢解决就行。 (Việc này chẳng có gì to tát, cứ từ từ giải quyết là được.) | 这没什么大不了的。 (Không có gì to tát cả.) | Giữ bản site |
| 535 | HSK7 | 担 | dān | 这副重担一直压在他一个人肩上。 (Gánh nặng này vẫn luôn đè lên vai một mình anh ấy.) | 你甭担心，我没事。 (Đừng lo lắng, tôi ổn.) | Giữ bản site |
| 536 | HSK7 | 当心 | dāngxīn | 过马路的时候要当心来往的车辆。 (Khi qua đường phải cẩn thận xe cộ qua lại.) | 当心它。 (Hãy cẩn thận với nó.) | Giữ bản site |
| 537 | HSK7 | 单身 | dānshēn | 他今年三十多岁了，还是单身一个人。 (Năm nay anh ấy đã hơn ba mươi tuổi mà vẫn còn độc thân một mình.) | 我单身。 (Tôi độc thân.) | Giữ bản site |
| 538 | HSK7 | 但愿 | dànyuàn | 但愿明天的面试一切顺利，他能被录用。 (Mong rằng buổi phỏng vấn ngày mai mọi việc suôn sẻ, anh ấy được nhận vào làm.) | 但愿我是一个好歌手。 (Tôi ước gì tôi là một ca sĩ giỏi.) | Giữ bản site |
| 539 | HSK7 | 道别 | dàobié | 离开之前，他一一向同事们道别。 (Trước khi rời đi, anh ấy lần lượt chào tạm biệt các đồng nghiệp.) | 我不知道别人如何，但就我而论，我支持。 (Những người khác thì tôi không biết, nhưng đối với tôi, tôi ủng hộ điều đó.) | Giữ bản site |
| 540 | HSK7 | 大为 | dàwéi | 听完老师的讲解，同学们大为高兴。 (Nghe xong phần giảng giải của thầy, các bạn học sinh vô cùng vui mừng.) | 马大为在看莎士比亚的书。 (Mã Đại Vi đang đọc sách của Shakespeare.) | Giữ bản site |
| 541 | HSK7 | 点火 | diǎnhuǒ | 天冷了，爸爸在院子里点火取暖。 (Trời lạnh rồi, bố đốt lửa trong sân để sưởi ấm.) | 我们没点火。 (Chúng tôi không châm lửa.) | Giữ bản site |
| 542 | HSK7 | 点子 | diǎnzi | 大家想不出办法时，小王出了个好点子。 (Khi mọi người không nghĩ ra cách, Tiểu Vương đã đưa ra một ý tưởng hay.) | 你鬼点子真多。 (Bạn rất tháo vát.) | Giữ bản site |
| 543 | HSK7 | 掉头 | diàotóu | 前面的路堵住了，司机只好掉头回去。 (Con đường phía trước bị tắc, tài xế đành quay đầu xe đi về.) | 我们掉头吧！ (Hãy quay lại.) | Giữ bản site |
| 544 | HSK7 | 低估 | dīgū | 别低估这次考试的难度，要认真准备。 (Đừng đánh giá thấp độ khó của kỳ thi lần này, phải chuẩn bị nghiêm túc.) | 别低估我。 (Đừng đánh giá thấp tôi.) | Giữ bản site |
| 545 | HSK7 | 定论 | dìnglùn | 这件事还没有调查清楚，现在下不了定论。 (Việc này chưa điều tra rõ ràng nên bây giờ chưa thể đưa ra kết luận cuối cùng.) | 这个问题尚无定论。 (Câu hỏi này vẫn còn mở.) | Giữ bản site |
| 546 | HSK7 | 定做 | dìngzuò | 这套西装是他请裁缝定做的，非常合身。 (Bộ vest này anh ấy nhờ thợ may đặt làm riêng, mặc rất vừa người.) | 你是决定做这个工作的那个人，对吗？ (Bạn là người quyết định làm công việc này phải không?) | Giữ bản site |
| 547 | HSK7 | 动不动 | dòngbudòng | 他动不动就发脾气，大家都不敢惹他。 (Anh ấy động một chút là nổi nóng, mọi người đều không dám chọc giận anh ấy.) | 他动不动就生气。 (Anh ta tức giận vì đánh rơi chiếc mũ.) | Giữ bản site |
| 548 | HSK7 | 动感 | dònggǎn | 这首歌节奏明快，充满了动感。 (Bài hát này có nhịp điệu rộn ràng, tràn đầy cảm giác chuyển động.) | 我对运动感兴趣。 (Tôi quan tâm đến thể thao.) | Giữ bản site |
| 549 | HSK7 | 动员 | dòngyuán | 老师动员全班同学参加运动会。 (Thầy giáo vận động cả lớp tham gia hội thao.) | 我一直想成为一名职业篮球运动员。 (Tôi luôn muốn trở thành một cầu thủ bóng rổ chuyên nghiệp.) | Giữ bản site |
| 550 | HSK7 | 断绝 | duànjué | 他搬家以后，就和老朋友断绝了联系。 (Sau khi chuyển nhà, anh ấy cắt đứt liên lạc với bạn cũ.) | 他跟他们干脆地断绝来往了。 (Anh ấy đã chia tay rõ ràng với họ.) | Giữ bản site |
| 551 | HSK7 | 都会 | dūhuì | 上海是一座繁华的大都会，夜景特别美。 (Thượng Hải là một đô thị lớn phồn hoa, cảnh đêm đặc biệt đẹp.) | 到哪里我都会跟着你。 (Tôi sẽ theo bạn tới bất cứ đâu.) | Giữ bản site |
| 552 | HSK7 | 对付 | duìfu | 这个问题很棘手，我们要想办法对付。 (Vấn đề này rất nan giải, chúng ta phải nghĩ cách đối phó.) | 如果必要的话，我不反对付特别费用。 (Tôi không phản đối việc trả một khoản phí đặc biệt nếu cần thiết.) | Giữ bản site |
| 553 | HSK7 | 多心 | duōxīn | 他这个人容易多心，一句话能想半天。 (Anh ấy là người hay đa nghi, một câu nói cũng có thể suy nghĩ nửa ngày.) | 她为这个家付出了很多心力。 (Cô ấy đã bỏ ra rất nhiều công sức cho gia đình này.) | Giữ bản site |
| 554 | HSK7 | 耳目一新 | ěrmù-yìxīn | 展厅换了新的布置，让人耳目一新。 (Phòng trưng bày thay cách bày trí mới khiến mọi người cảm thấy mới mẻ hẳn.) | 这种新方法让人耳目一新。 (Phương pháp mới này là một luồng gió mới.) | Giữ bản site |
| 555 | HSK7 | 发觉 | fājué | 走到半路，他才发觉自己忘带钥匙了。 (Đi được nửa đường, anh ấy mới phát hiện mình quên mang chìa khóa.) | 我发觉男孩儿酣然入睡了。 (Tôi thấy cậu bé đang ngủ say.) | Giữ bản site |
| 556 | HSK7 | 发扬 | fāyáng | 我们要发扬团结互助的优良传统。 (Chúng ta cần phát huy truyền thống tốt đẹp đoàn kết, giúp đỡ lẫn nhau.) | 我们要把传统发扬光大。 (Chúng ta nên phát huy truyền thống của mình về phía trước.) | Giữ bản site |
| 557 | HSK7 | 非 | fēi | 这件事非他亲自去办不可，别人代替不了。 (Việc này nhất định phải do chính anh ấy đi làm, người khác không thay thế được.) | 非常冷。 (Trời rất lạnh.) | Giữ bản site |
| 558 | HSK7 | 分明 | fēnmíng | 这篇文章条理分明，读起来很容易懂。 (Bài viết này có bố cục rõ ràng, mạch lạc nên đọc rất dễ hiểu.) | 写文章要主次分明。 (Khi bạn viết, hãy giữ những điểm chính ngoài những điểm nhỏ.) | Giữ bản site |
| 559 | HSK7 | 负 | fù | 他在这次事故中负了伤，住进了医院。 (Anh ấy bị thương trong vụ tai nạn lần này và phải nhập viện.) | 考完试，我如释重负。 (Sau kỳ thi, tôi cảm thấy như trút được gánh nặng trên vai.) | Giữ bản site |
| 560 | HSK7 | 附 | fù | 报告后面附了一张详细的表格。 (Phía sau báo cáo có kèm một bảng biểu chi tiết.) | 附近有提款机吗？ (Có máy ATM nào gần đây không?) | Giữ bản site |
| 561 | HSK7 | 复活 | fùhuó | 春天一到，枯萎的小草又复活了。 (Mùa xuân vừa đến, cỏ khô héo lại hồi sinh.) | 复活节的时候，孩子们找彩蛋。 (Vào lễ Phục sinh, bọn trẻ đi tìm những quả trứng được sơn màu.) | Giữ bản site |
| 562 | HSK7 | 复兴 | fùxīng | 近年来，传统手工艺正在慢慢复兴。 (Những năm gần đây, nghề thủ công truyền thống đang dần phục hưng.) | 到复兴门要坐几站？ (Có bao nhiêu điểm dừng để đến Fuxingmen?) | Giữ bản site |
| 563 | HSK7 | 改动 | gǎidòng | 这份计划改动不大，基本保持原来的样子。 (Kế hoạch này thay đổi không nhiều, cơ bản vẫn giữ nguyên như cũ.) | 我做了点改动。 (Tôi đã thực hiện một vài thay đổi.) | Giữ bản site |
| 564 | HSK7 | 告 | gào | 被骗以后，他决定去法院告那个骗子。 (Sau khi bị lừa, anh ấy quyết định ra tòa kiện kẻ lừa đảo đó.) | 告诉我！ (Nói cho tôi.) | Giữ bản site |
| 565 | HSK7 | 高龄 | gāolíng | 这位高龄老人每天还坚持散步锻炼。 (Cụ già cao tuổi này mỗi ngày vẫn kiên trì đi bộ tập thể dục.) | 高龄化是一个大问题。 (Dân số già là một vấn đề lớn.) | Giữ bản site |
| 566 | HSK7 | 个案 | gè’àn | 这只是一个个案，不能代表所有情况。 (Đây chỉ là một trường hợp cá biệt, không thể đại diện cho mọi tình huống.) | 他们在讨论这个案子。 (Họ đang thảo luận về vụ án.) | Giữ bản site |
| 567 | HSK7 | 格式 | géshi | 写报告时要注意格式，标题和段落要清楚。 (Khi viết báo cáo cần chú ý định dạng, tiêu đề và đoạn văn phải rõ ràng.) | 什么是格式塔疗法？ (Liệu pháp Gestalt là gì?) | Giữ bản site |
| 568 | HSK7 | 功 | gōng | 他为公司的发展立下了大功。 (Anh ấy đã lập công lớn cho sự phát triển của công ty.) | 李连杰的功夫很好。 (Kung fu của Jet Li rất tốt.) | Giữ bản site |
| 569 | HSK7 | 故 | gù | 他因故缺席了今天的会议，大家都很遗憾。 (Anh ấy vì có việc nên vắng mặt trong cuộc họp hôm nay, mọi người đều rất tiếc.) | 我们明天去故宫。 (Ngày mai chúng ta sẽ đến Tử Cấm Thành.) | Giữ bản site |
| 570 | HSK7 | 关头 | guāntóu | 在这紧要关头，大家更要团结一致。 (Vào thời điểm then chốt này, mọi người càng phải đoàn kết một lòng.) | 缓期执行在最后关头决定了下来。 (Lệnh hoãn hành quyết được đưa ra vào giờ thứ mười một.) | Giữ bản site |
| 571 | HSK7 | 管用 | guǎnyòng | 这种药对感冒很管用，吃两次就好了。 (Loại thuốc này trị cảm rất hiệu quả, uống hai lần là khỏi.) | 那药不会管用。 (Thuốc đó sẽ không giúp ích gì đâu.) | Giữ bản site |
| 572 | HSK7 | 关照 | guānzhào | 我第一次来这里，请大家多多关照。 (Tôi lần đầu đến đây, mong mọi người quan tâm giúp đỡ nhiều hơn.) | 初次见面，请多关照。 (Rất vui được gặp bạn, tôi hy vọng chúng ta sẽ hợp tác tốt.) | Giữ bản site |
| 573 | HSK7 | 顾虑 | gùlǜ | 你有什么顾虑，尽管说出来，大家一起商量。 (Bạn có băn khoăn gì thì cứ nói ra, mọi người cùng bàn bạc.) | 我毫无顾虑。 (Tôi không có sự quan tâm trên thế giới.) | Giữ bản site |
| 574 | HSK7 | 过道 | guòdào | 请不要把箱子放在过道里，会挡住别人。 (Xin đừng để thùng ở lối đi, sẽ chắn đường người khác.) | 我们没有收到过道歉。 (Chúng tôi đã không nhận được một lời xin lỗi.) | Giữ bản site |
| 575 | HSK7 | 果断 | guǒduàn | 遇到紧急情况，他果断地切断了电源。 (Gặp tình huống khẩn cấp, anh ấy quyết đoán cắt nguồn điện.) | 我做事该果断。 (Tôi nên ngừng trì hoãn.) | Giữ bản site |
| 576 | HSK7 | 过奖 | guòjiǎng | 您过奖了，我的中文还需要继续努力。 (Ngài khen quá lời rồi, tiếng Trung của tôi vẫn cần cố gắng thêm.) | 你的中文真好！太过奖了。 (Tiếng Trung của bạn thực sự tốt! Bạn tâng bốc tôi.) | Giữ bản site |
| 577 | HSK7 | 国学 | guóxué | 他从小读了很多国学经典，知识很丰富。 (Từ nhỏ anh ấy đã đọc nhiều kinh điển quốc học nên kiến thức rất phong phú.) | 后年我想去中国学习。 (Năm sau tôi muốn đi du học ở Trung Quốc.) | Giữ bản site |
| 578 | HSK7 | 国有 | guóyǒu | 这家银行是国有企业，管理非常严格。 (Ngân hàng này là doanh nghiệp nhà nước, quản lý rất nghiêm ngặt.) | 中国有八大菜系。 (Trung Quốc có tám nền ẩm thực tuyệt vời.) | Giữ bản site |
| 579 | HSK7 | 果真 | guǒzhēn | 天气预报说今天下雨，现在果真下起来了。 (Dự báo thời tiết nói hôm nay mưa, bây giờ quả thật đã mưa rồi.) | 如果真的是朋友的话，是不会说这样的话的吧。 (Một người bạn thực sự sẽ không nói những điều như vậy.) | Giữ bản site |
| 580 | HSK7 | 好受 | hǎoshòu | 吃了药以后，他觉得好受多了。 (Sau khi uống thuốc, anh ấy cảm thấy dễ chịu hơn nhiều.) | 这药会让你好受点。 (Thuốc này sẽ làm cho bạn cảm thấy tốt hơn.) | Giữ bản site |
| 581 | HSK7 | 好在 | hǎozài | 好在我们带了伞，不然就淋湿了。 (May mà chúng tôi mang theo ô, nếu không đã bị ướt mưa rồi.) | 你最好在年轻的时候多读点书。 (Tốt nhất bạn nên đọc nhiều sách khi còn trẻ.) | Giữ bản site |
| 582 | HSK7 | 何 | hé | 你何必为这点小事跟他计较呢？ (Bạn hà cớ gì phải so đo với anh ấy vì chuyện nhỏ này chứ?) | 何清源是我们的新同学。 (He Qingyuan là bạn học mới của chúng tôi.) | Giữ bản site |
| 583 | HSK7 | 和 | hé | 周末我和弟弟一起去图书馆看书。 (Cuối tuần, tôi cùng em trai đến thư viện đọc sách.) | 和气点。 (Hãy tử tế.) | Giữ bản site |
| 584 | HSK7 | 和好 | héhǎo | 他们吵架以后冷战了几天，最后还是和好了。 (Sau khi cãi nhau, họ chiến tranh lạnh vài ngày, cuối cùng vẫn làm hòa.) | 他们拒绝和好。 (Họ từ chối hòa giải.) | Giữ bản site |
| 585 | HSK7 | 和解 | héjiě | 经过调解，两家人终于握手和解了。 (Sau khi hòa giải, hai gia đình cuối cùng đã bắt tay làm hòa.) | 现在握个手和解吧。 (Bây giờ hãy bắt tay và trang điểm.) | Giữ bản site |
| 586 | HSK7 | 横 | héng | 马路中间画着一条白色的横线。 (Giữa đường có kẻ một vạch trắng nằm ngang.) | 爷爷听了老泪纵横。 (Ông nội nghe xong, nước mắt chảy dài trên mặt.) | Giữ bản site |
| 587 | HSK7 | 和气 | héqi | 他对人总是很和气，从来不随便发脾气。 (Anh ấy đối xử với mọi người luôn hòa nhã, chưa bao giờ tùy tiện nổi nóng.) | 和气点。 (Hãy tử tế.) | Giữ bản site |
| 588 | HSK7 | 后备 | hòubèi | 为了以防万一，我们准备了一个后备方案。 (Để phòng bất trắc, chúng tôi đã chuẩn bị một phương án dự phòng.) | 后备箱满了。 (Cốp xe đã đầy.) | Giữ bản site |
| 589 | HSK7 | 后备箱 | hòubèixiāng | 出发前，他把行李都放进了后备箱。 (Trước khi xuất phát, anh ấy để hết hành lý vào cốp xe.) | 后备箱满了。 (Cốp xe đã đầy.) | Giữ bản site |
| 590 | HSK7 | 护 | hù | 妈妈紧紧护着孩子，生怕他摔倒。 (Mẹ ôm chặt che chở cho con, sợ con ngã.) | 王丽华是一位护士。 (Vương Lệ Hoa là y tá.) | Giữ bản site |
| 591 | HSK7 | 呼 | hū | 他站在山顶，大声呼喊朋友的名字。 (Anh ấy đứng trên đỉnh núi, lớn tiếng gọi tên bạn mình.) | 他气呼呼地走了。 (Anh ta lao đi trong cơn giận dữ.) | Giữ bản site |
| 592 | HSK7 | 呼声 | hūshēng | 群众要求改善交通的呼声越来越高。 (Tiếng nói của người dân yêu cầu cải thiện giao thông ngày càng mạnh mẽ.) | 他睡着的时候，打呼声很响。 (Anh ngáy rất to khi ngủ.) | Giữ bản site |
| 593 | HSK7 | 即 | jí | 他即是我们的班长，也是足球队的队长。 (Anh ấy vừa là lớp trưởng của chúng tôi, cũng là đội trưởng đội bóng đá.) | 他八岁就即位了。 (Ông lên ngôi năm 8 tuổi.) | Giữ bản site |
| 594 | HSK7 | 计 | jì | 这笔费用应该计入这个月的总成本。 (Khoản chi phí này nên được tính vào tổng chi phí của tháng này.) | 我们坐计程车去吧。 (Chúng ta hãy đi taxi.) | Giữ bản site |
| 595 | HSK7 | 家伙 | jiāhuo | 那个家伙干活很利索，大家都喜欢他。 (Anh chàng đó làm việc rất nhanh nhẹn, mọi người đều quý anh ấy.) | 那家伙是谁？ (Anh chàng đó là ai?) | Giữ bản site |
| 596 | HSK7 | 检察 | jiǎnchá | 检察人员正在调查这起贪污案件。 (Nhân viên kiểm sát đang điều tra vụ án tham nhũng này.) | 检察官问了我一个引导性的问题。 (Công tố viên đã hỏi tôi một câu hỏi quan trọng.) | Giữ bản site |
| 597 | HSK7 | 健美 | jiànměi | 她每天早晨都去健身房做健美操。 (Sáng nào cô ấy cũng đến phòng gym tập thể dục thẩm mỹ.) | 她每星期去作一次健美操。 (Cô ấy đi tập thể dục nhịp điệu mỗi tuần một lần.) | Giữ bản site |
| 598 | HSK7 | 见外 | jiànwài | 都是自己人，你千万别跟我见外。 (Đều là người nhà cả, bạn tuyệt đối đừng khách sáo với tôi.) | 我一开门，只见外面下着大雪。 (Vừa mở cửa ra đã thấy bên ngoài tuyết rơi dày đặc.) | Giữ bản site |
| 599 | HSK7 | 界 | jiè | 这条河是两省之间的界，河水很清。 (Con sông này là ranh giới giữa hai tỉnh, nước sông rất trong.) | 我们一起看世界杯吧。 (Hãy cùng nhau xem World Cup nhé.) | Giữ bản site |
| 600 | HSK7 | 借口 | jièkǒu | 他迟到不是因为堵车，那只是借口。 (Anh ấy đi muộn không phải vì tắc đường, đó chỉ là cái cớ.) | 我没有借口。 (Tôi không có lý do gì.) | Giữ bản site |
| 601 | HSK7 | 介入 | jièrù | 这是他们家里的事，外人最好不要介入。 (Đây là việc trong nhà họ, người ngoài tốt nhất đừng can thiệp.) | 我们必须介入。 (Chúng ta phải can thiệp.) | Giữ bản site |
| 602 | HSK7 | 解脱 | jiětuō | 忙完这阵子，他终于从压力中解脱了。 (Bận rộn xong đợt này, cuối cùng anh ấy cũng thoát khỏi áp lực.) | 死是唯一的解脱吗？ (Cái chết có phải là lối thoát duy nhất?) | Giữ bản site |
| 603 | HSK7 | 介意 | jièyì | 他这个人说话比较直接，你千万别介意。 (Anh ấy nói chuyện khá thẳng thắn, bạn đừng để bụng nhé.) | 你介意跟我一起来吗？ (Bạn có vui lòng đi cùng tôi không?) | Giữ bản site |
| 604 | HSK7 | 机关 | jīguān | 他在一家政府机关工作，负责行政事务。 (Anh ấy làm việc tại một cơ quan chính phủ, phụ trách công việc hành chính.) | 上课前请把手机关机。 (Vui lòng tắt điện thoại trước khi vào lớp.) | Giữ bản site |
| 605 | HSK7 | 机密 | jīmì | 这份资料属于机密，不能随便给外人看。 (Tài liệu này thuộc loại cơ mật, không thể tùy tiện cho người ngoài xem.) | 这是机密。 (Nó là bí mật.) | Giữ bản site |
| 606 | HSK7 | 精 | jīng | 做学问要精益求精，不能马马虎虎。 (Làm học thuật phải cầu toàn đến mức hoàn hảo, không thể qua loa đại khái.) | 这本书有精装版。 (Cuốn sách này có phiên bản bìa cứng.) | Giữ bản site |
| 607 | HSK7 | 经 | jīng | 这部经书里记载了很多古代的故事。 (Bộ kinh thư này ghi chép rất nhiều câu chuyện thời cổ đại.) | 请稍等，经理马上就来。 (Xin vui lòng chờ một lát, người quản lý sẽ đến ngay.) | Giữ bản site |
| 608 | HSK7 | 尽情 | jìnqíng | 假期里，孩子们在草地上尽情玩耍。 (Trong kỳ nghỉ, bọn trẻ thỏa thích vui chơi trên bãi cỏ.) | 我们尽情在湖里游泳。 (Chúng tôi rất thích bơi trong hồ.) | Giữ bản site |
| 609 | HSK7 | 尽早 | jǐnzǎo | 有问题要尽早解决，拖得越久越麻烦。 (Có vấn đề phải giải quyết càng sớm càng tốt, càng kéo dài càng rắc rối.) | 尽早来。 (Hãy đến càng sớm càng tốt.) | Giữ bản site |
| 610 | HSK7 | 急性 | jíxìng | 他得了急性胃炎，被送到医院治疗。 (Anh ấy bị viêm dạ dày cấp tính, được đưa đến bệnh viện điều trị.) | 我是个急性子。 (Tôi thiếu kiên nhẫn.) | Giữ bản site |
| 611 | HSK7 | 绝 | jué | 由于环境破坏，这种鸟已经绝迹了。 (Do môi trường bị phá hoại, loài chim này đã biến mất hẳn rồi.) | 她回绝了他的邀请。 (Cô từ chối lời mời của anh.) | Giữ bản site |
| 612 | HSK7 | 开办 | kāibàn | 他们兄弟俩一起开办了一家小餐馆。 (Hai anh em họ cùng nhau mở một nhà hàng nhỏ.) | 你几点离开办公室？ (Bạn sẽ rời khỏi văn phòng lúc mấy giờ?) | Giữ bản site |
| 613 | HSK7 | 可观 | kěguān | 他这几年收入可观，还买了一套房子。 (Mấy năm nay thu nhập của anh ấy khá đáng kể, anh ấy còn mua được một căn nhà.) | 他收入可观。 (Anh ấy có thu nhập tốt.) | Giữ bản site |
| 614 | HSK7 | 客流 | kèliú | 节假日时，商场的客流明显增加了。 (Vào ngày lễ, lượng khách ở trung tâm thương mại tăng rõ rệt.) | 美丽的风景让游客流连忘返。 (Khung cảnh tuyệt đẹp khiến du khách muốn ở lại mãi mãi.) | Giữ bản site |
| 615 | HSK7 | 可笑 | kěxiào | 他讲的笑话一点也不可笑，大家都没反应。 (Câu chuyện cười anh ấy kể chẳng buồn cười chút nào, mọi người đều không phản ứng gì.) | 滑稽可笑。 (Thật là nực cười.) | Giữ bản site |
| 616 | HSK7 | 可疑 | kěyí | 门口站着一个可疑的人，保安马上报了警。 (Trước cửa có một người khả nghi đứng đó, bảo vệ lập tức báo công an.) | 看上去很可疑。 (Có vẻ đáng nghi.) | Giữ bản site |
| 617 | HSK7 | 口气 | kǒuqì | 他说话的口气很不客气，让人听了不舒服。 (Giọng điệu nói chuyện của anh ấy rất thiếu lịch sự, khiến người nghe khó chịu.) | 请深吸一口气。 (Xin hãy hít một hơi thật sâu.) | Giữ bản site |
| 618 | HSK7 | 矿 | kuàng | 这座矿里出产优质的铁矿石。 (Mỏ này sản xuất ra quặng sắt chất lượng cao.) | 水里有很多矿物质。 (Nước này có rất nhiều khoáng chất.) | Giữ bản site |
| 619 | HSK7 | 来年 | láinián | 今年收成不错，希望来年风调雨顺。 (Năm nay mùa màng bội thu, hy vọng năm tới mưa thuận gió hòa.) | 他看起来年轻，但实际上他是四十多岁的人了。 (Nhìn thì trẻ nhưng thực ra anh đã ngoài bốn mươi rồi.) | Giữ bản site |
| 620 | HSK7 | 留意 | liúyì | 出门的时候，请留意一下天气预报。 (Khi ra ngoài, xin hãy để ý dự báo thời tiết một chút.) | 你得留意一下。 (Bạn phải giữ cho đôi mắt của bạn mở.) | Giữ bản site |
| 621 | HSK7 | 麻 | má | 这种粗布是用麻织成的，结实又耐用。 (Loại vải thô này dệt từ sợi gai, vừa chắc chắn vừa bền.) | 这家饭馆的麻婆豆腐特别好吃。 (Đậu hũ Mapo ở nhà hàng này đặc biệt ngon.) | Giữ bản site |
| 622 | HSK7 | 麻 | má | 奶奶用麻绳把箱子捆得结结实实。 (Bà dùng dây gai buộc chiếc thùng thật chắc chắn.) | 这家饭馆的麻婆豆腐特别好吃。 (Đậu hũ Mapo ở nhà hàng này đặc biệt ngon.) | Giữ bản site |
| 623 | HSK7 | 码 | mǎ | 他把行李箱的密码改成了自己的生日。 (Anh ấy đổi mật mã của vali thành ngày sinh của mình.) | 今晚的戏码是什么？ (Tối nay có vở kịch gì thế?) | Giữ bản site |
| 624 | HSK7 | 马力 | mǎlì | 这台拖拉机的马力很大，爬坡毫不费力。 (Chiếc máy kéo này có mã lực rất lớn, leo dốc không hề tốn sức.) | 马力很可爱，不是么？ (Mary rất dễ thương phải không?) | Giữ bản site |
| 625 | HSK7 | 漫 | màn | 大雨过后，河水漫过了两岸的田地。 (Sau trận mưa lớn, nước sông tràn qua ruộng đồng hai bên bờ.) | 弟弟喜欢看漫画书。 (Em trai tôi thích đọc truyện tranh.) | Giữ bản site |
| 626 | HSK7 | 蒙 | méng | 他蒙受了巨大的损失，却没有一句怨言。 (Anh ấy phải chịu tổn thất to lớn nhưng không một lời oán trách.) | 蒙特娄的人说法语。 (Người dân ở Montréal nói tiếng Pháp.) | Giữ bản site |
| 627 | HSK7 | 民用 | mínyòng | 这种无人机既能军用，也能民用。 (Loại máy bay không người lái này vừa dùng cho quân sự, vừa dùng cho dân sự.) | 农民用镰刀割麦子。 (Người nông dân cắt lúa mì bằng liềm.) | Giữ bản site |
| 628 | HSK7 | 迷失 | míshī | 他在陌生的城市里迷失了方向，只好问路。 (Anh ấy lạc mất phương hướng trong thành phố xa lạ, đành phải hỏi đường.) | 我迷失了。 (Tôi bị lạc.) | Giữ bản site |
| 629 | HSK7 | 难处 | nánchu | 每个人都有自己的难处，我们要多体谅。 (Ai cũng có nỗi khó riêng, chúng ta nên thông cảm nhiều hơn.) | 核废料很难处理。 (Chất thải hạt nhân rất khó xử lý.) | Giữ bản site |
| 630 | HSK7 | 闹事 | nàoshì | 有人在街上闹事，警察很快赶来处理。 (Có người gây rối trên phố, cảnh sát nhanh chóng đến xử lý.) | 别闹事。 (Đừng gây rắc rối.) | Giữ bản site |
| 631 | HSK7 | 拿手 | náshǒu | 炒菜是妈妈的拿手好戏，客人每次都夸好吃。 (Nấu ăn là sở trường của mẹ, lần nào khách cũng khen ngon.) | 这不是我拿手的。 (Đó không phải là dòng của tôi.) | Giữ bản site |
| 632 | HSK7 | 内存 | nèicún | 这台电脑的内存很大，运行速度很快。 (Bộ nhớ của chiếc máy tính này rất lớn, tốc độ vận hành rất nhanh.) | 海内存知己，天涯若比邻。 (Một người bạn thật sự ở xa giống như người hàng xóm bên cạnh.) | Giữ bản site |
| 633 | HSK7 | 破旧 | pòjiù | 他穿着一件破旧的外套，却一点也不在意。 (Anh ấy mặc một chiếc áo khoác cũ sờn nhưng chẳng bận tâm chút nào.) | 我们要打破旧思想的藩篱。 (Chúng ta phải phá bỏ những rào cản của lối suy nghĩ cũ.) | Giữ bản site |
| 634 | HSK7 | 破例 | pòlì | 老师今天破例没有留作业，大家特别高兴。 (Hôm nay thầy giáo phá lệ không giao bài tập, mọi người đặc biệt vui mừng.) | 我不能破例。 (Tôi không thể tạo ra một ngoại lệ.) | Giữ bản site |
| 635 | HSK7 | 巧合 | qiǎohé | 我们在车站碰见老同学，真是巧合。 (Chúng tôi gặp bạn học cũ ở nhà ga, thật là trùng hợp ngẫu nhiên.) | 真是个巧合！ (Thật là một sự trùng hợp ngẫu nhiên!) | Giữ bản site |
| 636 | HSK7 | 且 | qiě | 这位老师讲课生动，且对学生很有耐心。 (Thầy giáo này giảng bài sinh động, hơn nữa rất kiên nhẫn với học sinh.) | 他不想苟且地过一辈子。 (Anh ấy không muốn trôi dạt trong cuộc sống.) | Giữ bản site |
| 637 | HSK7 | 情不自禁 | qíngbúzìjīn | 听到这个好消息，她情不自禁地笑了。 (Nghe tin tốt này, cô ấy không kìm được mà bật cười.) | 对不起， 我情不自禁。 (Xin lỗi, tôi không thể giúp được.) | Giữ bản site |
| 638 | HSK7 | 情人 | qíngrén | 情人节那天，他送给妻子一束玫瑰花。 (Vào ngày lễ Tình nhân, anh ấy tặng vợ một bó hoa hồng.) | 今天是情人节 (Hôm nay là ngày lễ tình nhân.) | Giữ bản site |
| 639 | HSK7 | 亲身 | qīnshēn | 这件事他亲身经历过，所以讲得很生动。 (Việc này anh ấy đã đích thân trải qua nên kể rất sinh động.) | 我父亲身体很健康。 (Bố tôi có sức khỏe tốt.) | Giữ bản site |
| 640 | HSK7 | 气色 | qìsè | 休息了几天以后，她的气色好多了。 (Sau khi nghỉ ngơi vài ngày, sắc mặt của cô ấy tốt hơn nhiều.) | 你气色不错。 (Bạn trông ổn đấy.) | Giữ bản site |
| 641 | HSK7 | 起诉 | qǐsù | 检察院决定起诉这名贪污的官员。 (Viện kiểm sát quyết định khởi tố viên quan chức tham nhũng này.) | 警察起诉他盗窃。 (Cảnh sát buộc tội anh ta tội trộm cắp.) | Giữ bản site |
| 642 | HSK7 | 求学 | qiúxué | 他年轻时去国外求学，学到了很多知识。 (Thời trẻ anh ấy ra nước ngoài du học, học được rất nhiều kiến thức.) | 老师要求学生交作业。 (Giáo viên yêu cầu học sinh nộp bài tập về nhà.) | Giữ bản site |
| 643 | HSK7 | 全能 | quánnéng | 他是队里的全能选手，什么位置都能打。 (Anh ấy là tuyển thủ toàn năng của đội, vị trí nào cũng chơi được.) | 人们认为，他完全能胜任这个工作。 (Anh ấy được đánh giá là rất có trình độ cho công việc này.) | Giữ bản site |
| 644 | HSK7 | 人间 | rénjiān | 人间处处有真情，我们要珍惜身边的人。 (Nhân gian khắp nơi đều có chân tình, chúng ta phải trân trọng những người bên cạnh.) | 我要一间有淋浴的单人间。 (Làm ơn cho tôi một phòng đơn có vòi sen.) | Giữ bản site |
| 645 | HSK7 | 人身 | rénshēn | 法律保护每一位公民的人身安全。 (Pháp luật bảo vệ an toàn thân thể của mọi công dân.) | 他们中的一些人身体健康，但是其他人不是。 (Một số người trong số họ khỏe mạnh, nhưng những người khác thì không.) | Giữ bản site |
| 646 | HSK7 | 人手 | rénshǒu | 最近订单太多，工厂里的人手不够用。 (Gần đây đơn hàng quá nhiều, nhân lực trong nhà máy không đủ dùng.) | 这家公司正缺少人手。 (Công ty này thiếu tay.) | Giữ bản site |
| 647 | HSK7 | 如一 | rúyī | 他做事始终如一，大家都很信任他。 (Anh ấy làm việc trước sau như một, mọi người đều rất tin tưởng anh ấy.) | 百闻不如一见。 (Một bức tranh đáng giá ngàn lời nói.) | Giữ bản site |
| 648 | HSK7 | 撒 | sā | 农民把种子均匀地撒在田地里。 (Người nông dân rải hạt giống đều trên ruộng.) | 你在撒谎。 (Bạn đang nói dối.) | Giữ bản site |
| 649 | HSK7 | 上火 | shànghuǒ | 最近天气干燥，他吃辣太多上火了。 (Gần đây thời tiết khô hanh, anh ấy ăn cay nhiều quá nên bị nóng trong người.) | 快点，不然要赶不上火车了。 (Hãy nhanh lên nếu không bạn sẽ lỡ chuyến tàu.) | Giữ bản site |
| 650 | HSK7 | 上空 | shàngkōng | 几只白鸽在广场上空飞来飞去。 (Mấy con bồ câu trắng bay qua bay lại trên bầu trời phía trên quảng trường.) | 晚上，街上空无一人。 (Vào ban đêm, không có một bóng người trên đường phố.) | Giữ bản site |
| 651 | HSK7 | 上司 | shàngsi | 他工作认真负责，深受上司的信任。 (Anh ấy làm việc nghiêm túc, có trách nhiệm nên rất được cấp trên tin tưởng.) | 如果你有上司的话，学会尊敬他（她）。 (Hãy tôn trọng cấp trên của bạn nếu có.) | Giữ bản site |
| 652 | HSK7 | 上行 | shàngxíng | 这趟上行列车开往北京，大约需要五个小时。 (Chuyến tàu đi lên này chạy về hướng Bắc Kinh, cần khoảng năm tiếng.) | 你必须马上行动。 (Điều bắt buộc là bạn phải hành động ngay lập tức.) | Giữ bản site |
| 653 | HSK7 | 少女 | shàonǚ | 那位少女喜欢画画，梦想成为一名画家。 (Cô gái trẻ ấy thích vẽ tranh, mơ ước trở thành một họa sĩ.) | 该名青年将少女从流氓团伙中救了出来。 (Chàng trai đã cứu cô gái khỏi một đám lưu manh.) | Giữ bản site |
| 654 | HSK7 | 生平 | shēngpíng | 这本书详细介绍了这位作家的生平。 (Cuốn sách này giới thiệu chi tiết về cuộc đời của nhà văn này.) | 这个班的女生平均身高超过了155公分。 (Chiều cao trung bình của nữ sinh lớp này là trên 155 cm.) | Giữ bản site |
| 655 | HSK7 | 生前 | shēngqián | 这位画家生前默默无闻，去世后才出名。 (Họa sĩ này lúc sinh thời lặng lẽ vô danh, sau khi qua đời mới nổi tiếng.) | 我出生前，我父亲就死了。 (Bố tôi mất trước khi tôi được sinh ra.) | Giữ bản site |
| 656 | HSK7 | 深思 | shēnsī | 写文章之前，他总是先深思一番。 (Trước khi viết bài, anh ấy luôn suy ngẫm kỹ một lúc.) | 他选每个词都深思熟虑。 (Anh ấy chọn từng từ một cách cẩn thận.) | Giữ bản site |
| 657 | HSK7 | 失礼 | shīlǐ | 在长辈面前大声说话是很失礼的。 (Nói to trước mặt người lớn tuổi là rất thất lễ.) | 不要失礼。 (Đừng thô lỗ.) | Giữ bản site |
| 658 | HSK7 | 受骗 | shòupiàn | 他在网上买东西时受骗了，损失了不少钱。 (Anh ấy bị lừa khi mua đồ trên mạng, mất khá nhiều tiền.) | 你受骗了。 (Bạn đã từng bị như vậy.) | Giữ bản site |
| 659 | HSK7 | 手头 | shǒutóu | 他最近手头有点紧，买东西很节省。 (Gần đây anh ấy hơi eo hẹp về tiền bạc nên mua sắm rất tiết kiệm.) | 有时我吸烟只是因为要给我手头点事做。 (Đôi khi tôi hút thuốc chỉ để có việc gì đó để làm.) | Giữ bản site |
| 660 | HSK7 | 收音机 | shōuyīnjī | 爷爷每天早晨都听收音机里的新闻。 (Sáng nào ông cũng nghe tin tức trên radio.) | 打开收音机。 (Bật đài.) | Giữ bản site |
| 661 | HSK7 | 率 | shuài | 他率领全队完成了这次艰难的任务。 (Anh ấy dẫn dắt cả đội hoàn thành nhiệm vụ gian nan lần này.) | 今年的失业率很高。 (Tỷ lệ thất nghiệp năm nay cao.) | Giữ bản site |
| 662 | HSK7 | 双重 | shuāngchóng | 他既要工作又要照顾孩子，压力是双重的。 (Anh ấy vừa phải làm việc vừa phải chăm con, áp lực gấp đôi.) | 他们俩表演了一首双重奏。 (Hai người họ đã song ca.) | Giữ bản site |
| 663 | HSK7 | 说情 | shuōqíng | 他犯了错，妈妈还替他向爸爸说情。 (Anh ấy mắc lỗi, mẹ còn thay anh ấy xin bố tha cho.) | 他们说情况只是暂时的。 (Họ cho biết tình hình chỉ là tạm thời.) | Giữ bản site |
| 664 | HSK7 | 算数 | suànshù | 大人说话要算数，不能随便骗孩子。 (Người lớn nói phải giữ lời, không thể tùy tiện lừa trẻ con.) | 那算数吗？ (Điều đó có được tính không?) | Giữ bản site |
| 665 | HSK7 | 太平 | tàipíng | 村里的人们过着太平的日子，心情很舒畅。 (Người dân trong làng sống những ngày tháng thái bình, tâm trạng rất thư thái.) | 这条河汇入太平洋。 (Con sông đó chảy vào Thái Bình Dương.) | Giữ bản site |
| 666 | HSK7 | 讨 | tǎo | 遇到不懂的问题，他常向老师讨教。 (Gặp vấn đề không hiểu, anh ấy thường thỉnh giáo thầy giáo.) | 我很喜欢课堂讨论。 (Tôi thực sự thích các cuộc thảo luận trong lớp.) | Giữ bản site |
| 667 | HSK7 | 天地 | tiāndì | 读万卷书，才能开阔自己的天地。 (Đọc muôn cuốn sách mới có thể mở rộng thế giới của chính mình.) | 我一天又一天地给她写信。 (Tôi viết cho cô ấy một lá thư mỗi ngày.) | Giữ bản site |
| 668 | HSK7 | 天分 | tiānfèn | 她在音乐方面很有天分，唱歌特别好听。 (Cô ấy rất có năng khiếu về âm nhạc, hát đặc biệt hay.) | 时装不是我的天分。 (Thời trang không phải là chuyên môn của tôi) | Giữ bản site |
| 669 | HSK7 | 天性 | tiānxìng | 孩子天性活泼，喜欢在外面跑来跑去。 (Trẻ con bản tính hiếu động, thích chạy nhảy bên ngoài.) | 它是人的天性。 (Đó là bản chất của con người.) | Giữ bản site |
| 670 | HSK7 | 条理 | tiáolǐ | 他做事很有条理，房间也收拾得很整齐。 (Anh ấy làm việc rất có trật tự, phòng ốc cũng dọn dẹp rất gọn gàng.) | 我很有条理。 (Tôi rất có phương pháp.) | Giữ bản site |
| 671 | HSK7 | 条约 | tiáoyuē | 一九七八年，中国和日本签署了和平条约。 (Năm một nghìn chín trăm bảy mươi tám, Trung Quốc và Nhật Bản đã ký kết hiệp ước hòa bình.) | 1978年中国和日本签署了和平条约。 (Năm 1978, một hiệp ước hòa bình được ký kết giữa Nhật Bản và Trung Quốc.) | Giữ bản site |
| 672 | HSK7 | 铁 | tiě | 这块铁很重，一个人根本搬不动。 (Khối sắt này rất nặng, một người căn bản không khiêng nổi.) | 前边就是地铁站。 (Ga tàu điện ngầm ở ngay phía trước.) | Giữ bản site |
| 673 | HSK7 | 听从 | tīngcóng | 在紧急情况下，大家要听从工作人员的安排。 (Trong tình huống khẩn cấp, mọi người phải nghe theo sự sắp xếp của nhân viên.) | 我会听从指示。 (Tôi sẽ vâng lời.) | Giữ bản site |
| 674 | HSK7 | 提速 | tísù | 进入高速以后，司机慢慢提速了。 (Sau khi vào đường cao tốc, tài xế từ từ tăng tốc.) | 他提速了。 (Anh tăng tốc.) | Giữ bản site |
| 675 | HSK7 | 万能 | wànnéng | 这把工具用途很多，几乎是万能的。 (Dụng cụ này có rất nhiều công dụng, gần như là vạn năng.) | 金钱万能。 (Nói chuyện tiền bạc.) | Giữ bản site |
| 676 | HSK7 | 无论如何 | wúlùn-rúhé | 无论如何，我们都要按时完成这项任务。 (Dù thế nào đi nữa, chúng ta cũng phải hoàn thành nhiệm vụ này đúng hạn.) | 无论如何说不通。 (Nó không có ý nghĩa gì cả.) | Giữ bản site |
| 677 | HSK7 | 无能 | wúnéng | 这位经理办事无能，员工们意见很大。 (Vị quản lý này làm việc bất tài, nhân viên có rất nhiều ý kiến.) | 我对此无能为力。 (Tôi không thể làm gì được.) | Giữ bản site |
| 678 | HSK7 | 无所事事 | wúsuǒshìshì | 整个下午他无所事事，只好去公园散步。 (Cả buổi chiều anh ấy không có việc gì làm, đành đi dạo trong công viên.) | 她无所事事地看向窗外 (Cô đang lơ đãng nhìn ra ngoài cửa sổ.) | Giữ bản site |
| 679 | HSK7 | 无意 | wúyì | 我无意打扰你，只是想问一个问题。 (Tôi không có ý làm phiền bạn, chỉ muốn hỏi một câu thôi.) | 这毫无意义。 (Điều đó hoàn toàn vô nghĩa.) | Giữ bản site |
| 680 | HSK7 | 物种 | wùzhǒng | 这片森林里生活着许多珍稀的物种。 (Trong khu rừng này sinh sống rất nhiều loài quý hiếm.) | 这是一个濒临灭绝的物种。 (Nó là một loài có nguy cơ tuyệt chủng.) | Giữ bản site |
| 681 | HSK7 | 下落 | xiàluò | 警方正在全力寻找失踪孩子的下落。 (Cảnh sát đang dốc toàn lực tìm kiếm tung tích của đứa trẻ mất tích.) | 他不会抛下落难的朋友不管。 (Anh không thể bỏ rơi người bạn của mình khi gặp rắc rối.) | Giữ bản site |
| 682 | HSK7 | 现任 | xiànrèn | 现任校长在会上介绍了学校的新计划。 (Hiệu trưởng đương nhiệm đã giới thiệu kế hoạch mới của nhà trường tại cuộc họp.) | 我没发现任何我该道歉的理由。 (Tôi không thấy có lý do gì để phải xin lỗi cả.) | Giữ bản site |
| 683 | HSK7 | 小看 | xiǎokàn | 别小看这件小事，处理不好会很麻烦。 (Đừng coi thường việc nhỏ này, xử lý không tốt sẽ rất rắc rối.) | 他小看女人。 (Anh ta coi thường phụ nữ.) | Giữ bản site |
| 684 | HSK7 | 下行 | xiàxíng | 这趟下行列车从北京开往上海。 (Chuyến tàu đi xuống này chạy từ Bắc Kinh đến Thượng Hải.) | 我们本该考虑一下行程。 (Lẽ ra chúng ta nên cân nhắc lịch trình.) | Giữ bản site |
| 685 | HSK7 | 心得 | xīndé | 培训结束以后，大家一起交流学习心得。 (Sau khi khóa đào tạo kết thúc, mọi người cùng nhau trao đổi kinh nghiệm học tập.) | 天冷了，小心得病。 (Trời trở lạnh rồi, cẩn thận đừng để bị ốm nhé.) | Giữ bản site |
| 686 | HSK7 | 性感 | xìnggǎn | 她今天的打扮既性感又得体。 (Cách ăn mặc của cô ấy hôm nay vừa gợi cảm vừa đúng mực.) | 汤姆非常性感。 (Tom nóng quá.) | Giữ bản site |
| 687 | HSK7 | 新生 | xīnshēng | 开学那天，很多新生在校园里问路。 (Ngày khai giảng, nhiều tân sinh viên hỏi đường trong khuôn viên trường.) | 我是个新生。 (Tôi là một sinh viên mới.) | Giữ bản site |
| 688 | HSK7 | 新手 | xīnshǒu | 他还是个新手，做事难免会慢一点。 (Anh ấy vẫn là người mới, làm việc khó tránh khỏi hơi chậm một chút.) | 我还是个新手。 (Tôi vẫn là người mới bắt đầu.) | Giữ bản site |
| 689 | HSK7 | 许 | xǔ | 老师不许学生在课堂上玩手机。 (Thầy giáo không cho phép học sinh chơi điện thoại trong lớp.) | 许芳宜是一位舞蹈家。 (Sheu Fang-yi là một vũ công.) | Giữ bản site |
| 690 | HSK7 | 须 | xū | 这种昆虫的触须很长，能感知周围的变化。 (Râu của loài côn trùng này rất dài, có thể cảm nhận sự thay đổi xung quanh.) | 必须的！ (Chắc chắn!) | Giữ bản site |
| 691 | HSK7 | 选举 | xuǎnjǔ | 今年的选举将在下个月正式举行。 (Cuộc bầu cử năm nay sẽ chính thức diễn ra vào tháng sau.) | 什么时候选举？ (Khi nào có cuộc bầu cử?) | Giữ bản site |
| 692 | HSK7 | 样本 | yàngběn | 实验室里保存着很多植物的样本。 (Trong phòng thí nghiệm lưu giữ rất nhiều mẫu vật thực vật.) | 样本不够纯净。 (Mẫu không đủ tinh khiết.) | Giữ bản site |
| 693 | HSK7 | 烟花 | yānhuā | 节日的夜晚，天空中绽放着美丽的烟花。 (Vào đêm lễ hội, pháo hoa rực rỡ nở bung trên bầu trời.) | 昨晚，烟花厂发生了爆炸。 (Hôm qua, một vụ nổ đã xảy ra ở nhà máy pháo hoa.) | Giữ bản site |
| 694 | HSK7 | 言行 | yánxíng | 作为老师，要特别注意自己的言行。 (Là giáo viên, cần đặc biệt chú ý lời nói và hành động của mình.) | 注意言行！ (Hãy cẩn thận những gì bạn nói.) | Giữ bản site |
| 695 | HSK7 | 要好 | yàohǎo | 他们俩从小一起长大，关系非常要好。 (Hai người họ lớn lên cùng nhau từ nhỏ, quan hệ vô cùng thân thiết.) | 我不跟你要好了。 (Tôi sẽ ngừng cố gắng thân thiện với bạn.) | Giữ bản site |
| 696 | HSK7 | 要紧 | yàojǐn | 先做要紧的事，别的事可以慢慢来。 (Hãy làm việc quan trọng trước, việc khác có thể từ từ làm sau.) | 稍微冷点儿不要紧。 (Tôi không quan tâm nếu trời hơi lạnh.) | Giữ bản site |
| 697 | HSK7 | 要命 | yàomìng | 今天热得要命，大家都不想出门。 (Hôm nay nóng đến chết người, mọi người đều không muốn ra ngoài.) | 你不要命啦！ (Bạn điên à?) | Giữ bản site |
| 698 | HSK7 | 议 | yì | 村民们开会议事，讨论村里的发展。 (Dân làng họp bàn công việc, thảo luận về sự phát triển của làng.) | 会议完满结束了。 (Cuộc họp đã kết thúc thành công.) | Giữ bản site |
| 699 | HSK7 | 一面 | yímiàn | 他一面开车，一面听着广播里的新闻。 (Anh ấy vừa lái xe vừa nghe tin tức trên đài phát thanh.) | 梳妆台上有一面镜子。 (Có một chiếc gương trên bàn trang điểm.) | Giữ bản site |
| 700 | HSK7 | 应 | yìng | 他应邀参加了这次国际会议。 (Anh ấy nhận lời mời tham dự hội nghị quốc tế lần này.) | 别客气，这是我应该做的。 (Đừng đề cập đến nó, đó là điều ít nhất tôi có thể làm.) | Giữ bản site |
| 701 | HSK7 | 一无所知 | yìwúsuǒzhī | 对这个新领域，他几乎一无所知。 (Về lĩnh vực mới này, anh ấy hầu như không biết gì cả.) | 我一无所知。 (Đánh bại tôi.) | Giữ bản site |
| 702 | HSK7 | 意愿 | yìyuàn | 买房是全家人的共同意愿，不是他一个人的决定。 (Mua nhà là nguyện vọng chung của cả gia đình, không phải quyết định của riêng anh ấy.) | 筹划旅行的时候，我们必须考虑到全家人的意愿。 (Chúng ta phải tính đến mong muốn của cả gia đình khi lên kế hoạch cho một chuyến đi.) | Giữ bản site |
| 703 | HSK7 | 用意 | yòngyì | 他这么做的用意很明显，大家都看得出来。 (Ý đồ của anh ấy khi làm như vậy rất rõ ràng, mọi người đều nhận ra.) | 那个词用意大利语怎么说？ (Bạn nói câu đó trong tiếng Ý như thế nào?) | Giữ bản site |
| 704 | HSK7 | 有望 | yǒuwàng | 经过治疗，他的身体有望很快恢复。 (Sau khi điều trị, cơ thể anh ấy có hy vọng sớm hồi phục.) | 有望会变晴。 (Thời tiết hứa hẹn sẽ trong xanh.) | Giữ bản site |
| 705 | HSK7 | 有意 | yǒuyì | 他有意学医，将来想当一名医生。 (Anh ấy có ý định học y, sau này muốn trở thành bác sĩ.) | 看书很有意思。 (Đọc sách thật thú vị.) | Giữ bản site |
| 706 | HSK7 | 越过 | yuèguò | 小鹿轻松地越过了那条小河。 (Con nai nhỏ nhẹ nhàng vượt qua con sông nhỏ đó.) | 马轻松地越过了障碍。 (Con ngựa dễ dàng nhảy qua hàng rào.) | Giữ bản site |
| 707 | HSK7 | 运河 | yùnhé | 这艘大船慢慢穿过了巴拿马运河。 (Con tàu lớn này từ từ đi qua kênh đào Panama.) | 这艘船穿过巴拿马运河 (Con tàu đã đi qua kênh đào Panama.) | Giữ bản site |
| 708 | HSK7 | 在职 | zàizhí | 他是在职研究生，白天工作晚上学习。 (Anh ấy là nghiên cứu sinh vừa học vừa làm, ban ngày đi làm, buổi tối học tập.) | 她在职业学校学做饭。 (Cô đang học nấu ăn tại một trường dạy nghề.) | Giữ bản site |
| 709 | HSK7 | 真是 | zhēnshi | 今天的天气真是好，我们去公园走走吧。 (Thời tiết hôm nay thật đẹp, chúng ta đi dạo công viên đi.) | 真是太好了。 (Thật tuyệt vời.) | Giữ bản site |
| 710 | HSK7 | 至此 | zhìcǐ | 会议至此结束，大家可以回去休息了。 (Cuộc họp đến đây là kết thúc, mọi người có thể về nghỉ ngơi rồi.) | 事已至此。 (Việc gì đã xong là xong.) | Giữ bản site |
| 711 | HSK7 | 指点 | zhǐdiǎn | 我的作文写得不好，请老师指点一下。 (Bài văn của em viết chưa tốt, xin thầy chỉ bảo thêm.) | 用手指点别人不礼貌。 (Chỉ tay vào người khác là một cách cư xử tồi tệ.) | Giữ bản site |
| 712 | HSK7 | 指南 | zhǐnán | 这本旅游指南介绍了当地有名的景点。 (Cuốn cẩm nang du lịch này giới thiệu các điểm tham quan nổi tiếng của địa phương.) | 指南针指向北边。 (La bàn chỉ về phía bắc.) | Giữ bản site |
| 713 | HSK7 | 直视 | zhíshì | 回答问题时，他敢于直视老师的眼睛。 (Khi trả lời câu hỏi, anh ấy dám nhìn thẳng vào mắt thầy giáo.) | 我直视他的眼睛。 (Tôi nhìn vào mắt anh ấy.) | Giữ bản site |
| 714 | HSK7 | 指望 | zhǐwàng | 遇到困难时，他总是指望朋友帮忙。 (Khi gặp khó khăn, anh ấy luôn trông cậy vào bạn bè giúp đỡ.) | 我指望你了。 (Tôi đang trông cậy vào bạn.) | Giữ bản site |
| 715 | HSK7 | 知足 | zhīzú | 他收入不高，却懂得知足，日子过得很开心。 (Thu nhập của anh ấy không cao nhưng biết bằng lòng với những gì mình có, cuộc sống rất vui vẻ.) | 知足常乐。 (Hạnh phúc là người đàn ông hài lòng.) | Giữ bản site |
| 716 | HSK7 | 知足常乐 | zhīzú-chánglè | 懂得知足常乐的人，生活总是很轻松。 (Người biết hài lòng với những gì mình có thì cuộc sống luôn nhẹ nhàng.) | 知足常乐。 (Hạnh phúc là người đàn ông hài lòng.) | Giữ bản site |
| 717 | HSK7 | 钟 | zhōng | 墙上的钟已经停了，可能是没电了。 (Chiếc đồng hồ trên tường đã dừng rồi, có lẽ là hết pin.) | 再给我五分钟。 (Cho tôi thêm năm phút nữa.) | Giữ bản site |
| 718 | HSK7 | 中止 | zhōngzhǐ | 由于天气原因，比赛不得不暂时中止。 (Vì lý do thời tiết, trận đấu buộc phải tạm thời đình chỉ.) | 谈判中止了。 (Cuộc đàm phán đã kết thúc.) | Giữ bản site |
| 719 | HSK7 | 种族 | zhǒngzú | 不同种族的人应该受到平等的对待。 (Người thuộc các chủng tộc khác nhau cần được đối xử bình đẳng.) | 汤姆是种族主义者。 (Tom là một kẻ phân biệt chủng tộc.) | Giữ bản site |
| 720 | HSK7 | 注 | zhù | 他小心地把热水注进玻璃杯里。 (Anh ấy cẩn thận rót nước nóng vào chiếc cốc thủy tinh.) | 注意言行！ (Hãy cẩn thận những gì bạn nói.) | Giữ bản site |
| 721 | HSK7 | 注定 | zhùdìng | 他们俩性格互补，注定会成为好搭档。 (Hai người họ tính cách bổ sung cho nhau, định sẵn sẽ trở thành cặp cộng sự ăn ý.) | 你注定失败。 (Bạn chắc chắn sẽ thất bại.) | Giữ bản site |
| 722 | HSK7 | 准许 | zhǔnxǔ | 未经老师准许，学生不能提前离开教室。 (Chưa được thầy giáo cho phép, học sinh không thể rời lớp sớm.) | 需要准许。 (Cần phải có giấy phép.) | Giữ bản site |
| 723 | HSK7 | 着手 | zhuóshǒu | 接到任务以后，他马上着手准备材料。 (Sau khi nhận nhiệm vụ, anh ấy lập tức bắt tay chuẩn bị tài liệu.) | 他挥动着手里的帽子。 (Anh ta vẫy chiếc mũ trong tay.) | Giữ bản site |
| 724 | HSK7 | 着想 | zhuóxiǎng | 父母处处为孩子着想，却很少为自己打算。 (Cha mẹ luôn nghĩ cho con cái mọi bề nhưng rất ít khi tính toán cho bản thân.) | 汤姆急着想知道结果。 (Tom nóng lòng muốn biết kết quả.) | Giữ bản site |
| 725 | HSK7 | 着眼 | zhuóyǎn | 做规划要着眼于长远，不能只看眼前。 (Làm quy hoạch phải hướng tới lâu dài, không thể chỉ nhìn trước mắt.) | 他眨巴着眼睛看我。 (Anh ấy nhìn tôi, chớp mắt.) | Giữ bản site |
| 726 | HSK7 | 子弹 | zǐdàn | 猎人的枪里只剩下最后一颗子弹了。 (Trong súng của người thợ săn chỉ còn lại viên đạn cuối cùng.) | 他们知道如何制造原子弹。 (Họ biết cách chế tạo bom nguyên tử.) | Giữ bản site |
| 727 | HSK7 | 自行 | zìxíng | 没有老师帮忙，他自行完成了作业。 (Không có thầy giáo giúp đỡ, anh ấy tự mình hoàn thành bài tập.) | 这是我的自行车。 (Đó là xe đạp của tôi.) | Giữ bản site |
| 728 | HSK7 | 总和 | zǒnghé | 这几个数字的总和正好是一百。 (Tổng của mấy con số này vừa đúng bằng một trăm.) | 她总和她父母吵架。 (Cô ấy luôn cãi nhau với bố mẹ.) | Giữ bản site |
| 729 | HSK8 | 挨 | āi | 同学们挨个走进教室，在自己的座位上坐好。 (Các bạn học sinh lần lượt theo thứ tự đi vào lớp, ngồi vào chỗ của mình.) | 他今天又挨训了。 (Hôm nay anh ấy lại bị nhắc nhở nữa.) | Giữ bản site |
| 730 | HSK8 | 爱慕 | àimù | 很多年轻人爱慕这位歌手的才华和人品。 (Nhiều bạn trẻ ngưỡng mộ tài hoa và nhân cách của ca sĩ này.) | 她爱慕她哥哥。 (Cô yêu quý anh trai mình.) | Giữ bản site |
| 731 | HSK8 | 傲 | ào | 他这个人太傲了，别人的话一句也听不进去。 (Anh ta quá kiêu ngạo, lời của người khác một câu cũng không nghe lọt.) | 他的成绩让父母引以为傲。 (Kết quả của anh khiến bố mẹ anh tự hào.) | Giữ bản site |
| 732 | HSK8 | 凹 | āo | 这条路中间凹下去了一块，开车要小心。 (Đoạn đường này lõm xuống một chỗ ở giữa, lái xe phải cẩn thận.) | 这面镜子是凹形的。 (Gương này là lõm.) | Giữ bản site |
| 733 | HSK8 | 拔 | bá | 周末我们一起去地里拔草，干了一上午。 (Cuối tuần chúng tôi cùng ra ruộng nhổ cỏ, làm suốt cả buổi sáng.) | 她的成绩出类拔萃。 (Điểm số của cô ấy rất xuất sắc.) | Giữ bản site |
| 734 | HSK8 | 掰 | bāi | 他把馒头掰成两半，一半递给了弟弟。 (Anh ấy bẻ bánh màn thầu thành hai nửa, đưa một nửa cho em trai.) | 把面包掰成两半。 (Bẻ chiếc bánh mì thành hai nửa.) | Giữ bản site |
| 735 | HSK8 | 伴侣 | bànlǚ | 他们结婚多年，一直是彼此最好的伴侣。 (Họ kết hôn nhiều năm, luôn là người bạn đời tốt nhất của nhau.) | 他们是同性伴侣。 (Họ là một cặp đôi đồng tính.) | Giữ bản site |
| 736 | HSK8 | 剥 | bāo | 妈妈把橙子的皮剥下来，分给孩子吃。 (Mẹ bóc vỏ cam rồi chia cho con ăn.) | 墙上的油漆开始剥离了。 (Lớp sơn trên tường bắt đầu bong tróc.) | Giữ bản site — câu XuCup dùng 剥 âm bō (剥离), sai âm của mục bāo (bóc vỏ) |
| 737 | HSK8 | 保守 | bǎoshǒu | 爷爷的思想比较保守，不太接受新事物。 (Tư tưởng của ông khá bảo thủ, không dễ tiếp nhận điều mới.) | 我们很保守。 (Chúng tôi bảo thủ.) | Giữ bản site |
| 738 | HSK8 | 保佑 | bǎoyòu | 妈妈去庙里烧香，求神明保佑全家平安。 (Mẹ đi chùa thắp hương, cầu thần linh phù hộ cho cả nhà bình an.) | 上帝保佑美国。 (Xin Chúa phù hộ cho nước Mỹ.) | Giữ bản site |
| 739 | HSK8 | 巴掌 | bāzhang | 他生气地一巴掌拍在桌子上，吓了大家一跳。 (Anh ấy giận dữ đập một bàn tay xuống bàn, khiến mọi người giật mình.) | 我想过扇你一巴掌。 (Tôi muốn đánh bạn.) | Giữ bản site |
| 740 | HSK8 | 奔 | bèn | 他一早就奔火车站去了，怕赶不上车。 (Anh ấy đi thẳng tới ga tàu từ sớm, sợ không kịp chuyến.) | 公牛在街上狂奔。 (Con bò đực chạy điên cuồng trên đường phố.) | Giữ bản site — câu XuCup dùng 奔 âm bēn (chạy), sai âm của mục bèn (đi tới) |
| 741 | HSK8 | 笨蛋 | bèndàn | 你这个笨蛋，这么简单的题都做错了。 (Đồ ngốc nhà cậu, bài dễ thế này mà cũng làm sai.) | 我不是笨蛋。 (Tôi không ngu ngốc.) | Giữ bản site |
| 742 | HSK8 | 彬彬有礼 | bīnbīn-yǒulǐ | 这位服务员彬彬有礼，客人对他印象很好。 (Anh nhân viên phục vụ này rất lịch sự, khách hàng có ấn tượng tốt về anh ấy.) | 汤姆既彬彬有礼又善解人意。 (Tom lịch sự và nhạy cảm.) | Giữ bản site |
| 743 | HSK8 | 拨 | bō | 公司决定拨一笔钱，用来帮助受灾的群众。 (Công ty quyết định trích một khoản tiền để giúp đỡ người dân vùng thiên tai.) | 别撩拨他了，他会生气的。 (Đừng trêu chọc anh ấy nữa, anh ấy sẽ tức giận đấy.) | Giữ bản site |
| 744 | HSK8 | 不辞而别 | bùcí’érbié | 他谁也没告诉，就这样不辞而别去了外地。 (Anh ấy chẳng nói với ai, cứ thế ra đi không lời từ biệt tới nơi khác.) | 汤姆不辞而别。 (Tom rời đi mà không báo trước.) | Giữ bản site |
| 745 | HSK8 | 不假思索 | bùjiǎ-sīsuǒ | 老师刚提出问题，他就不假思索地举起了手。 (Thầy vừa nêu câu hỏi, anh ấy đã không cần suy nghĩ mà giơ tay ngay.) | 汤姆不假思索脱口而出。 (Tom nói mà không suy nghĩ.) | Giữ bản site |
| 746 | HSK8 | 不堪 | bùkān | 这条老街的路面破烂不堪，走路很不方便。 (Mặt đường của con phố cũ này hư hỏng không chịu nổi, đi lại rất bất tiện.) | 我们还是脆弱不堪。 (Chúng ta vẫn dễ bị tổn thương.) | Giữ bản site |
| 747 | HSK8 | 哺乳 | bǔrǔ | 她每天按时给宝宝哺乳，宝宝长得白白胖胖。 (Cô ấy cho bé bú đúng giờ mỗi ngày, bé lớn lên trắng trẻo bụ bẫm.) | 鲸鱼是哺乳动物。 (Cá voi là động vật có vú.) | Giữ bản site |
| 748 | HSK8 | 不言而喻 | bùyán’éryù | 他对大家的帮助很大，这一点不言而喻。 (Anh ấy giúp đỡ mọi người rất nhiều, điều này không cần nói cũng rõ.) | 不言而喻。 (Điều đó là hiển nhiên.) | Giữ bản site |
| 749 | HSK8 | 猜想 | cāixiǎng | 大家都在猜想，这道难题到底谁能解出来。 (Mọi người đều đang phỏng đoán xem rốt cuộc ai giải được bài toán khó này.) | 我猜想您饿了。 (Tôi đoán là bạn đang đói.) | Giữ bản site |
| 750 | HSK8 | 惨 | cǎn | 他从自行车上摔下来，摔得可真惨。 (Anh ấy ngã từ xe đạp xuống, ngã đau thật thảm.) | 这次地震灾情惨重。 (Trận động đất này đã gây ra thiệt hại nặng nề.) | Giữ bản site |
| 751 | HSK8 | 操纵 | cāozòng | 他熟练地操纵着机器，把零件一个个装好。 (Anh ấy thành thạo điều khiển máy móc, lắp từng linh kiện vào đâu ra đấy.) | 幕后操纵者是谁？ (Ai đứng đằng sau nó?) | Giữ bản site |
| 752 | HSK8 | 搀 | chān | 小王轻轻搀着奶奶，一步一步走下楼梯。 (Tiểu Vương nhẹ nhàng dìu bà nội, từng bước đi xuống cầu thang.) | 他搀扶着奶奶过马路。 (Anh giúp bà ngoại qua đường.) | Giữ bản site |
| 753 | HSK8 | 产物 | chǎnwù | 这首动人的民歌，是劳动人民智慧的产物。 (Bài dân ca cảm động này là sản phẩm của trí tuệ người lao động.) | 汤姆说他是习惯的产物。 (Tom nói rằng anh ấy là người sống theo thói quen.) | Giữ bản site |
| 754 | HSK8 | 插手 | chāshǒu | 这是我们自己的事，外人不要随便插手。 (Đây là việc của chúng tôi, người ngoài đừng tùy tiện nhúng tay vào.) | 别插手。 (Tránh xa chuyện này.) | Giữ bản site |
| 755 | HSK8 | 撤 | chè | 演出结束以后，工作人员把舞台上的道具都撤走了。 (Sau khi buổi diễn kết thúc, nhân viên dọn hết đạo cụ trên sân khấu đi.) | 我想撤回我之前的陈述。 (Tôi xin rút lại lời phát biểu trước đó của mình.) | Giữ bản site |
| 756 | HSK8 | 扯 | chě | 他用力一扯，就把旧窗帘扯了下来。 (Anh ấy giật mạnh một cái là kéo tấm rèm cũ xuống.) | 我不想被牵扯到这件事里。 (Tôi không muốn dính líu đến chuyện đó.) | Giữ bản site |
| 757 | HSK8 | 呈 | chéng | 请你把这份报告呈给经理，让他尽快签字。 (Bạn hãy trình bản báo cáo này cho quản lý để anh ấy ký sớm.) | 晚会上节目精彩纷呈。 (Bữa tiệc đã có hết màn này đến màn khác.) | Giữ bản site |
| 758 | HSK8 | 吃亏 | chīkuī | 买东西多比几家，心里有数才不会吃亏。 (Mua đồ nên so giá vài nơi, nắm rõ trong lòng mới không bị thiệt.) | 货比三家不吃亏，我们再看看。 (Nó trả tiền để mua sắm xung quanh, chúng ta hãy xem xét thêm.) | Giữ bản site |
| 759 | HSK8 | 宠 | chǒng | 父母太宠孩子了，什么要求都答应他。 (Bố mẹ quá nuông chiều con, yêu cầu gì cũng đồng ý với con.) | 她养各种不同的宠物。 (Cô nuôi nhiều loại thú cưng khác nhau.) | Giữ bản site |
| 760 | HSK8 | 仇 | chóu | 他们两家因为土地结下了仇，多年不来往。 (Hai gia đình họ vì đất đai mà kết oán thù, nhiều năm không qua lại.) | 仇外的想法是不对的。 (Những ý tưởng bài ngoại là sai lầm.) | Giữ bản site |
| 761 | HSK8 | 仇恨 | chóuhèn | 不要让仇恨蒙住眼睛，要学会慢慢放下。 (Đừng để thù hận che mờ đôi mắt, hãy học cách từ từ buông bỏ.) | 人们需要止住仇恨。 (Mọi người cần ngừng ghét bỏ.) | Giữ bản site |
| 762 | HSK8 | 喘 | chuǎn | 爬到山顶以后，他累得直喘粗气。 (Leo lên tới đỉnh núi, anh ấy mệt đến mức thở hổn hển.) | 他跑得气喘吁吁。 (Anh chạy cho đến khi tắt thở.) | Giữ bản site |
| 763 | HSK8 | 出丑 | chūchǒu | 他在台上突然忘词，当场出丑，脸都红了。 (Anh ấy đang trên sân khấu thì bỗng quên lời, mất mặt ngay tại chỗ, mặt đỏ bừng.) | 他在大家面前出了丑。 (Anh ấy đã mất mặt trước mọi người.) | Giữ bản site — câu XuCup dùng dạng tách「出了丑」, kém rõ cho người học; bản site dùng nguyên từ 出丑 |
| 764 | HSK8 | 垂 | chuí | 河边的柳枝垂在水面上，随风轻轻摆动。 (Cành liễu bên sông rủ xuống mặt nước, nhẹ nhàng lay động theo gió.) | 树上悬垂着很多果子。 (Rất nhiều quả treo trên cây.) | Giữ bản site |
| 765 | HSK8 | 吹牛 | chuīniú | 他总爱吹牛，说自己什么都懂，其实不然。 (Anh ấy hay khoác lác, nói mình gì cũng biết, thực ra không phải vậy.) | 我不想吹牛。 (Tôi không có ý khoe khoang.) | Giữ bản site |
| 766 | HSK8 | 慈善 | císhàn | 她每个月都会拿出一部分工资，帮助慈善机构。 (Tháng nào cô ấy cũng trích một phần lương để giúp các tổ chức từ thiện.) | 汤姆捐一半他的薪水给他最喜欢的慈善机构。 (Tom quyên góp một nửa số tiền lương của mình cho tổ chức từ thiện yêu thích của mình.) | Giữ bản site |
| 767 | HSK8 | 丛 | cóng | 这套丛书一共有十本，讲的都是历史故事。 (Bộ sách này có tổng cộng mười cuốn, toàn kể chuyện lịch sử.) | 那是丛林狼吗？ (Đó có phải là chó sói không?) | Giữ bản site |
| 768 | HSK8 | 丛林 | cónglín | 他们背着包走进丛林深处，去观察野生动物。 (Họ đeo ba lô đi vào sâu trong rừng rậm để quan sát động vật hoang dã.) | 那是丛林狼吗？ (Đó có phải là chó sói không?) | Giữ bản site |
| 769 | HSK8 | 凑 | còu | 大家一起凑钱，给生病的同学买了礼物。 (Mọi người cùng góp tiền mua quà cho bạn học đang ốm.) | 大家都去凑热闹了。 (Mọi người đều đến tham gia vui vẻ.) | Giữ bản site |
| 770 | HSK8 | 摧毁 | cuīhuǐ | 一场大火摧毁了山上的老房子，只剩下墙。 (Một trận cháy lớn đã phá hủy ngôi nhà cũ trên núi, chỉ còn lại tường.) | 摧毁这个寺庙。 (Phá hủy ngôi đền này.) | Giữ bản site |
| 771 | HSK8 | 打 | dǎ | 遇到危险的时候，要马上打电话向警察求助。 (Khi gặp nguy hiểm, phải lập tức gọi điện cầu cứu cảnh sát.) | 打电话回家！ (Gọi về nhà!) | Giữ bản site |
| 772 | HSK8 | 打赌 | dǎdǔ | 我跟朋友打赌，他这次考试一定能通过。 (Tôi cá với bạn rằng lần thi này anh ấy nhất định sẽ đỗ.) | 我打赌他没搞定。 (Tôi cá là anh ấy sẽ không qua khỏi.) | Giữ bản site |
| 773 | HSK8 | 代理人 | dàilǐrén | 买房的时候，他请了一位代理人帮他谈价格。 (Khi mua nhà, anh ấy thuê một người đại diện giúp thương lượng giá.) | 我是你的代理人。 (Tôi là phó của bạn.) | Giữ bản site |
| 774 | HSK8 | 代言 | dàiyán | 这位演员为国产手机代言，广告到处都能看到。 (Diễn viên này làm đại diện cho hãng điện thoại nội địa, quảng cáo thấy ở khắp nơi.) | 他是这个品牌的代言人。 (Anh ấy là gương mặt đại diện của thương hiệu này.) | Giữ bản site |
| 775 | HSK8 | 打猎 | dǎliè | 以前村里人冬天常进山打猎，补贴家用。 (Trước đây người trong làng mùa đông thường vào núi săn bắn để thêm thu nhập cho gia đình.) | 他喜欢打猎。 (Anh ấy thích săn bắn.) | Giữ bản site |
| 776 | HSK8 | 打喷嚏 | dǎpēntì | 他感冒了，在教室里不停地打喷嚏。 (Anh ấy bị cảm, ở trong lớp hắt hơi liên tục.) | 我打喷嚏了。 (Tôi đang hắt hơi.) | Giữ bản site |
| 777 | HSK8 | 大意 | dàyì | 老师让我们先说说这篇文章的大意是什么。 (Thầy bảo chúng tôi nói trước xem ý chính của bài văn này là gì.) | 我承认我大意了。 (Tôi thừa nhận mình đã bất cẩn.) | Giữ bản site |
| 778 | HSK8 | 抵 | dǐ | 风太大了，他用肩膀抵着门，不让门被吹开。 (Gió lớn quá, anh ấy dùng vai chống vào cửa, không để cửa bị thổi mở.) | 多运动可以提高抵抗力。 (Tập thể dục nhiều hơn có thể tăng cường khả năng miễn dịch của bạn.) | Giữ bản site |
| 779 | HSK8 | 垫 | diàn | 朋友手头紧，我先帮他垫上这笔钱。 (Bạn đang kẹt tiền, tôi ứng trước giúp bạn khoản này.) | 进家门后，我被垫子绊倒了。 (Vào nhà, tôi vấp phải tấm thảm.) | Giữ bản site |
| 780 | HSK8 | 垫子 | diànzi | 她在椅子上放了一个软垫子，坐着很舒服。 (Cô ấy đặt một tấm đệm mềm lên ghế, ngồi rất thoải mái.) | 进家门后，我被垫子绊倒了。 (Vào nhà, tôi vấp phải tấm thảm.) | Giữ bản site |
| 781 | HSK8 | 叼 | diāo | 小狗叼着一根骨头，跑回了自己的窝里。 (Chú chó nhỏ ngậm một khúc xương, chạy về ổ của mình.) | 爸爸嘴里叼着烟斗。 (Bố có một cái tẩu trong miệng.) | Giữ bản site |
| 782 | HSK8 | 叠 | dié | 他把洗好的衣服叠好，整齐地放进柜子里。 (Anh ấy gấp quần áo đã giặt xong, xếp ngay ngắn vào tủ.) | 她把毛巾折叠好再放入柜子里。 (Cô gấp khăn tắm lại và cất vào tủ.) | Giữ bản site |
| 783 | HSK8 | 嘀咕 | dígu | 他一个人坐在角落里，不知道在嘀咕什么。 (Anh ấy ngồi một mình trong góc, không biết đang lẩm bẩm điều gì.) | 我听到汤姆在用法语嘀咕些什么。 (Tôi nghe thấy Tom lẩm bẩm điều gì đó bằng tiếng Pháp.) | Giữ bản site |
| 784 | HSK8 | 帝国 | dìguó | 这个帝国曾经很强大，后来慢慢衰落了。 (Đế quốc này từng rất hùng mạnh, về sau dần dần suy tàn.) | 下午六点半到帝国酒店的大堂找我。 (Gặp tôi ở sảnh khách sạn Imperial lúc 6 giờ 30 chiều.) | Giữ bản site |
| 785 | HSK8 | 丁 | dīng | 我们班新来的老师姓丁，大家都叫他丁老师。 (Thầy giáo mới đến lớp chúng tôi họ Đinh, mọi người đều gọi là thầy Đinh.) | 香烟里有尼古丁。 (Thuốc lá có chứa nicotin.) | Giữ bản site |
| 786 | HSK8 | 叮嘱 | dīngzhǔ | 妈妈再三叮嘱我，出门一定要注意安全。 (Mẹ dặn đi dặn lại tôi rằng ra ngoài nhất định phải chú ý an toàn.) | 真的不敢相信你在吃医生叮嘱不要食用的东西。 (Tôi không thể tin được là bạn đang ăn thứ mà bác sĩ đã nhiều lần nhắc nhở bạn là không nên ăn.) | Giữ bản site |
| 787 | HSK8 | 地毯 | dìtǎn | 客厅里铺着一块红色的地毯，看起来很暖和。 (Trong phòng khách trải một tấm thảm đỏ, trông rất ấm áp.) | 狗在地毯上睡觉。 (Con chó đang ngủ trên chiếu.) | Giữ bản site |
| 788 | HSK8 | 丢脸 | diūliǎn | 他在比赛中输得很惨，觉得特别丢脸。 (Anh ấy thua thảm trong trận đấu, cảm thấy vô cùng mất mặt.) | 他丢脸了。 (Anh ta bị mất mặt.) | Giữ bản site |
| 789 | HSK8 | 抵御 | dǐyù | 冬天多穿点衣服，可以抵御寒冷。 (Mùa đông mặc thêm áo có thể chống lại cái lạnh.) | 他们抵御入侵者，保卫了国家。 (Họ bảo vệ đất nước của họ chống lại quân xâm lược.) | Giữ bản site |
| 790 | HSK8 | 斗 | dòu | 两只公鸡在院子里斗来斗去，谁也不让谁。 (Hai con gà trống đấu qua đấu lại trong sân, con nào cũng không nhường con nào.) | 夜里满天星斗。 (Vào ban đêm bầu trời đầy sao.) | Giữ bản site — câu XuCup dùng 斗 âm dǒu (sao Bắc Đẩu), sai nghĩa của mục dòu (đấu) |
| 791 | HSK8 | 抖 | dǒu | 他抖了抖身上的雪，才走进温暖的屋里。 (Anh ấy giũ tuyết trên người rồi mới bước vào căn phòng ấm áp.) | 他冷得瑟瑟发抖。 (Anh đang run lên vì lạnh.) | Giữ bản site |
| 792 | HSK8 | 兜 | dōu | 他从衣兜里掏出一把钥匙，打开了家门。 (Anh ấy móc từ túi áo ra một chùm chìa khóa, mở cửa nhà.) | 我们开车在城里兜圈。 (Chúng tôi lái xe vòng quanh thành phố.) | Giữ bản site |
| 793 | HSK8 | 堕落 | duòluò | 他交了坏朋友以后，慢慢堕落，成绩也变差了。 (Sau khi kết bạn xấu, anh ấy dần sa ngã, thành tích học tập cũng kém đi.) | 你不要自甘堕落。 (Bạn không cần phải tự đá mình.) | Giữ bản site |
| 794 | HSK8 | 堵塞 | dǔsè | 下大雨以后，这条下水道被泥沙堵塞了。 (Sau trận mưa lớn, cống thoát nước này bị bùn cát làm tắc nghẽn.) | 市中心的交通都堵塞了。 (Giao thông ở trung tâm thành phố đã được sao lưu.) | Giữ bản site |
| 795 | HSK8 | 恶 | è | 故事里的恶人做了很多坏事，最后受到了惩罚。 (Kẻ ác trong câu chuyện làm nhiều việc xấu, cuối cùng bị trừng phạt.) | 我昨天晚上做了一个恶梦。 (Đêm qua tôi gặp ác mộng.) | Giữ bản site |
| 796 | HSK8 | 恩怨 | ēnyuàn | 他们之间的恩怨已经过去多年，早该放下了。 (Ân oán giữa họ đã qua nhiều năm, lẽ ra nên buông bỏ từ lâu.) | 他们之间的恩恩怨怨说不清。 (Những ân huệ và mối hận thù giữa họ thật khó để phân loại.) | Giữ bản site |
| 797 | HSK8 | 发财 | fācái | 他这几年踏实做生意，慢慢地发财了。 (Mấy năm nay anh ấy làm ăn chăm chỉ, dần dần phát tài.) | 新年好！恭喜发财！ (CHÚC MỪNG NĂM MỚI! Chúc bạn phát triển thịnh vượng!) | Giữ bản site |
| 798 | HSK8 | 帆 | fān | 海面上白帆点点，远远看去像一幅画。 (Trên mặt biển những cánh buồm trắng điểm điểm, nhìn từ xa như một bức tranh.) | 我好久没坐帆船了。 (Tôi đã không đi thuyền nhiều năm rồi.) | Giữ bản site |
| 799 | HSK8 | 反驳 | fǎnbó | 他的说法站不住脚，大家纷纷站出来反驳。 (Lập luận của anh ấy không đứng vững, mọi người lần lượt đứng ra phản bác.) | 他们认为，去反驳一个不认识的人有些不礼貌。 (Họ coi việc không đồng ý với một người mà họ không biết rõ là bất lịch sự.) | Giữ bản site |
| 800 | HSK8 | 仿 | fǎng | 孩子们喜欢仿大人的样子，说话也学得有模有样。 (Trẻ con thích bắt chước dáng vẻ người lớn, nói năng cũng học theo rất giống.) | 这个包是仿冒品。 (Chiếc túi này là hàng giả.) | Giữ bản site |
| 801 | HSK8 | 废 | fèi | 这台旧电脑已经废了，修好也要花很多钱。 (Chiếc máy tính cũ này hỏng hẳn rồi, sửa được cũng tốn rất nhiều tiền.) | 核废料很难处理。 (Chất thải hạt nhân rất khó xử lý.) | Giữ bản site |
| 802 | HSK8 | 废墟 | fèixū | 地震过后，村里只剩下一片废墟，让人难过。 (Sau trận động đất, trong làng chỉ còn lại một đống đổ nát, khiến người ta đau lòng.) | 这些废墟年代久远。 (Những tàn tích này là cổ xưa.) | Giữ bản site |
| 803 | HSK8 | 坟 | fén | 清明节那天，他回到老家给祖坟上香。 (Ngày Tết Thanh Minh hôm đó, anh ấy về quê thắp hương cho phần mộ tổ tiên.) | 他们被埋在一座大坟墓里。 (Họ được chôn cất trong một ngôi mộ tập thể.) | Giữ bản site |
| 804 | HSK8 | 分辨 | fēnbiàn | 天黑以后，很难分辨哪条路才是回家的路。 (Trời tối rồi rất khó phân biệt đâu mới là đường về nhà.) | 你知道分辨好坏吗？ (Bạn có biết sự khác biệt giữa tốt và xấu?) | Giữ bản site |
| 805 | HSK8 | 分寸 | fēncun | 他说话很有分寸，从来不会让别人难堪。 (Anh ấy nói năng rất có chừng mực, chưa bao giờ làm người khác khó xử.) | 我自有分寸。 (Tôi biết tôi đang làm gì.) | Giữ bản site |
| 806 | HSK8 | 缝 | fèng | 墙上有一条细缝，雨天的时候会漏水进来。 (Trên tường có một khe nứt nhỏ, ngày mưa nước sẽ rỉ vào.) | 妈妈有一台旧缝纫机。 (Mẹ có một chiếc máy khâu cũ.) | Giữ bản site |
| 807 | HSK8 | 分歧 | fēnqí | 我们在这个问题上有分歧，需要再好好谈谈。 (Chúng tôi có bất đồng về vấn đề này, cần bàn lại cho kỹ.) | 是在这点上我们的意见有分歧。 (Chính ở điểm này mà ý kiến ​​của chúng tôi khác nhau.) | Giữ bản site |
| 808 | HSK8 | 复苏 | fùsū | 休息了几个月以后，镇上的经济慢慢复苏了。 (Sau vài tháng nghỉ ngơi, kinh tế của thị trấn dần hồi phục trở lại.) | 经济在复苏之中。 (Nền kinh tế đang phát triển.) | Giữ bản site |
| 809 | HSK8 | 改邪归正 | gǎixié-guīzhèng | 他出狱以后决心改邪归正，重新做人。 (Sau khi ra tù, anh ấy quyết tâm sửa chữa lỗi lầm, làm lại cuộc đời.) | 改邪归正。 (Thẳng lên.) | Giữ bản site |
| 810 | HSK8 | 干涉 | gānshè | 别国无权干涉我们的内部事务，这是原则问题。 (Nước khác không có quyền can thiệp vào công việc nội bộ của chúng ta, đây là vấn đề nguyên tắc.) | 我没有权利干涉。 (Tôi không có quyền can thiệp.) | Giữ bản site |
| 811 | HSK8 | 搁 | gē | 做菜的时候少搁一点盐，对身体更好。 (Khi nấu ăn nên cho ít muối hơn một chút, tốt hơn cho sức khỏe.) | 稍微搁点儿盐 (cho một ít muối vào) | Giữ bản site |
| 812 | HSK8 | 攻 | gōng | 这支球队只攻不守，比赛看起来特别过瘾。 (Đội bóng này chỉ tấn công không phòng thủ, trận đấu xem đặc biệt đã.) | 这支球队攻无不克。 (Đội này thắng mọi trận đấu.) | Giữ bản site |
| 813 | HSK8 | 功率 | gōnglǜ | 这台机器的功率很大，一小时能做很多活。 (Công suất của chiếc máy này rất lớn, một giờ làm được rất nhiều việc.) | 这种手术的成功率很高。 (Hoạt động này có tỷ lệ thành công cao.) | Giữ bản site |
| 814 | HSK8 | 勾 | gōu | 请在你选好的答案前面，轻轻勾一下。 (Hãy đánh dấu nhẹ một cái trước đáp án bạn đã chọn.) | 人民最恨官商勾结。 (Người dân ghét nhất là sự thông đồng giữa quan chức và doanh nghiệp.) | Giữ bản site |
| 815 | HSK8 | 乖 | guāi | 这个孩子特别乖，在家里从不哭闹。 (Đứa trẻ này đặc biệt ngoan, ở nhà không bao giờ khóc quấy.) | 他的性格有点乖僻。 (Anh ấy hơi lập dị.) | Giữ bản site |
| 816 | HSK8 | 拐杖 | guǎizhàng | 爷爷年纪大了，出门的时候总要拄着拐杖。 (Ông đã lớn tuổi, khi ra ngoài luôn phải chống gậy.) | 一个拄着拐杖的年轻女孩问汤姆他住在哪里。 (Một cô gái trẻ chống nạng hỏi Tom nơi anh sống.) | Giữ bản site |
| 817 | HSK8 | 刮目相看 | guāmù-xiāngkàn | 他进步这么快，真让人刮目相看。 (Anh ấy tiến bộ nhanh như vậy, thật khiến người ta phải nhìn bằng con mắt khác.) | 我对你刮目相看了。 (Tôi đang nhìn thấy bạn trong một ánh sáng mới.) | Giữ bản site |
| 818 | HSK8 | 瓜子 | guāzǐ | 我们一边看电视，一边嗑瓜子聊天。 (Chúng tôi vừa xem ti vi, vừa cắn hạt dưa trò chuyện.) | 你这脑瓜子真聪明！ (Thật là một cái đầu thông minh!) | Giữ bản site |
| 819 | HSK8 | 孤单 | gūdān | 老人一个人住在乡下，常常感到很孤单。 (Ông cụ sống một mình ở nông thôn, thường cảm thấy rất cô đơn.) | 我好孤单。 (Tôi rất cô đơn.) | Giữ bản site |
| 820 | HSK8 | 古董 | gǔdǒng | 他收藏古董多年，一眼就能看出真假。 (Anh ấy sưu tầm đồ cổ nhiều năm, nhìn một cái là biết thật giả.) | 他对古董很有鉴赏力。 (Anh ấy có con mắt quan tâm đến đồ cổ.) | Giữ bản site |
| 821 | HSK8 | 古怪 | gǔguài | 他今天说话古怪得很，好像藏着什么心事。 (Hôm nay anh ấy nói năng rất kỳ quặc, hình như đang giấu tâm sự gì đó.) | 他的性情古怪。 (Anh ấy là một nhân vật kỳ lạ.) | Giữ bản site |
| 822 | HSK8 | 归结 | guījié | 说来说去，他失败的原因可以归结为太着急。 (Nói đi nói lại, nguyên nhân thất bại của anh ấy có thể quy về việc quá nóng vội.) | 他的成功要归结于他的辛勤工作和好运气。 (Anh ấy có được thành công nhờ làm việc chăm chỉ và may mắn.) | Giữ bản site |
| 823 | HSK8 | 国防 | guófáng | 国防建设对每个国家来说都非常重要。 (Xây dựng quốc phòng đối với mỗi quốc gia đều vô cùng quan trọng.) | 他有一件国防绿的军装。 (Anh ấy có bộ đồng phục màu xanh quân đội.) | Giữ bản site |
| 824 | HSK8 | 固有 | gùyǒu | 每种文化都有它固有的特点，值得尊重。 (Mỗi nền văn hóa đều có đặc điểm vốn có của nó, đáng được tôn trọng.) | 人固有一死。 (Con người là phàm nhân.) | Giữ bản site |
| 825 | HSK8 | 固执 | gùzhi | 他性格固执，认准的事情谁劝都不听。 (Anh ấy tính cố chấp, việc đã quyết thì ai khuyên cũng không nghe.) | 汤姆挺固执的不是吗？ (Tom đang khá cố chấp phải không?) | Giữ bản site |
| 826 | HSK8 | 函 | hán | 公司给他发了一封函，通知他下周来面试。 (Công ty gửi cho anh ấy một công văn, thông báo tuần sau đến phỏng vấn.) | 她在读函授大学。 (Cô ấy đang học tại một trường đại học tương ứng.) | Giữ bản site |
| 827 | HSK8 | 含糊 | hánhu | 他回答得很含糊，大家都没听明白。 (Anh ấy trả lời rất mơ hồ, mọi người đều không hiểu rõ.) | 你说话含糊不清。 (Bạn đang lảm nhảm.) | Giữ bản site |
| 828 | HSK8 | 哼 | hēng | 他哼了一声，转身就走出了房间。 (Anh ấy khịt mũi một tiếng rồi quay người bước ra khỏi phòng.) | 他气哼哼地走了。 (Anh ta lao đi trong cơn giận dữ.) | Giữ bản site |
| 829 | HSK8 | 哄 | hǒng | 孩子哭个不停，妈妈抱着他轻轻地哄。 (Đứa trẻ khóc không ngừng, mẹ bế nó nhẹ nhàng dỗ dành.) | 哄堂大笑。 (Toàn bộ khán giả vỡ òa trong tiếng cười.) | Giữ bản site |
| 830 | HSK8 | 哄堂大笑 | hōngtáng-dàxiào | 他讲的笑话太有趣了，逗得大家哄堂大笑。 (Câu chuyện cười anh ấy kể thú vị quá, khiến mọi người cười ồ lên.) | 哄堂大笑。 (Toàn bộ khán giả vỡ òa trong tiếng cười.) | Giữ bản site |
| 831 | HSK8 | 喉咙 | hóulóng | 他感冒以后喉咙很疼，连话都说不出来。 (Sau khi bị cảm, cổ họng anh ấy rất đau, đến nói cũng không nói nổi.) | 我喉咙很干。 (Cổ họng tôi khô khốc.) | Giữ bản site |
| 832 | HSK8 | 慌张 | huāngzhāng | 考试快开始了，他慌张地找自己的准考证。 (Kỳ thi sắp bắt đầu, anh ấy hoảng hốt tìm thẻ dự thi của mình.) | 汤姆在表达自己的意见的时候总是很慌张。 (Tom chưa bao giờ cảm thấy thoải mái khi bày tỏ quan điểm của mình.) | Giữ bản site |
| 833 | HSK8 | 唤醒 | huànxǐng | 清晨的鸟叫声，唤醒了沉睡中的整个村子。 (Tiếng chim hót buổi sớm đã đánh thức cả ngôi làng đang say ngủ.) | 被闹钟唤醒没有被鸟唤醒的好。 (Sẽ tốt hơn nhiều nếu được chim đánh thức hơn là bị báo động.) | Giữ bản site |
| 834 | HSK8 | 华人 | huárén | 这条街上住着很多华人，开了不少中餐馆。 (Trên con phố này có nhiều người Hoa sinh sống, mở không ít nhà hàng Trung Hoa.) | 我是华人。 (Tôi là người Trung Quốc.) | Giữ bản site |
| 835 | HSK8 | 呼救 | hūjiù | 他掉进河里以后，拼命大声呼救。 (Sau khi rơi xuống sông, anh ấy liều mình kêu cứu thật to.) | 有人呼救。 (Có người kêu cứu.) | Giữ bản site |
| 836 | HSK8 | 昏迷 | hūnmí | 老人突然昏迷过去，家人赶紧把他送到医院。 (Ông cụ bỗng nhiên hôn mê bất tỉnh, người nhà vội đưa ông đến bệnh viện.) | 汤姆正昏迷不醒。 (Tom bị lạnh rồi.) | Giữ bản site |
| 837 | HSK8 | 忌 | jì | 他生病以后很忌口，辣的东西一点都不吃。 (Sau khi ốm, anh ấy rất kiêng ăn, đồ cay một chút cũng không ăn.) | 今天是我父亲的忌日。 (Hôm nay là ngày giỗ của bố tôi.) | Giữ bản site |
| 838 | HSK8 | 僵 | jiāng | 听到这个消息，他整个人一下子僵住了。 (Nghe tin này, cả người anh ấy bỗng cứng đờ lại.) | 我们必须设法打破这个僵局。 (Chúng ta phải cố gắng phá vỡ thế bế tắc.) | Giữ bản site |
| 839 | HSK8 | 姜 | jiāng | 妈妈煮汤的时候，总喜欢放几片姜。 (Khi nấu canh, mẹ luôn thích cho vài lát gừng.) | 我想尝尝姜葱炒虾。 (Tôi muốn thử món tôm hành gừng.) | Giữ bản site |
| 840 | HSK8 | 奖项 | jiǎngxiàng | 他在这次比赛中获得了三个重要奖项。 (Anh ấy giành được ba giải thưởng quan trọng trong cuộc thi lần này.) | 奖项是不会授给她的。 (Giải thưởng sẽ không được trao cho cô ấy.) | Giữ bản site |
| 841 | HSK8 | 嚼 | jiáo | 他慢慢嚼着口香糖，眼睛看着窗外发呆。 (Anh ấy chậm rãi nhai kẹo cao su, mắt nhìn ra ngoài cửa sổ ngẩn ngơ.) | 我嚼口香糖。 (Tôi nhai kẹo cao su.) | Giữ bản site |
| 842 | HSK8 | 假装 | jiǎzhuāng | 他明明很难过，却还要假装什么事都没有。 (Anh ấy rõ ràng rất buồn, vậy mà vẫn phải giả vờ như không có chuyện gì.) | 假装你是我。 (Giả vờ như bạn là tôi.) | Giữ bản site |
| 843 | HSK8 | 嫉妒 | jídù | 看到朋友取得好成绩，她心里有点嫉妒。 (Thấy bạn đạt thành tích tốt, trong lòng cô ấy có chút ghen tị.) | 我嫉妒她。 (Tôi ghen tị với cô ấy.) | Giữ bản site |
| 844 | HSK8 | 截 | jié | 他拿起剪刀，把这根绳子截成了两段。 (Anh ấy cầm kéo lên, cắt sợi dây này thành hai đoạn.) | 他们俩的性格截然不同。 (Hai người họ có tính cách hoàn toàn khác nhau.) | Giữ bản site |
| 845 | HSK8 | 寂静 | jìjìng | 半夜的村子一片寂静，只能听见狗叫声。 (Ngôi làng nửa đêm yên tĩnh hoàn toàn, chỉ nghe thấy tiếng chó sủa.) | 一片寂静无声。 (Có sự im lặng hoàn toàn.) | Giữ bản site |
| 846 | HSK8 | 尽 | jǐn | 有事要尽早说，别拖到最后一刻才开口。 (Có việc thì nên nói càng sớm càng tốt, đừng kéo đến phút cuối mới mở lời.) | 我会尽可能早点来。 (Tôi sẽ đến sớm nhất có thể.) | Giữ bản site |
| 847 | HSK8 | 就绪 | jiùxù | 一切准备就绪，我们明天一早就出发。 (Mọi thứ đã chuẩn bị sẵn sàng, sáng sớm mai chúng ta xuất phát.) | 一切就绪。 (Mọi thứ đã sẵn sàng.) | Giữ bản site |
| 848 | HSK8 | 圈 | juān | 傍晚的时候，农民把羊都圈进了羊圈里。 (Lúc chập tối, người nông dân nhốt hết dê vào chuồng.) | 请在这里画一个圆圈。 (Hãy vẽ một vòng tròn ở đây.) | Giữ bản site |
| 849 | HSK8 | 捐献 | juānxiàn | 他把自己的藏书都捐献给了村里的小学。 (Anh ấy hiến tặng toàn bộ sách sưu tầm của mình cho trường tiểu học trong làng.) | 有些人会捐献精子。 (Một số người hiến tinh trùng.) | Giữ bản site |
| 850 | HSK8 | 倔 | juè | 这孩子脾气特别倔，认准的事谁也劝不动。 (Đứa trẻ này tính đặc biệt bướng, việc đã quyết thì ai cũng không khuyên nổi.) | 这孩子脾气很倔犟。 (Đứa trẻ này rất bướng bỉnh.) | Giữ bản site |
| 851 | HSK8 | 君子 | jūnzǐ | 他为人正直大方，是一位真正的君子。 (Anh ấy là người chính trực, rộng rãi, là một quân tử thực sự.) | 妈妈养的君子兰开花了。 (Âm vật của mẹ đã nở hoa.) | Giữ bản site |
| 852 | HSK8 | 局势 | júshì | 经过几天的努力，当地的局势已经稳定下来。 (Sau vài ngày nỗ lực, tình hình địa phương đã ổn định trở lại.) | 那场事故让我们陷入了不寻常的局势。 (Chúng tôi đã phải đối mặt với một tình huống bất thường vì vụ tai nạn.) | Giữ bản site |
| 853 | HSK8 | 开销 | kāixiāo | 他每个月的开销很大，工资总是不够花。 (Chi tiêu mỗi tháng của anh ấy rất lớn, lương lúc nào cũng không đủ tiêu.) | 我的车子的开销比你的要多。 (Xe của tôi đắt hơn xe của bạn.) | Giữ bản site |
| 854 | HSK8 | 抗拒 | kàngjù | 面对美食的诱惑，他实在无法抗拒。 (Trước sự cám dỗ của món ngon, anh ấy thật sự không cưỡng lại được.) | 你令人难以抗拒。 (Bạn thật không thể cưỡng lại được.) | Giữ bản site |
| 855 | HSK8 | 慷慨 | kāngkǎi | 他为人慷慨，朋友有困难时总愿意帮忙。 (Anh ấy là người hào phóng, bạn bè gặp khó khăn lúc nào cũng sẵn lòng giúp đỡ.) | 大自然很慷慨。 (Mẹ thiên nhiên thật hào phóng.) | Giữ bản site |
| 856 | HSK8 | 壳 | ké | 他轻轻敲开蛋壳，把鸡蛋倒进碗里。 (Anh ấy nhẹ nhàng đập vỡ vỏ trứng, đổ trứng vào bát.) | 房价太高，很多年轻人是无壳蜗牛。 (Nhà ở đắt đến mức nhiều người trẻ không thể mua được nhà.) | Giữ bản site |
| 857 | HSK8 | 啃 | kěn | 小狗趴在院子里，专心地啃着一根骨头。 (Chú chó nhỏ nằm trong sân, chăm chú gặm một khúc xương.) | 他三十岁了，还是啃老族。 (Anh ấy đã ba mươi rồi và vẫn sống nhờ vào bố mẹ.) | Giữ bản site |
| 858 | HSK8 | 孔 | kǒng | 这块木板上有一个小孔，可以穿绳子。 (Trên tấm ván này có một lỗ nhỏ, có thể luồn dây qua.) | 台南的孔庙很有名。 (Ngôi chùa Nho giáo ở Đài Nam rất nổi tiếng.) | Giữ bản site |
| 859 | HSK8 | 控告 | kònggào | 他决定去法院控告那家卖假货的商店。 (Anh ấy quyết định ra tòa kiện cửa hàng bán hàng giả kia.) | 我要控告你。 (Tôi sẽ kiện bạn.) | Giữ bản site |
| 860 | HSK8 | 恐慌 | kǒnghuāng | 听到警报以后，大家不要恐慌，排队离开。 (Sau khi nghe còi báo động, mọi người đừng hoảng loạn, hãy xếp hàng rời đi.) | 不要恐慌！ (Không hoảng loạn!) | Giữ bản site |
| 861 | HSK8 | 抠 | kōu | 他用手指慢慢抠掉了墙上的旧贴纸。 (Anh ấy dùng ngón tay từ từ cậy bỏ miếng dán cũ trên tường.) | 他花钱总是抠抠嗖嗖的。 (Anh ta luôn keo kiệt với tiền bạc.) | Giữ bản site |
| 862 | HSK8 | 口罩 | kǒuzhào | 冬天出门的时候，她总会戴上口罩防冷风。 (Mùa đông khi ra ngoài, cô ấy luôn đeo khẩu trang để tránh gió lạnh.) | 我的口罩在哪？ (Mặt nạ của tôi đâu?) | Giữ bản site |
| 863 | HSK8 | 旷课 | kuàngkè | 他这个学期经常旷课，老师已经找他谈过话。 (Học kỳ này anh ấy thường xuyên trốn học, thầy đã gọi lên nói chuyện rồi.) | 汤姆总是旷课。 (Tom luôn vắng mặt.) | Giữ bản site |
| 864 | HSK8 | 库存 | kùcún | 仓库里的库存已经不多，需要尽快补货。 (Hàng tồn trong kho đã không còn nhiều, cần nhập thêm hàng sớm.) | 我们现在缺乏库存。 (Hiện tại chúng tôi đã hết hàng.) | Giữ bản site |
| 865 | HSK8 | 困惑 | kùnhuò | 这个问题让他困惑了很久，一直想不明白。 (Vấn đề này khiến anh ấy bối rối rất lâu, mãi không nghĩ thông được.) | 我真的很困惑。 (Tôi thực sự bối rối.) | Giữ bản site |
| 866 | HSK8 | 哭泣 | kūqì | 听到奶奶去世的消息，她忍不住哭泣起来。 (Nghe tin bà nội qua đời, cô ấy không kìm được mà khóc òa lên.) | 她开始哭泣。 (Cô ấy bắt đầu khóc.) | Giữ bản site |
| 867 | HSK8 | 喇叭 | lǎba | 司机按了一下喇叭，提醒前面的行人让路。 (Tài xế bấm còi một tiếng, nhắc người đi bộ phía trước nhường đường.) | 我妈妈年轻时穿喇叭裤。 (Mẹ tôi mặc quần ống loe khi còn trẻ.) | Giữ bản site |
| 868 | HSK8 | 捞 | lāo | 他弯下腰，把掉进水里的钥匙捞了上来。 (Anh ấy cúi người xuống, vớt chùm chìa khóa rơi xuống nước lên.) | 这好比大海捞针。 (Nó giống như tìm kim đáy bể.) | Giữ bản site |
| 869 | HSK8 | 劳驾 | láojià | 劳驾，请让一下，我要从这里过去。 (Xin phiền anh nhường đường một chút, tôi cần đi qua chỗ này.) | 劳驾，来一杯咖啡。 (Tôi có thể uống một tách cà phê được không?) | Giữ bản site |
| 870 | HSK8 | 炼 | liàn | 工人们正在车间里炼钢，干得热火朝天。 (Các công nhân đang luyện thép trong xưởng, làm việc hăng say khí thế.) | 和尚们在山上修炼。 (Các nhà sư tập luyện trên núi.) | Giữ bản site |
| 871 | HSK8 | 利率 | lìlǜ | 银行下调了利率，贷款的人比以前多了。 (Ngân hàng hạ lãi suất nên người vay tiền nhiều hơn trước.) | 利率和通货膨胀很高。 (Lãi suất và lạm phát ở mức cao.) | Giữ bản site |
| 872 | HSK8 | 吝啬 | lìnsè | 他对朋友一点也不吝啬，有好吃的都分给大家。 (Anh ấy với bạn bè chẳng keo kiệt chút nào, có đồ ngon đều chia cho mọi người.) | 他非常吝啬。 (Anh ấy rất keo kiệt với tiền của mình.) | Giữ bản site |
| 873 | HSK8 | 垄断 | lǒngduàn | 这家大公司想垄断市场，引起了很多不满。 (Công ty lớn này muốn độc quyền thị trường, gây ra nhiều bất bình.) | 他反对垄断。 (Ông phản đối sự độc quyền.) | Giữ bản site |
| 874 | HSK8 | 码 | mǎ | 他把院子里的砖一块一块码得整整齐齐。 (Anh ấy xếp những viên gạch trong sân từng viên một ngay ngắn gọn gàng.) | 今晚的戏码是什么？ (Tối nay có vở kịch gì thế?) | Giữ bản site |
| 875 | HSK8 | 埋葬 | máizàng | 村民们把老人埋葬在村边的小山上。 (Dân làng an táng ông cụ trên ngọn đồi nhỏ bên làng.) | 她埋葬了她的独生子。 (Bà đã chôn đứa con trai duy nhất của mình.) | Giữ bản site |
| 876 | HSK8 | 埋怨 | mányuàn | 他总是埋怨工作太累，却从不试着改变。 (Anh ấy luôn than phiền công việc quá mệt, nhưng chẳng bao giờ thử thay đổi.) | 别再埋怨了。 (Đừng than vãn nữa.) | Giữ bản site |
| 877 | HSK8 | 冒犯 | màofàn | 他说话不注意分寸，无意中冒犯了客人。 (Anh ấy nói năng không chú ý chừng mực, vô tình xúc phạm khách.) | 我冒犯到你了。 (Tôi đã xúc phạm bạn.) | Giữ bản site |
| 878 | HSK8 | 庙 | miào | 村口有一座小庙，每逢节日香火都很旺。 (Ở đầu làng có một ngôi miếu nhỏ, mỗi dịp lễ tết hương khói đều rất tấp nập.) | 我们去夫子庙玩吧。 (Chúng ta hãy đến đền Khổng Tử.) | Giữ bản site |
| 879 | HSK8 | 命 | mìng | 医生及时赶到，救回了病人的一条命。 (Bác sĩ đến kịp lúc, cứu lại được một mạng người cho bệnh nhân.) | 水果里有很多维他命。 (Trái cây có rất nhiều vitamin.) | Giữ bản site |
| 880 | HSK8 | 明智 | míngzhì | 遇到这种事，先冷静下来才是最明智的做法。 (Gặp chuyện như vậy, bình tĩnh lại trước mới là cách làm khôn ngoan nhất.) | 你应该更明智一点。 (Bạn nên hợp lý hơn.) | Giữ bản site |
| 881 | HSK8 | 墨 | mò | 他写字的时候不小心，把墨洒在了桌子上。 (Khi viết chữ anh ấy bất cẩn làm đổ mực lên bàn.) | 我姐姐住在墨尔本。 (Chị gái tôi sống ở Melbourne.) | Giữ bản site |
| 882 | HSK8 | 抹 | mǒ | 妈妈把药膏轻轻抹在孩子的伤口上。 (Mẹ nhẹ nhàng bôi thuốc mỡ lên vết thương của con.) | 用抹布擦一下桌子。 (Lau bàn bằng giẻ.) | Giữ bản site |
| 883 | HSK8 | 幕 | mù | 电影开始之前，舞台上的红幕慢慢拉开了。 (Trước khi phim bắt đầu, tấm màn đỏ trên sân khấu từ từ kéo mở.) | 手机萤幕坏了。 (Màn hình điện thoại bị vỡ.) | Giữ bản site |
| 884 | HSK8 | 幕后 | mùhòu | 他一直在幕后默默工作，从不抢别人的功劳。 (Anh ấy luôn lặng lẽ làm việc ở hậu trường, không bao giờ tranh công của người khác.) | 幕后操纵者是谁？ (Ai đứng đằng sau nó?) | Giữ bản site |
| 885 | HSK8 | 乃 | nǎi | 这件事乃大家商量以后共同决定的结果。 (Việc này là kết quả do mọi người bàn bạc rồi cùng quyết định.) | 母亲节我送妈妈康乃馨。 (Vào Ngày của Mẹ tôi tặng mẹ hoa cẩm chướng.) | Giữ bản site |
| 886 | HSK8 | 南辕北辙 | nányuán-běizhé | 方法不对，再努力也只会南辕北辙。 (Phương pháp không đúng, cố gắng nữa cũng chỉ đi ngược mục tiêu mà thôi.) | 你要南辕北辙了。 (Bạn đang không đi đúng hướng.) | Giữ bản site |
| 887 | HSK8 | 娘 | niáng | 隔壁大娘做的饭特别好吃，孩子们都爱吃。 (Bà hàng xóm nấu ăn đặc biệt ngon, bọn trẻ đều thích ăn.) | 在老电影里，新娘都坐花轿。 (Trong các bộ phim xưa, cô dâu luôn ngồi trên ghế kiệu dành cho cô dâu.) | Giữ bản site |
| 888 | HSK8 | 尿 | niào | 宝宝昨晚尿床了，妈妈一早就起来换床单。 (Đêm qua bé tè dầm, sáng sớm mẹ đã dậy thay ga giường.) | 他得了尿毒症，要做透析。 (Anh ấy bị bệnh urê huyết và cần phải chạy thận nhân tạo.) | Giữ bản site |
| 889 | HSK8 | 捏 | niē | 他用彩泥捏了一个小人，送给妹妹玩。 (Anh ấy dùng đất nặn màu nặn một hình người nhỏ, tặng em gái chơi.) | 孩子们在看老人捏面人儿。 (Các em nhỏ đang quan sát ông già tạo hình các nhân vật bằng bột.) | Giữ bản site |
| 890 | HSK8 | 匿名 | nìmíng | 他用匿名的方式，给学校捐了一大笔钱。 (Anh ấy quyên tặng cho trường một khoản tiền lớn theo cách ẩn danh.) | 你想保持匿名身份。 (Bạn muốn ẩn danh.) | Giữ bản site |
| 891 | HSK8 | 宁愿 | nìngyuàn | 他宁愿自己多走几步，也不愿意麻烦别人。 (Anh ấy thà tự đi thêm vài bước, cũng không muốn làm phiền người khác.) | 他宁愿不吃这个。 (Anh ấy không muốn ăn thứ đó.) | Giữ bản site |
| 892 | HSK8 | 攀 | pān | 他攀着绳子，一点一点爬上了高高的墙头。 (Anh ấy bám vào sợi dây, từng chút một leo lên đỉnh tường cao.) | 他在火车上和我攀谈起来。 (Trên tàu, anh ấy bắt chuyện với tôi.) | Giữ bản site |
| 893 | HSK8 | 抛弃 | pāoqì | 搬家以后，他抛弃了很多用不上的旧东西。 (Sau khi chuyển nhà, anh ấy bỏ đi nhiều đồ cũ không dùng đến.) | 她抛弃了她的孩子。 (Cô ấy đã bỏ rơi những đứa con của mình.) | Giữ bản site |
| 894 | HSK8 | 脾 | pí | 医生说这味中药对脾胃很有好处。 (Bác sĩ nói vị thuốc bắc này rất tốt cho tỳ vị.) | 这孩子脾气很倔犟。 (Đứa trẻ này rất bướng bỉnh.) | Giữ bản site |
| 895 | HSK8 | 劈 | pī | 他拿起斧子，一下就把木头劈成了两半。 (Anh ấy cầm rìu lên, một nhát là chẻ khúc gỗ thành hai nửa.) | 他劈头就问我为什么迟到。 (Điều đầu tiên anh ấy làm là hỏi tôi tại sao tôi đến muộn.) | Giữ bản site |
| 896 | HSK8 | 偏 | piān | 他把头偏向一边，仔细听着窗外的声音。 (Anh ấy nghiêng đầu sang một bên, chăm chú lắng nghe tiếng động ngoài cửa sổ.) | 他的想法太偏执了。 (Suy nghĩ của anh ấy quá phiến diện.) | Giữ bản site |
| 897 | HSK8 | 撇 | piě | 写人字的时候，要先写一撇，再写一捺。 (Khi viết chữ nhân, phải viết một nét phẩy trước, rồi mới viết một nét mác.) | 我弟弟是左撇子。 (Em trai tôi thuận tay trái.) | Giữ bản site |
| 898 | HSK8 | 屁股 | pìgu | 他累得一屁股坐在沙发上，半天不想动。 (Anh ấy mệt đến mức ngồi phịch xuống ghế sofa, nửa ngày không muốn nhúc nhích.) | 它像婴儿的屁股一样光滑。 (Nó mịn như mông em bé.) | Giữ bản site |
| 899 | HSK8 | 屏蔽 | píngbì | 他把手机里讨厌的广告信息都屏蔽了。 (Anh ấy chặn hết những tin nhắn quảng cáo đáng ghét trong điện thoại.) | 但愿我能找到在我的博客上屏蔽评论的办法。 (Tôi ước gì tôi có thể tìm ra cách tắt bình luận trên blog của mình.) | Giữ bản site |
| 900 | HSK8 | 拼命 | pīnmìng | 为了赶上最后一班车，他拼命地往车站跑。 (Để kịp chuyến xe cuối cùng, anh ấy liều mình chạy về phía bến xe.) | 拼命地跑 (Hãy chạy như thể mạng sống của bạn phụ thuộc vào nó.) | Giữ bản site |
| 901 | HSK8 | 抢劫 | qiǎngjié | 昨晚有人在小巷里抢劫，被警察当场抓住。 (Tối qua có kẻ cướp giật trong ngõ nhỏ, bị cảnh sát bắt ngay tại chỗ.) | 我被抢劫了。 (Tôi đã bị cướp.) | Giữ bản site |
| 902 | HSK8 | 乞丐 | qǐgài | 街角坐着一个乞丐，面前放着一个空碗。 (Ở góc phố có một người ăn xin ngồi, trước mặt đặt một cái bát trống.) | 我不是乞丐。 (Tôi không phải là người ăn xin.) | Giữ bản site |
| 903 | HSK8 | 奇妙 | qímiào | 这次海边旅行，是一次非常奇妙的体验。 (Chuyến du lịch biển lần này là một trải nghiệm vô cùng kỳ diệu.) | 这是奇妙的体验。 (Đó là một trải nghiệm tuyệt vời.) | Giữ bản site |
| 904 | HSK8 | 弃权 | qìquán | 在这次表决中，他想了很久，最后选择了弃权。 (Trong lần biểu quyết này, anh ấy suy nghĩ rất lâu, cuối cùng chọn bỏ phiếu trắng.) | 汤姆投票弃权。 (Tom đã bỏ phiếu trắng.) | Giữ bản site |
| 905 | HSK8 | 企图 | qǐtú | 他企图蒙混过关，结果还是被老师发现了。 (Anh ấy mưu toan qua mặt cho xong, kết quả vẫn bị thầy phát hiện.) | 她企图自杀。 (Cô ấy đã cố gắng tự tử.) | Giữ bản site |
| 906 | HSK8 | 囚犯 | qiúfàn | 看守把囚犯带回监狱，路上一直很小心。 (Người cai ngục đưa tù nhân trở lại nhà tù, dọc đường luôn rất cẩn thận.) | 你是囚犯。 (Bạn là tù nhân.) | Giữ bản site |
| 907 | HSK8 | 拳 | quán | 他一拳打在沙袋上，沙袋晃了好几下。 (Anh ấy đấm một cú vào bao cát, bao cát lắc lư mấy cái.) | 他的拳法很快。 (Những cú đấm của anh ấy rất nhanh.) | Giữ bản site |
| 908 | HSK8 | 全力以赴 | quánlìyǐfù | 为了按时完成任务，整个小组都在全力以赴。 (Để hoàn thành nhiệm vụ đúng hạn, cả nhóm đều đang dốc toàn lực.) | 他在全力以赴。 (Anh ấy đang làm hết sức mình.) | Giữ bản site |
| 909 | HSK8 | 仁慈 | réncí | 他对老人非常仁慈，村里人都很敬重他。 (Anh ấy rất nhân từ với người già, người trong làng đều kính trọng anh ấy.) | 无需仁慈。 (Không cần phải nhẹ nhàng đâu.) | Giữ bản site |
| 910 | HSK8 | 人权 | rénquán | 每个人都应该享有基本的人权和自由。 (Mỗi người đều nên được hưởng nhân quyền và tự do cơ bản.) | 它是基本人权。 (Đó là một quyền cơ bản của con người.) | Giữ bản site |
| 911 | HSK8 | 人造 | rénzào | 这种人造皮革看起来跟真皮差不多。 (Loại da nhân tạo này trông gần giống như da thật.) | 她用人造黄油代替了黄油。 (Cô ấy thay thế bơ thực vật bằng bơ.) | Giữ bản site |
| 912 | HSK8 | 容纳 | róngnà | 这个礼堂很大，能容纳两百多人开会。 (Hội trường này rất lớn, có thể chứa hơn hai trăm người họp.) | 这个房间能容纳200人。 (Phòng có sức chứa 200 người.) | Giữ bản site |
| 913 | HSK8 | 容忍 | róngrěn | 我们不能容忍这种乱扔垃圾的不文明行为。 (Chúng ta không thể dung thứ cho hành vi thiếu văn minh vứt rác bừa bãi như vậy.) | 那女士容忍了那男人。 (Người phụ nữ đã chịu đựng được người đàn ông.) | Giữ bản site |
| 914 | HSK8 | 入侵 | rùqīn | 敌军半夜入侵村子，村民们赶紧躲了起来。 (Nửa đêm quân địch xâm nhập làng, dân làng vội trốn đi.) | 他们抵御入侵者，保卫了国家。 (Họ bảo vệ đất nước của họ chống lại quân xâm lược.) | Giữ bản site |
| 915 | HSK8 | 撒谎 | sāhuǎng | 他因为撒谎骗人，被妈妈狠狠批评了一顿。 (Anh ấy vì nói dối lừa người nên bị mẹ phê bình một trận gay gắt.) | 你在撒谎。 (Bạn đang nói dối.) | Giữ bản site |
| 916 | HSK8 | 嗓音 | sǎngyīn | 她的嗓音又清亮又好听，唱歌特别动人。 (Giọng của cô ấy vừa trong trẻo vừa hay, hát đặc biệt cảm động.) | 你有副好嗓音。 (Bạn có một giọng hát tuyệt vời.) | Giữ bản site |
| 917 | HSK8 | 傻瓜 | shǎguā | 你别把大家都当傻瓜，这件事谁都看得明白。 (Bạn đừng coi mọi người đều là kẻ ngốc, việc này ai cũng nhìn rõ cả.) | 别把人家当傻瓜。 (Đừng biến tôi thành kẻ ngốc.) | Giữ bản site |
| 918 | HSK8 | 尚 | shàng | 时间尚早，我们不用着急，慢慢准备就行。 (Thời gian vẫn còn sớm, chúng ta không cần vội, cứ từ từ chuẩn bị là được.) | 和尚拿着一个钵。 (Nhà sư đang cầm một chiếc bát khất thực.) | Giữ bản site |
| 919 | HSK8 | 上映 | shàngyìng | 这部大家期待的新电影，明天就要正式上映了。 (Bộ phim mới mà mọi người mong đợi này ngày mai sẽ chính thức công chiếu.) | 汤姆检查电视时间表，看看在上映什么。 (Tom kiểm tra lịch truyền hình để xem có gì.) | Giữ bản site |
| 920 | HSK8 | 伸手 | shēnshǒu | 他伸手去拿架子最上层的书，差点摔倒。 (Anh ấy đưa tay lấy cuốn sách ở tầng trên cùng của giá, suýt nữa thì ngã.) | 成功好像伸手可及。 (Thành công dường như trong tầm tay.) | Giữ bản site |
| 921 | HSK8 | 尸体 | shītǐ | 警察在河边发现了一具尸体，正在调查身份。 (Cảnh sát phát hiện một thi thể bên bờ sông, đang điều tra danh tính.) | 每个人都可能变成尸体。 (Mỗi người đàn ông đều là một xác chết tiềm năng.) | Giữ bản site |
| 922 | HSK8 | 时装 | shízhuāng | 她从小就喜欢时装，长大后当了一名设计师。 (Cô ấy thích thời trang từ nhỏ, lớn lên trở thành một nhà thiết kế.) | 时装不是我的天分。 (Thời trang không phải là chuyên môn của tôi) | Giữ bản site |
| 923 | HSK8 | 手掌 | shǒuzhǎng | 他把手掌平放在桌子上，让医生检查伤口。 (Anh ấy đặt phẳng lòng bàn tay lên bàn, để bác sĩ kiểm tra vết thương.) | 我不用曲膝就能把我的手掌放到地上。 (Tôi có thể đặt lòng bàn tay xuống sàn mà không cần cong đầu gối.) | Giữ bản site |
| 924 | HSK8 | 撕 | sī | 他一生气，就把那封信撕成了两半。 (Anh ấy vừa nổi giận là xé lá thư đó thành hai nửa.) | 布被哧哧地撕开了。 (Tấm vải bị xé rách phát ra âm thanh.) | Giữ bản site |
| 925 | HSK8 | 似曾相识 | sìcéng-xiāngshí | 第一次来到这个小镇，他却觉得似曾相识。 (Lần đầu đến thị trấn nhỏ này, anh ấy lại cảm thấy như đã từng quen biết.) | 这看起来似曾相识。 (Nó có vẻ rất quen thuộc.) | Giữ bản site |
| 926 | HSK8 | 思索 | sīsuǒ | 他低着头思索了很久，终于想出了好办法。 (Anh ấy cúi đầu suy ngẫm rất lâu, cuối cùng nghĩ ra được cách hay.) | 汤姆不加思索地行动。 (Tom hành động mà không cần suy nghĩ.) | Giữ bản site |
| 927 | HSK8 | 思绪 | sīxù | 她望着窗外的雨，思绪慢慢飘到了远方。 (Cô ấy nhìn cơn mưa ngoài cửa sổ, dòng suy nghĩ từ từ trôi về phương xa.) | 工作之前先收好思绪。 (Thu thập suy nghĩ của bạn trước khi bạn bắt đầu công việc của bạn.) | Giữ bản site |
| 928 | HSK8 | 搜查 | sōuchá | 警察正在仔细搜查这间房子，寻找重要证据。 (Cảnh sát đang cẩn thận lục soát căn nhà này, tìm kiếm chứng cứ quan trọng.) | 搜查房子。 (Tìm kiếm ngôi nhà.) | Giữ bản site |
| 929 | HSK8 | 俗 | sú | 这种花花绿绿的打扮太俗了，换一件素的吧。 (Cách ăn mặc lòe loẹt thế này quê quá, đổi sang bộ giản dị đi.) | 这个广告俗不可耐。 (Quảng cáo này thô tục đến mức không thể chịu nổi.) | Giữ bản site |
| 930 | HSK8 | 所谓 | suǒwèi | 这就是所谓的缘分吧，两个人又见面了。 (Đây chính là cái gọi là duyên phận nhỉ, hai người lại gặp nhau rồi.) | 我无所谓。 (Tôi không quan tâm.) | Giữ bản site |
| 931 | HSK8 | 坛 | tán | 节日那天，村民们在村口的祭坛前献上鲜花。 (Ngày lễ hôm đó, dân làng dâng hoa tươi trước bàn thờ ở đầu làng.) | 坛子里有很多酒。 (Có rất nhiều rượu trong bình.) | Giữ bản site |
| 932 | HSK8 | 探 | tàn | 他探出头来，朝窗外看了看雨停了没有。 (Anh ấy thò đầu ra, nhìn ra ngoài cửa sổ xem mưa đã tạnh chưa.) | 做研究要探源究本。 (Nghiên cứu có nghĩa là đi đến gốc rễ của sự việc.) | Giữ bản site |
| 933 | HSK8 | 堂 | táng | 老家的堂屋很大，过年时全家人都聚在那里。 (Phòng chính của nhà cũ rất lớn, dịp Tết cả nhà đều tụ họp ở đó.) | 新教室又大又亮堂。 (Lớp học mới rộng và sáng sủa.) | Giữ bản site |
| 934 | HSK8 | 叹气 | tànqì | 他一边叹气，一边摇头，说这事太难办了。 (Anh ấy vừa thở dài vừa lắc đầu, nói việc này khó làm quá.) | 别整天唉声叹气的。 (Đừng rên rỉ và rên rỉ cả ngày.) | Giữ bản site |
| 935 | HSK8 | 挑剔 | tiāoti | 她对吃的东西很挑剔，太辣太咸都不吃。 (Cô ấy rất kén chọn đồ ăn, quá cay quá mặn đều không ăn.) | 汤姆相当挑剔。 (Tom khá cầu kỳ.) | Giữ bản site |
| 936 | HSK8 | 同胞 | tóngbāo | 海外同胞一直很关心家乡的发展和变化。 (Đồng bào ở nước ngoài luôn quan tâm đến sự phát triển và thay đổi của quê hương.) | 我们是同胞。 (Chúng ta là đồng hương.) | Giữ bản site |
| 937 | HSK8 | 偷懒 | tōulǎn | 他上班的时候总想偷懒，结果被老板发现了。 (Khi làm việc anh ấy luôn muốn lười biếng trốn việc, kết quả bị sếp phát hiện.) | 所有人都喜欢偷懒。 (Mọi người đều thích đi chơi.) | Giữ bản site |
| 938 | HSK8 | 团伙 | tuánhuǒ | 警察经过几个月的调查，终于打掉了一个盗窃团伙。 (Sau vài tháng điều tra, cảnh sát cuối cùng đã triệt phá một băng nhóm trộm cắp.) | 该名青年将少女从流氓团伙中救了出来。 (Chàng trai đã cứu cô gái khỏi một đám lưu manh.) | Giữ bản site |
| 939 | HSK8 | 托 | tuō | 他用手托着下巴，坐在那里想了很久。 (Anh ấy chống tay đỡ cằm, ngồi ở đó suy nghĩ rất lâu.) | 我想骑水上摩托车。 (Tôi muốn đi mô tô nước.) | Giữ bản site |
| 940 | HSK8 | 妥当 | tuǒdang | 行李都已经收拾妥当，我们随时可以出发。 (Hành lý đều đã thu xếp ổn thỏa, chúng ta có thể xuất phát bất cứ lúc nào.) | 迄今，一切妥当。 (Cho đến nay, rất tốt.) | Giữ bản site |
| 941 | HSK8 | 妥协 | tuǒxié | 双方各让一步，最后终于达成了妥协。 (Hai bên mỗi bên nhường một bước, cuối cùng đã đạt được thỏa hiệp.) | 我强烈反对妥协 (Tôi phản đối mạnh mẽ sự thỏa hiệp.) | Giữ bản site |
| 942 | HSK8 | 挖苦 | wāku | 他总喜欢挖苦别人，时间久了没人愿意理他。 (Anh ấy luôn thích châm chọc người khác, lâu dần chẳng ai muốn để ý đến anh ấy nữa.) | 汤姆真会挖苦人。 (Tom khá mỉa mai.) | Giữ bản site |
| 943 | HSK8 | 丸 | wán | 这种药丸每天吃两次，饭后用温水送服。 (Loại thuốc viên này mỗi ngày uống hai lần, sau bữa ăn uống với nước ấm.) | 章鱼小丸子真的很美味！ (Takoyaki thực sự khá ngon.) | Giữ bản site |
| 944 | HSK8 | 旺 | wàng | 今年店里的生意特别旺，老板高兴得合不拢嘴。 (Năm nay việc buôn bán trong tiệm đặc biệt thịnh vượng, ông chủ mừng đến mức cười không khép miệng được.) | 过年吃旺来，好运会来。 (Ăn dứa vào dịp năm mới, may mắn sẽ đến.) | Giữ bản site |
| 945 | HSK8 | 亡羊补牢 | wángyáng-bǔláo | 现在开始准备还不晚，亡羊补牢总比不补强。 (Bây giờ bắt đầu chuẩn bị vẫn chưa muộn, sửa sai muộn còn hơn không sửa.) | 亡羊补牢。 (Thà muộn còn hơn không.) | Giữ bản site |
| 946 | HSK8 | 微波炉 | wēibōlú | 她把昨天的剩饭放进微波炉里热了一下。 (Cô ấy cho cơm thừa hôm qua vào lò vi sóng hâm lại một chút.) | 汤姆没有微波炉。 (Tom không có lò vi sóng.) | Giữ bản site |
| 947 | HSK8 | 威力 | wēilì | 这种新武器的威力很大，必须严格管理。 (Uy lực của loại vũ khí mới này rất lớn, phải quản lý nghiêm ngặt.) | 一名伟大的战士威力显著，无需抵死奋战。 (Một chiến binh vĩ đại tỏa ra sức mạnh. Anh ta không cần phải chiến đấu đến chết.) | Giữ bản site |
| 948 | HSK8 | 尾气 | wěiqì | 汽车尾气是城市空气污染的重要来源之一。 (Khí thải ô tô là một trong những nguồn gây ô nhiễm không khí quan trọng ở thành phố.) | 汽车尾气在城镇里造成了严重的污染。 (Khí thải ô tô gây ô nhiễm nghiêm trọng ở các thị trấn.) | Giữ bản site |
| 949 | HSK8 | 微弱 | wēiruò | 他的声音很微弱，我们几乎听不清楚。 (Giọng anh ấy rất yếu, chúng tôi gần như không nghe rõ.) | 法案以10票微弱多数通过。 (Dự luật được thông qua với đa số nhỏ là 10 phiếu.) | Giữ bản site |
| 950 | HSK8 | 委员 | wěiyuán | 几位委员正在会议室里讨论这个新方案。 (Vài vị ủy viên đang thảo luận phương án mới này trong phòng họp.) | 委员会一个月召开两次。 (Ủy ban họp hai lần một tháng.) | Giữ bản site |
| 951 | HSK8 | 伪造 | wěizào | 他因为伪造证件，被警察带走调查了。 (Anh ấy vì làm giả giấy tờ nên bị cảnh sát đưa đi điều tra.) | 这是一个伪造品。 (Đó là một sự giả mạo.) | Giữ bản site |
| 952 | HSK8 | 卧 | wò | 宝宝卧在妈妈的怀里，很快就睡着了。 (Em bé nằm trong vòng tay mẹ, rất nhanh đã ngủ thiếp đi.) | 你看过《卧虎藏龙》吗？ (Bạn đã xem Ngọa hổ tàng long chưa?) | Giữ bản site |
| 953 | HSK8 | 侮辱 | wǔrǔ | 他当众侮辱同事，最后不得不向大家道歉。 (Anh ấy xúc phạm đồng nghiệp trước mặt mọi người, cuối cùng buộc phải xin lỗi tất cả.) | 她侮辱了他。 (Cô đã xúc phạm anh.) | Giữ bản site |
| 954 | HSK8 | 下跌 | xiàdiē | 这几天猪肉的价格一直在下跌，买的人多了。 (Mấy ngày nay giá thịt lợn liên tục giảm, người mua nhiều hơn.) | 肉价下跌了。 (Giá thịt giảm.) | Giữ bản site |
| 955 | HSK8 | 下令 | xiàlìng | 船长下令起锚，轮船慢慢离开了港口。 (Thuyền trưởng ra lệnh nhổ neo, con tàu từ từ rời khỏi cảng.) | 船长下令起锚。 (Thuyền trưởng ra lệnh cân neo.) | Giữ bản site |
| 956 | HSK8 | 弦 | xián | 他弹着弹着，吉他的一根弦突然断了。 (Anh ấy đang đàn thì một dây của cây ghi-ta bỗng nhiên đứt.) | 一个管弦乐团沿着路前进 (Một ban nhạc kèn đồng đang diễu hành dọc đường phố.) | Giữ bản site |
| 957 | HSK8 | 享 | xiǎng | 这种安静的生活，不是人人都能享得到的。 (Cuộc sống yên tĩnh như vậy không phải ai cũng được hưởng.) | 我乐意分享。 (Tôi sẵn sàng chia sẻ.) | Giữ bản site |
| 958 | HSK8 | 享有 | xiǎngyǒu | 在这里工作满五年，就能享有带薪休假。 (Làm việc ở đây đủ năm năm là được hưởng nghỉ phép có lương.) | 他享有私人教学的特权。 (Ông có đặc quyền được hưởng một nền giáo dục tư nhân.) | Giữ bản site |
| 959 | HSK8 | 嫌疑 | xiányí | 他有很大的作案嫌疑，警方正在进一步调查。 (Anh ấy bị nghi ngờ gây án rất lớn, cảnh sát đang điều tra thêm.) | 嫌疑犯目前性别不明。 (Giới tính của nghi phạm hiện chưa được xác định.) | Giữ bản site |
| 960 | HSK8 | 小菜一碟 | xiǎocài-yìdié | 对他来说，修好这台电脑只是小菜一碟。 (Với anh ấy, sửa chiếc máy tính này chỉ là chuyện nhỏ.) | 小菜一碟。 (Đó là một miếng bánh.) | Giữ bản site |
| 961 | HSK8 | 吸毒 | xīdú | 吸毒对身体的危害极大，年轻人千万不能碰。 (Hút ma túy gây hại cực lớn cho cơ thể, người trẻ tuyệt đối không được đụng vào.) | 我不吸毒。 (Tôi không chơi ma túy.) | Giữ bản site |
| 962 | HSK8 | 嗅 | xiù | 他低下头，仔细嗅了嗅这朵花的香味。 (Anh ấy cúi đầu, cẩn thận ngửi mùi thơm của bông hoa này.) | 狗的嗅觉灵敏。 (Chó có khứu giác rất nhạy bén.) | Giữ bản site |
| 963 | HSK8 | 嗅觉 | xiùjué | 感冒以后，他的嗅觉变得不灵敏了。 (Sau khi bị cảm, khứu giác của anh ấy trở nên kém nhạy.) | 狗的嗅觉灵敏。 (Chó có khứu giác rất nhạy bén.) | Giữ bản site |
| 964 | HSK8 | 夕阳 | xīyáng | 夕阳照在湖面上，整个湖都变成了金色。 (Ánh hoàng hôn chiếu trên mặt hồ, cả mặt hồ đều biến thành màu vàng kim.) | 夕阳的余辉照在湖上。 (Ánh sáng rực rỡ của mặt trời lặn nằm trên mặt hồ.) | Giữ bản site |
| 965 | HSK8 | 悬 | xuán | 门前悬着两个红灯笼，看起来特别喜庆。 (Trước cửa treo hai chiếc đèn lồng đỏ, trông đặc biệt vui tươi.) | 树上悬垂着很多果子。 (Rất nhiều quả treo trên cây.) | Giữ bản site |
| 966 | HSK8 | 寻常 | xúncháng | 这件小事在他看来，再寻常不过了。 (Việc nhỏ này theo anh ấy thấy thì bình thường không gì bằng.) | 那场事故让我们陷入了不寻常的局势。 (Chúng tôi đã phải đối mặt với một tình huống bất thường vì vụ tai nạn.) | Giữ bản site |
| 967 | HSK8 | 咽 | yàn | 他嗓子疼得厉害，咽东西的时候都很困难。 (Cổ họng anh ấy đau dữ dội, khi nuốt đồ cũng rất khó khăn.) | 老人咽下了最后一口气。 (Ông già trút hơi thở cuối cùng.) | Giữ bản site |
| 968 | HSK8 | 厌烦 | yànfán | 他对每天重复同样的工作，渐渐感到厌烦。 (Anh ấy dần cảm thấy chán ngán công việc lặp đi lặp lại mỗi ngày.) | 我们感到厌烦了。 (Chúng tôi đã chán.) | Giữ bản site |
| 969 | HSK8 | 厌倦 | yànjuàn | 他厌倦了城市的吵闹生活，想回乡下住一阵。 (Anh ấy chán ngán cuộc sống ồn ào ở thành phố, muốn về quê ở một thời gian.) | 我厌倦了英语。 (Tôi chán tiếng Anh rồi.) | Giữ bản site |
| 970 | HSK8 | 岩石 | yánshí | 海浪不停地拍打着岸边黑色的岩石。 (Sóng biển không ngừng vỗ vào những tảng đá đen bên bờ.) | 浪拍在岩石上。 (Sóng vỗ vào đá.) | Giữ bản site |
| 971 | HSK8 | 厌恶 | yànwù | 他厌恶说谎的人，觉得那样很不诚实。 (Anh ấy chán ghét những người nói dối, cảm thấy như vậy rất không trung thực.) | 我厌恶他。 (Tôi chán ghét anh ta.) | Giữ bản site |
| 972 | HSK8 | 压抑 | yāyì | 他压抑着心里的怒火，没有当场发作出来。 (Anh ấy kìm nén cơn giận trong lòng, không bùng phát ngay tại chỗ.) | 汤姆没法压抑自己的怒火了。 (Tom không thể kìm được sự tức giận của mình.) | Giữ bản site |
| 973 | HSK8 | 夜校 | yèxiào | 她白天在工厂上班，晚上去夜校学习英语。 (Ban ngày cô ấy làm việc ở nhà máy, buổi tối đi học tiếng Anh ở trường ban đêm.) | 她上夜校。 (Cô ấy đi học ban đêm.) | Giữ bản site |
| 974 | HSK8 | 仪表 | yíbiǎo | 实验室里的仪表需要定期检查，才能保证准确。 (Dụng cụ đo trong phòng thí nghiệm cần kiểm tra định kỳ mới đảm bảo chính xác.) | 汤姆把他的太阳镜留在我的车的仪表板上了。 (Tom để quên chiếc kính râm của anh ấy trên bảng điều khiển xe của tôi.) | Giữ bản site |
| 975 | HSK8 | 赢家 | yíngjiā | 他是这次比赛的赢家，大家都为他鼓掌。 (Anh ấy là người chiến thắng của cuộc thi lần này, mọi người đều vỗ tay chúc mừng anh ấy.) | 做个赢家很好。 (Thật tốt khi trở thành người chiến thắng.) | Giữ bản site |
| 976 | HSK8 | 因人而异 | yīnrén’éryì | 学习方法因人而异，适合自己的才是最好的。 (Phương pháp học tập tùy từng người mà khác nhau, phù hợp với bản thân mới là tốt nhất.) | 观点因人而异。 (Ý kiến ​​​​khác nhau từ người này sang người khác.) | Giữ bản site |
| 977 | HSK8 | 异性 | yìxìng | 他有很多异性朋友，大家相处得都很自然。 (Anh ấy có nhiều bạn khác giới, mọi người đối xử với nhau đều rất tự nhiên.) | 大部分人是异性恋。 (Hầu hết mọi người đều là người dị tính.) | Giữ bản site |
| 978 | HSK8 | 抑郁 | yìyù | 她最近情绪很低落，有些抑郁，朋友常陪她聊天。 (Dạo gần đây tâm trạng cô ấy rất sa sút, có chút trầm cảm, bạn bè thường ở bên trò chuyện cùng.) | 她抑郁了。 (Cô ấy đang bị trầm cảm.) | Giữ bản site |
| 979 | HSK8 | 友善 | yǒushàn | 他对邻居非常友善，谁有困难他都愿意帮。 (Anh ấy rất thân thiện với hàng xóm, ai gặp khó khăn anh ấy cũng sẵn lòng giúp.) | 友善点。 (Hãy tử tế.) | Giữ bản site |
| 980 | HSK8 | 优雅 | yōuyǎ | 她穿着一条白裙子，走起路来姿态优雅。 (Cô ấy mặc một chiếc váy trắng, dáng đi vô cùng duyên dáng.) | 她举止优雅。 (Cô ấy thật duyên dáng.) | Giữ bản site |
| 981 | HSK8 | 忧郁 | yōuyù | 他望着远方的山，眼神里带着淡淡的忧郁。 (Anh ấy nhìn về dãy núi xa xa, trong ánh mắt mang nét u buồn nhàn nhạt.) | 他得了忧郁症。 (Anh ấy bị trầm cảm.) | Giữ bản site |
| 982 | HSK8 | 幼稚 | yòuzhì | 他都二十多岁了，说话做事还是很幼稚。 (Anh ấy đã hơn hai mươi tuổi rồi, nói năng làm việc vẫn rất trẻ con.) | 她说话幼稚。 (Cô nói chuyện một cách trẻ con.) | Giữ bản site |
| 983 | HSK8 | 原创 | yuánchuàng | 这首歌是他的原创作品，歌词写得特别真诚。 (Bài hát này là tác phẩm sáng tác gốc của anh ấy, lời ca viết đặc biệt chân thành.) | 那是原创的想法。 (Đó là một ý tưởng ban đầu.) | Giữ bản site |
| 984 | HSK8 | 愚蠢 | yúchǔn | 为了这点小事生气，实在是太愚蠢了。 (Vì chút chuyện nhỏ này mà tức giận thì thật sự quá ngu ngốc.) | 你很愚蠢。 (Bạn thật ngu ngốc.) | Giữ bản site |
| 985 | HSK8 | 愈演愈烈 | yùyǎn-yùliè | 两个人的争吵愈演愈烈，最后谁也不理谁。 (Cuộc cãi vã của hai người ngày càng gay gắt, cuối cùng chẳng ai thèm để ý đến ai.) | 在这个城市，白人和黑人间的争端愈演愈烈。 (Xung đột giữa người da đen và người da trắng trong thành phố trở nên tồi tệ hơn.) | Giữ bản site |
| 986 | HSK8 | 凿 | záo | 工人用锤子和凿子，在石头上凿出一个洞。 (Người thợ dùng búa và đục, đục ra một lỗ trên tảng đá.) | 证据确凿了。 (Bằng chứng là rõ ràng.) | Giữ bản site |
| 987 | HSK8 | 则 | zé | 学习就像逆水行舟，不进则退，不能偷懒。 (Học tập như chèo thuyền ngược dòng, không tiến ắt sẽ lùi, không được lười biếng.) | 他无视交通规则。 (Anh ta phớt lờ luật lệ giao thông.) | Giữ bản site |
| 988 | HSK8 | 战士 | zhànshì | 战士们守在边境，保护着祖国的安全。 (Các chiến sĩ canh giữ nơi biên giới, bảo vệ sự an toàn của Tổ quốc.) | 一名伟大的战士威力显著，无需抵死奋战。 (Một chiến binh vĩ đại tỏa ra sức mạnh. Anh ta không cần phải chiến đấu đến chết.) | Giữ bản site |
| 989 | HSK8 | 争端 | zhēngduān | 两国之间的贸易争端，最后通过谈判解决了。 (Tranh chấp thương mại giữa hai nước cuối cùng đã được giải quyết qua đàm phán.) | 在这个城市，白人和黑人间的争端愈演愈烈。 (Xung đột giữa người da đen và người da trắng trong thành phố trở nên tồi tệ hơn.) | Giữ bản site |
| 990 | HSK8 | 争分夺秒 | zhēngfēn-duómiǎo | 医生们争分夺秒地抢救病人，一刻也不敢耽误。 (Các bác sĩ chạy đua với thời gian để cứu bệnh nhân, một khắc cũng không dám chậm trễ.) | 我们的员工正在争分夺秒地修理冰暴带来的损坏。 (Nhân viên của chúng tôi đang làm việc suốt ngày đêm để khắc phục thiệt hại do bão băng gây ra.) | Giữ bản site |
| 991 | HSK8 | 拯救 | zhěngjiù | 消防员冲进火场，拯救了被困的两个孩子。 (Lính cứu hỏa xông vào đám cháy, giải cứu hai đứa trẻ bị mắc kẹt.) | 拯救你自己。 (Hãy tự cứu mình.) | Giữ bản site |
| 992 | HSK8 | 政权 | zhèngquán | 新的政权建立以后，国家慢慢安定了下来。 (Sau khi chính quyền mới được thành lập, đất nước dần ổn định trở lại.) | 枪杆子里面出政权。 (Quyền lực chính trị phát triển từ nòng súng.) | Giữ bản site |
| 993 | HSK8 | 挣扎 | zhēngzhá | 他掉进水里挣扎了几下，终于抓住了绳子。 (Anh ấy rơi xuống nước vùng vẫy vài cái, cuối cùng nắm được sợi dây.) | 我挣扎着挤出地铁。 (Tôi cố gắng ra khỏi tàu điện ngầm.) | Giữ bản site |
| 994 | HSK8 | 侦探 | zhēntàn | 他是一名经验丰富的侦探，破过很多案子。 (Anh ấy là một thám tử giàu kinh nghiệm, từng phá được nhiều vụ án.) | 我是个侦探。 (Tôi là một thám tử.) | Giữ bản site |
| 995 | HSK8 | 制服 | zhìfú | 警察很快就制服了歹徒，保护了周围的群众。 (Cảnh sát rất nhanh đã khống chế được tên côn đồ, bảo vệ người dân xung quanh.) | 他们都穿着制服。 (Tất cả họ đều mặc đồng phục.) | Giữ bản site |
| 996 | HSK8 | 拄 | zhǔ | 他拄着拐杖，一步一步慢慢走上台阶。 (Anh ấy chống gậy, từng bước từng bước chậm rãi đi lên bậc thềm.) | 一个拄着拐杖的年轻女孩问汤姆他住在哪里。 (Một cô gái trẻ chống nạng hỏi Tom nơi anh sống.) | Giữ bản site |
| 997 | HSK8 | 传 | zhuàn | 老师让我们读一篇古代名人的传，了解他的生平。 (Thầy bảo chúng tôi đọc một bài truyện ký về danh nhân thời cổ, tìm hiểu cuộc đời của ông.) | 你的信在传达室。 (Thư của bạn đang ở văn phòng tiếp tân.) | Giữ bản site |
| 998 | HSK8 | 幢 | zhuàng | 河对岸那幢老房子，已经空了很多年了。 (Tòa nhà cũ bên kia sông kia đã bỏ trống nhiều năm rồi.) | 那幢房子看起来被遗弃了。 (Ngôi nhà đó có vẻ vắng vẻ.) | Giữ bản site |
| 999 | HSK8 | 专辑 | zhuānjí | 她的新专辑一共有十首歌，每首都很好听。 (Album mới của cô ấy có tổng cộng mười bài hát, bài nào cũng rất hay.) | 汤姆买了新专辑。 (Tom đã mua album mới.) | Giữ bản site |
| 1000 | HSK8 | 主权 | zhǔquán | 每个国家的主权和领土，都应该得到尊重。 (Chủ quyền và lãnh thổ của mỗi quốc gia đều nên được tôn trọng.) | 孩子也应该有一点自主权。 (Trẻ em cũng nên có tiếng nói riêng của mình.) | Giữ bản site |
| 1001 | HSK8 | 奏效 | zòuxiào | 他的方法果然奏效，问题很快就解决了。 (Cách của anh ấy quả nhiên hiệu quả, vấn đề rất nhanh đã được giải quyết.) | 它不会奏效。 (Nó sẽ không hoạt động.) | Giữ bản site |
| 1002 | HSK8 | 作弊 | zuòbì | 考试的时候作弊，一旦发现就会取消成绩。 (Gian lận khi thi, một khi bị phát hiện sẽ bị hủy kết quả.) | 你作弊了。 (Bạn đã lừa dối.) | Giữ bản site |
| 1003 | HSK9 | 碍事 | àishì | 他腿上的小伤不碍事，休息两天就好。 (Vết thương nhỏ ở chân anh ấy không sao, nghỉ hai ngày là khỏi.) | 这点小伤不碍事。 (Vết thương nhỏ này không có gì nghiêm trọng.) | Giữ bản site |
| 1004 | HSK9 | 癌症 | áizhèng | 医生提醒大家定期检查，及早发现癌症。 (Bác sĩ nhắc mọi người khám định kỳ để phát hiện sớm bệnh ung thư.) | 我有癌症。 (Tôi bị ung thư.) | Giữ bản site |
| 1005 | HSK9 | 暗中 | ànzhōng | 他表面上不说，心里却在暗中帮助朋友。 (Bề ngoài anh ấy không nói gì, nhưng trong lòng lại âm thầm giúp đỡ bạn bè.) | 因为闪光灯坏了，他不能在黑暗中拍照。 (Đèn flash không hoạt động nên anh không thể chụp ảnh trong bóng tối.) | Giữ bản site |
| 1006 | HSK9 | 罢工 | bàgōng | 工人们为了提高工资，决定下周举行罢工。 (Các công nhân quyết định đình công vào tuần tới để đòi tăng lương.) | 有罢工。 (Có một cuộc đình công.) | Giữ bản site |
| 1007 | HSK9 | 芭蕾 | bālěi | 女儿从小学习芭蕾，跳得越来越好了。 (Con gái từ nhỏ đã học múa ba lê, nhảy ngày càng giỏi.) | 温蒂威伦跳芭蕾舞。 (Wendy Whelan nhảy múa ba-lê.) | Giữ bản site |
| 1008 | HSK9 | 绊 | bàn | 他在门口被一根绳子绊了一下，差点摔倒。 (Anh ấy bị một sợi dây vướng chân ở cửa, suýt nữa thì ngã.) | 进家门后，我被垫子绊倒了。 (Vào nhà, tôi vấp phải tấm thảm.) | Giữ bản site |
| 1009 | HSK9 | 绑架 | bǎngjià | 警察及时赶到，救出了被绑架的孩子。 (Cảnh sát kịp thời đến nơi và giải cứu đứa trẻ bị bắt cóc.) | 我被外星人绑架了。 (Tôi đã bị người ngoài hành tinh bắt cóc.) | Giữ bản site |
| 1010 | HSK9 | 豹 | bào | 动物园里新来了一只豹，跑得非常快。 (Sở thú mới có một con báo, nó chạy rất nhanh.) | 山里有豺狼虎豹，晚上别去。 (Trong núi có dã thú, ban đêm không nên đi.) | Giữ bản site |
| 1011 | HSK9 | 绷 | bēng | 他把绳子绷得紧紧的，生怕箱子散开。 (Anh ấy căng sợi dây thật chặt, sợ chiếc thùng bị bung ra.) | 他先清洗了伤口，再绑上绷带。 (Anh rửa sạch vết thương trước khi băng bó.) | Giữ bản site |
| 1012 | HSK9 | 辩护 | biànhù | 律师在法庭上为被告作了有力的辩护。 (Luật sư đã bào chữa đầy sức thuyết phục cho bị cáo tại tòa.) | 我在给魔鬼当辩护士。 (Tôi chỉ đang đóng vai người bào chữa cho quỷ dữ thôi.) | Giữ bản site |
| 1013 | HSK9 | 辩论 | biànlùn | 在辩论会上，双方都提出了自己的看法。 (Tại buổi tranh luận, cả hai bên đều trình bày quan điểm của mình.) | 他参加辩论 (Anh ấy đã tham gia vào cuộc tranh luận.) | Giữ bản site |
| 1014 | HSK9 | 编织 | biānzhī | 奶奶坐在院子里，慢慢地编织着毛衣。 (Bà ngồi trong sân, chậm rãi đan chiếc áo len.) | 她忙着编织。 (Cô ấy đang bận rộn với công việc đan lát của mình.) | Giữ bản site |
| 1015 | HSK9 | 濒临 | bīnlín | 这种鸟数量越来越少，已经濒临灭绝了。 (Loài chim này ngày càng ít đi, đã gần như tuyệt chủng.) | 这是一个濒临灭绝的物种。 (Nó là một loài có nguy cơ tuyệt chủng.) | Giữ bản site |
| 1016 | HSK9 | 鄙视 | bǐshì | 我们不应该鄙视任何人，要学会尊重别人。 (Chúng ta không nên khinh thường bất cứ ai, phải học cách tôn trọng người khác.) | 我鄙视你。 (Tôi khinh thường bạn.) | Giữ bản site |
| 1017 | HSK9 | 步伐 | bùfá | 听到集合的哨声，同学们加快了步伐。 (Nghe tiếng còi tập hợp, các bạn học sinh bước nhanh hơn.) | 我们真的得加紧步伐了。 (Chúng ta thực sự phải bước tiếp.) | Giữ bản site |
| 1018 | HSK9 | 裁 | cái | 她拿起剪刀，把这块布裁成了两半。 (Cô ấy cầm kéo lên, cắt tấm vải này thành hai nửa.) | 裁判误判了这个球。 (Trọng tài đã gọi sai quả bóng này.) | Giữ bản site |
| 1019 | HSK9 | 采 | cǎi | 清晨，农民们背着竹筐上山采茶。 (Sáng sớm, các bác nông dân đeo sọt tre lên núi hái trà.) | 爷爷今天神采奕奕。 (Ông nội hôm nay tràn đầy năng lượng.) | Giữ bản site |
| 1020 | HSK9 | 菜肴 | càiyáo | 妈妈准备了几道可口的菜肴，招待远方的客人。 (Mẹ chuẩn bị mấy món ăn ngon để chiêu đãi vị khách phương xa.) | 我肯定你会喜欢我们今晚的菜肴。 (Tôi chắc chắn bạn sẽ thích những gì chúng tôi có trong thực đơn tối nay.) | Giữ bản site |
| 1021 | HSK9 | 苍白 | cāngbái | 生病以后，他的脸色变得十分苍白。 (Sau khi ốm, sắc mặt anh ấy trở nên rất tái nhợt.) | 他有点苍白。 (Anh ấy hơi xanh xao.) | Giữ bản site |
| 1022 | HSK9 | 藏身 | cángshēn | 小猫听见声音，立刻躲到沙发后藏身。 (Nghe thấy tiếng động, con mèo con lập tức chạy ra sau ghế sofa trốn.) | 他找地方藏身。 (Anh ấy tìm một nơi để ẩn náu.) | Giữ bản site |
| 1023 | HSK9 | 草丛 | cǎocóng | 孩子们躲在草丛里，玩起了捉迷藏。 (Bọn trẻ trốn trong bụi cỏ, chơi trò trốn tìm.) | 我躲在高草丛里了。 (Tôi trốn trong đám cỏ cao.) | Giữ bản site |
| 1024 | HSK9 | 草坪 | cǎopíng | 周末，孩子们在草坪上踢足球，玩得很开心。 (Cuối tuần, bọn trẻ đá bóng trên bãi cỏ, chơi rất vui.) | 滚出我的草坪！ (Ra khỏi bãi cỏ của tôi.) | Giữ bản site |
| 1025 | HSK9 | 缠 | chán | 电线缠在一起了，你帮我把它们分开吧。 (Dây điện quấn vào nhau rồi, bạn giúp tôi gỡ chúng ra nhé.) | 这首情歌很缠绵。 (Bản tình ca này dịu dàng và kéo dài.) | Giữ bản site |
| 1026 | HSK9 | 铲 | chǎn | 雪停以后，他拿着铁锹到院子里铲雪。 (Sau khi tuyết ngừng rơi, anh ấy cầm xẻng ra sân xúc tuyết.) | 他正在铲雪。 (Anh ấy đang xúc tuyết.) | Giữ bản site |
| 1027 | HSK9 | 潮 | cháo | 傍晚涨潮的时候，海水慢慢漫上了沙滩。 (Lúc thủy triều lên vào buổi chiều tối, nước biển từ từ tràn lên bãi cát.) | 节日里到处都是人潮。 (Vào những ngày lễ, nơi nào cũng đông đúc.) | Giữ bản site |
| 1028 | HSK9 | 钞票 | chāopiào | 他从钱包里拿出一张钞票，付了车费。 (Anh ấy lấy từ ví ra một tờ tiền giấy để trả tiền xe.) | 这张10美元钞票是假的。 (Tờ 10 đô la này là tiền giả.) | Giữ bản site |
| 1029 | HSK9 | 沉甸甸 | chéndiàndiàn | 这个箱子沉甸甸的，里面一定装了不少书。 (Chiếc thùng này nặng trĩu, bên trong chắc chắn đựng không ít sách.) | 木质家具沉甸甸的。 (Đồ nội thất bằng gỗ nặng.) | Giữ bản site |
| 1030 | HSK9 | 澄清 | chéngqīng | 他写了一封信，向大家澄清事情的真相。 (Anh ấy viết một lá thư để làm rõ sự thật của sự việc với mọi người.) | 感谢澄清。 (Cảm ơn đã làm rõ.) | Giữ bản site |
| 1031 | HSK9 | 陈述 | chénshù | 在会上，他清楚地陈述了自己的意见。 (Tại cuộc họp, anh ấy trình bày rõ ràng ý kiến của mình.) | 我想撤回我之前的陈述。 (Tôi xin rút lại lời phát biểu trước đó của mình.) | Giữ bản site |
| 1032 | HSK9 | 痴迷 | chīmí | 弟弟痴迷于电脑游戏，常常玩到深夜。 (Em trai say mê trò chơi điện tử, thường chơi đến tận khuya.) | 他痴迷于音乐。 (Anh ấy phát điên vì âm nhạc.) | Giữ bản site |
| 1033 | HSK9 | 池塘 | chítáng | 村子前面的池塘里，荷花开得正美。 (Trong ao trước làng, hoa sen đang nở rất đẹp.) | 池塘上有座桥。 (Có một cây cầu bắc qua ao.) | Giữ bản site |
| 1034 | HSK9 | 赤字 | chìzì | 今年公司支出太多，年底出现了赤字。 (Năm nay công ty chi tiêu quá nhiều, cuối năm đã bị thâm hụt.) | 我们去年遇到了赤字。 (Chúng tôi đã rơi vào tình trạng báo động đỏ vào năm ngoái.) | Giữ bản site |
| 1035 | HSK9 | 稠 | chóu | 这碗粥煮得很稠，喝起来特别香。 (Bát cháo này nấu rất đặc, uống vào đặc biệt thơm ngon.) | 这里的人口非常稠密。 (Dân số ở đây rất đông đúc.) | Giữ bản site |
| 1036 | HSK9 | 筹 | chóu | 他们四处筹钱，帮助生病的同学。 (Họ đi khắp nơi quyên tiền để giúp người bạn cùng lớp đang bị bệnh.) | 筹划旅行的时候，我们必须考虑到全家人的意愿。 (Chúng ta phải tính đến mong muốn của cả gia đình khi lên kế hoạch cho một chuyến đi.) | Giữ bản site |
| 1037 | HSK9 | 筹划 | chóuhuà | 公司正在筹划明年的新产品发布会。 (Công ty đang lên kế hoạch cho buổi ra mắt sản phẩm mới vào năm sau.) | 筹划旅行的时候，我们必须考虑到全家人的意愿。 (Chúng ta phải tính đến mong muốn của cả gia đình khi lên kế hoạch cho một chuyến đi.) | Giữ bản site |
| 1038 | HSK9 | 触动 | chùdòng | 他的话深深地触动了我，让我久久难忘。 (Lời nói của anh ấy đã chạm sâu đến tôi, khiến tôi mãi không quên.) | 他的话深深触动了我们。 (Bài phát biểu của anh ấy đã gây ấn tượng với chúng tôi rất nhiều.) | Giữ bản site |
| 1039 | HSK9 | 触犯 | chùfàn | 任何人触犯了法律，都要受到相应的处罚。 (Bất cứ ai vi phạm pháp luật đều phải chịu hình phạt tương ứng.) | 他触犯了法律。 (Anh ta đã phá luật.) | Giữ bản site |
| 1040 | HSK9 | 锤 | chuí | 他举起锤子，用力把钉子敲进木板里。 (Anh ấy giơ chiếc búa lên, dùng sức đóng chiếc đinh vào tấm ván gỗ.) | 写作需要不断锤炼。 (Viết cần mài giũa liên tục.) | Giữ bản site |
| 1041 | HSK9 | 蠢 | chǔn | 明知道有危险还去冒险，真是太蠢了。 (Biết rõ là nguy hiểm mà vẫn đi mạo hiểm, thật là quá ngu ngốc.) | 春天到了，小草蠢蠢欲动。 (Mùa xuân đã đến, cỏ non lay động.) | Giữ bản site |
| 1042 | HSK9 | 磁带 | cídài | 这盘磁带里录着爷爷年轻时唱的歌。 (Cuốn băng này ghi lại bài hát ông nội hát hồi còn trẻ.) | 这个磁带录音机不是新的。 (Máy ghi âm này không phải là mới.) | Giữ bản site |
| 1043 | HSK9 | 辞典 | cídiǎn | 这本辞典收录的词语很多，查起来很方便。 (Cuốn từ điển này thu thập rất nhiều từ ngữ, tra cứu rất tiện.) | 这电子辞典的好处就是便于携带。 (Ưu điểm của từ điển điện tử này là nó rất dễ mang theo.) | Giữ bản site |
| 1044 | HSK9 | 磁铁 | cítiě | 他用磁铁吸起了掉在地上的几根铁钉。 (Anh ấy dùng nam châm hút mấy chiếc đinh sắt rơi trên mặt đất lên.) | 磁铁互相吸引。 (Các nam châm hút nhau.) | Giữ bản site |
| 1045 | HSK9 | 葱 | cōng | 妈妈在面条上撒了一些葱花，闻起来很香。 (Mẹ rắc một ít hành lá lên bát mì, ngửi rất thơm.) | 我想尝尝姜葱炒虾。 (Tôi muốn thử món tôm hành gừng.) | Giữ bản site |
| 1046 | HSK9 | 粗鲁 | cūlǔ | 他说话粗鲁无礼，让在场的人都很不舒服。 (Anh ta nói năng thô lỗ vô lễ, khiến mọi người có mặt đều rất khó chịu.) | 她原谅了男孩的粗鲁。 (Cô đã tha thứ cho cậu bé vì sự thô lỗ của mình.) | Giữ bản site |
| 1047 | HSK9 | 逮 | dǎi | 警察追了两条街，终于逮住了那个小偷。 (Cảnh sát đuổi theo hai con phố, cuối cùng cũng tóm được tên trộm đó.) | 我被逮捕了。 (Tôi đã bị bắt.) | Giữ bản site — câu XuCup dùng 逮 âm dài (逮捕), sai âm của mục dǎi (bắt) |
| 1048 | HSK9 | 逮捕 | dàibǔ | 警方掌握证据后，依法逮捕了那名嫌疑人。 (Sau khi nắm được chứng cứ, cảnh sát đã bắt giữ nghi phạm đó theo đúng pháp luật.) | 我被逮捕了。 (Tôi đã bị bắt.) | Giữ bản site |
| 1049 | HSK9 | 担 | dàn | 他肩上挑着一担水，慢慢走回村里。 (Anh ấy gánh một gánh nước trên vai, chậm rãi đi về làng.) | 你甭担心，我没事。 (Đừng lo lắng, tôi ổn.) | Giữ bản site |
| 1050 | HSK9 | 胆怯 | dǎnqiè | 他性格胆怯，从来不敢在大家面前发言。 (Anh ấy tính nhút nhát, chưa bao giờ dám phát biểu trước mọi người.) | 汤姆害羞胆怯。 (Tom nhút nhát và hèn nhát.) | Giữ bản site |
| 1051 | HSK9 | 胆小鬼 | dǎnxiǎoguǐ | 黑夜里走山路并不可怕，你别当胆小鬼。 (Đi đường núi trong đêm tối không đáng sợ đâu, bạn đừng làm kẻ nhát gan.) | 你就是胆小鬼。 (Bạn chỉ là một kẻ hèn nhát.) | Giữ bản site |
| 1052 | HSK9 | 盗版 | dàobǎn | 我们应该支持正版，坚决不看盗版电影。 (Chúng ta nên ủng hộ bản quyền chính hãng, kiên quyết không xem phim lậu.) | 你喜欢盗版电影吗？ (Bạn có thích phim cướp biển không?) | Giữ bản site |
| 1053 | HSK9 | 盗窃 | dàoqiè | 他因为盗窃商店的财物，被警察当场抓住。 (Vì trộm cắp tài sản của cửa hàng, hắn đã bị cảnh sát bắt ngay tại chỗ.) | 警察起诉他盗窃。 (Cảnh sát buộc tội anh ta tội trộm cắp.) | Giữ bản site |
| 1054 | HSK9 | 瞪 | dèng | 听了这话，爸爸生气地瞪了他一眼。 (Nghe những lời đó, bố tức giận trừng mắt nhìn anh ấy một cái.) | 他们惊得目瞪口呆。 (Họ không nói nên lời.) | Giữ bản site |
| 1055 | HSK9 | 灯泡 | dēngpào | 客厅的灯泡坏了，爸爸换了一个新的。 (Bóng đèn phòng khách bị hỏng, bố đã thay một cái mới.) | 灯泡发光。 (Một bóng đèn phát ra ánh sáng.) | Giữ bản site |
| 1056 | HSK9 | 调 | diào | 因为工作需要，他被调到了上海分公司。 (Vì nhu cầu công việc, anh ấy được điều chuyển đến chi nhánh Thượng Hải.) | 我家装了分体空调。 (Chúng tôi đã có một máy điều hòa không khí chia đôi được lắp đặt ở nhà.) | Giữ bản site |
| 1057 | HSK9 | 地道 | dìdào | 这条地道是战争年代村民们挖出来的。 (Đường hầm này do dân làng đào ra trong những năm chiến tranh.) | 她大方地道歉。 (Cô đã có lòng lịch sự để xin lỗi.) | Giữ bản site |
| 1058 | HSK9 | 碟 | dié | 她把切好的水果装在一个小碟里端上来。 (Cô ấy cho hoa quả đã cắt vào một chiếc đĩa nhỏ rồi bưng lên.) | 请给我一个碟子。 (Xin vui lòng cho tôi một món ăn nhỏ.) | Giữ bản site |
| 1059 | HSK9 | 钉 | dìng | 他把钉子钉进墙里，挂上了一幅画。 (Anh ấy đóng chiếc đinh vào tường rồi treo lên một bức tranh.) | 我斩钉截铁地拒绝了。 (Tôi thẳng thừng từ chối.) | Giữ bản site |
| 1060 | HSK9 | 笛子 | dízi | 他每天放学后练习吹笛子，进步很快。 (Mỗi ngày sau giờ học anh ấy đều luyện thổi sáo, tiến bộ rất nhanh.) | 他会吹笛子。 (Anh ấy biết thổi sáo.) | Giữ bản site |
| 1061 | HSK9 | 董事 | dǒngshì | 她是这家公司最年轻的董事之一。 (Cô ấy là một trong những thành viên hội đồng quản trị trẻ nhất của công ty này.) | 董事会一致决定任命她为执行总裁。 (Hội đồng quản trị nhất trí quyết định bổ nhiệm bà làm Giám đốc điều hành.) | Giữ bản site |
| 1062 | HSK9 | 豆子 | dòuzi | 妈妈买了一些豆子，准备明天煮粥喝。 (Mẹ mua một ít đậu, chuẩn bị ngày mai nấu cháo ăn.) | 我喜欢豆子。 (Tôi thích đậu.) | Giữ bản site |
| 1063 | HSK9 | 赌博 | dǔbó | 他因为赌博输光了积蓄，后悔也来不及了。 (Vì cờ bạc mà anh ấy thua sạch tiền tiết kiệm, hối hận cũng không kịp nữa.) | 戒掉赌博吧。 (Bỏ cờ bạc.) | Giữ bản site |
| 1064 | HSK9 | 鹅 | é | 湖边有几只大白鹅，正在水里慢慢游。 (Bên hồ có mấy con ngỗng trắng lớn đang bơi chậm rãi trong nước.) | 我在动物园看到了企鹅。 (Tôi nhìn thấy chim cánh cụt ở sở thú.) | Giữ bản site |
| 1065 | HSK9 | 额外 | éwài | 这项服务需要额外收费，请你提前问清楚。 (Dịch vụ này phải trả thêm phí, bạn hãy hỏi rõ trước.) | 电池要额外付钱。 (Bạn cần phải trả thêm tiền cho pin.) | Giữ bản site |
| 1066 | HSK9 | 翻番 | fānfān | 经过大家的努力，今年公司的收入翻番了。 (Nhờ nỗ lực của mọi người, thu nhập của công ty năm nay đã tăng gấp đôi.) | 今年销售会翻番。 (Doanh số bán hàng sẽ tăng gấp đôi trong năm nay.) | Giữ bản site |
| 1067 | HSK9 | 防盗 | fángdào | 出门旅行前要锁好门窗，做好防盗工作。 (Trước khi đi du lịch phải khóa kỹ cửa nẻo, làm tốt việc phòng chống trộm.) | 晚上要注意防盗。 (Buổi tối cần chú ý phòng chống trộm.) | Giữ bản site |
| 1068 | HSK9 | 防护 | fánghù | 在工地上干活时，大家都要做好安全防护。 (Khi làm việc ở công trường, mọi người đều phải bảo hộ an toàn đầy đủ.) | 路边有一条防护栏。 (Dọc đường có rào chắn.) | Giữ bản site |
| 1069 | HSK9 | 烦躁 | fánzào | 连日的阴雨让他心情烦躁，什么都不想做。 (Mưa dầm nhiều ngày khiến tâm trạng anh ấy bồn chồn cáu kỉnh, chẳng muốn làm gì.) | 不要让自己因为一些小事而烦躁了。 (Đừng khiến bản thân phải bận tâm vì những điều nhỏ nhặt nữa.) | Giữ bản site |
| 1070 | HSK9 | 费劲 | fèijìn | 把这些箱子搬到五楼去，真是一件费劲的事。 (Khuân những chiếc thùng này lên tầng năm thật là một việc tốn sức.) | 我毫不费劲就找到他的公司。 (Tôi không gặp khó khăn gì khi tìm thấy văn phòng của anh ấy.) | Giữ bản site |
| 1071 | HSK9 | 肥皂 | féizào | 他用肥皂把手洗得干干净净。 (Anh ấy dùng xà phòng rửa tay thật sạch sẽ.) | 肥皂没了。 (Không còn xà phòng nữa.) | Giữ bản site |
| 1072 | HSK9 | 缝 | féng | 奶奶戴上老花镜，慢慢地给孙子缝扣子。 (Bà đeo kính lão vào, chậm rãi khâu cúc áo cho cháu.) | 妈妈有一台旧缝纫机。 (Mẹ có một chiếc máy khâu cũ.) | Giữ bản site |
| 1073 | HSK9 | 疯 | fēng | 听说球队赢了，球迷们高兴得快要疯了。 (Nghe nói đội bóng thắng, các cổ động viên vui mừng đến phát điên.) | 他表现的像个疯子。 (Anh ta hành động như một kẻ điên.) | Giữ bản site |
| 1074 | HSK9 | 风暴 | fēngbào | 一场强风暴昨晚袭击了沿海的小镇。 (Một cơn bão mạnh tối qua đã tấn công thị trấn ven biển.) | 风暴减弱了。 (Cơn bão đã dịu đi.) | Giữ bản site |
| 1075 | HSK9 | 锋利 | fēnglì | 这把剪刀非常锋利，剪布料一点都不费力。 (Chiếc kéo này rất sắc bén, cắt vải chẳng tốn chút sức nào.) | 这把刀很锋利。 (Con dao này rất sắc bén.) | Giữ bản site |
| 1076 | HSK9 | 风筝 | fēngzheng | 一只风筝挂在了大树上，怎么也取不下来。 (Một con diều mắc trên cây lớn, làm thế nào cũng không lấy xuống được.) | 有一只风筝在树上。 (Có một con diều đang bay phía trên cây.) | Giữ bản site |
| 1077 | HSK9 | 腹 | fù | 他的腹部受了伤，需要马上去医院检查。 (Vùng bụng của anh ấy bị thương, cần đến bệnh viện kiểm tra ngay.) | 他的腹部有点儿疼。 (Bụng anh hơi đau.) | Giữ bản site |
| 1078 | HSK9 | 赴 | fù | 毕业以后，他决定赴国外继续深造。 (Sau khi tốt nghiệp, anh ấy quyết định ra nước ngoài học tiếp.) | 他在全力以赴。 (Anh ấy đang làm hết sức mình.) | Giữ bản site |
| 1079 | HSK9 | 服务器 | fúwùqì | 网站的服务器出了故障，技术人员正在抢修。 (Máy chủ của trang web gặp sự cố, nhân viên kỹ thuật đang khẩn trương sửa chữa.) | 服务器下线了。 (Máy chủ đã ngừng hoạt động.) | Giữ bản site |
| 1080 | HSK9 | 杆 | gǎn | 院子里立着一根竹杆，上面晾着衣服。 (Trong sân dựng một cây sào tre, trên đó phơi quần áo.) | 枪杆子里面出政权。 (Quyền lực chính trị phát triển từ nòng súng.) | Giữ bản site |
| 1081 | HSK9 | 高血压 | gāoxuèyā | 爷爷有高血压，每天都要按时吃药。 (Ông nội bị cao huyết áp, ngày nào cũng phải uống thuốc đúng giờ.) | 我有高血压。 (Tôi bị cao huyết áp.) | Giữ bản site |
| 1082 | HSK9 | 钩 | gōu | 渔夫把鱼钩甩进河里，静静地等鱼上钩。 (Người ngư dân quăng lưỡi câu xuống sông, lặng lẽ chờ cá cắn câu.) | 学校教育不能和社会脱钩。 (Nhà trường không được mất liên lạc với xã hội.) | Giữ bản site |
| 1083 | HSK9 | 雇 | gù | 这家小店最近雇了两名新的服务员。 (Cửa hàng nhỏ này gần đây đã thuê hai nhân viên phục vụ mới.) | 你害怕被解雇吗？ (Bạn có sợ bị sa thải không?) | Giữ bản site |
| 1084 | HSK9 | 诡计 | guǐjì | 他用尽诡计，最后还是被大家识破了。 (Hắn dùng hết mọi mưu mẹo, cuối cùng vẫn bị mọi người vạch trần.) | 老的犬可以学新的诡计。 (Những con chó già có thể học được những thủ thuật mới.) | Giữ bản site |
| 1085 | HSK9 | 骨架 | gǔjià | 新大楼的骨架已经建好，工人们正在砌墙。 (Khung xương của tòa nhà mới đã dựng xong, công nhân đang xây tường.) | 汤姆在洞穴里找到了一具骨架。 (Tom tìm thấy một bộ xương trong hang động.) | Giữ bản site |
| 1086 | HSK9 | 裹 | guǒ | 她用一条大毛巾裹住湿漉漉的头发。 (Cô ấy dùng một chiếc khăn lớn quấn lấy mái tóc ướt sũng.) | 你拿着通知单去邮局取包裹。 (Mang thông báo đến bưu điện để nhận bưu kiện.) | Giữ bản site |
| 1087 | HSK9 | 雇员 | gùyuán | 这家公司一多半的雇员都是年轻人。 (Hơn một nửa nhân viên của công ty này đều là người trẻ.) | 这个公司二分之三的雇员是工程师。 (Hai phần ba nhân viên của công ty này là kỹ sư.) | Giữ bản site |
| 1088 | HSK9 | 海绵 | hǎimián | 他拿起一块海绵，把桌子擦得干干净净。 (Anh ấy cầm một miếng bọt biển, lau chiếc bàn thật sạch sẽ.) | 海绵吸水。 (Một miếng bọt biển hấp thụ nước.) | Giữ bản site |
| 1089 | HSK9 | 耗 | hào | 这台旧空调特别耗电，我们打算换一台新的。 (Chiếc điều hòa cũ này đặc biệt tốn điện, chúng tôi định thay một chiếc mới.) | 运输中有一些损耗。 (Có một số mất mát trong quá trình vận chuyển.) | Giữ bản site |
| 1090 | HSK9 | 烘干 | hōnggān | 雨天衣服不容易干，她用机器把衣服烘干。 (Ngày mưa quần áo khó khô, cô ấy dùng máy sấy khô quần áo.) | 他在火旁烘干他的湿衣服。 (Anh phơi quần áo ướt bên đống lửa.) | Giữ bản site |
| 1091 | HSK9 | 滑稽 | huájī | 他讲的笑话太滑稽了，大家笑得停不下来。 (Câu chuyện cười anh ấy kể buồn cười quá, mọi người cười không ngừng được.) | 滑稽可笑。 (Thật là nực cười.) | Giữ bản site |
| 1092 | HSK9 | 晃 | huǎng | 阳光晃得他睁不开眼，只好戴上墨镜。 (Ánh nắng chói khiến anh ấy không mở nổi mắt, đành phải đeo kính râm.) | 建筑物在地震中摇晃。 (Các tòa nhà rung chuyển trong trận động đất.) | Giữ bản site |
| 1093 | HSK9 | 荒谬 | huāngmiù | 他提出的这个理由实在太荒谬了，没人相信。 (Lý do anh ta đưa ra thật sự quá vô lý, chẳng ai tin.) | 这种尝试很荒谬。 (Thật là vô nghĩa khi thử điều đó.) | Giữ bản site |
| 1094 | HSK9 | 荒唐 | huāngtáng | 你这个想法太荒唐了，根本不可能实现。 (Ý nghĩ này của bạn quá hoang đường, căn bản không thể thực hiện được.) | 你就是荒唐。 (Bạn chỉ đang buồn cười thôi.) | Giữ bản site |
| 1095 | HSK9 | 荤 | hūn | 这家饭馆有荤菜也有素菜，味道都不错。 (Nhà hàng này có cả món mặn lẫn món chay, món nào cũng ngon.) | 我被他说得七荤八素。 (Câu nói của anh ấy khiến đầu óc tôi quay cuồng.) | Giữ bản site |
| 1096 | HSK9 | 浑身 | húnshēn | 跑完五公里，他累得浑身是汗。 (Chạy xong năm cây số, anh ấy mệt đến mức toàn thân đẫm mồ hôi.) | 他浑身是债。 (Anh ta nợ nần chồng chất.) | Giữ bản site |
| 1097 | HSK9 | 胡说 | húshuō | 你别再胡说了，这件事根本不是他做的。 (Bạn đừng nói nhảm nữa, việc này căn bản không phải do anh ấy làm.) | 别胡说。 (Đừng nói nhảm.) | Giữ bản site |
| 1098 | HSK9 | 祭 | jì | 清明节时，他们在祖先的墓前祭拜。 (Vào tiết Thanh minh, họ cúng bái trước mộ tổ tiên.) | 桌子上放着很多祭品。 (Rất nhiều lễ vật được bày ra trên bàn.) | Giữ bản site |
| 1099 | HSK9 | 驾 | jià | 拿到驾照以后，他终于可以自己驾车出门了。 (Sau khi lấy được bằng lái, cuối cùng anh ấy cũng có thể tự lái xe ra ngoài.) | 没有人能凌驾于法律之上。 (Không ai đứng trên pháp luật.) | Giữ bản site |
| 1100 | HSK9 | 监视 | jiānshì | 保安坐在屏幕前，监视着大楼的每个角落。 (Bảo vệ ngồi trước màn hình, giám sát mọi ngóc ngách của tòa nhà.) | 有人在监视。 (Có ai đó đang quan sát.) | Giữ bản site |
| 1101 | HSK9 | 监狱 | jiānyù | 他因为犯罪，被关进监狱整整十年。 (Vì phạm tội, hắn bị giam trong tù suốt mười năm.) | 你去过监狱吗？ (Bạn đã bao giờ ở tù chưa?) | Giữ bản site |
| 1102 | HSK9 | 焦 | jiāo | 他没注意火候，面包的底都烤焦了。 (Anh ấy không chú ý lửa, đáy bánh mì đã bị nướng cháy.) | 考试前他焦虑不安。 (Anh ấy lo lắng trước kỳ thi.) | Giữ bản site |
| 1103 | HSK9 | 筋 | jīn | 他打球时不小心拉伤了腿上的筋。 (Khi chơi bóng, anh ấy không cẩn thận làm căng gân ở chân.) | 这座楼用了很多钢筋。 (Rất nhiều thanh thép đã đi vào tòa nhà này.) | Giữ bản site |
| 1104 | HSK9 | 精彩纷呈 | jīngcǎi-fēnchéng | 晚会上的节目精彩纷呈，观众的掌声不断。 (Các tiết mục trong buổi dạ hội đặc sắc nối tiếp nhau, tiếng vỗ tay của khán giả không ngớt.) | 晚会上节目精彩纷呈。 (Bữa tiệc đã có hết màn này đến màn khác.) | Giữ bản site |
| 1105 | HSK9 | 荆棘 | jīngjí | 山路上长满了荆棘，走起来十分困难。 (Đường núi mọc đầy bụi gai, đi lại vô cùng khó khăn.) | 山路上荆棘布道。 (Gai bao phủ con đường núi.) | Giữ bản site |
| 1106 | HSK9 | 警惕 | jǐngtì | 一人在外旅行时，要时刻警惕小偷。 (Khi đi du lịch một mình ở ngoài, phải luôn cảnh giác với kẻ trộm.) | 保持警惕。 (Giữ sắc nét.) | Giữ bản site |
| 1107 | HSK9 | 集市 | jíshì | 每逢周末，镇上的集市总是热闹非凡。 (Mỗi cuối tuần, phiên chợ trong thị trấn luôn nhộn nhịp lạ thường.) | 集市很热闹。 (Thị trường trong nước rất sôi động.) | Giữ bản site |
| 1108 | HSK9 | 棘手 | jíshǒu | 这个问题十分棘手，大家讨论了很久也没解决。 (Vấn đề này vô cùng nan giải, mọi người bàn luận rất lâu vẫn chưa giải quyết được.) | 情况很棘手。 (Tình hình thật khó khăn.) | Giữ bản site |
| 1109 | HSK9 | 迹象 | jìxiàng | 病人今天能下床走动了，这是好转的迹象。 (Hôm nay bệnh nhân đã xuống giường đi lại được, đây là dấu hiệu đang hồi phục.) | 那些都是好迹象。 (Đó là những dấu hiệu đáng khích lệ.) | Giữ bản site |
| 1110 | HSK9 | 圈 | juàn | 羊圈里养着几只羊，每天有人喂食。 (Trong chuồng cừu nuôi mấy con cừu, ngày nào cũng có người cho ăn.) | 请在这里画一个圆圈。 (Hãy vẽ một vòng tròn ở đây.) | Giữ bản site |
| 1111 | HSK9 | 沮丧 | jǔsàng | 比赛输了以后，他一个人坐着，显得很沮丧。 (Sau khi thua trận, anh ấy ngồi một mình, trông rất chán nản.) | 汤姆有点沮丧。 (Tom có ​​chút chán nản.) | Giữ bản site |
| 1112 | HSK9 | 跨 | kuà | 今年我们全家去海边跨年，看新年的日出。 (Năm nay cả nhà chúng tôi ra biển đón giao thừa, ngắm bình minh đầu năm mới.) | 你今年要去哪里跨年？ (Năm mới năm nay bạn nhìn thấy ở đâu?) | Giữ bản site |
| 1113 | HSK9 | 蜡 | là | 他用蜡把信封口封好，寄给了远方的朋友。 (Anh ấy dùng sáp niêm phong miệng phong bì rồi gửi cho người bạn ở phương xa.) | 他点着了一支蜡烛。 (Anh thắp một ngọn nến.) | Giữ bản site |
| 1114 | HSK9 | 来访 | láifǎng | 一位老朋友昨天来访，我们聊了整整一下午。 (Một người bạn cũ hôm qua đến thăm, chúng tôi trò chuyện suốt cả buổi chiều.) | 那男孩儿来访过我家。 (Cậu bé đó thường ghé vào chỗ tôi.) | Giữ bản site |
| 1115 | HSK9 | 老乡 | lǎoxiāng | 他在异乡的车站里，意外遇到了一位老乡。 (Ở ga xe nơi đất khách, anh ấy bất ngờ gặp một người đồng hương.) | 他回家看望父老乡亲。 (Anh về thăm quê hương.) | Giữ bản site |
| 1116 | HSK9 | 良 | liáng | 这家工厂生产的零件品质优良，很受客户欢迎。 (Linh kiện do nhà máy này sản xuất có chất lượng tốt, rất được khách hàng ưa chuộng.) | 张学良活了一百岁。 (Zhang Xueliang sống được một trăm tuổi.) | Giữ bản site |
| 1117 | HSK9 | 疗养 | liáoyǎng | 爷爷手术后住进疗养院，慢慢疗养身体。 (Sau ca phẫu thuật, ông nội vào viện điều dưỡng, từ từ dưỡng bệnh.) | 奶奶住在疗养院里。 (Bà nội sống ở viện dưỡng lão.) | Giữ bản site |
| 1118 | HSK9 | 裂 | liè | 冬天太冷，院子里的水管被冻裂了。 (Mùa đông quá lạnh, ống nước trong sân bị nứt vì đóng băng.) | 杯子底裂了。 (Đáy cốc bị nứt.) | Giữ bản site |
| 1119 | HSK9 | 黎明 | límíng | 黎明时分，天边渐渐亮了起来。 (Vào lúc bình minh, chân trời dần dần sáng lên.) | 他们在黎明前控制住了火势。 (Phải đến trước bình minh, họ mới kiểm soát được ngọn lửa.) | Giữ bản site |
| 1120 | HSK9 | 灵 | líng | 奶奶说这个土办法很灵，果然治好了咳嗽。 (Bà nói mẹo dân gian này rất hiệu nghiệm, quả nhiên đã chữa khỏi cơn ho.) | 这只狗很有灵性。 (Con chó này rất thông minh.) | Giữ bản site |
| 1121 | HSK9 | 灵感 | línggǎn | 画家望着窗外的雪山，突然来了灵感。 (Họa sĩ nhìn ra dãy núi tuyết ngoài cửa sổ, bỗng nhiên có cảm hứng.) | 我丢了我的灵感。 (Tôi mất cảm hứng.) | Giữ bản site |
| 1122 | HSK9 | 领会 | lǐnghuì | 听完老师的讲解，我完全领会了他的意图。 (Nghe xong phần giảng giải của thầy, tôi hoàn toàn hiểu được ý đồ của thầy.) | 我没有领会这个意义。 (Tôi không hiểu ý nghĩa của nó.) | Giữ bản site |
| 1123 | HSK9 | 灵敏 | língmǐn | 训练以后，这只警犬的嗅觉更加灵敏了。 (Sau huấn luyện, khứu giác của chú chó cảnh sát này càng nhạy bén hơn.) | 狗的嗅觉灵敏。 (Chó có khứu giác rất nhạy bén.) | Giữ bản site |
| 1124 | HSK9 | 领养 | lǐngyǎng | 他们决定领养一只流浪猫，给它一个温暖的家。 (Họ quyết định nhận nuôi một con mèo hoang, cho nó một mái nhà ấm áp.) | 如果你不能有孩子，你总能领养。 (Nếu không thể có con, bạn luôn có thể nhận con nuôi.) | Giữ bản site |
| 1125 | HSK9 | 流氓 | liúmáng | 那个流氓在街上惹事，很快被警察带走了。 (Tên lưu manh đó gây chuyện trên phố, nhanh chóng bị cảnh sát dẫn đi.) | 该名青年将少女从流氓团伙中救了出来。 (Chàng trai đã cứu cô gái khỏi một đám lưu manh.) | Giữ bản site |
| 1126 | HSK9 | 流血 | liúxuè | 他的手被玻璃划破了，流血不止，急需包扎。 (Tay anh ấy bị kính cứa rách, máu chảy không ngừng, cần băng bó gấp.) | 我在流血。 (Tôi đang chảy máu.) | Giữ bản site |
| 1127 | HSK9 | 立足 | lìzú | 经过几年的打拼，他终于在这座城市立足了。 (Sau mấy năm bươn chải, cuối cùng anh ấy cũng có chỗ đứng ở thành phố này.) | 放眼全球，立足本土。 (Suy nghĩ toàn cầu, hành động địa phương.) | Giữ bản site |
| 1128 | HSK9 | 龙头 | lóngtóu | 这家企业是行业的龙头，技术一直领先。 (Doanh nghiệp này là đơn vị dẫn đầu ngành, công nghệ luôn đi đầu.) | 水龙头在滴水。 (Vòi đang bị rò rỉ.) | Giữ bản site |
| 1129 | HSK9 | 略 | lüè | 他略一思考，便爽快地答应了我的请求。 (Anh ấy suy nghĩ một lát rồi vui vẻ đồng ý với đề nghị của tôi.) | 人民赶走了侵略者。 (Nhân dân đánh đuổi quân xâm lược.) | Giữ bản site |
| 1130 | HSK9 | 萝卜 | luóbo | 妈妈买了几根白萝卜，准备晚上炖汤喝。 (Mẹ mua mấy củ cải trắng, chuẩn bị tối nay hầm canh.) | 胡萝卜我来切吧。 (Để tôi cắt cà rốt nhé.) | Giữ bản site |
| 1131 | HSK9 | 枚 | méi | 爷爷收藏的这枚邮票，已经有上百年的历史了。 (Con tem mà ông nội sưu tầm này đã có lịch sử hơn trăm năm.) | 这枚导弹带着核弹头。 (Tên lửa này mang đầu đạn hạt nhân.) | Giữ bản site |
| 1132 | HSK9 | 闷 | mēn | 夏天的屋里又闷又热，他打开了所有窗户。 (Trong phòng vào mùa hè vừa ngột ngạt vừa nóng, anh ấy mở hết các cửa sổ.) | 他一个人在生闷气。 (Anh ấy đang hờn dỗi một mình.) | Giữ bản site |
| 1133 | HSK9 | 猛 | měng | 冬天的北风刮得真猛，吹得窗户直响。 (Gió bắc mùa đông thổi thật dữ dội, làm cửa sổ rung lên bần bật.) | 这家店的海鲜很生猛。 (Hải sản tại nhà hàng này tươi sống.) | Giữ bản site |
| 1134 | HSK9 | 蒙 | mēng | 他差一点被那个骗子蒙了，幸好朋友提醒了他。 (Anh ấy suýt bị tên lừa đảo đó lừa, may mà bạn bè đã nhắc nhở anh ấy.) | 蒙特娄的人说法语。 (Người dân ở Montréal nói tiếng Pháp.) | Giữ bản site |
| 1135 | HSK9 | 谜 | mí | 元宵节猜灯谜是孩子们最喜欢的活动。 (Đoán câu đố đèn lồng vào Tết Nguyên tiêu là hoạt động bọn trẻ thích nhất.) | 你解开谜团了吗？ (Bạn đã giải được câu đố chưa?) | Giữ bản site |
| 1136 | HSK9 | 棉花 | miánhua | 秋天到了，地里的棉花开得雪白一片。 (Mùa thu đến, bông trong ruộng nở trắng xóa một vùng.) | 有一天我买了一台棉花糖机。 (Một ngày nào đó tôi sẽ mua một chiếc máy làm kẹo bông.) | Giữ bản site |
| 1137 | HSK9 | 苗条 | miáotiao | 她身材苗条，穿什么衣服都很好看。 (Cô ấy dáng người thon thả, mặc bộ quần áo nào cũng đẹp.) | 说苗条比说瘦更有礼貌。 (Nói gầy thì lịch sự hơn là gầy.) | Giữ bản site |
| 1138 | HSK9 | 灭绝 | mièjué | 保护野生动物，就是防止它们灭绝。 (Bảo vệ động vật hoang dã chính là ngăn chúng bị tuyệt chủng.) | 这是一个濒临灭绝的物种。 (Nó là một loài có nguy cơ tuyệt chủng.) | Giữ bản site |
| 1139 | HSK9 | 迷惑 | míhuo | 他的解释不但没说清，反而让大家更迷惑了。 (Lời giải thích của anh ấy không những không làm rõ, mà còn khiến mọi người bối rối hơn.) | 汤姆迷惑不解。 (Tom vẫn còn bối rối.) | Giữ bản site |
| 1140 | HSK9 | 民营 | mínyíng | 这家民营医院服务很好，收费也很合理。 (Bệnh viện tư nhân này phục vụ rất tốt, chi phí cũng rất hợp lý.) | 难民营里住着很多孩子。 (Nhiều trẻ em sống trong trại tị nạn.) | Giữ bản site |
| 1141 | HSK9 | 磨 | mó | 他用砂纸慢慢磨平了木板的表面。 (Anh ấy dùng giấy nhám từ từ mài phẳng bề mặt tấm ván.) | 这孩子真磨人。 (Đứa trẻ này thật là một số ít.) | Giữ bản site |
| 1142 | HSK9 | 魔法 | mófǎ | 故事里的魔法让孩子们听得入了迷。 (Phép thuật trong câu chuyện khiến bọn trẻ nghe đến mê mẩn.) | 汤姆是魔法师。 (Tom là một pháp sư.) | Giữ bản site |
| 1143 | HSK9 | 魔鬼 | móguǐ | 童话里的魔鬼最后被勇敢的王子打败了。 (Con quỷ trong truyện cổ tích cuối cùng bị chàng hoàng tử dũng cảm đánh bại.) | 我在给魔鬼当辩护士。 (Tôi chỉ đang đóng vai người bào chữa cho quỷ dữ thôi.) | Giữ bản site |
| 1144 | HSK9 | 难以置信 | nányǐ-zhìxìn | 他只用了一个月就学会了游泳，真是难以置信。 (Anh ấy chỉ mất một tháng đã học bơi được, thật khó tin.) | 难以置信！ (Không thể tin được!) | Giữ bản site |
| 1145 | HSK9 | 炮 | pào | 博物馆里陈列着一门古代的大炮。 (Trong bảo tàng trưng bày một khẩu đại bác thời cổ đại.) | 过年的时候大家放鞭炮。 (Mọi người đốt pháo vào dịp năm mới.) | Giữ bản site |
| 1146 | HSK9 | 碰巧 | pèngqiǎo | 我去车站送朋友，碰巧遇到了多年不见的同学。 (Tôi ra ga tiễn bạn, tình cờ gặp lại người bạn học nhiều năm không gặp.) | 节日和考试碰巧在同一天。 (Ngày tổ chức trùng với ngày thi.) | Giữ bản site |
| 1147 | HSK9 | 膨胀 | péngzhàng | 气球吹得太大了，膨胀得快要爆炸了。 (Quả bóng bị thổi quá to, phồng lên sắp nổ tung.) | 利率和通货膨胀很高。 (Lãi suất và lạm phát ở mức cao.) | Giữ bản site |
| 1148 | HSK9 | 漂浮 | piāofú | 几片落叶漂浮在平静的湖面上。 (Mấy chiếc lá rụng trôi nổi trên mặt hồ phẳng lặng.) | 木头会漂浮。 (Gỗ nổi.) | Giữ bản site |
| 1149 | HSK9 | 疲惫 | píbèi | 忙了一整天，他回到家时已经疲惫不堪。 (Bận rộn cả ngày, khi về đến nhà anh ấy đã mệt mỏi rã rời.) | 我很疲惫。 (Tôi kiệt sức rồi.) | Giữ bản site |
| 1150 | HSK9 | 贫穷 | pínqióng | 他虽然出身贫穷，却从小就爱读书。 (Tuy xuất thân nghèo khó, anh ấy từ nhỏ đã ham đọc sách.) | 我更愿意贫穷而不是富裕。 (Tôi thà nghèo còn hơn giàu.) | Giữ bản site |
| 1151 | HSK9 | 漆 | qī | 木匠给新桌子刷了一层亮漆。 (Người thợ mộc quét một lớp sơn bóng lên chiếc bàn mới.) | 墙上的油漆开始剥离了。 (Lớp sơn trên tường bắt đầu bong tróc.) | Giữ bản site |
| 1152 | HSK9 | 卡 | qiǎ | 行李箱的拉链卡住了，怎么拉都拉不开。 (Khóa kéo của vali bị kẹt, kéo thế nào cũng không mở ra được.) | 这儿可以刷卡吗？ (Tôi có thể thanh toán bằng thẻ ở đây không?) | Giữ bản site — câu XuCup dùng 卡 âm kǎ (thẻ), sai âm của mục qiǎ (bị kẹt) |
| 1153 | HSK9 | 迁 | qiān | 为了孩子上学，他们决定迁到城里去住。 (Vì việc học của con, họ quyết định chuyển vào thành phố sống.) | 司马迁是汉朝人。 (Tư Mã Thiên sống vào thời nhà Hán.) | Giữ bản site |
| 1154 | HSK9 | 签署 | qiānshǔ | 两家公司正式签署了长期合作的协议。 (Hai công ty đã chính thức ký kết thỏa thuận hợp tác lâu dài.) | 1978年中国和日本签署了和平条约。 (Năm 1978, một hiệp ước hòa bình được ký kết giữa Nhật Bản và Trung Quốc.) | Giữ bản site |
| 1155 | HSK9 | 潜水 | qiánshuǐ | 他在海边学会了潜水，能在水下待很久。 (Anh ấy học lặn ở bãi biển, có thể ở dưới nước rất lâu.) | 你能潜水吗？ (Bạn có thể bơi dưới nước không?) | Giữ bản site |
| 1156 | HSK9 | 迁移 | qiānyí | 每年秋天，大雁都会迁移到温暖的南方。 (Mỗi năm vào mùa thu, đàn ngỗng trời đều di cư đến phương nam ấm áp.) | 燕子在迁移。 (Những con nhạn đang di cư.) | Giữ bản site |
| 1157 | HSK9 | 谴责 | qiǎnzé | 对于这种浪费行为，大家纷纷表示谴责。 (Đối với hành vi lãng phí này, mọi người đều lên tiếng chỉ trích.) | 议员受到了议会道德委员会的谴责。 (Thượng nghị sĩ đã bị ủy ban đạo đức quốc hội kiểm duyệt.) | Giữ bản site |
| 1158 | HSK9 | 欺负 | qīfu | 他在学校里受了欺负，却不敢告诉老师。 (Anh ấy bị bắt nạt ở trường nhưng không dám nói với giáo viên.) | 汤姆被欺负了。 (Tom bị bắt nạt.) | Giữ bản site |
| 1159 | HSK9 | 漆黑 | qīhēi | 那天夜里没有月亮，四周一片漆黑。 (Đêm hôm đó không có trăng, xung quanh tối đen như mực.) | 天色漆黑。 (Trời tối như mực.) | Giữ bản site |
| 1160 | HSK9 | 迄今 | qìjīn | 迄今为止，这个项目进展得非常顺利。 (Cho đến nay, dự án này tiến triển vô cùng thuận lợi.) | 迄今，一切妥当。 (Cho đến nay, rất tốt.) | Giữ bản site |
| 1161 | HSK9 | 歧视 | qíshì | 我们不能歧视任何人，要平等地对待大家。 (Chúng ta không được phân biệt đối xử với bất kỳ ai, phải đối xử bình đẳng với mọi người.) | 我不歧视人。 (Tôi không phân biệt đối xử.) | Giữ bản site |
| 1162 | HSK9 | 确凿 | quèzáo | 警方已经掌握了确凿的证据，案子很快能破。 (Cảnh sát đã nắm được chứng cứ xác thực, vụ án sẽ sớm được phá.) | 证据确凿了。 (Bằng chứng là rõ ràng.) | Giữ bản site |
| 1163 | HSK9 | 燃油 | rányóu | 出发前他检查了一下汽车的燃油，还够用。 (Trước khi xuất phát, anh ấy kiểm tra nhiên liệu của ô tô, vẫn còn đủ dùng.) | 燃油表坏了。 (Đồng hồ đo nhiên liệu bị hỏng.) | Giữ bản site |
| 1164 | HSK9 | 饶 | ráo | 孩子做错了事，连连向妈妈求饶。 (Đứa trẻ làm sai việc, liên tục xin mẹ tha thứ.) | 公主向皇帝请求饶恕。 (Công chúa cầu xin hoàng đế tha thứ.) | Giữ bản site |
| 1165 | HSK9 | 热泪盈眶 | rèlèi-yíngkuàng | 听到儿子获奖的消息，母亲激动得热泪盈眶。 (Nghe tin con trai đoạt giải, người mẹ xúc động đến trào nước mắt.) | 她热泪盈眶。 (Nước mắt tràn đầy trong mắt cô.) | Giữ bản site |
| 1166 | HSK9 | 融 | róng | 春天来了，河面上的冰慢慢融化了。 (Mùa xuân đến, băng trên mặt sông từ từ tan chảy.) | 他为人处世很圆融。 (Anh ấy hòa hợp tốt với mọi người.) | Giữ bản site |
| 1167 | HSK9 | 荣幸 | róngxìng | 能受邀参加这次活动，我感到十分荣幸。 (Được mời tham dự hoạt động lần này, tôi cảm thấy vô cùng vinh dự.) | 这是我们的荣幸。 (Đó là niềm vui của chúng tôi.) | Giữ bản site |
| 1168 | HSK9 | 润 | rùn | 雨后的空气湿润清新，让人特别舒服。 (Không khí sau mưa ẩm ướt trong lành, khiến người ta đặc biệt dễ chịu.) | 冬天要多用滋润霜。 (Sử dụng nhiều kem dưỡng ẩm vào mùa đông.) | Giữ bản site |
| 1169 | HSK9 | 桑拿 | sāngná | 他每个周末都去蒸桑拿，放松一下身体。 (Cuối tuần nào anh ấy cũng đi xông hơi để thư giãn cơ thể.) | 她喜欢去桑拿。 (Cô ấy thích đi tắm hơi.) | Giữ bản site |
| 1170 | HSK9 | 折 | shé | 风太大了，院子里的一根树枝被吹折了。 (Gió quá lớn, một cành cây trong sân bị thổi gãy.) | 打完折只要五百块。 (Sau khi giảm giá, nó chỉ còn năm trăm đô la.) | Giữ bản site — câu XuCup dùng 折 âm zhé (giảm giá), sai âm của mục shé (làm gãy) |
| 1171 | HSK9 | 绳子 | shéngzi | 他抓紧绳子，一点一点地爬上了山坡。 (Anh ấy nắm chặt sợi dây, từng chút một leo lên sườn núi.) | 他抓住了绳子。 (Anh ta bắt được sợi dây.) | Giữ bản site |
| 1172 | HSK9 | 社团 | shètuán | 开学以后，他报名参加了学校的书法社团。 (Sau khi khai giảng, anh ấy đăng ký tham gia câu lạc bộ thư pháp của trường.) | 你参加社团活动吗？ (Bạn có tham gia hoạt động cộng đồng nào không?) | Giữ bản site |
| 1173 | HSK9 | 逝世 | shìshì | 这位老科学家去年冬天安然逝世了。 (Nhà khoa học già này đã yên bình qua đời vào mùa đông năm ngoái.) | 汤姆逝世于2013年10月20日。 (Tom qua đời ngày 20 tháng 10 năm 2013.) | Giữ bản site |
| 1174 | HSK9 | 视野 | shìyě | 站在山顶上，视野开阔，整座城市尽收眼底。 (Đứng trên đỉnh núi, tầm nhìn rộng mở, cả thành phố thu vào trong tầm mắt.) | 我喜欢视野好的房子。 (Tôi muốn một căn phòng có tầm nhìn tốt.) | Giữ bản site |
| 1175 | HSK9 | 梳 | shū | 她坐在镜子前，认真地梳着自己的长发。 (Cô ấy ngồi trước gương, chăm chú chải mái tóc dài của mình.) | 梳妆台上有一面镜子。 (Có một chiếc gương trên bàn trang điểm.) | Giữ bản site |
| 1176 | HSK9 | 霜 | shuāng | 清晨，草地上结了一层薄薄的白霜。 (Sáng sớm, trên bãi cỏ đọng một lớp sương trắng mỏng.) | 冬天要多用滋润霜。 (Sử dụng nhiều kem dưỡng ẩm vào mùa đông.) | Giữ bản site |
| 1177 | HSK9 | 水滴石穿 | shuǐdī-shíchuān | 他每天坚持练字，相信水滴石穿的道理。 (Anh ấy kiên trì luyện chữ mỗi ngày, tin vào đạo lý nước chảy đá mòn.) | 水滴石穿。 (Nhỏ giọt liên tục làm mòn một hòn đá.) | Giữ bản site |
| 1178 | HSK9 | 说谎 | shuōhuǎng | 孩子说谎以后，妈妈耐心地教育了他。 (Sau khi đứa trẻ nói dối, người mẹ đã kiên nhẫn dạy bảo nó.) | 他不说谎。 (Anh ấy không nói dối.) | Giữ bản site |
| 1179 | HSK9 | 随心所欲 | suíxīnsuǒyù | 放假以后，他可以随心所欲地安排自己的时间。 (Sau khi nghỉ lễ, anh ấy có thể tùy ý sắp xếp thời gian của mình.) | 我可以随心所欲。 (Tôi có thể làm những gì tôi muốn.) | Giữ bản site |
| 1180 | HSK9 | 踏 | tà | 他踏着厚厚的积雪，一步一步走回了家。 (Anh ấy giẫm lên lớp tuyết dày, từng bước một đi về nhà.) | 我每天骑脚踏车上学。 (Tôi đạp xe đến trường mỗi ngày.) | Giữ bản site |
| 1181 | HSK9 | 糖尿病 | tángniàobìng | 叔叔患有糖尿病，平时特别注意饮食。 (Chú mắc bệnh tiểu đường, ngày thường đặc biệt chú ý ăn uống.) | 我有糖尿病。 (Tôi bị tiểu đường.) | Giữ bản site |
| 1182 | HSK9 | 腾 | téng | 开水冒着白气，热气不断地往上腾。 (Nước sôi bốc hơi trắng, hơi nóng không ngừng bốc lên trên.) | 他慢腾腾地走过来。 (Anh ta đến với tốc độ của một con ốc sên.) | Giữ bản site |
| 1183 | HSK9 | 特权 | tèquán | 在法律面前人人平等，谁都没有特权。 (Trước pháp luật mọi người đều bình đẳng, không ai có đặc quyền.) | 他享有私人教学的特权。 (Ông có đặc quyền được hưởng một nền giáo dục tư nhân.) | Giữ bản site |
| 1184 | HSK9 | 通货膨胀 | tōnghuòpéngzhàng | 通货膨胀让物价上涨，大家的生活压力变大了。 (Lạm phát khiến giá cả tăng lên, áp lực cuộc sống của mọi người lớn hơn.) | 利率和通货膨胀很高。 (Lãi suất và lạm phát ở mức cao.) | Giữ bản site |
| 1185 | HSK9 | 通宵 | tōngxiāo | 为了准备考试，他昨晚通宵复习功课。 (Để chuẩn bị cho kỳ thi, tối qua anh ấy thức suốt đêm ôn bài.) | 他通宵备考。 (Anh ấy đã dành cả đêm để ôn thi.) | Giữ bản site |
| 1186 | HSK9 | 瓦 | wǎ | 一阵大风吹过，屋顶上的几片瓦掉了下来。 (Một trận gió lớn thổi qua, mấy viên ngói trên mái nhà rơi xuống.) | 他去过博茨瓦纳。 (Anh ấy đã đến Botswana.) | Giữ bản site |
| 1187 | HSK9 | 玩耍 | wánshuǎ | 孩子们在院子里开心地玩耍，笑声不断。 (Bọn trẻ vui vẻ chơi đùa trong sân, tiếng cười không ngớt.) | 让我们玩耍吧。 (Hãy chơi.) | Giữ bản site |
| 1188 | HSK9 | 畏惧 | wèijù | 面对再大的困难，他也从来没有畏惧过。 (Đối mặt với khó khăn lớn đến đâu, anh ấy cũng chưa bao giờ sợ hãi.) | 汤姆无所畏惧。 (Tom không hề sợ hãi.) | Giữ bản site |
| 1189 | HSK9 | 稳 | wěn | 师傅开车很稳，孩子在后座上睡着了。 (Bác tài lái xe rất vững, đứa trẻ ngủ thiếp đi ở ghế sau.) | 他迈着稳健的步伐登上了山丘。 (Anh ta đang đi lên đồi với tốc độ đều đặn.) | Giữ bản site |
| 1190 | HSK9 | 蚊子 | wénzi | 夏天的蚊子特别多，晚上睡觉要挂蚊帐。 (Muỗi mùa hè đặc biệt nhiều, buổi tối ngủ phải mắc màn.) | 我恨蚊子。 (Tôi ghét muỗi.) | Giữ bản site |
| 1191 | HSK9 | 溪 | xī | 山间的小溪清澈见底，小鱼游来游去。 (Con suối nhỏ giữa núi trong vắt nhìn thấy đáy, cá nhỏ bơi qua bơi lại.) | 我们周末去平溪玩。 (Chúng tôi sẽ đến Pingxi vào cuối tuần.) | Giữ bản site |
| 1192 | HSK9 | 稀 | xī | 这片山坡上的树木稀疏，阳光照得到地面。 (Cây cối trên sườn núi này thưa thớt, ánh nắng chiếu tới được mặt đất.) | 我早上喜欢喝稀饭。 (Tôi thích cháo vào buổi sáng.) | Giữ bản site |
| 1193 | HSK9 | 虾 | xiā | 妈妈做的油焖大虾香极了，大家都爱吃。 (Món tôm lớn kho dầu mẹ làm thơm cực kỳ, mọi người đều thích ăn.) | 我想尝尝姜葱炒虾。 (Tôi muốn thử món tôm hành gừng.) | Giữ bản site |
| 1194 | HSK9 | 销 | xiāo | 过去的误会就一笔勾销吧，我们重新开始。 (Hiểu lầm trong quá khứ hãy xóa bỏ hết đi, chúng ta bắt đầu lại từ đầu.) | 他是一个推销员。 (Anh ấy là một nhân viên bán hàng.) | Giữ bản site |
| 1195 | HSK9 | 泄 | xiè | 发现煤气泄漏时，要马上开窗通风。 (Khi phát hiện khí gas rò rỉ, phải lập tức mở cửa sổ thông gió.) | 核电厂的辐射外泄了。 (Bức xạ rò rỉ từ nhà máy hạt nhân.) | Giữ bản site |
| 1196 | HSK9 | 熄灭 | xīmiè | 睡觉前，他把客厅的灯全部熄灭了。 (Trước khi đi ngủ, anh ấy tắt hết đèn trong phòng khách.) | 火熄灭了。 (Lửa đã tắt.) | Giữ bản site |
| 1197 | HSK9 | 稀少 | xīshǎo | 这种鸟数量稀少，已经被列为保护动物。 (Loài chim này số lượng rất ít, đã được xếp vào danh sách động vật cần bảo vệ.) | 那很稀少。 (Điều đó rất hiếm.) | Giữ bản site |
| 1198 | HSK9 | 靴子 | xuēzi | 冬天快到了，她想买一双暖和的靴子。 (Mùa đông sắp đến, cô ấy muốn mua một đôi ủng ấm.) | 我想买些靴子。 (Tôi muốn mua một số ủng.) | Giữ bản site |
| 1199 | HSK9 | 虚弱 | xūruò | 大病一场以后，他的身体变得十分虚弱。 (Sau một trận ốm nặng, cơ thể anh ấy trở nên rất yếu ớt.) | 我感到虚弱。 (Tôi cảm thấy yếu đuối.) | Giữ bản site |
| 1200 | HSK9 | 鸦雀无声 | yāquè-wúshēng | 老师一走进教室，里面顿时鸦雀无声。 (Thầy giáo vừa bước vào lớp, bên trong lập tức im phăng phắc.) | 突然间，鸦雀无声。 (Đột nhiên, mọi thứ rơi vào im lặng.) | Giữ bản site |
| 1201 | HSK9 | 野兽 | yěshòu | 夜里，森林深处不时传来野兽的叫声。 (Trong đêm, sâu trong rừng thỉnh thoảng vọng lại tiếng kêu của thú hoang.) | 我怕野兽。 (Tôi sợ động vật hoang dã.) | Giữ bản site |
| 1202 | HSK9 | 瘾 | yǐn | 他对咖啡上了瘾，一天不喝就难受。 (Anh ấy nghiện cà phê, một ngày không uống là thấy khó chịu.) | 去年夏天，我们在桥上看焰火看得很过瘾。 (Chúng tôi rất thích xem pháo hoa trên một cây cầu vào mùa hè năm ngoái.) | Giữ bản site |
| 1203 | HSK9 | 荧光 | yíngguāng | 孩子们挥舞着荧光棒，为台上的歌手加油。 (Bọn trẻ vẫy những cây gậy phát sáng huỳnh quang, cổ vũ cho ca sĩ trên sân khấu.) | 他一直盯着荧光屏看。 (Anh cứ nhìn chằm chằm vào màn hình.) | Giữ bản site |
| 1204 | HSK9 | 英俊 | yīngjùn | 这位年轻的演员长得英俊，演技也很好。 (Nam diễn viên trẻ này trông đẹp trai, diễn xuất cũng rất tốt.) | 他很英俊。 (Anh ấy rất đẹp trai.) | Giữ bản site |
| 1205 | HSK9 | 遗弃 | yíqì | 那座老房子被遗弃多年，院子里长满了草。 (Ngôi nhà cũ đó bị bỏ hoang nhiều năm, trong sân cỏ mọc đầy.) | 那幢房子看起来被遗弃了。 (Ngôi nhà đó có vẻ vắng vẻ.) | Giữ bản site |
| 1206 | HSK9 | 遗嘱 | yízhǔ | 老人在遗嘱里把老房子留给了小女儿。 (Ông cụ trong di chúc đã để lại ngôi nhà cũ cho cô con gái út.) | 他没立遗嘱就死了。 (Ông chết mà không để lại di chúc.) | Giữ bản site |
| 1207 | HSK9 | 油漆 | yóuqī | 他给院子的木门刷了一层新油漆。 (Anh ấy quét một lớp sơn dầu mới lên cánh cửa gỗ trong sân.) | 墙上的油漆开始剥离了。 (Lớp sơn trên tường bắt đầu bong tróc.) | Giữ bản site |
| 1208 | HSK9 | 玉 | yù | 这块玉被雕成了一朵莲花，非常精美。 (Miếng ngọc này được chạm khắc thành một bông sen, vô cùng tinh xảo.) | 玉珍是我的好朋友。 (Yuzhen là bạn tốt của tôi.) | Giữ bản site |
| 1209 | HSK9 | 源泉 | yuánquán | 书籍是知识的源泉，读得越多懂得越多。 (Sách là nguồn tri thức, càng đọc nhiều càng hiểu biết nhiều.) | 水是生命的源泉。 (Sự sống không thể tồn tại nếu không có nước.) | Giữ bản site |
| 1210 | HSK9 | 预兆 | yùzhào | 天边布满乌云，可能是暴雨来临的预兆。 (Chân trời đầy mây đen, có thể là điềm báo cơn bão sắp đến.) | 他的懒惰是他未来不好的预兆。 (Sự lười biếng của anh ấy là một dấu hiệu xấu cho tương lai.) | Giữ bản site |
| 1211 | HSK9 | 遭殃 | zāoyāng | 连日暴雨，低洼处的庄稼全都遭殃了。 (Mưa bão nhiều ngày, hoa màu ở vùng trũng thấp đều bị thiệt hại.) | 先下手为强，后下手遭殃。 (Bắt chúng trước khi chúng tóm được chúng ta.) | Giữ bản site |
| 1212 | HSK9 | 炸弹 | zhàdàn | 警方及时赶到现场，拆除了那枚炸弹。 (Cảnh sát kịp thời đến hiện trường và tháo gỡ quả bom đó.) | 这个炸弹可以炸死很多人。 (Quả bom này có thể giết chết nhiều người.) | Giữ bản site |
| 1213 | HSK9 | 站立 | zhànlì | 宝宝扶着沙发，慢慢地站立起来了。 (Em bé vịn vào ghế sofa, từ từ đứng lên.) | 汤姆站立困难。 (Tom gặp khó khăn khi đứng dậy.) | Giữ bản site |
| 1214 | HSK9 | 照耀 | zhàoyào | 清晨的阳光照耀着大地，一切都暖洋洋的。 (Ánh nắng buổi sớm chiếu rọi mặt đất, mọi thứ đều ấm áp.) | 月光在照耀著。 (Mặt trăng đang tỏa sáng.) | Giữ bản site |
| 1215 | HSK9 | 震荡 | zhèndàng | 最近股市震荡不断，投资者们都很谨慎。 (Gần đây thị trường chứng khoán liên tục biến động, các nhà đầu tư đều rất thận trọng.) | 汤姆感觉手机震荡了。 (Tom cảm thấy điện thoại của mình rung lên.) | Giữ bản site |
| 1216 | HSK9 | 震惊 | zhènjīng | 听到这个意外的消息，在场的人都震惊了。 (Nghe tin bất ngờ này, những người có mặt đều sững sờ kinh ngạc.) | 他们震惊了。 (Họ rất ngạc nhiên.) | Giữ bản site |
| 1217 | HSK9 | 纸币 | zhǐbì | 这张纸币已经很旧了，边角都磨损了。 (Tờ tiền giấy này đã rất cũ, các mép đều bị sờn rách.) | 当更多的纸币投入使用，价格就下跌了。 (Khi nhiều tiền giấy được sử dụng hơn, giá trị của nó giảm xuống.) | Giữ bản site |
| 1218 | HSK9 | 直达 | zhídá | 这趟火车直达上海，中途一站都不停。 (Chuyến tàu này chạy thẳng đến Thượng Hải, giữa đường không dừng ở ga nào.) | 地铁直达那儿。 (Tàu điện ngầm đi thẳng đến đó.) | Giữ bản site |
| 1219 | HSK9 | 致命 | zhìmìng | 被这种毒蛇咬伤，可能会是致命的。 (Bị loài rắn độc này cắn có thể gây tử vong.) | 有时候口误对政治家来说是致命的。 (Một sự lỡ lời đôi khi có thể gây tử vong cho một chính trị gia.) | Giữ bản site |
| 1220 | HSK9 | 直升机 | zhíshēngjī | 一架直升机降落在山顶，送来了救援物资。 (Một chiếc trực thăng hạ cánh trên đỉnh núi, mang theo vật tư cứu trợ.) | 他们被直升机解救。 (Họ đã được giải cứu bằng trực thăng.) | Giữ bản site |
| 1221 | HSK9 | 衷心 | zhōngxīn | 我衷心感谢大家一直以来对我的帮助。 (Tôi chân thành cảm ơn mọi người đã luôn giúp đỡ tôi.) | 我衷心感谢您。 (Tôi cảm ơn bạn bằng cả trái tim mình.) | Giữ bản site |
| 1222 | HSK9 | 筑 | zhù | 工人们正在山里筑一条通往村子的新路。 (Các công nhân đang xây một con đường mới trong núi dẫn vào làng.) | 马大为的爸爸是一位建筑师。 (Cha của Ma Dawei là một kiến ​​trúc sư.) | Giữ bản site |
| 1223 | HSK9 | 追赶 | zhuīgǎn | 他加快脚步，终于追赶上了前面的同学。 (Anh ấy bước nhanh hơn, cuối cùng cũng đuổi kịp bạn học phía trước.) | 汤姆竭尽全力追赶。 (Tom đã cố gắng hết sức để bắt kịp.) | Giữ bản site |
| 1224 | HSK9 | 蛀牙 | zhùyá | 他有很多蛀牙，医生劝他少吃糖。 (Anh ấy có nhiều răng sâu, bác sĩ khuyên anh ấy ăn ít đường thôi.) | 我蛀牙很多。 (Tôi có rất nhiều răng xấu.) | Giữ bản site |
| 1225 | HSK9 | 自称 | zìchēng | 他自称是这方面的专家，其实经验并不多。 (Anh ta tự xưng là chuyên gia trong lĩnh vực này, thực ra kinh nghiệm chẳng có bao nhiêu.) | 美国是一个自称没有社会阶层的国家。 (Nước Mỹ thích tuyên bố rằng đó là một xã hội "không giai cấp".) | Giữ bản site |
| 1226 | HSK9 | 滋润 | zīrùn | 这种面霜很滋润，冬天用正合适。 (Loại kem dưỡng này rất ẩm mượt, dùng vào mùa đông là vừa hợp.) | 冬天要多用滋润霜。 (Sử dụng nhiều kem dưỡng ẩm vào mùa đông.) | Giữ bản site |
| 1227 | HSK9 | 自私 | zìsī | 我们做事不能太自私，要多替别人着想。 (Chúng ta làm việc không được quá ích kỷ, phải nghĩ cho người khác nhiều hơn.) | 自私不是我的本意。 (Tôi không có ý ích kỷ.) | Giữ bản site |
| 1228 | HSK9 | 滋味 | zīwèi | 妈妈做的红烧肉滋味鲜美，大家都夸好。 (Món thịt kho tàu mẹ làm hương vị thơm ngon, ai cũng khen ngon.) | 它的滋味真的很好。 (Nó có vị rất ngon.) | Giữ bản site |
| 1229 | HSK9 | 祖父 | zǔfù | 我的祖父每天清晨都去公园里散步。 (Ông nội tôi mỗi sáng sớm đều ra công viên đi dạo.) | 我的祖父早起。 (Ông tôi dậy sớm.) | Giữ bản site |
| 1230 | HSK9 | 祖母 | zǔmǔ | 我的祖母年纪很大了，却坚持自己做饭。 (Bà nội tôi tuổi đã cao nhưng vẫn kiên trì tự nấu cơm.) | 我祖母很老了。 (Bà tôi đã già lắm rồi.) | Giữ bản site |

## 3. 3319 điểm XuCup không có câu ví dụ — giữ toàn bộ bản site

Đây là các mục HSK7–9 mà kho gốc chung của hai bên đều thiếu câu ví dụ; site đã được bổ sung trong lớp vá examples-plus (nay đã gộp vào file chính ở Đợt A), còn XuCup vẫn để trống cả ba trường `ex/exp/exm`. Không có gì để “tiếp thu” — tiếp thu XuCup ở các điểm này đồng nghĩa xoá câu ví dụ học viên đang thấy. Đề xuất: **Giữ bản site cho toàn bộ 3319 điểm**, không cần rà soát từng điểm.

| Cấp | Số điểm | Danh sách chữ (theo thứ tự trong kho) |
|---|---|---|
| HSK7 | 1082 | 爱戴、按理、八成、百般、败坏、半导体、办事处、办学、报案、报答、报复、抱负、包围、保鲜、保养、保重、备份、备课、本分、本钱、本色、本性、本着、便饭、变更、变故、变换、边界、变通、边远、表白、标本、标点、标记、表决、标识、标示、表态、标语、必定、别看、必将、并购、病历、并列、冰山一角、冰天雪地、并行、毕生、比试、博大精深、博学、不当、不法、不可或缺、不力、不免、部首、不约而同、不知不觉、才干、草案、草药、层出不穷、查获、成全、成心、持平、重重、抽查、抽样、传单、传言、出动、处分、出面、处事、出台、次序、存货、打发、大惊小怪、担保、单价、打消、打下手、登场、得心应手、电台、地带、低落、定律、断然、对流、多半、读物、放过、放水、方针、翻身、反问、反响、翻新、反之、法人、法则、飞船、非但、非得、非法、风度、风景线、分解、服气、负重、改观、干预、高见、更正、跟进、公办、功利、共识、公式、共同体、共性、供需、供养、光盘、关切、规章、过半、过不去、过错、过关、过境、过量、过剩、过失、过往、过问、国务院、过意不去、顾全大局、估算、海量、海运、寒带、汉服、行家、行列、行情、航天、航天员、航运、何必、喝彩、合唱、何等、合乎、合伙、黑客、黑马、黑名单、合计、何苦、何况、和平共处、合约、何止、合资、红火、红利、厚道、后世、后台、后续、划不来、划得来、怀抱、怀旧、化解、环比、欢聚、欢快、换取、欢声笑语、化身、划算、化验、花样、话语、会场、回合、回落、回味、回想、会意、护理、或多或少、活该、火候、活期、火热、火速、获悉、货运、呼应、继而、假定、家教、家境、假冒、见多识广、减负、奖杯、将就、坚果、见解、简练、减免、见识、坚实、建树、检讨、简体字、见闻、见效、坚信、简要、简易、叫板、交付、叫好、交界、交接、较量、交情、交头接耳、假使、家世、价位、加之、家族、基本功、基层、机动、极度、接二连三、接班、接班人、界定、接济、接见、接力、节气、解散、结识、结算、借条、解围、介于、解约、继父、急功近利、激化、激活、基建、基金会、急剧、即可、极力、继母、进程、精打细算、境地、惊动、精度、经度、经费、净化、竞技、精简、境界、经久不息、精练、精密、精明、境内、惊奇、精巧、警示、经受、惊天动地、境外、精细、惊险、竞相、境遇、警钟、禁区、紧缺、尽头、进修、激起、即日、即时、纪实、就餐、就此、就地、就近、酒楼、就任、就医、就职、就座、纪要、基于、急于求成、及早、激增、基准、居安思危、举报、剧变、局部、绝技、觉醒、决议、居高不下、剧目、剧情、据悉、举一反三、居于、举重、举足轻重、开场、开场白、开动、开发区、开发商、开工、开明、看管、看护、考查、考量、卡通、可不是、可乘之机、可贵、刻画、客机、刻苦、可想而知、刻意、客运、空间站、空难、空前、空想、口才、口吃、口水、口音、口子、快活、况且、苦笑、哭笑不得、苦心、拉动、来历、来之不易、老大、老字号、累计、累积、冷落、冷门、冷却、亮点、量化、两口子、亮丽、两手、亮相、两下子、连连、连年、连任、联赛、联手、连同、了结、力不从心、历程、列举、利害、理会、礼节、历来、零售、零星、离奇、力求、历时、理事、流失、流向、留心、流转、力争、励志、绿地、路段、落差、落成、落实、绿洲、路子、忙活、忙乱、满怀、漫游、美化、美满、没完没了、美学、美中不足、没准儿、门路、免不了、免除、免得、面目全非、免职、密封、民办、名次、名贵、名言、名著、民居、民生、民事、民意、迷信、没落、默默无闻、没收、目不转睛、目中无人、耐用、难得一见、男方、难怪、难关、难能可贵、难为情、内地、内行、内向、内需、内在、能耐、能人、年报、年画、女方、排查、牌照、判处、判定、旁人、盘算、片段、片子、票房、批发、评定、平房、平价、平面、平原、批判、破案、破除、破解、千变万化、前程、千方百计、前任、前台、前线、签约、起步、起草、起程、切除、切换、切记、切身、奇观、气管、气流、轻而易举、清除、情调、情怀、情结、清静、情商、请示、轻视、轻微、清新、亲和力、亲近、亲热、亲生、亲手、起跑线、奇特、求医、求证、气息、气压、全方位、全身心、取材、去除、去处、缺口、缺失、区间、取经、区区、去向、让步、人次、人格、人气、任期、人性、任性、人选、任意、认证、任职、任重道远、日程、日复一日、容许、如期、如实、入手、赛车、赛季、散落、扫除、扫兴、上半场、上报、上层、上场、伤感、商机、上任、商讨、上调、商议、商用、上游、少不了、稍后、稍稍、申办、申报、身不由己、生机、生理、声明、生命线、生怕、省事、生死、声望、生效、深化、身价、深切、深情、深入人心、申诉、身影、时而、视察、市场经济、失传、实地、试点、时段、世故、时好时坏、实话实说、视角、时空、实况、失利、适量、失落、士气、世人、时时、时事、适时、失事、实事求是、事态、失态、实体、实物、史无前例、事务所、失效、试行、事宜、示意、师长、使者、市值、师资、手动、首付、收复、受害人、受惊、收据、受理、收留、收买、首脑、首批、手艺、收支、双边、双向、睡袋、水利、水汽、水准、书记、顺差、顺从、顺理成章、顺路、顺其自然、顺手、顺心、顺应、说不上、数一数二、舒展、司法、四方、司空见惯、四面八方、思前想后、死心、送别、算计、算盘、随即、随机、随时随地、虽说、诉苦、诉求、诉说、谈及、讨价还价、特此、特例、特质、天长地久、天平、天桥、跳动、调和、调解、条款、条例、调料、调试、提及、体面、提名、体能、停放、停业、体态、体质、通报、同比、同步、通车、同感、通告、通红、同伙、同期、通顺、通通、头号、头条、头头是道、推断、推翻、推理、推论、推算、推选、脱节、脱离、脱落、脱身、突破口、突如其来、图纸、外行、外号、外向、外在、外资、完备、完毕、网点、网民、往日、完好、玩弄、晚期、万无一失、微不足道、围观、微观、危及、危急、味精、微生物、卫视、温差、温带、温度计、问候、问世、温室、温习、无比、无边无际、误差、无从、误导、无非、务工、五花八门、无可厚非、无力、物力、物流、误区、物色、务实、无所作为、无条件、无微不至、无线、无须、物证、物资、下半场、下场、下级、现成、相继、详尽、相近、向来、响亮、香料、相提并论、相通、响应、香油、相遇、相约、鲜活、先例、鲜美、先天、线条、鲜为人知、现行、小费、小康、效力、小人、下台、下调、下意识、下游、喜出望外、谢绝、写照、喜好、喜酒、洗礼、心安理得、心病、新春、幸好、星级、兴建、幸免、醒目、行使、星系、星座、新奇、心声、心事、新式、心酸、辛酸、心想事成、心眼儿、修长、休克、秀丽、秀美、休想、休养、修养、修正、喜闻乐见、息息相关、喜洋洋、选用、学识、学士、学说、学业、学子、续航、序列、许愿、须知、压倒、阳历、养生、阳性、养育、眼红、演化、烟火、演练、言论、严密、眼色、演示、验收、演习、药材、一并、议程、一成不变、疑点、一动不动、一概、一概而论、一干二净、一鼓作气、一经、一技之长、宜居、一举两得、一举一动、疑虑、一目了然、应付、迎合、应急、迎面、影像、应有尽有、引经据典、阴历、引人注目、音响、阴性、阴影、引用、印章、印证、一旁、一如既往、以身作则、一事无成、议题、一体、意图、一味、一无所有、意向、意想不到、一行、一言不发、一言一行、意志、永久、勇往直前、游船、油画、有声有色、尤为、有幸、优越、原告、远见、远近闻名、元老、园区、院士、元首、预备、越发、阅历、预告、预见、预警、遇难、运算、运作、预赛、预示、预售、预算、遇险、再度、再接再厉、在所难免、再现、杂技、杂交、杂乱无章、暂且、早年、责怪、增收、增速、增值、章程、张灯结彩、张扬、展望、占用、照办、招标、照常、照例、照料、招牌、招商、招数、照样、折合、正当、争光、整合、正能量、正气、争气、证人、正视、整数、争先恐后、争相、正月、正直、真空、真情、指标、止步、质地、直观、只管、之际、知觉、职能、志气、知识分子、指手画脚、指数、质问、直线、志向、指引、志愿、直至、终极、终究、重量级、重任、中性、中叶、重用、终止、众志成城、重中之重、周密、周岁、周折、周转、转播、专长、专程、转化、传记、专卖、专人、转折、转折点、住处、主打、住户、助力、主力、准则、着力、着落、着实、主人公、注视、注释、主体、主页、子弟、自发、自费、自负、自理、资历、自满、自然而然、资深、自始至终、自首、字体、自卫、字眼、自以为是、自责、资质、资助、自尊、总而言之、走过场、足不出户、尊贵、尊严、作对、作风、作客、作料、坐落、座谈、作息、做证、做主 |
| HSK8 | 1123 | 安置、摆动、摆设、巴结、半径、斑马线、包庇、报仇、报废、堡垒、包罗万象、宝石、报销、悲哀、卑鄙、悲惨、悲欢离合、悲痛、备忘录、卑微、备战、奔波、奔驰、奔赴、崩溃、笨重、扁、变革、变幻莫测、变迁、便携式、变形、变异、弊病、弊端、憋、别具匠心、别扭、别墅、别致、壁画、壁垒、丙、冰雹、并发症、冰棍儿、并肩、伯伯、搏斗、剥夺、伯父、拨款、伯母、剥削、博弈、不耻下问、不动产、不乏、捕获、不愧、不妙、不慎、捕食、不肖、不屑、不懈、不厌其烦、不翼而飞、不亦乐乎、不予、不折不扣、不知所措、仓促、操练、嘈杂、岔、差额、拆迁、倡导、昌盛、产权、产业链、巢穴、插曲、撤离、成家立业、承接、成品、成群结队、撤退、持之以恒、宠爱、充斥、崇敬、憧憬、丑恶、愁眉苦脸、川流不息、传媒、出访、垂头丧气、储量、出神、出征、刺耳、刺眼、从容不迫、摧残、挫败、措手不及、搭档、大纲、大公无私、大街小巷、大名鼎鼎、当机立断、倒退、大同小异、德才兼备、得益、凋谢、敌视、地势、丢三落四、东奔西走、动摇、断章取义、兑、对岸、堆积、对牛弹琴、对症下药、噩耗、恩爱、恩人、恶作剧、发呆、乏力、房地产、放宽、放射、放肆、放映、方圆、仿真、放置、仿制、放纵、反抗、反射、发怒、发射、发芽、发源、废弃、废寝忘食、份额、吩咐、峰回路转、凤毛麟角、分裂、副本、俯视、敷衍、改装、钢铁、干劲、干枯、感悟、高傲、哽咽、各抒己见、拱、工匠、恭敬、攻克、共鸣、攻势、宫廷、恭维、供应链、勾勒、够呛、光辉、固化、归根到底、归于、古籍、古今中外、孤零零、孤陋寡闻、国徽、国土、姑且、害虫、夯实、憨厚、捍卫、含蓄、寒暄、号称、好歹、好胜、好似、呵、贺电、呵护、和睦、恨不得、恒星、贺信、宏观、宏伟、弘扬、吼、后盾、后顾之忧、后勤、后裔、后遗症、化肥、华丽、慌乱、慌忙、恍然大悟、唤起、幻影、华侨、哗然、划时代、化险为夷、华裔、呼唤、回避、回归、悔恨、挥霍、回馈、回升、会晤、挥舞、回忆录、会诊、忽冷忽热、婚纱、火辣辣、伙食、呼啸、忽悠、呼吁、佳节、加盟、拣、剪彩、尖端、僵化、奖赏、兼顾、僵硬、嘉年华、剪辑、兼任、兼容、尖锐、坚守、减退、奸诈、健壮、搅拌、交叉、交代、交锋、娇惯、交集、交纳、娇气、交涉、交替、侥幸、郊游、交织、家禽、佳肴、家喻户晓、夹杂、家政、嫁妆、夹子、急促、忌妒、揭、戒备、劫持、揭发、接轨、捷径、解渴、揭露、接纳、届时、揭示、接替、揭晓、忌讳、忌口、吉利、剂量、敬爱、敬而远之、井底之蛙、惊慌、惊慌失措、兢兢业业、敬礼、敬佩、敬请、惊叹、敬畏、惊心动魄、敬业、敬意、径直、敬重、劲头、急迫、寄托、揪、救死扶伤、久违、久仰、就诊、救治、吉祥物、绩效、挤压、急躁、急中生智、巨额、卷入、举措、崛起、抉择、咀嚼、军官、均衡、军舰、俊俏、举棋不定、巨人、举世瞩目、拘束、巨头、开采、开垦、开阔、开朗、开辟、开天辟地、开庭、开拓、凯旋、堪称、扛、抗衡、抗生素、抗议、抗争、侃侃而谈、勘探、刊物、可悲、刻不容缓、可耻、克隆、坑、恳切、恳求、可谓、可恶、克制、刻舟求剑、恐吓、恐龙、口岸、口碑、扣除、口径、口令、扣留、扣人心弦、口哨儿、口头禅、扣押、挎、夸大、夸夸其谈、宽泛、宽广、宽厚、宽阔、宽恕、宽松、夸耀、亏本、亏待、捆、苦恼、扩、扩充、括号、扩建、扩散、扩张、来宾、啦啦队、拉拢、揽、懒得、唠叨、劳累、劳务、乐此不疲、愣、冷淡、冷冻、冷酷、冷漠、谅解、两栖、凉爽、两翼、廉价、廉洁、恋恋不舍、怜惜、廉正、寥寥无几、利弊、历代、劣势、劣质、咧嘴、历届、拎、临床、临街、临近、利索、搂、屡、卵、乱七八糟、孪生、屡次、掠夺、屡屡、抡、伦理、啰唆、卤味、埋藏、埋伏、埋没、埋头苦干、麻辣、冒充、冒昧、马桶、媒介、勉励、面貌、庙会、弥漫、名副其实、名义、敏捷、敏锐、摩擦、抹杀、摸索、亩、墓碑、墓地、募捐、拇指、呐喊、乃至、南瓜、挠、恼火、恼羞成怒、内幕、内脏、嫩、拟、撵、年均、年轮、年迈、念念不忘、年限、年薪、拟定、拧、拧、凝固、凝结、宁静、凝聚、宁可、扭曲、扭头、扭转、农历、农民工、弄虚作假、女婿、呕吐、拍板、排斥、排行榜、徘徊、拍卖、攀登、胖乎乎、攀升、刨、佩戴、捧场、抨击、喷泉、偏爱、偏差、偏离、偏旁、偏僻、偏偏、偏向、漂流、僻静、披露、媲美、拼搏、品德、平淡、平坦、平稳、平庸、屏障、凭证、拼接、聘任、品位、品味、品行、聘用、匹配、泼冷水、扑面而来、掐、恰到好处、前辈、前赴后继、呛、抢夺、强加、强劲、强势、强行、抢眼、强硬、强占、强制、千军万马、千钧一发、前所未有、前无古人、前夕、前沿、歉意、千姿百态、憔悴、敲诈、恰如其分、器材、启迪、切磋、切割、切忌、惬意、器官、契机、器具、凄凉、启蒙、倾倒、庆典、庆贺、倾家荡产、清凉、情侣、勤工俭学、倾诉、倾销、倾斜、庆幸、情谊、侵害、勤俭、勤快、侵权、寝室、侵占、旗袍、乞求、崎岖、乞讨、丘陵、器械、启用、岂有此理、契约、旗帜、器重、七嘴八舌、取而代之、劝告、劝说、圈套、劝阻、取缔、屈服、取暖、取胜、嚷、忍耐、人品、忍心、人缘儿、日趋、日新月异、冗长、容光焕发、容貌、容器、容颜、揉、入场券、如痴如醉、弱势、弱项、如愿以偿、乳制品、散布、三番五次、三维、扫帚、嫂子、僧人、山川、伤残、商贩、上岗、商贾、伤痕、伤脑筋、尚且、伤势、山谷、尚未、上限、上瘾、山岭、山脉、善意、山寨、擅自、捎、奢侈、审、审查、审定、升华、声势、圣贤、升值、审核、审计、审理、审判、审批、深情厚谊、审视、伸缩、呻吟、伸张、慎重、奢望、屎、势必、势不可当、世代、时隔、侍候、使唤、事迹、施加、失灵、时髦、势头、施行、施压、施展、柿子、手册、受宠若惊、受挫、收割、守候、守护、受贿、收敛、授权、收视率、收缩、手腕、受益、受益匪浅、授予、守株待兔、受罪、数额、摔跤、拴、双赢、刷新、数据库、硕果、抒情、属相、属性、伺机、司令、似是而非、四通八达、四肢、怂恿、搜救、搜寻、俗称、俗话、损人利己、所属、俗语、态势、坦白、探测、坦诚、倘若、探究、坦克、探亲、探求、坦然、探望、坦言、掏腰包、疼爱、特邀、天鹅、填补、填充、天敌、天经地义、天伦之乐、甜美、跳伞、挑衅、提拔、体裁、剔除、帖子、提纲、提炼、体谅、挺拔、停泊、停顿、亭子、体魄、体贴、提心吊胆、体制、捅、同仁、同舟共济、投奔、投放、投稿、投机、偷窥、投射、投身、头衔、投降、投掷、团聚、团员、徒步、吐槽、推崇、推辞、推敲、推卸、徒劳、吞吞吐吐、拓宽、拖累、唾弃、拖欠、妥善、唾液、拓展、屠杀、土生土长、凸显、图形、外币、外汇、外援、挖掘、挽、旺季、旺盛、妄想、挽回、挽救、惋惜、唯独、慰劳、微妙、威慑、委婉、威望、慰问、威信、微型、喂养、唯有、吻合、文盲、文凭、卧铺、无偿、无敌、无动于衷、五官、五湖四海、无价之宝、无精打采、无赖、无私、屋檐、呜咽、无忧无虑、无缘、喜怒哀乐、下达、峡谷、下滑、掀、先锋、相貌、享用、仙鹤、仙女、嫌弃、掀起、削、效仿、孝敬、小品、孝顺、效益、嚣张、下属、下坠、挟持、卸任、携手、协同、卸载、协作、奚落、吸纳、心肠、新潮、新陈代谢、信贷、心甘情愿、刑法、兴奋剂、兴高采烈、幸亏、兴隆、兴盛、刑事、兴旺、形形色色、形影不离、心慌、心急如焚、心灵手巧、心胸、心血、信仰、信誉、凶恶、凶残、凶狠、凶猛、喜庆、昔日、喜糖、修补、休眠、席位、嬉笑、喜悦、宣称、宣读、喧哗、旋律、喧闹、悬念、宣誓、旋涡、宣泄、宣言、宣扬、削减、削弱、序幕、旬、巡回、巡逻、寻觅、巡视、循序渐进、勋章、旭日、徐徐、揠苗助长、掩耳盗铃、仰望、养殖、咽喉、掩护、延缓、严谨、摇摆、妖怪、摇摇欲坠、压迫、丫头、压榨、压制、压轴、夜班、业绩、夜宵、夜以继日、亦、一筹莫展、依法、依附、一晃、异口同声、易拉罐、一揽子、屹立、一毛不拔、因地制宜、应酬、应邀、引荐、引领、引擎、引人入胜、引诱、一齐、怡然自得、一声不吭、一丝不苟、一塌糊涂、依托、亿万、异想天开、抑扬顿挫、异议、依依不舍、一应俱全、抑郁症、依照、一针见血、以致、拥护、庸俗、忧愁、忧虑、优胜劣汰、悠闲、冤、怨恨、怨气、冤枉、原型、怨言、原汁原味、原装、岳父、岳母、乐谱、愚公移山、愈合、愈加、愚昧、孕妇、孕育、与日俱增、与时俱进、寓言、寓意、予以、愉悦、增产、增添、扎根、债券、债务、摘要、占卜、战场、掌舵、掌管、张贴、战术、战役、战友、召集、招揽、招募、兆头、扎实、哲理、折磨、侦查、振动、振奋、政党、整顿、征服、征集、征收、整治、争执、振兴、斟酌、振作、折射、折腾、制裁、执法、支架、指令、支配、执意、支援、制约、旨在、制止、支柱、执着、仲裁、忠诚、中途、忠心、中庸、忠于、忠贞、周旋、昼夜、拽、壮大、撞击、壮烈、专柜、庄严、庄园、庄重、专栏、专项、撰写、专制、主编、嘱咐、坠落、拙劣、捉迷藏、卓越、主题曲、嘱托、助威、主宰、兹、自负、总额、宗旨、揍、作废、左顾右盼、座右铭、作战 |
| HSK9 | 1114 | 暧昧、疤、霸道、绊脚石、版权、暴风骤雨、曝光、饱经沧桑、暴利、爆满、爆竹、背负、背面、背叛、背影、迸发、笨拙、遍布、鞭策、编程、贬低、编号、边疆、辩解、编剧、编排、辨认、边缘、辩证、贬值、编制、辫子、标榜、飙升、表述、表率、表彰、标致、比比皆是、逼近、碧绿、笔墨、避难、缤纷、秉承、秉持、病症、濒危、逼迫、避让、避暑、逼真、波动、波及、波澜、波浪、波涛、波折、补助、裁缝、裁员、采摘、残酷、草率、测定、柴油、缠绕、阐释、潮水、炒作、沉睡、称心如意、迟钝、迟缓、重组、锄、穿梭、橱窗、炊烟、矗立、触目惊心、淳朴、次品、此起彼伏、雌性、此致、璀璨、错综复杂、胆量、登顶、颠簸、颠倒黑白、跌幅、订阅、递增、逗留、陡峭、独一无二、额度、繁多、防范、防守、犯规、纺织、翻来覆去、翻天覆地、繁衍、繁杂、法制、法治、飞碟、非凡、绯闻、飞翔、风餐露宿、风吹雨打、风土人情、风雨无阻、浮动、肤浅、杠杆、港湾、高昂、高额、高潮、疙瘩、耕耘、根深蒂固、革新、歌谣、构建、构思、构想、股东、骨骼、闺女、顾名思义、过滤、过硬、谷物、海盗、海军、骇人听闻、海峡、海藻、酣畅、涵盖、汗马功劳、酣睡、浩劫、豪迈、耗时、核查、核电站、核对、荷花、鹤立鸡群、禾苗、核能、横向、河畔、赫然、核实、核桃、核武器、烘焙、轰动、洪亮、红扑扑、红润、红薯、烘托、轰炸、画册、花卉、槐树、花蕾、画龙点睛、焕发、荒诞、晃荡、皇宫、皇后、黄昏、荒凉、皇上、皇室、画蛇添足、滑梯、花纹、汇合、毁坏、辉煌、汇集、毁灭、绘声绘色、绘制、胡乱、胡闹、混淆、混浊、豁、火爆、豁出去、豁达、祸害、火箭、火炬、火焰、胡思乱想、糊涂、暨、溅、贱、煎熬、鉴别、监察、简称、间谍、肩负、桨、监管、监护、见利忘义、简陋、歼灭、见仁见智、践踏、间隙、艰险、间歇、见义勇为、鉴于、狡猾、焦急、较劲、缴纳、胶囊、礁石、脚踏实地、焦躁、矫正、架势、驾驭、架子、机舱、计策、激荡、祭奠、积淀、洁白、皆大欢喜、街坊、阶级、节俭、洁净、结晶、竭力、解剖、阶梯、解析、界限、节衣缩食、节制、肌肤、籍贯、集会、脊梁、机灵、紧凑、茎、精华、警戒、经贸、精妙、精疲力竭、精品、警犬、精神病、精髓、晶莹、精英、精益求精、精湛、纪念碑、晋级、禁忌、津津有味、进军、浸泡、紧迫、锦旗、锦上添花、晋升、紧缩、窘迫、汲取、祭祀、集思广益、激素、纠缠、讥笑、畸形、积蓄、记忆犹新、积攒、机智、集装箱、集资、绝迹、诀窍、觉悟、绝缘、角逐、鞠躬、聚焦、聚精会神、竣工、楷模、看守、靠拢、磕、苛刻、颗粒、空荡荡、空洞、空军、空隙、空虚、跨度、跨国、款待、筐、矿藏、矿产、狂欢、框架、狂热、款项、跨越、枯竭、苦尽甘来、窟窿、阔绰、苦涩、酷似、枯萎、来龙去脉、栏杆、狼狈、朗诵、栏目、滥用、涝、老伴儿、牢记、牢牢、腊月、雷同、累赘、棱角、立案、连贯、良性、连绵、连夜、莲子、潦草、疗效、理睬、里程碑、裂缝、裂痕、烈日、烈士、立法、立方米、立功、立交桥、莅临、领队、灵机一动、领军、领略、灵巧、领事、领事馆、零碎、聆听、灵通、领悟、离谱儿、礼尚往来、礼堂、立体、遛、流畅、溜达、留恋、留念、流派、留神、流逝、柳树、流淌、流域、礼仪、鲤鱼、理智、理直气壮、笼统、笼罩、隆重、笼子、缕、略微、路径、陆军、鲁莽、轮换、轮廓、论述、裸、裸露、螺丝、裸体、络绎不绝、露天、路途、炉子、麻痹、马后炮、脉络、麻木、茫然、蔓延、茂密、茂盛、矛头、麻醉、美德、没劲、眉开眼笑、煤炭、美誉、没辙、美滋滋、萌发、梦幻、猛烈、朦胧、梦寐以求、猛然、萌芽、盟友、门槛、面红耳赤、缅怀、面孔、面面俱到、腼腆、藐视、苗头、渺小、谜底、蔑视、灭亡、秘方、秘诀、迷恋、谜语、蜜月、膜、莫大、模范、莫非、蘑菇、磨合、魔力、茉莉、磨炼、莫名其妙、磨难、默契、漠然、磨损、谋害、谋划、谋求、谋取、谋生、牧场、牡丹、目睹、木匠、牧民、耐人寻味、纳闷儿、难堪、纳入、纳税、纳税人、能耗、黏、酿造、鸟巢、逆境、泥泞、泥潭、泥土、纽带、逆行、浓缩、浓郁、浓重、暖烘烘、殴打、趴、派别、派遣、螃蟹、盘旋、跑龙套、泡沫、配偶、配方、配角、胚胎、配音、配置、盆地、蓬勃、鹏程万里、碰钉子、烹调、篇幅、漂泊、飘浮、飘扬、疲倦、贫乏、瓶颈、评审、萍水相逢、评委、频频、迫害、魄力、破裂、破灭、迫使、铺路、菩萨、朴实、沏、虔诚、潜伏、呛、枪毙、牵挂、迁就、潜能、欠缺、潜入、牵涉、欠条、潜艇、牵头、迁徙、浅显、潜心、谦逊、潜移默化、潜在、牵制、翘、窍门、洽谈、锲而不舍、窃取、气愤、起哄、起劲、琴棋书画、气馁、清脆、请柬、青睐、轻蔑、青铜器、轻型、钦佩、气派、期盼、气泡、气魄、蹊跷、气势、求同存异、齐心协力、欺诈、权衡、诠释、权威、权限、权益、瘸、确诊、曲线、曲艺、趋于、曲折、驱逐、燃放、燃气、绕行、绕远儿、热潮、热腾腾、热销、热衷、荣获、溶解、荣耀、融资、柔和、软弱、软实力、瑞雪、若干、骚乱、骚扰、纱、杀毒、筛、筛查、沙龙、煽动、赏识、膳食、烧毁、杀手、设定、社会主义、涉猎、渗、深奥、深沉、盛产、生产线、胜出、牲畜、盛大、胜负、盛会、省略、盛气凌人、盛情、生疏、盛夏、盛行、生涯、盛宴、生硬、申领、神气、神情、身躯、神圣、深邃、神态、渗透、深造、涉嫌、湿地、湿润、食宿、首创、首席、赎、衰减、衰竭、衰落、衰弱、衰退、耍赖、爽、爽快、舒畅、疏导、束缚、曙光、疏忽、水产、水晶、水落石出、税收、水土、税务、水域、水涨船高、竖立、梳理、顺畅、枢纽、顺势、树梢、束手无策、疏通、输血、输液、树荫、疏远、梳子、私家车、饲料、私事、肆无忌惮、私营、私有、私自、松弛、耸立、松懈、算账、素不相识、素材、锁定、缩减、索赔、索取、缩水、琐碎、索性、缩影、诉讼、苏醒、素养、诉诸、胎儿、泰斗、痰、瘫、贪吃、淌、瘫痪、贪婪、贪污、淘、陶瓷、滔滔不绝、逃亡、陶冶、陶醉、藤蔓、特制、舔、添加剂、田间、甜蜜、跳槽、调剂、调侃、调控、眺望、跳跃、替补、贴切、替换、通畅、统筹、通俗、统统、痛心、透彻、透支、退步、颓废、退化、退回、退却、退让、退缩、突击、臀、驮、脱颖而出、椭圆、突兀、歪曲、瓦解、王国、王牌、顽固、汪洋、顽皮、晚霞、纬度、蔚蓝、未免、维权、畏缩、萎缩、违约、违章、未知数、稳固、紊乱、稳妥、瘟疫、蚊帐、稳重、污秽、武力、物美价廉、污蔑、武侠、诬陷、武装、狭隘、瑕疵、限定、相伴、相辅相成、祥和、橡胶、镶嵌、陷害、显赫、衔接、显露、显示器、纤维、显现、显性、鲜血、显眼、闲置、销毁、消遣、潇洒、萧条、肖像、辖区、狭小、狭义、狭窄、洗涤、泻、邪恶、泄漏、泄密、泄气、膝盖、稀罕、犀利、薪酬、腥、醒悟、猩猩、行政、细腻、芯片、欣慰、欣欣向荣、雄厚、胸怀、胸膛、雄伟、雄性、汹涌、胸有成竹、稀奇、锈、袖珍、熙熙攘攘、锡纸、玄、玄机、炫耀、絮叨、血脉、雪上加霜、穴位、血缘、虚构、虚幻、虚假、酗酒、虚拟、迅猛、逊色、熏陶、虚荣、沿岸、言辞、烟囱、样品、杨树、洋溢、艳丽、衍生、沿途、阎王、沿线、演绎、沿用、窑、要领、要强、耀眼、液晶、野蛮、椰子、矣、移交、遗留、遗漏、隐蔽、鹰、硬朗、营利、英明、硬盘、英勇、营造、隐含、隐患、隐瞒、银幕、殷勤、隐情、隐形、隐性、衣裳、遗体、遗忘、遗物、移植、永恒、踊跃、诱饵、邮编、有待、有的放矢、诱发、油腻、诱人、有条不紊、犹豫不决、邮政、由衷、缘分、缘故、源头、渊源、源远流长、渔船、曰、约定俗成、舆论、郁闷、渔民、熨、蕴藏、运筹帷幄、蕴含、淤泥、酝酿、陨石、晕头转向、韵味、逾期、砸、栽、栽培、载体、栽赃、赞不绝口、赞美、赞叹、赞许、赞扬、赞助、枣、造福、造价、造就、糟粕、糟蹋、贼、闸、榨、渣、蘸、绽放、涨幅、沾光、瞻仰、朝气蓬勃、朝三暮四、肇事、朝夕相处、沼泽、诈骗、眨眼、炸药、遮挡、遮盖、枕、珍藏、阵地、镇定、震动、针锋相对、正版、蒸发、症结、郑重、正宗、震撼、镇静、针灸、阵容、珍视、诊所、珍稀、阵营、真挚、珍重、治安、职称、致辞、滞后、直径、致敬、滞留、芝麻、稚嫩、质朴、智商、纸上谈兵、致使、肢体、窒息、直辖市、重创、终端、肿瘤、重型、骤然、皱纹、转达、桩、装扮、转型、转悠、转载、爪子、贮藏、著称、竹竿、追悼、追捧、追溯、追尾、追问、追逐、追踪、逐年、酌情、灼热、茁壮、诸如此类、注射、诸位、注销、逐一、铸造、驻扎、籽、自卑、资本主义、自立、自强不息、滋生、自相矛盾、资讯、自治区、纵观、纵然、纵容、纵深、综艺、走漏、走势、走私、走弯路、钻空子、钻研、祖传、足迹、祖籍、组建、阻拦、阻力、租赁、阻挠、遵循、遵照、琢磨、足智多谋、组装、祖宗 |

## 4. Cờ phụ: 371 mục nghĩa bị lặp đoạn (lỗi chung của cả hai kho)

Khi rà soát, phát hiện 371 mục có một đoạn nghĩa bị lặp nguyên văn trong cùng trường `m` (vd 祖宗： “tổ tiên; tổ tiên”). Vì nghĩa hai kho giống hệt nhau 100%, lỗi này **có ở cả hai kho** — tiếp thu XuCup không sửa được. Đây là việc dọn dẹp riêng phía site (gộp đoạn trùng, không đổi nội dung nghĩa, không ảnh hưởng tiến độ). Bảng dưới kèm sẵn gợi ý sau khi gộp để Cá duyệt nhanh:

| # | Cấp | Chữ | Pinyin | Nghĩa hiện tại | Gợi ý gộp |
|---|---|---|---|---|---|
| 1 | HSK6 | 文明 | wénmíng | văn minh; văn hóa; văn minh | văn minh; văn hóa |
| 2 | HSK7 | 办事处 | bànshìchù | văn phòng; hãng; văn phòng | văn phòng; hãng |
| 3 | HSK7 | 保卫 | bǎowèi | để bảo vệ; để bảo vệ | để bảo vệ |
| 4 | HSK7 | 变更 | biàngēng | thay đổi; thay đổi; sửa đổi | thay đổi; sửa đổi |
| 5 | HSK7 | 边界 | biānjiè | ranh giới; ranh giới | ranh giới |
| 6 | HSK7 | 标签 | biāoqiān | nhãn; nhãn; tab (máy tính) (phần tử GUI) | nhãn; tab (máy tính) (phần tử GUI) |
| 7 | HSK7 | 不当 | búdàng | không phù hợp; không đúng cách; không phù hợp | không phù hợp; không đúng cách |
| 8 | HSK7 | 不法 | bùfǎ | vô luật pháp; bất hợp pháp; bất hợp pháp | vô luật pháp; bất hợp pháp |
| 9 | HSK7 | 成心 | chéngxīn | cố ý; cố ý; có mục đích | cố ý; có mục đích |
| 10 | HSK7 | 传言 | chuányán | tin đồn; tin đồn | tin đồn |
| 11 | HSK7 | 动员 | dòngyuán | huy động; huy động | huy động |
| 12 | HSK7 | 对付 | duìfu | để xử lý; để giải quyết; để giải quyết | để xử lý; để giải quyết |
| 13 | HSK7 | 多半 | duōbàn | hầu hết; hầu hết; rất có thể | hầu hết; rất có thể |
| 14 | HSK7 | 飞船 | fēichuán | tàu vũ trụ; tàu vũ trụ; có thể điều khiển được | tàu vũ trụ; có thể điều khiển được |
| 15 | HSK7 | 过道 | guòdào | lối đi; hành lang; lối đi | lối đi; hành lang |
| 16 | HSK7 | 国民 | guómín | công dân; công dân; người dân của một quốc gia | công dân; người dân của một quốc gia |
| 17 | HSK7 | 过失 | guòshī | lỗi; lỗi; (luật) sự cẩu thả | lỗi; (luật) sự cẩu thả |
| 18 | HSK7 | 好在 | hǎozài | may mắn thay; may mắn thay | may mắn thay |
| 19 | HSK7 | 话语 | huàyǔ | từ; lời nói; lời nói | từ; lời nói |
| 20 | HSK7 | 回想 | huíxiǎng | nhớ lại ; nhớ lại ; nghĩ lại | nhớ lại; nghĩ lại |
| 21 | HSK7 | 计 | jì | để tính toán; để tính toán; đếm | để tính toán; đếm |
| 22 | HSK7 | 积 | jī | tích lũy; tích lũy; để lưu trữ | tích lũy; để lưu trữ |
| 23 | HSK7 | 继而 | jì’ér | sau đó; sau đó | sau đó |
| 24 | HSK7 | 简短 | jiǎnduǎn | ngắn gọn (tuyên bố, tóm tắt, v.v.); ngắn gọn; ngắn gọn | ngắn gọn (tuyên bố, tóm tắt, v.v.); ngắn gọn |
| 25 | HSK7 | 简练 | jiǎnliàn | ngắn gọn; ngắn gọn | ngắn gọn |
| 26 | HSK7 | 简要 | jiǎnyào | ngắn gọn; ngắn gọn | ngắn gọn |
| 27 | HSK7 | 教养 | jiàoyǎng | để giáo dục; nuôi dưỡng; nuôi dưỡng | để giáo dục; nuôi dưỡng |
| 28 | HSK7 | 界线 | jièxiàn | giới hạn; giới hạn; đường phân chia | giới hạn; đường phân chia |
| 29 | HSK7 | 精密 | jīngmì | sự chính xác; chính xác; chính xác | sự chính xác; chính xác |
| 30 | HSK7 | 精明 | jīngmíng | sắc sảo; thông minh; thông minh | sắc sảo; thông minh |
| 31 | HSK7 | 惊奇 | jīngqí | ngạc nhiên; ngạc nhiên; thắc mắc | ngạc nhiên; thắc mắc |
| 32 | HSK7 | 警示 | jǐngshì | để cảnh báo; để cảnh báo; cảnh báo | để cảnh báo; cảnh báo |
| 33 | HSK7 | 开场 | kāichǎng | bắt đầu ; để mở; bắt đầu | bắt đầu; để mở |
| 34 | HSK7 | 刻意 | kèyì | cố ý; cố ý; cố tình | cố ý; cố tình |
| 35 | HSK7 | 空想 | kōngxiǎng | mơ mộng; tưởng tượng; tưởng tượng | mơ mộng; tưởng tượng |
| 36 | HSK7 | 来年 | láinián | năm tới; năm tới | năm tới |
| 37 | HSK7 | 乐意 | lèyì | sẵn sàng làm việc gì đó; sẵn sàng làm việc gì đó; hạnh phúc khi làm điều gì đó | sẵn sàng làm việc gì đó; hạnh phúc khi làm điều gì đó |
| 38 | HSK7 | 量化 | liànghuà | định lượng; định lượng; định lượng | định lượng |
| 39 | HSK7 | 连同 | liántóng | cùng với ; cùng với | cùng với |
| 40 | HSK7 | 列举 | lièjǔ | một danh sách; liệt kê; liệt kê | một danh sách; liệt kê |
| 41 | HSK7 | 流浪 | liúlàng | trôi dạt về; đi lang thang; đi lang thang | trôi dạt về; đi lang thang |
| 42 | HSK7 | 末日 | mòrì | ngày tận thế; ngày tận thế; ngày cuối cùng | ngày tận thế; ngày cuối cùng |
| 43 | HSK7 | 能耐 | néngnai | khả năng; khả năng | khả năng |
| 44 | HSK7 | 破除 | pòchú | để loại bỏ; để loại bỏ; để thoát khỏi | để loại bỏ; để thoát khỏi |
| 45 | HSK7 | 前台 | qiántái | sân khấu; sân khấu; tiền cảnh trong chính trị, v.v. (đôi khi là derog.) | sân khấu; tiền cảnh trong chính trị, v.v. (đôi khi là derog.) |
| 46 | HSK7 | 气管 | qìguǎn | khí quản; khí quản; đường hô hấp | khí quản; đường hô hấp |
| 47 | HSK7 | 气流 | qìliú | luồng không khí; luồng không khí; dòng chảy trượt | luồng không khí; dòng chảy trượt |
| 48 | HSK7 | 情人 | qíngrén | người yêu; người yêu | người yêu |
| 49 | HSK7 | 轻视 | qīngshì | khinh thường; khinh thường; coi thường | khinh thường; coi thường |
| 50 | HSK7 | 亲和力 | qīnhélì | (cá nhân) sự ấm áp; khả năng tiếp cận; khả năng tiếp cận | (cá nhân) sự ấm áp; khả năng tiếp cận |
| 51 | HSK7 | 气息 | qìxī | hơi thở; mùi; mùi | hơi thở; mùi |
| 52 | HSK7 | 气压 | qìyā | áp suất khí quyển; áp suất khí quyển | áp suất khí quyển |
| 53 | HSK7 | 确切 | quèqiè | chắc chắn; chính xác; chính xác | chắc chắn; chính xác |
| 54 | HSK7 | 扰乱 | rǎoluàn | làm phiền; làm phiền; quấy rối | làm phiền; quấy rối |
| 55 | HSK7 | 人性 | rénxìng | bản chất con người; nhân loại; nhân loại | bản chất con người; nhân loại |
| 56 | HSK7 | 容许 | róngxǔ | cho phép; cho phép | cho phép |
| 57 | HSK7 | 如期 | rúqī | theo lịch trình; đúng giờ; đúng giờ | theo lịch trình; đúng giờ |
| 58 | HSK7 | 上游 | shàngyóu | thượng nguồn (sông); cấp trên; cấp trên | thượng nguồn (sông); cấp trên |
| 59 | HSK7 | 声明 | shēngmíng | tuyên bố; tuyên bố; tuyên bố | tuyên bố |
| 60 | HSK7 | 深切 | shēnqiè | cảm nhận sâu sắc; chân thành; chân thành | cảm nhận sâu sắc; chân thành |
| 61 | HSK7 | 使者 | shǐzhě | sứ giả; sứ giả | sứ giả |
| 62 | HSK7 | 受骗 | shòupiàn | bị lừa; được đưa vào; bị lừa | bị lừa; được đưa vào |
| 63 | HSK7 | 双向 | shuāngxiàng | hai chiều; hai chiều; tương tác | hai chiều; tương tác |
| 64 | HSK7 | 水汽 | shuǐqì | hơi nước; hơi nước; độ ẩm | hơi nước; độ ẩm |
| 65 | HSK7 | 松树 | sōngshù | cây thông; cây thông | cây thông |
| 66 | HSK7 | 虽说 | suīshuō | mặc dù; mặc dù | mặc dù |
| 67 | HSK7 | 调和 | tiáohé | hài hòa; để hòa giải; để hòa giải | hài hòa; để hòa giải |
| 68 | HSK7 | 调料 | tiáoliào | gia vị; gia vị; hương liệu | gia vị; hương liệu |
| 69 | HSK7 | 条约 | tiáoyuē | hiệp ước; hiệp ước | hiệp ước |
| 70 | HSK7 | 铁 | tiě | sắt (kim loại); vũ khí; vũ khí | sắt (kim loại); vũ khí |
| 71 | HSK7 | 提议 | tíyì | đề xuất; gợi ý; đề xuất | đề xuất; gợi ý |
| 72 | HSK7 | 通报 | tōngbào | để thông báo; thông báo; thông báo | để thông báo; thông báo |
| 73 | HSK7 | 通告 | tōnggào | thông báo; đưa ra thông báo; thông báo | thông báo; đưa ra thông báo |
| 74 | HSK7 | 推断 | tuīduàn | suy ra ; suy ra ; dự đoán | suy ra; dự đoán |
| 75 | HSK7 | 推理 | tuīlǐ | lý luận; suy luận; suy luận | lý luận; suy luận |
| 76 | HSK7 | 外在 | wàizài | bên ngoài; bên ngoài | bên ngoài |
| 77 | HSK7 | 微不足道 | wēibùzúdào | không đáng kể; không đáng kể | không đáng kể |
| 78 | HSK7 | 危及 | wēijí | gây nguy hiểm; gây nguy hiểm; một mối nguy hiểm (đối với cuộc sống, an ninh quốc gia, vv) | gây nguy hiểm; một mối nguy hiểm (đối với cuộc sống, an ninh quốc gia, vv) |
| 79 | HSK7 | 温度计 | wēndùjì | nhiệt kế; nhiệt kế | nhiệt kế |
| 80 | HSK7 | 无不 | wúbù | không thiếu; không thiếu; mọi thứ đều ở đó | không thiếu; mọi thứ đều ở đó |
| 81 | HSK7 | 五花八门 | wǔhuā-bāmén | vô số; đủ loại; đủ loại | vô số; đủ loại |
| 82 | HSK7 | 无能 | wúnéng | sự bất tài; không có khả năng; không có khả năng | sự bất tài; không có khả năng |
| 83 | HSK7 | 无情 | wúqíng | tàn nhẫn; tàn nhẫn; tàn nhẫn | tàn nhẫn |
| 84 | HSK7 | 物色 | wùsè | để tìm kiếm; để tìm kiếm ; để lựa chọn | để tìm kiếm; để lựa chọn |
| 85 | HSK7 | 香料 | xiāngliào | gia vị; hương liệu; gia vị | gia vị; hương liệu |
| 86 | HSK7 | 鲜活 | xiānhuó | sống động; sống động; (của thành phần thực phẩm) sống hoặc tươi | sống động; (của thành phần thực phẩm) sống hoặc tươi |
| 87 | HSK7 | 现行 | xiànxíng | có hiệu lực; có hiệu lực; hiện hành | có hiệu lực; hiện hành |
| 88 | HSK7 | 喜好 | xǐhào | thích ; thích ; thích hơn | thích; thích hơn |
| 89 | HSK7 | 修正 | xiūzhèng | sửa đổi; sửa đổi; để khắc phục | sửa đổi; để khắc phục |
| 90 | HSK7 | 许 | xǔ | cho phép ; cho phép; hứa | cho phép; hứa |
| 91 | HSK7 | 选民 | xuǎnmín | cử tri; khu vực bầu cử; cử tri | cử tri; khu vực bầu cử |
| 92 | HSK7 | 压倒 | yādǎo | áp đảo; để chế ngự; áp đảo | áp đảo; để chế ngự |
| 93 | HSK7 | 验 | yàn | để kiểm tra; để kiểm tra; để kiểm tra | để kiểm tra |
| 94 | HSK7 | 演变 | yǎnbiàn | để phát triển; để phát triển | để phát triển |
| 95 | HSK7 | 养育 | yǎngyù | để phía sau; nuôi dưỡng; nuôi dưỡng | để phía sau; nuôi dưỡng |
| 96 | HSK7 | 眼红 | yǎnhóng | thèm muốn; ghen tị; ghen tị | thèm muốn; ghen tị |
| 97 | HSK7 | 一连 | yìlián | liên tiếp; liên tiếp; đang chạy | liên tiếp; đang chạy |
| 98 | HSK7 | 意料 | yìliào | đoán trước ; mong đợi ; mong đợi | đoán trước; mong đợi |
| 99 | HSK7 | 音响 | yīnxiǎng | âm thanh; âm học; âm thanh | âm thanh; âm học |
| 100 | HSK7 | 引用 | yǐnyòng | trích dẫn; trích dẫn; đề nghị | trích dẫn; đề nghị |
| 101 | HSK7 | 永久 | yǒngjiǔ | vĩnh viễn; vĩnh viễn; lâu dài | vĩnh viễn; lâu dài |
| 102 | HSK7 | 院士 | yuànshì | học giả; học giả; đồng nghiệp (của một học viện) | học giả; đồng nghiệp (của một học viện) |
| 103 | HSK7 | 越过 | yuèguò | vượt qua; vượt qua; để che khoảng cách | vượt qua; để che khoảng cách |
| 104 | HSK7 | 运作 | yùnzuò | để hoạt động; hoạt động; hoạt động | để hoạt động; hoạt động |
| 105 | HSK7 | 预示 | yùshì | để chỉ ra; báo trước; báo trước | để chỉ ra; báo trước |
| 106 | HSK7 | 再度 | zàidù | một lần nữa; một lần nữa; một lần nữa | một lần nữa |
| 107 | HSK7 | 展望 | zhǎnwàng | triển vọng; triển vọng; nhìn về phía trước | triển vọng; nhìn về phía trước |
| 108 | HSK7 | 止步 | zhǐbù | dừng lại; dừng lại; không đi xa hơn | dừng lại; không đi xa hơn |
| 109 | HSK7 | 至此 | zhìcǐ | cho đến nay; cho đến nay | cho đến nay |
| 110 | HSK7 | 质问 | zhìwèn | đặt câu hỏi; đặt câu hỏi; hỏi thăm | đặt câu hỏi; hỏi thăm |
| 111 | HSK7 | 准许 | zhǔnxǔ | cho phép ; cấp ; cho phép | cho phép; cấp |
| 112 | HSK7 | 自在 | zìzai | thoải mái; thoải mái | thoải mái |
| 113 | HSK7 | 资助 | zīzhù | trợ cấp; để cung cấp hỗ trợ tài chính; trợ cấp | trợ cấp; để cung cấp hỗ trợ tài chính |
| 114 | HSK7 | 自尊 | zìzūn | lòng tự trọng; lòng tự trọng; cái tôi | lòng tự trọng; cái tôi |
| 115 | HSK7 | 总而言之 | zǒng’éryánzhī | tóm lại; trong một từ; tóm lại | tóm lại; trong một từ |
| 116 | HSK7 | 尊贵 | zūnguì | được tôn trọng; đáng kính; đáng kính | được tôn trọng; đáng kính |
| 117 | HSK7 | 作料 | zuòliao | gia vị; gia vị; col. pr. | gia vị; col. pr. |
| 118 | HSK8 | 报仇 | bàochóu | để trả thù; để trả thù | để trả thù |
| 119 | HSK8 | 宝石 | bǎoshí | đá quý; đá quý | đá quý |
| 120 | HSK8 | 备忘录 | bèiwànglù | biên bản ghi nhớ; biên bản ghi nhớ; sổ ghi nhớ | biên bản ghi nhớ; sổ ghi nhớ |
| 121 | HSK8 | 不动产 | búdòngchǎn | bất động sản; tài sản cố định; bất động sản | bất động sản; tài sản cố định |
| 122 | HSK8 | 不懈 | búxiè | không mệt mỏi; không ngừng nghỉ; không mệt mỏi | không mệt mỏi; không ngừng nghỉ |
| 123 | HSK8 | 崇敬 | chóngjìng | tôn kính; tôn kính; đánh giá cao | tôn kính; đánh giá cao |
| 124 | HSK8 | 垂头丧气 | chuítóu-sàngqì | chán nản; chán nản | chán nản |
| 125 | HSK8 | 大名鼎鼎 | dàmíng-dǐngdǐng | danh tiếng lớn; nổi tiếng; nổi tiếng | danh tiếng lớn; nổi tiếng |
| 126 | HSK8 | 仿真 | fǎngzhēn | thi đua; để mô phỏng; thi đua | thi đua; để mô phỏng |
| 127 | HSK8 | 干涉 | gānshè | can thiệp vào; can thiệp vào; sự can thiệp | can thiệp vào; sự can thiệp |
| 128 | HSK8 | 孤单 | gūdān | cô đơn; cô đơn; sự cô đơn | cô đơn; sự cô đơn |
| 129 | HSK8 | 古董 | gǔdǒng | đồ cổ; đồ cổ | đồ cổ |
| 130 | HSK8 | 国徽 | guóhuī | quốc huy; quốc huy; quốc huy của CHND Trung Hoa (một vòng tròn màu đỏ chứa năm chữ… | quốc huy; quốc huy của CHND Trung Hoa (một vòng tròn màu đỏ chứa năm chữ… |
| 131 | HSK8 | 含糊 | hánhu | mơ hồ; mơ hồ; bất cẩn | mơ hồ; bất cẩn |
| 132 | HSK8 | 捍卫 | hànwèi | để bảo vệ; ủng hộ; để bảo vệ | để bảo vệ; ủng hộ |
| 133 | HSK8 | 后盾 | hòudùn | ủng hộ; ủng hộ | ủng hộ |
| 134 | HSK8 | 奖赏 | jiǎngshǎng | phần thưởng; phần thưởng; phần thưởng | phần thưởng |
| 135 | HSK8 | 奖项 | jiǎngxiàng | phần thưởng; phần thưởng | phần thưởng |
| 136 | HSK8 | 僵硬 | jiāngyìng | cứng nhắc; cứng nhắc | cứng nhắc |
| 137 | HSK8 | 搅 | jiǎo | làm phiền; làm phiền; trộn | làm phiền; trộn |
| 138 | HSK8 | 搅拌 | jiǎobàn | khuấy động; khuấy động | khuấy động |
| 139 | HSK8 | 娇惯 | jiāoguàn | chiều chuộng; chiều chuộng; làm hỏng | chiều chuộng; làm hỏng |
| 140 | HSK8 | 家禽 | jiāqín | gia cầm; gia cầm | gia cầm |
| 141 | HSK8 | 假装 | jiǎzhuāng | giả vờ; giả vờ | giả vờ |
| 142 | HSK8 | 夹子 | jiāzi | kẹp; kẹp; cái kẹp | kẹp; cái kẹp |
| 143 | HSK8 | 嫉妒 | jídù | ghen tị; ghen tị | ghen tị |
| 144 | HSK8 | 忌妒 | jìdu | ghen tị; ghen tị | ghen tị |
| 145 | HSK8 | 劫持 | jiéchí | bắt cóc; cướp; bắt cóc | bắt cóc; cướp |
| 146 | HSK8 | 敬礼 | jìnglǐ | chào ; chào | chào |
| 147 | HSK8 | 惊吓 | jīngxià | làm sợ hãi; làm kinh hoàng; làm kinh hoàng | làm sợ hãi; làm kinh hoàng |
| 148 | HSK8 | 巨头 | jùtóu | ông trùm; ông trùm; người chơi lớn (bao gồm công ty, quốc gia, trường học, v.v.) | ông trùm; người chơi lớn (bao gồm công ty, quốc gia, trường học, v.v.) |
| 149 | HSK8 | 开采 | kāicǎi | để khai thác; để khai thác; khai thác (quặng hoặc tài nguyên khác từ mỏ) | để khai thác; khai thác (quặng hoặc tài nguyên khác từ mỏ) |
| 150 | HSK8 | 抗衡 | kànghéng | để cạnh tranh với; để cạnh tranh với; để truy cập | để cạnh tranh với; để truy cập |
| 151 | HSK8 | 恳求 | kěnqiú | cầu xin ; cầu xin ; để nài nỉ | cầu xin; để nài nỉ |
| 152 | HSK8 | 克制 | kèzhì | kiềm chế; để kiểm soát; kiềm chế | kiềm chế; để kiểm soát |
| 153 | HSK8 | 恐吓 | kǒnghè | đe dọa; đe dọa | đe dọa |
| 154 | HSK8 | 恐慌 | kǒnghuāng | hoảng loạn; hoảng loạn; hoảng loạn | hoảng loạn |
| 155 | HSK8 | 宽广 | kuānguǎng | rộng; rộng; rộng rãi | rộng; rộng rãi |
| 156 | HSK8 | 宽容 | kuānróng | khoan dung; khoan dung; chiều chuộng | khoan dung; chiều chuộng |
| 157 | HSK8 | 宽松 | kuānsōng | rộng rãi; rộng rãi; không đông đúc | rộng rãi; không đông đúc |
| 158 | HSK8 | 困惑 | kùnhuò | hoang mang; bối rối; bối rối | hoang mang; bối rối |
| 159 | HSK8 | 括号 | kuòhào | dấu ngoặc đơn; dấu ngoặc đơn | dấu ngoặc đơn |
| 160 | HSK8 | 劳累 | láolèi | mệt; kiệt sức; kiệt sức | mệt; kiệt sức |
| 161 | HSK8 | 利弊 | lìbì | ưu và nhược điểm; ưu điểm và nhược điểm; ưu điểm và nhược điểm | ưu và nhược điểm; ưu điểm và nhược điểm |
| 162 | HSK8 | 吝啬 | lìnsè | keo kiệt; nghĩa là; keo kiệt | keo kiệt; nghĩa là |
| 163 | HSK8 | 卵 | luǎn | trứng; trứng; sinh sản | trứng; sinh sản |
| 164 | HSK8 | 啰唆 | luōsuo | dài dòng; dài dòng; rắc rối | dài dòng; rắc rối |
| 165 | HSK8 | 名誉 | míngyù | danh tiếng; danh tiếng; tôn kính | danh tiếng; tôn kính |
| 166 | HSK8 | 明智 | míngzhì | hợp lý; khôn ngoan; khôn ngoan | hợp lý; khôn ngoan |
| 167 | HSK8 | 墓碑 | mùbēi | bia mộ; bia mộ | bia mộ |
| 168 | HSK8 | 攀登 | pāndēng | leo lên; để kéo mình lên; leo lên | leo lên; để kéo mình lên |
| 169 | HSK8 | 抛弃 | pāoqì | từ bỏ; vứt bỏ; từ bỏ | từ bỏ; vứt bỏ |
| 170 | HSK8 | 屁股 | pìgu | mông; đáy; mông | mông; đáy |
| 171 | HSK8 | 强盗 | qiángdào | cướp (bằng vũ lực); tên cướp; tên cướp | cướp (bằng vũ lực); tên cướp |
| 172 | HSK8 | 抢夺 | qiǎngduó | cướp bóc; cướp bóc; cưỡng bức lấy | cướp bóc; cưỡng bức lấy |
| 173 | HSK8 | 强制 | qiángzhì | buộc ; ép buộc; ép buộc | buộc; ép buộc |
| 174 | HSK8 | 奇妙 | qímiào | tuyệt vời; tuyệt vời; hấp dẫn | tuyệt vời; hấp dẫn |
| 175 | HSK8 | 倾斜 | qīngxié | nghiêng; nghiêng người; nghiêng | nghiêng; nghiêng người |
| 176 | HSK8 | 庆幸 | qìngxìng | vui mừng; vui mừng | vui mừng |
| 177 | HSK8 | 侵权 | qīnquán | xâm phạm quyền của; vi phạm; vi phạm | xâm phạm quyền của; vi phạm |
| 178 | HSK8 | 劝说 | quànshuō | thuyết phục; thuyết phục; để khuyên | thuyết phục; để khuyên |
| 179 | HSK8 | 忍耐 | rěnnài | chịu đựng; chịu đựng ; rèn luyện tính kiên nhẫn | chịu đựng; rèn luyện tính kiên nhẫn |
| 180 | HSK8 | 人造 | rénzào | nhân tạo; nhân tạo; tổng hợp | nhân tạo; tổng hợp |
| 181 | HSK8 | 容忍 | róngrěn | chịu đựng ; chịu đựng | chịu đựng |
| 182 | HSK8 | 声称 | shēngchēng | yêu cầu bồi thường ; tuyên bố; tuyên bố | yêu cầu bồi thường; tuyên bố |
| 183 | HSK8 | 声誉 | shēngyù | danh tiếng; danh tiếng | danh tiếng |
| 184 | HSK8 | 伸手 | shēnshǒu | đưa tay ra; đưa tay ra; (hình) để cầu xin | đưa tay ra; (hình) để cầu xin |
| 185 | HSK8 | 呻吟 | shēnyín | rên rỉ; rên rỉ | rên rỉ |
| 186 | HSK8 | 屎 | shǐ | phân; phân; một cái ghế đẩu | phân; một cái ghế đẩu |
| 187 | HSK8 | 尸体 | shītǐ | xác chết; xác chết | xác chết |
| 188 | HSK8 | 受挫 | shòucuò | bị cản trở; bị cản trở; sự thụt lùi | bị cản trở; sự thụt lùi |
| 189 | HSK8 | 守护 | shǒuhù | để bảo vệ; để bảo vệ | để bảo vệ |
| 190 | HSK8 | 搜寻 | sōuxún | để tìm kiếm; để tìm kiếm | để tìm kiếm |
| 191 | HSK8 | 坦诚 | tǎnchéng | thẳng thắn; thẳng thắn; giao dịch đơn giản | thẳng thắn; giao dịch đơn giản |
| 192 | HSK8 | 叹气 | tànqì | thở dài; thở dài | thở dài |
| 193 | HSK8 | 坦率 | tǎnshuài | thẳng thắn; thẳng thắn; thẳng thắn | thẳng thắn |
| 194 | HSK8 | 剃 | tì | cạo râu; làm cỏ; cạo râu | cạo râu; làm cỏ |
| 195 | HSK8 | 天堂 | tiāntáng | thiên đường; thiên đường | thiên đường |
| 196 | HSK8 | 跳伞 | tiàosǎn | nhảy dù; để bảo lãnh; nhảy dù | nhảy dù; để bảo lãnh |
| 197 | HSK8 | 偷窥 | tōukuī | nhìn trộm; nhìn trộm; đóng vai kẻ theo dõi | nhìn trộm; đóng vai kẻ theo dõi |
| 198 | HSK8 | 挖掘 | wājué | khai quật; khai quật; để đào sâu vào | khai quật; để đào sâu vào |
| 199 | HSK8 | 尾气 | wěiqì | khí thải; khí thải | khí thải |
| 200 | HSK8 | 吻 | wěn | hôn; hôn; miệng | hôn; miệng |
| 201 | HSK8 | 无偿 | wúcháng | miễn phí; không tính phí; miễn phí | miễn phí; không tính phí |
| 202 | HSK8 | 侮辱 | wǔrǔ | xúc phạm; làm nhục; làm nhục | xúc phạm; làm nhục |
| 203 | HSK8 | 无形 | wúxíng | vô hình; ảo; vô hình | vô hình; ảo |
| 204 | HSK8 | 无缘 | wúyuán | không có cơ hội; không có cách nào (làm việc gì đó); không có cơ hội | không có cơ hội; không có cách nào (làm việc gì đó) |
| 205 | HSK8 | 下令 | xiàlìng | ra lệnh; ra lệnh | ra lệnh |
| 206 | HSK8 | 先锋 | xiānfēng | tiên phong; tiên phong; tiên phong | tiên phong |
| 207 | HSK8 | 效益 | xiàoyì | lợi ích; hiệu quả; hiệu quả | lợi ích; hiệu quả |
| 208 | HSK8 | 吓人 | xiàrén | sợ hãi; đáng sợ; đáng sợ | sợ hãi; đáng sợ |
| 209 | HSK8 | 奚落 | xīluò | chế nhạo; để chế nhạo; chế nhạo | chế nhạo; để chế nhạo |
| 210 | HSK8 | 幸亏 | xìngkuī | may mắn thay; may mắn thay | may mắn thay |
| 211 | HSK8 | 兴隆 | xīnglóng | thịnh vượng; thịnh vượng; hưng thịnh | thịnh vượng; hưng thịnh |
| 212 | HSK8 | 兴旺 | xīngwàng | thịnh vượng; thịnh vượng; thịnh vượng | thịnh vượng |
| 213 | HSK8 | 形形色色 | xíngxíngsèsè | đủ loại; đủ loại; mọi loại (khác nhau) | đủ loại; mọi loại (khác nhau) |
| 214 | HSK8 | 凶残 | xiōngcán | độc ác; độc ác; tàn nhẫn | độc ác; tàn nhẫn |
| 215 | HSK8 | 宣告 | xuāngào | tuyên bố; tuyên bố | tuyên bố |
| 216 | HSK8 | 旋涡 | xuánwō | xoắn ốc; xoáy nước; xoáy nước | xoắn ốc; xoáy nước |
| 217 | HSK8 | 宣言 | xuānyán | tuyên ngôn; tuyên ngôn | tuyên ngôn |
| 218 | HSK8 | 寻 | xún | để tìm kiếm; để tìm kiếm; tìm kiếm | để tìm kiếm; tìm kiếm |
| 219 | HSK8 | 延缓 | yánhuǎn | trì hoãn; hoãn lại; trì hoãn | trì hoãn; hoãn lại |
| 220 | HSK8 | 严谨 | yánjǐn | nghiêm ngặt; nghiêm ngặt; cẩn thận | nghiêm ngặt; cẩn thận |
| 221 | HSK8 | 压迫 | yāpò | đàn áp; đàn áp; để hạn chế | đàn áp; để hạn chế |
| 222 | HSK8 | 倚 | yǐ | dựa vào; dựa vào | dựa vào |
| 223 | HSK8 | 一齐 | yìqí | đồng thời; đồng thời | đồng thời |
| 224 | HSK8 | 优雅 | yōuyǎ | duyên dáng; duyên dáng | duyên dáng |
| 225 | HSK8 | 幼稚 | yòuzhì | trẻ; trẻ con; trẻ con | trẻ; trẻ con |
| 226 | HSK8 | 原型 | yuánxíng | người mẫu; nguyên mẫu; nguyên mẫu | người mẫu; nguyên mẫu |
| 227 | HSK8 | 援助 | yuánzhù | để giúp đỡ; để hỗ trợ; để hỗ trợ | để giúp đỡ; để hỗ trợ |
| 228 | HSK8 | 宇宙 | yǔzhòu | vũ trụ; vũ trụ; không gian | vũ trụ; không gian |
| 229 | HSK8 | 兆头 | zhàotou | điềm báo; điềm báo; dấu hiệu | điềm báo; dấu hiệu |
| 230 | HSK8 | 振动 | zhèndòng | rung động; lắc ; rung động | rung động; lắc |
| 231 | HSK8 | 折射 | zhéshè | khúc xạ; khúc xạ; phản ánh (theo nghĩa bóng: thể hiện bản chất của) | khúc xạ; phản ánh (theo nghĩa bóng: thể hiện bản chất của) |
| 232 | HSK8 | 制止 | zhìzhǐ | kiềm chế; dừng lại; dừng lại | kiềm chế; dừng lại |
| 233 | HSK8 | 支柱 | zhīzhù | trụ cột; trụ cột; chống đỡ | trụ cột; chống đỡ |
| 234 | HSK8 | 庄严 | zhuāngyán | trang nghiêm; trang nghiêm; trang nghiêm | trang nghiêm |
| 235 | HSK8 | 庄重 | zhuāngzhòng | mộ; trang nghiêm; trang nghiêm | mộ; trang nghiêm |
| 236 | HSK8 | 宗旨 | zōngzhǐ | khách quan; mục tiêu; mục tiêu | khách quan; mục tiêu |
| 237 | HSK8 | 左顾右盼 | zuǒgù-yòupàn | để nhìn xung quanh; để nhìn xung quanh | để nhìn xung quanh |
| 238 | HSK8 | 作战 | zuòzhàn | chiến đấu; chiến đấu | chiến đấu |
| 239 | HSK9 | 暧昧 | àimèi | mơ hồ; mơ hồ; không phân minh | mơ hồ; không phân minh |
| 240 | HSK9 | 绊脚石 | bànjiǎoshí | trở ngại; trở ngại; ai đó cản đường bạn | trở ngại; ai đó cản đường bạn |
| 241 | HSK9 | 蹦 | bèng | nhảy; nảy lên; nhảy | nhảy; nảy lên |
| 242 | HSK9 | 辩 | biàn | tranh chấp; tranh luận; tranh luận | tranh chấp; tranh luận |
| 243 | HSK9 | 辨别 | biànbié | để phân biệt; để phân biệt; để nhận ra | để phân biệt; để nhận ra |
| 244 | HSK9 | 辫子 | biànzi | tết; bím tóc; bím tóc | tết; bím tóc |
| 245 | HSK9 | 逼迫 | bīpò | buộc ; ép buộc; ép buộc | buộc; ép buộc |
| 246 | HSK9 | 鼻涕 | bítì | chất nhầy mũi; nước mũi; nước mũi | chất nhầy mũi; nước mũi |
| 247 | HSK9 | 驳回 | bóhuí | từ chối; từ chối; ghi đè lên | từ chối; ghi đè lên |
| 248 | HSK9 | 补助 | bǔzhù | trợ cấp; trợ cấp; trợ cấp | trợ cấp |
| 249 | HSK9 | 裁缝 | cáifeng | thợ may; thợ may | thợ may |
| 250 | HSK9 | 阐释 | chǎnshì | để giải thích; để giải thích; để giải thích | để giải thích |
| 251 | HSK9 | 潮 | cháo | thủy triều; ẩm ướt; ẩm ướt | thủy triều; ẩm ướt |
| 252 | HSK9 | 毒品 | dúpǐn | ma túy; ma túy; chất độc | ma túy; chất độc |
| 253 | HSK9 | 腹 | fù | bụng; cái bụng; bụng | bụng; cái bụng |
| 254 | HSK9 | 阁楼 | gélóu | gác xép; gác xép; gác mái | gác xép; gác mái |
| 255 | HSK9 | 股东 | gǔdōng | cổ đông; cổ đông | cổ đông |
| 256 | HSK9 | 谷物 | gǔwù | ngũ cốc; ngũ cốc | ngũ cốc |
| 257 | HSK9 | 海滨 | hǎibīn | bờ biển; bờ biển | bờ biển |
| 258 | HSK9 | 海湾 | hǎiwān | vịnh; vịnh; Vịnh Ba Tư | vịnh; Vịnh Ba Tư |
| 259 | HSK9 | 涵盖 | hángài | để che đậy; bao gồm; bao gồm | để che đậy; bao gồm |
| 260 | HSK9 | 核查 | héchá | để kiểm tra; để kiểm tra | để kiểm tra |
| 261 | HSK9 | 红润 | hóngrùn | hồng hào; hồng hào; tươi như hoa | hồng hào; tươi như hoa |
| 262 | HSK9 | 贿赂 | huìlù | hối lộ; hối lộ | hối lộ |
| 263 | HSK9 | 豁达 | huòdá | lạc quan; lạc quan; hào phóng | lạc quan; hào phóng |
| 264 | HSK9 | 火焰 | huǒyàn | ngọn lửa; ngọn lửa | ngọn lửa |
| 265 | HSK9 | 鉴别 | jiànbié | để phân biệt; để phân biệt | để phân biệt |
| 266 | HSK9 | 桨 | jiǎng | mái chèo; mái chèo | mái chèo |
| 267 | HSK9 | 降临 | jiànglín | đi xuống; đến ; đến | đi xuống; đến |
| 268 | HSK9 | 监管 | jiānguǎn | giám sát; phụ trách; giám sát | giám sát; phụ trách |
| 269 | HSK9 | 简洁 | jiǎnjié | ngắn gọn; ngắn gọn; nhựa mủ | ngắn gọn; nhựa mủ |
| 270 | HSK9 | 艰险 | jiānxiǎn | khó khăn và nguy hiểm; khó khăn và nguy hiểm | khó khăn và nguy hiểm |
| 271 | HSK9 | 狡猾 | jiǎohuá | xảo quyệt; xảo quyệt; ranh mãnh | xảo quyệt; ranh mãnh |
| 272 | HSK9 | 街坊 | jiēfang | hàng xóm; hàng xóm | hàng xóm |
| 273 | HSK9 | 节俭 | jiéjiǎn | tiết kiệm; tiết kiệm | tiết kiệm |
| 274 | HSK9 | 结晶 | jiéjīng | kết tinh; kết tinh; pha lê | kết tinh; pha lê |
| 275 | HSK9 | 集会 | jíhuì | để tập hợp; cuộc họp; cuộc họp | để tập hợp; cuộc họp |
| 276 | HSK9 | 脊梁 | jǐliáng | xương sống; xương sống; Đài Loan PR. | xương sống; Đài Loan PR. |
| 277 | HSK9 | 荆棘 | jīngjí | cây tật lê và gai; bụi gai; bụi gai | cây tật lê và gai; bụi gai |
| 278 | HSK9 | 警戒 | jǐngjiè | để cảnh báo; để cảnh báo; luôn cảnh giác | để cảnh báo; luôn cảnh giác |
| 279 | HSK9 | 进攻 | jìngōng | tấn công; tấn công; tiếp tục tấn công | tấn công; tiếp tục tấn công |
| 280 | HSK9 | 精神病 | jīngshénbìng | rối loạn tâm thần; rối loạn tâm thần | rối loạn tâm thần |
| 281 | HSK9 | 紧缩 | jǐnsuō | (kinh tế) giảm bớt; cắt giảm; cắt giảm | (kinh tế) giảm bớt; cắt giảm |
| 282 | HSK9 | 集市 | jíshì | chợ; chợ; hội chợ | chợ; hội chợ |
| 283 | HSK9 | 沮丧 | jǔsàng | chán nản; chán nản; mất tinh thần | chán nản; mất tinh thần |
| 284 | HSK9 | 跨越 | kuàyuè | bước qua; bước qua | bước qua |
| 285 | HSK9 | 苦涩 | kǔsè | đắng và làm se; đau đớn; đau đớn | đắng và làm se; đau đớn |
| 286 | HSK9 | 枯萎 | kūwěi | héo ; héo úa; héo | héo; héo úa |
| 287 | HSK9 | 栏杆 | lángān | lan can; lan can | lan can |
| 288 | HSK9 | 滥用 | lànyòng | lạm dụng; lạm dụng | lạm dụng |
| 289 | HSK9 | 联盟 | liánméng | liên minh; công đoàn; liên minh | liên minh; công đoàn |
| 290 | HSK9 | 理睬 | lǐcǎi | chú ý đến ; chú ý đến | chú ý đến |
| 291 | HSK9 | 立交桥 | lìjiāoqiáo | cầu vượt; cầu vượt | cầu vượt |
| 292 | HSK9 | 黎明 | límíng | bình minh; bình minh | bình minh |
| 293 | HSK9 | 灵敏 | língmǐn | thông minh; thông minh; nhạy cảm | thông minh; nhạy cảm |
| 294 | HSK9 | 灵巧 | língqiǎo | khéo léo; nhanh nhẹn; khéo léo | khéo léo; nhanh nhẹn |
| 295 | HSK9 | 礼尚往来 | lǐshàngwǎnglái | lấy lịch sự lấy lịch sự; lấy lịch sự lấy lịch sự | lấy lịch sự lấy lịch sự |
| 296 | HSK9 | 溜达 | liūda | đi dạo; đi dạo | đi dạo |
| 297 | HSK9 | 露天 | lùtiān | ngoài trời; ngoài trời; ở ngoài trời | ngoài trời; ở ngoài trời |
| 298 | HSK9 | 露营 | lùyíng | cắm trại; cắm trại | cắm trại |
| 299 | HSK9 | 麻痹 | mábì | tê liệt; liệt; tê liệt | tê liệt; liệt |
| 300 | HSK9 | 茫然 | mángrán | trống rỗng; trống rỗng; thua lỗ | trống rỗng; thua lỗ |
| 301 | HSK9 | 蒙 | mēng | (đánh) bất tỉnh; choáng váng; choáng váng | (đánh) bất tỉnh; choáng váng |
| 302 | HSK9 | 猛烈 | měngliè | mạnh mẽ; hung bạo; mạnh mẽ | mạnh mẽ; hung bạo |
| 303 | HSK9 | 门槛 | ménkǎn | ngưỡng cửa; ngưỡng cửa; ngưỡng | ngưỡng cửa; ngưỡng |
| 304 | HSK9 | 闷热 | mēnrè | oi bức; oi bức; nóng và ngột ngạt | oi bức; nóng và ngột ngạt |
| 305 | HSK9 | 迷惑 | míhuo | để giải đố; làm bối rối; làm bối rối | để giải đố; làm bối rối |
| 306 | HSK9 | 谋划 | móuhuà | lên kế hoạch; âm mưu; âm mưu | lên kế hoạch; âm mưu |
| 307 | HSK9 | 目瞪口呆 | mùdèng-kǒudāi | (thành ngữ) chết lặng; choáng váng; choáng váng | (thành ngữ) chết lặng; choáng váng |
| 308 | HSK9 | 沐浴 | mùyù | đi tắm; đi tắm; đắm chìm | đi tắm; đắm chìm |
| 309 | HSK9 | 虐待 | nüèdài | ngược đãi; ngược đãi; lạm dụng | ngược đãi; lạm dụng |
| 310 | HSK9 | 评审 | píngshěn | để đánh giá; để đánh giá; phán xét | để đánh giá; phán xét |
| 311 | HSK9 | 迫使 | pòshǐ | buộc ; buộc | buộc |
| 312 | HSK9 | 朴实 | pǔshí | đơn giản; đơn giản; vô tội | đơn giản; vô tội |
| 313 | HSK9 | 潜伏 | qiánfú | che giấu; để che đậy; che giấu | che giấu; để che đậy |
| 314 | HSK9 | 谦逊 | qiānxùn | khiêm tốn; khiêm tốn; khiêm tốn | khiêm tốn |
| 315 | HSK9 | 迄今 | qìjīn | cho đến nay; cho đến nay; cho đến bây giờ | cho đến nay; cho đến bây giờ |
| 316 | HSK9 | 轻蔑 | qīngmiè | khinh bỉ; khinh thường; khinh thường | khinh bỉ; khinh thường |
| 317 | HSK9 | 曲线 | qūxiàn | đường cong; đường cong; gián tiếp | đường cong; gián tiếp |
| 318 | HSK9 | 驱逐 | qūzhú | trục xuất; trục xuất; sự trục xuất | trục xuất; sự trục xuất |
| 319 | HSK9 | 饶恕 | ráoshù | tha thứ; tha thứ; dự phòng | tha thứ; dự phòng |
| 320 | HSK9 | 若干 | ruògān | một số lượng hoặc số tiền nhất định; bao nhiêu?; bao nhiêu? | một số lượng hoặc số tiền nhất định; bao nhiêu? |
| 321 | HSK9 | 赏识 | shǎngshí | đánh giá cao; nhận ra giá trị của cái gì đó; đánh giá cao | đánh giá cao; nhận ra giá trị của cái gì đó |
| 322 | HSK9 | 闪烁 | shǎnshuò | lấp lánh; lấp lánh; lấp lánh | lấp lánh |
| 323 | HSK9 | 杀手 | shāshǒu | kẻ giết người; kẻ giết người; đánh người | kẻ giết người; đánh người |
| 324 | HSK9 | 设定 | shèdìng | để thiết lập; để thiết lập; để cài đặt | để thiết lập; để cài đặt |
| 325 | HSK9 | 深沉 | shēnchén | sâu; sâu; (của một người) dành riêng | sâu; (của một người) dành riêng |
| 326 | HSK9 | 牲畜 | shēngchù | vật nuôi; vật nuôi | vật nuôi |
| 327 | HSK9 | 神圣 | shénshèng | thần thánh; thần thánh; thánh thiện | thần thánh; thánh thiện |
| 328 | HSK9 | 渗透 | shèntòu | thấm vào; thấm vào; (của một sản phẩm, ý tưởng, v.v.) thâm nhập vào (trong dân số) | thấm vào; (của một sản phẩm, ý tưởng, v.v.) thâm nhập vào (trong dân số) |
| 329 | HSK9 | 说谎 | shuōhuǎng | nói dối; nói dối | nói dối |
| 330 | HSK9 | 树梢 | shùshāo | ngọn cây; ngọn cây | ngọn cây |
| 331 | HSK9 | 私自 | sīzì | riêng tư; riêng tư; bí mật | riêng tư; bí mật |
| 332 | HSK9 | 索赔 | suǒpéi | yêu cầu bồi thường; yêu cầu bồi thường thiệt hại; yêu cầu bồi thường thiệt hại | yêu cầu bồi thường; yêu cầu bồi thường thiệt hại |
| 333 | HSK9 | 淌 | tǎng | nhỏ giọt; nhỏ giọt; rơi (nước mắt) | nhỏ giọt; rơi (nước mắt) |
| 334 | HSK9 | 贪婪 | tānlán | tham lam; tham; tham lam | tham lam; tham |
| 335 | HSK9 | 特权 | tèquán | đặc quyền; đặc quyền; đặc quyền | đặc quyền |
| 336 | HSK9 | 田园 | tiányuán | lĩnh vực; nông thôn; nông thôn | lĩnh vực; nông thôn |
| 337 | HSK9 | 通宵 | tōngxiāo | suốt đêm; suốt đêm | suốt đêm |
| 338 | HSK9 | 臀 | tún | mông; hông; mông | mông; hông |
| 339 | HSK9 | 椭圆 | tuǒyuán | hình bầu dục; hình elip; hình elip | hình bầu dục; hình elip |
| 340 | HSK9 | 王国 | wángguó | vương quốc; vương quốc | vương quốc |
| 341 | HSK9 | 畏惧 | wèijù | sợ hãi; sợ hãi; điềm báo | sợ hãi; điềm báo |
| 342 | HSK9 | 稳重 | wěnzhòng | vững chắc; nghiêm trang; nghiêm trang | vững chắc; nghiêm trang |
| 343 | HSK9 | 陷 | xiàn | cạm bẫy; cạm bẫy; bị mắc kẹt | cạm bẫy; bị mắc kẹt |
| 344 | HSK9 | 显而易见 | xiǎn’éryìjiàn | rõ ràng và dễ thấy (thành ngữ); rõ ràng; rõ ràng | rõ ràng và dễ thấy (thành ngữ); rõ ràng |
| 345 | HSK9 | 橡胶 | xiàngjiāo | cao su; cao su | cao su |
| 346 | HSK9 | 陷阱 | xiànjǐng | cạm bẫy; bẫy; cạm bẫy | cạm bẫy; bẫy |
| 347 | HSK9 | 显性 | xiǎnxìng | dễ thấy; dễ thấy; Phanero- | dễ thấy; Phanero- |
| 348 | HSK9 | 洗涤 | xǐdí | rửa sạch; rửa; rửa | rửa sạch; rửa |
| 349 | HSK9 | 烟囱 | yāncōng | ống khói; ống khói; ống bếp | ống khói; ống bếp |
| 350 | HSK9 | 遗漏 | yílòu | bỏ qua; bỏ lỡ; bỏ qua | bỏ qua; bỏ lỡ |
| 351 | HSK9 | 隐蔽 | yǐnbì | che giấu; che giấu; bí mật | che giấu; bí mật |
| 352 | HSK9 | 英勇 | yīngyǒng | anh hùng; dũng cảm; dũng cảm | anh hùng; dũng cảm |
| 353 | HSK9 | 阴谋 | yīnmóu | âm mưu; âm mưu; một âm mưu | âm mưu; một âm mưu |
| 354 | HSK9 | 油腻 | yóunì | thức ăn nhiều dầu mỡ; thức ăn nhiều dầu mỡ; (thức ăn) béo ngậy | thức ăn nhiều dầu mỡ; (thức ăn) béo ngậy |
| 355 | HSK9 | 诱人 | yòurén | hấp dẫn; quyến rũ; quyến rũ | hấp dẫn; quyến rũ |
| 356 | HSK9 | 犹豫不决 | yóuyù-bùjué | do dự; do dự; dao động | do dự; dao động |
| 357 | HSK9 | 由衷 | yóuzhōng | chân thành; chân thành; không giả tạo | chân thành; không giả tạo |
| 358 | HSK9 | 赞助 | zànzhù | để hỗ trợ; để hỗ trợ; tài trợ | để hỗ trợ; tài trợ |
| 359 | HSK9 | 糟粕 | zāopò | cặn bã; cặn bã; rác | cặn bã; rác |
| 360 | HSK9 | 闸 | zhá | cống; âu tàu (trên đường thủy); cống | cống; âu tàu (trên đường thủy) |
| 361 | HSK9 | 站立 | zhànlì | đứng; đứng; trên đôi chân của một người | đứng; trên đôi chân của một người |
| 362 | HSK9 | 沼泽 | zhǎozé | đầm lầy; đầm lầy; vùng đất ngập nước | đầm lầy; vùng đất ngập nước |
| 363 | HSK9 | 质朴 | zhìpǔ | đơn giản; đơn giản; không trang điểm | đơn giản; không trang điểm |
| 364 | HSK9 | 窒息 | zhìxī | nghẹt thở; để bóp nghẹt; nghẹt thở | nghẹt thở; để bóp nghẹt |
| 365 | HSK9 | 追踪 | zhuīzōng | để theo dõi; để theo dõi; để theo dõi | để theo dõi |
| 366 | HSK9 | 注射 | zhùshè | tiêm; tiêm | tiêm |
| 367 | HSK9 | 蛀牙 | zhùyá | sâu răng; sâu răng; răng sâu | sâu răng; răng sâu |
| 368 | HSK9 | 滋润 | zīrùn | ẩm ướt; ẩm ướt; làm ẩm | ẩm ướt; làm ẩm |
| 369 | HSK9 | 走势 | zǒushì | xu hướng; xu hướng; con đường | xu hướng; con đường |
| 370 | HSK9 | 租赁 | zūlìn | cho thuê; cho thuê; thuê | cho thuê; thuê |
| 371 | HSK9 | 祖宗 | zǔzong | tổ tiên; tổ tiên | tổ tiên |
