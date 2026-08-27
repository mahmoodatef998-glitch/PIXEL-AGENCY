import type { MetadataRoute } from "next";
import { getBlogPosts, getPortfolioProjects, getServices } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const now = new Date();
  const services = await getServices();
  const posts = await getBlogPosts();
  const projects = await getPortfolioProjects();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}

