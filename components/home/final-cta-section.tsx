"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";
import { FINAL_CTA, IMAGES } from "@/lib/content/home";

export function FinalCtaSection() {
  return (
    <section
      id="consultation"
      className="py-28 section-shell bg-[#fdfbf7] relative overflow-hidden"
    >
      {/* Decorative gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/8 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" aria-hidden="true" />

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        {/* Text + CTA */}
        <StaggerReveal>
          <StaggerItem>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-brand mb-5 font-medium">
              {FINAL_CTA.tagline}
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.08] mb-8 text-[#0b0f19]">
              Ready to grow with{" "}
              <em className="italic text-brand font-light">purpose?</em>
            </h2>
            <p className="text-[0.95rem] text-slate-500 font-light leading-[1.9] mb-10 max-w-[440px]">
              {FINAL_CTA.body}
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300 bg-brand text-white border-2 border-brand hover:bg-brand-light hover:border-brand-light hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)]"
              >
                {FINAL_CTA.ctaPrimary}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-px bg-brand/30" aria-hidden="true" />
              <p className="text-[0.68rem] tracking-[0.16em] uppercase text-slate-400 font-light">
                No commitment required · 30-minute session
              </p>
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Image */}
        <StaggerReveal>
          <StaggerItem>
            <BrandImage
              src={IMAGES.writingNextChapter}
              alt="Writing the next chapter — begin your Grateful Marketing journey"
              frame="gold"
              className="max-w-[460px] shadow-[0_16px_48px_rgba(11,15,25,0.10)] w-full mx-auto"
              aspectRatio="3/4"
            />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
