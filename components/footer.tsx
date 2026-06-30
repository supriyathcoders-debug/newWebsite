"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Newsletter — modern gradient section */}
      <section className="relative px-[6vw] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf7] via-[#f8fafc] to-[#fdfbf7]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />
        
        <div className="max-w-[1200px] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 md:p-12 border border-brand/20 bg-white/80 backdrop-blur-sm shadow-[0_8px_40px_rgba(11,15,25,0.08)] rounded-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="text-brand text-xs tracking-[0.2em] uppercase font-semibold mb-3 block">
                      Newsletter
                    </span>
                    <h3 className="font-heading text-3xl font-semibold text-[#0b0f19] mb-3">
                      Stay ahead with AI insights
                    </h3>
                    <p className="text-slate-500 text-sm font-light max-w-md leading-relaxed">
                      Practical strategies, industry trends, and exclusive tools — straight to your inbox.
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex w-full lg:w-auto gap-4"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 lg:w-80 px-6 py-4 border border-black/10 text-[#0b0f19] placeholder-slate-400 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white rounded-sm"
                  />
                  <button className="px-8 py-4 bg-brand text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap rounded-sm btn-shine">
                    Subscribe
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0f1424] px-[6vw] pt-20 pb-12 relative overflow-hidden">
        {/* Premium gold gradient orbs with animation */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand/4 rounded-full blur-3xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/3 rounded-full blur-3xl pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Top gold accent with animation */}
        <motion.div
          className="flex items-center gap-4 mb-16 max-w-[1200px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
          <motion.div
            className="w-2.5 h-2.5 rotate-45 bg-brand flex-shrink-0"
            animate={{
              rotate: [45, 225, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
        </motion.div>

        {/* Main grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-12 pb-16 border-b border-white/10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/" className="block mb-6 group">
              <svg viewBox="0 0 180 40" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" aria-label="Grateful Marketing Logo">
                <g fill="#ffffff">
                  <path d="M8 4 L12 12 L20 16 L12 20 L8 28 L4 20 L-4 16 L4 12 Z" transform="translate(4,0)" opacity="0.7" />
                  <path d="M8 4 L12 12 L20 16 L12 20 L8 28 L4 20 L-4 16 L4 12 Z" transform="translate(0,0)" />
                  <text x="32" y="22" fontFamily="serif" fontSize="15" fontWeight="600" letterSpacing="3">GRATEFUL</text>
                  <text x="32" y="35" fontFamily="sans-serif" fontSize="9" fontWeight="300" letterSpacing="4" opacity="0.7">MARKETING</text>
                </g>
              </svg>
            </Link>
            <p className="text-brand text-[0.68rem] tracking-[0.22em] uppercase mb-5 font-medium">
              Innovating · Creating · Leading™
            </p>
            <p className="text-white text-sm leading-relaxed font-light max-w-sm opacity-80">
              Premium human-first AI consultancy serving legal, financial, insurance, B2B, and service-based businesses through the proprietary GRATITUDE™ methodology.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-brand text-xs tracking-[0.2em] uppercase font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {["AI Business Consulting", "Marketing Strategy & Deployment", "AI Team Training", "AI Voice Agents"].map((item, index) => (
                <li key={item}>
                  <Link
                    href={item === "AI Voice Agents" ? "/ai-voice-agents" : "/#services"}
                    className="text-white text-sm no-underline font-light transition-all duration-300 hover:text-brand hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-brand text-xs tracking-[0.2em] uppercase font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "GRATITUDE Framework", href: "/#gratitude" },
                { label: "About Andrea", href: "/#about" },
                { label: "Industries", href: "/#industries" },
                { label: "AI Platform", href: "/#platform" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white text-sm no-underline font-light transition-all duration-300 hover:text-brand hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-brand text-xs tracking-[0.2em] uppercase font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              {[
                { label: "LinkedIn", href: "#", icon: "in" },
                { label: "Instagram", href: "#", icon: "ig" },
                { label: "Facebook", href: "#", icon: "fb" },
              ].map((social) => (
                <li key={social.label}>
                  <a href={social.href} className="text-white text-sm no-underline font-light transition-all duration-300 hover:text-brand hover:translate-x-1 inline-flex items-center gap-2 group">
                    <span className="w-0 h-px bg-brand transition-all duration-300 group-hover:w-4" />
                    {social.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <a href="mailto:client-services@grateful-marketing.com" className="text-white text-sm no-underline font-light transition-all duration-300 hover:text-brand block">
                  client-services@grateful-marketing.com
                </a>
              </li>
              <li>
                <a href="tel:+12263329712" className="text-white text-sm no-underline font-light transition-all duration-300 hover:text-brand block">
                  +1 (226) 332-9712
                </a>
              </li>
              <li className="pt-2">
                <span className="text-white text-xs font-light opacity-50">North America</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="opacity-50">© {new Date().getFullYear()} Grateful Marketing™. All rights reserved. North America.</span>
          <span className="text-brand opacity-60">Gratitude™ is a globally registered trademark of Grateful Marketing™.</span>
        </motion.div>

        {/* Image attribution */}
        <motion.div
          className="max-w-[1200px] mx-auto mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-[10px] text-white/30 font-light leading-relaxed">
            Images sourced from Unsplash under the Unsplash License (free for commercial use). Photographers: Ilya Pavlov, Moe Magners, LinkedIn Sales Solutions, You X Ventures, Headway, Austin Distel.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
