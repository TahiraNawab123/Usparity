import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TermsOfServiceSection } from "@/components/sections/terms-of-service-section"

export const metadata = {
  title: "Terms of Service - Usparity",
  description:
    "Read our terms of service and understand your rights and responsibilities when using Usparity services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <TermsOfServiceSection />
      </main>
      <Footer />
    </div>
  )
}
