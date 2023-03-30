import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../types/project';

interface SingleProjectProps {
  project: Project;
  children?: ReactNode;
}

export const SingleProject: React.FC<SingleProjectProps> = ({
  project: { _id, img, title, description, link },
}) => {
  return (
    <div className="w-full px-4" key={_id}>
      <div className="relative group overflow-hidden h-[400px] 2xl:h-[600px]">
        {/* Main Image */}
        <img
          className="object-cover w-full h-full transition duration-500 ease-in-out group-hover:scale-125"
          src={img}
          alt="Our Clients Project"
        />
        {/* Hover Overlay */} {/* Black overlay background */}
        <div className="absolute top-0 left-0 opacity-0 w-full h-full p-6  transition-all duration-500 group-hover:bg-[#000000bd] text-white group-hover:opacity-100">
          {/* Over data container */}
          <div className="flex flex-col justify-between w-full h-full p-2 border-2 border-primary-light">
            <div>
              <Link to="/">
                <h4 className="overflow-hidden text-2xl font-semibold capitalize transition-all duration-300 cursor-pointer hover:text-primary whitespace-nowrap text-ellipsis">
                  {title}
                </h4>
              </Link>
              <p className="py-2">
                {description.substring(0, 150)}
                {description.length < 150 ? ' ' : '...'}
              </p>
            </div>
            <a href={link} target={'_blank'}>
              <button className="mr-auto font-bold hover:text-primary">Read More &#62;</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
