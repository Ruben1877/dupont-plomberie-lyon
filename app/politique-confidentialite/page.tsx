import siteData from "@/lib/site-data"

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-20">
      <section className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-gray-700 mb-6">
            La présente politique de confidentialité définit et vous informe de la manière dont {siteData.legalInfo.companyName} utilise et protège les informations que vous nous transmettez, le cas échéant, lorsque vous utilisez le présent site accessible à partir de l'URL suivante : {siteData.businessName}.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">1. Responsable du traitement</h2>
          <p className="text-gray-700 mb-4">
            Le responsable du traitement des données personnelles collectées sur ce site est :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Société : {siteData.legalInfo.companyName}</li>
            <li>Représentant : {siteData.legalInfo.director}</li>
            <li>Adresse : {siteData.legalInfo.address}</li>
            <li>Email : {siteData.legalInfo.email}</li>
            <li>Téléphone : {siteData.legalInfo.phone}</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">2. Données collectées</h2>
          <p className="text-gray-700 mb-4">
            Dans le cadre de l'utilisation de notre site et de nos services, nous sommes susceptibles de collecter les données personnelles suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Message ou description de votre demande</li>
            <li>Adresse IP et données de navigation (cookies)</li>
          </ul>
          <p className="text-gray-700">
            Ces données sont collectées uniquement lorsque vous les fournissez volontairement via notre formulaire de contact ou lors d'une prise de contact téléphonique.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">3. Finalités du traitement</h2>
          <p className="text-gray-700 mb-4">
            Les données personnelles collectées sont utilisées pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Répondre à vos demandes de renseignements</li>
            <li>Établir des devis personnalisés</li>
            <li>Gérer la relation client et le suivi des interventions</li>
            <li>Vous informer de nos services et actualités (avec votre consentement)</li>
            <li>Améliorer nos services et votre expérience utilisateur</li>
            <li>Respecter nos obligations légales et réglementaires</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">4. Base légale du traitement</h2>
          <p className="text-gray-700 mb-4">
            Le traitement de vos données personnelles est fondé sur :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Votre consentement pour l'envoi de communications commerciales</li>
            <li>L'intérêt légitime de notre entreprise pour répondre à vos demandes et améliorer nos services</li>
            <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
            <li>Le respect d'obligations légales (conservation des factures, etc.)</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">5. Durée de conservation</h2>
          <p className="text-gray-700 mb-4">
            Vos données personnelles sont conservées pendant les durées suivantes :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Données clients : 3 ans à compter de la fin de la relation commerciale</li>
            <li>Données prospects : 3 ans à compter du dernier contact</li>
            <li>Données de facturation : 10 ans (obligation légale)</li>
            <li>Cookies : 13 mois maximum</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">6. Destinataires des données</h2>
          <p className="text-gray-700 mb-4">
            Vos données personnelles sont strictement confidentielles et ne sont accessibles qu'aux personnes habilitées de {siteData.legalInfo.companyName}. Elles ne sont jamais vendues, échangées ou louées à des tiers.
          </p>
          <p className="text-gray-700">
            Nous pouvons être amenés à partager vos données uniquement dans les cas suivants :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2">
            <li>Avec votre consentement explicite</li>
            <li>Pour répondre à une obligation légale</li>
            <li>Avec nos sous-traitants techniques (hébergeur, etc.) dans le cadre strict de leurs missions</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">7. Transferts de données</h2>
          <p className="text-gray-700 mb-4">
            Notre site est hébergé par Vercel Inc., société américaine. Les transferts de données vers les États-Unis sont encadrés par des clauses contractuelles types approuvées par la Commission européenne, garantissant un niveau de protection adéquat de vos données personnelles.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">8. Vos droits</h2>
          <p className="text-gray-700 mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li><strong>Droit d'accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie</li>
            <li><strong>Droit de rectification</strong> : faire corriger les données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement</strong> : obtenir la suppression de vos données dans certains cas</li>
            <li><strong>Droit à la limitation</strong> : obtenir le gel temporaire du traitement de vos données</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré pour les transmettre à un autre responsable de traitement</li>
            <li><strong>Droit de retirer votre consentement</strong> : lorsque le traitement est fondé sur votre consentement</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Pour exercer ces droits, vous pouvez nous contacter par email à : {siteData.legalInfo.email}
          </p>
          <p className="text-gray-700">
            Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : <a href="https://www.cnil.fr" className="text-gold-600 hover:text-gold-700">www.cnil.fr</a>
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">9. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>Mémoriser vos préférences</li>
            <li>Analyser l'utilisation du site pour l'améliorer</li>
            <li>Personnaliser votre expérience</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Types de cookies utilisés :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li><strong>Cookie de consentement</strong> : stocke votre choix concernant l'acceptation des cookies (durée : 13 mois)</li>
            <li><strong>Cookies de session</strong> : nécessaires au fonctionnement du site (supprimés à la fermeture du navigateur)</li>
            <li><strong>Cookies analytiques</strong> : permettent de comprendre comment les visiteurs utilisent le site (durée : 13 mois)</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">10. Sécurité des données</h2>
          <p className="text-gray-700 mb-4">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles, notamment :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Chiffrement SSL/TLS pour les transmissions de données</li>
            <li>Accès restreint aux données (personnel autorisé uniquement)</li>
            <li>Mises à jour régulières de nos systèmes de sécurité</li>
            <li>Formation du personnel aux bonnes pratiques de protection des données</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">11. Modifications de la politique</h2>
          <p className="text-gray-700 mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet immédiatement après leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la façon dont nous protégeons vos données personnelles.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">12. Contact</h2>
          <p className="text-gray-700 mb-4">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Par email : {siteData.legalInfo.email}</li>
            <li>Par téléphone : {siteData.legalInfo.phone}</li>
            <li>Par courrier : {siteData.legalInfo.companyName}, {siteData.legalInfo.address}</li>
          </ul>

          <p className="text-sm text-gray-600 mt-12 italic">
            Dernière mise à jour : Décembre 2024
          </p>
        </div>
      </section>
    </div>
  )
}
