import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import logo from "./../../assets/images/logo.png";
import menu from "./../../assets/images/icons/menu.png";
import close from "./../../assets/images/icons/clear.png";

export const Header = ({ scrollRefs }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeNavigation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 800,

    },
  });


  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const [visibleMObile, setVisibleMObile] = useState(false);

  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";

  };


  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [])


  const handleNavigateToSection = (sectionRef) => {
    if (window.location.href.split("/").pop() !== "/") {
      console.log('first')
      navigate("/"); // Navigate to the home page if not already there
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleNavigateToSectionMobile = (sectionRef) => {
    if (window.location.href.split("/").pop() !== "/") {
      console.log('first')
      navigate("/"); // Navigate to the home page if not already there
     
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      handleFadeIn();
    }
  };
  return (
    <animated.section
      className="z-50 w-full relative md:absolute t-0 left-0  flex md:justify-between justify-between items-center  md:pl-[60px] md:pr-[60px] p-5 md:bg-transparent border-b-[0.6px] border-[#00000080] md:border-none "
      ref={ref}
      style={fadeNavigation}
    >
      <Link to="/" className="">
        <img src={logo} className="md:w-[138px] w-[88px]  " alt="" />
      </Link>
      <img src={menu} className="md:hidden w-[25px]  " onClick={handleFadeIn} alt="" />
      <div className="hidden md:flex justify-between md:justify-center ">
        <ul className="hidden md:flex gap-[60px]">
          <li
            className="nav-item font-SatoshiMedium font-[500] text-[16px] text-black leading-[19px] cursor-pointer" >
            <Link to='/'>Home</Link>
          </li>
          <li
            className="nav-item font-SatoshiMedium font-[500] text-[16px] text-black leading-[19px] cursor-pointer" >
            <Link to='/services'>Services</Link>
          </li>
          <li
            className="nav-item font-SatoshiMedium font-[500] text-[16px] text-black leading-[19px] cursor-pointer " >
            <span onClick={() => handleNavigateToSection(scrollRefs.aboutUs)}>About Us</span>
          </li>
          <li
            className="nav-item font-SatoshiMedium font-[500] text-[16px] text-black leading-[19px] cursor-pointer " >
            <span onClick={() => handleNavigateToSection(scrollRefs.whyUs)}>Why Us</span>
          </li>
          <li
            className="nav-item font-SatoshiMedium font-[500] text-[16px] text-black leading-[19px] cursor-pointer " >
            <span onClick={() => handleNavigateToSection(scrollRefs.contact)}>Contact</span>
          </li>

        </ul>
      </div>
      <a href="mailto:info@asipiya.lk" className="md:block hidden ">
        <button className=" button-talk rounded-[30px] border-[1px] border-[#1B1B1B] p-[10px] pl-[32px] pr-[32px]  font-SatoshiRegular text-[16px] leading-[30px] text-[#1B1B1B]  ">
          Let's Talk
        </button>
      </a>

      <div className={`fixed w-full inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `} >
        <div className="w-full flex justify-between items-center">
          <Link className="">
            <img src={logo} className=" w-[150px]  " alt="" />
          </Link>
          <img src={close} className="md:hidden w-[35px]  " alt="" onClick={handleFadeIn} />

        </div>
        <div className="w-full flex mt-[80px] flex-col gap-3">
          <div className=" p-[16px] pb-[25px] font-SatoshiMedium text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]">
            <Link to="/">
              Home
            </Link>
          </div>
          <div className=" p-[16px] pb-[25px] font-SatoshiMedium text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]">
            <Link to="/services">
              Services
            </Link>
          </div>
          <div className=" p-[16px] pb-[25px] font-SatoshiMedium text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]" onClick={() => handleNavigateToSectionMobile(scrollRefs.aboutUs)}>
            About Us
          </div>
          <div className=" p-[16px] pb-[25px] font-SatoshiMedium text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]"  onClick={() => handleNavigateToSectionMobile(scrollRefs.whyUs)}>
            Why Us
          </div>
          <div className=" p-[16px] pb-[25px] font-SatoshiMedium text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]" onClick={() => handleNavigateToSectionMobile(scrollRefs.contact)}>
            Contact
          </div>
        </div>
      </div>
    </animated.section>
  );
};
