import siteData from "@/lib/site-data"
import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Cta from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
