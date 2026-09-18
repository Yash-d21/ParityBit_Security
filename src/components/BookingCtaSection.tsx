import React from 'react';
import { SquishyPricing } from '@/components/ui/squishy-pricing';
import { BOOKING_SECTION_ID, ctaContent } from '../content/cta';
import './BookingCtaSection.css';

export function BookingCtaSection() {
  const { booking } = ctaContent;

  return (
    <section
      id={BOOKING_SECTION_ID}
      className="booking-cta"
      data-framer-name="Booking CTA Section"
    >
      <div className="booking-cta__container">
        <header className="booking-cta__header">
          <h2 className="booking-cta__title">{booking.title}</h2>
          <p className="booking-cta__subtitle">{booking.subtitle}</p>
        </header>

        <SquishyPricing cards={booking.cards} />
      </div>
    </section>
  );
}
