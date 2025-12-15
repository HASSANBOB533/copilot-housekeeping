'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { calculatePrice, bedroomOptions, calculateBedroomPrice, calculateLaundryPrice } from '@/lib/pricing';
import { FaWhatsapp, FaCalculator } from 'react-icons/fa';
import { trackQuoteRequest } from '@/lib/analytics';

export default function PricingCalculator() {
  const { t, language } = useLanguage();
  const [serviceType, setServiceType] = useState('serviceApartments');
  const [size, setSize] = useState(0);
  const [bedroomSelection, setBedroomSelection] = useState('studio-1br');
  const [addOns, setAddOns] = useState({
    laundry: false,
    gardenSize: 0,
    kitchenDeep: false,
    upholsteryItems: {} as { [key: string]: number },
  });

  const serviceOptions = [
    { value: 'serviceApartments', label: t.services.serviceApartments.title, unit: t.calculator.bedrooms },
    { value: 'deepCleaning', label: t.services.deepCleaning.title, unit: t.calculator.squareMeters },
    { value: 'moveInOut', label: t.services.moveInOut.title + ' - ' + t.services.moveInOut.normal, unit: t.calculator.squareMeters },
    { value: 'moveInOutHeavy', label: t.services.moveInOut.title + ' - ' + t.services.moveInOut.heavy, unit: t.calculator.squareMeters },
    { value: 'periodical', label: t.services.periodical.title, unit: t.calculator.bedrooms },
    { value: 'upholstery', label: t.services.upholstery.title, unit: '' },
  ];

  const upholsteryItemsList = [
    { key: 'armchair', label: 'Armchair', price: 250 },
    { key: 'singleSeat', label: 'Single Seat Sofa', price: 350 },
    { key: 'twoSeater', label: '2-Seater Sofa', price: 400 },
    { key: 'threeSeater', label: '3-Seater Sofa', price: 600 },
    { key: 'fourSeater', label: '4-Seater Sofa', price: 800 },
    { key: 'lShape', label: 'L-Shape Sofa', price: 1000 },
    { key: 'sectional', label: 'Sectional Sofa', price: 1200 },
    { key: 'smallMattress', label: 'Small Mattress (120x200)', price: 400 },
    { key: 'largeMattress', label: 'Large Mattress (180x200)', price: 600 },
  ];

  // Calculate price based on service type
  const calculateEstimatedPrice = () => {
    if (serviceType === 'serviceApartments' || serviceType === 'periodical') {
      const selectedBedroom = bedroomOptions.find(opt => opt.key === bedroomSelection);
      const bedroomCount = selectedBedroom?.bedroomCount || 1;
      
      let price = calculateBedroomPrice(bedroomCount, serviceType);
      
      // Add laundry for service apartments
      if (serviceType === 'serviceApartments' && addOns.laundry) {
        price += calculateLaundryPrice(bedroomCount);
      }
      
      // Add kitchen deep clean for periodical
      if (serviceType === 'periodical' && addOns.kitchenDeep) {
        price += 250;
      }
      
      // Add garden
      if (addOns.gardenSize) {
        const gardenRate = serviceType === 'serviceApartments' ? 5 : 3;
        price += addOns.gardenSize * gardenRate;
      }
      
      // Add upholstery
      if (addOns.upholsteryItems) {
        Object.entries(addOns.upholsteryItems).forEach(([item, count]) => {
          const itemPrice = upholsteryItemsList.find(i => i.key === item)?.price || 0;
          price += itemPrice * count;
        });
      }
      
      return price;
    } else {
      return calculatePrice(serviceType, size, addOns);
    }
  };

  const estimatedPrice = calculateEstimatedPrice();

  const handleGetQuote = () => {
    trackQuoteRequest(serviceType, estimatedPrice);
    const service = serviceOptions.find(s => s.value === serviceType)?.label || '';
    
    let propertyInfo = '';
    if (serviceType === 'serviceApartments' || serviceType === 'periodical') {
      const selectedBedroom = bedroomOptions.find(opt => opt.key === bedroomSelection);
      propertyInfo = `Property: ${language === 'ar' ? selectedBedroom?.labelAr : selectedBedroom?.label}`;
    } else if (serviceType !== 'upholstery') {
      propertyInfo = `Property size: ${size} ${serviceOptions.find(s => s.value === serviceType)?.unit}`;
    }
    
    const message = `Hello! I'd like to get a quote for ${service}. ${propertyInfo}. Estimated price: ${estimatedPrice.toLocaleString()} EGP`;
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201273518887';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const showAddOns = () => {
    if (serviceType === 'serviceApartments') {
      return { laundry: true, garden: true, upholstery: true };
    }
    if (serviceType === 'deepCleaning') {
      return { kitchenDeep: true, garden: true, upholstery: true };
    }
    if (serviceType === 'periodical') {
      return { kitchenDeep: true, garden: true, upholstery: true };
    }
    if (serviceType === 'upholstery') {
      return { upholstery: true };
    }
    return {};
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
                  setBedroomSelection('studio-1br');
                  setAddOns({ laundry: false, gardenSize: 0, kitchenDeep: false, upholsteryItems: {} });
                }}
                className="w-full px-4 py-3 md:py-4 min-h-[48px] text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Size - Bedroom Dropdown for Service Apartments and Periodical */}
            {(serviceType === 'serviceApartments' || serviceType === 'periodical') && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {t.calculator.propertySize} ({t.calculator.bedrooms})
                </label>
                <select
                  value={bedroomSelection}
                  onChange={(e) => setBedroomSelection(e.target.value)}
                  className="w-full px-4 py-3 md:py-4 min-h-[48px] text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                >
                  {bedroomOptions.map((option) => (
                    <option key={option.key} value={option.key}>
                      {language === 'ar' ? option.labelAr : option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Property Size - Input for Other Services */}
            {serviceType !== 'upholstery' && serviceType !== 'serviceApartments' && serviceType !== 'periodical' && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {t.calculator.propertySize} ({serviceOptions.find(s => s.value === serviceType)?.unit})
                </label>
                <input
                  type="number"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  min="0"
                  className="w-full px-4 py-3 md:py-4 min-h-[48px] text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={`Enter ${serviceOptions.find(s => s.value === serviceType)?.unit}`}
                />
              </div>
            )}

            {/* Add-ons */}
            {Object.keys(showAddOns()).length > 0 && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {t.calculator.addOns}
                </label>
                <div className="space-y-4">
                  {showAddOns().laundry && (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addOns.laundry}
                        onChange={(e) => setAddOns({ ...addOns, laundry: e.target.checked })}
                        className="w-5 h-5 text-primary-green border-gray-300 rounded focus:ring-primary-green"
                      />
                      <span className="text-gray-700">{t.calculator.laundry}</span>
                    </label>
                  )}
                  
                  {showAddOns().garden && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Garden Size (m²)
                      </label>
                      <input
                        type="number"
                        value={addOns.gardenSize || ''}
                        onChange={(e) => setAddOns({ ...addOns, gardenSize: Number(e.target.value) })}
                        min="0"
                        className="w-full px-4 py-3 min-h-[48px] text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                        placeholder="Enter garden size in m²"
                      />
                    </div>
                  )}
                  
                  {showAddOns().kitchenDeep && (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addOns.kitchenDeep}
                        onChange={(e) => setAddOns({ ...addOns, kitchenDeep: e.target.checked })}
                        className="w-5 h-5 text-primary-green border-gray-300 rounded focus:ring-primary-green"
                      />
                      <span className="text-gray-700">
                        {serviceType === 'periodical' ? 'Kitchen Tools & Oven Clean' : t.calculator.kitchenDeep}
                      </span>
                    </label>
                  )}
                  
                  {showAddOns().upholstery && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upholstery Items
                      </label>
                      <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-3">
                        {upholsteryItemsList.map((item) => (
                          <div key={item.key} className="flex items-center gap-2">
                            <input
                              type="number"
                              value={addOns.upholsteryItems[item.key] || 0}
                              onChange={(e) => {
                                const value = Number(e.target.value);
                                const newItems = { ...addOns.upholsteryItems };
                                if (value > 0) {
                                  newItems[item.key] = value;
                                } else {
                                  delete newItems[item.key];
                                }
                                setAddOns({ ...addOns, upholsteryItems: newItems });
                              }}
                              min="0"
                              className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-1 focus:ring-primary-green"
                            />
                            <span className="text-sm text-gray-700 flex-1">{item.label}</span>
                            <span className="text-sm font-medium text-primary-green">{item.price} {t.common.egp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                {serviceType === 'upholstery' && estimatedPrice === 1500 && (
                  <div className="text-sm mt-3 bg-white/20 rounded-lg px-4 py-2">
                    Minimum order applies
                  </div>
                )}
                {serviceType === 'deepCleaning' && size > 0 && size < 50 && (
                  <div className="text-sm mt-3 bg-white/20 rounded-lg px-4 py-2">
                    Minimum order applies (50 m²)
                  </div>
                )}
                {(serviceType === 'moveInOut' || serviceType === 'moveInOutHeavy') && size > 0 && size < 50 && (
                  <div className="text-sm mt-3 bg-white/20 rounded-lg px-4 py-2">
                    Minimum order applies (50 m²)
                  </div>
                )}
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
