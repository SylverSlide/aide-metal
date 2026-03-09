import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <p className="text-6xl font-extrabold text-primary-200 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-primary-950 sm:text-3xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-gray-500">
          Cette page n&apos;existe pas ou a été déplacée. Vous pouvez retourner
          à l&apos;accueil ou nous appeler directement.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary-950 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-900 active:scale-[0.98] sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <a
            href={siteConfig.phoneHref}
            aria-label={`Appeler le ${siteConfig.phone}`}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-accent-600 active:scale-[0.98] sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
