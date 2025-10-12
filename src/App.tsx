import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ServicesDetail from './ServicesDetail'
import { servicesData } from './servicesData'

// English Component
function EnglishApp() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="./logo-new.svg" alt="Swiftcode Studio" className="h-10" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Swiftcode</h1>
              <p className="text-sm text-gray-600">Studio</p>
              <p className="text-xs text-gray-500">Code • Ship • Grow</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('about'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>About</a>
            <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('services'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>Services</a>
            <a href="#projects" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('projects'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>Contact</a>
            <a href="/ja" className="text-gray-600 hover:text-orange-600 transition-colors">日本語</a>
          </nav>
          <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                We build smart, scalable software that grows with your business
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Swiftcode Studio is a software development team specializing in Instagram automation,
                AI integration, and full-stack solutions for startups and creative teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors text-center" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>
                  Get a Free Quote
                </a>
                <a href="https://www.chatwork.com/swiftcode-studio" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors text-center">
                  Let's Discuss Your Project
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Instagram Management Dashboard</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-orange-200 rounded"></div>
                      <div className="h-2 bg-yellow-200 rounded w-3/4"></div>
                      <div className="h-2 bg-amber-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* About Us */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Independent developer with agency-level quality, collaborating with clients in Japan and Vietnam.
              We specialize in Instagram automation, Meta API integration, and social media management solutions
              that help businesses scale their digital presence.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">React</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Ruby on Rails</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Integration</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram API</h3>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-gray-50 w-full">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Instagram and social media solutions for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Instagram Management</h3>
              <p className="text-gray-600 mb-6">
                Meta API integration, auto-reply systems, content scheduling, and post management
              </p>
              <Link to="/services/instagram-management" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                View More →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI Content Creation</h3>
              <p className="text-gray-600 mb-6">
                AI-powered post generation, automated responses, and intelligent content workflows
              </p>
              <Link to="/services/ai-content-creation" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                View More →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Automation Flow Builder</h3>
              <p className="text-gray-600 mb-6">
                Visual workflow creation like ManyChat, custom automation packages for Instagram
              </p>
              <Link to="/services/automation-flow-builder" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                View More →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Multi-Platform Posting</h3>
              <p className="text-gray-600 mb-6">
                Cross-platform posting to Facebook, YouTube, X, TikTok, LinkedIn, and more
              </p>
              <Link to="/services/multi-platform-posting" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                View More →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real solutions delivering measurable results for our clients
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">📸</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Instagram Management System</h3>
                <p className="text-gray-600 mb-6">
                  Complete Instagram automation platform with AI-powered content creation,
                  auto-reply systems, and Meta API integration. Reduced manual work by 80%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Rails</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">AI</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Meta API</span>
                </div>
                <div className="text-orange-600 font-semibold">✓ Reduced manual work by 80%</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-6xl">🔄</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Automation Flow Builder</h3>
                <p className="text-gray-600 mb-6">
                  Visual workflow creation system similar to ManyChat, enabling businesses
                  to create complex automation flows without coding knowledge.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Rails</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
                </div>
                <div className="text-orange-600 font-semibold">✓ 40% faster workflow creation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 w-full">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the competitive world of software development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Full-Stack Expertise</h3>
              <p className="text-gray-600">React, TypeScript, Ruby on Rails, Python - complete development stack</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Iteration</h3>
              <p className="text-gray-600">Rapid prototyping and agile development methodology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Bilingual Support</h3>
              <p className="text-gray-600">Japanese, English, Vietnamese - seamless communication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Modern Stack</h3>
              <p className="text-gray-600">Latest technologies and clean, maintainable code</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Maintenance & Support</h3>
              <p className="text-gray-600">Ongoing support and feature development for existing projects</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's build your next project together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to scale your Instagram presence or build your next automation solution?
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button className="w-full bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-lg mb-6">
                  Let's discuss how we can help you automate your Instagram presence
                  and scale your social media operations.
                </p>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule a Call
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:sales@swiftcode-studio.com" className="text-orange-600 hover:underline">
                      sales@swiftcode-studio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold">Chatwork</p>
                    <a href="https://www.chatwork.com/swiftcode-studio" className="text-orange-600 hover:underline">
                      swiftcode-studio
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="text-gray-600">swiftcode-studio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="./logo-new.svg" alt="Swiftcode Studio" className="h-10" />
                <div>
                  <h3 className="text-xl font-bold text-white">Swiftcode</h3>
                  <p className="text-sm text-gray-400">Studio</p>
                  <p className="text-xs text-gray-500">Code • Ship • Grow</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Code fast. Ship smart. Grow together.
              </p>
              <p className="text-gray-400 text-sm">
                Specializing in Instagram automation and social media solutions
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram Management</li>
                <li>AI Content Creation</li>
                <li>Automation Flow Builder</li>
                <li>Multi-Platform Posting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>React & TypeScript</li>
                <li>Ruby on Rails</li>
                <li>Python & AI</li>
                <li>Meta API</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Swiftcode Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Japanese Component
function JapaneseApp() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="./logo-new.svg" alt="Swiftcode Studio" className="h-10" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Swiftcode</h1>
              <p className="text-sm text-gray-600">Studio</p>
              <p className="text-xs text-gray-500">Code • Ship • Grow</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('about'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>会社概要</a>
            <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('services'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>サービス</a>
            <a href="#projects" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('projects'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>プロジェクト</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>お問い合わせ</a>
            <a href="/" className="text-gray-600 hover:text-orange-600 transition-colors">English</a>
          </nav>
          <a href="#contact" className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>
            お見積もり
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                ビジネスの成長と共に進化する<br />スマートでスケーラブルなソフトウェアを構築
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Swiftcode Studioは、Instagram自動化、AI統合、スタートアップやクリエイティブチーム向けの<br />
                フルスタックソリューションを専門とするソフトウェア開発チームです。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors text-center" onClick={(e) => { e.preventDefault(); const element = document.getElementById('contact'); if (element) { const offsetTop = element.offsetTop - 100; window.scrollTo({ top: offsetTop, behavior: 'smooth' }); } }}>
                  無料お見積もり
                </a>
                <a href="https://www.chatwork.com/swiftcode-studio" target="_blank" rel="noopener noreferrer" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors text-center">
                  プロジェクト相談
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Instagram管理ダッシュボード</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-orange-200 rounded"></div>
                      <div className="h-2 bg-yellow-200 rounded w-3/4"></div>
                      <div className="h-2 bg-amber-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* About Us */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">会社概要</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              エージェンシーレベルの品質を持つ独立系開発者として、日本とベトナムのクライアントと協力しています。<br />
              Instagram自動化、Meta API統合、ソーシャルメディア管理ソリューションを専門とし、<br />
              企業のデジタルプレゼンス拡大を支援します。
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">React</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Ruby on Rails</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI統合</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram API</h3>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-gray-50 w-full">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">サービス</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              現代ビジネス向けの包括的なInstagram・ソーシャルメディアソリューション
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Instagram管理</h3>
              <p className="text-gray-600 mb-6">
                Meta API統合、自動返信システム、コンテンツスケジューリング、投稿管理
              </p>
              <Link to="/ja/services/instagram-management" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                詳細を見る →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AIコンテンツ作成</h3>
              <p className="text-gray-600 mb-6">
                AI駆動の投稿生成、自動返信、インテリジェントコンテンツワークフロー
              </p>
              <Link to="/ja/services/ai-content-creation" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                詳細を見る →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">自動化フロービルダー</h3>
              <p className="text-gray-600 mb-6">
                ManyChatのような視覚的ワークフロー作成、Instagram向けカスタム自動化パッケージ
              </p>
              <Link to="/ja/services/automation-flow-builder" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                詳細を見る →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">マルチプラットフォーム投稿</h3>
              <p className="text-gray-600 mb-6">
                Facebook、YouTube、X、TikTok、LinkedInなどへのクロスプラットフォーム投稿
              </p>
              <Link to="/ja/services/multi-platform-posting" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                詳細を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">実績プロジェクト</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              クライアントに測定可能な結果をもたらす実際のソリューション
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-6xl">📸</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Instagram管理システム</h3>
                <p className="text-gray-600 mb-6">
                  AI駆動のコンテンツ作成、自動返信システム、Meta API統合を備えた<br />
                  完全なInstagram自動化プラットフォーム。手動作業を80%削減。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Rails</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">AI</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Meta API</span>
                </div>
                <div className="text-orange-600 font-semibold">✓ 手動作業を80%削減</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-6xl">🔄</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">自動化フロービルダー</h3>
                <p className="text-gray-600 mb-6">
                  ManyChatのような視覚的ワークフロー作成システム。<br />
                  コーディング知識なしで複雑な自動化フローを作成可能。
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Rails</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
                </div>
                <div className="text-orange-600 font-semibold">✓ ワークフロー作成速度40%向上</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50 w-full">
          <div className="text-center mb-16 max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">選ばれる理由</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              競争の激しいソフトウェア開発の世界で私たちを際立たせるもの
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-4">フルスタック専門性</h3>
              <p className="text-gray-600">React、TypeScript、Ruby on Rails、Python - 完全な開発スタック</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">高速イテレーション</h3>
              <p className="text-gray-600">迅速なプロトタイピングとアジャイル開発手法</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="text-xl font-bold mb-4">多言語サポート</h3>
              <p className="text-gray-600">日本語、英語、ベトナム語 - シームレスなコミュニケーション</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">透明な価格設定</h3>
              <p className="text-gray-600">隠れたコストのない明確で事前の価格設定</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold mb-4">モダンスタック</h3>
              <p className="text-gray-600">最新技術とクリーンで保守可能なコード</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">メンテナンス・サポート</h3>
              <p className="text-gray-600">既存プロジェクトの継続的なサポートと機能開発</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">次のプロジェクトを一緒に構築しましょう</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instagramプレゼンスの拡大や次の自動化ソリューションの構築の準備はできていますか？
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">お問い合わせ</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">お名前</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="お名前"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">メールアドレス</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">メッセージ</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="プロジェクトについて教えてください..."
                  ></textarea>
                </div>
                <button className="w-full bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
                  メッセージを送信
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">始める準備はできていますか？</h3>
                <p className="text-lg mb-6">
                  Instagramプレゼンスの自動化とソーシャルメディア運用の拡大を<br />
                  どのようにサポートできるかご相談しましょう。
                </p>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  電話を予約
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">メール</p>
                    <a href="mailto:sales@swiftcode-studio.com" className="text-orange-600 hover:underline">
                      sales@swiftcode-studio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <p className="font-semibold">Chatwork</p>
                    <a href="https://www.chatwork.com/swiftcode-studio" className="text-orange-600 hover:underline">
                      swiftcode-studio
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="font-semibold">ウェブサイト</p>
                    <p className="text-gray-600">swiftcode-studio.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="./logo-new.svg" alt="Swiftcode Studio" className="h-10" />
                <div>
                  <h3 className="text-xl font-bold text-white">Swiftcode</h3>
                  <p className="text-sm text-gray-400">Studio</p>
                  <p className="text-xs text-gray-500">Code • Ship • Grow</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Code fast. Ship smart. Grow together.
              </p>
              <p className="text-gray-400 text-sm">
                Instagram自動化とソーシャルメディアソリューションを専門
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram管理</li>
                <li>AIコンテンツ作成</li>
                <li>自動化フロービルダー</li>
                <li>マルチプラットフォーム投稿</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">技術</h4>
              <ul className="space-y-2 text-gray-400">
                <li>React & TypeScript</li>
                <li>Ruby on Rails</li>
                <li>Python & AI</li>
                <li>Meta API</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Swiftcode Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EnglishApp />} />
        <Route path="/ja" element={<JapaneseApp />} />
        <Route path="*" element={<EnglishApp />} />

        {/* English Service Detail Pages */}
        <Route path="/services/instagram-management" element={<ServicesDetail service={servicesData['instagram-management']} />} />
        <Route path="/services/ai-content-creation" element={<ServicesDetail service={servicesData['ai-content-creation']} />} />
        <Route path="/services/automation-flow-builder" element={<ServicesDetail service={servicesData['automation-flow-builder']} />} />
        <Route path="/services/multi-platform-posting" element={<ServicesDetail service={servicesData['multi-platform-posting']} />} />

        {/* Japanese Service Detail Pages */}
        <Route path="/ja/services/instagram-management" element={<ServicesDetail service={servicesData['instagram-management']} isJapanese={true} />} />
        <Route path="/ja/services/ai-content-creation" element={<ServicesDetail service={servicesData['ai-content-creation']} isJapanese={true} />} />
        <Route path="/ja/services/automation-flow-builder" element={<ServicesDetail service={servicesData['automation-flow-builder']} isJapanese={true} />} />
        <Route path="/ja/services/multi-platform-posting" element={<ServicesDetail service={servicesData['multi-platform-posting']} isJapanese={true} />} />
      </Routes>
    </Router>
  )
}
