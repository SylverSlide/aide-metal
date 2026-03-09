import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";
import FadeIn from "./FadeIn";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQSection({
  title = "Questions fréquentes",
  subtitle,
  items,
}: FAQSectionProps) {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
              FAQ
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-[15px] text-gray-500 sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
        <div className="mx-auto max-w-3xl space-y-2.5">
          {items.map((item, index) => (
            <FadeIn key={index} delay={index * 80}>
              <details className="faq-item group rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-colors open:ring-primary-200">
                <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-primary-950 active:bg-gray-50 sm:px-6 sm:py-5 sm:text-base">
                  <span className="leading-snug">{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="faq-content">
                  <div className="px-5 pb-5 sm:px-6">
                    <p className="text-[15px] leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
