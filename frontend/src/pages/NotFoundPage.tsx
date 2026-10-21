import { Button } from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-yellow mb-4">404</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold">
          Page not found
        </h1>
        <p className="mt-4 text-offwhite/60 max-w-md mx-auto">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary" size="md">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}