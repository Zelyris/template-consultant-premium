import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";
import type { homeContent } from "@/content/content";

export function Footer({ site, content }: { site: SiteConfig; content: typeof homeContent.footer }) {
  return (
    <footer className="border-t border-white/10 bg-dark py-12 text-brand-contrast sm:py-16">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_.8fr] lg:gap-16">
          <div>
            <a href="#accueil" className="flex w-fit items-center gap-3">
              <span className="font-editorial grid size-11 place-items-center rounded-full border border-brand-soft text-lg text-brand-soft">{site.monogram}</span>
              <span className="font-semibold">{site.name}</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-dark-muted">{content.description}</p>
          </div>
          <nav aria-label={content.navigationLabel}>
            <ul className="grid gap-3 text-sm text-dark-muted">
              {site.navigation.map((item) => <li key={item.href}><a className="transition-colors hover:text-brand-contrast" href={item.href}>{item.label}</a></li>)}
              <li><a className="transition-colors hover:text-brand-contrast" href="#contact">{site.actions.primary.label}</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-soft">{content.contactTitle}</h2>
            <address className="mt-4 grid gap-2 not-italic text-sm text-dark-muted">
              <a className="hover:text-brand-contrast" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a className="hover:text-brand-contrast" href={site.contact.phoneHref}>{site.contact.phone}</a>
              <p>{site.contact.location}</p>
            </address>
          </div>
        </div>

        <details id="mentions" className="border-b border-white/15 py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            {content.legalTitle}
            <span aria-hidden="true" className="text-xl text-brand-soft">+</span>
          </summary>
          <div className="mt-5 grid gap-5 text-xs leading-6 text-dark-muted sm:grid-cols-2">
            <ul className="grid gap-1">{content.legalItems.map((item) => <li key={item}>{item}</li>)}</ul>
            <p>{content.privacy}</p>
          </div>
        </details>

        <div className="flex flex-col gap-4 pt-6 text-xs text-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. {content.rights}</p>
          <a href={site.actions.backToTop.href} className="w-fit font-semibold text-brand-soft hover:text-brand-contrast">{site.actions.backToTop.label} ↑</a>
        </div>
      </Container>
    </footer>
  );
}
