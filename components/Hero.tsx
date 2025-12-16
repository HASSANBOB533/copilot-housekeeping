'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function Hero() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201273518887';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.hero.whatsappUs)}`, '_blank');
  };

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/118508883/IaDgTOdNKUSmiuuG.jpg)' }}
      >
        {/* Overlay removed temporarily to verify image is loading */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-gray-100">
            {t.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToBooking}
              className="w-full sm:w-auto px-8 py-4 bg-gold-yellow text-gray-900 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.hero.bookNow}
            </button>
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary-green rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              {t.hero.getFreeQuote}
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={24} />
              {t.hero.whatsappUs}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
            {[
              { label: '10+ Years', sublabel: 'Experience' },
              { label: '1000+', sublabel: 'Happy Clients' },
              { label: '100%', sublabel: 'Satisfaction' },
              { label: '24/7', sublabel: 'Support' },
            ].map((badge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="flex items-center justify-center mb-2">
                  <FaCheckCircle className="text-gold-yellow" size={20} />
                </div>
                <div className="text-lg md:text-2xl font-bold">{badge.label}</div>
                <div className="text-xs md:text-sm text-gray-200">{badge.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
