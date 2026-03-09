import { Camera } from "lucide-react";

const clients = [
  { name: "L'Oréal" },
  { name: "Nike" },
  { name: "Galeries Lafayette" },
  { name: "Carrefour" },
  { name: "Sephora" },
  { name: "BNP Paribas" },
];

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8 sm:px-10">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100/80">
        <Camera className="h-4 w-4 text-gray-300" />
      </div>
      <span className="whitespace-nowrap text-base font-bold text-gray-300 sm:text-lg">
        {name}
      </span>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-10 sm:py-12">
      <div className="mb-7 text-center sm:mb-9">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {clients.map((c) => (
            <ClientLogo key={`a-${c.name}`} name={c.name} />
          ))}
          {clients.map((c) => (
            <ClientLogo key={`b-${c.name}`} name={c.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
