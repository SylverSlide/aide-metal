const brands = [
  "Somfy",
  "Nice",
  "Simu",
  "Came",
  "BFT",
  "Hörmann",
  "FAAC",
  "Gaposa",
];

export default function BrandsSection() {
  return (
    <section className="border-y border-gray-100 py-10 sm:py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 sm:mb-8">
          Marques avec lesquelles nous travaillons
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-bold text-gray-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
