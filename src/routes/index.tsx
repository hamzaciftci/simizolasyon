import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { CtaBand } from "@/components/sections/CtaBand";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sim İzolasyon · İzmir Profesyonel İzolasyon ve Su Yalıtım Hizmetleri" },
      {
        name: "description",
        content:
          "İzmir'de çatı, teras, havuz, temel ve endüstriyel zemin için profesyonel izolasyon ve su yalıtım çözümleri. 10+ yıllık saha tecrübesi, yazılı işçilik garantisi, ücretsiz keşif.",
      },
      { property: "og:title", content: "Sim İzolasyon · İzmir İzolasyon ve Su Yalıtımı" },
      {
        property: "og:description",
        content:
          "Çatıdan temele, havuzdan otoparka kadar kalıcı izolasyon hizmetleri. Ücretsiz keşif, profesyonel uygulama, yazılı garanti.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <LocalBusinessSchema />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <CtaBand />
      <Faq />
      <Contact />
    </SiteLayout>
  );
}
