import { CheckCircle } from "lucide-react"

export function TermsOfServiceSection() {
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
              Legal Terms & Conditions
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Service
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              Please read these terms carefully before using our services.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Clear Guidelines
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Fair Terms
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Updated Regularly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 text-sm text-gray-600">
              <p>Last updated: January 2025</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Usparity's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Usparity provides premium digital solutions including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Content writing and copywriting services</li>
                  <li>Digital marketing strategies and implementation</li>
                  <li>E-commerce solutions and optimization</li>
                  <li>AI-powered insights and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features of our service, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Payment terms for our services:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We reserve the right to change our pricing with 30 days notice</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">Content created by Usparity for clients:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Upon full payment, clients receive full rights to commissioned content</li>
                  <li>Usparity retains the right to use work samples for portfolio purposes</li>
                  <li>Clients must not claim authorship of content creation process</li>
                  <li>All Usparity branding and methodologies remain our property</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Limitations</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are subject to the following limitations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Content delivery times are estimates and may vary</li>
                  <li>Revisions are limited as specified in your plan</li>
                  <li>We reserve the right to refuse projects that violate our policies</li>
                  <li>Service availability may be affected by maintenance or technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">You may not use our services for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Illegal, harmful, or offensive content</li>
                  <li>Spam, phishing, or fraudulent activities</li>
                  <li>Violating intellectual property rights</li>
                  <li>Competing directly with our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Usparity shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate this agreement at any time. Upon termination, your right to use the service
                  will cease immediately, but completed work and payments remain as agreed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@usparity.com
                    <br />
                    <strong>Address:</strong> Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
