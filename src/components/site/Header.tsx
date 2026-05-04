import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MapPin, Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Anasayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projelerimiz", label: "Projelerimiz" },
  { to: "/blog", label: "Blog" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar — brand blue gradient */}
      <div className="hidden md:block bg-gradient-brand text-brand-foreground">
        <div className="container-edge flex items-center justify-between h-10 text-[12.5px] font-medium">
          <div className="flex items-center gap-2 opacity-95 truncate">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{SITE.address}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${SITE.phone1Tel}`} className="flex items-center gap-1.5 hover:text-cta-soft transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{SITE.phone1}</span>
            </a>
            <a href={`tel:${SITE.phone2Tel}`} className="flex items-center gap-1.5 hover:text-cta-soft transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{SITE.phone2}</span>
            </a>
            <a href={`tel:${SITE.phone3Tel}`} className="flex items-center gap-1.5 hover:text-cta-soft transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{SITE.phone3}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar — white, glassy on scroll */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
            : "bg-white border-b border-slate-100",
        )}
      >
        <div className="container-edge flex items-center justify-between h-20 md:h-24 lg:h-28">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img src={logo} alt="SİM İZOLASYON" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-transform group-hover:scale-105" width={240} height={80} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="relative px-4 py-2.5 rounded-full text-[14px] font-semibold text-slate-700 hover:text-brand transition-colors group"
                activeProps={{ className: "relative px-4 py-2.5 rounded-full text-[14px] font-semibold text-brand bg-brand-soft" }}
              >
                {item.label}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-0 bg-cta rounded-full group-hover:w-6 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-2.5 text-[13px] font-semibold hover:bg-whatsapp-deep hover:scale-[1.02] transition-all shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone1Tel}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-cta text-cta-foreground px-6 py-2.5 text-[13px] font-semibold shadow-cta hover:scale-[1.03] transition-transform group"
            >
              <Phone className="h-4 w-4" />
              Hemen Ara
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2.5 -mr-1 rounded-full hover:bg-surface transition-colors"
              aria-label="Menü"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-20 md:top-24 z-40 bg-white anim-fade overflow-y-auto">
          <div className="container-edge py-8">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold text-slate-700 hover:bg-surface hover:text-brand transition-colors"
                  activeProps={{ className: "flex items-center justify-between px-5 py-4 rounded-2xl text-base font-semibold text-brand bg-brand-soft" }}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </Link>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={`tel:${SITE.phone1Tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta text-cta-foreground px-5 py-4 text-sm font-semibold shadow-cta"
              >
                <Phone className="h-4 w-4" /> Hemen Ara
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-4 text-sm font-semibold shadow-md"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-surface space-y-2 text-sm">
              <p className="label-mono text-slate-500">İletişim</p>
              <a href={`tel:${SITE.phone1Tel}`} className="block text-ink font-semibold hover:text-brand">{SITE.phone1}</a>
              <a href={`tel:${SITE.phone2Tel}`} className="block text-ink font-semibold hover:text-brand">{SITE.phone2}</a>
              <a href={`tel:${SITE.phone3Tel}`} className="block text-ink font-semibold hover:text-brand">{SITE.phone3}</a>
              <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-200">{SITE.address}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
