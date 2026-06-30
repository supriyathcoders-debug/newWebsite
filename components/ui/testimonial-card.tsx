import React from "react";
import { Testimonial } from "@/lib/testimonials";

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <article className="h-full flex flex-col p-8 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] group">
      {/* Animated gold top line */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />

      {/* Quote mark */}
      <div className="text-brand/30 mb-4 text-3xl leading-none select-none font-heading">
        &ldquo;
      </div>

      <div className="flex-1">
        <p className="text-[0.88rem] text-slate-600 leading-[1.88] font-light">
          {item.quote}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-black/6">
        <div className="text-[0.88rem] font-semibold text-[#0b0f19]">{item.name}</div>
        <div className="text-[0.72rem] text-slate-400 mt-0.5 font-light">
          {item.title}
        </div>
        {item.industry && (
          <div className="text-[0.65rem] text-brand/70 mt-2 tracking-[0.08em] uppercase font-medium">
            {item.industry}
          </div>
        )}
      </div>
    </article>
  );
}

export default TestimonialCard;
