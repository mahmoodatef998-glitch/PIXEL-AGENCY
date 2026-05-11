import Link from "next/link";
import { Metadata } from "next";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore PixelPulse services: social, media buying, web, CRM, ERP, branding, and lead generation."
};

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Services</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">Growth infrastructure services</h1>
      <p className="mt-3 max-w-2xl text-muted">Every service is designed to connect attention, conversion, and operational execution.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="glass rounded-2xl border border-border p-6">
            <h2 className="font-display text-2xl font-bold">{service.title}</h2>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              View page →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

