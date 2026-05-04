import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const FOOTER_NAV = [
  { to: "/", label: "Anasayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projelerimiz", label: "Projelerimiz" },
  { to: "/blog", label: "Blog" },
  { to: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-brand text-brand-foreground mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="orb -top-40 -left-40 w-[500px] h-[500px] bg-cta/15" />
      <div className="orb -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-glow/30" />

      <div className="relative container-edge pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white/95 inline-block rounded-2xl p-3 shadow-lg">
              <img src={logo} alt="SİM İZOLASYON" className="h-14 w-auto" width={180} height={56} />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              İzmir ve çevresinde profesyonel izolasyon, su yalıtımı ve endüstriyel
              kaplama hizmetleri. Garantili işçilik, kalıcı çözümler.
            </p>
            <div className="flex gap-2 mt-5">
              <a href="#" aria-label="Facebook" className="p-2.5 rounded-xl glass-dark hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-xl glass-dark hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2.5 rounded-xl glass-dark hover:bg-white/20 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Kurumsal</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/80 hover:text-white inline-flex items-center gap-1.5 group transition-colors">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">Öne Çıkan Hizmetler</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/hizmetler/$slug"
                    params={{ slug: s.slug }}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">İletişim</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-white/85">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-cta" />
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone1Tel}`} className="flex gap-3 text-white/85 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-cta" />
                  <span className="font-semibold">{SITE.phone1}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone2Tel}`} className="flex gap-3 text-white/85 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-cta" />
                  <span className="font-semibold">{SITE.phone2}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone3Tel}`} className="flex gap-3 text-white/85 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-cta" />
                  <span className="font-semibold">{SITE.phone3}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex gap-3 text-white/85 hover:text-white transition-colors break-all">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-cta" />
                  <span>{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/15 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} Sim İzolasyon. Tüm hakları saklıdır.</p>
          <p>İzmir İzolasyon ve Su Yalıtımı Hizmetleri</p>
        </div>
      </div>
    </footer>
  );
}
