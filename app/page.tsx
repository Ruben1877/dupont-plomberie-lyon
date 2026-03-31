import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import TrustBadges from "@/components/trust-badges"
import FloatingCallButton from "@/components/floating-call-button"
import siteData from "@/lib/site-data"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <GallerySection />
      <Testimonials />
      <FAQ />
      <CTA />
      <FloatingCallButton />
    </>
  )
}
