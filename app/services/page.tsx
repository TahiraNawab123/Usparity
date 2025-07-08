import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesDetailSection } from "@/components/sections/services-detail-section"

export const metadata = {
  title: "Our Services - Usparity",
  description:
    "Comprehensive digital solutions including content writing, digital marketing, e-commerce support, and AI-powered insights.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ServicesDetailSection />
      </main>
      <Footer />
    </div>
  )
}
