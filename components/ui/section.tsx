import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 section-shell ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <StaggerReveal className="max-w-[580px] mb-14">
          {eyebrow ? (
            <StaggerItem>
              <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-medium mb-5">
                <span className="w-7 h-px bg-brand"></span>
                {eyebrow}
              </div>
            </StaggerItem>
          ) : null}
          <StaggerItem>
            <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5 text-[#0b0f19]">{title}</h2>
          </StaggerItem>
          {description ? (
            <StaggerItem>
              <p className="text-[0.95rem] text-slate-500 leading-[1.9] font-light">{description}</p>
            </StaggerItem>
          ) : null}
        </StaggerReveal>
        {children ? (
          <ScrollReveal>
            <div>{children}</div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
