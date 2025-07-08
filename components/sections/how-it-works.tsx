import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageSquare, Rocket } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Your Request",
      description:
        "Tell us about your content needs, target audience, and preferred style through our simple request form.",
      step: "01",
    },
    {
      icon: MessageSquare,
      title: "We Create & Collaborate",
      description: "Our expert writers craft your content while keeping you in the loop with drafts and revisions.",
      step: "02",
    },
    {
      icon: Rocket,
      title: "Receive & Publish",
      description: "Get your polished, SEO-optimized content delivered on time, ready to publish and drive results.",
      step: "03",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures you get high-quality content without the hassle. From request to delivery,
            we make it simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 transform -translate-y-1/2 hidden md:block"></div>
          <div className="flex justify-between items-center relative z-10">
            {steps.map((_, index) => (
              <div key={index} className="w-4 h-4 bg-purple-600 rounded-full hidden md:block"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
