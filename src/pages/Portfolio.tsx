import Header from '@/components/common/Header';
import Projects from '@/components/home/Projects';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import portfolioImg from '@images/work-portfolio-header-image.png';
import React from 'react';

export default function Portfolio() {
  return (
    <GlobalLayout>
      <Header pageTitle="Our Work Portfolio" image={portfolioImg} path="/portfolio" />
      <Projects />
    </GlobalLayout>
  );
}
