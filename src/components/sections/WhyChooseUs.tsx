import { Container } from "@/components/ui/Container";
import { CreditedPhoto } from "@/components/ui/CreditedPhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

// Each reason is grounded in what the spa's own materials and photos show.
const reasons = [
  {
    title: "Rooted in Filipino tradition",
    body: "Haplos, suob and ventosa sit at the heart of our menu, honouring time-tested Filipino healing practices.",
  },
  {
    title: "Natural ingredients",
    body: "Our body scrubs use moringa, coffee, salt and rose petals, chosen to refresh and nourish the skin.",
  },
  {
    title: "A sanctuary of nature",
    body: "Woven lanterns, capiz windows, batik textiles and greenery make the space feel calm from the moment you arrive.",
  },
  {
    title: "Everything under one roof",
    body: "Massage, cupping, herbal steam, body scrubs and an infrared sauna, so you can shape the visit you need.",
  },
] as const;

const numerals = ["I", "II", "III", "IV"];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-28 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="why-title"
            eyebrow="Why Kalikasan"
            title="Care that feels natural, from start to finish"
          />

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <span aria-hidden="true" className="font-display text-2xl text-gold-text italic">
                  {numerals[index]}
                </span>
                <h3 className="mt-2 font-display text-2xl font-medium text-balance text-forest">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-deep/75">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <CreditedPhoto
            image={images.welcomeTray}
            sizes="(min-width: 1024px) 26rem, 24rem"
            imageClassName="rounded-[1.75rem]"
          />
        </div>
      </Container>
    </section>
  );
}
