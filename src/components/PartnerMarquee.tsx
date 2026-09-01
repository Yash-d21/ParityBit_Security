import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { partnerLogos, type PartnerLogo } from '@/content/partners';

const logoHeightClass: Record<PartnerLogo['size'], string> = {
  chamber: 'h-[18px] md:h-[22px]',
  microsoft: 'h-[14px] md:h-[16px]',
  google: 'h-[12px] md:h-[14px]',
  aws: 'h-[20px] md:h-[24px]',
};

export function PartnerMarquee() {
  return (
    <section
      className="relative w-full self-stretch border-y border-[rgb(38,38,38)] bg-[rgb(17,17,17)]"
      aria-label="Partner logos"
    >
      <div className="relative h-[72px] w-full overflow-hidden md:h-[88px]">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={48}
        >
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex w-32 shrink-0 items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className={`w-auto max-w-none object-contain opacity-90 brightness-0 invert ${logoHeightClass[partner.size]}`}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[80px] md:w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[80px] md:w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  );
}

export default PartnerMarquee;
