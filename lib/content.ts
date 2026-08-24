import {
  agencyComparison,
  blogPosts,
  faqItems,
  portfolioProjects,
  pricingPlans,
  services,
  siteStats,
  tools
} from "@/content/site-content";
import { isCmsEnabled } from "@/cms/sanity";
import { createPublicClient, isSupabaseConfigured } from "@/lib/supabase/public";
import type { PortfolioProjectRow } from "@/lib/supabase/types";
import type { PortfolioProject } from "@/types/content";

function mapPortfolioRow(row: PortfolioProjectRow): PortfolioProject {
  return {
    slug: row.slug,
    category: row.category,
    client: row.client,
    title: row.title,
    summary: row.summary,
    challenge: row.challenge,
    solution: row.solution,
    results: row.results,
    coverImage: row.cover_image ?? "",
    gallery: row.gallery,
    videoUrls: row.video_urls,
    featured: row.featured,
    isPlaceholder: false
  };
}

/**
 * Content abstraction layer.
 * Replace local fallback with CMS queries when enabled.
 */
export async function getServices() {
  if (isCmsEnabled) {
    // TODO: Fetch from Sanity
  }
  return services;
}

export async function getServiceBySlug(slug: string) {
  const all = await getServices();
  return all.find((service) => service.slug === slug);
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  if (isSupabaseConfigured) {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("published", true)
      .order("featured", { ascending: false })
      .order("created_at", { ascending: false })
      .returns<PortfolioProjectRow[]>();

    if (data && data.length > 0) {
      return data.map(mapPortfolioRow);
    }
  }

  return portfolioProjects;
}

export async function getPortfolioProjectBySlug(slug: string) {
  if (isSupabaseConfigured) {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from("portfolio_projects")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle<PortfolioProjectRow>();

    if (data) return mapPortfolioRow(data);
  }

  const all = portfolioProjects;
  return all.find((project) => project.slug === slug);
}

export async function getBlogPosts() {
  if (isCmsEnabled) {
    // TODO: Fetch from Sanity
  }
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getHomepageContent() {
  return {
    siteStats,
    tools,
    services: await getServices(),
    portfolioProjects: await getPortfolioProjects(),
    faqItems,
    pricingPlans,
    agencyComparison
  };
}

