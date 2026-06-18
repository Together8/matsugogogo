const CACHE='matsu-trip-v2';
const FILES=['./','index.html','day1.html','day2.html','day3.html','food.html','attractions.html','transport.html','budget.html','checklist.html','css/style.css','js/app.js','data/site.json','data/places.json','data/itinerary.json','manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
