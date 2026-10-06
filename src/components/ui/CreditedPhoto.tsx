import Image from "next/image";

import type { SpaImage } from "@/lib/images";

interface CreditedPhotoProps {
  image: SpaImage;
  sizes: string;
  className?: string;
  imageClassName?: string;
}

/**
 * Shows a photo at its natural aspect ratio (never cropped) with a visible
 * photographer credit when one is set. Used for third-party photos so the
 * original watermark and attribution remain intact.
 */
export function CreditedPhoto({ image, sizes, className = "", imageClassName = "" }: CreditedPhotoProps) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        sizes={sizes}
        placeholder="blur"
        className={`h-auto w-full ${imageClassName}`}
      />
      {image.credit && (
        <figcaption className="mt-2 text-xs tracking-wide text-deep/70">Photo: {image.credit}</figcaption>
      )}
    </figure>
  );
}
