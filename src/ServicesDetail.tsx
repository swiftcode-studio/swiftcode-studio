import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

interface ServiceDetailProps {
  service: {
    id: string
    title: string
    titleJa: string
    icon: string
    description: string
    descriptionJa: string
    features: string[]
    featuresJa: string[]
    techStack: string[]
    pricing: string
    pricingJa: string
    process: string[]
    processJa: string[]
    benefits: string[]
    benefitsJa: string[]
  }
  isJapanese?: boolean
}

export default function ServicesDetail({ service, isJapanese = false }: ServiceDetailProps) {
  useScrollAnimation();

  const t = (key: 'title' | 'description' | 'features' | 'pricing' | 'process' | 'benefits') => {
    if (isJapanese) {
      switch (key) {
        case 'title': return service.titleJa
        case 'description': return service.descriptionJa
        case 'features': return service.featuresJa
        case 'pricing': return service.pricingJa
        case 'process': return service.processJa
        case 'benefits': return service.benefitsJa
        default: return service.title
      }
    }
    switch (key) {
      case 'title': return service.title
      case 'description': return service.description
      case 'features': return service.features
      case 'pricing': return service.pricing
      case 'process': return service.process
      case 'benefits': return service.benefits
      default: return service.title
    }
  }

  const features = (Array.isArray(t('features')) ? t('features') : [t('features')]) as string[]
  const process = (Array.isArray(t('process')) ? t('process') : [t('process')]) as string[]
  const benefits = (Array.isArray(t('benefits')) ? t('benefits') : [t('benefits')]) as string[]

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-30" />
        <div className="network-line" style={{ top: '40%' }} />
        <div className="glow-dot" style={{ top: '40%', left: '20%' }} />
        <div className="glow-dot" style={{ top: '40%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center scroll-animate">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('title')}
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Features */}
        <section className="mb-20 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-sparkles text-orange-600"></i>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                {isJapanese ? "主な機能" : "Key Features"}
              </span>
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              {isJapanese ? "主な機能" : "Key Features"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="tech-card bg-white/90 backdrop-blur-sm p-6 scroll-animate-scale group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <i className="fa-light fa-check text-white text-lg"></i>
                  </div>
                  <p className="text-slate-700 leading-relaxed pt-1">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-code text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                {isJapanese ? "使用技術" : "Technology Stack"}
              </span>
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              {isJapanese ? "使用技術" : "Technology Stack"}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, index) => (
              <span
                key={index}
                className="tech-card bg-gradient-to-br from-slate-50 to-white px-6 py-3 rounded-full text-sm font-semibold text-slate-800 scroll-animate border-2 border-blue-500/20 hover:border-blue-500/50 transition-all"
                style={{ transitionDelay: `${index * 0.02}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-diagram-project text-purple-600"></i>
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent font-semibold">
                {isJapanese ? "開発プロセス" : "Development Process"}
              </span>
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              {isJapanese ? "開発プロセス" : "Development Process"}
            </h2>
          </div>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 tech-card bg-white/90 backdrop-blur-sm p-6 scroll-animate group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-slate-700 text-lg leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-stars text-green-600"></i>
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent font-semibold">
                {isJapanese ? "メリット" : "Benefits"}
              </span>
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              {isJapanese ? "メリット" : "Benefits"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 tech-card bg-white/90 backdrop-blur-sm p-6 scroll-animate group"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-light fa-check text-white text-sm"></i>
                </div>
                <p className="text-slate-700 leading-relaxed pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20 scroll-animate-scale">
          <div className="relative network-bg rounded-3xl p-12 text-white text-center overflow-hidden border-2 border-orange-500/50">
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="network-line" style={{ top: '50%' }} />
            <div className="glow-dot" style={{ top: '50%', left: '20%' }} />
            <div className="glow-dot" style={{ top: '50%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
                {isJapanese ? "料金プラン" : "Pricing"}
              </h2>
              <p className="text-xl mb-8 text-slate-100 font-medium">
                {t('pricing')}
              </p>
              <Link
                to={isJapanese ? "/ja/contact" : "/contact"}
                className="tech-button inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl glow-effect shadow-lg"
              >
                <span className="relative z-10">{isJapanese ? "お見積もりを依頼" : "Get a Quote"}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center scroll-animate">
          <div className="tech-card bg-gradient-to-br from-slate-50 to-white p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {isJapanese ? "プロジェクトを始めましょう" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isJapanese
                ? "Instagram自動化ソリューションの開発についてご相談ください。無料でお見積もりをお送りします。"
                : "Let's discuss your Instagram automation needs. We'll provide a free quote tailored to your requirements."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={isJapanese ? "/ja/contact" : "/contact"}
                className="tech-button inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 glow-effect"
              >
                <i className="fa-light fa-envelope mr-2"></i>
                <span className="relative z-10">{isJapanese ? "お問い合わせ" : "Contact Us"}</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer isJapanese={isJapanese} />
    </div>
  )
}
