self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Кэширование необходимых файлов
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Обработка запросов
});
