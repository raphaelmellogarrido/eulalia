import { Eye, Users, TrendingUp, Clock } from "lucide-react";
import { Reveal, SectionLabel, Instagram, Youtube } from "./Decor";
import { useEffect, useState } from "react";
import { ageData as fallbackAgeData } from "../data";
import { useT } from "../i18n";

// Planilha "Lia Gráficos" (colunas: chave | valor). Precisa estar compartilhada como
// "Qualquer pessoa com o link: Leitor" para o site conseguir ler.
const SHEET_ID = "1wGBdNlb3QMUjCi__JRUboHxaU6xy4lqC8u751YkMqF8";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

type SheetData = Record<string, string>;

const FALLBACK: SheetData = {
  monthly_reach: "142",
  core_audience: "87.4",
  ig_growth: "4.4",
  yt_watch_time: "219",
  ig_reach: "117.6",
  yt_views: "25.2",
};

function parseCsv(text: string): SheetData {
  const out: SheetData = {};
  for (const line of text.split(/\r?\n/)) {
    const cells = [...line.matchAll(/"((?:[^"]|"")*)"|([^,]+)/g)].map((m) => (m[1] ?? m[2] ?? "").replace(/""/g, "\"").trim());
    if (cells.length >= 2 && cells[0]) out[cells[0].toLowerCase()] = cells[1];
  }
  return out;
}

const toNum = (v: string | undefined) => {
  const n = parseFloat((v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
};

function useSheet() {
  const [data, setData] = useState<SheetData>(FALLBACK);
  useEffect(() => {
    fetch(SHEET_URL)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => setData((d) => ({ ...d, ...parseCsv(t) })))
      .catch(() => {});
  }, []);
  return data;
}

export function Stats() {
  const d = useSheet();
  const t = useT().stats;
  const cards = [
    { label: t.reach, value: `${d.monthly_reach}K+`, sub: t.reachSub, icon: Eye, tint: "bg-matcha-soft text-matcha-deep" },
    { label: t.core, value: `${d.core_audience}%`, sub: t.coreSub, icon: Users, tint: "bg-blush text-rose" },
    { label: t.igGrowth, value: `${d.ig_growth}%`, sub: t.igGrowthSub, icon: TrendingUp, tint: "bg-taro text-[#8c76a8]" },
    { label: t.ytWatch, value: `${d.yt_watch_time} ${t.hours}`, sub: t.ytWatchSub, icon: Clock, tint: "bg-[#f6ebcf] text-[#b78d2e]" },
  ];
  const ageKeys: Record<string, string> = { "13–17": "age_13_17", "18–24": "age_18_24", "25–34": "age_25_34", "35–44": "age_35_44", "45+": "age_45+" };
  const ageData = fallbackAgeData.map((a) => {
    const n = toNum(d[ageKeys[a.label]]);
    return { label: a.label, value: Number.isNaN(n) ? a.value : n };
  });
  const max = Math.max(...ageData.map((a) => a.value));
  const top = ageData.find((a) => a.value === max)!;
  return (
    <section id="stats" className="bg-milk/70 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <SectionLabel>{t.label}</SectionLabel>
          <h2 className="mt-4 font-serif text-[2rem] leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.title}<span className="italic text-rose">{t.titleEm}</span>
          </h2>
          <p className="mt-4 text-cocoa/80">{t.desc}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <div className="h-full rounded-3xl border border-nude bg-white p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/60">{c.label}</p>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${c.tint}`}>
                    <c.icon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 font-serif text-[1.45rem] min-[360px]:text-[1.7rem] font-semibold sm:mt-4 sm:text-3xl md:text-4xl">{c.value}</p>
                <p className="mt-1 text-sm text-cocoa/70">{c.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="h-full rounded-3xl border border-nude bg-white p-5 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-serif text-2xl">{t.ageTitle}</h3>
                <span className="rounded-full bg-matcha-soft px-3 py-1 text-xs font-semibold text-matcha-deep">{t.top}: {top.label} ({top.value}%)</span>
              </div>
              <div className="mt-6 flex h-48 items-end gap-2 sm:mt-8 sm:gap-3 md:gap-5">
                {ageData.map((a) => (
                  <div key={a.label} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-[11px] font-semibold text-cocoa sm:text-xs">{a.value}%</span>
                    <div
                      className={`w-full rounded-t-2xl ${a.value === max ? "bg-matcha" : "bg-nude"}`}
                      style={{ height: `${(a.value / max) * 140}px` }}
                    />
                    <span className="whitespace-nowrap text-[11px] text-cocoa/70 sm:text-xs">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid h-full gap-3 sm:gap-4">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-6 border border-nude">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush"><Instagram className="h-5 w-5 text-rose" /></span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/60">{t.igReach}</p>
                  <p className="font-serif text-3xl font-semibold text-matcha-deep">{d.ig_reach}K+</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-white p-6 border border-nude">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-milk"><Youtube className="h-5 w-5 text-rose" /></span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-cocoa/60">{t.ytViews}</p>
                  <p className="font-serif text-3xl font-semibold text-rose">{d.yt_views}K+</p>
                </div>
              </div>
              <div className="rounded-3xl bg-ink p-6 text-cream">
                <p className="font-hand text-2xl">{t.location}</p>
                <p className="mt-1 text-sm text-cream/70">{t.locationSub}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
