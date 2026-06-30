"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#gratitude", label: "GRATITUDE" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#industries", label: "Industries" },
  { href: "/#platform", label: "Platform" },
  { href: "/ai-voice-agents", label: "Voice Agents" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }, [pathname]);

  return (
    <>
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="hidden peer"
        onChange={(e) => setIsOpen(e.target.checked)}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 animate-[slide-down_0.7s_cubic-bezier(0.16,1,0.3,1)_both] ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(11,15,25,0.08)] border-b border-black/5"
            : "bg-white/80 backdrop-blur-sm border-b border-black/4"
        }`}
      >
        <div className="flex items-center justify-between px-[6vw] py-4 relative">
          {/* Logo */}
          <Link href="/" className="relative z-[10001] flex items-center group">
            <img
              src="/logo.png"
              alt="Grateful Marketing Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.72rem] font-medium tracking-[0.11em] uppercase text-slate-500 no-underline transition-colors duration-200 hover:text-brand relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS"
            className="hidden lg:inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-white bg-brand border border-brand px-6 py-2.5 no-underline transition-all duration-300 hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_4px_20px_rgba(157,126,53,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a Call
          </a>

          {/* Mobile Hamburger */}
          <label
            htmlFor="mobile-menu-toggle"
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 -mr-2 relative z-[10001] cursor-pointer"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 pointer-events-none">
              <span className="w-6 h-0.5 bg-[#0b0f19] transition-all duration-200 origin-center" />
              <span className="w-6 h-0.5 bg-[#0b0f19] transition-all duration-200" />
              <span className="w-6 h-0.5 bg-[#0b0f19] transition-all duration-200 origin-center" />
            </div>
          </label>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          #mobile-menu-toggle:checked ~ nav label span:nth-child(1) { transform: rotate(45deg) translateY(7px); }
          #mobile-menu-toggle:checked ~ nav label span:nth-child(2) { opacity: 0; }
          #mobile-menu-toggle:checked ~ nav label span:nth-child(3) { transform: rotate(-45deg) translateY(-7px); }
        ` }} />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-white/98 backdrop-blur-lg transition-opacity duration-300 lg:hidden flex flex-col items-center justify-start pt-32 pb-16
          opacity-0 invisible pointer-events-none peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto"
      >
        <ul className="list-none p-0 flex flex-col items-center gap-8 w-full px-6 mb-16 overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.href} className="w-full text-center border-b border-black/5 pb-8">
              <a
                href={item.href}
                className="text-2xl font-heading font-medium tracking-widest text-[#0b0f19] no-underline hover:text-brand block py-2 mobile-nav-link transition-colors duration-200"
                onClick={() => {
                  const checkbox = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
                  if (checkbox) checkbox.checked = false;
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="w-full px-12 mt-auto">
          <a
            href="https://api.growthhub365.com/widget/booking/UCd9cjMN2XGBd1qvKuyS"
            className="block w-full text-sm font-semibold tracking-widest uppercase text-white bg-brand px-8 py-5 no-underline text-center mobile-nav-link transition-all duration-300 hover:bg-brand-dark"
          >
            Book Your Call
          </a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          document.addEventListener('click', function(e) {
            var link = e.target.closest('.mobile-nav-link');
            if (link) {
              var cb = document.getElementById('mobile-menu-toggle');
              if (cb) cb.checked = false;
            }
          });
        })();
      ` }} />
    </>
  );
}
