import Image from "next/image"
import Link from "next/link"
import { CheckIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function AboutSection() {
  const highlights = [
    "Intervention rapide 24h/24 et 7j/7",
    "Devis gratuit et transparent",
    "Garantie décennale sur tous travaux",
    "Équipe qualifiée et certifiée RGE"
  ]

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Votre Plombier de Confiance à {siteData.city}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis {siteData.experience} ans, {siteData.businessName} intervient sur {siteData.serviceArea} pour tous vos besoins en plomberie et chauffage. Notre équipe de professionnels qualifiés met son expertise à votre service pour des interventions rapides et durables.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Que ce soit pour une urgence ou des travaux planifiés, nous nous engageons à fournir un service de qualité avec des tarifs transparents et compétitifs.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
            >
              En savoir plus sur nous
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600"
                alt="Plombier professionnel au travail"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                unoptimized={true}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-navy-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
