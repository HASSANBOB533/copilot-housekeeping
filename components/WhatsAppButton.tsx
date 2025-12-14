'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackWhatsAppClick('floating_button');
    window.open(`https://wa.me/201000755755?text=Hello! I'm interested in your cleaning services.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </button>
  );
}
