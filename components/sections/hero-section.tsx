"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

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
    <section className="min-h-screen gradient-bg-dark relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-fade-in-up border border-white/20">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Premium Digital Solutions & Content Services
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Elevate Your Brand with{" "}
            <span className="gradient-text">Usparity</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            We blend creativity, strategy, and AI-driven insights to deliver impactful digital solutions. Get
            high-quality content, digital marketing, and e-commerce support that drives results.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-gray-400 animate-fade-in-up">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              500+ Happy Clients
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              10,000+ Articles Delivered
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              99% Client Satisfaction
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button
              size="lg"
              className="btn-primary text-lg px-8 py-4"
              onClick={handlePricingNavigation}
            >
              View Pricing Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-secondary text-lg px-8 py-4"
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
