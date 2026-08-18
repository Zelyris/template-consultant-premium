import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/lib/types";

export function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer id="contact" className="py-12">
      <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
            Fondation technique uniquement. Créez toujours un nouveau repository depuis ce template avant de produire un site commercial.
          </p>
        </div>
        <a className="text-sm font-semibold text-brand hover:underline" href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
      </Container>
    </footer>
  );
}
