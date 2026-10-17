/* VuMaTech Game — uygulama */

console.log('VuMaTech v7: Dinamik API sistemi yükleniyor');
  // ==================== TEMA (KARANLIK/AYDINLIK) ====================
  (function() {
    var kokluEl = document.documentElement;
    var kayit = null;
    try { kayit = localStorage.getItem('vmt-tema'); } catch(e) {}

    // Başlangıç teması: kayıt varsa onu, yoksa sistem tercihi
    var baslangic = kayit;
    if (!baslangic) {
      try {
        baslangic = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } catch(e) { baslangic = 'light'; }
    }
    kokluEl.setAttribute('data-theme', baslangic);

    // Toggle butonu dinleyici
    function kurTemaToggle() {
      var btn = document.getElementById('vmt-theme-toggle');
      if (!btn || btn._kurulu) return;
      btn._kurulu = true;
      btn.addEventListener('click', function() {
        var mevcut = kokluEl.getAttribute('data-theme') || 'light';
        var yeni = mevcut === 'dark' ? 'light' : 'dark';
        kokluEl.setAttribute('data-theme', yeni);
        try { localStorage.setItem('vmt-tema', yeni); } catch(e) {}
      });
    }
    kurTemaToggle();
    // DOM hazır olduktan sonra tekrar dene (header dinamik render için)
    document.addEventListener('DOMContentLoaded', kurTemaToggle);
    setTimeout(kurTemaToggle, 500);
    setTimeout(kurTemaToggle, 1500);
  })();


(function(){
  // ==================== ÇEVİRİLER ====================
  var I18N = {
    ky: {
      online:'оюнчу онлайн', searchPlaceholder:'Оюн издөө...',
      heroTag:'<b>36000+</b> акысыз оюн · Каттоосуз · Дароо ойноо',
      heroTitle:'Браузериңизде <span class="accent">сонун оюндар</span><br/>сизди күтүүдө',
      heroSubtitle:'Жарыш, аракет, башкатырма жана дагы көп. Бир чыкылдатуу менен, акысыз.',
      statGames:'Оюндар', statCategories:'Категориялар', statOnline:'Онлайн', statMonthly:'Айлык',
      featured:'Тандалган оюндар', featuredSub:'Жаңы жана популярдуу',
      trendGames:'Бардык оюндар', gameCount:'оюн',
      catTrend:'Жаңы', catAll:'Бардыгы', catAction:'Аракет', catRacing:'Жарыш',
      catPuzzle:'Башкатырма', catSports:'Спорт', catClassic:'Классика', cat2P:'2 кишилик',
      catBrain:'Логика', catGirls:'Кыздар', catKids:'Балдар',
      catAdventure:'Изденүү', catShooting:'Атуу', catFighting:'Согуш', catCooking:'Тамак', cat3D:'3D',
      popularHead:'Эң популярдуу', favoriteHead:'Сүйүктүү оюндарым', recentHead:'Жакында ойногондоруң',
      adArea:'Жарнама аймагы', adSide:'Жарнама<br>(Капталда)',
      footerAbout:'Кыргызстандын эң тез браузер оюн борбору. Каттоосуз, акысыз 36000+ оюн.',
      footerCategories:'Категориялар', footerPopular:'Популярдуу', footerNew:'Жаңылар',
      footerInfo:'Маалымат', footerAboutUs:'Биз жөнүндө', footerContact:'Telegram',
      footerPrivacy:'Купуялуулук', footerTerms:'Шарттар',
      gamesProvidedBy:'Оюндарды камсыздаган',gamesRights:'Бардык оюндар алардын иштеп чыгуучуларынын менчиги',footerTagline:'Бардык оюндар HTML5, мобилге шайкеш',
      ratingPlay:'ойнолду', restartConfirm:'Оюнду кайра баштоо? (Жаңы жарнама көрсөтүлүшү мүмкүн)', loadMore:'Көбүрөк жүктөө', noResults:'Эч кандай оюн табылган жок', freePlay:'Акысыз ойноо',
      promoTitle:'Сайт ачуу керекпи?', promoSub:'VuMaTech менен профессионалдуу веб-дизайн. Сайтыңызды ишеничтүү колдонгого тапшырыңыз.', promoBtn:'Изилдөө',
      morePromoTag:'Көбүрөк оюндар', morePromoTitle:'Жаңы оюндарды табыңыз!', morePromoSub:'Күн сайын жаңы оюндар кошулат. Жагымдуу классикалуу оюнду табыңыз.', morePromoBtn:'Башкы бет',
      sidePromoSub:'Профессионалдуу веб-дизайн', sidePromoBtn:'Көрүү →',
      noResults:'Издеген оюн табылган жок', noResultsSub:'Башка категорияны колдонуңуз',
      badgeHot:'POP', badgeNew:'NEW', badgeTop:'TOP',
      loading:'Оюндар жүктөлүүдө...', loadError:'Оюндарды жүктөөдө ката кетти',
      retry:'Кайра аракет кылуу', backHome:'Башкы бет', playNow:'Ойноо',
      fullscreen:'Толук экран', share:'Бөлүшүү', restart:'Кайра баштоо',
      similar:'Окшош оюндар', controls:'Башкаруу', gameInfo:'Оюн жөнүндө'
    },
    ru: {
      online:'игроков онлайн', searchPlaceholder:'Поиск игр...',
      heroTag:'<b>36000+</b> бесплатных игр · Без регистрации · Играй сразу',
      heroTitle:'В твоём браузере <span class="accent">отличные игры</span><br/>уже ждут тебя',
      heroSubtitle:'Гонки, экшен, головоломки и многое другое. В один клик, бесплатно.',
      statGames:'Игр', statCategories:'Категорий', statOnline:'Онлайн', statMonthly:'В месяц',
      featured:'Избранные игры', featuredSub:'Новые и популярные',
      trendGames:'Все игры', gameCount:'игр',
      catTrend:'Новые', catAll:'Все', catAction:'Экшен', catRacing:'Гонки',
      catPuzzle:'Головоломки', catSports:'Спорт', catClassic:'Классика', cat2P:'На двоих',
      catBrain:'Логика', catGirls:'Для девочек', catKids:'Детские',
      catAdventure:'Приключения', catShooting:'Стрельба', catFighting:'Драки', catCooking:'Кулинария', cat3D:'3D',
      popularHead:'Самые популярные', favoriteHead:'Мои избранные', recentHead:'Недавно играли',
      adArea:'Реклама', adSide:'Реклама<br>(Боковая)',
      footerAbout:'Самый быстрый игровой портал в Кыргызстане. 36000+ бесплатных игр.',
      footerCategories:'Категории', footerPopular:'Популярное', footerNew:'Новинки',
      footerInfo:'Информация', footerAboutUs:'О нас', footerContact:'Telegram',
      footerPrivacy:'Конфиденциальность', footerTerms:'Условия',
      gamesProvidedBy:'Игры предоставлены',gamesRights:'Все игры принадлежат их разработчикам',footerTagline:'Все игры HTML5, для мобильных',
      ratingPlay:'игр', restartConfirm:'Перезапустить игру? (Может появиться новая реклама)', loadMore:'Загрузить ещё', noResults:'Игры не найдены', freePlay:'Играть бесплатно',
      promoTitle:'Нужен сайт?', promoSub:'Профессиональный веб-дизайн с VuMaTech. Доверьте свой сайт надёжной команде.', promoBtn:'Узнать больше',
      morePromoTag:'Больше игр', morePromoTitle:'Откройте новые игры!', morePromoSub:'Новые игры каждый день. Найдите свой следующий любимый хит.', morePromoBtn:'На главную',
      sidePromoSub:'Профессиональный веб-дизайн', sidePromoBtn:'Подробнее →',
      noResults:'Игра не найдена', noResultsSub:'Попробуйте другую категорию',
      badgeHot:'HIT', badgeNew:'NEW', badgeTop:'TOP',
      loading:'Загрузка игр...', loadError:'Ошибка загрузки игр',
      retry:'Попробовать снова', backHome:'На главную', playNow:'Играть',
      fullscreen:'Полный экран', share:'Поделиться', restart:'Перезапуск',
      similar:'Похожие игры', controls:'Управление', gameInfo:'Об игре'
    },
    tr: {
      online:'oyuncu çevrimiçi', searchPlaceholder:'Oyun ara...',
      heroTag:'<b>36000+</b> ücretsiz oyun · Kayıt gerekmez · Anında oyna',
      heroTitle:'Tarayıcında <span class="accent">harika oyunlar</span><br/>seni bekliyor',
      heroSubtitle:'Yarış, aksiyon, bulmaca ve daha fazlası. Tek tıkla, ücretsiz.',
      statGames:'Oyun', statCategories:'Kategori', statOnline:'Çevrimiçi', statMonthly:'Aylık',
      featured:'Öne Çıkan Oyunlar', featuredSub:'Yeni ve popüler',
      trendGames:'Tüm Oyunlar', gameCount:'oyun',
      catTrend:'Yeni', catAll:'Tümü', catAction:'Aksiyon', catRacing:'Yarış',
      catPuzzle:'Bulmaca', catSports:'Spor', catClassic:'Klasik', cat2P:'2 Kişilik',
      catBrain:'Zeka', catGirls:'Kız', catKids:'Çocuk',
      catAdventure:'Macera', catShooting:'Nişancı', catFighting:'Dövüş', catCooking:'Yemek', cat3D:'3D',
      popularHead:'En Popüler', favoriteHead:'Favorilerim', recentHead:'Son Oynadıkların',
      adArea:'Reklam Alanı', adSide:'Reklam<br>(Kenar)',
      footerAbout:'Türkiye ve Orta Asyanın en hızlı tarayıcı oyun merkezi. 36000+ ücretsiz oyun.',
      footerCategories:'Kategoriler', footerPopular:'Popüler', footerNew:'Yeniler',
      footerInfo:'Bilgi', footerAboutUs:'Hakkımızda', footerContact:'Telegram',
      footerPrivacy:'Gizlilik', footerTerms:'Kullanım',
      gamesProvidedBy:'Oyunları sağlayan',gamesRights:'Tüm oyunlar ilgili geliştiricilerin malıdır',footerTagline:'Tüm oyunlar HTML5, mobil uyumlu',
      ratingPlay:'oynama', restartConfirm:'Oyunu yeniden başlat? (Yeni bir reklam görünebilir)', loadMore:'Daha fazla yükle', noResults:'Oyun bulunamadı', freePlay:'Ücretsiz oyna',
      promoTitle:'Web sitenize ihtiyacınız var mı?', promoSub:'VuMaTech ile profesyonel web tasarım. Sitenizi güvenilir ellere emanet edin.', promoBtn:'Keşfet',
      morePromoTag:'Daha fazla oyun', morePromoTitle:'Yeni oyunlar keşfedin!', morePromoSub:'Her gün yeni oyunlar ekleniyor. Bir sonraki favorinizi bulun.', morePromoBtn:'Ana Sayfa',
      sidePromoTag:'Web Tasarım', sidePromoSub:'Profesyonel web tasarım', sidePromoBtn:'İncele →',
      noResults:'Aradığın oyun bulunamadı', noResultsSub:'Farklı kategori dene',
      badgeHot:'HIT', badgeNew:'YENİ', badgeTop:'TOP',
      loading:'Oyunlar yükleniyor...', loadError:'Oyunlar yüklenirken hata oluştu',
      retry:'Tekrar dene', backHome:'Ana sayfa', playNow:'Oyna',
      fullscreen:'Tam Ekran', share:'Paylaş', restart:'Yeniden Başlat',
      similar:'Benzer Oyunlar', controls:'Kontroller', gameInfo:'Oyun Hakkında'
    },
    en: {
      online:'players online', searchPlaceholder:'Search games...',
      heroTag:'<b>36000+</b> free games · No signup · Play instantly',
      heroTitle:'Amazing games <span class="accent">in your browser</span><br/>are waiting for you',
      heroSubtitle:'Racing, action, puzzles and more. One click, free.',
      statGames:'Games', statCategories:'Categories', statOnline:'Online', statMonthly:'Monthly',
      featured:"Featured Games", featuredSub:"New and popular",
      trendGames:'All Games', gameCount:'games',
      catTrend:'New', catAll:'All', catAction:'Action', catRacing:'Racing',
      catPuzzle:'Puzzle', catSports:'Sports', catClassic:'Classic', cat2P:'2 Player',
      catBrain:'Brain', catGirls:'Girls', catKids:'Kids',
      catAdventure:'Adventure', catShooting:'Shooting', catFighting:'Fighting', catCooking:'Cooking', cat3D:'3D',
      popularHead:'Most Popular', favoriteHead:'My Favorites', recentHead:'Recently Played',
      adArea:'Ad Space', adSide:'Ad<br>(Sidebar)',
      footerAbout:'The fastest browser gaming hub in Central Asia. 36000+ free games.',
      footerCategories:'Categories', footerPopular:'Popular', footerNew:'New',
      footerInfo:'Info', footerAboutUs:'About', footerContact:'Telegram',
      footerPrivacy:'Privacy', footerTerms:'Terms',
      gamesProvidedBy:'Games provided by',gamesRights:'All games property of their respective developers',footerTagline:'All games HTML5, mobile friendly',
      ratingPlay:'plays', restartConfirm:'Restart the game? (A new ad may be shown)', loadMore:'Load more', noResults:'No games found', freePlay:'Play free',
      promoTitle:'Need a website?', promoSub:'Professional web design with VuMaTech. Trust your project to experienced hands.', promoBtn:'Explore',
      morePromoTag:'More games', morePromoTitle:'Discover new games!', morePromoSub:'New games every day. Find your next favorite.', morePromoBtn:'Browse Home',
      sidePromoSub:'Professional web design', sidePromoBtn:'Visit →',
      noResults:'No games found', noResultsSub:'Try a different category',
      badgeHot:'HOT', badgeNew:'NEW', badgeTop:'TOP',
      loading:'Loading games...', loadError:'Error loading games',
      retry:'Try again', backHome:'Home', playNow:'Play',
      fullscreen:'Fullscreen', share:'Share', restart:'Restart',
      similar:'Similar Games', controls:'Controls', gameInfo:'About Game'
    }
  };

  
  // Loading mesajları ekle
  if (I18N.ky) I18N.ky.splashMsg = 'Эң мыкты оюндар жүктөлүүдө...';
  if (I18N.ru) I18N.ru.splashMsg = 'Загружаем лучшие игры...';
  if (I18N.tr) I18N.tr.splashMsg = 'En iyi oyunlar yükleniyor...';
  if (I18N.en) I18N.en.splashMsg = 'Loading awesome games...';

  var FLAG = { ky:'KG', ru:'RU', tr:'TR', en:'GB' };
  var FLAG_EMOJI = { ky:'\uD83C\uDDF0\uD83C\uDDEC', ru:'\uD83C\uDDF7\uD83C\uDDFA', tr:'\uD83C\uDDF9\uD83C\uDDF7', en:'\uD83C\uDDEC\uD83C\uDDE7' };

  // GameMonetize API'den gelen kategori → bizim kategori
  var KAT_MAP = {
    'Action': 'aksiyon',
    'Adventure': 'aksiyon',
    'Shooting': 'aksiyon',
    'Stickman': 'aksiyon',
    'Racing': 'yaris',
    'Sports': 'spor',
    'Soccer': 'spor',
    'Puzzles': 'bulmaca',
    'Puzzle': 'bulmaca',
    'Bejeweled': 'bulmaca',
    '.IO': 'io',
    'Multiplayer': 'io',
    '2 Player': '2kisilik',
    'Girls': 'kiz',
    'Cooking': 'kiz',
    'Baby Hazel': 'cocuk',
    'Boys': 'aksiyon',
    'Hypercasual': 'klasik',
    'Arcade': 'klasik',
    'Clicker': 'zeka',
    '3D': 'aksiyon'
  };

  // API kategori isimleri (GameMonetize'a gönderilecek)
  var API_KAT = {
    'aksiyon': 'Action',
    'yaris': 'Racing',
    'bulmaca': 'Puzzles',
    'spor': 'Sports',
    'klasik': 'Hypercasual',
    '2kisilik': '2 Player',
    'io': '.IO',
    'zeka': 'Clicker',
    'kiz': 'Girls',
    'cocuk': 'Baby Hazel',
    'macera': 'Adventure',
    'silah': 'Shooting',
    'dovus': 'Fighting',
    'yemek': 'Cooking',
    '3d': '3D'
  };

  // Renk paleti (oyun ID'sinden hash ile)
  var RENKLER = [
    ['#f97316','#ec4899'], ['#10b981','#f97316'], ['#3b82f6','#10b981'],
    ['#8b5cf6','#ec4899'], ['#06b6d4','#3b82f6'], ['#facc15','#f97316'],
    ['#ef4444','#facc15'], ['#3b82f6','#ef4444'], ['#1e40af','#f97316'],
    ['#10b981','#facc15'], ['#ea580c','#1e40af'], ['#0f172a','#10b981'],
    ['#84cc16','#f97316'], ['#16a34a','#000'], ['#facc15','#1e40af'],
    ['#fbbf24','#10b981'], ['#ef4444','#3b82f6'], ['#1f2937','#fbbf24'],
    ['#ec4899','#a855f7'], ['#fb923c','#10b981']
  ];

  function renkSec(id) {
    var n = 0;
    for (var i = 0; i < id.length; i++) n += id.charCodeAt(i);
    return RENKLER[n % RENKLER.length];
  }

  // Kategori → emoji
  var KAT_IKON = {
    'aksiyon': '\u2694\uFE0F',
    'yaris': '\uD83C\uDFCE\uFE0F',
    'bulmaca': '\uD83E\uDDE9',
    'spor': '\u26BD',
    'klasik': '\uD83D\uDD79\uFE0F',
    '2kisilik': '\uD83D\uDC65',
    'io': '\uD83C\uDF10',
    'zeka': '\uD83E\uDDE0',
    'kiz': '\uD83C\uDF38',
    'cocuk': '\uD83E\uDDF8',
    'all': '\uD83C\uDFAE',
    'trend': '\uD83D\uDD25',
    'macera': '\uD83D\uDDFA',
    'silah': '\uD83C\uDFAF',
    'dovus': '\uD83E\uDD4A',
    'yemek': '\uD83C\uDF73',
    '3d': '\uD83C\uDFAC'
  };

  // ==================== STATE ====================
  var aktifDil = 'ky';
  var aktifKategori = 'trend';
  var TUM_OYUNLAR = []; // tüm yüklenen oyunlar (cache)
  var SAYFA_BOYUTU = 500;       // API tek çağrıda max
  var GORUNEN_BASLANGIC = 48;   // İlk yüklemede gösterilen oyun sayısı
  var GORUNEN_ARTIM = 24;       // Her "Daha fazla" tıklamasında ek
  var MAKS_API_CAGRI = 5;       // Max 5 farklı listeyi birleştir (5x200=1000 oyun)
  var arama = '';

  // ==================== DİL YÖNETİMİ ====================
  function dilAlgila() {
    var k = localStorage.getItem('vmt-lang');
    if (k && I18N[k]) return k;
    var t = (navigator.language || '').toLowerCase();
    if (t.indexOf('ky') === 0) return 'ky';
    if (t.indexOf('ru') === 0) return 'ru';
    if (t.indexOf('tr') === 0) return 'tr';
    if (t.indexOf('en') === 0) return 'en';
    return 'ky';
  }

  function ceviriUygula(dil) {
    aktifDil = dil;
    var t = I18N[dil];
    document.documentElement.lang = dil;
    localStorage.setItem('vmt-lang', dil);

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (t[key]) els[i].innerHTML = t[key];
    }
    var elsHtml = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < elsHtml.length; j++) {
      var key2 = elsHtml[j].getAttribute('data-i18n-html');
      if (t[key2]) elsHtml[j].innerHTML = t[key2];
    }
    var s1 = document.getElementById('vmt-search-input');
    var s2 = document.getElementById('vmt-search-input-desktop');
    if (s1) s1.placeholder = t.searchPlaceholder;
    if (s2) s2.placeholder = t.searchPlaceholder;

    var current = document.getElementById('vmt-lang-toggle');
    if (current) current.textContent = FLAG_EMOJI[dil];

    var items = document.querySelectorAll('.vmt-lang-item');
    for (var k = 0; k < items.length; k++) {
      items[k].classList.toggle('active', items[k].getAttribute('data-lang') === dil);
    }

    // Sayfayı yeniden render et
    // ÖNEMLİ: Oyun sayfasındaysak ve iframe yüklüyse, yeniden render ETMEYELIM
    // (reklam tetiklenmesin)
    var oyunSayfasinda = urlParam('game') && document.querySelector('.vmt-game-iframe');
    if (TUM_OYUNLAR.length > 0 && !oyunSayfasinda) {
      sayfaRoute();
    } else if (oyunSayfasinda) {
      console.log('VuMaTech: Oyun açıkken dil değişti - iframe korunuyor');
      // Sadece metin güncellemeleri yap (data-i18n)
      var i18nEls = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < i18nEls.length; i++) {
        var key = i18nEls[i].getAttribute('data-i18n');
        if (I18N[aktifDil][key]) {
          i18nEls[i].textContent = I18N[aktifDil][key];
        }
      }
    }

    // Dil değişikliğinden sonra canlı sayaç değerini hemen senkronla
    setTimeout(function() {
      if (typeof SAYAC_STATE !== 'undefined' && SAYAC_STATE.sayi > 0) {
        var sayacEls = document.querySelectorAll('.vmt-online-sayi');
        for (var s = 0; s < sayacEls.length; s++) {
          sayacEls[s].textContent = onlineFormat(SAYAC_STATE.sayi);
        }
      }
      // Oyun sayfasındaysak açıklama çevirisini tetikle
      if (urlParam('game')) {
        if (aktifDil === 'en') {
          var descs = document.querySelectorAll('[data-orijinal]');
          for (var d = 0; d < descs.length; d++) {
            var orj = descs[d].getAttribute('data-orijinal');
            if (orj) descs[d].textContent = orj;
          }
        } else {
          setTimeout(aciklamaCevir, 100);
        }
      }
    }, 50);
  }

  // ==================== URL PARAMETRELERİ ====================
  function urlParam(name) {
    var url = window.location.href;
    var match = url.match(new RegExp('[?&]' + name + '=([^&#]+)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function urlGuncelle(params) {
    // Mevcut URL'i sakla, sadece query string'i değiştir
    var base = window.location.pathname;
    var qs = [];
    for (var k in params) {
      if (params[k]) qs.push(k + '=' + encodeURIComponent(params[k]));
    }
    var yeni = base + (qs.length ? '?' + qs.join('&') : '');
    window.history.pushState({}, '', yeni);
  }



  // ==================== CANLI ONLINE SAYAÇ ====================
  // Saate göre mantıklı dalgalanma, etik sınırlar içinde
  var SAYAC_STATE = {
    sayi: 0,
    timer: null,
    hedef: 0,
    son: 0
  };

  function onlineHesapla() {
    var simdi = new Date();
    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();

    // Saate göre temel sayı (Bishkek/Türkiye saati)
    var temelTablo = {
      0: 800, 1: 500, 2: 300, 3: 200, 4: 200, 5: 250,
      6: 400, 7: 700, 8: 1100, 9: 1500, 10: 1900, 11: 2300,
      12: 2700, 13: 2900, 14: 3100, 15: 3400, 16: 3700, 17: 4100,
      18: 4500, 19: 4800, 20: 5200, 21: 4900, 22: 3800, 23: 2200
    };

    var bu = temelTablo[saat] || 1000;
    var sonraki = temelTablo[(saat + 1) % 24] || 1000;
    // Dakikaya göre yumuşak geçiş
    var temel = bu + ((sonraki - bu) * (dakika / 60));

    // Hafta sonu boost (Cuma-Cumartesi-Pazar +25%)
    var gun = simdi.getDay();
    if (gun === 5 || gun === 6 || gun === 0) {
      temel *= 1.25;
    }

    // Rastgele ufak dalgalanma (+/- 8%)
    var dalga = 0.92 + (Math.random() * 0.16);
    temel = Math.round(temel * dalga);

    // Minimum 50 (etik sınır - hiç sıfır göstermeyelim)
    if (temel < 50) temel = 50 + Math.floor(Math.random() * 30);

    return temel;
  }

  function onlineFormat(n) {
    if (n >= 10000) return (n / 1000).toFixed(1) + 'K';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return String(n);
  }

  function onlineGuncelle() {
    var yeni = onlineHesapla();
    SAYAC_STATE.hedef = yeni;

    // Yumuşak animasyon: mevcut sayıdan hedefe yavaş yavaş
    var simdiki = SAYAC_STATE.sayi || yeni;
    var fark = yeni - simdiki;
    var adim = Math.ceil(Math.abs(fark) / 30);
    if (adim < 1) adim = 1;

    function adimAt() {
      if (Math.abs(SAYAC_STATE.sayi - yeni) <= adim) {
        SAYAC_STATE.sayi = yeni;
      } else if (SAYAC_STATE.sayi < yeni) {
        SAYAC_STATE.sayi += adim;
      } else {
        SAYAC_STATE.sayi -= adim;
      }

      var els = document.querySelectorAll('.vmt-online-sayi');
      for (var i = 0; i < els.length; i++) {
        els[i].textContent = onlineFormat(SAYAC_STATE.sayi);
      }

      if (SAYAC_STATE.sayi !== yeni) {
        setTimeout(adimAt, 60);
      }
    }

    adimAt();
  }

  function onlineBaslat() {
    // İlk değer
    SAYAC_STATE.sayi = onlineHesapla();

    // İlk güncelleme
    var els = document.querySelectorAll('.vmt-online-sayi');
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = onlineFormat(SAYAC_STATE.sayi);
    }

    // Her 25-40 saniyede bir yenile (gerçekçi düzensizlik)
    function plan() {
      var ms = 25000 + Math.floor(Math.random() * 15000);
      SAYAC_STATE.timer = setTimeout(function() {
        onlineGuncelle();
        plan();
      }, ms);
    }
    plan();
  }

  // ==================== API (PARALEL CORS Proxy ile) ====================
  // Sıralama: en hızlı/güvenilir önce. Hepsi PARALEL denenir.
  // ==================== İÇERİK SAYFALARI ====================
  // About, Privacy, Terms - şablon içinde gömülü
  var SAYFA_ICERIK = {
    about: {
      title: 'About VuMaTech Game',
      body: '<div class="vmt-page-hero"><h1>About VuMaTech Game</h1><p>Free HTML5 gaming for everyone, in 4 languages</p></div>' +
        '<h2>🎮 Who We Are</h2>' +
        '<p>VuMaTech Game is a free online gaming portal operated by <a href="https://vumatech.net" target="_blank" rel="noopener">VuMaTech</a>, a digital agency based in Bishkek, Kyrgyzstan. We curate over 36,000 HTML5 games that you can play instantly in your browser — no downloads, no installations, no signups required.</p>' +
        '<h2>🌍 Our Mission</h2>' +
        '<p>We believe gaming should be accessible to everyone, everywhere. Our platform serves players across Central Asia, Turkey, and the global Turkish-speaking community in their native languages: <strong>Kyrgyz, Russian, Turkish, and English</strong>.</p>' +
        '<div class="vmt-page-stats">' +
          '<div class="vmt-page-stat"><div class="num">36K+</div><div class="lbl">Free Games</div></div>' +
          '<div class="vmt-page-stat"><div class="num">4</div><div class="lbl">Languages</div></div>' +
          '<div class="vmt-page-stat"><div class="num">12</div><div class="lbl">Categories</div></div>' +
          '<div class="vmt-page-stat"><div class="num">0</div><div class="lbl">Downloads</div></div>' +
        '</div>' +
        '<h2>✨ What Makes Us Different</h2>' +
        '<ul>' +
          '<li><strong>🚀 Instant Play</strong> — Click and play. No downloads, no registration, no waiting.</li>' +
          '<li><strong>📱 Mobile Friendly</strong> — All games optimized for phones, tablets, and desktop devices.</li>' +
          '<li><strong>🌐 4 Languages</strong> — Native support for Kyrgyz, Russian, Turkish, and English.</li>' +
          '<li><strong>💯 100% Free</strong> — Every game is free to play. Forever. No premium tiers.</li>' +
          '<li><strong>🎨 Daily Updates</strong> — New games added every day directly from GameMonetize catalog.</li>' +
          '<li><strong>🔒 Safe & Secure</strong> — All games licensed and screened for quality and safety.</li>' +
        '</ul>' +
        '<h2>🤝 Our Partners</h2>' +
        '<p>Games on VuMaTech are provided through our partnership with <a href="https://gamemonetize.com" target="_blank" rel="noopener">GameMonetize.com</a>, one of the world\'s leading HTML5 game distribution platforms. All games remain the intellectual property of their respective developers.</p>' +
        '<h2>📞 Contact</h2>' +
        '<p>Have questions, suggestions, or feedback? Contact us on Telegram: <a href="https://t.me/vumatech" onclick="return vmtTelegramAc(event)">@vumatech</a></p>' +
        '<p>Parent Company: <a href="https://vumatech.net" target="_blank" rel="noopener">VuMaTech.net</a> · Location: Bishkek, Kyrgyzstan</p>' +
        '<h2>📜 Legal</h2>' +
        '<p><a href="?page=privacy" onclick="return vmtGotoPage(\'privacy\', event)">Privacy Policy</a> · <a href="?page=terms" onclick="return vmtGotoPage(\'terms\', event)">Terms of Service</a></p>'
    },
    privacy: {
      title: 'Privacy Policy',
      body: '<h1>Privacy Policy</h1>' +
        '<p class="vmt-page-lead">Last updated: May 14, 2026</p>' +
        '<p>VuMaTech Game ("we", "us", "our") operates the website <strong>game.vumatech.net</strong> (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.</p>' +
        '<h2>1. Information We Collect</h2>' +
        '<h3>1.1 Automatically Collected Data</h3>' +
        '<p>When you visit our Service, we may automatically collect information including: browser type and version, operating system, IP address (anonymized), pages visited and time spent, referring website, device type, and approximate geographic location.</p>' +
        '<h3>1.2 Cookies and Tracking</h3>' +
        '<p>We use cookies and similar tracking technologies. You can instruct your browser to refuse all cookies, but some features may not function properly without them.</p>' +
        '<h3>1.3 Local Storage</h3>' +
        '<p>We use browser localStorage to cache game data for faster loading. This data is stored only on your device and is not transmitted to our servers.</p>' +
        '<h2>2. Third-Party Services</h2>' +
        '<h3>2.1 Google AdSense</h3>' +
        '<p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits. You may opt out at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ad Settings</a>.</p>' +
        '<h3>2.2 GameMonetize</h3>' +
        '<p>Games on our Service are provided by <a href="https://gamemonetize.com" target="_blank" rel="noopener">GameMonetize.com</a>. They may collect game session statistics, ad interaction data, and technical performance data according to their privacy policy.</p>' +
        '<h2>3. How We Use Information</h2>' +
        '<p>We use collected data to provide and maintain the Service, improve user experience, analyze usage trends, display relevant advertising, detect technical issues, and comply with legal obligations.</p>' +
        '<h2>4. Data Sharing</h2>' +
        '<p>We do not sell your personal data. We may share aggregated, non-personally identifiable information with advertising partners (Google AdSense), analytics providers, game content providers (GameMonetize), and legal authorities if required by law.</p>' +
        '<h2>5. Your Rights (GDPR, KVKK, CCPA)</h2>' +
        '<p>You may have rights to access, rectify, erase, restrict, object to, or port your data. To exercise these rights, contact us on Telegram at <a href="https://t.me/vumatech" onclick="return vmtTelegramAc(event)">@vumatech</a>.</p>' +
        '<h2>6. Children\'s Privacy</h2>' +
        '<p>Our Service does not knowingly target children under 13. We recommend parental supervision for younger children.</p>' +
        '<h2>7. Data Security</h2>' +
        '<p>We implement reasonable security measures. However, no method of transmission over the Internet is 100% secure.</p>' +
        '<h2>8. International Data Transfers</h2>' +
        '<p>Our Service is operated from Kyrgyzstan. By using the Service, you consent to your data being processed in countries which may have different data protection laws.</p>' +
        '<h2>9. Changes to This Policy</h2>' +
        '<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.</p>' +
        '<h2>10. Contact</h2>' +
        '<p>Telegram: <a href="https://t.me/vumatech" onclick="return vmtTelegramAc(event)">@vumatech</a> · Operator: VuMaTech, Bishkek, Kyrgyzstan</p>'
    },
    terms: {
      title: 'Terms of Service',
      body: '<h1>Terms of Service</h1>' +
        '<p class="vmt-page-lead">Last updated: May 14, 2026</p>' +
        '<p>Welcome to VuMaTech Game! These Terms govern your use of <strong>game.vumatech.net</strong>. By using the Service, you agree to these Terms.</p>' +
        '<h2>1. Service Description</h2>' +
        '<p>VuMaTech Game is a free online gaming portal that allows users to play HTML5 games directly in their web browser. Games are provided through partnership with <a href="https://gamemonetize.com" target="_blank" rel="noopener">GameMonetize.com</a>.</p>' +
        '<h2>2. Use of Service</h2>' +
        '<h3>2.1 Eligibility</h3>' +
        '<p>You must be at least 13 years old to use this Service.</p>' +
        '<h3>2.2 Free to Use</h3>' +
        '<p>Our Service is free. Revenue is generated through advertising displayed on the site and within games.</p>' +
        '<h3>2.3 Prohibited Activities</h3>' +
        '<p>You agree NOT to: use the Service illegally, gain unauthorized access, use bots/scrapers, manipulate ad clicks, reverse engineer games, redistribute games without authorization, or harm minors.</p>' +
        '<h2>3. Intellectual Property</h2>' +
        '<p><strong>All games are property of their respective developers.</strong> We display these games under license through GameMonetize.com. The VuMaTech brand belongs to VuMaTech.</p>' +
        '<h2>4. Third-Party Content</h2>' +
        '<p>Games are provided "as is" by their developers via GameMonetize. We do not control game functionality, in-game ads, or data collected within game frames. Games may be added or removed without notice.</p>' +
        '<h2>5. Disclaimers</h2>' +
        '<p><strong>The Service is provided "AS IS" without warranties of any kind.</strong> We do not warrant that the Service will be uninterrupted, secure, or error-free.</p>' +
        '<h2>6. Limitation of Liability</h2>' +
        '<p>VuMaTech shall not be liable for indirect, incidental, or consequential damages, loss of data or profits, or damages resulting from game content or third-party advertising.</p>' +
        '<h2>7. Children Under 13</h2>' +
        '<p>Our Service is not directed at children under 13. We recommend parental supervision for users under 18.</p>' +
        '<h2>8. Modifications</h2>' +
        '<p>We reserve the right to modify, suspend, or discontinue any part of the Service, add or remove games, and change features without prior notice.</p>' +
        '<h2>9. Changes to Terms</h2>' +
        '<p>We may revise these Terms periodically. Continued use after changes constitutes acceptance of new Terms.</p>' +
        '<h2>10. Governing Law</h2>' +
        '<p>These Terms are governed by the laws of the Kyrgyz Republic. Disputes shall be resolved in courts of Bishkek, Kyrgyzstan.</p>' +
        '<h2>11. Contact</h2>' +
        '<p>Telegram: <a href="https://t.me/vumatech" onclick="return vmtTelegramAc(event)">@vumatech</a> · Operator: VuMaTech, Bishkek, Kyrgyzstan</p>' +
        '<h2>12. Acknowledgments</h2>' +
        '<p>VuMaTech Game is powered by <a href="https://gamemonetize.com" target="_blank" rel="noopener">GameMonetize.com</a> (games), Cloudflare Pages (hosting), and Google AdSense (advertising).</p>'
    }
  };


  // ==================== OYUN BAŞLIĞI ÇEVİRİ SİSTEMİ ====================
  // MyMemory API kullanır (anonim, ücretsiz)
  // localStorage cache - başlık bir kez çevrilir, hep oradan gelir

  var CEVIRI_DIL_MAP = {
    'tr': 'tr',
    'ru': 'ru',
    'ky': 'ky',
    'en': null  // English için çeviriye gerek yok
  };

  function ceviriCacheKey(metin, dil) {
    // Basit hash - metin ile dil
    return 'tr_' + dil + '_' + metin.substring(0, 80).replace(/[^a-zA-Z0-9]/g, '_');
  }

  function ceviriCacheGet(metin, dil) {
    try {
      var key = ceviriCacheKey(metin, dil);
      var val = localStorage.getItem(key);
      return val || null;
    } catch(e) { return null; }
  }

  function ceviriCacheSet(metin, dil, ceviri) {
    try {
      var key = ceviriCacheKey(metin, dil);
      localStorage.setItem(key, ceviri);
    } catch(e) {
      // localStorage dolu - eski çevirileri temizle
      try {
        for (var i = localStorage.length - 1; i >= 0; i--) {
          var k = localStorage.key(i);
          if (k && k.indexOf('tr_') === 0) {
            localStorage.removeItem(k);
          }
        }
      } catch(ee) {}
    }
  }

  // Tek başlık çevir (MyMemory.translated.net API)
  function basligiTercume(metin, dil, callback) {
    if (!metin || !dil || dil === 'en') {
      callback(metin);
      return;
    }

    // Cache kontrolü
    var cached = ceviriCacheGet(metin, dil);
    if (cached) {
      callback(cached);
      return;
    }

    // API çağrısı
    var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(metin) +
              '&langpair=en|' + dil + '&de=vumatechnet@gmail.com';

    fetch(url, {method: 'GET'})
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data && data.responseData && data.responseData.translatedText) {
          var ceviri = data.responseData.translatedText;
          // Çok kısa veya aynı ise atla
          if (ceviri.length < 1 || ceviri === metin) {
            callback(metin);
            return;
          }
          ceviriCacheSet(metin, dil, ceviri);
          callback(ceviri);
        } else {
          callback(metin);
        }
      })
      .catch(function() { callback(metin); });
  }


  function aciklamaCevir() {
    if (aktifDil === 'en') return;
    var els = document.querySelectorAll('.vmt-game-desc[data-orijinal], .vmt-game-inst[data-orijinal]');
    for (var i = 0; i < els.length; i++) {
      (function(el) {
        var orj = el.getAttribute('data-orijinal');
        if (!orj || orj.length < 3) return;
        basligiTercume(orj, aktifDil, function(ceviri) {
          if (ceviri && ceviri !== orj) el.textContent = ceviri;
        });
      })(els[i]);
    }
  }


  // ==================== FAVORI VE SON OYNANAN SISTEMI ====================
  var IKON_ATES = 'FIRE';  // Placeholder (asaida degistirilecek)
  var IKON_YILDIZ = '★';
  var IKON_YILDIZ_ORTA = '⭐';

  function favoriGetir() {
    try {
      var raw = localStorage.getItem('vmt-favoriler');
      return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
  }

  function favoriKaydet(liste) {
    try {
      localStorage.setItem('vmt-favoriler', JSON.stringify(liste.slice(0, 50)));
    } catch(e) {}
  }

  function favoriToggle(oyunId) {
    var liste = favoriGetir();
    var idx = liste.indexOf(String(oyunId));
    if (idx >= 0) {
      liste.splice(idx, 1);
    } else {
      liste.unshift(String(oyunId));
    }
    favoriKaydet(liste);
    return liste.indexOf(String(oyunId)) >= 0;
  }

  function favoriMi(oyunId) {
    return favoriGetir().indexOf(String(oyunId)) >= 0;
  }

  function sonOynananEkle(oyunId) {
    try {
      var raw = localStorage.getItem('vmt-son-oynanan');
      var liste = raw ? JSON.parse(raw) : [];
      var idx = liste.indexOf(String(oyunId));
      if (idx >= 0) liste.splice(idx, 1);
      liste.unshift(String(oyunId));
      localStorage.setItem('vmt-son-oynanan', JSON.stringify(liste.slice(0, 12)));
    } catch(e) {}
  }

  function sonOynananGetir() {
    try {
      var raw = localStorage.getItem('vmt-son-oynanan');
      return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
  }

  function renderStrip(baslik, ikonHtml, oyunlar) {
    if (!oyunlar || oyunlar.length === 0) return '';

    var html = '<div class="vmt-strip-wrap">' +
      '<div class="vmt-section-head"><h2><span class="ico">' + ikonHtml + '</span> <span>' + baslik + '</span></h2><span class="count">' + oyunlar.length + '</span></div>' +
      '<div class="vmt-strip-container">' +
        '<button class="vmt-strip-nav prev" onclick="vmtStripScroll(this, -1)">‹</button>' +
        '<div class="vmt-strip">';

    for (var i = 0; i < oyunlar.length; i++) {
      var o = oyunlar[i];
      var thumb = (o.thumb || '').replace(/^http:/, 'https:');
      var favActive = favoriMi(o.id) ? 'active' : '';
      html +=
        '<a href="?game=' + o.id + '" class="vmt-strip-card" data-id="' + o.id + '">' +
          '<div class="vmt-strip-img">' +
            '<img src="' + thumb + '" alt="' + escapeHtml(o.title) + '" loading="lazy" onerror="this.style.opacity=0.3"/>' +
            '<button class="vmt-fav-btn ' + favActive + '" onclick="event.preventDefault();event.stopPropagation();vmtFavoriToggle(\'' + o.id + '\', this);return false;" title="Favori">★</button>' +
          '</div>' +
          '<div class="vmt-strip-title">' + escapeHtml(o.title) + '</div>' +
        '</a>';
    }
    html += '</div>' +
        '<button class="vmt-strip-nav next" onclick="vmtStripScroll(this, 1)">›</button>' +
      '</div>' +
    '</div>';
    return html;
  }



  // ==================== TELEGRAM AKILLI AÇICI ====================
  // Masaüstünde web.telegram.org, mobilde tg:// uygulama şeması
  window.vmtTelegramAc = function(ev) {
    if (ev) { ev.preventDefault(); ev.stopPropagation(); }
    var kullanici = 'vumatech';
    var mobil = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
    if (mobil) {
      // Mobilde Telegram uygulamasını aç; yoksa web'e fallback
      var zaman = Date.now();
      var tgUrl = 'tg://resolve?domain=' + kullanici;
      var webUrl = 'https://t.me/' + kullanici;
      // Önce uygulama şemasını dene
      window.location.href = tgUrl;
      // 1.5 saniye içinde sayfa aktifse (uygulama açılmadıysa) web'e yönlendir
      setTimeout(function() {
        if (Date.now() - zaman < 1800) {
          window.location.href = webUrl;
        }
      }, 1500);
    } else {
      // Masaüstünde Telegram Web'i yeni sekmede aç
      window.open('https://web.telegram.org/k/#@' + kullanici, '_blank', 'noopener');
    }
    return false;
  };

  // ==================== SEKME KAYDIRMA ====================
  window.vmtTabScroll = function(dir) {
    var tabs = document.getElementById('vmt-tabs');
    if (!tabs) return;
    var scrollAmount = tabs.clientWidth * 0.6 * dir;
    tabs.scrollBy({left: scrollAmount, behavior: 'smooth'});
  };

  function tabScrollDurumGuncelle() {
    var tabs = document.getElementById('vmt-tabs');
    var wrap = document.getElementById('vmt-tabs-wrap');
    if (!tabs || !wrap) return;
    var solVar = tabs.scrollLeft > 5;
    var sagVar = tabs.scrollLeft < (tabs.scrollWidth - tabs.clientWidth - 5);

    if (solVar) {
      wrap.classList.add('scrolled-left', 'can-scroll-left');
    } else {
      wrap.classList.remove('scrolled-left', 'can-scroll-left');
    }
    if (sagVar) {
      wrap.classList.add('scrolled-right', 'can-scroll-right');
      // Sağ fade'i göstermek için sınıf kaldır (:after opacity 1 kalsın)
      wrap.classList.remove('scrolled-right-end');
    } else {
      wrap.classList.remove('can-scroll-right');
      wrap.classList.add('scrolled-right');
    }
  }

  // Sekme değişikliklerinde tetikle
  function tabScrollDinleyicileriKur() {
    var tabs = document.getElementById('vmt-tabs');
    if (!tabs) return;
    tabs.addEventListener('scroll', tabScrollDurumGuncelle, {passive: true});
    window.addEventListener('resize', tabScrollDurumGuncelle);
    // İlk durum
    setTimeout(tabScrollDurumGuncelle, 100);
  }

  window.vmtStripScroll = function(btn, dir) {
    var wrap = btn.parentElement;
    var strip = wrap.querySelector('.vmt-strip');
    if (!strip) return;
    var scrollAmount = strip.clientWidth * 0.8 * dir;
    strip.scrollBy({left: scrollAmount, behavior: 'smooth'});
  };

  window.vmtFavoriToggle = function(oyunId, btn) {
    var artikFavori = favoriToggle(oyunId);
    var butonlar = document.querySelectorAll('.vmt-fav-btn, .vmt-fav-btn-large');
    for (var i = 0; i < butonlar.length; i++) {
      var b = butonlar[i];
      var card = b.closest('[data-id]');
      if (card && String(card.getAttribute('data-id')) === String(oyunId)) {
        if (artikFavori) b.classList.add('active');
        else b.classList.remove('active');
      }
      if (b.classList.contains('vmt-fav-btn-large') && b.getAttribute('data-id') === String(oyunId)) {
        if (artikFavori) b.classList.add('active');
        else b.classList.remove('active');
      }
    }
    var favWrap = document.getElementById('vmt-favori-wrap');
    if (favWrap && !urlParam('game')) {
      guncelleFavoriveSonOynanan();
    }
  };

  function guncelleFavoriveSonOynanan() {
    var t = I18N[aktifDil];

    // Populer (TUM_OYUNLAR'in ilk 20'si - mostplayed'dan geliyor)
    var populer = TUM_OYUNLAR.slice(0, 20);
    var popEl = document.getElementById('vmt-populer-wrap');
    if (popEl) {
      // Ates emoji BMP disi - HTML entity kullaniyoruz
      popEl.innerHTML = renderStrip(t.popularHead || 'En Populer', '&#128293;', populer);
    }

    var favIds = favoriGetir();
    var favOyunlar = [];
    for (var i = 0; i < favIds.length; i++) {
      for (var j = 0; j < TUM_OYUNLAR.length; j++) {
        if (String(TUM_OYUNLAR[j].id) === String(favIds[i])) {
          favOyunlar.push(TUM_OYUNLAR[j]);
          break;
        }
      }
    }
    var favEl = document.getElementById('vmt-favori-wrap');
    if (favEl) {
      if (favOyunlar.length > 0) {
        favEl.innerHTML = renderStrip(t.favoriteHead || 'Favorilerim', '⭐', favOyunlar);
      } else {
        favEl.innerHTML = '';
      }
    }

    var sonIds = sonOynananGetir();
    var sonOyunlar = [];
    for (var i = 0; i < sonIds.length; i++) {
      for (var j = 0; j < TUM_OYUNLAR.length; j++) {
        if (String(TUM_OYUNLAR[j].id) === String(sonIds[i])) {
          sonOyunlar.push(TUM_OYUNLAR[j]);
          break;
        }
      }
    }
    var sonEl = document.getElementById('vmt-son-oynanan-wrap');
    if (sonEl) {
      if (sonOyunlar.length > 0) {
        // Joystick BMP disi - HTML entity
        sonEl.innerHTML = renderStrip(t.recentHead || 'Son Oynadiklarin', '&#128377;', sonOyunlar);
      } else {
        sonEl.innerHTML = '';
      }
    }
  }

  // Görünür oyun kartlarının başlıklarını çevir (lazy - tek tek)
  function gorunurBasliklariCevir() {
    if (aktifDil === 'en') return;  // İngilizce ise çeviri yok

    var kartlar = document.querySelectorAll('.vmt-card-title[data-orijinal]');
    var idx = 0;
    var maxParalel = 3;  // Aynı anda max 3 çeviri (API'yi sıkıştırma)
    var aktif = 0;

    function siradaki() {
      if (idx >= kartlar.length) return;
      if (aktif >= maxParalel) return;

      var kart = kartlar[idx];
      idx++;
      aktif++;

      var orijinal = kart.getAttribute('data-orijinal');
      if (!orijinal) {
        aktif--;
        siradaki();
        return;
      }

      basligiTercume(orijinal, aktifDil, function(ceviri) {
        kart.textContent = ceviri;
        aktif--;
        // Sonraki çeviri
        setTimeout(siradaki, 100);
      });

      // Paralel başka birini başlat
      setTimeout(siradaki, 50);
    }

    // İlk dalgayı başlat
    for (var i = 0; i < maxParalel; i++) {
      setTimeout(siradaki, i * 50);
    }
  }

  var CORS_PROXIES = [
    'https://vumatech-proxy.vuraloglu.workers.dev/?url=',  // KENDİ PROXY'MİZ (tek ve yeterli)
    'https://api.codetabs.com/v1/proxy?quest='             // Yedek (çok gerekirse)
  ];

  // Cache: hem oturum (memory) hem kalıcı (localStorage)
  var API_CACHE = {};
  var CACHE_TTL = 30 * 60 * 1000; // 30 dakika

  function cacheGet(key) {
    // Önce memory
    if (API_CACHE[key]) return API_CACHE[key];
    // Sonra localStorage
    try {
      var raw = localStorage.getItem('vmt-api-' + key);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (Date.now() - obj.t > CACHE_TTL) {
        localStorage.removeItem('vmt-api-' + key);
        return null;
      }
      API_CACHE[key] = obj.d; // memory'e de koy
      return obj.d;
    } catch(e) { return null; }
  }

  function cacheSet(key, data) {
    API_CACHE[key] = data;
    try {
      localStorage.setItem('vmt-api-' + key, JSON.stringify({t: Date.now(), d: data}));
    } catch(e) {
      // localStorage dolu olabilir - eski cache'leri temizle
      try {
        for (var i = localStorage.length - 1; i >= 0; i--) {
          var k = localStorage.key(i);
          if (k && k.indexOf('vmt-api-') === 0) localStorage.removeItem(k);
        }
        localStorage.setItem('vmt-api-' + key, JSON.stringify({t: Date.now(), d: data}));
      } catch(e2) {}
    }
  }

  function apiCagir(kategori, tip, miktar, callback) {
    var origUrl = 'https://gamemonetize.com/rssfeed.php?format=json&type=html5';
    origUrl += '&category=' + encodeURIComponent(kategori || 'All');
    origUrl += '&popularity=' + encodeURIComponent(tip || 'newest');
    origUrl += '&amount=' + (miktar || SAYFA_BOYUTU);
    origUrl += '&company=All';

    var cacheKey = 'v12-' + (kategori || 'All') + '|' + (tip || 'newest') + '|' + (miktar || SAYFA_BOYUTU);
    var cached = cacheGet(cacheKey);
    if (cached) {
      console.log('VuMaTech: Cache hit:', cacheKey);
      // Eski cache'lerde encoded entity'ler olabilir, normalize et
      if (cached.length && typeof normalizeOyun === 'function') {
        for (var iC = 0; iC < cached.length; iC++) {
          normalizeOyun(cached[iC]);
        }
      }
      callback(null, cached);
      return;
    }

    // Cache yoksa - splash'i 500ms sonra göster (hızlı yüklenirse hiç görünmez)
    if (!splashAcildi && typeof splashZamanli === 'function') {
      // splashZamanli(); // v11.1: progressive loading ile splash'a gerek yok
    }

    // PARALEL strateji: tüm proxy'lere aynı anda istek at, ilk başarılı kazanır
    var t0 = Date.now();
    var bitti = false;
    var basarisizSayac = 0;
    var toplamProxy = CORS_PROXIES.length;

    function tekProxiyDene(proxyUrl, idx) {
      var controller = new AbortController();
      var timeoutId = setTimeout(function() { controller.abort(); }, 8000);

      fetch(proxyUrl, { signal: controller.signal })
        .then(function(r) {
          clearTimeout(timeoutId);
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.text();
        })
        .then(function(text) {
          if (bitti) return; // Başka proxy çoktan kazandı
          var data;
          try {
            data = JSON.parse(text);
          } catch(e) {
            try {
              var wrapped = JSON.parse(text);
              if (wrapped && wrapped.contents) data = JSON.parse(wrapped.contents);
            } catch(e2) {
              throw new Error('JSON parse hatası');
            }
          }

          if (Array.isArray(data) && data.length > 0) {
            bitti = true;
            var sure = Date.now() - t0;
            console.log('VuMaTech: API başarılı (' + sure + 'ms), proxy #' + (idx+1) + ', ' + data.length + ' oyun');
            // Veriyi temizle - HTTPS dönüşümü ve eksik alanları doldur
            for (var k = 0; k < data.length; k++) {
              if (data[k].thumb) {
                data[k].thumb = data[k].thumb.replace(/^http:\/\//, 'https://');
              } else {
                data[k].thumb = 'https://via.placeholder.com/512x384/2563eb/ffffff?text=' + encodeURIComponent(data[k].title || 'Game');
              }
              if (data[k].url) {
                data[k].url = data[k].url.replace(/^http:\/\//, 'https://');
              }
            }
            cacheSet(cacheKey, data);
            callback(null, data);
          } else {
            throw new Error('Boş veri');
          }
        })
        .catch(function(err) {
          clearTimeout(timeoutId);
          if (bitti) return;
          console.warn('VuMaTech: Proxy #' + (idx+1) + ' başarısız:', err.message);
          // Sıradaki proxy'yi dene (rate limit için 500ms bekle)
          setTimeout(siradakiProxy, 500);
        });
    }

    // Proxy'leri sıralı dene (paralel rate limit'i tetikliyor)
    var proxyIdx = 0;
    function siradakiProxy() {
      if (bitti) return;
      if (proxyIdx >= CORS_PROXIES.length) {
        // Tüm proxy'ler denendi, fallback'e dön
        if (!bitti) {
          bitti = true;
          console.warn('VuMaTech: Tüm proxy denemeleri başarısız, fallback verilere dönülüyor');
          callback(null, fallbackOyunlar(kategori, miktar));
        }
        return;
      }
      var i = proxyIdx;
      proxyIdx++;
      var url;
      if (CORS_PROXIES[i] === '') {
        url = origUrl;
      } else {
        url = CORS_PROXIES[i] + encodeURIComponent(origUrl);
      }
      tekProxiyDene(url, i);
    }
    siradakiProxy();
  }

  // FALLBACK: API çalışmazsa bu liste kullanılır
  function fallbackOyunlar(kategori, miktar) {
    var liste = FALLBACK_OYUNLAR.slice();
    if (kategori && kategori !== 'All') {
      var filt = liste.filter(function(o) { return o.category === kategori; });
      if (filt.length > 0) liste = filt;
    }
    return liste.slice(0, miktar || 50);
  }

  // Gömülü oyun listesi (API çalışmazsa kullanılır)
  var FALLBACK_OYUNLAR = [
    {id:'36892',title:'Dead Paradise',description:'Apocalyptic car shooting game.',instructions:'Arrow keys to drive, X to shoot',url:'https://html5.gamemonetize.co/td7r994z5ls02swod3lm0gk9h2jl2jmi/',category:'Racing',tags:'3D, Action, Cars, Shooting',thumb:'https://img.gamemonetize.com/td7r994z5ls02swod3lm0gk9h2jl2jmi/512x384.jpg'},
    {id:'36891',title:'Shadow War Idle',description:'Endless runner survival game.',instructions:'Use mouse or keyboard',url:'https://html5.gamemonetize.co/96i3099giub4zocl0g8kbltqscfyox5k/',category:'Hypercasual',tags:'Action, endless, Fighting',thumb:'https://img.gamemonetize.com/96i3099giub4zocl0g8kbltqscfyox5k/512x384.jpg'},
    {id:'36890',title:'Special Forces X',description:'Elite special forces action shooting game.',instructions:'WASD or Arrow Keys to Move, Space or F to Shoot',url:'https://html5.gamemonetize.co/6r1xx423npjwxlcrdr8t30h72trj0n2b/',category:'Adventure',tags:'Action, Army, Gun, Shoot',thumb:'https://img.gamemonetize.com/6r1xx423npjwxlcrdr8t30h72trj0n2b/512x384.jpg'},
    {id:'36889',title:'Kick a Lucky Block',description:'Fun arcade kicking game.',instructions:'Click to kick the block',url:'https://html5.gamemonetize.co/w0niw3a0zkklmu5tblmf8t78me8hrk8g/',category:'Arcade',tags:'Brainrot, Football, run',thumb:'https://img.gamemonetize.com/w0niw3a0zkklmu5tblmf8t78me8hrk8g/512x384.jpg'},
    {id:'36888',title:'Diamond Paint Art',description:'Relaxing color by number game.',instructions:'Mouse Click and Tap to play',url:'https://html5.gamemonetize.co/jgbk9yjbd9dvw9eyn5c3tc8qx52a8xtc/',category:'Puzzles',tags:'Color, Drawing, Puzzle',thumb:'https://img.gamemonetize.com/jgbk9yjbd9dvw9eyn5c3tc8qx52a8xtc/512x384.jpg'},
    {id:'36887',title:'PunchMaster',description:'Action boxing game with combos.',instructions:'WASD to move, J or Space to punch',url:'https://html5.gamemonetize.co/k9olx1kojzty3mcb3zst7m3l0bc789d6/',category:'Sports',tags:'Boxing, Fighting',thumb:'https://img.gamemonetize.com/k9olx1kojzty3mcb3zst7m3l0bc789d6/512x384.jpg'},
    {id:'36886',title:'Kids Math Easy',description:'Math quiz for kids.',instructions:'Choose the CORRECT answer',url:'https://html5.gamemonetize.co/wkwjwbe39rsko3156aqcej0025lvkcxr/',category:'Puzzles',tags:'Math, Quiz, Kids',thumb:'https://img.gamemonetize.com/wkwjwbe39rsko3156aqcej0025lvkcxr/512x384.jpg'},
    {id:'36885',title:'Meow Block Color',description:'Cute cat puzzle game.',instructions:'Click and drag to play',url:'https://html5.gamemonetize.co/r7iwhsbsh5tucjj5u1884nhz7ndz2o6r/',category:'Puzzles',tags:'Cat, Logic, Puzzle',thumb:'https://img.gamemonetize.com/r7iwhsbsh5tucjj5u1884nhz7ndz2o6r/512x384.jpg'},
    {id:'36884',title:'LabBuster',description:'Lab survival shooting adventure.',instructions:'Click and drag to play',url:'https://html5.gamemonetize.co/4bi896jnadqe2ti5xjrozs6po0ic4dhf/',category:'Adventure',tags:'Adventure, Robot',thumb:'https://img.gamemonetize.com/4bi896jnadqe2ti5xjrozs6po0ic4dhf/512x384.jpg'},
    {id:'36883',title:'Ladderrex',description:'Racing with ladder building.',instructions:'Run and collect logs to build ladders',url:'https://html5.gamemonetize.co/ct6sqlvw5bv8uvrca4350sl4ums0aqd7/',category:'Racing',tags:'Race, Bridge, Hypercasual',thumb:'https://img.gamemonetize.com/ct6sqlvw5bv8uvrca4350sl4ums0aqd7/512x384.jpg'},
    {id:'36882',title:'Untangle Snake Frenzy',description:'Untangle snakes puzzle.',instructions:'Tap free snakes to remove',url:'https://html5.gamemonetize.co/niuis76wxbzncmx7ob58jy6l4ua0gesu/',category:'Puzzles',tags:'Snake, Puzzle, Brain',thumb:'https://img.gamemonetize.com/niuis76wxbzncmx7ob58jy6l4ua0gesu/512x384.jpg'},
    {id:'fl1',title:'Subway Surfers',description:'Classic endless runner game.',instructions:'Swipe to dodge',url:'https://html5.gamemonetize.co/td7r994z5ls02swod3lm0gk9h2jl2jmi/',category:'Action',tags:'Running, Action',thumb:'https://img.gamemonetize.com/td7r994z5ls02swod3lm0gk9h2jl2jmi/512x384.jpg'},
    {id:'fl2',title:'Moto X3M',description:'Motorbike stunt racing.',instructions:'Arrow keys to drive',url:'https://html5.gamemonetize.co/96i3099giub4zocl0g8kbltqscfyox5k/',category:'Racing',tags:'Bike, Racing',thumb:'https://img.gamemonetize.com/96i3099giub4zocl0g8kbltqscfyox5k/512x384.jpg'},
    {id:'fl3',title:'2048',description:'Classic number puzzle.',instructions:'Arrow keys to combine tiles',url:'https://html5.gamemonetize.co/r7iwhsbsh5tucjj5u1884nhz7ndz2o6r/',category:'Puzzles',tags:'Numbers, Brain',thumb:'https://img.gamemonetize.com/r7iwhsbsh5tucjj5u1884nhz7ndz2o6r/512x384.jpg'},
    {id:'fl4',title:'Snake.io',description:'Multiplayer snake game.',instructions:'Mouse to move',url:'https://html5.gamemonetize.co/niuis76wxbzncmx7ob58jy6l4ua0gesu/',category:'.IO',tags:'Snake, IO, Multiplayer',thumb:'https://img.gamemonetize.com/niuis76wxbzncmx7ob58jy6l4ua0gesu/512x384.jpg'},
    {id:'fl5',title:'Stickman Fighter',description:'2-player stickman fighting.',instructions:'WASD player 1, Arrows player 2',url:'https://html5.gamemonetize.co/k9olx1kojzty3mcb3zst7m3l0bc789d6/',category:'2 Player',tags:'Fighting, Stickman',thumb:'https://img.gamemonetize.com/k9olx1kojzty3mcb3zst7m3l0bc789d6/512x384.jpg'}
  ];

  // Tek oyun bilgisi al (API'den)
  function oyunGetir(id, callback) {
    // 1. Memory cache'de ara
    for (var i = 0; i < TUM_OYUNLAR.length; i++) {
      if (TUM_OYUNLAR[i].id === id) {
        callback(null, TUM_OYUNLAR[i]);
        return;
      }
    }

    // 2. localStorage'daki TÜM cache'lenmiş oyunları tara
    try {
      for (var k = 0; k < localStorage.length; k++) {
        var key = localStorage.key(k);
        if (!key || key.indexOf('vmt-api-') !== 0) continue;
        var raw = localStorage.getItem(key);
        if (!raw) continue;
        try {
          var obj = JSON.parse(raw);
          if (obj && obj.d && obj.d.length) {
            for (var n = 0; n < obj.d.length; n++) {
              if (obj.d[n].id === id) {
                console.log('VuMaTech: Oyun localStorage cache\'ten bulundu');
                callback(null, obj.d[n]);
                return;
              }
            }
          }
        } catch(e) {}
      }
    } catch(e) {}

    // 3. API'den çek - 4 farklı strateji dene
    var stratejiler = [
      {cat: 'All', tip: 'newest', miktar: 200},
      {cat: 'All', tip: 'mostplayed', miktar: 200},
      {cat: 'All', tip: 'newest', miktar: 100},
      {cat: 'All', tip: 'mostplayed', miktar: 100}
    ];

    var sIdx = 0;
    function denedi() {
      if (sIdx >= stratejiler.length) {
        // Hepsi başarısız - direkt URL ile oyunu kurgula
        console.warn('VuMaTech: API\'den bulunamadı, varsayılan oyun verisi oluşturuluyor');
        // Embed URL'sini ID'den tahmin etmek mümkün değil, kullanıcıya hata göster
        callback(new Error('Oyun şu anda yüklenemiyor'));
        return;
      }
      var st = stratejiler[sIdx];
      sIdx++;
      apiCagir(st.cat, st.tip, st.miktar, function(err, data) {
        if (err || !data) {
          denedi();
          return;
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) {
            callback(null, data[i]);
            return;
          }
        }
        denedi();
      });
    }
    denedi();
  }

  // ==================== RENDER: ANA SAYFA ====================
  function renderAnaSayfa() {
    var ana = document.getElementById('vmt-app');
    var t = I18N[aktifDil];

    // Hero + Tabs + Grid yapısı
    ana.innerHTML =
      '<section class="vmt-hero">' +
        '<div class="vmt-hero-inner">' +
          '<div class="vmt-hero-tag"><span class="emoji">\uD83C\uDFAE</span><span data-i18n-html="heroTag">' + t.heroTag + '</span></div>' +
          '<h1 data-i18n-html="heroTitle">' + t.heroTitle + '</h1>' +
          '<p data-i18n="heroSubtitle">' + t.heroSubtitle + '</p>' +
          '<div class="vmt-hero-stats">' +
            '<div><div class="num blue">36K+</div><div class="lbl" data-i18n="statGames">' + t.statGames + '</div></div>' +
            '<div><div class="num orange">10</div><div class="lbl" data-i18n="statCategories">' + t.statCategories + '</div></div>' +
            '<div><div class="num green vmt-online-sayi">2.8K</div><div class="lbl" data-i18n="statOnline"><span class="vmt-live-dot"></span> ' + t.statOnline + '</div></div>' +
            '<div><div class="num">1M+</div><div class="lbl" data-i18n="statMonthly">' + t.statMonthly + '</div></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div class="vmt-promo-banner">' +
        '<div class="vmt-promo-inner">' +
          '<div class="vmt-promo-text">' +
            '<div class="vmt-promo-tag">🌐 VuMaTech</div>' +
            '<h3>' + t.promoTitle + '</h3>' +
            '<p>' + t.promoSub + '</p>' +
          '</div>' +
          '<a href="https://vumatech.net" target="_blank" rel="noopener" class="vmt-promo-btn">' + t.promoBtn + ' →</a>' +
        '</div>' +
      '</div>' +
      '<div class="vmt-tabs-wrap" id="vmt-tabs-wrap">' +
            '<button class="vmt-tab-arrow prev" onclick="vmtTabScroll(-1)" aria-label="Sol">‹</button>' +
            '<div class="vmt-tabs" id="vmt-tabs">' + tabsHtml() + '</div>' +
            '<button class="vmt-tab-arrow next" onclick="vmtTabScroll(1)" aria-label="Sağ">›</button>' +
          '</div>' +
      '<div class="vmt-main-layout">' +
        '<aside class="vmt-sidebar-promo">' +
          '<div class="vmt-promo-card">' +
            '<div class="vmt-promo-card-ico">\uD83C\uDF10</div>' +
            '<h4>VuMaTech</h4>' +
            '<p>' + t.sidePromoSub + '</p>' +
            '<a href="https://vumatech.net" target="_blank" rel="noopener" class="vmt-promo-card-btn">' + t.sidePromoBtn + '</a>' +
          '</div>' +
        '</aside>' +
        '<main class="vmt-content">' +
          '<div class="vmt-section-head"><h2><span class="ico">\u2B50</span> <span>' + t.featured + '</span></h2><span class="count">' + t.featuredSub + '</span></div>' +
          '<div class="vmt-featured" id="vmt-featured"><div class="vmt-loading">' + t.loading + '</div></div>' +
          '<div id="vmt-son-oynanan-wrap"></div>' +
          '<div id="vmt-favori-wrap"></div>' +
          '<div id="vmt-populer-wrap"></div>' +
          '<div class="vmt-section-head"><h2><span class="ico">\uD83D\uDD25</span> <span>' + t.trendGames + '</span></h2><span class="count" id="vmt-game-count"></span></div>' +
          '<div class="vmt-grid" id="vmt-grid"><div class="vmt-loading">' + t.loading + '</div></div>' +
        '</main>' +
        '<aside class="vmt-sidebar-promo">' +
          '<div class="vmt-stats-card">' +
            '<div class="vmt-stats-row"><span class="ico">\uD83C\uDFAE</span><span class="num">36K+</span><span class="lbl">' + t.statGames + '</span></div>' +
            '<div class="vmt-stats-row"><span class="ico">\uD83C\uDF0D</span><span class="num">4</span><span class="lbl">' + t.statCategories + '</span></div>' +
            '<div class="vmt-stats-row"><span class="ico">\uD83C\uDD93</span><span class="num">100%</span><span class="lbl">' + t.freePlay + '</span></div>' +
            '<div class="vmt-stats-row"><span class="ico">\uD83D\uDCF1</span><span class="num">HTML5</span><span class="lbl">Web</span></div>' +
          '</div>' +
        '</aside>' +
      '</div>';

    // Tab event listener
    var tabs = document.getElementById('vmt-tabs');
    tabs.addEventListener('click', function(e) {
      var btn = e.target.closest('.vmt-tab');
      if (!btn) return;
      var cat = btn.getAttribute('data-cat');
      aktifKategori = cat;
      urlGuncelle({cat: cat === 'trend' ? null : cat});
      oyunlarYukle();
      var allTabs = document.querySelectorAll('.vmt-tab');
      for (var i = 0; i < allTabs.length; i++) allTabs[i].classList.remove('active', 'hot');
      btn.classList.add('active');
      if (cat === 'trend') btn.classList.add('hot');
      btn.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
    });

    // Aktif tab'ı işaretle
    var aktTab = document.querySelector('.vmt-tab[data-cat="' + aktifKategori + '"]');
    if (aktTab) {
      var allTabs = document.querySelectorAll('.vmt-tab');
      for (var i = 0; i < allTabs.length; i++) allTabs[i].classList.remove('active', 'hot');
      aktTab.classList.add('active');
      if (aktifKategori === 'trend') aktTab.classList.add('hot');
    }

    oyunlarYukle();
  }

  function tabsHtml() {
    var t = I18N[aktifDil];
    var tabs = [
      ['trend', t.catTrend, true],
      ['all', t.catAll, false],
      ['aksiyon', t.catAction, false],
      ['macera', t.catAdventure, false],
      ['silah', t.catShooting, false],
      ['dovus', t.catFighting, false],
      ['yaris', t.catRacing, false],
      ['3d', t.cat3D, false],
      ['bulmaca', t.catPuzzle, false],
      ['spor', t.catSports, false],
      ['klasik', t.catClassic, false],
      ['2kisilik', t.cat2P, false],
      ['io', '.io', false],
      ['zeka', t.catBrain, false],
      ['yemek', t.catCooking, false],
      ['kiz', t.catGirls, false],
      ['cocuk', t.catKids, false]
    ];
    var html = '';
    for (var i = 0; i < tabs.length; i++) {
      var ikon = KAT_IKON[tabs[i][0]] || '\uD83C\uDFAE';
      html += '<button class="vmt-tab' + (tabs[i][2] ? ' hot' : '') + '" data-cat="' + tabs[i][0] + '">' +
              ikon + ' <span>' + tabs[i][1] + '</span></button>';
    }
    return html;
  }

  // ==================== OYUNLARI YÜKLE ====================
  function oyunlarYukle() {
    var apiCat = API_KAT[aktifKategori] || 'All';
    var tip = (aktifKategori === 'trend') ? 'mostplayed' : 'newest';

    // Kendi proxy'imiz var - 4 çağrı ile ~1500 unique oyun
    var hedefler = [
      {cat: apiCat, tip: 'mostplayed', miktar: 500},
      {cat: apiCat, tip: 'newest', miktar: 500},
      {cat: apiCat, tip: 'hitgames', miktar: 500},
      {cat: apiCat, tip: 'featured', miktar: 500}
    ];

    // PROGRESSIVE LOADING: İlk sonuç gelir gelmez göster, gerisini arka planda ekle
    var sonuclar = [];
    var tamamlanan = 0;
    var ilkGoster = false;

    hedefler.forEach(function(h, idx) {
      apiCagir(h.cat, h.tip, h.miktar, function(err, data) {
        tamamlanan++;
        if (!err && data && data.length) {
          sonuclar[idx] = data;
        }

        // İLK sonuç geldiğinde HEMEN göster (sayfa hızlı açılsın)
        if (!ilkGoster && sonuclar[idx] && sonuclar[idx].length > 100) {
          ilkGoster = true;
          console.log('VuMaTech: İlk parti hazır, gösteriliyor (' + sonuclar[idx].length + ' oyun)');
          birlestirVeGoster(sonuclar);
        }

        // Hepsi bittiğinde son bir refresh - gerçek toplamı göster
        if (tamamlanan === hedefler.length) {
          console.log('VuMaTech: Tüm çağrılar tamamlandı, son güncelleme');
          birlestirVeGoster(sonuclar);
        }
      });
    });
  }

  // Birden fazla API sonucunu birleştir, dedup yap, göster
  function birlestirVeGoster(sonuclar) {
    // API'den gelen HTML entity'leri decode et (Tom & Jerry → Tom & Jerry)
    for (var iN = 0; iN < sonuclar.length; iN++) {
      if (sonuclar[iN] && sonuclar[iN].length) {
        for (var jN = 0; jN < sonuclar[iN].length; jN++) {
          normalizeOyun(sonuclar[iN][jN]);
        }
      }
    }

    var birlesik = [];
    var gorulen = {};

    // Sırayla ekle: ilk sonuçtan başla, sonra diğerlerinden eksikleri ekle
    for (var i = 0; i < sonuclar.length; i++) {
      var liste = sonuclar[i] || [];
      for (var j = 0; j < liste.length; j++) {
        var oyun = liste[j];
        if (!oyun || !oyun.id) continue;
        if (gorulen[oyun.id]) continue;
        gorulen[oyun.id] = true;
        birlesik.push(oyun);
      }
    }

    TUM_OYUNLAR = birlesik;
    console.log('VuMaTech: Toplam ' + birlesik.length + ' unique oyun yüklendi');
    // Debug için her API çağrısının kaç oyun döndüğünü göster
    for (var iDbg = 0; iDbg < sonuclar.length; iDbg++) {
      var dbgListe = sonuclar[iDbg] || [];
      console.log('VuMaTech DEBUG: API #' + (iDbg+1) + ' → ' + dbgListe.length + ' oyun');
    }

    // Arama filtresi varsa uygula
    var filtreli = birlesik;
    if (arama && arama.length > 0) {
      var ar = arama.toLowerCase();
      filtreli = birlesik.filter(function(o) {
        var t = (o.title || '').toLowerCase();
        var tags = (o.tags || '').toLowerCase();
        var cat = (o.category || '').toLowerCase();
        return t.indexOf(ar) >= 0 || tags.indexOf(ar) >= 0 || cat.indexOf(ar) >= 0;
      });
    }

    // İlk gösterimde sadece GORUNEN_BASLANGIC kadar
    window._gosterilenSayi = GORUNEN_BASLANGIC;
    window._filtreliOyunlar = filtreli;

    gridiCiz();

    // Featured oyunları en popüler 3 oyunla doldur
    var featured = filtreli.slice(0, 3);
    var featEl = document.getElementById("vmt-featured"); if (featEl) featEl.innerHTML = renderFeatured(featured);
    if (typeof guncelleFavoriveSonOynanan === 'function') guncelleFavoriveSonOynanan();
    // Sekme kaydırma dinleyicilerini kur
    if (typeof tabScrollDinleyicileriKur === 'function') setTimeout(tabScrollDinleyicileriKur, 200);

    // Splash kapat
    if (typeof splashKapat === 'function') splashKapat();
  }

  // Grid'i mevcut state'e göre çiz
  function gridiCiz() {
    var grid = document.getElementById('vmt-grid');
    var sayac = document.getElementById('vmt-game-count');
    if (!grid) return;

    var filtreli = window._filtreliOyunlar || TUM_OYUNLAR;
    var goster = filtreli.slice(0, window._gosterilenSayi || GORUNEN_BASLANGIC);

    if (goster.length === 0) {
      var t = I18N[aktifDil];
      grid.innerHTML = '<div class="vmt-empty">' + (t.noResults || 'No games found') + '</div>';
      if (sayac) sayac.textContent = '';
      return;
    }

    var html = renderGrid(goster);

    // "Daha fazla yükle" butonu
    var dahaFazla = filtreli.length - goster.length;
    if (dahaFazla > 0) {
      var t = I18N[aktifDil];
      var btnText = (t.loadMore || 'Load more') + ' (' + dahaFazla + ')';
      html += '<div class="vmt-load-more-wrap"><button class="vmt-load-more" onclick="vmtDahaFazlaYukle()">' + btnText + '</button></div>';
    }

    grid.innerHTML = html;

    // Sayaç güncellesi
    if (sayac) {
      sayac.textContent = goster.length + ' / ' + filtreli.length;
    }
    // Not: Oyun başlıkları orijinal kalır (uluslararası marka isimleri)
  }

  // Daha fazla yükle butonu
  window.vmtDahaFazlaYukle = function() {
    window._gosterilenSayi = (window._gosterilenSayi || GORUNEN_BASLANGIC) + GORUNEN_ARTIM;
    gridiCiz();
    // Yeni eklenen alanı görmek için ufak smooth scroll
    setTimeout(function() {
      var btn = document.querySelector('.vmt-load-more-wrap');
      if (btn) btn.scrollIntoView({behavior: 'smooth', block: 'center'});
    }, 100);
  };

  function renderFeatured(oyunlar) {
    var t = I18N[aktifDil];
    var html = '';
    for (var i = 0; i < oyunlar.length; i++) {
      var o = oyunlar[i];
      var renk = renkSec(o.id);
      var rozet = i === 0 ? '\u2B50 ' + t.badgeTop : '\uD83D\uDD25 ' + t.badgeHot;
      var rozetClass = i === 0 ? '' : ' new';
      var thumbUrl = o.thumb || '';
      var altThumb = 'https://img.gamemonetize.com/' + o.id + '/512x384.jpg';
      html += '<a class="vmt-feat-card" href="?game=' + o.id + '" onclick="vmtGotoGame(\'' + o.id + '\', event)">' +
        '<div class="vmt-feat-cover">' +
          '<img src="' + thumbUrl + '" alt="' + escapeHtml(o.title) + '" onload="console.log(\'Img OK:\', this.src)" onerror="console.error(\'Img FAIL:\', this.src); this.style.background=\'#1e293b\';" />' +
          '<div class="vmt-feat-tint"></div>' +
        '</div>' +
        '<span class="vmt-feat-badge' + rozetClass + '">' + rozet + '</span>' +
        '<div class="vmt-feat-overlay"><h3 class="vmt-card-title" data-orijinal="' + escapeHtml(o.title) + '">' + escapeHtml(o.title) + '</h3>' +
        '<div class="meta"><span>' + escapeHtml(o.category) + '</span>' +
        '<span>\u25B6 ' + t.freePlay + '</span></div></div></a>';
    }
    return html;
  }

  // Splash kontrol değişkenleri
  var splashTimer = null;
  var splashAcildi = false;

  // Splash'i göster (sadece API yavaşsa)
  function splashGoster() {
    if (splashAcildi) return;
    var splash = document.getElementById('vmt-splash');
    if (splash && !splash.classList.contains('aktif') && !splash.classList.contains('fadeout')) {
      splash.classList.add('aktif');
      splashAcildi = true;
      console.log('VuMaTech: Splash gösterildi (yavaş bağlantı)');
    }
  }

  // Splash'i kapat
  function splashKapat() {
    // Bekleyen timer varsa iptal et (zaten gösterilmedi)
    if (splashTimer) {
      clearTimeout(splashTimer);
      splashTimer = null;
    }
    var splash = document.getElementById('vmt-splash');
    if (!splash) return;
    if (splash.classList.contains('aktif')) {
      // Görünüyor - fadeout ile kapat
      splash.classList.add('fadeout');
      setTimeout(function() {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
      }, 500);
    } else {
      // Hiç görünmedi - direkt DOM'dan kaldır
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }
  }

  // Splash'i 500ms sonra göster (cache hit'te hızlı yüklenirse hiç gösterme)
  function splashZamanli() {
    splashTimer = setTimeout(function() {
      splashGoster();
    }, 500);
  }

  function renderGrid(oyunlar) {
    var html = '';
    for (var i = 0; i < oyunlar.length; i++) {
      var o = oyunlar[i];
      var renk = renkSec(o.id);
      // Her 8. oyunda etiket göster (rastgele)
      var rozet = '';
      if (i % 12 === 0) rozet = '<span class="vmt-card-badge top">TOP</span>';
      else if (i % 9 === 1) rozet = '<span class="vmt-card-badge hot">HIT</span>';
      else if (i % 15 === 2) rozet = '<span class="vmt-card-badge new">NEW</span>';

      var thumbUrl2 = o.thumb || '';
      var altThumb2 = 'https://img.gamemonetize.com/' + o.id + '/512x384.jpg';
      html += '<a class="vmt-card" href="?game=' + o.id + '" onclick="vmtGotoGame(\'' + o.id + '\', event)">' +
        '<div class="vmt-card-cover">' +
          '<img src="' + thumbUrl2 + '" alt="' + escapeHtml(o.title) + '" onerror="this.style.opacity=0.3" />' +
          '<div class="vmt-card-play"><div class="vmt-card-play-btn">\u25B6</div></div>' +
        '</div>' +
        rozet +
        '<div class="vmt-card-info"><h3 class="vmt-card-title" data-orijinal="' + escapeHtml(o.title) + '">' + escapeHtml(o.title) + '</h3>' +
        '<div class="meta"><span>' + escapeHtml(o.category) + '</span>' +
        '<span class="plays">\u25B6 ' + (o.tags ? o.tags.split(',')[0].trim() : 'Play') + '</span></div></div></a>';
    }
    return html;
  }

  // ==================== OYUN SAYFASI ====================
  function renderOyunSayfasi(gameId) {
    var ana = document.getElementById('vmt-app');
    var t = I18N[aktifDil];

    // Splash'i hemen kapat (oyun sayfasında splash gerekmez)
    if (typeof splashKapat === 'function') splashKapat();

    ana.innerHTML = '<div class="vmt-game-page"><div class="vmt-loading-big">' +
      '<div class="vmt-spinner"></div><p>' + t.loading + '</p></div></div>';

    oyunGetir(gameId, function(err, oyun) {
      if (err || !oyun) {
        ana.innerHTML = '<div class="vmt-game-page"><div class="vmt-error-big">' +
          '<div style="font-size:64px;margin-bottom:16px">\u26A0\uFE0F</div>' +
          '<h2 style="margin:0 0 8px;font-size:22px;color:var(--ink);">' + t.loadError + '</h2>' +
          '<p style="color:var(--dim);margin:0 0 24px;font-size:14px;">' + (err && err.message ? err.message : '') + '</p>' +
          '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">' +
            '<a href="/" onclick="return vmtGoHome(event)" class="vmt-btn primary">\u2190 ' + t.backHome + '</a>' +
            '<button onclick="window.location.reload()" class="vmt-btn">\u21BB ' + t.retry + '</button>' +
          '</div></div></div>';
        if (typeof splashKapat === 'function') splashKapat();
        return;
      }

      document.title = oyun.title + ' - VuMaTech Game';
      var renk = renkSec(oyun.id);

      ana.innerHTML =
        '<div class="vmt-game-page">' +
          '<div class="vmt-game-bc">' +
            '<a href="/">' + t.backHome + '</a> <span>\u203A</span> ' +
            '<span>' + escapeHtml(oyun.category) + '</span> <span>\u203A</span> ' +
            '<span>' + escapeHtml(oyun.title) + '</span>' +
          '</div>' +
          '<div class="vmt-game-layout">' +
            '<aside class="vmt-sidebar-game-left">' +
              '<div class="vmt-promo-card vmt-promo-card-sticky">' +
                '<div class="vmt-promo-card-ico">\uD83C\uDF10</div>' +
                '<h4>VuMaTech</h4>' +
                '<p>' + t.sidePromoSub + '</p>' +
                '<a href="https://vumatech.net" target="_blank" rel="noopener" class="vmt-promo-card-btn">' + t.sidePromoBtn + '</a>' +
              '</div>' +
              '<div class="vmt-stats-card" style="margin-top:14px;">' +
                '<div class="vmt-stats-row"><span class="ico">\uD83C\uDFAE</span><span class="num">36K+</span><span class="lbl">' + t.statGames + '</span></div>' +
                '<div class="vmt-stats-row"><span class="ico">\uD83C\uDF0D</span><span class="num">4</span><span class="lbl">' + t.statCategories + '</span></div>' +
                '<div class="vmt-stats-row"><span class="ico">\uD83C\uDD93</span><span class="num">100%</span><span class="lbl">' + t.freePlay + '</span></div>' +
              '</div>' +
            '</aside>' +
            '<main class="vmt-game-main">' +
              '<div class="vmt-game-title">' +
                '<h1>' + escapeHtml(oyun.title) + ' <button class="vmt-fav-btn-large " data-id="' + oyun.id + '" onclick="vmtFavoriToggle(\'' + oyun.id + '\', this)" title="Favori">★</button></h1>' +
                '<div class="vmt-game-meta">' +
                  '<span>\uD83C\uDFAE <b>' + escapeHtml(oyun.category) + '</b></span>' +
                  '<span>\u2B50 <b>4.8</b></span>' +
                  '<span>\uD83D\uDCF1 <b>HTML5</b></span>' +
                '</div>' +
              '</div>' +
              '<div class="vmt-game-frame-wrap" id="vmt-game-frame-wrap">' +
                '<div class="vmt-game-cover" id="vmt-game-cover">' +
                  '<img src="' + (oyun.thumb || ('https://img.gamemonetize.com/' + oyun.id + '/512x384.jpg')) + '" alt="' + escapeHtml(oyun.title) + '" class="vmt-game-cover-img" />' +
                  '<div class="vmt-game-cover-tint" style="background:linear-gradient(135deg,' + renk[0] + '99,' + renk[1] + '99)"></div>' +
                  '<button class="vmt-play-big" onclick="vmtStartGame()"><span>\u25B6</span></button>' +
                  '<div class="vmt-cover-text">' +
                    '<h2>' + escapeHtml(oyun.title) + '</h2>' +
                    '<p>' + t.playNow + ' \u00B7 ' + t.freePlay + '</p>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="vmt-game-actions">' +
                '<button class="vmt-btn primary" onclick="vmtStartGame()">\u25B6 ' + t.playNow + '</button>' +
                '<button class="vmt-btn" onclick="vmtFullscreen()">\u26F6 ' + t.fullscreen + '</button>' +
                '<button class="vmt-btn" onclick="vmtRestart()">\u21BB ' + t.restart + '</button>' +
                '<button class="vmt-btn" onclick="vmtShare()">\u2197 ' + t.share + '</button>' +
              '</div>' +
              '<div class="vmt-promo-banner" style="margin:20px 0;">' +
                '<div class="vmt-promo-inner">' +
                  '<div class="vmt-promo-text">' +
                    '<div class="vmt-promo-tag">🎮 ' + t.morePromoTag + '</div>' +
                    '<h3>' + t.morePromoTitle + '</h3>' +
                    '<p>' + t.morePromoSub + '</p>' +
                  '</div>' +
                  '<a href="/" onclick="return vmtGoHome(event)" class="vmt-promo-btn">' + t.morePromoBtn + ' →</a>' +
                '</div>' +
              '</div>' +
              '<div class="vmt-game-info">' +
                '<h3>\uD83C\uDFAE ' + t.gameInfo + '</h3>' +
                '<p class="vmt-game-desc" data-orijinal="' + escapeHtml(oyun.description || '').replace(/"/g,'"') + '">' + escapeHtml(oyun.description || '') + '</p>' +
                (oyun.instructions ? '<h3>\uD83D\uDD79\uFE0F ' + t.controls + '</h3><p class="vmt-game-inst" data-orijinal="' + escapeHtml(oyun.instructions || '').replace(/"/g,'"') + '">' + escapeHtml(oyun.instructions) + '</p>' : '') +
                (oyun.tags ? '<div class="vmt-game-tags">' + oyun.tags.split(',').map(function(tag){ return '<span class="vmt-tag">' + escapeHtml(tag.trim()) + '</span>'; }).join(' ') + '</div>' : '') +
              '</div>' +
            '</main>' +
            '<aside class="vmt-sidebar-side">' +
              '<div class="vmt-similar"><h3>\uD83C\uDFAE ' + t.similar + '</h3>' +
              '<div id="vmt-similar-list" class="vmt-similar-list"><div class="vmt-loading-sm">' + t.loading + '</div></div></div>' +
              '<div class="vmt-promo-card">' +
                '<div class="vmt-promo-card-ico">\uD83C\uDFAE</div>' +
                '<h4>' + t.trendGames + '</h4>' +
                '<p>' + t.morePromoSub + '</p>' +
                '<a href="/" onclick="return vmtGoHome(event)" class="vmt-promo-card-btn">' + t.morePromoBtn + ' \u2192</a>' +
              '</div>' +
            '</aside>' +
          '</div>' +
        '</div>';

      // Embed URL'i sakla
      // GameMonetize embed URL'ine reklam sıklığı azaltıcı parametreler ekle
      var embedUrl = oyun.url || '';
      if (embedUrl && embedUrl.indexOf('gamemonetize') >= 0) {
        // Zaten ? var mı?
        var sep = embedUrl.indexOf('?') >= 0 ? '&' : '?';
        // gd_sdk_referrer_url: sitemi tanıt (referrer'ı geç)
        // Bu parametreler bazı SDK versiyonlarında etkili
        embedUrl += sep + 'gd_sdk_referrer_url=' + encodeURIComponent('https://game.vumatech.net');
      }
      window._vmtCurrentEmbed = embedUrl;
      window._vmtCurrentTitle = oyun.title;

      // Benzer oyunları yükle
      apiCagir(oyun.category, 'mostplayed', 8, function(err, data) {
        var sList = document.getElementById('vmt-similar-list');
        if (!sList) return;
        if (err || !data) { sList.innerHTML = ''; return; }
        var html = '';
        for (var i = 0; i < Math.min(data.length, 6); i++) {
          if (data[i].id === oyun.id) continue;
          var s = data[i];
          var sThumb = s.thumb || ('https://img.gamemonetize.com/' + s.id + '/512x384.jpg');
          html += '<a class="vmt-similar-item" href="?game=' + s.id + '" onclick="vmtGotoGame(\'' + s.id + '\', event)">' +
            '<div class="vmt-similar-cover"><img src="' + sThumb + '" alt="' + escapeHtml(s.title) + '" loading="lazy" onerror="this.style.display=\'none\';" /></div>' +
            '<div class="vmt-similar-info"><h4>' + escapeHtml(s.title) + '</h4>' +
            '<p>' + escapeHtml(s.category) + '</p></div></a>';
        }
        sList.innerHTML = html;
      });
    });
  }

  // Oyunu başlat
  window.vmtStartGame = function() {
    var wrap = document.getElementById('vmt-game-frame-wrap');
    if (!wrap || !window._vmtCurrentEmbed) return;
    // Eğer iframe ZATEN VAR, hiçbir şey yapma (yeni reklam tetiklenmesin)
    if (wrap.querySelector('iframe')) {
      console.log('VuMaTech: Iframe zaten var, yeniden yüklenmiyor (reklam tetiklenmesin)');
      return;
    }
    wrap.innerHTML = '<iframe src="' + window._vmtCurrentEmbed + '" allowfullscreen scrolling="no" allow="autoplay; fullscreen; gamepad" class="vmt-game-iframe"></iframe>';
  };

  window.vmtFullscreen = function() {
    var wrap = document.getElementById('vmt-game-frame-wrap');
    if (!wrap) return;
    var iframe = wrap.querySelector('iframe');
    if (!iframe) { window.vmtStartGame(); setTimeout(window.vmtFullscreen, 200); return; }
    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
  };

  window.vmtRestart = function() {
    var wrap = document.getElementById('vmt-game-frame-wrap');
    if (!wrap) return;
    var t = (typeof I18N !== 'undefined' && I18N[aktifDil]) ? I18N[aktifDil] : {};
    var onayMesaj = t.restartConfirm || 'Restart the game? (A new ad may be shown)';
    if (!confirm(onayMesaj)) return;
    // Onaylandıysa iframe'i sıfırla
    wrap.innerHTML = '<iframe src="' + window._vmtCurrentEmbed + '" allowfullscreen scrolling="no" allow="autoplay; fullscreen; gamepad" class="vmt-game-iframe"></iframe>';
  };

  window.vmtShare = function() {
    if (navigator.share) {
      navigator.share({
        title: window._vmtCurrentTitle || 'VuMaTech Game',
        url: window.location.href
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('\u2713 Link kopyalandı!');
    }
  };

  window.vmtGotoGame = function(id, ev) {
    if (ev) ev.preventDefault();
    urlGuncelle({game: id});
    sayfaRoute();
    window.scrollTo(0, 0);
  };

  // Kategori değiştir (footer'dan)
  window.vmtGotoCat = function(cat, ev) {
    if (ev) ev.preventDefault();
    aktifKategori = cat;
    arama = '';
    urlGuncelle({cat: cat === 'trend' ? null : cat, game: null, q: null});
    sayfaRoute();
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
  };

  // Ana sayfaya dön
  window.vmtGoHome = function(ev) {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    // Zaten ana sayfadaysak ve içerik yüklüyse, sadece scroll to top yap
    if (!urlParam('game') && !urlParam('page') && !urlParam('cat') && !urlParam('q') && TUM_OYUNLAR.length > 0) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      return false;
    }
    // Search overlay açıksa kapat
    var searchOv = document.getElementById('vmt-search-overlay');
    if (searchOv && searchOv.classList.contains('active')) {
      searchOv.classList.remove('active');
    }
    aktifKategori = 'trend';
    arama = '';
    // Search input'ları da temizle
    var s1 = document.getElementById('vmt-search-input');
    var s2 = document.getElementById('vmt-search-input-desktop');
    if (s1) s1.value = '';
    if (s2) s2.value = '';
    // URL'i temizle
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    // Route'u çalıştır - dinamik render
    sayfaRoute();
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
  };

  // ==================== ROUTER ====================
  function sayfaRoute() {
    var gameId = urlParam('game');
    var cat = urlParam('cat');
    var q = urlParam('q');
    var page = urlParam('page');

    aktifKategori = cat || 'trend';
    arama = q || '';

    // Arama kutusunun değerini de güncelle
    var s1 = document.getElementById('vmt-search-input');
    var s2 = document.getElementById('vmt-search-input-desktop');
    if (s1) s1.value = arama;
    if (s2) s2.value = arama;

    if (page && SAYFA_ICERIK[page]) {
      renderIcerikSayfasi(page);
    } else if (gameId) {
      renderOyunSayfasi(gameId);
    } else {
      renderAnaSayfa();
    }
  }

  // Sayfa rotasyonu (footer linklerinden)
  window.vmtGotoPage = function(page, ev) {
    if (ev) ev.preventDefault();
    urlGuncelle({page: page, cat: null, game: null, q: null});
    sayfaRoute();
    window.scrollTo(0, 0);
    return false;
  };

  // İçerik sayfasını render et
  function renderIcerikSayfasi(page) {
    var ana = document.getElementById('vmt-app');
    var t = I18N[aktifDil];
    var icerik = SAYFA_ICERIK[page];
    if (!icerik) {
      ana.innerHTML = '<div class="vmt-page"><h1>Page not found</h1><p><a href="/" class="vmt-btn primary">Back to Home</a></p></div>';
      return;
    }
    document.title = icerik.title + ' - VuMaTech Game';
    ana.innerHTML = '<div class="vmt-page">' + icerik.body +
      '<div class="vmt-page-back-wrap"><a href="/" onclick="return vmtGoHome(event)" class="vmt-btn primary">← ' + t.backHome + '</a></div>' +
      '</div>';
    if (typeof splashKapat === 'function') splashKapat();
  }

  // ==================== UTIL ====================

  // Oyun objesinin metin alanlarını normalize et (entity decode)
  function normalizeOyun(o) {
    if (!o) return o;
    if (o.title) o.title = htmlDecode(o.title);
    if (o.description) o.description = htmlDecode(o.description);
    if (o.instructions) o.instructions = htmlDecode(o.instructions);
    if (o.category) o.category = htmlDecode(o.category);
    if (o.tags) o.tags = htmlDecode(o.tags);
    return o;
  }

  // HTML entity decode - API'den gelen & < vs'yi çözer
  function htmlDecode(str) {
    if (!str) return '';
    // Yaygın entity'leri manuel decode et (DOMParser hızlı ama tutarsız olabilir)
    return String(str)
      .replace(/&/gi, '&')
      .replace(/</gi, '<')
      .replace(/>/gi, '>')
      .replace(/"/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/'/gi, "'")
      .replace(/&nbsp;/gi, ' ')
      .replace(/&#x27;/gi, "'")
      .replace(/&#x2F;/gi, '/');
  }

  function escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '"')
      .replace(/'/g, '&#39;');
  }

  // ==================== EVENT HANDLERS ====================
  function setupEvents() {
    // Mobil arama overlay
    var searchToggle = document.getElementById('vmt-search-toggle');
    var searchOverlay = document.getElementById('vmt-search-overlay');
    var searchClose = document.getElementById('vmt-search-close');
    var searchInput = document.getElementById('vmt-search-input');
    var searchInputDesktop = document.getElementById('vmt-search-input-desktop');

    if (searchToggle && searchOverlay) {
      searchToggle.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        if (searchInput) setTimeout(function(){ searchInput.focus(); }, 50);
      });
    }
    if (searchClose && searchOverlay) {
      searchClose.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
        if (searchInput) searchInput.value = '';
        arama = '';
        if (!urlParam('game')) {
          urlGuncelle({cat: aktifKategori === 'trend' ? null : aktifKategori, game: null, q: null});
          oyunlarYukle();
        }
      });
    }

    var searchTimer;
    function aramaYap(val) {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(function() {
        arama = val.trim();

        // Oyun sayfasındaysak, ana sayfaya dön ve arama uygula
        if (urlParam('game')) {
          if (arama) {
            urlGuncelle({game: null, q: arama, cat: aktifKategori === 'trend' ? null : aktifKategori});
            sayfaRoute();
            window.scrollTo(0, 0);
          } else {
            // Boş arama - oyun sayfasında kal
            return;
          }
        } else {
          // Ana sayfadayız - URL'ye arama ekle
          if (arama) {
            urlGuncelle({q: arama, cat: aktifKategori === 'trend' ? null : aktifKategori, game: null});
          } else {
            urlGuncelle({cat: aktifKategori === 'trend' ? null : aktifKategori, game: null, q: null});
          }
          oyunlarYukle();
        }
      }, 300);
    }

    if (searchInput) {
      searchInput.addEventListener('input', function() { aramaYap(this.value); });
    }
    if (searchInputDesktop) {
      searchInputDesktop.addEventListener('input', function() { aramaYap(this.value); });
    }

    // Dil dropdown
    var langToggle = document.getElementById('vmt-lang-toggle');
    var langDropdown = document.getElementById('vmt-lang-dropdown');
    if (langToggle && langDropdown) {
      langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });
      document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target) && e.target !== langToggle) {
          langDropdown.classList.remove('active');
        }
      });
      langDropdown.addEventListener('click', function(e) {
        var btn = e.target.closest('.vmt-lang-item');
        if (!btn) return;
        ceviriUygula(btn.getAttribute('data-lang'));
        langDropdown.classList.remove('active');
      });
    }

    // Browser back/forward
    window.addEventListener('popstate', function() {
      arama = '';
      sayfaRoute();
    });
  }

  // ==================== BAŞLAT ====================
  document.addEventListener('DOMContentLoaded', function() {
    console.log('VuMaTech v7: DOMContentLoaded');
    aktifDil = dilAlgila();
    var t = I18N[aktifDil];

    // Splash mesajını dil'e göre güncelle
    var splashMsg = document.getElementById('vmt-splash-msg');
    if (splashMsg && t.splashMsg) splashMsg.textContent = t.splashMsg;

    // Lang butonu
    var current = document.getElementById('vmt-lang-toggle');
    if (current) current.textContent = FLAG_EMOJI[aktifDil];
    document.documentElement.lang = aktifDil;

    setupEvents();
    sayfaRoute();
    onlineBaslat();
    console.log('VuMaTech v7: Sistem hazır, dil:', aktifDil);

    // v10.2: Eski (v10 öneki olmayan) cache'leri temizle
    try {
      var silinecek = [];
      for (var lk = 0; lk < localStorage.length; lk++) {
        var lkey = localStorage.key(lk);
        if (lkey && lkey.indexOf('vmt-api-') === 0 && lkey.indexOf('v12-') < 0) {
          silinecek.push(lkey);
        }
      }
      for (var ls = 0; ls < silinecek.length; ls++) {
        localStorage.removeItem(silinecek[ls]);
      }
      if (silinecek.length > 0) {
        console.log('VuMaTech: ' + silinecek.length + ' eski (v9) cache temizlendi');
      }
    } catch(e) {}

    // GLOBAL SPA NAVIGATION - tüm iç linkleri intercept et
    document.addEventListener('click', function(ev) {
      var link = ev.target.closest && ev.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href) return;
      // External link, mail, tel, anchor - dokunma
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
      // Yeni sekmede aç seçenekleri
      if (link.target === '_blank') return;
      if (ev.ctrlKey || ev.metaKey || ev.shiftKey) return;
      // onclick handler varsa dokunma (kendi handler'ı zaten var)
      if (link.hasAttribute('onclick')) return;
      // İçerideki route linkler için: ?cat=, ?game=, ?page=, ?q=
      if (href === '/' || href.startsWith('/?') || href.startsWith('?')) {
        ev.preventDefault();
        var url = new URL(href, window.location.origin);
        window.history.pushState({}, '', url.pathname + url.search);
        sayfaRoute();
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });
    console.log('VuMaTech: Global SPA navigation aktif');
    // Sekme scroll durumu kontrolü
    if (typeof tabScrollDinleyicileriKur === 'function') setTimeout(tabScrollDinleyicileriKur, 500);
    // Yukarı çık butonu başlat
    setTimeout(function() {
      var scrollBtn = document.getElementById('vmt-scroll-top');
      if (!scrollBtn) return;
      var lastCheck = 0;
      function checkScroll() {
        var now = Date.now();
        if (now - lastCheck < 100) return;
        lastCheck = now;
        if (window.pageYOffset > 300) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
      }
      window.addEventListener('scroll', checkScroll, {passive: true});
      scrollBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
      checkScroll();
      console.log('VuMaTech: Yukarı çık butonu aktif');
    }, 300);

    // Güvenlik: 6 saniye sonra splash zorla kapansın (API yavaşsa)
    setTimeout(function() {
      if (typeof splashKapat === 'function') splashKapat();
    }, 6000);
  });

})();


