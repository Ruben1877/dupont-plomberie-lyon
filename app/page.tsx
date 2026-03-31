import Hero from "@/components/hero"
import TrustBadges from "@/components/trust-badges"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import GallerySection from "@/components/gallery-section"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <Testimonials />
      <GallerySection />
      <FAQ />
      <CTA />
    </>
  )
}
