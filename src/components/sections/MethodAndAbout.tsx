import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { homeContent } from "@/content/content";

export function Method({ content }: { content: typeof homeContent.method }) {
  return (
    <section id={content.id} className="section-space overflow-hidden bg-dark text-brand-contrast">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} theme="dark" />
            <ul className="mt-10 flex flex-wrap gap-2">
              {content.principles.map((principle) => <li key={principle} className="rounded-full border border-white/15 px-4 py-2 text-xs text-dark-muted">{principle}</li>)}
            </ul>
          </div>
          <ol className="relative grid gap-0 border-t border-white/15">
            {content.steps.map((step) => (
              <li key={step.number} className="group grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[4rem_12rem_1fr] sm:items-start sm:gap-6">
                <span className="text-xs font-bold tracking-[0.18em] text-brand-soft">{step.number}</span>
                <h3 className="font-editorial text-2xl transition-transform duration-300 group-hover:translate-x-1">{step.title}</h3>
                <p className="text-sm leading-7 text-dark-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function About({ content }: { content: typeof homeContent.about }) {
  return (
    <section id={content.id} className="section-space grain border-b border-line bg-surface">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--site-radius-lg)] border border-line bg-background p-8 shadow-[var(--site-shadow-soft)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_48%,var(--site-line)_49%,var(--site-line)_50%,transparent_51%)] opacity-70" aria-hidden="true" />
            <div className="absolute left-[12%] top-[10%] h-[52%] w-[52%] rounded-full border border-brand" aria-hidden="true" />
            <div className="absolute bottom-[9%] right-[10%] h-[56%] w-[50%] rounded-t-full bg-brand-soft" aria-hidden="true" />
            <div className="absolute inset-x-8 bottom-8 z-10 rounded-xl bg-dark p-6 text-brand-contrast shadow-[var(--site-shadow)]">
              <span className="font-editorial text-5xl">CR</span>
              <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-dark-muted">{content.profileLabel}</p>
            </div>
          </div>
          <div>
            <SectionIntro eyebrow={content.eyebrow} title={content.title} />
            <div className="mt-8 grid gap-5 text-base leading-8 text-muted">{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-7">
              {content.credentials.map((credential) => (
                <div key={credential.value}>
                  <dt className="font-editorial text-2xl text-brand sm:text-3xl">{credential.value}</dt>
                  <dd className="mt-1 text-[0.68rem] leading-5 text-muted sm:text-xs">{credential.label}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="font-editorial mt-9 border-l-2 border-brand pl-6 text-xl italic leading-8 text-foreground sm:text-2xl">“{content.quote}”</blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
