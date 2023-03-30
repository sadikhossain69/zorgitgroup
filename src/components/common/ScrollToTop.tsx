import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50">
      {isVisible && 
        <div  onClick={scrollToTop}>
          <IoIosArrowDropup className="bg-red-400 h-8 w-8 md:h-12 md:w-12 text-white rounded-[50%]"/>
      </div>}
    </button>
  );
}