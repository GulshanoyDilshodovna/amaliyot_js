const staticColorPicker = 'developerG'
const assets = [
    "/",
    "/index.html",
    "/style/style.css",
    "/app.js"
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil (
        caches.open(staticColorPicker).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})