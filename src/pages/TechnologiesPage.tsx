import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TechnologiesPageProps {
  isJapanese?: boolean;
}

export default function TechnologiesPage({ isJapanese = false }: TechnologiesPageProps) {
  useScrollAnimation();

  const content = isJapanese ? {
    hero: {
      title: 'トレンディング技術',
      subtitle: '私たちが取り組む技術',
      description: 'Swiftcode Studioでは、ビジネスの問題を解決するための要求の高いハイテク産業の企業を支援します。私たちは、専門のソフトウェア開発・エンジニアリングチームが最高の技術で作業する必要があることを知っています。'
    },
    technologies: [
      {
        name: 'Ruby on Rails',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
        bgColor: 'bg-red-50',
        description: 'Ruby on Railsは、Swiftcode Studioのコア技術です。私たちのチームは、スケーラブルで保守性の高いWebアプリケーションを構築するための豊富な経験を持っています。Ruby on Railsの強力な機能を活用して、迅速な開発と高品質なコードを提供します。'
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        bgColor: 'bg-blue-50',
        description: 'Pythonは、データ分析、機械学習、バックエンド開発に最適な言語です。Django、FastAPIなどのフレームワークを使用して、効率的でスケーラブルなアプリケーションを構築します。'
      },
      {
        name: 'PHP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        bgColor: 'bg-indigo-50',
        description: 'PHPプログラマーのチームは、Laravel、Symfonyなどの人気フレームワークの経験があります。Eコマース、CMS、カスタムWebアプリケーションの開発に精通しています。'
      },
      {
        name: 'Golang',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        bgColor: 'bg-cyan-50',
        description: 'Golangは、高性能で並行処理に優れた言語です。マイクロサービス、API、クラウドネイティブアプリケーションの開発に活用し、高速で効率的なシステムを構築します。'
      },
      {
        name: 'React/Vue.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        bgColor: 'bg-emerald-50',
        description: 'ReactとVue.jsは、モダンなフロントエンド開発の中心です。レスポンシブで直感的なユーザーインターフェイスを構築し、最適なユーザーエクスペリエンスを提供します。'
      },
      {
        name: 'Android (Kotlin/Java)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        bgColor: 'bg-green-50',
        description: 'KotlinとJavaを使用したネイティブAndroidアプリ開発。Material Designガイドラインに従い、パフォーマンスと使いやすさに優れたモバイルアプリを開発します。'
      },
      {
        name: 'iOS (SwiftUI)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        bgColor: 'bg-slate-50',
        description: 'SwiftUIを使用した最新のiOSアプリ開発。Appleのデザイン原則に従い、美しく機能的なiPhoneおよびiPadアプリケーションを構築します。'
      },
      {
        name: 'Flutter',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        bgColor: 'bg-sky-50',
        description: 'Flutterを使用したクロスプラットフォームモバイルアプリ開発。単一のコードベースでiOSとAndroidの両方に対応し、開発コストを削減しながら高品質なアプリを提供します。'
      }
    ],
    stack: {
      badge: '私たちの技術',
      title: '私たちの技術スタック',
      description: 'Swiftcode Studioでは、要求の高いハイテク産業の企業からのビジネスの問題を解決します。私たちは、専門のソフトウェア開発・エンジニアリングチームが、優れたコードを提供するために最高の技術で作業する必要があることを知っています。'
    },
    cta: {
      title: 'あなたの生産性を最大化する準備はできていますか？',
      description: 'Swiftcode Studioのソリューションで、お客様のニーズに合わせたソリューションを提供します。',
      button: 'お問い合わせ'
    }
  } : {
    hero: {
      title: 'TRENDING TECHNOLOGY',
      subtitle: 'WE WORK ON',
      description: 'At Swiftcode Studio, we help companies from demanding high-technology industries to resolve the business problems. We know that dedicated software development engineering teams need to work on the best technologies available to provide nothing less than code excellence.'
    },
    technologies: [
      {
        name: 'Ruby on Rails',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg',
        bgColor: 'bg-red-50',
        description: 'Ruby on Rails is our core technology at Swiftcode Studio. Our team has extensive experience building scalable and maintainable web applications. We leverage the power of Rails to deliver rapid development with high-quality code that follows best practices.'
      },
      {
        name: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        bgColor: 'bg-blue-50',
        description: 'Python is our go-to language for data analysis, machine learning, and backend development. We use frameworks like Django and FastAPI to build efficient, scalable applications that handle complex business logic with ease.'
      },
      {
        name: 'PHP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        bgColor: 'bg-indigo-50',
        description: 'Our PHP team has expertise in popular frameworks like Laravel and Symfony. We specialize in building e-commerce platforms, content management systems, and custom web applications that are robust and secure.'
      },
      {
        name: 'Golang',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        bgColor: 'bg-cyan-50',
        description: 'Golang excels in high-performance and concurrent programming. We use Go to build microservices, APIs, and cloud-native applications that are fast, efficient, and highly scalable for modern infrastructure.'
      },
      {
        name: 'React/Vue.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        bgColor: 'bg-emerald-50',
        description: 'React and Vue.js are at the heart of our modern frontend development. We build responsive, intuitive user interfaces that provide optimal user experiences across all devices and platforms.'
      },
      {
        name: 'Android (Kotlin/Java)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        bgColor: 'bg-green-50',
        description: 'Native Android app development using Kotlin and Java. We follow Material Design guidelines to create mobile apps that are performant, user-friendly, and fully integrated with the Android ecosystem.'
      },
      {
        name: 'iOS (SwiftUI)',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        bgColor: 'bg-slate-50',
        description: 'Modern iOS app development using SwiftUI. We follow Apple\'s design principles to build beautiful, functional applications for iPhone and iPad that leverage the latest iOS features.'
      },
      {
        name: 'Flutter',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        bgColor: 'bg-sky-50',
        description: 'Cross-platform mobile app development with Flutter. We build high-quality apps for both iOS and Android from a single codebase, reducing development costs while maintaining native performance and appearance.'
      }
    ],
    stack: {
      badge: 'Our Technologies',
      title: 'Our Technologies Stack',
      description: 'At Swiftcode Studio, we help solve the business problems of companies from demanding high-technology industries. We know that dedicated software development engineering teams need to work with the best technologies available to provide nothing less than code excellence.'
    },
    cta: {
      title: 'Get Ready to Maximize Your Productivity With Our Workstyle Solutions',
      description: 'Tailored solutions that fit your needs with Swiftcode Studio.',
      button: 'Contact us!'
    }
  };

  const techIcons = [
    { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-40" />
        <div className="network-line" style={{ top: '30%' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '30%', left: '20%' }} />
        <div className="glow-dot" style={{ top: '70%', right: '20%', background: '#8B5CF6', boxShadow: '0 0 10px #8B5CF6' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="tech-badge glass-effect mb-6 bg-white/10 border-white/20">
                <i className="fa-light fa-laptop-code text-blue-400"></i>
                <span className="text-white">{content.hero.title}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {content.hero.subtitle}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {content.hero.description}
              </p>
            </div>

            {/* Tech Illustration */}
            <div className="relative scroll-animate-scale">
              <div className="glass-effect rounded-2xl shadow-2xl p-12 flex items-center justify-center border border-blue-500/20">
                <i className="fa-light fa-laptop-code bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent" style={{ fontSize: '200px' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.technologies.map((tech, index) => (
              <div key={index} className="tech-card bg-white/90 backdrop-blur-sm scroll-animate-scale group" style={{ transitionDelay: `${index * 0.05}s` }}>
                <div className={`w-32 h-32 ${tech.bgColor} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform p-6 mx-auto`}>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{tech.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding network-bg text-white relative overflow-hidden" id="stack">
        <div className="absolute inset-0 network-dots opacity-20" />
        <div className="network-line" style={{ top: '30%' }} />
        <div className="network-line" style={{ top: '70%', animationDelay: '1.5s' }} />
        <div className="glow-dot" style={{ top: '30%', left: '10%' }} />
        <div className="glow-dot" style={{ top: '70%', right: '10%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-animate">
            <span className="tech-badge mb-4 bg-white/10 border-white/20">
              <i className="fa-light fa-microchip text-blue-400"></i>
              <span className="text-white">{content.stack.badge}</span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {content.stack.title}
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {content.stack.description}
            </p>
          </div>

          {/* Tech Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="group relative scroll-animate-scale"
                style={{ transitionDelay: `${index * 0.02}s` }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:from-white/10 hover:to-white/15 hover:border-orange-400/60 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-xl p-3 shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" />

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

