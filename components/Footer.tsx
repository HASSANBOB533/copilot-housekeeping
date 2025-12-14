'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold-yellow">{t.footer.contact}</h3>
              <div className="space-y-3">
                <a href="tel:01000755755" className="flex items-start gap-3 hover:text-gold-yellow transition-colors">
                  <FaPhone className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{t.footer.phone}</div>
                    <div className="text-sm text-gray-400">01000755755</div>
                  </div>
                </a>
                <a href="mailto:cs@bobhomecare.com" className="flex items-start gap-3 hover:text-gold-yellow transition-colors">
                  <FaEnvelope className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{t.footer.email}</div>
                    <div className="text-sm text-gray-400">cs@bobhomecare.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400">{t.footer.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400">{t.footer.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cairo Areas */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold-yellow">{t.serviceAreas.cairo}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>New Cairo (HQ)</li>
                <li>Maadi</li>
                <li>Zamalek</li>
                <li>Heliopolis</li>
                <li>Sheikh Zayed</li>
                <li>6th of October</li>
                <li>Nasr City</li>
                <li>Rehab City</li>
              </ul>
            </div>

            {/* North Coast Areas */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold-yellow">
                {t.serviceAreas.northCoast}
                <span className="ml-2 text-xs bg-gold-yellow text-gray-900 px-2 py-1 rounded">
                  {t.serviceAreas.northCoastBadge}
                </span>
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>New Alamein</li>
                <li>Sidi Abdelrahman</li>
                <li>Hacienda Bay</li>
                <li>Marassi</li>
                <li>Almaza Bay</li>
                <li>Telal</li>
                <li>Fouka Bay</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gold-yellow">{t.footer.followUs}</h3>
              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.facebook.com/BestofBedzHomeCare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold-yellow transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/bob_homecare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold-yellow transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/@BOBHomeCare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold-yellow transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/company/best-of-bedz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold-yellow transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/201000755755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold-yellow transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>

              <div>
                <h4 className="font-bold mb-2">{t.footer.paymentMethods}</h4>
                <div className="text-sm text-gray-400">
                  Cash, Credit Card, Bank Transfer
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-primary-green text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Back to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}
