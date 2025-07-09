"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb, Linkedin, Github, Instagram, Twitter } from "lucide-react"

export function AboutPageSection() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "4", label: "Team Members" },
    { number: "2+", label: "Years Experience" },
  ]

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional digital solutions that drive real business results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge AI and technology to create solutions that keep you ahead of the curve.",
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Every project receives our full attention to detail, ensuring premium quality in all deliverables.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through transparent communication.",
    },
  ]

  const teamMembers = [
    {
      name: "Tahira Nawab",
      role: "Software Engineer",
      bio: "Tahira is a Software Engineering student committed to using technology to serve her country. Her passion lies in solving real-world problems through innovative digital solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/tahira-nawab",
        github: "https://github.com/TahiraNawab123",
        instagram: "https://instagram.com/tahira_n123",
        twitter: "https://x.com/TahiraDev",
      },
    },
    {
      name: "Noor Fatima",
      role: "Data Scientist",
      bio: "Noor is focused on Data Science and AI, with a mission to extract meaningful insights from data and create smarter solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/thefatimafix",
      },
    },
    {
      name: "Rafay Khan",
      role: "AI Specialist",
      bio: "Rafay is dedicated to advancing in AI and Data Science, with a focus on machine learning and real-time systems.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/rafay-khan-064a792b8",
      },
    },
    {
      name: "Ayesha Tariq",
      role: "3D Animation & AI Engineer",
      bio: "Ayesha is passionate about the intersection of AI and 3D animations. She envisions contributing to the future of immersive technologies through creative innovation.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/ayesha-tariq-engineer",
      },
    },
  ]

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return Linkedin
      case "github":
        return Github
      case "instagram":
        return Instagram
      case "twitter":
        return Twitter
      default:
        return Linkedin
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 animate-fade-in-up">About Usparity</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up">
            We're a passionate team of digital innovators, dedicated to empowering businesses with premium content,
            strategic marketing, and AI-driven insights.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-8 animate-fade-in-up">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 animate-fade-in-up">
              <p className="mb-6">
                Founded with a vision to bridge the gap between traditional business practices and modern digital
                solutions, Usparity emerged from a simple belief: every business deserves access to premium digital
                services that drive real growth.
              </p>
              <p className="mb-6">
                Our journey began when we recognized the challenges businesses face in navigating the complex digital
                landscape. From content creation to AI implementation, we saw an opportunity to provide comprehensive,
                high-quality solutions under one roof.
              </p>
              <p>
                Today, we're proud to serve clients across various industries, helping them transform their digital
                presence and achieve sustainable growth through innovative strategies and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 animate-fade-in-up">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4 animate-fade-in-up">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
              The talented individuals behind Usparity's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = getSocialIcon(platform)
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 animate-fade-in-up">Ready to Work Together?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Let's discuss how our team can help transform your digital presence and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
