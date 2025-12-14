'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className={`flex items-center ${language === 'ar' ? 'order-2' : 'order-1'}`}>
            <div className="flex items-center gap-2">
              {/* Placeholder logo - replace with actual logo once uploaded to /public/images/logo.png */}
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">BOB</span>
              </div>
              {/* When logo.png is added, uncomment this:
              <Image 
                src="/images/logo.png" 
                alt="Best of Bedz Home Care Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              */}
              <div className="hidden md:block">
                <div className="text-lg font-bold text-primary-green">Best of Bedz</div>
                <div className="text-xs text-gray-600">Home Care</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-8 ${language === 'ar' ? 'order-1' : 'order-2'}`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-green' : 'text-white hover:text-gold-yellow'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA and Language Toggle */}
          <div className={`flex items-center gap-2 md:gap-4 ${language === 'ar' ? 'order-3' : 'order-3'}`}>
            <a
              href="tel:+201273518887"
              className="hidden sm:flex items-center gap-2 text-primary-green hover:text-royal-blue transition-colors"
              aria-label="Call us"
            >
              <span className={`text-sm font-medium ${isScrolled ? 'text-primary-green' : 'text-white'}`}>
                +20 127 351 8887
              </span>
            </a>
            <LanguageToggle />
            <button
              onClick={() => scrollToSection('#booking')}
              className="hidden md:block px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              {t.nav.bookNow}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-green"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary-green hover:bg-gray-50 rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#booking')}
                className="mx-4 px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium text-center"
              >
                {t.nav.bookNow}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
