import Link from "next/link"
import siteData from "@/lib/site-data"
import { PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function Cta() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Besoin d'un plombier rapidement ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
            {siteData.emergency}. Devis gratuit et intervention rapide garantie.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={`tel:${siteData.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-dark transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              {siteData.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-gray-200"
            >
              Demander un devis
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
