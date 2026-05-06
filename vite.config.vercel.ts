/**
 * Vercel-specific SPA build config.
 * Standalone Vite + React + Tailwind + TanStack Router (CSR mode).
 * Cloudflare Workers plugin'i ve TanStack Start SSR plugin'i bypass edilir.
 *
 * Build:  vite build --config vite.config.vercel.ts
 * Output: dist/ (with index.html)
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: resolve(__dirname, "src/routes"),
      generatedRouteTree: resolve(__dirname, "src/routeTree.gen.ts"),
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["@tanstack/react-router"],
        },
      },
    },
  },
});
