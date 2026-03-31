import Link from "next/link"
import { PhoneIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-800"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Besoin d'un Plombier Rapidement ?
        </h2>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {siteData.emergency} — Intervention rapide garantie
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${siteData.phone}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
            Devis gratuit en ligne
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-gold-400 mb-1">30 min</div>
            <div className="text-sm text-gray-200">Temps d'intervention moyen</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-gold-400 mb-1">98%</div>
            <div className="text-sm text-gray-200">Clients satisfaits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-gold-400 mb-1">24/7</div>
            <div className="text-sm text-gray-200">Service d'urgence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
