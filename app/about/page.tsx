import Image from "next/image"
import siteData from "@/lib/site-data"
import { CheckCircleIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import Cta from "@/components/cta"

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary to-primary-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              À propos de nous
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {siteData.experience} ans d'expertise au service des Lyonnais
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                {siteData.businessName}, votre expert en plomberie et chauffage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Depuis {siteData.experience} ans, nous accompagnons les particuliers et professionnels de Lyon et sa région dans tous leurs projets de plomberie et chauffage. Notre équipe de techniciens qualifiés intervient rapidement pour résoudre vos problèmes et réaliser vos installations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Forte de son expérience et de sa connaissance approfondie du secteur, notre entreprise s'est forgé une solide réputation basée sur la qualité du travail, le respect des délais et la satisfaction client.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex gap-4">
                  <ClockIcon className="h-12 w-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Disponibilité</h3>
                    <p className="text-sm text-gray-600">{siteData.emergency}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheckIcon className="h-12 w-12 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Garantie</h3>
                    <p className="text-sm text-gray-600">Travaux garantis et assurés</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
                alt="Équipe Jean Dupont Plomberie"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos valeurs
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <CheckCircleIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">Travail soigné et matériel de qualité professionnelle</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <ClockIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ponctualité</h3>
              <p className="text-gray-600">Respect des horaires et délais convenus</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <UserGroupIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Écoute</h3>
              <p className="text-gray-600">Solutions adaptées à vos besoins et budget</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <ShieldCheckIcon className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparence</h3>
              <p className="text-gray-600">Devis détaillés et prix justes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
                alt="Atelier plomberie"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Notre engagement qualité
              </h2>
              <div className="space-y-6">
                {siteData.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <CheckCircleIcon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{cert}</h3>
                      <p className="text-gray-600 mt-1">
                        {index === 0 && "Certification reconnue pour la qualité de nos prestations"}
                        {index === 1 && "Habilitation pour toutes interventions sur installations gaz"}
                        {index === 2 && "Label garantissant notre professionnalisme"}
                        {index === 3 && "Assurance complète pour votre tranquillité"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
