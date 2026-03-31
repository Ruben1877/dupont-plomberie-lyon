import siteData from "@/lib/site-data";
import { Metadata } from "next";
import Image from "next/image";
import { ShieldCheckIcon, RocketLaunchIcon, HeartIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez l'histoire, les valeurs et l'engagement de ${siteData.businessName}, votre artisan plombier chauffagiste de confiance à Lyon.`,
};

const values = [
  {
    name: "Qualité",
    description: "Nous nous engageons à utiliser des matériaux de premier choix et à réaliser des installations durables, conformes aux normes les plus strictes.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Réactivité",
    description: "Conscients de l'urgence de certaines situations, nous mettons un point d'honneur à intervenir rapidement, 24h/24 et 7j/7 pour les dépannages.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Satisfaction Client",
    description: "Votre satisfaction est notre meilleure récompense. Nous sommes à votre écoute et vous conseillons pour trouver la solution la plus adaptée à vos besoins et votre budget.",
    icon: HeartIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-primary-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 sm:mr-20 lg:mr-0 xl:mr-16 xl:origin-center"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-primary-950 sm:text-6xl lg:col-span-2 xl:col-auto font-heading">
                Artisan passionné, à votre service à Lyon
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-text-muted">
                  Depuis {siteData.experience} ans, Jean Dupont met son expertise de plombier chauffagiste au service des Lyonnais. Fondée sur des valeurs de qualité, de confiance et de proximité, mon entreprise a pour unique objectif votre confort et votre tranquillité d'esprit.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1542621334-a254cf47763b?q=80&w=1200&h=800&fit=crop"
                alt="Portrait de Jean Dupont, artisan plombier"
                width={1200}
                height={800}
                unoptimized={true}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">Nos Valeurs</h2>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Au cœur de chaque intervention, ces principes guident notre travail et notre relation avec vous.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="flex items-center gap-x-3 font-semibold text-primary-950">
                  <value.icon className="h-8 w-8 flex-none text-secondary-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 text-text-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </>
  );
}
