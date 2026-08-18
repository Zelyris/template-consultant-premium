"use client";

import { useState } from "react";
import type { SiteConfig } from "@/lib/types";

export function MobileMenu({ site }: { site: SiteConfig }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-surface text-foreground"
      >
        <span className="sr-only">{open ? site.actions.closeMenuLabel : site.actions.menuLabel}</span>
        <span className="grid gap-1.5" aria-hidden="true">
          <span className={`h-px w-5 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </span>
      </button>
      {open ? (
        <nav id="mobile-navigation" aria-label={site.actions.menuLabel} className="absolute inset-x-0 top-full border-y border-line bg-surface-strong p-5 shadow-[var(--site-shadow-soft)]">
          <ul className="grid gap-1">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <a onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium hover:bg-background" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a onClick={() => setOpen(false)} href={site.actions.primary.href} className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast">
            {site.actions.primary.label}
          </a>
        </nav>
      ) : null}
    </div>
  );
}
