import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* active section tracker */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[72px]">
        {/* Logo */}
        <a href="#home" onClick={(e) => go(e, "#home")} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-purple-500 font-mono text-xs font-bold text-white shadow-lg shadow-accent-500/20 transition-transform duration-300 group-hover:scale-110">
            AK
          </span>
          <span className="hidden text-[15px] font-semibold tracking-tight text-surface-600 transition-colors group-hover:text-accent-500 dark:text-surface-100 sm:block">
            Ashutosh
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => go(e, href)}
                  className={`relative rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-accent-500"
                      : "text-surface-500 hover:text-surface-600 dark:text-surface-400 dark:hover:text-surface-100"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-accent-500/[0.08] dark:bg-accent-500/[0.12]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Theme */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-100/80 text-surface-500 transition-all duration-300 hover:bg-surface-200 hover:text-surface-600 dark:bg-white/[0.06] dark:text-surface-400 dark:hover:bg-white/[0.1] dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <FiSun className="h-[18px] w-[18px] text-amber-400" />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <FiMoon className="h-[18px] w-[18px]" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-100/80 text-surface-500 transition-all duration-300 hover:bg-surface-200 dark:bg-white/[0.06] dark:text-surface-400 dark:hover:bg-white/[0.1] lg:hidden"
          >
            {open ? <FiX className="h-[18px] w-[18px]" /> : <FiMenu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/[0.04] dark:border-white/[0.06] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => go(e, href)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active === href.slice(1)
                      ? "bg-accent-500/[0.08] text-accent-500 dark:bg-accent-500/[0.12]"
                      : "text-surface-500 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
