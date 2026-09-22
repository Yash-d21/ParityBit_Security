import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import { ScrollToTop } from './components/ScrollToTop';
import { bookingSectionHref } from './content/cta';
import {
  About,
  Blogs,
  BlogsBuildingSaferNetworksWithZeroTrust,
  BlogsHowAiImprovesThreatDetectionAndResponseTime,
  BlogsPreventingThreatsThroughEarlyDetection,
  BlogsSecuringCloudEnvironmentsForModernEnterprises,
  BlogsWhyZeroTrustSecurityMattersToday,
  BlogsWhyZeroTrustSecurityMattersToday2,
  Home,
  NotFound,
  Pricing,
  Services,
  ServicesAdvancedCloudSecurityProtection,
  ServicesAiPoweredThreatDetectionSystem,
  ServicesEndToEndDataEncryptionService,
  ServicesIntelligentThreatMonitoring,
  ServicesRapidIncidentResponseManagement,
  Teams,
} from './routes';

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading page">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteNav />
      <div className="app-shell">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<Navigate to="/" replace />} />
            <Route path="/case-studies/*" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Navigate to={bookingSectionHref} replace />} />
            <Route
              path="/services/ai-powered-threat-detection-system"
              element={<ServicesAiPoweredThreatDetectionSystem />}
            />
            <Route
              path="/services/rapid-incident-response-management"
              element={<ServicesRapidIncidentResponseManagement />}
            />
            <Route
              path="/services/intelligent-threat-monitoring"
              element={<ServicesIntelligentThreatMonitoring />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blogs/securing-cloud-environments-for-modern-enterprises"
              element={<BlogsSecuringCloudEnvironmentsForModernEnterprises />}
            />
            <Route
              path="/blogs/how-ai-improves-threat-detection-and-response-time"
              element={<BlogsHowAiImprovesThreatDetectionAndResponseTime />}
            />
            <Route
              path="/blogs/preventing-threats-through-early-detection"
              element={<BlogsPreventingThreatsThroughEarlyDetection />}
            />
            <Route path="/teams" element={<Teams />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/services/advanced-cloud-security-protection"
              element={<ServicesAdvancedCloudSecurityProtection />}
            />
            <Route
              path="/services/end-to-end-data-encryption-service"
              element={<ServicesEndToEndDataEncryptionService />}
            />
            <Route
              path="/blogs/why-zero-trust-security-matters-today"
              element={<BlogsWhyZeroTrustSecurityMattersToday />}
            />
            <Route
              path="/blogs/why-zero-trust-security-matters-today-2"
              element={<BlogsWhyZeroTrustSecurityMattersToday2 />}
            />
            <Route
              path="/blogs/building-safer-networks-with-zero-trust"
              element={<BlogsBuildingSaferNetworksWithZeroTrust />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
