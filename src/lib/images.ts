import type { StaticImageData } from "next/image";

import coffeeScrub from "@/assets/images/coffee-scrub.jpg";
import facialMassage from "@/assets/images/facial-massage.jpg";
import hotStone from "@/assets/images/hot-stone.jpg";
import massageHands from "@/assets/images/massage-hands.jpg";
import moringaScrub from "@/assets/images/moringa-scrub.jpg";
import movingVentosa from "@/assets/images/moving-ventosa.jpg";
import relaxingMassage from "@/assets/images/relaxing-massage.jpg";
import roseScrub from "@/assets/images/rose-scrub.jpg";
import saunaGuests from "@/assets/images/sauna-guests.jpg";
import signatureMassage from "@/assets/images/signature-massage.jpg";
import suob from "@/assets/images/suob.jpg";
import suobChair from "@/assets/images/suob-chair.jpg";
import treatmentRoom from "@/assets/images/treatment-room.jpg";
import treatmentRoomDetail from "@/assets/images/treatment-room-detail.jpg";
import ventosa from "@/assets/images/ventosa.jpg";

export interface SpaImage {
  src: StaticImageData;
  alt: string;
  /**
   * Photographer credit shown next to the image. Set for third-party photos
   * whose ownership has not been confirmed. Images with a credit are always
   * displayed uncropped so any watermark stays visible.
   */
  credit?: string;
}

/**
 * Every photo used on the site. Files in src/assets/images are generated from
 * the original folders by `npm run images` (see scripts/prepare-images.mjs).
 */
export const images = {
  treatmentRoom: {
    src: treatmentRoom,
    alt: "A Kalikasan Spa treatment room with a green-draped massage bed, a woven-print robe on a bamboo ladder and tall potted ferns",
  },
  treatmentRoomDetail: {
    src: treatmentRoomDetail,
    alt: "A massage bed draped in green with a woven-print robe hanging on a bamboo ladder",
  },
  facialMassage: {
    src: facialMassage,
    alt: "A guest relaxing with eyes closed during a gentle face and head massage",
  },
  signatureMassage: {
    src: signatureMassage,
    alt: "A therapist's hands massaging a guest's shoulder above a draped batik cloth",
  },
  hotStone: {
    src: hotStone,
    alt: "Smooth dark heated stones placed along a guest's back during a hot stone massage",
  },
  ventosa: {
    src: ventosa,
    alt: "A therapist placing a warmed glass cup on a guest's back during ventosa cupping",
  },
  suob: {
    src: suob,
    alt: "A wooden suob steam basin filled with herbal leaves, set beside a towel-draped chair",
  },
  roseScrub: {
    src: roseScrub,
    alt: "A therapist applying a rose petal scrub across a guest's back",
  },
  moringaScrub: {
    src: moringaScrub,
    alt: "Green moringa and salt scrub being massaged into a guest's back",
  },
  coffeeScrub: {
    src: coffeeScrub,
    alt: "A therapist's hand spreading a coffee scrub over a guest's shoulder",
  },
  saunaGuests: {
    src: saunaGuests,
    alt: "Two guests wrapped in towels smiling at each other inside the sauna",
  },
  relaxingMassage: {
    src: relaxingMassage,
    alt: "A therapist's hand resting on a guest's back during a relaxing massage",
  },
  movingVentosa: {
    src: movingVentosa,
    alt: "A therapist guiding a glass cup along a guest's back during moving ventosa",
  },
  massageHands: {
    src: massageHands,
    alt: "A therapist's hands working across a guest's shoulder blade",
  },
  suobChair: {
    src: suobChair,
    alt: "A wooden chair draped with a brown towel, a rolled green towel on its seat, beside leafy plants",
  },
} satisfies Record<string, SpaImage>;
