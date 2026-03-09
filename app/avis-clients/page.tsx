import type { Metadata } from "next";
import { testimonials } from "@/data/testimonials";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Avis Clients | Aide Métal – Rideau Métallique Île-de-France",
  description:
    "Découvrez les avis de nos clients. Installation, dépannage, réparation et motorisation de rideaux métalliques en Île-de-France.",
  alternates: { canonical: "/avis-clients" },
};

export default function AvisClientsPage() {
  return (
    <>
      <HeroSection
        title="Avis de nos clients"
        subtitle="Ce que disent les commerçants et professionnels qui ont fait appel à nos services."
        showCTAs={false}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 sm:p-8"
              >
                <span className="mb-3 block text-4xl leading-none text-primary-200 select-none">
                  &ldquo;
                </span>
                <blockquote className="flex-1">
                  <p className="text-[15px] leading-relaxed text-gray-500">
                    {t.text}
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-50 text-sm font-bold text-primary-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-950">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {t.role} – {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Besoin d'un rideau métallique ?"
        subtitle="Appelez-nous ou demandez un devis gratuit."
      />
    </>
  );
}
