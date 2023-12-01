import React, { useEffect, useState } from "react";
import laptop from "./../../assets/images/laptop.png";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Hero = ({ scrollRefs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,
    },
  });
  const fadeDes = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,

    },
  });
  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-40%)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine,

    },
  });
  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 800,
      delay: 800,
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

  const handleNavigateToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
   
  };

  return (
    <section
      className=" md:h-screen page-section pt-[40px] flex md:flex-row flex-col-reverse justify-center md:justify-between items-center "
      ref={ref}
    >
      <div className="flex md:w-[55%] w-[100%] flex-col md:items-start items-center md:mt-[50px] mt-[30px] ">
        <animated.div
          className="font-SatoshiBold md:text-[80px] md:leading-[100px] text-[40px] leading-[50px] text-center  md:text-start"
          style={fadeTitle}
        >
          We're Digital <br />{" "}
          <span className="text-theme-color">Products</span> Creators
        </animated.div>
        <animated.div
          className="md:pt-[20px] pt-[10px]  font-SatoshiMedium md:text-[20px] md:leading-[30px] text-[18px] leading-[24px] text-center  md:text-start md:tracking-[0.4px]"
          style={fadeDes}
        >
          Proper business solutions for your business <br /> strategy and
          operations
        </animated.div>

        <animated.button
          className="hero-button mt-[40px] font-[500] bg-[#FDBB4D] w-[250px]  rounded-[50px] border-[1px] p-[14px] pl-[34px] pr-[34px]  font-SatoshiRegular text-[24px] leading-[36px] text-center "
          style={fadeLeft} onClick={() => handleNavigateToSection(scrollRefs.contact)}
        >
          Let's get Started
        </animated.button>
      </div>
      <div className="flex md:w-[40%]  w-[100%] md:flex-row gap-[4%] md:mt-[130px] ">
        <animated.div
          className="md:w-[100%] w-[100%] rounded-[18px] b-shadow overflow-hidden"
          style={fadeRight}
        >
          <img
            src={laptop}
            className="w-[100%] md:h-[80vh] lg:h-auto h-[356px] object-cover"
            alt=""
          />
        </animated.div>
      </div>
    </section>
  );
};
