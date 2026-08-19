import { getBlogPosts, getHomepageContent } from "@/lib/content";
import { buildFaqSchema, jsonLdScript } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site-config";
import { CaseAndTestimonials } from "@/sections/case-testimonial-section";
import { ContactSection } from "@/sections/contact-section";
import { FaqAndBlogSection } from "@/sections/faq-blog-section";
import { HeroSection } from "@/sections/hero-section";
import { ProcessAndPricing } from "@/sections/process-pricing-section";
import { ServicesSection } from "@/sections/services-section";

export default async function HomePage() {
  const data = await getHomepageContent();
  const posts = await getBlogPosts();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PixelPulse Agency Dubai",
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE"
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin]
  };

  const faqSchema = buildFaqSchema(data.faqItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />
      <main>
        <HeroSection tools={data.tools} />
        <ServicesSection services={data.services} />
        <ProcessAndPricing pricingPlans={data.pricingPlans} agencyComparison={data.agencyComparison} />
        <CaseAndTestimonials caseStudies={data.caseStudies} testimonials={data.testimonials} />
        <FaqAndBlogSection faqs={data.faqItems} posts={posts} />
        <ContactSection />
      </main>
    </>
  );
}
