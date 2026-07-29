import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import FloatingActions from '@/components/ui/FloatingActions';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shynsignaturesalon.vercel.app'),
  title: 'SHYN Signature Salon | Luxury Hair, Skin & Korean Spa in Erode',
  description:
    'Experience world-class luxury beauty, precision hair styling, Korean Hair Spa, skin treatments, and bridal makeup at SHYN Signature Salon in Erode. Rated 5.0 Stars on Google.',
  keywords: [
    'SHYN Signature Salon',
    'Luxury Salon Erode',
    'Korean Hair Spa Erode',
    'Best Hair Salon in Erode',
    'Bridal Makeup Erode',
    'Hair Botox Erode',
    'Skin Care Salon Erode',
    'Unisex Salon EVN Road Erode',
  ],
  authors: [{ name: 'SHYN Signature Salon' }],
  creator: 'SHYN Signature Salon',
  publisher: 'SHYN Signature Salon',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: 'https://shynsignaturesalon.vercel.app',
  },
  openGraph: {
    title: 'SHYN Signature Salon | Luxury Beauty & Korean Hair Spa Erode',
    description:
      'Where Beauty Meets Perfection. Premier unisex salon offering Korean Hair Spa, advanced skin treatments, hair styling & bridal luxury in Erode.',
    url: 'https://shynsignaturesalon.vercel.app',
    siteName: 'SHYN Signature Salon',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'SHYN Signature Salon Luxury Interior',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHYN Signature Salon | Luxury Hair & Beauty Erode',
    description:
      'Experience luxury hair styling, Korean Hair Spa & bridal makeover in Erode. 5.0 Google Rated.',
    images: ['/images/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'SHYN Signature Salon',
  image: 'https://shynsignaturesalon.vercel.app/images/hero-bg.png',
  '@id': 'https://shynsignaturesalon.vercel.app',
  url: 'https://shynsignaturesalon.vercel.app',
  telephone: '+916382748121',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'EVN Road, Periyar Nagar',
    addressLocality: 'Erode',
    addressRegion: 'Tamil Nadu',
    postalCode: '638001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.341,
    longitude: 77.7172,
  },
  openingHoursSpecification: [
    {
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
      opens: '09:30',
      closes: '20:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '24',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/shynsignaturesalon/',
    'https://maps.app.goo.gl/MddbA8Tpy49nztn68',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#0F0F0F] text-[#F7F7F7] antialiased selection:bg-[#D4AF37] selection:text-[#0F0F0F]">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
