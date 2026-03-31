"use client"

import { PhoneIcon } from "@heroicons/react/24/solid"
import siteData from "@/lib/site-data"

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteData.phone}`}
      className="fixed bottom-6 right-6 z-40 md:hidden bg-gold-400 text-navy-900 w-14 h-14 rounded-full shadow-lg hover:bg-gold-500 hover:scale-110 hover:shadow-xl transform transition-all duration-300 flex items-center justify-center animate-pulse-scale"
      aria-label="Appeler maintenant"
    >
      <PhoneIcon className="h-6 w-6" />
    </a>
  )
}
