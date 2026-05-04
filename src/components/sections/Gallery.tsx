import { ArrowUpRight, Sparkles, MapPin, Calendar, Image as ImageIcon, Film } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getFeaturedProjects, getCover } from "@/lib/projects";

const SHAPES = [
  "lg:col-span-7 lg:row-span-2 aspect-[4/5] lg:aspect-auto",
  "lg:col-span-5 aspect-[4/3]",
  "lg:col-span-5 aspect-[4/3]",
  "lg:col-span-4 aspect-[4/5]",
  "lg:col-span-8 aspect-[16/9]",
  "lg:col-span-12 aspect-[16/7]",
];

export function Gallery({ hideHeader }: { hideHeader?: boolean }) {
  const featured = getFeaturedProjects(6);

  return (
    <section id="projeler" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative container-edge">
        {!hideHeader && (
          <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-16 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-cta-soft px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cta" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-cta-deep">Projelerimiz</span>
              </div>
              <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
                Tamamladığımız <span className="text-gradient-brand">saha çalışmaları</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-slate-600 leading-relaxed">
                Son dönemde sahada uyguladığımız işlerden bir kesit. Her projenin detay sayfasında fotoğraflar ve uygulama videoları.
              </p>
              <Link
                to="/projelerimiz"
                className="mt-5 inline-flex items-center gap-1.5 text-brand font-semibold link-rule"
              >
                Tüm projeler <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          {featured.map((p, i) => {
            const cover = getCover(p);
            const shape = SHAPES[i] ?? "lg:col-span-4 aspect-[4/5]";
            const photoCount = p.photos.length;
            const videoCount = p.videos.length;
            return (
              <Link
                key={p.slug}
                to="/projelerimiz/$slug"
                params={{ slug: p.slug }}
                className={`group relative rounded-3xl overflow-hidden shadow-elev cursor-pointer ${shape}`}
              >
                {cover.type === "photo" ? (
                  <img
                    src={cover.src}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={cover.src}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-2">
                  <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {p.category}
                  </span>
                  <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {p.year}
                  </span>
                </div>

                <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <p className="font-display font-semibold text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight">
                    {p.shortTitle}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px] font-medium text-white/85">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </span>
                    {photoCount > 0 && (
                      <span className="inline-flex items-center gap-1.5">
                        <ImageIcon className="h-3.5 w-3.5" /> {photoCount}
                      </span>
                    )}
                    {videoCount > 0 && (
                      <span className="inline-flex items-center gap-1.5">
                        <Film className="h-3.5 w-3.5" /> {videoCount}
                      </span>
                    )}
                  </div>
                </figcaption>

                <div className="absolute top-5 right-5 mt-9 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500">
                  <div className="bg-cta text-cta-foreground rounded-full p-2.5 shadow-cta">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
