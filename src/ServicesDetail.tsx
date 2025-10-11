import { Link } from 'react-router-dom'

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
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <Link to={isJapanese ? "/ja" : "/"} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Swiftcode Studio</h1>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to={isJapanese ? "/ja" : "/"} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isJapanese ? "会社概要" : "About"}
            </Link>
            <Link to={isJapanese ? "/ja" : "/"} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isJapanese ? "サービス" : "Services"}
            </Link>
            <Link to={isJapanese ? "/ja" : "/"} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isJapanese ? "プロジェクト" : "Projects"}
            </Link>
            <Link to={isJapanese ? "/ja" : "/"} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isJapanese ? "お問い合わせ" : "Contact"}
            </Link>
            <Link to={isJapanese ? "/" : "/ja"} className="text-gray-600 hover:text-blue-600 transition-colors">
              {isJapanese ? "English" : "日本語"}
            </Link>
          </nav>
            <Link to={isJapanese ? "/ja" : "/"} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {isJapanese ? "お見積もり" : "Get a Quote"}
            </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isJapanese ? "主な機能" : "Key Features"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isJapanese ? "使用技術" : "Technology Stack"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isJapanese ? "開発プロセス" : "Development Process"}
          </h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isJapanese ? "メリット" : "Benefits"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isJapanese ? "料金プラン" : "Pricing"}
            </h2>
            <p className="text-xl mb-8">
              {t('pricing')}
            </p>
            <Link
              to={isJapanese ? "/ja" : "/"}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              {isJapanese ? "お見積もりを依頼" : "Get a Quote"}
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {isJapanese ? "プロジェクトを始めましょう" : "Ready to Start Your Project?"}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {isJapanese
              ? "Instagram自動化ソリューションの開発についてご相談ください。無料でお見積もりをお送りします。"
              : "Let's discuss your Instagram automation needs. We'll provide a free quote tailored to your requirements."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={isJapanese ? "/ja" : "/"}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {isJapanese ? "お問い合わせ" : "Contact Us"}
            </Link>
            <Link
              to={isJapanese ? "/ja" : "/"}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {isJapanese ? "ホームに戻る" : "Back to Home"}
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="text-xl font-bold">Swiftcode Studio</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Code fast. Ship smart. Grow together.
              </p>
              <p className="text-gray-400 text-sm">
                {isJapanese
                  ? "Instagram自動化とソーシャルメディアソリューションを専門"
                  : "Specializing in Instagram automation and social media solutions"
                }
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isJapanese ? "サービス" : "Services"}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>{isJapanese ? "Instagram管理" : "Instagram Management"}</li>
                <li>{isJapanese ? "AIコンテンツ作成" : "AI Content Creation"}</li>
                <li>{isJapanese ? "自動化フロービルダー" : "Automation Flow Builder"}</li>
                <li>{isJapanese ? "マルチプラットフォーム投稿" : "Multi-Platform Posting"}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {isJapanese ? "技術" : "Technologies"}
              </h4>
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
