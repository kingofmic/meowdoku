const CACHE_NAME = "meowdoku-shell-v4";
const APP_SHELL = [
  "/",
  "/styles.css",
  "/game.js",
  "/site-language.js",
  "/pwa.js",
  "/analytics-config.js",
  "/analytics.js",
  "/site.webmanifest",
  "/assets/cat-token.png",
  "/assets/cat-icon-180.png",
  "/assets/cat-icon-192.png",
  "/assets/cat-icon-512.png",
  "/assets/victory-cats.png",
  "/assets/cozy-game-bg.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetched;
    })
  );
});
