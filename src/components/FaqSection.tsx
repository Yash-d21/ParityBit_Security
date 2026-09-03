import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqContent } from '../content/faq';
import './FaqSection.css';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="faq-section" data-framer-name="FAQ Section" aria-labelledby="faq-title">
      <div className="faq-section__container">
        <header className="faq-section__header">
          <div className="faq-section__heading">
            <div className="faq-section__eyebrow">
              <img
                src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg"
                alt=""
                aria-hidden="true"
                className="faq-section__eyebrow-icon"
                width={18}
                height={18}
              />
              <span>{faqContent.eyebrow}</span>
            </div>
            <h2 id="faq-title" className="faq-section__title">
              {faqContent.title}
            </h2>
          </div>

          <Link className="faq-section__cta" to={faqContent.ctaHref}>
            {faqContent.ctaLabel}
          </Link>
        </header>

        <div className="faq-section__body">
          <ul className="faq-section__list">
            {faqContent.items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <li
                  key={item.question}
                  className={`faq-section__item${isOpen ? ' is-open' : ''}`}
                  onMouseEnter={() => setOpenIndex(index)}
                >
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-section__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onFocus={() => setOpenIndex(index)}
                    onClick={() => setOpenIndex(index)}
                  >
                    <span className="faq-section__question">{item.question}</span>
                    <span className="faq-section__chevron" aria-hidden="true" />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-section__panel"
                    hidden={!isOpen}
                  >
                    <p className="faq-section__answer">{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="faq-section__visual" aria-hidden="true">
            <img
              className="faq-section__visual-image"
              src="/assets/images/faq-cyber-isometric.png"
              alt=""
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
