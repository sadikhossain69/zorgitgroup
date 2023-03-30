import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Title from '../../common/Title';
import SectionLayout from '../../layouts/SectionLayout';
import clients from './data';

export default function ClientsSlider() {
  const clientsSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <SectionLayout classNames="hidden sm:block mt-6">
      <Title title="our trusted clients" />
      <h5 id='clients' className="mb-10 text-center">Trusted by more than 50 companies all over the world.</h5>
      <Slider {...clientsSliderSettings}>
        {clients.map((client) => (
          <a key={client._id} href={client.url} target="_blank" rel="noreferrer">
            <div className="flex items-center px-5">
              <img src={client.image} className="object-contain w-full h-28" alt="clients logo" />
            </div>
          </a>
        ))}
      </Slider>
    </SectionLayout>
  );
}
