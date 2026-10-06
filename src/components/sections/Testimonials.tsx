import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";

/**
 * Renders real, permission-confirmed testimonials from src/data/testimonials.ts.
 * While that list is empty, it shows an honest placeholder instead of
 * invented reviews.
 */
export function Testimonials() {
  const facebookUrl = siteConfig.links.facebook;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="testimonials-title"
          eyebrow="Guest Stories"
          title="Kind words from our guests"
          align="center"
        />

        {testimonials.length > 0 ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <li
                key={`${testimonial.name}-${testimonial.quote.slice(0, 24)}`}
                className="flex flex-col rounded-[1.75rem] border border-forest/10 bg-white/60 p-8"
              >
                <figure className="flex h-full flex-col">
                  <span aria-hidden="true" className="font-display text-6xl leading-none text-gold">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 font-display text-xl leading-relaxed text-deep">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-forest/10 pt-4 text-sm">
                    <span className="font-semibold text-forest">{testimonial.name}</span>
                    <span className="text-deep/70"> · via {testimonial.source}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-[1.75rem] border border-forest/15 bg-cream/50 px-5 py-10 text-center sm:px-12 sm:py-12">
            <span aria-hidden="true" className="font-display text-6xl leading-none text-gold">
              &ldquo;
            </span>
            <p className="mt-2 font-display text-2xl leading-snug text-balance text-forest sm:text-3xl">
              Reserved for stories shared with permission.
            </p>
            <p className="mt-4 leading-relaxed text-deep/75">
              Alongside the feedback guests share on Facebook, this space will feature selected testimonials that our guests have personally invited us to publish.
            </p>
            {facebookUrl && (
              <div className="mt-8">
                <ButtonLink href={facebookUrl} variant="secondary">
                  Visit Our Facebook Page
                </ButtonLink>
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
