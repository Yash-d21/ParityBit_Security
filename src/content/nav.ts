import { homeAnchors } from './homeAnchors';

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
  href: homeAnchors.briefing,
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
          { label: 'Exposure management', href: homeAnchors.capabilities },
          // { label: 'Incident response', href: '/services' },
          { label: 'Incident response', href: homeAnchors.capabilities },
          // { label: 'Threat intel enrichment', href: '/services' },
          { label: 'Threat intel enrichment', href: homeAnchors.capabilities },
          // { label: 'Compliance automation', href: '/services' },
          { label: 'Compliance automation', href: homeAnchors.capabilities },
        ],
      },
      {
        title: "What's new",
        featured: {
          title: 'Atlas 4.1: graph-native threat intelligence',
          description: 'Fan-out investigation paths with evidence-grade provenance.',
          cta: 'Read more',
          // href: '/blogs',
          href: homeAnchors.research,
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
          { label: 'Financial services', href: homeAnchors.top },
          // { label: 'Healthcare', href: '/case-studies' },
          { label: 'Healthcare', href: homeAnchors.top },
          // { label: 'Public sector', href: '/case-studies' },
          { label: 'Public sector', href: homeAnchors.top },
          // { label: 'Technology', href: '/case-studies' },
          { label: 'Technology', href: homeAnchors.top },
        ],
      },
      {
        title: 'By use case',
        items: [
          // { label: 'Exposure management', href: '/services' },
          { label: 'Exposure management', href: homeAnchors.services },
          // { label: 'Incident response', href: '/services' },
          { label: 'Incident response', href: homeAnchors.services },
          // { label: 'Threat intel', href: '/services' },
          { label: 'Threat intel', href: homeAnchors.services },
          // { label: 'Compliance', href: '/services' },
          { label: 'Compliance', href: homeAnchors.services },
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
          { label: 'VAPT', description: 'Vulnerability assessment & penetration testing', href: homeAnchors.services },
          { label: 'Cloud penetration testing', description: 'External and cloud attack-surface testing', href: homeAnchors.services },
          { label: 'Network & wireless testing', description: 'Network, wireless, and AD assessments', href: homeAnchors.services },
        ],
      },
      {
        title: 'Defensive',
        items: [
          { label: 'Managed SOC & SIEM', description: 'Continuous monitoring and detection', href: homeAnchors.services },
          { label: 'EDR & threat hunting', description: 'Endpoint defense and incident response', href: homeAnchors.services },
          { label: 'Cloud & network security', description: 'Defend across cloud and networks', href: homeAnchors.services },
        ],
      },
      {
        title: 'AI',
        items: [
          { label: 'AI/ML security assessment', description: 'Model and pipeline risk reviews', href: homeAnchors.services },
          { label: 'LLM & GenAI testing', description: 'GenAI attack-surface testing', href: homeAnchors.services },
          { label: 'AI governance & automation', description: 'Risk management and security automation', href: homeAnchors.services },
        ],
      },
      {
        title: 'Governance, Risk & Compliance',
        items: [
          { label: 'Compliance readiness', description: 'Framework readiness and documentation', href: homeAnchors.services },
          { label: 'Risk & TPRM', description: 'Risk assessment and third-party risk', href: homeAnchors.services },
          { label: 'Awareness & training', description: 'Security policies and training programs', href: homeAnchors.services },
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
          { label: 'Blog', href: homeAnchors.research },
          // { label: 'Research library', href: '/blogs' },
          { label: 'Research library', href: homeAnchors.research },
          // { label: 'Case studies', href: '/case-studies' },
          { label: 'Case studies', href: homeAnchors.top },
          // { label: 'Events', href: '/blogs' },
          { label: 'Events', href: homeAnchors.top },
        ],
      },
      {
        title: 'Tools',
        items: [
          // { label: 'Trust center', href: '/about' },
          { label: 'Trust center', href: homeAnchors.top },
          // { label: 'Release notes', href: '/blogs' },
          { label: 'Release notes', href: homeAnchors.top },
          // { label: 'Security advisories', href: '/blogs' },
          { label: 'Security advisories', href: homeAnchors.top },
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
          { label: 'Our story', href: homeAnchors.top },
          // { label: 'Careers', href: '/teams' },
          { label: 'Careers', href: homeAnchors.top },
          // { label: 'Newsroom', href: '/blogs' },
          { label: 'Newsroom', href: homeAnchors.top },
        ],
      },
      {
        title: 'Get in touch',
        items: [
          { label: 'Contact sales', href: homeAnchors.briefing },
          { label: 'Report a breach', href: homeAnchors.briefing },
          { label: 'Partner program', href: homeAnchors.briefing },
        ],
      },
    ],
  },
];
