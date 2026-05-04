import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";

export function Services({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section id="hizmetler" className="relative bg-surface py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 pointer-events-none" />

      <div className="relative container-edge">
        {!hideHeader && (
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-cta-soft px-3.5 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cta" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-cta-deep">Hizmetlerimiz</span>
            </div>
            <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
              İzolasyon ve su yalıtımının <span className="text-gradient-brand">tüm çözümleri</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              21 farklı uzmanlık alanında profesyonel uygulama, kaliteli malzeme ve garantili işçilik.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((s, i) => {
            // Featured cards: every 7th item highlighted
            const isFeatured = i === 0 || i === 7 || i === 14;
            return (
              <Link
                key={s.slug}
                to="/hizmetler/$slug"
                params={{ slug: s.slug }}
                className={`group relative rounded-3xl p-6 transition-all hover:-translate-y-1 flex flex-col overflow-hidden ${
                  isFeatured
                    ? "bg-gradient-brand text-brand-foreground shadow-brand"
                    : "bg-white border border-slate-200 hover:border-brand/30 hover:shadow-lg"
                }`}
              >
                {/* Subtle background pattern on featured */}
                {isFeatured && (
                  <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
                )}
                {/* Hover glow on white cards */}
                {!isFeatured && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cta/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative">
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                      isFeatured
                        ? "bg-white/15 text-white shadow-md"
                        : "bg-brand-soft text-brand group-hover:bg-gradient-cta group-hover:text-white"
                    }`}
                  >
                    <s.icon className="h-6 w-6" />
                  </div>

                  <h3 className={`mt-5 font-display font-semibold text-[18px] leading-snug tracking-tight ${isFeatured ? "text-white" : "text-ink"}`}>
                    {s.title}
                  </h3>
                  <p className={`mt-2 text-[13.5px] leading-relaxed flex-1 ${isFeatured ? "text-white/85" : "text-slate-600"}`}>
                    {s.short}
                  </p>

                  <div
                    className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${
                      isFeatured ? "text-cta-soft" : "text-brand group-hover:text-cta"
                    }`}
                  >
                    Detay & Teklif
                    <ArrowRight className="h-3.5 w-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
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
              WhatsApp Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
