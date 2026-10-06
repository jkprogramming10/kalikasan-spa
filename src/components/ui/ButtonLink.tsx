import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-ivory hover:bg-deep",
  secondary: "border border-forest/70 text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  light: "bg-ivory text-deep hover:bg-cream",
  "outline-light": "border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory hover:text-deep",
};

const sizes = {
  md: "min-h-12 px-5 py-3 min-[400px]:px-7",
  sm: "min-h-11 px-5 py-2.5",
} as const;

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
}

/**
 * A link styled as a button. Every call to action on this page navigates
 * (to a section, booking page or Messenger), so a real <a> is the correct element.
 */
export function ButtonLink({ href, variant = "primary", size = "md", className = "", children, ...props }: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase min-[400px]:text-[0.8rem] min-[400px]:tracking-[0.14em] transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
