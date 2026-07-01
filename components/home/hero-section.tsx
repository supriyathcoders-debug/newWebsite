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
      {/* Full-bleed background — contain on mobile so logo isn't cropped */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#23004c]" aria-hidden="true">
        <img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-center sm:object-cover sm:object-[60%_center] lg:object-[68%_center]"
        />
        {/* Blur overlay on left side for readability */}
        <div className="absolute left-0 top-0 bottom-0 w-[40%] sm:w-[35%] lg:w-[30%] backdrop-blur-[4px]" aria-hidden="true" />
        {/* Left: text readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#23004c]/95 via-[#23004c]/75 to-transparent sm:from-[#23004c]/96 sm:via-[#23004c]/82 sm:to-[#23004c]/30 lg:via-[#23004c]/65 lg:to-[#23004c]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23004c]/75 via-[#23004c]/10 to-[#23004c]/25 sm:from-[#23004c]/80 sm:to-[#23004c]/40" />
      </div>

      <div className="relative z-10 w-full section-shell pt-28 pb-24 lg:pt-32 lg:pb-28">
        <StaggerReveal className="max-w-[640px]">
          <StaggerItem>
            <Eyebrow className="mb-8">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] mb-8">
              {HERO.headline}{" "}
              <em className="italic text-brand font-light">{HERO.headlineEm}</em>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-10">
              {HERO.supporting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center gap-5 flex-wrap">
              <PremiumButton href={BOOKING_URL} external>
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
