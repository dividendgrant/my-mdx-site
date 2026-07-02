import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article ? `${article.title} | DigitalNomads.com` : "Article Not Found",
    description: article?.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(231,83%,96%)] to-white" />
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand-blue mb-4">NOMAD LIFE</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-balance">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
          <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(min-width:768px) 768px, 100vw" priority />
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />

        <div className="mt-12 pt-8 border-t border-neutral-100">
          <Link href="/#nomad" className="text-brand-blue font-semibold hover:underline text-sm">
            ← Back to all articles
          </Link>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
