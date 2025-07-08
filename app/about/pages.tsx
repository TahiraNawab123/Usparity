import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AboutPageSection } from "@/components/sections/about-page-section"

export const metadata = {
  title: "About Us - Usparity",
  description:
    "Learn about Usparity's mission, vision, and values. Discover how we transform digital presence into business success.",
}

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
