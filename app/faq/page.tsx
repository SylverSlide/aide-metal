import type { Metadata } from "next";
import { generalFaq } from "@/data/faq";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";
import { generateFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ) | Aide Métal – Rideau Métallique",
  description:
    "Toutes les réponses à vos questions sur l'installation, le dépannage, la réparation et la motorisation de rideaux métalliques. FAQ Aide Métal.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(generalFaq);

  return (
    <>
      <StructuredData data={faqSchema} />

      <HeroSection
        title="Questions Fréquentes"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur nos services de rideaux métalliques."
        showCTAs={false}
      />

      <FAQSection
        items={generalFaq}
        title="Tout savoir sur nos services"
        subtitle="Cliquez sur une question pour afficher la réponse."
      />

      <CTASection
        title="Vous n'avez pas trouvé votre réponse ?"
        subtitle="Contactez-nous directement par téléphone ou via notre formulaire. Nous sommes à votre écoute pour répondre à toutes vos questions."
      />
    </>
  );
}
