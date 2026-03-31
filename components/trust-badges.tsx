import { 
  ShieldCheckIcon, 
  ClockIcon, 
  HandThumbUpIcon, 
  TrophyIcon 
} from "@heroicons/react/24/outline"
import siteData from "@/lib/site-data"

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheckIcon,
      value: `${siteData.experience} ans`,
      label: "d'expérience"
    },
    {
      icon: ClockIcon,
      value: "30 min",
      label: "intervention rapide"
    },
    {
      icon: HandThumbUpIcon,
      value: "2500+",
      label: "clients satisfaits"
    },
    {
      icon: TrophyIcon,
      value: "Certifié",
      label: "Qualibat RGE"
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-3">
                <badge.icon className="h-8 w-8 text-gold-500" />
              </div>
              <div className="text-2xl font-bold text-navy-900">{badge.value}</div>
              <div className="text-sm text-gray-600">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
