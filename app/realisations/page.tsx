import type { Metadata } from "next";
import Image from "next/image";
import { realisations } from "@/data/realisations";
import { images } from "@/data/images";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";

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
            {realisations.map((real, i) => (
              <FadeIn key={real.id} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={
                        images.realisations[i]?.src ||
                        images.realisations[0].src
                      }
                      alt={
                        images.realisations[i]?.alt || real.title
                      }
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold text-white">
                      {real.service}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
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
              </FadeIn>
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
