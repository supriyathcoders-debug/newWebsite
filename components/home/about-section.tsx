"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { ABOUT, IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-28 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto">
        {/* Main About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <StaggerReveal className="order-2 lg:order-1">
            <StaggerItem>
              <Eyebrow className="mb-5">{ABOUT.eyebrow}</Eyebrow>
              <SectionHeading className="mb-8">
                {ABOUT.heading}{" "}
                <em className="italic text-brand font-light">{ABOUT.headingEm}</em>
              </SectionHeading>
            </StaggerItem>
            {ABOUT.paragraphs.map((p) => (
              <StaggerItem key={p.slice(0, 30)}>
                <p className="text-[0.93rem] text-muted leading-[1.9] font-light mb-5">
                  {p}
                </p>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <StaggerReveal className="order-1 lg:order-2">
            <StaggerItem>
              <BrandImage
                src={IMAGES.agencyProfessionalWoman}
                alt="Andrea — Founder & CEO of Grateful Marketing"
                className="max-w-[480px] mx-auto lg:ml-auto"
              />
            </StaggerItem>
          </StaggerReveal>
        </div>

        {/* Meet Your Expert — Andrea */}
        <StaggerReveal>
          <StaggerItem>
            <div className="border border-brand/20 bg-surface p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start">
                <div>
                  <BrandImage
                    src={IMAGES.founderStrategicReflection}
                    alt="Andrea — Founder & CEO of Grateful Marketing"
                    className="w-full"
                    aspectRatio="4/5"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-foreground mb-6">
                    {ABOUT.expertHeading}
                  </h3>
                  <p className="text-[0.93rem] text-muted leading-[1.9] font-light mb-5">
                    {ABOUT.expertBio}
                  </p>
                  <p className="text-[0.93rem] text-muted leading-[1.9] font-light mb-6">
                    {ABOUT.expertEnterprise}
                  </p>
                  <div className="border-l-4 border-brand pl-5 py-3 bg-brand-soft/30">
                    <p className="text-[0.88rem] text-foreground leading-[1.8] font-light italic">
                      &ldquo;{ABOUT.expertCredential}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
