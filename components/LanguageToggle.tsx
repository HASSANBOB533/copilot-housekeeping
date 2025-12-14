'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="px-4 py-2 rounded-lg bg-primary-green text-white hover:bg-opacity-90 transition-colors"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
