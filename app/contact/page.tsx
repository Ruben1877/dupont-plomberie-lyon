import siteData from "@/lib/site-data";
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${siteData.businessName} pour un devis, une urgence ou toute question. Nous intervenons rapidement à Lyon et ses environs.`,
};

const contactDetails = [
  {
    name: "Adresse",
    value: siteData.address,
    icon: MapPinIcon,
  },
  {
    name: "Téléphone",
    value: siteData.phoneFormatted,
    href: `tel:${siteData.phone}`,
    icon: PhoneIcon,
  },
  {
    name: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
    icon: EnvelopeIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-4224-87a9-65de9b674d2b"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-4224-87a9-65de9b674d2b)" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading">Entrons en contact</h1>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              Une question ? Un projet ? Une urgence ? Nous sommes à votre disposition pour vous répondre dans les meilleurs délais.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-text-muted">
              {contactDetails.map((detail) => (
                <div key={detail.name} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{detail.name}</span>
                    <detail.icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    {detail.href ? (
                      <a className="hover:text-primary-950" href={detail.href}>
                        {detail.value}
                      </a>
                    ) : (
                      <span>{detail.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
                <h2 className="text-base font-semibold text-primary-950">Horaires d'ouverture</h2>
                <p className="text-text-muted">{siteData.hours}</p>
                <p className="mt-1 text-base font-semibold text-red-600">{siteData.emergency}</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
