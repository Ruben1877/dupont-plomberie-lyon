import type { Metadata } from "next"
import "./globals.css"
import siteData from "@/lib/site-data"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: `${siteData.businessName} - ${siteData.trade} à ${siteData.city}`,
  description: siteData.description,
  keywords: "plombier Lyon, chauffagiste Lyon, dépannage plomberie, urgence plomberie Lyon, installation sanitaire, entretien chaudière",
  openGraph: {
    title: `${siteData.businessName} - ${siteData.trade} à ${siteData.city}`,
    description: siteData.description,
    type: "website",
    locale: "fr_FR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
