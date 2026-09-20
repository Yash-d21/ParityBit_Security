import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type MouseEvent as ReactMouseEvent,
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

      {result.relatedServices.length ? (
        <div className="services-marquee__related-services">
          <p className="services-marquee__related-heading">Related services</p>
          <ul className="services-marquee__related-list">
            {result.relatedServices.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="services-marquee__related-link"
                  onClick={() => onPick(item.id)}
                >
                  <span className="services-marquee__related-arrow" aria-hidden="true">
                    ↳
                  </span>
                  <span className="services-marquee__related-title">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function ServicesMarquee() {
  const inputId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Search capabilities…');
  const [result, setResult] = useState<ServiceSearchResult | null>(null);
  const [empty, setEmpty] = useState(false);

  const cancelClose = () => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeSearch = () => {
    cancelClose();
    setOpen(false);
    setPlaceholder('Search capabilities…');
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setOpen(false);
      setPlaceholder('Search capabilities…');
    }, 140);
  };

  const isInsideMarqueeOrSearch = (node: Node | null) => {
    if (!node) return false;
    return Boolean(
      rowsRef.current?.contains(node) || panelRef.current?.contains(node),
    );
  };

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
      if (!isInsideMarqueeOrSearch(event.target as Node)) {
        closeSearch();
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') closeSearch();
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => () => cancelClose(), []);

  const openSearch = (opts?: { prompt?: boolean; seedId?: string }) => {
    cancelClose();
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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next = searchServices(query);
    setResult(next);
    setEmpty(!next && Boolean(query.trim()));
  };

  const pickService = (id: string) => {
    const service = getServiceById(id);
    if (!service) return;
    cancelClose();
    setQuery(service.title);
    setResult(searchServices(service.title));
    setEmpty(false);
    setOpen(true);
    inputRef.current?.focus();
  };

  const onMarqueeZoneLeave = (event: ReactMouseEvent<HTMLElement>) => {
    const next = event.relatedTarget as Node | null;
    if (!isInsideMarqueeOrSearch(next)) {
      scheduleClose();
    }
  };

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className={`services-marquee${open ? ' services-marquee--search-open' : ''}`}
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

        <div className="services-marquee__title-row">
          <h2 id="services-marquee-heading" className="services-marquee__title">
            Security across every{' '}
            <span className="services-marquee__title-accent">layer.</span>
          </h2>
        </div>
      </header>

      {open ? (
        <div className="services-marquee__search-overlay" role="search">
          <div
            className="services-marquee__search-panel"
            ref={panelRef}
            onMouseEnter={cancelClose}
            onMouseLeave={onMarqueeZoneLeave}
          >
            <div className="services-marquee__search is-open">
              <form className="services-marquee__search-field" onSubmit={onSubmit}>
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

            {result ? <SearchResults result={result} onPick={pickService} /> : null}
            {empty ? (
              <p className="services-marquee__empty">
                No exact match. Try a short form like <em>VAPT</em>, <em>EDR</em>, or <em>SOC</em>.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <div
        className="services-marquee__rows"
        ref={rowsRef}
        onMouseEnter={cancelClose}
        onMouseLeave={onMarqueeZoneLeave}
      >
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
