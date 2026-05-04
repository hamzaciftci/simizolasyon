import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container-edge">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-brand-foreground p-9 md:p-14 shadow-brand">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="orb -top-32 -right-32 w-[400px] h-[400px] bg-cta/40" />
          <div className="orb -bottom-32 -left-32 w-[400px] h-[400px] bg-brand-glow/40" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                <span className="text-[12px] font-bold uppercase tracking-wider">Ücretsiz Keşif</span>
              </span>
              <h3 className="mt-5 font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
                Projeniz için ücretsiz <span className="text-gradient-cta">keşif</span> yapalım
              </h3>
              <p className="mt-4 text-lg text-white/85 max-w-md">
                Uzman ekibimiz lokasyonunuzda inceleme yapsın, size en uygun çözümü ve net fiyatı sunsun.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`tel:${SITE.phone1Tel}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform"
              >
                <Phone className="h-5 w-5" /> Hemen Ara
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:bg-whatsapp-deep hover:scale-[1.04] transition-all"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
