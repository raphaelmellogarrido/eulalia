import { useEffect } from "react";
import { Nav, Hero, Marquee } from "./components/Hero";
import { About, Niches, Services, TechSpotlight, Signature } from "./components/Sections";
import { Work } from "./components/Work";
import { Stats } from "./components/Stats";
import { Collab, Contact, Footer } from "./components/Contact";

export default function App() {
  // Rolagem suave para âncoras internas sem adicionar "#..." na URL
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      e.preventDefault();
      const id = link.getAttribute("href")!.slice(1);
      if (!id || id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="grain min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Niches />
        <Services />
        <TechSpotlight />
        <Work />
        <Stats />
        <Signature />
        <Collab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
