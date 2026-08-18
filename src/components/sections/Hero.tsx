import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import type { HeroContent } from "@/lib/types";

type HeroProps = {
  content: HeroContent;
  themeLabel: string;
};

export function Hero({ content, themeLabel }: HeroProps) {
  return (
    <section id="accueil" className="overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            {content.introduction}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink {...content.primaryAction} />
            <ActionLink {...content.secondaryAction} variant="secondary" />
          </div>
        </div>

        <aside className="relative rounded-[var(--site-radius)] border border-line bg-surface p-7 shadow-[var(--site-shadow)] sm:p-9">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/35 blur-3xl" aria-hidden="true" />
          <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Modèle maître
          </p>
          <dl className="relative mt-7 grid gap-6">
            <div>
              <dt className="text-sm text-muted">Identité métier</dt>
              <dd className="mt-1 font-semibold">Aucune</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Thème de départ</dt>
              <dd className="mt-1 font-semibold">{themeLabel}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Règle</dt>
              <dd className="mt-1 flex items-center gap-2 font-semibold">
                <span className="size-2.5 rounded-full bg-brand" aria-hidden="true" />
                Dupliquer avant de personnaliser
              </dd>
            </div>
          </dl>
        </aside>
      </Container>
    </section>
  );
}
