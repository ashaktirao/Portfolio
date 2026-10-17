import { motion } from "framer-motion";
import { GraduationCap, Award, Code, CheckCircle, Calendar, MapPin, BookOpen, ExternalLink, Cpu } from "lucide-react";
import Section, { Card } from "./Section";
import { education, certs, academicCompetencies, LINKS } from "../data";

export default function Education() {
  return (
    <Section
      id="education"
      badge="Academics & Credentials"
      title="Education & Problem Solving"
      subtitle="Computer Science foundations, continuous algorithmic practice, and verified certifications."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left 7 cols: Education Journey */}
        <div className="space-y-5 lg:col-span-7">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={20} />
            Academic Degrees
          </h3>

          <div className="space-y-4">
            {education.map((e, idx) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="relative overflow-hidden border-l-4 border-l-indigo-600 dark:border-l-indigo-500">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {e.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Calendar size={12} /> {e.period}
                    </span>
                  </div>

                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <MapPin size={13} className="text-indigo-500" /> {e.place}
                  </p>

                  {e.specialization && (
                    <div className="mt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {e.specialization}
                    </div>
                  )}

                  <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50/80 p-3 text-xs leading-relaxed text-slate-600 dark:bg-white/5 dark:text-slate-300 border border-slate-200/50 dark:border-white/5">
                    <BookOpen size={15} className="mt-0.5 shrink-0 text-slate-400" />
                    <span>
                      <strong className="text-slate-800 dark:text-slate-200">Relevant Coursework: </strong>
                      {e.coursework || e.text}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right 5 cols: LeetCode & Certifications */}
        <div className="space-y-5 lg:col-span-5">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="text-indigo-600 dark:text-indigo-400" size={20} />
            LeetCode & Certifications
          </h3>

          {/* LeetCode Spotlight Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-amber-500/5 via-indigo-500/5 to-purple-500/5 border-amber-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    <Code size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      LeetCode DSA Practice
                    </h4>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      107+ Problems Solved
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Consistently solving algorithmic challenges focusing on optimal space & time
                complexity across:
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Arrays", "Strings", "Recursion", "Binary Search", "Linked Lists"].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md border border-slate-200/80 bg-white/70 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <a
                  href={LINKS.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 transition hover:underline"
                >
                  View LeetCode Profile (@ashaktirao) <ExternalLink size={13} />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Certifications List */}
          <div className="space-y-2.5">
            {certs.map((c, i) => (
              <motion.div
                key={typeof c === "string" ? c : c.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div className="glass-panel flex items-center justify-between rounded-xl p-3.5 transition-all hover:border-indigo-400/40">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {typeof c === "string" ? c : c.title}
                      </div>
                      {typeof c !== "string" && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {c.issuer}
                        </div>
                      )}
                    </div>
                  </div>
                  {typeof c !== "string" && c.date && (
                    <span className="shrink-0 text-[11px] font-medium text-slate-400">
                      {c.date}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Competencies from Resume */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <Card className="p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-indigo-600 dark:text-indigo-400" size={20} />
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Academic Competencies & Engineering Foundation
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {academicCompetencies.map((comp) => (
              <div
                key={comp.area}
                className="rounded-xl border border-slate-200/80 bg-white/70 p-4 transition-all hover:border-indigo-400/40 dark:border-white/5 dark:bg-white/5"
              >
                <h4 className="font-display text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                  {comp.area}
                </h4>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {comp.points}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
