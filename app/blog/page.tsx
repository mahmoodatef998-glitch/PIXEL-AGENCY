import Link from "next/link";
import { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "SEO-focused growth insights for UAE businesses: paid ads, lead generation, CRM, and conversion systems."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Blog</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">Growth insights & execution playbooks</h1>
      <p className="mt-3 max-w-2xl text-muted">Built to rank, educate, and convert serious prospects into qualified calls.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="glass rounded-2xl border border-border p-6">
            <p className="text-xs uppercase tracking-[0.1em] text-purple">
              {post.category} • {post.readTime}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">{post.title}</h2>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <p className="mt-3 text-xs text-muted">{new Date(post.publishedAt).toLocaleDateString()}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-2 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

