"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import Link from "next/link";

const SERVICE_ITEMS = [
  {
    title: "AI Revenue Engine™",
    description:
      "Automated lead capture, qualification, and appointment booking system powered by AI.",
    href: "/ai-revenue-audit",
  },
  {
    title: "AI Strategy & Consulting",
    description:
      "Strategic planning to prioritize highest ROI AI opportunities across your business.",
    href: null,
  },
  {
    title: "AI Training & Implementation",
    description:
      "Hands-on rollout support and team upskilling for sustainable AI adoption.",
    href: null,
  },
  {
    title: "AI Voice Agents",
    description:
      "24/7 AI call handling and conversion workflows to prevent missed revenue.",
    href: "/ai-voice-agents",
  },
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = useMemo(() => SERVICE_ITEMS, []);

  const maxIndex = Math.max(0, items.length - slidesPerView);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > currentIndex ? 1 : -1);
      setCurrentIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [currentIndex, maxIndex],
  );

  const next = useCallback(() => {
    if (currentIndex < maxIndex) goTo(currentIndex + 1);
    else goTo(0);
  }, [currentIndex, maxIndex, goTo]);

  const prev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
    else goTo(maxIndex);
  }, [currentIndex, maxIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = items.slice(currentIndex, currentIndex + slidesPerView);
  const padded =
    visible.length < slidesPerView
      ? [...visible, ...items.slice(0, slidesPerView - visible.length)]
      : visible;

  return (
    <div>
      <section className="section-fade">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <StaggerReveal>
            <StaggerItem>
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Services
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-5 font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
                Four Pillars to Build Your AI Growth Engine
              </h1>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <Section
        title="Service Pillars"
        description="Choose a focused engagement or combine services into a full-funnel AI growth partnership."
      >
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {padded.map((service) => {
                const CardTag = service.href ? Link : "div";
                return (
                  <div
                    key={service.title}
                    className="bg-white border border-black/6 p-8 relative overflow-hidden transition-all duration-300 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] hover:-translate-y-1 group flex flex-col"
                  >
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />
                    <h3 className="font-heading text-[1.2rem] font-semibold leading-tight mb-3 text-[#0b0f19]">
                      {service.title}
                    </h3>
                    <p className="text-[0.88rem] leading-[1.85] font-light text-slate-500 flex-1">
                      {service.description}
                    </p>
                    {service.href && (
                      <Link
                        href={service.href}
                        className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline"
                      >
                        Learn more about {service.title.toLowerCase()}
                      </Link>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {items.length > slidesPerView && (
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1 transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-brand"
                        : "w-4 bg-black/10 hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous services"
                  className="w-11 h-11 border border-black/10 flex items-center justify-center text-slate-400 transition-all hover:border-brand hover:text-brand hover:bg-brand/5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next services"
                  className="w-11 h-11 border border-black/10 flex items-center justify-center text-slate-400 transition-all hover:border-brand hover:text-brand hover:bg-brand/5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </Section>

      <Section title="Let&rsquo;s Build Your Roadmap">
        <div className="flex flex-wrap gap-3">
          <CtaButton href="/ai-revenue-audit">Get Your AI Revenue Audit</CtaButton>
          <CtaButton href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" variant="secondary">
            See Demo
          </CtaButton>
          <CtaButton href="/pre-booking" variant="secondary">
            Book a Strategy Call
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}
