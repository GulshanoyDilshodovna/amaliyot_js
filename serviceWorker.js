const staticColorPicker = 'developerG'
const assets = [
    "/",
    "/index.html",
    "/style/style.css",
    "/app.js"
]

self.addEventListener('install', installEvent =>{
    installEvent.waitUntil(
        cashes.open(staticColorPicker).then(chase=>{
            cashes.addAll(assets)
        })
    )
})

self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.responWith(
        cashes.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.event);
        })
    )
})