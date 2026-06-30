import TestimonialsSection from "@/components/testimonials-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

export default function AIVoiceAgentsPage() {
  return (
    <div className="overflow-x-hidden pt-16">
      <section className="min-h-[80vh] flex items-center section-shell pt-24 pb-24 relative overflow-hidden page-backdrop">
        <div className="relative z-10 max-w-[840px] mx-auto text-center w-full">
          <StaggerReveal>
            <StaggerItem>
              <div className="inline-flex items-center gap-3 mb-10 justify-center">
                <span className="w-11 h-px bg-brand flex-shrink-0" />
                <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">
                  AI Voice Agents & Automation
                </span>
                <span className="w-11 h-px bg-brand flex-shrink-0" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[1.06] mb-8">
                Stress Less.
                <br />
                <em className="italic text-brand font-light">Scale Smarter.</em>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-[620px] mx-auto text-base font-light leading-[1.86] text-muted mb-12">
                We help exhausted executives streamline operations, eliminate wasted
                time, and scale revenue — without hiring more staff or working
                longer hours.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
                <a
                  href="/pre-booking"
                  className="inline-block no-underline bg-brand text-white font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 border-2 border-brand transition-all hover:bg-brand-dark"
                >
                  Book Free Strategy Session
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-brand/20 bg-white/80 backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
                <span className="font-heading text-6xl text-brand/20 leading-none block mb-2">
                  &ldquo;
                </span>
                <p className="font-light italic text-muted text-[0.95rem] leading-relaxed mb-6">
                  Within 30 days, we cut time spent on paperwork and follow-up in
                  half and increased our bookings by 40%. The system practically runs
                  itself — it&apos;s like having another team member without the extra
                  overhead.
                </p>
                <div className="text-brand font-medium text-sm">
                  — Operations Director, Healthcare Clinic
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-28 section-shell">
          <StaggerReveal>
            <StaggerItem>
              <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
                <span className="w-7 h-px bg-brand" />
                The Problem
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">
                Most executives don&apos;t fail because of bad ideas.{" "}
                <em className="italic text-brand">They fail because of...</em>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base text-muted leading-[1.88] font-light max-w-[600px] mb-16">
                If you&apos;re like most of our clients, you&apos;re working harder
                than ever — but growth feels slower than it should.
              </p>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-subtle">
            {[
              { emoji: "⏳", title: "Messy systems that can't scale" },
              { emoji: "📉", title: "Manual follow-up that lets leads slip away" },
              { emoji: "⚙️", title: "Too much operations, not enough growth" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white p-10 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full" />
                  <div className="text-3xl mb-5">{item.emoji}</div>
                  <h3 className="font-heading text-xl font-semibold leading-tight mb-3">{item.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <ScrollReveal>
            <div className="mt-12 text-lg text-foreground font-light max-w-3xl border-l-[3px] border-brand pl-6">
              That&apos;s where we come in. We help you build smart systems that run
              in the background so your business works — even when you&apos;re not.
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-28 section-shell bg-brand-soft">
          <StaggerReveal>
            <StaggerItem>
              <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
                <span className="w-7 h-px bg-brand" />
                The Solution
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-16">
                We Can Help You{" "}
                <em className="italic text-brand font-light">Even If...</em>
              </h2>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-subtle border border-border-subtle">
            {[
              "You're overwhelmed by repetitive admin tasks that eat up your time.",
              "Your leads are slipping through the cracks because follow-up is inconsistent.",
              "You're stuck working in the business instead of on the business.",
              "You want to grow but can't imagine adding more hours — or more staff.",
            ].map((text) => (
              <StaggerItem key={text}>
                <div className="bg-white p-10 flex flex-col items-start hover:bg-brand/5 transition">
                  <span className="text-brand mb-4">◆</span>
                  <p className="text-[0.93rem] text-muted leading-relaxed font-light">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-28 section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <StaggerReveal>
              <StaggerItem>
                <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-6">
                  <span className="w-7 h-px bg-brand" />
                  Meet Your Expert
                </div>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-heading text-4xl font-semibold mb-6">
                  Hi, I&apos;m <span className="italic text-brand">Andrea.</span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-4 text-muted font-light leading-[1.8]">
                  <p>
                    For over 25 years I&apos;ve helped businesses identify hidden
                    revenue opportunities, eliminate inefficiencies, and create
                    systems that run like clockwork.
                  </p>
                  <p>
                    Like many of my clients, I know what it&apos;s like to feel pulled
                    in too many directions. Early in my career, I spent more time
                    chasing leads and juggling low-value tasks than actually serving
                    clients. That&apos;s when I realized — growth at scale
                    doesn&apos;t come from working harder. It comes from building
                    smarter systems.
                  </p>
                  <p>Today, I specialize in helping leaders:</p>
                  <ul className="list-none space-y-2 mt-4 ml-2">
                    <li className="flex gap-3">
                      <span className="text-brand">◆</span> Create simple, repeatable
                      processes that free up their time
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand">◆</span> Put follow-up and
                      scheduling on autopilot
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand">◆</span> Build businesses that
                      scale without burning them out
                    </li>
                  </ul>
                </div>
              </StaggerItem>
              <StaggerItem>
                <a
                  href="/pre-booking"
                  className="inline-block mt-8 text-[0.77rem] tracking-[0.12em] uppercase bg-brand text-white border-2 border-brand px-8 py-3 transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark hover:-translate-y-0.5"
                >
                  Let&apos;s Connect
                </a>
              </StaggerItem>
            </StaggerReveal>

            <StaggerReveal>
              <StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-subtle">
                  {[
                    { title: "System Setup & Automation", desc: "Put repetitive tasks on autopilot so you and your team can focus on real growth." },
                    { title: "Lead Management & Follow-Up", desc: "Never lose another opportunity with automated tracking, reminders, and client touchpoints." },
                    { title: "Client Onboarding Flows", desc: "Deliver a smooth, professional first impression that builds trust from day one." },
                    { title: "Booking Systems", desc: "Make it effortless for clients to book time with you, no back-and-forth needed." },
                  ].map((item) => (
                    <div key={item.title} className="bg-brand-soft p-8">
                      <h4 className="font-heading text-lg font-medium text-brand mb-2">{item.title}</h4>
                      <p className="text-[0.8rem] text-muted font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="section-shell pt-28 pb-4 max-w-[720px] mx-auto text-center">
          <StaggerReveal>
            <StaggerItem>
              <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
                <span className="w-7 h-px bg-brand" />
                Client Stories
                <span className="w-7 h-px bg-brand" />
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12]">
                Trusted by leaders who{" "}
                <em className="italic text-brand font-light">scale with voice AI.</em>
              </h2>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </ScrollReveal>
      <TestimonialsSection hideHeading categoryFilter="AI Voice Agents" />

      <ScrollReveal>
        <section className="py-24 section-shell bg-brand-soft border-t border-border text-center">
          <StaggerReveal>
            <StaggerItem>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-6">
                And finally <em className="italic text-brand font-light">scale smarter?</em>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-base text-muted leading-relaxed font-light max-w-2xl mx-auto mb-12">
                Book your complimentary strategy call today to see how our certified AI
                consultants can transform your business.
              </p>
            </StaggerItem>
            <StaggerItem>
              <a
                href="/pre-booking"
                className="inline-block bg-brand text-white font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-8 py-4 transition-all duration-300 hover:bg-brand-dark hover:-translate-y-1"
              >
                Book My Strategy Call
              </a>
            </StaggerItem>
          </StaggerReveal>
        </section>
      </ScrollReveal>
    </div>
  );
}
