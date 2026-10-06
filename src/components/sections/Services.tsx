import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceCategories } from "@/data/services";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="Our Services"
          title="A menu of rituals, rooted in tradition"
          intro="From our signature haplos massage to herbal suob steam, each treatment is designed to help you release, restore and return to yourself."
        />

        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-24 lg:space-y-28">
          {serviceCategories.map((category, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={category.id}
                aria-labelledby={`category-${category.id}`}
                className="grid gap-8 md:grid-cols-12 md:gap-10 lg:gap-16"
              >
                <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-cream md:sticky md:top-28 md:aspect-[4/5]">
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 26rem, (min-width: 768px) 38vw, 92vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="flex items-baseline gap-4">
                    <span aria-hidden="true" className="font-display text-lg text-gold-text italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      id={`category-${category.id}`}
                      className="font-display text-3xl font-medium text-forest sm:text-4xl"
                    >
                      {category.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-deep/75">{category.intro}</p>

                  <ul className="mt-8 border-t border-forest/15">
                    {category.services.map((service) => (
                      <li key={service.id} id={service.id} className="border-b border-forest/15 py-7">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h4 className="font-display text-2xl font-medium text-deep">{service.name}</h4>
                          {(service.duration || service.price) && (
                            <span className="text-xs font-semibold tracking-[0.18em] text-gold-text uppercase">
                              {[service.duration, service.price].filter(Boolean).join(" · ")}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-forest/80 uppercase">
                          {service.kind}
                        </p>
                        <p className="mt-3 max-w-xl leading-relaxed text-deep/75">{service.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
