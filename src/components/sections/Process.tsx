import { PhoneCall, Search, FileText, Wrench, ThumbsUp, Sparkles } from "lucide-react";

const STEPS = [
  { icon: PhoneCall, title: "Talep Alınır", desc: "Telefon ya da WhatsApp üzerinden talebinizi iletirsiniz. 30 dakika içinde dönüş yaparız." },
  { icon: Search, title: "Ücretsiz Keşif", desc: "Uzman ekibimiz lokasyonunuzda ücretsiz keşif yapar ve detaylı rapor çıkarır." },
  { icon: FileText, title: "Teklif Sunulur", desc: "Sözleşmeli, kalem kalem hesaplanmış, gizli kalemsiz teklifimizi sunarız." },
  { icon: Wrench, title: "Profesyonel Uygulama", desc: "Sertifikalı malzeme ve uzman ekiple uygulama; günlük raporlar ile şeffaflık." },
  { icon: ThumbsUp, title: "Teslim & Garanti", desc: "Yazılı garanti belgesi ve memnuniyet odaklı teslimat. Garanti süresince destek." },
];

export function Process() {
  return (
    <section className="relative bg-surface py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh-blue opacity-40 pointer-events-none" />

      <div className="relative container-edge">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-brand">Çalışma Süreci</span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
            5 adımda <span className="text-gradient-brand">sorunsuz uygulama</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Talepten teslimat ve garantiye kadar; müşterilerimizin her aşamada ne olacağını bildiği bir süreç.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-3">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5">
            <div className="h-full w-full bg-gradient-to-r from-brand via-cta to-brand opacity-30" />
          </div>

          {STEPS.map((s, i) => (
            <div key={s.title} className="relative">
              {/* Number badge floating top-right */}
              <span className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-gradient-cta text-cta-foreground text-[13px] font-bold flex items-center justify-center shadow-cta">
                {i + 1}
              </span>

              <div className="relative h-full rounded-3xl bg-white border border-slate-200 p-6 hover:border-brand/30 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
