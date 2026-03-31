import Link from "next/link"
import siteData from "@/lib/site-data"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white">{siteData.businessName}</h3>
              <p className="mt-2 text-sm text-gray-400">{siteData.tagline}</p>
            </div>
            <div className="flex space-x-6">
              <span className="text-sm text-gray-400">{siteData.emergency}</span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {siteData.navigation.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {siteData.services.map((service, index) => (
                    <li key={index}>
                      <span className="text-sm leading-6 text-gray-300">{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-gray-400" />
                    <a href={`tel:${siteData.phone}`} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {siteData.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <EnvelopeIcon className="h-4 w-4 text-gray-400" />
                    <a href={`mailto:${siteData.email}`} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {siteData.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPinIcon className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-sm leading-6 text-gray-300">{siteData.address}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ClockIcon className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                    <span className="text-sm leading-6 text-gray-300">{siteData.hours}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">
            © {new Date().getFullYear()} {siteData.businessName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
