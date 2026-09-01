export type ProductItem = {
  vendor: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
};

export const productsContent = {
  eyebrow: 'Our products',
  titleLead: 'Four AI-native products. One ',
  titleAccent: 'mission.',
  items: [
    {
      vendor: 'Threat Intelligence by ParityBit',
      name: 'ATLAS',
      subtitle: 'ThreatAtlas',
      description: 'AI-Driven Threat Intelligence Platform.',
      features: [
        'Real-time APT attribution across nation-state and criminal groups',
        '24/7 dark web and underground surveillance',
      ],
      image: '/assets/images/products/atlas.png',
    },
    {
      vendor: 'AI Powered SIEM Solution',
      name: 'VECTOR',
      subtitle: 'AI-Powered Unified SOC Platform.',
      description: '',
      features: [
        'One console for detection, tickets, and response',
        'Auto compliance monitoring across frameworks',
      ],
      image: '/assets/images/products/vector.png',
    },
    {
      vendor: 'Intelligence Gathering & Analysis System',
      name: 'Trace',
      subtitle: 'ParityBit Trace',
      description: 'AI-Powered Investigation & OSINT Platform.',
      features: [
        'Plain text conversational investigation queries',
        'Multi-source deep & dark web correlation',
      ],
      image: '/assets/images/products/trace.png',
    },
    {
      vendor: 'Advanced Phishing Simulation & Awareness',
      name: 'ZeroXphish',
      subtitle: 'Advanced Phishing Simulation & Awareness Platform.',
      description: '',
      features: [
        'Tailored phishing campaigns per organization',
        'High-fidelity landing pages & attack scenarios',
      ],
      image: '/assets/images/products/zeroxphish.png',
    },
  ] satisfies ProductItem[],
};
