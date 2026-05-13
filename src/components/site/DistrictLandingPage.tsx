import { Link } from "@tanstack/react-router";
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
  Award,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE, waLink } from "@/lib/site";
import { type DistrictContent } from "@/lib/districtContent";
import { getService } from "@/lib/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { submitContactForm, validatePhone } from "@/lib/contactForm";
import { toast } from "sonner";

export function DistrictLandingPage({ content }: { content: DistrictContent }) {
  const [submitting, setSubmitting] = useState(false);
  const mainService = getService(content.serviceSlug);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const kvkk = fd.get("kvkk") === "on";

    if (name.length < 2) { toast.error("Lütfen adınızı yazın."); return; }
    if (!validatePhone(phone)) { toast.error("Geçerli bir telefon numarası girin."); return; }
    if (!kvkk) { toast.error("KVKK aydınlatma metnini onaylayın."); return; }

    setSubmitting(true);
    const result = await submitContactForm({
      name, phone, message: message || undefined,
      service: `${content.serviceName} (${content.district})`,
      source: `İlçe landing: ${content.slug}`,
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

  return (
    <SiteLayout>
      <FaqSchema items={content.faq} />
      <BreadcrumbSchema
        items={[
          { name: "Anasayfa", path: "/" },
          { name: content.serviceName, path: `/hizmetler/${content.serviceSlug}` },
          { name: content.district, path: `/${content.slug}` },
        ]}
      />
      <ServiceSchema
        slug={content.slug}
        name={`${content.serviceName} ${content.district} — Sim İzolasyon`}
        serviceType={content.serviceName}
        description={content.seo.description}
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
            <Link
              to="/hizmetler/$slug"
              params={{ slug: content.serviceSlug }}
              className="hover:text-white transition-colors"
            >
              {content.serviceName}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{content.district}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5">
                <MapPin className="h-3.5 w-3.5 text-cta" />
                <span className="text-[12px] font-bold uppercase tracking-wider">{content.hero.eyebrow}</span>
              </div>
              <h1 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[60px] leading-[1.05] tracking-tight text-balance">
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
                  href={waLink(`Merhaba, ${content.district} için ${content.serviceName} teklifi istiyorum.`)}
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
                <p className="label-mono text-white/70">§ {content.district}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-display text-3xl font-bold">10+</p>
                    <p className="text-xs text-white/70">Yıl tecrübe</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold">24sa</p>
                    <p className="text-xs text-white/70">Hızlı keşif</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-cta" />
                  <span>Yazılı işçilik garantisi</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-cta" />
                  <span>Sertifikalı malzeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local context + Why */}
      <section className="relative bg-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="relative container-edge">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <article className="lg:col-span-8">
              {/* Local context */}
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight tracking-tight">
                {content.localContext.title}
              </h2>
              <div className="mt-5 space-y-5 text-[16.5px] md:text-[17px] text-slate-700 leading-[1.7]">
                {content.localContext.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Why */}
              <div className="mt-12">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                  {content.why.title}
                </h2>
                <p className="mt-4 text-[16.5px] text-slate-700 leading-[1.7]">{content.why.body}</p>
                <ul className="mt-5 space-y-3">
                  {content.why.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15.5px] text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              {content.sections.map((sec, i) => (
                <div key={i} className="mt-12">
                  <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink leading-tight tracking-tight">
                    {sec.title}
                  </h2>
                  {sec.body && (
                    <p className="mt-4 text-[16.5px] text-slate-700 leading-[1.7]">{sec.body}</p>
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

              {/* Local projects */}
              {content.localProjects.length > 0 && (
                <div className="mt-14 rounded-3xl bg-surface border border-slate-200 p-7 md:p-8">
                  <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">
                    {content.district} Saha Çalışmalarımızdan Örnekler
                  </p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    {content.localProjects.map((p, i) => (
                      <div key={i} className="rounded-2xl bg-white border border-slate-200 p-5">
                        <p className="font-display font-semibold text-base text-ink leading-snug">{p.name}</p>
                        <p className="mt-1.5 text-[12.5px] uppercase tracking-wider text-cta-deep font-semibold">
                          {p.location}
                        </p>
                        <p className="mt-3 text-[14px] text-slate-600 leading-relaxed">{p.outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Link to main service */}
              {mainService && (
                <div className="mt-12 rounded-3xl bg-brand-soft p-7">
                  <p className="text-xs uppercase tracking-wider font-bold text-brand">İlgili Hizmetimiz</p>
                  <p className="mt-3 font-display font-semibold text-2xl text-ink leading-tight">
                    {content.serviceName} hakkında detaylı bilgi
                  </p>
                  <p className="mt-2 text-[15.5px] text-slate-700 leading-relaxed">
                    Sistemler, fiyatları etkileyen faktörler, uygulama süreci ve daha fazlası ana hizmet sayfamızda.
                  </p>
                  <Link
                    to="/hizmetler/$slug"
                    params={{ slug: content.serviceSlug }}
                    className="mt-4 inline-flex items-center gap-2 text-brand font-semibold link-rule"
                  >
                    {content.serviceName} Sayfası
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </article>

            {/* Sticky form */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-5">
                <form
                  onSubmit={onSubmit}
                  className="rounded-3xl bg-white border border-slate-200 p-6 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-soft/40 pointer-events-none -z-10" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">Ücretsiz Keşif</p>
                    <h3 className="mt-2 font-display font-semibold text-2xl text-ink leading-tight">
                      {content.district}'da Teklif İste
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">
                      {content.serviceName.toLowerCase()} için bilgilerinizi bırakın.
                    </p>

                    <div className="mt-5 space-y-3">
                      <input
                        required type="text" name="name" placeholder="Ad Soyad"
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150"
                      />
                      <input
                        required type="tel" name="phone" placeholder="Telefon" inputMode="tel"
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150"
                      />
                      <textarea
                        name="message" rows={3} placeholder="Kısa proje detayı..."
                        className="w-full rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none transition-colors duration-150"
                      />

                      <label className="flex items-start gap-2 text-[11.5px] text-slate-600 leading-relaxed cursor-pointer select-none pt-1">
                        <input type="checkbox" name="kvkk" required className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-brand focus:ring-brand/30" />
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

                    <div className="mt-4 pt-4 border-t border-slate-200 space-y-1.5 text-xs">
                      <p className="text-slate-500 uppercase tracking-wider font-semibold mb-2">Veya direkt arayın</p>
                      <a href={`tel:${SITE.phone1Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">{SITE.phone1}</a>
                      <a href={`tel:${SITE.phone2Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">{SITE.phone2}</a>
                      <a href={`tel:${SITE.phone3Tel}`} className="block text-ink font-semibold text-sm hover:text-brand">{SITE.phone3}</a>
                    </div>
                  </div>
                </form>

                {/* Nearby districts */}
                {content.nearbyDistricts.length > 0 && (
                  <div className="rounded-3xl bg-surface border border-slate-200 p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-cta-deep">Yakın İlçeler</p>
                    <ul className="mt-4 space-y-2.5">
                      {content.nearbyDistricts.map((d) => (
                        <li key={d.slug}>
                          <a
                            href={`/${d.slug}`}
                            className="flex items-center gap-2 text-sm font-medium text-ink hover:text-brand transition-colors group"
                          >
                            <MapPin className="h-3.5 w-3.5 text-brand" />
                            <span className="flex-1">{d.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand">Sıkça Sorulanlar</span>
            </div>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink text-balance">
              {content.district}'da {content.serviceName.toLowerCase()} hakkında
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

      {/* CTA Band */}
      <section className="relative bg-white py-12 md:py-16">
        <div className="container-edge">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-9 md:p-14 shadow-brand">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="orb -top-32 -right-32 w-[400px] h-[400px] bg-cta/40" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[1.05] text-balance">
                  {content.district}'da {content.serviceName.toLowerCase()} için keşif zamanı
                </h3>
                <p className="mt-3 text-lg text-white/85">
                  Ücretsiz keşif, 24 saat içinde dönüş, kalem kalem teklif.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href={`tel:${SITE.phone1Tel}`} className="inline-flex items-center gap-2.5 rounded-full bg-gradient-cta text-cta-foreground px-7 py-4 text-[15px] font-semibold shadow-cta hover:scale-[1.04] transition-transform">
                  <Phone className="h-5 w-5" /> Hemen Ara
                </a>
                <a href={waLink(`Merhaba, ${content.district} için ${content.serviceName} teklifi istiyorum.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-[15px] font-semibold shadow-md hover:bg-whatsapp-deep transition-colors">
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
