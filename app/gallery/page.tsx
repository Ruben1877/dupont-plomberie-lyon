import GallerySection from "@/components/gallery-section";
import Cta from "@/components/cta";
import { Metadata } from "next";
import siteData from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galerie",
  description: `Découvrez en images nos réalisations en plomberie et chauffage à Lyon. Qualité et savoir-faire par ${siteData.businessName}.`,
};

export default function GalleryPage() {
  return (
    <>
      <GallerySection fullGallery={true} />
      <Cta />
    </>
  );
}
