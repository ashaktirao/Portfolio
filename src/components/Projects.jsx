import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Section, { Card, Chip } from "./Section";
import { projects } from "../data";

function ProjectCard({ project: p, index: i }) {
  const [expanded, setExpanded] = useState(false);

  // Show first 3 points initially, reveal remaining when expanded
  const initialPoints = p.points.slice(0, 3);
  const hiddenPoints = p.points.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="flex"
    >
      <Card className="flex w-full flex-col justify-between overflow-hidden p-0 sm:p-0 border border-slate-200/90 dark:border-white/10 hover:shadow-xl transition-all">
        {/* Compact Window Header */}
        <div className="flex items-center justify-between border-b border-slate-200/70 bg-slate-100/60 px-4 sm:px-5 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-500/80" />
            <span className="h-2 w-2 rounded-full bg-amber-500/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {p.title.toLowerCase().replace(/\s+/g, "-")}.app
            </span>
          </div>

          <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-300 border border-indigo-500/20">
            {p.statusBadge || p.tag}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Title & Subtitle */}
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {p.title}
              </h3>
            </div>

            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {p.subtitle}
            </p>

            {/* Quick Metrics Chips */}
            {p.metrics && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="inline-flex items-center gap-1 rounded-md bg-slate-100/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-300 border border-slate-200/50 dark:border-white/5"
                  >
                    <span className="h-1 w-1 rounded-full bg-indigo-500" />
                    {m}
                  </span>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mt-3 flex flex-wrap gap-1">
              {p.stack.map((s) => (
                <Chip key={s} variant="default" className="text-[11px] px-2 py-0.5">
                  {s}
                </Chip>
              ))}
            </div>

            {/* Key Architectural Decisions (Compact List) */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Key Architecture & Features
              </h4>

              <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-snug">
                {initialPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-400"
                    />
                    <span>{point}</span>
                  </li>
                ))}

                {/* Hidden points revealed on click */}
                <AnimatePresence>
                  {expanded &&
                    hiddenPoints.map((point, idx) => (
                      <motion.li
                        key={`hidden-${idx}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-2 pt-0.5"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-indigo-500 dark:text-indigo-400"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>

              {/* Expand / Collapse Button */}
              {hiddenPoints.length > 0 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {expanded ? (
                    <>
                      Show less <ChevronUp size={13} />
                    </>
                  ) : (
                    <>
                      +{hiddenPoints.length} more details <ChevronDown size={13} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2.5">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-105"
              >
                <ExternalLink size={13} /> Live demo
              </a>
            )}
            <a
              href={p.git}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-indigo-500 hover:text-indigo-600 hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
            >
              <Github size={13} /> Source code
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      badge="Production Projects"
      title="Featured Engineering Work"
      subtitle="Full-stack applications built from database architecture to frontend state management and deployment."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
