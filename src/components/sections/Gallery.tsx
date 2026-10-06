import { Container } from "@/components/ui/Container";
import { CreditedPhoto } from "@/components/ui/CreditedPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type SpaImage } from "@/lib/images";

// Clean photos only. Interior shots carrying a third-party watermark are not used.
const galleryImages: readonly SpaImage[] = [
  images.facialMassage,
  images.massageHands,
  images.suobChair,
  images.signatureMassage,
  images.coffeeScrub,
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
          intro="Unhurried hands, natural scrubs of coffee and moringa, and quiet corners set for rest. A glimpse of the care that awaits you."
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
