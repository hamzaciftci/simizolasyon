import { Star, Quote, Sparkles } from "lucide-react";

const REVIEWS = [
  { name: "Mehmet K.", role: "Site Yöneticisi", place: "Karşıyaka", text: "Apartmanımızın çatısında uzun süredir devam eden su sızıntısı problemini Sim İzolasyon kalıcı olarak çözdü. İşçilik kalitesi ve disiplin gerçekten profesyonelce." },
  { name: "Ayşe Y.", role: "Ev Sahibi", place: "Bornova", text: "Teras izolasyonumuzu yaptırdık. Hem keşif hem uygulama süreci çok şeffaftı. Verdikleri tarihte teslim ettiler, memnun kaldık." },
  { name: "Burak T.", role: "Fabrika Sahibi", place: "Çiğli", text: "Üretim alanımızın epoksi zemin kaplaması için çalıştık. Hijyenik, parlak ve son derece dayanıklı bir sonuç. Kesinlikle tavsiye ederim." },
  { name: "Selim D.", role: "İnşaat Firması", place: "Bayraklı", text: "Birçok şantiyede temel bohçalama ve perde beton işlerimizi yaptık. Zamanında teslim, kaliteli malzeme ve sözüne sadık ekip." },
  { name: "Hatice A.", role: "Villa Sahibi", place: "Urla", text: "Havuzumuzun izolasyonunda harika iş çıkardılar. Bir yıldır en ufak bir su kaybı yok. Teşekkürler Sim İzolasyon ekibi!" },
  { name: "Eren M.", role: "Otel İşletmecisi", place: "Çeşme", text: "Otelimizin teras ve ıslak hacim izolasyonlarını yaptık. Profesyonel yaklaşım, temiz çalışma. Tekrar çalışacağız." },
];

export function Testimonials() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative container-edge">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-brand">Müşteri Yorumları</span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
            Müşterilerimiz <span className="text-gradient-brand">ne diyor?</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Birlikte çalıştığımız müşterilerden, kendi kelimeleriyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`group relative rounded-3xl p-7 transition-all hover:-translate-y-1 overflow-hidden ${
                i === 0
                  ? "bg-gradient-brand text-white shadow-brand md:row-span-1"
                  : "bg-white border border-slate-200 hover:border-brand/30 hover:shadow-lg"
              }`}
            >
              {i === 0 && <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />}
              <div className="relative">
                <Quote className={`absolute top-0 right-0 h-10 w-10 ${i === 0 ? "text-white/20" : "text-brand/10"}`} />
                <div className={`flex gap-0.5 ${i === 0 ? "text-cta-soft" : "text-cta"}`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className={`mt-5 text-[15px] leading-relaxed ${i === 0 ? "text-white/95" : "text-slate-700"}`}>
                  "{r.text}"
                </p>
                <div className={`mt-6 pt-5 border-t flex items-center justify-between ${i === 0 ? "border-white/20" : "border-slate-200"}`}>
                  <div>
                    <p className={`font-semibold ${i === 0 ? "text-white" : "text-ink"}`}>{r.name}</p>
                    <p className={`text-xs mt-0.5 ${i === 0 ? "text-white/70" : "text-slate-500"}`}>
                      {r.role} · {r.place}
                    </p>
                  </div>
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-display font-bold ${i === 0 ? "bg-white/20 text-white" : "bg-brand-soft text-brand"}`}>
                    {r.name[0]}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
