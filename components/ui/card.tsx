import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export function Card({ title, description, href }: CardProps) {
  const content = (
    <>
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-light to-brand transition-all duration-500 group-hover:w-full"></div>
      <h3 className="font-heading text-[1.2rem] font-semibold leading-tight mb-3 text-[#0b0f19]">{title}</h3>
      <p className="text-[0.88rem] leading-[1.85] font-light text-slate-500">{description}</p>
    </>
  );

  const className = "block p-10 bg-white border border-black/6 relative overflow-hidden transition-all duration-300 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(11,15,25,0.08)] hover:-translate-y-1 group";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <article className={className}>
      {content}
    </article>
  );
}
