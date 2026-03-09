import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Besoin d'un coup de main ?",
  subtitle = "Appelez-nous pour en discuter. C'est gratuit et sans engagement.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.06),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-primary-300/80 sm:text-base">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <a
            href={siteConfig.phoneHref}
            className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-accent-500 px-7 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all hover:bg-accent-600 active:scale-[0.98] sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="group flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-[15px] font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
