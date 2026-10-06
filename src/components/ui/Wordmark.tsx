interface WordmarkProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Text-only rendering of the "Kalikasan Spa" name. It mirrors the stacked
 * layout of the official logo (name, rule, "SPA") without redrawing the
 * lotus artwork, so it cannot be mistaken for a new logo.
 */
export function Wordmark({ tone = "light", className = "" }: WordmarkProps) {
  const color = tone === "dark" ? "text-ivory" : "text-forest";

  return (
    <span className={`inline-flex flex-col items-center leading-none ${color} ${className}`}>
      <span className="font-display text-[1.45rem] font-semibold tracking-[0.2em] uppercase">Kalikasan</span>
      <span aria-hidden="true" className="mt-1 h-px w-full bg-current opacity-40" />
      <span className="mt-1.5 text-[0.6rem] font-semibold tracking-[0.55em] uppercase opacity-80">Spa</span>
    </span>
  );
}
