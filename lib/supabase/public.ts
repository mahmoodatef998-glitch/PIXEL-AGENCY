import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Anonymous, cookie-free client for reading public site content (no request
 * scope needed, safe to call from generateStaticParams / build time).
 */
export function createPublicClient() {
  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
}

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
