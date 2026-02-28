const CACHE_NAME = 'nerdwijzer-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/verantwoording.html',
  '/changelog.html',
  '/style.css',
  '/images/favicon.ico',
  '/images/nerdwijzer-favicon.svg',
  '/manifest.json'
  // JSON bestanden worden niet gecached om cachebuster te laten werken
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline, but always fetch JSON files fresh
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Voor JSON bestanden: altijd van de server halen (cachebuster)
  if (url.pathname.endsWith('.json')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Voor andere bestanden: eerst cache, dan netwerk
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
