/**
 * Hizmet sayfaları için SEO odaklı içerik veritabanı.
 * Her servis için: meta, hero, intro, H2 bölümleri, sistemler, FAQ, ilçeler,
 * ilgili servisler ve projeler. Hizmet detay sayfası bu veriyle render edilir.
 */

export type FaqItem = { q: string; a: string };

export type ContentSection = {
  title: string;
  body: string;
  list?: string[];
};

export type SystemItem = {
  name: string;
  desc: string;
};

export type ServiceContent = {
  slug: string;
  category: string;
  primaryKeyword: string;
  lsiKeywords: string[];

  seo: {
    title: string;       // ≤60ch
    description: string; // ≤160ch
  };

  hero: {
    eyebrow: string;
    h1: string;
    intro: string;
  };

  intro: {
    title: string;
    paragraphs: string[];
  };

  sections: ContentSection[];

  systems?: SystemItem[];
  benefits?: string[];

  districts?: string[]; // İlçe vurgu listesi (long-tail)

  faq: FaqItem[];

  relatedServices: string[]; // service slug
  relatedProjects: string[]; // project slug
};

const COMMON_DISTRICTS = [
  "Bayraklı", "Karşıyaka", "Bornova", "Çiğli", "Konak", "Buca",
  "Gaziemir", "Narlıdere", "Balçova", "Çeşme", "Urla", "Foça",
  "Aliağa", "Menemen", "Torbalı",
];

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "cati-izolasyon-izmir": {
    slug: "cati-izolasyon-izmir",
    category: "Çatı İzolasyon",
    primaryKeyword: "çatı izolasyon izmir",
    lsiKeywords: [
      "çatı su yalıtımı izmir", "çatı membran uygulama", "çatı yalıtım fiyatları",
      "sandviç panel çatı izolasyon", "kiremit altı izolasyon", "çatı oluk yalıtımı",
      "çatı sızıntı çözümü", "gizli çatı izolasyonu", "çatı tamiri izmir",
    ],
    seo: {
      title: "Çatı İzolasyonu İzmir | Çatı Su Yalıtımı — Sim İzolasyon",
      description:
        "İzmir'de profesyonel çatı izolasyonu ve su yalıtımı. Membran, polyurea sprey, sandviç panel sistemleri. 10+ yıl tecrübe, garantili işçilik, ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Çatı İzolasyon İzmir",
      h1: "İzmir Çatı İzolasyon ve Su Yalıtım Uygulamaları",
      intro:
        "Eğimli, düz, beton, sandviç panel — her tür çatıda kalıcı su yalıtımı. İzmir'in nemli, deniz havası dengesine uygun sistemler ve yazılı işçilik garantisi.",
    },
    intro: {
      title: "İzmir'de Çatı İzolasyonu Neden Kritik?",
      paragraphs: [
        "İzmir, Ege'nin nemli kıyı iklimi nedeniyle çatı yapılarını oldukça zorlayan bir şehirdir. Yıllık ortalama yağış miktarı, deniz tuzunun rüzgârla taşıdığı korozif etki ve ani sıcaklık değişimleri; iyi tasarlanmamış bir çatı sisteminde mikro çatlaklara, derz açılmalarına ve uzun vadede yapı sağlığını tehdit eden sızıntılara yol açar.",
        "Sim İzolasyon olarak 10 yılı aşkın saha tecrübemizle; konut, ticari ve endüstriyel çatılarda kalıcı su yalıtımı sağlıyoruz. Sertifikalı bitümlü membran, polyurea sprey ve poliüretan sistemleriyle, uygulama sonrası beklenmedik sürpriz olmaz.",
        "Her projede yüzey hazırlığı, primer uygulaması, ana yalıtım katmanı ve koruyucu son kat bir bütün olarak ele alınır. Detay noktaları (baca dipleri, oluklar, parapetler) atlanmaz.",
      ],
    },
    sections: [
      {
        title: "Hangi Çatılarda Uygulama Yaparız?",
        body: "Çatı tipine göre sistem seçimi tamamen değişir. Yanlış sistem seçimi bütçe kaybı ve tekrar tekrar tamir gerektirir. İzmir'de uygulamasını yaptığımız çatı tipleri:",
        list: [
          "Eğimli kiremit çatılar — kiremit altı membran ve buhar dengeleyici sistemler",
          "Düz beton çatılar — bitümlü membran, polyurea sprey veya hibrit sistemler",
          "Sandviç panel çatılar (sanayi tesisleri) — derz, ek, oluk gider izolasyonu",
          "Gizli çatılar (yürüme yolu olarak kullanılan) — yük taşıyabilen yalıtım sistemleri",
          "Teras çatılar — UV dirençli, esnek polyurea kaplama",
          "Asma metal çatılar — ek detayları ve civata noktalarında özel çözümler",
        ],
      },
      {
        title: "Kullandığımız Çatı Yalıtım Sistemleri",
        body: "Her çatı tipi ve bütçe için doğru sistemi öneriyoruz. Kullandığımız ana sistemler:",
      },
      {
        title: "Çatı İzolasyon Fiyatlarını Etkileyen Faktörler",
        body: "Çatı izolasyon fiyatı tek bir metrekare rakamına indirgenmez. Maliyeti belirleyen faktörler:",
        list: [
          "Çatı alanı (m²) — büyük çatılarda birim fiyat düşer",
          "Mevcut yüzeyin durumu — sökme, temizleme veya tamir gerektiren bölgelerin kapsamı",
          "Seçilen sistem — bitümlü membran, polyurea sprey, poliüretan kaplama veya hibrit",
          "Detay sayısı — baca, havalandırma, parapet, oluk gider sayısı",
          "Erişim zorluğu — yüksek katlı binalarda iskele/sepet maliyeti",
          "Garanti süresi tercihi — uzun garanti için üst kademe sistemler",
        ],
      },
      {
        title: "Çatı İzolasyon Uygulama Süreci",
        body: "Standart bir çatı izolasyon projesi 5 adımda tamamlanır:",
        list: [
          "Ücretsiz keşif ve teknik rapor (1 iş günü)",
          "Şeffaf, kalem kalem teklif sunumu (24 saat içinde)",
          "Yüzey hazırlığı: temizlik, tamir, primer uygulaması",
          "Ana yalıtım katmanının uygulanması (sistem türüne göre 1–4 gün)",
          "Detay kontrolü, su testi, yazılı garanti belgesi teslimi",
        ],
      },
      {
        title: "İzmir'in İlçelerinde Çatı İzolasyonu",
        body: "Karşıyaka, Bornova, Bayraklı, Çiğli, Konak, Buca, Gaziemir, Narlıdere, Çeşme, Urla başta olmak üzere İzmir geneli ve çevre il merkezlerinde (Manisa, Aydın, Muğla) hizmet veriyoruz. Sahil ilçelerde (Çeşme, Urla, Foça) tuzlu hava direnci yüksek sistemleri tercih ediyoruz.",
      },
    ],
    systems: [
      { name: "Bitümlü Membran", desc: "Çift kat APP/SBS membran. Ekonomik, dayanıklı, klasik düz çatı çözümü. 8–10 yıl garanti." },
      { name: "Polyurea Sprey", desc: "Hızlı kürlenen, eksiz, esnek kaplama. UV dirençli. Karmaşık geometrili çatılar için ideal." },
      { name: "Poliüretan Sıvı Membran", desc: "Detaylara nüfuz eden, esnek sıvı kaplama. Gizli çatılar ve teras üstü uygulamalar için uygun." },
      { name: "Cam Elyaf Takviyeli Sistem", desc: "Çatlak köprüleme yeteneği yüksek. Eski beton çatılarda mekanik dayanım için tercih edilir." },
    ],
    benefits: [
      "Yazılı işçilik garantisi — sözleşmeli",
      "Sertifikalı malzeme — sektörün öncü markaları",
      "Şeffaf teklif — gizli kalem yok",
      "Aktif kullanım altında çalışma deneyimi",
      "Saha disiplini — temiz şantiye, zamanında teslim",
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "İzmir'de çatı izolasyonu ne kadar sürer?",
        a: "100–300 m² ortalama bir çatıda uygulama 2–5 iş günü sürer. Yüzey durumu, kullanılan sistem (membran/polyurea) ve hava şartları süreyi etkiler. Keşif sonrası net süre teklifte belirtilir.",
      },
      {
        q: "Çatı izolasyon fiyatı metrekare kaç TL?",
        a: "Fiyat; kullanılan sistem, yüzey durumu ve detay sayısına göre değişir. Bitümlü membran ekonomik aralıkta, polyurea ve cam elyaf takviyeli sistemler üst kademededir. İzmir merkez ve çevre ilçelerde keşif ücretsizdir.",
      },
      {
        q: "Mevcut kiremit çatımı sökmeden izolasyon yapılabilir mi?",
        a: "Evet — kiremit altı membran ve buhar dengeleyici sistemlerle birçok eğimli çatıda kiremit sökümüne gerek kalmadan izolasyon yapıyoruz. Yine de detay incelemesi için yerinde keşif şart.",
      },
      {
        q: "Çatı izolasyonu garantisi kaç yıl?",
        a: "Sisteme göre 5–10 yıl yazılı işçilik garantisi sunuyoruz. Polyurea ve cam elyaf takviyeli sistemlerde garanti süresi en uzundur.",
      },
      {
        q: "Yağmur sezonunda çatı izolasyonu yaptırabilir miyiz?",
        a: "Yağmurlu hava uygulama gününde çalışmayı durdurur ama proje planlaması mümkündür. Sistem seçiminde hızlı kürlenen polyurea tercih edilir, yağışsız 8–24 saatlik pencerede uygulanır.",
      },
      {
        q: "Çatımdan su sızıyor — önce ne yapmalıyım?",
        a: "Sızıntının kaynağı her zaman göründüğü yer değildir. Bizi arayın, ücretsiz yerinde keşifle hem kaynak tespiti yapalım hem kalıcı çözümü öneril.",
      },
    ],
    relatedServices: ["teras-izolasyon-izmir", "polyurea-sprey-izmir", "sandvic-panel-izolasyon-izmir", "poliuretan-izolasyon-izmir"],
    relatedProjects: ["gizli-cati-yuruyus-yolu", "soyak-sitesi-parapet-asansor", "sandvic-panel-su-oluk"],
  },

  "teras-izolasyon-izmir": {
    slug: "teras-izolasyon-izmir",
    category: "Teras İzolasyon",
    primaryKeyword: "teras izolasyon izmir",
    lsiKeywords: [
      "teras su yalıtımı izmir", "teras sızıntı çözümü", "teras tamiri", "teras membran",
      "çatı katı sızıntı", "teras üstü kaplama", "teras polyurea", "ıslak teras", "teras drenaj",
    ],
    seo: {
      title: "Teras İzolasyonu İzmir | Sızıntıya Son — Sim İzolasyon",
      description:
        "İzmir'de teras izolasyon uygulamaları: çok katmanlı su yalıtımı, polyurea, membran sistemleri. Sızıntı problemleri için kalıcı çözüm. Ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Teras İzolasyon İzmir",
      h1: "İzmir Teras İzolasyonu — Kalıcı Su Yalıtım Çözümleri",
      intro:
        "Çatı katı dairelerinde teras kaynaklı sızıntılar en sık karşılaşılan yapı sorunudur. Çok katmanlı sistemlerle kalıcı çözüm — söküm gerektirmeyen seçenekler dahil.",
    },
    intro: {
      title: "Neden Teras İzolasyonu Gerekli?",
      paragraphs: [
        "İzmir'de eski yapıların büyük bölümünde teraslar yetersiz veya zamanla işlevini yitirmiş izolasyonlarla karşımıza çıkıyor. Tipik sonuç: çatı katı dairesinde tavanda lekeler, alttaki dairede boya kabarması, en kötü senaryoda demir donatı korozyonu.",
        "Doğru bir teras izolasyon uygulaması; yüzey hazırlığı, detay çözümleri (gider, parapet dibi, kapı eşiği) ve doğru sistem seçimiyle 8–10 yıl boyunca sorunsuz çalışır. Sim İzolasyon olarak hem polyurea hem bitümlü membran sistemlerinde uzmanlaşmış sertifikalı uygulayıcı ekibimizle saha çalışmasını yapıyoruz.",
      ],
    },
    sections: [
      {
        title: "Teras Sızıntısı Belirtileri",
        body: "Erken müdahale her zaman daha ucuzdur. Aşağıdaki belirtilerden biri varsa keşif zamanı:",
        list: [
          "Çatı katı dairesi tavanında küflenme veya lekeler",
          "Tavanda boya kabarması, çıkıntılar",
          "Alttaki dairede tavandan damlama",
          "Teras kapı eşiğinde nem birikmesi",
          "Parapet dibinde yosun tutması, sıva atması",
          "Yağmur sonrası terasta su göllenmesi",
        ],
      },
      {
        title: "Çok Katmanlı Teras İzolasyon Sistemi",
        body: "Sağlıklı bir teras izolasyonu tek katmanlı bir membrandan çok daha fazlasıdır. Standart sistemimiz:",
        list: [
          "Yüzey temizliği ve mevcut sorunlu noktaların tamiri",
          "Eğim betonu kontrolü ve gerekirse yenileme",
          "Primer uygulaması (yapışma artırıcı astar)",
          "Ana yalıtım katmanı (membran, polyurea veya poliüretan)",
          "Koruyucu son kat ve UV bariyer",
          "Trafik yüküne göre koruma katmanı (granit, seramik veya yürüme tabakası)",
        ],
      },
      {
        title: "Seramik Sökmeden Teras İzolasyonu Mümkün mü?",
        body: "Mevcut seramik kaplamayı sökmeden uygulanabilen özel sistemler mevcut. Detayı için Seramik Üstü İzolasyon hizmetimize bakın.",
      },
      {
        title: "Teras İzolasyonunda En Sık Yapılan Hatalar",
        body: "Saha tecrübemizden gözlemlediğimiz hatalar:",
        list: [
          "Yüzey hazırlığını atlama — primer atılmadan membran serme",
          "Detay noktalarında esnek bant kullanmama",
          "Eğim betonu olmadan veya ters eğimle uygulama",
          "Ucuz, sertifikasız malzeme kullanma",
          "Garanti olmadan iş bitirme",
        ],
      },
    ],
    systems: [
      { name: "Polyurea Sprey", desc: "Eksiz, esnek, hızlı kürlenen. Detay noktaları için ideal." },
      { name: "Bitümlü Membran", desc: "Klasik, ekonomik, çift kat uygulama ile uzun ömürlü." },
      { name: "Poliüretan Sıvı Membran", desc: "Karmaşık geometrilerde sızıntısız uygulama." },
      { name: "Hibrit Sistem", desc: "Membran + polyurea sprey + koruma kombinasyonu — uzun garanti." },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Teras izolasyonu kaç günde biter?",
        a: "50–150 m² ortalama teraslarda 2–4 iş günü sürer. Söküm/tamir gereken ise 1–2 gün eklenir.",
      },
      {
        q: "Teras izolasyon fiyatı 2026 yaklaşık ne kadar?",
        a: "Sistem ve yüzey durumuna göre değişir. Detaylı tahmin için ücretsiz keşif sonrası kalem kalem teklif sunarız.",
      },
      {
        q: "Apartmanda komşum teras kullanıyor — sızıntımı nasıl çözeriz?",
        a: "Üst kat terası izolasyonu apartman ortak alanı statüsündedir. Yönetim onayıyla keşif yapıp, alt dairenin de etkilendiği tespit edilirse, kapsamlı çözüm önerimizi sunarız.",
      },
      {
        q: "Polyurea mı membran mı tercih edeyim?",
        a: "Bütçe önceliğindeyse bitümlü membran, uzun ömür ve detay zenginliği önceliğindeyse polyurea. Kombine sistemler de mümkün — keşifte yapıya en uygun olanı öneriyoruz.",
      },
      {
        q: "Çatı katı dairesinde nem var ama teras kuruyken görünüyor — yine de izolasyon mu sorun?",
        a: "Evet — teras yüzeyinin görünümü her zaman doğru sinyal vermez. Mikro çatlaklar veya detay noktalarındaki eskime sızıntıya neden olabilir. Termal kamera ve nem ölçümüyle tespit yapıyoruz.",
      },
    ],
    relatedServices: ["cati-izolasyon-izmir", "polyurea-sprey-izmir", "seramik-ustu-izolasyon-izmir", "islak-zemin-izolasyon-izmir"],
    relatedProjects: ["gizli-cati-yuruyus-yolu", "soyak-sitesi-parapet-asansor"],
  },

  "havuz-izolasyon-izmir": {
    slug: "havuz-izolasyon-izmir",
    category: "Havuz İzolasyon",
    primaryKeyword: "havuz izolasyon izmir",
    lsiKeywords: [
      "havuz su yalıtımı izmir", "yüzme havuzu izolasyon", "polyurea havuz kaplama",
      "beton havuz izolasyon", "havuz tamiri", "havuz sızıntısı çözüm",
      "çeşme havuz izolasyon", "urla havuz", "cam elyaf takviyeli havuz",
    ],
    seo: {
      title: "Havuz İzolasyonu İzmir | Sızıntısız Havuz — Sim İzolasyon",
      description:
        "Yüzme havuzları için profesyonel izolasyon: polyurea, cam elyaf takviyeli sistemler. İzmir, Çeşme, Urla bölgesinde havuz su yalıtımı. Garantili.",
    },
    hero: {
      eyebrow: "Havuz İzolasyon İzmir",
      h1: "İzmir Havuz İzolasyonu ve Su Yalıtımı",
      intro:
        "Yüzme havuzlarında sızıntı; su kaybı, kimyasal dengesizlik ve yapı tahribatına yol açar. Kalıcı, estetik ve kimyasal dirençli sistemlerle sıfır su kaybı.",
    },
    intro: {
      title: "Havuz İzolasyonu Neden Bu Kadar Hassas?",
      paragraphs: [
        "Bir yüzme havuzu, sürekli su teması altında 24/7 çalışan en zorlu izolasyon ortamıdır. Klor, pH değişimleri, UV radyasyon, hidrostatik basınç ve sürtünme — bunların hepsi izolasyon katmanını yıpratır.",
        "İzmir'de Çeşme, Urla, Foça başta olmak üzere villa havuzları, otel havuzları ve site havuzlarında uyguladığımız sistemler bu zorlu koşullara dayanacak şekilde seçiliyor. Polyurea ve cam elyaf takviyeli poliüretan, en sık tercih ettiğimiz iki sistem.",
      ],
    },
    sections: [
      {
        title: "Yeni Havuz mu, Mevcut Havuz Tamiri mi?",
        body: "İki senaryo da farklı yaklaşım gerektirir:",
        list: [
          "Yeni inşaat — beton kabuğu üzerine doğrudan yalıtım sistemi + dekoratif kaplama",
          "Mevcut havuz tamiri — sızıntı tespiti, yüzey hazırlığı, mevcut kaplama sökme veya üstüne uygulama",
          "Köhne havuz yenileme — sökme + yapısal tamir + yeni izolasyon + dekoratif son kat",
        ],
      },
      {
        title: "Polyurea Havuz Kaplama",
        body: "Polyurea, sürekli su teması altında en yüksek performansı veren kaplamalardan biri. Avantajları:",
        list: [
          "Eksiz uygulama — derz yok, sızıntı noktası yok",
          "Hızlı kürlenme — havuz 24 saatte tekrar dolduruluyor",
          "Kimyasal dayanım — klor ve pH değişimine direnç",
          "Esneklik — yapı oturmalarına uyum",
          "UV direnci — yıllık renk koruması",
        ],
      },
      {
        title: "Cam Elyaf Takviyeli Sistem",
        body: "Beton havuzlarda mekanik dayanım önceliğindeyse cam elyaf takviyeli poliüretan kaplama tercih edilir. Çatlak köprüleme yeteneği yüksek; yapı oturma çatlaklarına direnç gösterir.",
      },
      {
        title: "Havuz Sızıntısı Tespiti",
        body: "Havuzunuz su kaybediyorsa, sızıntı kaynağı genellikle göründüğü yer değildir. Tespit yöntemlerimiz:",
        list: [
          "Buharlaşma testi (24 saat referans)",
          "Boya testi — şüpheli noktaya enjeksiyon",
          "Vakum testi — basınç düşümü ölçümü",
          "Görsel inceleme — derz, gider, ışık armatürü detayları",
        ],
      },
    ],
    systems: [
      { name: "Polyurea Sprey", desc: "Eksiz, hızlı kürlenen, kimyasal dirençli — 1. tercih." },
      { name: "Cam Elyaf Takviyeli Poliüretan", desc: "Yüksek mekanik dayanım, çatlak köprüleme." },
      { name: "Sıvı Membran (PMMA tabanlı)", desc: "Detay zenginliği yüksek özel projeler için." },
      { name: "Bitümlü Membran (gizli havuz)", desc: "Toprak altı su deposu / havuz kabuğu için." },
    ],
    districts: ["Çeşme", "Urla", "Foça", "Karşıyaka", "Bornova", "Bayraklı", "Buca", "Gaziemir", "Narlıdere"],
    faq: [
      {
        q: "Çeşme'deki villa havuzumu izolasyon yapabilir misiniz?",
        a: "Evet, Çeşme, Alaçatı, Urla ve Foça'da havuz izolasyon projelerimiz mevcut. Sahil bölgesi havuzlarında tuzlu rüzgâr direnci yüksek sistemleri tercih ediyoruz.",
      },
      {
        q: "Mevcut seramik havuzumu sökmeden kaplayabilir misiniz?",
        a: "Mevcut seramik durumuna göre değişir. Eğer yapışma sağlam, kabarma yoksa, üstüne uygulanabilen polyurea seçeneği vardır. Aksi halde sökme önerilir.",
      },
      {
        q: "Havuz izolasyonu ne kadar sürer?",
        a: "Standart 8x4 villa havuzunda yüzey hazırlığı dahil 5–10 iş günü. Polyurea sistemde uygulama 1 gün, kürlenme 24 saat.",
      },
      {
        q: "Polyurea havuz kaplama renkleri nelerdir?",
        a: "Mavi tonları (açık/orta/koyu deniz mavisi), turkuaz, gri, beyaz ve özel renk kodları mevcut. Müşteri tercihine göre üretilir.",
      },
      {
        q: "Garantili havuz izolasyonu kaç yıl?",
        a: "Polyurea sistemde 8 yıl, cam elyaf takviyeli sistemde 10 yıla kadar yazılı işçilik garantisi sunuyoruz.",
      },
    ],
    relatedServices: ["polyurea-sprey-izmir", "cam-elyaf-poliuretan-izmir", "poliuretan-izolasyon-izmir", "seramik-ustu-izolasyon-izmir"],
    relatedProjects: ["macfit-islak-zemin-membran"],
  },

  "epoksi-zemin-kaplama-izmir": {
    slug: "epoksi-zemin-kaplama-izmir",
    category: "Epoksi Zemin Kaplama",
    primaryKeyword: "epoksi zemin izmir",
    lsiKeywords: [
      "epoksi kaplama izmir", "fabrika zemin epoksi", "depo zemin kaplama",
      "hijyenik zemin", "antistatik epoksi", "self-leveling epoksi",
      "atatürk osb epoksi", "atölye zemin", "epoksi metrekare fiyatı",
    ],
    seo: {
      title: "Epoksi Zemin İzmir | Endüstriyel Kaplama — Sim İzolasyon",
      description:
        "Fabrika, depo, otopark, atölye için epoksi zemin kaplama. İzmir Çiğli, Atatürk OSB'de hızlı uygulama. Hijyenik, dayanıklı, parlak. Ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Epoksi Zemin İzmir",
      h1: "İzmir Epoksi Zemin Kaplama Uygulamaları",
      intro:
        "Fabrika, depo, otopark, atölye, ticari mekânlarınız için sektör lideri epoksi sistemleri. Hijyenik, dayanıklı, kimyasal dirençli — uzun yıllar performans.",
    },
    intro: {
      title: "Epoksi Zemin Nedir?",
      paragraphs: [
        "Epoksi, iki bileşenli bir reçine sistemi olarak beton zemin üzerine uygulandığında; sert, hijyenik, kimyasal dirençli ve estetik bir kaplama oluşturur. Toz tutmaz, kolay temizlenir ve forklift, ağır makine yüküne dayanır.",
        "İzmir Atatürk Organize Sanayi Bölgesi (OSB) başta olmak üzere Çiğli, Aliağa, Kemalpaşa OSB tesislerinde yıllardır epoksi uygulamaları yapıyoruz. Gıda fabrikalarından otomotiv yan sanayi tesislerine kadar farklı sektörlerin ihtiyacına özel sistemler kuruyoruz.",
      ],
    },
    sections: [
      {
        title: "Epoksi Zemin Kaplama Çeşitleri",
        body: "Her sektör ve kullanım için farklı bir epoksi sistemi vardır:",
        list: [
          "Self-leveling epoksi — pürüzsüz, parlak, ofis/showroom için",
          "Antistatik epoksi (ESD) — elektronik üretim, hassas alanlar için",
          "Anti-slip epoksi — ıslak alanlar, mutfak, gıda fabrikası",
          "Renkli kuvars takviyeli — yüksek dayanım, dekoratif",
          "Metalik epoksi — premium görünüm, ticari mekan",
          "Çizgi/şerit epoksi — depo trafik yönlendirme",
        ],
      },
      {
        title: "Hangi Sektörlerde Uyguluyoruz?",
        body: "Epoksi sistemler için ana sektör grupları:",
        list: [
          "Gıda ve içecek üretim tesisleri — HACCP uyumlu hijyenik epoksi",
          "Otomotiv yan sanayi — kimyasal dirençli sistem",
          "İlaç ve kozmetik üretimi — temizlenebilir, sızdırmaz",
          "Depo ve lojistik — forklift dayanımı, hız çizgileri",
          "Otopark — anti-slip, su geçirmez katmanlı",
          "Atölye ve garaj — ekonomik, kolay tamir",
          "Showroom ve ticari — dekoratif, parlak metalik",
        ],
      },
      {
        title: "Epoksi Zemin Uygulama Süreci",
        body: "Sistematik 6 adımlı uygulama:",
        list: [
          "Mevcut zemin analizi ve nem ölçümü",
          "Mekanik temizlik — frezeleme veya zımpara",
          "Çatlak ve kabarma tamirleri",
          "Primer (astar) uygulaması",
          "Ana epoksi katmanı (1 veya 2 kat)",
          "Son kat — koruyucu, parlatıcı veya anti-slip",
        ],
      },
      {
        title: "Epoksi Zemin Fiyatları",
        body: "Maliyeti belirleyen ana faktörler:",
        list: [
          "Alan büyüklüğü (m²) — büyük tesislerde m² fiyatı düşer",
          "Sistem türü — basit ekonomik vs üst kademe metalik",
          "Zemin durumu — onarım gerekiyor mu",
          "Kalınlık — 0.5 mm boya tipi vs 3 mm self-leveling",
          "Renk ve dekoratif tercihler",
        ],
      },
    ],
    systems: [
      { name: "Self-Leveling Epoksi", desc: "1.5–3 mm kalınlık, pürüzsüz, parlak. Showroom ve hassas alanlar." },
      { name: "Quartz/Kuvars Takviyeli", desc: "Yüksek mekanik dayanım, anti-slip varyantları. Ağır sanayi." },
      { name: "Antistatik Epoksi", desc: "ESD korumalı. Elektronik ve hassas üretim." },
      { name: "Boya Tip Epoksi", desc: "Ekonomik, 200–500 mikron. Garaj, atölye." },
      { name: "Metalik Epoksi", desc: "Dekoratif, 3 boyutlu efektli. Ticari mekan." },
    ],
    districts: ["Çiğli (Atatürk OSB)", "Kemalpaşa OSB", "Aliağa", "Bornova", "Bayraklı", "Karşıyaka", "Torbalı", "Menemen"],
    faq: [
      {
        q: "Epoksi zemin metrekare fiyatı 2026 ne kadar?",
        a: "Sistem ve kalınlığa göre geniş bir aralıkta. Boya tipi ekonomik, self-leveling orta kademe, kuvars takviyeli ve metalik üst kademedir. Net fiyat için keşif sonrası kalem kalem teklif veriyoruz.",
      },
      {
        q: "Üretim durdurmadan epoksi yapılabilir mi?",
        a: "Evet — alan bölümleme yöntemiyle. Vardiya planlamasıyla üretim durmadan, alanları sırayla kaplıyoruz. Hızlı kürlenen sistemlerle 24 saatte trafiğe açılır.",
      },
      {
        q: "Epoksi zemin kayar mı?",
        a: "Standart self-leveling parlak epoksi su altında kayganlık yapabilir. Anti-slip katkılı sistemlerimizle ıslak alanlarda bile güvenli kaplama mümkün.",
      },
      {
        q: "Mevcut beton zeminim çok kötü, epoksi tutar mı?",
        a: "Yüzey ön hazırlığı doğru yapılırsa tutar. Frezeleme, çatlak tamiri, gerekirse onarım harcı uyguluyoruz. Aşırı tahribatlı zeminlerde önce yapısal tamir gerekebilir.",
      },
      {
        q: "Epoksi zemin kaç yıl dayanır?",
        a: "Sistem ve kullanım yoğunluğuna göre 8–15 yıl. Self-leveling normal kullanımda 10+ yıl, kuvars takviyeli ağır sanayide 12–15 yıl.",
      },
      {
        q: "Atatürk OSB'de fabrikam var, hızlı keşif mümkün mü?",
        a: "Evet — Atatürk OSB'de aktif şantiyelerimiz var, 24–48 saat içinde keşif planı yapıyoruz.",
      },
    ],
    relatedServices: ["endustriyel-zemin-kaplama-izmir", "polyurea-sprey-izmir", "poliuretan-izolasyon-izmir", "otopark-izolasyon-izmir"],
    relatedProjects: ["macfit-islak-zemin-membran"],
  },

  "polyurea-sprey-izmir": {
    slug: "polyurea-sprey-izmir",
    category: "Polyurea Sprey",
    primaryKeyword: "polyurea izmir",
    lsiKeywords: [
      "polyurea sprey", "polyurea kaplama izmir", "hibrit polyurea", "polyurea fiyat",
      "polyurea otopark", "polyurea havuz", "polyurea uygulayıcı", "polyurea sertifikalı uygulama",
    ],
    seo: {
      title: "Polyurea Sprey Kaplama İzmir — Sim İzolasyon",
      description:
        "Hızlı kürlenen polyurea sprey kaplama: havuz, otopark, çatı, teras için yüksek dayanım. İzmir'de sertifikalı uygulayıcı ekip. Ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Polyurea Sprey İzmir",
      h1: "İzmir Polyurea Sprey Kaplama ve İzolasyon",
      intro:
        "Saniyeler içinde kürlenen, eksiz, esnek ve UV dirençli polyurea sprey sistemleri. Havuz, otopark, çatı ve endüstriyel zeminler için 1. tercih.",
    },
    intro: {
      title: "Polyurea Sprey Nedir?",
      paragraphs: [
        "Polyurea, iki bileşenli bir polimer sistemi olarak özel sprey ekipmanlarıyla yüzeye uygulanır. 5–15 saniye içinde kürlenmeye başlar, 24 saatte tam mukavemete ulaşır. Saniyeler içinde sertleştiği için detaylara mükemmel uyum sağlar.",
        "Sertifikalı uygulayıcı ekibimiz İzmir'de polyurea sprey sistemleri konusunda 8+ yıllık tecrübeye sahip. Doğru ekipman, doğru çevre koşulu ve doğru malzeme — üçü bir aradayken polyurea endüstrinin en güçlü kaplamasıdır.",
      ],
    },
    sections: [
      {
        title: "Polyurea Avantajları",
        body: "Diğer sistemlere göre polyurea'yı öne çıkaran özellikler:",
        list: [
          "Hızlı kürlenme — 24 saat içinde tam mukavemet",
          "Eksiz uygulama — derz yok, sızıntı noktası minimum",
          "Yüksek elastikiyet — %500'e kadar uzama",
          "UV dayanımı — yıllık renk koruması",
          "Kimyasal direnç — klor, asit, alkali",
          "Aşınma direnci — abraziv yüzeyde uzun ömür",
          "Geniş uygulama aralığı — yatay/dikey/karmaşık geometri",
        ],
      },
      {
        title: "Polyurea Uygulama Alanları",
        body: "Polyurea'nın en sık kullanıldığı projeler:",
        list: [
          "Yüzme havuzu kaplama (kimyasal dirençli)",
          "Otopark zemini (trafik yükü)",
          "Çatı izolasyonu (UV ve detay zenginliği)",
          "Soğuk hava deposu zemini",
          "Su deposu iç kaplama",
          "Endüstriyel zemin (kimyasal sektör)",
          "Tank, depolama kabı iç kaplama",
        ],
      },
      {
        title: "Polyurea Sertifikalı Uygulama Önemi",
        body: "Polyurea, ekipman ve yetkinlik gerektiren bir sistem. Sertifikasız uygulamalarda gözlemlenen sorunlar:",
        list: [
          "Yanlış sıcaklık — kürlenmeme veya çıkıntılı yüzey",
          "Yetersiz primer — yapışma kaybı",
          "Yanlış kalınlık — esneklik kaybı",
          "Detay noktaları atlama — sızıntı",
        ],
      },
      {
        title: "Polyurea ve Hibrit Polyurea Farkı",
        body: "Saf polyurea daha hızlı kürlenir ve daha pahalıdır. Hibrit polyurea (polyurea + poliüretan karışımı) maliyeti düşürür ama kürlenme süresini uzatır. Projeye göre doğru seçim önemli.",
      },
    ],
    systems: [
      { name: "Saf Polyurea", desc: "5–10 saniye kürlenme, premium kalite, yüksek hız." },
      { name: "Hibrit Polyurea", desc: "Daha ekonomik, 30 saniye kürlenme, geniş uygulama." },
      { name: "Polyurea + Aliphatic Top Coat", desc: "UV stabil, dış mekan için renk koruması." },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Polyurea sprey fiyatı m² 2026?",
        a: "Saf polyurea ve hibrit varyantı fiyat farklı. Yüzey, kalınlık ve detay sayısı belirleyici. Ücretsiz keşif sonrası kalem kalem teklif sunuyoruz.",
      },
      {
        q: "Polyurea üzerine boya yapılabilir mi?",
        a: "Evet — özel poliüretan boyalarla üzerine renk uygulaması yapılabilir. UV koruması için aliphatic poliüretan üst kat tercih edilir.",
      },
      {
        q: "Polyurea hangi sıcaklıkta uygulanır?",
        a: "Genelde +5°C ile +35°C arası ideal. Aşırı sıcak veya çok soğukta kürlenme problemleri olur. Mevsim planlaması önemli.",
      },
      {
        q: "Polyurea su altında dayanır mı?",
        a: "Evet — havuz, su deposu gibi sürekli su teması altında dayanır. Kimyasal direnç ve elastikiyet bu nedenle havuzlarda 1. tercihtir.",
      },
      {
        q: "Polyurea üzerinde yürünür mü?",
        a: "Anti-slip katkılı versiyonu mevcut. Standart polyurea ıslakken kaygan olabilir.",
      },
    ],
    relatedServices: ["havuz-izolasyon-izmir", "otopark-izolasyon-izmir", "cati-izolasyon-izmir", "endustriyel-zemin-kaplama-izmir"],
    relatedProjects: ["perde-beton-xpx-drenaj"],
  },

  "endustriyel-zemin-kaplama-izmir": {
    slug: "endustriyel-zemin-kaplama-izmir",
    category: "Endüstriyel Zemin Kaplama",
    primaryKeyword: "endüstriyel zemin kaplama izmir",
    lsiKeywords: [
      "fabrika zemin kaplama", "endüstriyel epoksi", "depo zemin sistemi",
      "üretim tesisi zemin", "atatürk osb zemin", "kemalpaşa osb",
      "ağır yük zemin kaplama", "kimyasal dirençli zemin",
    ],
    seo: {
      title: "Endüstriyel Zemin Kaplama İzmir — Sim İzolasyon",
      description:
        "Fabrika, üretim tesisi, depo için yüksek performanslı endüstriyel zemin sistemleri. Epoksi, poliüretan, polyurea. İzmir OSB tecrübesi.",
    },
    hero: {
      eyebrow: "Endüstriyel Zemin İzmir",
      h1: "İzmir Endüstriyel Zemin Kaplama Sistemleri",
      intro:
        "Üretim tesisleri, depo ve sanayi tesisleri için kimyasal dirençli, yüksek mekanik mukavemetli zemin çözümleri. OSB'de aktif şantiye tecrübesi.",
    },
    intro: {
      title: "Endüstriyel Zemin İhtiyacınızı Birlikte Tasarlayalım",
      paragraphs: [
        "Endüstriyel zemin, üretim hattınızın görünmeyen ama her gün size hizmet eden temelidir. Yanlış sistem; aşınma, çatlama, hijyen kaybı, kimyasal sızıntı ve duruş süreleri olarak geri döner.",
        "Sim İzolasyon olarak İzmir'in büyük sanayi bölgelerinde (Atatürk OSB, Kemalpaşa OSB, Aliağa, Torbalı) onlarca proje tamamladık. Sektörünüze, makine yükünüze ve hijyen gereksinimlerinize göre üst kademe sistem öneriyoruz.",
      ],
    },
    sections: [
      {
        title: "Sektörlere Göre Sistem Seçimi",
        body: "Aynı epoksi her tesise uymaz. Sektör bazlı önerilerimiz:",
        list: [
          "Gıda fabrikası — HACCP uyumlu, hijyenik, anti-bakteriyel kaplama",
          "Kimya ve ilaç — yüksek kimyasal direnç, sızdırmaz",
          "Otomotiv — yağ ve solvent dayanımı, ağır yük",
          "Elektronik — antistatik (ESD), toz tutmaz",
          "Lojistik depo — forklift dayanımı, çizgi yönlendirme",
          "Soğuk hava deposu — düşük sıcaklık dayanımı, polyurea tercih",
          "Tekstil — ekonomik epoksi, basit bakım",
        ],
      },
      {
        title: "Yük ve Trafik Analizi",
        body: "Doğru sistem için trafik analizi şart:",
        list: [
          "Yaya trafiği — boya tip yeterli",
          "Hafif palet/araba — self-leveling epoksi",
          "Forklift (1–3 ton) — kuvars takviyeli sistem",
          "Ağır forklift, makine (5+ ton) — polyurea veya yüksek mukavemetli epoksi",
          "Frenlemeli/dönüşlü trafik — anti-slip ek katman",
        ],
      },
      {
        title: "Hijyen ve Temizlenebilirlik",
        body: "Gıda, ilaç, kozmetik tesislerinde hijyen kritik:",
        list: [
          "Pürüzsüz, eksiz yüzey — bakteri saklanmaz",
          "Sürtmeli temizlik dayanımı — günlük yıkama",
          "Klor ve dezenfektan direnci",
          "Köşe yumuşatma (cove) — duvar/zemin geçişi sızdırmaz",
        ],
      },
      {
        title: "ROI ve Uzun Vadeli Maliyet",
        body: "Ucuz sistem, sık tamir = uzun vadeli yüksek maliyet. Doğru sistem seçiminde dikkat edilecekler:",
        list: [
          "Beklenen ömür (5 yıl mı, 12 yıl mı)",
          "Bakım maliyeti — yıllık temizlik, küçük tamir",
          "Üretim duruş süresi — hızlı kürlenen sistemler",
          "Garanti süresi ve kapsamı",
        ],
      },
    ],
    systems: [
      { name: "Endüstriyel Epoksi (3–5 mm)", desc: "Self-leveling veya kuvars takviyeli. En yaygın." },
      { name: "Poliüretan-Çimento Sistemi", desc: "Termal şok ve nem direnci. Gıda fabrikası 1. tercihi." },
      { name: "Polyurea Endüstriyel", desc: "Hızlı kürlenme, hızlı üretime dönüş." },
      { name: "Antistatik (ESD) Epoksi", desc: "Elektronik üretim, hassas alanlar." },
    ],
    districts: ["Atatürk OSB", "Kemalpaşa OSB", "Aliağa", "Çiğli", "Torbalı", "Menemen", "Bornova"],
    faq: [
      {
        q: "Üretim durdurmadan zemin kaplama yapabilir misiniz?",
        a: "Evet — alan bölümleme + vardiya planlaması ile üretim devam ederken çalışıyoruz. Hızlı kürlenen polyurea ve poliüretan sistemlerle 24 saatte trafiğe açılır.",
      },
      {
        q: "Atatürk OSB fabrikam için ne kadar sürede teklif alırım?",
        a: "Atatürk OSB'de aktif olduğumuz için 24–48 saat içinde keşif planlaması, keşif sonrası 24 saatte detaylı teklif.",
      },
      {
        q: "Mevcut zeminimi sökmek zorunda mıyım?",
        a: "Çoğu durumda hayır — frezeleme ve onarımla mevcut zemin üzerine uygulama mümkün. Aşırı tahribat durumunda sökme önerilebilir.",
      },
      {
        q: "Hangi garantiyi sunuyorsunuz?",
        a: "Sistem türü ve tesise göre 5–10 yıl yazılı işçilik garantisi. Sözleşmede kapsam net belirtilir.",
      },
      {
        q: "Soğuk hava deposunda epoksi olur mu?",
        a: "Soğuk hava depolarında polyurea veya poliüretan-çimento sistemleri tercih edilir. Düşük sıcaklıkta epoksi gevrekleşebilir.",
      },
    ],
    relatedServices: ["epoksi-zemin-kaplama-izmir", "polyurea-sprey-izmir", "poliuretan-izolasyon-izmir", "otopark-izolasyon-izmir"],
    relatedProjects: ["macfit-islak-zemin-membran", "perde-beton-xpx-drenaj"],
  },

  "poliuretan-izolasyon-izmir": {
    slug: "poliuretan-izolasyon-izmir",
    category: "Poliüretan İzolasyon",
    primaryKeyword: "poliüretan izolasyon izmir",
    lsiKeywords: ["poliüretan kaplama", "pu izolasyon", "poliüretan sıvı membran", "esnek izolasyon", "uv dirençli kaplama"],
    seo: {
      title: "Poliüretan İzolasyon İzmir — Sim İzolasyon",
      description:
        "Esnek, su geçirmez, UV dayanımlı poliüretan yalıtım. Çatı, teras, otopark uygulamaları. İzmir'de profesyonel uygulayıcı ekip.",
    },
    hero: {
      eyebrow: "Poliüretan İzolasyon İzmir",
      h1: "İzmir Poliüretan İzolasyon ve Yalıtım Uygulamaları",
      intro:
        "Esnek, su geçirmez, UV dayanımlı poliüretan sıvı membran sistemleri. Detay zenginliği yüksek projelerde 1. tercih.",
    },
    intro: {
      title: "Poliüretan İzolasyonun Yeri",
      paragraphs: [
        "Poliüretan; sıvı halde uygulanan, kürlenince eksiz, esnek bir kaplama oluşturan bir sistemdir. Polyurea kadar hızlı değil ama daha ekonomik ve detay zenginliği yüksek projeler için ideal.",
        "İzmir'de teras, gizli çatı, balkon ve detay yoğun yapılarda poliüretan sıvı membran sistemlerini sıklıkla tercih ediyoruz.",
      ],
    },
    sections: [
      {
        title: "Poliüretan Sıvı Membran Avantajları",
        body: "",
        list: [
          "Eksiz uygulama — derz problemi yok",
          "Detay uyumu — köşe, gider, parapet noktalarına nüfuz eder",
          "Esneklik — yapı oturmalarına uyum",
          "UV dirençli üst kat ile renk koruması",
          "Hafif — yapı yüküne ek getirmez",
        ],
      },
      {
        title: "Uygulama Alanları",
        body: "",
        list: [
          "Teras ve balkon",
          "Gizli çatı (yürüme yolu)",
          "İç ve dış mekan ıslak alan",
          "Otopark döşeme",
          "Çiçeklik ve havuz çevresi",
        ],
      },
      {
        title: "Poliüretan vs Polyurea Karşılaştırması",
        body: "",
        list: [
          "Kürlenme süresi: poliüretan saatler, polyurea saniyeler",
          "Uygulama hızı: polyurea daha hızlı",
          "Maliyet: poliüretan daha ekonomik",
          "Detay uyumu: poliüretan daha kolay düzeltilebilir",
          "Mekanik dayanım: polyurea daha yüksek",
        ],
      },
    ],
    systems: [
      { name: "Tek Bileşenli Poliüretan", desc: "Kullanımı kolay, ekonomik." },
      { name: "Çift Bileşenli Poliüretan", desc: "Yüksek dayanım, profesyonel proje." },
      { name: "PU Sistem + Aliphatic Top", desc: "UV koruması için üst kat aliphatic." },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Poliüretan kaç günde kürlenir?",
        a: "Tam kürlenme 5–7 gün. Ancak yağmur ve mekanik temas için 24 saat yeterli.",
      },
      {
        q: "Poliüretan üzerinde yürünür mü?",
        a: "Evet — anti-slip varyantları mevcut. Standart yüzey ıslakken kaygan olabilir.",
      },
      {
        q: "Poliüretan kaç yıl dayanır?",
        a: "Doğru uygulama ve UV korumasıyla 8–10 yıl. Periyodik bakım ile daha uzun.",
      },
    ],
    relatedServices: ["polyurea-sprey-izmir", "teras-izolasyon-izmir", "cati-izolasyon-izmir", "cam-elyaf-poliuretan-izmir"],
    relatedProjects: ["gizli-cati-yuruyus-yolu"],
  },

  "sandvic-panel-izolasyon-izmir": {
    slug: "sandvic-panel-izolasyon-izmir",
    category: "Sandviç Panel İzolasyon",
    primaryKeyword: "sandviç panel izolasyon izmir",
    lsiKeywords: ["sandviç panel çatı", "panel derz izolasyon", "panel oluk yalıtım", "fabrika sandviç panel", "panel ek izolasyon"],
    seo: {
      title: "Sandviç Panel İzolasyon İzmir — Sim İzolasyon",
      description:
        "Sandviç panel çatı ve cephe izolasyon uygulamaları. Derz, ek, oluk gider izolasyonu. İzmir Atatürk OSB ve sanayi tesisleri için.",
    },
    hero: {
      eyebrow: "Sandviç Panel İzmir",
      h1: "İzmir Sandviç Panel İzolasyonu ve Yalıtımı",
      intro:
        "Sanayi tesislerinde sandviç panel çatılarda derz, ek noktası, civata ve oluk gider izolasyonu — sızıntısız panel çatı.",
    },
    intro: {
      title: "Sandviç Panel Çatılarda Sorun Noktaları",
      paragraphs: [
        "Sandviç panel çatılar, sanayi tesislerinde hızlı kurulum nedeniyle yaygın. Ancak panel ek yerleri, civata noktaları ve oluk gider birleşimleri zaman içinde sızıntı yapar.",
        "Sertifikalı esnek bant ve sıvı membran sistemleriyle panel çatılarda sızıntısız yalıtım yapıyoruz.",
      ],
    },
    sections: [
      {
        title: "Panel Sızıntısının Tipik Nedenleri",
        body: "",
        list: [
          "Panel ek bantlarının zamanla esnekliğini kaybetmesi",
          "Civata noktalarında contaların yıpranması",
          "Oluk gider birleşim detaylarının yetersizliği",
          "Termal genleşme — yaz/kış genleşme/büzülme",
          "Yetersiz eğim — su göllenmesi",
        ],
      },
      {
        title: "Uyguladığımız Çözümler",
        body: "",
        list: [
          "Esnek panel ek bandı yenileme",
          "Civata noktalarına özel sıvı kauçuk uygulaması",
          "Oluk gider köşelerinde bütünleşik membran",
          "Tüm yüzeyde polyurea koruyucu kaplama (ileri seviye)",
          "Termal kamera ile sızıntı tespiti",
        ],
      },
    ],
    systems: [
      { name: "Sandviç Panel Ek Bandı", desc: "Esnek, butil esaslı, UV dirençli." },
      { name: "Sıvı Kauçuk Kaplama", desc: "Detay noktalarında elastik koruma." },
      { name: "Polyurea Sprey (tüm yüzey)", desc: "Kapsamlı koruma, 10+ yıl." },
    ],
    districts: ["Atatürk OSB", "Kemalpaşa OSB", "Aliağa", "Torbalı", "Menemen", "Çiğli"],
    faq: [
      {
        q: "Üretim durdurmadan sandviç panel tamiri olur mu?",
        a: "Evet — yağmursuz pencerelerde planlanmış tamir mümkün. Vardiya dışı saatlerde çalışıyoruz.",
      },
      {
        q: "Sadece sızıntı yapan noktayı mı yoksa tüm çatıyı mı kaplamalıyım?",
        a: "Yaş ve yıpranma seviyesine bağlı. Birçok ek/civatada sorun varsa, tüm yüzey polyurea ekonomik. Tek nokta sorunu için bant tamiri yeterli.",
      },
    ],
    relatedServices: ["cati-izolasyon-izmir", "polyurea-sprey-izmir", "endustriyel-zemin-kaplama-izmir"],
    relatedProjects: ["sandvic-panel-su-oluk"],
  },

  "cam-elyaf-poliuretan-izmir": {
    slug: "cam-elyaf-poliuretan-izmir",
    category: "Cam Elyaf Poliüretan",
    primaryKeyword: "cam elyaf poliüretan izmir",
    lsiKeywords: ["cam elyaf takviyeli kaplama", "frp izolasyon", "fiber takviyeli", "cam elyaf havuz", "yüksek mukavemet kaplama"],
    seo: {
      title: "Cam Elyaf Poliüretan Kaplama İzmir — Sim İzolasyon",
      description:
        "Cam elyaf takviyeli poliüretan kaplama: yüksek mukavemet, çatlak köprüleme. İzmir'de havuz, çatı, teras uygulamaları.",
    },
    hero: {
      eyebrow: "Cam Elyaf Poliüretan İzmir",
      h1: "İzmir Cam Elyaf Poliüretan Kaplama Uygulamaları",
      intro:
        "Cam elyaf takviyeli poliüretan; yüksek mekanik mukavemet ve çatlak köprüleme yeteneği gerektiren projeler için.",
    },
    intro: {
      title: "Cam Elyaf Takviye Neyi Değiştirir?",
      paragraphs: [
        "Cam elyaf, poliüretan kaplama içine sandviçlenerek ürünün mekanik dayanımını ve çatlak köprüleme özelliğini katlıyor. Yapı oturma çatlaklarına direnç gösterir, eski beton yapılarda en güvenli izolasyondur.",
      ],
    },
    sections: [
      {
        title: "Sistem Yapısı",
        body: "",
        list: [
          "Primer (yapışma astar)",
          "1. kat poliüretan",
          "Cam elyaf keçesi serme",
          "2. kat poliüretan emdirme",
          "Koruyucu son kat",
        ],
      },
      {
        title: "Tercih Edilen Projeler",
        body: "",
        list: [
          "Eski beton yapılar — çatlak yoğun zeminler",
          "Havuz iç kaplama (yapı oturma var)",
          "Su deposu",
          "Endüstriyel ağır yük zeminler",
          "Köprü ve viyadük üst kaplama",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Cam elyaf takviyeli sistem normal poliüretan'dan ne kadar pahalı?",
        a: "Sistemde takviye katmanı olduğu için %20–40 daha pahalı. Ancak ömür ve performans çok daha yüksek.",
      },
      {
        q: "Eski havuzumda çatlaklar var, cam elyaf takviyeli mi yapayım?",
        a: "Evet — çatlak köprüleme yeteneği nedeniyle bu durumda en güvenli sistem.",
      },
    ],
    relatedServices: ["cam-elyaf-izolasyon-izmir", "havuz-izolasyon-izmir", "poliuretan-izolasyon-izmir", "beton-ustu-izolasyon-izmir"],
    relatedProjects: ["beton-ustu-cam-elyaf"],
  },

  "cam-elyaf-izolasyon-izmir": {
    slug: "cam-elyaf-izolasyon-izmir",
    category: "Cam Elyaf İzolasyon",
    primaryKeyword: "cam elyaf izolasyon izmir",
    lsiKeywords: ["cam elyaf su yalıtımı", "fiber izolasyon", "cam elyaf çatı", "frp kaplama"],
    seo: {
      title: "Cam Elyaf İzolasyon İzmir | Su Yalıtımı — Sim İzolasyon",
      description:
        "Cam elyaf takviyeli su yalıtım sistemleri. Çatı, teras, havuz için yüksek mekanik dayanım, esneklik, uzun ömür.",
    },
    hero: {
      eyebrow: "Cam Elyaf İzolasyon İzmir",
      h1: "İzmir Cam Elyaf İzolasyon Sistemi",
      intro:
        "Yüksek mukavemet, esnek, çatlak köprüleme yeteneği yüksek cam elyaf takviyeli izolasyon — uzun ömürlü su yalıtım.",
    },
    intro: {
      title: "Cam Elyaf İzolasyonun Üstünlüğü",
      paragraphs: [
        "Cam elyaf, izolasyon malzemesinin içine bir 'iskelet' gibi yerleştirilen takviye katmanıdır. Mekanik dayanımı, esnekliği ve çatlak köprüleme özelliğini büyük oranda artırır. Eski yapı su yalıtımında ve havuz uygulamalarında en güvenli seçeneklerden biridir.",
      ],
    },
    sections: [
      {
        title: "Cam Elyaf İzolasyon Hangi Projelerde Kullanılır?",
        body: "",
        list: [
          "Eski beton yapı — çatlak yoğun yüzey",
          "Havuz (yapı oturma riski)",
          "Endüstriyel zemin (ağır yük)",
          "Köprü, viyadük",
          "Tank ve depolama kabı",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Cam elyaf izolasyonu normal membrana göre ne kadar dayanıklı?",
        a: "Mekanik dayanım %200–300 daha yüksek. Çatlak köprüleme avantajıyla ömür 12–15 yıla uzar.",
      },
    ],
    relatedServices: ["cam-elyaf-poliuretan-izmir", "beton-ustu-izolasyon-izmir", "havuz-izolasyon-izmir", "poliuretan-izolasyon-izmir"],
    relatedProjects: ["beton-ustu-cam-elyaf"],
  },

  "beton-ustu-izolasyon-izmir": {
    slug: "beton-ustu-izolasyon-izmir",
    category: "Beton Üstü İzolasyon",
    primaryKeyword: "beton üstü izolasyon izmir",
    lsiKeywords: ["beton üstü su yalıtımı", "eski bina izolasyon", "beton kaplama izolasyon", "beton üstü membran"],
    seo: {
      title: "Beton Üstü İzolasyon İzmir — Sim İzolasyon",
      description:
        "Mevcut beton yüzey üzerine sıvı membran ve cam elyaf takviyeli kaplama. İzmir'de eski yapı su yalıtım çözümleri. Ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Beton Üstü İzolasyon İzmir",
      h1: "İzmir Beton Üstü İzolasyon ve Su Yalıtımı",
      intro:
        "Eski beton yüzey üzerine doğrudan uygulanan sıvı membran sistemleri. Söküm gerekmez, hızlı uygulama.",
    },
    intro: {
      title: "Eski Beton Yapıyı Kurtarın",
      paragraphs: [
        "Yıllar içinde yüzeyi yıpranmış, çatlak almaya başlamış beton; doğru sistemle ilk günkü performansına döndürülebilir. Kritik faktör; yüzey hazırlığı, primer ve doğru takviyeli sıvı membran seçimi.",
      ],
    },
    sections: [
      {
        title: "Uygulama Adımları",
        body: "",
        list: [
          "Yüzey temizliği (mekanik veya su jeti)",
          "Çatlak ve kabarma tamiri",
          "Primer (yapışma astar)",
          "1. kat sıvı membran",
          "Cam elyaf keçesi takviye (seçenek)",
          "2. kat sıvı membran",
          "Koruyucu son kat",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Eski betonum çok kötü, yine de izolasyon yaparsanız mı?",
        a: "Yapı sağlığı yeterli ise evet — yüzey hazırlığı ve onarımdan sonra cam elyaf takviyeli sistem öneririz. Aşırı tahribat varsa önce yapısal değerlendirme.",
      },
    ],
    relatedServices: ["cam-elyaf-izolasyon-izmir", "cam-elyaf-poliuretan-izmir", "teras-izolasyon-izmir", "cati-izolasyon-izmir"],
    relatedProjects: ["beton-ustu-cam-elyaf"],
  },

  "seramik-ustu-izolasyon-izmir": {
    slug: "seramik-ustu-izolasyon-izmir",
    category: "Seramik Üstü İzolasyon",
    primaryKeyword: "seramik üstü izolasyon izmir",
    lsiKeywords: ["seramik üstü yalıtım", "seramik sökmeden izolasyon", "balkon izolasyon", "banyo seramik üstü", "teras seramik üstü"],
    seo: {
      title: "Seramik Üstü İzolasyon İzmir — Sim İzolasyon",
      description:
        "Mevcut seramik kaplamayı sökmeden uygulanan su yalıtım sistemi. Hızlı, az kesintili. İzmir'de banyo, balkon, teras seramik üstü izolasyon.",
    },
    hero: {
      eyebrow: "Seramik Üstü İzolasyon İzmir",
      h1: "Seramik Üstü Su Yalıtımı — İzmir",
      intro:
        "Mevcut seramik kaplamanızı sökmeden uygulanan transparan ve renkli sistem seçenekleriyle hızlı, ekonomik su yalıtım çözümü.",
    },
    intro: {
      title: "Söküm Yapmadan Su Yalıtımı Mümkün mü?",
      paragraphs: [
        "Evet — özel hazırlanmış primer ve sıvı membran sistemleriyle mevcut seramik üzerine uygulanabilen sistemler mevcut. En büyük avantajı: söküm masrafı yok, mekan kullanımı kesintisiz, hızlı teslim.",
        "Banyo, balkon, teras, mutfak gibi ıslak alanlarda mükemmel sonuç. Hatta üstüne yeni seramik bile yapılabilir.",
      ],
    },
    sections: [
      {
        title: "Sistemin Avantajları",
        body: "",
        list: [
          "Söküm yok — kullanım kesintisi minimum (1–3 gün)",
          "Hafif — yapı yüküne ek getirmez",
          "Esnek — derzlerde çatlamaz",
          "Üzerine seramik veya başka kaplama yapılabilir",
          "Ekonomik — söküm + yeni seramik maliyetinden çok ucuz",
        ],
      },
      {
        title: "Hangi Durumda Söküm Gerekir?",
        body: "",
        list: [
          "Mevcut seramik kabarmış, içine su girmiş",
          "Altta zayıf yapışma var",
          "Çok eski, kırık, dökük seramik",
          "Yapısal çatlak görünüyor",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Seramik üstüne yapılan izolasyon kaç yıl dayanır?",
        a: "Doğru uygulamayla 8–12 yıl. Mevcut seramiğin durumu da etkili.",
      },
      {
        q: "Seramik üstüne uyguladığınız malzeme şeffaf mı?",
        a: "Şeffaf ve renkli seçenekler mevcut. Genelde renkli tercih edilir (gri, beyaz, kahve).",
      },
      {
        q: "Üstüne tekrar seramik yapılabilir mi?",
        a: "Evet — sistem üzerine yeni seramik yapıştırılabilir. Yapısal mukavemet korunur.",
      },
    ],
    relatedServices: ["islak-zemin-izolasyon-izmir", "teras-izolasyon-izmir", "beton-ustu-izolasyon-izmir"],
    relatedProjects: ["seramik-uzeri-yalitim"],
  },

  "islak-zemin-izolasyon-izmir": {
    slug: "islak-zemin-izolasyon-izmir",
    category: "Islak Zemin İzolasyon",
    primaryKeyword: "ıslak zemin izolasyon izmir",
    lsiKeywords: ["banyo izolasyon", "duş izolasyon", "ıslak hacim yalıtım", "spor salonu zemin", "tesis ıslak zemin"],
    seo: {
      title: "Islak Zemin İzolasyon İzmir — Sim İzolasyon",
      description:
        "Banyo, mutfak, duş ve tesis ıslak hacimlerinde tam sızdırmaz membran sistemleri. İzmir'de spor salonu, otel, konut uygulamaları.",
    },
    hero: {
      eyebrow: "Islak Zemin İzolasyon İzmir",
      h1: "İzmir Islak Zemin İzolasyon Membran Uygulaması",
      intro:
        "Banyo, mutfak, duş, spor salonu, otel ıslak hacimlerinde sürekli su teması altında dayanıklı, hijyenik membran sistemleri.",
    },
    intro: {
      title: "Islak Zemin Neden Hassas?",
      paragraphs: [
        "Islak hacimlerde su sürekli teması, derz hareketleri, temizlik kimyasalları ve ısı değişimleri sürekli izolasyona yüklenir. Yetersiz izolasyon = alttaki dairede sızıntı, küf, küflenme.",
        "MACFit gibi spor tesislerinden konut banyolarına kadar; sertifikalı, hijyenik membran sistemleriyle kalıcı çözüm sunuyoruz.",
      ],
    },
    sections: [
      {
        title: "Uygulama Alanları",
        body: "",
        list: [
          "Banyo ve duş alanı",
          "Mutfak zemini",
          "Spor salonu duş ve soyunma",
          "Otel banyo, sauna, hamam",
          "Hastane ıslak alanları",
          "Tesis genel ıslak hacimler",
        ],
      },
      {
        title: "Sistem Detayı",
        body: "",
        list: [
          "Yüzey temizliği ve onarım",
          "Köşe yumuşatma (cove) — duvar/zemin geçişi",
          "Primer",
          "Çift kat esnek membran",
          "Detay bantlama (gider, köşe)",
          "Üzerine seramik veya direkt kullanım",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Banyo izolasyonu kaç günde biter?",
        a: "5–8 m² standart banyoda 1–2 iş günü. Üzerine seramik dahil 3–5 gün.",
      },
      {
        q: "Spor salonu duş alanında özel sistem mi gerekir?",
        a: "Evet — yoğun trafik ve sürekli kullanım için yüksek dayanımlı, anti-bakteriyel sistem öneriyoruz.",
      },
    ],
    relatedServices: ["seramik-ustu-izolasyon-izmir", "teras-izolasyon-izmir", "beton-ustu-izolasyon-izmir"],
    relatedProjects: ["macfit-islak-zemin-membran"],
  },

  "ic-cephe-dilatasyon-izmir": {
    slug: "ic-cephe-dilatasyon-izmir",
    category: "İç Cephe Dilatasyon",
    primaryKeyword: "iç cephe dilatasyon izmir",
    lsiKeywords: ["dilatasyon yalıtımı", "bina iç dilatasyon", "dilatasyon kapama", "estetik dilatasyon"],
    seo: {
      title: "İç Cephe Dilatasyon İzmir — Sim İzolasyon",
      description:
        "Bina iç cephelerinde estetik ve sızdırmaz dilatasyon yalıtım çözümleri. Apartman, plaza, hastane projeleri. İzmir genelinde.",
    },
    hero: {
      eyebrow: "İç Cephe Dilatasyon İzmir",
      h1: "İzmir İç Cephe Dilatasyon Yalıtım Uygulaması",
      intro:
        "Bina ek yerlerinde su, hava ve ses geçişini engelleyen estetik dilatasyon kapama sistemleri.",
    },
    intro: {
      title: "Dilatasyon Nedir, Neden Gerekli?",
      paragraphs: [
        "Dilatasyon; binanın termal ve sismik hareketlerine izin veren yapısal ek yerleridir. Bu noktalar hareketli olduğu için klasik sıva veya kaplamayla kapatılamaz; özel esnek profil ve sızdırmaz sistemler gerekir.",
      ],
    },
    sections: [
      {
        title: "Uyguladığımız Sistemler",
        body: "",
        list: [
          "Esnek dilatasyon profili (alüminyum + EPDM kauçuk)",
          "Sıvı esnek dolgu (PU bazlı)",
          "Estetik kapama (renkli, ahşap görünümlü vs)",
          "Ses ve termal yalıtım dolgusu",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Dilatasyon ne zaman değişir?",
        a: "10–15 yıl içinde kullanım yoğunluğuna göre. Çatlak, su sızıntısı veya hareket görüldüğünde.",
      },
    ],
    relatedServices: ["dis-cephe-dilatasyon-izmir", "teras-izolasyon-izmir", "cati-izolasyon-izmir"],
    relatedProjects: [],
  },

  "dis-cephe-dilatasyon-izmir": {
    slug: "dis-cephe-dilatasyon-izmir",
    category: "Dış Cephe Dilatasyon",
    primaryKeyword: "dış cephe dilatasyon izmir",
    lsiKeywords: ["bina dış dilatasyon", "dış cephe yalıtım", "rüzgar yalıtımı", "dış cephe ek yeri"],
    seo: {
      title: "Dış Cephe Dilatasyon İzmir — Sim İzolasyon",
      description:
        "Hava şartlarına dayanıklı dış cephe dilatasyon yalıtımı. Bina ek yerlerinde su, rüzgâr, ısı sızdırmaz çözümler. İzmir uzman uygulama.",
    },
    hero: {
      eyebrow: "Dış Cephe Dilatasyon İzmir",
      h1: "İzmir Dış Cephe Dilatasyon İzolasyonu",
      intro:
        "Hava şartlarına, UV radyasyona ve termal harekete dayanıklı dış cephe dilatasyon sistemleri.",
    },
    intro: {
      title: "Dış Cephe Dilatasyonu Neden Kritik?",
      paragraphs: [
        "Dış cephede dilatasyon; binayı tüm yıl havayla, yağmurla, rüzgârla karşı karşıya bırakan en kritik noktadır. Yetersiz dilatasyon = iç mekânda nem, ısı kaybı, ses sızıntısı.",
      ],
    },
    sections: [
      {
        title: "Sistem Detayı",
        body: "",
        list: [
          "UV dirençli alüminyum profil",
          "EPDM kauçuk esnek dolgu",
          "Su drenaj kanalı",
          "Estetik üst kapama",
          "Termal ve ses yalıtımı",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Dış cephe dilatasyonu ne zaman yenilemeli?",
        a: "Yıllık görsel kontrol önerisi. Çatlak, kabarma, sızıntı görüldüğünde derhal müdahale.",
      },
    ],
    relatedServices: ["ic-cephe-dilatasyon-izmir", "cati-izolasyon-izmir", "teras-izolasyon-izmir"],
    relatedProjects: [],
  },

  "asansor-cukuru-izolasyon-izmir": {
    slug: "asansor-cukuru-izolasyon-izmir",
    category: "Asansör Çukuru İzolasyon",
    primaryKeyword: "asansör çukuru izolasyon izmir",
    lsiKeywords: ["asansör çukuru su sızıntısı", "asansör nem", "asansör temel yalıtım", "asansör çukuru enjeksiyon"],
    seo: {
      title: "Asansör Çukuru İzolasyon İzmir — Sim İzolasyon",
      description:
        "Asansör çukurunda su sızıntısı ve nem problemine kalıcı çözüm. Enjeksiyon ve membran sistemleri. İzmir bina yöneticileri için.",
    },
    hero: {
      eyebrow: "Asansör Çukuru İzmir",
      h1: "İzmir Asansör Çukuru İzolasyonu ve Su Yalıtımı",
      intro:
        "Asansör çukurlarında toprak suyu sızıntısına karşı enjeksiyon + membran sistemiyle kalıcı çözüm. Asansör paneli zarar görmeden.",
    },
    intro: {
      title: "Asansör Çukurunda Su Neden Birikir?",
      paragraphs: [
        "Asansör çukuru, binanın en altında konumlanan; yer altı suyu, drenaj ve perde beton kaynaklı sızıntılara açık bir alandır. Su birikmesi, asansör elektronik aksamına ciddi zarar verir.",
      ],
    },
    sections: [
      {
        title: "Çözüm Yaklaşımımız",
        body: "",
        list: [
          "Aktif sızıntı varsa enjeksiyon ile durdurma",
          "Yüzey hazırlığı ve mevcut su tahliyesi",
          "İç tarafa pozitif yönlü membran uygulama",
          "Köşe ve gider detaylarında özel bantlama",
          "Dren çukuru kontrolü ve gerekirse yenileme",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Asansör çalışırken izolasyon yapılır mı?",
        a: "Bina yöneticisiyle koordineli, asansör servis dışı süresinde çalışıyoruz. Genelde 1–2 gün asansör kapanır.",
      },
    ],
    relatedServices: ["enjeksiyon-yalitim-izmir", "perde-beton-izolasyon-izmir", "temel-bohcalama-izmir"],
    relatedProjects: ["soyak-sitesi-parapet-asansor"],
  },

  "enjeksiyon-yalitim-izmir": {
    slug: "enjeksiyon-yalitim-izmir",
    category: "Enjeksiyon Yalıtım",
    primaryKeyword: "enjeksiyon yalıtım izmir",
    lsiKeywords: ["aktif su sızıntısı", "enjeksiyon onarım", "perde duvar enjeksiyon", "yapısal enjeksiyon", "epoksi enjeksiyon"],
    seo: {
      title: "Enjeksiyon Yalıtım İzmir | Aktif Sızıntı — Sim İzolasyon",
      description:
        "Aktif su sızıntısına yüksek basınçlı enjeksiyon çözümü. Bodrum, perde duvar, asansör çukuru, otopark. İzmir'de hızlı müdahale.",
    },
    hero: {
      eyebrow: "Enjeksiyon Yalıtım İzmir",
      h1: "İzmir Enjeksiyon Yalıtım — Aktif Sızıntı Çözümü",
      intro:
        "Aktif su sızıntısı sırasında yapılan, en hızlı çözüm yöntemi: yüksek basınçlı reçine enjeksiyonu. Bodrum, perde duvar, asansör çukuru.",
    },
    intro: {
      title: "Enjeksiyon Ne Zaman Gerekir?",
      paragraphs: [
        "Aktif sızıntı söz konusu olduğunda klasik membran uygulanamaz — yüzey kuru olmadığı için. Bu durumda yüksek basınçlı poliüretan reçine enjeksiyonu ile sızıntı kaynağı doldurulur.",
        "Bodrumda perde duvardan akan su, asansör çukurunda biriken su, otoparkta tavandan damlama — enjeksiyon hepsi için ilk müdahale yöntemidir.",
      ],
    },
    sections: [
      {
        title: "Enjeksiyon Reçine Türleri",
        body: "",
        list: [
          "Poliüretan köpük reçinesi — su ile temas edince genleşir",
          "Akrilik jel — esnek dolgu",
          "Epoksi reçinesi — yapısal yapışma + sızdırmazlık",
          "Sement bazlı enjeksiyon — büyük boşluklar",
        ],
      },
      {
        title: "Uygulama Süreci",
        body: "",
        list: [
          "Sızıntı noktası tespiti",
          "Paker (enjeksiyon ucu) yerleştirme",
          "Yüksek basınçlı reçine pompalama",
          "Sızıntı durana kadar enjeksiyon",
          "Pakerlerin sökülmesi ve yüzey tamiri",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Enjeksiyon kalıcı çözüm mü?",
        a: "Doğru reçine ve uygulamayla evet. Acil müdahale + ardından klasik membran sistemiyle kombine yapılır.",
      },
      {
        q: "Aktif sızıntıya hemen müdahale edebilir misiniz?",
        a: "Evet — İzmir merkez ve çevre ilçelerde acil çağrılarda 24 saatte saha tespiti yapıyoruz.",
      },
    ],
    relatedServices: ["asansor-cukuru-izolasyon-izmir", "perde-beton-izolasyon-izmir", "otopark-enjeksiyon-izmir", "temel-bohcalama-izmir"],
    relatedProjects: [],
  },

  "otopark-izolasyon-izmir": {
    slug: "otopark-izolasyon-izmir",
    category: "Otopark İzolasyon",
    primaryKeyword: "otopark izolasyon izmir",
    lsiKeywords: ["otopark zemin", "avm otopark izolasyon", "site otoparkı yalıtım", "otopark polyurea", "trafik yükü zemin"],
    seo: {
      title: "Otopark İzolasyon İzmir — Sim İzolasyon",
      description:
        "AVM, plaza, site otoparklarında trafik yüküne dayanıklı su yalıtımı. Polyurea ve poliüretan sistemler. İzmir genelinde uygulama.",
    },
    hero: {
      eyebrow: "Otopark İzolasyon İzmir",
      h1: "İzmir Otopark İzolasyon ve Su Yalıtım Uygulamaları",
      intro:
        "Trafik yüküne, fren ve dönüş sürtünmesine dayanıklı, kimyasal dirençli (akaryakıt, yağ) otopark zemin sistemleri.",
    },
    intro: {
      title: "Otopark Zemini Neden Özel İzolasyon İster?",
      paragraphs: [
        "Otoparklar; ağır araç trafiği, fren/dönüş sürtünmesi, akaryakıt ve motor yağı dökülmeleri, sürekli kullanım altında çalışan zorlu zeminlerdir. Standart kaplama 2–3 yılda yıpranır.",
        "Polyurea ve trafik yükü için özelleştirilmiş poliüretan sistemleriyle 10+ yıl ömür sunuyoruz.",
      ],
    },
    sections: [
      {
        title: "Otopark Sistem Yapısı",
        body: "",
        list: [
          "Yüzey hazırlığı, çatlak tamiri",
          "Primer",
          "Ana kaplama (polyurea veya PU + cam elyaf takviyeli)",
          "Anti-slip katkı",
          "Trafik çizgileri ve yön işaretleri",
          "UV dirençli üst kat (açık otopark)",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Otopark izolasyonu kaç yıl dayanır?",
        a: "Polyurea sistemde 10–12 yıl. Cam elyaf takviyeli PU sistemde 8–10 yıl. Trafik yoğunluğu etkili.",
      },
      {
        q: "Otopark çalışırken uygulama olur mu?",
        a: "Evet — alan bölümleme ve gece vardiyası ile. Hızlı kürlenen polyurea ile 24 saatte trafiğe açılır.",
      },
    ],
    relatedServices: ["polyurea-sprey-izmir", "otopark-enjeksiyon-izmir", "endustriyel-zemin-kaplama-izmir", "epoksi-zemin-kaplama-izmir"],
    relatedProjects: [],
  },

  "otopark-enjeksiyon-izmir": {
    slug: "otopark-enjeksiyon-izmir",
    category: "Otopark Enjeksiyon",
    primaryKeyword: "otopark enjeksiyon izmir",
    lsiKeywords: ["otopark sızıntı", "otopark beton onarım", "perde beton enjeksiyon", "tavan damlama"],
    seo: {
      title: "Otopark Enjeksiyon İzmir — Sim İzolasyon",
      description:
        "Otoparkta perde beton ve döşeme sızıntılarına yüksek basınçlı enjeksiyon. Bina yöneticileri ve site sahipleri için kalıcı çözüm.",
    },
    hero: {
      eyebrow: "Otopark Enjeksiyon İzmir",
      h1: "İzmir Otopark Enjeksiyon ve Sızıntı Onarımı",
      intro:
        "Otoparkta perde duvarlardan ve döşemeden gelen aktif su sızıntılarına yüksek basınçlı enjeksiyon çözümü.",
    },
    intro: {
      title: "Otopark Enjeksiyonu Ne Zaman Gerekli?",
      paragraphs: [
        "Otoparkta tavandan damlama, perde duvardan su akışı, zemin çatlaklarından su yükselmesi — hepsi enjeksiyonla durdurulabilir. Aktif sızıntıda klasik membran uygulanamaz; enjeksiyon ilk müdahaledir.",
      ],
    },
    sections: [
      {
        title: "Otopark Enjeksiyon Süreci",
        body: "",
        list: [
          "Sızıntı noktası tespiti (görsel + kamera)",
          "Paker yerleştirme — beton içine delik açma",
          "Yüksek basınçlı reçine pompalama (poliüretan köpük veya akrilik jel)",
          "Sızıntı durana kadar dolum",
          "Pakerlerin sökülmesi, yüzey kapatma",
          "Klasik membran ile final koruma",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Otopark kapatılmadan enjeksiyon olur mu?",
        a: "Evet — bölgesel çalışıyoruz, 1–2 araç yeri kapatılır, ana trafik etkilenmez.",
      },
    ],
    relatedServices: ["enjeksiyon-yalitim-izmir", "otopark-izolasyon-izmir", "perde-beton-izolasyon-izmir"],
    relatedProjects: [],
  },

  "perde-beton-izolasyon-izmir": {
    slug: "perde-beton-izolasyon-izmir",
    category: "Perde Beton İzolasyon",
    primaryKeyword: "perde beton izolasyon izmir",
    lsiKeywords: ["bodrum su yalıtımı", "perde duvar izolasyon", "xps drenaj levha", "toprak suyu yalıtım", "bina temeli izolasyon"],
    seo: {
      title: "Perde Beton İzolasyon İzmir — Sim İzolasyon",
      description:
        "Bodrum perde duvarlarda toprak suyuna karşı çift katmanlı yalıtım. Bitümlü membran + XPS drenaj levhası. İzmir uzman uygulama.",
    },
    hero: {
      eyebrow: "Perde Beton İzolasyon İzmir",
      h1: "İzmir Perde Beton İzolasyon ve Toprak Suyu Yalıtımı",
      intro:
        "Bodrum perde duvarlarda toprak suyuna karşı kalıcı koruma: çift kat bitümlü membran + XPS drenaj levhası kombinasyonu.",
    },
    intro: {
      title: "Perde Beton İzolasyonu Neden Bu Kadar Kritik?",
      paragraphs: [
        "Bodrum perde duvarlar, sürekli toprak suyu basıncı altında çalışan en kritik su yalıtım noktalarındandır. Yetersiz izolasyon = bodrumda sürekli nem, küflenme, demir donatı korozyonu, en kötü senaryoda yapı sağlığı tehdidi.",
        "Sim İzolasyon olarak yeni inşaat projelerinde ve eski bina onarımlarında perde beton izolasyon uzmanıyız.",
      ],
    },
    sections: [
      {
        title: "Çift Katmanlı Sistem Yapısı",
        body: "",
        list: [
          "Yüzey temizliği, çatlak/boşluk tamiri",
          "Primer (bitümlü astar)",
          "1. kat APP/SBS bitümlü membran",
          "2. kat çapraz örtü (örtüşmeli)",
          "Detay bantlama (köşe, açıklık, sürgülü kapı)",
          "XPS drenaj levhası — mekanik koruma + drenaj",
          "Geri dolum",
        ],
      },
      {
        title: "Yeni İnşaat vs Mevcut Bina",
        body: "",
        list: [
          "Yeni inşaat — pozitif yön (toprak tarafı) ideal — tam koruma",
          "Mevcut bina — kazı yapılabiliyorsa pozitif yön, yapılamıyorsa negatif yön (iç tarafa)",
          "Negatif yön — esnek sıvı membran + yapısal koruma",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Bodrum çukurum su sızıyor — ne yapmalıyım?",
        a: "Önce keşif çağırın. Aktif sızıntı varsa enjeksiyon ile durdurma + sonra negatif yön membran. Çoğu vakada kazı gerekmeden çözüm var.",
      },
      {
        q: "XPS drenaj levhası şart mı?",
        a: "Pozitif yön uygulamada şart — membranın geri dolum sırasında zarar görmemesi için. Aynı zamanda drenaj sağlar.",
      },
    ],
    relatedServices: ["temel-bohcalama-izmir", "enjeksiyon-yalitim-izmir", "asansor-cukuru-izolasyon-izmir"],
    relatedProjects: ["perde-beton-xpx-drenaj"],
  },

  "temel-bohcalama-izmir": {
    slug: "temel-bohcalama-izmir",
    category: "Temel Bohçalama Membran",
    primaryKeyword: "temel bohçalama izmir",
    lsiKeywords: ["temel su yalıtımı", "bina temeli izolasyon", "bitümlü membran temel", "çift kat membran"],
    seo: {
      title: "Temel Bohçalama Membran İzmir — Sim İzolasyon",
      description:
        "Bina temellerinde çift kat bitümlü membran ile bohçalama uygulaması. Yeni inşaatta toprak suyuna karşı tam koruma. İzmir uzman.",
    },
    hero: {
      eyebrow: "Temel Bohçalama İzmir",
      h1: "İzmir Temel Bohçalama Membran Uygulaması",
      intro:
        "Yeni inşaat temellerinde toprak suyuna karşı tam koruma: çift kat bitümlü membran ile bohçalama tekniği.",
    },
    intro: {
      title: "Bohçalama Tekniği Nedir?",
      paragraphs: [
        "Temel bohçalama; binanın taban betonunun altından başlayıp perde duvarlara kadar tüm temel yüzeyini bir 'bohça' gibi sarma tekniğidir. Toprak suyu hangi yönden gelirse gelsin, yapıyla temas etmez.",
        "Yeni inşaatta uygulanan en kapsamlı su yalıtım yöntemidir. Müteahhit ve müşterilerimize uzun vadeli yapı sağlığı için öneriyoruz.",
      ],
    },
    sections: [
      {
        title: "Bohçalama Aşamaları",
        body: "",
        list: [
          "Grobeton zemini hazırlık",
          "Primer uygulaması",
          "1. kat bitümlü membran serme (yatay)",
          "Detay bantlama",
          "2. kat çapraz örtüşmeli membran (yatay)",
          "Perde duvar yüzeyine devam",
          "Mekanik koruma + XPS drenaj levhası",
        ],
      },
    ],
    districts: COMMON_DISTRICTS,
    faq: [
      {
        q: "Bohçalama maliyeti nedir?",
        a: "Toplam temel m²'sine göre hesaplanır. Membran tipi (APP/SBS), kalınlık, drenaj levhası seçimi belirleyici.",
      },
    ],
    relatedServices: ["perde-beton-izolasyon-izmir", "enjeksiyon-yalitim-izmir"],
    relatedProjects: ["perde-beton-xpx-drenaj"],
  },
};

export const getServiceContent = (slug: string): ServiceContent | undefined =>
  SERVICE_CONTENT[slug];
