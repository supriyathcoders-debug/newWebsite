"use client";

import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({ href, children, variant = "primary" }: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const variantClasses =
    variant === "primary"
      ? "border-brand bg-brand text-white shadow-[0_12px_28px_rgba(157,126,53,0.28)] hover:bg-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)]"
      : "border-border bg-transparent text-foreground hover:border-brand hover:text-brand";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
