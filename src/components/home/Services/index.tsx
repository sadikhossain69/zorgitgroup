import { Link } from 'react-router-dom';
import Title from '../../common/Title';
import SectionLayout from '../../layouts/SectionLayout';
import serviceData from './data';

export default function Services() {
  return (
    <SectionLayout>
      <div id="services">
        <Title title="Our Awesome Services" />
        <div className="flex flex-wrap justify-center mt-6">
          {serviceData.map((service) => {
            const { _id, content, icon, name, link } = service;
            return (
              <div key={_id} className="w-full px-4 mb-5 sm:w-1/2 lg:w-1/3">
                <Link to={link}>
                  <div className="flex flex-col items-center justify-center p-6 space-y-5 transition-all duration-500 bg-white border border-gray-200 cursor-pointer group lg:block hover:bg-red-200">
                    <img src={icon} alt={name} className="w-16 h-20 md:w-18 lg:w-20" />
                    <h4 className="text-xl font-semibold md:text-xl lg:text-2xl 2xl:text-3xl text-title">
                      {name}
                    </h4>
                    <p>{content}</p>
                    <button className="flex ml-auto">
                      <span className="mr-1 underline underline-offset-8">Explore More</span>{' '}
                      &#8594;
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayout>
  );
}
