/* otter2-papers.js — bộ nạp registry ĐỀ THI THẬT (window.__TTC_PAPERS__).
   Nạp lười (sau window load) các shard theo cấp để không chậm trang chủ;
   otter2-examdeep.js đọc registry tươi mỗi lần mở khu thi + tự bổ sung
   nút "Đề thật" khi registry đến muộn. */
(function () {
  window.__TTC_PAPERS__ = window.__TTC_PAPERS__ || [];
  if (window.__TTC_PAPERS_LOADER__) return;
  window.__TTC_PAPERS_LOADER__ = 1;
  var base = "assets/index2/";
  try {
    var s = document.currentScript;
    if (s && s.src) base = s.src.replace(/[^/]*$/, "");
  } catch (e) {}
  var shards = ["otter2-papers-hsk4.js", "otter2-papers-hsk6.js"];
  var started = false;
  function loadNext(i) {
    if (i >= shards.length) return;
    var el = document.createElement("script");
    el.src = base + shards[i];
    el.async = false;
    el.onload = function () { loadNext(i + 1); };
    el.onerror = function () { loadNext(i + 1); };
    document.head.appendChild(el);
  }
  function start() { if (started) return; started = true; loadNext(0); }
  if (document.readyState === "complete") start();
  else { window.addEventListener("load", start); setTimeout(start, 4000); }
})();
