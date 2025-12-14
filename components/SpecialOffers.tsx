'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaBriefcase, FaGift, FaBolt } from 'react-icons/fa';

export default function SpecialOffers() {
  const { t } = useLanguage();

  const offers = [
    {
      icon: <FaBriefcase />,
      title: t.offers.propertyManager.title,
      description: t.offers.propertyManager.description,
      color: 'from-royal-blue to-primary-green',
    },
    {
      icon: <FaGift />,
      title: t.offers.referral.title,
      description: t.offers.referral.description,
      color: 'from-primary-green to-bright-green',
    },
    {
      icon: <FaBolt />,
      title: t.offers.emergency.title,
      description: t.offers.emergency.description,
      color: 'from-gold-yellow to-bright-green',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t.offers.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${offer.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-white`}
            >
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
              <p className="text-lg">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
