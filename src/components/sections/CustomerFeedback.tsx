import { Container } from "@/components/ui/Container";
import { FeedbackSlider } from "@/components/ui/FeedbackSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { feedbackItems } from "@/data/feedback";
import { siteConfig } from "@/data/site";

/**
 * Feedback graphics shared through Kalikasan Spa's Facebook presence, shown
 * exactly as published. They are presented as screenshots, not as verified ratings.
 */
export function CustomerFeedback() {
  const facebookUrl = siteConfig.links.facebook;

  return (
    <section id="feedback" aria-labelledby="feedback-title" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="feedback-title"
          eyebrow="Shared on Facebook"
          title="Customer Feedback"
          intro="See what guests have shared about their experiences at Kalikasan Spa."
          align="center"
        />

        <div className="mt-12 sm:mt-14">
          <FeedbackSlider items={feedbackItems} />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-deep/70">
          Customer feedback shared from Kalikasan Spa&rsquo;s Facebook presence, shown as originally published. These
          are screenshots, not independently verified ratings.
          {facebookUrl && (
            <>
              {" "}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-medium text-forest underline decoration-gold/60 underline-offset-4 transition-colors hover:decoration-forest"
              >
                Visit our Facebook page
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </>
          )}
        </p>
      </Container>
    </section>
  );
}
