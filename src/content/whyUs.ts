export type WhyUsItem = {
  id: string;
  lobe: string;
  title: string;
  description: string;
};

export const whyUsContent = {
  eyebrow: 'Why us',
  title: 'The Future of Security Starts Here',
  intro:
    'The AI era is transforming cybersecurity across three critical fronts, and ParityBit secures them all.',
  items: [
    {
      id: 'soc',
      lobe: 'IN-HOUSE SOC',
      title: 'Accelerate the SOC with AI',
      description:
        'Drive SOC transformation with an in-house Canadian team, unified detection, and 24/7 monitoring, so breaches stop faster, without enterprise bloat.',
    },
    {
      id: 'intel',
      lobe: 'THREAT INTEL',
      title: 'Stop AI-accelerated adversaries',
      description:
        'Real-time APT attribution and underground surveillance so analysts see nation-state and criminal activity early, and every alert ships with a next step.',
    },
    {
      id: 'defense',
      lobe: 'SECURE OPS',
      title: 'Scale secure operations',
      description:
        'Right-sized for SMBs and MSPs, with Canadian compliance coverage across OSFI B-13, FINTRAC, PIPEDA, ISO 27001, and PCI DSS.',
    },
  ] satisfies WhyUsItem[],
};
