import Image from "next/image";

const clients = [
  { name: "Nike", logo: "/logos/nike.svg", width: 80, height: 30 },
  { name: "HSBC", logo: "/logos/hsbc.svg", width: 110, height: 40 },
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
    logo: "/logos/societe-generale.svg",
    width: 140,
    height: 40,
  },
  {
    name: "Peugeot",
    logo: "/logos/peugeot.svg",
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

function ClientLogo({
  name,
  logo,
  width,
  height,
}: {
  name: string;
  logo: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex shrink-0 items-center justify-center px-8 sm:px-10">
      <Image
        src={logo}
        alt={name}
        width={width}
        height={height}
        className="h-8 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
      />
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {clients.map((c) => (
            <ClientLogo key={`a-${c.name}`} {...c} />
          ))}
          {clients.map((c) => (
            <ClientLogo key={`b-${c.name}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
