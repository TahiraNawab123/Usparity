import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WritingTipsSection } from "@/components/sections/writing-tips-section"

export const metadata = {
  title: "Writing Tips - Usparity",
  description: "Expert writing tips and techniques to improve your content creation skills.",
}

export default function TipsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <WritingTipsSection />
      </main>
      <Footer />
    </div>
  )
}
