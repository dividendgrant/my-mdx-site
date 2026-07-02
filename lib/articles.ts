import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ArticleMeta = {
  title: string;
  slug: string;
  image: string;
  description: string;
};

export type Article = ArticleMeta & { content: string };

const ORDER = [
  "90-day-tether",
  "arbitrage-algorithm",
  "loneliness-ladder",
  "moving-parts",
];

function readMeta(slug: string): ArticleMeta {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
  const { data } = matter(raw);
  return { ...(data as Omit<ArticleMeta, "slug">), slug };
}

export function getAllSlugs(): string[] {
  const found = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
  const ordered = ORDER.filter((s) => found.includes(s));
  const extras = found.filter((s) => !ORDER.includes(s)).sort();
  return [...ordered, ...extras];
}

export const articles: ArticleMeta[] = getAllSlugs().map(readMeta);

export function getArticle(slug: string): Article | null {
  const fp = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fp)) return null;
  const { data, content } = matter(fs.readFileSync(fp, "utf8"));
  return { ...(data as Omit<ArticleMeta, "slug">), slug, content };
}
