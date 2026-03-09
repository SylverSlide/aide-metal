import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServicePageLayout from "@/components/ServicePageLayout";

const service = getServiceBySlug("depannage-rideau-metallique");

export const metadata: Metadata = service
  ? {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `/${service.slug}` },
    }
  : {};

export default function DepannagePage() {
  if (!service) notFound();
  return <ServicePageLayout service={service} />;
}
