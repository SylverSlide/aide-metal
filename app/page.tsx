import { Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { generalFaq } from "@/data/faq";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesGrid from "@/components/ServicesGrid";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import RealisationsPreview from "@/components/RealisationsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import ZonesSection from "@/components/ZonesSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

const homepageProcess = [
  {
    title: "Vous nous appelez",
    description:
      "Expliquez-nous votre situation par téléphone ou via le formulaire. On comprend vite.",
  },
  {
    title: "On passe voir",
    description:
      "Un technicien se déplace pour évaluer, prendre les mesures si besoin, et vous donner un prix.",
  },
  {
    title: "On intervient",
    description:
      "Dépannage, réparation, installation ou motorisation — on fait le travail proprement.",
  },
  {
    title: "Vous êtes tranquille",
    description:
      "Votre rideau fonctionne, votre commerce est sécurisé. On garantit notre travail.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Rideaux métalliques en Île-de-France"
        subtitle="Installation, dépannage, réparation et motorisation pour commerces et locaux professionnels. Intervention rapide, devis gratuit."
        showImage
        imageLabel="Photo : technicien Aide Métal devant un rideau métallique installé"
      />

      <ClientsSection />

      <ServicesGrid />

      <BrandsSection />

      <PricingSection />

      <CTASection
        title="Rideau bloqué ? On intervient vite."
        subtitle="Appelez-nous maintenant — un technicien vous répond directement."
      />

      <AboutSection />

      <TrustBadges />

      <ProcessSection title="Comment ça se passe" steps={homepageProcess} />

      <RealisationsPreview />

      <TestimonialsSection limit={3} />

      <ZonesSection />

      <FAQSection
        items={generalFaq.slice(0, 5)}
        subtitle="Les réponses aux questions qu'on nous pose le plus souvent."
      />

      {/* Final contact section */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28" id="devis">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                  Contact
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
                  Demander un devis complet
                </h2>
                <p className="mt-4 text-[15px] text-gray-500">
                  Pour un devis détaillé, remplissez le formulaire. On vous
                  rappelle rapidement avec un prix.
                </p>
                <div className="mt-8">
                  <a
                    href={siteConfig.phoneHref}
                    aria-label={`Appeler le ${siteConfig.phone}`}
                    className="flex items-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-accent-500" />
                    <span className="text-lg font-bold text-primary-950">
                      {siteConfig.phone}
                    </span>
                  </a>
                  <p className="mt-2 text-sm text-gray-400">
                    Lun–Ven 8h–19h · Sam 8h–18h
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold text-primary-700 hover:text-accent-600 transition-colors"
                  >
                    Page contact complète →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
