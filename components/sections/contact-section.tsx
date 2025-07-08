"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, Calendar, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [showScheduleForm, setShowScheduleForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleScheduleCall = () => {
    setShowScheduleForm(true)
  }

  const contactNumbers = ["+92 310 7300166", "+92 305 9306992", "+92 321 5419491", "+92 300 9475865"]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Usparity", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/usparity/", color: "hover:text-pink-600" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/usparity", color: "hover:text-blue-400" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/usparity/",
      color: "hover:text-blue-700",
    },
  ]

  return (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex items-center">
        <div className="w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Let's Start Your Digital Journey
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Connect?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Ready to elevate your brand? Reach out to the Usparity team today and let's collaborate on your next
              digital success story.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                24/7 Support Available
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Quick Response Time
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                    <Mail className="w-6 h-6 mr-3 text-purple-600" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                  <a
                    href="mailto:contact@usparity.com"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors"
                  >
                    contact@usparity.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                    <Phone className="w-6 h-6 mr-3 text-purple-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Speak directly with our team during business hours.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactNumbers.map((number, index) => (
                      <a
                        key={index}
                        href={`tel:${number}`}
                        className="block text-purple-600 hover:text-purple-700 font-semibold transition-colors py-1"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                    <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">We're based in:</p>
                  <p className="text-lg font-semibold text-gray-900">Lahore, Punjab, Pakistan</p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and insights.</p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                      >
                        <social.icon className="w-6 h-6" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="h-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12 transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full deep-gradient hover:opacity-90 h-12 text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Let's schedule a consultation to explore your project and how Usparity can empower your digital
                  journey.
                </p>
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" onClick={handleScheduleCall}>
                  Schedule a Call
                </Button>
                {showScheduleForm && (
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm opacity-80">
                      Scheduling feature coming soon! For now, please contact us directly via email or phone.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
