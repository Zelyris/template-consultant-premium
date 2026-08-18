import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

export function Header({ site }: { site: SiteConfig }) {
  return (
    <header className="border-b border-line bg-surface/85 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <a href="#accueil" className="max-w-56 text-sm font-bold sm:text-base">
          {site.name}
        </a>
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-foreground" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#architecture"
          className="rounded-full bg-brand px-4 py-2.5 text-xs font-semibold text-brand-contrast transition hover:opacity-90 sm:px-5 sm:text-sm"
        >
          Base prête
        </a>
      </Container>
    </header>
  );
}
