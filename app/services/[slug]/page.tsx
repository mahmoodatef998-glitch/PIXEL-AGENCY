import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, getServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "Organization", name: "PixelPulse Agency" },
    description: service.description
  };

  return (
    <main className="container py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Service Page</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">{service.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{service.description}</p>

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-bold">Pain points we solve</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
            {service.painPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-bold">Execution process</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
            {service.process.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-display text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-3">
          {service.faq.map((item) => (
            <article key={item.q} className="rounded-xl border border-border bg-bg p-4">
              <h3 className="text-sm font-semibold">{item.q}</h3>
              <p className="mt-1 text-sm text-muted">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-accent/50 bg-[color-mix(in_oklab,var(--accent)_8%,var(--surface))] p-6">
        <h2 className="font-display text-2xl font-bold">Ready to execute?</h2>
        <p className="mt-2 text-sm text-muted">{service.cta}</p>
        <Link href="/#contact" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          Book strategy call →
        </Link>
      </section>
    </main>
  );
}

