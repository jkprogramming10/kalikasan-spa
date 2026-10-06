import { Container } from "@/components/ui/Container";
import { CreditedPhoto } from "@/components/ui/CreditedPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const pillars = [
  {
    title: "Our philosophy",
    body: "Wellness should feel like coming home. Every treatment begins with slowing down, so body and mind can rest together.",
  },
  {
    title: "Our space",
    body: "Woven rattan lanterns, capiz windows, batik textiles and lush greenery create a calm, welcoming retreat from the day.",
  },
] as const;

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-cream/60 py-20 sm:py-28 lg:py-32">
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
        <div className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <CreditedPhoto
            image={images.reception}
            sizes="(min-width: 1024px) 28rem, (min-width: 768px) 38vw, 24rem"
            imageClassName="rounded-[1.75rem]"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            id="about-title"
            eyebrow="About Kalikasan Spa"
            tone="tinted"
            title={
              <>
                A sanctuary named for <em className="font-normal text-gold-text">nature</em>
              </>
            }
          />

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-pretty text-deep/75">
            <p>
              <em className="font-display text-xl text-forest">Kalikasan</em> means &ldquo;nature&rdquo; in Filipino, and
              it is the spirit behind everything we do. Our treatments draw on traditional Filipino healing, from the
              rhythmic strokes of haplos to fragrant suob steam, using natural ingredients like moringa, coffee and rose
              petals.
            </p>
            <p>
              We put great emphasis on cultural diversity and the traditional values of our country. We call it our{" "}
              <span className="text-forest">Place of Happiness</span>: somewhere to set the world aside, breathe deeply
              and leave feeling lighter than when you arrived.
            </p>
          </div>

          <dl className="mt-10 grid gap-8 border-t border-forest/15 pt-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="font-display text-2xl font-medium text-forest">{pillar.title}</dt>
                <dd className="mt-2 leading-relaxed text-deep/75">{pillar.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
