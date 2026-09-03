export type ProductItem = {
  vendor: string;
  name: string;
  subtitle: string;
  paragraph: string;
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
      paragraph:
        'ATLAS is an AI-driven threat intelligence platform. It delivers real-time APT attribution across nation-state and criminal groups, with 24/7 dark web and underground surveillance.',
      image: '/assets/images/products/atlas.png',
    },
    {
      vendor: 'AI Powered SIEM Solution',
      name: 'VECTOR',
      subtitle: 'AI-Powered Unified SOC Platform.',
      paragraph:
        'VECTOR is an AI-powered unified SOC platform. It gives teams one console for detection, tickets, and response, with auto compliance monitoring across frameworks.',
      image: '/assets/images/products/vector.png',
    },
    {
      vendor: 'Intelligence Gathering & Analysis System',
      name: 'Trace',
      subtitle: 'ParityBit Trace',
      paragraph:
        'Trace is an AI-powered investigation and OSINT platform. Analysts run plain-text conversational investigation queries, with multi-source deep and dark web correlation.',
      image: '/assets/images/products/trace.png',
    },
    {
      vendor: 'Advanced Phishing Simulation & Awareness',
      name: 'ZeroXphish',
      subtitle: 'Advanced Phishing Simulation & Awareness Platform.',
      paragraph:
        'ZeroXphish is an advanced phishing simulation and awareness platform. It runs tailored phishing campaigns per organization, with high-fidelity landing pages and attack scenarios.',
      image: '/assets/images/products/zeroxphish.png',
    },
  ] satisfies ProductItem[],
};
