import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { AmbientBackground } from '../ui/AmbientBackground';

export function RootLayout() {
  return (
    // Removed bg-jet here so the body background shows through
    <div className="relative min-h-screen flex flex-col">
      
      <AmbientBackground />

      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}