import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-8">All Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group block">
              <span className="text-lg font-medium group-hover:underline underline-offset-2">
                {post.title}
              </span>
              <time
                dateTime={post.date}
                className="block text-sm text-gray-500 mt-0.5"
              >
                {formatDate(post.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
