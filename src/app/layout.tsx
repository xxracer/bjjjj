import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    default: 'Jiu Jitsu in Katy TX | Reign Jiu Jitsu Academy',
    template: `%s | Reign Jiu Jitsu Academy`,
  },
  description: 'Family-friendly Jiu Jitsu in Katy, TX. Kids, adults, and competition training at Reign Jiu Jitsu. Book your free trial class today.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <div className="flex-1 md:pl-64">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
