/**
 * Otter2 safe diagnostics — no tokens/passwords.
 * window.otter2DiagLog(step, payload)
 * window.otter2DiagDump()
 */
(function () {
  "use strict";
  var MAX = 80;
  var buf = [];

  function scrub(value) {
    if (value == null) return value;
    if (typeof value === "string") {
      if (/eyJ|bearer|refresh_token|access_token|password|service_role/i.test(value)) {
        return "[redacted]";
      }
      return value.length > 500 ? value.slice(0, 500) + "…" : value;
    }
    if (Array.isArray(value)) return value.slice(0, 20).map(scrub);
    if (typeof value === "object") {
      var out = {};
      Object.keys(value).forEach(function (k) {
        if (/token|password|secret|authorization|apikey|service_role/i.test(k)) {
          out[k] = "[redacted]";
        } else {
          out[k] = scrub(value[k]);
        }
      });
      return out;
    }
    return value;
  }

  function otter2DiagLog(step, payload) {
    var entry = {
      t: new Date().toISOString(),
      step: String(step || "STEP"),
      data: scrub(payload || {}),
    };
    buf.push(entry);
    if (buf.length > MAX) buf.shift();
    try {
      console.info("[OTTER2_DIAG]", entry.step, entry.data);
    } catch (e) {}
    window.__OTTER2_DIAG__ = buf.slice();
    return entry;
  }

  function otter2DiagDump() {
    return buf.slice();
  }

  window.otter2DiagLog = otter2DiagLog;
  window.otter2DiagDump = otter2DiagDump;
  window.__OTTER2_DIAG__ = buf;
})();
