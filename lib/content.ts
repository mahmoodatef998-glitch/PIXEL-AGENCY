import { blogPosts, caseStudies, faqItems, pricingPlans, services, siteStats, testimonials, tools } from "@/content/site-content";
import { isCmsEnabled } from "@/cms/sanity";

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

export async function getCaseStudies() {
  if (isCmsEnabled) {
    // TODO: Fetch from Sanity
  }
  return caseStudies;
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
    caseStudies: await getCaseStudies(),
    testimonials,
    faqItems,
    pricingPlans
  };
}

