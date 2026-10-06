import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facebookReels } from "@/data/videos";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4h5v5M16 4l-7 7M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3" />
    </svg>
  );
}

/**
 * Links to official Kalikasan Spa reels on Facebook. Nothing is embedded or
 * autoplayed; each card opens the reel on Facebook in a new tab.
 */
export function ExperienceKalikasan() {
  return (
    <section id="experience-kalikasan" aria-labelledby="videos-title" className="bg-cream/60 py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="videos-title"
          eyebrow="On Facebook"
          title="Experience Kalikasan"
          intro="Take a glimpse into the warmth, tranquility, and wellness experience at Kalikasan Spa."
          align="center"
          tone="tinted"
        />

        <ul className="mx-auto mt-12 grid max-w-sm gap-6 sm:mt-14 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {facebookReels.map((reel, index) => (
            <li
              key={reel.id}
              className={index === 2 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto" : ""}
            >
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-forest/15 bg-deep shadow-[0_24px_48px_-28px_rgba(30,42,34,0.55)] [outline-offset:4px]"
              >
                {/* Decorative spa photo, not a frame from the video (see note below the cards). */}
                <Image
                  src={reel.cover.src}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 22rem, (min-width: 640px) 46vw, 24rem"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/35 to-deep/10 transition-colors duration-500 group-hover:from-deep/95"
                />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="flex size-16 items-center justify-center rounded-full bg-ivory/95 text-forest shadow-lg ring-8 ring-ivory/20 transition-transform duration-500 group-hover:scale-110"
                  >
                    <PlayIcon />
                  </span>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-6 text-ivory sm:p-7">
                  <span className="block text-xs font-semibold tracking-[0.24em] text-sage uppercase">
                    Facebook Reel
                  </span>
                  <span className="mt-2 block font-display text-2xl leading-tight font-medium sm:text-3xl">
                    {reel.title}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ivory/90">
                    Watch on Facebook
                    <ExternalIcon />
                  </span>
                  <span className="sr-only"> (opens Facebook in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-deep/70">
          Videos play on the official Kalikasan Spa Facebook page. Card images are photos from the spa, not frames from
          the videos.
        </p>
      </Container>
    </section>
  );
}
