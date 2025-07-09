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
    <section className="section-spacing bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures you get high-quality content without the hassle. From request to delivery,
            we make it simple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card text-center group">
              <CardContent className="pt-8 pb-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 gradient-bg text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-600 transition-colors">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-600 via-purple-400 to-gray-600 transform -translate-y-1/2 hidden md:block"></div>
          <div className="flex justify-between items-center relative z-10">
            {steps.map((_, index) => (
              <div key={index} className="w-4 h-4 gradient-bg rounded-full hidden md:block"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
