"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Download, ArrowRight, CheckCircle } from "lucide-react"

export function ContentGuidesSection() {
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null)

  const guides = [
    {
      title: "The Complete Guide to SEO Content Writing",
      description: "Master the art of creating content that ranks high in search engines and engages your audience.",
      category: "SEO",
      readTime: "15 min read",
      level: "Beginner",
      topics: ["Keyword Research", "On-Page SEO", "Content Structure", "Meta Optimization"],
      downloadable: true,
      content: `
# The Complete Guide to SEO Content Writing

## Introduction
Search Engine Optimization (SEO) content writing is the practice of creating content that ranks well in search engines while providing value to your audience.

## Chapter 1: Keyword Research
Understanding your audience's search intent is crucial for effective SEO content writing.

### Tools for Keyword Research:
- Google Keyword Planner
- SEMrush
- Ahrefs
- Ubersuggest

## Chapter 2: On-Page SEO
Optimizing individual pages for search engines involves several key elements.

### Key Elements:
- Title tags
- Meta descriptions
- Header tags (H1, H2, H3)
- Internal linking

## Chapter 3: Content Structure
Well-structured content improves both user experience and search engine rankings.

### Best Practices:
- Use clear headings
- Write scannable paragraphs
- Include bullet points and lists
- Add relevant images with alt text

## Conclusion
Effective SEO content writing combines technical optimization with valuable, engaging content that serves your audience's needs.
      `,
    },
    {
      title: "Content Marketing Strategy Playbook",
      description: "Build a comprehensive content marketing strategy that drives traffic, engagement, and conversions.",
      category: "Strategy",
      readTime: "20 min read",
      level: "Intermediate",
      topics: ["Content Planning", "Audience Research", "Distribution Channels", "Performance Metrics"],
      downloadable: true,
      content: `
# Content Marketing Strategy Playbook

## Introduction
A well-defined content marketing strategy is essential for business growth in the digital age.

## Chapter 1: Content Planning
Strategic planning ensures your content aligns with business objectives.

### Planning Framework:
- Set clear goals
- Define target audience
- Create content calendar
- Establish content themes

## Chapter 2: Audience Research
Understanding your audience is fundamental to creating relevant content.

### Research Methods:
- Surveys and interviews
- Social media listening
- Analytics data analysis
- Competitor analysis

## Chapter 3: Distribution Channels
Choosing the right channels maximizes your content's reach and impact.

### Channel Options:
- Blog and website
- Social media platforms
- Email newsletters
- Video platforms

## Conclusion
A strategic approach to content marketing drives measurable business results.
      `,
    },
    {
      title: "Social Media Content Creation Guide",
      description: "Create engaging social media content that builds community and drives brand awareness.",
      category: "Social Media",
      readTime: "12 min read",
      level: "Beginner",
      topics: ["Platform Best Practices", "Visual Content", "Engagement Strategies", "Content Calendar"],
      downloadable: false,
      content: `
# Social Media Content Creation Guide

## Introduction
Social media content creation requires understanding platform-specific best practices and audience preferences.

## Chapter 1: Platform Best Practices
Each social media platform has unique characteristics and audience expectations.

### Platform Guidelines:
- Facebook: Community-focused content
- Instagram: Visual storytelling
- Twitter: Real-time conversations
- LinkedIn: Professional insights

## Chapter 2: Visual Content
Visual elements significantly impact engagement rates across all platforms.

### Visual Content Types:
- Images and graphics
- Videos and animations
- Infographics
- User-generated content

## Chapter 3: Engagement Strategies
Building genuine connections with your audience drives long-term success.

### Engagement Tactics:
- Ask questions
- Respond to comments
- Share user content
- Host live sessions

## Conclusion
Consistent, valuable social media content builds strong brand communities.
      `,
    },
    {
      title: "E-commerce Product Description Mastery",
      description: "Write compelling product descriptions that convert browsers into buyers and boost sales.",
      category: "E-commerce",
      readTime: "10 min read",
      level: "Intermediate",
      topics: ["Persuasive Writing", "Feature Benefits", "SEO Optimization", "Customer Psychology"],
      downloadable: true,
      content: `
# E-commerce Product Description Mastery

## Introduction
Effective product descriptions combine persuasive writing with SEO optimization to drive sales.

## Chapter 1: Persuasive Writing
Understanding persuasion principles helps create compelling product descriptions.

### Persuasion Techniques:
- Social proof
- Scarcity and urgency
- Emotional triggers
- Clear value propositions

## Chapter 2: Feature vs. Benefits
Translating features into customer benefits increases conversion rates.

### Writing Framework:
- List product features
- Identify customer benefits
- Connect features to benefits
- Use customer language

## Chapter 3: SEO Optimization
Optimized product descriptions improve search visibility and organic traffic.

### SEO Elements:
- Target keywords
- Meta descriptions
- Alt text for images
- Structured data

## Conclusion
Well-crafted product descriptions significantly impact e-commerce success.
      `,
    },
    {
      title: "Email Marketing Content Best Practices",
      description: "Craft email content that gets opened, read, and drives action from your subscribers.",
      category: "Email Marketing",
      readTime: "8 min read",
      level: "Beginner",
      topics: ["Subject Lines", "Email Structure", "Call-to-Actions", "Personalization"],
      downloadable: false,
      content: `
# Email Marketing Content Best Practices

## Introduction
Effective email content drives engagement and conversions while building subscriber relationships.

## Chapter 1: Subject Lines
Subject lines determine whether your emails get opened or ignored.

### Subject Line Tips:
- Keep it concise (under 50 characters)
- Create curiosity
- Use personalization
- Avoid spam triggers

## Chapter 2: Email Structure
Well-structured emails improve readability and engagement.

### Structure Elements:
- Clear header
- Compelling opening
- Scannable body content
- Strong call-to-action

## Chapter 3: Call-to-Actions
Effective CTAs guide subscribers toward desired actions.

### CTA Best Practices:
- Use action-oriented language
- Create visual prominence
- Limit to one primary CTA
- Test different variations

## Conclusion
Strategic email content builds lasting customer relationships and drives business growth.
      `,
    },
    {
      title: "Technical Writing for Non-Technical Audiences",
      description: "Simplify complex topics and make technical content accessible to broader audiences.",
      category: "Technical Writing",
      readTime: "18 min read",
      level: "Advanced",
      topics: ["Simplification Techniques", "Visual Aids", "User Documentation", "API Documentation"],
      downloadable: true,
      content: `
# Technical Writing for Non-Technical Audiences

## Introduction
Technical writing bridges the gap between complex concepts and user understanding.

## Chapter 1: Simplification Techniques
Making complex information accessible requires strategic simplification.

### Simplification Methods:
- Use plain language
- Define technical terms
- Provide analogies
- Break down complex processes

## Chapter 2: Visual Aids
Visual elements enhance understanding of technical concepts.

### Visual Types:
- Diagrams and flowcharts
- Screenshots and annotations
- Videos and animations
- Interactive elements

## Chapter 3: User Documentation
User-focused documentation improves product adoption and satisfaction.

### Documentation Types:
- Getting started guides
- Step-by-step tutorials
- FAQ sections
- Troubleshooting guides

## Chapter 4: API Documentation
Clear API documentation enables developer adoption and integration.

### API Documentation Elements:
- Endpoint descriptions
- Request/response examples
- Authentication methods
- Error handling

## Conclusion
Effective technical writing makes complex information accessible and actionable for all audiences.
      `,
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
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

  const handleReadGuide = (index: number) => {
    setSelectedGuide(index)
  }

  const handleBackToGuides = () => {
    setSelectedGuide(null)
  }

  const handleDownloadGuide = (guide: any) => {
    // Create a downloadable text file
    const element = document.createElement("a")
    const file = new Blob([guide.content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${guide.title.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  if (selectedGuide !== null) {
    const guide = guides[selectedGuide]
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
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                {guide.title}
              </h1>
              <div className="flex justify-center items-center gap-4 mb-6">
                <Badge className={getLevelColor(guide.level)}>{guide.level}</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  {guide.category}
                </Badge>
                <div className="flex items-center text-white/80">
                  <Clock className="w-4 h-4 mr-2" />
                  {guide.readTime}
                </div>
              </div>
              <Button
                onClick={handleBackToGuides}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Guides
              </Button>
            </div>
          </div>
        </section>

        {/* Guide Content */}
        <section className="section-spacing bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Guide Content</h2>
                {guide.downloadable && (
                  <Button
                    onClick={() => handleDownloadGuide(guide)}
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">{guide.content}</pre>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button onClick={handleBackToGuides} className="deep-gradient text-white hover:opacity-90">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to All Guides
              </Button>
            </div>
          </div>
        </section>
      </>
    )
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
              Expert Knowledge & Resources
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Master Content{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Creation
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Comprehensive guides to help you master content creation, SEO, and digital marketing strategies.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />6 Comprehensive Guides
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Expert Strategies
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Downloadable Resources
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover-lift"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {guide.category}
                    </Badge>
                    <Badge className={getLevelColor(guide.level)}>{guide.level}</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors leading-tight">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="mr-4">{guide.readTime}</span>
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{guide.topics.length} topics</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {guide.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 deep-gradient text-white hover:opacity-90"
                      onClick={() => handleReadGuide(index)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Guide
                    </Button>
                    {guide.downloadable && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent"
                        onClick={() => handleDownloadGuide(guide)}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Get New Guides First</h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter and be the first to receive new content guides and resources.
                </p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button className="deep-gradient text-white hover:opacity-90">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
