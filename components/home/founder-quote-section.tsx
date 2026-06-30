"use client";

import { motion } from "framer-motion";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { FOUNDER_QUOTE, IMAGES } from "@/lib/content/home";

export function FounderQuoteSection() {
  return (
    <section id="quote" className="py-28 section-shell bg-[#fdfbf7]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
        {/* Founder image — desktop only */}
        <StaggerReveal className="hidden md:block h-full">
          <StaggerItem className="h-full">
            <div className="relative overflow-hidden rounded-sm bg-[#fdfbf7] shadow-[0_16px_60px_rgba(11,15,25,0.1)] h-full min-h-0">
              {/* Gold top bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30 z-10 origin-left"
                aria-hidden="true"
              />
              <img
                src={IMAGES.founderStrategicReflection}
                alt="Strategic reflection — Andrea, Founder of Grateful Marketing"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Quote block */}
        <StaggerReveal>
          <StaggerItem>
            <div className="border border-brand/15 bg-white shadow-[0_8px_48px_rgba(11,15,25,0.07)] px-10 py-14 md:px-14 md:py-16 relative overflow-hidden glass-effect">
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-brand to-transparent" aria-hidden="true" />

              <span
                className="font-heading text-7xl text-brand/15 leading-none block mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-heading text-[clamp(1.1rem,2vw,1.5rem)] italic leading-[1.72] text-slate-600 mb-8">
                {FOUNDER_QUOTE}
              </blockquote>
              <DiamondDivider className="max-w-[180px] mb-7 opacity-50" />
              <footer>
                <cite className="not-italic">
                  <div className="text-[0.9rem] font-semibold text-[#0b0f19]">Andrea</div>
                  <div className="text-[0.75rem] text-slate-400 mt-1 font-light tracking-wide">
                    Founder & CEO, Grateful Marketing™
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
