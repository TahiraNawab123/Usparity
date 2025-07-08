"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Check, Zap, Crown, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      monthlyPrice: 19,
      yearlyPrice: 190,
      description: "Perfect for small businesses getting started",
      features: [
        "2 articles per week",
        "Up to 1000 words each",
        "Basic SEO optimization",
        "Email support",
        "2 revisions included",
        "Content calendar",
        "Basic analytics",
      ],
      popular: false,
      color: "blue",
    },
    {
      name: "Pro",
      icon: Crown,
      monthlyPrice: 49,
      yearlyPrice: 490,
      description: "Ideal for growing businesses",
      features: [
        "4 articles per week",
        "Up to 1500 words each",
        "Advanced SEO optimization",
        "Priority support",
        "Unlimited revisions",
        "Custom graphics included",
        "Social media snippets",
        "Keyword research",
        "Content strategy consultation",
      ],
      popular: true,
      color: "purple",
    },
    {
      name: "Elite",
      icon: Rocket,
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: "For enterprises and agencies",
      features: [
        "Unlimited article requests",
        "Up to 2000 words each",
        "Premium SEO optimization",
        "24/7 dedicated support",
        "Rush delivery available",
        "Custom graphics & infographics",
        "Content strategy consultation",
        "Dedicated account manager",
        "White-label options",
        "API access",
        "Custom integrations",
      ],
      popular: false,
      color: "gold",
    },
  ]

  const addOns = [
    {
      name: "Rush Delivery",
      price: "$15",
      description: "Get your content delivered within 24 hours",
    },
    {
      name: "Extra Word Count",
      price: "$0.05/word",
      description: "Additional words beyond your plan limit",
    },
    {
      name: "Premium Graphics",
      price: "$25",
      description: "Custom infographics and visual content",
    },
    {
      name: "SEO Audit",
      price: "$50",
      description: "Comprehensive SEO analysis and recommendations",
    },
  ]

  const formatPrice = (price: number) => {
    return `$${price}`
  }

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
              Transparent & Flexible Pricing
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Plans That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Scale With You
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Transparent pricing with no hidden fees. All plans include premium quality writing, dedicated support, and
              satisfaction guarantee.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                No Setup Fees
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Cancel Anytime
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                30-Day Guarantee
              </div>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 animate-fade-in-up">
              <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/70"}`}>Monthly</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-white/30" />
              <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/70"}`}>Yearly</span>
              <Badge className="bg-green-500 text-white hover:bg-green-500">Save 17%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover-lift ${plan.popular ? "border-purple-500 border-2 shadow-xl scale-105" : "border-gray-200 shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 deep-gradient text-white hover:opacity-90 px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.color === "purple"
                        ? "deep-gradient"
                        : plan.color === "gold"
                          ? "bg-yellow-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <plan.icon
                      className={`w-8 h-8 ${
                        plan.color === "purple"
                          ? "text-white"
                          : plan.color === "gold"
                            ? "text-yellow-600"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {formatPrice(isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice)}
                    </span>
                    <span className="text-gray-600">/month</span>
                    {isYearly && (
                      <div className="text-sm text-gray-500 mt-1">
                        Billed annually ({formatPrice(plan.yearlyPrice)})
                      </div>
                    )}
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth/signup">
                    <Button
                      className={`w-full h-12 text-base font-semibold ${
                        plan.popular
                          ? "deep-gradient text-white hover:opacity-90"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Get Started with {plan.name}
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">No setup fees • Cancel anytime</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
              <p className="text-lg text-gray-600">Enhance your plan with these premium services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">{addon.name}</h3>
                      <span className="font-bold text-purple-600 text-lg">{addon.price}</span>
                    </div>
                    <p className="text-gray-600">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 hover-lift">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
                <p className="text-gray-600 mb-6">
                  For large enterprises or unique requirements, we offer custom pricing and tailored solutions.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="deep-gradient text-white hover:opacity-90">
                    Contact Sales Team
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
