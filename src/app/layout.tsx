import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import { SideNav } from '@/components/layout/sidenav';

export const metadata: Metadata = {
  title: {
    default: 'Jiu Jitsu in Katy TX | Reign Jiu Jitsu Academy',
    template: `%s | Reign Jiu Jitsu Academy`,
  },
  description: 'Family-friendly Jiu Jitsu in Katy, TX. Kids, adults, and competition training at Reign Jiu Jitsu. Book your free trial class today.',
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
      <body className="bg-background text-foreground">
        <div className="flex min-h-screen">
          <SideNav />
          <div className="flex-1 flex flex-col ml-0 md:ml-64">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}