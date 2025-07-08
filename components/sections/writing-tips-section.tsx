import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Zap, Users, Search, TrendingUp, CheckCircle } from "lucide-react"

export function WritingTipsSection() {
  const tipCategories = [
    {
      title: "SEO Writing",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
      tips: [
        {
          title: "Research Keywords Before Writing",
          description:
            "Use tools like Google Keyword Planner or SEMrush to find relevant keywords with good search volume and low competition.",
          difficulty: "Beginner",
        },
        {
          title: "Write for Humans First, Search Engines Second",
          description:
            "Focus on creating valuable, readable content. Natural keyword integration performs better than keyword stuffing.",
          difficulty: "Intermediate",
        },
        {
          title: "Optimize Your Headlines",
          description:
            "Include your primary keyword in the title, keep it under 60 characters, and make it compelling for clicks.",
          difficulty: "Beginner",
        },
      ],
    },
    {
      title: "Engagement & Readability",
      icon: Users,
      color: "bg-green-100 text-green-600",
      tips: [
        {
          title: "Use the Inverted Pyramid Structure",
          description:
            "Start with the most important information first, then provide supporting details and background information.",
          difficulty: "Beginner",
        },
        {
          title: "Break Up Long Paragraphs",
          description:
            "Keep paragraphs to 2-3 sentences max. Use bullet points, subheadings, and white space to improve readability.",
          difficulty: "Beginner",
        },
        {
          title: "Include Actionable Takeaways",
          description: "End each section with clear, actionable advice that readers can implement immediately.",
          difficulty: "Intermediate",
        },
      ],
    },
    {
      title: "Conversion Optimization",
      icon: Target,
      color: "bg-purple-100 text-purple-600",
      tips: [
        {
          title: "Use Power Words in Headlines",
          description:
            "Words like 'Ultimate', 'Essential', 'Proven', and 'Secret' can increase click-through rates significantly.",
          difficulty: "Beginner",
        },
        {
          title: "Create Compelling CTAs",
          description:
            "Use action-oriented language and create urgency. 'Get Started Today' performs better than 'Click Here'.",
          difficulty: "Intermediate",
        },
        {
          title: "Address Objections Proactively",
          description:
            "Anticipate reader concerns and address them within your content to reduce friction in the conversion process.",
          difficulty: "Advanced",
        },
      ],
    },
    {
      title: "Content Strategy",
      icon: TrendingUp,
      color: "bg-yellow-100 text-yellow-600",
      tips: [
        {
          title: "Develop a Content Calendar",
          description:
            "Plan your content 2-3 months in advance. Include seasonal topics, industry events, and product launches.",
          difficulty: "Intermediate",
        },
        {
          title: "Repurpose Content Across Channels",
          description:
            "Turn one blog post into social media posts, email newsletters, infographics, and video scripts.",
          difficulty: "Intermediate",
        },
        {
          title: "Analyze Competitor Content",
          description:
            "Study what works for competitors in your niche. Look for content gaps you can fill with better, more comprehensive pieces.",
          difficulty: "Advanced",
        },
      ],
    },
  ]

  const quickTips = [
    "Start with an outline before writing",
    "Use active voice instead of passive voice",
    "Include statistics and data to support claims",
    "End with a strong conclusion that reinforces key points",
    "Edit ruthlessly - cut unnecessary words",
    "Use transition words to improve flow",
    "Include relevant internal and external links",
    "Optimize images with alt text and descriptive filenames",
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700"
      case "Advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
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
              Professional Writing Techniques
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Writing Skills
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Expert writing tips and techniques to improve your content creation skills and drive better results.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                20+ Expert Tips
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Proven Techniques
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Actionable Advice
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Tips */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Quick Writing Tips</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickTips.map((tip, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4 text-center">
                    <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <p className="text-sm text-gray-700 font-medium">{tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Tips by Category */}
          <div className="space-y-16">
            {tipCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tips.map((tip, tipIndex) => (
                    <Card key={tipIndex} className="hover-lift">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg font-bold leading-tight">{tip.title}</CardTitle>
                          <Badge className={getDifficultyColor(tip.difficulty)}>{tip.difficulty}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto deep-gradient border-0 text-white">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Put These Tips to Work?</h3>
                <p className="mb-6 opacity-90">
                  Let our expert writers handle your content while you focus on growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get Started Today
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors bg-transparent">
                    View Our Services
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
