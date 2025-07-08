"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  ArrowLeft,
  BookOpen,
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
} from "lucide-react"

interface BlogPost {
  title: string
  content: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  slug: string
  tags: string[]
}

interface BlogDetailSectionProps {
  post: BlogPost
}

export function BlogDetailSection({ post }: BlogDetailSectionProps) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(42)

  const handleBack = () => {
    router.push("/blog")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `Check out this article: ${post.title}`

  const socialShareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-blue-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-blue-700",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    // You could add a toast notification here
  }

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button onClick={handleBack} variant="ghost" className="text-white hover:bg-white/20 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <div className="space-y-6">
            <Badge className="bg-white/20 text-white hover:bg-white/30">{post.category}</Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{post.title}</h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={post.author} />
                  <AvatarFallback className="bg-white/20 text-white">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/60">Content Specialist</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video mb-8 rounded-xl overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Engagement Actions */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={handleLike}
                      variant="ghost"
                      className={`flex items-center space-x-2 ${isLiked ? "text-red-600" : "text-gray-600"}`}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                      <span>{likes}</span>
                    </Button>
                    <Button variant="ghost" className="flex items-center space-x-2 text-gray-600">
                      <MessageCircle className="w-5 h-5" />
                      <span>12</span>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 mr-2">Share:</span>
                    {socialShareLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 text-gray-600 ${social.color} transition-colors`}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      size="sm"
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Avatar className="h-16 w-16 mx-auto mb-4">
                        <AvatarImage src="/placeholder.svg?height=64&width=64" alt={post.author} />
                        <AvatarFallback className="bg-purple-600 text-white">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-gray-900 mb-1">{post.author}</h3>
                      <p className="text-sm text-gray-600 mb-4">Content Specialist at Usparity</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Passionate about creating engaging content that drives results and helps businesses grow their
                        online presence.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      <a
                        href="#introduction"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Introduction
                      </a>
                      <a
                        href="#understanding-modern-seo"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Understanding Modern SEO
                      </a>
                      <a
                        href="#content-writing-best-practices"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Content Writing Best Practices
                      </a>
                      <a
                        href="#advanced-seo-techniques"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Advanced SEO Techniques
                      </a>
                      <a
                        href="#measuring-success"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Measuring Success
                      </a>
                      <a
                        href="#conclusion"
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Conclusion
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-purple-600 cursor-pointer">
                          Digital Marketing Trends to Watch in 2024
                        </h4>
                        <p className="text-xs text-gray-600">5 min read</p>
                      </div>
                      <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-purple-600 cursor-pointer">
                          AI in Content Creation: Tools and Best Practices
                        </h4>
                        <p className="text-xs text-gray-600">9 min read</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-purple-600 cursor-pointer">
                          Advanced SEO Techniques for 2024
                        </h4>
                        <p className="text-xs text-gray-600">12 min read</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-white/90 mb-8">
            Get expert tips, industry trends, and actionable strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">Subscribe</Button>
          </div>
        </div>
      </section>
    </article>
  )
}
