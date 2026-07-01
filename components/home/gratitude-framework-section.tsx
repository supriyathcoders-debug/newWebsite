"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { GRATITUDE, GRATITUDE_PILLARS, IMAGES } from "@/lib/content/home";

export function GratitudeFrameworkSection() {
  return (
    <section id="gratitude" className="py-28 section-shell relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        {/* Decorative blob */}
        <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] blob-purple opacity-30 pointer-events-none" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.heartCircuitGratitude}
                alt="The heart of Gratitude&#8482; — human connection powered by AI"
                className="max-w-[520px] mx-auto lg:mx-0"
                floating
                blob
              />
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{GRATITUDE.eyebrow}</Eyebrow>
              <SectionHeading className="mb-4">{GRATITUDE.heading}</SectionHeading>
              <p className="text-sm text-brand/80 tracking-wide mb-5 font-light">
                {GRATITUDE.subhead}
              </p>
              <p className="text-base text-muted leading-[1.88] font-light">
                {GRATITUDE.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        {/* Pain to Purpose personal story */}
        <StaggerReveal className="max-w-[900px] mx-auto mb-16">
          <StaggerItem>
            <div className="card-glass p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30" aria-hidden="true" />
              <div className="flex gap-6 items-start">
                <span className="font-heading text-5xl text-brand/20 leading-none select-none shrink-0" aria-hidden="true">
                  &ldquo;
                </span>
                <div>
                  <p className="text-[0.95rem] text-muted leading-[1.85] font-light italic">
                    {GRATITUDE.personalStory}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center text-brand text-sm font-bold border border-brand/20">
                      A
                    </div>
                    <div>
                      <div className="text-[0.8rem] font-semibold text-foreground">Andrea</div>
                      <div className="text-[0.68rem] text-muted font-light">Founder &amp; CEO, Grateful Marketing&#8482;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GRATITUDE_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <article className="card-modern p-6 h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading text-lg font-bold text-brand">
                    {pillar.letter}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand/15 to-brand/5 flex items-center justify-center text-brand border border-brand/15 group-hover:border-brand/30 transition-colors">
                    <PillarIcon name={pillar.icon} className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[0.8rem] text-muted leading-relaxed font-light">
                  {pillar.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
