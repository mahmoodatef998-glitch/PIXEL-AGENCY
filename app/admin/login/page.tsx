"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError("Wrong username or password.");
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8">
        <p className="text-xs uppercase tracking-[0.14em] text-accent">Admin</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-text">Sign in</h1>
        <p className="mt-2 text-sm text-muted">Manage the projects shown on the Our Work page.</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.1em] text-muted" htmlFor="email">
              Username
            </label>
            <input
              id="email"
              type="text"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.1em] text-muted" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text outline-none focus:border-accent"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
