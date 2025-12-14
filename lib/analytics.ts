declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrDate?: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

export const trackBookingClick = (service: string) => {
  event('booking_click', {
    event_category: 'engagement',
    event_label: service,
  });
};

export const trackQuoteRequest = (service: string, price: number) => {
  event('quote_request', {
    event_category: 'conversion',
    event_label: service,
    value: price,
  });
};

export const trackWhatsAppClick = (source: string) => {
  event('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
  });
};
