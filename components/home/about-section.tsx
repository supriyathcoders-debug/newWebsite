"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { ABOUT, IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-28 section-shell bg-[#fdfbf7]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Text column */}
        <StaggerReveal className="order-2 lg:order-1">
          <StaggerItem>
            <Eyebrow className="mb-6">{ABOUT.eyebrow}</Eyebrow>
            <SectionHeading className="mb-8 text-[#0b0f19]">
              {ABOUT.heading}{" "}
              <em className="italic text-brand font-light">{ABOUT.headingEm}</em>
            </SectionHeading>
          </StaggerItem>
          {ABOUT.paragraphs.map((p) => (
            <StaggerItem key={p.slice(0, 30)}>
              <p className="text-[0.95rem] text-slate-500 leading-[1.95] font-light mb-6">
                {p}
              </p>
            </StaggerItem>
          ))}
          <StaggerItem>
            {/* Subtle credential strip */}
            <div className="mt-4 flex items-center gap-3 border-l-2 border-brand pl-5">
              <p className="text-[0.78rem] text-slate-400 font-light leading-relaxed">
                Founder-led · 25+ years of experience · Direct access — no junior handoffs
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Image column */}
        <StaggerReveal className="order-1 lg:order-2">
          <StaggerItem>
            <BrandImage
              src={IMAGES.agencyProfessionalWoman}
              alt="Grateful Marketing — founder-led AI marketing consultancy"
              className="max-w-[460px] shadow-[0_16px_60px_rgba(11,15,25,0.1)] w-full mx-auto"
              aspectRatio="3/4"
            />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
