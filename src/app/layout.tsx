import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: {
    default: 'Jiu Jitsu in Katy TX | Reign Jiu Jitsu Academy',
    template: `%s | Reign Jiu Jitsu Academy`,
  },
  description:
    'Family-friendly Jiu Jitsu in Katy, TX. Kids, adults, and competition training at Reign Jiu Jitsu. Book your free trial class today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Reign BJJ Academy",
              "image": "https://reignbjj.com/logo.png",
              "@id": "https://reignbjj.com/",
              "url": "https://reignbjj.com/",
              "telephone": "+1-281-206-7861",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1648A S Mason Rd.",
                "addressLocality": "Katy",
                "addressRegion": "TX",
                "postalCode": "77450",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.7506",
                "longitude": "-95.7480"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "11:00",
                  "closes": "21:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/reignbjj",
                "https://www.instagram.com/reignbjj"
              ]
            }
          `}
        </script>
      </head>
      <body className="bg-background text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
