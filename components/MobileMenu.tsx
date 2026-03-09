"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Phone, FileText, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setTimeout(() => setExpandedItem(null), 300);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-primary-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-white">
            AM
          </span>
          <span className="text-sm font-bold text-white">Aide Métal</span>
        </div>
        <button
          onClick={close}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white active:bg-white/20"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 overflow-y-auto px-5 py-6">
        <ul className="space-y-1">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className="transition-all duration-500"
              style={{
                transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {"children" in link && link.children ? (
                <div>
                  <button
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === link.label ? null : link.label
                      )
                    }
                    className="flex min-h-[56px] w-full items-center justify-between text-[1.375rem] font-bold text-white active:text-white/70"
                  >
                    {link.label}
                    <ArrowRight
                      className={`h-5 w-5 text-white/30 transition-transform duration-200 ${
                        expandedItem === link.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItem === link.label
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="mb-2 ml-1 space-y-1 border-l border-accent-500/30 pl-5">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="flex min-h-[44px] items-center text-base text-primary-300 active:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex min-h-[56px] items-center text-[1.375rem] font-bold text-white active:text-white/70"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Info */}
        <div
          className="mt-8 border-t border-white/10 pt-6 transition-all duration-500"
          style={{
            transitionDelay: open ? "500ms" : "0ms",
            opacity: open ? 1 : 0,
          }}
        >
          <p className="text-xs text-white/30">
            Lun–Ven 8h–19h · Sam 8h–18h
          </p>
          <p className="mt-1 text-xs text-white/30">
            RC Pro & garantie décennale · CB, chèque, virement
          </p>
        </div>
      </nav>

      {/* Bottom CTAs */}
      <div
        className="relative border-t border-white/10 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] pt-5 transition-all duration-500"
        style={{
          transitionDelay: open ? "400ms" : "0ms",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <a
          href={siteConfig.phoneHref}
          className="flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-accent-500 text-base font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.3)] active:bg-accent-600"
        >
          <Phone className="h-5 w-5" />
          {siteConfig.phone}
        </a>
        <Link
          href="/contact"
          onClick={close}
          className="mt-3 flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 text-base font-semibold text-white active:bg-white/10"
        >
          <FileText className="h-4 w-4" />
          Demander un devis
        </Link>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 active:bg-gray-100"
        aria-label="Ouvrir le menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
