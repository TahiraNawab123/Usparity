import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PrivacyPolicySection } from "@/components/sections/privacy-policy-section"

export const metadata = {
  title: "Privacy Policy - Usparity",
  description: "Learn how Usparity protects your privacy and handles your personal data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <PrivacyPolicySection />
      </main>
      <Footer />
    </div>
  )
}
