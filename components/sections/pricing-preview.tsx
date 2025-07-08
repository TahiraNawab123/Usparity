"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingPreview() {
  const router = useRouter()

  const plans = [
    {
      name: "Starter",
      price: "₹1,499",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "2 articles per week",
        "Up to 1000 words each",
        "Basic SEO optimization",
        "Email support",
        "2 revisions included",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹3,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "4 articles per week",
        "Up to 1500 words each",
        "Advanced SEO optimization",
        "Priority support",
        "Unlimited revisions",
        "Custom graphics included",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "₹7,999",
      period: "/month",
      description: "For enterprises and agencies",
      features: [
        "Unlimited article requests",
        "Up to 2000 words each",
        "Premium SEO optimization",
        "24/7 dedicated support",
        "Rush delivery available",
        "Custom graphics & infographics",
        "Content strategy consultation",
      ],
      popular: false,
    },
  ]

  const handleViewDetailedPricing = () => {
    router.push("/pricing")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your content needs. All plans include premium quality writing and dedicated
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-purple-500 border-2 shadow-lg scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent" onClick={handleViewDetailedPricing}>
            View Detailed Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}
