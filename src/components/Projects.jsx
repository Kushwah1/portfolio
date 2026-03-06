import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiPython } from "react-icons/si";
import { fadeUp, staggerContainer, scaleIn, viewport } from "../lib/motion";

const techMap = {
  MongoDB: { icon: SiMongodb, color: "text-green-500" },
  "Express.js": { icon: SiExpress, color: "text-surface-500 dark:text-surface-300" },
  "React.js": { icon: SiReact, color: "text-cyan-500" },
  "Node.js": { icon: SiNodedotjs, color: "text-green-600" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-500" },
  Python: { icon: SiPython, color: "text-blue-500" },
};

const projects = [
  {
    title: "ERP Fee Management System",
    description: "A comprehensive MERN stack system designed to manage student fee structures, process payments, generate receipts, and produce detailed financial reports for educational institutions.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/kushwah1",
    gradient: "from-blue-500/80 to-indigo-600/80",
    emoji: "\uD83C\uDF93",
  },
  {
    title: "Face Recognition Attendance",
    description: "An AI-powered attendance tracking system that uses face recognition technology for automatic student attendance marking, eliminating manual processes and improving accuracy.",
    tech: ["Python", "JavaScript", "React.js", "MongoDB"],
    github: "https://github.com/kushwah1",
    gradient: "from-purple-500/80 to-pink-600/80",
    emoji: "\uD83E\uDD16",
  },
  {
    title: "MERN E-commerce Website",
    description: "A full-stack e-commerce application featuring product listings, shopping cart, secure authentication, and comprehensive order management with an admin dashboard.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/kushwah1",
    gradient: "from-emerald-500/80 to-teal-600/80",
    emoji: "\uD83D\uDED2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/[0.06] dark:text-accent-300">
            Projects
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-surface-600 dark:text-white sm:text-4xl lg:text-5xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mx-auto max-w-xl text-surface-500 dark:text-surface-400">Projects that showcase my skills and passion for building</p>
        </motion.div>

        {/* Cards */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={scaleIn} custom={i} className="glass-card group flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-500/[0.06]">
              {/* Image placeholder */}
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                <span className="text-5xl transition-transform duration-500 group-hover:scale-125">{p.emoji}</span>
                <div className="grid-pattern pointer-events-none absolute inset-0 opacity-20" />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/30 group-hover:opacity-100">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-surface-800 transition-all duration-300 hover:scale-110">
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-surface-800 transition-all duration-300 hover:scale-110">
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-[15px] font-bold text-surface-600 transition-colors group-hover:text-accent-500 dark:text-white dark:group-hover:text-accent-400">
                  {p.title}
                </h3>
                <p className="mb-4 flex-1 text-[13px] leading-relaxed text-surface-500 dark:text-surface-400">
                  {p.description}
                </p>

                {/* Tech badges */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => {
                    const tm = techMap[t];
                    const Icon = tm?.icon;
                    return (
                      <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-surface-200/40 bg-surface-50/60 px-2 py-1 font-mono text-[11px] font-medium text-surface-500 dark:border-white/[0.05] dark:bg-white/[0.03] dark:text-surface-400">
                        {Icon && <Icon className={`text-xs ${tm.color}`} />}
                        {t}
                      </span>
                    );
                  })}
                </div>

                {/* Link */}
                <div className="border-t border-surface-200/40 pt-4 dark:border-white/[0.05]">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-medium text-surface-500 transition-colors hover:text-accent-500 dark:text-surface-400 dark:hover:text-accent-400">
                    <FiGithub className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
