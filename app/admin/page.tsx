import { createClient } from "@/lib/supabase/server";
import { AdminBoard } from "./board";
import { signOut } from "./actions";
import type { PortfolioProjectRow } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { data: projects } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false })
    .returns<PortfolioProjectRow[]>();

  return (
    <main className="container py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-accent">Admin</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-text">Our Work projects</h1>
          <p className="mt-1 text-sm text-muted">Signed in as {user?.email}</p>
        </div>
        <form action={signOut}>
          <button className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text hover:border-accent">
            Sign out
          </button>
        </form>
      </div>

      <AdminBoard projects={projects ?? []} />
    </main>
  );
}
