import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface OffshoreDevPageProps {
  isJapanese?: boolean;
}

export default function OffshoreDevPage({ isJapanese = false }: OffshoreDevPageProps) {
  useScrollAnimation();

  const content = isJapanese ? {
    hero: {
      title: 'オフショア',
      subtitle: 'ソフトウェア開発',
      description: 'Swiftcode Studioは、お客様のビジネスニーズに合わせた高品質なソフトウェアを提供します。私たちは、最新の技術を使用して、スケーラブルで効率的なソリューションを構築します。'
    },
    benefits: {
      title: 'なぜSwiftcode Studioのオフショアソフトウェア開発を選ぶのか？',
      items: [
        {
          title: '経験と専門知識',
          description: 'Swiftcode Studioは、多様な業界にわたるスケーラブルなソリューションを構築する深い経験を持っています。'
        },
        {
          title: '全体的かつ専用',
          description: '私たちは、お客様のプロジェクトに専念し、最高の結果を提供します。'
        },
        {
          title: 'コスト効率',
          description: '競争力のある価格で高品質なソリューションを提供します。'
        },
        {
          title: '柔軟性と多様性',
          description: 'お客様のニーズに合わせてカスタマイズされたソリューション。'
        }
      ]
    },
    services: {
      badge: '私たちのサービス',
      title: '包括的な開発サービス',
      items: [
        {
          icon: '🌐',
          title: 'Web開発サービス',
          description: 'フルスタックWeb開発、SPAアプリケーション、PWA、RESTful API開発。'
        },
        {
          icon: '📱',
          title: 'クロスプラットフォームアプリ開発',
          description: 'React Native、Flutter、Ionic、Cordova、Xamarinを使用したクロスプラットフォーム開発。'
        },
        {
          icon: '🌍',
          title: 'Web UI/UXデザイン',
          description: 'モダンで直感的なUIUXデザイン。'
        },
        {
          icon: '💼',
          title: 'ビジネスシステム開発',
          description: 'ERP、CRM、HRMシステム開発。'
        }
      ]
    },
    approach: {
      badge: '私たちの働き方',
      title: '私たちのアプローチ',
      methods: [
        {
          icon: '🔧',
          title: 'スクラム・アジャイル手法',
          description: 'アジャイル方法論を使用して、迅速で柔軟な開発を行います。'
        },
        {
          icon: '💧',
          title: 'ウォーターフォール手法',
          description: 'ウォーターフォール方法論を使用して、計画的な開発を行います。'
        }
      ]
    },
    pricing: {
      title: '価格モデル',
      models: [
        {
          icon: '👥',
          title: '専属チームモデル',
          description: '専属チームモデルで、長期プロジェクトに最適です。'
        },
        {
          icon: '⏱️',
          title: 'タイム&マテリアルモデル',
          description: '時間と材料モデルで、柔軟なプロジェクトに最適です。'
        },
        {
          icon: '💰',
          title: '固定価格モデル',
          description: '固定価格モデルで、予算が明確なプロジェクトに最適です。'
        }
      ]
    },
    process: {
      badge: '開発プロセス',
      title: '私たちのプロセス',
      steps: [
        {
          number: '01',
          title: 'ITプロジェクト開発の初期化',
          description: 'プロジェクトの初期化と要件定義。'
        },
        {
          number: '02',
          title: 'ITプロジェクト開発の計画',
          description: 'プロジェクト計画と設計。'
        },
        {
          number: '03',
          title: 'ITプロジェクト開発の実行',
          description: 'プロジェクトの実行と開発。'
        },
        {
          number: '04',
          title: 'ITプロジェクト開発の監視と制御',
          description: 'プロジェクトの監視と制御。'
        }
      ]
    },
    faq: {
      title: 'よくある質問',
      subtitle: '私たちについて知っておくべきすべてのこと',
      questions: [
        {
          question: 'Webアプリケーションでどのようなストレージを使用しますか？',
          answer: '私たちは、PostgreSQL、MySQL、MongoDB、Redisなどの最新のデータベース技術を使用しています。'
        },
        {
          question: 'プロジェクトごとのコストモデルはどうなりますか？',
          answer: 'プロジェクトの規模と複雑さに応じて、柔軟な価格モデルを提供します。'
        },
        {
          question: '開発者を雇う場合の推定コストはどのくらいですか？',
          answer: 'お客様のニーズに合わせてカスタマイズされた価格を提供します。'
        },
        {
          question: '自分で選んだ開発者を雇うことはできますか？',
          answer: 'はい、お客様のニーズに合わせて最適な開発者を選択できます。'
        }
      ]
    },
    cta: {
      title: 'あなたの生産性を最大化する準備はできていますか？',
      description: 'Swiftcode Studioのソリューションで、お客様のニーズに合わせたソリューションを提供します。',
      button: 'お問い合わせ'
    }
  } : {
    hero: {
      title: 'OFFSHORE',
      subtitle: 'SOFTWARE DEVELOPMENT',
      description: 'Swiftcode Studio provides high-quality software tailored to your business needs. We use the latest technology to build scalable and efficient solutions.'
    },
    benefits: {
      title: 'Why Offshore Software Development With Swiftcode Studio Technology?',
      items: [
        {
          title: 'Experience & Expertise',
          description: 'Swiftcode Studio has deep experience building scalable solutions across diverse industries.'
        },
        {
          title: 'Wholehearted and dedicated',
          description: 'We are dedicated to your project and deliver the best results.'
        },
        {
          title: 'Cost Effective',
          description: 'We provide high-quality solutions at competitive prices.'
        },
        {
          title: 'Flexibility & Versatility',
          description: 'Customized solutions tailored to your needs.'
        }
      ]
    },
    services: {
      badge: 'Our Services',
      title: 'Comprehensive Development Services',
      items: [
        {
          icon: '🌐',
          title: 'Web Development Services',
          description: 'Full-stack web development, SPA applications, PWA, RESTful API development.'
        },
        {
          icon: '📱',
          title: 'Cross-Platform App Development',
          description: 'Cross-platform development using React Native, Flutter, Ionic, Cordova, Xamarin.'
        },
        {
          icon: '🌍',
          title: 'Web UI/UX Design',
          description: 'Modern and intuitive UI/UX design.'
        },
        {
          icon: '💼',
          title: 'Business System Development',
          description: 'ERP, CRM, HRM system development.'
        }
      ]
    },
    approach: {
      badge: 'How we work',
      title: 'Our Approach',
      methods: [
        {
          icon: '🔧',
          title: 'ScrumAgile Method',
          description: 'We use agile methodology for fast and flexible development.'
        },
        {
          icon: '💧',
          title: 'Waterfall Method',
          description: 'We use waterfall methodology for planned development.'
        }
      ]
    },
    pricing: {
      title: 'Pricing Models',
      models: [
        {
          icon: '👥',
          title: 'The Dedicated Team Model',
          description: 'Dedicated team model, ideal for long-term projects.'
        },
        {
          icon: '⏱️',
          title: 'The Time and Materials Model',
          description: 'Time and materials model, ideal for flexible projects.'
        },
        {
          icon: '💰',
          title: 'The Fixed-Price Model',
          description: 'Fixed price model, ideal for projects with clear budgets.'
        }
      ]
    },
    process: {
      badge: 'Development Process',
      title: 'Our Process',
      steps: [
        {
          number: '01',
          title: 'IT Project Development Initialization',
          description: 'Project initialization and requirements definition.'
        },
        {
          number: '02',
          title: 'IT Project Development Planning',
          description: 'Project planning and design.'
        },
        {
          number: '03',
          title: 'IT Project Development Execution',
          description: 'Project execution and development.'
        },
        {
          number: '04',
          title: 'IT Project Development Monitoring and Controlling',
          description: 'Project monitoring and control.'
        }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything needs to know about us',
      questions: [
        {
          question: 'What is storage that you like to develop in web application?',
          answer: 'We use modern database technologies such as PostgreSQL, MySQL, MongoDB, Redis.'
        },
        {
          question: 'What your cost model would be for every project?',
          answer: 'We provide flexible pricing models based on project scale and complexity.'
        },
        {
          question: 'What will be the estimated cost of hiring developer?',
          answer: 'We provide customized pricing tailored to your needs.'
        },
        {
          question: 'Can I hire developer of my choice?',
          answer: 'Yes, you can choose the best developer suited to your needs.'
        }
      ]
    },
    cta: {
      title: 'Get Ready to Maximize Your Productivity With Our Workstyle Solutions',
      description: 'Tailored solutions that fit your needs with Swiftcode Studio.',
      button: 'Contact us!'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-30" />
        <div className="network-line" style={{ top: '30%' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '30%', left: '20%' }} />
        <div className="glow-dot" style={{ top: '70%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="scroll-animate">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              {content.hero.title}
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400 drop-shadow-lg">
              {content.hero.subtitle}
            </h2>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-20" />
        <div className="network-line" style={{ top: '40%' }} />
        <div className="glow-dot" style={{ top: '40%', left: '15%' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-lg scroll-animate">
            {content.benefits.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.items.map((item, index) => (
              <div key={index} className="glass-effect border-2 border-orange-500/30 rounded-xl p-6 text-center scroll-animate bg-slate-800/50" style={{ transitionDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4 text-orange-400">{item.title}</h3>
                <p className="text-slate-100 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-code text-orange-600"></i>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                {content.services.badge}
              </span>
            </span>
            <h2 className="text-4xl font-bold text-slate-900">
              {content.services.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="tech-card bg-white/90 backdrop-blur-sm p-6 text-center scroll-animate-scale" style={{ transitionDelay: `${index * 0.05}s` }}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding network-bg relative overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-20" />
        <div className="network-line" style={{ top: '50%' }} />
        <div className="glow-dot" style={{ top: '50%', left: '10%' }} />
        <div className="glow-dot" style={{ top: '50%', right: '10%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4 bg-white/10 border-white/20">
              <i className="fa-light fa-tools text-blue-400"></i>
              <span className="text-white font-semibold">{content.approach.badge}</span>
            </span>
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              {content.approach.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {content.approach.methods.map((method, index) => (
              <div key={index} className="glass-effect border-2 border-blue-500/30 rounded-2xl p-8 scroll-animate bg-slate-800/50" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="text-5xl mb-6">{method.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">{method.title}</h3>
                <p className="text-slate-100 font-medium">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 scroll-animate">
            {content.pricing.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.pricing.models.map((model, index) => (
              <div key={index} className="tech-card bg-white/90 backdrop-blur-sm p-8 text-center scroll-animate-scale group" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-5xl filter drop-shadow-lg">{model.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{model.title}</h3>
                <p className="text-slate-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding network-bg relative overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-20" />
        <div className="network-line" style={{ top: '30%' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '50%', left: '15%' }} />
        <div className="glow-dot" style={{ top: '50%', right: '15%', background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4 bg-white/10 border-white/20">
              <i className="fa-light fa-diagram-project text-blue-400"></i>
              <span className="text-white font-semibold">{content.process.badge}</span>
            </span>
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              {content.process.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => (
              <div key={index} className="glass-effect border-2 border-purple-500/30 rounded-xl p-6 scroll-animate bg-slate-800/50" style={{ transitionDelay: `${index * 0.05}s` }}>
                <div className="text-5xl font-bold mb-4 text-orange-400 drop-shadow">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white drop-shadow">{step.title}</h3>
                <p className="text-slate-100 font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {content.faq.title}
            </h2>
            <p className="text-xl text-slate-600">{content.faq.subtitle}</p>
          </div>
          <div className="space-y-4">
            {content.faq.questions.map((item, index) => (
              <details key={index} className="tech-card bg-white/90 backdrop-blur-sm p-6 scroll-animate group" style={{ transitionDelay: `${index * 0.05}s` }}>
                <summary className="font-semibold text-lg text-slate-900 cursor-pointer flex items-center justify-between">
                  {item.question}
                  <i className="fa-light fa-chevron-down text-orange-600 group-open:rotate-180 transition-transform"></i>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative network-bg rounded-3xl p-12 text-center text-white scroll-animate-scale overflow-hidden border-2 border-blue-500/50">
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="network-line" style={{ top: '50%' }} />
            <div className="glow-dot" style={{ top: '50%', left: '20%' }} />
            <div className="glow-dot" style={{ top: '50%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
                {content.cta.title}
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-100 font-medium">
                {content.cta.description}
              </p>
              <Link
                to={isJapanese ? '/ja/contact' : '/contact'}
                className="tech-button inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl glow-effect shadow-lg"
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
