import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "İzolasyon fiyatları nasıl belirlenir?",
    a: "Fiyatlar; uygulama yapılacak alanın metrekaresi, kullanılacak malzeme türü, yüzeyin durumu ve uygulama detayına göre belirlenir. Ücretsiz keşif sonrası şeffaf, kalem kalem hesaplanmış ve sözleşmeli bir teklif sunulur — gizli kalem yoktur.",
  },
  {
    q: "Keşif ücretli mi?",
    a: "Hayır. İzmir merkez ve çevre ilçelerde yerinde keşif hizmetimiz tamamen ücretsizdir.",
  },
  {
    q: "Garanti veriyor musunuz?",
    a: "Evet, tüm uygulamalarımız yazılı işçilik garantisi kapsamındadır. Garanti süresi uygulanan sisteme ve kullanılan malzemeye göre değişiklik gösterir; sözleşmede net olarak belirtilir.",
  },
  {
    q: "İzmir dışına hizmet veriyor musunuz?",
    a: "Evet, İzmir öncelikli olmak üzere Manisa, Aydın, Muğla ve Ege Bölgesi genelinde projelere hizmet veriyoruz.",
  },
  {
    q: "Hangi malzemeleri kullanıyorsunuz?",
    a: "Sektörün öncü markalarına ait, sertifikalı ve test edilmiş birinci sınıf malzemeler kullanıyoruz: polyurea, poliüretan, bitümlü membran, epoksi ve özel kaplamalar dahil tüm malzeme tedariğimiz garantilidir.",
  },
  {
    q: "Ne kadar sürede iş tamamlanır?",
    a: "Süre, projenin büyüklüğüne ve uygulama tipine göre değişir. Keşif sonrası net iş süresi teklifimizde belirtilir; planlanan tarihte teslim ederiz.",
  },
  {
    q: "Aktif kullanım altında bir tesiste çalışabilir misiniz?",
    a: "Evet — endüstriyel projelerin büyük kısmı aktif üretim altında. Vardiya planı, alan bölümleme ve hızlı kürlenen sistemler (polyurea gibi) ile tesisi durdurmadan çalışıyoruz.",
  },
];

export function Faq() {
  return (
    <section className="relative bg-surface py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />

      <div className="relative container-edge max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-brand">Sıkça Sorulan Sorular</span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
            Önce <span className="text-gradient-brand">cevaplar</span>, sonra teklif
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
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
  );
}
