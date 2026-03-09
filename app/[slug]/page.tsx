import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getServiceBySlug } from "@/data/services";
import {
  localPages,
  getLocalPageBySlug,
  getZoneByCitySlug,
  getLocalPagesForCity,
} from "@/data/zones";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import StructuredData from "@/components/StructuredData";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return localPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function LocalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLocalPageBySlug(slug);
  if (!page) notFound();

  const service = getServiceBySlug(page.serviceSlug);
  if (!service) notFound();

  const zone = getZoneByCitySlug(page.citySlug);
  const otherCityPages = getLocalPagesForCity(page.citySlug).filter(
    (p) => p.slug !== page.slug
  );

  const serviceSchema = generateServiceSchema({
    name: `${service.name} à ${page.cityName}`,
    description: page.metaDescription,
    slug: page.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: siteConfig.url },
    { name: service.name, url: `${siteConfig.url}/${service.slug}` },
    { name: page.cityName, url: `${siteConfig.url}/${page.slug}` },
  ]);

  const localFaq = [
    {
      question: `Intervenez-vous à ${page.cityName} ?`,
      answer: `Oui, nous intervenons régulièrement à ${page.cityName} (${page.department}). Nos techniciens connaissent bien le secteur, ce qui nous permet d'être réactifs.`,
    },
    {
      question: `Comment demander un devis à ${page.cityName} ?`,
      answer: `Appelez-nous au ${siteConfig.phone} ou remplissez le formulaire sur cette page. On vous rappelle rapidement avec un prix.`,
    },
    {
      question: `Quels types de commerces desservez-vous à ${page.cityName} ?`,
      answer: `Tout type de local professionnel : boutiques, restaurants, pharmacies, entrepôts, garages, bureaux — tout ce qui a besoin d'un rideau métallique.`,
    },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <HeroSection
        title={page.h1}
        subtitle={`${service.heroText} Nous intervenons à ${page.cityName} (${page.department}) et dans les environs.`}
      />

      {/* Breadcrumb */}
      <nav
        className="border-b border-gray-100 bg-gray-50 py-3"
        aria-label="Fil d'Ariane"
      >
        <div className="container mx-auto flex flex-wrap items-center gap-2 px-4 text-sm text-gray-400 lg:px-8">
          <Link href="/" className="hover:text-primary-700 transition-colors">
            Accueil
          </Link>
          <span>/</span>
          <Link
            href={`/${service.slug}`}
            className="hover:text-primary-700 transition-colors"
          >
            {service.shortName}
          </Link>
          <span>/</span>
          <span className="text-gray-700">{page.cityName}</span>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Zone info */}
            <div className="mb-10 flex items-start gap-3 rounded-xl bg-gray-50 p-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
              <div>
                <p className="font-bold text-primary-950">
                  Intervention à {page.cityName} ({page.department})
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {zone?.description ||
                    `Nous intervenons régulièrement à ${page.cityName} pour tous vos besoins en rideaux métalliques.`}
                </p>
              </div>
            </div>

            <h2 className="mb-4 text-xl font-bold text-primary-950 sm:text-2xl">
              {service.name} à {page.cityName}
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              Vous cherchez un professionnel pour{" "}
              {service.name.toLowerCase().startsWith("i")
                ? "l'"
                : service.name.toLowerCase().startsWith("d")
                ? "le "
                : "la "}
              {service.name.toLowerCase()} à {page.cityName} ? Aide Métal
              intervient dans votre secteur avec des techniciens qui connaissent
              le terrain. Pas de sous-traitance, pas de surprise : on vient, on
              regarde, on vous donne un prix, et on fait le travail.
            </p>

            <h2 className="mb-4 text-xl font-bold text-primary-950 sm:text-2xl">
              Pourquoi faire appel à nous
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              On est basés en Île-de-France et on intervient à {page.cityName}{" "}
              régulièrement. On travaille avec des commerçants, des
              restaurateurs, des pharmaciens, des gérants d&apos;entrepôts — des
              gens qui ont besoin que leur rideau fonctionne, point. Pas de
              discours commercial, juste du travail bien fait.
            </p>

            <div className="mb-10 grid gap-3 sm:grid-cols-2">
              {service.benefits.slice(0, 6).map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {service.sections[0] && (
              <>
                <h2 className="mb-4 text-xl font-bold text-primary-950 sm:text-2xl">
                  Notre savoir-faire
                </h2>
                <p className="mb-8 leading-relaxed text-gray-600">
                  {service.sections[0].content}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={`${service.shortName} à ${page.cityName}`}
        subtitle="Appelez-nous ou demandez un devis. C'est gratuit et sans engagement."
      />

      <FAQSection
        title={`Questions fréquentes — ${page.cityName}`}
        items={localFaq}
      />

      {/* Other services in same city */}
      {otherCityPages.length > 0 && (
        <section className="bg-gray-50 py-14">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-5 text-center text-xl font-bold text-primary-950">
              Nos autres services à {page.cityName}
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {otherCityPages.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 transition-colors hover:border-primary-300 hover:text-primary-700"
                >
                  {p.serviceName}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <Link
            href={`/${service.slug}`}
            className="text-sm text-gray-500 hover:text-primary-700 transition-colors"
          >
            ← Retour : {service.name}
          </Link>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-2 text-center text-2xl font-bold text-primary-950">
              Devis gratuit
            </h2>
            <p className="mb-8 text-center text-sm text-gray-500">
              Décrivez votre besoin, on vous rappelle.
            </p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:p-8">
              <ContactForm />
            </div>
            <p className="mt-6 text-center">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 font-bold text-primary-950"
              >
                <Phone className="h-4 w-4 text-accent-500" />
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
