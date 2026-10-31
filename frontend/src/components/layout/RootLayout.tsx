import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { AmbientBackground } from '../ui/AmbientBackground';
import { CookieConsentBanner } from '../legal/CookieConsentBanner';

export function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}