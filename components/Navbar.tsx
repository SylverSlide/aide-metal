import Link from "next/link";
import { Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-950 text-xs font-bold text-white shadow-sm">
            AM
          </span>
          <span className="text-[15px] font-bold text-primary-950">
            Aide Métal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {"children" in link && link.children ? (
                  <div className="relative">
                    <span className="flex cursor-default items-center gap-1 px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary-950">
                      {link.label}
                      <svg
                        className="h-3 w-3 opacity-40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                    <div className="invisible absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl shadow-black/5 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary-950"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <a
            href={siteConfig.phoneHref}
            aria-label={`Appeler le ${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent-500/20 transition-all hover:bg-accent-600 hover:shadow-md hover:shadow-accent-500/25 lg:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
