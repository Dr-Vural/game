# game.vumatech.net

VuMaTech Game — tarayıcı tabanlı ücretsiz HTML5 oyun portalı.

## Mimari

- **Statik site** (vanilla HTML/CSS/JS) — Cloudflare Pages üzerinde yayınlanır
- **Oyun verisi** GameMonetize RSS feed'inden çekilir
- **CORS proxy** olarak kendi Cloudflare Worker'ımız kullanılır: `vumatech-proxy.vuraloglu.workers.dev`

## Dosya yapısı

```
/
├── index.html          # Ana sayfa (SPA — tek sayfa uygulaması)
├── favicon.svg         # Logo
├── ads.txt             # AdSense + GameMonetize publisher onayı
├── robots.txt          # Arama motoru yönergeleri
├── sitemap.xml         # Site haritası
├── _redirects          # Cloudflare Pages SPA fallback
├── _headers            # Cloudflare Pages güvenlik + önbellek başlıkları
└── assets/
    ├── style.css       # Tüm stil (karanlık tema dahil)
    └── app.js          # Tüm uygulama mantığı
```

## Geliştirme

```bash
# Yerel sunucu
python3 -m http.server 8000
# http://localhost:8000
```

## Yayına alma

Repo'ya push yapmak Cloudflare Pages'in otomatik deploy'unu tetikler.
Live URL: https://game.vumatech.net

## Lisans

VuMaTech © 2026
