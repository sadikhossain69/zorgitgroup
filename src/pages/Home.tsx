import Clients from '@/components/home/Clients';
import Projects from '@/components/home/Projects';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import React from 'react';
import AboutUs from '@/components/common/AboutUs/AboutUs';
import Header from '../components/home/header/Header';
import Stacks from '../components/home/Stacks';
import GlobalLayout from '../components/layouts/GlobalLayout';


export default function Home() {
  return (
    <GlobalLayout>
      <Header />
      <Clients />
      <Services />
      <Projects />
      <AboutUs />
      {/* <Testimonials /> */}
      <Stacks />
    </GlobalLayout>
  );
}
