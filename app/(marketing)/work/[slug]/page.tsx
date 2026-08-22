import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getPortfolioProjectBySlug, getPortfolioProjects } from "@/lib/content";
import { getVideoEmbedUrl, getVideoWidgetPlatform } from "@/lib/utils";
import { FacebookEmbed, InstagramEmbed } from "@/components/social-embed";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` }
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getPortfolioProjectBySlug(slug);
  if (!project) notFound();

  const embedUrl = project.videoUrl ? getVideoEmbedUrl(project.videoUrl) : null;
  const widgetPlatform = project.videoUrl ? getVideoWidgetPlatform(project.videoUrl) : null;

  return (
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">{project.category}</p>
      <h1 className="mt-2 font-display text-4xl md:text-6xl font-extrabold tracking-tight">{project.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{project.summary}</p>

      {project.isPlaceholder && (
        <p className="mt-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
          This is a sample slot — real client video, photos, and results will replace this content.
        </p>
      )}

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
        {embedUrl ? (
          <div className="relative aspect-video w-full">
            <iframe
              src={embedUrl}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : widgetPlatform === "instagram" && project.videoUrl ? (
          <InstagramEmbed url={project.videoUrl} />
        ) : widgetPlatform === "facebook" && project.videoUrl ? (
          <FacebookEmbed url={project.videoUrl} />
        ) : (
          <div className="relative aspect-video w-full bg-surface2">
            {project.coverImage && (
              <Image src={project.coverImage} alt={project.title} fill sizes="100vw" className="object-cover" />
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/55"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black">
                  Watch video <ExternalLink className="size-4" />
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      {project.gallery.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-border">
              <Image src={src} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <section className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-bold">Challenge</h2>
          <p className="mt-3 text-sm text-muted">{project.challenge}</p>
        </article>
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="font-display text-2xl font-bold">Solution</h2>
          <p className="mt-3 text-sm text-muted">{project.solution}</p>
        </article>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-display text-2xl font-bold">Results</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          {project.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-accent/50 bg-[color-mix(in_oklab,var(--accent)_8%,var(--surface))] p-6">
        <h2 className="font-display text-2xl font-bold">Want results like this?</h2>
        <p className="mt-2 text-sm text-muted">Book a free strategy call and we&apos;ll map a plan for your brand.</p>
        <Link href="/#contact" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          Book strategy call →
        </Link>
      </section>
    </main>
  );
}
