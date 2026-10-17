import { useState } from "react";
import { Moon, Sun, Menu, X, Terminal, Download } from "lucide-react";
import { LINKS } from "../data";

const links = [
  ["About", "#about"],
  ["Highlights", "#highlights"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, toggle }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 px-5 backdrop-blur-xl shadow-lg shadow-black/[0.03] transition-all dark:border-white/10 dark:bg-[#0d111d]/80 dark:shadow-black/20">
        {/* Brand with Shakti's Photo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src="/shakti.jpg"
            alt="A Shakti Rao"
            className="h-9 w-9 rounded-xl object-cover object-center ring-2 ring-indigo-500/40 shadow-sm transition group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
              A Shakti Rao
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              MCA Full-Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-3 py-1.5 transition-all hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Resume Download Button */}
          <a
            href={LINKS.resume}
            download="A_Shakti_Rao_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 active:scale-95 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white"
          >
            <Download size={14} /> Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            {dark ? <Sun size={17} className="transition-transform hover:rotate-45" /> : <Moon size={17} className="transition-transform hover:-rotate-12" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-slate-200/80 bg-white/95 p-4 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-[#0d111d]/95 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/10">
              <a
                href={LINKS.resume}
                download="A_Shakti_Rao_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
