import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ServicesPageProps {
  isJapanese?: boolean;
}

export default function ServicesPage({ isJapanese = false }: ServicesPageProps) {
  useScrollAnimation();

  const services = isJapanese ? [
    {
      title: 'オフショアソフトウェア開発',
      description: 'Swiftcode Studioは、お客様のビジネスニーズに合わせた高品質なソフトウェアを提供します。私たちは、最新の技術を使用して、スケーラブルで効率的なソリューションを構築します。',
      icon: '💻',
      link: '/ja/services/offshore-development',
      features: [
        '経験豊富なチーム',
        '全体的かつ専用',
        'コスト効率',
        '柔軟性と多様性'
      ]
    },
    {
      title: '専属開発チーム',
      description: '私たちは、お客様のプロジェクトに特化した専門チームを提供します。私たちのチームは、お客様のビジネスニーズに合わせてカスタマイズされています。',
      icon: '👥',
      link: '/ja/services/dedicated-team',
      features: [
        '専属メンバー',
        '迅速な配信',
        '完全な管理',
        'より良い価値'
      ]
    },
    {
      title: 'ソフトウェアQAテスト',
      description: 'Swiftcode Studioは、高品質なソフトウェアQAテストを提供します。私たちは、お客様のソフトウェアが最高の品質基準を満たすことを保証します。',
      icon: '✅',
      link: '/ja/services/qa-testing',
      features: [
        '機能テスト',
        '負荷・パフォーマンステスト',
        'セキュリティテスト',
        'モバイルアプリテスト'
      ]
    },
    {
      title: 'ソフトウェア保守',
      description: 'ソフトウェアのメンテナンスとサポートサービス。私たちは、お客様のソフトウェアが常に最新の状態であることを保証します。',
      icon: '🔧',
      link: '/ja/services/maintenance',
      features: [
        '機能強化',
        'バグ修正',
        'プロジェクト継続性の保証'
      ]
    }
  ] : [
    {
      title: 'Offshore Software Development',
      description: 'Swiftcode Studio provides high-quality software tailored to your business needs. We use the latest technology to build scalable and efficient solutions.',
      icon: '💻',
      link: '/services/offshore-development',
      features: [
        'Experience & Expertise',
        'Wholehearted and dedicated',
        'Cost Effective',
        'Flexibility & Versatility'
      ]
    },
    {
      title: 'Dedicated Development Team',
      description: 'We provide specialized teams dedicated to your project. Our teams are customized to meet your business needs.',
      icon: '👥',
      link: '/services/dedicated-team',
      features: [
        'Dedicated Member',
        'Rapidly Delivery',
        'Fully Year Control',
        'Oversea Market'
      ]
    },
    {
      title: 'Software QA Testing',
      description: 'Swiftcode Studio provides high-quality software QA testing. We ensure that your software meets the highest quality standards.',
      icon: '✅',
      link: '/services/qa-testing',
      features: [
        'Functional Testing',
        'Load & Performance Testing',
        'Security Testing',
        'Mobile App Testing'
      ]
    },
    {
      title: 'Software Maintenance',
      description: 'Software maintenance and support services. We ensure that your software is always up to date.',
      icon: '🔧',
      link: '/services/maintenance',
      features: [
        'Enhancing Capability',
        'Bug Fixing',
        'Project Continuity Guaranteed'
      ]
    }
  ];

  const heroContent = isJapanese ? {
    title: 'サービス',
    subtitle: '私たちが提供するもの',
    description: '私たちは、お客様のビジネスニーズに合わせた包括的なソフトウェア開発サービスを提供します。'
  } : {
    title: 'Services',
    subtitle: 'What We Offer',
    description: 'We provide comprehensive software development services tailored to your business needs.'
  };

  const ctaContent = isJapanese ? {
    title: 'あなたの生産性を最大化する準備はできていますか？',
    description: '私たちのワークスタイルソリューションで、あなたのビジネスを次のレベルに引き上げましょう。',
    button: 'お問い合わせ'
  } : {
    title: 'Get Ready to Maximize Your Productivity With Our Workstyle Solutions',
    description: 'Take your business to the next level with our workstyle solutions.',
    button: 'Contact us!'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-40" />
        <div className="network-line" style={{ top: '40%' }} />
        <div className="glow-dot" style={{ top: '40%', left: '25%' }} />
        <div className="glow-dot" style={{ top: '40%', right: '25%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="tech-badge glass-effect mb-6 bg-white/10 border-white/20 mx-auto">
            <i className="fa-light fa-layer-group text-blue-400"></i>
            <span className="text-white">{heroContent.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {heroContent.subtitle}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {heroContent.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="gradient-border tech-card bg-white/90 backdrop-blur-sm scroll-animate group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-3xl filter drop-shadow-lg">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <i className="fa-light fa-check-circle mr-3 text-blue-600"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="tech-button inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 glow-effect"
                >
                  <span className="relative z-10">{isJapanese ? '詳細を見る' : 'Learn more'}</span>
                  <i className="fa-light fa-arrow-right ml-2 relative z-10"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative network-bg rounded-3xl p-12 text-center text-white scroll-animate-scale overflow-hidden border border-blue-500/30">
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="network-line" style={{ top: '50%' }} />
            <div className="glow-dot" style={{ top: '50%', left: '20%' }} />
            <div className="glow-dot" style={{ top: '50%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {ctaContent.title}
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-200">
                {ctaContent.description}
              </p>
              <Link
                to={isJapanese ? '/ja/contact' : '/contact'}
                className="tech-button inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl glow-effect"
              >
                <span className="relative z-10">{ctaContent.button}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer isJapanese={isJapanese} />
    </div>
  );
}
