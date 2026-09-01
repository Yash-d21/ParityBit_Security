import React from 'react';
import { productsContent } from '../content/products';
import './ProductsSection.css';

export function ProductsSection() {
  return (
    <section
      id="products"
      className="products-section"
      data-framer-name="Process Section"
    >
      <div className="products-section__container">
        <div className="products-section__header">
          <div className="products-section__eyebrow">
            <img
              src="/assets/images/WfbxSQyOjo3fWmtKp5iBzgLjYro-baa859fd.svg"
              alt=""
              aria-hidden="true"
              className="products-section__eyebrow-icon"
            />
            <span>{productsContent.eyebrow}</span>
          </div>

          <h2 className="products-section__title">
            {productsContent.titleLead}
            <span className="products-section__title-accent">
              {productsContent.titleAccent}
            </span>
          </h2>
        </div>

        <div className="products-section__grid">
          {productsContent.items.map((product) => (
            <article key={product.name} className="products-section__card">
              <div className="products-section__card-media">
                <img
                  src={product.image}
                  alt={`${product.name} product illustration`}
                  className="products-section__card-image"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/assets/images/UVeVaQbgYJutj0Jk0ln2DwyV5o-19271f75.svg"
                  alt=""
                  aria-hidden="true"
                  className="products-section__card-badge"
                />
              </div>

              <div className="products-section__card-body">
                <p className="products-section__vendor">{product.vendor}</p>
                <h3 className="products-section__name">{product.name}</h3>
                <p className="products-section__subtitle">{product.subtitle}</p>
                {product.description ? (
                  <p className="products-section__description">
                    {product.description}
                  </p>
                ) : null}
                <ul className="products-section__features">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="products-section__wave" aria-hidden="true">
        <img
          src="/assets/images/jXdyhsQUSAguTzcSU00ZM134J4-24ac1de1.svg"
          alt=""
        />
      </div>
    </section>
  );
}
