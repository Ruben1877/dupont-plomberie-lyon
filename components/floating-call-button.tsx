"use client";

import siteData from '@/lib/site-data';
import { PhoneIcon } from '@heroicons/react/20/solid';

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteData.phone}`}
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-400 text-primary-950 shadow-xl transition-transform hover:scale-110 md:hidden animate-pulse-custom"
      aria-label="Appeler pour une urgence"
    >
      <PhoneIcon className="h-8 w-8" />
    </a>
  );
}
