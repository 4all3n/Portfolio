import { useState, type FormEvent } from "react";
import { Mail, ArrowRight, MoveUpRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ContactLink } from "@/types/portfolio";

type ContactProps = {
  contactLinks: ContactLink[];
  formEndpoint: string;
};

export function Contact({ contactLinks, formEndpoint }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const mailtoFallback = () => {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      );
      window.location.href = `mailto:harsh.devmail@gmail.com?subject=${subject}&body=${body}`;
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
    };

    if (formEndpoint.includes("YOUR_FORMSPREE_FORM_ID")) {
      mailtoFallback();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        // Fall back to mailto on API errors
        mailtoFallback();
      }
    } catch (err) {
      // Fall back to mailto on network errors
      mailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-wrap py-16 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="surface-card rounded-[2rem] p-7 lg:p-9">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build scalable applications together."
            copy="I am currently looking for an internship opportunity where I can contribute to meaningful projects, learn from experienced engineers, and grow my skills."
          />

          <div className="mt-8 space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon as LucideIcon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="flex items-center justify-between gap-4 rounded-3xl border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.03)] p-4 transition hover:border-[color:var(--line-strong)] hover-lift"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:rgba(var(--accent-rgb),0.12)] text-[color:var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">
                        {link.label}
                      </span>
                      <span className="block text-xs text-[color:var(--muted)]">
                        {link.value}
                      </span>
                    </span>
                  </span>
                  <MoveUpRight className="h-4 w-4 text-[color:var(--muted)]" />
                </a>
              );
            })}
          </div>
        </div>

        {isSent ? (
          <div className="surface-card-strong rounded-[2rem] p-7 lg:p-9 text-center flex flex-col items-center justify-center min-h-[380px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:rgba(var(--accent-rgb),0.15)] text-[color:var(--accent)] animate-bounce mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--text)]">Message sent!</h3>
            <p className="mt-2 text-sm text-[color:var(--muted)] max-w-sm">
              Thank you for reaching out. I'll review your message and get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSent(false)}
              className="mt-6 button-secondary py-2 px-5 text-sm hover-lift"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="surface-card-strong rounded-[2rem] p-7 lg:p-9 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium">
                Name
                <input
                  className="input"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Your name"
                  name="name"
                  disabled={isSubmitting}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                Email
                <input
                  className="input"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="you@example.com"
                  name="email"
                  type="email"
                  disabled={isSubmitting}
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium">
              Message
              <textarea
                className="textarea min-h-48 resize-none"
                value={formState.message}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder="Let's discuss opportunities."
                name="message"
                disabled={isSubmitting}
              />
            </label>

            {errorMsg && (
              <p className="text-sm text-[#e67e80] font-mono mt-1">✕ {errorMsg}</p>
            )}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={isSubmitting} className="button-primary disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Send message"} <Mail className="h-4 w-4" />
              </button>
              <a
                href="mailto:harsh.devmail@gmail.com"
                className="button-secondary"
              >
                Or email directly <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
