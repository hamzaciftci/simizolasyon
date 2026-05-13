import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE, waLink } from "@/lib/site";
import { SERVICES, getService } from "@/lib/services";
import { getServiceContent } from "@/lib/serviceContent";
import { DISTRICT_CONTENT } from "@/lib/districtContent";
import { submitContactForm, validatePhone } from "@/lib/contactForm";
import { toast } from "sonner";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/hizmetler_/$slug")({
  beforeLoad: ({ params }) => {
    const service = getService(params.slug);
    const content = getServiceContent(params.slug);
    if (!service || !content) throw notFound();
  },
  loader: ({ params }) => ({
    service: getService(params.slug)!,
    content: getServiceContent(params.slug)!,
  }),
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { content } = loaderData;
    return {
      meta: [
        { title: content.seo.title },
        { name: "description", content: content.seo.description },
        { name: "keywords", content: [content.primaryKeyword, ...content.lsiKeywords].join(", ") },
        { property: "og:title", content: content.seo.title },
        { property: "og:description", content: content.seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE.domain}/hizmetler/${content.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: `${SITE.domain}/hizmetler/${content.slug}` },
      ],
    };
  },
  component: HizmetDetayPage,
});

function HizmetDetayPage() {
  const { service, content } = Route.useLoaderData();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const kvkk = fd.get("kvkk") === "on";
    const honeypot = String(fd.get("website") || "");

    if (name.length < 2) { toast.error("Lütfen adınızı yazın."); return; }
    if (!validatePhone(phone)) { toast.error("Geçerli bir telefon numarası girin."); return; }
    if (!kvkk) { toast.error("KVKK aydınlatma metnini onaylayın."); return; }

    setSubmitting(true);
    const result = await submitContactForm({
      name, phone, message: message || undefined,
      service: content.category,
      source: `Hizmet detay: ${content.slug}`,
      honeypot,
    });

    if (result.ok && result.channel === "email") {
      toast.success("Mesajınız alındı — 30 dk içinde dönüş yapacağız.");
      form.reset();
    } else if (result.ok) {
      toast.success("Mesajınız hazırlandı. WhatsApp ile de yazabilirsiniz.");
      window.location.href = result.whatsappUrl;
    } else {
      toast.error("Form gönderilemedi. WhatsApp ile devam edin.");
      window.location.href = result.whatsappUrl;
    }
    setTimeout(() => setSubmitting(false), 500);
  };

  const related = content.relatedServices
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof SERVICES;

  return (
    <SiteLayout>
      {/* Schemas */}
      <ServiceSchema
        slug={content.slug}
        name={`İzmir ${content.category} Hizmeti`}
        serviceType={content.category}
        description={content.seo.description}
      />
      <FaqSchema items={content.faq} />
      <BreadcrumbSchema
        items={[
          { name: "Anasayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" },
          { name: content.category, path: `/hizmetler/${content.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-brand text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="orb -top-32 -right-32 w-[500px] h-[500px] bg-cta/30" />
        <div className="orb -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-glow/40" />

        <div className="relative container-edge pt-12 md:pt-16 pb-20 md:pb-28">
          <nav className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Anasayfa</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white truncate max-w-[200px]">{content.category}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-cta" />
                <span className="text-[12px] font-bold uppercase tracking-wider">{content.hero.eyebrow}</span>
              </div>
              <h1 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight text-balance">
                {content.hero.h1}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
                {content.hero.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE.phone1Tel}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform"
                >
                  <Phone className="h-5 w-5" /> Hemen Ara
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={waLink(`Merhaba, ${content.category} için teklif istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:bg-whatsapp-deep transition-colors"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="glass-dark rounded-3xl p-6">
                <p className="label-mono text-white/70">§ Garanti & Tecrübe</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-display text-3xl font-bold">10+</p>
                    <p className="text-xs text-white/70">Yıl tecrübe</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold">500+</p>
                    <p className="text-xs text-white/70">Tamamlanan proje</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-cta" />
                  <span>Yazılı işçilik garantisi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Sections */}
      <section className="relative bg-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8">
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight tracking-tight">
                {content.intro.title}
              </h2>
              <div className="mt-5 space-y-5 text-[16px] md:text-[17px] text-slate-700 leading-relaxed">
                {content.intro.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Sections */}
              {content.sections.map((sec, i) => (
                <div key={i} className="mt-12">
                  <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                    {sec.title}
                  </h2>
                  {sec.body && (
                    <p className="mt-4 text-[16px] md:text-[17px] text-slate-700 leading-relaxed">
                      {sec.body}
                    </p>
                  )}
                  {sec.list && sec.list.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {sec.list.map((item, j) => (
                        <li key={j} className="flex gap-3 text-[15.5px] text-slate-700">
                          <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Systems */}
              {content.systems && content.systems.length > 0 && (
                <div className="mt-14">
                  <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                    Kullandığımız Sistemler
                  </h2>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {content.systems.map((sys) => (
                      <div key={sys.name} className="rounded-2xl border border-slate-200 p-5 bg-surface">
                        <p className="font-display font-semibold text-lg text-ink">{sys.name}</p>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{sys.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Districts */}
              {content.districts && content.districts.length > 0 && (
                <div className="mt-14 rounded-3xl bg-brand-soft p-7">
                  <p className="text-xs uppercase tracking-wider font-bold text-brand">Hizmet Verdiğimiz İlçeler</p>
                  <p className="mt-3 font-display font-semibold text-xl text-ink leading-tight">
                    İzmir genelinde {content.category.toLowerCase()} uygulaması yaptığımız bölgeler
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.districts.map((d) => {
                      // Bu ilçe + servis için özel landing sayfası var mı?
                      const landing = Object.values(DISTRICT_CONTENT).find(
                        (entry) => entry.serviceSlug === content.slug && entry.district === d.split(" ")[0],
                      );
                      if (landing) {
                        return (
                          <a
                            key={d}
                            href={`/${landing.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12.5px] font-semibold text-brand hover:bg-brand hover:text-white transition-colors group"
                          >
                            <MapPin className="h-3 w-3" />
                            {d}
                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        );
                      }
                      return (
                        <span
                          key={d}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12.5px] font-medium text-slate-700"
                        >
                          <MapPin className="h-3 w-3 text-brand" />
                          {d}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>

            {/* Sticky form */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <form
                  onSubmit={onSubmit}
                  className="rounded-3xl bg-white border border-slate-200 p-6 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-soft/40 pointer-events-none -z-10" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">Ücretsiz Keşif</p>
                    <h3 className="mt-2 font-display font-semibold text-2xl text-ink leading-tight">
                      {content.category} Teklifi
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">Bilgilerinizi bırakın, sizi arayalım.</p>

                    {/* Honeypot */}
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true" />

                    <div className="mt-5 space-y-3">
                      <input
                        required minLength={2} name="name" placeholder="Ad Soyad" autoComplete="name" disabled={submitting}
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150 disabled:opacity-60"
                      />
                      <input
                        required type="tel" name="phone" placeholder="Telefon (0xxx xxx xx xx)" autoComplete="tel" disabled={submitting}
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150 disabled:opacity-60"
                      />
                      <textarea
                        name="message" rows={3} placeholder="Kısa proje detayı..." disabled={submitting}
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none transition-colors duration-150 disabled:opacity-60"
                      />

                      <label className="flex items-start gap-2 text-[11.5px] text-slate-600 leading-relaxed cursor-pointer select-none pt-1">
                        <input type="checkbox" name="kvkk" required disabled={submitting} className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-brand focus:ring-brand/30 disabled:opacity-60" />
                        <span>Kişisel verilerimin teklif/keşif için işlenmesini onaylıyorum (<a href="/iletisim" className="underline text-brand">KVKK</a>).</span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-cta text-cta-foreground px-5 py-3.5 text-sm font-semibold shadow-cta hover:scale-[1.01] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                            <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-4 w-4" />
                          Teklif Talebi Gönder
                        </>
                      )}
                    </button>

                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-2 text-xs">
                      <p className="text-slate-500 uppercase tracking-wider font-semibold">Veya direkt arayın</p>
                      <a href={`tel:${SITE.phone1Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">
                        {SITE.phone1}
                      </a>
                      <a href={`tel:${SITE.phone2Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">
                        {SITE.phone2}
                      </a>
                      <a href={`tel:${SITE.phone3Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">
                        {SITE.phone3}
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-surface py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
        <div className="relative container-edge max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-cta" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand">SSS</span>
            </div>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink text-balance">
              {content.category} hakkında sıkça sorulanlar
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {content.faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 data-[state=open]:shadow-lg data-[state=open]:border-brand/30 transition-all"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5 [&[data-state=open]>svg]:text-cta">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-cta">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pl-9 pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="relative bg-white py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
          <div className="relative container-edge">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">İlgili Hizmetler</p>
                <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink">
                  Birlikte değerlendirilebilecek çözümler
                </h2>
              </div>
              <Link to="/hizmetler" className="hidden sm:inline-flex items-center gap-1.5 text-brand font-semibold link-rule">
                Tüm hizmetler <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/hizmetler/$slug"
                  params={{ slug: r.slug }}
                  className="group rounded-2xl border border-slate-200 p-5 bg-white hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-gradient-cta group-hover:text-white transition-colors">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-base text-ink leading-snug">{r.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">{r.short}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:text-cta">
                    Detay <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container-edge">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-9 md:p-14 shadow-brand">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="orb -top-32 -right-32 w-[400px] h-[400px] bg-cta/40" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[1.05] text-balance">
                  {content.category} için keşif zamanı
                </h3>
                <p className="mt-3 text-lg text-white/85">
                  İzmir merkez ve çevre ilçelerde keşif ücretsizdir. 30 dakika içinde dönüş.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={`tel:${SITE.phone1Tel}`} className="inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform">
                  <Phone className="h-5 w-5" /> Hemen Ara
                </a>
                <a href={waLink(`Merhaba, ${content.category} için teklif istiyorum.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:bg-whatsapp-deep transition-colors">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
