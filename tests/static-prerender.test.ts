import { expect, test } from "bun:test";
import content from "../src/data/vital-content.json";
import { staticPages, staticPrerender } from "../vite.config";

test("VPS output includes the homepage and all 63 imported articles", () => {
  const paths = new Set(staticPages.map((page) => page.path));
  expect(paths.has("/")).toBe(true);
  expect(content.articles).toHaveLength(63);
  for (const article of content.articles) {
    expect(paths.has(`/noticias/${article.slug}`)).toBe(true);
  }
});

test("VPS output includes all ten exams and public informational pages", () => {
  const paths = new Set(staticPages.map((page) => page.path));
  expect(content.services).toHaveLength(10);
  for (const service of content.services) {
    expect(paths.has(`/${service.slug}`)).toBe(true);
  }
  for (const path of ["/exames", "/noticias", "/a-clinica", "/equipe", "/contato", "/politica-de-privacidade", "/termos-de-uso"]) {
    expect(paths.has(path)).toBe(true);
  }
  expect(paths.size).toBe(81);
  expect(staticPages).toHaveLength(81);
});

test("prerender is explicit, produces directory indexes and fails on errors", () => {
  expect(staticPrerender.enabled).toBe(true);
  expect(staticPrerender.autoStaticPathsDiscovery).toBe(false);
  expect(staticPrerender.crawlLinks).toBe(false);
  expect(staticPrerender.autoSubfolderIndex).toBe(true);
  expect(staticPrerender.failOnError).toBe(true);
  expect(staticPages.some((page) => page.path.includes("__") || page.path.includes("$"))).toBe(false);
});