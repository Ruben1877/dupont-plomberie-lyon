"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { PhoneIcon, CheckIcon } from "@heroicons/react/24/outline"
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid"
import siteData from "@/lib/site-data"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".fade-up-element")
      elements.forEach(el => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&h=1080"
          alt="Plombier professionnel au travail"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          unoptimized={true}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/70"></div>
      </div>

      <div className="absolute top-32 left-10 opacity-10">
        <WrenchScrewdriverIcon className="h-32 w-32 text-gold-400 animate-float" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-10">
        <svg className="h-32 w-32 text-gold-400 animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up-element opacity-0 translate-y-4 mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold-400/20 backdrop-blur-sm border border-gold-400/30">
            <CheckIcon className="h-5 w-5 text-gold-400 mr-2" />
            <span className="text-gold-400 font-medium">{siteData.experience} ans d'expérience à {siteData.city}</span>
          </span>
        </div>

        <h1 className="fade-up-element opacity-0 translate-y-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ animationDelay: "0.1s", fontFamily: "Space Grotesk, sans-serif" }}>
          {siteData.trade}<br />
          <span className="text-gold-400">Professionnel</span>
        </h1>

        <p className="fade-up-element opacity-0 translate-y-4 text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
          {siteData.tagline}
        </p>

        <div className="fade-up-element opacity-0 translate-y-4 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.3s" }}>
          <a
            href={`tel:${siteData.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-navy-900 hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            Demander un devis gratuit
          </Link>
        </div>

        <div className="fade-up-element opacity-0 translate-y-4 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-gold-400 mb-1">24/7</div>
            <div className="text-sm text-gray-200">Service d'urgence</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-gold-400 mb-1">30 min</div>
            <div className="text-sm text-gray-200">Intervention rapide</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-2xl font-bold text-gold-400 mb-1">Gratuit</div>
            <div className="text-sm text-gray-200">Devis sans engagement</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
