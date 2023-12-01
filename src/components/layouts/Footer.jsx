import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import logo from "./../../assets/images/logo-color.png";
import mail from "./../../assets/images/icons/mail.png";
import call from "./../../assets/images/icons/call.png";
import { Link, useNavigate } from "react-router-dom";

export const Footer = ({ scrollRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 500;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 1800,
    },
  });

  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-20%)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeContent = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,

      easing: easings.easeInSine,
    },
  });
  const fadeContentBottom = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 200,
      delay: prevDelay + 800,
      easing: easings.easeInSine,
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

  const navigate = useNavigate();
  const handleNavigateToSection = (sectionRef) => {
    if (window.location.href.split("/").pop() !== "/") {
      console.log('first')
      navigate("/"); // Navigate to the home page if not already there
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <animated.section
      className="h-auto  flex flex-col pt-[60px]   items-center bg-[#1B1B1B] "
      ref={ref}
      style={fadeScreen}
    >
      <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center md:justify-between md:pl-[60px] pb-[60px] md:pb-[80px] md:pt-[40px] md:pr-[60px] pr-[20px] pl-[20px]">
        <animated.div className=" font-SatoshiBold text-[36px] leading-[54px] text-center md:text-start md:text-[48px] md:leading-[58px] text-white " style={fadeLeft}>
          LET’S DEVELOP,
          <br />
          LET’S COOPERATE!
        </animated.div>
        <animated.div className="border-t-[3px] border-[#FFFFFF] md:min-w-[377px] min-w-[125px] hidden md:block  " style={fadeContent} />
        <div className="border-l-[3px] border-[#FFFFFF]  min-h-[125px] md:hidden   " />
        <a href="mailto:info@asipiya.lk">
          <animated.button className="  rounded-[100px] border-[1px] border-[#FDBB4D] p-[20px] pl-[72px] pr-[72px] font-SatoshiRegular text-[24px] leading-[30px] tracking-[0.8px] uppercase  text-[#FDBB4D]  " style={fadeRight}>
            Let's Talk
          </animated.button>
        </a>
      </div>
      <div className="border-t-[10px] border-[#FFFFFF] md:min-w-[377px] w-[100%]  " />
      <div className=" w-full flex flex-col md:flex-row md:justify-between  md:items-end md:pl-[60px] pb-[60px] md:pb-[40px] md:pt-[40px] md:pr-[60px] pt-[50px] pr-[20px] pl-[20px]">
        <animated.div className="md:w-[40%] w-full flex flex-col  gap-2 items-center md:items-start" style={fadeContentBottom}>
          <img src={logo} className=" w-[155px]" alt="" />
          <div className=" font-SatoshiRegular text-[16px] leading-[30px] md:text-start text-center  text-white">
            Your trusted partner for cutting-edge software solutions.
            Streamlining business operations at Asipiya Soft Solutions PVT Ltd
          </div>
          <div className="flex md:pt-1 pt-[20px] gap-2 text-[16px]">
            <img src={mail} className=" w-[20px] h-[20px]" alt="" />
            <span className="text-white tracking-[0.3px] text-[16px]">
              {" "}
              info@asipiya.lk
            </span>
          </div>
          <div className="flex gap-2 text-[16px]">
            <img src={call} className=" w-[20px] h-[20px]" alt="" />
            <span className="text-white tracking-[0.3px] text-[16px]">
              + 94 74 137 0008
            </span>
          </div>
        </animated.div>
        <animated.div className="md:w-[30%] w-full md:pt-1 pt-[40px] md:items-start  flex flex-col md:flex-row md:justify-start md:gap-[30%] " style={fadeContentBottom}>
          <div className="flex gap-3  flex-col items-center  md:items-start font-SatoshiRegular md:text-[16px] text-[16px] leading-[24px] text-white font-[400] tracking-[0.6px]">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <span className="hover:underline cursor-pointer" onClick={() => handleNavigateToSection(scrollRefs.aboutUs)}>About Us</span>
            <span className="hover:underline cursor-pointer" onClick={() => handleNavigateToSection(scrollRefs.whyUs)}>Why Us</span>
            <span className="hover:underline cursor-pointer" onClick={() => handleNavigateToSection(scrollRefs.contact)}>Contact</span>
          </div>
          <div className="flex gap-3 flex-col md:pt-1 pt-[40px] font-SatoshiRegular items-center  md:items-start md:text-[16px] text-[16px] leading-[24px] text-white font-[400] tracking-[0.6px]">
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span>WhatsApp</span>
            <span>Instagram</span>
          </div>

        </animated.div>
      </div>
      <div className="flex w-full justify-center items-center p-[10px] text-[#ffffffaf] font-SatoshiMedium md:text-[14px] md:leading-[19px]">
        All rights reserved © 2023
      </div>
    </animated.section>
  );
};
