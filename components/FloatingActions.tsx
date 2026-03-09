"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FloatingActions() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const content = (
    <div
      className={`fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300 sm:bottom-8 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/33184808080`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform active:scale-95 hover:scale-105"
        aria-label="Nous contacter sur WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>

      {/* Phone */}
      <a
        href={siteConfig.phoneHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30 transition-transform active:scale-95 hover:scale-105"
        aria-label="Appeler maintenant"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );

  return createPortal(content, document.body);
}
