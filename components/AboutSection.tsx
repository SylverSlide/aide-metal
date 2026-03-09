import { Camera } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 sm:gap-10 lg:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
              Qui sommes-nous
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-600 sm:mt-6">
              <p>
                Aide Métal est une entreprise spécialisée dans les rideaux
                métalliques, basée à Paris et active dans toute
                l&apos;Île-de-France depuis 2010. Notre équipe intervient au
                quotidien auprès de commerçants, restaurateurs, pharmaciens et
                gérants de locaux professionnels.
              </p>
              <p>
                Nous travaillons sur toutes les marques et tous les types de
                rideaux : lames pleines, micro-perforées, grilles cobra, tubes
                ondulés. Que votre besoin soit urgent — un rideau bloqué en
                pleine journée — ou planifié — l&apos;installation d&apos;un
                rideau neuf — nous nous adaptons à vos contraintes.
              </p>
              <p>
                Notre approche est simple : un travail bien fait, un prix
                juste, et un client qui peut rouvrir son commerce sereinement.
              </p>
            </div>

            {/* Infos pratiques */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:mt-8">
              <div>
                <p className="text-xs text-gray-400">Zone</p>
                <p className="font-medium text-gray-900">
                  Paris & Île-de-France
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

            <p className="mt-5 text-xs text-gray-400 sm:mt-6">
              SIRET : XXX XXX XXX XXXXX · {siteConfig.phone}
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-100 aspect-[4/3] sm:aspect-auto sm:min-h-[350px] lg:min-h-[400px]">
            <Camera className="mb-2 h-10 w-10 text-gray-300" />
            <span className="px-6 text-center text-xs text-gray-400">
              Photo : équipe Aide Métal ou technicien en intervention
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
