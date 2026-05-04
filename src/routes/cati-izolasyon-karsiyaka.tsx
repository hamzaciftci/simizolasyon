import { createFileRoute } from "@tanstack/react-router";
import { DistrictLandingPage } from "@/components/site/DistrictLandingPage";
import { DISTRICT_CONTENT } from "@/lib/districtContent";
import { SITE } from "@/lib/site";

const content = DISTRICT_CONTENT["cati-izolasyon-karsiyaka"];

export const Route = createFileRoute("/cati-izolasyon-karsiyaka")({
  head: () => ({
    meta: [
      { title: content.seo.title },
      { name: "description", content: content.seo.description },
      { name: "keywords", content: [content.primaryKeyword, ...content.lsiKeywords].join(", ") },
      { property: "og:title", content: content.seo.title },
      { property: "og:description", content: content.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/${content.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE.domain}/${content.slug}` },
    ],
  }),
  component: () => <DistrictLandingPage content={content} />,
});
