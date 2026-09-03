import { Link } from 'react-router-dom';
import { heroContent } from '../content/hero';
import './HeroSection.css';

export function HeroSection() {
  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-section__bg" aria-hidden="true">
        <div className="hero-section__grid-plane">
          <div className="hero-section__grid-lines" />
        </div>
        <div className="hero-section__grid-fade" />
      </div>

      <div className="hero-section__container">
        <div className="hero-section__layout">
          <div className="hero-section__copy">
            <h1 className="hero-section__title">
              {heroContent.title}{' '}
              <span className="hero-section__title-accent">{heroContent.titleAccent}</span>
            </h1>

            <p className="hero-section__description">{heroContent.description}</p>

            <div className="hero-section__actions">
              <Link to={heroContent.primaryCta.href} className="hero-section__btn hero-section__btn--primary">
                {heroContent.primaryCta.label}
                <span className="hero-section__btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link
                to={heroContent.secondaryCta.href}
                className="hero-section__btn hero-section__btn--secondary"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="hero-section__visual">
            <img
              src={heroContent.visualSrc}
              alt={heroContent.visualAlt}
              className="hero-section__visual-img"
              width={1374}
              height={1145}
            />
          </div>
        </div>

        <p className="hero-section__proof">
          <span className="hero-section__proof-accent">{heroContent.proofHighlight}</span>{' '}
          {heroContent.proofRest}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
