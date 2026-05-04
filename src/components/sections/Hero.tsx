import { Phone, MessageCircle, ClipboardCheck, ShieldCheck, Users, Wrench, Zap, ArrowRight, MapPin } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import heroImg from "@/assets/hero.jpg";

const BADGES = [
  { icon: Users, label: "Uzman Ekip", sub: "10+ yıl tecrübe" },
  { icon: ShieldCheck, label: "Garantili İşçilik", sub: "Yazılı garanti" },
  { icon: Zap, label: "Hızlı Keşif", sub: "1–3 gün içinde" },
  { icon: Wrench, label: "Profesyonel Uygulama", sub: "Sertifikalı malzeme" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="İzolasyon uygulaması"
          className="h-full w-full object-cover anim-slow-zoom"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      {/* Decorative orbs */}
      <div className="orb absolute -top-32 -left-32 w-[400px] h-[400px] bg-brand-glow/30" />
      <div className="orb absolute bottom-0 right-0 w-[500px] h-[500px] bg-cta/20" />

      <div className="relative container-edge pt-16 md:pt-24 pb-24 md:pb-32 lg:pb-40 text-brand-foreground">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 anim-fade">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cta animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
            </span>
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-[12px] font-semibold uppercase tracking-wider">İzmir / Bayraklı</span>
            <span className="text-[11px] opacity-70 hidden sm:inline">· 7/24 açık</span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 font-display font-semibold text-[40px] sm:text-5xl md:text-6xl lg:text-[78px] xl:text-[88px] leading-[1.02] tracking-[-0.025em] text-balance">
            <span className="block anim-fade-up" style={{ animationDelay: "0.05s" }}>İzmir Profesyonel</span>
            <span className="block anim-fade-up text-gradient-cta" style={{ animationDelay: "0.18s" }}>
              İzolasyon ve Su Yalıtım
            </span>
            <span className="block anim-fade-up" style={{ animationDelay: "0.30s" }}>Çözümleri</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed anim-fade-up" style={{ animationDelay: "0.5s" }}>
            Çatıdan temele, havuzdan otoparka kadar kalıcı izolasyon hizmetleri.{" "}
            <span className="text-white font-semibold">10+ yıllık tecrübe</span>,
            garantili işçilik ve uzman ekiple binanızı koruyoruz.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap gap-3 anim-fade-up" style={{ animationDelay: "0.6s" }}>
            <a
              href={`tel:${SITE.phone1Tel}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform"
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:scale-[1.04] hover:bg-whatsapp-deep transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Teklif Al
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2.5 rounded-full glass-dark text-white px-7 py-4 text-[15px] font-semibold hover:bg-white/20 transition-colors"
            >
              <ClipboardCheck className="h-5 w-5" />
              Ücretsiz Keşif
            </a>
          </div>

          {/* Trust badges — modern glass cards */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl anim-fade-up" style={{ animationDelay: "0.75s" }}>
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="group glass-dark rounded-2xl p-4 hover:bg-white/15 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cta/90 text-cta-foreground flex items-center justify-center shrink-0 shadow-cta">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{b.label}</p>
                    <p className="text-[11px] text-white/70 mt-0.5">{b.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave / fade transition to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/0 to-white" />
    </section>
  );
}
