import { motion } from "framer-motion";
import { FiGithub, FiHeart, FiArrowUp } from "react-icons/fi";
import { fadeUp, viewport } from "../lib/motion";

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-surface-200/40 bg-white/50 dark:border-white/[0.04] dark:bg-surface-950/50">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-purple-500 font-mono text-xs font-bold text-white">
              AK
            </span>
            <div>
              <p className="text-sm font-semibold text-surface-600 dark:text-white">Ashutosh Kushwah</p>
              <p className="text-[11px] text-surface-400 dark:text-surface-500">Full Stack MERN Developer</p>
            </div>
          </div>

          {/* Social */}
          <a href="https://github.com/kushwah1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-100 text-surface-500 transition-all duration-300 hover:bg-surface-200 hover:text-accent-500 dark:bg-white/[0.04] dark:text-surface-400 dark:hover:bg-white/[0.08] dark:hover:text-accent-400">
            <FiGithub className="h-[18px] w-[18px]" />
          </a>

          {/* Scroll top */}
          <button onClick={top} aria-label="Back to top" className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-100 text-surface-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-200 hover:text-accent-500 dark:bg-white/[0.04] dark:text-surface-400 dark:hover:bg-white/[0.08] dark:hover:text-accent-400">
            <FiArrowUp className="h-[18px] w-[18px]" />
          </button>
        </motion.div>

        <div className="mt-8 border-t border-surface-200/30 pt-6 text-center dark:border-white/[0.04]">
          <p className="flex items-center justify-center gap-1 text-xs text-surface-400 dark:text-surface-500">
            &copy; {new Date().getFullYear()} Ashutosh Kushwah. Built with
            <FiHeart className="h-3 w-3 text-red-500" />
            using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
