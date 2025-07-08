export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up content-spacing">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-8">About Usparity</h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed font-light">
              At Usparity, we transform digital presence into business success. With expertise in content strategy,
              marketing, and e-commerce solutions, we help brands grow smarter, faster, and stronger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 deep-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                <span className="text-3xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Driven Innovation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Leveraging cutting-edge artificial intelligence to optimize your digital strategy and maximize content
                performance.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 deep-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                <span className="text-3xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Excellence</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Every solution is crafted with strategic precision to ensure maximum impact and measurable ROI for your
                business.
              </p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 deep-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all">
                <span className="text-3xl font-bold text-white">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Mastery</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Comprehensive digital solutions spanning content creation, e-commerce optimization, and marketing
                automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
