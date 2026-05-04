import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Clock, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { SITE } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | İzolasyon ve Su Yalıtımı Rehberleri — Sim İzolasyon" },
      {
        name: "description",
        content:
          "İzmir izolasyon, su yalıtımı, çatı, teras, havuz, epoksi ve polyurea hakkında uzman rehberler. 22 detaylı yazıyla saha bilgisi.",
      },
      { property: "og:title", content: "Blog | Sim İzolasyon" },
      { property: "og:description", content: "İzolasyon ve su yalıtımı uzman rehberleri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/blog` },
    ],
    links: [
      { rel: "canonical", href: `${SITE.domain}/blog` },
    ],
  }),
  component: BlogPage,
});

function formatDate(d: string) {
  const dt = new Date(d);
  return dt.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;

  return (
    <SiteLayout>
      <BreadcrumbSchema
        items={[
          { name: "Anasayfa", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <PageHeader
        title="Blog"
        subtitle="İzolasyon ve su yalıtımı hakkında uzman rehberler — saha tecrübesinden, gerçek vakalarla."
        breadcrumb="Anasayfa / Blog"
      />

      {/* Intro + featured */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-cta-soft px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cta" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-cta-deep">Saha Rehberleri</span>
              </div>
              <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
                Konuşan teori değil — <span className="text-gradient-brand">tamamlanan saha</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                10+ yıllık saha tecrübemizden derlenmiş {BLOG_POSTS.length} detaylı rehber.
                Çatıdan temele, polyurea'dan epoksiye; izolasyon dünyasını anlatıyoruz.
              </p>
            </div>
          </div>

          {/* Featured */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block relative rounded-3xl overflow-hidden bg-gradient-brand text-white shadow-brand p-8 md:p-12 hover:shadow-deep transition-all"
          >
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="orb -top-32 -right-32 w-[400px] h-[400px] bg-cta/30" />

            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cta" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Öne Çıkan</span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance">
                {featured.title}
              </h3>
              <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[12.5px] font-medium text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime} dk okuma
                </span>
                <span className="px-2.5 py-1 rounded-full glass-dark">{featured.category}</span>
              </div>
              <div className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-cta-soft group-hover:gap-3 transition-all">
                Yazıyı oku
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
        <div className="relative container-edge">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">§ Tüm Yazılar</p>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
              {rest.length} yazı daha
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="aspect-[16/10] bg-gradient-brand relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p className="font-display font-semibold text-xl md:text-2xl text-white text-balance leading-tight line-clamp-4">
                      {p.title}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-cta text-white px-2.5 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[14px] text-slate-600 leading-relaxed flex-1 line-clamp-3">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-[11.5px] font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {formatDate(p.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3 w-3" /> {p.readTime} dk
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:text-cta transition-colors">
                    Devamını oku <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
