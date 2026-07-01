"use client";

import Link from "next/link";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";

export function VoiceAgentsSection() {
  return (
    <section id="voice-agents" className="py-28 section-shell bg-brand-soft/20">
      <div className="max-w-[900px] mx-auto text-center">
        <StaggerReveal>
          <StaggerItem>
            <div className="inline-flex items-center gap-3 mb-8 justify-center">
              <span className="w-11 h-px bg-brand flex-shrink-0" />
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">
                AI Voice Agents
              </span>
              <span className="w-11 h-px bg-brand flex-shrink-0" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-6 text-foreground">
              Every missed call is a{" "}
              <em className="italic text-brand font-light">real person</em>{" "}
              who needed you.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base text-muted leading-[1.88] font-light max-w-[640px] mx-auto mb-4">
              Our voice agents answer every inquiry with genuine warmth — day, night, and weekends — so no one ever feels ignored, and your team focuses on the conversations that truly need a human.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <PremiumButton href="/ai-voice-agents">
                Explore AI Voice Agents
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
