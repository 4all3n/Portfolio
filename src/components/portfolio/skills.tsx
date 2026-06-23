import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillGroup } from "@/types/portfolio";

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

type SkillsProps = {
  skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section-wrap py-16 lg:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="A balanced stack across interface, logic, infrastructure, and delivery."
        copy="The skill map below is grouped the way a hiring manager or client usually thinks about product work: what I can ship, how I think about systems, and how I keep the work maintainable."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group) => {
          const Icon = group.icon as LucideIcon;

          return (
            <motion.article
              key={group.title}
              variants={introVariants}
              className="surface-card rounded-[2rem] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Icon className="h-6 w-6 text-[color:var(--accent)]" />
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="chip">{group.items.length} skills</span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--muted)]">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip chip-strong">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
