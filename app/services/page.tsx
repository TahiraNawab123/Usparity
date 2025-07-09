import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ServicesDetailSection } from "@/components/sections/services-detail-section"

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
