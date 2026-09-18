import { InfiniteSlider } from '@/components/ui/infinite-slider';
import {
  servicesMarqueeRows,
  type ServiceMarqueeItem,
} from '@/content/servicesMarquee';
import './ServicesMarquee.css';

function ServiceCard({ item }: { item: ServiceMarqueeItem }) {
  return (
    <article
      className={`services-marquee__card services-marquee__card--${item.tone}`}
    >
      <img src={item.src} alt={item.title} loading="lazy" draggable={false} />
    </article>
  );
}

export function ServicesMarquee() {
  return (
    <section
      className="services-marquee"
      data-framer-name="Services Marquee"
      aria-labelledby="services-marquee-heading"
    >
      <header className="services-marquee__header">
        <p className="services-marquee__eyebrow">
          <img
            src="/assets/images/WfbxSQyOjo3fWmtKp5iBzgLjYro-baa859fd.svg"
            alt=""
            aria-hidden="true"
            className="services-marquee__eyebrow-icon"
            width={16}
            height={16}
          />
          <span>Our capabilities</span>
        </p>
        <h2 id="services-marquee-heading" className="services-marquee__title">
          Security across every{' '}
          <span className="services-marquee__title-accent">layer.</span>
        </h2>
      </header>

      <div className="services-marquee__rows">
        {servicesMarqueeRows.map((row, rowIndex) => (
          <InfiniteSlider
            key={`services-marquee-row-${rowIndex}`}
            gap={10}
            duration={52 + rowIndex * 4}
            reverse={rowIndex % 2 === 1}
            pauseOnHover
            className="services-marquee__row"
          >
            {row.map((item, itemIndex) => (
              <ServiceCard key={`${item.id}-${itemIndex}`} item={item} />
            ))}
          </InfiniteSlider>
        ))}
      </div>
    </section>
  );
}

export default ServicesMarquee;
