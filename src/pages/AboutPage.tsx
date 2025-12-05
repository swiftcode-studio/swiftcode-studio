import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutPageProps {
  isJapanese?: boolean;
}

export default function AboutPage({ isJapanese = false }: AboutPageProps) {
  useScrollAnimation();

  const content = isJapanese ? {
    hero: {
      title: '私たちについて',
      subtitle1: '私たちは',
      subtitle2: 'SWIFTCODE STUDIO',
      description1: 'Swiftcode Studioは、最先端の最新のソフトウェア開発会社です。お客様は、最も革新的な製品とサービスを提供するために、私たちと協力することを選択します。',
      description2: '私たちの専門家は、多様な業界にわたるスケーラブルなソリューションを構築する深い経験を持っています。私たちは、優れたパフォーマンス、献身、そして卓越性を通じて、あなたのビジネスを拡大する可能性を追求します。',
      description3: '私たちは、グローバルサービスを革新するために、私たちは技術とビジネスのすべての側面を熟知した業界リーダーのチームと協力します。'
    },
    established: {
      title: '設立',
      year: '2025年12月5日',
      description: 'Swiftcode Studioは、大学時代から実戦経験を積んだプログラマーのチームによって設立されました。7年以上のソフトウェア開発経験を持つチームです。'
    },
    mission: {
      badge: '私たちのミッション',
      description: 'Swiftcode Studioの使命は、お客様の期待に応えることです。私たちは、世界中のエンジニアリングチームを含む多様な企業を支援する専門家を雇用しています。お客様の最も複雑なエンジニアリング問題を解決することで、私たちは日本とベトナムの労働力における卓越性を促進します。'
    },
    vision: {
      badge: '私たちのビジョン',
      description: 'Swiftcode Studioは、高度なエンジニアリングスキルを通じて世界中の企業にサービスを提供する技術プロバイダーです。お客様は、私たちに焦点を当てて自信を持って最新の技術的課題に取り組むことができます。私たちのエンジニアリングチームのすべての貢献は、完全な自動化と自動化されたソリューションであり、生産性と時間を節約するのに役立ちます。'
    },
    leadership: {
      badge: '私たちのリーダーシップ',
      leader: {
        name: 'Chien Nguyen',
        role: '創業者 兼 CEO',
        description: 'Chienは、Swiftcode Studioの創業者であり、ビジョンリーダーです。プロジェクトの獲得から開発チームの管理、クライアントへの納品まで、すべてのプロセスを統括しています。信頼できる開発者やビジネスパートナーとのネットワークを構築し、チームを導いて高品質なソフトウェアソリューションを提供しています。'
      }
    },
    summary: {
      title: '会社概要',
      stats: [
        {
          title: 'Swiftcode Studio 社員数',
          value: '3+',
          description: 'メンバー'
        },
        {
          title: '資本金：5,000米ドル',
          items: [
            '1名 CEO',
            '1名 開発者',
            '2名 営業',
            '創業：2025年12月5日'
          ]
        },
        {
          title: '主要顧客',
          items: [
            '日本の10市場',
            'EUの15市場',
            '米国の8市場',
            '世界中'
          ]
        }
      ]
    },
    faq: {
      title: 'よくある質問',
      subtitle: '私たちについて知っておくべきすべて',
      questions: [
        {
          question: 'Webアプリケーションで開発したいサービスは何ですか？',
          answer: 'お客様が私たちに求めるサービスは、スケーラブルなソリューションを構築することです。私たちは、お客様のニーズに合わせてカスタマイズされたソリューションを提供します。'
        },
        {
          question: 'プロジェクトごとの典型的なチームの作業場所はどこですか？',
          answer: '私たちのチームは、世界中のエンジニアリングチームを含む多様な企業を支援します。'
        },
        {
          question: '開発者を雇用する際の推定費用はいくらですか？',
          answer: 'お客様のニーズに合わせてカスタマイズされた価格を提供します。'
        },
        {
          question: '自分の選択した開発者を雇うことができますか？',
          answer: 'はい、お客様のニーズに合わせて最適な開発者を選択できます。'
        }
      ]
    },
    cta: {
      title: '私たちのワークスタイルソリューションで生産性を最大化する準備を始めましょう',
      description: '質は果実です。私たちは、お客様の目標を達成し、成功と共に成長するために、クライアントに力を与えます。',
      button: 'お問い合わせ'
    }
  } : {
    hero: {
      title: 'WHO WE ARE',
      subtitle1: 'WE ARE',
      subtitle2: 'SWIFTCODE STUDIO',
      description1: 'Swiftcode Studio is the next generation interface Software Development Company. Our clients choose to work with us to get the most innovative products and services.',
      description2: 'Our specialists have a deep experience building scalable solutions across diverse industries. We seek to expand your business through excellent performance, dedication, and excellence.',
      description3: 'In addition to providing global services, we also have industry-leading teams who are well-versed in all aspects of both technology and business.',
    },
    established: {
      title: 'ESTABLISHED',
      year: 'DECEMBER 5, 2025',
      description: 'Swiftcode Studio was established by a team of programmers on December 5, 2025, with 7+ years of hands-on experience in software development since university.'
    },
    mission: {
      badge: 'Our Mission',
      description: "Swiftcode Studio's mission is to satisfy the expectations of IT buyers by meeting the growing demand for technology. Our hire our expertise assists a diverse set of companies including engineering teams worldwide. By solving our customers most complex engineering problems, we help foster excellence in the workforce in Japan and Vietnam."
    },
    vision: {
      badge: 'Our Vision',
      description: 'Swiftcode Studio is a technology provider that serves companies globally through highly advanced engineering skills. Our customers can focus on latest technological challenges with us with full automation and automated solutions, everything productivity and time to leading teams.'
    },
    leadership: {
      badge: 'Our Leadership',
      leader: {
        name: 'Chien Nguyen',
        role: 'Founder & CEO',
        description: 'Chien is the founder and visionary leader of Swiftcode Studio. He oversees the entire process from project acquisition, managing the development team, to client delivery. By building a network of trusted developers and business partners, he leads the team to deliver high-quality software solutions that exceed client expectations.'
      }
    },
    summary: {
      title: 'COMPANY SUMMARY',
      stats: [
        {
          title: 'Swiftcode Studio Team',
          value: '3+',
          description: 'Members'
        },
        {
          title: 'Capital: 5K USD',
          items: [
            '1 CEO',
            '1 Developer',
            '2 Sales',
            'Founded: Dec 5, 2025'
          ]
        },
        {
          title: 'Major clients',
          items: [
            '• 10 Markets in JP',
            '• 15 Markets in EU',
            '• 8 Markets in USA',
            '• Worldwide'
          ]
        }
      ]
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything needs to know about us',
      questions: [
        {
          question: 'What is a service that you like to develop in web application?',
          answer: 'We specialize in building scalable solutions. We provide customized solutions tailored to your needs.'
        },
        {
          question: 'Where is your typical team work for every project?',
          answer: 'Our team assists diverse companies including engineering teams worldwide.'
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
      title: 'Call Ready to Maximize Your Productivity With Our Workstyle Solutions',
      description: 'Quality is the fruit. We empower our clients to achieve their goals and grow together with their success.',
      button: 'Contact us!'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        {/* Network background */}
        <div className="absolute inset-0 network-dots opacity-40" />
        <div className="network-line" style={{ top: '30%', animationDelay: '0s' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '30%', left: '20%' }} />
        <div className="glow-dot" style={{ top: '70%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="tech-badge glass-effect mb-6 bg-white/10 border-white/20">
            <i className="fa-light fa-building text-blue-400"></i>
            <span className="text-white font-semibold">{content.hero.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-200 mb-2">
            {content.hero.subtitle1}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {content.hero.subtitle2}
          </h3>
          <div className="max-w-4xl space-y-4">
            <p className="text-lg text-slate-200 leading-relaxed">
              {content.hero.description1}
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              {content.hero.description2}
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              {content.hero.description3}
            </p>
          </div>
        </div>
      </section>

      {/* Established Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="established">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                {content.established.title}
              </h2>
              <h3 className="text-3xl md:text-4xl font-light bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
                {content.established.year}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {content.established.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="tech-card bg-white/90 backdrop-blur-sm scroll-animate-scale">
                <img
                  src="/images/coding-illustration.svg"
                  alt="Coding"
                  className="w-full h-64 object-contain"
                />
              </div>
              <div className="tech-card bg-white/90 backdrop-blur-sm scroll-animate-scale" style={{ transitionDelay: '0.1s' }}>
                <img
                  src="/images/office-illustration.svg"
                  alt="Office"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="tech-card bg-white/90 backdrop-blur-sm scroll-animate" id="mission">
              <span className="tech-badge mb-6">
                <i className="fa-light fa-bullseye text-orange-600"></i>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                  {content.mission.badge}
                </span>
              </span>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="tech-card bg-white/90 backdrop-blur-sm scroll-animate" style={{ transitionDelay: '0.1s' }} id="vision">
              <span className="tech-badge mb-6">
                <i className="fa-light fa-eye text-blue-600"></i>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  {content.vision.badge}
                </span>
              </span>
              <p className="text-lg text-slate-600 leading-relaxed">
                {content.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="leadership">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-crown text-orange-600"></i>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                {content.leadership.badge}
              </span>
            </span>
          </div>

          <div className="relative">
            {/* Leader Card */}
            <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-orange-500/20 scroll-animate-scale overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-orange-500/30 hover:ring-orange-500/50 transition-all">
                    <img
                      src="/images/leadership.jpg"
                      alt={content.leadership.leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                    <i className="fa-solid fa-crown text-white text-lg"></i>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    {content.leadership.leader.name}
                  </h3>
                  <p className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    {content.leadership.leader.role}
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {content.leadership.leader.description}
                  </p>
                </div>
              </div>

              {/* Stats badges */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 relative z-10">
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl px-4 py-2">
                  <p className="text-sm font-semibold text-orange-600">
                    <i className="fa-light fa-briefcase mr-2"></i>
                    {isJapanese ? 'プロジェクト管理' : 'Project Management'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-2">
                  <p className="text-sm font-semibold text-blue-600">
                    <i className="fa-light fa-users mr-2"></i>
                    {isJapanese ? 'チームリーダーシップ' : 'Team Leadership'}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl px-4 py-2">
                  <p className="text-sm font-semibold text-purple-600">
                    <i className="fa-light fa-handshake mr-2"></i>
                    {isJapanese ? 'クライアント対応' : 'Client Relations'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="section-padding network-bg text-white relative overflow-hidden" id="summary">
        {/* Network background */}
        <div className="absolute inset-0 network-dots opacity-20" />
        <div className="network-line" style={{ top: '30%' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '30%', left: '15%' }} />
        <div className="glow-dot" style={{ top: '70%', right: '15%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              {content.summary.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.summary.stats.map((stat, index) => (
              <div key={index} className="relative group scroll-animate-scale" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <i className={`fa-light ${stat.value ? 'fa-users' : stat.title.includes('資本金') || stat.title.includes('Capital') ? 'fa-sack-dollar' : 'fa-globe'} text-white text-xl`}></i>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold mb-3 text-orange-400 uppercase tracking-wide">{stat.title}</h3>

                    {/* Value */}
                    {stat.value && (
                      <div className="mb-2">
                        <span className="text-5xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    {stat.description && (
                      <p className="text-white font-bold text-sm mb-3">{stat.description}</p>
                    )}

                    {/* Items */}
                    {stat.items && (
                      <ul className="space-y-2.5 mt-4">
                        {stat.items.map((item, i) => (
                          <li key={i} className="flex items-start group/item">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-2 mr-2.5 group-hover/item:scale-150 transition-transform"></span>
                            <span className="text-slate-100 font-medium text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="faq">
        <div className="absolute inset-0 hex-pattern opacity-20" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {content.faq.title}
            </h2>
            <p className="text-xl text-slate-600">{content.faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            {content.faq.questions.map((item, index) => (
              <details key={index} className="tech-card bg-white/90 backdrop-blur-sm scroll-animate" style={{ transitionDelay: `${index * 0.05}s` }}>
                <summary className="font-semibold text-lg text-slate-900 cursor-pointer flex items-center justify-between">
                  {item.question}
                  <i className="fa-light fa-chevron-down text-orange-500"></i>
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
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative network-bg rounded-3xl p-12 text-center text-white scroll-animate-scale overflow-hidden border border-blue-500/30">
            <div className="absolute inset-0 network-dots opacity-20" />
            <div className="network-line" style={{ top: '50%' }} />
            <div className="glow-dot" style={{ top: '50%', left: '20%' }} />
            <div className="glow-dot" style={{ top: '50%', right: '20%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

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
