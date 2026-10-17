import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Section, { Card, Chip } from "./Section";
import { skillCategories } from "../data";

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedFilter === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedFilter);

  return (
    <Section
      id="skills"
      badge="Technical Stack"
      title="Skills & Technologies"
      subtitle="Hands-on competencies in full-stack architecture, database design, and algorithmic problem-solving."
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all backdrop-blur-md ${
              selectedFilter === cat
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105"
                : "border border-slate-200/80 bg-white/70 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Layers;

            return (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    {/* Header with Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-600 border border-indigo-500/30 dark:text-indigo-400 dark:border-indigo-400/30">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                          {cat.category}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-lg border border-slate-200/90 bg-white/60 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>{cat.skills.length} competencies</span>
                    <span className="text-emerald-500 flex items-center gap-1 font-medium">
                      <CheckCircle size={12} /> Active proficiency
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Skill Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 glass-panel rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-950/20"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Continuous Improvement & System Design
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Actively preparing for technical interviews, exploring microservices, and solving daily algorithmic challenges.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-500"
        >
          Discuss Tech Stack
        </a>
      </motion.div>
    </Section>
  );
}
