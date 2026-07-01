import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export function Card({ title, description, href }: CardProps) {
  const content = (
    <>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <h3 className="font-heading text-xl font-semibold leading-tight mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-[1.82] font-light text-muted">
        {description}
      </p>
    </>
  );

  const className =
    "card-modern group p-10 relative overflow-hidden";

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
