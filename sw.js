// Offline gyorsítótár. Ha módosítod az oldalt, a "Frissítés" gomb vagy ez a verziószám gondoskodik az újról.
const CACHE = "thaifold-2026-v3";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(FILES.map((f) => c.add(new Request(f, { cache: "reload" })))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) {
        // háttérben frissít, ha van net
        fetch(req.url, { cache: "no-cache" })
          .then((res) => { if (res && res.ok) caches.open(CACHE).then((c) => c.put(req, res)); })
          .catch(() => {});
        return hit;
      }
      return fetch(req.url, { cache: "reload" })
        .then((res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; })
        .catch(() => (req.mode === "navigate" ? caches.match("index.html") : undefined));
    })
  );
});
