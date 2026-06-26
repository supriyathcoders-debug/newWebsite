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
      className="relative min-h-[92vh] flex items-center section-shell pt-28 pb-24 overflow-hidden"
    >
      {/* Full-width background per visual map */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={IMAGES.heroGoldSilhouette}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23004c]/97 via-[#23004c]/88 to-[#23004c]/55 lg:to-[#23004c]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23004c]/80 via-transparent to-[#23004c]/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
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
