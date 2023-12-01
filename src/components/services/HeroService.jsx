import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import hero from "./../../assets/images/service-hero.png";

export const HeroService = () => {
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
    transform: isVisible ? "translateX(0)" : "translateX(-100%)",
    config: {
      duration: 800,
      delay: 800,
      easing: easings.easeInSine, 
   
    },
  });
  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(10%)",
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
  return (
    <section className=" md:h-screen page-section pt-[40px] flex md:flex-row flex-col-reverse justify-center md:justify-between items-center " ref={ref}>
      <div className="flex md:w-[55%] w-[100%] flex-col md:items-start items-center md:mt-[50px] mt-[30px] ">
        <animated.div className="font-SatoshiBold md:text-[80px] md:leading-[100px] text-[40px] leading-[50px] text-center  md:text-start" style={fadeTitle}>
          Our <span className="text-theme-color">Services</span> <br />
          and Expertise
        </animated.div>
        <animated.div className="md:pt-[20px] pt-[10px]  font-SatoshiMedium md:text-[20px] md:leading-[30px] text-[18px] leading-[24px] text-center  md:text-start md:tracking-[0.4px]" style={fadeDes}>
          At Asipiya Soft Solutions, we empower your business{" "}
          <br className="hidden md:block" /> for success in the digital age.
          Join us on an innovative journey <br className="hidden md:block" />{" "}
          towards efficiency and thrive together in shaping your future.
        </animated.div>
      </div>
      <div className="flex md:w-[50%] items-center justify-center  w-[100%] md:flex-row gap-[4%] md:mt-[40px] ">
        <animated.div className="md:w-[90%] w-[100%] rounded-[18px] b-shadow overflow-hidden" style={fadeRight}>
          <img
            src={hero}
            className="w-[100%] md:h-[100%] h-[356px] object-cover"
            alt=""
          />
        </animated.div>
      </div>
    </section>
  );
};
