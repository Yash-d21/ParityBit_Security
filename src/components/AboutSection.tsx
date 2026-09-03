import { aboutContent } from '../content/about';
import './AboutSection.css';

export function AboutSection() {
  return (
    <section className="about-section" data-framer-name="About Section">
      <div className="about-section__container">
        <header className="about-section__intro">
          <p className="about-section__eyebrow">
            <img
              src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg"
              alt=""
              aria-hidden="true"
              className="about-section__eyebrow-icon"
            />
            <span>{aboutContent.eyebrow}</span>
          </p>

          <h2 className="about-section__title">
            {aboutContent.titleLead} {aboutContent.titleAccent}{' '}
            <span className="about-section__title-accent">{aboutContent.titlePurple}</span>
          </h2>
        </header>

        <figure className="about-section__diagram">
          <img
            className="about-section__diagram-img"
            src="/assets/images/about-platform-diagram.jpg"
            alt="ParityBit Behavioral Defense Platform: Real-Time AI Analyst and 360° Insights over threat intelligence, security automation, and proactive defense, powered by Adaptive AI across frontier, collaboration, and infrastructure data."
            width={1024}
            height={614}
            decoding="async"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}

export default AboutSection;
