export type NavLink = { label: string; href: string; description?: string };

export type NavFeatured = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type NavSection = {
  title: string;
  items?: NavLink[];
  featured?: NavFeatured;
};

export type NavMenu = {
  label: string;
  sections: NavSection[];
};

export const navCta = {
  eyebrow: 'Next step',
  title: 'Talk to an operator. Not a BDR.',
  button: 'Request a briefing',
  href: '/contact',
} as const;

export const navMenus: NavMenu[] = [
  {
    label: 'Platform',
    sections: [
      {
        title: 'Products',
        items: [
          { label: 'Atlas', description: 'Threat intelligence graph', href: '/#products' },
          { label: 'Vector', description: 'Unified detection & response', href: '/#products' },
          { label: 'Trace', description: 'OSINT & attribution', href: '/#products' },
          { label: 'ZeroXphish', description: 'Human-risk simulation', href: '/#products' },
        ],
      },
      {
        title: 'Capabilities',
        items: [
          { label: 'Exposure management', href: '/services' },
          { label: 'Incident response', href: '/services' },
          { label: 'Threat intel enrichment', href: '/services' },
          { label: 'Compliance automation', href: '/services' },
        ],
      },
      {
        title: "What's new",
        featured: {
          title: 'Atlas 4.1: graph-native threat intelligence',
          description: 'Fan-out investigation paths with evidence-grade provenance.',
          cta: 'Read more',
          href: '/blogs',
        },
      },
    ],
  },
  {
    label: 'Solutions',
    sections: [
      {
        title: 'By industry',
        items: [
          { label: 'Financial services', href: '/case-studies' },
          { label: 'Healthcare', href: '/case-studies' },
          { label: 'Public sector', href: '/case-studies' },
          { label: 'Technology', href: '/case-studies' },
        ],
      },
      {
        title: 'By use case',
        items: [
          { label: 'Exposure management', href: '/services' },
          { label: 'Incident response', href: '/services' },
          { label: 'Threat intel', href: '/services' },
          { label: 'Compliance', href: '/services' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    sections: [
      {
        title: 'Offensive',
        items: [
          { label: 'VAPT', href: '/services/ai-powered-threat-detection-system' },
          { label: 'Phishing simulation', href: '/services/intelligent-threat-monitoring' },
        ],
      },
      {
        title: 'Defensive',
        items: [
          { label: 'Dark web monitoring', href: '/services/advanced-cloud-security-protection' },
          { label: 'Cloud security', href: '/services/advanced-cloud-security-protection' },
          { label: 'NW segmentation & OS/DB', href: '/services/end-to-end-data-encryption-service' },
          { label: 'Email security', href: '/services/rapid-incident-response-management' },
        ],
      },
      {
        title: 'Governance',
        items: [
          { label: 'Compliance & risk', href: '/services' },
          { label: 'Patch management', href: '/services' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    sections: [
      {
        title: 'Learn',
        items: [
          { label: 'Blog', href: '/blogs' },
          { label: 'Research library', href: '/blogs' },
          { label: 'Case studies', href: '/case-studies' },
          { label: 'Events', href: '/blogs' },
        ],
      },
      {
        title: 'Tools',
        items: [
          { label: 'Trust center', href: '/about' },
          { label: 'Release notes', href: '/blogs' },
          { label: 'Security advisories', href: '/blogs' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    sections: [
      {
        title: 'About',
        items: [
          { label: 'Our story', href: '/about' },
          { label: 'Careers', href: '/teams' },
          { label: 'Newsroom', href: '/blogs' },
        ],
      },
      {
        title: 'Get in touch',
        items: [
          { label: 'Contact sales', href: '/contact' },
          { label: 'Report a breach', href: '/contact' },
          { label: 'Partner program', href: '/contact' },
        ],
      },
    ],
  },
];
