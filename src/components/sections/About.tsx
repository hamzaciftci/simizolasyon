import { CheckCircle2, Award, Clock, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import projectImg from "@/assets/project-1.jpg";

const POINTS = [
  "Tüm uygulamalarda birinci sınıf, sertifikalı malzemeler",
  "Her proje için ücretsiz keşif ve şeffaf fiyatlandırma",
  "Tecrübeli, eğitimli uygulama ekipleri",
  "Sözleşmeli çalışma ve yazılı garanti",
  "Konut, ticari ve endüstriyel projelerde uzmanlık",
  "Zamanında teslim, temiz şantiye disiplini",
];

const META = [
  { icon: Award, label: "10+", desc: "Yıl tecrübe" },
  { icon: ShieldCheck, label: "Yazılı", desc: "Garanti" },
  { icon: Clock, label: "24sa", desc: "Hızlı dönüş" },
];

export function About() {
  return (
    <section id="hakkimizda" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="orb -top-24 -left-24 w-96 h-96 bg-brand-glow/10" />

      <div className="relative container-edge">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-brand rounded-[32px] blur-2xl opacity-25" />

              <div className="relative rounded-3xl overflow-hidden shadow-elev">
                <img
                  src={projectImg}
                  alt="İzolasyon uygulaması"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                {/* Image overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
              </div>

              {/* Floating "+500 proje" card */}
              <div className="absolute -bottom-5 right-3 sm:-right-6 glass rounded-2xl shadow-elev p-4 sm:p-5 max-w-[200px] sm:max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-cta flex items-center justify-center text-cta-foreground shadow-cta shrink-0">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-xl sm:text-2xl text-brand leading-none">+500</p>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">Tamamlanan proje</p>
                  </div>
                </div>
              </div>

              {/* Floating top-left badge */}
              <div className="absolute -top-3 left-3 sm:-left-3 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-md flex items-center gap-2">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-cta" />
                <span className="text-[11px] sm:text-xs font-semibold text-ink">Est. 2014</span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-brand">Hakkımızda</span>
            </div>

            <h2 className="mt-5 font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[1.05] tracking-tight text-ink text-balance">
              İzmir'in <span className="text-gradient-brand">güvenilir</span> izolasyon ve su yalıtım uzmanı
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              <strong className="text-ink">Sim İzolasyon</strong> olarak 10 yılı aşkın süredir
              İzmir ve çevresinde konut, ticari ve endüstriyel projelerde profesyonel izolasyon
              çözümleri sunuyoruz. Çatı, teras, temel, havuz, otopark ve endüstriyel zeminlerde
              kalıcı, garantili çözümler üretiyoruz.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 grid grid-cols-3 gap-2.5 sm:gap-3">
              {META.map((m) => (
                <div
                  key={m.label}
                  className="group rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 text-center hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <div className="h-9 w-9 sm:h-10 sm:w-10 mx-auto rounded-xl bg-brand-soft flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                    <m.icon className="h-4 w-4 sm:h-5 sm:w-5 text-brand group-hover:text-white" />
                  </div>
                  <p className="mt-2 sm:mt-2.5 font-display font-bold text-base sm:text-xl text-ink leading-none">{m.label}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-1">{m.desc}</p>
                </div>
              ))}
            </div>

            <Link
              to="/hakkimizda"
              className="mt-9 inline-flex items-center gap-2 text-brand font-semibold link-rule"
            >
              Daha fazla bilgi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
