'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';
import { trackBookingClick } from '@/lib/analytics';

export default function BookingForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    propertySize: '',
    area: '',
    preferredDate: '',
    notes: '',
  });

  const services = [
    t.services.serviceApartments.title,
    t.services.deepCleaning.title,
    t.services.moveInOut.title,
    t.services.periodical.title,
    t.services.upholstery.title,
  ];

  const areas = [
    'New Cairo',
    'Maadi',
    'Zamalek',
    'Heliopolis',
    'Sheikh Zayed',
    '6th of October',
    'Nasr City',
    'Rehab City',
    'Katameya',
    'Shorouk',
    'New Alamein',
    'Sidi Abdelrahman',
    'Hacienda Bay',
    'Marassi',
    'Almaza Bay',
    'Telal',
    'Fouka Bay',
  ];

  const sanitizeInput = (input: string): string => {
    return input.replace(/[<>]/g, '').trim();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    trackBookingClick(formData.serviceType);

    const message = `
New Booking Request:
Name: ${sanitizeInput(formData.name)}
Phone: ${sanitizeInput(formData.phone)}
Email: ${sanitizeInput(formData.email)}
Service: ${sanitizeInput(formData.serviceType)}
Property Size: ${sanitizeInput(formData.propertySize)}
Area: ${sanitizeInput(formData.area)}
Preferred Date: ${sanitizeInput(formData.preferredDate)}
Notes: ${sanitizeInput(formData.notes)}
    `.trim();

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201000755755';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary-green to-royal-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            {t.booking.title}
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={t.booking.name}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={t.booking.phone}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={t.booking.email}
                />
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.serviceType} *
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                >
                  <option value="">{t.booking.selectService}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Size */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.propertySize}
                </label>
                <input
                  type="text"
                  value={formData.propertySize}
                  onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={t.booking.propertySize}
                />
              </div>

              {/* Area */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.area} *
                </label>
                <select
                  required
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                >
                  <option value="">{t.booking.selectArea}</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.preferredDate}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {t.booking.notes}
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder={t.booking.notes}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaWhatsapp size={24} />
                {t.booking.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
