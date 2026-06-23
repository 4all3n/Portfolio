import { Code2, Database, Workflow, Globe, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-wrap py-16 lg:py-20">
      <SectionHeading
        eyebrow="About"
        title="Solid foundations, rapid prototyping."
        copy="I focus on writing clean, scalable code with modern frameworks, combining React and Python with AI-assisted tools for faster, better delivery."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card rounded-[2rem] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
            What I bring
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                Code2,
                "Strong engineering taste",
                "Readable code, solid abstractions, and interfaces that do not feel generic.",
              ],
              [
                Database,
                "Full-stack thinking",
                "Data flow, state, and API design all move together instead of fighting each other.",
              ],
              [
                Workflow,
                "Reliable delivery",
                "A practical setup that balances design quality, performance, and maintainability.",
              ],
              [
                Globe,
                "Launch-ready polish",
                "Motion, responsiveness, and hierarchy tuned to make a first impression fast.",
              ],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as LucideIcon;

              return (
                <div
                  key={title as string}
                  className="rounded-3xl border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] p-5 hover-lift"
                >
                  <IconComponent className="h-5 w-5 text-[color:var(--accent)]" />
                  <h3 className="mt-4 text-lg font-semibold">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="surface-card rounded-[2rem] p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
            Current focus
          </p>
          <div className="mt-6 space-y-4">
            {[
              "Turning complex requirements into simple product flows.",
              "Building visually rich dashboards and landing pages that load quickly.",
              "Shipping systems that are easy for teams to maintain after launch.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-3xl border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] p-4 hover-lift"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                <p className="text-sm leading-7 text-[color:var(--muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Availability: open for select work",
              "Timezone: flexible",
              "Engagement: freelance or full-time",
            ].map((label) => (
              <span key={label} className="chip chip-strong">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
