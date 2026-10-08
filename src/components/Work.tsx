import { useEffect, useState } from "react";
import { Play, X, Check, Volume2, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionLabel, Bow } from "./Decor";
import { works } from "../data";
import { useT } from "../i18n";

function Gallery({ images, alt, imgClassName }: { images: string[]; alt: string; imgClassName: string }) {
  const tw = useT().work;
  const [idx, setIdx] = useState(0);
  const go = (e: React.MouseEvent | React.KeyboardEvent, dir: number) => {
    e.stopPropagation();
    e.preventDefault();
    setIdx((i) => (i + dir + images.length) % images.length);
  };
  const arrow = (dir: number, side: string, Icon: typeof ChevronLeft, label: string) => (
    <span
      role="button"
      tabIndex={0}
      aria-label={label}
      onClick={(e) => go(e, dir)}
      onMouseDown={(e) => e.preventDefault()}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go(e, dir)}
      className={`absolute ${side} top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-ink shadow backdrop-blur transition hover:bg-white sm:h-9 sm:w-9`}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
    </span>
  );

  return (
    <div className="relative h-full w-full select-none overflow-hidden [-webkit-tap-highlight-color:transparent]">
      <div className="flex h-full transition-transform duration-500 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
        {images.map((src, i) => (
          <img key={src} src={src} alt={`${alt} ${i + 1}`} loading="lazy" draggable={false} className={`shrink-0 ${imgClassName}`} />
        ))}
      </div>
      {arrow(-1, "left-2", ChevronLeft, tw.prevPhoto)}
      {arrow(1, "right-2", ChevronRight, tw.nextPhoto)}
      <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
        {images.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-4 bg-white" : "w-1.5 bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}

const cats = ["All", "Beauty", "Tech", "Unboxing", "Fashion", "Mom life"] as const;

export function Work() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [activeId, setActiveId] = useState<number | null>(null);
  const t = useT().work;
  // merge media (data.ts) with the texts of the current language
  const all = works.map((w) => ({ ...w, ...t.items[w.id] }));
  const active = all.find((w) => w.id === activeId) ?? null;
  const setActive = (w: { id: number } | null) => setActiveId(w ? w.id : null);
  const list = filter === "All" ? all : all.filter((w) => w.cat === filter);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2 className="mt-4 font-serif text-[2rem] leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.title}<span className="italic text-matcha-deep">{t.titleEm}</span>
            </h2>
            <p className="mt-3 max-w-md text-cocoa/75">{t.desc}</p>
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${filter === c ? "bg-ink text-cream" : "border border-nude bg-white text-cocoa hover:border-latte"}`}
              >
                {t.cats[c]}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3 lg:gap-6">
          {list.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 90}>
              <button onClick={() => setActive(w)} className="group relative block w-full overflow-hidden rounded-[1.25rem] bg-nude text-left shadow-md sm:rounded-[1.75rem] transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cocoa/20">
                {w.video ? (
                  <video
                    src={w.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={w.title}
                    className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : w.gallery ? (
                  <div className="aspect-[9/16] w-full">
                    <Gallery images={w.gallery} alt={w.title} imgClassName="h-full w-full object-cover" />
                  </div>
                ) : (
                  <img src={w.img} alt={w.title} className="aspect-[9/16] w-full object-cover transition duration-700 group-hover:scale-105" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
                <div className="absolute left-2 right-2 top-2 flex items-start justify-between gap-1 sm:left-3 sm:right-3 sm:top-3">
                  <span className="min-w-0 truncate rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-cocoa backdrop-blur sm:px-3 sm:py-1 sm:text-[11px]">{w.type}</span>
                  <span className="shrink-0 rounded-full bg-ink/40 px-2 py-0.5 text-[10px] text-white backdrop-blur sm:py-1 sm:text-[11px]">{w.length}</span>
                </div>
                {!w.gallery && (
                  <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Play className="ml-0.5 h-5 w-5 fill-ink text-ink" />
                  </div>
                )}
                <div className={`pointer-events-none absolute left-0 right-0 p-3 sm:p-4 ${w.gallery ? "bottom-4" : "bottom-0"}`}>
                  <p className="inline rounded-md bg-white px-1.5 py-0.5 text-[11.5px] font-semibold leading-relaxed text-ink sm:text-[13px] [box-decoration-break:clone]">
                    {w.hook}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-white/90 sm:mt-2 sm:text-sm">{w.title}</p>
                </div>
                <div className="absolute bottom-20 right-3 hidden flex-col items-center gap-3 text-white md:flex">
                  <Heart className="h-5 w-5" />
                  {!w.gallery && <Volume2 className="h-5 w-5" />}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={() => setActive(null)}>
          <div className="relative grid max-h-[90dvh] w-full max-w-3xl overflow-auto rounded-t-[2rem] bg-cream sm:rounded-[2rem] shadow-2xl md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            {active.video ? (
              <video
                src={active.video}
                controls
                autoPlay
                playsInline
                className="h-60 w-full bg-black object-contain sm:h-72 md:h-full"
              />
            ) : active.gallery ? (
              <div className="h-80 w-full bg-black sm:h-96 md:h-full md:min-h-[28rem]">
                <Gallery images={active.gallery} alt={active.title} imgClassName="h-full w-full object-contain" />
              </div>
            ) : (
              <img src={active.img} alt={active.title} className="h-60 w-full object-cover sm:h-72 md:h-full" />
            )}
            <div className="relative p-6 sm:p-7 md:p-9">
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 rounded-full bg-white p-2 shadow" aria-label={t.close}>
                <X className="h-4 w-4" />
              </button>
              <Bow className="h-6 w-9" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-matcha-deep">{active.type}</p>
              <h3 className="mt-2 font-serif text-3xl">{active.title}</h3>
              <p className="mt-3 font-hand text-2xl text-cocoa">"{active.hook}"</p>
              <p className="mt-4 text-sm leading-relaxed text-cocoa/80">{active.details}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-cocoa/60">{t.deliverables}</p>
              <ul className="mt-3 space-y-2">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-matcha-soft">
                      <Check className="h-3 w-3 text-matcha-deep" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setActive(null)} className="mt-8 block rounded-full bg-ink px-6 py-3 text-center text-sm text-cream sm:inline-block">
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
