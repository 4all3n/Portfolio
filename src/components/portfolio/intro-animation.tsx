import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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

export function IntroAnimation() {
  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[color:var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(var(--accent-rgb),0.22),_transparent_55%)]" />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 px-6 text-center"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={introVariants}
          className="kicker border-[color:var(--line-strong)] text-[color:var(--text)]"
        >
          <Sparkles className="h-4 w-4 text-[color:var(--accent)]" />
          Initializing
        </motion.span>
        <motion.h1
          variants={introVariants}
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          Harsh Pratap Singh
        </motion.h1>
        <motion.p
          variants={introVariants}
          className="max-w-xl text-sm text-[color:var(--muted)] sm:text-base"
        >
          Full-stack engineer, passionate about building scalable and efficient web applications. Skilled in React, Node.js, and cloud technologies.
        </motion.p>
        <motion.div
          variants={introVariants}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--faint)]"
        >
          <span className="h-px w-10 bg-[color:var(--line-strong)]" />
          Loading portfolio
          <span className="h-px w-10 bg-[color:var(--line-strong)]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
