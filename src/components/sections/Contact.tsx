import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBookingChannel, getBookingHref, getBookingInstructions, siteConfig, toTelHref } from "@/data/site";

const PENDING = "To be announced";

function Pending() {
  return <span className="text-deep/70">{PENDING}</span>;
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-forest/15 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <dt className="text-xs font-semibold tracking-[0.2em] text-gold-text uppercase sm:pt-1">{label}</dt>
      <dd className="text-lg text-deep">{children}</dd>
    </div>
  );
}

const linkClass =
  "underline decoration-gold/60 underline-offset-4 transition-colors hover:text-forest hover:decoration-forest";

export function Contact() {
  const { address, locality, phone, email, mapsUrl } = siteConfig.contact;
  const { hours } = siteConfig;
  const { facebook, messenger } = siteConfig.links;
  const channel = getBookingChannel();

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="contact-title"
            eyebrow={locality ? `Visit Us in ${locality}` : "Visit Us"}
            title="We look forward to welcoming you"
            intro="Reach out to book a treatment or ask about our services. Our team will be happy to help you plan your visit."
          />

          <dl className="mt-10 border-t border-forest/15">
            <DetailRow label="Address">
              {address ? (
                <address className="not-italic">{address}</address>
              ) : locality ? (
                <>
                  <span>{locality}</span>
                  <span className="mt-1 block text-base text-deep/70">Full street address to be announced</span>
                </>
              ) : (
                <Pending />
              )}
              {address && mapsUrl && (
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`mt-2 block text-base ${linkClass}`}>
                  Get directions<span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </DetailRow>
            <DetailRow label="Phone">
              {phone ? (
                <a href={toTelHref(phone)} className={linkClass}>
                  {phone}
                </a>
              ) : (
                <Pending />
              )}
            </DetailRow>
            <DetailRow label="Email">
              {email ? (
                <a href={`mailto:${email}`} className={linkClass}>
                  {email}
                </a>
              ) : (
                <Pending />
              )}
            </DetailRow>
            <DetailRow label="Hours">
              {hours && hours.length > 0 ? (
                <ul className="space-y-1">
                  {hours.map((entry) => (
                    <li key={entry.days} className="flex flex-wrap justify-between gap-x-6">
                      <span>{entry.days}</span>
                      <span className="text-deep/75">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <Pending />
              )}
            </DetailRow>
          </dl>
        </div>

        <div
          className="surface-dark self-start rounded-[1.75rem] bg-forest p-6 text-ivory min-[400px]:p-8 sm:p-10 lg:col-span-5 lg:mt-24"
        >
          <h3 id="booking-title" className="font-display text-3xl font-medium">
            Ready for your visit?
          </h3>
          <p className="mt-4 leading-relaxed text-ivory/80">
            Choose your treatment and book ahead to secure your preferred time. {getBookingInstructions()}
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href={getBookingHref()} variant="light">
              Book an Appointment
            </ButtonLink>
            {phone && (
              <ButtonLink href={toTelHref(phone)} variant="outline-light">
                Call {phone}
              </ButtonLink>
            )}
            {messenger && channel !== "messenger" && (
              <ButtonLink href={messenger} variant="outline-light">
                Message Us
              </ButtonLink>
            )}
            {facebook && channel !== "facebook" && (
              <ButtonLink href={facebook} variant="outline-light">
                Visit Our Facebook Page
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
