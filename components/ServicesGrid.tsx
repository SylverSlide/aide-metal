import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Ce que nous faisons
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            Nos services
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 sm:text-base">
            Une gamme complète de prestations pour vos rideaux métalliques,
            réalisées par des techniciens qualifiés.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.shortName}
              description={service.shortDescription}
              href={`/${service.slug}`}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
