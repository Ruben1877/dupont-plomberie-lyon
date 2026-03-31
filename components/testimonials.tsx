"use client"

import { useEffect, useRef } from "react"
import { StarIcon } from "@heroicons/react/20/solid"
import siteData from "@/lib/site-data"

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".scroll-reveal")
      elements.forEach(el => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="scroll-reveal bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 border border-gray-200"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-gold-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <cite className="text-navy-600 font-medium not-italic">
                — {testimonial.name}
              </cite>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <div className="inline-flex items-center px-6 py-3 bg-gold-50 rounded-full">
            <StarIcon className="h-5 w-5 text-gold-400 mr-2" />
            <span className="text-navy-900 font-medium">
              Note moyenne de {siteData.testimonials.reduce((acc, t) => acc + t.rating, 0) / siteData.testimonials.length}/5 sur {siteData.testimonials.length} avis
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
