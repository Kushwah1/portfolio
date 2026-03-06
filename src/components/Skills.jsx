import { motion } from "framer-motion";
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiVisualstudiocode } from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { fadeUp, staggerContainer, scaleIn, viewport } from "../lib/motion";

const categories = [
  {
    title: "Frontend",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", icon: SiReact, color: "text-cyan-500" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    ],
  },
  {
    title: "Backend",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-surface-500 dark:text-surface-300" },
      { name: "REST APIs", icon: FiServer, color: "text-purple-500" },
    ],
  },
  {
    title: "Database",
    gradient: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ],
  },
  {
    title: "Tools",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-surface-600 dark:text-white" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-600" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      {/* Subtle background */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/[0.06] dark:text-accent-300">
            Skills
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-surface-600 dark:text-white sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mx-auto max-w-xl text-surface-500 dark:text-surface-400">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        {/* Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title} variants={scaleIn} custom={ci} className="glass-card group p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-500/[0.04]">
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-sm font-bold text-white shadow-sm`}>
                  {cat.title[0]}
                </div>
                <h3 className="font-semibold text-surface-600 dark:text-white">{cat.title}</h3>
              </div>

              {/* Skill items */}
              <div className="space-y-2.5">
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="flex items-center gap-3 rounded-xl border border-surface-200/40 bg-surface-50/40 p-3 transition-all duration-300 hover:border-accent-300/30 hover:bg-surface-50 dark:border-white/[0.04] dark:bg-white/[0.02] dark:hover:border-accent-500/20 dark:hover:bg-white/[0.04]">
                    <Icon className={`text-lg ${color}`} />
                    <span className="text-sm font-medium text-surface-600 dark:text-surface-200">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
