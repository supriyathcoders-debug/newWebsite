import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Andrea and the mission behind Grateful Marketing™.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Page hero */}
      <section className="section-shell py-20 bg-[#fdfbf7] border-b border-black/5">
        <div className="mx-auto w-full max-w-6xl">
          <StaggerReveal>
            <StaggerItem>
              <p className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-medium mb-6">
                <span className="w-7 h-px bg-brand" />
                About Grateful Marketing™
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] text-[#0b0f19] max-w-3xl">
                Founder-Led. <em className="italic text-brand font-light">Purpose-Driven.</em> AI-Powered.
              </h1>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <Section
        title="Andrea's Story"
        description="Andrea Gureckas founded Grateful Marketing™ after seeing the same pattern across service businesses: strong demand, but inconsistent lead follow-up and lost sales opportunities. She built a premium AI automation agency to solve the conversion bottlenecks that silently drain revenue."
      />

      <Section
        className="bg-[#f8fafc]"
        title="Our Mission"
        description="Our mission is simple: help businesses capture and convert more of the leads they already have through practical, high-performance AI systems that work every day."
      />

      <Section
        title="Why Clients Trust Us"
        description="We combine strategic consulting with implementation support, so you get both the roadmap and the execution. Every system is designed around one goal: booked revenue."
      >
        <div className="flex flex-wrap gap-4">
          <CtaButton href="/services">Explore Services</CtaButton>
          <CtaButton href="/contact" variant="secondary">
            Contact Us
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}
