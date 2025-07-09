"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const router = useRouter()

  const handlePricingNavigation = () => {
    router.push("/pricing")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleContactNavigation = () => {
    router.push("/contact")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="section-spacing gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-1 h-1 bg-white/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Transform Your Content?
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Brand with Usparity?
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join businesses worldwide who trust Usparity with their digital growth. Get started with our premium services
          and watch your online presence soar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={handlePricingNavigation}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-secondary text-lg px-8 py-4"
            onClick={handleContactNavigation}
          >
            Schedule a Consultation
          </Button>
        </div>

        <div className="mt-10 text-white/80 text-sm">
          <p>No setup fees • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}
