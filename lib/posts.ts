import { readdirSync, readFileSync } from "fs";
import path from "path";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

function parseFrontmatter(raw: string): Record<string, string> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon > 0) {
      result[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    }
  }
  return result;
}

export function getAllPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), "app", "posts");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = readFileSync(path.join(dir, f), "utf8");
      const fm = parseFrontmatter(raw);
      return { slug, title: fm.title ?? slug, date: fm.date ?? "" };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
