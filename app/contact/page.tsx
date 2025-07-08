import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata = {
  title: "Contact Us - Usparity",
  description: "Get in touch with Usparity for premium digital solutions, content writing, and marketing services.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
