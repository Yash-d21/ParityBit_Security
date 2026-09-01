export type WhyUsItem = {
  number: string;
  title: string;
  description: string;
};

export const whyUsContent = {
  eyebrow: 'Why us',
  titleLead: 'Security ',
  titleAccent: 'without compromise.',
  intro:
    'In-house SOCs. Real-time intelligence. Full compliance coverage. Scaleable from SMB to enterprise.',
  items: [
    {
      number: '01',
      title: 'Tailored for SMBs & MSPs',
      description:
        'Scalable security without enterprise bloat. Right-sized to your estate and your team.',
    },
    {
      number: '02',
      title: 'In-House SOCs & Experts',
      description:
        '24/7 monitoring by dedicated professionals: our team, in Canada.',
    },
    {
      number: '03',
      title: 'Actionable threat intelligence',
      description:
        'Real-time insights stop attacks early. Every alert ships with a next step.',
    },
    {
      number: '04',
      title: 'Canadian compliance coverage',
      description:
        'OSFI B-13, FINTRAC, PIPEDA, ISO 27001, PCI DSS: audit-ready for Canadian fintechs and MSPs. Processes aligned with ISO 27001 & NIST.',
    },
  ] satisfies WhyUsItem[],
};
