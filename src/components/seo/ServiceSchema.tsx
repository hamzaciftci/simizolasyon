import { SITE } from "@/lib/site";

type ServiceSchemaProps = {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
  category?: string;
};

export function ServiceSchema({ slug, name, serviceType, description, category = "Su Yalıtımı / İzolasyon" }: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.domain}/hizmetler/${slug}/#service`,
    serviceType,
    name,
    description,
    provider: { "@id": `${SITE.domain}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "İzmir" },
      { "@type": "AdministrativeArea", name: "Bayraklı" },
      { "@type": "AdministrativeArea", name: "Karşıyaka" },
      { "@type": "AdministrativeArea", name: "Bornova" },
      { "@type": "AdministrativeArea", name: "Çiğli" },
      { "@type": "AdministrativeArea", name: "Konak" },
      { "@type": "AdministrativeArea", name: "Buca" },
      { "@type": "AdministrativeArea", name: "Çeşme" },
      { "@type": "AdministrativeArea", name: "Urla" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: ["Konut sahibi", "Apartman yöneticisi", "İnşaat firması", "Site yönetimi", "Fabrika sahibi"],
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      url: `${SITE.domain}/hizmetler/${slug}`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "TRY",
        description: "Başlangıç fiyatı keşif sonrası belirlenir.",
      },
    },
    category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
