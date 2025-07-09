import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogListSection } from "@/components/sections/blog-list-section"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <BlogListSection />
      </main>
      <Footer />
    </div>
  )
}
