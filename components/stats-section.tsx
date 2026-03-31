"use client"

import { useEffect, useRef, useState } from "react"
import * as HeroIcons from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible, end])

    return (
      <span className="text-4xl sm:text-5xl font-bold text-navy-900">
        {count}{suffix}
      </span>
    )
  }

  const getIcon = (iconName: string) => {
    const Icon = HeroIcons[iconName as keyof typeof HeroIcons]
    return Icon ? <Icon className="h-8 w-8 text-gold-400" /> : null
  }

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? "animate-count-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                {getIcon(stat.icon)}
              </div>
              <div className="text-white">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300 text-sm sm:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
