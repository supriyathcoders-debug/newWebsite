"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { WHY_GM } from "@/lib/content/home";

export function WhyGmSection() {
  return (
    <section id="why-gm" className="py-28 section-shell bg-brand-soft/20">
      <div className="max-w-[1100px] mx-auto">
        <StaggerReveal className="mb-16 max-w-[720px]">
          <StaggerItem>
            <Eyebrow className="mb-5">{WHY_GM.eyebrow}</Eyebrow>
            <SectionHeading className="mb-6">
              {WHY_GM.heading}
            </SectionHeading>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHY_GM.points.map((point) => (
            <StaggerItem key={point.number}>
              <article className="p-8 border border-border bg-surface h-full hover:border-brand/40 transition-colors">
                <span className="font-heading text-[0.75rem] font-bold text-brand/40 tracking-wider mb-3 block">
                  {point.number}
                </span>
                <h3 className="font-heading text-[1.1rem] font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-[0.85rem] text-muted leading-[1.82] font-light">
                  {point.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
