"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { FOUNDER_QUOTE, IMAGES } from "@/lib/content/home";

export function FounderQuoteSection() {
  return (
    <section id="quote" className="py-24 section-shell relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/3 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal className="hidden lg:block">
          <StaggerItem>
            <BrandImage
              src={IMAGES.founderStrategicReflection}
              alt="Strategic reflection — Andrea, Founder of Grateful Marketing"
              blob
            />
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <div className="card-glass px-8 py-14 md:px-12 md:py-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30" aria-hidden="true" />
              <span
                className="font-heading text-6xl text-brand/12 leading-none block mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-heading text-[clamp(1.05rem,2vw,1.45rem)] italic leading-[1.7] text-brand/90 mb-8">
                {FOUNDER_QUOTE}
              </blockquote>
              <DiamondDivider className="max-w-[180px] mb-6" />
              <footer>
                <cite className="not-italic">
                  <div className="text-sm font-medium text-foreground">Andrea</div>
                  <div className="text-[0.72rem] text-muted mt-1 font-light">
                    Founder &amp; CEO, Grateful Marketing&#8482;
                  </div>
                </cite>
              </footer>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
