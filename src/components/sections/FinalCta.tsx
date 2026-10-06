import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getBookingHref } from "@/data/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="surface-dark relative overflow-hidden bg-deep py-20 text-center text-ivory sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest blur-3xl"
      />
      <Container className="relative">
        <span aria-hidden="true" className="mx-auto block h-12 w-px bg-gold/70" />
        <h2 id="cta-title" className="mt-8 font-display text-[clamp(2.4rem,1.5rem+4.5vw,4.5rem)] leading-[1.05] font-medium text-balance">
          Your time to <em className="font-normal text-gold">unwind</em> is now.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
          Reserve your treatment and let nature&rsquo;s gentle touch do the rest.
        </p>
        <div className="mt-10">
          <ButtonLink href={getBookingHref()} variant="light">
            Book an Appointment
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
