"use client";

import type { FormEvent } from "react";
import { MailIcon } from "@/components/ui/Icons";
import type { homeContent } from "@/content/content";

type ContactFormProps = {
  recipient: string;
  mailtoSubject: string;
  content: typeof homeContent.contact.form;
};

export function ContactForm({ recipient, mailtoSubject, content }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const body = [
      content.emailBody.greeting,
      "",
      content.emailBody.intro,
      "",
      `${content.emailBody.labels.name} : ${value("name")}`,
      `${content.emailBody.labels.company} : ${value("company")}`,
      `${content.emailBody.labels.email} : ${value("email")}`,
      `${content.emailBody.labels.phone} : ${value("phone") || "—"}`,
      `${content.emailBody.labels.subject} : ${value("subject")}`,
      "",
      `${content.emailBody.labels.message} :`,
      value("message"),
      "",
      content.emailBody.closing,
      value("name"),
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClasses = "mt-2 min-h-12 w-full rounded-lg border border-line-strong bg-surface-strong px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/65 hover:border-muted focus:border-brand";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-describedby="contact-form-helper">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={content.fields.name.label} htmlFor="contact-name">
          <input className={inputClasses} id="contact-name" name="name" type="text" autoComplete="name" placeholder={content.fields.name.placeholder} required />
        </Field>
        <Field label={content.fields.company.label} htmlFor="contact-company">
          <input className={inputClasses} id="contact-company" name="company" type="text" autoComplete="organization" placeholder={content.fields.company.placeholder} required />
        </Field>
        <Field label={content.fields.email.label} htmlFor="contact-email">
          <input className={inputClasses} id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder={content.fields.email.placeholder} required />
        </Field>
        <Field label={content.fields.phone.label} htmlFor="contact-phone">
          <input className={inputClasses} id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={content.fields.phone.placeholder} />
        </Field>
      </div>
      <Field label={content.fields.subject.label} htmlFor="contact-subject">
        <select className={inputClasses} id="contact-subject" name="subject" required defaultValue={content.fields.subject.options[0]}>
          {content.fields.subject.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </Field>
      <Field label={content.fields.message.label} htmlFor="contact-message">
        <textarea className={`${inputClasses} min-h-36 resize-y py-3`} id="contact-message" name="message" rows={5} placeholder={content.fields.message.placeholder} required />
      </Field>
      <button type="submit" className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast transition-colors hover:bg-brand-dark sm:w-fit">
        <MailIcon className="size-5" />
        {content.submitLabel}
      </button>
      <p id="contact-form-helper" className="max-w-2xl text-xs leading-5 text-muted">{content.helper}</p>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return <div><label className="text-sm font-semibold text-foreground" htmlFor={htmlFor}>{label}</label>{children}</div>;
}
