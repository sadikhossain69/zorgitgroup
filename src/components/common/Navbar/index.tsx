import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '@images/brand-logo.png';
import IconGroup from '../IconGroup';
import NavLink, { links } from './NavLink';
import smallLogo from "@images/smallLogo.jpeg"
import { useWindowSize } from '@react-hook/window-size'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [width, height] = useWindowSize();

  const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', ChangeBackground);
  }, [window.scrollY]);

  return (
    <>
      <nav
        className={`fixed bg-white md:bg-transparent ${isScrolling && 'md:bg-white shadow'
          } top-0 z-50 flex flex-wrap items-center justify-between w-full mb-3 lg:px-10 md:px-3 `}
      >
        <div
          className={`md:container flex flex-wrap items-center justify-between mx-auto ${navbarOpen && 'h-screen md:h-auto'
            } ${!navbarOpen && 'w-full'}`}
        >
          <div className="relative z-50 flex justify-between w-full px-2 md:px-0 md:w-auto md:static">
            <Link
              className={`inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase whitespace-nowrap `}
              to="/"
            >
              <img className={`${width < 768 && "w-44"}`} src={`${width < 768 ? smallLogo : Logo}`} alt="company logo" />
            </Link>
            <button
              className={`${navbarOpen ? `rotate-180` : `-rotate-180`
                }  transition-transform ease-in-out duration-700 block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer md:hidden focus:outline-none`}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <MdClose /> : <FiMenu />}
            </button>
          </div>
          <div
            className={`md:flex flex-col w-screen md:w-auto md:mr-auto ${navbarOpen ? 'h-full' : 'h-0 md:-mt-12'
              }`}
            id="example-navbar-danger"
          >
            <ul
              className={`flex w-full md:mt-0 md:bg-transparent transition-all bg-white md:transition-none ease-in-out duration-700 flex-col pt-5 list-none md:pt-0 md:flex-row lg:ml-auto ${navbarOpen
                ? 'translate-y-0 opacity-100'
                : ' -translate-y-full opacity-0 md:opacity-100 md:translate-y-0 w-full'
                }`}
            >
              {links.map((link) => (
                <NavLink key={link.title} title={link.title} to={link.to} />
              ))}
            </ul>
            {navbarOpen && (
              <div className="block px-3 pt-24 md:hidden">
                <p className="pb-3 text-base capitalize">Ready to partner?</p>
                <a href="https://wa.me/message/VUQHDAMVQEK5A1" target={"_blank"}>
                  <button className="w-full px-10 py-2 text-lg font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:text-primary-dark bg-primary-dark md:w-3/5 btn btn-primary">
                    Let’s partner
                  </button>
                </a>
                <div className="flex justify-center md:justify-start">
                  <div className="flex gap-10 mt-6 md:gap-2 sm:gap-12">
                    <IconGroup />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:block mt-2">
            <a href='https://wa.me/message/VUQHDAMVQEK5A1' target={"_blank"} className="transition duration-300 bg-[#252525] text-white hover:bg-primary-dark  hover:text-white px-4 btn font-medium lg:text-[20px] md:text-[16px]">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
