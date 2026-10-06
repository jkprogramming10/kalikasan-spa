import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CustomerFeedback } from "@/components/sections/CustomerFeedback";
import { ExperienceKalikasan } from "@/components/sections/ExperienceKalikasan";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { FinalCta } from "@/components/sections/FinalCta";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PromotionBanner } from "@/components/sections/PromotionBanner";
import { allServices } from "@/data/services";
import { siteConfig } from "@/data/site";

/**
 * Structured data built only from confirmed information. Contact fields are
 * included automatically once they are filled in src/data/site.ts.
 */
function buildJsonLd() {
  const { contact, hours, links } = siteConfig;
  const sameAs = [links.facebook].filter((url): url is string => Boolean(url));

  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    image: new URL("/opengraph-image.jpg", siteConfig.url).toString(),
    ...((contact.address || contact.locality) && {
      address: {
        "@type": "PostalAddress",
        ...(contact.address && { streetAddress: contact.address }),
        ...(contact.locality && { addressLocality: contact.locality }),
      },
    }),
    ...(contact.phone && { telephone: contact.phone }),
    ...(contact.email && { email: contact.email }),
    ...(hours && hours.length > 0 && { openingHours: hours.map((entry) => `${entry.days} ${entry.time}`) }),
    ...(sameAs.length > 0 && { sameAs }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Spa services",
      itemListElement: allServices.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, description: service.description },
      })),
    },
  };
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <PromotionBanner />
        <Services />
        <About />
        <FeaturedExperience />
        <ExperienceKalikasan />
        <WhyChooseUs />
        <Gallery />
        <CustomerFeedback />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
