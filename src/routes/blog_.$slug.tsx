import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Lightbulb,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE, waLink } from "@/lib/site";
import { BLOG_POSTS, getBlogPost, getRelatedBlogPosts, type ContentBlock } from "@/lib/blogPosts";
import { SERVICES } from "@/lib/services";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const Route = createFileRoute("/blog_/$slug")({
  beforeLoad: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
  },
  loader: ({ params }) => ({ post: getBlogPost(params.slug)! }),
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { post } = loaderData;
    return {
      meta: [
        { title: post.seo.title },
        { name: "description", content: post.seo.description },
        { name: "keywords", content: post.primaryKeyword },
        { property: "og:title", content: post.seo.title },
        { property: "og:description", content: post.seo.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE.domain}/blog/${post.slug}` },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `${SITE.domain}/blog/${post.slug}` },
      ],
    };
  },
  component: BlogDetailPage,
});

function formatDate(d: string) {
  const dt = new Date(d);
  return dt.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={idx} className="text-[16.5px] md:text-[17px] text-slate-700 leading-[1.7]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={idx} className="font-display font-semibold text-2xl md:text-3xl text-ink tracking-tight leading-tight mt-12 mb-2">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="font-display font-semibold text-xl md:text-2xl text-ink tracking-tight leading-tight mt-8 mb-2">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-2.5 mt-3">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[16px] text-slate-700 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cta shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="space-y-2.5 mt-3 counter-reset-list">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[16px] text-slate-700 leading-relaxed">
              <span className="font-mono text-xs text-cta shrink-0 mt-1.5 font-bold">{String(i + 1).padStart(2, "0")}</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside key={idx} className="mt-8 rounded-3xl bg-brand-soft border border-brand/20 p-6 md:p-7 flex gap-4">
          <div className="h-10 w-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center shrink-0 shadow-brand">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-bold text-brand">{block.title}</p>
            <p className="mt-1.5 text-[15.5px] text-slate-700 leading-relaxed">{block.text}</p>
          </div>
        </aside>
      );
    case "quote":
      return (
        <blockquote key={idx} className="mt-6 pl-5 border-l-4 border-cta italic text-slate-700 text-[17px] leading-relaxed flex gap-3">
          <Quote className="h-6 w-6 text-cta shrink-0" />
          <span>{block.text}</span>
        </blockquote>
      );
    default:
      return null;
  }
}

function BlogDetailPage() {
  const { post } = Route.useLoaderData();
  const related = getRelatedBlogPosts(post.relatedPosts);
  const relatedSvc = post.relatedServices
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof SERVICES;

  return (
    <SiteLayout>
      <ArticleSchema
        slug={post.slug}
        title={post.title}
        description={post.seo.description}
        datePublished={post.date}
      />
      <BreadcrumbSchema
        items={[
          { name: "Anasayfa", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="orb -top-32 -right-32 w-[500px] h-[500px] bg-cta/30" />
        <div className="orb -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-glow/40" />

        <div className="relative container-edge pt-12 md:pt-16 pb-16 md:pb-24">
          <nav className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white truncate max-w-[200px]">{post.category}</span>
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                {post.category}
              </span>
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                <Calendar className="h-3 w-3" /> {formatDate(post.date)}
              </span>
              <span className="glass-dark rounded-full px-3 py-1 text-[11px] font-semibold text-white inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3" /> {post.readTime} dk okuma
              </span>
            </div>

            <h1 className="mt-6 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-balance">
              {post.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8 lg:col-start-2 max-w-2xl mx-auto lg:mx-0 prose-base">
              <div className="space-y-5">
                {post.blocks.map((b, i) => renderBlock(b, i))}
              </div>

              {/* End-of-article CTA */}
              <div className="mt-14 rounded-3xl bg-gradient-brand text-white p-7 md:p-9 shadow-brand relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                <div className="orb -top-20 -right-20 w-[300px] h-[300px] bg-cta/30" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-wider font-bold text-cta-soft">Sim İzolasyon</p>
                  <p className="mt-2 font-display font-semibold text-2xl md:text-3xl leading-tight">
                    Bu konuda profesyonel destek mi istiyorsunuz?
                  </p>
                  <p className="mt-3 text-white/85 text-base leading-relaxed">
                    İzmir merkez ve çevre ilçelerde keşif ücretsizdir. 30 dakika içinde dönüş garantisi.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={`tel:${SITE.phone1Tel}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white px-6 py-3.5 text-sm font-semibold shadow-cta hover:scale-[1.04] transition-transform"
                    >
                      <Phone className="h-4 w-4" /> Hemen Ara
                    </a>
                    <a
                      href={waLink(`Merhaba, "${post.title}" yazısından geldim, bilgi almak istiyorum.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 text-sm font-semibold shadow-md hover:bg-whatsapp-deep transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Tags / categories */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm">
                  <span className="text-slate-500">Kategori: </span>
                  <span className="font-semibold text-ink">{post.category}</span>
                </div>
                <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-cta transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Tüm yazılara dön
                </Link>
              </div>
            </article>

            {/* Sidebar — related services */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-5">
                {relatedSvc.length > 0 && (
                  <div className="rounded-3xl bg-surface border border-slate-200 p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">İlgili Hizmetler</p>
                    <ul className="mt-4 space-y-3">
                      {relatedSvc.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/hizmetler/$slug"
                            params={{ slug: s.slug }}
                            className="flex items-start gap-3 group hover:bg-white p-2 -m-2 rounded-xl transition-colors"
                          >
                            <div className="h-9 w-9 rounded-lg bg-brand-soft text-brand flex items-center justify-center shrink-0 group-hover:bg-gradient-cta group-hover:text-white transition-colors">
                              <s.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-sm text-ink group-hover:text-brand transition-colors leading-tight">
                                {s.title}
                              </p>
                              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{s.short}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-3xl bg-gradient-brand text-white p-6 shadow-brand relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider font-bold text-cta-soft">Hızlı İletişim</p>
                    <p className="mt-2 font-display font-semibold text-xl leading-tight">
                      Aklınıza takılan bir şey mi var?
                    </p>
                    <a href={`tel:${SITE.phone1Tel}`} className="mt-4 block font-display font-bold text-2xl hover:text-cta-soft transition-colors">
                      {SITE.phone1}
                    </a>
                    <a href={`tel:${SITE.phone2Tel}`} className="block mt-1 text-base hover:text-cta-soft transition-colors">{SITE.phone2}</a>
                    <a href={`tel:${SITE.phone3Tel}`} className="block mt-1 text-base hover:text-cta-soft transition-colors">{SITE.phone3}</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
          <div className="relative container-edge">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">İlgili Yazılar</p>
                <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                  Bunları da okumak isteyebilirsiniz
                </h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-brand font-semibold link-rule">
                Tüm yazılar <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col"
                >
                  <div className="aspect-[16/10] bg-gradient-brand relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center p-5 text-center">
                      <p className="font-display font-semibold text-lg text-white text-balance leading-tight line-clamp-3">
                        {p.title}
                      </p>
                    </div>
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-cta text-white px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[13.5px] text-slate-600 leading-relaxed line-clamp-2">{p.excerpt}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:text-cta">
                      Devamını oku <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
