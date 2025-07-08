import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogListSection } from "@/components/sections/blog-list-section"

export const metadata = {
  title: "Blog - Usparity",
  description:
    "Latest insights, tips, and trends in digital marketing, content writing, and e-commerce from the Usparity team.",
}

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
