"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#packages", label: "Packages" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#contact", label: "Contact" }
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div className="container glass rounded-full px-5 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="font-display font-extrabold tracking-tight flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_rgba(0,229,255,0.9)]" />
          PixelPulse
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((link) => (
            <a key={link.href} className="hover:text-accent transition" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="hidden md:block" href="#contact">
          <Button>Get Free Strategy Call</Button>
        </a>

        <button
          className="md:hidden rounded-lg border border-border p-2 text-muted hover:text-accent"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="container mt-3 glass rounded-xl p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface2 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Get Free Strategy Call</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

