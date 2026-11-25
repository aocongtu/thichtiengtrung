# TASK_BOARD — Bảng phiếu việc

Cập nhật lần cuối: 25/11/2026 ~12:00 JST (Cá). Trạng thái chuẩn: Chờ · Được giao · Đang làm · Chờ chấm · Đã duyệt · Đang sửa · Đã hủy.

| Mã phiếu | Việc | Người giữ | Trạng thái | Hạn / nhịp | Ghi chú · Phán quyết |
|---|---|---|---|---|---|
| JOB-001 | Sản xuất truyện HSK7: tập mẫu trước, Anh Huy duyệt mới làm hàng loạt | Cá (điều phối) | Chờ chấm | Mẫu xong → trình duyệt | Mẫu hsk7-01 XONG 25/11 ~12:20 JST: 15,6 phút, QA mọi cổng đạt, đã lên Drive + R2 — chờ Anh Huy duyệt. Ngân hàng cấp 7/8/9 chỉ có 20 truyện/cấp (không phải 30); R2 còn ~2,53GB ≈ vừa đủ 19 tập HSK7 còn lại, HSK8/9 sẽ cần anh quyết chỗ chứa |
| JOB-002 | Phủ watermark + giọng Wavenet-D cho 90 truyện HSK1–3 | Cá | Đang làm | Chạy nền liên tục | 20/90; watchdog 30 phút giữ các làn; xong tập nào kiểm chứng tập đó |
| JOB-003 | Nén video truyện quá 50MB cho XuCup + đăng bù truyện hsk5-01 ngày 25/11 | Cá | Đã xong | Hôm nay | ✅ 25/11 ~12:33 JST: nén 56,2MB → 48,5MB (watermark còn rõ), đăng bù CẢ HAI nơi (nhóm + trang cá nhân Bé Cá), đã kiểm chứng + ghi sổ |
| JOB-004 | Cập nhật lệnh chạy truyện XuCup: file quá cỡ thì tự nén rồi đăng | Cá | Đã xong | Sau JOB-003 | ✅ 25/11 ~12:31 JST: lệnh chạy đã có công thức nén + bước kiểm chứng; việc chạy mỗi ngày đã BẬT LẠI (trước đó đang tắt), lượt kế 26/11 09:30 VN (ngày HSK6) |
| JOB-005 | Dùng thử "Học từ vựng" + màn Tổng quát trên web, gửi nhận xét cho Mèo ở Đội XuCup | Cá | Chờ | Trong ngày | Đã hứa với Mèo (#219, #221) |
| JOB-006 | Dọn bài rác/trùng tuần ra mắt 18/11 + báo cáo cân nhắc tuần ra mắt | Cá | Chờ | — | 5 bài cần rà; xóa qua trình duyệt như thường lệ |
| JOB-007 | Theo dõi hạn mức Supabase (mốc 22/12/2026) | Cá | Chờ | Trước 22/12 | Cần ảnh Usage/Billing từ Anh Huy; có ảnh là điều tra ngay |
| JOB-008 | Thử việc của Tôm: việc thật ngoài tuyến chính, nộp kèm bằng chứng, Cá chấm vòng cuối | Tôm (Cá kèm) | Chờ chấm | Từ 25/11 | Qua GitHub issue #1: Tôm đã xác nhận + nộp báo cáo cấu trúc website 12:15 JST; Cá chấm **92/100** — sai đúng 1 chi tiết (nơi chứa video: HSK1–2 ở Supabase, HSK3–6 ở R2); Tôm đính chính 1 dòng trong issue là ĐẠT, đóng phiếu |
| JOB-009 | Duyệt các bài của đội đang chờ trong nhóm Facebook | Cá | Đã duyệt | Việc lặp hằng ngày | 25/11 đã duyệt READ HSK5 (1462522745968861) + READ HSK4 tồn 24/11 (1461469556074180); từ nay Cá tự duyệt, không đẩy cho Anh Huy |
| JOB-010 | Mèo tiếp nhận nhà chung: đọc Hub trong repo + xác nhận "đã nhận + đã hiểu" | Mèo | Đã xong | Từ 25/11 | ✅ Mèo xác nhận 12:32 JST 25/11 trong issue #2, tóm tắt chuẩn mô hình; Cá đã đóng dấu tiếp nhận. Đội đủ mặt trong nhà chung: Cá · Mèo · Tôm. Việc phối hợp chờ sẵn: Đợt B kho từ |
| JOB-011 | Áp Đợt B của Mèo lên web: 3 sửa pinyin câu ví dụ + dọn 371 mục lặp đoạn nghĩa ở CẢ HAI kho | Cá (Mèo kiểm tra sau) | Đang làm | Đẩy lên tối 25/11 | Cá đã DUYỆT trong issue #3 (rà độc lập: 371/371 khớp tuyệt đối, 3/3 pinyin đúng). File đã sửa + kiểm chứng xong (mỗi kho đúng 371 nghĩa + 3 pinyin thay đổi, thứ tự/khóa tiến độ nguyên vẹn, cú pháp OK) — chờ đẩy lên web tối nay (cần Anh Huy chạm duyệt 1 thẻ) |
| JOB-012 | Tôm soạn bài Facebook đầu tiên: Câu đố HSK6 khung 15:00 ngày 26/11 — Tôm soạn, Cá chấm + đăng | Tôm (Cá kèm) | Được giao | Nộp trước sáng 26/11 | Phiếu = GitHub issue #5. Cách an toàn do Anh Huy chọn 25/11: Tôm KHÔNG cầm tài khoản, chỉ nộp bản soạn trong issue; đạt ≥95 Cá đăng nguyên văn lên Trang và ghi công. Điều kiện trước: Tôm đính chính xong JOB-008 |
