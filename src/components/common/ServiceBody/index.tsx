import React from 'react';
import ServiceDetails from '../ServiceDetails';
import SectionLayout from '../../layouts/SectionLayout';

interface Props {
  data: {
    icon: string;
    title: string;
    details: string;
  }[];
}

export default function ServiceBody({ data }: Props) {
  return (
    <SectionLayout classNames="my-36 px-6 md:px-0 grid items-center grid-cols-1 gap-20 md:grid-cols-2">
      {data.map((service) => (
        <ServiceDetails
          key={service.title}
          icon={service.icon}
          title={service.title}
          details={service.details}
        />
      ))}
    </SectionLayout>
  );
}
