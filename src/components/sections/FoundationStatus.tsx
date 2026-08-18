import { Container } from "@/components/ui/Container";
import type { FoundationItem } from "@/lib/types";

export function FoundationStatus({ items }: { items: readonly FoundationItem[] }) {
  return (
    <section id="architecture" className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
            Architecture neutre
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
            Quatre zones simples à adapter.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Cette séparation permet de fabriquer rapidement un nouveau template sans disperser les informations.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.file} className="rounded-[var(--site-radius)] border border-line bg-background p-6 sm:p-7">
              <code className="text-xs font-bold text-brand">{item.file}</code>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
