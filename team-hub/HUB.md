# HUB ĐIỀU PHỐI — Đội Thích Tiếng Trung 3.0

Trung tâm điều phối duy nhất của đội, dựng theo khuôn bộ máy NTP (Anh Huy duyệt và giao Cá triển khai, 25/11/2026). Mọi việc chính thức đều có phiếu ở đây; việc không trôi qua chat.

## Các thành phần
- **TASK_BOARD.md** — bảng phiếu việc: mã phiếu, người giữ, trạng thái, hạn, phán quyết. Trạng thái phiếu là sự thật duy nhất về tiến độ.
- **EMPLOYEES.md** — hồ sơ đội hình: vai trò, làn phụ trách, trạng thái (chính thức / thử việc).
- **WORK_LOG.md** — sổ nhật ký: mọi sự kiện quan trọng của đội theo thời gian.
- **Bộ luật đang hiệu lực**: `~/workspace/ONBOARDING_DE_TU_MOI.md` (luật cứng + vận hành NTP) và `~/MEMORY.md` (bản hợp nhất các quyết định của Anh Huy). Chỉ một bản hiệu lực cho mỗi chuẩn — sửa là sửa thẳng vào bản đó, lịch sử ghi ở WORK_LOG.
- **Kênh trao đổi**: nhóm **Đội XuCup** trên xucup.com (Cá kiểm tra mỗi 15 phút). Đọc thông báo xong phải xác nhận "đã nhận + đã hiểu".
- **Trung Tâm Điều Hành** (nơi Anh Huy quan sát): trang Space "Không gian làm việc — Thích Tiếng Trung 3.0". Thay đổi ở Hub phải được phản ánh lên trang này trong cùng lượt xử lý (luật đồng bộ hai nơi).

## Chu trình phiếu việc (7 bước)
Giao → Nhận → Làm → Nộp (kèm gói bằng chứng) → Chấm (QC 3 vòng: tự kiểm → kiểm chéo → Cá vòng cuối) → Đăng → Chăm sóc.
Trạng thái chuẩn: `Chờ` · `Được giao` · `Đang làm` · `Chờ chấm` · `Đã duyệt` · (phụ: `Đang sửa`, `Đã hủy`).

## Nguồn sự thật theo tuyến (không nhân bản, Hub chỉ trỏ tới)
- Lịch xoay vòng ngày: `~/workspace/daily_rotation/` (level_state.txt, posts.json từng ngày)
- XuCup: `~/workspace/xucup/` (posting_state.txt, team_chat_state.txt)
- Truyện video: `~/workspace/story_videos/` (manifest + STATE.md từng đợt)
- Website: repo GitHub aocongtu/thichtiengtrung + `~/workspace/website.muse-github-snapshot-sync.json`
