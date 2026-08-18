import type { ThemeName } from "@/lib/types";

type ThemePreset = {
  label: string;
  description: string;
};

export const themePresets = {
  "local-business": {
    label: "Local Business",
    description: "Clair, rassurant et orienté conversion.",
  },
  "minimal-premium": {
    label: "Minimal Premium",
    description: "Sobre, élégant et généreux en espaces.",
  },
  "modern-tech": {
    label: "Modern Tech",
    description: "Dynamique, structuré et technologique.",
  },
  luxury: {
    label: "Luxury",
    description: "Éditorial, contrasté et haut de gamme.",
  },
  creative: {
    label: "Creative",
    description: "Expressif, original et maîtrisé.",
  },
} satisfies Record<ThemeName, ThemePreset>;
