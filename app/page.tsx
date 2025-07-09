import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesPreview } from "@/components/sections/services-preview"
import { HowItWorks } from "@/components/sections/how-it-works"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogPreview } from "@/components/sections/blog-preview"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <HowItWorks />
        <TestimonialsSection />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
