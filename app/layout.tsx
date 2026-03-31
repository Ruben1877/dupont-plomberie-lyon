import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingCallButton from "@/components/floating-call-button"
import CookieBanner from "@/components/cookie-banner"
import siteData from "@/lib/site-data"

export const metadata: Metadata = {
  title: `${siteData.businessName} - ${siteData.trade} ${siteData.city}`,
  description: siteData.description,
  keywords: `plombier ${siteData.city}, chauffagiste ${siteData.city}, dépannage plomberie, urgence plomberie, installation sanitaire, entretien chaudière`,
  openGraph: {
    title: `${siteData.businessName} - ${siteData.tagline}`,
    description: siteData.description,
    type: "website",
    locale: "fr_FR",
    url: "https://jeandupont-plomberie.fr",
    siteName: siteData.businessName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=630",
        width: 1200,
        height: 630,
        alt: `${siteData.businessName} - Plombier professionnel à ${siteData.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.businessName} - ${siteData.trade} ${siteData.city}`,
    description: siteData.description,
    images: ["https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200&h=630"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  authors: [{ name: siteData.businessName }],
  creator: siteData.businessName,
  publisher: siteData.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
        <CookieBanner />
      </body>
    </html>
  )
}
