import siteData from "@/lib/site-data";
import Cta from "@/components/cta";
import { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { WrenchScrewdriverIcon, FireIcon, ShieldCheckIcon, ClockIcon, HomeIcon, BuildingOfficeIcon, CogIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const iconMap: Record<string, typeof WrenchScrewdriverIcon> = { WrenchScrewdriverIcon, FireIcon, ShieldCheckIcon, ClockIcon, HomeIcon, BuildingOfficeIcon, CogIcon, ExclamationTriangleIcon };

export const metadata: Metadata = {
  title: "Nos Services",
  description: `Découvrez tous les services de plomberie et chauffage proposés par ${siteData.businessName} à Lyon : dépannage, installation, entretien, et plus encore.`,
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-base font-semibold leading-7 text-secondary-600">Nos Services</h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-primary-950 sm:text-5xl font-heading">
              Expertise complète en plomberie et chauffage
            </p>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Que ce soit pour une urgence, un projet de rénovation ou un entretien régulier, nous avons la solution adaptée à vos besoins.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {siteData.services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.title} className="flex flex-col">
                  <div className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-950">
                      {Icon && <Icon className="h-7 w-7 text-secondary-400" aria-hidden="true" />}
                    </div>
                    <h3 className="text-xl font-semibold leading-7 text-primary-950">{service.title}</h3>
                  </div>
                  <p className="mt-4 flex flex-auto flex-col text-base leading-7 text-text-muted">
                    <span className="flex-auto">{service.description}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <Cta />
    </>
  );
}
