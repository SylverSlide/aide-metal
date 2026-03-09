import { FileCheck, Clock, Wrench, MapPin } from "lucide-react";

const commitments = [
  {
    icon: FileCheck,
    number: "01",
    title: "Devis gratuit, sans engagement",
    description:
      "On se déplace, on regarde, on vous dit combien ça coûte. Si ça ne vous convient pas, vous ne payez rien.",
  },
  {
    icon: Clock,
    number: "02",
    title: "On intervient vite",
    description:
      "Pour un dépannage, on fait au plus rapide. Pour une installation ou une motorisation, on cale le rendez-vous à votre convenance.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Toutes marques, tous modèles",
    description:
      "Lames pleines, micro-perforées, grilles cobra, moteurs Somfy, Nice, Simu… On connaît et on sait réparer.",
  },
  {
    icon: MapPin,
    number: "04",
    title: "Toute l'Île-de-France",
    description:
      "Paris et les départements 92, 93, 94, 78, 95, 91, 77. On couvre toute la région.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Nos engagements
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Ce qu&apos;on vous garantit
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
          {commitments.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ring-1 ring-primary-100">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold tabular-nums text-gray-200">
                  {item.number}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-primary-950">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
