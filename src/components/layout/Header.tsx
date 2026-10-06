import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { getBookingHref, navLinks } from "@/data/site";

import { MobileMenu } from "./MobileMenu";

export function Header() {
  const bookingHref = getBookingHref();

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-ivory/90 backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" aria-label="Kalikasan Spa, back to top" className="shrink-0 rounded-sm">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative inline-flex min-h-11 items-center text-sm font-medium text-deep/80 transition-colors after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-forest hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Display is toggled on a wrapper: ButtonLink sets its own inline-flex display. */}
          <div className="hidden sm:block">
            <ButtonLink href={bookingHref} size="sm">
              Book Appointment
            </ButtonLink>
          </div>
          <MobileMenu links={navLinks} bookingHref={bookingHref} />
        </div>
      </Container>
    </header>
  );
}
