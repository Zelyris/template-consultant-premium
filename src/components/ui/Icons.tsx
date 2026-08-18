type IconProps = { className?: string };

export function ArrowUpRightIcon({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function MailIcon({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function CheckIcon({ className = "" }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m4 10 4 4 8-9" /></svg>;
}
