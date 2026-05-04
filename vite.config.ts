// @lovable.dev/vite-tanstack-config zaten şu plugin'leri içerir — manuel ekleme:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//   componentTagger (dev), VITE_* env injection, @ alias, React/TanStack dedupe.
//
// Vercel'e deploy için (VERCEL=1 ortam değişkeni Vercel build'inde otomatik set edilir),
// Cloudflare worker plugin'ini bypass ediyoruz; Vite default SSR/SPA build'i çalışır.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";

export default defineConfig(
  isVercel
    ? {
        // Vercel: Cloudflare worker plugin'ini devre dışı bırak.
        cloudflare: false,
      }
    : undefined,
);
