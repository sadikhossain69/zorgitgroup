import { ReactNode } from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import ScrollToTop from '../common/ScrollToTop';
import WhatsappIcon from '../common/WhatsappIcon';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <WhatsappIcon />
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
