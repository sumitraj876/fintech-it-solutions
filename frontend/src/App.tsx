import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { CookieConsentProvider } from './context/CookieConsentContext';

export default function App() {
  return (
    <CookieConsentProvider>
      <RouterProvider router={router} />
    </CookieConsentProvider>
  );
}