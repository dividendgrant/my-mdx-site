import { readdirSync } from "fs";
import path from "path";
import type { ComponentType } from "react";
import { formatDate } from "@/lib/posts";

type Frontmatter = {
  title: string;
  date: string;
};

type PostModule = {
  default: ComponentType;
  frontmatter: Frontmatter;
};

export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app", "posts");
  return readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
}

export const dynamicParams = false;

export default async function Page(props: PageProps<"/posts/[slug]">) {
  const { slug } = await props.params;
  const { default: Post, frontmatter } = (await import(
    `@/app/posts/${slug}.mdx`
  )) as unknown as PostModule;

  return (
    <article className="max-w-2xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          {frontmatter.title}
        </h1>
        <time
          dateTime={frontmatter.date}
          className="text-sm text-gray-500"
        >
          {formatDate(frontmatter.date)}
        </time>
      </header>
      <div className="prose prose-neutral max-w-none">
        <Post />
      </div>
    </article>
  );
}
