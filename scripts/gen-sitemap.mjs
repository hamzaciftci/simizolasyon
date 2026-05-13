/**
 * Build-time sitemap generator.
 *
 * services.ts, blogPosts.ts, projects.ts ve districtContent.ts dosyalarından
 * slug'ları regex ile parse eder, tam ve SEO-uyumlu bir sitemap.xml üretir.
 *
 * Çalıştırma:
 *   node scripts/gen-sitemap.mjs
 *
 * Build pipeline:
 *   "prebuild": "node scripts/gen-sitemap.mjs"  (package.json)
 *
 * Çıktı: public/sitemap.xml  (Vite build'i bunu dist/'e otomatik kopyalar)
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DOMAIN = "https://www.simizolasyon.com.tr";
const TODAY = new Date().toISOString().slice(0, 10);

// ─────────────────────────────────────────────────────────────
// Slug parsers (regex bazlı — TS modülü olmadan veri çıkarır)
// ─────────────────────────────────────────────────────────────

/** `slug: "..."` formatlı string literal'leri çıkarır */
const matchSlugLiterals = (file) => {
  const content = readFileSync(join(ROOT, file), "utf-8");
  const matches = [...content.matchAll(/slug:\s*"([a-z][a-z0-9-]+)"/g)];
  return [...new Set(matches.map((m) => m[1]))]; // unique
};

/** districtContent.ts'deki record key'lerini çıkarır */
const matchRecordKeys = (file) => {
  const content = readFileSync(join(ROOT, file), "utf-8");
  // SERVICE_CONTENT / DISTRICT_CONTENT objesi içindeki key'ler — satır başı 2 boşluk indent ile başlar
  const matches = [...content.matchAll(/^\s{2}"([a-z][a-z0-9-]+)":\s*\{$/gm)];
  return [...new Set(matches.map((m) => m[1]))];
};

/** blogPosts.ts'den yayın tarihlerini de çıkar (lastmod için) */
const matchBlogWithDate = (file) => {
  const content = readFileSync(join(ROOT, file), "utf-8");
  // Her post: { slug: "...", ..., date: "YYYY-MM-DD", ... }
  const re = /slug:\s*"([a-z0-9-]+)"[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g;
  const out = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    out.push({ slug: m[1], date: m[2] });
  }
  return out;
};

// ─────────────────────────────────────────────────────────────
// URL listesi topla
// ─────────────────────────────────────────────────────────────

const services = matchSlugLiterals("src/lib/services.ts");
const blog = matchBlogWithDate("src/lib/blogPosts.ts");
const projects = matchSlugLiterals("src/lib/projects.ts");
const districts = matchRecordKeys("src/lib/districtContent.ts");

// ─────────────────────────────────────────────────────────────
// URL Builder
// ─────────────────────────────────────────────────────────────

const urls = [];

const addUrl = (path, opts = {}) => {
  urls.push({
    loc: `${DOMAIN}${path}`,
    lastmod: opts.lastmod || TODAY,
    changefreq: opts.changefreq || "monthly",
    priority: opts.priority ?? 0.7,
    image: opts.image,
  });
};

// ── Statik core sayfalar ──
addUrl("/", { changefreq: "weekly", priority: 1.0 });
addUrl("/hizmetler", { changefreq: "weekly", priority: 0.95 });
addUrl("/projelerimiz", { changefreq: "weekly", priority: 0.9 });
addUrl("/blog", { changefreq: "weekly", priority: 0.85 });
addUrl("/iletisim", { changefreq: "monthly", priority: 0.8 });
addUrl("/hakkimizda", { changefreq: "monthly", priority: 0.75 });

// ── Hizmet detay sayfaları ──
const featuredServices = new Set([
  "cati-izolasyon-izmir",
  "teras-izolasyon-izmir",
  "havuz-izolasyon-izmir",
  "epoksi-zemin-kaplama-izmir",
  "polyurea-sprey-izmir",
  "endustriyel-zemin-kaplama-izmir",
]);
const secondaryServices = new Set([
  "poliuretan-izolasyon-izmir",
  "sandvic-panel-izolasyon-izmir",
  "beton-ustu-izolasyon-izmir",
  "seramik-ustu-izolasyon-izmir",
  "islak-zemin-izolasyon-izmir",
  "asansor-cukuru-izolasyon-izmir",
  "enjeksiyon-yalitim-izmir",
  "otopark-izolasyon-izmir",
  "perde-beton-izolasyon-izmir",
]);

services.forEach((slug) => {
  const priority = featuredServices.has(slug) ? 0.9 : secondaryServices.has(slug) ? 0.85 : 0.75;
  addUrl(`/hizmetler/${slug}`, { changefreq: "monthly", priority });
});

// ── İlçe bazlı landing sayfaları (long-tail SEO) ──
districts.forEach((slug) => {
  addUrl(`/${slug}`, { changefreq: "monthly", priority: 0.85 });
});

// ── Proje detay sayfaları ──
projects.forEach((slug) => {
  addUrl(`/projelerimiz/${slug}`, {
    changefreq: "monthly",
    priority: 0.75,
    image: existsSync(join(ROOT, `public/projects/${slug}/foto-01.jpg`))
      ? `${DOMAIN}/projects/${slug}/foto-01.jpg`
      : undefined,
  });
});

// ── Blog yazıları ──
blog.forEach(({ slug, date }) => {
  addUrl(`/blog/${slug}`, {
    lastmod: date,
    changefreq: "monthly",
    priority: 0.7,
  });
});

// ─────────────────────────────────────────────────────────────
// XML üret
// ─────────────────────────────────────────────────────────────

const escape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const urlBlock = (u) => {
  const parts = [
    `    <loc>${escape(u.loc)}</loc>`,
    `    <lastmod>${u.lastmod}</lastmod>`,
    `    <changefreq>${u.changefreq}</changefreq>`,
    `    <priority>${u.priority.toFixed(2)}</priority>`,
  ];
  if (u.image) {
    parts.push(`    <image:image><image:loc>${escape(u.image)}</image:loc></image:image>`);
  }
  return `  <url>\n${parts.join("\n")}\n  </url>`;
};

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(urlBlock).join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public/sitemap.xml"), xml, "utf-8");

// ─────────────────────────────────────────────────────────────
// Raporlama
// ─────────────────────────────────────────────────────────────

const byType = {
  Static: urls.filter((u) => /\/(hakkimizda|iletisim|hizmetler|projelerimiz|blog)?$/.test(u.loc.replace(DOMAIN, "")) && !u.loc.includes("/hizmetler/") && !u.loc.includes("/projelerimiz/") && !u.loc.includes("/blog/")).length,
  Services: urls.filter((u) => u.loc.includes("/hizmetler/")).length,
  Districts: districts.length,
  Projects: urls.filter((u) => u.loc.includes("/projelerimiz/")).length,
  Blog: urls.filter((u) => u.loc.includes("/blog/")).length,
};

console.log(`✓ sitemap.xml üretildi (${urls.length} URL)`);
console.log(`  • Statik:    ${byType.Static}`);
console.log(`  • Hizmet:    ${byType.Services}`);
console.log(`  • İlçe:      ${byType.Districts}`);
console.log(`  • Proje:     ${byType.Projects}`);
console.log(`  • Blog:      ${byType.Blog}`);
console.log(`  • Domain:    ${DOMAIN}`);
console.log(`  • Lastmod:   ${TODAY}`);
