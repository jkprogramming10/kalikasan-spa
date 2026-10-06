import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBookingHref } from "@/data/site";
import { images } from "@/lib/images";

// Based on the Haplos ng Kagalingan service poster.
const elements = [
  {
    name: "Deep tissue massage",
    detail: "Works deep into the muscles to release tension and improve mobility.",
  },
  {
    name: "Suob herbal steam",
    detail: "Traditional Filipino steam that helps ease respiratory discomfort.",
  },
  {
    name: "Targeted reflexology",
    detail: "Pressure on key reflexology points to help reduce pain and stress.",
  },
] as const;

export function FeaturedExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="surface-dark relative overflow-hidden bg-forest py-20 text-ivory sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 size-[36rem] rounded-full bg-sage/15 blur-3xl"
      />

      <Container className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9]">
          <Image
            src={images.suob.src}
            alt={images.suob.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1152px) 70rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              id="experience-title"
              eyebrow="Featured Experience"
              title="Haplos ng Kagalingan"
              tone="dark"
            />
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-sage uppercase">
              Therapeutic deep tissue massage
            </p>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-ivory/80">
              This healing ritual brings three practices together. A therapeutic deep tissue massage is
              combined with suob, the traditional Filipino herbal steam, and targeted reflexology points on the body.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={getBookingHref()} variant="light">
                Book This Experience
              </ButtonLink>
              <ButtonLink href="#services" variant="outline-light">
                View Full Menu
              </ButtonLink>
            </div>
          </div>

          <ol className="space-y-px lg:col-span-6">
            {elements.map((element, index) => (
              <li key={element.name} className="flex gap-6 border-t border-ivory/15 py-7 last:border-b">
                <span aria-hidden="true" className="w-10 shrink-0 font-display text-3xl text-gold italic">
                  {["I", "II", "III"][index]}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-balance">{element.name}</h3>
                  <p className="mt-2 leading-relaxed text-ivory/75">{element.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
