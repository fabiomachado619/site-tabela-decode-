const CACHE_NAME = 'power-on-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.webmanifest',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Install Event - Cache crucial assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Removing old cache.', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event - Network First for Data, Cache First for Assets
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Strategy: Cache First for static assets (images, js, css)
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico|json)$/) || ASSETS_TO_CACHE.includes(url.pathname)) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    } else {
        // Strategy: Network First for everything else (navigation mainly), falling back to cache
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    return caches.match(event.request).then((response) => {
                        if (response) return response;
                        // Fallback to index.html for SPA navigation
                        return caches.match('/index.html');
                    });
                })
        );
    }
});
