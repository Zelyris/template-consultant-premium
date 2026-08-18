import type { FoundationItem, HeroContent } from "@/lib/types";

const hero = {
  eyebrow: "Fondation technique réutilisable",
  title: "Un point de départ propre pour chaque nouveau site.",
  introduction:
    "Dupliquez cette base, choisissez un secteur et laissez Codex assembler le contenu, les composants et le thème sans modifier le modèle maître.",
  primaryAction: {
    label: "Voir l’architecture",
    href: "#architecture",
  },
  secondaryAction: {
    label: "Préparer un template",
    href: "#contact",
  },
} satisfies HeroContent;

const foundationItems = [
  {
    file: "config/site.ts",
    title: "Identité centralisée",
    description:
      "Nom, coordonnées, navigation et thème actif sont regroupés dans un seul fichier.",
  },
  {
    file: "content/content.ts",
    title: "Contenus centralisés",
    description:
      "Les textes et listes fréquemment modifiés restent séparés des composants visuels.",
  },
  {
    file: "styles/themes.css",
    title: "Design interchangeable",
    description:
      "Les couleurs, contrastes, arrondis et ombres utilisent des variables réutilisables.",
  },
  {
    file: "components/",
    title: "Sections assemblables",
    description:
      "Chaque template peut ajouter uniquement les sections utiles à son activité.",
  },
] satisfies readonly FoundationItem[];

export const homeContent = {
  hero,
  foundationItems,
};
