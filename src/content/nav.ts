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
          { label: 'Atlas', description: 'Threat intelligence graph', href: 'https://paritybitsecurity.com/platform/atlas' },
          { label: 'Vector', description: 'Unified detection & response', href: 'https://paritybitsecurity.com/platform/vector' },
          { label: 'Trace', description: 'OSINT & attribution', href: 'https://paritybitsecurity.com/platform/trace' },
          { label: 'ZeroXphish', description: 'Human-risk simulation', href: 'https://zerophish.paritybitsecurity.com/' },
        ],
      },
      {
        title: 'Capabilities',
        items: [
          // { label: 'Exposure management', href: '/services' },
          { label: 'Exposure management', href: '#' },
          // { label: 'Incident response', href: '/services' },
          { label: 'Incident response', href: '#' },
          // { label: 'Threat intel enrichment', href: '/services' },
          { label: 'Threat intel enrichment', href: '#' },
          // { label: 'Compliance automation', href: '/services' },
          { label: 'Compliance automation', href: '#' },
        ],
      },
      {
        title: "What's new",
        featured: {
          title: 'Atlas 4.1: graph-native threat intelligence',
          description: 'Fan-out investigation paths with evidence-grade provenance.',
          cta: 'Read more',
          // href: '/blogs',
          href: '#',
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
          // { label: 'Financial services', href: '/case-studies' },
          { label: 'Financial services', href: '#' },
          // { label: 'Healthcare', href: '/case-studies' },
          { label: 'Healthcare', href: '#' },
          // { label: 'Public sector', href: '/case-studies' },
          { label: 'Public sector', href: '#' },
          // { label: 'Technology', href: '/case-studies' },
          { label: 'Technology', href: '#' },
        ],
      },
      {
        title: 'By use case',
        items: [
          // { label: 'Exposure management', href: '/services' },
          { label: 'Exposure management', href: '#' },
          // { label: 'Incident response', href: '/services' },
          { label: 'Incident response', href: '#' },
          // { label: 'Threat intel', href: '/services' },
          { label: 'Threat intel', href: '#' },
          // { label: 'Compliance', href: '/services' },
          { label: 'Compliance', href: '#' },
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
          // { label: 'VAPT', href: '/services/ai-powered-threat-detection-system' },
          { label: 'VAPT', href: '#' },
          // { label: 'Phishing simulation', href: '/services/intelligent-threat-monitoring' },
          { label: 'Phishing simulation', href: '#' },
        ],
      },
      {
        title: 'Defensive',
        items: [
          // { label: 'Dark web monitoring', href: '/services/advanced-cloud-security-protection' },
          { label: 'Dark web monitoring', href: '#' },
          // { label: 'Cloud security', href: '/services/advanced-cloud-security-protection' },
          { label: 'Cloud security', href: '#' },
          // { label: 'NW segmentation & OS/DB', href: '/services/end-to-end-data-encryption-service' },
          { label: 'NW segmentation & OS/DB', href: '#' },
          // { label: 'Email security', href: '/services/rapid-incident-response-management' },
          { label: 'Email security', href: '#' },
        ],
      },
      {
        title: 'Governance',
        items: [
          // { label: 'Compliance & risk', href: '/services' },
          { label: 'Compliance & risk', href: '#' },
          // { label: 'Patch management', href: '/services' },
          { label: 'Patch management', href: '#' },
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
          // { label: 'Blog', href: '/blogs' },
          { label: 'Blog', href: '#' },
          // { label: 'Research library', href: '/blogs' },
          { label: 'Research library', href: '#' },
          // { label: 'Case studies', href: '/case-studies' },
          { label: 'Case studies', href: '#' },
          // { label: 'Events', href: '/blogs' },
          { label: 'Events', href: '#' },
        ],
      },
      {
        title: 'Tools',
        items: [
          // { label: 'Trust center', href: '/about' },
          { label: 'Trust center', href: '#' },
          // { label: 'Release notes', href: '/blogs' },
          { label: 'Release notes', href: '#' },
          // { label: 'Security advisories', href: '/blogs' },
          { label: 'Security advisories', href: '#' },
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
          // { label: 'Our story', href: '/about' },
          { label: 'Our story', href: '#' },
          // { label: 'Careers', href: '/teams' },
          { label: 'Careers', href: '#' },
          // { label: 'Newsroom', href: '/blogs' },
          { label: 'Newsroom', href: '#' },
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
