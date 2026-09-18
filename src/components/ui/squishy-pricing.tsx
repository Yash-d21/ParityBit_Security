import { type ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type SquishyCardData = {
  audience: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

type SquishyPricingProps = {
  cards: SquishyCardData[];
};

const cardThemes = [
  {
    background: 'bg-[#1a1028]',
    labelClass: 'text-[#a78bfa]',
    BGComponent: BGComponent1,
  },
  {
    background: 'bg-[#7B31FF]',
    labelClass: 'text-white',
    BGComponent: BGComponent2,
  },
  {
    background: 'bg-[#1a1028]',
    labelClass: 'text-[#a78bfa]',
    BGComponent: BGComponent3,
  },
] as const;

export function SquishyPricing({ cards }: SquishyPricingProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] flex-wrap justify-center gap-5">
      {cards.map((card, index) => {
        const theme = cardThemes[index % cardThemes.length];
        return (
          <PricingCard
            key={card.title}
            label={card.audience}
            title={card.title}
            description={card.description}
            cta={card.button}
            href={card.href}
            background={theme.background}
            labelClass={theme.labelClass}
            BGComponent={theme.BGComponent}
          />
        );
      })}
    </div>
  );
}

type PricingCardProps = {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  background: string;
  labelClass: string;
  BGComponent: ComponentType;
};

function PricingCard({
  label,
  title,
  description,
  cta,
  href,
  background,
  labelClass,
  BGComponent,
}: PricingCardProps) {
  const ctaClassName =
    'absolute bottom-4 left-4 right-4 z-20 rounded-full border border-white bg-white py-3 text-center text-sm font-medium text-neutral-900 transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent';
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: 'backInOut' }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-[28rem] w-full max-w-sm shrink-0 overflow-hidden rounded-xl p-8 font-[Inter,sans-serif] shadow-lg transition-shadow hover:shadow-xl sm:w-80 ${background}`}
    >
      <div className="relative z-10 text-white">
        <span
          className={`mb-4 block text-xs font-semibold uppercase tracking-[0.05em] ${labelClass}`}
        >
          {label}
        </span>
        <motion.h3
          initial={{ scale: 0.92 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: 'backInOut' }}
          className="mb-4 origin-top-left font-['Inter_Tight_Regular',Inter,sans-serif] text-[1.75rem] font-medium leading-tight tracking-[-0.02em]"
        >
          {title}
        </motion.h3>
        <p className="text-sm leading-relaxed text-white/90">{description}</p>
      </div>
      {isExternal ? (
        <a href={href} className={ctaClassName}>
          {cta}
        </a>
      ) : (
        <Link to={href} className={ctaClassName}>
          {cta}
        </Link>
      )}
      <BGComponent />
    </motion.div>
  );
}

function BGComponent1() {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: 'backInOut' }}
      className="absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -25 } }}
        transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="rgba(0, 0, 0, 0.2)"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -25 } }}
        transition={{ duration: 1, ease: 'backInOut', delay: 0.2 }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="rgba(0, 0, 0, 0.2)"
      />
    </motion.svg>
  );
}

function BGComponent2() {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.05 } }}
      transition={{ duration: 1, ease: 'backInOut' }}
      className="absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    >
      <motion.rect
        x="14"
        width="153"
        height="153"
        rx="15"
        fill="rgba(0, 0, 0, 0.2)"
        variants={{ hover: { y: 219, rotate: '90deg', scaleX: 2 } }}
        style={{ y: 12 }}
        transition={{ delay: 0.2, duration: 1, ease: 'backInOut' }}
      />
      <motion.rect
        x="155"
        width="153"
        height="153"
        rx="15"
        fill="rgba(0, 0, 0, 0.2)"
        variants={{ hover: { y: 12, rotate: '90deg', scaleX: 2 } }}
        style={{ y: 219 }}
        transition={{ delay: 0.2, duration: 1, ease: 'backInOut' }}
      />
    </motion.svg>
  );
}

function BGComponent3() {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.25 } }}
      transition={{ duration: 1, ease: 'backInOut' }}
      className="absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    >
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.3, duration: 1, ease: 'backInOut' }}
        d="M148.893 157.531C154.751 151.673 164.249 151.673 170.107 157.531L267.393 254.818C273.251 260.676 273.251 270.173 267.393 276.031L218.75 324.674C186.027 357.397 132.973 357.397 100.25 324.674L51.6068 276.031C45.7489 270.173 45.7489 260.676 51.6068 254.818L148.893 157.531Z"
        fill="rgba(0, 0, 0, 0.2)"
      />
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.2, duration: 1, ease: 'backInOut' }}
        d="M148.893 99.069C154.751 93.2111 164.249 93.2111 170.107 99.069L267.393 196.356C273.251 202.213 273.251 211.711 267.393 217.569L218.75 266.212C186.027 298.935 132.973 298.935 100.25 266.212L51.6068 217.569C45.7489 211.711 45.7489 202.213 51.6068 196.356L148.893 99.069Z"
        fill="rgba(0, 0, 0, 0.2)"
      />
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.1, duration: 1, ease: 'backInOut' }}
        d="M148.893 40.6066C154.751 34.7487 164.249 34.7487 170.107 40.6066L267.393 137.893C273.251 143.751 273.251 153.249 267.393 159.106L218.75 207.75C186.027 240.473 132.973 240.473 100.25 207.75L51.6068 159.106C45.7489 153.249 45.7489 143.751 51.6068 137.893L148.893 40.6066Z"
        fill="rgba(0, 0, 0, 0.2)"
      />
    </motion.svg>
  );
}

export default SquishyPricing;
