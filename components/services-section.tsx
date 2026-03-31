import Link from "next/link"
import * as HeroIcons from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    const Icon = HeroIcons[iconName as keyof typeof HeroIcons]
    return Icon ? <Icon className="h-12 w-12 text-gold-400" /> : null
  }

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Nos Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Une expertise complète en plomberie et chauffage pour tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteData.services.map((service, index) => (
            <div
              key={service.title}
              className="scroll-reveal bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 sm:p-8 border border-gray-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{getIcon(service.icon)}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gold-600 font-medium">{service.price}</span>
                <Link
                  href="/contact"
                  className="text-navy-600 hover:text-gold-600 font-medium inline-flex items-center group"
                >
                  En savoir plus
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-navy-600 text-white font-semibold rounded-lg hover:bg-navy-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            Voir tous nos services
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
