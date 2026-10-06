/**
 * Generates web-ready copies of the original spa photos.
 *
 * - Reads ONLY from the original asset folders (cover/, design/, logo/, services/).
 * - Writes ONLY to src/assets/images/ (and src/app/ for the icon / OG image).
 * - Never modifies, renames, moves or deletes an original file.
 *
 * Rules followed:
 * - Service posters are cropped to their photographic area so baked-in poster
 *   text is not shown on the website.
 * - Photos carrying the third-party "EJ Knows" watermark (design/ folder, all but
 *   the treatment room) are not used at all, so no derived image contains it.
 *
 * Run with: npm run images
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outDir = path.join(root, "src", "assets", "images");

/**
 * @typedef {{ left: number, top: number, width: number, height: number }} Region
 * @typedef {{ out: string, src: string, crop?: Region, maxWidth?: number, note: string }} Job
 */

/** @type {Job[]} */
const jobs = [
  // ---------- Clean photo (no text, no watermark) ----------
  {
    out: "treatment-room.jpg",
    src: "design/480673739_611035508349219_1684468050027991594_n.jpg",
    maxWidth: 1500,
    note: "Treatment room. No text or watermark. Resized only.",
  },
  {
    out: "treatment-room-detail.jpg",
    src: "design/480673739_611035508349219_1684468050027991594_n.jpg",
    crop: { left: 500, top: 180, width: 960, height: 1200 },
    note: "4:5 detail of the clean treatment room (robe, ladder, bed). Not upscaled.",
  },

  // ---------- Cover photo: the three photographs above the green brand band ----------
  {
    out: "facial-massage.jpg",
    src: "cover/483890281_626085096844260_5560628403013969503_n.jpg",
    crop: { left: 0, top: 0, width: 544, height: 538 },
    note: "Left photo of the Facebook cover, above the logo band.",
  },
  {
    out: "sauna-guests.jpg",
    src: "cover/483890281_626085096844260_5560628403013969503_n.jpg",
    crop: { left: 550, top: 0, width: 540, height: 538 },
    note: "Middle photo of the Facebook cover (models in the sauna).",
  },
  {
    out: "coffee-scrub.jpg",
    src: "cover/483890281_626085096844260_5560628403013969503_n.jpg",
    crop: { left: 1096, top: 0, width: 544, height: 538 },
    note: "Right photo of the Facebook cover.",
  },

  // ---------- Service posters: photographic area only ----------
  {
    out: "signature-massage.jpg",
    src: "services/556395299_780835931369175_2835858083723583896_n.jpg",
    crop: { left: 280, top: 0, width: 800, height: 470 },
    note: "Haplos ng Kalikasan poster, photo area right of the logo.",
  },
  {
    out: "hot-stone.jpg",
    src: "services/567866661_801144742671627_2884913872266728809_n.jpg",
    crop: { left: 0, top: 450, width: 1080, height: 680 },
    note: "Hot Stone poster, between the headline and the Book Now button.",
  },
  {
    out: "ventosa.jpg",
    src: "services/576379371_812234474895987_5519114947648059440_n.jpg",
    crop: { left: 300, top: 0, width: 620, height: 560 },
    note: "Ventosa poster, area above and left of the logo and text.",
  },
  {
    out: "suob.jpg",
    src: "services/555592199_777395721713196_5667603074330462170_n.jpg",
    crop: { left: 0, top: 900, width: 1080, height: 450 },
    note: "Suob poster, area below the text panel.",
  },
  {
    out: "rose-scrub.jpg",
    src: "services/552645322_774886021964166_7571238207728650756_n.jpg",
    crop: { left: 470, top: 0, width: 610, height: 560 },
    note: "Haplos ng Kagandahan poster, top-right photo area.",
  },
  {
    out: "moringa-scrub.jpg",
    src: "services/548231908_768959942556774_182469454508138798_n.jpg",
    crop: { left: 500, top: 0, width: 580, height: 560 },
    note: "Busilak ng Kalikasan poster, top-right photo area.",
  },

  // ---------- More clean poster photo areas (no text, logo or watermark) ----------
  {
    out: "massage-hands.jpg",
    src: "services/559327042_788074327312002_1230013616953094974_n.jpg",
    crop: { left: 600, top: 0, width: 480, height: 400 },
    note: "Haplos ng Kagalingan poster, top-right photo area.",
  },
  {
    out: "suob-chair.jpg",
    src: "services/559327042_788074327312002_1230013616953094974_n.jpg",
    crop: { left: 690, top: 440, width: 390, height: 470 },
    note: "Haplos ng Kagalingan poster, wooden chair and plants photo area.",
  },
  {
    out: "relaxing-massage.jpg",
    src: "services/558923955_782630207856414_2739797026109596566_n.jpg",
    crop: { left: 260, top: 850, width: 820, height: 500 },
    note: "Haplos ng Kaginhawaan poster, photo area right of the logo.",
  },
  {
    out: "moving-ventosa.jpg",
    src: "services/560439066_793456733440428_8055082203341534897_n.jpg",
    crop: { left: 220, top: 0, width: 860, height: 570 },
    note: "Moving Ventosa poster, photo area right of the logo, above the benefits box.",
  },
];

async function run() {
  await mkdir(outDir, { recursive: true });

  for (const job of jobs) {
    let image = sharp(path.join(root, job.src)).rotate();
    if (job.crop) image = image.extract(job.crop);
    if (job.maxWidth) image = image.resize({ width: job.maxWidth, withoutEnlargement: true });
    const info = await image
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(outDir, job.out));
    console.log(`${job.out.padEnd(28)} ${info.width}x${info.height}  ${job.note}`);
  }

  // Site icon: the lotus mark from the official logo file, centred on white.
  const lotus = await sharp(path.join(root, "logo/467181656_556892203715382_4071776633112455836_n.jpg"))
    .extract({ left: 230, top: 200, width: 490, height: 260 })
    .resize({ width: 440 })
    .toBuffer();
  await sharp({ create: { width: 512, height: 512, channels: 3, background: "#FFFFFF" } })
    .composite([{ input: lotus, gravity: "center" }])
    .png()
    .toFile(path.join(root, "src", "app", "icon.png"));
  console.log("src/app/icon.png             512x512  Lotus from the official logo.");

  // Open Graph image: crop of the clean treatment-room photo.
  await sharp(path.join(root, "design/480673739_611035508349219_1684468050027991594_n.jpg"))
    .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(path.join(root, "src", "app", "opengraph-image.jpg"));
  console.log("src/app/opengraph-image.jpg  1200x630 Treatment room (clean photo).");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
