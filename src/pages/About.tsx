import Team from '@/components/AboutUs/Team';
import Header from '@/components/common/Header';
import AboutUs from '@/components/common/AboutUs/AboutUs';
import Stacks from '@/components/home/Stacks';
import React from 'react';
import GlobalLayout from '../components/layouts/GlobalLayout';
import aboutUsImg from '@images/aboutHeader.png';

export default function About() {
  return (
    <GlobalLayout>
      <Header pageTitle="About Us" image={aboutUsImg} path="/about-us" />
      <AboutUs showButton={false} showExtraText={true} />
      <Team />
      <Stacks />
    </GlobalLayout>
  );
}
