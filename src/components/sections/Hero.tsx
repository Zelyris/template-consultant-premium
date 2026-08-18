import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { siteConfig } from "@/config/site";
import type { homeContent } from "@/content/content";

type HeroProps = {
  content: typeof homeContent.hero;
  actions: typeof siteConfig.actions;
};

export function Hero({ content, actions }: HeroProps) {
  return (
    <section id="accueil" className="grain relative overflow-hidden border-b border-line bg-surface">
      <div className="absolute -right-24 top-16 size-[28rem] rounded-full bg-brand-soft/55 blur-3xl" aria-hidden="true" />
      <Container className="relative grid min-h-[calc(100svh-7rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_.72fr] lg:gap-16 lg:py-24">
        <div className="reveal">
          <div className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            <p>{content.eyebrow}</p>
          </div>
          <h1 className="font-editorial mt-6 max-w-4xl text-balance text-[clamp(3.25rem,8vw,6.9rem)] leading-[0.93] tracking-[-0.055em]">
            {content.title}
          </h1>
          <div className="mt-8 grid max-w-3xl gap-5 border-l border-brand pl-5 sm:grid-cols-[1.35fr_.65fr] sm:gap-8 sm:pl-7">
            <p className="text-pretty text-lg leading-8 text-foreground sm:text-xl">{content.introduction}</p>
            <p className="text-sm leading-6 text-muted">{content.supportingText}</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink {...actions.primary} />
            <ActionLink {...actions.secondary} variant="secondary" />
          </div>
        </div>

        <StrategyGraphic content={content.graphic} />
      </Container>
    </section>
  );
}

function StrategyGraphic({ content }: { content: typeof homeContent.hero.graphic }) {
  return (
    <figure className="reveal reveal-delay relative mx-auto aspect-square w-full max-w-[31rem]" aria-label={content.label}>
      <div className="absolute inset-[5%] rounded-full border border-line-strong" />
      <div className="absolute inset-[18%] rounded-full border border-brand/40" />
      <div className="absolute inset-[31%] rotate-45 border border-line-strong bg-surface-strong shadow-[var(--site-shadow)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="z-10 grid size-32 place-items-center rounded-full bg-dark text-center text-brand-contrast shadow-[var(--site-shadow)]">
          <span className="font-editorial text-2xl">{content.center}</span>
        </div>
      </div>
      <span className="absolute left-1/2 top-[3%] -translate-x-1/2 rounded-full border border-line bg-surface-strong px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">{content.items[0]}</span>
      <span className="absolute bottom-[12%] left-[2%] rounded-full border border-line bg-surface-strong px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">{content.items[1]}</span>
      <span className="absolute bottom-[12%] right-[0%] rounded-full border border-line bg-surface-strong px-4 py-2 text-xs font-bold uppercase tracking-[0.12em]">{content.items[2]}</span>
      <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">{content.note}</figcaption>
    </figure>
  );
}
