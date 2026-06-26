import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { buildArticleSchema, jsonLdScript } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = buildArticleSchema(post);

  return (
    <main className="container py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleSchema)} />
      <p className="text-xs uppercase tracking-[0.1em] text-purple">
        {post.category} • {post.readTime}
      </p>
      <h1 className="mt-2 max-w-4xl font-display text-4xl md:text-6xl font-extrabold tracking-tight">{post.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{post.excerpt}</p>
      <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-border">
        <div className="h-full w-1/2 bg-accent" />
      </div>
      <article className="prose prose-invert mt-8 max-w-3xl">
        {post.content.map((paragraph, index) => (
          <p key={`${post.slug}-p-${index}`} className="mt-4 text-base text-muted leading-7">
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
}
