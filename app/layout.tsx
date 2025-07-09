import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/providers/auth-provider"
import { Toaster } from "@/components/ui/toast"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Usparity - Premium Digital Solutions & Content Services",
  description: "We blend creativity, strategy, and AI-driven insights to deliver impactful digital solutions. Get high-quality content, digital marketing, and e-commerce support that drives results.",
  keywords: ["digital marketing", "content creation", "e-commerce", "AI solutions", "brand strategy"],
  authors: [{ name: "Usparity" }],
  creator: "Usparity",
  publisher: "Usparity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://usparity.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usparity.com",
    title: "Usparity - Premium Digital Solutions & Content Services",
    description: "We blend creativity, strategy, and AI-driven insights to deliver impactful digital solutions.",
    siteName: "Usparity",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usparity - Premium Digital Solutions & Content Services",
    description: "We blend creativity, strategy, and AI-driven insights to deliver impactful digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-900 text-white`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
