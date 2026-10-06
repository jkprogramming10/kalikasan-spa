import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { navLinks, siteConfig, toTelHref } from "@/data/site";

export function Footer() {
  const { phone, email, address, locality } = siteConfig.contact;
  const { facebook, messenger } = siteConfig.links;
  const socials = [
    { label: "Facebook", href: facebook },
    { label: "Messenger", href: messenger },
  ].filter((social): social is { label: string; href: string } => Boolean(social.href));
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark bg-deep text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 sm:gap-12 md:grid-cols-3 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <a href="#top" aria-label="Kalikasan Spa, back to top" className="inline-block">
            <Wordmark tone="dark" />
          </a>
          <p className="mt-6 max-w-xs font-display text-xl text-ivory/80 italic">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.24em] text-sage uppercase">Explore</h2>
          <ul className="mt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center text-ivory/80 transition-colors hover:text-ivory">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="text-xs font-semibold tracking-[0.24em] text-sage uppercase">Get in Touch</h2>
          <ul className="mt-3 text-ivory/80">
            {(address ?? locality) && <li className="flex min-h-11 items-center">{address ?? locality}</li>}
            {phone && (
              <li>
                <a href={toTelHref(phone)} className="inline-flex min-h-11 items-center transition-colors hover:text-ivory">
                  {phone}
                </a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`} className="inline-flex min-h-11 items-center transition-colors hover:text-ivory">
                  {email}
                </a>
              </li>
            )}
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-ivory"
                >
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            {!address && !locality && !phone && !email && socials.length === 0 && (
              <li>
                <a href="#contact" className="inline-flex min-h-11 items-center transition-colors hover:text-ivory">
                  Contact details
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-ivory/70 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Photos marked &ldquo;EJ Knows&rdquo; are credited to EJ Knows.</p>
        </Container>
      </div>
    </footer>
  );
}
