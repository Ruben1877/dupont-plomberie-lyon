import GallerySection from "@/components/gallery-section"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Notre Galerie
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Découvrez nos réalisations et la qualité de notre travail à travers ces exemples de projets
          </p>
        </div>
      </section>

      <GallerySection />

      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
}
