import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"

export const metadata = {
  title: "Case Studies - Usparity",
  description: "Explore our success stories and see how we've helped businesses achieve their digital goals.",
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  )
}
