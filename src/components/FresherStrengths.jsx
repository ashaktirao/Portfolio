import { motion } from "framer-motion";
import { ShieldCheck, Database, Brain, Container, Zap, CheckCircle2 } from "lucide-react";
import Section, { Card } from "./Section";
import { fresherStrengths } from "../data";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Database: Database,
  Brain: Brain,
  Container: Container,
};

const colors = [
  {
    bg: "from-blue-500/10 to-indigo-500/10",
    border: "group-hover:border-blue-500/40",
    icon: "text-blue-500 dark:text-blue-400",
    pill: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    bg: "from-emerald-500/10 to-teal-500/10",
    border: "group-hover:border-emerald-500/40",
    icon: "text-emerald-500 dark:text-emerald-400",
    pill: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    bg: "from-purple-500/10 to-pink-500/10",
    border: "group-hover:border-purple-500/40",
    icon: "text-purple-500 dark:text-purple-400",
    pill: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    bg: "from-amber-500/10 to-orange-500/10",
    border: "group-hover:border-amber-500/40",
    icon: "text-amber-500 dark:text-amber-400",
    pill: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
];

export default function FresherStrengths() {
  return (
    <Section
      id="highlights"
      badge="Engineering Mindset"
      title="Why Hire a Fresher like Shakti?"
      subtitle="Beyond standard tutorials: I design systems with production security, optimized database indexes, and algorithmic rigor."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fresherStrengths.map((item, idx) => {
          const Icon = iconMap[item.icon] || Zap;
          const color = colors[idx % colors.length];

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className={`relative h-full overflow-hidden transition-all duration-300 ${color.border}`}>
                {/* Subtle gradient backdrop */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${color.bg} blur-2xl opacity-60 group-hover:opacity-100 transition`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/60 backdrop-blur-md shadow-sm dark:border-white/10 dark:bg-white/5 ${color.icon} transition-transform group-hover:scale-110`}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 pt-2 border-t border-slate-100 dark:border-white/5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Demonstrated in live & active projects</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
