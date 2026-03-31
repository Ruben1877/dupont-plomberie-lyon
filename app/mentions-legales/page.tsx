import siteData from "@/lib/site-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Consultez les mentions légales de ${siteData.businessName}.`,
  robots: {
    index: false,
    follow: true,
  }
};

export default function MentionsLegalesPage() {
  const { legalInfo } = siteData;

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-text-muted">
        <h1 className="text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl font-heading mb-8">Mentions Légales</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">1. Éditeur du site</h2>
            <p>Conformément aux dispositions de l'article 6-I 1° de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, l'éditeur du site web www.dupont-plomberie.fr est :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Nom de l'entreprise :</strong> {legalInfo.companyName}</li>
              <li><strong>Forme juridique :</strong> {legalInfo.legalForm}</li>
              <li><strong>Adresse :</strong> {legalInfo.address}</li>
              <li><strong>Numéro SIRET :</strong> {legalInfo.siret}</li>
              <li><strong>Téléphone :</strong> {legalInfo.phone}</li>
              <li><strong>Adresse e-mail :</strong> {legalInfo.email}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est Monsieur {legalInfo.director}, en sa qualité de gérant.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">3. Hébergeur du site</h2>
            <p>Le site est hébergé par la société :</p>
            <p className="mt-2">
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, USA<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-800 hover:underline">https://vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">4. Propriété intellectuelle</h2>
            <p>L'ensemble de ce site (contenus, textes, images, vidéos, logos) constitue une œuvre protégée par la législation en vigueur sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction, représentation, ou diffusion, totale ou partielle, de ce site sur quelque support que ce soit est formellement interdite sans l'autorisation expresse du directeur de la publication.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">5. Limitation de responsabilité</h2>
            <p>{legalInfo.companyName} s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, {legalInfo.companyName} décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary-950 mb-4">6. Crédits</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Photos : Unsplash (<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary-800 hover:underline">https://unsplash.com</a>)</li>
              <li>Icônes : Heroicons (<a href="https://heroicons.com" target="_blank" rel="noopener noreferrer" className="text-primary-800 hover:underline">https://heroicons.com</a>), Lucide (<a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary-800 hover:underline">https://lucide.dev</a>)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
