export const siteConfig = {
  name: "Aide Métal",
  legalName: "Aide Métal SARL",
  phone: "06 03 28 72 10",
  phoneHref: "tel:+33603287210",
  email: "contact@aide-metal.fr",
  url: "https://www.aide-metal.fr",
  address: {
    street: "9 Rue Pierre de Clostermann",
    city: "Dugny",
    postalCode: "93440",
    region: "Île-de-France",
    country: "FR",
  },
  openingHours: "Lu-Sa 08:00-19:00",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  description:
    "Spécialiste de l'installation, du dépannage, de la réparation et de la motorisation de rideaux métalliques en Île-de-France. Intervention rapide pour commerces et locaux professionnels.",
  slogan: "Votre spécialiste du rideau métallique en Île-de-France",
  foundingYear: 2010,
  social: {
    facebook: "https://www.facebook.com/aidemetal",
    instagram: "https://www.instagram.com/aidemetal",
  },
} as const;

export const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Installation",
        href: "/installation-rideau-metallique",
      },
      {
        label: "Dépannage",
        href: "/depannage-rideau-metallique",
      },
      {
        label: "Réparation",
        href: "/reparation-rideau-metallique",
      },
      {
        label: "Motorisation",
        href: "/motorisation-rideau-metallique",
      },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
