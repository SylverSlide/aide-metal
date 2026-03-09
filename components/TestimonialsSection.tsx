import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 sm:p-8">
      {/* Large decorative quote */}
      <span className="mb-3 block text-4xl leading-none text-primary-200 select-none">
        &ldquo;
      </span>
      <blockquote className="flex-1">
        <p className="text-[15px] leading-relaxed text-gray-600">
          {testimonial.text}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-50 text-sm font-bold text-primary-700">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-primary-950">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400">
            {testimonial.role} – {testimonial.city}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

interface TestimonialsSectionProps {
  limit?: number;
  showLink?: boolean;
}

export default function TestimonialsSection({
  limit,
  showLink = true,
}: TestimonialsSectionProps) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Témoignages
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {displayed.map((t) => (
            <div
              key={t.name}
              className="w-[85vw] shrink-0 snap-start sm:w-auto sm:shrink"
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {showLink && (
          <div className="mt-8 text-center sm:mt-10">
            <Link
              href="/avis-clients"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600"
            >
              Voir tous les avis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
