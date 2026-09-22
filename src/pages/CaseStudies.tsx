import React from 'react';
import { Navigate } from 'react-router-dom';

/** Former placeholder case-study routes redirect home. */
const CaseStudyRedirect: React.FC = () => <Navigate to="/" replace />;

export default CaseStudyRedirect;
