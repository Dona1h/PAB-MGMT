// PAB 수영 운영 도구 - Service Worker
const CACHE = 'pab-tool-v14';
const OFFLINE_URL = './';

// 설치: 핵심 파일 캐시
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([OFFLINE_URL, './manifest.json']))
  );
  self.skipWaiting();
});

// 활성화: 구버전 캐시 삭제
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 요청 처리: 네트워크 우선 → 실패 시 캐시
self.addEventListener('fetch', e => {
  // GAS 요청은 캐시하지 않음
  if (e.request.url.includes('script.google.com')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // HTML 파일만 캐시 갱신
        if (e.request.destination === 'document') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match(OFFLINE_URL)))
  );
});
