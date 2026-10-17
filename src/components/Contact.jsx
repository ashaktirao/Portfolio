import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import Section, { Card } from "./Section";
import { LINKS } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(LINKS.emailPlain || "ashaktirao@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Section
      id="contact"
      badge="Get in Touch"
      title="Let's connect"
      subtitle="Open to internships, collaborations, and full-time roles."
      center
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 sm:p-10 text-center flex flex-col items-center">
            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
              Drop me an email or find me on GitHub, LinkedIn, and LeetCode. I usually reply within a day.
            </p>

            {/* Email Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/80 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:scale-105 hover:border-indigo-400 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-indigo-400"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-500 animate-scale-in" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-slate-500 dark:text-slate-400" />
                    <span>Copy email</span>
                  </>
                )}
              </button>

              {/* Direct Mailto Button */}
              <a
                href={LINKS.email}
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-105 hover:brightness-110"
              >
                <Mail size={16} />
                <span>{LINKS.emailPlain || "ashaktirao@gmail.com"}</span>
              </a>
            </div>

            {/* Circular Social Buttons Row */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-center gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                title="LeetCode Profile"
                aria-label="LeetCode profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-amber-600 shadow-sm transition-all hover:scale-110 hover:border-amber-400 hover:text-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-amber-400 dark:hover:border-amber-400 dark:hover:text-amber-300"
              >
                <Code2 size={18} />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
