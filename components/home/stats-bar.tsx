"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { STATS } from "@/lib/content/home";

export function StatsBar() {
  return (
    <section className="py-12 section-shell bg-brand-soft/20 border-y border-black/5">
      <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
        {STATS.items.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="text-center">
              <div className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold text-brand leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[0.72rem] text-muted leading-relaxed font-light max-w-[140px] mx-auto">
                {stat.label}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
