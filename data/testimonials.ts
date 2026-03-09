export interface Testimonial {
  name: string;
  role: string;
  city: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Laurent M.",
    role: "Gérant de boulangerie",
    city: "Paris 11e",
    rating: 5,
    text: "Intervention rapide et travail soigné. Mon rideau métallique était complètement bloqué un samedi matin. Aide Métal est intervenu dans l'heure et tout a été réglé avant l'ouverture. Je recommande vivement.",
  },
  {
    name: "Sophie D.",
    role: "Propriétaire de boutique",
    city: "Boulogne-Billancourt",
    rating: 5,
    text: "Installation impeccable de notre rideau métallique micro-perforé. L'équipe a été ponctuelle, professionnelle et très propre. Le rendu est parfait et la vitrine reste visible même rideau fermé.",
  },
  {
    name: "Karim B.",
    role: "Responsable d'entrepôt",
    city: "Saint-Denis",
    rating: 5,
    text: "Nous avons fait motoriser deux rideaux métalliques de notre entrepôt. Le gain de temps au quotidien est considérable. Très bon conseil sur le choix des moteurs et installation rapide.",
  },
  {
    name: "Marie-Claire T.",
    role: "Gérante de pharmacie",
    city: "Nanterre",
    rating: 5,
    text: "Suite à une tentative d'effraction, Aide Métal a réparé notre rideau et renforcé la sécurité en moins de 24 heures. Professionnalisme et réactivité exemplaires. Merci.",
  },
  {
    name: "Philippe R.",
    role: "Restaurateur",
    city: "Paris 3e",
    rating: 5,
    text: "Deuxième fois que je fais appel à Aide Métal pour mes restaurants. Toujours le même sérieux, la même qualité de travail. C'est rare de trouver des artisans aussi fiables.",
  },
  {
    name: "Nadia A.",
    role: "Commerçante",
    city: "Montreuil",
    rating: 5,
    text: "Devis clair et respecté, installation propre et rapide. Le technicien a pris le temps de m'expliquer le fonctionnement et l'entretien. Service client au top.",
  },
];
