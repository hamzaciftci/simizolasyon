import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Sparkles, ArrowRight } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const service = String(fd.get("service") || "");
    const message = String(fd.get("message") || "");
    const text = `Merhaba, teklif almak istiyorum.\n\nAd Soyad: ${name}\nTelefon: ${phone}\nHizmet: ${service}\nMesaj: ${message}`;
    window.open(waLink(text), "_blank");
    toast.success("Talebiniz iletiliyor — WhatsApp üzerinden devam edebilirsiniz.");
    setTimeout(() => setSubmitting(false), 800);
    e.currentTarget.reset();
  };

  return (
    <section id="iletisim" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative container-edge">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cta-soft px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-cta-deep">İletişim</span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
            Ücretsiz keşif, <span className="text-gradient-brand">hızlı teklif</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Aşağıdaki formu doldurun ya da doğrudan arayın — uzman ekibimiz en kısa sürede dönüş yapsın.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5 md:gap-6">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${SITE.phone1Tel}`}
              className="block rounded-3xl bg-gradient-brand text-white p-7 shadow-brand hover:shadow-deep hover:-translate-y-0.5 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cta/30 blur-3xl group-hover:bg-cta/40 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-xl bg-cta text-cta-foreground flex items-center justify-center shadow-cta">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider opacity-90 font-semibold">Hemen Ara</span>
                </div>
                <p className="mt-4 font-display font-semibold text-3xl tracking-tight">{SITE.phone1}</p>
                <p className="mt-1 text-base opacity-90">{SITE.phone2}</p>
                <p className="text-base opacity-90">{SITE.phone3}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold opacity-90 group-hover:opacity-100">
                  Şimdi ara <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-whatsapp text-whatsapp-foreground p-7 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all relative overflow-hidden group"
            >
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider opacity-90 font-semibold">WhatsApp</span>
                </div>
                <p className="mt-4 font-display font-semibold text-2xl tracking-tight">7/24 hızlı dönüş</p>
                <p className="mt-1 text-sm opacity-90">WhatsApp üzerinden teklif alın</p>
              </div>
            </a>

            <div className="rounded-3xl bg-surface border border-slate-200 p-6 space-y-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Adres</p>
                  <p className="mt-1.5 text-sm text-ink font-medium leading-relaxed">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-5 border-t border-slate-200">
                <div className="h-10 w-10 rounded-xl bg-brand-soft text-brand flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">E-posta</p>
                  <a href={`mailto:${SITE.email}`} className="mt-1.5 block text-sm text-ink font-medium hover:text-brand transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 h-56 shadow-sm">
              <iframe
                title="Konum Haritası"
                src="https://maps.google.com/maps?q=Yamanlar%20Mah.%20Kubilay%20Cad.%20No%3A%20233%20C%20Bayrakl%C4%B1%20%C4%B0zmir&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form column */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl bg-white border border-slate-200 p-7 md:p-9 shadow-lg relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-soft/60 blur-3xl pointer-events-none" />

            <div className="relative">
              <h3 className="font-display font-semibold text-3xl text-ink tracking-tight">Hızlı Teklif Formu</h3>
              <p className="mt-1.5 text-sm text-slate-500">Bilgilerinizi bırakın, sizi arayalım.</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Ad Soyad *</label>
                  <input
                    required
                    name="name"
                    placeholder="Adınız"
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Telefon *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="0xxx xxx xx xx"
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">İhtiyaç Duyulan Hizmet</label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand cursor-pointer transition-all"
                  >
                    <option value="" disabled>Hizmet seçin —</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Mesaj</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Projenizi kısaca anlatın..."
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-cta text-cta-foreground px-6 py-4 text-base font-semibold shadow-cta hover:scale-[1.01] transition-transform disabled:opacity-70 group"
              >
                <Send className="h-4 w-4" />
                {submitting ? "Gönderiliyor..." : "Ücretsiz Teklif Gönder"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-3 text-xs text-slate-500 text-center">
                Form gönderiminiz WhatsApp üzerinden iletilir; en kısa sürede iletişime geçeriz.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
