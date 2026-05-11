import Link from "next/link";
import { Reveal } from "@/animations/reveal";
import type { Service } from "@/types/content";

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="container py-20">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.14em] text-accent">Capabilities</p>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold tracking-tight">
          Everything you need to dominate your market
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Marketing services + technology infrastructure in one execution layer. This is where PixelPulse stands apart.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.04}>
            <article className="glass h-full rounded-2xl border border-border p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-purple">Service</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.short}</p>
              <p className="mt-4 text-sm text-muted line-clamp-3">{service.description}</p>
              <div className="mt-6">
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-accent hover:underline">
                  Explore service →
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

