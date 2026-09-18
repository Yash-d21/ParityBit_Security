export type ServiceMarqueeTone = 'black' | 'white' | 'purple';

export type ServiceMarqueeItem = {
  id: string;
  title: string;
  tone: ServiceMarqueeTone;
  src: string;
};

const tones: ServiceMarqueeTone[] = ['black', 'white', 'purple'];

const services = [
  { id: '01', title: 'Vulnerability Assessment', slug: 'vulnerability-assessment' },
  { id: '02', title: 'Penetration Testing', slug: 'penetration-testing' },
  { id: '03', title: 'Web Application Security', slug: 'web-application-security' },
  { id: '04', title: 'API Security', slug: 'api-security' },
  { id: '05', title: 'Mobile End-Point Security', slug: 'mobile-end-point-security' },
  { id: '06', title: 'Cloud Security', slug: 'cloud-security' },
  { id: '07', title: 'Network Security', slug: 'network-security' },
  { id: '08', title: 'Infrastructure Security', slug: 'infrastructure-security' },
  { id: '09', title: 'Managed SOC', slug: 'managed-soc' },
  { id: '10', title: '24/7 Security Monitoring', slug: '24-7-security-monitoring' },
  { id: '11', title: 'SIEM Management', slug: 'siem-management' },
  { id: '12', title: 'EDR/XDR Management', slug: 'edr-xdr-management' },
  { id: '13', title: 'Incident Response', slug: 'incident-response' },
  { id: '14', title: 'Digital Forensics', slug: 'digital-forensics' },
  { id: '15', title: 'Threat Intelligence', slug: 'threat-intelligence' },
  { id: '16', title: 'Threat Hunting', slug: 'threat-hunting' },
  { id: '17', title: 'Dark Web Monitoring', slug: 'dark-web-monitoring' },
  { id: '18', title: 'Attack Surface Management', slug: 'attack-surface-management' },
  { id: '19', title: 'External Attack Surface Management (EASM)', slug: 'easm' },
  { id: '20', title: 'Red Teaming', slug: 'red-teaming' },
  { id: '21', title: 'Purple Teaming', slug: 'purple-teaming' },
  { id: '22', title: 'Adversary Simulation', slug: 'adversary-simulation' },
  { id: '23', title: 'DevSecOps', slug: 'devsecops' },
  { id: '24', title: 'SAST / DAST / SCA', slug: 'sast-dast-sca' },
  { id: '25', title: 'Identity & Access Management (IAM)', slug: 'iam' },
  { id: '26', title: 'Privileged Access Management (PAM)', slug: 'pam' },
  { id: '27', title: 'Zero Trust Security', slug: 'zero-trust-security' },
  { id: '28', title: 'Email Security', slug: 'email-security' },
  { id: '29', title: 'Data Security', slug: 'data-security' },
  { id: '30', title: 'Ransomware Protection & Response', slug: 'ransomware-protection' },
  { id: '31', title: 'Malware Analysis', slug: 'malware-analysis' },
  { id: '32', title: 'Compromise Assessment', slug: 'compromise-assessment' },
  { id: '33', title: 'Third Party Risk Management', slug: 'third-party-risk' },
  { id: '34', title: 'Cybersecurity Risk Assessment', slug: 'cybersecurity-risk-assessment' },
  { id: '35', title: 'Security Architecture Review', slug: 'security-architecture-review' },
  { id: '36', title: 'Security Configuration Review', slug: 'security-configuration-review' },
  { id: '37', title: 'Security Awareness Training', slug: 'security-awareness-training' },
  { id: '38', title: 'Phishing Simulation', slug: 'phishing-simulation' },
  { id: '39', title: 'GRC & Compliance', slug: 'grc-compliance' },
  { id: '40', title: 'ISO 27001 Compliance', slug: 'iso-27001-compliance' },
  { id: '41', title: 'SOC 2 Compliance', slug: 'soc-2-compliance' },
  { id: '42', title: 'PCI DSS Compliance', slug: 'pci-dss-compliance' },
  { id: '43', title: 'GDPR / DPDP Compliance', slug: 'gdpr-dpdp-compliance' },
  { id: '44', title: 'AI Security', slug: 'ai-security' },
  { id: '45', title: 'Container & Kubernetes Security', slug: 'container-kubernetes-security' },
  { id: '46', title: 'DDoS Protection', slug: 'ddos-protection' },
  { id: '47', title: 'WAF Security', slug: 'waf-security' },
  { id: '48', title: 'Security Automation & SOAR', slug: 'security-automation-soar' },
] as const;

export const servicesMarqueeItems: ServiceMarqueeItem[] = services.map(
  (service, index) => {
    const tone = tones[index % 3];
    return {
      id: service.id,
      title: service.title,
      tone,
      src: `/assets/images/services-marquee/service-${service.id}-${service.slug}-${tone}.png`,
    };
  },
);

const ROW_COUNT = 4;
const PER_ROW = Math.ceil(servicesMarqueeItems.length / ROW_COUNT);

/** Unique items per row — no cross-row duplicates (loop clones only for seamless scroll). */
export const servicesMarqueeRows = Array.from({ length: ROW_COUNT }, (_, row) =>
  servicesMarqueeItems.slice(row * PER_ROW, (row + 1) * PER_ROW),
);
