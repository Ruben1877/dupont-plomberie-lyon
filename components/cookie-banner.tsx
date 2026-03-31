"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { XMarkIcon } from "@heroicons/react/24/outline"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleRefuse = () => {
    localStorage.setItem("cookie-consent", "refused")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-xl border-t animate-slide-in-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              En continuant à naviguer, vous acceptez notre{" "}
              <Link href="/politique-confidentialite" className="text-navy-600 hover:text-gold-600 font-medium">
                politique de confidentialité
              </Link>.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleRefuse}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy-600 transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-navy-600 text-white text-sm font-medium rounded-lg hover:bg-navy-700 transition-colors"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
