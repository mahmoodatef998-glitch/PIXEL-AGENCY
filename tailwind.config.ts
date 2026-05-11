import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080C14",
        surface: "#0F1520",
        surface2: "#121a28",
        border: "#1A2535",
        accent: "#00E5FF",
        purple: "#7B61FF",
        text: "#F0F4FF",
        muted: "#8B9AB5",
        success: "#00FF87"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        xl: "16px"
      },
      boxShadow: {
        glow: "0 0 32px rgba(0,229,255,0.25)"
      }
    }
  },
  plugins: []
} satisfies Config;

