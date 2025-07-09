"use client"

import { useRouter } from "next/navigation"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const router = useRouter()

  const footerLinks = {
    Services: [
      { name: "Content Writing", href: "/services" },
      { name: "SEO Content", href: "/services" },
      { name: "Blog Writing", href: "/services" },
      { name: "Copywriting", href: "/services" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Content Guides", href: "/guides" },
      { name: "Writing Tips", href: "/tips" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Usparity" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/usparity" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/usparity/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/usparity/" },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  const handleLogoClick = () => {
    router.push("/")
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-0.5 h-0.5 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button onClick={handleLogoClick} className="flex items-center space-x-2 mb-6 cursor-pointer">
              <span className="font-serif text-xl font-bold">Usparity</span>
            </button>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium digital solutions that help businesses grow their online presence with high-quality content,
              strategic marketing, and AI-driven insights.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>contact@usparity.com</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                  <span>Contact Numbers:</span>
                </div>
                <div className="ml-7 space-y-1">
                  <div className="text-gray-300 text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span>+92 310 7300166</span>
                    <span className="hidden sm:inline text-gray-500">|</span>
                    <span>+92 321 5419491</span>
                  </div>
                  <div className="text-gray-300 text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span>+92 305 9306992</span>
                    <span className="hidden sm:inline text-gray-500">|</span>
                    <span>+92 300 9475865</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Usparity. All rights reserved.</div>
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:transform hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
