import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, MoveUpRight, type LucideIcon } from "lucide-react";
import { MockEditor } from "@/components/portfolio/mock-editor";
import type { Highlight } from "@/types/portfolio";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const introVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type HeroProps = {
  facts: string[];
  highlights: Highlight[];
};

export function Hero({ facts, highlights }: HeroProps) {
  return (
    <section
      id="top"
      className="section-wrap grid gap-6 py-8 md:gap-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24"
    >
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 md:space-y-8"
      >
        <motion.span variants={introVariants} className="kicker">
          <BadgeCheck className="h-4 w-4" />
          Full-Stack Developer & AI Integrator
        </motion.span>

        <motion.div
          variants={introVariants}
          className="space-y-4 md:space-y-6"
        >
          <h1 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl text-[color:var(--text)]">
            Full Stack Developer
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-xl sm:leading-8">
            Strong foundation in React, Python, and Django. Proficient in
            leveraging AI tools like Cursor and GitHub Copilot. Proven
            experience in API design, DOM manipulation, and dynamic data
            fetching.
          </p>
        </motion.div>

        <motion.div
          variants={introVariants}
          className="flex flex-wrap gap-2 md:gap-3"
        >
          {facts.map((fact) => (
            <span key={fact} className="chip chip-strong text-xs sm:text-sm">
              {fact}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={introVariants}
          className="flex flex-col gap-2.5 sm:flex-row sm:gap-3"
        >
          <a
            href="#projects"
            className="button-primary text-sm md:text-base py-2.5 px-4 md:py-3.5 md:px-5"
          >
            Explore projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="button-secondary text-sm md:text-base py-2.5 px-4 md:py-3.5 md:px-5"
          >
            Contact me <MoveUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          variants={introVariants}
          className="hidden md:grid gap-3 sm:grid-cols-3"
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon as LucideIcon;

            return (
              <div
                key={highlight.title}
                className="surface-card rounded-3xl p-5 hover-lift"
              >
                <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                <h3 className="mt-4 text-lg font-semibold">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="relative"
      >
        <div className="absolute -left-8 top-6 h-40 w-40 rounded-full bg-[color:rgba(var(--accent-rgb),0.3)] blur-[40px] opacity-70" />
        <div className="absolute -right-5 bottom-4 h-36 w-36 rounded-full bg-[color:rgba(219,188,127,0.25)] blur-[40px] opacity-70" />

        <MockEditor />
      </motion.div>
    </section>
  );
}
