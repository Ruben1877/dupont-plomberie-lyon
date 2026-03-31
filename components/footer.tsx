import Link from "next/link";
import siteData from "@/lib/site-data";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const footerLinks = {
    entreprise: [
      ...siteData.navigation.slice(1), // All except "Accueil"
    ],
    legal: [
      { name: "Mentions Légales", href: "/mentions-legales" },
      { name: "Politique de Confidentialité", href: "/politique-confidentialite" },
    ],
  };

  const contactInfo = [
    { text: siteData.address, icon: MapPinIcon, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.address)}` },
    { text: siteData.phoneFormatted, icon: PhoneIcon, href: `tel:${siteData.phone}` },
    { text: siteData.email, icon: EnvelopeIcon, href: `mailto:${siteData.email}` },
    { text: siteData.hours, icon: ClockIcon, href: '#' },
  ];

  return (
    <footer className="bg-primary-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading text-white">{siteData.businessName}</h3>
            <p className="text-sm leading-6 text-primary-200">{siteData.description}</p>
            <p className="text-sm font-semibold text-white">Service d'urgence: <span className="text-secondary-400">{siteData.emergency}</span></p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-secondary-400">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.entreprise.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-200 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-secondary-400">Légal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-200 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-secondary-400">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm leading-6 text-primary-200 hover:text-white">
                        <item.icon className="h-5 w-5 flex-shrink-0 text-secondary-400 mt-0.5" aria-hidden="true" />
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-primary-300">&copy; {new Date().getFullYear()} {siteData.businessName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
