import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import PricingPage from './pages/PricingPage';
import LocationsPage from './pages/LocationsPage';
import LeadershipPage from './pages/LeadershipPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ProposalPage from './pages/ProposalPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import LicensePage from './pages/LicensePage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/:slug', element: <ServiceDetailPage /> },
        { path: 'solutions', element: <SolutionsPage /> },
        { path: 'solutions/:id', element: <SolutionDetailPage /> },
        { path: 'pricing', element: <PricingPage /> },
        { path: 'locations', element: <LocationsPage /> },
        { path: 'leadership', element: <LeadershipPage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'proposal/:slug', element: <ProposalPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: 'license', element: <LicensePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);