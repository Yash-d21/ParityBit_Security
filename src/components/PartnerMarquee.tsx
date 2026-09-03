import { partnerLogos } from '@/content/partners';
import './PartnerMarquee.css';

export function PartnerMarquee() {
  return (
    <section className="partner-marquee" aria-label="Partner logos">
      <div className="partner-marquee__row">
        {partnerLogos.map((partner) => (
          <div
            key={partner.name}
            className={`partner-marquee__item partner-marquee__item--${partner.size}`}
          >
            <img src={partner.src} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PartnerMarquee;
