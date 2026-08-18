import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Camille Renaud Conseil",
  legalName: "Camille Renaud Conseil — identité de démonstration",
  monogram: "CR",
  profession: "Conseil en stratégie & transformation",
  description:
    "Camille Renaud accompagne les dirigeantes et dirigeants de PME pour clarifier leur stratégie, aligner leurs équipes et transformer leurs ambitions en décisions concrètes.",
  url: "https://camille-renaud-conseil.example",
  locale: "fr-FR",
  theme: "minimal-premium",
  contact: {
    email: "bonjour@camille-renaud-conseil.fr",
    phone: "+33 (0)6 12 34 56 78",
    phoneHref: "tel:+33612345678",
    location: "Lyon · France entière",
    availability: "Échanges à distance ou sur site, selon la mission",
    mailtoSubject: "Demande d’échange — Camille Renaud Conseil",
  },
  navigation: [
    { label: "Expertises", href: "#expertises" },
    { label: "Missions", href: "#missions" },
    { label: "Méthode", href: "#methode" },
    { label: "À propos", href: "#a-propos" },
  ],
  actions: {
    primary: {
      label: "Réserver un échange",
      href: "#contact",
      ariaLabel: "Réserver un échange par e-mail avec Camille Renaud",
    },
    secondary: {
      label: "Découvrir les missions",
      href: "#missions",
    },
    inquiry: {
      label: "Parler de votre contexte",
      href: "#contact",
    },
    finalContact: {
      label: "Écrire à Camille",
      href: "#contact",
    },
    backToTop: {
      label: "Retour en haut",
      href: "#accueil",
    },
    menuLabel: "Menu",
    closeMenuLabel: "Fermer le menu",
  },
} as const satisfies SiteConfig;
