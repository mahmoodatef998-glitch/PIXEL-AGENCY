import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container py-24">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist or was moved.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
        Go back home →
      </Link>
    </main>
  );
}

