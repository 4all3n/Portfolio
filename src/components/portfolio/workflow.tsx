import { type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type WorkflowStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type WorkflowProps = {
  steps: WorkflowStep[];
};

export function Workflow({ steps }: WorkflowProps) {
  return (
    <section className="section-wrap py-16 lg:py-20">
      <div className="surface-card rounded-[2rem] p-7 lg:p-9">
        <SectionHeading
          eyebrow="Workflow"
          title="A simple development process that keeps projects clear and moving."
          copy="The flow below helps the portfolio feel more senior: it shows how work is shaped, not just what the final output looks like."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => {
            return (
              <div
                key={title}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] p-5 hover-lift"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-[color:var(--accent)]" />
                  <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
