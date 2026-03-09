import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-primary-950 to-[#080f1d] text-gray-400">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      <div className="container mx-auto px-4 pt-16 pb-10 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-xs font-bold text-white">
                AM
              </span>
              <span className="text-base font-bold text-white">
                Aide Métal
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              Rideau métallique en Île-de-France — installation, dépannage,
              réparation, motorisation. Depuis 2010.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={siteConfig.phoneHref}
                aria-label={`Appeler le ${siteConfig.phone}`}
                className="flex min-h-[44px] items-center gap-2.5 font-semibold text-white transition-colors hover:text-accent-400"
              >
                <Phone className="h-4 w-4 text-accent-500" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Envoyer un email à ${siteConfig.email}`}
                className="flex min-h-[44px] items-center gap-2.5 transition-colors hover:text-accent-400"
              >
                <Mail className="h-4 w-4 text-accent-500" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{" "}
                  {siteConfig.address.city}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-gray-600">
              Services
            </h3>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="flex min-h-[44px] items-center text-sm transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-gray-600">
              Zones d&apos;intervention
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Paris <span className="text-gray-600">(75)</span></li>
              <li>Hauts-de-Seine <span className="text-gray-600">(92)</span></li>
              <li>Seine-Saint-Denis <span className="text-gray-600">(93)</span></li>
              <li>Val-de-Marne <span className="text-gray-600">(94)</span></li>
              <li>Yvelines <span className="text-gray-600">(78)</span></li>
              <li>Val-d&apos;Oise <span className="text-gray-600">(95)</span></li>
              <li>Oise <span className="text-gray-600">(60)</span></li>
              <li>Marne <span className="text-gray-600">(51)</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-gray-600">
              Informations
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/realisations" className="flex min-h-[44px] items-center text-sm transition-colors hover:text-white">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/avis-clients" className="flex min-h-[44px] items-center text-sm transition-colors hover:text-white">
                  Avis clients
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex min-h-[44px] items-center text-sm transition-colors hover:text-white">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex min-h-[44px] items-center text-sm transition-colors hover:text-white">
                  Contact / Devis
                </Link>
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-xs text-gray-600">
              <p>Lun–Ven 8h–19h · Sam 8h–18h</p>
              <p>RC Pro & garantie décennale</p>
              <p>CB · Chèque · Virement · Espèces</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-6 text-xs text-gray-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName} · SIRET : XXX
              XXX XXX XXXXX
            </p>
            <div className="flex gap-5">
              <span className="cursor-default">Mentions légales</span>
              <span className="cursor-default">Confidentialité</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
