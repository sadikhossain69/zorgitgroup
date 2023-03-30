import GlobalLayout from '@/components/layouts/GlobalLayout';
import React from 'react';
import developmentImg from '@images/development-page-header-image.png';
import Header from '@/components/common/Header';
import { data } from '@/components/Data/Development/data';
import SectionLayout from '@/components/layouts/SectionLayout';
import ServiceDetails from '@/components/common/ServiceDetails';
import ServiceBody from '@/components/common/ServiceBody';

export default function Development() {
  return (
    <GlobalLayout>
      <Header pageTitle="Development" image={developmentImg} path="/development" />
      <ServiceBody data={data} />
    </GlobalLayout>
  );
}
