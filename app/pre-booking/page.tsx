import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";

export default function PreBookingPage() {
  const formUrl = "https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand/30 overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="py-20 px-[6vw] text-center relative overflow-hidden page-backdrop">
        <StaggerReveal className="max-w-[1170px] mx-auto relative z-10">
          <StaggerItem>
            <div className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-11 h-px bg-brand flex-shrink-0" />
              <span className="text-[0.68rem] tracking-[0.24em] uppercase text-brand font-normal">
                Book Your Strategy Session
              </span>
              <span className="w-11 h-px bg-brand flex-shrink-0" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="space-y-4">
              <h1 className="font-heading text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.08] text-[#0b0f19]">
                Unlock Your Next Level <br /> of Growth —
                <br />
                <em className="italic text-brand font-light">in 30 Minutes or Less!</em>
              </h1>
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-3xl mx-auto text-[1.05rem] font-light text-slate-500 leading-[1.88]">
              Book your complimentary strategy session and discover how to streamline your business, close more deals, and free up hours every week—using a proven blend of strategy, automation, and the right AI tools.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="pt-6 flex justify-center">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300 bg-brand text-white border-2 border-brand hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Schedule My Strategy Session
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="pt-8 flex justify-center w-full max-w-[480px] mx-auto">
              <div className="w-full" style={{ aspectRatio: "3/2" }}>
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/47981b93-3931-445b-bf43-5777f8a88470.png" 
                  alt="Growth Graph" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <ScrollReveal>
        <section className="bg-[#fdfbf7]">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto">
            <div className="relative min-h-[400px] lg:min-h-[700px] overflow-hidden">
               <div 
                 className="absolute inset-0 w-full h-full bg-cover bg-center"
                 style={{ 
                   backgroundImage: 'url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/d7f8f960-e0e4-469d-aeb7-b0fae472de4f.jpeg)',
                 }}
               />
            </div>
            
            <StaggerReveal className="py-20 px-[8vw] lg:px-[6vw] flex flex-col justify-center space-y-6">
              <StaggerItem>
                <span className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal">
                  <span className="w-7 h-px bg-brand" />
                  The Problem
                </span>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-[#0b0f19] leading-[1.2]">
                  If you&apos;re like most consultants, you&apos;re working harder than ever — but growth feels slower than it should.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-[0.95rem] text-slate-500 font-light">You know there&apos;s so much potential in your business, but:</p>
              </StaggerItem>
              <StaggerItem>
                <ul className="space-y-4">
                  {[
                    "Your systems are messy or too manual",
                    "You&apos;re wasting too much time doing things that don&apos;t generate revenue",
                    "Sales opportunities keep slipping through the cracks",
                    "Scaling feels too overwhelming (and expensive)"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-[0.95rem] text-slate-600 font-light">
                      <span className="text-brand flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem>
                <p className="text-[0.95rem] font-medium text-[#0b0f19] pt-4">It doesn&apos;t have to be this way.</p>
              </StaggerItem>
              <StaggerItem>
                <div className="pt-4">
                  <a 
                    href={formUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300 bg-brand text-white border-2 border-brand hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)]"
                  >
                    Schedule My Strategy Session
                  </a>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: THE PROMISE */}
      <ScrollReveal>
        <section className="py-24 px-[6vw] bg-white">
          <StaggerReveal className="max-w-[1170px] mx-auto text-center space-y-16">
            <StaggerItem>
              <span className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center">
                <span className="w-7 h-px bg-brand" />
                What You&apos;ll Gain
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold text-[#0b0f19] leading-tight">
                In this complimentary strategy session, I&apos;ll help you:
              </h2>
            </StaggerItem>
            <StaggerItem>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-6 text-left">
                  {[
                    { t: "Pinpoint the #1 bottleneck slowing your growth", h: "#1 bottleneck" },
                    { t: "Get clarity on where to focus first for maximum impact", h: "where to focus first" },
                    { t: "Learn how the right AI-powered systems can save you hours every week", h: "save you hours every week" },
                    { t: "Walk away with a clear, actionable plan to hit your next revenue milestone—without adding more stress or overhead", h: "clear, actionable plan" }
                  ].map((item, i) => {
                    const parts = item.t.split(item.h);
                    return (
                      <li key={i} className="flex gap-5 items-start text-[1rem] font-light text-slate-500 leading-relaxed">
                        <span className="text-brand flex-shrink-0 mt-1.5">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                        </span>
                        <span>
                          {parts[0]}<span className="text-brand font-semibold">{item.h}</span>{parts[1]}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </section>
      </ScrollReveal>

      {/* SECTION 4: MEET ANDREA */}
      <ScrollReveal>
        <section className="py-24 px-[6vw] bg-[#f8fafc]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <StaggerReveal className="space-y-8 flex flex-col justify-center order-2 lg:order-1">
              <StaggerItem>
                <span className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal">
                  <span className="w-7 h-px bg-brand" />
                  Meet Your Expert
                </span>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-4 text-[1rem] sm:text-[1.1rem] font-light text-slate-500 leading-[1.88]">
                  <p>For over 25+ years, I&apos;ve helped business owners identify hidden revenue opportunities, eliminate inefficiencies, and create systems that run like</p>
                  <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-semibold text-[#0b0f19] mt-2">clockwork.</h2>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="space-y-4 text-[0.92rem] text-slate-500 font-light leading-[1.88]">
                  <p>My approach blends proven growth strategy with smart automation and AI tools—so you can scale without sacrificing your time, your energy, or your client experience.</p>
                  <p>Whether you&apos;re just trying to create consistency or you&apos;re ready to go after your next big revenue leap, this session will show you the most direct path forward.</p>
                  <p className="font-medium text-[#0b0f19]">Every month you wait is another month stuck in the same cycle—and the cost of doing nothing is higher than you think:</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <ul className="space-y-3">
                  {["Lost deals", "Wasted hours", "Burnt-out teams", "Stalled revenue"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-center text-[0.92rem] text-slate-600 font-light">
                       <span className="w-2 h-2 rounded-full bg-brand"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem>
                <div className="pt-4">
                    <a 
                      href={formUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300 bg-brand text-white border-2 border-brand hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Book My Strategy Session
                    </a>
                </div>
              </StaggerItem>
            </StaggerReveal>

            <StaggerReveal>
              <StaggerItem>
                <div className="relative order-1 lg:order-2">
                  <div className="border border-brand/20 bg-[#fdfbf7] shadow-[0_4px_24px_rgba(11,15,25,0.06)] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30 z-10" />
                    <div className="w-full" style={{ aspectRatio: "3/2" }}>
                      <img 
                        src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/zUZd380lxhqjQgVX8jRh/media/ac4e8ce0-f746-448c-91c7-5d98643f4214.jpeg" 
                        alt="Andrea Strategy" 
                  className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: INDUSTRIES SERVED */}
      <ScrollReveal>
        <section className="py-24 px-[6vw] bg-white">
          <div className="max-w-[1170px] mx-auto">
            <StaggerReveal>
              <StaggerItem>
                <span className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center mb-6 w-full">
                  <span className="w-7 h-px bg-brand" />
                  Industries Served
                </span>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold text-[#0b0f19] text-center mb-16">
                  Expertise Across <em className="italic text-brand font-light">Industries</em>
                </h2>
              </StaggerItem>
            </StaggerReveal>
            
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { 
                  t: "B2B and DTC Companies", 
                  d: "Scale your revenue with precision. We implement AI-driven systems that streamline lead generation for B2B and optimize customer acquisition for DTC brands, ensuring your growth is both predictable and profitable.", 
                  icon: (
                    <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  )
                },
                { 
                  t: "Legal", 
                  d: "Scale your practice without increasing your overhead. We build compliant AI systems that automate intake, nurture leads, and manage client communications while maintaining the highest standards of professional trust.", 
                  icon: (
                    <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v4"/><path d="M12 16h.01"/>
                    </svg>
                  )
                },
                { 
                  t: "Financial & Insurance", 
                  d: "Drive consistent growth in highly regulated environments. We help advisors and firms build authority through intelligent content, automated lead scoring, and precision-targeted outreach.", 
                  icon: (
                    <svg className="w-16 h-16 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  )
                }
              ].map((industry, i) => (
                <StaggerItem key={i}>
                  <div className="flex flex-col items-center space-y-6 group p-8 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />
                    <div className="h-20 flex items-center justify-center">
                      {industry.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-heading text-[1.3rem] font-semibold text-[#0b0f19]">{industry.t}</h3>
                      <p className="text-[0.88rem] text-slate-500 font-light leading-relaxed">{industry.d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 6: TESTIMONIALS */}
      <ScrollReveal>
        <section className="py-24 px-[6vw] bg-[#fdfbf7]">
          <div className="max-w-[1170px] mx-auto">
            <StaggerReveal>
              <StaggerItem>
                <span className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal justify-center mb-6 w-full">
                  <span className="w-7 h-px bg-brand" />
                  Client Stories
                </span>
              </StaggerItem>
              <StaggerItem>
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-[#0b0f19] text-center mb-16">
                  Trusted by leaders who <em className="italic text-brand font-light">scale with purpose.</em>
                </h2>
              </StaggerItem>
            </StaggerReveal>
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { q: "Within 30 days, my team's admin workload was cut in half — and I booked 3 new clients.", n: "Founder, Law Firm" },
               { q: "My leads no longer slip away. The system follows up automatically and my calendar stays full.", n: "Managing Partner, Law Firm" },
               { q: "For the first time in years, I feel like my business is running me instead of me running it.", n: "Owner, Insurance Agency" }
             ].map((t, i) => (
               <StaggerItem key={i}>
                 <div className="p-8 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] group">
                   <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full" />
                   <div className="text-brand/30 mb-4 text-3xl leading-none select-none font-heading">&ldquo;</div>
                   <p className="text-[0.88rem] text-slate-600 leading-[1.88] font-light mb-6">&ldquo;{t.q}&rdquo;</p>
                   <div className="text-[0.82rem] font-medium text-[#0b0f19]">— {t.n}</div>
                 </div>
               </StaggerItem>
             ))}
            </StaggerReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 7: FINAL CTA */}
      <ScrollReveal>
        <section className="py-24 px-[6vw] bg-[#131a2e] relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/6 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/4 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" aria-hidden="true" />
          <StaggerReveal className="max-w-[700px] mx-auto relative z-10">
            <StaggerItem>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-brand/50 to-transparent mb-14 max-w-[300px] mx-auto" />
            </StaggerItem>
            <StaggerItem>
              <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white leading-[1.1] mb-6">
                Ready to scale with <em className="italic text-brand font-light">purpose?</em>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[0.95rem] text-white/75 font-light leading-[1.9] mb-10 max-w-[500px] mx-auto">
                Book your complimentary strategy session today. No commitment required — just clarity and a plan.
              </p>
            </StaggerItem>
            <StaggerItem>
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300 bg-brand text-white border-2 border-brand hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)]"
              >
                Book My Strategy Session
              </a>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-brand/30" aria-hidden="true" />
                <p className="text-[0.68rem] tracking-[0.16em] uppercase text-white/50 font-light">
                  No commitment required · 30-minute session
                </p>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </section>
      </ScrollReveal>

    </div>
  );
}
