import { partnerLogos } from '@/content/partners';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import './PartnerMarquee.css';

export function PartnerMarquee() {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="partner-marquee" aria-label="Partner logos">
      <InfiniteSlider gap={0} duration={28} className="partner-marquee__viewport">
        {logos.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`partner-marquee__item partner-marquee__item--${partner.size}`}
          >
            <img src={partner.src} alt={partner.name} />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}

export default PartnerMarquee;
