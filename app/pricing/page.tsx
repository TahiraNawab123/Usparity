import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/sections/pricing-section"
import { FAQSection } from "@/components/sections/faq-section"

export const metadata = {
  title: "Pricing Plans - Usparity",
  description: "Choose the perfect content writing plan for your business. Transparent pricing with no hidden fees.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
