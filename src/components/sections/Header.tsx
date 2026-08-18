import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/sections/MobileMenu";
import type { SiteConfig } from "@/lib/types";

export function Header({ site, notice }: { site: SiteConfig; notice: string }) {
  return (
    <>
      <div className="bg-dark px-4 py-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-dark-muted">
        {notice}
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-md">
        <Container className="relative flex min-h-[4.75rem] items-center justify-between gap-5">
          <a href="#accueil" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} — accueil`}>
            <span className="font-editorial grid size-10 shrink-0 place-items-center rounded-full border border-brand text-lg font-semibold text-brand">{site.monogram}</span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-[-0.01em] sm:text-base">{site.name}</span>
              <span className="hidden text-[0.65rem] uppercase tracking-[0.14em] text-muted sm:block">{site.profession}</span>
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-muted">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <a className="relative py-3 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={site.actions.primary.href} aria-label={site.actions.primary.ariaLabel} className="hidden min-h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-dark md:inline-flex">
              {site.actions.primary.label}
            </a>
            <MobileMenu site={site} />
          </div>
        </Container>
      </header>
    </>
  );
}
