import Link from "next/link"
import * as HeroIcons from "@heroicons/react/24/outline"
import { CheckIcon } from "@heroicons/react/20/solid"
import siteData from "@/lib/site-data"

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    const Icon = HeroIcons[iconName as keyof typeof HeroIcons]
    return Icon ? <Icon className="h-16 w-16 text-gold-400" /> : null
  }

  const additionalServices = [
    {
      title: "Installation de robinetterie",
      features: ["Robinets de cuisine", "Mitigeurs thermostatiques", "Robinetterie design", "Garantie fabricant"],
      price: "à partir de 120€"
    },
    {
      title: "Rénovation de salle de bain",
      features: ["Conception sur mesure", "Plomberie complète", "Pose de sanitaires", "Finitions soignées"],
      price: "sur devis"
    },
    {
      title: "Entretien préventif",
      features: ["Contrôle annuel", "Détartrage", "Vérification joints", "Rapport détaillé"],
      price: "forfait 89€/an"
    }
  ]

  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Nos Services de Plomberie
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Une gamme complète de prestations pour répondre à tous vos besoins en plomberie et chauffage
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {siteData.services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-600 font-semibold text-lg">{service.price}</span>
                      <Link
                        href="/contact"
                        className="text-navy-600 hover:text-gold-600 font-medium inline-flex items-center group"
                      >
                        Demander un devis
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Services Complémentaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service) => (
                <div key={service.title} className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gold-600 font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-navy-50 rounded-2xl p-8 sm:p-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Nous proposons des solutions sur mesure pour tous vos projets de plomberie. 
                Contactez-nous pour discuter de vos besoins spécifiques.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
              >
                Obtenir un devis personnalisé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
