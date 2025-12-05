import { Link } from 'react-router-dom';

interface FooterProps {
  isJapanese?: boolean;
}

export default function Footer({ isJapanese = false }: FooterProps) {
  const footerData = isJapanese ? {
    home: {
      title: 'ホーム',
      links: [
        { label: '会社概要', href: '/ja/about' },
        { label: 'サービス', href: '/ja/services' },
        { label: 'お客様の声', href: '/ja/about#clients' },
        { label: 'フィードバック', href: '/ja/contact' },
      ]
    },
    about: {
      title: '会社概要',
      links: [
        { label: '会社紹介', href: '/ja/about' },
        { label: 'ミッション', href: '/ja/about#mission' },
        { label: 'ビジョン', href: '/ja/about#vision' },
        { label: 'リーダーシップ', href: '/ja/about#leadership' },
        { label: '概要', href: '/ja/about#summary' },
        { label: 'よくある質問', href: '/ja/about#faq' },
      ]
    },
    services: {
      title: 'サービス',
      links: [
        { label: 'オフショア開発', href: '/ja/services/offshore-development' },
        { label: '専属開発チーム', href: '/ja/services/dedicated-team' },
        { label: 'ソフトウェアQAテスト', href: '/ja/services/qa-testing' },
        { label: 'ソフトウェア保守', href: '/ja/services/maintenance' },
      ]
    },
    technologies: {
      title: '技術',
      links: [
        { label: 'トレンド技術', href: '/ja/technologies' },
        { label: '技術スタック', href: '/ja/technologies#stack' },
      ]
    }
  } : {
    home: {
      title: 'HOME',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Services', href: '/services' },
        { label: 'Our Clients', href: '/about#clients' },
        { label: 'Feedback', href: '/contact' },
      ]
    },
    about: {
      title: 'ABOUT US',
      links: [
        { label: 'Who we are', href: '/about' },
        { label: 'Mission', href: '/about#mission' },
        { label: 'Vision', href: '/about#vision' },
        { label: 'Our Leadership', href: '/about#leadership' },
        { label: 'Summary', href: '/about#summary' },
        { label: 'Questions', href: '/about#faq' },
      ]
    },
    services: {
      title: 'SERVICES',
      links: [
        { label: 'Offshore Software Development', href: '/services/offshore-development' },
        { label: 'Dedicated development team', href: '/services/dedicated-team' },
        { label: 'Software QA Testing', href: '/services/qa-testing' },
        { label: 'Software Maintenance', href: '/services/maintenance' },
      ]
    },
    technologies: {
      title: 'TECHNOLOGIES',
      links: [
        { label: 'Trending Tech', href: '/technologies' },
        { label: 'Our Technologies', href: '/technologies#stack' },
      ]
    }
  };

  const companyInfo = {
    address: isJapanese 
      ? 'ハノイ市、ディンコン区、ディンコン通り239番地の路地12番、ベトナム'
      : 'No. 12, Alley 239 Dinh Cong, Dinh Cong Ward, Hanoi, Vietnam',
    phone: '(+84) 35-543-0828',
    email: 'info@swiftcode-studio.com'
  };

  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <Link to={isJapanese ? '/ja' : '/'} className="flex items-center space-x-3 mb-4">
              <img src="/logo-new.svg" alt="Swiftcode Studio" className="h-10" />
              <div>
                <h3 className="text-xl font-bold text-white">SWIFTCODE</h3>
                <p className="text-sm text-gray-400">Building Connections Seamlessly</p>
              </div>
            </Link>

            {/* Email Subscription */}
            <div className="mt-6">
              <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder={isJapanese ? 'メールアドレスを入力' : 'Enter Your Email'}
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="p-2 hover:bg-gray-700 transition-colors">
                  <i className="fa-light fa-paper-plane text-[#FF6B35]"></i>
                </button>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6 space-y-2">
              <div className="flex items-start space-x-2">
                <i className="fa-light fa-location-dot text-[#FF6B35] mt-1"></i>
                <p className="text-sm text-gray-400">{companyInfo.address}</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-light fa-phone text-[#FF6B35]"></i>
                <a href={`tel:${companyInfo.phone}`} className="text-sm text-gray-400 hover:text-[#FF6B35]">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fa-light fa-envelope text-[#FF6B35]"></i>
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-400 hover:text-[#FF6B35]">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerData.home.title}</h4>
            <ul className="space-y-2">
              {footerData.home.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerData.about.title}</h4>
            <ul className="space-y-2">
              {footerData.about.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerData.services.title}</h4>
            <ul className="space-y-2">
              {footerData.services.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{footerData.technologies.title}</h4>
            <ul className="space-y-2">
              {footerData.technologies.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {isJapanese
                ? 'このサイトでのご体験は、クッキーを許可することで改善されます'
                : 'Your experience on this site will be improved by allowing cookies'}{' '}
              <Link to="/cookie-policy" className="text-[#FF6B35] hover:underline">
                {isJapanese ? 'クッキーポリシー' : 'Cookie Policy'}
              </Link>
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              {isJapanese ? 'クッキーを許可' : 'ALLOW COOKIES'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

