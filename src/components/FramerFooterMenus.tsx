import React from 'react';
import { Link } from 'react-router-dom';
import { footerContent } from '../content/footer';

function FooterMenuLink({ label, href }: { label: string; href: string }) {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a className="framer-footer-link" href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className="framer-footer-link" to={href}>
      {label}
    </Link>
  );
}

function FooterMenuColumn({ title }: { title: string }) {
  const column = footerContent.columns.find((col) => col.title === title);
  if (!column) return null;

  return (
    <div className="framer-footer-col" data-framer-name={`Menu Wrapper ${title}`}>
      <p className="framer-footer-col-title">{column.title}</p>
      {column.links.map((link) => (
        <FooterMenuLink key={link.label} label={link.label} href={link.href} />
      ))}
    </div>
  );
}

export function FramerFooterMenus() {
  return (
    <div className="framer-1drtwko" data-framer-name="Menu Wrapper ">
      {footerContent.columns.map((column) => (
        <FooterMenuColumn key={column.title} title={column.title} />
      ))}
    </div>
  );
}
