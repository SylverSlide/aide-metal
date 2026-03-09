import Link from "next/link";
import { ArrowRight, Shield, Zap, Wrench, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PricingCard {
  icon: LucideIcon;
  service: string;
  priceFrom: string;
  note: string;
  href: string;
}

const pricing: PricingCard[] = [
  {
    icon: Shield,
    service: "Installation",
    priceFrom: "1 500 €",
    note: "Selon dimensions et type de rideau",
    href: "/installation-rideau-metallique",
  },
  {
    icon: Zap,
    service: "Dépannage",
    priceFrom: "150 €",
    note: "Déplacement + diagnostic inclus",
    href: "/depannage-rideau-metallique",
  },
  {
    icon: Wrench,
    service: "Réparation",
    priceFrom: "200 €",
    note: "Selon pièces à remplacer",
    href: "/reparation-rideau-metallique",
  },
  {
    icon: Settings,
    service: "Motorisation",
    priceFrom: "800 €",
    note: "Moteur + pose + mise en service",
    href: "/motorisation-rideau-metallique",
  },
];

export default function PricingSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Tarifs indicatifs
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Combien ça coûte ?
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 sm:text-base">
            Chaque situation est différente — ces prix donnent un ordre de
            grandeur. Le devis exact est toujours gratuit.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.map((item) => (
            <Link
              key={item.service}
              href={item.href}
              className="group relative rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-primary-200"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ring-1 ring-primary-100">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-primary-950">
                {item.service}
              </h3>
              <p className="mt-2">
                <span className="text-xs text-gray-400">À partir de</span>
                <br />
                <span className="text-2xl font-extrabold tracking-tight text-primary-950">
                  {item.priceFrom}
                </span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                {item.note}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 transition-colors group-hover:text-accent-600">
                Devis gratuit
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-accent-500 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-gray-400">
          Prix TTC indicatifs, susceptibles de varier selon la complexité du
          chantier, les dimensions et le matériel. Devis détaillé gratuit sur
          demande.
        </p>
      </div>
    </section>
  );
}
