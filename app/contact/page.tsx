import siteData from "@/lib/site-data"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Besoin d'un dépannage ou d'un devis ? Nous sommes à votre écoute
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Prenez contact avec notre équipe
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Pour toute urgence, appelez-nous directement. Pour les demandes de devis ou renseignements, utilisez le formulaire ci-contre ou contactez-nous par email.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-600">{siteData.phone}</p>
                    <p className="text-sm text-accent font-medium mt-1">{siteData.emergency}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{siteData.email}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">{siteData.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-600">{siteData.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                <h3 className="font-semibold text-gray-900 mb-2">Zone d'intervention</h3>
                <p className="text-gray-600">{siteData.serviceArea}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
