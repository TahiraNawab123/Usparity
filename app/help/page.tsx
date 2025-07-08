import { Header } from "../../components/layout/header"
import { Footer } from "../../components/layout/footer"
// Update the import path below if the file name or location is different, e.g. help-center-section.tsx or HelpCenterSection.tsx
import { HelpCenterSection } from "../../components/sections/help-center-section"

export const metadata = {
  title: "Help Center - Usparity",
  description: "Find answers to frequently asked questions and get support for Usparity services.",
}

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HelpCenterSection />
      </main>
      <Footer />
    </div>
  )
}
