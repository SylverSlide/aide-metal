import Link from "next/link";
import { Phone, Camera, ArrowRight, Zap, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";

interface HeroSectionProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  showCTAs?: boolean;
  showImage?: boolean;
}

export default function HeroSection({
  title,
  titleAccent,
  subtitle,
  showCTAs = true,
  showImage = false,
}: HeroSectionProps) {
  if (showImage) {
    return (
      <section className="relative overflow-hidden bg-primary-950">
        <HeroBg />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-300/90">
                  Disponible aujourd&apos;hui
                </span>
              </div>

              <h1 className="text-[2.125rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.5rem] lg:text-[3.25rem]">
                {title}
                {titleAccent && (
                  <>
                    <br className="hidden sm:block" />{" "}
                    <span className="text-accent-500">{titleAccent}</span>
                  </>
                )}
              </h1>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-primary-300/80 sm:text-base lg:text-lg">
                {subtitle}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-accent-500" />
                  <span className="text-[13px] font-medium text-white/50">Intervention rapide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
                  <span className="text-[13px] font-medium text-white/50">Devis gratuit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent-500" />
                  <span className="text-[13px] font-medium text-white/50">7j/7</span>
                </div>
              </div>

              {showCTAs && (
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                  <a
                    href={siteConfig.phoneHref}
                    className="group flex min-h-[56px] items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 text-base font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.35)] transition-all hover:bg-accent-600 hover:shadow-[0_4px_32px_rgba(249,115,22,0.45)] active:scale-[0.98]"
                  >
                    <Phone className="h-[18px] w-[18px]" />
                    <span className="sm:hidden">Appeler maintenant</span>
                    <span className="hidden sm:inline">{siteConfig.phone}</span>
                  </a>
                  <Link
                    href="/contact"
                    className="group flex min-h-[56px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
                  >
                    Demander un devis gratuit
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
      <div className="container relative mx-auto px-4 py-14 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[2.125rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.5rem] lg:text-5xl">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-accent-500">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-primary-300/80 sm:text-base lg:text-lg">
            {subtitle}
          </p>
          {showCTAs && (
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.phoneHref}
                className="group flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 text-base font-bold text-white shadow-[0_4px_24px_rgba(249,115,22,0.35)] transition-all hover:bg-accent-600 hover:shadow-[0_4px_32px_rgba(249,115,22,0.45)] active:scale-[0.98] sm:w-auto"
              >
                <Phone className="h-[18px] w-[18px]" />
                <span className="sm:hidden">Appeler maintenant</span>
                <span className="hidden sm:inline">{siteConfig.phone}</span>
              </a>
              <Link
                href="/contact"
                className="group flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                Demander un devis gratuit
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
