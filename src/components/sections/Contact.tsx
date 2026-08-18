import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { SiteConfig } from "@/lib/types";
import type { homeContent } from "@/content/content";

export function Contact({ content, site }: { content: typeof homeContent.contact; site: SiteConfig }) {
  return (
    <section id={content.id} className="section-space bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow={content.eyebrow} title={content.title} introduction={content.introduction} />
            <div className="mt-8 rounded-[var(--site-radius-lg)] border border-brand/20 bg-brand-soft/35 p-6">
              <h3 className="text-sm font-bold text-foreground">{content.privacyTitle}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{content.privacyText}</p>
              <p className="mt-3 text-xs font-semibold text-brand-dark">{content.noBooking}</p>
            </div>
            <address className="mt-8 grid gap-3 not-italic text-sm text-muted">
              <a className="w-fit font-semibold text-foreground hover:text-brand" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a className="w-fit hover:text-brand" href={site.contact.phoneHref}>{site.contact.phone}</a>
              <p>{site.contact.location}</p>
              <p>{site.contact.availability}</p>
            </address>
          </div>
          <div className="rounded-[var(--site-radius-lg)] border border-line bg-surface p-6 shadow-[var(--site-shadow-soft)] sm:p-9 lg:p-10">
            <ContactForm recipient={site.contact.email} mailtoSubject={site.contact.mailtoSubject} content={content.form} />
          </div>
        </div>
      </Container>
    </section>
  );
}
