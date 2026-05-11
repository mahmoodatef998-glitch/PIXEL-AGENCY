import Link from "next/link";
import { Reveal } from "@/animations/reveal";
import type { BlogPost } from "@/types/content";

export function FaqAndBlogSection({
  faqs,
  posts
}: {
  faqs: { q: string; a: string }[];
  posts: BlogPost[];
}) {
  return (
    <section className="bg-surface border-y border-border py-20">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">FAQ</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Questions before you book?</h2>
          </Reveal>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.04}>
                <article className="rounded-xl border border-border bg-bg p-4">
                  <h3 className="text-sm font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-sm text-muted">{faq.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.14em] text-accent">Blog</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">SEO authority engine</h2>
          </Reveal>
          <div className="mt-6 space-y-3">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Link href={`/blog/${post.slug}`} className="block rounded-xl border border-border bg-bg p-4 transition hover:border-accent">
                  <p className="text-xs uppercase tracking-[0.08em] text-purple">
                    {post.category} • {post.readTime}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link href="/blog" className="mt-5 inline-block text-sm font-semibold text-accent hover:underline">
            Visit full blog →
          </Link>
        </div>
      </div>
    </section>
  );
}

