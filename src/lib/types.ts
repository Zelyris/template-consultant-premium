export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ActionItem = NavigationItem & {
  ariaLabel?: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  monogram: string;
  profession: string;
  description: string;
  url: `https://${string}`;
  locale: string;
  theme: "minimal-premium";
  contact: {
    email: string;
    phone: string;
    phoneHref: `tel:${string}`;
    location: string;
    availability: string;
    mailtoSubject: string;
  };
  navigation: readonly NavigationItem[];
  actions: {
    primary: ActionItem;
    secondary: ActionItem;
    inquiry: ActionItem;
    finalContact: ActionItem;
    backToTop: ActionItem;
    menuLabel: string;
    closeMenuLabel: string;
  };
};
