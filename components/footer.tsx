import Link from "next/link"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl">JD</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{siteData.businessName}</h3>
                <p className="text-sm text-gray-300">{siteData.trade}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {siteData.tagline}
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gold-400 font-medium">{siteData.emergency}</p>
              <p className="text-sm text-gray-400">{siteData.serviceArea}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {siteData.services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-start space-x-3 text-gray-300 hover:text-gold-400 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{siteData.phone}</span>
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start space-x-3 text-gray-300 hover:text-gold-400 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{siteData.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPinIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{siteData.address}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <ClockIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{siteData.hours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {siteData.businessName}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 sm:justify-end">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
