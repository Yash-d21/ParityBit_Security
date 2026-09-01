import React from 'react';
import { Link } from 'react-router-dom';
import { ctaContent } from '../content/cta';
import './BookingCtaSection.css';

export function BookingCtaSection() {
  const { booking, background } = ctaContent;

  return (
    <section className="booking-cta" data-framer-name="Booking CTA Section">
      <div className="booking-cta__bg" aria-hidden="true">
        <img src={background} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="booking-cta__container">
        <header className="booking-cta__header">
          <h2 className="booking-cta__title">{booking.title}</h2>
          <p className="booking-cta__subtitle">{booking.subtitle}</p>
        </header>

        <div className="booking-cta__grid">
          {booking.cards.map((card) => (
            <article key={card.title} className="booking-cta__card">
              <p className="booking-cta__audience">{card.audience}</p>
              <h3 className="booking-cta__card-title">{card.title}</h3>
              <p className="booking-cta__card-desc">{card.description}</p>
              <Link to={card.href} className="booking-cta__button">
                {card.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
