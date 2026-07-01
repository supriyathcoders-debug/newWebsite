"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

const SERVICE_ITEMS = [
  {
    number: "01",
    title: "AI Business Consulting",
    description:
      "Your people deserve a strategy built around them — not around the technology. We sit with your team, learn how you actually work, and build a clear AI roadmap that serves your goals and protects what makes you worth choosing.",
    tags: ["AI Readiness Audits", "Strategic Roadmaps", "ROI Modeling", "Change Management", "Competitive Analysis"],
    href: null,
  },
  {
    number: "02",
    title: "Marketing Strategy & Deployment",
    description:
      "Your customers want to feel understood — not marketed to. We design and deploy end-to-end marketing systems that attract the right people, earn their trust, and convert consistently, with AI doing the heavy lifting so your voice stays unmistakably yours.",
    tags: ["Smart Content Systems", "Automated Lead Generation", "AI Automation", "Campaign Management", "Seamless CRM Integration"],
    href: null,
  },
  {
    number: "03",
    title: "AI Team Training & Empowerment",
    description:
      "Your people aren't the obstacle — they're the whole point. We designed our training around them first: their worries, their roles, their potential. By the end, they don't just use AI confidently. They lead with it.",
    tags: ["Interactive Workshops", "Hands-On Training", "AI Tool Adoption", "Ongoing Support", "Custom Curricula"],
    href: null,
  },
  {
    number: "04",
    title: "AI Voice Agents",
    description:
      "Every missed call is a real person who needed you and didn't reach you. Our voice agents answer every inquiry with genuine warmth — day, night, and weekends — so no one ever feels ignored.",
    tags: ["24/7 Availability", "Lead Qualification", "Intelligent Routing", "Warm Handoffs"],
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
    <div className="overflow-x-hidden">
      <section className="section-fade pt-28 pb-12 section-shell">
        <StaggerReveal>
          <StaggerItem>
            <p className="inline-flex rounded-full bg-brand-soft/40 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand">
              Services
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 font-heading text-5xl font-semibold tracking-tight sm:text-6xl text-foreground">
              Five Pillars. Four Services.
              <br />
              <span className="font-light">One human-first philosophy.</span>
            </h1>
          </StaggerItem>
        </StaggerReveal>
      </section>

      <Section
        title="Service Pillars"
        description="The 5 Pillars of Gratitude™ — Time, Gratitude, Innovation, Productivity, and Potential — are the foundation everything is built on. Our four core services are how we deliver them."
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {padded.map((service) => (
                <div
                  key={service.title}
                  className="bg-surface border border-border p-8 relative overflow-hidden transition-all duration-300 hover:border-brand/40 hover:-translate-y-1 group flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />
                  <span className="font-heading text-[0.75rem] text-brand/40 mb-3 font-medium tracking-wider">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-[1.2rem] font-semibold leading-tight mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.85] font-light text-muted flex-1 mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] tracking-[0.06em] uppercase text-brand/60 bg-brand-soft/30 px-3 py-1.5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.href && (
                    <Link
                      href={service.href}
                      className="mt-auto inline-flex text-sm font-semibold text-brand hover:underline"
                    >
                      Learn more about {service.title.toLowerCase()}
                    </Link>
                  )}
                </div>
              ))}
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
                        : "w-4 bg-white/10 hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous services"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-muted transition-all hover:border-brand hover:text-brand hover:bg-brand/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next services"
                  className="w-11 h-11 border border-white/10 flex items-center justify-center text-muted transition-all hover:border-brand hover:text-brand hover:bg-brand/10"
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
          <CtaButton href="/demo" variant="secondary">
            Meet Your AI Employee Demo
          </CtaButton>
          <CtaButton href="/pre-booking" variant="secondary">
            Book a Strategy Call
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}
