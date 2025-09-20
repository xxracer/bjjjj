import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
