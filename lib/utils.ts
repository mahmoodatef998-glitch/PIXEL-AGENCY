import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Converts a YouTube/Vimeo/TikTok watch URL into an embeddable iframe URL. */
export function getVideoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
      if (parsed.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
      }
    }
    if (host === "vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    if (host === "tiktok.com") {
      const match = parsed.pathname.match(/\/video\/(\d+)/);
      if (match) return `https://www.tiktok.com/embed/v2/${match[1]}`;
    }
    return null;
  } catch {
    return null;
  }
}

/** Platforms rendered via a native widget instead of a plain iframe embed. */
export function getVideoWidgetPlatform(url: string): "instagram" | "facebook" | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    if (host === "instagram.com") return "instagram";
    if (host === "facebook.com" || host === "fb.watch" || host === "m.facebook.com") return "facebook";
    return null;
  } catch {
    return null;
  }
}

