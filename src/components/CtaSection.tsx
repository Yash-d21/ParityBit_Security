import React from 'react';
import { footerContent } from '../content/footer';
import { ctaContent } from '../content/cta';
import './CtaSection.css';

export function CtaSection() {
  const { newsletter } = footerContent;

  return (
    <section className="cta-section" data-framer-name="CTA Section">
      <div className="cta-section__bg" aria-hidden="true">
        <img src={ctaContent.background} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="cta-section__container">
        <p className="cta-section__eyebrow">{newsletter.eyebrow}</p>
        <h2 className="cta-section__title">{newsletter.title}</h2>
        <p className="cta-section__desc">{newsletter.description}</p>
        <div className="cta-section__accent-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <form className="cta-section__form" onSubmit={(e) => e.preventDefault()}>
          <label className="cta-section__visually-hidden" htmlFor="cta-newsletter-email">
            Work email
          </label>
          <input
            id="cta-newsletter-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={newsletter.placeholder}
            className="cta-section__input"
          />
          <button type="submit" className="cta-section__button">
            {newsletter.buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
