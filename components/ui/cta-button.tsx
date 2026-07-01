"use client";

import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({ href, children, variant = "primary" }: CtaButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  const classes = `${variantClasses} text-[0.82rem] px-6 py-3`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
