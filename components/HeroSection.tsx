import Link from "next/link";
import { Phone, Camera, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCTAs?: boolean;
  showImage?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  showCTAs = true,
  showImage = false,
}: HeroSectionProps) {
  if (showImage) {
    return (
      <section className="relative overflow-hidden bg-primary-950">
        <HeroBg />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div>
              <h1 className="text-[1.875rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:text-[3.25rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-primary-300/90 sm:text-base lg:text-lg">
                {subtitle}
              </p>
              {showCTAs && (
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all hover:bg-accent-600 active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="group flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </div>

            <div className="relative hidden sm:block">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-accent-500/15 lg:-bottom-4 lg:-right-4" />
              <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] aspect-[4/3] lg:aspect-auto lg:h-80">
                <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-white/10 px-8 py-6">
                  <Camera className="mb-2 h-10 w-10 text-white/15" />
                  <span className="text-center text-xs text-white/25">
                    Photo : rideau métallique installé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-primary-950">
      <HeroBg />
      <div className="container relative mx-auto px-4 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[1.875rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-primary-300/90 sm:text-base lg:text-lg">
            {subtitle}
          </p>
          {showCTAs && (
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.phoneHref}
                className="group flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all hover:bg-accent-600 active:scale-[0.98] sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
    </section>
  );
}

function HeroBg() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.05),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}
