import Image from "next/image"
import siteData from "@/lib/site-data"
import { WrenchScrewdriverIcon, HomeIcon, FireIcon, ExclamationTriangleIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import Cta from "@/components/cta"

const iconMap = {
  WrenchScrewdriverIcon,
  HomeIcon,
  FireIcon,
  ExclamationTriangleIcon
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Nos Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Une gamme complète de services de plomberie et chauffage pour particuliers et professionnels
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {siteData.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <div key={index} className={`rounded-2xl ${index % 2 === 0 ? "bg-gray-50" : "bg-primary/5"} p-8 lg:p-12`}>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{service.title}</h2>
                          <p className="text-lg font-semibold text-accent">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3">
                            <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`mt-8 lg:mt-0 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                      <Image
                        src={`https://images.unsplash.com/photo-${
                          index === 0 ? "1581244277943-7e5c0c65df8a" :
                          index === 1 ? "1540932239986-ec9e8d2aa630" :
                          index === 2 ? "1565608087881-2cc31d1866f5" :
                          "1558618256-3a0b1d12f2f1"
                        }?auto=format&fit=crop&q=80`}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="rounded-xl shadow-lg w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Zone d'intervention
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {siteData.serviceArea}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50">
                <CheckCircleIcon className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
