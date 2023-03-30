import GlobalLayout from '@/components/layouts/GlobalLayout';
import React from 'react';
import marketingImg from '@images/digitalmarketing-page-header-image.png';
import Header from '@/components/common/Header';
import { data } from '@/components/Data/DigitalMarketing/data';
import ServiceBody from '@/components/common/ServiceBody';

export default function Marketing() {
  return (
    <GlobalLayout>
      <Header pageTitle="Digital Marketing" image={marketingImg} path="/digital-marketing" />
      <ServiceBody data={data} />
    </GlobalLayout>
  );
}
