import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Sparkles, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { Process } from "@/components/sections/Process";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "İzolasyon Hizmetleri İzmir | 21 Uzmanlık — Sim İzolasyon" },
      {
        name: "description",
        content:
          "Çatı, teras, havuz, temel, otopark, endüstriyel zemin: İzmir'de 21 farklı izolasyon ve su yalıtım hizmeti. Profesyonel ekip, garantili işçilik.",
      },
      { name: "keywords", content: "izolasyon hizmetleri izmir, izolasyon firması, su yalıtımı izmir, çatı izolasyon, teras izolasyon, havuz izolasyon, epoksi zemin, polyurea sprey" },
      { property: "og:title", content: "İzolasyon Hizmetleri İzmir | Sim İzolasyon" },
      { property: "og:description", content: "İzmir'de 21 farklı izolasyon ve su yalıtım hizmeti." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/hizmetler` },
    ],
    links: [
      { rel: "canonical", href: `${SITE.domain}/hizmetler` },
    ],
  }),
  component: HizmetlerPage,
});

function HizmetlerPage() {
  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: "Anasayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
        ]}
      />

      <PageHeader
        title="İzolasyon ve Su Yalıtım Hizmetleri"
        subtitle="İzmir genelinde çatıdan temele, havuzdan endüstriyel zemine — 21 farklı uzmanlık alanında profesyonel uygulama."
        breadcrumb="Anasayfa / Hizmetler"
      />

      {/* Intro */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-cta-soft px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cta" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-cta-deep">Hizmetlerimiz</span>
              </div>
              <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
                İzolasyonun her sınıfında — <span className="text-gradient-brand">tek bir el</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Çatı membranından polyurea sprey kaplamaya, otopark izolasyonundan
                endüstriyel epoksi zemine kadar — su yalıtımının her sınıfında doğrudan saha uygulaması yapıyoruz.
                Taşeron yok, alt yüklenici yok.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service grid */}
      <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {SERVICES.map((s, i) => {
              const isFeatured = i === 0 || i === 7 || i === 14;
              return (
                <Link
                  key={s.slug}
                  to="/hizmetler/$slug"
                  params={{ slug: s.slug }}
                  className={`group relative rounded-3xl p-6 transition-all hover:-translate-y-1 flex flex-col overflow-hidden ${
                    isFeatured
                      ? "bg-gradient-brand text-white shadow-brand"
                      : "bg-white border border-slate-200 hover:border-brand/30 hover:shadow-lg"
                  }`}
                >
                  {isFeatured && <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />}
                  {!isFeatured && (
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cta/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  <div className="relative">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isFeatured
                        ? "bg-white/15 text-white shadow-md"
                        : "bg-brand-soft text-brand group-hover:bg-gradient-cta group-hover:text-white"
                    }`}>
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className={`mt-5 font-display font-semibold text-[18px] leading-snug tracking-tight ${isFeatured ? "text-white" : "text-ink"}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-2 text-[13.5px] leading-relaxed flex-1 ${isFeatured ? "text-white/85" : "text-slate-600"}`}>
                      {s.short}
                    </p>
                    <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${isFeatured ? "text-cta-soft" : "text-brand group-hover:text-cta"}`}>
                      Detay & Teklif
                      <ArrowUpRight className="h-3.5 w-3.5 ml-0.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-14 rounded-3xl bg-white border border-slate-200 p-7 md:p-9 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
                Listede aradığınızı bulamadınız mı?
              </h3>
              <p className="mt-2 text-slate-600">
                Çoğu özel proje, yapı bazlı çözüm gerektirir. Bizi arayın, birlikte çözelim.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={`tel:${SITE.phone1Tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-cta-foreground px-6 py-3.5 text-sm font-semibold shadow-cta hover:scale-[1.03] transition-transform"
              >
                <Phone className="h-4 w-4" /> Hemen Ara
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-6 py-3.5 text-sm font-semibold shadow-md hover:bg-whatsapp-deep transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <CtaBand />
    </SiteLayout>
  );
}
