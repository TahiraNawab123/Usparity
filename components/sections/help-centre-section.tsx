"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HelpCenterSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([0])

  const categories = [
    { name: "Getting Started", count: 8 },
    { name: "Billing & Payments", count: 6 },
    { name: "Content Services", count: 12 },
    { name: "Account Management", count: 5 },
    { name: "Technical Support", count: 7 },
  ]

  const faqs = [
    {
      question: "How do I get started with Usparity?",
      answer:
        "Getting started is easy! Simply sign up for an account, choose your plan, and submit your first content request through our dashboard. Our team will begin working on your project within 24 hours.",
      category: "Getting Started",
    },
    {
      question: "What types of content do you create?",
      answer:
        "We create a wide variety of content including blog posts, articles, website copy, social media content, email newsletters, product descriptions, and technical documentation. All content is SEO-optimized and tailored to your brand.",
      category: "Content Services",
    },
    {
      question: "How long does it take to receive my content?",
      answer:
        "Standard delivery is 3-5 business days for most articles. Pro and Elite plan members receive priority delivery. Rush delivery (24-48 hours) is available as an add-on service.",
      category: "Content Services",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Yes! All plans include revisions. Starter plans include 2 revisions, while Pro and Elite plans offer unlimited revisions until you're completely satisfied with the content.",
      category: "Content Services",
    },
    {
      question: "How does billing work?",
      answer:
        "We offer monthly and annual billing options. Your subscription automatically renews unless you cancel. You can upgrade, downgrade, or cancel your plan at any time from your account dashboard.",
      category: "Billing & Payments",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for new subscribers. For existing customers, we focus on revisions and ensuring satisfaction rather than refunds, but we handle each case individually.",
      category: "Billing & Payments",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : faqs

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
              Support & Resources
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Get the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Help You Need
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Find answers to your questions and get the support you need to make the most of Usparity's services.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Comprehensive FAQs
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Expert Support Team
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Quick Solutions
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{category.name}</span>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                          {category.count}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Support */}
              <Card className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(index)}
                      >
                        <div className="flex-1 pr-4">
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          <div className="mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {openItems.includes(index) && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                  <p className="text-gray-400 mt-2">Try searching with different keywords or browse our categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
