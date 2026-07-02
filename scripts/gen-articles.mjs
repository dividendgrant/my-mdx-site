// Build-time only. Reads content/*.mdx, renders the markdown body to HTML,
// and writes lib/articles.generated.json. This runs as a standalone Node
// process during `npm run build` and is NEVER imported by the app, so no
// `fs` or markdown compiler ends up in the Cloudflare Worker runtime.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: false, linkify: true, typographer: false });

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");
const OUT = path.join(ROOT, "lib", "articles.generated.json");

// Deliberate display order for homepage + routing.
const ORDER = [
  "90-day-tether",
  "arbitrage-algorithm",
  "loneliness-ladder",
  "moving-parts",
];

const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
const bySlug = {};
for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug || file.replace(/\.mdx$/, "");
  bySlug[slug] = {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    image: data.image ?? "",
    html: md.render(content),
  };
}

const ordered = ORDER.filter((s) => bySlug[s]).map((s) => bySlug[s]);
const extras = Object.keys(bySlug)
  .filter((s) => !ORDER.includes(s))
  .sort()
  .map((s) => bySlug[s]);
const articles = [...ordered, ...extras];

fs.writeFileSync(OUT, JSON.stringify(articles, null, 2));
console.log(`gen-articles: wrote ${articles.length} articles to ${OUT}`);
