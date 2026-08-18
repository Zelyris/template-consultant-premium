import type { NavigationItem } from "@/lib/types";

type ActionLinkProps = NavigationItem & {
  variant?: "primary" | "secondary";
};

export function ActionLink({ href, label, variant = "primary" }: ActionLinkProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-brand text-brand-contrast hover:opacity-90"
      : "border border-line bg-surface text-foreground hover:border-brand";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${variantClasses}`}
    >
      {label}
    </a>
  );
}
