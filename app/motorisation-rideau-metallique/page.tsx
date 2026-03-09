import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServicePageLayout from "@/components/ServicePageLayout";

const service = getServiceBySlug("motorisation-rideau-metallique");

export const metadata: Metadata = service
  ? {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `/${service.slug}` },
    }
  : {};

export default function MotorisationPage() {
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
