"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { OUTCOMES } from "@/lib/content/home";

export function OutcomesSection() {
  return (
    <section id="outcomes" className="py-28 section-shell">
      <div className="max-w-[900px] mx-auto">
        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-5">{OUTCOMES.eyebrow}</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-foreground mb-10">
              {OUTCOMES.subhead}
            </h3>
          </StaggerItem>
          <div className="space-y-5">
            {OUTCOMES.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 p-6 border border-border bg-surface hover:border-brand/40 transition-colors">
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[0.7rem] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-[0.9rem] text-muted leading-[1.8] font-light">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
