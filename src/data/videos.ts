import { images, type SpaImage } from "@/lib/images";

/**
 * Official Facebook Reels from https://www.facebook.com/kalikasanspa/.
 *
 * The videos are only linked, never downloaded or re-hosted. Facebook's own
 * preview images use signed URLs that expire within days, so each card uses an
 * existing Kalikasan Spa photo as its background instead. The section states
 * clearly that these photos are not frames from the videos.
 *
 * Titles are deliberately neutral: they do not describe what happens in each video.
 */

export interface FacebookReel {
  id: string;
  title: string;
  url: string;
  /** Background photo for the card. Must be a clean image (no watermark to cover). */
  cover: SpaImage;
}

export const facebookReels: readonly FacebookReel[] = [
  {
    id: "666157991505303",
    title: "Discover Kalikasan",
    url: "https://www.facebook.com/reel/666157991505303",
    cover: images.treatmentRoomDetail,
  },
  {
    id: "1007006754035750",
    title: "A Moment of Relaxation",
    url: "https://www.facebook.com/reel/1007006754035750",
    cover: images.roseScrub,
  },
  {
    id: "1257425661880948",
    title: "The Kalikasan Experience",
    url: "https://www.facebook.com/reel/1257425661880948",
    cover: images.saunaGuests,
  },
];
