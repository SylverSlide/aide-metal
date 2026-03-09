import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { realisations } from "@/data/realisations";
import { images } from "@/data/images";
import FadeIn from "./FadeIn";

interface RealisationsPreviewProps {
  limit?: number;
  showLink?: boolean;
}

export default function RealisationsPreview({
  limit = 4,
  showLink = true,
}: RealisationsPreviewProps) {
  const displayed = realisations.slice(0, limit);
  const featured = displayed[0];
  const rest = displayed.slice(1);

  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
              Portfolio
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
              Quelques interventions récentes
            </h2>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-5 lg:grid-rows-2">
            {/* Featured */}
            {featured && (
              <FadeIn className="lg:col-span-3 lg:row-span-2">
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:h-[55%]">
                    <Image
                      src={images.realisations[0].src}
                      alt={images.realisations[0].alt}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold text-white">
                      {featured.service}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="mb-2 text-lg font-bold text-primary-950">
                      {featured.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-gray-500">
                      {featured.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {featured.type} · {featured.city}
                    </p>
                  </div>
                </article>
              </FadeIn>
            )}

            {/* Smaller cards */}
            {rest.map((real, i) => (
              <FadeIn
                key={real.id}
                delay={(i + 1) * 100}
                className="lg:col-span-2"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 sm:flex-row lg:flex-col">
                  <div className="relative shrink-0 overflow-hidden aspect-video sm:aspect-square sm:w-40 lg:aspect-video lg:w-auto">
                    <Image
                      src={images.realisations[i + 1]?.src || images.realisations[0].src}
                      alt={images.realisations[i + 1]?.alt || real.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-2.5 py-0.5 text-[10px] font-bold text-white">
                      {real.service}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <h3 className="mb-1 text-sm font-bold text-primary-950">
                      {real.title}
                    </h3>
                    <p className="mb-2 flex-1 text-xs leading-relaxed text-gray-500 line-clamp-3">
                      {real.description}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {real.type} · {real.city}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        {showLink && (
          <FadeIn>
            <div className="mt-8 text-center sm:mt-10">
              <Link
                href="/realisations"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
              >
                Voir toutes nos réalisations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
