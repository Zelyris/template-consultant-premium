import { ActionLink } from "@/components/ui/ActionLink";
import { CheckIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { homeContent } from "@/content/content";
import type { ActionItem } from "@/lib/types";

export function Problems({ content }: { content: typeof homeContent.problems }) {
  return (
    <section id={content.id} className="section-space bg-surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <SectionIntro eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
          <div className="grid border-t border-line sm:grid-cols-2">
            {content.items.map((item) => (
              <article key={item.number} className="group border-b border-line py-7 sm:px-7 sm:first:border-r sm:[&:nth-child(3)]:border-r lg:py-9">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-bold tracking-[0.14em] text-brand">{item.number}</span>
                  <span className="size-2 rounded-full bg-brand-soft transition-colors group-hover:bg-brand" aria-hidden="true" />
                </div>
                <h3 className="font-editorial mt-8 text-2xl leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Offers({ content, action }: { content: typeof homeContent.offers; action: ActionItem }) {
  return (
    <section id={content.id} className="section-space border-y border-line bg-background">
      <Container>
        <SectionIntro eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.items.map((offer) => (
            <article key={offer.index} className={`relative flex min-h-full flex-col overflow-hidden rounded-[var(--site-radius-lg)] border p-7 sm:p-8 ${offer.featured ? "border-dark bg-dark text-brand-contrast shadow-[var(--site-shadow)]" : "border-line bg-surface-strong"}`}>
              {offer.featured ? <span className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-brand" aria-hidden="true" /> : null}
              <div className="flex items-center justify-between gap-5 text-xs font-bold uppercase tracking-[0.14em]">
                <span className={offer.featured ? "text-brand-soft" : "text-brand"}>{offer.index}</span>
                <span className={offer.featured ? "text-dark-muted" : "text-muted"}>{offer.duration}</span>
              </div>
              <h3 className="font-editorial mt-14 text-3xl leading-tight sm:text-[2.15rem]">{offer.title}</h3>
              <p className={`mt-5 leading-7 ${offer.featured ? "text-dark-muted" : "text-muted"}`}>{offer.text}</p>
              <ul className={`mt-8 grid gap-4 border-t pt-7 text-sm ${offer.featured ? "border-white/15" : "border-line"}`}>
                {offer.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3"><CheckIcon className={`mt-0.5 size-4 shrink-0 ${offer.featured ? "text-brand-soft" : "text-brand"}`} /><span>{deliverable}</span></li>
                ))}
              </ul>
              <ActionLink {...action} variant={offer.featured ? "light" : "secondary"} className="mt-9 w-full" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
