import React, { useEffect, useState } from "react";
import arrow from "./../../assets/images/icons/arrow.png";


export const Arrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Show the button when the user scrolls down 100 pixels
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed cursor-pointer bottom-[20px] z-[100] flex items-center justify-center right-[20px] md:w-[40px] w-[60px] md:h-[40px] h-[60px] bg-theme-color scroll-to-top-button ${isVisible ? "visible" : ""
        }`}
      onClick={scrollToTop}
    >
      <img src={arrow} className=" md:w-[50px]" alt="" />
    </div>
  );
};
