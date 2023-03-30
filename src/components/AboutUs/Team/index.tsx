import React from 'react';
import Title from '../../common/Title';
import SectionLayout from '../../layouts/SectionLayout';
import { fakeTeamData } from './data';

const Team = () => {
  return (
    <SectionLayout classNames="mt-8">
      <Title title="Meet Our Team Members" />
      <p className="px-2 mb-8 text-sm text-center sm:px-24 lg:px-48">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and{' '}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {fakeTeamData.map((data) => (
          <div
            className="relative z-10 h-[350px] mx-16 my-4 sm:my-0 sm:mx-0 bg-white rounded-md shadow-md"
            key={data.id}
          >
            <div className="absolute top-0 left-0 w-full bg-red-50 h-1/2 -z-10"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img
                className={`rounded-full object-cover h-[100px] w-[100px] md:h-[120px] md:w-[120px]`}
                src={data.image}
                alt="team-member"
              />
            </div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2">
              <h5 className="mt-4 text-2xl font-medium text-sub-title whitespace-nowrap text-center">
                {data.name}
              </h5>
              <p className="my-4 text-sm font-normal text-center text-paragraph">{data.position}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Team;
