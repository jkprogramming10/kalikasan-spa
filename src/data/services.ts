import { images, type SpaImage } from "@/lib/images";

/**
 * Treatment menu. All names and descriptions are taken from Kalikasan Spa's
 * own service posters (services/ folder), published on its Facebook page.
 * Durations are listed only where a poster states one.
 *
 * Prices are optional and currently empty because none are publicly listed.
 * Prices change often: add them here (e.g. price: "₱000") only once the business
 * confirms them, and they will appear on the menu automatically.
 */

export interface Service {
  id: string;
  name: string;
  /** Short English descriptor shown beneath the Filipino name. */
  kind: string;
  description: string;
  duration?: string;
  /** Display price, e.g. "₱000". Leave undefined until confirmed. */
  price?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  intro: string;
  image: SpaImage;
  services: readonly Service[];
}

export const serviceCategories: readonly ServiceCategory[] = [
  {
    id: "massage",
    title: "Massage",
    intro: "Hands-on haplos rituals, from gentle and soothing to deep and restorative.",
    image: images.hotStone,
    services: [
      {
        id: "haplos-ng-kalikasan",
        name: "Haplos ng Kalikasan",
        kind: "Signature massage",
        description:
          "Our signature massage uses kneading and gentle stretching techniques to ease muscle pain, reduce stress and fatigue, and improve flexibility.",
      },
      {
        id: "haplos-ng-kaginhawaan",
        name: "Haplos ng Kaginhawaan",
        kind: "Relaxing massage",
        description:
          "Long, soothing strokes that calm body and mind, helping to reduce stress, ease muscle tension and improve sleep.",
      },
      {
        id: "haplos-ng-kagalingan",
        name: "Haplos ng Kagalingan",
        kind: "Therapeutic deep tissue massage",
        description:
          "A therapeutic deep tissue massage that combines suob with targeted reflexology points to relieve pain, tension and stress.",
      },
      {
        id: "hot-stone-massage",
        name: "Hot Stone Massage",
        kind: "Warm stone therapy",
        description:
          "Warm stones help relieve muscle tension, ease joint pain and stress, and promote deeper relaxation and better sleep.",
      },
    ],
  },
  {
    id: "traditional",
    title: "Traditional Therapies",
    intro: "Time-honoured practices of herbal steam and cupping.",
    image: images.ventosa,
    services: [
      {
        id: "suob",
        name: "Suob",
        kind: "Filipino herbal steam therapy",
        description:
          "A traditional Filipino steam therapy valued for deep relaxation and cleansing, and for comfort during colds and postpartum recovery.",
      },
      {
        id: "ventosa",
        name: "Ventosa",
        kind: "Cupping therapy",
        duration: "45 minutes",
        description:
          "Warmed glasses are applied along the back meridians, creating a gentle vacuum on the skin.",
      },
      {
        id: "moving-ventosa",
        name: "Moving Ventosa",
        kind: "Moving cupping therapy",
        description:
          "Helps relieve muscle tension, improve circulation, promote relaxation and support recovery.",
      },
    ],
  },
  {
    id: "scrubs",
    title: "Body Scrubs",
    intro: "Natural scrubs paired with massage, for skin that feels refreshed and renewed.",
    image: images.roseScrub,
    services: [
      {
        id: "busilak-ng-kalikasan",
        name: "Busilak ng Kalikasan",
        kind: "Moringa scrub with massage",
        description:
          "Combines the exfoliating power of salt with nutrient-rich moringa to refresh, detoxify and nourish the skin.",
      },
      {
        id: "haplos-ng-kakisigan",
        name: "Haplos ng Kakisigan",
        kind: "Coffee scrub with aromatherapy",
        description:
          "A natural coffee exfoliant, followed by a full-body massage that leaves you completely relaxed and renewed.",
      },
      {
        id: "haplos-ng-kagandahan",
        name: "Haplos ng Kagandahan",
        kind: "Rose petal scrub with aromatherapy",
        description:
          "Rose petals leave skin soft, glowing and refreshed while the calming aroma soothes the senses. Finished with a full-body massage.",
      },
    ],
  },
  {
    id: "sauna",
    title: "Sauna",
    intro: "Warmth that invites you to slow down.",
    image: images.saunaGuests,
    services: [
      {
        id: "infrared-sauna",
        name: "Infrared Sauna",
        kind: "Heat therapy",
        description: "Unwind in the gentle, enveloping warmth of our infrared sauna.",
      },
    ],
  },
];

export const allServices: readonly Service[] = serviceCategories.flatMap(
  (category) => category.services,
);
