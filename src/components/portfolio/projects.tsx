import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectCard } from "@/types/portfolio";
import { projectCards as fallbackCards } from "@/data/portfolio-data";

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

type ProjectsProps = {
  projectCards?: ProjectCard[];
};

export function Projects({ projectCards }: ProjectsProps) {
  const cards = projectCards && projectCards.length > 0 ? projectCards : fallbackCards;

  return (
    <section id="projects" className="section-wrap py-16 lg:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work presented like a capable developer would present it."
        copy="Each card includes a strong visual, a short outcome-driven description, the main stack, and links for live review and source code. Replace the placeholders with your own project details as needed."
      />

      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        className="mt-10 grid gap-6 xl:grid-cols-3"
      >
        {cards.map((project) => (
          <motion.div
            key={project.title}
            variants={introVariants}
            className="flex flex-col"
          >
            <article className="project-card surface-card-strong flex flex-1 flex-col overflow-hidden rounded-[2rem] hover-lift">
              <div className="relative h-60 shrink-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot or visual preview`}
                  className="card-image h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:rgba(4,8,18,0.9)] via-[color:rgba(4,8,18,0.18)] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] backdrop-blur-md">
                    {project.category}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-white/68">
                      Featured project
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-5">
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="impact-block rounded-3xl border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                      Impact
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--text)]">
                      {project.impact}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary text-sm"
                  >
                    GitHub <GithubIcon className="h-4 w-4" />
                  </a>
                  {project.showLive !== false && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary text-sm"
                    >
                      Live demo <MoveUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
