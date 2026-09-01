import React from 'react';
import { Link } from 'react-router-dom';
import { footerContent } from '../content/footer';

function FooterMenuLink({ label, href }: { label: string; href: string }) {
  return (
    <div className="framer-dkjnk7-container" style={{ opacity: '1' }}>
      <Link
        className="framer-ePM9Y framer-u0t8D framer-57x5je framer-v-57x5je framer-z2r6xz"
        data-framer-name="Footer Menu 01"
        to={href}
        style={{ opacity: '1' }}
      >
        <div
          className="framer-isaoc9"
          data-framer-component-type="RichTextContainer"
          style={{
            '--extracted-r6o4lv': 'var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))',
            '--framer-link-text-color': 'rgb(0, 153, 255)',
            '--framer-link-text-decoration': 'underline',
            transform: 'none',
            opacity: '1',
          } as React.CSSProperties}
        >
          <p
            className="framer-text framer-styles-preset-zsangm"
            data-styles-preset="VOzck8Hj3"
            dir="auto"
            style={{
              '--framer-text-color':
                'var(--extracted-r6o4lv, var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255)))',
            } as React.CSSProperties}
          >
            {label}
          </p>
        </div>
        <div
          className="framer-1tlss11"
          data-framer-name="Line"
          style={{
            backgroundColor: 'var(--token-909d902c-90c0-4b01-83b6-87323e344b4a, rgb(255, 255, 255))',
            opacity: '0',
          }}
        />
      </Link>
    </div>
  );
}

function FooterMenuColumn({ title }: { title: string }) {
  const column = footerContent.columns.find((col) => col.title === title);
  if (!column) return null;

  return (
    <div className="framer-footer-col" data-framer-name={`Menu Wrapper ${title}`} style={{ opacity: '1' }}>
      <p className="framer-footer-col-title">{column.title}</p>
      {column.links.map((link) => (
        <FooterMenuLink key={link.label} label={link.label} href={link.href} />
      ))}
    </div>
  );
}

export function FramerFooterMenus() {
  return (
    <div className="framer-1drtwko" data-framer-name="Menu Wrapper " style={{ opacity: '1' }}>
      {footerContent.columns.map((column) => (
        <FooterMenuColumn key={column.title} title={column.title} />
      ))}
    </div>
  );
}
