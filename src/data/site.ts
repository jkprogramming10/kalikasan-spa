/**
 * Central business information for Kalikasan Spa.
 *
 * Source of truth: the official Facebook page, https://www.facebook.com/kalikasanspa/
 * (public page data last reviewed 2026-10-06), reconciled with the business's
 * own image assets.
 *
 * Status legend used in the comments below:
 *   VERIFIED     Confirmed from the public Facebook page data.
 *   FROM ASSETS  Taken from the business's own artwork or posters.
 *   PLACEHOLDER  Not publicly available. Leave `null` until the business confirms it.
 *
 * The UI handles every `null` gracefully (it shows a neutral "to be announced"
 * message or hides the link), so values can be filled in one at a time without
 * touching any component. Structured data only includes non-null values.
 */

export interface OpeningHours {
  /** e.g. "Monday – Friday" */
  days: string;
  /** e.g. "10:00 AM – 10:00 PM" */
  time: string;
}

export interface Promotion {
  title: string;
  details: string;
  /** Optional ISO date (YYYY-MM-DD). The promotion is hidden after this date. */
  validUntil?: string;
}

export interface SiteConfig {
  name: string;
  /** Name exactly as shown on the official Facebook page. */
  facebookPageName: string;
  tagline: string;
  description: string;
  /** Short introduction published by the business on its Facebook page. */
  officialIntro: string;
  /** Production URL, used for canonical links, sitemap and Open Graph. */
  url: string;
  contact: {
    /** City or municipality only, when the full address is not published. */
    locality: string | null;
    /** Full street address. */
    address: string | null;
    phone: string | null;
    email: string | null;
    /** Link to Google Maps (or similar) for "Get directions". */
    mapsUrl: string | null;
  };
  hours: readonly OpeningHours[] | null;
  links: {
    /** Dedicated online booking page. Takes priority for every "Book" button. */
    booking: string | null;
    facebook: string | null;
    /** Messenger link. Used for booking when `booking` is null. */
    messenger: string | null;
  };
  /**
   * Current promotions. Prices and offers change often: keep this list short,
   * set `validUntil`, and remove entries once they end. Empty means no banner.
   */
  promotions: readonly Promotion[];
}

export const siteConfig: SiteConfig = {
  name: "Kalikasan Spa", // VERIFIED (Facebook page name and official logo)
  facebookPageName: "Kalikasan Spa | Marilao", // VERIFIED
  tagline: "Place of Happiness", // FROM ASSETS (official Facebook cover artwork)
  description:
    "Kalikasan Spa in Marilao offers traditional Filipino wellness, from signature haplos massage and suob herbal steam to ventosa cupping, natural body scrubs and an infrared sauna.",
  // VERIFIED: first sentence of the Facebook page intro (the rest is not public without login).
  officialIntro:
    "Kalikasan Spa puts great emphasis on cultural diversity and the traditional values of the country/region.",

  // PLACEHOLDER: set NEXT_PUBLIC_SITE_URL to the real domain before deploying.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    locality: "Marilao", // VERIFIED (Facebook page name "Kalikasan Spa | Marilao")
    address: null, // PLACEHOLDER: full street address (not publicly listed)
    phone: null, // PLACEHOLDER: not publicly listed (a number seen in a customer photo is unverified)
    email: null, // PLACEHOLDER: not publicly listed
    mapsUrl: null, // PLACEHOLDER: Google Maps link
  },

  hours: null, // PLACEHOLDER: not publicly listed

  links: {
    booking: null, // PLACEHOLDER: no dedicated booking page found
    facebook: "https://www.facebook.com/kalikasanspa/", // VERIFIED official page
    messenger: null, // PLACEHOLDER: Messenger link could not be verified
  },

  promotions: [], // None clearly presented as current on the public page
};

export type BookingChannel = "booking" | "messenger" | "facebook" | "contact";

/** Which official channel the "Book an Appointment" buttons use. */
export function getBookingChannel(): BookingChannel {
  const { booking, messenger, facebook } = siteConfig.links;
  if (booking) return "booking";
  if (messenger) return "messenger";
  if (facebook) return "facebook";
  return "contact";
}

/** Where every "Book an Appointment" button points. */
export function getBookingHref(): string {
  const { booking, messenger, facebook } = siteConfig.links;
  return booking ?? messenger ?? facebook ?? "#contact";
}

/** Short sentence describing how to book, matched to the active channel. */
export function getBookingInstructions(): string {
  switch (getBookingChannel()) {
    case "booking":
      return "Book online in a few steps and choose the time that suits you.";
    case "messenger":
      return "Send us a message on Messenger to book your treatment.";
    case "facebook":
      return "Send us a message on our official Facebook page to book your treatment.";
    default:
      return "Booking details will be announced soon.";
  }
}

/** Promotions that have not passed their `validUntil` date. */
export function getActivePromotions(now: Date = new Date()): readonly Promotion[] {
  const today = now.toISOString().slice(0, 10);
  return siteConfig.promotions.filter((promo) => !promo.validUntil || promo.validUntil >= today);
}

/** Converts a display phone number into a `tel:` link. */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export interface NavLink {
  label: string;
  href: `#${string}`;
}

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
