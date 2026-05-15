export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  painPoints: string[];
  process: string[];
  faq: { q: string; a: string }[];
  cta: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  content: string[];
};

export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metric: string;
  quote: string;
  author: string;
  image?: string;
};

