import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/animations/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="container py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-accent">Final CTA</p>
          <h2 className="mt-2 max-w-[14ch] font-display text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to build your growth engine?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Book a free 30-minute strategy call. No obligation. No fluff. We typically respond within 2 business hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/971500000000?text=Hi%20PixelPulse%2C%20I%20want%20a%20free%20strategy%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-accent hover:text-accent"
            >
              WhatsApp us now
            </a>
            <a
              href="mailto:hello@pixelpulse.agency?subject=Free%20Strategy%20Call"
              className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-purple hover:text-purple"
            >
              hello@pixelpulse.agency
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

