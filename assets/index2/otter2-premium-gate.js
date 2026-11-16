/**
 * Otter2 Premium gate — ported from index1 WHITE HAT PREMIUM GATE V2.
 * Uses window.supabase + window.currentUser (set by otter2-account.js).
 * Does not load index1. No service_role key.
 */
(function () {
  "use strict";

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
    var n = Number(level);
    if (!window.currentUser) {
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
    if (!window.currentUser) {
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
