import type { SiteConfig } from "@/lib/types";

export const siteConfig = {
  name: "Site Factory — Base neutre",
  description:
    "Une fondation Next.js centralisée, réutilisable et prête à devenir un nouveau template commercial.",
  locale: "fr",
  theme: "minimal-premium",
  contact: {
    phone: "01 23 45 67 89",
    phoneHref: "tel:+33123456789",
    email: "contact@votre-entreprise.fr",
  },
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Architecture", href: "#architecture" },
    { label: "Contact", href: "#contact" },
  ],
} as const satisfies SiteConfig;
