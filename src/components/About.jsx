import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayers } from "react-icons/fi";
import { fadeUp, slideInLeft, slideInRight, viewport } from "../lib/motion";

const highlights = [
  { icon: FiCode, label: "Frontend", desc: "Interactive UIs with React.js" },
  { icon: FiServer, label: "Backend", desc: "Scalable APIs with Node & Express" },
  { icon: FiDatabase, label: "Database", desc: "Data modeling with MongoDB" },
  { icon: FiLayers, label: "Full Stack", desc: "End-to-end MERN applications" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/[0.06] dark:text-accent-300">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-surface-600 dark:text-white sm:text-4xl lg:text-5xl">
            Get to know <span className="text-gradient">me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Code card */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <div className="glass-card overflow-hidden p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                <span className="ml-2 font-mono text-[11px] text-surface-400">about.js</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-surface-500 dark:text-surface-300">
                <code>{`const ashutosh = {
  role: "Full Stack Developer",
  stack: [
    "MongoDB", "Express.js",
    "React.js", "Node.js"
  ],
  focus: [
    "Scalable Web Apps",
    "REST APIs",
    "Backend Systems"
  ],
  passion: "Building solutions",
  available: true
};`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport}>
            <h3 className="mb-5 text-xl font-bold text-surface-600 dark:text-white sm:text-2xl">
              A passionate developer crafting digital experiences
            </h3>
            <p className="mb-4 text-[15px] leading-relaxed text-surface-500 dark:text-surface-400">
              I am a dedicated Full Stack Developer with a strong focus on building robust and scalable web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js. My expertise spans across creating responsive front-end interfaces and architecting efficient back-end systems.
            </p>
            <p className="mb-8 text-[15px] leading-relaxed text-surface-500 dark:text-surface-400">
              I am particularly passionate about backend systems, designing RESTful APIs, and building applications that can handle real-world scale. I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} custom={i} className="group rounded-2xl border border-surface-200/50 bg-surface-50/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300/40 hover:shadow-lg hover:shadow-accent-500/[0.04] dark:border-white/[0.05] dark:bg-white/[0.02] dark:hover:border-accent-500/20">
                  <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-500/[0.08] dark:text-accent-400">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <p className="text-sm font-semibold text-surface-600 dark:text-white">{label}</p>
                  <p className="mt-0.5 text-xs text-surface-400 dark:text-surface-500">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
