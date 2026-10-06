import { Container } from "@/components/ui/Container";
import { CreditedPhoto } from "@/components/ui/CreditedPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type SpaImage } from "@/lib/images";

// Three tall interiors and three square treatment shots, ordered so that each
// masonry column on desktop holds one of each and the columns stay balanced.
const galleryImages: readonly SpaImage[] = [
  images.lounge,
  images.facialMassage,
  images.waterWall,
  images.coffeeScrub,
  images.saunaRoom,
  images.moringaScrub,
];

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-cream/60 py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="gallery-title"
          eyebrow="The Atmosphere"
          tone="tinted"
          title="Step inside our sanctuary"
          intro="Warm light through woven lanterns, the hush of a water wall, the scent of herbs and oils. A glimpse of the space that awaits you."
          align="center"
        />

        <div className="mt-12 columns-1 gap-3 min-[360px]:columns-2 sm:mt-14 sm:gap-5 lg:columns-3 lg:gap-6">
          {galleryImages.map((image) => (
            <CreditedPhoto
              key={image.src.src}
              image={image}
              sizes="(min-width: 1024px) 23rem, (min-width: 360px) 46vw, 92vw"
              className="mb-3 break-inside-avoid sm:mb-5 lg:mb-6"
              imageClassName="rounded-2xl"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
