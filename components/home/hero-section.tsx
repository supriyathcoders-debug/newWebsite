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
        {/* Left: text readability · lighter on mobile so background logo stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#23004c]/88 via-[#23004c]/55 to-transparent sm:from-[#23004c]/96 sm:via-[#23004c]/72 sm:to-[#23004c]/15 lg:via-[#23004c]/45 lg:to-[#23004c]/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23004c]/70 via-transparent to-[#23004c]/20 sm:from-[#23004c]/75 sm:to-[#23004c]/35" />
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
