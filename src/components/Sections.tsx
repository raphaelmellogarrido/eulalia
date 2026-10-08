import { ShoppingBag, PackageOpen, FlaskConical, MessageCircleHeart } from "lucide-react";
import { Bow, MatchaBowl, Reveal, SectionLabel, Sparkle } from "./Decor";
import { serviceEmojis, nicheColors, techEmojis, IMG } from "../data";
import { useT } from "../i18n";

const stepIcons = [ShoppingBag, PackageOpen, FlaskConical, MessageCircleHeart];

export function About() {
  const t = useT().about;
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img src={`${IMG}lia_levi_banho.jpeg`} alt={t.imgAlt1} className="mt-10 aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-lg" />
            <img src={`${IMG}roupa.jpeg`} alt={t.imgAlt2} className="aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-lg" />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-white px-4 py-2.5 text-center shadow-xl sm:px-5 sm:py-3">
            <span className="font-hand text-xl text-cocoa sm:text-2xl">{t.badge}</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.title}<span className="italic text-rose">{t.titleEm}</span>
          </h2>
          <div className="mt-6 space-y-4 text-cocoa/85 leading-relaxed">
            <p>
              {t.p1Before}{" "}
              <span className="font-hand text-2xl text-ink">{t.p1Quote}</span>{t.p1After}
            </p>
            <p>
              {t.p2Before}<strong className="text-ink">{t.p2Strong}</strong>{t.p2After}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {t.steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={i} className="relative rounded-2xl border border-nude bg-white/70 p-3.5 sm:p-4">
                  <span className="absolute right-3 top-2 font-serif text-sm italic text-latte">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-matcha-deep" />
                  <p className="mt-3 text-sm font-semibold">{s.title}</p>
                  <p className="mt-1 text-xs leading-snug text-cocoa/70">{s.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Niches() {
  const t = useT().niches;
  return (
    <section className="pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="rounded-[2rem] border border-nude bg-white/60 p-5 sm:p-6 md:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>{t.label}</SectionLabel>
              <h3 className="mt-3 font-serif text-[1.7rem] leading-tight sm:text-3xl md:text-4xl">{t.title}</h3>
            </div>
            <p className="max-w-sm text-sm text-cocoa/75">{t.desc}</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {t.items.map((n, i) => (
              <div key={i} className={`${nicheColors[i]} group rounded-3xl p-4 transition sm:p-5 hover:-translate-y-1 hover:shadow-lg`}>
                <p className="font-serif text-sm italic text-cocoa/60">0{i + 1}</p>
                <p className="mt-4 font-serif text-base leading-tight min-[360px]:text-xl sm:mt-6 sm:text-2xl">{n.name}</p>
                <p className="mt-1 text-xs text-cocoa/70">{n.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const t = useT().services;
  return (
    <section id="services" className="relative py-20 md:py-32">
      <div className="dotted-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.title}<span className="italic text-matcha-deep">{t.titleEm}</span>
          </h2>
          <p className="mt-4 text-cocoa/80">{t.desc}</p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {t.items.map((s, i) => (
            <Reveal key={i} delay={(i % 5) * 70}>
              <div className="group relative flex h-full gap-4 overflow-hidden rounded-3xl border border-nude bg-white p-4 transition sm:block sm:p-6 hover:-translate-y-1 hover:border-latte hover:shadow-xl hover:shadow-cocoa/10">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-milk text-xl transition sm:h-12 sm:w-12 sm:text-2xl group-hover:rotate-6 group-hover:bg-matcha-soft">
                  {serviceEmojis[i]}
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-tight sm:mt-5 sm:text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cocoa/75 sm:mt-2">{s.desc}</p>
                </div>
                <Bow className="absolute -right-3 -top-2 h-6 w-9 rotate-12 opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechSpotlight() {
  const t = useT().tech;
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-taro/70 lg:grid lg:grid-cols-2">
          <div className="relative p-6 sm:p-8 lg:p-14">
            <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cocoa">{t.badge}</span>
            <h2 className="mt-5 font-serif text-[2rem] leading-tight sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-5 max-w-md text-cocoa/80">
              {t.desc}
            </p>
            <ul className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {t.items.map((label, i) => (
                <li key={i} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5 text-sm sm:py-3">
                  <span className="shrink-0 text-base leading-none" aria-hidden="true">{techEmojis[i]}</span> {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[280px] sm:min-h-[360px]">
            <img src={`${IMG}lia_makeup.jpeg`} alt={t.imgAlt} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-2.5 sm:bottom-6 sm:left-6 sm:right-auto sm:py-3 shadow-lg backdrop-blur">
              <p className="font-hand text-xl text-cocoa sm:text-2xl">{t.caption}</p>
            </div>
            <Sparkle className="absolute right-8 top-8 h-8 w-8 text-white" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Signature() {
  const t = useT().signature;
  return (
    <section className="py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <MatchaBowl className="mx-auto h-12 w-20" />
        <p className="mt-6 font-serif text-[1.65rem] leading-snug sm:text-3xl md:text-4xl">
          {t.before}<span className="italic text-rose">{t.em}</span>{t.after}
        </p>
        <p className="mt-5 font-hand text-2xl text-cocoa sm:text-3xl">{t.sign}</p>
      </Reveal>
    </section>
  );
}
