/* Otter2 theme — real engine from index1 ttc-theme-and-lookup (theme only) */
(function () {
  "use strict";
  var root = document.documentElement;
  var saved = "";
  try {
    saved = localStorage.getItem("ttc_theme_v1") || "";
  } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  function bind() {
    var themeButton =
      document.getElementById("otter2ThemeNavBtn") ||
      document.getElementById("ttcThemeButton");
    var themeMenu =
      document.getElementById("otter2ThemeMenu") ||
      document.getElementById("ttcThemeMenu");
    if (!themeButton || !themeMenu || themeButton.dataset.otter2ThemeBound === "1") return;
    themeButton.dataset.otter2ThemeBound = "1";
    themeButton.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      themeMenu.hidden = !themeMenu.hidden;
      themeButton.setAttribute("aria-expanded", String(!themeMenu.hidden));
    });
    themeMenu.addEventListener("click", function (event) {
      var key = event.target && event.target.getAttribute("data-theme");
      if (!key) return;
      if (key === "day") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", key);
      try {
        localStorage.setItem("ttc_theme_v1", key === "day" ? "" : key);
      } catch (e) {}
      themeMenu.hidden = true;
      themeButton.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("click", function (ev) {
      if (themeMenu.hidden) return;
      if (themeButton.contains(ev.target) || themeMenu.contains(ev.target)) return;
      themeMenu.hidden = true;
      themeButton.setAttribute("aria-expanded", "false");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
