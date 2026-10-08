import { useState } from "react";
import { Mail, Send, Check } from "lucide-react";
import { Bow, BobaCup, Reveal, SectionLabel, Instagram, Youtube } from "./Decor";
import { useT } from "../i18n";

export function Collab() {
  const t = useT().collab;
  const process = t.process.map((p, i) => ({ ...p, n: `0${i + 1}` }));
  const why = t.why;
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.title}<span className="italic text-matcha-deep">{t.titleEm}</span>
          </h2>
        </Reveal>
        <div className="relative mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden border-t border-dashed border-latte lg:block" />
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="relative flex h-full gap-4 rounded-3xl border border-nude bg-white p-5 sm:block sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-matcha-soft font-serif text-sm italic text-matcha-deep">{p.n}</span>
                <div>
                  <h3 className="font-serif text-xl sm:mt-4">{p.t}</h3>
                  <p className="mt-1 text-sm text-cocoa/75 sm:mt-2">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5">
          {why.map((w) => (
            <span key={w} className="inline-flex items-center gap-2 rounded-full bg-blush/60 px-3.5 py-2 text-[13px] text-cocoa sm:px-4 sm:text-sm">
              <Check className="h-4 w-4 text-rose" /> {w}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// Destination inbox for the contact form (via FormSubmit.co — no backend needed).
const CONTACT_EMAIL = "contacto@eulaliarodrigues.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export function Contact() {
  const t = useT().contact;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Plan B: if the form service fails, offer a pre-filled email instead.
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);
    setFallbackHref(null);

    const data = new FormData(e.currentTarget);
    // Honeypot: bots fill hidden fields, humans don't.
    if (data.get("_honey")) {
      setSent(true);
      setSending(false);
      return;
    }

    const payload = {
      name: data.get("name"),
      brand: data.get("brand"),
      email: data.get("email"),
      service: data.get("service") || "Not specified",
      message: data.get("message") || "",
      _subject: `New UGC inquiry from ${data.get("brand") || data.get("name")}`,
      _template: "table",
      _captcha: "false",
    };

    // Abort if the service hangs, so the visitor isn't left waiting forever.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) {
        throw new Error(json.message || "Request failed");
      }
      setSent(true);
    } catch (err) {
      const body = [
        `Name: ${payload.name}`,
        `Brand: ${payload.brand}`,
        `Email: ${payload.email}`,
        `Looking for: ${payload.service}`,
        "",
        String(payload.message),
      ].join("\n");
      setFallbackHref(
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`,
      );
      const generic = t.error;
      // In dev, surface the real reason (e.g. FormSubmit activation pending).
      setError(import.meta.env.DEV && err instanceof Error ? `${generic} (${err.message})` : generic);
    } finally {
      clearTimeout(timeout);
      setSending(false);
    }
  }

  return (
    <section id="contact" className="px-3 pb-10 sm:px-5">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-matcha-soft px-5 py-8 sm:rounded-[2.5rem] sm:p-8 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blush/70 blur-3xl" />
        <BobaCup className="absolute bottom-8 right-8 hidden h-32 w-24 rotate-6 lg:block" tea="#e9d8c8" />
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="font-hand text-2xl text-cocoa sm:text-3xl">{t.hey}</p>
            <h2 className="mt-2 font-serif text-[2rem] leading-tight sm:text-4xl md:text-5xl">
              {t.title}<span className="italic">{t.titleEm}</span>
            </h2>
            <p className="mt-5 max-w-md text-cocoa/80">
              {t.desc}
            </p>
            <div className="mt-8 space-y-3">
              <a href="mailto:contacto@eulaliarodrigues.com" className="flex min-w-0 items-center gap-3 rounded-2xl bg-white/80 px-4 py-4 text-sm transition sm:px-5 sm:text-base hover:bg-white">
                <Mail className="h-5 w-5 shrink-0 text-rose" /> <span className="min-w-0 break-all">contacto@eulaliarodrigues.com</span>
              </a>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/eulaliarodriiguess/" target="_blank" className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl bg-white/80 px-4 py-4 text-sm transition sm:px-5 hover:bg-white">
                  <Instagram className="h-5 w-5 shrink-0 text-rose" /> Instagram
                </a>
                <a href="https://www.youtube.com/@eulaliarodriiguess" target="_blank" className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl bg-white/80 px-4 py-4 text-sm transition sm:px-5 hover:bg-white">
                  <Youtube className="h-5 w-5 shrink-0 text-rose" /> YouTube
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl bg-white p-5 shadow-xl shadow-matcha-deep/10 sm:p-6 md:p-8"
          >
            <Bow className="absolute -top-4 left-1/2 h-8 w-12 -translate-x-1/2" />
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <span className="text-5xl">🧋</span>
                <p className="mt-4 font-serif text-2xl">{t.thanks}</p>
                <p className="mt-2 text-sm text-cocoa/70">{t.thanksSub}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="name" placeholder={t.name} className="w-full rounded-xl border border-nude bg-cream px-4 py-3 text-base outline-none sm:text-sm focus:border-latte" />
                  <input required name="brand" placeholder={t.brand} className="w-full rounded-xl border border-nude bg-cream px-4 py-3 text-base outline-none sm:text-sm focus:border-latte" />
                </div>
                <input required name="email" type="email" placeholder={t.email} className="w-full rounded-xl border border-nude bg-cream px-4 py-3 text-base outline-none sm:text-sm focus:border-latte" />
                <select name="service" className="w-full rounded-xl border border-nude bg-cream px-4 py-3 text-base text-cocoa outline-none sm:text-sm focus:border-latte" defaultValue="">
                  <option value="" disabled>{t.servicePlaceholder}</option>
                  {t.options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <textarea name="message" rows={4} placeholder={t.message} className="w-full resize-none rounded-xl border border-nude bg-cream px-4 py-3 text-base outline-none sm:text-sm focus:border-latte" />
                {error && (
                  <div className="space-y-3 rounded-xl bg-blush/40 p-4 text-center">
                    <p className="text-sm text-rose-600">{error}</p>
                    {fallbackHref && (
                      <a
                        href={fallbackHref}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-cream"
                      >
                        <Mail className="h-4 w-4" /> {t.sendViaEmail}
                      </a>
                    )}
                    <p className="text-xs text-cocoa/70">
                      {t.orWrite} <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 font-medium text-cream transition hover:bg-cocoa disabled:cursor-wait disabled:opacity-60"
                >
                  {sending ? t.sending : <>{t.send} <Send className="h-4 w-4" /></>}
                </button>
              </div>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const t = useT().footer;
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-10 text-center text-sm text-cocoa/70 lg:flex-row lg:text-left">
      <p className="flex flex-wrap items-center justify-center gap-1.5">
        <span className="font-serif text-lg italic text-ink">eulália</span>
        <Bow className="h-3 w-5" /> <span className="basis-full sm:basis-auto"><span className="hidden sm:inline">· </span>{t.tagline}</span>
      </p>
      <p className="font-hand text-2xl text-cocoa">{t.bye}</p>
      <p>© {new Date().getFullYear()} Eulália Rodrigues</p>
    </footer>
  );
}
