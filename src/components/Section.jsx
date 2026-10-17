import { motion } from "framer-motion";

export default function Section({ id, badge, title, subtitle, children, center = false, className = "" }) {
  return (
    <section id={id} className={`relative py-12 sm:py-16 md:py-20 ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${center ? "text-center" : ""}`}>
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-3 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300 ${
              center ? "mx-auto" : ""
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {badge}
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mt-3 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 ${
              center ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </motion.p>
        )}

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export const Chip = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default:
      "bg-indigo-50/80 text-indigo-700 border-indigo-200/60 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20",
    emerald:
      "bg-emerald-50/80 text-emerald-700 border-emerald-200/60 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
    sky:
      "bg-sky-50/80 text-sky-700 border-sky-200/60 dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/20",
    amber:
      "bg-amber-50/80 text-amber-700 border-amber-200/60 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-medium backdrop-blur-sm transition-all hover:scale-105 ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
};

export const Card = ({ children, className = "", hover = true }) => (
  <div
    className={`glass-panel rounded-2xl p-6 sm:p-7 ${
      hover ? "glass-panel-hover" : ""
    } ${className}`}
  >
    {children}
  </div>
);
