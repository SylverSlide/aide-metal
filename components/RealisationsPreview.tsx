import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { realisations } from "@/data/realisations";
import ImagePlaceholder from "./ImagePlaceholder";

interface RealisationsPreviewProps {
  limit?: number;
  showLink?: boolean;
}

export default function RealisationsPreview({
  limit = 3,
  showLink = true,
}: RealisationsPreviewProps) {
  const displayed = realisations.slice(0, limit);

  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Portfolio
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Quelques interventions récentes
          </h2>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
          {displayed.map((real) => (
            <article
              key={real.id}
              className="w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 sm:w-auto sm:shrink"
            >
              <ImagePlaceholder
                label={real.imageLabel}
                className="rounded-none"
              />
              <div className="p-5 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-600">
                  {real.service}
                </p>
                <h3 className="mb-2 font-bold text-primary-950">
                  {real.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-500">
                  {real.description}
                </p>
                <p className="text-xs text-gray-400">
                  {real.type} · {real.city}
                </p>
              </div>
            </article>
          ))}
        </div>

        {showLink && (
          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
            >
              Voir toutes nos réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
