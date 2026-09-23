import { type ComponentType, type FormEvent, type MouseEvent, useEffect, useId, useState } from 'react';
import { motion } from 'framer-motion';

export type SquishyCardData = {
  audience: string;
  title: string;
  description: string;
  button: string;
};

type SquishyPricingProps = {
  cards: SquishyCardData[];
};

const cardThemes = [
  {
    background: 'bg-[#1a1028]',
    labelClass: 'text-[#a78bfa]',
    formTone: 'black' as const,
    BGComponent: BGComponent1,
  },
  {
    background: 'bg-[#7B31FF]',
    labelClass: 'text-white',
    formTone: 'white' as const,
    BGComponent: BGComponent2,
  },
  {
    background: 'bg-[#1a1028]',
    labelClass: 'text-[#a78bfa]',
    formTone: 'black' as const,
    BGComponent: BGComponent3,
  },
] as const;

const BOOKING_EMAIL = 'contact@paritybitsecurity.com';
const CARD_HEIGHT = 448;
const EASE = [0.22, 1, 0.36, 1] as const;

function columnsFor(expandedIndex: number | null) {
  if (expandedIndex === null) return '1fr 1fr 1fr';
  if (expandedIndex === 0) return '2.5fr 0.5fr 0.5fr';
  if (expandedIndex === 1) return '0.5fr 2.5fr 0.5fr';
  return '0.5fr 0.5fr 2.5fr';
}

export function SquishyPricing({ cards }: SquishyPricingProps) {
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const expandedIndex = expandedTitle
    ? cards.findIndex((card) => card.title === expandedTitle)
    : -1;
  const anyExpanded = expandedIndex >= 0;

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)');
    const sync = () => setIsNarrow(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (isNarrow && expandedTitle) {
      setExpandedTitle(null);
    }
  }, [isNarrow, expandedTitle]);

  return (
    <motion.div
      initial={false}
      animate={{
        gridTemplateColumns: isNarrow
          ? '1fr'
          : columnsFor(anyExpanded ? expandedIndex : null),
      }}
      transition={{ duration: 0.55, ease: EASE }}
      className="mx-auto grid w-full max-w-[1300px] gap-5"
      style={{
        gridTemplateRows: isNarrow ? 'auto' : `${CARD_HEIGHT}px`,
      }}
    >
      {cards.map((card, index) => {
        const theme = cardThemes[index % cardThemes.length];
        const expanded = !isNarrow && expandedTitle === card.title;
        const compacted = !isNarrow && anyExpanded && !expanded;

        return (
          <PricingCard
            key={card.title}
            label={card.audience}
            title={card.title}
            description={card.description}
            cta={card.button}
            background={theme.background}
            labelClass={theme.labelClass}
            formTone={theme.formTone}
            BGComponent={theme.BGComponent}
            expanded={expanded}
            compacted={compacted}
            anyExpanded={!isNarrow && anyExpanded}
            isNarrow={isNarrow}
            onExpand={() => setExpandedTitle(card.title)}
            onCollapse={() => setExpandedTitle(null)}
          />
        );
      })}
    </motion.div>
  );
}

type PricingCardProps = {
  label: string;
  title: string;
  description: string;
  cta: string;
  background: string;
  labelClass: string;
  formTone: 'black' | 'white';
  BGComponent: ComponentType;
  expanded: boolean;
  compacted: boolean;
  anyExpanded: boolean;
  isNarrow: boolean;
  onExpand: () => void;
  onCollapse: () => void;
};

type BookingFormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const emptyForm: BookingFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

function PricingCard({
  label,
  title,
  description,
  cta,
  background,
  labelClass,
  formTone,
  BGComponent,
  expanded,
  compacted,
  anyExpanded,
  isNarrow,
  onExpand,
  onCollapse,
}: PricingCardProps) {
  const formId = useId();
  const [form, setForm] = useState<BookingFormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const formIsWhite = formTone === 'white';
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const showForm = expanded || (isNarrow && mobileFormOpen);

  useEffect(() => {
    if (!expanded && !isNarrow) {
      setForm(emptyForm);
      setSubmitted(false);
    }
  }, [expanded, isNarrow]);

  useEffect(() => {
    if (!isNarrow) {
      setMobileFormOpen(false);
    }
  }, [isNarrow]);

  const ctaClassName =
    'relative z-20 w-full rounded-full border border-white bg-white py-3 text-center text-sm font-medium text-neutral-900 transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent';

  const formSubmitClassName = formIsWhite
    ? 'relative z-20 w-full rounded-full border border-transparent bg-[#7B31FF] py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-[#6a28e0] focus:outline-none focus:ring-2 focus:ring-[#7B31FF]/50'
    : 'relative z-20 w-full rounded-full border border-white bg-white py-3 text-center text-sm font-medium text-neutral-900 transition-all duration-200 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/50';

  const cancelClassName = formIsWhite
    ? 'relative z-20 mt-1 w-full rounded-full border border-black/20 bg-transparent py-2.5 text-center text-sm font-medium text-neutral-900 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20'
    : 'relative z-20 mt-1 w-full rounded-full border border-white/40 bg-transparent py-2.5 text-center text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50';

  const backClassName =
    'relative z-20 mt-auto w-fit rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50';

  const formPanelClassName = formIsWhite
    ? 'rounded-xl border border-black/10 bg-white'
    : 'rounded-xl border border-white/15 bg-black';

  const formLabelClassName = formIsWhite
    ? 'mb-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-neutral-500'
    : 'mb-0.5 text-xs font-semibold uppercase tracking-[0.06em] text-white/60';

  const formBodyClassName = formIsWhite
    ? 'text-sm leading-relaxed text-neutral-700'
    : 'text-sm leading-relaxed text-white/85';

  const fieldClassName = formIsWhite
    ? 'w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-black/25'
    : 'w-full rounded-lg border border-white/15 bg-black px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/35';

  function updateField<K extends keyof BookingFormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(
      [
        `Request: ${title}`,
        `Audience: ${label}`,
        '',
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim()}`,
        `Phone: ${form.phone.trim()}`,
        '',
        form.message.trim() || '(No message)',
      ].join('\n'),
    );
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function handleCtaClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    if (isNarrow) {
      setMobileFormOpen(true);
      return;
    }
    onExpand();
  }

  function handleCollapse(event?: MouseEvent<HTMLButtonElement>) {
    event?.preventDefault();
    event?.stopPropagation();
    setMobileFormOpen(false);
    setForm(emptyForm);
    setSubmitted(false);
    onCollapse();
  }

  return (
    <motion.div
      whileHover={expanded || compacted || anyExpanded || isNarrow ? undefined : 'hover'}
      variants={{ hover: { scale: 1.03 } }}
      transition={{ duration: 0.8, ease: 'backInOut' }}
      className={`relative z-10 min-w-0 overflow-hidden rounded-xl font-[Inter,sans-serif] shadow-lg ${background} ${
        compacted ? 'cursor-pointer p-5' : 'p-7 sm:p-8'
      }`}
      style={{ height: isNarrow ? 'auto' : CARD_HEIGHT, minHeight: isNarrow ? undefined : CARD_HEIGHT }}
      onClick={compacted ? onExpand : undefined}
      onKeyDown={
        compacted
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onExpand();
              }
            }
          : undefined
      }
      role={compacted ? 'button' : undefined}
      tabIndex={compacted ? 0 : undefined}
      aria-label={compacted ? `Open ${title}` : undefined}
    >
      <div className={`relative z-10 min-h-0 text-white ${isNarrow ? '' : 'h-full'}`}>
        {!isNarrow ? (
          <>
            <motion.div
              initial={false}
              animate={{
                opacity: !expanded && !compacted ? 1 : 0,
              }}
              transition={{ duration: 0.25, ease: EASE }}
              className="absolute inset-0 flex flex-col"
              style={{ pointerEvents: !expanded && !compacted ? 'auto' : 'none' }}
              aria-hidden={expanded || compacted}
            >
              <span
                className={`mb-4 block text-xs font-semibold uppercase tracking-[0.05em] ${labelClass}`}
              >
                {label}
              </span>
              <motion.h3
                variants={{ hover: { scale: 1 } }}
                initial={{ scale: 0.96 }}
                transition={{ duration: 0.8, ease: 'backInOut' }}
                className="mb-4 origin-top-left font-['Inter_Tight_Regular',Inter,sans-serif] text-[1.75rem] font-medium leading-tight tracking-[-0.02em]"
              >
                {title}
              </motion.h3>
              <p className="mb-6 text-sm leading-relaxed text-white/90">{description}</p>
              <div className="mt-auto">
                <button
                  type="button"
                  className={`${ctaClassName} relative z-30`}
                  onClick={handleCtaClick}
                >
                  {cta}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: compacted ? 1 : 0 }}
              transition={{ duration: 0.25, ease: EASE, delay: compacted ? 0.1 : 0 }}
              className="absolute inset-0 flex flex-col justify-between"
              style={{ pointerEvents: compacted ? 'auto' : 'none' }}
              aria-hidden={!compacted}
            >
              <div>
                <span
                  className={`mb-3 block text-[11px] font-semibold uppercase tracking-[0.05em] ${labelClass}`}
                >
                  {label}
                </span>
                <h3 className="font-['Inter_Tight_Regular',Inter,sans-serif] text-lg font-medium leading-snug tracking-[-0.02em]">
                  {title}
                </h3>
              </div>
              <span className="text-sm font-medium text-white/80">{cta} →</span>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.28, ease: EASE, delay: expanded ? 0.12 : 0 }}
              className="absolute inset-0 grid min-h-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
              style={{ pointerEvents: expanded ? 'auto' : 'none' }}
              aria-hidden={!expanded}
            >
              <div className="flex min-w-0 flex-col">
                <span
                  className={`mb-3 block text-xs font-semibold uppercase tracking-[0.05em] ${labelClass}`}
                >
                  {label}
                </span>
                <h3 className="mb-3 font-['Inter_Tight_Regular',Inter,sans-serif] text-[1.6rem] font-medium leading-tight tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mb-4 max-w-[34ch] text-sm leading-relaxed text-white/90">
                  {description}
                </p>
                <button type="button" className={backClassName} onClick={handleCollapse}>
                  Back to options
                </button>
              </div>

              <div className="flex min-h-0 min-w-0 flex-col">
                {submitted ? (
                  <div className={`flex h-full flex-col justify-between gap-4 p-4 ${formPanelClassName}`}>
                    <p className={formBodyClassName}>
                      Thanks — your mail client should open with this request. If it
                      doesn&apos;t, email us at {BOOKING_EMAIL}.
                    </p>
                    <button type="button" className={formSubmitClassName} onClick={handleCollapse}>
                      Close
                    </button>
                  </div>
                ) : (
                  <form
                    className={`flex h-full min-h-0 flex-col gap-2 overflow-auto p-4 ${formPanelClassName}`}
                    onSubmit={handleSubmit}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <p className={formLabelClassName}>Your details</p>
                    <label className="sr-only" htmlFor={`${formId}-name`}>
                      Name
                    </label>
                    <input
                      id={`${formId}-name`}
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      className={fieldClassName}
                      value={form.name}
                      onChange={(event) => updateField('name', event.target.value)}
                    />
                    <label className="sr-only" htmlFor={`${formId}-email`}>
                      Email
                    </label>
                    <input
                      id={`${formId}-email`}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Work email"
                      className={fieldClassName}
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                    />
                    <label className="sr-only" htmlFor={`${formId}-company`}>
                      Company
                    </label>
                    <input
                      id={`${formId}-company`}
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Company"
                      className={fieldClassName}
                      value={form.company}
                      onChange={(event) => updateField('company', event.target.value)}
                    />
                    <label className="sr-only" htmlFor={`${formId}-phone`}>
                      Phone
                    </label>
                    <input
                      id={`${formId}-phone`}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone (optional)"
                      className={fieldClassName}
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                    />
                    <label className="sr-only" htmlFor={`${formId}-message`}>
                      Message
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      name="message"
                      rows={2}
                      placeholder="What should we cover?"
                      className={`${fieldClassName} resize-none`}
                      value={form.message}
                      onChange={(event) => updateField('message', event.target.value)}
                    />
                    <button type="submit" className={`mt-auto ${formSubmitClassName}`}>
                      Send request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        ) : (
          <div className="flex flex-col">
            <span
              className={`mb-3 block text-xs font-semibold uppercase tracking-[0.05em] ${labelClass}`}
            >
              {label}
            </span>
            <h3 className="mb-3 font-['Inter_Tight_Regular',Inter,sans-serif] text-[1.5rem] font-medium leading-tight tracking-[-0.02em]">
              {title}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/90">{description}</p>

            {!showForm ? (
              <button
                type="button"
                className={`${ctaClassName} relative z-30`}
                onClick={handleCtaClick}
              >
                {cta}
              </button>
            ) : submitted ? (
              <div className={`flex flex-col justify-between gap-4 p-4 ${formPanelClassName}`}>
                <p className={formBodyClassName}>
                  Thanks — your mail client should open with this request. If it
                  doesn&apos;t, email us at {BOOKING_EMAIL}.
                </p>
                <button type="button" className={formSubmitClassName} onClick={handleCollapse}>
                  Close
                </button>
              </div>
            ) : (
              <div className="relative z-30 flex flex-col gap-2">
                <form
                  className={`flex flex-col gap-2 p-4 ${formPanelClassName}`}
                  onSubmit={handleSubmit}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <p className={formLabelClassName}>Your details</p>
                    <button
                      type="button"
                      className={
                        formIsWhite
                          ? 'shrink-0 text-sm font-medium text-neutral-600 underline-offset-2 hover:text-neutral-900 hover:underline'
                          : 'shrink-0 text-sm font-medium text-white/70 underline-offset-2 hover:text-white hover:underline'
                      }
                      onClick={handleCollapse}
                    >
                      Cancel
                    </button>
                  </div>
                  <label className="sr-only" htmlFor={`${formId}-name`}>
                    Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    className={fieldClassName}
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                  />
                  <label className="sr-only" htmlFor={`${formId}-email`}>
                    Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Work email"
                    className={fieldClassName}
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                  />
                  <label className="sr-only" htmlFor={`${formId}-company`}>
                    Company
                  </label>
                  <input
                    id={`${formId}-company`}
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Company"
                    className={fieldClassName}
                    value={form.company}
                    onChange={(event) => updateField('company', event.target.value)}
                  />
                  <label className="sr-only" htmlFor={`${formId}-phone`}>
                    Phone
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone (optional)"
                    className={fieldClassName}
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                  />
                  <label className="sr-only" htmlFor={`${formId}-message`}>
                    Message
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={3}
                    placeholder="What should we cover?"
                    className={`${fieldClassName} resize-none`}
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                  />
                  <button type="submit" className={`mt-2 ${formSubmitClassName}`}>
                    Send request
                  </button>
                </form>
                <button
                  type="button"
                  className="relative z-20 w-full rounded-full border border-white/40 bg-transparent py-2.5 text-center text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                  onClick={handleCollapse}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
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
