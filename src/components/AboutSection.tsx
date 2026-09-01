import React from 'react';
import { aboutContent } from '../content/about';
import './AboutSection.css';

function Highlight({ children }: { children: React.ReactNode }) {
  return <strong className="about-section__highlight">{children}</strong>;
}

export function AboutSection() {
  return (
    <section className="about-section" data-framer-name="About Section">
      <div className="about-section__container">
        <div className="about-section__grid">
          <div className="about-section__left">
            <div className="about-section__eyebrow">
              <img
                src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg"
                alt=""
                aria-hidden="true"
                className="about-section__eyebrow-icon"
              />
              <span>{aboutContent.eyebrow}</span>
            </div>

            <h2 className="about-section__title">
              <span className="about-section__title-line1">
                {aboutContent.titleLead} {aboutContent.titleAccent}
              </span>
              <span className="about-section__title-purple">{aboutContent.titlePurple}</span>
            </h2>

            <div className="about-section__copy">
              <p>
                <Highlight>ParityBit Security</Highlight> is a next-generation cybersecurity company
                focused on delivering intelligent, <Highlight>AI-driven security solutions</Highlight> for
                modern digital environments.
              </p>
              <p>
                Our platforms combine advanced <Highlight>threat intelligence</Highlight>,{' '}
                <Highlight>security automation</Highlight>, and <Highlight>proactive defense</Highlight>{' '}
                strategies to help organizations detect, investigate, and mitigate cyber threats before they
                cause damage. From unified SOC operations and threat intelligence to phishing simulation and
                OSINT investigation, <Highlight>ParityBit empowers enterprises</Highlight> with the visibility
                and control needed to stay ahead of evolving cyber risks.
              </p>
            </div>
          </div>

          <div className="about-section__divider" aria-hidden="true" />

          <div className="about-section__right">
            <div className="about-section__visual-stack">
              <div className="about-section__visual">
                <img
                  src={aboutContent.visualImage}
                  alt="Network intelligence visualization"
                  className="about-section__crystal"
                />
              </div>
              <p className="about-section__visual-caption">{aboutContent.paragraphs[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
