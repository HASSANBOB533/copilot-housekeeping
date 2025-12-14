'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer,
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer,
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer,
    },
    {
      question: t.faq.q4.question,
      answer: t.faq.q4.answer,
    },
    {
      question: t.faq.q5.question,
      answer: t.faq.q5.answer,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t.faq.title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 min-h-[56px] flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-base md:text-lg text-gray-800 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary-green flex-shrink-0" size={20} />
                ) : (
                  <FaChevronDown className="text-primary-green flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
