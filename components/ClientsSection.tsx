import Image from "next/image";

const clients = [
  { name: "Nike", logo: "/logos/nike.svg", width: 80, height: 32 },
  { name: "HSBC", logo: "/logos/hsbc.svg", width: 100, height: 40 },
  {
    name: "Galeries Lafayette",
    logo: "/logos/galeries-lafayette.jpg",
    width: 140,
    height: 40,
  },
  {
    name: "BNP Paribas",
    logo: "/logos/bnp-paribas.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Société Générale",
    logo: "/logos/societe-generale.png",
    width: 130,
    height: 40,
  },
  {
    name: "Peugeot",
    logo: "/logos/peugeot.png",
    width: 100,
    height: 40,
  },
  {
    name: "Mercedes",
    logo: "/logos/mercedes.svg",
    width: 90,
    height: 40,
  },
];

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-10 sm:bg-white sm:py-12">
      <div className="mb-12 px-4 text-center sm:mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-gray-50/50 to-transparent sm:w-24 sm:from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-gray-50/50 to-transparent sm:w-24 sm:from-white" />

        {/* Marquee — bigger on mobile */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((c, i) => (
            <div
              key={`${i}-${c.name}`}
              className="flex shrink-0 items-center justify-center px-6 sm:px-10"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={c.width}
                height={c.height}
                className="h-10 w-auto object-contain opacity-70 sm:h-9 sm:opacity-60 sm:transition-opacity sm:duration-300 sm:hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
