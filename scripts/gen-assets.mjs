/**
 * Generate favicon variants + og-cover.jpg from existing brand assets.
 * Run: node scripts/gen-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { writeFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC_LOGO = join(ROOT, "src/assets/logo.png");
const SRC_HERO = join(ROOT, "src/assets/hero.jpg");
const PUB = join(ROOT, "public");

async function makeFavicons() {
  console.log("→ favicon variants…");
  // Apple touch icon (180×180, padded square with white background)
  await sharp(SRC_LOGO)
    .resize(160, 160, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(PUB, "apple-touch-icon.png"));

  // 32×32 PNG (modern browsers love this)
  await sharp(SRC_LOGO)
    .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(PUB, "favicon-32x32.png"));

  // 16×16 PNG
  await sharp(SRC_LOGO)
    .resize(16, 16, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(PUB, "favicon-16x16.png"));

  // favicon.ico — Sharp can't make multi-size .ico, so write a single 32×32 PNG renamed
  // (modern browsers accept PNG content under .ico extension)
  await sharp(SRC_LOGO)
    .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(join(PUB, "favicon.ico"));

  console.log("  ✓ apple-touch-icon.png, favicon-32x32.png, favicon-16x16.png, favicon.ico");
}

async function makeOgCover() {
  console.log("→ og-cover.jpg (1200×630)…");

  // Crop hero to 1200×630 (Open Graph standard)
  const heroBuf = await sharp(SRC_HERO)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .toBuffer();

  // Create blue gradient overlay (75% opacity) + brand colors
  const overlaySvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a2456" stop-opacity="0.92"/>
        <stop offset="60%" stop-color="#1e40af" stop-opacity="0.78"/>
        <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.55"/>
      </linearGradient>
      <linearGradient id="cta" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="40%" stop-color="#fed7aa"/>
        <stop offset="80%" stop-color="#f97316"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <!-- Subtle grid -->
    <g stroke="rgba(255,255,255,0.06)" stroke-width="1">
      ${Array.from({ length: 22 }, (_, i) => `<line x1="${i * 56}" y1="0" x2="${i * 56}" y2="630"/>`).join("")}
      ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${i * 56}" x2="1200" y2="${i * 56}"/>`).join("")}
    </g>
    <!-- Eyebrow chip -->
    <g transform="translate(80,90)">
      <rect x="0" y="0" width="290" height="44" rx="22" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.20)"/>
      <circle cx="22" cy="22" r="5" fill="#f97316"/>
      <text x="40" y="28" fill="#ffffff" font-family="Manrope, system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="2.5px">İZMİR / BAYRAKLI</text>
    </g>
    <!-- Title -->
    <text x="80" y="232" fill="#ffffff" font-family="Bricolage Grotesque, Manrope, sans-serif" font-size="76" font-weight="700" letter-spacing="-1.5px">İzmir Profesyonel</text>
    <text x="80" y="318" fill="url(#cta)" font-family="Bricolage Grotesque, Manrope, sans-serif" font-size="76" font-weight="700" letter-spacing="-1.5px">İzolasyon ve Su Yalıtım</text>
    <text x="80" y="404" fill="#ffffff" font-family="Bricolage Grotesque, Manrope, sans-serif" font-size="76" font-weight="700" letter-spacing="-1.5px">Çözümleri</text>
    <!-- Tagline -->
    <text x="80" y="468" fill="rgba(255,255,255,0.85)" font-family="Manrope, system-ui, sans-serif" font-size="22" font-weight="500">10+ yıl saha tecrübesi · Yazılı işçilik garantisi · Ücretsiz keşif</text>
    <!-- Brand bar -->
    <rect x="0" y="570" width="1200" height="60" fill="#0a2456"/>
    <text x="80" y="610" fill="#ffffff" font-family="Bricolage Grotesque, sans-serif" font-size="26" font-weight="700">SİM İZOLASYON</text>
    <rect x="80" y="595" width="60" height="3" fill="#f97316"/>
    <text x="1120" y="610" fill="rgba(255,255,255,0.70)" font-family="JetBrains Mono, monospace" font-size="14" font-weight="500" text-anchor="end">simizolasyon.com.tr</text>
  </svg>`;

  await sharp(heroBuf)
    .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toFile(join(PUB, "og-cover.jpg"));

  console.log("  ✓ og-cover.jpg");
}

(async () => {
  await makeFavicons();
  await makeOgCover();
  console.log("Done.");
})();
