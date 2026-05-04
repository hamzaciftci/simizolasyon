import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim · Sim İzolasyon — İzmir İzolasyon Firması" },
      {
        name: "description",
        content:
          "İzmir Bayraklı'dayız. Ücretsiz keşif ve teklif için hemen iletişime geçin: 0534 623 49 62 — 0534 746 56 62.",
      },
      { property: "og:title", content: "İletişim · Sim İzolasyon" },
      { property: "og:description", content: "Telefon, WhatsApp ve adres bilgilerimiz." },
    ],
  }),
  component: IletisimPage,
});

function IletisimPage() {
  return (
    <SiteLayout>
      <PageHeader
        title="İletişim"
        subtitle="Ücretsiz keşif ve teklif için bize ulaşın — talebinizi 30 dakika içinde geri dönüyoruz."
        breadcrumb="Anasayfa / İletişim"
      />
      <Contact />
    </SiteLayout>
  );
}
