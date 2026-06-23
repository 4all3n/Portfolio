import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu, ArrowRight } from "lucide-react";
import type { NavLink } from "@/types/portfolio";

type HeaderProps = {
  links: NavLink[];
};

export function Header({ links }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--surface)] backdrop-blur-2xl">
      <div className="section-wrap flex items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="flex items-center gap-3 transition hover:opacity-80"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] font-mono text-sm font-semibold shadow-[var(--shadow-soft)]">
            HP
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--text)]">
              Harsh Pratap Singh
            </p>
            <p className="text-xs text-[color:var(--muted)]">
              Full-stack developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="chip px-4 py-2 hover:border-[color:var(--line-strong)] hover:text-[color:var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden items-center justify-center p-2.5 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] text-[color:var(--text)] transition hover:border-[color:var(--line-strong)]"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-[color:var(--line)] bg-[color:var(--surface-strong)] md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-2 p-6">
              {links.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-[color:var(--text)] hover:bg-[color:var(--bg-soft)] transition"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-[color:var(--accent)]" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
