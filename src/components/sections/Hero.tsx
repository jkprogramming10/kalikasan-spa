import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getBookingChannel, getBookingHref, siteConfig } from "@/data/site";
import { images } from "@/lib/images";

const ritualNames = ["Haplos", "Suob", "Ventosa", "Hot Stone", "Body Scrubs", "Infrared Sauna"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft sage glow behind the image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-20%] size-[40rem] rounded-full bg-sage/25 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 pt-10 pb-16 sm:pt-14 md:grid-cols-12 md:gap-8 lg:gap-10 lg:pt-20 lg:pb-24">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="flex animate-rise items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold-text uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-gold" />
            {siteConfig.tagline}
          </p>

          <h1
            id="hero-title"
            className="mt-6 animate-rise font-display text-[clamp(2.5rem,1.6rem+4.5vw,4.6rem)] leading-[1.02] font-medium text-balance text-forest [animation-delay:120ms]"
          >
            Come home to the <em className="font-normal text-gold-text">healing touch</em> of nature.
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-pretty text-deep/75 [animation-delay:240ms]">
            Traditional Filipino therapies such as haplos, suob and ventosa, offered in a calm sanctuary of rattan,
            greenery and warm light.
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:flex-wrap">
            <ButtonLink href={getBookingHref()}>Book an Appointment</ButtonLink>
            <ButtonLink href="#services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
          {getBookingChannel() === "facebook" && (
            <p className="mt-4 animate-rise text-sm text-balance text-deep/70 [animation-delay:420ms]">
              Bookings are handled through our official Facebook page.
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none lg:col-span-6 lg:pl-8">
          {/* Arch: 50% of the width and 40% of the 4:5 height gives a true semicircle,
              without inflating the radii so much that the rounded bottom corners collapse. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem] bg-cream [border-top-left-radius:50%_40%] [border-top-right-radius:50%_40%] shadow-[0_30px_60px_-30px_rgba(30,42,34,0.45)]">
            <Image
              src={images.treatmentRoom.src}
              alt={images.treatmentRoom.alt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, (min-width: 768px) 38vw, 24rem"
              className="object-cover object-[60%_center]"
            />
          </div>

          <div className="absolute -bottom-6 -left-2 hidden w-36 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:block md:-left-6 md:w-32 lg:-left-4 lg:w-48">
            <Image
              src={images.signatureMassage.src}
              alt={images.signatureMassage.alt}
              placeholder="blur"
              sizes="12rem"
              className="aspect-square h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>

      <div className="border-y border-forest/10 bg-cream/60">
        <Container>
          <ul
            aria-label="Signature therapies"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 py-5 font-display text-lg text-forest/90 italic sm:gap-x-10 sm:text-xl"
          >
            {ritualNames.map((name, index) => (
              <li key={name} className="flex items-center gap-10">
                {/* Separators only appear once the list fits on a single line. */}
                {index > 0 && (
                  <span aria-hidden="true" className="hidden text-gold not-italic lg:inline">
                    ✦
                  </span>
                )}
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
