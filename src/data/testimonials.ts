/**
 * Guest testimonials.
 *
 * Intentionally EMPTY. Only add a testimonial when:
 *  1. it is a real review from a real guest, quoted exactly, and
 *  2. the guest has given permission for it to appear on the website.
 *
 * `permissionConfirmed` must be the literal `true`, so an entry cannot be
 * added without explicitly recording that permission was obtained.
 *
 * Example (do not uncomment without real, permitted content):
 * {
 *   quote: "…exact words from the guest…",
 *   name: "Guest's preferred display name",
 *   source: "Facebook",
 *   permissionConfirmed: true,
 * }
 */

export interface Testimonial {
  quote: string;
  name: string;
  source: "Facebook" | "Google" | "In person";
  permissionConfirmed: true;
}

export const testimonials: readonly Testimonial[] = [];
