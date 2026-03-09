import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { getLocalPagesForService } from "@/data/zones";
import HeroSection from "./HeroSection";
import ProcessSection from "./ProcessSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ContactForm from "./ContactForm";
import StructuredData from "./StructuredData";
import {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

interface ServicePageLayoutProps {
  service: Service;
}

export default function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const relatedServices = services.filter((s) => s.slug !== service.slug);
  const localPages = getLocalPagesForService(service.slug);

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.metaDescription,
    slug: service.slug,
  });

  const faqSchema =
    service.faq.length > 0 ? generateFAQSchema(service.faq) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: siteConfig.url },
    { name: service.name, url: `${siteConfig.url}/${service.slug}` },
  ]);

  return (
    <>
      <StructuredData data={serviceSchema} />
      {faqSchema && <StructuredData data={faqSchema} />}
      <StructuredData data={breadcrumbSchema} />

      <HeroSection title={service.h1} subtitle={service.heroText} />

      {/* Breadcrumb */}
      <nav
        className="border-b border-gray-100 bg-gray-50 py-3"
        aria-label="Fil d'Ariane"
      >
        <div className="container mx-auto flex items-center gap-2 px-4 text-sm text-gray-400 lg:px-8">
          <Link href="/" className="hover:text-primary-700 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <span className="text-gray-700">{service.name}</span>
        </div>
      </nav>

      {/* Content with photo */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <p className="text-lg leading-relaxed text-gray-500">
                  {service.intro}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-100">
                  <Image
                    src={
                      images.services[
                        service.slug.split("-")[0] as keyof typeof images.services
                      ] || images.hero
                    }
                    alt={service.name}
                    width={600}
                    height={450}
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {service.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-primary-950 sm:text-2xl">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-gray-500">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center sm:mb-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                Avantages
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
                Ce qu&apos;on vous garantit
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection steps={service.processSteps} />

      <CTASection
        title={`Un besoin en ${service.shortName.toLowerCase()} ?`}
        subtitle="Appelez-nous ou demandez un devis. C'est gratuit et sans engagement."
      />

      {service.faq.length > 0 && (
        <FAQSection title="Questions fréquentes" items={service.faq} />
      )}

      {/* Related services */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center sm:mb-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                Autres services
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
                Nos autres prestations
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:ring-primary-200"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 ring-1 ring-primary-100">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-primary-950">{s.shortName}</h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {s.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local pages */}
      {localPages.length > 0 && (
        <section className="py-14">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-5 text-center text-xl font-bold tracking-tight text-primary-950">
              {service.name} près de chez vous
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {localPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="inline-flex min-h-[44px] items-center gap-1 rounded-xl bg-white px-4 text-sm text-gray-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 transition-colors hover:ring-primary-200 hover:text-primary-700"
                >
                  {page.cityName}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="bg-gray-50 py-14 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent-500">
                  Contact
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
                  Demander un devis
                </h2>
                <p className="mt-4 text-[15px] text-gray-500">
                  Décrivez-nous votre besoin. On vous rappelle rapidement avec
                  un prix.
                </p>
                <a
                  href={siteConfig.phoneHref}
                  aria-label={`Appeler le ${siteConfig.phone}`}
                  className="mt-6 flex items-center gap-3"
                >
                  <Phone className="h-5 w-5 text-accent-500" />
                  <span className="text-lg font-bold text-primary-950">
                    {siteConfig.phone}
                  </span>
                </a>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-gray-100 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
