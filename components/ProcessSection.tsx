interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  title = "Comment ça se passe",
  steps,
}: ProcessSectionProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
            Notre process
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mx-auto max-w-4xl">
          {/* Mobile: timeline */}
          <div className="space-y-0 sm:hidden">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-950 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-full w-px bg-gray-200 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-primary-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="relative mx-auto mb-5">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-950 text-lg font-bold text-white shadow-lg shadow-primary-950/10">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mb-2 font-bold text-primary-950">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
