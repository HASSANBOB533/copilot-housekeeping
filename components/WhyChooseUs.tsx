'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FaCheckCircle, FaTimesCircle, FaShieldAlt, FaLeaf, FaUsers, FaStar, FaClipboardCheck, FaTools } from 'react-icons/fa';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const comparisonData = [
    { we: t.different.equipment, they: t.different.youProvide },
    { we: t.different.supplies, they: t.different.youBuy },
    { we: t.different.steam, they: t.different.notAvailable },
    { we: t.different.trained, they: t.different.basicLabor },
    { we: t.different.guarantee, they: t.different.noRecourse },
    { we: t.different.supervision, they: t.different.noOversight },
  ];

  const features = [
    {
      icon: <FaStar className="text-gold-yellow" />,
      title: t.whyChooseUs.experience.title,
      description: t.whyChooseUs.experience.description,
    },
    {
      icon: <FaUsers className="text-royal-blue" />,
      title: t.whyChooseUs.trained.title,
      description: t.whyChooseUs.trained.description,
    },
    {
      icon: <FaLeaf className="text-bright-green" />,
      title: t.whyChooseUs.ecoFriendly.title,
      description: t.whyChooseUs.ecoFriendly.description,
    },
    {
      icon: <FaShieldAlt className="text-primary-green" />,
      title: t.whyChooseUs.guarantee.title,
      description: t.whyChooseUs.guarantee.description,
    },
    {
      icon: <FaClipboardCheck className="text-royal-blue" />,
      title: t.whyChooseUs.checklists.title,
      description: t.whyChooseUs.checklists.description,
    },
    {
      icon: <FaTools className="text-gold-yellow" />,
      title: t.whyChooseUs.equipment.title,
      description: t.whyChooseUs.equipment.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* What Makes Us Different */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t.different.title}
          </h2>
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-green to-royal-blue text-white">
                    <th className="px-6 py-4 text-left font-bold text-lg">
                      {t.different.weInclude}
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-lg">
                      {t.different.budgetCompetitors}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                    >
                      <td className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-start gap-3">
                          <FaCheckCircle className="text-bright-green mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-800">{row.we}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-start gap-3">
                          <FaTimesCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-600">{row.they}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Why Choose Us Features */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t.whyChooseUs.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
