import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { About } from "@/components/sections/About";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda · Sim İzolasyon — İzmir İzolasyon Firması" },
      {
        name: "description",
        content:
          "10+ yıllık saha tecrübemizle İzmir'de izolasyon, su yalıtımı ve endüstriyel kaplama çözümleri. Aynı çekirdek ekip, sertifikalı malzeme, yazılı garanti.",
      },
      { property: "og:title", content: "Hakkımızda · Sim İzolasyon" },
      { property: "og:description", content: "İzmir'in güvenilir izolasyon firması. Kurumsal kalite, profesyonel uygulama." },
    ],
  }),
  component: HakkimizdaPage,
});

function HakkimizdaPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="Hakkımızda"
        subtitle="On yılı aşkın saha tecrübesiyle İzmir merkezli güvenilir izolasyon çözümleri sunuyoruz."
        breadcrumb="Anasayfa / Hakkımızda"
      />
      <About />
      <WhyUs />
      <Process />
      <CtaBand />
    </SiteLayout>
  );
}
