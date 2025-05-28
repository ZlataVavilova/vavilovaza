const CACHE_NAME = 'calculator-v1';
const PRECACHE_URLS = [
  '/calculator/',
  '/calculator/calc.html',
  '/calculator/style.css',
  '/calculator/icon-192.png',
  '/calculator/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});