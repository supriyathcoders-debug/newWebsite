"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BOOKING_URL } from "@/lib/constants";
import { HERO, IMAGES } from "@/lib/content/home";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Light warm backdrop with gold glow */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#fdfcf9]" aria-hidden="true">
        {/* Hero image — right side */}
        <motion.img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_center] sm:object-[55%_center] lg:object-[60%_center]"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
        />
        {/* Elegant left-to-right fade: warm white → transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf9]/98 via-[#fdfcf9]/75 to-[#fdfcf9]/10 sm:from-[#fdfcf9]/95 sm:via-[#fdfcf9]/70 sm:to-[#fdfcf9]/5 lg:via-[#fdfcf9]/55 lg:to-[#fdfcf9]/0" />
        {/* Subtle top-bottom fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcf9]/40 via-transparent to-[#fdfcf9]/30" />
        {/* Subtle radial gold glow near the image */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Decorative geometric accent */}
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border border-brand/10 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full section-shell pt-32 pb-28 lg:pt-36 lg:pb-32">
        <StaggerReveal className="max-w-[660px]">
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-brand/40" />
                <Eyebrow>{HERO.eyebrow}</Eyebrow>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.h1
              className="font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.05] mb-8 text-[#0b0f19]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {HERO.headline}{" "}
              <motion.em
                className="italic text-brand font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {HERO.headlineEm}
              </motion.em>
            </motion.h1>
          </StaggerItem>

          <StaggerItem>
            <motion.p
              className="max-w-[520px] text-[1rem] font-light leading-[1.88] text-slate-500 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {HERO.supporting}
            </motion.p>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="flex items-center gap-5 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <PremiumButton href={BOOKING_URL} external>
                {HERO.ctaPrimary}
              </PremiumButton>
              <PremiumButton href={HERO.ctaSecondaryHref} variant="secondary">
                {HERO.ctaSecondary}
              </PremiumButton>
            </motion.div>
          </StaggerItem>

          {/* Trust signal */}
          <StaggerItem>
            <motion.div
              className="mt-16 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="w-8 h-px bg-brand/40" aria-hidden="true" />
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-slate-400 font-light">
                Est. 2022 · North American AI Consultancy · Trademarked Methodology
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
