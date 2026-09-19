import { homeAnchors } from './homeAnchors';

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export const footerContent = {
  newsletter: {
    eyebrow: 'Quarterly digest',
    title: 'Get the digest in your inbox.',
    description:
      'One short memo per quarter. No marketing, no tracking pixels, unsubscribe in one click.',
    placeholder: 'you@work.com',
    buttonLabel: 'Subscribe',
  },
  brand: 'ParityBit Security',
  tagline:
    'Cybersecurity that actually works. Evidence-first tooling and services for teams that need the signal, not the noise.',
  phone: '+1 (204) 963-7230',
  email: 'contact@paritybitsecurity.com',
  location: 'Winnipeg, Canada',
  socStatus: 'SOCs live · 24/7',
  columns: [
    {
      title: 'Platform',
      links: [
        { label: 'Atlas', href: 'https://paritybitsecurity.com/platform/atlas' },
        { label: 'Vector', href: 'https://paritybitsecurity.com/platform/vector' },
        { label: 'Trace', href: 'https://paritybitsecurity.com/platform/trace' },
        { label: 'ZeroXphish', href: 'https://zerophish.paritybitsecurity.com/' },
        { label: 'Platform overview', href: homeAnchors.products },
      ],
    },
    {
      title: 'Solutions',
      links: [
        // { label: 'Financial services', href: '/case-studies' },
        { label: 'Financial services', href: homeAnchors.top },
        // { label: 'Healthcare', href: '/case-studies' },
        { label: 'Healthcare', href: homeAnchors.top },
        // { label: 'Public sector', href: '/case-studies' },
        { label: 'Public sector', href: homeAnchors.top },
        // { label: 'Exposure management', href: '/services' },
        { label: 'Exposure management', href: homeAnchors.services },
        // { label: 'Incident response', href: '/services/rapid-incident-response-management' },
        { label: 'Incident response', href: homeAnchors.services },
      ],
    },
    {
      title: 'Services',
      links: [
        // { label: 'VAPT', href: '/services/ai-powered-threat-detection-system' },
        { label: 'VAPT', href: homeAnchors.services },
        // { label: 'Phishing simulation', href: '/services/intelligent-threat-monitoring' },
        { label: 'Phishing simulation', href: homeAnchors.services },
        // { label: 'Dark web monitoring', href: '/services/advanced-cloud-security-protection' },
        { label: 'Dark web monitoring', href: homeAnchors.services },
        // { label: 'Cloud security', href: '/services/advanced-cloud-security-protection' },
        { label: 'Cloud security', href: homeAnchors.services },
        // { label: 'Compliance & risk', href: '/services' },
        { label: 'Compliance & risk', href: homeAnchors.services },
        // { label: 'All services', href: '/services' },
        { label: 'All services', href: homeAnchors.services },
      ],
    },
    {
      title: 'Resources',
      links: [
        // { label: 'Blog', href: '/blogs' },
        { label: 'Blog', href: homeAnchors.research },
        // { label: 'Library', href: '/blogs' },
        { label: 'Library', href: homeAnchors.research },
        // { label: 'Events', href: '/blogs' },
        { label: 'Events', href: homeAnchors.top },
        // { label: 'Trust center', href: '/about' },
        { label: 'Trust center', href: homeAnchors.top },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: '© 2026 ParityBit Security. Securing your data Bit-by-Bit.',
  legal: [
    { label: 'About', href: homeAnchors.top },
    // { label: 'Careers', href: '/teams' },
    { label: 'Careers', href: homeAnchors.top },
    { label: 'Contact', href: homeAnchors.briefing },
    // { label: 'Privacy', href: '/about' },
    { label: 'Privacy', href: homeAnchors.top },
    // { label: 'Terms', href: '/about' },
    { label: 'Terms', href: homeAnchors.top },
    // { label: 'Trust center', href: '/about' },
    { label: 'Trust center', href: homeAnchors.top },
  ],
  social: [
    {
      label: 'X',
      href: 'https://x.com/',
      icon: '/assets/images/33rDQXnqeELgyzGqFx8c83lHke4-51e6117a.svg',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/paritybitsecurity/',
      icon: '/assets/images/qB5792DCcdXcm8D6OLNC7qMYFE-a3a802ff.svg',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/',
      icon: '/assets/images/xCMwW363AKtSqExMnUWduaSHA-9a7731f9.svg',
    },
  ],
};
