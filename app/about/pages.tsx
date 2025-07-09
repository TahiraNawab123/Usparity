import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutPageSection } from "@/components/sections/about-page-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AboutPageSection />
      </main>
      <Footer />
    </div>
  )
}
