import type { MetadataRoute } from "next";
import { getBlogPosts, getServices } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://pixelpulse.agency";
  const services = await getServices();
  const posts = await getBlogPosts();

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.85 },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}

