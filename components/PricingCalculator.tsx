'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { calculatePrice } from '@/lib/pricing';
import { FaWhatsapp, FaCalculator } from 'react-icons/fa';
import { trackQuoteRequest } from '@/lib/analytics';

export default function PricingCalculator() {
  const { t } = useLanguage();
  const [serviceType, setServiceType] = useState('serviceApartments');
  const [size, setSize] = useState(0);
  const [addOns, setAddOns] = useState({
    laundry: false,
    gardenSmall: false,
    gardenLarge: false,
    kitchenDeep: false,
  });

  const serviceOptions = [
    { value: 'serviceApartments', label: t.services.serviceApartments.title, unit: t.calculator.bedrooms },
    { value: 'deepCleaning', label: t.services.deepCleaning.title, unit: t.calculator.squareMeters },
    { value: 'moveInOut', label: t.services.moveInOut.title + ' - ' + t.services.moveInOut.normal, unit: t.calculator.squareMeters },
    { value: 'moveInOutHeavy', label: t.services.moveInOut.title + ' - ' + t.services.moveInOut.heavy, unit: t.calculator.squareMeters },
    { value: 'periodical', label: t.services.periodical.title, unit: t.calculator.bedrooms },
    { value: 'upholstery', label: t.services.upholstery.title, unit: '' },
  ];

  const estimatedPrice = calculatePrice(serviceType, size, addOns);

  const handleGetQuote = () => {
    trackQuoteRequest(serviceType, estimatedPrice);
    const service = serviceOptions.find(s => s.value === serviceType)?.label || '';
    const message = `Hello! I'd like to get a quote for ${service}. Property size: ${size} ${serviceOptions.find(s => s.value === serviceType)?.unit}. Estimated price: ${estimatedPrice.toLocaleString()} EGP`;
    window.open(`https://wa.me/201000755755?text=${encodeURIComponent(message)}`, '_blank');
  };

  const showAddOns = () => {
    if (serviceType === 'serviceApartments') {
      return ['laundry', 'gardenSmall', 'gardenLarge'];
    }
    if (serviceType === 'deepCleaning') {
      return ['kitchenDeep'];
    }
    return [];
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary-green to-royal-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <FaCalculator className="inline-block text-gold-yellow mb-4" size={48} />
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.calculator.title}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Service Type Selection */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                {t.calculator.selectService}
              </label>
              <select
                value={serviceType}
                onChange={(e) => {
                  setServiceType(e.target.value);
                  setSize(0);
                  setAddOns({ laundry: false, gardenSmall: false, gardenLarge: false, kitchenDeep: false });
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Size */}
            {serviceType !== 'upholstery' && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {t.calculator.propertySize} ({serviceOptions.find(s => s.value === serviceType)?.unit})
                </label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={`Enter ${serviceOptions.find(s => s.value === serviceType)?.unit}`}
                />
              </div>
            )}

            {/* Add-ons */}
            {showAddOns().length > 0 && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {t.calculator.addOns}
                </label>
                <div className="space-y-3">
                  {showAddOns().map((addon) => (
                    <label key={addon} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addOns[addon as keyof typeof addOns]}
                        onChange={(e) => setAddOns({ ...addOns, [addon]: e.target.checked })}
                        className="w-5 h-5 text-primary-green border-gray-300 rounded focus:ring-primary-green"
                      />
                      <span className="text-gray-700">
                        {addon === 'laundry' && t.calculator.laundry}
                        {addon === 'gardenSmall' && t.calculator.gardenSmall}
                        {addon === 'gardenLarge' && t.calculator.gardenLarge}
                        {addon === 'kitchenDeep' && t.calculator.kitchenDeep}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Estimated Price */}
            <div className="bg-gradient-to-r from-primary-green to-royal-blue text-white rounded-xl p-6 mb-6">
              <div className="text-center">
                <div className="text-lg mb-2">{t.calculator.estimatedPrice}</div>
                <div className="text-5xl font-bold">
                  {estimatedPrice.toLocaleString()} {t.common.egp}
                </div>
              </div>
            </div>

            {/* Get Quote Button */}
            <button
              onClick={handleGetQuote}
              className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaWhatsapp size={24} />
              {t.calculator.getQuote}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
