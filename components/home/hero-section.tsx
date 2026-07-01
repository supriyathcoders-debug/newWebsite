"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BOOKING_URL } from "@/lib/constants";
import { HERO, IMAGES } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#23004c]" aria-hidden="true">
        <img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-center sm:object-cover sm:object-[60%_center] lg:object-[68%_center]"
        />
        {/* Decorative glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] blob-gold opacity-30" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] blob-purple opacity-40" aria-hidden="true" />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#23004c] via-[#23004c]/85 to-transparent sm:from-[#23004c] sm:via-[#23004c]/88 sm:to-[#23004c]/40 lg:via-[#23004c]/75 lg:to-[#23004c]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23004c]/80 via-[#23004c]/15 to-[#23004c]/30 sm:from-[#23004c]/85 sm:to-[#23004c]/45" />
      </div>

      <div className="relative z-10 w-full section-shell pt-28 pb-24 lg:pt-32 lg:pb-28">
        <StaggerReveal className="max-w-[640px]">
          <StaggerItem>
            <Eyebrow className="mb-8">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] mb-8 text-gold-gradient">
              {HERO.headline}{" "}
              <em className="italic not-italic font-light">{HERO.headlineEm}</em>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-10">
              {HERO.supporting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center gap-5 flex-wrap">
              <PremiumButton href={BOOKING_URL}>
                {HERO.ctaPrimary}
              </PremiumButton>
              <PremiumButton href={HERO.ctaSecondaryHref} variant="secondary">
                {HERO.ctaSecondary}
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
