import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar,
  Phone,
  MessageCircle,
  Image as ImageIcon,
  Film,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PROJECTS, getProject } from "@/lib/projects";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/projelerimiz_/$slug")({
  beforeLoad: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
  },
  loader: ({ params }) => {
    const project = getProject(params.slug)!;
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) return { meta: [] };
    return {
      meta: [
        { title: `${project.title} | SİM İZOLASYON` },
        { name: "description", content: project.summary },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.summary },
        ...(project.photos[0] ? [{ property: "og:image", content: project.photos[0] }] : []),
      ],
    };
  },
  component: ProjeDetayPage,
});

function ProjeDetayPage() {
  const { project } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // İlişkili projeler
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  // Hero medyası
  const heroPhoto = project.photos[0];
  const heroVideo = project.videos[0];

  // Tüm fotoğraflar (lightbox için)
  const photos = project.photos;

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const nextPhoto = () => setLightbox((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <SiteLayout>
      {/* Hero — büyük cinematic foto/video */}
      <section className="relative bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroPhoto ? (
            <img
              src={heroPhoto}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover anim-slow-zoom"
            />
          ) : heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onVolumeChange={(e) => { e.currentTarget.muted = true; }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="orb absolute -top-32 -left-32 w-[400px] h-[400px] bg-brand-glow/30" />
        <div className="orb absolute bottom-0 right-0 w-[500px] h-[500px] bg-cta/20" />

        <div className="relative container-edge pt-12 md:pt-16 pb-24 md:pb-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-white/75 anim-fade">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/projelerimiz" className="hover:text-white transition-colors">Projelerimiz</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white truncate max-w-[200px]">{project.shortTitle}</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {project.category}
              </span>
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3" /> {project.location}
              </span>
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                <Calendar className="h-3 w-3" /> {project.year}
              </span>
              {project.photos.length > 0 && (
                <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                  <ImageIcon className="h-3 w-3" /> {project.photos.length} fotoğraf
                </span>
              )}
              {project.videos.length > 0 && (
                <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                  <Film className="h-3 w-3" /> {project.videos.length} video
                </span>
              )}
            </div>

            <h1 className="mt-6 font-display font-semibold text-4xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight text-balance">
              {project.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone1Tel}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform"
              >
                <Phone className="h-5 w-5" />
                Benzer Proje İçin Ara
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={waLink(`Merhaba, "${project.title}" ile ilgili teklif almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:bg-whatsapp-deep transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Açıklama + highlights */}
      <section className="relative bg-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                Uygulama Detayı
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{project.description}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-surface border border-slate-200 p-7 md:p-8">
                <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">Sistemde Öne Çıkanlar</p>
                <ul className="mt-5 space-y-3.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fotoğraf Galerisi */}
      {photos.length > 0 && (
        <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh-blue opacity-30 pointer-events-none" />
          <div className="relative container-edge">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">§ Fotoğraflar</p>
                <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                  Saha kayıtları — {photos.length} fotoğraf
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {photos.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightbox(i)}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-elev transition-all"
                >
                  <img
                    src={src}
                    alt={`${project.shortTitle} — Fotoğraf ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>#{String(i + 1).padStart(2, "0")}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videolar */}
      {project.videos.length > 0 && (
        <section className="relative bg-white py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
          <div className="relative container-edge">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">§ Uygulama Videoları</p>
              <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                Saha videoları — {project.videos.length} kayıt
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {project.videos.map((src, i) => (
                <div
                  key={src}
                  className="group relative rounded-2xl overflow-hidden bg-ink aspect-[9/16] shadow-elev"
                >
                  <video
                    src={src}
                    controls
                    muted
                    preload="metadata"
                    playsInline
                    onVolumeChange={(e) => { e.currentTarget.muted = true; }}
                    controlsList="nodownload noremoteplayback"
                    className="absolute inset-0 h-full w-full object-cover bg-ink"
                  />
                  <div className="absolute top-3 left-3 glass-dark rounded-full px-2.5 py-1 text-[10px] font-mono text-white uppercase tracking-wider pointer-events-none">
                    Video {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diğer projeler */}
      <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
        <div className="relative container-edge">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">§ Diğer Projeler</p>
              <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                Diğer saha çalışmaları
              </h2>
            </div>
            <Link
              to="/projelerimiz"
              className="hidden sm:inline-flex items-center gap-1.5 text-brand font-semibold link-rule"
            >
              Tüm projeler <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {otherProjects.map((p) => {
              const cover = p.photos[0] ?? null;
              const coverVideo = p.videos[0] ?? null;
              return (
                <Link
                  key={p.slug}
                  to="/projelerimiz/$slug"
                  params={{ slug: p.slug }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elev"
                >
                  {cover ? (
                    <img src={cover} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  ) : coverVideo ? (
                    <video src={coverVideo} muted loop playsInline autoPlay preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent opacity-90" />
                  <div className="absolute top-5 left-5 right-5">
                    <span className="glass-dark rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-display font-semibold text-xl md:text-2xl leading-tight tracking-tight">{p.shortTitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/projelerimiz"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-semibold hover:bg-brand transition-colors"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Tüm projelere dön
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && photos[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 anim-fade"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Kapat"
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Önceki"
            className="absolute left-3 md:left-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Sonraki"
            className="absolute right-3 md:right-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <img
            src={photos[lightbox]}
            alt={`${project.shortTitle} — ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-2xl shadow-deep"
          />
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 glass-dark text-white text-xs font-mono px-4 py-2 rounded-full">
            {lightbox + 1} / {photos.length} — {project.shortTitle}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
