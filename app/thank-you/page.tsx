import Link from "next/link";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Thank you"
};

export default function ThankYouPage() {
  return (
    <main className="container py-20">
      <div className="mx-auto max-w-2xl">
        <div className="glass rounded-2xl border border-border p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="inline-flex size-11 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--success)_18%,transparent)] text-success">
              <CheckCircle2 className="size-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.14em] text-accent">Request sent</p>
              <h1 className="mt-2 font-display text-3xl md:text-4xl font-extrabold tracking-tight">
                Thanks — we got your message.
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted">
                Our team will review your request and reach out within <span className="text-text font-semibold">2 business hours</span>.
                If it’s urgent, you can message us on WhatsApp now.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/971545535031?text=Hi%20PixelPulse%2C%20I%20just%20submitted%20the%20form%20and%20would%20like%20to%20talk."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full">
                <MessageCircle className="size-4" />
                WhatsApp now
              </Button>
            </a>
            <Link href="/#services" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full">
                <ArrowLeft className="size-4" />
                Back to site
              </Button>
            </Link>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-bg p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">What happens next</p>
            <ol className="mt-3 grid gap-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-semibold">1.</span> We review your goals + budget.
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-semibold">2.</span> You get a short plan and quick wins.
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-semibold">3.</span> If it’s a fit, we build your growth engine.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}

