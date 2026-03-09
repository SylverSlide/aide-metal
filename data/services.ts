import {
  Wrench,
  Shield,
  Zap,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  icon: LucideIcon;
  shortDescription: string;
  intro: string;
  sections: { title: string; content: string }[];
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "installation-rideau-metallique",
    name: "Installation de rideau métallique",
    shortName: "Installation",
    metaTitle:
      "Installation de Rideau Métallique | Aide Métal – Île-de-France",
    metaDescription:
      "Installation professionnelle de rideaux métalliques sur mesure pour commerces, magasins et locaux professionnels en Île-de-France. Devis gratuit et rapide.",
    h1: "Installation de Rideau Métallique sur Mesure",
    heroText:
      "Protégez votre commerce avec un rideau métallique installé par des professionnels qualifiés. Solution sur mesure, pose soignée et garantie.",
    icon: Shield,
    shortDescription:
      "Installation sur mesure de rideaux métalliques pour commerces, magasins et entrepôts. Pose professionnelle et garantie.",
    intro:
      "Chez Aide Métal, nous réalisons l'installation complète de rideaux métalliques adaptés à vos besoins. Que vous soyez commerçant, restaurateur ou gérant d'un local professionnel, nous vous proposons une solution de fermeture fiable, résistante et esthétique. Chaque installation est réalisée sur mesure, en tenant compte des dimensions exactes de votre ouverture, de vos contraintes techniques et de vos exigences de sécurité.",
    sections: [
      {
        title: "Pourquoi installer un rideau métallique ?",
        content:
          "Le rideau métallique est la solution de protection la plus efficace pour les commerces et locaux professionnels. Il assure une sécurité optimale contre les effractions, les actes de vandalisme et les intempéries. Robuste et durable, il constitue un investissement rentable sur le long terme. Un rideau métallique bien installé renforce également l'image professionnelle de votre établissement et rassure votre clientèle.",
      },
      {
        title: "Nos types de rideaux métalliques",
        content:
          "Nous installons tous les types de rideaux métalliques : rideaux à lames pleines pour une sécurité maximale, rideaux à lames micro-perforées pour conserver la visibilité de votre vitrine, rideaux à tubes ondulés ou à grilles cobra pour les commerces souhaitant un bon compromis entre aération, visibilité et protection. Chaque modèle est disponible en différentes finitions et coloris pour s'intégrer harmonieusement à votre façade.",
      },
      {
        title: "Une installation dans les règles de l'art",
        content:
          "Nos techniciens expérimentés prennent en charge l'intégralité de l'installation : prise de mesures précise, fabrication sur mesure, pose du caisson, montage des coulisses, installation des lames et réglage final. Nous veillons à une installation propre, conforme aux normes de sécurité en vigueur, et nous vous formons à l'utilisation quotidienne de votre rideau métallique.",
      },
    ],
    benefits: [
      "Installation sur mesure adaptée à votre local",
      "Rideaux certifiés et conformes aux normes",
      "Techniciens qualifiés et expérimentés",
      "Large choix de modèles et de finitions",
      "Garantie sur la pose et le matériel",
      "Devis gratuit et sans engagement",
    ],
    processSteps: [
      {
        title: "Prise de contact",
        description:
          "Vous nous contactez par téléphone ou via notre formulaire. Nous échangeons sur votre projet et vos besoins.",
      },
      {
        title: "Visite technique",
        description:
          "Un technicien se déplace pour prendre les mesures exactes et évaluer les contraintes techniques de votre local.",
      },
      {
        title: "Devis personnalisé",
        description:
          "Nous vous remettons un devis détaillé, transparent et sans engagement, adapté à votre configuration.",
      },
      {
        title: "Fabrication et pose",
        description:
          "Après validation, nous fabriquons votre rideau sur mesure et procédons à une installation soignée et rapide.",
      },
    ],
    faq: [
      {
        question:
          "Combien de temps dure l'installation d'un rideau métallique ?",
        answer:
          "L'installation complète prend généralement entre une demi-journée et une journée, selon la complexité de la pose et les dimensions de l'ouverture. Nous nous organisons pour minimiser la gêne pour votre activité.",
      },
      {
        question: "Quel type de rideau métallique choisir pour mon commerce ?",
        answer:
          "Le choix dépend de vos priorités : un rideau à lames pleines offre une sécurité maximale, tandis qu'un rideau micro-perforé laisse voir votre vitrine. Nos techniciens vous conseillent la solution la plus adaptée lors de la visite technique.",
      },
      {
        question: "Proposez-vous des rideaux métalliques motorisés ?",
        answer:
          "Oui, nous proposons l'installation de rideaux métalliques manuels ou motorisés. La motorisation apporte un confort d'utilisation quotidien appréciable, surtout pour les grandes ouvertures.",
      },
    ],
  },
  {
    slug: "depannage-rideau-metallique",
    name: "Dépannage de rideau métallique",
    shortName: "Dépannage",
    metaTitle:
      "Dépannage Rideau Métallique Urgent | Aide Métal – Île-de-France",
    metaDescription:
      "Dépannage rapide de rideaux métalliques en Île-de-France. Intervention d'urgence pour rideau bloqué, coincé ou en panne. Appelez maintenant le 01 84 80 80 80.",
    h1: "Dépannage Rapide de Rideau Métallique",
    heroText:
      "Votre rideau métallique est bloqué, coincé ou ne fonctionne plus ? Nos techniciens interviennent rapidement pour remettre votre fermeture en état.",
    icon: Zap,
    shortDescription:
      "Dépannage rapide et efficace de rideaux métalliques bloqués, coincés ou en panne. Intervention d'urgence en Île-de-France.",
    intro:
      "Un rideau métallique en panne peut compromettre la sécurité de votre commerce et perturber votre activité. Chez Aide Métal, nous comprenons l'urgence de la situation. C'est pourquoi nous proposons un service de dépannage rapide et efficace pour tous les types de rideaux métalliques. Nos techniciens interviennent dans les meilleurs délais pour diagnostiquer la panne et remettre votre rideau en état de fonctionnement.",
    sections: [
      {
        title: "Quand faire appel à un dépannage ?",
        content:
          "Plusieurs situations nécessitent un dépannage urgent : rideau métallique bloqué en position ouverte ou fermée, rideau qui ne remonte plus, bruit anormal lors de la manœuvre, rideau qui déraille de ses coulisses, moteur qui ne répond plus, lames tordues ou endommagées après un choc. Dans tous ces cas, il est essentiel d'agir vite pour ne pas laisser votre local sans protection.",
      },
      {
        title: "Notre intervention de dépannage",
        content:
          "À votre appel, nous évaluons la situation par téléphone pour préparer l'intervention. Notre technicien se déplace avec l'outillage et les pièces nécessaires pour résoudre la majorité des pannes en une seule intervention. Nous travaillons sur toutes les marques et tous les modèles de rideaux métalliques : manuels, motorisés, à lames pleines, micro-perforées ou à grilles.",
      },
      {
        title: "Un dépannage durable, pas un simple bricolage",
        content:
          "Notre objectif n'est pas de poser un pansement sur le problème, mais de le résoudre durablement. Après chaque dépannage, nous vérifions l'ensemble du mécanisme, remplaçons les pièces usées si nécessaire et effectuons les réglages pour garantir un fonctionnement optimal. Nous vous conseillons également sur l'entretien de votre rideau pour éviter les pannes futures.",
      },
    ],
    benefits: [
      "Intervention rapide, souvent dans la journée",
      "Diagnostic précis de la panne",
      "Réparation durable et professionnelle",
      "Toutes marques et tous modèles",
      "Tarifs transparents, devis avant intervention",
      "Disponibilité du lundi au samedi",
    ],
    processSteps: [
      {
        title: "Appel d'urgence",
        description:
          "Contactez-nous par téléphone. Nous évaluons la situation et organisons l'intervention au plus vite.",
      },
      {
        title: "Déplacement rapide",
        description:
          "Notre technicien se rend sur place avec le matériel nécessaire pour traiter la majorité des pannes.",
      },
      {
        title: "Diagnostic et réparation",
        description:
          "Après un diagnostic précis, nous réparons votre rideau métallique dans les meilleurs délais.",
      },
      {
        title: "Vérification et conseils",
        description:
          "Nous testons le bon fonctionnement et vous donnons des conseils d'entretien pour éviter de futures pannes.",
      },
    ],
    faq: [
      {
        question: "En combien de temps intervenez-vous pour un dépannage ?",
        answer:
          "Nous nous efforçons d'intervenir dans les heures qui suivent votre appel, et souvent dans la journée même. En cas d'urgence de sécurité, nous priorisons votre demande.",
      },
      {
        question: "Mon rideau métallique est bloqué en position ouverte, que faire ?",
        answer:
          "Appelez-nous immédiatement. Un rideau bloqué en position ouverte compromet la sécurité de votre local. Nous intervenons rapidement pour sécuriser votre commerce et réparer le mécanisme.",
      },
      {
        question: "Combien coûte un dépannage de rideau métallique ?",
        answer:
          "Le coût dépend de la nature de la panne et des pièces à remplacer. Nous vous communiquons un devis clair avant toute intervention, sans surprise.",
      },
    ],
  },
  {
    slug: "reparation-rideau-metallique",
    name: "Réparation de rideau métallique",
    shortName: "Réparation",
    metaTitle:
      "Réparation Rideau Métallique | Aide Métal – Île-de-France",
    metaDescription:
      "Réparation de rideaux métalliques toutes marques en Île-de-France. Lames, moteur, axe, ressorts : nos techniciens remettent votre rideau en parfait état. Devis gratuit.",
    h1: "Réparation de Rideau Métallique Toutes Marques",
    heroText:
      "Lames abîmées, moteur défaillant, axe tordu ? Nous réparons votre rideau métallique pour lui redonner toute sa fiabilité et sa longévité.",
    icon: Wrench,
    shortDescription:
      "Réparation complète de rideaux métalliques : lames, moteur, axe, ressorts, coulisses. Toutes marques, intervention rapide.",
    intro:
      "Avec le temps et l'usage quotidien, un rideau métallique peut s'user et nécessiter des réparations. Chez Aide Métal, nous effectuons la réparation de tous les composants de votre rideau métallique : lames endommagées, moteur défaillant, axe d'enroulement usé, ressorts fatigués, coulisses déformées. Nos techniciens possèdent l'expertise nécessaire pour intervenir sur toutes les marques et tous les modèles.",
    sections: [
      {
        title: "Les réparations les plus courantes",
        content:
          "Les pannes de rideau métallique sont variées : remplacement de lames tordues ou percées suite à un choc ou une tentative d'effraction, réparation ou remplacement du moteur pour les modèles motorisés, changement de l'axe d'enroulement lorsqu'il est voilé, remplacement des ressorts de compensation qui assurent l'équilibrage du tablier, réparation des coulisses latérales endommagées, et remise en état du système de verrouillage.",
      },
      {
        title: "Réparer plutôt que remplacer",
        content:
          "Dans de nombreux cas, une réparation bien réalisée permet de prolonger significativement la durée de vie de votre rideau métallique, pour un coût bien inférieur à un remplacement complet. Nous privilégions toujours la solution la plus économique et la plus durable pour nos clients. Si un remplacement s'avère nécessaire, nous vous le signalons avec honnêteté.",
      },
      {
        title: "Des pièces de qualité pour une réparation durable",
        content:
          "Nous utilisons exclusivement des pièces détachées de qualité, compatibles avec votre modèle de rideau métallique. Cela garantit une réparation fiable et une longévité optimale. Après chaque réparation, nous procédons à un contrôle complet du mécanisme pour nous assurer que tout fonctionne parfaitement.",
      },
    ],
    benefits: [
      "Réparation de tous les composants",
      "Pièces détachées de qualité",
      "Toutes marques et tous modèles",
      "Intervention rapide et soignée",
      "Conseils pour prolonger la durée de vie",
      "Devis transparent avant intervention",
    ],
    processSteps: [
      {
        title: "Diagnostic complet",
        description:
          "Notre technicien examine l'ensemble du rideau pour identifier précisément les pièces à réparer ou remplacer.",
      },
      {
        title: "Devis détaillé",
        description:
          "Vous recevez un devis clair détaillant les pièces et la main-d'œuvre, sans surprise ni frais cachés.",
      },
      {
        title: "Réparation professionnelle",
        description:
          "Nous procédons à la réparation avec des pièces de qualité, en respectant les spécifications du fabricant.",
      },
      {
        title: "Contrôle et garantie",
        description:
          "Après réparation, nous testons l'ensemble du mécanisme et vous remettons une garantie sur l'intervention.",
      },
    ],
    faq: [
      {
        question:
          "Peut-on réparer un rideau métallique ancien ?",
        answer:
          "Oui, dans la grande majorité des cas. Nous intervenons sur des rideaux métalliques de toutes générations et trouvons les pièces compatibles, même pour les modèles plus anciens.",
      },
      {
        question:
          "Combien de temps dure une réparation de rideau métallique ?",
        answer:
          "La durée dépend de la nature de la réparation. Un remplacement de lames prend quelques heures, tandis qu'un changement de moteur peut nécessiter une demi-journée. Nous vous informons du délai avant l'intervention.",
      },
      {
        question:
          "Est-ce que la réparation est garantie ?",
        answer:
          "Oui, toutes nos réparations sont garanties, aussi bien sur les pièces que sur la main-d'œuvre. Nous nous engageons sur la qualité de notre travail.",
      },
    ],
  },
  {
    slug: "motorisation-rideau-metallique",
    name: "Motorisation de rideau métallique",
    shortName: "Motorisation",
    metaTitle:
      "Motorisation Rideau Métallique | Aide Métal – Île-de-France",
    metaDescription:
      "Motorisation de rideaux métalliques pour commerces et locaux professionnels en Île-de-France. Confort, sécurité et gain de temps au quotidien. Devis gratuit.",
    h1: "Motorisation de Rideau Métallique",
    heroText:
      "Gagnez en confort et en sécurité grâce à la motorisation de votre rideau métallique. Ouverture et fermeture sans effort, au quotidien.",
    icon: Settings,
    shortDescription:
      "Motorisation de rideaux métalliques existants ou neufs. Confort d'utilisation, sécurité renforcée et gain de temps quotidien.",
    intro:
      "La motorisation d'un rideau métallique transforme son utilisation au quotidien. Fini les efforts physiques pour lever et baisser un tablier lourd : en une simple pression, votre rideau s'ouvre et se ferme en douceur. Aide Métal vous propose la motorisation de votre rideau métallique existant ou l'installation d'un rideau neuf directement motorisé. Une solution confortable, sécurisante et rentable.",
    sections: [
      {
        title: "Les avantages de la motorisation",
        content:
          "Motoriser votre rideau métallique offre de nombreux avantages : un confort d'utilisation incomparable, un gain de temps appréciable à chaque ouverture et fermeture, une sécurité renforcée grâce au verrouillage automatique du moteur, une réduction de l'usure mécanique du tablier et des lames, et une valorisation de votre local commercial. C'est un investissement qui se rentabilise rapidement au quotidien.",
      },
      {
        title: "Motoriser un rideau existant",
        content:
          "Il n'est pas nécessaire de remplacer votre rideau métallique pour bénéficier de la motorisation. Dans la plupart des cas, nous pouvons installer un moteur adapté sur votre rideau existant. Notre technicien évalue la faisabilité lors d'une visite technique, choisit le moteur le plus adapté au poids et aux dimensions de votre tablier, et procède à l'installation dans le respect des normes.",
      },
      {
        title: "Des moteurs fiables et performants",
        content:
          "Nous installons des moteurs tubulaires ou centraux de marques reconnues pour leur fiabilité et leur durabilité. Chaque moteur est dimensionné en fonction du poids et de la taille de votre rideau pour garantir des performances optimales et une longévité maximale. Nous proposons également des options de commande à distance, par interrupteur à clé ou par télécommande.",
      },
    ],
    benefits: [
      "Confort d'utilisation quotidien",
      "Ouverture et fermeture sans effort",
      "Sécurité renforcée par verrouillage automatique",
      "Compatible avec la plupart des rideaux existants",
      "Moteurs de marques fiables et durables",
      "Plusieurs options de commande disponibles",
    ],
    processSteps: [
      {
        title: "Étude de faisabilité",
        description:
          "Nous vérifions que votre rideau est compatible avec une motorisation et déterminons le type de moteur adapté.",
      },
      {
        title: "Choix du moteur",
        description:
          "En fonction du poids, des dimensions et de vos préférences, nous vous recommandons le moteur le plus adapté.",
      },
      {
        title: "Installation du moteur",
        description:
          "Nos techniciens installent le moteur, le raccordent électriquement et configurent le système de commande.",
      },
      {
        title: "Mise en service et formation",
        description:
          "Nous testons le fonctionnement, réglons les fins de course et vous expliquons l'utilisation au quotidien.",
      },
    ],
    faq: [
      {
        question:
          "Peut-on motoriser n'importe quel rideau métallique ?",
        answer:
          "La grande majorité des rideaux métalliques peut être motorisée. Lors de la visite technique, notre technicien vérifie la compatibilité de votre rideau et vous conseille la meilleure solution.",
      },
      {
        question: "Quel est le coût de la motorisation ?",
        answer:
          "Le coût dépend du type de moteur, des dimensions du rideau et de la complexité de l'installation. Nous établissons un devis gratuit et personnalisé après la visite technique.",
      },
      {
        question: "La motorisation est-elle bruyante ?",
        answer:
          "Les moteurs que nous installons sont conçus pour un fonctionnement silencieux. Vous bénéficiez d'une ouverture et fermeture fluides et discrètes, adaptées à un usage commercial en centre-ville.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
