import {
  Layers, Shield, Droplets, Building2, Brush, Waves, GitMerge, Square,
  Hammer, Factory, SprayCan, Zap, ShowerHead, ArrowDownToLine, Syringe,
  Home, Sun, ParkingSquare, ParkingCircle, Construction, PackageOpen,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;          // SEO-friendly URL slug (used at /hizmetler/<slug>)
  title: string;         // Display title (kart başlığı)
  short: string;         // Kart kısa açıklama
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  { slug: "cati-izolasyon-izmir",            title: "Çatı İzolasyon",                short: "Çatılarda ısı ve su yalıtımı için profesyonel sistem çözümleri.",                  icon: Home },
  { slug: "teras-izolasyon-izmir",           title: "Teras İzolasyon",               short: "Teraslarda kullanım amacına uygun çok katmanlı yalıtım sistemleri.",               icon: Sun },
  { slug: "havuz-izolasyon-izmir",           title: "Havuz İzolasyon",               short: "Yüzme havuzları için kalıcı ve estetik su yalıtım çözümleri.",                     icon: Waves },
  { slug: "epoksi-zemin-kaplama-izmir",      title: "Epoksi Zemin Kaplama",          short: "Hijyenik, dayanıklı ve estetik epoksi zemin uygulamaları.",                        icon: Droplets },
  { slug: "polyurea-sprey-izmir",            title: "Polyurea Sprey",                short: "Hızlı kürlenen, yüksek performanslı polyurea püskürtme kaplama.",                  icon: Zap },
  { slug: "endustriyel-zemin-kaplama-izmir", title: "Endüstriyel Zemin Kaplamaları", short: "Fabrika, depo ve üretim tesisleri için yüksek performanslı zemin sistemleri.",     icon: Factory },
  { slug: "poliuretan-izolasyon-izmir",      title: "Poliüretan İzolasyon",          short: "Esnek, su geçirmez ve UV dayanımlı poliüretan yalıtım uygulamaları.",              icon: SprayCan },
  { slug: "sandvic-panel-izolasyon-izmir",   title: "Sandviç Panel İzolasyon",       short: "Çatı ve cephelerde yüksek ısı yalıtımı sağlayan sandviç panel uygulamaları.",      icon: Layers },
  { slug: "cam-elyaf-poliuretan-izmir",      title: "Cam Elyaf Poliüretan",          short: "Yüksek mukavemetli cam elyaf takviyeli poliüretan kaplama çözümleri.",             icon: Shield },
  { slug: "cam-elyaf-izolasyon-izmir",       title: "Cam Elyaf İzolasyon",           short: "Su geçirmez ve uzun ömürlü cam elyaf izolasyon sistemleri.",                       icon: Brush },
  { slug: "beton-ustu-izolasyon-izmir",      title: "Beton Üstü İzolasyon",          short: "Beton yüzeylere özel su yalıtım membran ve sıvı kaplama uygulamaları.",            icon: Building2 },
  { slug: "seramik-ustu-izolasyon-izmir",    title: "Seramik Üstü İzolasyon",        short: "Mevcut seramik kaplamayı sökmeden uygulanan profesyonel su yalıtımı.",             icon: Square },
  { slug: "islak-zemin-izolasyon-izmir",     title: "Islak Zemin İzolasyon",         short: "Banyo, mutfak ve balkon gibi ıslak hacimlerde tam yalıtım.",                       icon: ShowerHead },
  { slug: "ic-cephe-dilatasyon-izmir",       title: "İç Cephe Dilatasyon",           short: "Bina iç cephelerinde estetik ve sızdırmaz dilatasyon çözümleri.",                  icon: GitMerge },
  { slug: "dis-cephe-dilatasyon-izmir",      title: "Dış Cephe Dilatasyon",          short: "Hava şartlarına dayanıklı dış cephe dilatasyon yalıtımı.",                         icon: Construction },
  { slug: "asansor-cukuru-izolasyon-izmir",  title: "Asansör Çukuru İzolasyon",      short: "Asansör çukurlarında su sızıntısına karşı kalıcı yalıtım.",                        icon: ArrowDownToLine },
  { slug: "enjeksiyon-yalitim-izmir",        title: "Enjeksiyon Yalıtım",            short: "Aktif su sızıntılarına karşı yüksek basınçlı enjeksiyon uygulaması.",              icon: Syringe },
  { slug: "otopark-izolasyon-izmir",         title: "Otopark İzolasyon",             short: "Trafik yüküne dayanıklı otopark zemini su yalıtımı.",                              icon: ParkingSquare },
  { slug: "otopark-enjeksiyon-izmir",        title: "Otopark Enjeksiyon",            short: "Otoparklarda perde beton ve döşeme sızıntılarına enjeksiyon çözümü.",              icon: ParkingCircle },
  { slug: "perde-beton-izolasyon-izmir",     title: "Perde Beton İzolasyon",         short: "Bodrum perde duvarlarda toprak suyuna karşı yalıtım.",                             icon: Hammer },
  { slug: "temel-bohcalama-izmir",           title: "Temel Bohçalama Membran",       short: "Bina temellerinde çift kat bitümlü membran ile bohçalama.",                        icon: PackageOpen },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
