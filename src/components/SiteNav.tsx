import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { brandLogo } from '../content/brand';
import { navCta, navMenus, type NavMenu } from '../content/nav';
import './SiteNav.css';

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function NavItemLink({
  href,
  className,
  onNavigate,
  children,
}: {
  href: string;
  className: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        onClick={onNavigate}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}

function ChevronDown() {
  return (
    <svg className="site-nav__chevron" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: NavMenu; onNavigate: () => void }) {
  return (
    <>
      <div className="site-nav__grid">
        {menu.sections.map((section) => (
          <div key={section.title}>
            <p className="site-nav__section-title">{section.title}</p>
            {section.items && (
              <ul className="site-nav__links">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <NavItemLink href={item.href} className="site-nav__link" onNavigate={onNavigate}>
                      <span className="site-nav__link-label">{item.label}</span>
                      {item.description && (
                        <span className="site-nav__link-desc">{item.description}</span>
                      )}
                    </NavItemLink>
                  </li>
                ))}
              </ul>
            )}
            {section.featured && (
              <div className="site-nav__featured">
                <p className="site-nav__featured-title">{section.featured.title}</p>
                <p className="site-nav__featured-desc">{section.featured.description}</p>
                <NavItemLink
                  href={section.featured.href}
                  className="site-nav__featured-cta"
                  onNavigate={onNavigate}
                >
                  {section.featured.cta}
                </NavItemLink>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="site-nav__cta-block">
        <div className="site-nav__cta-text">
          <p className="site-nav__cta-eyebrow">{navCta.eyebrow}</p>
          <p className="site-nav__cta-title">{navCta.title}</p>
        </div>
        <NavItemLink href={navCta.href} className="site-nav__cta-btn" onNavigate={onNavigate}>
          {navCta.button}
        </NavItemLink>
      </div>
    </>
  );
}

export function SiteNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMenu || !navRef.current) return;

    const item = navRef.current.querySelector('.site-nav__item--open');
    const panel = item?.querySelector('.site-nav__panel') as HTMLElement | null;
    if (!panel) return;

    panel.style.left = '0';
    panel.style.right = 'auto';
    panel.style.transform = 'none';

    const margin = 20;
    const rect = panel.getBoundingClientRect();
    const overflowRight = rect.right - (window.innerWidth - margin);
    const overflowLeft = margin - rect.left;

    if (overflowRight > 0) {
      panel.style.transform = `translateX(-${overflowRight}px)`;
    } else if (overflowLeft > 0) {
      panel.style.transform = `translateX(${overflowLeft}px)`;
    }
  }, [openMenu]);

  return (
    <header className="site-nav" ref={navRef}>
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__logo" onClick={closeAll}>
          <img
            src={brandLogo.src}
            alt={brandLogo.alt}
            width={brandLogo.width}
            height={brandLogo.height}
            className="site-nav__logo-image"
          />
        </Link>

        <ul className="site-nav__menu">
          {navMenus.map((menu) => (
            <li
              key={menu.label}
              className={`site-nav__item${openMenu === menu.label ? ' site-nav__item--open' : ''}`}
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="site-nav__trigger"
                aria-expanded={openMenu === menu.label}
                onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
              >
                {menu.label}
                <ChevronDown />
              </button>
              <div className="site-nav__panel" role="region" aria-label={`${menu.label} menu`}>
                <MenuPanel menu={menu} onNavigate={closeAll} />
              </div>
            </li>
          ))}
        </ul>

        <div className="site-nav__actions">
          <Link to="/#top" className="site-nav__signin" onClick={closeAll}>
            Sign in
          </Link>
          <Link to="/#end-the-cycle" className="site-nav__briefing" onClick={closeAll}>
            Request briefing
          </Link>
        </div>

        <button
          type="button"
          className={`site-nav__toggle${mobileOpen ? ' site-nav__toggle--open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`site-nav__mobile${mobileOpen ? ' site-nav__mobile--open' : ''}`}
        id="site-nav-mobile"
        aria-hidden={!mobileOpen}
      >
        {navMenus.map((menu) => (
          <div key={menu.label} className="site-nav__mobile-group">
            <button
              type="button"
              className={`site-nav__mobile-trigger${mobileSection === menu.label ? ' site-nav__mobile-trigger--open' : ''}`}
              aria-expanded={mobileSection === menu.label}
              onClick={() => setMobileSection(mobileSection === menu.label ? null : menu.label)}
            >
              {menu.label}
              <ChevronDown />
            </button>
            <div
              className={`site-nav__mobile-panel${mobileSection === menu.label ? ' site-nav__mobile-panel--open' : ''}`}
              aria-hidden={mobileSection !== menu.label}
            >
              <div className="site-nav__mobile-panel-inner">
                {menu.sections.map((section) => (
                  <div key={section.title} className="site-nav__mobile-section">
                    <p className="site-nav__section-title">{section.title}</p>
                    {section.items?.map((item) => (
                      <NavItemLink
                        key={item.label}
                        href={item.href}
                        className="site-nav__mobile-link"
                        onNavigate={closeAll}
                      >
                        {item.label}
                        {item.description && <small>{item.description}</small>}
                      </NavItemLink>
                    ))}
                    {section.featured && (
                      <div className="site-nav__featured" style={{ marginTop: 12 }}>
                        <p className="site-nav__featured-title">{section.featured.title}</p>
                        <p className="site-nav__featured-desc">{section.featured.description}</p>
                        <NavItemLink
                          href={section.featured.href}
                          className="site-nav__featured-cta"
                          onNavigate={closeAll}
                        >
                          {section.featured.cta}
                        </NavItemLink>
                      </div>
                    )}
                  </div>
                ))}
                <div className="site-nav__cta-block" style={{ marginTop: 12, paddingTop: 16 }}>
                  <div className="site-nav__cta-text">
                    <p className="site-nav__cta-eyebrow">{navCta.eyebrow}</p>
                    <p className="site-nav__cta-title">{navCta.title}</p>
                  </div>
                  <NavItemLink href={navCta.href} className="site-nav__cta-btn" onNavigate={closeAll}>
                    {navCta.button}
                  </NavItemLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default SiteNav;
