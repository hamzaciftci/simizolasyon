import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Sparkles, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { submitContactForm, validatePhone } from "@/lib/contactForm";
import { toast } from "sonner";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [waFallbackUrl, setWaFallbackUrl] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const kvkk = fd.get("kvkk") === "on";
    const honeypot = String(fd.get("website") || "");

    if (name.length < 2) {
      toast.error("Lütfen adınızı ve soyadınızı yazın.");
      return;
    }
    if (!validatePhone(phone)) {
      toast.error("Telefon numarası eksik. 10 haneli (0xxx xxx xx xx) girin.");
      return;
    }
    if (!kvkk) {
      toast.error("Devam etmek için KVKK aydınlatma metnini onaylayın.");
      return;
    }

    setStatus("submitting");

    const result = await submitContactForm({
      name,
      phone,
      email: email || undefined,
      service: service || undefined,
      message: message || undefined,
      source: "Anasayfa iletişim formu",
      honeypot,
    });

    setWaFallbackUrl(result.whatsappUrl);

    if (result.ok && result.channel === "email") {
      toast.success("Mesajınız alındı — en geç 30 dakika içinde dönüş yapacağız.");
      setStatus("success");
      form.reset();
    } else if (result.ok) {
      // Key yoksa: WhatsApp-only mode — kullanıcıya görünür link/buton sunulur (pop-up engellenmesin)
      toast.success("Mesajınız hazırlandı — aşağıdaki butondan WhatsApp ile devam edebilirsiniz.");
      setStatus("success");
    } else {
      toast.error("Form gönderilemedi. Aşağıdaki butondan WhatsApp ile iletişime geçebilirsiniz.");
      setStatus("error");
    }
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
            className="lg:col-span-3 rounded-3xl bg-white border border-slate-200 p-7 md:p-9 shadow-lg relative"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-brand-soft/40 pointer-events-none -z-10" />

            <div className="relative">
              <h3 className="font-display font-semibold text-3xl text-ink tracking-tight">Hızlı Teklif Formu</h3>
              <p className="mt-1.5 text-sm text-slate-500">Bilgilerinizi bırakın, 30 dk içinde sizi arayalım.</p>

              {/* Honeypot — bot trap, kullanıcılar görmez */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              <div className="mt-7 grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Ad Soyad *</label>
                  <input
                    id="name"
                    required
                    minLength={2}
                    name="name"
                    autoComplete="name"
                    placeholder="Adınız"
                    disabled={status === "submitting"}
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Telefon *</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="0xxx xxx xx xx"
                    disabled={status === "submitting"}
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150 disabled:opacity-60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">E-posta (opsiyonel)</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="ornek@mail.com"
                    disabled={status === "submitting"}
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors duration-150 disabled:opacity-60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">İhtiyaç Duyulan Hizmet</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    disabled={status === "submitting"}
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand cursor-pointer transition-all disabled:opacity-60"
                  >
                    <option value="" disabled>Hizmet seçin —</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 block">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Projenizi kısaca anlatın — adres, alan (m²), mevcut durum..."
                    disabled={status === "submitting"}
                    className="w-full rounded-2xl border border-slate-200 bg-surface px-4 py-3.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none transition-colors duration-150 disabled:opacity-60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-[12.5px] text-slate-600 leading-relaxed cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="kvkk"
                      required
                      disabled={status === "submitting"}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand/30 disabled:opacity-60"
                    />
                    <span>
                      <strong className="text-ink">KVKK Aydınlatma:</strong> İletişim formunda paylaştığım kişisel verilerin,
                      yalnızca teklif/keşif süreci için Sim İzolasyon tarafından işlenmesini kabul ediyorum.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-cta text-cta-foreground px-6 py-4 text-base font-semibold shadow-cta hover:scale-[1.01] transition-transform disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Gönderiliyor...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    Mesajınız Alındı
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Ücretsiz Teklif Gönder
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 rounded-xl bg-green-50 border border-green-200 p-4">
                  <div className="flex items-start gap-2.5 text-sm text-green-800">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold">Teşekkürler — mesajınız iletildi.</p>
                      <p className="mt-1 text-[13px] text-green-700">
                        Uzman ekibimiz en geç 30 dakika içinde sizinle iletişime geçecek. Acil bir durum
                        varsa doğrudan <a href={`tel:${SITE.phone1Tel}`} className="font-semibold underline">{SITE.phone1}</a> arayabilirsiniz.
                      </p>
                    </div>
                  </div>
                  {waFallbackUrl && (
                    <a
                      href={waFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground px-4 py-2.5 text-[13px] font-semibold hover:bg-whatsapp-deep transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp ile de yazmak isterseniz tıklayın
                    </a>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4">
                  <div className="flex items-start gap-2.5 text-sm text-amber-800">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold">Form gönderilemedi.</p>
                      <p className="mt-1 text-[13px] text-amber-700">
                        Geçici bir sorun oluştu. Aşağıdaki WhatsApp butonundan veya doğrudan{" "}
                        <a href={`tel:${SITE.phone1Tel}`} className="font-semibold underline">{SITE.phone1}</a> numaralı telefondan ulaşabilirsiniz.
                      </p>
                    </div>
                  </div>
                  {waFallbackUrl && (
                    <a
                      href={waFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-xl bg-whatsapp text-whatsapp-foreground px-4 py-2.5 text-[13px] font-semibold hover:bg-whatsapp-deep transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp ile mesaj at
                    </a>
                  )}
                </div>
              )}

              <p className="mt-4 text-xs text-slate-500 text-center">
                Mesajınız <strong className="text-slate-700">{SITE.email}</strong> adresine iletilir.
                Yanıt süresi ortalama 30 dakika.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
