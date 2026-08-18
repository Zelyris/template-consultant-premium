import { Container } from "@/components/ui/Container";
import type { homeContent } from "@/content/content";

export function TrustStrip({ content }: { content: typeof homeContent.trust }) {
  return (
    <section aria-labelledby="trust-title" className="border-b border-line bg-background py-10">
      <Container>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <h2 id="trust-title" className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{content.label}</h2>
            <p className="mt-2 text-xs leading-5 text-muted">{content.disclaimer}</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-4 lg:gap-x-10">
            {content.references.map((reference) => (
              <li key={reference} className="font-editorial text-center text-lg text-ink-soft sm:text-xl">{reference}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
