import { aboutContent } from '../content/about';
import { FeedIcon } from './AboutFeedIcons';
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
            <span className="about-section__title-accent">
              {aboutContent.titlePurple}
            </span>
          </h2>
        </header>

        <div
          className="about-section__platform"
          aria-label="ParityBit Behavioral Defense Platform"
        >
          {aboutContent.layers.map((layer) => (
            <div key={layer} className="about-section__layer">
              {layer}
            </div>
          ))}

          <div className="about-section__pillars">
            {aboutContent.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className={`about-section__pillar about-section__pillar--${pillar.accent}`}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>

          <div className="about-section__profile">{aboutContent.profileBar}</div>

          <div className="about-section__stack">
            <h3 className="about-section__stack-title">
              {aboutContent.platformTitle}
            </h3>
            <p className="about-section__stack-sub">
              {aboutContent.platformSubtitle}
            </p>

            <div className="about-section__feeds">
              {aboutContent.feeds.map((feed) => (
                <div key={feed.title} className="about-section__feed">
                  <p className="about-section__feed-title">{feed.title}</p>
                  <div className="about-section__feed-icons">
                    {feed.icons.map((item) =>
                      item.type === 'more' ? (
                        <span
                          key={item.label}
                          className="about-section__feed-more"
                        >
                          {item.label}
                        </span>
                      ) : (
                        <span
                          key={item.id}
                          className="about-section__feed-icon"
                          title={item.label}
                        >
                          <FeedIcon id={item.id} />
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section__shelf" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
