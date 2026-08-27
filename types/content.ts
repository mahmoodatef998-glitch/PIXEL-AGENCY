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

export type PortfolioProject = {
  slug: string;
  category: string;
  client: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  coverImage: string;
  gallery: string[];
  videoUrls: string[];
  featured?: boolean;
  updatedAt?: string;
  /** True until the real client assets replace this sample entry. */
  isPlaceholder?: boolean;
};

