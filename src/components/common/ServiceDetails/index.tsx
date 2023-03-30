import React from 'react';

interface Props {
  icon: string;
  title: string;
  details: string;
}

export default function ServiceDetails({ icon, title, details }: Props) {
  return (
    <div className="flex items-start justify-center gap-10 py-6 pl-12 transition duration-300 ease-in-out group hover:shadow-md">
      <div className="relative mt-8">
        <div className="absolute flex items-center justify-center w-16 h-16 p-2 -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 top-1/2 bg-sub-title group-hover:bg-primary-dark">
          <img className="object-center" src={icon} alt="serviceIcon" />
        </div>
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-semibold text-title">{title}</h1>
        <p className="text-sm font-normal text-sub-title">{details}</p>
      </div>
    </div>
  );
}
