import type { StaticImageData } from "next/image";

/*
 * Customer feedback graphics published through Kalikasan Spa's Facebook presence.
 *
 * Images are imported straight from the original root `feedback/` folder: nothing
 * is copied, cropped or edited. Next.js serves optimised versions.
 *
 * Only graphics that passed the privacy review are imported and displayed. Files
 * listed in `excludedFeedback` stay untouched in `feedback/` but are not imported,
 * so they are never rendered or bundled. Before re-including one, resolve its reason
 * (for example, obtain written consent from everyone shown).
 *
 * `name` is the reviewer name exactly as printed in each graphic. It is used only
 * for alt text. The star icons inside the graphics were added by the original
 * designer and are not presented as ratings anywhere on the site.
 */

import feedback01 from "../../feedback/473180185_583513984434705_8242064407522077946_n.jpg";
import feedback02 from "../../feedback/473188621_582760747843362_5579063084400627907_n.jpg";
import feedback03 from "../../feedback/473346280_583518717767565_1902755210921260308_n.jpg";
import feedback04 from "../../feedback/473425946_582760764510027_1734501097840786634_n.jpg";
import feedback05 from "../../feedback/473587495_583513824434721_6183686587024421727_n.jpg";
import feedback06 from "../../feedback/473589214_583507877768649_4566759258645248466_n.jpg";
import feedback07 from "../../feedback/473591378_583518721100898_5131036963991908719_n.jpg";
import feedback08 from "../../feedback/473597758_583512154434888_8147295317330330530_n.jpg";

export interface FeedbackItem {
  id: string;
  image: StaticImageData;
  name: string;
}

export const feedbackItems: readonly FeedbackItem[] = [
  { id: "473180185-583513984434705", image: feedback01, name: "Aaron Jake Gutierrez" },
  { id: "473188621-582760747843362", image: feedback02, name: "Melissa Kamille" },
  { id: "473346280-583518717767565", image: feedback03, name: "Missy Bendaña" },
  { id: "473425946-582760764510027", image: feedback04, name: "Aurea Francisco" },
  { id: "473587495-583513824434721", image: feedback05, name: "Kiezsha Delos Santos" },
  { id: "473589214-583507877768649", image: feedback06, name: "Bernz Roque" },
  { id: "473591378-583518721100898", image: feedback07, name: "Irene Catiter-Gutierrez" },
  { id: "473597758-583512154434888", image: feedback08, name: "Carlo Verdadero" },
];

export type FeedbackExclusionReason =
  | "unverified-contact-information"
  | "child-parental-consent-not-confirmed"
  | "third-party-people-consent-not-confirmed"
  | "unnecessary-personal-information"
  | "not-customer-feedback";

/**
 * Reason codes:
 *  - unverified-contact-information: Shows phone numbers and a street address not confirmed by the business.
 *  - child-parental-consent-not-confirmed: Profile photo shows a young child; parental consent not confirmed.
 *  - third-party-people-consent-not-confirmed: Tags, names or pictures other people whose consent to website publication is not confirmed.
 *  - unnecessary-personal-information: Shows details beyond what is needed to identify the feedback.
 *  - not-customer-feedback: Byte-identical copy of the Ventosa service poster.
 */
export interface ExcludedFeedback {
  file: string;
  reason: FeedbackExclusionReason;
  note: string;
}

/** Files in `feedback/` that are intentionally not displayed on the public site. */
export const excludedFeedback: readonly ExcludedFeedback[] = [
  { file: "472772904_582761977843239_4060613011492650781_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Tags other people in the post." },
  { file: "472790567_582762084509895_7256398502003310036_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Other people visible in the embedded photos." },
  { file: "473033953_582761934509910_5039796144823683324_n.jpg", reason: "unnecessary-personal-information", note: "Card prints the reviewer's business/employer." },
  { file: "473058087_582762027843234_5520365251063626243_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Profile photo includes a second adult." },
  { file: "473188621_582760914510012_5540512382434691770_n.jpg", reason: "unnecessary-personal-information", note: "Card prints the reviewer's business/employer." },
  { file: "473189771_582761867843250_2641278303581205011_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Comment refers to another person by nickname." },
  { file: "473248371_583518817767555_1293576942245910079_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Tags other people in the post." },
  { file: "473250894_583513001101470_343812390754447006_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Tags other people in the post." },
  { file: "473263694_583518724434231_5103125971535349479_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Tags and names other people, including apparent staff." },
  { file: "473291688_583512351101535_807263786542679218_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Profile photo includes a second adult." },
  { file: "473351524_583512881101482_2548173156336789848_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Tags another person; embedded photo shows other people's faces." },
  { file: "473427390_582761727843264_6155647878410114553_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Embedded photo shows other people; also includes a partial address." },
  { file: "473430776_583507934435310_9182112298779894845_n.jpg", reason: "child-parental-consent-not-confirmed", note: "Profile photo shows a young child." },
  { file: "473517116_583507904435313_342848845903605653_n.jpg", reason: "child-parental-consent-not-confirmed", note: "Profile photo shows a young child." },
  { file: "473589597_583514237768013_2338042261899283351_n.jpg", reason: "unverified-contact-information", note: "Phone numbers and a street address in the post; also tags other people." },
  { file: "473591698_583514231101347_3973247260218495922_n.jpg", reason: "third-party-people-consent-not-confirmed", note: "Embedded photos show other guests and staff." },
  {
    file: "576379371_812234474895987_5519114947648059440_n.jpg",
    reason: "not-customer-feedback",
    note: "Byte-identical copy of the Ventosa service poster.",
  },
];
