import { LANGS, useLang } from "../i18n";

/** Segmented EN | PT | FR toggle with a sliding pill behind the active language. */
export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const idx = LANGS.indexOf(lang);

  return (
    <div
      role="radiogroup"
      aria-label={t.langSwitch.label}
      className={`relative inline-flex shrink-0 rounded-full border border-nude bg-white/70 p-1 shadow-sm backdrop-blur ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-1 top-1 w-9 rounded-full bg-ink shadow-md transition-transform duration-300 ease-[cubic-bezier(.4,1.3,.6,1)]"
        style={{ transform: `translateX(${idx * 100}%)` }}
      />
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={active}
            title={t.langSwitch.names[l]}
            lang={l}
            onClick={() => setLang(l)}
            className={`relative z-10 w-9 rounded-full py-1.5 text-[11px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
              active ? "text-cream" : "text-cocoa/60 hover:text-ink"
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
