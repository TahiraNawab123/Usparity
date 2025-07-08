"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function BlogListSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(6)

  const blogPosts = [
    {
      title: "The Ultimate Guide to SEO Content Writing in 2024",
      excerpt:
        "Discover the latest SEO strategies and content writing techniques that will help your content rank higher in search results and drive organic traffic.",
      category: "SEO",
      author: "Usparity Team",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "ultimate-guide-seo-content-writing-2024",
    },
    {
      title: "How to Create Engaging Blog Content That Converts",
      excerpt:
        "Learn the secrets of creating blog content that not only engages your audience but also drives conversions and builds lasting relationships with your readers.",
      category: "Content Strategy",
      author: "Usparity Team",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "create-engaging-blog-content-converts",
    },
    {
      title: "Digital Marketing Trends to Watch in 2024",
      excerpt:
        "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry and help you reach your target audience more effectively.",
      category: "Digital Marketing",
      author: "Usparity Team",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "digital-marketing-trends-2024",
    },
    {
      title: "E-commerce Optimization: Boost Your Online Sales",
      excerpt:
        "Practical strategies and techniques to optimize your e-commerce store, improve user experience, and increase conversion rates for better sales performance.",
      category: "E-commerce",
      author: "Usparity Team",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "ecommerce-optimization-boost-online-sales",
    },
    {
      title: "AI in Content Creation: Tools and Best Practices",
      excerpt:
        "Explore how artificial intelligence is revolutionizing content creation and discover the best AI tools and practices for modern content marketers.",
      category: "AI & Technology",
      author: "Usparity Team",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "ai-content-creation-tools-best-practices",
    },
    {
      title: "Social Media Marketing Strategy for Small Businesses",
      excerpt:
        "A comprehensive guide to building an effective social media marketing strategy that helps small businesses grow their online presence and engage customers.",
      category: "Social Media",
      author: "Usparity Team",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "social-media-marketing-strategy-small-businesses",
    },
    {
      title: "Content Marketing ROI: Measuring Success",
      excerpt:
        "Learn how to measure and improve your content marketing ROI with proven metrics and strategies that drive business growth.",
      category: "Content Strategy",
      author: "Usparity Team",
      date: "2024-01-01",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "content-marketing-roi-measuring-success",
    },
    {
      title: "Advanced SEO Techniques for 2024",
      excerpt:
        "Master advanced SEO techniques that will help your website rank higher and attract more organic traffic in the competitive digital landscape.",
      category: "SEO",
      author: "Usparity Team",
      date: "2023-12-28",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=500",
      slug: "advanced-seo-techniques-2024",
    },
  ]

  const categories = [
    "All",
    "SEO",
    "Content Strategy",
    "Digital Marketing",
    "E-commerce",
    "AI & Technology",
    "Social Media",
  ]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-full-height deep-gradient-enhanced relative overflow-hidden">
        {/* Disco dots */}
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>
        <div className="disco-dots"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Expert Insights & Industry Knowledge
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Insights That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Drive Success
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Explore expert-driven content, industry trends, and actionable strategies curated to inform, inspire, and
              accelerate your digital transformation journey.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                50+ Expert Articles
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Weekly Updates
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Industry Best Practices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === activeCategory ? "default" : "secondary"}
                className={`px-4 py-2 cursor-pointer transition-colors ${
                  category === activeCategory
                    ? "deep-gradient text-white hover:opacity-90"
                    : "bg-gray-200 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`}
                onClick={() => {
                  setActiveCategory(category)
                  setVisiblePosts(6)
                }}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg hover-lift"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors cursor-pointer">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMorePosts}
                className="px-8 py-3 deep-gradient text-white rounded-lg hover:opacity-90 transition-all font-semibold"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
