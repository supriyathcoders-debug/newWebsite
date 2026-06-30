"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { GRATITUDE, GRATITUDE_PILLARS, IMAGES } from "@/lib/content/home";
import { motion } from "framer-motion";

export function GratitudeFrameworkSection() {
  return (
    <section id="gratitude" className="py-28 section-shell bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        {/* Intro: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-20">
          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.heartCircuitGratitude}
                alt="The heart of Gratitude™ — human connection powered by AI"
                className="max-w-[460px] shadow-[0_8px_40px_rgba(11,15,25,0.06)] w-full mx-auto"
                aspectRatio="4/3"
              />
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{GRATITUDE.eyebrow}</Eyebrow>
              <SectionHeading className="mb-4 text-[#0b0f19]">{GRATITUDE.heading}</SectionHeading>
              <p className="text-[0.78rem] text-brand tracking-wide mb-6 font-medium uppercase">
                {GRATITUDE.subhead}
              </p>
              <p className="text-[0.95rem] text-slate-500 leading-[1.92] font-light">
                {GRATITUDE.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        {/* Pillars grid */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GRATITUDE_PILLARS.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <article className="group p-7 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] hover:-translate-y-1 h-full">
                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center gap-4 mb-4">
                  <motion.span
                    className="font-heading text-3xl font-bold text-brand leading-none"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.letter}
                  </motion.span>
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center border border-brand/20 text-brand bg-brand/5"
                    whileHover={{
                      backgroundColor: "var(--brand)",
                      color: "white",
                      scale: 1.15,
                      rotate: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <PillarIcon name={pillar.icon} className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
                <h3 className="font-heading text-[1.1rem] font-semibold mb-2 text-[#0b0f19] group-hover:text-brand-dark transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-[0.82rem] text-slate-500 leading-relaxed font-light">
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
