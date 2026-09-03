export type PartnerLogo = {
  name: string;
  src: string;
  size: 'microsoft' | 'google' | 'aws' | 'northforge';
};

export const partnerLogos: PartnerLogo[] = [
  { name: 'Microsoft', src: '/partners/microsoft.svg', size: 'microsoft' },
  { name: 'North Forge', src: '/assets/partners/north-forge.png?v=2', size: 'northforge' },
  { name: 'Google Cloud', src: '/partners/googlecloud.svg', size: 'google' },
  { name: 'AWS', src: '/partners/aws.svg', size: 'aws' },
];
