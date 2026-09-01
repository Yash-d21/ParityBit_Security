export type PartnerLogo = {
  name: string;
  src: string;
  size: 'chamber' | 'microsoft' | 'google' | 'aws';
};

export const partnerLogos: PartnerLogo[] = [
  { name: 'The Chamber', src: '/assets/partners/the-chamber.png', size: 'chamber' },
  { name: 'Microsoft', src: '/partners/microsoft.svg', size: 'microsoft' },
  { name: 'North Forge', src: '/assets/partners/north-forge.png', size: 'chamber' },
  { name: 'Google Cloud', src: '/partners/googlecloud.svg', size: 'google' },
  { name: 'AWS', src: '/partners/aws.svg', size: 'aws' },
];
