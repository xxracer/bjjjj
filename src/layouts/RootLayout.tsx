import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import styles from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
