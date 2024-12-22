self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('peta-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/script.js',
                'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
                'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
