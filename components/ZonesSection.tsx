import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import GoogleMap from "./GoogleMap";

export default function ZonesSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Couverture
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Zone d&apos;intervention
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Map + floating card */}
          <div className="relative">
            <GoogleMap
              query="Île-de-France, France"
              zoom={9}
              height={500}
              className="rounded-2xl ring-1 ring-gray-100"
            />

            {/* Floating card */}
            <div className="mt-6 lg:absolute lg:bottom-6 lg:left-6 lg:mt-0 lg:w-80">
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <div className="mb-4 flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 text-accent-500" />
                  <h3 className="font-bold text-primary-950">
                    Où on intervient
                  </h3>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Île-de-France
                    </p>
                    <p>
                      Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne,
                      Yvelines, Essonne, Val-d&apos;Oise, Seine-et-Marne
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Départements limitrophes
                    </p>
                    <p>Oise, Aisne, Marne</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="mb-2 text-xs text-gray-400">
                    Pas sûr qu&apos;on couvre votre secteur ?
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    aria-label={`Appeler le ${siteConfig.phone}`}
                    className="flex items-center gap-2 text-sm font-bold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
