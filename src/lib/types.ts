export type ThemeName =
  | "local-business"
  | "minimal-premium"
  | "modern-tech"
  | "luxury"
  | "creative";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  locale: string;
  theme: ThemeName;
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
  };
  navigation: readonly NavigationItem[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  introduction: string;
  primaryAction: NavigationItem;
  secondaryAction: NavigationItem;
};

export type FoundationItem = {
  file: string;
  title: string;
  description: string;
};
