/**
 * Otter2 Premium gate — ported from index1 WHITE HAT PREMIUM GATE V2.
 * Uses window.supabase + window.currentUser (set by otter2-account.js).
 * Does not load index1. No service_role key.
 */
(function () {
  "use strict";

  /* --- Im lặng trước tương tác đầu tiên (sửa 2026-11-17) ---
     BUG cũ: các module khác (vd otter2-vocab-roadmap draw() khi khôi phục
     cấp học đã lưu) gọi checkPremiumAccess() ngay lúc LOAD trang, khi chưa
     có bất kỳ thao tác nào của người dùng. Nhánh !currentUser khi đó mở
     form đăng nhập + alert(...) -> popup bật lên mỗi lần tải lại trang.
     Cơ chế mới: theo dõi tương tác thật đầu tiên (pointerdown / keydown /
     touchstart, capture). Trước tương tác đầu tiên, mọi lời gọi cổng bị
     chặn đều trả về false IM LẶNG (không alert, không mở form đăng nhập);
     logic cho phép (đã đăng nhập + premium / cấp free) vẫn chạy bình
     thường. Sau tương tác đầu tiên, hành vi giữ nguyên như cũ. */
  var __userInteracted = false;
  function __markInteracted() { __userInteracted = true; }
  (function () {
    var types = ["pointerdown", "keydown", "touchstart"];
    for (var i = 0; i < types.length; i++) {
      try { window.addEventListener(types[i], __markInteracted, { capture: true, passive: true }); } catch (e) {}
      try { document.addEventListener(types[i], __markInteracted, { capture: true, passive: true }); } catch (e) {}
    }
  })();
  window.__otter2HasUserInteracted = function () { return __userInteracted; };
  function __silentNow() { return !__userInteracted; }

  /* --- MỞ FREE CHỮA CHÁY (thêm 2026-11-26) ---
     Supabase bị khóa tới 5/12 nên không ai đăng nhập được: chủ web quyết
     định mở MIỄN PHÍ toàn bộ nội dung Premium cho mọi người tới HẾT ngày
     5/12/2026 giờ Việt Nam (mốc dưới = 2026-12-06T00:00:00+07:00). Sau mốc
     này hàm trả false và mọi logic cũ dưới đây chạy lại y nguyên. */
  function ttcOpenFreeNow() { return Date.now() < Date.UTC(2026, 11, 5, 17, 0, 0); }

  function ttcMembershipRowIsPremium(row, nowMs) {
    if (!row) return false;
    if (String(row.status || "") !== "active") return false;
    var now =
      typeof nowMs === "number" && isFinite(nowMs) ? nowMs : Date.now();
    var plan = String(row.plan || "");
    var endRaw = row.end_date;

    if (plan === "lifetime") {
      if (endRaw == null || endRaw === "") return true;
      var endLife = new Date(endRaw).getTime();
      return !Number.isNaN(endLife) && endLife > now;
    }

    if (endRaw == null || endRaw === "") return false;
    var end = new Date(endRaw).getTime();
    return !Number.isNaN(end) && end > now;
  }

  async function hasActiveMembership() {
    if (!window.currentUser || !window.supabase) return false;
    try {
      var res = await window.supabase
        .from("memberships")
        .select("status,plan,end_date")
        .eq("user_id", window.currentUser.id)
        .eq("status", "active")
        .limit(20);
      if (res.error) {
        console.error("Otter2 membership check:", res.error);
        return false;
      }
      var data = res.data;
      if (!data || !data.length) return false;
      var now = Date.now();
      for (var i = 0; i < data.length; i++) {
        if (ttcMembershipRowIsPremium(data[i], now)) return true;
      }
      return false;
    } catch (e) {
      console.error("Otter2 membership check:", e);
      return false;
    }
  }

  async function checkFreeTrial() {
    if (!window.currentUser || !window.supabase) {
      return { allowed: false, remaining: 0 };
    }
    try {
      var res = await window.supabase.rpc("update_free_trial");
      if (res.error) {
        console.error("Otter2 free trial RPC:", res.error);
        return { allowed: false, remaining: 0 };
      }
      var result = res.data || {};
      var remaining = Number(result.remaining_seconds || 0);
      var expired = result.is_expired === true || remaining <= 0;
      return { allowed: !expired, remaining: remaining };
    } catch (e) {
      console.error("Otter2 free trial:", e);
      return { allowed: false, remaining: 0 };
    }
  }

  async function hasPremiumAccess() {
    if (ttcOpenFreeNow()) return true; /* mở free chữa cháy: không gọi Supabase */
    if (!window.currentUser) return false;
    try {
      if (await hasActiveMembership()) return true;
    } catch (e) {
      console.error("Otter2 premium membership:", e);
    }
    try {
      var trial = await checkFreeTrial();
      return !!(trial && trial.allowed && Number(trial.remaining) > 0);
    } catch (e) {
      console.error("Otter2 premium trial:", e);
      return false;
    }
  }

  async function checkPremiumAccess(level) {
    if (ttcOpenFreeNow()) return true; /* mở free chữa cháy: không mở modal đăng nhập */
    var n = Number(level);
    if (!window.currentUser) {
      if (__silentNow()) return false; /* gọi lúc load trang: im lặng */
      if (typeof window.otter2AccountOpenLogin === "function") {
        window.otter2AccountOpenLogin();
      }
      alert(
        "🔒 Vui lòng đăng ký hoặc đăng nhập tài khoản trước.\n\n" +
          "Tài khoản miễn phí được xem từ vựng HSK 1–2."
      );
      return false;
    }
    if (n <= 2) return true;
    var allowed = await hasPremiumAccess();
    if (allowed) return true;
    if (__silentNow()) return false; /* gọi lúc load trang: im lặng */
    alert(
      "🔒 HSK " +
        n +
        " là nội dung Premium.\n\n" +
        "Tài khoản Free chỉ được xem từ vựng HSK 1–2.\n\n" +
        "Vui lòng đăng ký gói Premium để tiếp tục học."
    );
    return false;
  }

  async function checkPremiumFeature() {
    if (ttcOpenFreeNow()) return true; /* mở free chữa cháy: không mở modal đăng nhập */
    if (!window.currentUser) {
      if (__silentNow()) return false; /* gọi lúc load trang: im lặng */
      if (typeof window.otter2AccountOpenLogin === "function") {
        window.otter2AccountOpenLogin();
      }
      alert(
        "🔒 Tính năng Premium\n\n" +
          "Test và các chức năng luyện tập chỉ dành cho thành viên Premium.\n\n" +
          "Vui lòng đăng nhập hoặc đăng ký Premium."
      );
      return false;
    }
    var allowed = await hasPremiumAccess();
    if (allowed) return true;
    if (__silentNow()) return false; /* gọi lúc load trang: im lặng */
    alert(
      "💎 Tính năng Premium\n\n" +
        "Test và các chức năng luyện tập chỉ dành cho thành viên Premium.\n\n" +
        "Vui lòng đăng ký gói Premium để sử dụng."
    );
    return false;
  }

  window.ttcMembershipRowIsPremium = ttcMembershipRowIsPremium;
  window.hasActiveMembership = hasActiveMembership;
  window.checkFreeTrial = checkFreeTrial;
  window.hasPremiumAccess = hasPremiumAccess;
  window.checkPremiumAccess = checkPremiumAccess;
  window.checkPremiumFeature = checkPremiumFeature;

  window.getSupabaseClient = function () {
    return window.supabase || null;
  };
})();
