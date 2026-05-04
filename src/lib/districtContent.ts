/**
 * İlçe bazlı landing sayfaları — long-tail SEO için.
 * Her sayfa belirli bir hizmet × ilçe kombinasyonuna odaklanır.
 * URL: /cati-izolasyon-bornova, /havuz-izolasyon-cesme vb. (flat)
 */

export type ContextSection = {
  title: string;
  body: string;
  list?: string[];
};

export type LocalProject = {
  name: string;
  location: string;
  outcome: string;
};

export type DistrictContent = {
  slug: string;            // URL slug (flat, no leading slash)
  district: string;        // İlçe adı (Bornova, Karşıyaka...)
  serviceSlug: string;     // İlgili ana servis slug (cross-link için)
  serviceName: string;     // Hizmet adı

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

  localContext: {
    title: string;
    paragraphs: string[];
  };

  why: {
    title: string;
    body: string;
    list: string[];
  };

  sections: ContextSection[];

  localProjects: LocalProject[];

  faq: { q: string; a: string }[];

  nearbyDistricts: { label: string; slug: string }[]; // İlişkili ilçe landingleri
};

export const DISTRICT_CONTENT: Record<string, DistrictContent> = {
  // ─────────────────────────────────────────────────────────
  "cati-izolasyon-bornova": {
    slug: "cati-izolasyon-bornova",
    district: "Bornova",
    serviceSlug: "cati-izolasyon-izmir",
    serviceName: "Çatı İzolasyon",
    primaryKeyword: "çatı izolasyon bornova",
    lsiKeywords: [
      "bornova çatı izolasyonu", "bornova apartman çatı yalıtımı",
      "bornova çatı sızıntısı", "ege üniversitesi çevresi izolasyon",
      "bornova çatı tamiri", "bornova izolasyon firması",
    ],
    seo: {
      title: "Çatı İzolasyon Bornova | Sim İzolasyon",
      description:
        "Bornova'da apartman ve müstakil ev çatıları için profesyonel su yalıtımı. Ege Üniversitesi çevresi ve site yöneticilerine özel hızlı keşif. Garantili işçilik.",
    },
    hero: {
      eyebrow: "Bornova / İzmir",
      h1: "Bornova'da Çatı İzolasyonu — Garantili Saha Çalışması",
      intro:
        "Bornova'nın 1990–2010 arası yapı stoğu, ilk inşaat dönemi izolasyonlarının ömrünü doldurduğu kritik dönemde. Çatı katı sızıntılarını kalıcı olarak çözüyoruz.",
    },
    localContext: {
      title: "Bornova'da Çatı İzolasyonu Neden Bu Kadar Yaygın?",
      paragraphs: [
        "Bornova; Ege Üniversitesi çevresi başta olmak üzere yüksek yoğunluklu öğrenci ve genç profesyonel popülasyona ev sahipliği yapan, 1990–2010 arası inşa edilmiş apartmanların yoğunlukta olduğu bir İzmir ilçesidir. Bu yapıların büyük bölümünde ilk yapımdaki çatı izolasyonları artık ömrünü doldurmuş durumda.",
        "Yağışlı kış dönemleri, Bornova'nın iç kesimindeki yapılar için bile ciddi nem ve sızıntı problemleri yaratıyor. Çatı katı dairelerinde tavanda lekeler, alttaki dairede boya kabarması ve uzun vadede demir donatı korozyonu sıkça görülen sorunlar.",
        "Sim İzolasyon olarak Bornova'da yıllardır aktif olarak çalışıyoruz. Yöneticisi olduğunuz sitede veya çatı katı dairenizde sızıntı şikayeti varsa; ücretsiz keşfimizle kalıcı çözümü 24 saat içinde planlıyoruz.",
      ],
    },
    why: {
      title: "Bornova Çatı İzolasyonunda Karşılaşılan Tipik Sorunlar",
      body: "Bornova'daki yapılarda en sık karşılaştığımız çatı problemleri:",
      list: [
        "Yıpranmış bitümlü membran — kabarma, çatlak, su geçirgenlik",
        "Eğim betonu çökmüş, su göllenmesi yapan teraslar",
        "Parapet dipleri ve baca çevresinde detay sızıntısı",
        "Kiremit altı yetersiz buhar dengeleyici — yoğuşma",
        "Site ortak alan otoparkında perde duvar nemi",
        "Asansör çukuru su birikmesi (bazı eski apartmanlar)",
      ],
    },
    sections: [
      {
        title: "Bornova'da Çatı İzolasyon Süreci",
        body: "Apartman yöneticileri için standart 5 adımlı süreç:",
        list: [
          "Yönetim kurulu kararı sonrası ücretsiz keşif (24 saat)",
          "Detaylı yerinde inceleme ve teknik rapor",
          "Kalem kalem teklif (genel kurul sunumu için)",
          "Sözleşme imzalama, takvim belirleme",
          "Uygulama ve yazılı garanti belgesi teslimi (5–10 yıl)",
        ],
      },
      {
        title: "Hangi Sistemleri Tercih Ediyoruz?",
        body: "Bornova çatılarında bütçe ve yapı tipine göre 3 ana sistem önerimiz:",
        list: [
          "Bitümlü membran (çift kat) — ekonomik, klasik düz çatı",
          "Polyurea sprey — detay yoğun çatı (parapet, baca, oluk gider)",
          "Cam elyaf takviyeli poliüretan — eski beton yapı, çatlak köprüleme",
        ],
      },
    ],
    localProjects: [
      { name: "Bornova Apartmanı çatı yenileme", location: "Bornova merkez", outcome: "240 m² teras + çatı, 4 günde teslim, 8 yıl garanti" },
      { name: "Site otopark perde duvar enjeksiyon", location: "Bornova / Doğanlar", outcome: "Aktif sızıntı 2 günde durduruldu, 1 yıl sonra hâlâ kuru" },
      { name: "Çatı katı dairesi teras izolasyonu", location: "Bornova / Erzene", outcome: "Sızıntı şikayeti tamamen çözüldü, 110 m²" },
    ],
    faq: [
      {
        q: "Bornova'da apartman yönetimi olarak nasıl başlayabiliriz?",
        a: "Yönetim kurulu toplantısında konuyu açtıktan sonra bizi arayın — yerinde keşif ücretsiz. Detaylı raporu genel kurulda sunabilirsiniz. Sonrasında sözleşme + takvim + uygulama.",
      },
      {
        q: "Çatı keşfine ne kadar sürede gelebilirsiniz?",
        a: "Bornova ve çevre ilçelerde 24–48 saat içinde keşif planlaması yapıyoruz. Acil sızıntıda aynı gün gelebiliriz.",
      },
      {
        q: "Bornova'da hangi tip çatılar için uygulama yapıyorsunuz?",
        a: "Eğimli kiremit, düz beton, çatı katı terası, parapet ve site ortak çatı tüm türlerinde aktif olarak çalışıyoruz.",
      },
      {
        q: "Apartman bütçesini nasıl planlamalı?",
        a: "Toplam keşif sonrası fiyat daire başı paya bölünür. Aşamalı yenileme (önce çatı, sonra otopark/asansör çukuru) bütçeyi yıllara yayma seçeneği sunar.",
      },
      {
        q: "Garanti süresi nedir?",
        a: "Bitümlü membranda 5–8 yıl, polyurea ve cam elyaf takviyeli sistemlerde 8–10 yıl yazılı işçilik garantisi.",
      },
    ],
    nearbyDistricts: [
      { label: "Çatı İzolasyon Karşıyaka", slug: "cati-izolasyon-karsiyaka" },
      { label: "Teras İzolasyon Bornova", slug: "teras-izolasyon-bornova" },
      { label: "İzolasyon Firması Bornova", slug: "izolasyon-firmasi-bornova" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "cati-izolasyon-karsiyaka": {
    slug: "cati-izolasyon-karsiyaka",
    district: "Karşıyaka",
    serviceSlug: "cati-izolasyon-izmir",
    serviceName: "Çatı İzolasyon",
    primaryKeyword: "çatı izolasyon karşıyaka",
    lsiKeywords: [
      "karşıyaka çatı yalıtımı", "karşıyaka apartman çatı",
      "sahil binası izolasyon", "karşıyaka çatı sızıntısı",
      "karşıyaka izolasyon firması", "tuzlu hava çatı",
    ],
    seo: {
      title: "Çatı İzolasyon Karşıyaka | Sahil Binası — Sim İzolasyon",
      description:
        "Karşıyaka sahil ve iç kesim binalarında çatı izolasyonu. Tuzlu hava direnci yüksek sistemler, polyurea ve cam elyaf takviyeli kaplama. Garantili.",
    },
    hero: {
      eyebrow: "Karşıyaka / İzmir",
      h1: "Karşıyaka'da Çatı İzolasyonu — Sahil Binalarına Özel",
      intro:
        "Karşıyaka sahil bandında deniz tuzu ve rüzgâr; çatı sistemlerini hızlı yıpratıyor. UV ve tuz dayanımlı sistemlerle 10+ yıl ömür.",
    },
    localContext: {
      title: "Karşıyaka Sahil Konutlarının Çatı Sorunu",
      paragraphs: [
        "Karşıyaka; Bostanlı'dan Atakent'e uzanan sahil bandı boyunca yıllardır deniz havasıyla yüklü tuzlu rüzgâra maruz kalan binalara ev sahipliği yapar. Bu, izolasyon malzemesi seçiminde başka ilçelerden ayrı bir yaklaşım gerektirir.",
        "Sahil binalarındaki standart bir çatı membranı yaklaşık 8 yıl ömür verirken, iç kesimde 12–15 yıl rahatlıkla dayanır. Bu fark; tuz penetrasyonu, korozif rüzgâr etkisi ve yüksek nem yoğunluğundan kaynaklanır.",
        "Sim İzolasyon olarak Karşıyaka'da Bostanlı, Mavişehir, Atakent, Çiğli sınırı ve iç kesim mahallelerinde aktif şantiyelerimiz mevcut.",
      ],
    },
    why: {
      title: "Sahil Binası Çatısında Kritik Detaylar",
      body: "Karşıyaka çatılarında özellikle dikkat ettiğimiz detaylar:",
      list: [
        "Parapet üst kapama — rüzgâr ile su girişi kaçınılmaz",
        "Pencere ve kapı eşikleri — sürekli su yükü",
        "Dilatasyon (genleşme) noktaları — termal hareket fazla",
        "Klima dış üniteleri çevresi — yoğuşma + tuz birikmesi",
        "Çatı oluk ve gider birleşimleri — donma-çözülme döngüsü",
        "Antenler, panolar — paslanmış civata noktaları",
      ],
    },
    sections: [
      {
        title: "Tuz Direnci Yüksek Sistem Önerilerimiz",
        body: "",
        list: [
          "Polyurea sprey + Aliphatic poliüretan üst kat — UV ve tuza karşı bariyer",
          "Cam elyaf takviyeli poliüretan — mekanik dayanım yüksek",
          "Çift kat APP/SBS bitümlü membran + koruyucu boya",
          "Elastomerik üst kat (gri/beyaz reflektif) — UV reflektörü",
        ],
      },
      {
        title: "Yıllık Bakım Programı",
        body: "Sahil binalarında yıllık görsel kontrol ve gerekirse mini onarım, ana izolasyon ömrünü %50 uzatır. Yıllık ücretsiz bakım kontrolü garanti süresi içinde standart hizmetimiz.",
      },
    ],
    localProjects: [
      { name: "Bostanlı sahil apartmanı çatı yenileme", location: "Karşıyaka / Bostanlı", outcome: "180 m², polyurea + Aliphatic, 10 yıl garanti" },
      { name: "Mavişehir sitesi çatı bakım", location: "Karşıyaka / Mavişehir", outcome: "12 daireli site, sızıntı sıfırlandı" },
      { name: "Atakent çatı katı dairesi", location: "Karşıyaka / Atakent", outcome: "Tek daireye özel, hibrit sistem, 80 m²" },
    ],
    faq: [
      {
        q: "Karşıyaka sahil binasında izolasyon ömrü neden kısa?",
        a: "Tuzlu hava + UV + sürekli rüzgâr = standart sistem ömrünü %30–40 azaltır. Tuz dirençli sistemler ve yıllık bakımla bu açığı kapatıyoruz.",
      },
      {
        q: "Polyurea sahilde dayanır mı?",
        a: "Evet — Aliphatic poliüretan üst kat ile UV ve tuz korozyonuna karşı en güvenli kaplamalardan biri. Karşıyaka villa havuzlarımızda da aynı sistem kullanıyoruz.",
      },
      {
        q: "Mavişehir sitelerinde toplu uygulama yapabilir misiniz?",
        a: "Evet — site yönetimleriyle koordineli, blok bazlı uygulama yapabiliyoruz. Bütçe planlaması ve takvim site genel kurulunda sunuyoruz.",
      },
      {
        q: "Karşıyaka çatı keşfine ne kadar sürede gelirsiniz?",
        a: "24 saat içinde keşif planlama. Acil sızıntıda aynı gün müdahale.",
      },
      {
        q: "Çatı katı dairemde sızıntı var, yönetim onayı şart mı?",
        a: "Çatı ortak alan, evet yönetim onayı gerekli. Yönetim kurulu sunumunuzda biz de katılabiliriz; teknik raporu ücretsiz hazırlıyoruz.",
      },
    ],
    nearbyDistricts: [
      { label: "Çatı İzolasyon Bornova", slug: "cati-izolasyon-bornova" },
      { label: "Su Yalıtımı Karşıyaka", slug: "su-yalitimi-karsiyaka" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "teras-izolasyon-bornova": {
    slug: "teras-izolasyon-bornova",
    district: "Bornova",
    serviceSlug: "teras-izolasyon-izmir",
    serviceName: "Teras İzolasyon",
    primaryKeyword: "teras izolasyon bornova",
    lsiKeywords: [
      "bornova teras yalıtımı", "bornova çatı katı sızıntı",
      "bornova teras tamiri", "bornova teras membran",
      "ege üniversitesi çevresi teras izolasyon",
    ],
    seo: {
      title: "Teras İzolasyon Bornova | Sızıntı Çözümü — Sim İzolasyon",
      description:
        "Bornova'da çatı katı dairesi teraslarında sızıntı çözümü. Polyurea, membran ve hibrit sistemler. Apartman yönetimleri için ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Bornova / İzmir",
      h1: "Bornova'da Teras İzolasyonu — Sızıntıya Kalıcı Çözüm",
      intro:
        "Çatı katı dairesinde tavandan damlama, alttaki dairede nem? Bornova'da teras izolasyon uygulamalarımızla 8–10 yıl yazılı garanti.",
    },
    localContext: {
      title: "Bornova'da Teras Sızıntısı Neden Yaygın?",
      paragraphs: [
        "Bornova'nın yapı stoğu büyük çoğunlukla 1990–2010 arasında inşa edildi. Bu dönemde uygulanan teras izolasyonları artık ömrünü doldurmuş durumda. Yağışlı kış aylarında çatı katı dairelerinde tavan lekeleri, boya kabarması ve damlama sıkça karşılaştığımız tablolar.",
        "Tipik sorun şudur: çatı katı dairesi sahibi şikayet eder, yönetim olayı yıllarca ertelemeye çalışır, sonunda alttaki dairede de nem başlayınca komşular arası gerginlik yaşanır. Erken müdahale her zaman daha ucuzdur.",
      ],
    },
    why: {
      title: "Teras Sızıntısının 6 Belirtisi",
      body: "Aşağıdakilerden biri varsa keşif zamanı:",
      list: [
        "Çatı katı dairesi tavanında küflenme veya lekeler",
        "Tavanda boya kabarması, çıkıntılar",
        "Alttaki dairede tavandan damlama",
        "Teras kapı eşiğinde nem birikmesi",
        "Parapet dibinde yosun tutması, sıva atması",
        "Yağmur sonrası terasta su göllenmesi",
      ],
    },
    sections: [
      {
        title: "Bornova'da Tercih Ettiğimiz Sistemler",
        body: "",
        list: [
          "Polyurea sprey (eksiz, esnek, hızlı kürlenen)",
          "Bitümlü membran çift kat (klasik, ekonomik)",
          "Hibrit sistem — bütçeyi optimize eder",
          "Seramik üstü uygulama (söküm yapmadan)",
        ],
      },
      {
        title: "Söküm Yapmadan Teras İzolasyonu",
        body: "Mevcut seramik kaplama sağlam ise, söküm yapmadan üzerine sıvı membran uygulanabilir. Hızlı, ekonomik, mekan kullanımı kesintisiz. Detay için Seramik Üstü İzolasyon hizmetimize bakabilirsiniz.",
      },
    ],
    localProjects: [
      { name: "Bornova çatı katı dairesi teras", location: "Bornova / Erzene", outcome: "110 m² polyurea, 4 günde teslim" },
      { name: "Apartman ortak teras izolasyon", location: "Bornova / Kazımdirik", outcome: "240 m², hibrit sistem, 8 yıl garanti" },
    ],
    faq: [
      {
        q: "Bornova teras izolasyon fiyatı 2026 yaklaşık ne kadar?",
        a: "Sistem ve yüzey durumuna göre değişir. Detaylı tahmin için ücretsiz keşif sonrası kalem kalem teklif sunuyoruz.",
      },
      {
        q: "Apartmanımda teras kullanılıyor — sızıntı çözümü daha mı zor?",
        a: "Hayır, ama sistemde 'trafik dayanımı' kriterini öne alıyoruz. Polyurea anti-slip katkılı versiyonlarla çözüm mümkün.",
      },
      {
        q: "Söküm yapmadan teras izolasyonu mümkün mü?",
        a: "Mevcut seramik durumuna göre değişir. Sağlam seramikte söküm yapmadan uygulama mümkün, kabarmış seramikte söküm önerilir.",
      },
      {
        q: "Üst kat dairesinde oturuyorum, ben tek başıma yaptırabilir miyim?",
        a: "Teras ortak alan ise yönetim onayı şart. Bağımsız teras (kendi dairenize ait) ise direkt iletişime geçebilirsiniz.",
      },
    ],
    nearbyDistricts: [
      { label: "Çatı İzolasyon Bornova", slug: "cati-izolasyon-bornova" },
      { label: "İzolasyon Firması Bornova", slug: "izolasyon-firmasi-bornova" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "havuz-izolasyon-cesme": {
    slug: "havuz-izolasyon-cesme",
    district: "Çeşme",
    serviceSlug: "havuz-izolasyon-izmir",
    serviceName: "Havuz İzolasyon",
    primaryKeyword: "havuz izolasyon çeşme",
    lsiKeywords: [
      "çeşme villa havuz izolasyon", "alaçatı havuz izolasyonu",
      "çeşme polyurea havuz", "çeşme havuz sızıntısı",
      "çeşme havuz tamiri", "yazlık havuz izolasyon",
    ],
    seo: {
      title: "Havuz İzolasyon Çeşme | Villa Havuz — Sim İzolasyon",
      description:
        "Çeşme ve Alaçatı'da villa havuzları için profesyonel izolasyon. Polyurea sprey ve cam elyaf takviyeli sistemler. Sezon öncesi ücretsiz keşif.",
    },
    hero: {
      eyebrow: "Çeşme / İzmir",
      h1: "Çeşme Villa Havuzları İçin Profesyonel İzolasyon",
      intro:
        "Çeşme ve Alaçatı'da yazlık villa havuzlarınızda klor, pH değişimi ve yapı oturma çatlaklarına dayanıklı, sıfır su kaybı garantili sistemler.",
    },
    localContext: {
      title: "Çeşme Havuzlarında Karşılaşılan Tipik Sorunlar",
      paragraphs: [
        "Çeşme; Türkiye'nin en yoğun yazlık tatil bölgelerinden biri. Villa havuzları yıl boyunca değil, sezonluk yoğun kullanım altında. Bu, izolasyon ömrünü hızlandıran iki faktör getiriyor: kış aylarında suyun boşaltılması/donma-çözülme döngüsü ve sezon öncesi ani dolum + ısı şoku.",
        "Sahil bölgesinin getirdiği tuzlu rüzgâr ve UV radyasyonu da havuz iç kabuğuna yıllık olarak %5–8 arasında ek yıpranma getiriyor. Standart bir kaplama 5–7 yıl içinde sızıntı yapmaya başlıyor.",
        "Sim İzolasyon olarak Çeşme, Alaçatı, Ovacık, Çiftlikköy bölgesinde birçok villa havuzu izolasyon projemiz mevcut.",
      ],
    },
    why: {
      title: "Çeşme Havuzunda Sezon Öncesi Kontrol Listesi",
      body: "Yaz sezonu başlamadan önce kontrol etmeniz gerekenler:",
      list: [
        "Su seviyesi yıllık kayıp testi (24 saat referans)",
        "Derz açılmaları, mikro çatlaklar",
        "Skimmer, lamba ve gider çevresinde nem",
        "Yapı oturma çatlakları",
        "Mevcut kaplamada renk solması, kabarma",
        "Duvar–taban birleşim noktası",
      ],
    },
    sections: [
      {
        title: "Tercih Ettiğimiz Sistemler",
        body: "",
        list: [
          "Polyurea sprey kaplama — eksiz, klor dirençli, hızlı kürlenme",
          "Cam elyaf takviyeli poliüretan — yapı oturmaya direnç",
          "Hibrit sistem — bütçe ve performans dengesi",
          "Seramik üstüne uygulama (mevcut sağlamsa) — söküm yok",
        ],
      },
      {
        title: "Sezon Öncesi Hızlı Uygulama",
        body: "Mayıs ayında uygulama yapan villalar yaz sezonunu sorunsuz açıyor. 8x4 m standart villa havuzunda 4–5 iş gününde teslim mümkün. Polyurea kürlenme 24 saat, suya 48 saatte.",
      },
    ],
    localProjects: [
      { name: "Alaçatı villa havuz yenileme", location: "Çeşme / Alaçatı", outcome: "Mevcut seramik üstüne polyurea, 4 günde teslim, 2 yıldır sıfır su kaybı" },
      { name: "Çiftlikköy site havuzu", location: "Çeşme / Çiftlikköy", outcome: "Site ortak havuz, cam elyaf takviyeli sistem, 10 yıl garanti" },
      { name: "Ovacık villa havuz tamir", location: "Çeşme / Ovacık", outcome: "Çatlak köprüleme, 5 günde teslim" },
    ],
    faq: [
      {
        q: "Çeşme'de villa havuzumun izolasyonunu sezona yetiştirebilir misiniz?",
        a: "Evet — Mart–Mayıs ayları havuz uygulaması için ideal sezon. 4–5 iş gününde teslim standart sürede tamamlıyoruz.",
      },
      {
        q: "Mevcut seramik havuzu sökmeden kaplayabilir misiniz?",
        a: "Mevcut seramik kabarma yoksa, evet — söküm yapmadan üzerine polyurea uygulanabilir. Süre ve maliyet avantajı büyük.",
      },
      {
        q: "Polyurea havuz kaplama renk seçenekleri nelerdir?",
        a: "Mavi tonları (açık/orta/koyu deniz mavisi), turkuaz, gri, beyaz. Müşteri tercihine göre özel renk üretimi de mümkün.",
      },
      {
        q: "Garanti kaç yıl?",
        a: "Polyurea sistemde 8 yıl, cam elyaf takviyeli sistemde 10 yıl yazılı işçilik garantisi.",
      },
      {
        q: "Çeşme'de yıl boyu mu yoksa sadece yazın mı çalışıyorsunuz?",
        a: "Yıl boyu aktifiz. Çoğu villa sezon öncesi (Mart–Mayıs) veya sezon sonu (Ekim–Kasım) izolasyon yenilemesi yapıyor.",
      },
    ],
    nearbyDistricts: [
      { label: "Havuz İzolasyon Urla", slug: "havuz-izolasyon-urla" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "havuz-izolasyon-urla": {
    slug: "havuz-izolasyon-urla",
    district: "Urla",
    serviceSlug: "havuz-izolasyon-izmir",
    serviceName: "Havuz İzolasyon",
    primaryKeyword: "havuz izolasyon urla",
    lsiKeywords: [
      "urla villa havuz", "urla havuz tamiri", "urla havuz polyurea",
      "urla havuz sızıntısı", "urla yazlık havuz",
    ],
    seo: {
      title: "Havuz İzolasyon Urla | Villa Havuz — Sim İzolasyon",
      description:
        "Urla ve İskele bölgesinde villa havuz izolasyonu. Polyurea ve cam elyaf takviyeli sistemler. Sezon öncesi ücretsiz keşif, garantili işçilik.",
    },
    hero: {
      eyebrow: "Urla / İzmir",
      h1: "Urla'da Villa Havuz İzolasyonu",
      intro:
        "Urla ve İskele'de villa havuzları için sezon öncesi yenileme ve tamir çözümleri. Polyurea sprey ile sıfır su kaybı.",
    },
    localContext: {
      title: "Urla Bölgesinin Havuz Profili",
      paragraphs: [
        "Urla; son yıllarda İzmir'in en hızlı gelişen yazlık ve daimi konut bölgelerinden biri. Yeni inşaat projelerinin yanı sıra 10–20 yaşındaki yazlık havuzlar da yenileme döneminde.",
        "Coğrafi konum olarak Çeşme yarımadasının kapısında; deniz tuzu ve UV etkisi Çeşme'ye yakın. Havuz izolasyon stratejisi büyük oranda örtüşür: tuz dirençli, UV korumalı, klor dirençli sistemler ön planda.",
        "Sim İzolasyon olarak Urla merkez, İskele, Zeytinler köyü ve site projelerinde aktif olarak çalışıyoruz.",
      ],
    },
    why: {
      title: "Urla Havuzunda Yenileme Zamanını Belirleyen 5 İşaret",
      body: "",
      list: [
        "Yıllık 1+ m³ su kaybı",
        "Renk solmuş, lekelenmiş kaplama",
        "Derzlerde açılma, su izi",
        "Sezon dışı boşaltıldığında çatlak gözükmesi",
        "Skimmer ve gider çevresinde su izleri",
      ],
    },
    sections: [
      {
        title: "Urla Villa Havuzları İçin Sistem Önerimiz",
        body: "",
        list: [
          "Polyurea sprey + Aliphatic koruma (UV ve tuz)",
          "Cam elyaf takviyeli poliüretan (eski havuz, çatlak yoğun)",
          "Mevcut kaplama üstüne (sağlamsa) hızlı uygulama",
        ],
      },
      {
        title: "Detay Noktaları",
        body: "Sızıntıların büyük bölümü detaydan gelir. Skimmer çevresi, su altı lambası, gider, derzler — hepsi özel bantlar ve esnek dolgu malzemeleri ile çözülür.",
      },
    ],
    localProjects: [
      { name: "Urla İskele villa havuz", location: "Urla / İskele", outcome: "8x4 havuz polyurea, 4 günde teslim" },
      { name: "Zeytinler köyü site havuzu", location: "Urla / Zeytinler", outcome: "Yapı oturma çatlağı, cam elyaf takviyeli sistem" },
    ],
    faq: [
      {
        q: "Urla'da hangi havuz tiplerine bakıyorsunuz?",
        a: "Villa havuzu, site havuzu, otel havuzu, çocuk havuzu — tüm yüzme havuzu sınıflarında uygulama yapıyoruz.",
      },
      {
        q: "Yeni havuz inşaatında izolasyon yapıyor musunuz?",
        a: "Evet — beton kabuk hazır olduktan sonra primer + polyurea + dekoratif son kat olarak komple paket sunuyoruz.",
      },
      {
        q: "Sezon öncesi ne zaman keşif yaptırmalıyım?",
        a: "Şubat–Mart ayları ideal. Mayıs sezon açılışına yetişmesi için Mart sonuna kadar uygulama planlanır.",
      },
      {
        q: "Garanti süresi nedir?",
        a: "Polyurea sistemde 8 yıl, cam elyaf takviyeli sistemde 10 yıl yazılı işçilik garantisi.",
      },
    ],
    nearbyDistricts: [
      { label: "Havuz İzolasyon Çeşme", slug: "havuz-izolasyon-cesme" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "epoksi-zemin-cigli": {
    slug: "epoksi-zemin-cigli",
    district: "Çiğli",
    serviceSlug: "epoksi-zemin-kaplama-izmir",
    serviceName: "Epoksi Zemin Kaplama",
    primaryKeyword: "epoksi zemin çiğli",
    lsiKeywords: [
      "atatürk osb epoksi", "çiğli fabrika zemin",
      "atatürk organize sanayi zemin kaplama", "çiğli endüstriyel zemin",
      "fabrika epoksi izmir", "depo zemin kaplama çiğli",
    ],
    seo: {
      title: "Epoksi Zemin Çiğli (Atatürk OSB) — Sim İzolasyon",
      description:
        "Çiğli Atatürk OSB'de fabrika ve depo için epoksi zemin kaplama. 7+ yıl OSB tecrübesi. Hızlı keşif, üretim durdurmadan uygulama.",
    },
    hero: {
      eyebrow: "Çiğli / İzmir",
      h1: "Çiğli Atatürk OSB'de Epoksi Zemin Kaplama",
      intro:
        "Atatürk Organize Sanayi Bölgesi tesisleri için sektör bazlı epoksi sistemleri. Üretim durdurmadan, vardiya planıyla uygulama.",
    },
    localContext: {
      title: "Atatürk OSB'de Aktif Şantiyemiz",
      paragraphs: [
        "Atatürk Organize Sanayi Bölgesi (Atatürk OSB), Türkiye'nin önemli üretim merkezlerinden biri. Otomotiv yan sanayi, gıda, kimya, makine üretim ve lojistik tesisleri yoğun olarak burada faaliyet gösteriyor. Sim İzolasyon olarak 7+ yıldır OSB'de aktif şantiyelerimiz var.",
        "OSB'deki tesislerin büyük bölümünde üretim 7/24 devam ettiği için zemin kaplama uygulamasında en kritik kriter: minimum üretim duruş süresi. Alan bölümleme + vardiya planlaması + hızlı kürlenen sistemlerle bu kriteri karşılıyoruz.",
        "Çiğli'nin OSB dışında kalan bölgelerde de (depo, atölye, ticari alan) zemin kaplama uygulamalarımız mevcut.",
      ],
    },
    why: {
      title: "Atatürk OSB'de Tipik Zemin İhtiyaçları",
      body: "",
      list: [
        "Üretim hattı zemin yenileme — duruş süresi minimize",
        "Depo ve lojistik alan kaplama (forklift dayanımı)",
        "Hijyen alanlar (gıda, ilaç) için cove sistemi",
        "Otopark zemin yenileme (trafik yükü)",
        "Sandviç panel çatı tamir/yenileme",
        "Kimyasal direnç (kimya/otomotiv yan sanayi)",
      ],
    },
    sections: [
      {
        title: "Sektör Bazlı Sistem Önerilerimiz",
        body: "",
        list: [
          "Otomotiv yan sanayi → Kuvars takviyeli epoksi 5 mm",
          "Gıda fabrikası → Poliüretan-çimento HACCP uyumlu",
          "İlaç/kimya → Self-leveling epoksi + ESD (gerekirse)",
          "Lojistik depo → Self-leveling 3 mm + trafik çizgileri",
          "Makine üretim → Boya tip + kuvars güçlendirilmiş alanlar",
        ],
      },
      {
        title: "Üretim Durdurmadan Uygulama",
        body: "Atatürk OSB tesislerinde standart yaklaşımımız: alan bölümleme (üretim hattı bölgelere ayrılır), gece vardiyası çalışma, hızlı kürlenen sistemler (poliüretan-çimento veya polyurea). 24 saatte trafiğe açma standart.",
      },
      {
        title: "Hızlı Keşif Programımız",
        body: "Atatürk OSB'de aktif olduğumuz için 24–48 saat içinde keşif planlaması yapıyoruz. Keşif sonrası 24 saat içinde detaylı, kalem kalem teklif sunuyoruz. Acil ihtiyaçlarda aynı gün keşif mümkün.",
      },
    ],
    localProjects: [
      { name: "Otomotiv yan sanayi kuvars takviyeli zemin", location: "Atatürk OSB", outcome: "1.200 m², 5 mm kalınlık, 7 günde teslim" },
      { name: "Gıda fabrikası poliüretan-çimento", location: "Atatürk OSB", outcome: "HACCP uyumlu, üretim durmadan tamamlandı" },
      { name: "Lojistik depo self-leveling", location: "Çiğli", outcome: "800 m², trafik çizgili, 3 günde teslim" },
    ],
    faq: [
      {
        q: "Atatürk OSB fabrikam için ne kadar sürede teklif alırım?",
        a: "Atatürk OSB'de aktif olduğumuz için 24–48 saat içinde keşif planlaması, keşif sonrası 24 saat içinde detaylı kalem kalem teklif sunuyoruz.",
      },
      {
        q: "Üretim durdurmadan epoksi yapılabilir mi?",
        a: "Evet — alan bölümleme yöntemiyle. Vardiya planlamasıyla üretim durmadan, alanları sırayla kaplıyoruz. Hızlı kürlenen sistemlerle 24 saatte trafiğe açılır.",
      },
      {
        q: "Mevcut beton zeminim çok kötü, epoksi tutar mı?",
        a: "Yüzey ön hazırlığı doğru yapılırsa tutar. Frezeleme, çatlak tamiri, gerekirse onarım harcı uyguluyoruz.",
      },
      {
        q: "Epoksi zemin kaç yıl dayanır?",
        a: "Sistem ve kullanım yoğunluğuna göre 8–15 yıl. Self-leveling 10+ yıl, kuvars takviyeli ağır sanayide 12–15 yıl.",
      },
      {
        q: "Soğuk hava deposunda epoksi olur mu?",
        a: "Soğuk hava depolarında polyurea veya poliüretan-çimento sistemleri tercih edilir. Standart epoksi gevrekleşebilir.",
      },
    ],
    nearbyDistricts: [],
  },

  // ─────────────────────────────────────────────────────────
  "su-yalitimi-karsiyaka": {
    slug: "su-yalitimi-karsiyaka",
    district: "Karşıyaka",
    serviceSlug: "cati-izolasyon-izmir",
    serviceName: "Su Yalıtımı (Çatı / Teras / Bodrum)",
    primaryKeyword: "su yalıtımı karşıyaka",
    lsiKeywords: [
      "karşıyaka su yalıtım", "karşıyaka çatı yalıtımı",
      "karşıyaka teras yalıtım", "karşıyaka bodrum su yalıtımı",
      "sahil binası yalıtım",
    ],
    seo: {
      title: "Su Yalıtımı Karşıyaka | Sahil Binası — Sim İzolasyon",
      description:
        "Karşıyaka sahil ve iç kesim binalarında su yalıtımı: çatı, teras, bodrum, asansör çukuru. Tuzlu hava direnci yüksek sistemler. Garantili.",
    },
    hero: {
      eyebrow: "Karşıyaka / İzmir",
      h1: "Karşıyaka'da Su Yalıtımı — Sahil Binalarına Özel",
      intro:
        "Karşıyaka'da çatıdan bodruma kadar tüm yapı su yalıtım ihtiyaçlarınız için kapsamlı çözüm. Sahil binalarına özel tuz ve UV dirençli sistemler.",
    },
    localContext: {
      title: "Karşıyaka'da Su Yalıtımı Neden Sıkıştırıcı?",
      paragraphs: [
        "Karşıyaka sahil bandı; deniz havasından gelen tuzlu rüzgâra ve UV radyasyona sürekli maruz kalan en zorlu yapı bölgelerinden biri. Bu, çatıdan bodruma kadar her yapı katmanında izolasyon ihtiyacını başka ilçelere göre 1.5–2 katı yapıyor.",
        "Bostanlı, Mavişehir, Atakent, Şemikler bölgelerindeki binalarda en sık karşılaştığımız problemler: çatı katı sızıntısı, parapet detay yorgunluğu, bodrum/otopark perde duvar nemi, asansör çukuru su birikmesi, dış cephe dilatasyon yıpranması.",
      ],
    },
    why: {
      title: "Karşıyaka'da Su Yalıtım Hizmet Yelpazemiz",
      body: "Tüm yapı su yalıtım ihtiyaçlarınız için tek adres:",
      list: [
        "Çatı izolasyon (eğimli kiremit, düz beton, sandviç panel)",
        "Teras izolasyon (çatı katı, kullanılan teras)",
        "Bodrum perde duvar izolasyon",
        "Asansör çukuru izolasyon ve enjeksiyon",
        "Otopark perde beton ve döşeme su yalıtımı",
        "Dış cephe dilatasyon yenileme",
        "Banyo ve ıslak hacim membran",
      ],
    },
    sections: [
      {
        title: "Tuz Direnci Yüksek Sistem Yaklaşımımız",
        body: "Karşıyaka sahil binalarında standart sistemler %30–40 daha kısa ömür verir. Bu nedenle tercihlerimiz:",
        list: [
          "Polyurea sprey + Aliphatic poliüretan üst kat",
          "Cam elyaf takviyeli poliüretan",
          "Çift kat APP/SBS bitümlü membran + reflektif boya",
          "Esnek dilatasyon profilleri (UV ve hava şartı dirençli)",
        ],
      },
      {
        title: "Aşamalı Bina Yenileme Programı",
        body: "Apartman yönetimleri için yıllık aşamalı plan: çatı → teras → otopark → bodrum/asansör çukuru. Bu sırayla yıllara yayma, daire başı yıllık maliyeti minimize eder.",
      },
    ],
    localProjects: [
      { name: "Bostanlı sahil apartmanı çatı + teras", location: "Karşıyaka / Bostanlı", outcome: "180 m² polyurea, 10 yıl garanti" },
      { name: "Mavişehir site asansör çukuru tamiri", location: "Karşıyaka / Mavişehir", outcome: "Aktif sızıntı, enjeksiyon + membran kombinasyon" },
      { name: "Şemikler apartmanı dış cephe dilatasyon", location: "Karşıyaka / Şemikler", outcome: "12 katlı bina dış cephe komple yenileme" },
    ],
    faq: [
      {
        q: "Karşıyaka apartman yönetimi olarak nasıl çalışırız?",
        a: "Yönetim kurulu kararı sonrası ücretsiz keşif. Detaylı raporu genel kurulda sunabilirsiniz. Sözleşme + takvim + uygulama.",
      },
      {
        q: "Bostanlı'da deniz manzaralı çatı katı dairemde sızıntı var, çözüm nedir?",
        a: "Çatı katı sızıntısı çoğu zaman teras kaynaklı. Önce kaynak tespiti (termal kamera + su testi), sonra polyurea + Aliphatic sistemle uzun ömürlü çözüm.",
      },
      {
        q: "Sahil binalarında izolasyon ömrü neden kısa?",
        a: "Tuz + UV + sürekli rüzgâr = standart sistem ömrünü %30–40 azaltır. Tuz dirençli sistemler ve yıllık bakımla bu açığı kapatıyoruz.",
      },
      {
        q: "Yıllık bakım hizmetiniz var mı?",
        a: "Evet — garanti süresi içinde yıllık görsel kontrol ücretsiz. Mini onarımlar da kapsam dahilinde.",
      },
    ],
    nearbyDistricts: [
      { label: "Çatı İzolasyon Karşıyaka", slug: "cati-izolasyon-karsiyaka" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  "izolasyon-firmasi-bornova": {
    slug: "izolasyon-firmasi-bornova",
    district: "Bornova",
    serviceSlug: "cati-izolasyon-izmir",
    serviceName: "İzolasyon Hizmetleri",
    primaryKeyword: "izolasyon firması bornova",
    lsiKeywords: [
      "bornova izolasyoncu", "bornova çatı tamiri firması",
      "bornova izolasyon ustası", "ege üniversitesi çevresi izolasyon",
      "bornova su yalıtımı", "bornova izolasyon servisi",
    ],
    seo: {
      title: "İzolasyon Firması Bornova | Sim İzolasyon",
      description:
        "Bornova'da güvenilir izolasyon firması: çatı, teras, havuz, otopark ve endüstriyel zemin uygulamaları. 10+ yıl tecrübe, garantili işçilik.",
    },
    hero: {
      eyebrow: "Bornova / İzmir",
      h1: "Bornova'da İzolasyon Firması — Sim İzolasyon",
      intro:
        "Bornova ve çevresinde 10+ yıllık saha tecrübesiyle profesyonel izolasyon ve su yalıtım hizmetleri. Apartman yönetimleri, müteahhitler ve konut sahipleri için tek adres.",
    },
    localContext: {
      title: "Neden Sim İzolasyon?",
      paragraphs: [
        "Bornova'da onlarca apartman, site ve müstakil ev projesinde çalıştık. Ege Üniversitesi çevresinden Atatürk Mahallesi'ne, Doğanlar'dan Erzene'ye kadar geniş bir saha tecrübemiz mevcut.",
        "Bornova'nın 1990–2010 arası yapı stoğu, ilk inşaat dönemi izolasyonlarının ömrünü doldurduğu kritik dönemde. Bu nedenle yenileme talebi her geçen yıl artıyor. Sim İzolasyon olarak hem konut hem ticari ölçekte hizmet veriyoruz.",
      ],
    },
    why: {
      title: "Bornova'da Sunduğumuz Tüm Hizmetler",
      body: "",
      list: [
        "Çatı izolasyon ve su yalıtımı",
        "Teras izolasyon (çatı katı dairesi)",
        "Bodrum perde duvar yalıtım",
        "Otopark izolasyon ve enjeksiyon",
        "Asansör çukuru su sızıntısı çözümü",
        "Banyo ve ıslak hacim membran",
        "Dış cephe dilatasyon yenileme",
        "Sandviç panel çatı tamiri (sanayi)",
        "Endüstriyel zemin kaplama (depo/atölye)",
      ],
    },
    sections: [
      {
        title: "Sim İzolasyon Avantajları",
        body: "",
        list: [
          "10+ yıl Bornova ve İzmir saha tecrübesi",
          "Sertifikalı malzeme ve uygulayıcı ekip",
          "Yazılı işçilik garantisi (5–10 yıl, sisteme göre)",
          "Şeffaf, kalem kalem teklif (gizli kalem yok)",
          "Apartman yönetimleri için genel kurul sunum desteği",
          "24 saat içinde ücretsiz keşif",
        ],
      },
      {
        title: "Çalışma Sürecimiz",
        body: "Standart 5 adımlı süreç:",
        list: [
          "Telefon ya da WhatsApp ile talep",
          "Ücretsiz keşif ve teknik rapor",
          "Sözleşmeli, kalem kalem hesaplanmış teklif",
          "Profesyonel uygulama (sertifikalı malzeme + ekip)",
          "Yazılı garanti belgesi teslimi + yıllık bakım",
        ],
      },
      {
        title: "Bornova Müşteri Profilimiz",
        body: "",
        list: [
          "Apartman yönetimleri (toplu çatı/teras yenileme)",
          "Çatı katı dairesi sahipleri (sızıntı çözümü)",
          "Site yönetimleri (otopark/asansör çukuru)",
          "Müstakil ev sahipleri (havuz, teras, banyo)",
          "Ticari mekan / depo sahipleri (zemin kaplama)",
          "Müteahhitler (yeni inşaat temel bohçalama)",
        ],
      },
    ],
    localProjects: [
      { name: "Bornova merkez apartman çatı + teras", location: "Bornova", outcome: "240 m², 4 günde teslim, 8 yıl garanti" },
      { name: "Erzene çatı katı dairesi teras", location: "Bornova / Erzene", outcome: "Sızıntı şikayeti tamamen çözüldü, 110 m²" },
      { name: "Doğanlar site otopark perde duvar", location: "Bornova / Doğanlar", outcome: "Aktif sızıntı 2 günde durduruldu" },
    ],
    faq: [
      {
        q: "Bornova'da hangi mahalleleri kapsıyor hizmetiniz?",
        a: "Bornova merkez, Erzene, Doğanlar, Atatürk, Kazımdirik, Mevlana, İnönü, Çamiçi, Yeşilova, Pınarbaşı dahil tüm mahalleler.",
      },
      {
        q: "Apartman yönetimi olarak nasıl başlayayım?",
        a: "Yönetim kurulu toplantısında konuyu açtıktan sonra bizi arayın. Genel kurul sunumunuz için ücretsiz keşif raporu hazırlıyoruz.",
      },
      {
        q: "Garanti süresi ne kadar?",
        a: "Sisteme göre 5–10 yıl yazılı işçilik garantisi. Polyurea ve cam elyaf takviyeli sistemlerde garanti süresi en uzundur.",
      },
      {
        q: "Acil sızıntıda hızlı müdahale var mı?",
        a: "Evet — Bornova ve çevre ilçelerde 24 saat içinde saha tespiti yapıyoruz. Aktif sızıntıda enjeksiyon ile aynı gün durdurma mümkün.",
      },
      {
        q: "Endüstriyel zemin kaplama da yapıyor musunuz?",
        a: "Evet — Bornova'daki depo, atölye ve ticari mekanlar için epoksi ve poliüretan zemin sistemleri uyguluyoruz.",
      },
    ],
    nearbyDistricts: [
      { label: "Çatı İzolasyon Bornova", slug: "cati-izolasyon-bornova" },
      { label: "Teras İzolasyon Bornova", slug: "teras-izolasyon-bornova" },
    ],
  },
};

export const getDistrictContent = (slug: string): DistrictContent | undefined =>
  DISTRICT_CONTENT[slug];

export const allDistrictSlugs = (): string[] => Object.keys(DISTRICT_CONTENT);
