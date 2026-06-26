export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return { __html: JSON.stringify(data) };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

export function buildArticleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "PixelPulse Agency"
    },
    publisher: {
      "@type": "Organization",
      name: "PixelPulse Agency"
    },
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pixelpulse.agency/blog/${post.slug}`
    }
  };
}
