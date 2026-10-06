"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { FeedbackItem } from "@/data/feedback";

interface FeedbackSliderProps {
  items: readonly FeedbackItem[];
}

interface VisibleRange {
  first: number;
  last: number;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      />
    </svg>
  );
}

/**
 * Lightweight scroll-snap slider: native swipe/scroll on touch devices,
 * Previous/Next buttons and arrow keys everywhere. No autoplay.
 * Shows 1 card on phones, 1 card with the next peeking on tablets and 2 on
 * desktop (set by CSS), so the screenshot text stays readable.
 */
export function FeedbackSlider({ items }: FeedbackSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState<VisibleRange>({ first: 0, last: 0 });

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const bounds = track.getBoundingClientRect();
    let first = -1;
    let last = -1;
    Array.from(track.children).forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      if (rect.left >= bounds.left - 4 && rect.right <= bounds.right + 4) {
        if (first === -1) first = index;
        last = index;
      }
    });
    if (first === -1) {
      first = 0;
      last = 0;
    }
    setRange((prev) => (prev.first === first && prev.last === last ? prev : { first, last }));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = requestAnimationFrame(measure);
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [measure]);

  const page = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const perView = range.last - range.first + 1;
    const target =
      direction === 1 ? Math.min(range.last + 1, items.length - 1) : Math.max(range.first - perView, 0);
    const slide = track.children[target] as HTMLElement | undefined;
    if (!slide) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: slide.offsetLeft - parseFloat(getComputedStyle(track).paddingLeft),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const atStart = range.first === 0;
  const atEnd = range.last >= items.length - 1;
  const status =
    range.first === range.last
      ? `Feedback ${range.first + 1} of ${items.length}`
      : `Showing ${range.first + 1}–${range.last + 1} of ${items.length}`;

  const buttonClass =
    "inline-flex size-12 items-center justify-center rounded-full border border-forest/30 bg-ivory text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-forest/30 disabled:hover:bg-ivory disabled:hover:text-forest";

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Customer feedback screenshots">
      <div
        id="feedback-track"
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Feedback slides. Use the left and right arrow keys to browse."
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            page(1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            page(-1);
          }
        }}
        className="relative -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain rounded-2xl px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
            className="shrink-0 basis-full snap-start sm:basis-[70%] lg:basis-[calc((100%-1.5rem)/2)]"
          >
            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_18px_40px_-28px_rgba(30,42,34,0.45)]">
              <Image
                src={item.image}
                alt={`Customer feedback shared on Facebook by ${item.name}`}
                placeholder="blur"
                sizes="(min-width: 1152px) 35rem, (min-width: 1024px) 47vw, (min-width: 640px) 68vw, 92vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-deep/70">
          {status}
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-controls="feedback-track"
            aria-label="Previous feedback"
            className={buttonClass}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-controls="feedback-track"
            aria-label="Next feedback"
            className={buttonClass}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
