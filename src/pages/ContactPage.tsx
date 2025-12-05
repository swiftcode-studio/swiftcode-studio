import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactPageProps {
  isJapanese?: boolean;
}

export default function ContactPage({ isJapanese = false }: ContactPageProps) {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const content = isJapanese ? {
    hero: {
      badge: 'お問い合わせ',
      title: '私たちのチームに連絡してください！',
      description: '何でお困りですか、何をお探しですか？私たちはあなたを助けるためにここにいます！'
    },
    form: {
      nameLabel: 'お名前',
      namePlaceholder: 'お名前を入力してください',
      emailLabel: 'メール',
      emailPlaceholder: 'メールアドレスを入力してください',
      contentLabel: 'メッセージ',
      contentPlaceholder: 'メッセージを入力してください',
      submit: '送信',
      recaptcha: 'サイト所有者のエラー：無効なサイトキー'
    },
    contact: {
      call: {
        title: 'お電話',
        hours: 'オンライン月-金 午前8時-午後5時',
        phone: '(+84) 35-543-0828'
      },
      email: {
        title: 'メールサポート',
        description: '私たちのチームはリアルタイムで対応できます。',
        address: 'business@swiftcode-studio.com'
      },
      visit: {
        title: '私たちのオフィスを訪問',
        description: '実際の場所で私たちの場所を訪問してください。',
        address: 'ハノイ市、ディンコン区、ディンコン通り239番地の路地12番'
      }
    },
    map: {
      badge: '地図を見る',
      address: 'ハノイ市、ディンコン区、ディンコン通り239番地の路地12番、ベトナム'
    },
    cta: {
      title: 'あなたの生産性を最大化する準備はできていますか？',
      description: '質は果実です。私たちは、お客様の目標を達成し、成功と共に成長するために、クライアントに力を与えます。',
      button: 'お問い合わせ'
    }
  } : {
    hero: {
      badge: 'Get in Touch',
      title: 'Contact our Team!',
      description: 'Please tell us what are you struggling with, what you are looking for? We are here to help you!'
    },
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your Name',
      emailLabel: 'Email',
      emailPlaceholder: 'Your Email',
      contentLabel: 'Content',
      contentPlaceholder: 'Write your message here',
      submit: 'Send',
      recaptcha: 'ERROR for site owner: Invalid site key'
    },
    contact: {
      call: {
        title: 'Call us',
        hours: 'Online Mon-Fri from 8 am to 5 pm',
        phone: '(+84) 35-543-0828'
      },
      email: {
        title: 'Email Support',
        description: 'Our team can respond in real time.',
        address: 'business@swiftcode-studio.com'
      },
      visit: {
        title: 'Visit Our Office',
        description: 'Visit our location in real life.',
        address: 'No. 12, Alley 239 Dinh Cong, Dinh Cong Ward, Hanoi'
      }
    },
    map: {
      badge: 'Go to map',
      address: 'No. 12, Alley 239 Dinh Cong, Dinh Cong Ward, Hanoi, Vietnam'
    },
    cta: {
      title: 'Get Ready to Maximize Your Productivity With Our Workstyle Solutions',
      description: 'Quality is the fruit. We empower our clients to achieve their goals and grow together with their success.',
      button: 'Contact us!'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isJapanese={isJapanese} />

      {/* Hero Section */}
      <section className="relative network-bg py-20 overflow-hidden">
        <div className="absolute inset-0 network-dots opacity-30" />
        <div className="network-line" style={{ top: '40%' }} />
        <div className="glow-dot" style={{ top: '40%', left: '15%' }} />
        <div className="glow-dot" style={{ top: '40%', right: '15%', background: '#FF6B35', boxShadow: '0 0 10px #FF6B35' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-500/30 scroll-animate">
              <span className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                <i className="fa-light fa-envelope text-orange-600"></i>
                <span className="text-orange-600 font-semibold">{content.hero.badge}</span>
              </span>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {content.hero.title}
              </h1>
              <p className="text-slate-700 mb-8 font-medium text-lg">
                {content.hero.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    {content.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={content.form.namePlaceholder}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder-slate-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    {content.form.emailLabel} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={content.form.emailPlaceholder}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-slate-900 placeholder-slate-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    {content.form.contentLabel} *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder={content.form.contentPlaceholder}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none text-slate-900 placeholder-slate-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl shadow-lg"
                >
                  {content.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              {/* Team Illustration */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8 scroll-animate-scale border-2 border-blue-500/30">
                <img
                  src="/images/office-illustration.svg"
                  alt="Office"
                  className="w-full h-80 object-contain"
                />
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 rounded-xl border-2 border-orange-500/40 scroll-animate bg-white" style={{ transitionDelay: '0.1s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <i className="fa-light fa-phone text-2xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">{content.contact.call.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{content.contact.call.hours}</p>
                      <a href={`tel:${content.contact.call.phone}`} className="text-base font-bold hover:underline text-orange-600">
                        {content.contact.call.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border-2 border-blue-500/40 scroll-animate bg-white" style={{ transitionDelay: '0.2s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <i className="fa-light fa-envelope text-2xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">{content.contact.email.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{content.contact.email.description}</p>
                      <a href={`mailto:${content.contact.email.address}`} className="text-base font-bold hover:underline text-blue-600">
                        {content.contact.email.address}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border-2 border-purple-500/40 scroll-animate bg-white" style={{ transitionDelay: '0.3s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <i className="fa-light fa-location-dot text-2xl text-white"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-slate-900 mb-1 text-lg">{content.contact.visit.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{content.contact.visit.description}</p>
                      <p className="text-base font-bold text-purple-600">
                        {content.contact.visit.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 scroll-animate">
            <span className="tech-badge mb-4">
              <i className="fa-light fa-map-location-dot text-orange-600"></i>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-semibold">
                {content.map.badge}
              </span>
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {content.map.address}
            </h2>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl scroll-animate-scale border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.64317003348054!2d105.83317101791995!3d20.981747480435754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac5ef20c5dfd%3A0x21c9df5cbaf8a146!2zTmcuIDIzOSDEkOG7i25oIEPDtG5nLCDEkOG7i25oIEPDtG5nIEjhuqEsIMSQ4buLbmggQ8O0bmcsIEhvw6BuZyBNYWksIEjDoCBO4buZaSwgVmlldG5hbQ!5e1!3m2!1sen!2s!4v1764934341263!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
              <button className="tech-button inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1 hover:shadow-2xl glow-effect shadow-lg">
                <span className="relative z-10">{content.cta.button}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer isJapanese={isJapanese} />
    </div>
  );
}

