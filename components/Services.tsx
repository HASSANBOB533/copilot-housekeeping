'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { serviceApartmentPricing, periodicalPricing, periodicalDiscounts } from '@/lib/pricing';

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'service-apartments',
      title: t.services.serviceApartments.title,
      subtitle: t.services.serviceApartments.subtitle,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-green text-white">
                <th className="px-4 py-3 text-left">{t.services.serviceApartments.bedrooms}</th>
                <th className="px-4 py-3 text-right">{t.services.serviceApartments.basePrice}</th>
                <th className="px-4 py-3 text-right">{t.services.serviceApartments.laundry}</th>
                <th className="px-4 py-3 text-right">{t.services.serviceApartments.gardenSmall}</th>
                <th className="px-4 py-3 text-right">{t.services.serviceApartments.gardenLarge}</th>
              </tr>
            </thead>
            <tbody>
              {serviceApartmentPricing.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium">{row.bedrooms}</td>
                  <td className="px-4 py-3 text-right">{row.basePrice.toLocaleString()} {t.common.egp}</td>
                  <td className="px-4 py-3 text-right">+{row.laundry.toLocaleString()} {t.common.egp}</td>
                  <td className="px-4 py-3 text-right">+{row.gardenSmall.toLocaleString()} {t.common.egp}</td>
                  <td className="px-4 py-3 text-right">+{row.gardenLarge.toLocaleString()} {t.common.egp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: 'deep-cleaning',
      title: t.services.deepCleaning.title,
      subtitle: t.services.deepCleaning.subtitle,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-green to-royal-blue text-white rounded-xl p-8 text-center">
            <div className="text-5xl font-bold mb-2">{t.services.deepCleaning.pricePerSqm}</div>
            <div className="text-xl">{t.services.deepCleaning.minimum}</div>
            <div className="mt-4 text-lg opacity-90">{t.services.deepCleaning.includesSteam}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-xl mb-2">{t.services.deepCleaning.kitchenAddon}</h4>
            <p className="text-2xl text-primary-green font-bold">{t.services.deepCleaning.kitchenPrice}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'move-in-out',
      title: t.services.moveInOut.title,
      subtitle: t.services.moveInOut.subtitle,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-royal-blue to-primary-green text-white rounded-xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">{t.services.moveInOut.normal}</h4>
            <div className="text-4xl font-bold mb-2">{t.services.moveInOut.normalPrice}</div>
            <div className="text-lg opacity-90">{t.services.moveInOut.normalMin}</div>
          </div>
          <div className="bg-gradient-to-br from-primary-green to-royal-blue text-white rounded-xl p-8 text-center">
            <h4 className="text-2xl font-bold mb-4">{t.services.moveInOut.heavy}</h4>
            <div className="text-4xl font-bold mb-2">{t.services.moveInOut.heavyPrice}</div>
            <div className="text-lg opacity-90">{t.services.moveInOut.heavyMin}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'periodical',
      title: t.services.periodical.title,
      subtitle: t.services.periodical.subtitle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-xl mb-4">{t.services.periodical.perVisit}</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {periodicalPricing.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="font-medium text-gray-700 mb-2">{item.bedrooms}</div>
                  <div className="text-2xl font-bold text-primary-green">
                    {item.pricePerVisit.toLocaleString()} {t.common.egp}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-gold-yellow to-bright-green rounded-xl p-6">
            <h4 className="font-bold text-xl mb-4 text-gray-800">{t.services.periodical.packageDiscounts}</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">{t.services.periodical.visits4}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">{t.services.periodical.visits8}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">{t.services.periodical.visits12}</div>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <div className="text-sm text-gray-600">{t.services.periodical.visits24}</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'upholstery',
      title: t.services.upholstery.title,
      subtitle: t.services.upholstery.subtitle,
      content: (
        <div className="space-y-6">
          <div className="bg-primary-green text-white rounded-xl p-6 text-center">
            <p className="text-xl font-bold">{t.services.upholstery.minimum}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-xl mb-2 text-gray-800">{t.services.upholstery.chairs}</h4>
              <p className="text-2xl text-primary-green font-bold">{t.services.upholstery.chairsPrice}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-xl mb-2 text-gray-800">{t.services.upholstery.sofas}</h4>
              <p className="text-2xl text-primary-green font-bold">{t.services.upholstery.sofasPrice}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <h4 className="font-bold text-xl mb-2 text-gray-800">{t.services.upholstery.mattresses}</h4>
              <p className="text-2xl text-primary-green font-bold">{t.services.upholstery.mattressesPrice}</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t.services.title}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm md:text-base transition-all ${
                activeTab === index
                  ? 'bg-primary-green text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {services[activeTab].title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              {services[activeTab].subtitle}
            </p>
            {services[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
}
