"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  const router = useRouter()

  const handlePricingNavigation = () => {
    router.push("/pricing")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleServicesNavigation = () => {
    router.push("/services")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="hero-full-height deep-gradient-enhanced relative overflow-hidden">
      {/* Enhanced Disco dots */}
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
            Premium Digital Solutions & Content Services
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Elevate Your Brand with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Usparity</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
            We blend creativity, strategy, and AI-driven insights to deliver impactful digital solutions. Get
            high-quality content, digital marketing, and e-commerce support that drives results.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
            <div className="flex items-center hover:text-white transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              500+ Happy Clients
            </div>
            <div className="flex items-center hover:text-white transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              10,000+ Articles Delivered
            </div>
            <div className="flex items-center hover:text-white transition-colors">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              99% Client Satisfaction
            </div>
          </div>

          {/* CTA Buttons - Moved slightly up */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up -mt-2">
            <Button
              size="lg"
              className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-10 py-4 hover-lift font-semibold"
              onClick={handlePricingNavigation}
            >
              View Pricing Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-10 py-4 hover-lift font-semibold bg-transparent"
              onClick={handleServicesNavigation}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
