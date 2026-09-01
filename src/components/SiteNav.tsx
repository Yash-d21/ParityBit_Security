import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { brandLogo } from '../content/brand';
import { navCta, navMenus, type NavMenu } from '../content/nav';
import './SiteNav.css';

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
                    <Link to={item.href} className="site-nav__link" onClick={onNavigate}>
                      <span className="site-nav__link-label">{item.label}</span>
                      {item.description && (
                        <span className="site-nav__link-desc">{item.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {section.featured && (
              <div className="site-nav__featured">
                <p className="site-nav__featured-title">{section.featured.title}</p>
                <p className="site-nav__featured-desc">{section.featured.description}</p>
                <Link to={section.featured.href} className="site-nav__featured-cta" onClick={onNavigate}>
                  {section.featured.cta}
                </Link>
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
        <Link to={navCta.href} className="site-nav__cta-btn" onClick={onNavigate}>
          {navCta.button}
        </Link>
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
          <a href="#sign-in" className="site-nav__signin">
            Sign in
          </a>
          <Link to="/contact" className="site-nav__briefing" onClick={closeAll}>
            Request briefing
          </Link>
        </div>

        <button
          type="button"
          className="site-nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="site-nav__mobile" hidden={!mobileOpen}>
        {navMenus.map((menu) => (
          <div key={menu.label} className="site-nav__mobile-group">
            <button
              type="button"
              className="site-nav__mobile-trigger"
              aria-expanded={mobileSection === menu.label}
              onClick={() => setMobileSection(mobileSection === menu.label ? null : menu.label)}
            >
              {menu.label}
              <ChevronDown />
            </button>
            <div className="site-nav__mobile-panel" hidden={mobileSection !== menu.label}>
              {menu.sections.map((section) => (
                <div key={section.title} className="site-nav__mobile-section">
                  <p className="site-nav__section-title">{section.title}</p>
                  {section.items?.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="site-nav__mobile-link"
                      onClick={closeAll}
                    >
                      {item.label}
                      {item.description && <small>{item.description}</small>}
                    </Link>
                  ))}
                  {section.featured && (
                    <div className="site-nav__featured" style={{ marginTop: 12 }}>
                      <p className="site-nav__featured-title">{section.featured.title}</p>
                      <p className="site-nav__featured-desc">{section.featured.description}</p>
                      <Link to={section.featured.href} className="site-nav__featured-cta" onClick={closeAll}>
                        {section.featured.cta}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              <div className="site-nav__cta-block" style={{ marginTop: 12, paddingTop: 16 }}>
                <div className="site-nav__cta-text">
                  <p className="site-nav__cta-eyebrow">{navCta.eyebrow}</p>
                  <p className="site-nav__cta-title">{navCta.title}</p>
                </div>
                <Link to={navCta.href} className="site-nav__cta-btn" onClick={closeAll}>
                  {navCta.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default SiteNav;
