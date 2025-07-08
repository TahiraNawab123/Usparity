import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PenTool, Search, TrendingUp, Zap, Check, CheckCircle } from "lucide-react"
import Link from "next/link"

export function ServicesDetailSection() {
  const services = [
    {
      id: "content-writing",
      icon: PenTool,
      title: "Content Writing",
      description: "Professional content writing services that engage your audience and drive results.",
      features: [
        "SEO-optimized blog posts and articles",
        "Website copy and landing pages",
        "Social media content",
        "Email newsletters and campaigns",
        "Product descriptions",
        "Technical writing and documentation",
      ],
      benefits: [
        "Increased organic traffic",
        "Higher engagement rates",
        "Improved brand authority",
        "Better conversion rates",
      ],
      deliverables: "High-quality, original content delivered on time with unlimited revisions until satisfaction.",
      available: true,
    },
    {
      id: "digital-marketing",
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      features: [
        "Social media marketing and management",
        "Pay-per-click (PPC) advertising",
        "Email marketing campaigns",
        "Search engine optimization (SEO)",
        "Content marketing strategy",
        "Analytics and performance tracking",
      ],
      benefits: [
        "Increased brand visibility",
        "Higher quality leads",
        "Better ROI on marketing spend",
        "Data-driven decision making",
      ],
      deliverables: "Complete marketing campaigns with detailed analytics, monthly reports, and ongoing optimization.",
      available: false,
    },
    {
      id: "ecommerce-solutions",
      icon: TrendingUp,
      title: "E-commerce Solutions",
      description: "Complete e-commerce support from store setup to optimization and growth.",
      features: [
        "E-commerce store setup and design",
        "Product catalog optimization",
        "Payment gateway integration",
        "Inventory management systems",
        "Conversion rate optimization",
        "Mobile commerce optimization",
      ],
      benefits: [
        "Increased online sales",
        "Better user experience",
        "Streamlined operations",
        "Mobile-friendly shopping",
      ],
      deliverables: "Fully functional e-commerce store with optimized product listings and integrated payment systems.",
      available: false,
    },
    {
      id: "ai-insights",
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain valuable insights and optimize your strategy.",
      features: [
        "Data analysis and interpretation",
        "Predictive analytics",
        "Performance tracking and monitoring",
        "Automated reporting",
        "Strategy optimization recommendations",
        "Competitive analysis",
      ],
      benefits: ["Data-driven decisions", "Improved performance", "Competitive advantage", "Automated insights"],
      deliverables: "Comprehensive analytics reports with actionable insights and strategic recommendations.",
      available: true,
    },
  ]

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
              Comprehensive Digital Solutions
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Expert Services
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              From premium content writing to AI-powered insights, our comprehensive suite of services is designed to
              elevate your brand and drive measurable results in the digital landscape.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />4 Core Service Areas
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Expert Team Available
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Tailored Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20 relative">
                {!service.available && (
                  <Badge className="absolute -top-4 left-4 bg-orange-500 text-white hover:bg-orange-500 z-10">
                    Coming Soon
                  </Badge>
                )}
                <Card className="overflow-hidden shadow-xl border-0 hover-lift">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 deep-gradient rounded-xl flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="font-serif text-3xl font-bold text-gray-900">{service.title}</h2>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="lg"
                        className="deep-gradient text-white hover:opacity-90"
                        disabled={!service.available}
                      >
                        {service.available ? `Get Started with ${service.title}` : "Coming Soon"}
                      </Button>
                    </div>

                    <div
                      className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <div className="h-full flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Benefits:</h3>
                        <ul className="space-y-4 mb-8">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                              <span className="text-gray-700 font-medium">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.deliverables}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto deep-gradient border-0 text-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss how our services can help elevate your brand and achieve your digital goals.
                </p>
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Contact Us Today
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
