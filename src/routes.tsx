import { lazy } from 'react';

export const Home = lazy(() => import('./pages/Home'));
export const About = lazy(() => import('./pages/About'));
export const Services = lazy(() => import('./pages/Services'));
export const Contact = lazy(() => import('./pages/Contact'));
export const Blogs = lazy(() => import('./pages/Blogs'));
export const CaseStudies = lazy(() => import('./pages/CaseStudies'));
export const Pricing = lazy(() => import('./pages/Pricing'));
export const Teams = lazy(() => import('./pages/Teams'));
export const NotFound = lazy(() => import('./pages/NotFound'));

export const ServicesAiPoweredThreatDetectionSystem = lazy(
  () => import('./pages/ServicesAiPoweredThreatDetectionSystem'),
);
export const ServicesRapidIncidentResponseManagement = lazy(
  () => import('./pages/ServicesRapidIncidentResponseManagement'),
);
export const ServicesIntelligentThreatMonitoring = lazy(
  () => import('./pages/ServicesIntelligentThreatMonitoring'),
);
export const ServicesAdvancedCloudSecurityProtection = lazy(
  () => import('./pages/ServicesAdvancedCloudSecurityProtection'),
);
export const ServicesEndToEndDataEncryptionService = lazy(
  () => import('./pages/ServicesEndToEndDataEncryptionService'),
);

export const BlogsSecuringCloudEnvironmentsForModernEnterprises = lazy(
  () => import('./pages/BlogsSecuringCloudEnvironmentsForModernEnterprises'),
);
export const BlogsHowAiImprovesThreatDetectionAndResponseTime = lazy(
  () => import('./pages/BlogsHowAiImprovesThreatDetectionAndResponseTime'),
);
export const BlogsPreventingThreatsThroughEarlyDetection = lazy(
  () => import('./pages/BlogsPreventingThreatsThroughEarlyDetection'),
);
export const BlogsWhyZeroTrustSecurityMattersToday = lazy(
  () => import('./pages/BlogsWhyZeroTrustSecurityMattersToday'),
);
export const BlogsWhyZeroTrustSecurityMattersToday2 = lazy(
  () => import('./pages/BlogsWhyZeroTrustSecurityMattersToday2'),
);
export const BlogsBuildingSaferNetworksWithZeroTrust = lazy(
  () => import('./pages/BlogsBuildingSaferNetworksWithZeroTrust'),
);

export const CaseStudiesNexabank = lazy(() => import('./pages/CaseStudiesNexabank'));
export const CaseStudiesCloudsync = lazy(() => import('./pages/CaseStudiesCloudsync'));
export const CaseStudiesVertexhealth = lazy(() => import('./pages/CaseStudiesVertexhealth'));
export const CaseStudiesVireon = lazy(() => import('./pages/CaseStudiesVireon'));
export const CaseStudiesMedicoreSystems = lazy(() => import('./pages/CaseStudiesMedicoreSystems'));
export const CaseStudiesFinsecure = lazy(() => import('./pages/CaseStudiesFinsecure'));
