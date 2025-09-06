
const CACHE_NAME = 'roaming-calc-v2';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request))); });
