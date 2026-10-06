"use client";

import { useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Wordmark } from "@/components/ui/Wordmark";
import type { NavLink } from "@/data/site";

interface MobileMenuProps {
  links: readonly NavLink[];
  bookingHref: string;
}

/**
 * Full-screen mobile navigation built on the native <dialog> element, which
 * provides focus trapping, Escape-to-close and an inert background for free.
 */
export function MobileMenu({ links, bookingHref }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-forest transition-colors hover:bg-cream lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-ivory p-0 text-deep backdrop:bg-deep/40 open:animate-rise lg:hidden"
      >
        <div className="flex h-full flex-col overflow-y-auto px-5 pt-4 pb-10 sm:px-8">
          <div className="flex items-center justify-between">
            <a href="#top" onClick={close} aria-label="Kalikasan Spa, back to top">
              <Wordmark />
            </a>
            <button
              type="button"
              onClick={close}
              className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-forest transition-colors hover:bg-cream"
            >
              <span className="sr-only">Close menu</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12 flex-1">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block border-b border-forest/10 py-4 font-display text-3xl text-forest transition-colors hover:text-gold-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink href={bookingHref} onClick={close} className="w-full">
            Book an Appointment
          </ButtonLink>
        </div>
      </dialog>
    </>
  );
}
