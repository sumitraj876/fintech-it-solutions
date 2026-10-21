import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top of the page on every route change.
 * Respects the browser's default for back/forward navigation
 * (i.e., does not force scroll when the user uses the back button).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 'auto' respects prefers-reduced-motion (our CSS handles the smooth part)
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}