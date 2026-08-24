import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { MotionShell } from "@/components/motion-shell";
import { Nav } from "@/components/nav";
import { getSiteSettings } from "@/lib/content";

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const { logoUrl } = await getSiteSettings();

  return (
    <>
      <MotionShell />
      <Nav logoUrl={logoUrl} />
      {children}
      <Footer logoUrl={logoUrl} />
      <FloatingCTA />
    </>
  );
}
