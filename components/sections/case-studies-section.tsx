import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Zap, CheckCircle } from "lucide-react"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "TechStart Inc. - 300% Traffic Growth",
      industry: "Technology",
      challenge: "Low organic traffic and poor search rankings",
      solution: "Comprehensive SEO content strategy with weekly blog posts and technical articles",
      results: [
        "300% increase in organic traffic",
        "50+ keywords ranking on page 1",
        "25% increase in lead generation",
        "40% improvement in engagement rate",
      ],
      duration: "6 months",
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "GrowthLab - E-commerce Optimization",
      industry: "E-commerce",
      challenge: "Low conversion rates and poor product descriptions",
      solution: "Product catalog optimization and conversion-focused copywriting",
      results: [
        "45% increase in conversion rate",
        "60% improvement in product page engagement",
        "35% boost in average order value",
        "200+ optimized product descriptions",
      ],
      duration: "4 months",
      icon: Target,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Digital Dynamics - Content Marketing Success",
      industry: "Marketing Agency",
      challenge: "Inconsistent content quality and missed deadlines",
      solution: "Dedicated content team with streamlined workflow and quality assurance",
      results: [
        "100% on-time delivery rate",
        "90% client satisfaction score",
        "50% reduction in revision requests",
        "3x faster content production",
      ],
      duration: "8 months",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "InnovateCorp - AI-Powered Content Strategy",
      industry: "SaaS",
      challenge: "Complex technical topics needed simplified for broader audience",
      solution: "AI-assisted content creation with technical expertise and audience analysis",
      results: [
        "250% increase in blog readership",
        "40% improvement in content engagement",
        "30% boost in demo requests",
        "15+ thought leadership articles published",
      ],
      duration: "5 months",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600",
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
              Real Results & Success Stories
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Success Stories
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Discover how we've helped businesses achieve remarkable results through strategic content and digital
              solutions.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                300% Average Growth
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Measurable Results
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Industry Leaders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden shadow-xl border-0 hover-lift">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${study.color}`}>
                        <study.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-gray-900">{study.title}</h2>
                        <Badge variant="secondary" className="mt-2">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
                        <p className="text-gray-600">{study.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Results</h3>
                    <ul className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto deep-gradient border-0 text-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss how we can help you achieve similar results for your business.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
