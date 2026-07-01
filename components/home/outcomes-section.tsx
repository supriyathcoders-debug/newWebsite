"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { OUTCOMES } from "@/lib/content/home";

export function OutcomesSection() {
  return (
    <section id="outcomes" className="py-28 section-shell relative section-noise">
      <div className="max-w-[900px] mx-auto">
        {/* Decorative blob */}
        <div className="absolute left-1/4 top-1/4 w-[350px] h-[350px] blob-gold opacity-15 pointer-events-none" aria-hidden="true" />

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
                <div className="card-glass flex items-start gap-4 p-6 group">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-brand flex items-center justify-center text-[0.7rem] font-bold shrink-0 mt-0.5 border border-brand/15">
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
