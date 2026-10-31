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
import BlogDetailPage from './pages/BlogDetailPage';
import ProposalPage from './pages/ProposalPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import Licensing from './pages/legal/Licensing';
import Disclaimer from './pages/legal/Disclaimer';
import PrivacyRequests from './pages/legal/PrivacyRequests';

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
        { path: 'blog', element: <BlogPage /> },
        { path: 'blog/:id', element: <BlogDetailPage /> },
        { path: 'proposal/:slug', element: <ProposalPage /> },
        { path: 'privacy', element: <PrivacyPolicy /> },
        { path: 'terms', element: <TermsOfService /> },
        { path: 'license', element: <Licensing /> },
        { path: 'privacy-policy', element: <PrivacyPolicy /> },
        { path: 'terms-of-service', element: <TermsOfService /> },
        { path: 'cookie-policy', element: <CookiePolicy /> },
        { path: 'licensing', element: <Licensing /> },
        { path: 'disclaimer', element: <Disclaimer /> },
        { path: 'privacy-requests', element: <PrivacyRequests /> },
        { path: 'blog', element: <BlogPage /> },
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