import Link from "next/link"
import siteData from "@/lib/site-data"
import { WrenchScrewdriverIcon, HomeIcon, FireIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"

const iconMap = {
  WrenchScrewdriverIcon,
  HomeIcon,
  FireIcon,
  ExclamationTriangleIcon
}

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos services de plomberie et chauffage
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une expertise complète pour tous vos besoins en plomberie et chauffage
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {siteData.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <div key={index} className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm font-medium text-accent">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-6">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
