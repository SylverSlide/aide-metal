import { Camera } from "lucide-react";
import { siteConfig } from "@/data/site";

const processSteps = [
  { num: "01", title: "Appel", text: "Vous nous expliquez la situation." },
  { num: "02", title: "Visite", text: "Un technicien se déplace et vous donne un prix." },
  { num: "03", title: "Intervention", text: "On fait le travail, proprement." },
  { num: "04", title: "Garanti", text: "Votre rideau fonctionne. On garantit." },
];

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                À propos
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
                Qui sommes-nous
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-500 sm:mt-6">
                <p>
                  Aide Métal a été fondée en 2010 par{" "}
                  <strong className="text-primary-950">Prénom Nom</strong>,
                  technicien spécialisé en fermetures métalliques depuis plus de
                  20 ans. L&apos;entreprise est basée à Paris et intervient dans
                  toute l&apos;Île-de-France et les départements limitrophes.
                </p>
                <p>
                  Au quotidien, notre équipe travaille auprès de commerçants,
                  restaurateurs, pharmaciens et gérants de locaux
                  professionnels. Toutes marques, tous types de rideaux : lames
                  pleines, micro-perforées, grilles cobra, tubes ondulés.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:mt-8">
                <div>
                  <p className="text-xs text-gray-400">Zone</p>
                  <p className="font-medium text-gray-900">
                    IDF + 60, 02, 51
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Depuis</p>
                  <p className="font-medium text-gray-900">2010</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Assurance</p>
                  <p className="font-medium text-gray-900">
                    RC Pro & décennale
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Paiement</p>
                  <p className="font-medium text-gray-900">
                    CB, chèque, virement
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                SIRET : XXX XXX XXX XXXXX
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 aspect-[4/3] sm:aspect-auto sm:min-h-[350px]">
              <Camera className="mb-2 h-10 w-10 text-gray-300" />
              <span className="px-6 text-center text-xs text-gray-400">
                Photo : Prénom Nom, fondateur d&apos;Aide Métal
              </span>
            </div>
          </div>

          {/* Process intégré */}
          <div className="mt-14 border-t border-gray-100 pt-14 sm:mt-20 sm:pt-20">
            <h3 className="mb-8 text-center text-xl font-bold tracking-tight text-primary-950 sm:text-2xl">
              Comment ça se passe
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.num} className="text-center">
                  <span className="mb-2 block text-2xl font-extrabold text-primary-200 sm:text-3xl">
                    {step.num}
                  </span>
                  <p className="font-bold text-primary-950">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
