import type { Metadata } from "next";
import TestimonialsSection from "@/components/testimonials-section";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients say about working with Grateful Marketing.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28">
      <section className="section-fade">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <StaggerReveal>
            <StaggerItem>
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Testimonials
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-5 font-heading text-5xl font-semibold tracking-tight sm:text-6xl">Testimonials</h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 max-w-2xl text-lg text-muted">What our clients say about working with Grateful Marketing.</p>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <TestimonialsSection hideHeading />
    </div>
  );
}
