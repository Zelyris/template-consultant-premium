import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { homeContent } from "@/content/content";

function Disclaimer({ children, dark = false }: { children: string; dark?: boolean }) {
  return <p className={`mt-7 max-w-2xl rounded-md border px-4 py-3 text-xs leading-5 ${dark ? "border-white/15 bg-white/5 text-dark-muted" : "border-brand/20 bg-brand-soft/35 text-muted"}`}>{children}</p>;
}

export function Results({ content }: { content: typeof homeContent.results }) {
  return (
    <section className="section-space bg-background">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow={content.eyebrow} title={content.title} />
            <Disclaimer>{content.disclaimer}</Disclaimer>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-[var(--site-radius-lg)] border border-line bg-line sm:grid-cols-3">
            {content.items.map((item) => (
              <div key={item.value} className="bg-surface-strong p-7 sm:p-6 lg:p-8">
                <dt className="font-editorial text-5xl tracking-[-0.04em] text-brand lg:text-6xl">{item.value}</dt>
                <dd className="mt-5 text-sm leading-6 text-foreground">{item.label}</dd>
                <dd className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

export function Cases({ content }: { content: typeof homeContent.cases }) {
  return (
    <section className="section-space border-y border-line bg-surface">
      <Container>
        <SectionIntro eyebrow={content.eyebrow} title={content.title} />
        <Disclaimer>{content.disclaimer}</Disclaimer>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {content.items.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-[var(--site-radius-lg)] border border-line bg-surface-strong">
              <div className="relative flex min-h-44 items-end overflow-hidden bg-dark p-7 text-brand-contrast sm:p-8">
                <span className="absolute -right-6 -top-16 font-editorial text-[12rem] leading-none text-white/[0.04]" aria-hidden="true">0{index + 1}</span>
                <div className="relative">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand-soft">{item.sector}</p>
                  <h3 className="font-editorial mt-4 max-w-md text-3xl leading-tight sm:text-4xl">{item.title}</h3>
                </div>
              </div>
              <dl className="grid gap-0 p-7 sm:p-8">
                <div className="grid gap-2 border-b border-line pb-5 sm:grid-cols-[8rem_1fr] sm:gap-6"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand">{content.labels.context}</dt><dd className="text-sm leading-6 text-muted">{item.context}</dd></div>
                <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand">{content.labels.intervention}</dt><dd className="text-sm leading-6 text-muted">{item.intervention}</dd></div>
                <div className="grid gap-2 pt-5 sm:grid-cols-[8rem_1fr] sm:gap-6"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-brand">{content.labels.outcome}</dt><dd className="text-sm font-medium leading-6 text-foreground">{item.outcome}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Testimonials({ content }: { content: typeof homeContent.testimonials }) {
  return (
    <section className="section-space bg-dark text-brand-contrast">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow={content.eyebrow} title={content.title} theme="dark" />
            <Disclaimer dark>{content.disclaimer}</Disclaimer>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {content.items.map((item) => (
              <figure key={item.name} className="flex flex-col justify-between rounded-[var(--site-radius-lg)] border border-white/15 bg-white/[0.035] p-7 sm:p-8">
                <blockquote className="font-editorial text-2xl leading-[1.35] text-brand-contrast">“{item.quote}”</blockquote>
                <figcaption className="mt-10 border-t border-white/15 pt-5">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="mt-1 text-xs leading-5 text-dark-muted">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
