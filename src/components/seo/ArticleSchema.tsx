import { SITE } from "@/lib/site";

type ArticleSchemaProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string; // YYYY-MM-DD
  dateModified?: string;
  author?: string;
};

export function ArticleSchema({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = "Sim İzolasyon",
}: ArticleSchemaProps) {
  const url = `${SITE.domain}/blog/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    image: image ? [image] : [`${SITE.domain}/og-cover.jpg`],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: SITE.domain,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.domain}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
