/**
 * Gerçek saha projeleri — fotoğraf ve videolar public/projects/<slug>/ altında
 * Her dosya: foto-01.jpg ... foto-NN.jpg, video-01.mp4 ... video-NN.mp4
 */

export type ProjectMedia = {
  type: "photo" | "video";
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  photos: string[];
  videos: string[];
};

const mediaPath = (slug: string, name: string) => `/projects/${slug}/${name}`;

const buildPhotos = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) =>
    mediaPath(slug, `foto-${String(i + 1).padStart(2, "0")}.jpg`),
  );

const buildVideos = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) =>
    mediaPath(slug, `video-${String(i + 1).padStart(2, "0")}.mp4`),
  );

export const PROJECTS: Project[] = [
  {
    slug: "perde-beton-xpx-drenaj",
    title: "Perde Beton XPS Drenaj Levhalı İzolasyon Sistemi",
    shortTitle: "Perde Beton XPS Drenaj",
    category: "Perde Beton İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "Bodrum perde duvarlarda toprak suyuna karşı çift katmanlı yalıtım — bitümlü membran üzeri XPS drenaj levhası ile.",
    description:
      "Perde beton üzerinde uygulanan tam koruyuculu sistem: mekanik temizlik, primer, çift kat bitümlü membran, ardından XPS drenaj levhası ile mekanik koruma ve drenaj. Toprak suyuna karşı kalıcı çözüm; bina temellerinde mantar, küf ve nemlenmeyi tamamen önler.",
    highlights: [
      "Çift kat bitümlü membran",
      "XPS drenaj levhası (mekanik koruma)",
      "Detay & köşe çözümleri",
      "Test edilmiş, garantili sistem",
    ],
    photos: buildPhotos("perde-beton-xpx-drenaj", 16),
    videos: buildVideos("perde-beton-xpx-drenaj", 12),
  },
  {
    slug: "soyak-sitesi-parapet-asansor",
    title: "Soyak Sitesi — Parapet, Asansör Kulesi ve Mıcır Altı İzolasyon",
    shortTitle: "Soyak Sitesi — Parapet & Asansör",
    category: "Çatı / Parapet İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "Site genelinde parapet, asansör kulesi çevresi ve mıcır altı katmanlı izolasyon, tamir ve onarım uygulaması.",
    description:
      "Soyak Sitesi'nde teras, parapet duvarları, asansör kulesi çevresi ve mıcır altı bölgelerinde kapsamlı izolasyon ve onarım çalışması. Önce mevcut sistemde tespit edilen sorunlu noktaların tamiri, ardından primer, membran ve koruyucu kaplama sistemleri ile parapet detaylarının çözümü, asansör kulesi çevresinin yalıtımı ve mıcır altı yüzeylerin sızdırmaz hâle getirilmesi.",
    highlights: [
      "Parapet & detay yalıtımı",
      "Asansör kulesi çevresi",
      "Mıcır altı katmanlı sistem",
      "Tamir ve onarım dahil",
    ],
    photos: buildPhotos("soyak-sitesi-parapet-asansor", 9),
    videos: buildVideos("soyak-sitesi-parapet-asansor", 6),
  },
  {
    slug: "gizli-cati-yuruyus-yolu",
    title: "Gizli Çatı, Oluk ve Yürüme Yolu İzolasyon Sistemi",
    shortTitle: "Gizli Çatı / Oluk / Yürüme Yolu",
    category: "Çatı İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "Gizli çatı oluklarında ve yürüme yollarında kullanım yüküne dayanıklı, tam sızdırmaz izolasyon uygulaması.",
    description:
      "Gizli çatılarda en kritik nokta olan oluk ve yürüme yollarında uygulanan profesyonel izolasyon sistemi. Yüzey hazırlığı, primer, membran kaplama ve son kat koruma ile sızıntı, donma ve genleşme problemlerine karşı kalıcı çözüm. Sistem, üzerine yürüme ve servis yüküne uygundur.",
    highlights: [
      "Yürüme yüküne dayanıklı",
      "Oluk detay çözümü",
      "UV ve donma direnci",
      "Yüksek elastikiyet",
    ],
    photos: buildPhotos("gizli-cati-yuruyus-yolu", 3),
    videos: buildVideos("gizli-cati-yuruyus-yolu", 4),
  },
  {
    slug: "macfit-islak-zemin-membran",
    title: "MACFit Spor Salonları — Islak Zemin Membran Uygulaması",
    shortTitle: "MACFit — Islak Zemin Membran",
    category: "Islak Zemin İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "MACFit spor salonlarında ıslak hacimlerde tam sızdırmaz, hijyenik membran sistemi.",
    description:
      "MACFit spor salonu projesinde duş ve ıslak zeminlerde uygulanan hibrit membran sistemi. Sürekli su teması altında çalışan alanlarda; sertifikalı, esnek ve hijyenik bir yalıtım katmanı oluşturuldu. Spor tesislerinin yoğun kullanımı dikkate alınarak yüksek dayanım odaklı malzeme tercih edildi.",
    highlights: [
      "Sürekli su teması altında dayanım",
      "Sertifikalı, hijyenik malzeme",
      "Köşe ve gider detayları",
      "Yoğun kullanıma uygun",
    ],
    photos: buildPhotos("macfit-islak-zemin-membran", 4),
    videos: [],
  },
  {
    slug: "sandvic-panel-su-oluk",
    title: "Sandviç Panel ve Su Oluk Gider İzolasyon Sistemi",
    shortTitle: "Sandviç Panel & Oluk Gider",
    category: "Sandviç Panel / Oluk",
    location: "İzmir",
    year: "2026",
    summary:
      "Sandviç panel çatılarda derz, ek ve oluk gider noktalarında özel izolasyon ve yalıtım uygulaması.",
    description:
      "Sandviç panel çatılarda en problemli noktalar olan ek yerleri, derzler ve oluk-gider bağlantıları için tasarlanmış özel izolasyon sistemi. Yüzey hazırlığı, esnek bant ve sızdırmaz kaplama ile uzun ömürlü, sızıntısız bir çatı detayı.",
    highlights: [
      "Panel ek/derz çözümü",
      "Oluk-gider detayları",
      "Esnek, hava şartlarına dayanıklı",
      "Hızlı uygulama",
    ],
    photos: buildPhotos("sandvic-panel-su-oluk", 2),
    videos: buildVideos("sandvic-panel-su-oluk", 1),
  },
  {
    slug: "seramik-uzeri-yalitim",
    title: "2 Farklı Binada Seramik Üzeri Su Yalıtım Sistemi",
    shortTitle: "Seramik Üzeri Yalıtım",
    category: "Seramik Üstü İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "İki ayrı binada, mevcut seramik kaplamayı sökmeden uygulanan profesyonel su yalıtım sistemi.",
    description:
      "Mevcut seramik kaplamayı sökmeden, doğrudan üzerine uygulanan su yalıtım sistemi. İki farklı binada uygulanan iki farklı sistem ile zemin durumuna göre özelleşmiş çözüm. Uygulama hızı yüksek, mekan kullanımı en az kesintiye uğrar.",
    highlights: [
      "Mevcut seramik sökmeden uygulama",
      "Hızlı uygulama, az kesinti",
      "Bina bazlı özel sistem",
      "Uzun ömürlü kaplama",
    ],
    photos: [],
    videos: buildVideos("seramik-uzeri-yalitim", 2),
  },
  {
    slug: "beton-ustu-cam-elyaf",
    title: "Eski Bina Beton Üstü Cam Elyaf Takviyeli İzolasyon",
    shortTitle: "Beton Üstü Cam Elyaf Takviyeli",
    category: "Beton Üstü İzolasyon",
    location: "İzmir",
    year: "2026",
    summary:
      "Eski binanın beton yüzeyinde cam elyaf takviyeli izolasyon ve yalıtım sistemi.",
    description:
      "Yıpranmış eski beton yüzeyde uygulanan cam elyaf takviyeli izolasyon sistemi. Yüzey hazırlığı, çatlak onarımı, primer, cam elyaf takviyeli kaplama ile yüksek mukavemet ve sızdırmazlık. Eski yapılarda donma-çözülme döngüsüne karşı uzun vadeli koruma.",
    highlights: [
      "Cam elyaf takviye katmanı",
      "Yüksek mekanik mukavemet",
      "Çatlak köprüleme yeteneği",
      "Eski yapı uyumlu",
    ],
    photos: [],
    videos: buildVideos("beton-ustu-cam-elyaf", 2),
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Öne çıkan 6 projeyi anasayfa galerisi için döner — fotoğrafı olanları öncele */
export function getFeaturedProjects(limit = 6): Project[] {
  const withPhoto = PROJECTS.filter((p) => p.photos.length > 0);
  const withoutPhoto = PROJECTS.filter((p) => p.photos.length === 0);
  return [...withPhoto, ...withoutPhoto].slice(0, limit);
}

/** Bir projenin kapak medyasını döner: fotoğraf > video */
export function getCover(p: Project): ProjectMedia {
  if (p.photos.length > 0) return { type: "photo", src: p.photos[0] };
  return { type: "video", src: p.videos[0] };
}
