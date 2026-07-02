// Runtime-safe: imports pre-rendered article data (bundled JSON). No `fs`,
// no markdown/MDX compiler at runtime — safe for the Cloudflare Worker.
// The JSON is produced at build time by scripts/gen-articles.mjs.
import data from "./articles.generated.json";

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  html: string;
};

export const articles: Article[] = data as Article[];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
