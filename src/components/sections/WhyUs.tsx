import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Award, Smile, Sparkles } from "lucide-react";

const STATS = [
  { icon: Briefcase, value: 500, suffix: "+", label: "Tamamlanan Proje", note: "Konut, ticari, endüstriyel" },
  { icon: Users, value: 100, suffix: "+", label: "Mutlu Müşteri", note: "Ege Bölgesi geneli" },
  { icon: Award, value: 10, suffix: "+", label: "Yıl Tecrübe", note: "Aynı çekirdek ekip" },
  { icon: Smile, value: 100, suffix: "%", label: "Memnuniyet", note: "Yazılı garanti politikası" },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}

function Stat({ icon: Icon, value, suffix, label, note, start }: typeof STATS[number] & { start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="group relative rounded-3xl glass-dark p-7 hover:bg-white/15 transition-all hover:-translate-y-1">
      <div className="h-12 w-12 rounded-2xl bg-cta/95 text-cta-foreground flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-5 font-display font-semibold text-5xl md:text-6xl tracking-tight leading-none">
        {n}
        <span className="text-cta">{suffix}</span>
      </p>
      <p className="mt-3 text-base font-semibold text-white">{label}</p>
      <p className="mt-1 text-xs text-white/65">{note}</p>
    </div>
  );
}

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.25 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-gradient-brand py-24 md:py-32 overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb -top-40 -right-40 w-[500px] h-[500px] bg-cta/30" />
      <div className="orb -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-glow/40" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative container-edge text-brand-foreground">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span className="text-[12px] font-bold uppercase tracking-wider">Neden Biz</span>
          </div>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-balance">
            Rakamlarla{" "}
            <span className="text-gradient-cta">Sim İzolasyon</span>
          </h2>
          <p className="mt-5 text-lg text-white/80">
            On yıllık saha tecrübemiz ve müşteri sürekliliğimizin bir özeti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s) => <Stat key={s.label} {...s} start={start} />)}
        </div>
      </div>
    </section>
  );
}
