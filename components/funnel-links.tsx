import { CtaButton } from "@/components/ui/cta-button";

const funnelLinks = [
  {
    title: "Get Your AI Revenue Audit",
    href: "/ai-revenue-audit",
  },
  {
    title: "Meet Your AI Employee Demo",
    href: "/demo",
  },
  {
    title: "Book a Strategy Call",
    href: "/pre-booking",
  },
];

export function FunnelLinks() {
  return (
    <div className="border border-border-subtle bg-surface p-10 relative overflow-hidden">
      <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
        <span className="w-7 h-px bg-brand"></span>
        Choose Your Next Step
      </div>
      <h3 className="font-heading text-2xl font-bold leading-tight mb-3 text-foreground">Choose Your Next Step</h3>
      <p className="text-sm leading-[1.82] font-light text-muted mb-7">Start wherever you are. Every path begins with a real conversation.</p>
      <div className="grid gap-3">
        {funnelLinks.map((funnel) => (
          <CtaButton key={funnel.title} href={funnel.href}>
            {funnel.title}
          </CtaButton>
        ))}
      </div>
    </div>
  );
}
