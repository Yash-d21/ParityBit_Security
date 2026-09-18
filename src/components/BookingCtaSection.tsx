import React from 'react';
import { SquishyPricing } from '@/components/ui/squishy-pricing';
import { BOOKING_SECTION_ID, ctaContent } from '../content/cta';
import './BookingCtaSection.css';

function DotGrid({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      {Array.from({ length: 16 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export function BookingCtaSection() {
  const { booking } = ctaContent;

  return (
    <section
      id={BOOKING_SECTION_ID}
      className="booking-cta"
      data-framer-name="Booking CTA Section"
    >
      <div className="booking-cta__decor" aria-hidden="true">
        <div className="booking-cta__decor-corner booking-cta__decor-corner--tl">
          <div className="booking-cta__orb" />
          <svg
            className="booking-cta__orbit"
            viewBox="0 0 280 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="70"
              cy="110"
              rx="125"
              ry="78"
              stroke="rgba(167, 139, 250, 0.55)"
              strokeWidth="1.25"
              transform="rotate(-32 70 110)"
            />
            <circle cx="178" cy="52" r="4.5" fill="rgb(123, 49, 255)" />
          </svg>
          <DotGrid className="booking-cta__dots booking-cta__dots--tl" />
        </div>

        <div className="booking-cta__decor-corner booking-cta__decor-corner--br">
          <div className="booking-cta__glow" />
          <DotGrid className="booking-cta__dots booking-cta__dots--br" />
          <svg
            className="booking-cta__arc"
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C70 120 160 200 300 210"
              stroke="rgba(167, 139, 250, 0.5)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <circle cx="168" cy="168" r="5" fill="rgb(123, 49, 255)" />
          </svg>
        </div>
      </div>

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
