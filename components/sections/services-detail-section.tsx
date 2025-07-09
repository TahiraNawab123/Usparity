"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  PenTool,
  Search,
  Globe,
  Smartphone,
  BarChart3,
  Brain,
  ShoppingCart,
  Mail,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function ServicesDetailSection() {
  const [activeService, setActiveService] = useState(0)
  const router = useRouter()

  const services = [
    {
      id: "content-writing",
      title: "Content Writing",
      icon: PenTool,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Professional content that engages, informs, and converts your audience.",
      fullDescription:
        "Our expert writers create compelling, SEO-optimized content that resonates with your target audience and drives meaningful engagement. From blog posts to website copy, we ensure every word serves your business goals.",
      features: [
        "SEO-optimized blog posts and articles",
        "Website copy and landing pages",
        "Product descriptions and reviews",
        "Social media content",
        "Email marketing campaigns",
        "Technical documentation",
      ],
      pricing: "Starting from $50/article",
      deliveryTime: "2-5 business days",
      includes: ["Keyword research", "SEO optimization", "Unlimited revisions", "Plagiarism check"],
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      icon: Search,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Boost your search rankings and drive organic traffic to your website.",
      fullDescription:
        "Our comprehensive SEO strategies help your business rank higher in search results, attract qualified leads, and increase organic traffic through proven optimization techniques.",
      features: [
        "Keyword research and analysis",
        "On-page SEO optimization",
        "Technical SEO audits",
        "Link building strategies",
        "Local SEO optimization",
        "Performance tracking and reporting",
      ],
      pricing: "Starting from $500/month",
      deliveryTime: "Results in 3-6 months",
      includes: ["Monthly reports", "Keyword tracking", "Competitor analysis", "Technical support"],
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: Globe,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Custom websites that are fast, responsive, and conversion-focused.",
      fullDescription:
        "We build modern, responsive websites that not only look great but also perform exceptionally. Our development process focuses on user experience, speed, and conversion optimization.",
      features: [
        "Responsive web design",
        "E-commerce development",
        "CMS integration",
        "Performance optimization",
        "Security implementation",
        "Ongoing maintenance",
      ],
      pricing: "Starting from $2,000",
      deliveryTime: "4-8 weeks",
      includes: ["Mobile optimization", "SSL certificate", "Basic SEO setup", "3 months support"],
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      icon: Smartphone,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
      fullDescription:
        "Transform your business with custom mobile applications that provide seamless user experiences across all devices and platforms.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Analytics integration",
      ],
      pricing: "Starting from $5,000",
      deliveryTime: "8-16 weeks",
      includes: ["App store submission", "User testing", "Documentation", "6 months support"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: BarChart3,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Comprehensive digital marketing strategies that drive growth.",
      fullDescription:
        "Our data-driven marketing approach helps you reach the right audience, increase brand awareness, and drive conversions across all digital channels.",
      features: [
        "Social media marketing",
        "Pay-per-click advertising",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Influencer partnerships",
        "Marketing automation",
      ],
      pricing: "Starting from $1,000/month",
      deliveryTime: "Ongoing campaigns",
      includes: ["Strategy development", "Campaign management", "Performance reporting", "Monthly optimization"],
    },
    {
      id: "ai-insights",
      title: "AI-Powered Insights",
      icon: Brain,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Leverage artificial intelligence to gain competitive advantages.",
      fullDescription:
        "Harness the power of AI to analyze data, predict trends, and make informed business decisions that drive growth and efficiency.",
      features: [
        "Data analysis and visualization",
        "Predictive analytics",
        "Customer behavior insights",
        "Market trend analysis",
        "Automated reporting",
        "AI chatbot development",
      ],
      pricing: "Starting from $1,500/month",
      deliveryTime: "2-4 weeks setup",
      includes: ["Custom dashboard", "Training sessions", "Data integration", "Ongoing support"],
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      icon: ShoppingCart,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Complete e-commerce platforms that drive sales and growth.",
      fullDescription:
        "Build a powerful online store with our comprehensive e-commerce solutions, designed to maximize conversions and provide exceptional shopping experiences.",
      features: [
        "Custom e-commerce development",
        "Payment gateway integration",
        "Inventory management",
        "Order processing automation",
        "Customer account portals",
        "Analytics and reporting",
      ],
      pricing: "Starting from $3,000",
      deliveryTime: "6-12 weeks",
      includes: ["Payment setup", "SSL security", "Mobile optimization", "Training and support"],
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      icon: Mail,
      image: "/placeholder.svg?height=400&width=600",
      shortDescription: "Targeted email campaigns that nurture leads and drive conversions.",
      fullDescription:
        "Create personalized email marketing campaigns that build relationships with your audience and drive consistent revenue growth.",
      features: [
        "Email campaign design",
        "List segmentation",
        "Automated workflows",
        "A/B testing",
        "Performance analytics",
        "CRM integration",
      ],
      pricing: "Starting from $300/month",
      deliveryTime: "1-2 weeks setup",
      includes: ["Template design", "List management", "Analytics dashboard", "Monthly reporting"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      text: "Usparity transformed our online presence completely. Their content writing and SEO services helped us increase organic traffic by 300%.",
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      rating: 5,
      text: "The web development team delivered exactly what we needed. Our new website is fast, beautiful, and converts visitors into customers.",
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Agency",
      rating: 5,
      text: "Their AI-powered insights have given us a competitive edge. We can now predict market trends and make data-driven decisions.",
    },
  ]

  const handleGetStarted = (serviceId: string) => {
    router.push("/auth/signup")
  }

  const handleContactUs = () => {
    router.push("/contact")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 animate-fade-in-up">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive digital solutions designed to accelerate your business growth and maximize your online
            potential.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover-lift ${
                  activeService === index ? "ring-2 ring-purple-600 shadow-lg" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    {React.createElement(services[activeService].icon, {
                      className: "w-6 h-6 text-purple-600",
                    })}
                  </div>
                  <h2 className="text-3xl font-bold font-serif text-gray-900">{services[activeService].title}</h2>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{services[activeService].fullDescription}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-900">Pricing</span>
                      </div>
                      <p className="text-purple-600 font-bold">{services[activeService].pricing}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-900">Delivery</span>
                      </div>
                      <p className="text-gray-600">{services[activeService].deliveryTime}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-900">Support</span>
                      </div>
                      <p className="text-gray-600">24/7 Available</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 flex-1"
                      onClick={() => handleGetStarted(services[activeService].id)}
                    >
                      Get Started with {services[activeService].title}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 bg-transparent" onClick={handleContactUs}>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 lg:p-12 flex items-center justify-center">
                <img
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a customized solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Project Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
