import siteData from "@/lib/site-data"

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Mentions Légales
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Éditeur du site</h2>
          <p className="text-gray-700 mb-2">
            Le présent site web est édité par :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Raison sociale : {siteData.legalInfo.companyName}</li>
            <li>Forme juridique : {siteData.legalInfo.legalForm}</li>
            <li>SIRET : {siteData.legalInfo.siret}</li>
            <li>Adresse du siège social : {siteData.legalInfo.address}</li>
            <li>Téléphone : {siteData.legalInfo.phone}</li>
            <li>Email : {siteData.legalInfo.email}</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Directeur de la publication</h2>
          <p className="text-gray-700">
            Le directeur de la publication est : {siteData.legalInfo.director}
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Hébergeur du site</h2>
          <p className="text-gray-700">
            Ce site est hébergé par : {siteData.legalInfo.host}
            <br />
            Site web : <a href="https://vercel.com" className="text-gold-600 hover:text-gold-700">https://vercel.com</a>
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, marques, etc.) est la propriété exclusive de {siteData.legalInfo.companyName} ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p className="text-gray-700 mb-4">
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de {siteData.legalInfo.companyName}.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Limitation de responsabilité</h2>
          <p className="text-gray-700 mb-4">
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
          </p>
          <p className="text-gray-700 mb-4">
            {siteData.legalInfo.companyName} ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
          <p className="text-gray-700 mb-4">
            {siteData.legalInfo.companyName} ne pourra également être tenu responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Gestion des données personnelles</h2>
          <p className="text-gray-700 mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité des données vous concernant.
          </p>
          <p className="text-gray-700 mb-4">
            Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter notre délégué à la protection des données à l'adresse suivante : {siteData.legalInfo.email}
          </p>
          <p className="text-gray-700">
            Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-gold-600 hover:text-gold-700">politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">7. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation des cookies conformément à notre politique de cookies détaillée dans notre <a href="/politique-confidentialite" className="text-gold-600 hover:text-gold-700">politique de confidentialité</a>.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
          <p className="text-gray-700 mb-4">
            Tout litige en relation avec l'utilisation du site {siteData.businessName} est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">9. Crédits</h2>
          <p className="text-gray-700">
            Photos : Unsplash (<a href="https://unsplash.com" className="text-gold-600 hover:text-gold-700">https://unsplash.com</a>)
            <br />
            Icônes : Heroicons, Lucide
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Date de dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
