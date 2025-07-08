"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, Search, TrendingUp, Zap } from "lucide-react"

export function ServicesPreview() {
  const router = useRouter()

  const services = [
    {
      icon: PenTool,
      title: "Content Writing",
      description: "High-quality articles, blog posts, and web copy that engage your audience and drives conversions.",
      features: ["SEO Optimized", "Original Content", "Multiple Revisions", "Fast Delivery"],
      href: "/services",
      available: true,
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence and reach the right audience.",
      features: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Analytics & Reporting"],
      href: "/services",
      available: false,
    },
    {
      icon: TrendingUp,
      title: "E-commerce Solutions",
      description: "Complete e-commerce support from store setup to optimisation and conversion-rate improvement.",
      features: ["Store Setup", "Product Optimisation", "Conversion Optimisation", "Payment Integration"],
      href: "/services",
      available: false,
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain valuable insights and optimise your digital strategy.",
      features: ["Data Analysis", "Performance Tracking", "Predictive Analytics", "Strategy Optimisation"],
      href: "/services",
      available: true,
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleViewAllServices = () => {
    router.push("/services")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center content-spacing">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From content writing to digital marketing, we provide comprehensive solutions to elevate your brand&rsquo;s
            online presence.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="block h-full">
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 cursor-pointer h-full hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 deep-gradient rounded-lg flex items-center justify-center mb-4 group-hover:shadow-md transition-all">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    className="deep-gradient text-white w-full font-semibold hover:opacity-90"
                    disabled={!service.available}
                    onClick={() => service.available && handleNavigation(service.href)}
                  >
                    {service.available ? "Learn More" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-8 bg-transparent hover-lift"
            onClick={handleViewAllServices}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
