import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogPreview() {
  const blogPosts = [
    {
      title: "The Ultimate Guide to SEO Content Writing in 2024",
      excerpt:
        "Discover the latest SEO strategies and content writing techniques that will help your content rank higher in search results.",
      category: "SEO",
      author: "Alex Thompson",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "How to Create Engaging Blog Content That Converts",
      excerpt:
        "Learn the secrets of creating blog content that not only engages your audience but also drives conversions and sales.",
      category: "Content Strategy",
      author: "Sarah Wilson",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "The Psychology Behind Compelling Copywriting",
      excerpt:
        "Understand the psychological principles that make copywriting effective and how to apply them to your content.",
      category: "Copywriting",
      author: "David Chen",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in content writing, SEO, and digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-purple-600 hover:text-purple-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
