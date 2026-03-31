import Link from "next/link"
import Image from "next/image"
import siteData from "@/lib/site-data"
import { PhoneIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark">
      <div className="absolute inset-0 bg-grid-white/5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Cpath d='M0 0h1v1H0V0zm39 0h1v1h-1V0zM0 39h1v1H0v-1zm39 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {siteData.tagline}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {siteData.trade} professionnel intervenant sur {siteData.serviceArea}. 
              Dépannage rapide, installation et entretien. {siteData.emergency}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${siteData.phone}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-dark transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                Appeler maintenant
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-accent" />
                <span>Intervention rapide en moins de 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-accent" />
                <span>Devis gratuit et transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-accent" />
                <span>Garantie décennale et satisfaction client</span>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
                alt="Plombier professionnel au travail"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl">
                <p className="text-3xl font-bold text-primary">{siteData.experience}+</p>
                <p className="text-sm text-gray-600">années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
