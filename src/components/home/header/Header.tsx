import SectionLayout from '@/components/layouts/SectionLayout';
import IconGroup from '../../common/IconGroup';
import logo from '@images/logo.png';
import brandLogo from '@images/brandLogo.png';

export default function Header() {
  return (
    <header className="grid md:grid-cols-2 sm:grid-cols-1 md:bg-[url('@images/headerLeftBg.png')] bg-cover bg-no-repeat bg-top-left">
      <div className="flex items-center ">
        <SectionLayout classNames="px-5 md:pl-14 md:pr-0 lg:pl-32 lg:pr-0 2xl:pl-64">
          <h1 className="mt-6 text-2xl sm:text-4xl font-semibold md:mt-[5rem] text-tertiary">
            Let's build a product <br /> that gets results!
          </h1>
          <p className="my-6 text-lg text-justify text-tertiary">
            Zorg IT Group openly collaborates with ambitious startups and companies to plan, build,
            and grow tech products. Our partnership goes far beyond delivering features; we make
            sure we solve the right problem and build a product that brings true value to users.
          </p>
          <button className="w-full px-10 py-2 text-lg font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-dark bg-primary-dark md:w-3/5 btn btn-primary">
            Let’s partner
          </button>
          <div className="flex justify-center md:justify-start">
            <div className="flex gap-10 mt-6 md:gap-2 sm:gap-12">
              <IconGroup />
            </div>
          </div>
        </SectionLayout>
      </div>
      <div className="order-first md:ml-16 lg:ml-32 md:order-last">
        <div className="bg-[url('@images/HeroImage.png')] w-full h-max bg-top bg-no-repeat bg-cover">
          <div className="bg-red-600/75  w-full h-[700px] flex flex-col justify-center items-center">
            <div>
              <img className="w-2/3 m-auto" src={logo} alt="logo" />
            </div>
            <div>
              <img className="w-2/3 m-auto" src={brandLogo} alt="brandLogo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
