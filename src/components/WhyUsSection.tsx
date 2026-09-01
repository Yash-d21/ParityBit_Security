import React from 'react';
import { whyUsContent } from '../content/whyUs';
import './WhyUsSection.css';

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="why-us-section"
      data-framer-name="Benefit Section"
    >
      <div className="why-us-section__container">
        <div className="why-us-section__header">
          <div className="why-us-section__eyebrow">
            <img
              src="/assets/images/ibx4mTDX10Vdj4noSJ1nX5EzVc-0c9480f5.svg"
              alt=""
              aria-hidden="true"
              className="why-us-section__eyebrow-icon"
            />
            <span>{whyUsContent.eyebrow}</span>
          </div>

          <h2 className="why-us-section__title">
            {whyUsContent.titleLead}
            <span className="why-us-section__title-accent">
              {whyUsContent.titleAccent}
            </span>
          </h2>

          <p className="why-us-section__intro">{whyUsContent.intro}</p>
        </div>

        <div className="why-us-section__grid">
          {whyUsContent.items.map((item) => (
            <article key={item.number} className="why-us-section__card">
              <span className="why-us-section__number">{item.number}</span>
              <h3 className="why-us-section__card-title">{item.title}</h3>
              <p className="why-us-section__card-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
