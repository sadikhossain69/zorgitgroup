import aboutUsImage from '@images/aboutUsImage.png';
import mobileAboutImage from '@images/mobileAboutImage.png';
import SectionLayout from '@/components/layouts/SectionLayout';
import { Link } from 'react-router-dom';

interface AboutUsProps {
  showButton?: boolean,
  showExtraText?: boolean
}

const AboutUs = ({ showButton = true, showExtraText = false }: AboutUsProps) => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 gap-8 mx-8 mt-5 mb-8 md:grid-cols-2 md:gap-14 xl:gap-24 sm:mx-0">
        <div>
          <img src={aboutUsImage} alt="aboutUsImage" className="hidden md:block" />
          <img
            src={mobileAboutImage}
            alt="mobiAboutImage"
            className="block object-cover w-full md:hidden max-h-96"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[30px] xl:text-[48px] font-semibold mb-3 ">About Us</h1>
          <div className="text-sm md:text-sm xl:text-base">
            <p className="mb-3 md:mb-3 lg:mb-5">
              Zorg IT Group is a global Digital Solutions Company, 19 highly professional, working in 4 different locations (USA, UAE, Canada, India, and Bangladesh). We have served more than 45 clients from 4 countries so far. Our service includes website design & development, Mobile apps design & development, software development, digital marketing, graphics & motion graphics design.
            </p>
            <p>
              Zorg IT is globally recognized for its innovative approach towards delivering business value and its commitment to sustainability. As we grow, we remain true to our original vision: quality code, technological innovation, collaborative creation, and ultimate client satisfaction.
            </p>
            {
              showExtraText ? <div>
                <p className="my-3 md:mb-3 lg:my-5">
                  Zorg IT Group has a proven track record of growing businesses by giving digital solutions. We will ensure that your business gets the maximum possible growth within your budget. We blend our professional talent, innovative ideas, world-class expertise, and unbeatable strategies to empower your digital presence to worldwide customers. Get in touch with our expert team today to start your project.
                </p>
              </div> : <></>
            }
          </div>
          {
            showButton ? <div className="mt-8 lg:mt-10">
              <Link to="/about-us" className="px-10 py-2 btn-primary md:py-3 md:px-12">
                Explore
              </Link>
            </div> : <></>
          }
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
