"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { INDUSTRIES, IMAGES } from "@/lib/content/home";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-28 section-shell bg-brand-soft/20 relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        {/* Decorative blob */}
        <div className="absolute left-0 top-1/3 w-[350px] h-[350px] blob-gold opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{INDUSTRIES.eyebrow}</Eyebrow>
              <SectionHeading className="mb-5">
                {INDUSTRIES.heading}
                <br />
                <span className="font-light">
                  <em className="italic text-brand">{INDUSTRIES.headingEm}</em>
                </span>
              </SectionHeading>
              <p className="text-base text-muted leading-[1.88] font-light">
                {INDUSTRIES.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.footprintsTurningToLight}
                alt="Footprints turning to light — transformation through purposeful AI"
                className="max-w-[480px] mx-auto lg:ml-auto"
                floating
                blob
              />
            </StaggerItem>
          </StaggerReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.items.map((industry) => (
            <StaggerItem key={industry.title}>
              <article className="card-modern p-7 h-full group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand/15 to-brand/5 flex items-center justify-center text-brand border border-brand/15 mb-4 group-hover:border-brand/30 transition-colors">
                  <PillarIcon name={industry.icon} className="w-4 h-4" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted leading-[1.82] font-light">
                  {industry.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
