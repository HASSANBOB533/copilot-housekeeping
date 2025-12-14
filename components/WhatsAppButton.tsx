'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { trackWhatsAppClick } from '@/lib/analytics';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201273518887';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick('floating_button');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I'm interested in your cleaning services.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
}
