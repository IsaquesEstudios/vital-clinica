import path from "path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";
import content from "./src/data/vital-content.json";

// Only public, visitor-independent routes belong in this list. Parameterized
// routes need one concrete URL per record; preview routes must never be crawled.
const MAX_PRERENDER_PAGES = 1000;
export const staticPages = [
  "/",
  "/exames",
  "/noticias",
  "/a-clinica",
  "/equipe",
  "/contato",
  "/politica-de-privacidade",
  "/termos-de-uso",
  ...content.services.map((service) => `/${service.slug}`),
  ...content.articles.map((article) => `/noticias/${article.slug}`),
].map((routePath) => ({ path: routePath }));

if (staticPages.length > MAX_PRERENDER_PAGES) {
  throw new Error(`Static page count exceeds the ${MAX_PRERENDER_PAGES}-page safety limit.`);
}

export const staticPrerender = {
  enabled: true,
  autoStaticPathsDiscovery: false,
  crawlLinks: false,
  autoSubfolderIndex: true,
  failOnError: true,
  concurrency: 4,
};

export default defineConfig(({ command, mode }) => {
  // Cloudflare Workers plugin only on build (produces the worker output);
  // the workerd runtime isn't available for the dev server.
  const useCloudflare = command === "build";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      mockupPreviewPlugin({ designSystemPolling: true }),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      ...(useCloudflare ? [cloudflare({ viteEnvironment: { name: "ssr" } })] : []),
      tanstackStart({
        pages: staticPages,
        prerender: staticPrerender,
      }),
      viteReact(),
      ...(mode === "development" ? [componentTagger()] : []),
    ],
  };
});
