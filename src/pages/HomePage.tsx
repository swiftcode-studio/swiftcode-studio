import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  isJapanese?: boolean;
}

export default function HomePage({ isJapanese = false }: HomePageProps) {
  // Initialize scroll animations
  useScrollAnimation();

  const content = isJapanese ? {
    hero: {
      title: '適切なソフトウェア',
      subtitle: '素晴らしいものを創造する',
      description: 'Swiftcode Studioは、最先端の技術を活用してCustom API開発、CRM統合、SaaSソリューションを提供します。私たちは、世界中のスタートアップや企業と協力し、革新的な製品を迅速に市場に投入します。',
      getStarted: '始めましょう',
      viewExpertise: '私たちの専門性を見る',
    },
    about: {
      badge: '私たちについて',
      title1: 'クリエイターのための',
      title2: 'クリエイティブ',
      title3: 'クリエイターによる',
      description: '私たちは、コード愛好者のチームです。私たちのミッションは、最高のソフトウェアソリューションを提供することです。',
      market: {
        badge: 'Swiftcode Studio',
        title: '海外市場',
        description: 'これは、海外市場、特に日本市場に焦点を当てた新しい企業です。',
      },
      features: [
        { icon: '🚀', title: 'オールインワンツール', description: '私たちは、あなたのビジネスに必要なすべてのツールを提供します。' },
        { icon: '🎯', title: 'アジャイル重視の配信', description: 'アジャイル手法に焦点を当てた配信。' },
        { icon: '🔧', title: '技術・デザインの柔軟性', description: '技術とデザインの柔軟性。' },
      ]
    },
    services: {
      badge: '私たちのサービス',
      title: '提供するもの',
      items: [
        {
          icon: '💻',
          title: 'オフショアソフトウェア開発',
          description: 'Swiftcode Studioの専門チームは、お客様のビジネスニーズに合わせた高品質なソフトウェアを提供します。',
          link: '/ja/services/offshore-development'
        },
        {
          icon: '👥',
          title: '専属開発チーム',
          description: '私たちは、お客様のプロジェクトに特化した専門チームを提供します。',
          link: '/ja/services/dedicated-team'
        },
        {
          icon: '✅',
          title: 'ソフトウェアQAテスト',
          description: 'Swiftcode Studioは、高品質なソフトウェアQAテストを提供します。',
          link: '/ja/services/qa-testing'
        },
        {
          icon: '🔧',
          title: 'ソフトウェア保守',
          description: 'ソフトウェアのメンテナンスとサポートサービス。',
          link: '/ja/services/maintenance'
        },
      ]
    },
    clients: {
      badge: '私たちのクライアント',
      title: '業界リーダーからの信頼',
      description: 'Swiftcode Studioは、世界中の企業から信頼されています。',
    },
    testimonials: {
      badge: 'フィードバック',
      title: 'クライアントの声',
      items: [
        {
          text: 'Swiftcode StudioのチームはFeediyの開発において素晴らしい仕事をしてくれました。技術力が高く、納期を守り、常にプロフェッショナルな対応でした。Instagram自動化ツールの実装が完璧でした。',
          author: 'Feediy Team',
          position: 'Product Manager',
          company: 'Feediy',
          logo: '/images/clients/feediy-logo.png'
        },
        {
          text: 'i-reportの分析機能の開発をお願いしましたが、期待以上の成果でした。複雑なデータ処理も正確に実装され、ユーザーから高い評価を得ています。技術的な課題も迅速に解決してくれました。',
          author: 'i-report Team',
          position: 'Technical Lead',
          company: 'i-report',
          logo: '/images/clients/ireport-logo.webp'
        },
        {
          text: 'RESTORYのストーリーズ管理機能の開発で協力しました。UIも美しく、パフォーマンスも優れています。継続的なサポートも充実しており、安心して任せられるパートナーです。',
          author: 'RESTORY Team',
          position: 'Project Manager',
          company: 'RESTORY',
          logo: '/images/clients/restory-logo.png'
        },
      ]
    },
    cta: {
      title: '私たちのワークスタイルソリューションで生産性を最大化する準備をしましょう',
      description: '質は果実です。私たちは、お客様の目標を達成し、成功と共に成長するために、クライアントに力を与えます。',
      button: 'お問い合わせ',
    }
  } : {
    hero: {
      title: 'Right Software',
      subtitle: 'Create Great Things',
      description: 'Swiftcode Studio provides Custom API development, CRM integration, and SaaS solutions using the latest technology. We work with startups and companies globally to bring innovative products to market quickly.',
      getStarted: 'Get a Quote',
      viewExpertise: 'View Our Expertise',
    },
    about: {
      badge: 'About us',
      title1: 'Built for',
      title2: 'Creatives',
      title3: 'by Creatives',
      description: 'We are a team of code enthusiasts. Our mission is to provide the best software solutions.',
      market: {
        badge: 'Swiftcode Studio',
        title: 'Oversea Market',
        description: 'This is a new company focused on the overseas market, especially the Japanese market.',
      },
      features: [
        { icon: '🚀', title: 'All-in-one Tools', description: 'We provide all the tools you need for your business.' },
        { icon: '🎯', title: 'Agile-focused Delivery', description: 'Delivery focused on agile methodology.' },
        { icon: '🔧', title: 'Tech-Design Flexibility', description: 'Flexibility in technology and design.' },
      ]
    },
    services: {
      badge: 'Our Services',
      title: 'What We Offer',
      items: [
        {
          icon: '💻',
          title: 'Offshore Software Development',
          description: "Swiftcode Studio's expert team provides high-quality software tailored to your business needs.",
          link: '/services/offshore-development'
        },
        {
          icon: '👥',
          title: 'Dedicated Development Team',
          description: 'We provide specialized teams dedicated to your project.',
          link: '/services/dedicated-team'
        },
        {
          icon: '✅',
          title: 'Software QA Testing',
          description: 'Swiftcode Studio provides high-quality software QA testing.',
          link: '/services/qa-testing'
        },
        {
          icon: '🔧',
          title: 'Software Maintenance',
          description: 'Software maintenance and support services.',
          link: '/services/maintenance'
        },
      ]
    },
    clients: {
      badge: 'Our Clients',
      title: 'Trusted by Industry leaders',
      description: 'Swiftcode Studio is trusted by companies around the world.',
    },
    testimonials: {
      badge: 'Feedback',
      title: 'What Our Clients Say',
      items: [
        {
          text: "Swiftcode Studio team did an outstanding job developing Feediy. Their technical expertise, adherence to deadlines, and professional approach were impressive. The Instagram automation tool implementation was flawless.",
          author: 'Feediy Team',
          position: 'Product Manager',
          company: 'Feediy',
          logo: '/images/clients/feediy-logo.png'
        },
        {
          text: 'We entrusted Swiftcode Studio with developing i-report analytics features, and the results exceeded our expectations. Complex data processing was accurately implemented, and our users highly praise it. Technical challenges were resolved quickly.',
          author: 'i-report Team',
          position: 'Technical Lead',
          company: 'i-report',
          logo: '/images/clients/ireport-logo.webp'
        },
        {
          text: 'We collaborated with Swiftcode Studio on RESTORY stories management features. The UI is beautiful and performance is excellent. Their ongoing support is comprehensive, making them a reliable partner we can trust.',
          author: 'RESTORY Team',
          position: 'Project Manager',
          company: 'RESTORY',
          logo: '/images/clients/restory-logo.png'
        },
      ]
    },
    cta: {
      title: 'Get Ready to Maximize Your Productivity With Our Workstyle Solutions',
      description: 'Quality is the fruit. We empower our clients to achieve their goals and grow together with their success.',
      button: 'Contact us!',
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        {/* Network dots background */}
        <div className="absolute inset-0 network-dots opacity-40" />

        {/* Animated network lines */}
        <div className="network-line" style={{ top: '20%', animationDelay: '0s' }} />
        <div className="network-line" style={{ top: '60%', animationDelay: '1.5s' }} />
        <div className="network-line-vertical" style={{ left: '30%', animationDelay: '0.5s' }} />
        <div className="network-line-vertical" style={{ left: '70%', animationDelay: '2s' }} />

        {/* Glowing connection dots */}
        <div className="glow-dot" style={{ top: '20%', left: '30%', animationDelay: '0s' }} />
        <div className="glow-dot" style={{ top: '60%', left: '30%', animationDelay: '0.5s', background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6' }} />
        <div className="glow-dot" style={{ top: '20%', left: '70%', animationDelay: '1s', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35, 0 0 20px #FF6B35' }} />
        <div className="glow-dot" style={{ top: '60%', left: '70%', animationDelay: '1.5s' }} />

        {/* Floating particles */}
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="tech-badge glass-effect mb-6">
                <i className="fa-light fa-code text-blue-500"></i>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Development Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {content.hero.title}
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text" style={{ color: '#FF6B35' }}>
                {content.hero.subtitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {content.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={isJapanese ? '/ja/contact' : '/contact'}
                  className="tech-button relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl text-center glow-effect"
                >
                  <span className="relative z-10">{content.hero.getStarted}</span>
                </Link>
                <Link
                  to={isJapanese ? '/ja/services' : '/services'}
                  className="glass-effect border-2 border-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/20 transition-all transform hover:-translate-y-1 text-center"
                >
                  {content.hero.viewExpertise}
                </Link>
              </div>

              {/* Contact info badge */}
              <div className="mt-8 flex items-center gap-3 text-gray-400">
                <i className="fa-light fa-phone text-orange-500"></i>
                <span className="text-sm">Tel: (+84) 35-543-0828</span>
              </div>
            </div>

              {/* Hero Image - Team Illustration */}
              <div className="relative animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-effect p-8 border border-blue-500/20">
                  <img
                    src="/images/team-illustration.svg"
                    alt="Team"
                    className="w-full h-auto"
                  />

                  {/* Code pattern overlay */}
                  <div className="absolute top-4 right-4 code-pattern">
                    {'<code>'}
                  </div>
                  <div className="absolute bottom-4 left-4 code-pattern">
                    {'</dev>'}
                  </div>
                </div>

              {/* Floating Tech Cards */}
              <div className="absolute -right-4 top-10 bg-white rounded-xl shadow-2xl p-4 w-48 animate-fade-in border-2 border-orange-500/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <i className="fa-light fa-shield-check text-2xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Quality</p>
                    <p className="text-xs text-slate-600 font-medium">& Security</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-10 bg-white rounded-xl shadow-2xl p-4 w-48 animate-fade-in border-2 border-blue-500/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <i className="fa-light fa-rocket text-2xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Fast</p>
                    <p className="text-xs text-slate-600 font-medium">& Scalable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="about">
        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid-bg opacity-30" />

        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="floating-shape" style={{ top: '10%', left: '5%', width: '100px', height: '100px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
          <div className="floating-shape" style={{ top: '60%', right: '10%', width: '150px', height: '150px', background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(236, 72, 153, 0.1))', borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-building text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {content.about.badge}
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-700">{content.about.title1}</span>{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{content.about.title2}</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-600 mb-6">
              {content.about.title3}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.about.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.about.features.map((feature, index) => (
              <div key={index} className="tech-card text-center scroll-animate-scale bg-white/80 backdrop-blur-sm" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl filter drop-shadow-lg">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Market Badge */}
          <div className="relative network-bg rounded-3xl p-8 md:p-12 text-center scroll-animate overflow-hidden border border-blue-500/20">
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10" />

            {/* Network lines in badge */}
            <div className="network-line" style={{ top: '30%' }} />
            <div className="glow-dot" style={{ top: '30%', left: '20%' }} />
            <div className="glow-dot" style={{ top: '30%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

            <div className="relative z-10">
              <span className="tech-badge mb-4 bg-white/10 border-white/20">
                <i className="fa-light fa-globe text-blue-400"></i>
                <span className="text-white">{content.about.market.badge}</span>
              </span>
              <h3 className="text-3xl font-bold mb-4 text-white">
                {content.about.market.title}
              </h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                {content.about.market.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden" id="services">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-layer-group text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {content.services.badge}
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {content.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="gradient-border tech-card bg-white/90 backdrop-blur-sm scroll-animate group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl filter drop-shadow-lg">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center font-semibold hover:gap-3 transition-all group/link"
                >
                  <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                    {isJapanese ? '詳細を見る' : 'Learn more'}
                  </span>
                  <i className="fa-light fa-arrow-right ml-2 text-orange-500 group-hover/link:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="clients">
        <div className="absolute inset-0 hex-pattern opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-users text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {content.clients.badge}
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {content.clients.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {content.clients.description}
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Feediy */}
            <a
              // href="https://feediy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale group"
            >
              <img
                src="/images/clients/feediy-logo.png"
                alt="Feediy"
                className="w-full h-20 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold text-center text-slate-900">Feediy</h3>
              <p className="text-sm text-center text-slate-600 mt-2">
                {isJapanese ? 'Instagram自動化ツール' : 'Instagram Automation Tool'}
              </p>
            </a>

            {/* i-report */}
            <a
              // href="https://i-report.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale group"
              style={{ transitionDelay: '0.1s' }}
            >
              <img
                src="/images/clients/ireport-logo.webp"
                alt="i-report"
                className="w-full h-20 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold text-center text-slate-900">i-report</h3>
              <p className="text-sm text-center text-slate-600 mt-2">
                {isJapanese ? 'Instagram分析ツール' : 'Instagram Analytics Tool'}
              </p>
            </a>

            {/* RESTORY */}
            <a
              // href="https://re-story.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale group"
              style={{ transitionDelay: '0.2s' }}
            >
              <img
                src="/images/clients/restory-logo.png"
                alt="RESTORY"
                className="w-full h-20 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-xl font-bold text-center text-slate-900">RESTORY</h3>
              <p className="text-sm text-center text-slate-600 mt-2">
                {isJapanese ? 'ストーリーズ管理ツール' : 'Stories Management Tool'}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-comment-dots text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {content.testimonials.badge}
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {content.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <div key={index} className="tech-card bg-white/90 backdrop-blur-sm scroll-animate relative group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-quote-left text-white text-xl"></i>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed pt-4">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  {testimonial.logo ? (
                    <div className="w-12 h-12 flex items-center justify-center p-2 bg-slate-50 rounded-lg">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                      <i className="fa-light fa-user text-slate-400 text-xl"></i>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.position}</p>
                    <p className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Logos */}
          <div className="flex flex-wrap justify-center items-center gap-16 mt-16">
            {/* Lancers */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-40 mb-3">
                <img
                  src="/images/clients/lancers-logo.svg"
                  alt="Lancers"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-500 text-sm"></i>
                ))}
              </div>
            </div>

            {/* CrowdWorks */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-40 mb-3">
                <img
                  src="/images/clients/crowdwork-logo.svg"
                  alt="CrowdWorks"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-500 text-sm"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-share-nodes text-blue-600"></i>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {isJapanese ? 'ソーシャルメディア' : 'Connect With Us'}
              </span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {isJapanese ? '私たちとつながりましょう' : 'Follow Our Journey'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {isJapanese ? '最新情報やプロジェクト更新をソーシャルメディアでフォロー' : 'Stay updated with our latest projects and tech insights'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61582767453471"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-4xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Facebook</h3>
              <p className="text-sm text-slate-600">{isJapanese ? 'フォローする' : 'Follow Us'}</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/swiftcode_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale text-center"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-pink-500/30 transition-all duration-300">
                <i className="fa-brands fa-instagram text-4xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Instagram</h3>
              <p className="text-sm text-slate-600">{isJapanese ? 'フォローする' : 'Follow'}</p>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/SwiftcodeStudi0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative gradient-border tech-card bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-animate-scale text-center"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-slate-500/30 transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-4xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">X</h3>
              <p className="text-sm text-slate-600">{isJapanese ? 'フォローする' : 'Follow'}</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative network-bg rounded-3xl p-12 text-center text-white scroll-animate-scale overflow-hidden border border-blue-500/30">
            {/* Network background */}
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20" />

            {/* Network lines */}
            <div className="network-line" style={{ top: '30%' }} />
            <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
            <div className="glow-dot" style={{ top: '30%', left: '10%' }} />
            <div className="glow-dot" style={{ top: '30%', right: '10%', background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6' }} />
            <div className="glow-dot" style={{ top: '70%', left: '50%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

            {/* Floating particles in CTA */}
            <div className="particles-bg">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 5}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {content.cta.title}
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-200">
                {content.cta.description}
              </p>
              <Link
                to={isJapanese ? '/ja/contact' : '/contact'}
                className="tech-button inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl glow-effect"
              >
                <span className="relative z-10">{content.cta.button}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer isJapanese={isJapanese} />
    </div>
  );
}
