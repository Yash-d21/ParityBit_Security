import React from 'react';
import { Link } from 'react-router-dom';
import { footerContent } from '../content/footer';

export function FramerFooterLegal() {
  return (
    <div className="framer-footer-legal-row">
      <p className="framer-footer-copyright">{footerContent.copyright}</p>
      <nav className="framer-footer-legal" aria-label="Legal">
        {footerContent.legal.map((item, index) => (
          <React.Fragment key={item.label}>
            {index > 0 && <span className="framer-footer-legal-sep" aria-hidden="true">·</span>}
            <Link to={item.href} className="framer-footer-legal-link">
              {item.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
