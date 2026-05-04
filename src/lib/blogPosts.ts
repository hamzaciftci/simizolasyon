/**
 * SEO odaklı blog içerikleri.
 * 22 yazı — her biri Türkiye'de izolasyon arayan kullanıcıların gerçek sorularına yanıt verir.
 * Section bazlı yapı: heading + paragraphs/list — Markdown gerektirmez.
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  primaryKeyword: string;
  date: string;        // YYYY-MM-DD
  readTime: number;    // minutes
  seo: {
    title: string;
    description: string;
  };
  blocks: ContentBlock[];
  relatedPosts: string[];   // slug
  relatedServices: string[]; // service slug
};

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "izmir-cati-izolasyonu-rehberi-2026",
    title: "İzmir'de Çatı İzolasyonu Neden Önemli? — 2026 Rehberi",
    excerpt:
      "İzmir'in nemli, deniz havalı iklimi çatı yapılarını yıpratıyor. Doğru çatı izolasyonu seçimi, kullanılan sistemler ve maliyet faktörleri.",
    category: "Çatı İzolasyon",
    primaryKeyword: "çatı izolasyon izmir",
    date: "2026-04-12",
    readTime: 8,
    seo: {
      title: "İzmir Çatı İzolasyonu Rehberi 2026 — Sim İzolasyon",
      description:
        "İzmir'de çatı izolasyonu nasıl yapılır, hangi sistemler kullanılır, fiyatları neyi etkiler? Profesyonel rehber, vaka örnekleri ve 6 saha ipucu.",
    },
    blocks: [
      { type: "p", text: "İzmir'de çatı izolasyonu, Ege ikliminin getirdiği nem, deniz havası ve ani sıcaklık değişimleri nedeniyle Türkiye'nin geri kalanından farklı bir mühendislik problemidir. Bu rehberde, çatı tipinize göre doğru sistemi nasıl seçeceğinizi, fiyatların neye göre belirlendiğini ve İzmir'de uygulamaya başlamadan önce bilmeniz gereken her şeyi anlatıyoruz." },

      { type: "callout", title: "Kısa Cevap", text: "İzmir çatı izolasyonunda en yaygın 3 sistem: bitümlü membran, polyurea sprey ve poliüretan sıvı membran. Çatı tipinize ve bütçenize göre seçim değişir. Ortalama bir konut çatısında 2–5 iş gününde uygulama tamamlanır, yazılı işçilik garantisi 5–10 yıl arasıdır." },

      { type: "h2", text: "İzmir İklimi Çatı Sistemini Nasıl Etkiler?" },
      { type: "p", text: "İzmir'in ortalama yıllık 700 mm yağış, %65 üzerinde ortalama nem ve sahil bölgesinin tuzlu rüzgârı; standart bir çatı sisteminde mikro çatlaklara ve derz açılmalarına yol açar. 5–7 yıl içinde sızıntı ihtimali, başka iklimlerdeki bir çatıya göre belirgin biçimde yüksektir." },
      { type: "p", text: "Bu nedenle İzmir'de uygulayacağınız sistemde üç şeye dikkat edilmeli: UV dayanımı, esneklik (genleşme/büzülme uyumu) ve detay zenginliği. Polyurea ve cam elyaf takviyeli poliüretan, üç kriteri de karşılayan üst kademe çözümlerdir. Bitümlü membran ise daha ekonomik ama detay noktalarında daha fazla işçilik ister." },

      { type: "h2", text: "Çatı Tipine Göre Sistem Seçimi" },
      { type: "h3", text: "Eğimli Kiremit Çatı" },
      { type: "p", text: "Apartmanların büyük bölümünde görülen eğimli kiremit çatılarda, kiremit altına serilen membran (kiremit sökmeden uygulanır) buhar dengeleyici özellikte olmalıdır. Çift yönlü buhar geçirgenliği yetersiz sistemler, kış aylarında çatı içinde yoğuşmaya neden olur." },
      { type: "h3", text: "Düz Beton Çatı" },
      { type: "p", text: "Çatı katı dairesi olan binalarda, düz beton çatı en sık görülen tip. Bitümlü membran (çift kat) ekonomik tercih, polyurea sprey premium tercihtir. Polyurea'nın eksiz uygulaması, parapet/baca dipleri gibi detay zorlu noktalarda büyük avantaj." },
      { type: "h3", text: "Sandviç Panel Çatı" },
      { type: "p", text: "Sanayi tesislerinde standart hâle gelen sandviç panel çatılarda asıl problem; panel ekleri, civata noktaları ve oluk-gider birleşimleridir. Tüm yüzey kaplaması yerine bu detaylara yönelik özel bant ve sıvı kauçuk uygulamaları çoğu zaman daha akıllıca." },

      { type: "h2", text: "Çatı İzolasyon Fiyatlarını Etkileyen 6 Faktör" },
      { type: "ul", items: [
        "Çatı yüzey alanı (m²) — büyük çatılarda birim fiyat düşer",
        "Mevcut yüzey durumu — söküm, tamir veya doğrudan üst kaplama",
        "Seçilen sistem — bitümlü membran, polyurea, hibrit",
        "Detay sayısı — baca, havalandırma, oluk gider, parapet",
        "Erişim — yüksek kat ise iskele veya sepet maliyeti",
        "Garanti süresi — uzun garanti için üst kademe sistemler",
      ]},

      { type: "h2", text: "Çatı İzolasyonu Uygulama Süreci" },
      { type: "ol", items: [
        "Ücretsiz keşif ve teknik rapor (1 iş günü)",
        "Şeffaf, kalem kalem teklif (24 saat içinde)",
        "Yüzey hazırlığı: temizlik, çatlak tamiri, primer",
        "Ana yalıtım katmanı (sistem türüne göre 1–4 gün)",
        "Detay kontrolü, su testi, yazılı garanti belgesi",
      ]},

      { type: "h2", text: "İzmir'de Hangi İlçelerde Çatı İzolasyonu Yapıyoruz?" },
      { type: "p", text: "Karşıyaka, Bornova, Bayraklı, Çiğli, Konak, Buca, Gaziemir, Narlıdere başta olmak üzere İzmir merkez ve çevre ilçelerde aktif olarak çalışıyoruz. Çeşme, Urla, Foça, Aliağa gibi sahil ilçelerde tuz dirençli sistemler tercih ediyoruz." },

      { type: "callout", title: "Saha İpucu", text: "Çatınızdan sızıntı yıllarca sürerse demir donatı korozyonu başlar. Ufak nokta sızıntısı bile 2–3 yıl içinde yapısal sorun haline gelebilir. Erken müdahale her zaman daha ucuzdur." },
    ],
    relatedPosts: ["teras-izolasyon-fiyatlari-2026", "polyurea-nedir-avantajlari", "cati-su-sizintisi-nasil-bulunur"],
    relatedServices: ["cati-izolasyon-izmir", "polyurea-sprey-izmir", "sandvic-panel-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "teras-izolasyon-fiyatlari-2026",
    title: "Teras İzolasyonu Fiyatları İzmir 2026 — Detaylı Analiz",
    excerpt:
      "Teras izolasyon maliyetini belirleyen faktörler, sistem karşılaştırmaları ve İzmir'de gerçek bütçe planlaması için bilmeniz gerekenler.",
    category: "Teras İzolasyon",
    primaryKeyword: "teras izolasyon fiyat",
    date: "2026-04-08",
    readTime: 7,
    seo: {
      title: "Teras İzolasyon Fiyatları 2026 İzmir — Sim İzolasyon",
      description:
        "Teras izolasyon fiyatlarını etkileyen faktörler, sistem karşılaştırmaları, gerçek vaka örnekleri ve gizli kalemler. İzmir'de bütçe planlaması.",
    },
    blocks: [
      { type: "p", text: "Teras izolasyon fiyatları 2026 itibarıyla, kullanılan sisteme ve yüzey durumuna göre geniş bir aralıkta seyrediyor. Bu yazıda, gerçek maliyetin neye göre hesaplandığını, hangi durumlarda tasarruf edebileceğinizi ve hangi 'düşük teklif' tuzaklarına dikkat etmeniz gerektiğini anlatıyoruz." },

      { type: "callout", title: "Kısa Cevap", text: "Teras izolasyon fiyatı; yüzey alanı, sistem türü, mevcut durum, detay sayısı ve garanti süresine göre belirlenir. 80–120 m² ortalama bir teras için sistem seçimi en büyük belirleyicidir." },

      { type: "h2", text: "Fiyatı Etkileyen 7 Ana Faktör" },
      { type: "ol", items: [
        "Teras yüzey alanı — büyük teraslarda m² fiyatı düşer",
        "Mevcut kaplama durumu — söküm gerekir mi, üzerine uygulama mümkün mü",
        "Sistem türü — bitümlü membran ekonomik, polyurea premium",
        "Detay sayısı — kapı eşikleri, gider, parapet dipleri",
        "Eğim betonu — yenilenmesi gerekiyor mu",
        "Üst kaplama — direkt kullanım mı seramik mi",
        "Garanti süresi — 5 yıl mı 10 yıl mı",
      ]},

      { type: "h2", text: "Sistem Karşılaştırma" },
      { type: "h3", text: "Bitümlü Membran" },
      { type: "p", text: "Klasik, ekonomik, çift kat APP/SBS membran sistemi. Düz teraslarda iyi performans verir, ancak detay yoğun yüzeylerde işçilik kalitesi sonuca büyük etki eder. Garanti süresi standart 5–8 yıl." },
      { type: "h3", text: "Polyurea Sprey" },
      { type: "p", text: "Eksiz, esnek, hızlı kürlenen kaplama. Detay zenginliği yüksek teraslarda sızıntısız sonuç. Garanti 8–10 yıl. Bütçe %30–60 daha yüksek ama uzun vadede ROI olumlu." },
      { type: "h3", text: "Hibrit Sistem (Membran + Polyurea)" },
      { type: "p", text: "Bütçe ve performans dengesini optimize etmek isteyenler için. Ana yüzeye membran, detay noktalarına polyurea." },

      { type: "h2", text: "Düşük Teklif Tuzakları — Nelere Dikkat?" },
      { type: "ul", items: [
        "Yüzey hazırlığı yapılmadan membran serme — 2 yıl içinde kabarma",
        "Tek kat membran — sızıntı riski 2 katı",
        "Sertifikasız malzeme — garanti geçersiz",
        "Yazılı sözleşme yok — anlaşmazlıkta haklarınız belirsiz",
        "Detay bantları atlanmış — köşelerde sızıntı kaçınılmaz",
      ]},

      { type: "h2", text: "Vaka: 110 m² Bornova Apartmanı Çatı Katı Terası" },
      { type: "p", text: "Sızıntı şikayeti olan apartman terası: yüzey hazırlığı, eğim betonu yenileme, çift kat polyurea sprey + UV koruması. Toplam 4 iş günü. Müşteriye 8 yıl yazılı garanti verildi. Alttaki dairede 2 yıldır devam eden sızıntı tamamen durdu." },

      { type: "h2", text: "Bütçe Planlaması İçin Tavsiye" },
      { type: "p", text: "Teklif aldığınızda; yalnızca toplam fiyata değil, kalem kalem hangi sistem ve hangi miktarda malzeme kullanılacağına bakın. Garanti süresi sözleşmede yazıyor mu? Detay noktaları için ek ücret talep ediliyor mu? Yazılı keşif raporu var mı?" },

      { type: "callout", title: "Şeffaf Teklif Vaadi", text: "Sim İzolasyon olarak verdiğimiz tekliflerde gizli kalem yoktur. Keşif sonrası kalem kalem hesaplanmış, sözleşmeli teklif sunarız." },
    ],
    relatedPosts: ["izmir-cati-izolasyonu-rehberi-2026", "polyurea-vs-membran-karsilastirma", "izolasyon-yaparken-10-hata"],
    relatedServices: ["teras-izolasyon-izmir", "polyurea-sprey-izmir", "seramik-ustu-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "polyurea-nedir-avantajlari",
    title: "Polyurea Sprey Kaplama Nedir? Hangi Yapılar İçin İdeal?",
    excerpt:
      "Saniyeler içinde kürlenen polyurea sprey kaplama: hangi alanlarda, hangi sektörde, hangi avantajlarla? Detaylı teknik rehber.",
    category: "Polyurea",
    primaryKeyword: "polyurea nedir",
    date: "2026-04-04",
    readTime: 6,
    seo: {
      title: "Polyurea Sprey Kaplama Nedir? Avantajları — Sim İzolasyon",
      description:
        "Polyurea sprey nedir, nasıl uygulanır, hangi yapılar için ideal? Saniyeler içinde kürlenme, eksiz uygulama, kimyasal direnç — tüm detaylar.",
    },
    blocks: [
      { type: "p", text: "Polyurea, son 15 yılda izolasyon sektörünün en hızlı yükselen kaplama sistemlerinden biri. 5–15 saniye içinde kürlenir, eksiz uygulanır, %500'e kadar elastikiyet sunar. Hem havuzda, hem otoparkta, hem endüstriyel zeminde — şaşırtıcı geniş bir uygulama yelpazesi." },

      { type: "h2", text: "Polyurea Nedir?" },
      { type: "p", text: "Polyurea; iki bileşenli (A bileşeni izosiyanat, B bileşeni reçine) bir polimer sistemidir. İki bileşen, yüksek basınçlı sprey ekipmanında karışır ve yüzeye püskürtüldüğü anda kürlenmeye başlar. Saf polyurea 5–10 saniyede ulaşılabilir kıvama gelir." },
      { type: "p", text: "Hibrit polyurea (polyurea + poliüretan karışımı) daha ekonomik bir alternatif; kürlenme süresi 30 saniye-2 dakika arasındadır. Saha koşullarına göre uygulayıcı, projeye uygun reçeteyi seçer." },

      { type: "h2", text: "Polyurea'nın 7 Belirgin Avantajı" },
      { type: "ul", items: [
        "Hızlı kürlenme — 24 saatte tam mukavemet, üretim hızlı yeniden açılır",
        "Eksiz uygulama — derz/ek yok, sızıntı noktası minimum",
        "%500'e kadar elastikiyet — yapı oturma çatlaklarına uyum",
        "UV ve hava şartı dayanımı — dış mekanda renk koruması",
        "Kimyasal direnç — klor, asit, alkali, akaryakıt",
        "Mekanik dayanım — abraziv yüzeyde uzun ömür",
        "Geniş uygulama aralığı — yatay/dikey/karmaşık geometri",
      ]},

      { type: "h2", text: "Hangi Yapılar İçin İdeal?" },
      { type: "h3", text: "Yüzme Havuzları" },
      { type: "p", text: "Polyurea; klor, pH değişimi ve sürekli su teması altında dayanıklı. Eksiz yapısı sızıntı riskini ortadan kaldırır. Çeşme, Urla bölgesinde villa havuzlarında 1. tercihimiz." },
      { type: "h3", text: "Otopark Zeminleri" },
      { type: "p", text: "Trafik yükü, fren sürtünmesi ve akaryakıt dökülmelerine karşı dirençli. Hızlı kürlenme sayesinde 24 saatte trafiğe açılır." },
      { type: "h3", text: "Çatı ve Teras" },
      { type: "p", text: "Detay zenginliği yüksek (parapet, baca, oluk) çatılarda eksiz uygulama büyük avantaj. UV direnci ile yıllık renk koruması." },
      { type: "h3", text: "Endüstriyel Zemin" },
      { type: "p", text: "Kimyasal sektör, soğuk hava deposu, ağır makine alanlarında polyurea uzun ömür sunar." },

      { type: "h2", text: "Polyurea Dezavantajları" },
      { type: "p", text: "Her sistem gibi polyurea'nın da limitleri var:" },
      { type: "ul", items: [
        "Yüksek başlangıç maliyeti — bitümlü membrandan %30–60 daha pahalı",
        "Uygulayıcı yetkinliği kritik — sertifikasız uygulamada yapışma sorunu",
        "Sıcaklık hassas — +5°C altı ve +35°C üstü zorlu",
        "Düz parlak yüzey ıslakken kaygan — anti-slip katkı tercih edilebilir",
      ]},

      { type: "h2", text: "Sertifikalı Uygulayıcı Önemi" },
      { type: "p", text: "Polyurea'nın başarısı %50 malzemeden, %50 uygulayıcıdan gelir. Yanlış primer, yetersiz yüzey hazırlığı veya yanlış sıcaklık aralığı; sistemin yapışma kaybı yaşamasına yol açar. Mutlaka ekipman ve sertifikalı uygulayıcı kontrolü yapın." },

      { type: "callout", title: "Sertifikalı Uygulayıcı", text: "Sim İzolasyon, İzmir'de polyurea sprey sistemleri konusunda 8+ yıllık tecrübeye sahip sertifikalı uygulayıcı ekipler ile çalışır. Ekipmanımız doğrudan üreticinin onayından geçmiştir." },
    ],
    relatedPosts: ["polyurea-vs-membran-karsilastirma", "havuz-izolasyonu-7-yol", "polyurea-uygulayici-secimi"],
    relatedServices: ["polyurea-sprey-izmir", "havuz-izolasyon-izmir", "otopark-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "havuz-izolasyonu-7-yol",
    title: "Havuz İzolasyonu: Sızıntıyı Önlemenin 7 Yolu (Çeşme/Urla)",
    excerpt:
      "Yüzme havuzlarında sızıntı nedenleri, kontrol checklist'i ve polyurea/cam elyaf takviyeli sistemlerle kalıcı çözümler.",
    category: "Havuz İzolasyon",
    primaryKeyword: "havuz izolasyon",
    date: "2026-03-28",
    readTime: 7,
    seo: {
      title: "Havuz İzolasyonu — 7 Sızıntı Önleme Yolu | Sim İzolasyon",
      description:
        "Çeşme, Urla bölgesinde havuz izolasyon uygulamalarımız. Sızıntı nedenleri, polyurea ve cam elyaf takviyeli sistem önerileri. Vaka çalışması.",
    },
    blocks: [
      { type: "p", text: "Yüzme havuzu, izolasyon mühendisliğinin en zorlu sınavlarından biridir. Sürekli su teması, klor maruziyeti, pH değişimleri, UV radyasyon ve hidrostatik basınç bir araya geldiğinde; 5 yıl içinde sızıntı yapmamış havuz çok azdır. Bu yazıda Çeşme ve Urla'daki villa havuzlarımızda uyguladığımız 7 önleme yolunu paylaşıyoruz." },

      { type: "h2", text: "1. Doğru Sistem Seçimi" },
      { type: "p", text: "Havuzda bütçe ön planda olabilir; ancak sistem seçiminde yapılan tasarruf, 3 yıl sonraki tamir maliyetinin çok altında kalır. Polyurea ve cam elyaf takviyeli poliüretan; sürekli su teması altında en güvenli iki sistem." },

      { type: "h2", text: "2. Yüzey Hazırlığını Atlamayın" },
      { type: "p", text: "Beton kabuk yüzeyinin temizlik ve onarımı, kaplama ömrünün %40'ını belirler. Frezeleme veya su jeti ile pürüzlülük arttırılır, sonra çatlak/boşluklar tamir edilir." },

      { type: "h2", text: "3. Detay Noktaları (Skimmer, Lamba, Gider)" },
      { type: "p", text: "Sızıntıların büyük bölümü detay noktalarından gelir. Skimmer çevresi, lamba armatürleri, gider, derzler — hepsi özel bantlar ve esnek dolgu malzemeleri ile çözülmeli." },

      { type: "h2", text: "4. Uygun Çevre Koşulu" },
      { type: "p", text: "Polyurea ve poliüretan sistemleri +5°C ile +35°C arasında uygulanmalı. Aşırı sıcakta veya soğukta kürlenme problemleri çıkar. Kıyı kasabalarında akşam uygulaması tercih edilir." },

      { type: "h2", text: "5. Anti-Slip Katkı" },
      { type: "p", text: "Standart polyurea ıslak yüzeyde kaygan olabilir. Havuz çevresi ve havuz içinde anti-slip katkılı versiyonlar tercih edilmeli." },

      { type: "h2", text: "6. Yıllık Bakım" },
      { type: "p", text: "İlk yıl ve sonraki yıllar görsel kontrol ve gerekirse mini onarım, kaplamanın 12+ yıl yaşamasını sağlar. Sezon sonu temizlik ve yüzey kontrolü çok önemli." },

      { type: "h2", text: "7. Yazılı Garanti" },
      { type: "p", text: "İmalatçı + uygulayıcı garantisi sözleşmede net olmalı. Garanti süresince herhangi bir sızıntıda servis ücretsiz." },

      { type: "h2", text: "Vaka: Çeşme Villa Havuzu" },
      { type: "p", text: "8x4 m villa havuzu — 7 yıl önce yapılmış seramik kaplama, derzlerde yıpranma, yıllık 1.5 m³ su kaybı. Sökmeden polyurea üst kat uygulaması yapıldı. 4 iş gününde teslim, 8 yıl yazılı garanti. 2 yıl sonra hâlâ sıfır su kaybı." },

      { type: "callout", title: "Çeşme/Urla Havuz Sahibi misiniz?", text: "Sezon öncesi ücretsiz havuz keşfi sunuyoruz. Sızıntı tespiti, mevcut kaplama analizi ve sistem önerisi tek pakette." },
    ],
    relatedPosts: ["polyurea-nedir-avantajlari", "izolasyon-yaparken-10-hata", "polyurea-uygulayici-secimi"],
    relatedServices: ["havuz-izolasyon-izmir", "polyurea-sprey-izmir", "cam-elyaf-poliuretan-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "epoksi-zemin-cesitleri",
    title: "Epoksi Zemin Kaplama Çeşitleri ve Hangisi Size Uygun?",
    excerpt:
      "Self-leveling, antistatik, anti-slip, dekoratif, kuvars takviyeli — epoksi zemin sistemlerini sektör ihtiyacınıza göre nasıl seçersiniz?",
    category: "Epoksi Zemin",
    primaryKeyword: "epoksi zemin çeşitleri",
    date: "2026-03-21",
    readTime: 8,
    seo: {
      title: "Epoksi Zemin Çeşitleri — Hangisi Size Uygun? | Sim İzolasyon",
      description:
        "Self-leveling, ESD antistatik, anti-slip, kuvars takviyeli, dekoratif metalik epoksi sistemleri. Sektör ve kullanıma göre doğru seçim rehberi.",
    },
    blocks: [
      { type: "p", text: "Epoksi zemin kaplama denildiğinde aklımıza tek tip bir sistem gelir; oysa pratikte 6–8 farklı sınıf vardır. Yanlış seçim, hem maliyet kaybı hem performans hayal kırıklığı demektir. Bu rehberde, sektörünüze ve kullanım yoğunluğunuza göre doğru epoksi sistemini nasıl seçeceğinizi anlatıyoruz." },

      { type: "h2", text: "1. Boya Tip Epoksi (200–500 mikron)" },
      { type: "p", text: "En ekonomik seçenek. Garaj, atölye, hafif kullanım için. Mekanik dayanım sınırlı, görsel kalite orta. Kullanıcı dostu, tamiri kolay." },

      { type: "h2", text: "2. Self-Leveling Epoksi (1.5–3 mm)" },
      { type: "p", text: "Pürüzsüz, parlak, akıcı kaplama. Showroom, ofis, ticari mekan, hafif sanayi için ideal. Kolay temizlik, hijyenik. Estetik kalite yüksek." },

      { type: "h2", text: "3. Kuvars Takviyeli Epoksi (3–5 mm)" },
      { type: "p", text: "Ağır makine, forklift trafiği, ağır sanayi için. Mekanik dayanım maksimum, anti-slip özelliği var. Renk seçenekli kuvars granülleri ile dekoratif." },

      { type: "h2", text: "4. Antistatik Epoksi (ESD)" },
      { type: "p", text: "Elektronik üretim, hassas alanlar için. Statik elektrik birikmesini önler. Bilgisayar üretimi, elektronik tesisler, hassas laboratuvarlar." },

      { type: "h2", text: "5. Anti-Slip Epoksi" },
      { type: "p", text: "Islak alanlar, mutfak, gıda fabrikası için. Yüzeyde kontrollü pürüzlülük sağlanır. Kimyasal direnç yüksek." },

      { type: "h2", text: "6. Metalik Epoksi (Dekoratif)" },
      { type: "p", text: "Premium, 3 boyutlu görsel efekt. Showroom, butik, ticari mekan, lobby alanları. Maliyet en yüksek seviyede ama görsel etki etkileyici." },

      { type: "h2", text: "7. Poliüretan-Çimento Sistemi" },
      { type: "p", text: "Gıda fabrikaları için 1. tercih. Termal şok dayanımı (sıcak su, soğuk şok), darbe direnci yüksek. HACCP uyumlu." },

      { type: "h2", text: "Sektörünüze Göre Önerilen Sistem" },
      { type: "ul", items: [
        "Gıda fabrikası → Poliüretan-çimento (HACCP uyumlu)",
        "Otomotiv yan sanayi → Kuvars takviyeli epoksi (yağ direnci)",
        "Elektronik üretim → Antistatik (ESD) epoksi",
        "İlaç/kozmetik → Self-leveling, hijyenik",
        "Lojistik depo → Kuvars takviyeli + çizgi şeritleri",
        "Otopark → Polyurea veya ağır mukavemetli epoksi",
        "Atölye/garaj → Boya tip, ekonomik",
        "Showroom → Self-leveling parlak veya metalik",
      ]},

      { type: "h2", text: "Yanlış Seçim Sonuçları" },
      { type: "ul", items: [
        "Sıcak yüke dayanmaz — gıda fabrikasında kabarma",
        "Mekanik yetersiz — forkliftin tekerlerinde çentik",
        "Hijyen yetersiz — derz yoğun bakteri saklar",
        "Kimyasal dirençsiz — solvent dökülmesinde lekeler",
      ]},

      { type: "callout", title: "Doğru Seçim İçin Keşif", text: "Atatürk OSB ve Kemalpaşa OSB'de 24–48 saat içinde keşif planlaması yapıyoruz. Sektörünüzü, makine yükünüzü ve hijyen ihtiyacınızı analiz edip; üst kademe sistem öneririz." },
    ],
    relatedPosts: ["endustriyel-tesis-zemin-rehberi", "epoksi-atatuk-osb", "polyurea-nedir-avantajlari"],
    relatedServices: ["epoksi-zemin-kaplama-izmir", "endustriyel-zemin-kaplama-izmir", "polyurea-sprey-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "cati-su-sizintisi-nasil-bulunur",
    title: "Çatı Su Sızıntısı Nasıl Bulunur ve Onarılır?",
    excerpt:
      "Çatı sızıntı tespit yöntemleri, termal kamera, su testi ve nokta tamir vs tam izolasyon karşılaştırması.",
    category: "Çatı İzolasyon",
    primaryKeyword: "çatı sızıntısı çözümü",
    date: "2026-03-15",
    readTime: 6,
    seo: {
      title: "Çatı Su Sızıntısı — Tespit ve Onarım Rehberi | Sim İzolasyon",
      description:
        "Çatı sızıntısının kaynağı nasıl bulunur? Termal kamera, su testi, görsel tarama. Nokta tamir ve tam izolasyon arasında karar.",
    },
    blocks: [
      { type: "p", text: "Çatıdan damlama gördüğünüz nokta, sızıntının çıktığı nokta değildir. Su; eğim, derz ve yüzey takip ederek bambaşka bir noktada görünür hale gelir. Doğru tespit, doğru onarımın anahtarıdır." },

      { type: "h2", text: "Sızıntı Belirtileri" },
      { type: "ul", items: [
        "Tavan lekesi — kahverengi/sarımsı leke",
        "Boya kabarması, çıkıntı",
        "Tavandan damlama (yağmur sonrası)",
        "Küflenme, küf kokusu",
        "Duvar dibi nem",
        "Çatı arası ahşap bozulması",
      ]},

      { type: "h2", text: "Tespit Yöntemleri" },
      { type: "h3", text: "1. Görsel İnceleme" },
      { type: "p", text: "İlk adım. Çatı yüzeyinde çatlak, kabarma, derz açılması, yıpranmış membran kontrolü. Detay noktaları (baca, oluk, parapet, havalandırma) özellikle taranır." },
      { type: "h3", text: "2. Termal Kamera" },
      { type: "p", text: "Yağmur sonrası veya nem testi sonrası, kuruyan yüzeylerle nemli yüzeyler arasındaki sıcaklık farkını gösterir. Sızıntı yolunu görselleştirir." },
      { type: "h3", text: "3. Su Testi" },
      { type: "p", text: "Şüpheli alana hortumla 30 dakika su tutulur. İçeriden gözlem ile sızıntı doğrulanır. Sistematik yapılırsa kaynak bulunur." },
      { type: "h3", text: "4. Nem Ölçer" },
      { type: "p", text: "Tavan altından nem ölçer ile sızıntı yolu izlenir. En çok nemli nokta — sızıntı yolunun başlangıcı yakın." },

      { type: "h2", text: "Nokta Tamir mi Tam İzolasyon mu?" },
      { type: "p", text: "Karar, çatının yaşına ve genel durumuna göre verilir:" },
      { type: "ul", items: [
        "Çatı 5 yaşından genç + tek nokta sorunu → nokta tamir yeter",
        "Çatı 8+ yaşında + birden fazla sızıntı → tam izolasyon",
        "Genel kabarma/yıpranma var → tam izolasyon",
        "Membran rengi solmuş, çatlak var → tam izolasyon",
      ]},

      { type: "h2", text: "Maliyet Karşılaştırma" },
      { type: "p", text: "Nokta tamir; ucuz başlangıçlı ama sürekli tekrar gerekir. Tam izolasyon; başlangıç maliyeti yüksek ama 8–10 yıl sorunsuz. 5 yıllık toplam maliyet hesabında çoğu zaman tam izolasyon avantajlı." },

      { type: "callout", title: "Ücretsiz Sızıntı Tespiti", text: "İzmir merkez ve çevre ilçelerde çatı sızıntısı keşfi ücretsizdir. Termal kamera ve görsel tarama ile kaynak tespiti yapıyoruz." },
    ],
    relatedPosts: ["izmir-cati-izolasyonu-rehberi-2026", "teras-mi-cati-mi-sizinti", "izolasyon-yaparken-10-hata"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "izolasyon-bornova",
    title: "İzmir Bornova'da Apartmanlar İçin İzolasyon Rehberi",
    excerpt:
      "Bornova ev tipleri, apartman yöneticilerinin sorunları ve toplu izolasyon kararlarında dikkat edilmesi gerekenler.",
    category: "Yerel Rehber",
    primaryKeyword: "izolasyon bornova",
    date: "2026-03-08",
    readTime: 5,
    seo: {
      title: "Bornova Apartman İzolasyon Rehberi — Sim İzolasyon",
      description:
        "Bornova'da çatı katı sızıntısı yaşayan apartmanlar için izolasyon kararı, yönetim onayı, fiyatlandırma ve sistem önerileri.",
    },
    blocks: [
      { type: "p", text: "Bornova; üniversite öğrencisinin yoğun olduğu, 1990–2010 arası inşa edilmiş apartmanların çoğunlukta olduğu bir ilçe. Bu yapıların büyük bölümünde, ilk yapımdaki izolasyonlar ömrünü doldurmaya başladı. Çatı katı dairelerinde sızıntı şikayetleri arttı." },

      { type: "h2", text: "Bornova'da Tipik Apartman Sorunları" },
      { type: "ul", items: [
        "Çatı katı dairesinde tavan lekeleri",
        "Teras üzeri sızıntı (alttaki dairede nem)",
        "Bodrum ve otopark perde duvar nem",
        "Asansör çukuru su birikmesi",
        "Dış cephe dilatasyon yıpranması",
      ]},

      { type: "h2", text: "Toplu Karar — Yönetim Süreci" },
      { type: "p", text: "Apartman ortak alan izolasyonu (çatı, teras, otopark, asansör çukuru) yönetim kurulu kararı gerektirir. Süreç:" },
      { type: "ol", items: [
        "Yönetim kurulu toplantısında konu açılması",
        "Profesyonel keşif daveti — kapsamlı rapor alma",
        "En az 3 firmadan teklif",
        "Olağanüstü genel kurul — bütçe onayı",
        "Sözleşme imzalama, takvim",
        "Uygulama ve teslimat",
      ]},

      { type: "h2", text: "Bornova için Önerilen Sistemler" },
      { type: "p", text: "Bornova'nın yağışlı ve nemli iklimi göz önüne alındığında çatı/teras için polyurea sprey veya hibrit sistemler tercih ediliyor. Eski binalarda cam elyaf takviyeli kaplama, yapı oturma çatlaklarına direnç sağlıyor." },

      { type: "h2", text: "Bütçe Planlaması" },
      { type: "p", text: "Apartman bazında izolasyon, daire başına ayrılan paya bölünür. Toplam maliyet keşif sonrası netleşir; ortalama bir 12 daireli apartmanda çatı/teras yenilemesi daire başı belli bir paya denk gelir. Yazılı garanti 8–10 yıl olduğunda, yıllık 'amorti' hesabı yapılır." },

      { type: "callout", title: "Bornova'da Aktif Şantiyemiz Var", text: "Bornova ve Karşıyaka'da apartman yönetimleri için özel iletişim hattımız mevcut. Yönetim kurulu sunumlarına ve genel kurul soru-cevap saatlerine ücretsiz katılım sağlıyoruz." },
    ],
    relatedPosts: ["su-yalitimi-karsiyaka", "izmir-cati-izolasyonu-rehberi-2026", "asansor-cukuru-rehberi"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir", "asansor-cukuru-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "su-yalitimi-karsiyaka",
    title: "Karşıyaka Sahil Konutlarında Su Yalıtımı",
    excerpt:
      "Tuzlu hava etkisi, Karşıyaka apartman yapısı ve sahil bölgesi için özel su yalıtım çözümleri.",
    category: "Yerel Rehber",
    primaryKeyword: "su yalıtımı karşıyaka",
    date: "2026-03-04",
    readTime: 5,
    seo: {
      title: "Karşıyaka Sahil Konut Su Yalıtımı — Sim İzolasyon",
      description:
        "Tuzlu deniz havasının çatı ve cephe yapısına etkisi. Karşıyaka apartmanları için özel sistem önerileri ve uzun ömürlü çözümler.",
    },
    blocks: [
      { type: "p", text: "Karşıyaka; deniz kıyısına yakın binalarıyla, sahil rüzgârının taşıdığı tuzlu havaya sürekli maruz kalan bir bölge. Bu, izolasyon malzemesi seçiminde başka ilçelerden ayrı bir yaklaşım gerektirir." },

      { type: "h2", text: "Tuzlu Hava Neden Sorunlu?" },
      { type: "p", text: "Deniz tuzu (NaCl), beton içindeki demir donatıyla temas ettiğinde korozyon başlatır. Korozyon = paslanma + hacim genleşmesi + beton kabarması. Çatlaklara giren su sızıntıyı hızlandırır." },
      { type: "p", text: "Standart bir çatı membranı, sahilde 8 yıl ömür verirken, iç kesimde 12–15 yıl dayanır. Sistem seçimi ve detay zenginliği fark yaratır." },

      { type: "h2", text: "Sahil İçin Önerilen Sistemler" },
      { type: "ul", items: [
        "Polyurea sprey — UV ve tuz dirençli, eksiz uygulama",
        "Cam elyaf takviyeli poliüretan — mekanik dayanım yüksek",
        "Aliphatic poliüretan üst kat — UV ve tuz korozyonuna karşı bariyer",
        "Çift kat APP/SBS membran — ekonomik tercihe ek detay zenginliği",
      ]},

      { type: "h2", text: "Kritik Detay Noktaları" },
      { type: "p", text: "Sahil binalarında özellikle dikkat edilmesi gerekenler:" },
      { type: "ul", items: [
        "Parapet üst kapama — rüzgâr ile su sızıntısı",
        "Pencere/kapı eşikleri — sürekli su yükü",
        "Dilatasyon (genleşme) noktaları",
        "Klima dış üniteleri çevresi",
      ]},

      { type: "h2", text: "Yıllık Bakım Önerisi" },
      { type: "p", text: "Sahil binalarında yıllık görsel kontrol ve gerekirse mini onarım, ana izolasyon ömrünü %50 uzatır. Yıllık ücretsiz bakım kontrolünü garanti süresi içinde sunuyoruz." },

      { type: "callout", title: "Karşıyaka Apartman Yöneticisi misiniz?", text: "Sahil binaları için özel keşif raporu hazırlıyoruz — tuz penetrasyonu, demir korozyon analizi dahil." },
    ],
    relatedPosts: ["izolasyon-bornova", "izmir-cati-izolasyonu-rehberi-2026", "polyurea-nedir-avantajlari"],
    relatedServices: ["cati-izolasyon-izmir", "polyurea-sprey-izmir", "dis-cephe-dilatasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "polyurea-vs-membran-karsilastirma",
    title: "Bitümlü Membran mı Polyurea mı? Karşılaştırmalı Rehber",
    excerpt:
      "Bitümlü membran ve polyurea sprey arasındaki teknik farklar, fiyat karşılaştırması ve hangi durumda hangisi tercih edilmeli.",
    category: "Sistem Karşılaştırma",
    primaryKeyword: "membran polyurea karşılaştırma",
    date: "2026-02-28",
    readTime: 7,
    seo: {
      title: "Bitümlü Membran vs Polyurea — Karşılaştırma | Sim İzolasyon",
      description:
        "Bitümlü membran ve polyurea sprey: teknik farklar, fiyat, garanti, uygulama hızı, dayanım. Hangi proje için hangisi?",
    },
    blocks: [
      { type: "p", text: "İzolasyon teklifi alırken duyacağınız iki ana sistem: bitümlü membran ve polyurea sprey. Her ikisinin de güçlü ve zayıf yönleri var. Bu yazıda karşılaştırmalı bir tabloyla doğru karar vermenize yardım ediyoruz." },

      { type: "h2", text: "Karşılaştırma Tablosu" },
      { type: "ul", items: [
        "Kürlenme süresi: Membran (anında trafiğe hazır) vs Polyurea (24 saat)",
        "Eksiz uygulama: Membran (derzli, ek noktalı) vs Polyurea (eksiz)",
        "Esneklik: Membran (orta) vs Polyurea (%500'e kadar)",
        "Uygulama hızı: Membran (yavaş) vs Polyurea (hızlı)",
        "Detay uyumu: Membran (sınırlı) vs Polyurea (mükemmel)",
        "Maliyet: Membran (ekonomik) vs Polyurea (premium)",
        "Garanti: Membran (5–8 yıl) vs Polyurea (8–12 yıl)",
        "UV dayanımı: Membran (üst kapama gerekir) vs Polyurea (Aliphatic kat ile direkt)",
        "Saha tecrübesi: Membran (her ekip yapar) vs Polyurea (sertifikalı uygulayıcı şart)",
      ]},

      { type: "h2", text: "Bitümlü Membran Hangi Durumda Tercih Edilir?" },
      { type: "ul", items: [
        "Bütçe kısıtlı + büyük yüzey",
        "Düz, detay az teras/çatı",
        "Yeni inşaat (toprak altı bohçalama)",
        "Geleneksel uygulama tercihi",
      ]},

      { type: "h2", text: "Polyurea Hangi Durumda Tercih Edilir?" },
      { type: "ul", items: [
        "Detay yoğun yüzeyler (parapet, baca, oluk)",
        "Havuz, otopark, endüstriyel",
        "Hızlı teslim ihtiyacı",
        "Uzun garanti tercihi (10+ yıl)",
        "Karmaşık geometrili yapılar",
      ]},

      { type: "h2", text: "Hibrit Çözüm" },
      { type: "p", text: "Bütçe optimize etmek isteyenler için: ana yüzeye membran, detay noktalarına polyurea uygulanan hibrit sistem. Maliyet membran'a yakın, performans polyurea'ya yakın." },

      { type: "h2", text: "Saha Tavsiyesi" },
      { type: "p", text: "Eğer bütçe planlamanızda alt limit önemliyse ve yüzey düz, basit ise — bitümlü membran iyi seçim. Detay yoğun yüzeyde veya uzun ömür / az müdahale arıyorsanız — polyurea kazandırır." },

      { type: "callout", title: "Hangi Sistem Sizin İçin Doğru?", text: "Ücretsiz keşif sonrası 2 farklı sistemde teklif sunuyoruz; karşılaştırmalı maliyet analiziyle karar vermenize yardımcı oluyoruz." },
    ],
    relatedPosts: ["polyurea-nedir-avantajlari", "izolasyon-yaparken-10-hata", "izmir-cati-izolasyonu-rehberi-2026"],
    relatedServices: ["polyurea-sprey-izmir", "cati-izolasyon-izmir", "teras-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "endustriyel-tesis-zemin-rehberi",
    title: "Endüstriyel Tesisler İçin Zemin Kaplama Seçim Rehberi",
    excerpt:
      "Sektörlere göre (gıda, kimya, otomotiv) zemin sistem seçimi, yük tipleri ve ROI hesabı.",
    category: "Endüstriyel Zemin",
    primaryKeyword: "endüstriyel zemin kaplama",
    date: "2026-02-22",
    readTime: 9,
    seo: {
      title: "Endüstriyel Zemin Kaplama Rehberi — Sim İzolasyon",
      description:
        "Sektörünüze göre endüstriyel zemin sistem seçimi: gıda, kimya, otomotiv, lojistik. Yük analizi, hijyen, kimyasal direnç, ROI hesabı.",
    },
    blocks: [
      { type: "p", text: "Endüstriyel zemin; üretim hattınızın görünmeyen ama her gün size hizmet eden temelidir. Yanlış sistem seçimi; aşınma, çatlama, hijyen kaybı, kimyasal sızıntı, üretim duruş süreleri olarak geri döner. Doğru seçim için sektör, yük analizi ve hijyen ihtiyacı bir arada değerlendirilmeli." },

      { type: "h2", text: "Sektör Bazlı Sistem Önerisi" },
      { type: "h3", text: "Gıda ve İçecek" },
      { type: "p", text: "HACCP uyumlu, anti-bakteriyel, eksiz, sıcak su şokuna dayanıklı kaplama gerekir. Poliüretan-çimento sistemi 1. tercih. Köşe yumuşatma (cove) duvar/zemin geçişinde sızdırmazlık sağlar." },
      { type: "h3", text: "Kimya ve İlaç" },
      { type: "p", text: "Kimyasal direnç, sızdırmazlık ve klin oda standartları. Vinyl ester epoksi veya özel poliüretan sistemler. Statik elektrik kontrolü gerekiyorsa ESD kaplama." },
      { type: "h3", text: "Otomotiv Yan Sanayi" },
      { type: "p", text: "Yağ ve solvent direnci, ağır forklift dayanımı. Kuvars takviyeli epoksi 5 mm kalınlıkta tipik tercih." },
      { type: "h3", text: "Elektronik" },
      { type: "p", text: "Antistatik (ESD) epoksi şart. Statik elektrik birikmesi hassas elektronik üretimine zarar verir." },
      { type: "h3", text: "Lojistik / Depo" },
      { type: "p", text: "Forklift trafiği, çizgi yönlendirme, ekonomi. Self-leveling epoksi 3 mm + trafik çizgileri standart." },
      { type: "h3", text: "Soğuk Hava Deposu" },
      { type: "p", text: "Düşük sıcaklıkta dayanım. Polyurea veya poliüretan-çimento. Standart epoksi gevrekleşir." },

      { type: "h2", text: "Yük ve Trafik Analizi" },
      { type: "ul", items: [
        "Yaya trafiği — boya tip yeterli",
        "Hafif palet/araba — self-leveling 1.5 mm",
        "Forklift 1–3 ton — kuvars takviyeli 3 mm",
        "Forklift 3–5 ton — kuvars takviyeli 5 mm",
        "Ağır makine 5+ ton — polyurea veya yüksek mukavemetli özel sistem",
      ]},

      { type: "h2", text: "ROI Hesabı" },
      { type: "p", text: "Beklenen ömür, bakım maliyeti, üretim duruş süresi ve garanti süresi bir arada değerlendirilir. Ucuz başlangıç sistemi 3–4 yıl içinde tamir gerektirebilir. Premium sistem 12+ yıl sorunsuz çalışır. Yıllık maliyet hesabında premium genelde avantajlı." },

      { type: "h2", text: "Hijyen ve Temizlenebilirlik" },
      { type: "p", text: "Gıda, ilaç, kozmetik tesislerinde hijyen kritik. Pürüzsüz, eksiz yüzey + cove (köşe yumuşatma) + sürtmeli temizlik dayanımı + klor/dezenfektan direnci dört kritik özellik." },

      { type: "callout", title: "OSB'de Hızlı Keşif", text: "Atatürk OSB ve Kemalpaşa OSB'de aktif şantiyelerimiz var, 24–48 saat içinde keşif planlaması, keşif sonrası 24 saatte detaylı teklif sunuyoruz." },
    ],
    relatedPosts: ["epoksi-zemin-cesitleri", "epoksi-atatuk-osb", "polyurea-nedir-avantajlari"],
    relatedServices: ["endustriyel-zemin-kaplama-izmir", "epoksi-zemin-kaplama-izmir", "polyurea-sprey-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "otopark-izolasyon-rehberi",
    title: "Otopark İzolasyonu: AVM ve Plaza Sahipleri İçin Rehber",
    excerpt:
      "Trafik yükü, polyurea sistemleri, keşif/uygulama süresi ve AVM otopark vaka çalışması.",
    category: "Otopark İzolasyon",
    primaryKeyword: "otopark izolasyon",
    date: "2026-02-15",
    readTime: 6,
    seo: {
      title: "Otopark İzolasyon Rehberi (AVM/Plaza) — Sim İzolasyon",
      description:
        "AVM ve plaza otoparklarında izolasyon: trafik yükü analizi, polyurea sistemleri, hızlı uygulama, alan bölümleme stratejileri.",
    },
    blocks: [
      { type: "p", text: "AVM, plaza ve site otoparkları; ağır araç trafiği, fren-dönüş sürtünmesi, akaryakıt-yağ dökülmeleri ve sürekli kullanım altında çalışan zorlu zeminlerdir. Yetersiz izolasyon = tavandan damlama, perde duvar nem, demir donatı korozyonu = yapısal risk." },

      { type: "h2", text: "Trafik Yükü Analizi" },
      { type: "p", text: "Otopark sınıfına göre kaplama farklı:" },
      { type: "ul", items: [
        "Bireysel otopark (site, plaza) — 1.5 mm polyurea yeter",
        "Kontrollü AVM otoparkı — 2 mm polyurea + anti-slip",
        "Yoğun AVM otoparkı — 3 mm cam elyaf takviyeli + üst kat polyurea",
        "Lojistik depo otoparkı — Kuvars takviyeli + polyurea hibrit",
      ]},

      { type: "h2", text: "Sistem Yapısı" },
      { type: "ol", items: [
        "Yüzey hazırlığı: frezeleme, çatlak tamiri, primer",
        "Su yalıtım katmanı (polyurea sprey veya membran)",
        "Mekanik koruma katmanı",
        "Anti-slip katkılı üst kat",
        "Trafik çizgileri ve yön işaretleri",
        "UV korumalı son kat (açık otoparkta)",
      ]},

      { type: "h2", text: "Alan Bölümleme — Trafiği Durdurmadan Uygulama" },
      { type: "p", text: "AVM otoparklarında uygulamanın en kritik noktası; otoparkı tamamen kapatmadan iş yapabilmek. Alan bölümleme + gece vardiyası + hızlı kürlenen polyurea = 24 saatte trafiğe açma. Bu strateji ile uyguladığımız büyük çaplı projeler var." },

      { type: "h2", text: "Vaka Çalışması" },
      { type: "p", text: "İzmir'deki bir AVM otoparkında uygulama: 4 fazda alan bölümleme, gece çalışması, polyurea sprey + anti-slip. Toplam 18 iş gününde teslim, AVM çalışmaya devam etti, hiçbir mağaza ciro kaybı yaşamadı." },

      { type: "h2", text: "Bakım Önerisi" },
      { type: "p", text: "Yıllık görsel kontrol; çizik, lokal aşınma, çatlak kontrolü. Garanti süresince mini onarım ücretsiz. Yıllık temizlik (yüksek basınçlı su) kaplama ömrünü uzatır." },

      { type: "callout", title: "AVM/Plaza Yönetimine Özel Hizmet", text: "Yüksek yapılı projeler için özel proje yöneticimiz atanır. Sözleşmeli, takvime bağlı çalışma ve raporlu teslim." },
    ],
    relatedPosts: ["polyurea-nedir-avantajlari", "endustriyel-tesis-zemin-rehberi", "asansor-cukuru-rehberi"],
    relatedServices: ["otopark-izolasyon-izmir", "polyurea-sprey-izmir", "otopark-enjeksiyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "asansor-cukuru-rehberi",
    title: "Asansör Çukuru Su Sızıntısı: Apartman Yöneticilerinin El Kitabı",
    excerpt:
      "Asansör çukurunda su birikmesi nedenleri, enjeksiyon vs membran çözümleri ve hızlı müdahale önerileri.",
    category: "Asansör Çukuru İzolasyon",
    primaryKeyword: "asansör çukuru izolasyon",
    date: "2026-02-08",
    readTime: 5,
    seo: {
      title: "Asansör Çukuru Su Sızıntısı Rehberi | Sim İzolasyon",
      description:
        "Asansör çukurunda su sızıntısı nasıl çözülür? Enjeksiyon, membran sistemleri, hızlı müdahale, bina yöneticileri için pratik rehber.",
    },
    blocks: [
      { type: "p", text: "Asansör çukuru; binanın en altında yer alan, yer altı suyu, drenaj ve perde beton kaynaklı sızıntılara açık alan. Su birikmesi asansör elektronik aksamına ve kontrol sistemlerine ciddi zarar verir; yıllık asansör arıza maliyetinin önemli bir kısmı buradan kaynaklanır." },

      { type: "h2", text: "Tipik Nedenleri" },
      { type: "ul", items: [
        "Yer altı suyu seviyesinin yükselmesi (yağışlı sezon)",
        "Perde beton izolasyon eksikliği veya bitmesi",
        "Drenaj çukuru tıkanıklığı",
        "Bodrum/perde duvar enjeksiyon hatları",
        "Yapısal çatlaklar (yapı oturma)",
      ]},

      { type: "h2", text: "Çözüm Yaklaşımı" },
      { type: "ol", items: [
        "Acil su tahliyesi (gerekirse pompa)",
        "Sızıntı kaynağı tespiti (kamera, görsel)",
        "Aktif sızıntı varsa enjeksiyon (poliüretan reçine)",
        "Yüzey hazırlığı ve mevcut su tahliyesi",
        "İç tarafa pozitif yönlü membran uygulama",
        "Köşe ve gider detaylarında özel bantlama",
        "Drenaj çukuru kontrolü ve gerekirse yenileme",
      ]},

      { type: "h2", text: "Asansör Çalışırken İzolasyon Yapılır mı?" },
      { type: "p", text: "Evet — çoğu vakada asansör 1–2 günlüğüne servis dışına alınır, izolasyon bitince tekrar açılır. Bina yöneticisi ve asansör servis firması ile koordineli planlama yapıyoruz." },

      { type: "h2", text: "Apartman Yöneticisi İçin Aksiyon Planı" },
      { type: "ul", items: [
        "Sızıntı görüldüğünde derhal keşif çağırın",
        "Asansör servis firmasına bilgi verin (elektronik koruma)",
        "Yönetim kurulu kararı alıp en az 3 firmadan teklif",
        "Garanti süresi minimum 5 yıl olmalı",
        "Sözleşme sonrası takvime bağlı uygulama",
      ]},

      { type: "callout", title: "Hızlı Müdahale", text: "Aktif sızıntıda 24 saat içinde keşif yapıyoruz. Acil enjeksiyon ile sızıntıyı durdurmak mümkün, sonrasında kapsamlı izolasyon planlanır." },
    ],
    relatedPosts: ["enjeksiyon-yalitim-rehberi", "izolasyon-bornova", "otopark-izolasyon-rehberi"],
    relatedServices: ["asansor-cukuru-izolasyon-izmir", "enjeksiyon-yalitim-izmir", "perde-beton-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "banyo-izolasyon-onemi",
    title: "Banyo İzolasyonu Yapılmadan Olur mu? — Sonuçları",
    excerpt:
      "Eksik banyo izolasyonunun sonuçları: alttaki dairede sızıntı, küflenme, yapısal hasar ve çözüm yolları.",
    category: "Islak Zemin",
    primaryKeyword: "banyo izolasyon",
    date: "2026-02-01",
    readTime: 5,
    seo: {
      title: "Banyo İzolasyonu Şart mı? Eksik İzolasyon Sonuçları",
      description:
        "Banyoda yapılmayan izolasyonun yarattığı sorunlar, alt komşu sızıntısı, küflenme. Profesyonel çözümler ve seramik altı/üstü sistem önerileri.",
    },
    blocks: [
      { type: "p", text: "Banyo, evdeki en yoğun ıslak hacim. Doğru izolasyon yapılmadığında, altta oturan komşunun tavanından damlama 6 ay içinde başlar. Hem ahlaki hem mali bir sorun haline gelir. Bu yazıda banyo izolasyonunun teknik gereklilik nedenlerini ve çözüm yollarını anlatıyoruz." },

      { type: "h2", text: "Eksik İzolasyonun Sonuçları" },
      { type: "ul", items: [
        "Alt dairenin tavanında lekeler, kabarmalar",
        "Komşu daire ile hukuki anlaşmazlık",
        "Tavandan beton koruma katmanı bozulması",
        "Demir donatı korozyonu (uzun vadede)",
        "Küflenme — solunum yolu rahatsızlığı",
        "Boya/sıva onarımı sürekli tekrarlama",
      ]},

      { type: "h2", text: "Ne Zaman Yapılmalı?" },
      { type: "ul", items: [
        "Yeni banyo yapımında — seramik öncesi standart",
        "Banyo yenilemede — söküm yapılırken altyapı dahil",
        "Sızıntı şikayeti gelince — en geç müdahale",
        "Eski apartmanda toplu yenileme",
      ]},

      { type: "h2", text: "Sistem Seçenekleri" },
      { type: "h3", text: "Seramik Altı (Yeni Banyo)" },
      { type: "p", text: "Bu, en doğru yaklaşım. Beton üzerine primer + esnek membran + köşe bantlama + yeni seramik. Sızdırmazlık 100%." },
      { type: "h3", text: "Seramik Üstü (Mevcut Banyoda)" },
      { type: "p", text: "Söküm istemeyenler için — özel sıvı membran sistemi mevcut seramik üstüne uygulanır. Renk seçenekli; üstüne tekrar seramik veya direkt kullanım." },
      { type: "h3", text: "Söküm + Yeniden Yapım" },
      { type: "p", text: "Mevcut banyo çok kötü ise; söküm + yeni izolasyon + yeni seramik. Maliyet yüksek, sonuç en iyi." },

      { type: "h2", text: "Detay Noktalar — Atlanmayacaklar" },
      { type: "ul", items: [
        "Köşe yumuşatma (cove) — duvar/zemin geçişi",
        "Süzgeç çevresi — özel detay bant",
        "Klozet ve duş kabin tabanı",
        "Boru geçişleri",
        "Banyo kapı eşiği",
      ]},

      { type: "callout", title: "Banyo İzolasyonu", text: "Standart banyo (5–8 m²) için 1–2 iş gününde uygulama, 5 yıl yazılı garanti. Seramik üstü uygulama 1 günde teslim mümkün." },
    ],
    relatedPosts: ["seramik-ustu-izolasyon-rehberi", "izolasyon-yaparken-10-hata", "izolasyon-bornova"],
    relatedServices: ["islak-zemin-izolasyon-izmir", "seramik-ustu-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "cam-elyaf-takviye-detay",
    title: "Cam Elyaf Takviyeli Poliüretan Kaplama: Tüm Detaylar",
    excerpt:
      "Cam elyaf takviye nedir, ne kazandırır, hangi sektörlerde tercih edilir? Vaka örnekleri.",
    category: "Cam Elyaf",
    primaryKeyword: "cam elyaf poliüretan",
    date: "2026-01-25",
    readTime: 6,
    seo: {
      title: "Cam Elyaf Takviyeli Poliüretan — Detaylı Rehber",
      description:
        "Cam elyaf takviyeli poliüretan kaplama: yapı, mekanik dayanım, çatlak köprüleme. Hangi sektörlerde, hangi avantajlarla?",
    },
    blocks: [
      { type: "p", text: "Cam elyaf takviyeli poliüretan; yapısal bütünlüğü gerekli olduğu projelerde tercih edilen üst kademe izolasyon sistemidir. Cam elyaf, kaplamanın 'iskeleti' gibi çalışır; mekanik dayanımı ve çatlak köprüleme yeteneğini katlar." },

      { type: "h2", text: "Cam Elyaf Takviyenin Görevi" },
      { type: "ul", items: [
        "Mekanik dayanımı %200–300 artırır",
        "Yapı oturma çatlaklarına direnç",
        "Termal genleşme/büzülme uyumu",
        "Darbe direnci",
        "Uzun ömür (12–15 yıl)",
      ]},

      { type: "h2", text: "Sistem Yapısı" },
      { type: "ol", items: [
        "Primer (yapışma astar)",
        "1. kat poliüretan",
        "Cam elyaf keçesi serme (sandviç katmanı)",
        "2. kat poliüretan emdirme",
        "Hava kabarcığı kontrolü",
        "Koruyucu son kat (UV stabilizer)",
      ]},

      { type: "h2", text: "Hangi Projelerde Tercih Edilir?" },
      { type: "ul", items: [
        "Eski beton yapı — çatlak yoğun zeminler",
        "Havuz iç kaplama (yapı oturma riski varsa)",
        "Su deposu",
        "Endüstriyel ağır yük zeminler",
        "Köprü ve viyadük üst kaplama",
        "Trafik yoğun alanlar",
      ]},

      { type: "h2", text: "Maliyet ve ROI" },
      { type: "p", text: "Standart poliüretan'a göre %20–40 daha pahalı. Ancak ömür ve performans çok daha yüksek olduğundan; yıllık maliyet hesabında ekonomik. Yüksek kullanım altında 12–15 yıl sorunsuz çalışır." },

      { type: "h2", text: "Vaka: Eski Bina Beton Üstü" },
      { type: "p", text: "İzmir'de yıllar içinde yıpranmış eski binanın beton terasında uygulama: yüzey hazırlığı, çatlak tamiri, cam elyaf takviyeli poliüretan kaplama, UV korumalı son kat. Müşteriye 10 yıl yazılı garanti verildi. 2 yıl sonra hâlâ sorunsuz." },

      { type: "callout", title: "Cam Elyaf Takviye İçin Keşif", text: "Yapısal hareket veya çatlak şüphesi olan tüm projelerde cam elyaf takviyeli sistem öneriyoruz. Standart sistemden farkı keşifte detaylıca anlatılır." },
    ],
    relatedPosts: ["polyurea-nedir-avantajlari", "havuz-izolasyonu-7-yol", "polyurea-vs-membran-karsilastirma"],
    relatedServices: ["cam-elyaf-poliuretan-izmir", "cam-elyaf-izolasyon-izmir", "beton-ustu-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "epoksi-atatuk-osb",
    title: "İzmir Çiğli Atatürk OSB'de Fabrika Zemin Kaplama",
    excerpt:
      "Atatürk Organize Sanayi Bölgesi'nde aktif olduğumuz 7+ yıllık tecrübemiz ve sektör bazlı sistem önerileri.",
    category: "Yerel B2B",
    primaryKeyword: "epoksi atatürk osb",
    date: "2026-01-18",
    readTime: 6,
    seo: {
      title: "Atatürk OSB Fabrika Zemin Kaplama — Sim İzolasyon",
      description:
        "İzmir Çiğli Atatürk OSB'de epoksi ve poliüretan zemin uygulamalarımız. Sektör bazlı sistem önerileri ve hızlı keşif.",
    },
    blocks: [
      { type: "p", text: "İzmir Çiğli Atatürk Organize Sanayi Bölgesi (Atatürk OSB), Türkiye'nin önemli üretim merkezlerinden biri. Otomotiv yan sanayi, gıda, kimya, makine üretim ve lojistik tesislerinin yoğun olduğu bölgede 7+ yıldır aktif şantiyelerimiz var." },

      { type: "h2", text: "Atatürk OSB'deki Tipik İhtiyaçlar" },
      { type: "ul", items: [
        "Üretim hattı zemin yenileme — duruş süresi minimize",
        "Depo ve lojistik alan kaplama",
        "Hijyen alanlar (gıda, ilaç) için cove sistemi",
        "Forklift trafik dayanımı (3–5 ton)",
        "Otopark zemin yenileme",
        "Sandviç panel çatı tamir/yenileme",
      ]},

      { type: "h2", text: "Sektör Bazlı Önerilerimiz" },
      { type: "ul", items: [
        "Otomotiv yan sanayi → Kuvars takviyeli epoksi 5 mm",
        "Gıda fabrikası → Poliüretan-çimento HACCP uyumlu",
        "İlaç/kimya → Self-leveling epoksi + ESD (gerekirse)",
        "Lojistik depo → Self-leveling 3 mm + trafik çizgileri",
        "Makine üretim → Boya tip + kuvars güçlendirilmiş alanlar",
      ]},

      { type: "h2", text: "Üretim Durdurmadan Uygulama" },
      { type: "p", text: "Atatürk OSB'deki tesislerin büyük bölümünde üretim 7/24 devam ediyor. Alan bölümleme, vardiya planlaması ve hızlı kürlenen sistemlerle (polyurea ve poliüretan-çimento) üretim durdurmadan çalışıyoruz. 24 saatte trafiğe açma standart." },

      { type: "h2", text: "Hızlı Keşif Programımız" },
      { type: "p", text: "Atatürk OSB'de aktif olduğumuz için 24–48 saat içinde keşif planlaması yapıyoruz. Keşif sonrası 24 saat içinde detaylı, kalem kalem teklif sunuyoruz. Acil ihtiyaçlarda aynı gün keşif mümkün." },

      { type: "h2", text: "Saha Ekibimiz" },
      { type: "p", text: "Epoksi, polyurea ve poliüretan sistemlerinde sertifikalı uygulayıcı ekibimiz, tüm OSB tesisleri için aktif. Ekipmanımız yerinde kullanıma hazır; lojistik gecikme yok." },

      { type: "callout", title: "Atatürk OSB'de Aktif Şantiye", text: "Atatürk OSB ve Kemalpaşa OSB'de hızlı keşif, OSB içinde 30 dakikada saha tespiti yapıyoruz. Hatlar boyunca takvime bağlı çalışma." },
    ],
    relatedPosts: ["endustriyel-tesis-zemin-rehberi", "epoksi-zemin-cesitleri", "polyurea-nedir-avantajlari"],
    relatedServices: ["epoksi-zemin-kaplama-izmir", "endustriyel-zemin-kaplama-izmir", "sandvic-panel-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "teras-mi-cati-mi-sizinti",
    title: "Teras Sızıntısı Mı Çatı Sızıntısı Mı? Nasıl Anlaşılır?",
    excerpt:
      "Çatı katı dairesi sahiplerinde sık karışan iki sorun. Tespit yöntemleri ve doğru tanı için saha ipuçları.",
    category: "Diagnoz",
    primaryKeyword: "teras sızıntı çatı sızıntı",
    date: "2026-01-11",
    readTime: 5,
    seo: {
      title: "Teras mi Çatı mı? Sızıntı Tespit Rehberi | Sim İzolasyon",
      description:
        "Çatı katı dairesinde sızıntı kaynağı nasıl ayırt edilir? Teras mi çatı mı? Tespit yöntemleri ve profesyonel tanı.",
    },
    blocks: [
      { type: "p", text: "Çatı katı dairesinde tavandan damlama gördüğünüzde sorun teras kaynaklı mı, çatı kaynaklı mı? İki sorun farklı sistem ve farklı bütçe gerektirir. Doğru tanı, doğru çözümün başlangıcı." },

      { type: "h2", text: "Çatı Kaynaklı Sızıntı Belirtileri" },
      { type: "ul", items: [
        "Yağmur sırasında ve yağmur sonrası ilk saatlerde damlama",
        "Tavanın merkezinde leke",
        "Dış sıcaklık değişimiyle damlama farkı",
        "Çatı yapısı eski (membran solmuş, kabarmış)",
      ]},

      { type: "h2", text: "Teras Kaynaklı Sızıntı Belirtileri" },
      { type: "ul", items: [
        "Tavanın belli bir köşesinde leke (terasın o köşesi su tutuyor)",
        "Yağmur sonrası gecikmeli damlama (1–6 saat)",
        "Teras üstünde kullanım/yürüme alanı",
        "Teras yüzeyinde su göllenmesi",
      ]},

      { type: "h2", text: "Tespit Yöntemleri" },
      { type: "h3", text: "Su Testi" },
      { type: "p", text: "Teras yüzeyine 30 dakika hortumla su tutulur. Eğer 6 saat içinde damlama başlarsa — teras sızıntısı. Damlama yoksa, çatı membranı veya yapısal başka bir noktadan." },
      { type: "h3", text: "Termal Kamera" },
      { type: "p", text: "Çatı yüzeyinde nemli ve kuru bölgeler arasındaki sıcaklık farkını gösterir. Sızıntı yolunu görselleştirir." },
      { type: "h3", text: "Mum Testi" },
      { type: "p", text: "Tavanda damlama yerinde aşağıdan yukarı bir mum tutulur — alev hareketi hava çıkış noktasını gösterir. Genellikle sızıntı kaynağına yakın." },

      { type: "h2", text: "Profesyonel Yardım Ne Zaman?" },
      { type: "p", text: "Eğer kendi yaptığınız test belirsizse veya damlama dışında küflenme/kabarma da varsa — profesyonel keşif şart. Ücretsiz keşifte termal kamera, nem ölçer ve görsel tarama ile kaynak bulunur." },

      { type: "callout", title: "Ücretsiz Keşif", text: "Çatı/teras sızıntısında doğru tanı için 1 saatlik bir keşif çoğu zaman yeterli. Hem kaynak tespiti hem çözüm önerisi tek pakette." },
    ],
    relatedPosts: ["cati-su-sizintisi-nasil-bulunur", "izolasyon-yaparken-10-hata", "teras-izolasyon-fiyatlari-2026"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "eski-bina-su-yalitimi",
    title: "Su Yalıtımı Yapılmamış Eski Binayı Nasıl Kurtarırsınız?",
    excerpt:
      "Eski binalarda beton üstü cam elyaf takviyeli sistem ve diğer pratik yenileme stratejileri.",
    category: "Beton Üstü İzolasyon",
    primaryKeyword: "eski bina su yalıtımı",
    date: "2026-01-04",
    readTime: 7,
    seo: {
      title: "Eski Bina Su Yalıtımı — Pratik Çözümler | Sim İzolasyon",
      description:
        "Yıllar içinde yıpranmış eski binalarda su yalıtım yenileme. Beton üstü cam elyaf takviyeli sistem ve aşamalı yenileme stratejileri.",
    },
    blocks: [
      { type: "p", text: "Türkiye'deki yapı stoğunun büyük bölümü 1985–2010 arasında inşa edildi. Bu binaların büyük çoğunluğunda izolasyon ya hiç yapılmadı ya da ömrünü doldurdu. Eski binayı sıfırdan yıkmadan, var olanı kurtarmak — hem ekonomik hem ekolojik en iyi yaklaşım." },

      { type: "h2", text: "Eski Binada Tipik Sorunlar" },
      { type: "ul", items: [
        "Çatı membranı yıpranmış, çatlaklar var",
        "Teras eğim betonu çökmüş",
        "Bodrum perde duvar nem",
        "Asansör çukuru su birikmesi",
        "Dış cephe dilatasyon yıpranması",
        "Yapı oturma çatlakları",
      ]},

      { type: "h2", text: "Aşamalı Yenileme Stratejisi" },
      { type: "p", text: "Tüm sorunları aynı anda çözmek bütçeyi zorlar. Aşamalı yaklaşım:" },
      { type: "ol", items: [
        "Faz 1: Çatı + teras (en yüksek öncelik)",
        "Faz 2: Bodrum perde duvar + asansör çukuru",
        "Faz 3: Otopark izolasyon (varsa)",
        "Faz 4: Dış cephe dilatasyon + ıslak hacimler",
      ]},

      { type: "h2", text: "Eski Beton İçin Cam Elyaf Takviyeli Sistem" },
      { type: "p", text: "Eski beton yüzeylerin en büyük problemi yapı oturma çatlakları. Bu çatlaklar zamanla genişler ve standart membran/poliüretan yetersiz kalır. Cam elyaf takviyeli sistem; çatlak köprüleme yeteneği ile bu sorunu çözer." },

      { type: "h2", text: "Vaka: 30 Yıllık Apartman Çatı Katı Terası" },
      { type: "p", text: "Yıpranmış beton yüzey, mevcut izolasyon kaynaklı sürekli sızıntı. Yüzey hazırlığı, mevcut kabarmaların sökümü, çatlak tamiri, primer + cam elyaf takviyeli poliüretan + UV korumalı son kat. 5 iş gününde teslim, 8 yıl garanti." },

      { type: "h2", text: "Bütçe Yönetimi" },
      { type: "p", text: "Apartman ortak alan izolasyonu daire başı paya bölünür. Aşamalı yenileme her yıl bir faz şeklinde planlanırsa daire başı yıllık maliyet düşük tutulur. 4 yılda kapsamlı yenileme tamamlanır." },

      { type: "callout", title: "Eski Bina Keşif", text: "Apartman yönetimleri için aşamalı yenileme planı oluşturuyoruz. Hangi faz yapılırsa hangi sorun çözülür, hangi maliyetle — kalem kalem belgeleyerek sunuyoruz." },
    ],
    relatedPosts: ["cam-elyaf-takviye-detay", "izolasyon-bornova", "izmir-cati-izolasyonu-rehberi-2026"],
    relatedServices: ["beton-ustu-izolasyon-izmir", "cam-elyaf-poliuretan-izmir", "perde-beton-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "izolasyon-garantisi-rehberi",
    title: "Çatı İzolasyonu Garantisi: Nelere Dikkat Edilmeli?",
    excerpt:
      "Yazılı vs sözlü garanti, garanti süresi, sözleşme detayları ve iyi firmalardaki standart uygulamalar.",
    category: "Garanti & Hukuk",
    primaryKeyword: "izolasyon garantisi",
    date: "2025-12-28",
    readTime: 5,
    seo: {
      title: "İzolasyon Garantisi — Nelere Dikkat? | Sim İzolasyon",
      description:
        "Çatı/teras izolasyon garantisi: yazılı sözleşme, garanti kapsamı, süre, gerçek anlamı. İyi firmalardaki standart uygulamalar.",
    },
    blocks: [
      { type: "p", text: "İzolasyon yapım sürecinin en hassas konularından biri garanti. Çoğu firma 'garantili' der ama yazılı sözleşme veya net kapsam çoğu zaman olmaz. Bu yazıda gerçek garantinin nasıl anlaşılması gerektiğini, sözleşmede aranacakları ve tüketici haklarınızı anlatıyoruz." },

      { type: "h2", text: "Yazılı vs Sözlü Garanti" },
      { type: "p", text: "Sözlü garanti hiçbir şey ifade etmez. Anlaşmazlıkta hak iddia edemezsiniz. İyi firmalar her zaman yazılı garanti sunar; bu standart olmalı." },

      { type: "h2", text: "Sözleşmede Aranacaklar" },
      { type: "ul", items: [
        "Garanti süresi (yıl olarak — örn. 8 yıl)",
        "Garanti kapsamı (sızıntı? işçilik? malzeme?)",
        "Yıllık ücretsiz bakım hakkı (var mı, kapsamı?)",
        "Garanti dışı kalan durumlar net belirtilmiş mi?",
        "Servis süresi (kaç gün içinde müdahale?)",
        "Tarafların imza ve damgaları",
        "Faturanın garanti süresine etkisi",
      ]},

      { type: "h2", text: "Garanti Süreleri Sektör Standardı" },
      { type: "ul", items: [
        "Bitümlü membran — 5 yıl",
        "Bitümlü membran çift kat — 8 yıl",
        "Polyurea sprey — 8 yıl",
        "Cam elyaf takviyeli poliüretan — 10 yıl",
        "Hibrit sistemler — 8–10 yıl",
      ]},

      { type: "h2", text: "Garanti Dışı Tipik Durumlar" },
      { type: "ul", items: [
        "Yapısal hareket / bina oturması (büyük çatlak)",
        "Doğal afet (deprem)",
        "Müşteri tarafından zarar verme",
        "Yetkisiz başka firma tarafından üzerine müdahale",
        "Yıllık bakım ihlali (sözleşmede belirtilmişse)",
      ]},

      { type: "h2", text: "İyi Firma Göstergesi" },
      { type: "ul", items: [
        "Sözleşme imzalamadan iş başlamaz",
        "Kalem kalem teklif",
        "Garanti süresi 5 yıldan az değil",
        "Yıllık görsel kontrol ücretsiz",
        "Servis süresi 3 iş günü içinde",
        "Şirket yönetim binasının adresi vergi dairesinde kayıtlı",
      ]},

      { type: "callout", title: "Sim İzolasyon Garanti Politikası", text: "Tüm uygulamalarda yazılı işçilik garantisi. Sisteme göre 5–10 yıl. Yıllık görsel kontrol ücretsiz. Servis 24 saatte." },
    ],
    relatedPosts: ["izolasyon-yaparken-10-hata", "polyurea-uygulayici-secimi", "izmir-cati-izolasyonu-rehberi-2026"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "sandvic-panel-oluk-sizinti",
    title: "Sandviç Panel Çatılarda Derz ve Oluk Sızıntısı Çözümleri",
    excerpt:
      "Sanayi tesislerinde panel çatı problemleri: ek bantları, civata, oluk gider birleşim detayları.",
    category: "Sandviç Panel",
    primaryKeyword: "sandviç panel oluk izolasyon",
    date: "2025-12-21",
    readTime: 5,
    seo: {
      title: "Sandviç Panel Oluk Sızıntısı Çözümleri | Sim İzolasyon",
      description:
        "Sanayi tesisi sandviç panel çatılarında derz, oluk gider, civata sızıntısı çözümleri. Esnek bant ve sıvı kauçuk sistemleri.",
    },
    blocks: [
      { type: "p", text: "Sandviç panel çatılar; sanayi tesislerinde hızlı kurulum nedeniyle yaygın. Yeni iken sorunsuz, ancak 7–10 yıl içinde panel ek yerleri, civata noktaları ve oluk gider birleşim detayları sızıntı yapmaya başlar. Tüm çatıyı yenilemek pahalı; doğru detay tamiri ile sorunsuz 5+ yıl daha alabilirsiniz." },

      { type: "h2", text: "Panel Sızıntısının Tipik Nedenleri" },
      { type: "ul", items: [
        "Panel ek bantlarının zamanla esnekliğini kaybetmesi",
        "Civata noktalarında contaların yıpranması",
        "Oluk gider birleşim detaylarının yetersizliği",
        "Termal genleşme — yaz/kış genleşme/büzülme",
        "Yetersiz eğim — su göllenmesi",
        "Karda donma sonucu eklerin açılması",
      ]},

      { type: "h2", text: "Çözüm Yaklaşımları" },
      { type: "h3", text: "Nokta Tamir (Ekonomik)" },
      { type: "p", text: "Sızıntı yapan tek nokta için: esnek bant yenileme, civata noktasına özel sıvı kauçuk uygulama. Hızlı ve uygun maliyetli." },
      { type: "h3", text: "Detay Yenileme (Orta Kademe)" },
      { type: "p", text: "Tüm panel ek hatlarında bant yenileme, oluk gider köşelerinde bütünleşik membran. 3–5 yıl ek ömür sağlar." },
      { type: "h3", text: "Tüm Yüzey Polyurea Kaplama (Premium)" },
      { type: "p", text: "Tüm panel yüzeyine polyurea sprey kaplama. Eksiz sistem, 10+ yıl ömür. Yüksek maliyet ama uzun vadeli ekonomik." },

      { type: "h2", text: "Termal Kamera ile Sızıntı Tespiti" },
      { type: "p", text: "Sandviç panelde sızıntı kaynağı çoğu zaman göründüğü yer değil. Termal kamera, kuruyan ve nemli yüzeyler arasındaki sıcaklık farkını gösterir; gerçek kaynak tespit edilir." },

      { type: "h2", text: "Vaka: Atatürk OSB Fabrika" },
      { type: "p", text: "Yağışlı sezonda sızıntı şikayeti. Termal kamera ile 12 panel ek noktası ve 8 civata noktası tespit edildi. Esnek bant + sıvı kauçuk uygulamasıyla 2 günde teslim. 18 ay sonra hâlâ sızıntı yok." },

      { type: "callout", title: "Sandviç Panel Detay Tamiri", text: "Çatınız genel olarak iyi durumda ama bazı noktalarda sızıntı varsa — nokta tamir ekonomik çözüm. Tüm yüzey kaplama gerekmez." },
    ],
    relatedPosts: ["izmir-cati-izolasyonu-rehberi-2026", "epoksi-atatuk-osb", "polyurea-nedir-avantajlari"],
    relatedServices: ["sandvic-panel-izolasyon-izmir", "cati-izolasyon-izmir", "polyurea-sprey-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "izolasyon-yaparken-10-hata",
    title: "İzolasyon Yaptırırken 10 Sık Yapılan Hata",
    excerpt:
      "İzolasyon sürecinde tüketicilerin tipik olarak yaptığı 10 hata ve nasıl kaçınılır.",
    category: "Tüketici Rehberi",
    primaryKeyword: "izolasyon hataları",
    date: "2025-12-14",
    readTime: 6,
    seo: {
      title: "İzolasyon Yaparken 10 Hata — Kaçının! | Sim İzolasyon",
      description:
        "İzolasyon yaptırırken yapılan 10 sık hata: yanlış sistem, ucuz malzeme, yazısız anlaşma. Tüketici rehberi.",
    },
    blocks: [
      { type: "p", text: "İzolasyon, doğru yapılırsa 10+ yıl size hizmet eden bir yatırım. Yanlış yapılırsa; sürekli tamir, sızıntı, komşu sorunları, hukuki anlaşmazlık. Bu yazıda saha tecrübemizden gözlediğimiz en sık 10 hatayı ve nasıl kaçınılacağını anlatıyoruz." },

      { type: "h2", text: "1. En Düşük Teklifi Seçmek" },
      { type: "p", text: "İzolasyon piyasasında en düşük teklif çoğu zaman tuzaktır. Ya malzeme kalitesinden ya işçilikten ya garanti süresinden tasarruf yapılmıştır. 3 firmadan teklif al, en düşük olanı sorgula." },

      { type: "h2", text: "2. Yazılı Sözleşme Olmadan İş Başlatmak" },
      { type: "p", text: "Sözleşmede; sistem, malzeme markası, m², garanti süresi ve ödeme koşulları net olmalı. Sözleşmesiz iş = uyuşmazlıkta hakkın yok." },

      { type: "h2", text: "3. Yüzey Hazırlığını Atlamak" },
      { type: "p", text: "Membran serme veya kaplama uygulamasından önce yüzey temizliği, çatlak tamiri ve primer şart. 'Hızlı yapalım' kültürü, 2–3 yıl içinde sızıntıya götürür." },

      { type: "h2", text: "4. Sertifikasız Malzeme Kullanmak" },
      { type: "p", text: "Sertifika; malzemenin laboratuvar testlerini geçtiğinin kanıtı. Sertifikasız malzeme = garanti yok. Kullanılacak markaları sözleşmede yazdırın." },

      { type: "h2", text: "5. Detay Noktalarını Atlamak" },
      { type: "p", text: "Sızıntıların %80'i detay noktalarından gelir: parapet, baca, oluk gider, kapı eşiği. Bu noktalar atlanırsa, ana yüzey sağlam olsa da sızıntı çıkar." },

      { type: "h2", text: "6. Garanti Süresini Önemsememek" },
      { type: "p", text: "5 yıl garanti standart, 8 yıl iyi, 10 yıl mükemmel. Garantisiz iş kabul etmeyin. Yazılı garanti sözleşmenin parçası olmalı." },

      { type: "h2", text: "7. Tek Kat Membran Yapmak" },
      { type: "p", text: "Çift kat çapraz örtüşmeli membran standarttır. Tek kat sızıntı riski 2 katı. 'Tek kat yeterli' bahanesi tasarruf değil." },

      { type: "h2", text: "8. Uygulayıcı Sertifikasını Sormamak" },
      { type: "p", text: "Polyurea ve özel sistem sertifikası uygulayıcının yetkinlik kanıtı. Sertifikasız uygulamada yapışma kaybı, kürlenme problemleri çıkar." },

      { type: "h2", text: "9. Yıllık Bakımı Atlamak" },
      { type: "p", text: "İlk yıl ve sonraki yıllar yıllık görsel kontrol; küçük sorunları büyümeden çözer. İyi firmalar bu kontrolü ücretsiz sunar." },

      { type: "h2", text: "10. 'Komşu yapmıştı, aynısını yapın' Yaklaşımı" },
      { type: "p", text: "Her bina farklı: yapı yaşı, çatı tipi, yön, kullanım. Komşunun sistemini kopyalamak yerine, kendi binanız için profesyonel keşif şart." },

      { type: "callout", title: "İyi Firma Tercihi", text: "Sim İzolasyon olarak yukarıdaki 10 hatanın hiçbirini yaşatmıyoruz. Sözleşmeli, kalem kalem, garantili çalışma standardımız." },
    ],
    relatedPosts: ["izolasyon-garantisi-rehberi", "polyurea-uygulayici-secimi", "teras-izolasyon-fiyatlari-2026"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir", "havuz-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "polyurea-uygulayici-secimi",
    title: "Polyurea Uygulayıcısı Nasıl Seçilir? Sertifika ve Tecrübe",
    excerpt:
      "Polyurea sprey uygulayıcısının niteliklerini değerlendirme: sertifika, ekipman, demo, referans.",
    category: "Polyurea",
    primaryKeyword: "polyurea uygulayıcı",
    date: "2025-12-07",
    readTime: 5,
    seo: {
      title: "Polyurea Uygulayıcısı Seçimi — Kontrol Listesi",
      description:
        "Polyurea sprey uygulayıcısı nasıl seçilir? Sertifika, ekipman, demo, referans, sigorta. Pratik kontrol listesi.",
    },
    blocks: [
      { type: "p", text: "Polyurea, yetkinlik gerektiren bir sistem. Doğru malzeme + yanlış uygulayıcı = düşük performans. Bu yazıda polyurea uygulayıcısını değerlendirirken sormanız gereken 7 kritik soruyu paylaşıyoruz." },

      { type: "h2", text: "1. Sertifika Sahibi mi?" },
      { type: "p", text: "Polyurea uygulayıcı sertifikası, üreticinin laboratuvarda eğitim sonrası verdiği bir belge. Sertifika sahibi olmayan ekipler tipik olarak sigortasız ve garantisizdir." },

      { type: "h2", text: "2. Hangi Ekipmanı Kullanıyor?" },
      { type: "p", text: "Polyurea için profesyonel sprey ekipmanı şart: GRACO Reactor, Wagner FX series gibi. 'Basit boya pompası' ile polyurea uygulanmaz; düşük basınç = kötü karışım = düşük performans." },

      { type: "h2", text: "3. Saha Tecrübesi (Yıl)" },
      { type: "p", text: "5 yıl altı tecrübeli uygulayıcı = öğrenme döneminde. 8+ yıl tecrübe ideal. Tamamladıkları proje sayısını sorun." },

      { type: "h2", text: "4. Referans Listesi" },
      { type: "p", text: "Mutlaka 3+ tamamlanan proje referansı isteyin. Mümkünse 1 referansa gidip yerinde kontrol edin (5 yıl önce yapılmış proje hâlâ iyi durumda mı?)." },

      { type: "h2", text: "5. Demo Yapabilir mi?" },
      { type: "p", text: "Profesyonel uygulayıcı, küçük bir alanda (1 m²) demo uygulama yapabilir. Reaksiyon süresi, kürlenme hızı ve yüzey kalitesi gözlenir." },

      { type: "h2", text: "6. Sigorta Var mı?" },
      { type: "p", text: "Mesleki sorumluluk sigortası ve iş kazası sigortası. Olası bir sorunda sizi koruyacak garanti." },

      { type: "h2", text: "7. Garanti Süresi" },
      { type: "p", text: "Polyurea standart 8 yıl. 5 yıl altı = düşük güven. 10 yıl üzeri = premium uygulayıcı." },

      { type: "h2", text: "Tehlike İşaretleri" },
      { type: "ul", items: [
        "Sözleşme imzalamadan iş başlatmaya çalışan",
        "Sertifikasını gösteremeyen",
        "Ekipman markasını söyleyemeyen",
        "Referans vermek istemeyen",
        "'En düşük fiyat' ile öne çıkan",
        "Garanti süresi 5 yıldan kısa",
      ]},

      { type: "callout", title: "Sim İzolasyon Polyurea", text: "8+ yıllık polyurea tecrübemiz, sertifikalı uygulayıcı ekibimiz ve GRACO Reactor sprey sistemiyle kalıcı performans." },
    ],
    relatedPosts: ["polyurea-nedir-avantajlari", "polyurea-vs-membran-karsilastirma", "izolasyon-garantisi-rehberi"],
    relatedServices: ["polyurea-sprey-izmir", "havuz-izolasyon-izmir", "otopark-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "izolasyon-sezonu-aylar",
    title: "İzmir'de İzolasyon Sezonu: En İyi Aylar Hangileri?",
    excerpt:
      "İklim şartlarına göre izolasyon planlaması: hangi aylarda hangi sistemler uygulanır?",
    category: "Planlama",
    primaryKeyword: "izolasyon ne zaman yapılır",
    date: "2025-11-30",
    readTime: 5,
    seo: {
      title: "İzolasyon Hangi Aylarda Yapılır? — İzmir | Sim İzolasyon",
      description:
        "İzmir'de izolasyon planlaması: ideal aylar, sıcaklık aralıkları, yağmur sezonu yönetimi. Pratik takvim önerileri.",
    },
    blocks: [
      { type: "p", text: "İzolasyon iş takvimi sadece bütçe değil, hava şartlarına göre planlanmalı. Polyurea +5°C ile +35°C arasında uygulanabilir; bitümlü membran nemli yüzeyde tutmaz; epoksi ısı ve nem hassastır. Doğru ay seçimi, başarılı uygulamanın anahtarıdır." },

      { type: "h2", text: "İdeal Sıcaklık Aralıkları" },
      { type: "ul", items: [
        "Polyurea sprey — +5°C / +35°C arası",
        "Bitümlü membran (sıcak tatbik) — +10°C / +40°C arası",
        "Bitümlü membran (soğuk tatbik) — +5°C / +30°C arası",
        "Poliüretan sıvı membran — +10°C / +35°C arası",
        "Epoksi zemin — +15°C / +30°C arası",
      ]},

      { type: "h2", text: "İzmir'de Aylara Göre Planlama" },
      { type: "h3", text: "Mart–Mayıs (İdeal)" },
      { type: "p", text: "Sıcaklık 15–25°C arası, az yağışlı. Tüm sistemler için altın dönem. Çatı, teras, havuz uygulamaları için ideal." },
      { type: "h3", text: "Haziran–Ağustos (Sıcak)" },
      { type: "p", text: "İzmir'de yaz aylarında öğle saatleri 35°C üstü. Polyurea ve epoksi için sabah erken veya akşam üstü çalışma. Havuz uygulamaları yaz öncesinde tamamlanmış olmalı (mayıs)." },
      { type: "h3", text: "Eylül–Kasım (İyi)" },
      { type: "p", text: "Sıcaklık 18–28°C, az yağış. Mart–Mayıs ile birlikte ikinci altın dönem. Çatı sezon öncesi yenilemeleri için ideal." },
      { type: "h3", text: "Aralık–Şubat (Zorlu)" },
      { type: "p", text: "Yağışlı, soğuk. Çatı/teras dış uygulaması zorlanır. Acil sızıntı dışında ana iş yapmamak iyi. İç mekan uygulamaları (banyo, ıslak zemin, asansör çukuru) bu aylarda devam eder." },

      { type: "h2", text: "Yağmur Sezonu Yönetimi" },
      { type: "p", text: "Sızıntı genelde yağmur sonrası fark edilir; ama yağmur dönemi uygulamaya uygun değil. Strateji: yaz/sonbahar başında ücretsiz keşif yaptır, kış başında uygulama planla." },

      { type: "h2", text: "Acil Müdahale" },
      { type: "p", text: "Aktif sızıntıda enjeksiyon ile durdurma her mevsim mümkün. Daha sonra hava müsait olduğunda kapsamlı izolasyon yapılır." },

      { type: "callout", title: "Yıl Boyu Aktiflik", text: "İç mekan uygulamaları (ıslak zemin, banyo, asansör çukuru, otopark) tüm yıl yapılır. Dış uygulamalar (çatı, teras, havuz) için Mart–Kasım önerilir." },
    ],
    relatedPosts: ["izolasyon-yaparken-10-hata", "izmir-cati-izolasyonu-rehberi-2026", "havuz-izolasyonu-7-yol"],
    relatedServices: ["cati-izolasyon-izmir", "teras-izolasyon-izmir", "havuz-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "seramik-ustu-izolasyon-rehberi",
    title: "Seramik Üstüne Su Yalıtımı — Söküm Yapmadan Çözüm",
    excerpt:
      "Mevcut seramik kaplamayı sökmeden yapılan sıvı membran sistemleri. Hangi durumda mümkün, hangi durumda söküm gerekir?",
    category: "Seramik Üstü",
    primaryKeyword: "seramik üstü izolasyon nasıl yapılır",
    date: "2025-11-23",
    readTime: 5,
    seo: {
      title: "Seramik Üstü İzolasyon — Söküm Yapmadan | Sim İzolasyon",
      description:
        "Mevcut seramik kaplama söküm gerekmeden uygulanan su yalıtım sistemleri. Banyo, balkon, teras seramik üstü izolasyon detayları.",
    },
    blocks: [
      { type: "p", text: "Seramik kaplı bir balkon, teras veya banyo izolasyon ihtiyacı duyduğunuzda; söküm + yeni izolasyon + yeni seramik yapma maliyeti yüksek. İyi haber: söküm yapmadan, mevcut seramik üzerine uygulanabilen sıvı membran sistemleri var." },

      { type: "h2", text: "Söküm Yapmadan Mümkün mü?" },
      { type: "p", text: "Evet — özel hazırlanmış primer ve esnek sıvı membran sistemleri ile mevcut seramik üstüne uygulama yapılabilir. En büyük avantaj: söküm masrafı yok, mekan kullanımı kesintisiz, hızlı teslim." },

      { type: "h2", text: "Hangi Durumda Söküm Gerekir?" },
      { type: "p", text: "Söküm yapmadan uygulama her durumda mümkün değil. Söküm gerektiren durumlar:" },
      { type: "ul", items: [
        "Mevcut seramik kabarmış, içine su girmiş",
        "Altta zayıf yapışma var (boş ses gelir tıklayınca)",
        "Çok eski, kırık, dökük seramik",
        "Yapısal çatlak görünüyor",
        "Mevcut izolasyon tamamen bozulmuş",
      ]},

      { type: "h2", text: "Sistem Yapısı (Söküm Yapmadan)" },
      { type: "ol", items: [
        "Yüzey temizliği (yağ, kir, kimyasal kalıntı)",
        "Boş ses gelen seramiklerin kontrolü, gerekirse lokal söküm",
        "Özel primer (mevcut seramiğe yapışan)",
        "Çift kat esnek sıvı membran",
        "Köşe ve gider detaylarında özel bant",
        "Üstüne renk + UV koruma (dış mekan)",
        "Direkt kullanım veya yeni seramik (tercihe göre)",
      ]},

      { type: "h2", text: "Avantajlar" },
      { type: "ul", items: [
        "Hızlı uygulama (1–3 gün)",
        "Mekan kullanımı kesintisiz",
        "Söküm + yeni seramik maliyetinden ekonomik",
        "Hafif — yapı yüküne ek getirmez",
        "Üzerine seramik veya başka kaplama yapılabilir",
      ]},

      { type: "h2", text: "Sınırlamalar" },
      { type: "ul", items: [
        "Yapışma mevcut seramiğe bağlı",
        "Çok eski/yıpranmış zeminde tercih edilmez",
        "Garanti süresi söküm + yeniden yapımdan kısa",
      ]},

      { type: "callout", title: "Seramik Üstü Keşif", text: "Mevcut seramiğinizin söküm yapmaya uygun olup olmadığını keşifte tespit ediyoruz. Söküm gerekiyorsa söylüyoruz, gerekmiyorsa hızlı uygulamayla 1–2 günde teslim." },
    ],
    relatedPosts: ["banyo-izolasyon-onemi", "teras-izolasyon-fiyatlari-2026", "izolasyon-yaparken-10-hata"],
    relatedServices: ["seramik-ustu-izolasyon-izmir", "islak-zemin-izolasyon-izmir", "teras-izolasyon-izmir"],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "enjeksiyon-yalitim-rehberi",
    title: "Enjeksiyon Yalıtım Nedir? Aktif Sızıntıya Çözüm",
    excerpt:
      "Yüksek basınçlı reçine enjeksiyonu ile aktif su sızıntısının durdurulması. Hangi noktalarda kullanılır?",
    category: "Enjeksiyon",
    primaryKeyword: "enjeksiyon yalıtım nedir",
    date: "2025-11-16",
    readTime: 5,
    seo: {
      title: "Enjeksiyon Yalıtım — Aktif Sızıntı Çözümü | Sim İzolasyon",
      description:
        "Bodrum, asansör çukuru, otopark perde duvarda aktif su sızıntısı: yüksek basınçlı poliüretan reçine enjeksiyonu ile hızlı çözüm.",
    },
    blocks: [
      { type: "p", text: "Bodrum perde duvardan akan su, asansör çukurunda biriken su, otoparkta tavandan damlama — bu tür aktif sızıntılarda klasik membran uygulanamaz çünkü yüzey kuru olmadığı için yapışma sağlanmaz. Çözüm: yüksek basınçlı reçine enjeksiyonu." },

      { type: "h2", text: "Enjeksiyon Tekniği Nedir?" },
      { type: "p", text: "Enjeksiyon; sızıntı yapan beton içine açılan deliklerden yüksek basınçlı reçinenin pompalanmasıdır. Reçine, su ile temas edince genleşir ve boşlukları doldurur. Sızıntı durur." },

      { type: "h2", text: "Reçine Türleri" },
      { type: "ul", items: [
        "Poliüretan köpük reçinesi — su ile temas edince hızlı genleşir",
        "Akrilik jel — esnek dolgu, hareket alabilen yapılarda",
        "Epoksi reçinesi — yapısal yapışma + sızdırmazlık",
        "Çimento bazlı enjeksiyon — büyük boşluklar için",
      ]},

      { type: "h2", text: "Hangi Noktalarda Kullanılır?" },
      { type: "ul", items: [
        "Bodrum perde duvar aktif sızıntısı",
        "Asansör çukuru su birikmesi",
        "Otopark perde duvar ve döşeme sızıntısı",
        "Tünel ve viyadük",
        "Su deposu çatlakları",
        "Yapısal çatlak onarımı",
      ]},

      { type: "h2", text: "Uygulama Süreci" },
      { type: "ol", items: [
        "Sızıntı noktası tespiti (görsel + termal kamera)",
        "Beton içine paker (enjeksiyon ucu) yerleştirme",
        "Yüksek basınçlı reçine pompalama",
        "Sızıntı durana kadar enjeksiyon",
        "Pakerlerin sökülmesi",
        "Yüzey tamiri ve gerekirse koruyucu kaplama",
      ]},

      { type: "h2", text: "Enjeksiyon Kalıcı mı?" },
      { type: "p", text: "Doğru reçine seçimi ve uygulamayla evet. Ancak iyi pratik: enjeksiyon ile aktif sızıntı durdurma + sonrasında klasik membran sistemiyle kapsamlı izolasyon. İki adım kombine = en güvenli." },

      { type: "h2", text: "Hızlı Müdahale" },
      { type: "p", text: "Enjeksiyon, izolasyon dünyasında 'ambulans' gibidir. Aktif sızıntıda 24 saat içinde saha tespiti yapıyoruz, ertesi gün uygulama başlayabilir." },

      { type: "callout", title: "Acil Sızıntı?", text: "Bodrumda, asansör çukurunda veya otoparkta aktif su sızıntınız varsa — hemen arayın. 24 saat içinde saha tespiti, gerekirse aynı gün enjeksiyon." },
    ],
    relatedPosts: ["asansor-cukuru-rehberi", "otopark-izolasyon-rehberi", "izolasyon-bornova"],
    relatedServices: ["enjeksiyon-yalitim-izmir", "asansor-cukuru-izolasyon-izmir", "otopark-enjeksiyon-izmir", "perde-beton-izolasyon-izmir"],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

export const getRelatedBlogPosts = (slugs: string[]): BlogPost[] =>
  slugs.map((s) => BLOG_POSTS.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];

export const getLatestPosts = (limit = 6): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
