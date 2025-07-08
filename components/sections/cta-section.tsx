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
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Transform Your Content?
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Elevate Your Brand with Usparity?
        </h2>

        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join businesses worldwide who trust Usparity with their digital growth. Get started with our premium services
          and watch your online presence soar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={handlePricingNavigation}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 bg-transparent"
            onClick={handleContactNavigation}
          >
            Schedule a Consultation
          </Button>
        </div>

        <div className="mt-10 text-purple-200 text-sm">
          <p>No setup fees • Cancel anytime • 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}
