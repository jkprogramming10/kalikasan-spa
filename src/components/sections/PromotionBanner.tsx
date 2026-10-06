import { Container } from "@/components/ui/Container";
import { getActivePromotions } from "@/data/site";

/**
 * Shows current promotions from src/data/site.ts. Renders nothing while the
 * list is empty, so no placeholder offer is ever displayed.
 */
export function PromotionBanner() {
  const promotions = getActivePromotions();
  if (promotions.length === 0) return null;

  return (
    <section aria-label="Current promotions" className="bg-forest text-ivory surface-dark">
      <Container className="py-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <li key={promo.title}>
              <p className="font-display text-xl font-medium">{promo.title}</p>
              <p className="mt-1 text-sm text-ivory/80">{promo.details}</p>
              {promo.validUntil && (
                <p className="mt-1 text-xs tracking-wide text-sage">
                  Valid until <time dateTime={promo.validUntil}>{promo.validUntil}</time>
                </p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
