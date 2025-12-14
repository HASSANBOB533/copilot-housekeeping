'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaMapMarkerAlt, FaUmbrellaBeach } from 'react-icons/fa';

export default function ServiceAreas() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t.serviceAreas.title}
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Cairo Areas */}
          <div className="bg-gradient-to-r from-primary-green to-royal-blue rounded-2xl p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-gold-yellow" size={32} />
              <h3 className="text-2xl font-bold">{t.serviceAreas.cairo}</h3>
            </div>
            <p className="text-lg leading-relaxed">
              {t.serviceAreas.cairoList}
            </p>
          </div>

          {/* North Coast Areas */}
          <div className="bg-gradient-to-r from-royal-blue to-bright-green rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gold-yellow text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
              {t.serviceAreas.northCoastBadge}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaUmbrellaBeach className="text-gold-yellow" size={32} />
              <h3 className="text-2xl font-bold">{t.serviceAreas.northCoast}</h3>
            </div>
            <p className="text-lg leading-relaxed">
              {t.serviceAreas.northCoastList}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
