"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4">
      <div className="max-w-7xl mx-auto p-6 bg-primary-950/90 backdrop-blur-sm rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre utilisation des cookies.
            {' '}
            <Link href="/politique-confidentialite" className="font-semibold text-secondary-400 hover:underline">
              En savoir plus
            </Link>.
          </p>
          <div className="flex-shrink-0 flex gap-x-4">
            <button
              onClick={handleAccept}
              className="rounded-md bg-secondary-400 px-4 py-2 text-sm font-semibold text-primary-950 shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-400"
            >
              Accepter tout
            </button>
            <button
              onClick={handleRefuse}
              className="rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white hover:bg-white/10"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
