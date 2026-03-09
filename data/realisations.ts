export interface Realisation {
  id: string;
  title: string;
  description: string;
  service: string;
  city: string;
  type: string;
  imageLabel: string;
}

export const realisations: Realisation[] = [
  {
    id: "boulangerie-paris-11",
    title: "Boulangerie – Paris 11e",
    description:
      "Installation d'un rideau métallique à lames micro-perforées pour une boulangerie artisanale. Le choix des lames micro-perforées permet de conserver la visibilité de la vitrine tout en assurant une protection efficace.",
    service: "Installation",
    city: "Paris",
    type: "Lames micro-perforées",
    imageLabel: "Photo : rideau micro-perforé sur vitrine boulangerie",
  },
  {
    id: "entrepot-saint-denis",
    title: "Entrepôt logistique – Saint-Denis",
    description:
      "Installation de deux rideaux métalliques motorisés de grande dimension pour un entrepôt logistique. Motorisation par moteur central pour un fonctionnement fiable avec des tabliers de plus de 5 mètres de large.",
    service: "Installation + Motorisation",
    city: "Saint-Denis",
    type: "Lames pleines motorisées",
    imageLabel: "Photo : rideau motorisé grande largeur entrepôt",
  },
  {
    id: "pharmacie-nanterre",
    title: "Pharmacie – Nanterre",
    description:
      "Réparation urgente après tentative d'effraction. Remplacement des lames endommagées et renforcement du système de verrouillage. Intervention réalisée en moins de 24 heures pour sécuriser le commerce.",
    service: "Réparation",
    city: "Nanterre",
    type: "Lames pleines renforcées",
    imageLabel: "Photo : lames remplacées après effraction",
  },
  {
    id: "restaurant-paris-3",
    title: "Restaurant – Paris 3e",
    description:
      "Motorisation d'un rideau métallique existant à grille cobra. Installation d'un moteur tubulaire avec commande par télécommande. Le restaurateur gagne un temps précieux à chaque ouverture et fermeture.",
    service: "Motorisation",
    city: "Paris",
    type: "Grille cobra motorisée",
    imageLabel: "Photo : grille cobra avec moteur installé",
  },
  {
    id: "boutique-boulogne",
    title: "Boutique de prêt-à-porter – Boulogne-Billancourt",
    description:
      "Installation d'un rideau métallique à lames micro-perforées laquées en noir mat pour s'intégrer au design contemporain de la façade. Finition haut de gamme et pose soignée.",
    service: "Installation",
    city: "Boulogne-Billancourt",
    type: "Lames micro-perforées laquées",
    imageLabel: "Photo : rideau laqué noir mat sur façade boutique",
  },
  {
    id: "garage-montreuil",
    title: "Garage automobile – Montreuil",
    description:
      "Dépannage d'un rideau métallique bloqué en position fermée. Remplacement de l'axe d'enroulement voilé et des ressorts de compensation. Remise en service dans la journée.",
    service: "Dépannage + Réparation",
    city: "Montreuil",
    type: "Lames pleines",
    imageLabel: "Photo : intervention dépannage axe d'enroulement",
  },
];
