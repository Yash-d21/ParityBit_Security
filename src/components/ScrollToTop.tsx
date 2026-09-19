import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_OFFSET = 72;

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const raw = decodeURIComponent(hash.replace(/^#/, ''));
  const id = raw || 'top';

  if (id === 'top') {
    const hero = document.getElementById('top');
    if (hero) {
      hero.scrollIntoView({ behavior, block: 'start' });
      return true;
    }
    window.scrollTo({ top: 0, left: 0, behavior });
    return true;
  }

  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

function scheduleScrollToHash(hash: string) {
  const run = () => scrollToHash(hash);
  if (run()) return;

  window.requestAnimationFrame(() => {
    if (run()) return;
    window.setTimeout(run, 120);
  });
}

function resolveInPageHash(href: string): string | null {
  if (href === '#' || href === '/#' || href === '/#top') return '#top';

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return null;
  }

  if (url.origin !== window.location.origin) return null;
  if (url.pathname !== window.location.pathname) return null;

  if (!url.hash || url.hash === '#') return '#top';
  return url.hash;
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash && hash !== '#') {
      scheduleScrollToHash(hash);
      return;
    }

    if (hash === '#' || hash === '#top') {
      scheduleScrollToHash('#top');
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.target && link.target !== '_self') return;

      const href = link.getAttribute('href');
      if (!href) return;

      const nextHash = resolveInPageHash(href);
      if (!nextHash) return;

      event.preventDefault();
      event.stopPropagation();

      const next = `${window.location.pathname}${window.location.search}${nextHash}`;
      const currentHash = window.location.hash || '';
      const normalizedCurrent = !currentHash || currentHash === '#' ? '#top' : currentHash;

      if (normalizedCurrent === nextHash) {
        scheduleScrollToHash(nextHash);
        return;
      }

      navigate(next);
      scheduleScrollToHash(nextHash);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [navigate]);

  return null;
}
