import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'BOB Home Care - Professional Cleaning Services in Egypt | Best of Bedz',
  description: 'Egypt\'s premier professional cleaning service with 10+ years of excellence. Service apartments, deep cleaning, move-in/out, periodical cleaning in Cairo & North Coast. 100% satisfaction guaranteed.',
  keywords: 'cleaning services egypt, professional cleaning cairo, home cleaning, deep cleaning, airbnb cleaning, service apartments, move in cleaning, north coast cleaning, new cairo cleaning, maadi cleaning, heliopolis cleaning, sheikh zayed cleaning',
  authors: [{ name: 'Best of Bedz Home Care' }],
  openGraph: {
    title: 'BOB Home Care - Professional Cleaning Services in Egypt',
    description: 'Egypt\'s premier professional cleaning service with 10+ years of excellence',
    url: 'https://www.bobhomecare.com',
    siteName: 'BOB Home Care',
    locale: 'en_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOB Home Care - Professional Cleaning Services',
    description: 'Egypt\'s premier professional cleaning service',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
              telephone: '+201000755755',
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
