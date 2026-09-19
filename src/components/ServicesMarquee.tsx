import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import {
  servicesMarqueeRows,
  type ServiceMarqueeItem,
} from '@/content/servicesMarquee';
import {
  getServiceById,
  searchServices,
  type ServiceSearchResult,
} from '@/lib/serviceSearch';
import './ServicesMarquee.css';

const HOVER_PROMPT = 'Which service are you looking for?';

function ServiceCard({
  item,
  onHoverOpen,
  onSelect,
}: {
  item: ServiceMarqueeItem;
  onHoverOpen: () => void;
  onSelect: (id: string) => void;
}) {
  return (
    <article
      className={`services-marquee__card services-marquee__card--${item.tone}`}
      onMouseEnter={onHoverOpen}
      onFocus={onHoverOpen}
      onClick={() => onSelect(item.id)}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect(item.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Search for ${item.title}`}
    >
      <img src={item.src} alt={item.title} loading="lazy" draggable={false} />
    </article>
  );
}

function SearchResults({
  result,
  onPick,
}: {
  result: ServiceSearchResult;
  onPick: (id: string) => void;
}) {
  return (
    <div className="services-marquee__results" role="region" aria-live="polite">
      {result.correctedFrom ? (
        <p className="services-marquee__correction">
          Showing results for <strong>{result.primary.title}</strong>
          <span> (from “{result.correctedFrom}”)</span>
        </p>
      ) : null}

      <div className="services-marquee__results-grid">
        <button
          type="button"
          className={`services-marquee__result-primary services-marquee__card--${result.primary.tone}`}
          onClick={() => onPick(result.primary.id)}
        >
          <img src={result.primary.src} alt={result.primary.title} />
          <span className="services-marquee__result-label">
            <span className="services-marquee__result-module">{result.primary.module}</span>
            {result.primary.title}
          </span>
        </button>

        <div className="services-marquee__result-related-images">
          {result.relatedImages.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`services-marquee__result-thumb services-marquee__card--${item.tone}`}
              onClick={() => onPick(item.id)}
              aria-label={item.title}
            >
              <img src={item.src} alt={item.title} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesMarquee() {
  const inputId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Search capabilities…');
  const [result, setResult] = useState<ServiceSearchResult | null>(null);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResult(null);
      setEmpty(false);
      return;
    }

    const handle = window.setTimeout(() => {
      const next = searchServices(trimmed);
      setResult(next);
      setEmpty(!next);
    }, 120);

    return () => window.clearTimeout(handle);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!sectionRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const openSearch = (opts?: { prompt?: boolean; seedId?: string }) => {
    setOpen(true);
    if (opts?.prompt) {
      setPlaceholder(HOVER_PROMPT);
    }
    if (opts?.seedId) {
      const seeded = getServiceById(opts.seedId);
      if (seeded) {
        setQuery(seeded.title);
        setPlaceholder(HOVER_PROMPT);
      }
    }
  };

  const toggleSearch = () => {
    setOpen((prev) => {
      if (prev) {
        setPlaceholder('Search capabilities…');
        return false;
      }
      setPlaceholder('Search capabilities…');
      return true;
    });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = searchServices(query);
    setResult(next);
    setEmpty(!next && Boolean(query.trim()));
  };

  const pickService = (id: string) => {
    const service = getServiceById(id);
    if (!service) return;
    setQuery(service.title);
    setResult(searchServices(service.title));
    setEmpty(false);
    setOpen(true);
    inputRef.current?.focus();
  };

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className={`services-marquee${open ? ' services-marquee--search-open' : ''}`}
      data-framer-name="Services Marquee"
      aria-labelledby="services-marquee-heading"
    >
      <header className="services-marquee__header" ref={panelRef}>
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

        <div className="services-marquee__title-row">
          <h2 id="services-marquee-heading" className="services-marquee__title">
            Security across every{' '}
            <span className="services-marquee__title-accent">layer.</span>
          </h2>

          <div className={`services-marquee__search${open ? ' is-open' : ''}`}>
            <button
              type="button"
              className="services-marquee__search-toggle"
              aria-expanded={open}
              aria-controls={inputId}
              aria-label={open ? 'Close capability search' : 'Search capabilities'}
              onClick={toggleSearch}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M16.2 16.2 L20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <form className="services-marquee__search-field" onSubmit={onSubmit} role="search">
              <label className="visually-hidden" htmlFor={inputId}>
                Search services
              </label>
              <input
                id={inputId}
                ref={inputRef}
                type="search"
                value={query}
                placeholder={placeholder}
                autoComplete="off"
                spellCheck={false}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query ? (
                <button
                  type="button"
                  className="services-marquee__search-clear"
                  aria-label="Clear search"
                  onClick={() => {
                    setQuery('');
                    setResult(null);
                    setEmpty(false);
                    inputRef.current?.focus();
                  }}
                >
                  ×
                </button>
              ) : null}
            </form>
          </div>
        </div>

        {open && result ? <SearchResults result={result} onPick={pickService} /> : null}
        {open && empty ? (
          <p className="services-marquee__empty">
            No exact match. Try a short form like <em>VAPT</em>, <em>EDR</em>, or <em>SOC</em>.
          </p>
        ) : null}
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
              <ServiceCard
                key={`${item.id}-${itemIndex}`}
                item={item}
                onHoverOpen={() => openSearch({ prompt: true })}
                onSelect={(id) => openSearch({ prompt: true, seedId: id })}
              />
            ))}
          </InfiniteSlider>
        ))}
      </div>
    </section>
  );
}

export default ServicesMarquee;
