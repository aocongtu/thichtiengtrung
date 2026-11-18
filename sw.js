/* ============================================================
   SERVICE WORKER — Thích Tiếng Trung 3.0 (PWA, 2026-11-19)

   CHIẾN LƯỢC BẢO THỦ (ưu tiên số 1: không bao giờ kẹt bản cũ):
   - Điều hướng / tài liệu HTML: NETWORK-FIRST. Có mạng là luôn
     nhận bản mới nhất từ máy chủ; chỉ khi mất mạng mới dùng bản
     sao đã lưu (hoặc trang báo ngoại tuyến gọn nhẹ).
   - Tài nguyên tĩnh (js/css/ảnh/font cùng nguồn): stale-while-
     revalidate trong cache CÓ PHIÊN BẢN — bản mới được tải nền
     và dùng từ lần mở sau; khi sw.js đổi VERSION, activate sẽ
     xoá sạch mọi cache cũ.
   - Chỉ chặn GET cùng nguồn, không có Range. Video/âm thanh
     (Supabase, R2 — khác nguồn, có Range) và mọi API đều đi
     thẳng ra mạng, SW không đụng vào.
   - skipWaiting + clients.claim có kiểm soát: SW mới tiếp quản
     ngay khi kích hoạt, nhưng vì HTML luôn network-first nên
     người dùng không bao giờ bị "khoá" ở phiên bản cũ.

   GỠ KHẨN CẤP: xem ~/workspace/pwa_build/RELEASE_NOTES.md
   (xoá sw.js khỏi repo + đẩy bản sw "tự huỷ", hoặc người dùng
   xoá dữ liệu trang trong trình duyệt).
   ============================================================ */
"use strict";

var VERSION = "v1";
var CACHE_STATIC = "ttc-pwa-static-" + VERSION;
var CACHE_PAGES = "ttc-pwa-pages-" + VERSION;
var KEEP = [CACHE_STATIC, CACHE_PAGES];

/* Chỉ tiền tải các tài sản PWA nhỏ để màn hình chào/khoá cài đặt
   không bao giờ thiếu icon — lỗi từng file không chặn cài SW. */
var PRECACHE = [
  "/manifest.webmanifest",
  "/icons/icon-any.svg",
  "/icons/icon-maskable.svg"
];

var OFFLINE_HTML =
  '<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8" />' +
  '<meta name="viewport" content="width=device-width, initial-scale=1" />' +
  "<title>Đang ngoại tuyến — Thích Tiếng Trung 3.0</title>" +
  "<style>body{margin:0;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;" +
  "background:#ffffff;color:#0f172a;display:flex;min-height:100vh;align-items:center;justify-content:center}" +
  ".box{max-width:340px;padding:28px 24px;text-align:center}" +
  "h1{font-size:21px;color:#be123c;margin:0 0 10px}" +
  "p{font-size:15px;line-height:1.55;color:#475569;margin:0 0 18px}" +
  "a{display:inline-block;background:#be123c;color:#fff;font-weight:700;text-decoration:none;" +
  "padding:12px 22px;border-radius:999px;font-size:15px}</style></head><body>" +
  '<div class="box"><h1>Bạn đang ngoại tuyến 🦦</h1>' +
  "<p>Kết nối mạng đang gián đoạn nên Bé chưa tải được trang mới nhất. " +
  "Kiểm tra lại Wi-Fi/dữ liệu di động rồi thử lại nhé — tiến độ học của bạn vẫn được lưu an toàn trên máy.</p>" +
  '<a href="/">Thử lại</a></div></body></html>';

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(function (cache) {
      return Promise.all(PRECACHE.map(function (url) {
        return cache.add(url).catch(function () { /* từng file lỗi: bỏ qua */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (name) {
        if (KEEP.indexOf(name) === -1) return caches.delete(name);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isStaticAsset(url) {
  return /\.(?:js|css|svg|png|jpe?g|webp|gif|ico|woff2?|ttf|webmanifest)$/i.test(url.pathname);
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  if (req.headers.get("range")) return; /* video/audio: không đụng */
  var url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return; /* Supabase/R2/API: đi thẳng */

  /* --- Điều hướng: NETWORK-FIRST --- */
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE_PAGES).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      }).catch(function () {
        return caches.open(CACHE_PAGES).then(function (cache) {
          return cache.match(req).then(function (hit) {
            if (hit) return hit;
            return cache.match("/index2.html").then(function (h2) {
              if (h2) return h2;
              return cache.match("/").then(function (h3) {
                if (h3) return h3;
                return new Response(OFFLINE_HTML, {
                  status: 200,
                  headers: { "Content-Type": "text/html; charset=utf-8" }
                });
              });
            });
          });
        });
      })
    );
    return;
  }

  /* --- Tài nguyên tĩnh: STALE-WHILE-REVALIDATE --- */
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.open(CACHE_STATIC).then(function (cache) {
        return cache.match(req).then(function (hit) {
          var network = fetch(req).then(function (res) {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          }).catch(function () { return hit || Response.error(); });
          return hit || network;
        });
      })
    );
    return;
  }

  /* Mọi GET cùng nguồn còn lại: để trình duyệt tự đi mạng (không chặn). */
});
