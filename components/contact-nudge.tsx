"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { Button } from "./ui/button";

/**
 * A subtle nudging component that appears after a delay
 * to encourage the user to reach out.
 */
export function ContactNudge() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed this in the session
    const isDismissed = sessionStorage.getItem("contact_nudge_dismissed");
    if (isDismissed) return;

    // Show after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    sessionStorage.setItem("contact_nudge_dismissed", "true");
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      handleDismiss();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: 10 }}
          className="fixed bottom-28 right-6 z-[100] w-[calc(100vw-3rem)] max-w-[340px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {/* Ambient decorative glow */}
            <div className="absolute -right-4 -top-4 size-24 rounded-full bg-[color-mix(in_oklab,var(--accent)_15%,transparent)] blur-2xl" />
            
            <button 
              onClick={handleDismiss}
              className="absolute right-3 top-3 text-muted hover:text-text transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--accent)_20%,transparent)] text-accent">
                <MessageSquare className="size-6" />
              </div>
              <div className="pr-4">
                <h4 className="font-display font-bold text-text text-base leading-tight">Need a growth strategy?</h4>
                <p className="mt-1.5 text-sm text-muted/90 leading-relaxed">
                  Let's map out your project together. We typically respond within 2 business hours.
                </p>
                <Button 
                  onClick={handleContact}
                  className="mt-4 w-full h-10 text-xs font-bold uppercase tracking-wider"
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
