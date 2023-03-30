import SectionLayout from '@/components/layouts/SectionLayout';
import React from 'react';
import Breadcrumb from '../Breadcrumbs';
import Navbar from '../Navbar';

export default function Header({
  pageTitle,
  image,
  path,
}: {
  pageTitle: string;
  image: string;
  path: string;
}) {
  return (
    <div className="md:bg-[url('@images/headerLeftBg.png')] object-cover bg-left-top">
      <Navbar />
      <header className="relative grid md:grid-cols-2 sm:grid-cols-1 md:bg-[url('@images/headerLeftBg.png')] bg-cover bg-no-repeat bg-top-left">
        <div className="flex items-center justify-center mt-16 ">
          <SectionLayout>
            <div className="absolute w-full py-4 text-center -translate-x-1/2 -translate-y-1/2 md:mt-16 md:ml-48 bg-white/60 md:bg-transparent md:static left-1/2 top-1/2">
              <h1 className="mb-4 text-4xl font-semibold md:text-5xl whitespace-nowrap md:whitespace-normal text-primary-dark">
                {pageTitle}
              </h1>
              <Breadcrumb pageTitle={pageTitle} path={path} />
            </div>
          </SectionLayout>
        </div>
        <div className="order-first md:order-last md:ml-12 lg:ml-20">
          <div className="md:ml-12">
            <img
              className="w-full h-[480px] rounded-bl-3xl object-cover"
              src={image}
              alt="headerRightImg"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
