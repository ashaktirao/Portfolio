import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FresherStrengths from "./components/FresherStrengths";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { ArrowUp, Heart, Code2, Sparkles } from "lucide-react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

export default function App() {
  const [theme, toggle] = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Ambient Background Orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left Indigo / Purple Glow */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-400/30 via-purple-400/25 to-pink-400/20 blur-[130px] dark:from-indigo-600/25 dark:to-purple-600/15 animate-blob" />

        {/* Top-right Cyan / Sky Glow */}
        <div className="absolute top-1/6 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-cyan-400/30 via-sky-300/25 to-indigo-300/20 blur-[140px] dark:from-cyan-500/20 dark:to-blue-600/15 animate-blob [animation-delay:2s]" />

        {/* Center-right Amber / Peach Glow (Warm & Playful in Light Mode) */}
        <div className="absolute top-1/2 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-300/25 via-rose-300/20 to-purple-300/15 blur-[120px] dark:from-amber-600/10 dark:to-purple-600/10 animate-blob [animation-delay:3.5s]" />

        {/* Center-bottom Fuchsia / Violet Glow */}
        <div className="absolute top-2/3 -left-20 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-fuchsia-400/25 via-pink-400/20 to-indigo-400/20 blur-[130px] dark:from-fuchsia-600/15 dark:to-indigo-600/20 animate-blob [animation-delay:5s]" />

        {/* Cyber dot grid overlay */}
        <div className="absolute inset-0 bg-grid-dot opacity-60 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
      </div>

      {/* Floating Glassmorphic Navigation */}
      <Navbar theme={theme} toggle={toggle} />

      {/* Main Sections */}
      <main id="top">
        <Hero />
        <FresherStrengths />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200/80 bg-white/40 py-10 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-slate-800 dark:text-slate-200">
              A Shakti Rao
            </span>
            <span>•</span>
            <span>MCA 2027 • Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Designed & built with</span>
            <Heart size={13} className="text-rose-500 fill-rose-500 inline" />
            <span>using React, Tailwind & Framer Motion</span>
          </div>

          <div>
            © {new Date().getFullYear()} • All rights reserved
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-indigo-600/90 text-white shadow-xl shadow-indigo-600/30 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-indigo-600 active:scale-95"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
