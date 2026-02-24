const CACHE_NAME = 'verbs-app-v1';
const urlsToCache = [
  './verbs.html',
  './manifest.json',
  './icona.png'
];

// Instal·la el Service Worker i guarda els fitxers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Respon amb els fitxers guardats si no hi ha internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});