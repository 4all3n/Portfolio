type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="flex flex-col">
      <div>
        <span className="kicker">{eyebrow}</span>
      </div>
      <h2 className="section-title max-w-4xl mt-4">{title}</h2>
      <p className="section-copy mt-6 sm:mt-8">{copy}</p>
    </div>
  );
}
