"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES, PLATFORM } from "@/lib/content/home";

export function AiPlatformSection() {
  return (
    <section id="platform" className="py-28 section-shell relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        {/* Decorative blob */}
        <div className="absolute left-0 top-1/3 w-[400px] h-[400px] blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{PLATFORM.eyebrow}</Eyebrow>
              <SectionHeading className="mb-5">
                {PLATFORM.heading}{" "}
                <em className="italic text-brand font-light">{PLATFORM.headingEm}</em>
                <br />
                <span className="font-light">{PLATFORM.headingSuffix}</span>
              </SectionHeading>
              <p className="text-base text-muted leading-[1.88] font-light">
                {PLATFORM.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.aiPlatformDataConfidence}
                alt="Data-driven confidence — Grateful Marketing AI platform"
                className="max-w-[520px] mx-auto lg:ml-auto"
                floating
                blob
              />
            </StaggerItem>
          </StaggerReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLATFORM.features.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="card-modern p-7 h-full group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand/15 to-brand/5 flex items-center justify-center text-brand border border-brand/15 mb-4 group-hover:border-brand/30 transition-colors">
                  <PillarIcon name={feature.icon} className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                <p className="text-[0.8rem] text-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
