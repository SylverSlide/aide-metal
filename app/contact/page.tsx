import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CreditCard, Shield } from "lucide-react";
import { siteConfig } from "@/data/site";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title:
    "Contact & Devis Gratuit | Aide Métal – Rideau Métallique Île-de-France",
  description:
    "Contactez Aide Métal pour un devis gratuit. Installation, dépannage, réparation et motorisation de rideaux métalliques en Île-de-France. Appelez le 01 84 80 80 80.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contactez-nous"
        subtitle="Pour un devis, un renseignement ou une urgence — on est là."
        showCTAs={false}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="space-y-4 lg:col-span-2">
                <h2 className="text-xl font-bold tracking-tight text-primary-950">
                  Nos coordonnées
                </h2>

                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Appeler le ${siteConfig.phone}`}
                  className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-accent-50 p-5 ring-1 ring-accent-100 transition-colors hover:bg-accent-100/50"
                >
                  <Phone className="mt-0.5 h-5 w-5 text-accent-500" />
                  <div>
                    <p className="text-xs text-gray-400">Téléphone</p>
                    <p className="text-lg font-bold text-primary-950">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Envoyer un email à ${siteConfig.email}`}
                  className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
                >
                  <Mail className="mt-0.5 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium text-primary-700">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">Adresse</p>
                    <p className="text-sm text-gray-700">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <Clock className="mt-0.5 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">Horaires</p>
                    <p className="text-sm text-gray-700">
                      Lundi – Vendredi : 8h – 19h
                      <br />
                      Samedi : 8h – 18h
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <CreditCard className="mt-0.5 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">Paiement</p>
                    <p className="text-sm text-gray-700">
                      Chèque, virement, CB, espèces
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[60px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100">
                  <Shield className="mt-0.5 h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-xs text-gray-400">Assurance</p>
                    <p className="text-sm text-gray-700">
                      RC Pro & garantie décennale
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 lg:p-8">
                  <h2 className="mb-1 text-xl font-bold tracking-tight text-primary-950">
                    Demande de devis gratuit
                  </h2>
                  <p className="mb-6 text-sm text-gray-400">
                    On vous rappelle rapidement.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
              Localisation
            </p>
            <h2 className="mb-6 text-xl font-bold tracking-tight text-primary-950">
              Nous trouver
            </h2>
            <GoogleMap
              query={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
              zoom={15}
              height={360}
              className="rounded-2xl ring-1 ring-gray-100"
            />
            <p className="mt-4 text-sm text-gray-400">
              Intervention dans toute l&apos;Île-de-France et départements
              limitrophes (60, 02, 51).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
