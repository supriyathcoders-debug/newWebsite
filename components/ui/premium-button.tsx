import Link from "next/link";

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function PremiumButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: PremiumButtonProps) {
  const base =
    "inline-flex items-center justify-center no-underline font-semibold text-[0.74rem] tracking-[0.13em] uppercase px-10 py-4 transition-all duration-300";

  const variants = {
    primary:
      "bg-brand text-white border-2 border-brand hover:bg-brand-dark hover:border-brand-dark hover:shadow-[0_8px_32px_rgba(157,126,53,0.40)] hover:-translate-y-0.5 active:translate-y-0 btn-shine",
    secondary:
      "bg-transparent text-foreground border border-foreground/20 hover:border-brand hover:text-brand hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-brand border border-brand/50 px-7 py-3 hover:bg-brand hover:text-white hover:border-brand hover:-translate-y-0.5",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
