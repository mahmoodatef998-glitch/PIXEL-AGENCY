import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10 md:py-12">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display font-extrabold text-lg">PixelPulse Agency</p>
          <p className="mt-2 text-sm text-muted">Marketing + Technology. One Roof. Zero Excuses.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
            <Link href="/#services" className="hover:text-accent">
              Services
            </Link>
            <Link href="/work" className="hover:text-accent">
              Our Work
            </Link>
            <Link href="/#packages" className="hover:text-accent">
              Pricing
            </Link>
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Lead Channels</p>
          <div className="mt-3 text-sm text-muted space-y-2">
            <p>Email: {siteConfig.email}</p>
            <p>WhatsApp: {siteConfig.whatsapp}</p>
            <p>Response time: within 2 business hours</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 md:mt-10 border-t border-border pt-5 text-xs text-muted">
        &copy; {new Date().getFullYear()} PixelPulse Agency. All rights reserved.
      </div>
    </footer>
  );
}

