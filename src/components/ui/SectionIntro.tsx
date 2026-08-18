type SectionIntroProps = {
  eyebrow: string;
  title: string;
  introduction?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionIntro({ eyebrow, title, introduction, align = "left", theme = "light" }: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start";
  const titleColor = theme === "dark" ? "text-brand-contrast" : "text-foreground";
  const textColor = theme === "dark" ? "text-dark-muted" : "text-muted";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <div className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand">
        <span className="h-px w-8 bg-brand" aria-hidden="true" />
        <p>{eyebrow}</p>
      </div>
      <h2 className={`font-editorial mt-5 text-balance text-4xl leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-[3.75rem] ${titleColor}`}>
        {title}
      </h2>
      {introduction ? <p className={`mt-6 max-w-2xl text-pretty text-lg leading-8 ${textColor}`}>{introduction}</p> : null}
    </div>
  );
}
