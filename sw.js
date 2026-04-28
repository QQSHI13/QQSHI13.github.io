const CACHE_NAME = 'qq-tools-v5';
const MAX_CACHE_ITEMS = 100;
let cachePromise = null;

function getCache() {
  if (!cachePromise) {
    cachePromise = caches.open(CACHE_NAME);
  }
  return cachePromise;
}

function limitCacheSize(cache) {
  return cache.keys().then((keys) => {
    if (keys.length > MAX_CACHE_ITEMS) {
      const toDelete = keys.slice(0, keys.length - MAX_CACHE_ITEMS);
      return Promise.all(toDelete.map((key) => cache.delete(key)));
    }
  });
}

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/projects.html',
  '/blog/index.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    getCache().then((cache) => {
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          fetch(url).then((response) => {
            if (response.ok && response.type === 'basic') {
              return cache.put(url, response);
            }
          }).catch(() => {})
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const isHTML = event.request.mode === 'navigate' || event.request.destination === 'document';

  if (isHTML) {
    // Network-first for HTML pages, but fallback to cache when offline
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        // Prevent cache poisoning from redirects
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseClone = networkResponse.clone();
          getCache().then((cache) => {
            cache.put(event.request, responseClone);
            limitCacheSize(cache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed - return cached version or offline fallback
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
          return new Response('Not found', { status: 404 });
        });
      })
    );
  } else {
    // Cache-first for assets (images, CSS, JS)
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Only cache basic responses (not opaque/redirects)
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseClone = networkResponse.clone();
            getCache().then((cache) => {
              cache.put(event.request, responseClone);
              limitCacheSize(cache);
            });
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
  }
});
