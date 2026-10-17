import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Download,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { LINKS } from "../data";

export default function Hero() {
  const [activeCommand, setActiveCommand] = useState("summary");
  const [copied, setCopied] = useState(false);

  const commands = {
    summary: {
      cmd: "shakti --summary",
      output: [
        { label: "🚀 Developer", val: "A Shakti Rao (MCA Full-Stack Engineer)", color: "text-emerald-400" },
        { label: "🎓 Education", val: "MCA (2025–2027) • Lovely Professional University", color: "text-sky-300" },
        { label: "💻 Core Stack", val: "React.js, Node.js, Express.js, MongoDB, Docker, TypeScript", color: "text-indigo-300" },
        { label: "🧩 LeetCode", val: "107+ Problems Solved (Arrays, Strings, Recursion, Binary Search)", color: "text-amber-300" },
        { label: "🔒 Architecture", val: "Dual-Token JWT Refresh, Zod Validation, Compound DB Indexing", color: "text-purple-300" },
        { label: "⚡ Status", val: "Available for Software Engineering Roles & Internships", color: "text-emerald-400" },
      ],
    },
    skills: {
      cmd: "cat skills.txt",
      output: [
        { label: "⚡ Languages", val: "JavaScript (ES6+), TypeScript, Core Java, SQL", color: "text-amber-300" },
        { label: "🎨 Frontend", val: "React.js, Vite, Tailwind CSS, TanStack React Query, shadcn/ui", color: "text-sky-300" },
        { label: "🛠️ Backend", val: "Node.js, Express.js, REST API Design, JWT, bcrypt, Zod, Multer", color: "text-emerald-400" },
        { label: "🍃 Database", val: "MongoDB, Mongoose, PostgreSQL, TTL & Compound Indexes", color: "text-green-300" },
        { label: "🐳 DevOps", val: "Docker, Docker Compose, Git, GitHub, Postman, Vercel", color: "text-blue-300" },
      ],
    },
    leetcode: {
      cmd: "leetcode --stats --user=ashaktirao",
      output: [
        { label: "👤 Handle", val: "@ashaktirao (leetcode.com/u/ashaktirao/)", color: "text-amber-400" },
        { label: "🎯 Solved", val: "107+ Algorithmic Challenges (Consistent Daily Practice)", color: "text-emerald-400" },
        { label: "📚 Mastered", val: "Arrays, Strings, Recursion, Binary Search, Linked Lists", color: "text-sky-300" },
        { label: "💡 Focus", val: "Optimal Time & Space Complexity (Big-O Optimization)", color: "text-purple-300" },
      ],
    },
    contact: {
      cmd: "contact --get-links",
      output: [
        { label: "📧 Email", val: "ashaktirao@gmail.com", color: "text-emerald-400" },
        { label: "🐙 GitHub", val: "https://github.com/ashaktirao", color: "text-sky-300" },
        { label: "💼 LinkedIn", val: "https://www.linkedin.com/in/ashaktirao", color: "text-indigo-300" },
        { label: "📍 Location", val: "India (Open to Remote & On-site relocation)", color: "text-amber-300" },
      ],
    },
  };

  const curr = commands[activeCommand];

  const handleCopy = () => {
    const textToCopy = curr.output.map((line) => `${line.label}: ${line.val}`).join("\n");
    navigator.clipboard.writeText(`$ ${curr.cmd}\n${textToCopy}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="about" className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24">
      {/* Top Header Content */}
      <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Shakti's Profile Photo with Glowing Glass Halo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-4 sm:mb-5"
        >
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70 animate-pulse-slow" />
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full p-1 bg-white/90 dark:bg-slate-900/90 shadow-2xl ring-2 ring-indigo-500/40">
            <img
              src="/shakti.jpg"
              alt="A Shakti Rao"
              className="h-full w-full rounded-full object-cover object-center shadow-inner"
            />
            {/* Online Ping Beacon */}
            <span className="absolute bottom-1 right-1 sm:right-1.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
            </span>
          </div>
        </motion.div>

        {/* Playful Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-indigo-200/80 bg-white/90 px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-bold text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300"
        >
          <span className="text-xs sm:text-sm">👋</span>
          <span>Hi, I'm A Shakti Rao • MCA (2025–2027)</span>
        </motion.div>

        {/* Grand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 sm:mt-6 font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
        >
          Building{" "}
          <span className="gradient-text-primary">production-grade</span>{" "}
          web applications.
        </motion.h1>

        {/* Clear, Readable Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto"
        >
          MCA student at Lovely Professional University. I architect full-stack applications with{" "}
          <strong className="text-slate-900 dark:text-white font-semibold">React, Node.js, Express, and MongoDB</strong>,
          focusing on secure REST APIs, clean database indexing, and 107+ solved DSA problems on LeetCode.
        </motion.p>

        {/* Call to Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:shadow-indigo-500/40 active:scale-95"
          >
            Explore Projects <ArrowDown size={14} />
          </a>

          {/* Download Resume Button */}
          <a
            href={LINKS.resume}
            download="A_Shakti_Rao_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-indigo-200/90 bg-white/90 px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50/50 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-indigo-400"
          >
            <Download size={14} className="text-indigo-500 dark:text-indigo-400" />
            Download Resume
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200/80 bg-white/70 px-3.5 sm:px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:border-slate-400 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            <Mail size={14} className="text-slate-500 dark:text-slate-400" />
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 pt-1 sm:pt-0">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
            >
              <Github size={16} />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              title="LeetCode (107+ DSA Solved)"
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-amber-600 shadow-sm transition-all hover:scale-110 hover:border-amber-400 hover:text-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-amber-400 dark:hover:border-amber-400 dark:hover:text-amber-300"
            >
              <Code2 size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Developer Terminal (100% Mobile Responsive - No Internal Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 sm:mt-14 relative"
      >
        {/* Glow ambient background */}
        <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-cyan-500/20 blur-xl opacity-75 dark:opacity-50 pointer-events-none" />

        {/* Terminal Window Frame */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-300/80 bg-[#0d111d] text-slate-200 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#090d16]">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3.5 sm:px-5 py-2.5 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5 truncate">
                <Terminal size={13} className="text-indigo-400 shrink-0" />
                <span className="hidden sm:inline">shakti@devbox:</span>
                <span>~/portfolio</span>
              </span>
            </div>

            {/* Quick Copy Terminal Output Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] sm:text-xs font-mono text-slate-300 transition hover:bg-white/10 hover:text-white shrink-0"
              title="Copy terminal output"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-[10px] sm:text-[11px] text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span className="text-[10px] sm:text-[11px]">Copy Output</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Command Pills */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/5 bg-black/25 px-3.5 sm:px-5 py-2 text-xs font-mono">
            <span className="text-slate-400 text-[10px] sm:text-[11px] font-sans font-medium mr-0.5 hidden sm:inline">
              Run:
            </span>
            {[
              { id: "summary", label: "shakti --summary" },
              { id: "skills", label: "cat skills.txt" },
              { id: "leetcode", label: "leetcode --stats" },
              { id: "contact", label: "contact --links" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveCommand(btn.id)}
                className={`rounded-md px-2 py-1 text-[10px] sm:text-[11px] transition-all whitespace-nowrap ${
                  activeCommand === btn.id
                    ? "bg-indigo-600 text-white font-semibold shadow-sm"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                $ {btn.label}
              </button>
            ))}
          </div>

          {/* Terminal Screen Body - NO internal scroll, 100% responsive fluid wrap */}
          <div className="p-3.5 sm:p-5 md:p-6 font-mono text-[11px] sm:text-xs md:text-[13px] leading-relaxed w-full">
            {/* Command Line Prompt */}
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="text-indigo-400 font-bold">$</span>
              <span className="text-white font-semibold break-all">{curr.cmd}</span>
            </div>

            {/* Terminal Output - wraps naturally on any screen size */}
            <div className="mt-3 sm:mt-4 space-y-2 border-l-2 border-indigo-500/30 pl-3 sm:pl-4 py-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCommand}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  {curr.output.map((line, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2.5 break-words">
                      <span className="font-bold text-slate-300 shrink-0 sm:min-w-[130px]">
                        {line.label}:
                      </span>
                      <span className={`${line.color} font-medium break-words`}>
                        {line.val}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom session status bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-slate-400 pt-2 border-t border-white/5 text-[10px] sm:text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Session: Active (HTTP/2)</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Node.js v20 • React 18</span>
                <span className="inline-block h-3 w-1.5 bg-indigo-400 animate-pulse ml-1 align-middle" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
