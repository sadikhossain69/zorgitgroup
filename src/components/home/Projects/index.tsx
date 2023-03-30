import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SingleProject } from '../../common/SingleProject';
import Title from '../../common/Title';
import projectsData from './data';

export default function Projects() {
  const NextArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <IoIosArrowBack {...props} fill="#333" />
  );
  const PrevArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <IoIosArrowForward {...props} fill="#333" />
  );
  const ProjectsSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <NextArrow />,
          nextArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <section className="my-16">
      <Title title="Our Work Portfolio" />
      <h5 className="px-10 text-center">
        Some Selected works from our clients. We have worked with many clients and have delivered
      </h5>
      <div className="mx-8 mt-10 xl:ml-32 2xl:ml-80 custom-slider">
        <Slider {...ProjectsSliderSettings}>
          {projectsData.map((project) => (
            <SingleProject key={project._id} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
