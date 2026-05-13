import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "purple" | "ghost";
  size?: "default" | "icon";
};

export function Button({ className, variant = "primary", size = "default", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition will-change-transform active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-gradient-to-br from-accent to-[#00c4d9] text-[#041018] shadow-[0_0_0_0_rgba(0,229,255,0.35)] hover:shadow-[0_0_32px_rgba(0,229,255,0.35)] hover:-translate-y-0.5",
    secondary:
      "bg-transparent border border-border text-text hover:border-purple hover:bg-[color-mix(in_oklab,var(--purple)_20%,transparent)]",
    purple: "bg-purple text-white hover:brightness-110 hover:-translate-y-0.5",
    ghost: "bg-transparent text-text hover:bg-surface2"
  };

  const sizes = {
    default: "px-5 py-3",
    icon: "p-0"
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

