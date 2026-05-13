import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { MotionEnhancer } from "@/components/motion-enhancer";
import { Nav } from "@/components/nav";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { getBlogPosts, getHomepageContent } from "@/lib/content";
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
    url: "https://pixelpulse.agency",
    description: "Best creative marketing agency in Dubai. Specialists in social media, performance ads, and custom systems for UAE businesses.",
    address: {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <SmoothScrollProvider />
      <MotionEnhancer />
      <Nav />
      <main>
        <HeroSection tools={data.tools} />
        <ServicesSection services={data.services} />
        <ProcessAndPricing pricingPlans={data.pricingPlans} />
        <CaseAndTestimonials caseStudies={data.caseStudies} testimonials={data.testimonials} />
        <FaqAndBlogSection faqs={data.faqItems} posts={posts} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

