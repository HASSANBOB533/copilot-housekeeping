'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaSearch, FaFileInvoice, FaCalendarCheck, FaLock, FaBroom, FaCheckCircle } from 'react-icons/fa';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <FaSearch />,
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: <FaFileInvoice />,
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: <FaCalendarCheck />,
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
    {
      icon: <FaLock />,
      title: t.howItWorks.step4.title,
      description: t.howItWorks.step4.description,
    },
    {
      icon: <FaBroom />,
      title: t.howItWorks.step5.title,
      description: t.howItWorks.step5.description,
    },
    {
      icon: <FaCheckCircle />,
      title: t.howItWorks.step6.title,
      description: t.howItWorks.step6.description,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          {t.howItWorks.title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary-green to-royal-blue rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-white">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold-yellow rounded-full flex items-center justify-center text-gray-900 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-100">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
