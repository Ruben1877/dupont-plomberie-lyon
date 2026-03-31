import Image from "next/image"
import Link from "next/link"
import { 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  SparklesIcon 
} from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Fiabilité",
      description: "Un engagement de qualité sur chaque intervention avec garantie décennale"
    },
    {
      icon: UserGroupIcon,
      title: "Proximité",
      description: "Une équipe locale qui connaît parfaitement les spécificités de la région lyonnaise"
    },
    {
      icon: SparklesIcon,
      title: "Excellence",
      description: "Des finitions soignées et un travail méticuleux pour votre satisfaction totale"
    },
    {
      icon: AcademicCapIcon,
      title: "Expertise",
      description: "Une formation continue pour maîtriser les dernières techniques et technologies"
    }
  ]

  const milestones = [
    { year: "2009", event: "Création de l'entreprise Jean Dupont Plomberie" },
    { year: "2012", event: "Obtention de la certification Qualibat" },
    { year: "2015", event: "Extension des services au chauffage" },
    { year: "2018", event: "Certification RGE pour les économies d'énergie" },
    { year: "2021", event: "2000ème client satisfait" },
    { year: "2024", event: "15 ans d'expertise à votre service" }
  ]

  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            À Propos de Nous
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            {siteData.experience} ans d'expertise au service des habitants de {siteData.city} et sa région
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Fondée en 2009 par Jean Dupont, notre entreprise est née d'une passion pour le métier et d'un désir de servir la communauté lyonnaise avec excellence. Ce qui a commencé comme une entreprise individuelle est devenu aujourd'hui une référence locale en plomberie et chauffage.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Au fil des années, nous avons su évoluer avec les nouvelles technologies tout en conservant les valeurs artisanales qui font notre force : le travail bien fait, l'écoute du client et la transparence dans nos prestations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aujourd'hui, avec plus de 2500 clients satisfaits et une équipe de professionnels qualifiés, nous continuons à bâtir notre réputation intervention après intervention, en traitant chaque projet avec le même soin et la même attention aux détails.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600"
                alt="Jean Dupont, fondateur de l'entreprise"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
                unoptimized={true}
              />
              <div className="absolute -bottom-4 -right-4 bg-gold-400 text-navy-900 px-6 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-2xl">{siteData.experience} ans</p>
                <p className="text-sm">d'expérience</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-50 rounded-full mb-4">
                    <value.icon className="h-10 w-10 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Notre Parcours
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-gold-600 font-bold text-xl">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-navy-600 rounded-full relative">
                    {index !== milestones.length - 1 && (
                      <div className="absolute top-4 left-1.5 w-1 h-16 bg-navy-200"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
              Prêt à travailler avec une équipe de confiance ?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
