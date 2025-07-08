import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, Zap, Users, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export function AboutPageSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We deliver nothing short of exceptional quality in every project, ensuring your brand stands out in the digital landscape.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI technology and creative strategies to provide solutions that drive real results.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We believe in building lasting relationships with our clients, working together as partners in your success journey.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of everything we do at Usparity.",
    },
    {
      icon: Award,
      title: "Results-Driven",
      description:
        "Every strategy we implement is designed to deliver measurable outcomes that contribute to your business growth.",
    },
  ]

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
              Our Story & Mission
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
              Empowering Brands Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                Digital Excellence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up">
              At Usparity, we're driven by creativity and strategy. Our mission is to empower businesses with digital
              excellence — offering content, marketing, and e-commerce solutions tailored for growth.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-white/80 animate-fade-in-up">
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Founded on Innovation
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Expert Team
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Global Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Usparity is a premier digital solutions company that specializes in transforming businesses through
                strategic content creation, innovative marketing, and AI-driven insights. Founded with the vision of
                empowering brands to achieve their full potential in the digital age.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of experienced professionals combines creativity with data-driven strategies to deliver
                solutions that not only meet but exceed our clients' expectations. We believe that every brand has a
                unique story to tell, and we're here to help you tell it effectively.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 deep-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">U</span>
                  </div>
                  <p className="text-gray-600 font-medium">Usparity Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions that help businesses grow smarter, faster, and stronger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 deep-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creation</h3>
                <p className="text-gray-600">
                  High-quality, SEO-optimized content that engages audiences and drives conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 deep-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Marketing</h3>
                <p className="text-gray-600">
                  Strategic marketing campaigns that increase brand visibility and generate quality leads.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 deep-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Solutions</h3>
                <p className="text-gray-600">
                  Complete e-commerce support from setup to optimization and growth strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 deep-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Advanced analytics and AI-driven strategies to optimize your digital performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="deep-gradient text-white hover-lift">
              <CardContent className="p-12 text-center">
                <Eye className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="font-serif text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the global leader in digital transformation, empowering businesses of all sizes to achieve
                  unprecedented growth through innovative digital solutions and strategic excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white hover-lift">
              <CardContent className="p-12 text-center">
                <Target className="w-16 h-16 mx-auto mb-6 text-white" />
                <h3 className="font-serif text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To transform digital presence into business success by delivering exceptional content, strategic
                  marketing, and AI-driven insights that help our clients grow smarter, faster, and stronger.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing deep-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Usparity can help transform your digital presence and drive your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
