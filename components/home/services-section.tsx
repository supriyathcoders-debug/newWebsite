"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { SERVICES } from "@/lib/content/home";

export function ServicesSection() {
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

  const items = useMemo(() => SERVICES.items, []);

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
    <section id="services" className="py-28 section-shell">
      {/* Section header */}
      <StaggerReveal className="mb-16 max-w-[720px]">
        <StaggerItem>
          <Eyebrow className="mb-5">{SERVICES.eyebrow}</Eyebrow>
          <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-4 text-foreground">
            {SERVICES.heading}{" "}
            <em className="italic text-brand font-light">{SERVICES.headingEm}</em>{" "}
            {SERVICES.headingSuffix}
          </h2>
          <p className="text-[0.95rem] text-muted leading-[1.88] font-light max-w-[620px]">
            {SERVICES.intro}
          </p>
        </StaggerItem>
      </StaggerReveal>

      {/* Five Pillars graphic placeholder */}
      <StaggerReveal className="mb-16">
        <StaggerItem>
          <div className="p-8 border border-brand/20 bg-brand-soft/20 max-w-[800px]">
            <p className="text-[0.8rem] text-muted font-light mb-4">
              The 5 Pillars of Gratitude™ — Approved Reference Visual
            </p>
            <div className="grid grid-cols-5 gap-3">
              {["Time", "Gratitude", "Innovation", "Productivity", "Potential"].map((pillar) => (
                <div key={pillar} className="p-4 bg-surface border border-brand/15">
                  <div className="font-heading text-[0.7rem] font-semibold text-brand">
                    {pillar}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[0.65rem] text-muted/60 mt-4 font-light">
              ⚠️ Client asset required: Replace with day_5.png from Developer Handoff package
            </p>
          </div>
        </StaggerItem>
      </StaggerReveal>

      {/* Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-7"
          >
            {padded.map((service) => (
              <article
                key={service.title}
                className="group bg-surface border border-border hover:border-brand/40 transition-all duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 h-full flex flex-col overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full z-10" />

                <div className="overflow-hidden">
                  <BrandImage
                    src={service.image}
                    alt={service.imageAlt}
                    frame="subtle"
                    className="border-0 w-full"
                    aspectRatio="3/2"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <span className="font-heading text-[0.82rem] text-brand/50 mb-3 font-medium tracking-wider group-hover:text-brand transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="font-heading text-[1.3rem] font-semibold mb-3 text-foreground leading-tight group-hover:text-brand transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[0.88rem] text-muted leading-[1.85] font-light mb-4 flex-1">
                    {service.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.62rem] tracking-[0.06em] uppercase text-brand/60 bg-brand-soft/20 px-3 py-1.5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.href && (
                    <div className="mt-auto">
                      <PremiumButton href={service.href} variant="ghost">
                        Learn More
                      </PremiumButton>
                    </div>
                  )}
                </div>
              </article>
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
    </section>
  );
}
