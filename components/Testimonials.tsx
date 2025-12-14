'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.testimonial1.name,
      role: t.testimonials.testimonial1.role,
      text: t.testimonials.testimonial1.text,
    },
    {
      name: t.testimonials.testimonial2.name,
      role: t.testimonials.testimonial2.role,
      text: t.testimonials.testimonial2.text,
    },
    {
      name: t.testimonials.testimonial3.name,
      role: t.testimonials.testimonial3.role,
      text: t.testimonials.testimonial3.text,
    },
    {
      name: t.testimonials.testimonial4.name,
      role: t.testimonials.testimonial4.role,
      text: t.testimonials.testimonial4.text,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-royal-blue to-primary-green">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          {t.testimonials.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <FaQuoteLeft className="text-primary-green text-4xl mb-4" />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-gold-yellow" />
                ))}
              </div>
              <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
