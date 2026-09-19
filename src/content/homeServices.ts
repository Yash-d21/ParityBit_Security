export type HomeServiceCard = {
  category: string;
  href: string;
  icon: string;
  iconObjectFit?: 'cover' | 'contain';
  items: string[];
  description: string;
};

/** Homepage "Our services" cards — five offerings per category. */
export const homeServiceCards: HomeServiceCard[] = [
  {
    category: 'Offensive',
    // href: '/services/rapid-incident-response-management',
    href: '/#services',
    icon: '/assets/images/qh9WSzmiZO49WPjU5MLP5yjGNnQ-6ffb0c75.svg',
    items: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Cloud Penetration Testing',
      'Network Penetration Testing',
      'Wireless Security Testing',
      'Active Directory Security Assessment',
    ],
    description:
      'Includes external attack surface testing and breach & attack simulation (BAS).',
  },
  {
    category: 'Defensive',
    // href: '/services/intelligent-threat-monitoring',
    href: '/#services',
    icon: '/assets/images/SIb2C40P2SYrdZDpd43ru9IWG2M-871825af.svg',
    items: [
      'Managed SOC & SIEM Monitoring',
      'Endpoint Detection & Response (EDR)',
      'Threat Hunting & Incident Response',
      'Cloud Security',
      'Network Security',
    ],
    description:
      'Monitor, detect, hunt, and respond across endpoints, cloud, and networks.',
  },
  {
    category: 'AI',
    // href: '/services/ai-powered-threat-detection-system',
    href: '/#services',
    icon: '/assets/images/service-icon-ai.webp',
    iconObjectFit: 'contain',
    items: [
      'AI/ML Security Assessment',
      'LLM & GenAI Penetration Testing',
      'AI Governance & Risk Management',
      'AI Threat Detection',
      'Security Automation',
    ],
    description:
      'Assess, govern, and defend AI systems from model risk to GenAI attack surfaces.',
  },
  {
    category: 'Governance, Risk & Compliance',
    // href: '/services',
    href: '/#services',
    icon: '/assets/images/hEdInb3mCJe8MyL1oTSA35AmZY-e5e95267.svg',
    items: [
      'Compliance Management & Readiness',
      'Risk Assessment & Management',
      'Security Policies & Documentation',
      'Third Party Risk Management (TPRM)',
      'Security Awareness & Training',
    ],
    description:
      'Compliance readiness, risk management, policies, and third-party risk in one program.',
  },
];
