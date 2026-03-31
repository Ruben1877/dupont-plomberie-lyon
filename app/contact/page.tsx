import ContactForm from "@/components/contact-form"
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon 
} from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Contactez-Nous
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            {siteData.emergency} — Notre équipe est à votre écoute pour tous vos besoins
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">Informations de contact</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Téléphone</h3>
                    <a href={`tel:${siteData.phone}`} className="text-gold-600 hover:text-gold-700 font-medium">
                      {siteData.phone}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{siteData.emergency}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a href={`mailto:${siteData.email}`} className="text-gold-600 hover:text-gold-700">
                      {siteData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">{siteData.address}</p>
                    <p className="text-sm text-gray-600 mt-1">{siteData.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center">
                    <ClockIcon className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Horaires</h3>
                    <p className="text-gray-700">{siteData.hours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Zone d'intervention</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89577.97672384647!2d4.796403949218751!3d45.75799999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21e0!2sLyon!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">
            Urgence plomberie ?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Pour toute urgence, n'hésitez pas à nous appeler directement
          </p>
          <a
            href={`tel:${siteData.phone}`}
            className="inline-flex items-center px-8 py-3 bg-gold-400 text-navy-900 font-semibold rounded-lg hover:bg-gold-500 hover:scale-105 hover:shadow-lg transform transition-all duration-300"
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            {siteData.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
