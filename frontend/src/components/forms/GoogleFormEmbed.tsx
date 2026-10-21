import { ExternalLink, AlertCircle } from 'lucide-react';
import { env } from '../../config/env';

type GoogleFormEmbedProps = {
  /** Which env URL to use — contact or careers */
  variant: 'contact' | 'careers';
  /** Iframe height in px */
  height?: number;
  /** Label shown when the form is not configured */
  notConfiguredLabel?: string;
  /** Optional external link button label */
  externalLabel?: string;
};

export function GoogleFormEmbed({
  variant,
  height = 900,
  notConfiguredLabel = 'Form not configured yet',
  externalLabel = 'Open form in new tab',
}: GoogleFormEmbedProps) {
  const embedUrl =
    variant === 'contact'
      ? env.contactFormEmbedUrl
      : env.careersFormUrl;
  const externalUrl =
    variant === 'contact'
      ? env.contactFormUrl
      : env.careersFormUrl;

  // State 1 — not configured
  if (!embedUrl && !externalUrl) {
    return (
      <div className="rounded-2xl border border-white/[0.08] bg-graphite/40 p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow/10 text-yellow mb-4">
          <AlertCircle size={22} />
        </div>
        <h3 className="font-display text-lg font-semibold text-offwhite">
          {notConfiguredLabel}
        </h3>
        <p className="mt-2 text-sm text-offwhite/60 max-w-md mx-auto leading-relaxed">
          The form URL has not been added to the site configuration yet. Please
          use the email address below to get in touch in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* State 2 — embed + external link */}
      {embedUrl && (
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite/40">
          <iframe
            src={embedUrl}
            title={
              variant === 'contact'
                ? 'Project inquiry form'
                : 'Careers — express interest form'
            }
            width="100%"
            height={height}
            className="w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
            Loading form — ¦
          </iframe>
        </div>
      )}

      {/* State 3 — external link only */}
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink hover:text-yellow transition-colors"
        >
          {externalLabel}
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}