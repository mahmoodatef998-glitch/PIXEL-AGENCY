export type PortfolioProjectRow = {
  id: string;
  slug: string;
  category: string;
  client: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  cover_image: string | null;
  gallery: string[];
  video_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
};
