import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Grateful Marketing™ and book a strategy call.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-white">
      {/* Page hero */}
      <section className="section-shell py-20 bg-[#fdfbf7] border-b border-black/5">
        <div className="mx-auto w-full max-w-6xl">
          <StaggerReveal>
            <StaggerItem>
              <p className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-medium mb-6">
                <span className="w-7 h-px bg-brand" />
                Contact
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] text-[#0b0f19] max-w-3xl mb-6">
                Let&apos;s Build Your{" "}
                <em className="italic text-brand font-light">AI Revenue System</em>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[1rem] text-slate-500 font-light leading-[1.88] max-w-xl">
                Share your goals and current challenges. We&apos;ll map out the fastest route to better lead conversion.
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <Section title="Prefer to Talk Live?">
        <div className="flex flex-wrap gap-4">
          <CtaButton href="/ai-revenue-audit">Get Your AI Revenue Audit</CtaButton>
          <CtaButton href="/pre-booking">Book a Strategy Call</CtaButton>
          <CtaButton href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" variant="secondary">
            See Demo
          </CtaButton>
        </div>
      </Section>

      <Section className="bg-[#f8fafc]" title="Other Ways to Reach Us">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:client-services@grateful-marketing.com"
            className="inline-flex items-center gap-3 text-[0.95rem] text-slate-600 no-underline font-medium hover:text-brand transition-colors group"
          >
            <span className="w-5 h-px bg-brand/40 group-hover:w-8 transition-all duration-300" />
            client-services@grateful-marketing.com
          </a>
          <a
            href="tel:+12263329712"
            className="inline-flex items-center gap-3 text-[0.95rem] text-slate-600 no-underline font-medium hover:text-brand transition-colors group"
          >
            <span className="w-5 h-px bg-brand/40 group-hover:w-8 transition-all duration-300" />
            +1 (226) 332-9712
          </a>
        </div>
      </Section>
    </div>
  );
}
