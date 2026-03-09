export interface Zone {
  citySlug: string;
  cityName: string;
  department: string;
  postalCode: string;
  description: string;
}

export const zones: Zone[] = [
  {
    citySlug: "paris",
    cityName: "Paris",
    department: "75",
    postalCode: "75000",
    description:
      "Paris et tous ses arrondissements. Nous intervenons rapidement dans la capitale pour tous vos besoins en rideaux métalliques.",
  },
  {
    citySlug: "boulogne-billancourt",
    cityName: "Boulogne-Billancourt",
    department: "92",
    postalCode: "92100",
    description:
      "Boulogne-Billancourt et ses environs dans les Hauts-de-Seine. Proximité immédiate avec Paris pour une intervention rapide.",
  },
  {
    citySlug: "nanterre",
    cityName: "Nanterre",
    department: "92",
    postalCode: "92000",
    description:
      "Nanterre et le quartier de La Défense. Nous intervenons pour les commerces et entreprises du secteur.",
  },
  {
    citySlug: "saint-denis",
    cityName: "Saint-Denis",
    department: "93",
    postalCode: "93200",
    description:
      "Saint-Denis et ses communes voisines en Seine-Saint-Denis. Zone commerciale dense avec de nombreux besoins en sécurité.",
  },
  {
    citySlug: "montreuil",
    cityName: "Montreuil",
    department: "93",
    postalCode: "93100",
    description:
      "Montreuil et l'est parisien. Intervention rapide grâce à notre proximité géographique.",
  },
  {
    citySlug: "creteil",
    cityName: "Créteil",
    department: "94",
    postalCode: "94000",
    description:
      "Créteil et le Val-de-Marne. Nous couvrons l'ensemble du département pour vos rideaux métalliques.",
  },
  {
    citySlug: "versailles",
    cityName: "Versailles",
    department: "78",
    postalCode: "78000",
    description:
      "Versailles et les Yvelines. Nos techniciens se déplacent dans tout le département.",
  },
  {
    citySlug: "argenteuil",
    cityName: "Argenteuil",
    department: "95",
    postalCode: "95100",
    description:
      "Argenteuil et le Val-d'Oise. Couverture complète du nord de l'Île-de-France.",
  },
  {
    citySlug: "meaux",
    cityName: "Meaux",
    department: "77",
    postalCode: "77100",
    description:
      "Meaux et la Seine-et-Marne. Nous intervenons dans tout le département.",
  },
  {
    citySlug: "beauvais",
    cityName: "Beauvais",
    department: "60",
    postalCode: "60000",
    description:
      "Beauvais et l'Oise. Nous nous déplaçons au-delà de l'Île-de-France pour vos rideaux métalliques.",
  },
];

export interface LocalPage {
  slug: string;
  serviceSlug: string;
  serviceName: string;
  citySlug: string;
  cityName: string;
  department: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
}

export const localPages: LocalPage[] = [
  {
    slug: "depannage-rideau-metallique-paris",
    serviceSlug: "depannage-rideau-metallique",
    serviceName: "Dépannage de rideau métallique",
    citySlug: "paris",
    cityName: "Paris",
    department: "75",
    metaTitle:
      "Dépannage Rideau Métallique Paris | Intervention Rapide – Aide Métal",
    metaDescription:
      "Dépannage de rideau métallique à Paris. Intervention rapide pour rideau bloqué, coincé ou en panne. Techniciens qualifiés, devis gratuit. Appelez le 01 84 80 80 80.",
    h1: "Dépannage de Rideau Métallique à Paris",
  },
  {
    slug: "installation-rideau-metallique-paris",
    serviceSlug: "installation-rideau-metallique",
    serviceName: "Installation de rideau métallique",
    citySlug: "paris",
    cityName: "Paris",
    department: "75",
    metaTitle:
      "Installation Rideau Métallique Paris | Sur Mesure – Aide Métal",
    metaDescription:
      "Installation de rideau métallique à Paris. Pose professionnelle sur mesure pour commerces et locaux professionnels. Devis gratuit. Appelez le 01 84 80 80 80.",
    h1: "Installation de Rideau Métallique à Paris",
  },
  {
    slug: "reparation-rideau-metallique-paris",
    serviceSlug: "reparation-rideau-metallique",
    serviceName: "Réparation de rideau métallique",
    citySlug: "paris",
    cityName: "Paris",
    department: "75",
    metaTitle:
      "Réparation Rideau Métallique Paris | Toutes Marques – Aide Métal",
    metaDescription:
      "Réparation de rideau métallique à Paris. Lames, moteur, axe, ressorts : nos techniciens remettent votre rideau en état. Devis gratuit.",
    h1: "Réparation de Rideau Métallique à Paris",
  },
  {
    slug: "motorisation-rideau-metallique-paris",
    serviceSlug: "motorisation-rideau-metallique",
    serviceName: "Motorisation de rideau métallique",
    citySlug: "paris",
    cityName: "Paris",
    department: "75",
    metaTitle:
      "Motorisation Rideau Métallique Paris | Confort & Sécurité – Aide Métal",
    metaDescription:
      "Motorisation de rideau métallique à Paris. Gagnez en confort et sécurité avec un moteur adapté. Devis gratuit, intervention rapide.",
    h1: "Motorisation de Rideau Métallique à Paris",
  },
  {
    slug: "reparation-rideau-metallique-boulogne-billancourt",
    serviceSlug: "reparation-rideau-metallique",
    serviceName: "Réparation de rideau métallique",
    citySlug: "boulogne-billancourt",
    cityName: "Boulogne-Billancourt",
    department: "92",
    metaTitle:
      "Réparation Rideau Métallique Boulogne-Billancourt – Aide Métal",
    metaDescription:
      "Réparation de rideau métallique à Boulogne-Billancourt (92). Intervention rapide, toutes marques, devis gratuit. Contactez Aide Métal.",
    h1: "Réparation de Rideau Métallique à Boulogne-Billancourt",
  },
  {
    slug: "motorisation-rideau-metallique-nanterre",
    serviceSlug: "motorisation-rideau-metallique",
    serviceName: "Motorisation de rideau métallique",
    citySlug: "nanterre",
    cityName: "Nanterre",
    department: "92",
    metaTitle:
      "Motorisation Rideau Métallique Nanterre – Aide Métal",
    metaDescription:
      "Motorisation de rideau métallique à Nanterre (92). Confort, sécurité et gain de temps. Devis gratuit, techniciens qualifiés.",
    h1: "Motorisation de Rideau Métallique à Nanterre",
  },
  {
    slug: "depannage-rideau-metallique-saint-denis",
    serviceSlug: "depannage-rideau-metallique",
    serviceName: "Dépannage de rideau métallique",
    citySlug: "saint-denis",
    cityName: "Saint-Denis",
    department: "93",
    metaTitle:
      "Dépannage Rideau Métallique Saint-Denis | Urgence – Aide Métal",
    metaDescription:
      "Dépannage de rideau métallique à Saint-Denis (93). Intervention d'urgence pour rideau bloqué ou en panne. Appelez Aide Métal.",
    h1: "Dépannage de Rideau Métallique à Saint-Denis",
  },
  {
    slug: "installation-rideau-metallique-montreuil",
    serviceSlug: "installation-rideau-metallique",
    serviceName: "Installation de rideau métallique",
    citySlug: "montreuil",
    cityName: "Montreuil",
    department: "93",
    metaTitle:
      "Installation Rideau Métallique Montreuil | Sur Mesure – Aide Métal",
    metaDescription:
      "Installation de rideau métallique à Montreuil (93). Pose sur mesure pour commerces. Devis gratuit et rapide. Contactez Aide Métal.",
    h1: "Installation de Rideau Métallique à Montreuil",
  },
];

export function getLocalPageBySlug(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}

export function getZoneByCitySlug(citySlug: string): Zone | undefined {
  return zones.find((z) => z.citySlug === citySlug);
}

export function getLocalPagesForService(serviceSlug: string): LocalPage[] {
  return localPages.filter((p) => p.serviceSlug === serviceSlug);
}

export function getLocalPagesForCity(citySlug: string): LocalPage[] {
  return localPages.filter((p) => p.citySlug === citySlug);
}
