import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bobhomecare.com'),
  title: 'BOB Home Care | Professional Cleaning Services in Egypt',
  description: 'Egypt\'s premier professional cleaning service with international hospitality standards. Serving Cairo & North Coast.',
  
  // Favicon configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'BOB Home Care | Professional Cleaning Services',
    description: 'Egypt\'s premier professional cleaning service with international hospitality standards. 10+ years of excellence.',
    url: 'https://www.bobhomecare.com',
    siteName: 'BOB Home Care',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BOB Home Care Professional Team',
      },
    ],
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'BOB Home Care | Professional Cleaning Services',
    description: 'Egypt\'s premier professional cleaning service with international hospitality standards.',
    images: ['/images/og-image.jpg'],
    creator: '@bob_homecare',
  },
  
  // Additional meta
  keywords: [
    'cleaning services Egypt',
    'home cleaning Cairo',
    'professional cleaning',
    'Airbnb cleaning',
    'deep cleaning Egypt',
    'move in move out cleaning',
    'North Coast cleaning services',
    'New Alamein cleaning',
    'خدمات تنظيف مصر',
    'تنظيف منازل القاهرة',
  ],
  
  authors: [{ name: 'BOB Home Care' }],
  creator: 'BOB Home Care',
  publisher: 'BOB Home Care',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  
  verification: {
    // Add when available
    // google: 'your-google-verification-code',
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00875A" />
        <meta name="msapplication-TileColor" content="#00875A" />
        
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
        
        {/* JSON-LD Schema */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Best of Bedz Home Care',
              alternateName: 'BOB Home Care',
              description: 'Professional cleaning services in Cairo and North Coast, Egypt',
              url: 'https://www.bobhomecare.com',
              telephone: '+201273518887',
              email: 'cs@bobhomecare.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Business Plus Complex',
                addressLocality: 'New Cairo',
                addressRegion: 'Cairo',
                addressCountry: 'EG',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.0444,
                longitude: 31.2357,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '09:00',
                closes: '21:00',
              },
              priceRange: '$$',
              sameAs: [
                'https://www.facebook.com/BestofBedzHomeCare/',
                'https://www.instagram.com/bob_homecare/',
                'https://www.youtube.com/@BOBHomeCare',
                'https://www.linkedin.com/company/best-of-bedz/',
              ],
              areaServed: [
                'New Cairo',
                'Maadi',
                'Zamalek',
                'Heliopolis',
                'Sheikh Zayed',
                '6th of October',
                'Nasr City',
                'New Alamein',
                'North Coast',
              ],
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
