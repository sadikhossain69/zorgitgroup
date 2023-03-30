import Title from '@/components/common/Title';
import { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider, { CustomArrowProps } from 'react-slick';
import reviews from './data';
export default function Testimonials() {
  const NextArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <IoIosArrowBack {...props} fill="#333" />
  );
  const PrevArrow = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <IoIosArrowForward {...props} fill="#333" />
  );
  const TestimonialSliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
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

  const customSlider = useRef<any>(null);

  return (
    <section id='clients' className="relative mx-auto overflow-hidden max-w-screen-2xl testimonial-client custom-slider">
      <Title title="What Our Clients Say About Us" />
      <div className="px-8 sm:mb-20 lg:mt-4">
        <Slider ref={(slider) => (customSlider.current = slider)} {...TestimonialSliderSettings}>
          {reviews?.map((review) => (
            <div className={`z-10 w-full p-5 border-2 relative mt-16 lg:mt-32`} key={review.id}>
              <div key={review.id} className="flex flex-col">
                <div>
                  <img
                    className="absolute w-20 top-[0] -translate-y-[50%] left-[50%] -translate-x-[50%] h-20 rounded-full"
                    src={review.img}
                    alt="Client"
                  />
                </div>
                <p className="text-[18px] text-justify py-8" style={{ textAlignLast: 'center' }}>
                  {review.review.substring(0, 150)}
                  {review.review.length < 150 ? ' ' : '...'}
                </p>
                <hr />
                <div className="pt-6 text-center">
                  <p className="overflow-hidden font-bold capitalize whitespace-nowrap text-ellipsis">
                    {review.name}
                  </p>
                  <p className="overflow-hidden capitalize whitespace-nowrap text-ellipsis">
                    {review.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-0 lg:bottom-[14%] mb-4 sm:left-[50%] sm:-translate-x-[50%] flex-row justify-center hidden sm:flex">
        <button
          className="w-8 h-8 mr-4 text-black transition-all duration-300 bg-white rounded-full hover:text-white drop-shadow-md hover:bg-primary-light"
          onClick={() => customSlider?.current.slickPrev()}
        >
          <AiOutlineArrowLeft className="mx-auto" />
        </button>
        <button
          className="w-8 h-8 text-black transition-all duration-300 bg-white rounded-full hover:text-white drop-shadow-md hover:bg-primary-light"
          onClick={() => customSlider?.current.slickNext()}
        >
          <AiOutlineArrowRight className="mx-auto" />
        </button>
      </div>
    </section>
  );
}
