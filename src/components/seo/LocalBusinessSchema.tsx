import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}/#localbusiness`,
    name: SITE.name,
    alternateName: "Sim İzolasyon",
    description:
      "İzmir Bayraklı merkezli profesyonel izolasyon, su yalıtımı ve endüstriyel zemin kaplama firması. Çatı, teras, havuz, otopark ve endüstriyel zemin uygulamaları.",
    url: SITE.domain,
    logo: `${SITE.domain}/logo.png`,
    image: [
      `${SITE.domain}/og-cover.jpg`,
      `${SITE.domain}/projects/perde-beton-xpx-drenaj/foto-01.jpg`,
      `${SITE.domain}/projects/soyak-sitesi-parapet-asansor/foto-01.jpg`,
    ],
    telephone: [SITE.phone1Tel, SITE.phone2Tel, SITE.phone3Tel],
    email: SITE.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yamanlar Mah. Kubilay Cad. No: 233 C",
      addressLocality: "Bayraklı",
      addressRegion: "İzmir",
      postalCode: "35040",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.4631,
      longitude: 27.1813,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "İzmir" },
      { "@type": "AdministrativeArea", name: "Bayraklı" },
      { "@type": "AdministrativeArea", name: "Karşıyaka" },
      { "@type": "AdministrativeArea", name: "Bornova" },
      { "@type": "AdministrativeArea", name: "Çiğli" },
      { "@type": "AdministrativeArea", name: "Konak" },
      { "@type": "AdministrativeArea", name: "Buca" },
      { "@type": "AdministrativeArea", name: "Gaziemir" },
      { "@type": "AdministrativeArea", name: "Narlıdere" },
      { "@type": "AdministrativeArea", name: "Balçova" },
      { "@type": "AdministrativeArea", name: "Çeşme" },
      { "@type": "AdministrativeArea", name: "Urla" },
      { "@type": "AdministrativeArea", name: "Foça" },
      { "@type": "AdministrativeArea", name: "Aliağa" },
      { "@type": "AdministrativeArea", name: "Menemen" },
      { "@type": "AdministrativeArea", name: "Torbalı" },
    ],
    knowsAbout: [
      "Çatı İzolasyonu",
      "Teras İzolasyonu",
      "Havuz İzolasyonu",
      "Polyurea Sprey Kaplama",
      "Epoksi Zemin Kaplama",
      "Endüstriyel Zemin Kaplama",
      "Bitümlü Membran",
      "Poliüretan İzolasyon",
      "Su Yalıtımı",
      "Cam Elyaf Takviyeli Kaplama",
      "Enjeksiyon Yalıtım",
      "Perde Beton İzolasyon",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "İzolasyon Hizmetleri",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${SITE.domain}/hizmetler/${s.slug}`,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/simizolasyon",
      "https://www.instagram.com/simizolasyon",
      "https://g.page/simizolasyon",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
