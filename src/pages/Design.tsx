import GlobalLayout from '@/components/layouts/GlobalLayout';
import React from 'react';
import designImg from '@images/design-page-header-image.png';
import Header from '@/components/common/Header';
import { data } from '@/components/Data/Design/data';
import ServiceBody from '@/components/common/ServiceBody';

export default function Design() {
  return (
    <GlobalLayout>
      <Header pageTitle="Design" image={designImg} path="/design" />
      <ServiceBody data={data} />
    </GlobalLayout>
  );
}
