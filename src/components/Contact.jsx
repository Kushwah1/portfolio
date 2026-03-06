import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiMapPin, FiSend, FiCheck } from "react-icons/fi";
import { fadeUp, slideInLeft, slideInRight, viewport } from "../lib/motion";

const info = [
  { icon: FiMail, label: "Email", value: "ashutoshkushwah.dev@gmail.com", href: "mailto:ashutoshkushwah.dev@gmail.com" },
  { icon: FiGithub, label: "GitHub", value: "github.com/kushwah1", href: "https://github.com/kushwah1" },
  { icon: FiMapPin, label: "Location", value: "India", href: null },
];

const inputCls = "w-full rounded-2xl border border-surface-200 bg-surface-50/60 px-4 py-3 text-sm text-surface-600 placeholder-surface-400 outline-none transition-all duration-300 focus:border-accent-400 focus:ring-2 focus:ring-accent-500/20 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-surface-100 dark:placeholder-surface-500 dark:focus:border-accent-500/40";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent-200/40 bg-accent-50/60 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600 dark:border-accent-500/20 dark:bg-accent-500/[0.06] dark:text-accent-300">
            Contact
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-surface-600 dark:text-white sm:text-4xl lg:text-5xl">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto max-w-xl text-surface-500 dark:text-surface-400">Have a project in mind? Let's connect and build something great.</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-2">
            <h3 className="mb-2 text-lg font-bold text-surface-600 dark:text-white">Let's connect</h3>
            <p className="mb-8 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:scale-110 dark:bg-accent-500/[0.08] dark:text-accent-400">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-surface-400 dark:text-surface-500">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm font-medium text-surface-600 transition-colors hover:text-accent-500 dark:text-surface-200 dark:hover:text-accent-400">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-surface-600 dark:text-surface-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewport} className="lg:col-span-3">
            <form onSubmit={submit} className="glass-card space-y-4 p-6 sm:p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-surface-600 dark:text-surface-200">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={change} required placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-surface-600 dark:text-surface-200">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={change} required placeholder="you@example.com" className={inputCls} />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-surface-600 dark:text-surface-200">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={change} required rows={5} placeholder="Tell me about your project..." className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" disabled={sent} className={`flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-semibold transition-all duration-300 ${sent ? "bg-emerald-500 text-white" : "bg-accent-500 text-white shadow-lg shadow-accent-500/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/30 active:translate-y-0"}`}>
                {sent ? (<><FiCheck className="h-5 w-5" /> Message Sent!</>) : (<><FiSend className="h-4 w-4" /> Send Message</>)}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
