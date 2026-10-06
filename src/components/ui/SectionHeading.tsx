import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /**
   * light: ivory background. tinted: cream background (eyebrow switches to
   * forest, because gold-text falls below AA contrast on cream). dark: forest/deep.
   */
  tone?: "light" | "tinted" | "dark";
}

/** Eyebrow label, serif title and optional intro used at the top of each section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";
  const eyebrowColor = dark ? "text-sage" : tone === "tinted" ? "text-forest" : "text-gold-text";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase ${
          centered ? "justify-center" : ""
        } ${eyebrowColor}`}
      >
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-sage/60" : "bg-gold"}`} />
        {eyebrow}
        {centered && <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-sage/60" : "bg-gold"}`} />}
      </p>
      <h2
        id={id}
        className={`mt-5 font-display text-[clamp(2rem,1.55rem+2.2vw,3rem)] leading-[1.08] font-medium text-balance ${
          dark ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? "text-ivory/80" : "text-deep/75"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
