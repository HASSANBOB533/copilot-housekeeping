import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://pricing.bobhomecare.com'),
  title: 'BOB Home Care | Get Instant Pricing for Cleaning Services',
  description: 'Calculate your cleaning service price instantly. Professional cleaning for homes, Airbnb, and offices in Cairo & North Coast. 10+ years of excellence.',
  
  // Favicon configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'BOB Home Care | Get Instant Pricing for Cleaning Services',
    description: 'Calculate your cleaning service price instantly. Professional team with 10+ years of excellence serving Cairo & North Coast.',
    url: 'https://pricing.bobhomecare.com',
    siteName: 'BOB Home Care',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BOB Home Care Professional Cleaning Team',
      },
    ],
    locale: 'en_EG',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'BOB Home Care | Get Instant Pricing',
    description: 'Calculate your cleaning service price instantly. Professional team serving Cairo & North Coast.',
    images: ['/images/og-image.jpg'],
    creator: '@bob_homecare',
  },
  
  // Additional meta
  keywords: [
    'cleaning services pricing Egypt',
    'cleaning cost calculator',
    'home cleaning prices Cairo',
    'professional cleaning rates',
    'Airbnb cleaning pricing',
    'deep cleaning cost Egypt',
    'move in move out cleaning price',
    'North Coast cleaning services',
    'New Alamein cleaning',
    'instant cleaning quote',
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
              url: 'https://pricing.bobhomecare.com',
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
