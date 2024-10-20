const CACHE_NAME = 'pokedex-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './css/main.css',
  './js/main.js',
  './img/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
