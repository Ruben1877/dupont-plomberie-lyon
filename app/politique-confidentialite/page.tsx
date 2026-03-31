import siteData from "@/lib/site-data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Consultez la politique de confidentialité de ${siteData.businessName} concernant la collecte et le traitement de vos données personnelles.`,
  robots: {
    index: false,
    follow: true,
  }
};

export default function PolitiqueConfidentialitePage() {
  const { legalInfo } = siteData;
  const lastUpdate = "1er Juillet 2024";

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-text-muted">
        <h1 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading mb-2">Politique de Confidentialité</h1>
        <p className="text-sm">Dernière mise à jour : {lastUpdate}</p>

        <div className="mt-8 space-y-8">
          <p>La présente politique de confidentialité décrit la manière dont {legalInfo.companyName} collecte, utilise et protège les informations que vous nous transmettez lorsque vous utilisez notre site web accessible à l'adresse www.dupont-plomberie.fr.</p>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">1. Responsable du traitement</h2>
            <p>Le responsable du traitement des données personnelles est {legalInfo.companyName}, dont les coordonnées sont les suivantes :</p>
            <address className="not-italic mt-2">
              {legalInfo.address}<br />
              Email : <a href={`mailto:${legalInfo.email}`} className="text-primary-800 hover:underline">{legalInfo.email}</a><br />
              Téléphone : <a href={`tel:${legalInfo.phone}`} className="text-primary-800 hover:underline">{legalInfo.phone}</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">2. Données collectées</h2>
            <p>Nous pouvons collecter les informations suivantes lorsque vous utilisez notre formulaire de contact :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Toute autre information que vous nous fournissez volontairement dans le corps du message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">3. Finalités du traitement</h2>
            <p>Les données que nous collectons sont utilisées dans le but de :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de contact, de devis ou d'informations.</li>
              <li>Assurer le suivi commercial et la gestion de notre relation client.</li>
              <li>Fournir et gérer nos services de plomberie et chauffage.</li>
            </ul>
            <p className="mt-2">La base légale de ce traitement repose sur notre intérêt légitime à répondre à vos demandes et sur le consentement que vous donnez en soumettant le formulaire.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">4. Durée de conservation</h2>
            <p>Vos données personnelles sont conservées pendant une durée de trois (3) ans à compter de notre dernier contact.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">5. Droits des utilisateurs</h2>
            <p>Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition au traitement.</li>
              <li>Droit à la portabilité de vos données.</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits, vous pouvez nous contacter par e-mail à <a href={`mailto:${legalInfo.email}`} className="text-primary-800 hover:underline">{legalInfo.email}</a> ou par courrier à l'adresse mentionnée ci-dessus.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">6. Gestion des cookies</h2>
            <p>Notre site utilise un cookie technique pour gérer votre consentement concernant l'utilisation des cookies. Ce cookie (nommé "cookie-consent") ne collecte aucune donnée personnelle et a pour seule finalité de mémoriser votre choix (accepter ou refuser) pour ne pas vous solliciter à nouveau lors de vos prochaines visites. Sa durée de vie est de 12 mois.</p>
            <p className="mt-2">Nous n'utilisons pas de cookies de suivi, de publicité ou d'analyse tiers à ce jour.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">7. Transferts de données hors Union Européenne</h2>
            <p>Notre site est hébergé par Vercel Inc., une société basée aux États-Unis. Le transfert de données lié à l'hébergement est encadré par les clauses contractuelles types de la Commission Européenne, assurant un niveau de protection adéquat de vos données.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">8. Modification de la politique</h2>
            <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version la plus récente sera toujours disponible sur cette page. Nous vous encourageons à la consulter régulièrement.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
// END OF GENERATION
