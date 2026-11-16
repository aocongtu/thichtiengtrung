/**
 * ARCHITECTURE: Admin duyệt Premium chỉ trên admin.html (trang riêng).
 * Index2 không còn panel duyệt thanh toán trong khung Tài khoản.
 * File này giữ stub no-op để không phá call cũ (nếu còn), không tạo UI Admin thứ hai.
 * Backup panel cũ: BACKUP_ADMIN_ARCH_* /otter2-admin.js
 */
(function () {
  "use strict";

  /** @deprecated Use https://www.thichtiengtrung.io.vn/admin.html */
  window.otter2RefreshAdminPanel = function () {
    /* no-op: Admin UI lives on admin.html only */
  };

  window.OTTER2_ADMIN_PAGE = "admin.html";
})();
