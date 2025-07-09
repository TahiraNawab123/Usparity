"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, Eye, MessageCircle, Heart } from "lucide-react"

export function BlogListSection() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: "ai-content-marketing-2024",
      title: "The Future of AI in Content Marketing: Trends for 2024",
      excerpt:
        "Discover how artificial intelligence is revolutionizing content marketing strategies and what businesses need to know to stay competitive in the digital landscape.",
      author: "Tahira Nawab",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Technology",
      tags: ["AI", "Content Marketing", "Digital Strategy"],
      image: "/placeholder.svg?height=300&width=500",
      views: 1250,
      comments: 23,
      likes: 89,
      featured: true,
    },
    {
      id: "seo-optimization-guide",
      title: "Complete SEO Optimization Guide for Small Businesses",
      excerpt:
        "A comprehensive guide to improving your website's search engine rankings with practical tips and proven strategies that deliver real results.",
      author: "Noor Fatima",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "SEO",
      tags: ["SEO", "Digital Marketing", "Small Business"],
      image: "/placeholder.svg?height=300&width=500",
      views: 2100,
      comments: 45,
      likes: 156,
      featured: false,
    },
    {
      id: "data-driven-marketing",
      title: "How Data-Driven Marketing Can Transform Your Business",
      excerpt:
        "Learn how to leverage data analytics to create more effective marketing campaigns and make informed business decisions that drive growth.",
      author: "Rafay Khan",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Data Science",
      tags: ["Data Analytics", "Marketing", "Business Intelligence"],
      image: "/placeholder.svg?height=300&width=500",
      views: 1800,
      comments: 34,
      likes: 127,
      featured: true,
    },
    {
      id: "web-design-trends-2024",
      title: "Top Web Design Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the curve with the latest web design trends, from immersive 3D experiences to minimalist interfaces that prioritize user experience.",
      author: "Ayesha Tariq",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Web Design",
      tags: ["Web Design", "UI/UX", "Trends"],
      image: "/placeholder.svg?height=300&width=500",
      views: 1650,
      comments: 28,
      likes: 98,
      featured: false,
    },
    {
      id: "ecommerce-conversion-optimization",
      title: "E-commerce Conversion Optimization: Proven Strategies",
      excerpt:
        "Boost your online store's performance with these conversion optimization techniques that have helped businesses increase sales by up to 40%.",
      author: "Tahira Nawab",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "E-commerce",
      tags: ["E-commerce", "Conversion", "Online Sales"],
      image: "/placeholder.svg?height=300&width=500",
      views: 2250,
      comments: 52,
      likes: 189,
      featured: false,
    },
    {
      id: "social-media-strategy-2024",
      title: "Building a Winning Social Media Strategy in 2024",
      excerpt:
        "Create engaging social media campaigns that build brand awareness, drive traffic, and convert followers into loyal customers.",
      author: "Noor Fatima",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Social Media",
      tags: ["Social Media", "Brand Building", "Digital Marketing"],
      image: "/placeholder.svg?height=300&width=500",
      views: 1950,
      comments: 41,
      likes: 143,
      featured: true,
    },
  ]

  const categories = ["All", "AI & Technology", "SEO", "Data Science", "Web Design", "E-commerce", "Social Media"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const handleReadMore = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 animate-fade-in-up">Our Blog</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up">
            Insights, tips, and strategies to help you succeed in the digital world. Stay updated with the latest trends
            and best practices.
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-4 left-4 bg-purple-600">Featured</Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleReadMore(post.id)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-white text-purple-600">{post.category}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleReadMore(post.id)}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss out on the latest trends, tips, and strategies in digital
            marketing and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="bg-white text-gray-900 border-0" />
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
