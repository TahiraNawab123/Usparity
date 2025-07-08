import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContentGuidesSection } from "@/components/sections/content-guides-section"

export const metadata = {
  title: "Content Guides - Usparity",
  description: "Comprehensive guides to help you master content creation, SEO, and digital marketing.",
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ContentGuidesSection />
      </main>
      <Footer />
    </div>
  )
}
