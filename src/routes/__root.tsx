import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-brand text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="orb -top-32 -left-32 w-[500px] h-[500px] bg-cta/30" />
      <div className="orb -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-glow/40" />
      <div className="container-edge relative max-w-2xl text-center mx-auto">
        <span className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
          Hata 404
        </span>
        <h1 className="mt-6 font-display font-semibold text-[18vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] tracking-tight text-gradient-cta">
          404
        </h1>
        <p className="mt-4 font-display font-semibold text-3xl md:text-4xl text-white">
          Sayfa bulunamadı.
        </p>
        <p className="mt-4 max-w-md mx-auto text-base text-white/80 leading-relaxed">
          Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Anasayfaya dönüp aradığınızı bulalım.
        </p>
        <Link
          to="/"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-sm font-semibold shadow-cta hover:scale-[1.04] transition-transform"
        >
          Anasayfaya Dön
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sim İzolasyon | İzmir İzolasyon ve Su Yalıtımı" },
      {
        name: "description",
        content:
          "İzmir'de profesyonel izolasyon, su yalıtımı ve endüstriyel zemin uygulamaları. 10+ yıl tecrübe, garantili işçilik, ücretsiz keşif. Hemen arayın.",
      },
      { name: "author", content: "Sim İzolasyon" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "language", content: "tr" },
      { name: "geo.region", content: "TR-35" },
      { name: "geo.placename", content: "İzmir" },
      { name: "geo.position", content: "38.4631;27.1813" },
      { name: "ICBM", content: "38.4631, 27.1813" },

      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Sim İzolasyon" },
      { property: "og:title", content: "Sim İzolasyon | İzmir İzolasyon ve Su Yalıtımı" },
      { property: "og:description", content: "İzmir'de 10+ yıl tecrübeyle profesyonel izolasyon ve su yalıtım hizmetleri." },
      { property: "og:url", content: "https://www.simizolasyon.com.tr/" },
      { property: "og:image", content: "https://www.simizolasyon.com.tr/og-cover.jpg" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sim İzolasyon | İzmir İzolasyon" },
      { name: "twitter:description", content: "İzmir'de profesyonel izolasyon ve su yalıtım çözümleri." },
      { name: "twitter:image", content: "https://www.simizolasyon.com.tr/og-cover.jpg" },

      { name: "theme-color", content: "#1e40af" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster position="top-right" richColors />
    </>
  );
}
