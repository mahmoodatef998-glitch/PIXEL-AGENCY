"use client";

import Link from "next/link";

export default function MarketingError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container py-24">
      <p className="text-xs uppercase tracking-[0.14em] text-accent">Error</p>
      <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight">Something went wrong</h1>
      <p className="mt-4 max-w-xl text-muted">{error.message || "An unexpected error occurred. Please try again."}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:border-accent"
        >
          Try again
        </button>
        <Link href="/" className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold hover:border-accent">
          Go home
        </Link>
      </div>
    </main>
  );
}
