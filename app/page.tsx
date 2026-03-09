import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { generalFaq } from "@/data/faq";
import FadeIn from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ZonesSection from "@/components/ZonesSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import RealisationsPreview from "@/components/RealisationsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Rideaux métalliques en Île-de-France"
        subtitle="Installation, dépannage, réparation et motorisation pour commerces et locaux professionnels. Paris, petite et grande couronne, Oise, Aisne, Marne."
        showImage
      />

      <ClientsSection />

      <ServicesGrid />

      <FadeIn>
        <ZonesSection />
      </FadeIn>

      <CTASection
        title="Rideau bloqué ? On intervient vite."
        subtitle="Appelez-nous maintenant — un technicien vous répond directement."
      />

      <FadeIn>
        <AboutSection />
      </FadeIn>

      <FadeIn>
        <RealisationsPreview limit={4} />
      </FadeIn>

      <FadeIn>
        <TestimonialsSection limit={3} />
      </FadeIn>

      <FAQSection
        items={generalFaq.slice(0, 3)}
        subtitle="Les réponses aux questions qu'on nous pose le plus souvent."
      />

      {/* Contact — dark bookend */}
      <section className="relative overflow-hidden bg-primary-950 py-14 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,115,22,0.05),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/10 to-transparent" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                    Contact
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Demander un devis
                  </h2>
                  <p className="mt-4 text-[15px] text-primary-300/70">
                    Décrivez votre besoin, on vous rappelle rapidement avec un
                    prix. Gratuit et sans engagement.
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    aria-label={`Appeler le ${siteConfig.phone}`}
                    className="mt-8 flex min-h-[44px] items-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-accent-500" />
                    <span className="text-lg font-bold text-white">
                      {siteConfig.phone}
                    </span>
                  </a>
                  <p className="mt-2 text-sm text-white/30">
                    Lun–Ven 8h–19h · Sam 8h–18h
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/50 transition-colors hover:text-white/80"
                  >
                    Page contact complète
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
