import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'pans-cookie-consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        setVisible(true);
      } else if (choice === 'accepted') {
        updateConsent(true);
      } else {
        updateConsent(false);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handle = (accepted: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'declined');
    } catch {
      /* storage blocked — ignore */
    }
    updateConsent(accepted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[60]"
    >
      <div className="bg-white border border-purple-200 shadow-2xl rounded-2xl p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand-secondary text-brand-primary flex items-center justify-center shrink-0">
            <Cookie size={18} />
          </div>
          <div className="flex-1">
            <h2 id="cookie-banner-title" className="font-semibold text-stone-900 text-sm mb-1">
              Cookies on PANS Victoria
            </h2>
            <p id="cookie-banner-desc" className="text-stone-600 text-sm leading-relaxed">
              We use one essential cookie to remember this choice, and (only if
              you accept) Google Analytics to see which pages help parents
              most. No personal information is collected.{' '}
              <Link to="/privacy" className="text-brand-primary underline">
                Read our privacy notice
              </Link>.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handle(false)}
            aria-label="Close and decline analytics cookies"
            className="text-stone-400 hover:text-stone-600 -mt-1 -mr-1 p-1"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <button
            type="button"
            onClick={() => handle(true)}
            className="flex-1 bg-brand-primary text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => handle(false)}
            className="flex-1 bg-white border border-purple-200 text-stone-700 px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary transition"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
