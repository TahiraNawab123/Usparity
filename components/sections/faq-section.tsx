"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
      question: "How does the subscription work?",
      answer:
        "Our subscription plans are billed monthly or yearly. You can request content through your dashboard, and we'll deliver high-quality articles according to your plan limits. You can upgrade, downgrade, or cancel anytime.",
    },
    {
      question: "What if I'm not satisfied with the content?",
      answer:
        "We offer unlimited revisions on all plans until you're completely satisfied. If you're still not happy, we provide a 30-day money-back guarantee for new subscribers.",
    },
    {
      question: "How quickly will I receive my content?",
      answer:
        "Standard delivery is 3-5 business days for most articles. Pro and Elite plans get priority delivery. Rush delivery (24-48 hours) is available as an add-on service.",
    },
    {
      question: "Do you provide SEO optimization?",
      answer:
        "Yes! All our plans include SEO optimization. We conduct keyword research, optimize meta descriptions, headers, and ensure your content follows SEO best practices to improve search rankings.",
    },
    {
      question: "Can I request specific topics or industries?",
      answer:
        "Our writers have expertise across various industries. You can specify your niche, target audience, tone, and any specific requirements when submitting content requests.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "If you need more content than your plan allows, you can either upgrade your plan or purchase additional articles at our standard rates. We'll notify you before any overage charges.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for new subscribers. For existing customers, we focus on revisions and ensuring satisfaction rather than refunds, but we handle each case individually.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing period, and you'll retain access to all delivered content.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our content writing services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:border-purple-300 transition-colors">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  )
}
