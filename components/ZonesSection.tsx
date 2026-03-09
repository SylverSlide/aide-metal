import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import GoogleMap from "./GoogleMap";

const idfDepartments = [
  { code: "75", name: "Paris" },
  { code: "77", name: "Seine-et-Marne" },
  { code: "78", name: "Yvelines" },
  { code: "91", name: "Essonne" },
  { code: "92", name: "Hauts-de-Seine" },
  { code: "93", name: "Seine-Saint-Denis" },
  { code: "94", name: "Val-de-Marne" },
  { code: "95", name: "Val-d'Oise" },
];

const extraDepartments = [
  { code: "02", name: "Aisne" },
  { code: "51", name: "Marne" },
  { code: "60", name: "Oise" },
];

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
          <p className="mt-3 text-[15px] text-gray-500 sm:text-base">
            Île-de-France et départements limitrophes — nos techniciens se
            déplacent sur l&apos;ensemble de cette zone.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-3">
            <GoogleMap
              query="Île-de-France, France"
              zoom={9}
              height={420}
              className="rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
            />
          </div>

          {/* Departments */}
          <div className="lg:col-span-2">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Île-de-France
            </p>
            <div className="grid grid-cols-2 gap-2">
              {idfDepartments.map((d) => (
                <div
                  key={d.code}
                  className="rounded-xl bg-gray-50 px-3.5 py-3 ring-1 ring-gray-100"
                >
                  <span className="block text-lg font-extrabold text-primary-950">
                    {d.code}
                  </span>
                  <span className="block text-[11px] text-gray-400">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Départements limitrophes
            </p>
            <div className="grid grid-cols-3 gap-2">
              {extraDepartments.map((d) => (
                <div
                  key={d.code}
                  className="rounded-xl bg-gray-50 px-3.5 py-3 ring-1 ring-gray-100"
                >
                  <span className="block text-lg font-extrabold text-primary-950/60">
                    {d.code}
                  </span>
                  <span className="block text-[11px] text-gray-400">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-accent-50 px-4 py-3.5 ring-1 ring-accent-100">
              <p className="text-xs text-accent-800">
                Pas sûr qu&apos;on couvre votre secteur ?
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-1 flex items-center gap-1.5 text-sm font-bold text-accent-600 transition-colors hover:text-accent-700"
              >
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
