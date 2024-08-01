const cacheName = 'order-tracker-v1';
const assets = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/images/favicon-32x32.png',
  '/images/android-chrome-192x192.png',
  '/images/apple-touch-icon.png',
  '/images/android-chrome-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
