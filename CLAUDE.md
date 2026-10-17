# game.vumatech.net — çalışma kuralları

- Yayın: `main` dalına push → Cloudflare Pages (`game` projesi) otomatik derler ve yayınlar. Elle adım yok.
- Değişiklikleri doğrudan `main`'e commit edip push et; sonra canlı siteyi kontrol et.
- `assets/style.css` veya `assets/app.js` değişince `index.html` içindeki `?v=` sürümünü artır (önbellek kırılır).
- Statik site: derleme adımı yok, çerçeve yok. Yeni bağımlılık ekleme.
- Kodda ve metinlerde "Blogger" / "blogspot" adı geçmesin.
- Oyun verisi GameMonetize'dan `vumatech-proxy.vuraloglu.workers.dev` Worker'ı üzerinden gelir; o Worker bu reponun parçası değil.
- İletişim: Telegram @vumatech. Diller: KY (varsayılan), RU, TR, EN.
