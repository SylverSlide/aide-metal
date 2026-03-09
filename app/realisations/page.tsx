import type { Metadata } from "next";
import { realisations } from "@/data/realisations";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Nos Réalisations | Aide Métal – Rideau Métallique Île-de-France",
  description:
    "Découvrez nos réalisations en installation, dépannage, réparation et motorisation de rideaux métalliques pour commerces et locaux professionnels en Île-de-France.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <HeroSection
        title="Nos réalisations"
        subtitle="Quelques exemples d'interventions chez des commerçants et professionnels en Île-de-France."
        showCTAs={false}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((real) => (
              <article
                key={real.id}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
              >
                <ImagePlaceholder
                  label={real.imageLabel}
                  className="rounded-none"
                />
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-600">
                    {real.service}
                  </p>
                  <h2 className="mb-2 text-lg font-bold text-primary-950">
                    {real.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {real.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    {real.type} · {real.city}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet de rideau métallique ?"
        subtitle="Appelez-nous ou demandez un devis. C'est gratuit."
      />
    </>
  );
}
