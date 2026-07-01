"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { STATS } from "@/lib/content/home";

export function StatsBar() {
  return (
    <section className="py-16 section-shell bg-brand-soft/20 relative section-divider-top section-divider-bottom section-noise">
      <StaggerReveal className="flex flex-row items-stretch justify-center gap-4 max-w-[1000px] mx-auto">
        {STATS.items.map((stat) => (
          <StaggerItem key={stat.label} className="flex-1 min-w-0">
            <div className="card-glass p-4 sm:p-5 text-center group h-full">
              <div className="font-heading text-[clamp(1.2rem,2.5vw,2rem)] font-bold text-brand leading-none mb-1">
                {stat.number}
              </div>
              <div className="text-[0.65rem] sm:text-[0.72rem] text-muted leading-relaxed font-light">
                {stat.label}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
