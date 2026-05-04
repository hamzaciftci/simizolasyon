import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  const lastCrumb = breadcrumb?.split("/").pop()?.trim();

  return (
    <section className="relative bg-gradient-brand text-brand-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="orb -top-32 -right-32 w-[500px] h-[500px] bg-cta/30" />
      <div className="orb -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-glow/40" />

      <div className="relative container-edge py-20 md:py-28">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-white/80 anim-fade">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{lastCrumb}</span>
          </nav>
        )}
        <h1 className="mt-5 font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] anim-fade-up text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-3xl anim-fade-up" style={{ animationDelay: "0.15s" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
