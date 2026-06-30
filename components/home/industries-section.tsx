"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { INDUSTRIES, IMAGES } from "@/lib/content/home";
import { motion } from "framer-motion";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-28 section-shell bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-20">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{INDUSTRIES.eyebrow}</Eyebrow>
              <SectionHeading className="mb-6 text-[#0b0f19]">
                {INDUSTRIES.heading}
                <br />
                <em className="italic text-brand font-light">{INDUSTRIES.headingEm}</em>
              </SectionHeading>
              <p className="text-[0.95rem] text-slate-500 leading-[1.9] font-light">
                {INDUSTRIES.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.footprintsTurningToLight}
                alt="Footprints turning to light — transformation through purposeful AI"
                className="max-w-[460px] shadow-[0_12px_48px_rgba(11,15,25,0.08)] w-full mx-auto"
                aspectRatio="4/3"
              />
            </StaggerItem>
          </StaggerReveal>
        </div>

        {/* Industry cards */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.items.map((industry) => (
            <StaggerItem key={industry.title}>
              <article className="group p-8 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] hover:-translate-y-1 h-full">
                {/* Hover gold line */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />

                <motion.div
                  className="w-11 h-11 flex items-center justify-center border border-brand/20 text-brand bg-brand/5 mb-6"
                  whileHover={{
                    backgroundColor: "var(--brand)",
                    color: "white",
                    scale: 1.15,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <PillarIcon name={industry.icon} className="w-4 h-4" />
                </motion.div>
                <h3 className="font-heading text-[1.2rem] font-semibold mb-3 text-[#0b0f19] group-hover:text-brand-dark transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-[0.87rem] text-slate-500 leading-[1.85] font-light">
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
