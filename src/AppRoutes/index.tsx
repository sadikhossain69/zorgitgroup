import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Career from '@/pages/Career';
import Design from '@/pages/Design';
import Development from '@/pages/Development';
import Login from '@/pages/Login';
import Marketing from '@/pages/Marketing';
import Portfolio from '@/pages/Portfolio';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About';
import { Contact } from '../pages/Contact';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  const { pathname, hash, key } = useLocation();
  const handleScroll = () => {
    const element = document.getElementById(hash.replace('#', ''));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? 'smooth' : 'auto',
        top: element ? element.offsetTop : 0,
      });
    }, 200);
  };

  useEffect(() => {
    handleScroll();
  }, [pathname, hash, key]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/clients" element={<Testimonials />} /> */}
      <Route path="/design" element={<Design />} />
      <Route path="/development" element={<Development />} />
      <Route path="/digital-marketing" element={<Marketing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/career" element={<Career />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
