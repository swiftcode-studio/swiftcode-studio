import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  isJapanese?: boolean;
}

export default function Header({ isJapanese = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navItems = isJapanese ? [
    { label: 'ホーム', href: '/ja' },
    { label: '会社概要', href: '/ja/about' },
    { label: 'サービス', href: '/ja/services' },
    { label: '技術', href: '/ja/technologies' },
    { label: 'お問い合わせ', href: '/ja/contact' },
  ] : [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Contact us', href: '/contact' },
  ];

  const contactButtonText = isJapanese ? 'お問い合わせ' : 'Contact us!';

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧', link: '/' },
    { code: 'ja', label: '日本語', flag: '🇯🇵', link: '/ja' },
  ];

  const currentLanguage = isJapanese ? languages[1] : languages[0];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to={isJapanese ? '/ja' : '/'} className="flex items-center space-x-3">
          <img src="/logo-new.svg" alt="Swiftcode Studio" className="h-10" />
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#FF6B35' }}>Swiftcode</h1>
            <p className="text-sm text-gray-600">Studio</p>
            <p className="text-xs text-gray-500">Code • Ship • Grow</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-gray-600 hover:text-[#FF6B35] transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-gray-300 hover:border-[#FF6B35] transition-all bg-white shadow-sm hover:shadow-md"
            >
              <span className="text-2xl">{currentLanguage.flag}</span>
              <i className={`fa-light fa-chevron-down text-xs text-gray-500 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* Dropdown Menu */}
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 animate-fade-in z-50">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    to={lang.link}
                    onClick={() => setLanguageDropdownOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 transition-colors ${
                      currentLanguage.code === lang.code ? 'bg-orange-50' : ''
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`font-medium ${
                      currentLanguage.code === lang.code ? 'text-[#FF6B35]' : 'text-gray-700'
                    }`}>
                      {lang.label}
                    </span>
                    {currentLanguage.code === lang.code && (
                      <i className="fa-light fa-check text-[#FF6B35] ml-auto"></i>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Contact Button */}
        <Link
          to={isJapanese ? '/ja/contact' : '/contact'}
          className="hidden lg:block bg-[#19857B] text-white px-6 py-2 rounded-lg hover:bg-[#156B62] transition-colors font-semibold"
        >
          {contactButtonText}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-600 hover:text-[#FF6B35] p-2"
        >
          <i className={`fa-light ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 hover:text-[#FF6B35] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase">{isJapanese ? '言語' : 'Language'}</p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    to={lang.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      currentLanguage.code === lang.code
                        ? 'border-[#FF6B35] bg-orange-50 text-[#FF6B35]'
                        : 'border-gray-300 hover:border-[#FF6B35] text-gray-700'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium text-sm">{lang.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to={isJapanese ? '/ja/contact' : '/contact'}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#19857B] text-white px-6 py-2 rounded-lg hover:bg-[#156B62] transition-colors font-semibold text-center"
            >
              {contactButtonText}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

