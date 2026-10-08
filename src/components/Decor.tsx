import { useEffect, useRef, useState, type ReactNode } from "react";

export function Bow({ className = "", color = "#d99a9a" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" aria-hidden>
      <path d="M32 20 C22 6, 6 4, 5 14 C4 24, 20 26, 32 20Z" fill={color} opacity=".9" />
      <path d="M32 20 C42 6, 58 4, 59 14 C60 24, 44 26, 32 20Z" fill={color} opacity=".9" />
      <path d="M30 21 L22 38 L27 36 L30 39 L32 22Z" fill={color} opacity=".75" />
      <path d="M34 21 L42 38 L37 36 L34 39 L32 22Z" fill={color} opacity=".75" />
      <ellipse cx="32" cy="20" rx="5" ry="5.5" fill={color} />
      <path d="M12 12 C16 10, 22 12, 26 17" stroke="#fff" strokeOpacity=".45" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M52 12 C48 10, 42 12, 38 17" stroke="#fff" strokeOpacity=".45" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function BobaCup({ className = "", tea = "#b9c9a3" }: { className?: string; tea?: string }) {
  return (
    <svg viewBox="0 0 60 90" className={className} fill="none" aria-hidden>
      <rect x="33" y="0" width="5" height="30" rx="2.5" transform="rotate(12 35 15)" fill="#d99a9a" />
      <path d="M8 22 H52 L46 84 C45.6 87 43.5 89 40.5 89 H19.5 C16.5 89 14.4 87 14 84Z" fill="#fff" fillOpacity=".7" stroke="#5b4336" strokeOpacity=".25" />
      <path d="M11 34 H49 L45 84 C44.7 86 43 87.5 41 87.5 H19 C17 87.5 15.3 86 15 84Z" fill={tea} />
      {[
        [20, 78], [27, 81], [34, 79], [41, 77], [23, 71], [31, 73], [38, 70],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.2" fill="#4a3328" />
      ))}
      <rect x="5" y="18" width="50" height="6" rx="3" fill="#f5ece2" stroke="#5b4336" strokeOpacity=".25" />
    </svg>
  );
}

export function MatchaBowl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 50" className={className} fill="none" aria-hidden>
      <ellipse cx="40" cy="14" rx="34" ry="8" fill="#b9c9a3" />
      <ellipse cx="40" cy="14" rx="26" ry="5" fill="#cfdcbb" />
      <path d="M6 14 C8 40, 72 40, 74 14" fill="#f5ece2" stroke="#5b4336" strokeOpacity=".2" />
      <rect x="30" y="38" width="20" height="5" rx="2" fill="#e9d8c8" />
    </svg>
  );
}

export function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </svg>
  );
}

export function Youtube({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5 L15 12 L10 14.5Z" fill="currentColor" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 0 C13 8, 16 11, 24 12 C16 13, 13 16, 12 24 C11 16, 8 13, 0 12 C8 11, 11 8, 12 0Z" fill="currentColor" />
    </svg>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-matcha-deep">
      <Bow className="h-3.5 w-5" color="#b9c9a3" />
      {children}
    </div>
  );
}
