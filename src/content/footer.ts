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
        { label: 'Atlas', href: '/#products' },
        { label: 'Vector', href: '/#products' },
        { label: 'Trace', href: '/#products' },
        { label: 'ZeroXphish', href: '/#products' },
        { label: 'Platform overview', href: '/#products' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Financial services', href: '/case-studies' },
        { label: 'Healthcare', href: '/case-studies' },
        { label: 'Public sector', href: '/case-studies' },
        { label: 'Exposure management', href: '/services' },
        { label: 'Incident response', href: '/services/rapid-incident-response-management' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'VAPT', href: '/services/ai-powered-threat-detection-system' },
        { label: 'Phishing simulation', href: '/services/intelligent-threat-monitoring' },
        { label: 'Dark web monitoring', href: '/services/advanced-cloud-security-protection' },
        { label: 'Cloud security', href: '/services/advanced-cloud-security-protection' },
        { label: 'Compliance & risk', href: '/services' },
        { label: 'All services', href: '/services' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blogs' },
        { label: 'Library', href: '/blogs' },
        { label: 'Events', href: '/blogs' },
        { label: 'Trust center', href: '/about' },
      ],
    },
  ] satisfies FooterColumn[],
  copyright: '© 2026 ParityBit Security. Securing your data Bit-by-Bit.',
  legal: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/teams' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/about' },
    { label: 'Terms', href: '/about' },
    { label: 'Trust center', href: '/about' },
  ],
  social: [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: '/assets/images/SV3GS7t3slFCAxes4rqtAVgKePA-a65af3ce.svg',
    },
    {
      label: 'X',
      href: 'https://x.com/',
      icon: '/assets/images/33rDQXnqeELgyzGqFx8c83lHke4-51e6117a.svg',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: '/assets/images/qB5792DCcdXcm8D6OLNC7qMYFE-a3a802ff.svg',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/',
      icon: '/assets/images/xCMwW363AKtSqExMnUWduaSHA-9a7731f9.svg',
    },
  ],
};
