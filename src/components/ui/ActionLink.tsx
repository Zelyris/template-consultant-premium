import type { ActionItem } from "@/lib/types";

type ActionLinkProps = ActionItem & {
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ActionLink({ href, label, ariaLabel, variant = "primary", className = "" }: ActionLinkProps) {
  const variantClasses = {
    primary: "border border-brand bg-brand text-brand-contrast hover:border-brand-dark hover:bg-brand-dark",
    secondary: "border border-line-strong bg-transparent text-foreground hover:border-brand hover:text-brand",
    light: "border border-brand-contrast bg-brand-contrast text-dark hover:bg-brand-soft",
  }[variant];

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-colors duration-300 ${variantClasses} ${className}`}
    >
      {label}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}
