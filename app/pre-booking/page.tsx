"use client";

import { useState } from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";

export default function PreBookingPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-12 section-shell text-center">
        <StaggerReveal>
          <StaggerItem>
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-11 h-px bg-brand" />
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">
                Book a Strategy Call
              </span>
              <span className="w-11 h-px bg-brand" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h1 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] text-foreground mb-6">
              Let&rsquo;s Build Your
              <br />
              <em className="italic text-brand font-light">AI Growth Roadmap</em>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base text-muted leading-[1.88] font-light max-w-[620px] mx-auto mb-2">
              Book your complimentary strategy session. We&rsquo;ll identify your biggest growth opportunities and build a clear, actionable plan — in 30 minutes.
            </p>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* Booking widget */}
      <section className="pb-28 section-shell">
        <div className="max-w-[800px] mx-auto border border-border bg-surface">
          {!loaded && (
            <div className="flex items-center justify-center py-32">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-brand/30 border-t-brand rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm text-muted font-light">Loading booking calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src={BOOKING_URL}
            className="w-full min-h-[700px] border-0"
            title="Book a Strategy Session"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </section>

      {/* Info section */}
      <section className="pb-28 section-shell">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="border border-border bg-surface p-8">
            <div className="text-brand font-heading text-3xl font-bold mb-3">25+</div>
            <p className="text-sm text-muted font-light">Years of business consulting experience</p>
          </div>
          <div className="border border-border bg-surface p-8">
            <div className="text-brand font-heading text-3xl font-bold mb-3">100%</div>
            <p className="text-sm text-muted font-light">Founder-led — you work directly with Andrea</p>
          </div>
          <div className="border border-border bg-surface p-8">
            <div className="text-brand font-heading text-3xl font-bold mb-3">✔</div>
            <p className="text-sm text-muted font-light">No obligation. No hard sell. Just real strategy.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
