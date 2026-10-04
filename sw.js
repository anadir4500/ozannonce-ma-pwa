const CACHE = 'oz-v3';
const ASSETS = [
  './', './index.html', './i18n.js', './i18n_extra.js', './i18n_forms.js',
  './manifest.webmanifest', './icons/icon-192x192.png', './icons/icon-512x512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // laisse passer les appels vers ozannonces.ma

  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});ch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ne gérer que notre propre site
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(cached => cached || caches.match("./index.html"));
      })
  );
});
