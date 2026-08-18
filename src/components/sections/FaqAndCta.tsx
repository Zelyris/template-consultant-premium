import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { homeContent } from "@/content/content";
import type { ActionItem } from "@/lib/types";

export function Faq({ content }: { content: typeof homeContent.faq }) {
  return (
    <section className="section-space bg-surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <SectionIntro eyebrow={content.eyebrow} title={content.title} />
          <div className="border-t border-line">
            {content.items.map((item, index) => (
              <details key={item.question} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-4 sm:gap-6"><span className="mt-1 text-xs font-bold text-brand">{String(index + 1).padStart(2, "0")}</span><span className="font-editorial text-xl leading-7 sm:text-2xl">{item.question}</span></span>
                  <span aria-hidden="true" className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong text-lg leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="pb-7 pl-10 pr-10 text-sm leading-7 text-muted sm:pl-12"><p>{item.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta({ content, action }: { content: typeof homeContent.finalCta; action: ActionItem }) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-brand-contrast sm:py-24">
      <div className="absolute -right-20 -top-52 size-[34rem] rounded-full border border-white/15" aria-hidden="true" />
      <div className="absolute -right-4 -top-36 size-[24rem] rounded-full border border-white/15" aria-hidden="true" />
      <Container className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-contrast/75">{content.eyebrow}</p>
          <h2 className="font-editorial mt-5 text-balance text-4xl leading-[1.05] tracking-[-0.04em] sm:text-6xl">{content.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-contrast/80">{content.text}</p>
        </div>
        <div className="lg:text-right">
          <ActionLink {...action} variant="light" />
          <p className="mt-3 max-w-xs text-xs leading-5 text-brand-contrast/70">{content.note}</p>
        </div>
      </Container>
    </section>
  );
}
