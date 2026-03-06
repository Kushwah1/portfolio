import { motion } from "framer-motion";
import { FiGithub, FiChevronDown } from "react-icons/fi";
import { fadeUp, viewport } from "../lib/motion";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.07] blur-[120px] dark:bg-accent-500/[0.12]" />
        <div className="absolute right-1/4 top-2/3 h-[400px] w-[400px] rounded-full bg-purple-500/[0.06] blur-[100px] dark:bg-purple-500/[0.1]" />
      </div>

      {/* Grid */}
      <div className="grid-pattern pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Status badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 dark:border-accent-500/20 dark:bg-accent-500/[0.06]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-accent-700 dark:text-accent-300">Open to opportunities</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-surface-600 dark:text-white">Hi, I'm </span>
          <span className="text-gradient">Ashutosh</span>
          <br />
          <span className="text-surface-600 dark:text-white">Kushwah</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-6">
          <span className="inline-block rounded-xl border border-accent-200/30 bg-accent-50/40 px-5 py-2 font-mono text-sm font-medium text-accent-600 dark:border-accent-500/10 dark:bg-accent-500/[0.04] dark:text-accent-300 sm:text-base">
            {"<"} Full Stack MERN Developer {"/>"}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-surface-500 dark:text-surface-400 sm:text-lg">
          Building scalable web applications using modern technologies. Passionate about creating elegant solutions to complex problems.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/30 active:translate-y-0">
            <span className="relative z-10">View Projects</span>
            <FiChevronDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <a href="https://github.com/kushwah1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-surface-200 bg-white/60 px-8 py-3.5 text-sm font-semibold text-surface-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-surface-300 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white dark:hover:border-white/[0.15] dark:hover:bg-white/[0.06]">
            <FiGithub className="h-4 w-4" />
            GitHub Profile
          </a>
        </motion.div>

        {/* Tech pills */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="mt-16 flex flex-wrap items-center justify-center gap-2.5">
          {["MongoDB", "Express.js", "React.js", "Node.js"].map((t) => (
            <span key={t} className="rounded-lg border border-surface-200/60 bg-white/50 px-3.5 py-1.5 font-mono text-xs font-medium text-surface-500 backdrop-blur-sm transition-all duration-300 hover:border-accent-300 hover:text-accent-600 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-surface-400 dark:hover:border-accent-500/30 dark:hover:text-accent-400">
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-surface-400 dark:text-surface-500">Scroll</span>
        <div className="flex h-7 w-4 items-start justify-center rounded-full border border-surface-300 p-1 dark:border-surface-700">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1 rounded-full bg-accent-500" />
        </div>
      </motion.div>
    </section>
  );
}
