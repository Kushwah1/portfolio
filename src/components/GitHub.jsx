import { useMemo } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiGitBranch, FiStar } from "react-icons/fi";
import { fadeUp, scaleIn, viewport } from "../lib/motion";

export default function GitHub() {
  // Deterministic contribution grid
  const cells = useMemo(() => {
    const seed = 42;
    const arr = [];
    let s = seed;
    for (let i = 0; i < 364; i++) {
      s = (s * 16807) % 2147483647;
      const r = (s % 100) / 100;
      let cls = "bg-surface-200/60 dark:bg-white/[0.04]";
      if (r > 0.65) cls = "bg-accent-200/60 dark:bg-accent-900/40";
      if (r > 0.8) cls = "bg-accent-400/60 dark:bg-accent-700/50";
      if (r > 0.9) cls = "bg-accent-500 dark:bg-accent-500/80";
      arr.push(cls);
    }
    return arr;
  }, []);

  return (
    <section id="github" className="relative py-28 lg:py-36">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/[0.06] dark:text-accent-300">
            Open Source
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-surface-600 dark:text-white sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">GitHub</span>
          </h2>
          <p className="mx-auto max-w-xl text-surface-500 dark:text-surface-400">Explore my repositories and development journey</p>
        </motion.div>

        {/* Profile card */}
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewport} className="mx-auto max-w-2xl">
          <div className="glass-card group p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/[0.06] sm:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-600 shadow-lg transition-transform duration-500 group-hover:scale-110 dark:bg-surface-700">
              <FiGithub className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-1 text-xl font-bold text-surface-600 dark:text-white">@kushwah1</h3>
            <p className="mx-auto mb-8 max-w-md text-sm text-surface-500 dark:text-surface-400">
              I actively build and contribute to projects on GitHub. Explore my repositories to see my latest work and development practices.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-3">
              {[
                { icon: FiGitBranch, value: "10+", label: "Repos" },
                { icon: FiStar, value: "8+", label: "Technologies" },
                { icon: FiExternalLink, value: "5+", label: "Projects" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-2xl border border-surface-200/40 bg-surface-50/40 p-4 dark:border-white/[0.04] dark:bg-white/[0.02]">
                  <Icon className="mx-auto mb-2 h-4 w-4 text-accent-500" />
                  <p className="text-lg font-bold text-surface-600 dark:text-white">{value}</p>
                  <p className="text-[11px] text-surface-400 dark:text-surface-500">{label}</p>
                </div>
              ))}
            </div>

            <a href="https://github.com/kushwah1" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 rounded-2xl bg-surface-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-700 hover:shadow-lg dark:bg-white dark:text-surface-900 dark:hover:bg-surface-100">
              <FiGithub className="h-4 w-4" />
              Visit GitHub Profile
              <FiExternalLink className="h-3.5 w-3.5 -ml-1 opacity-0 transition-all duration-300 group-hover/btn:ml-0 group-hover/btn:opacity-100" />
            </a>
          </div>
        </motion.div>

        {/* Contribution graph */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} custom={1} className="mx-auto mt-6 max-w-2xl">
          <div className="glass-card overflow-hidden p-5">
            <p className="mb-3 text-center font-mono text-[11px] text-surface-400 dark:text-surface-500">Contribution Activity</p>
            <div className="flex flex-wrap justify-center gap-[3px]">
              {cells.map((cls, i) => (
                <div key={i} className={`h-[10px] w-[10px] rounded-[2px] ${cls}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
