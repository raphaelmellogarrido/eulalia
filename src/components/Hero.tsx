import { useEffect, useState } from "react";
import { MapPin, Globe2, Menu, X, Play, BadgeCheck } from "lucide-react";
import { Bow, BobaCup, Sparkle } from "./Decor";
import { LangSwitch } from "./LangSwitch";
import { IMG } from "../data";
import { useT } from "../i18n";

export function Nav() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#stats", label: t.nav.audience },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_#e9d8c8]" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-1.5">
          <span className="font-serif text-2xl font-medium italic tracking-tight text-ink">eulália</span>
          <Bow className="h-4 w-6 -translate-y-2 transition group-hover:rotate-12" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cocoa/80 transition hover:text-ink">
              {l.label}
            </a>
          ))}
          <LangSwitch />
          <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-cocoa">
            {t.nav.collab}
          </a>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <LangSwitch />
          <button className="-mr-2 p-2" onClick={() => setOpen(!open)} aria-label={t.nav.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-4 mb-4 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 font-serif text-xl">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-ink py-3 text-center text-cream">
            {t.nav.collab}
          </a>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  const t = useT().hero;
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full bg-matcha-soft blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-nude bg-white/70 px-3.5 py-1.5 shadow-sm sm:px-4 sm:py-2">
            <span className="font-hand text-xl leading-none text-cocoa sm:text-2xl">{t.greeting}</span>
            <span className="text-lg">🧋</span>
          </div>

          <h1 className="font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
            {t.title1}
            <br />
            <span className="italic text-matcha-deep">{t.title2}</span>
            <br />
            {t.title3} <span className="relative inline-block">
              {t.title4}
              <Bow className="absolute -right-8 -top-3 h-6 w-9 rotate-12 sm:-right-10 sm:h-7 sm:w-10" />
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed sm:mt-7 sm:text-lg text-cocoa/85">
            {t.introBefore} <strong className="font-semibold text-ink">Eulália</strong>{t.introMiddle}
            <em className="font-serif">{t.introEm}</em>{t.introAfter}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[13px] sm:mt-7 sm:gap-2.5 sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-rose" /> {t.based}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-sm">
              <Globe2 className="h-4 w-4 text-matcha-deep" /> {t.creating}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-sm">
              {t.languages}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[370px]:grid-cols-2 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#work" className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-3 py-3.5 text-[15px] font-medium sm:px-7 sm:py-4 sm:text-base text-cream shadow-lg shadow-cocoa/20 transition hover:-translate-y-0.5">
              <Play className="h-4 w-4 shrink-0 fill-cream" /> {t.seeContent}
            </a>
            <a href="#contact" className="whitespace-nowrap rounded-full border border-ink/15 bg-white/60 px-3 py-3.5 text-center text-[15px] font-medium sm:px-7 sm:py-4 sm:text-base text-ink transition hover:bg-white">
              {t.workWithMe}
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md px-3 sm:px-0">
          <div className="relative rotate-2 rounded-[2rem] bg-white p-3 pb-14 sm:pb-16 shadow-2xl shadow-cocoa/15">
            <img src={`${IMG}lia1.jpeg`} alt={t.imgAlt} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
            <p className="absolute bottom-3.5 left-0 right-0 px-3 text-center font-hand text-lg leading-tight text-cocoa min-[360px]:text-2xl sm:bottom-4 sm:text-3xl">{t.caption}</p>
            <Bow className="absolute -top-5 left-1/2 h-10 w-16 -translate-x-1/2" color="#e7b8b4" />
          </div>

          <div className="floaty absolute -left-1 top-10 rounded-2xl bg-white/95 px-3 py-2.5 sm:-left-8 sm:top-16 sm:px-4 sm:py-3 shadow-xl" style={{ ["--r" as string]: "-6deg" }}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <BadgeCheck className="h-5 w-5 text-matcha-deep" /> {t.tested}
            </div>
            <p className="text-xs text-cocoa/70">{t.testedSub}</p>
          </div>

          <div className="floaty absolute -right-1 top-1/2 rounded-2xl bg-matcha-soft px-3 py-2.5 sm:-right-4 sm:px-4 sm:py-3 shadow-xl [animation-delay:1.5s]" style={{ ["--r" as string]: "5deg" }}>
            <p className="font-serif text-xl font-semibold text-matcha-deep sm:text-2xl">+142K</p>
            <p className="text-xs text-cocoa/70">{t.reach}</p>
          </div>

          <BobaCup className="floaty absolute -bottom-6 -left-4 hidden h-28 w-20 sm:block [animation-delay:.8s]" />
          <Sparkle className="absolute -right-2 top-4 h-6 w-6 text-latte" />
          <Sparkle className="absolute right-10 -bottom-4 h-4 w-4 text-rose" />
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = useT().marquee;
  const row = [...items, ...items];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-nude bg-milk py-4">
      <div className="marquee flex w-max gap-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 font-serif text-xl italic text-cocoa sm:text-2xl">
            {t} <span className="text-base not-italic">{i % 3 === 0 ? "🧋" : i % 3 === 1 ? "🎀" : "🍵"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
