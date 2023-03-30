import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import SectionLayout from '../../layouts/SectionLayout';
import IconGroup from '../IconGroup';
import FooterLink, { bottomMenu, footerMenu } from './FooterMenu';

export default function Footer() {
  return (
    <SectionLayout classNames="bg-[#333333] mb-0">
      <footer className="grid grid-cols-1 px-8 pt-8 pb-10 mt-5 text-left text-white lg:gap-0 md:justify-items-center lg:pb-24 sm:px-0 sm:grid-cols-2 sm:gap-x-64 lg:gap-x-12 md:gap-x-10 md:grid-cols-4 md:px-5 lg:flex lg:justify-between md:text-left xl:flex xl:gap-16 2xl:px-4">
        {footerMenu.map((menu) => (
          <div key={menu.menuTitle} className="mb-8">
            <h6 className="font-semibold text-xl sm:text-[16px] mb-5">{menu.menuTitle}</h6>
            <div className="flex flex-col font-normal gap-2 lg:gap-1 text-[18px] md:text-[16px] whitespace-nowrap">
              {menu.subMenu.map((menuItem) => (
                <FooterLink key={menuItem.title} title={menuItem.title} to={menuItem.to} />
              ))}
            </div>
          </div>
        ))}
        <div className="mb-8 text-left sm:text-center lg:text-left lg:mt-0 sm:col-span-2 md:col-span-4 lg:col-span-1">
          <h6 className="font-semibold mb-3 text-xl sm:text-[16px]">Contact</h6>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 sm:justify-center">
              <div className="text-2xl">
                <FiMapPin />
              </div>
              <div className="text-[15px] sm:text-left">
                <p>Moar Banani 11, Ventura Iconia, Level 3, </p>
                <p>Holding 37, Road 11, Block H, Banani 1213 Dhaka, Bangladesh.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:justify-center lg:justify-start">
              <div className="ml-1 text-2xl">
                <FaRegEnvelope />
              </div>
              <p className="">zorgitgroup@gmail.com</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <h6 className="ml-1 text-xl sm:text-[16px] font-semibold mb-3">Follow Us</h6>
              <div className="flex flex-row gap-3 mt-2 sm:justify-center lg:justify-start">
                <IconGroup classNames="text-white hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="mb-8 border-b border-white sm:mx-16 lg:mx-24 xl:mx-32" />
      <div className="flex flex-wrap justify-center gap-5 mx-8 font-normal text-white sm:mx-0">
        {bottomMenu.map((menuItem) => (
          <FooterLink key={menuItem.title} title={menuItem.title} to={menuItem.to}></FooterLink>
        ))}
      </div>
      <p className="mt-12 mb-3 text-center text-white lg:mt-6">
        <small>&copy; {new Date().getFullYear()} All Rights Reserved</small>
      </p>
    </SectionLayout>
  );
}
