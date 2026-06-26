import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { MotionShell } from "@/components/motion-shell";
import { Nav } from "@/components/nav";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionShell />
      <Nav />
      {children}
      <Footer />
      <FloatingCTA />
    </>
  );
}
